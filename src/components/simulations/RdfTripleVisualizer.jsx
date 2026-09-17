import React, { useState } from 'react';
import { 
  Network, 
  Plus, 
  Trash2, 
  Code, 
  ArrowRight, 
  Share2, 
  Sparkles, 
  Info,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';

const INITIAL_TRIPLES = [
  { id: 1, subject: 'Tim_Berners_Lee', predicate: 'created', object: 'WorldWideWeb' },
  { id: 2, subject: 'Tim_Berners_Lee', predicate: 'worksFor', object: 'W3C' },
  { id: 3, subject: 'WorldWideWeb', predicate: 'utilizes', object: 'RDF_Standard' },
  { id: 4, subject: 'Alice', predicate: 'studies', object: 'WebTech_Course' }
];

const SUBJECT_OPTIONS = ['Tim_Berners_Lee', 'WorldWideWeb', 'Alice', 'Bob', 'WebTech_Course', 'W3C'];
const PREDICATE_OPTIONS = ['created', 'worksFor', 'knows', 'teaches', 'studies', 'utilizes', 'authoredBy'];
const OBJECT_OPTIONS = ['WorldWideWeb', 'W3C', 'Bob', 'Alice', 'WebTech_Course', 'RDF_Standard', 'SemanticWeb'];

export default function RdfTripleVisualizer() {
  const [triples, setTriples] = useState(INITIAL_TRIPLES);
  const [selectedSubject, setSelectedSubject] = useState(SUBJECT_OPTIONS[0]);
  const [selectedPredicate, setSelectedPredicate] = useState(PREDICATE_OPTIONS[0]);
  const [selectedObject, setSelectedObject] = useState(OBJECT_OPTIONS[0]);
  const [exportFormat, setExportFormat] = useState('turtle'); // 'turtle' | 'ntriples' | 'jsonld'

  const handleAddTriple = () => {
    // Prevent duplicate exact triples
    const exists = triples.some(
      t => t.subject === selectedSubject && t.predicate === selectedPredicate && t.object === selectedObject
    );
    if (exists) return;

    const newTriple = {
      id: Date.now(),
      subject: selectedSubject,
      predicate: selectedPredicate,
      object: selectedObject
    };
    setTriples([...triples, newTriple]);
  };

  const handleRemoveTriple = (id) => {
    setTriples(triples.filter(t => t.id !== id));
  };

  const handleReset = () => {
    setTriples(INITIAL_TRIPLES);
  };

  // Generate serialization string
  const getSerializationCode = () => {
    if (exportFormat === 'turtle') {
      return `@prefix ex: <http://example.org/vocab#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

${triples.map(t => `ex:${t.subject} ex:${t.predicate} ex:${t.object} .`).join('\n')}`;
    }

    if (exportFormat === 'ntriples') {
      return triples.map(t => 
        `<http://example.org/vocab#${t.subject}> <http://example.org/vocab#${t.predicate}> <http://example.org/vocab#${t.object}> .`
      ).join('\n');
    }

    if (exportFormat === 'jsonld') {
      return JSON.stringify({
        "@context": {
          "ex": "http://example.org/vocab#"
        },
        "@graph": triples.map(t => ({
          "@id": `ex:${t.subject}`,
          [`ex:${t.predicate}`]: {
            "@id": `ex:${t.object}`
          }
        }))
      }, null, 2);
    }

    return '';
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-indigo-500/30">
              <Network className="w-3.5 h-3.5" /> Resource Description Framework (RDF)
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              RDF Knowledge Graph & Triple Builder
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Every fact in the Semantic Web is modeled as an atomic 3-part statement: <code>(Subject) → [Predicate] → (Object)</code>. Compose triples and observe real-time graph linking.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center gap-1.5 transition"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Reset Graph
            </button>
          </div>
        </div>

        {/* Triple Builder Inputs */}
        <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Compose a New RDF Triple Statement
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            {/* Subject */}
            <div className="sm:col-span-4">
              <label className="block text-[11px] text-slate-400 mb-1">Subject (URI Resource)</label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full text-xs font-mono px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {SUBJECT_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            {/* Predicate */}
            <div className="sm:col-span-3">
              <label className="block text-[11px] text-slate-400 mb-1">Predicate (Property / Edge)</label>
              <select
                value={selectedPredicate}
                onChange={(e) => setSelectedPredicate(e.target.value)}
                className="w-full text-xs font-mono px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {PREDICATE_OPTIONS.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>

            {/* Object */}
            <div className="sm:col-span-3">
              <label className="block text-[11px] text-slate-400 mb-1">Object (Target Node / Value)</label>
              <select
                value={selectedObject}
                onChange={(e) => setSelectedObject(e.target.value)}
                className="w-full text-xs font-mono px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {OBJECT_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            {/* Add Button */}
            <div className="sm:col-span-2 pt-4 sm:pt-0">
              <label className="block text-[11px] text-transparent mb-1 select-none">Action</label>
              <button
                onClick={handleAddTriple}
                className="w-full py-2 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow transition"
              >
                <Plus className="w-4 h-4" /> Add Triple
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Visualizer Area */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Interactive Graph Canvas */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Visual Knowledge Graph ({triples.length} Statements)</span>
              <span className="text-[11px] text-indigo-600">Directed Graph</span>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 min-h-[350px] flex flex-col justify-between">
              {/* Rendered Statements */}
              <div className="space-y-2.5">
                {triples.map((t) => (
                  <div
                    key={t.id}
                    className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-2 flex-wrap flex-1">
                      {/* Subject Node */}
                      <span className="px-2.5 py-1 rounded-lg bg-indigo-100 text-indigo-800 font-mono font-bold text-[11px]">
                        :{t.subject}
                      </span>
                      
                      {/* Predicate Arrow */}
                      <div className="flex items-center gap-1 text-amber-600 font-mono text-[11px] font-semibold">
                        <span>──[</span>
                        <span>{t.predicate}</span>
                        <span>]──▶</span>
                      </div>

                      {/* Object Node */}
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-mono font-bold text-[11px]">
                        :{t.object}
                      </span>
                    </div>

                    {/* Delete action */}
                    <button
                      onClick={() => handleRemoveTriple(t.id)}
                      className="p-1 text-slate-400 hover:text-rose-600 rounded transition"
                      title="Remove triple statement"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-400">
                <span>W3C RDF Semantic Model</span>
                <span>Statements form a global labeled directed multigraph</span>
              </div>
            </div>
          </div>

          {/* Right Column: Serialized Semantic Code (Turtle / N-Triples / JSON-LD) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 font-semibold">Serialization Format:</span>
              <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-0.5 text-xs font-medium">
                <button
                  onClick={() => setExportFormat('turtle')}
                  className={`px-2.5 py-0.5 rounded-md transition ${exportFormat === 'turtle' ? 'bg-white shadow text-slate-900 font-bold' : 'text-slate-600'}`}
                >
                  Turtle
                </button>
                <button
                  onClick={() => setExportFormat('ntriples')}
                  className={`px-2.5 py-0.5 rounded-md transition ${exportFormat === 'ntriples' ? 'bg-white shadow text-slate-900 font-bold' : 'text-slate-600'}`}
                >
                  N-Triples
                </button>
                <button
                  onClick={() => setExportFormat('jsonld')}
                  className={`px-2.5 py-0.5 rounded-md transition ${exportFormat === 'jsonld' ? 'bg-white shadow text-slate-900 font-bold' : 'text-slate-600'}`}
                >
                  JSON-LD
                </button>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex flex-col h-[350px]">
              <div className="bg-slate-900 px-4 py-2 text-[11px] font-mono text-slate-400 border-b border-slate-800 flex items-center justify-between">
                <span>Output Syntax: {exportFormat.toUpperCase()}</span>
                <span className="text-emerald-400">Valid</span>
              </div>
              <pre className="p-4 text-xs font-mono text-indigo-300 overflow-auto leading-relaxed flex-1">
                <code>{getSerializationCode()}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* RDF Principles Callout */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 font-semibold">Global Identifiers (URIs): </strong>
            Unlike relational databases where primary keys (e.g. <code>id=42</code>) are only unique within a single local table, RDF subjects, predicates, and objects can be globally qualified URIs (e.g. <code>http://dbpedia.org/resource/Tim_Berners-Lee</code>). Anyone in the world can assert facts about any URI without a centralized schema authority.
          </div>
        </div>
      </div>
    </div>
  );
}
