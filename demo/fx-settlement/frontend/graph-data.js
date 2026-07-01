window.GRAPH_DATA = {
  "nodes": [
    {
      "id": "concept.AccountData",
      "type": "base_entity_concept",
      "label": "AccountData",
      "properties": {
        "description": "Base concept for account-like records with common account identifiers.",
        "concept_type": "EntityType",
        "base_entity": true,
        "extends": [
          "Any"
        ],
        "identify_by": [
          "has_AccountIdentifier"
        ],
        "requires": [],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ],
        "definition_warnings": []
      }
    },
    {
      "id": "value.AccountData.has_AccountIdentifier",
      "type": "value_type_property",
      "label": "AccountIdentifier",
      "properties": {
        "description": "Identifier common to account-like records.",
        "parent": "concept.AccountData",
        "data_type": "AccountIdentifier",
        "value_concept": "AccountIdentifier",
        "field_name": "has_AccountIdentifier",
        "relationship_name": "has_AccountIdentifier",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{AccountData} has account identifier {AccountIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "concept.InstructionData",
      "type": "base_entity_concept",
      "label": "InstructionData",
      "properties": {
        "description": "Base concept for operational instruction records with stable instruction identifiers.",
        "concept_type": "EntityType",
        "base_entity": true,
        "extends": [
          "Any"
        ],
        "identify_by": [
          "has_InstructionIdentifier"
        ],
        "requires": [],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ],
        "definition_warnings": []
      }
    },
    {
      "id": "value.InstructionData.has_InstructionIdentifier",
      "type": "value_type_property",
      "label": "InstructionIdentifier",
      "properties": {
        "description": "Identifier common to operational instruction records.",
        "parent": "concept.InstructionData",
        "data_type": "InstructionIdentifier",
        "value_concept": "InstructionIdentifier",
        "field_name": "has_InstructionIdentifier",
        "relationship_name": "has_InstructionIdentifier",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{InstructionData} has instruction identifier {InstructionIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "concept.PartyData",
      "type": "base_entity_concept",
      "label": "PartyData",
      "properties": {
        "description": "Base concept for counterparty-like records with stable party identifiers.",
        "concept_type": "EntityType",
        "base_entity": true,
        "extends": [
          "Any"
        ],
        "identify_by": [
          "has_CounterpartyIdentifier"
        ],
        "requires": [],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ],
        "definition_warnings": []
      }
    },
    {
      "id": "value.PartyData.has_CounterpartyIdentifier",
      "type": "value_type_property",
      "label": "CounterpartyIdentifier",
      "properties": {
        "description": "Identifier common to counterparty or party records.",
        "parent": "concept.PartyData",
        "data_type": "CounterpartyIdentifier",
        "value_concept": "CounterpartyIdentifier",
        "field_name": "has_CounterpartyIdentifier",
        "relationship_name": "has_CounterpartyIdentifier",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{PartyData} has counterparty identifier {CounterpartyIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "concept.ReferenceData",
      "type": "base_entity_concept",
      "label": "ReferenceData",
      "properties": {
        "description": "Base concept for reference-data records with stable reference identifiers.",
        "concept_type": "EntityType",
        "base_entity": true,
        "extends": [
          "Any"
        ],
        "identify_by": [
          "has_ReferenceIdentifier"
        ],
        "requires": [],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ],
        "definition_warnings": []
      }
    },
    {
      "id": "value.ReferenceData.has_ReferenceIdentifier",
      "type": "value_type_property",
      "label": "ReferenceIdentifier",
      "properties": {
        "description": "Identifier common to reference-data records.",
        "parent": "concept.ReferenceData",
        "data_type": "ReferenceIdentifier",
        "value_concept": "ReferenceIdentifier",
        "field_name": "has_ReferenceIdentifier",
        "relationship_name": "has_ReferenceIdentifier",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{ReferenceData} has reference identifier {ReferenceIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "concept.TransactionData",
      "type": "base_entity_concept",
      "label": "TransactionData",
      "properties": {
        "description": "Base concept for transaction-like records with stable transaction identifiers and booking dates.",
        "concept_type": "EntityType",
        "base_entity": true,
        "extends": [
          "Any"
        ],
        "identify_by": [
          "has_TransactionIdentifier"
        ],
        "requires": [],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ],
        "definition_warnings": []
      }
    },
    {
      "id": "value.TransactionData.has_TransactionIdentifier",
      "type": "value_type_property",
      "label": "TransactionIdentifier",
      "properties": {
        "description": "Identifier common to transaction-like records.",
        "parent": "concept.TransactionData",
        "data_type": "TransactionIdentifier",
        "value_concept": "TransactionIdentifier",
        "field_name": "has_TransactionIdentifier",
        "relationship_name": "has_TransactionIdentifier",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{TransactionData} has transaction identifier {TransactionIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.TransactionData.has_BookingDate",
      "type": "value_type_property",
      "label": "CalendarDate",
      "properties": {
        "description": "Business date common to transaction-like records.",
        "parent": "concept.TransactionData",
        "data_type": "CalendarDate",
        "value_concept": "CalendarDate",
        "field_name": "has_BookingDate",
        "relationship_name": "has_BookingDate",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{TransactionData} has booking date {CalendarDate}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "concept.Counterparty",
      "type": "entity_type_concept",
      "label": "Counterparty",
      "properties": {
        "description": "Legal entity or trading counterparty involved in FX trading or account ownership.",
        "concept_type": "EntityType",
        "base_entity": false,
        "extends": [
          "PartyData"
        ],
        "identify_by": [
          "has_CounterpartyIdentifier"
        ],
        "requires": [],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ],
        "definition_warnings": []
      }
    },
    {
      "id": "concept.NostroAccount",
      "type": "entity_type_concept",
      "label": "NostroAccount",
      "properties": {
        "description": "Cash settlement account used for FX payment and receipt processing.",
        "concept_type": "EntityType",
        "base_entity": false,
        "extends": [
          "AccountData"
        ],
        "identify_by": [
          "has_AccountIdentifier"
        ],
        "requires": [],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ],
        "definition_warnings": []
      }
    },
    {
      "id": "value.Counterparty.has_CounterpartyName",
      "type": "value_type_property",
      "label": "PartyName",
      "properties": {
        "description": "Human-readable legal or trading name of the counterparty.",
        "parent": "concept.Counterparty",
        "data_type": "PartyName",
        "value_concept": "PartyName",
        "field_name": "has_CounterpartyName",
        "relationship_name": "has_CounterpartyName",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Counterparty} has counterparty name {PartyName}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.Counterparty.has_CounterpartyCountry",
      "type": "value_type_property",
      "label": "CountryCode",
      "properties": {
        "description": "Country or jurisdiction associated with the counterparty.",
        "parent": "concept.Counterparty",
        "data_type": "CountryCode",
        "value_concept": "CountryCode",
        "field_name": "has_CounterpartyCountry",
        "relationship_name": "has_CounterpartyCountry",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Counterparty} has counterparty country {CountryCode}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.Counterparty.has_RiskSegment",
      "type": "value_type_property",
      "label": "RiskSegment",
      "properties": {
        "description": "Risk or client segment used for settlement monitoring.",
        "parent": "concept.Counterparty",
        "data_type": "RiskSegment",
        "value_concept": "RiskSegment",
        "field_name": "has_RiskSegment",
        "relationship_name": "has_RiskSegment",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Counterparty} has risk segment {RiskSegment}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "concept.FxRate",
      "type": "entity_type_concept",
      "label": "FxRate",
      "properties": {
        "description": "Reference FX rate used to convert trade amounts for monitoring and reporting.",
        "concept_type": "EntityType",
        "base_entity": false,
        "extends": [
          "ReferenceData"
        ],
        "identify_by": [
          "has_ReferenceIdentifier"
        ],
        "requires": [],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ],
        "definition_warnings": []
      }
    },
    {
      "id": "value.FxRate.has_BaseCurrency",
      "type": "value_type_property",
      "label": "CurrencyCode",
      "properties": {
        "description": "Base currency of the FX rate quote.",
        "parent": "concept.FxRate",
        "data_type": "CurrencyCode",
        "value_concept": "CurrencyCode",
        "field_name": "has_BaseCurrency",
        "relationship_name": "has_BaseCurrency",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{FxRate} has base currency {CurrencyCode}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.FxRate.has_QuoteCurrency",
      "type": "value_type_property",
      "label": "CurrencyCode",
      "properties": {
        "description": "Quote or reporting currency of the FX rate quote.",
        "parent": "concept.FxRate",
        "data_type": "CurrencyCode",
        "value_concept": "CurrencyCode",
        "field_name": "has_QuoteCurrency",
        "relationship_name": "has_QuoteCurrency",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{FxRate} has quote currency {CurrencyCode}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.FxRate.has_RateDate",
      "type": "value_type_property",
      "label": "CalendarDate",
      "properties": {
        "description": "Date on which the FX rate is effective.",
        "parent": "concept.FxRate",
        "data_type": "CalendarDate",
        "value_concept": "CalendarDate",
        "field_name": "has_RateDate",
        "relationship_name": "has_RateDate",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{FxRate} has rate date {CalendarDate}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.FxRate.has_RateValue",
      "type": "value_type_property",
      "label": "Rate",
      "properties": {
        "description": "Decimal exchange rate value for the currency pair.",
        "parent": "concept.FxRate",
        "data_type": "Rate",
        "value_concept": "Rate",
        "field_name": "has_RateValue",
        "relationship_name": "has_RateValue",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{FxRate} has rate value {Rate}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "concept.FxTrade",
      "type": "entity_type_concept",
      "label": "FxTrade",
      "properties": {
        "description": "Executed foreign exchange trade that must be monitored through settlement completion and exposure reporting.",
        "concept_type": "EntityType",
        "base_entity": false,
        "extends": [
          "TransactionData"
        ],
        "identify_by": [
          "has_TransactionIdentifier"
        ],
        "requires": [],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ],
        "definition_warnings": []
      }
    },
    {
      "id": "concept.SettlementInstruction",
      "type": "entity_type_concept",
      "label": "SettlementInstruction",
      "properties": {
        "description": "Payment or settlement instruction used to settle an FX trade through a nostro account.",
        "concept_type": "EntityType",
        "base_entity": false,
        "extends": [
          "InstructionData"
        ],
        "identify_by": [
          "has_InstructionIdentifier"
        ],
        "requires": [],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ],
        "definition_warnings": []
      }
    },
    {
      "id": "value.FxTrade.has_BuyCurrency",
      "type": "value_type_property",
      "label": "CurrencyCode",
      "properties": {
        "description": "Currency bought by the FX trade.",
        "parent": "concept.FxTrade",
        "data_type": "CurrencyCode",
        "value_concept": "CurrencyCode",
        "field_name": "has_BuyCurrency",
        "relationship_name": "has_BuyCurrency",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{FxTrade} has buy currency {CurrencyCode}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.FxTrade.has_SellCurrency",
      "type": "value_type_property",
      "label": "CurrencyCode",
      "properties": {
        "description": "Currency sold by the FX trade.",
        "parent": "concept.FxTrade",
        "data_type": "CurrencyCode",
        "value_concept": "CurrencyCode",
        "field_name": "has_SellCurrency",
        "relationship_name": "has_SellCurrency",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{FxTrade} has sell currency {CurrencyCode}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.FxTrade.has_NotionalAmount",
      "type": "value_type_property",
      "label": "MonetaryAmount",
      "properties": {
        "description": "Original trade notional amount before reporting-currency conversion.",
        "parent": "concept.FxTrade",
        "data_type": "MonetaryAmount",
        "value_concept": "MonetaryAmount",
        "field_name": "has_NotionalAmount",
        "relationship_name": "has_NotionalAmount",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{FxTrade} has notional amount {MonetaryAmount}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.FxTrade.has_SettlementDate",
      "type": "value_type_property",
      "label": "CalendarDate",
      "properties": {
        "description": "Contractual settlement date for the FX trade.",
        "parent": "concept.FxTrade",
        "data_type": "CalendarDate",
        "value_concept": "CalendarDate",
        "field_name": "has_SettlementDate",
        "relationship_name": "has_SettlementDate",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{FxTrade} has settlement date {CalendarDate}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.FxTrade.has_ReportCurrencyExposureAmount",
      "type": "value_type_property",
      "label": "MonetaryAmount",
      "properties": {
        "description": "Calculated exposure amount after applying the relevant FX rate for monitoring.",
        "parent": "concept.FxTrade",
        "data_type": "MonetaryAmount",
        "value_concept": "MonetaryAmount",
        "field_name": "has_ReportCurrencyExposureAmount",
        "relationship_name": "has_ReportCurrencyExposureAmount",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{FxTrade} has report currency exposure amount {MonetaryAmount}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ],
        "calculation_type": "metric",
        "semantic_metric": "report_currency_exposure_amount",
        "semantic_reference": "metric.report_currency_exposure_amount",
        "expression": "fx_trades.notional_amount * fx_rates.rate_value",
        "source_fields": [
          "fx_rates.rate_value",
          "fx_trades.notional_amount"
        ],
        "metric": {
          "name": "report_currency_exposure_amount",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "fx_trades.notional_amount * fx_rates.rate_value"
              }
            ]
          },
          "description": "FX trade notional amount converted into reporting currency using the referenced FX rate.",
          "ai_context": {
            "metric_type": "calculated_settlement_monitoring_measure"
          },
          "custom_extensions": []
        }
      }
    },
    {
      "id": "value.NostroAccount.has_AccountCurrency",
      "type": "value_type_property",
      "label": "CurrencyCode",
      "properties": {
        "description": "Currency in which the nostro account settles cash.",
        "parent": "concept.NostroAccount",
        "data_type": "CurrencyCode",
        "value_concept": "CurrencyCode",
        "field_name": "has_AccountCurrency",
        "relationship_name": "has_AccountCurrency",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{NostroAccount} has account currency {CurrencyCode}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.NostroAccount.has_AccountStatus",
      "type": "value_type_property",
      "label": "StatusCode",
      "properties": {
        "description": "Operational lifecycle status of the nostro account.",
        "parent": "concept.NostroAccount",
        "data_type": "StatusCode",
        "value_concept": "StatusCode",
        "field_name": "has_AccountStatus",
        "relationship_name": "has_AccountStatus",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{NostroAccount} has account status {StatusCode}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.SettlementInstruction.has_SettlementCurrency",
      "type": "value_type_property",
      "label": "CurrencyCode",
      "properties": {
        "description": "Currency in which the settlement instruction is executed.",
        "parent": "concept.SettlementInstruction",
        "data_type": "CurrencyCode",
        "value_concept": "CurrencyCode",
        "field_name": "has_SettlementCurrency",
        "relationship_name": "has_SettlementCurrency",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{SettlementInstruction} has settlement currency {CurrencyCode}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.SettlementInstruction.has_SettlementAmount",
      "type": "value_type_property",
      "label": "MonetaryAmount",
      "properties": {
        "description": "Cash amount instructed for FX settlement.",
        "parent": "concept.SettlementInstruction",
        "data_type": "MonetaryAmount",
        "value_concept": "MonetaryAmount",
        "field_name": "has_SettlementAmount",
        "relationship_name": "has_SettlementAmount",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{SettlementInstruction} has settlement amount {MonetaryAmount}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.SettlementInstruction.has_SettlementValueDate",
      "type": "value_type_property",
      "label": "CalendarDate",
      "properties": {
        "description": "Value date on which the settlement instruction is expected to settle.",
        "parent": "concept.SettlementInstruction",
        "data_type": "CalendarDate",
        "value_concept": "CalendarDate",
        "field_name": "has_SettlementValueDate",
        "relationship_name": "has_SettlementValueDate",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{SettlementInstruction} has settlement value date {CalendarDate}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.SettlementInstruction.has_SettlementStatus",
      "type": "value_type_property",
      "label": "SettlementStatus",
      "properties": {
        "description": "Operational status of the settlement instruction.",
        "parent": "concept.SettlementInstruction",
        "data_type": "SettlementStatus",
        "value_concept": "SettlementStatus",
        "field_name": "has_SettlementStatus",
        "relationship_name": "has_SettlementStatus",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{SettlementInstruction} has settlement status {SettlementStatus}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.SettlementInstruction.has_ExpectedSettlementDate",
      "type": "value_type_property",
      "label": "CalendarDate",
      "properties": {
        "description": "Date by which settlement is expected to complete.",
        "parent": "concept.SettlementInstruction",
        "data_type": "CalendarDate",
        "value_concept": "CalendarDate",
        "field_name": "has_ExpectedSettlementDate",
        "relationship_name": "has_ExpectedSettlementDate",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{SettlementInstruction} has expected settlement date {CalendarDate}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.SettlementInstruction.has_ActualSettlementDate",
      "type": "value_type_property",
      "label": "CalendarDate",
      "properties": {
        "description": "Date on which settlement actually completed.",
        "parent": "concept.SettlementInstruction",
        "data_type": "CalendarDate",
        "value_concept": "CalendarDate",
        "field_name": "has_ActualSettlementDate",
        "relationship_name": "has_ActualSettlementDate",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{SettlementInstruction} has actual settlement date {CalendarDate}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.SettlementInstruction.has_SettlementDelayDays",
      "type": "value_type_property",
      "label": "DayCount",
      "properties": {
        "description": "Calculated number of days between expected and actual settlement completion.",
        "parent": "concept.SettlementInstruction",
        "data_type": "DayCount",
        "value_concept": "DayCount",
        "field_name": "has_SettlementDelayDays",
        "relationship_name": "has_SettlementDelayDays",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{SettlementInstruction} has settlement delay days {DayCount}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ],
        "calculation_type": "metric",
        "semantic_metric": "settlement_delay_days",
        "semantic_reference": "metric.settlement_delay_days",
        "expression": "DATEDIFF(day, settlement_instructions.expected_settlement_date, settlement_instructions.actual_settlement_date)",
        "source_fields": [
          "settlement_instructions.actual_settlement_date",
          "settlement_instructions.expected_settlement_date"
        ],
        "metric": {
          "name": "settlement_delay_days",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "DATEDIFF(day, settlement_instructions.expected_settlement_date, settlement_instructions.actual_settlement_date)"
              }
            ]
          },
          "description": "Settlement delay measured as the day difference between expected and actual settlement completion dates.",
          "ai_context": {
            "metric_type": "calculated_settlement_monitoring_measure"
          },
          "custom_extensions": []
        }
      }
    },
    {
      "id": "value.Counterparty.has_CounterpartyIdentifier",
      "type": "value_type_property",
      "label": "CounterpartyIdentifier",
      "properties": {
        "description": "Identifier common to counterparty or party records.",
        "parent": "concept.Counterparty",
        "data_type": "CounterpartyIdentifier",
        "value_concept": "CounterpartyIdentifier",
        "field_name": "has_CounterpartyIdentifier",
        "relationship_name": "has_CounterpartyIdentifier",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{PartyData} has counterparty identifier {CounterpartyIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "inherited": true,
        "inherited_from": "PartyData",
        "base_relationship_path": "PartyData.has_CounterpartyIdentifier",
        "inheritance_note": "Inherited from PartyData.",
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.FxRate.has_ReferenceIdentifier",
      "type": "value_type_property",
      "label": "ReferenceIdentifier",
      "properties": {
        "description": "Identifier common to reference-data records.",
        "parent": "concept.FxRate",
        "data_type": "ReferenceIdentifier",
        "value_concept": "ReferenceIdentifier",
        "field_name": "has_ReferenceIdentifier",
        "relationship_name": "has_ReferenceIdentifier",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{ReferenceData} has reference identifier {ReferenceIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "inherited": true,
        "inherited_from": "ReferenceData",
        "base_relationship_path": "ReferenceData.has_ReferenceIdentifier",
        "inheritance_note": "Inherited from ReferenceData.",
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.FxTrade.has_TransactionIdentifier",
      "type": "value_type_property",
      "label": "TransactionIdentifier",
      "properties": {
        "description": "Identifier common to transaction-like records.",
        "parent": "concept.FxTrade",
        "data_type": "TransactionIdentifier",
        "value_concept": "TransactionIdentifier",
        "field_name": "has_TransactionIdentifier",
        "relationship_name": "has_TransactionIdentifier",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{TransactionData} has transaction identifier {TransactionIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "inherited": true,
        "inherited_from": "TransactionData",
        "base_relationship_path": "TransactionData.has_TransactionIdentifier",
        "inheritance_note": "Inherited from TransactionData.",
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.FxTrade.has_BookingDate",
      "type": "value_type_property",
      "label": "CalendarDate",
      "properties": {
        "description": "Business date common to transaction-like records.",
        "parent": "concept.FxTrade",
        "data_type": "CalendarDate",
        "value_concept": "CalendarDate",
        "field_name": "has_BookingDate",
        "relationship_name": "has_BookingDate",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{TransactionData} has booking date {CalendarDate}"
        ],
        "source_field": "ontology.extends.relationships",
        "inherited": true,
        "inherited_from": "TransactionData",
        "base_relationship_path": "TransactionData.has_BookingDate",
        "inheritance_note": "Inherited from TransactionData.",
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.NostroAccount.has_AccountIdentifier",
      "type": "value_type_property",
      "label": "AccountIdentifier",
      "properties": {
        "description": "Identifier common to account-like records.",
        "parent": "concept.NostroAccount",
        "data_type": "AccountIdentifier",
        "value_concept": "AccountIdentifier",
        "field_name": "has_AccountIdentifier",
        "relationship_name": "has_AccountIdentifier",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{AccountData} has account identifier {AccountIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "inherited": true,
        "inherited_from": "AccountData",
        "base_relationship_path": "AccountData.has_AccountIdentifier",
        "inheritance_note": "Inherited from AccountData.",
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "value.SettlementInstruction.has_InstructionIdentifier",
      "type": "value_type_property",
      "label": "InstructionIdentifier",
      "properties": {
        "description": "Identifier common to operational instruction records.",
        "parent": "concept.SettlementInstruction",
        "data_type": "InstructionIdentifier",
        "value_concept": "InstructionIdentifier",
        "field_name": "has_InstructionIdentifier",
        "relationship_name": "has_InstructionIdentifier",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{InstructionData} has instruction identifier {InstructionIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "inherited": true,
        "inherited_from": "InstructionData",
        "base_relationship_path": "InstructionData.has_InstructionIdentifier",
        "inheritance_note": "Inherited from InstructionData.",
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      }
    },
    {
      "id": "dataset.counterparties",
      "type": "semantic_dataset",
      "label": "counterparties",
      "properties": {
        "description": "Counterparty master records at legal entity grain, providing names, jurisdiction, and risk segment attributes used for FX settlement monitoring.",
        "source": "counterparty_master.counterparties",
        "primary_key": [
          "counterparty_id"
        ],
        "unique_keys": [],
        "field_count": 4,
        "ai_context": {
          "physical_kind": "table"
        },
        "physical_kind": "table",
        "source_tables": [
          "counterparty_master.counterparties"
        ],
        "custom_extensions": [],
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "table.counterparty_master.counterparties",
      "type": "physical_table",
      "label": "counterparties",
      "properties": {
        "description": "",
        "source": "counterparty_master.counterparties",
        "source_dataset": "fx_settlement_monitoring_lines",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology"
      }
    },
    {
      "id": "field.counterparties.counterparty_id",
      "type": "dataset_field",
      "label": "counterparty_id",
      "properties": {
        "description": "Stable master identifier for a trading or account counterparty.",
        "parent": "dataset.counterparties",
        "data_type": "string",
        "nullable": false,
        "expression": "counterparty_id",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "counterparty_id",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "counterparty_id"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Stable master identifier for a trading or account counterparty.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "counterparties",
        "field": "counterparty_id",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.counterparty_master.counterparties.counterparty_id",
      "type": "column",
      "label": "counterparty_id",
      "properties": {
        "description": "Stable master identifier for a trading or account counterparty.",
        "parent": "table.counterparty_master.counterparties",
        "data_type": "string",
        "nullable": false,
        "expression": "counterparty_id",
        "physical_field": "counterparty_master.counterparties.counterparty_id",
        "dataset_field": "counterparties.counterparty_id"
      }
    },
    {
      "id": "field.counterparties.counterparty_name",
      "type": "dataset_field",
      "label": "counterparty_name",
      "properties": {
        "description": "Legal or trading display name of the counterparty.",
        "parent": "dataset.counterparties",
        "data_type": "string",
        "nullable": false,
        "expression": "counterparty_name",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "counterparty_name",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "counterparty_name"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Legal or trading display name of the counterparty.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "counterparties",
        "field": "counterparty_name",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.counterparty_master.counterparties.counterparty_name",
      "type": "column",
      "label": "counterparty_name",
      "properties": {
        "description": "Legal or trading display name of the counterparty.",
        "parent": "table.counterparty_master.counterparties",
        "data_type": "string",
        "nullable": false,
        "expression": "counterparty_name",
        "physical_field": "counterparty_master.counterparties.counterparty_name",
        "dataset_field": "counterparties.counterparty_name"
      }
    },
    {
      "id": "field.counterparties.counterparty_country",
      "type": "dataset_field",
      "label": "counterparty_country",
      "properties": {
        "description": "Country or jurisdiction associated with the counterparty master record.",
        "parent": "dataset.counterparties",
        "data_type": "string",
        "nullable": false,
        "expression": "counterparty_country",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "counterparty_country",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "counterparty_country"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Country or jurisdiction associated with the counterparty master record.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "counterparties",
        "field": "counterparty_country",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.counterparty_master.counterparties.counterparty_country",
      "type": "column",
      "label": "counterparty_country",
      "properties": {
        "description": "Country or jurisdiction associated with the counterparty master record.",
        "parent": "table.counterparty_master.counterparties",
        "data_type": "string",
        "nullable": false,
        "expression": "counterparty_country",
        "physical_field": "counterparty_master.counterparties.counterparty_country",
        "dataset_field": "counterparties.counterparty_country"
      }
    },
    {
      "id": "field.counterparties.risk_segment",
      "type": "dataset_field",
      "label": "risk_segment",
      "properties": {
        "description": "Risk or client segment assigned to the counterparty for monitoring.",
        "parent": "dataset.counterparties",
        "data_type": "string",
        "nullable": false,
        "expression": "risk_segment",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "risk_segment",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "risk_segment"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Risk or client segment assigned to the counterparty for monitoring.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "counterparties",
        "field": "risk_segment",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.counterparty_master.counterparties.risk_segment",
      "type": "column",
      "label": "risk_segment",
      "properties": {
        "description": "Risk or client segment assigned to the counterparty for monitoring.",
        "parent": "table.counterparty_master.counterparties",
        "data_type": "string",
        "nullable": false,
        "expression": "risk_segment",
        "physical_field": "counterparty_master.counterparties.risk_segment",
        "dataset_field": "counterparties.risk_segment"
      }
    },
    {
      "id": "dataset.fx_rates",
      "type": "semantic_dataset",
      "label": "fx_rates",
      "properties": {
        "description": "FX rate reference records at currency-pair and rate-date grain, used to convert trade notional amounts into reporting currency.",
        "source": "market_data.fx_rates",
        "primary_key": [
          "rate_id"
        ],
        "unique_keys": [],
        "field_count": 5,
        "ai_context": {
          "physical_kind": "table"
        },
        "physical_kind": "table",
        "source_tables": [
          "market_data.fx_rates"
        ],
        "custom_extensions": [],
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "table.market_data.fx_rates",
      "type": "physical_table",
      "label": "fx_rates",
      "properties": {
        "description": "",
        "source": "market_data.fx_rates",
        "source_dataset": "fx_settlement_monitoring_lines",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology"
      }
    },
    {
      "id": "field.fx_rates.rate_id",
      "type": "dataset_field",
      "label": "rate_id",
      "properties": {
        "description": "Stable identifier for an FX rate reference record.",
        "parent": "dataset.fx_rates",
        "data_type": "string",
        "nullable": false,
        "expression": "rate_id",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "rate_id",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "rate_id"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Stable identifier for an FX rate reference record.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "fx_rates",
        "field": "rate_id",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.market_data.fx_rates.rate_id",
      "type": "column",
      "label": "rate_id",
      "properties": {
        "description": "Stable identifier for an FX rate reference record.",
        "parent": "table.market_data.fx_rates",
        "data_type": "string",
        "nullable": false,
        "expression": "rate_id",
        "physical_field": "market_data.fx_rates.rate_id",
        "dataset_field": "fx_rates.rate_id"
      }
    },
    {
      "id": "field.fx_rates.base_currency",
      "type": "dataset_field",
      "label": "base_currency",
      "properties": {
        "description": "Base currency of the FX quote.",
        "parent": "dataset.fx_rates",
        "data_type": "string",
        "nullable": false,
        "expression": "base_currency",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "base_currency",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "base_currency"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Base currency of the FX quote.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "fx_rates",
        "field": "base_currency",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.market_data.fx_rates.base_currency",
      "type": "column",
      "label": "base_currency",
      "properties": {
        "description": "Base currency of the FX quote.",
        "parent": "table.market_data.fx_rates",
        "data_type": "string",
        "nullable": false,
        "expression": "base_currency",
        "physical_field": "market_data.fx_rates.base_currency",
        "dataset_field": "fx_rates.base_currency"
      }
    },
    {
      "id": "field.fx_rates.quote_currency",
      "type": "dataset_field",
      "label": "quote_currency",
      "properties": {
        "description": "Quote or reporting currency of the FX quote.",
        "parent": "dataset.fx_rates",
        "data_type": "string",
        "nullable": false,
        "expression": "quote_currency",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "quote_currency",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "quote_currency"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Quote or reporting currency of the FX quote.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "fx_rates",
        "field": "quote_currency",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.market_data.fx_rates.quote_currency",
      "type": "column",
      "label": "quote_currency",
      "properties": {
        "description": "Quote or reporting currency of the FX quote.",
        "parent": "table.market_data.fx_rates",
        "data_type": "string",
        "nullable": false,
        "expression": "quote_currency",
        "physical_field": "market_data.fx_rates.quote_currency",
        "dataset_field": "fx_rates.quote_currency"
      }
    },
    {
      "id": "field.fx_rates.rate_date",
      "type": "dataset_field",
      "label": "rate_date",
      "properties": {
        "description": "Effective date of the FX rate.",
        "parent": "dataset.fx_rates",
        "data_type": "date",
        "nullable": false,
        "expression": "rate_date",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "date",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "rate_date",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "rate_date"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Effective date of the FX rate.",
          "ai_context": {
            "physical_type": "date",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "fx_rates",
        "field": "rate_date",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.market_data.fx_rates.rate_date",
      "type": "column",
      "label": "rate_date",
      "properties": {
        "description": "Effective date of the FX rate.",
        "parent": "table.market_data.fx_rates",
        "data_type": "date",
        "nullable": false,
        "expression": "rate_date",
        "physical_field": "market_data.fx_rates.rate_date",
        "dataset_field": "fx_rates.rate_date"
      }
    },
    {
      "id": "field.fx_rates.rate_value",
      "type": "dataset_field",
      "label": "rate_value",
      "properties": {
        "description": "Decimal rate value used for currency conversion.",
        "parent": "dataset.fx_rates",
        "data_type": "decimal",
        "nullable": false,
        "expression": "rate_value",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "decimal",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "rate_value",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "rate_value"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Decimal rate value used for currency conversion.",
          "ai_context": {
            "physical_type": "decimal",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "fx_rates",
        "field": "rate_value",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.market_data.fx_rates.rate_value",
      "type": "column",
      "label": "rate_value",
      "properties": {
        "description": "Decimal rate value used for currency conversion.",
        "parent": "table.market_data.fx_rates",
        "data_type": "decimal",
        "nullable": false,
        "expression": "rate_value",
        "physical_field": "market_data.fx_rates.rate_value",
        "dataset_field": "fx_rates.rate_value"
      }
    },
    {
      "id": "dataset.fx_settlement_monitoring_lines",
      "type": "semantic_dataset",
      "label": "fx_settlement_monitoring_lines",
      "properties": {
        "description": "Prepared FX settlement monitoring line dataset at trade and settlement-instruction grain, combining trade, settlement, counterparty, account, and FX rate context for operational reporting review.",
        "source": "query.fx_settlement_monitoring_lines",
        "primary_key": [],
        "unique_keys": [],
        "field_count": 8,
        "ai_context": {
          "physical_kind": "query"
        },
        "physical_kind": "query",
        "source_tables": [
          "fx_trading_core.fx_trades",
          "payments_core.settlement_instructions",
          "counterparty_master.counterparties",
          "nostro_master.nostro_accounts",
          "market_data.fx_rates"
        ],
        "custom_extensions": [
          {
            "vendor_name": "OSI_KG_UI",
            "data": "{\"name\":\"physical_source\",\"kind\":\"query\",\"description\":\"Monitoring lines are produced by a documented query that combines FX trades, settlement instructions, counterparties, nostro accounts, and FX rates for daily review.\",\"sql\":\"select t.trade_id, s.settlement_instruction_id, t.counterparty_id, s.settlement_currency, s.settlement_amount, r.rate_value, t.notional_amount * r.rate_value as exposure_amount_report_currency, datediff(day, s.expected_settlement_date, s.actual_settlement_date) as settlement_delay_days from fx_trading_core.fx_trades t join payments_core.settlement_instructions s on s.trade_id = t.trade_id join market_data.fx_rates r on r.rate_id = t.rate_id\",\"depends_on\":[\"fx_trading_core.fx_trades\",\"payments_core.settlement_instructions\",\"counterparty_master.counterparties\",\"nostro_master.nostro_accounts\",\"market_data.fx_rates\"]}"
          }
        ],
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "table.fx_trading_core.fx_trades",
      "type": "physical_table",
      "label": "fx_trades",
      "properties": {
        "description": "",
        "source": "fx_trading_core.fx_trades",
        "source_dataset": "fx_trades",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology"
      }
    },
    {
      "id": "table.payments_core.settlement_instructions",
      "type": "physical_table",
      "label": "settlement_instructions",
      "properties": {
        "description": "",
        "source": "payments_core.settlement_instructions",
        "source_dataset": "settlement_instructions",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology"
      }
    },
    {
      "id": "table.nostro_master.nostro_accounts",
      "type": "physical_table",
      "label": "nostro_accounts",
      "properties": {
        "description": "",
        "source": "nostro_master.nostro_accounts",
        "source_dataset": "nostro_accounts",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology"
      }
    },
    {
      "id": "field.fx_settlement_monitoring_lines.trade_id",
      "type": "dataset_field",
      "label": "trade_id",
      "properties": {
        "description": "Trade identifier carried onto the monitoring line for reconciliation.",
        "parent": "dataset.fx_settlement_monitoring_lines",
        "data_type": "string",
        "nullable": false,
        "expression": "fx_trades.trade_id",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "trade_id",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "fx_trades.trade_id"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Trade identifier carried onto the monitoring line for reconciliation.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "fx_settlement_monitoring_lines",
        "field": "trade_id",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "field.fx_settlement_monitoring_lines.settlement_instruction_id",
      "type": "dataset_field",
      "label": "settlement_instruction_id",
      "properties": {
        "description": "Settlement instruction identifier carried onto the monitoring line.",
        "parent": "dataset.fx_settlement_monitoring_lines",
        "data_type": "string",
        "nullable": false,
        "expression": "settlement_instructions.settlement_instruction_id",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "settlement_instruction_id",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "settlement_instructions.settlement_instruction_id"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Settlement instruction identifier carried onto the monitoring line.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "fx_settlement_monitoring_lines",
        "field": "settlement_instruction_id",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "field.fx_settlement_monitoring_lines.counterparty_id",
      "type": "dataset_field",
      "label": "counterparty_id",
      "properties": {
        "description": "Counterparty identifier reported for settlement monitoring and aggregation.",
        "parent": "dataset.fx_settlement_monitoring_lines",
        "data_type": "string",
        "nullable": false,
        "expression": "fx_trades.counterparty_id",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "counterparty_id",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "fx_trades.counterparty_id"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Counterparty identifier reported for settlement monitoring and aggregation.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "fx_settlement_monitoring_lines",
        "field": "counterparty_id",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "field.fx_settlement_monitoring_lines.settlement_currency",
      "type": "dataset_field",
      "label": "settlement_currency",
      "properties": {
        "description": "Settlement currency reported on the monitoring line.",
        "parent": "dataset.fx_settlement_monitoring_lines",
        "data_type": "string",
        "nullable": false,
        "expression": "settlement_instructions.settlement_currency",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "settlement_currency",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "settlement_instructions.settlement_currency"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Settlement currency reported on the monitoring line.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "fx_settlement_monitoring_lines",
        "field": "settlement_currency",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "field.fx_settlement_monitoring_lines.settlement_amount",
      "type": "dataset_field",
      "label": "settlement_amount",
      "properties": {
        "description": "Settlement amount reported on the monitoring line.",
        "parent": "dataset.fx_settlement_monitoring_lines",
        "data_type": "decimal",
        "nullable": false,
        "expression": "settlement_instructions.settlement_amount",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "decimal",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "settlement_amount",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "settlement_instructions.settlement_amount"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Settlement amount reported on the monitoring line.",
          "ai_context": {
            "physical_type": "decimal",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "fx_settlement_monitoring_lines",
        "field": "settlement_amount",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "field.fx_settlement_monitoring_lines.settlement_status",
      "type": "dataset_field",
      "label": "settlement_status",
      "properties": {
        "description": "Settlement status reported on the monitoring line.",
        "parent": "dataset.fx_settlement_monitoring_lines",
        "data_type": "string",
        "nullable": false,
        "expression": "settlement_instructions.settlement_status",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "settlement_status",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "settlement_instructions.settlement_status"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Settlement status reported on the monitoring line.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "fx_settlement_monitoring_lines",
        "field": "settlement_status",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "field.fx_settlement_monitoring_lines.exposure_amount_report_currency",
      "type": "dataset_field",
      "label": "exposure_amount_report_currency",
      "properties": {
        "description": "Trade notional converted into reporting currency for monitoring review.",
        "parent": "dataset.fx_settlement_monitoring_lines",
        "data_type": "decimal",
        "nullable": false,
        "expression": "fx_trades.notional_amount * fx_rates.rate_value",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "decimal",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "exposure_amount_report_currency",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "fx_trades.notional_amount * fx_rates.rate_value"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Trade notional converted into reporting currency for monitoring review.",
          "ai_context": {
            "physical_type": "decimal",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "fx_settlement_monitoring_lines",
        "field": "exposure_amount_report_currency",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "field.fx_settlement_monitoring_lines.settlement_delay_days",
      "type": "dataset_field",
      "label": "settlement_delay_days",
      "properties": {
        "description": "Number of days between expected and actual settlement completion.",
        "parent": "dataset.fx_settlement_monitoring_lines",
        "data_type": "integer",
        "nullable": true,
        "expression": "DATEDIFF(day, settlement_instructions.expected_settlement_date, settlement_instructions.actual_settlement_date)",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "integer",
          "nullable": true
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "settlement_delay_days",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "DATEDIFF(day, settlement_instructions.expected_settlement_date, settlement_instructions.actual_settlement_date)"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Number of days between expected and actual settlement completion.",
          "ai_context": {
            "physical_type": "integer",
            "nullable": true
          },
          "custom_extensions": []
        },
        "dataset": "fx_settlement_monitoring_lines",
        "field": "settlement_delay_days",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "dataset.fx_trades",
      "type": "semantic_dataset",
      "label": "fx_trades",
      "properties": {
        "description": "Executed FX trade records at trade grain, carrying counterparty, currencies, notional amount, settlement date, and pricing reference used for settlement monitoring.",
        "source": "fx_trading_core.fx_trades",
        "primary_key": [
          "trade_id"
        ],
        "unique_keys": [],
        "field_count": 8,
        "ai_context": {
          "physical_kind": "table"
        },
        "physical_kind": "table",
        "source_tables": [
          "fx_trading_core.fx_trades"
        ],
        "custom_extensions": [],
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "field.fx_trades.trade_id",
      "type": "dataset_field",
      "label": "trade_id",
      "properties": {
        "description": "Stable source trade identifier for an executed FX trade.",
        "parent": "dataset.fx_trades",
        "data_type": "string",
        "nullable": false,
        "expression": "trade_id",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "trade_id",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "trade_id"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Stable source trade identifier for an executed FX trade.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "fx_trades",
        "field": "trade_id",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.fx_trading_core.fx_trades.trade_id",
      "type": "column",
      "label": "trade_id",
      "properties": {
        "description": "Stable source trade identifier for an executed FX trade.",
        "parent": "table.fx_trading_core.fx_trades",
        "data_type": "string",
        "nullable": false,
        "expression": "trade_id",
        "physical_field": "fx_trading_core.fx_trades.trade_id",
        "dataset_field": "fx_trades.trade_id"
      }
    },
    {
      "id": "field.fx_trades.trade_date",
      "type": "dataset_field",
      "label": "trade_date",
      "properties": {
        "description": "Business booking date of the FX trade.",
        "parent": "dataset.fx_trades",
        "data_type": "date",
        "nullable": false,
        "expression": "trade_date",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "date",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "trade_date",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "trade_date"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Business booking date of the FX trade.",
          "ai_context": {
            "physical_type": "date",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "fx_trades",
        "field": "trade_date",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.fx_trading_core.fx_trades.trade_date",
      "type": "column",
      "label": "trade_date",
      "properties": {
        "description": "Business booking date of the FX trade.",
        "parent": "table.fx_trading_core.fx_trades",
        "data_type": "date",
        "nullable": false,
        "expression": "trade_date",
        "physical_field": "fx_trading_core.fx_trades.trade_date",
        "dataset_field": "fx_trades.trade_date"
      }
    },
    {
      "id": "field.fx_trades.counterparty_id",
      "type": "dataset_field",
      "label": "counterparty_id",
      "properties": {
        "description": "Counterparty identifier captured at trade execution.",
        "parent": "dataset.fx_trades",
        "data_type": "string",
        "nullable": false,
        "expression": "counterparty_id",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "counterparty_id",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "counterparty_id"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Counterparty identifier captured at trade execution.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "fx_trades",
        "field": "counterparty_id",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.fx_trading_core.fx_trades.counterparty_id",
      "type": "column",
      "label": "counterparty_id",
      "properties": {
        "description": "Counterparty identifier captured at trade execution.",
        "parent": "table.fx_trading_core.fx_trades",
        "data_type": "string",
        "nullable": false,
        "expression": "counterparty_id",
        "physical_field": "fx_trading_core.fx_trades.counterparty_id",
        "dataset_field": "fx_trades.counterparty_id"
      }
    },
    {
      "id": "field.fx_trades.buy_currency",
      "type": "dataset_field",
      "label": "buy_currency",
      "properties": {
        "description": "Currency bought by the FX trade.",
        "parent": "dataset.fx_trades",
        "data_type": "string",
        "nullable": false,
        "expression": "buy_currency",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "buy_currency",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "buy_currency"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Currency bought by the FX trade.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "fx_trades",
        "field": "buy_currency",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.fx_trading_core.fx_trades.buy_currency",
      "type": "column",
      "label": "buy_currency",
      "properties": {
        "description": "Currency bought by the FX trade.",
        "parent": "table.fx_trading_core.fx_trades",
        "data_type": "string",
        "nullable": false,
        "expression": "buy_currency",
        "physical_field": "fx_trading_core.fx_trades.buy_currency",
        "dataset_field": "fx_trades.buy_currency"
      }
    },
    {
      "id": "field.fx_trades.sell_currency",
      "type": "dataset_field",
      "label": "sell_currency",
      "properties": {
        "description": "Currency sold by the FX trade.",
        "parent": "dataset.fx_trades",
        "data_type": "string",
        "nullable": false,
        "expression": "sell_currency",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "sell_currency",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "sell_currency"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Currency sold by the FX trade.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "fx_trades",
        "field": "sell_currency",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.fx_trading_core.fx_trades.sell_currency",
      "type": "column",
      "label": "sell_currency",
      "properties": {
        "description": "Currency sold by the FX trade.",
        "parent": "table.fx_trading_core.fx_trades",
        "data_type": "string",
        "nullable": false,
        "expression": "sell_currency",
        "physical_field": "fx_trading_core.fx_trades.sell_currency",
        "dataset_field": "fx_trades.sell_currency"
      }
    },
    {
      "id": "field.fx_trades.notional_amount",
      "type": "dataset_field",
      "label": "notional_amount",
      "properties": {
        "description": "Trade notional amount before reporting-currency conversion.",
        "parent": "dataset.fx_trades",
        "data_type": "decimal",
        "nullable": false,
        "expression": "notional_amount",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "decimal",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "notional_amount",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "notional_amount"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Trade notional amount before reporting-currency conversion.",
          "ai_context": {
            "physical_type": "decimal",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "fx_trades",
        "field": "notional_amount",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.fx_trading_core.fx_trades.notional_amount",
      "type": "column",
      "label": "notional_amount",
      "properties": {
        "description": "Trade notional amount before reporting-currency conversion.",
        "parent": "table.fx_trading_core.fx_trades",
        "data_type": "decimal",
        "nullable": false,
        "expression": "notional_amount",
        "physical_field": "fx_trading_core.fx_trades.notional_amount",
        "dataset_field": "fx_trades.notional_amount"
      }
    },
    {
      "id": "field.fx_trades.settlement_date",
      "type": "dataset_field",
      "label": "settlement_date",
      "properties": {
        "description": "Contractual settlement date agreed for the FX trade.",
        "parent": "dataset.fx_trades",
        "data_type": "date",
        "nullable": false,
        "expression": "settlement_date",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "date",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "settlement_date",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "settlement_date"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Contractual settlement date agreed for the FX trade.",
          "ai_context": {
            "physical_type": "date",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "fx_trades",
        "field": "settlement_date",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.fx_trading_core.fx_trades.settlement_date",
      "type": "column",
      "label": "settlement_date",
      "properties": {
        "description": "Contractual settlement date agreed for the FX trade.",
        "parent": "table.fx_trading_core.fx_trades",
        "data_type": "date",
        "nullable": false,
        "expression": "settlement_date",
        "physical_field": "fx_trading_core.fx_trades.settlement_date",
        "dataset_field": "fx_trades.settlement_date"
      }
    },
    {
      "id": "field.fx_trades.rate_id",
      "type": "dataset_field",
      "label": "rate_id",
      "properties": {
        "description": "Reference identifier of the FX rate used for reporting conversion.",
        "parent": "dataset.fx_trades",
        "data_type": "string",
        "nullable": false,
        "expression": "rate_id",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "rate_id",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "rate_id"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Reference identifier of the FX rate used for reporting conversion.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "fx_trades",
        "field": "rate_id",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.fx_trading_core.fx_trades.rate_id",
      "type": "column",
      "label": "rate_id",
      "properties": {
        "description": "Reference identifier of the FX rate used for reporting conversion.",
        "parent": "table.fx_trading_core.fx_trades",
        "data_type": "string",
        "nullable": false,
        "expression": "rate_id",
        "physical_field": "fx_trading_core.fx_trades.rate_id",
        "dataset_field": "fx_trades.rate_id"
      }
    },
    {
      "id": "dataset.nostro_accounts",
      "type": "semantic_dataset",
      "label": "nostro_accounts",
      "properties": {
        "description": "Nostro account master records at account grain, carrying account currency, operational status, and owner counterparty used for settlement routing.",
        "source": "nostro_master.nostro_accounts",
        "primary_key": [
          "account_id"
        ],
        "unique_keys": [],
        "field_count": 4,
        "ai_context": {
          "physical_kind": "table"
        },
        "physical_kind": "table",
        "source_tables": [
          "nostro_master.nostro_accounts"
        ],
        "custom_extensions": [],
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "field.nostro_accounts.account_id",
      "type": "dataset_field",
      "label": "account_id",
      "properties": {
        "description": "Stable account identifier for a nostro settlement account.",
        "parent": "dataset.nostro_accounts",
        "data_type": "string",
        "nullable": false,
        "expression": "account_id",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "account_id",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "account_id"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Stable account identifier for a nostro settlement account.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "nostro_accounts",
        "field": "account_id",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.nostro_master.nostro_accounts.account_id",
      "type": "column",
      "label": "account_id",
      "properties": {
        "description": "Stable account identifier for a nostro settlement account.",
        "parent": "table.nostro_master.nostro_accounts",
        "data_type": "string",
        "nullable": false,
        "expression": "account_id",
        "physical_field": "nostro_master.nostro_accounts.account_id",
        "dataset_field": "nostro_accounts.account_id"
      }
    },
    {
      "id": "field.nostro_accounts.account_currency",
      "type": "dataset_field",
      "label": "account_currency",
      "properties": {
        "description": "Currency in which the nostro account settles cash movements.",
        "parent": "dataset.nostro_accounts",
        "data_type": "string",
        "nullable": false,
        "expression": "account_currency",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "account_currency",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "account_currency"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Currency in which the nostro account settles cash movements.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "nostro_accounts",
        "field": "account_currency",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.nostro_master.nostro_accounts.account_currency",
      "type": "column",
      "label": "account_currency",
      "properties": {
        "description": "Currency in which the nostro account settles cash movements.",
        "parent": "table.nostro_master.nostro_accounts",
        "data_type": "string",
        "nullable": false,
        "expression": "account_currency",
        "physical_field": "nostro_master.nostro_accounts.account_currency",
        "dataset_field": "nostro_accounts.account_currency"
      }
    },
    {
      "id": "field.nostro_accounts.account_status",
      "type": "dataset_field",
      "label": "account_status",
      "properties": {
        "description": "Operational lifecycle status of the nostro account.",
        "parent": "dataset.nostro_accounts",
        "data_type": "string",
        "nullable": false,
        "expression": "account_status",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "account_status",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "account_status"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Operational lifecycle status of the nostro account.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "nostro_accounts",
        "field": "account_status",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.nostro_master.nostro_accounts.account_status",
      "type": "column",
      "label": "account_status",
      "properties": {
        "description": "Operational lifecycle status of the nostro account.",
        "parent": "table.nostro_master.nostro_accounts",
        "data_type": "string",
        "nullable": false,
        "expression": "account_status",
        "physical_field": "nostro_master.nostro_accounts.account_status",
        "dataset_field": "nostro_accounts.account_status"
      }
    },
    {
      "id": "field.nostro_accounts.owner_counterparty_id",
      "type": "dataset_field",
      "label": "owner_counterparty_id",
      "properties": {
        "description": "Counterparty identifier responsible for or owning the nostro account.",
        "parent": "dataset.nostro_accounts",
        "data_type": "string",
        "nullable": false,
        "expression": "owner_counterparty_id",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "owner_counterparty_id",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "owner_counterparty_id"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Counterparty identifier responsible for or owning the nostro account.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "nostro_accounts",
        "field": "owner_counterparty_id",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.nostro_master.nostro_accounts.owner_counterparty_id",
      "type": "column",
      "label": "owner_counterparty_id",
      "properties": {
        "description": "Counterparty identifier responsible for or owning the nostro account.",
        "parent": "table.nostro_master.nostro_accounts",
        "data_type": "string",
        "nullable": false,
        "expression": "owner_counterparty_id",
        "physical_field": "nostro_master.nostro_accounts.owner_counterparty_id",
        "dataset_field": "nostro_accounts.owner_counterparty_id"
      }
    },
    {
      "id": "dataset.settlement_instructions",
      "type": "semantic_dataset",
      "label": "settlement_instructions",
      "properties": {
        "description": "FX settlement instruction records at instruction grain, carrying the linked trade, nostro account, settlement currency, amount, value dates, and operational status.",
        "source": "payments_core.settlement_instructions",
        "primary_key": [
          "settlement_instruction_id"
        ],
        "unique_keys": [],
        "field_count": 9,
        "ai_context": {
          "physical_kind": "table"
        },
        "physical_kind": "table",
        "source_tables": [
          "payments_core.settlement_instructions"
        ],
        "custom_extensions": [],
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "field.settlement_instructions.settlement_instruction_id",
      "type": "dataset_field",
      "label": "settlement_instruction_id",
      "properties": {
        "description": "Stable operational identifier for the FX settlement instruction.",
        "parent": "dataset.settlement_instructions",
        "data_type": "string",
        "nullable": false,
        "expression": "settlement_instruction_id",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "settlement_instruction_id",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "settlement_instruction_id"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Stable operational identifier for the FX settlement instruction.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "settlement_instructions",
        "field": "settlement_instruction_id",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.payments_core.settlement_instructions.settlement_instruction_id",
      "type": "column",
      "label": "settlement_instruction_id",
      "properties": {
        "description": "Stable operational identifier for the FX settlement instruction.",
        "parent": "table.payments_core.settlement_instructions",
        "data_type": "string",
        "nullable": false,
        "expression": "settlement_instruction_id",
        "physical_field": "payments_core.settlement_instructions.settlement_instruction_id",
        "dataset_field": "settlement_instructions.settlement_instruction_id"
      }
    },
    {
      "id": "field.settlement_instructions.trade_id",
      "type": "dataset_field",
      "label": "trade_id",
      "properties": {
        "description": "Trade identifier whose cash movement is governed by the settlement instruction.",
        "parent": "dataset.settlement_instructions",
        "data_type": "string",
        "nullable": false,
        "expression": "trade_id",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "trade_id",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "trade_id"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Trade identifier whose cash movement is governed by the settlement instruction.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "settlement_instructions",
        "field": "trade_id",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.payments_core.settlement_instructions.trade_id",
      "type": "column",
      "label": "trade_id",
      "properties": {
        "description": "Trade identifier whose cash movement is governed by the settlement instruction.",
        "parent": "table.payments_core.settlement_instructions",
        "data_type": "string",
        "nullable": false,
        "expression": "trade_id",
        "physical_field": "payments_core.settlement_instructions.trade_id",
        "dataset_field": "settlement_instructions.trade_id"
      }
    },
    {
      "id": "field.settlement_instructions.nostro_account_id",
      "type": "dataset_field",
      "label": "nostro_account_id",
      "properties": {
        "description": "Nostro account identifier used to settle the instruction.",
        "parent": "dataset.settlement_instructions",
        "data_type": "string",
        "nullable": false,
        "expression": "nostro_account_id",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "nostro_account_id",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "nostro_account_id"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Nostro account identifier used to settle the instruction.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "settlement_instructions",
        "field": "nostro_account_id",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.payments_core.settlement_instructions.nostro_account_id",
      "type": "column",
      "label": "nostro_account_id",
      "properties": {
        "description": "Nostro account identifier used to settle the instruction.",
        "parent": "table.payments_core.settlement_instructions",
        "data_type": "string",
        "nullable": false,
        "expression": "nostro_account_id",
        "physical_field": "payments_core.settlement_instructions.nostro_account_id",
        "dataset_field": "settlement_instructions.nostro_account_id"
      }
    },
    {
      "id": "field.settlement_instructions.settlement_currency",
      "type": "dataset_field",
      "label": "settlement_currency",
      "properties": {
        "description": "Currency in which the instruction settles.",
        "parent": "dataset.settlement_instructions",
        "data_type": "string",
        "nullable": false,
        "expression": "settlement_currency",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "settlement_currency",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "settlement_currency"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Currency in which the instruction settles.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "settlement_instructions",
        "field": "settlement_currency",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.payments_core.settlement_instructions.settlement_currency",
      "type": "column",
      "label": "settlement_currency",
      "properties": {
        "description": "Currency in which the instruction settles.",
        "parent": "table.payments_core.settlement_instructions",
        "data_type": "string",
        "nullable": false,
        "expression": "settlement_currency",
        "physical_field": "payments_core.settlement_instructions.settlement_currency",
        "dataset_field": "settlement_instructions.settlement_currency"
      }
    },
    {
      "id": "field.settlement_instructions.settlement_amount",
      "type": "dataset_field",
      "label": "settlement_amount",
      "properties": {
        "description": "Monetary cash obligation that the instruction must settle in the stated settlement currency.",
        "parent": "dataset.settlement_instructions",
        "data_type": "decimal",
        "nullable": false,
        "expression": "settlement_amount",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "decimal",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "settlement_amount",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "settlement_amount"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Monetary cash obligation that the instruction must settle in the stated settlement currency.",
          "ai_context": {
            "physical_type": "decimal",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "settlement_instructions",
        "field": "settlement_amount",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.payments_core.settlement_instructions.settlement_amount",
      "type": "column",
      "label": "settlement_amount",
      "properties": {
        "description": "Monetary cash obligation that the instruction must settle in the stated settlement currency.",
        "parent": "table.payments_core.settlement_instructions",
        "data_type": "decimal",
        "nullable": false,
        "expression": "settlement_amount",
        "physical_field": "payments_core.settlement_instructions.settlement_amount",
        "dataset_field": "settlement_instructions.settlement_amount"
      }
    },
    {
      "id": "field.settlement_instructions.settlement_value_date",
      "type": "dataset_field",
      "label": "settlement_value_date",
      "properties": {
        "description": "Value date expected for settlement posting.",
        "parent": "dataset.settlement_instructions",
        "data_type": "date",
        "nullable": false,
        "expression": "settlement_value_date",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "date",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "settlement_value_date",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "settlement_value_date"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Value date expected for settlement posting.",
          "ai_context": {
            "physical_type": "date",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "settlement_instructions",
        "field": "settlement_value_date",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.payments_core.settlement_instructions.settlement_value_date",
      "type": "column",
      "label": "settlement_value_date",
      "properties": {
        "description": "Value date expected for settlement posting.",
        "parent": "table.payments_core.settlement_instructions",
        "data_type": "date",
        "nullable": false,
        "expression": "settlement_value_date",
        "physical_field": "payments_core.settlement_instructions.settlement_value_date",
        "dataset_field": "settlement_instructions.settlement_value_date"
      }
    },
    {
      "id": "field.settlement_instructions.expected_settlement_date",
      "type": "dataset_field",
      "label": "expected_settlement_date",
      "properties": {
        "description": "Date by which the instruction should complete settlement.",
        "parent": "dataset.settlement_instructions",
        "data_type": "date",
        "nullable": false,
        "expression": "expected_settlement_date",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "date",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "expected_settlement_date",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "expected_settlement_date"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Date by which the instruction should complete settlement.",
          "ai_context": {
            "physical_type": "date",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "settlement_instructions",
        "field": "expected_settlement_date",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.payments_core.settlement_instructions.expected_settlement_date",
      "type": "column",
      "label": "expected_settlement_date",
      "properties": {
        "description": "Date by which the instruction should complete settlement.",
        "parent": "table.payments_core.settlement_instructions",
        "data_type": "date",
        "nullable": false,
        "expression": "expected_settlement_date",
        "physical_field": "payments_core.settlement_instructions.expected_settlement_date",
        "dataset_field": "settlement_instructions.expected_settlement_date"
      }
    },
    {
      "id": "field.settlement_instructions.actual_settlement_date",
      "type": "dataset_field",
      "label": "actual_settlement_date",
      "properties": {
        "description": "Date on which the instruction actually completed settlement.",
        "parent": "dataset.settlement_instructions",
        "data_type": "date",
        "nullable": true,
        "expression": "actual_settlement_date",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "date",
          "nullable": true
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "actual_settlement_date",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "actual_settlement_date"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Date on which the instruction actually completed settlement.",
          "ai_context": {
            "physical_type": "date",
            "nullable": true
          },
          "custom_extensions": []
        },
        "dataset": "settlement_instructions",
        "field": "actual_settlement_date",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.payments_core.settlement_instructions.actual_settlement_date",
      "type": "column",
      "label": "actual_settlement_date",
      "properties": {
        "description": "Date on which the instruction actually completed settlement.",
        "parent": "table.payments_core.settlement_instructions",
        "data_type": "date",
        "nullable": true,
        "expression": "actual_settlement_date",
        "physical_field": "payments_core.settlement_instructions.actual_settlement_date",
        "dataset_field": "settlement_instructions.actual_settlement_date"
      }
    },
    {
      "id": "field.settlement_instructions.settlement_status",
      "type": "dataset_field",
      "label": "settlement_status",
      "properties": {
        "description": "Operational status assigned to the settlement instruction.",
        "parent": "dataset.settlement_instructions",
        "data_type": "string",
        "nullable": false,
        "expression": "settlement_status",
        "dimension": {},
        "label": "",
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "custom_extensions": [],
        "field_definition": {
          "name": "settlement_status",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "settlement_status"
              }
            ]
          },
          "dimension": {},
          "label": "",
          "description": "Operational status assigned to the settlement instruction.",
          "ai_context": {
            "physical_type": "string",
            "nullable": false
          },
          "custom_extensions": []
        },
        "dataset": "settlement_instructions",
        "field": "settlement_status",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ]
      }
    },
    {
      "id": "column.payments_core.settlement_instructions.settlement_status",
      "type": "column",
      "label": "settlement_status",
      "properties": {
        "description": "Operational status assigned to the settlement instruction.",
        "parent": "table.payments_core.settlement_instructions",
        "data_type": "string",
        "nullable": false,
        "expression": "settlement_status",
        "physical_field": "payments_core.settlement_instructions.settlement_status",
        "dataset_field": "settlement_instructions.settlement_status"
      }
    },
    {
      "id": "metric.report_currency_exposure_amount",
      "type": "semantic_metric",
      "label": "report_currency_exposure_amount",
      "properties": {
        "description": "FX trade notional amount converted into reporting currency using the referenced FX rate.",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "semantic_metric": "report_currency_exposure_amount",
        "expression": "fx_trades.notional_amount * fx_rates.rate_value",
        "source_fields": [
          "fx_rates.rate_value",
          "fx_trades.notional_amount"
        ],
        "ai_context": {
          "metric_type": "calculated_settlement_monitoring_measure"
        },
        "custom_extensions": [],
        "metric": {
          "name": "report_currency_exposure_amount",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "fx_trades.notional_amount * fx_rates.rate_value"
              }
            ]
          },
          "description": "FX trade notional amount converted into reporting currency using the referenced FX rate.",
          "ai_context": {
            "metric_type": "calculated_settlement_monitoring_measure"
          },
          "custom_extensions": []
        }
      }
    },
    {
      "id": "metric.settlement_delay_days",
      "type": "semantic_metric",
      "label": "settlement_delay_days",
      "properties": {
        "description": "Settlement delay measured as the day difference between expected and actual settlement completion dates.",
        "semantic_model": "FxSettlementSemanticModel",
        "semantic_models": [
          "FxSettlementSemanticModel"
        ],
        "ontology": "FxSettlementMonitoringOntology",
        "semantic_metric": "settlement_delay_days",
        "expression": "DATEDIFF(day, settlement_instructions.expected_settlement_date, settlement_instructions.actual_settlement_date)",
        "source_fields": [
          "settlement_instructions.actual_settlement_date",
          "settlement_instructions.expected_settlement_date"
        ],
        "ai_context": {
          "metric_type": "calculated_settlement_monitoring_measure"
        },
        "custom_extensions": [],
        "metric": {
          "name": "settlement_delay_days",
          "expression": {
            "dialects": [
              {
                "dialect": "ANSI_SQL",
                "expression": "DATEDIFF(day, settlement_instructions.expected_settlement_date, settlement_instructions.actual_settlement_date)"
              }
            ]
          },
          "description": "Settlement delay measured as the day difference between expected and actual settlement completion dates.",
          "ai_context": {
            "metric_type": "calculated_settlement_monitoring_measure"
          },
          "custom_extensions": []
        }
      }
    },
    {
      "id": "requirement.item_a172b51eff",
      "type": "regulatory_requirement",
      "label": "外汇结算监测报送需求",
      "properties": {
        "description": "监管/BRD要求每日生成外汇交易结算监测明细，用于识别每笔外汇交易的交易对手、结算指令、结算金额、币种、结算状态、折算后报送币种敞口金额以及结算延迟情况。需求还要求在T+1上午前完成数据生成、运营复核、异常说明和留痕保存；非数据类的复核、留痕和异常处置要求记录在本说明中，不强行建模为字段。\n",
        "source": "Treasury FX Settlement Monitoring BRD v1.0 section 2.4",
        "SLA": "Daily T+1 before 10:00 local time; operations review and exception evidence retained for audit."
      }
    },
    {
      "id": "requirement_item..FxTrade.has_TransactionIdentifier",
      "type": "requirement_semantic_item",
      "label": "交易标识",
      "properties": {
        "parent": "requirement.item_a172b51eff",
        "description": "需求需要交易标识，用于唯一识别每笔外汇交易并支持报表行级对账。",
        "data_type": "TransactionIdentifier",
        "semantic_reference": "FxTrade.has_TransactionIdentifier",
        "value_concept": "TransactionIdentifier",
        "source_concept": "FxTrade",
        "relationship": "has_TransactionIdentifier",
        "required": true,
        "rule": null
      }
    },
    {
      "id": "requirement_item..SettlementInstruction.has_InstructionIdentifier",
      "type": "requirement_semantic_item",
      "label": "结算指令标识",
      "properties": {
        "parent": "requirement.item_a172b51eff",
        "description": "需求需要结算指令标识，用于定位执行结算的运营指令并追踪处理状态。",
        "data_type": "InstructionIdentifier",
        "semantic_reference": "SettlementInstruction.has_InstructionIdentifier",
        "value_concept": "InstructionIdentifier",
        "source_concept": "SettlementInstruction",
        "relationship": "has_InstructionIdentifier",
        "required": true,
        "rule": null
      }
    },
    {
      "id": "requirement_item..Counterparty.has_CounterpartyIdentifier",
      "type": "requirement_semantic_item",
      "label": "交易对手标识",
      "properties": {
        "parent": "requirement.item_a172b51eff",
        "description": "需求需要交易对手标识，用于识别交易责任主体并支持风险分组。",
        "data_type": "CounterpartyIdentifier",
        "semantic_reference": "Counterparty.has_CounterpartyIdentifier",
        "value_concept": "CounterpartyIdentifier",
        "source_concept": "Counterparty",
        "relationship": "has_CounterpartyIdentifier",
        "required": true,
        "rule": null
      }
    },
    {
      "id": "requirement_item..SettlementInstruction.has_SettlementCurrency",
      "type": "requirement_semantic_item",
      "label": "结算币种",
      "properties": {
        "parent": "requirement.item_a172b51eff",
        "description": "需求需要结算币种，用于说明现金实际交收的币种口径。",
        "data_type": "CurrencyCode",
        "semantic_reference": "SettlementInstruction.has_SettlementCurrency",
        "value_concept": "CurrencyCode",
        "source_concept": "SettlementInstruction",
        "relationship": "has_SettlementCurrency",
        "required": true,
        "rule": null
      }
    },
    {
      "id": "requirement_item..SettlementInstruction.has_SettlementAmount",
      "type": "requirement_semantic_item",
      "label": "结算金额",
      "properties": {
        "parent": "requirement.item_a172b51eff",
        "description": "需求需要结算金额，用于展示外汇结算现金金额并支持金额级对账。",
        "data_type": "MonetaryAmount",
        "semantic_reference": "SettlementInstruction.has_SettlementAmount",
        "value_concept": "MonetaryAmount",
        "source_concept": "SettlementInstruction",
        "relationship": "has_SettlementAmount",
        "required": true,
        "rule": null
      }
    },
    {
      "id": "requirement_item..SettlementInstruction.has_SettlementStatus",
      "type": "requirement_semantic_item",
      "label": "结算状态",
      "properties": {
        "parent": "requirement.item_a172b51eff",
        "description": "需求需要结算状态，用于识别未完成、失败或已完成的结算指令。",
        "data_type": "SettlementStatus",
        "semantic_reference": "SettlementInstruction.has_SettlementStatus",
        "value_concept": "SettlementStatus",
        "source_concept": "SettlementInstruction",
        "relationship": "has_SettlementStatus",
        "required": true,
        "rule": null
      }
    },
    {
      "id": "requirement_item..FxTrade.has_ReportCurrencyExposureAmount",
      "type": "requirement_semantic_item",
      "label": "折算后报送币种敞口金额",
      "properties": {
        "parent": "requirement.item_a172b51eff",
        "description": "需求需要将外汇交易名义金额按汇率折算为报送币种金额，用于衡量结算风险敞口。",
        "data_type": "calculation",
        "semantic_reference": "FxTrade.has_ReportCurrencyExposureAmount",
        "expression": "FxTrade.has_NotionalAmount * FxRate.has_RateValue",
        "inputs": [
          "FxTrade.has_NotionalAmount",
          "FxRate.has_RateValue"
        ]
      }
    },
    {
      "id": "requirement_item..SettlementInstruction.has_SettlementDelayDays",
      "type": "requirement_semantic_item",
      "label": "结算延迟天数",
      "properties": {
        "parent": "requirement.item_a172b51eff",
        "description": "需求需要计算预计结算日和实际结算日之间的延迟天数，用于识别结算超时风险。",
        "data_type": "calculation",
        "semantic_reference": "SettlementInstruction.has_SettlementDelayDays",
        "expression": "days_between(SettlementInstruction.has_ExpectedSettlementDate, SettlementInstruction.has_ActualSettlementDate)",
        "inputs": [
          "SettlementInstruction.has_ExpectedSettlementDate",
          "SettlementInstruction.has_ActualSettlementDate"
        ]
      }
    },
    {
      "id": "report_impl.item_e781d082f3",
      "type": "report_implementation",
      "label": "每日外汇结算监测数据逻辑",
      "properties": {
        "description": "说明每日外汇结算监测明细字段如何从外汇交易、结算指令、交易对手、nostro账户和汇率数据中取数、计算并满足需求口径；该逻辑不创建或拥有物理表。",
        "implements": "外汇结算监测报送需求"
      }
    },
    {
      "id": "implementation_field.fx_settlement_monitoring_lines.trade_id",
      "type": "implementation_field_binding",
      "label": "交易标识逻辑",
      "properties": {
        "parent": "report_impl.item_e781d082f3",
        "description": "数据逻辑说明监测明细字段 trade_id 如何承载交易标识需求，并从外汇交易数据取得交易主键。",
        "data_type": "logic field",
        "binding_role": "logic field",
        "dataset": "fx_settlement_monitoring_lines",
        "field": "交易标识逻辑",
        "dataset_field": "fx_settlement_monitoring_lines.trade_id",
        "requirement_field": "交易标识",
        "source_field": "fx_trades.trade_id",
        "expression": "fx_trades.trade_id",
        "expression_fields": [
          "fx_trades.trade_id"
        ]
      }
    },
    {
      "id": "implementation_field.fx_settlement_monitoring_lines.settlement_instruction_id",
      "type": "implementation_field_binding",
      "label": "结算指令标识逻辑",
      "properties": {
        "parent": "report_impl.item_e781d082f3",
        "description": "数据逻辑说明监测明细字段 settlement_instruction_id 如何承载结算指令标识需求，并从结算指令数据取得运营指令主键。",
        "data_type": "logic field",
        "binding_role": "logic field",
        "dataset": "fx_settlement_monitoring_lines",
        "field": "结算指令标识逻辑",
        "dataset_field": "fx_settlement_monitoring_lines.settlement_instruction_id",
        "requirement_field": "结算指令标识",
        "source_field": "settlement_instructions.settlement_instruction_id",
        "expression": "settlement_instructions.settlement_instruction_id",
        "expression_fields": [
          "settlement_instructions.settlement_instruction_id"
        ]
      }
    },
    {
      "id": "implementation_field.fx_settlement_monitoring_lines.counterparty_id",
      "type": "implementation_field_binding",
      "label": "交易对手标识逻辑",
      "properties": {
        "parent": "report_impl.item_e781d082f3",
        "description": "数据逻辑说明监测明细字段 counterparty_id 如何承载交易对手标识需求，并使用交易上的交易对手引用。",
        "data_type": "logic field",
        "binding_role": "logic field",
        "dataset": "fx_settlement_monitoring_lines",
        "field": "交易对手标识逻辑",
        "dataset_field": "fx_settlement_monitoring_lines.counterparty_id",
        "requirement_field": "交易对手标识",
        "source_field": "fx_trades.counterparty_id",
        "expression": "fx_trades.counterparty_id",
        "expression_fields": [
          "fx_trades.counterparty_id"
        ]
      }
    },
    {
      "id": "implementation_field.fx_settlement_monitoring_lines.settlement_currency",
      "type": "implementation_field_binding",
      "label": "结算币种逻辑",
      "properties": {
        "parent": "report_impl.item_e781d082f3",
        "description": "数据逻辑说明监测明细字段 settlement_currency 如何承载结算币种需求，并从结算指令取得实际交收币种。",
        "data_type": "logic field",
        "binding_role": "logic field",
        "dataset": "fx_settlement_monitoring_lines",
        "field": "结算币种逻辑",
        "dataset_field": "fx_settlement_monitoring_lines.settlement_currency",
        "requirement_field": "结算币种",
        "source_field": "settlement_instructions.settlement_currency",
        "expression": "settlement_instructions.settlement_currency",
        "expression_fields": [
          "settlement_instructions.settlement_currency"
        ]
      }
    },
    {
      "id": "implementation_field.fx_settlement_monitoring_lines.settlement_amount",
      "type": "implementation_field_binding",
      "label": "结算金额逻辑",
      "properties": {
        "parent": "report_impl.item_e781d082f3",
        "description": "数据逻辑说明监测明细字段 settlement_amount 如何承载结算金额需求，并从结算指令取得现金交收金额。",
        "data_type": "logic field",
        "binding_role": "logic field",
        "dataset": "fx_settlement_monitoring_lines",
        "field": "结算金额逻辑",
        "dataset_field": "fx_settlement_monitoring_lines.settlement_amount",
        "requirement_field": "结算金额",
        "source_field": "settlement_instructions.settlement_amount",
        "expression": "settlement_instructions.settlement_amount",
        "expression_fields": [
          "settlement_instructions.settlement_amount"
        ]
      }
    },
    {
      "id": "implementation_field.fx_settlement_monitoring_lines.settlement_status",
      "type": "implementation_field_binding",
      "label": "结算状态逻辑",
      "properties": {
        "parent": "report_impl.item_e781d082f3",
        "description": "数据逻辑说明监测明细字段 settlement_status 如何承载结算状态需求，并从结算指令取得运营处理状态。",
        "data_type": "logic field",
        "binding_role": "logic field",
        "dataset": "fx_settlement_monitoring_lines",
        "field": "结算状态逻辑",
        "dataset_field": "fx_settlement_monitoring_lines.settlement_status",
        "requirement_field": "结算状态",
        "source_field": "settlement_instructions.settlement_status",
        "expression": "settlement_instructions.settlement_status",
        "expression_fields": [
          "settlement_instructions.settlement_status"
        ]
      }
    },
    {
      "id": "implementation_field.fx_settlement_monitoring_lines.exposure_amount_report_currency",
      "type": "implementation_field_binding",
      "label": "折算后报送币种敞口金额逻辑",
      "properties": {
        "parent": "report_impl.item_e781d082f3",
        "description": "数据逻辑说明监测明细字段 exposure_amount_report_currency 如何按交易名义金额和汇率计算报送币种敞口金额。",
        "data_type": "logic field",
        "binding_role": "logic field",
        "dataset": "fx_settlement_monitoring_lines",
        "field": "折算后报送币种敞口金额逻辑",
        "dataset_field": "fx_settlement_monitoring_lines.exposure_amount_report_currency",
        "requirement_field": "折算后报送币种敞口金额",
        "source_field": null,
        "expression": "fx_trades.notional_amount * fx_rates.rate_value",
        "expression_fields": [
          "fx_rates.rate_value",
          "fx_trades.notional_amount"
        ]
      }
    },
    {
      "id": "implementation_field.fx_settlement_monitoring_lines.settlement_delay_days",
      "type": "implementation_field_binding",
      "label": "结算延迟天数逻辑",
      "properties": {
        "parent": "report_impl.item_e781d082f3",
        "description": "数据逻辑说明监测明细字段 settlement_delay_days 如何通过预计结算日和实际结算日计算延迟天数。",
        "data_type": "logic field",
        "binding_role": "logic field",
        "dataset": "fx_settlement_monitoring_lines",
        "field": "结算延迟天数逻辑",
        "dataset_field": "fx_settlement_monitoring_lines.settlement_delay_days",
        "requirement_field": "结算延迟天数",
        "source_field": null,
        "expression": "DATEDIFF(day, settlement_instructions.expected_settlement_date, settlement_instructions.actual_settlement_date)",
        "expression_fields": [
          "settlement_instructions.actual_settlement_date",
          "settlement_instructions.expected_settlement_date"
        ]
      }
    }
  ],
  "edges": [
    {
      "id": "edge.concept.AccountData.CONTAINS.contains_value.value.AccountData.has_AccountIdentifier",
      "source": "concept.AccountData",
      "target": "value.AccountData.has_AccountIdentifier",
      "label": "contains value",
      "properties": {
        "description": "Identifier common to account-like records.",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{AccountData} has account identifier {AccountIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "AccountIdentifier",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.InstructionData.CONTAINS.contains_value.value.InstructionData.has_InstructionIdentifier",
      "source": "concept.InstructionData",
      "target": "value.InstructionData.has_InstructionIdentifier",
      "label": "contains value",
      "properties": {
        "description": "Identifier common to operational instruction records.",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{InstructionData} has instruction identifier {InstructionIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "InstructionIdentifier",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.PartyData.CONTAINS.contains_value.value.PartyData.has_CounterpartyIdentifier",
      "source": "concept.PartyData",
      "target": "value.PartyData.has_CounterpartyIdentifier",
      "label": "contains value",
      "properties": {
        "description": "Identifier common to counterparty or party records.",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{PartyData} has counterparty identifier {CounterpartyIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CounterpartyIdentifier",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.ReferenceData.CONTAINS.contains_value.value.ReferenceData.has_ReferenceIdentifier",
      "source": "concept.ReferenceData",
      "target": "value.ReferenceData.has_ReferenceIdentifier",
      "label": "contains value",
      "properties": {
        "description": "Identifier common to reference-data records.",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{ReferenceData} has reference identifier {ReferenceIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "ReferenceIdentifier",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.TransactionData.CONTAINS.contains_value.value.TransactionData.has_TransactionIdentifier",
      "source": "concept.TransactionData",
      "target": "value.TransactionData.has_TransactionIdentifier",
      "label": "contains value",
      "properties": {
        "description": "Identifier common to transaction-like records.",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{TransactionData} has transaction identifier {TransactionIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "TransactionIdentifier",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.TransactionData.CONTAINS.contains_value.value.TransactionData.has_BookingDate",
      "source": "concept.TransactionData",
      "target": "value.TransactionData.has_BookingDate",
      "label": "contains value",
      "properties": {
        "description": "Business date common to transaction-like records.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{TransactionData} has booking date {CalendarDate}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CalendarDate",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Counterparty.EXTENDS.extends.concept.PartyData",
      "source": "concept.Counterparty",
      "target": "concept.PartyData",
      "label": "extends",
      "properties": {
        "description": "Counterparty extends PartyData.",
        "base_entity": "PartyData"
      },
      "type": "EXTENDS"
    },
    {
      "id": "OWNS_NostroAccount",
      "source": "concept.Counterparty",
      "target": "concept.NostroAccount",
      "label": "OWNS_NostroAccount",
      "properties": {
        "description": "Counterparty relationship used to connect nostro account ownership or responsibility.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Counterparty} owns or controls {NostroAccount}"
        ],
        "roles": [
          {
            "concept": "NostroAccount"
          }
        ]
      }
    },
    {
      "id": "edge.concept.Counterparty.CONTAINS.contains_value.value.Counterparty.has_CounterpartyName",
      "source": "concept.Counterparty",
      "target": "value.Counterparty.has_CounterpartyName",
      "label": "contains value",
      "properties": {
        "description": "Human-readable legal or trading name of the counterparty.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Counterparty} has counterparty name {PartyName}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "PartyName",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Counterparty.CONTAINS.contains_value.value.Counterparty.has_CounterpartyCountry",
      "source": "concept.Counterparty",
      "target": "value.Counterparty.has_CounterpartyCountry",
      "label": "contains value",
      "properties": {
        "description": "Country or jurisdiction associated with the counterparty.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Counterparty} has counterparty country {CountryCode}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CountryCode",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Counterparty.CONTAINS.contains_value.value.Counterparty.has_RiskSegment",
      "source": "concept.Counterparty",
      "target": "value.Counterparty.has_RiskSegment",
      "label": "contains value",
      "properties": {
        "description": "Risk or client segment used for settlement monitoring.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{Counterparty} has risk segment {RiskSegment}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "RiskSegment",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.FxRate.EXTENDS.extends.concept.ReferenceData",
      "source": "concept.FxRate",
      "target": "concept.ReferenceData",
      "label": "extends",
      "properties": {
        "description": "FxRate extends ReferenceData.",
        "base_entity": "ReferenceData"
      },
      "type": "EXTENDS"
    },
    {
      "id": "edge.concept.FxRate.CONTAINS.contains_value.value.FxRate.has_BaseCurrency",
      "source": "concept.FxRate",
      "target": "value.FxRate.has_BaseCurrency",
      "label": "contains value",
      "properties": {
        "description": "Base currency of the FX rate quote.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{FxRate} has base currency {CurrencyCode}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CurrencyCode",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.FxRate.CONTAINS.contains_value.value.FxRate.has_QuoteCurrency",
      "source": "concept.FxRate",
      "target": "value.FxRate.has_QuoteCurrency",
      "label": "contains value",
      "properties": {
        "description": "Quote or reporting currency of the FX rate quote.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{FxRate} has quote currency {CurrencyCode}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CurrencyCode",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.FxRate.CONTAINS.contains_value.value.FxRate.has_RateDate",
      "source": "concept.FxRate",
      "target": "value.FxRate.has_RateDate",
      "label": "contains value",
      "properties": {
        "description": "Date on which the FX rate is effective.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{FxRate} has rate date {CalendarDate}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CalendarDate",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.FxRate.CONTAINS.contains_value.value.FxRate.has_RateValue",
      "source": "concept.FxRate",
      "target": "value.FxRate.has_RateValue",
      "label": "contains value",
      "properties": {
        "description": "Decimal exchange rate value for the currency pair.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{FxRate} has rate value {Rate}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "Rate",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.FxTrade.EXTENDS.extends.concept.TransactionData",
      "source": "concept.FxTrade",
      "target": "concept.TransactionData",
      "label": "extends",
      "properties": {
        "description": "FxTrade extends TransactionData.",
        "base_entity": "TransactionData"
      },
      "type": "EXTENDS"
    },
    {
      "id": "EXECUTED_WITH_Counterparty",
      "source": "concept.FxTrade",
      "target": "concept.Counterparty",
      "label": "EXECUTED_WITH_Counterparty",
      "properties": {
        "description": "Counterparty with whom the FX trade was executed.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{FxTrade} is executed with {Counterparty}"
        ],
        "roles": [
          {
            "concept": "Counterparty"
          }
        ]
      }
    },
    {
      "id": "SETTLED_BY_SettlementInstruction",
      "source": "concept.FxTrade",
      "target": "concept.SettlementInstruction",
      "label": "SETTLED_BY_SettlementInstruction",
      "properties": {
        "description": "Settlement instruction that operationally settles the FX trade.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{FxTrade} is settled by {SettlementInstruction}"
        ],
        "roles": [
          {
            "concept": "SettlementInstruction"
          }
        ]
      }
    },
    {
      "id": "PRICED_BY_FxRate",
      "source": "concept.FxTrade",
      "target": "concept.FxRate",
      "label": "PRICED_BY_FxRate",
      "properties": {
        "description": "FX rate reference used to convert the trade amount into reporting currency.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{FxTrade} is priced by {FxRate}"
        ],
        "roles": [
          {
            "concept": "FxRate"
          }
        ]
      }
    },
    {
      "id": "edge.concept.FxTrade.CONTAINS.contains_value.value.FxTrade.has_BuyCurrency",
      "source": "concept.FxTrade",
      "target": "value.FxTrade.has_BuyCurrency",
      "label": "contains value",
      "properties": {
        "description": "Currency bought by the FX trade.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{FxTrade} has buy currency {CurrencyCode}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CurrencyCode",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.FxTrade.CONTAINS.contains_value.value.FxTrade.has_SellCurrency",
      "source": "concept.FxTrade",
      "target": "value.FxTrade.has_SellCurrency",
      "label": "contains value",
      "properties": {
        "description": "Currency sold by the FX trade.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{FxTrade} has sell currency {CurrencyCode}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CurrencyCode",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.FxTrade.CONTAINS.contains_value.value.FxTrade.has_NotionalAmount",
      "source": "concept.FxTrade",
      "target": "value.FxTrade.has_NotionalAmount",
      "label": "contains value",
      "properties": {
        "description": "Original trade notional amount before reporting-currency conversion.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{FxTrade} has notional amount {MonetaryAmount}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "MonetaryAmount",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.FxTrade.CONTAINS.contains_value.value.FxTrade.has_SettlementDate",
      "source": "concept.FxTrade",
      "target": "value.FxTrade.has_SettlementDate",
      "label": "contains value",
      "properties": {
        "description": "Contractual settlement date for the FX trade.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{FxTrade} has settlement date {CalendarDate}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CalendarDate",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.FxTrade.CONTAINS.contains_value.value.FxTrade.has_ReportCurrencyExposureAmount",
      "source": "concept.FxTrade",
      "target": "value.FxTrade.has_ReportCurrencyExposureAmount",
      "label": "contains value",
      "properties": {
        "description": "Calculated exposure amount after applying the relevant FX rate for monitoring.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{FxTrade} has report currency exposure amount {MonetaryAmount}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "MonetaryAmount",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.NostroAccount.EXTENDS.extends.concept.AccountData",
      "source": "concept.NostroAccount",
      "target": "concept.AccountData",
      "label": "extends",
      "properties": {
        "description": "NostroAccount extends AccountData.",
        "base_entity": "AccountData"
      },
      "type": "EXTENDS"
    },
    {
      "id": "HELD_BY_Counterparty",
      "source": "concept.NostroAccount",
      "target": "concept.Counterparty",
      "label": "HELD_BY_Counterparty",
      "properties": {
        "description": "Counterparty or banking entity responsible for the nostro account.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{NostroAccount} is held by {Counterparty}"
        ],
        "roles": [
          {
            "concept": "Counterparty"
          }
        ]
      }
    },
    {
      "id": "edge.concept.NostroAccount.CONTAINS.contains_value.value.NostroAccount.has_AccountCurrency",
      "source": "concept.NostroAccount",
      "target": "value.NostroAccount.has_AccountCurrency",
      "label": "contains value",
      "properties": {
        "description": "Currency in which the nostro account settles cash.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{NostroAccount} has account currency {CurrencyCode}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CurrencyCode",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.NostroAccount.CONTAINS.contains_value.value.NostroAccount.has_AccountStatus",
      "source": "concept.NostroAccount",
      "target": "value.NostroAccount.has_AccountStatus",
      "label": "contains value",
      "properties": {
        "description": "Operational lifecycle status of the nostro account.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{NostroAccount} has account status {StatusCode}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "StatusCode",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.SettlementInstruction.EXTENDS.extends.concept.InstructionData",
      "source": "concept.SettlementInstruction",
      "target": "concept.InstructionData",
      "label": "extends",
      "properties": {
        "description": "SettlementInstruction extends InstructionData.",
        "base_entity": "InstructionData"
      },
      "type": "EXTENDS"
    },
    {
      "id": "SETTLES_FxTrade",
      "source": "concept.SettlementInstruction",
      "target": "concept.FxTrade",
      "label": "SETTLES_FxTrade",
      "properties": {
        "description": "FX trade whose cash movements are controlled by the settlement instruction.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{SettlementInstruction} settles {FxTrade}"
        ],
        "roles": [
          {
            "concept": "FxTrade"
          }
        ]
      }
    },
    {
      "id": "USES_NostroAccount",
      "source": "concept.SettlementInstruction",
      "target": "concept.NostroAccount",
      "label": "USES_NostroAccount",
      "properties": {
        "description": "Nostro account used to process the settlement cash movement.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{SettlementInstruction} uses {NostroAccount}"
        ],
        "roles": [
          {
            "concept": "NostroAccount"
          }
        ]
      }
    },
    {
      "id": "edge.concept.SettlementInstruction.CONTAINS.contains_value.value.SettlementInstruction.has_SettlementCurrency",
      "source": "concept.SettlementInstruction",
      "target": "value.SettlementInstruction.has_SettlementCurrency",
      "label": "contains value",
      "properties": {
        "description": "Currency in which the settlement instruction is executed.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{SettlementInstruction} has settlement currency {CurrencyCode}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CurrencyCode",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.SettlementInstruction.CONTAINS.contains_value.value.SettlementInstruction.has_SettlementAmount",
      "source": "concept.SettlementInstruction",
      "target": "value.SettlementInstruction.has_SettlementAmount",
      "label": "contains value",
      "properties": {
        "description": "Cash amount instructed for FX settlement.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{SettlementInstruction} has settlement amount {MonetaryAmount}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "MonetaryAmount",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.SettlementInstruction.CONTAINS.contains_value.value.SettlementInstruction.has_SettlementValueDate",
      "source": "concept.SettlementInstruction",
      "target": "value.SettlementInstruction.has_SettlementValueDate",
      "label": "contains value",
      "properties": {
        "description": "Value date on which the settlement instruction is expected to settle.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{SettlementInstruction} has settlement value date {CalendarDate}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CalendarDate",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.SettlementInstruction.CONTAINS.contains_value.value.SettlementInstruction.has_SettlementStatus",
      "source": "concept.SettlementInstruction",
      "target": "value.SettlementInstruction.has_SettlementStatus",
      "label": "contains value",
      "properties": {
        "description": "Operational status of the settlement instruction.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{SettlementInstruction} has settlement status {SettlementStatus}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "SettlementStatus",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.SettlementInstruction.CONTAINS.contains_value.value.SettlementInstruction.has_ExpectedSettlementDate",
      "source": "concept.SettlementInstruction",
      "target": "value.SettlementInstruction.has_ExpectedSettlementDate",
      "label": "contains value",
      "properties": {
        "description": "Date by which settlement is expected to complete.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{SettlementInstruction} has expected settlement date {CalendarDate}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CalendarDate",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.SettlementInstruction.CONTAINS.contains_value.value.SettlementInstruction.has_ActualSettlementDate",
      "source": "concept.SettlementInstruction",
      "target": "value.SettlementInstruction.has_ActualSettlementDate",
      "label": "contains value",
      "properties": {
        "description": "Date on which settlement actually completed.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{SettlementInstruction} has actual settlement date {CalendarDate}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CalendarDate",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.SettlementInstruction.CONTAINS.contains_value.value.SettlementInstruction.has_SettlementDelayDays",
      "source": "concept.SettlementInstruction",
      "target": "value.SettlementInstruction.has_SettlementDelayDays",
      "label": "contains value",
      "properties": {
        "description": "Calculated number of days between expected and actual settlement completion.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{SettlementInstruction} has settlement delay days {DayCount}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "DayCount",
        "inherited": false,
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Counterparty.CONTAINS.inherited_value.value.Counterparty.has_CounterpartyIdentifier",
      "source": "concept.Counterparty",
      "target": "value.Counterparty.has_CounterpartyIdentifier",
      "label": "inherited value",
      "properties": {
        "description": "Identifier common to counterparty or party records.",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{PartyData} has counterparty identifier {CounterpartyIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "CounterpartyIdentifier",
        "inherited": true,
        "inherited_from": "PartyData",
        "base_relationship_path": "PartyData.has_CounterpartyIdentifier",
        "inheritance_note": "Inherited from PartyData.",
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.FxRate.CONTAINS.inherited_value.value.FxRate.has_ReferenceIdentifier",
      "source": "concept.FxRate",
      "target": "value.FxRate.has_ReferenceIdentifier",
      "label": "inherited value",
      "properties": {
        "description": "Identifier common to reference-data records.",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{ReferenceData} has reference identifier {ReferenceIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "ReferenceIdentifier",
        "inherited": true,
        "inherited_from": "ReferenceData",
        "base_relationship_path": "ReferenceData.has_ReferenceIdentifier",
        "inheritance_note": "Inherited from ReferenceData.",
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.FxTrade.CONTAINS.inherited_value.value.FxTrade.has_TransactionIdentifier",
      "source": "concept.FxTrade",
      "target": "value.FxTrade.has_TransactionIdentifier",
      "label": "inherited value",
      "properties": {
        "description": "Identifier common to transaction-like records.",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{TransactionData} has transaction identifier {TransactionIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "TransactionIdentifier",
        "inherited": true,
        "inherited_from": "TransactionData",
        "base_relationship_path": "TransactionData.has_TransactionIdentifier",
        "inheritance_note": "Inherited from TransactionData.",
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.FxTrade.CONTAINS.inherited_value.value.FxTrade.has_BookingDate",
      "source": "concept.FxTrade",
      "target": "value.FxTrade.has_BookingDate",
      "label": "inherited value",
      "properties": {
        "description": "Business date common to transaction-like records.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{TransactionData} has booking date {CalendarDate}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "CalendarDate",
        "inherited": true,
        "inherited_from": "TransactionData",
        "base_relationship_path": "TransactionData.has_BookingDate",
        "inheritance_note": "Inherited from TransactionData.",
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.NostroAccount.CONTAINS.inherited_value.value.NostroAccount.has_AccountIdentifier",
      "source": "concept.NostroAccount",
      "target": "value.NostroAccount.has_AccountIdentifier",
      "label": "inherited value",
      "properties": {
        "description": "Identifier common to account-like records.",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{AccountData} has account identifier {AccountIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "AccountIdentifier",
        "inherited": true,
        "inherited_from": "AccountData",
        "base_relationship_path": "AccountData.has_AccountIdentifier",
        "inheritance_note": "Inherited from AccountData.",
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.SettlementInstruction.CONTAINS.inherited_value.value.SettlementInstruction.has_InstructionIdentifier",
      "source": "concept.SettlementInstruction",
      "target": "value.SettlementInstruction.has_InstructionIdentifier",
      "label": "inherited value",
      "properties": {
        "description": "Identifier common to operational instruction records.",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{InstructionData} has instruction identifier {InstructionIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "InstructionIdentifier",
        "inherited": true,
        "inherited_from": "InstructionData",
        "base_relationship_path": "InstructionData.has_InstructionIdentifier",
        "inheritance_note": "Inherited from InstructionData.",
        "ontology": "FxSettlementMonitoringOntology",
        "ontologies": [
          "FxSettlementMonitoringOntology"
        ],
        "source_files": [
          "knowledge/regulatory-reporting-osi.yaml"
        ]
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.value.AccountData.has_AccountIdentifier.SHARES_VALUE_TYPE.AccountIdentifier.value.NostroAccount.has_AccountIdentifier",
      "source": "value.AccountData.has_AccountIdentifier",
      "target": "value.NostroAccount.has_AccountIdentifier",
      "label": "AccountIdentifier",
      "properties": {
        "description": "Both fields use ValueType concept AccountIdentifier.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "AccountIdentifier"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.InstructionData.has_InstructionIdentifier.SHARES_VALUE_TYPE.InstructionIdentifier.value.SettlementInstruction.has_InstructionIdentifier",
      "source": "value.InstructionData.has_InstructionIdentifier",
      "target": "value.SettlementInstruction.has_InstructionIdentifier",
      "label": "InstructionIdentifier",
      "properties": {
        "description": "Both fields use ValueType concept InstructionIdentifier.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "InstructionIdentifier"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.Counterparty.has_CounterpartyIdentifier.SHARES_VALUE_TYPE.CounterpartyIdentifier.value.PartyData.has_CounterpartyIdentifier",
      "source": "value.Counterparty.has_CounterpartyIdentifier",
      "target": "value.PartyData.has_CounterpartyIdentifier",
      "label": "CounterpartyIdentifier",
      "properties": {
        "description": "Both fields use ValueType concept CounterpartyIdentifier.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CounterpartyIdentifier"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxRate.has_ReferenceIdentifier.SHARES_VALUE_TYPE.ReferenceIdentifier.value.ReferenceData.has_ReferenceIdentifier",
      "source": "value.FxRate.has_ReferenceIdentifier",
      "target": "value.ReferenceData.has_ReferenceIdentifier",
      "label": "ReferenceIdentifier",
      "properties": {
        "description": "Both fields use ValueType concept ReferenceIdentifier.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "ReferenceIdentifier"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxTrade.has_TransactionIdentifier.SHARES_VALUE_TYPE.TransactionIdentifier.value.TransactionData.has_TransactionIdentifier",
      "source": "value.FxTrade.has_TransactionIdentifier",
      "target": "value.TransactionData.has_TransactionIdentifier",
      "label": "TransactionIdentifier",
      "properties": {
        "description": "Both fields use ValueType concept TransactionIdentifier.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "TransactionIdentifier"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxRate.has_RateDate.SHARES_VALUE_TYPE.CalendarDate.value.FxTrade.has_BookingDate",
      "source": "value.FxRate.has_RateDate",
      "target": "value.FxTrade.has_BookingDate",
      "label": "CalendarDate",
      "properties": {
        "description": "Both fields use ValueType concept CalendarDate.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CalendarDate"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxRate.has_RateDate.SHARES_VALUE_TYPE.CalendarDate.value.FxTrade.has_SettlementDate",
      "source": "value.FxRate.has_RateDate",
      "target": "value.FxTrade.has_SettlementDate",
      "label": "CalendarDate",
      "properties": {
        "description": "Both fields use ValueType concept CalendarDate.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CalendarDate"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxRate.has_RateDate.SHARES_VALUE_TYPE.CalendarDate.value.SettlementInstruction.has_ActualSettlementDate",
      "source": "value.FxRate.has_RateDate",
      "target": "value.SettlementInstruction.has_ActualSettlementDate",
      "label": "CalendarDate",
      "properties": {
        "description": "Both fields use ValueType concept CalendarDate.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CalendarDate"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxRate.has_RateDate.SHARES_VALUE_TYPE.CalendarDate.value.SettlementInstruction.has_ExpectedSettlementDate",
      "source": "value.FxRate.has_RateDate",
      "target": "value.SettlementInstruction.has_ExpectedSettlementDate",
      "label": "CalendarDate",
      "properties": {
        "description": "Both fields use ValueType concept CalendarDate.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CalendarDate"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxRate.has_RateDate.SHARES_VALUE_TYPE.CalendarDate.value.SettlementInstruction.has_SettlementValueDate",
      "source": "value.FxRate.has_RateDate",
      "target": "value.SettlementInstruction.has_SettlementValueDate",
      "label": "CalendarDate",
      "properties": {
        "description": "Both fields use ValueType concept CalendarDate.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CalendarDate"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxRate.has_RateDate.SHARES_VALUE_TYPE.CalendarDate.value.TransactionData.has_BookingDate",
      "source": "value.FxRate.has_RateDate",
      "target": "value.TransactionData.has_BookingDate",
      "label": "CalendarDate",
      "properties": {
        "description": "Both fields use ValueType concept CalendarDate.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CalendarDate"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxTrade.has_BookingDate.SHARES_VALUE_TYPE.CalendarDate.value.FxTrade.has_SettlementDate",
      "source": "value.FxTrade.has_BookingDate",
      "target": "value.FxTrade.has_SettlementDate",
      "label": "CalendarDate",
      "properties": {
        "description": "Both fields use ValueType concept CalendarDate.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CalendarDate"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxTrade.has_BookingDate.SHARES_VALUE_TYPE.CalendarDate.value.SettlementInstruction.has_ActualSettlementDate",
      "source": "value.FxTrade.has_BookingDate",
      "target": "value.SettlementInstruction.has_ActualSettlementDate",
      "label": "CalendarDate",
      "properties": {
        "description": "Both fields use ValueType concept CalendarDate.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CalendarDate"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxTrade.has_BookingDate.SHARES_VALUE_TYPE.CalendarDate.value.SettlementInstruction.has_ExpectedSettlementDate",
      "source": "value.FxTrade.has_BookingDate",
      "target": "value.SettlementInstruction.has_ExpectedSettlementDate",
      "label": "CalendarDate",
      "properties": {
        "description": "Both fields use ValueType concept CalendarDate.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CalendarDate"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxTrade.has_BookingDate.SHARES_VALUE_TYPE.CalendarDate.value.SettlementInstruction.has_SettlementValueDate",
      "source": "value.FxTrade.has_BookingDate",
      "target": "value.SettlementInstruction.has_SettlementValueDate",
      "label": "CalendarDate",
      "properties": {
        "description": "Both fields use ValueType concept CalendarDate.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CalendarDate"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxTrade.has_BookingDate.SHARES_VALUE_TYPE.CalendarDate.value.TransactionData.has_BookingDate",
      "source": "value.FxTrade.has_BookingDate",
      "target": "value.TransactionData.has_BookingDate",
      "label": "CalendarDate",
      "properties": {
        "description": "Both fields use ValueType concept CalendarDate.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CalendarDate"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxTrade.has_SettlementDate.SHARES_VALUE_TYPE.CalendarDate.value.SettlementInstruction.has_ActualSettlementDate",
      "source": "value.FxTrade.has_SettlementDate",
      "target": "value.SettlementInstruction.has_ActualSettlementDate",
      "label": "CalendarDate",
      "properties": {
        "description": "Both fields use ValueType concept CalendarDate.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CalendarDate"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxTrade.has_SettlementDate.SHARES_VALUE_TYPE.CalendarDate.value.SettlementInstruction.has_ExpectedSettlementDate",
      "source": "value.FxTrade.has_SettlementDate",
      "target": "value.SettlementInstruction.has_ExpectedSettlementDate",
      "label": "CalendarDate",
      "properties": {
        "description": "Both fields use ValueType concept CalendarDate.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CalendarDate"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxTrade.has_SettlementDate.SHARES_VALUE_TYPE.CalendarDate.value.SettlementInstruction.has_SettlementValueDate",
      "source": "value.FxTrade.has_SettlementDate",
      "target": "value.SettlementInstruction.has_SettlementValueDate",
      "label": "CalendarDate",
      "properties": {
        "description": "Both fields use ValueType concept CalendarDate.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CalendarDate"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxTrade.has_SettlementDate.SHARES_VALUE_TYPE.CalendarDate.value.TransactionData.has_BookingDate",
      "source": "value.FxTrade.has_SettlementDate",
      "target": "value.TransactionData.has_BookingDate",
      "label": "CalendarDate",
      "properties": {
        "description": "Both fields use ValueType concept CalendarDate.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CalendarDate"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.SettlementInstruction.has_ActualSettlementDate.SHARES_VALUE_TYPE.CalendarDate.value.SettlementInstruction.has_ExpectedSettlementDate",
      "source": "value.SettlementInstruction.has_ActualSettlementDate",
      "target": "value.SettlementInstruction.has_ExpectedSettlementDate",
      "label": "CalendarDate",
      "properties": {
        "description": "Both fields use ValueType concept CalendarDate.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CalendarDate"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.SettlementInstruction.has_ActualSettlementDate.SHARES_VALUE_TYPE.CalendarDate.value.SettlementInstruction.has_SettlementValueDate",
      "source": "value.SettlementInstruction.has_ActualSettlementDate",
      "target": "value.SettlementInstruction.has_SettlementValueDate",
      "label": "CalendarDate",
      "properties": {
        "description": "Both fields use ValueType concept CalendarDate.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CalendarDate"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.SettlementInstruction.has_ActualSettlementDate.SHARES_VALUE_TYPE.CalendarDate.value.TransactionData.has_BookingDate",
      "source": "value.SettlementInstruction.has_ActualSettlementDate",
      "target": "value.TransactionData.has_BookingDate",
      "label": "CalendarDate",
      "properties": {
        "description": "Both fields use ValueType concept CalendarDate.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CalendarDate"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.SettlementInstruction.has_ExpectedSettlementDate.SHARES_VALUE_TYPE.CalendarDate.value.SettlementInstruction.has_SettlementValueDate",
      "source": "value.SettlementInstruction.has_ExpectedSettlementDate",
      "target": "value.SettlementInstruction.has_SettlementValueDate",
      "label": "CalendarDate",
      "properties": {
        "description": "Both fields use ValueType concept CalendarDate.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CalendarDate"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.SettlementInstruction.has_ExpectedSettlementDate.SHARES_VALUE_TYPE.CalendarDate.value.TransactionData.has_BookingDate",
      "source": "value.SettlementInstruction.has_ExpectedSettlementDate",
      "target": "value.TransactionData.has_BookingDate",
      "label": "CalendarDate",
      "properties": {
        "description": "Both fields use ValueType concept CalendarDate.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CalendarDate"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.SettlementInstruction.has_SettlementValueDate.SHARES_VALUE_TYPE.CalendarDate.value.TransactionData.has_BookingDate",
      "source": "value.SettlementInstruction.has_SettlementValueDate",
      "target": "value.TransactionData.has_BookingDate",
      "label": "CalendarDate",
      "properties": {
        "description": "Both fields use ValueType concept CalendarDate.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CalendarDate"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxRate.has_BaseCurrency.SHARES_VALUE_TYPE.CurrencyCode.value.FxRate.has_QuoteCurrency",
      "source": "value.FxRate.has_BaseCurrency",
      "target": "value.FxRate.has_QuoteCurrency",
      "label": "CurrencyCode",
      "properties": {
        "description": "Both fields use ValueType concept CurrencyCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CurrencyCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxRate.has_BaseCurrency.SHARES_VALUE_TYPE.CurrencyCode.value.FxTrade.has_BuyCurrency",
      "source": "value.FxRate.has_BaseCurrency",
      "target": "value.FxTrade.has_BuyCurrency",
      "label": "CurrencyCode",
      "properties": {
        "description": "Both fields use ValueType concept CurrencyCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CurrencyCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxRate.has_BaseCurrency.SHARES_VALUE_TYPE.CurrencyCode.value.FxTrade.has_SellCurrency",
      "source": "value.FxRate.has_BaseCurrency",
      "target": "value.FxTrade.has_SellCurrency",
      "label": "CurrencyCode",
      "properties": {
        "description": "Both fields use ValueType concept CurrencyCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CurrencyCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxRate.has_BaseCurrency.SHARES_VALUE_TYPE.CurrencyCode.value.NostroAccount.has_AccountCurrency",
      "source": "value.FxRate.has_BaseCurrency",
      "target": "value.NostroAccount.has_AccountCurrency",
      "label": "CurrencyCode",
      "properties": {
        "description": "Both fields use ValueType concept CurrencyCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CurrencyCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxRate.has_BaseCurrency.SHARES_VALUE_TYPE.CurrencyCode.value.SettlementInstruction.has_SettlementCurrency",
      "source": "value.FxRate.has_BaseCurrency",
      "target": "value.SettlementInstruction.has_SettlementCurrency",
      "label": "CurrencyCode",
      "properties": {
        "description": "Both fields use ValueType concept CurrencyCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CurrencyCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxRate.has_QuoteCurrency.SHARES_VALUE_TYPE.CurrencyCode.value.FxTrade.has_BuyCurrency",
      "source": "value.FxRate.has_QuoteCurrency",
      "target": "value.FxTrade.has_BuyCurrency",
      "label": "CurrencyCode",
      "properties": {
        "description": "Both fields use ValueType concept CurrencyCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CurrencyCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxRate.has_QuoteCurrency.SHARES_VALUE_TYPE.CurrencyCode.value.FxTrade.has_SellCurrency",
      "source": "value.FxRate.has_QuoteCurrency",
      "target": "value.FxTrade.has_SellCurrency",
      "label": "CurrencyCode",
      "properties": {
        "description": "Both fields use ValueType concept CurrencyCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CurrencyCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxRate.has_QuoteCurrency.SHARES_VALUE_TYPE.CurrencyCode.value.NostroAccount.has_AccountCurrency",
      "source": "value.FxRate.has_QuoteCurrency",
      "target": "value.NostroAccount.has_AccountCurrency",
      "label": "CurrencyCode",
      "properties": {
        "description": "Both fields use ValueType concept CurrencyCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CurrencyCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxRate.has_QuoteCurrency.SHARES_VALUE_TYPE.CurrencyCode.value.SettlementInstruction.has_SettlementCurrency",
      "source": "value.FxRate.has_QuoteCurrency",
      "target": "value.SettlementInstruction.has_SettlementCurrency",
      "label": "CurrencyCode",
      "properties": {
        "description": "Both fields use ValueType concept CurrencyCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CurrencyCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxTrade.has_BuyCurrency.SHARES_VALUE_TYPE.CurrencyCode.value.FxTrade.has_SellCurrency",
      "source": "value.FxTrade.has_BuyCurrency",
      "target": "value.FxTrade.has_SellCurrency",
      "label": "CurrencyCode",
      "properties": {
        "description": "Both fields use ValueType concept CurrencyCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CurrencyCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxTrade.has_BuyCurrency.SHARES_VALUE_TYPE.CurrencyCode.value.NostroAccount.has_AccountCurrency",
      "source": "value.FxTrade.has_BuyCurrency",
      "target": "value.NostroAccount.has_AccountCurrency",
      "label": "CurrencyCode",
      "properties": {
        "description": "Both fields use ValueType concept CurrencyCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CurrencyCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxTrade.has_BuyCurrency.SHARES_VALUE_TYPE.CurrencyCode.value.SettlementInstruction.has_SettlementCurrency",
      "source": "value.FxTrade.has_BuyCurrency",
      "target": "value.SettlementInstruction.has_SettlementCurrency",
      "label": "CurrencyCode",
      "properties": {
        "description": "Both fields use ValueType concept CurrencyCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CurrencyCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxTrade.has_SellCurrency.SHARES_VALUE_TYPE.CurrencyCode.value.NostroAccount.has_AccountCurrency",
      "source": "value.FxTrade.has_SellCurrency",
      "target": "value.NostroAccount.has_AccountCurrency",
      "label": "CurrencyCode",
      "properties": {
        "description": "Both fields use ValueType concept CurrencyCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CurrencyCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxTrade.has_SellCurrency.SHARES_VALUE_TYPE.CurrencyCode.value.SettlementInstruction.has_SettlementCurrency",
      "source": "value.FxTrade.has_SellCurrency",
      "target": "value.SettlementInstruction.has_SettlementCurrency",
      "label": "CurrencyCode",
      "properties": {
        "description": "Both fields use ValueType concept CurrencyCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CurrencyCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.NostroAccount.has_AccountCurrency.SHARES_VALUE_TYPE.CurrencyCode.value.SettlementInstruction.has_SettlementCurrency",
      "source": "value.NostroAccount.has_AccountCurrency",
      "target": "value.SettlementInstruction.has_SettlementCurrency",
      "label": "CurrencyCode",
      "properties": {
        "description": "Both fields use ValueType concept CurrencyCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CurrencyCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxTrade.has_NotionalAmount.SHARES_VALUE_TYPE.MonetaryAmount.value.FxTrade.has_ReportCurrencyExposureAmount",
      "source": "value.FxTrade.has_NotionalAmount",
      "target": "value.FxTrade.has_ReportCurrencyExposureAmount",
      "label": "MonetaryAmount",
      "properties": {
        "description": "Both fields use ValueType concept MonetaryAmount.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "MonetaryAmount"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxTrade.has_NotionalAmount.SHARES_VALUE_TYPE.MonetaryAmount.value.SettlementInstruction.has_SettlementAmount",
      "source": "value.FxTrade.has_NotionalAmount",
      "target": "value.SettlementInstruction.has_SettlementAmount",
      "label": "MonetaryAmount",
      "properties": {
        "description": "Both fields use ValueType concept MonetaryAmount.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "MonetaryAmount"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.FxTrade.has_ReportCurrencyExposureAmount.SHARES_VALUE_TYPE.MonetaryAmount.value.SettlementInstruction.has_SettlementAmount",
      "source": "value.FxTrade.has_ReportCurrencyExposureAmount",
      "target": "value.SettlementInstruction.has_SettlementAmount",
      "label": "MonetaryAmount",
      "properties": {
        "description": "Both fields use ValueType concept MonetaryAmount.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "MonetaryAmount"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.dataset.counterparties.SOURCE_TABLE.SOURCE_TABLE.table.counterparty_master.counterparties",
      "source": "dataset.counterparties",
      "target": "table.counterparty_master.counterparties",
      "label": "SOURCE_TABLE",
      "properties": {
        "source_field": "semantic_model.datasets.source/custom_extensions",
        "dataset": "counterparties",
        "source_table": "counterparty_master.counterparties"
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.dataset.counterparties.CONTAINS.contains.field.counterparties.counterparty_id",
      "source": "dataset.counterparties",
      "target": "field.counterparties.counterparty_id",
      "label": "contains",
      "properties": {
        "description": "Stable master identifier for a trading or account counterparty.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.counterparties.counterparty_id.SOURCE_FIELD.SOURCE_FIELD.column.counterparty_master.counterparties.counterparty_id",
      "source": "field.counterparties.counterparty_id",
      "target": "column.counterparty_master.counterparties.counterparty_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Stable master identifier for a trading or account counterparty.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "counterparties.counterparty_id",
        "physical_field": "counterparty_master.counterparties.counterparty_id",
        "expression": "counterparty_id"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.counterparties.CONTAINS.contains.field.counterparties.counterparty_name",
      "source": "dataset.counterparties",
      "target": "field.counterparties.counterparty_name",
      "label": "contains",
      "properties": {
        "description": "Legal or trading display name of the counterparty.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.counterparties.counterparty_name.SOURCE_FIELD.SOURCE_FIELD.column.counterparty_master.counterparties.counterparty_name",
      "source": "field.counterparties.counterparty_name",
      "target": "column.counterparty_master.counterparties.counterparty_name",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Legal or trading display name of the counterparty.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "counterparties.counterparty_name",
        "physical_field": "counterparty_master.counterparties.counterparty_name",
        "expression": "counterparty_name"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.counterparties.CONTAINS.contains.field.counterparties.counterparty_country",
      "source": "dataset.counterparties",
      "target": "field.counterparties.counterparty_country",
      "label": "contains",
      "properties": {
        "description": "Country or jurisdiction associated with the counterparty master record.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.counterparties.counterparty_country.SOURCE_FIELD.SOURCE_FIELD.column.counterparty_master.counterparties.counterparty_country",
      "source": "field.counterparties.counterparty_country",
      "target": "column.counterparty_master.counterparties.counterparty_country",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Country or jurisdiction associated with the counterparty master record.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "counterparties.counterparty_country",
        "physical_field": "counterparty_master.counterparties.counterparty_country",
        "expression": "counterparty_country"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.counterparties.CONTAINS.contains.field.counterparties.risk_segment",
      "source": "dataset.counterparties",
      "target": "field.counterparties.risk_segment",
      "label": "contains",
      "properties": {
        "description": "Risk or client segment assigned to the counterparty for monitoring.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.counterparties.risk_segment.SOURCE_FIELD.SOURCE_FIELD.column.counterparty_master.counterparties.risk_segment",
      "source": "field.counterparties.risk_segment",
      "target": "column.counterparty_master.counterparties.risk_segment",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Risk or client segment assigned to the counterparty for monitoring.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "counterparties.risk_segment",
        "physical_field": "counterparty_master.counterparties.risk_segment",
        "expression": "risk_segment"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.fx_rates.SOURCE_TABLE.SOURCE_TABLE.table.market_data.fx_rates",
      "source": "dataset.fx_rates",
      "target": "table.market_data.fx_rates",
      "label": "SOURCE_TABLE",
      "properties": {
        "source_field": "semantic_model.datasets.source/custom_extensions",
        "dataset": "fx_rates",
        "source_table": "market_data.fx_rates"
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.dataset.fx_rates.CONTAINS.contains.field.fx_rates.rate_id",
      "source": "dataset.fx_rates",
      "target": "field.fx_rates.rate_id",
      "label": "contains",
      "properties": {
        "description": "Stable identifier for an FX rate reference record.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.fx_rates.rate_id.SOURCE_FIELD.SOURCE_FIELD.column.market_data.fx_rates.rate_id",
      "source": "field.fx_rates.rate_id",
      "target": "column.market_data.fx_rates.rate_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Stable identifier for an FX rate reference record.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "fx_rates.rate_id",
        "physical_field": "market_data.fx_rates.rate_id",
        "expression": "rate_id"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.fx_rates.CONTAINS.contains.field.fx_rates.base_currency",
      "source": "dataset.fx_rates",
      "target": "field.fx_rates.base_currency",
      "label": "contains",
      "properties": {
        "description": "Base currency of the FX quote.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.fx_rates.base_currency.SOURCE_FIELD.SOURCE_FIELD.column.market_data.fx_rates.base_currency",
      "source": "field.fx_rates.base_currency",
      "target": "column.market_data.fx_rates.base_currency",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Base currency of the FX quote.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "fx_rates.base_currency",
        "physical_field": "market_data.fx_rates.base_currency",
        "expression": "base_currency"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.fx_rates.CONTAINS.contains.field.fx_rates.quote_currency",
      "source": "dataset.fx_rates",
      "target": "field.fx_rates.quote_currency",
      "label": "contains",
      "properties": {
        "description": "Quote or reporting currency of the FX quote.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.fx_rates.quote_currency.SOURCE_FIELD.SOURCE_FIELD.column.market_data.fx_rates.quote_currency",
      "source": "field.fx_rates.quote_currency",
      "target": "column.market_data.fx_rates.quote_currency",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Quote or reporting currency of the FX quote.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "fx_rates.quote_currency",
        "physical_field": "market_data.fx_rates.quote_currency",
        "expression": "quote_currency"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.fx_rates.CONTAINS.contains.field.fx_rates.rate_date",
      "source": "dataset.fx_rates",
      "target": "field.fx_rates.rate_date",
      "label": "contains",
      "properties": {
        "description": "Effective date of the FX rate.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.fx_rates.rate_date.SOURCE_FIELD.SOURCE_FIELD.column.market_data.fx_rates.rate_date",
      "source": "field.fx_rates.rate_date",
      "target": "column.market_data.fx_rates.rate_date",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Effective date of the FX rate.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "fx_rates.rate_date",
        "physical_field": "market_data.fx_rates.rate_date",
        "expression": "rate_date"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.fx_rates.CONTAINS.contains.field.fx_rates.rate_value",
      "source": "dataset.fx_rates",
      "target": "field.fx_rates.rate_value",
      "label": "contains",
      "properties": {
        "description": "Decimal rate value used for currency conversion.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.fx_rates.rate_value.SOURCE_FIELD.SOURCE_FIELD.column.market_data.fx_rates.rate_value",
      "source": "field.fx_rates.rate_value",
      "target": "column.market_data.fx_rates.rate_value",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Decimal rate value used for currency conversion.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "fx_rates.rate_value",
        "physical_field": "market_data.fx_rates.rate_value",
        "expression": "rate_value"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.fx_settlement_monitoring_lines.SOURCE_TABLE.SOURCE_TABLE.table.fx_trading_core.fx_trades",
      "source": "dataset.fx_settlement_monitoring_lines",
      "target": "table.fx_trading_core.fx_trades",
      "label": "SOURCE_TABLE",
      "properties": {
        "description": "Monitoring lines are produced by a documented query that combines FX trades, settlement instructions, counterparties, nostro accounts, and FX rates for daily review.",
        "source_field": "semantic_model.datasets.source/custom_extensions",
        "dataset": "fx_settlement_monitoring_lines",
        "source_table": "fx_trading_core.fx_trades"
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.dataset.fx_settlement_monitoring_lines.SOURCE_TABLE.SOURCE_TABLE.table.payments_core.settlement_instructions",
      "source": "dataset.fx_settlement_monitoring_lines",
      "target": "table.payments_core.settlement_instructions",
      "label": "SOURCE_TABLE",
      "properties": {
        "description": "Monitoring lines are produced by a documented query that combines FX trades, settlement instructions, counterparties, nostro accounts, and FX rates for daily review.",
        "source_field": "semantic_model.datasets.source/custom_extensions",
        "dataset": "fx_settlement_monitoring_lines",
        "source_table": "payments_core.settlement_instructions"
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.dataset.fx_settlement_monitoring_lines.SOURCE_TABLE.SOURCE_TABLE.table.counterparty_master.counterparties",
      "source": "dataset.fx_settlement_monitoring_lines",
      "target": "table.counterparty_master.counterparties",
      "label": "SOURCE_TABLE",
      "properties": {
        "description": "Monitoring lines are produced by a documented query that combines FX trades, settlement instructions, counterparties, nostro accounts, and FX rates for daily review.",
        "source_field": "semantic_model.datasets.source/custom_extensions",
        "dataset": "fx_settlement_monitoring_lines",
        "source_table": "counterparty_master.counterparties"
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.dataset.fx_settlement_monitoring_lines.SOURCE_TABLE.SOURCE_TABLE.table.nostro_master.nostro_accounts",
      "source": "dataset.fx_settlement_monitoring_lines",
      "target": "table.nostro_master.nostro_accounts",
      "label": "SOURCE_TABLE",
      "properties": {
        "description": "Monitoring lines are produced by a documented query that combines FX trades, settlement instructions, counterparties, nostro accounts, and FX rates for daily review.",
        "source_field": "semantic_model.datasets.source/custom_extensions",
        "dataset": "fx_settlement_monitoring_lines",
        "source_table": "nostro_master.nostro_accounts"
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.dataset.fx_settlement_monitoring_lines.SOURCE_TABLE.SOURCE_TABLE.table.market_data.fx_rates",
      "source": "dataset.fx_settlement_monitoring_lines",
      "target": "table.market_data.fx_rates",
      "label": "SOURCE_TABLE",
      "properties": {
        "description": "Monitoring lines are produced by a documented query that combines FX trades, settlement instructions, counterparties, nostro accounts, and FX rates for daily review.",
        "source_field": "semantic_model.datasets.source/custom_extensions",
        "dataset": "fx_settlement_monitoring_lines",
        "source_table": "market_data.fx_rates"
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.dataset.fx_settlement_monitoring_lines.CONTAINS.contains.field.fx_settlement_monitoring_lines.trade_id",
      "source": "dataset.fx_settlement_monitoring_lines",
      "target": "field.fx_settlement_monitoring_lines.trade_id",
      "label": "contains",
      "properties": {
        "description": "Trade identifier carried onto the monitoring line for reconciliation.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.dataset.fx_settlement_monitoring_lines.CONTAINS.contains.field.fx_settlement_monitoring_lines.settlement_instruction_id",
      "source": "dataset.fx_settlement_monitoring_lines",
      "target": "field.fx_settlement_monitoring_lines.settlement_instruction_id",
      "label": "contains",
      "properties": {
        "description": "Settlement instruction identifier carried onto the monitoring line.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.dataset.fx_settlement_monitoring_lines.CONTAINS.contains.field.fx_settlement_monitoring_lines.counterparty_id",
      "source": "dataset.fx_settlement_monitoring_lines",
      "target": "field.fx_settlement_monitoring_lines.counterparty_id",
      "label": "contains",
      "properties": {
        "description": "Counterparty identifier reported for settlement monitoring and aggregation.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.dataset.fx_settlement_monitoring_lines.CONTAINS.contains.field.fx_settlement_monitoring_lines.settlement_currency",
      "source": "dataset.fx_settlement_monitoring_lines",
      "target": "field.fx_settlement_monitoring_lines.settlement_currency",
      "label": "contains",
      "properties": {
        "description": "Settlement currency reported on the monitoring line.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.dataset.fx_settlement_monitoring_lines.CONTAINS.contains.field.fx_settlement_monitoring_lines.settlement_amount",
      "source": "dataset.fx_settlement_monitoring_lines",
      "target": "field.fx_settlement_monitoring_lines.settlement_amount",
      "label": "contains",
      "properties": {
        "description": "Settlement amount reported on the monitoring line.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.dataset.fx_settlement_monitoring_lines.CONTAINS.contains.field.fx_settlement_monitoring_lines.settlement_status",
      "source": "dataset.fx_settlement_monitoring_lines",
      "target": "field.fx_settlement_monitoring_lines.settlement_status",
      "label": "contains",
      "properties": {
        "description": "Settlement status reported on the monitoring line.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.dataset.fx_settlement_monitoring_lines.CONTAINS.contains.field.fx_settlement_monitoring_lines.exposure_amount_report_currency",
      "source": "dataset.fx_settlement_monitoring_lines",
      "target": "field.fx_settlement_monitoring_lines.exposure_amount_report_currency",
      "label": "contains",
      "properties": {
        "description": "Trade notional converted into reporting currency for monitoring review.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.dataset.fx_settlement_monitoring_lines.CONTAINS.contains.field.fx_settlement_monitoring_lines.settlement_delay_days",
      "source": "dataset.fx_settlement_monitoring_lines",
      "target": "field.fx_settlement_monitoring_lines.settlement_delay_days",
      "label": "contains",
      "properties": {
        "description": "Number of days between expected and actual settlement completion.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.dataset.fx_trades.SOURCE_TABLE.SOURCE_TABLE.table.fx_trading_core.fx_trades",
      "source": "dataset.fx_trades",
      "target": "table.fx_trading_core.fx_trades",
      "label": "SOURCE_TABLE",
      "properties": {
        "source_field": "semantic_model.datasets.source/custom_extensions",
        "dataset": "fx_trades",
        "source_table": "fx_trading_core.fx_trades"
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.dataset.fx_trades.CONTAINS.contains.field.fx_trades.trade_id",
      "source": "dataset.fx_trades",
      "target": "field.fx_trades.trade_id",
      "label": "contains",
      "properties": {
        "description": "Stable source trade identifier for an executed FX trade.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.fx_trades.trade_id.SOURCE_FIELD.SOURCE_FIELD.column.fx_trading_core.fx_trades.trade_id",
      "source": "field.fx_trades.trade_id",
      "target": "column.fx_trading_core.fx_trades.trade_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Stable source trade identifier for an executed FX trade.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "fx_trades.trade_id",
        "physical_field": "fx_trading_core.fx_trades.trade_id",
        "expression": "trade_id"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.fx_trades.CONTAINS.contains.field.fx_trades.trade_date",
      "source": "dataset.fx_trades",
      "target": "field.fx_trades.trade_date",
      "label": "contains",
      "properties": {
        "description": "Business booking date of the FX trade.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.fx_trades.trade_date.SOURCE_FIELD.SOURCE_FIELD.column.fx_trading_core.fx_trades.trade_date",
      "source": "field.fx_trades.trade_date",
      "target": "column.fx_trading_core.fx_trades.trade_date",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Business booking date of the FX trade.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "fx_trades.trade_date",
        "physical_field": "fx_trading_core.fx_trades.trade_date",
        "expression": "trade_date"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.fx_trades.CONTAINS.contains.field.fx_trades.counterparty_id",
      "source": "dataset.fx_trades",
      "target": "field.fx_trades.counterparty_id",
      "label": "contains",
      "properties": {
        "description": "Counterparty identifier captured at trade execution.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.fx_trades.counterparty_id.SOURCE_FIELD.SOURCE_FIELD.column.fx_trading_core.fx_trades.counterparty_id",
      "source": "field.fx_trades.counterparty_id",
      "target": "column.fx_trading_core.fx_trades.counterparty_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Counterparty identifier captured at trade execution.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "fx_trades.counterparty_id",
        "physical_field": "fx_trading_core.fx_trades.counterparty_id",
        "expression": "counterparty_id"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.fx_trades.CONTAINS.contains.field.fx_trades.buy_currency",
      "source": "dataset.fx_trades",
      "target": "field.fx_trades.buy_currency",
      "label": "contains",
      "properties": {
        "description": "Currency bought by the FX trade.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.fx_trades.buy_currency.SOURCE_FIELD.SOURCE_FIELD.column.fx_trading_core.fx_trades.buy_currency",
      "source": "field.fx_trades.buy_currency",
      "target": "column.fx_trading_core.fx_trades.buy_currency",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Currency bought by the FX trade.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "fx_trades.buy_currency",
        "physical_field": "fx_trading_core.fx_trades.buy_currency",
        "expression": "buy_currency"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.fx_trades.CONTAINS.contains.field.fx_trades.sell_currency",
      "source": "dataset.fx_trades",
      "target": "field.fx_trades.sell_currency",
      "label": "contains",
      "properties": {
        "description": "Currency sold by the FX trade.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.fx_trades.sell_currency.SOURCE_FIELD.SOURCE_FIELD.column.fx_trading_core.fx_trades.sell_currency",
      "source": "field.fx_trades.sell_currency",
      "target": "column.fx_trading_core.fx_trades.sell_currency",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Currency sold by the FX trade.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "fx_trades.sell_currency",
        "physical_field": "fx_trading_core.fx_trades.sell_currency",
        "expression": "sell_currency"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.fx_trades.CONTAINS.contains.field.fx_trades.notional_amount",
      "source": "dataset.fx_trades",
      "target": "field.fx_trades.notional_amount",
      "label": "contains",
      "properties": {
        "description": "Trade notional amount before reporting-currency conversion.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.fx_trades.notional_amount.SOURCE_FIELD.SOURCE_FIELD.column.fx_trading_core.fx_trades.notional_amount",
      "source": "field.fx_trades.notional_amount",
      "target": "column.fx_trading_core.fx_trades.notional_amount",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Trade notional amount before reporting-currency conversion.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "fx_trades.notional_amount",
        "physical_field": "fx_trading_core.fx_trades.notional_amount",
        "expression": "notional_amount"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.fx_trades.CONTAINS.contains.field.fx_trades.settlement_date",
      "source": "dataset.fx_trades",
      "target": "field.fx_trades.settlement_date",
      "label": "contains",
      "properties": {
        "description": "Contractual settlement date agreed for the FX trade.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.fx_trades.settlement_date.SOURCE_FIELD.SOURCE_FIELD.column.fx_trading_core.fx_trades.settlement_date",
      "source": "field.fx_trades.settlement_date",
      "target": "column.fx_trading_core.fx_trades.settlement_date",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Contractual settlement date agreed for the FX trade.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "fx_trades.settlement_date",
        "physical_field": "fx_trading_core.fx_trades.settlement_date",
        "expression": "settlement_date"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.fx_trades.CONTAINS.contains.field.fx_trades.rate_id",
      "source": "dataset.fx_trades",
      "target": "field.fx_trades.rate_id",
      "label": "contains",
      "properties": {
        "description": "Reference identifier of the FX rate used for reporting conversion.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.fx_trades.rate_id.SOURCE_FIELD.SOURCE_FIELD.column.fx_trading_core.fx_trades.rate_id",
      "source": "field.fx_trades.rate_id",
      "target": "column.fx_trading_core.fx_trades.rate_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Reference identifier of the FX rate used for reporting conversion.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "fx_trades.rate_id",
        "physical_field": "fx_trading_core.fx_trades.rate_id",
        "expression": "rate_id"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.nostro_accounts.SOURCE_TABLE.SOURCE_TABLE.table.nostro_master.nostro_accounts",
      "source": "dataset.nostro_accounts",
      "target": "table.nostro_master.nostro_accounts",
      "label": "SOURCE_TABLE",
      "properties": {
        "source_field": "semantic_model.datasets.source/custom_extensions",
        "dataset": "nostro_accounts",
        "source_table": "nostro_master.nostro_accounts"
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.dataset.nostro_accounts.CONTAINS.contains.field.nostro_accounts.account_id",
      "source": "dataset.nostro_accounts",
      "target": "field.nostro_accounts.account_id",
      "label": "contains",
      "properties": {
        "description": "Stable account identifier for a nostro settlement account.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.nostro_accounts.account_id.SOURCE_FIELD.SOURCE_FIELD.column.nostro_master.nostro_accounts.account_id",
      "source": "field.nostro_accounts.account_id",
      "target": "column.nostro_master.nostro_accounts.account_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Stable account identifier for a nostro settlement account.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "nostro_accounts.account_id",
        "physical_field": "nostro_master.nostro_accounts.account_id",
        "expression": "account_id"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.nostro_accounts.CONTAINS.contains.field.nostro_accounts.account_currency",
      "source": "dataset.nostro_accounts",
      "target": "field.nostro_accounts.account_currency",
      "label": "contains",
      "properties": {
        "description": "Currency in which the nostro account settles cash movements.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.nostro_accounts.account_currency.SOURCE_FIELD.SOURCE_FIELD.column.nostro_master.nostro_accounts.account_currency",
      "source": "field.nostro_accounts.account_currency",
      "target": "column.nostro_master.nostro_accounts.account_currency",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Currency in which the nostro account settles cash movements.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "nostro_accounts.account_currency",
        "physical_field": "nostro_master.nostro_accounts.account_currency",
        "expression": "account_currency"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.nostro_accounts.CONTAINS.contains.field.nostro_accounts.account_status",
      "source": "dataset.nostro_accounts",
      "target": "field.nostro_accounts.account_status",
      "label": "contains",
      "properties": {
        "description": "Operational lifecycle status of the nostro account.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.nostro_accounts.account_status.SOURCE_FIELD.SOURCE_FIELD.column.nostro_master.nostro_accounts.account_status",
      "source": "field.nostro_accounts.account_status",
      "target": "column.nostro_master.nostro_accounts.account_status",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Operational lifecycle status of the nostro account.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "nostro_accounts.account_status",
        "physical_field": "nostro_master.nostro_accounts.account_status",
        "expression": "account_status"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.nostro_accounts.CONTAINS.contains.field.nostro_accounts.owner_counterparty_id",
      "source": "dataset.nostro_accounts",
      "target": "field.nostro_accounts.owner_counterparty_id",
      "label": "contains",
      "properties": {
        "description": "Counterparty identifier responsible for or owning the nostro account.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.nostro_accounts.owner_counterparty_id.SOURCE_FIELD.SOURCE_FIELD.column.nostro_master.nostro_accounts.owner_counterparty_id",
      "source": "field.nostro_accounts.owner_counterparty_id",
      "target": "column.nostro_master.nostro_accounts.owner_counterparty_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Counterparty identifier responsible for or owning the nostro account.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "nostro_accounts.owner_counterparty_id",
        "physical_field": "nostro_master.nostro_accounts.owner_counterparty_id",
        "expression": "owner_counterparty_id"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.settlement_instructions.SOURCE_TABLE.SOURCE_TABLE.table.payments_core.settlement_instructions",
      "source": "dataset.settlement_instructions",
      "target": "table.payments_core.settlement_instructions",
      "label": "SOURCE_TABLE",
      "properties": {
        "source_field": "semantic_model.datasets.source/custom_extensions",
        "dataset": "settlement_instructions",
        "source_table": "payments_core.settlement_instructions"
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.dataset.settlement_instructions.CONTAINS.contains.field.settlement_instructions.settlement_instruction_id",
      "source": "dataset.settlement_instructions",
      "target": "field.settlement_instructions.settlement_instruction_id",
      "label": "contains",
      "properties": {
        "description": "Stable operational identifier for the FX settlement instruction.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.settlement_instructions.settlement_instruction_id.SOURCE_FIELD.SOURCE_FIELD.column.payments_core.settlement_instructions.settlement_instruction_id",
      "source": "field.settlement_instructions.settlement_instruction_id",
      "target": "column.payments_core.settlement_instructions.settlement_instruction_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Stable operational identifier for the FX settlement instruction.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "settlement_instructions.settlement_instruction_id",
        "physical_field": "payments_core.settlement_instructions.settlement_instruction_id",
        "expression": "settlement_instruction_id"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.settlement_instructions.CONTAINS.contains.field.settlement_instructions.trade_id",
      "source": "dataset.settlement_instructions",
      "target": "field.settlement_instructions.trade_id",
      "label": "contains",
      "properties": {
        "description": "Trade identifier whose cash movement is governed by the settlement instruction.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.settlement_instructions.trade_id.SOURCE_FIELD.SOURCE_FIELD.column.payments_core.settlement_instructions.trade_id",
      "source": "field.settlement_instructions.trade_id",
      "target": "column.payments_core.settlement_instructions.trade_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Trade identifier whose cash movement is governed by the settlement instruction.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "settlement_instructions.trade_id",
        "physical_field": "payments_core.settlement_instructions.trade_id",
        "expression": "trade_id"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.settlement_instructions.CONTAINS.contains.field.settlement_instructions.nostro_account_id",
      "source": "dataset.settlement_instructions",
      "target": "field.settlement_instructions.nostro_account_id",
      "label": "contains",
      "properties": {
        "description": "Nostro account identifier used to settle the instruction.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.settlement_instructions.nostro_account_id.SOURCE_FIELD.SOURCE_FIELD.column.payments_core.settlement_instructions.nostro_account_id",
      "source": "field.settlement_instructions.nostro_account_id",
      "target": "column.payments_core.settlement_instructions.nostro_account_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Nostro account identifier used to settle the instruction.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "settlement_instructions.nostro_account_id",
        "physical_field": "payments_core.settlement_instructions.nostro_account_id",
        "expression": "nostro_account_id"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.settlement_instructions.CONTAINS.contains.field.settlement_instructions.settlement_currency",
      "source": "dataset.settlement_instructions",
      "target": "field.settlement_instructions.settlement_currency",
      "label": "contains",
      "properties": {
        "description": "Currency in which the instruction settles.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.settlement_instructions.settlement_currency.SOURCE_FIELD.SOURCE_FIELD.column.payments_core.settlement_instructions.settlement_currency",
      "source": "field.settlement_instructions.settlement_currency",
      "target": "column.payments_core.settlement_instructions.settlement_currency",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Currency in which the instruction settles.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "settlement_instructions.settlement_currency",
        "physical_field": "payments_core.settlement_instructions.settlement_currency",
        "expression": "settlement_currency"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.settlement_instructions.CONTAINS.contains.field.settlement_instructions.settlement_amount",
      "source": "dataset.settlement_instructions",
      "target": "field.settlement_instructions.settlement_amount",
      "label": "contains",
      "properties": {
        "description": "Monetary cash obligation that the instruction must settle in the stated settlement currency.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.settlement_instructions.settlement_amount.SOURCE_FIELD.SOURCE_FIELD.column.payments_core.settlement_instructions.settlement_amount",
      "source": "field.settlement_instructions.settlement_amount",
      "target": "column.payments_core.settlement_instructions.settlement_amount",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Monetary cash obligation that the instruction must settle in the stated settlement currency.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "settlement_instructions.settlement_amount",
        "physical_field": "payments_core.settlement_instructions.settlement_amount",
        "expression": "settlement_amount"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.settlement_instructions.CONTAINS.contains.field.settlement_instructions.settlement_value_date",
      "source": "dataset.settlement_instructions",
      "target": "field.settlement_instructions.settlement_value_date",
      "label": "contains",
      "properties": {
        "description": "Value date expected for settlement posting.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.settlement_instructions.settlement_value_date.SOURCE_FIELD.SOURCE_FIELD.column.payments_core.settlement_instructions.settlement_value_date",
      "source": "field.settlement_instructions.settlement_value_date",
      "target": "column.payments_core.settlement_instructions.settlement_value_date",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Value date expected for settlement posting.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "settlement_instructions.settlement_value_date",
        "physical_field": "payments_core.settlement_instructions.settlement_value_date",
        "expression": "settlement_value_date"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.settlement_instructions.CONTAINS.contains.field.settlement_instructions.expected_settlement_date",
      "source": "dataset.settlement_instructions",
      "target": "field.settlement_instructions.expected_settlement_date",
      "label": "contains",
      "properties": {
        "description": "Date by which the instruction should complete settlement.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.settlement_instructions.expected_settlement_date.SOURCE_FIELD.SOURCE_FIELD.column.payments_core.settlement_instructions.expected_settlement_date",
      "source": "field.settlement_instructions.expected_settlement_date",
      "target": "column.payments_core.settlement_instructions.expected_settlement_date",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Date by which the instruction should complete settlement.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "settlement_instructions.expected_settlement_date",
        "physical_field": "payments_core.settlement_instructions.expected_settlement_date",
        "expression": "expected_settlement_date"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.settlement_instructions.CONTAINS.contains.field.settlement_instructions.actual_settlement_date",
      "source": "dataset.settlement_instructions",
      "target": "field.settlement_instructions.actual_settlement_date",
      "label": "contains",
      "properties": {
        "description": "Date on which the instruction actually completed settlement.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.settlement_instructions.actual_settlement_date.SOURCE_FIELD.SOURCE_FIELD.column.payments_core.settlement_instructions.actual_settlement_date",
      "source": "field.settlement_instructions.actual_settlement_date",
      "target": "column.payments_core.settlement_instructions.actual_settlement_date",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Date on which the instruction actually completed settlement.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "settlement_instructions.actual_settlement_date",
        "physical_field": "payments_core.settlement_instructions.actual_settlement_date",
        "expression": "actual_settlement_date"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.settlement_instructions.CONTAINS.contains.field.settlement_instructions.settlement_status",
      "source": "dataset.settlement_instructions",
      "target": "field.settlement_instructions.settlement_status",
      "label": "contains",
      "properties": {
        "description": "Operational status assigned to the settlement instruction.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.field.settlement_instructions.settlement_status.SOURCE_FIELD.SOURCE_FIELD.column.payments_core.settlement_instructions.settlement_status",
      "source": "field.settlement_instructions.settlement_status",
      "target": "column.payments_core.settlement_instructions.settlement_status",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Operational status assigned to the settlement instruction.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "settlement_instructions.settlement_status",
        "physical_field": "payments_core.settlement_instructions.settlement_status",
        "expression": "settlement_status"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.fx_settlement_monitoring_lines.trade_id.SOURCE_FIELD.SOURCE_FIELD.field.fx_trades.trade_id",
      "source": "field.fx_settlement_monitoring_lines.trade_id",
      "target": "field.fx_trades.trade_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Trade identifier carried onto the monitoring line for reconciliation.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "fx_trades.trade_id",
        "expression": "fx_trades.trade_id"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.fx_settlement_monitoring_lines.settlement_instruction_id.SOURCE_FIELD.SOURCE_FIELD.field.settlement_instructions.settlement_instruction_id",
      "source": "field.fx_settlement_monitoring_lines.settlement_instruction_id",
      "target": "field.settlement_instructions.settlement_instruction_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Settlement instruction identifier carried onto the monitoring line.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "settlement_instructions.settlement_instruction_id",
        "expression": "settlement_instructions.settlement_instruction_id"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.fx_settlement_monitoring_lines.counterparty_id.SOURCE_FIELD.SOURCE_FIELD.field.fx_trades.counterparty_id",
      "source": "field.fx_settlement_monitoring_lines.counterparty_id",
      "target": "field.fx_trades.counterparty_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Counterparty identifier reported for settlement monitoring and aggregation.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "fx_trades.counterparty_id",
        "expression": "fx_trades.counterparty_id"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.fx_settlement_monitoring_lines.settlement_currency.SOURCE_FIELD.SOURCE_FIELD.field.settlement_instructions.settlement_currency",
      "source": "field.fx_settlement_monitoring_lines.settlement_currency",
      "target": "field.settlement_instructions.settlement_currency",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Settlement currency reported on the monitoring line.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "settlement_instructions.settlement_currency",
        "expression": "settlement_instructions.settlement_currency"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.fx_settlement_monitoring_lines.settlement_amount.SOURCE_FIELD.SOURCE_FIELD.field.settlement_instructions.settlement_amount",
      "source": "field.fx_settlement_monitoring_lines.settlement_amount",
      "target": "field.settlement_instructions.settlement_amount",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Settlement amount reported on the monitoring line.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "settlement_instructions.settlement_amount",
        "expression": "settlement_instructions.settlement_amount"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.fx_settlement_monitoring_lines.settlement_status.SOURCE_FIELD.SOURCE_FIELD.field.settlement_instructions.settlement_status",
      "source": "field.fx_settlement_monitoring_lines.settlement_status",
      "target": "field.settlement_instructions.settlement_status",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Settlement status reported on the monitoring line.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "settlement_instructions.settlement_status",
        "expression": "settlement_instructions.settlement_status"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.fx_settlement_monitoring_lines.exposure_amount_report_currency.SOURCE_FIELD.SOURCE_FIELD.field.fx_trades.notional_amount",
      "source": "field.fx_settlement_monitoring_lines.exposure_amount_report_currency",
      "target": "field.fx_trades.notional_amount",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Trade notional converted into reporting currency for monitoring review.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "fx_trades.notional_amount",
        "expression": "fx_trades.notional_amount * fx_rates.rate_value"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.fx_settlement_monitoring_lines.exposure_amount_report_currency.SOURCE_FIELD.SOURCE_FIELD.field.fx_rates.rate_value",
      "source": "field.fx_settlement_monitoring_lines.exposure_amount_report_currency",
      "target": "field.fx_rates.rate_value",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Trade notional converted into reporting currency for monitoring review.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "fx_rates.rate_value",
        "expression": "fx_trades.notional_amount * fx_rates.rate_value"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.fx_settlement_monitoring_lines.settlement_delay_days.SOURCE_FIELD.SOURCE_FIELD.field.settlement_instructions.expected_settlement_date",
      "source": "field.fx_settlement_monitoring_lines.settlement_delay_days",
      "target": "field.settlement_instructions.expected_settlement_date",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Number of days between expected and actual settlement completion.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "settlement_instructions.expected_settlement_date",
        "expression": "DATEDIFF(day, settlement_instructions.expected_settlement_date, settlement_instructions.actual_settlement_date)"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.field.fx_settlement_monitoring_lines.settlement_delay_days.SOURCE_FIELD.SOURCE_FIELD.field.settlement_instructions.actual_settlement_date",
      "source": "field.fx_settlement_monitoring_lines.settlement_delay_days",
      "target": "field.settlement_instructions.actual_settlement_date",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "Number of days between expected and actual settlement completion.",
        "source_field": "semantic_model.datasets.fields.expression",
        "dataset_field": "settlement_instructions.actual_settlement_date",
        "expression": "DATEDIFF(day, settlement_instructions.expected_settlement_date, settlement_instructions.actual_settlement_date)"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.dataset.fx_trades.DATASET_JOIN.join_counterparty_id.dataset.counterparties",
      "source": "dataset.fx_trades",
      "target": "dataset.counterparties",
      "label": "join counterparty_id",
      "properties": {
        "join_name": "fx_trade_counterparty",
        "relationship": {
          "name": "fx_trade_counterparty",
          "from": "fx_trades",
          "to": "counterparties",
          "from_columns": [
            "counterparty_id"
          ],
          "to_columns": [
            "counterparty_id"
          ],
          "ai_context": {
            "description": "FX trades use counterparty_id to attach the legal entity profile needed for settlement exposure monitoring."
          },
          "custom_extensions": []
        },
        "custom_extensions": [],
        "ai_context": {
          "description": "FX trades use counterparty_id to attach the legal entity profile needed for settlement exposure monitoring."
        }
      },
      "type": "DATASET_JOIN"
    },
    {
      "id": "edge.dataset.fx_trades.DATASET_JOIN.join_rate_id.dataset.fx_rates",
      "source": "dataset.fx_trades",
      "target": "dataset.fx_rates",
      "label": "join rate_id",
      "properties": {
        "join_name": "fx_trade_rate",
        "relationship": {
          "name": "fx_trade_rate",
          "from": "fx_trades",
          "to": "fx_rates",
          "from_columns": [
            "rate_id"
          ],
          "to_columns": [
            "rate_id"
          ],
          "ai_context": {
            "description": "FX trades use rate_id to resolve the rate record used to convert trade notional into reporting currency."
          },
          "custom_extensions": []
        },
        "custom_extensions": [],
        "ai_context": {
          "description": "FX trades use rate_id to resolve the rate record used to convert trade notional into reporting currency."
        }
      },
      "type": "DATASET_JOIN"
    },
    {
      "id": "edge.dataset.settlement_instructions.DATASET_JOIN.join_trade_id.dataset.fx_trades",
      "source": "dataset.settlement_instructions",
      "target": "dataset.fx_trades",
      "label": "join trade_id",
      "properties": {
        "join_name": "settlement_trade",
        "relationship": {
          "name": "settlement_trade",
          "from": "settlement_instructions",
          "to": "fx_trades",
          "from_columns": [
            "trade_id"
          ],
          "to_columns": [
            "trade_id"
          ],
          "ai_context": {
            "description": "Settlement instructions use trade_id to connect operational settlement status to the executed FX trade."
          },
          "custom_extensions": []
        },
        "custom_extensions": [],
        "ai_context": {
          "description": "Settlement instructions use trade_id to connect operational settlement status to the executed FX trade."
        }
      },
      "type": "DATASET_JOIN"
    },
    {
      "id": "edge.dataset.settlement_instructions.DATASET_JOIN.join_nostro_account_id_account_id.dataset.nostro_accounts",
      "source": "dataset.settlement_instructions",
      "target": "dataset.nostro_accounts",
      "label": "join nostro_account_id = account_id",
      "properties": {
        "join_name": "settlement_nostro_account",
        "relationship": {
          "name": "settlement_nostro_account",
          "from": "settlement_instructions",
          "to": "nostro_accounts",
          "from_columns": [
            "nostro_account_id"
          ],
          "to_columns": [
            "account_id"
          ],
          "ai_context": {
            "description": "Settlement instructions use nostro_account_id to identify the cash account used for settlement routing."
          },
          "custom_extensions": []
        },
        "custom_extensions": [],
        "ai_context": {
          "description": "Settlement instructions use nostro_account_id to identify the cash account used for settlement routing."
        }
      },
      "type": "DATASET_JOIN"
    },
    {
      "id": "edge.dataset.nostro_accounts.DATASET_JOIN.join_owner_counterparty_id_counterparty_id.dataset.counterparties",
      "source": "dataset.nostro_accounts",
      "target": "dataset.counterparties",
      "label": "join owner_counterparty_id = counterparty_id",
      "properties": {
        "join_name": "account_owner_counterparty",
        "relationship": {
          "name": "account_owner_counterparty",
          "from": "nostro_accounts",
          "to": "counterparties",
          "from_columns": [
            "owner_counterparty_id"
          ],
          "to_columns": [
            "counterparty_id"
          ],
          "ai_context": {
            "description": "Nostro accounts use owner_counterparty_id to identify the responsible counterparty or banking entity."
          },
          "custom_extensions": []
        },
        "custom_extensions": [],
        "ai_context": {
          "description": "Nostro accounts use owner_counterparty_id to identify the responsible counterparty or banking entity."
        }
      },
      "type": "DATASET_JOIN"
    },
    {
      "id": "edge.dataset.fx_settlement_monitoring_lines.DATASET_JOIN.join_trade_id.dataset.fx_trades",
      "source": "dataset.fx_settlement_monitoring_lines",
      "target": "dataset.fx_trades",
      "label": "join trade_id",
      "properties": {
        "join_name": "monitoring_line_trade",
        "relationship": {
          "name": "monitoring_line_trade",
          "from": "fx_settlement_monitoring_lines",
          "to": "fx_trades",
          "from_columns": [
            "trade_id"
          ],
          "to_columns": [
            "trade_id"
          ],
          "ai_context": {
            "description": "Monitoring lines reconcile to FX trades through trade_id to preserve row-level trade traceability."
          },
          "custom_extensions": []
        },
        "custom_extensions": [],
        "ai_context": {
          "description": "Monitoring lines reconcile to FX trades through trade_id to preserve row-level trade traceability."
        }
      },
      "type": "DATASET_JOIN"
    },
    {
      "id": "edge.dataset.fx_settlement_monitoring_lines.DATASET_JOIN.join_settlement_instruction_id.dataset.settlement_instructions",
      "source": "dataset.fx_settlement_monitoring_lines",
      "target": "dataset.settlement_instructions",
      "label": "join settlement_instruction_id",
      "properties": {
        "join_name": "monitoring_line_instruction",
        "relationship": {
          "name": "monitoring_line_instruction",
          "from": "fx_settlement_monitoring_lines",
          "to": "settlement_instructions",
          "from_columns": [
            "settlement_instruction_id"
          ],
          "to_columns": [
            "settlement_instruction_id"
          ],
          "ai_context": {
            "description": "Monitoring lines reconcile to settlement instructions through settlement_instruction_id for operational status traceability."
          },
          "custom_extensions": []
        },
        "custom_extensions": [],
        "ai_context": {
          "description": "Monitoring lines reconcile to settlement instructions through settlement_instruction_id for operational status traceability."
        }
      },
      "type": "DATASET_JOIN"
    },
    {
      "id": "edge.metric.report_currency_exposure_amount.DERIVED_BY.DERIVED_BY.dataset.fx_rates",
      "source": "metric.report_currency_exposure_amount",
      "target": "dataset.fx_rates",
      "label": "DERIVED_BY",
      "properties": {
        "description": "FX trade notional amount converted into reporting currency using the referenced FX rate.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "report_currency_exposure_amount",
        "expression": "fx_trades.notional_amount * fx_rates.rate_value",
        "source_fields": [
          "fx_rates.rate_value"
        ]
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.metric.report_currency_exposure_amount.DERIVED_BY.DERIVED_BY.dataset.fx_trades",
      "source": "metric.report_currency_exposure_amount",
      "target": "dataset.fx_trades",
      "label": "DERIVED_BY",
      "properties": {
        "description": "FX trade notional amount converted into reporting currency using the referenced FX rate.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "report_currency_exposure_amount",
        "expression": "fx_trades.notional_amount * fx_rates.rate_value",
        "source_fields": [
          "fx_trades.notional_amount"
        ]
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.metric.report_currency_exposure_amount.DERIVED_BY.fx_rates.rate_value.field.fx_rates.rate_value",
      "source": "metric.report_currency_exposure_amount",
      "target": "field.fx_rates.rate_value",
      "label": "fx_rates.rate_value",
      "properties": {
        "description": "FX trade notional amount converted into reporting currency using the referenced FX rate.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "report_currency_exposure_amount",
        "expression": "fx_trades.notional_amount * fx_rates.rate_value",
        "dataset_field": "fx_rates.rate_value"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.metric.report_currency_exposure_amount.DERIVED_BY.fx_trades.notional_amount.field.fx_trades.notional_amount",
      "source": "metric.report_currency_exposure_amount",
      "target": "field.fx_trades.notional_amount",
      "label": "fx_trades.notional_amount",
      "properties": {
        "description": "FX trade notional amount converted into reporting currency using the referenced FX rate.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "report_currency_exposure_amount",
        "expression": "fx_trades.notional_amount * fx_rates.rate_value",
        "dataset_field": "fx_trades.notional_amount"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.metric.settlement_delay_days.DERIVED_BY.DERIVED_BY.dataset.settlement_instructions",
      "source": "metric.settlement_delay_days",
      "target": "dataset.settlement_instructions",
      "label": "DERIVED_BY",
      "properties": {
        "description": "Settlement delay measured as the day difference between expected and actual settlement completion dates.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "settlement_delay_days",
        "expression": "DATEDIFF(day, settlement_instructions.expected_settlement_date, settlement_instructions.actual_settlement_date)",
        "source_fields": [
          "settlement_instructions.actual_settlement_date",
          "settlement_instructions.expected_settlement_date"
        ]
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.metric.settlement_delay_days.DERIVED_BY.settlement_instructions.actual_settlement_date.field.settlement_instructions.actual_settlement_date",
      "source": "metric.settlement_delay_days",
      "target": "field.settlement_instructions.actual_settlement_date",
      "label": "settlement_instructions.actual_settlement_date",
      "properties": {
        "description": "Settlement delay measured as the day difference between expected and actual settlement completion dates.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "settlement_delay_days",
        "expression": "DATEDIFF(day, settlement_instructions.expected_settlement_date, settlement_instructions.actual_settlement_date)",
        "dataset_field": "settlement_instructions.actual_settlement_date"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.metric.settlement_delay_days.DERIVED_BY.settlement_instructions.expected_settlement_date.field.settlement_instructions.expected_settlement_date",
      "source": "metric.settlement_delay_days",
      "target": "field.settlement_instructions.expected_settlement_date",
      "label": "settlement_instructions.expected_settlement_date",
      "properties": {
        "description": "Settlement delay measured as the day difference between expected and actual settlement completion dates.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "settlement_delay_days",
        "expression": "DATEDIFF(day, settlement_instructions.expected_settlement_date, settlement_instructions.actual_settlement_date)",
        "dataset_field": "settlement_instructions.expected_settlement_date"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.concept.Counterparty.MAPS_TO.MAPS_TO.dataset.counterparties",
      "source": "concept.Counterparty",
      "target": "dataset.counterparties",
      "label": "MAPS_TO",
      "properties": {
        "description": "Counterparty master records populate Counterparty entities at legal entity grain.",
        "fields": [
          "counterparties.counterparty_country",
          "counterparties.counterparty_id",
          "counterparties.counterparty_name",
          "counterparties.risk_segment"
        ],
        "ai_context": {
          "description": "Counterparty master records populate Counterparty entities at legal entity grain."
        }
      },
      "type": "MAPS_TO"
    },
    {
      "id": "edge.concept.Counterparty.MAPS_TO.MAPS_TO.dataset.nostro_accounts",
      "source": "concept.Counterparty",
      "target": "dataset.nostro_accounts",
      "label": "MAPS_TO",
      "properties": {
        "description": "Nostro account records contribute ownership evidence linking Counterparty entities to account records.",
        "fields": [
          "nostro_accounts.owner_counterparty_id"
        ],
        "ai_context": {
          "description": "Nostro account records contribute ownership evidence linking Counterparty entities to account records."
        }
      },
      "type": "MAPS_TO"
    },
    {
      "id": "edge.value.Counterparty.has_CounterpartyCountry.MAPS_TO_FIELD.has_CounterpartyCountry.field.counterparties.counterparty_country",
      "source": "value.Counterparty.has_CounterpartyCountry",
      "target": "field.counterparties.counterparty_country",
      "label": "has_CounterpartyCountry",
      "properties": {
        "description": "Counterparty.has_CounterpartyCountry maps to semantic dataset field counterparties.counterparty_country.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "counterparties.counterparty_country"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Counterparty.has_CounterpartyIdentifier.MAPS_TO_FIELD.has_CounterpartyIdentifier.field.counterparties.counterparty_id",
      "source": "value.Counterparty.has_CounterpartyIdentifier",
      "target": "field.counterparties.counterparty_id",
      "label": "has_CounterpartyIdentifier",
      "properties": {
        "description": "Counterparty.has_CounterpartyIdentifier maps to semantic dataset field counterparties.counterparty_id.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "counterparties.counterparty_id"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Counterparty.has_CounterpartyName.MAPS_TO_FIELD.has_CounterpartyName.field.counterparties.counterparty_name",
      "source": "value.Counterparty.has_CounterpartyName",
      "target": "field.counterparties.counterparty_name",
      "label": "has_CounterpartyName",
      "properties": {
        "description": "Counterparty.has_CounterpartyName maps to semantic dataset field counterparties.counterparty_name.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "counterparties.counterparty_name"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Counterparty.has_RiskSegment.MAPS_TO_FIELD.has_RiskSegment.field.counterparties.risk_segment",
      "source": "value.Counterparty.has_RiskSegment",
      "target": "field.counterparties.risk_segment",
      "label": "has_RiskSegment",
      "properties": {
        "description": "Counterparty.has_RiskSegment maps to semantic dataset field counterparties.risk_segment.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "counterparties.risk_segment"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.concept.FxRate.MAPS_TO.MAPS_TO.dataset.fx_rates",
      "source": "concept.FxRate",
      "target": "dataset.fx_rates",
      "label": "MAPS_TO",
      "properties": {
        "description": "FX rate reference records populate FxRate entities at rate quote grain.",
        "fields": [
          "fx_rates.base_currency",
          "fx_rates.quote_currency",
          "fx_rates.rate_date",
          "fx_rates.rate_id",
          "fx_rates.rate_value"
        ],
        "ai_context": {
          "description": "FX rate reference records populate FxRate entities at rate quote grain."
        }
      },
      "type": "MAPS_TO"
    },
    {
      "id": "edge.value.FxRate.has_BaseCurrency.MAPS_TO_FIELD.has_BaseCurrency.field.fx_rates.base_currency",
      "source": "value.FxRate.has_BaseCurrency",
      "target": "field.fx_rates.base_currency",
      "label": "has_BaseCurrency",
      "properties": {
        "description": "FxRate.has_BaseCurrency maps to semantic dataset field fx_rates.base_currency.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "fx_rates.base_currency"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.FxRate.has_QuoteCurrency.MAPS_TO_FIELD.has_QuoteCurrency.field.fx_rates.quote_currency",
      "source": "value.FxRate.has_QuoteCurrency",
      "target": "field.fx_rates.quote_currency",
      "label": "has_QuoteCurrency",
      "properties": {
        "description": "FxRate.has_QuoteCurrency maps to semantic dataset field fx_rates.quote_currency.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "fx_rates.quote_currency"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.FxRate.has_RateDate.MAPS_TO_FIELD.has_RateDate.field.fx_rates.rate_date",
      "source": "value.FxRate.has_RateDate",
      "target": "field.fx_rates.rate_date",
      "label": "has_RateDate",
      "properties": {
        "description": "FxRate.has_RateDate maps to semantic dataset field fx_rates.rate_date.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "fx_rates.rate_date"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.FxRate.has_RateValue.MAPS_TO_FIELD.has_RateValue.field.fx_rates.rate_value",
      "source": "value.FxRate.has_RateValue",
      "target": "field.fx_rates.rate_value",
      "label": "has_RateValue",
      "properties": {
        "description": "FxRate.has_RateValue maps to semantic dataset field fx_rates.rate_value.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "fx_rates.rate_value"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.FxRate.has_ReferenceIdentifier.MAPS_TO_FIELD.has_ReferenceIdentifier.field.fx_rates.rate_id",
      "source": "value.FxRate.has_ReferenceIdentifier",
      "target": "field.fx_rates.rate_id",
      "label": "has_ReferenceIdentifier",
      "properties": {
        "description": "FxRate.has_ReferenceIdentifier maps to semantic dataset field fx_rates.rate_id.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "fx_rates.rate_id"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.concept.FxTrade.MAPS_TO.MAPS_TO.dataset.fx_trades",
      "source": "concept.FxTrade",
      "target": "dataset.fx_trades",
      "label": "MAPS_TO",
      "properties": {
        "description": "FX trade source records populate FxTrade entities at executed trade grain.",
        "fields": [
          "fx_trades.buy_currency",
          "fx_trades.notional_amount",
          "fx_trades.sell_currency",
          "fx_trades.settlement_date",
          "fx_trades.trade_date",
          "fx_trades.trade_id"
        ],
        "ai_context": {
          "description": "FX trade source records populate FxTrade entities at executed trade grain."
        }
      },
      "type": "MAPS_TO"
    },
    {
      "id": "edge.concept.FxTrade.MAPS_TO.MAPS_TO.dataset.settlement_instructions",
      "source": "concept.FxTrade",
      "target": "dataset.settlement_instructions",
      "label": "MAPS_TO",
      "properties": {
        "description": "Settlement instruction records contribute settlement linkage evidence for FxTrade entities.",
        "fields": [
          "settlement_instructions.trade_id"
        ],
        "ai_context": {
          "description": "Settlement instruction records contribute settlement linkage evidence for FxTrade entities."
        }
      },
      "type": "MAPS_TO"
    },
    {
      "id": "edge.concept.FxTrade.MAPS_TO.MAPS_TO.metric.report_currency_exposure_amount",
      "source": "concept.FxTrade",
      "target": "metric.report_currency_exposure_amount",
      "label": "MAPS_TO",
      "properties": {
        "description": "FX trade notional amount converted into reporting currency using the referenced FX rate.",
        "source_field": "ontology_mappings.concept_mappings",
        "semantic_metric": "report_currency_exposure_amount",
        "semantic_reference": "metric.report_currency_exposure_amount"
      },
      "type": "MAPS_TO"
    },
    {
      "id": "edge.value.FxTrade.has_BookingDate.MAPS_TO_FIELD.has_BookingDate.field.fx_trades.trade_date",
      "source": "value.FxTrade.has_BookingDate",
      "target": "field.fx_trades.trade_date",
      "label": "has_BookingDate",
      "properties": {
        "description": "FxTrade.has_BookingDate maps to semantic dataset field fx_trades.trade_date.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "fx_trades.trade_date"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.FxTrade.has_BuyCurrency.MAPS_TO_FIELD.has_BuyCurrency.field.fx_trades.buy_currency",
      "source": "value.FxTrade.has_BuyCurrency",
      "target": "field.fx_trades.buy_currency",
      "label": "has_BuyCurrency",
      "properties": {
        "description": "FxTrade.has_BuyCurrency maps to semantic dataset field fx_trades.buy_currency.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "fx_trades.buy_currency"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.FxTrade.has_NotionalAmount.MAPS_TO_FIELD.has_NotionalAmount.field.fx_trades.notional_amount",
      "source": "value.FxTrade.has_NotionalAmount",
      "target": "field.fx_trades.notional_amount",
      "label": "has_NotionalAmount",
      "properties": {
        "description": "FxTrade.has_NotionalAmount maps to semantic dataset field fx_trades.notional_amount.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "fx_trades.notional_amount"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.FxTrade.has_SellCurrency.MAPS_TO_FIELD.has_SellCurrency.field.fx_trades.sell_currency",
      "source": "value.FxTrade.has_SellCurrency",
      "target": "field.fx_trades.sell_currency",
      "label": "has_SellCurrency",
      "properties": {
        "description": "FxTrade.has_SellCurrency maps to semantic dataset field fx_trades.sell_currency.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "fx_trades.sell_currency"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.FxTrade.has_SettlementDate.MAPS_TO_FIELD.has_SettlementDate.field.fx_trades.settlement_date",
      "source": "value.FxTrade.has_SettlementDate",
      "target": "field.fx_trades.settlement_date",
      "label": "has_SettlementDate",
      "properties": {
        "description": "FxTrade.has_SettlementDate maps to semantic dataset field fx_trades.settlement_date.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "fx_trades.settlement_date"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.FxTrade.has_TransactionIdentifier.MAPS_TO_FIELD.has_TransactionIdentifier.field.fx_trades.trade_id",
      "source": "value.FxTrade.has_TransactionIdentifier",
      "target": "field.fx_trades.trade_id",
      "label": "has_TransactionIdentifier",
      "properties": {
        "description": "FxTrade.has_TransactionIdentifier maps to semantic dataset field fx_trades.trade_id.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "fx_trades.trade_id"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.FxTrade.has_ReportCurrencyExposureAmount.DERIVED_BY.report_currency_exposure_amount.metric.report_currency_exposure_amount",
      "source": "value.FxTrade.has_ReportCurrencyExposureAmount",
      "target": "metric.report_currency_exposure_amount",
      "label": "report_currency_exposure_amount",
      "properties": {
        "description": "FxTrade.has_ReportCurrencyExposureAmount is derived by semantic metric report_currency_exposure_amount.",
        "source_field": "ontology_mappings.concept_mappings",
        "semantic_metric": "report_currency_exposure_amount",
        "semantic_reference": "metric.report_currency_exposure_amount",
        "expression": "fx_trades.notional_amount * fx_rates.rate_value",
        "metric_value_binding": true
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.value.FxTrade.has_ReportCurrencyExposureAmount.DERIVED_BY.fx_rates.rate_value.field.fx_rates.rate_value",
      "source": "value.FxTrade.has_ReportCurrencyExposureAmount",
      "target": "field.fx_rates.rate_value",
      "label": "fx_rates.rate_value",
      "properties": {
        "description": "Metric-backed field FxTrade.has_ReportCurrencyExposureAmount uses semantic dataset field fx_rates.rate_value.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "report_currency_exposure_amount",
        "semantic_reference": "metric.report_currency_exposure_amount",
        "expression": "fx_trades.notional_amount * fx_rates.rate_value",
        "dataset_field": "fx_rates.rate_value"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.value.FxTrade.has_ReportCurrencyExposureAmount.DERIVED_BY.fx_trades.notional_amount.field.fx_trades.notional_amount",
      "source": "value.FxTrade.has_ReportCurrencyExposureAmount",
      "target": "field.fx_trades.notional_amount",
      "label": "fx_trades.notional_amount",
      "properties": {
        "description": "Metric-backed field FxTrade.has_ReportCurrencyExposureAmount uses semantic dataset field fx_trades.notional_amount.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "report_currency_exposure_amount",
        "semantic_reference": "metric.report_currency_exposure_amount",
        "expression": "fx_trades.notional_amount * fx_rates.rate_value",
        "dataset_field": "fx_trades.notional_amount"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.concept.NostroAccount.MAPS_TO.MAPS_TO.dataset.nostro_accounts",
      "source": "concept.NostroAccount",
      "target": "dataset.nostro_accounts",
      "label": "MAPS_TO",
      "properties": {
        "description": "Nostro account master records populate NostroAccount entities at settlement account grain.",
        "fields": [
          "nostro_accounts.account_currency",
          "nostro_accounts.account_id",
          "nostro_accounts.account_status"
        ],
        "ai_context": {
          "description": "Nostro account master records populate NostroAccount entities at settlement account grain."
        }
      },
      "type": "MAPS_TO"
    },
    {
      "id": "edge.value.NostroAccount.has_AccountCurrency.MAPS_TO_FIELD.has_AccountCurrency.field.nostro_accounts.account_currency",
      "source": "value.NostroAccount.has_AccountCurrency",
      "target": "field.nostro_accounts.account_currency",
      "label": "has_AccountCurrency",
      "properties": {
        "description": "NostroAccount.has_AccountCurrency maps to semantic dataset field nostro_accounts.account_currency.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "nostro_accounts.account_currency"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.NostroAccount.has_AccountIdentifier.MAPS_TO_FIELD.has_AccountIdentifier.field.nostro_accounts.account_id",
      "source": "value.NostroAccount.has_AccountIdentifier",
      "target": "field.nostro_accounts.account_id",
      "label": "has_AccountIdentifier",
      "properties": {
        "description": "NostroAccount.has_AccountIdentifier maps to semantic dataset field nostro_accounts.account_id.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "nostro_accounts.account_id"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.NostroAccount.has_AccountStatus.MAPS_TO_FIELD.has_AccountStatus.field.nostro_accounts.account_status",
      "source": "value.NostroAccount.has_AccountStatus",
      "target": "field.nostro_accounts.account_status",
      "label": "has_AccountStatus",
      "properties": {
        "description": "NostroAccount.has_AccountStatus maps to semantic dataset field nostro_accounts.account_status.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "nostro_accounts.account_status"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.concept.SettlementInstruction.MAPS_TO.MAPS_TO.dataset.settlement_instructions",
      "source": "concept.SettlementInstruction",
      "target": "dataset.settlement_instructions",
      "label": "MAPS_TO",
      "properties": {
        "description": "Settlement instruction source records populate SettlementInstruction entities at operational instruction grain.",
        "fields": [
          "settlement_instructions.actual_settlement_date",
          "settlement_instructions.expected_settlement_date",
          "settlement_instructions.settlement_amount",
          "settlement_instructions.settlement_currency",
          "settlement_instructions.settlement_instruction_id",
          "settlement_instructions.settlement_status",
          "settlement_instructions.settlement_value_date"
        ],
        "ai_context": {
          "description": "Settlement instruction source records populate SettlementInstruction entities at operational instruction grain."
        }
      },
      "type": "MAPS_TO"
    },
    {
      "id": "edge.concept.SettlementInstruction.MAPS_TO.MAPS_TO.metric.settlement_delay_days",
      "source": "concept.SettlementInstruction",
      "target": "metric.settlement_delay_days",
      "label": "MAPS_TO",
      "properties": {
        "description": "Settlement delay measured as the day difference between expected and actual settlement completion dates.",
        "source_field": "ontology_mappings.concept_mappings",
        "semantic_metric": "settlement_delay_days",
        "semantic_reference": "metric.settlement_delay_days"
      },
      "type": "MAPS_TO"
    },
    {
      "id": "edge.value.SettlementInstruction.has_ActualSettlementDate.MAPS_TO_FIELD.has_ActualSettlementDate.field.settlement_instructions.actual_settlement_date",
      "source": "value.SettlementInstruction.has_ActualSettlementDate",
      "target": "field.settlement_instructions.actual_settlement_date",
      "label": "has_ActualSettlementDate",
      "properties": {
        "description": "SettlementInstruction.has_ActualSettlementDate maps to semantic dataset field settlement_instructions.actual_settlement_date.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "settlement_instructions.actual_settlement_date"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.SettlementInstruction.has_ExpectedSettlementDate.MAPS_TO_FIELD.has_ExpectedSettlementDate.field.settlement_instructions.expected_settlement_date",
      "source": "value.SettlementInstruction.has_ExpectedSettlementDate",
      "target": "field.settlement_instructions.expected_settlement_date",
      "label": "has_ExpectedSettlementDate",
      "properties": {
        "description": "SettlementInstruction.has_ExpectedSettlementDate maps to semantic dataset field settlement_instructions.expected_settlement_date.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "settlement_instructions.expected_settlement_date"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.SettlementInstruction.has_InstructionIdentifier.MAPS_TO_FIELD.has_InstructionIdentifier.field.settlement_instructions.settlement_instruction_id",
      "source": "value.SettlementInstruction.has_InstructionIdentifier",
      "target": "field.settlement_instructions.settlement_instruction_id",
      "label": "has_InstructionIdentifier",
      "properties": {
        "description": "SettlementInstruction.has_InstructionIdentifier maps to semantic dataset field settlement_instructions.settlement_instruction_id.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "settlement_instructions.settlement_instruction_id"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.SettlementInstruction.has_SettlementAmount.MAPS_TO_FIELD.has_SettlementAmount.field.settlement_instructions.settlement_amount",
      "source": "value.SettlementInstruction.has_SettlementAmount",
      "target": "field.settlement_instructions.settlement_amount",
      "label": "has_SettlementAmount",
      "properties": {
        "description": "SettlementInstruction.has_SettlementAmount maps to semantic dataset field settlement_instructions.settlement_amount.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "settlement_instructions.settlement_amount"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.SettlementInstruction.has_SettlementCurrency.MAPS_TO_FIELD.has_SettlementCurrency.field.settlement_instructions.settlement_currency",
      "source": "value.SettlementInstruction.has_SettlementCurrency",
      "target": "field.settlement_instructions.settlement_currency",
      "label": "has_SettlementCurrency",
      "properties": {
        "description": "SettlementInstruction.has_SettlementCurrency maps to semantic dataset field settlement_instructions.settlement_currency.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "settlement_instructions.settlement_currency"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.SettlementInstruction.has_SettlementStatus.MAPS_TO_FIELD.has_SettlementStatus.field.settlement_instructions.settlement_status",
      "source": "value.SettlementInstruction.has_SettlementStatus",
      "target": "field.settlement_instructions.settlement_status",
      "label": "has_SettlementStatus",
      "properties": {
        "description": "SettlementInstruction.has_SettlementStatus maps to semantic dataset field settlement_instructions.settlement_status.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "settlement_instructions.settlement_status"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.SettlementInstruction.has_SettlementValueDate.MAPS_TO_FIELD.has_SettlementValueDate.field.settlement_instructions.settlement_value_date",
      "source": "value.SettlementInstruction.has_SettlementValueDate",
      "target": "field.settlement_instructions.settlement_value_date",
      "label": "has_SettlementValueDate",
      "properties": {
        "description": "SettlementInstruction.has_SettlementValueDate maps to semantic dataset field settlement_instructions.settlement_value_date.",
        "source_field": "ontology_mappings.concept_mappings",
        "dataset_field": "settlement_instructions.settlement_value_date"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.SettlementInstruction.has_SettlementDelayDays.DERIVED_BY.settlement_delay_days.metric.settlement_delay_days",
      "source": "value.SettlementInstruction.has_SettlementDelayDays",
      "target": "metric.settlement_delay_days",
      "label": "settlement_delay_days",
      "properties": {
        "description": "SettlementInstruction.has_SettlementDelayDays is derived by semantic metric settlement_delay_days.",
        "source_field": "ontology_mappings.concept_mappings",
        "semantic_metric": "settlement_delay_days",
        "semantic_reference": "metric.settlement_delay_days",
        "expression": "DATEDIFF(day, settlement_instructions.expected_settlement_date, settlement_instructions.actual_settlement_date)",
        "metric_value_binding": true
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.value.SettlementInstruction.has_SettlementDelayDays.DERIVED_BY.settlement_instructions.actual_settlement_date.field.settlement_instructions.actual_settlement_date",
      "source": "value.SettlementInstruction.has_SettlementDelayDays",
      "target": "field.settlement_instructions.actual_settlement_date",
      "label": "settlement_instructions.actual_settlement_date",
      "properties": {
        "description": "Metric-backed field SettlementInstruction.has_SettlementDelayDays uses semantic dataset field settlement_instructions.actual_settlement_date.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "settlement_delay_days",
        "semantic_reference": "metric.settlement_delay_days",
        "expression": "DATEDIFF(day, settlement_instructions.expected_settlement_date, settlement_instructions.actual_settlement_date)",
        "dataset_field": "settlement_instructions.actual_settlement_date"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.value.SettlementInstruction.has_SettlementDelayDays.DERIVED_BY.settlement_instructions.expected_settlement_date.field.settlement_instructions.expected_settlement_date",
      "source": "value.SettlementInstruction.has_SettlementDelayDays",
      "target": "field.settlement_instructions.expected_settlement_date",
      "label": "settlement_instructions.expected_settlement_date",
      "properties": {
        "description": "Metric-backed field SettlementInstruction.has_SettlementDelayDays uses semantic dataset field settlement_instructions.expected_settlement_date.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "settlement_delay_days",
        "semantic_reference": "metric.settlement_delay_days",
        "expression": "DATEDIFF(day, settlement_instructions.expected_settlement_date, settlement_instructions.actual_settlement_date)",
        "dataset_field": "settlement_instructions.expected_settlement_date"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.requirement.item_a172b51eff.REQUIRES_CONCEPT.REQUIRES_CONCEPT.concept.Counterparty",
      "source": "requirement.item_a172b51eff",
      "target": "concept.Counterparty",
      "label": "REQUIRES_CONCEPT",
      "properties": {
        "description": "需求需要交易对手信息，用于识别结算风险责任主体并支持分组复核。",
        "source_field": "reporting_requirements.semantic_scope.concepts",
        "required_fields": [
          {
            "name": "交易对手标识",
            "semantic_reference": "Counterparty.has_CounterpartyIdentifier",
            "description": "需求需要交易对手标识，用于识别交易责任主体并支持风险分组。"
          }
        ]
      },
      "type": "REQUIRES_CONCEPT"
    },
    {
      "id": "edge.requirement.item_a172b51eff.REQUIRES_CONCEPT.REQUIRES_CONCEPT.concept.FxTrade",
      "source": "requirement.item_a172b51eff",
      "target": "concept.FxTrade",
      "label": "REQUIRES_CONCEPT",
      "properties": {
        "description": "需求需要外汇交易作为监测主对象，用于表达交易标识、交易对手、币种、金额和折算敞口口径。",
        "source_field": "reporting_requirements.semantic_scope.concepts",
        "required_fields": [
          {
            "name": "交易标识",
            "semantic_reference": "FxTrade.has_TransactionIdentifier",
            "description": "需求需要交易标识，用于唯一识别每笔外汇交易并支持报表行级对账。"
          },
          {
            "name": "折算后报送币种敞口金额",
            "semantic_reference": "FxTrade.has_ReportCurrencyExposureAmount",
            "description": "需求需要将外汇交易名义金额按汇率折算为报送币种金额，用于衡量结算风险敞口。"
          }
        ]
      },
      "type": "REQUIRES_CONCEPT"
    },
    {
      "id": "edge.requirement.item_a172b51eff.REQUIRES_CONCEPT.REQUIRES_CONCEPT.concept.NostroAccount",
      "source": "requirement.item_a172b51eff",
      "target": "concept.NostroAccount",
      "label": "REQUIRES_CONCEPT",
      "properties": {
        "description": "需求需要nostro账户信息，用于说明结算资金路径和账户可用性复核。",
        "source_field": "reporting_requirements.semantic_scope.concepts",
        "required_fields": []
      },
      "type": "REQUIRES_CONCEPT"
    },
    {
      "id": "edge.requirement.item_a172b51eff.REQUIRES_CONCEPT.REQUIRES_CONCEPT.concept.SettlementInstruction",
      "source": "requirement.item_a172b51eff",
      "target": "concept.SettlementInstruction",
      "label": "REQUIRES_CONCEPT",
      "properties": {
        "description": "需求需要结算指令作为运营执行对象，用于表达结算状态、结算金额、结算币种和结算延迟情况。",
        "source_field": "reporting_requirements.semantic_scope.concepts",
        "required_fields": [
          {
            "name": "结算指令标识",
            "semantic_reference": "SettlementInstruction.has_InstructionIdentifier",
            "description": "需求需要结算指令标识，用于定位执行结算的运营指令并追踪处理状态。"
          },
          {
            "name": "结算币种",
            "semantic_reference": "SettlementInstruction.has_SettlementCurrency",
            "description": "需求需要结算币种，用于说明现金实际交收的币种口径。"
          },
          {
            "name": "结算金额",
            "semantic_reference": "SettlementInstruction.has_SettlementAmount",
            "description": "需求需要结算金额，用于展示外汇结算现金金额并支持金额级对账。"
          },
          {
            "name": "结算状态",
            "semantic_reference": "SettlementInstruction.has_SettlementStatus",
            "description": "需求需要结算状态，用于识别未完成、失败或已完成的结算指令。"
          },
          {
            "name": "结算延迟天数",
            "semantic_reference": "SettlementInstruction.has_SettlementDelayDays",
            "description": "需求需要计算预计结算日和实际结算日之间的延迟天数，用于识别结算超时风险。"
          }
        ]
      },
      "type": "REQUIRES_CONCEPT"
    },
    {
      "id": "edge.requirement.item_a172b51eff.CONTAINS.CONTAINS.requirement_item..FxTrade.has_TransactionIdentifier",
      "source": "requirement.item_a172b51eff",
      "target": "requirement_item..FxTrade.has_TransactionIdentifier",
      "label": "CONTAINS",
      "properties": {
        "description": "需求需要交易标识，用于唯一识别每笔外汇交易并支持报表行级对账。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.requirement_item..FxTrade.has_TransactionIdentifier.REQUIRES_SEMANTIC_FIELD.REQUIRES_SEMANTIC_FIELD.value.FxTrade.has_TransactionIdentifier",
      "source": "requirement_item..FxTrade.has_TransactionIdentifier",
      "target": "value.FxTrade.has_TransactionIdentifier",
      "label": "REQUIRES_SEMANTIC_FIELD",
      "properties": {
        "description": "需求需要交易标识，用于唯一识别每笔外汇交易并支持报表行级对账。",
        "required_field": {
          "name": "交易标识",
          "description": "需求需要交易标识，用于唯一识别每笔外汇交易并支持报表行级对账。",
          "semantic_reference": "FxTrade.has_TransactionIdentifier",
          "required": true
        }
      },
      "type": "REQUIRES_SEMANTIC_FIELD"
    },
    {
      "id": "edge.requirement.item_a172b51eff.CONTAINS.CONTAINS.requirement_item..SettlementInstruction.has_InstructionIdentifier",
      "source": "requirement.item_a172b51eff",
      "target": "requirement_item..SettlementInstruction.has_InstructionIdentifier",
      "label": "CONTAINS",
      "properties": {
        "description": "需求需要结算指令标识，用于定位执行结算的运营指令并追踪处理状态。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.requirement_item..SettlementInstruction.has_InstructionIdentifier.REQUIRES_SEMANTIC_FIELD.REQUIRES_SEMANTIC_FIELD.value.SettlementInstruction.has_InstructionIdentifier",
      "source": "requirement_item..SettlementInstruction.has_InstructionIdentifier",
      "target": "value.SettlementInstruction.has_InstructionIdentifier",
      "label": "REQUIRES_SEMANTIC_FIELD",
      "properties": {
        "description": "需求需要结算指令标识，用于定位执行结算的运营指令并追踪处理状态。",
        "required_field": {
          "name": "结算指令标识",
          "description": "需求需要结算指令标识，用于定位执行结算的运营指令并追踪处理状态。",
          "semantic_reference": "SettlementInstruction.has_InstructionIdentifier",
          "required": true
        }
      },
      "type": "REQUIRES_SEMANTIC_FIELD"
    },
    {
      "id": "edge.requirement.item_a172b51eff.CONTAINS.CONTAINS.requirement_item..Counterparty.has_CounterpartyIdentifier",
      "source": "requirement.item_a172b51eff",
      "target": "requirement_item..Counterparty.has_CounterpartyIdentifier",
      "label": "CONTAINS",
      "properties": {
        "description": "需求需要交易对手标识，用于识别交易责任主体并支持风险分组。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.requirement_item..Counterparty.has_CounterpartyIdentifier.REQUIRES_SEMANTIC_FIELD.REQUIRES_SEMANTIC_FIELD.value.Counterparty.has_CounterpartyIdentifier",
      "source": "requirement_item..Counterparty.has_CounterpartyIdentifier",
      "target": "value.Counterparty.has_CounterpartyIdentifier",
      "label": "REQUIRES_SEMANTIC_FIELD",
      "properties": {
        "description": "需求需要交易对手标识，用于识别交易责任主体并支持风险分组。",
        "required_field": {
          "name": "交易对手标识",
          "description": "需求需要交易对手标识，用于识别交易责任主体并支持风险分组。",
          "semantic_reference": "Counterparty.has_CounterpartyIdentifier",
          "required": true
        }
      },
      "type": "REQUIRES_SEMANTIC_FIELD"
    },
    {
      "id": "edge.requirement.item_a172b51eff.CONTAINS.CONTAINS.requirement_item..SettlementInstruction.has_SettlementCurrency",
      "source": "requirement.item_a172b51eff",
      "target": "requirement_item..SettlementInstruction.has_SettlementCurrency",
      "label": "CONTAINS",
      "properties": {
        "description": "需求需要结算币种，用于说明现金实际交收的币种口径。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.requirement_item..SettlementInstruction.has_SettlementCurrency.REQUIRES_SEMANTIC_FIELD.REQUIRES_SEMANTIC_FIELD.value.SettlementInstruction.has_SettlementCurrency",
      "source": "requirement_item..SettlementInstruction.has_SettlementCurrency",
      "target": "value.SettlementInstruction.has_SettlementCurrency",
      "label": "REQUIRES_SEMANTIC_FIELD",
      "properties": {
        "description": "需求需要结算币种，用于说明现金实际交收的币种口径。",
        "required_field": {
          "name": "结算币种",
          "description": "需求需要结算币种，用于说明现金实际交收的币种口径。",
          "semantic_reference": "SettlementInstruction.has_SettlementCurrency",
          "required": true
        }
      },
      "type": "REQUIRES_SEMANTIC_FIELD"
    },
    {
      "id": "edge.requirement.item_a172b51eff.CONTAINS.CONTAINS.requirement_item..SettlementInstruction.has_SettlementAmount",
      "source": "requirement.item_a172b51eff",
      "target": "requirement_item..SettlementInstruction.has_SettlementAmount",
      "label": "CONTAINS",
      "properties": {
        "description": "需求需要结算金额，用于展示外汇结算现金金额并支持金额级对账。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.requirement_item..SettlementInstruction.has_SettlementAmount.REQUIRES_SEMANTIC_FIELD.REQUIRES_SEMANTIC_FIELD.value.SettlementInstruction.has_SettlementAmount",
      "source": "requirement_item..SettlementInstruction.has_SettlementAmount",
      "target": "value.SettlementInstruction.has_SettlementAmount",
      "label": "REQUIRES_SEMANTIC_FIELD",
      "properties": {
        "description": "需求需要结算金额，用于展示外汇结算现金金额并支持金额级对账。",
        "required_field": {
          "name": "结算金额",
          "description": "需求需要结算金额，用于展示外汇结算现金金额并支持金额级对账。",
          "semantic_reference": "SettlementInstruction.has_SettlementAmount",
          "required": true
        }
      },
      "type": "REQUIRES_SEMANTIC_FIELD"
    },
    {
      "id": "edge.requirement.item_a172b51eff.CONTAINS.CONTAINS.requirement_item..SettlementInstruction.has_SettlementStatus",
      "source": "requirement.item_a172b51eff",
      "target": "requirement_item..SettlementInstruction.has_SettlementStatus",
      "label": "CONTAINS",
      "properties": {
        "description": "需求需要结算状态，用于识别未完成、失败或已完成的结算指令。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.requirement_item..SettlementInstruction.has_SettlementStatus.REQUIRES_SEMANTIC_FIELD.REQUIRES_SEMANTIC_FIELD.value.SettlementInstruction.has_SettlementStatus",
      "source": "requirement_item..SettlementInstruction.has_SettlementStatus",
      "target": "value.SettlementInstruction.has_SettlementStatus",
      "label": "REQUIRES_SEMANTIC_FIELD",
      "properties": {
        "description": "需求需要结算状态，用于识别未完成、失败或已完成的结算指令。",
        "required_field": {
          "name": "结算状态",
          "description": "需求需要结算状态，用于识别未完成、失败或已完成的结算指令。",
          "semantic_reference": "SettlementInstruction.has_SettlementStatus",
          "required": true
        }
      },
      "type": "REQUIRES_SEMANTIC_FIELD"
    },
    {
      "id": "edge.requirement.item_a172b51eff.CONTAINS.CONTAINS.requirement_item..FxTrade.has_ReportCurrencyExposureAmount",
      "source": "requirement.item_a172b51eff",
      "target": "requirement_item..FxTrade.has_ReportCurrencyExposureAmount",
      "label": "CONTAINS",
      "properties": {
        "description": "需求需要将外汇交易名义金额按汇率折算为报送币种金额，用于衡量结算风险敞口。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.requirement_item..FxTrade.has_ReportCurrencyExposureAmount.DERIVED_FROM.DERIVED_FROM.value.FxTrade.has_NotionalAmount",
      "source": "requirement_item..FxTrade.has_ReportCurrencyExposureAmount",
      "target": "value.FxTrade.has_NotionalAmount",
      "label": "DERIVED_FROM",
      "properties": {
        "description": "需求需要将外汇交易名义金额按汇率折算为报送币种金额，用于衡量结算风险敞口。"
      },
      "type": "DERIVED_FROM"
    },
    {
      "id": "edge.requirement_item..FxTrade.has_ReportCurrencyExposureAmount.DERIVED_FROM.DERIVED_FROM.value.FxRate.has_RateValue",
      "source": "requirement_item..FxTrade.has_ReportCurrencyExposureAmount",
      "target": "value.FxRate.has_RateValue",
      "label": "DERIVED_FROM",
      "properties": {
        "description": "需求需要将外汇交易名义金额按汇率折算为报送币种金额，用于衡量结算风险敞口。"
      },
      "type": "DERIVED_FROM"
    },
    {
      "id": "edge.requirement.item_a172b51eff.CONTAINS.CONTAINS.requirement_item..SettlementInstruction.has_SettlementDelayDays",
      "source": "requirement.item_a172b51eff",
      "target": "requirement_item..SettlementInstruction.has_SettlementDelayDays",
      "label": "CONTAINS",
      "properties": {
        "description": "需求需要计算预计结算日和实际结算日之间的延迟天数，用于识别结算超时风险。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.requirement_item..SettlementInstruction.has_SettlementDelayDays.DERIVED_FROM.DERIVED_FROM.value.SettlementInstruction.has_ExpectedSettlementDate",
      "source": "requirement_item..SettlementInstruction.has_SettlementDelayDays",
      "target": "value.SettlementInstruction.has_ExpectedSettlementDate",
      "label": "DERIVED_FROM",
      "properties": {
        "description": "需求需要计算预计结算日和实际结算日之间的延迟天数，用于识别结算超时风险。"
      },
      "type": "DERIVED_FROM"
    },
    {
      "id": "edge.requirement_item..SettlementInstruction.has_SettlementDelayDays.DERIVED_FROM.DERIVED_FROM.value.SettlementInstruction.has_ActualSettlementDate",
      "source": "requirement_item..SettlementInstruction.has_SettlementDelayDays",
      "target": "value.SettlementInstruction.has_ActualSettlementDate",
      "label": "DERIVED_FROM",
      "properties": {
        "description": "需求需要计算预计结算日和实际结算日之间的延迟天数，用于识别结算超时风险。"
      },
      "type": "DERIVED_FROM"
    },
    {
      "id": "edge.report_impl.item_e781d082f3.IMPLEMENTS.IMPLEMENTS.requirement.item_a172b51eff",
      "source": "report_impl.item_e781d082f3",
      "target": "requirement.item_a172b51eff",
      "label": "IMPLEMENTS",
      "properties": {
        "description": "说明每日外汇结算监测明细字段如何从外汇交易、结算指令、交易对手、nostro账户和汇率数据中取数、计算并满足需求口径；该逻辑不创建或拥有物理表。"
      },
      "type": "IMPLEMENTS"
    },
    {
      "id": "edge.report_impl.item_e781d082f3.CONTAINS.CONTAINS.implementation_field.fx_settlement_monitoring_lines.trade_id",
      "source": "report_impl.item_e781d082f3",
      "target": "implementation_field.fx_settlement_monitoring_lines.trade_id",
      "label": "CONTAINS",
      "properties": {
        "description": "数据逻辑说明监测明细字段 trade_id 如何承载交易标识需求，并从外汇交易数据取得交易主键。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.trade_id.MAPS_TO_FIELD.MAPS_TO_FIELD.field.fx_settlement_monitoring_lines.trade_id",
      "source": "implementation_field.fx_settlement_monitoring_lines.trade_id",
      "target": "field.fx_settlement_monitoring_lines.trade_id",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 trade_id 如何承载交易标识需求，并从外汇交易数据取得交易主键。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.trade_id.SOURCE_FIELD.SOURCE_FIELD.field.fx_trades.trade_id",
      "source": "implementation_field.fx_settlement_monitoring_lines.trade_id",
      "target": "field.fx_trades.trade_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 trade_id 如何承载交易标识需求，并从外汇交易数据取得交易主键。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.trade_id.IMPLEMENTS_FIELD.IMPLEMENTS_FIELD.requirement_item..FxTrade.has_TransactionIdentifier",
      "source": "implementation_field.fx_settlement_monitoring_lines.trade_id",
      "target": "requirement_item..FxTrade.has_TransactionIdentifier",
      "label": "IMPLEMENTS_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 trade_id 如何承载交易标识需求，并从外汇交易数据取得交易主键。",
        "requirement": "外汇结算监测报送需求",
        "requirement_field": "交易标识",
        "expression": "fx_trades.trade_id"
      },
      "type": "IMPLEMENTS_FIELD"
    },
    {
      "id": "edge.report_impl.item_e781d082f3.CONTAINS.CONTAINS.implementation_field.fx_settlement_monitoring_lines.settlement_instruction_id",
      "source": "report_impl.item_e781d082f3",
      "target": "implementation_field.fx_settlement_monitoring_lines.settlement_instruction_id",
      "label": "CONTAINS",
      "properties": {
        "description": "数据逻辑说明监测明细字段 settlement_instruction_id 如何承载结算指令标识需求，并从结算指令数据取得运营指令主键。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.settlement_instruction_id.MAPS_TO_FIELD.MAPS_TO_FIELD.field.fx_settlement_monitoring_lines.settlement_instruction_id",
      "source": "implementation_field.fx_settlement_monitoring_lines.settlement_instruction_id",
      "target": "field.fx_settlement_monitoring_lines.settlement_instruction_id",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 settlement_instruction_id 如何承载结算指令标识需求，并从结算指令数据取得运营指令主键。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.settlement_instruction_id.SOURCE_FIELD.SOURCE_FIELD.field.settlement_instructions.settlement_instruction_id",
      "source": "implementation_field.fx_settlement_monitoring_lines.settlement_instruction_id",
      "target": "field.settlement_instructions.settlement_instruction_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 settlement_instruction_id 如何承载结算指令标识需求，并从结算指令数据取得运营指令主键。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.settlement_instruction_id.IMPLEMENTS_FIELD.IMPLEMENTS_FIELD.requirement_item..SettlementInstruction.has_InstructionIdentifier",
      "source": "implementation_field.fx_settlement_monitoring_lines.settlement_instruction_id",
      "target": "requirement_item..SettlementInstruction.has_InstructionIdentifier",
      "label": "IMPLEMENTS_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 settlement_instruction_id 如何承载结算指令标识需求，并从结算指令数据取得运营指令主键。",
        "requirement": "外汇结算监测报送需求",
        "requirement_field": "结算指令标识",
        "expression": "settlement_instructions.settlement_instruction_id"
      },
      "type": "IMPLEMENTS_FIELD"
    },
    {
      "id": "edge.report_impl.item_e781d082f3.CONTAINS.CONTAINS.implementation_field.fx_settlement_monitoring_lines.counterparty_id",
      "source": "report_impl.item_e781d082f3",
      "target": "implementation_field.fx_settlement_monitoring_lines.counterparty_id",
      "label": "CONTAINS",
      "properties": {
        "description": "数据逻辑说明监测明细字段 counterparty_id 如何承载交易对手标识需求，并使用交易上的交易对手引用。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.counterparty_id.MAPS_TO_FIELD.MAPS_TO_FIELD.field.fx_settlement_monitoring_lines.counterparty_id",
      "source": "implementation_field.fx_settlement_monitoring_lines.counterparty_id",
      "target": "field.fx_settlement_monitoring_lines.counterparty_id",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 counterparty_id 如何承载交易对手标识需求，并使用交易上的交易对手引用。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.counterparty_id.SOURCE_FIELD.SOURCE_FIELD.field.fx_trades.counterparty_id",
      "source": "implementation_field.fx_settlement_monitoring_lines.counterparty_id",
      "target": "field.fx_trades.counterparty_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 counterparty_id 如何承载交易对手标识需求，并使用交易上的交易对手引用。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.counterparty_id.IMPLEMENTS_FIELD.IMPLEMENTS_FIELD.requirement_item..Counterparty.has_CounterpartyIdentifier",
      "source": "implementation_field.fx_settlement_monitoring_lines.counterparty_id",
      "target": "requirement_item..Counterparty.has_CounterpartyIdentifier",
      "label": "IMPLEMENTS_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 counterparty_id 如何承载交易对手标识需求，并使用交易上的交易对手引用。",
        "requirement": "外汇结算监测报送需求",
        "requirement_field": "交易对手标识",
        "expression": "fx_trades.counterparty_id"
      },
      "type": "IMPLEMENTS_FIELD"
    },
    {
      "id": "edge.report_impl.item_e781d082f3.CONTAINS.CONTAINS.implementation_field.fx_settlement_monitoring_lines.settlement_currency",
      "source": "report_impl.item_e781d082f3",
      "target": "implementation_field.fx_settlement_monitoring_lines.settlement_currency",
      "label": "CONTAINS",
      "properties": {
        "description": "数据逻辑说明监测明细字段 settlement_currency 如何承载结算币种需求，并从结算指令取得实际交收币种。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.settlement_currency.MAPS_TO_FIELD.MAPS_TO_FIELD.field.fx_settlement_monitoring_lines.settlement_currency",
      "source": "implementation_field.fx_settlement_monitoring_lines.settlement_currency",
      "target": "field.fx_settlement_monitoring_lines.settlement_currency",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 settlement_currency 如何承载结算币种需求，并从结算指令取得实际交收币种。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.settlement_currency.SOURCE_FIELD.SOURCE_FIELD.field.settlement_instructions.settlement_currency",
      "source": "implementation_field.fx_settlement_monitoring_lines.settlement_currency",
      "target": "field.settlement_instructions.settlement_currency",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 settlement_currency 如何承载结算币种需求，并从结算指令取得实际交收币种。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.settlement_currency.IMPLEMENTS_FIELD.IMPLEMENTS_FIELD.requirement_item..SettlementInstruction.has_SettlementCurrency",
      "source": "implementation_field.fx_settlement_monitoring_lines.settlement_currency",
      "target": "requirement_item..SettlementInstruction.has_SettlementCurrency",
      "label": "IMPLEMENTS_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 settlement_currency 如何承载结算币种需求，并从结算指令取得实际交收币种。",
        "requirement": "外汇结算监测报送需求",
        "requirement_field": "结算币种",
        "expression": "settlement_instructions.settlement_currency"
      },
      "type": "IMPLEMENTS_FIELD"
    },
    {
      "id": "edge.report_impl.item_e781d082f3.CONTAINS.CONTAINS.implementation_field.fx_settlement_monitoring_lines.settlement_amount",
      "source": "report_impl.item_e781d082f3",
      "target": "implementation_field.fx_settlement_monitoring_lines.settlement_amount",
      "label": "CONTAINS",
      "properties": {
        "description": "数据逻辑说明监测明细字段 settlement_amount 如何承载结算金额需求，并从结算指令取得现金交收金额。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.settlement_amount.MAPS_TO_FIELD.MAPS_TO_FIELD.field.fx_settlement_monitoring_lines.settlement_amount",
      "source": "implementation_field.fx_settlement_monitoring_lines.settlement_amount",
      "target": "field.fx_settlement_monitoring_lines.settlement_amount",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 settlement_amount 如何承载结算金额需求，并从结算指令取得现金交收金额。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.settlement_amount.SOURCE_FIELD.SOURCE_FIELD.field.settlement_instructions.settlement_amount",
      "source": "implementation_field.fx_settlement_monitoring_lines.settlement_amount",
      "target": "field.settlement_instructions.settlement_amount",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 settlement_amount 如何承载结算金额需求，并从结算指令取得现金交收金额。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.settlement_amount.IMPLEMENTS_FIELD.IMPLEMENTS_FIELD.requirement_item..SettlementInstruction.has_SettlementAmount",
      "source": "implementation_field.fx_settlement_monitoring_lines.settlement_amount",
      "target": "requirement_item..SettlementInstruction.has_SettlementAmount",
      "label": "IMPLEMENTS_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 settlement_amount 如何承载结算金额需求，并从结算指令取得现金交收金额。",
        "requirement": "外汇结算监测报送需求",
        "requirement_field": "结算金额",
        "expression": "settlement_instructions.settlement_amount"
      },
      "type": "IMPLEMENTS_FIELD"
    },
    {
      "id": "edge.report_impl.item_e781d082f3.CONTAINS.CONTAINS.implementation_field.fx_settlement_monitoring_lines.settlement_status",
      "source": "report_impl.item_e781d082f3",
      "target": "implementation_field.fx_settlement_monitoring_lines.settlement_status",
      "label": "CONTAINS",
      "properties": {
        "description": "数据逻辑说明监测明细字段 settlement_status 如何承载结算状态需求，并从结算指令取得运营处理状态。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.settlement_status.MAPS_TO_FIELD.MAPS_TO_FIELD.field.fx_settlement_monitoring_lines.settlement_status",
      "source": "implementation_field.fx_settlement_monitoring_lines.settlement_status",
      "target": "field.fx_settlement_monitoring_lines.settlement_status",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 settlement_status 如何承载结算状态需求，并从结算指令取得运营处理状态。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.settlement_status.SOURCE_FIELD.SOURCE_FIELD.field.settlement_instructions.settlement_status",
      "source": "implementation_field.fx_settlement_monitoring_lines.settlement_status",
      "target": "field.settlement_instructions.settlement_status",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 settlement_status 如何承载结算状态需求，并从结算指令取得运营处理状态。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.settlement_status.IMPLEMENTS_FIELD.IMPLEMENTS_FIELD.requirement_item..SettlementInstruction.has_SettlementStatus",
      "source": "implementation_field.fx_settlement_monitoring_lines.settlement_status",
      "target": "requirement_item..SettlementInstruction.has_SettlementStatus",
      "label": "IMPLEMENTS_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 settlement_status 如何承载结算状态需求，并从结算指令取得运营处理状态。",
        "requirement": "外汇结算监测报送需求",
        "requirement_field": "结算状态",
        "expression": "settlement_instructions.settlement_status"
      },
      "type": "IMPLEMENTS_FIELD"
    },
    {
      "id": "edge.report_impl.item_e781d082f3.CONTAINS.CONTAINS.implementation_field.fx_settlement_monitoring_lines.exposure_amount_report_currency",
      "source": "report_impl.item_e781d082f3",
      "target": "implementation_field.fx_settlement_monitoring_lines.exposure_amount_report_currency",
      "label": "CONTAINS",
      "properties": {
        "description": "数据逻辑说明监测明细字段 exposure_amount_report_currency 如何按交易名义金额和汇率计算报送币种敞口金额。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.exposure_amount_report_currency.MAPS_TO_FIELD.MAPS_TO_FIELD.field.fx_settlement_monitoring_lines.exposure_amount_report_currency",
      "source": "implementation_field.fx_settlement_monitoring_lines.exposure_amount_report_currency",
      "target": "field.fx_settlement_monitoring_lines.exposure_amount_report_currency",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 exposure_amount_report_currency 如何按交易名义金额和汇率计算报送币种敞口金额。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.exposure_amount_report_currency.SOURCE_FIELD.SOURCE_FIELD.field.fx_rates.rate_value",
      "source": "implementation_field.fx_settlement_monitoring_lines.exposure_amount_report_currency",
      "target": "field.fx_rates.rate_value",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 exposure_amount_report_currency 如何按交易名义金额和汇率计算报送币种敞口金额。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.exposure_amount_report_currency.SOURCE_FIELD.SOURCE_FIELD.field.fx_trades.notional_amount",
      "source": "implementation_field.fx_settlement_monitoring_lines.exposure_amount_report_currency",
      "target": "field.fx_trades.notional_amount",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 exposure_amount_report_currency 如何按交易名义金额和汇率计算报送币种敞口金额。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.exposure_amount_report_currency.IMPLEMENTS_METRIC.IMPLEMENTS_METRIC.metric.report_currency_exposure_amount",
      "source": "implementation_field.fx_settlement_monitoring_lines.exposure_amount_report_currency",
      "target": "metric.report_currency_exposure_amount",
      "label": "IMPLEMENTS_METRIC",
      "properties": {
        "description": "数据逻辑说明监测明细字段 exposure_amount_report_currency 如何按交易名义金额和汇率计算报送币种敞口金额。",
        "requirement": "外汇结算监测报送需求",
        "requirement_field": "折算后报送币种敞口金额",
        "semantic_metric": "report_currency_exposure_amount",
        "semantic_reference": "metric.report_currency_exposure_amount",
        "expression": "fx_trades.notional_amount * fx_rates.rate_value"
      },
      "type": "IMPLEMENTS_METRIC"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.exposure_amount_report_currency.IMPLEMENTS_FIELD.IMPLEMENTS_FIELD.requirement_item..FxTrade.has_ReportCurrencyExposureAmount",
      "source": "implementation_field.fx_settlement_monitoring_lines.exposure_amount_report_currency",
      "target": "requirement_item..FxTrade.has_ReportCurrencyExposureAmount",
      "label": "IMPLEMENTS_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 exposure_amount_report_currency 如何按交易名义金额和汇率计算报送币种敞口金额。",
        "requirement": "外汇结算监测报送需求",
        "requirement_field": "折算后报送币种敞口金额",
        "expression": "fx_trades.notional_amount * fx_rates.rate_value"
      },
      "type": "IMPLEMENTS_FIELD"
    },
    {
      "id": "edge.report_impl.item_e781d082f3.CONTAINS.CONTAINS.implementation_field.fx_settlement_monitoring_lines.settlement_delay_days",
      "source": "report_impl.item_e781d082f3",
      "target": "implementation_field.fx_settlement_monitoring_lines.settlement_delay_days",
      "label": "CONTAINS",
      "properties": {
        "description": "数据逻辑说明监测明细字段 settlement_delay_days 如何通过预计结算日和实际结算日计算延迟天数。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.settlement_delay_days.MAPS_TO_FIELD.MAPS_TO_FIELD.field.fx_settlement_monitoring_lines.settlement_delay_days",
      "source": "implementation_field.fx_settlement_monitoring_lines.settlement_delay_days",
      "target": "field.fx_settlement_monitoring_lines.settlement_delay_days",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 settlement_delay_days 如何通过预计结算日和实际结算日计算延迟天数。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.settlement_delay_days.SOURCE_FIELD.SOURCE_FIELD.field.settlement_instructions.actual_settlement_date",
      "source": "implementation_field.fx_settlement_monitoring_lines.settlement_delay_days",
      "target": "field.settlement_instructions.actual_settlement_date",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 settlement_delay_days 如何通过预计结算日和实际结算日计算延迟天数。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.settlement_delay_days.SOURCE_FIELD.SOURCE_FIELD.field.settlement_instructions.expected_settlement_date",
      "source": "implementation_field.fx_settlement_monitoring_lines.settlement_delay_days",
      "target": "field.settlement_instructions.expected_settlement_date",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 settlement_delay_days 如何通过预计结算日和实际结算日计算延迟天数。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.settlement_delay_days.IMPLEMENTS_METRIC.IMPLEMENTS_METRIC.metric.settlement_delay_days",
      "source": "implementation_field.fx_settlement_monitoring_lines.settlement_delay_days",
      "target": "metric.settlement_delay_days",
      "label": "IMPLEMENTS_METRIC",
      "properties": {
        "description": "数据逻辑说明监测明细字段 settlement_delay_days 如何通过预计结算日和实际结算日计算延迟天数。",
        "requirement": "外汇结算监测报送需求",
        "requirement_field": "结算延迟天数",
        "semantic_metric": "settlement_delay_days",
        "semantic_reference": "metric.settlement_delay_days",
        "expression": "DATEDIFF(day, settlement_instructions.expected_settlement_date, settlement_instructions.actual_settlement_date)"
      },
      "type": "IMPLEMENTS_METRIC"
    },
    {
      "id": "edge.implementation_field.fx_settlement_monitoring_lines.settlement_delay_days.IMPLEMENTS_FIELD.IMPLEMENTS_FIELD.requirement_item..SettlementInstruction.has_SettlementDelayDays",
      "source": "implementation_field.fx_settlement_monitoring_lines.settlement_delay_days",
      "target": "requirement_item..SettlementInstruction.has_SettlementDelayDays",
      "label": "IMPLEMENTS_FIELD",
      "properties": {
        "description": "数据逻辑说明监测明细字段 settlement_delay_days 如何通过预计结算日和实际结算日计算延迟天数。",
        "requirement": "外汇结算监测报送需求",
        "requirement_field": "结算延迟天数",
        "expression": "DATEDIFF(day, settlement_instructions.expected_settlement_date, settlement_instructions.actual_settlement_date)"
      },
      "type": "IMPLEMENTS_FIELD"
    },
    {
      "id": "edge.report_impl.item_e781d082f3.IMPLEMENTS_METRIC.IMPLEMENTS_METRIC.metric.report_currency_exposure_amount",
      "source": "report_impl.item_e781d082f3",
      "target": "metric.report_currency_exposure_amount",
      "label": "IMPLEMENTS_METRIC",
      "properties": {
        "description": "数据逻辑说明监测明细字段 exposure_amount_report_currency 如何按交易名义金额和汇率计算报送币种敞口金额。",
        "semantic_metric": "report_currency_exposure_amount",
        "semantic_reference": "metric.report_currency_exposure_amount",
        "requirement": "外汇结算监测报送需求"
      },
      "type": "IMPLEMENTS_METRIC"
    },
    {
      "id": "edge.report_impl.item_e781d082f3.IMPLEMENTS_METRIC.IMPLEMENTS_METRIC.metric.settlement_delay_days",
      "source": "report_impl.item_e781d082f3",
      "target": "metric.settlement_delay_days",
      "label": "IMPLEMENTS_METRIC",
      "properties": {
        "description": "数据逻辑说明监测明细字段 settlement_delay_days 如何通过预计结算日和实际结算日计算延迟天数。",
        "semantic_metric": "settlement_delay_days",
        "semantic_reference": "metric.settlement_delay_days",
        "requirement": "外汇结算监测报送需求"
      },
      "type": "IMPLEMENTS_METRIC"
    },
    {
      "id": "edge.report_impl.item_e781d082f3.SOURCE_TABLE.SOURCE_TABLE.dataset.fx_rates",
      "source": "report_impl.item_e781d082f3",
      "target": "dataset.fx_rates",
      "label": "SOURCE_TABLE",
      "properties": {
        "description": "数据逻辑说明监测明细字段 exposure_amount_report_currency 如何按交易名义金额和汇率计算报送币种敞口金额。",
        "source_fields": [
          "fx_rates.rate_value"
        ]
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.report_impl.item_e781d082f3.SOURCE_TABLE.SOURCE_TABLE.dataset.fx_trades",
      "source": "report_impl.item_e781d082f3",
      "target": "dataset.fx_trades",
      "label": "SOURCE_TABLE",
      "properties": {
        "description": "数据逻辑说明监测明细字段 trade_id 如何承载交易标识需求，并从外汇交易数据取得交易主键。；数据逻辑说明监测明细字段 counterparty_id 如何承载交易对手标识需求，并使用交易上的交易对手引用。；数据逻辑说明监测明细字段 exposure_amount_report_currency 如何按交易名义金额和汇率计算报送币种敞口金额。",
        "source_fields": [
          "fx_trades.counterparty_id",
          "fx_trades.notional_amount",
          "fx_trades.trade_id"
        ]
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.report_impl.item_e781d082f3.SOURCE_TABLE.SOURCE_TABLE.dataset.settlement_instructions",
      "source": "report_impl.item_e781d082f3",
      "target": "dataset.settlement_instructions",
      "label": "SOURCE_TABLE",
      "properties": {
        "description": "数据逻辑说明监测明细字段 settlement_instruction_id 如何承载结算指令标识需求，并从结算指令数据取得运营指令主键。；数据逻辑说明监测明细字段 settlement_currency 如何承载结算币种需求，并从结算指令取得实际交收币种。；数据逻辑说明监测明细字段 settlement_amount 如何承载结算金额需求，并从结算指令取得现金交收金额。；数据逻辑说明监测明细字段 settlement_status 如何承载结算状态需求，并从结算指令取得运营处理状态。；数据逻辑说明监测明细字段 settlement_delay_days 如何通过预计结算日和实际结算日计算延迟天数。",
        "source_fields": [
          "settlement_instructions.actual_settlement_date",
          "settlement_instructions.expected_settlement_date",
          "settlement_instructions.settlement_amount",
          "settlement_instructions.settlement_currency",
          "settlement_instructions.settlement_instruction_id",
          "settlement_instructions.settlement_status"
        ]
      },
      "type": "SOURCE_TABLE"
    }
  ]
};
window.OSI_GRAPH_DATA = window.GRAPH_DATA;
