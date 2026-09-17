import React, { useState } from 'react';
import { 
  Search, 
  Globe, 
  Database, 
  BarChart3, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  Layers,
  Info
} from 'lucide-react';

const CORPUS = [
  {
    id: 'doc1',
    url: 'https://w3c.org/standards/semantic-web',
    title: 'W3C Semantic Web Activity: RDF & Ontologies',
    snippet: 'Official standards for Resource Description Framework, OWL vocabularies, and machine-readable linked data graphs.',
    keywords: ['semantic', 'rdf', 'ontologies', 'web', 'data', 'graph', 'w3c'],
    pageRank: 0.94
  },
  {
    id: 'doc2',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    title: 'MDN Web Docs: JavaScript Foundations & APIs',
    snippet: 'Comprehensive reference for modern asynchronous JavaScript, Fetch API, DOM manipulation, and browser runtimes.',
    keywords: ['javascript', 'web', 'apis', 'fetch', 'dom', 'browser', 'frontend'],
    pageRank: 0.96
  },
  {
    id: 'doc3',
    url: 'https://rubyonrails.org/doctrine',
    title: 'The Rails Doctrine: Convention Over Configuration',
    snippet: 'Explaining the MVC architectural philosophy that propelled Web 2.0 dynamic applications and rapid prototyping.',
    keywords: ['rails', 'ruby', 'mvc', 'web', 'framework', 'database'],
    pageRank: 0.88
  },
  {
    id: 'doc4',
    url: 'https://cloudflare.com/learning/serverless/what-is-edge-computing',
    title: 'Edge Computing Architecture: Latency & CDN PoPs',
    snippet: 'How distributed edge nodes process requests close to users, reducing network round-trips compared to central origin clouds.',
    keywords: ['edge', 'computing', 'latency', 'cdn', 'cloud', 'network'],
    pageRank: 0.85
  }
];

