# UI Rendering Rules

Use this reference when copying, modifying, or verifying the static OSI graph UI.

## Build Flow

From a project root containing `knowledge/regulatory-reporting-osi.yaml`:

```powershell
python <skill-dir>\scripts\build_osi_graph.py --source knowledge\regulatory-reporting-osi.yaml --copy-frontend-template
# Multiple strict OSI YAML sources can be compiled into one UI:
python <skill-dir>\scripts\build_osi_graph.py --sources knowledge\ontology-a.yaml knowledge\ontology-b.yaml --copy-frontend-template
node --check frontend\app.js
python -m http.server 8766 -d frontend
```

Open `http://127.0.0.1:8766/index.html`.

## Default Visible Nodes

Show analytical nodes by default:

```text
entity_type_concept
semantic_dataset
physical_table
regulatory_requirement
report_implementation
```

Hide container/raw nodes by default:

```text
ontology
semantic_model
ontology_mapping
value_type_concept
```

Render these as collapsed child rows:

```text
EntityType relationship whose role concept is a ValueType
dataset field under semantic dataset
column under physical table
metric-backed value field under each EntityType relationship mapped to `metric.<metric_name>`; do not render metrics under physical tables
requirement item under Report Requirement
field mapping under Report Data Logic
```


## ValueType Field Detection

- Treat an EntityType relationship as a field/property when any additional role points to a concept whose OSI `type` is `ValueType` or to an OSI built-in value concept.
- Do not require `role.name: value`; role names are optional OSI disambiguators, not field markers.
- Render these relationships as child field rows under the EntityType node, with the relationship `name` as the field name and the role `concept` as the field's value concept/data type.
- If two field rows point to the same ValueType concept, derive `SHARES_VALUE_TYPE` between those field rows.
- When an EntityType inherits a ValueType relationship from a Base Entity Concept, render the inherited child field under the EntityType as if it were directly available, but use the Base Entity relationship/value description as the visible field description. Keep inheritance traceability in metadata such as `inherited_from` or `base_relationship_path`; do not prefix the UI description with inheritance wording.

## Field-Level Edge Behavior

Rules:

- Expanding a node should show its child field rows but should not draw all field-level edges.
- Draw field-level edges only after the user selects a concrete child field row.
- Selecting a requirement field should expand related EntityType field parents and draw only that requirement field's semantic edges.
- Selecting an implementation field should expand related requirement and dataset field parents and draw only that implementation field's edges.
- Do not render semantic metrics as child fields under Table nodes.
- Selecting an EntityType metric-backed value field should draw `DERIVED_BY` edges directly to every Dataset Field referenced by the metric expression. Do not collapse multiple source fields into one edge.
- Field-level edges should not show labels on the graph canvas.
- Field-level edge type, relationship name, expression, and description should appear only after clicking the edge and reading the right-side profile.
- All graph and field edge anchors must attach to the left or right midpoint of the node or field row. Never use top or bottom anchor points, even when nodes are vertically aligned.

## Profiles

The right-side profile must update for:

```text
node clicks
graph edge clicks
child field clicks
field-level edge clicks
```

Profiles should show:

- ID and type.
- Description.
- Relationship name and edge type.
- Raw YAML for every node, edge, and field profile, using the structured YAML-derived record available to the UI.
- YAML field names exactly when exposing YAML-specific sections; for example show `ai_context`, `custom_extensions`, `primary_key`, `unique_keys`, `dimension`, and `label`, not renamed display-only labels.
- Node, edge, and field profiles must render OSI fields explicitly when present or intentionally generated as empty structures. Do not rely on Raw YAML as the only place a user can see OSI fields such as dataset `unique_keys`, dataset field `dimension` / `label`, metric `custom_extensions`, or relationship `derived_by` / `requires`.
- When `ai_context` is an object with a human-readable `description`, `purpose`, `context`, `summary`, or `notes`, show that text directly as an `ai_context` profile row like other fields. If the object has only structured keys such as `physical_kind`, still render an `ai_context` row with compact JSON instead of hiding it. Do not render a large JSON block such as `{ "description": "..." }` for ordinary profile context; the full raw structure remains available in Raw YAML.
- Source and target.
- Requirement field when present.
- Expression when present.
- Constraints, controls, mappings, owners, and evidence when present.

## Edge Type Display

## Node Type Colors

Use node type colors to distinguish modeling level, not individual business categories:

