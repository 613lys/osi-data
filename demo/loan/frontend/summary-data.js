window.OSI_SUMMARY = {
  "ontology": "LoanExposureReportingOntology",
  "ontologies": [
    "LoanExposureReportingOntology"
  ],
  "source_ontologies": [
    {
      "name": "LoanExposureReportingOntology",
      "description": "OSI scenario for loan exposure regulatory reporting built from retail and institutional loan source metadata.",
      "version": "0.2.0.dev0",
      "ai_context": {
        "model_version": "1.0.0",
        "owner": "Credit Risk Regulatory Reporting",
        "source_systems": [
          "retail_lending_core",
          "institutional_lending_core",
          "customer_master",
          "product_master",
          "credit_risk_engine"
        ]
      },
      "source_file": "knowledge/regulatory-reporting-osi.yaml"
    }
  ],
  "semantic_models": [
    "LoanExposureSemanticModel"
  ],
  "source_semantic_models": [
    {
      "name": "LoanExposureSemanticModel",
      "description": "Table-backed semantic model for loan exposure reporting across retail and institutional lending populations.",
      "ai_context": null,
      "mapping_name": "LoanExposureSemanticMapping",
      "ontology": "LoanExposureReportingOntology",
      "source_file": "knowledge/regulatory-reporting-osi.yaml",
      "dataset_count": 5,
      "metric_count": 2
    }
  ],
  "entity_type_concepts": 6,
  "base_entity_concepts": 3,
  "value_type_concepts": 12,
  "regulatory_requirements": 1,
  "report_data_logic": 1,
  "semantic_datasets": 5,
  "physical_tables": 4,
  "edges": 239,
  "warning_count": 0,
  "warnings": []
};
