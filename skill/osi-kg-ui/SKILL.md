---
name: osi-kg-ui
description: Generate OSI-based regulatory reporting knowledge graph artifacts from metadata. Use when Codex needs to create or update OSI YAML with EntityType/ValueType concepts, RegulatoryRequirement and ReportImplementation layers, semantic-model-to-table mappings, graph/catalog JavaScript data files, or the interactive OSI metadata UI for different reporting scenarios.
---

# OSI KG UI

## Overview

Use this skill to turn source metadata and reporting requirements into a reusable OSI knowledge graph UI. The intended pattern is regulatory reporting: model business semantics as OSI ontology concepts, model regulatory obligations as requirement nodes, model delivery/report files as implementation nodes, compile the YAML to graph/catalog JS, and render it with the bundled UI template.

Do not use the older `business_entity` or `term` model for this skill. Generate strict OSI `EntityType`, `ValueType`, semantic model, ontology mapping, and physical dataset structures. Generate `RegulatoryRequirement` and `ReportImplementation` only as separate application-layer metadata for the UI, not as OSI schema objects.

## Workflow

1. Read or infer metadata.
   - Gather tables, columns, keys, nullability, comments, joins, expressions, report layouts, regulatory rule text, controls, and lineage hints.
   - Ask only for semantics that cannot be inferred safely: entity boundaries, relationship meaning, report grain, required fields, calculation formulas, and identity rules.

2. Generate strict OSI YAML plus separate app metadata.
   - Generate strict OSI YAML from physical metadata in this order: tables -> semantic model datasets -> semantic model relationships -> EntityType/ValueType concepts -> concept/object mappings -> semantic metrics for calculated fields.
   - Generate regulatory requirements and report implementations into a separate application metadata file, not into the OSI YAML.
   - Read `references/osi-yaml-generation.md` before writing YAML.
   - If the task is a regulatory report, also read `references/regulatory-reporting-pattern.md`.
   - For complex scenarios, read `references/generation-stages.md` and generate the YAML in stages instead of trying to complete the whole model in one pass.
   - Write strict OSI YAML by default at `knowledge/regulatory-reporting-osi.yaml` and app metadata by default at `knowledge/regulatory-reporting-app.yaml`.
   - Keep IDs stable, deterministic, and business-readable.

3. Compile YAML to graph data and JS files.
   - Copy `assets/frontend-template/` to the project `frontend/` directory if the UI does not already exist or if the user asks to refresh it.
   - Run:

```powershell
python <skill-dir>\scripts\build_osi_graph.py --root <scenario-root> --source knowledge\regulatory-reporting-osi.yaml --app-metadata knowledge\regulatory-reporting-app.yaml --copy-frontend-template --overwrite-template
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
```

4. Verify and render.
   - Run `node --check frontend/app.js`.
   - Run `python -m http.server 8766 -d frontend`.
   - Open `http://127.0.0.1:8766/index.html`.
   - For UI behavior, read `references/ui-rendering-rules.md`.

## Required Modeling Rules

- Entity concepts are `EntityType`; reusable field meanings are `ValueType`.
- Render ValueType roles as child fields under EntityTypes, not as ordinary top-level visible nodes.
- Do not create `business_entity`, `term`, or `physical_view` nodes.
- Model semantic models as the place where physical tables/datasets, dataset joins, and semantic metrics are declared.
- Build semantic model datasets from table metadata before generating ontology mappings.
- Build semantic model relationships from table foreign keys, join columns, and documented table relationships.
- Model semantic-to-physical alignment through ontology mappings and semantic model mappings.
- Do not use `ReportImplementation` as the bridge between EntityTypes and tables.
- Do not model a regulatory report as an EntityType unless it is truly a business object.
- Use `RegulatoryRequirement` for what a regulator requires.
- Use `ReportImplementation` for how a concrete report/table/file is produced.
- Requirement fields connect to existing EntityType value fields, semantic metrics, or explicit semantic gaps.
- Implementation fields connect to existing requirement fields and physical output/source columns.
- Reuse ValueType concept ids for repeated meanings so the graph can identify shared values across EntityTypes.
- Never emit or rely on `IMPLEMENTS_SEMANTIC_FIELD`.

## References

- `references/osi-yaml-generation.md`: OSI YAML shape, concept rules, mapping levels, edge types, identity rules, and metadata-to-YAML constraints.
- `references/generation-stages.md`: Incremental generation workflow, stage gates, required relationships, and validation constraints for complex scenarios.
- `references/regulatory-reporting-pattern.md`: RegulatoryRequirement and ReportImplementation generation rules, field-level mapping, expressions, controls, and examples.
- `references/ui-rendering-rules.md`: Graph/UI behavior, node visibility, field expansion, profile behavior, and browser verification checklist.

## Assets And Scripts

- `scripts/build_osi_graph.py`: The skill generator. It is not part of OSI; it compiles strict OSI YAML plus optional application metadata into `knowledge/indexes/*.json`, copies the frontend template when requested, and emits `frontend/*-data.js` for the static UI.
- `assets/frontend-template/`: Static HTML/CSS/JS UI template for catalog search and graph exploration.

## Validation Checklist

After generating a scenario:

- Strict OSI YAML has `version`, ontology, semantic model datasets, semantic model relationships, ontology mappings, and metrics for calculated semantic fields when needed. Reporting requirements and report implementations live in the separate app metadata file.
- OSI YAML objects strictly use fields accepted by OSI. UI-only metadata and app-layer reporting structures must not be inserted into OSI objects; use a separate application metadata file or OSI `custom_extensions` when extra per-object metadata is unavoidable.
- EntityType relationships use globally unique OSI relationship `name` values in `<controlled_action>_<role>` form, such as `own_trade`, `reference_product`, `pledge_collateral`, or `value_collateral`; the generated business graph edge id is exactly that relationship name, while the UI edge type and canvas label are only the controlled action prefix.
- Controlled EntityType relationship actions are only: `own`, `hold`, `book`, `reference`, `pledge`, `value`, `price`, `classify`, `settle`, `secure`, `derive`, `post`.
- EntityType field roles point to ValueType concepts.
- Reused ValueTypes use the same stable concept id and derive `SHARES_VALUE_TYPE` field edges.
- EntityType relationship/value fields map to physical columns through `MAPS_TO_FIELD` when `concept_mappings` provide `relationship + expression` evidence.
- Regulatory requirements only include scoped required fields, relationships, calculations, and controls.
- Report implementation output fields include concrete `expression.dialects[]` values.
- Every requirement/implementation field maps to an existing EntityType ValueType field, semantic metric, physical column, or explicit gap.
- Implementation fields use `requirement_field` to connect to requirement items.
- Generated graph contains `IMPLEMENTS_REQUIREMENT_FIELD` and contains no `IMPLEMENTS_SEMANTIC_FIELD`.
- Field-level edges draw only after selecting a concrete field row.
- Field-level edges have no graph labels; click the edge to view details in the profile.
- Node, edge, and field clicks update the right-side profile.



