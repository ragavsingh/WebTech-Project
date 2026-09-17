import React, { useState } from 'react';
import { 
  Code, 
  Eye, 
  RotateCcw, 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  Play, 
  FileCode 
} from 'lucide-react';

export default function HtmlPlayground() {
  const presets = [
    {
      label: '1. Basic Page Structure',
      code: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Welcome to WebTech</h1>
    <p>HTML provides the <strong>semantic skeleton</strong> of every website on Earth.</p>
  </body>
</html>`
    },
    {
      label: '2. Headings & Paragraphs',
      code: `<h1>Heading Level 1 (Primary)</h1>
<h2>Heading Level 2 (Section)</h2>
<h3>Heading Level 3 (Subsection)</h3>
<p>Browsers automatically apply hierarchical font sizes and margins to heading elements.</p>
<p>Use <em>emphasis</em> and <strong>strong importance</strong> inside paragraphs.</p>`
    },
    {
      label: '3. Hyperlinks & Images',
      code: `<h3>Hyperlinks & Embedded Media</h3>
<p>
  Visit the <a href="https://example.com" target="_blank" style="color: #4f46e5; text-decoration: underline;">Example Web Portal</a>.
</p>
<img 
  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&auto=format&fit=crop&q=60" 
  alt="Coding on laptop" 
  style="border-radius: 8px; max-width: 100%; height: auto; margin-top: 8px;"
/>`
    },
    {
      label: '4. Ordered & Unordered Lists',
      code: `<h3>Front-End Pillars</h3>
<ul>
  <li>HTML5 (Content & Structure)</li>
  <li>CSS3 (Presentation & Layout)</li>
  <li>JavaScript (Behavior & Interactivity)</li>
</ul>

<h3>The 3-Way Handshake Steps</h3>
<ol>
  <li>SYN (Synchronize)</li>
  <li>SYN-ACK (Synchronize-Acknowledge)</li>
  <li>ACK (Acknowledge)</li>
</ol>`
    },
    {
      label: '5. Semantic HTML5 Layout',
      code: `<article style="padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px;">
  <header>
    <span style="font-size: 11px; color: #6366f1; font-weight: bold; text-transform: uppercase;">Article Tag</span>
    <h2 style="margin: 4px 0 8px 0; font-size: 18px;">Why Semantic Tags Matter</h2>
  </header>
  <main>
    <p style="color: #475569; font-size: 13px;">
      Tags like <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code> inform screen readers and search engines of content meaning.
    </p>
  </main>
  <footer style="margin-top: 8px; font-size: 11px; color: #94a3b8;">
    Written by WebTech Guide
  </footer>
</article>`
    }
  ];

  const predictChallenges = [
    {
      question: "Predict: What happens if an HTML element has an unclosed tag like '<p>Hello <strong>World'?",
      code: `<p>Hello <strong>World</p>\n<p>Next Paragraph</p>`,
      predictionOptions: [
        "The browser crashes with a fatal syntax error.",
        "The browser's fault-tolerant parser auto-closes the <strong> tag when </p> is encountered.",
        "The entire page turns blank."
      ],
      correct: 1,
      explanation: "HTML parsers are intentionally designed to be error-tolerant! The browser automatically closes missing inline tags when block tags terminate."
    }
  ];

  const [code, setCode] = useState(presets[0].code);
  const [activeTab, setActiveTab] = useState('editor'); // 'editor' | 'predict'
  const [predictAnswer, setPredictAnswer] = useState(null);
  const [predictRevealed, setPredictRevealed] = useState(false);

  const handleReset = () => {
    setCode(presets[0].code);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card overflow-hidden">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
            <FileCode className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Interactive HTML5 Live Sandbox</h3>
            <p className="text-xs text-slate-500">Edit HTML markup on the left and see immediate DOM rendering on the right</p>
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center space-x-2">
          <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs">
            <button
              onClick={() => setActiveTab('editor')}
              className={`px-3 py-1 rounded-md font-medium transition-all ${
                activeTab === 'editor'
                  ? 'bg-white text-indigo-700 font-bold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Live Editor
            </button>
            <button
              onClick={() => setActiveTab('predict')}
              className={`px-3 py-1 rounded-md font-medium transition-all ${
                activeTab === 'predict'
                  ? 'bg-white text-indigo-700 font-bold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Predict &rarr; Run
            </button>
          </div>

          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-500"
            title="Reset code"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {activeTab === 'editor' ? (
        <>
          {/* Preset Selector */}
          <div className="px-4 py-2 bg-slate-50/50 border-b border-slate-100 flex items-center space-x-1.5 overflow-x-auto text-xs">
            <span className="text-slate-400 font-medium text-[11px] whitespace-nowrap">Load Preset:</span>
            {presets.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => setCode(preset.code)}
                className="px-2.5 py-1 rounded-lg bg-white hover:bg-indigo-50 hover:text-indigo-700 border border-slate-200 text-slate-700 whitespace-nowrap transition-colors"
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* Split Pane: Left Editor, Right Live Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Left: Code Editor */}
            <div className="p-4 bg-slate-900 text-slate-100 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-indigo-400" /> HTML Source Code
                </span>
                <span className="text-[10px] text-slate-500">Live Synchronized</span>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                rows={12}
                className="w-full mt-3 font-mono text-xs text-indigo-200 bg-transparent resize-none focus:outline-none leading-relaxed selection:bg-indigo-600"
                placeholder="Type HTML here..."
                spellCheck={false}
              />
              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-500 font-mono flex justify-between">
                <span>UTF-8 Document</span>
                <span>{code.length} characters</span>
              </div>
            </div>

            {/* Right: Render Preview */}
            <div className="p-5 bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-emerald-600" /> Rendered Output
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                    Simulated Browser Canvas
                  </span>
                </div>

                {/* Render container */}
                <div 
                  className="mt-4 p-4 rounded-xl border border-slate-200 bg-slate-50/40 min-h-[220px] text-slate-800 prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: code }}
                />
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                Notice: HTML produces semantic structure. Styling is applied automatically by the browser's User-Agent stylesheet unless custom CSS is injected.
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Predict -> Run Mode */
        <div className="p-6 space-y-6">
          <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-800 block">
              Predictive Challenge: Fault Tolerance
            </span>
            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              {predictChallenges[0].question}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Snippet */}
            <div className="bg-slate-900 p-4 rounded-xl font-mono text-xs text-indigo-200 space-y-2">
              <div className="text-slate-400 text-[11px] pb-1 border-b border-slate-800">Target HTML Snippet:</div>
              <pre className="text-emerald-300">{predictChallenges[0].code}</pre>
            </div>

            {/* Questions */}
            <div className="space-y-2.5">
              {predictChallenges[0].predictionOptions.map((opt, optIdx) => (
                <button
                  key={optIdx}
                  onClick={() => { setPredictAnswer(optIdx); setPredictRevealed(true); }}
                  className={`w-full text-left p-3 rounded-xl border text-xs font-medium transition-all ${
                    predictRevealed && optIdx === predictChallenges[0].correct
                      ? 'bg-emerald-50 border-emerald-400 text-emerald-900 ring-2 ring-emerald-200'
                      : predictRevealed && predictAnswer === optIdx
                      ? 'bg-red-50 border-red-300 text-red-900'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{opt}</span>
                    {predictRevealed && optIdx === predictChallenges[0].correct && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                    )}
                  </div>
                </button>
              ))}

              {predictRevealed && (
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
                  <strong>Explanation:</strong> {predictChallenges[0].explanation}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
