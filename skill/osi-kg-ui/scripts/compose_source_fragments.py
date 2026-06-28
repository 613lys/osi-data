from __future__ import annotations

import argparse
from pathlib import Path
from typing import Any

try:
    import yaml
except ImportError as exc:  # pragma: no cover - friendly local failure
    raise SystemExit("PyYAML is required. Install with: pip install pyyaml") from exc


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Compose OSI KG source fragments into one source YAML.")
    parser.add_argument("--fragments", required=True, help="Directory containing source fragment YAML files.")
    parser.add_argument("--output", required=True, help="Composed source YAML path.")
    return parser.parse_args()


def load_yaml(path: Path) -> Any:
    data = yaml.safe_load(path.read_text(encoding="utf-8"))
    return data if data is not None else {}


def sorted_yaml_files(path: Path) -> list[Path]:
    if not path.exists():
        return []
    return sorted(item for item in path.glob("*.yaml") if item.is_file())


def load_many(path: Path) -> list[dict[str, Any]]:
    return [load_yaml(item) for item in sorted_yaml_files(path)]


def load_concepts(path: Path) -> list[dict[str, Any]]:
    concepts: list[dict[str, Any]] = []
    for item_path in sorted_yaml_files(path):
        item = load_yaml(item_path)
        if "concept_mapping" in item:
            raise SystemExit(
                f"{item_path} contains inline concept_mapping. Put mappings under raw/fragments/concept_mappings/*.yaml instead."
            )
        concepts.append(item)
    return concepts


def contains_cjk(value: Any) -> bool:
    return any("\u4e00" <= char <= "\u9fff" for char in str(value or ""))

def load_list_or_files(file_path: Path, dir_path: Path, key: str | None = None) -> list[dict[str, Any]]:
    if dir_path.exists():
        return load_many(dir_path)
    if not file_path.exists():
        return []
    data = load_yaml(file_path)
    if key and isinstance(data, dict):
        return data.get(key) or []
    if isinstance(data, list):
        return data
    return []



def relationship_names(concept: dict[str, Any]) -> set[str]:
    return {item.get("name") for item in concept.get("relationships") or [] if item.get("name")}


def relationship_targets(concept: dict[str, Any]) -> dict[str, str]:
    targets: dict[str, str] = {}
    for relationship in concept.get("relationships") or []:
        name = relationship.get("name")
        roles = relationship.get("roles") or []
        target = roles[-1].get("concept") if roles and isinstance(roles[-1], dict) else None
        if name and target:
            targets[name] = target
    return targets


def semantic_value_references(base_entities: list[dict[str, Any]], entity_types: list[dict[str, Any]]) -> set[str]:
    base_by_name = {item.get("name"): item for item in base_entities if item.get("name")}
    refs: set[str] = set()
    for concept in [*base_entities, *entity_types]:
        name = concept.get("name")
        if not name:
            continue
        for relationship in concept.get("relationships") or []:
            rel_name = relationship.get("name")
            if rel_name:
                refs.add(f"{name}.{rel_name}")
        for base_name in concept.get("extends") or []:
            for rel_name in relationship_names(base_by_name.get(base_name, {})):
                refs.add(f"{name}.{rel_name}")
    return refs


def mapping_root_referents(mapping: dict[str, Any]) -> set[str]:
    names: set[str] = set()
    for object_mapping in mapping.get("object_mappings") or []:
        for referent in object_mapping.get("referent_mappings") or []:
            if referent.get("relationship"):
                names.add(referent["relationship"])
    return names


def mapping_child_relationships(mapping: dict[str, Any]) -> set[str]:
    names: set[str] = set()
    def walk_children(items: list[dict[str, Any]]) -> None:
        for item in items or []:
            if item.get("relationship"):
                names.add(item["relationship"])
            walk_children(item.get("children") or [])
    for link_mapping in mapping.get("link_mappings") or []:
        walk_children(link_mapping.get("children") or [])
    return names


