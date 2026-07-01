# Raw Ontology Base Entities

Read this when authoring `raw/fragments/ontology/base_entities/*.yaml`.

## Base Entity Fragment

Base Entity is not a separate OSI concept type. Author it as `EntityType`; the UI treats it as Base Entity when its concept `name` ends with `Data` for English names or `数据` for Chinese names. Do not infer Base Entity status from whether another EntityType extends it.

A Base Entity is an abstraction for a class of data, not a business instance. Its `relationships` should contain ValueType fields common to that whole data class.

Examples:

- `TransactionData` / `交易数据`: common transaction id, booking date, status, source system.
- `PositionData` / `头寸数据`: common position id, account id, product id, valuation date.
- `AccountData` / `账户数据`: common account id, account status, base currency.

Base Entity file example:

```yaml
name: AccountData
description: Base concept for account-like records with common identifiers and status fields.
identify_by:
- has_AccountIdentifier
relationships:
- name: has_AccountIdentifier
  roles:
  - concept: AccountIdentifier
  multiplicity: OneToOne
  verbalizes:
  - "{AccountData} has account identifier {AccountIdentifier}"
  description: Account identifier common to account-like records.
- name: has_AccountStatus
  roles:
  - concept: StatusCode
  multiplicity: ManyToOne
  verbalizes:
  - "{AccountData} has account status {StatusCode}"
  description: Lifecycle or operational status common to account-like records.
```

Fields:

- `name`: Required. English names use UpperCamelCase ending with `Data`; Chinese names may end with `数据`, such as `交易数据` or `账户数据`.
- `description`: Required for generated demos. Describe the abstract data class itself.
- `identify_by`: Optional list of relationship names used as the preferred identifier.
- `relationships`: Optional list of OSI relationships declared under this concept.
- `relationships[].name`: Required. Relationship name. For ValueType fields this is the field/property name.
- `relationships[].roles`: Put immediately after `name` in authoring YAML for readability.
- `roles[].concept`: Required. Concept that plays the additional role.
- `roles[].name`: Avoid by default. Use only when the same relationship has multiple roles that would otherwise be ambiguous.
- `relationships[].multiplicity`: Optional OSI relationship multiplicity, usually `OneToOne` for identifiers or `ManyToOne` for scalar attributes.
- `relationships[].verbalizes`: Required by OSI relationship schema. Use role placeholders such as `{AccountData}` and `{AccountIdentifier}`.
- `relationships[].description`: Optional but recommended. Use it for context, assumptions, or why this relationship exists.

Rules:

- Put only reusable ValueType relationships common to the whole data class in Base Entity fragments.
- Do not put business relationships that only apply to one subtype in a Base Entity.
- Do not put `multiplicity` under `roles`; OSI Role only accepts `concept` and optional `name`.
- Do not use `role.name: value` to mark a field. A relationship is treated as a field when its role concept is a ValueType.




