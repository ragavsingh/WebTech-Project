import React, { useState } from 'react';
import { 
  Sparkles, 
  Compass, 
  Smartphone, 
  Laptop, 
  Sun, 
  Moon, 
  Wifi, 
  Car, 
  Home, 
  ArrowRight, 
  CheckCircle2, 
  Info,
  Layers,
  Brain
} from 'lucide-react';

export default function SmartWebSimulator() {
  const [deviceType, setDeviceType] = useState('mobile'); // 'mobile' | 'desktop'
  const [locationContext, setLocationContext] = useState('transit'); // 'transit' | 'home'
  const [timeOfDay, setTimeOfDay] = useState('night'); // 'day' | 'night'
  const [networkType, setNetworkType] = useState('5g'); // '5g' | '3g'

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" /> Pervasive Context-Aware Computing
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              The Smart Web Equation: Context + Data + AI + Automation
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Observe how a smart web portal senses environmental context (device, location, ambient lighting, network speed) and autonomously reorganizes itself for minimal cognitive friction.
            </p>
          </div>
        </div>

        {/* The Equation Formula Box */}
        <div className="mt-6 p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono text-emerald-300 overflow-x-auto">
          <span>[Context Sensing]</span>
          <span className="text-white">+</span>
          <span>[Telemetry Data]</span>
          <span className="text-white">+</span>
          <span>[Neural AI Model]</span>
          <span className="text-white">+</span>
          <span>[Edge Automation]</span>
          <span className="text-white">=</span>
          <span className="font-bold text-white bg-emerald-600 px-2 py-0.5 rounded">Smart Experience</span>
        </div>
      </div>

      {/* Context Tuning Controls */}
      <div className="p-6 border-b border-slate-100 bg-slate-50">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
          Configure Environmental Context Signals:
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Device Type */}
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1.5">
            <span className="text-[11px] text-slate-400 font-bold block">1. Device Sensor</span>
            <div className="flex gap-1">
              <button
                onClick={() => setDeviceType('mobile')}
                className={`flex-1 py-1 px-2 rounded text-xs font-semibold flex items-center justify-center gap-1 ${
                  deviceType === 'mobile' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" /> Mobile
              </button>
              <button
                onClick={() => setDeviceType('desktop')}
                className={`flex-1 py-1 px-2 rounded text-xs font-semibold flex items-center justify-center gap-1 ${
                  deviceType === 'desktop' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                <Laptop className="w-3.5 h-3.5" /> PC
              </button>
            </div>
          </div>

          {/* Location Context */}
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1.5">
            <span className="text-[11px] text-slate-400 font-bold block">2. Physical Location</span>
            <div className="flex gap-1">
              <button
                onClick={() => setLocationContext('transit')}
                className={`flex-1 py-1 px-2 rounded text-xs font-semibold flex items-center justify-center gap-1 ${
                  locationContext === 'transit' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                <Car className="w-3.5 h-3.5" /> In-Transit
              </button>
              <button
                onClick={() => setLocationContext('home')}
                className={`flex-1 py-1 px-2 rounded text-xs font-semibold flex items-center justify-center gap-1 ${
                  locationContext === 'home' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                <Home className="w-3.5 h-3.5" /> Home
              </button>
            </div>
          </div>

          {/* Ambient Lighting / Time */}
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1.5">
            <span className="text-[11px] text-slate-400 font-bold block">3. Time &amp; Light</span>
            <div className="flex gap-1">
              <button
                onClick={() => setTimeOfDay('night')}
                className={`flex-1 py-1 px-2 rounded text-xs font-semibold flex items-center justify-center gap-1 ${
                  timeOfDay === 'night' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                <Moon className="w-3.5 h-3.5" /> Night
              </button>
              <button
                onClick={() => setTimeOfDay('day')}
                className={`flex-1 py-1 px-2 rounded text-xs font-semibold flex items-center justify-center gap-1 ${
                  timeOfDay === 'day' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                <Sun className="w-3.5 h-3.5" /> Day
              </button>
            </div>
          </div>

          {/* Network Bandwidth */}
          <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1.5">
            <span className="text-[11px] text-slate-400 font-bold block">4. Connection Speed</span>
            <div className="flex gap-1">
              <button
                onClick={() => setNetworkType('5g')}
                className={`flex-1 py-1 px-2 rounded text-xs font-semibold flex items-center justify-center gap-1 ${
                  networkType === '5g' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                5G Edge
              </button>
              <button
                onClick={() => setNetworkType('3g')}
                className={`flex-1 py-1 px-2 rounded text-xs font-semibold flex items-center justify-center gap-1 ${
                  networkType === '3g' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                3G Low
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Adapted Smart Viewport */}
      <div className="p-6">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
          Autonomously Adapted Smart Viewport:
        </div>

        <div
          className={`rounded-2xl p-6 border transition-all duration-300 shadow-sm ${
            timeOfDay === 'night'
              ? 'bg-slate-900 border-slate-800 text-white'
              : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
            <div>
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                timeOfDay === 'night' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-emerald-100 text-emerald-800'
              }`}>
                Smart Context Active
              </span>
              <h4 className="text-lg font-bold mt-1">
                {locationContext === 'transit' ? 'Quick Glance In-Transit Mode' : 'Comprehensive Deep Study Mode'}
              </h4>
            </div>
            <div className="flex items-center gap-2 text-xs opacity-75 font-mono">
              <span>{deviceType === 'mobile' ? 'Compact Mobile Stack' : 'Expanded Desktop Layout'}</span>
              <span>•</span>
              <span>{networkType === '5g' ? 'Rich Media Enabled' : 'Low-Bandwidth Text Only'}</span>
            </div>
          </div>

          {/* Adapted UI Elements */}
          <div className="py-4 space-y-3">
            {locationContext === 'transit' ? (
              <div className="space-y-2">
                <div className={`p-4 rounded-xl border flex items-center justify-between ${
                  timeOfDay === 'night' ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div>
                    <div className="font-bold text-sm">Next Transit Connection: Train 4B</div>
                    <div className="text-xs opacity-75">Boarding in 8 minutes at Platform 3</div>
                  </div>
                  <button className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold">
                    Scan NFC Pass
                  </button>
                </div>
                <p className="text-xs opacity-75">
                  Complex article cards hidden automatically to minimize distractions while in motion.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className={`p-3 rounded-xl border ${timeOfDay === 'night' ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="font-bold text-xs">Research Synthesis</div>
                    <div className="text-[11px] opacity-75">Full multi-panel code editor and interactive simulation tools enabled for focused workspace session.</div>
                  </div>
                  <div className={`p-3 rounded-xl border ${timeOfDay === 'night' ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="font-bold text-xs">Collaborative Peer Room</div>
                    <div className="text-[11px] opacity-75">Connected to regional developer mesh via low-latency WebRTC channel.</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Adaptations Breakdown Footer */}
          <div className="pt-3 border-t border-white/10 flex flex-wrap gap-3 text-[11px] font-mono opacity-75">
            <span>Theme: {timeOfDay === 'night' ? 'Dark Mode (WCAG AAA)' : 'Light High-Contrast'}</span>
            <span>Asset Compression: {networkType === '5g' ? 'Full Resolution' : 'Heavy Brotli Compression'}</span>
          </div>
        </div>

        {/* Educational Note */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 font-semibold">Ambient Intelligence: </strong>
            The Smart Web moves beyond simple media queries (which only inspect pixel width). A smart web platform integrates browser sensors (ambient light API, geolocation, battery status API, network information API) with machine learning to anticipate user intention before they click a single button.
          </div>
        </div>
      </div>
    </div>
  );
}
