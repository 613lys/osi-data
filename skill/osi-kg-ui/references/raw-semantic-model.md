# Raw Semantic Model YAML

Use this reference for authoring `semantic_model/datasets/*.yaml`, `semantic_model/relationships.yaml`, and `semantic_model/metrics.yaml`.

Semantic model fragments describe physical/logical datasets, joins, and calculated metrics. They are the table-backed layer that ontology mappings reference.

## Locations

```text
raw/fragments/semantic_model/datasets/margin_accounts.yaml
raw/fragments/semantic_model/relationships.yaml
raw/fragments/semantic_model/metrics.yaml
```

## Dataset Fragment

One file per physical source table, physical table, or genuinely documented logical dataset. Use one dataset per physical table by default.

```yaml
name: margin_accounts
source: margin_core.margin_accounts
primary_key:
- account_id
description: Margin account records that track collateralized account obligations, account status, base currency, and linked counterparties for margin reporting.
physical_kind: table
fields:
- name: account_id
  type: string
  nullable: false
  expression:
    dialects:
    - dialect: ANSI_SQL
      expression: account_id
  description: Stable identifier for a margin account record at account grain.
- name: counterparty_id
  type: string
  nullable: false
  expression:
    dialects:
    - dialect: ANSI_SQL
      expression: counterparty_id
  description: Identifier of the legal counterparty responsible for the margin account.
- name: base_currency
  type: string
  nullable: false
  expression:
    dialects:
    - dialect: ANSI_SQL
      expression: base_currency
  description: Currency in which the margin account obligation is primarily managed and reported.
```

Fields:

- `name`: Required. Stable dataset name used in mapping expressions.
- `source`: Required. Physical or logical source identifier, usually `schema.table`, `query.<name>`, or another system-qualified table/view/query name. Keep it scalar for OSI compatibility. Do not replace it with a nested object.
- `primary_key`: Optional list of dataset fields that identify rows.
- `description`: Required for generated demos. Describe the dataset as a business-meaningful row population and grain, not merely as a physical object. Include what kind of records it contains, what business process or reporting use they support, and source-population context such as retail loans versus institutional loans when that distinction is source-level context rather than an EntityType field. Do not use descriptions like `Source table for margin accounts.` or `Physical table for reports.` Optional EntityType-to-dataset edge-profile explanation belongs in `ui_annotations/mapping_edge_annotations.yaml`, not in the dataset and not in concept mappings.
- `physical_kind`: Optional helper for raw authoring. Usually `table`; use `query` for curated SQL-backed datasets. The generator records this in OSI `ai_context.physical_kind`.
- `custom_extensions`: Optional OSI extension list. Use it for complex source metadata that does not fit scalar `source`, such as query SQL and table dependencies. Prefer `custom_extensions` over inventing unsupported dataset fields.
- `fields`: Required list of dataset fields.
- `fields[].name`: Required. Column/field name.
- `fields[].type`: Optional physical/logical type such as `string`, `decimal`, `date`, `integer`.
- `fields[].nullable`: Optional boolean.
- `fields[].expression`: Required OSI expression object with `dialects[]`. Defines how the semantic dataset field maps to the physical source field. For a direct physical column mapping, use scalar SQL in the expression object, for example `expression.dialects[0].expression: account_id`. For a computed semantic field, use scalar SQL such as `first_name || ' ' || last_name`. Do not rely on implicit same-name mapping; the UI and lineage builder need explicit evidence.
- `fields[].description`: Required. Describe the field's dataset-level business meaning, row-level role, and source-specific interpretation. This is especially important when several fields share the same ValueType but differ by business role, such as base currency, settlement currency, reporting currency, valuation currency, or fallback currency. Do not merely restate the column name.

Complex source metadata example:

```yaml
name: loan_exposure_report_lines
source: query.loan_exposure_report_lines
physical_kind: query
custom_extensions:
- name: physical_source
  value:
    kind: query
    sql: |
      select ...
    depends_on:
    - retail_lending_core.retail_loans
    - institutional_lending_core.facilities
```

Rules:

- Keep `source` scalar.
- Put SQL, query kind, and multiple physical dependencies under `custom_extensions[].value`.
- UI may render these dependencies as physical source context in Semantic Model View; concept mappings must still point to dataset fields, not directly to physical tables.
Field expression rules:

- Direct physical mapping still uses an OSI expression object:

  ```yaml
  expression:
    dialects:
    - dialect: ANSI_SQL
      expression: account_id
  ```

- Physical rename/alias is explicit: `name: account_identifier` may use SQL expression `account_id` when the semantic field name differs from the physical column.
- Derived field SQL belongs in `expression.dialects[].expression` and must be scalar, not aggregate; use semantic model metrics for aggregate expressions.
- Every dataset field must have an explicit OSI expression object so the UI can show field lineage and the generator does not invent an implicit mapping.

Relationship To Other YAML:

- Standalone `concept_mappings` expressions must reference these semantic dataset names and fields, for example `margin_accounts.account_id`; they must not jump directly to physical schema/table names that are not declared as datasets.
- Dataset relationship `from`, `to`, `from_columns`, and `to_columns` must reference dataset names and fields declared here.
- Report implementation `source_field`, `source_fields`, and field_mappings dataset names and source fields must reference these datasets and fields.

