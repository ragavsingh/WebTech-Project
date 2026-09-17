import React, { useState } from 'react';
import { 
  Sparkles, 
  Brain, 
  Layers, 
  BookOpen, 
  Compass, 
  Check, 
  Info, 
  ArrowRight, 
  Code, 
  Gamepad2, 
  Cloud, 
  Globe 
} from 'lucide-react';

const INTERESTS = [
  { id: 'prog', label: 'Programming', icon: Code },
  { id: 'ai', label: 'AI & Machine Learning', icon: Brain },
  { id: 'gaming', label: 'Web Gaming & 3D', icon: Gamepad2 },
  { id: 'cloud', label: 'Cloud Architecture', icon: Cloud },
  { id: 'webdev', label: 'Web Development', icon: Globe }
];

const CONTENT_PRESETS = {
  ai: {
    heroTitle: 'Master Neural Interfaces & Autonomous Agents',
    heroTagline: 'Personalized curriculum curated based on your affinity for machine learning and semantic ontologies.',
    recommendedBadge: 'AI Specialist Track',
    accentColor: 'purple',
    modules: [
      { title: 'Vector Embeddings in the Browser', duration: '12 min', level: 'Intermediate' },
      { title: 'Building LLM Function-Calling Workflows', duration: '18 min', level: 'Advanced' },
      { title: 'W3C OWL Ontologies for Machine Reasoning', duration: '15 min', level: 'Intermediate' }
    ]
  },
  gaming: {
    heroTitle: 'Spatial Web, WebGPU & 3D Interactive Graphics',
    heroTagline: 'Dynamic game-engine performance in the browser without native desktop installation.',
    recommendedBadge: 'Interactive 3D Track',
    accentColor: 'rose',
    modules: [
      { title: 'WebGPU Pipeline: Shaders & Render Passes', duration: '20 min', level: 'Advanced' },
      { title: 'Physics Engines with WebAssembly (Wasm)', duration: '15 min', level: 'Intermediate' },
      { title: 'WebXR Spatial Audio & Haptic Feedback', duration: '14 min', level: 'Beginner' }
    ]
  },
  cloud: {
    heroTitle: 'Distributed Systems, Edge Workers & Microservices',
    heroTagline: 'Architecting globally distributed, resilient cloud-native web backends.',
    recommendedBadge: 'Cloud Infrastructure Track',
    accentColor: 'cyan',
    modules: [
      { title: 'Zero-Latency Edge Serverless Functions', duration: '14 min', level: 'Intermediate' },
      { title: 'Event-Driven Microservices with Kafka & Redis', duration: '22 min', level: 'Advanced' },
      { title: 'Anycast DNS & BGP Routing Fundamentals', duration: '16 min', level: 'Intermediate' }
    ]
  },
  webdev: {
    heroTitle: 'Modern Reactive Frontend & Accessible Design Tokens',
    heroTagline: 'Building ultra-responsive, accessible web applications with cutting-edge CSS and reactive state.',
    recommendedBadge: 'Full-Stack Frontend Track',
    accentColor: 'indigo',
    modules: [
      { title: 'CSS Container Queries & Modern :has() Selector', duration: '10 min', level: 'Beginner' },
      { title: 'Decoupled Dark Mode Design Tokens', duration: '12 min', level: 'Beginner' },
      { title: 'Web Vitals: Optimizing LCP and INP at Scale', duration: '18 min', level: 'Intermediate' }
    ]
  },
  prog: {
    heroTitle: 'Algorithmic Web Architecture & Design Patterns',
    heroTagline: 'Mastering the computational patterns that scale modern web technology.',
    recommendedBadge: 'Software Engineering Track',
    accentColor: 'emerald',
    modules: [
      { title: 'Asynchronous Event Loops & Microtask Queues', duration: '15 min', level: 'Intermediate' },
      { title: 'Object-Relational Mapping & Database ACID Integrity', duration: '18 min', level: 'Advanced' },
      { title: 'RESTful API Contracts & Rate Limiting Protocols', duration: '14 min', level: 'Intermediate' }
    ]
  }
};

