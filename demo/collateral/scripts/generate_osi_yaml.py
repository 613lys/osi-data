from __future__ import annotations

import argparse
from pathlib import Path
from typing import Any

try:
    import yaml
except ImportError as exc:  # pragma: no cover - friendly local failure
    raise SystemExit("PyYAML is required. Install with: pip install pyyaml") from exc


ROOT = Path(__file__).resolve().parents[1]


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate the collateral demo OSI YAML from raw source metadata.")
    parser.add_argument("--raw", default="raw/collateral-margin-source.yaml", help="Raw source metadata YAML.")
    parser.add_argument("--output", default="knowledge/regulatory-reporting-osi.yaml", help="Generated OSI YAML.")
    return parser.parse_args()


def resolve_path(value: str | Path) -> Path:
    path = Path(value)
    return path if path.is_absolute() else ROOT / path


def expression(value: str | dict[str, Any]) -> dict[str, Any]:
    if isinstance(value, dict):
        return value
    return {"dialects": [{"dialect": "ANSI_SQL", "expression": value}]}


def field_expression(field: dict[str, Any]) -> dict[str, Any]:
    return expression(field.get("expression") or field["name"])


def concept_component(item: dict[str, Any], concept_type: str) -> dict[str, Any]:
    concept = {
        "name": item["name"],
        "type": concept_type,
    }
    for key in ("description", "extends", "derived_by", "identify_by", "requires"):
        if item.get(key):
            concept[key] = item[key]
    component = {"concept": concept}
    if item.get("relationships"):
        component["relationships"] = item["relationships"]
    return component


def dataset(item: dict[str, Any]) -> dict[str, Any]:
    output = {
        "name": item["name"],
        "source": item["source"],
        "primary_key": item.get("primary_key") or [],
        "description": item.get("description", ""),
        "fields": [],
        "ai_context": {"physical_kind": item.get("physical_kind", "table")},
    }
    for field in item.get("fields") or []:
        output["fields"].append(
            {
                "name": field["name"],
                "expression": field_expression(field),
                "ai_context": {
                    "physical_type": field.get("type", "string"),
                    "nullable": bool(field.get("nullable", False)),
                },
            }
        )
    return output


def metric(item: dict[str, Any]) -> dict[str, Any]:
    output = {
        "name": item["name"],
        "description": item.get("description", ""),
        "expression": expression(item["expression"]),
    }
    if item.get("ai_context"):
        output["ai_context"] = item["ai_context"]
    return output


def build_model(raw: dict[str, Any]) -> dict[str, Any]:
    scenario = raw["scenario"]
    ontology = raw["ontology"]
    semantic_model = raw["semantic_model"]

    components: list[dict[str, Any]] = []
    components.extend(concept_component(item, "EntityType") for item in ontology.get("base_entities") or [])
    components.extend(concept_component(item, "EntityType") for item in ontology.get("entity_types") or [])
    components.extend(concept_component(item, "ValueType") for item in ontology.get("value_types") or [])

    output = {
        "name": scenario["ontology_name"],
        "description": scenario.get("description", ""),
        "ontology": components,
        "ontology_mappings": [
            {
                "name": scenario["mapping_name"],
                "ontology": scenario["ontology_name"],
                "semantic_model": {
                    "name": scenario["semantic_model_name"],
                    "description": scenario.get("semantic_model_description", ""),
                    "datasets": [dataset(item) for item in semantic_model.get("datasets") or []],
                    "relationships": semantic_model.get("relationships") or [],
                    "metrics": [metric(item) for item in semantic_model.get("metrics") or []],
                },
                "concept_mappings": raw.get("concept_mappings") or [],
            }
        ],
        "reporting_requirements": raw.get("reporting_requirements") or [],
        "report_implementations": raw.get("report_implementations") or [],
        "ai_context": {
            "model_version": scenario.get("model_version", "1.0.0"),
            "owner": scenario.get("owner", ""),
            "source_systems": scenario.get("source_systems") or [],
        },
    }
    return output


def main() -> None:
    args = parse_args()
    raw_path = resolve_path(args.raw)
    output_path = resolve_path(args.output)
    raw = yaml.safe_load(raw_path.read_text(encoding="utf-8"))
    output = build_model(raw)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(yaml.safe_dump(output, sort_keys=False, allow_unicode=True), encoding="utf-8")
    print(f"Wrote {output_path}")


if __name__ == "__main__":
    main()
