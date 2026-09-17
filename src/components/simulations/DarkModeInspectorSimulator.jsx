import React, { useState } from 'react';
import { 
  Moon, 
  Sun, 
  Laptop, 
  Code, 
  CheckCircle2, 
  AlertCircle, 
  Eye, 
  Layers, 
  Sparkles, 
  Info,
  Sliders
} from 'lucide-react';

export default function DarkModeInspectorSimulator() {
  const [themeMode, setThemeMode] = useState('dark'); // 'light' | 'dark'
  const [customAccent, setCustomAccent] = useState('#6366f1'); // Indigo

  const themeTokens = {
    light: {
      bgPrimary: '#ffffff',
      bgSecondary: '#f8fafc',
      textPrimary: '#0f172a',
      textSecondary: '#64748b',
      borderColor: '#e2e8f0',
      contrastRatio: '14.2:1 (WCAG AAA Pass)'
    },
    dark: {
      bgPrimary: '#0f172a',
      bgSecondary: '#1e293b',
      textPrimary: '#f8fafc',
      textSecondary: '#94a3b8',
      borderColor: '#334155',
      contrastRatio: '15.8:1 (WCAG AAA Pass)'
    }
  };

  const currentTokens = themeTokens[themeMode];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-indigo-500/30">
              <Moon className="w-3.5 h-3.5" /> Modern CSS Architecture & Accessibility
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Dark Mode Inspector & Design Tokens
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Examine how modern web apps implement theme switching using CSS Custom Properties (Variables), <code>@media (prefers-color-scheme)</code>, and WCAG contrast auditing.
            </p>
          </div>

          {/* Theme Toggle Buttons */}
          <div className="inline-flex rounded-xl border border-white/20 bg-white/10 p-1">
            <button
              onClick={() => setThemeMode('light')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                themeMode === 'light' ? 'bg-white text-slate-900 shadow' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Sun className="w-3.5 h-3.5" /> Light Mode
            </button>
            <button
              onClick={() => setThemeMode('dark')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                themeMode === 'dark' ? 'bg-white text-slate-900 shadow' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Moon className="w-3.5 h-3.5" /> Dark Mode
            </button>
          </div>
        </div>
      </div>

      {/* Main Sandbox Area */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Live Simulated UI Card */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Simulated Component Viewport</span>
              <span className="font-mono text-[11px] uppercase">Theme: {themeMode}</span>
            </div>

            {/* Simulated Themed Container */}
            <div
              className="rounded-2xl p-6 transition-colors duration-300 border shadow-sm space-y-4"
              style={{
                backgroundColor: currentTokens.bgPrimary,
                borderColor: currentTokens.borderColor,
                color: currentTokens.textPrimary
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="px-2.5 py-0.5 rounded-full text-xs font-bold"
                  style={{ backgroundColor: `${customAccent}20`, color: customAccent }}
                >
                  Featured Article
                </span>
                <span className="text-xs" style={{ color: currentTokens.textSecondary }}>
                  5 min read
                </span>
              </div>

              <h4 className="text-lg font-bold">
                Why Naive Inversion Fails in Dark Mode
              </h4>

              <p className="text-xs leading-relaxed" style={{ color: currentTokens.textSecondary }}>
                Using CSS <code>filter: invert(100%)</code> breaks image colors, distorts shadows, and crushes typographic hierarchy. Semantic design tokens guarantee intentional contrast across all viewing environments.
              </p>

              <div
                className="p-3 rounded-xl border flex items-center justify-between text-xs"
                style={{
                  backgroundColor: currentTokens.bgSecondary,
                  borderColor: currentTokens.borderColor
                }}
              >
                <span>WCAG 2.1 Compliance:</span>
                <span className="font-mono font-bold text-emerald-500 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {currentTokens.contrastRatio}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: CSS Custom Property Tokens Inspector */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span className="flex items-center gap-1.5">
                <Code className="w-4 h-4 text-indigo-600" /> Active CSS Variables (:root)
              </span>
              <span className="text-[11px] font-mono text-indigo-600">CSS Custom Properties</span>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex flex-col h-[280px]">
              <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex justify-between">
                <span>styles/theme.css</span>
                <span>[data-theme=&quot;{themeMode}&quot;]</span>
              </div>
              <pre className="p-4 text-xs font-mono text-slate-200 overflow-auto leading-relaxed flex-1">
                <code>{`/* Semantic CSS Variables */
:root[data-theme="${themeMode}"] {
  --bg-primary: ${currentTokens.bgPrimary};
  --bg-secondary: ${currentTokens.bgSecondary};
  --text-primary: ${currentTokens.textPrimary};
  --text-secondary: ${currentTokens.textSecondary};
  --border-color: ${currentTokens.borderColor};
  --accent-color: ${customAccent};
}

/* System Preference Fallback */
@media (prefers-color-scheme: ${themeMode}) {
  :root {
    color-scheme: ${themeMode};
  }
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Educational Note */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 font-semibold">Best Practice for Dark Mode: </strong>
            Never hardcode pure black (<code>#000000</code>) for backgrounds or pure white (<code>#ffffff</code>) for text in dark mode. High-contrast pure black and white causes severe optical halation and eye fatigue on modern OLED displays. Leading design systems (e.g. GitHub, Tailwind, Radix) employ dark navy or charcoal slates (such as <code>#0f172a</code> or <code>#121212</code>) with soft off-white typography (<code>#f8fafc</code>).
          </div>
        </div>
      </div>
    </div>
  );
}
