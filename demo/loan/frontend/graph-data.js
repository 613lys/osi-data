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
        "requires": []
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
        "inherited": false
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
        "inherited": false
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
        "requires": []
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
        "inherited": false
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
        "inherited": false
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
        "requires": []
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
        "inherited": false
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
        "requires": []
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
        "inherited": false
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
        "inherited": false
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
        "requires": []
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
        "requires": []
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
        "inherited": false
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
        "inherited": false
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
        "inherited": false
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
        "inherited": false
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
        "inherited": false
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
        "inherited": false
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
        "inherited": false
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
        "inheritance_note": "Inherited from CustomerData."
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
        "inheritance_note": "Inherited from CustomerData."
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
        "inheritance_note": "Inherited from LoanData."
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
        "inheritance_note": "Inherited from LoanData."
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
        "inheritance_note": "Inherited from ProductData."
      }
    },
    {
      "id": "table.borrowers",
      "type": "physical_table",
      "label": "borrowers",
      "properties": {
        "description": "Borrower master records at customer or legal entity grain, providing borrower names, segments, and domicile jurisdictions used by loan exposure reporting.",
        "source": "customer_master.borrowers",
        "primary_key": [
          "borrower_id"
        ],
        "field_count": 4
      }
    },
    {
      "id": "column.borrowers.borrower_id",
      "type": "column",
      "label": "borrower_id",
      "properties": {
        "description": "Master customer identifier for a borrower or legal entity.",
        "parent": "table.borrowers",
        "data_type": "field",
        "expression": "borrower_id"
      }
    },
    {
      "id": "column.borrowers.borrower_segment",
      "type": "column",
      "label": "borrower_segment",
      "properties": {
        "description": "Segment classification such as retail, SME, corporate, or financial institution.",
        "parent": "table.borrowers",
        "data_type": "field",
        "expression": "borrower_segment"
      }
    },
    {
      "id": "column.borrowers.borrower_name",
      "type": "column",
      "label": "borrower_name",
      "properties": {
        "description": "Human-readable borrower or legal entity name.",
        "parent": "table.borrowers",
        "data_type": "field",
        "expression": "borrower_name"
      }
    },
    {
      "id": "column.borrowers.domicile_country",
      "type": "column",
      "label": "domicile_country",
      "properties": {
        "description": "Borrower domicile country used for jurisdictional reporting and composite report joins.",
        "parent": "table.borrowers",
        "data_type": "field",
        "expression": "domicile_country"
      }
    },
    {
      "id": "table.institutional_loans",
      "type": "physical_table",
      "label": "institutional_loans",
      "properties": {
        "description": "Institutional credit facility records at legal entity facility grain, carrying borrower, product, booking, notional, currency, and credit risk parameter fields for wholesale exposure reporting.",
        "source": "institutional_lending_core.facilities",
        "primary_key": [
          "facility_id"
        ],
        "field_count": 8
      }
    },
    {
      "id": "column.institutional_loans.facility_id",
      "type": "column",
      "label": "facility_id",
      "properties": {
        "description": "Institutional source identifier for a committed credit facility.",
        "parent": "table.institutional_loans",
        "data_type": "field",
        "expression": "facility_id"
      }
    },
    {
      "id": "column.institutional_loans.legal_entity_id",
      "type": "column",
      "label": "legal_entity_id",
      "properties": {
        "description": "Customer identifier linking the facility to the responsible legal borrower.",
        "parent": "table.institutional_loans",
        "data_type": "field",
        "expression": "legal_entity_id"
      }
    },
    {
      "id": "column.institutional_loans.product_code",
      "type": "column",
      "label": "product_code",
      "properties": {
        "description": "Product identifier classifying the institutional lending facility.",
        "parent": "table.institutional_loans",
        "data_type": "field",
        "expression": "product_code"
      }
    },
    {
      "id": "column.institutional_loans.booking_date",
      "type": "column",
      "label": "booking_date",
      "properties": {
        "description": "Date on which the institutional facility was booked.",
        "parent": "table.institutional_loans",
        "data_type": "field",
        "expression": "booking_date"
      }
    },
    {
      "id": "column.institutional_loans.notional_amount",
      "type": "column",
      "label": "notional_amount",
      "properties": {
        "description": "Notional or committed amount recorded for the institutional facility.",
        "parent": "table.institutional_loans",
        "data_type": "field",
        "expression": "notional_amount"
      }
    },
    {
      "id": "column.institutional_loans.exposure_currency",
      "type": "column",
      "label": "exposure_currency",
      "properties": {
        "description": "Currency code used for the institutional exposure amount.",
        "parent": "table.institutional_loans",
        "data_type": "field",
        "expression": "exposure_currency"
      }
    },
    {
      "id": "column.institutional_loans.probability_default",
      "type": "column",
      "label": "probability_default",
      "properties": {
        "description": "Probability of default assigned by the wholesale credit risk model.",
        "parent": "table.institutional_loans",
        "data_type": "field",
        "expression": "probability_default"
      }
    },
    {
      "id": "column.institutional_loans.loss_given_default",
      "type": "column",
      "label": "loss_given_default",
      "properties": {
        "description": "Loss given default rate assigned by the wholesale credit risk model.",
        "parent": "table.institutional_loans",
        "data_type": "field",
        "expression": "loss_given_default"
      }
    },
    {
      "id": "table.loan_exposure_report_lines",
      "type": "physical_table",
      "label": "loan_exposure_report_lines",
      "properties": {
        "description": "Prepared loan exposure report line records at reportable loan grain, carrying normalized borrower, product, amount, currency, and expected loss fields consumed by regulatory reporting logic.",
        "source": "credit_risk_engine.loan_exposure_report_lines",
        "primary_key": [
          "loan_id"
        ],
        "field_count": 8
      }
    },
    {
      "id": "column.loan_exposure_report_lines.loan_id",
      "type": "column",
      "label": "loan_id",
      "properties": {
        "description": "Normalized loan or facility identifier reported on the exposure line.",
        "parent": "table.loan_exposure_report_lines",
        "data_type": "field",
        "expression": "loan_id"
      }
    },
    {
      "id": "column.loan_exposure_report_lines.borrower_id",
      "type": "column",
      "label": "borrower_id",
      "properties": {
        "description": "Borrower identifier reported on the exposure line for reconciliation to customer master.",
        "parent": "table.loan_exposure_report_lines",
        "data_type": "field",
        "expression": "borrower_id"
      }
    },
    {
      "id": "column.loan_exposure_report_lines.borrower_country",
      "type": "column",
      "label": "borrower_country",
      "properties": {
        "description": "Borrower country carried on the report line to support jurisdictional aggregation and composite joins.",
        "parent": "table.loan_exposure_report_lines",
        "data_type": "field",
        "expression": "borrower_country"
      }
    },
    {
      "id": "column.loan_exposure_report_lines.product_id",
      "type": "column",
      "label": "product_id",
      "properties": {
        "description": "Product identifier reported on the exposure line for product-class aggregation.",
        "parent": "table.loan_exposure_report_lines",
        "data_type": "field",
        "expression": "product_id"
      }
    },
    {
      "id": "column.loan_exposure_report_lines.principal_amount",
      "type": "column",
      "label": "principal_amount",
      "properties": {
        "description": "Principal amount included on the report line for exposure reconciliation.",
        "parent": "table.loan_exposure_report_lines",
        "data_type": "field",
        "expression": "principal_amount"
      }
    },
    {
      "id": "column.loan_exposure_report_lines.exposure_at_default_amount",
      "type": "column",
      "label": "exposure_at_default_amount",
      "properties": {
        "description": "Exposure at default amount reported for regulatory credit risk measurement.",
        "parent": "table.loan_exposure_report_lines",
        "data_type": "field",
        "expression": "exposure_at_default_amount"
      }
    },
    {
      "id": "column.loan_exposure_report_lines.expected_loss_amount",
      "type": "column",
      "label": "expected_loss_amount",
      "properties": {
        "description": "Expected loss amount reported after applying probability of default and loss given default.",
        "parent": "table.loan_exposure_report_lines",
        "data_type": "field",
        "expression": "expected_loss_amount"
      }
    },
    {
      "id": "column.loan_exposure_report_lines.report_currency",
      "type": "column",
      "label": "report_currency",
      "properties": {
        "description": "Currency code in which the exposure line amounts are reported.",
        "parent": "table.loan_exposure_report_lines",
        "data_type": "field",
        "expression": "report_currency"
      }
    },
    {
      "id": "table.loan_products",
      "type": "physical_table",
      "label": "loan_products",
      "properties": {
        "description": "Loan product reference records at product definition grain, carrying product type and regulatory product class used to classify loan exposures.",
        "source": "product_master.loan_products",
        "primary_key": [
          "product_id"
        ],
        "field_count": 3
      }
    },
    {
      "id": "column.loan_products.product_id",
      "type": "column",
      "label": "product_id",
      "properties": {
        "description": "Master product identifier for a lending product.",
        "parent": "table.loan_products",
        "data_type": "field",
        "expression": "product_id"
      }
    },
    {
      "id": "column.loan_products.product_type",
      "type": "column",
      "label": "product_type",
      "properties": {
        "description": "Lending product type such as mortgage, term loan, revolving credit, or credit line.",
        "parent": "table.loan_products",
        "data_type": "field",
        "expression": "product_type"
      }
    },
    {
      "id": "column.loan_products.regulatory_product_class",
      "type": "column",
      "label": "regulatory_product_class",
      "properties": {
        "description": "Regulatory product class used for credit exposure aggregation.",
        "parent": "table.loan_products",
        "data_type": "field",
        "expression": "regulatory_product_class"
      }
    },
    {
      "id": "table.retail_loans",
      "type": "physical_table",
      "label": "retail_loans",
      "properties": {
        "description": "Retail loan records at individual consumer loan grain, carrying borrower, product, booking, amount, currency, and credit risk parameter fields for retail exposure reporting.",
        "source": "retail_lending_core.retail_loans",
        "primary_key": [
          "loan_id"
        ],
        "field_count": 8
      }
    },
    {
      "id": "column.retail_loans.loan_id",
      "type": "column",
      "label": "loan_id",
      "properties": {
        "description": "Retail source identifier for an individual consumer loan record.",
        "parent": "table.retail_loans",
        "data_type": "field",
        "expression": "loan_id"
      }
    },
    {
      "id": "column.retail_loans.borrower_id",
      "type": "column",
      "label": "borrower_id",
      "properties": {
        "description": "Customer identifier linking the retail loan to the responsible borrower.",
        "parent": "table.retail_loans",
        "data_type": "field",
        "expression": "borrower_id"
      }
    },
    {
      "id": "column.retail_loans.product_id",
      "type": "column",
      "label": "product_id",
      "properties": {
        "description": "Product identifier classifying the retail lending product.",
        "parent": "table.retail_loans",
        "data_type": "field",
        "expression": "product_id"
      }
    },
    {
      "id": "column.retail_loans.origination_date",
      "type": "column",
      "label": "origination_date",
      "properties": {
        "description": "Date on which the retail loan was originated or booked.",
        "parent": "table.retail_loans",
        "data_type": "field",
        "expression": "origination_date"
      }
    },
    {
      "id": "column.retail_loans.principal_amount",
      "type": "column",
      "label": "principal_amount",
      "properties": {
        "description": "Principal balance or contractual amount recorded for the retail loan.",
        "parent": "table.retail_loans",
        "data_type": "field",
        "expression": "principal_amount"
      }
    },
    {
      "id": "column.retail_loans.currency",
      "type": "column",
      "label": "currency",
      "properties": {
        "description": "Currency code used for the retail loan amount.",
        "parent": "table.retail_loans",
        "data_type": "field",
        "expression": "currency"
      }
    },
    {
      "id": "column.retail_loans.pd",
      "type": "column",
      "label": "pd",
      "properties": {
        "description": "Probability of default assigned by the retail credit risk model.",
        "parent": "table.retail_loans",
        "data_type": "field",
        "expression": "pd"
      }
    },
    {
      "id": "column.retail_loans.lgd",
      "type": "column",
      "label": "lgd",
      "properties": {
        "description": "Loss given default rate assigned by the retail credit risk model.",
        "parent": "table.retail_loans",
        "data_type": "field",
        "expression": "lgd"
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
        "description": "CustomerData has value concept has_CustomerIdentifier (CustomerIdentifier).",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{CustomerData} has customer identifier {CustomerIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CustomerIdentifier",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.CustomerData.CONTAINS.contains_value.value.CustomerData.has_CustomerSegment",
      "source": "concept.CustomerData",
      "target": "value.CustomerData.has_CustomerSegment",
      "label": "contains value",
      "properties": {
        "description": "CustomerData has value concept has_CustomerSegment (CustomerSegment).",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CustomerData} has customer segment {CustomerSegment}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CustomerSegment",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.LoanData.CONTAINS.contains_value.value.LoanData.has_LoanIdentifier",
      "source": "concept.LoanData",
      "target": "value.LoanData.has_LoanIdentifier",
      "label": "contains value",
      "properties": {
        "description": "LoanData has value concept has_LoanIdentifier (LoanIdentifier).",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{LoanData} has loan identifier {LoanIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "LoanIdentifier",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.LoanData.CONTAINS.contains_value.value.LoanData.has_OriginationDate",
      "source": "concept.LoanData",
      "target": "value.LoanData.has_OriginationDate",
      "label": "contains value",
      "properties": {
        "description": "LoanData has value concept has_OriginationDate (CalendarDate).",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{LoanData} has origination date {CalendarDate}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CalendarDate",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.ProductData.CONTAINS.contains_value.value.ProductData.has_ProductIdentifier",
      "source": "concept.ProductData",
      "target": "value.ProductData.has_ProductIdentifier",
      "label": "contains value",
      "properties": {
        "description": "ProductData has value concept has_ProductIdentifier (ProductIdentifier).",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{ProductData} has product identifier {ProductIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "ProductIdentifier",
        "inherited": false
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
        "description": "Borrower has value concept has_BorrowerName (PersonOrEntityName).",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Borrower} has borrower name {PersonOrEntityName}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "PersonOrEntityName",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Borrower.CONTAINS.contains_value.value.Borrower.has_BorrowerCountry",
      "source": "concept.Borrower",
      "target": "value.Borrower.has_BorrowerCountry",
      "label": "contains value",
      "properties": {
        "description": "Borrower has value concept has_BorrowerCountry (CountryCode).",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Borrower} has borrower country {CountryCode}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CountryCode",
        "inherited": false
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
        "description": "Loan has value concept has_PrincipalAmount (MonetaryAmount).",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Loan} has principal amount {MonetaryAmount}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "MonetaryAmount",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Loan.CONTAINS.contains_value.value.Loan.has_LoanCurrency",
      "source": "concept.Loan",
      "target": "value.Loan.has_LoanCurrency",
      "label": "contains value",
      "properties": {
        "description": "Loan has value concept has_LoanCurrency (CurrencyCode).",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Loan} has loan currency {CurrencyCode}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CurrencyCode",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Loan.CONTAINS.contains_value.value.Loan.has_ExposureAtDefaultAmount",
      "source": "concept.Loan",
      "target": "value.Loan.has_ExposureAtDefaultAmount",
      "label": "contains value",
      "properties": {
        "description": "Loan has value concept has_ExposureAtDefaultAmount (MonetaryAmount).",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Loan} has exposure at default amount {MonetaryAmount}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "MonetaryAmount",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Loan.CONTAINS.contains_value.value.Loan.has_ProbabilityOfDefault",
      "source": "concept.Loan",
      "target": "value.Loan.has_ProbabilityOfDefault",
      "label": "contains value",
      "properties": {
        "description": "Loan has value concept has_ProbabilityOfDefault (Rate).",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Loan} has probability of default {Rate}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "Rate",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Loan.CONTAINS.contains_value.value.Loan.has_LossGivenDefault",
      "source": "concept.Loan",
      "target": "value.Loan.has_LossGivenDefault",
      "label": "contains value",
      "properties": {
        "description": "Loan has value concept has_LossGivenDefault (Rate).",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Loan} has loss given default {Rate}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "Rate",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Loan.CONTAINS.contains_value.value.Loan.has_ExpectedLossAmount",
      "source": "concept.Loan",
      "target": "value.Loan.has_ExpectedLossAmount",
      "label": "contains value",
      "properties": {
        "description": "Loan has value concept has_ExpectedLossAmount (MonetaryAmount).",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Loan} has expected loss amount {MonetaryAmount}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "MonetaryAmount",
        "inherited": false
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
        "description": "LoanProduct has value concept has_ProductType (ProductType).",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{LoanProduct} has product type {ProductType}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "ProductType",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.LoanProduct.CONTAINS.contains_value.value.LoanProduct.has_RegulatoryProductClass",
      "source": "concept.LoanProduct",
      "target": "value.LoanProduct.has_RegulatoryProductClass",
      "label": "contains value",
      "properties": {
        "description": "LoanProduct has value concept has_RegulatoryProductClass (RegulatoryClass).",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{LoanProduct} has regulatory product class {RegulatoryClass}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "RegulatoryClass",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Borrower.CONTAINS.inherited_value.value.Borrower.has_CustomerIdentifier",
      "source": "concept.Borrower",
      "target": "value.Borrower.has_CustomerIdentifier",
      "label": "inherited value",
      "properties": {
        "description": "Borrower inherits value concept has_CustomerIdentifier (CustomerIdentifier) from CustomerData.",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{CustomerData} has customer identifier {CustomerIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "CustomerIdentifier",
        "inherited": true,
        "inherited_from": "CustomerData",
        "base_relationship_path": "CustomerData.has_CustomerIdentifier",
        "inheritance_note": "Inherited from CustomerData."
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Borrower.CONTAINS.inherited_value.value.Borrower.has_CustomerSegment",
      "source": "concept.Borrower",
      "target": "value.Borrower.has_CustomerSegment",
      "label": "inherited value",
      "properties": {
        "description": "Borrower inherits value concept has_CustomerSegment (CustomerSegment) from CustomerData.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CustomerData} has customer segment {CustomerSegment}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "CustomerSegment",
        "inherited": true,
        "inherited_from": "CustomerData",
        "base_relationship_path": "CustomerData.has_CustomerSegment",
        "inheritance_note": "Inherited from CustomerData."
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Loan.CONTAINS.inherited_value.value.Loan.has_LoanIdentifier",
      "source": "concept.Loan",
      "target": "value.Loan.has_LoanIdentifier",
      "label": "inherited value",
      "properties": {
        "description": "Loan inherits value concept has_LoanIdentifier (LoanIdentifier) from LoanData.",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{LoanData} has loan identifier {LoanIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "LoanIdentifier",
        "inherited": true,
        "inherited_from": "LoanData",
        "base_relationship_path": "LoanData.has_LoanIdentifier",
        "inheritance_note": "Inherited from LoanData."
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Loan.CONTAINS.inherited_value.value.Loan.has_OriginationDate",
      "source": "concept.Loan",
      "target": "value.Loan.has_OriginationDate",
      "label": "inherited value",
      "properties": {
        "description": "Loan inherits value concept has_OriginationDate (CalendarDate) from LoanData.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{LoanData} has origination date {CalendarDate}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "CalendarDate",
        "inherited": true,
        "inherited_from": "LoanData",
        "base_relationship_path": "LoanData.has_OriginationDate",
        "inheritance_note": "Inherited from LoanData."
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.LoanProduct.CONTAINS.inherited_value.value.LoanProduct.has_ProductIdentifier",
      "source": "concept.LoanProduct",
      "target": "value.LoanProduct.has_ProductIdentifier",
      "label": "inherited value",
      "properties": {
        "description": "LoanProduct inherits value concept has_ProductIdentifier (ProductIdentifier) from ProductData.",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{ProductData} has product identifier {ProductIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "ProductIdentifier",
        "inherited": true,
        "inherited_from": "ProductData",
        "base_relationship_path": "ProductData.has_ProductIdentifier",
        "inheritance_note": "Inherited from ProductData."
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
      "id": "edge.table.borrowers.CONTAINS.contains.column.borrowers.borrower_id",
      "source": "table.borrowers",
      "target": "column.borrowers.borrower_id",
      "label": "contains",
      "properties": {
        "description": "borrowers contains field borrower_id.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.borrowers.CONTAINS.contains.column.borrowers.borrower_segment",
      "source": "table.borrowers",
      "target": "column.borrowers.borrower_segment",
      "label": "contains",
      "properties": {
        "description": "borrowers contains field borrower_segment.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.borrowers.CONTAINS.contains.column.borrowers.borrower_name",
      "source": "table.borrowers",
      "target": "column.borrowers.borrower_name",
      "label": "contains",
      "properties": {
        "description": "borrowers contains field borrower_name.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.borrowers.CONTAINS.contains.column.borrowers.domicile_country",
      "source": "table.borrowers",
      "target": "column.borrowers.domicile_country",
      "label": "contains",
      "properties": {
        "description": "borrowers contains field domicile_country.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.institutional_loans.CONTAINS.contains.column.institutional_loans.facility_id",
      "source": "table.institutional_loans",
      "target": "column.institutional_loans.facility_id",
      "label": "contains",
      "properties": {
        "description": "institutional_loans contains field facility_id.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.institutional_loans.CONTAINS.contains.column.institutional_loans.legal_entity_id",
      "source": "table.institutional_loans",
      "target": "column.institutional_loans.legal_entity_id",
      "label": "contains",
      "properties": {
        "description": "institutional_loans contains field legal_entity_id.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.institutional_loans.CONTAINS.contains.column.institutional_loans.product_code",
      "source": "table.institutional_loans",
      "target": "column.institutional_loans.product_code",
      "label": "contains",
      "properties": {
        "description": "institutional_loans contains field product_code.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.institutional_loans.CONTAINS.contains.column.institutional_loans.booking_date",
      "source": "table.institutional_loans",
      "target": "column.institutional_loans.booking_date",
      "label": "contains",
      "properties": {
        "description": "institutional_loans contains field booking_date.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.institutional_loans.CONTAINS.contains.column.institutional_loans.notional_amount",
      "source": "table.institutional_loans",
      "target": "column.institutional_loans.notional_amount",
      "label": "contains",
      "properties": {
        "description": "institutional_loans contains field notional_amount.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.institutional_loans.CONTAINS.contains.column.institutional_loans.exposure_currency",
      "source": "table.institutional_loans",
      "target": "column.institutional_loans.exposure_currency",
      "label": "contains",
      "properties": {
        "description": "institutional_loans contains field exposure_currency.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.institutional_loans.CONTAINS.contains.column.institutional_loans.probability_default",
      "source": "table.institutional_loans",
      "target": "column.institutional_loans.probability_default",
      "label": "contains",
      "properties": {
        "description": "institutional_loans contains field probability_default.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.institutional_loans.CONTAINS.contains.column.institutional_loans.loss_given_default",
      "source": "table.institutional_loans",
      "target": "column.institutional_loans.loss_given_default",
      "label": "contains",
      "properties": {
        "description": "institutional_loans contains field loss_given_default.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.loan_exposure_report_lines.CONTAINS.contains.column.loan_exposure_report_lines.loan_id",
      "source": "table.loan_exposure_report_lines",
      "target": "column.loan_exposure_report_lines.loan_id",
      "label": "contains",
      "properties": {
        "description": "loan_exposure_report_lines contains field loan_id.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.loan_exposure_report_lines.CONTAINS.contains.column.loan_exposure_report_lines.borrower_id",
      "source": "table.loan_exposure_report_lines",
      "target": "column.loan_exposure_report_lines.borrower_id",
      "label": "contains",
      "properties": {
        "description": "loan_exposure_report_lines contains field borrower_id.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.loan_exposure_report_lines.CONTAINS.contains.column.loan_exposure_report_lines.borrower_country",
      "source": "table.loan_exposure_report_lines",
      "target": "column.loan_exposure_report_lines.borrower_country",
      "label": "contains",
      "properties": {
        "description": "loan_exposure_report_lines contains field borrower_country.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.loan_exposure_report_lines.CONTAINS.contains.column.loan_exposure_report_lines.product_id",
      "source": "table.loan_exposure_report_lines",
      "target": "column.loan_exposure_report_lines.product_id",
      "label": "contains",
      "properties": {
        "description": "loan_exposure_report_lines contains field product_id.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.loan_exposure_report_lines.CONTAINS.contains.column.loan_exposure_report_lines.principal_amount",
      "source": "table.loan_exposure_report_lines",
      "target": "column.loan_exposure_report_lines.principal_amount",
      "label": "contains",
      "properties": {
        "description": "loan_exposure_report_lines contains field principal_amount.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.loan_exposure_report_lines.CONTAINS.contains.column.loan_exposure_report_lines.exposure_at_default_amount",
      "source": "table.loan_exposure_report_lines",
      "target": "column.loan_exposure_report_lines.exposure_at_default_amount",
      "label": "contains",
      "properties": {
        "description": "loan_exposure_report_lines contains field exposure_at_default_amount.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.loan_exposure_report_lines.CONTAINS.contains.column.loan_exposure_report_lines.expected_loss_amount",
      "source": "table.loan_exposure_report_lines",
      "target": "column.loan_exposure_report_lines.expected_loss_amount",
      "label": "contains",
      "properties": {
        "description": "loan_exposure_report_lines contains field expected_loss_amount.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.loan_exposure_report_lines.CONTAINS.contains.column.loan_exposure_report_lines.report_currency",
      "source": "table.loan_exposure_report_lines",
      "target": "column.loan_exposure_report_lines.report_currency",
      "label": "contains",
      "properties": {
        "description": "loan_exposure_report_lines contains field report_currency.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.loan_products.CONTAINS.contains.column.loan_products.product_id",
      "source": "table.loan_products",
      "target": "column.loan_products.product_id",
      "label": "contains",
      "properties": {
        "description": "loan_products contains field product_id.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.loan_products.CONTAINS.contains.column.loan_products.product_type",
      "source": "table.loan_products",
      "target": "column.loan_products.product_type",
      "label": "contains",
      "properties": {
        "description": "loan_products contains field product_type.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.loan_products.CONTAINS.contains.column.loan_products.regulatory_product_class",
      "source": "table.loan_products",
      "target": "column.loan_products.regulatory_product_class",
      "label": "contains",
      "properties": {
        "description": "loan_products contains field regulatory_product_class.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.retail_loans.CONTAINS.contains.column.retail_loans.loan_id",
      "source": "table.retail_loans",
      "target": "column.retail_loans.loan_id",
      "label": "contains",
      "properties": {
        "description": "retail_loans contains field loan_id.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.retail_loans.CONTAINS.contains.column.retail_loans.borrower_id",
      "source": "table.retail_loans",
      "target": "column.retail_loans.borrower_id",
      "label": "contains",
      "properties": {
        "description": "retail_loans contains field borrower_id.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.retail_loans.CONTAINS.contains.column.retail_loans.product_id",
      "source": "table.retail_loans",
      "target": "column.retail_loans.product_id",
      "label": "contains",
      "properties": {
        "description": "retail_loans contains field product_id.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.retail_loans.CONTAINS.contains.column.retail_loans.origination_date",
      "source": "table.retail_loans",
      "target": "column.retail_loans.origination_date",
      "label": "contains",
      "properties": {
        "description": "retail_loans contains field origination_date.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.retail_loans.CONTAINS.contains.column.retail_loans.principal_amount",
      "source": "table.retail_loans",
      "target": "column.retail_loans.principal_amount",
      "label": "contains",
      "properties": {
        "description": "retail_loans contains field principal_amount.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.retail_loans.CONTAINS.contains.column.retail_loans.currency",
      "source": "table.retail_loans",
      "target": "column.retail_loans.currency",
      "label": "contains",
      "properties": {
        "description": "retail_loans contains field currency.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.retail_loans.CONTAINS.contains.column.retail_loans.pd",
      "source": "table.retail_loans",
      "target": "column.retail_loans.pd",
      "label": "contains",
      "properties": {
        "description": "retail_loans contains field pd.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.retail_loans.CONTAINS.contains.column.retail_loans.lgd",
      "source": "table.retail_loans",
      "target": "column.retail_loans.lgd",
      "label": "contains",
      "properties": {
        "description": "retail_loans contains field lgd.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.retail_loans.DATASET_JOIN.join_borrower_id.table.borrowers",
      "source": "table.retail_loans",
      "target": "table.borrowers",
      "label": "join borrower_id",
      "properties": {
        "description": "retail_loans joins borrowers on ['borrower_id'] = ['borrower_id'].",
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
          ]
        }
      },
      "type": "DATASET_JOIN"
    },
    {
      "id": "edge.table.institutional_loans.DATASET_JOIN.join_legal_entity_id_borrower_id.table.borrowers",
      "source": "table.institutional_loans",
      "target": "table.borrowers",
      "label": "join legal_entity_id = borrower_id",
      "properties": {
        "description": "institutional_loans joins borrowers on ['legal_entity_id'] = ['borrower_id'].",
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
          ]
        }
      },
      "type": "DATASET_JOIN"
    },
    {
      "id": "edge.table.retail_loans.DATASET_JOIN.join_product_id.table.loan_products",
      "source": "table.retail_loans",
      "target": "table.loan_products",
      "label": "join product_id",
      "properties": {
        "description": "retail_loans joins loan_products on ['product_id'] = ['product_id'].",
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
          ]
        }
      },
      "type": "DATASET_JOIN"
    },
    {
      "id": "edge.table.institutional_loans.DATASET_JOIN.join_product_code_product_id.table.loan_products",
      "source": "table.institutional_loans",
      "target": "table.loan_products",
      "label": "join product_code = product_id",
      "properties": {
        "description": "institutional_loans joins loan_products on ['product_code'] = ['product_id'].",
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
          ]
        }
      },
      "type": "DATASET_JOIN"
    },
    {
      "id": "edge.table.loan_exposure_report_lines.DATASET_JOIN.join_borrower_id_borrower_id_borrower_country_domicile_country.table.borrowers",
      "source": "table.loan_exposure_report_lines",
      "target": "table.borrowers",
      "label": "join borrower_id = borrower_id, borrower_country = domicile_country",
      "properties": {
        "description": "loan_exposure_report_lines joins borrowers on ['borrower_id', 'borrower_country'] = ['borrower_id', 'domicile_country'].",
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
          ]
        }
      },
      "type": "DATASET_JOIN"
    },
    {
      "id": "edge.table.loan_exposure_report_lines.DATASET_JOIN.join_product_id.table.loan_products",
      "source": "table.loan_exposure_report_lines",
      "target": "table.loan_products",
      "label": "join product_id",
      "properties": {
        "description": "loan_exposure_report_lines joins loan_products on ['product_id'] = ['product_id'].",
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
          ]
        }
      },
      "type": "DATASET_JOIN"
    },
    {
      "id": "edge.concept.Borrower.MAPS_TO.maps_to_table.table.borrowers",
      "source": "concept.Borrower",
      "target": "table.borrowers",
      "label": "maps to table",
      "properties": {
        "description": "Borrower is populated from borrowers.",
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
      "id": "edge.value.Borrower.has_BorrowerCountry.MAPS_TO_FIELD.has_BorrowerCountry.column.borrowers.domicile_country",
      "source": "value.Borrower.has_BorrowerCountry",
      "target": "column.borrowers.domicile_country",
      "label": "has_BorrowerCountry",
      "properties": {
        "description": "Borrower.has_BorrowerCountry maps to physical field borrowers.domicile_country.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "borrowers.domicile_country"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Borrower.has_BorrowerName.MAPS_TO_FIELD.has_BorrowerName.column.borrowers.borrower_name",
      "source": "value.Borrower.has_BorrowerName",
      "target": "column.borrowers.borrower_name",
      "label": "has_BorrowerName",
      "properties": {
        "description": "Borrower.has_BorrowerName maps to physical field borrowers.borrower_name.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "borrowers.borrower_name"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Borrower.has_CustomerIdentifier.MAPS_TO_FIELD.has_CustomerIdentifier.column.borrowers.borrower_id",
      "source": "value.Borrower.has_CustomerIdentifier",
      "target": "column.borrowers.borrower_id",
      "label": "has_CustomerIdentifier",
      "properties": {
        "description": "Borrower.has_CustomerIdentifier maps to physical field borrowers.borrower_id.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "borrowers.borrower_id"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Borrower.has_CustomerSegment.MAPS_TO_FIELD.has_CustomerSegment.column.borrowers.borrower_segment",
      "source": "value.Borrower.has_CustomerSegment",
      "target": "column.borrowers.borrower_segment",
      "label": "has_CustomerSegment",
      "properties": {
        "description": "Borrower.has_CustomerSegment maps to physical field borrowers.borrower_segment.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "borrowers.borrower_segment"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.concept.Loan.MAPS_TO.maps_to_table.table.institutional_loans",
      "source": "concept.Loan",
      "target": "table.institutional_loans",
      "label": "maps to table",
      "properties": {
        "description": "Loan is populated from institutional_loans.",
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
      "id": "edge.concept.Loan.MAPS_TO.maps_to_table.table.loan_exposure_report_lines",
      "source": "concept.Loan",
      "target": "table.loan_exposure_report_lines",
      "label": "maps to table",
      "properties": {
        "description": "Loan is populated from loan_exposure_report_lines.",
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
      "id": "edge.concept.Loan.MAPS_TO.maps_to_table.table.retail_loans",
      "source": "concept.Loan",
      "target": "table.retail_loans",
      "label": "maps to table",
      "properties": {
        "description": "Loan is populated from retail_loans.",
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
      "id": "edge.value.Loan.has_ExpectedLossAmount.MAPS_TO_FIELD.has_ExpectedLossAmount.column.loan_exposure_report_lines.expected_loss_amount",
      "source": "value.Loan.has_ExpectedLossAmount",
      "target": "column.loan_exposure_report_lines.expected_loss_amount",
      "label": "has_ExpectedLossAmount",
      "properties": {
        "description": "Loan.has_ExpectedLossAmount maps to physical field loan_exposure_report_lines.expected_loss_amount.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "loan_exposure_report_lines.expected_loss_amount"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_ExposureAtDefaultAmount.MAPS_TO_FIELD.has_ExposureAtDefaultAmount.column.institutional_loans.notional_amount",
      "source": "value.Loan.has_ExposureAtDefaultAmount",
      "target": "column.institutional_loans.notional_amount",
      "label": "has_ExposureAtDefaultAmount",
      "properties": {
        "description": "Loan.has_ExposureAtDefaultAmount maps to physical field institutional_loans.notional_amount.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "institutional_loans.notional_amount"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_ExposureAtDefaultAmount.MAPS_TO_FIELD.has_ExposureAtDefaultAmount.column.loan_exposure_report_lines.exposure_at_default_amount",
      "source": "value.Loan.has_ExposureAtDefaultAmount",
      "target": "column.loan_exposure_report_lines.exposure_at_default_amount",
      "label": "has_ExposureAtDefaultAmount",
      "properties": {
        "description": "Loan.has_ExposureAtDefaultAmount maps to physical field loan_exposure_report_lines.exposure_at_default_amount.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "loan_exposure_report_lines.exposure_at_default_amount"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_ExposureAtDefaultAmount.MAPS_TO_FIELD.has_ExposureAtDefaultAmount.column.retail_loans.principal_amount",
      "source": "value.Loan.has_ExposureAtDefaultAmount",
      "target": "column.retail_loans.principal_amount",
      "label": "has_ExposureAtDefaultAmount",
      "properties": {
        "description": "Loan.has_ExposureAtDefaultAmount maps to physical field retail_loans.principal_amount.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "retail_loans.principal_amount"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_LoanCurrency.MAPS_TO_FIELD.has_LoanCurrency.column.institutional_loans.exposure_currency",
      "source": "value.Loan.has_LoanCurrency",
      "target": "column.institutional_loans.exposure_currency",
      "label": "has_LoanCurrency",
      "properties": {
        "description": "Loan.has_LoanCurrency maps to physical field institutional_loans.exposure_currency.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "institutional_loans.exposure_currency"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_LoanCurrency.MAPS_TO_FIELD.has_LoanCurrency.column.loan_exposure_report_lines.report_currency",
      "source": "value.Loan.has_LoanCurrency",
      "target": "column.loan_exposure_report_lines.report_currency",
      "label": "has_LoanCurrency",
      "properties": {
        "description": "Loan.has_LoanCurrency maps to physical field loan_exposure_report_lines.report_currency.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "loan_exposure_report_lines.report_currency"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_LoanCurrency.MAPS_TO_FIELD.has_LoanCurrency.column.retail_loans.currency",
      "source": "value.Loan.has_LoanCurrency",
      "target": "column.retail_loans.currency",
      "label": "has_LoanCurrency",
      "properties": {
        "description": "Loan.has_LoanCurrency maps to physical field retail_loans.currency.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "retail_loans.currency"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_LoanIdentifier.MAPS_TO_FIELD.has_LoanIdentifier.column.institutional_loans.facility_id",
      "source": "value.Loan.has_LoanIdentifier",
      "target": "column.institutional_loans.facility_id",
      "label": "has_LoanIdentifier",
      "properties": {
        "description": "Loan.has_LoanIdentifier maps to physical field institutional_loans.facility_id.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "institutional_loans.facility_id"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_LoanIdentifier.MAPS_TO_FIELD.has_LoanIdentifier.column.loan_exposure_report_lines.loan_id",
      "source": "value.Loan.has_LoanIdentifier",
      "target": "column.loan_exposure_report_lines.loan_id",
      "label": "has_LoanIdentifier",
      "properties": {
        "description": "Loan.has_LoanIdentifier maps to physical field loan_exposure_report_lines.loan_id.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "loan_exposure_report_lines.loan_id"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_LoanIdentifier.MAPS_TO_FIELD.has_LoanIdentifier.column.retail_loans.loan_id",
      "source": "value.Loan.has_LoanIdentifier",
      "target": "column.retail_loans.loan_id",
      "label": "has_LoanIdentifier",
      "properties": {
        "description": "Loan.has_LoanIdentifier maps to physical field retail_loans.loan_id.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "retail_loans.loan_id"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_LossGivenDefault.MAPS_TO_FIELD.has_LossGivenDefault.column.institutional_loans.loss_given_default",
      "source": "value.Loan.has_LossGivenDefault",
      "target": "column.institutional_loans.loss_given_default",
      "label": "has_LossGivenDefault",
      "properties": {
        "description": "Loan.has_LossGivenDefault maps to physical field institutional_loans.loss_given_default.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "institutional_loans.loss_given_default"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_LossGivenDefault.MAPS_TO_FIELD.has_LossGivenDefault.column.retail_loans.lgd",
      "source": "value.Loan.has_LossGivenDefault",
      "target": "column.retail_loans.lgd",
      "label": "has_LossGivenDefault",
      "properties": {
        "description": "Loan.has_LossGivenDefault maps to physical field retail_loans.lgd.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "retail_loans.lgd"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_OriginationDate.MAPS_TO_FIELD.has_OriginationDate.column.institutional_loans.booking_date",
      "source": "value.Loan.has_OriginationDate",
      "target": "column.institutional_loans.booking_date",
      "label": "has_OriginationDate",
      "properties": {
        "description": "Loan.has_OriginationDate maps to physical field institutional_loans.booking_date.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "institutional_loans.booking_date"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_OriginationDate.MAPS_TO_FIELD.has_OriginationDate.column.retail_loans.origination_date",
      "source": "value.Loan.has_OriginationDate",
      "target": "column.retail_loans.origination_date",
      "label": "has_OriginationDate",
      "properties": {
        "description": "Loan.has_OriginationDate maps to physical field retail_loans.origination_date.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "retail_loans.origination_date"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_PrincipalAmount.MAPS_TO_FIELD.has_PrincipalAmount.column.institutional_loans.notional_amount",
      "source": "value.Loan.has_PrincipalAmount",
      "target": "column.institutional_loans.notional_amount",
      "label": "has_PrincipalAmount",
      "properties": {
        "description": "Loan.has_PrincipalAmount maps to physical field institutional_loans.notional_amount.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "institutional_loans.notional_amount"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_PrincipalAmount.MAPS_TO_FIELD.has_PrincipalAmount.column.loan_exposure_report_lines.principal_amount",
      "source": "value.Loan.has_PrincipalAmount",
      "target": "column.loan_exposure_report_lines.principal_amount",
      "label": "has_PrincipalAmount",
      "properties": {
        "description": "Loan.has_PrincipalAmount maps to physical field loan_exposure_report_lines.principal_amount.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "loan_exposure_report_lines.principal_amount"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_PrincipalAmount.MAPS_TO_FIELD.has_PrincipalAmount.column.retail_loans.principal_amount",
      "source": "value.Loan.has_PrincipalAmount",
      "target": "column.retail_loans.principal_amount",
      "label": "has_PrincipalAmount",
      "properties": {
        "description": "Loan.has_PrincipalAmount maps to physical field retail_loans.principal_amount.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "retail_loans.principal_amount"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_ProbabilityOfDefault.MAPS_TO_FIELD.has_ProbabilityOfDefault.column.institutional_loans.probability_default",
      "source": "value.Loan.has_ProbabilityOfDefault",
      "target": "column.institutional_loans.probability_default",
      "label": "has_ProbabilityOfDefault",
      "properties": {
        "description": "Loan.has_ProbabilityOfDefault maps to physical field institutional_loans.probability_default.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "institutional_loans.probability_default"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_ProbabilityOfDefault.MAPS_TO_FIELD.has_ProbabilityOfDefault.column.retail_loans.pd",
      "source": "value.Loan.has_ProbabilityOfDefault",
      "target": "column.retail_loans.pd",
      "label": "has_ProbabilityOfDefault",
      "properties": {
        "description": "Loan.has_ProbabilityOfDefault maps to physical field retail_loans.pd.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "retail_loans.pd"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Loan.has_ExpectedLossAmount.DERIVED_BY.institutional_loans.loss_given_default.column.institutional_loans.loss_given_default",
      "source": "value.Loan.has_ExpectedLossAmount",
      "target": "column.institutional_loans.loss_given_default",
      "label": "institutional_loans.loss_given_default",
      "properties": {
        "description": "Metric-backed field Loan.has_ExpectedLossAmount uses physical field institutional_loans.loss_given_default.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "expected_loss_amount",
        "semantic_reference": "metric.expected_loss_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.value.Loan.has_ExpectedLossAmount.DERIVED_BY.institutional_loans.notional_amount.column.institutional_loans.notional_amount",
      "source": "value.Loan.has_ExpectedLossAmount",
      "target": "column.institutional_loans.notional_amount",
      "label": "institutional_loans.notional_amount",
      "properties": {
        "description": "Metric-backed field Loan.has_ExpectedLossAmount uses physical field institutional_loans.notional_amount.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "expected_loss_amount",
        "semantic_reference": "metric.expected_loss_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.value.Loan.has_ExpectedLossAmount.DERIVED_BY.institutional_loans.probability_default.column.institutional_loans.probability_default",
      "source": "value.Loan.has_ExpectedLossAmount",
      "target": "column.institutional_loans.probability_default",
      "label": "institutional_loans.probability_default",
      "properties": {
        "description": "Metric-backed field Loan.has_ExpectedLossAmount uses physical field institutional_loans.probability_default.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "expected_loss_amount",
        "semantic_reference": "metric.expected_loss_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.value.Loan.has_ExpectedLossAmount.DERIVED_BY.retail_loans.lgd.column.retail_loans.lgd",
      "source": "value.Loan.has_ExpectedLossAmount",
      "target": "column.retail_loans.lgd",
      "label": "retail_loans.lgd",
      "properties": {
        "description": "Metric-backed field Loan.has_ExpectedLossAmount uses physical field retail_loans.lgd.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "expected_loss_amount",
        "semantic_reference": "metric.expected_loss_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.value.Loan.has_ExpectedLossAmount.DERIVED_BY.retail_loans.pd.column.retail_loans.pd",
      "source": "value.Loan.has_ExpectedLossAmount",
      "target": "column.retail_loans.pd",
      "label": "retail_loans.pd",
      "properties": {
        "description": "Metric-backed field Loan.has_ExpectedLossAmount uses physical field retail_loans.pd.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "expected_loss_amount",
        "semantic_reference": "metric.expected_loss_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.value.Loan.has_ExpectedLossAmount.DERIVED_BY.retail_loans.principal_amount.column.retail_loans.principal_amount",
      "source": "value.Loan.has_ExpectedLossAmount",
      "target": "column.retail_loans.principal_amount",
      "label": "retail_loans.principal_amount",
      "properties": {
        "description": "Metric-backed field Loan.has_ExpectedLossAmount uses physical field retail_loans.principal_amount.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "expected_loss_amount",
        "semantic_reference": "metric.expected_loss_amount",
        "expression": "retail_loans.principal_amount * retail_loans.pd * retail_loans.lgd + institutional_loans.notional_amount * institutional_loans.probability_default * institutional_loans.loss_given_default"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.concept.LoanProduct.MAPS_TO.maps_to_table.table.loan_products",
      "source": "concept.LoanProduct",
      "target": "table.loan_products",
      "label": "maps to table",
      "properties": {
        "description": "LoanProduct is populated from loan_products.",
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
      "id": "edge.value.LoanProduct.has_ProductIdentifier.MAPS_TO_FIELD.has_ProductIdentifier.column.loan_products.product_id",
      "source": "value.LoanProduct.has_ProductIdentifier",
      "target": "column.loan_products.product_id",
      "label": "has_ProductIdentifier",
      "properties": {
        "description": "LoanProduct.has_ProductIdentifier maps to physical field loan_products.product_id.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "loan_products.product_id"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.LoanProduct.has_ProductType.MAPS_TO_FIELD.has_ProductType.column.loan_products.product_type",
      "source": "value.LoanProduct.has_ProductType",
      "target": "column.loan_products.product_type",
      "label": "has_ProductType",
      "properties": {
        "description": "LoanProduct.has_ProductType maps to physical field loan_products.product_type.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "loan_products.product_type"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.LoanProduct.has_RegulatoryProductClass.MAPS_TO_FIELD.has_RegulatoryProductClass.column.loan_products.regulatory_product_class",
      "source": "value.LoanProduct.has_RegulatoryProductClass",
      "target": "column.loan_products.regulatory_product_class",
      "label": "has_RegulatoryProductClass",
      "properties": {
        "description": "LoanProduct.has_RegulatoryProductClass maps to physical field loan_products.regulatory_product_class.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "loan_products.regulatory_product_class"
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
      "id": "edge.implementation_field.loan_exposure_report_lines.loan_id.MAPS_TO_FIELD.MAPS_TO_FIELD.column.loan_exposure_report_lines.loan_id",
      "source": "implementation_field.loan_exposure_report_lines.loan_id",
      "target": "column.loan_exposure_report_lines.loan_id",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 loan_id 如何承载贷款标识需求，并兼容零售贷款号和机构授信号来源。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.loan_id.SOURCE_FIELD.SOURCE_FIELD.column.institutional_loans.facility_id",
      "source": "implementation_field.loan_exposure_report_lines.loan_id",
      "target": "column.institutional_loans.facility_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 loan_id 如何承载贷款标识需求，并兼容零售贷款号和机构授信号来源。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.loan_id.SOURCE_FIELD.SOURCE_FIELD.column.retail_loans.loan_id",
      "source": "implementation_field.loan_exposure_report_lines.loan_id",
      "target": "column.retail_loans.loan_id",
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
      "id": "edge.implementation_field.loan_exposure_report_lines.borrower_id.MAPS_TO_FIELD.MAPS_TO_FIELD.column.loan_exposure_report_lines.borrower_id",
      "source": "implementation_field.loan_exposure_report_lines.borrower_id",
      "target": "column.loan_exposure_report_lines.borrower_id",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 borrower_id 如何承载借款人标识需求，并对齐客户主数据中的借款人记录。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.borrower_id.SOURCE_FIELD.SOURCE_FIELD.column.institutional_loans.legal_entity_id",
      "source": "implementation_field.loan_exposure_report_lines.borrower_id",
      "target": "column.institutional_loans.legal_entity_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 borrower_id 如何承载借款人标识需求，并对齐客户主数据中的借款人记录。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.borrower_id.SOURCE_FIELD.SOURCE_FIELD.column.retail_loans.borrower_id",
      "source": "implementation_field.loan_exposure_report_lines.borrower_id",
      "target": "column.retail_loans.borrower_id",
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
      "id": "edge.implementation_field.loan_exposure_report_lines.product_id.MAPS_TO_FIELD.MAPS_TO_FIELD.column.loan_exposure_report_lines.product_id",
      "source": "implementation_field.loan_exposure_report_lines.product_id",
      "target": "column.loan_exposure_report_lines.product_id",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 product_id 如何承载产品标识需求，并支持与产品主数据的监管分类对齐。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.product_id.SOURCE_FIELD.SOURCE_FIELD.column.institutional_loans.product_code",
      "source": "implementation_field.loan_exposure_report_lines.product_id",
      "target": "column.institutional_loans.product_code",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 product_id 如何承载产品标识需求，并支持与产品主数据的监管分类对齐。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.product_id.SOURCE_FIELD.SOURCE_FIELD.column.retail_loans.product_id",
      "source": "implementation_field.loan_exposure_report_lines.product_id",
      "target": "column.retail_loans.product_id",
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
      "id": "edge.implementation_field.loan_exposure_report_lines.principal_amount.MAPS_TO_FIELD.MAPS_TO_FIELD.column.loan_exposure_report_lines.principal_amount",
      "source": "implementation_field.loan_exposure_report_lines.principal_amount",
      "target": "column.loan_exposure_report_lines.principal_amount",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 principal_amount 如何承载本金金额需求，并统一零售本金与机构授信名义金额。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.principal_amount.SOURCE_FIELD.SOURCE_FIELD.column.institutional_loans.notional_amount",
      "source": "implementation_field.loan_exposure_report_lines.principal_amount",
      "target": "column.institutional_loans.notional_amount",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 principal_amount 如何承载本金金额需求，并统一零售本金与机构授信名义金额。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.principal_amount.SOURCE_FIELD.SOURCE_FIELD.column.retail_loans.principal_amount",
      "source": "implementation_field.loan_exposure_report_lines.principal_amount",
      "target": "column.retail_loans.principal_amount",
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
      "id": "edge.implementation_field.loan_exposure_report_lines.exposure_at_default_amount.MAPS_TO_FIELD.MAPS_TO_FIELD.column.loan_exposure_report_lines.exposure_at_default_amount",
      "source": "implementation_field.loan_exposure_report_lines.exposure_at_default_amount",
      "target": "column.loan_exposure_report_lines.exposure_at_default_amount",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 exposure_at_default_amount 如何承载风险暴露金额需求，并作为监管信用风险计算基础。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.exposure_at_default_amount.SOURCE_FIELD.SOURCE_FIELD.column.institutional_loans.notional_amount",
      "source": "implementation_field.loan_exposure_report_lines.exposure_at_default_amount",
      "target": "column.institutional_loans.notional_amount",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 exposure_at_default_amount 如何承载风险暴露金额需求，并作为监管信用风险计算基础。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.exposure_at_default_amount.SOURCE_FIELD.SOURCE_FIELD.column.retail_loans.principal_amount",
      "source": "implementation_field.loan_exposure_report_lines.exposure_at_default_amount",
      "target": "column.retail_loans.principal_amount",
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
      "id": "edge.implementation_field.loan_exposure_report_lines.expected_loss_amount.MAPS_TO_FIELD.MAPS_TO_FIELD.column.loan_exposure_report_lines.expected_loss_amount",
      "source": "implementation_field.loan_exposure_report_lines.expected_loss_amount",
      "target": "column.loan_exposure_report_lines.expected_loss_amount",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 expected_loss_amount 如何承载预期损失金额需求，并由风险暴露、违约概率和违约损失率计算得到。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.expected_loss_amount.SOURCE_FIELD.SOURCE_FIELD.column.institutional_loans.loss_given_default",
      "source": "implementation_field.loan_exposure_report_lines.expected_loss_amount",
      "target": "column.institutional_loans.loss_given_default",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 expected_loss_amount 如何承载预期损失金额需求，并由风险暴露、违约概率和违约损失率计算得到。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.expected_loss_amount.SOURCE_FIELD.SOURCE_FIELD.column.institutional_loans.notional_amount",
      "source": "implementation_field.loan_exposure_report_lines.expected_loss_amount",
      "target": "column.institutional_loans.notional_amount",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 expected_loss_amount 如何承载预期损失金额需求，并由风险暴露、违约概率和违约损失率计算得到。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.expected_loss_amount.SOURCE_FIELD.SOURCE_FIELD.column.institutional_loans.probability_default",
      "source": "implementation_field.loan_exposure_report_lines.expected_loss_amount",
      "target": "column.institutional_loans.probability_default",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 expected_loss_amount 如何承载预期损失金额需求，并由风险暴露、违约概率和违约损失率计算得到。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.expected_loss_amount.SOURCE_FIELD.SOURCE_FIELD.column.retail_loans.lgd",
      "source": "implementation_field.loan_exposure_report_lines.expected_loss_amount",
      "target": "column.retail_loans.lgd",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 expected_loss_amount 如何承载预期损失金额需求，并由风险暴露、违约概率和违约损失率计算得到。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.expected_loss_amount.SOURCE_FIELD.SOURCE_FIELD.column.retail_loans.pd",
      "source": "implementation_field.loan_exposure_report_lines.expected_loss_amount",
      "target": "column.retail_loans.pd",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明报表明细字段 expected_loss_amount 如何承载预期损失金额需求，并由风险暴露、违约概率和违约损失率计算得到。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.loan_exposure_report_lines.expected_loss_amount.SOURCE_FIELD.SOURCE_FIELD.column.retail_loans.principal_amount",
      "source": "implementation_field.loan_exposure_report_lines.expected_loss_amount",
      "target": "column.retail_loans.principal_amount",
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
      "id": "edge.report_impl.item.SOURCE_TABLE.SOURCE_TABLE.table.institutional_loans",
      "source": "report_impl.item",
      "target": "table.institutional_loans",
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
      "id": "edge.report_impl.item.SOURCE_TABLE.SOURCE_TABLE.table.loan_exposure_report_lines",
      "source": "report_impl.item",
      "target": "table.loan_exposure_report_lines",
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
      "id": "edge.report_impl.item.SOURCE_TABLE.SOURCE_TABLE.table.retail_loans",
      "source": "report_impl.item",
      "target": "table.retail_loans",
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
