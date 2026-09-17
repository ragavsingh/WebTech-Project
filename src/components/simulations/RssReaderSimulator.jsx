import React, { useState } from 'react';
import { 
  Rss, 
  RefreshCw, 
  Code, 
  List, 
  ExternalLink, 
  Clock, 
  Radio, 
  CheckCircle2, 
  ArrowRight,
  Info,
  Calendar
} from 'lucide-react';

const FEEDS = [
  {
    id: 'tech',
    title: 'Ars Technica & Web Standards',
    url: 'https://arstechnica.com/feed/technology.rss',
    description: 'Latest breakthroughs in browser engines, protocols, and distributed computing.',
    lastBuildDate: 'Fri, 18 Sep 2026 09:30:00 GMT',
    items: [
      {
        id: 't1',
        title: 'W3C Advances RDF 1.2 Specification for Next-Gen Knowledge Graphs',
        pubDate: 'Fri, 18 Sep 2026 08:45:00 GMT',
        link: 'https://arstechnica.com/web/rdf-12-spec',
        guid: 'urn:uuid:1001',
        author: 'Ars Tech Desk',
        description: 'The World Wide Web Consortium today published the candidate recommendation for RDF 1.2, introducing streamlined triple representations for AI agent interoperation.'
      },
      {
        id: 't2',
        title: 'How Edge Computing is Redefining Microservice Latency',
        pubDate: 'Thu, 17 Sep 2026 18:20:00 GMT',
        link: 'https://arstechnica.com/infra/edge-latencies',
        guid: 'urn:uuid:1002',
        author: 'Network Engineering Team',
        description: 'By migrating execution from centralized multi-region data centers to CDN Points of Presence (PoPs), web applications achieve single-digit millisecond response times.'
      },
      {
        id: 't3',
        title: 'The Unsung Hero of Web 2.0: XML Syndication & The Blogosphere',
        pubDate: 'Wed, 16 Sep 2026 14:10:00 GMT',
        link: 'https://arstechnica.com/history/rss-evolution',
        guid: 'urn:uuid:1003',
        author: 'Web History Archive',
        description: 'Before centralized social media algorithms, RSS gave readers autonomous control to aggregate hundreds of independent feeds into a unified desktop reader.'
      }
    ]
  },
  {
    id: 'science',
    title: 'MIT Technology Review: AI & Semantics',
    url: 'https://technologyreview.com/feed/rss',
    description: 'In-depth analysis of machine learning, ontologies, and algorithmic web systems.',
    lastBuildDate: 'Fri, 18 Sep 2026 07:15:00 GMT',
    items: [
      {
        id: 's1',
        title: 'Hybrid Recommender Systems: Merging Collaborative Filtering with Semantic Ontologies',
        pubDate: 'Fri, 18 Sep 2026 06:00:00 GMT',
        link: 'https://technologyreview.com/ai/hybrid-recs',
        guid: 'urn:uuid:2001',
        author: 'MIT Research Lab',
        description: 'Researchers demonstrate that combining user-to-user cosine similarity with deep knowledge graph entity tags eliminates the cold-start problem in content discovery.'
      },
      {
        id: 's2',
        title: 'Decentralized Identity: Verifiable Credentials on Public Ledgers',
        pubDate: 'Wed, 16 Sep 2026 11:45:00 GMT',
        link: 'https://technologyreview.com/crypto/did-standards',
        guid: 'urn:uuid:2002',
        author: 'Cryptography Group',
        description: 'A study on replacing OAuth corporate monopolies with W3C Verifiable Credentials and zero-knowledge cryptographic proofs.'
      }
    ]
  },
  {
    id: 'webdev',
    title: 'Smashing Magazine: Modern Frontend Architecture',
    url: 'https://smashingmagazine.com/feed.xml',
    description: 'Frontend best practices, CSS custom properties, accessibility, and design tokens.',
    lastBuildDate: 'Thu, 17 Sep 2026 16:00:00 GMT',
    items: [
      {
        id: 'w1',
        title: 'Architecting Accessible Dark Mode with CSS Variables & prefers-color-scheme',
        pubDate: 'Thu, 17 Sep 2026 15:30:00 GMT',
        link: 'https://smashingmagazine.com/css/dark-mode-tokens',
        guid: 'urn:uuid:3001',
        author: 'Rachel Andrews',
        description: 'Why naive color inversion fails WCAG 2.1 contrast compliance and how semantic CSS custom property design tokens resolve readability issues across light and dark states.'
      },
      {
        id: 'w2',
        title: 'Building Modular Embeddable Widgets with Web Components and Shadow DOM',
        pubDate: 'Tue, 15 Sep 2026 13:10:00 GMT',
        link: 'https://smashingmagazine.com/widgets/shadow-dom',
        guid: 'urn:uuid:3002',
        author: 'Chris Coyier',
        description: 'Modern encapsulation techniques for creating third-party embeddable dashboards and widgets that prevent CSS leakage into host documents.'
      }
    ]
  }
];

