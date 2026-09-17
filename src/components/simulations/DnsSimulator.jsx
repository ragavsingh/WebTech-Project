import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  Server, 
  Laptop, 
  Database, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Zap, 
  Layers, 
  Info,
  ShieldCheck
} from 'lucide-react';

export default function DnsSimulator() {
  const [domain, setDomain] = useState('webtech.dev');
  const [useCache, setUseCache] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1200); // ms per step
  const [logs, setLogs] = useState([]);

  const steps = [
    {
      id: 'browser',
      from: 'Browser / Client',
      to: 'Local DNS Cache',
      message: useCache ? 'Hit local OS cache! Returning 104.21.45.182 immediately.' : 'Checking local OS cache... Miss! Query forwarded to Recursive Resolver.',
      hop: 1,
      target: useCache ? 'client' : 'resolver',
      ipResult: useCache ? '104.21.45.182 (Cached, TTL 280s)' : null
    },
    {
      id: 'resolver_to_root',
      from: 'Recursive Resolver (8.8.8.8)',
      to: 'Root Nameserver (.)',
      message: 'Resolver asks Root Server: "Where is the nameserver for .dev TLD?" Root replies with .dev TLD IP list.',
      hop: 2,
      target: 'root'
    },
    {
      id: 'resolver_to_tld',
      from: 'Recursive Resolver',
      to: 'TLD Nameserver (.dev)',
      message: 'Resolver queries .dev Registry: "Where is webtech.dev?" TLD server returns Authoritative NS (ns1.dns-host.net).',
      hop: 3,
      target: 'tld'
    },
    {
      id: 'resolver_to_auth',
      from: 'Recursive Resolver',
      to: 'Authoritative Server',
      message: 'Resolver queries Authoritative NS for "A" record. Authoritative server returns IP 104.21.45.182 with TTL 300s.',
      hop: 4,
      target: 'auth'
    },
    {
      id: 'resolved',
      from: 'Recursive Resolver',
      to: 'Browser / Client',
      message: 'IP 104.21.45.182 delivered to browser. Browser caches record and initiates TCP connection to 104.21.45.182:443.',
      hop: 5,
      target: 'client',
      ipResult: '104.21.45.182 (A Record)'
    }
  ];

  const maxSteps = useCache ? 1 : steps.length;

  useEffect(() => {
    let timer;
    if (isPlaying && currentStep < maxSteps) {
      timer = setTimeout(() => {
        const next = currentStep + 1;
        setCurrentStep(next);
        const stepData = steps[currentStep];
        if (stepData) {
          setLogs(prev => [
            { time: new Date().toLocaleTimeString([], { hour12: false, minute: '2-digit', second: '2-digit' }), text: stepData.message },
            ...prev
          ]);
        }
        if (next >= maxSteps) {
          setIsPlaying(false);
        }
      }, speed);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStep, speed, useCache]);

  const handleStart = () => {
    if (currentStep >= maxSteps) {
      setCurrentStep(0);
      setLogs([]);
    }
    setIsPlaying(true);
  };

  const handleStep = () => {
    if (currentStep < maxSteps) {
      const next = currentStep + 1;
      const stepData = steps[currentStep];
      setCurrentStep(next);
      if (stepData) {
        setLogs(prev => [
          { time: new Date().toLocaleTimeString([], { hour12: false, minute: '2-digit', second: '2-digit' }), text: stepData.message },
          ...prev
        ]);
      }
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setLogs([]);
  };

  const activeTarget = currentStep > 0 && currentStep <= maxSteps ? steps[currentStep - 1].target : null;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card overflow-hidden">
      {/* Simulator Control Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Interactive DNS Resolution Lab</h3>
            <p className="text-xs text-slate-500">Trace packet travel and nameserver hops in real-time</p>
          </div>
        </div>

        {/* Input & Toggles */}
        <div className="flex items-center flex-wrap gap-2.5">
          <div className="flex items-center bg-white rounded-lg border border-slate-200 px-2.5 py-1 shadow-2xs">
            <span className="text-xs text-slate-400 mr-1.5 font-mono">https://</span>
            <input 
              type="text" 
              value={domain} 
              onChange={(e) => { setDomain(e.target.value); handleReset(); }}
              className="text-xs font-mono font-medium text-slate-800 bg-transparent focus:outline-none w-32"
            />
          </div>

          <label className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white cursor-pointer text-xs text-slate-700 select-none shadow-2xs hover:bg-slate-50">
            <input 
              type="checkbox" 
              checked={useCache} 
              onChange={(e) => { setUseCache(e.target.checked); handleReset(); }}
              className="rounded text-indigo-600 focus:ring-indigo-500 w-3.5 h-3.5"
            />
            <span>Simulate Cache Hit</span>
          </label>

          <div className="flex items-center space-x-1.5">
            <button
              onClick={handleStart}
              disabled={isPlaying || currentStep >= maxSteps}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-medium transition-colors shadow-xs"
            >
              <Play className="w-3.5 h-3.5" />
              <span>{currentStep === 0 ? 'Run Resolution' : 'Resume'}</span>
            </button>
            <button
              onClick={handleStep}
              disabled={isPlaying || currentStep >= maxSteps}
              className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-50 text-slate-700 text-xs font-medium transition-colors"
            >
              Step Forward
            </button>
            <button
              onClick={handleReset}
              className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-colors"
              title="Reset Simulator"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Visual Canvas Area */}
      <div className="p-6 bg-gradient-to-b from-slate-50/50 to-white relative min-h-[360px] flex flex-col justify-between">
        {/* Servers / Nodes Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
          {/* Node 1: Client Laptop */}
          <div className={`p-4 rounded-xl border transition-all duration-300 ${
            activeTarget === 'client' 
              ? 'bg-indigo-50/90 border-indigo-500 shadow-md ring-2 ring-indigo-200' 
              : 'bg-white border-slate-200 shadow-2xs'
          }`}>
            <div className="flex items-center space-x-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
                <Laptop className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Client Browser</div>
                <div className="text-[10px] text-slate-400 font-mono">192.168.1.5</div>
              </div>
            </div>
            <div className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded border border-slate-100">
              {currentStep === 0 && 'Ready to query'}
              {currentStep > 0 && currentStep < maxSteps && 'Waiting for IP...'}
              {currentStep >= maxSteps && (
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-emerald-600 inline" /> Resolved to 104.21.45.182
                </span>
              )}
            </div>
          </div>

          {/* Node 2: Recursive Resolver */}
          <div className={`p-4 rounded-xl border transition-all duration-300 ${
            activeTarget === 'resolver' 
              ? 'bg-blue-50/90 border-blue-500 shadow-md ring-2 ring-blue-200' 
              : 'bg-white border-slate-200 shadow-2xs'
          }`}>
            <div className="flex items-center space-x-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Server className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Recursive Resolver</div>
                <div className="text-[10px] text-slate-400 font-mono">8.8.8.8 (Google / ISP)</div>
              </div>
            </div>
            <div className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded border border-slate-100">
              {currentStep < 1 ? 'Idle' : currentStep === 1 ? 'Searching cache & starting queries' : 'Coordinating hops'}
            </div>
          </div>

          {/* Node 3: Root & TLD Servers */}
          <div className={`p-4 rounded-xl border transition-all duration-300 ${
            activeTarget === 'root' || activeTarget === 'tld'
              ? 'bg-violet-50/90 border-violet-500 shadow-md ring-2 ring-violet-200' 
              : 'bg-white border-slate-200 shadow-2xs'
          }`}>
            <div className="flex items-center space-x-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Root & TLD Servers</div>
                <div className="text-[10px] text-slate-400 font-mono">. (Root) &amp; .dev (TLD)</div>
              </div>
            </div>
            <div className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded border border-slate-100">
              {activeTarget === 'root' && <span className="text-violet-700 font-medium">Root Server active: pointing to .dev</span>}
              {activeTarget === 'tld' && <span className="text-violet-700 font-medium">TLD Server active: pointing to NS</span>}
              {activeTarget !== 'root' && activeTarget !== 'tld' && 'Hierarchical index'}
            </div>
          </div>

          {/* Node 4: Authoritative Nameserver */}
          <div className={`p-4 rounded-xl border transition-all duration-300 ${
            activeTarget === 'auth' 
              ? 'bg-emerald-50/90 border-emerald-500 shadow-md ring-2 ring-emerald-200' 
              : 'bg-white border-slate-200 shadow-2xs'
          }`}>
            <div className="flex items-center space-x-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Authoritative Server</div>
                <div className="text-[10px] text-slate-400 font-mono">ns1.dns-host.net</div>
              </div>
            </div>
            <div className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded border border-slate-100">
              {activeTarget === 'auth' ? (
                <span className="text-emerald-700 font-medium">Serving authoritative A record</span>
              ) : (
                'Holds zone file records'
              )}
            </div>
          </div>
        </div>

        {/* Dynamic Status Progress Bar */}
        <div className="my-6 px-3 py-3 rounded-xl bg-slate-100/80 border border-slate-200 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-indigo-600 font-semibold">Step {currentStep} / {maxSteps}:</span>
            <span className="text-slate-700 font-medium">
              {currentStep === 0 ? 'Click "Run Resolution" to start query trace' : steps[currentStep - 1]?.message}
            </span>
          </div>
          {currentStep >= maxSteps && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800">
              Completed in {useCache ? '2ms (Cache Hit)' : '42ms (Full Trace)'}
            </span>
          )}
        </div>

        {/* Live Packet Log Stream */}
        <div className="bg-slate-900 text-slate-200 rounded-xl p-3.5 font-mono text-[11px] max-h-36 overflow-y-auto space-y-1 border border-slate-800 shadow-inner">
          <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-1 flex items-center justify-between border-b border-slate-800 pb-1">
            <span>DNS Inspection Packet Wire Log</span>
            <span>UDP Port 53</span>
          </div>
          {logs.length === 0 ? (
            <div className="text-slate-500 italic">No packet exchanges yet. Press "Run Resolution" to transmit query.</div>
          ) : (
            logs.map((log, i) => (
              <div key={i} className="flex items-start space-x-2 text-slate-300">
                <span className="text-indigo-400 shrink-0">[{log.time}]</span>
                <span>{log.text}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
