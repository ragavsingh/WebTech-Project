import React, { useState } from 'react';
import { 
  BarChart2, 
  Activity, 
  Zap, 
  Clock, 
  HardDrive, 
  Layers, 
  Info, 
  Sliders, 
  TrendingDown, 
  Sparkles,
  Server
} from 'lucide-react';

export default function AjaxPerformanceSimulator() {
  const [interactionsCount, setInteractionsCount] = useState(8); // 8 user actions in a session
  const [networkCondition, setNetworkCondition] = useState('4g'); // 'fiber' | '4g' | '3g'

  // Latency & speeds based on network condition
  const networkParams = {
    fiber: { name: 'Broadband Fiber (50ms RTT)', rtt: 50, speedFactor: 1.0 },
    '4g': { name: 'Fast 4G / LTE (120ms RTT)', rtt: 120, speedFactor: 1.8 },
    '3g': { name: 'Slow 3G Mobile (350ms RTT)', rtt: 350, speedFactor: 4.2 }
  }[networkCondition];

  // Illustrative Simulation Values (clearly labeled for educational purposes)
  // Full Page reload: re-downloads HTML (45KB) + CSS (120KB) + JS (350KB) + Assets (250KB) = ~765 KB per interaction
  const fullPageBytesPerActionKb = 765;
  const fullPageTotalMb = ((fullPageBytesPerActionKb * interactionsCount) / 1024).toFixed(2);
  const fullPageLatencyMs = Math.round(interactionsCount * (networkParams.rtt * 3 + 250 * networkParams.speedFactor));

  // AJAX Partial update: downloads initial page once (765 KB), then only small JSON payloads (3.5 KB per action)
  const ajaxInitialLoadKb = 765;
  const ajaxBytesPerActionKb = 3.5;
  const ajaxTotalMb = ((ajaxInitialLoadKb + ajaxBytesPerActionKb * (interactionsCount - 1)) / 1024).toFixed(2);
  const ajaxLatencyMs = Math.round(
    (networkParams.rtt * 3 + 250 * networkParams.speedFactor) + // 1 initial load
    (interactionsCount - 1) * (networkParams.rtt * 1.2 + 25 * networkParams.speedFactor) // subsequent light JSON calls
  );

  // Percentage savings
  const bandwidthSavedPercent = Math.round((1 - parseFloat(ajaxTotalMb) / parseFloat(fullPageTotalMb)) * 100);
  const timeSavedPercent = Math.round((1 - ajaxLatencyMs / fullPageLatencyMs) * 100);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Top Header */}
      <div className="bg-slate-900 text-white px-5 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/30">
            <Activity size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold">AJAX Performance &amp; Bandwidth Optimization Lab</h3>
            <p className="text-xs text-slate-400">
              Quantitative comparison: Full document re-transfers vs. surgical asynchronous data payloads
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-[11px] font-mono bg-amber-950 text-amber-300 border border-amber-800 px-2 py-0.5 rounded">
            Illustrative Simulation Metrics
          </span>
        </div>
      </div>

      {/* Interactive Controls Bar */}
      <div className="bg-slate-100/90 p-5 border-b border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Actions slider */}
        <div>
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1.5">
            <span className="flex items-center gap-1.5">
              <Sliders size={14} className="text-emerald-600" />
              <span>Simulated User Session Actions:</span>
            </span>
            <span className="font-mono font-bold text-indigo-700 bg-white px-2 py-0.5 rounded border border-slate-300">
              {interactionsCount} Page Interactions
            </span>
          </div>
          <input
            type="range"
            min="2"
            max="25"
            value={interactionsCount}
            onChange={(e) => setInteractionsCount(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          <div className="flex justify-between text-[10px] text-slate-400 mt-1">
            <span>2 clicks (Short visit)</span>
            <span>12 clicks (Typical)</span>
            <span>25 clicks (Power user)</span>
          </div>
        </div>

        {/* Network latency selector */}
        <div>
          <label className="text-xs font-semibold text-slate-700 block mb-1.5 flex items-center gap-1.5">
            <Clock size={14} className="text-emerald-600" />
            <span>Network Latency Profile:</span>
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { id: 'fiber', label: 'Fast Fiber' },
              { id: '4g', label: 'Typical 4G' },
              { id: '3g', label: 'Slow 3G' }
            ].map(net => (
              <button
                key={net.id}
                onClick={() => setNetworkCondition(net.id)}
                className={`py-1.5 px-2 rounded-lg text-xs font-semibold border transition text-center ${
                  networkCondition === net.id
                    ? 'bg-emerald-600 text-white border-emerald-700 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {net.label}
              </button>
            ))}
          </div>
          <span className="text-[11px] text-slate-500 mt-1 block">Active: {networkParams.name}</span>
        </div>
      </div>

      {/* Primary Comparative Visual Cards */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Page Reload Card */}
        <div className="p-5 rounded-2xl border border-rose-200 bg-rose-50/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span>Full Page Synchronous Reloads</span>
              </h4>
              <span className="text-[10px] font-mono uppercase bg-rose-100 text-rose-800 px-2 py-0.5 rounded border border-rose-200 font-bold">
                Legacy Stack
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Repeatedly transfers the entire page structure, stylesheet assets, script libraries, and navigation headers on every single user click.
            </p>

            <div className="space-y-3">
              {/* Bandwidth Metric */}
              <div className="p-3 bg-white rounded-xl border border-rose-200">
                <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                  <span className="flex items-center gap-1">
                    <HardDrive size={13} className="text-rose-600" />
                    <span>Total Transferred Data:</span>
                  </span>
                  <span className="font-mono text-base font-extrabold text-rose-600">
                    {fullPageTotalMb} MB
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-rose-500 w-full" />
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  ~{fullPageBytesPerActionKb} KB re-downloaded $\times$ {interactionsCount} interactions
                </span>
              </div>

              {/* Cumulative Latency Metric */}
              <div className="p-3 bg-white rounded-xl border border-rose-200">
                <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                  <span className="flex items-center gap-1">
                    <Clock size={13} className="text-rose-600" />
                    <span>Cumulative Wait / Flash Time:</span>
                  </span>
                  <span className="font-mono text-base font-extrabold text-rose-700">
                    {(fullPageLatencyMs / 1000).toFixed(2)}s
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 block">
                  User encounters blank screen flicker on every single navigation.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-rose-200 text-xs text-rose-950 font-medium">
            High server CPU load due to complete HTML template re-rendering on every request.
          </div>
        </div>

        {/* AJAX Partial Update Card */}
        <div className="p-5 rounded-2xl border border-emerald-200 bg-emerald-50/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>AJAX Partial Asynchronous Updates</span>
              </h4>
              <span className="text-[10px] font-mono uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                Modern Standard
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Loads application assets once. Subsequent user interactions exchange only raw data payloads (JSON/XML) in the background.
            </p>

            <div className="space-y-3">
              {/* Bandwidth Metric */}
              <div className="p-3 bg-white rounded-xl border border-emerald-200">
                <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                  <span className="flex items-center gap-1">
                    <HardDrive size={13} className="text-emerald-600" />
                    <span>Total Transferred Data:</span>
                  </span>
                  <span className="font-mono text-base font-extrabold text-emerald-600">
                    {ajaxTotalMb} MB
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 transition-all duration-500"
                    style={{ width: `${Math.max(5, (100 - bandwidthSavedPercent))}%` }}
                  />
                </div>
                <span className="text-[10px] text-emerald-700 font-semibold mt-1 block">
                  {bandwidthSavedPercent}% bandwidth reduction achieved!
                </span>
              </div>

              {/* Cumulative Latency Metric */}
              <div className="p-3 bg-white rounded-xl border border-emerald-200">
                <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                  <span className="flex items-center gap-1">
                    <Clock size={13} className="text-emerald-600" />
                    <span>Cumulative Latency Time:</span>
                  </span>
                  <span className="font-mono text-base font-extrabold text-emerald-700">
                    {(ajaxLatencyMs / 1000).toFixed(2)}s
                  </span>
                </div>
                <span className="text-[10px] text-emerald-700 font-semibold block">
                  {timeSavedPercent}% faster response delivery with zero UI interruption!
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-emerald-200 text-xs text-emerald-950 font-medium flex items-center gap-1.5">
            <Zap size={14} className="text-emerald-600 shrink-0" />
            <span>Server returns lightweight JSON; client browser handles local DOM rendering.</span>
          </div>
        </div>
      </div>

      {/* Qualitative Benefit Factors */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600">
        <div className="font-bold text-slate-800 mb-2 flex items-center gap-1.5">
          <Info size={14} className="text-emerald-600" />
          <span>Core Drivers of Perceived Performance Improvement:</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-white p-2.5 rounded-lg border border-slate-200">
            <strong className="text-slate-800 block mb-0.5">1. Elimination of UI Flash</strong>
            <span>Users maintain visual focus. Form inputs, scroll positions, and audio playback stay uninterrupted.</span>
          </div>
          <div className="bg-white p-2.5 rounded-lg border border-slate-200">
            <strong className="text-slate-800 block mb-0.5">2. Client-Side Rendering</strong>
            <span>Distributes presentation rendering to client devices, reducing backend server CPU and power consumption.</span>
          </div>
          <div className="bg-white p-2.5 rounded-lg border border-slate-200">
            <strong className="text-slate-800 block mb-0.5">3. Optimistic UI Updates</strong>
            <span>Interfaces can reflect changes instantly on the client while network sync completes silently in the background.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