Generated strict OSI:

```yaml
ontology_mappings:
- semantic_model:
    datasets:
    - name: margin_accounts
      source: margin_core.margin_accounts
      primary_key:
      - account_id
      description: Margin account records that track collateralized account obligations, account status, base currency, and linked counterparties for margin reporting.
      fields:
      - name: account_id
        description: Stable identifier for a margin account record at account grain.
        expression:
          dialects:
          - dialect: ANSI_SQL
            expression: account_id
        ai_context:
          physical_type: string
          nullable: false
      ai_context:
        physical_kind: table
```

UI effect:

- Each semantic model dataset renders as a green Table node; the UI label says Table even though the OSI source object is `semantic_model.datasets[]`.
- Each dataset field renders as a child column row under the Table node. The field `description` appears in field/profile details and helps distinguish same-domain values used in different roles.
- Concept mappings create `MAPS_TO` and `MAPS_TO_FIELD` edges to these nodes. If one EntityType mapping references multiple datasets, the UI shows one `MAPS_TO` edge per dataset and field-level mapping edges to each referenced column. Dataset `description` appears on the Table node profile; optional app metadata `mapping_edge_annotations` appears on the `MAPS_TO` edge profile.
- If one semantic ValueType field maps to several dataset fields as a union, the UI keeps one semantic field row and shows multiple `MAPS_TO_FIELD` edges to the contributing columns.
- If two dataset fields differ semantically, keep them as distinct semantic field relationships on the EntityType even when both relationships point to the same ValueType. The dataset field description preserves the physical/source context; the EntityType relationship preserves the business role.
- Report Data Logic field mappings and source fields create field-level mapping/read edges to these nodes.

## Dataset Relationships Fragment

Use this file for joins between datasets.

```yaml
- name: pledge_collateral
  from: collateral_positions
  to: margin_accounts
  from_columns:
  - account_id
  to_columns:
  - account_id
```

Fields:

- `name`: Required. Semantic join name. It may align with an EntityType relationship name when the same business meaning exists.
- `from`: Required. Source dataset name.
- `to`: Required. Target dataset name.
- `from_columns`: Required list of fields on the `from` dataset.
- `to_columns`: Required list of fields on the `to` dataset.

Rules:

- Declare dataset relationships before writing concept mappings that depend on those joins.
- If an EntityType is populated from multiple datasets, declare the dataset join or relationship evidence here rather than hiding the join inside the EntityType mapping.
- Do not use dataset relationships to express business ownership by themselves; EntityType-to-EntityType business relationships belong in ontology concept YAML.
- Keep physical join evidence here even if a corresponding business relationship exists in ontology.

Generated strict OSI:

```yaml
ontology_mappings:
- semantic_model:
    relationships:
    - name: pledge_collateral
      from: collateral_positions
      to: margin_accounts
      from_columns:
      - account_id
      to_columns:
      - account_id
```

UI effect:

- Creates a `DATASET_JOIN` edge between Table nodes.
- Canvas label is `join <from_columns>`, for example `join account_id`.
- The full semantic join name remains visible in the edge profile.

## Metrics Fragment

Use this file for semantic metrics/calculated fields.

```yaml
- name: eligible_collateral_value
  description: Market value after haircut.
  expression:
    dialects:
    - dialect: ANSI_SQL
      expression: collateral_valuations.market_value_amount * (1 - collateral_valuations.haircut_rate)
  ai_context:
    metric_type: calculated_report_measure
```

Fields:

- `name`: Required. Stable metric name.
- `description`: Required for generated demos. Describe the metric itself.
- `expression`: Required. Expression object with `dialects[]`.
- `expression.dialects[].dialect`: Required. Usually `ANSI_SQL`.
- `expression.dialects[].expression`: Required. Formula referencing existing `dataset.field` names.
- `ai_context.metric_type`: Optional helper metadata for UI/profile context.

Relationship To Other YAML:

- Metric expressions must reference fields declared in dataset fragments.
- EntityType concept mappings may reference metrics with `expression: metric.<metric_name>` when the metric is an entity-level calculated value field.
- Reporting requirements may reference metrics in `calculations` or required fields.
- Report Data Logic may reference metric-related expressions when explaining how existing dataset fields satisfy calculated requirements.

Generated strict OSI:

```yaml
ontology_mappings:
- semantic_model:
    metrics:
    - name: eligible_collateral_value
      description: Market value after haircut.
      expression:
        dialects:
        - dialect: ANSI_SQL
          expression: collateral_valuations.market_value_amount * (1 - collateral_valuations.haircut_rate)
```

UI effect:

- Metrics do not render as top-level nodes by default in Traceability View. In Semantic Model or Mapping views they can be shown through a Metric Overlay: a multi-select control that displays selected Metric nodes and their `DERIVED_BY` links to dataset fields.
- Metrics do not render as child rows under Table nodes.
- If an EntityType relationship maps to `metric.<metric_name>`, the EntityType shows that relationship as a metric-backed value field.
- Selecting the EntityType metric-backed field draws one field-level `DERIVED_BY` edge for every `dataset.field` referenced by the metric expression, directly to those Table fields.
