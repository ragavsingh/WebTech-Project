import React, { useState } from 'react';
import { 
  Sparkles, 
  Cpu, 
  Radio, 
  Brain, 
  Layers, 
  Activity, 
  Zap, 
  ArrowRight, 
  Info,
  ShieldCheck,
  Compass,
  CheckCircle2,
  Users
} from 'lucide-react';

const SCENARIOS = [
  {
    id: 'health',
    name: 'Ambient Healthcare',
    tagline: 'Continuous physiological sensing & proactive autonomous triage',
    badge: 'Biomedical IoT & Neural Agents',
    telemetry: {
      source: 'Wearable Biosensors & Optical Vitals',
      heartRate: '72 bpm',
      glucose: '98 mg/dL',
      ambientTemp: '21.5°C'
    },
    aiAction: 'Neural Agent detects subtle respiratory anomaly during sleep cycle; pre-authorizes telehealth consultation via smart contract and dispatches medication via autonomous courier.',
    latency: '3ms (Ultra-Low Latency Edge)',
    devices: ['Neural Bio-Band', 'Ambient Room Sensor', 'Automated Pharmacy Drone']
  },
  {
    id: 'smartcity',
    name: 'Autonomous Mobility',
    tagline: 'Vehicle-to-Everything (V2X) mesh & dynamic traffic routing',
    badge: 'Edge V2X & Swarm Intelligence',
    telemetry: {
      source: 'LiDAR Sensors & Roadway Telemetry',
      trafficDensity: 'High (840 vehicles/km)',
      weatherCondition: 'Flash Downpour',
      gridFrequency: '59.98 Hz'
    },
    aiAction: 'City Swarm Agent automatically dynamically synchronizes adaptive traffic light phasing, redistributes grid energy to EV charging hubs, and reroutes autonomous shuttles around flooded underpasses.',
    latency: '1.8ms (5G Ultra-Reliable Low Latency)',
    devices: ['Autonomous Shuttle Fleet', 'Smart Traffic Signals', 'Subsurface Flood Sensors']
  },
  {
    id: 'workspace',
    name: 'Symbiotic Workspace',
    tagline: 'Real-time collaborative neural synthesis & ambient context',
    badge: 'Human-AI Symbiosis & Spatial Web',
    telemetry: {
      source: 'Eye-Tracking, Neural Headband & Voice',
      cognitiveLoad: 'Moderate (Focus Mode)',
      lightingPreference: '4500K Warm Neutral',
      acousticProfile: 'Active Noise Canceling'
    },
    aiAction: 'Workspace adapts acoustic isolation, surfaces relevant research papers automatically in augmented reality field-of-view as the engineer contemplates architectural trade-offs.',
    latency: '2.5ms (Spatial Audio / Vision Pipeline)',
    devices: ['Neural Interface Headset', 'Spatial Display Mesh', 'Haptic Desk Matrix']
  }
];

export default function Web40FutureSimulator() {
  const [selectedScenarioId, setSelectedScenarioId] = useState('health');
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeStep, setActiveStep] = useState(3);

  const scenario = SCENARIOS.find(s => s.id === selectedScenarioId);

  const handleTriggerInteraction = () => {
    setIsSimulating(true);
    setActiveStep(1);
    setTimeout(() => {
      setActiveStep(2);
      setTimeout(() => {
        setActiveStep(3);
        setIsSimulating(false);
      }, 700);
    }, 700);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-purple-500/30">
              <Sparkles className="w-3.5 h-3.5" /> Conceptual Future Web Paradigm
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Web 4.0: The Symbiotic &amp; Ambient Intelligent Web
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Web 4.0 is not an official W3C technical standard, but a conceptual vision describing the convergence of autonomous AI agents, ubiquitous IoT devices, symbiotic human-machine interfaces, and context-aware pervasive computing.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleTriggerInteraction}
              disabled={isSimulating}
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-40 text-white text-xs font-bold transition flex items-center gap-1.5 shadow"
            >
              <Zap className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
              {isSimulating ? 'Processing Context...' : 'Simulate Autonomous Action'}
            </button>
          </div>
        </div>

        {/* Scenario Switcher Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
          {SCENARIOS.map((sc) => {
            const isSelected = sc.id === selectedScenarioId;
            return (
              <button
                key={sc.id}
                onClick={() => setSelectedScenarioId(sc.id)}
                className={`p-3.5 rounded-xl border text-left transition ${
                  isSelected
                    ? 'bg-white text-slate-900 border-white shadow-lg scale-[1.02]'
                    : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                }`}
              >
                <div className="text-xs font-bold uppercase tracking-wider opacity-75">
                  {sc.name}
                </div>
                <div className={`text-sm font-semibold truncate mt-0.5 ${isSelected ? 'text-purple-700' : 'text-purple-300'}`}>
                  {sc.badge}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Future Web Pipeline Canvas */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Ambient Telemetry & Sensing */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <Radio className="w-4 h-4 text-purple-600" /> Layer 1: Ubiquitous Telemetry
                </span>
                <span className="font-mono text-[10px] text-emerald-600">Continuous Stream</span>
              </div>
              
              <div className="space-y-2 text-xs font-mono">
                {Object.entries(scenario.telemetry).map(([key, val]) => (
                  <div key={key} className="p-2 rounded bg-white border border-slate-200 flex justify-between">
                    <span className="text-slate-500 capitalize">{key}:</span>
                    <span className="font-bold text-slate-800">{val}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-200">
                <span className="text-[11px] font-semibold text-slate-600 block mb-1.5">Connected Smart Peripherals:</span>
                <div className="flex flex-wrap gap-1.5">
                  {scenario.devices.map((d, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-full bg-purple-50 text-purple-800 text-[10px] font-medium border border-purple-200">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Symbiotic Neural Agent Decision */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-5 rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50/40 via-white to-indigo-50/40 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Layer 2: Autonomous Neural Agent</h4>
                    <p className="text-[11px] text-slate-500">Continuous Multi-Modal Context Inference</p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 font-mono text-xs font-bold">
                  {scenario.latency}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 text-slate-200 text-xs font-mono leading-relaxed space-y-2">
                <div className="text-[11px] text-purple-400 font-bold uppercase">
                  // Autonomous Action Executed:
                </div>
                <p className="font-sans text-xs text-slate-300 leading-relaxed">
                  {scenario.aiAction}
                </p>
              </div>

              {/* Step Sequence Indicators */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className={`p-2 rounded-lg border ${activeStep >= 1 ? 'bg-purple-100 border-purple-300 text-purple-900 font-bold' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                  1. Context Capture
                </div>
                <div className={`p-2 rounded-lg border ${activeStep >= 2 ? 'bg-purple-100 border-purple-300 text-purple-900 font-bold' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                  2. Edge Inference
                </div>
                <div className={`p-2 rounded-lg border ${activeStep >= 3 ? 'bg-purple-100 border-purple-300 text-purple-900 font-bold' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                  3. Proactive Action
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Note */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 font-semibold">Conceptual Definition: </strong>
            Unlike Web 1.0 (read-only), Web 2.0 (read-write), and Web 3.0 (semantic/decentralized), Web 4.0 is broadly understood as the <em>Symbiotic Web</em> or <em>Ubiquitous Web</em>. The browser dissolves into the background as ambient AI agents autonomously negotiate workflows on behalf of human users across edge networks, voice interfaces, spatial computing, and connected cyber-physical systems.
          </div>
        </div>
      </div>
    </div>
  );
}
