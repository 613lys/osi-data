window.SCENARIO_DATA = {
  "presets": [
    {
      "id": "entity-concept-analysis-template",
      "kind": "preset",
      "name": "Entity Concept analysis template",
      "order": 30,
      "description": "Reusable graph template for Entity Concept centers.",
      "center_selector": {
        "node_type": "entity_type_concept"
      },
      "createdAt": "2026-06-30T14:52:37.197Z",
      "updatedAt": "2026-06-30T14:52:37.197Z",
      "view": {
        "viewMode": "traceability",
        "selectedOntology": "FxSettlementMonitoringOntology",
        "selectedSemanticModel": "FxSettlementSemanticModel",
        "maxDepth": 1,
        "nodeTypes": [
          "report_implementation",
          "regulatory_requirement",
          "semantic_dataset",
          "physical_table",
          "entity_type_concept",
          "semantic_metric",
          "base_entity_concept"
        ],
        "businessEdgeTypes": [
          "EXECUTED_WITH",
          "HELD_BY",
          "OWNS",
          "PRICED_BY",
          "SETTLED_BY",
          "SETTLES",
          "USES"
        ],
        "edgeTypes": [
          "REQUIRES_CONCEPT::regulatory_requirement::entity_type_concept",
          "IMPLEMENTS::report_implementation::regulatory_requirement",
          "SOURCE_TABLE::report_implementation::semantic_dataset",
          "MAPS_TO::entity_type_concept::semantic_dataset",
          "SOURCE_TABLE::semantic_dataset::physical_table",
          "DATASET_JOIN::semantic_dataset::semantic_dataset",
          "MAPS_TO::entity_type_concept::semantic_metric",
          "DERIVED_BY::semantic_metric::semantic_dataset"
        ],
        "metricOverlays": []
      },
      "source_file": "knowledge/scenarios/presets/entity-concept-analysis-template.yaml"
    },
    {
      "id": "fx-data-logic-lineage",
      "kind": "preset",
      "name": "FX data logic lineage",
      "order": 20,
      "description": "Start from FX settlement monitoring data logic and trace which requirement fields and semantic datasets support the implementation.",
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
          "physical_table"
        ],
        "edgeTypes": [
          "Report Data Logic -> Report Requirement",
          "Report Data Logic -> Dataset",
          "Dataset -> Table"
        ],
        "businessEdgeTypes": [],
        "metricOverlays": []
      },
      "source_file": "knowledge/scenarios/presets/fx-data-logic-lineage.yaml"
    },
    {
      "id": "fx-requirement-impact",
      "kind": "preset",
      "name": "FX requirement impact",
      "order": 10,
      "description": "Start from an FX settlement monitoring requirement and show the ontology concepts and semantic fields needed for impact review.",
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
          "semantic_dataset",
          "semantic_metric"
        ],
        "edgeTypes": [
          "REQUIRES_CONCEPT::regulatory_requirement::entity_type_concept",
          "Entity Concept -> Dataset"
        ],
        "businessEdgeTypes": [],
        "metricOverlays": [
          "report_currency_exposure_amount",
          "settlement_delay_days"
        ]
      },
      "source_file": "knowledge/scenarios/presets/fx-requirement-impact.yaml"
    }
  ],
  "snapshots": []
};
