window.OSI_SUMMARY = {
  "ontology": "FxSettlementMonitoringOntology",
  "ontologies": [
    "FxSettlementMonitoringOntology"
  ],
  "source_ontologies": [
    {
      "name": "FxSettlementMonitoringOntology",
      "description": "OSI scenario for foreign exchange settlement monitoring, built from trade, settlement instruction, counterparty, nostro account, and FX rate source metadata.",
      "version": "0.2.0.dev0",
      "ai_context": {
        "model_version": "1.0.0",
        "owner": "Treasury Operations Data Governance",
        "source_systems": [
          "fx_trading_core",
          "payments_core",
          "counterparty_master",
          "nostro_master",
          "market_data"
        ]
      },
      "source_file": "knowledge/regulatory-reporting-osi.yaml"
    }
  ],
  "semantic_models": [
    "FxSettlementSemanticModel"
  ],
  "source_semantic_models": [
    {
      "name": "FxSettlementSemanticModel",
      "description": "Table-backed semantic model for FX trade settlement monitoring across trading, payments, counterparty master, account master, and market data sources.",
      "ai_context": null,
      "mapping_name": "FxSettlementSemanticMapping",
      "ontology": "FxSettlementMonitoringOntology",
      "source_file": "knowledge/regulatory-reporting-osi.yaml",
      "dataset_count": 6,
      "metric_count": 2
    }
  ],
  "entity_type_concepts": 10,
  "base_entity_concepts": 5,
  "value_type_concepts": 15,
  "regulatory_requirements": 1,
  "report_data_logic": 1,
  "semantic_datasets": 6,
  "physical_tables": 5,
  "edges": 291,
  "warning_count": 0,
  "warnings": []
};
