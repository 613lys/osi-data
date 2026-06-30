# Generation Stages

Use this reference for complex regulatory reporting scenarios. Do not try to generate the final YAML in one pass. Build the YAML in stages, validate each stage, then continue.

## Stage 0: Inputs And Decisions

Collect:

- Source tables, columns, keys, nullability, comments, and sample values if available.
- Source joins and known foreign keys.
- Regulatory/BRD requirement text, raw source resource, SLA/timeliness expectations, report name, required fields, calculations, controls, non-data obligations, and output layout.
- Known business concepts, ownership/reference relationships, and identity rules.

Ask for clarification only when semantics are unsafe to infer:

- Entity boundaries.
- Composite identifiers.
- Relationship names and direction.
- Required regulatory fields.
- SLA/timeliness expectations.
- Calculation expressions.

## Stage 1: Physical Inventory And Semantic Model

Generate the semantic model from physical table metadata first. At this stage, the semantic model is a table-backed logical layer, not an ontology replacement:

```yaml
ontology_mappings:
  - name: <Scenario>SemanticMapping
    semantic_model:
      name: <Scenario>SemanticModel
      datasets:
        - name:
          type: table
          primary_key: []
          fields: []
      relationships: []
```

Constraints:

- Preserve physical table and column names.
- Do not invent physical fields.
- Put every physical or logical table that should appear in the UI in `semantic_model.datasets`; report-line tables are normal datasets, not Report Data Logic outputs.
- Generate `semantic_model.relationships[]` from known table foreign keys, join columns, reference columns, and source metadata.
- Use stable dataset names so later concept mappings can refer to `dataset.column` expressions.
- Keep semantic metrics in `semantic_model.metrics[]`; render them as selected blue semantic Metric overlay nodes in Semantic Model View, not as child rows under referenced datasets/tables.
- Do not create `physical_view`.

Stage gate:

- Every physical field needed by implementation expressions is present as a dataset field, or explicitly noted as a gap.
- Every known table relationship is represented as a `semantic_model.relationships[]` join before ontology mappings are generated.

## Stage 2: Ontology Concepts

Generate the semantic ontology from the semantic model datasets and fields, plus known business semantics:

- EntityType concepts whose names end with `Data` act as base entities in the UI, such as `TransactionData`, `PositionData`, `AccountData`.
- `EntityType` for concrete business concepts such as `Trade`, `Position`, `Account`, `Customer`, `Product`.
- `ValueType` for reusable field meanings such as `TradeIdentifier`, `AccountIdentifier`, `CurrencyCode`, `MonetaryAmount`.

Base Entity rules:

- A base entity is an OSI `EntityType` whose concept name ends with `Data`.
- Put common ValueType fields on that extended EntityType.
- Concrete EntityTypes use `extends: [<EntityType>]`.
- The graph should show `EXTENDS` as an edge, but the graph filter should leave `EXTENDS` unchecked by default.
- EntityTypes that extend another EntityType should still display inherited ValueType fields inside their own node.

Constraints:

- Do not create one EntityType per table.
- For each semantic model dataset, decide which EntityType it represents or contributes to before creating new concepts.
- For each dataset field, either map it to an existing ValueType or create one reusable ValueType with a stable id.
- Do not model a report as an EntityType unless it is a true business object.
- EntityType field roles must point to ValueTypes.
- EntityType-to-EntityType relationships must use `<action>_<role>` ids such as `HELD_BY_Depositor`, `USES_DepositProduct`, `DEPENDS_ON_CollateralAsset`, or `REFERENCES_Counterparty`.
- Relationship names must be globally unique for generated EntityType-to-EntityType business edges because the graph edge id is exactly the OSI relationship `name`.
- The action prefix is generated from the relationship semantics and is not restricted to a fixed list.
- The UI edge type and graph canvas label must be the action prefix before the final underscore only; keep the full `<action>_<role>` relationship name for the edge id and edge profile.
- Do not add UI-only fields to OSI YAML objects. Keep OSI YAML strict; put non-OSI metadata in `custom_extensions` or the separate application metadata file. Do not put top-level `reporting_requirements` or `report_data_logic` in strict OSI YAML.
- Use `extends` only for specialization/base reuse, not ownership, grouping, lineage, or tags.

