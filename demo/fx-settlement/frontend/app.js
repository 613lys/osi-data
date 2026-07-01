const graph = window.GRAPH_DATA || window.OSI_GRAPH_DATA || { nodes: [], edges: [] };
const catalog = window.CATALOG_DATA || window.OSI_CATALOG_DATA || {};
const summary = window.OSI_SUMMARY || window.SUMMARY_DATA || {};
const scenarioData = window.SCENARIO_DATA || { presets: [], snapshots: [] };
const DEFAULT_GRAPH_SIZE = { width: 1800, height: 1300 };
const GRAPH_PADDING = 90;
const DEFAULT_UNCHECKED_GRAPH_EDGE_TYPES = new Set(["EXTENDS"]);
const STRUCTURAL_EDGE_TYPES = new Set(["CONTAINS"]);
const FALLBACK_BUSINESS_EDGE_TYPE = "RELATIONSHIP";
const BUSINESS_ENTITY_ROUTE_VALUE = "__business_entity_route__";
const elkLayoutEngine = window.ELK ? new window.ELK() : null;

const els = {
  stats: document.getElementById("stats"),
  homeTab: document.getElementById("homeTab"),
  catalogTab: document.getElementById("catalogTab"),
  graphTab: document.getElementById("graphTab"),
  ontologyTab: document.getElementById("ontologyTab"),
  semanticTab: document.getElementById("semanticTab"),
  scenarioTab: document.getElementById("scenarioTab"),
  homePage: document.getElementById("homePage"),
  catalogPage: document.getElementById("catalogPage"),
  graphPage: document.getElementById("graphPage"),
  scenarioPage: document.getElementById("scenarioPage"),
  scenarioSelect: document.getElementById("scenarioSelect"),
  scenarioCenterSelect: document.getElementById("scenarioCenterSelect"),
  scenarioHint: document.getElementById("scenarioHint"),
  openScenarioSave: document.getElementById("openScenarioSaveButton"),
  scenarioSaveModal: document.getElementById("scenarioSaveModal"),
  scenarioModalName: document.getElementById("scenarioModalNameInput"),
  scenarioModalDescription: document.getElementById("scenarioModalDescriptionInput"),
  scenarioModalSaveKind: document.getElementById("scenarioModalSaveKindSelect"),
  scenarioModalHint: document.getElementById("scenarioModalHint"),
  scenarioModalSave: document.getElementById("scenarioModalSaveButton"),
  scenarioModalCancel: document.getElementById("scenarioModalCancelButton"),
  scenarioModalClose: document.getElementById("scenarioModalCloseButton"),
  homeOntologyList: document.getElementById("homeOntologyList"),
  homeSemanticModelList: document.getElementById("homeSemanticModelList"),
  homeScenarioList: document.getElementById("homeScenarioList"),
  presetScenarioList: document.getElementById("presetScenarioList"),
  savedScenarioList: document.getElementById("savedScenarioList"),
  scenarioDetailPanel: document.getElementById("scenarioDetailPanel"),

  catalogSearch: document.getElementById("catalogSearchInput"),
  catalogNodeTypes: document.getElementById("catalogNodeTypeFilters"),
  catalogBusinessEdgeTypes: document.getElementById("catalogBusinessEdgeTypeFilters"),
  catalogEdgeTypes: document.getElementById("catalogEdgeTypeFilters"),
  catalogTags: document.getElementById("catalogTagFilters"),
  catalogReset: document.getElementById("catalogResetButton"),
  catalogSummary: document.getElementById("catalogResultSummary"),
  nodeResults: document.getElementById("nodeResults"),
  edgeResults: document.getElementById("edgeResults"),
  catalogDetailBadge: document.getElementById("catalogDetailBadge"),
  catalogDetailTitle: document.getElementById("catalogDetailTitle"),
  catalogDetailDescription: document.getElementById("catalogDetailDescription"),
  catalogDetailBody: document.getElementById("catalogDetailBody"),
  openGraph: document.getElementById("openGraphButton"),

  backToCatalog: document.getElementById("backToCatalogButton"),
  graphFocusSection: document.getElementById("graphFocusSection"),
  graphFocusCard: document.getElementById("graphFocusCard"),
  graphFocusInput: document.getElementById("graphFocusInput"),
  graphFocusResults: document.getElementById("graphFocusResults"),
  graphViewSelectorSection: document.getElementById("graphViewSelectorSection"),
  graphViewSelectorTitle: document.getElementById("graphViewSelectorTitle"),
  graphViewSelector: document.getElementById("graphViewSelector"),
  graphScopeSelectorHost: document.getElementById("graphScopeSelectorHost"),
  graphScopeSelectorLabel: document.getElementById("graphScopeSelectorLabel"),
  graphScopeSelector: document.getElementById("graphScopeSelector"),
  graphDepthSection: document.getElementById("graphDepthSection"),
  graphHiddenSection: document.getElementById("graphHiddenSection"),
  graphNodeTypeSection: document.getElementById("graphNodeTypeSection"),
  graphMetricSection: document.getElementById("graphMetricSection"),
  graphEdgeTypeSection: document.getElementById("graphEdgeTypeSection"),
  graphScenarioSection: document.getElementById("graphScenarioSection"),
  graphScenarioSidebarHost: document.getElementById("graphScenarioSidebarHost"),
  graphScenarioTopHost: document.getElementById("graphScenarioTopHost"),
  graphToolbar: document.querySelector(".graph-toolbar"),
  hiddenNodes: document.getElementById("hiddenNodeList"),
  restoreHidden: document.getElementById("restoreHiddenButton"),
  graphNodeTypes: document.getElementById("graphNodeTypeFilters"),
  graphMetrics: document.getElementById("graphMetricFilters"),
  graphBusinessEdgeTypes: document.getElementById("graphBusinessEdgeTypeFilters"),
  graphEdgeTypes: document.getElementById("graphEdgeTypeFilters"),
  graphTags: document.getElementById("graphTagFilters"),
  graphReset: document.getElementById("graphResetButton"),
  depth: document.getElementById("depthInput"),
  depthValue: document.getElementById("depthValue"),
  focusType: document.getElementById("focusType"),
  focusTitle: document.getElementById("focusTitle"),
  focusDescription: document.getElementById("focusDescription"),
  fit: document.getElementById("fitButton"),
  expandSelected: document.getElementById("expandSelectedButton"),
  viewport: document.getElementById("graphViewport"),
  board: document.getElementById("graphBoard"),
  edgeLayer: document.getElementById("edgeLayer"),
  fieldEdgeLayer: document.getElementById("fieldEdgeLayer"),
  graphDetailBadge: document.getElementById("graphDetailBadge"),
  graphDetailTitle: document.getElementById("graphDetailTitle"),
  graphDetailDescription: document.getElementById("graphDetailDescription"),
  graphDetailBody: document.getElementById("graphDetailBody"),
};

const nodeMap = new Map(graph.nodes.map(node => [node.id, node]));
const edgeMap = new Map(graph.edges.map(edge => [edge.id, edge]));
const childTypes = new Set([
  "dataset_field",
  "column",
  "value_type_property",
  "metric_field",
  "requirement_semantic_item",
  "implementation_field_binding",
]);
const topLevelNodes = graph.nodes.filter(node => !childTypes.has(node.type));

const typeColors = {
  ontology: "#2563eb",
  ontology_mapping: "#2563eb",
  semantic_model: "#2563eb",
  semantic_dataset: "#0891b2",
  semantic_metric: "#db2777",
  base_entity_concept: "#2563eb",
  entity_type_concept: "#2563eb",
  value_type_concept: "#2563eb",
  built_in_concept: "#2563eb",
  external_concept: "#2563eb",
  physical_table: "#159947",
  regulatory_requirement: "#c2410c",
  report_implementation: "#9333ea",
  table: "#159947",
  view: "#159947",
  column: "#159947",
  dataset_field: "#0891b2",
  value_type_property: "#2563eb",
  metric_field: "#db2777",
  requirement_semantic_item: "#c2410c",
  implementation_field_binding: "#9333ea",
};

const typeLabels = {
  ontology: "Ontology",
  ontology_mapping: "Mapping",
  semantic_model: "Semantic Model",
  semantic_dataset: "Dataset",
  semantic_metric: "Metric",
  base_entity_concept: "Base Entity Concept",
  entity_type_concept: "Entity Concept",
  value_type_concept: "ValueType",
  built_in_concept: "Built-in Concept",
  external_concept: "External Concept",
  physical_table: "Table",
  regulatory_requirement: "Report Requirement",
  report_implementation: "Report Data Logic",
  table: "Table",
  view: "View",
  column: "Column",
  dataset_field: "Dataset Field",
  value_type_property: "ValueType",
  metric_field: "Metric",
  requirement_semantic_item: "Requirement Item",
  implementation_field_binding: "Field Binding",
};
const typeOrder = [
  "regulatory_requirement",
  "report_implementation",
  "entity_type_concept",
  "base_entity_concept",
  "semantic_dataset",
  "semantic_metric",
  "physical_table",
  "table",
  "view",
  "value_type_concept",
  "built_in_concept",
  "external_concept",
  "semantic_model",
  "ontology",
  "ontology_mapping",
  "dataset_field",
  "column",
  "value_type_property",
  "metric_field",
  "requirement_semantic_item",
  "implementation_field_binding",
];

function typeRank(type) {
  const index = typeOrder.indexOf(type);
  return index >= 0 ? index : typeOrder.length;
}

const EDGE_ROUTE_ORDER = [
  ["regulatory_requirement", "entity_type_concept"],
  ["report_implementation", "regulatory_requirement"],
  ["report_implementation", "semantic_dataset"],
  ["report_implementation", "semantic_metric"],
  ["entity_type_concept", "semantic_dataset"],
  ["semantic_dataset", "physical_table"],
  ["semantic_dataset", "table"],
  ["semantic_dataset", "view"],
  ["entity_type_concept", "entity_type_concept"],
  ["semantic_dataset", "semantic_dataset"],
  ["entity_type_concept", "semantic_metric"],
  ["semantic_metric", "semantic_dataset"],
  ["entity_type_concept", "base_entity_concept"],
];

function edgeRouteRank(sourceType, targetType) {
  const index = EDGE_ROUTE_ORDER.findIndex(([source, target]) => source === sourceType && target === targetType);
  return index >= 0 ? index : EDGE_ROUTE_ORDER.length;
}

function compareEdgeFilter(a, b) {
  const rankA = edgeRouteRank(edgeFilterSourceType(a), edgeFilterTargetType(a));
  const rankB = edgeRouteRank(edgeFilterSourceType(b), edgeFilterTargetType(b));
  return rankA - rankB || edgeFilterLabel(a).localeCompare(edgeFilterLabel(b));
}

function edgeRouteItems(businessTypes, businessSelected, businessKind, edgeKeys, edgeSelected, edgeKind) {
  const businessItems = businessTypes.length ? [{
    sourceType: "entity_type_concept",
    targetType: "entity_type_concept",
    active: businessTypes.some(type => businessSelected.has(type)),
    kind: businessKind,
    value: BUSINESS_ENTITY_ROUTE_VALUE,
    label: `${routeTypeName("entity_type_concept")} -> ${routeTypeName("entity_type_concept")}`,
  }] : [];
  const edgeItems = edgeKeys.map(key => ({
    sourceType: edgeFilterSourceType(key),
    targetType: edgeFilterTargetType(key),
    active: edgeSelected.has(key),
    kind: edgeKind,
    value: key,
    label: edgeFilterLabel(key),
  }));
  return [...businessItems, ...edgeItems].sort(compareEdgeRouteItems);
}

function compareEdgeRouteItems(a, b) {
  const rankA = edgeRouteRank(a.sourceType, a.targetType);
  const rankB = edgeRouteRank(b.sourceType, b.targetType);
  return rankA - rankB || a.label.localeCompare(b.label) || String(a.value).localeCompare(String(b.value));
}

function renderEdgeRouteItems(items) {
  return items.map(item => routeChip(item.sourceType, item.targetType, item.active, item.kind, item.value)).join("");
}


function compareNodeType(a, b) {
  return typeRank(a).toString().padStart(3, "0").localeCompare(typeRank(b).toString().padStart(3, "0")) || typeName(a).localeCompare(typeName(b));
}
const catalogState = {
  query: "",
  nodeTypes: new Set(nodeTypes()),
  businessEdgeTypes: new Set(businessEdgeTypes()),
  edgeTypes: new Set(edgeTypes()),
  tags: new Set(allTags()),
  selectedKind: "node",
  selectedId: chooseInitialNode(),
};

const graphState = {
  focusId: catalogState.selectedId,
  viewMode: "traceability",
  selectedNodeId: catalogState.selectedId,
  selectedEdgeId: null,
  showScenarioProfile: false,
  selectedFieldId: null,
  selectedFieldIds: new Set(),
  maxDepth: 1,
  nodeTypes: new Set(nodeTypes()),
  businessEdgeTypes: new Set(businessEdgeTypes()),
  edgeTypes: defaultGraphEdgeTypesForFocus(catalogState.selectedId),
  metricOverlays: new Set(),
  selectedOntology: "",
  selectedSemanticModel: "",
  tags: new Set(allTags()),
  expanded: new Set(),
  autoExpandSuppressed: new Set(),
  hiddenNodes: new Set(),
  manualPositions: new Map(),
  dragging: null,
  suppressNextClick: false,
  layoutRun: 0,
  visible: { nodes: [], edges: [], childEdges: [], depthById: new Map(), positions: new Map(), size: { ...DEFAULT_GRAPH_SIZE } },
};

const scenarioState = {
  selectedKey: "",
  centerByKey: new Map(),
  presets: normalizeScenarioList(scenarioData.presets, "preset"),
  snapshots: normalizeScenarioList(scenarioData.snapshots, "snapshot"),
  serverAvailable: false,
  serverLoading: false,
  serverError: "",
};

const appState = {
  currentPage: "home",
};

function node(id) {
  return nodeMap.get(id);
}

function raw(id) {
  return catalog[id] || {};
}

function graphEdge(id) {
  return edgeMap.get(id);
}

function chooseInitialNode() {
  return (
    topLevelNodes.find(item => item.type === "regulatory_requirement")?.id ||
    topLevelNodes.find(item => item.type === "report_implementation")?.id ||
    topLevelNodes.find(item => item.type === "entity_type_concept")?.id ||
    topLevelNodes.find(item => item.type === "base_entity_concept")?.id ||
    topLevelNodes.find(item => item.type === "physical_table")?.id ||
    topLevelNodes[0]?.id ||
    graph.nodes[0]?.id
  );
}

function nodeTypes() {
  return [...new Set(topLevelNodes.map(item => item.type))].sort(compareNodeType);
}

function edgeTypes() {
  return [...new Set(graph.edges
    .map(edge => edgeFilterKeyFor(edge))
    .filter(Boolean))]
    .sort(compareEdgeFilter);
}

function businessEdgeTypes() {
  return [...new Set(graph.edges
    .map(edge => normalizedEdge(edge))
    .filter(isBusinessEntityEdge)
    .map(edge => edge.type))].sort();
}

function isEntityConceptNodeType(type) {
  return type === "entity_type_concept" || type === "base_entity_concept";
}

function isBusinessEntityEdge(edge) {
  const normalized = edge.sourceOriginal ? edge : normalizedEdge(edge);
  const rawEdge = normalized.raw || edge;
  return !String(rawEdge.type || "").trim()
    && Boolean(normalized.type)
    && isEntityConceptNodeType(nodeType(normalized.source))
    && isEntityConceptNodeType(nodeType(normalized.target));
}

function isChildLevelEdge(edge) {
  const normalized = edge.sourceOriginal ? edge : normalizedEdge(edge);
  return isChildNode(normalized.sourceOriginal) || isChildNode(normalized.targetOriginal);
}

function edgeFilterKeyFor(edge) {
  const normalized = edge.sourceOriginal ? edge : normalizedEdge(edge);
  if (!normalized.type || STRUCTURAL_EDGE_TYPES.has(normalized.type)) return "";
  if (isBusinessEntityEdge(normalized)) return "";
  if (isChildLevelEdge(normalized)) return "";
  return `${normalized.type}::${nodeType(normalized.source)}::${nodeType(normalized.target)}`;
}

function edgeFilterTypeFromKey(key) {
  return String(key || "").split("::")[0] || "";
}

function edgeFilterSourceType(key) {
  return String(key || "").split("::")[1] || "";
}

function edgeFilterTargetType(key) {
  return String(key || "").split("::")[2] || "";
}

function edgeFilterMatchesTypes(key, configuredTypes) {
  if (!configuredTypes) return true;
  return configuredTypes.includes(edgeFilterTypeFromKey(key));
}

function edgeTypeAllowed(edge, state) {
  const normalized = edge.sourceOriginal ? edge : normalizedEdge(edge);
  if (isChildLevelEdge(normalized)) return true;
  if (isBusinessEntityEdge(normalized)) return state.businessEdgeTypes.has(normalized.type);
  const key = edgeFilterKeyFor(normalized);
  return Boolean(key && state.edgeTypes.has(key));
}
const GRAPH_VIEW_CONFIG = {
  traceability: {
    title: "Explorer",
    description: "Choose a focus node, max depth, and filters to decide which nodes and edges are visible.",
    nodeTypes: null,
    edgeTypes: null,
    businessEdgeTypes: null,
    childEdgeTypes: [],
    minDepth: 1,
    autoExpandFields: false,
    usesFocus: true,
  },
  ontology: {
    title: "Ontology",
    description: "Ontology-only view: Entity concepts, Base Entity concepts, inherited fields, and business relationships.",
    nodeTypes: ["entity_type_concept", "base_entity_concept"],
    defaultNodeTypes: ["entity_type_concept"],
    edgeTypes: ["EXTENDS"],
    businessEdgeTypes: "all",
    childEdgeTypes: [],
    minDepth: 2,
    autoExpandFields: false,
    usesFocus: false,
    selectorKind: "ontology",
  },
  semantic: {
    title: "Semantic Model",
    description: "Semantic-model view: datasets, dataset relationships, and metric dependencies.",
    nodeTypes: ["semantic_dataset", "semantic_metric"],
    edgeTypes: ["DATASET_JOIN", "DERIVED_BY"],
    businessEdgeTypes: [],
    childEdgeTypes: ["SOURCE_FIELD", "DERIVED_BY"],
    minDepth: 2,
    autoExpandFields: false,
    usesFocus: false,
    selectorKind: "semantic_model",
  },
  requirement: {
    title: "Requirement View",
    description: "Requirement-to-ontology view: reporting requirement items point to the Entity/value fields they require.",
    nodeTypes: ["regulatory_requirement", "entity_type_concept", "base_entity_concept"],
    edgeTypes: ["REQUIRES_CONCEPT", "REQUIRES_SEMANTIC_FIELD", "DERIVED_FROM"],
    businessEdgeTypes: [],
    childEdgeTypes: ["REQUIRES_SEMANTIC_FIELD", "DERIVED_FROM"],
    minDepth: 2,
    autoExpandFields: false,
    usesFocus: true,
    selectorNodeType: "regulatory_requirement",
  },
  data_logic: {
    title: "Data Logic View",
    description: "Report data logic view: logic fields connect to requirement fields and the dataset/table fields they read.",
    nodeTypes: ["report_implementation", "regulatory_requirement", "semantic_dataset", "semantic_metric", "physical_table", "table", "view"],
    edgeTypes: ["IMPLEMENTS", "SOURCE_TABLE", "SOURCE_FIELD", "MAPS_TO_FIELD", "IMPLEMENTS_FIELD", "IMPLEMENTS_METRIC"],
    businessEdgeTypes: [],
    childEdgeTypes: ["SOURCE_FIELD", "MAPS_TO_FIELD", "IMPLEMENTS_FIELD", "IMPLEMENTS_METRIC"],
    minDepth: 2,
    autoExpandFields: false,
    usesFocus: true,
    selectorNodeType: "report_implementation",
  },
};

const PAGE_VIEW_MODE = {
  graph: "traceability",
  ontology: "ontology",
  semantic: "semantic",
  scenarios: "traceability",
};

const GRAPH_CONTROL_SECTIONS = {
  traceability: ["focus", "hidden", "depth", "nodeTypes", "businessEdges", "edgeTypes"],
  ontology: ["selector", "hidden", "nodeTypes", "businessEdges", "edgeTypes"],
  semantic: ["selector", "hidden", "nodeTypes", "metrics", "edgeTypes"],
  requirement: ["selector", "hidden", "edgeTypes"],
  data_logic: ["selector", "hidden", "edgeTypes"],
};

function availableSet(values, availableValues) {
  const available = new Set(availableValues);
  return new Set((values || []).filter(value => available.has(value)));
}

function graphViewConfig(mode = graphState?.viewMode || "traceability") {
  return GRAPH_VIEW_CONFIG[mode] || GRAPH_VIEW_CONFIG.traceability;
}

function graphControlSet(mode = graphState?.viewMode || "traceability") {
  const controls = new Set(GRAPH_CONTROL_SECTIONS[mode] || GRAPH_CONTROL_SECTIONS.traceability);
  if (appState?.currentPage === "scenarios") {
    controls.delete("focus");
    controls.add("scenario");
  }
  return controls;
}

function graphNodeTypeOptions(mode = graphState?.viewMode || "traceability") {
  return [...nodeTypesForMode(mode)].sort(compareNodeType);
}

function graphEdgeTypeOptions(mode = graphState?.viewMode || "traceability") {
  const configured = graphViewConfig(mode).edgeTypes;
  const options = edgeTypes();
  if (!configured) return options;
  const allowedNodeTypes = nodeTypesForMode(mode);
  return options
    .filter(key => edgeFilterMatchesTypes(key, configured))
    .filter(key => allowedNodeTypes.has(edgeFilterSourceType(key)) && allowedNodeTypes.has(edgeFilterTargetType(key)))
    .sort(compareEdgeFilter);
}

function graphBusinessEdgeTypeOptions(mode = graphState?.viewMode || "traceability") {
  const configured = graphViewConfig(mode).businessEdgeTypes;
  if (configured === "all" || configured === null || configured === undefined) return businessEdgeTypes();
  if (Array.isArray(configured)) return [...availableSet(configured, businessEdgeTypes())].sort();
  return [];
}

function metricOverlayOptions() {
  return topLevelNodes
    .filter(item => item.type === "semantic_metric")
    .filter(item => graphState.viewMode !== "semantic" || !graphState.selectedSemanticModel || nodeSemanticModels(item.id).includes(graphState.selectedSemanticModel))
    .map(item => item.properties?.semantic_metric || item.label || item.id)
    .filter(Boolean)
    .sort();
}

function metricNameForNode(id) {
  const item = node(id);
  return item?.properties?.semantic_metric || item?.label || id;
}

function metricOverlaySelected(id) {
  return nodeType(id) !== "semantic_metric" || graphState.metricOverlays.has(metricNameForNode(id));
}
function graphViewUsesFocus(mode = graphState?.viewMode || "traceability") {
  return graphViewConfig(mode).usesFocus !== false;
}

function graphViewSelectorKind(mode = graphState?.viewMode || "traceability") {
  const config = graphViewConfig(mode);
  if (config.selectorKind) return config.selectorKind;
  return config.selectorNodeType ? "node" : "";
}

function graphViewSelectorType(mode = graphState?.viewMode || "traceability") {
  return graphViewConfig(mode).selectorNodeType || "";
}

function uniqueStrings(values) {
  return [...new Set((values || []).map(value => String(value || "").trim()).filter(Boolean))];
}

function displayModelName(value) {
  return String(value || "")
    .replace(/[_-]+/g, " ")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim();
}

function optionLabel(value) {
  return displayModelName(value) || String(value || "");
}


function nodeOntologies(id) {
  const item = node(id);
  const data = raw(id);
  const parent = parentOf(id);
  const values = uniqueStrings([
    item?.properties?.ontology,
    ...(item?.properties?.ontologies || []),
    data.ontology,
    ...(data.ontologies || []),
  ]);
  if (!values.length && parent && parent !== id) return nodeOntologies(parent);
  return values.length ? values : uniqueStrings(summary.ontologies || (summary.ontology ? [summary.ontology] : []));
}

function nodeOntologyName(id) {
  return nodeOntologies(id)[0] || "";
}

function nodeBelongsToOntology(id, ontologyId) {
  return !ontologyId || nodeOntologies(id).includes(ontologyId);
}

function nodeSemanticModels(id) {
  const item = node(id);
  const data = raw(id);
  const parent = parentOf(id);
  const values = uniqueStrings([
    item?.properties?.semantic_model,
    ...(item?.properties?.semantic_models || []),
    data.semantic_model,
    ...(data.semantic_models || []),
  ]);
  if (!values.length && parent && parent !== id) return nodeSemanticModels(parent);
  return values;
}

function ontologyOptions() {
  const sourceOntologies = Array.isArray(summary.source_ontologies) ? summary.source_ontologies.map(item => item?.name).filter(Boolean) : [];
  if (sourceOntologies.length) return uniqueStrings(sourceOntologies).map(name => ({ id: name, label: optionLabel(name) }));
  const fromSummary = uniqueStrings(summary.ontologies || (summary.ontology ? [summary.ontology] : []));
  const fromNodes = uniqueStrings(topLevelNodes.flatMap(item => nodeOntologies(item.id)));
  return uniqueStrings([...fromSummary, ...fromNodes]).map(name => ({ id: name, label: optionLabel(name) }));
}

function semanticModelOptions() {
  const sourceModels = Array.isArray(summary.source_semantic_models) ? summary.source_semantic_models.map(item => item?.name).filter(Boolean) : [];
  if (sourceModels.length) return uniqueStrings(sourceModels).map(name => ({ id: name, label: optionLabel(name) }));
  const fromSummary = uniqueStrings(summary.semantic_models || []);
  const fromNodes = uniqueStrings(topLevelNodes.flatMap(item => nodeSemanticModels(item.id)));
  return uniqueStrings([...fromSummary, ...fromNodes]).map(name => ({ id: name, label: optionLabel(name) }));
}