def mapping_child_items(mapping: dict[str, Any]) -> list[dict[str, Any]]:
    children: list[dict[str, Any]] = []
    def walk(items: list[dict[str, Any]]) -> None:
        for item in items or []:
            children.append(item)
            walk(item.get("children") or [])
    for link_mapping in mapping.get("link_mappings") or []:
        walk(link_mapping.get("children") or [])
    return children


def walk_mapping_expressions(value: Any, path: str = "") -> list[tuple[str, Any]]:
    found: list[tuple[str, Any]] = []
    if isinstance(value, dict):
        for key, child in value.items():
            child_path = f"{path}.{key}" if path else key
            if key == "expression":
                found.append((child_path, child))
            found.extend(walk_mapping_expressions(child, child_path))
    elif isinstance(value, list):
        for index, child in enumerate(value):
            found.extend(walk_mapping_expressions(child, f"{path}[{index}]"))
    return found


def validate_concept_mapping_expressions(
    mappings: list[dict[str, Any]],
    datasets: list[dict[str, Any]],
    metrics: list[dict[str, Any]],
    errors: list[str],
) -> None:
    dataset_fields: dict[str, set[str]] = {}
    for dataset in datasets:
        name = dataset.get("name")
        if not name:
            continue
        dataset_fields[name] = {field.get("name") for field in dataset.get("fields") or [] if field.get("name")}

    metric_names = {metric.get("name") for metric in metrics if metric.get("name")}

    for mapping in mappings:
        concept = mapping.get("concept", "<unknown>")
        for expr_path, expr in walk_mapping_expressions(mapping):
            if isinstance(expr, dict):
                errors.append(
                    f"Concept mapping {concept} {expr_path} must be a semantic dataset field reference, not a SQL/dialect expression object."
                )
                continue
            if not isinstance(expr, str) or expr.count(".") != 1:
                errors.append(
                    f"Concept mapping {concept} {expr_path} must use dataset.field form, got {expr!r}."
                )
                continue
            dataset_name, field_name = expr.split(".", 1)
            if dataset_name == "metric":
                if field_name not in metric_names:
                    errors.append(
                        f"Concept mapping {concept} {expr_path} references unknown semantic metric {field_name}."
                    )
                continue
            if dataset_name not in dataset_fields:
                errors.append(
                    f"Concept mapping {concept} {expr_path} references unknown semantic dataset {dataset_name}."
                )
            elif field_name not in dataset_fields[dataset_name]:
                errors.append(
                    f"Concept mapping {concept} {expr_path} references unknown field {dataset_name}.{field_name}."
                )


def validate_mapping_annotations(
    datasets: list[dict[str, Any]],
    annotations: list[dict[str, Any]],
    errors: list[str],
) -> None:
    dataset_names = {item.get("name") for item in datasets if item.get("name")}
    for index, annotation in enumerate(annotations, start=1):
        concept = annotation.get("concept")
        dataset = annotation.get("dataset")
        description = str(annotation.get("description") or "").strip()
        if not concept:
            errors.append(f"mapping_edge_annotations[{index}] is missing concept.")
        if not dataset:
            errors.append(f"mapping_edge_annotations[{index}] is missing dataset.")
        elif dataset not in dataset_names:
            errors.append(f"mapping_edge_annotations[{index}] references unknown dataset {dataset}.")
        if not description:
            errors.append(f"mapping_edge_annotations[{index}] is missing description.")


def validate_mapping_annotation_coverage(
    mappings: list[dict[str, Any]],
    annotations: list[dict[str, Any]],
    errors: list[str],
) -> None:
    annotated = {
        (item.get("concept"), item.get("dataset"))
        for item in annotations
        if item.get("concept") and item.get("dataset") and str(item.get("description") or "").strip()
    }
    required: set[tuple[str, str]] = set()
    for mapping in mappings:
        concept = mapping.get("concept")
        if not concept:
            continue
        for _expr_path, expr in walk_mapping_expressions(mapping):
            if not isinstance(expr, str) or expr.count(".") != 1:
                continue
            dataset_name, _field_name = expr.split(".", 1)
            if dataset_name != "metric":
                required.add((concept, dataset_name))
    missing = sorted(required - annotated)
    for concept, dataset_name in missing:
        errors.append(
            f"Concept mapping {concept} -> dataset {dataset_name} is missing mapping_edge_annotations description. "
            "Do not let the UI generate generic Concept -> Dataset descriptions."
        )

