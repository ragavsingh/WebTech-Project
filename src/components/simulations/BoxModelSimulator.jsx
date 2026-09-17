import React, { useState } from 'react';
import { Box, Sliders, Info, Check, RotateCcw } from 'lucide-react';

export default function BoxModelSimulator() {
  const [boxSizing, setBoxSizing] = useState('border-box');
  const [width, setWidth] = useState(260);
  const [padding, setPadding] = useState(24);
  const [border, setBorder] = useState(4);
  const [margin, setMargin] = useState(20);

  // Compute rendered geometry
  const totalRenderedWidth = boxSizing === 'content-box' 
    ? width + (padding * 2) + (border * 2)
    : width;

  const contentRenderedWidth = boxSizing === 'content-box'
    ? width
    : Math.max(0, width - (padding * 2) - (border * 2));

  const totalOccupiedSpace = totalRenderedWidth + (margin * 2);

  const handleReset = () => {
    setBoxSizing('border-box');
    setWidth(260);
    setPadding(24);
    setBorder(4);
    setMargin(20);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card overflow-hidden">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600">
            <Box className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Interactive CSS Box Model Sandbox</h3>
            <p className="text-xs text-slate-500">Calculate layout box layers and compare box-sizing algorithms</p>
          </div>
        </div>

        {/* Box sizing toggle */}
        <div className="flex items-center space-x-2">
          <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-mono">
            <button
              onClick={() => setBoxSizing('border-box')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                boxSizing === 'border-box'
                  ? 'bg-white text-indigo-700 font-bold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              border-box (Modern)
            </button>
            <button
              onClick={() => setBoxSizing('content-box')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                boxSizing === 'content-box'
                  ? 'bg-white text-indigo-700 font-bold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              content-box (Legacy)
            </button>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-500"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Sliders */}
        <div className="lg:col-span-4 space-y-4 bg-slate-50/70 p-4 rounded-xl border border-slate-200/80 text-xs">
          <div className="font-semibold text-slate-800 flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5 text-indigo-600" /> Dimension Controls
          </div>

          <div>
            <div className="flex justify-between text-slate-600 mb-1">
              <span>CSS Specified Width:</span>
              <span className="font-mono font-bold text-indigo-600">{width}px</span>
            </div>
            <input
              type="range"
              min="160"
              max="340"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="w-full accent-indigo-600"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-600 mb-1">
              <span className="text-emerald-700 font-medium">Padding (inside border):</span>
              <span className="font-mono font-bold text-emerald-700">{padding}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="40"
              value={padding}
              onChange={(e) => setPadding(Number(e.target.value))}
              className="w-full accent-emerald-600"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-600 mb-1">
              <span className="text-amber-700 font-medium">Border (stroke width):</span>
              <span className="font-mono font-bold text-amber-700">{border}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="16"
              value={border}
              onChange={(e) => setBorder(Number(e.target.value))}
              className="w-full accent-amber-600"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-600 mb-1">
              <span className="text-orange-700 font-medium">Margin (outer spacing):</span>
              <span className="font-mono font-bold text-orange-700">{margin}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="40"
              value={margin}
              onChange={(e) => setMargin(Number(e.target.value))}
              className="w-full accent-orange-600"
            />
          </div>

          {/* Computed Output Box */}
          <div className="pt-3 border-t border-slate-200/80 space-y-1.5 font-mono text-[11px]">
            <div className="flex justify-between text-slate-700">
              <span>Rendered Element Width:</span>
              <span className="font-bold text-slate-900">{totalRenderedWidth}px</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>Inner Content Box:</span>
              <span>{contentRenderedWidth}px</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>Total Page Flow Footprint:</span>
              <span>{totalOccupiedSpace}px</span>
            </div>
          </div>
        </div>

        {/* Right: Concentric Rectangles Representation */}
        <div className="lg:col-span-8 flex flex-col items-center justify-center p-4 bg-slate-100/50 rounded-xl border border-slate-200">
          {/* Margin Layer (Orange) */}
          <div 
            style={{ padding: `${margin}px` }}
            className="bg-orange-100/80 border-2 border-dashed border-orange-300 rounded-2xl transition-all duration-150 relative text-center"
          >
            <span className="text-[10px] font-mono font-semibold uppercase text-orange-800 tracking-wider block mb-1">
              Margin ({margin}px)
            </span>

            {/* Border Layer (Yellow / Amber) */}
            <div 
              style={{ padding: `${border}px` }}
              className="bg-amber-100/80 border-2 border-amber-400 rounded-xl transition-all duration-150 relative text-center shadow-xs"
            >
              <span className="text-[10px] font-mono font-semibold uppercase text-amber-900 tracking-wider block mb-1">
                Border ({border}px)
              </span>

              {/* Padding Layer (Green) */}
              <div 
                style={{ padding: `${padding}px` }}
                className="bg-emerald-100/80 border-2 border-emerald-300 rounded-lg transition-all duration-150 relative text-center"
              >
                <span className="text-[10px] font-mono font-semibold uppercase text-emerald-900 tracking-wider block mb-1">
                  Padding ({padding}px)
                </span>

                {/* Content Box (Blue) */}
                <div 
                  style={{ width: `${Math.max(120, contentRenderedWidth)}px`, height: '70px' }}
                  className="bg-indigo-600 text-white rounded flex flex-col items-center justify-center text-xs font-mono font-bold shadow-md transition-all duration-150"
                >
                  <span>Content Box</span>
                  <span className="text-[11px] font-normal text-indigo-200">
                    {contentRenderedWidth}px &times; 70px
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
