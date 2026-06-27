# Fragmented Source YAML Index

Raw fragments are authoring inputs for the OSI KG skill. They are not strict OSI YAML. The compose script merges them into the raw source shape consumed by scenario generators, which then emit strict OSI YAML plus separate app metadata.

For new work, use this file only as an index. Load the specific reference for the YAML type you are writing.

## Directory Layout

```text
raw/fragments/
  scenario.yaml
  ontology/
    base_entities/
      AccountData.yaml
    entity_types/
      MarginAccount.yaml
    value_types.yaml
  semantic_model/
    datasets/
      margin_accounts.yaml
    relationships.yaml
    metrics.yaml
  reporting_requirements/
    EligibleCollateralRequirement.yaml
  report_data_logic/
    DailyEligibleCollateralReport.yaml
  concept_mappings/
    MarginAccount_mapping.yaml
```

Use direct semantic filenames such as `MarginAccount.yaml` and `margin_accounts.yaml`. Do not add numeric prefixes. File order must not carry business meaning.

## What To Read

- `raw-fragment-authoring.md`: overall layout, generation pipeline, and validation checklist.
- `raw-scenario.md`: `scenario.yaml` format, fields, generated OSI placement, and UI effect.
- `raw-ontology-concepts.md`: Lightweight ontology index and mapping coverage rules.
- `raw-ontology-base-entities.md`: Base Entity format.
- `raw-ontology-entity-types.md`: EntityType and relationship format.
- `raw-ontology-value-types.md`: ValueType format.
- `raw-concept-mappings.md`: Standalone `concept_mappings` format and required mapping coverage.
- `raw-ui-annotations.md`: Optional UI-only annotations, separate from OSI YAML generation.
- `raw-semantic-model.md`: dataset/table, dataset relationship/join, and metric formats.
- `raw-regulatory-reporting.md`: Report Requirement and Report Data Logic app metadata formats.

## Compose Command

```powershell
python skill\osi-kg-ui\scripts\compose_source_fragments.py --fragments demo\collateral\raw\fragments --output demo\collateral\raw\collateral-margin-source.composed.yaml
```

Then generate strict OSI and app metadata:

```powershell
python demo\collateral\scripts\generate_osi_yaml.py --raw raw\collateral-margin-source.composed.yaml --output knowledge\regulatory-reporting-osi.yaml --app-output knowledge\regulatory-reporting-app.yaml
```

The strict OSI contract applies to `knowledge/regulatory-reporting-osi.yaml`. Report Requirement and Report Data Logic fragments belong in the separate app metadata file.




