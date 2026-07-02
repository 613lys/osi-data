# Agent-Generated View Snapshots

Use this reference when an agent must create a shareable graph snapshot file directly from a user-described analysis scenario, without first saving it through the browser UI.

A snapshot is application metadata for the UI. It is not strict OSI YAML and must not be merged into ontology, semantic model, or ontology mapping documents.

## Feasibility

Agent-generated snapshots are supported when the scenario root already has compiled graph indexes, or when the agent can compile them first.

Required inputs:

- A scenario intent from the user, such as "show the loan exposure requirement impact" or "trace how settlement metrics derive from datasets".
- Compiled graph indexes under `knowledge/indexes/`, especially `graph.json` and `summary.json`.
- Optional app metadata and scenario files under `knowledge/scenarios/`.

The agent must not invent graph ids. Every `focusId`, `selectedNodeId`, expanded node, selected field, hidden node, selected edge, and manually positioned node must exist in `knowledge/indexes/graph.json`.

## Location

Write generated snapshots as JSON:

```text
knowledge/scenarios/snapshots/<snapshot-id>.json
```

Use lowercase kebab-case for `<snapshot-id>`. After writing the file, rebuild the UI data with `build_osi_graph.py` so `frontend/scenario-data.js` includes it.

## Snapshot Shape

```json
{
  "id": "loan-ecl-impact-review",
  "kind": "snapshot",
  "name": "Loan ECL impact review",
  "description": "Exact graph state for reviewing the expected credit loss requirement, the semantic inputs it depends on, and the datasets that provide those inputs.",
  "createdAt": "2026-07-01T10:00:00.000Z",
  "updatedAt": "2026-07-01T10:00:00.000Z",
  "view": {
    "viewMode": "traceability",
    "focusId": "requirement.ExpectedCreditLossRequirement",
    "selectedNodeId": "requirement.ExpectedCreditLossRequirement",
    "selectedOntology": "LoanExposureReportingOntology",
    "selectedSemanticModel": "LoanExposureSemanticModel",
    "maxDepth": 2,
    "zoom": 1,
    "nodeTypes": [
      "regulatory_requirement",
      "entity_type_concept",
      "base_entity_concept",
      "semantic_dataset",
      "semantic_metric"
    ],
    "businessEdgeTypes": [],
    "edgeTypes": [
      "REQUIRES_CONCEPT::regulatory_requirement::entity_type_concept",
      "REQUIRES_SEMANTIC_FIELD::regulatory_requirement::value_type_concept",
      "MAPS_TO::entity_type_concept::semantic_dataset",
      "MAPS_TO::entity_type_concept::semantic_metric",
      "DERIVED_BY::semantic_metric::semantic_dataset"
    ],
    "metricOverlays": ["expected_loss_amount"],
    "tags": [],
    "expanded": ["concept.Loan"],
    "autoExpandSuppressed": [],
    "hiddenNodes": [],
    "selectedEdgeId": null,
    "selectedFieldId": null,
    "selectedFieldIds": [],
    "positions": [
      ["requirement.ExpectedCreditLossRequirement", {"x": 100, "y": 120}],
      ["concept.Loan", {"x": 460, "y": 120}],
      ["metric.expected_loss_amount", {"x": 820, "y": 120}]
    ],
    "scroll": {"left": 0, "top": 0}
  }
}
```

## Fields

Top-level fields:

- `id`: Required stable file-safe id. Match the file name without `.json`.
- `kind`: Required. Use `snapshot`.
- `name`: Required display name. Use the user-facing scenario name.
- `description`: Required. Explain the review purpose and why these graph elements are included.
- `createdAt`: Required ISO timestamp.
- `updatedAt`: Required ISO timestamp. Use the same value as `createdAt` for a newly generated file.
- `view`: Required exact graph state.

`view` fields:

- `viewMode`: Usually `traceability`. Use `ontology` or `semantic` only when the snapshot is explicitly for a model-wide view.
- `focusId`: Required for `traceability`. Must be an existing top-level node id.
- `selectedNodeId`: Usually the same as `focusId`, unless the snapshot should open with another node profile selected.
- `selectedOntology`: Optional but recommended when multiple ontologies are compiled.
- `selectedSemanticModel`: Optional but recommended when multiple semantic models are compiled.
- `maxDepth`: Graph traversal depth. Prefer `1` for tight impact review, `2` for requirement-to-semantic traceability, and `3` only when the result is still readable.
- `zoom`: Optional graph canvas zoom level. Use `1` by default; use a verified value such as `0.8` or `1.2` only when the intended snapshot needs that viewport scale.
- `nodeTypes`: Node type allow-list. Include only types needed for the user task.
- `businessEdgeTypes`: Entity-to-Entity action filters, such as `REFERENCES` or `DEPENDS_ON`, when business relationships are part of the task.
- `edgeTypes`: Node-to-node edge filter keys. Prefer full route keys in `<edgeType>::<sourceNodeType>::<targetNodeType>` form when available in the graph. Use bare edge types only when that is how the current scenario data stores presets.
- `metricOverlays`: Semantic metric names to display. Include metrics directly relevant to the scenario.
- `tags`: Usually `[]` unless the scenario explicitly filters by data tag.
- `expanded`: Top-level node ids whose fields should be visible when the snapshot opens.
- `autoExpandSuppressed`: Usually `[]` for generated snapshots.
- `hiddenNodes`: Existing top-level node ids to hide because they are adjacent but not useful for the story.
- `selectedEdgeId`: Optional existing graph edge id to open in the profile.
- `selectedFieldId`: Optional existing child field id for the active profile.
- `selectedFieldIds`: Optional child field ids whose field-level edges should be shown.
- `positions`: Optional manual node positions. Include only ids that are expected to be visible.
- `scroll`: Optional canvas scroll state.


