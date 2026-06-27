# Raw Concept Mappings

Read this when authoring `raw/fragments/concept_mappings/*.yaml` files for strict OSI ontology mapping generation.

Concept mapping fragments are OSI-facing. They should contain only fields that become `ontology_mappings[].concept_mappings[]` in the generated OSI YAML:

- `concept`
- `object_mappings`
- `link_mappings`

Do not put UI annotations, report metadata, dataset descriptions, or edge-profile text in these files. Entity-to-Dataset UI context belongs in `raw/fragments/ui_annotations/mapping_edge_annotations.yaml`; read `raw-ui-annotations.md` only when generating the app metadata/UI layer.

Do not put mapping blocks inside EntityType fragments. Put all mappings under `raw/fragments/concept_mappings/`. Default rule: create one mapping file per concrete EntityType.

## File Shape

```yaml
concept: MarginAccount
object_mappings:
- referent_mappings:
  - relationship: has_AccountIdentifier
    expression: margin_accounts.account_id
link_mappings:
- object_mapping:
    referent_mappings:
    - relationship: has_AccountIdentifier
      expression: margin_accounts.account_id
  children:
  - relationship: has_AccountIdentifier
    object_mapping:
      concept: AccountIdentifier
      expression: margin_accounts.account_id
  - relationship: has_AccountStatus
    object_mapping:
      concept: StatusCode
      expression: margin_accounts.account_status
  - relationship: REFERENCES_Counterparty
    object_mapping:
      concept: Counterparty
      referent_mappings:
      - relationship: has_CounterpartyIdentifier
        expression: margin_accounts.counterparty_id
  - relationship: has_BaseCurrency
    object_mapping:
      concept: CurrencyCode
      expression: margin_accounts.base_currency
```

## Fields

### `concept`

Required. The concrete EntityType being mapped, for example `MarginAccount`.

Rules:

- Must match an EntityType declared in `ontology/entity_types/*.yaml`.
- Base Entity concepts do not get their own mapping file. Concrete EntityTypes map inherited Base Entity fields through this file.

Generated output:

- Preserved as strict OSI `ontology_mappings[].concept_mappings[].concept`.
- Used by the graph builder as the source concept for concept-level and field-level mapping edges.

### `object_mappings`

Required. OSI mapping object that says how records/objects of `concept` are identified or populated from semantic model datasets.

```yaml
object_mappings:
- referent_mappings:
  - relationship: has_AccountIdentifier
    expression: margin_accounts.account_id
```

Fields:

- `referent_mappings`: Required at the root object mapping. It identifies the object being mapped.
- `referent_mappings[].relationship`: Required. Must exactly match a relationship listed in the EntityType `identify_by`; inherited Base Entity identifiers are allowed and expected.
- `referent_mappings[].expression`: Required. Semantic dataset field that supplies the identifier. Use `dataset.field`, where `dataset` is a semantic model dataset name.

Validation:

- The set of root `referent_mappings[].relationship` must exactly equal the EntityType `identify_by` list.
- Composite identifiers are represented by multiple referent mappings. Do not use `link_mappings` to express composite identity.

### `link_mappings`

Required when the EntityType has declared or inherited relationships. OSI mapping object that says how each EntityType relationship or field is populated.

```yaml
link_mappings:
- object_mapping:
    referent_mappings:
    - relationship: has_AccountIdentifier
      expression: margin_accounts.account_id
  children:
  - relationship: has_AccountStatus
    object_mapping:
      concept: StatusCode
      expression: margin_accounts.account_status
```

Fields:

- `object_mapping`: Required. Identifies the source object whose relationships are being populated. Usually repeats the root object identifier.
- `children`: Required for relationship coverage. Each child maps one relationship under the owning EntityType.
- `children[].relationship`: Required. Must match a relationship declared on the concrete EntityType or inherited from its Base Entity.
- `children[].object_mapping`: Required. Describes the object or value reached through that relationship. Its `concept` must match the target concept declared by the ontology relationship role.

