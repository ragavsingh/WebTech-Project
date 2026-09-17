import React, { useState } from 'react';
import { 
  Cpu, 
  Eye, 
  Bot, 
  CheckCircle2, 
  AlertTriangle, 
  Code, 
  FileText, 
  Sparkles, 
  Layers, 
  Info,
  ArrowRight
} from 'lucide-react';

export default function SemanticWebSimulator() {
  const [markupType, setMarkupType] = useState('semantic'); // 'plain' | 'semantic'
  const [isBotAnalyzing, setIsBotAnalyzing] = useState(false);
  const [botAnalysisComplete, setBotAnalysisComplete] = useState(true);

  const handleToggleMarkup = (type) => {
    setMarkupType(type);
    setIsBotAnalyzing(true);
    setBotAnalysisComplete(false);
    setTimeout(() => {
      setIsBotAnalyzing(false);
      setBotAnalysisComplete(true);
    }, 500);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-purple-500/30">
              <Cpu className="w-3.5 h-3.5" /> Semantic Web & Machine Understanding
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Human-Readable HTML vs. Machine-Readable Semantics
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Understand why plain HTML is opaque to automated algorithms and search bots, and how Schema.org JSON-LD structures data for machine reasoning.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Target Document:</span>
            <span className="px-2.5 py-1 rounded bg-white/10 text-xs font-mono text-purple-300">
              article_bio.html
            </span>
          </div>
        </div>

        {/* Toggle Switcher */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <button
            onClick={() => handleToggleMarkup('plain')}
            className={`p-3 rounded-xl border text-left transition ${
              markupType === 'plain'
                ? 'bg-white text-slate-900 border-white shadow-md'
                : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-bold">
              <FileText className="w-4 h-4 text-rose-400" />
              1. Unstructured Plain HTML
            </div>
            <div className="text-[11px] opacity-75 mt-0.5">
              Styled for human eyeballs; opaque strings to machines
            </div>
          </button>
          <button
            onClick={() => handleToggleMarkup('semantic')}
            className={`p-3 rounded-xl border text-left transition ${
              markupType === 'semantic'
                ? 'bg-white text-slate-900 border-white shadow-md'
                : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-bold">
              <Sparkles className="w-4 h-4 text-purple-400" />
              2. Semantic Web (JSON-LD / Schema.org)
            </div>
            <div className="text-[11px] opacity-75 mt-0.5">
              Machine-parsable ontology entities & explicit relationships
            </div>
          </button>
        </div>
      </div>

      {/* Main Comparison Area */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Code Source */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Underlying Document Code</span>
              <span className="font-mono text-[11px]">
                {markupType === 'plain' ? 'HTML 4.01' : 'HTML5 + JSON-LD'}
              </span>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex flex-col h-[360px]">
              <div className="bg-slate-900 px-4 py-2 text-[11px] font-mono text-slate-400 border-b border-slate-800 flex items-center justify-between">
                <span>{markupType === 'plain' ? 'index.html (Visual formatting)' : 'index.html + <script type="application/ld+json">'}</span>
              </div>
              <pre className="p-4 text-xs font-mono text-slate-200 overflow-auto leading-relaxed flex-1">
                {markupType === 'plain' ? (
`<!-- Plain HTML: Visual only -->
<div class="profile-card">
  <h1>Tim Berners-Lee</h1>
  <p>Works at W3C and MIT</p>
  <p>Created World Wide Web in 1989</p>
  <p>Contact: timbl@w3.org</p>
</div>

<!-- Notice: A machine cannot tell if:
     "W3C" is an employer, a city, or a brand!
     "1989" is a year, a price, or a phone number! -->`
                ) : (
`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Tim Berners-Lee",
  "jobTitle": "Director & Computer Scientist",
  "worksFor": {
    "@type": "Organization",
    "name": "World Wide Web Consortium",
    "url": "https://www.w3.org"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "University of Oxford"
  },
  "knowsAbout": ["World Wide Web", "Semantic Web", "HTTP"]
}
</script>`
                )}
              </pre>
            </div>
          </div>

          {/* Right Column: AI Crawler / Machine Reasoning Output */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span className="flex items-center gap-1.5">
                <Bot className="w-4 h-4 text-indigo-600" /> Automated AI Agent / Search Crawler Extraction
              </span>
              <span className="text-[10px] font-mono">
                {isBotAnalyzing ? 'Analyzing...' : 'Status: Ready'}
              </span>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 h-[360px] overflow-auto flex flex-col justify-between">
              {markupType === 'plain' ? (
                <div className="space-y-4 text-xs">
                  <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold">Machine Parsing Ambiguity:</strong>
                      <p className="text-[11px] mt-0.5">
                        Crawler sees a continuous string of tokens. It cannot discern whether &quot;W3C&quot; is a person, company, or protocol without error-prone probabilistic NLP guesses.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Machine Inferred Facts:
                    </div>
                    <div className="p-2.5 rounded bg-white border border-slate-200 font-mono text-[11px] text-slate-600 space-y-1">
                      <div>• Entity Type: <span className="text-amber-600">Unknown String Token</span></div>
                      <div>• Relationship &apos;Works at&apos;: <span className="text-amber-600">Unstructured Text Fragment</span></div>
                      <div>• Knowledge Graph Link: <span className="text-rose-600">None (Cannot disambiguate)</span></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 text-xs">
                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold">Explicit Machine Comprehension:</strong>
                      <p className="text-[11px] mt-0.5">
                        Crawler unequivocally identifies <code>Person</code> with direct relationship <code>worksFor</code> pointing to <code>Organization(W3C)</code>. Ready for automated graph ingestion.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Extracted Knowledge Graph Nodes:
                    </div>
                    <div className="p-2.5 rounded bg-white border border-slate-200 font-mono text-[11px] text-slate-700 space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-indigo-600 font-semibold">Subject:</span>
                        <span>schema:Person (&quot;Tim Berners-Lee&quot;)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-600 font-semibold">Predicate:</span>
                        <span>schema:worksFor</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-emerald-600 font-semibold">Object:</span>
                        <span>schema:Organization (&quot;W3C&quot;)</span>
                      </div>
                      <div className="flex justify-between border-t border-slate-100 pt-1">
                        <span className="text-slate-500">Graph Confidence:</span>
                        <span className="text-emerald-600 font-bold">100% (Standardized URI Ontology)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Visualizer Tip */}
              <div className="text-[11px] text-slate-500 pt-3 border-t border-slate-200 flex items-center justify-between">
                <span>Schema.org Vocabulary Standard</span>
                <span className="font-mono text-indigo-600">JSON-LD 1.1 Specification</span>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Note */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 font-semibold">The Semantic Web Vision: </strong>
            Tim Berners-Lee articulated that while the early web was a web of human-readable documents, the Semantic Web is a web of <em>linked data</em>. By providing semantic context through ontologies, intelligent software agents can traverse the web, compare flight schedules, cross-reference medical research, and execute complex workflows autonomously.
          </div>
        </div>
      </div>
    </div>
  );
}