## Layout And Saved Positions

For agent-generated snapshots, prefer omitting `view.positions` unless the positions were captured from a rendered, verified browser session.

Why:

- `positions` are treated as manual coordinates and override the automatic graph layout.
- Expanded nodes are much taller than collapsed nodes.
- Preselected fields can auto-expand linked parent nodes and add field-level edges.
- If an agent writes positions before those final expansions are known, restored snapshots can overlap even when the graph data is correct.

Use this rule:

- If the snapshot is generated from a text description or raw metadata, omit `positions`; the frontend will use ELK/fallback layout after applying `expanded` and `selectedFieldIds`.
- If the snapshot must preserve an exact visual layout, first open the snapshot in the frontend, let the graph render, verify there are no node rectangle overlaps, then save/capture the rendered positions.
- Never hand-write compact positions for expanded field scenarios unless the estimated node heights and horizontal/vertical gaps have been checked.
- A good generated snapshot can still include `scroll`, but set it to `{ "left": 0, "top": 0 }` unless a verified viewport position is needed.

Validation expectation:

- Open the snapshot in the UI.
- Confirm selected field rows have the `selected connected` visual state.
- Confirm `field-edge` SVG paths are present for the intended field-level edges.
- Confirm visible top-level node rectangles do not overlap.
## Opening A Node With Preselected Field Edges

An agent-generated snapshot can open a specific node and also behave as if the user had already clicked one or more child fields. This is the right format for requests such as: "open the loan requirement, click the exposure amount field, and show the field-level mapping edges".

Required pattern:

```json
"view": {
  "viewMode": "traceability",
  "focusId": "requirement.item_91da9d8e75",
  "selectedNodeId": "requirement.item_91da9d8e75",
  "expanded": [
    "requirement.item_91da9d8e75",
    "concept.Loan",
    "dataset.loan_exposure_report_lines"
  ],
  "selectedFieldId": "requirement_item..Loan.has_ExposureAtDefaultAmount",
  "selectedFieldIds": [
    "requirement_item..Loan.has_ExposureAtDefaultAmount",
    "value.Loan.has_ExposureAtDefaultAmount",
    "field.loan_exposure_report_lines.exposure_at_default_amount"
  ]
}
```

Rules:

- `focusId` opens the graph around the chosen top-level node.
- `selectedNodeId` controls the node profile if no field profile is selected.
- `expanded` must include every top-level parent whose child field row should be visible.
- `selectedFieldIds` is the list of child fields the UI treats as clicked; field-level edges connected to those fields become visible.
- `selectedFieldId` is optional, but when present it controls which one field profile is open on the right side by default.
- The selected field ids must be real child-node ids from `knowledge/indexes/graph.json`.
- Do not put field-level edge types such as `REQUIRES_SEMANTIC_FIELD`, `MAPS_TO_FIELD`, `SOURCE_FIELD`, or field-level `DERIVED_BY` into `view.edgeTypes` just to reveal them. Field-level visibility is controlled by `selectedFieldIds`.
- If the field edge should connect to a dataset field, also include the dataset parent in `expanded`; otherwise the field edge may exist but the concrete field row is not visible.

When deriving this from free-text user intent, identify the business field phrase first, then find matching child-node ids by label, `properties.field_name`, `properties.relationship_name`, `properties.semantic_reference`, or description. Prefer selecting the requirement item, the matching EntityType value field, and the matching dataset field together so the graph shows the semantic chain end to end.

## Generation Steps

1. Compile or load graph indexes.
   - If `knowledge/indexes/graph.json` is missing or stale, run `build_osi_graph.py` for the scenario root first.
   - Load `graph.nodes`, `graph.edges`, and `summary`.

