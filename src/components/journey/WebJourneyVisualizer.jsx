import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  FileCode, 
  Network, 
  Search, 
  Layers, 
  Zap, 
  Server, 
  Share2, 
  Sparkles, 
  Cpu, 
  Radio, 
  ShieldCheck, 
  Bot, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ChevronRight,
  ExternalLink,
  Milestone
} from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';

export const JOURNEY_MILESTONES = [
  {
    id: 'internet',
    number: 1,
    title: 'Internet',
    subtitle: 'Packet Switching & ARPANET',
    era: 'Genesis (1969-1989)',
    unitId: 'unit-1',
    topicId: 'history-of-the-internet',
    icon: Globe,
    color: 'from-blue-600 to-indigo-600',
    accentColor: 'blue',
    summary: 'The decentralized packet-switching foundation replacing circuit switching, establishing TCP/IP and global machine addressability.',
    evolutionToNext: 'Once computers could reliably route raw packets to IP addresses, humanity needed a universal hypermedia application layer: the World Wide Web.',
    keyConcept: 'Packets over circuits; TCP/IP protocol suite'
  },
  {
    id: 'www',
    number: 2,
    title: 'WWW',
    subtitle: 'Hypertext & Client-Server',
    era: 'Genesis (1989-1993)',
    unitId: 'unit-1',
    topicId: 'world-wide-web',
    icon: Compass,
    color: 'from-indigo-600 to-blue-600',
    accentColor: 'indigo',
    summary: 'Tim Berners-Lee introduces URLs, HTTP, and HTML at CERN, transforming internetworking from terminal shell sessions into linked digital documents.',
    evolutionToNext: 'To read and display these linked documents, standardized markup, visual presentation, and client scripting were born.',
    keyConcept: 'Uniform Resource Locators (URLs) and stateless request-response'
  },
  {
    id: 'html-css-js',
    number: 3,
    title: 'HTML / CSS / JS',
    subtitle: 'The Web Presentation Triad',
    era: 'Web 1.0 (1993-1998)',
    unitId: 'unit-1',
    topicId: 'html-foundations',
    icon: FileCode,
    color: 'from-blue-600 to-cyan-600',
    accentColor: 'cyan',
    summary: 'The triad of web presentation: HTML provides semantic structure, CSS delivers visual styling, and JavaScript provides client-side interactivity.',
    evolutionToNext: 'Documents and assets needed a universal, reliable application transport protocol to traverse the internet: HTTP.',
    keyConcept: 'Separation of concerns: Structure, Style, Behavior'
  },
  {
    id: 'http',
    number: 4,
    title: 'HTTP',
    subtitle: 'Hypertext Transfer Protocol',
    era: 'Web 1.0 (1996-1999)',
    unitId: 'unit-1',
    topicId: 'http-protocol',
    icon: Network,
    color: 'from-cyan-600 to-teal-600',
    accentColor: 'teal',
    summary: 'The application-layer wire protocol structuring requests (GET, POST), headers, status codes (200, 404, 500), and MIME payloads.',
    evolutionToNext: 'Human users cannot memorize 32-bit numerical IP addresses for every server, requiring a global hierarchical name registry: DNS.',
    keyConcept: 'Stateless protocol, verb semantics, headers, status codes'
  },
  {
    id: 'dns',
    number: 5,
    title: 'DNS',
    subtitle: 'Domain Name Resolution',
    era: 'Infrastructure',
    unitId: 'unit-1',
    topicId: 'dns-resolution',
    icon: Search,
    color: 'from-teal-600 to-emerald-600',
    accentColor: 'emerald',
    summary: 'The global distributed hierarchical database mapping human-friendly hostnames (webtech.edu) to machine IP addresses via recursive and authoritative resolvers.',
    evolutionToNext: 'Once HTML documents arrived in the browser, the browser engine needed an in-memory object tree for programmatic manipulation: the DOM.',
    keyConcept: 'Hierarchical name resolution: Root, TLD, Authoritative'
  },
  {
    id: 'dom',
    number: 6,
    title: 'DOM',
    subtitle: 'Document Object Model',
    era: 'DHTML Era (1997-2002)',
    unitId: 'unit-2',
    topicId: 'object-models-dom',
    icon: Layers,
    color: 'from-emerald-600 to-green-600',
    accentColor: 'green',
    summary: 'The hierarchical in-memory tree representation of the HTML document, exposing nodes and event listeners for real-time JavaScript manipulation.',
    evolutionToNext: 'Modifying the DOM was powerful, but refreshing the entire page every time the user needed new server data was slow, leading to AJAX.',
    keyConcept: 'Nodes, trees, event bubbling, live DOM mutation'
  },
  {
    id: 'ajax',
    number: 7,
    title: 'AJAX',
    subtitle: 'Asynchronous Background Data',
    era: 'Web 2.0 Dawn (2005)',
    unitId: 'unit-3',
    topicId: 'ajax-foundations',
    icon: Zap,
    color: 'from-amber-600 to-orange-600',
    accentColor: 'amber',
    summary: 'Asynchronous JavaScript and XML allows browsers to exchange data with servers in the background without reloading the page, giving web apps desktop-like fluidity.',
    evolutionToNext: 'Client-server calls needed standardized cross-platform contracts and protocols for enterprise B2B communication: Web Services.',
    keyConcept: 'XMLHttpRequest/Fetch, non-blocking asynchronous I/O'
  },
  {
    id: 'web-services',
    number: 8,
    title: 'Web Services',
    subtitle: 'SOAP, WSDL & UDDI',
    era: 'Enterprise SOA (2000-2008)',
    unitId: 'unit-3',
    topicId: 'intro-web-services',
    icon: Server,
    color: 'from-orange-600 to-rose-600',
    accentColor: 'orange',
    summary: 'Language-independent distributed computing using standardized XML envelopes (SOAP), machine-readable contracts (WSDL), and discovery registries (UDDI).',
    evolutionToNext: 'Heavyweight XML SOAP protocols gave way to lightweight, flexible, JSON-based programmatic web interfaces: RESTful Open APIs.',
    keyConcept: 'Service-Oriented Architecture (SOA), contractual interoperability'
  },
  {
    id: 'apis',
    number: 9,
    title: 'Open APIs',
    subtitle: 'REST & Programmable Web',
    era: 'API Economy (2006-2015)',
    unitId: 'unit-4',
    topicId: 'open-apis-rest',
    icon: Network,
    color: 'from-rose-600 to-purple-600',
    accentColor: 'rose',
    summary: 'Lightweight RESTful JSON interfaces enabling third-party developers to compose mashups, widgets, and multi-service software ecosystems.',
    evolutionToNext: 'With open APIs, browsers evolved from passive brochure readers into social, participatory, user-generated collaboration hubs: Web 2.0.',
    keyConcept: 'REST constraints, JSON resources, HTTP verbs as actions'
  },
  {
    id: 'web20',
    number: 10,
    title: 'Web 2.0',
    subtitle: 'The Participatory Social Web',
    era: 'Social Web (2004-2016)',
    unitId: 'unit-4',
    topicId: 'web20-evolution',
    icon: Share2,
    color: 'from-purple-600 to-indigo-600',
    accentColor: 'purple',
    summary: 'The transition from read-only static pages to participatory platforms: blogs, wikis, social networks, dynamic MVC frameworks, and SaaS.',
    evolutionToNext: 'Human-readable social text could not be easily reasoned over by computers; the web needed machine-readable linked data: the Semantic Web.',
    keyConcept: 'Read-write web, user-generated content, network effects'
  },
  {
    id: 'semantic-web',
    number: 11,
    title: 'Semantic Web',
    subtitle: 'RDF Triples & Linked Data',
    era: 'Web 3.0 / Semantics',
    unitId: 'unit-4',
    topicId: 'web30-semantic-web',
    icon: Sparkles,
    color: 'from-indigo-600 to-violet-600',
    accentColor: 'indigo',
    summary: 'Structuring information into unambiguous RDF triples (Subject-Predicate-Object) and ontologies, allowing search engines and automated agents to understand meaning.',
    evolutionToNext: 'Semantic knowledge graphs laid the groundwork for neural reasoning engines and machine learning in web applications: AI-Powered Web.',
    keyConcept: 'Machine-readable meaning, ontologies, knowledge graphs'
  },
  {
    id: 'ai',
    number: 12,
    title: 'AI-Powered Web',
    subtitle: 'Neural Models & WebGPU',
    era: 'Intelligence Era (2020+)',
    unitId: 'unit-5',
    topicId: 'ai-powered-web',
    icon: Bot,
    color: 'from-violet-600 to-fuchsia-600',
    accentColor: 'violet',
    summary: 'Machine learning inference inside the browser via WebGPU and WebAssembly, delivering real-time personalization, semantic search, and predictive interfaces.',
    evolutionToNext: 'AI required real-world sensory context and physical hardware connectivity, expanding the web into the physical world: IoT.',
    keyConcept: 'On-device neural inference, dynamic personalization, WebGPU'
  },
  {
    id: 'iot',
    number: 13,
    title: 'IoT & WoT',
    subtitle: 'Web of Things & Telemetry',
    era: 'Pervasive Web',
    unitId: 'unit-5',
    topicId: 'iot-web-development',
    icon: Radio,
    color: 'from-fuchsia-600 to-pink-600',
    accentColor: 'fuchsia',
    summary: 'Connecting billions of physical sensors, microcontrollers, and actuators to web dashboards via lightweight MQTT, WebSockets, and Digital Twins.',
    evolutionToNext: 'With billions of devices exchanging value and telemetry, trustless, tamper-evident verification was required: Blockchain.',
    keyConcept: 'Web of Things (WoT), MQTT telemetry, sensor-to-cloud streams'
  },
  {
    id: 'blockchain',
    number: 14,
    title: 'Blockchain & DWeb',
    subtitle: 'Trustless Ledgers & P2P',
    era: 'Decentralized Era',
    unitId: 'unit-5',
    topicId: 'blockchain-integration-web',
    icon: ShieldCheck,
    color: 'from-pink-600 to-rose-600',
    accentColor: 'pink',
    summary: 'Cryptographically linked immutable blocks, content-addressed P2P storage (IPFS), decentralized identity (DID), and trustless smart contract execution.',
    evolutionToNext: 'All these paradigms converge into the symbiotic, autonomous, context-aware web: Web 4.0 & The Future Web.',
    keyConcept: 'Content addressing, cryptographic immutability, consensus'
  },
  {
    id: 'future-web',
    number: 15,
    title: 'Future Web',
    subtitle: 'Web 4.0, WebXR & 5G Edge',
    era: 'Symbiotic Era (Horizon)',
    unitId: 'unit-5',
    topicId: 'web40-future-web',
    icon: Cpu,
    color: 'from-rose-600 to-indigo-600',
    accentColor: 'rose',
    summary: 'The intelligent symbiotic convergence of autonomous AI agents, spatial computing (WebXR AR/VR), sub-5ms 5G edge computing, and adaptive interfaces.',
    evolutionToNext: 'Complete mastery of the full web stack: you have traced the entire evolutionary arc of Web Technology!',
    keyConcept: 'Context + Data + AI + Automation = Symbiotic Experience'
  }
];

