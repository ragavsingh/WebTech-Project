import React, { useState } from 'react';
import { 
  Cpu, 
  ArrowRight, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Layers, 
  Server, 
  Smartphone, 
  Info, 
  HelpCircle,
  FileCode,
  ShieldAlert
} from 'lucide-react';

const CORBA_STEPS = [
  {
    step: 1,
    title: '1. Client Invokes Method on Local Stub',
    actor: 'Client Application (C++ / Java)',
    desc: 'The client calls a method on a local IDL Client Stub (proxy) as if the object were resident in local machine memory: accountStub->withdraw(500).',
    output: 'accountStub->withdraw(500.00)'
  },
  {
    step: 2,
    title: '2. Client-Side ORB (Marshalling)',
    actor: 'Client ORB (Object Request Broker)',
    desc: 'The client ORB marshals (serializes) method arguments into a compact binary representation defined by the Common Data Representation (CDR).',
    output: 'CDR Binary Serialization [0x00 0x01 0xF4 ...]'
  },
  {
    step: 3,
    title: '3. IIOP Network Wire Transit',
    actor: 'IIOP (Internet Inter-ORB Protocol)',
    desc: 'The binary request travels across TCP sockets using the proprietary IIOP protocol, directed to an Interoperable Object Reference (IOR) IP and port.',
    output: 'TCP Port 1050 (High-numbered port, blocked by modern firewalls)'
  },
  {
    step: 4,
    title: '4. Server-Side ORB (Unmarshalling)',
    actor: 'Server ORB',
    desc: 'The server ORB receives binary bytes, unmarshals parameters, locates the target object implementation in memory, and passes the call to the Skeleton.',
    output: 'Skeleton.invoke("withdraw", params)'
  },
  {
    step: 5,
    title: '5. Servant Executes Logic',
    actor: 'Remote Servant (Real C++/Java Object)',
    desc: 'The real remote Servant object executes the business logic, updates local state, and returns the balance result.',
    output: 'Balance remaining: $4,500.00'
  },
  {
    step: 6,
    title: '6. Server ORB Marshals Return',
    actor: 'Server ORB -> Network',
    desc: 'Return value is marshalled into CDR binary format and sent back over the IIOP TCP socket to the client.',
    output: 'IIOP Return Message'
  },
  {
    step: 7,
    title: '7. Client Receives Return Value',
    actor: 'Client Application',
    desc: 'Client ORB unmarshals return bytes and returns execution to the client program seamlessly.',
    output: 'double balance = 4500.00; (Method completes)'
  }
];

