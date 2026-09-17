import React, { useState } from 'react';
import { 
  FileCode, 
  Send, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Sliders, 
  RotateCcw, 
  Sparkles,
  Info,
  Server,
  Smartphone,
  Layers,
  HelpCircle
} from 'lucide-react';

export default function SoapMessageBuilder() {
  // Configurable fields
  const [accountNumber, setAccountNumber] = useState('AC-889021');
  const [transferAmount, setTransferAmount] = useState('250.00');
  const [currency, setCurrency] = useState('USD');
  const [includeSecurityHeader, setIncludeSecurityHeader] = useState(true);
  const [authToken, setAuthToken] = useState('SEC_TOKEN_JWT_7719');
  const [simulateFault, setSimulateFault] = useState(false);

  // Animation flow state
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmissionStep, setTransmissionStep] = useState(0); // 0: idle, 1: sending, 2: server, 3: response
  const [activeTab, setActiveTab] = useState('request'); // 'request' | 'response' | 'fault'

  const handleSendSoapRequest = () => {
    setIsTransmitting(true);
    setTransmissionStep(1);
    setActiveTab('request');

    setTimeout(() => {
      setTransmissionStep(2);
      setTimeout(() => {
        setTransmissionStep(3);
        setIsTransmitting(false);
        if (simulateFault) {
          setActiveTab('fault');
        } else {
          setActiveTab('response');
        }
      }, 900);
    }, 900);
  };

  const handleReset = () => {
    setAccountNumber('AC-889021');
    setTransferAmount('250.00');
    setCurrency('USD');
    setIncludeSecurityHeader(true);
    setSimulateFault(false);
    setTransmissionStep(0);
    setActiveTab('request');
  };

  // Generate XML Request
  const generatedRequestXml = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
               xmlns:bank="http://securebanking.org/fundsTransfer"
               xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
${includeSecurityHeader ? `  <!-- 1. Header (Optional routing & security) -->
  <soap:Header>
    <wsse:Security>
      <wsse:BinarySecurityToken>${authToken}</wsse:BinarySecurityToken>
    </wsse:Security>
  </soap:Header>` : `  <!-- Header omitted -->`}

  <!-- 2. Body (Mandatory operation payload) -->
  <soap:Body>
    <bank:ExecuteTransferRequest>
      <bank:targetAccount>${accountNumber}</bank:targetAccount>
      <bank:amount currency="${currency}">${transferAmount}</bank:amount>
    </bank:ExecuteTransferRequest>
  </soap:Body>
</soap:Envelope>`;

  // Generate XML Success Response
  const generatedResponseXml = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
               xmlns:bank="http://securebanking.org/fundsTransfer">
  <soap:Body>
    <bank:ExecuteTransferResponse>
      <bank:transactionId>TX-2026-9901</bank:transactionId>
      <bank:status>CLEARED</bank:status>
      <bank:timestamp>2026-09-18T00:30:00Z</bank:timestamp>
      <bank:remainingBalance currency="${currency}">14250.00</bank:remainingBalance>
    </bank:ExecuteTransferResponse>
  </soap:Body>
</soap:Envelope>`;

  // Generate XML Fault Response
  const generatedFaultXml = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <soap:Fault>
      <faultcode>soap:Client</faultcode>
      <faultstring>Authentication Token Expired or Invalid Account Format</faultstring>
      <detail>
        <errorCode>ERR_AUTH_REJECTED</errorCode>
        <message>The WS-Security token provided is no longer authorized for funds transfers.</message>
      </detail>
    </soap:Fault>
  </soap:Body>
