import React, { useState } from 'react';
import { 
  Send, 
  Code, 
  Key, 
  Clock, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Layers, 
  Terminal, 
  Database,
  Info,
  RefreshCw
} from 'lucide-react';

const ENDPOINTS = [
  {
    id: 'users',
    path: '/api/v1/users',
    method: 'GET',
    description: 'Retrieve a paginated list of registered web developers.',
    params: [{ key: 'role', defaultValue: 'frontend' }, { key: 'limit', defaultValue: '3' }],
    responses: {
      success: {
        status: 200,
        statusText: 'OK',
        body: {
          data: [
            { id: 'usr_101', name: 'Alice Chen', skills: ['React', 'CSS Custom Props', 'RDF'], tier: 'pro' },
            { id: 'usr_102', name: 'Carlos Ramos', skills: ['Ruby on Rails', 'PostgreSQL', 'REST'], tier: 'enterprise' },
            { id: 'usr_103', name: 'Zoya Patel', skills: ['Edge Functions', 'Cloudflare', 'TypeScript'], tier: 'free' }
          ],
          pagination: { total: 48, page: 1, perPage: 3 }
        }
      }
    }
  },
  {
    id: 'post_detail',
    path: '/api/v1/posts/42',
    method: 'GET',
    description: 'Fetch detailed article metadata and engagement metrics by resource ID.',
    params: [{ key: 'include_comments', defaultValue: 'true' }],
    responses: {
      success: {
        status: 200,
        statusText: 'OK',
        body: {
          id: 42,
          title: 'The Semantic Web: Why Linked Data Matters',
          authorId: 'usr_101',
          views: 1420,
          likes: 312,
          commentsCount: 2,
          comments: [
            { id: 'c1', user: 'Bob', text: 'Triples completely changed how I think about databases.' },
            { id: 'c2', user: 'Elena', text: 'JSON-LD is so much cleaner than old RDF/XML.' }
          ]
        }
      }
    }
  },
  {
    id: 'weather',
    path: '/api/v1/weather',
    method: 'GET',
    description: 'Get real-time meteorological observations for a geographical location.',
    params: [{ key: 'city', defaultValue: 'San Francisco' }, { key: 'units', defaultValue: 'metric' }],
    responses: {
      success: {
        status: 200,
        statusText: 'OK',
        body: {
          location: 'San Francisco, CA',
          coordinates: { lat: 37.7749, lon: -122.4194 },
          temperature: 18.5,
          units: 'celsius',
          condition: 'Partly Cloudy',
          humidity: 64,
          windSpeedKmh: 14.2
        }
      }
    }
  }
];

