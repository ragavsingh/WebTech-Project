import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Activity, 
  Layers, 
  Box, 
  FlaskConical, 
  ArrowRight, 
  ExternalLink,
  Search,
  Filter,
  Server,
  Zap,
  Share2,
  Sparkles,
  Bot,
  Radio,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import Breadcrumb from '../components/layout/Breadcrumb';
import SimulationRegistry from '../components/simulations/SimulationRegistry';

export const ALL_PLAYGROUND_SIMULATORS = [
  // Unit 1
  {
    id: 'dns',
    simulationType: 'dns-flow',
    name: 'DNS Resolution Inspector',
    unit: 'Unit 1: Fundamentals',
    unitId: 'unit-1',
    topicId: 'dns-resolution',
    icon: Globe,
    description: 'Simulate full iterative queries from client cache through Recursive Resolver, Root, TLD, and Authoritative Nameservers.'
  },
  {
    id: 'http',
    simulationType: 'http-lifecycle',
    name: 'HTTP Wire Protocol Inspector',
    unit: 'Unit 1: Fundamentals',
    unitId: 'unit-1',
    topicId: 'http-protocol',
    icon: Activity,
    description: 'Craft custom HTTP requests with different verbs, headers, and status codes (200, 301, 404, 500) and inspect raw headers.'
  },
  {
    id: 'pop3-vs-imap',
    simulationType: 'pop3-vs-imap',
    name: 'POP3 vs. IMAP Multi-Device Sync',
    unit: 'Unit 1: Protocols',
    unitId: 'unit-1',
    topicId: 'pop3-vs-imap',
    icon: Server,
    description: 'Compare download-and-delete mailbox behavior (POP3) with multi-client folder flag synchronization (IMAP).'
  },
  {
    id: 'browser-pipeline',
    simulationType: 'browser-pipeline',
    name: 'Browser Rendering Engine Pipeline',
    unit: 'Unit 1: Architecture',
    unitId: 'unit-1',
    topicId: 'web-browsers',
    icon: Layers,
    description: 'Step through HTML tokenization, DOM construction, CSSOM cascade, Render Tree synthesis, Layout geometry, and Paint.'
  },
  {
    id: 'follow-web-request',
    simulationType: 'follow-a-web-request',
    name: 'Follow a Web Request Capstone',
    unit: 'Unit 1: Capstone',
    unitId: 'unit-1',
    topicId: 'follow-a-web-request',
    icon: Globe,
    description: 'Trace an end-to-end web transaction from browser URL bar to DNS, TCP, TLS 1.3 handshake, HTTP server processing, and DOM paint.'
  },

  // Unit 2
  {
    id: 'html-elements',
    simulationType: 'html-elements',
    name: 'HTML Lists, Tables & Media Sandbox',
    unit: 'Unit 2: HTML & XML',
    unitId: 'unit-2',
    topicId: 'html-lists-tables-images',
    icon: Box,
    description: 'Interactive editor for ordered/unordered lists, multi-span HTML table grids, and responsive images.'
  },
  {
    id: 'form-builder',
    simulationType: 'form-builder',
    name: 'Interactive Form Builder Sandbox',
    unit: 'Unit 2: HTML & XML',
    unitId: 'unit-2',
    topicId: 'html-forms-frames',
    icon: Box,
    description: 'Drag, configure, and validate HTML5 form inputs with instant client-side constraint validation regex.'
  },
  {
    id: 'dhtml-events',
    simulationType: 'dhtml-events',
    name: 'DHTML & Event Lifecycle Simulator',
    unit: 'Unit 2: HTML & XML',
    unitId: 'unit-2',
    topicId: 'dhtml-javascript',
    icon: Zap,
    description: 'Visualize DOM Level 2/3 Event Bubbling, Event Capturing, and dynamic style mutation via JavaScript.'
  },
  {
    id: 'dom-explorer',
    simulationType: 'dom-explorer',
    name: 'DOM Tree Hierarchy & Mutation',
    unit: 'Unit 2: HTML & XML',
    unitId: 'unit-2',
    topicId: 'object-models-dom',
    icon: Layers,
    description: 'Directly append, delete, traverse, and inspect live Document Object Model nodes and observe paint triggers.'
  },
  {
    id: 'xml-schema',
    simulationType: 'xml-schema',
    name: 'XML Schema (XSD) Validator',
    unit: 'Unit 2: HTML & XML',
    unitId: 'unit-2',
    topicId: 'xml-schema-validation',
    icon: Server,
    description: 'Validate raw XML documents against strict XSD type constraints, minOccurs/maxOccurs, and regex patterns.'
  },
  {
    id: 'xsl-transform',
    simulationType: 'xsl-transform',
    name: 'XSLT Transformation Engine',
    unit: 'Unit 2: HTML & XML',
    unitId: 'unit-2',
    topicId: 'presentation-xsl',
    icon: Sparkles,
    description: 'Transform raw structured XML records into styled HTML presentation tables using declarative XSL stylesheets.'
  },
  {
    id: 'dom-vs-sax',
    simulationType: 'dom-vs-sax',
    name: 'XML Processing: DOM vs. SAX',
    unit: 'Unit 2: HTML & XML',
    unitId: 'unit-2',
    topicId: 'dom-vs-sax',
    icon: Layers,
    description: 'Side-by-side memory and throughput comparison between in-memory DOM tree loading vs. streaming SAX event callbacks.'
  },

  // Unit 3
  {
    id: 'ws-architecture',
    simulationType: 'ws-architecture',
    name: 'SOA Triangle: Service Provider & Consumer',
    unit: 'Unit 3: Web Services',
    unitId: 'unit-3',
    topicId: 'web-service-architecture',
    icon: Server,
    description: 'Interact with the foundational SOA Triangle: Service Provider publishes WSDL to UDDI, Consumer binds via SOAP.'
  },
  {
    id: 'uddi-discovery',
    simulationType: 'uddi-discovery',
    name: 'UDDI Business Registry Explorer',
    unit: 'Unit 3: Web Services',
    unitId: 'unit-3',
    topicId: 'uddi-registry',
    icon: Search,
    description: 'Simulate white pages, yellow pages, and green pages business lookups and inspect binding templates.'
  },
  {
    id: 'soap-builder',
    simulationType: 'soap-builder',
    name: 'SOAP 1.2 Message Envelope Builder',
    unit: 'Unit 3: Web Services',
    unitId: 'unit-3',
    topicId: 'soap-protocol',
    icon: Server,
    description: 'Craft SOAP Envelopes, configure WS-Security headers, define RPC bodies, and simulate Fault payloads.'
  },
  {
    id: 'wsdl-explorer',
    simulationType: 'wsdl-explorer',
    name: 'WSDL Contract Interface Inspector',
    unit: 'Unit 3: Web Services',
    unitId: 'unit-3',
    topicId: 'wsdl-contracts',
    icon: Activity,
    description: 'Deconstruct WSDL documents: types, messages, portTypes, operations, bindings, and service endpoints.'
  },
  {
    id: 'ajax-comparison',
    simulationType: 'ajax-comparison',
    name: 'AJAX vs Traditional Page Refresh',
    unit: 'Unit 3: Web Services',
    unitId: 'unit-3',
    topicId: 'ajax-foundations',
    icon: Zap,
    description: 'Compare synchronous white-screen page reload latency with smooth, non-blocking asynchronous background updates.'
  },
  {
    id: 'ajax-programming',
    simulationType: 'ajax-programming',
    name: 'AJAX Code Sandbox (XHR & Fetch)',
    unit: 'Unit 3: Web Services',
    unitId: 'unit-3',
    topicId: 'programming-in-ajax',
    icon: Activity,
    description: 'Run live XMLHttpRequest readyState transitions and modern async/await Fetch API requests in an interactive console.'
  },
  {
    id: 'corba-architecture',
    simulationType: 'corba-architecture',
    name: 'CORBA Object Request Broker (ORB)',
    unit: 'Unit 3: Web Services',
    unitId: 'unit-3',
    topicId: 'corba-architecture',
    icon: Server,
    description: 'Trace remote method invocations across heterogeneous languages via OMG IDL, client stubs, IIOP, and server skeletons.'
  },

  // Unit 4
  {
    id: 'web-evolution-timeline',
    simulationType: 'web-evolution-timeline',
    name: 'Web Evolution Timeline (1.0 → 2.0 → 3.0)',
    unit: 'Unit 4: Evolution',
    unitId: 'unit-4',
    topicId: 'web20-evolution',
    icon: Sparkles,
    description: 'Interactive timeline spanning static brochureware, user-generated read-write social apps, and semantic knowledge graphs.'
  },
  {
    id: 'social-web-sim',
    simulationType: 'social-web-sim',
    name: 'Social Web Sandbox (Blogs, Wikis, Feeds)',
    unit: 'Unit 4: Evolution',
    unitId: 'unit-4',
    topicId: 'interactive-social-web',
    icon: Share2,
    description: 'Interactive multi-tool: publish blog posts, edit collaborative wikis with version diffs, and interact with social feeds.'
  },
  {
    id: 'rss-reader-sim',
    simulationType: 'rss-reader-sim',
    name: 'RSS 2.0 Syndication & Aggregator',
    unit: 'Unit 4: Evolution',
    unitId: 'unit-4',
    topicId: 'rss-syndication',
    icon: Activity,
    description: 'Parse raw XML RSS feeds into human-friendly cards, inspect `<guid>` tags, and test cache conditional headers.'
  },
  {
    id: 'rails-mvc-sim',
    simulationType: 'rails-mvc-sim',
    name: 'Ruby on Rails MVC Request Flow',
    unit: 'Unit 4: Evolution',
    unitId: 'unit-4',
    topicId: 'ruby-on-rails-mvc',
    icon: Server,
    description: 'Step-by-step trace from browser router to ArticlesController, ActiveRecord Model SQL, and ERB View template rendering.'
  },
  {
    id: 'open-api-explorer',
    simulationType: 'open-api-explorer',
    name: 'RESTful Open API Sandbox',
    unit: 'Unit 4: Evolution',
    unitId: 'unit-4',
    topicId: 'open-apis-rest',
    icon: Activity,
    description: 'Interact with mock REST endpoints, supply Bearer tokens, inspect rate-limiting headers, and examine JSON payloads.'
  },
  {
    id: 'semantic-web-sim',
    simulationType: 'semantic-web-sim',
    name: 'Semantic Web & JSON-LD Parser',
    unit: 'Unit 4: Evolution',
    unitId: 'unit-4',
    topicId: 'web30-semantic-web',
    icon: Sparkles,
    description: 'Compare unstructured HTML strings with Schema.org JSON-LD structured knowledge graphs parsed by automated AI crawlers.'
  },
  {
    id: 'rdf-triple-visualizer',
    simulationType: 'rdf-triple-visualizer',
    name: 'RDF Triple Knowledge Graph Builder',
    unit: 'Unit 4: Evolution',
    unitId: 'unit-4',
    topicId: 'rdf-triples',
    icon: Sparkles,
    description: 'Compose Subject-Predicate-Object statements and visualize the connected graph serialized to Turtle, N-Triples, or JSON-LD.'
  },
  {
    id: 'widgets-dashboard',
    simulationType: 'widgets-dashboard',
    name: 'Embeddable Web Widgets Dashboard',
    unit: 'Unit 4: Evolution',
    unitId: 'unit-4',
    topicId: 'web-widgets',
    icon: Box,
    description: 'Compose live modular client widgets (Weather, Crypto Ticker, World Clock) and inspect sandboxed iframe embed codes.'
  },
  {
    id: 'mashup-architecture',
    simulationType: 'mashup-architecture',
    name: 'Multi-Source API Travel Mashup',
    unit: 'Unit 4: Evolution',
    unitId: 'unit-4',
    topicId: 'web-mashups',
    icon: Globe,
    description: 'Synthesize three independent APIs (Maps, Weather, Attractions) into a single client dashboard with error tolerance.'
  },
  {
    id: 'search-engine-pipeline',
    simulationType: 'search-engine-pipeline',
    name: 'Search Engine Indexing & PageRank',
    unit: 'Unit 4: Evolution',
    unitId: 'unit-4',
    topicId: 'search-engines',
    icon: Search,
    description: '4-phase search engine simulation: Web Spider Crawler → Inverted Indexing → PageRank Scoring → Instant SERP Query.'
  },
  {
    id: 'recommender-system-sim',
    simulationType: 'recommender-system-sim',
    name: 'Recommender System Engine',
    unit: 'Unit 4: Evolution',
    unitId: 'unit-4',
    topicId: 'recommender-systems',
    icon: Bot,
    description: 'Compare Content-Based Vector Cosine Similarity against Collaborative Filtering matrix factorization with transparency scores.'
  },
  {
    id: 'edge-computing-sim',
    simulationType: 'edge-computing-sim',
    name: 'Edge CDN vs Origin Cloud Latency Race',
    unit: 'Unit 4: Evolution',
    unitId: 'unit-4',
    topicId: 'edge-computing',
    icon: Zap,
    description: 'Live interactive packet race comparing 14ms Edge CDN PoP response times against 160ms centralized origin round-trips.'
  },
  {
    id: 'dark-mode-inspector',
    simulationType: 'dark-mode-inspector',
    name: 'Dark Mode Tokens & WCAG Contrast',
    unit: 'Unit 4: Evolution',
    unitId: 'unit-4',
    topicId: 'dark-mode-web',
    icon: Sparkles,
    description: 'Toggle theme modes, inspect CSS custom properties (`--bg-primary`), and evaluate WCAG AA/AAA contrast ratios.'
  },

  // Unit 5
  {
    id: 'web40-future',
    simulationType: 'web40-future-sim',
    name: 'Web 4.0 Symbiotic Future Web',
    unit: 'Unit 5: Future Web',
    unitId: 'unit-5',
    topicId: 'web40-future-web',
    icon: Cpu,
    description: 'Explore the proactive symbiotic web: autonomous AI agents, ambient sensor correlation, and engineering reality vs hype.'
  },
  {
    id: 'ai-personalized',
    simulationType: 'ai-personalized-web-sim',
    name: 'AI Personalization & WebGPU Sandbox',
    unit: 'Unit 5: Future Web',
    unitId: 'unit-5',
    topicId: 'ai-powered-web',
    icon: Bot,
    description: 'Interactive user persona sliders recalculating cosine embeddings, client-side WebGPU inference, and filter bubble mitigation.'
  },
  {
    id: 'dweb-network',
    simulationType: 'dweb-network-sim',
    name: 'Decentralized P2P Mesh Network',
    unit: 'Unit 5: Future Web',
    unitId: 'unit-5',
    topicId: 'decentralized-web-dweb',
    icon: Radio,
    description: 'Terminate nodes in centralized vs decentralized mesh networks to observe single points of failure vs self-healing routing.'
  },
  {
    id: 'blockchain-integration',
    simulationType: 'blockchain-integration-sim',
    name: 'Blockchain Cryptographic Ledger',
    unit: 'Unit 5: Future Web',
    unitId: 'unit-5',
    topicId: 'blockchain-integration-web',
    icon: ShieldCheck,
    description: 'Inspect SHA-256 blocks, tamper with historical transaction data, observe hash invalidation, and re-mine consensus.'
  },
  {
    id: 'iot-dashboard',
    simulationType: 'iot-dashboard-sim',
    name: 'IoT & Web of Things Smart Facility',
    unit: 'Unit 5: Future Web',
    unitId: 'unit-5',
    topicId: 'iot-web-development',
    icon: Radio,
    description: 'Simulated smart facility dashboard: monitor live thermal/humidity telemetry and actuate fans and door locks via MQTT.'
  },
  {
    id: 'web-ar',
    simulationType: 'web-ar-sim',
    name: 'WebAR 3D Model & Plane Inspector',
    unit: 'Unit 5: Future Web',
    unitId: 'unit-5',
    topicId: 'augmented-reality-web',
    icon: Box,
    description: 'Camera viewport simulator: detect SLAM surface planes, raycast hit-test, and translate/rotate/scale 3D models.'
  },
  {
    id: 'web-vr',
    simulationType: 'web-vr-sim',
    name: 'WebVR 3D Spatial Room Environment',
    unit: 'Unit 5: Future Web',
    unitId: 'unit-5',
    topicId: 'virtual-reality-web',
    icon: Layers,
    description: 'Real-time 3D spatial room rendered with CSS 3D matrix transforms, orbit drag camera controls, and wireframe shaders.'
  },
  {
    id: 'smart-web',
    simulationType: 'smart-web-sim',
    name: 'Smart Web Context-Aware Engine',
    unit: 'Unit 5: Future Web',
    unitId: 'unit-5',
    topicId: 'smart-web-context',
    icon: Zap,
    description: 'Simulate fluctuating physical environments (bright sunlight, driving, low battery) triggering proactive UI calibration.'
  },
  {
    id: 'adaptive-interface',
    simulationType: 'adaptive-interface-sim',
    name: 'Adaptive Interface Accessibility Sandbox',
    unit: 'Unit 5: Future Web',
    unitId: 'unit-5',
    topicId: 'adaptive-interfaces',
    icon: Box,
    description: 'Switch between mobile/tablet/desktop viewports and toggle high-contrast, reduced-motion, and fluid typography.'
  },
  {
    id: 'web-automation',
    simulationType: 'web-automation-sim',
    name: 'Web Automation & Webhooks Pipeline',
    unit: 'Unit 5: Future Web',
    unitId: 'unit-5',
    topicId: 'web-automation-workflows',
    icon: Activity,
    description: 'Construct Trigger → Condition → Action → Result workflows with live payload dispatch and HMAC SHA-256 signatures.'
  },
  {
    id: 'five-g-impact',
    simulationType: 'five-g-impact-sim',
    name: '5G & Edge Web Network Laboratory',
    unit: 'Unit 5: Future Web',
    unitId: 'unit-5',
    topicId: 'impact-5g-web',
    icon: Radio,
    description: 'Real-time comparison of 3G, 4G, 5G, and 5G MEC latency, bandwidth, device density, and network slicing.'
  },
  {
    id: 'build-future-web',
    simulationType: 'build-future-web-lab',
    name: 'Build the Future Web Capstone Lab',
    unit: 'Unit 5: Capstone',
    unitId: 'unit-5',
    topicId: 'unit5-future-web-lab',
    icon: Cpu,
    description: 'Synthesize AI, IoT, Edge CDN, Blockchain, and Adaptive UI into an integrated smart hub with 4 progressive challenges.'
  }
];

