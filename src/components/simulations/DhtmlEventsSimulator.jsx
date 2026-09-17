import React, { useState } from 'react';
import { 
  Zap, 
  ArrowRight, 
  RotateCcw, 
  MousePointer, 
  Code, 
  Layers, 
  Eye, 
  Palette, 
  Type, 
  Sparkles 
} from 'lucide-react';

export default function DhtmlEventsSimulator() {
  const [headingText, setHeadingText] = useState('Static Heading Content');
  const [cardColor, setCardColor] = useState('bg-white');
  const [isVisible, setIsVisible] = useState(true);
  const [badgeCount, setBadgeCount] = useState(1);
  const [lastEvent, setLastEvent] = useState({
    userAction: 'None (Page Initialized)',
    jsExecuted: 'window.addEventListener("DOMContentLoaded", ...)',
    domMutation: 'Initial DOM Tree Rendered'
  });

  const handleAction = (type) => {
    if (type === 'text') {
      const texts = ['Dynamic Content Injected!', 'Real-time WebSocket Push', 'State Updated via Event'];
      const next = texts[Math.floor(Math.random() * texts.length)];
      setHeadingText(next);
      setLastEvent({
        userAction: 'User Clicked "Mutate Text" Button',
        jsExecuted: `document.getElementById("title").innerText = "${next}";`,
        domMutation: 'Updated Node TextContent directly in memory'
      });
    } else if (type === 'color') {
      const colors = ['bg-indigo-50 border-indigo-300', 'bg-emerald-50 border-emerald-300', 'bg-violet-50 border-violet-300', 'bg-amber-50 border-amber-300'];
      const nextColor = colors[Math.floor(Math.random() * colors.length)];
      setCardColor(nextColor);
      setLastEvent({
        userAction: 'User Clicked "Mutate Style" Button',
        jsExecuted: `document.getElementById("card").style.backgroundColor = "${nextColor}";`,
        domMutation: 'Recalculated CSSOM and triggered repaint'
      });
    } else if (type === 'visibility') {
      setIsVisible(prev => !prev);
      setLastEvent({
        userAction: 'User Clicked "Toggle Visibility" Button',
        jsExecuted: `document.getElementById("secret").style.display = "${!isVisible ? 'block' : 'none'}";`,
        domMutation: `Element ${!isVisible ? 'added to' : 'removed from'} the Render Tree (Reflow triggered)`
      });
    } else if (type === 'add') {
      setBadgeCount(prev => prev + 1);
      setLastEvent({
        userAction: 'User Clicked "Append Node" Button',
        jsExecuted: `const el = document.createElement("span"); parent.appendChild(el);`,
        domMutation: `Appended child node #badge-${badgeCount + 1} into live DOM hierarchy`
      });
    }
  };

  const handleReset = () => {
    setHeadingText('Static Heading Content');
    setCardColor('bg-white');
    setIsVisible(true);
    setBadgeCount(1);
    setLastEvent({
      userAction: 'Page Reset',
      jsExecuted: 'location.reload(); // Restores initial HTML snapshot',
      domMutation: 'DOM re-instantiated from server HTML bytes'
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card overflow-hidden">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Dynamic HTML (DHTML) &amp; Event-Driven Architecture</h3>
            <p className="text-xs text-slate-500">How JavaScript event listeners mutate the Document Object Model without server reloads</p>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-500"
          title="Reset"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 5-Step DHTML Architecture Flow Bar */}
      <div className="px-6 py-4 bg-slate-50/40 border-b border-slate-100">
        <div className="flex items-center justify-between min-w-[700px] sm:min-w-0 text-xs font-semibold">
          <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-center flex-1">
            <span className="text-[10px] text-slate-400 font-mono block">1. INITIAL</span>
            <span>Static HTML</span>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-300 mx-2 shrink-0" />
          <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-900 text-center flex-1">
            <span className="text-[10px] text-indigo-500 font-mono block">2. TRIGGER</span>
            <span>User Action</span>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-300 mx-2 shrink-0" />
          <div className="p-2.5 rounded-xl bg-violet-50 border border-violet-200 text-violet-900 text-center flex-1">
            <span className="text-[10px] text-violet-500 font-mono block">3. LOGIC</span>
            <span>JavaScript Engine</span>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-300 mx-2 shrink-0" />
          <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-center flex-1">
            <span className="text-[10px] text-amber-500 font-mono block">4. MUTATION</span>
            <span>DOM Tree Update</span>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-300 mx-2 shrink-0" />
          <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-center flex-1">
            <span className="text-[10px] text-emerald-500 font-mono block">5. RESULT</span>
            <span>Changed Page</span>
          </div>
        </div>
      </div>

      {/* Interactive Mutation Canvas */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 bg-gradient-to-b from-white to-slate-50/40">
        {/* Left: Action Triggers */}
        <div className="md:col-span-4 space-y-3">
          <span className="text-xs font-semibold text-slate-700 block">Trigger Interactive Events:</span>
          <div className="space-y-2">
            <button
              onClick={() => handleAction('text')}
              className="w-full text-left p-3 rounded-xl border border-slate-200 bg-white hover:bg-indigo-50/60 hover:border-indigo-300 text-xs font-semibold text-slate-800 transition-all flex items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <Type className="w-4 h-4 text-indigo-600" />
                <span>Mutate Text Content</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">onclick</span>
            </button>

            <button
              onClick={() => handleAction('color')}
              className="w-full text-left p-3 rounded-xl border border-slate-200 bg-white hover:bg-violet-50/60 hover:border-violet-300 text-xs font-semibold text-slate-800 transition-all flex items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <Palette className="w-4 h-4 text-violet-600" />
                <span>Mutate Inline Style</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">style.bg</span>
            </button>

            <button
              onClick={() => handleAction('visibility')}
              className="w-full text-left p-3 rounded-xl border border-slate-200 bg-white hover:bg-amber-50/60 hover:border-amber-300 text-xs font-semibold text-slate-800 transition-all flex items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4 text-amber-600" />
                <span>Toggle Visibility</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">display</span>
            </button>

            <button
              onClick={() => handleAction('add')}
              className="w-full text-left p-3 rounded-xl border border-slate-200 bg-white hover:bg-emerald-50/60 hover:border-emerald-300 text-xs font-semibold text-slate-800 transition-all flex items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Append Child Element</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">appendChild</span>
            </button>
          </div>
        </div>

        {/* Right: Dynamic DOM Node Container & Live Event Log */}
        <div className="md:col-span-8 space-y-4">
          {/* Target Element Visual Box */}
          <div className={`p-5 rounded-2xl border transition-all duration-200 space-y-3 ${cardColor} shadow-card`}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                Live DOM Element #card
              </span>
              <span className="text-xs text-indigo-600 font-mono font-bold">
                {badgeCount} Children Mounted
              </span>
            </div>

            <h4 className="text-lg font-extrabold text-slate-900 transition-all">
              {headingText}
            </h4>

            {isVisible ? (
              <p className="text-xs text-slate-600 leading-relaxed transition-all">
                This paragraph is an active Element Node inside <code>window.document</code>. When you click events on the left, JavaScript executes synchronously on the browser main thread and mutates the tree without refreshing the page.
              </p>
            ) : (
              <div className="p-3 rounded-lg bg-red-50 border border-dashed border-red-200 text-xs text-red-700 italic">
                Element hidden from Render Tree via <code>display: none</code>.
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 pt-2">
              {Array.from({ length: badgeCount }).map((_, i) => (
                <span key={i} className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-indigo-100 text-indigo-800 border border-indigo-200">
                  Node #{i + 1}
                </span>
              ))}
            </div>
          </div>

          {/* Under-The-Hood Wire Execution Log */}
          <div className="bg-slate-900 text-slate-200 p-4 rounded-xl font-mono text-xs border border-slate-800 space-y-1.5 shadow-inner">
            <div className="text-slate-500 text-[10px] uppercase font-bold border-b border-slate-800 pb-1 flex justify-between">
              <span>Event-Driven Execution Inspector</span>
              <span>Browser Main Thread</span>
            </div>
            <div><span className="text-slate-400">User Event:</span> <span className="text-amber-300 font-semibold">{lastEvent.userAction}</span></div>
            <div><span className="text-slate-400">JS Statement:</span> <span className="text-emerald-400">{lastEvent.jsExecuted}</span></div>
            <div><span className="text-slate-400">DOM Reflow:</span> <span className="text-indigo-300">{lastEvent.domMutation}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
