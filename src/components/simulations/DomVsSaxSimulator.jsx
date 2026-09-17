import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Database, 
  Zap, 
  AlertTriangle, 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  CheckCircle2, 
  Activity, 
  Radio, 
  Info,
  Sliders,
  FileText
} from 'lucide-react';

const DOC_SIZES = [
  { id: 'small', label: '50 KB', sub: 'Config File', domMem: '450 KB', saxMem: '4 KB', domCrash: false },
  { id: 'medium', label: '5 MB', sub: 'E-commerce Feed', domMem: '48 MB', saxMem: '4 KB', domCrash: false },
  { id: 'large', label: '250 MB', sub: 'Annual Log Archive', domMem: '2.4 GB', saxMem: '4 KB', domCrash: false },
  { id: 'huge', label: '2 GB', sub: 'Genomic Dump', domMem: '18+ GB (OOM Crash)', saxMem: '4 KB', domCrash: true }
];

const SAX_EVENTS_SEQUENCE = [
  { event: 'startDocument()', detail: 'Parser opens stream' },
  { event: 'startElement("catalog")', detail: 'Root element opened' },
  { event: 'startElement("item", id="A-101")', detail: 'Item 1 started with attributes' },
  { event: 'characters("Quantum Laptop")', detail: 'Text buffer parsed' },
  { event: 'endElement("item")', detail: 'Item 1 closed (node discarded)' },
  { event: 'startElement("item", id="A-102")', detail: 'Item 2 started' },
  { event: 'characters("Wireless Headset")', detail: 'Text buffer parsed' },
  { event: 'endElement("item")', detail: 'Item 2 closed (node discarded)' },
  { event: 'endElement("catalog")', detail: 'Root element closed' },
  { event: 'endDocument()', detail: 'Parsing completed successfully' }
];

