from __future__ import annotations

import argparse
import json
import re
import shutil
import sys
from collections import defaultdict
from pathlib import Path
from typing import Any

try:
    import yaml
except ImportError as exc:  # pragma: no cover - friendly local failure
    raise SystemExit("PyYAML is required. Install with: pip install pyyaml") from exc


SKILL_DIR = Path(__file__).resolve().parents[1]
ROOT = Path.cwd().resolve()
SOURCE = ROOT / "knowledge" / "regulatory-reporting-osi.yaml"
INDEX_DIR = ROOT / "knowledge" / "indexes"
FRONTEND_DIR = ROOT / "frontend"
TEMPLATE_DIR = SKILL_DIR / "assets" / "frontend-template"

BUILT_INS = {"Any", "Boolean", "Date", "DateTime", "Decimal", "Float", "Integer", "String"}
ENTITY_CONCEPT_TYPES = {"EntityType"}
SHOW_CONTAINER_NODES = False
SHOW_REFERENCED_BUILT_INS = False


def resolve_path(value: str | Path, root: Path) -> Path:
    path = Path(value)
    return path if path.is_absolute() else root / path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Compile OSI regulatory-reporting YAML into graph indexes and frontend JS data.")
    parser.add_argument("--root", default=".", help="Project root. Relative input/output paths resolve against this directory.")
    parser.add_argument("--source", default="knowledge/regulatory-reporting-osi.yaml", help="Input OSI YAML path.")
    parser.add_argument("--sources", nargs="+", help="One or more strict OSI YAML files to compile into a combined UI graph. Overrides --source when provided.")
    parser.add_argument("--app-metadata", default="knowledge/regulatory-reporting-app.yaml", help="Optional application-layer metadata YAML merged only for graph/UI generation.")
    parser.add_argument("--index-dir", default="knowledge/indexes", help="Output directory for graph/catalog/search/summary JSON.")
    parser.add_argument("--frontend-dir", default="frontend", help="Output directory for frontend JS data and optional UI template.")
    parser.add_argument("--template-dir", default=str(TEMPLATE_DIR), help="Frontend template directory to copy when requested.")
    parser.add_argument("--copy-frontend-template", action="store_true", help="Copy the bundled static UI template into --frontend-dir.")
    parser.add_argument("--overwrite-template", action="store_true", help="Overwrite existing index.html/app.js/style.css when copying the frontend template.")
    return parser.parse_args()


def copy_frontend_template(template_dir: Path, frontend_dir: Path, overwrite: bool = False) -> None:
    if not template_dir.exists():
        raise SystemExit(f"Frontend template not found: {template_dir}")
    frontend_dir.mkdir(parents=True, exist_ok=True)
    for item in template_dir.iterdir():
        target = frontend_dir / item.name
        if item.is_dir():
            if target.exists() and overwrite:
                shutil.rmtree(target)
            if target.exists() and not overwrite:
                continue
            shutil.copytree(item, target)
            continue
        if not item.is_file():
            continue
        if target.exists() and not overwrite:
            continue
        shutil.copy2(item, target)

def display_path(path: Path) -> str:
    try:
        return str(path.relative_to(ROOT)).replace("\\", "/")
    except ValueError:
        return str(path).replace("\\", "/")


def load_osi_sources(paths: list[Path]) -> dict[str, Any]:
    docs: list[dict[str, Any]] = []
    source_ontologies: list[dict[str, Any]] = []
    for path in paths:
        doc = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
        ontology_name = doc.get("name") or path.stem
        source_file = display_path(path)
        source_ontologies.append(
            {
                "name": ontology_name,
                "description": doc.get("description", ""),
                "version": doc.get("version", ""),
                "ai_context": doc.get("ai_context"),
                "source_file": source_file,
            }
        )
        for component in doc.get("ontology") or []:
            if isinstance(component, dict):
                component["__source_ontology"] = ontology_name
                component["__source_file"] = source_file
        for ontology_map in doc.get("ontology_mappings") or []:
            if isinstance(ontology_map, dict):
                ontology_map["__source_ontology"] = ontology_name
                ontology_map["__source_file"] = source_file
        doc["source_ontologies"] = [source_ontologies[-1]]
        docs.append(doc)

    if len(docs) == 1:
        return docs[0]

    combined: dict[str, Any] = {
        "version": docs[0].get("version", ""),
        "name": "CombinedOSIModel",
        "description": "UI-only compilation of multiple strict OSI YAML documents.",
        "ontology": [],
        "ontology_mappings": [],
        "source_ontologies": source_ontologies,
        "ai_context": {"source_ontologies": source_ontologies},
    }
    for doc in docs:
        combined["ontology"].extend(doc.get("ontology") or [])
        combined["ontology_mappings"].extend(doc.get("ontology_mappings") or [])
    return combined



def load_scenario_library(root: Path) -> dict[str, Any]:
    scenario_root = root / "knowledge" / "scenarios"
    result: dict[str, list[dict[str, Any]]] = {"presets": [], "snapshots": []}
    folders = [("presets", "preset"), ("snapshots", "snapshot")]
    for folder_name, kind in folders:
        folder = scenario_root / folder_name
        if not folder.exists():
            continue
        for path in sorted(folder.iterdir()):
            if not path.is_file() or path.suffix.lower() not in {".yaml", ".yml", ".json"}:
                continue
            try:
                if path.suffix.lower() == ".json":
                    payload = json.loads(path.read_text(encoding="utf-8"))
                else:
                    payload = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
            except Exception as exc:  # pragma: no cover - keep generation usable, but expose the bad file
                payload = {"id": path.stem, "name": path.stem, "description": f"Could not parse scenario file: {exc}"}
            if not isinstance(payload, dict):
                continue
            payload.setdefault("id", path.stem)
            payload.setdefault("name", payload["id"])
            payload["kind"] = "preset" if kind == "preset" else "snapshot"
            payload["source_file"] = display_path(path)
            result[folder_name].append(payload)
    return result

def compact_type(value: Any) -> str:
    return re.sub(r"[^A-Za-z0-9]+", "", str(value or ""))


def normalized_concept_type(concept: dict[str, Any]) -> str:
    return str(concept.get("type") or "EntityType")


def is_entity_concept_type(concept_type: str) -> bool:
    return concept_type in ENTITY_CONCEPT_TYPES


def concept_type_for(declared_concepts: dict[str, dict[str, Any]], name: str) -> str:
    if name in BUILT_INS:
        return "ValueType"
    concept = (declared_concepts.get(name, {}).get("concept") or {})
    return normalized_concept_type(concept) if concept else ""


def is_value_concept(declared_concepts: dict[str, dict[str, Any]], name: str) -> bool:
    return concept_type_for(declared_concepts, name) == "ValueType"


def slug(value: str) -> str:
    value = re.sub(r"[^a-zA-Z0-9_.-]+", "_", str(value).strip())
    return value.strip("_") or "item"


def node_id(prefix: str, name: str) -> str:
    return f"{prefix}.{slug(name)}"


def relationship_action(relationship_name: str) -> str:
    text = slug(relationship_name).lower()
    if "_" not in text:
        return ""
    action, role = text.rsplit("_", 1)
    return action if action and role else ""


def validate_business_relationship_name(relationship_name: str, owner_concept: str, target_concept: str) -> str:
    action = relationship_action(relationship_name)
    if not action:
        raise SystemExit(
            f"EntityType relationship '{owner_concept}.{relationship_name}' targeting '{target_concept}' must use '<action>_<role>'. "
            "The action is semantic and not limited to a fixed list; the role suffix usually names the target EntityType."
        )
    return action


def dataset_join_label(rel: dict[str, Any]) -> str:
    from_columns = [str(item) for item in rel.get("from_columns") or []]
    to_columns = [str(item) for item in rel.get("to_columns") or []]
    if not from_columns and not to_columns:
        return "join"
    if from_columns == to_columns or not to_columns:
        return "join " + ", ".join(from_columns)
    pairs = []
    for idx, from_col in enumerate(from_columns):
        to_col = to_columns[idx] if idx < len(to_columns) else ""
        pairs.append(f"{from_col} = {to_col}" if to_col else from_col)
    return "join " + ", ".join(pairs)


MULTI_VALUE_NODE_PROPERTIES = {"ontologies", "semantic_models", "source_files", "source_datasets"}


def as_unique_strings(value: Any) -> list[str]:
    if value in (None, "", [], {}):
        return []
    values = value if isinstance(value, list) else [value]
    return unique_list([str(item) for item in values if item not in (None, "")])


def merge_node_properties(existing: dict[str, Any], incoming: dict[str, Any]) -> None:
    for key, value in (incoming or {}).items():
        if key in MULTI_VALUE_NODE_PROPERTIES:
            existing[key] = unique_list(as_unique_strings(existing.get(key)) + as_unique_strings(value))
            continue
        if value in (None, "", [], {}):
            continue
        existing[key] = value


def add_node(nodes: dict[str, dict[str, Any]], item_id: str, item_type: str, label: str, properties: dict[str, Any] | None = None) -> None:
    if item_id in nodes:
        merge_node_properties(nodes[item_id]["properties"], properties or {})
        return
    nodes[item_id] = {
        "id": item_id,
        "type": item_type,
        "label": label,
        "properties": properties or {},
    }

def add_edge(
    edges: dict[str, dict[str, Any]],
    source: str,
    target: str,
    edge_type: str,
    label: str = "",
    description: str = "",
    properties: dict[str, Any] | None = None,
    emit_type: bool = True,
    edge_id: str | None = None,
) -> None:
    if not source or not target:
        return
    edge_type = edge_type.upper()
    edge_id = slug(edge_id) if edge_id else f"edge.{slug(source)}.{slug(edge_type)}.{slug(label or edge_type)}.{slug(target)}"
    edge_properties = dict(properties or {})
    if description:
        edge_properties = {"description": description, **edge_properties}
    edge = {
        "id": edge_id,
        "source": source,
        "target": target,
        "label": label or edge_type,
        "properties": edge_properties,
    }
    if emit_type:
        edge["type"] = edge_type
    edges[edge_id] = edge


