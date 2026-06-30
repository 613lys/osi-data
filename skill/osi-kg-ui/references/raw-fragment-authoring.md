# Raw Fragment Authoring Overview

Use this reference first when generating or reviewing scenario authoring YAML. Raw fragments are the maintainable source files for a scenario. They are not strict OSI YAML. They are composed into one raw source file and then converted into strict OSI YAML plus separate app metadata.

## Where Data Goes

```text
raw/fragments/
  scenario.yaml                              scenario/package metadata
  ontology/base_entities/*.yaml             reusable EntityType supertypes
  ontology/entity_types/*.yaml              business EntityTypes only, one file per EntityType
  ontology/value_types.yaml                 reusable ValueType concepts
  semantic_model/datasets/*.yaml            physical/logical datasets and columns
  semantic_model/relationships.yaml         dataset joins
  semantic_model/metrics.yaml               semantic metrics/calculated fields
  reporting_requirements/*.yaml             app metadata: Report Requirement fragments
  report_data_logic/*.yaml                  app metadata: Report Data Logic fragments
  concept_mappings/*.yaml                   all concept mappings, one file per EntityType when possible

knowledge/scenarios/
  presets/*.yaml                            UI-only reusable graph filters/entry points
  snapshots/*.json                          UI-only saved graph states written by the local server
```
Use direct semantic filenames such as `MarginAccount.yaml` and `margin_accounts.yaml`. Do not add numeric prefixes. File order must not carry business meaning; express dependencies with YAML fields such as `extends`, `relationships`, and mapping references.

## Generation Pipeline

```text
raw/fragments/*
  -> compose_source_fragments.py
  -> raw/<scenario>.composed.yaml
  -> skill generate_osi_yaml.py
  -> knowledge/regulatory-reporting-osi.yaml
  -> knowledge/regulatory-reporting-app.yaml
  -> build_osi_graph.py
  -> knowledge/indexes/*.json and frontend/*-data.js

knowledge/scenarios/*
  -> build_osi_graph.py
  -> knowledge/indexes/scenarios.json and frontend/scenario-data.js
```
Commands:

```powershell
python skill\osi-kg-ui\scripts\compose_source_fragments.py --fragments demo\collateral\raw\fragments --output demo\collateral\raw\collateral-margin-source.composed.yaml
python skill\osi-kg-ui\scripts\generate_osi_yaml.py --raw demo\collateral\raw\collateral-margin-source.composed.yaml --output demo\collateral\knowledge\regulatory-reporting-osi.yaml --app-output demo\collateral\knowledge\regulatory-reporting-app.yaml
python skill\osi-kg-ui\scripts\build_osi_graph.py --root demo\collateral --source knowledge\regulatory-reporting-osi.yaml --app-metadata knowledge\regulatory-reporting-app.yaml --copy-frontend-template --overwrite-template
```


## Multiple Strict OSI Outputs

One raw fragment scenario composes to one strict OSI YAML file plus one separate app metadata file. For multiple ontologies, create multiple scenario roots or multiple generated strict OSI files, then compile them together with `build_osi_graph.py --sources <file-a> <file-b> ...`.

Do not merge multiple ontologies by adding non-OSI top-level helper fields such as `summary`, `ontologies`, `semantic_models`, or `source_ontologies` to strict OSI YAML. The graph builder derives those UI-only summaries into `knowledge/indexes/summary.json` and `frontend/summary-data.js`.

Semantic model names must be globally unique across all strict OSI files passed to one `--sources` compile batch. Concept names may be reused across files when they intentionally represent the same shared concept. Shared concepts render as one node that appears in each corresponding Ontology View; do not create ontology-to-ontology relationships for this reuse. If two files define the same concept with conflicting type or same-named relationship definitions, fix the source fragments before composing. If two shared concept descriptions are both non-empty but different, the build emits a warning and keeps the first description as the shared node description.
## Reference Routing

- Read `raw-scenario.md` before writing `scenario.yaml` or `knowledge/scenarios/presets/*.yaml`.
- Read `raw-ontology-concepts.md` first. Then read `raw-ontology-base-entities.md` for `ontology/base_entities`, `raw-ontology-entity-types.md` for `ontology/entity_types`, `raw-ontology-value-types.md` for `ontology/value_types`, `raw-concept-mappings.md` for `concept_mappings`, and `raw-ui-annotations.md` only when app/UI edge annotations are needed.
- Read `raw-semantic-model.md` before writing `semantic_model/datasets`, `relationships`, or `metrics`.
- Read `raw-regulatory-reporting.md` before writing Report Requirement or Report Data Logic fragments.
- Read `osi-yaml-generation.md` before inspecting or changing the strict OSI output.
- Read `ui-rendering-rules.md` before changing graph/UI behavior.

## Validation Checklist

After generating fragments:

1. Compose fragments to raw source YAML.
2. Generate strict OSI YAML and separate app metadata.
3. Build graph data, scenario-data, and frontend JS.
4. Run `node --check frontend/app.js`.
5. Check strict OSI YAML has no app-only keys such as `reporting_requirements` or `report_data_logic`.
6. Check role objects contain only OSI fields: `concept` and optional `name`.
7. Check ValueType descriptions describe the concept itself, not reuse locations.
8. Check EntityType fragments do not contain `concept_mapping`.
9. Check every concrete EntityType has a standalone concept mapping file and every declared or inherited relationship has mapping evidence.
10. Check root object mapping referents exactly match `identify_by`.
12. Check every EntityType extends a Base Entity, and inherited Base Entity fields are not redeclared in the EntityType file.
13. Check every EntityType relationship to a ValueType references a ValueType declared in `ontology/value_types.yaml`.