export default function DomVsSaxSimulator() {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1); // 5 MB default
  const [saxEventIndex, setSaxEventIndex] = useState(0);
  const [isStreaming, setIsStreaming] = useState(false);
  const [activeTab, setActiveTab] = useState('architecture'); // 'architecture' | 'matrix'

  const currentSize = DOC_SIZES[selectedSizeIndex];

  // Streaming timer for SAX events
  useEffect(() => {
    let timer;
    if (isStreaming) {
      timer = setInterval(() => {
        setSaxEventIndex(prev => {
          if (prev >= SAX_EVENTS_SEQUENCE.length - 1) {
            setIsStreaming(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isStreaming]);

  const handleNextSaxEvent = () => {
    if (saxEventIndex < SAX_EVENTS_SEQUENCE.length - 1) {
      setSaxEventIndex(prev => prev + 1);
    }
  };

  const handleResetSax = () => {
    setIsStreaming(false);
    setSaxEventIndex(0);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Top Header */}
      <div className="bg-slate-900 text-white px-5 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-xl border border-indigo-500/30">
            <Activity size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold">DOM vs SAX Processing &amp; Memory Laboratory</h3>
            <p className="text-xs text-slate-400">
              Interactive memory consumption, parsing velocity, and streaming event tracer
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex bg-slate-800 p-0.5 rounded-lg border border-slate-700">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition ${
                activeTab === 'architecture' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Interactive Simulator
            </button>
            <button
              onClick={() => setActiveTab('matrix')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition ${
                activeTab === 'matrix' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Decision Matrix
            </button>
          </div>
        </div>
      </div>

      {/* Document Size Selector */}
      <div className="bg-slate-100/90 px-5 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <Sliders size={14} className="text-indigo-600" />
          <span>Simulate Document File Size:</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full sm:w-auto">
          {DOC_SIZES.map((size, idx) => (
            <button
              key={size.id}
              onClick={() => {
                setSelectedSizeIndex(idx);
                setSaxEventIndex(0);
                setIsStreaming(false);
              }}
              className={`px-3 py-1.5 rounded-xl text-left border transition text-xs ${
                selectedSizeIndex === idx
                  ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs font-semibold'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              <div className="font-bold">{size.label}</div>
              <div className={`text-[10px] truncate ${selectedSizeIndex === idx ? 'text-indigo-200' : 'text-slate-400'}`}>
                {size.sub}
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'architecture' ? (
        <div>
          {/* Side-by-Side Model Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            {/* DOM Side */}
            <div className="p-6 bg-slate-50/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Database className="text-indigo-600" size={18} />
                    <h4 className="font-bold text-sm text-slate-900">DOM (Document Object Model)</h4>
                  </div>
                  <span className="text-[11px] font-mono bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded border border-indigo-200">
                    Tree / In-Memory
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Parses the entire XML file into a bidirectional node tree residing in RAM. Every tag, attribute, and text node is an instantiated object with parent, child, and sibling pointers.
                </p>

                {/* Memory Footprint Card */}
                <div className={`p-4 rounded-xl border mb-4 ${
                  currentSize.domCrash 
                    ? 'bg-rose-50 border-rose-300 text-rose-950' 
                    : 'bg-white border-slate-200 text-slate-900 shadow-xs'
                }`}>
                  <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                    <span>RAM Footprint (5x - 10x multiplier):</span>
                    <span className={`font-mono text-sm font-bold ${
                      currentSize.domCrash ? 'text-rose-600 animate-pulse' : 'text-indigo-700'
                    }`}>
                      {currentSize.domMem}
                    </span>
                  </div>

                  {/* Progress bar visual */}
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200 mb-2">
                    <div 
                      className={`h-full transition-all duration-500 ${
                        currentSize.domCrash ? 'bg-rose-600 w-full' : selectedSizeIndex === 2 ? 'bg-amber-500 w-3/4' : 'bg-indigo-600 w-1/4'
                      }`}
                    />
                  </div>

                  {currentSize.domCrash ? (
                    <div className="flex items-center gap-1.5 text-xs text-rose-700 font-semibold mt-1">
                      <AlertTriangle size={14} />
                      <span>CRITICAL: java.lang.OutOfMemoryError (Process Killed)</span>
                    </div>
                  ) : (
                    <div className="text-[11px] text-slate-500">
                      High memory overhead because node object pointers consume significantly more bytes than raw XML text.
                    </div>
                  )}
                </div>

                {/* Visual Tree Illustration */}
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-mono space-y-1">
                  <div className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">// In-Memory Node Tree</div>
                  <div className="text-indigo-700 font-bold">Document</div>
                  <div className="pl-3 text-indigo-600 border-l border-slate-200">└─ &lt;catalog&gt;</div>
                  <div className="pl-6 text-slate-700 border-l border-slate-200">
                    ├─ &lt;item id="A-101"&gt; <span className="text-emerald-600">"Quantum Laptop"</span>
                  </div>
                  <div className="pl-6 text-slate-700 border-l border-slate-200">
                    └─ &lt;item id="A-102"&gt; <span className="text-emerald-600">"Wireless Headset"</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-600 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Random access navigation (XPath, querySelector, parentNode)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Allows document modification, node insertion, and attribute editing</span>
                </div>
                <div className="flex items-center gap-2 text-rose-600">
                  <span className="font-bold">✗</span>
                  <span>Cannot handle files larger than available heap memory</span>
                </div>
              </div>
            </div>

            {/* SAX Side */}
            <div className="p-6 bg-slate-50/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Radio className="text-emerald-600" size={18} />
                    <h4 className="font-bold text-sm text-slate-900">SAX (Simple API for XML)</h4>
                  </div>
                  <span className="text-[11px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">
                    Streaming / Event-Driven
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Reads the XML linearly in a single forward pass. Emits event callbacks as tags open, content arrives, and tags close. Discards tokens immediately from memory.
                </p>

                {/* Memory Footprint Card */}
                <div className="p-4 rounded-xl border bg-white border-slate-200 text-slate-900 shadow-xs mb-4">
                  <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                    <span>RAM Footprint (Constant buffer O(1)):</span>
                    <span className="font-mono text-sm font-bold text-emerald-600">
                      {currentSize.saxMem}
                    </span>
                  </div>

                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200 mb-2">
                    <div className="h-full bg-emerald-500 w-[5%]" />
                  </div>

                  <div className="text-[11px] text-slate-500">
                    Always predictable memory overhead. Can easily stream a 50GB file on an inexpensive machine with 256MB RAM!
                  </div>
                </div>

                {/* Live Event Stream Runner */}
                <div className="bg-slate-950 p-4 rounded-xl text-xs font-mono text-slate-200">
                  <div className="flex items-center justify-between mb-2 text-slate-400 text-[11px]">
                    <span className="uppercase font-bold tracking-wider">// SAX Event Callback Feed</span>
                    <span>Event {saxEventIndex + 1} of {SAX_EVENTS_SEQUENCE.length}</span>
                  </div>

                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-emerald-400 mb-2">
                    <span className="text-slate-500">handler.</span>
                    <span className="font-bold text-emerald-300">{SAX_EVENTS_SEQUENCE[saxEventIndex].event}</span>
                    <span className="block text-[11px] text-slate-400 mt-0.5">
                      // {SAX_EVENTS_SEQUENCE[saxEventIndex].detail}
                    </span>
                  </div>

                  {/* SAX Event Controls */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => setIsStreaming(!isStreaming)}
                      className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-[11px] font-semibold flex items-center gap-1 transition"
                    >
                      {isStreaming ? <Pause size={12} /> : <Play size={12} />}
                      <span>{isStreaming ? 'Pause' : 'Stream Events'}</span>
                    </button>
                    <button
                      onClick={handleNextSaxEvent}
                      disabled={saxEventIndex >= SAX_EVENTS_SEQUENCE.length - 1 || isStreaming}
                      className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-slate-200 rounded text-[11px] flex items-center gap-1 transition"
                    >
                      <span>Next Event</span>
                      <ChevronRight size={12} />
                    </button>
                    <button
                      onClick={handleResetSax}
                      className="px-2 py-1 text-slate-400 hover:text-white text-[11px] transition"
                    >
                      <RotateCcw size={12} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-600 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Blazing fast execution with negligible constant memory</span>
                </div>
                <div className="flex items-center gap-2 text-rose-600">
                  <span className="font-bold">✗</span>
                  <span>Read-only: cannot modify the XML document</span>
                </div>
                <div className="flex items-center gap-2 text-rose-600">
                  <span className="font-bold">✗</span>
                  <span>Forward-only: cannot traverse backwards without restarting stream</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Decision Matrix Table */
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase text-[10px] tracking-wider">
                  <th className="py-3 px-4">Evaluation Criteria</th>
                  <th className="py-3 px-4 text-indigo-700 font-bold">DOM (Document Object Model)</th>
                  <th className="py-3 px-4 text-emerald-700 font-bold">SAX (Simple API for XML)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Parsing Model</td>
                  <td className="py-3 px-4">Tree-based (Memory resident)</td>
                  <td className="py-3 px-4">Event-based (Push parser streaming)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Memory Usage</td>
                  <td className="py-3 px-4 text-rose-700 font-semibold">High: $O(N)$ (~5-10x document file size)</td>
                  <td className="py-3 px-4 text-emerald-700 font-semibold">Very Low: $O(1)$ constant buffer</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Navigation Flexibility</td>
                  <td className="py-3 px-4">Bidirectional (Parent, child, sibling, XPath)</td>
                  <td className="py-3 px-4 text-slate-600">Forward-only, linear sequence</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Read / Write Access</td>
                  <td className="py-3 px-4 text-indigo-700 font-medium">Read and Write (insert, update, delete nodes)</td>
                  <td className="py-3 px-4 text-slate-600">Read-only event stream</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Best Suited For</td>
                  <td className="py-3 px-4">Interactive apps, XML editors, small configs, XSLT, XPath</td>
                  <td className="py-3 px-4">Large databases, log ingestion, batch processing, memory-constrained IoT</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Footer Summary */}
      <div className="p-4 bg-indigo-50/70 border-t border-indigo-100 text-xs text-indigo-950 flex items-start gap-2.5">
        <Info size={16} className="text-indigo-600 shrink-0 mt-0.5" />
        <div>
          <strong className="text-indigo-900">Engineering Rule of Thumb: </strong>
          If you need to query, modify, or repeatedly navigate an XML structure smaller than ~10MB, use <strong>DOM</strong>. If you are reading large feeds (&gt;50MB) or extracting a few specific tags without needing the entire document in memory, use <strong>SAX</strong>.
        </div>
      </div>
    </div>
  );
}
