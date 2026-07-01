---
name: osi-kg-ui
description: Generate OSI-based regulatory reporting knowledge graph artifacts from metadata. Use when Codex needs to create or update OSI YAML with EntityType/ValueType concepts, Report Requirement and Report Data Logic layers, semantic-model-to-table mappings, graph/catalog JavaScript data files, or the interactive OSI metadata UI for different reporting scenarios.
---

# OSI KG UI

## Overview

Use this skill to turn source metadata and reporting requirements into a reusable OSI knowledge graph UI. The intended pattern is regulatory reporting: model business semantics as OSI ontology concepts, model regulatory obligations as Report Requirement nodes, model delivery/report files as Report Data Logic nodes, compile the YAML to graph/catalog JS, and render it with the bundled UI template.

Do not use the older `business_entity` or `term` model for this skill. Generate strict OSI `EntityType`, `ValueType`, semantic model, ontology mapping, and physical dataset structures. Generate `Report Requirement` and `Report Data Logic` only as separate application-layer metadata for the UI, not as OSI schema objects.

## Workflow

1. Read or infer metadata.
   - Gather tables, columns, keys, nullability, comments, joins, expressions, report layouts, regulatory rule text, controls, and lineage hints.
   - Ask only for semantics that cannot be inferred safely: entity boundaries, relationship meaning, report grain, required fields, calculation formulas, and identity rules.

2. Generate source fragments, then strict OSI YAML plus separate app metadata.
   - For non-trivial scenarios, write raw authoring fragments under `raw/fragments/` instead of hand-editing one giant OSI YAML.
   - Put package names and owners in `scenario.yaml`; read `references/raw-scenario.md`.
   - Put Base Entity, EntityType, and ValueType data in `ontology/`; put all concept mappings in `concept_mappings/`; put optional UI edge annotations in `ui_annotations/`; start with `references/raw-ontology-concepts.md`, then read `raw-ontology-base-entities.md`, `raw-ontology-entity-types.md`, `raw-ontology-value-types.md`, `raw-concept-mappings.md`, or `raw-ui-annotations.md` as needed.
   - Put datasets/tables, joins, and metrics in `semantic_model/`; read `references/raw-semantic-model.md`.
   - Put Report Requirement and Report Data Logic fragments in app metadata; read `references/raw-regulatory-reporting.md`.
   - Read `references/raw-fragment-authoring.md` for the directory layout, generation pipeline, and validation checklist.
   - Compose fragments with `scripts/compose_source_fragments.py`, then generate strict OSI YAML and app metadata with `scripts/generate_osi_yaml.py`. Compose only merges authoring fragments into one raw source shape; generate converts that raw source into strict OSI YAML and separate app metadata.
   - Generate strict OSI YAML from physical metadata in this order: tables -> semantic model datasets -> semantic model relationships -> EntityType/ValueType concepts -> concept/object mappings -> semantic metrics for calculated fields.
   - Generate Report Requirement and Report Data Logic metadata into a separate application metadata file, not into the OSI YAML.
   - Read `references/osi-yaml-generation.md` before inspecting or changing strict OSI YAML.
   - If the task is a regulatory report, also read `references/report-requirement-data-logic.md`.
   - For complex scenarios, read `references/generation-stages.md` and generate the YAML in stages instead of trying to complete the whole model in one pass.
   - Write strict OSI YAML by default at `knowledge/regulatory-reporting-osi.yaml` and app metadata by default at `knowledge/regulatory-reporting-app.yaml`.
   - For multiple ontologies, keep each strict OSI document strict and independent, then compile them together with `build_osi_graph.py --sources ...`. Do not add UI-only top-level keys such as `summary`, `ontologies`, `semantic_models`, or `source_ontologies` to strict OSI YAML.
   - Keep IDs stable, deterministic, and business-readable.

3. Compile YAML to graph data and JS files.
   - Copy `assets/frontend-template/` to the project `frontend/` directory if the UI does not already exist or if the user asks to refresh it.
   - Run:

```powershell
python <skill-dir>\scripts\build_osi_graph.py --root <scenario-root> --source knowledge\regulatory-reporting-osi.yaml --app-metadata knowledge\regulatory-reporting-app.yaml --copy-frontend-template --overwrite-template
# For multiple strict OSI YAML files in one UI:
python <skill-dir>\scripts\build_osi_graph.py --root <scenario-root> --sources knowledge\ontology-a.yaml knowledge\ontology-b.yaml --app-metadata knowledge\regulatory-reporting-app.yaml --copy-frontend-template --overwrite-template
```

The script emits:

```text
knowledge/indexes/graph.json
knowledge/indexes/catalog.json
knowledge/indexes/search.json
knowledge/indexes/summary.json
frontend/graph-data.js
frontend/catalog-data.js
frontend/summary-data.js
frontend/scenario-data.js
```

4. Verify and render.
   - Run `node --check frontend/app.js`.
   - For read-only static review, open `frontend/index.html` directly or serve `frontend/` with a static server.
   - For persistent Saved Scenario support, run `python SKILL_DIR\scripts\serve_osi_ui.py --root SCENARIO_ROOT --port 8766`.
   - Open `http://127.0.0.1:8766/index.html`. The server writes snapshots to `knowledge/scenarios/snapshots/*.json` and reads presets from `knowledge/scenarios/presets/*.yaml`.
   - For UI behavior, read `references/ui-rendering-rules.md`.
   - When asked to create a shareable saved graph state directly from a scenario description, read `references/agent-generated-snapshots.md` and write a View Snapshot under `knowledge/scenarios/snapshots/`.

## Required Modeling Rules

- Entity concepts are `EntityType`; reusable field meanings are `ValueType`.
- Render ValueType roles as child fields under EntityTypes, not as ordinary top-level visible nodes.
- Do not create `business_entity`, `term`, or `physical_view` nodes.
- Model semantic models as the place where physical tables/datasets, dataset joins, and semantic metrics are declared.
- Build semantic model datasets from table metadata before generating ontology mappings.
- Build semantic model relationships from table foreign keys, join columns, and documented table relationships.
- Model semantic-to-physical alignment through ontology mappings and semantic model mappings.
- Do not use Report Data Logic as the bridge between EntityTypes and tables.
- Do not model a regulatory report as an EntityType unless it is truly a business object.
- Use Report Requirement for what a regulator requires.
- Use Report Data Logic for how existing dataset fields satisfy reporting requirement fields; it does not create or own physical tables.
- Requirement fields connect to existing EntityType value fields, semantic metrics, or explicit semantic gaps.
- Implementation fields connect to existing requirement fields and physical output/source columns.
- Reuse ValueType concept ids for repeated meanings so the graph can identify shared values across EntityTypes.
- Never emit or rely on `IMPLEMENTS_SEMANTIC_FIELD`.

## References

- `references/raw-fragment-authoring.md`: Raw fragment directory layout, where each kind of data belongs, generation pipeline, and validation checklist.
- `references/raw-scenario.md`: `scenario.yaml` package fields plus UI scenario preset/snapshot file formats and persistence rules.
- `references/raw-ontology-concepts.md`: Lightweight index, shared naming rules, and non-negotiable mapping coverage rules.
- `references/raw-ontology-base-entities.md`: Base Entity fragment format.
- `references/raw-ontology-entity-types.md`: Concrete EntityType and relationship fragment format.
- `references/raw-ontology-value-types.md`: Shared ValueType fragment format.
- `references/raw-concept-mappings.md`: Standalone OSI concept mapping format, coverage rules, and multi-source mappings.
- `references/raw-ui-annotations.md`: Optional app/UI-only annotations such as Entity-to-Dataset edge profile text.
- `references/raw-semantic-model.md`: Dataset/table, dataset relationship/join, and metric fragment formats.
- `references/raw-regulatory-reporting.md`: Report Requirement and Report Data Logic app metadata formats.
- `references/fragmented-source-yaml.md`: Short index for the fragmented source reference set.
- `references/osi-yaml-generation.md`: Strict OSI YAML shape, concept rules, mapping levels, edge types, identity rules, and metadata-to-YAML constraints.
- `references/generation-stages.md`: Incremental generation workflow, stage gates, required relationships, and validation constraints for complex scenarios.
- `references/report-requirement-data-logic.md`: Report Requirement and Report Data Logic modeling rules, field-level mapping, expressions, controls, and examples.
- `references/ui-rendering-rules.md`: Graph/UI behavior, node visibility, field expansion, profile behavior, and browser verification checklist.
- `references/agent-generated-snapshots.md`: How an agent can generate shareable View Snapshot JSON files directly from a user-described graph review scenario.

