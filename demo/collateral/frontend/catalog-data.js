window.CATALOG_DATA = {
  "concept.AccountData": {
    "id": "concept.AccountData",
    "type": "base_entity_concept",
    "name": "AccountData",
    "description": "Base concept for account-like records with common identifiers and status fields.",
    "concept": {
      "name": "AccountData",
      "type": "EntityType",
      "description": "Base concept for account-like records with common identifiers and status fields.",
      "identify_by": [
        "has_AccountIdentifier"
      ]
    },
    "relationships": [
      {
        "name": "has_AccountIdentifier",
        "roles": [
          {
            "concept": "AccountIdentifier"
          }
        ],
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{AccountData} has account identifier {AccountIdentifier}"
        ],
        "description": "Identifier common to account-like records."
      },
      {
        "name": "has_AccountStatus",
        "roles": [
          {
            "concept": "StatusCode"
          }
        ],
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{AccountData} has account status {StatusCode}"
        ],
        "description": "Status common to account-like records."
      }
    ],
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
      "roles": [
        {
          "concept": "AccountIdentifier"
        }
      ],
      "multiplicity": "OneToOne",
      "verbalizes": [
        "{AccountData} has account identifier {AccountIdentifier}"
      ],
      "description": "Identifier common to account-like records."
    },
    "inherited": false,
    "inherited_from": ""
  },
  "value.AccountData.has_AccountStatus": {
    "id": "value.AccountData.has_AccountStatus",
    "type": "value_type_property",
    "name": "StatusCode",
    "description": "Status common to account-like records.",
    "parent": "concept.AccountData",
    "data_type": "StatusCode",
    "value_concept": "StatusCode",
    "field_name": "has_AccountStatus",
    "relationship_name": "has_AccountStatus",
    "relationship": {
      "name": "has_AccountStatus",
      "roles": [
        {
          "concept": "StatusCode"
        }
      ],
      "multiplicity": "ManyToOne",
      "verbalizes": [
        "{AccountData} has account status {StatusCode}"
      ],
      "description": "Status common to account-like records."
    },
    "inherited": false,
    "inherited_from": ""
  },
  "concept.CollateralAssetData": {
    "id": "concept.CollateralAssetData",
    "type": "base_entity_concept",
    "name": "CollateralAssetData",
    "description": "Base concept for collateral asset records with common collateral identifiers and classification fields.",
    "concept": {
      "name": "CollateralAssetData",
      "type": "EntityType",
      "description": "Base concept for collateral asset records with common collateral identifiers and classification fields.",
      "identify_by": [
        "has_CollateralIdentifier"
      ]
    },
    "relationships": [
      {
        "name": "has_CollateralIdentifier",
        "roles": [
          {
            "concept": "CollateralIdentifier"
          }
        ],
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{CollateralAssetData} has collateral identifier {CollateralIdentifier}"
        ],
        "description": "Identifier common to collateral asset records."
      },
      {
        "name": "has_AssetType",
        "roles": [
          {
            "concept": "AssetType"
          }
        ],
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralAssetData} has asset type {AssetType}"
        ],
        "description": "Asset type common to collateral asset records."
      },
      {
        "name": "has_AssetCurrency",
        "roles": [
          {
            "concept": "CurrencyCode"
          }
        ],
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralAssetData} has currency {CurrencyCode}"
        ],
        "description": "Currency common to collateral asset records."
      },
      {
        "name": "has_IssuerCountry",
        "roles": [
          {
            "concept": "CountryCode"
          }
        ],
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralAssetData} has issuer country {CountryCode}"
        ],
        "description": "Issuer country common to collateral asset records."
      }
    ],
    "mappings": []
  },
  "value.CollateralAssetData.has_CollateralIdentifier": {
    "id": "value.CollateralAssetData.has_CollateralIdentifier",
    "type": "value_type_property",
    "name": "CollateralIdentifier",
    "description": "Identifier common to collateral asset records.",
    "parent": "concept.CollateralAssetData",
    "data_type": "CollateralIdentifier",
    "value_concept": "CollateralIdentifier",
    "field_name": "has_CollateralIdentifier",
    "relationship_name": "has_CollateralIdentifier",
    "relationship": {
      "name": "has_CollateralIdentifier",
      "roles": [
        {
          "concept": "CollateralIdentifier"
        }
      ],
      "multiplicity": "OneToOne",
      "verbalizes": [
        "{CollateralAssetData} has collateral identifier {CollateralIdentifier}"
      ],
      "description": "Identifier common to collateral asset records."
    },
    "inherited": false,
    "inherited_from": ""
  },
  "value.CollateralAssetData.has_AssetType": {
    "id": "value.CollateralAssetData.has_AssetType",
    "type": "value_type_property",
    "name": "AssetType",
    "description": "Asset type common to collateral asset records.",
    "parent": "concept.CollateralAssetData",
    "data_type": "AssetType",
    "value_concept": "AssetType",
    "field_name": "has_AssetType",
    "relationship_name": "has_AssetType",
    "relationship": {
      "name": "has_AssetType",
      "roles": [
        {
          "concept": "AssetType"
        }
      ],
      "multiplicity": "ManyToOne",
      "verbalizes": [
        "{CollateralAssetData} has asset type {AssetType}"
      ],
      "description": "Asset type common to collateral asset records."
    },
    "inherited": false,
    "inherited_from": ""
  },
  "value.CollateralAssetData.has_AssetCurrency": {
    "id": "value.CollateralAssetData.has_AssetCurrency",
    "type": "value_type_property",
    "name": "CurrencyCode",
    "description": "Currency common to collateral asset records.",
    "parent": "concept.CollateralAssetData",
    "data_type": "CurrencyCode",
    "value_concept": "CurrencyCode",
    "field_name": "has_AssetCurrency",
    "relationship_name": "has_AssetCurrency",
    "relationship": {
      "name": "has_AssetCurrency",
      "roles": [
        {
          "concept": "CurrencyCode"
        }
      ],
      "multiplicity": "ManyToOne",
      "verbalizes": [
        "{CollateralAssetData} has currency {CurrencyCode}"
      ],
      "description": "Currency common to collateral asset records."
    },
    "inherited": false,
    "inherited_from": ""
  },
  "value.CollateralAssetData.has_IssuerCountry": {
    "id": "value.CollateralAssetData.has_IssuerCountry",
    "type": "value_type_property",
    "name": "CountryCode",
    "description": "Issuer country common to collateral asset records.",
    "parent": "concept.CollateralAssetData",
    "data_type": "CountryCode",
    "value_concept": "CountryCode",
    "field_name": "has_IssuerCountry",
    "relationship_name": "has_IssuerCountry",
    "relationship": {
      "name": "has_IssuerCountry",
      "roles": [
        {
          "concept": "CountryCode"
        }
      ],
      "multiplicity": "ManyToOne",
      "verbalizes": [
        "{CollateralAssetData} has issuer country {CountryCode}"
      ],
      "description": "Issuer country common to collateral asset records."
    },
    "inherited": false,
    "inherited_from": ""
  },
  "concept.CounterpartyData": {
    "id": "concept.CounterpartyData",
    "type": "base_entity_concept",
    "name": "CounterpartyData",
    "description": "Base concept for counterparty-like records with legal identity and regulatory classification fields.",
    "concept": {
      "name": "CounterpartyData",
      "type": "EntityType",
      "description": "Base concept for counterparty-like records with legal identity and regulatory classification fields.",
      "identify_by": [
        "has_CounterpartyIdentifier"
      ]
    },
    "relationships": [
      {
        "name": "has_CounterpartyIdentifier",
        "roles": [
          {
            "concept": "CounterpartyIdentifier"
          }
        ],
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{CounterpartyData} has counterparty identifier {CounterpartyIdentifier}"
        ],
        "description": "Identifier common to counterparty-like records."
      },
      {
        "name": "has_LegalName",
        "roles": [
          {
            "concept": "LegalName"
          }
        ],
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CounterpartyData} has legal name {LegalName}"
        ],
        "description": "Legal name common to counterparty-like records."
      },
      {
        "name": "has_DomicileCountry",
        "roles": [
          {
            "concept": "CountryCode"
          }
        ],
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CounterpartyData} has domicile country {CountryCode}"
        ],
        "description": "Domicile country common to counterparty-like records."
      },
      {
        "name": "has_RegulatorySegment",
        "roles": [
          {
            "concept": "RegulatorySegment"
          }
        ],
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CounterpartyData} has regulatory segment {RegulatorySegment}"
        ],
        "description": "Regulatory segment common to counterparty-like records."
      }
    ],
    "mappings": []
  },
  "value.CounterpartyData.has_CounterpartyIdentifier": {
    "id": "value.CounterpartyData.has_CounterpartyIdentifier",
    "type": "value_type_property",
    "name": "CounterpartyIdentifier",
    "description": "Identifier common to counterparty-like records.",
    "parent": "concept.CounterpartyData",
    "data_type": "CounterpartyIdentifier",
    "value_concept": "CounterpartyIdentifier",
    "field_name": "has_CounterpartyIdentifier",
    "relationship_name": "has_CounterpartyIdentifier",
    "relationship": {
      "name": "has_CounterpartyIdentifier",
      "roles": [
        {
          "concept": "CounterpartyIdentifier"
        }
      ],
      "multiplicity": "OneToOne",
      "verbalizes": [
        "{CounterpartyData} has counterparty identifier {CounterpartyIdentifier}"
      ],
      "description": "Identifier common to counterparty-like records."
    },
    "inherited": false,
    "inherited_from": ""
  },
  "value.CounterpartyData.has_LegalName": {
    "id": "value.CounterpartyData.has_LegalName",
    "type": "value_type_property",
    "name": "LegalName",
    "description": "Legal name common to counterparty-like records.",
    "parent": "concept.CounterpartyData",
    "data_type": "LegalName",
    "value_concept": "LegalName",
    "field_name": "has_LegalName",
    "relationship_name": "has_LegalName",
    "relationship": {
      "name": "has_LegalName",
      "roles": [
        {
          "concept": "LegalName"
        }
      ],
      "multiplicity": "ManyToOne",
      "verbalizes": [
        "{CounterpartyData} has legal name {LegalName}"
      ],
      "description": "Legal name common to counterparty-like records."
    },
    "inherited": false,
    "inherited_from": ""
  },
  "value.CounterpartyData.has_DomicileCountry": {
    "id": "value.CounterpartyData.has_DomicileCountry",
    "type": "value_type_property",
    "name": "CountryCode",
    "description": "Domicile country common to counterparty-like records.",
    "parent": "concept.CounterpartyData",
    "data_type": "CountryCode",
    "value_concept": "CountryCode",
    "field_name": "has_DomicileCountry",
    "relationship_name": "has_DomicileCountry",
    "relationship": {
      "name": "has_DomicileCountry",
      "roles": [
        {
          "concept": "CountryCode"
        }
      ],
      "multiplicity": "ManyToOne",
      "verbalizes": [
        "{CounterpartyData} has domicile country {CountryCode}"
      ],
      "description": "Domicile country common to counterparty-like records."
    },
    "inherited": false,
    "inherited_from": ""
  },
  "value.CounterpartyData.has_RegulatorySegment": {
    "id": "value.CounterpartyData.has_RegulatorySegment",
    "type": "value_type_property",
    "name": "RegulatorySegment",
    "description": "Regulatory segment common to counterparty-like records.",
    "parent": "concept.CounterpartyData",
    "data_type": "RegulatorySegment",
    "value_concept": "RegulatorySegment",
    "field_name": "has_RegulatorySegment",
    "relationship_name": "has_RegulatorySegment",
    "relationship": {
      "name": "has_RegulatorySegment",
      "roles": [
        {
          "concept": "RegulatorySegment"
        }
      ],
      "multiplicity": "ManyToOne",
      "verbalizes": [
        "{CounterpartyData} has regulatory segment {RegulatorySegment}"
      ],
      "description": "Regulatory segment common to counterparty-like records."
    },
    "inherited": false,
    "inherited_from": ""
  },
  "concept.ValuationData": {
    "id": "concept.ValuationData",
    "type": "base_entity_concept",
    "name": "ValuationData",
    "description": "Base concept for valuation records with common valuation identity and date fields.",
    "concept": {
      "name": "ValuationData",
      "type": "EntityType",
      "description": "Base concept for valuation records with common valuation identity and date fields.",
      "identify_by": [
        "has_ValuationIdentifier"
      ]
    },
    "relationships": [
      {
        "name": "has_ValuationIdentifier",
        "roles": [
          {
            "concept": "ValuationIdentifier"
          }
        ],
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{ValuationData} has valuation identifier {ValuationIdentifier}"
        ],
        "description": "Identifier common to valuation records."
      },
      {
        "name": "has_ValuationDate",
        "roles": [
          {
            "concept": "Date"
          }
        ],
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{ValuationData} has valuation date {Date}"
        ],
        "description": "Date common to valuation records."
      }
    ],
    "mappings": []
  },
  "value.ValuationData.has_ValuationIdentifier": {
    "id": "value.ValuationData.has_ValuationIdentifier",
    "type": "value_type_property",
    "name": "ValuationIdentifier",
    "description": "Identifier common to valuation records.",
    "parent": "concept.ValuationData",
    "data_type": "ValuationIdentifier",
    "value_concept": "ValuationIdentifier",
    "field_name": "has_ValuationIdentifier",
    "relationship_name": "has_ValuationIdentifier",
    "relationship": {
      "name": "has_ValuationIdentifier",
      "roles": [
        {
          "concept": "ValuationIdentifier"
        }
      ],
      "multiplicity": "OneToOne",
      "verbalizes": [
        "{ValuationData} has valuation identifier {ValuationIdentifier}"
      ],
      "description": "Identifier common to valuation records."
    },
    "inherited": false,
    "inherited_from": ""
  },
  "value.ValuationData.has_ValuationDate": {
    "id": "value.ValuationData.has_ValuationDate",
    "type": "value_type_property",
    "name": "Date",
    "description": "Date common to valuation records.",
    "parent": "concept.ValuationData",
    "data_type": "Date",
    "value_concept": "Date",
    "field_name": "has_ValuationDate",
    "relationship_name": "has_ValuationDate",
    "relationship": {
      "name": "has_ValuationDate",
      "roles": [
        {
          "concept": "Date"
        }
      ],
      "multiplicity": "ManyToOne",
      "verbalizes": [
        "{ValuationData} has valuation date {Date}"
      ],
      "description": "Date common to valuation records."
    },
    "inherited": false,
    "inherited_from": ""
  },
  "concept.CollateralAsset": {
    "id": "concept.CollateralAsset",
    "type": "entity_type_concept",
    "name": "CollateralAsset",
    "description": "Asset pledged as collateral for margin obligations.",
    "concept": {
      "name": "CollateralAsset",
      "type": "EntityType",
      "description": "Asset pledged as collateral for margin obligations.",
      "extends": [
        "CollateralAssetData"
      ],
      "identify_by": [
        "has_CollateralIdentifier"
      ]
    },
    "relationships": [
      {
        "name": "PART_OF_MarginAccount",
        "roles": [
          {
            "concept": "MarginAccount"
          }
        ],
        "verbalizes": [
          "{CollateralAsset} is part of the collateral set for {MarginAccount}"
        ],
        "description": "Margin account whose obligations are supported by this collateral asset."
      }
    ],
    "mappings": [
      {
        "kind": "object_mapping",
        "fields": [
          "collateral_positions.collateral_id"
        ],
        "expressions": [
          "collateral_positions.collateral_id"
        ]
      },
      {
        "kind": "object_mapping",
        "fields": [
          "collateral_margin_report_lines.collateral_id"
        ],
        "expressions": [
          "collateral_margin_report_lines.collateral_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 1,
        "relationship": null,
        "target_concept": null,
        "expressions": [
          "collateral_positions.collateral_id"
        ],
        "fields": [
          "collateral_positions.collateral_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_CollateralIdentifier",
        "target_concept": "CollateralIdentifier",
        "expressions": [
          "collateral_positions.collateral_id"
        ],
        "fields": [
          "collateral_positions.collateral_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_AssetType",
        "target_concept": "AssetType",
        "expressions": [
          "collateral_positions.asset_type"
        ],
        "fields": [
          "collateral_positions.asset_type"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_AssetCurrency",
        "target_concept": "CurrencyCode",
        "expressions": [
          "collateral_positions.currency"
        ],
        "fields": [
          "collateral_positions.currency"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_IssuerCountry",
        "target_concept": "CountryCode",
        "expressions": [
          "collateral_positions.issuer_country"
        ],
        "fields": [
          "collateral_positions.issuer_country"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "PART_OF_MarginAccount",
        "target_concept": "MarginAccount",
        "expressions": [
          "collateral_positions.account_id"
        ],
        "fields": [
          "collateral_positions.account_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 1,
        "relationship": null,
        "target_concept": null,
        "expressions": [
          "collateral_margin_report_lines.collateral_id"
        ],
        "fields": [
          "collateral_margin_report_lines.collateral_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_CollateralIdentifier",
        "target_concept": "CollateralIdentifier",
        "expressions": [
          "collateral_margin_report_lines.collateral_id"
        ],
        "fields": [
          "collateral_margin_report_lines.collateral_id"
        ]
      }
    ],
    "mapped_datasets": [
      "collateral_margin_report_lines",
      "collateral_positions"
    ],
    "mapped_tables": [
      "collateral_margin_report_lines",
      "collateral_positions"
    ],
    "mapped_fields": [
      "collateral_margin_report_lines.collateral_id",
      "collateral_positions.asset_type",
      "collateral_positions.collateral_id",
      "collateral_positions.currency",
      "collateral_positions.issuer_country"
    ],
    "mapped_metrics": []
  },
  "concept.CollateralValuation": {
    "id": "concept.CollateralValuation",
    "type": "entity_type_concept",
    "name": "CollateralValuation",
    "description": "Daily valuation record for collateral after market close.",
    "concept": {
      "name": "CollateralValuation",
      "type": "EntityType",
      "description": "Daily valuation record for collateral after market close.",
      "extends": [
        "ValuationData"
      ],
      "identify_by": [
        "has_ValuationIdentifier"
      ]
    },
    "relationships": [
      {
        "name": "VALUES_CollateralAsset",
        "roles": [
          {
            "concept": "CollateralAsset"
          }
        ],
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralValuation} values {CollateralAsset}"
        ],
        "description": "Collateral asset whose market value and haircut are measured by this valuation."
      },
      {
        "name": "has_MarketValueAmount",
        "roles": [
          {
            "concept": "MonetaryAmount"
          }
        ],
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralValuation} has market value amount {MonetaryAmount}"
        ],
        "description": "Gross market value before haircut."
      },
      {
        "name": "has_HaircutRate",
        "roles": [
          {
            "concept": "Rate"
          }
        ],
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralValuation} has haircut rate {Rate}"
        ],
        "description": "Haircut rate applied to the collateral valuation."
      },
      {
        "name": "has_EligibleCollateralValue",
        "roles": [
          {
            "concept": "MonetaryAmount"
          }
        ],
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralValuation} has eligible collateral value {MonetaryAmount}"
        ],
        "description": "Market value after haircut represented as an entity-level calculated collateral valuation amount."
      }
    ],
    "mappings": [
      {
        "kind": "object_mapping",
        "fields": [
          "collateral_valuations.valuation_id"
        ],
        "expressions": [
          "collateral_valuations.valuation_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 1,
        "relationship": null,
        "target_concept": null,
        "expressions": [
          "collateral_valuations.valuation_id"
        ],
        "fields": [
          "collateral_valuations.valuation_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_ValuationIdentifier",
        "target_concept": "ValuationIdentifier",
        "expressions": [
          "collateral_valuations.valuation_id"
        ],
        "fields": [
          "collateral_valuations.valuation_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_ValuationDate",
        "target_concept": "Date",
        "expressions": [
          "collateral_valuations.valuation_date"
        ],
        "fields": [
          "collateral_valuations.valuation_date"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_MarketValueAmount",
        "target_concept": "MonetaryAmount",
        "expressions": [
          "collateral_valuations.market_value_amount"
        ],
        "fields": [
          "collateral_valuations.market_value_amount"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_HaircutRate",
        "target_concept": "Rate",
        "expressions": [
          "collateral_valuations.haircut_rate"
        ],
        "fields": [
          "collateral_valuations.haircut_rate"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_EligibleCollateralValue",
        "target_concept": "MonetaryAmount",
        "expressions": [
          "metric.eligible_collateral_value"
        ],
        "fields": [
          "metric.eligible_collateral_value"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "VALUES_CollateralAsset",
        "target_concept": "CollateralAsset",
        "expressions": [
          "collateral_valuations.collateral_id"
        ],
        "fields": [
          "collateral_valuations.collateral_id"
        ]
      }
    ],
    "mapped_datasets": [
      "collateral_valuations"
    ],
    "mapped_tables": [
      "collateral_valuations"
    ],
    "mapped_fields": [
      "collateral_valuations.haircut_rate",
      "collateral_valuations.market_value_amount",
      "collateral_valuations.valuation_date",
      "collateral_valuations.valuation_id"
    ],
    "mapped_metrics": [
      "eligible_collateral_value"
    ]
  },
  "value.CollateralValuation.has_MarketValueAmount": {
    "id": "value.CollateralValuation.has_MarketValueAmount",
    "type": "value_type_property",
    "name": "MonetaryAmount",
    "description": "Gross market value before haircut.",
    "parent": "concept.CollateralValuation",
    "data_type": "MonetaryAmount",
    "value_concept": "MonetaryAmount",
    "field_name": "has_MarketValueAmount",
    "relationship_name": "has_MarketValueAmount",
    "relationship": {
      "name": "has_MarketValueAmount",
      "roles": [
        {
          "concept": "MonetaryAmount"
        }
      ],
      "multiplicity": "ManyToOne",
      "verbalizes": [
        "{CollateralValuation} has market value amount {MonetaryAmount}"
      ],
      "description": "Gross market value before haircut."
    },
    "inherited": false,
    "inherited_from": ""
  },
  "value.CollateralValuation.has_HaircutRate": {
    "id": "value.CollateralValuation.has_HaircutRate",
    "type": "value_type_property",
    "name": "Rate",
    "description": "Haircut rate applied to the collateral valuation.",
    "parent": "concept.CollateralValuation",
    "data_type": "Rate",
    "value_concept": "Rate",
    "field_name": "has_HaircutRate",
    "relationship_name": "has_HaircutRate",
    "relationship": {
      "name": "has_HaircutRate",
      "roles": [
        {
          "concept": "Rate"
        }
      ],
      "multiplicity": "ManyToOne",
      "verbalizes": [
        "{CollateralValuation} has haircut rate {Rate}"
      ],
      "description": "Haircut rate applied to the collateral valuation."
    },
    "inherited": false,
    "inherited_from": ""
  },
  "value.CollateralValuation.has_EligibleCollateralValue": {
    "id": "value.CollateralValuation.has_EligibleCollateralValue",
    "type": "value_type_property",
    "name": "MonetaryAmount",
    "description": "Market value after haircut represented as an entity-level calculated collateral valuation amount.",
    "parent": "concept.CollateralValuation",
    "data_type": "MonetaryAmount",
    "value_concept": "MonetaryAmount",
    "field_name": "has_EligibleCollateralValue",
    "relationship_name": "has_EligibleCollateralValue",
    "relationship": {
      "name": "has_EligibleCollateralValue",
      "roles": [
        {
          "concept": "MonetaryAmount"
        }
      ],
      "multiplicity": "ManyToOne",
      "verbalizes": [
        "{CollateralValuation} has eligible collateral value {MonetaryAmount}"
      ],
      "description": "Market value after haircut represented as an entity-level calculated collateral valuation amount."
    },
    "inherited": false,
    "inherited_from": "",
    "calculation_type": "metric",
    "semantic_metric": "eligible_collateral_value",
    "semantic_reference": "metric.eligible_collateral_value",
    "metric": {
      "name": "eligible_collateral_value",
      "description": "Market value after haircut for regulatory eligible collateral reporting.",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "collateral_valuations.market_value_amount * (1 - collateral_valuations.haircut_rate)"
          }
        ]
      },
      "ai_context": {
        "metric_type": "calculated_report_measure"
      }
    }
  },
  "concept.Counterparty": {
    "id": "concept.Counterparty",
    "type": "entity_type_concept",
    "name": "Counterparty",
    "description": "Legal entity that owns margin accounts and posts collateral.",
    "concept": {
      "name": "Counterparty",
      "type": "EntityType",
      "description": "Legal entity that owns margin accounts and posts collateral.",
      "extends": [
        "CounterpartyData"
      ],
      "identify_by": [
        "has_CounterpartyIdentifier"
      ]
    },
    "relationships": [
      {
        "name": "RELATED_TO_MarginAccount",
        "roles": [
          {
            "concept": "MarginAccount"
          }
        ],
        "verbalizes": [
          "{Counterparty} is related to {MarginAccount} through account ownership or control"
        ],
        "description": "Margin accounts owned or controlled by the counterparty."
      }
    ],
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
        "kind": "object_mapping",
        "fields": [
          "collateral_margin_report_lines.counterparty_id"
        ],
        "expressions": [
          "collateral_margin_report_lines.counterparty_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 1,
        "relationship": null,
        "target_concept": null,
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
        "relationship": "has_LegalName",
        "target_concept": "LegalName",
        "expressions": [
          "counterparties.legal_name"
        ],
        "fields": [
          "counterparties.legal_name"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_DomicileCountry",
        "target_concept": "CountryCode",
        "expressions": [
          "counterparties.domicile_country"
        ],
        "fields": [
          "counterparties.domicile_country"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_RegulatorySegment",
        "target_concept": "RegulatorySegment",
        "expressions": [
          "counterparties.regulatory_segment"
        ],
        "fields": [
          "counterparties.regulatory_segment"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "RELATED_TO_MarginAccount",
        "target_concept": "MarginAccount",
        "expressions": [
          "margin_accounts.account_id"
        ],
        "fields": [
          "margin_accounts.account_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 1,
        "relationship": null,
        "target_concept": null,
        "expressions": [
          "collateral_margin_report_lines.counterparty_id"
        ],
        "fields": [
          "collateral_margin_report_lines.counterparty_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_CounterpartyIdentifier",
        "target_concept": "CounterpartyIdentifier",
        "expressions": [
          "collateral_margin_report_lines.counterparty_id"
        ],
        "fields": [
          "collateral_margin_report_lines.counterparty_id"
        ]
      }
    ],
    "mapped_datasets": [
      "collateral_margin_report_lines",
      "counterparties"
    ],
    "mapped_tables": [
      "collateral_margin_report_lines",
      "counterparties"
    ],
    "mapped_fields": [
      "collateral_margin_report_lines.counterparty_id",
      "counterparties.counterparty_id",
      "counterparties.domicile_country",
      "counterparties.legal_name",
      "counterparties.regulatory_segment"
    ],
    "mapped_metrics": []
  },
  "concept.MarginAccount": {
    "id": "concept.MarginAccount",
    "type": "entity_type_concept",
    "name": "MarginAccount",
    "description": "Account used to hold margin obligations and pledged collateral.",
    "concept": {
      "name": "MarginAccount",
      "type": "EntityType",
      "description": "Account used to hold margin obligations and pledged collateral.",
      "extends": [
        "AccountData"
      ],
      "identify_by": [
        "has_AccountIdentifier"
      ]
    },
    "relationships": [
      {
        "name": "REFERENCES_Counterparty",
        "roles": [
          {
            "concept": "Counterparty"
          }
        ],
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{MarginAccount} is owned by {Counterparty}"
        ],
        "description": "Counterparty that owns or controls the margin account."
      },
      {
        "name": "DEPENDS_ON_CollateralAsset",
        "roles": [
          {
            "concept": "CollateralAsset"
          }
        ],
        "verbalizes": [
          "{MarginAccount} depends on pledged {CollateralAsset} for margin coverage"
        ],
        "description": "Collateral assets pledged against this margin account."
      },
      {
        "name": "has_BaseCurrency",
        "roles": [
          {
            "concept": "CurrencyCode"
          }
        ],
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{MarginAccount} has base currency {CurrencyCode}"
        ],
        "description": "Currency used as the margin account base currency."
      }
    ],
    "mappings": [
      {
        "kind": "object_mapping",
        "fields": [
          "margin_accounts.account_id"
        ],
        "expressions": [
          "margin_accounts.account_id"
        ]
      },
      {
        "kind": "object_mapping",
        "fields": [
          "collateral_margin_report_lines.account_id"
        ],
        "expressions": [
          "collateral_margin_report_lines.account_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 1,
        "relationship": null,
        "target_concept": null,
        "expressions": [
          "margin_accounts.account_id"
        ],
        "fields": [
          "margin_accounts.account_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_AccountIdentifier",
        "target_concept": "AccountIdentifier",
        "expressions": [
          "margin_accounts.account_id"
        ],
        "fields": [
          "margin_accounts.account_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "REFERENCES_Counterparty",
        "target_concept": "Counterparty",
        "expressions": [
          "margin_accounts.counterparty_id"
        ],
        "fields": [
          "margin_accounts.counterparty_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_BaseCurrency",
        "target_concept": "CurrencyCode",
        "expressions": [
          "margin_accounts.base_currency"
        ],
        "fields": [
          "margin_accounts.base_currency"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_AccountStatus",
        "target_concept": "StatusCode",
        "expressions": [
          "margin_accounts.account_status"
        ],
        "fields": [
          "margin_accounts.account_status"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "DEPENDS_ON_CollateralAsset",
        "target_concept": "CollateralAsset",
        "expressions": [
          "collateral_positions.collateral_id"
        ],
        "fields": [
          "collateral_positions.collateral_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 1,
        "relationship": null,
        "target_concept": null,
        "expressions": [
          "collateral_margin_report_lines.account_id"
        ],
        "fields": [
          "collateral_margin_report_lines.account_id"
        ]
      },
      {
        "kind": "link_mapping",
        "level": 2,
        "relationship": "has_AccountIdentifier",
        "target_concept": "AccountIdentifier",
        "expressions": [
          "collateral_margin_report_lines.account_id"
        ],
        "fields": [
          "collateral_margin_report_lines.account_id"
        ]
      }
    ],
    "mapped_datasets": [
      "collateral_margin_report_lines",
      "margin_accounts"
    ],
    "mapped_tables": [
      "collateral_margin_report_lines",
      "margin_accounts"
    ],
    "mapped_fields": [
      "collateral_margin_report_lines.account_id",
      "margin_accounts.account_id",
      "margin_accounts.account_status",
      "margin_accounts.base_currency"
    ],
    "mapped_metrics": []
  },
  "value.MarginAccount.has_BaseCurrency": {
    "id": "value.MarginAccount.has_BaseCurrency",
    "type": "value_type_property",
    "name": "CurrencyCode",
    "description": "Currency used as the margin account base currency.",
    "parent": "concept.MarginAccount",
    "data_type": "CurrencyCode",
    "value_concept": "CurrencyCode",
    "field_name": "has_BaseCurrency",
    "relationship_name": "has_BaseCurrency",
    "relationship": {
      "name": "has_BaseCurrency",
      "roles": [
        {
          "concept": "CurrencyCode"
        }
      ],
      "multiplicity": "ManyToOne",
      "verbalizes": [
        "{MarginAccount} has base currency {CurrencyCode}"
      ],
      "description": "Currency used as the margin account base currency."
    },
    "inherited": false,
    "inherited_from": ""
  },
  "value.CollateralAsset.has_CollateralIdentifier": {
    "id": "value.CollateralAsset.has_CollateralIdentifier",
    "type": "value_type_property",
    "name": "CollateralIdentifier",
    "description": "Identifier common to collateral asset records.",
    "parent": "concept.CollateralAsset",
    "data_type": "CollateralIdentifier",
    "value_concept": "CollateralIdentifier",
    "field_name": "has_CollateralIdentifier",
    "relationship_name": "has_CollateralIdentifier",
    "relationship": {
      "name": "has_CollateralIdentifier",
      "roles": [
        {
          "concept": "CollateralIdentifier"
        }
      ],
      "multiplicity": "OneToOne",
      "verbalizes": [
        "{CollateralAssetData} has collateral identifier {CollateralIdentifier}"
      ],
      "description": "Identifier common to collateral asset records."
    },
    "inherited": true,
    "inherited_from": "CollateralAssetData"
  },
  "value.CollateralAsset.has_AssetType": {
    "id": "value.CollateralAsset.has_AssetType",
    "type": "value_type_property",
    "name": "AssetType",
    "description": "Asset type common to collateral asset records.",
    "parent": "concept.CollateralAsset",
    "data_type": "AssetType",
    "value_concept": "AssetType",
    "field_name": "has_AssetType",
    "relationship_name": "has_AssetType",
    "relationship": {
      "name": "has_AssetType",
      "roles": [
        {
          "concept": "AssetType"
        }
      ],
      "multiplicity": "ManyToOne",
      "verbalizes": [
        "{CollateralAssetData} has asset type {AssetType}"
      ],
      "description": "Asset type common to collateral asset records."
    },
    "inherited": true,
    "inherited_from": "CollateralAssetData"
  },
  "value.CollateralAsset.has_AssetCurrency": {
    "id": "value.CollateralAsset.has_AssetCurrency",
    "type": "value_type_property",
    "name": "CurrencyCode",
    "description": "Currency common to collateral asset records.",
    "parent": "concept.CollateralAsset",
    "data_type": "CurrencyCode",
    "value_concept": "CurrencyCode",
    "field_name": "has_AssetCurrency",
    "relationship_name": "has_AssetCurrency",
    "relationship": {
      "name": "has_AssetCurrency",
      "roles": [
        {
          "concept": "CurrencyCode"
        }
      ],
      "multiplicity": "ManyToOne",
      "verbalizes": [
        "{CollateralAssetData} has currency {CurrencyCode}"
      ],
      "description": "Currency common to collateral asset records."
    },
    "inherited": true,
    "inherited_from": "CollateralAssetData"
  },
  "value.CollateralAsset.has_IssuerCountry": {
    "id": "value.CollateralAsset.has_IssuerCountry",
    "type": "value_type_property",
    "name": "CountryCode",
    "description": "Issuer country common to collateral asset records.",
    "parent": "concept.CollateralAsset",
    "data_type": "CountryCode",
    "value_concept": "CountryCode",
    "field_name": "has_IssuerCountry",
    "relationship_name": "has_IssuerCountry",
    "relationship": {
      "name": "has_IssuerCountry",
      "roles": [
        {
          "concept": "CountryCode"
        }
      ],
      "multiplicity": "ManyToOne",
      "verbalizes": [
        "{CollateralAssetData} has issuer country {CountryCode}"
      ],
      "description": "Issuer country common to collateral asset records."
    },
    "inherited": true,
    "inherited_from": "CollateralAssetData"
  },
  "value.CollateralValuation.has_ValuationIdentifier": {
    "id": "value.CollateralValuation.has_ValuationIdentifier",
    "type": "value_type_property",
    "name": "ValuationIdentifier",
    "description": "Identifier common to valuation records.",
    "parent": "concept.CollateralValuation",
    "data_type": "ValuationIdentifier",
    "value_concept": "ValuationIdentifier",
    "field_name": "has_ValuationIdentifier",
    "relationship_name": "has_ValuationIdentifier",
    "relationship": {
      "name": "has_ValuationIdentifier",
      "roles": [
        {
          "concept": "ValuationIdentifier"
        }
      ],
      "multiplicity": "OneToOne",
      "verbalizes": [
        "{ValuationData} has valuation identifier {ValuationIdentifier}"
      ],
      "description": "Identifier common to valuation records."
    },
    "inherited": true,
    "inherited_from": "ValuationData"
  },
  "value.CollateralValuation.has_ValuationDate": {
    "id": "value.CollateralValuation.has_ValuationDate",
    "type": "value_type_property",
    "name": "Date",
    "description": "Date common to valuation records.",
    "parent": "concept.CollateralValuation",
    "data_type": "Date",
    "value_concept": "Date",
    "field_name": "has_ValuationDate",
    "relationship_name": "has_ValuationDate",
    "relationship": {
      "name": "has_ValuationDate",
      "roles": [
        {
          "concept": "Date"
        }
      ],
      "multiplicity": "ManyToOne",
      "verbalizes": [
        "{ValuationData} has valuation date {Date}"
      ],
      "description": "Date common to valuation records."
    },
    "inherited": true,
    "inherited_from": "ValuationData"
  },
  "value.Counterparty.has_CounterpartyIdentifier": {
    "id": "value.Counterparty.has_CounterpartyIdentifier",
    "type": "value_type_property",
    "name": "CounterpartyIdentifier",
    "description": "Identifier common to counterparty-like records.",
    "parent": "concept.Counterparty",
    "data_type": "CounterpartyIdentifier",
    "value_concept": "CounterpartyIdentifier",
    "field_name": "has_CounterpartyIdentifier",
    "relationship_name": "has_CounterpartyIdentifier",
    "relationship": {
      "name": "has_CounterpartyIdentifier",
      "roles": [
        {
          "concept": "CounterpartyIdentifier"
        }
      ],
      "multiplicity": "OneToOne",
      "verbalizes": [
        "{CounterpartyData} has counterparty identifier {CounterpartyIdentifier}"
      ],
      "description": "Identifier common to counterparty-like records."
    },
    "inherited": true,
    "inherited_from": "CounterpartyData"
  },
  "value.Counterparty.has_LegalName": {
    "id": "value.Counterparty.has_LegalName",
    "type": "value_type_property",
    "name": "LegalName",
    "description": "Legal name common to counterparty-like records.",
    "parent": "concept.Counterparty",
    "data_type": "LegalName",
    "value_concept": "LegalName",
    "field_name": "has_LegalName",
    "relationship_name": "has_LegalName",
    "relationship": {
      "name": "has_LegalName",
      "roles": [
        {
          "concept": "LegalName"
        }
      ],
      "multiplicity": "ManyToOne",
      "verbalizes": [
        "{CounterpartyData} has legal name {LegalName}"
      ],
      "description": "Legal name common to counterparty-like records."
    },
    "inherited": true,
    "inherited_from": "CounterpartyData"
  },
  "value.Counterparty.has_DomicileCountry": {
    "id": "value.Counterparty.has_DomicileCountry",
    "type": "value_type_property",
    "name": "CountryCode",
    "description": "Domicile country common to counterparty-like records.",
    "parent": "concept.Counterparty",
    "data_type": "CountryCode",
    "value_concept": "CountryCode",
    "field_name": "has_DomicileCountry",
    "relationship_name": "has_DomicileCountry",
    "relationship": {
      "name": "has_DomicileCountry",
      "roles": [
        {
          "concept": "CountryCode"
        }
      ],
      "multiplicity": "ManyToOne",
      "verbalizes": [
        "{CounterpartyData} has domicile country {CountryCode}"
      ],
      "description": "Domicile country common to counterparty-like records."
    },
    "inherited": true,
    "inherited_from": "CounterpartyData"
  },
  "value.Counterparty.has_RegulatorySegment": {
    "id": "value.Counterparty.has_RegulatorySegment",
    "type": "value_type_property",
    "name": "RegulatorySegment",
    "description": "Regulatory segment common to counterparty-like records.",
    "parent": "concept.Counterparty",
    "data_type": "RegulatorySegment",
    "value_concept": "RegulatorySegment",
    "field_name": "has_RegulatorySegment",
    "relationship_name": "has_RegulatorySegment",
    "relationship": {
      "name": "has_RegulatorySegment",
      "roles": [
        {
          "concept": "RegulatorySegment"
        }
      ],
      "multiplicity": "ManyToOne",
      "verbalizes": [
        "{CounterpartyData} has regulatory segment {RegulatorySegment}"
      ],
      "description": "Regulatory segment common to counterparty-like records."
    },
    "inherited": true,
    "inherited_from": "CounterpartyData"
  },
  "value.MarginAccount.has_AccountIdentifier": {
    "id": "value.MarginAccount.has_AccountIdentifier",
    "type": "value_type_property",
    "name": "AccountIdentifier",
    "description": "Identifier common to account-like records.",
    "parent": "concept.MarginAccount",
    "data_type": "AccountIdentifier",
    "value_concept": "AccountIdentifier",
    "field_name": "has_AccountIdentifier",
    "relationship_name": "has_AccountIdentifier",
    "relationship": {
      "name": "has_AccountIdentifier",
      "roles": [
        {
          "concept": "AccountIdentifier"
        }
      ],
      "multiplicity": "OneToOne",
      "verbalizes": [
        "{AccountData} has account identifier {AccountIdentifier}"
      ],
      "description": "Identifier common to account-like records."
    },
    "inherited": true,
    "inherited_from": "AccountData"
  },
  "value.MarginAccount.has_AccountStatus": {
    "id": "value.MarginAccount.has_AccountStatus",
    "type": "value_type_property",
    "name": "StatusCode",
    "description": "Status common to account-like records.",
    "parent": "concept.MarginAccount",
    "data_type": "StatusCode",
    "value_concept": "StatusCode",
    "field_name": "has_AccountStatus",
    "relationship_name": "has_AccountStatus",
    "relationship": {
      "name": "has_AccountStatus",
      "roles": [
        {
          "concept": "StatusCode"
        }
      ],
      "multiplicity": "ManyToOne",
      "verbalizes": [
        "{AccountData} has account status {StatusCode}"
      ],
      "description": "Status common to account-like records."
    },
    "inherited": true,
    "inherited_from": "AccountData"
  },
  "dataset.collateral_margin_report_lines": {
    "id": "dataset.collateral_margin_report_lines",
    "type": "semantic_dataset",
    "name": "collateral_margin_report_lines",
    "description": "Produced collateral margin report line records at report-line grain, carrying the account, counterparty, collateral, valuation date, and eligible collateral value submitted for reporting.",
    "source": "reporting.collateral_margin_report_lines",
    "primary_key": [
      "report_id",
      "line_number"
    ],
    "fields": [
      {
        "name": "report_id",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "report_id"
            }
          ]
        },
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "description": "Identifier of the generated collateral margin report submission."
      },
      {
        "name": "line_number",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "line_number"
            }
          ]
        },
        "ai_context": {
          "physical_type": "integer",
          "nullable": false
        },
        "description": "Line sequence number within a collateral margin report submission."
      },
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
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "description": "Margin account identifier reported on the output line."
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
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "description": "Counterparty identifier reported on the output line."
      },
      {
        "name": "collateral_id",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "collateral_id"
            }
          ]
        },
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "description": "Collateral asset identifier reported on the output line."
      },
      {
        "name": "valuation_date",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "valuation_date"
            }
          ]
        },
        "ai_context": {
          "physical_type": "date",
          "nullable": false
        },
        "description": "Valuation date used for the reported collateral amount."
      },
      {
        "name": "eligible_collateral_value",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "eligible_collateral_value"
            }
          ]
        },
        "ai_context": {
          "physical_type": "decimal",
          "nullable": false
        },
        "description": "Reportable collateral value after applying haircut and eligibility calculation."
      }
    ],
    "source_tables": [
      "reporting.collateral_margin_report_lines"
    ],
    "physical_kind": "",
    "custom_extensions": [],
    "semantic_model": "CollateralMarginSemanticModel"
  },
  "table.reporting.collateral_margin_report_lines": {
    "id": "table.reporting.collateral_margin_report_lines",
    "type": "physical_table",
    "name": "collateral_margin_report_lines",
    "description": "",
    "source": "reporting.collateral_margin_report_lines",
    "columns": [
      {
        "name": "report_id",
        "description": "Identifier of the generated collateral margin report submission.",
        "data_type": "",
        "nullable": ""
      },
      {
        "name": "line_number",
        "description": "Line sequence number within a collateral margin report submission.",
        "data_type": "",
        "nullable": ""
      },
      {
        "name": "account_id",
        "description": "Margin account identifier reported on the output line.",
        "data_type": "",
        "nullable": ""
      },
      {
        "name": "counterparty_id",
        "description": "Counterparty identifier reported on the output line.",
        "data_type": "",
        "nullable": ""
      },
      {
        "name": "collateral_id",
        "description": "Collateral asset identifier reported on the output line.",
        "data_type": "",
        "nullable": ""
      },
      {
        "name": "valuation_date",
        "description": "Valuation date used for the reported collateral amount.",
        "data_type": "",
        "nullable": ""
      },
      {
        "name": "eligible_collateral_value",
        "description": "Reportable collateral value after applying haircut and eligibility calculation.",
        "data_type": "",
        "nullable": ""
      }
    ],
    "source_datasets": [
      "collateral_margin_report_lines"
    ],
    "semantic_model": "CollateralMarginSemanticModel"
  },
  "field.collateral_margin_report_lines.report_id": {
    "id": "field.collateral_margin_report_lines.report_id",
    "type": "dataset_field",
    "name": "report_id",
    "description": "Identifier of the generated collateral margin report submission.",
    "parent": "dataset.collateral_margin_report_lines",
    "dataset": "collateral_margin_report_lines",
    "field": "report_id",
    "expression": "report_id",
    "field_definition": {
      "name": "report_id",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "report_id"
          }
        ]
      },
      "ai_context": {
        "physical_type": "string",
        "nullable": false
      },
      "description": "Identifier of the generated collateral margin report submission."
    }
  },
  "column.reporting.collateral_margin_report_lines.report_id": {
    "id": "column.reporting.collateral_margin_report_lines.report_id",
    "type": "column",
    "name": "report_id",
    "description": "Identifier of the generated collateral margin report submission.",
    "parent": "table.reporting.collateral_margin_report_lines",
    "physical_field": "reporting.collateral_margin_report_lines.report_id",
    "dataset_field": "collateral_margin_report_lines.report_id"
  },
  "field.collateral_margin_report_lines.line_number": {
    "id": "field.collateral_margin_report_lines.line_number",
    "type": "dataset_field",
    "name": "line_number",
    "description": "Line sequence number within a collateral margin report submission.",
    "parent": "dataset.collateral_margin_report_lines",
    "dataset": "collateral_margin_report_lines",
    "field": "line_number",
    "expression": "line_number",
    "field_definition": {
      "name": "line_number",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "line_number"
          }
        ]
      },
      "ai_context": {
        "physical_type": "integer",
        "nullable": false
      },
      "description": "Line sequence number within a collateral margin report submission."
    }
  },
  "column.reporting.collateral_margin_report_lines.line_number": {
    "id": "column.reporting.collateral_margin_report_lines.line_number",
    "type": "column",
    "name": "line_number",
    "description": "Line sequence number within a collateral margin report submission.",
    "parent": "table.reporting.collateral_margin_report_lines",
    "physical_field": "reporting.collateral_margin_report_lines.line_number",
    "dataset_field": "collateral_margin_report_lines.line_number"
  },
  "field.collateral_margin_report_lines.account_id": {
    "id": "field.collateral_margin_report_lines.account_id",
    "type": "dataset_field",
    "name": "account_id",
    "description": "Margin account identifier reported on the output line.",
    "parent": "dataset.collateral_margin_report_lines",
    "dataset": "collateral_margin_report_lines",
    "field": "account_id",
    "expression": "account_id",
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
      "ai_context": {
        "physical_type": "string",
        "nullable": false
      },
      "description": "Margin account identifier reported on the output line."
    }
  },
  "column.reporting.collateral_margin_report_lines.account_id": {
    "id": "column.reporting.collateral_margin_report_lines.account_id",
    "type": "column",
    "name": "account_id",
    "description": "Margin account identifier reported on the output line.",
    "parent": "table.reporting.collateral_margin_report_lines",
    "physical_field": "reporting.collateral_margin_report_lines.account_id",
    "dataset_field": "collateral_margin_report_lines.account_id"
  },
  "field.collateral_margin_report_lines.counterparty_id": {
    "id": "field.collateral_margin_report_lines.counterparty_id",
    "type": "dataset_field",
    "name": "counterparty_id",
    "description": "Counterparty identifier reported on the output line.",
    "parent": "dataset.collateral_margin_report_lines",
    "dataset": "collateral_margin_report_lines",
    "field": "counterparty_id",
    "expression": "counterparty_id",
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
      "ai_context": {
        "physical_type": "string",
        "nullable": false
      },
      "description": "Counterparty identifier reported on the output line."
    }
  },
  "column.reporting.collateral_margin_report_lines.counterparty_id": {
    "id": "column.reporting.collateral_margin_report_lines.counterparty_id",
    "type": "column",
    "name": "counterparty_id",
    "description": "Counterparty identifier reported on the output line.",
    "parent": "table.reporting.collateral_margin_report_lines",
    "physical_field": "reporting.collateral_margin_report_lines.counterparty_id",
    "dataset_field": "collateral_margin_report_lines.counterparty_id"
  },
  "field.collateral_margin_report_lines.collateral_id": {
    "id": "field.collateral_margin_report_lines.collateral_id",
    "type": "dataset_field",
    "name": "collateral_id",
    "description": "Collateral asset identifier reported on the output line.",
    "parent": "dataset.collateral_margin_report_lines",
    "dataset": "collateral_margin_report_lines",
    "field": "collateral_id",
    "expression": "collateral_id",
    "field_definition": {
      "name": "collateral_id",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "collateral_id"
          }
        ]
      },
      "ai_context": {
        "physical_type": "string",
        "nullable": false
      },
      "description": "Collateral asset identifier reported on the output line."
    }
  },
  "column.reporting.collateral_margin_report_lines.collateral_id": {
    "id": "column.reporting.collateral_margin_report_lines.collateral_id",
    "type": "column",
    "name": "collateral_id",
    "description": "Collateral asset identifier reported on the output line.",
    "parent": "table.reporting.collateral_margin_report_lines",
    "physical_field": "reporting.collateral_margin_report_lines.collateral_id",
    "dataset_field": "collateral_margin_report_lines.collateral_id"
  },
  "field.collateral_margin_report_lines.valuation_date": {
    "id": "field.collateral_margin_report_lines.valuation_date",
    "type": "dataset_field",
    "name": "valuation_date",
    "description": "Valuation date used for the reported collateral amount.",
    "parent": "dataset.collateral_margin_report_lines",
    "dataset": "collateral_margin_report_lines",
    "field": "valuation_date",
    "expression": "valuation_date",
    "field_definition": {
      "name": "valuation_date",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "valuation_date"
          }
        ]
      },
      "ai_context": {
        "physical_type": "date",
        "nullable": false
      },
      "description": "Valuation date used for the reported collateral amount."
    }
  },
  "column.reporting.collateral_margin_report_lines.valuation_date": {
    "id": "column.reporting.collateral_margin_report_lines.valuation_date",
    "type": "column",
    "name": "valuation_date",
    "description": "Valuation date used for the reported collateral amount.",
    "parent": "table.reporting.collateral_margin_report_lines",
    "physical_field": "reporting.collateral_margin_report_lines.valuation_date",
    "dataset_field": "collateral_margin_report_lines.valuation_date"
  },
  "field.collateral_margin_report_lines.eligible_collateral_value": {
    "id": "field.collateral_margin_report_lines.eligible_collateral_value",
    "type": "dataset_field",
    "name": "eligible_collateral_value",
    "description": "Reportable collateral value after applying haircut and eligibility calculation.",
    "parent": "dataset.collateral_margin_report_lines",
    "dataset": "collateral_margin_report_lines",
    "field": "eligible_collateral_value",
    "expression": "eligible_collateral_value",
    "field_definition": {
      "name": "eligible_collateral_value",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "eligible_collateral_value"
          }
        ]
      },
      "ai_context": {
        "physical_type": "decimal",
        "nullable": false
      },
      "description": "Reportable collateral value after applying haircut and eligibility calculation."
    }
  },
  "column.reporting.collateral_margin_report_lines.eligible_collateral_value": {
    "id": "column.reporting.collateral_margin_report_lines.eligible_collateral_value",
    "type": "column",
    "name": "eligible_collateral_value",
    "description": "Reportable collateral value after applying haircut and eligibility calculation.",
    "parent": "table.reporting.collateral_margin_report_lines",
    "physical_field": "reporting.collateral_margin_report_lines.eligible_collateral_value",
    "dataset_field": "collateral_margin_report_lines.eligible_collateral_value"
  },
  "dataset.collateral_positions": {
    "id": "dataset.collateral_positions",
    "type": "semantic_dataset",
    "name": "collateral_positions",
    "description": "Collateral position records that describe pledged collateral assets assigned to margin accounts, including asset classification, currency, and issuer jurisdiction.",
    "source": "collateral_master.collateral_positions",
    "primary_key": [
      "collateral_id"
    ],
    "fields": [
      {
        "name": "collateral_id",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "collateral_id"
            }
          ]
        },
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "description": "Stable identifier for the pledged collateral asset position."
      },
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
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "description": "Margin account identifier to which the collateral position is assigned."
      },
      {
        "name": "asset_type",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "asset_type"
            }
          ]
        },
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "description": "Asset classification of the pledged collateral used for eligibility assessment."
      },
      {
        "name": "currency",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "currency"
            }
          ]
        },
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "description": "Denomination currency of the pledged collateral position."
      },
      {
        "name": "issuer_country",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "issuer_country"
            }
          ]
        },
        "ai_context": {
          "physical_type": "string",
          "nullable": true
        },
        "description": "Issuer jurisdiction of the pledged collateral asset when applicable for eligibility rules."
      }
    ],
    "source_tables": [
      "collateral_master.collateral_positions"
    ],
    "physical_kind": "",
    "custom_extensions": [],
    "semantic_model": "CollateralMarginSemanticModel"
  },
  "table.collateral_master.collateral_positions": {
    "id": "table.collateral_master.collateral_positions",
    "type": "physical_table",
    "name": "collateral_positions",
    "description": "",
    "source": "collateral_master.collateral_positions",
    "columns": [
      {
        "name": "collateral_id",
        "description": "Stable identifier for the pledged collateral asset position.",
        "data_type": "",
        "nullable": ""
      },
      {
        "name": "account_id",
        "description": "Margin account identifier to which the collateral position is assigned.",
        "data_type": "",
        "nullable": ""
      },
      {
        "name": "asset_type",
        "description": "Asset classification of the pledged collateral used for eligibility assessment.",
        "data_type": "",
        "nullable": ""
      },
      {
        "name": "currency",
        "description": "Denomination currency of the pledged collateral position.",
        "data_type": "",
        "nullable": ""
      },
      {
        "name": "issuer_country",
        "description": "Issuer jurisdiction of the pledged collateral asset when applicable for eligibility rules.",
        "data_type": "",
        "nullable": ""
      }
    ],
    "source_datasets": [
      "collateral_positions"
    ],
    "semantic_model": "CollateralMarginSemanticModel"
  },
  "field.collateral_positions.collateral_id": {
    "id": "field.collateral_positions.collateral_id",
    "type": "dataset_field",
    "name": "collateral_id",
    "description": "Stable identifier for the pledged collateral asset position.",
    "parent": "dataset.collateral_positions",
    "dataset": "collateral_positions",
    "field": "collateral_id",
    "expression": "collateral_id",
    "field_definition": {
      "name": "collateral_id",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "collateral_id"
          }
        ]
      },
      "ai_context": {
        "physical_type": "string",
        "nullable": false
      },
      "description": "Stable identifier for the pledged collateral asset position."
    }
  },
  "column.collateral_master.collateral_positions.collateral_id": {
    "id": "column.collateral_master.collateral_positions.collateral_id",
    "type": "column",
    "name": "collateral_id",
    "description": "Stable identifier for the pledged collateral asset position.",
    "parent": "table.collateral_master.collateral_positions",
    "physical_field": "collateral_master.collateral_positions.collateral_id",
    "dataset_field": "collateral_positions.collateral_id"
  },
  "field.collateral_positions.account_id": {
    "id": "field.collateral_positions.account_id",
    "type": "dataset_field",
    "name": "account_id",
    "description": "Margin account identifier to which the collateral position is assigned.",
    "parent": "dataset.collateral_positions",
    "dataset": "collateral_positions",
    "field": "account_id",
    "expression": "account_id",
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
      "ai_context": {
        "physical_type": "string",
        "nullable": false
      },
      "description": "Margin account identifier to which the collateral position is assigned."
    }
  },
  "column.collateral_master.collateral_positions.account_id": {
    "id": "column.collateral_master.collateral_positions.account_id",
    "type": "column",
    "name": "account_id",
    "description": "Margin account identifier to which the collateral position is assigned.",
    "parent": "table.collateral_master.collateral_positions",
    "physical_field": "collateral_master.collateral_positions.account_id",
    "dataset_field": "collateral_positions.account_id"
  },
  "field.collateral_positions.asset_type": {
    "id": "field.collateral_positions.asset_type",
    "type": "dataset_field",
    "name": "asset_type",
    "description": "Asset classification of the pledged collateral used for eligibility assessment.",
    "parent": "dataset.collateral_positions",
    "dataset": "collateral_positions",
    "field": "asset_type",
    "expression": "asset_type",
    "field_definition": {
      "name": "asset_type",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "asset_type"
          }
        ]
      },
      "ai_context": {
        "physical_type": "string",
        "nullable": false
      },
      "description": "Asset classification of the pledged collateral used for eligibility assessment."
    }
  },
  "column.collateral_master.collateral_positions.asset_type": {
    "id": "column.collateral_master.collateral_positions.asset_type",
    "type": "column",
    "name": "asset_type",
    "description": "Asset classification of the pledged collateral used for eligibility assessment.",
    "parent": "table.collateral_master.collateral_positions",
    "physical_field": "collateral_master.collateral_positions.asset_type",
    "dataset_field": "collateral_positions.asset_type"
  },
  "field.collateral_positions.currency": {
    "id": "field.collateral_positions.currency",
    "type": "dataset_field",
    "name": "currency",
    "description": "Denomination currency of the pledged collateral position.",
    "parent": "dataset.collateral_positions",
    "dataset": "collateral_positions",
    "field": "currency",
    "expression": "currency",
    "field_definition": {
      "name": "currency",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "currency"
          }
        ]
      },
      "ai_context": {
        "physical_type": "string",
        "nullable": false
      },
      "description": "Denomination currency of the pledged collateral position."
    }
  },
  "column.collateral_master.collateral_positions.currency": {
    "id": "column.collateral_master.collateral_positions.currency",
    "type": "column",
    "name": "currency",
    "description": "Denomination currency of the pledged collateral position.",
    "parent": "table.collateral_master.collateral_positions",
    "physical_field": "collateral_master.collateral_positions.currency",
    "dataset_field": "collateral_positions.currency"
  },
  "field.collateral_positions.issuer_country": {
    "id": "field.collateral_positions.issuer_country",
    "type": "dataset_field",
    "name": "issuer_country",
    "description": "Issuer jurisdiction of the pledged collateral asset when applicable for eligibility rules.",
    "parent": "dataset.collateral_positions",
    "dataset": "collateral_positions",
    "field": "issuer_country",
    "expression": "issuer_country",
    "field_definition": {
      "name": "issuer_country",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "issuer_country"
          }
        ]
      },
      "ai_context": {
        "physical_type": "string",
        "nullable": true
      },
      "description": "Issuer jurisdiction of the pledged collateral asset when applicable for eligibility rules."
    }
  },
  "column.collateral_master.collateral_positions.issuer_country": {
    "id": "column.collateral_master.collateral_positions.issuer_country",
    "type": "column",
    "name": "issuer_country",
    "description": "Issuer jurisdiction of the pledged collateral asset when applicable for eligibility rules.",
    "parent": "table.collateral_master.collateral_positions",
    "physical_field": "collateral_master.collateral_positions.issuer_country",
    "dataset_field": "collateral_positions.issuer_country"
  },
  "dataset.collateral_valuations": {
    "id": "dataset.collateral_valuations",
    "type": "semantic_dataset",
    "name": "collateral_valuations",
    "description": "Daily collateral valuation records that capture market value and haircut inputs for pledged assets at valuation-date grain.",
    "source": "market_risk.collateral_valuations",
    "primary_key": [
      "valuation_id"
    ],
    "fields": [
      {
        "name": "valuation_id",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "valuation_id"
            }
          ]
        },
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "description": "Stable identifier for a collateral valuation record."
      },
      {
        "name": "collateral_id",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "collateral_id"
            }
          ]
        },
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "description": "Identifier of the pledged collateral asset being valued."
      },
      {
        "name": "valuation_date",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "valuation_date"
            }
          ]
        },
        "ai_context": {
          "physical_type": "date",
          "nullable": false
        },
        "description": "Business date on which the collateral market value and haircut are observed."
      },
      {
        "name": "market_value_amount",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "market_value_amount"
            }
          ]
        },
        "ai_context": {
          "physical_type": "decimal",
          "nullable": false
        },
        "description": "Observed market value amount of the collateral before haircut adjustment."
      },
      {
        "name": "haircut_rate",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "haircut_rate"
            }
          ]
        },
        "ai_context": {
          "physical_type": "decimal",
          "nullable": false
        },
        "description": "Haircut percentage applied to collateral market value for eligibility calculation."
      }
    ],
    "source_tables": [
      "market_risk.collateral_valuations"
    ],
    "physical_kind": "",
    "custom_extensions": [],
    "semantic_model": "CollateralMarginSemanticModel"
  },
  "table.market_risk.collateral_valuations": {
    "id": "table.market_risk.collateral_valuations",
    "type": "physical_table",
    "name": "collateral_valuations",
    "description": "",
    "source": "market_risk.collateral_valuations",
    "columns": [
      {
        "name": "valuation_id",
        "description": "Stable identifier for a collateral valuation record.",
        "data_type": "",
        "nullable": ""
      },
      {
        "name": "collateral_id",
        "description": "Identifier of the pledged collateral asset being valued.",
        "data_type": "",
        "nullable": ""
      },
      {
        "name": "valuation_date",
        "description": "Business date on which the collateral market value and haircut are observed.",
        "data_type": "",
        "nullable": ""
      },
      {
        "name": "market_value_amount",
        "description": "Observed market value amount of the collateral before haircut adjustment.",
        "data_type": "",
        "nullable": ""
      },
      {
        "name": "haircut_rate",
        "description": "Haircut percentage applied to collateral market value for eligibility calculation.",
        "data_type": "",
        "nullable": ""
      }
    ],
    "source_datasets": [
      "collateral_valuations"
    ],
    "semantic_model": "CollateralMarginSemanticModel"
  },
  "field.collateral_valuations.valuation_id": {
    "id": "field.collateral_valuations.valuation_id",
    "type": "dataset_field",
    "name": "valuation_id",
    "description": "Stable identifier for a collateral valuation record.",
    "parent": "dataset.collateral_valuations",
    "dataset": "collateral_valuations",
    "field": "valuation_id",
    "expression": "valuation_id",
    "field_definition": {
      "name": "valuation_id",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "valuation_id"
          }
        ]
      },
      "ai_context": {
        "physical_type": "string",
        "nullable": false
      },
      "description": "Stable identifier for a collateral valuation record."
    }
  },
  "column.market_risk.collateral_valuations.valuation_id": {
    "id": "column.market_risk.collateral_valuations.valuation_id",
    "type": "column",
    "name": "valuation_id",
    "description": "Stable identifier for a collateral valuation record.",
    "parent": "table.market_risk.collateral_valuations",
    "physical_field": "market_risk.collateral_valuations.valuation_id",
    "dataset_field": "collateral_valuations.valuation_id"
  },
  "field.collateral_valuations.collateral_id": {
    "id": "field.collateral_valuations.collateral_id",
    "type": "dataset_field",
    "name": "collateral_id",
    "description": "Identifier of the pledged collateral asset being valued.",
    "parent": "dataset.collateral_valuations",
    "dataset": "collateral_valuations",
    "field": "collateral_id",
    "expression": "collateral_id",
    "field_definition": {
      "name": "collateral_id",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "collateral_id"
          }
        ]
      },
      "ai_context": {
        "physical_type": "string",
        "nullable": false
      },
      "description": "Identifier of the pledged collateral asset being valued."
    }
  },
  "column.market_risk.collateral_valuations.collateral_id": {
    "id": "column.market_risk.collateral_valuations.collateral_id",
    "type": "column",
    "name": "collateral_id",
    "description": "Identifier of the pledged collateral asset being valued.",
    "parent": "table.market_risk.collateral_valuations",
    "physical_field": "market_risk.collateral_valuations.collateral_id",
    "dataset_field": "collateral_valuations.collateral_id"
  },
  "field.collateral_valuations.valuation_date": {
    "id": "field.collateral_valuations.valuation_date",
    "type": "dataset_field",
    "name": "valuation_date",
    "description": "Business date on which the collateral market value and haircut are observed.",
    "parent": "dataset.collateral_valuations",
    "dataset": "collateral_valuations",
    "field": "valuation_date",
    "expression": "valuation_date",
    "field_definition": {
      "name": "valuation_date",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "valuation_date"
          }
        ]
      },
      "ai_context": {
        "physical_type": "date",
        "nullable": false
      },
      "description": "Business date on which the collateral market value and haircut are observed."
    }
  },
  "column.market_risk.collateral_valuations.valuation_date": {
    "id": "column.market_risk.collateral_valuations.valuation_date",
    "type": "column",
    "name": "valuation_date",
    "description": "Business date on which the collateral market value and haircut are observed.",
    "parent": "table.market_risk.collateral_valuations",
    "physical_field": "market_risk.collateral_valuations.valuation_date",
    "dataset_field": "collateral_valuations.valuation_date"
  },
  "field.collateral_valuations.market_value_amount": {
    "id": "field.collateral_valuations.market_value_amount",
    "type": "dataset_field",
    "name": "market_value_amount",
    "description": "Observed market value amount of the collateral before haircut adjustment.",
    "parent": "dataset.collateral_valuations",
    "dataset": "collateral_valuations",
    "field": "market_value_amount",
    "expression": "market_value_amount",
    "field_definition": {
      "name": "market_value_amount",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "market_value_amount"
          }
        ]
      },
      "ai_context": {
        "physical_type": "decimal",
        "nullable": false
      },
      "description": "Observed market value amount of the collateral before haircut adjustment."
    }
  },
  "column.market_risk.collateral_valuations.market_value_amount": {
    "id": "column.market_risk.collateral_valuations.market_value_amount",
    "type": "column",
    "name": "market_value_amount",
    "description": "Observed market value amount of the collateral before haircut adjustment.",
    "parent": "table.market_risk.collateral_valuations",
    "physical_field": "market_risk.collateral_valuations.market_value_amount",
    "dataset_field": "collateral_valuations.market_value_amount"
  },
  "field.collateral_valuations.haircut_rate": {
    "id": "field.collateral_valuations.haircut_rate",
    "type": "dataset_field",
    "name": "haircut_rate",
    "description": "Haircut percentage applied to collateral market value for eligibility calculation.",
    "parent": "dataset.collateral_valuations",
    "dataset": "collateral_valuations",
    "field": "haircut_rate",
    "expression": "haircut_rate",
    "field_definition": {
      "name": "haircut_rate",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "haircut_rate"
          }
        ]
      },
      "ai_context": {
        "physical_type": "decimal",
        "nullable": false
      },
      "description": "Haircut percentage applied to collateral market value for eligibility calculation."
    }
  },
  "column.market_risk.collateral_valuations.haircut_rate": {
    "id": "column.market_risk.collateral_valuations.haircut_rate",
    "type": "column",
    "name": "haircut_rate",
    "description": "Haircut percentage applied to collateral market value for eligibility calculation.",
    "parent": "table.market_risk.collateral_valuations",
    "physical_field": "market_risk.collateral_valuations.haircut_rate",
    "dataset_field": "collateral_valuations.haircut_rate"
  },
  "dataset.counterparties": {
    "id": "dataset.counterparties",
    "type": "semantic_dataset",
    "name": "counterparties",
    "description": "Legal counterparty reference records used to identify reporting counterparties, domicile, and regulatory segmentation for collateral margin obligations.",
    "source": "margin_core.counterparties",
    "primary_key": [
      "counterparty_id"
    ],
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
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "description": "Stable identifier for the legal counterparty reference record."
      },
      {
        "name": "legal_name",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "legal_name"
            }
          ]
        },
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "description": "Registered legal name of the reporting counterparty."
      },
      {
        "name": "domicile_country",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "domicile_country"
            }
          ]
        },
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "description": "Country or jurisdiction where the counterparty is domiciled for regulatory classification."
      },
      {
        "name": "regulatory_segment",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "regulatory_segment"
            }
          ]
        },
        "ai_context": {
          "physical_type": "string",
          "nullable": true
        },
        "description": "Regulatory counterparty segment used for reporting categorization and eligibility rules."
      }
    ],
    "source_tables": [
      "margin_core.counterparties"
    ],
    "physical_kind": "",
    "custom_extensions": [],
    "semantic_model": "CollateralMarginSemanticModel"
  },
  "table.margin_core.counterparties": {
    "id": "table.margin_core.counterparties",
    "type": "physical_table",
    "name": "counterparties",
    "description": "",
    "source": "margin_core.counterparties",
    "columns": [
      {
        "name": "counterparty_id",
        "description": "Stable identifier for the legal counterparty reference record.",
        "data_type": "",
        "nullable": ""
      },
      {
        "name": "legal_name",
        "description": "Registered legal name of the reporting counterparty.",
        "data_type": "",
        "nullable": ""
      },
      {
        "name": "domicile_country",
        "description": "Country or jurisdiction where the counterparty is domiciled for regulatory classification.",
        "data_type": "",
        "nullable": ""
      },
      {
        "name": "regulatory_segment",
        "description": "Regulatory counterparty segment used for reporting categorization and eligibility rules.",
        "data_type": "",
        "nullable": ""
      }
    ],
    "source_datasets": [
      "counterparties"
    ],
    "semantic_model": "CollateralMarginSemanticModel"
  },
  "field.counterparties.counterparty_id": {
    "id": "field.counterparties.counterparty_id",
    "type": "dataset_field",
    "name": "counterparty_id",
    "description": "Stable identifier for the legal counterparty reference record.",
    "parent": "dataset.counterparties",
    "dataset": "counterparties",
    "field": "counterparty_id",
    "expression": "counterparty_id",
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
      "ai_context": {
        "physical_type": "string",
        "nullable": false
      },
      "description": "Stable identifier for the legal counterparty reference record."
    }
  },
  "column.margin_core.counterparties.counterparty_id": {
    "id": "column.margin_core.counterparties.counterparty_id",
    "type": "column",
    "name": "counterparty_id",
    "description": "Stable identifier for the legal counterparty reference record.",
    "parent": "table.margin_core.counterparties",
    "physical_field": "margin_core.counterparties.counterparty_id",
    "dataset_field": "counterparties.counterparty_id"
  },
  "field.counterparties.legal_name": {
    "id": "field.counterparties.legal_name",
    "type": "dataset_field",
    "name": "legal_name",
    "description": "Registered legal name of the reporting counterparty.",
    "parent": "dataset.counterparties",
    "dataset": "counterparties",
    "field": "legal_name",
    "expression": "legal_name",
    "field_definition": {
      "name": "legal_name",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "legal_name"
          }
        ]
      },
      "ai_context": {
        "physical_type": "string",
        "nullable": false
      },
      "description": "Registered legal name of the reporting counterparty."
    }
  },
  "column.margin_core.counterparties.legal_name": {
    "id": "column.margin_core.counterparties.legal_name",
    "type": "column",
    "name": "legal_name",
    "description": "Registered legal name of the reporting counterparty.",
    "parent": "table.margin_core.counterparties",
    "physical_field": "margin_core.counterparties.legal_name",
    "dataset_field": "counterparties.legal_name"
  },
  "field.counterparties.domicile_country": {
    "id": "field.counterparties.domicile_country",
    "type": "dataset_field",
    "name": "domicile_country",
    "description": "Country or jurisdiction where the counterparty is domiciled for regulatory classification.",
    "parent": "dataset.counterparties",
    "dataset": "counterparties",
    "field": "domicile_country",
    "expression": "domicile_country",
    "field_definition": {
      "name": "domicile_country",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "domicile_country"
          }
        ]
      },
      "ai_context": {
        "physical_type": "string",
        "nullable": false
      },
      "description": "Country or jurisdiction where the counterparty is domiciled for regulatory classification."
    }
  },
  "column.margin_core.counterparties.domicile_country": {
    "id": "column.margin_core.counterparties.domicile_country",
    "type": "column",
    "name": "domicile_country",
    "description": "Country or jurisdiction where the counterparty is domiciled for regulatory classification.",
    "parent": "table.margin_core.counterparties",
    "physical_field": "margin_core.counterparties.domicile_country",
    "dataset_field": "counterparties.domicile_country"
  },
  "field.counterparties.regulatory_segment": {
    "id": "field.counterparties.regulatory_segment",
    "type": "dataset_field",
    "name": "regulatory_segment",
    "description": "Regulatory counterparty segment used for reporting categorization and eligibility rules.",
    "parent": "dataset.counterparties",
    "dataset": "counterparties",
    "field": "regulatory_segment",
    "expression": "regulatory_segment",
    "field_definition": {
      "name": "regulatory_segment",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "regulatory_segment"
          }
        ]
      },
      "ai_context": {
        "physical_type": "string",
        "nullable": true
      },
      "description": "Regulatory counterparty segment used for reporting categorization and eligibility rules."
    }
  },
  "column.margin_core.counterparties.regulatory_segment": {
    "id": "column.margin_core.counterparties.regulatory_segment",
    "type": "column",
    "name": "regulatory_segment",
    "description": "Regulatory counterparty segment used for reporting categorization and eligibility rules.",
    "parent": "table.margin_core.counterparties",
    "physical_field": "margin_core.counterparties.regulatory_segment",
    "dataset_field": "counterparties.regulatory_segment"
  },
  "dataset.margin_accounts": {
    "id": "dataset.margin_accounts",
    "type": "semantic_dataset",
    "name": "margin_accounts",
    "description": "Margin account records that track collateralized account obligations, account status, base currency, and the linked counterparty used for margin reporting.",
    "source": "margin_core.margin_accounts",
    "primary_key": [
      "account_id"
    ],
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
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "description": "Stable identifier for a margin account record at account grain."
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
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "description": "Identifier of the legal counterparty responsible for the margin account."
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
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "description": "Currency in which the margin account obligation is primarily managed and reported."
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
        "ai_context": {
          "physical_type": "string",
          "nullable": false
        },
        "description": "Operational status of the margin account used to determine reporting eligibility."
      }
    ],
    "source_tables": [
      "margin_core.margin_accounts"
    ],
    "physical_kind": "",
    "custom_extensions": [],
    "semantic_model": "CollateralMarginSemanticModel"
  },
  "table.margin_core.margin_accounts": {
    "id": "table.margin_core.margin_accounts",
    "type": "physical_table",
    "name": "margin_accounts",
    "description": "",
    "source": "margin_core.margin_accounts",
    "columns": [
      {
        "name": "account_id",
        "description": "Stable identifier for a margin account record at account grain.",
        "data_type": "",
        "nullable": ""
      },
      {
        "name": "counterparty_id",
        "description": "Identifier of the legal counterparty responsible for the margin account.",
        "data_type": "",
        "nullable": ""
      },
      {
        "name": "base_currency",
        "description": "Currency in which the margin account obligation is primarily managed and reported.",
        "data_type": "",
        "nullable": ""
      },
      {
        "name": "account_status",
        "description": "Operational status of the margin account used to determine reporting eligibility.",
        "data_type": "",
        "nullable": ""
      }
    ],
    "source_datasets": [
      "margin_accounts"
    ],
    "semantic_model": "CollateralMarginSemanticModel"
  },
  "field.margin_accounts.account_id": {
    "id": "field.margin_accounts.account_id",
    "type": "dataset_field",
    "name": "account_id",
    "description": "Stable identifier for a margin account record at account grain.",
    "parent": "dataset.margin_accounts",
    "dataset": "margin_accounts",
    "field": "account_id",
    "expression": "account_id",
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
      "ai_context": {
        "physical_type": "string",
        "nullable": false
      },
      "description": "Stable identifier for a margin account record at account grain."
    }
  },
  "column.margin_core.margin_accounts.account_id": {
    "id": "column.margin_core.margin_accounts.account_id",
    "type": "column",
    "name": "account_id",
    "description": "Stable identifier for a margin account record at account grain.",
    "parent": "table.margin_core.margin_accounts",
    "physical_field": "margin_core.margin_accounts.account_id",
    "dataset_field": "margin_accounts.account_id"
  },
  "field.margin_accounts.counterparty_id": {
    "id": "field.margin_accounts.counterparty_id",
    "type": "dataset_field",
    "name": "counterparty_id",
    "description": "Identifier of the legal counterparty responsible for the margin account.",
    "parent": "dataset.margin_accounts",
    "dataset": "margin_accounts",
    "field": "counterparty_id",
    "expression": "counterparty_id",
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
      "ai_context": {
        "physical_type": "string",
        "nullable": false
      },
      "description": "Identifier of the legal counterparty responsible for the margin account."
    }
  },
  "column.margin_core.margin_accounts.counterparty_id": {
    "id": "column.margin_core.margin_accounts.counterparty_id",
    "type": "column",
    "name": "counterparty_id",
    "description": "Identifier of the legal counterparty responsible for the margin account.",
    "parent": "table.margin_core.margin_accounts",
    "physical_field": "margin_core.margin_accounts.counterparty_id",
    "dataset_field": "margin_accounts.counterparty_id"
  },
  "field.margin_accounts.base_currency": {
    "id": "field.margin_accounts.base_currency",
    "type": "dataset_field",
    "name": "base_currency",
    "description": "Currency in which the margin account obligation is primarily managed and reported.",
    "parent": "dataset.margin_accounts",
    "dataset": "margin_accounts",
    "field": "base_currency",
    "expression": "base_currency",
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
      "ai_context": {
        "physical_type": "string",
        "nullable": false
      },
      "description": "Currency in which the margin account obligation is primarily managed and reported."
    }
  },
  "column.margin_core.margin_accounts.base_currency": {
    "id": "column.margin_core.margin_accounts.base_currency",
    "type": "column",
    "name": "base_currency",
    "description": "Currency in which the margin account obligation is primarily managed and reported.",
    "parent": "table.margin_core.margin_accounts",
    "physical_field": "margin_core.margin_accounts.base_currency",
    "dataset_field": "margin_accounts.base_currency"
  },
  "field.margin_accounts.account_status": {
    "id": "field.margin_accounts.account_status",
    "type": "dataset_field",
    "name": "account_status",
    "description": "Operational status of the margin account used to determine reporting eligibility.",
    "parent": "dataset.margin_accounts",
    "dataset": "margin_accounts",
    "field": "account_status",
    "expression": "account_status",
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
      "ai_context": {
        "physical_type": "string",
        "nullable": false
      },
      "description": "Operational status of the margin account used to determine reporting eligibility."
    }
  },
  "column.margin_core.margin_accounts.account_status": {
    "id": "column.margin_core.margin_accounts.account_status",
    "type": "column",
    "name": "account_status",
    "description": "Operational status of the margin account used to determine reporting eligibility.",
    "parent": "table.margin_core.margin_accounts",
    "physical_field": "margin_core.margin_accounts.account_status",
    "dataset_field": "margin_accounts.account_status"
  },
  "metric.eligible_collateral_value": {
    "id": "metric.eligible_collateral_value",
    "type": "semantic_metric",
    "name": "eligible_collateral_value",
    "description": "Market value after haircut for regulatory eligible collateral reporting.",
    "semantic_model": "CollateralMarginSemanticModel",
    "semantic_metric": "eligible_collateral_value",
    "expression": "collateral_valuations.market_value_amount * (1 - collateral_valuations.haircut_rate)",
    "source_fields": [
      "collateral_valuations.haircut_rate",
      "collateral_valuations.market_value_amount"
    ],
    "metric": {
      "name": "eligible_collateral_value",
      "description": "Market value after haircut for regulatory eligible collateral reporting.",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "collateral_valuations.market_value_amount * (1 - collateral_valuations.haircut_rate)"
          }
        ]
      },
      "ai_context": {
        "metric_type": "calculated_report_measure"
      }
    }
  },
  "requirement.item": {
    "id": "requirement.item",
    "type": "regulatory_requirement",
    "name": "合格抵质押品报送需求",
    "description": "监管/BRD要求每日生成保证金账户级合格抵质押品报表，用于说明每个保证金账户在估值日可计入监管口径的抵质押品资产、估值金额、监管折扣率和折扣后价值。需求还包括每日EOD生成、业务复核、异常估值说明和报表留痕；这些非数据类要求保留在本说明中，不强行建模为字段。\n",
    "source": "Collateral Margin Reporting BRD v1.0 section 3.2",
    "SLA": "Daily EOD before 21:00 local time; business review and exception notes completed before submission.",
    "semantic_scope": {
      "concepts": [
        {
          "name": "MarginAccount",
          "description": "需求需要 MarginAccount 作为保证金账户语义对象，用于说明每条报表记录归属的账户和账户级对账口径。"
        },
        {
          "name": "Counterparty",
          "description": "需求需要 Counterparty 作为交易对手语义对象，用于按法律实体或监管对象解释抵质押品暴露归属。"
        },
        {
          "name": "CollateralAsset",
          "description": "需求需要 CollateralAsset 作为抵质押品资产语义对象，用于识别参与合格抵质押品计算的资产或头寸。"
        },
        {
          "name": "CollateralValuation",
          "description": "需求需要 CollateralValuation 作为抵质押品估值语义对象，用于表达估值日期、市场价值、监管折扣率和折扣后价值。"
        }
      ],
      "required_fields": [
        {
          "name": "保证金账户标识",
          "description": "需求需要保证金账户标识，用于确定每条报表记录归属的账户并支持账户级对账。",
          "semantic_reference": "MarginAccount.has_AccountIdentifier",
          "required": true
        },
        {
          "name": "交易对手标识",
          "description": "需求需要交易对手标识，用于按法律实体或监管对象汇总抵质押品暴露。",
          "semantic_reference": "Counterparty.has_CounterpartyIdentifier",
          "required": true
        },
        {
          "name": "抵质押品标识",
          "description": "需求需要抵质押品标识，用于识别参与合格抵质押品计算的具体资产或头寸。",
          "semantic_reference": "CollateralAsset.has_CollateralIdentifier",
          "required": true
        },
        {
          "name": "估值日期",
          "description": "需求需要估值日期，用于说明抵质押品价值和折扣率适用的报告日期。",
          "semantic_reference": "CollateralValuation.has_ValuationDate",
          "required": true
        },
        {
          "name": "抵质押品折扣前市场价值",
          "description": "需求需要抵质押品折扣前市场价值，用于作为合格抵质押品价值计算的基础金额。",
          "semantic_reference": "CollateralValuation.has_MarketValueAmount",
          "required": true
        },
        {
          "name": "监管折扣率",
          "description": "需求需要监管折扣率，用于从市场价值计算监管口径下可计入的合格抵质押品价值。",
          "semantic_reference": "CollateralValuation.has_HaircutRate",
          "required": true
        }
      ],
      "controls": [
        {
          "name": "valuation_date_present",
          "target": "CollateralValuation.has_ValuationDate",
          "rule": "Valuation date must be present."
        },
        {
          "name": "haircut_non_negative",
          "target": "CollateralValuation.has_HaircutRate",
          "rule": "Haircut rate must be greater than or equal to zero."
        }
      ]
    },
    "required_fields": [
      {
        "name": "保证金账户标识",
        "description": "需求需要保证金账户标识，用于确定每条报表记录归属的账户并支持账户级对账。",
        "semantic_reference": "MarginAccount.has_AccountIdentifier",
        "required": true
      },
      {
        "name": "交易对手标识",
        "description": "需求需要交易对手标识，用于按法律实体或监管对象汇总抵质押品暴露。",
        "semantic_reference": "Counterparty.has_CounterpartyIdentifier",
        "required": true
      },
      {
        "name": "抵质押品标识",
        "description": "需求需要抵质押品标识，用于识别参与合格抵质押品计算的具体资产或头寸。",
        "semantic_reference": "CollateralAsset.has_CollateralIdentifier",
        "required": true
      },
      {
        "name": "估值日期",
        "description": "需求需要估值日期，用于说明抵质押品价值和折扣率适用的报告日期。",
        "semantic_reference": "CollateralValuation.has_ValuationDate",
        "required": true
      },
      {
        "name": "抵质押品折扣前市场价值",
        "description": "需求需要抵质押品折扣前市场价值，用于作为合格抵质押品价值计算的基础金额。",
        "semantic_reference": "CollateralValuation.has_MarketValueAmount",
        "required": true
      },
      {
        "name": "监管折扣率",
        "description": "需求需要监管折扣率，用于从市场价值计算监管口径下可计入的合格抵质押品价值。",
        "semantic_reference": "CollateralValuation.has_HaircutRate",
        "required": true
      }
    ],
    "calculations": [
      {
        "name": "折扣后合格抵质押品价值",
        "description": "需求需要折扣后合格抵质押品价值，用于展示监管口径下可计入的抵质押品金额。",
        "output": "CollateralValuation.has_EligibleCollateralValue",
        "inputs": [
          "CollateralValuation.has_MarketValueAmount",
          "CollateralValuation.has_HaircutRate"
        ],
        "expression": "CollateralValuation.has_MarketValueAmount * (1 - CollateralValuation.has_HaircutRate)"
      }
    ],
    "controls": []
  },
  "requirement_item..MarginAccount.has_AccountIdentifier": {
    "id": "requirement_item..MarginAccount.has_AccountIdentifier",
    "type": "requirement_semantic_item",
    "name": "保证金账户标识",
    "description": "需求需要保证金账户标识，用于确定每条报表记录归属的账户并支持账户级对账。",
    "parent": "requirement.item",
    "semantic_reference": "MarginAccount.has_AccountIdentifier",
    "required_field": {
      "name": "保证金账户标识",
      "description": "需求需要保证金账户标识，用于确定每条报表记录归属的账户并支持账户级对账。",
      "semantic_reference": "MarginAccount.has_AccountIdentifier",
      "required": true
    }
  },
  "requirement_item..Counterparty.has_CounterpartyIdentifier": {
    "id": "requirement_item..Counterparty.has_CounterpartyIdentifier",
    "type": "requirement_semantic_item",
    "name": "交易对手标识",
    "description": "需求需要交易对手标识，用于按法律实体或监管对象汇总抵质押品暴露。",
    "parent": "requirement.item",
    "semantic_reference": "Counterparty.has_CounterpartyIdentifier",
    "required_field": {
      "name": "交易对手标识",
      "description": "需求需要交易对手标识，用于按法律实体或监管对象汇总抵质押品暴露。",
      "semantic_reference": "Counterparty.has_CounterpartyIdentifier",
      "required": true
    }
  },
  "requirement_item..CollateralAsset.has_CollateralIdentifier": {
    "id": "requirement_item..CollateralAsset.has_CollateralIdentifier",
    "type": "requirement_semantic_item",
    "name": "抵质押品标识",
    "description": "需求需要抵质押品标识，用于识别参与合格抵质押品计算的具体资产或头寸。",
    "parent": "requirement.item",
    "semantic_reference": "CollateralAsset.has_CollateralIdentifier",
    "required_field": {
      "name": "抵质押品标识",
      "description": "需求需要抵质押品标识，用于识别参与合格抵质押品计算的具体资产或头寸。",
      "semantic_reference": "CollateralAsset.has_CollateralIdentifier",
      "required": true
    }
  },
  "requirement_item..CollateralValuation.has_ValuationDate": {
    "id": "requirement_item..CollateralValuation.has_ValuationDate",
    "type": "requirement_semantic_item",
    "name": "估值日期",
    "description": "需求需要估值日期，用于说明抵质押品价值和折扣率适用的报告日期。",
    "parent": "requirement.item",
    "semantic_reference": "CollateralValuation.has_ValuationDate",
    "required_field": {
      "name": "估值日期",
      "description": "需求需要估值日期，用于说明抵质押品价值和折扣率适用的报告日期。",
      "semantic_reference": "CollateralValuation.has_ValuationDate",
      "required": true
    }
  },
  "requirement_item..CollateralValuation.has_MarketValueAmount": {
    "id": "requirement_item..CollateralValuation.has_MarketValueAmount",
    "type": "requirement_semantic_item",
    "name": "抵质押品折扣前市场价值",
    "description": "需求需要抵质押品折扣前市场价值，用于作为合格抵质押品价值计算的基础金额。",
    "parent": "requirement.item",
    "semantic_reference": "CollateralValuation.has_MarketValueAmount",
    "required_field": {
      "name": "抵质押品折扣前市场价值",
      "description": "需求需要抵质押品折扣前市场价值，用于作为合格抵质押品价值计算的基础金额。",
      "semantic_reference": "CollateralValuation.has_MarketValueAmount",
      "required": true
    }
  },
  "requirement_item..CollateralValuation.has_HaircutRate": {
    "id": "requirement_item..CollateralValuation.has_HaircutRate",
    "type": "requirement_semantic_item",
    "name": "监管折扣率",
    "description": "需求需要监管折扣率，用于从市场价值计算监管口径下可计入的合格抵质押品价值。",
    "parent": "requirement.item",
    "semantic_reference": "CollateralValuation.has_HaircutRate",
    "required_field": {
      "name": "监管折扣率",
      "description": "需求需要监管折扣率，用于从市场价值计算监管口径下可计入的合格抵质押品价值。",
      "semantic_reference": "CollateralValuation.has_HaircutRate",
      "required": true
    }
  },
  "report_impl.item": {
    "id": "report_impl.item",
    "type": "report_implementation",
    "name": "每日合格抵质押品报表数据逻辑",
    "description": "说明每日合格抵质押品报表字段如何从已有保证金账户、交易对手、抵质押品和估值数据中取数、计算并满足需求口径；该逻辑不创建物理表。",
    "implements": "合格抵质押品报送需求",
    "field_mappings": [
      {
        "name": "保证金账户标识逻辑",
        "dataset": "collateral_margin_report_lines",
        "dataset_field": "account_id",
        "description": "数据逻辑说明保证金账户标识需求如何对应报表明细字段 account_id。",
        "requirement_field": "保证金账户标识",
        "source_field": "margin_accounts.account_id",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "margin_accounts.account_id"
            }
          ]
        }
      },
      {
        "name": "交易对手标识逻辑",
        "dataset": "collateral_margin_report_lines",
        "dataset_field": "counterparty_id",
        "description": "数据逻辑说明交易对手标识需求如何对应报表明细字段 counterparty_id。",
        "requirement_field": "交易对手标识",
        "source_field": "counterparties.counterparty_id",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "counterparties.counterparty_id"
            }
          ]
        }
      },
      {
        "name": "抵质押品标识逻辑",
        "dataset": "collateral_margin_report_lines",
        "dataset_field": "collateral_id",
        "description": "数据逻辑说明抵质押品标识需求如何对应报表明细字段 collateral_id。",
        "requirement_field": "抵质押品标识",
        "source_field": "collateral_positions.collateral_id",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "collateral_positions.collateral_id"
            }
          ]
        }
      },
      {
        "name": "估值日期逻辑",
        "dataset": "collateral_margin_report_lines",
        "dataset_field": "valuation_date",
        "description": "数据逻辑说明估值日期需求如何对应报表明细字段 valuation_date。",
        "requirement_field": "估值日期",
        "source_field": "collateral_valuations.valuation_date",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "collateral_valuations.valuation_date"
            }
          ]
        }
      },
      {
        "name": "抵质押品折扣前市场价值逻辑",
        "dataset": "collateral_valuations",
        "dataset_field": "market_value_amount",
        "description": "数据逻辑说明抵质押品折扣前市场价值需求如何对应估值数据字段 market_value_amount。",
        "requirement_field": "抵质押品折扣前市场价值",
        "source_field": "collateral_valuations.market_value_amount",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "collateral_valuations.market_value_amount"
            }
          ]
        }
      },
      {
        "name": "监管折扣率逻辑",
        "dataset": "collateral_valuations",
        "dataset_field": "haircut_rate",
        "description": "数据逻辑说明监管折扣率需求如何对应估值数据字段 haircut_rate。",
        "requirement_field": "监管折扣率",
        "source_field": "collateral_valuations.haircut_rate",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "collateral_valuations.haircut_rate"
            }
          ]
        }
      },
      {
        "name": "折扣后合格抵质押品价值逻辑",
        "dataset": "collateral_margin_report_lines",
        "dataset_field": "eligible_collateral_value",
        "description": "数据逻辑说明折扣后合格抵质押品价值需求如何由市场价值和监管折扣率计算并对应报表明细字段 eligible_collateral_value。",
        "requirement_field": "折扣后合格抵质押品价值",
        "expression": {
          "dialects": [
            {
              "dialect": "ANSI_SQL",
              "expression": "collateral_valuations.market_value_amount * (1 - collateral_valuations.haircut_rate)"
            }
          ]
        }
      }
    ],
    "source_fields": [
      "margin_accounts.account_id",
      "counterparties.counterparty_id",
      "collateral_positions.collateral_id",
      "collateral_valuations.valuation_date",
      "collateral_valuations.market_value_amount",
      "collateral_valuations.haircut_rate"
    ]
  },
  "implementation_field.collateral_margin_report_lines.account_id": {
    "id": "implementation_field.collateral_margin_report_lines.account_id",
    "type": "implementation_field_binding",
    "name": "保证金账户标识逻辑",
    "description": "数据逻辑说明保证金账户标识需求如何对应报表明细字段 account_id。",
    "parent": "report_impl.item",
    "implementation_field": {
      "name": "保证金账户标识逻辑",
      "dataset": "collateral_margin_report_lines",
      "dataset_field": "account_id",
      "description": "数据逻辑说明保证金账户标识需求如何对应报表明细字段 account_id。",
      "requirement_field": "保证金账户标识",
      "source_field": "margin_accounts.account_id",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "margin_accounts.account_id"
          }
        ]
      }
    }
  },
  "implementation_field.collateral_margin_report_lines.counterparty_id": {
    "id": "implementation_field.collateral_margin_report_lines.counterparty_id",
    "type": "implementation_field_binding",
    "name": "交易对手标识逻辑",
    "description": "数据逻辑说明交易对手标识需求如何对应报表明细字段 counterparty_id。",
    "parent": "report_impl.item",
    "implementation_field": {
      "name": "交易对手标识逻辑",
      "dataset": "collateral_margin_report_lines",
      "dataset_field": "counterparty_id",
      "description": "数据逻辑说明交易对手标识需求如何对应报表明细字段 counterparty_id。",
      "requirement_field": "交易对手标识",
      "source_field": "counterparties.counterparty_id",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "counterparties.counterparty_id"
          }
        ]
      }
    }
  },
  "implementation_field.collateral_margin_report_lines.collateral_id": {
    "id": "implementation_field.collateral_margin_report_lines.collateral_id",
    "type": "implementation_field_binding",
    "name": "抵质押品标识逻辑",
    "description": "数据逻辑说明抵质押品标识需求如何对应报表明细字段 collateral_id。",
    "parent": "report_impl.item",
    "implementation_field": {
      "name": "抵质押品标识逻辑",
      "dataset": "collateral_margin_report_lines",
      "dataset_field": "collateral_id",
      "description": "数据逻辑说明抵质押品标识需求如何对应报表明细字段 collateral_id。",
      "requirement_field": "抵质押品标识",
      "source_field": "collateral_positions.collateral_id",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "collateral_positions.collateral_id"
          }
        ]
      }
    }
  },
  "implementation_field.collateral_margin_report_lines.valuation_date": {
    "id": "implementation_field.collateral_margin_report_lines.valuation_date",
    "type": "implementation_field_binding",
    "name": "估值日期逻辑",
    "description": "数据逻辑说明估值日期需求如何对应报表明细字段 valuation_date。",
    "parent": "report_impl.item",
    "implementation_field": {
      "name": "估值日期逻辑",
      "dataset": "collateral_margin_report_lines",
      "dataset_field": "valuation_date",
      "description": "数据逻辑说明估值日期需求如何对应报表明细字段 valuation_date。",
      "requirement_field": "估值日期",
      "source_field": "collateral_valuations.valuation_date",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "collateral_valuations.valuation_date"
          }
        ]
      }
    }
  },
  "implementation_field.collateral_valuations.market_value_amount": {
    "id": "implementation_field.collateral_valuations.market_value_amount",
    "type": "implementation_field_binding",
    "name": "抵质押品折扣前市场价值逻辑",
    "description": "数据逻辑说明抵质押品折扣前市场价值需求如何对应估值数据字段 market_value_amount。",
    "parent": "report_impl.item",
    "implementation_field": {
      "name": "抵质押品折扣前市场价值逻辑",
      "dataset": "collateral_valuations",
      "dataset_field": "market_value_amount",
      "description": "数据逻辑说明抵质押品折扣前市场价值需求如何对应估值数据字段 market_value_amount。",
      "requirement_field": "抵质押品折扣前市场价值",
      "source_field": "collateral_valuations.market_value_amount",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "collateral_valuations.market_value_amount"
          }
        ]
      }
    }
  },
  "implementation_field.collateral_valuations.haircut_rate": {
    "id": "implementation_field.collateral_valuations.haircut_rate",
    "type": "implementation_field_binding",
    "name": "监管折扣率逻辑",
    "description": "数据逻辑说明监管折扣率需求如何对应估值数据字段 haircut_rate。",
    "parent": "report_impl.item",
    "implementation_field": {
      "name": "监管折扣率逻辑",
      "dataset": "collateral_valuations",
      "dataset_field": "haircut_rate",
      "description": "数据逻辑说明监管折扣率需求如何对应估值数据字段 haircut_rate。",
      "requirement_field": "监管折扣率",
      "source_field": "collateral_valuations.haircut_rate",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "collateral_valuations.haircut_rate"
          }
        ]
      }
    }
  },
  "implementation_field.collateral_margin_report_lines.eligible_collateral_value": {
    "id": "implementation_field.collateral_margin_report_lines.eligible_collateral_value",
    "type": "implementation_field_binding",
    "name": "折扣后合格抵质押品价值逻辑",
    "description": "数据逻辑说明折扣后合格抵质押品价值需求如何由市场价值和监管折扣率计算并对应报表明细字段 eligible_collateral_value。",
    "parent": "report_impl.item",
    "implementation_field": {
      "name": "折扣后合格抵质押品价值逻辑",
      "dataset": "collateral_margin_report_lines",
      "dataset_field": "eligible_collateral_value",
      "description": "数据逻辑说明折扣后合格抵质押品价值需求如何由市场价值和监管折扣率计算并对应报表明细字段 eligible_collateral_value。",
      "requirement_field": "折扣后合格抵质押品价值",
      "expression": {
        "dialects": [
          {
            "dialect": "ANSI_SQL",
            "expression": "collateral_valuations.market_value_amount * (1 - collateral_valuations.haircut_rate)"
          }
        ]
      }
    }
  }
};
window.OSI_CATALOG_DATA = window.CATALOG_DATA;
