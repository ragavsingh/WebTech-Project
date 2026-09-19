import React, { useState } from 'react';
import { Terminal, Copy, Check, Play, CornerDownRight } from 'lucide-react';

export default function CodePlayground({ data }) {
  if (!data) return null;

  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeOption = data.interactiveOptions ? data.interactiveOptions[activeTab] : null;
  const currentCode = activeOption ? activeOption.cmd : data.defaultCommand;
  const currentOutput = activeOption ? activeOption.result : data.output;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <span className="w-1.5 h-5 rounded-full bg-indigo-600 inline-block" />
          <span>Practical Command &amp; Code Inspector</span>
        </h2>
        <span className="text-xs font-mono text-slate-400 uppercase">
          {data.language || 'Terminal'}
        </span>
      </div>

      <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
        {/* Terminal Titlebar & Tabs */}
        <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-mono text-slate-400 pl-2">
              {data.title || 'Interactive Console'}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Interactive Options Tabs */}
            {data.interactiveOptions && data.interactiveOptions.length > 0 && (
              <div className="flex flex-wrap items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[11px] font-mono">
                {data.interactiveOptions.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === idx
                        ? 'bg-indigo-600 text-white font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Copy code"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Command & Output View */}
        <div className="p-5 font-mono text-xs space-y-4">
          {/* Input Prompt */}
          <div className="flex items-start space-x-2 text-slate-200 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
            <span className="text-emerald-400 select-none font-bold">$</span>
            <pre className="whitespace-pre-wrap text-emerald-300 font-medium overflow-x-auto break-all sm:break-normal">
              {currentCode}
            </pre>
          </div>

          {/* Output Window */}
          {currentOutput && (
            <div className="space-y-1.5 pt-1">
              <div className="text-[10px] uppercase tracking-wider text-slate-500 flex items-center gap-1 font-semibold">
                <CornerDownRight className="w-3 h-3 text-slate-500" /> Standard Output Stream
              </div>
              <div className="bg-slate-950 p-4 rounded-xl text-slate-300 border border-slate-800/70 overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-56">
                {currentOutput}
              </div>
            </div>
          )}
        </div>

        {data.explanation && (
          <div className="px-5 py-3 bg-slate-950/40 border-t border-slate-800/70 text-xs text-slate-400">
            {data.explanation}
          </div>
        )}
      </div>
    </div>
  );
}
