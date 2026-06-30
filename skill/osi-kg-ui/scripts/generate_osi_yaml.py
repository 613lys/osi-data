from __future__ import annotations

import argparse
import json
from pathlib import Path
from typing import Any

try:
    import yaml
except ImportError as exc:  # pragma: no cover - friendly local failure
    raise SystemExit("PyYAML is required. Install with: pip install pyyaml") from exc


ROOT = Path(__file__).resolve().parents[1]


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate strict OSI YAML plus UI application metadata from raw source metadata.")
    parser.add_argument("--raw", default="raw/collateral-margin-source.yaml", help="Raw source metadata YAML.")
    parser.add_argument("--output", default="knowledge/regulatory-reporting-osi.yaml", help="Generated OSI YAML.")
    parser.add_argument("--app-output", default="knowledge/regulatory-reporting-app.yaml", help="Generated application metadata YAML.")
    return parser.parse_args()


def resolve_path(value: str | Path) -> Path:
    path = Path(value)
    if path.is_absolute():
        return path
    cwd_path = Path.cwd() / path
    if cwd_path.exists() or cwd_path.parent.exists():
        return cwd_path
    return ROOT / path


def normalize_custom_extension(extension: dict[str, Any]) -> dict[str, Any]:
    """Convert raw authoring extension shapes to strict OSI custom_extensions."""
    if not isinstance(extension, dict):
        return {"vendor_name": "OSI_KG_UI", "data": json.dumps({"value": extension}, ensure_ascii=False)}
    if extension.get("vendor_name"):
        data = extension.get("data", {})
        if not isinstance(data, str):
            data = json.dumps(data, ensure_ascii=False)
        return {"vendor_name": str(extension["vendor_name"]), "data": data}
    data: dict[str, Any] = {}
    if extension.get("name"):
        data["name"] = extension["name"]
    value = extension.get("value")
    if isinstance(value, dict):
        data.update(value)
    elif value not in (None, ""):
        data["value"] = value
    if extension.get("description") and "description" not in data:
        data["description"] = extension["description"]
    for key, value in extension.items():
        if key not in {"name", "value", "description"} and key not in data and value not in (None, "", [], {}):
            data[key] = value
    return {"vendor_name": "OSI_KG_UI", "data": json.dumps(data, ensure_ascii=False)}


def normalize_custom_extensions(items: list[dict[str, Any]] | None) -> list[dict[str, Any]]:
    return [normalize_custom_extension(item) for item in items or []]


def normalize_ai_context(value: Any) -> Any:
    return value if value not in (None, "") else {}


def default_value_type_extends(name: str) -> list[str]:
    text = str(name or "")
    lower = text.lower()
    if "datetime" in lower or lower.endswith("timestamp") or lower.endswith("time"):
        return ["DateTime"]
    if "date" in lower:
        return ["Date"]
    if any(token in lower for token in ("amount", "balance", "rate", "ratio", "price", "value", "haircut", "percentage", "pct", "decimal")):
        return ["Decimal"]
    if any(token in lower for token in ("count", "number", "quantity", "days", "months", "years")) and "identifier" not in lower:
        return ["Integer"]
    if any(token in lower for token in ("flag", "indicator", "boolean", "eligible")):
        return ["Boolean"]
    return ["String"]


def default_entity_extends(item: dict[str, Any]) -> list[str]:
    if item.get("extends"):
        return item["extends"]
    return ["Any"]


def expression(value: str | dict[str, Any]) -> dict[str, Any]:
    if isinstance(value, dict):
        return value
    return {"dialects": [{"dialect": "ANSI_SQL", "expression": value}]}


def field_expression(field: dict[str, Any]) -> dict[str, Any]:
    value = field["expression"]
    if not isinstance(value, dict):
        raise ValueError(f"Dataset field {field['name']} expression must be an OSI expression object with dialects[].")
    return value


def role_without_app_fields(role: dict[str, Any]) -> dict[str, Any]:
    return {key: value for key, value in role.items() if key in {"concept", "name"}}


