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

The default strict OSI file path is `knowledge/regulatory-reporting-osi.yaml`. Report Requirement and Report Data Logic UI metadata such as `reporting_requirements` and `report_data_logic` is not OSI schema and belongs in a separate application metadata file, defaulting to `knowledge/regulatory-reporting-app.yaml`.

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
9. Generate Report Requirement metadata only after concepts and mappings exist, but place it in the separate application metadata file, not the strict OSI YAML.
10. Generate Report Data Logic metadata last in the separate application metadata file, mapping every data logic field to an existing requirement field and an existing dataset column.

Do not start from the regulatory report layout and invent ontology concepts directly from report/table columns. Backfill missing concepts into the ontology stage, then map the report to them.

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

- OSI YAML must strictly follow the fields accepted by the OSI ontology schema. Do not put application-layer keys such as `reporting_requirements` or `report_data_logic` into the strict OSI YAML. If metadata is needed for the KG/UI but is not accepted by the OSI object schema, put it under OSI `custom_extensions` with a stable extension namespace or in a separate application metadata file.
- Do not add a separate relationship type field when the type can be derived from the OSI relationship `name`. Use short business relationship names in the exact form `<ACTION>_<EntityConceptName>`, such as `REFERENCES_Product`, `DEPENDS_ON_CollateralAsset`, `DERIVES_FROM_PositionData`, or `VALUES_CollateralAsset`.
- Do not create `business_entity` or `term` nodes.
- Do not create an EntityType for every physical table.
- Do not model a regulatory report as an EntityType unless the report is a true business object.
- ValueTypes can exist independently in YAML but should render as child fields under EntityTypes when an EntityType relationship points to them.
- A ValueType `description` must describe the value concept itself, not its reuse locations or source columns.
- If two EntityType fields use the same ValueType, declare that ValueType once or at least reuse the exact same concept id everywhere so the graph builder can derive `SHARES_VALUE_TYPE` between those field rows.
- If one ValueType is sourced from multiple table fields, keep one ValueType concept and map each owning EntityType relationship to the relevant `dataset.column` sources. Do not create one ValueType per source column.
- Use the EntityType relationship to express semantic role and the ValueType to express value domain. For example, `has_BaseCurrency` and `has_SettlementCurrency` can both point to `CurrencyCode` because they are different semantic fields with the same value domain.
- Do not create duplicate ValueTypes such as `TradeAccountIdentifier`, `AccountIdentifierForTrade`, and `AccountIdentifier` for the same meaning. Pick one stable id, usually `AccountIdentifier`.
- Do not redeclare OSI built-in value concepts such as `String`, `Integer`, `Decimal`, `Date`, `DateTime`, or `Boolean` unless the scenario needs a narrower domain concept that extends one of them.

## EntityType Relationships

Put relationships under the source EntityType:

```yaml
ontology:
  - concept:
      name: Account
      type: EntityType
    relationships:
      - name: REFERENCES_Trade
        roles:
          - concept: Trade
        verbalizes:
          - "{Account} references {Trade}"
        description: Trade associated with the account for reporting context.
```

For EntityType fields/properties, declare an ordinary relationship whose additional role points to a ValueType. The relationship name is the semantic field/property name, using the same style for Base Entity and concrete EntityType fields:

```yaml
      - name: has_AccountIdentifier
        multiplicity: OneToOne
        verbalizes:
          - "{Account} has account identifier {AccountIdentifier}"
        roles:
          - concept: AccountIdentifier
```

Do not add `name: value` just to mark a relationship as a field. OSI Role only needs `concept`; `name` is optional and should be used only to disambiguate roles.

Rules:

- Relationship names should be unique within the source EntityType. For UI graph generation, EntityType-to-EntityType relationship names must also be globally unique across the generated scenario because the graph edge id is exactly the relationship name.
- Use semantic relationship names in the form `<ACTION>_<EntityConceptName>`, such as `REFERENCES_Product`, `DEPENDS_ON_CollateralAsset`, `DERIVES_FROM_PositionData`, or `VALUES_CollateralAsset`.
- The longest controlled action prefix before the target concept suffix is the controlled action used as the UI business edge type. The remaining suffix is the target role. If the same action applies to several targets, make the relationship name unique: `REFERENCES_Trade`, `REFERENCES_Position`, `REFERENCES_CollateralAsset`.
- Do not encode direction words like upstream/downstream as the relationship type. Use a controlled semantic action id and let graph direction/source-target come from the declared relationship roles.
- EntityType-to-EntityType business graph edges use `id: <ACTION>_<EntityConceptName>` exactly from the OSI relationship `name`, omit an explicit `type`, and derive the UI edge type and graph canvas label from the controlled action prefix only. Do not generate complex ids such as `edge.concept.Source.ACTION.relationship.concept.Target` for these business edges.
- EntityType-to-EntityType relationships are traversable from either endpoint in the graph, but the generated graph data should contain one business edge from the declaring EntityType to the role target. Do not create a synthetic reverse edge or add synthetic properties such as `inverse`, `inverse_of`, or `bidirectional`.
- Controlled actions are: `CREATES`, `REFERENCES`, `DEPENDS_ON`, `DERIVES_FROM`, `AGGREGATES`, `RECONCILES_WITH`, `SETTLES`, `VALUES`, `PART_OF`, `CHILD_OF`, `RELATED_TO`.
- Use `extends` only for subtype/specialization, never for ownership, grouping, lineage, or tags.
- Use `derived_by` for derivation rules and `requires` for constraints that must hold. Every OSI ontology relationship must include `verbalizes`; put `multiplicity` on the relationship with OSI values `ManyToOne` or `OneToOne`, never under `roles`.
- The UI identifies EntityType fields by checking whether a relationship role's `concept` is a declared or built-in `ValueType`; it does not require or trust `role.name: value`.

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
        - name: join_account
          from: trades
          to: accounts
          from_columns: [account_id]
          to_columns: [account_id]
