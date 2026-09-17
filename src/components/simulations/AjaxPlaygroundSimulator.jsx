import React, { useState } from 'react';
import { 
  Code, 
  Send, 
  RefreshCw, 
  Eye, 
  CheckCircle2, 
  Users, 
  RotateCcw, 
  Sparkles, 
  Sliders, 
  ArrowRight,
  Info,
  Terminal
} from 'lucide-react';

const INITIAL_USERS = [
  { id: 1, name: 'Alice Walker', role: 'Solutions Architect', email: 'alice@cloud.io', avatarBg: 'bg-blue-500' },
  { id: 2, name: 'David Miller', role: 'DevOps Engineer', email: 'david@cloud.io', avatarBg: 'bg-purple-500' },
  { id: 3, name: 'Elena Rostova', role: 'Frontend Lead', email: 'elena@cloud.io', avatarBg: 'bg-emerald-500' }
];

const MORE_USERS_PAGES = [
  [
    { id: 4, name: 'Marcus Sterling', role: 'Database Administrator', email: 'marcus@cloud.io', avatarBg: 'bg-amber-500' },
    { id: 5, name: 'Fatima Al-Zahra', role: 'Security Specialist', email: 'fatima@cloud.io', avatarBg: 'bg-rose-500' }
  ],
  [
    { id: 6, name: 'Kenji Sato', role: 'Systems Programmer', email: 'kenji@cloud.io', avatarBg: 'bg-indigo-500' },
    { id: 7, name: 'Chloe Dubois', role: 'Product Designer', email: 'chloe@cloud.io', avatarBg: 'bg-teal-500' }
  ]
];

const CODE_TEMPLATES = {
  fetch: `// Modern Fetch API (Promise-based)
async function loadMoreUsers() {
  // 1. Dispatch background HTTP request
  const response = await fetch('/api/v1/users?page=' + nextPage);
  
  // 2. Parse asynchronous JSON payload
  const newUsers = await response.json();
  
  // 3. Update ONLY the target user-list container
  const container = document.getElementById('userList');
  newUsers.forEach(user => {
    const card = createUserCard(user);
    container.appendChild(card);
  });
}`,

  xhr: `// Legacy XMLHttpRequest (Event-callback based)
function loadMoreUsers() {
  // 1. Instantiate XHR object
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/v1/users?page=' + nextPage, true);
  
  // 2. Register asynchronous event listener
  xhr.onload = function() {
    if (xhr.status === 200) {
      const newUsers = JSON.parse(xhr.responseText);
      
      // 3. Update DOM in-place
      const container = document.getElementById('userList');
      newUsers.forEach(u => container.appendChild(createUserCard(u)));
    }
  };
  
  // 3. Send wire request
  xhr.send();
}`
};

