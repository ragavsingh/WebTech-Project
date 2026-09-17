import React, { useState } from 'react';
import { 
  Wifi, 
  Radio, 
  Server, 
  Zap, 
  Sliders, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  Info,
  Clock,
  Cpu
} from 'lucide-react';

export default function FiveGImpactSimulator() {
  const [networkGen, setNetworkGen] = useState('5g'); // '3g' | '4g' | '5g'
  const [deviceDensity, setDeviceDensity] = useState(2500); // 100 to 10000 devices/km2
  const [dataDemand, setDataDemand] = useState('high'); // 'low' | 'high' | 'ultra'
  const [processingLocation, setProcessingLocation] = useState('edge'); // 'cloud' | 'edge'

  // Calculate illustrative metrics (clearly labeled as illustrative educational values)
  const calculateMetrics = () => {
    let baseLatency = networkGen === '5g' ? 2 : networkGen === '4g' ? 35 : 180;
    if (processingLocation === 'cloud') baseLatency += 120; // Transcontinental cloud penalty
    if (deviceDensity > 5000 && networkGen !== '5g') baseLatency += 80; // Congestion penalty on older gens

    let throughputMbps = networkGen === '5g' ? 1250 : networkGen === '4g' ? 85 : 3.6;
    if (deviceDensity > 5000) throughputMbps = Math.round(throughputMbps * 0.6);

    let packetLossPct = networkGen === '5g' ? 0.01 : networkGen === '4g' ? 0.8 : 4.5;
    if (deviceDensity > 7000 && networkGen !== '5g') packetLossPct += 3.2;

    const responsiveness = baseLatency < 25 ? 'Ultra-Fluid Real-Time' : baseLatency < 90 ? 'Acceptable Interactive' : 'Noticeable Lag & Buffering';

    return {
      latencyMs: baseLatency,
      throughputMbps,
      packetLossPct: packetLossPct.toFixed(2),
      responsiveness
    };
  };

  const metrics = calculateMetrics();

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-cyan-500/30">
              <Radio className="w-3.5 h-3.5" /> High-Concurrency Cellular Web Architecture
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              5G Network Characteristics &amp; Web Responsiveness
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Explore how cellular generations, massive device concurrency, data payloads, and compute offloading (Edge vs. Cloud) impact simulated web application latency and throughput.
            </p>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-mono text-cyan-300 border border-white/10">
            Metrics: Illustrative Educational Model
          </div>
        </div>

        {/* Network Generation Selector */}
        <div className="grid grid-cols-3 gap-2 mt-6">
          {[
            { id: '3g', name: '3G (UMTS)', speed: '~2-5 Mbps | High Latency' },
            { id: '4g', name: '4G (LTE)', speed: '~50-100 Mbps | Moderate Latency' },
            { id: '5g', name: '5G (mmWave / Sub-6)', speed: '~1-10 Gbps | Sub-5ms URLLC' }
          ].map((net) => {
            const isSelected = net.id === networkGen;
            return (
              <button
                key={net.id}
                onClick={() => setNetworkGen(net.id)}
                className={`p-3 rounded-xl border text-left transition ${
                  isSelected
                    ? 'bg-white text-slate-900 border-white shadow-md'
                    : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                }`}
              >
                <div className="text-xs font-bold uppercase">{net.name}</div>
                <div className="text-[10px] opacity-75 mt-0.5 truncate">{net.speed}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Network Configuration Sliders */}
      <div className="p-6 border-b border-slate-100 bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Device Density Slider */}
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2">
            <div className="flex justify-between text-xs font-semibold text-slate-700">
              <span>Concurrent Device Density</span>
              <span className="font-mono text-cyan-600 font-bold">{deviceDensity.toLocaleString()} / km²</span>
            </div>
            <input
              type="range"
              min="500"
              max="10000"
              step="500"
              value={deviceDensity}
              onChange={(e) => setDeviceDensity(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
            />
            <div className="text-[10px] text-slate-400">
              5G supports up to 1,000,000 devices/km² (Massive Machine-Type Comms).
            </div>
          </div>

          {/* Data Payload Demand */}
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1.5">
            <span className="text-xs font-semibold text-slate-700 block">Application Data Demand</span>
            <select
              value={dataDemand}
              onChange={(e) => setDataDemand(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-1.5 text-slate-800 focus:outline-none"
            >
              <option value="low">Low: Text &amp; Telemetry Data</option>
              <option value="high">High: 4K Video Streaming</option>
              <option value="ultra">Ultra-High: Spatial Web &amp; 3D Point Clouds</option>
            </select>
            <div className="text-[10px] text-slate-400">Payload scale requirements.</div>
          </div>

          {/* Compute Location */}
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1.5">
            <span className="text-xs font-semibold text-slate-700 block">Compute Processing Location</span>
            <div className="flex gap-1 pt-1">
              <button
                onClick={() => setProcessingLocation('edge')}
                className={`flex-1 py-1 px-2 rounded text-xs font-semibold flex items-center justify-center gap-1 ${
                  processingLocation === 'edge' ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                <Zap className="w-3.5 h-3.5" /> Regional Edge
              </button>
              <button
                onClick={() => setProcessingLocation('cloud')}
                className={`flex-1 py-1 px-2 rounded text-xs font-semibold flex items-center justify-center gap-1 ${
                  processingLocation === 'cloud' ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                <Server className="w-3.5 h-3.5" /> Central Cloud
              </button>
            </div>
            <div className="text-[10px] text-slate-400">Edge avoids transcontinental fiber round-trips.</div>
          </div>
        </div>
      </div>

      {/* Real-Time Metrics Scorecard */}
      <div className="p-6">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          Simulated Application Performance Scorecard:
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Metric 1: Round-Trip Latency */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase">Simulated Latency</span>
            <div className="text-2xl font-black font-mono text-cyan-700">
              ~{metrics.latencyMs} ms
            </div>
            <div className="text-[10px] text-slate-500">Target for WebXR: &lt; 20ms</div>
          </div>

          {/* Metric 2: Throughput */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase">Throughput Capacity</span>
            <div className="text-2xl font-black font-mono text-emerald-700">
              {metrics.throughputMbps} Mbps
            </div>
            <div className="text-[10px] text-slate-500">Effective channel rate</div>
          </div>

          {/* Metric 3: Packet Loss */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase">Packet Drop Ratio</span>
            <div className="text-2xl font-black font-mono text-amber-600">
              {metrics.packetLossPct}%
            </div>
            <div className="text-[10px] text-slate-500">Cellular interference rate</div>
          </div>

          {/* Metric 4: Perceived UX */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase">Perceived Fluidity</span>
            <div className="text-sm font-bold text-slate-900 truncate mt-1">
              {metrics.responsiveness}
            </div>
            <div className="text-[10px] text-slate-500">Interaction feedback grade</div>
          </div>
        </div>

        {/* Educational Note */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 font-semibold">Illustrative Metrics Disclaimer: </strong>
            All numerical metrics above represent conceptual pedagogical models designed to illustrate the relative performance differences between network generations (such as 5G Ultra-Reliable Low-Latency Communication - URLLC) and architectural offloading. Real-world cellular performance varies based on RF spectrum band (mmWave vs. sub-6GHz), distance to cell towers, physical obstructions, and ISP backhaul capacity.
          </div>
        </div>
      </div>
    </div>
  );
}
