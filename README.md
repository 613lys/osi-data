# OSI Data Graph Demo

This repository contains a reusable Codex skill and a final collateral regulatory reporting demo that generates an OSI-based knowledge graph UI.

## Contents

- `skill/osi-kg-ui/` - reusable skill, frontend template, and graph generator.
- `demo/collateral/raw/collateral-margin-source.yaml` - raw source metadata for the demo: physical tables, semantic concepts, mappings, regulatory requirements, and report implementation metadata.
- `demo/collateral/scripts/generate_osi_yaml.py` - demo generator that converts the raw metadata into OSI YAML.
- `demo/collateral/knowledge/regulatory-reporting-osi.yaml` - generated OSI YAML.
- `demo/collateral/frontend/` - generated static UI, including `index.html` and graph/catalog JavaScript data.

## Build

Run the complete pipeline from raw metadata to UI:

```powershell
.\scripts\build_collateral_demo.ps1 -Python "C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
```

The pipeline is:

```text
raw/collateral-margin-source.yaml
  -> scripts/generate_osi_yaml.py
  -> knowledge/regulatory-reporting-osi.yaml
  -> skill/osi-kg-ui/scripts/build_osi_graph.py
  -> frontend/graph-data.js, catalog-data.js, summary-data.js
  -> frontend/index.html
```

Open the demo directly:

```text
demo/collateral/frontend/index.html
```

Or serve it locally:

```powershell
python -m http.server 8766 -d demo\collateral\frontend
```

Then open `http://127.0.0.1:8766/index.html`.

## Modeling Notes

- OSI YAML is kept strict: no UI-only fields are inserted into OSI objects.
- EntityType relationship names use `<action>_<role>`, for example `pledge_collateral`.
- Business edge type and canvas label are derived from the action prefix, for example `pledge`.
- Semantic node types render blue; physical node types render green.
- ValueType roles render as child fields under EntityTypes.
- Report requirements map to semantic fields; report implementations map to requirement fields and physical columns.