def expression_text(value: Any) -> str:
    if value is None:
        return ""
    if isinstance(value, str):
        return value
    if isinstance(value, dict):
        dialects = value.get("dialects") or []
        if dialects:
            return str(dialects[0].get("expression") or "")
        return str(value.get("expression") or "")
    return str(value)


def expression_refs(value: Any) -> list[dict[str, str]]:
    text = expression_text(value)
    refs: list[dict[str, str]] = []
    for dataset, field in re.findall(r"\b([A-Za-z_][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)\b", text):
        refs.append({"dataset": dataset, "field": field, "expression": text})
    return refs


def walk_object_mapping(mapping: dict[str, Any]) -> list[dict[str, str]]:
    refs = expression_refs(mapping.get("expression"))
    for referent in mapping.get("referent_mappings") or []:
        refs.extend(walk_referent_mapping(referent))
    return refs


def walk_referent_mapping(mapping: dict[str, Any]) -> list[dict[str, str]]:
    refs = expression_refs(mapping.get("expression"))
    for child in mapping.get("referent_mappings") or []:
        refs.extend(walk_referent_mapping(child))
    return refs


def relationship_field_refs(mapping: dict[str, Any]) -> list[dict[str, str]]:
    """Return relationship-to-field mappings implied by OSI mapping nodes."""
    rows: list[dict[str, str]] = []
    relationship = mapping.get("relationship")
    for ref in expression_refs(mapping.get("expression")):
        if relationship and ref.get("dataset") and ref.get("field"):
            rows.append(
                {
                    "relationship": str(relationship),
                    "field": f'{ref["dataset"]}.{ref["field"]}',
                    "expression": ref.get("expression", ""),
                }
            )
    object_mapping = mapping.get("object_mapping")
    if isinstance(object_mapping, dict):
        if relationship:
            for ref in expression_refs(object_mapping.get("expression")):
                if ref.get("dataset") and ref.get("field"):
                    rows.append(
                        {
                            "relationship": str(relationship),
                            "field": f'{ref["dataset"]}.{ref["field"]}',
                            "expression": ref.get("expression", ""),
                        }
                    )
        rows.extend(relationship_field_refs(object_mapping))
    for child in mapping.get("referent_mappings") or []:
        rows.extend(relationship_field_refs(child))
    for child in mapping.get("children") or []:
        rows.extend(relationship_field_refs(child))
    return rows


def walk_link_mapping(mapping: dict[str, Any], rows: list[dict[str, Any]], depth: int = 1) -> list[dict[str, str]]:
    refs: list[dict[str, str]] = []
    object_mapping = mapping.get("object_mapping") or {}
    refs.extend(walk_object_mapping(object_mapping))
    rows.append(
        {
            "level": depth,
            "relationship": mapping.get("relationship"),
            "target_concept": object_mapping.get("concept"),
            "expressions": sorted({ref["expression"] for ref in refs if ref.get("expression")}),
            "fields": sorted({f'{ref["dataset"]}.{ref["field"]}' for ref in refs if ref.get("dataset")}),
        }
    )
    for child in mapping.get("children") or []:
        refs.extend(walk_link_mapping(child, rows, depth + 1))
    return refs



def source_concept_link_refs(mapping: dict[str, Any], value_relationships: set[str]) -> tuple[list[dict[str, str]], list[dict[str, str]]]:
    """Return refs that populate the source concept, excluding target EntityType referent refs."""
    refs: list[dict[str, str]] = []
    relationship_refs: list[dict[str, str]] = []
    refs.extend(walk_object_mapping(mapping.get("object_mapping") or {}))

    def walk_value_children(children: list[dict[str, Any]]) -> None:
        for child in children or []:
            relationship = child.get("relationship")
            if relationship not in value_relationships:
                continue
            child_refs = walk_object_mapping(child.get("object_mapping") or {})
            refs.extend(child_refs)
            for ref in child_refs:
                if ref.get("dataset") and ref.get("field"):
                    relationship_refs.append(
                        {
                            "relationship": str(relationship),
                            "field": f'{ref["dataset"]}.{ref["field"]}',
                            "expression": ref.get("expression", ""),
                        }
                    )
            walk_value_children(child.get("children") or [])

    walk_value_children(mapping.get("children") or [])
    return refs, relationship_refs
def relationship_properties(
    owner_concept: str,
    rel_name: str,
    rel: dict[str, Any],
    extra: dict[str, Any] | None = None,
) -> dict[str, Any]:
    properties: dict[str, Any] = {}
    for key in ("description", "multiplicity", "verbalizes", "requires", "derived_by"):
        value = rel.get(key)
        if value not in (None, "", [], {}):
            properties[key] = value
    for key, value in (extra or {}).items():
        if value not in (None, "", [], {}):
            properties[key] = value
    return properties


def semantic_reference_parts(reference: str) -> tuple[str, str]:
    parts = str(reference or "").split(".", 1)
    if len(parts) != 2:
        return "", ""
    return parts[0], parts[1]


def column_node_id(field_ref: str) -> str:
    return node_id("column", field_ref)

def dataset_node_id(dataset_name: str) -> str:
    return node_id("dataset", dataset_name)


def dataset_field_node_id(field_ref: str) -> str:
    return node_id("field", field_ref)


def physical_table_node_id(table_ref: str) -> str:
    return node_id("table", table_ref)


def physical_table_label(table_ref: str) -> str:
    text = str(table_ref or "")
    return text.split(".")[-1] if "." in text else text


def unique_list(items: list[str]) -> list[str]:
    seen: set[str] = set()
    ordered: list[str] = []
    for item in items:
        text = str(item or "").strip()
        if not text or text in seen:
            continue
        seen.add(text)
        ordered.append(text)
    return ordered


def custom_extension_payload(extension: dict[str, Any]) -> dict[str, Any]:
    if not isinstance(extension, dict):
        return {}
    if "data" in extension:
        data = extension.get("data")
        if isinstance(data, dict):
            return data
        if isinstance(data, str) and data.strip():
            try:
                parsed = json.loads(data)
                return parsed if isinstance(parsed, dict) else {"value": parsed}
            except json.JSONDecodeError:
                return {"value": data}
        return {}
    value = extension.get("value") or {}
    if isinstance(value, dict):
        payload = dict(value)
    elif value not in (None, ""):
        payload = {"value": value}
    else:
        payload = {}
    if extension.get("name"):
        payload.setdefault("name", extension.get("name"))
    if extension.get("description"):
        payload.setdefault("description", extension.get("description"))
    return payload


def custom_extension_values(dataset: dict[str, Any], names: set[str]) -> list[dict[str, Any]]:
    values: list[dict[str, Any]] = []
    for extension in dataset.get("custom_extensions") or []:
        if not isinstance(extension, dict):
            continue
        payload = custom_extension_payload(extension)
        extension_names = {
            str(extension.get("name") or ""),
            str(extension.get("vendor_name") or ""),
            str(payload.get("name") or ""),
            str(payload.get("kind") or ""),
        }
        if not names.intersection({item for item in extension_names if item}):
            continue
        if payload:
            values.append(payload)
    return values


def dataset_source_tables(dataset: dict[str, Any]) -> list[str]:
    refs: list[str] = []
    source = dataset.get("source")
    if isinstance(source, str):
        source_text = source.strip()
        if source_text and not source_text.startswith("query."):
            refs.append(source_text)
    elif isinstance(source, dict):
        for key in ("table", "name", "source"):
            if source.get(key):
                refs.append(str(source[key]))
    for value in custom_extension_values(dataset, {"physical_source", "physical_sources", "source_query"}):
        for key in ("depends_on", "tables", "source_tables"):
            raw_items = value.get(key) or []
            if isinstance(raw_items, str):
                refs.append(raw_items)
            elif isinstance(raw_items, list):
                refs.extend(str(item) for item in raw_items if item)
        for key in ("table", "source_table"):
            if value.get(key):
                refs.append(str(value[key]))
    return unique_list(refs)


def dataset_source_edge_description(dataset: dict[str, Any]) -> str:
    for value in custom_extension_values(dataset, {"physical_source", "physical_sources", "source_query", "query"}):
        if value.get("description"):
            return str(value["description"])
        if value.get("ai_context"):
            return ai_context_summary(value.get("ai_context"))
    return ""


def ai_context_summary(value: Any) -> str:
    if value in (None, "", [], {}):
        return ""
    if isinstance(value, str):
        return value
    if isinstance(value, list):
        return " · ".join(item for item in (ai_context_summary(item) for item in value) if item)
    if isinstance(value, dict):
        for key in ("description", "purpose", "context", "summary", "notes"):
            if value.get(key):
                return str(value[key])
        return json.dumps(value, ensure_ascii=False)
    return str(value)



def mapping_context(value: dict[str, Any], key: str) -> Any:
    ai_context = value.get("ai_context") if isinstance(value, dict) else None
    if isinstance(ai_context, dict) and key in ai_context:
        return ai_context.get(key)
    return value.get(key) if isinstance(value, dict) else None


def dataset_physical_kind(dataset: dict[str, Any]) -> str:
    return str(mapping_context(dataset, "physical_kind") or "")


def field_physical_type(field: dict[str, Any]) -> str:
    physical_type = mapping_context(field, "physical_type") or mapping_context(field, "data_type") or field.get("type")
    return str(physical_type or "")


def field_nullable(field: dict[str, Any]) -> Any:
    value = mapping_context(field, "nullable")
    if value is not None:
        return value
    return field.get("nullable", "")