function aiContextSummary(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(aiContextSummary).filter(Boolean).join(" · ");
  if (typeof value === "object") {
    const keys = ["description", "purpose", "context", "summary", "notes", "owner", "model_version", "source_systems"];
    const parts = keys
      .filter(key => value[key] !== undefined && value[key] !== null && value[key] !== "")
      .map(key => Array.isArray(value[key]) ? value[key].join(", ") : String(value[key]));
    return parts.join(" · ");
  }
  return String(value);
}

function scopeHeaderText(info) {
  return info?.description || aiContextSummary(info?.ai_context) || "";
}

function aiContextRow(value) {
  const text = aiContextSummary(value);
  return text ? kv("ai_context", text) : "";
}

function renderAiContextSection(value) {
  if (value === undefined || value === null || value === "") return "";
  const row = aiContextRow(value) || compactJsonRow("ai_context", value);
  if (!row) return "";
  return `
    <section class="detail-section">
      ${row}
    </section>
  `;
}

function rawYamlSection(payload) {
  if (!hasRawYamlPayload(payload)) return "";
  return `
    <section class="detail-section">
      <h3>Raw YAML</h3>
      <pre class="raw-block">${escapeHtml(JSON.stringify(payload, null, 2))}</pre>
    </section>
  `;
}

function hasRawYamlPayload(value) {
  if (value === undefined || value === null || value === "") return false;
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "object") return Object.keys(value).length > 0;
  return true;
}

function clonePlain(value) {
  if (value === undefined || value === null) return value;
  return JSON.parse(JSON.stringify(value));
}

function pickExisting(source, keys) {
  const output = {};
  if (!source || typeof source !== "object") return output;
  keys.forEach(key => {
    if (Object.prototype.hasOwnProperty.call(source, key) && source[key] !== undefined) {
      output[key] = clonePlain(source[key]);
    }
  });
  return output;
}

function osiRelationshipPayloadFromField(field) {
  const source = raw(field.id);
  if (source.relationship) return clonePlain(source.relationship);
  const props = field.raw || {};
  const roles = props.roles || (field.valueConcept ? [{ concept: field.valueConcept }] : []);
  const payload = {
    name: field.relationship || field.fieldName || props.relationship_name || props.field_name || field.name,
    description: field.description || props.description || "",
    roles,
    derived_by: props.derived_by || [],
    requires: props.requires || [],
    verbalizes: props.verbalizes || [],
  };
  if (props.multiplicity) payload.multiplicity = props.multiplicity;
  return payload;
}

function rawYamlNodePayload(item, data = raw(item.id)) {
  if (!item) return {};
  if (data?.concept) {
    const payload = { concept: clonePlain(data.concept) };
    if (Array.isArray(data.relationships)) payload.relationships = clonePlain(data.relationships);
    return payload;
  }
  if (item.type === "value_type_property") return osiRelationshipPayloadFromField({ id: item.id, raw: item.properties || {}, ...item.properties });
  if (item.type === "semantic_dataset") {
    return pickExisting(data, ["name", "source", "primary_key", "unique_keys", "description", "ai_context", "fields", "custom_extensions"]);
  }
  if (item.type === "dataset_field") return data?.field_definition ? clonePlain(data.field_definition) : pickExisting(data, ["name", "expression", "dimension", "label", "description", "ai_context", "custom_extensions"]);
  if (item.type === "semantic_metric") return data?.metric ? clonePlain(data.metric) : pickExisting(data, ["name", "expression", "description", "ai_context", "custom_extensions"]);
  if (item.type === "regulatory_requirement") return pickExisting(data, ["name", "description", "source", "SLA", "semantic_scope", "required_fields", "calculations", "controls"]);
  if (item.type === "report_implementation") return pickExisting(data, ["name", "description", "source", "requirement", "field_mappings", "source_fields"]);
  if (item.type === "physical_table" || item.type === "table" || item.type === "view") return pickExisting(data, ["source", "columns"]);
  return {};
}

function rawYamlFieldPayload(field) {
  if (!field) return {};
  const source = raw(field.id);
  if (field.type === "value_type_property") return osiRelationshipPayloadFromField(field);
  if (field.type === "dataset_field") return source?.field_definition ? clonePlain(source.field_definition) : pickExisting(field.raw || source, ["name", "expression", "dimension", "label", "description", "ai_context", "custom_extensions"]);
  if (field.type === "metric_field") return pickExisting(field.raw || source, ["name", "expression", "description", "ai_context", "custom_extensions"]);
  if (field.type === "column") return pickExisting(field.raw || source, ["name", "description", "data_type", "nullable"]);
  if (field.type === "requirement_semantic_item") return pickExisting(field.raw || source, ["name", "description", "semantic_reference", "required"]);
  if (field.type === "implementation_field_binding") return pickExisting(field.raw || source, ["name", "description", "requirement_field", "dataset", "field", "expression"]);
  return pickExisting(field.raw || source, ["name", "description", "expression", "ai_context", "custom_extensions"]);
}

function rawYamlEdgePayload(edge) {
  const rawEdge = edge?.raw || {};
  const props = rawEdge.properties || {};
  if (props.relationship && typeof props.relationship === "object") return clonePlain(props.relationship);
  if (edge && isEntityBusinessEdge(edge)) {
    const payload = {
      name: edge.relationshipName,
      description: edge.description || props.description || "",
      roles: clonePlain(props.roles || []),
      derived_by: clonePlain(props.derived_by || []),
      requires: clonePlain(props.requires || []),
      verbalizes: clonePlain(props.verbalizes || []),
    };
    if (edge.multiplicity || props.multiplicity) payload.multiplicity = edge.multiplicity || props.multiplicity;
    return payload;
  }
  if (edge?.type === "CONTAINS") {
    const targetRelationship = raw(edge.targetOriginal || edge.target)?.relationship;
    if (targetRelationship) return clonePlain(targetRelationship);
  }
  return {};
}
function compactJsonRow(label, value) {
  if (value === undefined || value === null || value === "") return "";
  if (Array.isArray(value) && !value.length) return kv(label, "[]");
  if (typeof value === "object" && !Array.isArray(value) && !Object.keys(value).length) return kv(label, "{}");
  if (Array.isArray(value) && value.every(item => typeof item !== "object")) return kv(label, value.join(", "));
  if (typeof value !== "object") return kv(label, String(value));
  return kv(label, JSON.stringify(value));
}

function isEntityConceptNodeType(type) {
  return ["entity_type_concept", "base_entity_concept"].includes(type);
}

function isEntityBusinessEdge(edge) {
  return !String(edge.raw?.type || "").trim() && isEntityConceptNodeType(nodeType(edge.source)) && isEntityConceptNodeType(nodeType(edge.target));
}

function customExtensionsSection(extensions) {
  const rows = Array.isArray(extensions) ? extensions : [];
  if (!rows.length) return "";
  return `
    <section class="detail-section">
      <h3>custom_extensions</h3>
      <pre class="raw-block">${escapeHtml(JSON.stringify(rows, null, 2))}</pre>
    </section>
  `;
}


function ontologyInfo(ontologyId = graphState.selectedOntology) {
  const entry = (summary.source_ontologies || []).find(item => item.name === ontologyId) || {};
  return {
    id: ontologyId,
    type: "Ontology",
    displayName: optionLabel(ontologyId),
    description: entry.description || aiContextSummary(entry.ai_context) || "",
    ai_context: entry.ai_context || null,
    custom_extensions: entry.custom_extensions || null,
    version: entry.version || "",
    sourceFile: entry.source_file || "",
    nodeCount: ontologyNodeCount(ontologyId),
    raw: entry,
  };
}

function semanticModelInfo(modelId = graphState.selectedSemanticModel) {
  const entries = summary.source_semantic_models || summary.semantic_model_entries || [];
  const entry = entries.find(item => item.name === modelId) || {};
  return {
    id: modelId,
    type: "Semantic Model",
    displayName: optionLabel(modelId),
    description: entry.description || aiContextSummary(entry.ai_context) || "",
    ai_context: entry.ai_context || null,
    custom_extensions: entry.custom_extensions || null,
    sourceFile: entry.source_file || "",
    mappingName: entry.mapping_name || "",
    ontology: entry.ontology || "",
    datasetCount: entry.dataset_count ?? topLevelNodes.filter(item => item.type === "semantic_dataset" && nodeSemanticModels(item.id).includes(modelId)).length,
    metricCount: entry.metric_count ?? topLevelNodes.filter(item => item.type === "semantic_metric" && nodeSemanticModels(item.id).includes(modelId)).length,
    nodeCount: semanticModelNodeCount(modelId),
    raw: entry,
  };
}

function currentGraphScopeInfo() {
  const kind = graphViewSelectorKind();
  if (kind === "ontology") return ontologyInfo(graphState.selectedOntology);
  if (kind === "semantic_model") return semanticModelInfo(graphState.selectedSemanticModel);
  return null;
}

function ensureGraphScopeSelection(mode = graphState?.viewMode || "traceability") {
  if (mode === "ontology") {
    const options = ontologyOptions();
    if (!options.some(item => item.id === graphState.selectedOntology)) graphState.selectedOntology = options[0]?.id || "";
  }
  if (mode === "semantic") {
    const options = semanticModelOptions();
    if (!options.some(item => item.id === graphState.selectedSemanticModel)) graphState.selectedSemanticModel = options[0]?.id || "";
  }
}

function graphViewSelectorOptions(mode = graphState?.viewMode || "traceability") {
  const kind = graphViewSelectorKind(mode);
  if (kind === "ontology") return ontologyOptions();
  if (kind === "semantic_model") return semanticModelOptions();
  const selectorType = graphViewSelectorType(mode);
  if (!selectorType) return [];
  return topLevelNodes
    .filter(item => item.type === selectorType && !graphState.hiddenNodes.has(item.id))
    .sort((a, b) => label(a.id).localeCompare(label(b.id)))
    .map(item => ({ id: item.id, label: label(item.id) }));
}

function currentGraphSelectorValue(mode = graphState?.viewMode || "traceability") {
  const kind = graphViewSelectorKind(mode);
  if (kind === "ontology") return graphState.selectedOntology;
  if (kind === "semantic_model") return graphState.selectedSemanticModel;
  return graphState.focusId;
}

function graphViewSelectorTitle() {
  const kind = graphViewSelectorKind();
  if (kind === "ontology") return "Ontology";
  if (kind === "semantic_model") return "Semantic Model";
  return graphState.viewMode === "data_logic" ? "Report Data Logic" : "Report Requirement";
}

function selectGraphViewObject(value) {
  const kind = graphViewSelectorKind();
  if (kind === "ontology") {
    graphState.selectedOntology = value;
    graphState.selectedNodeId = null;
    graphState.selectedEdgeId = null;
    clearSelectedFields();
    renderGraphPage({ fitAfter: true });
    return;
  }
  if (kind === "semantic_model") {
    graphState.selectedSemanticModel = value;
    graphState.metricOverlays.clear();
    graphState.selectedNodeId = null;
    graphState.selectedEdgeId = null;
    clearSelectedFields();
    renderGraphPage({ fitAfter: true });
    return;
  }
  const id = value;
  if (!id || !node(id) || isChildNode(id)) return;
  setGraphFocus(id, { resetEdgeTypes: false, applyDefaultEdgeTypes: false });
  graphState.selectedEdgeId = null;
  clearSelectedFields();
  renderGraphPage({ fitAfter: true });
}

function hasSelectedFields() {
  return Boolean(graphState.selectedFieldIds?.size);
}

function fieldIsSelected(id) {
  return graphState.selectedFieldIds?.has(id);
}

function clearSelectedFields() {
  graphState.selectedFieldIds.clear();
  graphState.selectedFieldId = null;
}

function syncSelectedFieldId() {
  if (graphState.selectedFieldId && graphState.selectedFieldIds.has(graphState.selectedFieldId)) return;
  graphState.selectedFieldId = [...graphState.selectedFieldIds].at(-1) || null;
}

function removeSelectedFieldsForParent(parentId) {
  [...graphState.selectedFieldIds].forEach(id => {
    if (parentOf(id) === parentId) graphState.selectedFieldIds.delete(id);
  });
  syncSelectedFieldId();
}

function nodeTypesForMode(mode) {
  const configured = graphViewConfig(mode).nodeTypes;
  return configured ? availableSet(configured, nodeTypes()) : new Set(nodeTypes());
}

function defaultNodeTypesForMode(mode = graphState?.viewMode || "traceability") {
  const configured = graphViewConfig(mode).defaultNodeTypes || graphViewConfig(mode).nodeTypes;
  return configured ? availableSet(configured, nodeTypes()) : new Set(nodeTypes());
}

function defaultEdgeTypesForMode(mode = graphState?.viewMode || "traceability", focusId = graphState?.focusId) {
  const configured = graphViewConfig(mode).edgeTypes;
  if (configured) return new Set(graphEdgeTypeOptions(mode));
  return defaultGraphEdgeTypesForFocus(focusId);
}

function defaultBusinessEdgeTypesForMode(mode = graphState?.viewMode || "traceability") {
  const configured = graphViewConfig(mode).businessEdgeTypes;
  if (configured === "all") return new Set(businessEdgeTypes());
  if (Array.isArray(configured)) return availableSet(configured, businessEdgeTypes());
  return new Set(businessEdgeTypes());
}

function childEdgeTypesForMode(mode = graphState?.viewMode || "traceability") {
  return new Set(graphViewConfig(mode).childEdgeTypes || []);
}

function nodeAllowedForMode(id, mode = graphState?.viewMode || "traceability") {
  return nodeTypesForMode(mode).has(nodeType(id));
}

function preferredFocusPredicate(mode = graphState?.viewMode || "traceability") {
  const preferredByMode = {
    ontology: item => isEntityConceptNodeType(item.type),
    semantic: item => ["semantic_dataset", "semantic_metric"].includes(item.type),
    requirement: item => item.type === "regulatory_requirement",
    data_logic: item => item.type === "report_implementation",
  };
  return preferredByMode[mode] || (() => true);
}

function focusCandidateForMode(mode = graphState?.viewMode || "traceability") {
  const allowed = nodeTypesForMode(mode);
  const preferred = preferredFocusPredicate(mode);
  return topLevelNodes.find(item => allowed.has(item.type) && preferred(item))?.id ||
    (allowed.has(nodeType(graphState.focusId)) ? graphState.focusId : "") ||
    topLevelNodes.find(item => allowed.has(item.type))?.id ||
    chooseInitialNode();
}

function applyGraphViewMode(mode, options = {}) {
  const normalizedMode = GRAPH_VIEW_CONFIG[mode] ? mode : "traceability";
  const previousMode = graphState.viewMode;
  graphState.viewMode = normalizedMode;
  ensureGraphScopeSelection(normalizedMode);
  const shouldReset = options.resetFilters || previousMode !== normalizedMode;
  if (shouldReset) {
    graphState.nodeTypes = defaultNodeTypesForMode(normalizedMode);
    graphState.businessEdgeTypes = defaultBusinessEdgeTypesForMode(normalizedMode);
    graphState.edgeTypes = defaultEdgeTypesForMode(normalizedMode);
    graphState.maxDepth = Math.max(graphViewConfig(normalizedMode).minDepth || 1, normalizedMode === "traceability" ? 1 : graphState.maxDepth);
    graphState.expanded.clear();
    graphState.autoExpandSuppressed.clear();
  }
  if (graphViewUsesFocus(normalizedMode)) {
    if (!nodeAllowedForMode(graphState.focusId, normalizedMode) || (previousMode !== normalizedMode && !preferredFocusPredicate(normalizedMode)(node(graphState.focusId)))) {
      setGraphFocus(focusCandidateForMode(normalizedMode), { resetEdgeTypes: false, applyDefaultEdgeTypes: false });
    }
  } else {
    graphState.selectedNodeId = null;
  }
  graphState.selectedEdgeId = null;
  clearSelectedFields();
}

function graphViewTitle() {
  return graphViewConfig().title;
}

function graphViewDescription() {
  return graphViewConfig().description;
}
function defaultGraphEdgeTypes() {
  return new Set(edgeTypes().filter(key => !DEFAULT_UNCHECKED_GRAPH_EDGE_TYPES.has(edgeFilterTypeFromKey(key))));
}

function addEdgeDefaultsByType(targetSet, type) {
  edgeTypes()
    .filter(key => edgeFilterTypeFromKey(key) === type)
    .forEach(key => targetSet.add(key));
}

function defaultGraphEdgeTypesForFocus(focusId = graphState?.focusId) {
  const defaults = defaultGraphEdgeTypes();
  if (nodeType(focusId) === "base_entity_concept") {
    addEdgeDefaultsByType(defaults, "EXTENDS");
  }
  return defaults;
}

function setGraphFocus(id, options = {}) {
  if (!node(id) || isChildNode(id)) return;
  const changed = graphState.focusId !== id;
  graphState.focusId = id;
  graphState.selectedNodeId = id;
  if (options.resetEdgeTypes || (changed && options.applyDefaultEdgeTypes !== false)) {
    graphState.edgeTypes = defaultEdgeTypesForMode(graphState.viewMode, id);
    graphState.businessEdgeTypes = defaultBusinessEdgeTypesForMode(graphState.viewMode);
  }
}

function allTags() {
  return [...new Set(topLevelNodes.flatMap(item => tagsFor(item.id)))].sort();
}

function tagFilterIsActive(selectedTags) {
  const tags = allTags();
  return tags.length > 0 && selectedTags.size < tags.length;
}

function normalizeType(type) {
  const aliases = {
    reads: "SOURCE_TABLE",
    derived_from: "DERIVES_FROM",
    field_lineage: "DERIVES_FROM",
    maps_to_property: "MAPS_TO",
    uses_term: "HAS_TERM",
    related_to: "RELATED_TO",
    contains: "CONTAINS",
  };
  return aliases[String(type || "RELATED_TO").toLowerCase()] || String(type || "RELATED_TO").toUpperCase();
}

function typeName(type) {
  return typeLabels[type] || titleCase(type);
}

function routeTypeName(type) {
  const labels = {
    regulatory_requirement: "Requirement",
    report_implementation: "Data Logic",
    entity_type_concept: "Entity",
    base_entity_concept: "Base Entity",
    semantic_dataset: "Dataset",
    semantic_metric: "Metric",
    physical_table: "Table",
    table: "Table",
    view: "View",
  };
  return labels[type] || typeName(type);
}

function edgeFilterRouteLabel(key) {
  const sourceType = edgeFilterSourceType(key);
  const targetType = edgeFilterTargetType(key);
  return [routeTypeName(sourceType), routeTypeName(targetType)].filter(Boolean).join(" -> ");
}

function edgeFilterLabel(key) {
  return edgeFilterRouteLabel(key) || titleCase(edgeFilterTypeFromKey(key));
}

function titleCase(value) {
  return String(value || "node")
    .replace(/_/g, " ")
    .replace(/\b\w/g, char => char.toUpperCase());
}

function colorFor(type) {
  return typeColors[type] || "#64748b";
}

function nodeFamily(type) {
  if (["base_entity_concept", "entity_type_concept", "value_type_concept", "built_in_concept", "external_concept", "semantic_dataset", "semantic_metric"].includes(type)) return "concept";
  if (["regulatory_requirement", "requirement_semantic_item"].includes(type)) return "requirement";
  if (["report_implementation", "implementation_field_binding"].includes(type)) return "data-logic";
  if (["physical_table", "table", "view"].includes(type)) return "db";
  return "other";
}

function nodeFamilyLabel(type) {
  const family = nodeFamily(type);
  if (type === "semantic_dataset") return "Dataset";
  if (type === "semantic_metric") return "Metric";
  if (family === "concept") return "Concept";
  if (family === "requirement") return "Requirement";
  if (family === "data-logic") return "Data Logic";
  if (family === "db") return "DB";
  return "Node";
}

function label(id) {
  return node(id)?.label || raw(id).name || id;
}

function bilingualTitleParts(value) {
  const text = String(value || "").trim();
  if (!text || !/[\u3400-\u9fff]/.test(text) || !/[A-Za-z]/.test(text)) return null;
  const separators = [" · ", " - ", " – ", " — ", " / ", "：", ":"];
  for (const separator of separators) {
    const index = text.indexOf(separator);
    if (index <= 0) continue;
    const left = text.slice(0, index).trim();
    const right = text.slice(index + separator.length).trim();
    if (!left || !right) continue;
    const leftCjk = /[\u3400-\u9fff]/.test(left);
    const rightCjk = /[\u3400-\u9fff]/.test(right);
    const leftLatin = /[A-Za-z]/.test(left);
    const rightLatin = /[A-Za-z]/.test(right);
    if (leftCjk && rightLatin) return { primary: left, secondary: right };
    if (rightCjk && leftLatin) return { primary: right, secondary: left };
  }
  const boundary = text.match(/^(.+?[\u3400-\u9fff][\u3400-\u9fff\s，。、；：（）()《》]+)\s+([A-Za-z].+)$/);
  if (boundary) return { primary: boundary[1].trim(), secondary: boundary[2].trim() };
  return null;
}

function bilingualTitleHtml(value) {
  const parts = bilingualTitleParts(value);
  if (!parts) return escapeHtml(value || "");
  return `<span class="bilingual-title"><span class="bilingual-title-primary">${escapeHtml(parts.primary)}</span><span class="bilingual-title-secondary">${escapeHtml(parts.secondary)}</span></span>`;
}

function setBilingualTitle(element, value) {
  if (!element) return;
  element.innerHTML = bilingualTitleHtml(value || "");
}

function nodeType(id) {
  return node(id)?.type || raw(id).type || "node";
}

function description(id) {
  return node(id)?.properties?.description || raw(id).description || "";
}

function tagsFor(id) {
  const data = raw(id);
  const props = node(id)?.properties || {};
  return [...new Set([...(data.tags || []), ...(props.tags || [])].filter(Boolean))];
}

function expressionText(expression) {
  const dialects = expression?.dialects || [];
  return dialects[0]?.expression || "";
}

function sourceCitationText(source) {
  if (!source) return "";
  if (typeof source === "string") return source;
  if (typeof source !== "object") return String(source);
  const parts = [source.type, source.name, source.section, source.version, source.location || source.url || source.document, source.owner]
    .filter(Boolean);
  return parts.join(" · ");
}

function parentOf(id) {
  const n = node(id);
  if (n?.properties?.parent) return n.properties.parent;
  if (raw(id).parent) return raw(id).parent;
  if (id?.startsWith("column.")) {
    const parts = id.split(".");
    if (parts.length >= 4) return `table.${parts[1]}.${parts[2]}`;
  }
  return id;
}

function isChildNode(idOrNode) {
  const n = typeof idOrNode === "string" ? node(idOrNode) : idOrNode;
  return Boolean(n && childTypes.has(n.type));
}

function normalizedEdge(edge, sourceParent = parentOf(edge.source), targetParent = parentOf(edge.target)) {
  const relationshipName = edgeRelationshipName(edge);
  const type = inferredEdgeType(edge, relationshipName);
  const displayName = edgeDisplayName(edge, type, relationshipName);
  return {
    id: edge.id || `${edge.source}|${type}|${edge.target}`,
    type,
    label: edge.label || "",
    displayName,
    relationshipName,
    relationshipPath: relationshipPath(edge),
    source: sourceParent,
    target: targetParent,
    sourceOriginal: edge.source,
    targetOriginal: edge.target,
    description: edge.properties?.description || "",
    sourceField: edge.properties?.source_field || "",
    requirementField: edge.properties?.requirement_field || "",
    expression: edge.properties?.expression || "",
    joinName: edge.properties?.join_name || "",
    multiplicity: edge.properties?.multiplicity || "",
    verbalizes: edge.properties?.verbalizes || [],
    derivedBy: edge.properties?.derived_by || [],
    requires: edge.properties?.requires || [],
    constraints: edge.properties?.constraints || [],
    ai_context: edge.properties?.ai_context || null,
    aiContextText: aiContextSummary(edge.properties?.ai_context),
    isFieldLevel: sourceParent !== edge.source || targetParent !== edge.target,
    raw: edge,
  };
}

function edgeDisplayName(edge, type, relationshipName) {
  if (type === "DATASET_JOIN" && String(edge.label || "").trim()) return edge.label;
  if (String(edge.type || "").trim()) return normalizeType(type);
  return relationshipKindFromId(relationshipName) || relationshipKindFromId(edge.id) || normalizeType(type);
}

function edgeRelationshipName(edge) {
  const props = edge.properties || {};
  return (
    stringRelationshipValue(props.semantic_relationship) ||
    stringRelationshipValue(edge.label) ||
    shortRelationshipName(props.relationship_path) ||
    shortRelationshipName(props.relationship) ||
    (String(edge.type || "").trim() ? normalizeType(edge.type) : "")
  );
}

function inferredEdgeType(edge, relationshipName = edgeRelationshipName(edge)) {
  if (String(edge.type || "").trim()) return normalizeType(edge.type);
  return relationshipKindFromId(relationshipName) || relationshipKindFromId(edge.id) || FALLBACK_BUSINESS_EDGE_TYPE;
}

function relationshipPath(edge) {
  const props = edge.properties || {};
  return (
    stringRelationshipValue(props.relationship_path) ||
    stringRelationshipValue(props.relationship) ||
    stringRelationshipValue(props.semantic_relationship) ||
    stringRelationshipValue(edge.label) ||
    ""
  );
}

function relationshipKindFromId(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  const upper = text.replace(/[^A-Za-z0-9_]+/g, "_").replace(/^_+|_+$/g, "").toUpperCase();
  const parts = upper.split("_").filter(Boolean);
  if (parts.length < 2) return "";
  return parts.slice(0, -1).join("_");
}

function stringRelationshipValue(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  if (Array.isArray(value)) return value.map(stringRelationshipValue).filter(Boolean).join(", ");
  if (typeof value === "object") {
    return (
      stringRelationshipValue(value.semantic_relationship) ||
      stringRelationshipValue(value.relationship) ||
      stringRelationshipValue(value.name)
    );
  }
  return "";
}

