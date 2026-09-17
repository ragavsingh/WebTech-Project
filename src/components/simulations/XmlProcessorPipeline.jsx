import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  CheckCircle2, 
  AlertOctagon, 
  ShieldCheck, 
  ShieldAlert,
  ArrowRight,
  Database,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';

const PIPELINE_STEPS = [
  {
    id: 1,
    name: '1. Character Stream',
    short: 'Byte Stream',
    desc: 'Reads raw octets from network/file, resolves character encoding (UTF-8/UTF-16), and strips Byte Order Marks (BOM).',
    output: 'Decoded Unicode Character Stream'
  },
  {
    id: 2,
    name: '2. Lexical Analyzer (Tokenizer)',
    short: 'Lexer / Tokenizer',
    desc: 'Scans stream to emit XML tokens: START_TAG, END_TAG, ATTRIBUTE, TEXT_CONTENT, ENTITY_REF, and COMMENT.',
    output: 'Stream of XML Semantic Tokens'
  },
  {
    id: 3,
    name: '3. Parser & Grammar Engine',
    short: 'Grammar Parser',
    desc: 'Enforces W3C Well-Formedness rules (single root, matching tags, unique attributes). If validating, checks DTD/XSD grammar.',
    output: 'Validated Structural Grammar'
  },
  {
    id: 4,
    name: '4. Output Model Generation',
    short: 'Application Delivery',
    desc: 'Constructs the target representation: builds an in-memory DOM Tree or fires SAX event callbacks to the application.',
    output: 'DOM Tree in RAM / SAX Event Stream'
  }
];

