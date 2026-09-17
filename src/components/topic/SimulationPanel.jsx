import React from 'react';
import { Sparkles, Maximize2 } from 'lucide-react';
import SimulationRegistry from '../simulations/SimulationRegistry';

export default function SimulationPanel({ simulationType, title }) {
  if (!simulationType) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-5 rounded-full bg-indigo-600 inline-block" />
          <h2 className="text-lg font-bold text-slate-900">
            Interactive Simulation &amp; Visual Lab
          </h2>
          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-indigo-50 text-indigo-700 border border-indigo-100">
            Live Sandbox
          </span>
        </div>
      </div>

      <div>
        <SimulationRegistry type={simulationType} />
      </div>
    </div>
  );
}
