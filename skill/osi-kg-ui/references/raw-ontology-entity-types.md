# Raw Ontology Entity Types

Read this when authoring `raw/fragments/ontology/entity_types/*.yaml`.

## EntityType Fragment

Every concrete EntityType must extend exactly one Base Entity unless the user explicitly asks for multiple inheritance. If it is unclear which Base Entity applies, ask the user before generating the EntityType.

```yaml
name: MarginAccount
description: Account used to hold margin obligations and pledged collateral.
extends:
- AccountData
identify_by:
- has_AccountIdentifier
relationships:
- name: REFERENCES_Counterparty
  roles:
  - concept: Counterparty
  multiplicity: ManyToOne
  verbalizes:
  - "{MarginAccount} is owned by {Counterparty}"
  description: Counterparty that controls or owns the margin account.
- name: DEPENDS_ON_CollateralAsset
  roles:
  - concept: CollateralAsset
  verbalizes:
  - "{MarginAccount} depends on pledged {CollateralAsset} for margin coverage"
  description: Pledged collateral assets associated with the margin account.
- name: has_BaseCurrency
  roles:
  - concept: CurrencyCode
  multiplicity: ManyToOne
  verbalizes:
  - "{MarginAccount} has base currency {CurrencyCode}"
  description: Currency used as the account's reporting or settlement base.
```

Additional fields:

- `extends`: Required. Must name an existing Base Entity such as `AccountData`, `TransactionData`, or `PositionData`.
- EntityType-to-EntityType relationships point to another EntityType in `roles[].concept`.
- EntityType-to-ValueType relationships point to a ValueType in `roles[].concept` and render as fields/properties in the UI.
- `description` on every relationship is required. It is the UI edge/profile description and should capture context that is not obvious from `name` and `verbalizes`. Do not rely on `verbalizes` alone; `verbalizes` is a sentence template, while `description` explains the relationship meaning.
- Do not redeclare fields already declared by the Base Entity. The UI will show inherited Base Entity fields inside the concrete EntityType node.
- Do not put `concept_mapping` in EntityType YAML. Put mappings in standalone `concept_mappings/*.yaml` files.
- Every EntityType should have at least one ValueType field of its own or inherited from its Base Entity, and at least one relationship to another EntityType. If the relationship is unknown, ask the user rather than inventing one.

EntityType-to-EntityType relationship naming:

- Use `<action>_<role>`.
- Generate `<action>` from the relationship semantics; do not restrict it to a fixed list. Use a concise verb or verb phrase such as `OWNS`, `HELD_BY`, `USES`, `SERVICES`, `PLEDGES`, `DEPENDS_ON`, or `REFERENCES`.
- Use the final underscore as the action/role separator. The UI derives the business edge type from everything before the final underscore, so `HELD_BY_Depositor` displays as `HELD_BY` and `DEPENDS_ON_CollateralAsset` displays as `DEPENDS_ON`.
- `<role>` should usually be the UpperCamelCase target EntityType name, for example `HELD_BY_Depositor`, `USES_DepositProduct`, or `DEPENDS_ON_CollateralAsset`.
- Relationship `name` should be stable and globally unique across EntityType-to-EntityType relationships.
- `verbalizes` should use natural domain language and does not need to repeat the action word mechanically.

EntityType-to-ValueType relationship naming:

- Generate from the field semantics. Good examples: `has_AccountIdentifier`, `has_AccountStatus`, `has_BaseCurrency`, `has_ValuationDate`, `has_MarketValueAmount`. Base Entity and concrete EntityType ValueType relationships follow the same naming style.
- These names do not use the EntityType-to-EntityType `<action>_<role>` naming pattern.
- The UI identifies these as fields because `roles[].concept` points to a ValueType.


## Metric-Backed Value Fields

A semantic metric that belongs to an EntityType must still be declared as an EntityType-to-ValueType relationship in the ontology. The metric defines the calculation in `semantic_model.metrics[]`; the EntityType relationship defines the business field and its value domain.

Example:

```yaml
- name: has_EligibleCollateralValue
  roles:
  - concept: MonetaryAmount
  multiplicity: ManyToOne
  verbalizes:
  - "{CollateralValuation} has eligible collateral value {MonetaryAmount}"
  description: Market value after haircut represented as an entity-level calculated collateral valuation amount.
```

Rules:

- Do not create a top-level EntityType or ValueType just because a metric exists.
- Do create an EntityType relationship when the metric is an attribute of the entity, can be required by a report, or should appear under the Entity node in the UI.
- The relationship name should follow the same ValueType field naming style as direct fields, for example `has_EligibleCollateralValue`, `has_ExposureAmount`, or `has_RiskWeightedAmount`.
- The role `concept` should be the metric value domain, such as `MonetaryAmount`, `Rate`, `Decimal`, or `Quantity`.
- The relationship mapping must use `expression: metric.<metric_name>` in `raw/fragments/concept_mappings/*.yaml`.





