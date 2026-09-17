import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Smartphone, 
  Laptop, 
  Database, 
  Cpu, 
  ArrowRight, 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  CheckCircle2, 
  FileCode, 
  Layers, 
  Sparkles,
  Info,
  ShieldCheck
} from 'lucide-react';

const ARCH_STAGES = [
  {
    id: 1,
    name: '1. Service Consumer (Client)',
    short: 'Client Request',
    desc: 'The client application (Mobile app, Web SPA, or IoT device) constructs a standardized request message (JSON or XML) targeting a URI endpoint.',
    actor: 'Client / Consumer',
    output: 'HTTP POST /api/orders { "itemId": "A-901", "qty": 2 }'
  },
  {
    id: 2,
    name: '2. Wire Transit (Request Payload)',
    short: 'Network Transit',
    desc: 'The request is packaged into TCP packets and transmitted over HTTP/HTTPS across the internet to the web service host.',
    actor: 'Network Socket',
    output: 'HTTPS Port 443 Encrypted Payload'
  },
  {
    id: 3,
    name: '3. Web Service Gateway',
    short: 'Web Service Endpoint',
    desc: 'The web service receives the request, terminates SSL/TLS, validates authentication credentials, and deserializes the incoming payload.',
    actor: 'Service Provider / Gateway',
    output: 'Deserialized OrderRequest Object'
  },
  {
    id: 4,
    name: '4. Business Logic Layer',
    short: 'Business Logic',
    desc: 'Enterprise business logic executes: verifies inventory availability, checks credit limits, and calculates tax rates.',
    actor: 'Application Service',
    output: 'OrderValidationResult: APPROVED'
  },
  {
    id: 5,
    name: '5. Data Persistence Layer',
    short: 'Database / Storage',
    desc: 'The service reads/writes from the database or external legacy mainframe via an ACID transaction.',
    actor: 'Database / Enterprise Store',
    output: 'SQL: INSERT INTO orders VALUES (...) -> Success'
  },
  {
    id: 6,
    name: '6. Service Response',
    short: 'Response Return',
    desc: 'The service serializes the response envelope (HTTP 200 OK with confirmation code) and delivers it back across the wire to the consumer.',
    actor: 'Consumer Rendering',
    output: 'HTTP 200 OK { "orderId": "ORD-2026-88", "status": "CONFIRMED" }'
  }
];

