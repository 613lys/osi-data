# Generation Stages

Use this reference for complex regulatory reporting scenarios. Do not try to generate the final YAML in one pass. Build the YAML in stages, validate each stage, then continue.

## Stage 0: Inputs And Decisions

Collect:

- Source tables, columns, keys, nullability, comments, and sample values if available.
- Source joins and known foreign keys.
- Regulatory report name, grain, frequency, required fields, calculations, controls, and output layout.
- Known business concepts, ownership/reference relationships, and identity rules.

Ask for clarification only when semantics are unsafe to infer:

- Entity boundaries.
- Composite identifiers.
- Relationship names and direction.
- Report grain.
- Required regulatory fields.
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
- Put source tables and report output tables in `semantic_model.datasets`.
- Generate `semantic_model.relationships[]` from known table foreign keys, join columns, reference columns, and source metadata.
- Use stable dataset names so later concept mappings can refer to `dataset.column` expressions.
- Keep semantic metrics in `semantic_model.metrics[]`; render them as metric child rows under referenced datasets/tables in the graph.
- Do not create `physical_view`.

Stage gate:

- Every physical field needed by implementation expressions is present as a dataset field, or explicitly noted as a gap.
- Every known table relationship is represented as a `semantic_model.relationships[]` join before ontology mappings are generated.

## Stage 2: Ontology Concepts

Generate the semantic ontology from the semantic model datasets and fields, plus known business semantics:

- EntityType concepts that are extended by other EntityTypes act as base entities in the UI, such as `TransactionData`, `PositionData`, `AccountData`.
- `EntityType` for concrete business concepts such as `Trade`, `Position`, `Account`, `Customer`, `Product`.
- `ValueType` for reusable field meanings such as `TradeIdentifier`, `AccountIdentifier`, `CurrencyCode`, `MonetaryAmount`.

Base Entity rules:

- A base entity is an OSI `EntityType` that appears in another EntityType's `extends` list.
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
- EntityType-to-EntityType relationships must use `<controlled_action>_<role>` ids such as `own_trade`, `book_customer`, `reference_product`, `hold_account`, `pledge_collateral`, `value_collateral`.
- Relationship names must be globally unique for generated EntityType-to-EntityType business edges because the graph edge id is exactly the OSI relationship `name`.
- The action prefix must come from the controlled action set: `own`, `hold`, `book`, `reference`, `pledge`, `value`, `price`, `classify`, `settle`, `secure`, `derive`, `post`.
- The UI edge type and graph canvas label must be the action prefix only; keep the full `<action>_<role>` relationship name for the edge id and edge profile.
- Do not add UI-only fields to OSI YAML objects. Keep OSI YAML strict; put non-OSI metadata in `custom_extensions` or a separate application extension section.
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

Constraints:

- Do not use link mappings for composite identity.
- Do not use ontology mapping as the visible business edge between EntityTypes.
- The visible business edge belongs in `ontology[].relationships`.

Stage gate:

- Important EntityTypes have mapped datasets/tables at concept level.
- Important EntityType ValueType fields have field-level mappings to physical columns through `MAPS_TO_FIELD`.
- Composite identity uses referent/identity mapping.
- Relationship mappings cite the physical columns or expressions that prove the link.
- Every EntityType generated from a dataset has an object mapping to that dataset.
- Every EntityType ValueType field has an object/referent/link mapping expression to an existing `dataset.column` when the physical evidence exists.
- Reused ValueTypes keep the same concept id so the graph can derive `SHARES_VALUE_TYPE`.

## Stage 4: RegulatoryRequirement

Generate requirements after concepts exist.

Required structure:

```yaml
reporting_requirements:
  - name:
    type: RegulatoryRequirement
    reporting_grain:
      concept:
    semantic_scope:
      concepts: []
      relationships: []
      required_fields: []
      controls: []
    calculations: []
```

Required relationships:

- Requirement -> EntityType with `REQUIRES_CONCEPT`.
- Requirement -> required relationship item with `CONTAINS`.
- Requirement relationship item -> source/target EntityTypes with `REQUIRES_SEMANTIC_RELATIONSHIP`.
- Requirement -> required field item with `CONTAINS`.
- Required field item -> EntityType value field with `REQUIRES_SEMANTIC_FIELD`.
- Calculation item -> input EntityType value fields with `USES_SEMANTIC_INPUT`.

Constraints:

- Requirement scope includes only required concepts, relationships, fields, calculations, and controls.
- Do not pull every field from an EntityType into the requirement.
- Requirement fields must use `semantic_reference`, `concept`, `relationship`, and `value_concept` when known.
- Each requirement field must resolve to an already declared EntityType ValueType field, a semantic metric, or an explicit gap.
- Do not create new ValueTypes during requirement generation unless the missing semantic meaning is confirmed and then backfilled into Stage 2/3.

Stage gate:

- Every required field resolves to an EntityType value field, semantic metric, or explicit gap.
- Every calculation input resolves to an EntityType value field.

## Stage 5: ReportImplementation

Generate physical delivery after the requirement is stable.

Required structure:

```yaml
report_implementations:
  - name:
    type: ReportImplementation
    implements:
    output_datasets:
      - dataset:
        role:
        fields: []
    source_fields: []
```

Required relationships:

- Implementation -> Requirement with `IMPLEMENTS`.
- Implementation -> output dataset with `MATERIALIZED_AS`.
- Implementation -> source dataset with `READS_FROM`.
- Implementation field -> requirement field with `IMPLEMENTS_REQUIREMENT_FIELD`.
- Implementation field -> output column with `MATERIALIZES_FIELD`.
- Implementation field -> source columns with `READS_FIELD`.

Constraints:

- Implementation fields must not connect directly to EntityType value fields.
- Never emit `IMPLEMENTS_SEMANTIC_FIELD`.
- Every output field should have `requirement_field` when it satisfies a requirement.
- Every output field should have `expression.dialects[]`.
- Every implementation field maps to either an existing requirement field and output column, or an explicit implementation gap.
- Implementation expressions must reference existing `semantic_model.datasets[].fields[]` columns or parameters.
- Direct copies still get expressions such as `trades.trade_id`.
- Parse `dataset.column` references from expressions and create `READS_FIELD`.

Stage gate:

- Every requirement field has an implementation field, or the YAML explicitly records that it is not implemented.
- Every implementation expression references existing physical columns or explicit parameters.

## Stage 6: Build And UI Validation

Run:

```powershell
python <skill-dir>\scripts\build_osi_graph.py --source knowledge\regulatory-reporting-osi.yaml --copy-frontend-template
node --check frontend\app.js
```

Validate graph data:

```text
has IMPLEMENTS_REQUIREMENT_FIELD
has no IMPLEMENTS_SEMANTIC_FIELD
has SHARES_VALUE_TYPE for reused ValueTypes
has MAPS_TO_FIELD for relationship/value-field mappings to physical columns
has USES_FIELD for semantic metrics that reference physical columns
has READS_FIELD for implementation expressions
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
physical field or table join missing -> Stage 1
semantic concept or reused ValueType wrong -> Stage 2
concept/object/field mapping wrong -> Stage 3
requirement scope or metric reference wrong -> Stage 4
lineage/expression/output mapping wrong -> Stage 5
UI behavior wrong -> Stage 6
```

Do not patch symptoms in graph JSON. Fix the YAML or builder rule that generated the wrong graph.




