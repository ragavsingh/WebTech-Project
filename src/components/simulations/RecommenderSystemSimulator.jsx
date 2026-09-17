import React, { useState } from 'react';
import { 
  Sparkles, 
  Users, 
  Tag, 
  ThumbsUp, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  Info,
  Layers,
  BookOpen
} from 'lucide-react';

const CANDIDATE_ITEMS = [
  {
    id: 'item_1',
    title: 'Building Knowledge Graphs with RDF & SPARQL',
    tags: ['ai', 'semantic', 'webdev'],
    similarityWithUsers: 0.92,
    explanationContent: 'Matched tags [semantic, webdev] from your recent reading history.',
    explanationCollab: 'Users with similar reading patterns rated this item 4.9/5.'
  },
  {
    id: 'item_2',
    title: 'High-Throughput Edge Functions with Cloudflare Workers',
    tags: ['cloud', 'webdev', 'performance'],
    similarityWithUsers: 0.88,
    explanationContent: 'Matched tags [cloud, webdev] reflecting your interest in systems.',
    explanationCollab: '84% of developers who viewed REST APIs also saved this tutorial.'
  },
  {
    id: 'item_3',
    title: 'Neural Language Models & Vector Embeddings Explained',
    tags: ['ai', 'python'],
    similarityWithUsers: 0.79,
    explanationContent: 'High match on tag [ai] in your selected profile interest vector.',
    explanationCollab: 'Engineers specializing in algorithms frequently read this publication.'
  },
  {
    id: 'item_4',
    title: 'PostgreSQL Internals: ACID Transactions & Write-Ahead Logs',
    tags: ['cloud', 'database', 'backend'],
    similarityWithUsers: 0.65,
    explanationContent: 'Partial overlap with your system architecture focus.',
    explanationCollab: 'Collaborative matrix suggests this as an adjacent foundational skill.'
  }
];

export default function RecommenderSystemSimulator() {
  const [selectedInterests, setSelectedInterests] = useState(['webdev', 'ai']);
  const [algorithmType, setAlgorithmType] = useState('content'); // 'content' | 'collab'
  const [activeResults, setActiveResults] = useState([]);
  const [isCalculated, setIsCalculated] = useState(false);

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleRunRecommendation = () => {
    const scored = CANDIDATE_ITEMS.map(item => {
      let score = 0;
      if (algorithmType === 'content') {
        const overlap = item.tags.filter(t => selectedInterests.includes(t)).length;
        score = selectedInterests.length > 0 ? +(overlap / Math.max(selectedInterests.length, item.tags.length)).toFixed(2) : 0;
      } else {
        // Collaborative filtering score combines user similarity with historical interaction
        score = item.similarityWithUsers;
      }
      return {
        ...item,
        score,
        reason: algorithmType === 'content' ? item.explanationContent : item.explanationCollab
      };
    })
    .sort((a, b) => b.score - a.score);

    setActiveResults(scored);
    setIsCalculated(true);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-violet-500/30">
              <Sparkles className="w-3.5 h-3.5" /> Recommender Algorithms Sandbox
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Content-Based vs. Collaborative Filtering
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Web 2.0 and 3.0 platforms curate feeds using mathematical similarity metrics. Compare attribute matching against peer collaborative voting.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleRunRecommendation}
              className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold shadow-sm transition flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" /> Compute Recommendations
            </button>
          </div>
        </div>

        {/* Algorithm Type Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
          <button
            onClick={() => { setAlgorithmType('content'); setIsCalculated(false); }}
            className={`p-3 rounded-xl border text-left transition ${
              algorithmType === 'content'
                ? 'bg-white text-slate-900 border-white shadow'
                : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-bold">
              <Tag className="w-4 h-4 text-violet-600" />
              1. Content-Based Filtering
            </div>
            <div className="text-[11px] opacity-75 mt-0.5">
              Recommends items similar to what the user liked based on explicit item attributes & tags.
            </div>
          </button>

          <button
            onClick={() => { setAlgorithmType('collab'); setIsCalculated(false); }}
            className={`p-3 rounded-xl border text-left transition ${
              algorithmType === 'collab'
                ? 'bg-white text-slate-900 border-white shadow'
                : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-bold">
              <Users className="w-4 h-4 text-violet-600" />
              2. Collaborative Filtering
            </div>
            <div className="text-[11px] opacity-75 mt-0.5">
              Identifies similar users (&quot;peers&quot;) and recommends items that peer cluster enjoyed.
            </div>
          </button>
        </div>
      </div>

      {/* User Preferences Selector */}
      <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
          Your Profile Affinity Vector (Select Tags):
        </div>
        <div className="flex flex-wrap gap-2">
          {['webdev', 'ai', 'cloud', 'database', 'semantic'].map((tag) => {
            const isSelected = selectedInterests.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleInterest(tag)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                  isSelected
                    ? 'bg-violet-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-300 hover:border-slate-400'
                }`}
              >
                #{tag} {isSelected ? '✓' : '+'}
              </button>
            );
          })}
        </div>
      </div>

      {/* Recommendations Results List */}
      <div className="p-6">
        {isCalculated ? (
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
              <span className="font-semibold text-slate-800">
                Ranked Items Generated via {algorithmType === 'content' ? 'Content-Based Tag Vector Match' : 'Collaborative Matrix Factorization'}
              </span>
              <span className="font-mono text-[11px] text-violet-600">Metric: Similarity Score [0.0 - 1.0]</span>
            </div>

            {activeResults.map((item, index) => (
              <div
                key={item.id}
                className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 shadow-2xs space-y-2 transition"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-slate-400">Rank #{index + 1}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-violet-100 text-violet-800 font-mono text-xs font-bold">
                    Confidence: {(item.score * 100).toFixed(0)}%
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                
                {/* Tags */}
                <div className="flex gap-1.5 pt-0.5">
                  {item.tags.map(t => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      #{t}
                    </span>
                  ))}
                </div>

                {/* Explanation */}
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-600 flex items-start gap-2">
                  <Info className="w-3.5 h-3.5 text-violet-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">Why recommended: </strong>
                    {item.reason}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-slate-500 border border-dashed border-slate-200 rounded-xl space-y-2">
            <Sparkles className="w-8 h-8 text-slate-400 mx-auto" />
            <div className="text-xs font-semibold text-slate-700">Click &quot;Compute Recommendations&quot; above</div>
            <div className="text-[11px] text-slate-400 max-w-xs mx-auto">
              Select your tag affinities and compare how Content-Based Filtering and Collaborative Filtering rank candidate articles differently.
            </div>
          </div>
        )}

        {/* Educational Callout */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 font-semibold">The Cold-Start Problem: </strong>
            Collaborative filtering suffers when a new user or item enters the platform because there is zero interaction history to calculate similarity. Content-based filtering solves this by matching metadata tags immediately. Modern platforms deploy <em>hybrid recommender engines</em> merging both techniques.
          </div>
        </div>
      </div>
    </div>
  );
}