def scalar_expression_column(expression: str) -> str:
    text = str(expression or "").strip()
    return text if re.fullmatch(r"[A-Za-z_][A-Za-z0-9_]*", text) else ""

def metric_reference_name(field_ref: str, metric_names: set[str]) -> str:
    owner, name = semantic_reference_parts(field_ref)
    if owner == "metric" and name in metric_names:
        return name
    return ""


def value_relationship_entries(
    declared_concepts: dict[str, dict[str, Any]],
    concept_name: str,
) -> list[dict[str, Any]]:
    component = (declared_concepts.get(concept_name) or {}).get("component") or {}
    entries: list[dict[str, Any]] = []
    for rel in component.get("relationships") or []:
        rel_name = rel.get("name", "relationship")
        for role in rel.get("roles") or []:
            role_concept = role.get("concept")
            if role_concept and is_value_concept(declared_concepts, role_concept):
                entries.append(
                    {
                        "source_concept": concept_name,
                        "rel_name": rel_name,
                        "rel": rel,
                        "role": role,
                        "role_concept": role_concept,
                    }
                )
    return entries


def compile_catalog_and_graph(data: dict[str, Any]) -> tuple[dict[str, Any], dict[str, Any], dict[str, Any]]:
    nodes: dict[str, dict[str, Any]] = {}
    edges: dict[str, dict[str, Any]] = {}
    catalog: dict[str, dict[str, Any]] = {}
    warnings: list[dict[str, Any]] = []

    source_ontology_entries = data.get("source_ontologies") or [
        {
            "name": data.get("name", "ontology"),
            "description": data.get("description", ""),
            "version": data.get("version", ""),
            "ai_context": data.get("ai_context"),
            "source_file": display_path(SOURCE),
        }
    ]
    ontology_names = [entry.get("name") for entry in source_ontology_entries if entry.get("name")]
    default_ontology_name = ontology_names[0] if ontology_names else data.get("name", "ontology")
    ontology_name = ontology_names[0] if len(ontology_names) == 1 else data.get("name", "Multiple OSI Ontologies")
    ontology_id = node_id("ontology", ontology_name) if SHOW_CONTAINER_NODES else ""
    if SHOW_CONTAINER_NODES:
        add_node(
            nodes,
            ontology_id,
            "ontology",
            ontology_name,
            {
                "description": data.get("description", ""),
                "version": data.get("version"),
                "source_file": display_path(SOURCE),
            },
        )
        catalog[ontology_id] = {
            "id": ontology_id,
            "type": "ontology",
            "name": ontology_name,
            "description": data.get("description", ""),
            "version": data.get("version"),
            "ai_context": data.get("ai_context"),
        }

    declared_concepts: dict[str, dict[str, Any]] = {}

    def merge_concept_list_field(existing_concept: dict[str, Any], incoming_concept: dict[str, Any], key: str) -> None:
        existing_values = existing_concept.get(key) or []
        incoming_values = incoming_concept.get(key) or []
        if not isinstance(existing_values, list):
            existing_values = [existing_values]
        if not isinstance(incoming_values, list):
            incoming_values = [incoming_values]
        merged = unique_list([str(item) for item in [*existing_values, *incoming_values] if item])
        if merged:
            existing_concept[key] = merged

    def merge_relationships(existing_relationships: list[dict[str, Any]], incoming_relationships: list[dict[str, Any]], concept_name: str) -> None:
        by_name = {str(rel.get("name") or "relationship"): rel for rel in existing_relationships if isinstance(rel, dict)}
        for rel in incoming_relationships:
            if not isinstance(rel, dict):
                continue
            rel_name = str(rel.get("name") or "relationship")
            if rel_name in by_name:
                current = json.dumps(by_name[rel_name], sort_keys=True, ensure_ascii=False)
                incoming = json.dumps(rel, sort_keys=True, ensure_ascii=False)
                if current != incoming:
                    warnings.append(
                        {
                            "type": "shared_concept_relationship_mismatch",
                            "severity": "warning",
                            "concept": concept_name,
                            "relationship": rel_name,
                            "message": f"Shared concept {concept_name!r} has different definitions for relationship {rel_name!r}; keeping the first definition for the shared graph node.",
                        }
                    )
                continue
            existing_relationships.append(rel)
            by_name[rel_name] = rel

    for component in data.get("ontology") or []:
        concept = component.get("concept") or {}
        name = concept.get("name")
        if not name:
            continue
        component_ontology = component.get("__source_ontology") or default_ontology_name
        source_file = component.get("__source_file") or ""
        if name in declared_concepts:
            existing = declared_concepts[name]
            existing_concept = existing["concept"]
            if normalized_concept_type(existing_concept) != normalized_concept_type(concept):
                raise SystemExit(
                    f"Shared concept {name!r} has conflicting concept types: "
                    f"{normalized_concept_type(existing_concept)!r} and {normalized_concept_type(concept)!r}."
                )
            existing_description = str(existing_concept.get("description") or "").strip()
            incoming_description = str(concept.get("description") or "").strip()
            if existing_description and incoming_description and existing_description != incoming_description:
                warning = {
                    "type": "shared_concept_description_mismatch",
                    "severity": "warning",
                    "concept": name,
                    "message": f"Shared concept {name!r} has different non-empty descriptions; keeping the first description for the shared graph node.",
                    "existing_ontologies": existing.get("ontologies") or [existing.get("ontology", default_ontology_name)],
                    "incoming_ontology": component_ontology,
                    "existing_source_files": existing.get("source_files") or ([existing.get("source_file", "")] if existing.get("source_file") else []),
                    "incoming_source_file": source_file,
                }
                warnings.append(warning)
                existing.setdefault("warnings", []).append(warning)
            if not existing_concept.get("description") and concept.get("description"):
                existing_concept["description"] = concept.get("description")
            if not existing_concept.get("ai_context") and concept.get("ai_context"):
                existing_concept["ai_context"] = concept.get("ai_context")
            for list_key in ("extends", "identify_by", "requires"):
                merge_concept_list_field(existing_concept, concept, list_key)
            existing_component = existing["component"]
            existing_relationships = existing_component.setdefault("relationships", [])
            merge_relationships(existing_relationships, component.get("relationships") or [], name)
            existing["ontologies"] = unique_list([*(existing.get("ontologies") or []), component_ontology])
            existing["source_files"] = unique_list([*(existing.get("source_files") or []), source_file])
            continue
        declared_concepts[name] = {
            "component": component,
            "concept": concept,
            "ontology": component_ontology,
            "ontologies": [component_ontology],
            "source_file": source_file,
            "source_files": [source_file] if source_file else [],
        }

    base_entity_names = {
        name
        for name, entry in declared_concepts.items()
        if normalized_concept_type(entry["concept"]) == "EntityType" and name.endswith("Data")
    }

    def ensure_concept(name: str) -> str:
        concept_id = node_id("concept", name)
        if name in declared_concepts:
            concept_entry = declared_concepts[name]
            concept = concept_entry["concept"]
            concept_ontology = concept_entry.get("ontology", default_ontology_name)
            concept_ontologies = concept_entry.get("ontologies") or [concept_ontology]
            concept_source_files = concept_entry.get("source_files") or ([concept_entry.get("source_file", "")] if concept_entry.get("source_file") else [])
            concept_warnings = concept_entry.get("warnings") or []
            concept_type = normalized_concept_type(concept)
            if not is_entity_concept_type(concept_type):
                return ""
            graph_type = "base_entity_concept" if name in base_entity_names else "entity_type_concept"
            add_node(
                nodes,
                concept_id,
                graph_type,
                name,
                {
                    "description": concept.get("description", ""),
                    "concept_type": concept_type,
                    "base_entity": name in base_entity_names,
                    "extends": concept.get("extends") or [],
                    "identify_by": concept.get("identify_by") or [],
                    "requires": concept.get("requires") or [],
                    "ontology": concept_ontology,
                    "ontologies": concept_ontologies,
                    "source_files": concept_source_files,
                    "definition_warnings": concept_warnings,
                },
            )
        elif SHOW_REFERENCED_BUILT_INS or name not in BUILT_INS:
            add_node(
                nodes,
                concept_id,
                "built_in_concept" if name in BUILT_INS else "external_concept",
                name,
                {
                    "description": "Built-in OSI concept." if name in BUILT_INS else "Referenced concept not declared in this ontology.",
                    "concept_type": "BuiltIn" if name in BUILT_INS else "External",
                },
            )
        else:
            return ""
        return concept_id

    value_usages: dict[str, list[str]] = defaultdict(list)

    def add_value_property(
        owner_name: str,
        rel_name: str,
        rel: dict[str, Any],
        role_concept: str,
        inherited_from: str = "",
    ) -> str:
        owner_id = ensure_concept(owner_name)
        if not owner_id:
            return ""
        value_id = node_id("value", f"{owner_name}.{rel_name}")
        owner_entry = declared_concepts.get(owner_name, {})
        owner_ontology = owner_entry.get("ontology", default_ontology_name)
        owner_ontologies = owner_entry.get("ontologies") or [owner_ontology]
        owner_source_files = owner_entry.get("source_files") or ([owner_entry.get("source_file", "")] if owner_entry.get("source_file") else [])
        verbalizes = "; ".join(rel.get("verbalizes") or [])
        base_owner_name = inherited_from or owner_name
        description = rel.get("description") or verbalizes or f"{base_owner_name}.{rel_name} uses {role_concept}."
        properties = relationship_properties(
            owner_name,
            rel_name,
            rel,
            {
                "source_field": "ontology.extends.relationships" if inherited_from else "ontology.relationships",
                "value_concept": role_concept,
                "inherited": bool(inherited_from),
                "inherited_from": inherited_from,
                "base_relationship_path": f"{inherited_from}.{rel_name}" if inherited_from else "",
                "inheritance_note": f"Inherited from {inherited_from}." if inherited_from else "",
                "ontology": owner_ontology,
                "ontologies": owner_ontologies,
                "source_files": owner_source_files,
            },
        )
        add_node(
            nodes,
            value_id,
            "value_type_property",
            role_concept,
            {
                "description": description,
                "parent": owner_id,
                "data_type": role_concept,
                "value_concept": role_concept,
                "field_name": rel_name,
                "relationship_name": rel_name,
                **properties,
            },
        )
        catalog[value_id] = {
            "id": value_id,
            "type": "value_type_property",
            "name": role_concept,
            "description": description,
            "parent": owner_id,
            "data_type": role_concept,
            "value_concept": role_concept,
            "field_name": rel_name,
            "relationship_name": rel_name,
            "relationship": rel,
            "inherited": bool(inherited_from),
            "inherited_from": inherited_from,
            "ontology": owner_ontology,
            "ontologies": owner_ontologies,
            "source_files": owner_source_files,
        }
        add_edge(
            edges,
            owner_id,
            value_id,
            "CONTAINS",
            "inherited value" if inherited_from else "contains value",
            f"{owner_name} inherits value concept {rel_name} ({role_concept}) from {inherited_from}."
            if inherited_from
            else f"{owner_name} has value concept {rel_name} ({role_concept}).",
            properties,
        )
        if value_id not in value_usages[role_concept]:
            value_usages[role_concept].append(value_id)
        return value_id

    for name, entry in declared_concepts.items():
        concept = entry["concept"]
        component = entry["component"]
        concept_type = normalized_concept_type(concept)
        if not is_entity_concept_type(concept_type):
            continue
        concept_id = ensure_concept(name)
        if not concept_id:
            continue
        catalog[concept_id] = {
            "id": concept_id,
            "type": nodes[concept_id]["type"],
            "name": name,
            "description": concept.get("description", ""),
            "concept": concept,
            "relationships": component.get("relationships") or [],
            "ontology": entry.get("ontology", default_ontology_name),
            "ontologies": entry.get("ontologies") or [entry.get("ontology", default_ontology_name)],
            "source_files": entry.get("source_files") or ([entry.get("source_file", "")] if entry.get("source_file") else []),
            "definition_warnings": entry.get("warnings") or [],
            "mappings": [],
        }
        if SHOW_CONTAINER_NODES:
            add_edge(edges, ontology_id, concept_id, "CONTAINS_CONCEPT", "concept", f"{data['name']} declares {name}.")
        for parent in concept.get("extends") or []:
            parent_id = ensure_concept(parent)
            if parent_id:
                add_edge(
                    edges,
                    concept_id,
                    parent_id,
                    "EXTENDS",
                    "extends",
                    f"{name} extends {parent}.",
                    {"base_entity": parent},
                )
        for rel in component.get("relationships") or []:
            rel_name = rel.get("name", "relationship")
            for role in rel.get("roles") or []:
                role_concept = role.get("concept")
                if not role_concept:
                    continue
                verbalizes = "; ".join(rel.get("verbalizes") or [])
                if is_value_concept(declared_concepts, role_concept):
                    add_value_property(name, rel_name, rel, role_concept)
                    continue
                target_id = ensure_concept(role_concept)
                if target_id:
                    action = validate_business_relationship_name(rel_name, name, role_concept)
                    if rel_name in edges:
                        raise SystemExit(
                            f"EntityType relationship name '{rel_name}' is used more than once. "
                            "Business relationship names must be globally unique because the graph edge id is the relationship name."
                        )
                    add_edge(
                        edges,
                        concept_id,
                        target_id,
                        action,
                        rel_name,
                        rel.get("description") or "",
                        relationship_properties(name, rel_name, rel, {"roles": [role]}),
                        emit_type=False,
                        edge_id=rel_name,
                    )

    def inherited_value_entries(concept_name: str, stack: tuple[str, ...] = ()) -> list[dict[str, Any]]:
        if concept_name in stack:
            return []
        concept = (declared_concepts.get(concept_name) or {}).get("concept") or {}
        entries: list[dict[str, Any]] = []
        for parent in concept.get("extends") or []:
            if parent not in declared_concepts:
                continue
            entries.extend(inherited_value_entries(parent, (*stack, concept_name)))
            entries.extend(value_relationship_entries(declared_concepts, parent))
        return entries

    for name, entry in declared_concepts.items():
        concept = entry["concept"]
        if not is_entity_concept_type(normalized_concept_type(concept)):
            continue
        own_value_names = {item["rel_name"] for item in value_relationship_entries(declared_concepts, name)}
        for inherited in inherited_value_entries(name):
            rel_name = inherited["rel_name"]
            if rel_name in own_value_names:
                continue
            if node_id("value", f"{name}.{rel_name}") in nodes:
                continue
            add_value_property(
                name,
                rel_name,
                inherited["rel"],
                inherited["role_concept"],
                inherited_from=inherited["source_concept"],
            )

    value_relationship_names_by_concept: dict[str, set[str]] = defaultdict(set)
    for name, entry in declared_concepts.items():
        concept = entry["concept"]
        if not is_entity_concept_type(normalized_concept_type(concept)):
            continue
        for item in value_relationship_entries(declared_concepts, name):
            value_relationship_names_by_concept[name].add(item["rel_name"])
        for item in inherited_value_entries(name):
            value_relationship_names_by_concept[name].add(item["rel_name"])

    for value_concept, usage_ids in value_usages.items():
        unique_ids = sorted(set(usage_ids))
        for idx, source_id in enumerate(unique_ids):
            for target_id in unique_ids[idx + 1:]:
                add_edge(
                    edges,
                    source_id,
                    target_id,
                    "SHARES_VALUE_TYPE",
                    value_concept,
                    f"Both fields use ValueType concept {value_concept}.",
                    {"source_field": "ontology.relationships.roles.concept", "value_concept": value_concept},
                )

    semantic_models: dict[str, dict[str, Any]] = {}
    semantic_model_entries: list[dict[str, Any]] = []
    dataset_index: dict[str, dict[str, Any]] = {}
    field_index: dict[str, dict[str, Any]] = {}
    metric_definitions_by_name: dict[str, dict[str, Any]] = {}

    for ontology_map in data.get("ontology_mappings") or []:
        sm = ontology_map.get("semantic_model") or {}
        sm_name = sm.get("name", "semantic_model")
        mapping_ontology = ontology_map.get("__source_ontology") or default_ontology_name
        semantic_metric_names = {metric.get("name") for metric in sm.get("metrics") or [] if metric.get("name")}
        if sm_name in semantic_models:
            raise SystemExit(f"Duplicate semantic model name {sm_name!r}. Semantic model names must be globally unique in one UI compile batch.")
        semantic_models[sm_name] = sm
        semantic_model_entries.append(
            {
                "name": sm_name,
                "description": sm.get("description", ""),
                "ai_context": sm.get("ai_context"),
                "mapping_name": ontology_map.get("name", ""),
                "ontology": mapping_ontology,
                "source_file": ontology_map.get("__source_file", ""),
                "dataset_count": len(sm.get("datasets") or []),
                "metric_count": len(sm.get("metrics") or []),
            }
        )
        sm_id = node_id("semantic_model", sm_name)
        map_id = node_id("ontology_map", ontology_map.get("name", f"{sm_name}_map"))

        if SHOW_CONTAINER_NODES:
            add_node(nodes, sm_id, "semantic_model", sm_name, {"description": sm.get("description", "")})
            catalog[sm_id] = {
                "id": sm_id,
                "type": "semantic_model",
                "name": sm_name,
                "description": sm.get("description", ""),
                "semantic_model": sm,
            }
            add_node(nodes, map_id, "ontology_mapping", ontology_map.get("name", map_id), {"description": ontology_map.get("description", "")})
            catalog[map_id] = {
                "id": map_id,
                "type": "ontology_mapping",
                "name": ontology_map.get("name"),
                "description": ontology_map.get("description", ""),
                "concept_mappings": ontology_map.get("concept_mappings") or [],
            }
            add_edge(edges, map_id, sm_id, "MAPS_MODEL", "maps model", ontology_map.get("description", ""))

        source_tables_by_dataset: dict[str, list[str]] = {}
        dataset_field_dependencies: list[tuple[str, str, str, str]] = []

        for dataset in sm.get("datasets") or []:
            dataset_name = dataset.get("name", "dataset")
            dataset_id = dataset_node_id(dataset_name)
            dataset_index[dataset_name] = dataset
            source_tables = dataset_source_tables(dataset)
            source_tables_by_dataset[dataset_name] = source_tables
            add_node(
                nodes,
                dataset_id,
                "semantic_dataset",
                dataset_name,
                {
                    "description": dataset.get("description", ""),
                    "source": dataset.get("source"),
                    "primary_key": dataset.get("primary_key") or [],
                    "field_count": len(dataset.get("fields") or []),
                    "physical_kind": dataset_physical_kind(dataset),
                    "source_tables": source_tables,
                    "custom_extensions": dataset.get("custom_extensions") or [],
                    "semantic_model": sm_name,
                    "semantic_models": [sm_name],
                    "ontology": mapping_ontology,
                },
            )
            dataset_catalog = catalog.setdefault(
                dataset_id,
                {
                    "id": dataset_id,
                    "type": "semantic_dataset",
                    "name": dataset_name,
                    "description": dataset.get("description", ""),
                    "source": dataset.get("source"),
                    "primary_key": dataset.get("primary_key") or [],
                    "fields": dataset.get("fields") or [],
                    "source_tables": source_tables,
                    "physical_kind": dataset_physical_kind(dataset),
                    "custom_extensions": dataset.get("custom_extensions") or [],
                    "semantic_model": sm_name,
                    "semantic_models": [sm_name],
                    "ontology": mapping_ontology,
                    "ontologies": [mapping_ontology],
                },
            )
            dataset_catalog.setdefault("semantic_models", [])
            if sm_name not in dataset_catalog["semantic_models"]:
                dataset_catalog["semantic_models"].append(sm_name)
            dataset_catalog.setdefault("ontologies", [])
            if mapping_ontology not in dataset_catalog["ontologies"]:
                dataset_catalog["ontologies"].append(mapping_ontology)
            dataset_catalog["source_tables"] = unique_list([*(dataset_catalog.get("source_tables") or []), *source_tables])
            dataset_node_props = nodes[dataset_id].setdefault("properties", {})
            dataset_node_props.setdefault("semantic_models", [])
            if sm_name not in dataset_node_props["semantic_models"]:
                dataset_node_props["semantic_models"].append(sm_name)
            dataset_node_props.setdefault("ontologies", [])
            if mapping_ontology not in dataset_node_props["ontologies"]:
                dataset_node_props["ontologies"].append(mapping_ontology)
            if SHOW_CONTAINER_NODES:
                add_edge(edges, sm_id, dataset_id, "CONTAINS_TABLE", "dataset", f"{sm_name} contains dataset {dataset_name}.")

            source_description = dataset_source_edge_description(dataset)
            for table_ref in source_tables:
                table_id = physical_table_node_id(table_ref)
                add_node(
                    nodes,
                    table_id,
                    "physical_table",
                    physical_table_label(table_ref),
                    {
                        "description": "",
                        "source": table_ref,
                        "source_dataset": dataset_name,
                        "semantic_model": sm_name,
                        "semantic_models": [sm_name],
                        "ontology": mapping_ontology,
                    },
                )
                table_catalog = catalog.setdefault(
                    table_id,
                    {
                        "id": table_id,
                        "type": "physical_table",
                        "name": physical_table_label(table_ref),
                        "description": "",
                        "source": table_ref,
                        "columns": [],
                        "source_datasets": [],
                            "semantic_model": sm_name,
                            "semantic_models": [sm_name],
                            "ontology": mapping_ontology,
                        },
                    )
                table_catalog.setdefault("source_datasets", [])
                if dataset_name not in table_catalog["source_datasets"]:
                    table_catalog["source_datasets"].append(dataset_name)
                table_catalog.setdefault("semantic_models", [])
                if sm_name not in table_catalog["semantic_models"]:
                    table_catalog["semantic_models"].append(sm_name)
                table_node_props = nodes[table_id].setdefault("properties", {})
                table_node_props.setdefault("semantic_models", [])
                if sm_name not in table_node_props["semantic_models"]:
                    table_node_props["semantic_models"].append(sm_name)
                add_edge(
                    edges,
                    dataset_id,
                    table_id,
                    "SOURCE_TABLE",
                    "SOURCE_TABLE",
                    source_description,
                    {
                        "source_field": "semantic_model.datasets.source/custom_extensions",
                        "dataset": dataset_name,
                        "source_table": table_ref,
                    },
                )

            for field in dataset.get("fields") or []:
                field_name = field.get("name")
                if not field_name:
                    continue
                field_ref = f"{dataset_name}.{field_name}"
                field_index[field_ref] = {"dataset": dataset, "field": field}
                field_id = dataset_field_node_id(field_ref)
                field_expression = expression_text(field.get("expression"))
                add_node(
                    nodes,
                    field_id,
                    "dataset_field",
                    field_name,
                    {
                        "description": field.get("description", ""),
                        "parent": dataset_id,
                        "data_type": field_physical_type(field) or ("time" if field.get("dimension", {}).get("is_time") else "field"),
                        "nullable": field_nullable(field),
                        "expression": field_expression,
                        "dataset": dataset_name,
                        "field": field_name,
                        "semantic_model": sm_name,
                        "semantic_models": [sm_name],
                        "ontology": mapping_ontology,
                        "ontologies": [mapping_ontology],
                    },
                )
                catalog[field_id] = {
                    "id": field_id,
                    "type": "dataset_field",
                    "name": field_name,
                    "description": field.get("description", ""),
                    "parent": dataset_id,
                    "dataset": dataset_name,
                    "field": field_name,
                    "expression": field_expression,
                    "semantic_model": sm_name,
                    "semantic_models": [sm_name],
                    "ontology": mapping_ontology,
                    "ontologies": [mapping_ontology],
                    "field_definition": field,
                }
                add_edge(
                    edges,
                    dataset_id,
                    field_id,
                    "CONTAINS",
                    "contains",
                    field.get("description", ""),
                    {"source_field": "semantic_model.datasets.fields"},
                )
                for ref in expression_refs(field.get("expression")):
                    if ref.get("dataset") and ref.get("field"):
                        dataset_field_dependencies.append(
                            (
                                field_id,
                                f'{ref["dataset"]}.{ref["field"]}',
                                field.get("description", ""),
                                field_expression,
                            )
                        )
                scalar_column = scalar_expression_column(field_expression)
                if scalar_column and len(source_tables) == 1:
                    table_ref = source_tables[0]
                    table_id = physical_table_node_id(table_ref)
                    column_ref = f"{table_ref}.{scalar_column}"
                    column_id = column_node_id(column_ref)
                    add_node(
                        nodes,
                        column_id,
                        "column",
                        scalar_column,
                        {
                            "description": field.get("description", ""),
                            "parent": table_id,
                            "data_type": field_physical_type(field) or "column",
                            "nullable": field_nullable(field),
                            "expression": scalar_column,
                            "physical_field": column_ref,
                            "dataset_field": field_ref,
                        },
                    )
                    catalog[column_id] = {
                        "id": column_id,
                        "type": "column",
                        "name": scalar_column,
                        "description": field.get("description", ""),
                        "parent": table_id,
                        "physical_field": column_ref,
                        "dataset_field": field_ref,
                    }
                    table_catalog = catalog.setdefault(
                        table_id,
                        {
                            "id": table_id,
                            "type": "physical_table",
                            "name": physical_table_label(table_ref),
                            "description": "",
                            "source": table_ref,
                            "columns": [],
                            "source_datasets": [],
                            "semantic_model": sm_name,
                        },
                    )
                    existing_columns = {col.get("name") for col in table_catalog.setdefault("columns", []) if isinstance(col, dict)}
                    if scalar_column not in existing_columns:
                        table_catalog["columns"].append(
                            {
                                "name": scalar_column,
                                "description": field.get("description", ""),
                                "data_type": field_physical_type(field),
                                "nullable": field_nullable(field),
                            }
                        )
                    add_edge(
                        edges,
                        field_id,
                        column_id,
                        "SOURCE_FIELD",
                        "SOURCE_FIELD",
                        field.get("description", ""),
                        {
                            "source_field": "semantic_model.datasets.fields.expression",
                            "dataset_field": field_ref,
                            "physical_field": column_ref,
                            "expression": field_expression,
                        },
                    )

        for field_id, source_ref, description_text, expression_value in dataset_field_dependencies:
            target_field_id = dataset_field_node_id(source_ref)
            if target_field_id in nodes:
                add_edge(
                    edges,
                    field_id,
                    target_field_id,
                    "SOURCE_FIELD",
                    "SOURCE_FIELD",
                    description_text,
                    {
                        "source_field": "semantic_model.datasets.fields.expression",
                        "dataset_field": source_ref,
                        "expression": expression_value,
                    },
                )

        for rel in sm.get("relationships") or []:
            source = dataset_node_id(rel.get("from", ""))
            target = dataset_node_id(rel.get("to", ""))
            join_label = dataset_join_label(rel)
            rel_ai_context = rel.get("ai_context")
            edge_properties = {
                "join_name": rel.get("name", "join"),
                "relationship": rel,
            }
            if rel_ai_context:
                edge_properties["ai_context"] = rel_ai_context
            add_edge(
                edges,
                source,
                target,
                "DATASET_JOIN",
                join_label,
                "",
                edge_properties,
            )

        for metric in sm.get("metrics") or []:
            metric_name = metric.get("name")
            if not metric_name:
                continue
            metric_definitions_by_name[metric_name] = metric
            metric_id = node_id("metric", metric_name)
            metric_expression = expression_text(metric.get("expression"))
            metric_source_fields = sorted({
                f'{ref["dataset"]}.{ref["field"]}'
                for ref in expression_refs(metric.get("expression"))
                if ref.get("dataset") and ref.get("field")
            })
            metric_source_datasets = sorted({field_ref.split(".", 1)[0] for field_ref in metric_source_fields})
            add_node(
                nodes,
                metric_id,
                "semantic_metric",
                metric.get("label") or metric_name,
                {
                    "description": metric.get("description", ""),
                    "semantic_model": sm_name,
                    "semantic_models": [sm_name],
                    "ontology": mapping_ontology,
                    "semantic_metric": metric_name,
                    "expression": metric_expression,
                    "source_fields": metric_source_fields,
                    "metric": metric,
                },
            )
            catalog[metric_id] = {
                "id": metric_id,
                "type": "semantic_metric",
                "name": metric.get("label") or metric_name,
                "description": metric.get("description", ""),
                "semantic_model": sm_name,
                    "semantic_models": [sm_name],
                    "ontology": mapping_ontology,
                    "semantic_metric": metric_name,
                "expression": metric_expression,
                "source_fields": metric_source_fields,
                "metric": metric,
            }
            for dataset_name in metric_source_datasets:
                dataset_id = dataset_node_id(dataset_name)
                if dataset_id in nodes:
                    add_edge(
                        edges,
                        metric_id,
                        dataset_id,
                        "DERIVED_BY",
                        "DERIVED_BY",
                        metric.get("description", ""),
                        {
                            "source_field": "semantic_model.metrics.expression",
                            "semantic_metric": metric_name,
                            "expression": metric_expression,
                            "source_fields": [field_ref for field_ref in metric_source_fields if field_ref.startswith(f"{dataset_name}.")],
                        },
                    )
            for field_ref in metric_source_fields:
                field_id = dataset_field_node_id(field_ref)
                if field_id in nodes:
                    add_edge(
                        edges,
                        metric_id,
                        field_id,
                        "DERIVED_BY",
                        field_ref,
                        metric.get("description", ""),
                        {
                            "source_field": "semantic_model.metrics.expression",
                            "semantic_metric": metric_name,
                            "expression": metric_expression,
                            "dataset_field": field_ref,
                        },
                    )

        mapping_tables_by_concept: dict[str, set[str]] = defaultdict(set)
        mapping_fields_by_concept: dict[str, set[str]] = defaultdict(set)
        mapping_value_fields_by_concept: dict[str, set[tuple[str, str]]] = defaultdict(set)
        mapping_metric_fields_by_concept: dict[str, set[tuple[str, str]]] = defaultdict(set)
        mapping_metrics_by_concept: dict[str, set[str]] = defaultdict(set)
        mapping_rows_by_concept: dict[str, list[dict[str, Any]]] = defaultdict(list)
        mapping_context_by_concept_dataset: dict[str, dict[str, list[Any]]] = defaultdict(lambda: defaultdict(list))
        for annotation in data.get("mapping_edge_annotations") or []:
            concept_name = annotation.get("concept")
            dataset_name = annotation.get("dataset")
            description = annotation.get("description")
            if concept_name and dataset_name and description:
                mapping_context_by_concept_dataset[concept_name][dataset_name].append({"description": description})

        for concept_mapping in ontology_map.get("concept_mappings") or []:
            concept = concept_mapping.get("concept")
            if not concept:
                continue
            concept_id = ensure_concept(concept)
            if not concept_id:
                continue
            if SHOW_CONTAINER_NODES:
                add_edge(edges, map_id, concept_id, "MAPS_CONCEPT", "maps concept", f"{ontology_map.get('name')} maps {concept}.")

            for object_mapping in concept_mapping.get("object_mappings") or []:
                refs = walk_object_mapping(object_mapping)
                fields = sorted({f'{ref["dataset"]}.{ref["field"]}' for ref in refs})
                mapping_rows_by_concept[concept].append(
                    {
                        "kind": "object_mapping",
                        "fields": fields,
                        "expressions": sorted({ref["expression"] for ref in refs if ref.get("expression")}),
                    }
                )
                for rel_ref in relationship_field_refs(object_mapping):
                    metric_name = metric_reference_name(rel_ref["field"], semantic_metric_names)
                    if metric_name:
                        mapping_metric_fields_by_concept[concept].add((rel_ref["relationship"], metric_name))
                        mapping_metrics_by_concept[concept].add(metric_name)
                    else:
                        mapping_value_fields_by_concept[concept].add((rel_ref["relationship"], rel_ref["field"]))
                for ref in refs:
                    if ref.get("dataset") == "metric" and ref.get("field") in semantic_metric_names:
                        mapping_metrics_by_concept[concept].add(ref["field"])
                        continue
                    mapping_tables_by_concept[concept].add(ref["dataset"])
                    mapping_fields_by_concept[concept].add(f'{ref["dataset"]}.{ref["field"]}')

            for link_mapping in concept_mapping.get("link_mappings") or []:
                rows: list[dict[str, Any]] = []
                walk_link_mapping(link_mapping, rows)
                refs, relationship_refs = source_concept_link_refs(
                    link_mapping,
                    value_relationship_names_by_concept.get(concept, set()),
                )
                mapping_rows_by_concept[concept].extend({"kind": "link_mapping", **row} for row in rows)
                for rel_ref in relationship_refs:
                    metric_name = metric_reference_name(rel_ref["field"], semantic_metric_names)
                    if metric_name:
                        mapping_metric_fields_by_concept[concept].add((rel_ref["relationship"], metric_name))
                        mapping_metrics_by_concept[concept].add(metric_name)
                    else:
                        mapping_value_fields_by_concept[concept].add((rel_ref["relationship"], rel_ref["field"]))
                for ref in refs:
                    if ref.get("dataset") == "metric" and ref.get("field") in semantic_metric_names:
                        mapping_metrics_by_concept[concept].add(ref["field"])
                        continue
                    mapping_tables_by_concept[concept].add(ref["dataset"])
                    mapping_fields_by_concept[concept].add(f'{ref["dataset"]}.{ref["field"]}')

        for concept, datasets in mapping_tables_by_concept.items():
            concept_id = ensure_concept(concept)
            for dataset_name in sorted(datasets):
                dataset_id = dataset_node_id(dataset_name)
                if dataset_id in nodes:
                    edge_properties = {
                        "fields": sorted(field for field in mapping_fields_by_concept[concept] if field.startswith(f"{dataset_name}.")),
                    }
                    contexts = mapping_context_by_concept_dataset[concept].get(dataset_name) or []
                    edge_description = "；".join(item.get("description", "") for item in contexts if item.get("description"))
                    if contexts:
                        edge_properties["ai_context"] = contexts[0] if len(contexts) == 1 else contexts
                    add_edge(
                        edges,
                        concept_id,
                        dataset_id,
                        "MAPS_TO",
                        "MAPS_TO",
                        edge_description,
                        edge_properties,
                    )

            for metric_name in sorted(mapping_metrics_by_concept.get(concept, set())):
                metric_id = node_id("metric", metric_name)
                metric = metric_definitions_by_name.get(metric_name, {})
                if metric_id in nodes:
                    add_edge(
                        edges,
                        concept_id,
                        metric_id,
                        "MAPS_TO",
                        "MAPS_TO",
                        metric.get("description", ""),
                        {
                            "source_field": "ontology_mappings.concept_mappings",
                            "semantic_metric": metric_name,
                            "semantic_reference": f"metric.{metric_name}",
                        },
                    )

            for relationship, field_ref in sorted(mapping_value_fields_by_concept[concept]):
                value_id = node_id("value", f"{concept}.{relationship}")
                field_id = dataset_field_node_id(field_ref)
                if value_id in nodes and field_id in nodes:
                    add_edge(
                        edges,
                        value_id,
                        field_id,
                        "MAPS_TO_FIELD",
                        relationship,
                        f"{concept}.{relationship} maps to semantic dataset field {field_ref}.",
                        {
                            "source_field": "ontology_mappings.concept_mappings",
                            "dataset_field": field_ref,
                        },
                    )

            for relationship, metric_name in sorted(mapping_metric_fields_by_concept[concept]):
                value_id = node_id("value", f"{concept}.{relationship}")
                metric = metric_definitions_by_name.get(metric_name, {})
                source_fields = sorted({
                    f'{ref["dataset"]}.{ref["field"]}'
                    for ref in expression_refs(metric.get("expression"))
                    if ref.get("dataset") and ref.get("field")
                })
                if value_id in nodes:
                    nodes[value_id].setdefault("properties", {})["calculation_type"] = "metric"
                    nodes[value_id]["properties"]["semantic_metric"] = metric_name
                    nodes[value_id]["properties"]["semantic_reference"] = f"metric.{metric_name}"
                    nodes[value_id]["properties"]["expression"] = expression_text(metric.get("expression"))
                    nodes[value_id]["properties"]["source_fields"] = source_fields
                    nodes[value_id]["properties"]["metric"] = metric
                    if value_id in catalog:
                        catalog[value_id]["calculation_type"] = "metric"
                        catalog[value_id]["semantic_metric"] = metric_name
                        catalog[value_id]["semantic_reference"] = f"metric.{metric_name}"
                        catalog[value_id]["metric"] = metric
                    metric_id = node_id("metric", metric_name)
                    if metric_id in nodes:
                        add_edge(
                            edges,
                            value_id,
                            metric_id,
                            "DERIVED_BY",
                            metric_name,
                            f"{concept}.{relationship} is derived by semantic metric {metric_name}.",
                            {
                                "source_field": "ontology_mappings.concept_mappings",
                                "semantic_metric": metric_name,
                                "semantic_reference": f"metric.{metric_name}",
                                "expression": expression_text(metric.get("expression")),
                                "metric_value_binding": True,
                            },
                        )
                    for field_ref in source_fields:
                        field_id = dataset_field_node_id(field_ref)
                        if field_id in nodes:
                            add_edge(
                                edges,
                                value_id,
                                field_id,
                                "DERIVED_BY",
                                field_ref,
                                f"Metric-backed field {concept}.{relationship} uses semantic dataset field {field_ref}.",
                                {
                                    "source_field": "semantic_model.metrics.expression",
                                    "semantic_metric": metric_name,
                                    "semantic_reference": f"metric.{metric_name}",
                                    "expression": expression_text(metric.get("expression")),
                                    "dataset_field": field_ref,
                                },
                            )

            catalog_entry = catalog.setdefault(
                concept_id,
                {"id": concept_id, "type": nodes[concept_id]["type"], "name": concept, "mappings": []},
            )
            catalog_entry["mappings"] = mapping_rows_by_concept[concept]
            catalog_entry["mapped_datasets"] = sorted(datasets)
            catalog_entry["mapped_tables"] = sorted(datasets)
            catalog_entry["mapped_fields"] = sorted(mapping_fields_by_concept[concept])
            catalog_entry["mapped_metrics"] = sorted(mapping_metrics_by_concept[concept])

    semantic_metric_names = {
        metric.get("name")
        for ontology_map in data.get("ontology_mappings") or []
        for metric in ((ontology_map.get("semantic_model") or {}).get("metrics") or [])
        if metric.get("name")
    }

    def normalize_semantic_reference(reference: str) -> str:
        if reference in semantic_metric_names:
            return f"metric.{reference}"
        return reference

    def semantic_reference_node(reference: str) -> str:
        concept_name, relationship = semantic_reference_parts(reference)
        if not concept_name:
            return ""
        value_id = node_id("value", f"{concept_name}.{relationship}")
        if value_id in nodes:
            return value_id
        concept_id = node_id("concept", concept_name)
        return concept_id if concept_id in nodes else ""

    requirement_ids: dict[str, str] = {}
    requirement_field_ids: dict[str, dict[str, str]] = defaultdict(dict)
    for requirement in data.get("reporting_requirements") or []:
        name = requirement.get("name")
        if not name:
            continue
        requirement_id = node_id("requirement", name)
        requirement_ids[name] = requirement_id
        semantic_scope = requirement.get("semantic_scope") or {}
        add_node(
            nodes,
            requirement_id,
            "regulatory_requirement",
            name,
            {
                "description": requirement.get("description", ""),
                "source": requirement.get("source") or "",
                "SLA": requirement.get("SLA") or "",
            },
        )
        catalog[requirement_id] = {
            "id": requirement_id,
            "type": "regulatory_requirement",
            "name": name,
            "description": requirement.get("description", ""),
            "source": requirement.get("source"),
            "SLA": requirement.get("SLA"),
            "semantic_scope": semantic_scope,
            "required_fields": semantic_scope.get("required_fields") or [],
            "calculations": requirement.get("calculations") or [],
            "controls": requirement.get("controls") or [],
        }

        required_concepts: set[str] = set()
        concept_scope_descriptions: dict[str, str] = {}
        for concept_entry in semantic_scope.get("concepts") or []:
            if isinstance(concept_entry, dict):
                concept_name = concept_entry.get("name") or concept_entry.get("concept")
                concept_description = concept_entry.get("description") or ""
            else:
                concept_name = concept_entry
                concept_description = ""
            if concept_name:
                required_concepts.add(concept_name)
                if concept_description:
                    concept_scope_descriptions[concept_name] = concept_description

        concept_requirement_descriptions: dict[str, list[str]] = defaultdict(list)
        concept_requirement_fields: dict[str, list[dict[str, str]]] = defaultdict(list)

        for rel in semantic_scope.get("relationships") or []:
            required_concepts.update([rel.get("source"), rel.get("target")])
            rel_description = rel.get("description") or rel.get("purpose") or ""
            for concept_name in (rel.get("source"), rel.get("target")):
                if concept_name and rel_description:
                    concept_requirement_descriptions[concept_name].append(rel_description)

        for field in semantic_scope.get("required_fields") or []:
            semantic_ref = normalize_semantic_reference(field.get("semantic_reference", ""))
            concept_name, _relationship = semantic_reference_parts(semantic_ref)
            concept_name = field.get("concept") or concept_name
            if concept_name:
                required_concepts.add(concept_name)
                field_name = field.get("name") or semantic_ref
                field_description = field.get("description") or ""
                concept_requirement_fields[concept_name].append(
                    {
                        "name": field_name,
                        "semantic_reference": semantic_ref,
                        "description": field_description,
                    }
                )
                if field_description:
                    concept_requirement_descriptions[concept_name].append(f"{field_name}: {field_description}")

        for calc in requirement.get("calculations") or []:
            semantic_ref = normalize_semantic_reference(calc.get("output", ""))
            concept_name, _relationship = semantic_reference_parts(semantic_ref)
            if concept_name:
                required_concepts.add(concept_name)
                calc_name = calc.get("name") or semantic_ref
                calc_description = calc.get("description") or ""
                concept_requirement_fields[concept_name].append(
                    {
                        "name": calc_name,
                        "semantic_reference": semantic_ref,
                        "description": calc_description,
                    }
                )
                if calc_description:
                    concept_requirement_descriptions[concept_name].append(f"{calc_name}: {calc_description}")

        for concept_name in sorted(item for item in required_concepts if item):
            concept_id = ensure_concept(concept_name)
            if concept_id:
                descriptions = list(dict.fromkeys(concept_requirement_descriptions.get(concept_name, [])))
                fields = concept_requirement_fields.get(concept_name, [])
                add_edge(
                    edges,
                    requirement_id,
                    concept_id,
                    "REQUIRES_CONCEPT",
                    "REQUIRES_CONCEPT",
                    concept_scope_descriptions.get(concept_name) or "; ".join(descriptions),
                    {
                        "source_field": "reporting_requirements.semantic_scope.concepts",
                        "required_fields": fields,
                    },
                )

        for rel in semantic_scope.get("relationships") or []:
            source_id = ensure_concept(rel.get("source", ""))
            target_id = ensure_concept(rel.get("target", ""))
            rel_name = rel.get("relationship", "relationship")
            relationship_path = f"{rel.get('source')}.{rel_name}"
            rel_description = rel.get("purpose") or f"{name} requires {relationship_path} -> {rel.get('target')}."

            item_id = node_id("requirement_item", f"{name}.{rel.get('source')}.{rel_name}")
            add_node(
                nodes,
                item_id,
                "requirement_semantic_item",
                relationship_path,
                {
                    "parent": requirement_id,
                    "description": rel_description,
                    "data_type": "relationship",
                    "semantic_reference": relationship_path,
                    "source_concept": rel.get("source"),
                    "target_concept": rel.get("target"),
                    "relationship": rel_name,
                    "required": rel.get("mandatory"),
                    "purpose": rel.get("purpose"),
                },
            )
            add_edge(edges, requirement_id, item_id, "CONTAINS", "CONTAINS", rel_description)
            if source_id:
                add_edge(edges, item_id, source_id, "REQUIRES_SEMANTIC_RELATIONSHIP", "REQUIRES_SEMANTIC_RELATIONSHIP", rel_description)
            if target_id:
                add_edge(edges, item_id, target_id, "REQUIRES_SEMANTIC_RELATIONSHIP", "REQUIRES_SEMANTIC_RELATIONSHIP", rel_description)

        for field in semantic_scope.get("required_fields") or []:
            item_name = field.get("name") or field.get("semantic_reference")
            semantic_ref = normalize_semantic_reference(field.get("semantic_reference") or "")
            item_id = node_id("requirement_item", f"{name}.{semantic_ref or item_name}")
            concept_name, relationship_name = semantic_reference_parts(semantic_ref)
            semantic_node = semantic_reference_node(semantic_ref)
            semantic_props = nodes.get(semantic_node, {}).get("properties", {}) if semantic_node else {}
            value_concept = semantic_props.get("value_concept") or semantic_props.get("data_type")
            add_node(
                nodes,
                item_id,
                "requirement_semantic_item",
                item_name or semantic_ref,
                {
                    "parent": requirement_id,
                    "description": field.get("description") or field.get("rule") or f"{name} requires {semantic_ref}.",
                    "data_type": value_concept or "semantic field",
                    "semantic_reference": semantic_ref,
                    "value_concept": value_concept,
                    "source_concept": concept_name,
                    "relationship": relationship_name,
                    "required": field.get("required"),
                    "rule": field.get("rule"),
                },
            )
            catalog[item_id] = {
                "id": item_id,
                "type": "requirement_semantic_item",
                "name": item_name,
                "description": field.get("description") or field.get("purpose") or field.get("rule") or "",
                "parent": requirement_id,
                "semantic_reference": semantic_ref,
                "required_field": field,
            }
            requirement_field_ids[name][item_name] = item_id
            add_edge(edges, requirement_id, item_id, "CONTAINS", "CONTAINS", field.get("description") or "")
            if semantic_node:
                add_edge(
                    edges,
                    item_id,
                    semantic_node,
                    "REQUIRES_SEMANTIC_FIELD",
                    "REQUIRES_SEMANTIC_FIELD",
                    field.get("description") or "",
                    {"required_field": field},
                )

        for calc in requirement.get("calculations") or []:
            calc_id = node_id("requirement_item", f"{name}.{normalize_semantic_reference(calc.get('output') or calc.get('name', 'calculation'))}")
            add_node(
                nodes,
                calc_id,
                "requirement_semantic_item",
                calc.get("name", "calculation"),
                {
                    "parent": requirement_id,
                    "description": calc.get("description", ""),
                    "data_type": "calculation",
                    "semantic_reference": normalize_semantic_reference(calc.get("output", calc.get("name", ""))),
                    "expression": calc.get("expression", ""),
                    "inputs": calc.get("inputs") or [],
                },
            )
            requirement_field_ids[name][calc.get("name", "calculation")] = calc_id
            if calc.get("output"):
                requirement_field_ids[name][calc.get("output")] = calc_id
            add_edge(edges, requirement_id, calc_id, "CONTAINS", "CONTAINS", calc.get("description", ""))
            for input_ref in calc.get("inputs") or []:
                semantic_node = semantic_reference_node(input_ref)
                if semantic_node:
                    add_edge(edges, calc_id, semantic_node, "DERIVED_FROM", "DERIVED_FROM", calc.get("description", ""))

    for implementation in data.get("report_data_logic") or []:
        name = implementation.get("name")
        if not name:
            continue
        implementation_id = node_id("report_impl", name)
        add_node(
            nodes,
            implementation_id,
            "report_implementation",
            name,
            {
                "description": implementation.get("description", ""),
                "implements": implementation.get("implements", ""),
            },
        )
        catalog[implementation_id] = {
            "id": implementation_id,
            "type": "report_implementation",
            "name": name,
            "description": implementation.get("description", ""),
            "implements": implementation.get("implements"),
            "field_mappings": implementation.get("field_mappings") or [],
            "source_fields": implementation.get("source_fields") or [],
        }
        requirement_id = requirement_ids.get(implementation.get("implements", ""))
        if requirement_id:
            add_edge(
                edges,
                implementation_id,
                requirement_id,
                "IMPLEMENTS",
                "IMPLEMENTS",
                implementation.get("description", ""),
            )

        source_table_descriptions: dict[str, list[str]] = defaultdict(list)
        source_table_fields: dict[str, set[str]] = defaultdict(set)

        def remember_source_table(field_ref: str, description: str) -> None:
            if not field_ref or "." not in str(field_ref):
                return
            dataset = str(field_ref).split(".", 1)[0]
            source_table_fields[dataset].add(str(field_ref))
            if description and description not in source_table_descriptions[dataset]:
                source_table_descriptions[dataset].append(description)

        for field in implementation.get("field_mappings") or []:
            field_name = field.get("name")
            field_description = field.get("description") or ""
            dataset_name = field.get("dataset")
            dataset_field_name = field.get("dataset_field") or field.get("field") or field.get("name")
            field_ref = f"{dataset_name}.{dataset_field_name}" if dataset_name and dataset_field_name else ""
            binding_id = node_id("implementation_field", field_ref or f"{name}.{field_name}")
            expression = field.get("expression")
            expression = expression if expression is not None else field.get("source_field", "")
            expression_value = expression_text(expression)
            expression_field_refs = sorted(
                {
                    f'{ref["dataset"]}.{ref["field"]}'
                    for ref in expression_refs(expression)
                    if ref.get("dataset") and ref.get("field")
                }
            )
            add_node(
                nodes,
                binding_id,
                "implementation_field_binding",
                field_name or field_ref,
                {
                    "parent": implementation_id,
                    "description": field_description,
                    "data_type": "logic field",
                    "binding_role": "logic field",
                    "dataset": dataset_name,
                    "field": field_name,
                    "dataset_field": field_ref,
                    "requirement_field": field.get("requirement_field"),
                    "source_field": field.get("source_field"),
                    "expression": expression_value,
                    "expression_fields": expression_field_refs,
                },
            )
            catalog[binding_id] = {
                "id": binding_id,
                "type": "implementation_field_binding",
                "name": field_name or field_ref,
                "description": field_description,
                "parent": implementation_id,
                "implementation_field": field,
            }
            add_edge(edges, implementation_id, binding_id, "CONTAINS", "CONTAINS", field_description)
            if field_ref and dataset_field_node_id(field_ref) in nodes:
                add_edge(edges, binding_id, dataset_field_node_id(field_ref), "MAPS_TO_FIELD", "MAPS_TO_FIELD", field_description)
            read_refs = {ref for ref in expression_field_refs if ref != field_ref}
            source_ref = field.get("source_field")
            if source_ref:
                remember_source_table(source_ref, field_description)
            for expr_ref in expression_field_refs:
                remember_source_table(expr_ref, field_description)
            if field_ref and not expression_field_refs and not source_ref:
                remember_source_table(field_ref, field_description)
            if source_ref and source_ref != field_ref:
                read_refs.add(source_ref)
            for read_ref in sorted(read_refs):
                if read_ref and dataset_field_node_id(read_ref) in nodes:
                    add_edge(edges, binding_id, dataset_field_node_id(read_ref), "SOURCE_FIELD", "SOURCE_FIELD", field_description)
            implemented_requirement = requirement_field_ids.get(implementation.get("implements", ""), {}).get(field.get("requirement_field", ""))
            if implemented_requirement:
                add_edge(
                    edges,
                    binding_id,
                    implemented_requirement,
                    "IMPLEMENTS_FIELD",
                    "IMPLEMENTS_FIELD",
                    field_description,
                    {
                        "requirement": implementation.get("implements", ""),
                        "requirement_field": field.get("requirement_field"),
                        "expression": expression_value,
                    },
                )
        for field_ref in implementation.get("source_fields") or []:
            remember_source_table(str(field_ref), "")
        for dataset_name in sorted(source_table_fields):
            table_id = dataset_node_id(dataset_name)
            if table_id in nodes:
                add_edge(
                    edges,
                    implementation_id,
                    table_id,
                    "SOURCE_TABLE",
                    "SOURCE_TABLE",
                    "；".join(source_table_descriptions.get(dataset_name) or []),
                    {"source_fields": sorted(source_table_fields[dataset_name])},
                )

    graph = {"nodes": list(nodes.values()), "edges": list(edges.values())}

    search = []
    for item in graph["nodes"]:
        raw = catalog.get(item["id"], {})
        text_parts = [
            item["id"],
            item["type"],
            item["label"],
            item["properties"].get("description", ""),
            raw.get("description", ""),
            raw.get("source", ""),
            " ".join(raw.get("mapped_tables") or []),
            " ".join(raw.get("mapped_fields") or []),
        ]
        search.append({"id": item["id"], "type": item["type"], "text": " ".join(str(part) for part in text_parts if part)})

    summary = {
        "ontology": ontology_names[0] if len(ontology_names) == 1 else "Multiple OSI Ontologies",
        "ontologies": ontology_names,
        "source_ontologies": source_ontology_entries,
        "semantic_models": list(semantic_models),
        "source_semantic_models": semantic_model_entries,
        "entity_type_concepts": sum(1 for entry in declared_concepts.values() if normalized_concept_type(entry["concept"]) == "EntityType"),
        "base_entity_concepts": len(base_entity_names),
        "value_type_concepts": sum(1 for entry in declared_concepts.values() if normalized_concept_type(entry["concept"]) == "ValueType"),
        "regulatory_requirements": sum(1 for n in graph["nodes"] if n["type"] == "regulatory_requirement"),
        "report_data_logic": sum(1 for n in graph["nodes"] if n["type"] == "report_implementation"),
        "semantic_datasets": sum(1 for n in graph["nodes"] if n["type"] == "semantic_dataset"),
        "physical_tables": sum(1 for n in graph["nodes"] if n["type"] == "physical_table"),
        "edges": len(graph["edges"]),
        "warning_count": len(warnings),
        "warnings": warnings,
    }

    return graph, catalog, {"summary": summary, "search": search}


