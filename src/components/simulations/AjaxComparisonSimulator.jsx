import React, { useState } from 'react';
import { 
  RefreshCw, 
  ArrowRight, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  Zap, 
  Layers, 
  Clock, 
  Cpu, 
  Info,
  Smartphone,
  Eye
} from 'lucide-react';

export default function AjaxComparisonSimulator() {
  const [isRunning, setIsRunning] = useState(false);
  const [traditionalStage, setTraditionalStage] = useState(0); // 0: idle, 1: sending, 2: server, 3: white-screen reload, 4: done
  const [ajaxStage, setAjaxStage] = useState(0); // 0: idle, 1: bg-request, 2: server, 3: targeted dom update, 4: done

  const handleTriggerComparison = () => {
    setIsRunning(true);
    setTraditionalStage(1);
    setAjaxStage(1);

    // AJAX progresses smoothly
    setTimeout(() => {
      setAjaxStage(2);
      setTimeout(() => {
        setAjaxStage(3);
        setTimeout(() => {
          setAjaxStage(4);
        }, 500);
      }, 700);
    }, 600);

    // Traditional suffers latency + full page reload flicker
    setTimeout(() => {
      setTraditionalStage(2);
      setTimeout(() => {
        setTraditionalStage(3); // White screen blank flicker
        setTimeout(() => {
          setTraditionalStage(4);
          setIsRunning(false);
        }, 800);
      }, 900);
    }, 800);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTraditionalStage(0);
    setAjaxStage(0);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Top Header */}
      <div className="bg-slate-900 text-white px-5 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/30">
            <Zap size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold">AJAX vs. Traditional Synchronous Web Architecture</h3>
            <p className="text-xs text-slate-400">
              Side-by-side behavioral animation: Full page reloads vs. asynchronous background data updates
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleTriggerComparison}
            disabled={isRunning}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition"
          >
            <Play size={13} className={isRunning ? 'animate-spin' : ''} />
            <span>{isRunning ? 'Simulating Interaction...' : 'Run Side-by-Side Comparison'}</span>
          </button>
          <button
            onClick={handleReset}
            className="px-2.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs transition"
            title="Reset"
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </div>

      {/* Side-by-Side Comparison Panes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Left: Traditional Web Model */}
        <div className="p-6 bg-rose-50/20 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <h4 className="font-bold text-sm text-slate-900">Traditional Web Model (Synchronous)</h4>
              </div>
              <span className="text-[10px] uppercase font-bold bg-rose-100 text-rose-800 px-2 py-0.5 rounded border border-rose-200">
                Full Page Reload
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Every user click dispatches a blocking HTTP GET/POST. The browser freezes UI interactions, destroys the entire existing DOM, shows a blank white flash, and re-renders the complete HTML page from scratch.
            </p>

            {/* Traditional Browser Simulation Window */}
            <div className="rounded-xl border border-slate-300 bg-white overflow-hidden shadow-xs mb-4">
              <div className="bg-slate-100 px-3 py-1.5 border-b border-slate-200 flex items-center justify-between text-[11px] text-slate-600">
                <div className="flex items-center gap-1.5 font-mono truncate">
                  <RefreshCw size={11} className={traditionalStage === 1 || traditionalStage === 2 ? 'animate-spin text-rose-600' : 'text-slate-400'} />
                  <span>https://example.com/products?page=2</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">Sync HTTP</span>
              </div>

              {/* Viewport Content */}
              <div className="h-44 p-4 flex flex-col justify-between relative">
                {traditionalStage === 3 ? (
                  /* White Screen Flicker */
                  <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-6 h-6 border-2 border-slate-300 border-t-rose-600 rounded-full animate-spin mb-2" />
                    <span className="text-xs font-semibold text-slate-600">White screen flash... destroying DOM &amp; reloading assets</span>
                  </div>
                ) : (
                  <>
                    <div className="space-y-2">
                      <div className="h-4 bg-slate-200 rounded w-1/3" />
                      <div className="h-2 bg-slate-100 rounded w-2/3" />
                      <div className="h-12 bg-rose-50 rounded-lg border border-rose-100 p-2 flex items-center justify-between text-xs text-slate-700">
                        <span>Product Item 101</span>
                        <span className="font-mono font-bold">$49.00</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-slate-400">Page state lost on reload</span>
                      <button
                        onClick={handleTriggerComparison}
                        disabled={isRunning}
                        className="px-2.5 py-1 bg-rose-600 text-white rounded text-[11px] font-semibold"
                      >
                        Submit Form (Reloads)
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Stepper Status */}
            <div className="space-y-1.5 text-xs font-mono">
              <div className={`p-2 rounded-lg border ${
                traditionalStage === 1 ? 'bg-rose-100 border-rose-300 text-rose-900 font-bold' : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}>
                1. User Action &rarr; Blocking HTTP Request Sent
              </div>
              <div className={`p-2 rounded-lg border ${
                traditionalStage === 2 ? 'bg-rose-100 border-rose-300 text-rose-900 font-bold' : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}>
                2. Server Generates 100% Full HTML Markup
              </div>
              <div className={`p-2 rounded-lg border ${
                traditionalStage === 3 ? 'bg-rose-600 text-white border-rose-700 font-bold' : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}>
                3. Browser Blank Screen Flash &rarr; Full Page Destroy &amp; Reload
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-rose-900 flex items-center gap-1.5 font-medium">
            <AlertCircle size={14} className="text-rose-600 shrink-0" />
            <span>Heavy bandwidth waste; re-fetches unchanged headers, footers, CSS, and JS bundles.</span>
          </div>
        </div>

        {/* Right: Modern AJAX Model */}
        <div className="p-6 bg-emerald-50/20 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <h4 className="font-bold text-sm text-slate-900">Modern AJAX Model (Asynchronous)</h4>
              </div>
              <span className="text-[10px] uppercase font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">
                Partial DOM Update
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              JavaScript issues a background request (`fetch` or `XMLHttpRequest`). The page stays interactive with zero screen flicker; only the targeted DOM container is updated with incoming raw JSON/XML data.
            </p>

            {/* AJAX Browser Simulation Window */}
            <div className="rounded-xl border border-slate-300 bg-white overflow-hidden shadow-xs mb-4">
              <div className="bg-slate-100 px-3 py-1.5 border-b border-slate-200 flex items-center justify-between text-[11px] text-slate-600">
                <div className="flex items-center gap-1.5 font-mono truncate">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>https://example.com/products (No URL Change)</span>
                </div>
                <span className="text-[10px] text-emerald-700 font-mono font-bold">XHR / Fetch</span>
              </div>

              {/* Viewport Content */}
              <div className="h-44 p-4 flex flex-col justify-between relative">
                <div className="space-y-2">
                  <div className="h-4 bg-slate-200 rounded w-1/3" />
                  <div className="h-2 bg-slate-100 rounded w-2/3" />
                  
                  {/* Dynamic Updating Section */}
                  <div className={`h-12 rounded-lg border p-2 flex items-center justify-between text-xs transition-all ${
                    ajaxStage === 3 || ajaxStage === 4
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950 ring-2 ring-emerald-200'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}>
                    <div>
                      <span className="font-semibold block">
                        {ajaxStage >= 3 ? 'Product Item 102 (Loaded via AJAX!)' : 'Product Item 101'}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {ajaxStage >= 3 ? 'Updated in-place in 45ms' : 'Cached in DOM'}
                      </span>
                    </div>
                    <span className="font-mono font-bold text-emerald-700">
                      {ajaxStage >= 3 ? '$79.00' : '$49.00'}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-emerald-700 font-semibold">User scrolls &amp; types freely</span>
                  <button
                    onClick={handleTriggerComparison}
                    disabled={isRunning}
                    className="px-2.5 py-1 bg-emerald-600 text-white rounded text-[11px] font-semibold flex items-center gap-1"
                  >
                    <Zap size={11} />
                    <span>Fetch in Background</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Stepper Status */}
            <div className="space-y-1.5 text-xs font-mono">
              <div className={`p-2 rounded-lg border ${
                ajaxStage === 1 ? 'bg-emerald-100 border-emerald-300 text-emerald-900 font-bold' : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}>
                1. User Gesture &rarr; JavaScript dispatches fetch() in background
              </div>
              <div className={`p-2 rounded-lg border ${
                ajaxStage === 2 ? 'bg-emerald-100 border-emerald-300 text-emerald-900 font-bold' : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}>
                2. Server Returns Tiny JSON/XML Payload (~2 KB)
              </div>
              <div className={`p-2 rounded-lg border ${
                ajaxStage >= 3 ? 'bg-emerald-600 text-white border-emerald-700 font-bold' : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}>
                3. JavaScript Updates Specific DOM Node &rarr; Zero Screen Flicker!
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-emerald-900 flex items-center gap-1.5 font-medium">
            <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
            <span>Continuous user experience; saves 95%+ bandwidth by exchanging only data.</span>
          </div>
        </div>
      </div>

      {/* Explanatory Footer */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
        <Info size={16} className="text-emerald-600 shrink-0 mt-0.5" />
        <div>
          <strong className="text-slate-800">Historical Terminology Note: </strong>
          Coined by Jesse James Garrett in 2005, AJAX originally stood for <em>Asynchronous JavaScript and XML</em>. While modern web applications predominantly exchange lightweight JSON instead of XML, the foundational architectural concept—asynchronous background HTTP communication and surgical DOM mutation—remains identical.
        </div>
      </div>
    </div>
  );
}
