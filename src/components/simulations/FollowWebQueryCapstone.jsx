import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw, 
  Play, 
  Layers, 
  Server, 
  Laptop, 
  FileCode, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FollowWebQueryCapstone() {
  const [url, setUrl] = useState('https://example.com');
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const pipeline = [
    {
      step: 1,
      title: '1. User Enters URL',
      actor: 'Human & Omnibox',
      icon: Globe,
      desc: 'The user enters "https://example.com" in the address bar and hits Enter. The browser checks HSTS (HTTP Strict Transport Security) to force HTTPS and parses the domain.',
      tech: 'RFC 3986 URI parsing: Scheme=https, Host=example.com, Port=443, Path=/',
      topicLink: '/topic/world-wide-web',
      topicName: 'World Wide Web Foundations'
    },
    {
      step: 2,
      title: '2. Browser Checks Local Caches',
      actor: 'Client Browser & OS',
      icon: Laptop,
      desc: 'The browser inspects its internal memory DNS cache, followed by OS socket getaddrinfo() which checks the local hosts file.',
      tech: 'chrome://net-internals/#dns lookup; TTL check on previous resolves',
      topicLink: '/topic/dns-resolution',
      topicName: 'DNS Resolution'
    },
    {
      step: 3,
      title: '3. Hierarchical DNS Resolution',
      actor: 'Resolver & Nameservers',
      icon: Layers,
      desc: 'Recursive resolver queries Root (.) -> TLD (.com) -> Authoritative server (ns1.example.com) to retrieve the 32-bit IPv4 address.',
      tech: 'UDP Port 53 query: Resolves example.com -> 93.184.216.34 (A Record)',
      topicLink: '/topic/dns-resolution',
      topicName: 'DNS Resolution'
    },
    {
      step: 4,
      title: '4. TCP Handshake & TLS 1.3 Encryption',
      actor: 'Client & Server Socket',
      icon: Server,
      desc: 'Browser establishes reliable transport via TCP SYN -> SYN-ACK -> ACK. TLS 1.3 performs Diffie-Hellman key exchange and verifies the X.509 certificate.',
      tech: 'TCP 3-Way Handshake + TLS 1.3 ClientHello / ServerHello exchange on Port 443',
      topicLink: '/topic/http-lifecycle',
      topicName: 'HTTP & Client-Server Lifecycle'
    },
    {
      step: 5,
      title: '5. HTTP GET Request Dispatched',
      actor: 'Client HTTP Engine',
      icon: ArrowRight,
      desc: 'The browser formulates the application-layer request: `GET / HTTP/1.1` with Host: example.com, User-Agent, and Accept headers.',
      tech: 'Wire payload emitted across the encrypted TCP socket',
      topicLink: '/topic/http-lifecycle',
      topicName: 'HTTP Protocols'
    },
    {
      step: 6,
      title: '6. Web Server Reads Disk & Emits HTTP 200',
      actor: 'Web Server (Nginx)',
      icon: Server,
      desc: 'Server receives the request on port 443, matches the route, reads `/var/www/html/index.html` from disk, and sets `Content-Type: text/html`.',
      tech: 'Response Line: HTTP/1.1 200 OK with ETag, Cache-Control, and HTML body',
      topicLink: '/topic/web-servers',
      topicName: 'Web Servers Architecture'
    },
    {
      step: 7,
      title: '7. HTML Tokenization & DOM Tree Building',
      actor: 'Browser HTML Parser',
      icon: FileCode,
      desc: 'Browser converts received network bytes into characters -> tokens -> Element nodes, assembling the Document Object Model (DOM) tree.',
      tech: 'Speculative pre-parser scans for external CSS `<link>` and `<script>` sub-resources',
      topicLink: '/topic/html-foundations',
      topicName: 'HTML5 Foundations'
    },
    {
      step: 8,
      title: '8. Layout Reflow, GPU Paint & Interaction',
      actor: 'Browser Rendering Engine',
      icon: Sparkles,
      desc: 'DOM merges with CSSOM to form the Render Tree. The browser calculates exact layout geometry, paints pixels, and the webpage becomes interactive!',
      tech: 'Time-to-Interactive (TTI) reached; DOMContentLoaded and Load events fired',
      topicLink: '/topic/web-browsers',
      topicName: 'Browser Rendering Pipeline'
    }
  ];

  const handleStart = () => {
    setIsAutoPlaying(true);
    runPipelineStep(1);
  };

  const runPipelineStep = (stepNumber) => {
    setActiveStep(stepNumber);
    if (stepNumber < pipeline.length) {
      setTimeout(() => {
        runPipelineStep(stepNumber + 1);
      }, 1500);
    } else {
      setIsAutoPlaying(false);
      try {
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.7 }
        });
      } catch (e) {}
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setIsAutoPlaying(false);
  };

  const activeStageData = activeStep > 0 ? pipeline[activeStep - 1] : pipeline[0];
  const StepIcon = activeStageData.icon;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card overflow-hidden space-y-6">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-gradient-to-r from-indigo-50/70 via-blue-50/50 to-white flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-base font-extrabold text-slate-900">Unit 1 Capstone: Follow a Web Request</h3>
              <span className="text-[10px] font-mono font-bold bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full">
                Full 8-Phase Odyssey
              </span>
            </div>
            <p className="text-xs text-slate-500">Trace an end-to-end web transaction from keystroke to rendered DOM pixels</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleStart}
            disabled={isAutoPlaying}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold shadow-card transition-all"
          >
            <Play className="w-3.5 h-3.5" />
            <span>{activeStep > 0 ? 'Replay Web Request' : 'Trace Web Request'}</span>
          </button>
          <button
            onClick={handleReset}
            className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-500"
            title="Reset"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Simulated Omnibox Address Bar */}
      <div className="px-6">
        <div className="max-w-2xl mx-auto flex items-center bg-slate-100/80 rounded-xl border border-slate-200 p-2 space-x-3 shadow-inner">
          <Globe className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full bg-transparent text-xs font-mono font-semibold text-slate-800 focus:outline-none"
            placeholder="https://example.com"
          />
          <button
            onClick={handleStart}
            className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shrink-0 transition-colors"
          >
            Go
          </button>
        </div>
      </div>

      {/* 8-Stage Progress Stepper */}
      <div className="px-6 overflow-x-auto pb-2">
        <div className="flex items-center space-x-1 min-w-[800px] sm:min-w-0">
          {pipeline.map((p, idx) => {
            const isCurrent = activeStep === p.step;
            const isDone = activeStep > p.step;

            return (
              <React.Fragment key={p.step}>
                <button
                  onClick={() => { setActiveStep(p.step); setIsAutoPlaying(false); }}
                  className={`flex-1 flex flex-col items-center p-2 rounded-xl text-center transition-all ${
                    isCurrent
                      ? 'bg-indigo-50 border border-indigo-200 shadow-2xs ring-2 ring-indigo-200'
                      : isDone
                      ? 'bg-emerald-50/60 border border-emerald-200'
                      : 'hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold mb-1 transition-all ${
                    isCurrent
                      ? 'bg-indigo-600 text-white scale-110 shadow-sm'
                      : isDone
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}>
                    {isDone ? '✓' : p.step}
                  </div>
                  <span className={`text-[10px] font-bold truncate max-w-[85px] ${
                    isCurrent ? 'text-indigo-900' : isDone ? 'text-emerald-800' : 'text-slate-500'
                  }`}>
                    {p.actor}
                  </span>
                </button>
                {idx < pipeline.length - 1 && (
                  <span className="text-slate-300 text-xs px-0.5">&rarr;</span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Active Phase Deep-Dive Card */}
      <div className="px-6 pb-6 space-y-4">
        <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/90 shadow-2xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/70 pb-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                <StepIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">{activeStageData.title}</h4>
                <span className="text-xs font-mono text-indigo-700 font-semibold">Actor: {activeStageData.actor}</span>
              </div>
            </div>

            <Link
              to={activeStageData.topicLink}
              className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-indigo-200 hover:text-indigo-600 text-xs font-semibold text-slate-700 transition-colors shadow-2xs"
            >
              <span>Study "{activeStageData.topicName}"</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {activeStageData.desc}
          </p>

          <div className="p-3 bg-slate-900 rounded-xl text-slate-200 font-mono text-xs border border-slate-800">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 block pb-1 border-b border-slate-800 mb-1">
              Low-Level Protocol Activity
            </span>
            <span className="text-emerald-400">&gt; {activeStageData.tech}</span>
          </div>
        </div>

        {/* Capstone Completion Box */}
        {activeStep === 8 && (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs text-emerald-950 font-medium">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                <strong>Congratulations!</strong> You have traversed all 8 layers of the Web Request Odyssey! You understand DNS, TCP/TLS, HTTP wire exchanges, server disk I/O, HTML tokenization, and DOM paint rendering.
              </span>
            </div>
            <Link
              to="/quiz"
              className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-700 shrink-0 ml-3 transition-colors"
            >
              Take Unit 1 Diagnostic Quiz &rarr;
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
