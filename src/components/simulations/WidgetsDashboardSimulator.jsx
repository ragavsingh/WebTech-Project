import React, { useState, useEffect } from 'react';
import { 
  LayoutGrid, 
  CloudSun, 
  TrendingUp, 
  Clock, 
  Newspaper, 
  Eye, 
  Code, 
  CheckCircle2, 
  Settings, 
  Sparkles,
  RefreshCw,
  Info
} from 'lucide-react';

export default function WidgetsDashboardSimulator() {
  const [enabledWidgets, setEnabledWidgets] = useState({
    weather: true,
    crypto: true,
    clock: true,
    news: true
  });
  const [selectedTimezone, setSelectedTimezone] = useState('America/New_York');
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [cryptoPrice, setCryptoPrice] = useState(64820);
  const [priceDelta, setPriceDelta] = useState(+2.4);
  const [showEmbedSnippet, setShowEmbedSnippet] = useState(false);

  // Live timer for clock widget
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { timeZone: selectedTimezone }));
    }, 1000);
    return () => clearInterval(timer);
  }, [selectedTimezone]);

  // Minor random fluctuations for crypto widget
  useEffect(() => {
    const ticker = setInterval(() => {
      setCryptoPrice(prev => {
        const delta = (Math.random() - 0.48) * 45;
        const nextPrice = Math.round(prev + delta);
        setPriceDelta(+(delta > 0 ? (delta / 10).toFixed(2) : (delta / 10).toFixed(2)));
        return nextPrice;
      });
    }, 3000);
    return () => clearInterval(ticker);
  }, []);

  const toggleWidget = (key) => {
    setEnabledWidgets(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-cyan-500/30">
              <LayoutGrid className="w-3.5 h-3.5" /> Modular Client-Side Widgets
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Embeddable Widget Sandbox Dashboard
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              In Web 2.0, websites ceased being monolithic pages and became composable dashboards of autonomous, embeddable widgets communicating via APIs.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowEmbedSnippet(!showEmbedSnippet)}
              className="px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition"
            >
              <Code className="w-3.5 h-3.5" /> {showEmbedSnippet ? 'Hide Embed Code' : 'Get Embed Code'}
            </button>
          </div>
        </div>

        {/* Widget Toggles */}
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="text-xs text-slate-400 py-1.5 mr-2">Toggle Active Widgets:</span>
          <button
            onClick={() => toggleWidget('weather')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
              enabledWidgets.weather ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-white/10 text-slate-300'
            }`}
          >
            <CloudSun className="w-3.5 h-3.5" /> Weather Widget
          </button>
          <button
            onClick={() => toggleWidget('crypto')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
              enabledWidgets.crypto ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-white/10 text-slate-300'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" /> Market Ticker
          </button>
          <button
            onClick={() => toggleWidget('clock')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
              enabledWidgets.clock ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-white/10 text-slate-300'
            }`}
          >
            <Clock className="w-3.5 h-3.5" /> World Clock
          </button>
          <button
            onClick={() => toggleWidget('news')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
              enabledWidgets.news ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-white/10 text-slate-300'
            }`}
          >
            <Newspaper className="w-3.5 h-3.5" /> News Headlines
          </button>
        </div>
      </div>

      {/* Embed Code Modal / Banner */}
      {showEmbedSnippet && (
        <div className="bg-slate-950 p-4 border-b border-slate-800 text-xs font-mono text-cyan-300">
          <div className="flex items-center justify-between pb-2 text-slate-400 text-[11px]">
            <span>Third-Party Embed Snippet (Web Component / iframe)</span>
            <button onClick={() => setShowEmbedSnippet(false)} className="hover:text-white">✕ Close</button>
          </div>
          <pre className="overflow-x-auto p-3 bg-slate-900 rounded-lg text-slate-200">
            <code>{`<!-- Embed anywhere in HTML: -->
<iframe 
  src="https://widgets.webtech.org/embed/weather?city=sf&theme=clean" 
  width="300" 
  height="180" 
  frameborder="0" 
  sandbox="allow-scripts allow-same-origin">