export default function WebJourneyVisualizer() {
  const { isTopicCompleted } = useProgress();
  const [selectedMilestone, setSelectedMilestone] = useState(JOURNEY_MILESTONES[0]);
  const [activeEraFilter, setActiveEraFilter] = useState('all');

  const eraCategories = [
    { id: 'all', label: 'Complete Journey (15 Steps)' },
    { id: 'genesis', label: 'Genesis (Internet → HTTP)', range: [0, 4] },
    { id: 'architecture', label: 'Architecture & Dynamic (DNS → APIs)', range: [4, 9] },
    { id: 'social-semantic', label: 'Social & Semantic (Web 2.0 → Semantics)', range: [9, 11] },
    { id: 'future', label: 'Future & Intelligence (AI → Future Web)', range: [11, 15] }
  ];

  const filteredMilestones = JOURNEY_MILESTONES.filter((m, idx) => {
    if (activeEraFilter === 'all') return true;
    const cat = eraCategories.find(c => c.id === activeEraFilter);
    return cat ? idx >= cat.range[0] && idx < cat.range[1] : true;
  });

  const completedCount = JOURNEY_MILESTONES.filter(m => isTopicCompleted(m.topicId)).length;
  const progressPercent = Math.round((completedCount / JOURNEY_MILESTONES.length) * 100);

  return (
    <div className="space-y-8">
      {/* Journey Progress Overview Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 bottom-0 w-64 h-64 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold">
              <Milestone className="w-3.5 h-3.5" />
              <span>Full Syllabus Evolutionary Path</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              The Web Technology Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Trace how packet-switched networking evolved into the World Wide Web, through dynamic client-side presentation, enterprise services, the social web, and into autonomous, AI-powered spatial computing.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 p-5 shrink-0 flex flex-col items-center justify-center min-w-[200px] text-center">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-200">
              Journey Mastery
            </span>
            <div className="text-4xl font-black text-white mt-1">
              {progressPercent}%
            </div>
            <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mt-3">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-[11px] text-slate-300 font-mono mt-2">
              {completedCount} of {JOURNEY_MILESTONES.length} Milestones Explored
            </span>
          </div>
        </div>

        {/* Filter Era Bar */}
        <div className="relative z-10 flex items-center gap-2 overflow-x-auto pt-6 mt-6 border-t border-white/10">
          {eraCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveEraFilter(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeEraFilter === cat.id
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Pipeline Track */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-card p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">
            Interactive Node Sequence (Click to Inspect)
          </h3>
          <span className="text-xs text-slate-400 hidden sm:inline">
            Each milestone connects seamlessly to the next
          </span>
        </div>

        {/* Horizontal Scrollable Node Chain */}
        <div className="overflow-x-auto pb-4 pt-2">
          <div className="flex items-center min-w-max space-x-2">
            {JOURNEY_MILESTONES.map((m, idx) => {
              const Icon = m.icon;
              const isSelected = selectedMilestone.id === m.id;
              const isCompleted = isTopicCompleted(m.topicId);
              const isLast = idx === JOURNEY_MILESTONES.length - 1;

              return (
                <React.Fragment key={m.id}>
                  <button
                    onClick={() => setSelectedMilestone(m)}
                    className={`group relative flex flex-col items-center p-3 rounded-2xl border transition-all text-center w-28 shrink-0 ${
                      isSelected
                        ? 'bg-indigo-50/90 border-indigo-500 shadow-sm ring-2 ring-indigo-200'
                        : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200'
                    }`}
                  >
                    {/* Step Number Tag */}
                    <div className="flex items-center justify-between w-full mb-2">
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        #{String(m.number).padStart(2, '0')}
                      </span>
                      {isCompleted ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-slate-300" />
                      )}
                    </div>

                    {/* Icon */}
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${m.color} text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform mb-2`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Title */}
                    <span className="text-xs font-bold text-slate-900 truncate w-full">
                      {m.title}
                    </span>
                    <span className="text-[10px] text-slate-500 truncate w-full mt-0.5">
                      {m.unitId.toUpperCase()}
                    </span>
                  </button>

                  {!isLast && (
                    <div className="text-slate-300 flex items-center px-1">
                      <ArrowRight className="w-4 h-4 shrink-0 animate-pulse" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Active Node Detail Card */}
        {selectedMilestone && (
          <div className="bg-gradient-to-br from-slate-50 to-indigo-50/30 rounded-2xl border border-indigo-100 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
              <div className="flex items-start sm:items-center space-x-3.5 sm:space-x-4 min-w-0 flex-1">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr ${selectedMilestone.color} text-white flex items-center justify-center shadow-md shrink-0 mt-0.5 sm:mt-0`}>
                  <selectedMilestone.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                      Step #{selectedMilestone.number} &bull; {selectedMilestone.era}
                    </span>
                    <span className="text-xs font-mono text-slate-500 uppercase font-semibold">
                      {selectedMilestone.unitId.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-black text-slate-900 mt-1 break-words">
                    {selectedMilestone.title} &mdash; <span className="text-indigo-600 font-bold text-base sm:text-lg">{selectedMilestone.subtitle}</span>
                  </h3>
                </div>
              </div>

              {/* Action Button */}
              <Link
                to={`/topic/${selectedMilestone.topicId}`}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-card hover:shadow-card-hover transition-all flex items-center justify-center space-x-2 shrink-0 self-start sm:self-auto group"
              >
                <span>Launch Topic Lab</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Core Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-2 shadow-2xs">
                <span className="text-xs font-mono font-bold uppercase text-slate-400 block">
                  Core Architectural Role
                </span>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {selectedMilestone.summary}
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs text-indigo-700 font-mono">
                  <span className="font-bold">Key Focus:</span>
                  <span>{selectedMilestone.keyConcept}</span>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-indigo-200/80 p-5 space-y-2 shadow-2xs">
                <span className="text-xs font-mono font-bold uppercase text-indigo-600 block flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span>Evolution to the Next Stage</span>
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedMilestone.evolutionToNext}
                </p>
                {selectedMilestone.number < 15 && (
                  <button
                    onClick={() => {
                      const next = JOURNEY_MILESTONES.find(m => m.number === selectedMilestone.number + 1);
                      if (next) setSelectedMilestone(next);
                    }}
                    className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1 pt-1"
                  >
                    <span>Inspect Next: {JOURNEY_MILESTONES[selectedMilestone.number].title}</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Grid of All 15 Journey Milestones */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <span className="w-2 h-5 rounded-full bg-indigo-600 inline-block" />
          <span>Full Milestone Syllabus Index</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMilestones.map((m) => {
            const Icon = m.icon;
            const isCompleted = isTopicCompleted(m.topicId);

            return (
              <Link
                key={m.id}
                to={`/topic/${m.topicId}`}
                className="group p-5 rounded-2xl bg-white hover:bg-slate-50/80 border border-slate-200/90 hover:border-indigo-300 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${m.color} text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
                          #{String(m.number).padStart(2, '0')}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">
                          {m.unitId.toUpperCase()}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {m.title}
                      </h4>
                    </div>
                  </div>

                  {isCompleted ? (
                    <span className="p-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                  ) : (
                    <span className="p-1 rounded-full bg-slate-50 text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {m.summary}
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>{m.era}</span>
                  <span className="font-semibold text-indigo-600 group-hover:underline flex items-center gap-1">
                    Explore Lab &rarr;
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
