import React, { useState } from 'react';
import { 
  Laptop, 
  Globe, 
  Download, 
  FileCode, 
  Layers, 
  Palette, 
  Code2, 
  Sparkles, 
  Play, 
  RotateCcw,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function BrowserPipelineVisualizer() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const stages = [
    {
      id: 'url',
      name: '1. URL Input & Parsing',
      icon: Globe,
      color: 'blue',
      summary: 'The browser receives the user keystrokes in the address bar (Omnibox).',
      detail: 'The browser determines whether the input is a search query or a valid URL. It decomposes the URL into protocol (https://), hostname (example.com), port (:443), and resource path (/index.html).',
      output: 'Scheme: HTTPS, Host: example.com, Path: /'
    },
    {
      id: 'dns',
      name: '2. DNS Resolution',
      icon: Layers,
      color: 'indigo',
      summary: 'Translates human domain into an IP address to find the remote server.',
      detail: 'The browser queries internal DNS cache -> OS cache -> Recursive Resolver (1.1.1.1) -> Root -> TLD -> Authoritative server to retrieve the 32-bit IPv4 or 128-bit IPv6 address.',
      output: 'Resolved IP: 93.184.216.34:443'
    },
    {
      id: 'http',
      name: '3. TCP/TLS & HTTP Fetch',
      icon: Download,
      color: 'violet',
      summary: 'Establishes encrypted socket and requests the HTML document.',
      detail: 'The browser completes the TCP 3-way handshake (SYN, SYN-ACK, ACK) and TLS 1.3 cryptographic key exchange, then emits `GET / HTTP/1.1`. The server streams back raw HTML bytes.',
      output: 'HTTP 200 OK (Content-Type: text/html)'
    },
    {
      id: 'html',
      name: '4. HTML Tokenization',
      icon: FileCode,
      color: 'amber',
      summary: 'Converts stream of raw bytes into characters, tokens, and nodes.',
      detail: 'The HTML parser reads bytes -> decodes UTF-8 characters -> creates lexical tokens (StartTag, EndTag, Characters, Attributes). When a `<link rel="stylesheet">` or `<script>` tag is encountered, network sub-fetches are dispatched.',
      output: 'Tokens: StartTag(<html>), StartTag(<body>), etc.'
    },
    {
      id: 'dom',
      name: '5. DOM Tree Construction',
      icon: Layers,
      color: 'emerald',
      summary: 'Builds the in-memory Document Object Model hierarchy.',
      detail: 'Nodes are linked into a tree structure representing parent, child, and sibling relationships with `document` at the root. The DOM is the live interface manipulated by JavaScript.',
      output: 'Tree: document -> html -> body -> h1, p'
    },
    {
      id: 'css',
      name: '6. CSSOM Construction',
      icon: Palette,
      color: 'pink',
      summary: 'Parses CSS stylesheets into the CSS Object Model (CSSOM).',
      detail: 'The browser calculates the cascade, inheritance, and specificity for each DOM element to build the CSSOM. DOM + CSSOM merge together to form the "Render Tree" (elements with display:none are excluded).',
      output: 'Computed Styles & Render Tree geometry'
    },
    {
      id: 'js',
      name: '7. JavaScript Engine & Execution',
      icon: Code2,
      color: 'amber',
      summary: 'V8 / SpiderMonkey parses, compiles, and runs scripts.',
      detail: 'The JavaScript engine (such as Google V8 in Chrome or JavaScriptCore in Safari) compiles script tags into bytecode using JIT (Just-In-Time) compilation. Scripts can mutate the DOM and trigger style recalculations.',
      output: 'Event loop initialized, DOM event listeners bound'
    },
    {
      id: 'render',
      name: '8. Layout, Paint & Compositing',
      icon: Sparkles,
      color: 'emerald',
      summary: 'Calculates exact pixel coordinates and paints pixels to the screen.',
      detail: 'Layout (Reflow) determines box sizes and screen positions. Paint fills in pixels (colors, borders, shadows, text). Compositing GPU layers draws the final composite onto the monitor at 60/120 FPS.',
      output: 'Pixels painted to viewport! Page interactive (TTI reached)'
    }
  ];

  const handleRunAnimation = () => {
    setIsPlaying(true);
    runLoop(0);
  };

  const runLoop = (index) => {
    setActiveStage(index);
    if (index < stages.length - 1) {
      setTimeout(() => {
        runLoop(index + 1);
      }, 1400);
    } else {
      setIsPlaying(false);
    }
  };

  const current = stages[activeStage];
  const CurrentIcon = current.icon;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card overflow-hidden">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
            <Laptop className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Browser Internal Rendering Pipeline</h3>
            <p className="text-xs text-slate-500">From address bar keystroke to pixel rasterization and GPU compositing</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleRunAnimation}
            disabled={isPlaying}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <Play className="w-3.5 h-3.5" />
            <span>Animate Pipeline Flow</span>
          </button>
          <button
            onClick={() => { setActiveStage(0); setIsPlaying(false); }}
            className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-500"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Horizontal Pipeline Steps Track */}
      <div className="px-6 py-4 bg-slate-50/40 border-b border-slate-100 overflow-x-auto">
        <div className="flex items-center space-x-1 min-w-[750px] sm:min-w-0">
          {stages.map((stage, idx) => {
            const isSelected = activeStage === idx;
            const isPast = idx < activeStage;
            const Icon = stage.icon;

            return (
              <React.Fragment key={stage.id}>
                <button
                  onClick={() => { setActiveStage(idx); setIsPlaying(false); }}
                  className={`flex-1 flex flex-col items-center p-2 rounded-xl transition-all text-center group ${
                    isSelected
                      ? 'bg-indigo-50 border border-indigo-200 shadow-2xs'
                      : 'hover:bg-slate-100/60'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs mb-1 transition-all ${
                    isSelected
                      ? 'bg-indigo-600 text-white ring-2 ring-indigo-200 scale-105'
                      : isPast
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-100 text-slate-500'
                  }`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className={`text-[10px] font-bold truncate max-w-[80px] ${
                    isSelected ? 'text-indigo-900' : 'text-slate-600'
                  }`}>
                    {stage.name.replace(/^\d+\.\s*/, '')}
                  </span>
                </button>
                {idx < stages.length - 1 && (
                  <span className="text-slate-300 text-xs px-0.5">&rarr;</span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Active Stage Inspection Body */}
      <div className="p-6 bg-gradient-to-b from-white to-slate-50/30 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <CurrentIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">{current.name}</h4>
              <p className="text-xs text-indigo-600 font-medium">{current.summary}</p>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">
            Pipeline Phase {activeStage + 1} of 8
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Execution Mechanics
            </span>
            <p className="text-slate-700 leading-relaxed">
              {current.detail}
            </p>
          </div>

          <div className="bg-slate-900 text-slate-200 p-4 rounded-xl border border-slate-800 space-y-1.5 font-mono shadow-inner">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 block border-b border-slate-800 pb-1">
              Phase Intermediate Output
            </span>
            <div className="text-emerald-400 pt-1">
              &gt; {current.output}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