Stage gate:

- Every regulatory required field can point to an EntityType field or inherited field from an extended EntityType.
- Every common cross-entity field has a ValueType.
- Repeated field meanings such as account id, currency, amount, date, status, product id, and customer id reuse the same ValueType id across EntityTypes.

## Stage 3: Ontology Mappings

Map concepts to physical datasets and fields. Build mappings from the semantic model, not from a separate invented table layer.

Use:

- concept mappings for EntityType/ValueType to physical representation.
- field mappings for EntityType roles to physical columns.
- link mappings for relationship mappings between entities/datasets.
- referent mappings for identity/reference resolution, especially composite identifiers.
- root object mapping referent mappings that exactly match each EntityType `identify_by` list, including identifiers inherited from a Base Entity.

Constraints:

- Do not use link mappings for composite identity.
- Do not use ontology mapping as the visible business edge between EntityTypes.
- The visible business edge belongs in `ontology[].relationships`.

Stage gate:

- Important EntityTypes have mapped datasets/tables at concept level.
- Important EntityType ValueType fields have field-level mappings to physical columns through `MAPS_TO_FIELD`.
- Composite identity uses referent/identity mapping.
- Every EntityType generated from a dataset has root `object_mappings[].referent_mappings` covering the same relationships listed in `identify_by`; missing or extra identity relationships are invalid.
- Relationship mappings cite the physical columns or expressions that prove the link.
- Every concrete EntityType generated from a dataset has an object mapping to that dataset.
- Every declared or inherited EntityType relationship has mapping evidence in `link_mappings[].children`; do not leave relationship-only semantics without semantic model evidence.
- Every EntityType ValueType field has an object/referent/link mapping expression to an existing `dataset.column` when the physical evidence exists.
- Reused ValueTypes keep the same concept id so the graph can derive `SHARES_VALUE_TYPE`.

## Stage 4: Report Requirement Application Metadata

Generate requirements after concepts exist. These structures are application-layer metadata for the UI and must be written to the separate app metadata file, not to the strict OSI YAML.

Required structure:

```yaml
reporting_requirements:
  - name:
    type: ReportRequirement
    description:
    source:
    SLA:
    semantic_scope:
      concepts: []
      required_fields: []
      controls: []
      # relationships: []  # optional; only when raw requirement explicitly requires an EntityType relationship
    calculations: []
```

Generated graph edges:

- Requirement -> EntityType with `REQUIRES_CONCEPT`.
- Requirement -> required field item with `CONTAINS`.
- Required field item -> EntityType value field with `REQUIRES_SEMANTIC_FIELD`.
- Calculation item -> input EntityType value fields with `DERIVED_FROM`.
- Requirement -> relationship item -> source/target EntityTypes only when `semantic_scope.relationships[]` is explicitly justified by the raw requirement.

Constraints:

- `description` is required and should be written from the regulatory/BRD requirement perspective, preferably in Chinese for Chinese scenarios. Include non-data obligations such as timing, review, retention, approval, submission channel, or exception handling in `description` instead of inventing data fields.
- `source` is required and cites the raw resource behind the requirement as one string, such as regulation article, BRD, spreadsheet tab, Jira/Confluence page, email, or interview note.
- `SLA` captures timeliness, review, submission, retention, or operational service expectations. Use it instead of fixed `reporting_frequency`.
- Do not generate fixed Report Requirement fields named `regulator`, `regulation`, `reporting_frequency`, or `reporting_grain`.
- Requirement scope includes only required concepts, fields, calculations, controls, and explicit relationship requirements. Do not infer relationship requirements just because fields come from related EntityTypes.
- Do not pull every field from an EntityType into the requirement.
- Requirement fields are data items extracted from the requirement. Each required field must have Chinese `name`, Chinese `description`, `semantic_reference`, and `required`; do not repeat `concept`, `relationship`, `value_concept`, or `purpose`.
- Each requirement field must resolve to an already declared EntityType ValueType field, a semantic metric, or an explicit gap.
- Do not create new ValueTypes during requirement generation unless the missing semantic meaning is confirmed and then backfilled into Stage 2/3.