def default_verbalizes(owner: str, relationship: dict[str, Any]) -> list[str]:
    roles = relationship.get("roles") or []
    if not roles:
        return [f"{{{owner}}} has relationship {relationship['name']}"]
    target = roles[-1].get("concept", "Value")
    return [f"{{{owner}}} has {relationship['name'].replace('_', ' ')} {{{target}}}"]


def relationship(owner: str, item: dict[str, Any]) -> dict[str, Any]:
    output: dict[str, Any] = {
        "name": item["name"],
        "description": item.get("description", ""),
        "roles": [role_without_app_fields(role) for role in item.get("roles") or []],
        "derived_by": item.get("derived_by") or [],
        "requires": item.get("requires") or [],
        "verbalizes": item.get("verbalizes") or default_verbalizes(owner, item),
    }
    if item.get("multiplicity"):
        output["multiplicity"] = item["multiplicity"]
    return output


def concept_component(item: dict[str, Any], concept_type: str) -> dict[str, Any]:
    extends = item.get("extends") or (default_value_type_extends(item["name"]) if concept_type == "ValueType" else default_entity_extends(item))
    concept = {
        "name": item["name"],
        "type": concept_type,
        "description": item.get("description", ""),
        "extends": extends,
        "derived_by": item.get("derived_by") or [],
        "identify_by": item.get("identify_by") or [],
        "requires": item.get("requires") or [],
    }
    return {
        "concept": concept,
        "relationships": [relationship(item["name"], rel) for rel in item.get("relationships") or []],
    }


def dataset(item: dict[str, Any]) -> dict[str, Any]:
    output = {
        "name": item["name"],
        "source": item["source"],
        "primary_key": item.get("primary_key") or [],
        "unique_keys": item.get("unique_keys") or [],
        "description": item.get("description", ""),
        "ai_context": normalize_ai_context(item.get("ai_context")),
        "fields": [],
        "custom_extensions": normalize_custom_extensions(item.get("custom_extensions")),
    }
    dataset_ai_context = output["ai_context"] if isinstance(output["ai_context"], dict) else {}
    if item.get("physical_kind"):
        dataset_ai_context.setdefault("physical_kind", item["physical_kind"])
    elif dataset_ai_context:
        dataset_ai_context.setdefault("physical_kind", "table")
    if dataset_ai_context:
        output["ai_context"] = dataset_ai_context
    for field in item.get("fields") or []:
        field_output = {
            "name": field["name"],
            "expression": field_expression(field),
            "dimension": field.get("dimension") or {},
            "label": field.get("label", ""),
            "description": field.get("description", ""),
            "ai_context": normalize_ai_context(field.get("ai_context")),
            "custom_extensions": normalize_custom_extensions(field.get("custom_extensions")),
        }
        field_ai_context = field_output["ai_context"] if isinstance(field_output["ai_context"], dict) else {}
        if field.get("type"):
            field_ai_context.setdefault("physical_type", field["type"])
        if "nullable" in field:
            field_ai_context.setdefault("nullable", bool(field.get("nullable")))
        if field_ai_context:
            field_output["ai_context"] = field_ai_context
        output["fields"].append(field_output)
    return output


def dataset_relationship(item: dict[str, Any]) -> dict[str, Any]:
    output = {
        "name": item["name"],
        "from": item["from"],
        "to": item["to"],
        "from_columns": item.get("from_columns") or [],
        "to_columns": item.get("to_columns") or [],
        "ai_context": normalize_ai_context(item.get("ai_context")),
        "custom_extensions": normalize_custom_extensions(item.get("custom_extensions")),
    }
    context_text = item.get("description") or item.get("purpose")
    if context_text:
        ai_context = output.get("ai_context")
        if isinstance(ai_context, dict):
            ai_context.setdefault("description", context_text)
        elif ai_context:
            ai_context = {"description": context_text, "notes": ai_context}
        else:
            ai_context = {"description": context_text}
        output["ai_context"] = ai_context
    return output


def metric(item: dict[str, Any]) -> dict[str, Any]:
    return {
        "name": item["name"],
        "expression": expression(item["expression"]),
        "description": item.get("description", ""),
        "ai_context": normalize_ai_context(item.get("ai_context")),
        "custom_extensions": normalize_custom_extensions(item.get("custom_extensions")),
    }


