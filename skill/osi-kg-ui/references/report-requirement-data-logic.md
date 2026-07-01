# Report Requirement And Report Data Logic

Use this reference to generate reporting application metadata YAML. These structures are not strict OSI YAML. Put them in the app metadata file, while ontology, semantic model, and mappings stay in strict OSI YAML.

For the full raw fragment file layout, read `raw-regulatory-reporting.md`. For end-to-end generation order, read `generation-stages.md`.

## Layer Boundary

Report Requirement captures what the regulation, BRD, or control requirement needs. It maps requirement data items to existing EntityType-owned value fields.

Report Data Logic captures how existing dataset/table fields satisfy requirement fields and which source fields or SQL expressions support the logic. It does not create, output, or materialize physical tables. It must not map directly to EntityType value fields.

Required chain:

```text
EntityType value field <- REQUIRES_SEMANTIC_FIELD <- Report Requirement field
Report Requirement field <- IMPLEMENTS_FIELD <- Report Data Logic field
Report Data Logic field -> MAPS_TO_FIELD -> described dataset/table column
Report Data Logic field -> SOURCE_FIELD -> source dataset/table column(s)
```

## Report Requirement YAML

Location:

```text
raw/fragments/reporting_requirements/<RequirementName>.yaml
```

Shape:

```yaml
name: 交易敞口报送需求
或
name: 交易敞口报送需求
type: ReportRequirement
description: 监管/BRD要求每日生成交易级敞口报表，并说明复核、异常处理和留痕要求。
source: Daily Trade Exposure Reporting BRD v2.1 section 4.1
SLA: Daily EOD before 21:00 local time.
semantic_scope:
  concepts:
  - name: Trade
    description: 需求需要 Trade 作为交易语义对象，用于表达每条报送交易的标识、金额和风险敞口口径。
  - name: Account
    description: 需求需要 Account 作为账户语义对象，用于说明交易敞口归属和账户级汇总口径。
  required_fields:
  - name: 交易标识
    description: 需求需要交易标识，用于唯一识别每条报送交易并支持报表行级对账。
    semantic_reference: Trade.has_TradeIdentifier
    required: true
  controls:
  - name: trade_identifier_present
    target: Trade.has_TradeIdentifier
    rule: Trade identifier must be present.
calculations:
- name: 折算后报送币种敞口金额
  description: 需求需要折算后的报送币种敞口金额，用于按监管口径展示交易风险敞口。
  output: Trade.has_ReportCurrencyExposureAmount
  inputs:
  - Trade.has_FairValueAmount
  - ExchangeRate.has_RateValue
  expression: Trade.has_FairValueAmount * ExchangeRate.has_RateValue
```

Fields:

- `name`: Required Chinese business-readable requirement name. Do not use an English technical id as the requirement name.
- `type`: Required. Must be `ReportRequirement`.
- `description`: Required. Chinese requirement/BRD wording when the scenario is Chinese. Include non-data obligations such as timing, review, exception handling, reconciliation, evidence, retention, and submission controls here.
- `source`: Required string. One concise raw source citation such as regulation article, BRD section, spreadsheet tab, Jira/Confluence page, email, or interview note. Do not expand into nested `regulator`, `regulation`, or `reporting_frequency` fields.
- `SLA`: Required when the requirement has timing, review, submission, retention, or operational targets.
- `semantic_scope.concepts`: Required objects, not plain strings. Each item has `name` and `description`; `description` explains the Requirement -> EntityType scope relationship and is shown on the `REQUIRES_CONCEPT` edge.
- `semantic_scope.required_fields`: Data items extracted from the requirement.
- `semantic_scope.controls`: Optional controls or validation rules over semantic fields.
- `calculations`: Optional calculated requirement data items. `output` must be an EntityType-owned value field, not `metric.<name>`.

Required field item rules:

- `name`: Required Chinese data item name, for example `交易标识`.
- `description`: Required Chinese explanation from the requirement perspective.
- `semantic_reference`: Required `<EntityType>.<relationship>` pointing to an existing EntityType-to-ValueType relationship.
- `required`: Boolean.
- Do not add `concept`, `relationship`, `value_concept`, or `purpose`; the builder derives those from `semantic_reference` and ontology.

Calculation rules:

- Use a Chinese `name` and `description`.
- `output` points to an EntityType-owned value field, for example `Trade.has_ReportCurrencyExposureAmount`.
- `inputs` point to EntityType-owned value fields.
- The semantic model may define a metric for the formula, but the requirement must not point directly to `metric.<name>`.

## Report Data Logic YAML

Location:

```text
raw/fragments/report_data_logic/<StableFileName>.yaml
```

Shape:

```yaml
name: 每日交易敞口报表数据逻辑
type: ReportDataLogic
description: 说明每日交易敞口报表字段如何从已有交易、账户和汇率数据中取数、计算并满足需求口径；该逻辑不创建物理表。
implements: 交易敞口报送需求
field_mappings:
- name: 交易标识逻辑
  dataset: regulatory_report_lines
  dataset_field: trade_id
  description: 数据逻辑说明报表明细字段 trade_id 如何承载交易标识需求。
  requirement_field: 交易标识
  source_field: trades.trade_id
  expression:
    dialects:
    - dialect: ANSI_SQL
      expression: trades.trade_id
- name: 折算后报送币种敞口金额逻辑
  dataset: regulatory_report_lines
  dataset_field: exposure_amount_report_currency
  description: 数据逻辑说明报表明细字段 exposure_amount_report_currency 如何承载折算后报送币种敞口金额需求。
  requirement_field: 折算后报送币种敞口金额
  expression:
    dialects:
    - dialect: ANSI_SQL
      expression: trades.fair_value_amount * fx_rates.rate_value
source_fields:
- trades.trade_id
- trades.fair_value_amount
- fx_rates.rate_value
```

Fields:

- `name`: Required Chinese business-readable name. Do not use an English technical id here; keep stable technical naming in the file name if needed.
- `type`: Required. Must be `ReportDataLogic`.
- `description`: Required. Describe the data logic and source assumptions. Do not say the logic creates a table.
- `implements`: Required. Must exactly match the Chinese Report Requirement `name`.
- `field_mappings`: Required list. It must be one-to-one with the implemented requirement data items: every `semantic_scope.required_fields[].name` and every `calculations[].name` appears exactly once as `requirement_field`.
- `field_mappings[].name`: Required Chinese business-readable logic field name shown in the UI.
- `field_mappings[].dataset`: Required existing semantic model dataset name. This is not an output dataset declaration.
- `field_mappings[].dataset_field`: Required field name in the dataset.
- `field_mappings[].description`: Required Chinese explanation of the data logic mapping.
- `field_mappings[].requirement_field`: Required. Must match exactly one implemented requirement data item name. No duplicates, missing items, or extra items are allowed.
- `field_mappings[].source_field`: Optional primary direct source field when the mapping is a simple copy.
- `field_mappings[].expression`: Required SQL expression object with `dialects[]`. Direct copies still use expressions such as `trades.trade_id`.
- `source_fields`: Optional list of physical source fields read by the implementation. The builder also parses `dataset.column` references from expressions.
- Edge/profile descriptions derived from Report Data Logic must come from `field_mappings[].description`. Do not generate generic English descriptions such as `<logic> reads source dataset <table>`, `<logic> maps data logic field <field>`, or `<field> reads <column>`. For a Report Data Logic -> Table `SOURCE_TABLE` edge, summarize the descriptions of all `field_mappings[]` that reference that dataset through `source_field` or SQL expression refs.

Report Data Logic field rules:

- Do not use `output_datasets`, `output_field`, `materialized`, or `materializes`.
- Do not put `semantic_reference` on Report Data Logic fields.
- Do not map Report Data Logic directly to EntityType value fields.
- Map to requirement semantics through `requirement_field` only.
- Map to physical data through `dataset`, `dataset_field`, `expression`, optional `source_field`, and parsed source fields.
- If the field is calculated from multiple inputs, define or reuse a semantic model metric and map that metric to an EntityType-owned value field through concept mapping when the calculation is also a semantic concept; keep the Report Data Logic field focused on implementation expression and requirement field.
## Forbidden Fields

Do not generate these fields unless a separate app extension explicitly introduces them:

- On Report Requirement: `regulator`, `regulation`, `reporting_frequency`, `reporting_grain`.
- On Report Data Logic: `owner`, `schedule`, `output_datasets`, `output_field`, `materialized`, `semantic_reference` under field mappings.
- In strict OSI YAML: `reporting_requirements`, `report_data_logic`, or any reporting app-only metadata.

## UI Mapping

- Report Requirement creates an orange top-level node.
- Requirement scope concepts create `REQUIRES_CONCEPT` edges to Entity Concept nodes using `semantic_scope.concepts[].description` as the edge/profile description. Requirement required fields create child rows under the requirement node.
- Requirement field child rows connect to EntityType value fields with `REQUIRES_SEMANTIC_FIELD`.
- Report Data Logic creates a purple top-level node.
- Report Data Logic field mappings create child rows under the data logic node.
- Report Data Logic field child rows connect to requirement fields with `IMPLEMENTS_FIELD`.
- Report Data Logic field child rows connect to the described dataset field with `MAPS_TO_FIELD`, to source columns from `expression` and `source_field` with `SOURCE_FIELD`, and to requirement fields with `IMPLEMENTS_FIELD`.
- When a Report Data Logic field implements a requirement calculation whose semantic output is mapped to a semantic model metric through OSI concept mapping (`expression: metric.<metric_name>`), the graph generator adds `IMPLEMENTS_METRIC` edges from the Report Data Logic node and the concrete Report Data Logic field row to that Metric node. The edge description must come from the relevant `field_mappings[].description`; do not invent generic text.
- Selecting a Report Data Logic field should not reveal a direct edge to EntityType value fields.












