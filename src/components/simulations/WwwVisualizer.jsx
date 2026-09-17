import React, { useState } from 'react';
import { 
  User, 
  Laptop, 
  Globe, 
  Server, 
  FileText, 
  ArrowRight, 
  Play, 
  RotateCcw, 
  Layers, 
  CheckCircle2, 
  Info,
  ExternalLink
} from 'lucide-react';

export default function WwwVisualizer() {
  const [activeComponent, setActiveComponent] = useState('browser');
  const [animationStep, setAnimationStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const components = {
    user: {
      name: '1. The User',
      short: 'Human / Client',
      icon: User,
      color: 'indigo',
      role: 'Initiates Intent',
      summary: 'The human seeking information who enters a URL (e.g., https://example.com) into an address bar or clicks a hyperlink.',
      details: 'The user does not need to know binary, IP addresses, or routing protocols. They interact solely with the high-level graphical interface provided by the web browser.'
    },
    browser: {
      name: '2. The Web Browser',
      short: 'User Agent Client',
      icon: Laptop,
      color: 'blue',
      role: 'Translates & Renders',
      summary: 'A sophisticated client application (Chrome, Safari, Firefox, Edge) that acts as the user agent.',
      details: 'The browser parses the user\'s URL, performs DNS resolution, establishes TCP/TLS connections, sends HTTP requests over the network, and parses returned HTML, CSS, and JavaScript into the Document Object Model (DOM) to paint interactive pixels.'
    },
    internet: {
      name: '3. The Global Internet',
      short: 'Physical Transport Grid',
      icon: Globe,
      color: 'emerald',
      role: 'Global Routing Infrastructure',
      summary: 'The worldwide physical infrastructure of fiber cables, undersea lines, routers, and switches operating on TCP/IP.',
      details: 'CRITICAL DISTINCTION: The Internet is the highway system; the World Wide Web (WWW) is the delivery truck traffic driving on that highway. The Internet also carries email (SMTP), file transfers (FTP), streaming (WebRTC), and multiplayer gaming.'
    },
    server: {
      name: '4. The Web Server',
      short: 'HTTP Host Daemon',
      icon: Server,
      color: 'violet',
      role: 'Processes & Serves',
      summary: 'A computer running specialized daemon software (Nginx, Apache, Node.js) listening on ports 80 (HTTP) and 443 (HTTPS).',
      details: 'The web server receives incoming HTTP request packets, verifies permissions, locates the requested file or executes server-side code (Node.js/Python), and packages an HTTP response with appropriate status codes and MIME headers.'
    },
    resource: {
      name: '5. The Web Resource',
      short: 'Target Payload',
      icon: FileText,
      color: 'amber',
      role: 'The Requested Content',
      summary: 'Any addressable digital asset identified by a Uniform Resource Identifier (URI).',
      details: 'Resources include HTML documents (web pages), CSS stylesheets, JavaScript files, PNG/SVG images, JSON data feeds, PDFs, and MP4 videos. Interlinked HTML documents forming a single organizational identity constitute a "Website".'
    }
  };

  const steps = [
    { step: 1, target: 'user', text: 'User types "https://example.com/about" into the address bar and hits Enter.' },
    { step: 2, target: 'browser', text: 'Browser parses URL into Protocol (HTTPS), Host (example.com), and Path (/about).' },
    { step: 3, target: 'internet', text: 'Browser packages an HTTP GET request and routes packets across the global internet.' },
    { step: 4, target: 'server', text: 'Web Server at target IP accepts request on port 443, decrypts TLS, and locates "/about.html".' },
    { step: 5, target: 'resource', text: 'Web Server reads the HTML resource from disk and transmits HTTP 200 OK back over the internet.' },
    { step: 6, target: 'browser', text: 'Browser parses HTML tokens, builds the DOM tree, downloads CSS, and renders the webpage.' }
  ];

  const handleStartAnimation = () => {
    setIsAnimating(true);
    setAnimationStep(1);
    runStepLoop(1);
  };

  const runStepLoop = (current) => {
    if (current <= steps.length) {
      setAnimationStep(current);
      setActiveComponent(steps[current - 1].target);
      setTimeout(() => {
        if (current < steps.length) {
          runStepLoop(current + 1);
        } else {
          setIsAnimating(false);
        }
      }, 1600);
    }
  };

  const handleReset = () => {
    setIsAnimating(false);
    setAnimationStep(0);
    setActiveComponent('browser');
  };

  const currentCompData = components[activeComponent];
  const ActiveIcon = currentCompData.icon;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card overflow-hidden">
      {/* Simulator Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">World Wide Web Architecture &amp; Request Flow</h3>
            <p className="text-xs text-slate-500">Interactive 5-tier web model: User &rarr; Browser &rarr; Internet &rarr; Server &rarr; Resource</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleStartAnimation}
            disabled={isAnimating}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <Play className="w-3.5 h-3.5" />
            <span>{animationStep > 0 ? 'Replay Flow Animation' : 'Run "What Happens" Animation'}</span>
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-500"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Visual Component Pipeline (Clickable Nodes) */}
      <div className="p-6 bg-gradient-to-b from-slate-50/50 to-white space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {Object.entries(components).map(([key, item]) => {
            const isSelected = activeComponent === key;
            const Icon = item.icon;

            return (
              <button
                key={key}
                onClick={() => { setActiveComponent(key); setAnimationStep(0); }}
                className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between space-y-3 group ${
                  isSelected
                    ? 'bg-indigo-50/90 border-indigo-500 shadow-md ring-2 ring-indigo-200'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">
                    {item.role.split(' ')[0]}
                  </span>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">
                    {item.name}
                  </h4>
                  <span className="text-[10px] text-slate-500 font-medium block mt-0.5">
                    {item.short}
                  </span>
                </div>

                <div className="text-[10px] font-semibold text-indigo-600 group-hover:text-indigo-800 flex items-center gap-1">
                  <span>Inspect Details</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Animation Status Bar if playing */}
        {animationStep > 0 && (
          <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-between text-xs animate-in fade-in">
            <div className="flex items-center space-x-2">
              <span className="font-mono font-bold text-indigo-700 bg-white px-2 py-0.5 rounded border border-indigo-200">
                Step {animationStep} / {steps.length}
              </span>
              <span className="text-indigo-950 font-medium">
                {steps[animationStep - 1].text}
              </span>
            </div>
            {animationStep === steps.length && (
              <span className="text-[10px] font-bold font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                Page Painted!
              </span>
            )}
          </div>
        )}

        {/* Active Component Deep-Dive Inspection Card */}
        <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <ActiveIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  {currentCompData.name}
                </h4>
                <span className="text-xs text-indigo-600 font-mono font-medium">
                  Architecture Role: {currentCompData.role}
                </span>
              </div>
            </div>
            <span className="text-[11px] font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">
              Interactive Component
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm pt-1">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Overview &amp; Purpose
              </span>
              <p className="text-slate-700 leading-relaxed">
                {currentCompData.summary}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Technical Execution
              </span>
              <p className="text-slate-600 leading-relaxed">
                {currentCompData.details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
