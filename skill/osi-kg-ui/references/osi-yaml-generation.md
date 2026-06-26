# OSI YAML Generation

Use this reference before generating or editing OSI YAML for the regulatory reporting KG UI.

## Target Shape

Use a strict OSI YAML file for OSI-standard objects only:

```yaml
version: 0.2.0.dev0
name: RegulatoryReportingOntology
description:
ai_context:
  owner:
  source_systems: []

ontology:
  - concept:
      name:
      type: EntityType | ValueType
      description:
      extends: []
      identify_by: []
    relationships: []

ontology_mappings:
  - name:
    semantic_model:
      name:
      datasets: []
      relationships: []
    concept_mappings: []
```

The default strict OSI file path is `knowledge/regulatory-reporting-osi.yaml`. Regulatory reporting UI metadata such as `reporting_requirements` and `report_implementations` is not OSI schema and belongs in a separate application metadata file, defaulting to `knowledge/regulatory-reporting-app.yaml`.

## Generation Order

For complex scenarios, generate in this order:

1. Read physical table metadata first: tables, columns, keys, foreign keys, join evidence, comments, and sample values.
2. Generate `ontology_mappings[].semantic_model.datasets[]` directly from those tables.
3. Generate `semantic_model.relationships[]` from table foreign keys, join columns, and relationship evidence.
4. For each semantic model dataset, decide the EntityType(s) it represents or contributes to.
5. For each dataset field, map it to an existing reusable ValueType or create one new reusable ValueType with a stable id.
6. Generate EntityType relationships and EntityType ValueType fields from the dataset semantics and business meaning.
7. Generate `concept_mappings[]`, `object_mappings[]`, `referent_mappings[]`, and `link_mappings[]` from the semantic model datasets and fields.
8. Generate `semantic_model.metrics[]` when a required or implemented field is calculated from semantic model fields.
9. Generate reporting requirements only after concepts and mappings exist, but place them in the separate application metadata file, not the strict OSI YAML.
10. Generate report implementations last in the separate application metadata file, mapping every output field to an existing requirement field and physical output column.

Do not start from the regulatory report layout and invent ontology concepts directly from output columns. Backfill missing concepts into the ontology stage, then map the report to them.

## Concept Rules

Generate `EntityType` concepts from business identity and lifecycle, not from every table.

Good EntityTypes:

```text
Trade, Customer, Account, Product, Position, Collateral, ExchangeRate
```

Generate `ValueType` concepts from reusable field meanings:

```text
TradeIdentifier, AccountIdentifier, CurrencyCode, MonetaryAmount, CountryCode
```

Hard rules:

- OSI YAML must strictly follow the fields accepted by the OSI ontology schema. Do not put application-layer keys such as `reporting_requirements` or `report_implementations` into the strict OSI YAML. If metadata is needed for the KG/UI but is not accepted by the OSI object schema, put it under OSI `custom_extensions` with a stable extension namespace or in a separate application metadata file.
- Do not add a separate relationship type field when the type can be derived from the OSI relationship `name`. Use short business relationship names in the exact form `<action>_<role>`, such as `own_trade`, `book_customer`, `reference_product`, `pledge_collateral`, or `value_collateral`.
- Do not create `business_entity` or `term` nodes.
- Do not create an EntityType for every physical table.
- Do not model a regulatory report as an EntityType unless the report is a true business object.
- ValueTypes can exist independently in YAML but should render as child fields under EntityTypes.
- If two EntityType fields use the same ValueType, declare that ValueType once or at least reuse the exact same concept id everywhere so the graph builder can derive `SHARES_VALUE_TYPE` between those field rows.
- Do not create duplicate ValueTypes such as `TradeAccountIdentifier`, `AccountIdentifierForTrade`, and `AccountIdentifier` for the same meaning. Pick one stable id, usually `AccountIdentifier`.

## EntityType Relationships

Put relationships under the source EntityType:

```yaml
ontology:
  - concept:
      name: Account
      type: EntityType
    relationships:
      - name: own_trade
        verbalizes:
          - "{Account} owns {Trade}"
        roles:
          - name: owned_trade
            concept: Trade
```

