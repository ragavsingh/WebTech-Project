import React, { useState } from 'react';
import { 
  Send, 
  RotateCcw, 
  Globe, 
  Server, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Sliders, 
  Code,
  ShieldCheck,
  ShieldAlert
} from 'lucide-react';

export default function HttpLifecycleSimulator() {
  const [method, setMethod] = useState('GET');
  const [endpoint, setEndpoint] = useState('/api/v1/articles');
  const [includeAuth, setIncludeAuth] = useState(true);
  const [latency, setLatency] = useState(250); // ms
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [response, setResponse] = useState(null);

  const endpoints = [
    { path: '/api/v1/articles', label: 'Get Articles (Public)' },
    { path: '/api/v1/user/profile', label: 'User Profile (Protected)' },
    { path: '/api/v1/checkout', label: 'Create Order (POST)' },
    { path: '/api/v1/missing-resource', label: 'Unknown Endpoint (404)' }
  ];

  const handleSend = () => {
    setIsTransmitting(true);
    setResponse(null);

    setTimeout(() => {
      setIsTransmitting(false);

      if (endpoint === '/api/v1/missing-resource') {
        setResponse({
          status: 404,
          statusText: 'Not Found',
          headers: {
            'Content-Type': 'application/json',
            'Date': new Date().toUTCString(),
            'Server': 'WebTech-Edge/2.1'
          },
          body: JSON.stringify({ error: 'The requested route was not found', code: 404 }, null, 2)
        });
      } else if (endpoint === '/api/v1/user/profile' && !includeAuth) {
        setResponse({
          status: 401,
          statusText: 'Unauthorized',
          headers: {
            'Content-Type': 'application/json',
            'WWW-Authenticate': 'Bearer error="invalid_token"',
            'Date': new Date().toUTCString()
          },
          body: JSON.stringify({ error: 'Missing or expired Bearer token in Authorization header', code: 401 }, null, 2)
        });
      } else if (method === 'POST') {
        setResponse({
          status: 201,
          statusText: 'Created',
          headers: {
            'Content-Type': 'application/json',
            'Location': '/api/v1/orders/ord_9941',
            'Date': new Date().toUTCString()
          },
          body: JSON.stringify({ success: true, orderId: 'ord_9941', status: 'processing', total: 49.99 }, null, 2)
        });
      } else {
        setResponse({
          status: 200,
          statusText: 'OK',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, stale-while-revalidate=60',
            'ETag': 'W/"7b8-18e38f9d020"',
            'Date': new Date().toUTCString()
          },
          body: JSON.stringify([
            { id: 1, title: 'Understanding DNS & Root Nameservers', category: 'Networking' },
            { id: 2, title: 'Mastering HTTP Headers & Multiplexing', category: 'Architecture' }
          ], null, 2)
        });
      }
    }, latency);
  };

  const getStatusColor = (status) => {
    if (status >= 200 && status < 300) return 'text-emerald-700 bg-emerald-50 border-emerald-200';
    if (status >= 300 && status < 400) return 'text-blue-700 bg-blue-50 border-blue-200';
    if (status >= 400 && status < 500) return 'text-amber-700 bg-amber-50 border-amber-200';
    return 'text-red-700 bg-red-50 border-red-200';
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card overflow-hidden">
      {/* Header Controls */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">HTTP Request-Response Inspector</h3>
            <p className="text-xs text-slate-500">Configure headers, methods and simulate round-trip transport</p>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleSend}
          disabled={isTransmitting}
          className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-semibold shadow-xs transition-colors"
        >
          <Send className="w-3.5 h-3.5" />
          <span>{isTransmitting ? 'Transmitting...' : 'Send Request'}</span>
        </button>
      </div>

      {/* Simulator Request Builder Bar */}
      <div className="p-4 bg-slate-50/30 border-b border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
        <div>
          <label className="block text-slate-500 font-medium mb-1">HTTP Verb / Method</label>
          <div className="flex space-x-1.5">
            {['GET', 'POST', 'PUT', 'DELETE'].map(m => (
              <button
                key={m}
                onClick={() => { setMethod(m); setResponse(null); }}
                className={`px-2.5 py-1 rounded font-mono font-bold text-xs transition-colors ${
                  method === m 
                    ? 'bg-indigo-600 text-white shadow-2xs' 
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-slate-500 font-medium mb-1">Resource Path</label>
          <select
            value={endpoint}
            onChange={(e) => { setEndpoint(e.target.value); setResponse(null); }}
            className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 font-mono focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            {endpoints.map(ep => (
              <option key={ep.path} value={ep.path}>{ep.path} — {ep.label}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-4 pt-4">
          <label className="flex items-center space-x-1.5 text-slate-700 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={includeAuth}
              onChange={(e) => { setIncludeAuth(e.target.checked); setResponse(null); }}
              className="rounded text-indigo-600 focus:ring-indigo-500 w-3.5 h-3.5"
            />
            <span>Include Authorization Header</span>
          </label>
        </div>
      </div>

      {/* Visual Round-Trip Canvas */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 bg-gradient-to-b from-white to-slate-50/40">
        {/* Left: Request Wire Payload */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-indigo-500" /> Outgoing Client Request
            </span>
            <span className="font-mono text-slate-400">HTTP/1.1</span>
          </div>

          <div className="bg-slate-900 text-slate-200 p-4 rounded-xl font-mono text-xs overflow-x-auto space-y-1.5 shadow-inner border border-slate-800">
            <div className="text-emerald-400 font-bold">
              {method} {endpoint} HTTP/1.1
            </div>
            <div className="text-slate-400">Host: api.webtech.dev</div>
            <div className="text-slate-400">User-Agent: WebTechPlayground/1.0</div>
            <div className="text-slate-400">Accept: application/json</div>
            {includeAuth ? (
              <div className="text-indigo-400">Authorization: Bearer eyJhbGciOiJIUzI1NiIsIn...</div>
            ) : (
              <div className="text-amber-400/80 italic">// No Authorization Header</div>
            )}
            {method === 'POST' && (
              <>
                <div className="text-slate-400">Content-Type: application/json</div>
                <div className="text-slate-500 pt-2 border-t border-slate-800">
                  {JSON.stringify({ plan: 'pro', items: ['unit-1-course'] }, null, 2)}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right: Server Response Payload */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-emerald-600" /> Server Inbound Response
            </span>
            {response && (
              <span className={`px-2 py-0.5 rounded-full text-xs font-mono font-bold border ${getStatusColor(response.status)}`}>
                {response.status} {response.statusText}
              </span>
            )}
          </div>

          {isTransmitting ? (
            <div className="h-44 rounded-xl border border-dashed border-indigo-200 bg-indigo-50/40 flex flex-col items-center justify-center text-xs text-indigo-600 space-y-2">
              <div className="w-5 h-5 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
              <span>Transmitting TCP packets across network...</span>
            </div>
          ) : response ? (
            <div className="bg-slate-900 text-slate-200 p-4 rounded-xl font-mono text-xs overflow-x-auto space-y-2 shadow-inner border border-slate-800">
              <div className="text-slate-400 text-[11px] pb-1.5 border-b border-slate-800 space-y-0.5">
                <div>HTTP/1.1 <strong className={response.status < 400 ? 'text-emerald-400' : 'text-amber-400'}>{response.status} {response.statusText}</strong></div>
                {Object.entries(response.headers).map(([k, v]) => (
                  <div key={k}><span className="text-slate-500">{k}:</span> {v}</div>
                ))}
              </div>
              <div className="text-emerald-300 whitespace-pre-wrap pt-1 max-h-36 overflow-y-auto">
                {response.body}
              </div>
            </div>
          ) : (
            <div className="h-44 rounded-xl border border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center text-xs text-slate-400 p-4 text-center">
              <span>Click "Send Request" above to trigger client-server round-trip inspection.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