export default function WebServiceArchitectureSimulator() {
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [protocol, setProtocol] = useState('json'); // 'json' | 'soap'
  const [clientType, setClientType] = useState('mobile'); // 'mobile' | 'web' | 'enterprise'

  // Auto-play timer
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStage(prev => {
          if (prev >= ARCH_STAGES.length) {
            setIsPlaying(false);
            return ARCH_STAGES.length;
          }
          return prev + 1;
        });
      }, 1600);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStage(1);
  };

  const handleStep = () => {
    if (currentStage < ARCH_STAGES.length) {
      setCurrentStage(prev => prev + 1);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Header */}
      <div className="bg-slate-900 text-white px-5 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-xl border border-indigo-500/30">
            <Server size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold">Web Service Architecture &amp; Data Exchange Pipeline</h3>
            <p className="text-xs text-slate-400">
              Interactive trace: Client &rarr; Request &rarr; Web Service &rarr; Business Logic &rarr; Data &rarr; Response
            </p>
          </div>
        </div>

        {/* Protocol Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Message Format:</span>
          <div className="flex bg-slate-800 p-0.5 rounded-lg border border-slate-700">
            <button
              onClick={() => setProtocol('json')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition ${
                protocol === 'json' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              REST / JSON
            </button>
            <button
              onClick={() => setProtocol('soap')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition ${
                protocol === 'soap' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              SOAP / XML
            </button>
          </div>
        </div>
      </div>

      {/* Visual Pipeline Bar */}
      <div className="bg-slate-100/90 px-4 py-3 border-b border-slate-200">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {ARCH_STAGES.map(stage => {
            const isActive = currentStage === stage.id;
            const isCompleted = currentStage > stage.id;

            return (
              <button
                key={stage.id}
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentStage(stage.id);
                }}
                className={`p-2.5 rounded-xl text-left border transition relative ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm'
                    : isCompleted
                    ? 'bg-white border-slate-300 text-slate-800 font-medium'
                    : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${
                    isActive ? 'text-indigo-100' : 'text-slate-400'
                  }`}>
                    Stage {stage.id}
                  </span>
                  {isCompleted && <CheckCircle2 size={12} className="text-emerald-500" />}
                </div>
                <div className="font-bold text-xs truncate">{stage.short}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Player Controls Bar */}
      <div className="px-5 py-3 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-sm flex items-center gap-1.5 transition"
          >
            {isPlaying ? <Pause size={13} /> : <Play size={13} />}
            <span>{isPlaying ? 'Pause' : 'Animate Flow'}</span>
          </button>
          <button
            onClick={handleStep}
            disabled={currentStage >= ARCH_STAGES.length || isPlaying}
            className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 text-xs font-semibold rounded-lg border border-slate-300 flex items-center gap-1.5 transition"
          >
            <span>Next Stage</span>
            <ChevronRight size={13} />
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition flex items-center gap-1"
          >
            <RotateCcw size={13} />
            <span>Reset</span>
          </button>
        </div>

        {/* Client Type Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500">Service Consumer:</span>
          <div className="flex gap-1">
            <button
              onClick={() => setClientType('mobile')}
              className={`px-2.5 py-1 text-xs rounded-lg border flex items-center gap-1 ${
                clientType === 'mobile' ? 'bg-indigo-50 border-indigo-300 text-indigo-700 font-semibold' : 'bg-slate-50 text-slate-600 border-slate-200'
              }`}
            >
              <Smartphone size={12} />
              <span>Mobile App</span>
            </button>
            <button
              onClick={() => setClientType('web')}
              className={`px-2.5 py-1 text-xs rounded-lg border flex items-center gap-1 ${
                clientType === 'web' ? 'bg-indigo-50 border-indigo-300 text-indigo-700 font-semibold' : 'bg-slate-50 text-slate-600 border-slate-200'
              }`}
            >
              <Laptop size={12} />
              <span>Web Browser</span>
            </button>
            <button
              onClick={() => setClientType('enterprise')}
              className={`px-2.5 py-1 text-xs rounded-lg border flex items-center gap-1 ${
                clientType === 'enterprise' ? 'bg-indigo-50 border-indigo-300 text-indigo-700 font-semibold' : 'bg-slate-50 text-slate-600 border-slate-200'
              }`}
            >
              <Server size={12} />
              <span>ERP Server</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Stage Display */}
      <div className="p-6 bg-slate-50/60">
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs mb-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">
                {currentStage}
              </span>
              <span>{ARCH_STAGES[currentStage - 1].name}</span>
            </h4>
            <span className="text-xs font-mono bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded border border-slate-200">
              Active Actor: {ARCH_STAGES[currentStage - 1].actor}
            </span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            {ARCH_STAGES[currentStage - 1].desc}
          </p>

          {/* Wire Payload Inspection */}
          <div className="bg-slate-950 p-4 rounded-xl font-mono text-xs text-slate-200">
            <div className="flex items-center justify-between text-slate-400 text-[11px] mb-2">
              <span className="uppercase font-bold tracking-wider">// Stage Payload Inspector</span>
              <span>{protocol.toUpperCase()} Envelope</span>
            </div>

            {protocol === 'json' ? (
              <div className="text-emerald-400 leading-relaxed">
                {currentStage === 1 && (
                  `// 1. Client Constructs Request
POST /api/v1/orders HTTP/1.1
Host: payment-service.acme.org
Content-Type: application/json
Authorization: Bearer jwt_token_abc123

{
  "customerId": "CUST-9921",
  "itemId": "ITEM-GPU-5090",
  "quantity": 1,
  "paymentMethod": "CC_TOKEN_4481"
}`
                )}
                {currentStage === 2 && (
                  `// 2. Wire Packet in Transit
[TCP SYN/ACK] Established -> TLS 1.3 Handshake Complete
Cipher: TLS_AES_256_GCM_SHA384
Frame: 488 bytes transmitted across intermediate gateways`
                )}
                {currentStage === 3 && (
                  `// 3. Web Service Gateway Ingestion
Reverse Proxy: Nginx / Envoy
Status: Authenticated (JWT Validated for CUST-9921)
Routing to internal microservice cluster: order-service:8080`
                )}
                {currentStage === 4 && (
                  `// 4. Business Logic Validation
Executing: OrderProcessingEngine.validateOrder()
- Checking stock inventory for ITEM-GPU-5090: AVAILABLE (Qty: 14)
- Fraud score calculation: 0.02 (Risk Low)
- Applying 5% promotional discount`
                )}
                {currentStage === 5 && (
                  `// 5. Database Transaction Execution
BEGIN TRANSACTION;
UPDATE inventory SET stock = stock - 1 WHERE item_id = 'ITEM-GPU-5090';
INSERT INTO orders (id, customer_id, total, status) VALUES ('ORD-8821', 'CUST-9921', 1499.00, 'CONFIRMED');
COMMIT;`
                )}
                {currentStage === 6 && (
                  `// 6. Response Transmitted to Consumer
HTTP/1.1 200 OK
Content-Type: application/json
Date: Fri, 18 Sep 2026 00:30:00 GMT

{
  "success": true,
  "orderId": "ORD-8821",
  "totalCharged": 1499.00,
  "trackingNumber": "TRK-GLOBAL-7782",
  "status": "CONFIRMED"
}`
                )}
              </div>
            ) : (
              <div className="text-purple-300 leading-relaxed">
                {currentStage <= 3 ? (
                  `<!-- SOAP 1.2 Request Envelope -->
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
               xmlns:ord="http://ecommerce.org/orders">
  <soap:Header>
    <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
      <wsse:UsernameToken>
        <wsse:Username>ClientApp_01</wsse:Username>
      </wsse:UsernameToken>
    </wsse:Security>
  </soap:Header>
  <soap:Body>
    <ord:CreateOrderRequest>
      <ord:customerId>CUST-9921</ord:customerId>
      <ord:itemId>ITEM-GPU-5090</ord:itemId>
      <ord:quantity>1</ord:quantity>
    </ord:CreateOrderRequest>
  </soap:Body>
</soap:Envelope>`
                ) : (
                  `<!-- SOAP 1.2 Response Envelope -->
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
               xmlns:ord="http://ecommerce.org/orders">
  <soap:Body>
    <ord:CreateOrderResponse>
      <ord:orderId>ORD-8821</ord:orderId>
      <ord:status>CONFIRMED</ord:status>
      <ord:chargedAmount currency="USD">1499.00</ord:chargedAmount>
    </ord:CreateOrderResponse>
  </soap:Body>
</soap:Envelope>`
                )}
              </div>
            )}
          </div>
        </div>

        {/* 3 Core Roles Callout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 bg-white rounded-xl border border-slate-200">
            <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
              <Smartphone size={14} className="text-indigo-600" />
              <span>1. Service Consumer</span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Any client application that requests an operation by sending a standardized, machine-readable envelope over HTTP.
            </p>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-slate-200">
            <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
              <Server size={14} className="text-blue-600" />
              <span>2. Service Provider</span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              The hosting server that exposes network-addressable endpoints, implements business logic, and guarantees SLAs.
            </p>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-slate-200">
            <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
              <FileCode size={14} className="text-emerald-600" />
              <span>3. Data Exchange Protocol</span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Platform-independent data envelopes (XML/SOAP or JSON/REST) enabling disparate OSs and languages (Java, C#, Python) to interoperate seamlessly.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 bg-indigo-50/70 border-t border-indigo-100 text-xs text-indigo-950 flex items-start gap-2.5">
        <Info size={16} className="text-indigo-600 shrink-0 mt-0.5" />
        <div>
          <strong className="text-indigo-900">Definition of a Web Service: </strong>
          According to the W3C, a web service is a software system designed to support interoperable machine-to-machine interaction over a network. It has an interface described in a machine-processable format (such as WSDL or OpenAPI).
        </div>
      </div>
    </div>
  );
}