def validate_report_requirements(requirements: list[dict[str, Any]], base_entities: list[dict[str, Any]], entity_types: list[dict[str, Any]], metrics: list[dict[str, Any]], errors: list[str]) -> None:
    valid_refs = semantic_value_references(base_entities, entity_types)
    for requirement in requirements:
        name = requirement.get("name", "<unknown>")
        if not contains_cjk(name):
            errors.append(f"Report Requirement name {name} must be Chinese business-readable text, not an English technical id.")
        description = str(requirement.get("description") or "").strip()
        if not description:
            errors.append(f"Report Requirement {name} is missing description.")
        elif len(description) < 30:
            errors.append(
                f"Report Requirement {name} description must preserve the regulatory/BRD requirement text, including non-data obligations when present."
            )
        source = requirement.get("source")
        if not source:
            errors.append(f"Report Requirement {name} is missing required source raw resource citation.")
        elif not isinstance(source, str):
            errors.append(f"Report Requirement {name} source must be one concise string, not a nested object.")
        if not str(requirement.get("SLA") or "").strip():
            errors.append(f"Report Requirement {name} is missing required SLA.")
        forbidden = [key for key in ("regulator", "regulation", "reporting_frequency", "reporting_grain") if key in requirement]
        if forbidden:
            errors.append(f"Report Requirement {name} uses deprecated fixed fields: {forbidden}. Use description/source/SLA instead.")
        valid_entity_names = {item.get("name") for item in entity_types if item.get("name")}
        semantic_scope = requirement.get("semantic_scope") or {}
        for concept_entry in semantic_scope.get("concepts") or []:
            if not isinstance(concept_entry, dict):
                errors.append(f"Report Requirement {name} semantic_scope.concepts must use objects with name and description, not plain strings.")
                continue
            concept_name_value = str(concept_entry.get("name") or concept_entry.get("concept") or "").strip()
            concept_description = str(concept_entry.get("description") or "").strip()
            if not concept_name_value:
                errors.append(f"Report Requirement {name} semantic_scope.concepts item is missing name.")
            elif concept_name_value not in valid_entity_names:
                errors.append(f"Report Requirement {name} semantic_scope concept {concept_name_value} must be an existing EntityType.")
            if not concept_description:
                display_name = concept_name_value or "<unknown>"
                errors.append(f"Report Requirement {name} semantic_scope concept {display_name} is missing description for the Requirement -> Entity edge.")
            elif len(concept_description) < 16:
                errors.append(f"Report Requirement {name} semantic_scope concept {concept_name_value} description must explain why this requirement needs that EntityType.")
        for field in ((requirement.get("semantic_scope") or {}).get("required_fields") or []):
            field_name = field.get("name", "<unknown>")
            field_description = str(field.get("description") or "").strip()
            if not field_description:
                errors.append(f"Report Requirement {name} required field {field_name} is missing Chinese description.")
            elif len(field_description) < 12:
                errors.append(f"Report Requirement {name} required field {field_name} description must explain the requirement data item, not just repeat the field name.")
            semantic_ref = str(field.get("semantic_reference") or "").strip()
            if not semantic_ref:
                errors.append(f"Report Requirement {name} required field {field_name} is missing semantic_reference.")
            elif semantic_ref not in valid_refs:
                errors.append(f"Report Requirement {name} required field {field_name} semantic_reference {semantic_ref} must resolve to an EntityType-owned value field. Do not point requirement fields directly at metric.<name>.")
            extra = [key for key in ("concept", "relationship", "value_concept", "purpose") if key in field]
            if extra:
                errors.append(f"Report Requirement {name} required field {field_name} has redundant fields {extra}; keep only Chinese name, description, semantic_reference, and required.")
        for calc in requirement.get("calculations") or []:
            calc_name = calc.get("name", "<unknown>")
            calc_description = str(calc.get("description") or "").strip()
            if not calc_description:
                errors.append(f"Report Requirement {name} calculation {calc_name} is missing Chinese description.")
            output_ref = str(calc.get("output") or "").strip()
            if not output_ref:
                errors.append(f"Report Requirement {name} calculation {calc_name} is missing output semantic_reference.")
            elif output_ref not in valid_refs:
                errors.append(f"Report Requirement {name} calculation {calc_name} output {output_ref} must be an EntityType-owned value field, not metric.<name>.")
            for input_ref in calc.get("inputs") or []:
                if input_ref not in valid_refs:
                    errors.append(f"Report Requirement {name} calculation {calc_name} input {input_ref} must resolve to an EntityType-owned value field.")


