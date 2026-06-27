# Raw Ontology Value Types

Read this when authoring shared `raw/fragments/ontology/value_types.yaml`.

## ValueTypes Fragment

ValueTypes can be authored as they are discovered while writing EntityType fragments. Keep all ValueTypes in the shared `ontology/value_types.yaml`. After all EntityTypes are drafted, deduplicate ValueTypes: if two ValueTypes describe the same underlying meaning but have different names, keep one stable UpperCamelCase name and update all references.

```yaml
- name: AccountIdentifier
  description: Identifier value assigned to an account.
- name: BaseCurrency
  description: Currency code used as a base currency.
- name: MonetaryAmount
  description: Decimal numeric value representing an amount of money.
```

Fields:

- `name`: Required. UpperCamelCase stable ValueType concept id.
- `description`: Required for generated demos. Describe the value concept itself, not where it is reused.

Rules:

- Reuse one ValueType name for the same semantic meaning across EntityTypes.
- A single ValueType can correspond to many dataset fields. This means those fields carry the same value domain, not that the fields have the same business role.
- The semantic difference between two fields that share a ValueType belongs on the EntityType relationship name and description, for example `has_BaseCurrency` versus `has_SettlementCurrency`, both pointing to `CurrencyCode`.
- Use a union mapping only when multiple dataset fields are alternative physical sources for the same EntityType relationship, such as two source systems both populating `has_BaseCurrency`.
- If two dataset fields have different business meanings, create two EntityType-to-ValueType relationships that both point to the same ValueType; do not model them as one union field.
- Dataset field descriptions should preserve source/physical context such as source-system meaning, lineage, fallback behavior, or whether the field is reported, booked, settlement, valuation, or reference data.
- Every ValueType referenced by Base Entity or EntityType relationships must be declared in the shared `ontology/value_types.yaml` unless it is an OSI built-in.
- Do not write descriptions like "reused across trade and account"; that is usage, not concept definition.
- Do not create requirement-only ValueTypes. If a report needs a missing semantic meaning, add it here first.
- Do not redeclare OSI built-ins such as `String`, `Integer`, `Decimal`, `Date`, `DateTime`, or `Boolean` unless defining a narrower domain concept.
- Deduplication examples:
  - `AccountId`, `AccountIdentifier`, and `MarginAccountIdentifier` probably collapse to `AccountIdentifier` if they mean the same account id.
  - `BaseCurrency` and `CurrencyCode` should remain separate only if one is specifically the base currency semantic field and the other is a generic currency code domain.


## Metrics And ValueTypes

Metric-backed EntityType fields reuse normal ValueType concepts. A metric does not create a special metric ValueType; the ValueType describes the value domain, while the EntityType relationship and semantic metric describe the business role and calculation.

Examples:

- `has_EligibleCollateralValue -> MonetaryAmount`
- `has_HaircutAdjustedValue -> MonetaryAmount`
- `has_DefaultProbability -> Rate`
- `has_PositionCount -> Integer`

Rules:

- Reuse an existing ValueType when the metric result has the same value domain as direct fields, for example `MonetaryAmount` for both stored amounts and calculated amounts.
- Create a new ValueType only when the metric result represents a genuinely new domain, not merely because it is calculated.
- Keep ValueType descriptions about the value domain itself. Do not write descriptions such as "calculated from market value and haircut" in the ValueType; put calculation context in `semantic_model.metrics[].description` and the EntityType relationship description.
- In the UI, a metric-backed field remains an EntityType field with its ValueType displayed, for example `metric · MonetaryAmount`.




