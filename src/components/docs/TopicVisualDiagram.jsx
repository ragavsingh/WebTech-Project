import React from 'react';
import { Eye, Layers, ShieldCheck, Network, Cpu, Server, Globe, Zap, Sparkles } from 'lucide-react';

export default function TopicVisualDiagram({ topicId, title, company }) {
  const getDiagramContent = () => {
    // 1. Packet Switching & Global Internet
    if (topicId?.includes('1.1') || topicId?.includes('1.2')) {
      return (
        <div className="w-full">
          <svg viewBox="0 0 780 220" className="w-full h-auto font-mono text-[11px]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="780" height="220" rx="12" className="fill-zinc-100/60 dark:fill-zinc-900/60 stroke-zinc-200/80 dark:stroke-zinc-800/80" strokeWidth="1" />
            
            {/* Client Node */}
            <rect x="25" y="65" width="125" height="85" rx="8" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1.5" />
            <text x="87" y="98" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">Client Device</text>
            <text x="87" y="118" textAnchor="middle" className="fill-zinc-600 dark:fill-zinc-400 text-[10px]">Browser App</text>
            <circle cx="87" cy="52" r="4" className="fill-emerald-500" />
            <text x="87" y="42" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[9px] font-bold">192.168.1.100</text>

            {/* Path Arrows */}
            <path d="M150 107 L220 107" className="stroke-blue-500" strokeWidth="2" strokeDasharray="4 4" />
            <polygon points="220,103 228,107 220,111" className="fill-blue-500" />
            <text x="185" y="97" textAnchor="middle" className="fill-zinc-500 text-[9px]">IP Packets</text>

            {/* ISP Transit Edge */}
            <rect x="230" y="55" width="165" height="110" rx="8" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1.5" />
            <text x="312" y="85" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">Autonomous System</text>
            <text x="312" y="105" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[10px] font-bold">BGP Mesh Routers</text>
            <text x="312" y="125" textAnchor="middle" className="fill-zinc-600 dark:fill-zinc-400 text-[9px]">Dynamic Hop Detours</text>
            <text x="312" y="145" textAnchor="middle" className="fill-zinc-500 text-[8px] font-mono">AS 13335 (Tier-1)</text>

            {/* Path to Anycast Edge */}
            <path d="M395 107 L465 107" className="stroke-blue-500" strokeWidth="2" />
            <polygon points="465,103 473,107 465,111" className="fill-blue-500" />
            <text x="430" y="97" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[9px] font-bold">Latency: 2ms</text>

            {/* Cloudflare Edge PoP */}
            <rect x="475" y="45" width="155" height="130" rx="8" className="fill-white dark:fill-zinc-900 stroke-blue-500/80" strokeWidth="2" />
            <text x="552" y="75" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 font-bold text-xs">Edge PoP (Anycast)</text>
            <text x="552" y="95" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-[10px]">TLS 1.3 Terminated</text>
            <text x="552" y="115" textAnchor="middle" className="fill-zinc-500 text-[9px]">DDoS eBPF Shield</text>
            <text x="552" y="145" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[10px] font-bold">SSD Cache HIT (95%)</text>

            {/* Backbone to Origin */}
            <path d="M630 107 L680 107" className="stroke-zinc-400 dark:stroke-zinc-600" strokeWidth="1.5" strokeDasharray="3 3" />
            <polygon points="680,104 686,107 680,110" className="fill-zinc-400 dark:fill-zinc-600" />

            {/* Origin Server */}
            <rect x="690" y="70" width="75" height="75" rx="6" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1" />
            <text x="727" y="102" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-[10px]">Origin</text>
            <text x="727" y="122" textAnchor="middle" className="fill-zinc-500 text-[8px]">AWS US-East</text>
          </svg>
        </div>
      );
    }

    // 2. HTTP Protocol Multiplexing & Wire Lifecycle
    if (topicId?.includes('1.3')) {
      return (
        <div className="w-full">
          <svg viewBox="0 0 820 220" className="w-full h-auto font-mono text-[11px]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="820" height="220" rx="12" className="fill-zinc-100/60 dark:fill-zinc-900/60 stroke-zinc-200/80 dark:stroke-zinc-800/80" strokeWidth="1" />
            
            <rect x="25" y="55" width="135" height="110" rx="8" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1.5" />
            <text x="92" y="90" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">Client Browser</text>
            <text x="92" y="110" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[10px] font-bold">HTTP/2 - HTTP/3</text>
            <text x="92" y="130" textAnchor="middle" className="fill-zinc-500 text-[9px]">Single TCP / UDP Pipe</text>

            <rect x="195" y="40" width="410" height="140" rx="8" className="fill-white dark:fill-zinc-900 stroke-blue-500/80" strokeWidth="1.5" />
            <text x="400" y="65" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 font-bold text-xs">Multiplexed Bidirectional Binary Streams (No Head-of-Line Blocking)</text>

            {/* Stream 1 */}
            <path d="M215 90 L585 90" className="stroke-emerald-500" strokeWidth="2" />
            <polygon points="585,87 593,90 585,93" className="fill-emerald-500" />
            <text x="240" y="84" className="fill-emerald-600 dark:fill-emerald-400 text-[9px] font-bold">Stream 1: GET /index.html [HTML Document Frame]</text>

            {/* Stream 2 */}
            <path d="M215 120 L585 120" className="stroke-amber-500" strokeWidth="2" />
            <polygon points="585,117 593,120 585,123" className="fill-amber-500" />
            <text x="240" y="114" className="fill-amber-600 dark:fill-amber-400 text-[9px] font-bold">Stream 3: GET /styles.css [CSSOM Frame (High Priority)]</text>

            {/* Stream 3 */}
            <path d="M215 150 L585 150" className="stroke-purple-500" strokeWidth="2" strokeDasharray="4 2" />
            <polygon points="585,147 593,150 585,153" className="fill-purple-500" />
            <text x="240" y="144" className="fill-purple-600 dark:fill-purple-400 text-[9px] font-bold">Stream 5: GET /avatar.webp [Binary Image Chunks]</text>

            <rect x="635" y="55" width="160" height="110" rx="8" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1.5" />
            <text x="715" y="90" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">Reverse Proxy</text>
            <text x="715" y="110" textAnchor="middle" className="fill-zinc-700 dark:fill-zinc-300 text-[10px] font-semibold">NGINX / Envoy</text>
            <text x="715" y="130" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[9px] font-bold">HPACK Decompress</text>
          </svg>
        </div>
      );
    }

    // 3. DNS Hierarchical Resolution Pipeline
    if (topicId?.includes('1.4')) {
      return (
        <div className="w-full">
          <svg viewBox="0 0 820 220" className="w-full h-auto font-mono text-[11px]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="820" height="220" rx="12" className="fill-zinc-100/60 dark:fill-zinc-900/60 stroke-zinc-200/80 dark:stroke-zinc-800/80" strokeWidth="1" />
            
            <rect x="25" y="65" width="125" height="90" rx="8" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1.5" />
            <text x="87" y="98" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">Client Resolver</text>
            <text x="87" y="118" textAnchor="middle" className="fill-zinc-500 text-[10px]">OS Stub Resolver</text>
            <text x="87" y="136" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[9px]">Query: example.com</text>

            <path d="M150 110 L210 110" className="stroke-blue-500" strokeWidth="2" />
            <polygon points="210,106 218,110 210,114" className="fill-blue-500" />

            <rect x="220" y="50" width="165" height="120" rx="8" className="fill-white dark:fill-zinc-900 stroke-blue-500" strokeWidth="2" />
            <text x="302" y="80" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 font-bold text-xs">Recursive Resolver</text>
            <text x="302" y="100" textAnchor="middle" className="fill-zinc-600 dark:fill-zinc-400 text-[10px]">Cloudflare (1.1.1.1)</text>
            <text x="302" y="120" textAnchor="middle" className="fill-zinc-500 text-[9px]">or Google (8.8.8.8)</text>
            <text x="302" y="145" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[10px] font-bold">Local Cache Check</text>

            {/* Tree branches */}
            <path d="M385 85 L445 55" className="stroke-zinc-400" strokeWidth="1.5" />
            <path d="M385 110 L445 110" className="stroke-zinc-400" strokeWidth="1.5" />
            <path d="M385 135 L445 165" className="stroke-zinc-400" strokeWidth="1.5" />

            {/* Root */}
            <rect x="445" y="35" width="160" height="40" rx="6" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1" />
            <text x="525" y="60" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-[10px] font-bold">1. Root Servers (13 Clusters)</text>

            {/* TLD */}
            <rect x="445" y="90" width="160" height="40" rx="6" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1" />
            <text x="525" y="115" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-[10px] font-bold">2. TLD Nameservers (.com)</text>

            {/* Authoritative */}
            <rect x="445" y="145" width="160" height="40" rx="6" className="fill-white dark:fill-zinc-900 stroke-emerald-500" strokeWidth="1.5" />
            <text x="525" y="170" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[10px] font-bold">3. Authoritative (NS record)</text>

            <path d="M605 165 L665 165" className="stroke-emerald-500" strokeWidth="2" strokeDasharray="3 3" />
            <polygon points="665,162 673,165 665,168" className="fill-emerald-500" />

            <rect x="675" y="65" width="125" height="90" rx="8" className="fill-white dark:fill-zinc-900 stroke-emerald-500" strokeWidth="2" />
            <text x="737" y="95" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">Resolved IP</text>
            <text x="737" y="118" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-[11px]">93.184.216.34</text>
            <text x="737" y="136" textAnchor="middle" className="fill-zinc-500 text-[8px]">TTL: 3600s Cached</text>
          </svg>
        </div>
      );
    }

    // 4. DOM Architecture & Rendering Engine
    if (topicId?.includes('2.5') || topicId?.includes('2.3') || topicId?.includes('1.5')) {
      return (
        <div className="w-full">
          <svg viewBox="0 0 860 220" className="w-full h-auto font-mono text-[11px]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="860" height="220" rx="12" className="fill-zinc-100/60 dark:fill-zinc-900/60 stroke-zinc-200/80 dark:stroke-zinc-800/80" strokeWidth="1" />

            {/* Document Root */}
            <rect x="25" y="85" width="95" height="40" rx="6" className="fill-white dark:fill-zinc-900 stroke-blue-500" strokeWidth="2" />
            <text x="72" y="110" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">#document</text>

            <path d="M120 105 L150 105" className="stroke-zinc-400 dark:stroke-zinc-600" strokeWidth="1.5" />

            {/* HTML node */}
            <rect x="150" y="85" width="85" height="40" rx="6" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1.5" />
            <text x="192" y="110" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">&lt;html&gt;</text>

            {/* Branch to Head and Body */}
            <path d="M235 95 L270 65" className="stroke-zinc-400 dark:stroke-zinc-600" strokeWidth="1.5" />
            <path d="M235 115 L270 145" className="stroke-zinc-400 dark:stroke-zinc-600" strokeWidth="1.5" />

            {/* Head Node */}
            <rect x="270" y="45" width="75" height="35" rx="6" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1" />
            <text x="307" y="68" textAnchor="middle" className="fill-zinc-500 text-xs">&lt;head&gt;</text>

            {/* Body Node */}
            <rect x="270" y="130" width="80" height="35" rx="6" className="fill-white dark:fill-zinc-900 stroke-emerald-500" strokeWidth="2" />
            <text x="310" y="152" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-xs">&lt;body&gt;</text>

            {/* Children of Body: Main and Footer */}
            <path d="M350 140 L385 112" className="stroke-zinc-400 dark:stroke-zinc-600" strokeWidth="1.5" />
            <path d="M350 155 L385 178" className="stroke-zinc-400 dark:stroke-zinc-600" strokeWidth="1.5" />

            {/* Main Node (Wide container ensuring text NEVER overflows) */}
            <rect x="385" y="92" width="120" height="38" rx="6" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1" />
            <text x="445" y="116" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-[11px] font-semibold">&lt;main id="app"&gt;</text>

            {/* Footer Node */}
            <rect x="385" y="160" width="95" height="35" rx="6" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1" />
            <text x="432" y="182" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-xs">&lt;footer&gt;</text>

            {/* Mutation Flow Arrow: Wide 140px gap with label positioned cleanly above */}
            <path d="M510 111 L640 111" className="stroke-amber-500" strokeWidth="2" strokeDasharray="4 2" />
            <polygon points="640,107 648,111 640,115" className="fill-amber-500" />
            <text x="575" y="97" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[10px] font-bold">MutationObserver</text>
            <text x="575" y="127" textAnchor="middle" className="fill-zinc-500 text-[8px]">Live DOM Trigger</text>

            {/* Render Box */}
            <rect x="655" y="45" width="180" height="135" rx="10" className="fill-white dark:fill-zinc-900 stroke-amber-500" strokeWidth="2" />
            <text x="745" y="75" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 font-bold text-xs">Render Tree Diff</text>
            <text x="745" y="98" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-[10px]">Layout (Reflow)</text>
            <text x="745" y="120" textAnchor="middle" className="fill-zinc-500 text-[9px]">Paint (Rasterize)</text>
            <text x="745" y="146" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[10px] font-bold">GPU Compositing</text>
          </svg>
        </div>
      );
    }

    // 5. CSS Box Model & Geometry Calculations
    if (topicId?.includes('2.6') || topicId?.includes('2.4')) {
      return (
        <div className="w-full">
          <svg viewBox="0 0 820 220" className="w-full h-auto font-mono text-[11px]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="820" height="220" rx="12" className="fill-zinc-100/60 dark:fill-zinc-900/60 stroke-zinc-200/80 dark:stroke-zinc-800/80" strokeWidth="1" />

            {/* Margin Box */}
            <rect x="40" y="25" width="460" height="170" rx="8" className="fill-amber-500/10 stroke-amber-500" strokeWidth="1.5" strokeDasharray="4 2" />
            <text x="55" y="45" className="fill-amber-600 dark:fill-amber-400 font-bold text-xs">Margin Box (Transparent Outset)</text>

            {/* Border Box */}
            <rect x="75" y="52" width="390" height="120" rx="6" className="fill-blue-500/10 stroke-blue-500" strokeWidth="2" />
            <text x="90" y="70" className="fill-blue-600 dark:fill-blue-400 font-bold text-[11px]">Border Box (1px solid)</text>

            {/* Padding Box */}
            <rect x="105" y="78" width="330" height="75" rx="4" className="fill-purple-500/10 stroke-purple-500" strokeWidth="1.5" />
            <text x="120" y="95" className="fill-purple-600 dark:fill-purple-400 font-bold text-[10px]">Padding Box (Internal Breathing Room)</text>

            {/* Content Box */}
            <rect x="135" y="103" width="270" height="36" rx="4" className="fill-emerald-500/20 stroke-emerald-500" strokeWidth="1.5" />
            <text x="270" y="125" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 font-bold text-xs">Content: width × height</text>

            {/* Formula Panel */}
            <rect x="535" y="40" width="255" height="140" rx="8" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1.5" />
            <text x="662" y="68" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">CSS Sizing Modes</text>
            <text x="555" y="95" className="fill-blue-600 dark:fill-blue-400 font-semibold text-[10px]">box-sizing: border-box (Modern)</text>
            <text x="555" y="112" className="fill-zinc-500 text-[9px]">Total = width (includes pad + border)</text>
            <text x="555" y="138" className="fill-amber-600 dark:fill-amber-400 font-semibold text-[10px]">box-sizing: content-box (W3C)</text>
            <text x="555" y="155" className="fill-zinc-500 text-[9px]">Total = width + pad + border + margin</text>
          </svg>
        </div>
      );
    }

    // 6. SOAP Protocol Envelope Architecture
    if (topicId?.includes('3.4') || topicId?.includes('3.5') || topicId?.includes('3.1')) {
      return (
        <div className="w-full">
          <svg viewBox="0 0 780 220" className="w-full h-auto font-mono text-[11px]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="780" height="220" rx="12" className="fill-zinc-100/60 dark:fill-zinc-900/60 stroke-zinc-200/80 dark:stroke-zinc-800/80" strokeWidth="1" />

            {/* Outer SOAP Envelope */}
            <rect x="30" y="25" width="460" height="170" rx="8" className="fill-white dark:fill-zinc-900 stroke-blue-500" strokeWidth="2" />
            <text x="45" y="45" className="fill-blue-600 dark:fill-blue-400 font-bold text-xs">&lt;soap:Envelope xmlns:soap="..."&gt;</text>

            {/* Header Box */}
            <rect x="50" y="55" width="420" height="40" rx="6" className="fill-zinc-50 dark:fill-zinc-950 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1" />
            <text x="65" y="80" className="fill-zinc-500 text-xs">&lt;soap:Header&gt; [WS-Security Tokens, Auth Headers] &lt;/soap:Header&gt;</text>

            {/* Body Box */}
            <rect x="50" y="105" width="420" height="75" rx="6" className="fill-zinc-50 dark:fill-zinc-950 stroke-emerald-500" strokeWidth="1.5" />
            <text x="65" y="125" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-xs">&lt;soap:Body&gt;</text>
            <text x="80" y="145" className="fill-zinc-800 dark:fill-zinc-200 text-[10px] font-semibold">&lt;m:GetStockQuote&gt;&lt;ticker&gt;AAPL&lt;/ticker&gt;&lt;/m:GetStockQuote&gt;</text>
            <text x="65" y="168" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-xs">&lt;/soap:Body&gt;</text>

            {/* Transport Flow */}
            <path d="M495 110 L565 110" className="stroke-blue-500" strokeWidth="2" />
            <polygon points="565,106 573,110 565,114" className="fill-blue-500" />
            <text x="530" y="100" textAnchor="middle" className="fill-zinc-500 text-[9px]">HTTP POST</text>

            {/* Enterprise Service */}
            <rect x="575" y="45" width="175" height="135" rx="8" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1.5" />
            <text x="662" y="75" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">JAX-WS / Axis2</text>
            <text x="662" y="98" textAnchor="middle" className="fill-zinc-500 text-[10px]">WSDL Validated</text>
            <text x="662" y="120" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[10px] font-bold">XML Schema Check</text>
            <text x="662" y="145" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[10px] font-bold">Enterprise DB</text>
          </svg>
        </div>
      );
    }

    // 7. Search Engine Web Crawling & Inverted Index Pipeline
    if (topicId?.includes('4.1') || topicId?.includes('4.2')) {
      return (
        <div className="w-full">
          <svg viewBox="0 0 840 220" className="w-full h-auto font-mono text-[11px]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="840" height="220" rx="12" className="fill-zinc-100/60 dark:fill-zinc-900/60 stroke-zinc-200/80 dark:stroke-zinc-800/80" strokeWidth="1" />

            <rect x="25" y="60" width="135" height="100" rx="8" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1.5" />
            <text x="92" y="95" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">URL Frontier</text>
            <text x="92" y="115" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 font-semibold text-[10px]">Priority Seed Queue</text>
            <text x="92" y="135" textAnchor="middle" className="fill-zinc-500 text-[8px]">Robots.txt & Politeness</text>

            <path d="M160 110 L215 110" className="stroke-blue-500" strokeWidth="2" />
            <polygon points="215,106 223,110 215,114" className="fill-blue-500" />

            <rect x="225" y="50" width="165" height="120" rx="8" className="fill-white dark:fill-zinc-900 stroke-blue-500" strokeWidth="1.5" />
            <text x="307" y="80" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 font-bold text-xs">Crawler Spiders</text>
            <text x="307" y="100" textAnchor="middle" className="fill-zinc-700 dark:fill-zinc-300 text-[10px]">Headless Chromium</text>
            <text x="307" y="120" textAnchor="middle" className="fill-zinc-500 text-[9px]">HTML / JS Hydration</text>
            <text x="307" y="145" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[10px] font-bold">Extract Links & Words</text>

            <path d="M390 110 L445 110" className="stroke-blue-500" strokeWidth="2" />
            <polygon points="445,106 453,110 445,114" className="fill-blue-500" />

            <rect x="455" y="50" width="165" height="120" rx="8" className="fill-white dark:fill-zinc-900 stroke-amber-500" strokeWidth="1.5" />
            <text x="537" y="80" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 font-bold text-xs">Document Indexer</text>
            <text x="537" y="100" textAnchor="middle" className="fill-zinc-700 dark:fill-zinc-300 text-[10px]">Tokenize & Stemming</text>
            <text x="537" y="120" textAnchor="middle" className="fill-zinc-500 text-[9px]">PageRank Calculation</text>
            <text x="537" y="145" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[10px] font-bold">BM25 Term Weighting</text>

            <path d="M620 110 L670 110" className="stroke-blue-500" strokeWidth="2" />
            <polygon points="670,106 678,110 670,114" className="fill-blue-500" />

            <rect x="680" y="55" width="135" height="110" rx="8" className="fill-white dark:fill-zinc-900 stroke-emerald-500" strokeWidth="2" />
            <text x="747" y="85" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-xs">Inverted Index</text>
            <text x="747" y="105" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-[10px] font-mono">term -&gt; [docIDs]</text>
            <text x="747" y="125" textAnchor="middle" className="fill-zinc-500 text-[8px]">Shard Cluster</text>
            <text x="747" y="145" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[9px] font-bold">Query: &lt; 30ms</text>
          </svg>
        </div>
      );
    }

    // 8. Social Platforms, Wikipedia Revisions & Event Stream Fan-Out (Directly matches Topic 4.3!)
    if (topicId?.includes('4.3') || topicId?.includes('4.4')) {
      return (
        <div className="w-full">
          <svg viewBox="0 0 860 220" className="w-full h-auto font-mono text-[11px]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="860" height="220" rx="12" className="fill-zinc-100/60 dark:fill-zinc-900/60 stroke-zinc-200/80 dark:stroke-zinc-800/80" strokeWidth="1" />

            {/* Client Write */}
            <rect x="25" y="65" width="125" height="85" rx="8" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1.5" />
            <text x="87" y="98" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">Client Action</text>
            <text x="87" y="118" textAnchor="middle" className="fill-zinc-500 text-[10px]">Wiki Edit / Post</text>
            <text x="87" y="136" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 font-bold text-[9px]">POST /revisions</text>

            <path d="M150 107 L210 107" className="stroke-blue-500" strokeWidth="2" />
            <polygon points="210,103 218,107 210,111" className="fill-blue-500" />

            {/* API Gateway */}
            <rect x="220" y="55" width="130" height="105" rx="8" className="fill-white dark:fill-zinc-900 stroke-blue-500" strokeWidth="1.5" />
            <text x="285" y="85" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 font-bold text-xs">API Gateway</text>
            <text x="285" y="105" textAnchor="middle" className="fill-zinc-700 dark:fill-zinc-300 text-[10px]">Token Bucket Rate</text>
            <text x="285" y="125" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[9px] font-bold">Vandalism Bot Filter</text>
            <text x="285" y="142" textAnchor="middle" className="fill-zinc-500 text-[8px]">Auth & CSRF Validated</text>

            <path d="M350 107 L405 107" className="stroke-blue-500" strokeWidth="2" />
            <polygon points="405,103 413,107 405,111" className="fill-blue-500" />

            {/* Kafka Event Bus */}
            <rect x="415" y="45" width="180" height="125" rx="8" className="fill-white dark:fill-zinc-900 stroke-amber-500" strokeWidth="2" />
            <text x="505" y="75" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 font-bold text-xs">Apache Kafka Event Bus</text>
            <text x="505" y="98" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-[10px]">Topic: page-edits / posts</text>
            <text x="505" y="120" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 font-bold text-[10px]">Fan-Out Worker Fleet</text>
            <text x="505" y="145" textAnchor="middle" className="fill-zinc-500 text-[9px]">Parallel Consumer Groups</text>

            {/* Split paths */}
            <path d="M595 85 L655 60" className="stroke-emerald-500" strokeWidth="1.5" />
            <polygon points="655,57 663,60 655,63" className="fill-emerald-500" />

            <path d="M595 130 L655 155" className="stroke-blue-500" strokeWidth="1.5" />
            <polygon points="655,152 663,155 655,158" className="fill-blue-500" />

            {/* Top Branch: Redis Timeline */}
            <rect x="665" y="30" width="170" height="65" rx="6" className="fill-white dark:fill-zinc-900 stroke-emerald-500" strokeWidth="1.5" />
            <text x="750" y="55" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-xs">Redis Timeline (ZSET)</text>
            <text x="750" y="75" textAnchor="middle" className="fill-zinc-500 text-[9px]">Sub-millisecond Feed Reads</text>

            {/* Bottom Branch: MediaWiki MariaDB Revision Store */}
            <rect x="665" y="125" width="170" height="65" rx="6" className="fill-white dark:fill-zinc-900 stroke-blue-500" strokeWidth="1.5" />
            <text x="750" y="148" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">MediaWiki Revision Store</text>
            <text x="750" y="168" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[9px] font-bold">Myers Diff & 200ms Rollbacks</text>
          </svg>
        </div>
      );
    }

    // 9. Two-Stage Recommender Systems
    if (topicId?.includes('4.9') || topicId?.includes('4.8')) {
      return (
        <div className="w-full">
          <svg viewBox="0 0 780 220" className="w-full h-auto font-mono text-[11px]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="780" height="220" rx="12" className="fill-zinc-100/60 dark:fill-zinc-900/60 stroke-zinc-200/80 dark:stroke-zinc-800/80" strokeWidth="1" />

            <rect x="25" y="45" width="130" height="130" rx="8" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1.5" />
            <text x="90" y="80" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">Entire Catalog</text>
            <text x="90" y="105" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 font-bold text-sm">50,000,000</text>
            <text x="90" y="125" textAnchor="middle" className="fill-zinc-500 text-[10px]">Movies / Products</text>

            <path d="M160 110 L215 110" className="stroke-blue-500" strokeWidth="2" />
            <polygon points="215,106 223,110 215,114" className="fill-blue-500" />

            <rect x="225" y="55" width="155" height="105" rx="8" className="fill-white dark:fill-zinc-900 stroke-blue-500" strokeWidth="1.5" />
            <text x="302" y="82" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 font-bold text-xs">Stage 1: Candidates</text>
            <text x="302" y="104" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 font-bold text-sm">Top 1,000 Items</text>
            <text x="302" y="125" textAnchor="middle" className="fill-zinc-500 text-[10px]">HNSW Vector ANN (15ms)</text>

            <path d="M385 110 L440 110" className="stroke-blue-500" strokeWidth="2" />
            <polygon points="440,106 448,110 440,114" className="fill-blue-500" />

            <rect x="450" y="55" width="155" height="105" rx="8" className="fill-white dark:fill-zinc-900 stroke-amber-500" strokeWidth="1.5" />
            <text x="527" y="82" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 font-bold text-xs">Stage 2: Heavy Rank</text>
            <text x="527" y="104" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-sm">Top 100 Scored</text>
            <text x="527" y="125" textAnchor="middle" className="fill-zinc-500 text-[10px]">Deep Neural Net (GBDT)</text>

            <path d="M610 110 L660 110" className="stroke-blue-500" strokeWidth="2" />
            <polygon points="660,106 668,110 660,114" className="fill-blue-500" />

            <rect x="670" y="65" width="95" height="85" rx="8" className="fill-white dark:fill-zinc-900 stroke-emerald-500" strokeWidth="2" />
            <text x="717" y="95" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-xs">User UI</text>
            <text x="717" y="115" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">Top 10 Row</text>
            <text x="717" y="132" textAnchor="middle" className="fill-zinc-500 text-[8px]">Personalized</text>
          </svg>
        </div>
      );
    }

    // 10. WebGPU / On-Device AI Inference
    if (topicId?.includes('5.2') || topicId?.includes('5.1')) {
      return (
        <div className="w-full">
          <svg viewBox="0 0 780 220" className="w-full h-auto font-mono text-[11px]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="780" height="220" rx="12" className="fill-zinc-100/60 dark:fill-zinc-900/60 stroke-zinc-200/80 dark:stroke-zinc-800/80" strokeWidth="1" />

            <rect x="30" y="60" width="135" height="95" rx="8" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1.5" />
            <text x="97" y="95" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">Web Browser UI</text>
            <text x="97" y="115" textAnchor="middle" className="fill-zinc-500 text-[10px]">Transformers.js</text>

            <path d="M170 107 L225 107" className="stroke-blue-500" strokeWidth="2" />
            <polygon points="225,103 233,107 225,111" className="fill-blue-500" />

            <rect x="235" y="45" width="195" height="125" rx="8" className="fill-white dark:fill-zinc-900 stroke-blue-500" strokeWidth="1.5" />
            <text x="332" y="75" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 font-bold text-xs">W3C WebGPU Runtime</text>
            <text x="332" y="98" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-[10px]">WGSL Compute Shaders</text>
            <text x="332" y="118" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[10px] font-bold">Storage Buffers & Tensors</text>
            <text x="332" y="142" textAnchor="middle" className="fill-zinc-500 text-[9px]">Zero Cloud Server Cost</text>

            <path d="M435 107 L490 107" className="stroke-blue-500" strokeWidth="2" />
            <polygon points="490,103 498,107 490,111" className="fill-blue-500" />

            <rect x="500" y="35" width="255" height="145" rx="8" className="fill-white dark:fill-zinc-900 stroke-emerald-500" strokeWidth="2" />
            <text x="627" y="65" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-sm">Physical Hardware GPU</text>
            <text x="627" y="90" textAnchor="middle" className="fill-zinc-800 dark:fill-zinc-200 text-[11px]">Direct3D 12 / Metal / Vulkan</text>
            <text x="627" y="115" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 font-bold text-[10px]">Parallel Matrix Math (Tensors)</text>
            <text x="627" y="140" textAnchor="middle" className="fill-zinc-500 text-[9px]">Inference Latency: &lt; 20ms</text>
          </svg>
        </div>
      );
    }

    // 11. TLS 1.3 Handshake & Cryptography (ONLY for End-to-End Security & Request Lifecycles)
    if (topicId?.includes('1.8') || topicId?.includes('security') || topicId?.includes('tls')) {
      return (
        <div className="w-full">
          <svg viewBox="0 0 780 220" className="w-full h-auto font-mono text-[11px]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="780" height="220" rx="12" className="fill-zinc-100/60 dark:fill-zinc-900/60 stroke-zinc-200/80 dark:stroke-zinc-800/80" strokeWidth="1" />

            <rect x="30" y="35" width="150" height="145" rx="8" className="fill-white dark:fill-zinc-900 stroke-zinc-300 dark:stroke-zinc-700" strokeWidth="1.5" />
            <text x="105" y="65" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">Client Web Browser</text>
            <text x="105" y="90" textAnchor="middle" className="fill-zinc-500 text-[10px]">Client Key Share</text>
            <text x="105" y="115" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[10px] font-bold">X25519 Elliptic Curve</text>
            <text x="105" y="145" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[9px]">Verifies X.509 Cert</text>

            <path d="M185 75 L585 75" className="stroke-blue-500" strokeWidth="2" />
            <polygon points="585,71 593,75 585,79" className="fill-blue-500" />
            <text x="385" y="68" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[10px] font-bold">ClientHello + KeyShare (1-RTT)</text>

            <path d="M585 120 L185 120" className="stroke-emerald-500" strokeWidth="2" />
            <polygon points="193,116 185,120 193,124" className="fill-emerald-500" />
            <text x="385" y="113" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[10px] font-bold">ServerHello + Cert + Finished</text>

            <path d="M185 155 L585 155" className="stroke-amber-500" strokeWidth="2" strokeDasharray="4 2" />
            <polygon points="585,151 593,155 585,159" className="fill-amber-500" />
            <text x="385" y="150" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-[9px] font-bold">AES-256-GCM Encrypted Application Data</text>

            <rect x="595" y="35" width="150" height="145" rx="8" className="fill-white dark:fill-zinc-900 stroke-blue-500" strokeWidth="2" />
            <text x="670" y="65" textAnchor="middle" className="fill-zinc-900 dark:fill-zinc-100 font-bold text-xs">Production Server</text>
            <text x="670" y="90" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[10px] font-bold">TLS 1.3 Gateway</text>
            <text x="670" y="115" textAnchor="middle" className="fill-zinc-500 text-[10px]">Strict-Transport-Security</text>
            <text x="670" y="145" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[9px]">PFS: Forward Secrecy</text>
          </svg>
        </div>
      );
    }

    // Default: Return null so unmapped topics NEVER display a misleading, repeated fallback!
    // Instead, they gracefully display their own dedicated ASCII topology diagram without distraction.
    return null;
  };

  const diagramContent = getDiagramContent();
  if (!diagramContent) return null;

  return (
    <div className="my-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/50 overflow-hidden shadow-sm">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/60 dark:bg-zinc-900/80 text-xs font-mono">
        <span className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-semibold">
          <Eye className="w-3.5 h-3.5 text-doc-accent" />
          <span>Real-Life System Architecture Blueprint</span>
        </span>
        {company && (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400">
            Case: {company}
          </span>
        )}
      </div>

      <div className="p-4 sm:p-5 flex justify-center items-center overflow-x-auto">
        {diagramContent}
      </div>
    </div>
  );
}
