# Raw Report Requirement And Report Data Logic YAML

Use this reference for authoring Report Requirement fragments under `reporting_requirements/*.yaml` and Report Data Logic fragments under `report_data_logic/*.yaml`.

These fragments are application metadata for the UI. They are not strict OSI ontology objects and must not be inserted into `regulatory-reporting-osi.yaml`.

Compatibility note: the generator still reads the folder/key name `report_data_logic`, but the business concept is Report Data Logic.

## Locations

```text
raw/fragments/reporting_requirements/EligibleCollateralRequirement.yaml
raw/fragments/report_data_logic/DailyEligibleCollateralReport.yaml
```

## Report Requirement Fragment

A Report Requirement describes the regulatory requirement or BRD requirement at the semantic level. Start from the raw requirement text, not from the generated data model.

```yaml
name: 合格抵质押品报送需求
type: ReportRequirement
description: >
  监管/BRD要求每日生成账户级合格抵质押品报表，用于说明每个保证金账户在估值日可计入监管口径的抵质押品价值。需求还包括报表生成时点、口径说明、人工复核留痕和异常说明；其中非数据类要求记录在本说明中，不强行建模为字段。
source: Collateral Margin Reporting BRD v1.0 section 3.2
SLA: Daily EOD before 21:00 local time; business review completed before submission.
semantic_scope:
  concepts:
  - name: MarginAccount
    description: 需求需要保证金账户作为报送主粒度，用于账户级余额、抵质押品和责任归属汇总。
  - name: Counterparty
    description: 需求需要交易对手信息，用于识别账户责任主体并支持监管分类。
  required_fields:
  - name: 保证金账户标识
    description: 需求需要保证金账户标识，用于确定每条报表记录归属的账户并支持账户级对账。
    semantic_reference: MarginAccount.has_AccountIdentifier
    required: true
  controls:
  - name: has_ValuationDate_present
    target: CollateralValuation.has_ValuationDate
    rule: Valuation date must be present.
calculations:
- name: eligible_collateral_value
  description: 需求需要折扣后合格抵质押品价值，用于展示监管口径下可计入的抵质押品金额。
  output: CollateralValuation.has_EligibleCollateralValue
  inputs:
  - CollateralValuation.has_MarketValueAmount
  - CollateralValuation.has_HaircutRate
  expression: CollateralValuation.has_MarketValueAmount * (1 - CollateralValuation.has_HaircutRate)
```

Fields:

- `name`: Required. Requirement node id/name.
- `type`: Required for UI profile consistency. Use `ReportRequirement` when creating new fragments. Do not use old regulatory-data logic names in new fragments.
- `description`: Required. Chinese requirement/BRD wording. Describe the requirement itself, including non-data requirements such as timing, approval, reconciliation, retention, manual review, exception handling, or submission controls. Do not reduce it to a data-field summary.
- `source`: Required string. Raw source resource for the requirement, such as a regulation article, BRD section, spreadsheet tab, Jira/Confluence page, email, or interview note. Keep it as one concise citation string; do not expand it into nested metadata fields.
- `SLA`: Required string when the requirement has any timeliness, review, submission, retention, or operational service target. Use it for delivery cadence/deadline expectations instead of `reporting_frequency`.
- `semantic_scope.concepts`: Required list of objects. Each item declares a Requirement -> EntityType semantic scope relationship and must include `name` and `description`. The `description` explains why this requirement needs that EntityType and is used as the `REQUIRES_CONCEPT` edge profile text.
- `semantic_scope.relationships`: Optional. Use only when the raw requirement explicitly requires a relationship between EntityTypes, such as proving account ownership, collateral linkage, parent/child aggregation, or settlement linkage. Do not add it just to support field mapping or graph navigation.
- `semantic_scope.required_fields`: Data items extracted from the requirement. Each item must have a Chinese `name`, Chinese `description`, and must map to an existing EntityType-owned value field.
- `semantic_scope.controls`: Validation/control rules over semantic concepts or fields.
- `calculations`: Required calculations for the requirement. Each calculation should have a Chinese `description`, `output`, `inputs`, and `expression`; `output` must be an EntityType-owned value field. The calculation may be implemented by a semantic model metric, but the requirement should not point directly to `metric.<name>`.

Do not use these fields on Report Requirement fragments unless a scenario-specific extension explicitly asks for them: `regulator`, `regulation`, `reporting_frequency`, `reporting_grain`.

Required field shape:

- `name`: Required Chinese data item name from the requirement, such as `保证金账户标识` or `折扣后合格抵质押品价值`. Do not use English technical ids here.
- `description`: Required Chinese explanation of the data needed by the requirement. This describes the required data item from the requirement perspective, not the physical column and not the ValueType definition.
- `semantic_reference`: Required. Stable reference to the mapped EntityType-owned value field in `<EntityType>.<relationship>` form. Do not point requirement data items directly at `metric.<metric_name>`.
- `required`: Boolean.

Relationship To Other YAML:

