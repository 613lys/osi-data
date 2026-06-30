window.GRAPH_DATA = {
  "nodes": [
    {
      "id": "concept.CustomerData",
      "type": "base_entity_concept",
      "label": "CustomerData",
      "properties": {
        "description": "Base concept for customer-like records with common identifiers and segmentation fields.",
        "concept_type": "EntityType",
        "base_entity": true,
        "extends": [],
        "identify_by": [
          "has_CustomerIdentifier"
        ],
        "requires": [],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ],
        "definition_warnings": []
      }
    },
    {
      "id": "value.CustomerData.has_CustomerIdentifier",
      "type": "value_type_property",
      "label": "CustomerIdentifier",
      "properties": {
        "description": "Customer identifier common to customer-like records.",
        "parent": "concept.CustomerData",
        "data_type": "CustomerIdentifier",
        "value_concept": "CustomerIdentifier",
        "field_name": "has_CustomerIdentifier",
        "relationship_name": "has_CustomerIdentifier",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{CustomerData} has customer identifier {CustomerIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.CustomerData.has_CustomerSegment",
      "type": "value_type_property",
      "label": "CustomerSegment",
      "properties": {
        "description": "Customer segment common to customer-like records.",
        "parent": "concept.CustomerData",
        "data_type": "CustomerSegment",
        "value_concept": "CustomerSegment",
        "field_name": "has_CustomerSegment",
        "relationship_name": "has_CustomerSegment",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CustomerData} has customer segment {CustomerSegment}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "concept.LoanData",
      "type": "base_entity_concept",
      "label": "LoanData",
      "properties": {
        "description": "Base concept for loan-like records with common identifiers and origination timing.",
        "concept_type": "EntityType",
        "base_entity": true,
        "extends": [],
        "identify_by": [
          "has_LoanIdentifier"
        ],
        "requires": [],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ],
        "definition_warnings": []
      }
    },
    {
      "id": "value.LoanData.has_LoanIdentifier",
      "type": "value_type_property",
      "label": "LoanIdentifier",
      "properties": {
        "description": "Loan identifier common to loan-like records.",
        "parent": "concept.LoanData",
        "data_type": "LoanIdentifier",
        "value_concept": "LoanIdentifier",
        "field_name": "has_LoanIdentifier",
        "relationship_name": "has_LoanIdentifier",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{LoanData} has loan identifier {LoanIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.LoanData.has_OriginationDate",
      "type": "value_type_property",
      "label": "CalendarDate",
      "properties": {
        "description": "Origination or booking date common to loan-like records.",
        "parent": "concept.LoanData",
        "data_type": "CalendarDate",
        "value_concept": "CalendarDate",
        "field_name": "has_OriginationDate",
        "relationship_name": "has_OriginationDate",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{LoanData} has origination date {CalendarDate}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "concept.ProductData",
      "type": "base_entity_concept",
      "label": "ProductData",
      "properties": {
        "description": "Base concept for product-like records with common product identifiers.",
        "concept_type": "EntityType",
        "base_entity": true,
        "extends": [],
        "identify_by": [
          "has_ProductIdentifier"
        ],
        "requires": [],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ],
        "definition_warnings": []
      }
    },
    {
      "id": "value.ProductData.has_ProductIdentifier",
      "type": "value_type_property",
      "label": "ProductIdentifier",
      "properties": {
        "description": "Product identifier common to product-like records.",
        "parent": "concept.ProductData",
        "data_type": "ProductIdentifier",
        "value_concept": "ProductIdentifier",
        "field_name": "has_ProductIdentifier",
        "relationship_name": "has_ProductIdentifier",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{ProductData} has product identifier {ProductIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "concept.Borrower",
      "type": "entity_type_concept",
      "label": "Borrower",
      "properties": {
        "description": "Person or legal entity that is responsible for one or more loan exposures.",
        "concept_type": "EntityType",
        "base_entity": false,
        "extends": [
          "CustomerData"
        ],
        "identify_by": [
          "has_CustomerIdentifier"
        ],
        "requires": [],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ],
        "definition_warnings": []
      }
    },
    {
      "id": "value.Borrower.has_BorrowerName",
      "type": "value_type_property",
      "label": "PersonOrEntityName",
      "properties": {
        "description": "Display name of the borrower or legal entity.",
        "parent": "concept.Borrower",
        "data_type": "PersonOrEntityName",
        "value_concept": "PersonOrEntityName",
        "field_name": "has_BorrowerName",
        "relationship_name": "has_BorrowerName",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Borrower} has borrower name {PersonOrEntityName}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.Borrower.has_BorrowerCountry",
      "type": "value_type_property",
      "label": "CountryCode",
      "properties": {
        "description": "Country or jurisdiction associated with the borrower.",
        "parent": "concept.Borrower",
        "data_type": "CountryCode",
        "value_concept": "CountryCode",
        "field_name": "has_BorrowerCountry",
        "relationship_name": "has_BorrowerCountry",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Borrower} has borrower country {CountryCode}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "concept.Loan",
      "type": "entity_type_concept",
      "label": "Loan",
      "properties": {
        "description": "Credit exposure contract or facility that can be reported for regulatory credit risk monitoring.",
        "concept_type": "EntityType",
        "base_entity": false,
        "extends": [
          "LoanData"
        ],
        "identify_by": [
          "has_LoanIdentifier"
        ],
        "requires": [],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ],
        "definition_warnings": []
      }
    },
    {
      "id": "concept.LoanProduct",
      "type": "entity_type_concept",
      "label": "LoanProduct",
      "properties": {
        "description": "Lending product definition used to classify loan exposures for credit risk reporting.",
        "concept_type": "EntityType",
        "base_entity": false,
        "extends": [
          "ProductData"
        ],
        "identify_by": [
          "has_ProductIdentifier"
        ],
        "requires": [],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ],
        "definition_warnings": []
      }
    },
    {
      "id": "value.Loan.has_PrincipalAmount",
      "type": "value_type_property",
      "label": "MonetaryAmount",
      "properties": {
        "description": "Contractual principal or notional amount of the loan exposure.",
        "parent": "concept.Loan",
        "data_type": "MonetaryAmount",
        "value_concept": "MonetaryAmount",
        "field_name": "has_PrincipalAmount",
        "relationship_name": "has_PrincipalAmount",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Loan} has principal amount {MonetaryAmount}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.Loan.has_LoanCurrency",
      "type": "value_type_property",
      "label": "CurrencyCode",
      "properties": {
        "description": "Currency in which the loan exposure is booked or managed.",
        "parent": "concept.Loan",
        "data_type": "CurrencyCode",
        "value_concept": "CurrencyCode",
        "field_name": "has_LoanCurrency",
        "relationship_name": "has_LoanCurrency",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Loan} has loan currency {CurrencyCode}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.Loan.has_ExposureAtDefaultAmount",
      "type": "value_type_property",
      "label": "MonetaryAmount",
      "properties": {
        "description": "Exposure amount used for regulatory credit risk calculations.",
        "parent": "concept.Loan",
        "data_type": "MonetaryAmount",
        "value_concept": "MonetaryAmount",
        "field_name": "has_ExposureAtDefaultAmount",
        "relationship_name": "has_ExposureAtDefaultAmount",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Loan} has exposure at default amount {MonetaryAmount}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.Loan.has_ProbabilityOfDefault",
      "type": "value_type_property",
      "label": "Rate",
      "properties": {
        "description": "Probability of default assigned to the loan exposure.",
        "parent": "concept.Loan",
        "data_type": "Rate",
        "value_concept": "Rate",
        "field_name": "has_ProbabilityOfDefault",
        "relationship_name": "has_ProbabilityOfDefault",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Loan} has probability of default {Rate}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.Loan.has_LossGivenDefault",
      "type": "value_type_property",
      "label": "Rate",
      "properties": {
        "description": "Loss given default rate assigned to the loan exposure.",
        "parent": "concept.Loan",
        "data_type": "Rate",
        "value_concept": "Rate",
        "field_name": "has_LossGivenDefault",
        "relationship_name": "has_LossGivenDefault",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Loan} has loss given default {Rate}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.Loan.has_ExpectedLossAmount",
      "type": "value_type_property",
      "label": "MonetaryAmount",
      "properties": {
        "description": "Calculated expected loss amount for the loan exposure.",
        "parent": "concept.Loan",
        "data_type": "MonetaryAmount",
        "value_concept": "MonetaryAmount",
        "field_name": "has_ExpectedLossAmount",
        "relationship_name": "has_ExpectedLossAmount",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Loan} has expected loss amount {MonetaryAmount}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ],
        "calculation_type": "metric",
        "semantic_metric": "expected_loss_amount",
        "semantic_reference": "metric.expected_loss_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default",
        "source_fields": [
          "institutional_loans.loss_given_default",
          "institutional_loans.notional_amount",
          "institutional_loans.probability_default",
          "retail_loans.lgd",
          "retail_loans.pd",
          "retail_loans.principal_amount"
        ],
        "metric": {
          "name": "expected_loss_amount",
          "description": "Expected credit loss calculated from exposure at default, probability of default, and loss given default across loan source populations.",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default"
              }
            ]
          },
          "ai_context": {
            "metric_type": "calculated_credit_risk_measure"
          }
        }
      }
    },
    {
      "id": "value.Loan.has_RiskWeightedExposureAmount",
      "type": "value_type_property",
      "label": "MonetaryAmount",
      "properties": {
        "description": "Calculated exposure amount weighted by credit risk probability for portfolio risk monitoring.",
        "parent": "concept.Loan",
        "data_type": "MonetaryAmount",
        "value_concept": "MonetaryAmount",
        "field_name": "has_RiskWeightedExposureAmount",
        "relationship_name": "has_RiskWeightedExposureAmount",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Loan} has risk weighted exposure amount {MonetaryAmount}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ],
        "calculation_type": "metric",
        "semantic_metric": "risk_weighted_exposure_amount",
        "semantic_reference": "metric.risk_weighted_exposure_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd + institutional_loans.notional_amount * institutional_loans.probability_default",
        "source_fields": [
          "institutional_loans.notional_amount",
          "institutional_loans.probability_default",
          "retail_loans.pd",
          "retail_loans.principal_amount"
        ],
        "metric": {
          "name": "risk_weighted_exposure_amount",
          "description": "Risk-weighted exposure amount calculated by applying default probability to retail principal and institutional notional amounts.",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "retail_loans.principal_amount * retail_loans.pd + institutional_loans.notional_amount * institutional_loans.probability_default"
              }
            ]
          },
          "ai_context": {
            "metric_type": "calculated_credit_risk_measure"
          }
        }
      }
    },
    {
      "id": "value.LoanProduct.has_ProductType",
      "type": "value_type_property",
      "label": "ProductType",
      "properties": {
        "description": "Product type used to group lending exposures.",
        "parent": "concept.LoanProduct",
        "data_type": "ProductType",
        "value_concept": "ProductType",
        "field_name": "has_ProductType",
        "relationship_name": "has_ProductType",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{LoanProduct} has product type {ProductType}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.LoanProduct.has_RegulatoryProductClass",
      "type": "value_type_property",
      "label": "RegulatoryClass",
      "properties": {
        "description": "Regulatory classification applied to the loan product.",
        "parent": "concept.LoanProduct",
        "data_type": "RegulatoryClass",
        "value_concept": "RegulatoryClass",
        "field_name": "has_RegulatoryProductClass",
        "relationship_name": "has_RegulatoryProductClass",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{LoanProduct} has regulatory product class {RegulatoryClass}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.Borrower.has_CustomerIdentifier",
      "type": "value_type_property",
      "label": "CustomerIdentifier",
      "properties": {
        "description": "Customer identifier common to customer-like records.",
        "parent": "concept.Borrower",
        "data_type": "CustomerIdentifier",
        "value_concept": "CustomerIdentifier",
        "field_name": "has_CustomerIdentifier",
        "relationship_name": "has_CustomerIdentifier",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{CustomerData} has customer identifier {CustomerIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "inherited": true,
        "inherited_from": "CustomerData",
        "base_relationship_path": "CustomerData.has_CustomerIdentifier",
        "inheritance_note": "Inherited from CustomerData.",
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.Borrower.has_CustomerSegment",
      "type": "value_type_property",
      "label": "CustomerSegment",
      "properties": {
        "description": "Customer segment common to customer-like records.",
        "parent": "concept.Borrower",
        "data_type": "CustomerSegment",
        "value_concept": "CustomerSegment",
        "field_name": "has_CustomerSegment",
        "relationship_name": "has_CustomerSegment",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CustomerData} has customer segment {CustomerSegment}"
        ],
        "source_field": "ontology.extends.relationships",
        "inherited": true,
        "inherited_from": "CustomerData",
        "base_relationship_path": "CustomerData.has_CustomerSegment",
        "inheritance_note": "Inherited from CustomerData.",
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.Loan.has_LoanIdentifier",
      "type": "value_type_property",
      "label": "LoanIdentifier",
      "properties": {
        "description": "Loan identifier common to loan-like records.",
        "parent": "concept.Loan",
        "data_type": "LoanIdentifier",
        "value_concept": "LoanIdentifier",
        "field_name": "has_LoanIdentifier",
        "relationship_name": "has_LoanIdentifier",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{LoanData} has loan identifier {LoanIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "inherited": true,
        "inherited_from": "LoanData",
        "base_relationship_path": "LoanData.has_LoanIdentifier",
        "inheritance_note": "Inherited from LoanData.",
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.Loan.has_OriginationDate",
      "type": "value_type_property",
      "label": "CalendarDate",
      "properties": {
        "description": "Origination or booking date common to loan-like records.",
        "parent": "concept.Loan",
        "data_type": "CalendarDate",
        "value_concept": "CalendarDate",
        "field_name": "has_OriginationDate",
        "relationship_name": "has_OriginationDate",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{LoanData} has origination date {CalendarDate}"
        ],
        "source_field": "ontology.extends.relationships",
        "inherited": true,
        "inherited_from": "LoanData",
        "base_relationship_path": "LoanData.has_OriginationDate",
        "inheritance_note": "Inherited from LoanData.",
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.LoanProduct.has_ProductIdentifier",
      "type": "value_type_property",
      "label": "ProductIdentifier",
      "properties": {
        "description": "Product identifier common to product-like records.",
        "parent": "concept.LoanProduct",
        "data_type": "ProductIdentifier",
        "value_concept": "ProductIdentifier",
        "field_name": "has_ProductIdentifier",
        "relationship_name": "has_ProductIdentifier",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{ProductData} has product identifier {ProductIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "inherited": true,
        "inherited_from": "ProductData",
        "base_relationship_path": "ProductData.has_ProductIdentifier",
        "inheritance_note": "Inherited from ProductData.",
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "dataset.borrowers",
      "type": "semantic_dataset",
      "label": "borrowers",
      "properties": {
        "description": "Borrower master records at customer or legal entity grain, providing borrower names, segments, and domicile jurisdictions used by loan exposure reporting.",
        "source": "customer_master.borrowers",
        "primary_key": [
          "borrower_id"
        ],
        "field_count": 4,
        "physical_kind": "table",
        "source_tables": [
          "customer_master.borrowers"
        ],
        "custom_extensions": [],
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "table.customer_master.borrowers",
      "type": "physical_table",
      "label": "borrowers",
      "properties": {
        "description": "",
        "source": "customer_master.borrowers",
        "source_dataset": "loan_exposure_report_lines",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology"
      }
    },
    {
      "id": "field.borrowers.borrower_id",
      "type": "dataset_field",
      "label": "borrower_id",
      "properties": {
        "description": "Master customer identifier for a borrower or legal entity.",
        "parent": "dataset.borrowers",
        "data_type": "string",
        "nullable": false,
        "expression": "borrower_id",
        "dataset": "borrowers",
        "field": "borrower_id",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "column.customer_master.borrowers.borrower_id",
      "type": "column",
      "label": "borrower_id",
      "properties": {
        "description": "Master customer identifier for a borrower or legal entity.",
        "parent": "table.customer_master.borrowers",
        "data_type": "string",
        "nullable": false,
        "expression": "borrower_id",
        "physical_field": "customer_master.borrowers.borrower_id",
        "dataset_field": "borrowers.borrower_id"
      }
    },
    {
      "id": "field.borrowers.borrower_segment",
      "type": "dataset_field",
      "label": "borrower_segment",
      "properties": {
        "description": "Segment classification such as retail, SME, corporate, or financial institution.",
        "parent": "dataset.borrowers",
        "data_type": "string",
        "nullable": false,
        "expression": "borrower_segment",
        "dataset": "borrowers",
        "field": "borrower_segment",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "column.customer_master.borrowers.borrower_segment",
      "type": "column",
      "label": "borrower_segment",
      "properties": {
        "description": "Segment classification such as retail, SME, corporate, or financial institution.",
        "parent": "table.customer_master.borrowers",
        "data_type": "string",
        "nullable": false,
        "expression": "borrower_segment",
        "physical_field": "customer_master.borrowers.borrower_segment",
        "dataset_field": "borrowers.borrower_segment"
      }
    },
    {
      "id": "field.borrowers.borrower_name",
      "type": "dataset_field",
      "label": "borrower_name",
      "properties": {
        "description": "Human-readable borrower or legal entity name.",
        "parent": "dataset.borrowers",
        "data_type": "string",
        "nullable": false,
        "expression": "borrower_name",
        "dataset": "borrowers",
        "field": "borrower_name",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "column.customer_master.borrowers.borrower_name",
      "type": "column",
      "label": "borrower_name",
      "properties": {
        "description": "Human-readable borrower or legal entity name.",
        "parent": "table.customer_master.borrowers",
        "data_type": "string",
        "nullable": false,
        "expression": "borrower_name",
        "physical_field": "customer_master.borrowers.borrower_name",
        "dataset_field": "borrowers.borrower_name"
      }
    },
    {
      "id": "field.borrowers.domicile_country",
      "type": "dataset_field",
      "label": "domicile_country",
      "properties": {
        "description": "Borrower domicile country used for jurisdictional reporting and composite report joins.",
        "parent": "dataset.borrowers",
        "data_type": "string",
        "nullable": false,
        "expression": "domicile_country",
        "dataset": "borrowers",
        "field": "domicile_country",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "column.customer_master.borrowers.domicile_country",
      "type": "column",
      "label": "domicile_country",
      "properties": {
        "description": "Borrower domicile country used for jurisdictional reporting and composite report joins.",
        "parent": "table.customer_master.borrowers",
        "data_type": "string",
        "nullable": false,
        "expression": "domicile_country",
        "physical_field": "customer_master.borrowers.domicile_country",
        "dataset_field": "borrowers.domicile_country"
      }
    },
    {
      "id": "dataset.institutional_loans",
      "type": "semantic_dataset",
      "label": "institutional_loans",
      "properties": {
        "description": "Institutional credit facility records at legal entity facility grain, carrying borrower, product, booking, notional, currency, and credit risk parameter fields for wholesale exposure reporting.",
        "source": "institutional_lending_core.facilities",
        "primary_key": [
          "facility_id"
        ],
        "field_count": 8,
        "physical_kind": "table",
        "source_tables": [
          "institutional_lending_core.facilities"
        ],
        "custom_extensions": [],
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "table.institutional_lending_core.facilities",
      "type": "physical_table",
      "label": "facilities",
      "properties": {
        "description": "",
        "source": "institutional_lending_core.facilities",
        "source_dataset": "loan_exposure_report_lines",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology"
      }
    },
    {
      "id": "field.institutional_loans.facility_id",
      "type": "dataset_field",
      "label": "facility_id",
      "properties": {
        "description": "Institutional source identifier for a committed credit facility.",
        "parent": "dataset.institutional_loans",
        "data_type": "string",
        "nullable": false,
        "expression": "facility_id",
        "dataset": "institutional_loans",
        "field": "facility_id",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "column.institutional_lending_core.facilities.facility_id",
      "type": "column",
      "label": "facility_id",
      "properties": {
        "description": "Institutional source identifier for a committed credit facility.",
        "parent": "table.institutional_lending_core.facilities",
        "data_type": "string",
        "nullable": false,
        "expression": "facility_id",
        "physical_field": "institutional_lending_core.facilities.facility_id",
        "dataset_field": "institutional_loans.facility_id"
      }
    },
    {
      "id": "field.institutional_loans.legal_entity_id",
      "type": "dataset_field",
      "label": "legal_entity_id",
      "properties": {
        "description": "Customer identifier linking the facility to the responsible legal borrower.",
        "parent": "dataset.institutional_loans",
        "data_type": "string",
        "nullable": false,
        "expression": "legal_entity_id",
        "dataset": "institutional_loans",
        "field": "legal_entity_id",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "column.institutional_lending_core.facilities.legal_entity_id",
      "type": "column",
      "label": "legal_entity_id",
      "properties": {
        "description": "Customer identifier linking the facility to the responsible legal borrower.",
        "parent": "table.institutional_lending_core.facilities",
        "data_type": "string",
        "nullable": false,
        "expression": "legal_entity_id",
        "physical_field": "institutional_lending_core.facilities.legal_entity_id",
        "dataset_field": "institutional_loans.legal_entity_id"
      }
    },
    {
      "id": "field.institutional_loans.product_code",
      "type": "dataset_field",
      "label": "product_code",
      "properties": {
        "description": "Product identifier classifying the institutional lending facility.",
        "parent": "dataset.institutional_loans",
        "data_type": "string",
        "nullable": false,
        "expression": "product_code",
        "dataset": "institutional_loans",
        "field": "product_code",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "column.institutional_lending_core.facilities.product_code",
      "type": "column",
      "label": "product_code",
      "properties": {
        "description": "Product identifier classifying the institutional lending facility.",
        "parent": "table.institutional_lending_core.facilities",
        "data_type": "string",
        "nullable": false,
        "expression": "product_code",
        "physical_field": "institutional_lending_core.facilities.product_code",
        "dataset_field": "institutional_loans.product_code"
      }
    },
    {
      "id": "field.institutional_loans.booking_date",
      "type": "dataset_field",
      "label": "booking_date",
      "properties": {
        "description": "Date on which the institutional facility was booked.",
        "parent": "dataset.institutional_loans",
        "data_type": "date",
        "nullable": false,
        "expression": "booking_date",
        "dataset": "institutional_loans",
        "field": "booking_date",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "column.institutional_lending_core.facilities.booking_date",
      "type": "column",
      "label": "booking_date",
      "properties": {
        "description": "Date on which the institutional facility was booked.",
        "parent": "table.institutional_lending_core.facilities",
        "data_type": "date",
        "nullable": false,
        "expression": "booking_date",
        "physical_field": "institutional_lending_core.facilities.booking_date",
        "dataset_field": "institutional_loans.booking_date"
      }
    },
    {
      "id": "field.institutional_loans.notional_amount",
      "type": "dataset_field",
      "label": "notional_amount",
      "properties": {
        "description": "Notional or committed amount recorded for the institutional facility.",
        "parent": "dataset.institutional_loans",
        "data_type": "decimal",
        "nullable": false,
        "expression": "notional_amount",
        "dataset": "institutional_loans",
        "field": "notional_amount",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "column.institutional_lending_core.facilities.notional_amount",
      "type": "column",
      "label": "notional_amount",
      "properties": {
        "description": "Notional or committed amount recorded for the institutional facility.",
        "parent": "table.institutional_lending_core.facilities",
        "data_type": "decimal",
        "nullable": false,
        "expression": "notional_amount",
        "physical_field": "institutional_lending_core.facilities.notional_amount",
        "dataset_field": "institutional_loans.notional_amount"
      }
    },
    {
      "id": "field.institutional_loans.exposure_currency",
      "type": "dataset_field",
      "label": "exposure_currency",
      "properties": {
        "description": "Currency code used for the institutional exposure amount.",
        "parent": "dataset.institutional_loans",
        "data_type": "string",
        "nullable": false,
        "expression": "exposure_currency",
        "dataset": "institutional_loans",
        "field": "exposure_currency",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "column.institutional_lending_core.facilities.exposure_currency",
      "type": "column",
      "label": "exposure_currency",
      "properties": {
        "description": "Currency code used for the institutional exposure amount.",
        "parent": "table.institutional_lending_core.facilities",
        "data_type": "string",
        "nullable": false,
        "expression": "exposure_currency",
        "physical_field": "institutional_lending_core.facilities.exposure_currency",
        "dataset_field": "institutional_loans.exposure_currency"
      }
    },
    {
      "id": "field.institutional_loans.probability_default",
      "type": "dataset_field",
      "label": "probability_default",
      "properties": {
        "description": "Probability of default assigned by the wholesale credit risk model.",
        "parent": "dataset.institutional_loans",
        "data_type": "decimal",
        "nullable": false,
        "expression": "probability_default",
        "dataset": "institutional_loans",
        "field": "probability_default",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "column.institutional_lending_core.facilities.probability_default",
      "type": "column",
      "label": "probability_default",
      "properties": {
        "description": "Probability of default assigned by the wholesale credit risk model.",
        "parent": "table.institutional_lending_core.facilities",
        "data_type": "decimal",
        "nullable": false,
        "expression": "probability_default",
        "physical_field": "institutional_lending_core.facilities.probability_default",
        "dataset_field": "institutional_loans.probability_default"
      }
    },
    {
      "id": "field.institutional_loans.loss_given_default",
      "type": "dataset_field",
      "label": "loss_given_default",
      "properties": {
        "description": "Loss given default rate assigned by the wholesale credit risk model.",
        "parent": "dataset.institutional_loans",
        "data_type": "decimal",
        "nullable": false,
        "expression": "loss_given_default",
        "dataset": "institutional_loans",
        "field": "loss_given_default",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "column.institutional_lending_core.facilities.loss_given_default",
      "type": "column",
      "label": "loss_given_default",
      "properties": {
        "description": "Loss given default rate assigned by the wholesale credit risk model.",
        "parent": "table.institutional_lending_core.facilities",
        "data_type": "decimal",
        "nullable": false,
        "expression": "loss_given_default",
        "physical_field": "institutional_lending_core.facilities.loss_given_default",
        "dataset_field": "institutional_loans.loss_given_default"
      }
    },
    {
      "id": "dataset.loan_exposure_report_lines",
      "type": "semantic_dataset",
      "label": "loan_exposure_report_lines",
      "properties": {
        "description": "Prepared loan exposure report line records at reportable loan grain, carrying normalized borrower, product, amount, currency, and expected loss fields consumed by regulatory reporting logic.",
        "source": "query.loan_exposure_report_lines",
        "primary_key": [
          "loan_id"
        ],
        "field_count": 8,
        "physical_kind": "query",
        "source_tables": [
          "retail_lending_core.retail_loans",
          "institutional_lending_core.facilities",
          "customer_master.borrowers",
          "product_master.loan_products"
        ],
        "custom_extensions": [
          {
            "vendor_name": "OSI_KG_UI",
            "data": "{\"name\": \"physical_source\", \"kind\": \"query\", \"description\": \"Prepared report-line dataset is produced by a documented query that normalizes retail loan and institutional facility source populations before reporting.\", \"sql\": \"select loan_id, borrower_id, borrower_country, product_id, principal_amount, exposure_at_default_amount, expected_loss_amount, report_currency\\nfrom credit_risk_engine.loan_exposure_report_lines\\nwhere report_date = :report_date\\n\", \"depends_on\": [\"retail_lending_core.retail_loans\", \"institutional_lending_core.facilities\", \"customer_master.borrowers\", \"product_master.loan_products\"]}"
          }
        ],
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "table.retail_lending_core.retail_loans",
      "type": "physical_table",
      "label": "retail_loans",
      "properties": {
        "description": "",
        "source": "retail_lending_core.retail_loans",
        "source_dataset": "retail_loans",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology"
      }
    },
    {
      "id": "table.product_master.loan_products",
      "type": "physical_table",
      "label": "loan_products",
      "properties": {
        "description": "",
        "source": "product_master.loan_products",
        "source_dataset": "loan_products",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology"
      }
    },
    {
      "id": "field.loan_exposure_report_lines.loan_id",
      "type": "dataset_field",
      "label": "loan_id",
      "properties": {
        "description": "Normalized loan or facility identifier reported on the exposure line.",
        "parent": "dataset.loan_exposure_report_lines",
        "data_type": "string",
        "nullable": false,
        "expression": "COALESCE(retail_loans.loan_id, institutional_loans.facility_id)",
        "dataset": "loan_exposure_report_lines",
        "field": "loan_id",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "field.loan_exposure_report_lines.borrower_id",
      "type": "dataset_field",
      "label": "borrower_id",
      "properties": {
        "description": "Borrower identifier reported on the exposure line for reconciliation to customer master.",
        "parent": "dataset.loan_exposure_report_lines",
        "data_type": "string",
        "nullable": false,
        "expression": "COALESCE(retail_loans.borrower_id, institutional_loans.legal_entity_id)",
        "dataset": "loan_exposure_report_lines",
        "field": "borrower_id",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "field.loan_exposure_report_lines.borrower_country",
      "type": "dataset_field",
      "label": "borrower_country",
      "properties": {
        "description": "Borrower country carried on the report line to support jurisdictional aggregation and composite joins.",
        "parent": "dataset.loan_exposure_report_lines",
        "data_type": "string",
        "nullable": false,
        "expression": "borrowers.domicile_country",
        "dataset": "loan_exposure_report_lines",
        "field": "borrower_country",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "field.loan_exposure_report_lines.product_id",
      "type": "dataset_field",
      "label": "product_id",
      "properties": {
        "description": "Product identifier reported on the exposure line for product-class aggregation.",
        "parent": "dataset.loan_exposure_report_lines",
        "data_type": "string",
        "nullable": false,
        "expression": "COALESCE(retail_loans.product_id, institutional_loans.product_code)",
        "dataset": "loan_exposure_report_lines",
        "field": "product_id",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "field.loan_exposure_report_lines.principal_amount",
      "type": "dataset_field",
      "label": "principal_amount",
      "properties": {
        "description": "Principal amount included on the report line for exposure reconciliation.",
        "parent": "dataset.loan_exposure_report_lines",
        "data_type": "decimal",
        "nullable": false,
        "expression": "COALESCE(retail_loans.principal_amount, institutional_loans.notional_amount)",
        "dataset": "loan_exposure_report_lines",
        "field": "principal_amount",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "field.loan_exposure_report_lines.exposure_at_default_amount",
      "type": "dataset_field",
      "label": "exposure_at_default_amount",
      "properties": {
        "description": "Exposure at default amount reported for regulatory credit risk measurement.",
        "parent": "dataset.loan_exposure_report_lines",
        "data_type": "decimal",
        "nullable": false,
        "expression": "COALESCE(retail_loans.principal_amount, institutional_loans.notional_amount)",
        "dataset": "loan_exposure_report_lines",
        "field": "exposure_at_default_amount",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "field.loan_exposure_report_lines.expected_loss_amount",
      "type": "dataset_field",
      "label": "expected_loss_amount",
      "properties": {
        "description": "Expected loss amount reported after applying probability of default and loss given default.",
        "parent": "dataset.loan_exposure_report_lines",
        "data_type": "decimal",
        "nullable": false,
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default",
        "dataset": "loan_exposure_report_lines",
        "field": "expected_loss_amount",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "field.loan_exposure_report_lines.report_currency",
      "type": "dataset_field",
      "label": "report_currency",
      "properties": {
        "description": "Currency code in which the exposure line amounts are reported.",
        "parent": "dataset.loan_exposure_report_lines",
        "data_type": "string",
        "nullable": false,
        "expression": "COALESCE(retail_loans.currency, institutional_loans.exposure_currency)",
        "dataset": "loan_exposure_report_lines",
        "field": "report_currency",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "dataset.loan_products",
      "type": "semantic_dataset",
      "label": "loan_products",
      "properties": {
        "description": "Loan product reference records at product definition grain, carrying product type and regulatory product class used to classify loan exposures.",
        "source": "product_master.loan_products",
        "primary_key": [
          "product_id"
        ],
        "field_count": 3,
        "physical_kind": "table",
        "source_tables": [
          "product_master.loan_products"
        ],
        "custom_extensions": [],
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "field.loan_products.product_id",
      "type": "dataset_field",
      "label": "product_id",
      "properties": {
        "description": "Master product identifier for a lending product.",
        "parent": "dataset.loan_products",
        "data_type": "string",
        "nullable": false,
        "expression": "product_id",
        "dataset": "loan_products",
        "field": "product_id",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "column.product_master.loan_products.product_id",
      "type": "column",
      "label": "product_id",
      "properties": {
        "description": "Master product identifier for a lending product.",
        "parent": "table.product_master.loan_products",
        "data_type": "string",
        "nullable": false,
        "expression": "product_id",
        "physical_field": "product_master.loan_products.product_id",
        "dataset_field": "loan_products.product_id"
      }
    },
    {
      "id": "field.loan_products.product_type",
      "type": "dataset_field",
      "label": "product_type",
      "properties": {
        "description": "Lending product type such as mortgage, term loan, revolving credit, or credit line.",
        "parent": "dataset.loan_products",
        "data_type": "string",
        "nullable": false,
        "expression": "product_type",
        "dataset": "loan_products",
        "field": "product_type",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "column.product_master.loan_products.product_type",
      "type": "column",
      "label": "product_type",
      "properties": {
        "description": "Lending product type such as mortgage, term loan, revolving credit, or credit line.",
        "parent": "table.product_master.loan_products",
        "data_type": "string",
        "nullable": false,
        "expression": "product_type",
        "physical_field": "product_master.loan_products.product_type",
        "dataset_field": "loan_products.product_type"
      }
    },
    {
      "id": "field.loan_products.regulatory_product_class",
      "type": "dataset_field",
      "label": "regulatory_product_class",
      "properties": {
        "description": "Regulatory product class used for credit exposure aggregation.",
        "parent": "dataset.loan_products",
        "data_type": "string",
        "nullable": false,
        "expression": "regulatory_product_class",
        "dataset": "loan_products",
        "field": "regulatory_product_class",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "column.product_master.loan_products.regulatory_product_class",
      "type": "column",
      "label": "regulatory_product_class",
      "properties": {
        "description": "Regulatory product class used for credit exposure aggregation.",
        "parent": "table.product_master.loan_products",
        "data_type": "string",
        "nullable": false,
        "expression": "regulatory_product_class",
        "physical_field": "product_master.loan_products.regulatory_product_class",
        "dataset_field": "loan_products.regulatory_product_class"
      }
    },
    {
      "id": "dataset.retail_loans",
      "type": "semantic_dataset",
      "label": "retail_loans",
      "properties": {
        "description": "Retail loan records at individual consumer loan grain, carrying borrower, product, booking, amount, currency, and credit risk parameter fields for retail exposure reporting.",
        "source": "retail_lending_core.retail_loans",
        "primary_key": [
          "loan_id"
        ],
        "field_count": 8,
        "physical_kind": "table",
        "source_tables": [
          "retail_lending_core.retail_loans"
        ],
        "custom_extensions": [],
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "field.retail_loans.loan_id",
      "type": "dataset_field",
      "label": "loan_id",
      "properties": {
        "description": "Retail source identifier for an individual consumer loan record.",
        "parent": "dataset.retail_loans",
        "data_type": "string",
        "nullable": false,
        "expression": "loan_id",
        "dataset": "retail_loans",
        "field": "loan_id",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "column.retail_lending_core.retail_loans.loan_id",
      "type": "column",
      "label": "loan_id",
      "properties": {
        "description": "Retail source identifier for an individual consumer loan record.",
        "parent": "table.retail_lending_core.retail_loans",
        "data_type": "string",
        "nullable": false,
        "expression": "loan_id",
        "physical_field": "retail_lending_core.retail_loans.loan_id",
        "dataset_field": "retail_loans.loan_id"
      }
    },
    {
      "id": "field.retail_loans.borrower_id",
      "type": "dataset_field",
      "label": "borrower_id",
      "properties": {
        "description": "Customer identifier linking the retail loan to the responsible borrower.",
        "parent": "dataset.retail_loans",
        "data_type": "string",
        "nullable": false,
        "expression": "borrower_id",
        "dataset": "retail_loans",
        "field": "borrower_id",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "column.retail_lending_core.retail_loans.borrower_id",
      "type": "column",
      "label": "borrower_id",
      "properties": {
        "description": "Customer identifier linking the retail loan to the responsible borrower.",
        "parent": "table.retail_lending_core.retail_loans",
        "data_type": "string",
        "nullable": false,
        "expression": "borrower_id",
        "physical_field": "retail_lending_core.retail_loans.borrower_id",
        "dataset_field": "retail_loans.borrower_id"
      }
    },
    {
      "id": "field.retail_loans.product_id",
      "type": "dataset_field",
      "label": "product_id",
      "properties": {
        "description": "Product identifier classifying the retail lending product.",
        "parent": "dataset.retail_loans",
        "data_type": "string",
        "nullable": false,
        "expression": "product_id",
        "dataset": "retail_loans",
        "field": "product_id",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "column.retail_lending_core.retail_loans.product_id",
      "type": "column",
      "label": "product_id",
      "properties": {
        "description": "Product identifier classifying the retail lending product.",
        "parent": "table.retail_lending_core.retail_loans",
        "data_type": "string",
        "nullable": false,
        "expression": "product_id",
        "physical_field": "retail_lending_core.retail_loans.product_id",
        "dataset_field": "retail_loans.product_id"
      }
    },
    {
      "id": "field.retail_loans.origination_date",
      "type": "dataset_field",
      "label": "origination_date",
      "properties": {
        "description": "Date on which the retail loan was originated or booked.",
        "parent": "dataset.retail_loans",
        "data_type": "date",
        "nullable": false,
        "expression": "origination_date",
        "dataset": "retail_loans",
        "field": "origination_date",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "column.retail_lending_core.retail_loans.origination_date",
      "type": "column",
      "label": "origination_date",
      "properties": {
        "description": "Date on which the retail loan was originated or booked.",
        "parent": "table.retail_lending_core.retail_loans",
        "data_type": "date",
        "nullable": false,
        "expression": "origination_date",
        "physical_field": "retail_lending_core.retail_loans.origination_date",
        "dataset_field": "retail_loans.origination_date"
      }
    },
    {
      "id": "field.retail_loans.principal_amount",
      "type": "dataset_field",
      "label": "principal_amount",
      "properties": {
        "description": "Principal balance or contractual amount recorded for the retail loan.",
        "parent": "dataset.retail_loans",
        "data_type": "decimal",
        "nullable": false,
        "expression": "principal_amount",
        "dataset": "retail_loans",
        "field": "principal_amount",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "column.retail_lending_core.retail_loans.principal_amount",
      "type": "column",
      "label": "principal_amount",
      "properties": {
        "description": "Principal balance or contractual amount recorded for the retail loan.",
        "parent": "table.retail_lending_core.retail_loans",
        "data_type": "decimal",
        "nullable": false,
        "expression": "principal_amount",
        "physical_field": "retail_lending_core.retail_loans.principal_amount",
        "dataset_field": "retail_loans.principal_amount"
      }
    },
    {
      "id": "field.retail_loans.currency",
      "type": "dataset_field",
      "label": "currency",
      "properties": {
        "description": "Currency code used for the retail loan amount.",
        "parent": "dataset.retail_loans",
        "data_type": "string",
        "nullable": false,
        "expression": "currency",
        "dataset": "retail_loans",
        "field": "currency",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "column.retail_lending_core.retail_loans.currency",
      "type": "column",
      "label": "currency",
      "properties": {
        "description": "Currency code used for the retail loan amount.",
        "parent": "table.retail_lending_core.retail_loans",
        "data_type": "string",
        "nullable": false,
        "expression": "currency",
        "physical_field": "retail_lending_core.retail_loans.currency",
        "dataset_field": "retail_loans.currency"
      }
    },
    {
      "id": "field.retail_loans.pd",
      "type": "dataset_field",
      "label": "pd",
      "properties": {
        "description": "Probability of default assigned by the retail credit risk model.",
        "parent": "dataset.retail_loans",
        "data_type": "decimal",
        "nullable": false,
        "expression": "pd",
        "dataset": "retail_loans",
        "field": "pd",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "column.retail_lending_core.retail_loans.pd",
      "type": "column",
      "label": "pd",
      "properties": {
        "description": "Probability of default assigned by the retail credit risk model.",
        "parent": "table.retail_lending_core.retail_loans",
        "data_type": "decimal",
        "nullable": false,
        "expression": "pd",
        "physical_field": "retail_lending_core.retail_loans.pd",
        "dataset_field": "retail_loans.pd"
      }
    },
    {
      "id": "field.retail_loans.lgd",
      "type": "dataset_field",
      "label": "lgd",
      "properties": {
        "description": "Loss given default rate assigned by the retail credit risk model.",
        "parent": "dataset.retail_loans",
        "data_type": "decimal",
        "nullable": false,
        "expression": "lgd",
        "dataset": "retail_loans",
        "field": "lgd",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ]
      }
    },
    {
      "id": "column.retail_lending_core.retail_loans.lgd",
      "type": "column",
      "label": "lgd",
      "properties": {
        "description": "Loss given default rate assigned by the retail credit risk model.",
        "parent": "table.retail_lending_core.retail_loans",
        "data_type": "decimal",
        "nullable": false,
        "expression": "lgd",
        "physical_field": "retail_lending_core.retail_loans.lgd",
        "dataset_field": "retail_loans.lgd"
      }
    },
    {
      "id": "metric.expected_loss_amount",
      "type": "semantic_metric",
      "label": "expected_loss_amount",
      "properties": {
        "description": "Expected credit loss calculated from exposure at default, probability of default, and loss given default across loan source populations.",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "semantic_metric": "expected_loss_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default",
        "source_fields": [
          "institutional_loans.loss_given_default",
          "institutional_loans.notional_amount",
          "institutional_loans.probability_default",
          "retail_loans.lgd",
          "retail_loans.pd",
          "retail_loans.principal_amount"
        ],
        "metric": {
          "name": "expected_loss_amount",
          "description": "Expected credit loss calculated from exposure at default, probability of default, and loss given default across loan source populations.",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default"
              }
            ]
          },
          "ai_context": {
            "metric_type": "calculated_credit_risk_measure"
          }
        }
      }
    },
    {
      "id": "metric.risk_weighted_exposure_amount",
      "type": "semantic_metric",
      "label": "risk_weighted_exposure_amount",
      "properties": {
        "description": "Risk-weighted exposure amount calculated by applying default probability to retail principal and institutional notional amounts.",
        "semantic_model": "LoanExposureSemanticModel",
        "semantic_models": [
          "LoanExposureSemanticModel"
        ],
        "ontology": "LoanExposureReportingOntology",
        "semantic_metric": "risk_weighted_exposure_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd + institutional_loans.notional_amount * institutional_loans.probability_default",
        "source_fields": [
          "institutional_loans.notional_amount",
          "institutional_loans.probability_default",
          "retail_loans.pd",
          "retail_loans.principal_amount"
        ],
        "metric": {
          "name": "risk_weighted_exposure_amount",
          "description": "Risk-weighted exposure amount calculated by applying default probability to retail principal and institutional notional amounts.",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "retail_loans.principal_amount * retail_loans.pd + institutional_loans.notional_amount * institutional_loans.probability_default"
              }
            ]
          },
          "ai_context": {
            "metric_type": "calculated_credit_risk_measure"
          }
        }
      }
    },
    {
      "id": "requirement.item",
      "type": "regulatory_requirement",
      "label": "贷款风险暴露报送需求",
      "properties": {
        "description": "监管/BRD要求按日生成贷款风险暴露报送数据，用于说明每笔零售或机构贷款在报告日的借款人、产品、本金、风险暴露和预期损失口径。需求还要求在日终前完成数据生成、业务复核、异常说明和报送留痕；这些非数据类要求保留在说明中，不强行建模为字段。",
        "source": "Loan Credit Exposure Reporting BRD v1.0 section 5.2",
        "SLA": "Daily EOD before 22:00 local time; credit risk review completed before regulatory submission."
      }
    },
    {
      "id": "requirement_item..Loan.has_LoanIdentifier",
      "type": "requirement_semantic_item",
      "label": "贷款标识",
      "properties": {
        "parent": "requirement.item",
        "description": "需求需要贷款标识，用于唯一识别每条报送贷款或授信并支持行级对账。",
        "data_type": "LoanIdentifier",
        "semantic_reference": "Loan.has_LoanIdentifier",
        "value_concept": "LoanIdentifier",
        "source_concept": "Loan",
        "relationship": "has_LoanIdentifier",
        "required": true,
        "rule": null
      }
    },
    {
      "id": "requirement_item..Borrower.has_CustomerIdentifier",
      "type": "requirement_semantic_item",
      "label": "借款人标识",
      "properties": {
        "parent": "requirement.item",
        "description": "需求需要借款人标识，用于将贷款暴露归属到承担还款责任的客户或法律实体。",
        "data_type": "CustomerIdentifier",
        "semantic_reference": "Borrower.has_CustomerIdentifier",
        "value_concept": "CustomerIdentifier",
        "source_concept": "Borrower",
        "relationship": "has_CustomerIdentifier",
        "required": true,
        "rule": null
      }
    },
    {
      "id": "requirement_item..LoanProduct.has_ProductIdentifier",
      "type": "requirement_semantic_item",
      "label": "产品标识",
      "properties": {
        "parent": "requirement.item",
        "description": "需求需要产品标识，用于按照监管产品类别汇总贷款风险暴露。",
        "data_type": "ProductIdentifier",
        "semantic_reference": "LoanProduct.has_ProductIdentifier",
        "value_concept": "ProductIdentifier",
        "source_concept": "LoanProduct",
        "relationship": "has_ProductIdentifier",
        "required": true,
        "rule": null
      }
    },
    {
      "id": "requirement_item..Loan.has_PrincipalAmount",
      "type": "requirement_semantic_item",
      "label": "本金金额",
      "properties": {
        "parent": "requirement.item",
        "description": "需求需要本金金额，用于作为贷款风险暴露和预期损失计算的基础金额。",
        "data_type": "MonetaryAmount",
        "semantic_reference": "Loan.has_PrincipalAmount",
        "value_concept": "MonetaryAmount",
        "source_concept": "Loan",
        "relationship": "has_PrincipalAmount",
        "required": true,
        "rule": null
      }
    },
    {
      "id": "requirement_item..Loan.has_ExposureAtDefaultAmount",
      "type": "requirement_semantic_item",
      "label": "风险暴露金额",
      "properties": {
        "parent": "requirement.item",
        "description": "需求需要风险暴露金额，用于展示监管口径下违约时风险暴露规模。",
        "data_type": "MonetaryAmount",
        "semantic_reference": "Loan.has_ExposureAtDefaultAmount",
        "value_concept": "MonetaryAmount",
        "source_concept": "Loan",
        "relationship": "has_ExposureAtDefaultAmount",
        "required": true,
        "rule": null
      }
    },
    {
      "id": "requirement_item..Loan.has_ExpectedLossAmount",
      "type": "requirement_semantic_item",
      "label": "预期损失金额",
      "properties": {
        "parent": "requirement.item",
        "description": "需求需要预期损失金额，用于按风险暴露金额、违约概率和违约损失率计算监管信用风险损失。",
        "data_type": "calculation",
        "semantic_reference": "Loan.has_ExpectedLossAmount",
        "expression": "Loan.has_ExposureAtDefaultAmount * Loan.has_ProbabilityOfDefault * Loan.has_LossGivenDefault",
        "inputs": [
          "Loan.has_ExposureAtDefaultAmount",
          "Loan.has_ProbabilityOfDefault",
          "Loan.has_LossGivenDefault"
        ]
      }
    },
    {
      "id": "report_impl.item",
      "type": "report_implementation",
      "label": "每日贷款风险暴露报表数据逻辑",
      "properties": {
        "description": "说明每日贷款风险暴露报表字段如何从零售贷款、机构授信、借款人主数据、产品主数据和已准备的报表明细数据中取数、归一化并满足监管需求口径；该逻辑不创建或拥有物理表。",
        "implements": "贷款风险暴露报送需求"
      }
    },
    {
      "id": "implementation_field.loan_exposure_report_lines.loan_id",
      "type": "implementation_field_binding",
      "label": "贷款标识逻辑",
      "properties": {
        "parent": "report_impl.item",
        "description": "数据逻辑说明报表明细字段 loan_id 如何承载贷款标识需求，并兼容零售贷款号和机构授信号来源。",
        "data_type": "logic field",
        "binding_role": "logic field",
        "dataset": "loan_exposure_report_lines",
        "field": "贷款标识逻辑",
        "dataset_field": "loan_exposure_report_lines.loan_id",
        "requirement_field": "贷款标识",
        "source_field": "loan_exposure_report_lines.loan_id",
        "expression": "COALESCE(retail_loans.loan_id, institutional_loans.facility_id, loan_exposure_report_lines.loan_id)",
        "expression_fields": [
          "institutional_loans.facility_id",
          "loan_exposure_report_lines.loan_id",
          "retail_loans.loan_id"
        ]
      }
    },
    {
      "id": "implementation_field.loan_exposure_report_lines.borrower_id",
      "type": "implementation_field_binding",
      "label": "借款人标识逻辑",
      "properties": {
        "parent": "report_impl.item",
        "description": "数据逻辑说明报表明细字段 borrower_id 如何承载借款人标识需求，并对齐客户主数据中的借款人记录。",
        "data_type": "logic field",
        "binding_role": "logic field",
        "dataset": "loan_exposure_report_lines",
        "field": "借款人标识逻辑",
        "dataset_field": "loan_exposure_report_lines.borrower_id",
        "requirement_field": "借款人标识",
        "source_field": "loan_exposure_report_lines.borrower_id",
        "expression": "COALESCE(retail_loans.borrower_id, institutional_loans.legal_entity_id, loan_exposure_report_lines.borrower_id)",
        "expression_fields": [
          "institutional_loans.legal_entity_id",
          "loan_exposure_report_lines.borrower_id",
          "retail_loans.borrower_id"
        ]
      }
    },
    {
      "id": "implementation_field.loan_exposure_report_lines.product_id",
      "type": "implementation_field_binding",
      "label": "产品标识逻辑",
      "properties": {
        "parent": "report_impl.item",
        "description": "数据逻辑说明报表明细字段 product_id 如何承载产品标识需求，并支持与产品主数据的监管分类对齐。",
        "data_type": "logic field",
        "binding_role": "logic field",
        "dataset": "loan_exposure_report_lines",
        "field": "产品标识逻辑",
        "dataset_field": "loan_exposure_report_lines.product_id",
        "requirement_field": "产品标识",
        "source_field": "loan_exposure_report_lines.product_id",
        "expression": "COALESCE(retail_loans.product_id, institutional_loans.product_code, loan_exposure_report_lines.product_id)",
        "expression_fields": [
          "institutional_loans.product_code",
          "loan_exposure_report_lines.product_id",
          "retail_loans.product_id"
        ]
      }
    },
    {
      "id": "implementation_field.loan_exposure_report_lines.principal_amount",
      "type": "implementation_field_binding",
      "label": "本金金额逻辑",
      "properties": {
        "parent": "report_impl.item",
        "description": "数据逻辑说明报表明细字段 principal_amount 如何承载本金金额需求，并统一零售本金与机构授信名义金额。",
        "data_type": "logic field",
        "binding_role": "logic field",
        "dataset": "loan_exposure_report_lines",
        "field": "本金金额逻辑",
        "dataset_field": "loan_exposure_report_lines.principal_amount",
        "requirement_field": "本金金额",
        "source_field": "loan_exposure_report_lines.principal_amount",
        "expression": "COALESCE(retail_loans.principal_amount, institutional_loans.notional_amount, loan_exposure_report_lines.principal_amount)",
        "expression_fields": [
          "institutional_loans.notional_amount",
          "loan_exposure_report_lines.principal_amount",
          "retail_loans.principal_amount"
        ]
      }
    },
    {
      "id": "implementation_field.loan_exposure_report_lines.exposure_at_default_amount",
      "type": "implementation_field_binding",
      "label": "风险暴露金额逻辑",
      "properties": {
        "parent": "report_impl.item",
        "description": "数据逻辑说明报表明细字段 exposure_at_default_amount 如何承载风险暴露金额需求，并作为监管信用风险计算基础。",
        "data_type": "logic field",
        "binding_role": "logic field",
        "dataset": "loan_exposure_report_lines",
        "field": "风险暴露金额逻辑",
        "dataset_field": "loan_exposure_report_lines.exposure_at_default_amount",
        "requirement_field": "风险暴露金额",
        "source_field": "loan_exposure_report_lines.exposure_at_default_amount",
        "expression": "COALESCE(loan_exposure_report_lines.exposure_at_default_amount, retail_loans.principal_amount, institutional_loans.notional_amount)",
        "expression_fields": [
          "institutional_loans.notional_amount",
          "loan_exposure_report_lines.exposure_at_default_amount",
          "retail_loans.principal_amount"
        ]
      }
    },
    {
      "id": "implementation_field.loan_exposure_report_lines.expected_loss_amount",
      "type": "implementation_field_binding",
      "label": "预期损失金额逻辑",
      "properties": {
        "parent": "report_impl.item",
        "description": "数据逻辑说明报表明细字段 expected_loss_amount 如何承载预期损失金额需求，并由风险暴露、违约概率和违约损失率计算得到。",
        "data_type": "logic field",
        "binding_role": "logic field",
        "dataset": "loan_exposure_report_lines",
        "field": "预期损失金额逻辑",
        "dataset_field": "loan_exposure_report_lines.expected_loss_amount",
        "requirement_field": "预期损失金额",
        "source_field": "loan_exposure_report_lines.expected_loss_amount",
        "expression": "COALESCE(loan_exposure_report_lines.expected_loss_amount, retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd, institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default)",
        "expression_fields": [
          "institutional_loans.loss_given_default",
          "institutional_loans.notional_amount",
          "institutional_loans.probability_default",
          "loan_exposure_report_lines.expected_loss_amount",
          "retail_loans.lgd",
          "retail_loans.pd",
          "retail_loans.principal_amount"
        ]
      }
    }
  ],
  "edges": [
    {
      "id": "edge.concept.CustomerData.CONTAINS.contains_value.value.CustomerData.has_CustomerIdentifier",
      "source": "concept.CustomerData",
      "target": "value.CustomerData.has_CustomerIdentifier",
      "label": "contains value",
      "properties": {
        "description": "Customer identifier common to customer-like records.",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{CustomerData} has customer identifier {CustomerIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CustomerIdentifier",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.CustomerData.CONTAINS.contains_value.value.CustomerData.has_CustomerSegment",
      "source": "concept.CustomerData",
      "target": "value.CustomerData.has_CustomerSegment",
      "label": "contains value",
      "properties": {
        "description": "Customer segment common to customer-like records.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CustomerData} has customer segment {CustomerSegment}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CustomerSegment",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.LoanData.CONTAINS.contains_value.value.LoanData.has_LoanIdentifier",
      "source": "concept.LoanData",
      "target": "value.LoanData.has_LoanIdentifier",
      "label": "contains value",
      "properties": {
        "description": "Loan identifier common to loan-like records.",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{LoanData} has loan identifier {LoanIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "LoanIdentifier",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.LoanData.CONTAINS.contains_value.value.LoanData.has_OriginationDate",
      "source": "concept.LoanData",
      "target": "value.LoanData.has_OriginationDate",
      "label": "contains value",
      "properties": {
        "description": "Origination or booking date common to loan-like records.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{LoanData} has origination date {CalendarDate}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CalendarDate",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.ProductData.CONTAINS.contains_value.value.ProductData.has_ProductIdentifier",
      "source": "concept.ProductData",
      "target": "value.ProductData.has_ProductIdentifier",
      "label": "contains value",
      "properties": {
        "description": "Product identifier common to product-like records.",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{ProductData} has product identifier {ProductIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "ProductIdentifier",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Borrower.EXTENDS.extends.concept.CustomerData",
      "source": "concept.Borrower",
      "target": "concept.CustomerData",
      "label": "extends",
      "properties": {
        "description": "Borrower extends CustomerData.",
        "base_entity": "CustomerData"
      },
      "type": "EXTENDS"
    },
    {
      "id": "edge.concept.Borrower.CONTAINS.contains_value.value.Borrower.has_BorrowerName",
      "source": "concept.Borrower",
      "target": "value.Borrower.has_BorrowerName",
      "label": "contains value",
      "properties": {
        "description": "Display name of the borrower or legal entity.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Borrower} has borrower name {PersonOrEntityName}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "PersonOrEntityName",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Borrower.CONTAINS.contains_value.value.Borrower.has_BorrowerCountry",
      "source": "concept.Borrower",
      "target": "value.Borrower.has_BorrowerCountry",
      "label": "contains value",
      "properties": {
        "description": "Country or jurisdiction associated with the borrower.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Borrower} has borrower country {CountryCode}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CountryCode",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Loan.EXTENDS.extends.concept.LoanData",
      "source": "concept.Loan",
      "target": "concept.LoanData",
      "label": "extends",
      "properties": {
        "description": "Loan extends LoanData.",
        "base_entity": "LoanData"
      },
      "type": "EXTENDS"
    },
    {
      "id": "REFERENCES_Borrower",
      "source": "concept.Loan",
      "target": "concept.Borrower",
      "label": "REFERENCES_Borrower",
      "properties": {
        "description": "Borrower responsible for repayment of the loan exposure.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Loan} is owed by {Borrower}"
        ],
        "roles": [
          {
            "concept": "Borrower"
          }
        ]
      }
    },
    {
      "id": "REFERENCES_LoanProduct",
      "source": "concept.Loan",
      "target": "concept.LoanProduct",
      "label": "REFERENCES_LoanProduct",
      "properties": {
        "description": "Lending product classification applied to the loan exposure.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Loan} uses lending product {LoanProduct}"
        ],
        "roles": [
          {
            "concept": "LoanProduct"
          }
        ]
      }
    },
    {
      "id": "edge.concept.Loan.CONTAINS.contains_value.value.Loan.has_PrincipalAmount",
      "source": "concept.Loan",
      "target": "value.Loan.has_PrincipalAmount",
      "label": "contains value",
      "properties": {
        "description": "Contractual principal or notional amount of the loan exposure.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Loan} has principal amount {MonetaryAmount}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "MonetaryAmount",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Loan.CONTAINS.contains_value.value.Loan.has_LoanCurrency",
      "source": "concept.Loan",
      "target": "value.Loan.has_LoanCurrency",
      "label": "contains value",
      "properties": {
        "description": "Currency in which the loan exposure is booked or managed.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Loan} has loan currency {CurrencyCode}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CurrencyCode",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Loan.CONTAINS.contains_value.value.Loan.has_ExposureAtDefaultAmount",
      "source": "concept.Loan",
      "target": "value.Loan.has_ExposureAtDefaultAmount",
      "label": "contains value",
      "properties": {
        "description": "Exposure amount used for regulatory credit risk calculations.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Loan} has exposure at default amount {MonetaryAmount}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "MonetaryAmount",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Loan.CONTAINS.contains_value.value.Loan.has_ProbabilityOfDefault",
      "source": "concept.Loan",
      "target": "value.Loan.has_ProbabilityOfDefault",
      "label": "contains value",
      "properties": {
        "description": "Probability of default assigned to the loan exposure.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Loan} has probability of default {Rate}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "Rate",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Loan.CONTAINS.contains_value.value.Loan.has_LossGivenDefault",
      "source": "concept.Loan",
      "target": "value.Loan.has_LossGivenDefault",
      "label": "contains value",
      "properties": {
        "description": "Loss given default rate assigned to the loan exposure.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Loan} has loss given default {Rate}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "Rate",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Loan.CONTAINS.contains_value.value.Loan.has_ExpectedLossAmount",
      "source": "concept.Loan",
      "target": "value.Loan.has_ExpectedLossAmount",
      "label": "contains value",
      "properties": {
        "description": "Calculated expected loss amount for the loan exposure.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Loan} has expected loss amount {MonetaryAmount}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "MonetaryAmount",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Loan.CONTAINS.contains_value.value.Loan.has_RiskWeightedExposureAmount",
      "source": "concept.Loan",
      "target": "value.Loan.has_RiskWeightedExposureAmount",
      "label": "contains value",
      "properties": {
        "description": "Calculated exposure amount weighted by credit risk probability for portfolio risk monitoring.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Loan} has risk weighted exposure amount {MonetaryAmount}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "MonetaryAmount",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.LoanProduct.EXTENDS.extends.concept.ProductData",
      "source": "concept.LoanProduct",
      "target": "concept.ProductData",
      "label": "extends",
      "properties": {
        "description": "LoanProduct extends ProductData.",
        "base_entity": "ProductData"
      },
      "type": "EXTENDS"
    },
    {
      "id": "edge.concept.LoanProduct.CONTAINS.contains_value.value.LoanProduct.has_ProductType",
      "source": "concept.LoanProduct",
      "target": "value.LoanProduct.has_ProductType",
      "label": "contains value",
      "properties": {
        "description": "Product type used to group lending exposures.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{LoanProduct} has product type {ProductType}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "ProductType",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.LoanProduct.CONTAINS.contains_value.value.LoanProduct.has_RegulatoryProductClass",
      "source": "concept.LoanProduct",
      "target": "value.LoanProduct.has_RegulatoryProductClass",
      "label": "contains value",
      "properties": {
        "description": "Regulatory classification applied to the loan product.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{LoanProduct} has regulatory product class {RegulatoryClass}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "RegulatoryClass",
        "inherited": false,
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Borrower.CONTAINS.inherited_value.value.Borrower.has_CustomerIdentifier",
      "source": "concept.Borrower",
      "target": "value.Borrower.has_CustomerIdentifier",
      "label": "inherited value",
      "properties": {
        "description": "Customer identifier common to customer-like records.",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{CustomerData} has customer identifier {CustomerIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "CustomerIdentifier",
        "inherited": true,
        "inherited_from": "CustomerData",
        "base_relationship_path": "CustomerData.has_CustomerIdentifier",
        "inheritance_note": "Inherited from CustomerData.",
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Borrower.CONTAINS.inherited_value.value.Borrower.has_CustomerSegment",
      "source": "concept.Borrower",
      "target": "value.Borrower.has_CustomerSegment",
      "label": "inherited value",
      "properties": {
        "description": "Customer segment common to customer-like records.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CustomerData} has customer segment {CustomerSegment}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "CustomerSegment",
        "inherited": true,
        "inherited_from": "CustomerData",
        "base_relationship_path": "CustomerData.has_CustomerSegment",
        "inheritance_note": "Inherited from CustomerData.",
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Loan.CONTAINS.inherited_value.value.Loan.has_LoanIdentifier",
      "source": "concept.Loan",
      "target": "value.Loan.has_LoanIdentifier",
      "label": "inherited value",
      "properties": {
        "description": "Loan identifier common to loan-like records.",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{LoanData} has loan identifier {LoanIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "LoanIdentifier",
        "inherited": true,
        "inherited_from": "LoanData",
        "base_relationship_path": "LoanData.has_LoanIdentifier",
        "inheritance_note": "Inherited from LoanData.",
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Loan.CONTAINS.inherited_value.value.Loan.has_OriginationDate",
      "source": "concept.Loan",
      "target": "value.Loan.has_OriginationDate",
      "label": "inherited value",
      "properties": {
        "description": "Origination or booking date common to loan-like records.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{LoanData} has origination date {CalendarDate}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "CalendarDate",
        "inherited": true,
        "inherited_from": "LoanData",
        "base_relationship_path": "LoanData.has_OriginationDate",
        "inheritance_note": "Inherited from LoanData.",
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.LoanProduct.CONTAINS.inherited_value.value.LoanProduct.has_ProductIdentifier",
      "source": "concept.LoanProduct",
      "target": "value.LoanProduct.has_ProductIdentifier",
      "label": "inherited value",
      "properties": {
        "description": "Product identifier common to product-like records.",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{ProductData} has product identifier {ProductIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "ProductIdentifier",
        "inherited": true,
        "inherited_from": "ProductData",
        "base_relationship_path": "ProductData.has_ProductIdentifier",
        "inheritance_note": "Inherited from ProductData.",
        "ontology": "LoanExposureReportingOntology",
        "ontologies": [
          "LoanExposureReportingOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.value.Borrower.has_CustomerIdentifier.SHARES_VALUE_TYPE.CustomerIdentifier.value.CustomerData.has_CustomerIdentifier",
      "source": "value.Borrower.has_CustomerIdentifier",
      "target": "value.CustomerData.has_CustomerIdentifier",
      "label": "CustomerIdentifier",
      "properties": {
        "description": "Both fields use ValueType concept CustomerIdentifier.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CustomerIdentifier"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.Borrower.has_CustomerSegment.SHARES_VALUE_TYPE.CustomerSegment.value.CustomerData.has_CustomerSegment",
      "source": "value.Borrower.has_CustomerSegment",
      "target": "value.CustomerData.has_CustomerSegment",
      "label": "CustomerSegment",
      "properties": {
        "description": "Both fields use ValueType concept CustomerSegment.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CustomerSegment"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.Loan.has_LoanIdentifier.SHARES_VALUE_TYPE.LoanIdentifier.value.LoanData.has_LoanIdentifier",
      "source": "value.Loan.has_LoanIdentifier",
      "target": "value.LoanData.has_LoanIdentifier",
      "label": "LoanIdentifier",
      "properties": {
        "description": "Both fields use ValueType concept LoanIdentifier.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "LoanIdentifier"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.Loan.has_OriginationDate.SHARES_VALUE_TYPE.CalendarDate.value.LoanData.has_OriginationDate",
      "source": "value.Loan.has_OriginationDate",
      "target": "value.LoanData.has_OriginationDate",
      "label": "CalendarDate",
      "properties": {
        "description": "Both fields use ValueType concept CalendarDate.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CalendarDate"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.LoanProduct.has_ProductIdentifier.SHARES_VALUE_TYPE.ProductIdentifier.value.ProductData.has_ProductIdentifier",
      "source": "value.LoanProduct.has_ProductIdentifier",
      "target": "value.ProductData.has_ProductIdentifier",
      "label": "ProductIdentifier",
      "properties": {
        "description": "Both fields use ValueType concept ProductIdentifier.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "ProductIdentifier"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.Loan.has_ExpectedLossAmount.SHARES_VALUE_TYPE.MonetaryAmount.value.Loan.has_ExposureAtDefaultAmount",
      "source": "value.Loan.has_ExpectedLossAmount",
      "target": "value.Loan.has_ExposureAtDefaultAmount",
      "label": "MonetaryAmount",
      "properties": {
        "description": "Both fields use ValueType concept MonetaryAmount.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "MonetaryAmount"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.Loan.has_ExpectedLossAmount.SHARES_VALUE_TYPE.MonetaryAmount.value.Loan.has_PrincipalAmount",
      "source": "value.Loan.has_ExpectedLossAmount",
      "target": "value.Loan.has_PrincipalAmount",
      "label": "MonetaryAmount",
      "properties": {
        "description": "Both fields use ValueType concept MonetaryAmount.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "MonetaryAmount"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.Loan.has_ExpectedLossAmount.SHARES_VALUE_TYPE.MonetaryAmount.value.Loan.has_RiskWeightedExposureAmount",
      "source": "value.Loan.has_ExpectedLossAmount",
      "target": "value.Loan.has_RiskWeightedExposureAmount",
      "label": "MonetaryAmount",
      "properties": {
        "description": "Both fields use ValueType concept MonetaryAmount.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "MonetaryAmount"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.Loan.has_ExposureAtDefaultAmount.SHARES_VALUE_TYPE.MonetaryAmount.value.Loan.has_PrincipalAmount",
      "source": "value.Loan.has_ExposureAtDefaultAmount",
      "target": "value.Loan.has_PrincipalAmount",
      "label": "MonetaryAmount",
      "properties": {
        "description": "Both fields use ValueType concept MonetaryAmount.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "MonetaryAmount"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.Loan.has_ExposureAtDefaultAmount.SHARES_VALUE_TYPE.MonetaryAmount.value.Loan.has_RiskWeightedExposureAmount",
      "source": "value.Loan.has_ExposureAtDefaultAmount",
      "target": "value.Loan.has_RiskWeightedExposureAmount",
      "label": "MonetaryAmount",
      "properties": {
        "description": "Both fields use ValueType concept MonetaryAmount.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "MonetaryAmount"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.Loan.has_PrincipalAmount.SHARES_VALUE_TYPE.MonetaryAmount.value.Loan.has_RiskWeightedExposureAmount",
      "source": "value.Loan.has_PrincipalAmount",
      "target": "value.Loan.has_RiskWeightedExposureAmount",
      "label": "MonetaryAmount",
      "properties": {
        "description": "Both fields use ValueType concept MonetaryAmount.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "MonetaryAmount"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.Loan.has_LossGivenDefault.SHARES_VALUE_TYPE.Rate.value.Loan.has_ProbabilityOfDefault",
      "source": "value.Loan.has_LossGivenDefault",
      "target": "value.Loan.has_ProbabilityOfDefault",
      "label": "Rate",
      "properties": {
        "description": "Both fields use ValueType concept Rate.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "Rate"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.dataset.borrowers.SOURCE_TABLE.SOURCE_TABLE.table.customer_master.borrowers",
      "source": "dataset.borrowers",
      "target": "table.customer_master.borrowers",
      "label": "SOURCE_TABLE",
      "properties": {
        "source_field": "semantic_model.datasets.source/custom_extensions",
        "dataset": "borrowers",
        "source_table": "customer_master.borrowers"
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.dataset.borrowers.CONTAINS.contains.field.borrowers.borrower_id",
      "source": "dataset.borrowers",
      "target": "field.borrowers.borrower_id",
      "label": "contains",
      "properties": {
        "description": "Master customer identifier for a borrower or legal entity.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.borrowers.borrower_id.SOURCE_FIELD.SOURCE_FIELD.column.customer_master.borrowers.borrower_id",
      "source": "field.borrowers.borrower_id",
      "target": "column.customer_master.borrowers.borrower_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Master customer identifier for a borrower or legal entity.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "borrowers.borrower_id",
        "physical_field": "customer_master.borrowers.borrower_id",
        "expression": "borrower_id"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.borrowers.CONTAINS.contains.field.borrowers.borrower_segment",
      "source": "dataset.borrowers",
      "target": "field.borrowers.borrower_segment",
      "label": "contains",
      "properties": {
        "description": "Segment classification such as retail, SME, corporate, or financial institution.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.borrowers.borrower_segment.SOURCE_FIELD.SOURCE_FIELD.column.customer_master.borrowers.borrower_segment",
      "source": "field.borrowers.borrower_segment",
      "target": "column.customer_master.borrowers.borrower_segment",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Segment classification such as retail, SME, corporate, or financial institution.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "borrowers.borrower_segment",
        "physical_field": "customer_master.borrowers.borrower_segment",
        "expression": "borrower_segment"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.borrowers.CONTAINS.contains.field.borrowers.borrower_name",
      "source": "dataset.borrowers",
      "target": "field.borrowers.borrower_name",
      "label": "contains",
      "properties": {
        "description": "Human-readable borrower or legal entity name.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.borrowers.borrower_name.SOURCE_FIELD.SOURCE_FIELD.column.customer_master.borrowers.borrower_name",
      "source": "field.borrowers.borrower_name",
      "target": "column.customer_master.borrowers.borrower_name",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Human-readable borrower or legal entity name.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "borrowers.borrower_name",
        "physical_field": "customer_master.borrowers.borrower_name",
        "expression": "borrower_name"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.borrowers.CONTAINS.contains.field.borrowers.domicile_country",
      "source": "dataset.borrowers",
      "target": "field.borrowers.domicile_country",
      "label": "contains",
      "properties": {
        "description": "Borrower domicile country used for jurisdictional reporting and composite report joins.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.borrowers.domicile_country.SOURCE_FIELD.SOURCE_FIELD.column.customer_master.borrowers.domicile_country",
      "source": "field.borrowers.domicile_country",
      "target": "column.customer_master.borrowers.domicile_country",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Borrower domicile country used for jurisdictional reporting and composite report joins.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "borrowers.domicile_country",
        "physical_field": "customer_master.borrowers.domicile_country",
        "expression": "domicile_country"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.institutional_loans.SOURCE_TABLE.SOURCE_TABLE.table.institutional_lending_core.facilities",
      "source": "dataset.institutional_loans",
      "target": "table.institutional_lending_core.facilities",
      "label": "SOURCE_TABLE",
      "properties": {
        "source_field": "semantic_model.datasets.source/custom_extensions",
        "dataset": "institutional_loans",
        "source_table": "institutional_lending_core.facilities"
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.dataset.institutional_loans.CONTAINS.contains.field.institutional_loans.facility_id",
      "source": "dataset.institutional_loans",
      "target": "field.institutional_loans.facility_id",
      "label": "contains",
      "properties": {
        "description": "Institutional source identifier for a committed credit facility.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.institutional_loans.facility_id.SOURCE_FIELD.SOURCE_FIELD.column.institutional_lending_core.facilities.facility_id",
      "source": "field.institutional_loans.facility_id",
      "target": "column.institutional_lending_core.facilities.facility_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Institutional source identifier for a committed credit facility.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "institutional_loans.facility_id",
        "physical_field": "institutional_lending_core.facilities.facility_id",
        "expression": "facility_id"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.institutional_loans.CONTAINS.contains.field.institutional_loans.legal_entity_id",
      "source": "dataset.institutional_loans",
      "target": "field.institutional_loans.legal_entity_id",
      "label": "contains",
      "properties": {
        "description": "Customer identifier linking the facility to the responsible legal borrower.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.institutional_loans.legal_entity_id.SOURCE_FIELD.SOURCE_FIELD.column.institutional_lending_core.facilities.legal_entity_id",
      "source": "field.institutional_loans.legal_entity_id",
      "target": "column.institutional_lending_core.facilities.legal_entity_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Customer identifier linking the facility to the responsible legal borrower.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "institutional_loans.legal_entity_id",
        "physical_field": "institutional_lending_core.facilities.legal_entity_id",
        "expression": "legal_entity_id"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.institutional_loans.CONTAINS.contains.field.institutional_loans.product_code",
      "source": "dataset.institutional_loans",
      "target": "field.institutional_loans.product_code",
      "label": "contains",
      "properties": {
        "description": "Product identifier classifying the institutional lending facility.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.institutional_loans.product_code.SOURCE_FIELD.SOURCE_FIELD.column.institutional_lending_core.facilities.product_code",
      "source": "field.institutional_loans.product_code",
      "target": "column.institutional_lending_core.facilities.product_code",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Product identifier classifying the institutional lending facility.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "institutional_loans.product_code",
        "physical_field": "institutional_lending_core.facilities.product_code",
        "expression": "product_code"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.institutional_loans.CONTAINS.contains.field.institutional_loans.booking_date",
      "source": "dataset.institutional_loans",
      "target": "field.institutional_loans.booking_date",
      "label": "contains",
      "properties": {
        "description": "Date on which the institutional facility was booked.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.institutional_loans.booking_date.SOURCE_FIELD.SOURCE_FIELD.column.institutional_lending_core.facilities.booking_date",
      "source": "field.institutional_loans.booking_date",
      "target": "column.institutional_lending_core.facilities.booking_date",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Date on which the institutional facility was booked.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "institutional_loans.booking_date",
        "physical_field": "institutional_lending_core.facilities.booking_date",
        "expression": "booking_date"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.institutional_loans.CONTAINS.contains.field.institutional_loans.notional_amount",
      "source": "dataset.institutional_loans",
      "target": "field.institutional_loans.notional_amount",
      "label": "contains",
      "properties": {
        "description": "Notional or committed amount recorded for the institutional facility.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.institutional_loans.notional_amount.SOURCE_FIELD.SOURCE_FIELD.column.institutional_lending_core.facilities.notional_amount",
      "source": "field.institutional_loans.notional_amount",
      "target": "column.institutional_lending_core.facilities.notional_amount",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Notional or committed amount recorded for the institutional facility.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "institutional_loans.notional_amount",
        "physical_field": "institutional_lending_core.facilities.notional_amount",
        "expression": "notional_amount"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.institutional_loans.CONTAINS.contains.field.institutional_loans.exposure_currency",
      "source": "dataset.institutional_loans",
      "target": "field.institutional_loans.exposure_currency",
      "label": "contains",
      "properties": {
        "description": "Currency code used for the institutional exposure amount.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.institutional_loans.exposure_currency.SOURCE_FIELD.SOURCE_FIELD.column.institutional_lending_core.facilities.exposure_currency",
      "source": "field.institutional_loans.exposure_currency",
      "target": "column.institutional_lending_core.facilities.exposure_currency",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Currency code used for the institutional exposure amount.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "institutional_loans.exposure_currency",
        "physical_field": "institutional_lending_core.facilities.exposure_currency",
        "expression": "exposure_currency"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.institutional_loans.CONTAINS.contains.field.institutional_loans.probability_default",
      "source": "dataset.institutional_loans",
      "target": "field.institutional_loans.probability_default",
      "label": "contains",
      "properties": {
        "description": "Probability of default assigned by the wholesale credit risk model.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.institutional_loans.probability_default.SOURCE_FIELD.SOURCE_FIELD.column.institutional_lending_core.facilities.probability_default",
      "source": "field.institutional_loans.probability_default",
      "target": "column.institutional_lending_core.facilities.probability_default",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Probability of default assigned by the wholesale credit risk model.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "institutional_loans.probability_default",
        "physical_field": "institutional_lending_core.facilities.probability_default",
        "expression": "probability_default"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.institutional_loans.CONTAINS.contains.field.institutional_loans.loss_given_default",
      "source": "dataset.institutional_loans",
      "target": "field.institutional_loans.loss_given_default",
      "label": "contains",
      "properties": {
        "description": "Loss given default rate assigned by the wholesale credit risk model.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.institutional_loans.loss_given_default.SOURCE_FIELD.SOURCE_FIELD.column.institutional_lending_core.facilities.loss_given_default",
      "source": "field.institutional_loans.loss_given_default",
      "target": "column.institutional_lending_core.facilities.loss_given_default",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Loss given default rate assigned by the wholesale credit risk model.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "institutional_loans.loss_given_default",
        "physical_field": "institutional_lending_core.facilities.loss_given_default",
        "expression": "loss_given_default"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.loan_exposure_report_lines.SOURCE_TABLE.SOURCE_TABLE.table.retail_lending_core.retail_loans",
      "source": "dataset.loan_exposure_report_lines",
      "target": "table.retail_lending_core.retail_loans",
      "label": "SOURCE_TABLE",
      "properties": {
        "description": "Prepared report-line dataset is produced by a documented query that normalizes retail loan and institutional facility source populations before reporting.",
        "source_field": "semantic_model.datasets.source/custom_extensions",
        "dataset": "loan_exposure_report_lines",
        "source_table": "retail_lending_core.retail_loans"
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.dataset.loan_exposure_report_lines.SOURCE_TABLE.SOURCE_TABLE.table.institutional_lending_core.facilities",
      "source": "dataset.loan_exposure_report_lines",
      "target": "table.institutional_lending_core.facilities",
      "label": "SOURCE_TABLE",
      "properties": {
        "description": "Prepared report-line dataset is produced by a documented query that normalizes retail loan and institutional facility source populations before reporting.",
        "source_field": "semantic_model.datasets.source/custom_extensions",
        "dataset": "loan_exposure_report_lines",
        "source_table": "institutional_lending_core.facilities"
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.dataset.loan_exposure_report_lines.SOURCE_TABLE.SOURCE_TABLE.table.customer_master.borrowers",
      "source": "dataset.loan_exposure_report_lines",
      "target": "table.customer_master.borrowers",
      "label": "SOURCE_TABLE",
      "properties": {
        "description": "Prepared report-line dataset is produced by a documented query that normalizes retail loan and institutional facility source populations before reporting.",
        "source_field": "semantic_model.datasets.source/custom_extensions",
        "dataset": "loan_exposure_report_lines",
        "source_table": "customer_master.borrowers"
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.dataset.loan_exposure_report_lines.SOURCE_TABLE.SOURCE_TABLE.table.product_master.loan_products",
      "source": "dataset.loan_exposure_report_lines",
      "target": "table.product_master.loan_products",
      "label": "SOURCE_TABLE",
      "properties": {
        "description": "Prepared report-line dataset is produced by a documented query that normalizes retail loan and institutional facility source populations before reporting.",
        "source_field": "semantic_model.datasets.source/custom_extensions",
        "dataset": "loan_exposure_report_lines",
        "source_table": "product_master.loan_products"
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.dataset.loan_exposure_report_lines.CONTAINS.contains.field.loan_exposure_report_lines.loan_id",
      "source": "dataset.loan_exposure_report_lines",
      "target": "field.loan_exposure_report_lines.loan_id",
      "label": "contains",
      "properties": {
        "description": "Normalized loan or facility identifier reported on the exposure line.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.dataset.loan_exposure_report_lines.CONTAINS.contains.field.loan_exposure_report_lines.borrower_id",
      "source": "dataset.loan_exposure_report_lines",
      "target": "field.loan_exposure_report_lines.borrower_id",
      "label": "contains",
      "properties": {
        "description": "Borrower identifier reported on the exposure line for reconciliation to customer master.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.dataset.loan_exposure_report_lines.CONTAINS.contains.field.loan_exposure_report_lines.borrower_country",
      "source": "dataset.loan_exposure_report_lines",
      "target": "field.loan_exposure_report_lines.borrower_country",
      "label": "contains",
      "properties": {
        "description": "Borrower country carried on the report line to support jurisdictional aggregation and composite joins.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.dataset.loan_exposure_report_lines.CONTAINS.contains.field.loan_exposure_report_lines.product_id",
      "source": "dataset.loan_exposure_report_lines",
      "target": "field.loan_exposure_report_lines.product_id",
      "label": "contains",
      "properties": {
        "description": "Product identifier reported on the exposure line for product-class aggregation.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.dataset.loan_exposure_report_lines.CONTAINS.contains.field.loan_exposure_report_lines.principal_amount",
      "source": "dataset.loan_exposure_report_lines",
      "target": "field.loan_exposure_report_lines.principal_amount",
      "label": "contains",
      "properties": {
        "description": "Principal amount included on the report line for exposure reconciliation.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.dataset.loan_exposure_report_lines.CONTAINS.contains.field.loan_exposure_report_lines.exposure_at_default_amount",
      "source": "dataset.loan_exposure_report_lines",
      "target": "field.loan_exposure_report_lines.exposure_at_default_amount",
      "label": "contains",
      "properties": {
        "description": "Exposure at default amount reported for regulatory credit risk measurement.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.dataset.loan_exposure_report_lines.CONTAINS.contains.field.loan_exposure_report_lines.expected_loss_amount",
      "source": "dataset.loan_exposure_report_lines",
      "target": "field.loan_exposure_report_lines.expected_loss_amount",
      "label": "contains",
      "properties": {
        "description": "Expected loss amount reported after applying probability of default and loss given default.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.dataset.loan_exposure_report_lines.CONTAINS.contains.field.loan_exposure_report_lines.report_currency",
      "source": "dataset.loan_exposure_report_lines",
      "target": "field.loan_exposure_report_lines.report_currency",
      "label": "contains",
      "properties": {
        "description": "Currency code in which the exposure line amounts are reported.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.dataset.loan_products.SOURCE_TABLE.SOURCE_TABLE.table.product_master.loan_products",
      "source": "dataset.loan_products",
      "target": "table.product_master.loan_products",
      "label": "SOURCE_TABLE",
      "properties": {
        "source_field": "semantic_model.datasets.source/custom_extensions",
        "dataset": "loan_products",
        "source_table": "product_master.loan_products"
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.dataset.loan_products.CONTAINS.contains.field.loan_products.product_id",
      "source": "dataset.loan_products",
      "target": "field.loan_products.product_id",
      "label": "contains",
      "properties": {
        "description": "Master product identifier for a lending product.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.loan_products.product_id.SOURCE_FIELD.SOURCE_FIELD.column.product_master.loan_products.product_id",
      "source": "field.loan_products.product_id",
      "target": "column.product_master.loan_products.product_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Master product identifier for a lending product.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "loan_products.product_id",
        "physical_field": "product_master.loan_products.product_id",
        "expression": "product_id"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.loan_products.CONTAINS.contains.field.loan_products.product_type",
      "source": "dataset.loan_products",
      "target": "field.loan_products.product_type",
      "label": "contains",
      "properties": {
        "description": "Lending product type such as mortgage, term loan, revolving credit, or credit line.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.loan_products.product_type.SOURCE_FIELD.SOURCE_FIELD.column.product_master.loan_products.product_type",
      "source": "field.loan_products.product_type",
      "target": "column.product_master.loan_products.product_type",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Lending product type such as mortgage, term loan, revolving credit, or credit line.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "loan_products.product_type",
        "physical_field": "product_master.loan_products.product_type",
        "expression": "product_type"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.loan_products.CONTAINS.contains.field.loan_products.regulatory_product_class",
      "source": "dataset.loan_products",
      "target": "field.loan_products.regulatory_product_class",
      "label": "contains",
      "properties": {
        "description": "Regulatory product class used for credit exposure aggregation.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.loan_products.regulatory_product_class.SOURCE_FIELD.SOURCE_FIELD.column.product_master.loan_products.regulatory_product_class",
      "source": "field.loan_products.regulatory_product_class",
      "target": "column.product_master.loan_products.regulatory_product_class",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Regulatory product class used for credit exposure aggregation.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "loan_products.regulatory_product_class",
        "physical_field": "product_master.loan_products.regulatory_product_class",
        "expression": "regulatory_product_class"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.retail_loans.SOURCE_TABLE.SOURCE_TABLE.table.retail_lending_core.retail_loans",
      "source": "dataset.retail_loans",
      "target": "table.retail_lending_core.retail_loans",
      "label": "SOURCE_TABLE",
      "properties": {
        "source_field": "semantic_model.datasets.source/custom_extensions",
        "dataset": "retail_loans",
        "source_table": "retail_lending_core.retail_loans"
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.dataset.retail_loans.CONTAINS.contains.field.retail_loans.loan_id",
      "source": "dataset.retail_loans",
      "target": "field.retail_loans.loan_id",
      "label": "contains",
      "properties": {
        "description": "Retail source identifier for an individual consumer loan record.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.retail_loans.loan_id.SOURCE_FIELD.SOURCE_FIELD.column.retail_lending_core.retail_loans.loan_id",
      "source": "field.retail_loans.loan_id",
      "target": "column.retail_lending_core.retail_loans.loan_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Retail source identifier for an individual consumer loan record.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "retail_loans.loan_id",
        "physical_field": "retail_lending_core.retail_loans.loan_id",
        "expression": "loan_id"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.retail_loans.CONTAINS.contains.field.retail_loans.borrower_id",
      "source": "dataset.retail_loans",
      "target": "field.retail_loans.borrower_id",
      "label": "contains",
      "properties": {
        "description": "Customer identifier linking the retail loan to the responsible borrower.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.retail_loans.borrower_id.SOURCE_FIELD.SOURCE_FIELD.column.retail_lending_core.retail_loans.borrower_id",
      "source": "field.retail_loans.borrower_id",
      "target": "column.retail_lending_core.retail_loans.borrower_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Customer identifier linking the retail loan to the responsible borrower.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "retail_loans.borrower_id",
        "physical_field": "retail_lending_core.retail_loans.borrower_id",
        "expression": "borrower_id"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.retail_loans.CONTAINS.contains.field.retail_loans.product_id",
      "source": "dataset.retail_loans",
      "target": "field.retail_loans.product_id",
      "label": "contains",
      "properties": {
        "description": "Product identifier classifying the retail lending product.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.retail_loans.product_id.SOURCE_FIELD.SOURCE_FIELD.column.retail_lending_core.retail_loans.product_id",
      "source": "field.retail_loans.product_id",
      "target": "column.retail_lending_core.retail_loans.product_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Product identifier classifying the retail lending product.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "retail_loans.product_id",
        "physical_field": "retail_lending_core.retail_loans.product_id",
        "expression": "product_id"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.retail_loans.CONTAINS.contains.field.retail_loans.origination_date",
      "source": "dataset.retail_loans",
      "target": "field.retail_loans.origination_date",
      "label": "contains",
      "properties": {
        "description": "Date on which the retail loan was originated or booked.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.retail_loans.origination_date.SOURCE_FIELD.SOURCE_FIELD.column.retail_lending_core.retail_loans.origination_date",
      "source": "field.retail_loans.origination_date",
      "target": "column.retail_lending_core.retail_loans.origination_date",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Date on which the retail loan was originated or booked.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "retail_loans.origination_date",
        "physical_field": "retail_lending_core.retail_loans.origination_date",
        "expression": "origination_date"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.retail_loans.CONTAINS.contains.field.retail_loans.principal_amount",
      "source": "dataset.retail_loans",
      "target": "field.retail_loans.principal_amount",
      "label": "contains",
      "properties": {
        "description": "Principal balance or contractual amount recorded for the retail loan.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.retail_loans.principal_amount.SOURCE_FIELD.SOURCE_FIELD.column.retail_lending_core.retail_loans.principal_amount",
      "source": "field.retail_loans.principal_amount",
      "target": "column.retail_lending_core.retail_loans.principal_amount",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Principal balance or contractual amount recorded for the retail loan.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "retail_loans.principal_amount",
        "physical_field": "retail_lending_core.retail_loans.principal_amount",
        "expression": "principal_amount"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.retail_loans.CONTAINS.contains.field.retail_loans.currency",
      "source": "dataset.retail_loans",
      "target": "field.retail_loans.currency",
      "label": "contains",
      "properties": {
        "description": "Currency code used for the retail loan amount.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.retail_loans.currency.SOURCE_FIELD.SOURCE_FIELD.column.retail_lending_core.retail_loans.currency",
      "source": "field.retail_loans.currency",
      "target": "column.retail_lending_core.retail_loans.currency",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Currency code used for the retail loan amount.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "retail_loans.currency",
        "physical_field": "retail_lending_core.retail_loans.currency",
        "expression": "currency"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.retail_loans.CONTAINS.contains.field.retail_loans.pd",
      "source": "dataset.retail_loans",
      "target": "field.retail_loans.pd",
      "label": "contains",
      "properties": {
        "description": "Probability of default assigned by the retail credit risk model.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.retail_loans.pd.SOURCE_FIELD.SOURCE_FIELD.column.retail_lending_core.retail_loans.pd",
      "source": "field.retail_loans.pd",
      "target": "column.retail_lending_core.retail_loans.pd",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Probability of default assigned by the retail credit risk model.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "retail_loans.pd",
        "physical_field": "retail_lending_core.retail_loans.pd",
        "expression": "pd"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.retail_loans.CONTAINS.contains.field.retail_loans.lgd",
      "source": "dataset.retail_loans",
      "target": "field.retail_loans.lgd",
      "label": "contains",
      "properties": {
        "description": "Loss given default rate assigned by the retail credit risk model.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.retail_loans.lgd.SOURCE_FIELD.SOURCE_FIELD.column.retail_lending_core.retail_loans.lgd",
      "source": "field.retail_loans.lgd",
      "target": "column.retail_lending_core.retail_loans.lgd",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Loss given default rate assigned by the retail credit risk model.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "retail_loans.lgd",
        "physical_field": "retail_lending_core.retail_loans.lgd",
        "expression": "lgd"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.loan_exposure_report_lines.loan_id.SOURCE_FIELD.SOURCE_FIELD.field.retail_loans.loan_id",
      "source": "field.loan_exposure_report_lines.loan_id",
      "target": "field.retail_loans.loan_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Normalized loan or facility identifier reported on the exposure line.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "retail_loans.loan_id",
        "expression": "COALESCE(retail_loans.loan_id, institutional_loans.facility_id)"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.loan_exposure_report_lines.loan_id.SOURCE_FIELD.SOURCE_FIELD.field.institutional_loans.facility_id",
      "source": "field.loan_exposure_report_lines.loan_id",
      "target": "field.institutional_loans.facility_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Normalized loan or facility identifier reported on the exposure line.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "institutional_loans.facility_id",
        "expression": "COALESCE(retail_loans.loan_id, institutional_loans.facility_id)"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.loan_exposure_report_lines.borrower_id.SOURCE_FIELD.SOURCE_FIELD.field.retail_loans.borrower_id",
      "source": "field.loan_exposure_report_lines.borrower_id",
      "target": "field.retail_loans.borrower_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Borrower identifier reported on the exposure line for reconciliation to customer master.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "retail_loans.borrower_id",
        "expression": "COALESCE(retail_loans.borrower_id, institutional_loans.legal_entity_id)"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.loan_exposure_report_lines.borrower_id.SOURCE_FIELD.SOURCE_FIELD.field.institutional_loans.legal_entity_id",
      "source": "field.loan_exposure_report_lines.borrower_id",
      "target": "field.institutional_loans.legal_entity_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Borrower identifier reported on the exposure line for reconciliation to customer master.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "institutional_loans.legal_entity_id",
        "expression": "COALESCE(retail_loans.borrower_id, institutional_loans.legal_entity_id)"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.loan_exposure_report_lines.borrower_country.SOURCE_FIELD.SOURCE_FIELD.field.borrowers.domicile_country",
      "source": "field.loan_exposure_report_lines.borrower_country",
      "target": "field.borrowers.domicile_country",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Borrower country carried on the report line to support jurisdictional aggregation and composite joins.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "borrowers.domicile_country",
        "expression": "borrowers.domicile_country"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.loan_exposure_report_lines.product_id.SOURCE_FIELD.SOURCE_FIELD.field.retail_loans.product_id",
      "source": "field.loan_exposure_report_lines.product_id",
      "target": "field.retail_loans.product_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Product identifier reported on the exposure line for product-class aggregation.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "retail_loans.product_id",
        "expression": "COALESCE(retail_loans.product_id, institutional_loans.product_code)"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.loan_exposure_report_lines.product_id.SOURCE_FIELD.SOURCE_FIELD.field.institutional_loans.product_code",
      "source": "field.loan_exposure_report_lines.product_id",
      "target": "field.institutional_loans.product_code",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Product identifier reported on the exposure line for product-class aggregation.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "institutional_loans.product_code",
        "expression": "COALESCE(retail_loans.product_id, institutional_loans.product_code)"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.loan_exposure_report_lines.principal_amount.SOURCE_FIELD.SOURCE_FIELD.field.retail_loans.principal_amount",
      "source": "field.loan_exposure_report_lines.principal_amount",
      "target": "field.retail_loans.principal_amount",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Principal amount included on the report line for exposure reconciliation.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "retail_loans.principal_amount",
        "expression": "COALESCE(retail_loans.principal_amount, institutional_loans.notional_amount)"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.loan_exposure_report_lines.principal_amount.SOURCE_FIELD.SOURCE_FIELD.field.institutional_loans.notional_amount",
      "source": "field.loan_exposure_report_lines.principal_amount",
      "target": "field.institutional_loans.notional_amount",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Principal amount included on the report line for exposure reconciliation.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "institutional_loans.notional_amount",
        "expression": "COALESCE(retail_loans.principal_amount, institutional_loans.notional_amount)"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.loan_exposure_report_lines.exposure_at_default_amount.SOURCE_FIELD.SOURCE_FIELD.field.retail_loans.principal_amount",
      "source": "field.loan_exposure_report_lines.exposure_at_default_amount",
      "target": "field.retail_loans.principal_amount",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Exposure at default amount reported for regulatory credit risk measurement.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "retail_loans.principal_amount",
        "expression": "COALESCE(retail_loans.principal_amount, institutional_loans.notional_amount)"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.loan_exposure_report_lines.exposure_at_default_amount.SOURCE_FIELD.SOURCE_FIELD.field.institutional_loans.notional_amount",
      "source": "field.loan_exposure_report_lines.exposure_at_default_amount",
      "target": "field.institutional_loans.notional_amount",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Exposure at default amount reported for regulatory credit risk measurement.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "institutional_loans.notional_amount",
        "expression": "COALESCE(retail_loans.principal_amount, institutional_loans.notional_amount)"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.loan_exposure_report_lines.expected_loss_amount.SOURCE_FIELD.SOURCE_FIELD.field.retail_loans.principal_amount",
      "source": "field.loan_exposure_report_lines.expected_loss_amount",
      "target": "field.retail_loans.principal_amount",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Expected loss amount reported after applying probability of default and loss given default.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "retail_loans.principal_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.loan_exposure_report_lines.expected_loss_amount.SOURCE_FIELD.SOURCE_FIELD.field.retail_loans.pd",
      "source": "field.loan_exposure_report_lines.expected_loss_amount",
      "target": "field.retail_loans.pd",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Expected loss amount reported after applying probability of default and loss given default.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "retail_loans.pd",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.loan_exposure_report_lines.expected_loss_amount.SOURCE_FIELD.SOURCE_FIELD.field.retail_loans.lgd",
      "source": "field.loan_exposure_report_lines.expected_loss_amount",
      "target": "field.retail_loans.lgd",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Expected loss amount reported after applying probability of default and loss given default.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "retail_loans.lgd",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.loan_exposure_report_lines.expected_loss_amount.SOURCE_FIELD.SOURCE_FIELD.field.institutional_loans.notional_amount",
      "source": "field.loan_exposure_report_lines.expected_loss_amount",
      "target": "field.institutional_loans.notional_amount",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Expected loss amount reported after applying probability of default and loss given default.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "institutional_loans.notional_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.loan_exposure_report_lines.expected_loss_amount.SOURCE_FIELD.SOURCE_FIELD.field.institutional_loans.probability_default",
      "source": "field.loan_exposure_report_lines.expected_loss_amount",
      "target": "field.institutional_loans.probability_default",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Expected loss amount reported after applying probability of default and loss given default.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "institutional_loans.probability_default",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.loan_exposure_report_lines.expected_loss_amount.SOURCE_FIELD.SOURCE_FIELD.field.institutional_loans.loss_given_default",
      "source": "field.loan_exposure_report_lines.expected_loss_amount",
      "target": "field.institutional_loans.loss_given_default",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Expected loss amount reported after applying probability of default and loss given default.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "institutional_loans.loss_given_default",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.loan_exposure_report_lines.report_currency.SOURCE_FIELD.SOURCE_FIELD.field.retail_loans.currency",
      "source": "field.loan_exposure_report_lines.report_currency",
      "target": "field.retail_loans.currency",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Currency code in which the exposure line amounts are reported.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "retail_loans.currency",
        "expression": "COALESCE(retail_loans.currency, institutional_loans.exposure_currency)"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.loan_exposure_report_lines.report_currency.SOURCE_FIELD.SOURCE_FIELD.field.institutional_loans.exposure_currency",
      "source": "field.loan_exposure_report_lines.report_currency",
      "target": "field.institutional_loans.exposure_currency",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Currency code in which the exposure line amounts are reported.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "institutional_loans.exposure_currency",
        "expression": "COALESCE(retail_loans.currency, institutional_loans.exposure_currency)"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.retail_loans.DATASET_JOIN.join_borrower_id.dataset.borrowers",
      "source": "dataset.retail_loans",
      "target": "dataset.borrowers",
      "label": "join borrower_id",
      "properties": {
        "join_name": "retail_loan_borrower",
        "relationship": {
          "name": "retail_loan_borrower",
          "from": "retail_loans",
          "to": "borrowers",
          "from_columns": [
            "borrower_id"
          ],
          "to_columns": [
            "borrower_id"
          ],
          "ai_context": {
            "description": "Retail loan records use borrower_id to attach the consumer borrower profile used for customer segment and domicile reporting."
          }
        },
        "ai_context": {
          "description": "Retail loan records use borrower_id to attach the consumer borrower profile used for customer segment and domicile reporting."
        }
      },
      "type": "DATASET_JOIN"
    },
    {
      "id": "edge.dataset.institutional_loans.DATASET_JOIN.join_legal_entity_id_borrower_id.dataset.borrowers",
      "source": "dataset.institutional_loans",
      "target": "dataset.borrowers",
      "label": "join legal_entity_id = borrower_id",
      "properties": {
        "join_name": "institutional_loan_borrower",
        "relationship": {
          "name": "institutional_loan_borrower",
          "from": "institutional_loans",
          "to": "borrowers",
          "from_columns": [
            "legal_entity_id"
          ],
          "to_columns": [
            "borrower_id"
          ],
          "ai_context": {
            "description": "Institutional facility records use legal_entity_id to resolve the legal borrower profile used for wholesale exposure reporting."
          }
        },
        "ai_context": {
          "description": "Institutional facility records use legal_entity_id to resolve the legal borrower profile used for wholesale exposure reporting."
        }
      },
      "type": "DATASET_JOIN"
    },
    {
      "id": "edge.dataset.retail_loans.DATASET_JOIN.join_product_id.dataset.loan_products",
      "source": "dataset.retail_loans",
      "target": "dataset.loan_products",
      "label": "join product_id",
      "properties": {
        "join_name": "retail_loan_product",
        "relationship": {
          "name": "retail_loan_product",
          "from": "retail_loans",
          "to": "loan_products",
          "from_columns": [
            "product_id"
          ],
          "to_columns": [
            "product_id"
          ],
          "ai_context": {
            "description": "Retail loan records join to loan product definitions through product_id to classify retail exposure product type and regulatory class."
          }
        },
        "ai_context": {
          "description": "Retail loan records join to loan product definitions through product_id to classify retail exposure product type and regulatory class."
        }
      },
      "type": "DATASET_JOIN"
    },
    {
      "id": "edge.dataset.institutional_loans.DATASET_JOIN.join_product_code_product_id.dataset.loan_products",
      "source": "dataset.institutional_loans",
      "target": "dataset.loan_products",
      "label": "join product_code = product_id",
      "properties": {
        "join_name": "institutional_loan_product",
        "relationship": {
          "name": "institutional_loan_product",
          "from": "institutional_loans",
          "to": "loan_products",
          "from_columns": [
            "product_code"
          ],
          "to_columns": [
            "product_id"
          ],
          "ai_context": {
            "description": "Institutional facility product_code resolves to the shared loan product definition used for wholesale exposure classification."
          }
        },
        "ai_context": {
          "description": "Institutional facility product_code resolves to the shared loan product definition used for wholesale exposure classification."
        }
      },
      "type": "DATASET_JOIN"
    },
    {
      "id": "edge.dataset.loan_exposure_report_lines.DATASET_JOIN.join_borrower_id_borrower_id_borrower_country_domicile_country.dataset.borrowers",
      "source": "dataset.loan_exposure_report_lines",
      "target": "dataset.borrowers",
      "label": "join borrower_id = borrower_id, borrower_country = domicile_country",
      "properties": {
        "join_name": "report_line_borrower_composite",
        "relationship": {
          "name": "report_line_borrower_composite",
          "from": "loan_exposure_report_lines",
          "to": "borrowers",
          "from_columns": [
            "borrower_id",
            "borrower_country"
          ],
          "to_columns": [
            "borrower_id",
            "domicile_country"
          ],
          "ai_context": {
            "description": "Report lines reconcile to borrower master records using borrower identifier plus reported country to preserve jurisdiction-specific exposure context."
          }
        },
        "ai_context": {
          "description": "Report lines reconcile to borrower master records using borrower identifier plus reported country to preserve jurisdiction-specific exposure context."
        }
      },
      "type": "DATASET_JOIN"
    },
    {
      "id": "edge.dataset.loan_exposure_report_lines.DATASET_JOIN.join_product_id.dataset.loan_products",
      "source": "dataset.loan_exposure_report_lines",
      "target": "dataset.loan_products",
      "label": "join product_id",
      "properties": {
        "join_name": "report_line_product",
        "relationship": {
          "name": "report_line_product",
          "from": "loan_exposure_report_lines",
          "to": "loan_products",
          "from_columns": [
            "product_id"
          ],
          "to_columns": [
            "product_id"
          ],
          "ai_context": {
            "description": "Report lines join to loan product definitions through product_id so reported exposures can be reviewed against product classification reference data."
          }
        },
        "ai_context": {
          "description": "Report lines join to loan product definitions through product_id so reported exposures can be reviewed against product classification reference data."
        }
      },
      "type": "DATASET_JOIN"
    },
    {
      "id": "edge.metric.expected_loss_amount.DERIVED_BY.DERIVED_BY.dataset.institutional_loans",
      "source": "metric.expected_loss_amount",
      "target": "dataset.institutional_loans",
      "label": "DERIVED_BY",
      "properties": {
        "description": "Expected credit loss calculated from exposure at default, probability of default, and loss given default across loan source populations.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "expected_loss_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default",
        "source_fields": [
          "institutional_loans.loss_given_default",
          "institutional_loans.notional_amount",
          "institutional_loans.probability_default"
        ]
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.metric.expected_loss_amount.DERIVED_BY.DERIVED_BY.dataset.retail_loans",
      "source": "metric.expected_loss_amount",
      "target": "dataset.retail_loans",
      "label": "DERIVED_BY",
      "properties": {
        "description": "Expected credit loss calculated from exposure at default, probability of default, and loss given default across loan source populations.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "expected_loss_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default",
        "source_fields": [
          "retail_loans.lgd",
          "retail_loans.pd",
          "retail_loans.principal_amount"
        ]
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.metric.expected_loss_amount.DERIVED_BY.institutional_loans.loss_given_default.field.institutional_loans.loss_given_default",
      "source": "metric.expected_loss_amount",
      "target": "field.institutional_loans.loss_given_default",
      "label": "institutional_loans.loss_given_default",
      "properties": {
        "description": "Expected credit loss calculated from exposure at default, probability of default, and loss given default across loan source populations.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "expected_loss_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default",
        "dataset_field": "institutional_loans.loss_given_default"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.metric.expected_loss_amount.DERIVED_BY.institutional_loans.notional_amount.field.institutional_loans.notional_amount",
      "source": "metric.expected_loss_amount",
      "target": "field.institutional_loans.notional_amount",
      "label": "institutional_loans.notional_amount",
      "properties": {
        "description": "Expected credit loss calculated from exposure at default, probability of default, and loss given default across loan source populations.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "expected_loss_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default",
        "dataset_field": "institutional_loans.notional_amount"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.metric.expected_loss_amount.DERIVED_BY.institutional_loans.probability_default.field.institutional_loans.probability_default",
      "source": "metric.expected_loss_amount",
      "target": "field.institutional_loans.probability_default",
      "label": "institutional_loans.probability_default",
      "properties": {
        "description": "Expected credit loss calculated from exposure at default, probability of default, and loss given default across loan source populations.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "expected_loss_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default",
        "dataset_field": "institutional_loans.probability_default"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.metric.expected_loss_amount.DERIVED_BY.retail_loans.lgd.field.retail_loans.lgd",
      "source": "metric.expected_loss_amount",
      "target": "field.retail_loans.lgd",
      "label": "retail_loans.lgd",
      "properties": {
        "description": "Expected credit loss calculated from exposure at default, probability of default, and loss given default across loan source populations.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "expected_loss_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default",
        "dataset_field": "retail_loans.lgd"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.metric.expected_loss_amount.DERIVED_BY.retail_loans.pd.field.retail_loans.pd",
      "source": "metric.expected_loss_amount",
      "target": "field.retail_loans.pd",
      "label": "retail_loans.pd",
      "properties": {
        "description": "Expected credit loss calculated from exposure at default, probability of default, and loss given default across loan source populations.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "expected_loss_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default",
        "dataset_field": "retail_loans.pd"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.metric.expected_loss_amount.DERIVED_BY.retail_loans.principal_amount.field.retail_loans.principal_amount",
      "source": "metric.expected_loss_amount",
      "target": "field.retail_loans.principal_amount",
      "label": "retail_loans.principal_amount",
      "properties": {
        "description": "Expected credit loss calculated from exposure at default, probability of default, and loss given default across loan source populations.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "expected_loss_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default",
        "dataset_field": "retail_loans.principal_amount"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.metric.risk_weighted_exposure_amount.DERIVED_BY.DERIVED_BY.dataset.institutional_loans",
      "source": "metric.risk_weighted_exposure_amount",
      "target": "dataset.institutional_loans",
      "label": "DERIVED_BY",
      "properties": {
        "description": "Risk-weighted exposure amount calculated by applying default probability to retail principal and institutional notional amounts.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "risk_weighted_exposure_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd + institutional_loans.notional_amount * institutional_loans.probability_default",
        "source_fields": [
          "institutional_loans.notional_amount",
          "institutional_loans.probability_default"
        ]
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.metric.risk_weighted_exposure_amount.DERIVED_BY.DERIVED_BY.dataset.retail_loans",
      "source": "metric.risk_weighted_exposure_amount",
      "target": "dataset.retail_loans",
      "label": "DERIVED_BY",
      "properties": {
        "description": "Risk-weighted exposure amount calculated by applying default probability to retail principal and institutional notional amounts.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "risk_weighted_exposure_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd + institutional_loans.notional_amount * institutional_loans.probability_default",
        "source_fields": [
          "retail_loans.pd",
          "retail_loans.principal_amount"
        ]
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.metric.risk_weighted_exposure_amount.DERIVED_BY.institutional_loans.notional_amount.field.institutional_loans.notional_amount",
      "source": "metric.risk_weighted_exposure_amount",
      "target": "field.institutional_loans.notional_amount",
      "label": "institutional_loans.notional_amount",
      "properties": {
        "description": "Risk-weighted exposure amount calculated by applying default probability to retail principal and institutional notional amounts.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "risk_weighted_exposure_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd + institutional_loans.notional_amount * institutional_loans.probability_default",
        "dataset_field": "institutional_loans.notional_amount"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.metric.risk_weighted_exposure_amount.DERIVED_BY.institutional_loans.probability_default.field.institutional_loans.probability_default",
      "source": "metric.risk_weighted_exposure_amount",
      "target": "field.institutional_loans.probability_default",
      "label": "institutional_loans.probability_default",
      "properties": {
        "description": "Risk-weighted exposure amount calculated by applying default probability to retail principal and institutional notional amounts.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "risk_weighted_exposure_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd + institutional_loans.notional_amount * institutional_loans.probability_default",
        "dataset_field": "institutional_loans.probability_default"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.metric.risk_weighted_exposure_amount.DERIVED_BY.retail_loans.pd.field.retail_loans.pd",
      "source": "metric.risk_weighted_exposure_amount",
      "target": "field.retail_loans.pd",
      "label": "retail_loans.pd",
      "properties": {
        "description": "Risk-weighted exposure amount calculated by applying default probability to retail principal and institutional notional amounts.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "risk_weighted_exposure_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd + institutional_loans.notional_amount * institutional_loans.probability_default",
        "dataset_field": "retail_loans.pd"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.metric.risk_weighted_exposure_amount.DERIVED_BY.retail_loans.principal_amount.field.retail_loans.principal_amount",
      "source": "metric.risk_weighted_exposure_amount",
      "target": "field.retail_loans.principal_amount",
      "label": "retail_loans.principal_amount",
      "properties": {
        "description": "Risk-weighted exposure amount calculated by applying default probability to retail principal and institutional notional amounts.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "risk_weighted_exposure_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd + institutional_loans.notional_amount * institutional_loans.probability_default",
        "dataset_field": "retail_loans.principal_amount"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.concept.Borrower.MAPS_TO.MAPS_TO.dataset.borrowers",
      "source": "concept.Borrower",
      "target": "dataset.borrowers",
      "label": "MAPS_TO",
      "properties": {
        "description": "Borrower master population mapped as Borrower entity records used by loan exposure reporting.",
        "fields": [
          "borrowers.borrower_id",
          "borrowers.borrower_name",
          "borrowers.borrower_segment",
          "borrowers.domicile_country"
        ],
        "ai_context": {
          "description": "Borrower master population mapped as Borrower entity records used by loan exposure reporting."
        }
      },
      "type": "MAPS_TO"
    },
    {
      "id": "edge.value.Borrower.has_BorrowerCountry.MAPS_TO_FIELD.has_BorrowerCountry.field.borrowers.domicile_country",
      "source": "value.Borrower.has_BorrowerCountry",
      "target": "field.borrowers.domicile_country",
      "label": "has_BorrowerCountry",
      "properties": {
        "description": "Borrower.has_BorrowerCountry maps to semantic dataset field borrowers.domicile_country.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "borrowers.domicile_country"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Borrower.has_BorrowerName.MAPS_TO_FIELD.has_BorrowerName.field.borrowers.borrower_name",
      "source": "value.Borrower.has_BorrowerName",
      "target": "field.borrowers.borrower_name",
      "label": "has_BorrowerName",
      "properties": {
        "description": "Borrower.has_BorrowerName maps to semantic dataset field borrowers.borrower_name.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "borrowers.borrower_name"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Borrower.has_CustomerIdentifier.MAPS_TO_FIELD.has_CustomerIdentifier.field.borrowers.borrower_id",
      "source": "value.Borrower.has_CustomerIdentifier",
      "target": "field.borrowers.borrower_id",
      "label": "has_CustomerIdentifier",
      "properties": {
        "description": "Borrower.has_CustomerIdentifier maps to semantic dataset field borrowers.borrower_id.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "borrowers.borrower_id"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Borrower.has_CustomerSegment.MAPS_TO_FIELD.has_CustomerSegment.field.borrowers.borrower_segment",
      "source": "value.Borrower.has_CustomerSegment",
      "target": "field.borrowers.borrower_segment",
      "label": "has_CustomerSegment",
      "properties": {
        "description": "Borrower.has_CustomerSegment maps to semantic dataset field borrowers.borrower_segment.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "borrowers.borrower_segment"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.concept.Loan.MAPS_TO.MAPS_TO.dataset.institutional_loans",
      "source": "concept.Loan",
      "target": "dataset.institutional_loans",
      "label": "MAPS_TO",
      "properties": {
        "description": "Institutional facility source population mapped as Loan entity records for wholesale lending exposures.",
        "fields": [
          "institutional_loans.booking_date",
          "institutional_loans.exposure_currency",
          "institutional_loans.facility_id",
          "institutional_loans.loss_given_default",
          "institutional_loans.notional_amount",
          "institutional_loans.probability_default"
        ],
        "ai_context": {
          "description": "Institutional facility source population mapped as Loan entity records for wholesale lending exposures."
        }
      },
      "type": "MAPS_TO"
    },
    {
      "id": "edge.concept.Loan.MAPS_TO.MAPS_TO.dataset.loan_exposure_report_lines",
      "source": "concept.Loan",
      "target": "dataset.loan_exposure_report_lines",
      "label": "MAPS_TO",
      "properties": {
        "description": "Prepared report-line population mapped back to Loan entity records for regulatory exposure presentation.",
        "fields": [
          "loan_exposure_report_lines.expected_loss_amount",
          "loan_exposure_report_lines.exposure_at_default_amount",
          "loan_exposure_report_lines.loan_id",
          "loan_exposure_report_lines.principal_amount",
          "loan_exposure_report_lines.report_currency"
        ],
        "ai_context": {
          "description": "Prepared report-line population mapped back to Loan entity records for regulatory exposure presentation."
        }
      },
      "type": "MAPS_TO"
    },
    {
      "id": "edge.concept.Loan.MAPS_TO.MAPS_TO.dataset.retail_loans",
      "source": "concept.Loan",
      "target": "dataset.retail_loans",
      "label": "MAPS_TO",
      "properties": {
        "description": "Retail loan source population mapped as Loan entity records for consumer lending exposures.",
        "fields": [
          "retail_loans.currency",
          "retail_loans.lgd",
          "retail_loans.loan_id",
          "retail_loans.origination_date",
          "retail_loans.pd",
          "retail_loans.principal_amount"
        ],
        "ai_context": {
          "description": "Retail loan source population mapped as Loan entity records for consumer lending exposures."
        }
      },
      "type": "MAPS_TO"
    },
    {
      "id": "edge.concept.Loan.MAPS_TO.MAPS_TO.metric.expected_loss_amount",
      "source": "concept.Loan",
      "target": "metric.expected_loss_amount",
      "label": "MAPS_TO",
      "properties": {
        "description": "Expected credit loss calculated from exposure at default, probability of default, and loss given default across loan source populations.",
        "source_field": "ontology_mappings.concept_mappings",
        "semantic_metric": "expected_loss_amount",
        "semantic_reference": "metric.expected_loss_amount"
      },
      "type": "MAPS_TO"
    },
    {
      "id": "edge.concept.Loan.MAPS_TO.MAPS_TO.metric.risk_weighted_exposure_amount",
      "source": "concept.Loan",
      "target": "metric.risk_weighted_exposure_amount",
      "label": "MAPS_TO",
      "properties": {
        "description": "Risk-weighted exposure amount calculated by applying default probability to retail principal and institutional notional amounts.",
        "source_field": "ontology_mappings.concept_mappings",
        "semantic_metric": "risk_weighted_exposure_amount",
        "semantic_reference": "metric.risk_weighted_exposure_amount"
      },
      "type": "MAPS_TO"
    },
    {
      "id": "edge.value.Loan.has_ExpectedLossAmount.MAPS_TO_FIELD.has_ExpectedLossAmount.field.loan_exposure_report_lines.expected_loss_amount",
      "source": "value.Loan.has_ExpectedLossAmount",
      "target": "field.loan_exposure_report_lines.expected_loss_amount",
      "label": "has_ExpectedLossAmount",
      "properties": {
        "description": "Loan.has_ExpectedLossAmount maps to semantic dataset field loan_exposure_report_lines.expected_loss_amount.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "loan_exposure_report_lines.expected_loss_amount"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_ExposureAtDefaultAmount.MAPS_TO_FIELD.has_ExposureAtDefaultAmount.field.institutional_loans.notional_amount",
      "source": "value.Loan.has_ExposureAtDefaultAmount",
      "target": "field.institutional_loans.notional_amount",
      "label": "has_ExposureAtDefaultAmount",
      "properties": {
        "description": "Loan.has_ExposureAtDefaultAmount maps to semantic dataset field institutional_loans.notional_amount.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "institutional_loans.notional_amount"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_ExposureAtDefaultAmount.MAPS_TO_FIELD.has_ExposureAtDefaultAmount.field.loan_exposure_report_lines.exposure_at_default_amount",
      "source": "value.Loan.has_ExposureAtDefaultAmount",
      "target": "field.loan_exposure_report_lines.exposure_at_default_amount",
      "label": "has_ExposureAtDefaultAmount",
      "properties": {
        "description": "Loan.has_ExposureAtDefaultAmount maps to semantic dataset field loan_exposure_report_lines.exposure_at_default_amount.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "loan_exposure_report_lines.exposure_at_default_amount"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_ExposureAtDefaultAmount.MAPS_TO_FIELD.has_ExposureAtDefaultAmount.field.retail_loans.principal_amount",
      "source": "value.Loan.has_ExposureAtDefaultAmount",
      "target": "field.retail_loans.principal_amount",
      "label": "has_ExposureAtDefaultAmount",
      "properties": {
        "description": "Loan.has_ExposureAtDefaultAmount maps to semantic dataset field retail_loans.principal_amount.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "retail_loans.principal_amount"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_LoanCurrency.MAPS_TO_FIELD.has_LoanCurrency.field.institutional_loans.exposure_currency",
      "source": "value.Loan.has_LoanCurrency",
      "target": "field.institutional_loans.exposure_currency",
      "label": "has_LoanCurrency",
      "properties": {
        "description": "Loan.has_LoanCurrency maps to semantic dataset field institutional_loans.exposure_currency.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "institutional_loans.exposure_currency"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_LoanCurrency.MAPS_TO_FIELD.has_LoanCurrency.field.loan_exposure_report_lines.report_currency",
      "source": "value.Loan.has_LoanCurrency",
      "target": "field.loan_exposure_report_lines.report_currency",
      "label": "has_LoanCurrency",
      "properties": {
        "description": "Loan.has_LoanCurrency maps to semantic dataset field loan_exposure_report_lines.report_currency.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "loan_exposure_report_lines.report_currency"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_LoanCurrency.MAPS_TO_FIELD.has_LoanCurrency.field.retail_loans.currency",
      "source": "value.Loan.has_LoanCurrency",
      "target": "field.retail_loans.currency",
      "label": "has_LoanCurrency",
      "properties": {
        "description": "Loan.has_LoanCurrency maps to semantic dataset field retail_loans.currency.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "retail_loans.currency"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_LoanIdentifier.MAPS_TO_FIELD.has_LoanIdentifier.field.institutional_loans.facility_id",
      "source": "value.Loan.has_LoanIdentifier",
      "target": "field.institutional_loans.facility_id",
      "label": "has_LoanIdentifier",
      "properties": {
        "description": "Loan.has_LoanIdentifier maps to semantic dataset field institutional_loans.facility_id.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "institutional_loans.facility_id"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_LoanIdentifier.MAPS_TO_FIELD.has_LoanIdentifier.field.loan_exposure_report_lines.loan_id",
      "source": "value.Loan.has_LoanIdentifier",
      "target": "field.loan_exposure_report_lines.loan_id",
      "label": "has_LoanIdentifier",
      "properties": {
        "description": "Loan.has_LoanIdentifier maps to semantic dataset field loan_exposure_report_lines.loan_id.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "loan_exposure_report_lines.loan_id"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_LoanIdentifier.MAPS_TO_FIELD.has_LoanIdentifier.field.retail_loans.loan_id",
      "source": "value.Loan.has_LoanIdentifier",
      "target": "field.retail_loans.loan_id",
      "label": "has_LoanIdentifier",
      "properties": {
        "description": "Loan.has_LoanIdentifier maps to semantic dataset field retail_loans.loan_id.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "retail_loans.loan_id"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_LossGivenDefault.MAPS_TO_FIELD.has_LossGivenDefault.field.institutional_loans.loss_given_default",
      "source": "value.Loan.has_LossGivenDefault",
      "target": "field.institutional_loans.loss_given_default",
      "label": "has_LossGivenDefault",
      "properties": {
        "description": "Loan.has_LossGivenDefault maps to semantic dataset field institutional_loans.loss_given_default.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "institutional_loans.loss_given_default"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_LossGivenDefault.MAPS_TO_FIELD.has_LossGivenDefault.field.retail_loans.lgd",
      "source": "value.Loan.has_LossGivenDefault",
      "target": "field.retail_loans.lgd",
      "label": "has_LossGivenDefault",
      "properties": {
        "description": "Loan.has_LossGivenDefault maps to semantic dataset field retail_loans.lgd.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "retail_loans.lgd"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_OriginationDate.MAPS_TO_FIELD.has_OriginationDate.field.institutional_loans.booking_date",
      "source": "value.Loan.has_OriginationDate",
      "target": "field.institutional_loans.booking_date",
      "label": "has_OriginationDate",
      "properties": {
        "description": "Loan.has_OriginationDate maps to semantic dataset field institutional_loans.booking_date.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "institutional_loans.booking_date"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_OriginationDate.MAPS_TO_FIELD.has_OriginationDate.field.retail_loans.origination_date",
      "source": "value.Loan.has_OriginationDate",
      "target": "field.retail_loans.origination_date",
      "label": "has_OriginationDate",
      "properties": {
        "description": "Loan.has_OriginationDate maps to semantic dataset field retail_loans.origination_date.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "retail_loans.origination_date"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_PrincipalAmount.MAPS_TO_FIELD.has_PrincipalAmount.field.institutional_loans.notional_amount",
      "source": "value.Loan.has_PrincipalAmount",
      "target": "field.institutional_loans.notional_amount",
      "label": "has_PrincipalAmount",
      "properties": {
        "description": "Loan.has_PrincipalAmount maps to semantic dataset field institutional_loans.notional_amount.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "institutional_loans.notional_amount"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_PrincipalAmount.MAPS_TO_FIELD.has_PrincipalAmount.field.loan_exposure_report_lines.principal_amount",
      "source": "value.Loan.has_PrincipalAmount",
      "target": "field.loan_exposure_report_lines.principal_amount",
      "label": "has_PrincipalAmount",
      "properties": {
        "description": "Loan.has_PrincipalAmount maps to semantic dataset field loan_exposure_report_lines.principal_amount.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "loan_exposure_report_lines.principal_amount"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_PrincipalAmount.MAPS_TO_FIELD.has_PrincipalAmount.field.retail_loans.principal_amount",
      "source": "value.Loan.has_PrincipalAmount",
      "target": "field.retail_loans.principal_amount",
      "label": "has_PrincipalAmount",
      "properties": {
        "description": "Loan.has_PrincipalAmount maps to semantic dataset field retail_loans.principal_amount.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "retail_loans.principal_amount"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_ProbabilityOfDefault.MAPS_TO_FIELD.has_ProbabilityOfDefault.field.institutional_loans.probability_default",
      "source": "value.Loan.has_ProbabilityOfDefault",
      "target": "field.institutional_loans.probability_default",
      "label": "has_ProbabilityOfDefault",
      "properties": {
        "description": "Loan.has_ProbabilityOfDefault maps to semantic dataset field institutional_loans.probability_default.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "institutional_loans.probability_default"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_ProbabilityOfDefault.MAPS_TO_FIELD.has_ProbabilityOfDefault.field.retail_loans.pd",
      "source": "value.Loan.has_ProbabilityOfDefault",
      "target": "field.retail_loans.pd",
      "label": "has_ProbabilityOfDefault",
      "properties": {
        "description": "Loan.has_ProbabilityOfDefault maps to semantic dataset field retail_loans.pd.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "retail_loans.pd"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_ExpectedLossAmount.DERIVED_BY.expected_loss_amount.metric.expected_loss_amount",
      "source": "value.Loan.has_ExpectedLossAmount",
      "target": "metric.expected_loss_amount",
      "label": "expected_loss_amount",
      "properties": {
        "description": "Loan.has_ExpectedLossAmount is derived by semantic metric expected_loss_amount.",
        "source_field": "ontology_mappings.concept_mappings",
        "semantic_metric": "expected_loss_amount",
        "semantic_reference": "metric.expected_loss_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default",
        "metric_value_binding": true
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.value.Loan.has_ExpectedLossAmount.DERIVED_BY.institutional_loans.loss_given_default.field.institutional_loans.loss_given_default",
      "source": "value.Loan.has_ExpectedLossAmount",
      "target": "field.institutional_loans.loss_given_default",
      "label": "institutional_loans.loss_given_default",
      "properties": {
        "description": "Metric-backed field Loan.has_ExpectedLossAmount uses semantic dataset field institutional_loans.loss_given_default.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "expected_loss_amount",
        "semantic_reference": "metric.expected_loss_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default",
        "dataset_field": "institutional_loans.loss_given_default"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.value.Loan.has_ExpectedLossAmount.DERIVED_BY.institutional_loans.notional_amount.field.institutional_loans.notional_amount",
      "source": "value.Loan.has_ExpectedLossAmount",
      "target": "field.institutional_loans.notional_amount",
      "label": "institutional_loans.notional_amount",
      "properties": {
        "description": "Metric-backed field Loan.has_ExpectedLossAmount uses semantic dataset field institutional_loans.notional_amount.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "expected_loss_amount",
        "semantic_reference": "metric.expected_loss_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default",
        "dataset_field": "institutional_loans.notional_amount"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.value.Loan.has_ExpectedLossAmount.DERIVED_BY.institutional_loans.probability_default.field.institutional_loans.probability_default",
      "source": "value.Loan.has_ExpectedLossAmount",
      "target": "field.institutional_loans.probability_default",
      "label": "institutional_loans.probability_default",
      "properties": {
        "description": "Metric-backed field Loan.has_ExpectedLossAmount uses semantic dataset field institutional_loans.probability_default.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "expected_loss_amount",
        "semantic_reference": "metric.expected_loss_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default",
        "dataset_field": "institutional_loans.probability_default"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.value.Loan.has_ExpectedLossAmount.DERIVED_BY.retail_loans.lgd.field.retail_loans.lgd",
      "source": "value.Loan.has_ExpectedLossAmount",
      "target": "field.retail_loans.lgd",
      "label": "retail_loans.lgd",
      "properties": {
        "description": "Metric-backed field Loan.has_ExpectedLossAmount uses semantic dataset field retail_loans.lgd.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "expected_loss_amount",
        "semantic_reference": "metric.expected_loss_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default",
        "dataset_field": "retail_loans.lgd"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.value.Loan.has_ExpectedLossAmount.DERIVED_BY.retail_loans.pd.field.retail_loans.pd",
      "source": "value.Loan.has_ExpectedLossAmount",
      "target": "field.retail_loans.pd",
      "label": "retail_loans.pd",
      "properties": {
        "description": "Metric-backed field Loan.has_ExpectedLossAmount uses semantic dataset field retail_loans.pd.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "expected_loss_amount",
        "semantic_reference": "metric.expected_loss_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default",
        "dataset_field": "retail_loans.pd"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.value.Loan.has_ExpectedLossAmount.DERIVED_BY.retail_loans.principal_amount.field.retail_loans.principal_amount",
      "source": "value.Loan.has_ExpectedLossAmount",
      "target": "field.retail_loans.principal_amount",
      "label": "retail_loans.principal_amount",
      "properties": {
        "description": "Metric-backed field Loan.has_ExpectedLossAmount uses semantic dataset field retail_loans.principal_amount.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "expected_loss_amount",
        "semantic_reference": "metric.expected_loss_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default",
        "dataset_field": "retail_loans.principal_amount"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.value.Loan.has_RiskWeightedExposureAmount.DERIVED_BY.risk_weighted_exposure_amount.metric.risk_weighted_exposure_amount",
      "source": "value.Loan.has_RiskWeightedExposureAmount",
      "target": "metric.risk_weighted_exposure_amount",
      "label": "risk_weighted_exposure_amount",
      "properties": {
        "description": "Loan.has_RiskWeightedExposureAmount is derived by semantic metric risk_weighted_exposure_amount.",
        "source_field": "ontology_mappings.concept_mappings",
        "semantic_metric": "risk_weighted_exposure_amount",
        "semantic_reference": "metric.risk_weighted_exposure_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd + institutional_loans.notional_amount * institutional_loans.probability_default",
        "metric_value_binding": true
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.value.Loan.has_RiskWeightedExposureAmount.DERIVED_BY.institutional_loans.notional_amount.field.institutional_loans.notional_amount",
      "source": "value.Loan.has_RiskWeightedExposureAmount",
      "target": "field.institutional_loans.notional_amount",
      "label": "institutional_loans.notional_amount",
      "properties": {
        "description": "Metric-backed field Loan.has_RiskWeightedExposureAmount uses semantic dataset field institutional_loans.notional_amount.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "risk_weighted_exposure_amount",
        "semantic_reference": "metric.risk_weighted_exposure_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd + institutional_loans.notional_amount * institutional_loans.probability_default",
        "dataset_field": "institutional_loans.notional_amount"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.value.Loan.has_RiskWeightedExposureAmount.DERIVED_BY.institutional_loans.probability_default.field.institutional_loans.probability_default",
      "source": "value.Loan.has_RiskWeightedExposureAmount",
      "target": "field.institutional_loans.probability_default",
      "label": "institutional_loans.probability_default",
      "properties": {
        "description": "Metric-backed field Loan.has_RiskWeightedExposureAmount uses semantic dataset field institutional_loans.probability_default.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "risk_weighted_exposure_amount",
        "semantic_reference": "metric.risk_weighted_exposure_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd + institutional_loans.notional_amount * institutional_loans.probability_default",
        "dataset_field": "institutional_loans.probability_default"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.value.Loan.has_RiskWeightedExposureAmount.DERIVED_BY.retail_loans.pd.field.retail_loans.pd",
      "source": "value.Loan.has_RiskWeightedExposureAmount",
      "target": "field.retail_loans.pd",
      "label": "retail_loans.pd",
      "properties": {
        "description": "Metric-backed field Loan.has_RiskWeightedExposureAmount uses semantic dataset field retail_loans.pd.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "risk_weighted_exposure_amount",
        "semantic_reference": "metric.risk_weighted_exposure_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd + institutional_loans.notional_amount * institutional_loans.probability_default",
        "dataset_field": "retail_loans.pd"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.value.Loan.has_RiskWeightedExposureAmount.DERIVED_BY.retail_loans.principal_amount.field.retail_loans.principal_amount",
      "source": "value.Loan.has_RiskWeightedExposureAmount",
      "target": "field.retail_loans.principal_amount",
      "label": "retail_loans.principal_amount",
      "properties": {
        "description": "Metric-backed field Loan.has_RiskWeightedExposureAmount uses semantic dataset field retail_loans.principal_amount.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "risk_weighted_exposure_amount",
        "semantic_reference": "metric.risk_weighted_exposure_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd + institutional_loans.notional_amount * institutional_loans.probability_default",
        "dataset_field": "retail_loans.principal_amount"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.concept.LoanProduct.MAPS_TO.MAPS_TO.dataset.loan_products",
      "source": "concept.LoanProduct",
      "target": "dataset.loan_products",
      "label": "MAPS_TO",
      "properties": {
        "description": "Product reference population mapped as LoanProduct entity records used for regulatory product classification.",
        "fields": [
          "loan_products.product_id",
          "loan_products.product_type",
          "loan_products.regulatory_product_class"
        ],
        "ai_context": {
          "description": "Product reference population mapped as LoanProduct entity records used for regulatory product classification."
        }
      },
      "type": "MAPS_TO"
    },
    {
      "id": "edge.value.LoanProduct.has_ProductIdentifier.MAPS_TO_FIELD.has_ProductIdentifier.field.loan_products.product_id",
      "source": "value.LoanProduct.has_ProductIdentifier",
      "target": "field.loan_products.product_id",
      "label": "has_ProductIdentifier",
      "properties": {
        "description": "LoanProduct.has_ProductIdentifier maps to semantic dataset field loan_products.product_id.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "loan_products.product_id"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.LoanProduct.has_ProductType.MAPS_TO_FIELD.has_ProductType.field.loan_products.product_type",
      "source": "value.LoanProduct.has_ProductType",
      "target": "field.loan_products.product_type",
      "label": "has_ProductType",
      "properties": {
        "description": "LoanProduct.has_ProductType maps to semantic dataset field loan_products.product_type.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "loan_products.product_type"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.LoanProduct.has_RegulatoryProductClass.MAPS_TO_FIELD.has_RegulatoryProductClass.field.loan_products.regulatory_product_class",
      "source": "value.LoanProduct.has_RegulatoryProductClass",
      "target": "field.loan_products.regulatory_product_class",
      "label": "has_RegulatoryProductClass",
      "properties": {
        "description": "LoanProduct.has_RegulatoryProductClass maps to semantic dataset field loan_products.regulatory_product_class.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "loan_products.regulatory_product_class"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.requirement.item.REQUIRES_CONCEPT.REQUIRES_CONCEPT.concept.Borrower",
      "source": "requirement.item",
      "target": "concept.Borrower",
      "label": "REQUIRES_CONCEPT",
      "properties": {
        "description": "需求需要 Borrower 作为承担还款责任的客户或法律实体语义对象，用于说明每笔贷款暴露归属的借款人。",
        "source_field": "reporting_requirements.semantic_scope.concepts",
        "required_fields": [
          {
            "name": "借款人标识",
            "semantic_reference": "Borrower.has_CustomerIdentifier",
            "description": "需求需要借款人标识，用于将贷款暴露归属到承担还款责任的客户或法律实体。"
          }
        ]
      },
      "type": "REQUIRES_CONCEPT"
    },
    {
      "id": "edge.requirement.item.REQUIRES_CONCEPT.REQUIRES_CONCEPT.concept.Loan",
      "source": "requirement.item",
      "target": "concept.Loan",
      "label": "REQUIRES_CONCEPT",
      "properties": {
        "description": "需求需要 Loan 作为贷款风险暴露的核心语义对象，用于表达每笔零售或机构贷款的标识、本金、风险暴露和预期损失口径。",
        "source_field": "reporting_requirements.semantic_scope.concepts",
        "required_fields": [
          {
            "name": "贷款标识",
            "semantic_reference": "Loan.has_LoanIdentifier",
            "description": "需求需要贷款标识，用于唯一识别每条报送贷款或授信并支持行级对账。"
          },
          {
            "name": "本金金额",
            "semantic_reference": "Loan.has_PrincipalAmount",
            "description": "需求需要本金金额，用于作为贷款风险暴露和预期损失计算的基础金额。"
          },
          {
            "name": "风险暴露金额",
            "semantic_reference": "Loan.has_ExposureAtDefaultAmount",
            "description": "需求需要风险暴露金额，用于展示监管口径下违约时风险暴露规模。"
          },
          {
            "name": "预期损失金额",
            "semantic_reference": "Loan.has_ExpectedLossAmount",
            "description": "需求需要预期损失金额，用于按风险暴露金额、违约概率和违约损失率计算监管信用风险损失。"
          }
        ]
      },
      "type": "REQUIRES_CONCEPT"
    },
    {
      "id": "edge.requirement.item.REQUIRES_CONCEPT.REQUIRES_CONCEPT.concept.LoanProduct",
      "source": "requirement.item",
      "target": "concept.LoanProduct",
      "label": "REQUIRES_CONCEPT",
      "properties": {
        "description": "需求需要 LoanProduct 作为贷款产品语义对象，用于按监管产品类别解释和汇总贷款风险暴露。",
        "source_field": "reporting_requirements.semantic_scope.concepts",
        "required_fields": [
          {
            "name": "产品标识",
            "semantic_reference": "LoanProduct.has_ProductIdentifier",
            "description": "需求需要产品标识，用于按照监管产品类别汇总贷款风险暴露。"
          }
        ]
      },
      "type": "REQUIRES_CONCEPT"
    },
    {
      "id": "edge.requirement.item.CONTAINS.CONTAINS.requirement_item..Loan.has_LoanIdentifier",
      "source": "requirement.item",
      "target": "requirement_item..Loan.has_LoanIdentifier",
      "label": "CONTAINS",
      "properties": {
        "description": "需求需要贷款标识，用于唯一识别每条报送贷款或授信并支持行级对账。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.requirement_item..Loan.has_LoanIdentifier.REQUIRES_SEMANTIC_FIELD.REQUIRES_SEMANTIC_FIELD.value.Loan.has_LoanIdentifier",
      "source": "requirement_item..Loan.has_LoanIdentifier",
      "target": "value.Loan.has_LoanIdentifier",
      "label": "REQUIRES_SEMANTIC_FIELD",
      "properties": {
        "description": "需求需要贷款标识，用于唯一识别每条报送贷款或授信并支持行级对账。",
        "required_field": {
          "name": "贷款标识",
          "description": "需求需要贷款标识，用于唯一识别每条报送贷款或授信并支持行级对账。",
          "semantic_reference": "Loan.has_LoanIdentifier",
          "required": true
        }
      },
      "type": "REQUIRES_SEMANTIC_FIELD"
    },
    {
      "id": "edge.requirement.item.CONTAINS.CONTAINS.requirement_item..Borrower.has_CustomerIdentifier",
      "source": "requirement.item",
      "target": "requirement_item..Borrower.has_CustomerIdentifier",
      "label": "CONTAINS",
      "properties": {
        "description": "需求需要借款人标识，用于将贷款暴露归属到承担还款责任的客户或法律实体。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.requirement_item..Borrower.has_CustomerIdentifier.REQUIRES_SEMANTIC_FIELD.REQUIRES_SEMANTIC_FIELD.value.Borrower.has_CustomerIdentifier",
      "source": "requirement_item..Borrower.has_CustomerIdentifier",
      "target": "value.Borrower.has_CustomerIdentifier",
      "label": "REQUIRES_SEMANTIC_FIELD",
      "properties": {
        "description": "需求需要借款人标识，用于将贷款暴露归属到承担还款责任的客户或法律实体。",
        "required_field": {
          "name": "借款人标识",
          "description": "需求需要借款人标识，用于将贷款暴露归属到承担还款责任的客户或法律实体。",
          "semantic_reference": "Borrower.has_CustomerIdentifier",
          "required": true
        }
      },
      "type": "REQUIRES_SEMANTIC_FIELD"
    },
    {
      "id": "edge.requirement.item.CONTAINS.CONTAINS.requirement_item..LoanProduct.has_ProductIdentifier",
      "source": "requirement.item",
      "target": "requirement_item..LoanProduct.has_ProductIdentifier",
      "label": "CONTAINS",
      "properties": {
        "description": "需求需要产品标识，用于按照监管产品类别汇总贷款风险暴露。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.requirement_item..LoanProduct.has_ProductIdentifier.REQUIRES_SEMANTIC_FIELD.REQUIRES_SEMANTIC_FIELD.value.LoanProduct.has_ProductIdentifier",
      "source": "requirement_item..LoanProduct.has_ProductIdentifier",
      "target": "value.LoanProduct.has_ProductIdentifier",
      "label": "REQUIRES_SEMANTIC_FIELD",
      "properties": {
        "description": "需求需要产品标识，用于按照监管产品类别汇总贷款风险暴露。",
        "required_field": {
          "name": "产品标识",
          "description": "需求需要产品标识，用于按照监管产品类别汇总贷款风险暴露。",
          "semantic_reference": "LoanProduct.has_ProductIdentifier",
          "required": true
        }
      },
      "type": "REQUIRES_SEMANTIC_FIELD"
    },
    {
      "id": "edge.requirement.item.CONTAINS.CONTAINS.requirement_item..Loan.has_PrincipalAmount",
      "source": "requirement.item",
      "target": "requirement_item..Loan.has_PrincipalAmount",
      "label": "CONTAINS",
      "properties": {
        "description": "需求需要本金金额，用于作为贷款风险暴露和预期损失计算的基础金额。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.requirement_item..Loan.has_PrincipalAmount.REQUIRES_SEMANTIC_FIELD.REQUIRES_SEMANTIC_FIELD.value.Loan.has_PrincipalAmount",
      "source": "requirement_item..Loan.has_PrincipalAmount",
      "target": "value.Loan.has_PrincipalAmount",
      "label": "REQUIRES_SEMANTIC_FIELD",
      "properties": {
        "description": "需求需要本金金额，用于作为贷款风险暴露和预期损失计算的基础金额。",
        "required_field": {
          "name": "本金金额",
          "description": "需求需要本金金额，用于作为贷款风险暴露和预期损失计算的基础金额。",
          "semantic_reference": "Loan.has_PrincipalAmount",
          "required": true
        }
      },
      "type": "REQUIRES_SEMANTIC_FIELD"
    },
    {
      "id": "edge.requirement.item.CONTAINS.CONTAINS.requirement_item..Loan.has_ExposureAtDefaultAmount",
      "source": "requirement.item",
      "target": "requirement_item..Loan.has_ExposureAtDefaultAmount",
      "label": "CONTAINS",
      "properties": {
        "description": "需求需要风险暴露金额，用于展示监管口径下违约时风险暴露规模。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.requirement_item..Loan.has_ExposureAtDefaultAmount.REQUIRES_SEMANTIC_FIELD.REQUIRES_SEMANTIC_FIELD.value.Loan.has_ExposureAtDefaultAmount",
      "source": "requirement_item..Loan.has_ExposureAtDefaultAmount",
      "target": "value.Loan.has_ExposureAtDefaultAmount",
      "label": "REQUIRES_SEMANTIC_FIELD",
      "properties": {
        "description": "需求需要风险暴露金额，用于展示监管口径下违约时风险暴露规模。",
        "required_field": {
          "name": "风险暴露金额",
          "description": "需求需要风险暴露金额，用于展示监管口径下违约时风险暴露规模。",
          "semantic_reference": "Loan.has_ExposureAtDefaultAmount",
          "required": true
        }
      },
      "type": "REQUIRES_SEMANTIC_FIELD"
    },
    {
      "id": "edge.requirement.item.CONTAINS.CONTAINS.requirement_item..Loan.has_ExpectedLossAmount",
      "source": "requirement.item",
      "target": "requirement_item..Loan.has_ExpectedLossAmount",
      "label": "CONTAINS",
      "properties": {
        "description": "需求需要预期损失金额，用于按风险暴露金额、违约概率和违约损失率计算监管信用风险损失。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.requirement_item..Loan.has_ExpectedLossAmount.DERIVED_FROM.DERIVED_FROM.value.Loan.has_ExposureAtDefaultAmount",
      "source": "requirement_item..Loan.has_ExpectedLossAmount",
      "target": "value.Loan.has_ExposureAtDefaultAmount",
      "label": "DERIVED_FROM",
      "properties": {
        "description": "需求需要预期损失金额，用于按风险暴露金额、违约概率和违约损失率计算监管信用风险损失。"
      },
      "type": "DERIVED_FROM"
    },
    {
      "id": "edge.requirement_item..Loan.has_ExpectedLossAmount.DERIVED_FROM.DERIVED_FROM.value.Loan.has_ProbabilityOfDefault",
      "source": "requirement_item..Loan.has_ExpectedLossAmount",
      "target": "value.Loan.has_ProbabilityOfDefault",
      "label": "DERIVED_FROM",
      "properties": {
        "description": "需求需要预期损失金额，用于按风险暴露金额、违约概率和违约损失率计算监管信用风险损失。"
      },
      "type": "DERIVED_FROM"
    },
    {
      "id": "edge.requirement_item..Loan.has_ExpectedLossAmount.DERIVED_FROM.DERIVED_FROM.value.Loan.has_LossGivenDefault",
      "source": "requirement_item..Loan.has_ExpectedLossAmount",
      "target": "value.Loan.has_LossGivenDefault",
      "label": "DERIVED_FROM",
      "properties": {
        "description": "需求需要预期损失金额，用于按风险暴露金额、违约概率和违约损失率计算监管信用风险损失。"
      },
      "type": "DERIVED_FROM"
    },
    {
      "id": "edge.report_impl.item.IMPLEMENTS.IMPLEMENTS.requirement.item",
      "source": "report_impl.item",
      "target": "requirement.item",
      "label": "IMPLEMENTS",
      "properties": {
        "description": "说明每日贷款风险暴露报表字段如何从零售贷款、机构授信、借款人主数据、产品主数据和已准备的报表明细数据中取数、归一化并满足监管需求口径；该逻辑不创建或拥有物理表。"
      },
      "type": "IMPLEMENTS"
    },
    {
      "id": "edge.report_impl.item.CONTAINS.CONTAINS.implementation_field.loan_exposure_report_lines.loan_id",
      "source": "report_impl.item",
      "target": "implementation_field.loan_exposure_report_lines.loan_id",
      "label": "CONTAINS",
      "properties": {
        "description": "数据逻辑说明报表明细字段 loan_id 如何承载贷款标识需求，并兼容零售贷款号和机构授信号来源。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.loan_id.MAPS_TO_FIELD.MAPS_TO_FIELD.field.loan_exposure_report_lines.loan_id",
      "source": "implementation_field.loan_exposure_report_lines.loan_id",
      "target": "field.loan_exposure_report_lines.loan_id",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 loan_id 如何承载贷款标识需求，并兼容零售贷款号和机构授信号来源。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.loan_id.SOURCE_FIELD.SOURCE_FIELD.field.institutional_loans.facility_id",
      "source": "implementation_field.loan_exposure_report_lines.loan_id",
      "target": "field.institutional_loans.facility_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 loan_id 如何承载贷款标识需求，并兼容零售贷款号和机构授信号来源。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.loan_id.SOURCE_FIELD.SOURCE_FIELD.field.retail_loans.loan_id",
      "source": "implementation_field.loan_exposure_report_lines.loan_id",
      "target": "field.retail_loans.loan_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 loan_id 如何承载贷款标识需求，并兼容零售贷款号和机构授信号来源。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.loan_id.IMPLEMENTS_FIELD.IMPLEMENTS_FIELD.requirement_item..Loan.has_LoanIdentifier",
      "source": "implementation_field.loan_exposure_report_lines.loan_id",
      "target": "requirement_item..Loan.has_LoanIdentifier",
      "label": "IMPLEMENTS_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 loan_id 如何承载贷款标识需求，并兼容零售贷款号和机构授信号来源。",
        "requirement": "贷款风险暴露报送需求",
        "requirement_field": "贷款标识",
        "expression": "COALESCE(retail_loans.loan_id, institutional_loans.facility_id, loan_exposure_report_lines.loan_id)"
      },
      "type": "IMPLEMENTS_FIELD"
    },
    {
      "id": "edge.report_impl.item.CONTAINS.CONTAINS.implementation_field.loan_exposure_report_lines.borrower_id",
      "source": "report_impl.item",
      "target": "implementation_field.loan_exposure_report_lines.borrower_id",
      "label": "CONTAINS",
      "properties": {
        "description": "数据逻辑说明报表明细字段 borrower_id 如何承载借款人标识需求，并对齐客户主数据中的借款人记录。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.borrower_id.MAPS_TO_FIELD.MAPS_TO_FIELD.field.loan_exposure_report_lines.borrower_id",
      "source": "implementation_field.loan_exposure_report_lines.borrower_id",
      "target": "field.loan_exposure_report_lines.borrower_id",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 borrower_id 如何承载借款人标识需求，并对齐客户主数据中的借款人记录。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.borrower_id.SOURCE_FIELD.SOURCE_FIELD.field.institutional_loans.legal_entity_id",
      "source": "implementation_field.loan_exposure_report_lines.borrower_id",
      "target": "field.institutional_loans.legal_entity_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 borrower_id 如何承载借款人标识需求，并对齐客户主数据中的借款人记录。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.borrower_id.SOURCE_FIELD.SOURCE_FIELD.field.retail_loans.borrower_id",
      "source": "implementation_field.loan_exposure_report_lines.borrower_id",
      "target": "field.retail_loans.borrower_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 borrower_id 如何承载借款人标识需求，并对齐客户主数据中的借款人记录。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.borrower_id.IMPLEMENTS_FIELD.IMPLEMENTS_FIELD.requirement_item..Borrower.has_CustomerIdentifier",
      "source": "implementation_field.loan_exposure_report_lines.borrower_id",
      "target": "requirement_item..Borrower.has_CustomerIdentifier",
      "label": "IMPLEMENTS_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 borrower_id 如何承载借款人标识需求，并对齐客户主数据中的借款人记录。",
        "requirement": "贷款风险暴露报送需求",
        "requirement_field": "借款人标识",
        "expression": "COALESCE(retail_loans.borrower_id, institutional_loans.legal_entity_id, loan_exposure_report_lines.borrower_id)"
      },
      "type": "IMPLEMENTS_FIELD"
    },
    {
      "id": "edge.report_impl.item.CONTAINS.CONTAINS.implementation_field.loan_exposure_report_lines.product_id",
      "source": "report_impl.item",
      "target": "implementation_field.loan_exposure_report_lines.product_id",
      "label": "CONTAINS",
      "properties": {
        "description": "数据逻辑说明报表明细字段 product_id 如何承载产品标识需求，并支持与产品主数据的监管分类对齐。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.product_id.MAPS_TO_FIELD.MAPS_TO_FIELD.field.loan_exposure_report_lines.product_id",
      "source": "implementation_field.loan_exposure_report_lines.product_id",
      "target": "field.loan_exposure_report_lines.product_id",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 product_id 如何承载产品标识需求，并支持与产品主数据的监管分类对齐。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.product_id.SOURCE_FIELD.SOURCE_FIELD.field.institutional_loans.product_code",
      "source": "implementation_field.loan_exposure_report_lines.product_id",
      "target": "field.institutional_loans.product_code",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 product_id 如何承载产品标识需求，并支持与产品主数据的监管分类对齐。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.product_id.SOURCE_FIELD.SOURCE_FIELD.field.retail_loans.product_id",
      "source": "implementation_field.loan_exposure_report_lines.product_id",
      "target": "field.retail_loans.product_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 product_id 如何承载产品标识需求，并支持与产品主数据的监管分类对齐。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.product_id.IMPLEMENTS_FIELD.IMPLEMENTS_FIELD.requirement_item..LoanProduct.has_ProductIdentifier",
      "source": "implementation_field.loan_exposure_report_lines.product_id",
      "target": "requirement_item..LoanProduct.has_ProductIdentifier",
      "label": "IMPLEMENTS_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 product_id 如何承载产品标识需求，并支持与产品主数据的监管分类对齐。",
        "requirement": "贷款风险暴露报送需求",
        "requirement_field": "产品标识",
        "expression": "COALESCE(retail_loans.product_id, institutional_loans.product_code, loan_exposure_report_lines.product_id)"
      },
      "type": "IMPLEMENTS_FIELD"
    },
    {
      "id": "edge.report_impl.item.CONTAINS.CONTAINS.implementation_field.loan_exposure_report_lines.principal_amount",
      "source": "report_impl.item",
      "target": "implementation_field.loan_exposure_report_lines.principal_amount",
      "label": "CONTAINS",
      "properties": {
        "description": "数据逻辑说明报表明细字段 principal_amount 如何承载本金金额需求，并统一零售本金与机构授信名义金额。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.principal_amount.MAPS_TO_FIELD.MAPS_TO_FIELD.field.loan_exposure_report_lines.principal_amount",
      "source": "implementation_field.loan_exposure_report_lines.principal_amount",
      "target": "field.loan_exposure_report_lines.principal_amount",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 principal_amount 如何承载本金金额需求，并统一零售本金与机构授信名义金额。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.principal_amount.SOURCE_FIELD.SOURCE_FIELD.field.institutional_loans.notional_amount",
      "source": "implementation_field.loan_exposure_report_lines.principal_amount",
      "target": "field.institutional_loans.notional_amount",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 principal_amount 如何承载本金金额需求，并统一零售本金与机构授信名义金额。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.principal_amount.SOURCE_FIELD.SOURCE_FIELD.field.retail_loans.principal_amount",
      "source": "implementation_field.loan_exposure_report_lines.principal_amount",
      "target": "field.retail_loans.principal_amount",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 principal_amount 如何承载本金金额需求，并统一零售本金与机构授信名义金额。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.principal_amount.IMPLEMENTS_FIELD.IMPLEMENTS_FIELD.requirement_item..Loan.has_PrincipalAmount",
      "source": "implementation_field.loan_exposure_report_lines.principal_amount",
      "target": "requirement_item..Loan.has_PrincipalAmount",
      "label": "IMPLEMENTS_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 principal_amount 如何承载本金金额需求，并统一零售本金与机构授信名义金额。",
        "requirement": "贷款风险暴露报送需求",
        "requirement_field": "本金金额",
        "expression": "COALESCE(retail_loans.principal_amount, institutional_loans.notional_amount, loan_exposure_report_lines.principal_amount)"
      },
      "type": "IMPLEMENTS_FIELD"
    },
    {
      "id": "edge.report_impl.item.CONTAINS.CONTAINS.implementation_field.loan_exposure_report_lines.exposure_at_default_amount",
      "source": "report_impl.item",
      "target": "implementation_field.loan_exposure_report_lines.exposure_at_default_amount",
      "label": "CONTAINS",
      "properties": {
        "description": "数据逻辑说明报表明细字段 exposure_at_default_amount 如何承载风险暴露金额需求，并作为监管信用风险计算基础。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.exposure_at_default_amount.MAPS_TO_FIELD.MAPS_TO_FIELD.field.loan_exposure_report_lines.exposure_at_default_amount",
      "source": "implementation_field.loan_exposure_report_lines.exposure_at_default_amount",
      "target": "field.loan_exposure_report_lines.exposure_at_default_amount",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 exposure_at_default_amount 如何承载风险暴露金额需求，并作为监管信用风险计算基础。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.exposure_at_default_amount.SOURCE_FIELD.SOURCE_FIELD.field.institutional_loans.notional_amount",
      "source": "implementation_field.loan_exposure_report_lines.exposure_at_default_amount",
      "target": "field.institutional_loans.notional_amount",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 exposure_at_default_amount 如何承载风险暴露金额需求，并作为监管信用风险计算基础。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.exposure_at_default_amount.SOURCE_FIELD.SOURCE_FIELD.field.retail_loans.principal_amount",
      "source": "implementation_field.loan_exposure_report_lines.exposure_at_default_amount",
      "target": "field.retail_loans.principal_amount",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 exposure_at_default_amount 如何承载风险暴露金额需求，并作为监管信用风险计算基础。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.exposure_at_default_amount.IMPLEMENTS_FIELD.IMPLEMENTS_FIELD.requirement_item..Loan.has_ExposureAtDefaultAmount",
      "source": "implementation_field.loan_exposure_report_lines.exposure_at_default_amount",
      "target": "requirement_item..Loan.has_ExposureAtDefaultAmount",
      "label": "IMPLEMENTS_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 exposure_at_default_amount 如何承载风险暴露金额需求，并作为监管信用风险计算基础。",
        "requirement": "贷款风险暴露报送需求",
        "requirement_field": "风险暴露金额",
        "expression": "COALESCE(loan_exposure_report_lines.exposure_at_default_amount, retail_loans.principal_amount, institutional_loans.notional_amount)"
      },
      "type": "IMPLEMENTS_FIELD"
    },
    {
      "id": "edge.report_impl.item.CONTAINS.CONTAINS.implementation_field.loan_exposure_report_lines.expected_loss_amount",
      "source": "report_impl.item",
      "target": "implementation_field.loan_exposure_report_lines.expected_loss_amount",
      "label": "CONTAINS",
      "properties": {
        "description": "数据逻辑说明报表明细字段 expected_loss_amount 如何承载预期损失金额需求，并由风险暴露、违约概率和违约损失率计算得到。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.expected_loss_amount.MAPS_TO_FIELD.MAPS_TO_FIELD.field.loan_exposure_report_lines.expected_loss_amount",
      "source": "implementation_field.loan_exposure_report_lines.expected_loss_amount",
      "target": "field.loan_exposure_report_lines.expected_loss_amount",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 expected_loss_amount 如何承载预期损失金额需求，并由风险暴露、违约概率和违约损失率计算得到。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.expected_loss_amount.SOURCE_FIELD.SOURCE_FIELD.field.institutional_loans.loss_given_default",
      "source": "implementation_field.loan_exposure_report_lines.expected_loss_amount",
      "target": "field.institutional_loans.loss_given_default",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 expected_loss_amount 如何承载预期损失金额需求，并由风险暴露、违约概率和违约损失率计算得到。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.expected_loss_amount.SOURCE_FIELD.SOURCE_FIELD.field.institutional_loans.notional_amount",
      "source": "implementation_field.loan_exposure_report_lines.expected_loss_amount",
      "target": "field.institutional_loans.notional_amount",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 expected_loss_amount 如何承载预期损失金额需求，并由风险暴露、违约概率和违约损失率计算得到。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.expected_loss_amount.SOURCE_FIELD.SOURCE_FIELD.field.institutional_loans.probability_default",
      "source": "implementation_field.loan_exposure_report_lines.expected_loss_amount",
      "target": "field.institutional_loans.probability_default",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 expected_loss_amount 如何承载预期损失金额需求，并由风险暴露、违约概率和违约损失率计算得到。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.expected_loss_amount.SOURCE_FIELD.SOURCE_FIELD.field.retail_loans.lgd",
      "source": "implementation_field.loan_exposure_report_lines.expected_loss_amount",
      "target": "field.retail_loans.lgd",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 expected_loss_amount 如何承载预期损失金额需求，并由风险暴露、违约概率和违约损失率计算得到。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.expected_loss_amount.SOURCE_FIELD.SOURCE_FIELD.field.retail_loans.pd",
      "source": "implementation_field.loan_exposure_report_lines.expected_loss_amount",
      "target": "field.retail_loans.pd",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 expected_loss_amount 如何承载预期损失金额需求，并由风险暴露、违约概率和违约损失率计算得到。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.expected_loss_amount.SOURCE_FIELD.SOURCE_FIELD.field.retail_loans.principal_amount",
      "source": "implementation_field.loan_exposure_report_lines.expected_loss_amount",
      "target": "field.retail_loans.principal_amount",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 expected_loss_amount 如何承载预期损失金额需求，并由风险暴露、违约概率和违约损失率计算得到。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.expected_loss_amount.IMPLEMENTS_FIELD.IMPLEMENTS_FIELD.requirement_item..Loan.has_ExpectedLossAmount",
      "source": "implementation_field.loan_exposure_report_lines.expected_loss_amount",
      "target": "requirement_item..Loan.has_ExpectedLossAmount",
      "label": "IMPLEMENTS_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 expected_loss_amount 如何承载预期损失金额需求，并由风险暴露、违约概率和违约损失率计算得到。",
        "requirement": "贷款风险暴露报送需求",
        "requirement_field": "预期损失金额",
        "expression": "COALESCE(loan_exposure_report_lines.expected_loss_amount, retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd, institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default)"
      },
      "type": "IMPLEMENTS_FIELD"
    },
    {
      "id": "edge.report_impl.item.SOURCE_TABLE.SOURCE_TABLE.dataset.institutional_loans",
      "source": "report_impl.item",
      "target": "dataset.institutional_loans",
      "label": "SOURCE_TABLE",
      "properties": {
        "description": "数据逻辑说明报表明细字段 loan_id 如何承载贷款标识需求，并兼容零售贷款号和机构授信号来源。；数据逻辑说明报表明细字段 borrower_id 如何承载借款人标识需求，并对齐客户主数据中的借款人记录。；数据逻辑说明报表明细字段 product_id 如何承载产品标识需求，并支持与产品主数据的监管分类对齐。；数据逻辑说明报表明细字段 principal_amount 如何承载本金金额需求，并统一零售本金与机构授信名义金额。；数据逻辑说明报表明细字段 exposure_at_default_amount 如何承载风险暴露金额需求，并作为监管信用风险计算基础。；数据逻辑说明报表明细字段 expected_loss_amount 如何承载预期损失金额需求，并由风险暴露、违约概率和违约损失率计算得到。",
        "source_fields": [
          "institutional_loans.facility_id",
          "institutional_loans.legal_entity_id",
          "institutional_loans.loss_given_default",
          "institutional_loans.notional_amount",
          "institutional_loans.probability_default",
          "institutional_loans.product_code"
        ]
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.report_impl.item.SOURCE_TABLE.SOURCE_TABLE.dataset.loan_exposure_report_lines",
      "source": "report_impl.item",
      "target": "dataset.loan_exposure_report_lines",
      "label": "SOURCE_TABLE",
      "properties": {
        "description": "数据逻辑说明报表明细字段 loan_id 如何承载贷款标识需求，并兼容零售贷款号和机构授信号来源。；数据逻辑说明报表明细字段 borrower_id 如何承载借款人标识需求，并对齐客户主数据中的借款人记录。；数据逻辑说明报表明细字段 product_id 如何承载产品标识需求，并支持与产品主数据的监管分类对齐。；数据逻辑说明报表明细字段 principal_amount 如何承载本金金额需求，并统一零售本金与机构授信名义金额。；数据逻辑说明报表明细字段 exposure_at_default_amount 如何承载风险暴露金额需求，并作为监管信用风险计算基础。；数据逻辑说明报表明细字段 expected_loss_amount 如何承载预期损失金额需求，并由风险暴露、违约概率和违约损失率计算得到。",
        "source_fields": [
          "loan_exposure_report_lines.borrower_id",
          "loan_exposure_report_lines.expected_loss_amount",
          "loan_exposure_report_lines.exposure_at_default_amount",
          "loan_exposure_report_lines.loan_id",
          "loan_exposure_report_lines.principal_amount",
          "loan_exposure_report_lines.product_id"
        ]
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.report_impl.item.SOURCE_TABLE.SOURCE_TABLE.dataset.retail_loans",
      "source": "report_impl.item",
      "target": "dataset.retail_loans",
      "label": "SOURCE_TABLE",
      "properties": {
        "description": "数据逻辑说明报表明细字段 loan_id 如何承载贷款标识需求，并兼容零售贷款号和机构授信号来源。；数据逻辑说明报表明细字段 borrower_id 如何承载借款人标识需求，并对齐客户主数据中的借款人记录。；数据逻辑说明报表明细字段 product_id 如何承载产品标识需求，并支持与产品主数据的监管分类对齐。；数据逻辑说明报表明细字段 principal_amount 如何承载本金金额需求，并统一零售本金与机构授信名义金额。；数据逻辑说明报表明细字段 exposure_at_default_amount 如何承载风险暴露金额需求，并作为监管信用风险计算基础。；数据逻辑说明报表明细字段 expected_loss_amount 如何承载预期损失金额需求，并由风险暴露、违约概率和违约损失率计算得到。",
        "source_fields": [
          "retail_loans.borrower_id",
          "retail_loans.lgd",
          "retail_loans.loan_id",
          "retail_loans.pd",
          "retail_loans.principal_amount",
          "retail_loans.product_id"
        ]
      },
      "type": "SOURCE_TABLE"
    }
  ]
};
window.OSI_GRAPH_DATA = window.GRAPH_DATA;
