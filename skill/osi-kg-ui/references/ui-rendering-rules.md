# UI Rendering Rules

Use this reference when copying, modifying, or verifying the static OSI graph UI.

## Build Flow

From a project root containing `knowledge/regulatory-reporting-osi.yaml`:

```powershell
python <skill-dir>\scripts\build_osi_graph.py --source knowledge\regulatory-reporting-osi.yaml --copy-frontend-template
node --check frontend\app.js
python -m http.server 8766 -d frontend
```

Open `http://127.0.0.1:8766/index.html`.

## Default Visible Nodes

Show analytical nodes by default:

```text
entity_type_concept
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
ValueType role under EntityType
column under physical table
metric field under each physical table referenced by the metric expression
requirement item under RegulatoryRequirement
implementation field binding under ReportImplementation
```

## Field-Level Edge Behavior

Rules:

- Expanding a node should show its child field rows but should not draw all field-level edges.
- Draw field-level edges only after the user selects a concrete child field row.
- Selecting a requirement field should expand related EntityType field parents and draw only that requirement field's semantic edges.
- Selecting an implementation field should expand related requirement and dataset field parents and draw only that implementation field's edges.
- Selecting a metric field should draw only that metric field's `USES_FIELD` edges to the columns used by its expression.
- Field-level edges should not show labels on the graph canvas.
- Field-level edge type, relationship name, expression, and description should appear only after clicking the edge and reading the right-side profile.
- All graph and field edge anchors should attach to left or right sides, never top or bottom.

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
- Source and target.
- Requirement field when present.
- Expression when present.
- Constraints, controls, mappings, owners, and evidence when present.

## Edge Type Display

## Node Type Colors

Use node type colors to distinguish modeling level, not individual business categories:

- Semantic-level node types use blue: ontology, ontology mapping, semantic model, EntityType/Base Entity/ValueType concepts, built-in/external concepts, regulatory requirements, requirement semantic items, value properties, and semantic metric fields.
- Physical-level node types use green: physical tables, tables, views, columns, report implementations, and implementation field bindings.
- Apply the same blue/green convention to node result dots, graph node accents, detail badges, and node-type filter chips.
- Do not introduce extra node colors for business categories unless the user explicitly asks for a new visual grouping.

On the canvas:

- Node-level edges may show labels.
- EntityType-to-EntityType business edge labels must show only the action prefix extracted from the graph edge id or relationship name, for example `pledge` from `pledge_collateral`.
- Field-level edges must not show labels.

In the profile:

- Show `edge.type` as the graph/UI mechanism.
- Show `edge.label` as the semantic relationship name.
- Do not require a separate relationship type field in YAML or in generated graph data for EntityType business relationships. For these edges, the graph edge `id` must be the OSI relationship `name` itself in `<action>_<role>` form, such as `pledge_collateral`; derive the UI edge type and graph canvas label from the first underscore-delimited segment.
- The `<action>` prefix must come from the controlled set: `own`, `hold`, `book`, `reference`, `pledge`, `value`, `price`, `classify`, `settle`, `secure`, `derive`, `post`.
- Do not add synthetic EntityType relationship properties such as a separate relationship-name property, `inverse`, `inverse_of`, `bidirectional`, `relationship_path`, generated `relationship`, or null-valued `multiplicity`. Business edge profiles should only show fields with a clear YAML source, such as the relationship `name` via `edge.label`, non-empty `verbalizes`, non-empty `requires`, non-empty `derived_by`, and the source `roles` array when needed.

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
field-level edges have no labels on the canvas
same ValueType usage derives SHARES_VALUE_TYPE between EntityType field rows
graph index contains IMPLEMENTS_REQUIREMENT_FIELD
graph index contains no IMPLEMENTS_SEMANTIC_FIELD
hide/show works for nodes and properties
```


