import React, { useState } from 'react';
import { 
  Network, 
  Server, 
  Share2, 
  AlertTriangle, 
  CheckCircle2, 
  RotateCcw, 
  Play, 
  Power, 
  ArrowRight, 
  Info,
  ShieldAlert
} from 'lucide-react';

export default function DwebNetworkSimulator() {
  const [topologyMode, setTopologyMode] = useState('decentralized'); // 'centralized' | 'decentralized'
  const [centralServerOnline, setCentralServerOnline] = useState(true);
  
  // Decentralized nodes state: A, B, C, D
  const [nodesOnline, setNodesOnline] = useState({
    A: true,
    B: true,
    C: true,
    D: true
  });
  
  const [packetTrace, setPacketTrace] = useState(null); // String showing active path
  const [isTransmitting, setIsTransmitting] = useState(false);

  const toggleNode = (nodeKey) => {
    setNodesOnline(prev => ({ ...prev, [nodeKey]: !prev[nodeKey] }));
    setPacketTrace(null);
  };

  const handleSendPacket = () => {
    setIsTransmitting(true);
    setPacketTrace('Initiating packet transmission from Node A to Node D...');

    setTimeout(() => {
      if (topologyMode === 'centralized') {
        if (!centralServerOnline) {
          setPacketTrace('FATAL: Central server is offline. All client-to-client communication completely paralyzed!');
          setIsTransmitting(false);
          return;
        }
        setPacketTrace('SUCCESS: Packet traveled A → Central Server → D (Single Point of Failure dependency).');
        setIsTransmitting(false);
      } else {
        // Decentralized Mesh Routing logic
        if (!nodesOnline.A || !nodesOnline.D) {
          setPacketTrace('ERROR: Origin Node A or Target Node D is offline.');
          setIsTransmitting(false);
          return;
        }

        if (nodesOnline.B) {
          setPacketTrace('PRIMARY ROUTE SUCCESS: Packet traveled A → B → D (Direct high-speed peer path).');
        } else if (nodesOnline.C) {
          setPacketTrace('SELF-HEALING REROUTE: Node B is offline! Packet automatically re-routed via A → C → D.');
        } else {
          setPacketTrace('NETWORK PARTITION: Both intermediary nodes B and C are offline. No path between A and D.');
        }
        setIsTransmitting(false);
      }
    }, 650);
  };

  const handleReset = () => {
    setCentralServerOnline(true);
    setNodesOnline({ A: true, B: true, C: true, D: true });
    setPacketTrace(null);
    setIsTransmitting(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-blue-500/30">
              <Network className="w-3.5 h-3.5" /> Peer-to-Peer Mesh Architecture
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Centralized Architecture vs. Decentralized P2P Mesh
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Compare single-point-of-failure centralized topologies against resilient, self-healing decentralized peer networks. Disable nodes below to test dynamic re-routing.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleSendPacket}
              disabled={isTransmitting}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold transition flex items-center gap-1.5 shadow"
            >
              <Play className="w-3.5 h-3.5" /> Transmit Packet (A → D)
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <button
            onClick={() => { setTopologyMode('centralized'); setPacketTrace(null); }}
            className={`p-3 rounded-xl border text-left transition ${
              topologyMode === 'centralized'
                ? 'bg-white text-slate-900 border-white shadow'
                : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-bold">
              <Server className="w-4 h-4 text-rose-500" />
              1. Centralized Model (Single Server)
            </div>
            <div className="text-[11px] opacity-75 mt-0.5">
              All clients depend on one central authority. Server failure kills the entire system.
            </div>
          </button>

          <button
            onClick={() => { setTopologyMode('decentralized'); setPacketTrace(null); }}
            className={`p-3 rounded-xl border text-left transition ${
              topologyMode === 'decentralized'
                ? 'bg-white text-slate-900 border-white shadow'
                : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-bold">
              <Network className="w-4 h-4 text-blue-500" />
              2. Decentralized Mesh (Peer-to-Peer)
            </div>
            <div className="text-[11px] opacity-75 mt-0.5">
              Peers connect directly. Packets self-heal and re-route if any node drops offline.
            </div>
          </button>
        </div>
      </div>

      {/* Main Canvas View */}
      <div className="p-6 space-y-6">
        {topologyMode === 'centralized' ? (
          /* ================= CENTRALIZED CANVAS ================= */
          <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col items-center justify-center space-y-6">
            {/* Central Server Node */}
            <div className="flex flex-col items-center">
              <div className={`p-4 rounded-2xl border-2 transition-all ${
                centralServerOnline
                  ? 'bg-white border-blue-500 shadow-md ring-4 ring-blue-100'
                  : 'bg-rose-50 border-rose-500 shadow-inner'
              }`}>
                <Server className={`w-10 h-10 ${centralServerOnline ? 'text-blue-600' : 'text-rose-600'}`} />
              </div>
              <div className="text-xs font-bold text-slate-800 mt-2">Central Server Node</div>
              <button
                onClick={() => setCentralServerOnline(!centralServerOnline)}
                className={`mt-2 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition ${
                  centralServerOnline ? 'bg-rose-100 text-rose-800 hover:bg-rose-200' : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                }`}
              >
                <Power className="w-3 h-3" /> {centralServerOnline ? 'Simulate Server Crash' : 'Restore Server'}
              </button>
            </div>

            {/* Clients Connected to Central Node */}
            <div className="grid grid-cols-3 gap-8 w-full max-w-md pt-4 border-t border-slate-200">
              <div className="text-center">
                <div className="p-2.5 rounded-xl bg-white border border-slate-300 font-mono text-xs font-bold text-slate-700 mx-auto w-12">
                  Client A
                </div>
                <div className="text-[10px] text-slate-500 mt-1">Sender</div>
              </div>
              <div className="text-center">
                <div className="p-2.5 rounded-xl bg-white border border-slate-300 font-mono text-xs font-bold text-slate-700 mx-auto w-12">
                  Client B
                </div>
                <div className="text-[10px] text-slate-500 mt-1">Observer</div>
              </div>
              <div className="text-center">
                <div className="p-2.5 rounded-xl bg-white border border-slate-300 font-mono text-xs font-bold text-slate-700 mx-auto w-12">
                  Client D
                </div>
                <div className="text-[10px] text-slate-500 mt-1">Recipient</div>
              </div>
            </div>
          </div>
        ) : (
          /* ================= DECENTRALIZED MESH CANVAS ================= */
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-6">
            <div className="flex items-center justify-between text-xs text-slate-600">
              <span className="font-bold uppercase tracking-wider">Interactive 4-Node P2P Mesh Topology:</span>
              <span>Click power toggles below to simulate node failure or censorship</span>
            </div>

            {/* Mesh Diagram Box */}
            <div className="max-w-lg mx-auto p-6 rounded-2xl bg-white border border-slate-300 shadow-sm relative">
              <div className="grid grid-cols-2 gap-12">
                {/* Node A (Top Left - Sender) */}
                <div className={`p-4 rounded-xl border-2 transition ${
                  nodesOnline.A ? 'border-emerald-500 bg-emerald-50/50' : 'border-rose-400 bg-rose-50/50 opacity-60'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">Node A (Sender)</span>
                    <button
                      onClick={() => toggleNode('A')}
                      className={`p-1 rounded text-[10px] font-bold ${nodesOnline.A ? 'text-rose-600' : 'text-emerald-600'}`}
                    >
                      {nodesOnline.A ? 'Turn Off' : 'Turn On'}
                    </button>
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 mt-1">Status: {nodesOnline.A ? 'ACTIVE PEER' : 'OFFLINE'}</div>
                </div>

                {/* Node B (Top Right) */}
                <div className={`p-4 rounded-xl border-2 transition ${
                  nodesOnline.B ? 'border-blue-500 bg-blue-50/50' : 'border-rose-400 bg-rose-50/50 opacity-60'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">Node B (Relay 1)</span>
                    <button
                      onClick={() => toggleNode('B')}
                      className={`p-1 rounded text-[10px] font-bold ${nodesOnline.B ? 'text-rose-600' : 'text-emerald-600'}`}
                    >
                      {nodesOnline.B ? 'Turn Off' : 'Turn On'}
                    </button>
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 mt-1">Status: {nodesOnline.B ? 'ACTIVE PEER' : 'OFFLINE'}</div>
                </div>

                {/* Node C (Bottom Left) */}
                <div className={`p-4 rounded-xl border-2 transition ${
                  nodesOnline.C ? 'border-blue-500 bg-blue-50/50' : 'border-rose-400 bg-rose-50/50 opacity-60'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">Node C (Relay 2)</span>
                    <button
                      onClick={() => toggleNode('C')}
                      className={`p-1 rounded text-[10px] font-bold ${nodesOnline.C ? 'text-rose-600' : 'text-emerald-600'}`}
                    >
                      {nodesOnline.C ? 'Turn Off' : 'Turn On'}
                    </button>
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 mt-1">Status: {nodesOnline.C ? 'ACTIVE PEER' : 'OFFLINE'}</div>
                </div>

                {/* Node D (Bottom Right - Target) */}
                <div className={`p-4 rounded-xl border-2 transition ${
                  nodesOnline.D ? 'border-emerald-500 bg-emerald-50/50' : 'border-rose-400 bg-rose-50/50 opacity-60'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">Node D (Target)</span>
                    <button
                      onClick={() => toggleNode('D')}
                      className={`p-1 rounded text-[10px] font-bold ${nodesOnline.D ? 'text-rose-600' : 'text-emerald-600'}`}
                    >
                      {nodesOnline.D ? 'Turn Off' : 'Turn On'}
                    </button>
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 mt-1">Status: {nodesOnline.D ? 'ACTIVE PEER' : 'OFFLINE'}</div>
                </div>
              </div>

              {/* Topology Mesh Arrows Description */}
              <div className="pt-4 mt-4 border-t border-slate-200 text-center text-xs font-mono text-slate-600">
                Mesh Links: A ── B ── D | A ── C ── D | B ── C (Cross-Interconnected)
              </div>
            </div>
          </div>
        )}

        {/* Live Packet Transmission Feedback */}
        {packetTrace && (
          <div className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs space-y-1">
            <div className="text-[11px] text-blue-400 font-bold uppercase">
              Routing Diagnostic Log:
            </div>
            <p className="text-slate-300">{packetTrace}</p>
          </div>
        )}

        {/* Educational Note */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 font-semibold">Educational Model Disclaimer: </strong>
            This simulation demonstrates conceptual packet re-routing. In production decentralized web networks (such as IPFS, BitTorrent, and libp2p), peers locate each other using Distributed Hash Tables (Kademlia DHTs), multi-path routing, and cryptographic content-addressing (CIDs) rather than fixed physical addresses.
          </div>
        </div>
      </div>
    </div>
  );
}
