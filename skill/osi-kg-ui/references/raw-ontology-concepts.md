# Raw Ontology Concept YAML Index

Use this reference as the entry point for authoring ontology and concept mapping fragments. Detailed formats are split by responsibility so agents only load the section they need.

These files define semantic concepts and their semantic-to-physical mappings. They do not define physical tables; physical tables belong in `semantic_model/datasets/*.yaml` and render as green Table nodes in the UI.

## Naming Rules

- English concept names must use UpperCamelCase, for example `AccountData`, `MarginAccount`, `BaseCurrency`, `CollateralAsset`, `AccountIdentifier`.
- Base Entity names must end with `Data`, for example `TransactionData`, `PositionData`, `AccountData`.
- EntityType-to-EntityType relationship names use `<ACTION>_<EntityConceptName>` with the controlled action list in `raw-ontology-entity-types.md`.
- EntityType-to-ValueType relationship names use semantic field names such as `has_AccountIdentifier`, `has_BaseCurrency`, or `has_MarketValueAmount`. Use this same style in Base Entity and concrete EntityType fragments.
- Keep ids stable after generation. Rename only when the semantic meaning is actually wrong.

## Fragment Locations

```text
raw/fragments/ontology/base_entities/AccountData.yaml
raw/fragments/ontology/entity_types/MarginAccount.yaml
raw/fragments/ontology/value_types.yaml
raw/fragments/concept_mappings/MarginAccount_mapping.yaml
raw/fragments/ui_annotations/mapping_edge_annotations.yaml
```

## What To Read

- `raw-ontology-base-entities.md`: Base Entity fragments. A Base Entity is an OSI `EntityType` whose `name` ends with `Data`.
- `raw-ontology-entity-types.md`: Concrete EntityType fragments and relationship rules.
- `raw-ontology-value-types.md`: Shared ValueType fragments and deduplication rules.
- `raw-concept-mappings.md`: Standalone OSI concept mapping files, required mapping coverage, and multi-source mappings.
- `raw-ui-annotations.md`: Optional UI-only annotations such as Entity-to-Dataset edge profile descriptions.

## Non-Negotiable Mapping Coverage

- Every concrete EntityType concept must have a standalone `concept_mappings/*.yaml` file.
- Every concrete EntityType `identify_by` relationship must appear in root `object_mappings[].referent_mappings`.
- Every concrete EntityType relationship, including inherited Base Entity ValueType fields, must appear in `link_mappings[].children[].relationship` or equivalent mapping evidence.
- Do not generate an EntityType relationship if no semantic model dataset field, expression, constant, or explicit gap can map it.
- Base Entity relationships are abstract and do not need their own mapping file, but each concrete EntityType inheriting them must map those inherited relationships.
- Entity Concept -> Dataset mapping is inferred from concept mapping `dataset.field` references. Optional edge-profile descriptions go in `ui_annotations/mapping_edge_annotations.yaml`, not in concept mappings.
- Mapping `expression` values must reference `semantic_model.datasets[].name.field`, not undeclared physical table names.

## UI Effect Summary

- EntityType concepts render as blue EntityType nodes.
- EntityType concepts whose `name` ends with `Data` render as Base Entity nodes.
- EntityType-to-ValueType relationships render as child field rows under EntityType nodes.
- Standalone concept mappings create `MAPS_TO` and `MAPS_TO_FIELD` edges.
- Dataset `description` appears on the Table node profile; optional app metadata `mapping_edge_annotations` appears on the `MAPS_TO` edge profile.