For EntityType fields, use the relationship name as the field role and point to a ValueType:

```yaml
      - name: account_id
        verbalizes:
          - "{Account} has account identifier {AccountIdentifier}"
        roles:
          - name: value
            concept: AccountIdentifier
```

Rules:

- Relationship names should be unique within the source EntityType. For UI graph generation, EntityType-to-EntityType relationship names must also be globally unique across the generated scenario because the graph edge id is exactly the relationship name.
- Use semantic relationship names in the form `<action>_<role>`, such as `own_trade`, `book_customer`, `reference_product`, `hold_account`, `pledge_collateral`, or `value_collateral`.
- The first token before `_` is the controlled action used as the UI business edge type. The remaining suffix is the target role. If the same action applies to several targets, make the relationship name unique: `own_trade`, `own_position`, `own_collateral`.
- Do not encode direction words like upstream/downstream as the relationship type. Use a controlled semantic action id and let graph direction/source-target come from the declared relationship roles.
- EntityType-to-EntityType business graph edges use `id: <action>_<role>` exactly from the OSI relationship `name`, omit an explicit `type`, and derive the UI edge type and graph canvas label from the action prefix only. Do not generate complex ids such as `edge.concept.Source.ACTION.relationship.concept.Target` for these business edges.
- EntityType-to-EntityType relationships are traversable from either endpoint in the graph, but the generated graph data should contain one business edge from the declaring EntityType to the role target. Do not create a synthetic reverse edge or add synthetic properties such as `inverse`, `inverse_of`, or `bidirectional`.
- Controlled actions are: `own`, `hold`, `book`, `reference`, `pledge`, `value`, `price`, `classify`, `settle`, `secure`, `derive`, `post`.
- Use `extends` only for subtype/specialization, never for ownership, grouping, lineage, or tags.
- Use `derived_by` for derivation rules and `requires` for constraints that must hold. Every OSI ontology relationship must include `verbalizes`; do not put `multiplicity` under `roles` because OSI Role only accepts `concept` and optional `name`.

## Semantic Model And Physical Tables

Declare physical datasets under `ontology_mappings[].semantic_model.datasets`.

```yaml
ontology_mappings:
  - name: RegulatoryReportingSemanticMapping
    semantic_model:
      name: RegulatoryReportingSemanticModel
      datasets:
        - name: trades
          type: table
          description:
          primary_key: [trade_id]
          fields:
            - name: trade_id
              type: string
              nullable: false
        - name: accounts
          type: table
          fields: []
      relationships:
        - name: hold_account
          from: trades
          to: accounts
          from_columns: [account_id]
          to_columns: [account_id]
```

Rules:

- Preserve physical table names, column names, data types, nullability, keys, and comments.
- Generate the semantic model from table metadata before generating ontology mappings.
- Generate `semantic_model.relationships[]` from foreign keys, join columns, reference columns, or documented joins.
- Do not invent physical fields. If a field is required but absent, model it as a requirement or implementation gap.
- Do not create a separate `physical_view` concept. Model outputs and source tables as datasets.

## Mapping Levels

Use the narrowest mapping that matches the evidence:

```text
concept mapping      EntityType or ValueType -> semantic/physical representation
field mapping        EntityType relationship/value role -> physical column
link mapping         relationship between two mapped concepts or datasets
referent mapping     identity/reference resolution, including composite identifiers
ontology mapping     package-level alignment of ontology concepts to a semantic model or another ontology
```

Rules:

- Use ontology mappings for aligning ontology concepts to semantic models or mapping packages.
- Do not use ontology mapping as the visible business relationship between EntityTypes; declare that relationship on the EntityType.
- If an EntityType needs composite identity, use referent/identity mapping. Do not use link mappings just to express composite identity.
- Link mappings connect records/entities; referent mappings identify what a record refers to.
- Preserve both mapping grains in the graph: concept-level mappings (`EntityType -> dataset/table`) and field-level mappings (`EntityType.relationship value field -> dataset.field`).
- Derive field-level mapping edges from `concept_mappings[].object_mappings/referent_mappings/link_mappings` by combining `concept`, `relationship`, and the `dataset.column` references inside `expression`.
- For every semantic model dataset, either map it to an existing EntityType or explicitly mark it as an output/support dataset that should not create a business EntityType.
- For every EntityType field, create or preserve a mapping expression to an existing semantic model `dataset.column` when physical evidence exists.