- Semantic-level node types use blue: ontology, ontology mapping, semantic model, Semantic Dataset, Dataset Field, EntityType/Base Entity/ValueType concepts, built-in/external concepts, metrics, and value properties including metric-backed value fields.
- Physical-level node types use green: physical source tables, tables, views, and columns.
- Report Requirement nodes and requirement semantic items use orange, distinct from semantic blue.
- Report Data Logic nodes and data logic field bindings use purple, distinct from physical green.
- Node type filters and catalog type ordering should put `Report Requirement`, `Report Data Logic`, `Entity Concept`, `Base Entity Concept`, then `Table` first.
- Do not show a separate Data Type filter in the left sidebar; ValueType/data semantics are shown through node details and field relationships instead.
- Apply the same color convention to node result dots, graph node accents, detail badges, and node-type filter chips.
- Do not introduce extra node colors for business categories unless the user explicitly asks for a new visual grouping.

On the canvas:

- Node-level edges may show labels.
- EntityType-to-EntityType business edge labels must show only the semantic action prefix extracted from the graph edge id or relationship name, for example `HELD_BY` from `HELD_BY_Depositor` or `DEPENDS_ON` from `DEPENDS_ON_CollateralAsset`.
- Dataset join edge labels must show the join columns, for example `join account_id` when `from_columns` and `to_columns` are both `account_id`; composite joins show all pairs. Keep the semantic join name such as `pledge_collateral` in the edge profile. Do not create physical table-to-table join edges; joins belong to semantic datasets.
- Field-level edges must not show labels.
- Mechanism edge labels should match `edge.type` in visible UI unless the label carries real semantics. Keep `DATASET_JOIN` labels as join-column text such as `join account_id`, and keep EntityType business relationships as the semantic action prefix such as `HELD_BY` or `DEPENDS_ON`. Do not display UI-only phrases such as `reads from`, `maps field`, `requires field`, or `implements` when the edge type already says that.
- Keep generated `edge.id` as an internal key only. Do not show graph edge ids in the right-side profile or catalog detail.
- Profile descriptions must come from YAML/app metadata or from a direct aggregation of YAML descriptions. Do not invent broad fallback descriptions such as `<node> reads source dataset <dataset>` or `<node> requires semantic concept <concept>`.

In the profile:

- Show `edge.type` as the graph/UI mechanism.
- Show `edge.label` as the semantic relationship name.
- Do not require a separate relationship type field in YAML or in generated graph data for EntityType business relationships. For these edges, the graph edge `id` must be the OSI relationship `name` itself in `<action>_<role>` form, such as `DEPENDS_ON_CollateralAsset`; derive the UI edge type and graph canvas label from the semantic action prefix before the final underscore.
- Put node-to-node mechanism/lineage/reporting relationships in the unified `Edge Type` route list. EntityType-to-EntityType business relationships appear as one de-duplicated `Entity -> Entity` route row, while concrete business action values such as `REFERENCES`, `USES`, or `HELD_BY` live in a compact `Business Relationship` selector under Edge Type. The route controls must display as compact route rows, not solid blue pills: show only the endpoint node-type route, with source and target node-type color dots, short endpoint names, and a small arrow, for example `Entity -> Dataset`, `Dataset -> Table`, or `Entity -> Entity`; do not display the action/mechanism label above the route. Sort route rows in this order when present: report routes (`Requirement -> Entity`, `Data Logic -> Requirement`, `Data Logic -> Dataset`), `Entity -> Dataset`, `Dataset -> Table`, `Entity -> Entity`, `Dataset -> Dataset`, `Entity -> Metric`, `Metric -> Dataset`, then `Entity -> Base Entity`. Do not put field-level edges such as `MAPS_TO_FIELD`, field-level `SOURCE_FIELD`, or field-level `DERIVED_BY` in Edge Type filters; they appear only after field selection or metric overlay selection.
- When the graph focus node is a Base Entity, select only the `EXTENDS` edge type by default so the initial graph shows inheritance only. Other edge types can still be enabled manually.
- Hidden node-level edge chips must not contribute graph traversal. After edge filtering, render only nodes reachable from the current focus node through currently visible parent/node-level edges. If a node no longer has a visible path to the focus node, remove it from the graph even if it has field-level edges or was previously expanded.
- Field-level edges may render only between fields whose parent nodes are already visible through focus-reachable node-level edges; selecting a field must not introduce an otherwise disconnected parent node. Field-level edge visibility is controlled by selected fields and selected metric overlays, not by Edge Type chips.
- Do not add synthetic EntityType relationship properties such as a separate relationship-name property, `inverse`, `inverse_of`, `bidirectional`, `relationship_path`, generated `relationship`, or null-valued `multiplicity`. Business edge profiles should only show fields with a clear YAML source, such as the relationship `name` via `edge.label`, non-empty `verbalizes`, non-empty `requires`, non-empty `derived_by`, and the source `roles` array when needed. Do not show derived UI helper rows such as `Edge Type` or `Action` for EntityType-to-EntityType business relationship profiles.