export default function OpenApiExplorerSimulator() {
  const [selectedEndpointId, setSelectedEndpointId] = useState('users');
  const [apiKey, setApiKey] = useState('wt_live_99a8b7c6d5e4f3');
  const [rateLimitRemaining, setRateLimitRemaining] = useState(58);
  const [requestHeaders, setRequestHeaders] = useState({
    Accept: 'application/json',
    'User-Agent': 'WebTechPlayground-Client/2.0'
  });
  const [paramsState, setParamsState] = useState({
    role: 'frontend',
    limit: '3'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [responseOutput, setResponseOutput] = useState(null);

  const endpoint = ENDPOINTS.find(e => e.id === selectedEndpointId);

  const handleSelectEndpoint = (ep) => {
    setSelectedEndpointId(ep.id);
    const newParams = {};
    ep.params.forEach(p => {
      newParams[p.key] = p.defaultValue;
    });
    setParamsState(newParams);
    setResponseOutput(null);
  };

  const handleParamChange = (key, val) => {
    setParamsState({ ...paramsState, [key]: val });
  };

  const handleSendRequest = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (!apiKey.trim()) {
        setResponseOutput({
          status: 401,
          statusText: 'Unauthorized',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'X-RateLimit-Limit': '60',
            'X-RateLimit-Remaining': String(rateLimitRemaining)
          },
          body: {
            error: 'AuthenticationRequired',
            message: 'Missing or invalid Authorization header. Provide a valid Bearer API key.'
          }
        });
        return;
      }

      const nextRemaining = Math.max(0, rateLimitRemaining - 1);
      setRateLimitRemaining(nextRemaining);

      setResponseOutput({
        status: endpoint.responses.success.status,
        statusText: endpoint.responses.success.statusText,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'X-RateLimit-Limit': '60',
          'X-RateLimit-Remaining': String(nextRemaining),
          'X-RateLimit-Reset': '1773820800',
          'Access-Control-Allow-Origin': '*'
        },
        body: endpoint.responses.success.body
      });
    }, 450);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-emerald-500/30">
              <Terminal className="w-3.5 h-3.5" /> RESTful Open API Explorer
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Open APIs & The Programmable Web
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Learn how Web 2.0 applications opened programmatic endpoints via HTTP, JSON payloads, Bearer token authentication, and rate limiting headers.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-mono text-emerald-300 border border-white/10 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" /> Rate Limit: {rateLimitRemaining}/60 req/min
            </div>
          </div>
        </div>

        {/* Endpoint Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-6">
          {ENDPOINTS.map((ep) => {
            const isSelected = ep.id === selectedEndpointId;
            return (
              <button
                key={ep.id}
                onClick={() => handleSelectEndpoint(ep)}
                className={`p-3 rounded-xl border text-left transition ${
                  isSelected
                    ? 'bg-white text-slate-900 border-white shadow'
                    : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-emerald-600 text-white font-mono text-[10px] font-bold">
                    {ep.method}
                  </span>
                  <span className="text-xs font-mono font-semibold truncate">{ep.path}</span>
                </div>
                <div className="text-[11px] opacity-75 truncate mt-1">
                  {ep.description}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Request Composer */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Request Configuration */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                <Code className="w-4 h-4 text-emerald-600" /> Request Parameters & Authentication
              </h4>

              {/* URL Preview */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-500 mb-1">Target Request URL</label>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-300 text-xs font-mono">
                  <span className="text-emerald-600 font-bold">GET</span>
                  <span className="text-slate-800 truncate">
                    https://api.webtech.org{endpoint.path}
                    {Object.keys(paramsState).length > 0 && `?${new URLSearchParams(paramsState).toString()}`}
                  </span>
                </div>
              </div>

              {/* API Key Header */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-500 mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-1"><Key className="w-3 h-3 text-amber-500" /> Authorization Header</span>
                  <span className="text-[10px] text-slate-400">Bearer Token</span>
                </label>
                <input
                  type="text"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Bearer token or leave blank to test 401 error"
                  className="w-full text-xs font-mono px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                />
              </div>

              {/* Query Params */}
              {endpoint.params.length > 0 && (
                <div className="space-y-2 pt-1 border-t border-slate-200">
                  <label className="block text-[11px] font-semibold text-slate-500">Query Parameters (URL Query String)</label>
                  {endpoint.params.map(p => (
                    <div key={p.key} className="flex items-center gap-2">
                      <span className="w-28 text-xs font-mono text-slate-600">{p.key}:</span>
                      <input
                        type="text"
                        value={paramsState[p.key] || ''}
                        onChange={(e) => handleParamChange(p.key, e.target.value)}
                        className="flex-1 text-xs px-2.5 py-1.5 rounded border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Execute Button */}
              <button
                onClick={handleSendRequest}
                disabled={isLoading}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold text-xs transition flex items-center justify-center gap-2 shadow-sm"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Dispatching HTTP Request...
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" /> Send HTTP GET Request
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Live Response Inspector */}
          <div className="lg:col-span-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center justify-between">
              <span>HTTP Response Inspector</span>
              {responseOutput && (
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold ${
                  responseOutput.status === 200 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                }`}>
                  Status: {responseOutput.status} {responseOutput.statusText}
                </span>
              )}
            </h4>

            {responseOutput ? (
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex flex-col h-[340px]">
                {/* Headers Bar */}
                <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex flex-wrap gap-3">
                  <span>Content-Type: application/json</span>
                  <span>Remaining: {responseOutput.headers['X-RateLimit-Remaining']}</span>
                </div>
                {/* JSON Body */}
                <pre className="p-4 text-xs font-mono text-emerald-300 overflow-auto leading-relaxed flex-1">
                  <code>{JSON.stringify(responseOutput.body, null, 2)}</code>
                </pre>
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-500 h-[340px] flex flex-col items-center justify-center space-y-2 bg-slate-50/50">
                <Terminal className="w-8 h-8 text-slate-400" />
                <div className="text-xs font-semibold text-slate-700">No Request Sent Yet</div>
                <div className="text-[11px] text-slate-400 max-w-xs">
                  Click &quot;Send HTTP GET Request&quot; on the left to observe live JSON serialization, response headers, and rate limiting tokens.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* REST API Educational Note */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 font-semibold">The REST Architectural Style: </strong>
            Representational State Transfer (REST), formulated by Roy Fielding, leverages standard HTTP verbs: <code>GET</code> (read-only, idempotent), <code>POST</code> (create resource), <code>PUT/PATCH</code> (update resource), and <code>DELETE</code> (remove resource). Resource addresses are formatted as hierarchical nouns (<code>/users/42/posts</code>) rather than RPC action commands.
          </div>
        </div>
      </div>
    </div>
  );
}