</soap:Envelope>`;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Top Header */}
      <div className="bg-slate-900 text-white px-5 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-500/20 text-purple-400 rounded-xl border border-purple-500/30">
            <Layers size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold">SOAP Protocol &amp; Envelope Architecture Builder</h3>
            <p className="text-xs text-slate-400">
              Interactive XML message envelope constructor: Envelope &rarr; Header &rarr; Body &rarr; Fault
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono bg-purple-950 text-purple-300 px-2.5 py-1 rounded border border-purple-800">
            W3C SOAP 1.1 / 1.2
          </span>
        </div>
      </div>

      {/* Animated Request-Response Wire Stepper */}
      <div className="bg-purple-50/70 px-5 py-3 border-b border-purple-100">
        <div className="flex flex-wrap items-center justify-between text-xs gap-3">
          {/* Client Node */}
          <div className={`flex items-center gap-2 p-2 rounded-xl transition ${
            transmissionStep === 0 || transmissionStep === 1 || transmissionStep === 3
              ? 'bg-white shadow-xs border border-purple-200 text-purple-950 font-bold'
              : 'text-slate-500'
          }`}>
            <Smartphone size={16} className="text-purple-600" />
            <span>Service Consumer</span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[11px] text-purple-700">
            <span className={transmissionStep === 1 ? 'animate-pulse font-bold text-indigo-600' : 'text-slate-400'}>
              SOAP Request &rarr;
            </span>
            <ArrowRight size={14} className={transmissionStep === 1 ? 'text-indigo-600 animate-bounce' : 'text-slate-300'} />
          </div>

          {/* Service Node */}
          <div className={`flex items-center gap-2 p-2 rounded-xl transition ${
            transmissionStep === 2
              ? 'bg-white shadow-xs border border-indigo-300 text-indigo-950 font-bold'
              : 'text-slate-500'
          }`}>
            <Server size={16} className="text-indigo-600" />
            <span>SOAP Service Endpoint</span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[11px] text-purple-700">
            <ArrowRight size={14} className={transmissionStep === 3 ? 'text-emerald-600 animate-bounce' : 'text-slate-300'} />
            <span className={transmissionStep === 3 ? 'animate-pulse font-bold text-emerald-600' : 'text-slate-400'}>
              &larr; {simulateFault ? 'SOAP Fault' : 'SOAP Response'}
            </span>
          </div>

          {/* Action Trigger */}
          <button
            onClick={handleSendSoapRequest}
            disabled={isTransmitting}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-semibold text-xs rounded-xl shadow-sm flex items-center gap-1.5 transition"
          >
            <Send size={13} className={isTransmitting ? 'animate-spin' : ''} />
            <span>{isTransmitting ? 'Transmitting XML...' : 'Send SOAP Request'}</span>
          </button>
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
        {/* Left Column: Interactive Parameters */}
        <div className="lg:col-span-5 border-r border-slate-200 p-5 bg-slate-50 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-xs text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <Sliders size={14} className="text-purple-600" />
              <span>Configure SOAP Envelope</span>
            </h4>
            <button
              onClick={handleReset}
              className="text-xs text-slate-400 hover:text-slate-700 flex items-center gap-1"
            >
              <RotateCcw size={12} />
              <span>Reset</span>
            </button>
          </div>

          {/* Envelope Tree Overview */}
          <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-mono space-y-1 text-slate-700">
            <div className="font-bold text-purple-700">&lt;soap:Envelope&gt;</div>
            <div className="pl-3 border-l-2 border-slate-200">
              ├─ &lt;soap:Header&gt; <span className="text-slate-400">{includeSecurityHeader ? '(WS-Security Token)' : '(None)'}</span>
            </div>
            <div className="pl-3 border-l-2 border-slate-200">
              └─ &lt;soap:Body&gt; <span className="text-emerald-700 font-semibold">(ExecuteTransferRequest)</span>
            </div>
          </div>

          {/* Parameters Form */}
          <div className="space-y-3 text-xs">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Target Account Number:</label>
              <input
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Transfer Amount:</label>
                <input
                  type="text"
                  value={transferAmount}
                  onChange={(e) => setTransferAmount(e.target.value)}
                  className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono"
                />
              </div>
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Currency:</label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold"
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="INR">INR (₹)</option>
                </select>
              </div>
            </div>

            {/* Header Toggle */}
            <div className="pt-2 border-t border-slate-200">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={includeSecurityHeader}
                  onChange={(e) => setIncludeSecurityHeader(e.target.checked)}
                  className="rounded text-purple-600 focus:ring-purple-500"
                />
                <span className="font-semibold text-slate-800">Include &lt;soap:Header&gt; (WS-Security)</span>
              </label>
              {includeSecurityHeader && (
                <input
                  type="text"
                  value={authToken}
                  onChange={(e) => setAuthToken(e.target.value)}
                  className="w-full mt-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono text-purple-900"
                  placeholder="Security token string..."
                />
              )}
            </div>

            {/* Simulate Fault Toggle */}
            <div className="pt-2 border-t border-slate-200">
              <label className="flex items-center gap-2 cursor-pointer select-none text-rose-700">
                <input
                  type="checkbox"
                  checked={simulateFault}
                  onChange={(e) => setSimulateFault(e.target.checked)}
                  className="rounded text-rose-600 focus:ring-rose-500"
                />
                <span className="font-semibold">Simulate &lt;soap:Fault&gt; Error Response</span>
              </label>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Forces the service to return a standardized SOAP Fault envelope containing faultcode and faultstring.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: XML Code Viewer */}
        <div className="lg:col-span-7 flex flex-col bg-slate-950 text-slate-100">
          <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setActiveTab('request')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition ${
                  activeTab === 'request'
                    ? 'bg-purple-900/60 text-purple-300 border border-purple-700'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                SOAP Request
              </button>
              <button
                onClick={() => setActiveTab('response')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition ${
                  activeTab === 'response'
                    ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-700'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                SOAP Response
              </button>
              <button
                onClick={() => setActiveTab('fault')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition ${
                  activeTab === 'fault'
                    ? 'bg-rose-900/60 text-rose-300 border border-rose-700'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                SOAP Fault
              </button>
            </div>

            <span className="text-[11px] text-slate-400 font-mono">
              application/soap+xml
            </span>
          </div>

          <div className="p-4 flex-1 overflow-x-auto">
            <pre className={`font-mono text-xs leading-relaxed ${
              activeTab === 'request' 
                ? 'text-purple-300' 
                : activeTab === 'response' 
                ? 'text-emerald-300' 
                : 'text-rose-300'
            }`}>
              {activeTab === 'request' && generatedRequestXml}
              {activeTab === 'response' && generatedResponseXml}
              {activeTab === 'fault' && generatedFaultXml}
            </pre>
          </div>

          {/* Description bar */}
          <div className="p-3 bg-slate-900/80 border-t border-slate-800 text-xs text-slate-400">
            {activeTab === 'request' && (
              <span>The client sends a standardized <code className="text-purple-300">&lt;soap:Envelope&gt;</code> over HTTP POST containing target parameters.</span>
            )}
            {activeTab === 'response' && (
              <span className="text-emerald-400">Transaction completed. The server responds with status CLEARED and an updated account balance.</span>
            )}
            {activeTab === 'fault' && (
              <span className="text-rose-400">Standardized error envelope. Downstream clients parse &lt;faultcode&gt; and &lt;faultstring&gt; to catch exceptions.</span>
            )}
          </div>
        </div>
      </div>

      {/* Educational Note */}
      <div className="p-4 bg-purple-50/70 border-t border-purple-100 text-xs text-purple-950 flex items-start gap-2.5">
        <Info size={16} className="text-purple-600 shrink-0 mt-0.5" />
        <div>
          <strong className="text-purple-900">SOAP Structure Rules: </strong>
          The <code className="bg-purple-100 px-1 py-0.5 rounded">&lt;soap:Envelope&gt;</code> root is mandatory. If present, <code className="bg-purple-100 px-1 py-0.5 rounded">&lt;soap:Header&gt;</code> must be the first child. The <code className="bg-purple-100 px-1 py-0.5 rounded">&lt;soap:Body&gt;</code> is mandatory and contains the call parameters or the <code className="bg-purple-100 px-1 py-0.5 rounded">&lt;soap:Fault&gt;</code> element if an error occurred.
        </div>
      </div>
    </div>
  );
}
