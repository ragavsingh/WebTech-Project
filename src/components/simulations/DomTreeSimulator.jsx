import React, { useState } from 'react';
import { 
  GitBranch, 
  Plus, 
  Trash2, 
  RotateCcw, 
  Code, 
  Layers, 
  ChevronRight,
  Eye
} from 'lucide-react';

export default function DomTreeSimulator() {
  const [items, setItems] = useState(['Home', 'Features', 'Pricing']);
  const [newItemText, setNewItemText] = useState('');

  const addItem = () => {
    if (newItemText.trim() && items.length < 5) {
      setItems([...items, newItemText.trim()]);
      setNewItemText('');
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const resetTree = () => {
    setItems(['Home', 'Features', 'Pricing']);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card overflow-hidden">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
            <GitBranch className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Live DOM Tree &amp; Node Visualizer</h3>
            <p className="text-xs text-slate-500">Mutate elements and observe synchronous tree construction</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center bg-white rounded-lg border border-slate-200 px-2 py-1 shadow-2xs">
            <input
              type="text"
              value={newItemText}
              onChange={(e) => setNewItemText(e.target.value)}
              placeholder="New node text..."
              onKeyDown={(e) => e.key === 'Enter' && addItem()}
              className="text-xs text-slate-800 bg-transparent focus:outline-none w-28"
            />
            <button
              onClick={addItem}
              disabled={!newItemText.trim() || items.length >= 5}
              className="p-1 rounded bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white text-xs"
              title="Add <li> element"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <button
            onClick={resetTree}
            className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-500"
            title="Reset tree"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Split visualizer: Left Tree graph, Right DOM Render */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-b from-white to-slate-50/30">
        {/* Visual Node Tree */}
        <div className="space-y-3">
          <div className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-blue-600" /> In-Memory DOM Hierarchy
          </div>
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 font-mono text-xs space-y-2">
            {/* Document Root */}
            <div className="flex items-center space-x-2 text-indigo-700 font-bold">
              <span className="px-1.5 py-0.5 rounded bg-indigo-100/70">#document</span>
            </div>
            
            {/* HTML */}
            <div className="ml-4 pl-3 border-l-2 border-slate-200 space-y-2">
              <div className="text-slate-800 font-semibold">&lt;html&gt;</div>

              {/* BODY */}
              <div className="ml-4 pl-3 border-l-2 border-slate-200 space-y-2">
                <div className="text-slate-800 font-semibold">&lt;body&gt;</div>

                {/* NAV */}
                <div className="ml-4 pl-3 border-l-2 border-indigo-200 space-y-1.5">
                  <div className="text-indigo-800 font-semibold">&lt;nav class="navbar"&gt;</div>

                  {/* UL */}
                  <div className="ml-4 pl-3 border-l-2 border-indigo-300 space-y-1">
                    <div className="text-indigo-900 font-semibold">&lt;ul id="nav-list"&gt;</div>

                    {/* LI Children */}
                    {items.map((item, index) => (
                      <div key={index} className="ml-4 pl-2 flex items-center justify-between group bg-white px-2 py-1 rounded border border-slate-200">
                        <div className="flex items-center space-x-1.5">
                          <span className="text-slate-500">&lt;li&gt;</span>
                          <span className="text-emerald-700 font-medium">"{item}"</span>
                          <span className="text-slate-500">&lt;/li&gt;</span>
                        </div>
                        <button
                          onClick={() => removeItem(index)}
                          className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                    <div className="text-indigo-900 font-semibold">&lt;/ul&gt;</div>
                  </div>

                  <div className="text-indigo-800 font-semibold">&lt;/nav&gt;</div>
                </div>
                <div className="text-slate-800 font-semibold">&lt;/body&gt;</div>
              </div>
              <div className="text-slate-800 font-semibold">&lt;/html&gt;</div>
            </div>
          </div>
        </div>

        {/* Browser Render Preview */}
        <div className="space-y-3">
          <div className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-emerald-600" /> Rendered Browser View
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm min-h-[220px] flex flex-col justify-center">
            <div className="text-[10px] text-slate-400 font-mono uppercase mb-2">Simulated Viewport</div>
            <nav className="p-3 bg-slate-100 rounded-lg border border-slate-200">
              <ul className="flex flex-wrap items-center gap-2">
                {items.map((item, i) => (
                  <li 
                    key={i} 
                    className="px-3 py-1.5 bg-white rounded-md text-xs font-medium text-slate-700 border border-slate-200 shadow-2xs hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-4 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded border border-slate-100">
              Notice how manipulating nodes directly updates the live DOM tree and triggers layout painting immediately.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
