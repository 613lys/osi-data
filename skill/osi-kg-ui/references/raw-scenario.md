# Raw Scenario YAML

Use this reference for `raw/fragments/scenario.yaml`.

`scenario.yaml` describes the scenario package and names the OSI ontology, ontology mapping, and semantic model that will be generated. It does not define business concepts, tables, report fields, or mappings.

## Location

```text
raw/fragments/scenario.yaml
```

## Format

```yaml
ontology_name: CollateralMarginReportingOntology
description: OSI scenario for collateral margin regulatory reporting built from physical table metadata first.
mapping_name: CollateralMarginSemanticMapping
semantic_model_name: CollateralMarginSemanticModel
semantic_model_description: Table-backed semantic model for collateral margin reporting.
model_version: 1.0.0
owner: Collateral Regulatory Reporting
source_systems:
- margin_core
- collateral_master
- market_risk
```

## Fields

- `ontology_name`: Required. Becomes strict OSI top-level `name`.
- `description`: Optional but recommended. Becomes strict OSI top-level `description`.
- `mapping_name`: Required. Becomes `ontology_mappings[].name`.
- `semantic_model_name`: Required. Becomes `ontology_mappings[].semantic_model.name`.
- `semantic_model_description`: Optional. Becomes `ontology_mappings[].semantic_model.description`.
- `model_version`: Optional. Written to strict OSI `ai_context.model_version`.
- `owner`: Optional. Written to strict OSI `ai_context.owner`.
- `source_systems`: Optional list. Written to strict OSI `ai_context.source_systems`.

## Relationship To Other YAML

- Concept fragments are grouped under the ontology named by `ontology_name`.
- Dataset, relationship, and metric fragments are grouped under the semantic model named by `semantic_model_name`.
- Standalone `concept_mappings` fragments are grouped under the ontology mapping named by `mapping_name`.
- Reporting requirement and implementation fragments do not enter strict OSI; they enter the separate app metadata file.

## Generated OSI Shape

```yaml
version: 0.2.0.dev0
name: CollateralMarginReportingOntology
description: OSI scenario for collateral margin regulatory reporting built from physical table metadata first.
ontology: []
ontology_mappings:
- name: CollateralMarginSemanticMapping
  semantic_model:
    name: CollateralMarginSemanticModel
    description: Table-backed semantic model for collateral margin reporting.
ai_context:
  model_version: 1.0.0
  owner: Collateral Regulatory Reporting
  source_systems:
  - margin_core
```


## Multiple Ontologies

`scenario.yaml` names one OSI ontology and one primary semantic model for one generated strict OSI file. To show multiple ontologies in the UI, generate multiple strict OSI files from multiple scenario roots or generated outputs, then pass all of them to `build_osi_graph.py --sources`.

The strict OSI files themselves must stay OSI-shaped. Do not add `summary`, `ontologies`, `semantic_models`, or `source_ontologies` to `scenario.yaml` or to the generated strict OSI YAML. Those are UI/index concerns generated later.
## UI Effect

Scenario fields mostly affect catalog/profile metadata and generated graph summary. They are not ordinary business nodes in the default UI.

## UI Scenario Library

UI scenario files are application metadata for the graph UI. They are not strict OSI YAML and must not be merged into OSI ontology or ontology mapping objects.

Use them for two different real working modes:

- **Scenario Template**: a reusable analysis entry point. It stores a center-node selector and graph filters, but not one fixed center node unless explicitly configured. Example: "Requirement impact" can be reused for any Report Requirement.
- **View Snapshot**: an exact saved work state. It stores the current focus, selected node/edge/field, hidden nodes, expanded fields, metric overlays, scroll, and dragged node positions. Example: a reviewer shares the exact graph layout they used in a meeting.

### Locations

```text
knowledge/scenarios/presets/*.yaml      scenario templates committed with a demo/project or saved from the UI
knowledge/scenarios/snapshots/*.json    view snapshots written by serve_osi_ui.py
```

`build_osi_graph.py` reads both folders and emits `knowledge/indexes/scenarios.json` plus `frontend/scenario-data.js`. `serve_osi_ui.py` exposes the same data through `/api/scenarios`, writes templates through `/api/scenarios/presets`, and writes snapshots through `/api/scenarios/snapshots`.

### Scenario Template Format

```yaml
id: requirement-impact
kind: preset
name: Requirement impact
order: 10
description: Start from a report requirement and show the ontology concepts and semantic fields required by that scenario.
center_selector:
  node_type: regulatory_requirement
  # node_id: requirement.ExpectedCreditLossRequirement  # optional exact center
view:
  viewMode: traceability
  maxDepth: 2
  nodeTypes:
  - regulatory_requirement
  - entity_type_concept
  - base_entity_concept
  edgeTypes:
  - REQUIRES_CONCEPT
  - REQUIRES_SEMANTIC_FIELD
  businessEdgeTypes: []
  metricOverlays: []
```