export default function PlaygroundPage() {
  const [activeUnitFilter, setActiveUnitFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSimId, setSelectedSimId] = useState('dns');

  const unitTabs = [
    { id: 'all', label: 'All Units' },
    { id: 'unit-1', label: 'Unit 1: Fundamentals' },
    { id: 'unit-2', label: 'Unit 2: HTML & XML' },
    { id: 'unit-3', label: 'Unit 3: Web Services' },
    { id: 'unit-4', label: 'Unit 4: Web 2.0 to 3.0' },
    { id: 'unit-5', label: 'Unit 5: Future Web' }
  ];

  const filteredSimulators = ALL_PLAYGROUND_SIMULATORS.filter(sim => {
    const matchesUnit = activeUnitFilter === 'all' || sim.unitId === activeUnitFilter;
    const matchesSearch = searchQuery.trim() === '' || 
      sim.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sim.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sim.unit.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesUnit && matchesSearch;
  });

  const currentSim = ALL_PLAYGROUND_SIMULATORS.find(s => s.id === selectedSimId) || ALL_PLAYGROUND_SIMULATORS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Simulation Playground' }]} />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center space-x-2 text-indigo-700 font-mono text-xs font-semibold uppercase tracking-wider">
            <FlaskConical className="w-4 h-4 text-indigo-600" />
            <span>Interactive Sandbox Hub &bull; {ALL_PLAYGROUND_SIMULATORS.length} Simulators Available</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Web Technology Simulation Hub
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
            Directly test, mutate, and experiment with network protocols, DOM tree structures, XML schemas, SOAP envelopes, RDF graphs, and WebXR scenes.
          </p>
        </div>

        <Link
          to="/journey"
          className="px-4 py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-bold transition-all flex items-center space-x-2 shrink-0 self-start md:self-auto"
        >
          <span>View Web Journey Sequence</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Controls Bar: Search & Unit Filter */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card p-4 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 40+ interactive simulators..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <span className="text-xs text-slate-400 font-mono">
            Showing {filteredSimulators.length} of {ALL_PLAYGROUND_SIMULATORS.length} Simulators
          </span>
        </div>

        {/* Unit Tabs */}
        <div className="flex items-center space-x-1.5 overflow-x-auto border-t border-slate-100 pt-3 pb-1">
          {unitTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveUnitFilter(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeUnitFilter === tab.id
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/70'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Fast Simulator Switcher Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 max-h-48 overflow-y-auto p-1 bg-slate-100/50 rounded-2xl border border-slate-200/70">
        {filteredSimulators.map(sim => {
          const isSelected = selectedSimId === sim.id;
          const Icon = sim.icon;
          return (
            <button
              key={sim.id}
              onClick={() => setSelectedSimId(sim.id)}
              className={`p-2.5 rounded-xl border text-left flex items-center space-x-2.5 transition-all text-xs ${
                isSelected
                  ? 'bg-indigo-600 text-white font-bold border-indigo-600 shadow-xs'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-indigo-600'}`} />
              <span className="truncate">{sim.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Simulator Header Banner */}
      <div className="bg-gradient-to-r from-indigo-50 via-white to-blue-50/50 rounded-2xl p-5 border border-indigo-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-card">
        <div className="flex items-center space-x-3.5">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs shrink-0">
            <currentSim.icon className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold text-indigo-700 uppercase bg-indigo-100/80 px-2 py-0.5 rounded">
                {currentSim.unit}
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
              {currentSim.name}
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
              {currentSim.description}
            </p>
          </div>
        </div>

        <Link
          to={`/topic/${currentSim.topicId}`}
          className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-indigo-700 border border-indigo-200 text-xs font-bold transition-all flex items-center space-x-1.5 shrink-0 shadow-2xs self-start sm:self-auto"
        >
          <span>Topic Notes &amp; Quiz</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Active Simulator Live Surface */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-card p-4 sm:p-6 min-h-[450px]">
        <SimulationRegistry type={currentSim.simulationType} />
      </div>
    </div>
  );
}
