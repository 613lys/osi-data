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
ai_context:
  physical_kind: table
fields:
- name: account_id
  expression:
    dialects:
    - dialect: ANSI_SQL
      expression: account_id
  description: Stable identifier for a margin account record at account grain.
  ai_context:
    physical_type: string
    nullable: false
- name: counterparty_id
  expression:
    dialects:
    - dialect: ANSI_SQL
      expression: counterparty_id
  description: Identifier of the legal counterparty responsible for the margin account.
  ai_context:
    physical_type: string
    nullable: false
- name: base_currency
  expression:
    dialects:
    - dialect: ANSI_SQL
      expression: base_currency
  description: Currency in which the margin account obligation is primarily managed and reported.
  ai_context:
    physical_type: string
    nullable: false
```

Fields:

- `name`: Required. Stable dataset name used in mapping expressions.
- `source`: Required. Physical or logical source identifier, usually `schema.table`, `query.<name>`, or another system-qualified table/view/query name. Keep it scalar for OSI compatibility. Do not replace it with a nested object.
- `primary_key`: Optional list of dataset fields that identify rows. Generated strict OSI keeps the field even when empty.
- `unique_keys`: Optional list of alternate unique key definitions. Generated strict OSI keeps the field even when empty.
- `description`: Required for generated demos. Describe the dataset as a business-meaningful row population and grain, not merely as a physical object. Include what kind of records it contains, what business process or reporting use they support, and source-population context such as retail loans versus institutional loans when that distinction is source-level context rather than an EntityType field. Do not use descriptions like `Source table for margin accounts.` or `Physical table for reports.` Optional EntityType-to-dataset edge-profile explanation belongs in `ui_annotations/mapping_edge_annotations.yaml`, not in the dataset and not in concept mappings.
- `ai_context`: Optional OSI field. Put dataset-level AI/context metadata here, including `physical_kind: table | query` when the UI should distinguish table-backed and query-backed datasets. Do not use top-level `physical_kind` in new fragments. Generated strict OSI keeps the field even when empty.
- `custom_extensions`: Optional OSI extension list. Use it for complex source metadata that does not fit scalar `source`, such as query SQL and table dependencies. Prefer `custom_extensions` over inventing unsupported dataset fields. Generated strict OSI keeps the field even when empty.
- `fields`: Required list of dataset fields.
- `fields[].name`: Required. Column/field name.
- `fields[].expression`: Required OSI expression object with `dialects[]`. Defines how the semantic dataset field maps to the physical source field. For a direct physical column mapping, use scalar SQL in the expression object, for example `expression.dialects[0].expression: account_id`. For a computed semantic field, use scalar SQL such as `first_name || ' ' || last_name`. Do not rely on implicit same-name mapping; the UI and lineage builder need explicit evidence.
- `fields[].dimension`: Optional OSI dimension metadata object. Generated strict OSI keeps the field even when empty.
- `fields[].label`: Optional OSI label/category string. Generated strict OSI keeps the field even when empty.
- `fields[].description`: Required. Describe the field's dataset-level business meaning, row-level role, and source-specific interpretation. This is especially important when several fields share the same ValueType but differ by business role, such as base currency, settlement currency, reporting currency, valuation currency, or fallback currency. Do not merely restate the column name.
- `fields[].ai_context.physical_type`: Optional OSI-compatible place for physical/logical type such as `string`, `decimal`, `date`, `integer`. Do not use top-level `fields[].type` in new fragments.
- `fields[].ai_context.nullable`: Optional OSI-compatible place for field nullability. Do not use top-level `fields[].nullable` in new fragments.
- `fields[].custom_extensions`: Optional OSI extension list for field-level extension metadata. Generated strict OSI keeps the field even when empty.

Complex source metadata example:

```yaml
name: loan_exposure_report_lines
source: query.loan_exposure_report_lines
ai_context:
  physical_kind: query
custom_extensions:
- vendor_name: OSI_KG_UI
  data: '{"name":"physical_source","kind":"query","sql":"select ...","depends_on":["retail_lending_core.retail_loans","institutional_lending_core.facilities"]}'
