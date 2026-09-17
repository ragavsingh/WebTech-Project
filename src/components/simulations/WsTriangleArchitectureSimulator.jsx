import React, { useState } from 'react';
import { 
  Server, 
  Database, 
  Smartphone, 
  ArrowRight, 
  FileCode, 
  Search, 
  Send, 
  CheckCircle2, 
  RotateCcw, 
  Play, 
  Pause, 
  Info,
  Sparkles,
  Layers
} from 'lucide-react';

const TRIANGLE_STEPS = [
  {
    step: 1,
    title: '1. Service Description Authored',
    actor: 'Service Provider',
    action: 'Author Contract',
    short: 'Author WSDL',
    desc: 'The Service Provider creates business logic and writes an exact WSDL contract declaring operations, input/output data types, and SOAP port bindings.',
    artifact: 'StockQuoteService.wsdl'
  },
  {
    step: 2,
    title: '2. Publish to Registry',
    actor: 'Provider -> Registry',
    action: 'Publish (UDDI)',
    short: 'Publish',
    desc: 'The Provider registers the WSDL contract and business taxonomy in the central UDDI Registry so global consumers can discover it.',
    artifact: 'UDDI Publish API: save_business() + save_service()'
  },
  {
    step: 3,
    title: '3. Consumer Discovers Service',
    actor: 'Service Consumer -> Registry',
    action: 'Find (Inquire)',
    short: 'Find',
    desc: 'The Service Consumer queries the UDDI registry looking for a financial quotes service matching category NAICS:523130.',
    artifact: 'UDDI Inquire API: find_service("StockQuote")'
  },
  {
    step: 4,
    title: '4. Registry Delivers WSDL Contract',
    actor: 'Registry -> Consumer',
    action: 'Contract Return',
    short: 'Receive WSDL',
    desc: 'The UDDI Registry returns the Green Pages entry containing the live URL pointing to StockQuoteService.wsdl.',
    artifact: 'WSDL Document Downloaded to Consumer'
  },
  {
    step: 5,
    title: '5. Client Stub Generation',
    actor: 'Service Consumer',
    action: 'Generate Proxy',
    short: 'Client Proxy',
    desc: 'The consumer compiler reads the WSDL and automatically synthesizes strongly-typed client proxy stub classes in the consumer programming language (e.g. Java, C#).',
    artifact: 'StockQuoteServiceClient proxy = new StockQuoteServiceClient();'
  },
  {
    step: 6,
    title: '6. Direct SOAP Request (Bind)',
    actor: 'Consumer -> Provider',
    action: 'Bind (Invoke)',
    short: 'SOAP Request',
    desc: 'The Consumer bypasses the registry and connects directly to the Provider over HTTP POST, transmitting an XML SOAP envelope containing the request parameters.',
    artifact: 'POST /soap/quotes HTTP/1.1 <soap:Envelope>...'
  },
  {
    step: 7,
    title: '7. Service Response Returned',
    actor: 'Provider -> Consumer',
    action: 'Execute & Return',
    short: 'SOAP Response',
    desc: 'The Provider executes business logic, queries database prices, and transmits the SOAP response envelope with real-time stock quote values.',
    artifact: 'HTTP 200 OK <soap:Envelope><price>188.45</price>...'
  }
];