- `source` stays in app metadata and is shown in the Report Requirement profile; it is not copied into strict OSI YAML.
- `semantic_scope.concepts[].name` must name EntityTypes from ontology fragments. `semantic_scope.concepts[].description` is required and must describe the requirement-to-entity relationship, not the EntityType definition itself.
- If `semantic_scope.relationships[]` is used, each `relationship` must name an existing EntityType-to-EntityType relationship from ontology fragments and the requirement text must justify why that relationship itself is required.
- Required fields must reference existing EntityType-to-ValueType relationships, or explicit gaps after user confirmation. A field without `name`, `description`, and `semantic_reference` is incomplete. Do not repeat `concept`, `relationship`, `value_concept`, or `purpose`; they are derived from `semantic_reference` and the ontology.
- Requirement fragments do not reference physical tables directly; physical delivery logic belongs in Report Data Logic.

Generated app metadata:

```yaml
reporting_requirements:
- name: 合格抵质押品报送需求
  type: ReportRequirement
  description: 中文监管/BRD需求说明
  source: Collateral Margin Reporting BRD v1.0 section 3.2
  SLA: Daily EOD before 21:00 local time
  semantic_scope:
    required_fields: []
```

UI effect:

- Creates an orange Report Requirement node.
- Shows `source` and `SLA` in the Report Requirement profile.
- Creates requirement child rows for required fields, calculations, controls, and only explicit relationship requirements.
- Creates `REQUIRES_CONCEPT` and `REQUIRES_SEMANTIC_FIELD` edges; `REQUIRES_CONCEPT` descriptions come directly from `semantic_scope.concepts[].description`; creates `REQUIRES_SEMANTIC_RELATIONSHIP` only for explicit relationship requirements.
- Requirement field edges appear only after selecting a concrete requirement field row.

## Report Data Logic Fragment

Report Data Logic describes how existing dataset fields satisfy requirement fields and which source fields or SQL expressions support that logic. It does not create, output, materialize, or own a physical table. If a report-line table exists, model it as a normal semantic model dataset and connect it to EntityTypes through concept mappings.

```yaml
name: 每日合格抵质押品报表数据逻辑
type: ReportDataLogic
description: 说明每日合格抵质押品报表字段如何从已有保证金账户、交易对手、抵质押品和估值数据中取数、计算并满足需求口径；该逻辑不创建物理表。
implements: 合格抵质押品报送需求
field_mappings:
- name: 保证金账户标识逻辑
  dataset: collateral_margin_report_lines
  dataset_field: account_id
  description: 数据逻辑说明报表明细字段 account_id 如何承载保证金账户标识需求。
  requirement_field: 保证金账户标识
  source_field: margin_accounts.account_id
  expression:
    dialects:
    - dialect: ANSI_SQL
      expression: margin_accounts.account_id
source_fields:
- margin_accounts.account_id
- collateral_valuations.market_value_amount
```

Fields:

- `name`: Required. Chinese business-readable Report Data Logic display name. Do not use an English technical id here; keep technical stability in file names or external ids if needed.
- `type`: Required for UI profile consistency. Use `ReportDataLogic` when creating new fragments.
- `description`: Required. Explain the data logic and source assumptions; do not describe it as creating a table.
- `implements`: Required. Must exactly match the Chinese Report Requirement `name`.
- `field_mappings`: Required list. It must be one-to-one with the implemented requirement data items: every `semantic_scope.required_fields[].name` and every `calculations[].name` appears exactly once as `requirement_field`.
- `field_mappings[].name`: Required Chinese business-readable logic field name shown in the UI.
- `field_mappings[].dataset`: Required existing semantic model dataset name. This is not an output dataset declaration.
- `field_mappings[].dataset_field`: Required field name in the dataset.
- `field_mappings[].description`: Required Chinese explanation of the data logic mapping.
- `field_mappings[].requirement_field`: Required. Must match exactly one implemented requirement data item name. No duplicates, missing items, or extra items are allowed.
- `field_mappings[].source_field`: Optional primary physical source field when there is one.
- `field_mappings[].expression`: Required concrete SQL expression object with `dialects[]`.
- `source_fields`: Optional physical source fields read by this implementation.

Relationship To Other YAML:

- `implements` must match a requirement fragment `name`.
- `field_mappings[].dataset` must match a semantic model dataset fragment `name`.
- `field_mappings[].dataset_field` must exist in that dataset.
- `field_mappings[].requirement_field` should match a requirement `semantic_scope.required_fields[].name` or calculation output.
- `source_field`, `source_fields`, and expression references must point to semantic model dataset fields.
- Report Data Logic connects to requirement fields and physical dataset fields. It must not map directly to EntityType value fields; that semantic mapping belongs on Report Requirement via `semantic_reference`.
- Do not use `output_datasets`, `output_field`, `materialized`, or `materializes` in Report Data Logic.

Generated app metadata:

```yaml
report_data_logic:
- name: 每日合格抵质押品报表数据逻辑
  type: ReportDataLogic
  implements: 合格抵质押品报送需求
  field_mappings: []
```

UI effect:

- Creates a purple Report Data Logic node.
- Creates `IMPLEMENTS` edge from data logic to requirement.
- Creates implementation field child rows under the data logic node.
- Creates `MAPS_TO_FIELD` from a data logic field row to the dataset field it describes.
- Creates `SOURCE_FIELD` and `IMPLEMENTS_FIELD` field-level edges.
- Report Data Logic field edges appear only after selecting a concrete field mapping row.