Fields:

- `id`: Required stable file-safe id. Use lowercase kebab-case.
- `kind`: Required. Use `preset`; the UI labels it as **Scenario Template**.
- `name`: Required display name.
- `order`: Optional numeric display order.
- `description`: Required. Explain the user task/context, not implementation mechanics.
- `center_selector`: Required for reusable templates. Use `node_type` to create a UI center-node picker over all matching nodes. Use `node_id` only when the template must always open one exact node.
- `center_selector.node_type`: Must be a graph node type such as `regulatory_requirement`, `report_implementation`, `entity_type_concept`, `semantic_dataset`, or `physical_table`.
- `view.viewMode`: Usually `traceability`; use `ontology` or `semantic` only for model-wide scenario templates.
- `view.maxDepth`: Optional graph depth for focus-based views.
- `view.nodeTypes`: Optional node type allow-list.
- `view.edgeTypes`: Optional node-to-node route allow-list. Field-level links are controlled by field selection or metric overlays and should not be listed here.
- `view.businessEdgeTypes`: Optional EntityType-to-EntityType action filters.
- `view.metricOverlays`: Optional semantic metric names to preselect.
- `view.selectedOntology` / `view.selectedSemanticModel`: Optional model-wide selection.

When the UI saves a **Scenario Template** from the toolbar-level `Save scenario` button in Graph Explorer or Customized Scenario, it must:

- Set `kind: preset`.
- Save to `knowledge/scenarios/presets/<id>.yaml` through the local scenario server.
- Set `center_selector.node_type` from the current graph focus node type, not from the exact current node id.
- Save the current `viewMode`, `maxDepth`, `nodeTypes`, `edgeTypes`, `businessEdgeTypes`, `metricOverlays`, `selectedOntology`, and `selectedSemanticModel`.
- Not save UI-only work state such as selected fields, hidden nodes, expanded fields, scroll, or dragged positions. Those belong to View Snapshots.
- Treat a changed scenario name as a new template/snapshot. Only overwrite the selected template or snapshot when the saved name still matches the selected item name or produces the same slug/id.

### View Snapshot Format

View snapshots are JSON by default because they capture UI state, not authoring YAML. They can be shared by copying files from `knowledge/scenarios/snapshots/`.

```json
{
  "id": "loan-ecl-review",
  "kind": "snapshot",
  "name": "Loan ECL review",
  "description": "Saved graph view snapshot.",
  "createdAt": "2026-06-30T10:00:00.000Z",
  "updatedAt": "2026-06-30T10:15:00.000Z",
  "view": {
    "viewMode": "traceability",
    "focusId": "requirement.ExpectedCreditLossRequirement",
    "selectedNodeId": "requirement.ExpectedCreditLossRequirement",
    "maxDepth": 2,
    "nodeTypes": ["regulatory_requirement", "entity_type_concept", "semantic_metric"],
    "edgeTypes": ["REQUIRES_CONCEPT::regulatory_requirement::entity_type_concept"],
    "metricOverlays": ["expected_loss_amount"],
    "expanded": ["concept.Loan"],
    "selectedFieldIds": ["value.Loan.exposure_amount"],
    "hiddenNodes": [],
    "positions": [["concept.Loan", {"x": 420, "y": 180}]],
    "scroll": {"left": 120, "top": 40}
  }
}
```

Snapshots should preserve exact UI state: view mode, focus, selected ontology/semantic model, filters, metric overlays, expanded fields, selected field/edge ids, hidden nodes, scroll, and manually dragged node positions.

### UI Effect

The Home tab shows scrollable selection lists for Ontology, Semantic Model, and Customized Scenario entries. Do not use Home dropdown pickers or a generic scenario-open button. Each Ontology row has its own `Open Ontology` button, each Semantic Model row has its own `Open Model` button, and each Scenario Template/View Snapshot row has its own `Open Scenario` button plus a small top-right `x` delete control when the local scenario server is available. Customized Scenario still opens the graph workspace, not a separate list-only page. Its graph header shows only the scenario selector, center-node selector for templates with `center_selector.node_type`, and the selected scenario `description` above the graph canvas; the left sidebar is reserved for graph filters. A toolbar-level `Save scenario` button opens a modal where the user chooses save type first, then enters name and description. Graph Explorer must not show a separate Scenario selector in the left sidebar; scenario selection belongs to Customized Scenario. Opening a template applies its filters and selected center; opening a snapshot restores the captured graph state.

