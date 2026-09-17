import React, { useState } from 'react';
import { 
  History, 
  ChevronRight, 
  ChevronLeft, 
  Play, 
  RotateCcw, 
  Cpu, 
  Network, 
  Globe, 
  Share2, 
  Sparkles, 
  Calendar,
  CheckCircle2
} from 'lucide-react';

export default function InternetHistoryTimeline() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const stages = [
    {
      year: '1960s',
      title: 'Early Computer Networking & The Problem of Circuit Switching',
      short: 'Early Networking',
      tag: 'Theoretical Genesis',
      summary: 'Before the internet, telecommunications relied strictly on circuit switching—the same system used by analog telephone lines where a dedicated physical line was locked between two callers.',
      details: 'If a single wire or exchange switch was severed, the entire communication failed. Computer scientists Paul Baran and Donald Davies independently conceptualized packet switching: breaking messages into self-contained blocks that could travel independently through resilient, decentralized network nodes.',
      significance: 'Established the mathematical and architectural blueprint of resilient decentralized networking.',
      icon: Cpu,
      stats: 'Bandwidth: < 10 kbps | Nodes: 0 (Theoretical)'
    },
    {
      year: '1969',
      title: 'ARPANET: The First 4-Node Packet Network',
      short: 'ARPANET Born',
      tag: 'First Transmission',
      summary: 'Funded by the US Department of Defense\'s Advanced Research Projects Agency (DARPA), ARPANET established the first operational packet-switched network.',
      details: 'On October 29, 1969, researchers at UCLA transmitted the message "LOGIN" to the Stanford Research Institute. The system crashed after sending "LO"—marking the historic first transmitted internet characters. Four nodes connected UCLA, SRI, UC Santa Barbara, and the University of Utah.',
      significance: 'Proved packet switching functioned reliably over geographic distances using Interface Message Processors (IMPs).',
      icon: Network,
      stats: 'Nodes: 4 University Labs | Speed: 50 kbps lines'
    },
    {
      year: '1970s',
      title: 'Packet Switching & The Heterogeneous Network Challenge',
      short: 'Packet Switching',
      tag: 'Protocol Fragmentation',
      summary: 'Multiple independent networks began emerging globally (such as ALOHANET in Hawaii, SATNET, and European packet networks), but each ran on incompatible custom protocols.',
      details: 'Computers on one network could not communicate with computers on another. The fundamental question became: how can radically different hardware architectures interconnect without a centralized controller?',
      significance: 'Demonstrated the absolute necessity of an open, universal standard for internetworking.',
      icon: Share2,
      stats: 'Protocols: NCP, ALOHA, Cyclades'
    },
    {
      year: '1983',
      title: 'TCP/IP Adoption: The Official Birth of the Internet',
      short: 'TCP/IP Standard',
      tag: 'Flag Day',
      summary: 'On January 1, 1983 ("Flag Day"), ARPANET permanently deactivated its legacy NCP protocol and mandated the universal adoption of TCP/IP.',
      details: 'Designed by Vinton Cerf and Robert Kahn, TCP/IP separated transport reliability (TCP) from packet addressing and routing (IP). Any physical medium—copper, fiber, satellite, radio—could carry IP packets, creating a true "network of networks" (Internet).',
      significance: 'Defined the open architectural standard that still powers 100% of the modern internet today.',
      icon: Globe,
      stats: 'Standard: RFC 791 (IP) & RFC 793 (TCP)'
    },
    {
      year: 'Late 1980s',
      title: 'Network Expansion & Academic Backbones (NSFNET)',
      short: 'Expansion',
      tag: 'High-Speed Backbone',
      summary: 'The National Science Foundation created NSFNET, establishing a 56 kbps (later 45 Mbps T3) nationwide backbone connecting universities and supercomputer centers.',
      details: 'Internet traffic grew exponentially as global research institutions interconnected. Domain Name System (DNS) was introduced to replace monolithic text host files (`HOSTS.TXT`) with a distributed hierarchical lookup system.',
      significance: 'Transformed the internet from a military research prototype into an international scientific backbone.',
      icon: Network,
      stats: 'Connected Hosts: > 100,000 servers'
    },
    {
      year: 'Early 1990s',
      title: 'Commercialization & The Public Internet',
      short: 'Commercialization',
      tag: 'Privatization',
      summary: 'Government restrictions forbidding commercial activity on internet backbones were phased out, opening the infrastructure to private Internet Service Providers (ISPs).',
      details: 'Commercial backbones like PSINet, UUNET, and CERFnet took over from NSFNET. Everyday consumers gained dial-up access through modems, shifting the internet from universities into homes and businesses.',
      significance: 'Democratized internet access and enabled global commerce, email, and digital enterprise.',
      icon: History,
      stats: 'Users: Surpassed 10 Million worldwide'
    },
    {
      year: '1989 - 1991',
      title: 'Invention of the World Wide Web by Tim Berners-Lee',
      short: 'World Wide Web',
      tag: 'Application Layer Revolution',
      summary: 'At CERN in Switzerland, British scientist Sir Tim Berners-Lee invented the World Wide Web to help physicists share research papers effortlessly across the internet.',
      details: 'Berners-Lee invented three foundational pillars that turned the internet into an accessible multimedia information space: HyperText Markup Language (HTML), HyperText Transfer Protocol (HTTP), and Uniform Resource Locators (URLs).',
      significance: 'The Web is not the Internet—the Web is an application layer system built ON TOP of the Internet.',
      icon: Globe,
      stats: 'First Website: info.cern.ch (August 1991)'
    },
    {
      year: '2000s - Present',
      title: 'Modern Internet: Broadband, Mobile, Cloud & IPv6',
      short: 'Modern Internet',
      tag: 'Global Ubiquity',
      summary: 'The internet transformed into an omnipresent global utility spanning submarine fiber-optic cables, 5G wireless networks, cloud data centers, and connected edge devices.',
      details: 'Modern developments include the transition to 128-bit IPv6 addressing (preventing address exhaustion), HTTP/3 over QUIC for ultra-low latency, and modern Single Page Applications powered by rich browser engines.',
      significance: 'Connects over 5.4 billion human beings and tens of billions of IoT devices simultaneously.',
      icon: Sparkles,
      stats: 'Global Connected Users: > 5.4 Billion'
    }
  ];

  const current = stages[activeStage];
  const IconComponent = current.icon;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card overflow-hidden">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
            <History className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Evolution of the Internet: Interactive Timeline</h3>
            <p className="text-xs text-slate-500">From ARPANET &amp; packet switching to universal TCP/IP and the World Wide Web</p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setActiveStage(prev => Math.max(0, prev - 1))}
            disabled={activeStage === 0}
            className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 text-slate-700 transition-colors"
            title="Previous Era"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono text-slate-600 font-semibold px-2">
            {activeStage + 1} / {stages.length}
          </span>
          <button
            onClick={() => setActiveStage(prev => Math.min(stages.length - 1, prev + 1))}
            disabled={activeStage === stages.length - 1}
            className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 text-slate-700 transition-colors"
            title="Next Era"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => setActiveStage(0)}
            className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-500 transition-colors"
            title="Reset Timeline"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Interactive Timeline Bar */}
      <div className="px-4 py-3 bg-slate-50/40 border-b border-slate-100 overflow-x-auto">
        <div className="flex items-center space-x-2 min-w-[700px] sm:min-w-0">
          {stages.map((stage, idx) => {
            const isSelected = activeStage === idx;
            const isPast = idx < activeStage;

            return (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`flex-1 flex flex-col items-center py-2 px-1 rounded-xl transition-all text-center group ${
                  isSelected
                    ? 'bg-indigo-50 border border-indigo-200 shadow-2xs'
                    : 'hover:bg-slate-100/60'
                }`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all mb-1 ${
                  isSelected
                    ? 'bg-indigo-600 text-white ring-2 ring-indigo-200 scale-105'
                    : isPast
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-slate-200 text-slate-600'
                }`}>
                  {idx + 1}
                </div>
                <span className={`text-[11px] font-bold truncate max-w-[85px] ${
                  isSelected ? 'text-indigo-900' : 'text-slate-600'
                }`}>
                  {stage.year}
                </span>
                <span className="text-[10px] text-slate-600 truncate max-w-[80px]">
                  {stage.short}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Detail Canvas */}
      <div className="p-6 space-y-5 bg-gradient-to-b from-white to-slate-50/30">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
              {current.year}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
              {current.tag}
            </span>
          </div>
          <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
            {current.stats}
          </span>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 shadow-2xs">
            <IconComponent className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-slate-900 leading-snug">
              {current.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {current.summary}
            </p>
          </div>
        </div>

        {/* Narrative & Significance Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm pt-2">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
              Historical Context &amp; Mechanics
            </span>
            <p className="text-slate-600 leading-relaxed">
              {current.details}
            </p>
          </div>

          <div className="bg-indigo-50/60 p-4 rounded-xl border border-indigo-100 space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-800 block flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              Significance to Modern Web
            </span>
            <p className="text-slate-700 leading-relaxed">
              {current.significance}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