```

Rules:

- Preserve physical table names, column names, data types, nullability, keys, comments, field descriptions, and explicit OSI field expression objects. Every semantic model field must have a business-readable description and an `expression.dialects[]` object mapping it to a physical column or scalar derived expression.
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
- For each `concept_mappings[]` entry, root `object_mappings[].referent_mappings[].relationship` must exactly match the mapped EntityType `identify_by` relationships. If the EntityType inherits an identifier from its Base Entity, the mapping still uses that inherited relationship name.
- Link mappings connect records/entities; referent mappings identify what a record refers to.
- Preserve both mapping grains in the graph: concept-level mappings (`EntityType -> dataset/table`) and field-level mappings (`EntityType.relationship value field -> dataset.field`).
- Derive field-level mapping edges from `concept_mappings[].object_mappings/referent_mappings/link_mappings` by combining `concept`, `relationship`, and the `dataset.column` references inside `expression`.
- For every semantic model dataset, either map it to an existing EntityType or explicitly mark it as an output/support dataset that should not create a business EntityType.
- For every concrete EntityType, create a concept mapping. For every EntityType relationship/value field, including inherited Base Entity fields, create or preserve mapping evidence to an existing semantic model `dataset.column`. Do not put SQL expressions in concept mappings; use semantic model fields or metrics for derived values.
- Concept mapping expressions always reference semantic model datasets and fields (`semantic_model.datasets[].name.field`), not SQL and not undeclared physical table names. The dataset `source` carries the physical table/view/query identity.
- An EntityType can map to multiple semantic datasets. The UI will render multiple `MAPS_TO` edges and field-level mapping edges for every referenced `dataset.column`.
- A single EntityType-to-ValueType field may map to multiple `dataset.column` references when the physical sources are a union. The UI renders one semantic field row and multiple `MAPS_TO_FIELD` edges.
- Use multiple mapping entries for true union of row sources. For calculated/fallback logic such as `COALESCE` or `CASE`, create a semantic model field or metric first and map the concept relationship to that semantic field or metric reference.
- Do not treat different semantic roles as a union merely because they share the same ValueType. Distinct roles must be distinct EntityType relationships and distinct child fields in the UI; dataset field descriptions carry source-level context.
- Prefer multiple semantic datasets plus `semantic_model.relationships[]` for multi-table EntityType mappings. Use one logical dataset with a multi-table source only when that logical source exists outside the model as a materialized view, curated query, or documented logical dataset.
- Keep table/source context in dataset descriptions. Keep field-level context in semantic model field descriptions and ontology relationship descriptions. If the UI needs extra EntityType-to-dataset correspondence context, put it in optional app metadata `mapping_edge_annotations` via `raw-ui-annotations.md`, not in concept mappings. Put UI-only or reporting-only context in the separate application metadata file.
- Source-population distinctions, such as retail-loan source table versus institutional-loan source table, belong in dataset descriptions by default. If the UI needs to explain why a given source population maps to an EntityType, use optional app metadata `mapping_edge_annotations`. Promote source-population distinctions into EntityType fields only when they are business attributes used by requirements, rules, reporting outputs, filters, or downstream semantic reasoning.

## Metrics

OSI metrics are defined at semantic model level. Metrics are not only for regulatory reporting; they can represent calculated value fields that belong to an EntityType. For this KG UI, do not render metrics as ordinary top-level graph nodes or as Table child rows. Render a metric only through an EntityType ValueType relationship mapped to `metric.<metric_name>`.

Rules:

- Keep metrics in the OSI-native `semantic_model.metrics[]` structure.
- When a metric is an EntityType's own calculated value, declare an EntityType-to-ValueType relationship for that field, for example `has_EligibleCollateralValue -> MonetaryAmount`, and map it in concept mappings with `expression: metric.eligible_collateral_value`.
- Metric-backed EntityType fields keep their ValueType, such as `MonetaryAmount`, for semantic domain reuse and create `DERIVED_BY` edges directly to the Table fields referenced by the metric expression.
- Do not add non-OSI fields to metric objects; use `custom_extensions` only when extra KG/UI metadata is required.
- Parse `dataset.column` references from metric expressions.
- Do not show semantic metrics under Table nodes.
- Create field-level `DERIVED_BY` edges from the EntityType metric-backed value field to the physical columns used by the metric expression.
- Only draw metric dependency edges after the user selects the EntityType metric-backed field row.
- If the metric is required by a regulatory report, expose it through an EntityType-owned value field and reference that field from the requirement; do not use `metric.<name>` as the requirement data item or calculation output.
- If a required/implemented field is calculated from semantic model fields, create or reuse a `semantic_model.metrics[]` entry and map it to the relevant EntityType ValueType relationship. The ValueType is the field domain, such as `MonetaryAmount`; the metric is the calculation source, not a ValueType concept.
- If a metric uses multiple datasets/tables, the EntityType metric-backed field connects to all input fields with `DERIVED_BY`.

## Expressions

Use dialect-aware expression objects only in semantic model datasets, semantic model metrics, and Report Data Logic fields. Do not use dialect expression objects inside `concept_mappings`.

```yaml
expression:
  dialects:
    - dialect: ANSI_SQL
      expression: trades.fair_value_amount * fx_rates.rate_value
