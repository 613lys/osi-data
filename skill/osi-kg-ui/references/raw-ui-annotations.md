# Raw UI Annotations

Read this only when generating application metadata or the interactive UI. Do not read it for strict OSI YAML generation.

UI annotations are not OSI YAML. They provide optional profile text for graph edges when OSI mapping structure is not enough to explain why a concept maps to a dataset.

## Mapping Edge Annotations

File path:

```text
raw/fragments/ui_annotations/mapping_edge_annotations.yaml
```

Shape:

```yaml
mapping_edge_annotations:
- concept: MarginAccount
  dataset: margin_accounts
  description: Margin account source population mapped as MarginAccount entity records.
```

Fields:

- `concept`: EntityType name. Must match an ontology EntityType if present.
- `dataset`: Semantic model dataset name. Must match `semantic_model.datasets[].name`.
- `description`: UI-only explanation for the Entity Concept -> Dataset/Table edge profile. Describe the entity population represented by that dataset. Do not describe columns, joins, primary keys, SQL, or implementation details.

Generation behavior:

- `compose_source_fragments.py` reads this file into top-level raw `mapping_edge_annotations` when it exists.
- `generate_osi_yaml.py` writes it to `knowledge/regulatory-reporting-app.yaml`, not to strict OSI YAML.
- `build_osi_graph.py` attaches the description to the matching `MAPS_TO` edge profile.

Strict OSI behavior:

- This file has no effect on `knowledge/regulatory-reporting-osi.yaml`.
- Concept mappings should not include `dataset_mappings` or any UI annotation fields.

When to omit:

- Omit this file when generating only OSI YAML.
- Omit an annotation when the dataset/table description and mapping edges are already clear enough for the UI.




