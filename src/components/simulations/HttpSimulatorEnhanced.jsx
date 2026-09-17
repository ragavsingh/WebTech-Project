import React, { useState } from 'react';
import { 
  Send, 
  RotateCcw, 
  Globe, 
  Server, 
  ArrowRight, 
  ArrowDown, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Play,
  HelpCircle,
  Sparkles
} from 'lucide-react';

export default function HttpSimulatorEnhanced() {
  const [method, setMethod] = useState('GET');
  const [urlPath, setUrlPath] = useState('/index.html');
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [step, setStep] = useState(0); // 0: idle, 1: sending request, 2: server processing, 3: sending response, 4: rendered
  const [selectedStatusCode, setSelectedStatusCode] = useState(200);

  const statusCodes = {
    200: { name: '200 OK', family: '2xx Success', color: 'emerald', desc: 'The request has succeeded. For GET, the resource has been fetched and is transmitted in the message body.', example: 'GET /index.html -> 200 OK with HTML document' },
    201: { name: '201 Created', family: '2xx Success', color: 'emerald', desc: 'The request has succeeded and has led to the creation of a new resource on the server.', example: 'POST /api/users -> 201 Created with Location: /api/users/42' },
    301: { name: '301 Moved Permanently', family: '3xx Redirection', color: 'blue', desc: 'The URL of the requested resource has been changed permanently. The new URL is given in the Location header.', example: 'GET http://example.com -> 301 Redirect to https://example.com' },
    400: { name: '400 Bad Request', family: '4xx Client Error', color: 'amber', desc: 'The server cannot process the request due to perceived client error (e.g., malformed syntax or invalid JSON).', example: 'POST /api/login with invalid unclosed JSON bracket' },
    401: { name: '401 Unauthorized', family: '4xx Client Error', color: 'amber', desc: 'Semantically unauthenticated. The client must authenticate itself to get the requested response.', example: 'GET /api/account without Bearer Authorization header' },
    403: { name: '403 Forbidden', family: '4xx Client Error', color: 'amber', desc: 'The client identity is recognized, but the server refuses to authorize access to the resource.', example: 'Regular user requesting GET /api/admin/system-logs' },
    404: { name: '404 Not Found', family: '4xx Client Error', color: 'amber', desc: 'The server cannot find the requested resource. The path does not map to any active route or file.', example: 'GET /non-existent-page.html' },
    500: { name: '500 Internal Server Error', family: '5xx Server Error', color: 'red', desc: 'The server encountered an unexpected condition that prevented it from fulfilling the request.', example: 'Uncaught database connection exception in server runtime' }
  };

  const handleSend = () => {
    setIsTransmitting(true);
    setStep(1); // client sending

    setTimeout(() => {
      setStep(2); // server processing
      setTimeout(() => {
        setStep(3); // server responding
        setTimeout(() => {
          setStep(4); // browser rendering complete
          setIsTransmitting(false);
        }, 800);
      }, 700);
    }, 800);
  };

  const handleReset = () => {
    setStep(0);
    setIsTransmitting(false);
  };

  // Determine realistic response based on inputs
  const getResponseData = () => {
    if (urlPath === '/non-existent' || urlPath.includes('404')) {
      return {
        code: 404,
        text: 'Not Found',
        body: '<html><body><h1>404 Not Found</h1><p>The requested file does not exist.</p></body></html>'
      };
    }
    if (method === 'POST') {
      return {
        code: 201,
        text: 'Created',
        body: '{\n  "status": "success",\n  "message": "Resource created successfully",\n  "id": 9041\n}'
      };
    }
    if (method === 'DELETE') {
      return {
        code: 200,
        text: 'OK',
        body: '{\n  "status": "deleted",\n  "resource": "' + urlPath + '"\n}'
      };
    }
    return {
      code: 200,
      text: 'OK',
      body: '<!DOCTYPE html>\n<html>\n  <head><title>WebTech</title></head>\n  <body>\n    <h1>Welcome to ' + urlPath + '</h1>\n  </body>\n</html>'
    };
  };

  const resp = getResponseData();

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card overflow-hidden space-y-6">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Animated HTTP Client-Server Simulator</h3>
            <p className="text-xs text-slate-500">Formulate requests, follow the animated wire transit, and inspect headers</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleSend}
            disabled={isTransmitting}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{isTransmitting ? 'Transmitting...' : 'Send HTTP Request'}</span>
          </button>
          <button
            onClick={handleReset}
            className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-500"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Control Bar: Verb & URL Path */}
      <div className="px-6 py-2 grid grid-cols-1 sm:grid-cols-12 gap-3 text-xs">
        <div className="sm:col-span-4">
          <label className="block text-slate-500 font-semibold mb-1">HTTP Verb / Method</label>
          <div className="flex space-x-1">
            {['GET', 'POST', 'PUT', 'DELETE'].map(m => (
              <button
                key={m}
                onClick={() => { setMethod(m); setStep(0); }}
                className={`flex-1 py-1.5 rounded-lg font-mono font-bold text-xs transition-all ${
                  method === m
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="sm:col-span-8">
          <label className="block text-slate-500 font-semibold mb-1">Target Resource Path</label>
          <div className="flex items-center bg-slate-50 rounded-lg border border-slate-200 px-3 py-1.5 shadow-2xs">
            <span className="text-slate-400 font-mono mr-1">https://example.com</span>
            <input
              type="text"
              value={urlPath}
              onChange={(e) => { setUrlPath(e.target.value); setStep(0); }}
              className="w-full bg-transparent font-mono text-xs text-slate-800 focus:outline-none font-semibold"
              placeholder="/index.html"
            />
          </div>
        </div>
      </div>

      {/* Animated Visual Flow Diagram */}
      <div className="px-6 py-4">
        <div className="bg-slate-50/70 rounded-2xl p-5 border border-slate-200/80 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-200/70">
            <span>Client Browser (Chrome/Safari)</span>
            <span>TCP Socket / Port 443</span>
            <span>Web Server (Nginx/Node.js)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            {/* Browser Node */}
            <div className={`p-4 rounded-xl border transition-all text-center space-y-1.5 ${
              step === 1 || step === 4
                ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-200'
                : 'bg-white border-slate-200'
            }`}>
              <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mx-auto font-bold text-xs">
                💻
              </div>
              <h5 className="text-xs font-bold text-slate-900">Browser Client</h5>
              <div className="text-[10px] text-slate-500">
                {step === 0 && 'Ready to send'}
                {step === 1 && <span className="text-indigo-600 font-semibold">Packaging HTTP packet...</span>}
                {step === 2 && 'Waiting for server response...'}
                {step === 3 && 'Inbound stream arriving...'}
                {step === 4 && <span className="text-emerald-600 font-bold">Document Rendered!</span>}
              </div>
            </div>

            {/* Wire Packet Animation */}
            <div className="flex flex-col items-center justify-center space-y-2 py-2">
              {step === 1 && (
                <div className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-[11px] font-mono animate-bounce flex items-center gap-1 shadow-md">
                  <span>{method} {urlPath} &rarr;</span>
                </div>
              )}
              {step === 2 && (
                <div className="px-3 py-1.5 rounded-lg bg-amber-500 text-white text-[11px] font-mono animate-pulse shadow-md">
                  Server Processing...
                </div>
              )}
              {step === 3 && (
                <div className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-[11px] font-mono animate-bounce flex items-center gap-1 shadow-md">
                  <span>&larr; HTTP {resp.code} {resp.text}</span>
                </div>
              )}
              {step === 0 && (
                <span className="text-[11px] text-slate-400 italic">Click "Send HTTP Request"</span>
              )}
              {step === 4 && (
                <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Round-Trip Cycle Complete
                </span>
              )}
            </div>

            {/* Server Node */}
            <div className={`p-4 rounded-xl border transition-all text-center space-y-1.5 ${
              step === 2 || step === 3
                ? 'bg-violet-50 border-violet-500 ring-2 ring-violet-200'
                : 'bg-white border-slate-200'
            }`}>
              <div className="w-8 h-8 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center mx-auto font-bold text-xs">
                🖥️
              </div>
              <h5 className="text-xs font-bold text-slate-900">Web Server</h5>
              <div className="text-[10px] text-slate-500">
                {step < 2 && 'Listening on :443'}
                {step === 2 && <span className="text-violet-700 font-semibold">Reading disk / routing route</span>}
                {step >= 3 && 'Response emitted'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wire Inspection: Request line, headers, and response */}
      <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
        {/* Outgoing Wire */}
        <div className="bg-slate-900 text-slate-200 p-4 rounded-xl border border-slate-800 space-y-1.5 shadow-inner">
          <div className="text-slate-400 text-[10px] uppercase font-bold border-b border-slate-800 pb-1 flex justify-between">
            <span>Outgoing Wire Request</span>
            <span>HTTP/1.1</span>
          </div>
          <div className="text-emerald-400 font-bold">{method} {urlPath} HTTP/1.1</div>
          <div className="text-slate-400">Host: example.com</div>
          <div className="text-slate-400">User-Agent: Mozilla/5.0 (WebTech Lab)</div>
          <div className="text-slate-400">Accept: text/html,application/json</div>
          {method === 'POST' && (
            <>
              <div className="text-slate-400">Content-Type: application/json</div>
              <div className="text-indigo-300 pt-1 border-t border-slate-800">
                {JSON.stringify({ action: "create", timestamp: Date.now() }, null, 2)}
              </div>
            </>
          )}
        </div>

        {/* Inbound Response Wire */}
        <div className="bg-slate-900 text-slate-200 p-4 rounded-xl border border-slate-800 space-y-1.5 shadow-inner">
          <div className="text-slate-400 text-[10px] uppercase font-bold border-b border-slate-800 pb-1 flex justify-between">
            <span>Incoming Wire Response</span>
            <span>Status</span>
          </div>
          {step >= 3 ? (
            <>
              <div className="text-emerald-400 font-bold">HTTP/1.1 {resp.code} {resp.text}</div>
              <div className="text-slate-400">Date: {new Date().toUTCString()}</div>
              <div className="text-slate-400">Content-Type: {method === 'POST' ? 'application/json' : 'text/html'}</div>
              <div className="text-slate-400">Connection: keep-alive</div>
              <div className="text-emerald-300 pt-2 border-t border-slate-800 whitespace-pre-wrap max-h-28 overflow-y-auto">
                {resp.body}
              </div>
            </>
          ) : (
            <div className="text-slate-500 italic py-6 text-center">
              Awaiting transmission...
            </div>
          )}
        </div>
      </div>

      {/* Interactive Status Code Explorer */}
      <div className="p-6 bg-slate-50 border-t border-slate-200/80 space-y-4">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Interactive HTTP Status Code Explorer
          </h4>
        </div>
        <p className="text-xs text-slate-500">
          Click any HTTP 3-digit status code to understand its protocol meaning, family classification, and real-world example:
        </p>

        {/* Status code pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2">
          {Object.keys(statusCodes).map(codeKey => {
            const num = Number(codeKey);
            const isSelected = selectedStatusCode === num;
            return (
              <button
                key={num}
                onClick={() => setSelectedStatusCode(num)}
                className={`py-2 px-1 rounded-xl text-xs font-mono font-bold transition-all text-center ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-200 scale-105'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {num}
              </button>
            );
          })}
        </div>

        {/* Details for Selected Status Code */}
        {statusCodes[selectedStatusCode] && (
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-sm text-indigo-700">
                HTTP {statusCodes[selectedStatusCode].name}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                {statusCodes[selectedStatusCode].family}
              </span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              {statusCodes[selectedStatusCode].desc}
            </p>
            <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500">
              <strong className="text-slate-700">Example Trigger:</strong> <code>{statusCodes[selectedStatusCode].example}</code>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