```

Rules:

- Keep `source` scalar.
- Put SQL, query kind, and multiple physical dependencies under strict OSI `custom_extensions[].data` as a JSON string. New fragments should use `vendor_name` + `data`; the generator only tolerates legacy `name`/`value` for old inputs and normalizes it away in strict output.
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

- Each `semantic_model.datasets[]` item renders as a blue `Semantic Dataset` node (`semantic_dataset`). It is the semantic-model object that concept mappings target.
- Each dataset field renders as a blue `Dataset Field` child row (`dataset_field`) under its dataset. Field descriptions appear in field/profile details and distinguish same-domain values used in different business roles.
- Physical source tables render separately as green `Table` nodes (`physical_table`) inferred from scalar `source` and from parsed `custom_extensions[].data.depends_on` / `tables` / `source_tables`.
- A dataset with `source: query.<name>` may map to multiple physical source tables through `custom_extensions`; the UI draws `SOURCE_TABLE` edges from the dataset node to each source table. Put the edge/profile explanation inside the parsed extension data, for example `data.description`, when the source is query-backed or multi-table.
- Dataset field expressions that reference `dataset.field` values create field-level `SOURCE_FIELD` edges between dataset fields. Direct scalar physical column expressions on one-source datasets create field-level `SOURCE_FIELD` edges from the dataset field to the physical table column.
- Concept mappings create `MAPS_TO` edges from EntityType nodes to semantic dataset nodes, and `MAPS_TO_FIELD` edges from EntityType value fields to semantic dataset field rows. They must not target physical table nodes directly.
- If one EntityType maps to multiple semantic datasets, the UI shows one `MAPS_TO` edge per dataset and field-level mapping edges to every referenced dataset field. If one semantic ValueType field maps to several dataset fields as a union, the UI keeps one semantic field row and shows multiple `MAPS_TO_FIELD` edges.
- Report Data Logic field mappings and source fields create edges to semantic dataset fields. The semantic dataset then carries the physical source/table context.
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
  ai_context:
    description: Collateral position records join to margin accounts through account_id for account-level collateral reporting.
```

Fields:

- `name`: Required. Semantic join name. It may align with an EntityType relationship name when the same business meaning exists.
- `from`: Required. Source dataset name.
- `to`: Required. Target dataset name.
- `from_columns`: Required list of fields on the `from` dataset.
- `to_columns`: Required list of fields on the `to` dataset.
- `ai_context`: Optional OSI field. Put human-readable join context here, for example why the join exists or what evidence supports it. Do not use `description`; it is not an OSI field for semantic model relationships.
- `custom_extensions`: Optional strict OSI extension list with `vendor_name` and JSON-string `data`.

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
      ai_context:
        description: Collateral position records join to margin accounts through account_id for account-level collateral reporting.
```

UI effect:

- Creates a `DATASET_JOIN` edge between Semantic Dataset nodes.
- Physical Table nodes are linked to Semantic Dataset nodes through `SOURCE_TABLE`; physical table-to-table join edges are not generated.
- Canvas labels are `join <from_columns>`, for example `join account_id`; composite joins display all pairs, for example `join borrower_id = borrower_id, borrower_country = domicile_country`.
- The semantic join name remains visible in the edge profile as `join_name` / relationship metadata. Join context appears in the edge profile as `ai_context`, matching the OSI field name; the UI should not invent or display a relationship `description` when OSI does not define one.
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

- Metrics do not render as Table child rows. In Semantic Model View, each selected `semantic_model.metrics[]` entry renders as a blue Metric overlay node. The metric overlay control is multi-select, so several metrics can be shown together.
- Selected Metric nodes have node-level `DERIVED_BY` edges to their input Semantic Dataset nodes.
- Metric expressions are parsed for `dataset.field` references. Field-level `DERIVED_BY` edges connect the Metric node to every contributing Dataset Field row; these edges become visible when the metric overlay expands the relevant dataset fields or when the user selects a related field.
- If an EntityType relationship maps to `metric.<metric_name>`, the EntityType shows that relationship as a metric-backed ValueType field. The graph can draw an EntityType -> Metric `MAPS_TO` edge and field-level `DERIVED_BY` edges from that value field to metric input fields when those relationships are visible.
- Metrics do not create or materialize output tables in the UI.