## Metrics

OSI metrics are defined at semantic model level. For this KG UI, do not render metrics as ordinary top-level graph nodes by default. Render each metric as a child field row with `data_type: metric` under every dataset/table referenced by its expression.

Rules:

- Keep metrics in the OSI-native `semantic_model.metrics[]` structure.
- Do not add non-OSI fields to metric objects; use `custom_extensions` only when extra KG/UI metadata is required.
- Parse `dataset.column` references from metric expressions.
- If a metric references one dataset, show it under that dataset/table.
- If a metric references multiple datasets, show the same metric child row under each referenced dataset/table.
- Create field-level `USES_FIELD` edges from the metric child row to the physical columns used by the metric expression.
- Only draw metric dependency edges after the user selects the metric child row.
- If the metric is required by a regulatory report, reference it from the requirement calculation rather than duplicating the formula in prose.
- If a required/implemented field is calculated from semantic model fields, create or reuse a `semantic_model.metrics[]` entry and render it as a metric child field under every referenced dataset/table or concept.
- If a metric uses multiple datasets/tables, repeat the metric child field under each referenced dataset/table and connect each copy to all input fields with `USES_FIELD`.

## Expressions

Use dialect-aware expression objects:

```yaml
expression:
  dialects:
    - dialect: ANSI_SQL
      expression: trades.fair_value_amount * fx_rates.rate_value
```

Rules:

- Prefer `ANSI_SQL` unless source metadata proves a dialect-specific expression is needed.
- Direct copies still get an expression, for example `trades.trade_id`.
- The graph builder parses `dataset.column` references from expressions and creates `READS_FIELD` edges.

## Generated Edge Types

Do not add non-OSI fields to YAML for UI-only edge typing. For EntityType relationships, derive the business edge type from the controlled action prefix of `relationship.name`. Generated graph data must also avoid writing an explicit `type` field or extra relationship-name property for these EntityType-to-EntityType business relationship edges; set the graph edge `id` to the OSI relationship `name` itself (`<action>_<role>`) and let the UI derive the filter type and graph canvas label from that graph edge id's action prefix.

Expected graph edge families:

```text
# EntityType relationship business actions, derived from relationship.name prefix
OWN
HOLD
BOOK
REFERENCE
PLEDGE
VALUE
PRICE
CLASSIFY
SETTLE
SECURE
DERIVE
POST

# Graph/UI mechanism edges generated from OSI structures
CONTAINS
EXTENDS
SHARES_VALUE_TYPE
MAPPED_TO_TABLE
MAPS_TO
MAPS_TO_FIELD
DATASET_JOIN
USES_FIELD
REQUIRES_CONCEPT
REQUIRES_SEMANTIC_FIELD
REQUIRES_SEMANTIC_RELATIONSHIP
USES_SEMANTIC_INPUT
IMPLEMENTS
IMPLEMENTS_REQUIREMENT_FIELD
MATERIALIZED_AS
MATERIALIZES_FIELD
READS_FROM
READS_FIELD
```

Examples:

- `relationship.name: own_trade` -> graph edge `id: own_trade`, inferred UI type `OWN`, canvas label `own`, profile relationship name `own_trade`
- `relationship.name: pledge_collateral` -> graph edge `id: pledge_collateral`, inferred UI type `PLEDGE`, canvas label `pledge`, profile relationship name `pledge_collateral`
- `type: MAPS_TO_FIELD`, `label: trade_id`, derived from `concept: Trade`, `relationship: trade_id`, and `expression: trades.trade_id`
- `type: DATASET_JOIN`, `label: trades_to_accounts`
- `type: MATERIALIZES_FIELD`, `label: regulatory_report_lines.trade_id`
- `type: READS_FIELD`, `label: trades.trade_id`