def validate_report_data_logic(implementations: list[dict[str, Any]], datasets: list[dict[str, Any]], requirements: list[dict[str, Any]], errors: list[str]) -> None:
    dataset_fields = {dataset.get("name"): {field.get("name") for field in dataset.get("fields") or [] if field.get("name")} for dataset in datasets if dataset.get("name")}
    requirement_items: dict[str, set[str]] = {}
    for requirement in requirements:
        requirement_name = requirement.get("name")
        if not requirement_name:
            continue
        semantic_scope = requirement.get("semantic_scope") or {}
        names = {field.get("name") for field in semantic_scope.get("required_fields") or [] if field.get("name")}
        names.update(calc.get("name") for calc in requirement.get("calculations") or [] if calc.get("name"))
        requirement_items[requirement_name] = names
    for implementation in implementations:
        name = implementation.get("name", "<unknown>")
        if not contains_cjk(name):
            errors.append(f"Report Data Logic name {name} must be Chinese business-readable text, not an English technical id.")
        forbidden = [key for key in ("owner", "schedule", "output_datasets") if key in implementation]
        if forbidden:
            errors.append(f"Report Data Logic {name} uses deprecated fields {forbidden}. Report Data Logic describes mappings and must not declare output/materialized datasets.")
        implements = implementation.get("implements")
        if not implements:
            errors.append(f"Report Data Logic {name} is missing implements.")
        elif implements not in requirement_items:
            errors.append(f"Report Data Logic {name} implements {implements}, but no Report Requirement with that exact Chinese name exists.")
        field_mappings = implementation.get("field_mappings") or []
        if not field_mappings:
            errors.append(f"Report Data Logic {name} must declare field_mappings.")
        mapped_requirement_fields = [field.get("requirement_field") for field in field_mappings if field.get("requirement_field")]
        if implements in requirement_items:
            expected = requirement_items[implements]
            actual = set(mapped_requirement_fields)
            missing = sorted(expected - actual)
            extra = sorted(actual - expected)
            duplicates = sorted({item for item in mapped_requirement_fields if mapped_requirement_fields.count(item) > 1})
            if missing or extra or duplicates:
                errors.append(
                    f"Report Data Logic {name} field_mappings must be one-to-one with Report Requirement {implements} fields/calculations. "
                    f"Missing={missing}; extra={extra}; duplicates={duplicates}."
                )
        for field in field_mappings:
            field_name = field.get("name", "<unknown>")
            dataset_name = field.get("dataset")
            dataset_field = field.get("dataset_field")
            if not contains_cjk(field_name):
                errors.append(f"Report Data Logic {name} field name {field_name} must be Chinese business-readable text.")
            if not dataset_name:
                errors.append(f"Report Data Logic {name} field {field_name} is missing dataset.")
            elif dataset_name not in dataset_fields:
                errors.append(f"Report Data Logic {name} references unknown dataset {dataset_name}.")
            if not dataset_field:
                errors.append(f"Report Data Logic {name} field {field_name} is missing dataset_field.")
            elif dataset_name in dataset_fields and dataset_field not in dataset_fields[dataset_name]:
                errors.append(f"Report Data Logic {name} field {field_name} dataset_field {dataset_name}.{dataset_field} does not exist in semantic_model dataset {dataset_name}.")
            description = str(field.get("description") or "").strip()
            if not description:
                errors.append(f"Report Data Logic {name} field {field_name} is missing Chinese description.")
            elif len(description) < 12:
                errors.append(f"Report Data Logic {name} field {field_name} description must explain the data logic mapping.")
            if not field.get("requirement_field"):
                errors.append(f"Report Data Logic {name} field {field_name} is missing requirement_field.")
            if field.get("semantic_reference"):
                errors.append(f"Report Data Logic {name} field {field_name} must not declare semantic_reference. Map to requirement_field and dataset/table fields only.")
            if not field.get("expression"):
                errors.append(f"Report Data Logic {name} field {field_name} is missing expression.")