Stage gate:

- Every required field `semantic_reference` resolves to an EntityType-owned value field or explicit gap, and carries a Chinese requirement-data name and description. Calculated requirement outputs must also point to EntityType-owned value fields; semantic metrics only provide calculation/mapping evidence.
- Every calculation input resolves to an EntityType value field.

## Stage 5: Report Data Logic Application Metadata

Generate data logic after the requirement is stable. These structures are application-layer metadata for the UI and must be written to the separate app metadata file, not to the strict OSI YAML. They do not create, output, own, or materialize physical tables.

Required structure:

```yaml
report_data_logic:
  - name:
    type: ReportDataLogic
    implements:
    field_mappings:
      - name:
        dataset:
        dataset_field:
        description:
        requirement_field:
        source_field:
        expression:
          dialects:
            - dialect: ANSI_SQL
              expression:
    source_fields: []
```

Required relationships:

- Data Logic -> Requirement with `IMPLEMENTS`.
- Data Logic field -> described dataset field with `MAPS_TO_FIELD`.
- Data Logic -> source dataset with `SOURCE_TABLE` from `source_fields`.
- Data Logic field -> requirement field with `IMPLEMENTS_FIELD`.
- Data Logic field -> source columns with `SOURCE_FIELD`.

Constraints:

- Data Logic fields must not connect directly to EntityType value fields.
- Never emit `IMPLEMENTS_SEMANTIC_FIELD`.
- Never use `output_datasets`, `output_field`, `materialized`, or `materializes` in Report Data Logic.
- Every field mapping should have `requirement_field` when it satisfies a requirement.
- Every field mapping should have `dataset` and `dataset_field` pointing to an existing semantic model dataset field.
- Every field mapping should have `expression.dialects[]`.
- Direct copies still get expressions such as `trades.trade_id`.
- Parse `dataset.column` references from expressions and create `SOURCE_FIELD`.
- If a report-line table exists, model it as a normal semantic model dataset and create concept mappings to EntityTypes when its fields represent semantic concepts.

Stage gate:

- Every requirement field has a data logic field mapping, or the YAML explicitly records that it is not implemented.
- Every data logic expression references existing physical columns or explicit parameters.
## Stage 6: Build And UI Validation

Run:

```powershell
python <skill-dir>\scripts\build_osi_graph.py --source knowledge\regulatory-reporting-osi.yaml --copy-frontend-template
node --check frontend\app.js
```

Validate graph data:

```text
has IMPLEMENTS_FIELD
has no IMPLEMENTS_SEMANTIC_FIELD
has SHARES_VALUE_TYPE for reused ValueTypes
has MAPS_TO_FIELD for relationship/value-field mappings to physical columns
has DERIVED_BY for semantic metrics that reference physical columns
has SOURCE_FIELD for implementation expressions
has EXTENDS for EntityType inheritance
```

Validate UI:

- EntityType nodes show own and inherited ValueType fields.
- An EntityType extended by another EntityType appears as a base semantic concept.
- `EXTENDS` exists but is unchecked by default in graph edge filters.
- Expanding a node does not draw all field-level edges.
- Clicking one field draws only that field's field-level edges.
- Field-level edges have no labels on the canvas.
- Node, edge, field, and field-edge profiles update correctly.

## Stage 7: Iterate

If validation fails, repair the earliest failing layer:

```text
physical field or semantic dataset join missing -> Stage 1
semantic concept or reused ValueType wrong -> Stage 2
concept/object/field mapping wrong -> Stage 3
requirement scope or metric reference wrong -> Stage 4
lineage/expression/output mapping wrong -> Stage 5
UI behavior wrong -> Stage 6
```

Do not patch symptoms in graph JSON. Fix the YAML or builder rule that generated the wrong graph.