Validation:

- Every concrete EntityType relationship must appear in `link_mappings[].children[].relationship`.
- Every inherited Base Entity relationship must also appear here, even though it is not redeclared in the concrete EntityType YAML.
- Do not add dataset-level descriptions here.

### `children[].object_mapping`

Required. Target-side mapping for one relationship.

For a ValueType field:

```yaml
- relationship: has_BaseCurrency
  object_mapping:
    concept: CurrencyCode
    expression: margin_accounts.base_currency
```

For an EntityType relationship:

```yaml
- relationship: REFERENCES_Counterparty
  object_mapping:
    concept: Counterparty
    referent_mappings:
    - relationship: has_CounterpartyIdentifier
      expression: margin_accounts.counterparty_id
```

Fields:

- `concept`: Required when mapping a target ValueType or EntityType. It is not a new choice made by the mapping; it must exactly equal the ontology relationship role's `concept` for `children[].relationship`. For example, if `has_BaseCurrency` has `roles: [{concept: CurrencyCode}]`, the child mapping must use `object_mapping.concept: CurrencyCode`.
- `expression`: Use for scalar ValueType fields. It must point to a semantic dataset field (`dataset.field`) or an entity-level semantic metric (`metric.<metric_name>`). Calculated/fallback logic belongs in the semantic model field or metric being referenced.
- `referent_mappings`: Use when the target is another EntityType and must be identified by its own identifier relationship.

### `expression`

In raw concept mapping files, `expression` is not a place for SQL. It must be either a single semantic dataset field reference in `dataset.field` form or a semantic metric reference in `metric.<metric_name>` form.

Valid field reference:

```yaml
expression: margin_accounts.account_id
```

Valid entity-level metric reference:

```yaml
- relationship: has_EligibleCollateralValue
  object_mapping:
    concept: MonetaryAmount
    expression: metric.eligible_collateral_value
```

Rules:

- For `dataset.field`, the token before `.` must match `semantic_model.datasets[].name` and the token after `.` must match a field declared under that semantic dataset.
- For `metric.<metric_name>`, the metric name must match `semantic_model.metrics[].name`. Use this only when the owning EntityType declares a metric-backed ValueType relationship for that calculation.
- Physical schema/table names belong in `semantic_model.datasets[].source`, not here, unless the dataset name intentionally equals the table name.
- Physical column names remain physical. Do not rename `margin_accounts.account_id` to `margin_accounts.has_AccountIdentifier`.
- Do not put `dialects`, `ANSI_SQL`, `COALESCE`, `CASE`, joins, filters, or calculations in concept mappings.
- If a concept field is derived, first create a semantic dataset field or semantic model metric that contains the SQL expression, then map the concept relationship to that exposed semantic field name.

## Coverage Rules

These are enforced by `scripts/compose_source_fragments.py`.

- Every concrete EntityType must have a mapping file.
- Root `object_mappings[].referent_mappings[].relationship` must exactly match the EntityType `identify_by` list.
- Every declared relationship on the concrete EntityType must appear in `link_mappings[].children`.
- Every inherited Base Entity relationship must appear in `link_mappings[].children`.
- Relationship names must match ontology relationship names exactly, for example `has_AccountIdentifier`, not the physical column name `account_id`.
- For every `link_mappings[].children[]` item, `object_mapping.concept` must match the target concept declared in the ontology relationship role. Do not infer, rename, or substitute another ValueType/EntityType in mapping.
- Every mapping `expression` must be a valid `dataset.field` reference to a declared semantic model dataset field, or `metric.<metric_name>` for a declared semantic model metric-backed entity field.


## Metric-Backed Relationship Mapping

Use `metric.<metric_name>` only when an EntityType relationship maps to a semantic metric declared in `semantic_model.metrics[]`.

Ontology relationship:

