# Regulatory Reporting Pattern

Use this reference when generating OSI YAML for regulatory reports. The scenario should produce two reporting-layer structures:

- `RegulatoryRequirement`: what the regulator requires semantically.
- `ReportImplementation`: how a concrete report table/file/view is produced physically.

## Layering Rules

Hard constraints:

- Do not model a regulatory report as an EntityType unless it is a true business object.
- Do not use `ReportImplementation` as the bridge between EntityTypes and tables.
- Semantic-to-physical mapping belongs in semantic models and ontology mappings.
- Requirement fields connect to EntityType value fields.
- Implementation fields connect to requirement fields and physical columns.
- Never generate `IMPLEMENTS_SEMANTIC_FIELD`.
- `semantic_reference` on implementation fields is descriptive metadata only.

Correct field-level chain:

```text
EntityType value field <- REQUIRES_SEMANTIC_FIELD <- requirement field
requirement field <- IMPLEMENTS_REQUIREMENT_FIELD <- implementation output field
implementation output field -> MATERIALIZES_FIELD -> output column
implementation output field -> READS_FIELD -> source column(s)
```

## RegulatoryRequirement

A requirement expresses the subset of semantic data the regulator/report needs. It should not pull in every field from every EntityType.

```yaml
reporting_requirements:
  - name: TradeExposureRequirement
    type: RegulatoryRequirement
    description: Regulatory requirement for daily trade-level exposure reporting.
    regulator: ExampleRegulator
    regulation: ExampleRule
    reporting_frequency: daily
    reporting_grain:
      concept: Trade
      description: One row per reportable trade exposure.
    semantic_scope:
      concepts:
        - Trade
        - Account
        - Customer
      relationships:
        - source: Account
          relationship: own_trade
          target: Trade
          mandatory: true
          purpose: Owning account is required for aggregation and accountability.
      required_fields:
        - name: trade_identifier
          concept: Trade
          relationship: trade_id
          semantic_reference: Trade.trade_id
          value_concept: TradeIdentifier
          required: true
          purpose: Unique line identity and reconciliation key.
      controls:
        - name: trade_key_presence
          target: Trade.trade_id
          rule: Trade identifier must be present.
    calculations:
      - name: exposure_amount_report_currency
        output: exposure_amount_report_currency
        inputs:
          - Trade.fair_value_amount
          - ExchangeRate.rate_value
        expression: Trade.fair_value_amount * ExchangeRate.rate_value
```

Generation rules:

- If a required report field is a semantic metric, keep the metric in `semantic_model.metrics[]` and reference it from the requirement calculation or required field metadata. Do not turn the metric into a top-level graph node.
- Every required field must map to one of: an existing EntityType ValueType field, an existing semantic metric, or an explicit semantic gap.
- Do not create requirement-only ValueTypes. If the report reveals a missing semantic meaning, add/reuse the ValueType in the ontology first, then reference it from the requirement.
- Use `reporting_grain` to state report row granularity.
- Put only needed concepts in `semantic_scope.concepts`.
- Put only required relationships in `semantic_scope.relationships`.
- Put each required field in `semantic_scope.required_fields`.
- For relationship requirements, create requirement child rows and connect them with `REQUIRES_SEMANTIC_RELATIONSHIP`.
- For field requirements, connect requirement child rows to EntityType value fields with `REQUIRES_SEMANTIC_FIELD`.
- For calculations, connect calculation rows to input EntityType value fields with `USES_SEMANTIC_INPUT`.
- Record controls and rules as semantic metadata; do not turn every control into a top-level graph node unless the user asks.

## ReportImplementation

An implementation is physical delivery. It describes output datasets, output fields, source fields, and expressions.

```yaml
report_implementations:
  - name: DailyTradeExposureReport
    type: ReportImplementation
    description: Physical implementation of the daily trade exposure report.
    implements: TradeExposureRequirement
    owner: Regulatory Reporting IT
    schedule: Daily EOD
    output_datasets:
      - dataset: regulatory_report_lines
        role: line
        fields:
          - name: trade_id
            requirement_field: trade_identifier
            semantic_reference: Trade.trade_id
            source_field: trades.trade_id
            expression:
              dialects:
                - dialect: ANSI_SQL
                  expression: trades.trade_id
          - name: exposure_amount_report_currency
            requirement_field: exposure_amount_report_currency
            semantic_reference: exposure_amount_report_currency
            expression:
              dialects:
                - dialect: ANSI_SQL
                  expression: trades.fair_value_amount * fx_rates.rate_value
    source_fields:
      - trades.trade_id
      - trades.fair_value_amount
      - fx_rates.rate_value
```

Generation rules:

- Every output field should have `requirement_field` when it satisfies a requirement item.
- Every output field must map to one of: an existing requirement field, an existing physical output column, an existing semantic metric, or an explicit implementation gap.
- Every output field should have a concrete expression using `expression.dialects[]`.
- Direct copies still get expressions such as `trades.trade_id`.
- Use `source_field` for the primary direct source when one exists.
- Parse all `dataset.column` references from expressions and emit `READS_FIELD`.
- If an output field is calculated from multiple source fields, define or reuse a `semantic_model.metrics[]` metric and set `semantic_reference` to that metric where appropriate.
- Emit `MATERIALIZED_AS` from implementation to output dataset.
- Emit `MATERIALIZES_FIELD` from implementation field to output column.
- Emit `IMPLEMENTS_REQUIREMENT_FIELD` from implementation field to requirement field.
- Emit `READS_FROM` from implementation to source tables.
- Emit `READS_FIELD` from implementation field to source columns.

## Requirement To Implementation Expectations

The graph and UI should let the user answer:

- Which semantic field does a regulatory requirement need?
- Which output report field implements that requirement?
- Which physical output column is materialized?
- Which physical source columns and expressions produce it?
- Which EntityType fields share the same ValueType?

Example expected path for a calculated report field:

```text
Trade.fair_value_amount
  -> requirement calculation exposure_amount_report_currency
  <- implementation field regulatory_report_lines.exposure_amount_report_currency
  -> output column regulatory_report_lines.exposure_amount_report_currency
  -> source column trades.fair_value_amount
  -> source column fx_rates.rate_value
```

## Scenario Generation Checklist

For a new regulatory report scenario, generate:

1. Semantic model datasets from physical tables.
2. Semantic model dataset relationships from foreign keys, join columns, and documented table relationships.
3. EntityTypes for the business objects represented by each dataset.
4. Reusable ValueTypes for dataset fields, deduplicated by stable concept id.
5. EntityType relationships for ownership, reference, booking, product, customer, account, or other business semantics.
6. Ontology mappings, concept mappings, object mappings, referent mappings, and link mappings from EntityTypes/ValueTypes to datasets and fields.
7. One or more RegulatoryRequirements mapped to existing EntityType ValueType fields or semantic metrics.
8. Semantic metrics for calculated regulatory fields.
9. One or more ReportImplementations mapped to requirement fields and physical output/source columns.
10. Output datasets and fields with expressions.
11. Source fields used by report implementations.
12. Controls, constraints, and evidence when present.

Do not generate hidden or implicit semantics only in prose. Put them in YAML fields so the builder can create nodes, edges, profiles, and search records.