export default function AjaxPlaygroundSimulator() {
  const [users, setUsers] = useState(INITIAL_USERS);
  const [pageIndex, setPageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [apiType, setApiType] = useState('fetch'); // 'fetch' | 'xhr'
  const [activeTab, setActiveTab] = useState('preview'); // 'preview' | 'network'
  const [lastRequestHeaders, setLastRequestHeaders] = useState(null);

  const handleLoadMore = () => {
    if (pageIndex >= MORE_USERS_PAGES.length) return;
    setIsLoading(true);

    const targetUsers = MORE_USERS_PAGES[pageIndex];

    setTimeout(() => {
      setUsers(prev => [...prev, ...targetUsers]);
      setPageIndex(prev => prev + 1);
      setIsLoading(false);

      setLastRequestHeaders({
        url: `/api/v1/users?page=${pageIndex + 2}`,
        method: 'GET',
        status: '200 OK',
        timing: '84 ms',
        size: '1.42 KB (compressed JSON)',
        payload: JSON.stringify(targetUsers, null, 2)
      });
    }, 600);
  };

  const handleReset = () => {
    setUsers(INITIAL_USERS);
    setPageIndex(0);
    setLastRequestHeaders(null);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Top Header */}
      <div className="bg-slate-900 text-white px-5 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/30">
            <Users size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold">Interactive AJAX Playground &amp; Programming Lab</h3>
            <p className="text-xs text-slate-400">
              Live asynchronous DOM updates without page reloads: JavaScript &rarr; Request &rarr; Response &rarr; DOM update
            </p>
          </div>
        </div>

        {/* API Style Switcher */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Syntax Style:</span>
          <div className="flex bg-slate-800 p-0.5 rounded-lg border border-slate-700">
            <button
              onClick={() => setApiType('fetch')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition ${
                apiType === 'fetch' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Modern Fetch API
            </button>
            <button
              onClick={() => setApiType('xhr')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition ${
                apiType === 'xhr' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Classic XMLHttpRequest
            </button>
          </div>
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
        {/* Left: Code Editor & Execution Steps */}
        <div className="lg:col-span-6 border-r border-slate-200 flex flex-col bg-slate-950 text-slate-100">
          <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs">
            <span className="font-mono text-emerald-400 flex items-center gap-1.5">
              <Code size={14} />
              <span>ajaxHandler.js</span>
            </span>
            <span className="text-[11px] text-slate-400">
              {apiType === 'fetch' ? 'ES6 Promises' : 'W3C XHR Spec'}
            </span>
          </div>

          <div className="p-4 flex-1 overflow-x-auto">
            <pre className="font-mono text-xs text-emerald-300 leading-relaxed">
              {CODE_TEMPLATES[apiType]}
            </pre>
          </div>

          {/* Execution Pipeline Steps */}
          <div className="p-3 bg-slate-900/90 border-t border-slate-800 text-xs">
            <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider block mb-1">
              Asynchronous Execution Loop:
            </span>
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-300">
              <span className="text-emerald-400 font-bold">1. Event</span>
              <ArrowRight size={12} className="text-slate-600" />
              <span className="text-blue-400 font-bold">2. Async Wire</span>
              <ArrowRight size={12} className="text-slate-600" />
              <span className="text-purple-400 font-bold">3. Parse JSON</span>
              <ArrowRight size={12} className="text-slate-600" />
              <span className="text-amber-400 font-bold">4. DOM Append</span>
            </div>
          </div>
        </div>

        {/* Right: Simulated Dynamic Webpage & Network Inspector */}
        <div className="lg:col-span-6 flex flex-col bg-slate-50">
          <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center justify-between text-xs">
            <div className="flex bg-slate-200/80 p-0.5 rounded-lg">
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition ${
                  activeTab === 'preview' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Simulated Page View
              </button>
              <button
                onClick={() => setActiveTab('network')}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition flex items-center gap-1 ${
                  activeTab === 'network' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Network Wire Inspector</span>
                {lastRequestHeaders && (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                )}
              </button>
            </div>

            <button
              onClick={handleReset}
              className="text-xs text-slate-400 hover:text-slate-700 flex items-center gap-1"
            >
              <RotateCcw size={12} />
              <span>Reset List</span>
            </button>
          </div>

          {activeTab === 'preview' ? (
            /* Simulated Web Viewport */
            <div className="p-5 flex-1 overflow-y-auto flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Live Team Directory</h4>
                    <p className="text-[11px] text-slate-500">
                      Currently showing {users.length} members ({pageIndex * 2} loaded asynchronously)
                    </p>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-mono font-bold px-2 py-0.5 rounded">
                    Zero Page Reloads
                  </span>
                </div>

                {/* User Cards List (Target DOM Container) */}
                <div id="userList" className="space-y-2">
                  {users.map(u => (
                    <div
                      key={u.id}
                      className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs flex items-center justify-between transition-all animate-fadeIn"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full ${u.avatarBg} text-white font-bold text-xs flex items-center justify-center`}>
                          {u.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-xs text-slate-900">{u.name}</div>
                          <div className="text-[11px] text-slate-500">{u.role}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded">
                        {u.email}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AJAX Trigger Button */}
              <div className="pt-4 mt-4 border-t border-slate-200">
                <button
                  onClick={handleLoadMore}
                  disabled={isLoading || pageIndex >= MORE_USERS_PAGES.length}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white font-semibold text-xs rounded-xl shadow-xs transition flex items-center justify-center gap-2"
                >
                  <RefreshCw size={13} className={isLoading ? 'animate-spin' : ''} />
                  <span>
                    {isLoading
                      ? 'Fetching JSON in background...'
                      : pageIndex >= MORE_USERS_PAGES.length
                      ? 'All Users Loaded'
                      : 'Load More Users (via AJAX)'}
                  </span>
                </button>
              </div>
            </div>
          ) : (
            /* Network Inspector Tab */
            <div className="p-5 flex-1 overflow-y-auto font-mono text-xs">
              {lastRequestHeaders ? (
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                    <div className="font-bold text-slate-800 mb-1">// HTTP Request Envelope</div>
                    <div className="text-slate-600 space-y-0.5 text-[11px]">
                      <div><strong>Endpoint:</strong> {lastRequestHeaders.url}</div>
                      <div><strong>Method:</strong> {lastRequestHeaders.method}</div>
                      <div><strong>Accept:</strong> application/json</div>
                      <div><strong>X-Requested-With:</strong> XMLHttpRequest</div>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                    <div className="font-bold text-slate-800 mb-1">// HTTP Response Metadata</div>
                    <div className="text-slate-600 space-y-0.5 text-[11px]">
                      <div><strong>Status:</strong> <span className="text-emerald-600 font-bold">{lastRequestHeaders.status}</span></div>
                      <div><strong>Response Latency:</strong> {lastRequestHeaders.timing}</div>
                      <div><strong>Payload Size:</strong> {lastRequestHeaders.size}</div>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950 text-emerald-300 rounded-xl border border-slate-800">
                    <div className="text-slate-400 text-[10px] uppercase font-bold mb-1">// Returned JSON Payload</div>
                    <pre className="text-[11px] overflow-x-auto leading-relaxed">
                      {lastRequestHeaders.payload}
                    </pre>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center text-slate-400">
                  <RefreshCw size={24} className="mb-2 opacity-50" />
                  <p>Click "Load More Users" in the page view to capture a background wire transaction.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer Insight */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
        <Info size={16} className="text-emerald-600 shrink-0 mt-0.5" />
        <div>
          <strong className="text-slate-800">Why Modern Web Prefers Fetch(): </strong>
          The modern `fetch()` API returns ES6 Promises, which integrate cleanly with `async/await` syntax and avoid the deep callback nesting ("callback hell") of legacy `XMLHttpRequest`.
        </div>
      </div>
    </div>
  );
}
