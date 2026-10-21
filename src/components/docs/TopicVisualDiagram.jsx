import React from 'react';
import { Eye, Layers, ShieldCheck, Network, Cpu, Server, Globe, Zap, Sparkles } from 'lucide-react';

export default function TopicVisualDiagram({ topicId, title, company }) {
  const getDiagramContent = () => {
    // 1. Packet Switching & Global Internet
    if (topicId?.includes('1.1') || topicId?.includes('1.2') || topicId?.includes('1.8')) {
      return (
        <div className="w-full">
          <svg viewBox="0 0 760 220" className="w-full h-auto font-mono text-[11px]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="760" height="220" rx="12" className="fill-zinc-100/60 dark:fill-zinc-900/60 stroke-zinc-200/80 dark:stroke-zinc-800/80" strokeWidth="1" />
            
            {/* Client Node */}
            <rect x="30" y="70" width="120" height="80" rx="8" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1.5" />
            <text x="90" y="100" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">Client Device</text>
            <text x="90" y="120" textAnchor="middle" className="fill-zinc-600 dark:fill-zinc-400 text-[10px]">Browser App</text>
            <circle cx="90" cy="55" r="4" className="fill-emerald-500" />
            <text x="90" y="45" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[9px] font-bold">192.168.1.100</text>

            {/* Path Arrows */}
            <path d="M150 110 L230 110" className="stroke-blue-500" strokeWidth="2" strokeDasharray="4 4" />
            <polygon points="230,106 238,110 230,114" className="fill-blue-500" />
            <text x="190" y="100" textAnchor="middle" className="fill-zinc-500 text-[9px]">IP Datagrams</text>

            {/* ISP Transit Edge */}
            <rect x="240" y="55" width="150" height="110" rx="8" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1.5" />
            <text x="315" y="85" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">Autonomous System</text>
            <text x="315" y="105" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[10px] font-bold">BGP Mesh Routers</text>
            <text x="315" y="125" textAnchor="middle" className="fill-zinc-600 dark:fill-zinc-400 text-[9px]">Packet Switching Detours</text>
            <text x="315" y="145" textAnchor="middle" className="fill-zinc-500 text-[8px] font-mono">AS 13335 (Tier-1)</text>

            {/* Path to Anycast Edge */}
            <path d="M390 110 L470 110" className="stroke-blue-500" strokeWidth="2" />
            <polygon points="470,106 478,110 470,114" className="fill-blue-500" />
            <text x="430" y="100" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[9px] font-bold">Latency: 2ms</text>

            {/* Cloudflare Edge PoP */}
            <rect x="480" y="45" width="140" height="130" rx="8" className="fill-white dark:fill-zinc-900 stroke-blue-500/80" strokeWidth="2" />
            <text x="550" y="75" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 font-bold text-xs">Edge PoP (Anycast)</text>
            <text x="550" y="95" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-[10px]">TLS 1.3 Terminated</text>
            <text x="550" y="115" textAnchor="middle" className="fill-zinc-500 text-[9px]">DDoS eBPF Shield</text>
            <text x="550" y="145" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[10px] font-bold">SSD Cache HIT (95%)</text>

            {/* Backbone to Origin */}
            <path d="M620 110 L670 110" className="stroke-zinc-400 dark:stroke-zinc-600" strokeWidth="1.5" strokeDasharray="3 3" />
            <polygon points="670,107 676,110 670,113" className="fill-zinc-400 dark:fill-zinc-600" />

            {/* Origin Server */}
            <rect x="680" y="75" width="70" height="70" rx="6" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1" />
            <text x="715" y="105" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-[10px]">Origin</text>
            <text x="715" y="125" textAnchor="middle" className="fill-zinc-500 text-[8px]">AWS US-East</text>
          </svg>
        </div>
      );
    }

    // 2. DOM Architecture & Rendering Engine
    if (topicId?.includes('2.5') || topicId?.includes('2.3') || topicId?.includes('1.5')) {
      return (
        <div className="w-full">
          <svg viewBox="0 0 760 210" className="w-full h-auto font-mono text-[11px]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="760" height="210" rx="12" className="fill-zinc-100/60 dark:fill-zinc-900/60 stroke-zinc-200/80 dark:stroke-zinc-800/80" strokeWidth="1" />

            {/* Document Root */}
            <rect x="40" y="85" width="90" height="40" rx="6" className="fill-white dark:fill-zinc-900 stroke-blue-500" strokeWidth="2" />
            <text x="85" y="110" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">#document</text>

            <path d="M130 105 L170 105" className="stroke-zinc-400 dark:stroke-zinc-600" strokeWidth="1.5" />

            {/* HTML node */}
            <rect x="170" y="85" width="80" height="40" rx="6" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1.5" />
            <text x="210" y="110" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">&lt;html&gt;</text>

            <path d="M250 95 L300 65" className="stroke-zinc-400 dark:stroke-zinc-600" strokeWidth="1.5" />
            <path d="M250 115 L300 145" className="stroke-zinc-400 dark:stroke-zinc-600" strokeWidth="1.5" />

            {/* Head Node */}
            <rect x="300" y="45" width="80" height="35" rx="6" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1" />
            <text x="340" y="68" textAnchor="middle" className="fill-zinc-500 text-xs">&lt;head&gt;</text>

            {/* Body Node */}
            <rect x="300" y="130" width="80" height="35" rx="6" className="fill-white dark:fill-zinc-900 stroke-emerald-500" strokeWidth="2" />
            <text x="340" y="152" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-xs">&lt;body&gt;</text>

            {/* Children of Body */}
            <path d="M380 140 L430 115" className="stroke-zinc-400 dark:stroke-zinc-600" strokeWidth="1.5" />
            <path d="M380 155 L430 175" className="stroke-zinc-400 dark:stroke-zinc-600" strokeWidth="1.5" />

            <rect x="430" y="95" width="90" height="35" rx="6" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1" />
            <text x="475" y="117" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-xs">&lt;main id="app"&gt;</text>

            <rect x="430" y="160" width="90" height="35" rx="6" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1" />
            <text x="475" y="182" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-xs">&lt;footer&gt;</text>

            {/* Mutation Flow */}
            <path d="M520 112 L590 112" className="stroke-amber-500" strokeWidth="2" strokeDasharray="4 2" />
            <polygon points="590,108 598,112 590,116" className="fill-amber-500" />
            <text x="555" y="102" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[9px] font-bold">MutationObserver</text>

            {/* Render Box */}
            <rect x="600" y="60" width="140" height="105" rx="8" className="fill-white dark:fill-zinc-900 stroke-amber-500" strokeWidth="2" />
            <text x="670" y="85" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 font-bold text-xs">Render Tree Diff</text>
            <text x="670" y="105" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-[10px]">Layout (Reflow)</text>
            <text x="670" y="125" textAnchor="middle" className="fill-zinc-500 text-[9px]">Paint (Rasterize)</text>
            <text x="670" y="145" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[9px] font-bold">GPU Compositing</text>
          </svg>
        </div>
      );
    }

    // 3. SOAP Protocol Envelope Architecture
    if (topicId?.includes('3.4') || topicId?.includes('3.5') || topicId?.includes('3.1')) {
      return (
        <div className="w-full">
          <svg viewBox="0 0 760 210" className="w-full h-auto font-mono text-[11px]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="760" height="210" rx="12" className="fill-zinc-100/60 dark:fill-zinc-900/60 stroke-zinc-200/80 dark:stroke-zinc-800/80" strokeWidth="1" />

            {/* Outer SOAP Envelope */}
            <rect x="40" y="25" width="460" height="165" rx="8" className="fill-white dark:fill-zinc-900 stroke-blue-500" strokeWidth="2" />
            <text x="55" y="45" className="fill-blue-600 dark:fill-blue-400 font-bold text-xs">&lt;soap:Envelope xmlns:soap="..."&gt;</text>

            {/* Header Box */}
            <rect x="60" y="55" width="420" height="40" rx="6" className="fill-zinc-50 dark:fill-zinc-950 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1" />
            <text x="75" y="80" className="fill-zinc-500 text-xs">&lt;soap:Header&gt; [WS-Security Tokens, Transaction IDs] &lt;/soap:Header&gt;</text>

            {/* Body Box */}
            <rect x="60" y="105" width="420" height="70" rx="6" className="fill-zinc-50 dark:fill-zinc-950 stroke-emerald-500" strokeWidth="1.5" />
            <text x="75" y="125" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-xs">&lt;soap:Body&gt;</text>
            <text x="95" y="145" className="fill-zinc-800 dark:fill-zinc-200 text-[11px]">&lt;m:GetStockPriceRequest&gt;&lt;symbol&gt;AAPL&lt;/symbol&gt;&lt;/m:GetStockPriceRequest&gt;</text>
            <text x="75" y="165" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-xs">&lt;/soap:Body&gt;</text>

            {/* Transport Flow */}
            <path d="M500 110 L560 110" className="stroke-blue-500" strokeWidth="2" />
            <polygon points="560,106 568,110 560,114" className="fill-blue-500" />
            <text x="530" y="100" textAnchor="middle" className="fill-zinc-500 text-[9px]">HTTP POST</text>

            {/* Enterprise Service */}
            <rect x="570" y="45" width="160" height="130" rx="8" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1.5" />
            <text x="650" y="75" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">JAX-WS / Axis2</text>
            <text x="650" y="98" textAnchor="middle" className="fill-zinc-500 text-[10px]">WSDL Contract Validated</text>
            <text x="650" y="120" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[10px] font-bold">XML Schema Check</text>
            <text x="650" y="145" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[10px] font-bold">Enterprise DB</text>
          </svg>
        </div>
      );
    }

    // 4. Two-Stage Recommender Systems
    if (topicId?.includes('4.9') || topicId?.includes('4.8')) {
      return (
        <div className="w-full">
          <svg viewBox="0 0 760 210" className="w-full h-auto font-mono text-[11px]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="760" height="210" rx="12" className="fill-zinc-100/60 dark:fill-zinc-900/60 stroke-zinc-200/80 dark:stroke-zinc-800/80" strokeWidth="1" />

            <rect x="30" y="40" width="130" height="130" rx="8" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1.5" />
            <text x="95" y="75" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">Entire Catalog</text>
            <text x="95" y="100" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 font-bold text-sm">50,000,000</text>
            <text x="95" y="120" textAnchor="middle" className="fill-zinc-500 text-[10px]">Movies / Products</text>

            <path d="M160 105 L210 105" className="stroke-blue-500" strokeWidth="2" />
            <polygon points="210,101 218,105 210,109" className="fill-blue-500" />

            <rect x="220" y="55" width="150" height="100" rx="8" className="fill-white dark:fill-zinc-900 stroke-blue-500" strokeWidth="1.5" />
            <text x="295" y="80" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 font-bold text-xs">Stage 1: Candidates</text>
            <text x="295" y="100" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 font-bold text-sm">Top 1,000 Items</text>
            <text x="295" y="120" textAnchor="middle" className="fill-zinc-500 text-[10px]">HNSW Vector ANN (15ms)</text>

            <path d="M370 105 L420 105" className="stroke-blue-500" strokeWidth="2" />
            <polygon points="420,101 428,105 420,109" className="fill-blue-500" />

            <rect x="430" y="55" width="150" height="100" rx="8" className="fill-white dark:fill-zinc-900 stroke-amber-500" strokeWidth="1.5" />
            <text x="505" y="80" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 font-bold text-xs">Stage 2: Heavy Rank</text>
            <text x="505" y="100" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-sm">Top 100 Scored</text>
            <text x="505" y="120" textAnchor="middle" className="fill-zinc-500 text-[10px]">Deep Neural Net (GBDT)</text>

            <path d="M580 105 L630 105" className="stroke-blue-500" strokeWidth="2" />
            <polygon points="630,101 638,105 630,109" className="fill-blue-500" />

            <rect x="640" y="65" width="95" height="80" rx="8" className="fill-white dark:fill-zinc-900 stroke-emerald-500" strokeWidth="2" />
            <text x="687" y="95" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-xs">User UI</text>
            <text x="687" y="115" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">Top 10 Row</text>
            <text x="687" y="130" textAnchor="middle" className="fill-zinc-500 text-[8px]">Personalized</text>
          </svg>
        </div>
      );
    }

    // 5. WebGPU / On-Device AI Inference
    if (topicId?.includes('5.2') || topicId?.includes('5.1')) {
      return (
        <div className="w-full">
          <svg viewBox="0 0 760 210" className="w-full h-auto font-mono text-[11px]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="760" height="210" rx="12" className="fill-zinc-100/60 dark:fill-zinc-900/60 stroke-zinc-200/80 dark:stroke-zinc-800/80" strokeWidth="1" />

            <rect x="40" y="60" width="130" height="90" rx="8" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1.5" />
            <text x="105" y="95" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">Web Browser UI</text>
            <text x="105" y="115" textAnchor="middle" className="fill-zinc-500 text-[10px]">Transformers.js</text>

            <path d="M170 105 L230 105" className="stroke-blue-500" strokeWidth="2" />
            <polygon points="230,101 238,105 230,109" className="fill-blue-500" />

            <rect x="240" y="45" width="180" height="120" rx="8" className="fill-white dark:fill-zinc-900 stroke-blue-500" strokeWidth="1.5" />
            <text x="330" y="75" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 font-bold text-xs">W3C WebGPU Runtime</text>
            <text x="330" y="98" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-[10px]">WGSL Compute Shaders</text>
            <text x="330" y="118" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[10px] font-bold">Storage Buffers & BindGroups</text>
            <text x="330" y="140" textAnchor="middle" className="fill-zinc-500 text-[9px]">Zero Cloud Server Cost</text>

            <path d="M420 105 L480 105" className="stroke-blue-500" strokeWidth="2" />
            <polygon points="480,101 488,105 480,109" className="fill-blue-500" />

            <rect x="490" y="35" width="230" height="140" rx="8" className="fill-white dark:fill-zinc-900 stroke-emerald-500" strokeWidth="2" />
            <text x="605" y="65" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-sm">Physical Hardware GPU</text>
            <text x="605" y="90" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-[11px]">Direct3D 12 / Metal / Vulkan</text>
            <text x="605" y="115" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 font-bold text-[10px]">Parallel Matrix Math (Tensors)</text>
            <text x="605" y="140" textAnchor="middle" className="fill-zinc-500 text-[9px]">Inference Latency: &lt; 20ms</text>
          </svg>
        </div>
      );
    }

    // Default: TLS 1.3 Handshake & Cryptography
    return (
      <div className="w-full">
        <svg viewBox="0 0 760 210" className="w-full h-auto font-mono text-[11px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="760" height="210" rx="12" className="fill-zinc-100/60 dark:fill-zinc-900/60 stroke-zinc-200/80 dark:stroke-zinc-800/80" strokeWidth="1" />

          <rect x="50" y="35" width="140" height="140" rx="8" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1.5" />
          <text x="120" y="65" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">Client Web Browser</text>
          <text x="120" y="90" textAnchor="middle" className="fill-zinc-500 text-[10px]">Client Key Share</text>
          <text x="120" y="115" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[10px] font-bold">X25519 Elliptic Curve</text>
          <text x="120" y="145" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[9px]">Verifies X.509 Cert</text>

          <path d="M190 75 L560 75" className="stroke-blue-500" strokeWidth="2" />
          <polygon points="560,71 568,75 560,79" className="fill-blue-500" />
          <text x="375" y="68" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[10px] font-bold">ClientHello + KeyShare (1-RTT)</text>

          <path d="M560 120 L190 120" className="stroke-emerald-500" strokeWidth="2" />
          <polygon points="198,116 190,120 198,124" className="fill-emerald-500" />
          <text x="375" y="113" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[10px] font-bold">ServerHello + Cert + Finished</text>

          <path d="M190 155 L560 155" className="stroke-amber-500" strokeWidth="2" strokeDasharray="4 2" />
          <polygon points="560,151 568,155 560,159" className="fill-amber-500" />
          <text x="375" y="150" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[9px] font-bold">AES-256-GCM Encrypted Application Data</text>

          <rect x="570" y="35" width="140" height="140" rx="8" className="fill-white dark:fill-zinc-900 stroke-blue-500" strokeWidth="2" />
          <text x="640" y="65" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">Production Server</text>
          <text x="640" y="90" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[10px] font-bold">TLS 1.3 Gateway</text>
          <text x="640" y="115" textAnchor="middle" className="fill-zinc-500 text-[10px]">Strict-Transport-Security</text>
          <text x="640" y="145" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[9px]">PFS: Forward Secrecy</text>
        </svg>
      </div>
    );
  };

  return (
    <div className="my-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/50 overflow-hidden shadow-sm">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/60 dark:bg-zinc-900/80 text-xs font-mono">
        <span className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-semibold">
          <Eye className="w-3.5 h-3.5 text-doc-accent" />
          <span>Real-Life System Architecture Diagram</span>
        </span>
        {company && (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400">
            Case: {company}
          </span>
        )}
      </div>

      <div className="p-4 sm:p-5 flex justify-center items-center overflow-x-auto">
        {getDiagramContent()}
      </div>
    </div>
  );
}