export default function RssReaderSimulator() {
  const [selectedFeedId, setSelectedFeedId] = useState('tech');
  const [viewMode, setViewMode] = useState('parsed'); // 'parsed' | 'xml'
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPolling, setIsPolling] = useState(false);
  const [pollLog, setPollLog] = useState(['Subscribed to feed channel', 'HTTP GET XML body parsed']);

  const activeFeed = FEEDS.find(f => f.id === selectedFeedId);

  const handleSimulatePoll = () => {
    setIsPolling(true);
    setPollLog(prev => [`[${new Date().toLocaleTimeString()}] Polling ${activeFeed.url}...`, ...prev]);
    setTimeout(() => {
      setIsPolling(false);
      setPollLog(prev => [
        `[${new Date().toLocaleTimeString()}] HTTP 200 OK: 0 new items (304 Not Modified / Cache Valid)`,
        ...prev
      ]);
    }, 1200);
  };

  // Generate XML string representation for the raw preview
  const generateRawXml = (feed) => {
    return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${feed.title}</title>
    <link>${feed.url}</link>
    <description>${feed.description}</description>
    <lastBuildDate>${feed.lastBuildDate}</lastBuildDate>
    <language>en-us</language>
${feed.items.map(item => `    <item>
      <title>${item.title}</title>
      <link>${item.link}</link>
      <pubDate>${item.pubDate}</pubDate>
      <author>${item.author}</author>
      <guid>${item.guid}</guid>
      <description>${item.description}</description>
    </item>`).join('\n')}
  </channel>
</rss>`;
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-amber-500/30">
              <Rss className="w-3.5 h-3.5" /> RSS XML Syndication Simulator
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Really Simple Syndication (RSS 2.0)
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Understand how XML feeds enabled decentralized content aggregation, automated polling, and the rise of the Web 2.0 blogosphere.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleSimulatePoll}
              disabled={isPolling}
              className="px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isPolling ? 'animate-spin' : ''}`} />
              {isPolling ? 'Polling Feed...' : 'Poll Channel'}
            </button>
          </div>
        </div>

        {/* Channel Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
          {FEEDS.map((feed) => {
            const isSelected = feed.id === selectedFeedId;
            return (
              <button
                key={feed.id}
                onClick={() => { setSelectedFeedId(feed.id); setSelectedItem(null); }}
                className={`p-3 rounded-xl border text-left transition ${
                  isSelected
                    ? 'bg-white text-slate-900 border-white shadow'
                    : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                }`}
              >
                <div className="flex items-center gap-2 text-xs font-bold truncate">
                  <Radio className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-600' : 'text-amber-400'}`} />
                  {feed.title}
                </div>
                <div className="text-[11px] opacity-75 truncate mt-1">
                  {feed.items.length} syndicated items
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* View Mode Bar */}
      <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium">Display Mode:</span>
          <div className="inline-flex rounded-lg border border-slate-200 bg-white p-0.5">
            <button
              onClick={() => setViewMode('parsed')}
              className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 transition ${
                viewMode === 'parsed' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <List className="w-3.5 h-3.5" /> Parsed Feed Reader View
            </button>
            <button
              onClick={() => setViewMode('xml')}
              className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 transition ${
                viewMode === 'xml' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Code className="w-3.5 h-3.5" /> Raw RSS 2.0 XML Syntax
            </button>
          </div>
        </div>

        <div className="text-[11px] font-mono text-slate-500 hidden sm:block">
          Feed URL: <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200">{activeFeed.url}</code>
        </div>
      </div>

      {/* Main View Area */}
      <div className="p-6">
        {viewMode === 'parsed' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Feed Items List */}
            <div className="lg:col-span-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Syndicated Articles ({activeFeed.items.length})
              </h4>
              {activeFeed.items.map((item) => {
                const isSelected = selectedItem?.id === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className={`p-4 rounded-xl border cursor-pointer transition ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-50/40 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                      <span className="font-semibold text-slate-600">{item.author}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {new Date(item.pubDate).toLocaleDateString()}
                      </span>
                    </div>
                    <h5 className="text-sm font-bold text-slate-900 line-clamp-2">
                      {item.title}
                    </h5>
                    <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Selected Article Detail or Feed Polling Diagnostics */}
            <div className="lg:col-span-6 space-y-4">
              {selectedItem ? (
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                  <div className="flex items-center justify-between text-xs text-indigo-700 font-semibold">
                    <span>Parsed XML Item Inspector</span>
                    <span className="font-mono text-[10px] text-slate-400">&lt;item&gt;</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{selectedItem.title}</h4>
                  <div className="text-xs text-slate-500 flex items-center gap-3">
                    <span>By <strong>{selectedItem.author}</strong></span>
                    <span>•</span>
                    <span>{selectedItem.pubDate}</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed pt-2 border-t border-slate-200">
                    {selectedItem.description}
                  </p>
                  
                  {/* XML Mapping Breakdown */}
                  <div className="pt-3 border-t border-slate-200 space-y-1.5 text-xs font-mono">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 font-sans">
                      XML Element Source Mapping
                    </div>
                    <div className="p-1.5 rounded bg-white border border-slate-200 text-[11px]">
                      <span className="text-indigo-600 font-semibold">&lt;guid&gt;: </span>
                      <span className="text-slate-700">{selectedItem.guid}</span>
                    </div>
                    <div className="p-1.5 rounded bg-white border border-slate-200 text-[11px] truncate">
                      <span className="text-indigo-600 font-semibold">&lt;link&gt;: </span>
                      <span className="text-slate-700">{selectedItem.link}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-xl border border-dashed border-slate-300 text-center text-slate-500 space-y-2">
                  <Rss className="w-8 h-8 mx-auto text-slate-400" />
                  <div className="text-xs font-semibold text-slate-700">Select an article on the left</div>
                  <div className="text-[11px] text-slate-400 max-w-xs mx-auto">
                    Click any syndicated item to inspect how RSS reader software translates XML nodes into UI views.
                  </div>
                </div>
              )}

              {/* Polling & Feed Activity Log */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-900 text-slate-200 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-[11px] text-amber-400 font-semibold uppercase">
                  <span>Feed Polling Activity Monitor</span>
                  <span className="text-slate-400">Interval: 15m</span>
                </div>
                <div className="space-y-1 text-[11px]">
                  {pollLog.slice(0, 3).map((log, idx) => (
                    <div key={idx} className="truncate text-slate-300">
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Raw XML View */
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Standard: W3C / RSS Advisory Board RSS 2.0 Specification</span>
              <span className="font-mono">application/rss+xml</span>
            </div>
            <pre className="p-4 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
              <code>{generateRawXml(activeFeed)}</code>
            </pre>
          </div>
        )}

        {/* Educational Callout */}
        <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold">Why RSS Was Transformative: </strong>
            Before algorithmic timelines, RSS allowed users to establish their own personalized newsroom. Websites published a machine-readable XML feed at a fixed endpoint. Client aggregators (like Google Reader or NetNewsWire) polled feeds on a timer, parsed items by their unique <code>&lt;guid&gt;</code>, and notified users when new articles were released—with zero tracking or centralized gatekeepers.
          </div>
        </div>
      </div>
    </div>
  );
}
