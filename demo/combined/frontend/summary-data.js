window.OSI_SUMMARY = {
  "ontology": "Multiple OSI Ontologies",
  "ontologies": [
    "LoanExposureReportingOntology",
    "DepositLiquidityReportingOntology",
    "CollateralMarginReportingOntology"
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
      "source_file": "knowledge/sources/loan-regulatory-reporting-osi.yaml"
    },
    {
      "name": "DepositLiquidityReportingOntology",
      "description": "OSI scenario for deposit liquidity and stable funding regulatory reporting built from deposit account, customer, product, and prepared report-line metadata.",
      "version": "0.2.0.dev0",
      "ai_context": {
        "model_version": "1.0.0",
        "owner": "Treasury Liquidity Regulatory Reporting",
        "source_systems": [
          "core_deposit",
          "customer_master",
          "product_master",
          "liquidity_risk_engine"
        ]
      },
      "source_file": "knowledge/sources/deposit-regulatory-reporting-osi.yaml"
    },
    {
      "name": "CollateralMarginReportingOntology",
      "description": "OSI scenario for collateral margin regulatory reporting built from physical table metadata first.",
      "version": "0.2.0.dev0",
      "ai_context": {
        "model_version": "1.0.0",
        "owner": "Collateral Regulatory Reporting",
        "source_systems": [
          "margin_core",
          "collateral_master",
          "market_risk"
        ]
      },
      "source_file": "knowledge/sources/collateral-regulatory-reporting-osi.yaml"
    }
  ],
  "semantic_models": [
    "LoanExposureSemanticModel",
    "DepositLiquiditySemanticModel",
    "CollateralMarginSemanticModel"
  ],
  "source_semantic_models": [
    {
      "name": "LoanExposureSemanticModel",
      "description": "Table-backed semantic model for loan exposure reporting across retail and institutional lending populations.",
      "ai_context": null,
      "mapping_name": "LoanExposureSemanticMapping",
      "ontology": "LoanExposureReportingOntology",
      "source_file": "knowledge/sources/loan-regulatory-reporting-osi.yaml",
      "dataset_count": 5,
      "metric_count": 2
    },
    {
      "name": "DepositLiquiditySemanticModel",
      "description": "Semantic model for deposit liquidity reporting across account balances, customer master data, product runoff parameters, and prepared report lines.",
      "ai_context": null,
      "mapping_name": "DepositLiquiditySemanticMapping",
      "ontology": "DepositLiquidityReportingOntology",
      "source_file": "knowledge/sources/deposit-regulatory-reporting-osi.yaml",
      "dataset_count": 4,
      "metric_count": 2
    },
    {
      "name": "CollateralMarginSemanticModel",
      "description": "Table-backed semantic model for collateral margin reporting.",
      "ai_context": null,
      "mapping_name": "CollateralMarginSemanticMapping",
      "ontology": "CollateralMarginReportingOntology",
      "source_file": "knowledge/sources/collateral-regulatory-reporting-osi.yaml",
      "dataset_count": 5,
      "metric_count": 1
    }
  ],
  "entity_type_concepts": 17,
  "base_entity_concepts": 7,
  "value_type_concepts": 22,
  "regulatory_requirements": 1,
  "report_data_logic": 1,
  "semantic_datasets": 14,
  "physical_tables": 12,
  "edges": 743,
  "warning_count": 16,
  "warnings": [
    {
      "type": "shared_concept_description_mismatch",
      "severity": "warning",
      "concept": "CustomerData",
      "message": "Shared concept 'CustomerData' has different non-empty descriptions; keeping the first description for the shared graph node.",
      "existing_ontologies": [
        "LoanExposureReportingOntology"
      ],
      "incoming_ontology": "DepositLiquidityReportingOntology",
      "existing_source_files": [
        "knowledge/sources/loan-regulatory-reporting-osi.yaml"
      ],
      "incoming_source_file": "knowledge/sources/deposit-regulatory-reporting-osi.yaml"
    },
    {
      "type": "shared_concept_relationship_mismatch",
      "severity": "warning",
      "concept": "CustomerData",
      "relationship": "has_CustomerIdentifier",
      "message": "Shared concept 'CustomerData' has different definitions for relationship 'has_CustomerIdentifier'; keeping the first definition for the shared graph node."
    },
    {
      "type": "shared_concept_description_mismatch",
      "severity": "warning",
      "concept": "ProductData",
      "message": "Shared concept 'ProductData' has different non-empty descriptions; keeping the first description for the shared graph node.",
      "existing_ontologies": [
        "LoanExposureReportingOntology"
      ],
      "incoming_ontology": "DepositLiquidityReportingOntology",
      "existing_source_files": [
        "knowledge/sources/loan-regulatory-reporting-osi.yaml"
      ],
      "incoming_source_file": "knowledge/sources/deposit-regulatory-reporting-osi.yaml"
    },
    {
      "type": "shared_concept_relationship_mismatch",
      "severity": "warning",
      "concept": "ProductData",
      "relationship": "has_ProductIdentifier",
      "message": "Shared concept 'ProductData' has different definitions for relationship 'has_ProductIdentifier'; keeping the first definition for the shared graph node."
    },
    {
      "type": "shared_concept_description_mismatch",
      "severity": "warning",
      "concept": "CustomerIdentifier",
      "message": "Shared concept 'CustomerIdentifier' has different non-empty descriptions; keeping the first description for the shared graph node.",
      "existing_ontologies": [
        "LoanExposureReportingOntology"
      ],
      "incoming_ontology": "DepositLiquidityReportingOntology",
      "existing_source_files": [
        "knowledge/sources/loan-regulatory-reporting-osi.yaml"
      ],
      "incoming_source_file": "knowledge/sources/deposit-regulatory-reporting-osi.yaml"
    },
    {
      "type": "shared_concept_description_mismatch",
      "severity": "warning",
      "concept": "ProductIdentifier",
      "message": "Shared concept 'ProductIdentifier' has different non-empty descriptions; keeping the first description for the shared graph node.",
      "existing_ontologies": [
        "LoanExposureReportingOntology"
      ],
      "incoming_ontology": "DepositLiquidityReportingOntology",
      "existing_source_files": [
        "knowledge/sources/loan-regulatory-reporting-osi.yaml"
      ],
      "incoming_source_file": "knowledge/sources/deposit-regulatory-reporting-osi.yaml"
    },
    {
      "type": "shared_concept_description_mismatch",
      "severity": "warning",
      "concept": "CalendarDate",
      "message": "Shared concept 'CalendarDate' has different non-empty descriptions; keeping the first description for the shared graph node.",
      "existing_ontologies": [
        "LoanExposureReportingOntology"
      ],
      "incoming_ontology": "DepositLiquidityReportingOntology",
      "existing_source_files": [
        "knowledge/sources/loan-regulatory-reporting-osi.yaml"
      ],
      "incoming_source_file": "knowledge/sources/deposit-regulatory-reporting-osi.yaml"
    },
    {
      "type": "shared_concept_description_mismatch",
      "severity": "warning",
      "concept": "Rate",
      "message": "Shared concept 'Rate' has different non-empty descriptions; keeping the first description for the shared graph node.",
      "existing_ontologies": [
        "LoanExposureReportingOntology"
      ],
      "incoming_ontology": "DepositLiquidityReportingOntology",
      "existing_source_files": [
        "knowledge/sources/loan-regulatory-reporting-osi.yaml"
      ],
      "incoming_source_file": "knowledge/sources/deposit-regulatory-reporting-osi.yaml"
    },
    {
      "type": "shared_concept_description_mismatch",
      "severity": "warning",
      "concept": "CustomerSegment",
      "message": "Shared concept 'CustomerSegment' has different non-empty descriptions; keeping the first description for the shared graph node.",
      "existing_ontologies": [
        "LoanExposureReportingOntology"
      ],
      "incoming_ontology": "DepositLiquidityReportingOntology",
      "existing_source_files": [
        "knowledge/sources/loan-regulatory-reporting-osi.yaml"
      ],
      "incoming_source_file": "knowledge/sources/deposit-regulatory-reporting-osi.yaml"
    },
    {
      "type": "shared_concept_description_mismatch",
      "severity": "warning",
      "concept": "ProductType",
      "message": "Shared concept 'ProductType' has different non-empty descriptions; keeping the first description for the shared graph node.",
      "existing_ontologies": [
        "LoanExposureReportingOntology"
      ],
      "incoming_ontology": "DepositLiquidityReportingOntology",
      "existing_source_files": [
        "knowledge/sources/loan-regulatory-reporting-osi.yaml"
      ],
      "incoming_source_file": "knowledge/sources/deposit-regulatory-reporting-osi.yaml"
    },
    {
      "type": "shared_concept_description_mismatch",
      "severity": "warning",
      "concept": "AccountData",
      "message": "Shared concept 'AccountData' has different non-empty descriptions; keeping the first description for the shared graph node.",
      "existing_ontologies": [
        "DepositLiquidityReportingOntology"
      ],
      "incoming_ontology": "CollateralMarginReportingOntology",
      "existing_source_files": [
        "knowledge/sources/deposit-regulatory-reporting-osi.yaml"
      ],
      "incoming_source_file": "knowledge/sources/collateral-regulatory-reporting-osi.yaml"
    },
    {
      "type": "shared_concept_relationship_mismatch",
      "severity": "warning",
      "concept": "AccountData",
      "relationship": "has_AccountIdentifier",
      "message": "Shared concept 'AccountData' has different definitions for relationship 'has_AccountIdentifier'; keeping the first definition for the shared graph node."
    },
    {
      "type": "shared_concept_description_mismatch",
      "severity": "warning",
      "concept": "AccountIdentifier",
      "message": "Shared concept 'AccountIdentifier' has different non-empty descriptions; keeping the first description for the shared graph node.",
      "existing_ontologies": [
        "DepositLiquidityReportingOntology"
      ],
      "incoming_ontology": "CollateralMarginReportingOntology",
      "existing_source_files": [
        "knowledge/sources/deposit-regulatory-reporting-osi.yaml"
      ],
      "incoming_source_file": "knowledge/sources/collateral-regulatory-reporting-osi.yaml"
    },
    {
      "type": "shared_concept_description_mismatch",
      "severity": "warning",
      "concept": "CurrencyCode",
      "message": "Shared concept 'CurrencyCode' has different non-empty descriptions; keeping the first description for the shared graph node.",
      "existing_ontologies": [
        "LoanExposureReportingOntology",
        "DepositLiquidityReportingOntology"
      ],
      "incoming_ontology": "CollateralMarginReportingOntology",
      "existing_source_files": [
        "knowledge/sources/loan-regulatory-reporting-osi.yaml",
        "knowledge/sources/deposit-regulatory-reporting-osi.yaml"
      ],
      "incoming_source_file": "knowledge/sources/collateral-regulatory-reporting-osi.yaml"
    },
    {
      "type": "shared_concept_description_mismatch",
      "severity": "warning",
      "concept": "CountryCode",
      "message": "Shared concept 'CountryCode' has different non-empty descriptions; keeping the first description for the shared graph node.",
      "existing_ontologies": [
        "LoanExposureReportingOntology",
        "DepositLiquidityReportingOntology"
      ],
      "incoming_ontology": "CollateralMarginReportingOntology",
      "existing_source_files": [
        "knowledge/sources/loan-regulatory-reporting-osi.yaml",
        "knowledge/sources/deposit-regulatory-reporting-osi.yaml"
      ],
      "incoming_source_file": "knowledge/sources/collateral-regulatory-reporting-osi.yaml"
    },
    {
      "type": "shared_concept_description_mismatch",
      "severity": "warning",
      "concept": "Rate",
      "message": "Shared concept 'Rate' has different non-empty descriptions; keeping the first description for the shared graph node.",
      "existing_ontologies": [
        "LoanExposureReportingOntology",
        "DepositLiquidityReportingOntology"
      ],
      "incoming_ontology": "CollateralMarginReportingOntology",
      "existing_source_files": [
        "knowledge/sources/loan-regulatory-reporting-osi.yaml",
        "knowledge/sources/deposit-regulatory-reporting-osi.yaml"
      ],
      "incoming_source_file": "knowledge/sources/collateral-regulatory-reporting-osi.yaml"
    }
  ]
};