def validate_dataset_descriptions(datasets: list[dict[str, Any]], errors: list[str]) -> None:
    weak_prefixes = (
        "source table for ",
        "physical table for ",
        "table for ",
        "source dataset for ",
    )
    for dataset in datasets:
        name = dataset.get("name", "<unknown>")
        description = str(dataset.get("description") or "").strip()
        if not description:
            errors.append(f"Dataset {name} is missing description.")
            continue
        lowered = description.lower()
        if len(description.split()) < 8 or lowered.startswith(weak_prefixes):
            errors.append(
                f"Dataset {name} description must describe the business row population and grain, not just say it is a source/physical table."
            )
        for field in dataset.get("fields") or []:
            field_name = field.get("name", "<unknown>")
            field_description = str(field.get("description") or "").strip()
            if not field_description:
                errors.append(f"Dataset {name} field {field_name} is missing description.")
            elif len(field_description.split()) < 6:
                errors.append(
                    f"Dataset {name} field {field_name} description must explain the field's dataset-level business meaning, not just restate the column name."
                )
            field_expression = field.get("expression")
            if field_expression in (None, ""):
                errors.append(f"Dataset {name} field {field_name} is missing required expression.")
            elif not isinstance(field_expression, dict):
                errors.append(f"Dataset {name} field {field_name} expression must be an OSI expression object with dialects[].")
            else:
                dialects = field_expression.get("dialects")
                if not isinstance(dialects, list) or not dialects:
                    errors.append(f"Dataset {name} field {field_name} expression object must include non-empty dialects[].")
                else:
                    for index, dialect in enumerate(dialects, start=1):
                        if not isinstance(dialect, dict):
                            errors.append(f"Dataset {name} field {field_name} expression dialects[{index}] must be an object.")
                            continue
                        if not dialect.get("dialect"):
                            errors.append(f"Dataset {name} field {field_name} expression dialects[{index}] is missing dialect.")
                        if not dialect.get("expression"):
                            errors.append(f"Dataset {name} field {field_name} expression dialects[{index}] is missing scalar SQL expression.")


def validate_ontology_relationship_descriptions(concepts: list[dict[str, Any]], errors: list[str]) -> None:
    for concept in concepts:
        concept_name = concept.get("name", "<unknown>")
        for relationship in concept.get("relationships") or []:
            rel_name = relationship.get("name", "<unknown>")
            description = str(relationship.get("description") or "").strip()
            if not description:
                errors.append(f"Concept {concept_name} relationship {rel_name} is missing description for the UI edge/profile.")
            elif len(description) < 8:
                errors.append(f"Concept {concept_name} relationship {rel_name} description is too short to explain the relationship context.")

