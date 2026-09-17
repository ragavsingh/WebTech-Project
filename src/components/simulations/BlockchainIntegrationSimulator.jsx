import React, { useState } from 'react';
import { 
  Lock, 
  Unlock, 
  Plus, 
  CheckCircle2, 
  AlertTriangle, 
  RotateCcw, 
  ShieldCheck, 
  Info, 
  Hammer,
  ArrowRight
} from 'lucide-react';

function simpleHash(text) {
  let hash = 5381;
  for (let i = 0; i < text.length; i++) {
    hash = ((hash << 5) + hash) + text.charCodeAt(i);
    hash |= 0;
  }
  const hex = Math.abs(hash).toString(16).padStart(8, '0');
  return `0000${hex}`.slice(0, 12);
}

export default function BlockchainIntegrationSimulator() {
  const [chain, setChain] = useState([
    { index: 0, timestamp: '10:00:00 AM', data: 'Genesis Block: Smart Web Protocol', prevHash: '000000000000', hash: '0000a12f9b3c' },
    { index: 1, timestamp: '10:02:15 AM', data: 'IoT Auth: Register Sensor Node #84', prevHash: '0000a12f9b3c', hash: '0000c841e20a' },
    { index: 2, timestamp: '10:05:40 AM', data: 'Smart Contract: Access Grant -> Device_C', prevHash: '0000c841e20a', hash: '0000f91845bb' }
  ]);
  const [newBlockData, setNewBlockData] = useState('');
  const [isChainValid, setIsChainValid] = useState(true);
  const [tamperedIndex, setTamperedIndex] = useState(null);

  // Validate chain integrity
  const validateChain = (blocks) => {
    for (let i = 1; i < blocks.length; i++) {
      const current = blocks[i];
      const previous = blocks[i - 1];
      
      // Check if previousHash matches
      if (current.prevHash !== previous.hash) {
        return { valid: false, brokenIndex: i };
      }
    }
    return { valid: true, brokenIndex: null };
  };

  const handleAddBlock = (e) => {
    e.preventDefault();
    if (!newBlockData.trim()) return;

    const previousBlock = chain[chain.length - 1];
    const prevHash = previousBlock.hash;
    const time = new Date().toLocaleTimeString();
    const hash = simpleHash(newBlockData + prevHash + time);

    const newBlock = {
      index: chain.length,
      timestamp: time,
      data: newBlockData,
      prevHash,
      hash
    };

    const newChain = [...chain, newBlock];
    setChain(newChain);
    setNewBlockData('');
    const check = validateChain(newChain);
    setIsChainValid(check.valid);
    setTamperedIndex(check.brokenIndex);
  };

  const handleEditData = (indexToEdit, newData) => {
    const updatedChain = chain.map((block, idx) => {
      if (idx === indexToEdit) {
        const recomputedHash = simpleHash(newData + block.prevHash + block.timestamp);
        return {
          ...block,
          data: newData,
          hash: recomputedHash
        };
      }
      return block;
    });

    setChain(updatedChain);
    const check = validateChain(updatedChain);
    setIsChainValid(check.valid);
    setTamperedIndex(check.brokenIndex);
  };

  const handleRecomputeChain = () => {
    // Re-mine / recompute all forward hashes to restore consensus
    const restoredChain = [];
    for (let i = 0; i < chain.length; i++) {
      const current = { ...chain[i] };
      if (i === 0) {
        current.hash = simpleHash(current.data + current.prevHash + current.timestamp);
      } else {
        current.prevHash = restoredChain[i - 1].hash;
        current.hash = simpleHash(current.data + current.prevHash + current.timestamp);
      }
      restoredChain.push(current);
    }
    setChain(restoredChain);
    setIsChainValid(true);
    setTamperedIndex(null);
  };

  const handleReset = () => {
    setChain([
      { index: 0, timestamp: '10:00:00 AM', data: 'Genesis Block: Smart Web Protocol', prevHash: '000000000000', hash: '0000a12f9b3c' },
      { index: 1, timestamp: '10:02:15 AM', data: 'IoT Auth: Register Sensor Node #84', prevHash: '0000a12f9b3c', hash: '0000c841e20a' },
      { index: 2, timestamp: '10:05:40 AM', data: 'Smart Contract: Access Grant -> Device_C', prevHash: '0000c841e20a', hash: '0000f91845bb' }
    ]);
    setIsChainValid(true);
    setTamperedIndex(null);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-amber-500/30">
              <ShieldCheck className="w-3.5 h-3.5" /> Blockchain Integration Laboratory
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Cryptographic Hash Linking & Chain Verification
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Add new blocks, edit past transaction payloads, and observe how cryptographic hash validation detects data tampering instantly across the ledger.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {!isChainValid && (
              <button
                onClick={handleRecomputeChain}
                className="px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition flex items-center gap-1.5 shadow"
              >
                <Hammer className="w-3.5 h-3.5" /> Recompute Proofs (Restore Chain)
              </button>
            )}
            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>
        </div>

        {/* Chain Validity Alert Banner */}
        <div className="mt-6 flex items-center gap-2">
          {isChainValid ? (
            <div className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              CHAIN VALID: All block cryptographic hashes and parent pointers match 100%.
            </div>
          ) : (
            <div className="px-3 py-1.5 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-semibold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              CHAIN INVALID: Data modified at or before Block #{tamperedIndex}. Cryptographic linkage broken!
            </div>
          )}
        </div>
      </div>

      {/* Add Block Input Form */}
      <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
        <form onSubmit={handleAddBlock} className="flex flex-col sm:flex-row gap-2 max-w-2xl">
          <input
            type="text"
            value={newBlockData}
            onChange={(e) => setNewBlockData(e.target.value)}
            placeholder="Enter new block payload (e.g. Smart Contract Execution, IoT Telemetry hash)..."
            className="flex-1 text-xs px-3 py-2 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow"
          >
            <Plus className="w-4 h-4" /> Add Block to Chain
          </button>
        </form>
      </div>

      {/* Chain Grid */}
      <div className="p-6 overflow-x-auto">
        <div className="flex items-stretch gap-4 min-w-[800px]">
          {chain.map((b, idx) => {
            const isBroken = !isChainValid && idx >= (tamperedIndex ?? 999);
            return (
              <React.Fragment key={b.index}>
                <div className={`w-64 p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                  isBroken
                    ? 'border-rose-400 bg-rose-50/40 shadow-md ring-2 ring-rose-500/20'
                    : 'border-slate-200 bg-white shadow-sm'
                }`}>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
                    <span className="text-xs font-bold text-slate-800 flex items-center gap-1">
                      {isBroken ? <Unlock className="w-3.5 h-3.5 text-rose-600" /> : <Lock className="w-3.5 h-3.5 text-emerald-600" />}
                      Block #{b.index}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">{b.timestamp}</span>
                  </div>

                  {/* Data Input (Editable to test tampering) */}
                  <div className="space-y-2 text-xs">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-0.5">
                        Data (Edit to Tamper)
                      </label>
                      <input
                        type="text"
                        value={b.data}
                        onChange={(e) => handleEditData(b.index, e.target.value)}
                        className="w-full text-xs font-mono p-1.5 rounded border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase mb-0.5">Prev Hash</span>
                      <div className="font-mono text-[10px] p-1 rounded bg-slate-100 text-slate-600 truncate border border-slate-200">
                        {b.prevHash}
                      </div>
                    </div>

                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase mb-0.5">Hash</span>
                      <div className={`font-mono text-[10px] p-1 rounded truncate border ${
                        isBroken ? 'bg-rose-100 text-rose-900 border-rose-300' : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      }`}>
                        {b.hash}
                      </div>
                    </div>
                  </div>
                </div>

                {idx < chain.length - 1 && (
                  <div className="flex items-center justify-center text-slate-300">
                    <ArrowRight className="w-4 h-4" />
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
            <strong className="text-slate-800 font-semibold">Educational Model Disclaimer: </strong>
            This simulator uses a simplified hash algorithm to illustrate hash chaining. In enterprise blockchain web integration (e.g. Ethereum, Hyperledger Fabric), blocks utilize SHA-256 or Keccak-256 hashing, Merkle trees for transaction verification, and asymmetric ECDSA cryptographic signatures.
          </div>
        </div>
      </div>
    </div>
  );
}
