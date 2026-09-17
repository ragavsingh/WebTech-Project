import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Activity, 
  Layers, 
  Box, 
  FlaskConical, 
  ArrowRight, 
  ExternalLink 
} from 'lucide-react';
import Breadcrumb from '../components/layout/Breadcrumb';
import DnsSimulator from '../components/simulations/DnsSimulator';
import HttpLifecycleSimulator from '../components/simulations/HttpLifecycleSimulator';
import DomTreeSimulator from '../components/simulations/DomTreeSimulator';
import BoxModelSimulator from '../components/simulations/BoxModelSimulator';

export default function PlaygroundPage() {
  const [activeTab, setActiveTab] = useState('dns');

  const simulators = [
    {
      id: 'dns',
      name: 'DNS Resolution Inspector',
      icon: Globe,
      topicId: 'dns-resolution',
      unit: 'Unit 1: Fundamentals',
      description: 'Simulate full iterative queries from the client browser through Recursive Resolver, Root, TLD, and Authoritative Nameservers.',
      component: <DnsSimulator />
    },
    {
      id: 'http',
      name: 'HTTP Wire Inspector',
      icon: Activity,
      topicId: 'http-lifecycle',
      unit: 'Unit 1: Protocols',
      description: 'Craft custom HTTP requests with different verbs, paths, authentication headers, and inspect live wire payloads and status codes.',
      component: <HttpLifecycleSimulator />
    },
    {
      id: 'dom',
      name: 'DOM Tree & Node Hierarchy',
      icon: Layers,
      topicId: 'dom-tree-hierarchy',
      unit: 'Unit 2: HTML5 & DOM',
      description: 'Directly append, delete, and inspect nodes in the live Document Object Model and view the immediate rendering effect.',
      component: <DomTreeSimulator />
    },
    {
      id: 'box-model',
      name: 'CSS Box Model Geometry',
      icon: Box,
      topicId: 'css-box-model',
      unit: 'Unit 3: CSS3 & Layout',
      description: 'Adjust margin, border, and padding in real-time, observing the mathematical difference between content-box and border-box sizing.',
      component: <BoxModelSimulator />
    }
  ];

  const currentSim = simulators.find(s => s.id === activeTab) || simulators[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Simulation Playground' }]} />

      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-indigo-700 font-mono text-xs font-semibold uppercase tracking-wider">
          <FlaskConical className="w-4 h-4 text-indigo-600" />
          <span>Interactive Sandbox Lab</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Web Technology Simulation Hub
        </h1>
        <p className="text-sm text-slate-500 max-w-2xl">
          An open sandbox environment to experiment with network protocols, DOM tree construction, and CSS geometry without syllabus constraints.
        </p>
      </div>

      {/* Tabs Selector */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 border-b border-slate-200">
        {simulators.map((sim) => {
          const Icon = sim.icon;
          const isActive = activeTab === sim.id;
          return (
            <button
              key={sim.id}
              onClick={() => setActiveTab(sim.id)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-card'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-indigo-600'}`} />
              <span>{sim.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Simulator Header Note */}
      <div className="bg-indigo-50/60 rounded-2xl p-4 border border-indigo-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="space-y-0.5">
          <span className="font-semibold text-indigo-900">{currentSim.name}</span>
          <p className="text-slate-600 max-w-xl">{currentSim.description}</p>
        </div>
        <Link
          to={`/topic/${currentSim.topicId}`}
          className="inline-flex items-center space-x-1 font-semibold text-indigo-700 hover:text-indigo-900 shrink-0"
        >
          <span>Read Full Topic Documentation</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Active Simulator Component View */}
      <div className="space-y-4">
        {currentSim.component}
      </div>
    </div>
  );
}