function shortRelationshipName(value) {
  const text = stringRelationshipValue(value);
  if (!text) return "";
  const parts = text.split(".");
  return parts[parts.length - 1] || text;
}

function parentEdges() {
  return dedupeEdges(graph.edges
    .filter(edge => !isChildNode(edge.source) && !isChildNode(edge.target))
    .map(edge => normalizedEdge(edge))
    .filter(edge => edge.source !== edge.target && node(edge.source) && node(edge.target)));
}

function childEdges() {
  return dedupeEdges(graph.edges
    .filter(edge => isChildNode(edge.source) || isChildNode(edge.target))
    .map(edge => normalizedEdge(edge))
    .filter(edge => edge.source !== edge.target && node(edge.source) && node(edge.target)));
}

function dedupeEdges(edges) {
  const seen = new Set();
  return edges.filter(edge => {
    const key = `${edge.source}|${edge.target}|${edge.type}|${edge.displayName}|${edge.sourceOriginal}|${edge.targetOriginal}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function searchTextForNode(id) {
  const data = raw(id);
  const n = node(id);
  return [
    id,
    n?.label,
    n?.type,
    n?.properties?.description,
    data.name,
    data.description,
    data.definition,
    data.semantic_metric,
    data.expression,
    ...(data.source_fields || []),
    ...(data.aliases || []),
    ...tagsFor(id),
    ...(data.columns || []).flatMap(col => [col.name, col.description, col.term, col.data_type]),
    ...(data.fields || []).flatMap(field => [field.name, field.description, expressionText(field.expression)]),
    ...(data.required_fields || []).flatMap(field => [field.name, field.semantic_reference, field.value_concept, field.purpose, field.rule]),
    ...(data.field_mappings || []).flatMap(field => [field.name, field.requirement_field, field.description]),
    ...(data.mapped_tables || []),
    ...(data.mapped_fields || []),
    ...((data.relationships || []).flatMap(rel => [rel.name, ...(rel.verbalizes || [])])),
    ...(data.properties || []).flatMap(prop => [prop.name, prop.description, prop.term, prop.semantic_role]),
  ].filter(Boolean).join(" ").toLowerCase();
}

function searchTextForEdge(edge) {
  const normalized = normalizedEdge(edge);
  return [
    edge.id,
    normalized.type,
    normalized.displayName,
    normalized.relationshipPath,
    normalized.description,
    normalized.sourceOriginal,
    normalized.targetOriginal,
    label(normalized.source),
    label(normalized.target),
    nodeType(normalized.source),
    nodeType(normalized.target),
    ...tagsFor(normalized.source),
    ...tagsFor(normalized.target),
  ].filter(Boolean).join(" ").toLowerCase();
}

function edgePassesCatalogFilters(edge) {
  const normalized = normalizedEdge(edge);
  if (isChildLevelEdge(normalized)) return false;
  if (!edgeTypeAllowed(normalized, catalogState)) return false;
  const sourceType = nodeType(normalized.source);
  const targetType = nodeType(normalized.target);
  if (!catalogState.nodeTypes.has(sourceType) && !catalogState.nodeTypes.has(targetType)) return false;
  if (tagFilterIsActive(catalogState.tags)) {
    const edgeTags = [...tagsFor(normalized.source), ...tagsFor(normalized.target)];
    if (![...catalogState.tags].some(tag => edgeTags.includes(tag))) return false;
  }
  if (catalogState.query && !searchTextForEdge(edge).includes(catalogState.query)) return false;
  return true;
}

function nodePassesCatalogFilters(item) {
  if (!catalogState.nodeTypes.has(item.type)) return false;
  if (tagFilterIsActive(catalogState.tags) && ![...catalogState.tags].some(tag => tagsFor(item.id).includes(tag))) return false;
  if (catalogState.query && !searchTextForNode(item.id).includes(catalogState.query)) return false;
  return true;
}

function renderAll() {
  renderStats();
  renderHomePage();
  renderCatalog();
  renderScenarioLibrary();
  if (els.graphPage && !els.graphPage.classList.contains("hidden")) renderGraphPage();
}

function renderStats() {
  els.stats.textContent = `${topLevelNodes.length} catalog nodes · ${graph.edges.length} graph edges`;
}

function normalizeScenarioList(items, kind) {
  return (Array.isArray(items) ? items : [])
    .map((item, index) => {
      if (!item || typeof item !== "object") return null;
      const id = String(item.id || item.name || `${kind}.${index + 1}`).trim();
      const name = String(item.name || id).trim();
      if (!id || !name) return null;
      return {
        ...item,
        id,
        name,
        kind: normalizeScenarioKind(item.kind || item.type, kind),
      };
    })
    .filter(Boolean)
    .sort(compareScenarioRows);
}

function normalizeScenarioKind(value, fallback = "snapshot") {
  const text = String(value || fallback || "snapshot").toLowerCase().replace(/_/g, "-");
  if (text === "preset" || text === "preset-scenario" || text === "scenario-template" || text === "template") return "preset";
  return "snapshot";
}

function compareScenarioRows(a, b) {
  if (a.kind !== b.kind) return a.kind === "preset" ? -1 : 1;
  if (a.kind === "snapshot") return String(b.updatedAt || b.updated_at || "").localeCompare(String(a.updatedAt || a.updated_at || "")) || a.name.localeCompare(b.name);
  return Number(a.order ?? 999) - Number(b.order ?? 999) || a.name.localeCompare(b.name);
}

function scenarioKindLabel(kind, short = false) {
  return normalizeScenarioKind(kind) === "preset" ? (short ? "Template" : "Scenario Template") : (short ? "Snapshot" : "View Snapshot");
}

function scenarioKey(kind, id) {
  return `${normalizeScenarioKind(kind)}:${id}`;
}

function parseScenarioKey(value) {
  const text = String(value || "");
  if (!text) return { kind: "", id: "" };
  const index = text.indexOf(":");
  if (index < 0) return { kind: "snapshot", id: text };
  return { kind: normalizeScenarioKind(text.slice(0, index)), id: text.slice(index + 1) };
}

function allScenarios() {
  return [...scenarioState.presets, ...scenarioState.snapshots].sort(compareScenarioRows);
}

function scenarioByKey(key) {
  const parsed = parseScenarioKey(key);
  if (!parsed.id) return null;
  const list = parsed.kind === "preset" ? scenarioState.presets : scenarioState.snapshots;
  return list.find(item => item.id === parsed.id) || null;
}

function scenarioArray(...values) {
  for (const value of values) {
    if (Array.isArray(value)) return value;
  }
  return null;
}

function scenarioSlug(value) {
  const slugValue = String(value || "scenario")
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/[^a-z0-9_.-]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slugValue || `scenario-${Date.now()}`;
}

function scenarioApiAvailable() {
  return window.location.protocol === "http:" || window.location.protocol === "https:";
}

async function loadServerScenarios() {
  if (!scenarioApiAvailable()) {
    scenarioState.serverAvailable = false;
    scenarioState.serverError = "Open this UI through the local scenario server to save and reload scenario files.";
    renderScenarioControls();
    renderScenarioLibrary();
    return;
  }
  scenarioState.serverLoading = true;
  scenarioState.serverError = "";
  renderScenarioLibrary();
  try {
    const response = await fetch("./api/scenarios", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    scenarioState.presets = normalizeScenarioList(payload.presets, "preset");
    scenarioState.snapshots = normalizeScenarioList(payload.snapshots, "snapshot");
    scenarioState.serverAvailable = true;
    scenarioState.serverError = "";
  } catch (error) {
    scenarioState.serverAvailable = false;
    scenarioState.serverError = "Scenario server is not available at ./api/scenarios. Static templates and snapshots can still be opened, but saving requires the local server.";
  } finally {
    scenarioState.serverLoading = false;
    renderScenarioControls();
    renderScenarioLibrary();
    renderHomePage();
  }
}

function renderHomePage() {
  if (!els.homePage) return;
  if (els.homeScenarioList) {
    els.homeScenarioList.innerHTML = renderHomeScenarioList();
  }
}

function ontologyNodeCount(ontologyId) {
  return topLevelNodes.filter(item => nodeBelongsToOntology(item.id, ontologyId)).length;
}

function semanticModelNodeCount(modelId) {
  const semanticTypes = new Set(["semantic_dataset", "semantic_metric"]);
  return topLevelNodes.filter(item => semanticTypes.has(item.type) && nodeSemanticModels(item.id).includes(modelId)).length;
}

function ontologyDescription(ontologyId) {
  const entry = (summary.source_ontologies || []).find(item => item.name === ontologyId);
  return entry?.description || aiContextSummary(entry?.ai_context) || "Business ontology scope compiled from strict OSI YAML.";
}

function semanticModelDescription(modelId) {
  const datasetCount = topLevelNodes.filter(item => item.type === "semantic_dataset" && nodeSemanticModels(item.id).includes(modelId)).length;
  const metricCount = topLevelNodes.filter(item => item.type === "semantic_metric" && nodeSemanticModels(item.id).includes(modelId)).length;
  const entry = semanticModelInfo(modelId);
  return entry.description || aiContextSummary(entry.ai_context) || `${datasetCount} datasets · ${metricCount} metrics`;
}

function renderHomeEntryCard({ id, title, badge, colorType, description, actionAttr, pillClass = "", secondaryActionLabel = "", secondaryActionAttr = "", secondaryDisabled = false, showBadge = true }) {
  const pillStyle = pillClass ? "" : ` style="background:${colorFor(colorType)}18;color:${colorFor(colorType)}"`;
  const secondaryTitle = secondaryActionLabel ? `${secondaryActionLabel} ${title || id}` : "";
  return `
    <article class="home-card home-entry-card ${secondaryActionLabel ? "has-delete" : ""}" data-home-entry="${escapeAttr(id)}" ${actionAttr} tabindex="0" role="button">
      ${secondaryActionLabel ? `<button class="home-card-delete-button" type="button" ${secondaryActionAttr} ${secondaryDisabled ? "disabled" : ""} aria-label="${escapeAttr(secondaryTitle)}" title="${escapeAttr(secondaryActionLabel)}">&times;</button>` : ""}
      <div class="home-card-main">
        ${showBadge ? `<span class="type-pill ${escapeAttr(pillClass)}"${pillStyle}>${escapeHtml(badge)}</span>` : ""}
        <h4>${bilingualTitleHtml(title || id)}</h4>
        <p>${escapeHtml(description || id)}</p>
      </div>
    </article>
  `;
}

function renderHomeScenarioList() {
  const scenarios = allScenarios();
  if (!scenarios.length) {
    const serverText = scenarioState.serverAvailable
      ? "No scenario templates or view snapshots found."
      : scenarioState.serverError || "Open through the local scenario server to load and save scenario files.";
    return `<div class="empty-state compact">${escapeHtml(serverText)}</div>`;
  }
  return scenarios.map(item => renderHomeEntryCard({
    id: scenarioKey(item.kind, item.id),
    title: item.name,
    badge: scenarioKindLabel(item.kind, true),
    colorType: item.kind === "preset" ? "regulatory_requirement" : "report_implementation",
    description: item.description || scenarioSummaryText(item),
    actionAttr: `data-open-scenario="${escapeAttr(scenarioKey(item.kind, item.id))}" data-open-scenario-page="scenarios"`,
    secondaryActionLabel: "Delete scenario",
    secondaryActionAttr: `data-delete-scenario="${escapeAttr(item.id)}" data-delete-scenario-kind="${escapeAttr(item.kind)}"`,
    secondaryDisabled: !scenarioState.serverAvailable,
    pillClass: item.kind === "preset" ? "preset-pill" : "snapshot-pill",
    showBadge: false,
  })).join("");
}
function scenarioSummaryText(item) {
  const view = item.view || item.filters || {};
  const bits = [];
  if (view.viewMode) bits.push(typeTitle(view.viewMode));
  if (Array.isArray(view.nodeTypes || view.node_types)) bits.push(`${(view.nodeTypes || view.node_types).length} node filters`);
  if (Array.isArray(view.edgeTypes || view.edge_types)) bits.push(`${(view.edgeTypes || view.edge_types).length} edge filters`);
  if (item.updatedAt || item.updated_at) bits.push(`Updated ${String(item.updatedAt || item.updated_at).slice(0, 10)}`);
  return bits.join(" · ") || "Open this scenario in the graph.";
}

function typeTitle(value) {
  return String(value || "").replace(/_/g, " ").replace(/\b\w/g, char => char.toUpperCase());
}

function renderScenarioLibrary() {
  if (!els.scenarioPage) return;
  if (els.presetScenarioList) {
    els.presetScenarioList.innerHTML = scenarioState.presets.length
      ? scenarioState.presets.map(item => scenarioListCard(item)).join("")
      : `<div class="empty-state compact">No scenario templates found.</div>`;
  }
  if (els.savedScenarioList) {
    els.savedScenarioList.innerHTML = scenarioState.snapshots.length
      ? scenarioState.snapshots.map(item => scenarioListCard(item)).join("")
      : `<div class="empty-state compact">No view snapshots yet. Run the local server, open Explorer, then save a snapshot.</div>`;
  }
  renderScenarioDetailPanel();
}

function scenarioListCard(item) {
  const key = scenarioKey(item.kind, item.id);
  const active = scenarioState.selectedKey === key;
  return `
    <button class="scenario-list-card ${active ? "active" : ""}" type="button" data-select-scenario="${escapeAttr(key)}">
      <span class="type-pill ${item.kind === "preset" ? "preset-pill" : "snapshot-pill"}">${scenarioKindLabel(item.kind, true)}</span>
      <strong>${bilingualTitleHtml(item.name)}</strong>
      <small>${escapeHtml(scenarioSummaryText(item))}</small>
    </button>
  `;
}

function renderScenarioDetailPanel() {
  if (!els.scenarioDetailPanel) return;
  const selected = scenarioByKey(scenarioState.selectedKey) || scenarioState.presets[0] || scenarioState.snapshots[0];
  const serverStatus = scenarioState.serverLoading
    ? "Loading scenario files..."
    : scenarioState.serverAvailable
      ? "Local scenario server is active; templates are written to knowledge/scenarios/presets and snapshots to knowledge/scenarios/snapshots."
      : scenarioState.serverError || "Static mode: open through the local scenario server to save templates or snapshots.";
  if (!selected) {
    els.scenarioDetailPanel.innerHTML = `
      <div class="scenario-detail-empty">
        <h3>No scenario selected</h3>
        <p>${escapeHtml(serverStatus)}</p>
      </div>
    `;
    return;
  }
  const view = selected.view || selected.filters || {};
  const nodeFilterText = (view.nodeTypes || view.node_types || []).map(typeName).join(", ") || "Default for selected view";
  const edgeFilterText = (view.edgeTypes || view.edge_types || []).join(", ") || "Default for selected view";
  const center = selected.center_selector || selected.centerSelector || selected.focus || {};
  els.scenarioDetailPanel.innerHTML = `
    <div class="scenario-detail-heading">
      <span class="type-pill ${selected.kind === "preset" ? "preset-pill" : "snapshot-pill"}">${scenarioKindLabel(selected.kind)}</span>
      <h3>${bilingualTitleHtml(selected.name)}</h3>
      <p>${escapeHtml(selected.description || scenarioSummaryText(selected))}</p>
    </div>
    <div class="detail-table compact-table">
      ${kv("View", typeTitle(view.viewMode || selected.viewMode || "Explorer"))}
      ${kv("Center", center.node_id || center.nodeId || center.node_type || center.nodeType || view.focusId || "Chosen at open time")}
      ${kv("Depth", view.maxDepth || view.max_depth || "Default")}
      ${kv("Node Filters", nodeFilterText)}
      ${kv("Edge Filters", edgeFilterText)}
      ${kv("Source File", selected.source_file || selected.sourceFile || "Generated/static data")}
    </div>
    <div class="scenario-detail-actions">
      <button class="primary" type="button" data-open-scenario="${escapeAttr(scenarioKey(selected.kind, selected.id))}">Open in graph</button>
      <button type="button" data-delete-scenario="${escapeAttr(selected.id)}" data-delete-scenario-kind="${escapeAttr(selected.kind)}" ${scenarioState.serverAvailable ? "" : "disabled"}>Delete ${escapeHtml(scenarioKindLabel(selected.kind, true).toLowerCase())}</button>
    </div>
    <p class="filter-help scenario-status">${escapeHtml(serverStatus)}</p>
  `;
}

function renderScenarioControls() {
  if (!els.scenarioSelect) return;
  const selected = scenarioByKey(scenarioState.selectedKey);
  const presetOptions = scenarioState.presets.map(item => `<option value="${escapeAttr(scenarioKey(item.kind, item.id))}">${escapeHtml(item.name)}</option>`).join("");
  const snapshotOptions = scenarioState.snapshots.map(item => `<option value="${escapeAttr(scenarioKey(item.kind, item.id))}">${escapeHtml(item.name)}</option>`).join("");
  els.scenarioSelect.innerHTML = [
    `<option value="">Current graph state</option>`,
    presetOptions ? `<optgroup label="Scenario Template">${presetOptions}</optgroup>` : "",
    snapshotOptions ? `<optgroup label="View Snapshot">${snapshotOptions}</optgroup>` : "",
  ].join("");
  els.scenarioSelect.value = selected ? scenarioKey(selected.kind, selected.id) : "";

  if (els.scenarioCenterSelect) {
    if (selected?.kind === "preset") {
      const mode = scenarioMode(selected);
      const candidates = scenarioCenterCandidates(selected, mode);
      const centerId = scenarioSelectedCenterId(selected, mode);
      els.scenarioCenterSelect.disabled = candidates.length === 0;
      els.scenarioCenterSelect.classList.remove("hidden");
      els.scenarioCenterSelect.innerHTML = candidates.length
        ? candidates.map(item => `<option value="${escapeAttr(item.id)}" ${item.id === centerId ? "selected" : ""}>${escapeHtml(label(item.id))} · ${escapeHtml(typeName(item.type))}</option>`).join("")
        : `<option value="">No matching center nodes</option>`;
      els.scenarioCenterSelect.value = candidates.some(item => item.id === centerId) ? centerId : "";
    } else if (selected?.kind === "snapshot") {
      els.scenarioCenterSelect.disabled = true;
      els.scenarioCenterSelect.classList.remove("hidden");
      const focusId = selected.view?.focusId || "";
      els.scenarioCenterSelect.innerHTML = `<option value="">Snapshot center: ${escapeHtml(focusId ? label(focusId) : "saved graph state")}</option>`;
    } else {
      els.scenarioCenterSelect.disabled = true;
      els.scenarioCenterSelect.classList.add("hidden");
      els.scenarioCenterSelect.innerHTML = `<option value="">Choose a scenario first</option>`;
    }
  }

  const message = selected
    ? ""
    : (scenarioState.serverAvailable
      ? "Use Save scenario to store a reusable template or an exact view snapshot."
      : scenarioState.serverError || "Open through the local scenario server to save templates or snapshots as files.");
  setScenarioHint(message);
}
function collectScenarioPositions() {
  const positions = new Map(graphState.visible.positions || []);
  graphState.manualPositions.forEach((value, id) => positions.set(id, value));
  return [...positions.entries()]
    .filter(([id]) => node(id))
    .map(([id, value]) => [id, { x: Math.round(value.x || 0), y: Math.round(value.y || 0) }]);
}

function currentScenarioView() {
  return {
    viewMode: graphState.viewMode,
    focusId: graphState.focusId,
    selectedNodeId: graphState.selectedNodeId,
    selectedOntology: graphState.selectedOntology,
    selectedSemanticModel: graphState.selectedSemanticModel,
    maxDepth: graphState.maxDepth,
    nodeTypes: [...graphState.nodeTypes],
    businessEdgeTypes: [...graphState.businessEdgeTypes],
    edgeTypes: [...graphState.edgeTypes],
    metricOverlays: [...graphState.metricOverlays],
    tags: [...graphState.tags],
    expanded: [...graphState.expanded],
    autoExpandSuppressed: [...graphState.autoExpandSuppressed],
    hiddenNodes: [...graphState.hiddenNodes],
    selectedEdgeId: graphState.selectedEdgeId,
    selectedFieldId: graphState.selectedFieldId,
    selectedFieldIds: [...graphState.selectedFieldIds],
    positions: collectScenarioPositions(),
    scroll: {
      left: Math.round(els.viewport.scrollLeft || 0),
      top: Math.round(els.viewport.scrollTop || 0),
    },
  };
}

function scenarioSaveKindValue() {
  return els.scenarioModalSaveKind?.value === "snapshot" ? "snapshot" : "template";
}

function currentScenarioTemplate(name, existingPreset = null, now = new Date().toISOString(), descriptionText = "") {
  const centerId = (graphState.focusId && node(graphState.focusId) && !isChildNode(graphState.focusId))
    ? graphState.focusId
    : (graphState.selectedNodeId && node(graphState.selectedNodeId) && !isChildNode(graphState.selectedNodeId) ? graphState.selectedNodeId : focusCandidateForMode(graphState.viewMode));
  const centerType = nodeType(centerId) || "entity_type_concept";
  return {
    id: existingPreset?.id || scenarioSlug(name),
    kind: "preset",
    name,
    order: existingPreset?.order ?? ((scenarioState.presets.length + 1) * 10),
    description: descriptionText || existingPreset?.description || `Reusable graph template for ${typeName(centerType)} centers.`,
    center_selector: {
      node_type: centerType,
    },
    createdAt: existingPreset?.createdAt || existingPreset?.created_at || now,
    updatedAt: now,
    view: {
      viewMode: graphState.viewMode,
      selectedOntology: graphState.selectedOntology || undefined,
      selectedSemanticModel: graphState.selectedSemanticModel || undefined,
      maxDepth: graphState.maxDepth,
      nodeTypes: [...graphState.nodeTypes],
      businessEdgeTypes: [...graphState.businessEdgeTypes],
      edgeTypes: [...graphState.edgeTypes],
      metricOverlays: [...graphState.metricOverlays],
    },
  };
}
function restoreScenarioView(view = {}) {
  const mode = GRAPH_VIEW_CONFIG[view.viewMode] ? view.viewMode : "traceability";
  graphState.viewMode = mode;
  ensureGraphScopeSelection(mode);
  if (view.selectedOntology) graphState.selectedOntology = view.selectedOntology;
  if (view.selectedSemanticModel) graphState.selectedSemanticModel = view.selectedSemanticModel;
  graphState.focusId = node(view.focusId) && !isChildNode(view.focusId) ? view.focusId : focusCandidateForMode(mode);
  graphState.selectedNodeId = node(view.selectedNodeId) && !isChildNode(view.selectedNodeId) ? view.selectedNodeId : graphState.focusId;
  graphState.maxDepth = clamp(Number(view.maxDepth) || graphViewConfig(mode).minDepth || 1, Number(els.depth.min) || 1, Number(els.depth.max) || 4);
  graphState.nodeTypes = restoredSet(view.nodeTypes, [...graphNodeTypeOptions(mode)]);
  graphState.businessEdgeTypes = restoredSet(view.businessEdgeTypes, [...graphBusinessEdgeTypeOptions(mode)]);
  graphState.edgeTypes = restoredEdgeFilterSet(view.edgeTypes, [...defaultEdgeTypesForMode(mode, graphState.focusId)]);
  graphState.metricOverlays = restoredSet(view.metricOverlays, metricOverlayOptions());
  graphState.tags = restoredSet(view.tags, allTags());
  graphState.expanded = new Set((view.expanded || []).filter(id => node(id)));
  graphState.autoExpandSuppressed = new Set((view.autoExpandSuppressed || []).filter(id => node(id)));
  graphState.hiddenNodes = new Set((view.hiddenNodes || []).filter(id => node(id) && !isChildNode(id)));
  graphState.selectedEdgeId = view.selectedEdgeId && graphEdge(view.selectedEdgeId) ? view.selectedEdgeId : null;
  graphState.selectedFieldIds = new Set((view.selectedFieldIds || []).filter(id => node(id) && isChildNode(id)));
  if (view.selectedFieldId && node(view.selectedFieldId) && isChildNode(view.selectedFieldId)) graphState.selectedFieldIds.add(view.selectedFieldId);
  graphState.selectedFieldId = view.selectedFieldId && graphState.selectedFieldIds.has(view.selectedFieldId) ? view.selectedFieldId : null;
  syncSelectedFieldId();
  graphState.manualPositions = restoredPositions(view.positions);
}

function restoredSet(values, allowedValues) {
  if (!Array.isArray(values)) return new Set(allowedValues);
  const allowed = new Set(allowedValues);
  return new Set(values.filter(value => allowed.has(value)));
}

function restoredEdgeFilterSet(values, fallback) {
  if (!Array.isArray(values)) return new Set(fallback);
  const selected = new Set(values);
  const keys = edgeTypes().filter(key => selected.has(key) || selected.has(edgeFilterTypeFromKey(key)));
  return new Set(keys.length ? keys : fallback);
}

function restoredPositions(rows) {
  const positions = new Map();
  (Array.isArray(rows) ? rows : []).forEach(row => {
    const [id, value] = row;
    if (!node(id) || !value) return;
    positions.set(id, { x: Number(value.x) || 0, y: Number(value.y) || 0 });
  });
  return positions;
}

function pageForGraphMode(mode) {
  if (mode === "ontology") return "ontology";
  if (mode === "semantic") return "semantic";
  return "graph";
}

function scenarioMode(scenario) {
  const view = scenario?.view || scenario?.filters || {};
  return GRAPH_VIEW_CONFIG[view.viewMode || scenario?.viewMode] ? (view.viewMode || scenario?.viewMode) : "traceability";
}

function scenarioCenterSelector(scenario) {
  return scenario?.center_selector || scenario?.centerSelector || scenario?.focus || {};
}

function scenarioCenterCandidates(scenario, mode = scenarioMode(scenario)) {
  const view = scenario?.view || scenario?.filters || {};
  const selector = scenarioCenterSelector(scenario);
  const explicit = selector.node_id || selector.nodeId || view.focusId;
  if (explicit && node(explicit) && !isChildNode(explicit)) return [node(explicit)];
  const requestedType = selector.node_type || selector.nodeType || view.centerNodeType || view.center_node_type;
  const requestedName = selector.name || selector.label || "";
  const allowed = nodeTypesForMode(mode);
  let candidates = topLevelNodes.filter(item => allowed.has(item.type) && (!requestedType || item.type === requestedType));
  if (requestedName) candidates = candidates.filter(item => label(item.id) === requestedName || item.id === requestedName);
  return candidates.sort((a, b) => label(a.id).localeCompare(label(b.id)) || a.id.localeCompare(b.id));
}

function scenarioSelectedCenterId(scenario, mode = scenarioMode(scenario)) {
  const key = scenarioKey(scenario.kind, scenario.id);
  const candidates = scenarioCenterCandidates(scenario, mode);
  const remembered = scenarioState.centerByKey.get(key);
  if (remembered && candidates.some(item => item.id === remembered)) return remembered;
  const fallback = candidates[0]?.id || focusCandidateForMode(mode);
  if (fallback) scenarioState.centerByKey.set(key, fallback);
  return fallback;
}

function scenarioFocusCandidate(scenario, mode, preferredCenterId = "") {
  if (preferredCenterId && node(preferredCenterId) && !isChildNode(preferredCenterId)) return preferredCenterId;
  const selectedCenter = scenarioSelectedCenterId(scenario, mode);
  if (selectedCenter && node(selectedCenter) && !isChildNode(selectedCenter)) return selectedCenter;
  return focusCandidateForMode(mode);
}

function applyPresetScenario(scenario, options = {}) {
  const view = scenario.view || scenario.filters || {};
  const mode = GRAPH_VIEW_CONFIG[view.viewMode || scenario.viewMode] ? (view.viewMode || scenario.viewMode) : "traceability";
  applyGraphViewMode(mode, { resetFilters: true });
  if (view.selectedOntology) graphState.selectedOntology = view.selectedOntology;
  if (view.selectedSemanticModel) graphState.selectedSemanticModel = view.selectedSemanticModel;
  if (graphViewUsesFocus(mode)) setGraphFocus(scenarioFocusCandidate(scenario, mode, options.centerId), { resetEdgeTypes: false, applyDefaultEdgeTypes: false });
  const nodeTypeFilters = scenarioArray(view.nodeTypes, view.node_types);
  if (nodeTypeFilters) graphState.nodeTypes = restoredSet(nodeTypeFilters, [...graphNodeTypeOptions(mode)]);
  const businessFilters = scenarioArray(view.businessEdgeTypes, view.business_edge_types);
  if (businessFilters) graphState.businessEdgeTypes = restoredSet(businessFilters, [...graphBusinessEdgeTypeOptions(mode)]);
  const edgeFilters = scenarioArray(view.edgeTypes, view.edge_types);
  if (edgeFilters) graphState.edgeTypes = restoredEdgeFilterSet(edgeFilters, [...defaultEdgeTypesForMode(mode, graphState.focusId)]);
  const metricFilters = scenarioArray(view.metricOverlays, view.metric_overlays, view.metrics);
  if (metricFilters) graphState.metricOverlays = restoredSet(metricFilters, metricOverlayOptions());
  graphState.maxDepth = clamp(Number(view.maxDepth || view.max_depth) || graphViewConfig(mode).minDepth || graphState.maxDepth, Number(els.depth.min) || 1, Number(els.depth.max) || 4);
  graphState.expanded = new Set((view.expanded || []).filter(id => node(id)));
  graphState.autoExpandSuppressed = new Set((view.autoExpandSuppressed || view.auto_expand_suppressed || []).filter(id => node(id)));
  graphState.hiddenNodes = new Set((view.hiddenNodes || view.hidden_nodes || []).filter(id => node(id) && !isChildNode(id)));
  graphState.selectedNodeId = graphViewUsesFocus(mode) ? graphState.focusId : null;
  graphState.selectedEdgeId = null;
  clearSelectedFields();
  graphState.manualPositions = new Map();
  scenarioState.selectedKey = scenarioKey(scenario.kind, scenario.id);
  graphState.showScenarioProfile = true;
  openPage(options.page || pageForGraphMode(mode));
  renderGraphPage({ fitAfter: true });
  setScenarioHint("");
}

function applySnapshotScenario(scenario, options = {}) {
  restoreScenarioView(scenario.view || {});
  scenarioState.selectedKey = scenarioKey(scenario.kind, scenario.id);
  graphState.showScenarioProfile = true;
  openPage(options.page || pageForGraphMode(graphState.viewMode));
  renderGraphPage({ scrollAfter: scenario.view?.scroll });
  setScenarioHint("");
}

function applyScenario(key, options = {}) {
  const scenario = scenarioByKey(key);
  if (!scenario) {
    scenarioState.selectedKey = "";
    renderScenarioControls();
    renderScenarioLibrary();
    return;
  }
  if (scenario.kind === "preset") applyPresetScenario(scenario, options);
  else applySnapshotScenario(scenario, options);
  renderScenarioControls();
  renderScenarioLibrary();
  renderHomePage();
}

function defaultScenarioSaveKind() {
  const selected = scenarioByKey(scenarioState.selectedKey);
  return selected?.kind === "snapshot" ? "snapshot" : "template";
}

function fallbackScenarioName(saveKind = defaultScenarioSaveKind()) {
  const existing = scenarioByKey(scenarioState.selectedKey);
  if (saveKind === "template" && existing?.kind === "preset") return existing.name;
  if (saveKind === "snapshot" && existing?.kind === "snapshot") return existing.name;
  return saveKind === "template"
    ? `${typeName(nodeType(graphState.focusId))} analysis template`
    : `${label(graphState.focusId)} depth ${graphState.maxDepth}`;
}

function fallbackScenarioDescription(saveKind = defaultScenarioSaveKind()) {
  const existing = scenarioByKey(scenarioState.selectedKey);
  if (saveKind === "template" && existing?.kind === "preset") return existing.description || "";
  if (saveKind === "snapshot" && existing?.kind === "snapshot") return existing.description || "";
  return saveKind === "template"
    ? `Reusable graph template for ${typeName(nodeType(graphState.focusId))} centers.`
    : "Saved graph view snapshot.";
}

function renderScenarioSaveModalState() {
  const saveKind = scenarioSaveKindValue();
  if (els.scenarioModalSave) {
    els.scenarioModalSave.textContent = saveKind === "template" ? "Save template" : "Save snapshot";
    els.scenarioModalSave.disabled = !scenarioState.serverAvailable;
  }
  if (els.scenarioModalHint) {
    els.scenarioModalHint.textContent = scenarioState.serverAvailable
      ? (saveKind === "template"
        ? "Scenario Template saves reusable center-node type and filters. It does not save node positions or expanded fields."
        : "View Snapshot saves the exact current graph state, including selected fields, hidden nodes, scroll, and manual positions.")
      : scenarioState.serverError || "Saving requires the local scenario server. Open the http://127.0.0.1 URL served by serve_osi_ui.py.";
  }
}

function openScenarioSaveModal() {
  if (!els.scenarioSaveModal) return;
  const saveKind = defaultScenarioSaveKind();
  if (els.scenarioModalSaveKind) els.scenarioModalSaveKind.value = saveKind;
  if (els.scenarioModalName) els.scenarioModalName.value = fallbackScenarioName(saveKind);
  if (els.scenarioModalDescription) els.scenarioModalDescription.value = fallbackScenarioDescription(saveKind);
  renderScenarioSaveModalState();
  els.scenarioSaveModal.classList.remove("hidden");
  window.setTimeout(() => els.scenarioModalSaveKind?.focus(), 0);
}

function closeScenarioSaveModal() {
  els.scenarioSaveModal?.classList.add("hidden");
}
async function saveCurrentScenario(options = {}) {
  const existing = scenarioByKey(scenarioState.selectedKey);
  const saveKind = options.saveKind === "snapshot" ? "snapshot" : "template";
  const now = new Date().toISOString();
  const name = String(options.name || fallbackScenarioName(saveKind)).trim() || fallbackScenarioName(saveKind);
  const descriptionText = String(options.description ?? fallbackScenarioDescription(saveKind)).trim();
  const requestedId = scenarioSlug(name);
  const existingTemplate = saveKind === "template" && existing?.kind === "preset" && (name === existing.name || requestedId === existing.id) ? existing : null;
  const existingSnapshot = saveKind === "snapshot" && existing?.kind === "snapshot" && (name === existing.name || requestedId === existing.id) ? existing : null;
  const payload = saveKind === "template"
    ? currentScenarioTemplate(name, existingTemplate, now, descriptionText)
    : {
        id: existingSnapshot?.id || requestedId,
        kind: "snapshot",
        name,
        description: descriptionText || existingSnapshot?.description || "Saved graph view snapshot.",
        createdAt: existingSnapshot?.createdAt || existingSnapshot?.created_at || now,
        updatedAt: now,
        view: currentScenarioView(),
      };
  if (!scenarioState.serverAvailable) {
    const message = "Saving requires the local scenario server. Start it from the scenario root and open the http://127.0.0.1 URL.";
    setScenarioHint(message);
    if (els.scenarioModalHint) els.scenarioModalHint.textContent = message;
    return false;
  }
  const endpoint = saveKind === "template" ? "./api/scenarios/presets" : "./api/scenarios/snapshots";
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const saved = await response.json();
    const row = normalizeScenarioList([saved.scenario || saved], saveKind === "template" ? "preset" : "snapshot")[0] || payload;
    let saveMessage = "";
    if (saveKind === "template") {
      scenarioState.presets = [row, ...scenarioState.presets.filter(item => item.id !== row.id)].sort(compareScenarioRows);
      scenarioState.selectedKey = scenarioKey("preset", row.id);
      scenarioState.centerByKey.set(scenarioState.selectedKey, graphState.focusId);
      saveMessage = `Saved scenario template "${row.name}" to ${row.source_file || "knowledge/scenarios/presets"}.`;
    } else {
      scenarioState.snapshots = [row, ...scenarioState.snapshots.filter(item => item.id !== row.id)].sort(compareScenarioRows);
      scenarioState.selectedKey = scenarioKey("snapshot", row.id);
      saveMessage = `Saved view snapshot "${row.name}" to ${row.source_file || "knowledge/scenarios/snapshots"}.`;
    }
    renderScenarioControls();
    renderScenarioLibrary();
    renderHomePage();
    setScenarioHint(saveMessage);
    return true;
  } catch (error) {
    const message = `Could not save ${saveKind === "template" ? "scenario template" : "view snapshot"}: ${error.message}`;
    setScenarioHint(message);
    if (els.scenarioModalHint) els.scenarioModalHint.textContent = message;
    return false;
  }
}

async function deleteSelectedScenario() {
  const selected = scenarioByKey(scenarioState.selectedKey);
  if (!selected) return;
  if (!scenarioState.serverAvailable) {
    setScenarioHint(`Deleting ${scenarioKindLabel(selected.kind).toLowerCase()} files requires the local scenario server.`);
    return;
  }
  const collection = selected.kind === "preset" ? "presets" : "snapshots";
  try {
    const response = await fetch(`./api/scenarios/${collection}/${encodeURIComponent(selected.id)}`, { method: "DELETE" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    if (selected.kind === "preset") scenarioState.presets = scenarioState.presets.filter(item => item.id !== selected.id);
    else scenarioState.snapshots = scenarioState.snapshots.filter(item => item.id !== selected.id);
    scenarioState.selectedKey = "";
    renderScenarioControls();
    renderScenarioLibrary();
    renderHomePage();
    setScenarioHint(`Deleted ${scenarioKindLabel(selected.kind).toLowerCase()} "${selected.name}".`);
  } catch (error) {
    setScenarioHint(`Could not delete ${scenarioKindLabel(selected.kind).toLowerCase()}: ${error.message}`);
  }
}
function setScenarioHint(message) {
  if (!els.scenarioHint) return;
  els.scenarioHint.textContent = message || "";
  els.scenarioHint.classList.toggle("hidden", !message);
}
function renderCatalog() {
  renderCatalogFilters();
  const nodeRows = topLevelNodes
    .filter(nodePassesCatalogFilters)
    .sort((a, b) => scoreNode(b, catalogState.query) - scoreNode(a, catalogState.query) || typeRank(a.type) - typeRank(b.type) || a.label.localeCompare(b.label));
  const edgeRows = graph.edges
    .filter(edgePassesCatalogFilters)
    .sort((a, b) => inferredEdgeType(a).localeCompare(inferredEdgeType(b)) || a.source.localeCompare(b.source));

  els.catalogSummary.textContent = `${nodeRows.length} nodes and ${edgeRows.length} edges match the current filters.`;
  els.nodeResults.innerHTML = nodeRows.length
    ? nodeRows.map(renderNodeResult).join("")
    : `<div class="empty-state">No nodes match the current filters.</div>`;
  els.edgeResults.innerHTML = edgeRows.length
    ? edgeRows.slice(0, 160).map(renderEdgeResult).join("")
    : `<div class="empty-state">No edges match the current filters.</div>`;
  renderCatalogDetail();
}

function renderCatalogFilters() {
  els.catalogNodeTypes.innerHTML = nodeTypes()
    .map(type => chip(typeName(type), catalogState.nodeTypes.has(type), "catalog-node-type", type))
    .join("");
  const catalogBusinessOptions = businessEdgeTypes();
  const catalogRouteItems = edgeRouteItems(
    catalogBusinessOptions,
    catalogState.businessEdgeTypes,
    "catalog-business-edge-type",
    edgeTypes(),
    catalogState.edgeTypes,
    "catalog-edge-type"
  );
  if (els.catalogBusinessEdgeTypes) {
    els.catalogBusinessEdgeTypes.innerHTML = catalogRouteItems.length
      ? renderEdgeRouteItems(catalogRouteItems)
      : `<div class="empty-state">No node-level edge filters in current data.</div>`;
  }
  if (els.catalogEdgeTypes) {
    els.catalogEdgeTypes.innerHTML = catalogBusinessOptions.length
      ? `<div class="filter-subtitle">Business Relationship</div>${multiSelect(catalogBusinessOptions, catalogState.businessEdgeTypes, "catalog-business-edge-type", "Business relationships")}`
      : "";
  }
  if (els.catalogTags) {
    const tags = allTags();
    els.catalogTags.innerHTML = tags.length
      ? multiSelect(tags, catalogState.tags, "catalog-tag", "Data type")
      : `<div class="empty-state">No data types in current data.</div>`;
  }
}

function renderNodeResult(item) {
  return `
    <div class="result-item ${catalogState.selectedKind === "node" && catalogState.selectedId === item.id ? "selected" : ""}" data-catalog-node="${escapeAttr(item.id)}">
      <div class="result-row">
        <span class="result-dot" style="background:${colorFor(item.type)}"></span>
        <div>
          <div class="result-name">${escapeHtml(item.label)}</div>
          <div class="result-meta">${escapeHtml(typeName(item.type))} · ${escapeHtml(item.id)}</div>
        </div>
      </div>
      <button class="inline-action" data-open-graph-node="${escapeAttr(item.id)}" type="button">Graph</button>
    </div>
  `;
}

function renderEdgeResult(edge) {
  const normalized = normalizedEdge(edge);
  const selected = catalogState.selectedKind === "edge" && catalogState.selectedId === edge.id;
  return `
    <div class="edge-item ${selected ? "selected" : ""}" data-catalog-edge="${escapeAttr(edge.id)}">
      <div class="edge-line">
        <strong>${escapeHtml(label(normalized.source))}</strong>
        <span class="edge-pill" title="${escapeAttr(normalized.type)}">${escapeHtml(normalized.displayName)}</span>
        <strong>${escapeHtml(label(normalized.target))}</strong>
      </div>
      <div class="edge-meta">${escapeHtml(normalized.type)} · ${escapeHtml(normalized.sourceOriginal)} -> ${escapeHtml(normalized.targetOriginal)}</div>
      ${normalized.description ? `<div class="edge-meta">${escapeHtml(normalized.description)}</div>` : ""}
      <button class="inline-action" data-open-graph-edge="${escapeAttr(edge.id)}" type="button">Graph</button>
    </div>
  `;
}

function scoreNode(item, query) {
  if (!query) return 0;
  const name = String(item.label || "").toLowerCase();
  const id = item.id.toLowerCase();
  if (name === query || id === query) return 100;
  if (name.startsWith(query)) return 80;
  if (id.includes(query)) return 50;
  if (searchTextForNode(item.id).includes(query)) return 20;
  return 0;
}

function renderCatalogDetail() {
  const isEdge = catalogState.selectedKind === "edge";
  const id = catalogState.selectedId;
  const selectedNode = isEdge ? null : node(id);
  const selectedEdge = isEdge ? graphEdge(id) : null;

  if (!selectedNode && !selectedEdge) {
    els.catalogDetailBadge.textContent = "Nothing selected";
    els.catalogDetailTitle.textContent = "Select a result";
    els.catalogDetailDescription.textContent = "The raw YAML-derived catalog record or graph edge will appear here.";
    els.catalogDetailBody.innerHTML = "";
    els.openGraph.disabled = true;
    return;
  }

  els.openGraph.disabled = false;
  if (selectedEdge) {
    const normalized = normalizedEdge(selectedEdge);
    els.catalogDetailBadge.textContent = "Edge";
    els.catalogDetailBadge.style.background = "#eef2f7";
    els.catalogDetailBadge.style.color = "#475467";
    els.catalogDetailTitle.textContent = normalized.displayName;
    els.catalogDetailDescription.textContent = normalized.description || "No edge description.";
    els.catalogDetailBody.innerHTML = renderEdgeDetail(normalized);
    return;
  }

  const data = raw(selectedNode.id);
  els.catalogDetailBadge.textContent = "Profile";
  els.catalogDetailBadge.style.background = `${colorFor(selectedNode.type)}18`;
  els.catalogDetailBadge.style.color = colorFor(selectedNode.type);
  setBilingualTitle(els.catalogDetailTitle, selectedNode.label);
  els.catalogDetailDescription.textContent = "";
  els.catalogDetailBody.innerHTML = renderNodeDetail(selectedNode, data, true);
}

function renderEdgeDetail(edge) {
  const rawEdge = edge.raw || {};
  const verbalizes = Array.isArray(edge.verbalizes) ? edge.verbalizes : [];
  const derivedBy = Array.isArray(edge.derivedBy) ? edge.derivedBy : [];
  const requires = Array.isArray(edge.requires) ? edge.requires : [];
  return `
    <section class="detail-section">
      <h3>Relationship</h3>
      ${kv("Relationship Name", edge.relationshipName)}
      ${!isEntityBusinessEdge(edge) && relationshipKindFromId(edge.relationshipName) ? kv("Action", relationshipKindFromId(edge.relationshipName)) : ""}
      ${edge.relationshipPath && edge.relationshipPath !== edge.relationshipName ? kv("Ontology Path", edge.relationshipPath) : ""}
      ${edge.joinName && edge.joinName !== edge.relationshipName ? kv("Join Name", edge.joinName) : ""}
      ${isEntityBusinessEdge(edge) ? "" : kv("Edge Type", edge.type)}
      ${kv("Source", `${label(edge.source)} (${edge.sourceOriginal})`)}
      ${kv("Target", `${label(edge.target)} (${edge.targetOriginal})`)}
      ${edge.multiplicity ? kv("Multiplicity", edge.multiplicity) : ""}
      ${edge.sourceField ? kv("Source Field", edge.sourceField) : ""}
      ${edge.requirementField ? kv("Requirement Field", edge.requirementField) : ""}
      ${edge.expression ? kv("Expression", edge.expression) : ""}
      ${edge.description ? kv("description", edge.description) : ""}
      ${aiContextRow(edge.ai_context)}
      ${edge.raw?.properties?.custom_extensions ? compactJsonRow("custom_extensions", edge.raw.properties.custom_extensions) : ""}
    </section>
    ${verbalizes.length ? `
      <section class="detail-section">
        <h3>Verbalizes</h3>
        <div class="mini-list">${verbalizes.map(item => `<div class="mini-card"><strong>${escapeHtml(item)}</strong></div>`).join("")}</div>
      </section>
    ` : ""}
    ${derivedBy.length ? `
      <section class="detail-section">
        <h3>Derived By</h3>
        <pre class="raw-block">${escapeHtml(JSON.stringify(derivedBy, null, 2))}</pre>
      </section>
    ` : ""}
    ${requires.length ? `
      <section class="detail-section">
        <h3>Requires</h3>
        <pre class="raw-block">${escapeHtml(JSON.stringify(requires, null, 2))}</pre>
      </section>
    ` : ""}
    ${renderConstraints(edge.constraints, "Relationship Constraints")}
    ${rawYamlSection(rawYamlEdgePayload(edge))}
  `;
}

function renderNodeDetail(item, data, includeRaw) {
  const children = childItems(item.id);
  const relationships = parentEdges()
    .filter(edge => edge.source === item.id || edge.target === item.id)
    .slice(0, 100);
  return `
    <section class="detail-section">
      <h3>Overview</h3>
      ${description(item.id) ? kv("Description", description(item.id)) : ""}
      ${(data.ai_context !== undefined || item.properties?.ai_context !== undefined) ? (aiContextRow(data.ai_context || item.properties?.ai_context) || compactJsonRow("ai_context", data.ai_context || item.properties?.ai_context)) : ""}
      ${data.term ? kv("Term", data.term) : ""}
      ${data.definition ? kv("Definition", data.definition) : ""}
      ${data.schema ? kv("Schema", data.schema) : ""}
      ${data.source ? compactJsonRow("source", data.source) : ""}
      ${data.primary_key !== undefined ? compactJsonRow("primary_key", data.primary_key) : ""}
      ${data.unique_keys !== undefined ? compactJsonRow("unique_keys", data.unique_keys) : ""}
      ${data.physical_kind ? kv("physical_kind", data.physical_kind) : ""}
      ${data.source_tables?.length ? kv("source_tables", data.source_tables.join(", ")) : ""}
      ${data.field_count !== undefined ? kv("field_count", data.field_count) : ""}
      ${data.verified ? kv("Verified", [data.verified.status ? "true" : "false", data.verified.reason].filter(Boolean).join(" · ")) : ""}
      ${item.properties?.source_file ? kv("Source", item.properties.source_file) : ""}
      ${tagsFor(item.id).length ? `<div class="tag-list">${tagsFor(item.id).map(tag => `<span class="tag-pill">${escapeHtml(tag)}</span>`).join("")}</div>` : ""}
    </section>
    ${renderConceptSemantics(item, data)}
    ${renderMappingSemantics(data)}
    ${renderSourceExtensions(data)}
    ${renderMetricSemantics(item, data)}
    ${customExtensionsSection(data.custom_extensions || item.properties?.custom_extensions)}
    ${renderRequirementSemantics(data)}
    ${renderImplementationSemantics(data)}
    ${renderConstraints(data.constraints || item.properties?.constraints, "Entity Constraints")}
    <section class="detail-section">
      <h3>Fields / Properties</h3>
      ${children.length ? renderFieldTable(children) : `<div class="empty-state">No generated fields or properties.</div>`}
    </section>
    <section class="detail-section">
      <h3>Direct Relationships</h3>
      ${relationships.length ? `<div class="mini-list">${relationships.map(edge => renderMiniEdgeCard(edge, item.id)).join("")}</div>` : `<div class="empty-state">No direct node-level relationships.</div>`}
    </section>
    ${rawYamlSection(rawYamlNodePayload(item, data))}
  `;
}

function renderSourceExtensions(data) {
  const fields = data.fields || [];
  if (!fields.length) return "";
  return `
    <section class="detail-section">
      <h3>Dataset Fields</h3>
      ${kv("fields", fields.length)}
    </section>
  `;
}
function renderMetricSemantics(item, data) {
  if (item.type !== "semantic_metric") return "";
  const sourceFields = data.source_fields || item.properties?.source_fields || [];
  const expression = data.expression || item.properties?.expression || "";
  const metricName = data.semantic_metric || item.properties?.semantic_metric || data.name || item.label;
  return `
    <section class="detail-section">
      <h3>Metric Definition</h3>
      ${metricName ? kv("Metric", metricName) : ""}
      ${data.semantic_model || item.properties?.semantic_model ? kv("Semantic Model", data.semantic_model || item.properties.semantic_model) : ""}
      ${expression ? kv("expression", expression) : ""}
      ${sourceFields.length ? kv("source_fields", sourceFields.join(", ")) : ""}
      ${data.ai_context || item.properties?.ai_context ? compactJsonRow("ai_context", data.ai_context || item.properties.ai_context) : ""}
      ${data.custom_extensions || item.properties?.custom_extensions ? compactJsonRow("custom_extensions", data.custom_extensions || item.properties.custom_extensions) : ""}
    </section>
  `;
}
function renderRequirementSemantics(data) {
  if (data.type !== "regulatory_requirement") return "";
  const scope = data.semantic_scope || {};
  const requiredFields = data.required_fields || [];
  const relationships = scope.relationships || [];
  return `
    <section class="detail-section">
      <h3>Requirement Scope</h3>
      ${data.source ? kv("Source", sourceCitationText(data.source)) : ""}
      ${data.SLA ? kv("SLA", data.SLA) : ""}
      ${scope.concepts?.length ? kv("Concepts", scope.concepts.join(", ")) : ""}
    </section>
    ${relationships.length ? `
      <section class="detail-section">
        <h3>Required Relationships</h3>
        <div class="mini-list">${relationships.map(rel => `
          <div class="mini-card">
            <span class="edge-pill">${escapeHtml(rel.relationship || "relationship")}</span>
            <strong>${escapeHtml([rel.source, rel.relationship, rel.target].filter(Boolean).join(" -> "))}</strong>
            ${rel.purpose ? `<p>${escapeHtml(rel.purpose)}</p>` : ""}
          </div>
        `).join("")}</div>
      </section>
    ` : ""}
    ${requiredFields.length ? `
      <section class="detail-section">
        <h3>Required Semantic Data</h3>
        <div class="mini-list">${requiredFields.map(field => `
          <div class="mini-card">
            <strong>${bilingualTitleHtml(field.semantic_reference || field.name)}</strong>
            <small>${escapeHtml([field.value_concept, field.required ? "required" : ""].filter(Boolean).join(" · "))}</small>
            ${field.description ? `<p>${escapeHtml(field.description)}</p>` : ""}
            ${field.purpose && field.purpose !== field.description ? `<small>${escapeHtml(field.purpose)}</small>` : ""}
          </div>
        `).join("")}</div>
      </section>
    ` : ""}
    ${data.calculations?.length ? `
      <section class="detail-section">
        <h3>Calculations</h3>
        <pre class="raw-block">${escapeHtml(JSON.stringify(data.calculations, null, 2))}</pre>
      </section>
    ` : ""}
    ${data.controls?.length ? `
      <section class="detail-section">
        <h3>Controls</h3>
        <pre class="raw-block">${escapeHtml(JSON.stringify(data.controls, null, 2))}</pre>
      </section>
    ` : ""}
  `;
}

function renderImplementationSemantics(data) {
  if (data.type !== "report_implementation") return "";
  const fieldMappings = data.field_mappings || [];
  return `
    <section class="detail-section">
      <h3>Implementation</h3>
      ${data.implements ? kv("Implements", data.implements) : ""}
    </section>
    ${fieldMappings.length ? `
      <section class="detail-section">
        <h3>Field Mappings</h3>
        <div class="mini-list">${fieldMappings.map(field => `
          <div class="mini-card">
            <strong>${bilingualTitleHtml(field.name || field.requirement_field || "Field mapping")}</strong>
            ${field.requirement_field ? `<small>${escapeHtml(`requirement: ${field.requirement_field}`)}</small>` : ""}
            ${field.description ? `<p>${escapeHtml(field.description)}</p>` : ""}
          </div>
        `).join("")}</div>
      </section>
    ` : ""}
  `;
}

function renderConceptSemantics(item, data) {
  const concept = data.concept || {};
  const identifyBy = concept.identify_by || item.properties?.identify_by || [];
  const extendsList = concept.extends || item.properties?.extends || [];
  const derivedBy = concept.derived_by || item.properties?.derived_by || [];
  const requires = concept.requires || item.properties?.requires || [];
  if (!identifyBy.length && !extendsList.length && !derivedBy.length && !requires.length) return "";
  return `
    <section class="detail-section">
      <h3>Concept Semantics</h3>
      ${identifyBy.length ? kv("identify_by", identifyBy.join(", ")) : ""}
      ${extendsList.length ? kv("extends", extendsList.join(", ")) : ""}
      ${derivedBy.length ? compactJsonRow("derived_by", derivedBy) : ""}
      ${requires.length ? compactJsonRow("requires", requires) : ""}
    </section>
  `;
}

function renderMappingSemantics(data) {
  const mappedTables = data.mapped_datasets || data.mapped_tables || [];
  const mappedFields = data.mapped_fields || [];
  const mappings = data.mappings || [];
  if (!mappedTables.length && !mappedFields.length && !mappings.length) return "";
  return `
    <section class="detail-section">
      <h3>Ontology Mapping</h3>
      ${mappedTables.length ? kv("Mapped Datasets", mappedTables.join(", ")) : ""}
      ${mappedFields.length ? `
        <div class="mini-list">${mappedFields.slice(0, 12).map(item => `<div class="mini-card"><strong>${escapeHtml(item)}</strong></div>`).join("")}</div>
      ` : ""}
      ${mappedFields.length > 12 ? `<div class="empty-state compact">${mappedFields.length - 12} more mapped fields.</div>` : ""}
      ${mappings.length ? `<pre class="raw-block">${escapeHtml(JSON.stringify(mappings.slice(0, 8), null, 2))}</pre>` : ""}
    </section>
  `;
}

function renderMiniEdgeCard(edge, baseId = graphState.focusId) {
  const other = edge.source === baseId ? edge.target : edge.source;
  return `
    <div class="mini-card" data-related-node="${escapeAttr(other)}" data-mini-edge="${escapeAttr(edge.id)}">
      <span class="edge-pill" title="${escapeAttr(edge.type)}">${escapeHtml(edge.displayName)}</span>
      <strong>${escapeHtml(label(other))}</strong>
      <small>${escapeHtml(typeName(nodeType(other)))} · ${escapeHtml(other)}</small>
      ${edge.description ? `<p>${escapeHtml(edge.description)}</p>` : ""}
    </div>
  `;
}

function clearGraphSelectionToViewProfile() {
  graphState.selectedEdgeId = null;
  clearSelectedFields();
  if (appState.currentPage === "scenarios") {
    graphState.selectedNodeId = null;
    graphState.showScenarioProfile = true;
  } else if (!graphViewUsesFocus()) {
    graphState.selectedNodeId = null;
    graphState.showScenarioProfile = false;
  } else {
    graphState.selectedNodeId = graphState.focusId;
    graphState.showScenarioProfile = false;
  }
  renderGraphPage();
}
function renderGraphPage(options = {}) {
  if (graphViewUsesFocus()) {
    if (!graphState.focusId || !node(graphState.focusId)) graphState.focusId = focusCandidateForMode(graphState.viewMode);
    if (graphState.selectedNodeId && (!node(graphState.selectedNodeId) || isChildNode(graphState.selectedNodeId))) graphState.selectedNodeId = graphViewUsesFocus() ? graphState.focusId : null;
    ensureVisibleFocus();
  } else if (graphState.selectedNodeId && (!node(graphState.selectedNodeId) || isChildNode(graphState.selectedNodeId))) {
    graphState.selectedNodeId = null;
  }
  clearHiddenSelections();
  expandSelectedMetricValueParents();
  graphState.visible = graphNeighborhood();
  if (graphViewConfig().autoExpandFields) expandVisibleViewNodes();
  renderScenarioControls();
  renderScenarioSaveButton();
  renderGraphFilters();
  renderGraphFocus();
  renderHiddenNodes();
  renderGraph(options);
  renderGraphDetail();
}

function renderScenarioSaveButton() {
  if (!els.openScenarioSave) return;
  const visible = appState.currentPage === "graph" || appState.currentPage === "scenarios";
  els.openScenarioSave.classList.toggle("hidden", !visible);
}
function expandVisibleViewNodes() {
  graphState.visible.nodes.forEach(item => {
    if (childItems(item.id).length && !graphState.autoExpandSuppressed.has(item.id)) graphState.expanded.add(item.id);
  });
}

function expandSelectedMetricValueParents() {
  if (!["semantic", "traceability"].includes(graphState.viewMode) || !graphState.metricOverlays.size) return;
  const parentTypes = new Set(["semantic_dataset", "entity_type_concept", "base_entity_concept"]);
  [...selectedMetricValueEdges(), ...selectedMetricDependencyEdges()].forEach(edge => {
    [edge.sourceOriginal, edge.targetOriginal].forEach(id => {
      const parentId = parentOf(id);
      if (parentId && node(parentId) && parentTypes.has(nodeType(parentId)) && !graphState.autoExpandSuppressed.has(parentId)) {
        graphState.expanded.add(parentId);
      }
    });
  });
}
function renderGraphFilters() {
  placeScenarioControls();
  const controls = graphControlSet();
  if (els.graphFocusSection) els.graphFocusSection.classList.toggle("hidden", !controls.has("focus"));
  if (els.graphDepthSection) els.graphDepthSection.classList.toggle("hidden", !controls.has("depth"));
  if (els.graphHiddenSection) els.graphHiddenSection.classList.toggle("hidden", !controls.has("hidden"));
  if (els.graphNodeTypeSection) els.graphNodeTypeSection.classList.toggle("hidden", !controls.has("nodeTypes"));
  if (els.graphMetricSection) els.graphMetricSection.classList.toggle("hidden", !controls.has("metrics") || !metricOverlayOptions().length);
  if (els.graphEdgeTypeSection) els.graphEdgeTypeSection.classList.toggle("hidden", !controls.has("edgeTypes") && !controls.has("businessEdges"));
  if (els.graphScenarioSection) els.graphScenarioSection.classList.toggle("hidden", !controls.has("scenario"));
  renderGraphViewSelector();
  els.depth.value = String(graphState.maxDepth);
  els.depthValue.textContent = String(graphState.maxDepth);
  const nodeOptions = graphNodeTypeOptions();
  els.graphNodeTypes.innerHTML = nodeOptions.length
    ? nodeOptions.map(type => chip(typeName(type), graphState.nodeTypes.has(type), "graph-node-type", type)).join("")
    : `<div class="empty-state">No node type filter for this view.</div>`;
  if (els.graphMetrics) {
    const metricOptions = controls.has("metrics") ? metricOverlayOptions() : [];
    els.graphMetrics.innerHTML = metricOptions.length
      ? multiSelect(metricOptions, graphState.metricOverlays, "graph-metric-overlay", "Metrics")
      : `<div class="empty-state compact">No semantic metrics in current data.</div>`;
  }
  const graphBusinessOptions = controls.has("businessEdges") ? graphBusinessEdgeTypeOptions() : [];
  const graphRouteItems = edgeRouteItems(
    graphBusinessOptions,
    graphState.businessEdgeTypes,
    "graph-business-edge-type",
    controls.has("edgeTypes") ? graphEdgeTypeOptions() : [],
    graphState.edgeTypes,
    "graph-edge-type"
  );
  if (els.graphBusinessEdgeTypes) {
    els.graphBusinessEdgeTypes.innerHTML = graphRouteItems.length
      ? renderEdgeRouteItems(graphRouteItems)
      : `<div class="empty-state">No node-level edge filters for this view.</div>`;
  }
  if (els.graphEdgeTypes) {
    els.graphEdgeTypes.innerHTML = graphBusinessOptions.length
      ? `<div class="filter-subtitle">Business Relationship</div>${multiSelect(graphBusinessOptions, graphState.businessEdgeTypes, "graph-business-edge-type", "Business relationships")}`
      : "";
  }
  if (els.graphTags) {
    const tags = allTags();
    els.graphTags.innerHTML = tags.length
      ? multiSelect(tags, graphState.tags, "graph-tag", "Data type")
      : `<div class="empty-state">No data types in current data.</div>`;
  }
}

function placeScenarioControls() {
  if (!els.graphScenarioSection) return;
  const useTopScenario = appState.currentPage === "scenarios";
  const targetHost = useTopScenario ? els.graphScenarioTopHost : els.graphScenarioSidebarHost;
  if (targetHost && els.graphScenarioSection.parentElement !== targetHost) {
    targetHost.appendChild(els.graphScenarioSection);
  }
  if (els.graphScenarioTopHost) els.graphScenarioTopHost.classList.toggle("hidden", !useTopScenario);
  els.graphScenarioSection.classList.toggle("scenario-section-top", useTopScenario);
}

function renderSelectorOptions(select, options, currentValue) {
  select.innerHTML = options
    .map(item => `<option value="${escapeAttr(item.id)}" ${item.id === currentValue ? "selected" : ""}>${escapeHtml(item.label || optionLabel(item.id))}</option>`)
    .join("");
}

function renderGraphViewSelector() {
  if (!els.graphViewSelectorSection || !els.graphViewSelector) return;
  const kind = graphViewSelectorKind();
  const options = graphViewSelectorOptions();
  const visible = graphControlSet().has("selector") && Boolean(kind && options.length);
  const useToolbarSelector = visible && (kind === "ontology" || kind === "semantic_model");

  if (els.graphScopeSelectorHost && els.graphScopeSelector) {
    els.graphScopeSelectorHost.classList.toggle("hidden", !useToolbarSelector);
    if (useToolbarSelector) {
      els.graphScopeSelectorLabel.textContent = graphViewSelectorTitle();
      renderSelectorOptions(els.graphScopeSelector, options, currentGraphSelectorValue());
    } else {
      els.graphScopeSelector.innerHTML = "";
    }
  }

  els.graphViewSelectorSection.classList.toggle("hidden", !visible || useToolbarSelector);
  if (!visible || useToolbarSelector) {
    els.graphViewSelector.innerHTML = "";
    return;
  }
  els.graphViewSelectorTitle.textContent = graphViewSelectorTitle();
  renderSelectorOptions(els.graphViewSelector, options, currentGraphSelectorValue());
}
function setTitleAreaMode(mode = "default") {
  const titleArea = els.focusTitle?.closest(".graph-title-area");
  titleArea?.classList.toggle("model-scope-title", mode === "model");
  titleArea?.classList.toggle("scenario-scope-title", mode === "scenario");
  els.graphToolbar?.classList.toggle("scenario-toolbar", mode === "scenario");
  els.focusTitle?.classList.toggle("hidden", mode === "model" || mode === "scenario");
}

function setCompactScopeHeader(enabled) {
  setTitleAreaMode(enabled ? "model" : "default");
}

function setScenarioScopeHeader(enabled) {
  setTitleAreaMode(enabled ? "scenario" : "default");
}

function focusSearchOptions() {
  return topLevelNodes
    .filter(item => nodeAllowedForMode(item.id, graphState.viewMode))
    .sort((a, b) => typeRank(a.type) - typeRank(b.type) || label(a.id).localeCompare(label(b.id)))
    .map(item => ({ id: item.id, text: `${label(item.id)} · ${typeName(item.type)} · ${item.id}` }));
}

function renderGraphFocusSearch() {
  if (!els.graphFocusInput) return;
  const options = focusSearchOptions();
  const current = options.find(item => item.id === graphState.focusId);
  if (document.activeElement !== els.graphFocusInput) {
    els.graphFocusInput.value = current?.text || "";
    renderGraphFocusResults("", false);
  }
}

function renderGraphFocusResults(query = els.graphFocusInput?.value || "", forceOpen = false) {
  if (!els.graphFocusResults) return;
  const text = String(query || "").trim().toLowerCase();
  const currentText = focusSearchOptions().find(item => item.id === graphState.focusId)?.text || "";
  const shouldShowAll = forceOpen && (!text || text === currentText.toLowerCase());
  const matches = focusSearchOptions()
    .filter(item => shouldShowAll || !text || item.text.toLowerCase().includes(text) || item.id.toLowerCase().includes(text))
    .slice(0, 24);
  if (!forceOpen && !text) {
    els.graphFocusResults.classList.add("hidden");
    els.graphFocusResults.innerHTML = "";
    return;
  }
  els.graphFocusResults.innerHTML = matches.length
    ? matches.map(item => `
      <button class="focus-search-option" type="button" data-focus-node="${escapeAttr(item.id)}">
        <strong>${bilingualTitleHtml(label(item.id))}</strong>
        <small>${escapeHtml(typeName(nodeType(item.id)))} · ${escapeHtml(item.id)}</small>
      </button>
    `).join("")
    : `<div class="focus-search-empty">No matching nodes.</div>`;
  els.graphFocusResults.classList.remove("hidden");
}

function hideGraphFocusResults() {
  if (!els.graphFocusResults) return;
  els.graphFocusResults.classList.add("hidden");
}

function applyGraphFocusSearchValue(value) {
  const text = String(value || "").trim();
  if (!text) return;
  const options = focusSearchOptions();
  const match = options.find(item => item.text === text || item.id === text)
    || options.find(item => item.text.toLowerCase().includes(text.toLowerCase()) || item.id.toLowerCase().includes(text.toLowerCase()));
  if (!match || !node(match.id)) {
    renderGraphFocusResults(text, true);
    return;
  }
  setGraphFocus(match.id, { resetEdgeTypes: true });
  graphState.selectedNodeId = match.id;
  graphState.selectedEdgeId = null;
  clearSelectedFields();
  graphState.showScenarioProfile = false;
  hideGraphFocusResults();
  renderGraphPage({ fitAfter: true });
}

function renderGraphFocus() {
  if (appState.currentPage === "scenarios") {
    if (els.graphFocusInput) els.graphFocusInput.value = "";
    hideGraphFocusResults();
    setScenarioScopeHeader(true);
    const selected = scenarioByKey(scenarioState.selectedKey) || allScenarios()[0];
    els.focusType.textContent = "Scenario";
    els.focusType.style.background = "#eef2f7";
    els.focusType.style.color = "#475467";
    setBilingualTitle(els.focusTitle, selected?.name || "Scenario");
    els.focusDescription.textContent = selected?.description || "Choose a scenario template or view snapshot, then select the center node to render the graph.";
    els.expandSelected.textContent = allVisibleFieldNodesExpanded() ? "Hide all fields" : "Show all fields";
    if (graphState.focusId && node(graphState.focusId)) {
      els.graphFocusCard.innerHTML = `
        <strong>${bilingualTitleHtml(label(graphState.focusId))}</strong>
        <small>${escapeHtml(typeName(nodeType(graphState.focusId)))} · ${escapeHtml(graphState.focusId)}</small>
      `;
    }
    return;
  }
  if (!graphViewUsesFocus()) {
    if (els.graphFocusInput) els.graphFocusInput.value = "";
    hideGraphFocusResults();
    const scopeInfo = currentGraphScopeInfo();
    setCompactScopeHeader(true);
    els.focusType.textContent = graphViewTitle();
    els.focusType.style.background = "#eef2f7";
    els.focusType.style.color = "#475467";
    setBilingualTitle(els.focusTitle, scopeInfo?.displayName || graphViewTitle());
    els.focusDescription.textContent = scopeHeaderText(scopeInfo) || graphViewDescription();
    els.expandSelected.textContent = allVisibleFieldNodesExpanded() ? "Hide all fields" : "Show all fields";
    return;
  }
  setCompactScopeHeader(false);
  const focus = node(graphState.focusId);
  els.graphFocusCard.innerHTML = `
    <strong>${bilingualTitleHtml(label(graphState.focusId))}</strong>
    <small>${escapeHtml(typeName(focus?.type))}</small>
  `;
  renderGraphFocusSearch();
  els.focusType.textContent = typeName(focus?.type);
  els.focusType.style.background = `${colorFor(focus?.type)}18`;
  els.focusType.style.color = colorFor(focus?.type);
  const selectorType = graphViewSelectorType();
  setBilingualTitle(els.focusTitle, selectorType ? `${graphViewTitle()}: ${label(graphState.focusId)}` : label(graphState.focusId));
  els.focusDescription.textContent = selectorType ? graphViewDescription() : (description(graphState.focusId) || "No description.");
  els.expandSelected.textContent = allVisibleFieldNodesExpanded() ? "Hide all fields" : "Show all fields";
}

function renderHiddenNodes() {
  const rows = [...graphState.hiddenNodes].filter(id => node(id));
  els.restoreHidden.disabled = rows.length === 0;
  els.hiddenNodes.innerHTML = rows.length
    ? rows.map(id => `
      <div class="hidden-node-row">
        <span>
          <strong>${bilingualTitleHtml(label(id))}</strong>
          <small>${escapeHtml(typeName(nodeType(id)))}</small>
        </span>
        <button type="button" data-restore-graph-node="${escapeAttr(id)}">Restore</button>
      </div>
    `).join("")
    : `<div class="empty-state compact">No hidden nodes in this graph.</div>`;
}

function graphNeighborhood() {
  const traversalEdges = parentEdges().filter(edge => {
    if (!graphNodeVisible(edge.source) || !graphNodeVisible(edge.target)) return false;
    if (!edgeTypeAllowed(edge, graphState)) return false;
    if (!graphNodeTypeAllowed(edge.source) || !graphNodeTypeAllowed(edge.target)) return false;
    if (tagFilterIsActive(graphState.tags)) {
      const tagPool = [...tagsFor(edge.source), ...tagsFor(edge.target)];
      if (![...graphState.tags].some(tag => tagPool.includes(tag))) return false;
    }
    return true;
  });

  if (!graphViewUsesFocus()) {
    return graphModelView(traversalEdges);
  }
  const adjacency = new Map();
  traversalEdges.forEach(edge => {
    if (!adjacency.has(edge.source)) adjacency.set(edge.source, []);
    if (!adjacency.has(edge.target)) adjacency.set(edge.target, []);
    adjacency.get(edge.source).push(edge);
    adjacency.get(edge.target).push(edge);
  });

  const visited = new Map([[graphState.focusId, 0]]);
  const queue = [graphState.focusId];
  while (queue.length) {
    const current = queue.shift();
    const depth = visited.get(current);
    if (depth >= graphState.maxDepth) continue;
    for (const edge of adjacency.get(current) || []) {
      const next = edge.source === current ? edge.target : edge.source;
      if (visited.has(next)) continue;
      visited.set(next, depth + 1);
      queue.push(next);
    }
  }

  const nodeSet = new Set([...visited.keys()].filter(id => node(id)));
  const childEdgeCandidates = childEdgesForCurrentView();
  if (childEdgeCandidates.length) {
    expandNodeSetFromChildEdges(nodeSet, childEdgeCandidates);
  }
  const selectedChildEdges = childEdgeCandidates.filter(edge => {
    if (!nodeSet.has(edge.source) || !nodeSet.has(edge.target)) return false;
    if (!childEdgeCanParticipate(edge)) return false;
    if (tagFilterIsActive(graphState.tags)) {
      const tagPool = [...tagsFor(edge.source), ...tagsFor(edge.target)];
      if (![...graphState.tags].some(tag => tagPool.includes(tag))) return false;
    }
    return true;
  });

  const visibleEdges = traversalEdges.filter(edge => {
    if (!nodeSet.has(edge.source) || !nodeSet.has(edge.target)) return false;
    if (nodeEdgeCoveredByFieldEdge(edge, selectedChildEdges)) return false;
    return true;
  });
  const visibleChildEdges = selectedChildEdges.filter(edge => {
    if (!nodeSet.has(edge.source) || !nodeSet.has(edge.target)) return false;
    return true;
  });
  const connectedIds = new Set([graphState.focusId]);
  [...visibleEdges, ...visibleChildEdges].forEach(edge => {
    connectedIds.add(edge.source);
    connectedIds.add(edge.target);
  });
  [...nodeSet].forEach(id => {
    if (id !== graphState.focusId && !connectedIds.has(id)) {
      nodeSet.delete(id);
      visited.delete(id);
    }
  });
  return {
    nodes: [...nodeSet].map(id => node(id)),
    edges: visibleEdges,
    childEdges: visibleChildEdges,
    depthById: visited,
    positions: new Map(),
    size: { ...DEFAULT_GRAPH_SIZE },
  };
}

function graphModelView(traversalEdges) {
  const nodeSet = new Set();
  traversalEdges.forEach(edge => {
    nodeSet.add(edge.source);
    nodeSet.add(edge.target);
  });
  topLevelNodes.forEach(item => {
    if (graphNodeVisible(item.id) && graphNodeTypeAllowed(item.id)) {
      const hasVisibleChild = childItems(item.id).length > 0 && graphViewConfig().autoExpandFields;
      if (!traversalEdges.length || hasVisibleChild) nodeSet.add(item.id);
    }
  });
  const childEdgeCandidates = childEdgesForCurrentView();
  expandNodeSetFromChildEdges(nodeSet, childEdgeCandidates);
  const selectedChildEdges = childEdgeCandidates.filter(edge => {
    if (!nodeSet.has(edge.source) || !nodeSet.has(edge.target)) return false;
    if (!childEdgeCanParticipate(edge)) return false;
    return true;
  });
  const visibleEdges = traversalEdges.filter(edge => nodeSet.has(edge.source) && nodeSet.has(edge.target) && !nodeEdgeCoveredByFieldEdge(edge, selectedChildEdges));
  const connectedIds = new Set();
  [...visibleEdges, ...selectedChildEdges].forEach(edge => {
    connectedIds.add(edge.source);
    connectedIds.add(edge.target);
  });
  if (connectedIds.size) {
    [...nodeSet].forEach(id => {
      if (!connectedIds.has(id)) nodeSet.delete(id);
    });
  }
  const depthById = new Map([...nodeSet].map(id => [id, 0]));
  return {
    nodes: [...nodeSet].map(id => node(id)).filter(Boolean),
    edges: visibleEdges,
    childEdges: selectedChildEdges,
    depthById,
    positions: new Map(),
    size: { ...DEFAULT_GRAPH_SIZE },
  };
}
function graphNodeTypeAllowed(id) {
  return (graphViewUsesFocus() && id === graphState.focusId) || graphState.nodeTypes.has(nodeType(id));
}

function graphNodeVisible(id) {
  if (graphState.hiddenNodes.has(id)) return false;
  if (graphState.viewMode === "ontology" && graphState.selectedOntology && !nodeBelongsToOntology(id, graphState.selectedOntology)) return false;
  if (graphState.viewMode === "semantic" && graphState.selectedSemanticModel && !nodeSemanticModels(id).includes(graphState.selectedSemanticModel)) return false;
  if (graphState.viewMode === "semantic" && !metricOverlaySelected(id)) return false;
  return true;
}

function ensureVisibleFocus() {
  if (!graphViewUsesFocus()) return;
  if (!graphState.hiddenNodes.has(graphState.focusId)) return;
  const replacement = chooseReplacementFocus(graphState.focusId);
  if (replacement) {
    graphState.focusId = replacement;
    graphState.selectedNodeId = replacement;
    return;
  }
  graphState.hiddenNodes.delete(graphState.focusId);
}

function clearHiddenSelections() {
  [...graphState.selectedFieldIds].forEach(id => {
    if (graphState.hiddenNodes.has(parentOf(id))) graphState.selectedFieldIds.delete(id);
  });
  syncSelectedFieldId();
  const selectedEdge = graphState.selectedEdgeId ? selectedGraphEdge() : null;
  if (selectedEdge && (graphState.hiddenNodes.has(selectedEdge.source) || graphState.hiddenNodes.has(selectedEdge.target))) {
    graphState.selectedEdgeId = null;
  }
}

function chooseReplacementFocus(excludedId) {
  const currentNodes = (graphState.visible.nodes || [])
    .map(item => item.id)
    .filter(id => id !== excludedId && node(id) && !isChildNode(id) && !graphState.hiddenNodes.has(id));
  if (currentNodes.length) return currentNodes[0];
  return topLevelNodes.find(item => item.id !== excludedId && !graphState.hiddenNodes.has(item.id))?.id || "";
}

function hideGraphNode(id) {
  if (!node(id) || isChildNode(id)) return;
  graphState.hiddenNodes.add(id);
  graphState.expanded.delete(id);
  graphState.manualPositions.delete(id);
  removeSelectedFieldsForParent(id);
  if (graphState.selectedNodeId === id) graphState.selectedNodeId = null;
  const selectedEdge = selectedGraphEdge();
  if (selectedEdge && (selectedEdge.source === id || selectedEdge.target === id)) graphState.selectedEdgeId = null;
  if (graphViewUsesFocus() && graphState.focusId === id) {
    const replacement = chooseReplacementFocus(id);
    if (!replacement) {
      graphState.hiddenNodes.delete(id);
      setScenarioHint("Cannot hide the only visible node.");
      return;
    }
    graphState.focusId = replacement;
    graphState.selectedNodeId = replacement;
  }
  renderGraphPage({ fitAfter: true });
}

function restoreGraphNode(id) {
  graphState.hiddenNodes.delete(id);
  renderGraphPage({ fitAfter: true });
}

function restoreAllHiddenNodes() {
  graphState.hiddenNodes.clear();
  renderGraphPage({ fitAfter: true });
}

function selectedFieldEdges() {
  if (!hasSelectedFields()) return [];
  const selected = graphState.selectedFieldIds;
  return childEdges().filter(edge => selected.has(edge.sourceOriginal) || selected.has(edge.targetOriginal));
}

function selectedMetricValueEdges() {
  return [];
}

function selectedMetricDependencyEdges() {
  if (!["semantic", "traceability"].includes(graphState.viewMode) || !graphState.metricOverlays.size) return [];
  return childEdges().filter(edge => {
    const metricName = edge.raw?.properties?.semantic_metric || "";
    if (!metricName || !graphState.metricOverlays.has(metricName)) return false;
    if (edge.raw?.properties?.metric_value_binding) return false;
    return edge.type === "DERIVED_BY" && nodeType(edge.sourceOriginal) === "semantic_metric" && nodeType(edge.targetOriginal) === "dataset_field";
  });
}

function expandedDataLogicMetricEdges() {
  return childEdges().filter(edge =>
    edge.type === "IMPLEMENTS_METRIC" &&
    nodeType(edge.sourceOriginal) === "implementation_field_binding" &&
    nodeType(edge.targetOriginal) === "semantic_metric" &&
    isExpandedNode(parentOf(edge.sourceOriginal))
  );
}

function childEdgesForCurrentView() {
  const selectedEdges = selectedFieldEdges();
  const overlayEdges = [...selectedMetricValueEdges(), ...selectedMetricDependencyEdges(), ...expandedDataLogicMetricEdges()];
  if (graphState.viewMode === "traceability") return dedupeEdges([...selectedEdges, ...overlayEdges]);
  const allowedChildTypes = childEdgeTypesForMode();
  if (!allowedChildTypes.size) return [];
  return dedupeEdges([...selectedEdges, ...overlayEdges]).filter(edge => allowedChildTypes.has(edge.type));
}

function childEdgeEndpointsVisible(edge) {
  return [edge.sourceOriginal, edge.targetOriginal].every(id => !isChildNode(id) || isExpandedNode(parentOf(id)));
}

function nodeEdgeCoveredByFieldEdge(edge, childEdgesInView) {
  if (!["DERIVED_BY", "IMPLEMENTS_METRIC"].includes(edge.type)) return false;
  return childEdgesInView.some(childEdge =>
    childEdge.type === edge.type &&
    childEdge.source === edge.source &&
    childEdge.target === edge.target &&
    childEdgeEndpointsVisible(childEdge)
  );
}
function childEdgeCanParticipate(edge) {
  if (!graphNodeVisible(edge.source) || !graphNodeVisible(edge.target)) return false;
  if (!graphNodeTypeAllowed(edge.source) || !graphNodeTypeAllowed(edge.target)) return false;
  if (tagFilterIsActive(graphState.tags)) {
    const tagPool = [...tagsFor(edge.source), ...tagsFor(edge.target)];
    if (![...graphState.tags].some(tag => tagPool.includes(tag))) return false;
  }
  return true;
}

function expandNodeSetFromChildEdges(nodeSet, childEdgeCandidates) {
  let changed = true;
  while (changed) {
    changed = false;
    childEdgeCandidates.forEach(edge => {
      if (!childEdgeCanParticipate(edge)) return;
      const sourceVisible = nodeSet.has(edge.source);
      const targetVisible = nodeSet.has(edge.target);
      if (sourceVisible && !targetVisible) {
        nodeSet.add(edge.target);
        changed = true;
      }
      if (targetVisible && !sourceVisible) {
        nodeSet.add(edge.source);
        changed = true;
      }
    });
  }
}
async function graphLayout(nodes, depthById, edges = [], childEdgesForLayout = []) {
  if (elkLayoutEngine) {
    try {
      return await elkGraphLayout(nodes, edges, childEdgesForLayout);
    } catch (error) {
      console.warn("ELK layout failed, falling back to built-in graph layout.", error);
    }
  }
  return fallbackGraphLayout(nodes, depthById);
}

async function elkGraphLayout(nodes, edges = [], childEdgesForLayout = []) {
  const visibleIds = new Set(nodes.map(item => item.id));
  const elkGraph = {
    id: "metadata-graph",
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.direction": "RIGHT",
      "elk.edgeRouting": "SPLINES",
      "elk.spacing.nodeNode": "64",
      "elk.layered.spacing.nodeNodeBetweenLayers": "110",
      "elk.layered.spacing.edgeNodeBetweenLayers": "36",
      "elk.layered.nodePlacement.strategy": "NETWORK_SIMPLEX",
      "elk.layered.layering.strategy": "NETWORK_SIMPLEX",
      "elk.layered.crossingMinimization.strategy": "LAYER_SWEEP",
    },
    children: nodes.map(item => ({
      id: item.id,
      width: estimatedNodeWidth(item.id),
      height: estimatedNodeHeight(item.id),
    })),
    edges: layoutEdgesForElk([...edges, ...childEdgesForLayout], visibleIds),
  };
  const result = await elkLayoutEngine.layout(elkGraph);
  const positions = new Map();
  (result.children || []).forEach(item => {
    positions.set(item.id, {
      x: Math.round((item.x || 0) + GRAPH_PADDING),
      y: Math.round((item.y || 0) + GRAPH_PADDING),
    });
  });
  const width = Math.max(DEFAULT_GRAPH_SIZE.width, Math.ceil((result.width || DEFAULT_GRAPH_SIZE.width) + GRAPH_PADDING * 2));
  const height = Math.max(DEFAULT_GRAPH_SIZE.height, Math.ceil((result.height || DEFAULT_GRAPH_SIZE.height) + GRAPH_PADDING * 2));
  applyManualPositions(positions, width, height);
  return { positions, size: { width, height } };
}

function layoutEdgesForElk(edges, visibleIds) {
  const seen = new Set();
  return edges
    .map(edge => layoutEdgeDirection(edge))
    .filter(edge => edge.source !== edge.target && visibleIds.has(edge.source) && visibleIds.has(edge.target))
    .filter(edge => {
      const key = `${edge.source}|${edge.target}|${edge.type}|${edge.displayName}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .map((edge, index) => ({
      id: `layout-edge-${index}`,
      sources: [edge.source],
      targets: [edge.target],
    }));
}

function layoutEdgeDirection(edge) {
  if (["DERIVES_FROM", "REFERENCES", "DEPENDS_ON", "HAS_TERM"].includes(edge.type)) {
    return { ...edge, source: edge.target, target: edge.source };
  }
  return edge;
}

function mappingGraphLayout(nodes) {
  const positions = new Map();
  const ontologyTypes = new Set(["entity_type_concept", "base_entity_concept"]);
  const semanticTypes = new Set(["semantic_dataset", "semantic_metric"]);
  const sortNodes = group => group.slice().sort((a, b) => typeRank(a.type) - typeRank(b.type) || label(a.id).localeCompare(label(b.id)));
  const ontologyNodes = sortNodes(nodes.filter(item => ontologyTypes.has(item.type)));
  const semanticNodes = sortNodes(nodes.filter(item => semanticTypes.has(item.type)));
  const otherNodes = sortNodes(nodes.filter(item => !ontologyTypes.has(item.type) && !semanticTypes.has(item.type)));
  const expanded = hasExpandedFieldNodes();
  const panelTop = 56;
  const nodeWidth = expanded ? 280 : 230;
  const rowGap = expanded ? 42 : 34;
  const columnGap = expanded ? 48 : 40;
  const titleHeight = 54;
  const horizontalGap = 220;
  const columnsFor = group => group.length > 8 ? 2 : 1;
  const panelWidthFor = columns => 56 + columns * nodeWidth + Math.max(0, columns - 1) * columnGap;
  const stackHeightFor = (group, columns) => {
    const heights = Array.from({ length: Math.max(1, columns) }, () => 0);
    group.forEach((item, index) => {
      const column = index % columns;
      heights[column] += estimatedNodeHeight(item.id) + rowGap;
    });
    return Math.max(0, ...heights) ? Math.max(0, ...heights) - rowGap : 0;
  };
  const panelHeightFor = (group, columns) => Math.max(180, titleHeight + 78 + stackHeightFor(group, columns));
  const ontologyColumns = columnsFor(ontologyNodes);
  const semanticColumns = semanticNodes.length > 3 ? 2 : 1;
  const leftWidth = panelWidthFor(ontologyColumns);
  const rightWidth = Math.max(panelWidthFor(semanticColumns), graphState.metricOverlays.size ? 560 : 420);
  const panelX = { ontology: 64, semantic: 64 + leftWidth + horizontalGap };
  function place(group, x, y, columns) {
    const offsets = Array.from({ length: Math.max(1, columns) }, () => 0);
    const startY = y + titleHeight + 24;
    group.forEach((item, index) => {
      const column = index % columns;
      positions.set(item.id, {
        x: x + 28 + column * (nodeWidth + columnGap),
        y: startY + offsets[column],
      });
      offsets[column] += estimatedNodeHeight(item.id) + rowGap;
    });
  }
  place(ontologyNodes, panelX.ontology, panelTop, ontologyColumns);
  place(semanticNodes, panelX.semantic, panelTop, semanticColumns);
  let otherY = panelTop + titleHeight + 24;
  otherNodes.forEach(item => {
    positions.set(item.id, { x: panelX.ontology + leftWidth + 64, y: otherY });
    otherY += estimatedNodeHeight(item.id) + rowGap;
  });
  const contentHeight = Math.max(
    panelHeightFor(ontologyNodes, ontologyColumns),
    panelHeightFor(semanticNodes, semanticColumns),
    otherNodes.length ? titleHeight + 78 + (otherY - (panelTop + titleHeight + 24)) : 0,
  );
  const width = Math.max(DEFAULT_GRAPH_SIZE.width, panelX.semantic + rightWidth + 80);
  const height = Math.max(DEFAULT_GRAPH_SIZE.height, panelTop + contentHeight + 80);
  applyManualPositions(positions, width, height);
  return {
    positions,
    size: { width, height },
    bands: [
      { title: "Ontology", subtitle: "Entity concepts", kind: "ontology", x: panelX.ontology, y: panelTop, width: leftWidth, height: contentHeight },
      { title: "Semantic Model", subtitle: "Datasets, fields, and metrics", kind: "semantic", x: panelX.semantic, y: panelTop, width: rightWidth, height: contentHeight },
    ],
  };
}
function fallbackGraphLayout(nodes, depthById) {
  if (!graphViewUsesFocus()) return fallbackModelGraphLayout(nodes);
  const positions = new Map();
  const width = DEFAULT_GRAPH_SIZE.width;
  const height = DEFAULT_GRAPH_SIZE.height;
  const lanes = directionalLanes(nodes);
  positions.set(graphState.focusId, { x: 785, y: 560 });

  const expandedLayout = hasExpandedFieldNodes();
  const laneGap = expandedLayout ? 370 : 230;
  const topGap = expandedLayout ? 270 : 230;
  placeLane(lanes.left, 240, 170, laneGap, positions, width, height);
  placeLane(lanes.right, 1280, 170, laneGap, positions, width, height);
  placeLane(lanes.top, 690, 70, topGap, positions, width, height, true);
  placeLane(lanes.bottom, 690, expandedLayout ? 930 : 880, topGap, positions, width, height, true);

  const placed = new Set(positions.keys());
  const fallbackGroups = new Map();
  nodes.forEach(item => {
    if (placed.has(item.id)) return;
    const depth = depthById.get(item.id) || 1;
    if (!fallbackGroups.has(depth)) fallbackGroups.set(depth, []);
    fallbackGroups.get(depth).push(item);
  });

  [...fallbackGroups.entries()].forEach(([depth, group]) => {
    const radiusX = 420 + (depth - 1) * 250;
    const radiusY = 270 + (depth - 1) * 150;
    group.sort((a, b) => typeRank(a.type) - typeRank(b.type) || a.label.localeCompare(b.label));
    group.forEach((item, index) => {
      const angle = (-Math.PI / 2) + (Math.PI * 2 * index) / Math.max(group.length, 1);
      positions.set(item.id, {
        x: clamp(900 + Math.cos(angle) * radiusX - 115, 30, width - 260),
        y: clamp(640 + Math.sin(angle) * radiusY - 58, 30, height - 180),
      });
    });
  });
  applyManualPositions(positions, width, height);
  return { positions, size: { width, height } };
}

function fallbackModelGraphLayout(nodes) {
  const positions = new Map();
  const groups = new Map();
  nodes
    .slice()
    .sort((a, b) => typeRank(a.type) - typeRank(b.type) || label(a.id).localeCompare(label(b.id)))
    .forEach(item => {
      const family = nodeFamily(item.type);
      if (!groups.has(family)) groups.set(family, []);
      groups.get(family).push(item);
    });
  const groupEntries = [...groups.entries()];
  const columnGap = 380;
  const rowGap = hasExpandedFieldNodes() ? 250 : 170;
  const startX = 120;
  const startY = 120;
  let maxRows = 1;
  groupEntries.forEach(([family, group], columnIndex) => {
    maxRows = Math.max(maxRows, group.length);
    group.forEach((item, rowIndex) => {
      positions.set(item.id, {
        x: startX + columnIndex * columnGap,
        y: startY + rowIndex * rowGap,
      });
    });
  });
  const width = Math.max(DEFAULT_GRAPH_SIZE.width, startX * 2 + Math.max(groupEntries.length, 1) * columnGap + 320);
  const height = Math.max(DEFAULT_GRAPH_SIZE.height, startY * 2 + maxRows * rowGap + 220);
  applyManualPositions(positions, width, height);
  return { positions, size: { width, height } };
}

function applyManualPositions(positions, width, height) {
  graphState.manualPositions.forEach((manual, id) => {
    if (!positions.has(id)) return;
    const expanded = isExpandedNode(id);
    positions.set(id, {
      x: clamp(manual.x, 20, width - (expanded ? 320 : 260)),
      y: clamp(manual.y, 20, height - estimatedNodeHeight(id)),
    });
  });
}

function directionalLanes(nodes) {
  const visibleIds = new Set(nodes.map(item => item.id));
  const laneById = new Map([[graphState.focusId, "center"]]);
  const scoreById = new Map([[graphState.focusId, 0]]);
  const queue = [graphState.focusId];
  const edges = graphState.visible.edges;

  while (queue.length) {
    const current = queue.shift();
    const currentScore = scoreById.get(current) || 0;
    for (const edge of edges) {
      if (edge.source !== current && edge.target !== current) continue;
      const other = edge.source === current ? edge.target : edge.source;
      if (!visibleIds.has(other) || laneById.has(other)) continue;
      const delta = directionalDelta(edge, current);
      const nextScore = currentScore + delta.score;
      scoreById.set(other, nextScore);
      laneById.set(other, laneFor(other, edge, nextScore));
      queue.push(other);
    }
  }

  const lanes = { left: [], right: [], top: [], bottom: [] };
  nodes.forEach(item => {
    if (item.id === graphState.focusId) return;
    const lane = laneById.get(item.id) || laneFor(item.id, null, scoreById.get(item.id) || 0);
    lanes[lane].push(item);
  });
  Object.values(lanes).forEach(group => {
    group.sort((a, b) => {
      const da = graphState.visible.depthById.get(a.id) || 1;
      const db = graphState.visible.depthById.get(b.id) || 1;
      return da - db || `${a.type}:${a.label}`.localeCompare(`${b.type}:${b.label}`);
    });
  });
  return lanes;
}

function directionalDelta(edge, fromId) {
  const type = edge.type;
  const fromSource = edge.source === fromId;
  if (isBusinessEntityEdge(edge)) {
    return { score: fromSource ? 1 : -1 };
  }
  if (["SOURCE_TABLE", "DERIVES_FROM"].includes(type)) {
    return { score: fromSource ? -1 : 1 };
  }
  if (["IMPLEMENTED_BY", "REPRESENTED_BY", "MAPS_TO", "IMPLEMENTS_FIELD"].includes(type)) {
    return { score: fromSource ? 1 : -1 };
  }
  if (["WRITES_TO"].includes(type)) {
    return { score: fromSource ? 1 : -1 };
  }
  return { score: 0 };
}

function laneFor(id, edge, score) {
  if (nodeType(id) === "term") return "top";
  if (edge?.type === "HAS_TERM") return "top";
  if (score < 0) return "left";
  if (score > 0) return "right";
  return "bottom";
}

function placeLane(group, startX, startY, gapY, positions, width, height, horizontal = false) {
  if (!group.length) return;
  group.forEach((item, index) => {
    if (horizontal) {
      positions.set(item.id, {
        x: clamp(startX + index * gapY, 30, width - 260),
        y: clamp(startY, 30, height - 180),
      });
      return;
    }
    positions.set(item.id, {
      x: clamp(startX, 30, width - 260),
      y: clamp(startY + index * gapY, 30, height - 180),
    });
  });
}

async function renderGraph(options = {}) {
  const model = graphState.visible;
  const layoutRun = ++graphState.layoutRun;
  const layout = await graphLayout(model.nodes, model.depthById, model.edges, model.childEdges);
  if (layoutRun !== graphState.layoutRun || model !== graphState.visible) return;
  const positions = layout.positions || new Map();
  model.positions = positions;
  model.size = layout.size || { ...DEFAULT_GRAPH_SIZE };
  model.bands = layout.bands || [];
  setGraphCanvasSize(model.size);
  els.board.innerHTML = "";
  els.edgeLayer.innerHTML = "";
  els.fieldEdgeLayer.innerHTML = "";
  ensureArrowDefs(els.edgeLayer, "node");
  ensureArrowDefs(els.fieldEdgeLayer, "field");
  renderGraphBands(model.bands);

  model.nodes.forEach(item => {
    const p = positions.get(item.id);
    if (!p) return;
    const isExpanded = isExpandedNode(item.id);
    const children = isExpanded ? childItems(item.id) : [];
    const isFocus = graphViewUsesFocus() && item.id === graphState.focusId;
    const isSelected = graphState.selectedNodeId ? item.id === graphState.selectedNodeId : isFocus && !graphState.selectedEdgeId && !hasSelectedFields();
    const div = document.createElement("div");
    div.className = `graph-node ${nodeFamily(item.type)}-node ${isExpanded ? "expanded" : ""} ${isFocus ? "center" : ""} ${isSelected ? "selected" : ""}`;
    div.dataset.graphNode = item.id;
    div.dataset.nodeType = item.type;
    div.style.setProperty("--node-color", colorFor(item.type));
    div.style.left = `${p.x}px`;
    div.style.top = `${p.y}px`;
    div.innerHTML = `
      <div class="node-main">
        <button
          class="hide-node-button"
          data-hide-graph-node="${escapeAttr(item.id)}"
          type="button"
          aria-label="Hide ${escapeAttr(item.label)} from graph"
          title="Hide node"
        >×</button>
        <div class="node-top">
          <div class="node-title">
            <div class="node-title-text">
              <span class="node-kind-badge ${nodeFamily(item.type)}">${escapeHtml(nodeFamilyLabel(item.type))}</span>
              <strong>${bilingualTitleHtml(item.label)}</strong>
              <small>${escapeHtml(typeName(item.type))}</small>
            </div>
          </div>
          <div class="node-actions">
            ${childItems(item.id).length ? `<button class="expand-toggle" data-toggle-node-fields="${escapeAttr(item.id)}" type="button">${isExpanded ? "Hide" : "Show"}</button>` : ""}
          </div>
        </div>
        <div class="node-description">${escapeHtml(description(item.id) || item.id)}</div>
      </div>
      ${children.length ? `<div class="field-list">${children.map(renderChildRow).join("")}</div>` : ""}
    `;
    const toggleButton = div.querySelector("[data-toggle-node-fields]");
    if (toggleButton) {
      toggleButton.addEventListener("click", event => {
        event.preventDefault();
        event.stopPropagation();
        const id = toggleButton.dataset.toggleNodeFields;
        const willCollapse = toggleFieldExpansion(id);
        if (willCollapse) {
          removeSelectedFieldsForParent(id);
          graphState.selectedEdgeId = null;
          if (!hasSelectedFields()) graphState.selectedNodeId = id;
        }
        renderGraphPage();
      });
    }
    const hideButton = div.querySelector("[data-hide-graph-node]");
    if (hideButton) {
      hideButton.addEventListener("click", event => {
        event.preventDefault();
        event.stopPropagation();
        hideGraphNode(hideButton.dataset.hideGraphNode);
      });
    }
    div.querySelectorAll("[data-child-id]").forEach(childRow => {
      childRow.addEventListener("click", event => {
        event.preventDefault();
        event.stopPropagation();
        selectGraphField(childRow.dataset.childId);
      });
    });
    div.addEventListener("click", event => {
      if (graphState.suppressNextClick) return;
      if (event.target.closest("button, [data-child-id], .field-row")) return;
      event.preventDefault();
      event.stopPropagation();
      if (event.detail > 1) return;
      window.clearTimeout(graphState.nodeClickTimer);
      graphState.nodeClickTimer = window.setTimeout(() => {
        graphState.nodeClickTimer = null;
        selectGraphNode(item.id);
      }, 180);
    });
    div.addEventListener("dblclick", event => {
      if (graphState.suppressNextClick) return;
      if (event.target.closest("button, [data-child-id], .field-row")) return;
      event.preventDefault();
      event.stopPropagation();
      window.clearTimeout(graphState.nodeClickTimer);
      graphState.nodeClickTimer = null;
      openNodeInGraphExplorer(item.id);
    });
    els.board.appendChild(div);
  });

  requestAnimationFrame(() => {
    drawEdges(model.edges, false, els.edgeLayer);
    drawEdges(model.childEdges, true, els.fieldEdgeLayer);
    if (options.scrollAfter) restoreGraphScroll(options.scrollAfter);
    else if (options.fitAfter) fitGraph();
  });
}

function renderGraphBands(bands = []) {
  bands.forEach(band => {
    const div = document.createElement("div");
    div.className = `graph-band ${band.kind || ""}`;
    div.style.left = `${band.x}px`;
    div.style.top = `${band.y}px`;
    div.style.width = `${band.width}px`;
    div.style.height = `${band.height}px`;
    div.innerHTML = `
      <strong>${escapeHtml(band.title)}</strong>
      ${band.subtitle ? `<small>${escapeHtml(band.subtitle)}</small>` : ""}
    `;
    els.board.appendChild(div);
  });
}
function restoreGraphScroll(scroll) {
  els.viewport.scrollTo({
    left: Math.max(0, Number(scroll?.left) || 0),
    top: Math.max(0, Number(scroll?.top) || 0),
    behavior: "auto",
  });
}

function setGraphCanvasSize(size) {
  const width = Math.max(DEFAULT_GRAPH_SIZE.width, Math.ceil(size?.width || DEFAULT_GRAPH_SIZE.width));
  const height = Math.max(DEFAULT_GRAPH_SIZE.height, Math.ceil(size?.height || DEFAULT_GRAPH_SIZE.height));
  [els.board, els.edgeLayer, els.fieldEdgeLayer].forEach(el => {
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
  });
}

function renderLaneLabels() {
  [
    { label: "Glossary / Terms", x: 690, y: 34 },
    { label: "Upstream / Dependencies", x: 200, y: 132 },
    { label: "Focus", x: 780, y: 500 },
    { label: "Downstream / Implementation", x: 1240, y: 132 },
    { label: "Related Context", x: 690, y: hasExpandedFieldNodes() ? 885 : 835 },
  ].forEach(item => {
    const div = document.createElement("div");
    div.className = "lane-label";
    div.style.left = `${item.x}px`;
    div.style.top = `${item.y}px`;
    div.textContent = item.label;
    els.board.appendChild(div);
  });
}

function renderChildRow(item) {
  return `
    <div class="field-row ${fieldIsSelected(item.id) ? "selected" : ""}" data-child-id="${escapeAttr(item.id)}" title="${escapeAttr(item.description || item.id)}">
      <div>
        <strong>${bilingualTitleHtml(item.name)}</strong>
        <small>${escapeHtml(item.description || item.term || "No field description.")}</small>
      </div>
      <em>${escapeHtml(item.semanticRole || item.dataType || typeName(item.type))}</em>
    </div>
  `;
}

function isExpandedNode(id) {
  return graphState.expanded.has(id);
}

function isExpanded(id) {
  return isExpandedNode(id);
}

function visibleExpandableNodeIds() {
  return graphState.visible.nodes
    .map(item => item.id)
    .filter(id => childItems(id).length);
}

function allVisibleFieldNodesExpanded() {
  const ids = visibleExpandableNodeIds();
  return ids.length > 0 && ids.every(id => isExpandedNode(id));
}

function hasExpandedFieldNodes() {
  return visibleExpandableNodeIds().some(id => isExpandedNode(id));
}

function setAllVisibleFields(open) {
  visibleExpandableNodeIds().forEach(id => {
    setFieldExpansion(id, open);
  });
}

function toggleFieldExpansion(id) {
  const willCollapse = isExpandedNode(id);
  setFieldExpansion(id, !willCollapse);
  return willCollapse;
}

function setFieldExpansion(id, open) {
  if (open) {
    graphState.expanded.add(id);
    graphState.autoExpandSuppressed.delete(id);
  } else {
    graphState.expanded.delete(id);
    graphState.autoExpandSuppressed.add(id);
  }
}

function drawEdges(edges, fieldLevel, layer) {
  edges.forEach(edge => {
    const points = fieldLevel ? childAnchorPoints(edge) : nodeAnchorPoints(edge);
    if (!points) return;
    const { source, target } = points;
    const pathData = curvedPath(source, target);
    const hitPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    hitPath.setAttribute("d", pathData);
    hitPath.setAttribute("class", `edge-hit ${fieldLevel ? "field-edge-hit" : ""} ${edge.id === graphState.selectedEdgeId ? "selected" : ""}`);
    hitPath.dataset.graphEdge = edge.id;
    hitPath.addEventListener("click", event => {
      event.stopPropagation();
      selectGraphEdge(edge);
    });
    layer.appendChild(hitPath);

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    path.setAttribute("class", `edge-path ${fieldLevel ? "field-edge" : ""} ${edge.id === graphState.selectedEdgeId ? "selected" : ""}`);
    path.setAttribute(
      "marker-end",
      edge.id === graphState.selectedEdgeId
        ? fieldLevel ? "url(#arrow-selected-field)" : "url(#arrow-selected-node)"
        : fieldLevel ? "url(#arrow-field)" : "url(#arrow-node)"
    );
    path.dataset.graphEdge = edge.id;
    path.addEventListener("click", event => {
      event.stopPropagation();
      selectGraphEdge(edge);
    });
    layer.appendChild(path);

    if (fieldLevel) return;

    const labelEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
    labelEl.setAttribute("x", (source.x + target.x) / 2);
    labelEl.setAttribute("y", (source.y + target.y) / 2 - 6);
    labelEl.setAttribute("text-anchor", "middle");
    labelEl.setAttribute("class", `edge-label ${edge.id === graphState.selectedEdgeId ? "selected" : ""}`);
    labelEl.dataset.graphEdge = edge.id;
    labelEl.textContent = edge.displayName;
    labelEl.addEventListener("click", event => {
      event.stopPropagation();
      selectGraphEdge(edge);
    });
    layer.appendChild(labelEl);
  });
}

function redrawGraphEdges() {
  els.edgeLayer.innerHTML = "";
  els.fieldEdgeLayer.innerHTML = "";
  ensureArrowDefs(els.edgeLayer, "node");
  ensureArrowDefs(els.fieldEdgeLayer, "field");
  drawEdges(graphState.visible.edges, false, els.edgeLayer);
  drawEdges(graphState.visible.childEdges, true, els.fieldEdgeLayer);
}

function ensureArrowDefs(layer, variant) {
  const markerId = variant === "field" ? "arrow-field" : "arrow-node";
  const selectedMarkerId = variant === "field" ? "arrow-selected-field" : "arrow-selected-node";
  const color = variant === "field" ? "#b7791f" : "#98a2b3";
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  defs.innerHTML = `
    <marker id="${markerId}" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="${color}"></path>
    </marker>
    <marker id="${selectedMarkerId}" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#1f6feb"></path>
    </marker>
  `;
  layer.appendChild(defs);
}

function curvedPath(source, target) {
  return `M ${source.x} ${source.y} L ${target.x} ${target.y}`;
}

function nodeAnchorPoints(edge) {
  const sourceBox = graphNodeElement(edge.source);
  const targetBox = graphNodeElement(edge.target);
  if (!sourceBox || !targetBox) return null;
  return anchorPair(sourceBox, targetBox);
}

function childAnchorPoints(edge) {
  const sourceEl = edgeEndpointElement(edge.sourceOriginal, edge.source);
  const targetEl = edgeEndpointElement(edge.targetOriginal, edge.target);
  if (!sourceEl || !targetEl) return null;
  sourceEl.classList.add("connected");
  targetEl.classList.add("connected");
  return anchorPair(sourceEl, targetEl);
}

function edgeEndpointElement(originalId, parentId) {
  if (isChildNode(originalId)) return childElement(originalId);
  return graphNodeElement(originalId) || graphNodeElement(parentId);
}

function anchorPair(sourceEl, targetEl) {
  const s = relativeRect(sourceEl);
  const t = relativeRect(targetEl);
  const sourceCenter = { x: s.left + s.width / 2, y: s.top + s.height / 2 };
  const targetCenter = { x: t.left + t.width / 2, y: t.top + t.height / 2 };
  const dx = targetCenter.x - sourceCenter.x;
  return dx >= 0
    ? { source: { x: s.left + s.width, y: sourceCenter.y }, target: { x: t.left, y: targetCenter.y } }
    : { source: { x: s.left, y: sourceCenter.y }, target: { x: t.left + t.width, y: targetCenter.y } };
}

function graphNodeElement(id) {
  return els.board.querySelector(`[data-graph-node="${cssEscape(id)}"]`);
}

function childElement(id) {
  return els.board.querySelector(`[data-child-id="${cssEscape(id)}"]`);
}

function relativeRect(el) {
  const viewport = els.viewport.getBoundingClientRect();
  const rect = el.getBoundingClientRect();
  const zoom = pageZoomFactor();
  return {
    left: (rect.left - viewport.left) / zoom + els.viewport.scrollLeft,
    top: (rect.top - viewport.top) / zoom + els.viewport.scrollTop,
    width: rect.width / zoom,
    height: rect.height / zoom,
  };
}

function pageZoomFactor() {
  const zoom = Number.parseFloat(window.getComputedStyle(document.body).zoom);
  return Number.isFinite(zoom) && zoom > 0 ? zoom : 1;
}

function rightMiddle(el) {
  const r = relativeRect(el);
  return { x: r.left + r.width, y: r.top + r.height / 2 };
}

function leftMiddle(el) {
  const r = relativeRect(el);
  return { x: r.left, y: r.top + r.height / 2 };
}

function renderScenarioGraphProfile() {
  const selected = scenarioByKey(scenarioState.selectedKey) || allScenarios()[0];
  const serverStatus = scenarioState.serverLoading
    ? "Loading scenario files..."
    : scenarioState.serverAvailable
      ? "Local scenario server is active."
      : scenarioState.serverError || "Static mode: open through the local scenario server to save templates or snapshots.";
  if (!selected) {
    els.graphDetailBadge.textContent = "Scenario";
    els.graphDetailBadge.style.background = "#eef2f7";
    els.graphDetailBadge.style.color = "#475467";
    els.graphDetailTitle.textContent = "No scenario selected";
    els.graphDetailDescription.textContent = serverStatus;
    els.graphDetailBody.innerHTML = `<div class="empty-state">No scenario template or view snapshot is available.</div>`;
    return;
  }
  const view = selected.view || selected.filters || {};
  const mode = scenarioMode(selected);
  const centerId = selected.kind === "preset" ? scenarioSelectedCenterId(selected, mode) : (view.focusId || "");
  const nodeFilterText = (view.nodeTypes || view.node_types || []).map(typeName).join(", ") || "Default for selected view";
  const edgeFilterText = (view.edgeTypes || view.edge_types || []).map(edgeFilterTypeFromKey).join(", ") || "Default for selected view";
  const businessText = (view.businessEdgeTypes || view.business_edge_types || []).join(", ") || "Default for selected view";
  els.graphDetailBadge.textContent = scenarioKindLabel(selected.kind);
  els.graphDetailBadge.style.background = selected.kind === "preset" ? "#fff3e8" : "#f3e8ff";
  els.graphDetailBadge.style.color = selected.kind === "preset" ? "#c2410c" : "#9333ea";
  setBilingualTitle(els.graphDetailTitle, selected.name);
  els.graphDetailDescription.textContent = selected.description || scenarioSummaryText(selected);
  els.graphDetailBody.innerHTML = `
    <section class="detail-section">
      <h3>Scenario Profile</h3>
      ${kv("ID", selected.id)}
      ${kv("Kind", scenarioKindLabel(selected.kind))}
      ${kv("View", typeTitle(mode))}
      ${kv("Center", centerId ? `${label(centerId)} (${typeName(nodeType(centerId))})` : "Current graph state")}
      ${kv("Depth", view.maxDepth || view.max_depth || graphState.maxDepth || "Default")}
      ${kv("Node Filters", nodeFilterText)}
      ${kv("Edge Filters", edgeFilterText)}
      ${kv("Business Relationships", businessText)}
      ${kv("Source File", selected.source_file || selected.sourceFile || "Generated/static data")}
    </section>
    <section class="detail-section">
      <h3>Status</h3>
      <p class="profile-note">${escapeHtml(serverStatus)}</p>
    </section>
  `;
}
function renderGraphDetail() {
  const selectedField = selectedGraphField();
  if (selectedField) {
    renderFieldProfile(selectedField);
    return;
  }

  const selectedEdge = selectedGraphEdge();
  if (selectedEdge) {
    els.graphDetailBadge.textContent = "Edge";
    els.graphDetailBadge.style.background = "#eef2f7";
    els.graphDetailBadge.style.color = "#475467";
    els.graphDetailTitle.textContent = selectedEdge.displayName;
    els.graphDetailDescription.textContent = selectedEdge.description || selectedEdge.aiContextText || "No edge description.";
    els.graphDetailBody.innerHTML = renderEdgeDetail(selectedEdge);
    return;
  }

  if (!graphViewUsesFocus() && !graphState.selectedNodeId) {
    renderViewProfile();
    return;
  }

  if (appState.currentPage === "scenarios" && graphState.showScenarioProfile) {
    renderScenarioGraphProfile();
    return;
  }
  const selectedNodeId = graphState.selectedNodeId && node(graphState.selectedNodeId) ? graphState.selectedNodeId : graphState.focusId;
  const focus = node(selectedNodeId);
  const data = raw(selectedNodeId);
  els.graphDetailBadge.textContent = "Profile";
  els.graphDetailBadge.style.background = `${colorFor(focus?.type)}18`;
  els.graphDetailBadge.style.color = colorFor(focus?.type);
  setBilingualTitle(els.graphDetailTitle, label(selectedNodeId));
  els.graphDetailDescription.textContent = "";
  els.graphDetailBody.innerHTML = renderNodeDetail(focus, data, true);
}

function renderViewProfile() {
  const scopeInfo = currentGraphScopeInfo();
  if (scopeInfo) {
    renderScopeProfile(scopeInfo);
    return;
  }
  const visibleNodes = graphState.visible?.nodes || [];
  const visibleEdges = graphState.visible?.edges || [];
  const visibleChildEdges = graphState.visible?.childEdges || [];
  els.graphDetailBadge.textContent = graphViewTitle();
  els.graphDetailBadge.style.background = "#eef2f7";
  els.graphDetailBadge.style.color = "#475467";
  els.graphDetailTitle.textContent = graphViewTitle();
  els.graphDetailDescription.textContent = graphViewDescription();
  els.graphDetailBody.innerHTML = `
    <section class="detail-section">
      <h3>View Summary</h3>
      ${kv("Visible Nodes", visibleNodes.length)}
      ${kv("Node Edges", visibleEdges.length)}
      ${kv("Field Edges", visibleChildEdges.length)}
    </section>
    <section class="detail-section">
      <h3>Visible Node Types</h3>
      <div class="tag-list">${[...new Set(visibleNodes.map(item => item.type))].sort(compareNodeType).map(type => `<span class="tag-pill">${escapeHtml(typeName(type))}</span>`).join("")}</div>
    </section>
  `;
}

function renderScopeProfile(info) {
  const visibleNodes = graphState.visible?.nodes || [];
  const visibleEdges = graphState.visible?.edges || [];
  const visibleChildEdges = graphState.visible?.childEdges || [];
  els.graphDetailBadge.textContent = info.type;
  els.graphDetailBadge.style.background = "#eef2f7";
  els.graphDetailBadge.style.color = "#475467";
  setBilingualTitle(els.graphDetailTitle, info.displayName || info.id);
  els.graphDetailDescription.textContent = "";
  els.graphDetailBody.innerHTML = `
    <section class="detail-section">
      <h3>${escapeHtml(info.type)} Profile</h3>
      ${info.description ? kv("description", info.description) : ""}
      ${info.version ? kv("version", info.version) : ""}
      ${info.ontology ? kv("ontology", optionLabel(info.ontology)) : ""}
      ${info.mappingName ? kv("mapping_name", optionLabel(info.mappingName)) : ""}
      ${info.sourceFile ? kv("source_file", info.sourceFile) : ""}
      ${info.custom_extensions ? compactJsonRow("custom_extensions", info.custom_extensions) : ""}
      ${info.type === "Semantic Model" ? kv("datasets", info.datasetCount) : ""}
      ${info.type === "Semantic Model" ? kv("metrics", info.metricCount) : ""}
      ${kv("Visible Nodes", visibleNodes.length)}
      ${kv("Node Edges", visibleEdges.length)}
      ${kv("Field Edges", visibleChildEdges.length)}
    </section>
    ${renderAiContextSection(info.ai_context)}
    ${rawYamlSection(rawYamlNodePayload(info.raw || info, info.raw || info))}
    <section class="detail-section">
      <h3>Visible Node Types</h3>
      <div class="tag-list">${[...new Set(visibleNodes.map(item => item.type))].sort(compareNodeType).map(type => `<span class="tag-pill">${escapeHtml(typeName(type))}</span>`).join("")}</div>
    </section>
  `;
}
function selectGraphNode(id, options = {}) {
  if (!node(id) || isChildNode(id)) return;
  graphState.showScenarioProfile = false;
  if (nodeType(id) === "semantic_metric") {
    const metricName = metricNameForNode(id);
    if (metricName) graphState.metricOverlays.add(metricName);
  }
  graphState.selectedNodeId = id;
  graphState.selectedEdgeId = null;
  clearSelectedFields();
  if (options.render === false) {
    renderGraphDetail();
    return;
  }
  renderGraphPage(options);
}

function openNodeInGraphExplorer(id) {
  if (!node(id) || isChildNode(id)) return;
  graphState.showScenarioProfile = false;
  applyGraphViewMode("traceability", { resetFilters: true });
  setGraphFocus(id, { resetEdgeTypes: true });
  graphState.selectedEdgeId = null;
  clearSelectedFields();
  openPage("graph");
}
function selectedGraphField() {
  if (!graphState.selectedFieldId) return null;
  const parentId = parentOf(graphState.selectedFieldId);
  const item = childItems(parentId).find(child => child.id === graphState.selectedFieldId);
  return item ? { ...item, parentId } : null;
}

function renderFieldProfile(field) {
  const relationships = [...parentEdges(), ...childEdges()]
    .filter(edge => edge.sourceOriginal === field.id || edge.targetOriginal === field.id || edge.source === field.id || edge.target === field.id);
  const isValueProperty = field.type === "value_type_property";
  els.graphDetailBadge.textContent = "Field Profile";
  els.graphDetailBadge.style.background = `${colorFor(field.type)}18`;
  els.graphDetailBadge.style.color = colorFor(field.type);
  setBilingualTitle(els.graphDetailTitle, field.name);
  els.graphDetailDescription.textContent = "";
  els.graphDetailBody.innerHTML = `
    <section class="detail-section">
      <h3>Field / Property</h3>
      ${isValueProperty ? "" : kv("Parent", `${label(field.parentId)} (${field.parentId})`)}
      ${field.description ? kv("Description", field.description) : ""}
      ${!isValueProperty && field.dataType ? kv("Data Type", field.dataType) : ""}
      ${field.nullable !== undefined && field.nullable !== "" ? kv("Nullable", String(field.nullable)) : ""}
      ${field.label ? kv("label", field.label) : ""}
      ${field.dimension !== undefined ? compactJsonRow("dimension", field.dimension) : ""}
      ${field.ai_context !== undefined ? compactJsonRow("ai_context", field.ai_context) : ""}
      ${field.custom_extensions !== undefined ? compactJsonRow("custom_extensions", field.custom_extensions) : ""}
      ${field.semanticRole ? kv("Semantic Role", field.semanticRole) : ""}
      ${field.term ? kv("Term", field.term) : ""}
      ${!isValueProperty && field.valueConcept ? kv("Value Concept", field.valueConcept) : ""}
      ${field.calculationType ? kv("Calculation Type", field.calculationType) : ""}
      ${field.semanticMetric ? kv("Semantic Metric", field.semanticMetric) : ""}
      ${field.relationship ? kv("Ontology Relationship", field.relationship) : ""}
      ${field.semanticReference ? kv("Semantic Reference", field.semanticReference) : ""}
      ${field.requirementField ? kv("Requirement Field", field.requirementField) : ""}
      ${field.required !== undefined && field.required !== "" ? kv("Required", String(field.required)) : ""}
      ${field.purpose ? kv("Purpose", field.purpose) : ""}
      ${field.rule ? kv("Rule", field.rule) : ""}
      ${field.bindingRole ? kv("Binding Role", field.bindingRole) : ""}
      ${field.datasetField ? kv("Dataset Field", field.datasetField) : ""}
      ${!isValueProperty && field.sourceField ? kv("Source Field", field.sourceField) : ""}
      ${field.expression ? kv("Expression", field.expression) : ""}
      ${field.inputs?.length ? kv("Inputs", field.inputs.join(", ")) : ""}
      ${field.sourceFields?.length ? kv("Source Fields", field.sourceFields.join(", ")) : ""}
      ${field.semanticModel ? kv("Semantic Model", field.semanticModel) : ""}
    </section>
    ${field.mapsTo?.length ? `
      <section class="detail-section">
        <h3>Mappings</h3>
        <div class="mini-list">${field.mapsTo.map(target => `<div class="mini-card"><strong>${escapeHtml(target)}</strong></div>`).join("")}</div>
      </section>
    ` : ""}
    ${field.constraints?.length ? `
      <section class="detail-section">
        <h3>Constraints</h3>
        <div class="mini-list">${field.constraints.map(renderConstraintCard).join("")}</div>
      </section>
    ` : ""}
    ${field.lineage ? `
      <section class="detail-section">
        <h3>Lineage</h3>
        <pre class="raw-block">${escapeHtml(JSON.stringify(field.lineage, null, 2))}</pre>
      </section>
    ` : ""}
    <section class="detail-section">
      <h3>${field.valueConcept ? "Shared ValueType Usage" : "Relationships"}</h3>
      ${relationships.length ? `<div class="mini-list">${relationships.map(renderFieldRelationCard).join("")}</div>` : `<div class="empty-state">No field-level relationships are visible for this field.</div>`}
    </section>
    ${rawYamlSection(rawYamlFieldPayload(field))}
  `;
}

function renderFieldRelationCard(edge) {
  const other = edge.sourceOriginal === graphState.selectedFieldId || edge.source === graphState.selectedFieldId
    ? edge.targetOriginal
    : edge.sourceOriginal;
  const otherParent = parentOf(other);
  return `
    <div class="mini-card" data-mini-edge="${escapeAttr(edge.id)}">
      <span class="edge-pill" title="${escapeAttr(edge.type)}">${escapeHtml(edge.displayName)}</span>
      <strong>${escapeHtml(other ? `${label(otherParent)} / ${label(other)}` : "")}</strong>
      ${edge.description ? `<p>${escapeHtml(edge.description)}</p>` : ""}
    </div>
  `;
}

function renderConstraints(constraints, title = "Constraints") {
  const rows = Array.isArray(constraints) ? constraints.filter(Boolean) : [];
  if (!rows.length) return "";
  return `
    <section class="detail-section">
      <h3>${escapeHtml(title)}</h3>
      <div class="mini-list">${rows.map(renderConstraintCard).join("")}</div>
    </section>
  `;
}

function renderConstraintCard(item) {
  return `
    <div class="mini-card constraint-card">
      <strong>${escapeHtml(item.type || "constraint")}</strong>
      ${item.severity ? `<small>${escapeHtml(item.severity)}</small>` : ""}
      ${item.description ? `<p>${escapeHtml(item.description)}</p>` : ""}
      ${item.expression ? `<p><code>${escapeHtml(item.expression)}</code></p>` : ""}
      ${item.fields?.length ? `<p>${escapeHtml(item.fields.join(", "))}</p>` : ""}
    </div>
  `;
}

function selectedGraphEdge() {
  if (!graphState.selectedEdgeId) return null;
  const visible = [...parentEdges(), ...childEdges()].find(edge => edge.id === graphState.selectedEdgeId);
  if (visible) return visible;
  const rawEdge = graphEdge(graphState.selectedEdgeId);
  return rawEdge ? normalizedEdge(rawEdge) : null;
}

function selectGraphEdge(edge) {
  graphState.selectedEdgeId = edge.id;
  clearSelectedFields();
  graphState.selectedNodeId = null;
  renderGraphDetail();
  allEdgeElements().forEach(item => {
    item.classList.toggle("selected", item.dataset.graphEdge === edge.id);
  });
}

function selectGraphEdgeById(edgeId) {
  const edge = selectedGraphEdgeById(edgeId);
  if (edge) selectGraphEdge(edge);
}

function selectedGraphEdgeById(edgeId) {
  return [...parentEdges(), ...childEdges()].find(edge => edge.id === edgeId) || (graphEdge(edgeId) ? normalizedEdge(graphEdge(edgeId)) : null);
}

function selectGraphField(fieldId) {
  if (!node(fieldId) || !isChildNode(fieldId)) return;
  if (fieldIsSelected(fieldId)) {
    graphState.selectedFieldIds.delete(fieldId);
    if (graphState.selectedFieldId === fieldId) syncSelectedFieldId();
  } else {
    graphState.selectedFieldIds.add(fieldId);
    graphState.selectedFieldId = fieldId;
    expandLinkedParentsForField(fieldId);
  }
  graphState.selectedEdgeId = null;
  graphState.selectedNodeId = null;
  renderGraphPage();
}

function allEdgeElements() {
  return [...els.edgeLayer.querySelectorAll(".edge-path, .edge-label, .edge-hit"), ...els.fieldEdgeLayer.querySelectorAll(".edge-path, .edge-label, .edge-hit")];
}

function expandLinkedParentsForField(fieldId) {
  const parentId = parentOf(fieldId);
  if (parentId) graphState.expanded.add(parentId);
  childEdges()
    .filter(edge => edge.sourceOriginal === fieldId || edge.targetOriginal === fieldId)
    .forEach(edge => {
      [edge.source, edge.target].forEach(id => {
        if ([
          "table",
          "view",
          "physical_table",
          "semantic_dataset",
          "base_entity_concept",
          "entity_type_concept",
          "regulatory_requirement",
          "report_implementation",
        ].includes(nodeType(id))) graphState.expanded.add(id);
      });
    });
}

function childItems(parentId) {
  const generated = graph.nodes
    .filter(item => parentOf(item.id) === parentId && childTypes.has(item.type))
    .map(item => ({
      id: item.id,
      name: item.label,
      type: item.type,
      dataType: item.properties?.data_type || "",
      nullable: item.properties?.nullable,
      label: item.properties?.label || "",
      dimension: item.properties?.dimension,
      ai_context: item.properties?.ai_context,
      custom_extensions: item.properties?.custom_extensions,
      description: item.properties?.description || "",
      semanticRole: item.properties?.semantic_role || "",
      term: item.properties?.term || "",
      valueConcept: item.properties?.value_concept || "",
      fieldName: item.properties?.field_name || "",
      relationship: item.properties?.relationship_name || item.properties?.relationship || "",
      semanticReference: item.properties?.semantic_reference || "",
      requirementField: item.properties?.requirement_field || "",
      sourceConcept: item.properties?.source_concept || "",
      targetConcept: item.properties?.target_concept || "",
      required: item.properties?.required,
      purpose: item.properties?.purpose || "",
      rule: item.properties?.rule || "",
      expression: item.properties?.expression || "",
      inputs: item.properties?.inputs || [],
      sourceFields: item.properties?.source_fields || [],
      metricName: item.properties?.metric_name || "",
      calculationType: item.properties?.calculation_type || "",
      semanticMetric: item.properties?.semantic_metric || "",
      semanticModel: item.properties?.semantic_model || "",
      bindingRole: item.properties?.binding_role || "",
      dataset: item.properties?.dataset || "",
      field: item.properties?.field || "",
      datasetField: item.properties?.dataset_field || "",
      sourceField: item.properties?.source_field || "",
      raw: item.properties || {},
    }))
    .map(item => ({
      ...item,
      semanticRole: item.calculationType === "metric" ? `metric · ${item.dataType || item.valueConcept || "value"}` : item.semanticRole,
    }));
  const data = raw(parentId);
  const inlineColumns = (data.columns || []).map(col => ({
    id: col.id || columnId(parentId, col.name),
    name: col.name,
    type: "column",
    dataType: col.data_type || "",
    description: col.description || "",
    term: col.term || "",
    nullable: col.nullable,
    lineage: col.lineage,
    raw: col,
  }));
  const byId = new Map();
  [...generated, ...inlineColumns].forEach(item => {
    if (!item.name) return;
    byId.set(item.id, { ...(byId.get(item.id) || {}), ...item });
  });
  return [...byId.values()].sort((a, b) => a.name.localeCompare(b.name));
}

function columnId(parentId, name) {
  if (parentId.startsWith("table.")) return `column.${parentId.slice("table.".length)}.${name}`;
  if (parentId.startsWith("view.")) return `column.${parentId.slice("view.".length)}.${name}`;
  return `${parentId}.${name}`;
}

function renderFieldTable(children) {
  return `
    <div class="field-table">
      ${children.map(item => `
        <div class="field-table-row">
          <div>
            <strong>${bilingualTitleHtml(item.name)}</strong>
            <small>${escapeHtml(item.description || item.term || item.fieldName || item.id)}</small>
          </div>
          <span class="muted">${escapeHtml(item.semanticRole || item.dataType || typeName(item.type))}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function chip(labelText, active, kind, value) {
  const color = kind.endsWith("node-type") ? colorFor(value) : "";
  const style = color ? ` style="--chip-color:${escapeAttr(color)}"` : "";
  return `<button class="filter-chip ${color ? "type-colored" : ""} ${active ? "active" : ""}"${style} data-filter-kind="${escapeAttr(kind)}" data-filter-value="${escapeAttr(value)}" type="button">${escapeHtml(labelText)}</button>`;
}

function routeEndpointHtml(type) {
  return `
    <span class="route-end" style="--route-color:${escapeAttr(colorFor(type))}">
      <span class="route-dot" aria-hidden="true"></span>
      <span class="route-name">${escapeHtml(routeTypeName(type))}</span>
    </span>
  `;
}

function routeChip(sourceType, targetType, active, kind, value) {
  const title = `${typeName(sourceType)} -> ${typeName(targetType)}`;
  return `
    <button class="filter-chip relation-chip route-chip ${active ? "active" : ""}" data-filter-kind="${escapeAttr(kind)}" data-filter-value="${escapeAttr(value)}" type="button" title="${escapeAttr(title)}">
      ${routeEndpointHtml(sourceType)}
      <span class="route-arrow" aria-hidden="true">-></span>
      ${routeEndpointHtml(targetType)}
    </button>
  `;
}

function edgeFilterChip(key, active, kind) {
  return routeChip(edgeFilterSourceType(key), edgeFilterTargetType(key), active, kind, key);
}


function multiSelect(values, selected, kind, labelText) {
  const allLabel = labelText === "Data type" ? "data types" : labelText.toLowerCase();
  const countText = selected.size === values.length
    ? `All ${allLabel}`
    : `${selected.size} selected`;
  return `
    <details class="multi-select" data-filter-dropdown="${escapeAttr(kind)}">
      <summary>
        <span>${escapeHtml(countText)}</span>
      </summary>
      <div class="multi-select-menu">
        <div class="multi-actions">
          <button type="button" data-multi-action="select-all" data-multi-filter-kind="${escapeAttr(kind)}">Select all</button>
          <button type="button" data-multi-action="unselect-all" data-multi-filter-kind="${escapeAttr(kind)}">Unselect all</button>
        </div>
        ${values.map(value => `
          <label class="multi-option">
            <input
              type="checkbox"
              data-multi-filter-kind="${escapeAttr(kind)}"
              data-multi-filter-value="${escapeAttr(value)}"
              ${selected.has(value) ? "checked" : ""}
            />
            <span>${escapeHtml(value)}</span>
          </label>
        `).join("")}
      </div>
    </details>
  `;
}

function kv(key, value) {
  return `<div class="kv"><span>${escapeHtml(key)}</span><strong>${escapeHtml(String(value || ""))}</strong></div>`;
}

function defaultScenarioKey() {
  const first = allScenarios()[0];
  return first ? scenarioKey(first.kind, first.id) : "";
}

function openScenarioWorkspace() {
  const key = scenarioState.selectedKey || defaultScenarioKey();
  if (key) applyScenario(key, { page: "scenarios" });
  else openPage("scenarios");
}
function openPage(page) {
  const normalizedPage = page === "catalog" ? "graph" : (page || "home");
  appState.currentPage = normalizedPage;
  const viewMode = PAGE_VIEW_MODE[normalizedPage];
  const showGraph = Boolean(viewMode);
  if (showGraph) applyGraphViewMode(viewMode, { resetFilters: normalizedPage === "graph" && graphState.viewMode !== "traceability" });
  if (els.homePage) els.homePage.classList.toggle("hidden", normalizedPage !== "home");
  if (els.catalogPage) els.catalogPage.classList.toggle("hidden", normalizedPage !== "catalog");
  if (els.scenarioPage) els.scenarioPage.classList.add("hidden");
  if (els.graphPage) els.graphPage.classList.toggle("hidden", !showGraph);
  if (els.homeTab) els.homeTab.classList.toggle("active", normalizedPage === "home");
  if (els.catalogTab) els.catalogTab.classList.toggle("active", normalizedPage === "catalog");
  if (els.graphTab) els.graphTab.classList.toggle("active", normalizedPage === "graph");
  if (els.ontologyTab) els.ontologyTab.classList.toggle("active", normalizedPage === "ontology");
  if (els.semanticTab) els.semanticTab.classList.toggle("active", normalizedPage === "semantic");
  if (els.scenarioTab) els.scenarioTab.classList.toggle("active", normalizedPage === "scenarios");
  if (showGraph) {
    renderGraphPage({ fitAfter: true });
  } else if (normalizedPage === "catalog") {
    renderCatalog();
  } else {
    renderHomePage();
  }
}

function applyUrlState() {
  const params = new URLSearchParams(window.location.search);
  const focus = params.get("focus");
  const selectedNode = focus && node(focus) && !isChildNode(focus) ? focus : null;
  if (selectedNode) {
    catalogState.selectedKind = "node";
    catalogState.selectedId = selectedNode;
    setGraphFocus(selectedNode, { resetEdgeTypes: true });
  }
  const view = params.get("view");
  if (view === "scenarios") openScenarioWorkspace();
  else if (["home", "graph", "ontology", "semantic"].includes(view)) openPage(view);
  else renderAll();
}
function openSelectionInGraph() {
  if (catalogState.selectedKind === "edge") {
    const edge = graphEdge(catalogState.selectedId);
    if (edge) {
      const normalized = normalizedEdge(edge);
      graphState.focusId = normalized.source;
      graphState.selectedNodeId = null;
      graphState.selectedEdgeId = normalized.id;
      clearSelectedFields();
      if (isBusinessEntityEdge(normalized)) graphState.businessEdgeTypes.add(normalized.type);
      else graphState.edgeTypes.add(normalized.type);
      if (isChildNode(edge.source)) graphState.expanded.add(normalized.source);
      if (isChildNode(edge.target)) graphState.expanded.add(normalized.target);
    }
  } else {
    setGraphFocus(catalogState.selectedId, { resetEdgeTypes: true });
    graphState.selectedEdgeId = null;
    clearSelectedFields();
  }
  openPage("graph");
}

function resetCatalogFilters() {
  catalogState.query = "";
  catalogState.nodeTypes = new Set(nodeTypes());
  catalogState.businessEdgeTypes = new Set(businessEdgeTypes());
  catalogState.edgeTypes = new Set(edgeTypes());
  catalogState.tags = new Set(allTags());
  els.catalogSearch.value = "";
  renderCatalog();
}

function resetGraphFilters() {
  graphState.nodeTypes = defaultNodeTypesForMode(graphState.viewMode);
  graphState.businessEdgeTypes = defaultBusinessEdgeTypesForMode(graphState.viewMode);
  graphState.edgeTypes = defaultEdgeTypesForMode(graphState.viewMode);
  graphState.metricOverlays.clear();
  graphState.tags = new Set(allTags());
  graphState.maxDepth = graphViewConfig().minDepth || 1;
  graphState.selectedNodeId = graphViewUsesFocus() ? graphState.focusId : null;
  graphState.selectedEdgeId = null;
  clearSelectedFields();
  graphState.expanded.clear();
  graphState.autoExpandSuppressed.clear();
  graphState.hiddenNodes.clear();
  graphState.manualPositions.clear();
  renderGraphPage({ fitAfter: true });
}

function toggleSet(set, value) {
  if (set.has(value)) set.delete(value);
  else set.add(value);
}
function toggleBusinessEdgeRoute(state, values) {
  const options = values || [];
  if (!options.length) return;
  const allSelected = options.every(value => state.businessEdgeTypes.has(value));
  options.forEach(value => {
    if (allSelected) state.businessEdgeTypes.delete(value);
    else state.businessEdgeTypes.add(value);
  });
}

function updateMultiFilter(kind, value, checked) {
  const config = multiFilterConfig(kind);
  if (!config) return;
  if (checked) config.set.add(value);
  else config.set.delete(value);
  renderAll();
  reopenFilterDropdown(kind);
}

function applyMultiAction(kind, action) {
  const config = multiFilterConfig(kind);
  if (!config) return;
  config.set.clear();
  if (action === "select-all") {
    config.values().forEach(item => config.set.add(item));
  }
  renderAll();
  reopenFilterDropdown(kind);
}

function multiFilterConfig(kind) {
  const configs = {
    "catalog-business-edge-type": { set: catalogState.businessEdgeTypes, values: businessEdgeTypes },
    "catalog-edge-type": { set: catalogState.edgeTypes, values: edgeTypes },
    "catalog-tag": { set: catalogState.tags, values: allTags },
    "graph-business-edge-type": { set: graphState.businessEdgeTypes, values: graphBusinessEdgeTypeOptions },
    "graph-metric-overlay": { set: graphState.metricOverlays, values: metricOverlayOptions },
    "graph-edge-type": { set: graphState.edgeTypes, values: graphEdgeTypeOptions },
    "graph-tag": { set: graphState.tags, values: allTags },
  };
  return configs[kind];
}

function reopenFilterDropdown(kind) {
  const dropdown = document.querySelector(`[data-filter-dropdown="${cssEscape(kind)}"]`);
  if (dropdown) dropdown.setAttribute("open", "");
}

function closeFilterDropdowns(except) {
  document.querySelectorAll("[data-filter-dropdown][open]").forEach(dropdown => {
    if (except && dropdown === except) return;
    dropdown.removeAttribute("open");
  });
}

function fitGraph() {
  const bounds = visibleGraphBounds();
  const viewportWidth = Math.max(els.viewport.clientWidth, 320);
  const viewportHeight = Math.max(els.viewport.clientHeight, 260);
  const left = Math.max(0, bounds.left + bounds.width / 2 - viewportWidth / 2);
  const top = Math.max(0, bounds.top + bounds.height / 2 - viewportHeight / 2);
  els.viewport.scrollTo({ left, top, behavior: "smooth" });
}

function visibleGraphBounds() {
  const positions = graphState.visible.positions || new Map();
  const nodeIds = graphState.visible.nodes.map(item => item.id).filter(id => positions.has(id));
  const size = graphState.visible.size || DEFAULT_GRAPH_SIZE;
  if (!nodeIds.length) return { left: 0, top: 0, width: size.width, height: size.height };
  let left = Infinity;
  let top = Infinity;
  let right = -Infinity;
  let bottom = -Infinity;
  nodeIds.forEach(id => {
    const p = positions.get(id);
    const expandedHeight = estimatedNodeHeight(id);
    const nodeWidth = estimatedNodeWidth(id);
    left = Math.min(left, p.x);
    top = Math.min(top, p.y);
    right = Math.max(right, p.x + nodeWidth);
    bottom = Math.max(bottom, p.y + expandedHeight);
  });
  const paddedLeft = Math.max(0, left - 120);
  const paddedTop = Math.max(0, top - 100);
  return {
    left: paddedLeft,
    top: paddedTop,
    width: Math.min(size.width, right + 120) - paddedLeft,
    height: Math.min(size.height, bottom + 100) - paddedTop,
  };
}

function estimatedExpandedHeight(id) {
  const rows = childItems(id).length;
  return 118 + rows * 68;
}

function estimatedNodeHeight(id) {
  return isExpandedNode(id) ? estimatedExpandedHeight(id) : 120;
}

function estimatedNodeWidth(id) {
  return isExpandedNode(id) ? 280 : 230;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[ch]));
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

function cssEscape(value) {
  if (window.CSS?.escape) return CSS.escape(value);
  return String(value).replace(/["\\]/g, "\\$&");
}

function startGraphNodeDrag(event) {
  if (graphState.dragging) return;
  if (event.button !== 0) return;
  const graphNode = event.target.closest("[data-graph-node]");
  if (!graphNode) return;
  if (event.target.closest("button, [data-child-id], .field-row, .edge-label, .edge-path")) return;
  const id = graphNode.dataset.graphNode;
  const current = graphState.visible.positions.get(id) || {
    x: Number.parseFloat(graphNode.style.left) || 0,
    y: Number.parseFloat(graphNode.style.top) || 0,
  };
  graphState.dragging = {
    id,
    nodeEl: graphNode,
    startClientX: event.clientX,
    startClientY: event.clientY,
    startX: current.x,
    startY: current.y,
    moved: false,
  };
}

function dragGraphNode(event) {
  const drag = graphState.dragging;
  if (!drag) return;
  const zoom = pageZoomFactor();
  const dx = (event.clientX - drag.startClientX) / zoom;
  const dy = (event.clientY - drag.startClientY) / zoom;
  if (!drag.moved && Math.hypot(dx, dy) < 4) return;
  drag.moved = true;
  event.preventDefault();
  const width = drag.nodeEl.offsetWidth || 260;
  const height = drag.nodeEl.offsetHeight || estimatedNodeHeight(drag.id);
  const size = graphState.visible.size || DEFAULT_GRAPH_SIZE;
  const x = clamp(drag.startX + dx, 20, size.width - width - 20);
  const y = clamp(drag.startY + dy, 20, size.height - height - 20);
  drag.nodeEl.classList.add("dragging");
  drag.nodeEl.style.left = `${x}px`;
  drag.nodeEl.style.top = `${y}px`;
  graphState.manualPositions.set(drag.id, { x, y });
  graphState.visible.positions.set(drag.id, { x, y });
  redrawGraphEdges();
}

function endGraphNodeDrag() {
  const drag = graphState.dragging;
  if (!drag) return;
  drag.nodeEl.classList.remove("dragging");
  graphState.suppressNextClick = drag.moved;
  graphState.dragging = null;
}

document.addEventListener("click", event => {
  if (graphState.suppressNextClick) {
    graphState.suppressNextClick = false;
    event.preventDefault();
    event.stopPropagation();
    return;
  }

  const dropdown = event.target.closest("[data-filter-dropdown]");
  if (dropdown) {
    closeFilterDropdowns(dropdown);
  } else {
    closeFilterDropdowns();
  }

  const multiAction = event.target.closest("[data-multi-action]");
  if (multiAction) {
    applyMultiAction(multiAction.dataset.multiFilterKind, multiAction.dataset.multiAction);
    event.preventDefault();
    event.stopPropagation();
    return;
  }

  const openPageAction = event.target.closest("[data-open-page]");
  if (openPageAction) {
    if (openPageAction.dataset.openPage === "scenarios") openScenarioWorkspace();
    else openPage(openPageAction.dataset.openPage);
    event.stopPropagation();
    return;
  }

  const openOntology = event.target.closest("[data-open-ontology]");
  if (openOntology) {
    graphState.selectedOntology = openOntology.dataset.openOntology;
    openPage("ontology");
    event.stopPropagation();
    return;
  }

  const openSemantic = event.target.closest("[data-open-semantic]");
  if (openSemantic) {
    graphState.selectedSemanticModel = openSemantic.dataset.openSemantic;
    openPage("semantic");
    event.stopPropagation();
    return;
  }

  const openScenario = event.target.closest("[data-open-scenario]");
  if (openScenario && !event.target.closest("[data-delete-scenario]")) {
    applyScenario(openScenario.dataset.openScenario, (appState.currentPage === "scenarios" || openScenario.dataset.openScenarioPage === "scenarios") ? { page: "scenarios" } : {});
    event.stopPropagation();
    return;
  }

  const selectScenario = event.target.closest("[data-select-scenario]");
  if (selectScenario) {
    scenarioState.selectedKey = selectScenario.dataset.selectScenario;
    renderScenarioLibrary();
    renderScenarioControls();
    event.stopPropagation();
    return;
  }

  const deleteScenarioAction = event.target.closest("[data-delete-scenario]");
  if (deleteScenarioAction) {
    scenarioState.selectedKey = scenarioKey(deleteScenarioAction.dataset.deleteScenarioKind || "snapshot", deleteScenarioAction.dataset.deleteScenario);
    deleteSelectedScenario();
    event.stopPropagation();
    return;
  }
  const openNode = event.target.closest("[data-open-graph-node]");
  if (openNode) {
    catalogState.selectedKind = "node";
    catalogState.selectedId = openNode.dataset.openGraphNode;
    setGraphFocus(catalogState.selectedId, { resetEdgeTypes: true });
    graphState.selectedEdgeId = null;
    clearSelectedFields();
    openPage("graph");
    event.stopPropagation();
    return;
  }

  const openEdge = event.target.closest("[data-open-graph-edge]");
  if (openEdge) {
    catalogState.selectedKind = "edge";
    catalogState.selectedId = openEdge.dataset.openGraphEdge;
    openSelectionInGraph();
    event.stopPropagation();
    return;
  }

  const childRow = event.target.closest("[data-child-id]");
  if (childRow) {
    selectGraphField(childRow.dataset.childId);
    event.stopPropagation();
    return;
  }

  const hideNode = event.target.closest("[data-hide-graph-node]");
  if (hideNode) {
    hideGraphNode(hideNode.dataset.hideGraphNode);
    event.stopPropagation();
    return;
  }

  const restoreNode = event.target.closest("[data-restore-graph-node]");
  if (restoreNode) {
    restoreGraphNode(restoreNode.dataset.restoreGraphNode);
    event.stopPropagation();
    return;
  }

  const catalogNode = event.target.closest("[data-catalog-node]");
  if (catalogNode) {
    catalogState.selectedKind = "node";
    catalogState.selectedId = catalogNode.dataset.catalogNode;
    renderCatalog();
    return;
  }

  const catalogEdge = event.target.closest("[data-catalog-edge]");
  if (catalogEdge) {
    catalogState.selectedKind = "edge";
    catalogState.selectedId = catalogEdge.dataset.catalogEdge;
    renderCatalog();
    return;
  }

  const graphNode = event.target.closest("[data-graph-node]");
  if (graphNode && !event.target.closest("[data-toggle-node-fields]")) {
    selectGraphNode(graphNode.dataset.graphNode);
    return;
  }

  const expand = event.target.closest("[data-toggle-node-fields]");
  if (expand) {
    const id = expand.dataset.toggleNodeFields;
    const willCollapse = toggleFieldExpansion(id);
    if (willCollapse) {
      removeSelectedFieldsForParent(id);
      graphState.selectedEdgeId = null;
      if (!hasSelectedFields()) graphState.selectedNodeId = id;
    }
    renderGraphPage();
    return;
  }

  const related = event.target.closest("[data-related-node]");
  if (related) {
    graphState.focusId = related.dataset.relatedNode;
    graphState.selectedNodeId = null;
    graphState.selectedEdgeId = related.dataset.miniEdge || null;
    clearSelectedFields();
    openPage("graph");
    return;
  }

  const miniEdge = event.target.closest("[data-mini-edge]");
  if (miniEdge) {
    selectGraphEdgeById(miniEdge.dataset.miniEdge);
    event.stopPropagation();
    return;
  }

  const graphBlank = event.target.closest("#graphViewport")
    && !event.target.closest("[data-graph-node], [data-child-id], [data-graph-edge], button, select, input, textarea, a, [data-filter-dropdown], [data-filter-kind]");
  if (graphBlank) {
    clearGraphSelectionToViewProfile();
    event.stopPropagation();
    return;
  }

  const filter = event.target.closest("[data-filter-kind]");
  if (!filter) return;
  const kind = filter.dataset.filterKind;
  const value = filter.dataset.filterValue;
  if (kind === "catalog-node-type") toggleSet(catalogState.nodeTypes, value);
  if (kind === "catalog-business-edge-type") {
    if (value === BUSINESS_ENTITY_ROUTE_VALUE) toggleBusinessEdgeRoute(catalogState, businessEdgeTypes());
    else toggleSet(catalogState.businessEdgeTypes, value);
  }
  if (kind === "catalog-edge-type") toggleSet(catalogState.edgeTypes, value);
  if (kind === "catalog-tag") toggleSet(catalogState.tags, value);
  if (kind === "graph-node-type") toggleSet(graphState.nodeTypes, value);
  if (kind === "graph-business-edge-type") {
    if (value === BUSINESS_ENTITY_ROUTE_VALUE) toggleBusinessEdgeRoute(graphState, graphBusinessEdgeTypeOptions());
    else toggleSet(graphState.businessEdgeTypes, value);
  }
  if (kind === "graph-edge-type") toggleSet(graphState.edgeTypes, value);
  if (kind === "graph-tag") toggleSet(graphState.tags, value);
  renderAll();
});

document.addEventListener("change", event => {
  const multi = event.target.closest("[data-multi-filter-kind]");
  if (!multi) return;
  updateMultiFilter(multi.dataset.multiFilterKind, multi.dataset.multiFilterValue, multi.checked);
  event.stopPropagation();
});

if (els.catalogSearch) els.catalogSearch.addEventListener("input", event => {
  catalogState.query = event.target.value.trim().toLowerCase();
  renderCatalog();
});
if (els.catalogReset) els.catalogReset.addEventListener("click", resetCatalogFilters);
if (els.openGraph) els.openGraph.addEventListener("click", openSelectionInGraph);
if (els.homeTab) els.homeTab.addEventListener("click", () => openPage("home"));
if (els.graphTab) els.graphTab.addEventListener("click", () => openPage("graph"));
if (els.ontologyTab) els.ontologyTab.addEventListener("click", () => openPage("ontology"));
if (els.semanticTab) els.semanticTab.addEventListener("click", () => openPage("semantic"));
if (els.scenarioTab) els.scenarioTab.addEventListener("click", openScenarioWorkspace);
if (els.graphViewSelector) els.graphViewSelector.addEventListener("change", event => selectGraphViewObject(event.target.value));
if (els.graphScopeSelector) els.graphScopeSelector.addEventListener("change", event => selectGraphViewObject(event.target.value));
if (els.backToCatalog) els.backToCatalog.addEventListener("click", () => openPage("home"));
if (els.scenarioSelect) els.scenarioSelect.addEventListener("change", event => applyScenario(event.target.value, appState.currentPage === "scenarios" ? { page: "scenarios" } : {}));
if (els.scenarioCenterSelect) els.scenarioCenterSelect.addEventListener("change", event => {
  const selected = scenarioByKey(scenarioState.selectedKey);
  if (!selected || selected.kind !== "preset") return;
  const key = scenarioKey(selected.kind, selected.id);
  scenarioState.centerByKey.set(key, event.target.value);
  applyScenario(key, { centerId: event.target.value, page: appState.currentPage === "scenarios" ? "scenarios" : undefined });
});
if (els.openScenarioSave) els.openScenarioSave.addEventListener("click", openScenarioSaveModal);
if (els.scenarioModalClose) els.scenarioModalClose.addEventListener("click", closeScenarioSaveModal);
if (els.scenarioModalCancel) els.scenarioModalCancel.addEventListener("click", closeScenarioSaveModal);
if (els.scenarioModalSaveKind) els.scenarioModalSaveKind.addEventListener("change", () => {
  const saveKind = scenarioSaveKindValue();
  if (els.scenarioModalName) els.scenarioModalName.value = fallbackScenarioName(saveKind);
  if (els.scenarioModalDescription) els.scenarioModalDescription.value = fallbackScenarioDescription(saveKind);
  renderScenarioSaveModalState();
});
if (els.scenarioModalSave) els.scenarioModalSave.addEventListener("click", async () => {
  const ok = await saveCurrentScenario({
    saveKind: scenarioSaveKindValue(),
    name: els.scenarioModalName?.value || "",
    description: els.scenarioModalDescription?.value || "",
  });
  if (ok) closeScenarioSaveModal();
});
if (els.scenarioSaveModal) els.scenarioSaveModal.addEventListener("click", event => {
  if (event.target === els.scenarioSaveModal) closeScenarioSaveModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && els.scenarioSaveModal && !els.scenarioSaveModal.classList.contains("hidden")) closeScenarioSaveModal();
  const scenarioCard = event.target.closest?.("[data-open-scenario]");
  if (scenarioCard && !event.target.closest("[data-delete-scenario]") && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    applyScenario(scenarioCard.dataset.openScenario, scenarioCard.dataset.openScenarioPage === "scenarios" ? { page: "scenarios" } : {});
  }
});
if (els.graphFocusInput) els.graphFocusInput.addEventListener("input", event => renderGraphFocusResults(event.target.value, true));
if (els.graphFocusInput) els.graphFocusInput.addEventListener("focus", event => renderGraphFocusResults(event.target.value, true));
if (els.graphFocusInput) els.graphFocusInput.addEventListener("blur", () => setTimeout(hideGraphFocusResults, 120));
if (els.graphFocusInput) els.graphFocusInput.addEventListener("change", event => applyGraphFocusSearchValue(event.target.value));
if (els.graphFocusInput) els.graphFocusInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    event.preventDefault();
    applyGraphFocusSearchValue(event.target.value);
  }
  if (event.key === "Escape") hideGraphFocusResults();
});
if (els.graphFocusResults) els.graphFocusResults.addEventListener("mousedown", event => {
  const option = event.target.closest("[data-focus-node]");
  if (!option) return;
  event.preventDefault();
  applyGraphFocusSearchValue(option.dataset.focusNode);
});
els.restoreHidden.addEventListener("click", restoreAllHiddenNodes);
els.depth.addEventListener("input", event => {
  graphState.maxDepth = Number(event.target.value);
  renderGraphPage();
});
els.graphReset.addEventListener("click", resetGraphFilters);
els.fit.addEventListener("click", fitGraph);
els.expandSelected.addEventListener("click", () => {
  const open = !allVisibleFieldNodesExpanded();
  setAllVisibleFields(open);
  if (!open) {
    clearSelectedFields();
    graphState.selectedEdgeId = null;
  }
  renderGraphPage();
});
document.addEventListener("pointerdown", startGraphNodeDrag);
document.addEventListener("pointermove", dragGraphNode);
document.addEventListener("pointerup", endGraphNodeDrag);
document.addEventListener("pointercancel", endGraphNodeDrag);
document.addEventListener("mousedown", startGraphNodeDrag);
document.addEventListener("mousemove", dragGraphNode);
document.addEventListener("mouseup", endGraphNodeDrag);

applyUrlState();
loadServerScenarios();






