# Raw Scenario YAML

Use this reference for `raw/fragments/scenario.yaml`.

`scenario.yaml` describes the scenario package and names the OSI ontology, ontology mapping, and semantic model that will be generated. It does not define business concepts, tables, report fields, or mappings.

## Location

```text
raw/fragments/scenario.yaml
```

## Format

```yaml
ontology_name: CollateralMarginReportingOntology
description: OSI scenario for collateral margin regulatory reporting built from physical table metadata first.
mapping_name: CollateralMarginSemanticMapping
semantic_model_name: CollateralMarginSemanticModel
semantic_model_description: Table-backed semantic model for collateral margin reporting.
model_version: 1.0.0
owner: Collateral Regulatory Reporting
source_systems:
- margin_core
- collateral_master
- market_risk
```

## Fields

- `ontology_name`: Required. Becomes strict OSI top-level `name`.
- `description`: Optional but recommended. Becomes strict OSI top-level `description`.
- `mapping_name`: Required. Becomes `ontology_mappings[].name`.
- `semantic_model_name`: Required. Becomes `ontology_mappings[].semantic_model.name`.
- `semantic_model_description`: Optional. Becomes `ontology_mappings[].semantic_model.description`.
- `model_version`: Optional. Written to strict OSI `ai_context.model_version`.
- `owner`: Optional. Written to strict OSI `ai_context.owner`.
- `source_systems`: Optional list. Written to strict OSI `ai_context.source_systems`.

## Relationship To Other YAML

- Concept fragments are grouped under the ontology named by `ontology_name`.
- Dataset, relationship, and metric fragments are grouped under the semantic model named by `semantic_model_name`.
- Standalone `concept_mappings` fragments are grouped under the ontology mapping named by `mapping_name`.
- Reporting requirement and implementation fragments do not enter strict OSI; they enter the separate app metadata file.

## Generated OSI Shape

```yaml
version: 0.2.0.dev0
name: CollateralMarginReportingOntology
description: OSI scenario for collateral margin regulatory reporting built from physical table metadata first.
ontology: []
ontology_mappings:
- name: CollateralMarginSemanticMapping
  semantic_model:
    name: CollateralMarginSemanticModel
    description: Table-backed semantic model for collateral margin reporting.
ai_context:
  model_version: 1.0.0
  owner: Collateral Regulatory Reporting
  source_systems:
  - margin_core
```

## UI Effect

Scenario fields mostly affect catalog/profile metadata and generated graph summary. They are not ordinary business nodes in the default UI.




