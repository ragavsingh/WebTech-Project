import React, { useState } from 'react';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Maximize2, 
  Eye, 
  Sliders, 
  CheckCircle2, 
  Info, 
  Sparkles,
  Zap,
  Type
} from 'lucide-react';

export default function AdaptiveInterfaceSimulator() {
  const [deviceViewport, setDeviceViewport] = useState('mobile'); // 'mobile' | 'tablet' | 'desktop'
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [largeFont, setLargeFont] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-indigo-500/30">
              <Sliders className="w-3.5 h-3.5" /> Fluid Ergonomics &amp; Accessibility
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Adaptive Interfaces: Multi-Factor Responsive &amp; Accessible Design
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Modern web interfaces adapt not only to viewport pixel boundaries, but also to human accessibility preferences (contrast, motion sensitivity, and typography scale).
            </p>
          </div>

          {/* Viewport Frame Switcher */}
          <div className="inline-flex rounded-xl border border-white/20 bg-white/10 p-1">
            <button
              onClick={() => setDeviceViewport('mobile')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                deviceViewport === 'mobile' ? 'bg-white text-slate-900 shadow' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" /> Mobile (375px)
            </button>
            <button
              onClick={() => setDeviceViewport('tablet')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                deviceViewport === 'tablet' ? 'bg-white text-slate-900 shadow' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Tablet className="w-3.5 h-3.5" /> Tablet (768px)
            </button>
            <button
              onClick={() => setDeviceViewport('desktop')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                deviceViewport === 'desktop' ? 'bg-white text-slate-900 shadow' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" /> Desktop (1200px)
            </button>
          </div>
        </div>

        {/* User Accessibility Preference Toggles */}
        <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-white/10 text-xs">
          <span className="text-slate-400 mr-2">Accessibility Overrides:</span>
          <button
            onClick={() => setHighContrast(!highContrast)}
            className={`px-3 py-1 rounded-lg border font-semibold flex items-center gap-1.5 transition ${
              highContrast ? 'bg-amber-400 text-slate-950 border-amber-400' : 'bg-white/5 text-slate-300 border-white/10'
            }`}
          >
            <Eye className="w-3.5 h-3.5" /> High Contrast {highContrast ? 'ON' : 'OFF'}
          </button>
          <button
            onClick={() => setReducedMotion(!reducedMotion)}
            className={`px-3 py-1 rounded-lg border font-semibold flex items-center gap-1.5 transition ${
              reducedMotion ? 'bg-indigo-400 text-slate-950 border-indigo-400' : 'bg-white/5 text-slate-300 border-white/10'
            }`}
          >
            <Zap className="w-3.5 h-3.5" /> Reduced Motion {reducedMotion ? 'ON' : 'OFF'}
          </button>
          <button
            onClick={() => setLargeFont(!largeFont)}
            className={`px-3 py-1 rounded-lg border font-semibold flex items-center gap-1.5 transition ${
              largeFont ? 'bg-cyan-400 text-slate-950 border-cyan-400' : 'bg-white/5 text-slate-300 border-white/10'
            }`}
          >
            <Type className="w-3.5 h-3.5" /> Large Text {largeFont ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>

      {/* Main Viewport Stage */}
      <div className="p-6 bg-slate-100 flex justify-center items-center min-h-[420px] overflow-x-auto">
        {/* Dynamic Simulated Device Frame */}
        <div
          className={`border-4 border-slate-800 rounded-3xl bg-white shadow-xl overflow-hidden transition-all duration-300 ${
            deviceViewport === 'mobile' ? 'w-80' : deviceViewport === 'tablet' ? 'w-[520px]' : 'w-full max-w-4xl'
          }`}
        >
          {/* Simulated Mobile/Tablet Notch/Header */}
          <div className="bg-slate-800 px-4 py-2 text-white flex items-center justify-between text-[10px] font-mono">
            <span>Viewport: {deviceViewport.toUpperCase()}</span>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Fluid CSS Grid</span>
            </div>
          </div>

          {/* Adaptive Component Preview */}
          <div
            className={`p-6 transition-all ${
              highContrast ? 'bg-black text-white' : 'bg-white text-slate-900'
            } ${largeFont ? 'text-base' : 'text-xs'}`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="font-black tracking-tight">AdaptivePortal.io</div>
              <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-mono text-[10px] font-bold">
                CSS Container Queries
              </span>
            </div>

            <div className="py-4 space-y-3">
              <h4 className={`font-black ${largeFont ? 'text-2xl' : 'text-lg'}`}>
                Next-Generation Web Interfaces
              </h4>
              <p className={`leading-relaxed ${highContrast ? 'text-slate-200' : 'text-slate-600'}`}>
                Layouts adapt fluidly from single-column vertical scrolls on smartphones to multi-column analytical dashboards on desktop displays.
              </p>

              {/* Responsive Cards Grid */}
              <div
                className={`grid gap-3 pt-2 ${
                  deviceViewport === 'mobile' ? 'grid-cols-1' : deviceViewport === 'tablet' ? 'grid-cols-2' : 'grid-cols-3'
                }`}
              >
                <div
                  className={`p-3 rounded-xl border ${
                    highContrast ? 'border-white bg-slate-900 text-white' : 'border-slate-200 bg-slate-50 text-slate-800'
                  }`}
                >
                  <div className="font-bold text-xs">Responsive Typography</div>
                  <div className="text-[11px] opacity-75 mt-0.5">Calculated using CSS clamp(1rem, 2.5vw, 1.5rem).</div>
                </div>

                <div
                  className={`p-3 rounded-xl border ${
                    highContrast ? 'border-white bg-slate-900 text-white' : 'border-slate-200 bg-slate-50 text-slate-800'
                  }`}
                >
                  <div className="font-bold text-xs">Accessibility Tokens</div>
                  <div className="text-[11px] opacity-75 mt-0.5">WCAG AAA contrast adherence verified across states.</div>
                </div>

                {deviceViewport !== 'mobile' && (
                  <div
                    className={`p-3 rounded-xl border ${
                      highContrast ? 'border-white bg-slate-900 text-white' : 'border-slate-200 bg-slate-50 text-slate-800'
                    }`}
                  >
                    <div className="font-bold text-xs">Context-Aware Layout</div>
                    <div className="text-[11px] opacity-75 mt-0.5">Expands into 3 columns on wide desktop screens.</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Note */}
      <div className="p-6 border-t border-slate-100 bg-white">
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 font-semibold">Container Queries vs. Media Queries: </strong>
            Traditional responsive design relied on viewport media queries (`@media (min-width: 768px)`), which evaluate the entire browser window width. Modern CSS introduces <em>Container Queries (`@container`)</em>, allowing an individual component (such as a card or widget) to adapt its own layout based strictly on the space allocated to its parent container.
          </div>
        </div>
      </div>
    </div>
  );
}