export default function AiPersonalizedWebSimulator() {
  const [selectedInterest, setSelectedInterest] = useState('ai');
  const [isAdapting, setIsAdapting] = useState(false);

  const handleSelectInterest = (id) => {
    setIsAdapting(true);
    setSelectedInterest(id);
    setTimeout(() => {
      setIsAdapting(false);
    }, 350);
  };

  const activeContent = CONTENT_PRESETS[selectedInterest];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-purple-500/30">
              <Brain className="w-3.5 h-3.5" /> AI-Driven Web Personalization
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Dynamic Real-Time Content Adaptation
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Web 4.0 platforms adapt content in real-time. Select user preferences below to trace how neural recommendation logic transforms the simulated webpage.
            </p>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-mono text-purple-300 border border-white/10">
            Engine: Simplified Educational Model
          </div>
        </div>

        {/* User Preference Selector Pills */}
        <div className="mt-6 space-y-2">
          <span className="text-xs text-slate-400">Select User Interest Profile:</span>
          <div className="flex flex-wrap gap-2">
            {INTERESTS.map((item) => {
              const Icon = item.icon;
              const isSelected = item.id === selectedInterest;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectInterest(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition ${
                    isSelected
                      ? 'bg-purple-600 text-white shadow-md scale-105'
                      : 'bg-white/10 text-slate-300 hover:bg-white/15'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.label} {isSelected && '✓'}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Logic Flow Bar */}
      <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800 font-bold">1. Preferences</span>
          <ArrowRight className="w-3 h-3 text-slate-400" />
          <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-bold">2. AI Logic: Cosine Vector Match</span>
          <ArrowRight className="w-3 h-3 text-slate-400" />
          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">3. Personalized Page Rendered</span>
        </div>
        <span className="text-[11px] text-slate-400 font-mono">Inference Time: ~4ms</span>
      </div>

      {/* Simulated Adaptive Page Viewport */}
      <div className="p-6">
        <div className="border border-slate-300 rounded-2xl overflow-hidden bg-white shadow-sm">
          {/* Simulated Browser Bar */}
          <div className="bg-slate-100 px-3 py-2 border-b border-slate-200 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="flex-1 bg-white px-3 py-1 rounded text-xs font-mono text-slate-600 border border-slate-200 truncate">
              https://learn.webtech.org/personalized-portal?interest={selectedInterest}
            </div>
          </div>

          {/* Rendered Content Area */}
          <div className={`p-6 transition-opacity duration-300 ${isAdapting ? 'opacity-30' : 'opacity-100'}`}>
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full bg-purple-50 text-purple-800 font-mono text-xs font-bold border border-purple-200">
                {activeContent.recommendedBadge}
              </span>
              <span className="text-xs text-slate-500 font-medium">Confidence: 96% Match</span>
            </div>

            <h4 className="text-2xl font-bold text-slate-900 mt-3">
              {activeContent.heroTitle}
            </h4>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              {activeContent.heroTagline}
            </p>

            {/* Recommended Learning Modules Grid */}
            <div className="mt-6 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Recommended Modules Tailored for You:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                {activeContent.modules.map((mod, i) => (
                  <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-purple-300 transition shadow-2xs space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>{mod.level}</span>
                      <span>{mod.duration}</span>
                    </div>
                    <h5 className="text-sm font-bold text-slate-800">{mod.title}</h5>
                    <button className="text-xs text-purple-600 font-semibold flex items-center gap-1 hover:underline pt-1">
                      Start Module <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Educational Disclaimer */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 font-semibold">Educational Simulation Disclaimer: </strong>
            This demonstration uses a simplified heuristic rule-set to illustrate the principle of user preference vectoring. In production systems (e.g. Netflix, Spotify, Amazon), recommendation engines utilize deep neural networks, transformer embeddings, and real-time streaming feature stores evaluating millions of interaction data points per second.
          </div>
        </div>
      </div>
    </div>
  );
}
