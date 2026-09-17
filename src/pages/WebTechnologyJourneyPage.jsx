import React from 'react';
import { Compass, Milestone, Sparkles, ArrowRight } from 'lucide-react';
import Breadcrumb from '../components/layout/Breadcrumb';
import WebJourneyVisualizer from '../components/journey/WebJourneyVisualizer';
import { Link } from 'react-router-dom';

export default function WebTechnologyJourneyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Web Technology Journey' }]} />

      {/* Page Header */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-indigo-700 font-mono text-xs font-semibold uppercase tracking-wider">
          <Milestone className="w-4 h-4 text-indigo-600" />
          <span>Global Architectural Roadmap</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          The Web Technology Journey
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          From the first packet-switching networks to symbiotic, autonomous web architectures. Follow the 15 foundational milestones that transformed isolated computer terminals into an intelligent, decentralized, global hypermedia fabric.
        </p>
      </div>

      {/* Main Interactive Visualizer */}
      <WebJourneyVisualizer />

      {/* Learning Guidance Card */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg space-y-4">
        <div className="flex items-center space-x-2 text-indigo-400 text-xs font-mono font-bold uppercase">
          <Sparkles className="w-4 h-4" />
          <span>How to use the Web Technology Journey</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="space-y-1.5">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-indigo-500/30 text-indigo-300 font-mono text-xs flex items-center justify-center border border-indigo-400/30">1</span>
              <span>Follow the Evolutionary Chain</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every stage solved a critical limitation of the stage before it. Click any milestone to see *why* web technology had to invent the next protocol.
            </p>
          </div>

          <div className="space-y-1.5">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-indigo-500/30 text-indigo-300 font-mono text-xs flex items-center justify-center border border-indigo-400/30">2</span>
              <span>Launch Live Simulators</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Don't just read about DNS or Blockchain—launch the interactive lab directly from any node card to experiment with packet routing and state mutations.
            </p>
          </div>

          <div className="space-y-1.5">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-indigo-500/30 text-indigo-300 font-mono text-xs flex items-center justify-center border border-indigo-400/30">3</span>
              <span>Earn Syllabus Mastery</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Complete each milestone's diagnostic quiz to achieve 100% Journey Mastery across all 5 units of the university curriculum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
