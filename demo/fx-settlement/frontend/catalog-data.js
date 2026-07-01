window.CATALOG_DATA = {
  "concept.AccountData": {
    "id": "concept.AccountData",
    "type": "base_entity_concept",
    "name": "AccountData",
    "description": "Base concept for account-like records with common account identifiers.",
    "concept": {
      "name": "AccountData",
      "type": "EntityType",
      "description": "Base concept for account-like records with common account identifiers.",
      "extends": [
        "Any"
      ],
      "derived_by": [],
      "identify_by": [
        "has_AccountIdentifier"
      ],
      "requires": []
    },
    "relationships": [
      {
        "name": "has_AccountIdentifier",
        "description": "Identifier common to account-like records.",
        "roles": [
          {
            "concept": "AccountIdentifier"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{AccountData} has account identifier {AccountIdentifier}"
        ],
        "multiplicity": "OneToOne"
      }
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ],
    "definition_warnings": [],
    "mappings": []
  },
  "value.AccountData.has_AccountIdentifier": {
    "id": "value.AccountData.has_AccountIdentifier",
    "type": "value_type_property",
    "name": "AccountIdentifier",
    "description": "Identifier common to account-like records.",
    "parent": "concept.AccountData",
    "data_type": "AccountIdentifier",
    "value_concept": "AccountIdentifier",
    "field_name": "has_AccountIdentifier",
    "relationship_name": "has_AccountIdentifier",
    "relationship": {
      "name": "has_AccountIdentifier",
      "description": "Identifier common to account-like records.",
      "roles": [
        {
          "concept": "AccountIdentifier"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{AccountData} has account identifier {AccountIdentifier}"
      ],
      "multiplicity": "OneToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "concept.InstructionData": {
    "id": "concept.InstructionData",
    "type": "base_entity_concept",
    "name": "InstructionData",
    "description": "Base concept for operational instruction records with stable instruction identifiers.",
    "concept": {
      "name": "InstructionData",
      "type": "EntityType",
      "description": "Base concept for operational instruction records with stable instruction identifiers.",
      "extends": [
        "Any"
      ],
      "derived_by": [],
      "identify_by": [
        "has_InstructionIdentifier"
      ],
      "requires": []
    },
    "relationships": [
      {
        "name": "has_InstructionIdentifier",
        "description": "Identifier common to operational instruction records.",
        "roles": [
          {
            "concept": "InstructionIdentifier"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{InstructionData} has instruction identifier {InstructionIdentifier}"
        ],
        "multiplicity": "OneToOne"
      }
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ],
    "definition_warnings": [],
    "mappings": []
  },
  "value.InstructionData.has_InstructionIdentifier": {
    "id": "value.InstructionData.has_InstructionIdentifier",
    "type": "value_type_property",
    "name": "InstructionIdentifier",
    "description": "Identifier common to operational instruction records.",
    "parent": "concept.InstructionData",
    "data_type": "InstructionIdentifier",
    "value_concept": "InstructionIdentifier",
    "field_name": "has_InstructionIdentifier",
    "relationship_name": "has_InstructionIdentifier",
    "relationship": {
      "name": "has_InstructionIdentifier",
      "description": "Identifier common to operational instruction records.",
      "roles": [
        {
          "concept": "InstructionIdentifier"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{InstructionData} has instruction identifier {InstructionIdentifier}"
      ],
      "multiplicity": "OneToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "concept.PartyData": {
    "id": "concept.PartyData",
    "type": "base_entity_concept",
    "name": "PartyData",
    "description": "Base concept for counterparty-like records with stable party identifiers.",
    "concept": {
      "name": "PartyData",
      "type": "EntityType",
      "description": "Base concept for counterparty-like records with stable party identifiers.",
      "extends": [
        "Any"
      ],
      "derived_by": [],
      "identify_by": [
        "has_CounterpartyIdentifier"
      ],
      "requires": []
    },
    "relationships": [
      {
        "name": "has_CounterpartyIdentifier",
        "description": "Identifier common to counterparty or party records.",
        "roles": [
          {
            "concept": "CounterpartyIdentifier"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{PartyData} has counterparty identifier {CounterpartyIdentifier}"
        ],
        "multiplicity": "OneToOne"
      }
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ],
    "definition_warnings": [],
    "mappings": []
  },
  "value.PartyData.has_CounterpartyIdentifier": {
    "id": "value.PartyData.has_CounterpartyIdentifier",
    "type": "value_type_property",
    "name": "CounterpartyIdentifier",
    "description": "Identifier common to counterparty or party records.",
    "parent": "concept.PartyData",
    "data_type": "CounterpartyIdentifier",
    "value_concept": "CounterpartyIdentifier",
    "field_name": "has_CounterpartyIdentifier",
    "relationship_name": "has_CounterpartyIdentifier",
    "relationship": {
      "name": "has_CounterpartyIdentifier",
      "description": "Identifier common to counterparty or party records.",
      "roles": [
        {
          "concept": "CounterpartyIdentifier"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{PartyData} has counterparty identifier {CounterpartyIdentifier}"
      ],
      "multiplicity": "OneToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "concept.ReferenceData": {
    "id": "concept.ReferenceData",
    "type": "base_entity_concept",
    "name": "ReferenceData",
    "description": "Base concept for reference-data records with stable reference identifiers.",
    "concept": {
      "name": "ReferenceData",
      "type": "EntityType",
      "description": "Base concept for reference-data records with stable reference identifiers.",
      "extends": [
        "Any"
      ],
      "derived_by": [],
      "identify_by": [
        "has_ReferenceIdentifier"
      ],
      "requires": []
    },
    "relationships": [
      {
        "name": "has_ReferenceIdentifier",
        "description": "Identifier common to reference-data records.",
        "roles": [
          {
            "concept": "ReferenceIdentifier"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{ReferenceData} has reference identifier {ReferenceIdentifier}"
        ],
        "multiplicity": "OneToOne"
      }
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ],
    "definition_warnings": [],
    "mappings": []
  },
  "value.ReferenceData.has_ReferenceIdentifier": {
    "id": "value.ReferenceData.has_ReferenceIdentifier",
    "type": "value_type_property",
    "name": "ReferenceIdentifier",
    "description": "Identifier common to reference-data records.",
    "parent": "concept.ReferenceData",
    "data_type": "ReferenceIdentifier",
    "value_concept": "ReferenceIdentifier",
    "field_name": "has_ReferenceIdentifier",
    "relationship_name": "has_ReferenceIdentifier",
    "relationship": {
      "name": "has_ReferenceIdentifier",
      "description": "Identifier common to reference-data records.",
      "roles": [
        {
          "concept": "ReferenceIdentifier"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{ReferenceData} has reference identifier {ReferenceIdentifier}"
      ],
      "multiplicity": "OneToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "concept.TransactionData": {
    "id": "concept.TransactionData",
    "type": "base_entity_concept",
    "name": "TransactionData",
    "description": "Base concept for transaction-like records with stable transaction identifiers and booking dates.",
    "concept": {
      "name": "TransactionData",
      "type": "EntityType",
      "description": "Base concept for transaction-like records with stable transaction identifiers and booking dates.",
      "extends": [
        "Any"
      ],
      "derived_by": [],
      "identify_by": [
        "has_TransactionIdentifier"
      ],
      "requires": []
    },
    "relationships": [
      {
        "name": "has_TransactionIdentifier",
        "description": "Identifier common to transaction-like records.",
        "roles": [
          {
            "concept": "TransactionIdentifier"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{TransactionData} has transaction identifier {TransactionIdentifier}"
        ],
        "multiplicity": "OneToOne"
      },
      {
        "name": "has_BookingDate",
        "description": "Business date common to transaction-like records.",
        "roles": [
          {
            "concept": "CalendarDate"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{TransactionData} has booking date {CalendarDate}"
        ],
        "multiplicity": "ManyToOne"
      }
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ],
    "definition_warnings": [],
    "mappings": []
  },
  "value.TransactionData.has_TransactionIdentifier": {
    "id": "value.TransactionData.has_TransactionIdentifier",
    "type": "value_type_property",
    "name": "TransactionIdentifier",
    "description": "Identifier common to transaction-like records.",
    "parent": "concept.TransactionData",
    "data_type": "TransactionIdentifier",
    "value_concept": "TransactionIdentifier",
    "field_name": "has_TransactionIdentifier",
    "relationship_name": "has_TransactionIdentifier",
    "relationship": {
      "name": "has_TransactionIdentifier",
      "description": "Identifier common to transaction-like records.",
      "roles": [
        {
          "concept": "TransactionIdentifier"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{TransactionData} has transaction identifier {TransactionIdentifier}"
      ],
      "multiplicity": "OneToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "value.TransactionData.has_BookingDate": {
    "id": "value.TransactionData.has_BookingDate",
    "type": "value_type_property",
    "name": "CalendarDate",
    "description": "Business date common to transaction-like records.",
    "parent": "concept.TransactionData",
    "data_type": "CalendarDate",
    "value_concept": "CalendarDate",
    "field_name": "has_BookingDate",
    "relationship_name": "has_BookingDate",
    "relationship": {
      "name": "has_BookingDate",
      "description": "Business date common to transaction-like records.",
      "roles": [
        {
          "concept": "CalendarDate"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{TransactionData} has booking date {CalendarDate}"
      ],
      "multiplicity": "ManyToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "concept.Counterparty": {
    "id": "concept.Counterparty",
    "type": "entity_type_concept",
    "name": "Counterparty",
    "description": "Legal entity or trading counterparty involved in FX trading or account ownership.",
    "concept": {
      "name": "Counterparty",
      "type": "EntityType",
      "description": "Legal entity or trading counterparty involved in FX trading or account ownership.",
      "extends": [
        "PartyData"
      ],
      "derived_by": [],
      "identify_by": [
        "has_CounterpartyIdentifier"
      ],
      "requires": []
    },
    "relationships": [
      {
        "name": "OWNS_NostroAccount",
        "description": "Counterparty relationship used to connect nostro account ownership or responsibility.",
        "roles": [
          {
            "concept": "NostroAccount"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{Counterparty} owns or controls {NostroAccount}"
        ],
        "multiplicity": "ManyToOne"
      },
      {
        "name": "has_CounterpartyName",
        "description": "Human-readable legal or trading name of the counterparty.",
        "roles": [
          {
            "concept": "PartyName"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{Counterparty} has counterparty name {PartyName}"
        ],
        "multiplicity": "ManyToOne"
      },
      {
        "name": "has_CounterpartyCountry",
        "description": "Country or jurisdiction associated with the counterparty.",
        "roles": [
          {
            "concept": "CountryCode"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{Counterparty} has counterparty country {CountryCode}"
        ],
        "multiplicity": "ManyToOne"
      },
      {
        "name": "has_RiskSegment",
        "description": "Risk or client segment used for settlement monitoring.",
        "roles": [
          {
            "concept": "RiskSegment"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{Counterparty} has risk segment {RiskSegment}"
        ],
        "multiplicity": "ManyToOne"
      }
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ],
    "definition_warnings": [],
    "mappings": [
      {
        "kind": "object_mapping",
        "fields": [
          "counterparties.counterparty_id"
        ],
        "expressions": [
          "counterparties.counterparty_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 1,
        "relationship": "",
        "target_concept": "Counterparty",
        "expressions": [
          "counterparties.counterparty_id"
        ],
        "fields": [
          "counterparties.counterparty_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_CounterpartyIdentifier",
        "target_concept": "CounterpartyIdentifier",
        "expressions": [
          "counterparties.counterparty_id"
        ],
        "fields": [
          "counterparties.counterparty_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_CounterpartyName",
        "target_concept": "PartyName",
        "expressions": [
          "counterparties.counterparty_name"
        ],
        "fields": [
          "counterparties.counterparty_name"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_CounterpartyCountry",
        "target_concept": "CountryCode",
        "expressions": [
          "counterparties.counterparty_country"
        ],
        "fields": [
          "counterparties.counterparty_country"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_RiskSegment",
        "target_concept": "RiskSegment",
        "expressions": [
          "counterparties.risk_segment"
        ],
        "fields": [
          "counterparties.risk_segment"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 1,
        "relationship": "",
        "target_concept": "Counterparty",
        "expressions": [
          "nostro_accounts.owner_counterparty_id"
        ],
        "fields": [
          "nostro_accounts.owner_counterparty_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "OWNS_NostroAccount",
        "target_concept": "NostroAccount",
        "expressions": [
          "nostro_accounts.account_id"
        ],
        "fields": [
          "nostro_accounts.account_id"
        ]
      }
    ],
    "mapped_datasets": [
      "counterparties",
      "nostro_accounts"
    ],
    "mapped_tables": [
      "counterparties",
      "nostro_accounts"
    ],
    "mapped_fields": [
      "counterparties.counterparty_country",
      "counterparties.counterparty_id",
      "counterparties.counterparty_name",
      "counterparties.risk_segment",
      "nostro_accounts.owner_counterparty_id"
    ],
    "mapped_metrics": []
  },
  "value.Counterparty.has_CounterpartyName": {
    "id": "value.Counterparty.has_CounterpartyName",
    "type": "value_type_property",
    "name": "PartyName",
    "description": "Human-readable legal or trading name of the counterparty.",
    "parent": "concept.Counterparty",
    "data_type": "PartyName",
    "value_concept": "PartyName",
    "field_name": "has_CounterpartyName",
    "relationship_name": "has_CounterpartyName",
    "relationship": {
      "name": "has_CounterpartyName",
      "description": "Human-readable legal or trading name of the counterparty.",
      "roles": [
        {
          "concept": "PartyName"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{Counterparty} has counterparty name {PartyName}"
      ],
      "multiplicity": "ManyToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "value.Counterparty.has_CounterpartyCountry": {
    "id": "value.Counterparty.has_CounterpartyCountry",
    "type": "value_type_property",
    "name": "CountryCode",
    "description": "Country or jurisdiction associated with the counterparty.",
    "parent": "concept.Counterparty",
    "data_type": "CountryCode",
    "value_concept": "CountryCode",
    "field_name": "has_CounterpartyCountry",
    "relationship_name": "has_CounterpartyCountry",
    "relationship": {
      "name": "has_CounterpartyCountry",
      "description": "Country or jurisdiction associated with the counterparty.",
      "roles": [
        {
          "concept": "CountryCode"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{Counterparty} has counterparty country {CountryCode}"
      ],
      "multiplicity": "ManyToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "value.Counterparty.has_RiskSegment": {
    "id": "value.Counterparty.has_RiskSegment",
    "type": "value_type_property",
    "name": "RiskSegment",
    "description": "Risk or client segment used for settlement monitoring.",
    "parent": "concept.Counterparty",
    "data_type": "RiskSegment",
    "value_concept": "RiskSegment",
    "field_name": "has_RiskSegment",
    "relationship_name": "has_RiskSegment",
    "relationship": {
      "name": "has_RiskSegment",
      "description": "Risk or client segment used for settlement monitoring.",
      "roles": [
        {
          "concept": "RiskSegment"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{Counterparty} has risk segment {RiskSegment}"
      ],
      "multiplicity": "ManyToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "concept.FxRate": {
    "id": "concept.FxRate",
    "type": "entity_type_concept",
    "name": "FxRate",
    "description": "Reference FX rate used to convert trade amounts for monitoring and reporting.",
    "concept": {
      "name": "FxRate",
      "type": "EntityType",
      "description": "Reference FX rate used to convert trade amounts for monitoring and reporting.",
      "extends": [
        "ReferenceData"
      ],
      "derived_by": [],
      "identify_by": [
        "has_ReferenceIdentifier"
      ],
      "requires": []
    },
    "relationships": [
      {
        "name": "has_BaseCurrency",
        "description": "Base currency of the FX rate quote.",
        "roles": [
          {
            "concept": "CurrencyCode"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{FxRate} has base currency {CurrencyCode}"
        ],
        "multiplicity": "ManyToOne"
      },
      {
        "name": "has_QuoteCurrency",
        "description": "Quote or reporting currency of the FX rate quote.",
        "roles": [
          {
            "concept": "CurrencyCode"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{FxRate} has quote currency {CurrencyCode}"
        ],
        "multiplicity": "ManyToOne"
      },
      {
        "name": "has_RateDate",
        "description": "Date on which the FX rate is effective.",
        "roles": [
          {
            "concept": "CalendarDate"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{FxRate} has rate date {CalendarDate}"
        ],
        "multiplicity": "ManyToOne"
      },
      {
        "name": "has_RateValue",
        "description": "Decimal exchange rate value for the currency pair.",
        "roles": [
          {
            "concept": "Rate"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{FxRate} has rate value {Rate}"
        ],
        "multiplicity": "ManyToOne"
      }
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ],
    "definition_warnings": [],
    "mappings": [
      {
        "kind": "object_mapping",
        "fields": [
          "fx_rates.rate_id"
        ],
        "expressions": [
          "fx_rates.rate_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 1,
        "relationship": "",
        "target_concept": "FxRate",
        "expressions": [
          "fx_rates.rate_id"
        ],
        "fields": [
          "fx_rates.rate_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_ReferenceIdentifier",
        "target_concept": "ReferenceIdentifier",
        "expressions": [
          "fx_rates.rate_id"
        ],
        "fields": [
          "fx_rates.rate_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_BaseCurrency",
        "target_concept": "CurrencyCode",
        "expressions": [
          "fx_rates.base_currency"
        ],
        "fields": [
          "fx_rates.base_currency"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_QuoteCurrency",
        "target_concept": "CurrencyCode",
        "expressions": [
          "fx_rates.quote_currency"
        ],
        "fields": [
          "fx_rates.quote_currency"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_RateDate",
        "target_concept": "CalendarDate",
        "expressions": [
          "fx_rates.rate_date"
        ],
        "fields": [
          "fx_rates.rate_date"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_RateValue",
        "target_concept": "Rate",
        "expressions": [
          "fx_rates.rate_value"
        ],
        "fields": [
          "fx_rates.rate_value"
        ]
      }
    ],
    "mapped_datasets": [
      "fx_rates"
    ],
    "mapped_tables": [
      "fx_rates"
    ],
    "mapped_fields": [
      "fx_rates.base_currency",
      "fx_rates.quote_currency",
      "fx_rates.rate_date",
      "fx_rates.rate_id",
      "fx_rates.rate_value"
    ],
    "mapped_metrics": []
  },
  "value.FxRate.has_BaseCurrency": {
    "id": "value.FxRate.has_BaseCurrency",
    "type": "value_type_property",
    "name": "CurrencyCode",
    "description": "Base currency of the FX rate quote.",
    "parent": "concept.FxRate",
    "data_type": "CurrencyCode",
    "value_concept": "CurrencyCode",
    "field_name": "has_BaseCurrency",
    "relationship_name": "has_BaseCurrency",
    "relationship": {
      "name": "has_BaseCurrency",
      "description": "Base currency of the FX rate quote.",
      "roles": [
        {
          "concept": "CurrencyCode"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{FxRate} has base currency {CurrencyCode}"
      ],
      "multiplicity": "ManyToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "value.FxRate.has_QuoteCurrency": {
    "id": "value.FxRate.has_QuoteCurrency",
    "type": "value_type_property",
    "name": "CurrencyCode",
    "description": "Quote or reporting currency of the FX rate quote.",
    "parent": "concept.FxRate",
    "data_type": "CurrencyCode",
    "value_concept": "CurrencyCode",
    "field_name": "has_QuoteCurrency",
    "relationship_name": "has_QuoteCurrency",
    "relationship": {
      "name": "has_QuoteCurrency",
      "description": "Quote or reporting currency of the FX rate quote.",
      "roles": [
        {
          "concept": "CurrencyCode"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{FxRate} has quote currency {CurrencyCode}"
      ],
      "multiplicity": "ManyToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "value.FxRate.has_RateDate": {
    "id": "value.FxRate.has_RateDate",
    "type": "value_type_property",
    "name": "CalendarDate",
    "description": "Date on which the FX rate is effective.",
    "parent": "concept.FxRate",
    "data_type": "CalendarDate",
    "value_concept": "CalendarDate",
    "field_name": "has_RateDate",
    "relationship_name": "has_RateDate",
    "relationship": {
      "name": "has_RateDate",
      "description": "Date on which the FX rate is effective.",
      "roles": [
        {
          "concept": "CalendarDate"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{FxRate} has rate date {CalendarDate}"
      ],
      "multiplicity": "ManyToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "value.FxRate.has_RateValue": {
    "id": "value.FxRate.has_RateValue",
    "type": "value_type_property",
    "name": "Rate",
    "description": "Decimal exchange rate value for the currency pair.",
    "parent": "concept.FxRate",
    "data_type": "Rate",
    "value_concept": "Rate",
    "field_name": "has_RateValue",
    "relationship_name": "has_RateValue",
    "relationship": {
      "name": "has_RateValue",
      "description": "Decimal exchange rate value for the currency pair.",
      "roles": [
        {
          "concept": "Rate"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{FxRate} has rate value {Rate}"
      ],
      "multiplicity": "ManyToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "concept.FxTrade": {
    "id": "concept.FxTrade",
    "type": "entity_type_concept",
    "name": "FxTrade",
    "description": "Executed foreign exchange trade that must be monitored through settlement completion and exposure reporting.",
    "concept": {
      "name": "FxTrade",
      "type": "EntityType",
      "description": "Executed foreign exchange trade that must be monitored through settlement completion and exposure reporting.",
      "extends": [
        "TransactionData"
      ],
      "derived_by": [],
      "identify_by": [
        "has_TransactionIdentifier"
      ],
      "requires": []
    },
    "relationships": [
      {
        "name": "EXECUTED_WITH_Counterparty",
        "description": "Counterparty with whom the FX trade was executed.",
        "roles": [
          {
            "concept": "Counterparty"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{FxTrade} is executed with {Counterparty}"
        ],
        "multiplicity": "ManyToOne"
      },
      {
        "name": "SETTLED_BY_SettlementInstruction",
        "description": "Settlement instruction that operationally settles the FX trade.",
        "roles": [
          {
            "concept": "SettlementInstruction"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{FxTrade} is settled by {SettlementInstruction}"
        ],
        "multiplicity": "ManyToOne"
      },
      {
        "name": "PRICED_BY_FxRate",
        "description": "FX rate reference used to convert the trade amount into reporting currency.",
        "roles": [
          {
            "concept": "FxRate"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{FxTrade} is priced by {FxRate}"
        ],
        "multiplicity": "ManyToOne"
      },
      {
        "name": "has_BuyCurrency",
        "description": "Currency bought by the FX trade.",
        "roles": [
          {
            "concept": "CurrencyCode"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{FxTrade} has buy currency {CurrencyCode}"
        ],
        "multiplicity": "ManyToOne"
      },
      {
        "name": "has_SellCurrency",
        "description": "Currency sold by the FX trade.",
        "roles": [
          {
            "concept": "CurrencyCode"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{FxTrade} has sell currency {CurrencyCode}"
        ],
        "multiplicity": "ManyToOne"
      },
      {
        "name": "has_NotionalAmount",
        "description": "Original trade notional amount before reporting-currency conversion.",
        "roles": [
          {
            "concept": "MonetaryAmount"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{FxTrade} has notional amount {MonetaryAmount}"
        ],
        "multiplicity": "ManyToOne"
      },
      {
        "name": "has_SettlementDate",
        "description": "Contractual settlement date for the FX trade.",
        "roles": [
          {
            "concept": "CalendarDate"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{FxTrade} has settlement date {CalendarDate}"
        ],
        "multiplicity": "ManyToOne"
      },
      {
        "name": "has_ReportCurrencyExposureAmount",
        "description": "Calculated exposure amount after applying the relevant FX rate for monitoring.",
        "roles": [
          {
            "concept": "MonetaryAmount"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{FxTrade} has report currency exposure amount {MonetaryAmount}"
        ],
        "multiplicity": "ManyToOne"
      }
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ],
    "definition_warnings": [],
    "mappings": [
      {
        "kind": "object_mapping",
        "fields": [
          "fx_trades.trade_id"
        ],
        "expressions": [
          "fx_trades.trade_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 1,
        "relationship": "",
        "target_concept": "FxTrade",
        "expressions": [
          "fx_trades.trade_id"
        ],
        "fields": [
          "fx_trades.trade_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_TransactionIdentifier",
        "target_concept": "TransactionIdentifier",
        "expressions": [
          "fx_trades.trade_id"
        ],
        "fields": [
          "fx_trades.trade_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_BookingDate",
        "target_concept": "CalendarDate",
        "expressions": [
          "fx_trades.trade_date"
        ],
        "fields": [
          "fx_trades.trade_date"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "EXECUTED_WITH_Counterparty",
        "target_concept": "Counterparty",
        "expressions": [
          "fx_trades.counterparty_id"
        ],
        "fields": [
          "fx_trades.counterparty_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "PRICED_BY_FxRate",
        "target_concept": "FxRate",
        "expressions": [
          "fx_trades.rate_id"
        ],
        "fields": [
          "fx_trades.rate_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_BuyCurrency",
        "target_concept": "CurrencyCode",
        "expressions": [
          "fx_trades.buy_currency"
        ],
        "fields": [
          "fx_trades.buy_currency"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_SellCurrency",
        "target_concept": "CurrencyCode",
        "expressions": [
          "fx_trades.sell_currency"
        ],
        "fields": [
          "fx_trades.sell_currency"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_NotionalAmount",
        "target_concept": "MonetaryAmount",
        "expressions": [
          "fx_trades.notional_amount"
        ],
        "fields": [
          "fx_trades.notional_amount"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_SettlementDate",
        "target_concept": "CalendarDate",
        "expressions": [
          "fx_trades.settlement_date"
        ],
        "fields": [
          "fx_trades.settlement_date"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_ReportCurrencyExposureAmount",
        "target_concept": "MonetaryAmount",
        "expressions": [
          "metric.report_currency_exposure_amount"
        ],
        "fields": [
          "metric.report_currency_exposure_amount"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 1,
        "relationship": "",
        "target_concept": "FxTrade",
        "expressions": [
          "settlement_instructions.trade_id"
        ],
        "fields": [
          "settlement_instructions.trade_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "SETTLED_BY_SettlementInstruction",
        "target_concept": "SettlementInstruction",
        "expressions": [
          "settlement_instructions.settlement_instruction_id"
        ],
        "fields": [
          "settlement_instructions.settlement_instruction_id"
        ]
      }
    ],
    "mapped_datasets": [
      "fx_trades",
      "settlement_instructions"
    ],
    "mapped_tables": [
      "fx_trades",
      "settlement_instructions"
    ],
    "mapped_fields": [
      "fx_trades.buy_currency",
      "fx_trades.notional_amount",
      "fx_trades.sell_currency",
      "fx_trades.settlement_date",
      "fx_trades.trade_date",
      "fx_trades.trade_id",
      "settlement_instructions.trade_id"
    ],
    "mapped_metrics": [
      "report_currency_exposure_amount"
    ]
  },
  "value.FxTrade.has_BuyCurrency": {
    "id": "value.FxTrade.has_BuyCurrency",
    "type": "value_type_property",
    "name": "CurrencyCode",
    "description": "Currency bought by the FX trade.",
    "parent": "concept.FxTrade",
    "data_type": "CurrencyCode",
    "value_concept": "CurrencyCode",
    "field_name": "has_BuyCurrency",
    "relationship_name": "has_BuyCurrency",
    "relationship": {
      "name": "has_BuyCurrency",
      "description": "Currency bought by the FX trade.",
      "roles": [
        {
          "concept": "CurrencyCode"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{FxTrade} has buy currency {CurrencyCode}"
      ],
      "multiplicity": "ManyToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "value.FxTrade.has_SellCurrency": {
    "id": "value.FxTrade.has_SellCurrency",
    "type": "value_type_property",
    "name": "CurrencyCode",
    "description": "Currency sold by the FX trade.",
    "parent": "concept.FxTrade",
    "data_type": "CurrencyCode",
    "value_concept": "CurrencyCode",
    "field_name": "has_SellCurrency",
    "relationship_name": "has_SellCurrency",
    "relationship": {
      "name": "has_SellCurrency",
      "description": "Currency sold by the FX trade.",
      "roles": [
        {
          "concept": "CurrencyCode"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{FxTrade} has sell currency {CurrencyCode}"
      ],
      "multiplicity": "ManyToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "value.FxTrade.has_NotionalAmount": {
    "id": "value.FxTrade.has_NotionalAmount",
    "type": "value_type_property",
    "name": "MonetaryAmount",
    "description": "Original trade notional amount before reporting-currency conversion.",
    "parent": "concept.FxTrade",
    "data_type": "MonetaryAmount",
    "value_concept": "MonetaryAmount",
    "field_name": "has_NotionalAmount",
    "relationship_name": "has_NotionalAmount",
    "relationship": {
      "name": "has_NotionalAmount",
      "description": "Original trade notional amount before reporting-currency conversion.",
      "roles": [
        {
          "concept": "MonetaryAmount"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{FxTrade} has notional amount {MonetaryAmount}"
      ],
      "multiplicity": "ManyToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "value.FxTrade.has_SettlementDate": {
    "id": "value.FxTrade.has_SettlementDate",
    "type": "value_type_property",
    "name": "CalendarDate",
    "description": "Contractual settlement date for the FX trade.",
    "parent": "concept.FxTrade",
    "data_type": "CalendarDate",
    "value_concept": "CalendarDate",
    "field_name": "has_SettlementDate",
    "relationship_name": "has_SettlementDate",
    "relationship": {
      "name": "has_SettlementDate",
      "description": "Contractual settlement date for the FX trade.",
      "roles": [
        {
          "concept": "CalendarDate"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{FxTrade} has settlement date {CalendarDate}"
      ],
      "multiplicity": "ManyToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "value.FxTrade.has_ReportCurrencyExposureAmount": {
    "id": "value.FxTrade.has_ReportCurrencyExposureAmount",
    "type": "value_type_property",
    "name": "MonetaryAmount",
    "description": "Calculated exposure amount after applying the relevant FX rate for monitoring.",
    "parent": "concept.FxTrade",
    "data_type": "MonetaryAmount",
    "value_concept": "MonetaryAmount",
    "field_name": "has_ReportCurrencyExposureAmount",
    "relationship_name": "has_ReportCurrencyExposureAmount",
    "relationship": {
      "name": "has_ReportCurrencyExposureAmount",
      "description": "Calculated exposure amount after applying the relevant FX rate for monitoring.",
      "roles": [
        {
          "concept": "MonetaryAmount"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{FxTrade} has report currency exposure amount {MonetaryAmount}"
      ],
      "multiplicity": "ManyToOne"
    },
    "inherited": false,
    "inherited_from": "",
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
  },
  "concept.NostroAccount": {
    "id": "concept.NostroAccount",
    "type": "entity_type_concept",
    "name": "NostroAccount",
    "description": "Cash settlement account used for FX payment and receipt processing.",
    "concept": {
      "name": "NostroAccount",
      "type": "EntityType",
      "description": "Cash settlement account used for FX payment and receipt processing.",
      "extends": [
        "AccountData"
      ],
      "derived_by": [],
      "identify_by": [
        "has_AccountIdentifier"
      ],
      "requires": []
    },
    "relationships": [
      {
        "name": "HELD_BY_Counterparty",
        "description": "Counterparty or banking entity responsible for the nostro account.",
        "roles": [
          {
            "concept": "Counterparty"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{NostroAccount} is held by {Counterparty}"
        ],
        "multiplicity": "ManyToOne"
      },
      {
        "name": "has_AccountCurrency",
        "description": "Currency in which the nostro account settles cash.",
        "roles": [
          {
            "concept": "CurrencyCode"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{NostroAccount} has account currency {CurrencyCode}"
        ],
        "multiplicity": "ManyToOne"
      },
      {
        "name": "has_AccountStatus",
        "description": "Operational lifecycle status of the nostro account.",
        "roles": [
          {
            "concept": "StatusCode"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{NostroAccount} has account status {StatusCode}"
        ],
        "multiplicity": "ManyToOne"
      }
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ],
    "definition_warnings": [],
    "mappings": [
      {
        "kind": "object_mapping",
        "fields": [
          "nostro_accounts.account_id"
        ],
        "expressions": [
          "nostro_accounts.account_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 1,
        "relationship": "",
        "target_concept": "NostroAccount",
        "expressions": [
          "nostro_accounts.account_id"
        ],
        "fields": [
          "nostro_accounts.account_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_AccountIdentifier",
        "target_concept": "AccountIdentifier",
        "expressions": [
          "nostro_accounts.account_id"
        ],
        "fields": [
          "nostro_accounts.account_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "HELD_BY_Counterparty",
        "target_concept": "Counterparty",
        "expressions": [
          "nostro_accounts.owner_counterparty_id"
        ],
        "fields": [
          "nostro_accounts.owner_counterparty_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_AccountCurrency",
        "target_concept": "CurrencyCode",
        "expressions": [
          "nostro_accounts.account_currency"
        ],
        "fields": [
          "nostro_accounts.account_currency"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_AccountStatus",
        "target_concept": "StatusCode",
        "expressions": [
          "nostro_accounts.account_status"
        ],
        "fields": [
          "nostro_accounts.account_status"
        ]
      }
    ],
    "mapped_datasets": [
      "nostro_accounts"
    ],
    "mapped_tables": [
      "nostro_accounts"
    ],
    "mapped_fields": [
      "nostro_accounts.account_currency",
      "nostro_accounts.account_id",
      "nostro_accounts.account_status"
    ],
    "mapped_metrics": []
  },
  "value.NostroAccount.has_AccountCurrency": {
    "id": "value.NostroAccount.has_AccountCurrency",
    "type": "value_type_property",
    "name": "CurrencyCode",
    "description": "Currency in which the nostro account settles cash.",
    "parent": "concept.NostroAccount",
    "data_type": "CurrencyCode",
    "value_concept": "CurrencyCode",
    "field_name": "has_AccountCurrency",
    "relationship_name": "has_AccountCurrency",
    "relationship": {
      "name": "has_AccountCurrency",
      "description": "Currency in which the nostro account settles cash.",
      "roles": [
        {
          "concept": "CurrencyCode"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{NostroAccount} has account currency {CurrencyCode}"
      ],
      "multiplicity": "ManyToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "value.NostroAccount.has_AccountStatus": {
    "id": "value.NostroAccount.has_AccountStatus",
    "type": "value_type_property",
    "name": "StatusCode",
    "description": "Operational lifecycle status of the nostro account.",
    "parent": "concept.NostroAccount",
    "data_type": "StatusCode",
    "value_concept": "StatusCode",
    "field_name": "has_AccountStatus",
    "relationship_name": "has_AccountStatus",
    "relationship": {
      "name": "has_AccountStatus",
      "description": "Operational lifecycle status of the nostro account.",
      "roles": [
        {
          "concept": "StatusCode"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{NostroAccount} has account status {StatusCode}"
      ],
      "multiplicity": "ManyToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "concept.SettlementInstruction": {
    "id": "concept.SettlementInstruction",
    "type": "entity_type_concept",
    "name": "SettlementInstruction",
    "description": "Payment or settlement instruction used to settle an FX trade through a nostro account.",
    "concept": {
      "name": "SettlementInstruction",
      "type": "EntityType",
      "description": "Payment or settlement instruction used to settle an FX trade through a nostro account.",
      "extends": [
        "InstructionData"
      ],
      "derived_by": [],
      "identify_by": [
        "has_InstructionIdentifier"
      ],
      "requires": []
    },
    "relationships": [
      {
        "name": "SETTLES_FxTrade",
        "description": "FX trade whose cash movements are controlled by the settlement instruction.",
        "roles": [
          {
            "concept": "FxTrade"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{SettlementInstruction} settles {FxTrade}"
        ],
        "multiplicity": "ManyToOne"
      },
      {
        "name": "USES_NostroAccount",
        "description": "Nostro account used to process the settlement cash movement.",
        "roles": [
          {
            "concept": "NostroAccount"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{SettlementInstruction} uses {NostroAccount}"
        ],
        "multiplicity": "ManyToOne"
      },
      {
        "name": "has_SettlementCurrency",
        "description": "Currency in which the settlement instruction is executed.",
        "roles": [
          {
            "concept": "CurrencyCode"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{SettlementInstruction} has settlement currency {CurrencyCode}"
        ],
        "multiplicity": "ManyToOne"
      },
      {
        "name": "has_SettlementAmount",
        "description": "Cash amount instructed for FX settlement.",
        "roles": [
          {
            "concept": "MonetaryAmount"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{SettlementInstruction} has settlement amount {MonetaryAmount}"
        ],
        "multiplicity": "ManyToOne"
      },
      {
        "name": "has_SettlementValueDate",
        "description": "Value date on which the settlement instruction is expected to settle.",
        "roles": [
          {
            "concept": "CalendarDate"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{SettlementInstruction} has settlement value date {CalendarDate}"
        ],
        "multiplicity": "ManyToOne"
      },
      {
        "name": "has_SettlementStatus",
        "description": "Operational status of the settlement instruction.",
        "roles": [
          {
            "concept": "SettlementStatus"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{SettlementInstruction} has settlement status {SettlementStatus}"
        ],
        "multiplicity": "ManyToOne"
      },
      {
        "name": "has_ExpectedSettlementDate",
        "description": "Date by which settlement is expected to complete.",
        "roles": [
          {
            "concept": "CalendarDate"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{SettlementInstruction} has expected settlement date {CalendarDate}"
        ],
        "multiplicity": "ManyToOne"
      },
      {
        "name": "has_ActualSettlementDate",
        "description": "Date on which settlement actually completed.",
        "roles": [
          {
            "concept": "CalendarDate"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{SettlementInstruction} has actual settlement date {CalendarDate}"
        ],
        "multiplicity": "ManyToOne"
      },
      {
        "name": "has_SettlementDelayDays",
        "description": "Calculated number of days between expected and actual settlement completion.",
        "roles": [
          {
            "concept": "DayCount"
          }
        ],
        "derived_by": [],
        "requires": [],
        "verbalizes": [
          "{SettlementInstruction} has settlement delay days {DayCount}"
        ],
        "multiplicity": "ManyToOne"
      }
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ],
    "definition_warnings": [],
    "mappings": [
      {
        "kind": "object_mapping",
        "fields": [
          "settlement_instructions.settlement_instruction_id"
        ],
        "expressions": [
          "settlement_instructions.settlement_instruction_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 1,
        "relationship": "",
        "target_concept": "SettlementInstruction",
        "expressions": [
          "settlement_instructions.settlement_instruction_id"
        ],
        "fields": [
          "settlement_instructions.settlement_instruction_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_InstructionIdentifier",
        "target_concept": "InstructionIdentifier",
        "expressions": [
          "settlement_instructions.settlement_instruction_id"
        ],
        "fields": [
          "settlement_instructions.settlement_instruction_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "SETTLES_FxTrade",
        "target_concept": "FxTrade",
        "expressions": [
          "settlement_instructions.trade_id"
        ],
        "fields": [
          "settlement_instructions.trade_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "USES_NostroAccount",
        "target_concept": "NostroAccount",
        "expressions": [
          "settlement_instructions.nostro_account_id"
        ],
        "fields": [
          "settlement_instructions.nostro_account_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_SettlementCurrency",
        "target_concept": "CurrencyCode",
        "expressions": [
          "settlement_instructions.settlement_currency"
        ],
        "fields": [
          "settlement_instructions.settlement_currency"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_SettlementAmount",
        "target_concept": "MonetaryAmount",
        "expressions": [
          "settlement_instructions.settlement_amount"
        ],
        "fields": [
          "settlement_instructions.settlement_amount"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_SettlementValueDate",
        "target_concept": "CalendarDate",
        "expressions": [
          "settlement_instructions.settlement_value_date"
        ],
        "fields": [
          "settlement_instructions.settlement_value_date"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_SettlementStatus",
        "target_concept": "SettlementStatus",
        "expressions": [
          "settlement_instructions.settlement_status"
        ],
        "fields": [
          "settlement_instructions.settlement_status"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_ExpectedSettlementDate",
        "target_concept": "CalendarDate",
        "expressions": [
          "settlement_instructions.expected_settlement_date"
        ],
        "fields": [
          "settlement_instructions.expected_settlement_date"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_ActualSettlementDate",
        "target_concept": "CalendarDate",
        "expressions": [
          "settlement_instructions.actual_settlement_date"
        ],
        "fields": [
          "settlement_instructions.actual_settlement_date"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_SettlementDelayDays",
        "target_concept": "DayCount",
        "expressions": [
          "metric.settlement_delay_days"
        ],
        "fields": [
          "metric.settlement_delay_days"
        ]
      }
    ],
    "mapped_datasets": [
      "settlement_instructions"
    ],
    "mapped_tables": [
      "settlement_instructions"
    ],
    "mapped_fields": [
      "settlement_instructions.actual_settlement_date",
      "settlement_instructions.expected_settlement_date",
      "settlement_instructions.settlement_amount",
      "settlement_instructions.settlement_currency",
      "settlement_instructions.settlement_instruction_id",
      "settlement_instructions.settlement_status",
      "settlement_instructions.settlement_value_date"
    ],
    "mapped_metrics": [
      "settlement_delay_days"
    ]
  },
  "value.SettlementInstruction.has_SettlementCurrency": {
    "id": "value.SettlementInstruction.has_SettlementCurrency",
    "type": "value_type_property",
    "name": "CurrencyCode",
    "description": "Currency in which the settlement instruction is executed.",
    "parent": "concept.SettlementInstruction",
    "data_type": "CurrencyCode",
    "value_concept": "CurrencyCode",
    "field_name": "has_SettlementCurrency",
    "relationship_name": "has_SettlementCurrency",
    "relationship": {
      "name": "has_SettlementCurrency",
      "description": "Currency in which the settlement instruction is executed.",
      "roles": [
        {
          "concept": "CurrencyCode"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{SettlementInstruction} has settlement currency {CurrencyCode}"
      ],
      "multiplicity": "ManyToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "value.SettlementInstruction.has_SettlementAmount": {
    "id": "value.SettlementInstruction.has_SettlementAmount",
    "type": "value_type_property",
    "name": "MonetaryAmount",
    "description": "Cash amount instructed for FX settlement.",
    "parent": "concept.SettlementInstruction",
    "data_type": "MonetaryAmount",
    "value_concept": "MonetaryAmount",
    "field_name": "has_SettlementAmount",
    "relationship_name": "has_SettlementAmount",
    "relationship": {
      "name": "has_SettlementAmount",
      "description": "Cash amount instructed for FX settlement.",
      "roles": [
        {
          "concept": "MonetaryAmount"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{SettlementInstruction} has settlement amount {MonetaryAmount}"
      ],
      "multiplicity": "ManyToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "value.SettlementInstruction.has_SettlementValueDate": {
    "id": "value.SettlementInstruction.has_SettlementValueDate",
    "type": "value_type_property",
    "name": "CalendarDate",
    "description": "Value date on which the settlement instruction is expected to settle.",
    "parent": "concept.SettlementInstruction",
    "data_type": "CalendarDate",
    "value_concept": "CalendarDate",
    "field_name": "has_SettlementValueDate",
    "relationship_name": "has_SettlementValueDate",
    "relationship": {
      "name": "has_SettlementValueDate",
      "description": "Value date on which the settlement instruction is expected to settle.",
      "roles": [
        {
          "concept": "CalendarDate"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{SettlementInstruction} has settlement value date {CalendarDate}"
      ],
      "multiplicity": "ManyToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "value.SettlementInstruction.has_SettlementStatus": {
    "id": "value.SettlementInstruction.has_SettlementStatus",
    "type": "value_type_property",
    "name": "SettlementStatus",
    "description": "Operational status of the settlement instruction.",
    "parent": "concept.SettlementInstruction",
    "data_type": "SettlementStatus",
    "value_concept": "SettlementStatus",
    "field_name": "has_SettlementStatus",
    "relationship_name": "has_SettlementStatus",
    "relationship": {
      "name": "has_SettlementStatus",
      "description": "Operational status of the settlement instruction.",
      "roles": [
        {
          "concept": "SettlementStatus"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{SettlementInstruction} has settlement status {SettlementStatus}"
      ],
      "multiplicity": "ManyToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "value.SettlementInstruction.has_ExpectedSettlementDate": {
    "id": "value.SettlementInstruction.has_ExpectedSettlementDate",
    "type": "value_type_property",
    "name": "CalendarDate",
    "description": "Date by which settlement is expected to complete.",
    "parent": "concept.SettlementInstruction",
    "data_type": "CalendarDate",
    "value_concept": "CalendarDate",
    "field_name": "has_ExpectedSettlementDate",
    "relationship_name": "has_ExpectedSettlementDate",
    "relationship": {
      "name": "has_ExpectedSettlementDate",
      "description": "Date by which settlement is expected to complete.",
      "roles": [
        {
          "concept": "CalendarDate"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{SettlementInstruction} has expected settlement date {CalendarDate}"
      ],
      "multiplicity": "ManyToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "value.SettlementInstruction.has_ActualSettlementDate": {
    "id": "value.SettlementInstruction.has_ActualSettlementDate",
    "type": "value_type_property",
    "name": "CalendarDate",
    "description": "Date on which settlement actually completed.",
    "parent": "concept.SettlementInstruction",
    "data_type": "CalendarDate",
    "value_concept": "CalendarDate",
    "field_name": "has_ActualSettlementDate",
    "relationship_name": "has_ActualSettlementDate",
    "relationship": {
      "name": "has_ActualSettlementDate",
      "description": "Date on which settlement actually completed.",
      "roles": [
        {
          "concept": "CalendarDate"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{SettlementInstruction} has actual settlement date {CalendarDate}"
      ],
      "multiplicity": "ManyToOne"
    },
    "inherited": false,
    "inherited_from": "",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "value.SettlementInstruction.has_SettlementDelayDays": {
    "id": "value.SettlementInstruction.has_SettlementDelayDays",
    "type": "value_type_property",
    "name": "DayCount",
    "description": "Calculated number of days between expected and actual settlement completion.",
    "parent": "concept.SettlementInstruction",
    "data_type": "DayCount",
    "value_concept": "DayCount",
    "field_name": "has_SettlementDelayDays",
    "relationship_name": "has_SettlementDelayDays",
    "relationship": {
      "name": "has_SettlementDelayDays",
      "description": "Calculated number of days between expected and actual settlement completion.",
      "roles": [
        {
          "concept": "DayCount"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{SettlementInstruction} has settlement delay days {DayCount}"
      ],
      "multiplicity": "ManyToOne"
    },
    "inherited": false,
    "inherited_from": "",
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
  },
  "value.Counterparty.has_CounterpartyIdentifier": {
    "id": "value.Counterparty.has_CounterpartyIdentifier",
    "type": "value_type_property",
    "name": "CounterpartyIdentifier",
    "description": "Identifier common to counterparty or party records.",
    "parent": "concept.Counterparty",
    "data_type": "CounterpartyIdentifier",
    "value_concept": "CounterpartyIdentifier",
    "field_name": "has_CounterpartyIdentifier",
    "relationship_name": "has_CounterpartyIdentifier",
    "relationship": {
      "name": "has_CounterpartyIdentifier",
      "description": "Identifier common to counterparty or party records.",
      "roles": [
        {
          "concept": "CounterpartyIdentifier"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{PartyData} has counterparty identifier {CounterpartyIdentifier}"
      ],
      "multiplicity": "OneToOne"
    },
    "inherited": true,
    "inherited_from": "PartyData",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "value.FxRate.has_ReferenceIdentifier": {
    "id": "value.FxRate.has_ReferenceIdentifier",
    "type": "value_type_property",
    "name": "ReferenceIdentifier",
    "description": "Identifier common to reference-data records.",
    "parent": "concept.FxRate",
    "data_type": "ReferenceIdentifier",
    "value_concept": "ReferenceIdentifier",
    "field_name": "has_ReferenceIdentifier",
    "relationship_name": "has_ReferenceIdentifier",
    "relationship": {
      "name": "has_ReferenceIdentifier",
      "description": "Identifier common to reference-data records.",
      "roles": [
        {
          "concept": "ReferenceIdentifier"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{ReferenceData} has reference identifier {ReferenceIdentifier}"
      ],
      "multiplicity": "OneToOne"
    },
    "inherited": true,
    "inherited_from": "ReferenceData",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "value.FxTrade.has_TransactionIdentifier": {
    "id": "value.FxTrade.has_TransactionIdentifier",
    "type": "value_type_property",
    "name": "TransactionIdentifier",
    "description": "Identifier common to transaction-like records.",
    "parent": "concept.FxTrade",
    "data_type": "TransactionIdentifier",
    "value_concept": "TransactionIdentifier",
    "field_name": "has_TransactionIdentifier",
    "relationship_name": "has_TransactionIdentifier",
    "relationship": {
      "name": "has_TransactionIdentifier",
      "description": "Identifier common to transaction-like records.",
      "roles": [
        {
          "concept": "TransactionIdentifier"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{TransactionData} has transaction identifier {TransactionIdentifier}"
      ],
      "multiplicity": "OneToOne"
    },
    "inherited": true,
    "inherited_from": "TransactionData",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "value.FxTrade.has_BookingDate": {
    "id": "value.FxTrade.has_BookingDate",
    "type": "value_type_property",
    "name": "CalendarDate",
    "description": "Business date common to transaction-like records.",
    "parent": "concept.FxTrade",
    "data_type": "CalendarDate",
    "value_concept": "CalendarDate",
    "field_name": "has_BookingDate",
    "relationship_name": "has_BookingDate",
    "relationship": {
      "name": "has_BookingDate",
      "description": "Business date common to transaction-like records.",
      "roles": [
        {
          "concept": "CalendarDate"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{TransactionData} has booking date {CalendarDate}"
      ],
      "multiplicity": "ManyToOne"
    },
    "inherited": true,
    "inherited_from": "TransactionData",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "value.NostroAccount.has_AccountIdentifier": {
    "id": "value.NostroAccount.has_AccountIdentifier",
    "type": "value_type_property",
    "name": "AccountIdentifier",
    "description": "Identifier common to account-like records.",
    "parent": "concept.NostroAccount",
    "data_type": "AccountIdentifier",
    "value_concept": "AccountIdentifier",
    "field_name": "has_AccountIdentifier",
    "relationship_name": "has_AccountIdentifier",
    "relationship": {
      "name": "has_AccountIdentifier",
      "description": "Identifier common to account-like records.",
      "roles": [
        {
          "concept": "AccountIdentifier"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{AccountData} has account identifier {AccountIdentifier}"
      ],
      "multiplicity": "OneToOne"
    },
    "inherited": true,
    "inherited_from": "AccountData",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "value.SettlementInstruction.has_InstructionIdentifier": {
    "id": "value.SettlementInstruction.has_InstructionIdentifier",
    "type": "value_type_property",
    "name": "InstructionIdentifier",
    "description": "Identifier common to operational instruction records.",
    "parent": "concept.SettlementInstruction",
    "data_type": "InstructionIdentifier",
    "value_concept": "InstructionIdentifier",
    "field_name": "has_InstructionIdentifier",
    "relationship_name": "has_InstructionIdentifier",
    "relationship": {
      "name": "has_InstructionIdentifier",
      "description": "Identifier common to operational instruction records.",
      "roles": [
        {
          "concept": "InstructionIdentifier"
        }
      ],
      "derived_by": [],
      "requires": [],
      "verbalizes": [
        "{InstructionData} has instruction identifier {InstructionIdentifier}"
      ],
      "multiplicity": "OneToOne"
    },
    "inherited": true,
    "inherited_from": "InstructionData",
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
    "source_files": [
      "knowledge/regulatory-reporting-osi.yaml"
    ]
  },
  "dataset.counterparties": {
    "id": "dataset.counterparties",
    "type": "semantic_dataset",
    "name": "counterparties",
    "description": "Counterparty master records at legal entity grain, providing names, jurisdiction, and risk segment attributes used for FX settlement monitoring.",
    "source": "counterparty_master.counterparties",
    "primary_key": [
      "counterparty_id"
    ],
    "unique_keys": [],
    "fields": [
      {
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
      {
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
      {
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
      {
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
      }
    ],
    "ai_context": {
      "physical_kind": "table"
    },
    "source_tables": [
      "counterparty_master.counterparties"
    ],
    "physical_kind": "table",
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ]
  },
  "table.counterparty_master.counterparties": {
    "id": "table.counterparty_master.counterparties",
    "type": "physical_table",
    "name": "counterparties",
    "description": "",
    "source": "counterparty_master.counterparties",
    "columns": [
      {
        "name": "counterparty_id",
        "description": "Stable master identifier for a trading or account counterparty.",
        "data_type": "string",
        "nullable": false
      },
      {
        "name": "counterparty_name",
        "description": "Legal or trading display name of the counterparty.",
        "data_type": "string",
        "nullable": false
      },
      {
        "name": "counterparty_country",
        "description": "Country or jurisdiction associated with the counterparty master record.",
        "data_type": "string",
        "nullable": false
      },
      {
        "name": "risk_segment",
        "description": "Risk or client segment assigned to the counterparty for monitoring.",
        "data_type": "string",
        "nullable": false
      }
    ],
    "source_datasets": [
      "counterparties",
      "fx_settlement_monitoring_lines"
    ],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology"
  },
  "field.counterparties.counterparty_id": {
    "id": "field.counterparties.counterparty_id",
    "type": "dataset_field",
    "name": "counterparty_id",
    "description": "Stable master identifier for a trading or account counterparty.",
    "parent": "dataset.counterparties",
    "dataset": "counterparties",
    "field": "counterparty_id",
    "expression": "counterparty_id",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.counterparty_master.counterparties.counterparty_id": {
    "id": "column.counterparty_master.counterparties.counterparty_id",
    "type": "column",
    "name": "counterparty_id",
    "description": "Stable master identifier for a trading or account counterparty.",
    "parent": "table.counterparty_master.counterparties",
    "physical_field": "counterparty_master.counterparties.counterparty_id",
    "dataset_field": "counterparties.counterparty_id"
  },
  "field.counterparties.counterparty_name": {
    "id": "field.counterparties.counterparty_name",
    "type": "dataset_field",
    "name": "counterparty_name",
    "description": "Legal or trading display name of the counterparty.",
    "parent": "dataset.counterparties",
    "dataset": "counterparties",
    "field": "counterparty_name",
    "expression": "counterparty_name",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.counterparty_master.counterparties.counterparty_name": {
    "id": "column.counterparty_master.counterparties.counterparty_name",
    "type": "column",
    "name": "counterparty_name",
    "description": "Legal or trading display name of the counterparty.",
    "parent": "table.counterparty_master.counterparties",
    "physical_field": "counterparty_master.counterparties.counterparty_name",
    "dataset_field": "counterparties.counterparty_name"
  },
  "field.counterparties.counterparty_country": {
    "id": "field.counterparties.counterparty_country",
    "type": "dataset_field",
    "name": "counterparty_country",
    "description": "Country or jurisdiction associated with the counterparty master record.",
    "parent": "dataset.counterparties",
    "dataset": "counterparties",
    "field": "counterparty_country",
    "expression": "counterparty_country",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.counterparty_master.counterparties.counterparty_country": {
    "id": "column.counterparty_master.counterparties.counterparty_country",
    "type": "column",
    "name": "counterparty_country",
    "description": "Country or jurisdiction associated with the counterparty master record.",
    "parent": "table.counterparty_master.counterparties",
    "physical_field": "counterparty_master.counterparties.counterparty_country",
    "dataset_field": "counterparties.counterparty_country"
  },
  "field.counterparties.risk_segment": {
    "id": "field.counterparties.risk_segment",
    "type": "dataset_field",
    "name": "risk_segment",
    "description": "Risk or client segment assigned to the counterparty for monitoring.",
    "parent": "dataset.counterparties",
    "dataset": "counterparties",
    "field": "risk_segment",
    "expression": "risk_segment",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.counterparty_master.counterparties.risk_segment": {
    "id": "column.counterparty_master.counterparties.risk_segment",
    "type": "column",
    "name": "risk_segment",
    "description": "Risk or client segment assigned to the counterparty for monitoring.",
    "parent": "table.counterparty_master.counterparties",
    "physical_field": "counterparty_master.counterparties.risk_segment",
    "dataset_field": "counterparties.risk_segment"
  },
  "dataset.fx_rates": {
    "id": "dataset.fx_rates",
    "type": "semantic_dataset",
    "name": "fx_rates",
    "description": "FX rate reference records at currency-pair and rate-date grain, used to convert trade notional amounts into reporting currency.",
    "source": "market_data.fx_rates",
    "primary_key": [
      "rate_id"
    ],
    "unique_keys": [],
    "fields": [
      {
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
      {
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
      {
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
      {
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
      {
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
      }
    ],
    "ai_context": {
      "physical_kind": "table"
    },
    "source_tables": [
      "market_data.fx_rates"
    ],
    "physical_kind": "table",
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ]
  },
  "table.market_data.fx_rates": {
    "id": "table.market_data.fx_rates",
    "type": "physical_table",
    "name": "fx_rates",
    "description": "",
    "source": "market_data.fx_rates",
    "columns": [
      {
        "name": "rate_id",
        "description": "Stable identifier for an FX rate reference record.",
        "data_type": "string",
        "nullable": false
      },
      {
        "name": "base_currency",
        "description": "Base currency of the FX quote.",
        "data_type": "string",
        "nullable": false
      },
      {
        "name": "quote_currency",
        "description": "Quote or reporting currency of the FX quote.",
        "data_type": "string",
        "nullable": false
      },
      {
        "name": "rate_date",
        "description": "Effective date of the FX rate.",
        "data_type": "date",
        "nullable": false
      },
      {
        "name": "rate_value",
        "description": "Decimal rate value used for currency conversion.",
        "data_type": "decimal",
        "nullable": false
      }
    ],
    "source_datasets": [
      "fx_rates",
      "fx_settlement_monitoring_lines"
    ],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology"
  },
  "field.fx_rates.rate_id": {
    "id": "field.fx_rates.rate_id",
    "type": "dataset_field",
    "name": "rate_id",
    "description": "Stable identifier for an FX rate reference record.",
    "parent": "dataset.fx_rates",
    "dataset": "fx_rates",
    "field": "rate_id",
    "expression": "rate_id",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.market_data.fx_rates.rate_id": {
    "id": "column.market_data.fx_rates.rate_id",
    "type": "column",
    "name": "rate_id",
    "description": "Stable identifier for an FX rate reference record.",
    "parent": "table.market_data.fx_rates",
    "physical_field": "market_data.fx_rates.rate_id",
    "dataset_field": "fx_rates.rate_id"
  },
  "field.fx_rates.base_currency": {
    "id": "field.fx_rates.base_currency",
    "type": "dataset_field",
    "name": "base_currency",
    "description": "Base currency of the FX quote.",
    "parent": "dataset.fx_rates",
    "dataset": "fx_rates",
    "field": "base_currency",
    "expression": "base_currency",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.market_data.fx_rates.base_currency": {
    "id": "column.market_data.fx_rates.base_currency",
    "type": "column",
    "name": "base_currency",
    "description": "Base currency of the FX quote.",
    "parent": "table.market_data.fx_rates",
    "physical_field": "market_data.fx_rates.base_currency",
    "dataset_field": "fx_rates.base_currency"
  },
  "field.fx_rates.quote_currency": {
    "id": "field.fx_rates.quote_currency",
    "type": "dataset_field",
    "name": "quote_currency",
    "description": "Quote or reporting currency of the FX quote.",
    "parent": "dataset.fx_rates",
    "dataset": "fx_rates",
    "field": "quote_currency",
    "expression": "quote_currency",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.market_data.fx_rates.quote_currency": {
    "id": "column.market_data.fx_rates.quote_currency",
    "type": "column",
    "name": "quote_currency",
    "description": "Quote or reporting currency of the FX quote.",
    "parent": "table.market_data.fx_rates",
    "physical_field": "market_data.fx_rates.quote_currency",
    "dataset_field": "fx_rates.quote_currency"
  },
  "field.fx_rates.rate_date": {
    "id": "field.fx_rates.rate_date",
    "type": "dataset_field",
    "name": "rate_date",
    "description": "Effective date of the FX rate.",
    "parent": "dataset.fx_rates",
    "dataset": "fx_rates",
    "field": "rate_date",
    "expression": "rate_date",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "date",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.market_data.fx_rates.rate_date": {
    "id": "column.market_data.fx_rates.rate_date",
    "type": "column",
    "name": "rate_date",
    "description": "Effective date of the FX rate.",
    "parent": "table.market_data.fx_rates",
    "physical_field": "market_data.fx_rates.rate_date",
    "dataset_field": "fx_rates.rate_date"
  },
  "field.fx_rates.rate_value": {
    "id": "field.fx_rates.rate_value",
    "type": "dataset_field",
    "name": "rate_value",
    "description": "Decimal rate value used for currency conversion.",
    "parent": "dataset.fx_rates",
    "dataset": "fx_rates",
    "field": "rate_value",
    "expression": "rate_value",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "decimal",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.market_data.fx_rates.rate_value": {
    "id": "column.market_data.fx_rates.rate_value",
    "type": "column",
    "name": "rate_value",
    "description": "Decimal rate value used for currency conversion.",
    "parent": "table.market_data.fx_rates",
    "physical_field": "market_data.fx_rates.rate_value",
    "dataset_field": "fx_rates.rate_value"
  },
  "dataset.fx_settlement_monitoring_lines": {
    "id": "dataset.fx_settlement_monitoring_lines",
    "type": "semantic_dataset",
    "name": "fx_settlement_monitoring_lines",
    "description": "Prepared FX settlement monitoring line dataset at trade and settlement-instruction grain, combining trade, settlement, counterparty, account, and FX rate context for operational reporting review.",
    "source": "query.fx_settlement_monitoring_lines",
    "primary_key": [],
    "unique_keys": [],
    "fields": [
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      }
    ],
    "ai_context": {
      "physical_kind": "query"
    },
    "source_tables": [
      "fx_trading_core.fx_trades",
      "payments_core.settlement_instructions",
      "counterparty_master.counterparties",
      "nostro_master.nostro_accounts",
      "market_data.fx_rates"
    ],
    "physical_kind": "query",
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
  },
  "table.fx_trading_core.fx_trades": {
    "id": "table.fx_trading_core.fx_trades",
    "type": "physical_table",
    "name": "fx_trades",
    "description": "",
    "source": "fx_trading_core.fx_trades",
    "columns": [
      {
        "name": "trade_id",
        "description": "Stable source trade identifier for an executed FX trade.",
        "data_type": "string",
        "nullable": false
      },
      {
        "name": "trade_date",
        "description": "Business booking date of the FX trade.",
        "data_type": "date",
        "nullable": false
      },
      {
        "name": "counterparty_id",
        "description": "Counterparty identifier captured at trade execution.",
        "data_type": "string",
        "nullable": false
      },
      {
        "name": "buy_currency",
        "description": "Currency bought by the FX trade.",
        "data_type": "string",
        "nullable": false
      },
      {
        "name": "sell_currency",
        "description": "Currency sold by the FX trade.",
        "data_type": "string",
        "nullable": false
      },
      {
        "name": "notional_amount",
        "description": "Trade notional amount before reporting-currency conversion.",
        "data_type": "decimal",
        "nullable": false
      },
      {
        "name": "settlement_date",
        "description": "Contractual settlement date agreed for the FX trade.",
        "data_type": "date",
        "nullable": false
      },
      {
        "name": "rate_id",
        "description": "Reference identifier of the FX rate used for reporting conversion.",
        "data_type": "string",
        "nullable": false
      }
    ],
    "source_datasets": [
      "fx_settlement_monitoring_lines",
      "fx_trades"
    ],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology"
  },
  "table.payments_core.settlement_instructions": {
    "id": "table.payments_core.settlement_instructions",
    "type": "physical_table",
    "name": "settlement_instructions",
    "description": "",
    "source": "payments_core.settlement_instructions",
    "columns": [
      {
        "name": "settlement_instruction_id",
        "description": "Stable operational identifier for the FX settlement instruction.",
        "data_type": "string",
        "nullable": false
      },
      {
        "name": "trade_id",
        "description": "Trade identifier whose cash movement is governed by the settlement instruction.",
        "data_type": "string",
        "nullable": false
      },
      {
        "name": "nostro_account_id",
        "description": "Nostro account identifier used to settle the instruction.",
        "data_type": "string",
        "nullable": false
      },
      {
        "name": "settlement_currency",
        "description": "Currency in which the instruction settles.",
        "data_type": "string",
        "nullable": false
      },
      {
        "name": "settlement_amount",
        "description": "Monetary cash obligation that the instruction must settle in the stated settlement currency.",
        "data_type": "decimal",
        "nullable": false
      },
      {
        "name": "settlement_value_date",
        "description": "Value date expected for settlement posting.",
        "data_type": "date",
        "nullable": false
      },
      {
        "name": "expected_settlement_date",
        "description": "Date by which the instruction should complete settlement.",
        "data_type": "date",
        "nullable": false
      },
      {
        "name": "actual_settlement_date",
        "description": "Date on which the instruction actually completed settlement.",
        "data_type": "date",
        "nullable": true
      },
      {
        "name": "settlement_status",
        "description": "Operational status assigned to the settlement instruction.",
        "data_type": "string",
        "nullable": false
      }
    ],
    "source_datasets": [
      "fx_settlement_monitoring_lines",
      "settlement_instructions"
    ],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology"
  },
  "table.nostro_master.nostro_accounts": {
    "id": "table.nostro_master.nostro_accounts",
    "type": "physical_table",
    "name": "nostro_accounts",
    "description": "",
    "source": "nostro_master.nostro_accounts",
    "columns": [
      {
        "name": "account_id",
        "description": "Stable account identifier for a nostro settlement account.",
        "data_type": "string",
        "nullable": false
      },
      {
        "name": "account_currency",
        "description": "Currency in which the nostro account settles cash movements.",
        "data_type": "string",
        "nullable": false
      },
      {
        "name": "account_status",
        "description": "Operational lifecycle status of the nostro account.",
        "data_type": "string",
        "nullable": false
      },
      {
        "name": "owner_counterparty_id",
        "description": "Counterparty identifier responsible for or owning the nostro account.",
        "data_type": "string",
        "nullable": false
      }
    ],
    "source_datasets": [
      "fx_settlement_monitoring_lines",
      "nostro_accounts"
    ],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology"
  },
  "field.fx_settlement_monitoring_lines.trade_id": {
    "id": "field.fx_settlement_monitoring_lines.trade_id",
    "type": "dataset_field",
    "name": "trade_id",
    "description": "Trade identifier carried onto the monitoring line for reconciliation.",
    "parent": "dataset.fx_settlement_monitoring_lines",
    "dataset": "fx_settlement_monitoring_lines",
    "field": "trade_id",
    "expression": "fx_trades.trade_id",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "field.fx_settlement_monitoring_lines.settlement_instruction_id": {
    "id": "field.fx_settlement_monitoring_lines.settlement_instruction_id",
    "type": "dataset_field",
    "name": "settlement_instruction_id",
    "description": "Settlement instruction identifier carried onto the monitoring line.",
    "parent": "dataset.fx_settlement_monitoring_lines",
    "dataset": "fx_settlement_monitoring_lines",
    "field": "settlement_instruction_id",
    "expression": "settlement_instructions.settlement_instruction_id",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "field.fx_settlement_monitoring_lines.counterparty_id": {
    "id": "field.fx_settlement_monitoring_lines.counterparty_id",
    "type": "dataset_field",
    "name": "counterparty_id",
    "description": "Counterparty identifier reported for settlement monitoring and aggregation.",
    "parent": "dataset.fx_settlement_monitoring_lines",
    "dataset": "fx_settlement_monitoring_lines",
    "field": "counterparty_id",
    "expression": "fx_trades.counterparty_id",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "field.fx_settlement_monitoring_lines.settlement_currency": {
    "id": "field.fx_settlement_monitoring_lines.settlement_currency",
    "type": "dataset_field",
    "name": "settlement_currency",
    "description": "Settlement currency reported on the monitoring line.",
    "parent": "dataset.fx_settlement_monitoring_lines",
    "dataset": "fx_settlement_monitoring_lines",
    "field": "settlement_currency",
    "expression": "settlement_instructions.settlement_currency",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "field.fx_settlement_monitoring_lines.settlement_amount": {
    "id": "field.fx_settlement_monitoring_lines.settlement_amount",
    "type": "dataset_field",
    "name": "settlement_amount",
    "description": "Settlement amount reported on the monitoring line.",
    "parent": "dataset.fx_settlement_monitoring_lines",
    "dataset": "fx_settlement_monitoring_lines",
    "field": "settlement_amount",
    "expression": "settlement_instructions.settlement_amount",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "decimal",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "field.fx_settlement_monitoring_lines.settlement_status": {
    "id": "field.fx_settlement_monitoring_lines.settlement_status",
    "type": "dataset_field",
    "name": "settlement_status",
    "description": "Settlement status reported on the monitoring line.",
    "parent": "dataset.fx_settlement_monitoring_lines",
    "dataset": "fx_settlement_monitoring_lines",
    "field": "settlement_status",
    "expression": "settlement_instructions.settlement_status",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "field.fx_settlement_monitoring_lines.exposure_amount_report_currency": {
    "id": "field.fx_settlement_monitoring_lines.exposure_amount_report_currency",
    "type": "dataset_field",
    "name": "exposure_amount_report_currency",
    "description": "Trade notional converted into reporting currency for monitoring review.",
    "parent": "dataset.fx_settlement_monitoring_lines",
    "dataset": "fx_settlement_monitoring_lines",
    "field": "exposure_amount_report_currency",
    "expression": "fx_trades.notional_amount * fx_rates.rate_value",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "decimal",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "field.fx_settlement_monitoring_lines.settlement_delay_days": {
    "id": "field.fx_settlement_monitoring_lines.settlement_delay_days",
    "type": "dataset_field",
    "name": "settlement_delay_days",
    "description": "Number of days between expected and actual settlement completion.",
    "parent": "dataset.fx_settlement_monitoring_lines",
    "dataset": "fx_settlement_monitoring_lines",
    "field": "settlement_delay_days",
    "expression": "DATEDIFF(day, settlement_instructions.expected_settlement_date, settlement_instructions.actual_settlement_date)",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "integer",
      "nullable": true
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "dataset.fx_trades": {
    "id": "dataset.fx_trades",
    "type": "semantic_dataset",
    "name": "fx_trades",
    "description": "Executed FX trade records at trade grain, carrying counterparty, currencies, notional amount, settlement date, and pricing reference used for settlement monitoring.",
    "source": "fx_trading_core.fx_trades",
    "primary_key": [
      "trade_id"
    ],
    "unique_keys": [],
    "fields": [
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      }
    ],
    "ai_context": {
      "physical_kind": "table"
    },
    "source_tables": [
      "fx_trading_core.fx_trades"
    ],
    "physical_kind": "table",
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ]
  },
  "field.fx_trades.trade_id": {
    "id": "field.fx_trades.trade_id",
    "type": "dataset_field",
    "name": "trade_id",
    "description": "Stable source trade identifier for an executed FX trade.",
    "parent": "dataset.fx_trades",
    "dataset": "fx_trades",
    "field": "trade_id",
    "expression": "trade_id",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.fx_trading_core.fx_trades.trade_id": {
    "id": "column.fx_trading_core.fx_trades.trade_id",
    "type": "column",
    "name": "trade_id",
    "description": "Stable source trade identifier for an executed FX trade.",
    "parent": "table.fx_trading_core.fx_trades",
    "physical_field": "fx_trading_core.fx_trades.trade_id",
    "dataset_field": "fx_trades.trade_id"
  },
  "field.fx_trades.trade_date": {
    "id": "field.fx_trades.trade_date",
    "type": "dataset_field",
    "name": "trade_date",
    "description": "Business booking date of the FX trade.",
    "parent": "dataset.fx_trades",
    "dataset": "fx_trades",
    "field": "trade_date",
    "expression": "trade_date",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "date",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.fx_trading_core.fx_trades.trade_date": {
    "id": "column.fx_trading_core.fx_trades.trade_date",
    "type": "column",
    "name": "trade_date",
    "description": "Business booking date of the FX trade.",
    "parent": "table.fx_trading_core.fx_trades",
    "physical_field": "fx_trading_core.fx_trades.trade_date",
    "dataset_field": "fx_trades.trade_date"
  },
  "field.fx_trades.counterparty_id": {
    "id": "field.fx_trades.counterparty_id",
    "type": "dataset_field",
    "name": "counterparty_id",
    "description": "Counterparty identifier captured at trade execution.",
    "parent": "dataset.fx_trades",
    "dataset": "fx_trades",
    "field": "counterparty_id",
    "expression": "counterparty_id",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.fx_trading_core.fx_trades.counterparty_id": {
    "id": "column.fx_trading_core.fx_trades.counterparty_id",
    "type": "column",
    "name": "counterparty_id",
    "description": "Counterparty identifier captured at trade execution.",
    "parent": "table.fx_trading_core.fx_trades",
    "physical_field": "fx_trading_core.fx_trades.counterparty_id",
    "dataset_field": "fx_trades.counterparty_id"
  },
  "field.fx_trades.buy_currency": {
    "id": "field.fx_trades.buy_currency",
    "type": "dataset_field",
    "name": "buy_currency",
    "description": "Currency bought by the FX trade.",
    "parent": "dataset.fx_trades",
    "dataset": "fx_trades",
    "field": "buy_currency",
    "expression": "buy_currency",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.fx_trading_core.fx_trades.buy_currency": {
    "id": "column.fx_trading_core.fx_trades.buy_currency",
    "type": "column",
    "name": "buy_currency",
    "description": "Currency bought by the FX trade.",
    "parent": "table.fx_trading_core.fx_trades",
    "physical_field": "fx_trading_core.fx_trades.buy_currency",
    "dataset_field": "fx_trades.buy_currency"
  },
  "field.fx_trades.sell_currency": {
    "id": "field.fx_trades.sell_currency",
    "type": "dataset_field",
    "name": "sell_currency",
    "description": "Currency sold by the FX trade.",
    "parent": "dataset.fx_trades",
    "dataset": "fx_trades",
    "field": "sell_currency",
    "expression": "sell_currency",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.fx_trading_core.fx_trades.sell_currency": {
    "id": "column.fx_trading_core.fx_trades.sell_currency",
    "type": "column",
    "name": "sell_currency",
    "description": "Currency sold by the FX trade.",
    "parent": "table.fx_trading_core.fx_trades",
    "physical_field": "fx_trading_core.fx_trades.sell_currency",
    "dataset_field": "fx_trades.sell_currency"
  },
  "field.fx_trades.notional_amount": {
    "id": "field.fx_trades.notional_amount",
    "type": "dataset_field",
    "name": "notional_amount",
    "description": "Trade notional amount before reporting-currency conversion.",
    "parent": "dataset.fx_trades",
    "dataset": "fx_trades",
    "field": "notional_amount",
    "expression": "notional_amount",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "decimal",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.fx_trading_core.fx_trades.notional_amount": {
    "id": "column.fx_trading_core.fx_trades.notional_amount",
    "type": "column",
    "name": "notional_amount",
    "description": "Trade notional amount before reporting-currency conversion.",
    "parent": "table.fx_trading_core.fx_trades",
    "physical_field": "fx_trading_core.fx_trades.notional_amount",
    "dataset_field": "fx_trades.notional_amount"
  },
  "field.fx_trades.settlement_date": {
    "id": "field.fx_trades.settlement_date",
    "type": "dataset_field",
    "name": "settlement_date",
    "description": "Contractual settlement date agreed for the FX trade.",
    "parent": "dataset.fx_trades",
    "dataset": "fx_trades",
    "field": "settlement_date",
    "expression": "settlement_date",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "date",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.fx_trading_core.fx_trades.settlement_date": {
    "id": "column.fx_trading_core.fx_trades.settlement_date",
    "type": "column",
    "name": "settlement_date",
    "description": "Contractual settlement date agreed for the FX trade.",
    "parent": "table.fx_trading_core.fx_trades",
    "physical_field": "fx_trading_core.fx_trades.settlement_date",
    "dataset_field": "fx_trades.settlement_date"
  },
  "field.fx_trades.rate_id": {
    "id": "field.fx_trades.rate_id",
    "type": "dataset_field",
    "name": "rate_id",
    "description": "Reference identifier of the FX rate used for reporting conversion.",
    "parent": "dataset.fx_trades",
    "dataset": "fx_trades",
    "field": "rate_id",
    "expression": "rate_id",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.fx_trading_core.fx_trades.rate_id": {
    "id": "column.fx_trading_core.fx_trades.rate_id",
    "type": "column",
    "name": "rate_id",
    "description": "Reference identifier of the FX rate used for reporting conversion.",
    "parent": "table.fx_trading_core.fx_trades",
    "physical_field": "fx_trading_core.fx_trades.rate_id",
    "dataset_field": "fx_trades.rate_id"
  },
  "dataset.nostro_accounts": {
    "id": "dataset.nostro_accounts",
    "type": "semantic_dataset",
    "name": "nostro_accounts",
    "description": "Nostro account master records at account grain, carrying account currency, operational status, and owner counterparty used for settlement routing.",
    "source": "nostro_master.nostro_accounts",
    "primary_key": [
      "account_id"
    ],
    "unique_keys": [],
    "fields": [
      {
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
      {
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
      {
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
      {
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
      }
    ],
    "ai_context": {
      "physical_kind": "table"
    },
    "source_tables": [
      "nostro_master.nostro_accounts"
    ],
    "physical_kind": "table",
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ]
  },
  "field.nostro_accounts.account_id": {
    "id": "field.nostro_accounts.account_id",
    "type": "dataset_field",
    "name": "account_id",
    "description": "Stable account identifier for a nostro settlement account.",
    "parent": "dataset.nostro_accounts",
    "dataset": "nostro_accounts",
    "field": "account_id",
    "expression": "account_id",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.nostro_master.nostro_accounts.account_id": {
    "id": "column.nostro_master.nostro_accounts.account_id",
    "type": "column",
    "name": "account_id",
    "description": "Stable account identifier for a nostro settlement account.",
    "parent": "table.nostro_master.nostro_accounts",
    "physical_field": "nostro_master.nostro_accounts.account_id",
    "dataset_field": "nostro_accounts.account_id"
  },
  "field.nostro_accounts.account_currency": {
    "id": "field.nostro_accounts.account_currency",
    "type": "dataset_field",
    "name": "account_currency",
    "description": "Currency in which the nostro account settles cash movements.",
    "parent": "dataset.nostro_accounts",
    "dataset": "nostro_accounts",
    "field": "account_currency",
    "expression": "account_currency",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.nostro_master.nostro_accounts.account_currency": {
    "id": "column.nostro_master.nostro_accounts.account_currency",
    "type": "column",
    "name": "account_currency",
    "description": "Currency in which the nostro account settles cash movements.",
    "parent": "table.nostro_master.nostro_accounts",
    "physical_field": "nostro_master.nostro_accounts.account_currency",
    "dataset_field": "nostro_accounts.account_currency"
  },
  "field.nostro_accounts.account_status": {
    "id": "field.nostro_accounts.account_status",
    "type": "dataset_field",
    "name": "account_status",
    "description": "Operational lifecycle status of the nostro account.",
    "parent": "dataset.nostro_accounts",
    "dataset": "nostro_accounts",
    "field": "account_status",
    "expression": "account_status",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.nostro_master.nostro_accounts.account_status": {
    "id": "column.nostro_master.nostro_accounts.account_status",
    "type": "column",
    "name": "account_status",
    "description": "Operational lifecycle status of the nostro account.",
    "parent": "table.nostro_master.nostro_accounts",
    "physical_field": "nostro_master.nostro_accounts.account_status",
    "dataset_field": "nostro_accounts.account_status"
  },
  "field.nostro_accounts.owner_counterparty_id": {
    "id": "field.nostro_accounts.owner_counterparty_id",
    "type": "dataset_field",
    "name": "owner_counterparty_id",
    "description": "Counterparty identifier responsible for or owning the nostro account.",
    "parent": "dataset.nostro_accounts",
    "dataset": "nostro_accounts",
    "field": "owner_counterparty_id",
    "expression": "owner_counterparty_id",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.nostro_master.nostro_accounts.owner_counterparty_id": {
    "id": "column.nostro_master.nostro_accounts.owner_counterparty_id",
    "type": "column",
    "name": "owner_counterparty_id",
    "description": "Counterparty identifier responsible for or owning the nostro account.",
    "parent": "table.nostro_master.nostro_accounts",
    "physical_field": "nostro_master.nostro_accounts.owner_counterparty_id",
    "dataset_field": "nostro_accounts.owner_counterparty_id"
  },
  "dataset.settlement_instructions": {
    "id": "dataset.settlement_instructions",
    "type": "semantic_dataset",
    "name": "settlement_instructions",
    "description": "FX settlement instruction records at instruction grain, carrying the linked trade, nostro account, settlement currency, amount, value dates, and operational status.",
    "source": "payments_core.settlement_instructions",
    "primary_key": [
      "settlement_instruction_id"
    ],
    "unique_keys": [],
    "fields": [
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      }
    ],
    "ai_context": {
      "physical_kind": "table"
    },
    "source_tables": [
      "payments_core.settlement_instructions"
    ],
    "physical_kind": "table",
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ]
  },
  "field.settlement_instructions.settlement_instruction_id": {
    "id": "field.settlement_instructions.settlement_instruction_id",
    "type": "dataset_field",
    "name": "settlement_instruction_id",
    "description": "Stable operational identifier for the FX settlement instruction.",
    "parent": "dataset.settlement_instructions",
    "dataset": "settlement_instructions",
    "field": "settlement_instruction_id",
    "expression": "settlement_instruction_id",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.payments_core.settlement_instructions.settlement_instruction_id": {
    "id": "column.payments_core.settlement_instructions.settlement_instruction_id",
    "type": "column",
    "name": "settlement_instruction_id",
    "description": "Stable operational identifier for the FX settlement instruction.",
    "parent": "table.payments_core.settlement_instructions",
    "physical_field": "payments_core.settlement_instructions.settlement_instruction_id",
    "dataset_field": "settlement_instructions.settlement_instruction_id"
  },
  "field.settlement_instructions.trade_id": {
    "id": "field.settlement_instructions.trade_id",
    "type": "dataset_field",
    "name": "trade_id",
    "description": "Trade identifier whose cash movement is governed by the settlement instruction.",
    "parent": "dataset.settlement_instructions",
    "dataset": "settlement_instructions",
    "field": "trade_id",
    "expression": "trade_id",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.payments_core.settlement_instructions.trade_id": {
    "id": "column.payments_core.settlement_instructions.trade_id",
    "type": "column",
    "name": "trade_id",
    "description": "Trade identifier whose cash movement is governed by the settlement instruction.",
    "parent": "table.payments_core.settlement_instructions",
    "physical_field": "payments_core.settlement_instructions.trade_id",
    "dataset_field": "settlement_instructions.trade_id"
  },
  "field.settlement_instructions.nostro_account_id": {
    "id": "field.settlement_instructions.nostro_account_id",
    "type": "dataset_field",
    "name": "nostro_account_id",
    "description": "Nostro account identifier used to settle the instruction.",
    "parent": "dataset.settlement_instructions",
    "dataset": "settlement_instructions",
    "field": "nostro_account_id",
    "expression": "nostro_account_id",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.payments_core.settlement_instructions.nostro_account_id": {
    "id": "column.payments_core.settlement_instructions.nostro_account_id",
    "type": "column",
    "name": "nostro_account_id",
    "description": "Nostro account identifier used to settle the instruction.",
    "parent": "table.payments_core.settlement_instructions",
    "physical_field": "payments_core.settlement_instructions.nostro_account_id",
    "dataset_field": "settlement_instructions.nostro_account_id"
  },
  "field.settlement_instructions.settlement_currency": {
    "id": "field.settlement_instructions.settlement_currency",
    "type": "dataset_field",
    "name": "settlement_currency",
    "description": "Currency in which the instruction settles.",
    "parent": "dataset.settlement_instructions",
    "dataset": "settlement_instructions",
    "field": "settlement_currency",
    "expression": "settlement_currency",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.payments_core.settlement_instructions.settlement_currency": {
    "id": "column.payments_core.settlement_instructions.settlement_currency",
    "type": "column",
    "name": "settlement_currency",
    "description": "Currency in which the instruction settles.",
    "parent": "table.payments_core.settlement_instructions",
    "physical_field": "payments_core.settlement_instructions.settlement_currency",
    "dataset_field": "settlement_instructions.settlement_currency"
  },
  "field.settlement_instructions.settlement_amount": {
    "id": "field.settlement_instructions.settlement_amount",
    "type": "dataset_field",
    "name": "settlement_amount",
    "description": "Monetary cash obligation that the instruction must settle in the stated settlement currency.",
    "parent": "dataset.settlement_instructions",
    "dataset": "settlement_instructions",
    "field": "settlement_amount",
    "expression": "settlement_amount",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "decimal",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.payments_core.settlement_instructions.settlement_amount": {
    "id": "column.payments_core.settlement_instructions.settlement_amount",
    "type": "column",
    "name": "settlement_amount",
    "description": "Monetary cash obligation that the instruction must settle in the stated settlement currency.",
    "parent": "table.payments_core.settlement_instructions",
    "physical_field": "payments_core.settlement_instructions.settlement_amount",
    "dataset_field": "settlement_instructions.settlement_amount"
  },
  "field.settlement_instructions.settlement_value_date": {
    "id": "field.settlement_instructions.settlement_value_date",
    "type": "dataset_field",
    "name": "settlement_value_date",
    "description": "Value date expected for settlement posting.",
    "parent": "dataset.settlement_instructions",
    "dataset": "settlement_instructions",
    "field": "settlement_value_date",
    "expression": "settlement_value_date",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "date",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.payments_core.settlement_instructions.settlement_value_date": {
    "id": "column.payments_core.settlement_instructions.settlement_value_date",
    "type": "column",
    "name": "settlement_value_date",
    "description": "Value date expected for settlement posting.",
    "parent": "table.payments_core.settlement_instructions",
    "physical_field": "payments_core.settlement_instructions.settlement_value_date",
    "dataset_field": "settlement_instructions.settlement_value_date"
  },
  "field.settlement_instructions.expected_settlement_date": {
    "id": "field.settlement_instructions.expected_settlement_date",
    "type": "dataset_field",
    "name": "expected_settlement_date",
    "description": "Date by which the instruction should complete settlement.",
    "parent": "dataset.settlement_instructions",
    "dataset": "settlement_instructions",
    "field": "expected_settlement_date",
    "expression": "expected_settlement_date",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "date",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.payments_core.settlement_instructions.expected_settlement_date": {
    "id": "column.payments_core.settlement_instructions.expected_settlement_date",
    "type": "column",
    "name": "expected_settlement_date",
    "description": "Date by which the instruction should complete settlement.",
    "parent": "table.payments_core.settlement_instructions",
    "physical_field": "payments_core.settlement_instructions.expected_settlement_date",
    "dataset_field": "settlement_instructions.expected_settlement_date"
  },
  "field.settlement_instructions.actual_settlement_date": {
    "id": "field.settlement_instructions.actual_settlement_date",
    "type": "dataset_field",
    "name": "actual_settlement_date",
    "description": "Date on which the instruction actually completed settlement.",
    "parent": "dataset.settlement_instructions",
    "dataset": "settlement_instructions",
    "field": "actual_settlement_date",
    "expression": "actual_settlement_date",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "date",
      "nullable": true
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.payments_core.settlement_instructions.actual_settlement_date": {
    "id": "column.payments_core.settlement_instructions.actual_settlement_date",
    "type": "column",
    "name": "actual_settlement_date",
    "description": "Date on which the instruction actually completed settlement.",
    "parent": "table.payments_core.settlement_instructions",
    "physical_field": "payments_core.settlement_instructions.actual_settlement_date",
    "dataset_field": "settlement_instructions.actual_settlement_date"
  },
  "field.settlement_instructions.settlement_status": {
    "id": "field.settlement_instructions.settlement_status",
    "type": "dataset_field",
    "name": "settlement_status",
    "description": "Operational status assigned to the settlement instruction.",
    "parent": "dataset.settlement_instructions",
    "dataset": "settlement_instructions",
    "field": "settlement_status",
    "expression": "settlement_status",
    "dimension": {},
    "label": "",
    "ai_context": {
      "physical_type": "string",
      "nullable": false
    },
    "custom_extensions": [],
    "semantic_model": "FxSettlementSemanticModel",
    "semantic_models": [
      "FxSettlementSemanticModel"
    ],
    "ontology": "FxSettlementMonitoringOntology",
    "ontologies": [
      "FxSettlementMonitoringOntology"
    ],
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
    }
  },
  "column.payments_core.settlement_instructions.settlement_status": {
    "id": "column.payments_core.settlement_instructions.settlement_status",
    "type": "column",
    "name": "settlement_status",
    "description": "Operational status assigned to the settlement instruction.",
    "parent": "table.payments_core.settlement_instructions",
    "physical_field": "payments_core.settlement_instructions.settlement_status",
    "dataset_field": "settlement_instructions.settlement_status"
  },
  "metric.report_currency_exposure_amount": {
    "id": "metric.report_currency_exposure_amount",
    "type": "semantic_metric",
    "name": "report_currency_exposure_amount",
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
  },
  "metric.settlement_delay_days": {
    "id": "metric.settlement_delay_days",
    "type": "semantic_metric",
    "name": "settlement_delay_days",
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
  },
  "requirement.item_a172b51eff": {
    "id": "requirement.item_a172b51eff",
    "type": "regulatory_requirement",
    "name": "外汇结算监测报送需求",
    "description": "监管/BRD要求每日生成外汇交易结算监测明细，用于识别每笔外汇交易的交易对手、结算指令、结算金额、币种、结算状态、折算后报送币种敞口金额以及结算延迟情况。需求还要求在T+1上午前完成数据生成、运营复核、异常说明和留痕保存；非数据类的复核、留痕和异常处置要求记录在本说明中，不强行建模为字段。\n",
    "source": "Treasury FX Settlement Monitoring BRD v1.0 section 2.4",
    "SLA": "Daily T+1 before 10:00 local time; operations review and exception evidence retained for audit.",
    "semantic_scope": {
      "concepts": [
        {
          "name": "FxTrade",
          "description": "需求需要外汇交易作为监测主对象，用于表达交易标识、交易对手、币种、金额和折算敞口口径。"
        },
        {
          "name": "SettlementInstruction",
          "description": "需求需要结算指令作为运营执行对象，用于表达结算状态、结算金额、结算币种和结算延迟情况。"
        },
        {
          "name": "Counterparty",
          "description": "需求需要交易对手信息，用于识别结算风险责任主体并支持分组复核。"
        },
        {
          "name": "NostroAccount",
          "description": "需求需要nostro账户信息，用于说明结算资金路径和账户可用性复核。"
        }
      ],
      "required_fields": [
        {
          "name": "交易标识",
          "description": "需求需要交易标识，用于唯一识别每笔外汇交易并支持报表行级对账。",
          "semantic_reference": "FxTrade.has_TransactionIdentifier",
          "required": true
        },
        {
          "name": "结算指令标识",
          "description": "需求需要结算指令标识，用于定位执行结算的运营指令并追踪处理状态。",
          "semantic_reference": "SettlementInstruction.has_InstructionIdentifier",
          "required": true
        },
        {
          "name": "交易对手标识",
          "description": "需求需要交易对手标识，用于识别交易责任主体并支持风险分组。",
          "semantic_reference": "Counterparty.has_CounterpartyIdentifier",
          "required": true
        },
        {
          "name": "结算币种",
          "description": "需求需要结算币种，用于说明现金实际交收的币种口径。",
          "semantic_reference": "SettlementInstruction.has_SettlementCurrency",
          "required": true
        },
        {
          "name": "结算金额",
          "description": "需求需要结算金额，用于展示外汇结算现金金额并支持金额级对账。",
          "semantic_reference": "SettlementInstruction.has_SettlementAmount",
          "required": true
        },
        {
          "name": "结算状态",
          "description": "需求需要结算状态，用于识别未完成、失败或已完成的结算指令。",
          "semantic_reference": "SettlementInstruction.has_SettlementStatus",
          "required": true
        }
      ],
      "controls": [
        {
          "name": "settlement_status_present",
          "target": "SettlementInstruction.has_SettlementStatus",
          "rule": "Settlement status must be present for every monitored settlement instruction."
        }
      ]
    },
    "required_fields": [
      {
        "name": "交易标识",
        "description": "需求需要交易标识，用于唯一识别每笔外汇交易并支持报表行级对账。",
        "semantic_reference": "FxTrade.has_TransactionIdentifier",
        "required": true
      },
      {
        "name": "结算指令标识",
        "description": "需求需要结算指令标识，用于定位执行结算的运营指令并追踪处理状态。",
        "semantic_reference": "SettlementInstruction.has_InstructionIdentifier",
        "required": true
      },
      {
        "name": "交易对手标识",
        "description": "需求需要交易对手标识，用于识别交易责任主体并支持风险分组。",
        "semantic_reference": "Counterparty.has_CounterpartyIdentifier",
        "required": true
      },
      {
        "name": "结算币种",
        "description": "需求需要结算币种，用于说明现金实际交收的币种口径。",
        "semantic_reference": "SettlementInstruction.has_SettlementCurrency",
        "required": true
      },
      {
        "name": "结算金额",
        "description": "需求需要结算金额，用于展示外汇结算现金金额并支持金额级对账。",
        "semantic_reference": "SettlementInstruction.has_SettlementAmount",
        "required": true
      },
      {
        "name": "结算状态",
        "description": "需求需要结算状态，用于识别未完成、失败或已完成的结算指令。",
        "semantic_reference": "SettlementInstruction.has_SettlementStatus",
        "required": true
      }
    ],
    "calculations": [
      {
        "name": "折算后报送币种敞口金额",
        "description": "需求需要将外汇交易名义金额按汇率折算为报送币种金额，用于衡量结算风险敞口。",
        "output": "FxTrade.has_ReportCurrencyExposureAmount",
        "inputs": [
          "FxTrade.has_NotionalAmount",
          "FxRate.has_RateValue"
        ],
        "expression": "FxTrade.has_NotionalAmount * FxRate.has_RateValue"
      },
      {
        "name": "结算延迟天数",
        "description": "需求需要计算预计结算日和实际结算日之间的延迟天数，用于识别结算超时风险。",
        "output": "SettlementInstruction.has_SettlementDelayDays",
        "inputs": [
          "SettlementInstruction.has_ExpectedSettlementDate",
          "SettlementInstruction.has_ActualSettlementDate"
        ],
        "expression": "days_between(SettlementInstruction.has_ExpectedSettlementDate, SettlementInstruction.has_ActualSettlementDate)"
      }
    ],
    "controls": []
  },
  "requirement_item..FxTrade.has_TransactionIdentifier": {
    "id": "requirement_item..FxTrade.has_TransactionIdentifier",
    "type": "requirement_semantic_item",
    "name": "交易标识",
    "description": "需求需要交易标识，用于唯一识别每笔外汇交易并支持报表行级对账。",
    "parent": "requirement.item_a172b51eff",
    "semantic_reference": "FxTrade.has_TransactionIdentifier",
    "required_field": {
      "name": "交易标识",
      "description": "需求需要交易标识，用于唯一识别每笔外汇交易并支持报表行级对账。",
      "semantic_reference": "FxTrade.has_TransactionIdentifier",
      "required": true
    }
  },
  "requirement_item..SettlementInstruction.has_InstructionIdentifier": {
    "id": "requirement_item..SettlementInstruction.has_InstructionIdentifier",
    "type": "requirement_semantic_item",
    "name": "结算指令标识",
    "description": "需求需要结算指令标识，用于定位执行结算的运营指令并追踪处理状态。",
    "parent": "requirement.item_a172b51eff",
    "semantic_reference": "SettlementInstruction.has_InstructionIdentifier",
    "required_field": {
      "name": "结算指令标识",
      "description": "需求需要结算指令标识，用于定位执行结算的运营指令并追踪处理状态。",
      "semantic_reference": "SettlementInstruction.has_InstructionIdentifier",
      "required": true
    }
  },
  "requirement_item..Counterparty.has_CounterpartyIdentifier": {
    "id": "requirement_item..Counterparty.has_CounterpartyIdentifier",
    "type": "requirement_semantic_item",
    "name": "交易对手标识",
    "description": "需求需要交易对手标识，用于识别交易责任主体并支持风险分组。",
    "parent": "requirement.item_a172b51eff",
    "semantic_reference": "Counterparty.has_CounterpartyIdentifier",
    "required_field": {
      "name": "交易对手标识",
      "description": "需求需要交易对手标识，用于识别交易责任主体并支持风险分组。",
      "semantic_reference": "Counterparty.has_CounterpartyIdentifier",
      "required": true
    }
  },
  "requirement_item..SettlementInstruction.has_SettlementCurrency": {
    "id": "requirement_item..SettlementInstruction.has_SettlementCurrency",
    "type": "requirement_semantic_item",
    "name": "结算币种",
    "description": "需求需要结算币种，用于说明现金实际交收的币种口径。",
    "parent": "requirement.item_a172b51eff",
    "semantic_reference": "SettlementInstruction.has_SettlementCurrency",
    "required_field": {
      "name": "结算币种",
      "description": "需求需要结算币种，用于说明现金实际交收的币种口径。",
      "semantic_reference": "SettlementInstruction.has_SettlementCurrency",
      "required": true
    }
  },
  "requirement_item..SettlementInstruction.has_SettlementAmount": {
    "id": "requirement_item..SettlementInstruction.has_SettlementAmount",
    "type": "requirement_semantic_item",
    "name": "结算金额",
    "description": "需求需要结算金额，用于展示外汇结算现金金额并支持金额级对账。",
    "parent": "requirement.item_a172b51eff",
    "semantic_reference": "SettlementInstruction.has_SettlementAmount",
    "required_field": {
      "name": "结算金额",
      "description": "需求需要结算金额，用于展示外汇结算现金金额并支持金额级对账。",
      "semantic_reference": "SettlementInstruction.has_SettlementAmount",
      "required": true
    }
  },
  "requirement_item..SettlementInstruction.has_SettlementStatus": {
    "id": "requirement_item..SettlementInstruction.has_SettlementStatus",
    "type": "requirement_semantic_item",
    "name": "结算状态",
    "description": "需求需要结算状态，用于识别未完成、失败或已完成的结算指令。",
    "parent": "requirement.item_a172b51eff",
    "semantic_reference": "SettlementInstruction.has_SettlementStatus",
    "required_field": {
      "name": "结算状态",
      "description": "需求需要结算状态，用于识别未完成、失败或已完成的结算指令。",
      "semantic_reference": "SettlementInstruction.has_SettlementStatus",
      "required": true
    }
  },
  "report_impl.item_e781d082f3": {
    "id": "report_impl.item_e781d082f3",
    "type": "report_implementation",
    "name": "每日外汇结算监测数据逻辑",
    "description": "说明每日外汇结算监测明细字段如何从外汇交易、结算指令、交易对手、nostro账户和汇率数据中取数、计算并满足需求口径；该逻辑不创建或拥有物理表。",
    "implements": "外汇结算监测报送需求",
    "field_mappings": [
      {
        "name": "交易标识逻辑",
        "dataset": "fx_settlement_monitoring_lines",
        "dataset_field": "trade_id",
        "description": "数据逻辑说明监测明细字段 trade_id 如何承载交易标识需求，并从外汇交易数据取得交易主键。",
        "requirement_field": "交易标识",
        "source_field": "fx_trades.trade_id",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "fx_trades.trade_id"
            }
          ]
        }
      },
      {
        "name": "结算指令标识逻辑",
        "dataset": "fx_settlement_monitoring_lines",
        "dataset_field": "settlement_instruction_id",
        "description": "数据逻辑说明监测明细字段 settlement_instruction_id 如何承载结算指令标识需求，并从结算指令数据取得运营指令主键。",
        "requirement_field": "结算指令标识",
        "source_field": "settlement_instructions.settlement_instruction_id",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "settlement_instructions.settlement_instruction_id"
            }
          ]
        }
      },
      {
        "name": "交易对手标识逻辑",
        "dataset": "fx_settlement_monitoring_lines",
        "dataset_field": "counterparty_id",
        "description": "数据逻辑说明监测明细字段 counterparty_id 如何承载交易对手标识需求，并使用交易上的交易对手引用。",
        "requirement_field": "交易对手标识",
        "source_field": "fx_trades.counterparty_id",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "fx_trades.counterparty_id"
            }
          ]
        }
      },
      {
        "name": "结算币种逻辑",
        "dataset": "fx_settlement_monitoring_lines",
        "dataset_field": "settlement_currency",
        "description": "数据逻辑说明监测明细字段 settlement_currency 如何承载结算币种需求，并从结算指令取得实际交收币种。",
        "requirement_field": "结算币种",
        "source_field": "settlement_instructions.settlement_currency",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "settlement_instructions.settlement_currency"
            }
          ]
        }
      },
      {
        "name": "结算金额逻辑",
        "dataset": "fx_settlement_monitoring_lines",
        "dataset_field": "settlement_amount",
        "description": "数据逻辑说明监测明细字段 settlement_amount 如何承载结算金额需求，并从结算指令取得现金交收金额。",
        "requirement_field": "结算金额",
        "source_field": "settlement_instructions.settlement_amount",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "settlement_instructions.settlement_amount"
            }
          ]
        }
      },
      {
        "name": "结算状态逻辑",
        "dataset": "fx_settlement_monitoring_lines",
        "dataset_field": "settlement_status",
        "description": "数据逻辑说明监测明细字段 settlement_status 如何承载结算状态需求，并从结算指令取得运营处理状态。",
        "requirement_field": "结算状态",
        "source_field": "settlement_instructions.settlement_status",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "settlement_instructions.settlement_status"
            }
          ]
        }
      },
      {
        "name": "折算后报送币种敞口金额逻辑",
        "dataset": "fx_settlement_monitoring_lines",
        "dataset_field": "exposure_amount_report_currency",
        "description": "数据逻辑说明监测明细字段 exposure_amount_report_currency 如何按交易名义金额和汇率计算报送币种敞口金额。",
        "requirement_field": "折算后报送币种敞口金额",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "fx_trades.notional_amount * fx_rates.rate_value"
            }
          ]
        }
      },
      {
        "name": "结算延迟天数逻辑",
        "dataset": "fx_settlement_monitoring_lines",
        "dataset_field": "settlement_delay_days",
        "description": "数据逻辑说明监测明细字段 settlement_delay_days 如何通过预计结算日和实际结算日计算延迟天数。",
        "requirement_field": "结算延迟天数",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "DATEDIFF(day, settlement_instructions.expected_settlement_date, settlement_instructions.actual_settlement_date)"
            }
          ]
        }
      }
    ],
    "source_fields": [
      "fx_trades.trade_id",
      "fx_trades.counterparty_id",
      "fx_trades.notional_amount",
      "fx_rates.rate_value",
      "settlement_instructions.settlement_instruction_id",
      "settlement_instructions.settlement_currency",
      "settlement_instructions.settlement_amount",
      "settlement_instructions.settlement_status",
      "settlement_instructions.expected_settlement_date",
      "settlement_instructions.actual_settlement_date"
    ]
  },
  "implementation_field.fx_settlement_monitoring_lines.trade_id": {
    "id": "implementation_field.fx_settlement_monitoring_lines.trade_id",
    "type": "implementation_field_binding",
    "name": "交易标识逻辑",
    "description": "数据逻辑说明监测明细字段 trade_id 如何承载交易标识需求，并从外汇交易数据取得交易主键。",
    "parent": "report_impl.item_e781d082f3",
    "implementation_field": {
      "name": "交易标识逻辑",
      "dataset": "fx_settlement_monitoring_lines",
      "dataset_field": "trade_id",
      "description": "数据逻辑说明监测明细字段 trade_id 如何承载交易标识需求，并从外汇交易数据取得交易主键。",
      "requirement_field": "交易标识",
      "source_field": "fx_trades.trade_id",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "fx_trades.trade_id"
          }
        ]
      }
    }
  },
  "implementation_field.fx_settlement_monitoring_lines.settlement_instruction_id": {
    "id": "implementation_field.fx_settlement_monitoring_lines.settlement_instruction_id",
    "type": "implementation_field_binding",
    "name": "结算指令标识逻辑",
    "description": "数据逻辑说明监测明细字段 settlement_instruction_id 如何承载结算指令标识需求，并从结算指令数据取得运营指令主键。",
    "parent": "report_impl.item_e781d082f3",
    "implementation_field": {
      "name": "结算指令标识逻辑",
      "dataset": "fx_settlement_monitoring_lines",
      "dataset_field": "settlement_instruction_id",
      "description": "数据逻辑说明监测明细字段 settlement_instruction_id 如何承载结算指令标识需求，并从结算指令数据取得运营指令主键。",
      "requirement_field": "结算指令标识",
      "source_field": "settlement_instructions.settlement_instruction_id",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "settlement_instructions.settlement_instruction_id"
          }
        ]
      }
    }
  },
  "implementation_field.fx_settlement_monitoring_lines.counterparty_id": {
    "id": "implementation_field.fx_settlement_monitoring_lines.counterparty_id",
    "type": "implementation_field_binding",
    "name": "交易对手标识逻辑",
    "description": "数据逻辑说明监测明细字段 counterparty_id 如何承载交易对手标识需求，并使用交易上的交易对手引用。",
    "parent": "report_impl.item_e781d082f3",
    "implementation_field": {
      "name": "交易对手标识逻辑",
      "dataset": "fx_settlement_monitoring_lines",
      "dataset_field": "counterparty_id",
      "description": "数据逻辑说明监测明细字段 counterparty_id 如何承载交易对手标识需求，并使用交易上的交易对手引用。",
      "requirement_field": "交易对手标识",
      "source_field": "fx_trades.counterparty_id",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "fx_trades.counterparty_id"
          }
        ]
      }
    }
  },
  "implementation_field.fx_settlement_monitoring_lines.settlement_currency": {
    "id": "implementation_field.fx_settlement_monitoring_lines.settlement_currency",
    "type": "implementation_field_binding",
    "name": "结算币种逻辑",
    "description": "数据逻辑说明监测明细字段 settlement_currency 如何承载结算币种需求，并从结算指令取得实际交收币种。",
    "parent": "report_impl.item_e781d082f3",
    "implementation_field": {
      "name": "结算币种逻辑",
      "dataset": "fx_settlement_monitoring_lines",
      "dataset_field": "settlement_currency",
      "description": "数据逻辑说明监测明细字段 settlement_currency 如何承载结算币种需求，并从结算指令取得实际交收币种。",
      "requirement_field": "结算币种",
      "source_field": "settlement_instructions.settlement_currency",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "settlement_instructions.settlement_currency"
          }
        ]
      }
    }
  },
  "implementation_field.fx_settlement_monitoring_lines.settlement_amount": {
    "id": "implementation_field.fx_settlement_monitoring_lines.settlement_amount",
    "type": "implementation_field_binding",
    "name": "结算金额逻辑",
    "description": "数据逻辑说明监测明细字段 settlement_amount 如何承载结算金额需求，并从结算指令取得现金交收金额。",
    "parent": "report_impl.item_e781d082f3",
    "implementation_field": {
      "name": "结算金额逻辑",
      "dataset": "fx_settlement_monitoring_lines",
      "dataset_field": "settlement_amount",
      "description": "数据逻辑说明监测明细字段 settlement_amount 如何承载结算金额需求，并从结算指令取得现金交收金额。",
      "requirement_field": "结算金额",
      "source_field": "settlement_instructions.settlement_amount",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "settlement_instructions.settlement_amount"
          }
        ]
      }
    }
  },
  "implementation_field.fx_settlement_monitoring_lines.settlement_status": {
    "id": "implementation_field.fx_settlement_monitoring_lines.settlement_status",
    "type": "implementation_field_binding",
    "name": "结算状态逻辑",
    "description": "数据逻辑说明监测明细字段 settlement_status 如何承载结算状态需求，并从结算指令取得运营处理状态。",
    "parent": "report_impl.item_e781d082f3",
    "implementation_field": {
      "name": "结算状态逻辑",
      "dataset": "fx_settlement_monitoring_lines",
      "dataset_field": "settlement_status",
      "description": "数据逻辑说明监测明细字段 settlement_status 如何承载结算状态需求，并从结算指令取得运营处理状态。",
      "requirement_field": "结算状态",
      "source_field": "settlement_instructions.settlement_status",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "settlement_instructions.settlement_status"
          }
        ]
      }
    }
  },
  "implementation_field.fx_settlement_monitoring_lines.exposure_amount_report_currency": {
    "id": "implementation_field.fx_settlement_monitoring_lines.exposure_amount_report_currency",
    "type": "implementation_field_binding",
    "name": "折算后报送币种敞口金额逻辑",
    "description": "数据逻辑说明监测明细字段 exposure_amount_report_currency 如何按交易名义金额和汇率计算报送币种敞口金额。",
    "parent": "report_impl.item_e781d082f3",
    "implementation_field": {
      "name": "折算后报送币种敞口金额逻辑",
      "dataset": "fx_settlement_monitoring_lines",
      "dataset_field": "exposure_amount_report_currency",
      "description": "数据逻辑说明监测明细字段 exposure_amount_report_currency 如何按交易名义金额和汇率计算报送币种敞口金额。",
      "requirement_field": "折算后报送币种敞口金额",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "fx_trades.notional_amount * fx_rates.rate_value"
          }
        ]
      }
    }
  },
  "implementation_field.fx_settlement_monitoring_lines.settlement_delay_days": {
    "id": "implementation_field.fx_settlement_monitoring_lines.settlement_delay_days",
    "type": "implementation_field_binding",
    "name": "结算延迟天数逻辑",
    "description": "数据逻辑说明监测明细字段 settlement_delay_days 如何通过预计结算日和实际结算日计算延迟天数。",
    "parent": "report_impl.item_e781d082f3",
    "implementation_field": {
      "name": "结算延迟天数逻辑",
      "dataset": "fx_settlement_monitoring_lines",
      "dataset_field": "settlement_delay_days",
      "description": "数据逻辑说明监测明细字段 settlement_delay_days 如何通过预计结算日和实际结算日计算延迟天数。",
      "requirement_field": "结算延迟天数",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "DATEDIFF(day, settlement_instructions.expected_settlement_date, settlement_instructions.actual_settlement_date)"
          }
        ]
      }
    }
  }
};
window.OSI_CATALOG_DATA = window.CATALOG_DATA;
