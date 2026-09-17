import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  Send, 
  Play, 
  RotateCcw, 
  Layers, 
  Server, 
  Smartphone, 
  Database, 
  FileCode, 
  ArrowRight, 
  HelpCircle, 
  Sparkles,
  Sliders,
  Check,
  AlertCircle
} from 'lucide-react';

const SERVICES_DATA = {
  payment: {
    id: 'payment',
    name: 'Universal Payment Gateway Service',
    endpoint: 'https://api.gateway.org/soap/payments',
    operations: [
      { id: 'authorize', name: 'authorizePayment', defaultParam: 'amount: 250.00, currency: USD', defaultResp: 'status: APPROVED, authCode: AUTH-8821' },
      { id: 'refund', name: 'refundTransaction', defaultParam: 'txId: TX-1099, refundAmount: 50.00', defaultResp: 'status: REFUNDED, remaining: 200.00' }
    ]
  },
  weather: {
    id: 'weather',
    name: 'Global Telemetry Weather Service',
    endpoint: 'https://api.meteo.org/soap/forecast',
    operations: [
      { id: 'current', name: 'getCurrentConditions', defaultParam: 'city: London, units: metric', defaultResp: 'temp: 18.5 C, condition: Partly Cloudy' },
      { id: 'forecast', name: 'get5DayForecast', defaultParam: 'lat: 51.5074, lon: -0.1278', defaultResp: 'high: 22 C, low: 14 C, precipitation: 10%' }
    ]
  },
  flight: {
    id: 'flight',
    name: 'SkyLine Global Flight Reservation',
    endpoint: 'https://api.skyline.aero/soap/booking',
    operations: [
      { id: 'search', name: 'searchAvailableSeats', defaultParam: 'origin: JFK, dest: LHR, date: 2026-10-01', defaultResp: 'flightsFound: 4, lowestFare: $620' },
      { id: 'reserve', name: 'reservePassengerSeat', defaultParam: 'flightNum: SK-104, seat: 14B', defaultResp: 'status: TICKETED, pnr: PNR-9981' }
    ]
  }
};

