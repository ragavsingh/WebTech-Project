import React, { useState } from 'react';
import { 
  Server, 
  Folder, 
  FileCode, 
  HardDrive, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  Play, 
  Terminal,
  FileText
} from 'lucide-react';

export default function WebServerSimulator() {
  const resources = [
    {
      path: '/index.html',
      label: 'index.html',
      type: 'HTML Document',
      mime: 'text/html; charset=UTF-8',
      diskPath: '/var/www/html/index.html',
      size: '1,420 bytes',
      content: '<!DOCTYPE html>\n<html>\n  <head><title>WebTech</title></head>\n  <body><h1>Hello World</h1></body>\n</html>'
    },
    {
      path: '/style.css',
      label: 'style.css',
      type: 'CSS Stylesheet',
      mime: 'text/css; charset=UTF-8',
      diskPath: '/var/www/html/style.css',
      size: '840 bytes',
      content: 'body {\n  font-family: sans-serif;\n  background: #f8fafc;\n  color: #0f172a;\n}'
    },
    {
      path: '/script.js',
      label: 'script.js',
      type: 'JavaScript Script',
      mime: 'application/javascript; charset=UTF-8',
      diskPath: '/var/www/html/script.js',
      size: '512 bytes',
      content: 'console.log("Web server client script active!");\ndocument.addEventListener("DOMContentLoaded", () => {});'
    },
    {
      path: '/image.jpg',
      label: 'image.jpg',
      type: 'Binary Graphic',
      mime: 'image/jpeg',
      diskPath: '/var/www/html/image.jpg',
      size: '64,120 bytes',
      content: '[Binary Image Data Stream: FF D8 FF E0 00 10 4A 46 49 46...]'
    }
  ];

  const [selectedPath, setSelectedPath] = useState(resources[0]);
  const [isServing, setIsServing] = useState(false);
  const [serverStep, setServerStep] = useState(0); // 0: idle, 1: matching route, 2: disk read, 3: emitting HTTP

  const handleRequest = (res) => {
    setSelectedPath(res);
    setIsServing(true);
    setServerStep(1); // route matching

    setTimeout(() => {
      setServerStep(2); // disk I/O
      setTimeout(() => {
        setServerStep(3); // response emitted
        setIsServing(false);
      }, 700);
    }, 700);
  };

  const handleReset = () => {
    setSelectedPath(resources[0]);
    setServerStep(0);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card overflow-hidden">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600">
            <Server className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Web Server Request Dispatcher Simulation</h3>
            <p className="text-xs text-slate-500">How Nginx / Apache reads local disk files and constructs HTTP response packets</p>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-500"
          title="Reset"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Resource Selector Tabs */}
      <div className="px-6 py-3 bg-slate-50/30 border-b border-slate-100 flex items-center space-x-2 overflow-x-auto text-xs">
        <span className="text-slate-400 font-medium whitespace-nowrap">Select Target Resource:</span>
        {resources.map((res) => (
          <button
            key={res.path}
            onClick={() => handleRequest(res)}
            disabled={isServing}
            className={`px-3 py-1.5 rounded-lg font-mono font-bold whitespace-nowrap transition-all ${
              selectedPath.path === res.path
                ? 'bg-indigo-600 text-white shadow-2xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            GET {res.path}
          </button>
        ))}
      </div>

      {/* Internal Web Server Processing Pipeline */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 bg-gradient-to-b from-white to-slate-50/30 text-xs">
        {/* Step 1: Routing & VHost */}
        <div className={`p-4 rounded-xl border transition-all ${
          serverStep === 1 ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-200' : 'bg-white border-slate-200'
        }`}>
          <div className="flex items-center space-x-2 text-indigo-700 font-bold mb-2">
            <Terminal className="w-4 h-4" />
            <span>1. Route &amp; MIME Matching</span>
          </div>
          <p className="text-slate-600 mb-2">
            Server matches path <code>{selectedPath.path}</code> against configured DocumentRoot.
          </p>
          <div className="font-mono text-[11px] text-slate-700 bg-slate-50 p-2 rounded border border-slate-100">
            Detected MIME: <strong className="text-indigo-600">{selectedPath.mime}</strong>
          </div>
        </div>

        {/* Step 2: Disk I/O */}
        <div className={`p-4 rounded-xl border transition-all ${
          serverStep === 2 ? 'bg-amber-50 border-amber-500 ring-2 ring-amber-200' : 'bg-white border-slate-200'
        }`}>
          <div className="flex items-center space-x-2 text-amber-800 font-bold mb-2">
            <HardDrive className="w-4 h-4 text-amber-600" />
            <span>2. Disk I/O &amp; File Read</span>
          </div>
          <p className="text-slate-600 mb-2">
            System call <code>read()</code> fetches file octets from server file system storage.
          </p>
          <div className="font-mono text-[11px] text-slate-700 bg-slate-50 p-2 rounded border border-slate-100">
            Path: <code>{selectedPath.diskPath}</code> ({selectedPath.size})
          </div>
        </div>

        {/* Step 3: HTTP Envelope Packaging */}
        <div className={`p-4 rounded-xl border transition-all ${
          serverStep === 3 ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-200' : 'bg-white border-slate-200'
        }`}>
          <div className="flex items-center space-x-2 text-emerald-800 font-bold mb-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>3. Transmit Response</span>
          </div>
          <p className="text-slate-600 mb-2">
            Streams status line, headers, and binary body over TCP socket.
          </p>
          <div className="font-mono text-[11px] text-slate-700 bg-slate-50 p-2 rounded border border-slate-100">
            Status: <strong className="text-emerald-600">200 OK</strong> (keep-alive)
          </div>
        </div>
      </div>

      {/* Raw Outbound Payload Preview */}
      <div className="px-6 pb-6">
        <div className="bg-slate-900 text-slate-200 p-4 rounded-xl font-mono text-xs border border-slate-800 space-y-1.5 shadow-inner">
          <div className="text-slate-400 text-[10px] uppercase font-bold border-b border-slate-800 pb-1 flex justify-between">
            <span>HTTP Response Header &amp; Body Payload Stream</span>
            <span>Server: Nginx/1.24.0</span>
          </div>
          <div className="text-emerald-400 font-bold">HTTP/1.1 200 OK</div>
          <div className="text-slate-400">Content-Type: {selectedPath.mime}</div>
          <div className="text-slate-400">Content-Length: {selectedPath.size}</div>
          <div className="text-slate-400">Date: {new Date().toUTCString()}</div>
          <div className="text-slate-400">Last-Modified: Thu, 01 Jan 2026 00:00:00 GMT</div>
          <div className="text-emerald-300 pt-2 border-t border-slate-800 whitespace-pre-wrap max-h-32 overflow-y-auto">
            {selectedPath.content}
          </div>
        </div>
      </div>
    </div>
  );
}
