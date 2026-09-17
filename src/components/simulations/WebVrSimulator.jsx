import React, { useState } from 'react';
import { 
  Box, 
  RotateCw, 
  ZoomIn, 
  ZoomOut, 
  Eye, 
  Sparkles, 
  Info, 
  Layers, 
  CheckCircle2, 
  Compass,
  RotateCcw
} from 'lucide-react';

export default function WebVrSimulator() {
  const [rotationY, setRotationY] = useState(25); // deg
  const [rotationX, setRotationX] = useState(-15); // deg
  const [zoomLevel, setZoomLevel] = useState(1); // 0.6 to 1.5
  const [selectedNode, setSelectedNode] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;
    setRotationY(prev => prev + deltaX * 0.5);
    setRotationX(prev => Math.max(-60, Math.min(60, prev - deltaY * 0.5)));
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleReset = () => {
    setRotationX(-15);
    setRotationY(25);
    setZoomLevel(1);
    setSelectedNode(null);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6 select-none">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-cyan-500/30">
              <Eye className="w-3.5 h-3.5" /> WebXR Virtual Reality (VR)
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Interactive 3D Immersive Environment
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Virtual Reality creates fully synthetic 6-Degrees-of-Freedom (6DoF) spatial worlds. Click and drag in the viewport to orbit, use the zoom controls, and click 3D nodes to inspect spatial assets.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center gap-1.5 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset View
            </button>
          </div>
        </div>

        {/* View Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-4 border-t border-white/10 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <span>Drag inside viewport to rotate view • Click 3D spatial nodes to inspect</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoomLevel(prev => Math.max(0.6, prev - 0.15))}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="font-mono text-cyan-300">{(zoomLevel * 100).toFixed(0)}% Zoom</span>
            <button
              onClick={() => setZoomLevel(prev => Math.min(1.5, prev + 0.15))}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main 3D Viewport */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* 3D Interactive Canvas */}
          <div className="lg:col-span-8">
            <div
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className="h-96 rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden relative cursor-grab active:cursor-grabbing flex items-center justify-center p-6 shadow-inner"
              style={{ perspective: '800px' }}
            >
              {/* Spatial 3D Container with CSS 3D Transforms */}
              <div
                className="relative transition-transform duration-75 ease-out"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `scale(${zoomLevel}) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
                }}
              >
                {/* 3D Central Platform / Grid */}
                <div
                  className="w-64 h-64 border-2 border-cyan-500/30 bg-cyan-950/20 rounded-3xl flex items-center justify-center relative shadow-2xl"
                  style={{ transform: 'rotateX(90deg) translateZ(-50px)' }}
                >
                  <div className="w-44 h-44 border border-dashed border-cyan-400/30 rounded-2xl" />
                </div>

                {/* Spatial Node 1: AI Engine Core */}
                <div
                  onClick={() => setSelectedNode('ai')}
                  className="absolute -top-12 -left-16 p-4 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white font-mono text-xs shadow-xl cursor-pointer hover:scale-110 transition border border-white/30 text-center"
                  style={{ transform: 'translateZ(40px)' }}
                >
                  <Sparkles className="w-6 h-6 mx-auto mb-1 text-purple-200" />
                  <div className="font-bold">Neural Core</div>
                  <div className="text-[9px] opacity-75">Click to Inspect</div>
                </div>

                {/* Spatial Node 2: IoT Gateway Beacon */}
                <div
                  onClick={() => setSelectedNode('iot')}
                  className="absolute -top-10 left-28 p-4 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-600 text-white font-mono text-xs shadow-xl cursor-pointer hover:scale-110 transition border border-white/30 text-center"
                  style={{ transform: 'translateZ(-30px)' }}
                >
                  <Box className="w-6 h-6 mx-auto mb-1 text-emerald-200" />
                  <div className="font-bold">IoT Beacon</div>
                  <div className="text-[9px] opacity-75">Click to Inspect</div>
                </div>

                {/* Spatial Node 3: Edge Ledger Node */}
                <div
                  onClick={() => setSelectedNode('ledger')}
                  className="absolute top-20 left-4 p-4 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-600 text-white font-mono text-xs shadow-xl cursor-pointer hover:scale-110 transition border border-white/30 text-center"
                  style={{ transform: 'translateZ(60px)' }}
                >
                  <Layers className="w-6 h-6 mx-auto mb-1 text-cyan-200" />
                  <div className="font-bold">Ledger Node</div>
                  <div className="text-[9px] opacity-75">Click to Inspect</div>
                </div>
              </div>

              {/* Viewport Overlay Coordinates */}
              <div className="absolute bottom-3 left-4 font-mono text-[11px] text-slate-400 bg-black/60 px-2.5 py-1 rounded backdrop-blur-xs">
                Pitch: {rotationX.toFixed(0)}° | Yaw: {rotationY.toFixed(0)}° | FOV: 75°
              </div>
            </div>
          </div>

          {/* Right Column: Spatial Node Detail Inspector */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 min-h-[384px] flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  3D Spatial Asset Inspector
                </h4>

                {selectedNode === 'ai' && (
                  <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs space-y-2">
                    <span className="font-bold text-purple-900 block text-sm">Autonomous Neural Core</span>
                    <p className="text-slate-600 leading-relaxed">
                      Spatial AI agent calculating real-time geometric ray-tracing, audio occlusion, and natural language scene comprehension inside the immersive 3D coordinate space.
                    </p>
                    <div className="font-mono text-[10px] text-purple-800 pt-1">
                      Coordinates: (-16, -12, +40) • Format: glTF 2.0
                    </div>
                  </div>
                )}

                {selectedNode === 'iot' && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs space-y-2">
                    <span className="font-bold text-emerald-900 block text-sm">Spatial IoT Telemetry Beacon</span>
                    <p className="text-slate-600 leading-relaxed">
                      Physical sensor twin broadcasting environmental data directly into the virtual reality coordinate mesh for remote industrial inspection.
                    </p>
                    <div className="font-mono text-[10px] text-emerald-800 pt-1">
                      Coordinates: (+28, -10, -30) • Protocol: MQTT-over-WSS
                    </div>
                  </div>
                )}

                {selectedNode === 'ledger' && (
                  <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-200 text-xs space-y-2">
                    <span className="font-bold text-cyan-900 block text-sm">Verifiable Ledger Node</span>
                    <p className="text-slate-600 leading-relaxed">
                      Decentralized state verification anchor ensuring that asset ownership, spatial permissions, and digital avatar tokens remain tamper-evident.
                    </p>
                    <div className="font-mono text-[10px] text-cyan-800 pt-1">
                      Coordinates: (+4, +20, +60) • Hash: 0000a18f94a8
                    </div>
                  </div>
                )}

                {!selectedNode && (
                  <div className="text-center py-12 text-slate-400 text-xs space-y-2">
                    <Box className="w-8 h-8 mx-auto text-slate-300" />
                    <div>Click any 3D node inside the viewport to inspect its spatial attributes and WebXR parameters.</div>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-400 font-mono flex justify-between">
                <span>W3C WebXR Standard</span>
                <span>OpenGL / WebGL 2.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Note */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 font-semibold">The WebXR Device API: </strong>
            The W3C WebXR Device API provides unified access to both Virtual Reality (VR) headsets (e.g. Meta Quest, Apple Vision Pro) and Augmented Reality (AR) mobile devices directly through web browsers. It eliminates the need for proprietary app store installations, delivering immersive 3D spatial computing through standard WebGL/WebGPU shaders.
          </div>
        </div>
      </div>
    </div>
  );
}