export default function BuildWebServiceLab() {
  const [selectedClient, setSelectedClient] = useState('mobile'); // 'mobile' | 'spa' | 'enterprise'
  const [selectedServiceKey, setSelectedServiceKey] = useState('payment');
  const [selectedOpIdx, setSelectedOpIdx] = useState(0);
  const [customParams, setCustomParams] = useState('');
  const [protocol, setProtocol] = useState('soap'); // 'soap' | 'json'

  // Execution state
  const [isSimulating, setIsSimulating] = useState(false);
  const [execStep, setExecStep] = useState(0); // 0: idle, 1: client, 2: transit, 3: server, 4: db, 5: completed
  const [labCompleted, setLabCompleted] = useState(false);

  const activeService = SERVICES_DATA[selectedServiceKey];
  const activeOp = activeService.operations[selectedOpIdx];

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setExecStep(1);

    setTimeout(() => {
      setExecStep(2);
      setTimeout(() => {
        setExecStep(3);
        setTimeout(() => {
          setExecStep(4);
          setTimeout(() => {
            setExecStep(5);
            setIsSimulating(false);
            setLabCompleted(true);
          }, 800);
        }, 800);
      }, 800);
    }, 800);
  };

  const handleReset = () => {
    setIsSimulating(false);
    setExecStep(0);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white px-6 py-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 bg-indigo-500/20 text-indigo-400 rounded-xl border border-indigo-500/30">
            <Award size={24} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-extrabold">Unit 3 Capstone: Build a Web Service</h3>
              <span className="text-[11px] font-bold bg-indigo-500/30 text-indigo-300 border border-indigo-500/40 px-2 py-0.5 rounded-full">
                Interactive Engineering Lab
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Assemble client consumers, service providers, operations, and wire envelopes, then execute the full distributed transaction
            </p>
          </div>
        </div>

        {labCompleted && (
          <div className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 px-3 py-1.5 rounded-xl text-emerald-300 text-xs font-bold">
            <CheckCircle2 size={16} />
            <span>Service Transaction Certified</span>
          </div>
        )}
      </div>

      {/* Configuration Controls Bar */}
      <div className="p-5 bg-slate-50 border-b border-slate-200 grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
        {/* Step 1: Select Client */}
        <div>
          <label className="font-bold text-slate-800 block mb-1">1. Select Consumer Client:</label>
          <select
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
            className="w-full p-2 bg-white border border-slate-200 rounded-lg font-medium text-slate-700"
          >
            <option value="mobile">Native Mobile App (iOS/Android)</option>
            <option value="spa">Web SPA (React/Vue with AJAX)</option>
            <option value="enterprise">Enterprise ERP Server (Java/C#)</option>
          </select>
        </div>

        {/* Step 2: Select Web Service */}
        <div>
          <label className="font-bold text-slate-800 block mb-1">2. Select Web Service:</label>
          <select
            value={selectedServiceKey}
            onChange={(e) => {
              setSelectedServiceKey(e.target.value);
              setSelectedOpIdx(0);
            }}
            className="w-full p-2 bg-white border border-slate-200 rounded-lg font-medium text-slate-700"
          >
            <option value="payment">Universal Payment Gateway</option>
            <option value="weather">AtmoCast Global Weather</option>
            <option value="flight">SkyLine Flight Reservation</option>
          </select>
        </div>

        {/* Step 3: Select Operation */}
        <div>
          <label className="font-bold text-slate-800 block mb-1">3. Select Operation:</label>
          <select
            value={selectedOpIdx}
            onChange={(e) => setSelectedOpIdx(parseInt(e.target.value))}
            className="w-full p-2 bg-white border border-slate-200 rounded-lg font-medium text-slate-700 font-mono"
          >
            {activeService.operations.map((op, idx) => (
              <option key={op.id} value={idx}>{op.name}()</option>
            ))}
          </select>
        </div>

        {/* Step 4: Wire Protocol */}
        <div>
          <label className="font-bold text-slate-800 block mb-1">4. Envelope Protocol:</label>
          <div className="flex bg-white p-0.5 rounded-lg border border-slate-200">
            <button
              onClick={() => setProtocol('soap')}
              className={`flex-1 py-1.5 rounded-md font-semibold transition ${
                protocol === 'soap' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              SOAP / XML
            </button>
            <button
              onClick={() => setProtocol('json')}
              className={`flex-1 py-1.5 rounded-md font-semibold transition ${
                protocol === 'json' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              REST / JSON
            </button>
          </div>
        </div>
      </div>

      {/* Transaction Pipeline Visualization */}
      <div className="p-6 bg-slate-100/70 border-b border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
          <div className={`p-3 rounded-xl border transition ${
            execStep === 1 ? 'bg-indigo-600 text-white border-indigo-700 font-bold scale-105 shadow' : 'bg-white text-slate-700 border-slate-200'
          }`}>
            <Smartphone size={16} className="mx-auto mb-1 opacity-90" />
            <span>1. Client ({selectedClient})</span>
          </div>

          <ArrowRight size={14} className={execStep === 2 ? 'text-indigo-600 animate-bounce' : 'text-slate-400'} />

          <div className={`p-3 rounded-xl border transition ${
            execStep === 2 ? 'bg-indigo-600 text-white border-indigo-700 font-bold scale-105 shadow' : 'bg-white text-slate-700 border-slate-200'
          }`}>
            <Send size={16} className="mx-auto mb-1 opacity-90" />
            <span>2. Network Wire Transit</span>
          </div>

          <ArrowRight size={14} className={execStep === 3 ? 'text-indigo-600 animate-bounce' : 'text-slate-400'} />

          <div className={`p-3 rounded-xl border transition ${
            execStep === 3 ? 'bg-indigo-600 text-white border-indigo-700 font-bold scale-105 shadow' : 'bg-white text-slate-700 border-slate-200'
          }`}>
            <Server size={16} className="mx-auto mb-1 opacity-90" />
            <span>3. Service: {activeOp.name}()</span>
          </div>

          <ArrowRight size={14} className={execStep === 4 ? 'text-indigo-600 animate-bounce' : 'text-slate-400'} />

          <div className={`p-3 rounded-xl border transition ${
            execStep === 4 ? 'bg-indigo-600 text-white border-indigo-700 font-bold scale-105 shadow' : 'bg-white text-slate-700 border-slate-200'
          }`}>
            <Database size={16} className="mx-auto mb-1 opacity-90" />
            <span>4. Database Store</span>
          </div>

          <ArrowRight size={14} className={execStep === 5 ? 'text-emerald-600 animate-bounce' : 'text-slate-400'} />

          <div className={`p-3 rounded-xl border transition ${
            execStep === 5 ? 'bg-emerald-600 text-white border-emerald-700 font-bold scale-105 shadow' : 'bg-white text-slate-700 border-slate-200'
          }`}>
            <CheckCircle2 size={16} className="mx-auto mb-1 opacity-90" />
            <span>5. Response Delivered</span>
          </div>
        </div>
      </div>

      {/* Execution Trigger Bar */}
      <div className="px-6 py-3 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-slate-600">
          <Sliders size={14} className="text-indigo-600" />
          <span>Configured endpoint: <code className="text-indigo-700 font-mono">{activeService.endpoint}</code></span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 rounded-lg transition"
          >
            Reset
          </button>
          <button
            onClick={handleRunSimulation}
            disabled={isSimulating}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition"
          >
            <Play size={13} className={isSimulating ? 'animate-spin' : ''} />
            <span>{isSimulating ? 'Executing Transaction...' : 'Run Web Service Simulation'}</span>
          </button>
        </div>
      </div>

      {/* Live Generated Envelopes */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800 bg-slate-950 text-slate-100 font-mono text-xs">
        {/* Request Envelope */}
        <div className="p-4 flex flex-col">
          <div className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-2 flex items-center justify-between">
            <span>// Request Payload ({protocol.toUpperCase()})</span>
            <span>Target: {activeOp.name}</span>
          </div>
          <pre className="text-purple-300 overflow-x-auto leading-relaxed flex-1">
            {protocol === 'soap' ? `<?xml version="1.0"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
               xmlns:tns="${activeService.endpoint}">
  <soap:Header>
    <tns:ClientContext id="${selectedClient}"/>
  </soap:Header>
  <soap:Body>
    <tns:${activeOp.name}Request>
      <tns:params>${customParams || activeOp.defaultParam}</tns:params>
    </tns:${activeOp.name}Request>
  </soap:Body>
</soap:Envelope>` : `{
  "client": "${selectedClient}",
  "operation": "${activeOp.name}",
  "endpoint": "${activeService.endpoint}",
  "parameters": {
    ${(customParams || activeOp.defaultParam).split(',').map(s => `"${s.split(':')[0].trim()}": "${(s.split(':')[1]||'').trim()}"`).join(',\n    ')}
  }
}`}
          </pre>
        </div>

        {/* Response Envelope */}
        <div className="p-4 flex flex-col">
          <div className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-2 flex items-center justify-between">
            <span>// Response Envelope</span>
            <span>{execStep === 5 ? 'Status: 200 OK' : 'Awaiting Execution'}</span>
          </div>
          <pre className="text-emerald-300 overflow-x-auto leading-relaxed flex-1">
            {execStep === 5 ? (
              protocol === 'soap' ? `<?xml version="1.0"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
               xmlns:tns="${activeService.endpoint}">
  <soap:Body>
    <tns:${activeOp.name}Response>
      <tns:result>${activeOp.defaultResp}</tns:result>
      <tns:processedAt>${new Date().toISOString()}</tns:processedAt>
      <tns:transactionCode>SUCCESS-200</tns:transactionCode>
    </tns:${activeOp.name}Response>
  </soap:Body>
</soap:Envelope>` : `{
  "statusCode": 200,
  "status": "SUCCESS",
  "result": {
    ${activeOp.defaultResp.split(',').map(s => `"${s.split(':')[0].trim()}": "${(s.split(':')[1]||'').trim()}"`).join(',\n    ')}
  },
  "timestamp": "${new Date().toISOString()}"
}`
            ) : (
              <span className="text-slate-500 italic">// Click "Run Web Service Simulation" to transmit request and receive response envelope...</span>
            )}
          </pre>
        </div>
      </div>

      {/* Completion Trophy Card */}
      {labCompleted && (
        <div className="p-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles size={26} className="text-amber-300 animate-bounce" />
            <div>
              <h4 className="text-base font-bold">Unit 3 Web Service Mastered!</h4>
              <p className="text-xs text-emerald-100">
                You have successfully configured a multi-tier service consumer, serialized an operation envelope, and executed an end-to-end distributed transaction!
              </p>
            </div>
          </div>
          <div className="bg-white text-emerald-900 font-extrabold px-3.5 py-1.5 rounded-xl text-xs shadow-xs">
            Lab Complete
          </div>
        </div>
      )}
    </div>
  );
}