```

Rules:

- Prefer `ANSI_SQL` unless source metadata proves a dialect-specific expression is needed.
- Direct semantic model field copies must still include an explicit OSI expression object whose scalar SQL expression is usually the physical column name.
- Concept mappings must point to exposed semantic dataset fields with `dataset.field` strings.
- The graph builder parses `dataset.column` references from semantic/report expressions and creates dependency edges.

## Generated Edge Types

Do not add non-OSI fields to YAML for UI-only edge typing. For EntityType relationships, derive the business edge type from the controlled action prefix of `relationship.name`. Generated graph data must also avoid writing an explicit `type` field or extra relationship-name property for these EntityType-to-EntityType business relationship edges; set the graph edge `id` to the OSI relationship `name` itself (`<ACTION>_<EntityConceptName>`) and let the UI derive the filter type and graph canvas label from that graph edge id's action prefix.

Expected graph edge families:

```text
# EntityType relationship business actions, derived from relationship.name prefix
CREATES
REFERENCES
DEPENDS_ON
DERIVES_FROM
AGGREGATES
RECONCILES_WITH
SETTLES
VALUES
PART_OF
CHILD_OF
RELATED_TO

# Graph/UI mechanism edges generated from OSI structures
CONTAINS                  # internal parent/child structure only; do not show in Edge Type filters
EXTENDS                   # Entity Concept extends Base Entity Concept
SHARES_VALUE_TYPE          # two Entity fields reuse the same ValueType
MAPS_TO                   # Entity Concept maps to semantic dataset/table
MAPS_TO_FIELD             # Entity/Value field maps to dataset field or metric-backed field
DATASET_JOIN              # dataset/table relationship from semantic model joins
DERIVED_BY                # metric-backed Entity field is derived by physical dataset fields
REQUIRES_CONCEPT          # Report Requirement references needed Entity Concepts
REQUIRES_SEMANTIC_FIELD   # Report Requirement field needs an Entity.value field
REQUIRES_SEMANTIC_RELATIONSHIP # explicit requirement over an Entity-to-Entity relationship
DERIVED_FROM # requirement calculation derives from semantic input fields
IMPLEMENTS                # Report Data Logic implements a Report Requirement
IMPLEMENTS_FIELD          # Report Data Logic field implements a requirement field
SOURCE_TABLE              # Report Data Logic reads from a source dataset/table
SOURCE_FIELD              # Report Data Logic field derives from a source column
```

Examples:

- `relationship.name: REFERENCES_Trade` -> graph edge `id: REFERENCES_Trade`, inferred UI type `REFERENCES`, canvas label `REFERENCES`, profile relationship name `REFERENCES_Trade`
- `relationship.name: DEPENDS_ON_CollateralAsset` -> graph edge `id: DEPENDS_ON_CollateralAsset`, inferred UI type `DEPENDS_ON`, canvas label `DEPENDS_ON`, profile relationship name `DEPENDS_ON_CollateralAsset`
- `type: MAPS_TO_FIELD`, `label: trade_id`, derived from `concept: Trade`, `relationship: trade_id`, and `expression: trades.trade_id`
- `type: DATASET_JOIN`, `label: trades_to_accounts`
- `type: SOURCE_FIELD`, `label: trades.trade_id`





