</iframe>`}</code>
          </pre>
        </div>
      )}

      {/* Main Grid Dashboard */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* 1. WEATHER WIDGET */}
          {enabledWidgets.weather && (
            <div className="p-5 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50/50 to-white shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-700">
                  <CloudSun className="w-4 h-4 text-blue-600" /> Weather Forecast Widget
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                  API: OpenWeather
                </span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <div>
                  <div className="text-3xl font-black text-slate-900">22°C</div>
                  <div className="text-xs text-slate-500 font-medium">San Francisco, CA • Sunny</div>
                </div>
                <div className="text-right text-xs text-slate-600 space-y-0.5">
                  <div>Humidity: 58%</div>
                  <div>Wind: 12 km/h NW</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center text-xs">
                <div className="p-1.5 rounded bg-white border border-slate-100">
                  <div className="text-[10px] text-slate-400">Thu</div>
                  <div className="font-bold text-slate-700">24°</div>
                </div>
                <div className="p-1.5 rounded bg-white border border-slate-100">
                  <div className="text-[10px] text-slate-400">Fri</div>
                  <div className="font-bold text-slate-700">21°</div>
                </div>
                <div className="p-1.5 rounded bg-white border border-slate-100">
                  <div className="text-[10px] text-slate-400">Sat</div>
                  <div className="font-bold text-slate-700">19°</div>
                </div>
              </div>
            </div>
          )}

          {/* 2. CRYPTO / STOCK TICKER WIDGET */}
          {enabledWidgets.crypto && (
            <div className="p-5 rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50/40 to-white shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                  <TrendingUp className="w-4 h-4 text-emerald-600" /> Live Market Ticker
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> LIVE STREAM
                </span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <div>
                  <div className="text-3xl font-black text-slate-900 font-mono">
                    ${cryptoPrice.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">BTC / USD Spot Rate</div>
                </div>
                <div className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold ${
                  priceDelta >= 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                }`}>
                  {priceDelta >= 0 ? `+${priceDelta}%` : `${priceDelta}%`}
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 text-[11px] font-mono text-emerald-400 text-center">
                24h Volume: $28.4 Billion • Updated real-time via WebSocket
              </div>
            </div>
          )}

          {/* 3. WORLD CLOCK WIDGET */}
          {enabledWidgets.clock && (
            <div className="p-5 rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50/40 to-white shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-700">
                  <Clock className="w-4 h-4 text-indigo-600" /> World Clock & Timezone
                </div>
                <select
                  value={selectedTimezone}
                  onChange={(e) => setSelectedTimezone(e.target.value)}
                  className="text-[11px] font-medium bg-white border border-slate-300 rounded px-2 py-0.5 text-slate-700 focus:outline-none"
                >
                  <option value="America/New_York">New York (EST)</option>
                  <option value="Europe/London">London (GMT)</option>
                  <option value="Asia/Kolkata">India (IST)</option>
                  <option value="Asia/Tokyo">Tokyo (JST)</option>
                </select>
              </div>
              <div className="text-center py-2">
                <div className="text-3xl font-black text-slate-900 font-mono tracking-wider">
                  {currentTime}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Active Region: {selectedTimezone}
                </div>
              </div>
              <div className="text-[11px] text-slate-500 text-center border-t border-slate-100 pt-2 font-mono">
                System Synchronized with NTP Atomic Standard
              </div>
            </div>
          )}

          {/* 4. NEWS HEADLINE WIDGET */}
          {enabledWidgets.news && (
            <div className="p-5 rounded-2xl border border-slate-200 bg-gradient-to-br from-amber-50/40 to-white shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
                  <Newspaper className="w-4 h-4 text-amber-600" /> Real-Time News Wire
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                  RSS Syndicated
                </span>
              </div>
              <div className="space-y-2 pt-1">
                <div className="p-2 rounded-lg bg-white border border-slate-100 text-xs shadow-2xs">
                  <span className="font-bold text-slate-800">Browser Security: </span>
                  <span className="text-slate-600">Same-Origin Policy enhancements adopted across engine standards.</span>
                </div>
                <div className="p-2 rounded-lg bg-white border border-slate-100 text-xs shadow-2xs">
                  <span className="font-bold text-slate-800">Edge Networks: </span>
                  <span className="text-slate-600">Sub-10ms serverless function cold starts achieved globally.</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Educational Note */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 font-semibold">Widget Architecture & Sandboxing: </strong>
            Early Web 2.0 widgets (e.g. iGoogle, Netvibes) relied on simple <code>&lt;iframe&gt;</code> elements to provide security sandboxing, preventing malicious widget scripts from accessing the host page&apos;s cookies or DOM. Today, modern widgets frequently leverage Web Components, Shadow DOM, and postMessage APIs for high-performance encapsulation.
          </div>
        </div>
      </div>
    </div>
  );
}