def main() -> None:
    global ROOT, SOURCE, INDEX_DIR, FRONTEND_DIR
    args = parse_args()
    ROOT = Path(args.root).resolve()
    source_values = args.sources or [args.source]
    source_paths = [resolve_path(value, ROOT).resolve() for value in source_values]
    SOURCE = source_paths[0]
    INDEX_DIR = resolve_path(args.index_dir, ROOT).resolve()
    FRONTEND_DIR = resolve_path(args.frontend_dir, ROOT).resolve()
    template_dir = resolve_path(args.template_dir, ROOT).resolve()

    missing_sources = [path for path in source_paths if not path.exists()]
    if missing_sources:
        raise SystemExit("Input OSI YAML not found: " + ", ".join(str(path) for path in missing_sources))

    INDEX_DIR.mkdir(parents=True, exist_ok=True)
    FRONTEND_DIR.mkdir(parents=True, exist_ok=True)
    if args.copy_frontend_template:
        copy_frontend_template(template_dir, FRONTEND_DIR, args.overwrite_template)

    data = load_osi_sources(source_paths)
    app_metadata_path = resolve_path(args.app_metadata, ROOT).resolve()
    if app_metadata_path.exists():
        app_metadata = yaml.safe_load(app_metadata_path.read_text(encoding="utf-8")) or {}
        for key in ("reporting_requirements", "report_data_logic", "mapping_edge_annotations"):
            if key in app_metadata:
                data[key] = app_metadata[key]
    graph, catalog, meta = compile_catalog_and_graph(data)
    for warning in meta.get("summary", {}).get("warnings", []):
        print(f"WARNING: {warning.get('message', warning)}", file=sys.stderr)

    (INDEX_DIR / "graph.json").write_text(json.dumps(graph, indent=2, ensure_ascii=False), encoding="utf-8")
    (INDEX_DIR / "catalog.json").write_text(json.dumps(catalog, indent=2, ensure_ascii=False), encoding="utf-8")
    (INDEX_DIR / "search.json").write_text(json.dumps(meta["search"], indent=2, ensure_ascii=False), encoding="utf-8")
    (INDEX_DIR / "summary.json").write_text(json.dumps(meta["summary"], indent=2, ensure_ascii=False), encoding="utf-8")
    scenario_library = load_scenario_library(ROOT)
    (INDEX_DIR / "scenarios.json").write_text(json.dumps(scenario_library, indent=2, ensure_ascii=False), encoding="utf-8")

    graph_json = json.dumps(graph, indent=2, ensure_ascii=False)
    catalog_json = json.dumps(catalog, indent=2, ensure_ascii=False)
    summary_json = json.dumps(meta["summary"], indent=2, ensure_ascii=False)
    scenario_json = json.dumps(scenario_library, indent=2, ensure_ascii=False)

    (FRONTEND_DIR / "graph-data.js").write_text(
        "window.GRAPH_DATA = " + graph_json + ";\nwindow.OSI_GRAPH_DATA = window.GRAPH_DATA;\n",
        encoding="utf-8",
    )
    (FRONTEND_DIR / "catalog-data.js").write_text(
        "window.CATALOG_DATA = " + catalog_json + ";\nwindow.OSI_CATALOG_DATA = window.CATALOG_DATA;\n",
        encoding="utf-8",
    )
    (FRONTEND_DIR / "summary-data.js").write_text(
        "window.OSI_SUMMARY = " + summary_json + ";\n",
        encoding="utf-8",
    )
    (FRONTEND_DIR / "scenario-data.js").write_text(
        "window.SCENARIO_DATA = " + scenario_json + ";\n",
        encoding="utf-8",
    )

    print(f"Built {len(graph['nodes'])} nodes and {len(graph['edges'])} edges")


if __name__ == "__main__":
    main()






















