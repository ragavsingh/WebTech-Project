import React, { useState } from 'react';
import { 
  Cpu, 
  Globe, 
  Zap, 
  Clock, 
  Server, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Radio,
  Info
} from 'lucide-react';

export default function EdgeComputingSimulator() {
  const [selectedRoute, setSelectedRoute] = useState('edge'); // 'edge' | 'cloud' | 'compare'
  const [isSimulating, setIsSimulating] = useState(false);
  const [edgeProgress, setEdgeProgress] = useState(0);
  const [cloudProgress, setCloudProgress] = useState(0);
  const [edgeLatency, setEdgeLatency] = useState(14);
  const [cloudLatency, setCloudLatency] = useState(165);

  const handleStartSimulation = () => {
    setIsSimulating(true);
    setEdgeProgress(0);
    setCloudProgress(0);

    // Edge completes rapidly (~14ms simulation scaled to 400ms visual)
    const edgeInterval = setInterval(() => {
      setEdgeProgress(prev => {
        if (prev >= 100) {
          clearInterval(edgeInterval);
          return 100;
        }
        return prev + 25;
      });
    }, 100);

    // Cloud suffers long transit (~165ms scaled to 1600ms visual)
    const cloudInterval = setInterval(() => {
      setCloudProgress(prev => {
        if (prev >= 100) {
          clearInterval(cloudInterval);
          setIsSimulating(false);
          return 100;
        }
        return prev + 6;
      });
    }, 100);
  };

  const handleReset = () => {
    setIsSimulating(false);
    setEdgeProgress(0);
    setCloudProgress(0);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-cyan-500/30">
              <Zap className="w-3.5 h-3.5" /> Edge Computing & Decentralized Delivery
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Latency Race: Regional Edge Node vs. Centralized Origin Cloud
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Compare round-trip transit times when requests are terminated at nearby Edge CDN Points of Presence (PoPs) vs traveling halfway across the globe to a centralized cloud data center.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleStartSimulation}
              disabled={isSimulating}
              className="px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 disabled:opacity-40 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition"
            >
              <Play className="w-3.5 h-3.5" /> Run Latency Race
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center gap-1 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>
        </div>

        {/* Latency Comparison Scoreboard */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-800 text-cyan-200 flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-wider font-bold">Edge PoP Round-Trip</div>
              <div className="text-xl font-mono font-bold text-cyan-300">~{edgeLatency} ms</div>
            </div>
            <Zap className="w-6 h-6 text-cyan-400" />
          </div>

          <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-wider font-bold">Origin Cloud Data Center</div>
              <div className="text-xl font-mono font-bold text-amber-300">~{cloudLatency} ms</div>
            </div>
            <Clock className="w-6 h-6 text-amber-400" />
          </div>
        </div>
      </div>

      {/* Main Visual Packet Race */}
      <div className="p-6 space-y-6">
        {/* Track 1: Regional Edge Server */}
        <div className="p-5 rounded-2xl border border-cyan-200 bg-cyan-50/30 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-cyan-900 flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-600" /> Track 1: Edge Serverless Worker (Nearby PoP: 15 km away)
            </span>
            <span className="font-mono text-[11px] font-bold text-cyan-700">
              {edgeProgress === 100 ? 'Response Delivered (14ms)' : `${edgeProgress}% Transit`}
            </span>
          </div>

          {/* Animated Progress Track */}
          <div className="h-3 rounded-full bg-cyan-100 overflow-hidden relative">
            <div
              className="h-full bg-cyan-600 transition-all duration-100 rounded-full"
              style={{ width: `${edgeProgress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
            <span>User Device (Paris)</span>
            <span>Local ISP Switch</span>
            <span className="text-cyan-700 font-bold">Edge CDN PoP (Paris)</span>
          </div>
        </div>

        {/* Track 2: Centralized Origin Cloud Server */}
        <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-800 flex items-center gap-2">
              <Server className="w-4 h-4 text-slate-500" /> Track 2: Centralized Cloud Origin (North Virginia: 6,200 km away)
            </span>
            <span className="font-mono text-[11px] font-bold text-amber-700">
              {cloudProgress === 100 ? 'Response Delivered (165ms)' : `${cloudProgress}% Transit`}
            </span>
          </div>

          {/* Animated Progress Track */}
          <div className="h-3 rounded-full bg-slate-200 overflow-hidden relative">
            <div
              className="h-full bg-amber-500 transition-all duration-100 rounded-full"
              style={{ width: `${cloudProgress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
            <span>User Device (Paris)</span>
            <span>Transatlantic Undersea Fiber Cable</span>
            <span className="text-slate-700 font-bold">Origin Cloud (US-East)</span>
          </div>
        </div>

        {/* Real-World Use Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
            <div className="font-bold text-slate-800">1. Real-Time Video & WebRTC</div>
            <p className="text-[11px] text-slate-500">Eliminates jitter in multi-party conference calls by routing media through edge relays.</p>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
            <div className="font-bold text-slate-800">2. IoT Sensor Pre-Filtering</div>
            <p className="text-[11px] text-slate-500">Aggregates and cleans gigabytes of industrial telemetry before sending anomaly summaries to origin.</p>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
            <div className="font-bold text-slate-800">3. Authentication & Geofencing</div>
            <p className="text-[11px] text-slate-500">Validates JWT signatures at the edge; blocks DDoS attacks before they consume server CPU.</p>
          </div>
        </div>

        {/* Educational Note */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 font-semibold">The Physics of Latency: </strong>
            Data traveling through fiber-optic glass cables is physically bound by the speed of light in glass (~200,000 km/s). A packet traveling from London to Sydney and back cannot physically complete a round-trip in less than ~160ms. Edge computing solves this not by speeding up physics, but by placing compute nodes within 20 kilometers of the human user.
          </div>
        </div>
      </div>
    </div>
  );
}
