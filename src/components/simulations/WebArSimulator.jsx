import React, { useState } from 'react';
import { 
  Camera, 
  Move, 
  Maximize2, 
  RotateCw, 
  Box, 
  Layers, 
  Sparkles, 
  Info, 
  RotateCcw,
  CheckCircle2,
  Sliders
} from 'lucide-react';

export default function WebArSimulator() {
  const [posX, setPosX] = useState(0); // -100 to 100 px
  const [posY, setPosY] = useState(0); // -100 to 100 px
  const [scale, setScale] = useState(1); // 0.5 to 2.0
  const [rotation, setRotation] = useState(15); // 0 to 360 deg
  const [selectedModel, setSelectedModel] = useState('cube'); // 'cube' | 'sensor' | 'drone'

  const handleReset = () => {
    setPosX(0);
    setPosY(0);
    setScale(1);
    setRotation(15);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-violet-500/30">
              <Camera className="w-3.5 h-3.5" /> WebXR Augmented Reality
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Browser-Based Augmented Reality (WebXR) Simulator
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Augmented Reality blends synthetic 3D virtual computer-generated assets with real-world physical environments via camera optical tracking.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center gap-1.5 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Transform
            </button>
          </div>
        </div>

        {/* Object Selector */}
        <div className="flex flex-wrap gap-2 mt-6">
          <span className="text-xs text-slate-400 py-1.5 mr-2">Virtual 3D Asset:</span>
          {['cube', 'sensor', 'drone'].map((m) => (
            <button
              key={m}
              onClick={() => setSelectedModel(m)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition ${
                selectedModel === m ? 'bg-violet-600 text-white shadow-md' : 'bg-white/10 text-slate-300 hover:bg-white/15'
              }`}
            >
              {m === 'cube' ? 'Geometric Cube' : m === 'sensor' ? 'IoT Beacon' : 'Inspection Drone'}
            </button>
          ))}
        </div>
      </div>

      {/* Main AR Viewport Area */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Simulated Camera Viewport with 3D Virtual Overlay */}
          <div className="lg:col-span-8">
            <div className="border border-slate-300 rounded-2xl overflow-hidden bg-slate-950 relative h-96 flex flex-col justify-between p-4 shadow-inner">
              {/* Camera Chrome Overlay */}
              <div className="flex items-center justify-between text-xs text-slate-300 z-10">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/50 backdrop-blur-xs font-mono text-[11px]">
                  <Camera className="w-3.5 h-3.5 text-rose-400 animate-pulse" /> SIMULATED CAMERA FEED [1080p WebXR]
                </span>
                <span className="px-2.5 py-1 rounded bg-black/50 backdrop-blur-xs font-mono text-[11px] text-emerald-400">
                  Plane Tracking: LOCKED (60 FPS)
                </span>
              </div>

              {/* Simulated Physical Environment Background (Office Desk / Room Mesh) */}
              <div className="absolute inset-0 bg-radial from-slate-800 via-slate-900 to-black opacity-90 flex items-center justify-center">
                {/* Visual perspective tracking grid */}
                <div className="w-80 h-48 border border-dashed border-violet-500/40 rounded-xl flex items-center justify-center rotate-x-60 pointer-events-none">
                  <div className="w-48 h-28 border border-dotted border-violet-400/30 rounded-lg flex items-center justify-center text-[10px] font-mono text-violet-300/40">
                    [ SLAM Surface Tracking Plane ]
                  </div>
                </div>
              </div>

              {/* Virtual Object Overlay (Manipulated by Position, Scale, Rotation) */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-75"
                style={{
                  transform: `translate(${posX}px, ${posY}px) scale(${scale}) rotate(${rotation}deg)`
                }}
              >
                {selectedModel === 'cube' && (
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 shadow-2xl border border-white/40 flex items-center justify-center text-white font-bold text-xs flex-col space-y-1 backdrop-blur-md">
                    <Box className="w-8 h-8 text-white animate-bounce" />
                    <span>Virtual Asset</span>
                    <span className="text-[9px] opacity-75 font-mono">X:{posX} Y:{posY}</span>
                  </div>
                )}

                {selectedModel === 'sensor' && (
                  <div className="w-32 h-20 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 shadow-2xl border border-white/40 flex items-center justify-center text-white font-mono text-xs flex-col">
                    <div className="w-3 h-3 rounded-full bg-emerald-300 animate-ping mb-1" />
                    <span className="font-bold">IoT Sensor Node</span>
                    <span className="text-[10px]">Temp: 22.4°C</span>
                  </div>
                )}

                {selectedModel === 'drone' && (
                  <div className="w-36 h-24 rounded-3xl bg-gradient-to-br from-rose-500 to-amber-500 shadow-2xl border border-white/40 flex items-center justify-center text-white font-bold text-xs flex-col space-y-1">
                    <Sparkles className="w-6 h-6 text-white animate-spin" />
                    <span>Inspection Drone</span>
                    <span className="text-[10px] font-mono">Battery: 92%</span>
                  </div>
                )}
              </div>

              {/* Viewport Footer Diagnostics */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 z-10">
                <span>Scale: {scale.toFixed(1)}x</span>
                <span>Rotation: {rotation}°</span>
                <span>Coordinates: ({posX}, {posY})</span>
              </div>
            </div>
          </div>

          {/* Right Column: Spatial Transformation Controls */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-violet-600" /> Spatial Transformation Sliders
              </h4>

              {/* Move X */}
              <div>
                <div className="flex justify-between text-[11px] font-semibold text-slate-600 mb-1">
                  <span>Horizontal Position (X)</span>
                  <span className="font-mono">{posX}px</span>
                </div>
                <input
                  type="range"
                  min="-120"
                  max="120"
                  value={posX}
                  onChange={(e) => setPosX(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-violet-600"
                />
              </div>

              {/* Move Y */}
              <div>
                <div className="flex justify-between text-[11px] font-semibold text-slate-600 mb-1">
                  <span>Vertical Position (Y)</span>
                  <span className="font-mono">{posY}px</span>
                </div>
                <input
                  type="range"
                  min="-100"
                  max="100"
                  value={posY}
                  onChange={(e) => setPosY(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-violet-600"
                />
              </div>

              {/* Scale */}
              <div>
                <div className="flex justify-between text-[11px] font-semibold text-slate-600 mb-1">
                  <span>Uniform Scale Factor</span>
                  <span className="font-mono">{scale.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="2.0"
                  step="0.1"
                  value={scale}
                  onChange={(e) => setScale(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-violet-600"
                />
              </div>

              {/* Rotate */}
              <div>
                <div className="flex justify-between text-[11px] font-semibold text-slate-600 mb-1">
                  <span>Z-Axis Rotation</span>
                  <span className="font-mono">{rotation}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={rotation}
                  onChange={(e) => setRotation(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-violet-600"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Educational Disclaimer */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 font-semibold">Educational Simulation Disclaimer: </strong>
            This component provides a browser-based <em>visual simulation</em> of AR positioning mechanics. In production WebXR applications, real camera hardware streams live imagery into WebGL shaders, while Simultaneous Localization and Mapping (SLAM) algorithms track optical surface anchors and environmental lighting estimation.
          </div>
        </div>
      </div>
    </div>
  );
}