export default function CorbaArchitectureSimulator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [activeTab, setActiveTab] = useState('diagram'); // 'diagram' | 'comparison'

  const activeStage = CORBA_STEPS[currentStep - 1];

  const handleNext = () => {
    if (currentStep < CORBA_STEPS.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Top Header */}
      <div className="bg-slate-900 text-white px-5 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/30">
            <Cpu size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold">CORBA Distributed Object Architecture Visualizer</h3>
            <p className="text-xs text-slate-400">
              Common Object Request Broker Architecture: Client &rarr; ORB &rarr; Remote Object &rarr; ORB &rarr; Client
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex bg-slate-800 p-0.5 rounded-lg border border-slate-700">
            <button
              onClick={() => setActiveTab('diagram')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition ${
                activeTab === 'diagram' ? 'bg-amber-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Interactive Pipeline
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition ${
                activeTab === 'comparison' ? 'bg-amber-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              CORBA vs. Web Services
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'diagram' ? (
        <div>
          {/* Main Visual Flow of Distributed Objects */}
          <div className="p-6 bg-slate-50 border-b border-slate-200">
            <div className="max-w-4xl mx-auto py-4">
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-center text-center">
                {/* 1. Client App */}
                <div className={`p-3.5 rounded-xl border transition ${
                  currentStep === 1 || currentStep === 7
                    ? 'bg-amber-600 text-white border-amber-700 shadow-sm scale-105'
                    : 'bg-white text-slate-800 border-slate-200'
                }`}>
                  <Smartphone size={20} className="mx-auto mb-1 opacity-90" />
                  <div className="font-bold text-xs">Client App</div>
                  <div className="text-[10px] text-slate-400 font-mono">IDL Stub</div>
                </div>

                {/* Arrow 1 */}
                <div className="flex justify-center text-slate-400 font-mono text-xs">
                  <ArrowRight size={16} className={currentStep === 2 ? 'text-amber-600 animate-bounce' : ''} />
                </div>

                {/* 2. Client & Server ORB */}
                <div className={`p-3.5 rounded-xl border transition ${
                  currentStep === 2 || currentStep === 3 || currentStep === 4 || currentStep === 6
                    ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm scale-105'
                    : 'bg-white text-slate-800 border-slate-200'
                }`}>
                  <Layers size={20} className="mx-auto mb-1 opacity-90" />
                  <div className="font-bold text-xs">ORB Middleware</div>
                  <div className="text-[10px] text-slate-400 font-mono">IIOP Protocol</div>
                </div>

                {/* Arrow 2 */}
                <div className="flex justify-center text-slate-400 font-mono text-xs">
                  <ArrowRight size={16} className={currentStep === 4 ? 'text-amber-600 animate-bounce' : ''} />
                </div>

                {/* 3. Remote Servant Object */}
                <div className={`p-3.5 rounded-xl border transition ${
                  currentStep === 5
                    ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm scale-105'
                    : 'bg-white text-slate-800 border-slate-200'
                }`}>
                  <Server size={20} className="mx-auto mb-1 opacity-90" />
                  <div className="font-bold text-xs">Remote Object</div>
                  <div className="text-[10px] text-slate-400 font-mono">Servant Skeleton</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stepper Buttons */}
          <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center gap-1.5 overflow-x-auto">
            {CORBA_STEPS.map(s => (
              <button
                key={s.step}
                onClick={() => setCurrentStep(s.step)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold shrink-0 transition flex items-center gap-1 ${
                  currentStep === s.step
                    ? 'bg-amber-600 text-white shadow-xs'
                    : currentStep > s.step
                    ? 'bg-white text-slate-800 border border-slate-300'
                    : 'bg-white/60 text-slate-400 border border-slate-200'
                }`}
              >
                <span>Step {s.step}</span>
              </button>
            ))}
          </div>

          {/* Detailed Stage Description */}
          <div className="p-6 bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold">
                    {activeStage.step}
                  </span>
                  <span>{activeStage.title}</span>
                </h4>
                <span className="text-xs font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                  Actor: {activeStage.actor}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {activeStage.desc}
              </p>

              {/* Wire Representation */}
              <div className="p-3.5 bg-slate-950 rounded-xl font-mono text-xs text-amber-300 border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">
                  // Runtime State / Wire Representation
                </div>
                <div>{activeStage.output}</div>
              </div>
            </div>

            {/* Stepper Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100">
              <button
                onClick={handleReset}
                className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 rounded-lg transition"
              >
                Reset Flow
              </button>

              <button
                onClick={handleNext}
                disabled={currentStep >= CORBA_STEPS.length}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 disabled:opacity-40 text-white font-semibold text-xs rounded-xl shadow-sm transition flex items-center gap-1.5"
              >
                <span>{currentStep >= CORBA_STEPS.length ? 'Cycle Complete' : 'Next Step'}</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* CORBA vs Web Services Architectural Comparison */
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase text-[10px] tracking-wider">
                  <th className="py-3 px-4">Architectural Dimension</th>
                  <th className="py-3 px-4 text-amber-800 font-bold">CORBA (Legacy Distributed Objects)</th>
                  <th className="py-3 px-4 text-emerald-700 font-bold">Web Services (SOAP / REST)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Wire Protocol</td>
                  <td className="py-3 px-4 text-amber-900 font-mono">IIOP (Binary CDR over custom TCP ports)</td>
                  <td className="py-3 px-4 text-emerald-700 font-mono">HTTP / HTTPS (Standard Ports 80 &amp; 443)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Firewall Traversal</td>
                  <td className="py-3 px-4 text-rose-600">Poor (Enterprise firewalls routinely block arbitrary high ports)</td>
                  <td className="py-3 px-4 text-emerald-700 font-semibold">Universal (Passes through all web proxies &amp; firewalls)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Interface Definition</td>
                  <td className="py-3 px-4 font-mono">OMG IDL (Interface Definition Language)</td>
                  <td className="py-3 px-4 font-mono text-emerald-700">WSDL (XML Schema) or OpenAPI (JSON)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Coupling Model</td>
                  <td className="py-3 px-4 text-rose-600">Tightly coupled (Requires compatible ORB vendor implementations)</td>
                  <td className="py-3 px-4 text-emerald-700 font-semibold">Loosely coupled (Standard text XML/JSON envelopes)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">State Management</td>
                  <td className="py-3 px-4">Stateful object references (IORs)</td>
                  <td className="py-3 px-4">Stateless request/response cycles</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="p-4 bg-amber-50/70 border-t border-amber-100 text-xs text-amber-950 flex items-start gap-2.5">
        <Info size={16} className="text-amber-600 shrink-0 mt-0.5" />
        <div>
          <strong className="text-amber-900">Historical Perspective: </strong>
          Developed by the Object Management Group (OMG) in 1991, CORBA was a revolutionary engineering achievement for cross-language RPC. However, its binary protocols, firewall incompatibility, and vendor interoperability hurdles led the industry to adopt XML/HTTP-based Web Services for open Internet communication.
        </div>
      </div>
    </div>
  );
}