def validate_mapping_coverage(
    base_entities: list[dict[str, Any]],
    entity_types: list[dict[str, Any]],
    datasets: list[dict[str, Any]],
    metrics: list[dict[str, Any]],
    mappings: list[dict[str, Any]],
    mapping_edge_annotations: list[dict[str, Any]] | None = None,
) -> None:
    base_by_name = {item.get("name"): item for item in base_entities if item.get("name")}
    mapping_by_concept = {item.get("concept"): item for item in mappings if item.get("concept")}
    errors: list[str] = []
    validate_dataset_descriptions(datasets, errors)
    validate_ontology_relationship_descriptions(base_entities + entity_types, errors)
    validate_concept_mapping_expressions(mappings, datasets, metrics, errors)
    validate_mapping_annotations(datasets, mapping_edge_annotations or [], errors)
    validate_mapping_annotation_coverage(mappings, mapping_edge_annotations or [], errors)

    for entity in entity_types:
        name = entity.get("name")
        if not name:
            continue
        mapping = mapping_by_concept.get(name)
        if not mapping:
            errors.append(f"EntityType {name} has no standalone concept_mappings/{name}_mapping.yaml entry.")
            continue

        identify_by = set(entity.get("identify_by") or [])
        root_referents = mapping_root_referents(mapping)
        if identify_by != root_referents:
            errors.append(
                f"EntityType {name} identify_by {sorted(identify_by)} must exactly match root object_mappings referents {sorted(root_referents)}."
            )

        inherited: set[str] = set()
        expected_targets: dict[str, str] = {}
        for base_name in entity.get("extends") or []:
            base = base_by_name.get(base_name, {})
            inherited.update(relationship_names(base))
            expected_targets.update(relationship_targets(base))
        declared = relationship_names(entity)
        expected_targets.update(relationship_targets(entity))
        required_relationships = inherited | declared
        mapped_relationships = mapping_child_relationships(mapping)
        missing = sorted(required_relationships - mapped_relationships)
        if missing:
            errors.append(f"EntityType {name} relationships missing link_mappings children: {missing}.")

        for child in mapping_child_items(mapping):
            relationship = child.get("relationship")
            if relationship not in expected_targets:
                continue
            object_mapping = child.get("object_mapping") or {}
            mapped_concept = object_mapping.get("concept")
            expected_concept = expected_targets[relationship]
            if not mapped_concept:
                errors.append(f"EntityType {name} mapping child {relationship} is missing object_mapping.concept.")
            elif mapped_concept != expected_concept:
                errors.append(
                    f"EntityType {name} mapping child {relationship} object_mapping.concept {mapped_concept} must match ontology relationship role concept {expected_concept}."
                )

    if errors:
        raise SystemExit("Invalid source fragments:\n- " + "\n- ".join(errors))

def compose(root: Path) -> dict[str, Any]:
    scenario = load_yaml(root / "scenario.yaml")
    base_entities = load_concepts(root / "ontology" / "base_entities")
    entity_types = load_concepts(root / "ontology" / "entity_types")
    value_types = load_list_or_files(root / "ontology" / "value_types.yaml", root / "ontology" / "value_types", "value_types")
    datasets = load_many(root / "semantic_model" / "datasets")
    relationships = load_list_or_files(
        root / "semantic_model" / "relationships.yaml",
        root / "semantic_model" / "relationships",
        "relationships",
    )
    metrics = load_list_or_files(root / "semantic_model" / "metrics.yaml", root / "semantic_model" / "metrics", "metrics")
    extra_mappings = load_many(root / "concept_mappings")
    ui_annotation_file = root / "ui_annotations" / "mapping_edge_annotations.yaml"
    ui_annotations = load_yaml(ui_annotation_file).get("mapping_edge_annotations", []) if ui_annotation_file.exists() else []
    requirements = load_many(root / "reporting_requirements")
    implementations = load_many(root / "report_data_logic")
    errors: list[str] = []
    validate_report_requirements(requirements, base_entities, entity_types, metrics, errors)
    validate_report_data_logic(implementations, datasets, requirements, errors)
    if errors:
        raise SystemExit("Invalid source fragments:\n- " + "\n- ".join(errors))
    validate_mapping_coverage(base_entities, entity_types, datasets, metrics, extra_mappings, ui_annotations)

    return {
        "scenario": scenario,
        "ontology": {
            "base_entities": base_entities,
            "entity_types": entity_types,
            "value_types": value_types,
        },
        "semantic_model": {
            "datasets": datasets,
            "relationships": relationships,
            "metrics": metrics,
        },
        "concept_mappings": extra_mappings,
        "mapping_edge_annotations": ui_annotations,
        "reporting_requirements": requirements,
        "report_data_logic": implementations,
    }


def main() -> None:
    args = parse_args()
    fragments = Path(args.fragments).resolve()
    output = Path(args.output).resolve()
    data = compose(fragments)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(yaml.safe_dump(data, sort_keys=False, allow_unicode=True), encoding="utf-8")
    print(f"Wrote {output}")


if __name__ == "__main__":
    main()