def referent_mapping(item: dict[str, Any]) -> dict[str, Any]:
    return {
        "relationship": item["relationship"],
        "expression": item.get("expression", ""),
        "referent_mappings": [referent_mapping(child) for child in item.get("referent_mappings") or []],
    }


def object_mapping(item: dict[str, Any], default_concept: str = "") -> dict[str, Any]:
    return {
        "concept": item.get("concept") or default_concept,
        "expression": item.get("expression", ""),
        "referent_mappings": [referent_mapping(child) for child in item.get("referent_mappings") or []],
    }


def link_mapping(item: dict[str, Any], default_concept: str = "") -> dict[str, Any]:
    return {
        "object_mapping": object_mapping(item["object_mapping"], default_concept),
        "relationship": item.get("relationship", ""),
        "children": [link_mapping(child) for child in item.get("children") or []],
    }


def concept_mapping(item: dict[str, Any]) -> dict[str, Any]:
    concept = item["concept"]
    return {
        "concept": concept,
        "object_mappings": [object_mapping(mapping, concept) for mapping in item.get("object_mappings") or []],
        "link_mappings": [link_mapping(mapping, concept) for mapping in item.get("link_mappings") or []],
    }


def mapping_edge_annotations(raw: dict[str, Any]) -> list[dict[str, Any]]:
    return raw.get("mapping_edge_annotations") or []


def build_model(raw: dict[str, Any]) -> dict[str, Any]:
    scenario = raw["scenario"]
    ontology = raw["ontology"]
    semantic_model = raw["semantic_model"]

    components: list[dict[str, Any]] = []
    components.extend(concept_component(item, "EntityType") for item in ontology.get("base_entities") or [])
    components.extend(concept_component(item, "EntityType") for item in ontology.get("entity_types") or [])
    components.extend(concept_component(item, "ValueType") for item in ontology.get("value_types") or [])

    output = {
        "version": scenario.get("version", "0.2.0.dev0"),
        "name": scenario["ontology_name"],
        "description": scenario.get("description", ""),
        "ontology": components,
        "ontology_mappings": [
            {
                "name": scenario["mapping_name"],
                "semantic_model": {
                    "name": scenario["semantic_model_name"],
                    "description": scenario.get("semantic_model_description", ""),
                    "ai_context": normalize_ai_context(scenario.get("semantic_model_ai_context")),
                    "datasets": [dataset(item) for item in semantic_model.get("datasets") or []],
                    "relationships": [dataset_relationship(item) for item in semantic_model.get("relationships") or []],
                    "metrics": [metric(item) for item in semantic_model.get("metrics") or []],
                    "custom_extensions": normalize_custom_extensions(semantic_model.get("custom_extensions")),
                },
                "concept_mappings": [concept_mapping(item) for item in raw.get("concept_mappings") or []],
            }
        ],
        "ai_context": {
            "model_version": scenario.get("model_version", "1.0.0"),
            "owner": scenario.get("owner", ""),
            "source_systems": scenario.get("source_systems") or [],
        },
    }
    return output


def build_app_metadata(raw: dict[str, Any]) -> dict[str, Any]:
    scenario = raw["scenario"]
    return {
        "name": f"{scenario['ontology_name']}ApplicationMetadata",
        "description": "Application-layer metadata used by the demo UI; not part of the OSI ontology schema.",
        "reporting_requirements": raw.get("reporting_requirements") or [],
        "report_data_logic": raw.get("report_data_logic") or [],
        "mapping_edge_annotations": mapping_edge_annotations(raw),
    }


def main() -> None:
    args = parse_args()
    raw_path = resolve_path(args.raw)
    output_path = resolve_path(args.output)
    app_output_path = resolve_path(args.app_output)
    raw = yaml.safe_load(raw_path.read_text(encoding="utf-8"))
    output = build_model(raw)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(yaml.safe_dump(output, sort_keys=False, allow_unicode=True), encoding="utf-8")
    app_output_path.parent.mkdir(parents=True, exist_ok=True)
    app_output_path.write_text(yaml.safe_dump(build_app_metadata(raw), sort_keys=False, allow_unicode=True), encoding="utf-8")
    print(f"Wrote {output_path}")
    print(f"Wrote {app_output_path}")


if __name__ == "__main__":
    main()
