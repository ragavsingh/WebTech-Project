import React, { useState } from 'react';
import { Code, Eye, RotateCcw, Table, List, Image as ImageIcon, Copy, Check } from 'lucide-react';

export default function HtmlListsTablesImages() {
  const presets = [
    {
      id: 'lists',
      label: 'Lists (ul, ol, dl)',
      icon: List,
      code: `<!-- 1. Unordered List -->
<h3>Frontend Architecture</h3>
<ul>
  <li>HTML5 (Semantic Skeleton)</li>
  <li>CSS3 (Design Tokens)</li>
  <li>JavaScript (Event Engine)</li>
</ul>

<!-- 2. Ordered List -->
<h3>Deployment Sequence</h3>
<ol type="1">
  <li>Run unit tests</li>
  <li>Build production bundle</li>
  <li>Push to CDN edge</li>
</ol>

<!-- 3. Description List -->
<h3>Key Definitions</h3>
<dl>
  <dt><strong>DOM</strong></dt>
  <dd>Document Object Model: In-memory tree representation of HTML markup.</dd>
  <dt><strong>SAX</strong></dt>
  <dd>Simple API for XML: Event-driven streaming parser.</dd>
</dl>`
    },
    {
      id: 'tables',
      label: 'Tables (colspan & rowspan)',
      icon: Table,
      code: `<table style="width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 13px;">
  <thead>
    <tr style="background: #eef2ff; color: #3730a3; text-align: left;">
      <th style="padding: 8px; border: 1px solid #c7d2fe;">Protocol</th>
      <th style="padding: 8px; border: 1px solid #c7d2fe;">Default Port</th>
      <th style="padding: 8px; border: 1px solid #c7d2fe;">Transport</th>
      <th style="padding: 8px; border: 1px solid #c7d2fe;">Primary Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #e2e8f0; font-weight: bold;">HTTP / HTTPS</td>
      <td style="padding: 8px; border: 1px solid #e2e8f0;">80 / 443</td>
      <td style="padding: 8px; border: 1px solid #e2e8f0;" rowspan="2">TCP</td>
      <td style="padding: 8px; border: 1px solid #e2e8f0;">Web document retrieval</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #e2e8f0; font-weight: bold;">SMTP</td>
      <td style="padding: 8px; border: 1px solid #e2e8f0;">25 / 587</td>
      <td style="padding: 8px; border: 1px solid #e2e8f0;">Outgoing email relay</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #e2e8f0; font-weight: bold;">DNS</td>
      <td style="padding: 8px; border: 1px solid #e2e8f0;">53</td>
      <td style="padding: 8px; border: 1px solid #e2e8f0;">UDP / TCP</td>
      <td style="padding: 8px; border: 1px solid #e2e8f0;">Domain name resolution</td>
    </tr>
  </tbody>
  <tfoot>
    <tr style="background: #f8fafc; font-weight: bold;">
      <td style="padding: 8px; border: 1px solid #e2e8f0;" colspan="4">Summary: Application layer protocols operating over TCP/IP</td>
    </tr>
  </tfoot>
</table>`
    },
    {
      id: 'images',
      label: 'Images & Figure Captions',
      icon: ImageIcon,
      code: `<h3>Accessible Media Elements</h3>
<figure style="margin: 0; padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; background: #ffffff;">
  <img 
    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80" 
    alt="Syntax highlighted computer code on screen" 
    style="width: 100%; height: auto; border-radius: 6px; display: block;"
  />
  <figcaption style="margin-top: 8px; font-size: 12px; color: #64748b; font-style: italic;">
    Figure 1: Code editor view displaying semantic web elements and styling declarations.
  </figcaption>
</figure>`
    }
  ];

  const [activePreset, setActivePreset] = useState(presets[0]);
  const [code, setCode] = useState(presets[0].code);
  const [copied, setCopied] = useState(false);

  const handleSelectPreset = (p) => {
    setActivePreset(p);
    setCode(p.code);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card overflow-hidden">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
            <Code className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">HTML Lists, Tables &amp; Images Laboratory</h3>
            <p className="text-xs text-slate-500">Edit markup live and inspect structure, colspans, nested lists, and captions</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs flex items-center space-x-1"
            title="Copy Code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
          </button>
          <button
            onClick={() => setCode(activePreset.code)}
            className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-500"
            title="Reset code"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Preset tabs */}
      <div className="px-6 py-2.5 bg-slate-50/40 border-b border-slate-100 flex items-center space-x-2 overflow-x-auto text-xs">
        <span className="text-slate-400 font-medium whitespace-nowrap mr-1">Concept Preset:</span>
        {presets.map((p) => {
          const Icon = p.icon;
          const isSelected = activePreset.id === p.id;
          return (
            <button
              key={p.id}
              onClick={() => handleSelectPreset(p)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-indigo-600 text-white shadow-2xs font-semibold'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{p.label}</span>
            </button>
          );
        })}
      </div>

      {/* Split Editor + Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
        {/* Left: Code Editor */}
        <div className="p-4 bg-slate-900 text-slate-100 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs text-slate-400 font-mono">
            <span>HTML Source</span>
            <span className="text-[10px] text-slate-500">{code.length} characters</span>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows={13}
            className="w-full mt-3 font-mono text-xs text-indigo-200 bg-transparent resize-none focus:outline-none leading-relaxed selection:bg-indigo-600"
            spellCheck={false}
          />
        </div>

        {/* Right: Live Preview */}
        <div className="p-5 bg-white flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-emerald-600" /> Rendered Browser View
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                Live DOM
              </span>
            </div>

            <div 
              className="mt-4 p-4 rounded-xl border border-slate-200 bg-slate-50/30 min-h-[220px] text-slate-800 prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: code }}
            />
          </div>

          <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400">
            Tip: Notice how &lt;th&gt; automatically bolds and centers headers, and &lt;dt&gt;/&lt;dd&gt; creates hierarchical term-definition pairs.
          </div>
        </div>
      </div>
    </div>
  );
}