## Verification Checklist

Verify after any generation or UI edit:

```text
catalog opens
graph opens
node profile appears
edge profile appears
field profile appears
field-level edge profile appears
requirement fields start collapsed
implementation fields start collapsed
expanding a node does not draw field-level edges
clicking one requirement field draws only that field's semantic edge(s)
clicking one implementation field draws only that field's requirement/output/source edge(s)
clicking one Entity metric field draws DERIVED_BY edges to every metric input table field
field-level edges have no labels on the canvas
same ValueType usage derives SHARES_VALUE_TYPE between EntityType field rows
graph index contains IMPLEMENTS_FIELD
graph index contains no IMPLEMENTS_SEMANTIC_FIELD
hide/show works for nodes and properties
```

## View Layout Rules

Use separate graph views instead of one all-purpose graph when the user needs explanation rather than raw traceability.

- Traceability View: cross-layer exploration. Keep focus/depth controls and allow all relevant edge types.
- Ontology View: render a full filtered ontology canvas, not a focus-neighborhood. Put the Ontology selector in the graph title area, not the left sidebar, when multiple ontologies exist. In the graph header, use the selector as the only visible ontology-name surface: do not repeat the selected ontology name as a large title. Show only a compact view pill, the selector, and meaningful ontology YAML `description` / `ai_context`; the right-side profile can show the full ontology profile. Show Entity Concept nodes by default and keep Base Entity Concept available but unchecked by default. When a Base Entity is shown, inherited ValueType fields and identify-by fields must behave like directly declared fields. Do not show Dataset, Table, Report Data Logic, or physical source nodes.
- Semantic Model View: render a full filtered semantic-model canvas, not a focus-neighborhood. Put the Semantic Model selector in the graph title area, not the left sidebar, when multiple semantic models exist. In the graph header, use the selector as the only visible semantic-model-name surface: do not repeat the selected semantic model name as a large title. Show only a compact view pill, the selector, and meaningful semantic model YAML `description` / `ai_context`; the right-side profile can show the full semantic model profile. Display `semantic_dataset` nodes as `Dataset` in the UI. Show Dataset/Table nodes, physical source/query/table context from `custom_extensions`, Dataset joins, and a Metric Overlay multi-select. Semantic metric nodes derived from `semantic_model.metrics[]` are hidden until selected in the overlay. Field rows are hidden by default. Dataset-field dependency edges for metrics are hidden until the user selects one or more relevant field rows. Do not show ontology concepts in this view.
- Customized Scenario: render the same graph layout as Graph Explorer, with a Scenario selector, a Center node selector for Scenario Templates, graph filters, one toolbar-level `Save scenario` button, and the right-side detail panel. Scenario Templates replace dedicated Requirement/Data Logic tabs: they can center on `regulatory_requirement`, `report_implementation`, or another configured node type and apply node/edge filters. If a template `center_selector` uses `node_type`, the UI must let the user choose which matching node is the center. View Snapshots restore exact graph state, including manual positions, hidden nodes, expanded fields, selected fields/edges, metric overlays, and scroll. The right-side profile defaults to the selected scenario profile until the user clicks a node, edge, field, or field edge.

Layout guidance:

- Keep the focused node or selected slice near the center-left. In model-wide views, prefer layered layouts that group related node types and keep selected ontology or semantic model contents readable.
- Keep fields inside their parent node and keep all field rows hidden by default in every view. User field hide/show controls expansion. Field-level edges appear only for selected field rows; selecting a field toggles it, selecting another field adds to the current field selection, and clicking an already selected field removes it without clearing other selected fields.
- Do not show disconnected nodes after filters remove their connecting edge.
- Avoid generic fallback edge text. Edge descriptions must come from YAML/app metadata or be empty with a validation error during generation.
- Metrics are semantic-model overlay nodes derived from `semantic_model.metrics[]`; expose a multi-select Metric Overlay in Semantic Model View. Only selected metrics render as Metric nodes. Do not render metrics as Table child rows.

- Edge type filters are node-to-node route chips. Entity Concept -> Entity Concept appears once, while concrete business relationship action filters live in a compact `Business Relationship` selector under Edge Type.

Left sidebar controls must be view-specific:

- Home: no graph controls. Show Ontology, Semantic Model, and Customized Scenario as fixed-height scrollable selection lists, not dropdown pickers and not content-height panels. The list viewport must keep a stable height even when only one item exists, so users can understand that many ontologies/models/scenarios would scroll in the same area; reserve scrollbar gutter to avoid layout shifts. Ontology and Semantic Model lists must use real `summary.source_ontologies[]` and `summary.source_semantic_models[]` entries when available; do not show aggregate fallback labels such as `Multiple OSI Ontologies` as selectable ontology rows. Each Ontology row shows name, meaningful `description` / `ai_context`, node count, and its own `Open Ontology` button. Each Semantic Model row shows name, meaningful `description` / `ai_context`, node count, and its own `Open Model` button. Each Scenario Template or View Snapshot row shows name, type, summary, its own `Open Scenario` button, and a small top-right `x` delete control when the local scenario server is available. Do not provide a generic `Open scenario graph` button; users must choose the specific scenario/template/snapshot first.
- Ontology View: title-area Ontology selector, Hidden Nodes, Node Type, Business Relationship chips, node-level Edge Type chips. Base Entity Concept is available but unchecked by default.
- Semantic Model View: title-area Semantic Model selector, Hidden Nodes, Node Type, Metric Overlay, node-level Edge Type chips.
- Customized Scenario: use the same graph shell pattern as Ontology View and Semantic Model View. Put only the Scenario selector, Scenario Template center selector, and the selected scenario `description` in the graph title/header area above the canvas, because choosing the scenario is the primary page action. Do not put these scenario controls in the left sidebar when `currentPage === scenarios`. The left sidebar should contain graph filters such as Hidden Nodes, Max Depth, Node Type, and Edge Type. The right-side profile defaults to the selected scenario profile. Add a single toolbar-level `Save scenario` button next to graph actions such as `Fit graph` and `Show all fields`; it opens a modal where the user chooses save type first, then enters name and description. Saving requires `serve_osi_ui.py`; static file mode can open templates/snapshots but cannot persist new local files. Saving a Scenario Template writes YAML to `knowledge/scenarios/presets` and uses the current focus node type as `center_selector.node_type`; saving a View Snapshot writes JSON to `knowledge/scenarios/snapshots` and preserves exact UI state.
- Catalog Search: search/filter sidebar for all catalog nodes and node-level edges.
- Graph Explorer: Focus, Hidden Nodes, Max Depth, Node Type, Edge Type relationship chips, and a toolbar-level `Save scenario` button placed with `Fit graph` and `Show all fields`; do not show a Scenario selector section in the left sidebar. The button opens the same save modal used by Customized Scenario, with save type before name and description. Saving as Scenario Template captures reusable filters and the focus node type; saving as View Snapshot captures exact UI state.

Interaction rules:

- Single-clicking a node in any graph view must only select that node and update the right-side profile. It must not change the graph focus/central node, including in Graph Explorer.
- Double-clicking a node in any graph view opens Graph Explorer with that node as the central focus node.
- Clicking an edge selects the edge profile. Field-level edge visibility is still controlled by selected fields or metric overlays.
## View Semantics

- Semantic Model View shows distinct-colored Semantic Dataset nodes, green physical Table nodes, selected Metric overlay nodes, `DATASET_JOIN` edges between datasets, and `SOURCE_TABLE` edges from datasets to physical sources. Do not show physical table-to-table join edges.
- Metric overlay is multi-select. Selected metrics must automatically expand related Semantic Dataset field rows so their dependency edges are visible; unselected metrics remain hidden.
- Model-wide Ontology and Semantic Model views do not use a central focus node. Opening either view should select the current ontology/semantic model as the right-side profile by default. Requirement/Data Logic exploration should be represented as Customized Scenario presets that open the Customized Scenario graph workspace with the scenario and center selectors in the top graph header and filters in the left sidebar.
- Shared nodes are membership-filtered, not relationship-modeled. If multiple strict OSI files reuse the same Concept, Dataset, or physical Table, render one node and let it appear in every Ontology View or Semantic Model View whose generated membership list includes it. Do not draw ontology-to-ontology or semantic-model-to-semantic-model edges. When the user opens that shared node in Graph Explorer, show all graph relationships attached to the node according to the active node/edge filters.
- Layout recalculates after changing view, filters, metric overlays, field expansion, or hidden nodes. It avoids overlaps in generated positions, while user-dragged manual positions are preserved until the graph is reset or re-rendered without those nodes.

- When a node is expanded, render all of its child fields/properties; do not cap the list.


