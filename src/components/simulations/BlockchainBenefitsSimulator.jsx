import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Unlock, 
  AlertTriangle, 
  CheckCircle2, 
  RotateCcw, 
  Hammer, 
  ArrowRight, 
  Info,
  Layers,
  Cpu
} from 'lucide-react';

// Simplified pedagogical hash generator for visualization
function pseudoSha256(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  const hex = Math.abs(hash).toString(16).padStart(8, '0');
  return `0000${hex}f94a821e`.slice(0, 16);
}

export default function BlockchainBenefitsSimulator() {
  const [blocks, setBlocks] = useState([
    { id: 1, nonce: 1482, data: 'Genesis Block: Protocol Inception', prevHash: '0000000000000000', hash: '0000a18f94a821e0', isValid: true },
    { id: 2, nonce: 3901, data: 'Tx: Alice -> Bob (15 Credits)', prevHash: '0000a18f94a821e0', hash: '0000c842b109e44f', isValid: true },
    { id: 3, nonce: 2814, data: 'Smart Contract: Deploy Degree Credential', prevHash: '0000c842b109e44f', hash: '0000f39942a178bc', isValid: true }
  ]);
  const [isTampered, setIsTampered] = useState(false);
  const [isMining, setIsMining] = useState(false);

  // Handle student tampering with Block 1 data
  const handleTamperBlock1 = (newData) => {
    setIsTampered(true);
    const newHash1 = pseudoSha256(newData + '1482' + '0000000000000000');
    
    // In a hash chain, if block 1 hash changes, block 2's prevHash doesn't match its stored record!
    setBlocks([
      { ...blocks[0], data: newData, hash: newHash1, isValid: true },
      { ...blocks[1], prevHash: newHash1, isValid: false }, // Broken chain link!
      { ...blocks[2], isValid: false } // Cascade failure
    ]);
  };

  // Mining / Recalculating proof of work
  const handleMineRecalculate = () => {
    setIsMining(true);
    setTimeout(() => {
      // Recalculate valid hashes along the entire chain
      const b1 = blocks[0];
      const h1 = pseudoSha256(b1.data + b1.nonce + b1.prevHash);
      const b2 = { ...blocks[1], prevHash: h1, nonce: blocks[1].nonce + 1 };
      const h2 = pseudoSha256(b2.data + b2.nonce + h1);
      const b3 = { ...blocks[2], prevHash: h2, nonce: blocks[2].nonce + 1 };
      const h3 = pseudoSha256(b3.data + b3.nonce + h2);

      setBlocks([
        { ...b1, hash: h1, isValid: true },
        { ...b2, hash: h2, isValid: true },
        { ...b3, hash: h3, isValid: true }
      ]);
      setIsTampered(false);
      setIsMining(false);
    }, 800);
  };

  const handleReset = () => {
    setBlocks([
      { id: 1, nonce: 1482, data: 'Genesis Block: Protocol Inception', prevHash: '0000000000000000', hash: '0000a18f94a821e0', isValid: true },
      { id: 2, nonce: 3901, data: 'Tx: Alice -> Bob (15 Credits)', prevHash: '0000a18f94a821e0', hash: '0000c842b109e44f', isValid: true },
      { id: 3, nonce: 2814, data: 'Smart Contract: Deploy Degree Credential', prevHash: '0000c842b109e44f', hash: '0000f39942a178bc', isValid: true }
    ]);
    setIsTampered(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-amber-500/30">
              <ShieldCheck className="w-3.5 h-3.5" /> Cryptographic Ledgers & Tamper-Evidence
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              The Immutability Mechanics of Blockchain
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Understand why blockchains are tamper-evident: modifying a single historical record invalidates the cryptographic hashes of every subsequent block in the network.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleMineRecalculate}
              disabled={isMining || !isTampered}
              className="px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 disabled:opacity-40 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition"
            >
              <Hammer className={`w-3.5 h-3.5 ${isMining ? 'animate-bounce' : ''}`} />
              {isMining ? 'Recalculating Proof...' : 'Re-Mine & Restore Chain'}
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center gap-1 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Chain
            </button>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="mt-6 flex items-center gap-2">
          {isTampered ? (
            <div className="px-3 py-1.5 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-semibold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              TAMPERING DETECTED: Cryptographic hash mismatch invalidated downstream blocks!
            </div>
          ) : (
            <div className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              CONSENSUS VALID: All block hashes and parent references match cryptographic proofs.
            </div>
          )}
        </div>
      </div>

      {/* Main Chain Visualization */}
      <div className="p-6 overflow-x-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-4 min-w-[750px]">
          {blocks.map((block, idx) => {
            const isFirst = idx === 0;
            return (
              <React.Fragment key={block.id}>
                {/* Block Card */}
                <div className={`flex-1 p-5 rounded-2xl border transition-all ${
                  block.isValid
                    ? 'border-slate-200 bg-white shadow-sm'
                    : 'border-rose-400 bg-rose-50/40 shadow-md ring-2 ring-rose-500/20'
                }`}>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                    <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      {block.isValid ? <Lock className="w-3.5 h-3.5 text-emerald-600" /> : <Unlock className="w-3.5 h-3.5 text-rose-600" />}
                      Block #{block.id}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      Nonce: {block.nonce}
                    </span>
                  </div>

                  {/* Data Payload Input (Block 1 is editable for interactive demonstration) */}
                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                        Block Data Payload {isFirst && <span className="text-indigo-600">(Try Editing!)</span>}
                      </label>
                      {isFirst ? (
                        <input
                          type="text"
                          value={block.data}
                          onChange={(e) => handleTamperBlock1(e.target.value)}
                          className="w-full text-xs font-mono px-2.5 py-1.5 rounded-lg border border-indigo-300 bg-indigo-50/30 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      ) : (
                        <div className="p-2 rounded bg-slate-50 border border-slate-200 font-mono text-[11px] text-slate-700">
                          {block.data}
                        </div>
                      )}
                    </div>

                    {/* Previous Hash */}
                    <div>
                      <span className="block text-[10px] font-bold uppercase text-slate-400 mb-0.5">Previous Hash</span>
                      <div className="font-mono text-[10px] p-1.5 rounded bg-slate-100 text-slate-600 truncate border border-slate-200">
                        {block.prevHash}
                      </div>
                    </div>

                    {/* Block Hash */}
                    <div>
                      <span className="block text-[10px] font-bold uppercase text-slate-400 mb-0.5">Current Hash</span>
                      <div className={`font-mono text-[10px] p-1.5 rounded truncate border ${
                        block.isValid ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-rose-100 text-rose-900 border-rose-300'
                      }`}>
                        {block.hash}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow Connector between blocks */}
                {idx < blocks.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center text-slate-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Educational Note */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 font-semibold">Technical Reality & Trade-offs: </strong>
            Blockchain establishes trust without a central intermediary through cryptographic hashing and distributed consensus (Proof of Work or Proof of Stake). However, educational clarity requires acknowledging trade-offs: distributed consensus introduces significant latency, computational overhead, and scalability limitations compared to centralized relational databases. Blockchains excel where censorship resistance and verifiable auditability outweigh raw throughput.
          </div>
        </div>
      </div>
    </div>
  );
}
