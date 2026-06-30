window.SCENARIO_DATA = {
  "presets": [
    {
      "id": "data-logic-lineage",
      "kind": "preset",
      "name": "Data logic lineage",
      "order": 20,
      "description": "Start from report data logic and show which requirements it implements and which semantic datasets or source tables it reads.",
      "center_selector": {
        "node_type": "report_implementation"
      },
      "view": {
        "viewMode": "traceability",
        "maxDepth": 2,
        "nodeTypes": [
          "report_implementation",
          "regulatory_requirement",
          "semantic_dataset",
          "physical_table",
          "table"
        ],
        "edgeTypes": [
          "IMPLEMENTS",
          "IMPLEMENTS_FIELD",
          "SOURCE_TABLE",
          "SOURCE_FIELD",
          "MAPS_TO_FIELD"
        ]
      },
      "source_file": "knowledge/scenarios/presets/data-logic-lineage.yaml"
    },
    {
      "id": "requirement-impact",
      "kind": "preset",
      "name": "Requirement impact",
      "order": 10,
      "description": "Start from a report requirement and show the ontology concepts and semantic fields required by that scenario.",
      "center_selector": {
        "node_type": "regulatory_requirement"
      },
      "view": {
        "viewMode": "traceability",
        "maxDepth": 2,
        "nodeTypes": [
          "regulatory_requirement",
          "entity_type_concept",
          "base_entity_concept",
          "semantic_metric"
        ],
        "edgeTypes": [
          "REQUIRES_CONCEPT",
          "REQUIRES_SEMANTIC_FIELD",
          "DERIVED_FROM"
        ]
      },
      "source_file": "knowledge/scenarios/presets/requirement-impact.yaml"
    }
  ],
  "snapshots": []
};
