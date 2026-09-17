import React, { useState } from 'react';
import { 
  Globe, 
  Share2, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  Terminal, 
  Users, 
  Database, 
  Sparkles, 
  Layers,
  FileCode,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';

const ERAS = [
  {
    id: 'web1',
    name: 'Web 1.0',
    title: 'The Read-Only Web (1991 – 2004)',
    tagline: 'Static Documents, Brochureware & Hyperlinked Information',
    badge: 'Read-Only (Consumer)',
    icon: Globe,
    accentColor: 'blue',
    coreTech: ['Static HTML', 'CSS 1/2', 'CGI Scripts', 'FTP File Transfer', 'Table Layouts'],
    keyAttributes: [
      { label: 'Role of User', value: 'Passive Consumer (Reader)' },
      { label: 'Content Creation', value: 'Centralized Webmasters only' },
      { label: 'Architecture', value: 'Static File Servers + Plain HTML' },
      { label: 'Interaction Model', value: 'Hyperlinks & Guestbooks' },
      { label: 'Monetization', value: 'Banners & Cost-per-Impression (CPM)' },
      { label: 'Communication', value: 'One-to-Many (Broadcast)' }
    ],
    previewMock: {
      url: 'http://www.geocities.com/siliconvalley/heights/8080/index.html',
      title: "Welcome to Alan's Computer Science Portal! [Under Construction]",
      content: "Thank you for visiting my personal webpage hosted on GeoCities! You are visitor #004,291. Please sign my guestbook below before you leave.",
      badges: ['Best viewed in Netscape 4.0', '800x600 Resolution', 'Valid HTML 3.2']
    }
  },
  {
    id: 'web2',
    name: 'Web 2.0',
    title: 'The Read-Write Social Web (2004 – Present)',
    tagline: 'User-Generated Content, Dynamic Rich Applications & Social Collaboration',
    badge: 'Read-Write (Creator)',
    icon: Share2,
    accentColor: 'indigo',
    coreTech: ['AJAX / Fetch', 'REST APIs', 'Ruby on Rails / Django', 'JavaScript Frameworks', 'Cloud Databases'],
    keyAttributes: [
      { label: 'Role of User', value: 'Active Participant & Content Creator' },
      { label: 'Content Creation', value: 'Decentralized User-Generated Content (UGC)' },
      { label: 'Architecture', value: 'Multi-Tier Client-Server + Relational DBs + Cloud' },
      { label: 'Interaction Model', value: 'Likes, Comments, Wikis, Live Feeds, Realtime' },
      { label: 'Monetization', value: 'Targeted Advertising & SaaS Subscriptions' },
      { label: 'Communication', value: 'Many-to-Many (Social Mesh)' }
    ],
    previewMock: {
      url: 'https://socialspace.io/feed/tech-community',
      title: 'DevCollab: Real-Time Developer Feed & Microblog',
      content: 'Just deployed our microservices API! 45 comments, 312 likes. Click to fork our collaborative wiki or subscribe via RSS.',
      badges: ['AJAX Live Updates', 'RESTful API v2', 'OAuth2 Sign-In']
    }
  },
  {
    id: 'web3',
    name: 'Web 3.0',
    title: 'The Semantic & Intelligent Web (Emerging)',
    tagline: 'Machine-Readable Meaning, Decentralized Trust, AI Agents & Edge Computing',
    badge: 'Read-Write-Execute (Autonomous)',
    icon: Cpu,
    accentColor: 'purple',
    coreTech: ['RDF / OWL / SPARQL', 'Edge Serverless / CDNs', 'Cryptographic Ledgers', 'AI & Recommender Models', 'Decentralized Storage (IPFS)'],
    keyAttributes: [
      { label: 'Role of User', value: 'Sovereign Owner & Machine Collaborator' },
      { label: 'Content Creation', value: 'Human + Autonomous AI Agents + Semantic Graphs' },
      { label: 'Architecture', value: 'Edge Networks, Linked Data, Cryptographic Protocols' },
      { label: 'Interaction Model', value: 'Intelligent Assistants, Verifiable Credentials, Smart Contracts' },
      { label: 'Monetization', value: 'Micropayments, Token Economies & Value Protocols' },
      { label: 'Communication', value: 'Machine-to-Machine & Peer-to-Peer Interoperable' }
    ],
    previewMock: {
      url: 'https://knowledge.semantic.org/entity/WebTechnology#v4',
      title: 'Semantic Graph Entity & Autonomous Service Contract',
      content: 'Machine-parsed RDF graph: subject <WebTech> predicate <hasCurriculum> object <Unit4>. Cached at 12ms Edge PoP.',
      badges: ['Schema.org / JSON-LD', 'Edge-Cached 15ms', 'Verifiable Hash Chain']
    }
  }
];

export default function WebEvolutionTimeline() {
  const [activeEraIndex, setActiveEraIndex] = useState(1); // Default to Web 2.0
  const activeEra = ERAS[activeEraIndex];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Top Header */}
      <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-indigo-500/30">
              <Sparkles className="w-3.5 h-3.5" /> Interactive Evolution Timeline
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              The Evolution: Web 1.0 → Web 2.0 → Web 3.0
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Journey from static brochureware documents to the interactive social web, and onward to machine-readable semantics, intelligent edge services, and decentralized trust.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Current View:</span>
            <span className="px-3 py-1 rounded-lg bg-white/10 text-white text-xs font-mono font-bold">
              {activeEra.name}
            </span>
          </div>
        </div>

        {/* Timeline Slider / Buttons */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          {ERAS.map((era, index) => {
            const Icon = era.icon;
            const isSelected = index === activeEraIndex;
            return (
              <button
                key={era.id}
                onClick={() => setActiveEraIndex(index)}
                className={`flex flex-col sm:flex-row items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-white text-slate-900 border-white shadow-lg scale-[1.02]'
                    : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                  isSelected ? 'bg-indigo-600 text-white' : 'bg-white/10 text-slate-300'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="overflow-hidden text-center sm:text-left">
                  <div className="text-xs font-semibold tracking-wide uppercase opacity-75">
                    {era.name}
                  </div>
                  <div className={`text-sm font-bold truncate ${isSelected ? 'text-slate-900' : 'text-white'}`}>
                    {era.id === 'web1' ? 'Read-Only' : era.id === 'web2' ? 'Read-Write' : 'Read-Write-Exec'}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Era Details */}
      <div className="p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column: Era Specifications */}
          <div className="flex-1 space-y-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 font-mono text-xs font-bold border border-indigo-100">
                  {activeEra.badge}
                </span>
                <span className="text-xs text-slate-500 font-medium">Era Focus</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mt-2">
                {activeEra.title}
              </h4>
              <p className="text-slate-600 text-sm mt-1">
                {activeEra.tagline}
              </p>
            </div>

            {/* Core Technologies */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                <FileCode className="w-4 h-4 text-slate-400" /> Core Enabling Technologies
              </h5>
              <div className="flex flex-wrap gap-2">
                {activeEra.coreTech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Comparison Matrix Table */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-slate-400" /> Architectural Attributes
              </h5>
              <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100 bg-slate-50/50">
                {activeEra.keyAttributes.map((attr, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 text-xs">
                    <span className="font-semibold text-slate-600">{attr.label}</span>
                    <span className="font-medium text-slate-900 mt-0.5 sm:mt-0">{attr.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Simulated Historical Web Page Preview */}
          <div className="w-full lg:w-96 shrink-0 flex flex-col">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-slate-400" /> Simulated Browser Experience
            </div>
            
            <div className="border border-slate-300 rounded-xl overflow-hidden shadow-sm flex-1 flex flex-col bg-white">
              {/* Fake Browser Chrome */}
              <div className="bg-slate-100 px-3 py-2 border-b border-slate-200 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 bg-white px-2 py-0.5 rounded text-[11px] font-mono text-slate-600 truncate border border-slate-200">
                  {activeEra.previewMock.url}
                </div>
              </div>

              {/* Viewport Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                {activeEra.id === 'web1' && (
                  <div className="space-y-3 font-serif">
                    <div className="p-2 bg-yellow-100 border border-yellow-300 text-yellow-800 text-xs text-center font-bold">
                      🚧 UNDER CONSTRUCTION 🚧
                    </div>
                    <h5 className="font-bold text-base text-blue-800 underline">
                      {activeEra.previewMock.title}
                    </h5>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans">
                      {activeEra.previewMock.content}
                    </p>
                    <div className="p-2 border border-slate-300 bg-slate-50 text-center font-mono text-xs">
                      [ Guestbook: 14 Entries | Sign Guestbook | View Counter ]
                    </div>
                  </div>
                )}

                {activeEra.id === 'web2' && (
                  <div className="space-y-3 font-sans">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                      <div className="w-7 h-7 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                        DC
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">DevCollab Community</div>
                        <div className="text-[10px] text-slate-400">Just now • Public API Feed</div>
                      </div>
                    </div>
                    <h5 className="font-bold text-sm text-slate-900">
                      {activeEra.previewMock.title}
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {activeEra.previewMock.content}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-indigo-600 font-medium pt-2">
                      <button className="hover:underline">❤️ 312 Likes</button>
                      <button className="hover:underline">💬 45 Comments</button>
                      <button className="hover:underline">🔄 88 Shares</button>
                    </div>
                  </div>
                )}

                {activeEra.id === 'web3' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-[11px] text-purple-700 font-semibold">
                      <span>RDF Triple Entity</span>
                      <span>Latency: 14ms</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 text-slate-200 text-[11px] leading-tight overflow-x-auto">
                      <span className="text-indigo-400">@prefix</span> ex: &lt;http://schema.org/&gt; .<br />
                      ex:WebTechnology <span className="text-amber-400">ex:creator</span> &quot;TimBL&quot; ;<br />
                      &nbsp;&nbsp;<span className="text-amber-400">ex:paradigm</span> &quot;Semantic Web&quot; .
                    </div>
                    <p className="text-xs font-sans text-slate-600">
                      {activeEra.previewMock.content}
                    </p>
                  </div>
                )}

                {/* Footer Badges */}
                <div className="pt-4 border-t border-slate-100 mt-4 flex flex-wrap gap-1.5">
                  {activeEra.previewMock.badges.map((badge, bIdx) => (
                    <span key={bIdx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-mono">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Note */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 font-semibold">Educational Perspective on Web 3.0: </strong>
            Industry definitions of &quot;Web 3.0&quot; encompass two major intersecting schools of thought: Sir Tim Berners-Lee&apos;s vision of the <em>Semantic Web</em> (standardized machine-readable Linked Data, ontologies, and RDF knowledge graphs) and decentralized architectures (cryptographic verification, edge computing, and decentralized storage). Both aim to evolve the web from human-only text into an intelligent, interoperable computational fabric.
          </div>
        </div>
      </div>
    </div>
  );
}
