window.GRAPH_DATA = {
  "nodes": [
    {
      "id": "concept.AccountData",
      "type": "base_entity_concept",
      "label": "AccountData",
      "properties": {
        "description": "Base concept for account-like records with common identifiers and status fields.",
        "concept_type": "EntityType",
        "base_entity": true,
        "extends": [],
        "identify_by": [
          "has_AccountIdentifier"
        ],
        "requires": []
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
        "inherited": false
      }
    },
    {
      "id": "value.AccountData.has_AccountStatus",
      "type": "value_type_property",
      "label": "StatusCode",
      "properties": {
        "description": "Status common to account-like records.",
        "parent": "concept.AccountData",
        "data_type": "StatusCode",
        "value_concept": "StatusCode",
        "field_name": "has_AccountStatus",
        "relationship_name": "has_AccountStatus",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{AccountData} has account status {StatusCode}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false
      }
    },
    {
      "id": "concept.CollateralAssetData",
      "type": "base_entity_concept",
      "label": "CollateralAssetData",
      "properties": {
        "description": "Base concept for collateral asset records with common collateral identifiers and classification fields.",
        "concept_type": "EntityType",
        "base_entity": true,
        "extends": [],
        "identify_by": [
          "has_CollateralIdentifier"
        ],
        "requires": []
      }
    },
    {
      "id": "value.CollateralAssetData.has_CollateralIdentifier",
      "type": "value_type_property",
      "label": "CollateralIdentifier",
      "properties": {
        "description": "Identifier common to collateral asset records.",
        "parent": "concept.CollateralAssetData",
        "data_type": "CollateralIdentifier",
        "value_concept": "CollateralIdentifier",
        "field_name": "has_CollateralIdentifier",
        "relationship_name": "has_CollateralIdentifier",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{CollateralAssetData} has collateral identifier {CollateralIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false
      }
    },
    {
      "id": "value.CollateralAssetData.has_AssetType",
      "type": "value_type_property",
      "label": "AssetType",
      "properties": {
        "description": "Asset type common to collateral asset records.",
        "parent": "concept.CollateralAssetData",
        "data_type": "AssetType",
        "value_concept": "AssetType",
        "field_name": "has_AssetType",
        "relationship_name": "has_AssetType",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralAssetData} has asset type {AssetType}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false
      }
    },
    {
      "id": "value.CollateralAssetData.has_AssetCurrency",
      "type": "value_type_property",
      "label": "CurrencyCode",
      "properties": {
        "description": "Currency common to collateral asset records.",
        "parent": "concept.CollateralAssetData",
        "data_type": "CurrencyCode",
        "value_concept": "CurrencyCode",
        "field_name": "has_AssetCurrency",
        "relationship_name": "has_AssetCurrency",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralAssetData} has currency {CurrencyCode}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false
      }
    },
    {
      "id": "value.CollateralAssetData.has_IssuerCountry",
      "type": "value_type_property",
      "label": "CountryCode",
      "properties": {
        "description": "Issuer country common to collateral asset records.",
        "parent": "concept.CollateralAssetData",
        "data_type": "CountryCode",
        "value_concept": "CountryCode",
        "field_name": "has_IssuerCountry",
        "relationship_name": "has_IssuerCountry",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralAssetData} has issuer country {CountryCode}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false
      }
    },
    {
      "id": "concept.CounterpartyData",
      "type": "base_entity_concept",
      "label": "CounterpartyData",
      "properties": {
        "description": "Base concept for counterparty-like records with legal identity and regulatory classification fields.",
        "concept_type": "EntityType",
        "base_entity": true,
        "extends": [],
        "identify_by": [
          "has_CounterpartyIdentifier"
        ],
        "requires": []
      }
    },
    {
      "id": "value.CounterpartyData.has_CounterpartyIdentifier",
      "type": "value_type_property",
      "label": "CounterpartyIdentifier",
      "properties": {
        "description": "Identifier common to counterparty-like records.",
        "parent": "concept.CounterpartyData",
        "data_type": "CounterpartyIdentifier",
        "value_concept": "CounterpartyIdentifier",
        "field_name": "has_CounterpartyIdentifier",
        "relationship_name": "has_CounterpartyIdentifier",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{CounterpartyData} has counterparty identifier {CounterpartyIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false
      }
    },
    {
      "id": "value.CounterpartyData.has_LegalName",
      "type": "value_type_property",
      "label": "LegalName",
      "properties": {
        "description": "Legal name common to counterparty-like records.",
        "parent": "concept.CounterpartyData",
        "data_type": "LegalName",
        "value_concept": "LegalName",
        "field_name": "has_LegalName",
        "relationship_name": "has_LegalName",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CounterpartyData} has legal name {LegalName}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false
      }
    },
    {
      "id": "value.CounterpartyData.has_DomicileCountry",
      "type": "value_type_property",
      "label": "CountryCode",
      "properties": {
        "description": "Domicile country common to counterparty-like records.",
        "parent": "concept.CounterpartyData",
        "data_type": "CountryCode",
        "value_concept": "CountryCode",
        "field_name": "has_DomicileCountry",
        "relationship_name": "has_DomicileCountry",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CounterpartyData} has domicile country {CountryCode}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false
      }
    },
    {
      "id": "value.CounterpartyData.has_RegulatorySegment",
      "type": "value_type_property",
      "label": "RegulatorySegment",
      "properties": {
        "description": "Regulatory segment common to counterparty-like records.",
        "parent": "concept.CounterpartyData",
        "data_type": "RegulatorySegment",
        "value_concept": "RegulatorySegment",
        "field_name": "has_RegulatorySegment",
        "relationship_name": "has_RegulatorySegment",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CounterpartyData} has regulatory segment {RegulatorySegment}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false
      }
    },
    {
      "id": "concept.ValuationData",
      "type": "base_entity_concept",
      "label": "ValuationData",
      "properties": {
        "description": "Base concept for valuation records with common valuation identity and date fields.",
        "concept_type": "EntityType",
        "base_entity": true,
        "extends": [],
        "identify_by": [
          "has_ValuationIdentifier"
        ],
        "requires": []
      }
    },
    {
      "id": "value.ValuationData.has_ValuationIdentifier",
      "type": "value_type_property",
      "label": "ValuationIdentifier",
      "properties": {
        "description": "Identifier common to valuation records.",
        "parent": "concept.ValuationData",
        "data_type": "ValuationIdentifier",
        "value_concept": "ValuationIdentifier",
        "field_name": "has_ValuationIdentifier",
        "relationship_name": "has_ValuationIdentifier",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{ValuationData} has valuation identifier {ValuationIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false
      }
    },
    {
      "id": "value.ValuationData.has_ValuationDate",
      "type": "value_type_property",
      "label": "Date",
      "properties": {
        "description": "Date common to valuation records.",
        "parent": "concept.ValuationData",
        "data_type": "Date",
        "value_concept": "Date",
        "field_name": "has_ValuationDate",
        "relationship_name": "has_ValuationDate",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{ValuationData} has valuation date {Date}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false
      }
    },
    {
      "id": "concept.CollateralAsset",
      "type": "entity_type_concept",
      "label": "CollateralAsset",
      "properties": {
        "description": "Asset pledged as collateral for margin obligations.",
        "concept_type": "EntityType",
        "base_entity": false,
        "extends": [
          "CollateralAssetData"
        ],
        "identify_by": [
          "has_CollateralIdentifier"
        ],
        "requires": []
      }
    },
    {
      "id": "concept.MarginAccount",
      "type": "entity_type_concept",
      "label": "MarginAccount",
      "properties": {
        "description": "Account used to hold margin obligations and pledged collateral.",
        "concept_type": "EntityType",
        "base_entity": false,
        "extends": [
          "AccountData"
        ],
        "identify_by": [
          "has_AccountIdentifier"
        ],
        "requires": []
      }
    },
    {
      "id": "concept.CollateralValuation",
      "type": "entity_type_concept",
      "label": "CollateralValuation",
      "properties": {
        "description": "Daily valuation record for collateral after market close.",
        "concept_type": "EntityType",
        "base_entity": false,
        "extends": [
          "ValuationData"
        ],
        "identify_by": [
          "has_ValuationIdentifier"
        ],
        "requires": []
      }
    },
    {
      "id": "value.CollateralValuation.has_MarketValueAmount",
      "type": "value_type_property",
      "label": "MonetaryAmount",
      "properties": {
        "description": "Gross market value before haircut.",
        "parent": "concept.CollateralValuation",
        "data_type": "MonetaryAmount",
        "value_concept": "MonetaryAmount",
        "field_name": "has_MarketValueAmount",
        "relationship_name": "has_MarketValueAmount",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralValuation} has market value amount {MonetaryAmount}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false
      }
    },
    {
      "id": "value.CollateralValuation.has_HaircutRate",
      "type": "value_type_property",
      "label": "Rate",
      "properties": {
        "description": "Haircut rate applied to the collateral valuation.",
        "parent": "concept.CollateralValuation",
        "data_type": "Rate",
        "value_concept": "Rate",
        "field_name": "has_HaircutRate",
        "relationship_name": "has_HaircutRate",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralValuation} has haircut rate {Rate}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false
      }
    },
    {
      "id": "value.CollateralValuation.has_EligibleCollateralValue",
      "type": "value_type_property",
      "label": "MonetaryAmount",
      "properties": {
        "description": "Market value after haircut represented as an entity-level calculated collateral valuation amount.",
        "parent": "concept.CollateralValuation",
        "data_type": "MonetaryAmount",
        "value_concept": "MonetaryAmount",
        "field_name": "has_EligibleCollateralValue",
        "relationship_name": "has_EligibleCollateralValue",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralValuation} has eligible collateral value {MonetaryAmount}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false,
        "calculation_type": "metric",
        "semantic_metric": "eligible_collateral_value",
        "semantic_reference": "metric.eligible_collateral_value",
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
      }
    },
    {
      "id": "concept.Counterparty",
      "type": "entity_type_concept",
      "label": "Counterparty",
      "properties": {
        "description": "Legal entity that owns margin accounts and posts collateral.",
        "concept_type": "EntityType",
        "base_entity": false,
        "extends": [
          "CounterpartyData"
        ],
        "identify_by": [
          "has_CounterpartyIdentifier"
        ],
        "requires": []
      }
    },
    {
      "id": "value.MarginAccount.has_BaseCurrency",
      "type": "value_type_property",
      "label": "CurrencyCode",
      "properties": {
        "description": "Currency used as the margin account base currency.",
        "parent": "concept.MarginAccount",
        "data_type": "CurrencyCode",
        "value_concept": "CurrencyCode",
        "field_name": "has_BaseCurrency",
        "relationship_name": "has_BaseCurrency",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{MarginAccount} has base currency {CurrencyCode}"
        ],
        "source_field": "ontology.relationships",
        "inherited": false
      }
    },
    {
      "id": "value.CollateralAsset.has_CollateralIdentifier",
      "type": "value_type_property",
      "label": "CollateralIdentifier",
      "properties": {
        "description": "Identifier common to collateral asset records.",
        "parent": "concept.CollateralAsset",
        "data_type": "CollateralIdentifier",
        "value_concept": "CollateralIdentifier",
        "field_name": "has_CollateralIdentifier",
        "relationship_name": "has_CollateralIdentifier",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{CollateralAssetData} has collateral identifier {CollateralIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "inherited": true,
        "inherited_from": "CollateralAssetData",
        "base_relationship_path": "CollateralAssetData.has_CollateralIdentifier",
        "inheritance_note": "Inherited from CollateralAssetData."
      }
    },
    {
      "id": "value.CollateralAsset.has_AssetType",
      "type": "value_type_property",
      "label": "AssetType",
      "properties": {
        "description": "Asset type common to collateral asset records.",
        "parent": "concept.CollateralAsset",
        "data_type": "AssetType",
        "value_concept": "AssetType",
        "field_name": "has_AssetType",
        "relationship_name": "has_AssetType",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralAssetData} has asset type {AssetType}"
        ],
        "source_field": "ontology.extends.relationships",
        "inherited": true,
        "inherited_from": "CollateralAssetData",
        "base_relationship_path": "CollateralAssetData.has_AssetType",
        "inheritance_note": "Inherited from CollateralAssetData."
      }
    },
    {
      "id": "value.CollateralAsset.has_AssetCurrency",
      "type": "value_type_property",
      "label": "CurrencyCode",
      "properties": {
        "description": "Currency common to collateral asset records.",
        "parent": "concept.CollateralAsset",
        "data_type": "CurrencyCode",
        "value_concept": "CurrencyCode",
        "field_name": "has_AssetCurrency",
        "relationship_name": "has_AssetCurrency",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralAssetData} has currency {CurrencyCode}"
        ],
        "source_field": "ontology.extends.relationships",
        "inherited": true,
        "inherited_from": "CollateralAssetData",
        "base_relationship_path": "CollateralAssetData.has_AssetCurrency",
        "inheritance_note": "Inherited from CollateralAssetData."
      }
    },
    {
      "id": "value.CollateralAsset.has_IssuerCountry",
      "type": "value_type_property",
      "label": "CountryCode",
      "properties": {
        "description": "Issuer country common to collateral asset records.",
        "parent": "concept.CollateralAsset",
        "data_type": "CountryCode",
        "value_concept": "CountryCode",
        "field_name": "has_IssuerCountry",
        "relationship_name": "has_IssuerCountry",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralAssetData} has issuer country {CountryCode}"
        ],
        "source_field": "ontology.extends.relationships",
        "inherited": true,
        "inherited_from": "CollateralAssetData",
        "base_relationship_path": "CollateralAssetData.has_IssuerCountry",
        "inheritance_note": "Inherited from CollateralAssetData."
      }
    },
    {
      "id": "value.CollateralValuation.has_ValuationIdentifier",
      "type": "value_type_property",
      "label": "ValuationIdentifier",
      "properties": {
        "description": "Identifier common to valuation records.",
        "parent": "concept.CollateralValuation",
        "data_type": "ValuationIdentifier",
        "value_concept": "ValuationIdentifier",
        "field_name": "has_ValuationIdentifier",
        "relationship_name": "has_ValuationIdentifier",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{ValuationData} has valuation identifier {ValuationIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "inherited": true,
        "inherited_from": "ValuationData",
        "base_relationship_path": "ValuationData.has_ValuationIdentifier",
        "inheritance_note": "Inherited from ValuationData."
      }
    },
    {
      "id": "value.CollateralValuation.has_ValuationDate",
      "type": "value_type_property",
      "label": "Date",
      "properties": {
        "description": "Date common to valuation records.",
        "parent": "concept.CollateralValuation",
        "data_type": "Date",
        "value_concept": "Date",
        "field_name": "has_ValuationDate",
        "relationship_name": "has_ValuationDate",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{ValuationData} has valuation date {Date}"
        ],
        "source_field": "ontology.extends.relationships",
        "inherited": true,
        "inherited_from": "ValuationData",
        "base_relationship_path": "ValuationData.has_ValuationDate",
        "inheritance_note": "Inherited from ValuationData."
      }
    },
    {
      "id": "value.Counterparty.has_CounterpartyIdentifier",
      "type": "value_type_property",
      "label": "CounterpartyIdentifier",
      "properties": {
        "description": "Identifier common to counterparty-like records.",
        "parent": "concept.Counterparty",
        "data_type": "CounterpartyIdentifier",
        "value_concept": "CounterpartyIdentifier",
        "field_name": "has_CounterpartyIdentifier",
        "relationship_name": "has_CounterpartyIdentifier",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{CounterpartyData} has counterparty identifier {CounterpartyIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "inherited": true,
        "inherited_from": "CounterpartyData",
        "base_relationship_path": "CounterpartyData.has_CounterpartyIdentifier",
        "inheritance_note": "Inherited from CounterpartyData."
      }
    },
    {
      "id": "value.Counterparty.has_LegalName",
      "type": "value_type_property",
      "label": "LegalName",
      "properties": {
        "description": "Legal name common to counterparty-like records.",
        "parent": "concept.Counterparty",
        "data_type": "LegalName",
        "value_concept": "LegalName",
        "field_name": "has_LegalName",
        "relationship_name": "has_LegalName",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CounterpartyData} has legal name {LegalName}"
        ],
        "source_field": "ontology.extends.relationships",
        "inherited": true,
        "inherited_from": "CounterpartyData",
        "base_relationship_path": "CounterpartyData.has_LegalName",
        "inheritance_note": "Inherited from CounterpartyData."
      }
    },
    {
      "id": "value.Counterparty.has_DomicileCountry",
      "type": "value_type_property",
      "label": "CountryCode",
      "properties": {
        "description": "Domicile country common to counterparty-like records.",
        "parent": "concept.Counterparty",
        "data_type": "CountryCode",
        "value_concept": "CountryCode",
        "field_name": "has_DomicileCountry",
        "relationship_name": "has_DomicileCountry",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CounterpartyData} has domicile country {CountryCode}"
        ],
        "source_field": "ontology.extends.relationships",
        "inherited": true,
        "inherited_from": "CounterpartyData",
        "base_relationship_path": "CounterpartyData.has_DomicileCountry",
        "inheritance_note": "Inherited from CounterpartyData."
      }
    },
    {
      "id": "value.Counterparty.has_RegulatorySegment",
      "type": "value_type_property",
      "label": "RegulatorySegment",
      "properties": {
        "description": "Regulatory segment common to counterparty-like records.",
        "parent": "concept.Counterparty",
        "data_type": "RegulatorySegment",
        "value_concept": "RegulatorySegment",
        "field_name": "has_RegulatorySegment",
        "relationship_name": "has_RegulatorySegment",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CounterpartyData} has regulatory segment {RegulatorySegment}"
        ],
        "source_field": "ontology.extends.relationships",
        "inherited": true,
        "inherited_from": "CounterpartyData",
        "base_relationship_path": "CounterpartyData.has_RegulatorySegment",
        "inheritance_note": "Inherited from CounterpartyData."
      }
    },
    {
      "id": "value.MarginAccount.has_AccountIdentifier",
      "type": "value_type_property",
      "label": "AccountIdentifier",
      "properties": {
        "description": "Identifier common to account-like records.",
        "parent": "concept.MarginAccount",
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
        "inheritance_note": "Inherited from AccountData."
      }
    },
    {
      "id": "value.MarginAccount.has_AccountStatus",
      "type": "value_type_property",
      "label": "StatusCode",
      "properties": {
        "description": "Status common to account-like records.",
        "parent": "concept.MarginAccount",
        "data_type": "StatusCode",
        "value_concept": "StatusCode",
        "field_name": "has_AccountStatus",
        "relationship_name": "has_AccountStatus",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{AccountData} has account status {StatusCode}"
        ],
        "source_field": "ontology.extends.relationships",
        "inherited": true,
        "inherited_from": "AccountData",
        "base_relationship_path": "AccountData.has_AccountStatus",
        "inheritance_note": "Inherited from AccountData."
      }
    },
    {
      "id": "table.collateral_margin_report_lines",
      "type": "physical_table",
      "label": "collateral_margin_report_lines",
      "properties": {
        "description": "Produced collateral margin report line records at report-line grain, carrying the account, counterparty, collateral, valuation date, and eligible collateral value submitted for reporting.",
        "source": "reporting.collateral_margin_report_lines",
        "primary_key": [
          "report_id",
          "line_number"
        ],
        "field_count": 7
      }
    },
    {
      "id": "column.collateral_margin_report_lines.report_id",
      "type": "column",
      "label": "report_id",
      "properties": {
        "description": "Identifier of the generated collateral margin report submission.",
        "parent": "table.collateral_margin_report_lines",
        "data_type": "field",
        "expression": "report_id"
      }
    },
    {
      "id": "column.collateral_margin_report_lines.line_number",
      "type": "column",
      "label": "line_number",
      "properties": {
        "description": "Line sequence number within a collateral margin report submission.",
        "parent": "table.collateral_margin_report_lines",
        "data_type": "field",
        "expression": "line_number"
      }
    },
    {
      "id": "column.collateral_margin_report_lines.account_id",
      "type": "column",
      "label": "account_id",
      "properties": {
        "description": "Margin account identifier reported on the output line.",
        "parent": "table.collateral_margin_report_lines",
        "data_type": "field",
        "expression": "account_id"
      }
    },
    {
      "id": "column.collateral_margin_report_lines.counterparty_id",
      "type": "column",
      "label": "counterparty_id",
      "properties": {
        "description": "Counterparty identifier reported on the output line.",
        "parent": "table.collateral_margin_report_lines",
        "data_type": "field",
        "expression": "counterparty_id"
      }
    },
    {
      "id": "column.collateral_margin_report_lines.collateral_id",
      "type": "column",
      "label": "collateral_id",
      "properties": {
        "description": "Collateral asset identifier reported on the output line.",
        "parent": "table.collateral_margin_report_lines",
        "data_type": "field",
        "expression": "collateral_id"
      }
    },
    {
      "id": "column.collateral_margin_report_lines.valuation_date",
      "type": "column",
      "label": "valuation_date",
      "properties": {
        "description": "Valuation date used for the reported collateral amount.",
        "parent": "table.collateral_margin_report_lines",
        "data_type": "field",
        "expression": "valuation_date"
      }
    },
    {
      "id": "column.collateral_margin_report_lines.eligible_collateral_value",
      "type": "column",
      "label": "eligible_collateral_value",
      "properties": {
        "description": "Reportable collateral value after applying haircut and eligibility calculation.",
        "parent": "table.collateral_margin_report_lines",
        "data_type": "field",
        "expression": "eligible_collateral_value"
      }
    },
    {
      "id": "table.collateral_positions",
      "type": "physical_table",
      "label": "collateral_positions",
      "properties": {
        "description": "Collateral position records that describe pledged collateral assets assigned to margin accounts, including asset classification, currency, and issuer jurisdiction.",
        "source": "collateral_master.collateral_positions",
        "primary_key": [
          "collateral_id"
        ],
        "field_count": 5
      }
    },
    {
      "id": "column.collateral_positions.collateral_id",
      "type": "column",
      "label": "collateral_id",
      "properties": {
        "description": "Stable identifier for the pledged collateral asset position.",
        "parent": "table.collateral_positions",
        "data_type": "field",
        "expression": "collateral_id"
      }
    },
    {
      "id": "column.collateral_positions.account_id",
      "type": "column",
      "label": "account_id",
      "properties": {
        "description": "Margin account identifier to which the collateral position is assigned.",
        "parent": "table.collateral_positions",
        "data_type": "field",
        "expression": "account_id"
      }
    },
    {
      "id": "column.collateral_positions.asset_type",
      "type": "column",
      "label": "asset_type",
      "properties": {
        "description": "Asset classification of the pledged collateral used for eligibility assessment.",
        "parent": "table.collateral_positions",
        "data_type": "field",
        "expression": "asset_type"
      }
    },
    {
      "id": "column.collateral_positions.currency",
      "type": "column",
      "label": "currency",
      "properties": {
        "description": "Denomination currency of the pledged collateral position.",
        "parent": "table.collateral_positions",
        "data_type": "field",
        "expression": "currency"
      }
    },
    {
      "id": "column.collateral_positions.issuer_country",
      "type": "column",
      "label": "issuer_country",
      "properties": {
        "description": "Issuer jurisdiction of the pledged collateral asset when applicable for eligibility rules.",
        "parent": "table.collateral_positions",
        "data_type": "field",
        "expression": "issuer_country"
      }
    },
    {
      "id": "table.collateral_valuations",
      "type": "physical_table",
      "label": "collateral_valuations",
      "properties": {
        "description": "Daily collateral valuation records that capture market value and haircut inputs for pledged assets at valuation-date grain.",
        "source": "market_risk.collateral_valuations",
        "primary_key": [
          "valuation_id"
        ],
        "field_count": 5
      }
    },
    {
      "id": "column.collateral_valuations.valuation_id",
      "type": "column",
      "label": "valuation_id",
      "properties": {
        "description": "Stable identifier for a collateral valuation record.",
        "parent": "table.collateral_valuations",
        "data_type": "field",
        "expression": "valuation_id"
      }
    },
    {
      "id": "column.collateral_valuations.collateral_id",
      "type": "column",
      "label": "collateral_id",
      "properties": {
        "description": "Identifier of the pledged collateral asset being valued.",
        "parent": "table.collateral_valuations",
        "data_type": "field",
        "expression": "collateral_id"
      }
    },
    {
      "id": "column.collateral_valuations.valuation_date",
      "type": "column",
      "label": "valuation_date",
      "properties": {
        "description": "Business date on which the collateral market value and haircut are observed.",
        "parent": "table.collateral_valuations",
        "data_type": "field",
        "expression": "valuation_date"
      }
    },
    {
      "id": "column.collateral_valuations.market_value_amount",
      "type": "column",
      "label": "market_value_amount",
      "properties": {
        "description": "Observed market value amount of the collateral before haircut adjustment.",
        "parent": "table.collateral_valuations",
        "data_type": "field",
        "expression": "market_value_amount"
      }
    },
    {
      "id": "column.collateral_valuations.haircut_rate",
      "type": "column",
      "label": "haircut_rate",
      "properties": {
        "description": "Haircut percentage applied to collateral market value for eligibility calculation.",
        "parent": "table.collateral_valuations",
        "data_type": "field",
        "expression": "haircut_rate"
      }
    },
    {
      "id": "table.counterparties",
      "type": "physical_table",
      "label": "counterparties",
      "properties": {
        "description": "Legal counterparty reference records used to identify reporting counterparties, domicile, and regulatory segmentation for collateral margin obligations.",
        "source": "margin_core.counterparties",
        "primary_key": [
          "counterparty_id"
        ],
        "field_count": 4
      }
    },
    {
      "id": "column.counterparties.counterparty_id",
      "type": "column",
      "label": "counterparty_id",
      "properties": {
        "description": "Stable identifier for the legal counterparty reference record.",
        "parent": "table.counterparties",
        "data_type": "field",
        "expression": "counterparty_id"
      }
    },
    {
      "id": "column.counterparties.legal_name",
      "type": "column",
      "label": "legal_name",
      "properties": {
        "description": "Registered legal name of the reporting counterparty.",
        "parent": "table.counterparties",
        "data_type": "field",
        "expression": "legal_name"
      }
    },
    {
      "id": "column.counterparties.domicile_country",
      "type": "column",
      "label": "domicile_country",
      "properties": {
        "description": "Country or jurisdiction where the counterparty is domiciled for regulatory classification.",
        "parent": "table.counterparties",
        "data_type": "field",
        "expression": "domicile_country"
      }
    },
    {
      "id": "column.counterparties.regulatory_segment",
      "type": "column",
      "label": "regulatory_segment",
      "properties": {
        "description": "Regulatory counterparty segment used for reporting categorization and eligibility rules.",
        "parent": "table.counterparties",
        "data_type": "field",
        "expression": "regulatory_segment"
      }
    },
    {
      "id": "table.margin_accounts",
      "type": "physical_table",
      "label": "margin_accounts",
      "properties": {
        "description": "Margin account records that track collateralized account obligations, account status, base currency, and the linked counterparty used for margin reporting.",
        "source": "margin_core.margin_accounts",
        "primary_key": [
          "account_id"
        ],
        "field_count": 4
      }
    },
    {
      "id": "column.margin_accounts.account_id",
      "type": "column",
      "label": "account_id",
      "properties": {
        "description": "Stable identifier for a margin account record at account grain.",
        "parent": "table.margin_accounts",
        "data_type": "field",
        "expression": "account_id"
      }
    },
    {
      "id": "column.margin_accounts.counterparty_id",
      "type": "column",
      "label": "counterparty_id",
      "properties": {
        "description": "Identifier of the legal counterparty responsible for the margin account.",
        "parent": "table.margin_accounts",
        "data_type": "field",
        "expression": "counterparty_id"
      }
    },
    {
      "id": "column.margin_accounts.base_currency",
      "type": "column",
      "label": "base_currency",
      "properties": {
        "description": "Currency in which the margin account obligation is primarily managed and reported.",
        "parent": "table.margin_accounts",
        "data_type": "field",
        "expression": "base_currency"
      }
    },
    {
      "id": "column.margin_accounts.account_status",
      "type": "column",
      "label": "account_status",
      "properties": {
        "description": "Operational status of the margin account used to determine reporting eligibility.",
        "parent": "table.margin_accounts",
        "data_type": "field",
        "expression": "account_status"
      }
    },
    {
      "id": "requirement.item",
      "type": "regulatory_requirement",
      "label": "合格抵质押品报送需求",
      "properties": {
        "description": "监管/BRD要求每日生成保证金账户级合格抵质押品报表，用于说明每个保证金账户在估值日可计入监管口径的抵质押品资产、估值金额、监管折扣率和折扣后价值。需求还包括每日EOD生成、业务复核、异常估值说明和报表留痕；这些非数据类要求保留在本说明中，不强行建模为字段。\n",
        "source": "Collateral Margin Reporting BRD v1.0 section 3.2",
        "SLA": "Daily EOD before 21:00 local time; business review and exception notes completed before submission."
      }
    },
    {
      "id": "requirement_item..MarginAccount.has_AccountIdentifier",
      "type": "requirement_semantic_item",
      "label": "保证金账户标识",
      "properties": {
        "parent": "requirement.item",
        "description": "需求需要保证金账户标识，用于确定每条报表记录归属的账户并支持账户级对账。",
        "data_type": "AccountIdentifier",
        "semantic_reference": "MarginAccount.has_AccountIdentifier",
        "value_concept": "AccountIdentifier",
        "source_concept": "MarginAccount",
        "relationship": "has_AccountIdentifier",
        "required": true,
        "rule": null
      }
    },
    {
      "id": "requirement_item..Counterparty.has_CounterpartyIdentifier",
      "type": "requirement_semantic_item",
      "label": "交易对手标识",
      "properties": {
        "parent": "requirement.item",
        "description": "需求需要交易对手标识，用于按法律实体或监管对象汇总抵质押品暴露。",
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
      "id": "requirement_item..CollateralAsset.has_CollateralIdentifier",
      "type": "requirement_semantic_item",
      "label": "抵质押品标识",
      "properties": {
        "parent": "requirement.item",
        "description": "需求需要抵质押品标识，用于识别参与合格抵质押品计算的具体资产或头寸。",
        "data_type": "CollateralIdentifier",
        "semantic_reference": "CollateralAsset.has_CollateralIdentifier",
        "value_concept": "CollateralIdentifier",
        "source_concept": "CollateralAsset",
        "relationship": "has_CollateralIdentifier",
        "required": true,
        "rule": null
      }
    },
    {
      "id": "requirement_item..CollateralValuation.has_ValuationDate",
      "type": "requirement_semantic_item",
      "label": "估值日期",
      "properties": {
        "parent": "requirement.item",
        "description": "需求需要估值日期，用于说明抵质押品价值和折扣率适用的报告日期。",
        "data_type": "Date",
        "semantic_reference": "CollateralValuation.has_ValuationDate",
        "value_concept": "Date",
        "source_concept": "CollateralValuation",
        "relationship": "has_ValuationDate",
        "required": true,
        "rule": null
      }
    },
    {
      "id": "requirement_item..CollateralValuation.has_MarketValueAmount",
      "type": "requirement_semantic_item",
      "label": "抵质押品折扣前市场价值",
      "properties": {
        "parent": "requirement.item",
        "description": "需求需要抵质押品折扣前市场价值，用于作为合格抵质押品价值计算的基础金额。",
        "data_type": "MonetaryAmount",
        "semantic_reference": "CollateralValuation.has_MarketValueAmount",
        "value_concept": "MonetaryAmount",
        "source_concept": "CollateralValuation",
        "relationship": "has_MarketValueAmount",
        "required": true,
        "rule": null
      }
    },
    {
      "id": "requirement_item..CollateralValuation.has_HaircutRate",
      "type": "requirement_semantic_item",
      "label": "监管折扣率",
      "properties": {
        "parent": "requirement.item",
        "description": "需求需要监管折扣率，用于从市场价值计算监管口径下可计入的合格抵质押品价值。",
        "data_type": "Rate",
        "semantic_reference": "CollateralValuation.has_HaircutRate",
        "value_concept": "Rate",
        "source_concept": "CollateralValuation",
        "relationship": "has_HaircutRate",
        "required": true,
        "rule": null
      }
    },
    {
      "id": "requirement_item..CollateralValuation.has_EligibleCollateralValue",
      "type": "requirement_semantic_item",
      "label": "折扣后合格抵质押品价值",
      "properties": {
        "parent": "requirement.item",
        "description": "需求需要折扣后合格抵质押品价值，用于展示监管口径下可计入的抵质押品金额。",
        "data_type": "calculation",
        "semantic_reference": "CollateralValuation.has_EligibleCollateralValue",
        "expression": "CollateralValuation.has_MarketValueAmount * (1 - CollateralValuation.has_HaircutRate)",
        "inputs": [
          "CollateralValuation.has_MarketValueAmount",
          "CollateralValuation.has_HaircutRate"
        ]
      }
    },
    {
      "id": "report_impl.item",
      "type": "report_implementation",
      "label": "每日合格抵质押品报表数据逻辑",
      "properties": {
        "description": "说明每日合格抵质押品报表字段如何从已有保证金账户、交易对手、抵质押品和估值数据中取数、计算并满足需求口径；该逻辑不创建物理表。",
        "implements": "合格抵质押品报送需求"
      }
    },
    {
      "id": "implementation_field.collateral_margin_report_lines.account_id",
      "type": "implementation_field_binding",
      "label": "保证金账户标识逻辑",
      "properties": {
        "parent": "report_impl.item",
        "description": "数据逻辑说明保证金账户标识需求如何对应报表明细字段 account_id。",
        "data_type": "logic field",
        "binding_role": "logic field",
        "dataset": "collateral_margin_report_lines",
        "field": "保证金账户标识逻辑",
        "dataset_field": "collateral_margin_report_lines.account_id",
        "requirement_field": "保证金账户标识",
        "source_field": "margin_accounts.account_id",
        "expression": "margin_accounts.account_id",
        "expression_fields": [
          "margin_accounts.account_id"
        ]
      }
    },
    {
      "id": "implementation_field.collateral_margin_report_lines.counterparty_id",
      "type": "implementation_field_binding",
      "label": "交易对手标识逻辑",
      "properties": {
        "parent": "report_impl.item",
        "description": "数据逻辑说明交易对手标识需求如何对应报表明细字段 counterparty_id。",
        "data_type": "logic field",
        "binding_role": "logic field",
        "dataset": "collateral_margin_report_lines",
        "field": "交易对手标识逻辑",
        "dataset_field": "collateral_margin_report_lines.counterparty_id",
        "requirement_field": "交易对手标识",
        "source_field": "counterparties.counterparty_id",
        "expression": "counterparties.counterparty_id",
        "expression_fields": [
          "counterparties.counterparty_id"
        ]
      }
    },
    {
      "id": "implementation_field.collateral_margin_report_lines.collateral_id",
      "type": "implementation_field_binding",
      "label": "抵质押品标识逻辑",
      "properties": {
        "parent": "report_impl.item",
        "description": "数据逻辑说明抵质押品标识需求如何对应报表明细字段 collateral_id。",
        "data_type": "logic field",
        "binding_role": "logic field",
        "dataset": "collateral_margin_report_lines",
        "field": "抵质押品标识逻辑",
        "dataset_field": "collateral_margin_report_lines.collateral_id",
        "requirement_field": "抵质押品标识",
        "source_field": "collateral_positions.collateral_id",
        "expression": "collateral_positions.collateral_id",
        "expression_fields": [
          "collateral_positions.collateral_id"
        ]
      }
    },
    {
      "id": "implementation_field.collateral_margin_report_lines.valuation_date",
      "type": "implementation_field_binding",
      "label": "估值日期逻辑",
      "properties": {
        "parent": "report_impl.item",
        "description": "数据逻辑说明估值日期需求如何对应报表明细字段 valuation_date。",
        "data_type": "logic field",
        "binding_role": "logic field",
        "dataset": "collateral_margin_report_lines",
        "field": "估值日期逻辑",
        "dataset_field": "collateral_margin_report_lines.valuation_date",
        "requirement_field": "估值日期",
        "source_field": "collateral_valuations.valuation_date",
        "expression": "collateral_valuations.valuation_date",
        "expression_fields": [
          "collateral_valuations.valuation_date"
        ]
      }
    },
    {
      "id": "implementation_field.collateral_valuations.market_value_amount",
      "type": "implementation_field_binding",
      "label": "抵质押品折扣前市场价值逻辑",
      "properties": {
        "parent": "report_impl.item",
        "description": "数据逻辑说明抵质押品折扣前市场价值需求如何对应估值数据字段 market_value_amount。",
        "data_type": "logic field",
        "binding_role": "logic field",
        "dataset": "collateral_valuations",
        "field": "抵质押品折扣前市场价值逻辑",
        "dataset_field": "collateral_valuations.market_value_amount",
        "requirement_field": "抵质押品折扣前市场价值",
        "source_field": "collateral_valuations.market_value_amount",
        "expression": "collateral_valuations.market_value_amount",
        "expression_fields": [
          "collateral_valuations.market_value_amount"
        ]
      }
    },
    {
      "id": "implementation_field.collateral_valuations.haircut_rate",
      "type": "implementation_field_binding",
      "label": "监管折扣率逻辑",
      "properties": {
        "parent": "report_impl.item",
        "description": "数据逻辑说明监管折扣率需求如何对应估值数据字段 haircut_rate。",
        "data_type": "logic field",
        "binding_role": "logic field",
        "dataset": "collateral_valuations",
        "field": "监管折扣率逻辑",
        "dataset_field": "collateral_valuations.haircut_rate",
        "requirement_field": "监管折扣率",
        "source_field": "collateral_valuations.haircut_rate",
        "expression": "collateral_valuations.haircut_rate",
        "expression_fields": [
          "collateral_valuations.haircut_rate"
        ]
      }
    },
    {
      "id": "implementation_field.collateral_margin_report_lines.eligible_collateral_value",
      "type": "implementation_field_binding",
      "label": "折扣后合格抵质押品价值逻辑",
      "properties": {
        "parent": "report_impl.item",
        "description": "数据逻辑说明折扣后合格抵质押品价值需求如何由市场价值和监管折扣率计算并对应报表明细字段 eligible_collateral_value。",
        "data_type": "logic field",
        "binding_role": "logic field",
        "dataset": "collateral_margin_report_lines",
        "field": "折扣后合格抵质押品价值逻辑",
        "dataset_field": "collateral_margin_report_lines.eligible_collateral_value",
        "requirement_field": "折扣后合格抵质押品价值",
        "source_field": null,
        "expression": "collateral_valuations.market_value_amount * (1 - collateral_valuations.haircut_rate)",
        "expression_fields": [
          "collateral_valuations.haircut_rate",
          "collateral_valuations.market_value_amount"
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
        "description": "AccountData has value concept has_AccountIdentifier (AccountIdentifier).",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{AccountData} has account identifier {AccountIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "AccountIdentifier",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.AccountData.CONTAINS.contains_value.value.AccountData.has_AccountStatus",
      "source": "concept.AccountData",
      "target": "value.AccountData.has_AccountStatus",
      "label": "contains value",
      "properties": {
        "description": "AccountData has value concept has_AccountStatus (StatusCode).",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{AccountData} has account status {StatusCode}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "StatusCode",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.CollateralAssetData.CONTAINS.contains_value.value.CollateralAssetData.has_CollateralIdentifier",
      "source": "concept.CollateralAssetData",
      "target": "value.CollateralAssetData.has_CollateralIdentifier",
      "label": "contains value",
      "properties": {
        "description": "CollateralAssetData has value concept has_CollateralIdentifier (CollateralIdentifier).",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{CollateralAssetData} has collateral identifier {CollateralIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CollateralIdentifier",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.CollateralAssetData.CONTAINS.contains_value.value.CollateralAssetData.has_AssetType",
      "source": "concept.CollateralAssetData",
      "target": "value.CollateralAssetData.has_AssetType",
      "label": "contains value",
      "properties": {
        "description": "CollateralAssetData has value concept has_AssetType (AssetType).",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralAssetData} has asset type {AssetType}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "AssetType",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.CollateralAssetData.CONTAINS.contains_value.value.CollateralAssetData.has_AssetCurrency",
      "source": "concept.CollateralAssetData",
      "target": "value.CollateralAssetData.has_AssetCurrency",
      "label": "contains value",
      "properties": {
        "description": "CollateralAssetData has value concept has_AssetCurrency (CurrencyCode).",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralAssetData} has currency {CurrencyCode}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CurrencyCode",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.CollateralAssetData.CONTAINS.contains_value.value.CollateralAssetData.has_IssuerCountry",
      "source": "concept.CollateralAssetData",
      "target": "value.CollateralAssetData.has_IssuerCountry",
      "label": "contains value",
      "properties": {
        "description": "CollateralAssetData has value concept has_IssuerCountry (CountryCode).",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralAssetData} has issuer country {CountryCode}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CountryCode",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.CounterpartyData.CONTAINS.contains_value.value.CounterpartyData.has_CounterpartyIdentifier",
      "source": "concept.CounterpartyData",
      "target": "value.CounterpartyData.has_CounterpartyIdentifier",
      "label": "contains value",
      "properties": {
        "description": "CounterpartyData has value concept has_CounterpartyIdentifier (CounterpartyIdentifier).",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{CounterpartyData} has counterparty identifier {CounterpartyIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CounterpartyIdentifier",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.CounterpartyData.CONTAINS.contains_value.value.CounterpartyData.has_LegalName",
      "source": "concept.CounterpartyData",
      "target": "value.CounterpartyData.has_LegalName",
      "label": "contains value",
      "properties": {
        "description": "CounterpartyData has value concept has_LegalName (LegalName).",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CounterpartyData} has legal name {LegalName}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "LegalName",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.CounterpartyData.CONTAINS.contains_value.value.CounterpartyData.has_DomicileCountry",
      "source": "concept.CounterpartyData",
      "target": "value.CounterpartyData.has_DomicileCountry",
      "label": "contains value",
      "properties": {
        "description": "CounterpartyData has value concept has_DomicileCountry (CountryCode).",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CounterpartyData} has domicile country {CountryCode}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CountryCode",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.CounterpartyData.CONTAINS.contains_value.value.CounterpartyData.has_RegulatorySegment",
      "source": "concept.CounterpartyData",
      "target": "value.CounterpartyData.has_RegulatorySegment",
      "label": "contains value",
      "properties": {
        "description": "CounterpartyData has value concept has_RegulatorySegment (RegulatorySegment).",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CounterpartyData} has regulatory segment {RegulatorySegment}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "RegulatorySegment",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.ValuationData.CONTAINS.contains_value.value.ValuationData.has_ValuationIdentifier",
      "source": "concept.ValuationData",
      "target": "value.ValuationData.has_ValuationIdentifier",
      "label": "contains value",
      "properties": {
        "description": "ValuationData has value concept has_ValuationIdentifier (ValuationIdentifier).",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{ValuationData} has valuation identifier {ValuationIdentifier}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "ValuationIdentifier",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.ValuationData.CONTAINS.contains_value.value.ValuationData.has_ValuationDate",
      "source": "concept.ValuationData",
      "target": "value.ValuationData.has_ValuationDate",
      "label": "contains value",
      "properties": {
        "description": "ValuationData has value concept has_ValuationDate (Date).",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{ValuationData} has valuation date {Date}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "Date",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.CollateralAsset.EXTENDS.extends.concept.CollateralAssetData",
      "source": "concept.CollateralAsset",
      "target": "concept.CollateralAssetData",
      "label": "extends",
      "properties": {
        "description": "CollateralAsset extends CollateralAssetData.",
        "base_entity": "CollateralAssetData"
      },
      "type": "EXTENDS"
    },
    {
      "id": "PART_OF_MarginAccount",
      "source": "concept.CollateralAsset",
      "target": "concept.MarginAccount",
      "label": "PART_OF_MarginAccount",
      "properties": {
        "verbalizes": [
          "{CollateralAsset} is part of the collateral set for {MarginAccount}"
        ],
        "roles": [
          {
            "concept": "MarginAccount"
          }
        ]
      }
    },
    {
      "id": "edge.concept.CollateralValuation.EXTENDS.extends.concept.ValuationData",
      "source": "concept.CollateralValuation",
      "target": "concept.ValuationData",
      "label": "extends",
      "properties": {
        "description": "CollateralValuation extends ValuationData.",
        "base_entity": "ValuationData"
      },
      "type": "EXTENDS"
    },
    {
      "id": "VALUES_CollateralAsset",
      "source": "concept.CollateralValuation",
      "target": "concept.CollateralAsset",
      "label": "VALUES_CollateralAsset",
      "properties": {
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralValuation} values {CollateralAsset}"
        ],
        "roles": [
          {
            "concept": "CollateralAsset"
          }
        ]
      }
    },
    {
      "id": "edge.concept.CollateralValuation.CONTAINS.contains_value.value.CollateralValuation.has_MarketValueAmount",
      "source": "concept.CollateralValuation",
      "target": "value.CollateralValuation.has_MarketValueAmount",
      "label": "contains value",
      "properties": {
        "description": "CollateralValuation has value concept has_MarketValueAmount (MonetaryAmount).",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralValuation} has market value amount {MonetaryAmount}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "MonetaryAmount",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.CollateralValuation.CONTAINS.contains_value.value.CollateralValuation.has_HaircutRate",
      "source": "concept.CollateralValuation",
      "target": "value.CollateralValuation.has_HaircutRate",
      "label": "contains value",
      "properties": {
        "description": "CollateralValuation has value concept has_HaircutRate (Rate).",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralValuation} has haircut rate {Rate}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "Rate",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.CollateralValuation.CONTAINS.contains_value.value.CollateralValuation.has_EligibleCollateralValue",
      "source": "concept.CollateralValuation",
      "target": "value.CollateralValuation.has_EligibleCollateralValue",
      "label": "contains value",
      "properties": {
        "description": "CollateralValuation has value concept has_EligibleCollateralValue (MonetaryAmount).",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralValuation} has eligible collateral value {MonetaryAmount}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "MonetaryAmount",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Counterparty.EXTENDS.extends.concept.CounterpartyData",
      "source": "concept.Counterparty",
      "target": "concept.CounterpartyData",
      "label": "extends",
      "properties": {
        "description": "Counterparty extends CounterpartyData.",
        "base_entity": "CounterpartyData"
      },
      "type": "EXTENDS"
    },
    {
      "id": "RELATED_TO_MarginAccount",
      "source": "concept.Counterparty",
      "target": "concept.MarginAccount",
      "label": "RELATED_TO_MarginAccount",
      "properties": {
        "verbalizes": [
          "{Counterparty} is related to {MarginAccount} through account ownership or control"
        ],
        "roles": [
          {
            "concept": "MarginAccount"
          }
        ]
      }
    },
    {
      "id": "edge.concept.MarginAccount.EXTENDS.extends.concept.AccountData",
      "source": "concept.MarginAccount",
      "target": "concept.AccountData",
      "label": "extends",
      "properties": {
        "description": "MarginAccount extends AccountData.",
        "base_entity": "AccountData"
      },
      "type": "EXTENDS"
    },
    {
      "id": "REFERENCES_Counterparty",
      "source": "concept.MarginAccount",
      "target": "concept.Counterparty",
      "label": "REFERENCES_Counterparty",
      "properties": {
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{MarginAccount} is owned by {Counterparty}"
        ],
        "roles": [
          {
            "concept": "Counterparty"
          }
        ]
      }
    },
    {
      "id": "DEPENDS_ON_CollateralAsset",
      "source": "concept.MarginAccount",
      "target": "concept.CollateralAsset",
      "label": "DEPENDS_ON_CollateralAsset",
      "properties": {
        "verbalizes": [
          "{MarginAccount} depends on pledged {CollateralAsset} for margin coverage"
        ],
        "roles": [
          {
            "concept": "CollateralAsset"
          }
        ]
      }
    },
    {
      "id": "edge.concept.MarginAccount.CONTAINS.contains_value.value.MarginAccount.has_BaseCurrency",
      "source": "concept.MarginAccount",
      "target": "value.MarginAccount.has_BaseCurrency",
      "label": "contains value",
      "properties": {
        "description": "MarginAccount has value concept has_BaseCurrency (CurrencyCode).",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{MarginAccount} has base currency {CurrencyCode}"
        ],
        "source_field": "ontology.relationships",
        "value_concept": "CurrencyCode",
        "inherited": false
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.CollateralAsset.CONTAINS.inherited_value.value.CollateralAsset.has_CollateralIdentifier",
      "source": "concept.CollateralAsset",
      "target": "value.CollateralAsset.has_CollateralIdentifier",
      "label": "inherited value",
      "properties": {
        "description": "CollateralAsset inherits value concept has_CollateralIdentifier (CollateralIdentifier) from CollateralAssetData.",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{CollateralAssetData} has collateral identifier {CollateralIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "CollateralIdentifier",
        "inherited": true,
        "inherited_from": "CollateralAssetData",
        "base_relationship_path": "CollateralAssetData.has_CollateralIdentifier",
        "inheritance_note": "Inherited from CollateralAssetData."
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.CollateralAsset.CONTAINS.inherited_value.value.CollateralAsset.has_AssetType",
      "source": "concept.CollateralAsset",
      "target": "value.CollateralAsset.has_AssetType",
      "label": "inherited value",
      "properties": {
        "description": "CollateralAsset inherits value concept has_AssetType (AssetType) from CollateralAssetData.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralAssetData} has asset type {AssetType}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "AssetType",
        "inherited": true,
        "inherited_from": "CollateralAssetData",
        "base_relationship_path": "CollateralAssetData.has_AssetType",
        "inheritance_note": "Inherited from CollateralAssetData."
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.CollateralAsset.CONTAINS.inherited_value.value.CollateralAsset.has_AssetCurrency",
      "source": "concept.CollateralAsset",
      "target": "value.CollateralAsset.has_AssetCurrency",
      "label": "inherited value",
      "properties": {
        "description": "CollateralAsset inherits value concept has_AssetCurrency (CurrencyCode) from CollateralAssetData.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralAssetData} has currency {CurrencyCode}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "CurrencyCode",
        "inherited": true,
        "inherited_from": "CollateralAssetData",
        "base_relationship_path": "CollateralAssetData.has_AssetCurrency",
        "inheritance_note": "Inherited from CollateralAssetData."
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.CollateralAsset.CONTAINS.inherited_value.value.CollateralAsset.has_IssuerCountry",
      "source": "concept.CollateralAsset",
      "target": "value.CollateralAsset.has_IssuerCountry",
      "label": "inherited value",
      "properties": {
        "description": "CollateralAsset inherits value concept has_IssuerCountry (CountryCode) from CollateralAssetData.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CollateralAssetData} has issuer country {CountryCode}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "CountryCode",
        "inherited": true,
        "inherited_from": "CollateralAssetData",
        "base_relationship_path": "CollateralAssetData.has_IssuerCountry",
        "inheritance_note": "Inherited from CollateralAssetData."
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.CollateralValuation.CONTAINS.inherited_value.value.CollateralValuation.has_ValuationIdentifier",
      "source": "concept.CollateralValuation",
      "target": "value.CollateralValuation.has_ValuationIdentifier",
      "label": "inherited value",
      "properties": {
        "description": "CollateralValuation inherits value concept has_ValuationIdentifier (ValuationIdentifier) from ValuationData.",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{ValuationData} has valuation identifier {ValuationIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "ValuationIdentifier",
        "inherited": true,
        "inherited_from": "ValuationData",
        "base_relationship_path": "ValuationData.has_ValuationIdentifier",
        "inheritance_note": "Inherited from ValuationData."
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.CollateralValuation.CONTAINS.inherited_value.value.CollateralValuation.has_ValuationDate",
      "source": "concept.CollateralValuation",
      "target": "value.CollateralValuation.has_ValuationDate",
      "label": "inherited value",
      "properties": {
        "description": "CollateralValuation inherits value concept has_ValuationDate (Date) from ValuationData.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{ValuationData} has valuation date {Date}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "Date",
        "inherited": true,
        "inherited_from": "ValuationData",
        "base_relationship_path": "ValuationData.has_ValuationDate",
        "inheritance_note": "Inherited from ValuationData."
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Counterparty.CONTAINS.inherited_value.value.Counterparty.has_CounterpartyIdentifier",
      "source": "concept.Counterparty",
      "target": "value.Counterparty.has_CounterpartyIdentifier",
      "label": "inherited value",
      "properties": {
        "description": "Counterparty inherits value concept has_CounterpartyIdentifier (CounterpartyIdentifier) from CounterpartyData.",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{CounterpartyData} has counterparty identifier {CounterpartyIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "CounterpartyIdentifier",
        "inherited": true,
        "inherited_from": "CounterpartyData",
        "base_relationship_path": "CounterpartyData.has_CounterpartyIdentifier",
        "inheritance_note": "Inherited from CounterpartyData."
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Counterparty.CONTAINS.inherited_value.value.Counterparty.has_LegalName",
      "source": "concept.Counterparty",
      "target": "value.Counterparty.has_LegalName",
      "label": "inherited value",
      "properties": {
        "description": "Counterparty inherits value concept has_LegalName (LegalName) from CounterpartyData.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CounterpartyData} has legal name {LegalName}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "LegalName",
        "inherited": true,
        "inherited_from": "CounterpartyData",
        "base_relationship_path": "CounterpartyData.has_LegalName",
        "inheritance_note": "Inherited from CounterpartyData."
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Counterparty.CONTAINS.inherited_value.value.Counterparty.has_DomicileCountry",
      "source": "concept.Counterparty",
      "target": "value.Counterparty.has_DomicileCountry",
      "label": "inherited value",
      "properties": {
        "description": "Counterparty inherits value concept has_DomicileCountry (CountryCode) from CounterpartyData.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CounterpartyData} has domicile country {CountryCode}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "CountryCode",
        "inherited": true,
        "inherited_from": "CounterpartyData",
        "base_relationship_path": "CounterpartyData.has_DomicileCountry",
        "inheritance_note": "Inherited from CounterpartyData."
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.Counterparty.CONTAINS.inherited_value.value.Counterparty.has_RegulatorySegment",
      "source": "concept.Counterparty",
      "target": "value.Counterparty.has_RegulatorySegment",
      "label": "inherited value",
      "properties": {
        "description": "Counterparty inherits value concept has_RegulatorySegment (RegulatorySegment) from CounterpartyData.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{CounterpartyData} has regulatory segment {RegulatorySegment}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "RegulatorySegment",
        "inherited": true,
        "inherited_from": "CounterpartyData",
        "base_relationship_path": "CounterpartyData.has_RegulatorySegment",
        "inheritance_note": "Inherited from CounterpartyData."
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.MarginAccount.CONTAINS.inherited_value.value.MarginAccount.has_AccountIdentifier",
      "source": "concept.MarginAccount",
      "target": "value.MarginAccount.has_AccountIdentifier",
      "label": "inherited value",
      "properties": {
        "description": "MarginAccount inherits value concept has_AccountIdentifier (AccountIdentifier) from AccountData.",
        "multiplicity": "OneToOne",
        "verbalizes": [
          "{AccountData} has account identifier {AccountIdentifier}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "AccountIdentifier",
        "inherited": true,
        "inherited_from": "AccountData",
        "base_relationship_path": "AccountData.has_AccountIdentifier",
        "inheritance_note": "Inherited from AccountData."
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.concept.MarginAccount.CONTAINS.inherited_value.value.MarginAccount.has_AccountStatus",
      "source": "concept.MarginAccount",
      "target": "value.MarginAccount.has_AccountStatus",
      "label": "inherited value",
      "properties": {
        "description": "MarginAccount inherits value concept has_AccountStatus (StatusCode) from AccountData.",
        "multiplicity": "ManyToOne",
        "verbalizes": [
          "{AccountData} has account status {StatusCode}"
        ],
        "source_field": "ontology.extends.relationships",
        "value_concept": "StatusCode",
        "inherited": true,
        "inherited_from": "AccountData",
        "base_relationship_path": "AccountData.has_AccountStatus",
        "inheritance_note": "Inherited from AccountData."
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.value.AccountData.has_AccountIdentifier.SHARES_VALUE_TYPE.AccountIdentifier.value.MarginAccount.has_AccountIdentifier",
      "source": "value.AccountData.has_AccountIdentifier",
      "target": "value.MarginAccount.has_AccountIdentifier",
      "label": "AccountIdentifier",
      "properties": {
        "description": "Both fields use ValueType concept AccountIdentifier.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "AccountIdentifier"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.AccountData.has_AccountStatus.SHARES_VALUE_TYPE.StatusCode.value.MarginAccount.has_AccountStatus",
      "source": "value.AccountData.has_AccountStatus",
      "target": "value.MarginAccount.has_AccountStatus",
      "label": "StatusCode",
      "properties": {
        "description": "Both fields use ValueType concept StatusCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "StatusCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.CollateralAsset.has_CollateralIdentifier.SHARES_VALUE_TYPE.CollateralIdentifier.value.CollateralAssetData.has_CollateralIdentifier",
      "source": "value.CollateralAsset.has_CollateralIdentifier",
      "target": "value.CollateralAssetData.has_CollateralIdentifier",
      "label": "CollateralIdentifier",
      "properties": {
        "description": "Both fields use ValueType concept CollateralIdentifier.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CollateralIdentifier"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.CollateralAsset.has_AssetType.SHARES_VALUE_TYPE.AssetType.value.CollateralAssetData.has_AssetType",
      "source": "value.CollateralAsset.has_AssetType",
      "target": "value.CollateralAssetData.has_AssetType",
      "label": "AssetType",
      "properties": {
        "description": "Both fields use ValueType concept AssetType.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "AssetType"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.CollateralAsset.has_AssetCurrency.SHARES_VALUE_TYPE.CurrencyCode.value.CollateralAssetData.has_AssetCurrency",
      "source": "value.CollateralAsset.has_AssetCurrency",
      "target": "value.CollateralAssetData.has_AssetCurrency",
      "label": "CurrencyCode",
      "properties": {
        "description": "Both fields use ValueType concept CurrencyCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CurrencyCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.CollateralAsset.has_AssetCurrency.SHARES_VALUE_TYPE.CurrencyCode.value.MarginAccount.has_BaseCurrency",
      "source": "value.CollateralAsset.has_AssetCurrency",
      "target": "value.MarginAccount.has_BaseCurrency",
      "label": "CurrencyCode",
      "properties": {
        "description": "Both fields use ValueType concept CurrencyCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CurrencyCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.CollateralAssetData.has_AssetCurrency.SHARES_VALUE_TYPE.CurrencyCode.value.MarginAccount.has_BaseCurrency",
      "source": "value.CollateralAssetData.has_AssetCurrency",
      "target": "value.MarginAccount.has_BaseCurrency",
      "label": "CurrencyCode",
      "properties": {
        "description": "Both fields use ValueType concept CurrencyCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CurrencyCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.CollateralAsset.has_IssuerCountry.SHARES_VALUE_TYPE.CountryCode.value.CollateralAssetData.has_IssuerCountry",
      "source": "value.CollateralAsset.has_IssuerCountry",
      "target": "value.CollateralAssetData.has_IssuerCountry",
      "label": "CountryCode",
      "properties": {
        "description": "Both fields use ValueType concept CountryCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CountryCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.CollateralAsset.has_IssuerCountry.SHARES_VALUE_TYPE.CountryCode.value.Counterparty.has_DomicileCountry",
      "source": "value.CollateralAsset.has_IssuerCountry",
      "target": "value.Counterparty.has_DomicileCountry",
      "label": "CountryCode",
      "properties": {
        "description": "Both fields use ValueType concept CountryCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CountryCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.CollateralAsset.has_IssuerCountry.SHARES_VALUE_TYPE.CountryCode.value.CounterpartyData.has_DomicileCountry",
      "source": "value.CollateralAsset.has_IssuerCountry",
      "target": "value.CounterpartyData.has_DomicileCountry",
      "label": "CountryCode",
      "properties": {
        "description": "Both fields use ValueType concept CountryCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CountryCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.CollateralAssetData.has_IssuerCountry.SHARES_VALUE_TYPE.CountryCode.value.Counterparty.has_DomicileCountry",
      "source": "value.CollateralAssetData.has_IssuerCountry",
      "target": "value.Counterparty.has_DomicileCountry",
      "label": "CountryCode",
      "properties": {
        "description": "Both fields use ValueType concept CountryCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CountryCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.CollateralAssetData.has_IssuerCountry.SHARES_VALUE_TYPE.CountryCode.value.CounterpartyData.has_DomicileCountry",
      "source": "value.CollateralAssetData.has_IssuerCountry",
      "target": "value.CounterpartyData.has_DomicileCountry",
      "label": "CountryCode",
      "properties": {
        "description": "Both fields use ValueType concept CountryCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CountryCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.Counterparty.has_DomicileCountry.SHARES_VALUE_TYPE.CountryCode.value.CounterpartyData.has_DomicileCountry",
      "source": "value.Counterparty.has_DomicileCountry",
      "target": "value.CounterpartyData.has_DomicileCountry",
      "label": "CountryCode",
      "properties": {
        "description": "Both fields use ValueType concept CountryCode.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CountryCode"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.Counterparty.has_CounterpartyIdentifier.SHARES_VALUE_TYPE.CounterpartyIdentifier.value.CounterpartyData.has_CounterpartyIdentifier",
      "source": "value.Counterparty.has_CounterpartyIdentifier",
      "target": "value.CounterpartyData.has_CounterpartyIdentifier",
      "label": "CounterpartyIdentifier",
      "properties": {
        "description": "Both fields use ValueType concept CounterpartyIdentifier.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "CounterpartyIdentifier"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.Counterparty.has_LegalName.SHARES_VALUE_TYPE.LegalName.value.CounterpartyData.has_LegalName",
      "source": "value.Counterparty.has_LegalName",
      "target": "value.CounterpartyData.has_LegalName",
      "label": "LegalName",
      "properties": {
        "description": "Both fields use ValueType concept LegalName.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "LegalName"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.Counterparty.has_RegulatorySegment.SHARES_VALUE_TYPE.RegulatorySegment.value.CounterpartyData.has_RegulatorySegment",
      "source": "value.Counterparty.has_RegulatorySegment",
      "target": "value.CounterpartyData.has_RegulatorySegment",
      "label": "RegulatorySegment",
      "properties": {
        "description": "Both fields use ValueType concept RegulatorySegment.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "RegulatorySegment"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.CollateralValuation.has_ValuationIdentifier.SHARES_VALUE_TYPE.ValuationIdentifier.value.ValuationData.has_ValuationIdentifier",
      "source": "value.CollateralValuation.has_ValuationIdentifier",
      "target": "value.ValuationData.has_ValuationIdentifier",
      "label": "ValuationIdentifier",
      "properties": {
        "description": "Both fields use ValueType concept ValuationIdentifier.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "ValuationIdentifier"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.CollateralValuation.has_ValuationDate.SHARES_VALUE_TYPE.Date.value.ValuationData.has_ValuationDate",
      "source": "value.CollateralValuation.has_ValuationDate",
      "target": "value.ValuationData.has_ValuationDate",
      "label": "Date",
      "properties": {
        "description": "Both fields use ValueType concept Date.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "Date"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.value.CollateralValuation.has_EligibleCollateralValue.SHARES_VALUE_TYPE.MonetaryAmount.value.CollateralValuation.has_MarketValueAmount",
      "source": "value.CollateralValuation.has_EligibleCollateralValue",
      "target": "value.CollateralValuation.has_MarketValueAmount",
      "label": "MonetaryAmount",
      "properties": {
        "description": "Both fields use ValueType concept MonetaryAmount.",
        "source_field": "ontology.relationships.roles.concept",
        "value_concept": "MonetaryAmount"
      },
      "type": "SHARES_VALUE_TYPE"
    },
    {
      "id": "edge.table.collateral_margin_report_lines.CONTAINS.contains.column.collateral_margin_report_lines.report_id",
      "source": "table.collateral_margin_report_lines",
      "target": "column.collateral_margin_report_lines.report_id",
      "label": "contains",
      "properties": {
        "description": "collateral_margin_report_lines contains field report_id.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.collateral_margin_report_lines.CONTAINS.contains.column.collateral_margin_report_lines.line_number",
      "source": "table.collateral_margin_report_lines",
      "target": "column.collateral_margin_report_lines.line_number",
      "label": "contains",
      "properties": {
        "description": "collateral_margin_report_lines contains field line_number.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.collateral_margin_report_lines.CONTAINS.contains.column.collateral_margin_report_lines.account_id",
      "source": "table.collateral_margin_report_lines",
      "target": "column.collateral_margin_report_lines.account_id",
      "label": "contains",
      "properties": {
        "description": "collateral_margin_report_lines contains field account_id.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.collateral_margin_report_lines.CONTAINS.contains.column.collateral_margin_report_lines.counterparty_id",
      "source": "table.collateral_margin_report_lines",
      "target": "column.collateral_margin_report_lines.counterparty_id",
      "label": "contains",
      "properties": {
        "description": "collateral_margin_report_lines contains field counterparty_id.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.collateral_margin_report_lines.CONTAINS.contains.column.collateral_margin_report_lines.collateral_id",
      "source": "table.collateral_margin_report_lines",
      "target": "column.collateral_margin_report_lines.collateral_id",
      "label": "contains",
      "properties": {
        "description": "collateral_margin_report_lines contains field collateral_id.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.collateral_margin_report_lines.CONTAINS.contains.column.collateral_margin_report_lines.valuation_date",
      "source": "table.collateral_margin_report_lines",
      "target": "column.collateral_margin_report_lines.valuation_date",
      "label": "contains",
      "properties": {
        "description": "collateral_margin_report_lines contains field valuation_date.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.collateral_margin_report_lines.CONTAINS.contains.column.collateral_margin_report_lines.eligible_collateral_value",
      "source": "table.collateral_margin_report_lines",
      "target": "column.collateral_margin_report_lines.eligible_collateral_value",
      "label": "contains",
      "properties": {
        "description": "collateral_margin_report_lines contains field eligible_collateral_value.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.collateral_positions.CONTAINS.contains.column.collateral_positions.collateral_id",
      "source": "table.collateral_positions",
      "target": "column.collateral_positions.collateral_id",
      "label": "contains",
      "properties": {
        "description": "collateral_positions contains field collateral_id.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.collateral_positions.CONTAINS.contains.column.collateral_positions.account_id",
      "source": "table.collateral_positions",
      "target": "column.collateral_positions.account_id",
      "label": "contains",
      "properties": {
        "description": "collateral_positions contains field account_id.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.collateral_positions.CONTAINS.contains.column.collateral_positions.asset_type",
      "source": "table.collateral_positions",
      "target": "column.collateral_positions.asset_type",
      "label": "contains",
      "properties": {
        "description": "collateral_positions contains field asset_type.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.collateral_positions.CONTAINS.contains.column.collateral_positions.currency",
      "source": "table.collateral_positions",
      "target": "column.collateral_positions.currency",
      "label": "contains",
      "properties": {
        "description": "collateral_positions contains field currency.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.collateral_positions.CONTAINS.contains.column.collateral_positions.issuer_country",
      "source": "table.collateral_positions",
      "target": "column.collateral_positions.issuer_country",
      "label": "contains",
      "properties": {
        "description": "collateral_positions contains field issuer_country.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.collateral_valuations.CONTAINS.contains.column.collateral_valuations.valuation_id",
      "source": "table.collateral_valuations",
      "target": "column.collateral_valuations.valuation_id",
      "label": "contains",
      "properties": {
        "description": "collateral_valuations contains field valuation_id.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.collateral_valuations.CONTAINS.contains.column.collateral_valuations.collateral_id",
      "source": "table.collateral_valuations",
      "target": "column.collateral_valuations.collateral_id",
      "label": "contains",
      "properties": {
        "description": "collateral_valuations contains field collateral_id.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.collateral_valuations.CONTAINS.contains.column.collateral_valuations.valuation_date",
      "source": "table.collateral_valuations",
      "target": "column.collateral_valuations.valuation_date",
      "label": "contains",
      "properties": {
        "description": "collateral_valuations contains field valuation_date.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.collateral_valuations.CONTAINS.contains.column.collateral_valuations.market_value_amount",
      "source": "table.collateral_valuations",
      "target": "column.collateral_valuations.market_value_amount",
      "label": "contains",
      "properties": {
        "description": "collateral_valuations contains field market_value_amount.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.collateral_valuations.CONTAINS.contains.column.collateral_valuations.haircut_rate",
      "source": "table.collateral_valuations",
      "target": "column.collateral_valuations.haircut_rate",
      "label": "contains",
      "properties": {
        "description": "collateral_valuations contains field haircut_rate.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.counterparties.CONTAINS.contains.column.counterparties.counterparty_id",
      "source": "table.counterparties",
      "target": "column.counterparties.counterparty_id",
      "label": "contains",
      "properties": {
        "description": "counterparties contains field counterparty_id.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.counterparties.CONTAINS.contains.column.counterparties.legal_name",
      "source": "table.counterparties",
      "target": "column.counterparties.legal_name",
      "label": "contains",
      "properties": {
        "description": "counterparties contains field legal_name.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.counterparties.CONTAINS.contains.column.counterparties.domicile_country",
      "source": "table.counterparties",
      "target": "column.counterparties.domicile_country",
      "label": "contains",
      "properties": {
        "description": "counterparties contains field domicile_country.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.counterparties.CONTAINS.contains.column.counterparties.regulatory_segment",
      "source": "table.counterparties",
      "target": "column.counterparties.regulatory_segment",
      "label": "contains",
      "properties": {
        "description": "counterparties contains field regulatory_segment.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.margin_accounts.CONTAINS.contains.column.margin_accounts.account_id",
      "source": "table.margin_accounts",
      "target": "column.margin_accounts.account_id",
      "label": "contains",
      "properties": {
        "description": "margin_accounts contains field account_id.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.margin_accounts.CONTAINS.contains.column.margin_accounts.counterparty_id",
      "source": "table.margin_accounts",
      "target": "column.margin_accounts.counterparty_id",
      "label": "contains",
      "properties": {
        "description": "margin_accounts contains field counterparty_id.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.margin_accounts.CONTAINS.contains.column.margin_accounts.base_currency",
      "source": "table.margin_accounts",
      "target": "column.margin_accounts.base_currency",
      "label": "contains",
      "properties": {
        "description": "margin_accounts contains field base_currency.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.margin_accounts.CONTAINS.contains.column.margin_accounts.account_status",
      "source": "table.margin_accounts",
      "target": "column.margin_accounts.account_status",
      "label": "contains",
      "properties": {
        "description": "margin_accounts contains field account_status.",
        "source_field": "semantic_model.datasets.fields"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.table.margin_accounts.DATASET_JOIN.join_counterparty_id.table.counterparties",
      "source": "table.margin_accounts",
      "target": "table.counterparties",
      "label": "join counterparty_id",
      "properties": {
        "description": "margin_accounts joins counterparties on ['counterparty_id'] = ['counterparty_id'].",
        "join_name": "reference_counterparty",
        "relationship": {
          "name": "reference_counterparty",
          "from": "margin_accounts",
          "to": "counterparties",
          "from_columns": [
            "counterparty_id"
          ],
          "to_columns": [
            "counterparty_id"
          ]
        }
      },
      "type": "DATASET_JOIN"
    },
    {
      "id": "edge.table.collateral_positions.DATASET_JOIN.join_account_id.table.margin_accounts",
      "source": "table.collateral_positions",
      "target": "table.margin_accounts",
      "label": "join account_id",
      "properties": {
        "description": "collateral_positions joins margin_accounts on ['account_id'] = ['account_id'].",
        "join_name": "pledge_collateral",
        "relationship": {
          "name": "pledge_collateral",
          "from": "collateral_positions",
          "to": "margin_accounts",
          "from_columns": [
            "account_id"
          ],
          "to_columns": [
            "account_id"
          ]
        }
      },
      "type": "DATASET_JOIN"
    },
    {
      "id": "edge.table.collateral_valuations.DATASET_JOIN.join_collateral_id.table.collateral_positions",
      "source": "table.collateral_valuations",
      "target": "table.collateral_positions",
      "label": "join collateral_id",
      "properties": {
        "description": "collateral_valuations joins collateral_positions on ['collateral_id'] = ['collateral_id'].",
        "join_name": "value_collateral",
        "relationship": {
          "name": "value_collateral",
          "from": "collateral_valuations",
          "to": "collateral_positions",
          "from_columns": [
            "collateral_id"
          ],
          "to_columns": [
            "collateral_id"
          ]
        }
      },
      "type": "DATASET_JOIN"
    },
    {
      "id": "edge.concept.CollateralAsset.MAPS_TO.maps_to_table.table.collateral_margin_report_lines",
      "source": "concept.CollateralAsset",
      "target": "table.collateral_margin_report_lines",
      "label": "maps to table",
      "properties": {
        "description": "CollateralAsset is populated from collateral_margin_report_lines.",
        "fields": [
          "collateral_margin_report_lines.collateral_id"
        ],
        "ai_context": {
          "description": "Collateral asset identifiers as represented in the report-line dataset for requirement traceability."
        }
      },
      "type": "MAPS_TO"
    },
    {
      "id": "edge.concept.CollateralAsset.MAPS_TO.maps_to_table.table.collateral_positions",
      "source": "concept.CollateralAsset",
      "target": "table.collateral_positions",
      "label": "maps to table",
      "properties": {
        "description": "CollateralAsset is populated from collateral_positions.",
        "fields": [
          "collateral_positions.asset_type",
          "collateral_positions.collateral_id",
          "collateral_positions.currency",
          "collateral_positions.issuer_country"
        ],
        "ai_context": {
          "description": "Pledged collateral asset source population mapped as CollateralAsset entity records."
        }
      },
      "type": "MAPS_TO"
    },
    {
      "id": "edge.value.CollateralAsset.has_AssetCurrency.MAPS_TO_FIELD.has_AssetCurrency.column.collateral_positions.currency",
      "source": "value.CollateralAsset.has_AssetCurrency",
      "target": "column.collateral_positions.currency",
      "label": "has_AssetCurrency",
      "properties": {
        "description": "CollateralAsset.has_AssetCurrency maps to physical field collateral_positions.currency.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "collateral_positions.currency"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.CollateralAsset.has_AssetType.MAPS_TO_FIELD.has_AssetType.column.collateral_positions.asset_type",
      "source": "value.CollateralAsset.has_AssetType",
      "target": "column.collateral_positions.asset_type",
      "label": "has_AssetType",
      "properties": {
        "description": "CollateralAsset.has_AssetType maps to physical field collateral_positions.asset_type.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "collateral_positions.asset_type"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.CollateralAsset.has_CollateralIdentifier.MAPS_TO_FIELD.has_CollateralIdentifier.column.collateral_margin_report_lines.collateral_id",
      "source": "value.CollateralAsset.has_CollateralIdentifier",
      "target": "column.collateral_margin_report_lines.collateral_id",
      "label": "has_CollateralIdentifier",
      "properties": {
        "description": "CollateralAsset.has_CollateralIdentifier maps to physical field collateral_margin_report_lines.collateral_id.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "collateral_margin_report_lines.collateral_id"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.CollateralAsset.has_CollateralIdentifier.MAPS_TO_FIELD.has_CollateralIdentifier.column.collateral_positions.collateral_id",
      "source": "value.CollateralAsset.has_CollateralIdentifier",
      "target": "column.collateral_positions.collateral_id",
      "label": "has_CollateralIdentifier",
      "properties": {
        "description": "CollateralAsset.has_CollateralIdentifier maps to physical field collateral_positions.collateral_id.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "collateral_positions.collateral_id"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.CollateralAsset.has_IssuerCountry.MAPS_TO_FIELD.has_IssuerCountry.column.collateral_positions.issuer_country",
      "source": "value.CollateralAsset.has_IssuerCountry",
      "target": "column.collateral_positions.issuer_country",
      "label": "has_IssuerCountry",
      "properties": {
        "description": "CollateralAsset.has_IssuerCountry maps to physical field collateral_positions.issuer_country.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "collateral_positions.issuer_country"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.concept.CollateralValuation.MAPS_TO.maps_to_table.table.collateral_valuations",
      "source": "concept.CollateralValuation",
      "target": "table.collateral_valuations",
      "label": "maps to table",
      "properties": {
        "description": "CollateralValuation is populated from collateral_valuations.",
        "fields": [
          "collateral_valuations.haircut_rate",
          "collateral_valuations.market_value_amount",
          "collateral_valuations.valuation_date",
          "collateral_valuations.valuation_id"
        ],
        "ai_context": {
          "description": "Collateral valuation source population mapped as CollateralValuation entity records."
        }
      },
      "type": "MAPS_TO"
    },
    {
      "id": "edge.value.CollateralValuation.has_HaircutRate.MAPS_TO_FIELD.has_HaircutRate.column.collateral_valuations.haircut_rate",
      "source": "value.CollateralValuation.has_HaircutRate",
      "target": "column.collateral_valuations.haircut_rate",
      "label": "has_HaircutRate",
      "properties": {
        "description": "CollateralValuation.has_HaircutRate maps to physical field collateral_valuations.haircut_rate.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "collateral_valuations.haircut_rate"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.CollateralValuation.has_MarketValueAmount.MAPS_TO_FIELD.has_MarketValueAmount.column.collateral_valuations.market_value_amount",
      "source": "value.CollateralValuation.has_MarketValueAmount",
      "target": "column.collateral_valuations.market_value_amount",
      "label": "has_MarketValueAmount",
      "properties": {
        "description": "CollateralValuation.has_MarketValueAmount maps to physical field collateral_valuations.market_value_amount.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "collateral_valuations.market_value_amount"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.CollateralValuation.has_ValuationDate.MAPS_TO_FIELD.has_ValuationDate.column.collateral_valuations.valuation_date",
      "source": "value.CollateralValuation.has_ValuationDate",
      "target": "column.collateral_valuations.valuation_date",
      "label": "has_ValuationDate",
      "properties": {
        "description": "CollateralValuation.has_ValuationDate maps to physical field collateral_valuations.valuation_date.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "collateral_valuations.valuation_date"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.CollateralValuation.has_ValuationIdentifier.MAPS_TO_FIELD.has_ValuationIdentifier.column.collateral_valuations.valuation_id",
      "source": "value.CollateralValuation.has_ValuationIdentifier",
      "target": "column.collateral_valuations.valuation_id",
      "label": "has_ValuationIdentifier",
      "properties": {
        "description": "CollateralValuation.has_ValuationIdentifier maps to physical field collateral_valuations.valuation_id.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "collateral_valuations.valuation_id"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.CollateralValuation.has_EligibleCollateralValue.DERIVED_BY.collateral_valuations.haircut_rate.column.collateral_valuations.haircut_rate",
      "source": "value.CollateralValuation.has_EligibleCollateralValue",
      "target": "column.collateral_valuations.haircut_rate",
      "label": "collateral_valuations.haircut_rate",
      "properties": {
        "description": "Metric-backed field CollateralValuation.has_EligibleCollateralValue uses physical field collateral_valuations.haircut_rate.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "eligible_collateral_value",
        "semantic_reference": "metric.eligible_collateral_value",
        "expression": "collateral_valuations.market_value_amount * (1 - collateral_valuations.haircut_rate)"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.value.CollateralValuation.has_EligibleCollateralValue.DERIVED_BY.collateral_valuations.market_value_amount.column.collateral_valuations.market_value_amount",
      "source": "value.CollateralValuation.has_EligibleCollateralValue",
      "target": "column.collateral_valuations.market_value_amount",
      "label": "collateral_valuations.market_value_amount",
      "properties": {
        "description": "Metric-backed field CollateralValuation.has_EligibleCollateralValue uses physical field collateral_valuations.market_value_amount.",
        "source_field": "semantic_model.metrics.expression",
        "semantic_metric": "eligible_collateral_value",
        "semantic_reference": "metric.eligible_collateral_value",
        "expression": "collateral_valuations.market_value_amount * (1 - collateral_valuations.haircut_rate)"
      },
      "type": "DERIVED_BY"
    },
    {
      "id": "edge.concept.Counterparty.MAPS_TO.maps_to_table.table.collateral_margin_report_lines",
      "source": "concept.Counterparty",
      "target": "table.collateral_margin_report_lines",
      "label": "maps to table",
      "properties": {
        "description": "Counterparty is populated from collateral_margin_report_lines.",
        "fields": [
          "collateral_margin_report_lines.counterparty_id"
        ],
        "ai_context": {
          "description": "Counterparty identifiers as represented in the report-line dataset for requirement traceability."
        }
      },
      "type": "MAPS_TO"
    },
    {
      "id": "edge.concept.Counterparty.MAPS_TO.maps_to_table.table.counterparties",
      "source": "concept.Counterparty",
      "target": "table.counterparties",
      "label": "maps to table",
      "properties": {
        "description": "Counterparty is populated from counterparties.",
        "fields": [
          "counterparties.counterparty_id",
          "counterparties.domicile_country",
          "counterparties.legal_name",
          "counterparties.regulatory_segment"
        ],
        "ai_context": {
          "description": "Legal counterparty reference source population mapped as Counterparty entity records."
        }
      },
      "type": "MAPS_TO"
    },
    {
      "id": "edge.value.Counterparty.has_CounterpartyIdentifier.MAPS_TO_FIELD.has_CounterpartyIdentifier.column.collateral_margin_report_lines.counterparty_id",
      "source": "value.Counterparty.has_CounterpartyIdentifier",
      "target": "column.collateral_margin_report_lines.counterparty_id",
      "label": "has_CounterpartyIdentifier",
      "properties": {
        "description": "Counterparty.has_CounterpartyIdentifier maps to physical field collateral_margin_report_lines.counterparty_id.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "collateral_margin_report_lines.counterparty_id"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Counterparty.has_CounterpartyIdentifier.MAPS_TO_FIELD.has_CounterpartyIdentifier.column.counterparties.counterparty_id",
      "source": "value.Counterparty.has_CounterpartyIdentifier",
      "target": "column.counterparties.counterparty_id",
      "label": "has_CounterpartyIdentifier",
      "properties": {
        "description": "Counterparty.has_CounterpartyIdentifier maps to physical field counterparties.counterparty_id.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "counterparties.counterparty_id"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Counterparty.has_DomicileCountry.MAPS_TO_FIELD.has_DomicileCountry.column.counterparties.domicile_country",
      "source": "value.Counterparty.has_DomicileCountry",
      "target": "column.counterparties.domicile_country",
      "label": "has_DomicileCountry",
      "properties": {
        "description": "Counterparty.has_DomicileCountry maps to physical field counterparties.domicile_country.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "counterparties.domicile_country"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Counterparty.has_LegalName.MAPS_TO_FIELD.has_LegalName.column.counterparties.legal_name",
      "source": "value.Counterparty.has_LegalName",
      "target": "column.counterparties.legal_name",
      "label": "has_LegalName",
      "properties": {
        "description": "Counterparty.has_LegalName maps to physical field counterparties.legal_name.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "counterparties.legal_name"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.Counterparty.has_RegulatorySegment.MAPS_TO_FIELD.has_RegulatorySegment.column.counterparties.regulatory_segment",
      "source": "value.Counterparty.has_RegulatorySegment",
      "target": "column.counterparties.regulatory_segment",
      "label": "has_RegulatorySegment",
      "properties": {
        "description": "Counterparty.has_RegulatorySegment maps to physical field counterparties.regulatory_segment.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "counterparties.regulatory_segment"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.concept.MarginAccount.MAPS_TO.maps_to_table.table.collateral_margin_report_lines",
      "source": "concept.MarginAccount",
      "target": "table.collateral_margin_report_lines",
      "label": "maps to table",
      "properties": {
        "description": "MarginAccount is populated from collateral_margin_report_lines.",
        "fields": [
          "collateral_margin_report_lines.account_id"
        ],
        "ai_context": {
          "description": "Margin account identifiers as represented in the report-line dataset for requirement traceability."
        }
      },
      "type": "MAPS_TO"
    },
    {
      "id": "edge.concept.MarginAccount.MAPS_TO.maps_to_table.table.margin_accounts",
      "source": "concept.MarginAccount",
      "target": "table.margin_accounts",
      "label": "maps to table",
      "properties": {
        "description": "MarginAccount is populated from margin_accounts.",
        "fields": [
          "margin_accounts.account_id",
          "margin_accounts.account_status",
          "margin_accounts.base_currency"
        ],
        "ai_context": {
          "description": "Margin account source population mapped as MarginAccount entity records."
        }
      },
      "type": "MAPS_TO"
    },
    {
      "id": "edge.value.MarginAccount.has_AccountIdentifier.MAPS_TO_FIELD.has_AccountIdentifier.column.collateral_margin_report_lines.account_id",
      "source": "value.MarginAccount.has_AccountIdentifier",
      "target": "column.collateral_margin_report_lines.account_id",
      "label": "has_AccountIdentifier",
      "properties": {
        "description": "MarginAccount.has_AccountIdentifier maps to physical field collateral_margin_report_lines.account_id.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "collateral_margin_report_lines.account_id"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.MarginAccount.has_AccountIdentifier.MAPS_TO_FIELD.has_AccountIdentifier.column.margin_accounts.account_id",
      "source": "value.MarginAccount.has_AccountIdentifier",
      "target": "column.margin_accounts.account_id",
      "label": "has_AccountIdentifier",
      "properties": {
        "description": "MarginAccount.has_AccountIdentifier maps to physical field margin_accounts.account_id.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "margin_accounts.account_id"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.MarginAccount.has_AccountStatus.MAPS_TO_FIELD.has_AccountStatus.column.margin_accounts.account_status",
      "source": "value.MarginAccount.has_AccountStatus",
      "target": "column.margin_accounts.account_status",
      "label": "has_AccountStatus",
      "properties": {
        "description": "MarginAccount.has_AccountStatus maps to physical field margin_accounts.account_status.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "margin_accounts.account_status"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.value.MarginAccount.has_BaseCurrency.MAPS_TO_FIELD.has_BaseCurrency.column.margin_accounts.base_currency",
      "source": "value.MarginAccount.has_BaseCurrency",
      "target": "column.margin_accounts.base_currency",
      "label": "has_BaseCurrency",
      "properties": {
        "description": "MarginAccount.has_BaseCurrency maps to physical field margin_accounts.base_currency.",
        "source_field": "ontology_mappings.concept_mappings",
        "physical_field": "margin_accounts.base_currency"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.requirement.item.REQUIRES_CONCEPT.REQUIRES_CONCEPT.concept.CollateralAsset",
      "source": "requirement.item",
      "target": "concept.CollateralAsset",
      "label": "REQUIRES_CONCEPT",
      "properties": {
        "description": "监管/BRD要求每日生成保证金账户级合格抵质押品报表，用于说明每个保证金账户在估值日可计入监管口径的抵质押品资产、估值金额、监管折扣率和折扣后价值。需求还包括每日EOD生成、业务复核、异常估值说明和报表留痕；这些非数据类要求保留在本说明中，不强行建模为字段。\n",
        "source_field": "reporting_requirements.semantic_scope.concepts"
      },
      "type": "REQUIRES_CONCEPT"
    },
    {
      "id": "edge.requirement.item.REQUIRES_CONCEPT.REQUIRES_CONCEPT.concept.CollateralValuation",
      "source": "requirement.item",
      "target": "concept.CollateralValuation",
      "label": "REQUIRES_CONCEPT",
      "properties": {
        "description": "监管/BRD要求每日生成保证金账户级合格抵质押品报表，用于说明每个保证金账户在估值日可计入监管口径的抵质押品资产、估值金额、监管折扣率和折扣后价值。需求还包括每日EOD生成、业务复核、异常估值说明和报表留痕；这些非数据类要求保留在本说明中，不强行建模为字段。\n",
        "source_field": "reporting_requirements.semantic_scope.concepts"
      },
      "type": "REQUIRES_CONCEPT"
    },
    {
      "id": "edge.requirement.item.REQUIRES_CONCEPT.REQUIRES_CONCEPT.concept.Counterparty",
      "source": "requirement.item",
      "target": "concept.Counterparty",
      "label": "REQUIRES_CONCEPT",
      "properties": {
        "description": "监管/BRD要求每日生成保证金账户级合格抵质押品报表，用于说明每个保证金账户在估值日可计入监管口径的抵质押品资产、估值金额、监管折扣率和折扣后价值。需求还包括每日EOD生成、业务复核、异常估值说明和报表留痕；这些非数据类要求保留在本说明中，不强行建模为字段。\n",
        "source_field": "reporting_requirements.semantic_scope.concepts"
      },
      "type": "REQUIRES_CONCEPT"
    },
    {
      "id": "edge.requirement.item.REQUIRES_CONCEPT.REQUIRES_CONCEPT.concept.MarginAccount",
      "source": "requirement.item",
      "target": "concept.MarginAccount",
      "label": "REQUIRES_CONCEPT",
      "properties": {
        "description": "监管/BRD要求每日生成保证金账户级合格抵质押品报表，用于说明每个保证金账户在估值日可计入监管口径的抵质押品资产、估值金额、监管折扣率和折扣后价值。需求还包括每日EOD生成、业务复核、异常估值说明和报表留痕；这些非数据类要求保留在本说明中，不强行建模为字段。\n",
        "source_field": "reporting_requirements.semantic_scope.concepts"
      },
      "type": "REQUIRES_CONCEPT"
    },
    {
      "id": "edge.requirement.item.CONTAINS.CONTAINS.requirement_item..MarginAccount.has_AccountIdentifier",
      "source": "requirement.item",
      "target": "requirement_item..MarginAccount.has_AccountIdentifier",
      "label": "CONTAINS",
      "properties": {
        "description": "需求需要保证金账户标识，用于确定每条报表记录归属的账户并支持账户级对账。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.requirement_item..MarginAccount.has_AccountIdentifier.REQUIRES_SEMANTIC_FIELD.REQUIRES_SEMANTIC_FIELD.value.MarginAccount.has_AccountIdentifier",
      "source": "requirement_item..MarginAccount.has_AccountIdentifier",
      "target": "value.MarginAccount.has_AccountIdentifier",
      "label": "REQUIRES_SEMANTIC_FIELD",
      "properties": {
        "description": "需求需要保证金账户标识，用于确定每条报表记录归属的账户并支持账户级对账。",
        "required_field": {
          "name": "保证金账户标识",
          "description": "需求需要保证金账户标识，用于确定每条报表记录归属的账户并支持账户级对账。",
          "semantic_reference": "MarginAccount.has_AccountIdentifier",
          "required": true
        }
      },
      "type": "REQUIRES_SEMANTIC_FIELD"
    },
    {
      "id": "edge.requirement.item.CONTAINS.CONTAINS.requirement_item..Counterparty.has_CounterpartyIdentifier",
      "source": "requirement.item",
      "target": "requirement_item..Counterparty.has_CounterpartyIdentifier",
      "label": "CONTAINS",
      "properties": {
        "description": "需求需要交易对手标识，用于按法律实体或监管对象汇总抵质押品暴露。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.requirement_item..Counterparty.has_CounterpartyIdentifier.REQUIRES_SEMANTIC_FIELD.REQUIRES_SEMANTIC_FIELD.value.Counterparty.has_CounterpartyIdentifier",
      "source": "requirement_item..Counterparty.has_CounterpartyIdentifier",
      "target": "value.Counterparty.has_CounterpartyIdentifier",
      "label": "REQUIRES_SEMANTIC_FIELD",
      "properties": {
        "description": "需求需要交易对手标识，用于按法律实体或监管对象汇总抵质押品暴露。",
        "required_field": {
          "name": "交易对手标识",
          "description": "需求需要交易对手标识，用于按法律实体或监管对象汇总抵质押品暴露。",
          "semantic_reference": "Counterparty.has_CounterpartyIdentifier",
          "required": true
        }
      },
      "type": "REQUIRES_SEMANTIC_FIELD"
    },
    {
      "id": "edge.requirement.item.CONTAINS.CONTAINS.requirement_item..CollateralAsset.has_CollateralIdentifier",
      "source": "requirement.item",
      "target": "requirement_item..CollateralAsset.has_CollateralIdentifier",
      "label": "CONTAINS",
      "properties": {
        "description": "需求需要抵质押品标识，用于识别参与合格抵质押品计算的具体资产或头寸。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.requirement_item..CollateralAsset.has_CollateralIdentifier.REQUIRES_SEMANTIC_FIELD.REQUIRES_SEMANTIC_FIELD.value.CollateralAsset.has_CollateralIdentifier",
      "source": "requirement_item..CollateralAsset.has_CollateralIdentifier",
      "target": "value.CollateralAsset.has_CollateralIdentifier",
      "label": "REQUIRES_SEMANTIC_FIELD",
      "properties": {
        "description": "需求需要抵质押品标识，用于识别参与合格抵质押品计算的具体资产或头寸。",
        "required_field": {
          "name": "抵质押品标识",
          "description": "需求需要抵质押品标识，用于识别参与合格抵质押品计算的具体资产或头寸。",
          "semantic_reference": "CollateralAsset.has_CollateralIdentifier",
          "required": true
        }
      },
      "type": "REQUIRES_SEMANTIC_FIELD"
    },
    {
      "id": "edge.requirement.item.CONTAINS.CONTAINS.requirement_item..CollateralValuation.has_ValuationDate",
      "source": "requirement.item",
      "target": "requirement_item..CollateralValuation.has_ValuationDate",
      "label": "CONTAINS",
      "properties": {
        "description": "需求需要估值日期，用于说明抵质押品价值和折扣率适用的报告日期。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.requirement_item..CollateralValuation.has_ValuationDate.REQUIRES_SEMANTIC_FIELD.REQUIRES_SEMANTIC_FIELD.value.CollateralValuation.has_ValuationDate",
      "source": "requirement_item..CollateralValuation.has_ValuationDate",
      "target": "value.CollateralValuation.has_ValuationDate",
      "label": "REQUIRES_SEMANTIC_FIELD",
      "properties": {
        "description": "需求需要估值日期，用于说明抵质押品价值和折扣率适用的报告日期。",
        "required_field": {
          "name": "估值日期",
          "description": "需求需要估值日期，用于说明抵质押品价值和折扣率适用的报告日期。",
          "semantic_reference": "CollateralValuation.has_ValuationDate",
          "required": true
        }
      },
      "type": "REQUIRES_SEMANTIC_FIELD"
    },
    {
      "id": "edge.requirement.item.CONTAINS.CONTAINS.requirement_item..CollateralValuation.has_MarketValueAmount",
      "source": "requirement.item",
      "target": "requirement_item..CollateralValuation.has_MarketValueAmount",
      "label": "CONTAINS",
      "properties": {
        "description": "需求需要抵质押品折扣前市场价值，用于作为合格抵质押品价值计算的基础金额。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.requirement_item..CollateralValuation.has_MarketValueAmount.REQUIRES_SEMANTIC_FIELD.REQUIRES_SEMANTIC_FIELD.value.CollateralValuation.has_MarketValueAmount",
      "source": "requirement_item..CollateralValuation.has_MarketValueAmount",
      "target": "value.CollateralValuation.has_MarketValueAmount",
      "label": "REQUIRES_SEMANTIC_FIELD",
      "properties": {
        "description": "需求需要抵质押品折扣前市场价值，用于作为合格抵质押品价值计算的基础金额。",
        "required_field": {
          "name": "抵质押品折扣前市场价值",
          "description": "需求需要抵质押品折扣前市场价值，用于作为合格抵质押品价值计算的基础金额。",
          "semantic_reference": "CollateralValuation.has_MarketValueAmount",
          "required": true
        }
      },
      "type": "REQUIRES_SEMANTIC_FIELD"
    },
    {
      "id": "edge.requirement.item.CONTAINS.CONTAINS.requirement_item..CollateralValuation.has_HaircutRate",
      "source": "requirement.item",
      "target": "requirement_item..CollateralValuation.has_HaircutRate",
      "label": "CONTAINS",
      "properties": {
        "description": "需求需要监管折扣率，用于从市场价值计算监管口径下可计入的合格抵质押品价值。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.requirement_item..CollateralValuation.has_HaircutRate.REQUIRES_SEMANTIC_FIELD.REQUIRES_SEMANTIC_FIELD.value.CollateralValuation.has_HaircutRate",
      "source": "requirement_item..CollateralValuation.has_HaircutRate",
      "target": "value.CollateralValuation.has_HaircutRate",
      "label": "REQUIRES_SEMANTIC_FIELD",
      "properties": {
        "description": "需求需要监管折扣率，用于从市场价值计算监管口径下可计入的合格抵质押品价值。",
        "required_field": {
          "name": "监管折扣率",
          "description": "需求需要监管折扣率，用于从市场价值计算监管口径下可计入的合格抵质押品价值。",
          "semantic_reference": "CollateralValuation.has_HaircutRate",
          "required": true
        }
      },
      "type": "REQUIRES_SEMANTIC_FIELD"
    },
    {
      "id": "edge.requirement.item.CONTAINS.CONTAINS.requirement_item..CollateralValuation.has_EligibleCollateralValue",
      "source": "requirement.item",
      "target": "requirement_item..CollateralValuation.has_EligibleCollateralValue",
      "label": "CONTAINS",
      "properties": {
        "description": "需求需要折扣后合格抵质押品价值，用于展示监管口径下可计入的抵质押品金额。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.requirement_item..CollateralValuation.has_EligibleCollateralValue.DERIVED_FROM.DERIVED_FROM.value.CollateralValuation.has_MarketValueAmount",
      "source": "requirement_item..CollateralValuation.has_EligibleCollateralValue",
      "target": "value.CollateralValuation.has_MarketValueAmount",
      "label": "DERIVED_FROM",
      "properties": {
        "description": "需求需要折扣后合格抵质押品价值，用于展示监管口径下可计入的抵质押品金额。"
      },
      "type": "DERIVED_FROM"
    },
    {
      "id": "edge.requirement_item..CollateralValuation.has_EligibleCollateralValue.DERIVED_FROM.DERIVED_FROM.value.CollateralValuation.has_HaircutRate",
      "source": "requirement_item..CollateralValuation.has_EligibleCollateralValue",
      "target": "value.CollateralValuation.has_HaircutRate",
      "label": "DERIVED_FROM",
      "properties": {
        "description": "需求需要折扣后合格抵质押品价值，用于展示监管口径下可计入的抵质押品金额。"
      },
      "type": "DERIVED_FROM"
    },
    {
      "id": "edge.report_impl.item.IMPLEMENTS.IMPLEMENTS.requirement.item",
      "source": "report_impl.item",
      "target": "requirement.item",
      "label": "IMPLEMENTS",
      "properties": {
        "description": "说明每日合格抵质押品报表字段如何从已有保证金账户、交易对手、抵质押品和估值数据中取数、计算并满足需求口径；该逻辑不创建物理表。"
      },
      "type": "IMPLEMENTS"
    },
    {
      "id": "edge.report_impl.item.CONTAINS.CONTAINS.implementation_field.collateral_margin_report_lines.account_id",
      "source": "report_impl.item",
      "target": "implementation_field.collateral_margin_report_lines.account_id",
      "label": "CONTAINS",
      "properties": {
        "description": "数据逻辑说明保证金账户标识需求如何对应报表明细字段 account_id。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.implementation_field.collateral_margin_report_lines.account_id.MAPS_TO_FIELD.MAPS_TO_FIELD.column.collateral_margin_report_lines.account_id",
      "source": "implementation_field.collateral_margin_report_lines.account_id",
      "target": "column.collateral_margin_report_lines.account_id",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明保证金账户标识需求如何对应报表明细字段 account_id。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.collateral_margin_report_lines.account_id.SOURCE_FIELD.SOURCE_FIELD.column.margin_accounts.account_id",
      "source": "implementation_field.collateral_margin_report_lines.account_id",
      "target": "column.margin_accounts.account_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明保证金账户标识需求如何对应报表明细字段 account_id。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.collateral_margin_report_lines.account_id.IMPLEMENTS_FIELD.IMPLEMENTS_FIELD.requirement_item..MarginAccount.has_AccountIdentifier",
      "source": "implementation_field.collateral_margin_report_lines.account_id",
      "target": "requirement_item..MarginAccount.has_AccountIdentifier",
      "label": "IMPLEMENTS_FIELD",
      "properties": {
        "description": "数据逻辑说明保证金账户标识需求如何对应报表明细字段 account_id。",
        "requirement": "合格抵质押品报送需求",
        "requirement_field": "保证金账户标识",
        "expression": "margin_accounts.account_id"
      },
      "type": "IMPLEMENTS_FIELD"
    },
    {
      "id": "edge.report_impl.item.CONTAINS.CONTAINS.implementation_field.collateral_margin_report_lines.counterparty_id",
      "source": "report_impl.item",
      "target": "implementation_field.collateral_margin_report_lines.counterparty_id",
      "label": "CONTAINS",
      "properties": {
        "description": "数据逻辑说明交易对手标识需求如何对应报表明细字段 counterparty_id。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.implementation_field.collateral_margin_report_lines.counterparty_id.MAPS_TO_FIELD.MAPS_TO_FIELD.column.collateral_margin_report_lines.counterparty_id",
      "source": "implementation_field.collateral_margin_report_lines.counterparty_id",
      "target": "column.collateral_margin_report_lines.counterparty_id",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明交易对手标识需求如何对应报表明细字段 counterparty_id。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.collateral_margin_report_lines.counterparty_id.SOURCE_FIELD.SOURCE_FIELD.column.counterparties.counterparty_id",
      "source": "implementation_field.collateral_margin_report_lines.counterparty_id",
      "target": "column.counterparties.counterparty_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明交易对手标识需求如何对应报表明细字段 counterparty_id。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.collateral_margin_report_lines.counterparty_id.IMPLEMENTS_FIELD.IMPLEMENTS_FIELD.requirement_item..Counterparty.has_CounterpartyIdentifier",
      "source": "implementation_field.collateral_margin_report_lines.counterparty_id",
      "target": "requirement_item..Counterparty.has_CounterpartyIdentifier",
      "label": "IMPLEMENTS_FIELD",
      "properties": {
        "description": "数据逻辑说明交易对手标识需求如何对应报表明细字段 counterparty_id。",
        "requirement": "合格抵质押品报送需求",
        "requirement_field": "交易对手标识",
        "expression": "counterparties.counterparty_id"
      },
      "type": "IMPLEMENTS_FIELD"
    },
    {
      "id": "edge.report_impl.item.CONTAINS.CONTAINS.implementation_field.collateral_margin_report_lines.collateral_id",
      "source": "report_impl.item",
      "target": "implementation_field.collateral_margin_report_lines.collateral_id",
      "label": "CONTAINS",
      "properties": {
        "description": "数据逻辑说明抵质押品标识需求如何对应报表明细字段 collateral_id。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.implementation_field.collateral_margin_report_lines.collateral_id.MAPS_TO_FIELD.MAPS_TO_FIELD.column.collateral_margin_report_lines.collateral_id",
      "source": "implementation_field.collateral_margin_report_lines.collateral_id",
      "target": "column.collateral_margin_report_lines.collateral_id",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明抵质押品标识需求如何对应报表明细字段 collateral_id。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.collateral_margin_report_lines.collateral_id.SOURCE_FIELD.SOURCE_FIELD.column.collateral_positions.collateral_id",
      "source": "implementation_field.collateral_margin_report_lines.collateral_id",
      "target": "column.collateral_positions.collateral_id",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明抵质押品标识需求如何对应报表明细字段 collateral_id。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.collateral_margin_report_lines.collateral_id.IMPLEMENTS_FIELD.IMPLEMENTS_FIELD.requirement_item..CollateralAsset.has_CollateralIdentifier",
      "source": "implementation_field.collateral_margin_report_lines.collateral_id",
      "target": "requirement_item..CollateralAsset.has_CollateralIdentifier",
      "label": "IMPLEMENTS_FIELD",
      "properties": {
        "description": "数据逻辑说明抵质押品标识需求如何对应报表明细字段 collateral_id。",
        "requirement": "合格抵质押品报送需求",
        "requirement_field": "抵质押品标识",
        "expression": "collateral_positions.collateral_id"
      },
      "type": "IMPLEMENTS_FIELD"
    },
    {
      "id": "edge.report_impl.item.CONTAINS.CONTAINS.implementation_field.collateral_margin_report_lines.valuation_date",
      "source": "report_impl.item",
      "target": "implementation_field.collateral_margin_report_lines.valuation_date",
      "label": "CONTAINS",
      "properties": {
        "description": "数据逻辑说明估值日期需求如何对应报表明细字段 valuation_date。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.implementation_field.collateral_margin_report_lines.valuation_date.MAPS_TO_FIELD.MAPS_TO_FIELD.column.collateral_margin_report_lines.valuation_date",
      "source": "implementation_field.collateral_margin_report_lines.valuation_date",
      "target": "column.collateral_margin_report_lines.valuation_date",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明估值日期需求如何对应报表明细字段 valuation_date。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.collateral_margin_report_lines.valuation_date.SOURCE_FIELD.SOURCE_FIELD.column.collateral_valuations.valuation_date",
      "source": "implementation_field.collateral_margin_report_lines.valuation_date",
      "target": "column.collateral_valuations.valuation_date",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明估值日期需求如何对应报表明细字段 valuation_date。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.collateral_margin_report_lines.valuation_date.IMPLEMENTS_FIELD.IMPLEMENTS_FIELD.requirement_item..CollateralValuation.has_ValuationDate",
      "source": "implementation_field.collateral_margin_report_lines.valuation_date",
      "target": "requirement_item..CollateralValuation.has_ValuationDate",
      "label": "IMPLEMENTS_FIELD",
      "properties": {
        "description": "数据逻辑说明估值日期需求如何对应报表明细字段 valuation_date。",
        "requirement": "合格抵质押品报送需求",
        "requirement_field": "估值日期",
        "expression": "collateral_valuations.valuation_date"
      },
      "type": "IMPLEMENTS_FIELD"
    },
    {
      "id": "edge.report_impl.item.CONTAINS.CONTAINS.implementation_field.collateral_valuations.market_value_amount",
      "source": "report_impl.item",
      "target": "implementation_field.collateral_valuations.market_value_amount",
      "label": "CONTAINS",
      "properties": {
        "description": "数据逻辑说明抵质押品折扣前市场价值需求如何对应估值数据字段 market_value_amount。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.implementation_field.collateral_valuations.market_value_amount.MAPS_TO_FIELD.MAPS_TO_FIELD.column.collateral_valuations.market_value_amount",
      "source": "implementation_field.collateral_valuations.market_value_amount",
      "target": "column.collateral_valuations.market_value_amount",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明抵质押品折扣前市场价值需求如何对应估值数据字段 market_value_amount。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.collateral_valuations.market_value_amount.IMPLEMENTS_FIELD.IMPLEMENTS_FIELD.requirement_item..CollateralValuation.has_MarketValueAmount",
      "source": "implementation_field.collateral_valuations.market_value_amount",
      "target": "requirement_item..CollateralValuation.has_MarketValueAmount",
      "label": "IMPLEMENTS_FIELD",
      "properties": {
        "description": "数据逻辑说明抵质押品折扣前市场价值需求如何对应估值数据字段 market_value_amount。",
        "requirement": "合格抵质押品报送需求",
        "requirement_field": "抵质押品折扣前市场价值",
        "expression": "collateral_valuations.market_value_amount"
      },
      "type": "IMPLEMENTS_FIELD"
    },
    {
      "id": "edge.report_impl.item.CONTAINS.CONTAINS.implementation_field.collateral_valuations.haircut_rate",
      "source": "report_impl.item",
      "target": "implementation_field.collateral_valuations.haircut_rate",
      "label": "CONTAINS",
      "properties": {
        "description": "数据逻辑说明监管折扣率需求如何对应估值数据字段 haircut_rate。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.implementation_field.collateral_valuations.haircut_rate.MAPS_TO_FIELD.MAPS_TO_FIELD.column.collateral_valuations.haircut_rate",
      "source": "implementation_field.collateral_valuations.haircut_rate",
      "target": "column.collateral_valuations.haircut_rate",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明监管折扣率需求如何对应估值数据字段 haircut_rate。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.collateral_valuations.haircut_rate.IMPLEMENTS_FIELD.IMPLEMENTS_FIELD.requirement_item..CollateralValuation.has_HaircutRate",
      "source": "implementation_field.collateral_valuations.haircut_rate",
      "target": "requirement_item..CollateralValuation.has_HaircutRate",
      "label": "IMPLEMENTS_FIELD",
      "properties": {
        "description": "数据逻辑说明监管折扣率需求如何对应估值数据字段 haircut_rate。",
        "requirement": "合格抵质押品报送需求",
        "requirement_field": "监管折扣率",
        "expression": "collateral_valuations.haircut_rate"
      },
      "type": "IMPLEMENTS_FIELD"
    },
    {
      "id": "edge.report_impl.item.CONTAINS.CONTAINS.implementation_field.collateral_margin_report_lines.eligible_collateral_value",
      "source": "report_impl.item",
      "target": "implementation_field.collateral_margin_report_lines.eligible_collateral_value",
      "label": "CONTAINS",
      "properties": {
        "description": "数据逻辑说明折扣后合格抵质押品价值需求如何由市场价值和监管折扣率计算并对应报表明细字段 eligible_collateral_value。"
      },
      "type": "CONTAINS"
    },
    {
      "id": "edge.implementation_field.collateral_margin_report_lines.eligible_collateral_value.MAPS_TO_FIELD.MAPS_TO_FIELD.column.collateral_margin_report_lines.eligible_collateral_value",
      "source": "implementation_field.collateral_margin_report_lines.eligible_collateral_value",
      "target": "column.collateral_margin_report_lines.eligible_collateral_value",
      "label": "MAPS_TO_FIELD",
      "properties": {
        "description": "数据逻辑说明折扣后合格抵质押品价值需求如何由市场价值和监管折扣率计算并对应报表明细字段 eligible_collateral_value。"
      },
      "type": "MAPS_TO_FIELD"
    },
    {
      "id": "edge.implementation_field.collateral_margin_report_lines.eligible_collateral_value.SOURCE_FIELD.SOURCE_FIELD.column.collateral_valuations.haircut_rate",
      "source": "implementation_field.collateral_margin_report_lines.eligible_collateral_value",
      "target": "column.collateral_valuations.haircut_rate",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明折扣后合格抵质押品价值需求如何由市场价值和监管折扣率计算并对应报表明细字段 eligible_collateral_value。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.collateral_margin_report_lines.eligible_collateral_value.SOURCE_FIELD.SOURCE_FIELD.column.collateral_valuations.market_value_amount",
      "source": "implementation_field.collateral_margin_report_lines.eligible_collateral_value",
      "target": "column.collateral_valuations.market_value_amount",
      "label": "SOURCE_FIELD",
      "properties": {
        "description": "数据逻辑说明折扣后合格抵质押品价值需求如何由市场价值和监管折扣率计算并对应报表明细字段 eligible_collateral_value。"
      },
      "type": "SOURCE_FIELD"
    },
    {
      "id": "edge.implementation_field.collateral_margin_report_lines.eligible_collateral_value.IMPLEMENTS_FIELD.IMPLEMENTS_FIELD.requirement_item..CollateralValuation.has_EligibleCollateralValue",
      "source": "implementation_field.collateral_margin_report_lines.eligible_collateral_value",
      "target": "requirement_item..CollateralValuation.has_EligibleCollateralValue",
      "label": "IMPLEMENTS_FIELD",
      "properties": {
        "description": "数据逻辑说明折扣后合格抵质押品价值需求如何由市场价值和监管折扣率计算并对应报表明细字段 eligible_collateral_value。",
        "requirement": "合格抵质押品报送需求",
        "requirement_field": "折扣后合格抵质押品价值",
        "expression": "collateral_valuations.market_value_amount * (1 - collateral_valuations.haircut_rate)"
      },
      "type": "IMPLEMENTS_FIELD"
    },
    {
      "id": "edge.report_impl.item.SOURCE_TABLE.SOURCE_TABLE.table.collateral_positions",
      "source": "report_impl.item",
      "target": "table.collateral_positions",
      "label": "SOURCE_TABLE",
      "properties": {
        "description": "数据逻辑说明抵质押品标识需求如何对应报表明细字段 collateral_id。",
        "source_fields": [
          "collateral_positions.collateral_id"
        ]
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.report_impl.item.SOURCE_TABLE.SOURCE_TABLE.table.collateral_valuations",
      "source": "report_impl.item",
      "target": "table.collateral_valuations",
      "label": "SOURCE_TABLE",
      "properties": {
        "description": "数据逻辑说明估值日期需求如何对应报表明细字段 valuation_date。；数据逻辑说明抵质押品折扣前市场价值需求如何对应估值数据字段 market_value_amount。；数据逻辑说明监管折扣率需求如何对应估值数据字段 haircut_rate。；数据逻辑说明折扣后合格抵质押品价值需求如何由市场价值和监管折扣率计算并对应报表明细字段 eligible_collateral_value。",
        "source_fields": [
          "collateral_valuations.haircut_rate",
          "collateral_valuations.market_value_amount",
          "collateral_valuations.valuation_date"
        ]
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.report_impl.item.SOURCE_TABLE.SOURCE_TABLE.table.counterparties",
      "source": "report_impl.item",
      "target": "table.counterparties",
      "label": "SOURCE_TABLE",
      "properties": {
        "description": "数据逻辑说明交易对手标识需求如何对应报表明细字段 counterparty_id。",
        "source_fields": [
          "counterparties.counterparty_id"
        ]
      },
      "type": "SOURCE_TABLE"
    },
    {
      "id": "edge.report_impl.item.SOURCE_TABLE.SOURCE_TABLE.table.margin_accounts",
      "source": "report_impl.item",
      "target": "table.margin_accounts",
      "label": "SOURCE_TABLE",
      "properties": {
        "description": "数据逻辑说明保证金账户标识需求如何对应报表明细字段 account_id。",
        "source_fields": [
          "margin_accounts.account_id"
        ]
      },
      "type": "SOURCE_TABLE"
    }
  ]
};
window.OSI_GRAPH_DATA = window.GRAPH_DATA;