## Assets And Scripts

- ``scripts/compose_source_fragments.py``: Merges authoring fragments into one raw source YAML. It does not create strict OSI YAML.
- ``scripts/generate_osi_yaml.py``: Converts composed raw source YAML into strict OSI YAML plus separate application metadata. This is the reusable scenario generator for new demos.
- ``scripts/build_osi_graph.py``: The skill generator. It is not part of OSI; it compiles strict OSI YAML plus optional application metadata and `knowledge/scenarios/*` into `knowledge/indexes/*.json`, copies the frontend template when requested, and emits `frontend/*-data.js` for the static UI.
- ``scripts/serve_osi_ui.py``: Local read/write server for the static UI. It serves `frontend/`, exposes `/api/scenarios`, and persists saved graph snapshots as local JSON files under `knowledge/scenarios/snapshots/`.
- ``assets/frontend-template/``: Static HTML/CSS/JS UI template for Home, Ontology View, Semantic Model View, Customized Scenario, Catalog Search, and Graph Explorer.

## Validation Checklist

After generating a scenario:

- Strict OSI YAML has `version`, ontology, semantic model datasets, semantic model relationships, ontology mappings, and metrics for calculated semantic fields when needed. Report Requirement and Report Data Logic metadata live in the separate app metadata file. Multiple strict OSI YAML files may be compiled into one UI. Semantic model names must be globally unique for selection, while concept names may be reused when they intentionally represent the same shared concept; the UI reuses the node in each corresponding Ontology View without drawing ontology-to-ontology relationships.
- OSI YAML objects strictly use fields accepted by OSI. UI-only metadata and app-layer reporting structures must not be inserted into OSI objects; use a separate application metadata file or OSI `custom_extensions` when extra per-object metadata is unavoidable.
- EntityType relationships use globally unique OSI relationship `name` values in `<action>_<role>` form, such as `HELD_BY_Depositor`, `USES_DepositProduct`, `DEPENDS_ON_CollateralAsset`, or `REFERENCES_Counterparty`; choose the action from the relationship semantics, not from a fixed list. The generated business graph edge id is exactly that relationship name, while the UI edge type and canvas label are the action prefix before the final underscore.
- EntityType field/property relationships point to ValueType concepts using OSI role objects that usually contain only `concept`; use role `name` only for disambiguation.
- ValueType descriptions describe the value concept itself, not where it is reused; reused ValueTypes use the same stable concept id and derive `SHARES_VALUE_TYPE` field edges.
- Every EntityType relationship/value field, including inherited Base Entity fields, must have concept mapping evidence. Optional Entity-to-Dataset edge profile text belongs in `ui_annotations/mapping_edge_annotations.yaml`, not in concept mappings. EntityType relationship/value fields map to physical columns through `MAPS_TO_FIELD` when `concept_mappings` provide `relationship + expression` evidence.
- Report Requirements only include scoped required fields, relationships, calculations, and controls.
- Report Data Logic field mappings include concrete `expression.dialects[]` values.
- Every requirement/implementation field maps to an existing EntityType ValueType field, semantic metric, physical column, or explicit gap.
- Implementation fields use `requirement_field` to connect to requirement items.
- Generated graph contains `IMPLEMENTS_FIELD` and contains no `IMPLEMENTS_SEMANTIC_FIELD`.
- Field-level edges draw only after selecting a concrete field row.
- Field-level edges have no graph labels; click the edge to view details in the profile.
- Node, edge, and field clicks update the right-side profile.