export default function WsTriangleArchitectureSimulator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeStep = TRIANGLE_STEPS[currentStep - 1];

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(1);
  };

  const handleNext = () => {
    if (currentStep < TRIANGLE_STEPS.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Top Header */}
      <div className="bg-slate-900 text-white px-5 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-xl border border-indigo-500/30">
            <Layers size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold">Web Service Architecture: The SOA Triangle</h3>
            <p className="text-xs text-slate-400">
              Provider &rarr; Description &rarr; Registry &rarr; Consumer &rarr; Request &rarr; Service &rarr; Response
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono bg-indigo-950 text-indigo-300 px-2.5 py-1 rounded border border-indigo-800">
            Publish · Find · Bind Paradigm
          </span>
        </div>
      </div>

      {/* The SOA Triangle Visual Diagram */}
      <div className="p-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto relative py-6">
          {/* Top Node: UDDI Registry */}
          <div className="flex justify-center mb-10">
            <div className={`p-4 rounded-2xl border shadow-sm text-center transition w-64 ${
              currentStep === 2 || currentStep === 3 || currentStep === 4
                ? 'bg-indigo-600 text-white border-indigo-700 ring-4 ring-indigo-100 scale-105'
                : 'bg-white text-slate-800 border-slate-200'
            }`}>
              <Database size={24} className="mx-auto mb-1 opacity-90" />
              <div className="font-bold text-xs">UDDI Central Registry</div>
              <div className={`text-[10px] ${currentStep >= 2 && currentStep <= 4 ? 'text-indigo-200' : 'text-slate-400'}`}>
                Service Catalog &amp; WSDL Pointers
              </div>
            </div>
          </div>

          {/* Bottom Nodes: Provider (Left) and Consumer (Right) */}
          <div className="flex justify-between items-center px-4 sm:px-12">
            {/* Service Provider */}
            <div className={`p-4 rounded-2xl border shadow-sm text-center transition w-56 ${
              currentStep === 1 || currentStep === 2 || currentStep === 7
                ? 'bg-blue-600 text-white border-blue-700 ring-4 ring-blue-100 scale-105'
                : 'bg-white text-slate-800 border-slate-200'
            }`}>
              <Server size={24} className="mx-auto mb-1 opacity-90" />
              <div className="font-bold text-xs">Service Provider</div>
              <div className={`text-[10px] ${currentStep === 1 || currentStep === 2 || currentStep === 7 ? 'text-blue-200' : 'text-slate-400'}`}>
                Hosts Logic &amp; Endpoints
              </div>
            </div>

            {/* Direct Bind Axis */}
            <div className="text-center font-mono text-xs px-2">
              <span className={`block text-[11px] font-bold ${currentStep >= 6 ? 'text-emerald-700' : 'text-slate-400'}`}>
                BIND (SOAP / HTTP)
              </span>
              <span className="text-[10px] text-slate-400">Direct Machine-to-Machine</span>
            </div>

            {/* Service Consumer */}
            <div className={`p-4 rounded-2xl border shadow-sm text-center transition w-56 ${
              currentStep === 3 || currentStep === 5 || currentStep === 6
                ? 'bg-emerald-600 text-white border-emerald-700 ring-4 ring-emerald-100 scale-105'
                : 'bg-white text-slate-800 border-slate-200'
            }`}>
              <Smartphone size={24} className="mx-auto mb-1 opacity-90" />
              <div className="font-bold text-xs">Service Consumer</div>
              <div className={`text-[10px] ${currentStep === 3 || currentStep === 5 || currentStep === 6 ? 'text-emerald-200' : 'text-slate-400'}`}>
                Client App / Web Front
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step Buttons Tracker */}
      <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center gap-1.5 overflow-x-auto">
        {TRIANGLE_STEPS.map(s => {
          const isCurrent = currentStep === s.step;
          const isPassed = currentStep > s.step;

          return (
            <button
              key={s.step}
              onClick={() => setCurrentStep(s.step)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition flex items-center gap-1.5 ${
                isCurrent
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : isPassed
                  ? 'bg-white text-slate-800 border border-slate-300'
                  : 'bg-white/60 text-slate-500 border border-slate-200 hover:bg-white'
              }`}
            >
              {isPassed ? (
                <CheckCircle2 size={12} className="text-emerald-600 shrink-0" />
              ) : (
                <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-bold">
                  {s.step}
                </span>
              )}
              <span>{s.short}</span>
            </button>
          );
        })}
      </div>

      {/* Detailed Active Step Inspector */}
      <div className="p-6 bg-white flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">
                {activeStep.step}
              </span>
              <span>{activeStep.title}</span>
            </h4>
            <span className="text-xs font-mono bg-indigo-50 text-indigo-800 px-2.5 py-0.5 rounded border border-indigo-200">
              Interaction: {activeStep.action}
            </span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            {activeStep.desc}
          </p>

          {/* Artifact Preview */}
          <div className="p-3.5 bg-slate-950 rounded-xl font-mono text-xs text-emerald-300 border border-slate-800">
            <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">
              // Active Artifact / Protocol Call
            </div>
            <div>{activeStep.artifact}</div>
          </div>
        </div>

        {/* Stepper Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100">
          <button
            onClick={handleReset}
            className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 rounded-lg transition flex items-center gap-1"
          >
            <RotateCcw size={12} />
            <span>Reset Flow</span>
          </button>

          <button
            onClick={handleNext}
            disabled={currentStep >= TRIANGLE_STEPS.length}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-semibold text-xs rounded-xl shadow-sm transition flex items-center gap-1.5"
          >
            <span>{currentStep >= TRIANGLE_STEPS.length ? 'Flow Completed' : 'Continue to Next Stage'}</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>

      {/* Footer Takeaway */}
      <div className="p-4 bg-indigo-50/70 border-t border-indigo-100 text-xs text-indigo-950 flex items-start gap-2.5">
        <Info size={16} className="text-indigo-600 shrink-0 mt-0.5" />
        <div>
          <strong className="text-indigo-900">The 3 Operations of SOA: </strong>
          The Service-Oriented Architecture (SOA) is defined by three fundamental verbs: <strong>Publish</strong> (Provider deposits description in Registry), <strong>Find</strong> (Consumer queries Registry to discover capabilities), and <strong>Bind</strong> (Consumer communicates directly with Provider to invoke services).
        </div>
      </div>
    </div>
  );
}