export default function SearchEnginePipelineSimulator() {
  const [searchQuery, setSearchQuery] = useState('javascript web');
  const [activeStage, setActiveStage] = useState(0); // 0: Idle, 1: Crawling, 2: Indexing, 3: Ranking, 4: Results
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleRunSearch = (e) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setActiveStage(1); // Crawling

    setTimeout(() => {
      setActiveStage(2); // Indexing (Inverted Index lookup)
      setTimeout(() => {
        setActiveStage(3); // Ranking (Relevance + PageRank)
        setTimeout(() => {
          // Calculate score
          const queryTerms = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);
          const scored = CORPUS.map(doc => {
            let termMatches = 0;
            queryTerms.forEach(t => {
              if (doc.keywords.includes(t)) termMatches++;
              if (doc.title.toLowerCase().includes(t)) termMatches += 1.5;
            });
            // Combined relevance = (Term Frequency match weight) * 0.6 + (PageRank) * 0.4
            const score = termMatches > 0 ? +(termMatches * 0.6 + doc.pageRank * 0.4).toFixed(3) : 0;
            return { ...doc, score, termMatches };
          })
          .filter(d => d.score > 0)
          .sort((a, b) => b.score - a.score);

          setSearchResults(scored);
          setActiveStage(4); // Results Ready
          setIsSearching(false);
        }, 600);
      }, 600);
    }, 600);
  };

  const handleReset = () => {
    setActiveStage(0);
    setIsSearching(false);
    setSearchResults([]);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-emerald-500/30">
              <Search className="w-3.5 h-3.5" /> Information Retrieval & Web Search Pipeline
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Inside a Search Engine: Crawling → Indexing → Ranking
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Search engines do not search the live web in real time. They query an offline <em>inverted index</em> constructed by autonomous spiders and rank results using link topology (PageRank) and relevance metrics.
            </p>
          </div>
        </div>

        {/* Search Bar Input */}
        <form onSubmit={handleRunSearch} className="mt-6 flex flex-col sm:flex-row gap-2 max-w-2xl">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search terms (e.g. javascript web, semantic, edge computing)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-800 text-white text-xs border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <button
            type="submit"
            disabled={isSearching}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-bold transition flex items-center justify-center gap-2 shadow"
          >
            {isSearching ? 'Processing...' : 'Trace Pipeline'}
          </button>
        </form>

        {/* Pipeline 4-Stage Progress Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-6">
          {[
            { stage: 1, name: '1. Web Spider Crawling', desc: 'Discovers hyperlinks & fetches HTML' },
            { stage: 2, name: '2. Inverted Indexing', desc: 'Tokens mapped to document IDs' },
            { stage: 3, name: '3. Relevance & PageRank', desc: 'Computes link equity & authority' },
            { stage: 4, name: '4. SERP Results Dispatch', desc: 'Ranked list rendered to client' }
          ].map((s) => {
            const isCurrent = activeStage === s.stage;
            const isCompleted = activeStage > s.stage;
            return (
              <div
                key={s.stage}
                className={`p-2.5 rounded-xl border text-xs transition ${
                  isCurrent
                    ? 'bg-white text-slate-900 border-white shadow-md'
                    : isCompleted
                    ? 'bg-emerald-950/60 text-emerald-200 border-emerald-800'
                    : 'bg-white/5 text-slate-400 border-white/10'
                }`}
              >
                <div className="font-bold">{s.name}</div>
                <div className="text-[10px] opacity-75 truncate">{s.desc}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Results / Pipeline View */}
      <div className="p-6">
        {activeStage === 4 ? (
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-2">
              <span>About {searchResults.length} results returned in ~0.014 seconds</span>
              <span className="font-mono text-[11px]">Rank Metric: (Relevance × 0.6) + (PageRank × 0.4)</span>
            </div>

            {searchResults.length > 0 ? (
              searchResults.map((result, idx) => (
                <div key={result.id} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition space-y-1.5 shadow-2xs">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="text-emerald-700 font-mono font-medium truncate">{result.url}</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono font-bold">
                      Score: {result.score} (PR: {result.pageRank})
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-blue-700 hover:underline cursor-pointer">
                    {result.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {result.snippet}
                  </p>
                  <div className="flex gap-1.5 pt-1">
                    {result.keywords.slice(0, 5).map((kw, i) => (
                      <span key={i} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-50 text-slate-500 border border-slate-200">
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-slate-500 border border-dashed border-slate-200 rounded-xl">
                No documents in index matched the search terms. Try searching &quot;javascript&quot; or &quot;semantic&quot;.
              </div>
            )}
          </div>
        ) : (
          /* Inverted Index Explanation Card */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Database className="w-4 h-4 text-emerald-600" /> How the Inverted Index Works
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                A standard book lists chapters followed by words. An <strong>inverted index</strong> flips this: it maps every unique word token to the exact list of documents (posting list) where it appears.
              </p>
              <div className="p-3 rounded-lg bg-slate-900 text-emerald-400 font-mono text-xs space-y-1">
                <div>&quot;semantic&quot; ➔ [doc1, doc4]</div>
                <div>&quot;javascript&quot; ➔ [doc2]</div>
                <div>&quot;mvc&quot; ➔ [doc3]</div>
                <div>&quot;edge&quot; ➔ [doc4]</div>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4 text-emerald-600" /> PageRank Link Equity
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Formulated by Larry Page and Sergey Brin at Stanford, PageRank treats incoming hyperlinks as votes of confidence. A page linked to by prestigious domains inherits higher link authority, boosting its ranking above spam documents.
              </p>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-600">
                Formula: \(PR(A) = (1-d) + d \sum \frac{PR(T_i)}{C(T_i)}\)
              </div>
            </div>
          </div>
        )}

        {/* Educational Note */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 font-semibold">Educational Model Disclaimer: </strong>
            Modern production search engines (e.g. Google, Bing) combine inverted indexes with multi-billion-parameter neural ranking models (such as BERT and RankBrain), user engagement signals, and geographical localization. The simulation above illustrates the foundational mathematical mechanics.
          </div>
        </div>
      </div>
    </div>
  );
}