2. Interpret the user scenario.
   - Identify the primary question: requirement impact, data logic lineage, semantic metric derivation, ontology neighborhood, dataset relationship, or custom review.
   - Choose `viewMode` from that question.
   - Choose one primary focus node. Prefer Report Requirement for requirement impact, Report Data Logic for implementation lineage, Entity Concept for business semantic analysis, Dataset for semantic-model lineage, or Metric for metric derivation.

3. Select node types.
   - Include only node types needed to answer the question.
   - For requirement impact, usually include `regulatory_requirement`, `entity_type_concept`, `base_entity_concept`, `semantic_metric`, and possibly `semantic_dataset`.
   - For data logic lineage, include `report_implementation`, `regulatory_requirement`, `semantic_dataset`, `semantic_metric`, and only include physical table nodes in Explorer snapshots when the user explicitly asks for physical lineage.
   - For semantic model snapshots, include `semantic_dataset` and `semantic_metric`; do not include table nodes.

4. Select edge filters.
   - Start from the edges adjacent to the focus node.
   - Keep edge filters that support the scenario story.
   - Use route keys from the graph when possible, for example `MAPS_TO::entity_type_concept::semantic_dataset`.
   - Do not include field-level edge types just to make fields appear. Field-level edges are controlled by `expanded` and `selectedFieldIds`.

5. Select metrics.
   - If the scenario mentions a calculated amount, risk measure, exposure, balance, count, ratio, or SLA calculation, find matching `semantic_metric` nodes.
   - Add their metric names to `metricOverlays`.
   - If a metric is central to the scenario, set `selectedNodeId` to that metric or include it in `positions` near the focus path.

6. Select fields.
   - Expand only nodes whose fields are important for the scenario.
   - Put those top-level ids in `expanded`.
   - Add child field ids to `selectedFieldIds` only when the snapshot should open with their field-level edges visible.
   - Verify each child field id exists in `graph.nodes`.

7. Hide noise.
   - Use `hiddenNodes` only for existing visible nodes that would distract from the scenario.
   - Do not hide the focus node.
   - Do not hide a node needed to connect the scenario path.

8. Place nodes.
   - `positions` is optional. Use it when the agent can produce a clearer story than auto-layout.
   - Keep x positions left-to-right by narrative layer: requirement/data logic -> ontology/entity -> metric/dataset.
   - Avoid overlapping cards. Use spacing of at least 300 px horizontally and 180 px vertically for compact cards; use larger spacing when expanded fields are visible.

9. Write and rebuild.
   - Write JSON to `knowledge/scenarios/snapshots/<id>.json`.
   - Run `build_osi_graph.py` so `frontend/scenario-data.js` includes the new snapshot.
   - Run `node --check frontend/app.js`.

10. Verify.
    - Confirm the snapshot appears on Home and Scenario pages.
    - Open the snapshot and verify the selected node/profile, filters, metric overlays, expanded fields, and hidden nodes behave as intended.

## Agent Rules

- Prefer generating a Scenario Template when the user wants a reusable pattern with switchable center nodes.
- Prefer generating a View Snapshot when the user wants a concrete curated graph for one exact review or shareable state.
- Never put snapshot data into strict OSI YAML.
- Never invent ids. If a desired node or edge does not exist, either generate the missing OSI/app metadata first or state the gap.
- Keep descriptions meaningful and scenario-specific. Avoid generic text such as "Saved graph state snapshot" for agent-created snapshots.
- Do not include table nodes in Semantic Model view snapshots. Semantic Model view is dataset and metric focused.
- Only include physical table nodes in Explorer snapshots when the user explicitly wants source/physical lineage.

## Minimal Validation Script Pattern

Use a small validation step before writing or after writing the snapshot:

```powershell
python - <<'PY'
import json, pathlib
root = pathlib.Path('SCENARIO_ROOT')
graph = json.loads((root / 'knowledge/indexes/graph.json').read_text(encoding='utf-8'))
snapshot = json.loads((root / 'knowledge/scenarios/snapshots/SNAPSHOT_ID.json').read_text(encoding='utf-8'))
node_ids = {node['id'] for node in graph['nodes']}
edge_ids = {edge['id'] for edge in graph['edges']}
view = snapshot['view']
for key in ['focusId', 'selectedNodeId', 'selectedFieldId']:
    value = view.get(key)
    if value:
        assert value in node_ids, f'{key} not found: {value}'
if view.get('selectedEdgeId'):
    assert view['selectedEdgeId'] in edge_ids, f"selectedEdgeId not found: {view['selectedEdgeId']}"
for key in ['expanded', 'hiddenNodes', 'selectedFieldIds']:
    for value in view.get(key, []):
        assert value in node_ids, f'{key} not found: {value}'
for value, _pos in view.get('positions', []):
    assert value in node_ids, f'position node not found: {value}'
print('snapshot ids ok')
PY
```

Prefer using the repository's bundled Python on Windows instead of shell heredocs when heredocs are inconvenient.