```yaml
- name: has_EligibleCollateralValue
  roles:
  - concept: MonetaryAmount
  verbalizes:
  - "{CollateralValuation} has eligible collateral value {MonetaryAmount}"
```

Semantic metric:

```yaml
- name: eligible_collateral_value
  description: Market value after haircut.
  expression:
    dialects:
    - dialect: ANSI_SQL
      expression: collateral_valuations.market_value_amount * (1 - collateral_valuations.haircut_rate)
```

Concept mapping child:

```yaml
- relationship: has_EligibleCollateralValue
  object_mapping:
    concept: MonetaryAmount
    expression: metric.eligible_collateral_value
```

Rules:

- `object_mapping.concept` must still match the ontology relationship role concept, such as `MonetaryAmount`.
- `metric.<metric_name>` must reference an existing `semantic_model.metrics[].name`.
- Do not put the SQL formula inside concept mappings. The SQL belongs in `semantic_model.metrics[].expression`.
- The UI does not render metric rows under Table nodes. It renders the EntityType relationship as a metric-backed value field under the Entity node.
- For every `dataset.field` referenced by the metric SQL expression, the UI creates a field-level `DERIVED_BY` edge from the Entity metric-backed value field directly to that Table field.
- If a metric expression references three source fields, generate three `DERIVED_BY` edges. Missing dataset fields mean the semantic model is incomplete and should be fixed before UI generation.

## Multi-Source Same Entity

When several source tables populate the same business EntityType, keep one EntityType if the business object is the same. Use multiple object/link mappings to show source alternatives.

```yaml
concept: Loan
object_mappings:
- referent_mappings:
  - relationship: has_LoanIdentifier
    expression: retail_loans.loan_id
- referent_mappings:
  - relationship: has_LoanIdentifier
    expression: institutional_loans.loan_id
link_mappings:
- object_mapping:
    referent_mappings:
    - relationship: has_LoanIdentifier
      expression: retail_loans.loan_id
  children:
  - relationship: has_LoanIdentifier
    object_mapping:
      concept: LoanIdentifier
      expression: retail_loans.loan_id
  - relationship: has_PrincipalAmount
    object_mapping:
      concept: MonetaryAmount
      expression: retail_loans.principal_amount
- object_mapping:
    referent_mappings:
    - relationship: has_LoanIdentifier
      expression: institutional_loans.loan_id
  children:
  - relationship: has_LoanIdentifier
    object_mapping:
      concept: LoanIdentifier
      expression: institutional_loans.loan_id
  - relationship: has_PrincipalAmount
    object_mapping:
      concept: MonetaryAmount
      expression: institutional_loans.notional_amount
```

Interpretation:

- `Loan` is one EntityType.
- `retail_loans` and `institutional_loans` are semantic model datasets.
- `has_PrincipalAmount` is one semantic field with two source alternatives.
- Selecting the field can show two `MAPS_TO_FIELD` edges.

Create separate EntityTypes such as `RetailLoan` and `InstitutionalLoan` only when identity, lifecycle, required relationships, or business rules are materially different.

## Raw To Generated OSI

Raw mapping file:

```yaml
concept: MarginAccount
object_mappings:
- referent_mappings:
  - relationship: has_AccountIdentifier
    expression: margin_accounts.account_id
link_mappings: []
```

Strict OSI output:

```yaml
ontology_mappings:
- concept_mappings:
  - concept: MarginAccount
    object_mappings:
    - referent_mappings:
      - relationship: has_AccountIdentifier
        expression: margin_accounts.account_id
    link_mappings: []
```

UI effect from OSI mapping alone:

- The referenced datasets create `MAPS_TO` edges.
- Field mappings create `MAPS_TO_FIELD` edges from concept fields to semantic dataset fields. Metric-backed field mappings create `DERIVED_BY` edges from the EntityType metric-backed field directly to the Table fields referenced by the metric expression.
- Extra edge-profile explanation is not part of concept mapping; add it separately through `raw-ui-annotations.md` when needed.