export default function XmlProcessorPipeline() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isValidatingProcessor, setIsValidatingProcessor] = useState(true);
  const [injectedError, setInjectedError] = useState(null); // 'syntax' | 'schema' | null

  // Auto-play timer
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= 4) {
            setIsPlaying(false);
            return 4;
          }
          return prev + 1;
        });
      }, 1500);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(1);
    setInjectedError(null);
  };

  const handleStepForward = () => {
    if (currentStep < 4) setCurrentStep(prev => prev + 1);
  };

  // Determine failure status for current pipeline state
  const isSyntaxFailing = injectedError === 'syntax' && currentStep >= 3;
  const isSchemaFailing = injectedError === 'schema' && isValidatingProcessor && currentStep >= 3;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Top Header */}
      <div className="bg-slate-900 text-white px-5 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/20 text-blue-400 rounded-xl border border-blue-500/30">
            <Cpu size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold">XML Processor &amp; Parser Pipeline</h3>
            <p className="text-xs text-slate-400">
              Trace how XML engines parse character streams, enforce grammar, and construct object models
            </p>
          </div>
        </div>

        {/* Validating vs Non-Validating Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Processor Type:</span>
          <div className="flex bg-slate-800 p-0.5 rounded-lg border border-slate-700">
            <button
              onClick={() => setIsValidatingProcessor(true)}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition flex items-center gap-1.5 ${
                isValidatingProcessor ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShieldCheck size={13} />
              <span>Validating</span>
            </button>
            <button
              onClick={() => setIsValidatingProcessor(false)}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition flex items-center gap-1.5 ${
                !isValidatingProcessor ? 'bg-amber-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShieldAlert size={13} />
              <span>Non-Validating</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4-Step Pipeline Header Bar */}
      <div className="bg-slate-100/90 px-4 py-3 border-b border-slate-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {PIPELINE_STEPS.map(step => {
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;
            const hasFailedHere = (isSyntaxFailing || isSchemaFailing) && step.id === 3;

            return (
              <button
                key={step.id}
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentStep(step.id);
                }}
                className={`p-3 rounded-xl text-left border transition relative overflow-hidden ${
                  hasFailedHere
                    ? 'bg-rose-50 border-rose-300 text-rose-950'
                    : isActive
                    ? 'bg-blue-600 text-white border-blue-700 shadow-sm'
                    : isCompleted
                    ? 'bg-white border-slate-300 text-slate-900'
                    : 'bg-slate-50 border-slate-200 text-slate-500 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${
                    isActive ? 'text-blue-100' : hasFailedHere ? 'text-rose-600' : 'text-slate-400'
                  }`}>
                    Stage {step.id}
                  </span>
                  {hasFailedHere ? (
                    <AlertOctagon size={14} className="text-rose-600" />
                  ) : isCompleted ? (
                    <CheckCircle2 size={14} className="text-emerald-500" />
                  ) : null}
                </div>
                <div className="font-bold text-xs truncate">{step.short}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Control Buttons Bar */}
      <div className="px-5 py-3 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm flex items-center gap-1.5 transition"
          >
            {isPlaying ? <Pause size={13} /> : <Play size={13} />}
            <span>{isPlaying ? 'Pause' : 'Play Flow'}</span>
          </button>
          <button
            onClick={handleStepForward}
            disabled={currentStep >= 4 || isPlaying}
            className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 text-xs font-semibold rounded-lg border border-slate-300 flex items-center gap-1.5 transition"
          >
            <span>Next Stage</span>
            <ChevronRight size={13} />
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition flex items-center gap-1"
          >
            <RotateCcw size={13} />
            <span>Reset</span>
          </button>
        </div>

        {/* Inject Error Buttons */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500">Inject Test Fault:</span>
          <button
            onClick={() => {
              setInjectedError('syntax');
              setCurrentStep(3);
            }}
            className={`px-2.5 py-1 text-xs rounded-lg border transition ${
              injectedError === 'syntax'
                ? 'bg-rose-600 text-white border-rose-700 font-semibold'
                : 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100'
            }`}
          >
            Unclosed Tag
          </button>
          <button
            onClick={() => {
              setInjectedError('schema');
              setCurrentStep(3);
            }}
            className={`px-2.5 py-1 text-xs rounded-lg border transition ${
              injectedError === 'schema'
                ? 'bg-amber-600 text-white border-amber-700 font-semibold'
                : 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100'
            }`}
          >
            Schema Type Mismatch
          </button>
        </div>
      </div>

      {/* Active Stage Deep-Dive */}
      <div className="p-6 bg-slate-50/60">
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs mb-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
                {currentStep}
              </span>
              <span>{PIPELINE_STEPS[currentStep - 1].name}</span>
            </h4>
            <span className="text-xs font-mono bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded border border-slate-200">
              Output: {PIPELINE_STEPS[currentStep - 1].output}
            </span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            {PIPELINE_STEPS[currentStep - 1].desc}
          </p>

          {/* Interactive Inspection for each Step */}
          {currentStep === 1 && (
            <div className="bg-slate-950 p-4 rounded-xl font-mono text-xs text-slate-200">
              <div className="text-slate-500 text-[11px] mb-2">// Raw UTF-8 Byte Inspection</div>
              <div className="grid grid-cols-8 gap-1 text-center font-mono text-[11px] text-blue-400">
                <span>3C</span><span>3F</span><span>78</span><span>6D</span><span>6C</span><span>20</span><span>76</span><span>65</span>
                <span>72</span><span>73</span><span>69</span><span>6F</span><span>6E</span><span>3D</span><span>22</span><span>31</span>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-800 text-emerald-400">
                &lt;?xml version="1.0" encoding="UTF-8"?&gt;&lt;book id="B101"&gt;&lt;title&gt;XML Essentials&lt;/title&gt;&lt;/book&gt;
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-700">Emitted Lexical Tokens:</div>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="bg-purple-100 text-purple-800 border border-purple-200 px-2 py-1 rounded">
                  XML_DECLARATION
                </span>
                <span className="bg-blue-100 text-blue-800 border border-blue-200 px-2 py-1 rounded">
                  START_TAG &lt;book&gt;
                </span>
                <span className="bg-amber-100 text-amber-800 border border-amber-200 px-2 py-1 rounded">
                  ATTRIBUTE id="B101"
                </span>
                <span className="bg-blue-100 text-blue-800 border border-blue-200 px-2 py-1 rounded">
                  START_TAG &lt;title&gt;
                </span>
                <span className="bg-emerald-100 text-emerald-800 border border-emerald-200 px-2 py-1 rounded">
                  TEXT "XML Essentials"
                </span>
                <span className="bg-blue-100 text-blue-800 border border-blue-200 px-2 py-1 rounded">
                  END_TAG &lt;/title&gt;
                </span>
                <span className="bg-blue-100 text-blue-800 border border-blue-200 px-2 py-1 rounded">
                  END_TAG &lt;/book&gt;
                </span>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-3">
              {isSyntaxFailing ? (
                <div className="p-4 bg-rose-50 border border-rose-300 rounded-xl text-xs text-rose-950">
                  <div className="font-bold flex items-center gap-2 mb-1">
                    <AlertOctagon size={16} className="text-rose-600" />
                    <span>Fatal Error: Fatal Parsing Exception (Not Well-Formed)</span>
                  </div>
                  <p>
                    XML parser encountered unmatched opening tag <code className="bg-rose-100 px-1 py-0.5 rounded">&lt;title&gt;</code> without corresponding closing tag before parent element ended.
                  </p>
                  <div className="mt-2 text-[11px] font-mono text-rose-800">
                    Line 3: XML Parsing Error: mismatched tag.
                  </div>
                </div>
              ) : isSchemaFailing ? (
                <div className="p-4 bg-amber-50 border border-amber-300 rounded-xl text-xs text-amber-950">
                  <div className="font-bold flex items-center gap-2 mb-1">
                    <ShieldAlert size={16} className="text-amber-600" />
                    <span>Schema Validation Violation (Validating Processor Only)</span>
                  </div>
                  <p>
                    The XML is syntactically well-formed, but violates declared XSD rules: expected <code className="bg-amber-100 px-1 py-0.5 rounded">xs:integer</code> for attribute <code className="bg-amber-100 px-1 py-0.5 rounded">price</code>, found string literal.
                  </p>
                  <p className="mt-1 text-[11px] text-amber-800">
                    Note: A <strong>Non-Validating</strong> processor would have accepted this document because it only checks syntax!
                  </p>
                </div>
              ) : (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950">
                  <div className="font-bold flex items-center gap-2 mb-1">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span>Grammar Verification Passed</span>
                  </div>
                  <p>
                    All grammar rules verified: Single root element, strictly nested container tags, unique attributes per element, and valid character references.
                  </p>
                </div>
              )}
            </div>
          )}

          {currentStep === 4 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-indigo-200 bg-indigo-50/50">
                <div className="font-bold text-xs text-indigo-950 mb-1 flex items-center gap-1.5">
                  <Database size={14} className="text-indigo-600" />
                  <span>Tree-Based Model (DOM)</span>
                </div>
                <p className="text-[11px] text-indigo-900 leading-relaxed mb-2">
                  Builds a complete hierarchical node tree in RAM. Allows bidirectional navigation and write/mutation operations.
                </p>
                <div className="font-mono text-[10px] bg-white p-2 rounded border border-indigo-200 text-slate-800">
                  root.firstChild.getAttribute('id') // "B101"
                </div>
              </div>

              <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50">
                <div className="font-bold text-xs text-emerald-950 mb-1 flex items-center gap-1.5">
                  <Sparkles size={14} className="text-emerald-600" />
                  <span>Event-Based Model (SAX)</span>
                </div>
                <p className="text-[11px] text-emerald-900 leading-relaxed mb-2">
                  Fires event callbacks (<code className="bg-emerald-100 px-1 py-0.5 rounded">startElement()</code>, <code className="bg-emerald-100 px-1 py-0.5 rounded">characters()</code>) on the fly without storing the tree in memory.
                </p>
                <div className="font-mono text-[10px] bg-white p-2 rounded border border-emerald-200 text-slate-800">
                  handler.startElement('book', attrs);
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footnote on Validating vs Non-Validating */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
        <Info size={16} className="text-blue-600 shrink-0 mt-0.5" />
        <div>
          <strong className="text-slate-800">Specification Definition: </strong>
          According to the W3C XML 1.0 Recommendation, all XML processors MUST report violations of <em>Well-Formedness</em> constraints. However, only <em>Validating</em> processors check for conformity to a DTD or XML Schema.
        </div>
      </div>
    </div>
  );
}
