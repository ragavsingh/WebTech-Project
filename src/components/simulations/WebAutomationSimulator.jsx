import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Sliders, 
  Send, 
  Database, 
  Mail, 
  Bell, 
  Info,
  Layers,
  Terminal
} from 'lucide-react';

const TRIGGERS = [
  { id: 'form_submit', label: 'When user submits lab quiz', desc: 'Client DOM event form.onsubmit' },
  { id: 'iot_temp', label: 'When IoT sensor temp > 30°C', desc: 'MQTT telemetry threshold alert' },
  { id: 'webhook_rec', label: 'When GitHub Webhook received', desc: 'HTTP POST /api/webhooks/push' }
];

const CONDITIONS = [
  { id: 'score_check', label: 'Score is >= 80% (Pass)', desc: 'Validates academic passing threshold' },
  { id: 'auth_check', label: 'Signature is cryptographically valid', desc: 'Verifies HMAC SHA-256 secret token' },
  { id: 'always_true', label: 'Always true (No condition filter)', desc: 'Unconditional execution pass' }
];

const ACTIONS = [
  { id: 'save_cert', label: 'Mint Certificate & Save to Database', desc: 'Executes SQL INSERT into credentials table' },
  { id: 'send_email', label: 'Dispatch Automated Confirmation Email', desc: 'Calls transactional email REST API' },
  { id: 'trigger_webhook', label: 'Trigger Discord / Slack Webhook Alert', desc: 'Broadcasts JSON notification message' }
];

export default function WebAutomationSimulator() {
  const [selectedTrigger, setSelectedTrigger] = useState('form_submit');
  const [selectedCondition, setSelectedCondition] = useState('score_check');
  const [selectedAction, setSelectedAction] = useState('save_cert');

  const [activeStep, setActiveStep] = useState(0); // 0: Idle, 1: Trigger, 2: Condition, 3: Action, 4: Result
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionLogs, setExecutionLogs] = useState([]);

  const handleRunWorkflow = () => {
    setIsExecuting(true);
    setActiveStep(1);
    setExecutionLogs([`[Step 1] Trigger fired: ${TRIGGERS.find(t => t.id === selectedTrigger).label}`]);

    setTimeout(() => {
      setActiveStep(2);
      setExecutionLogs(prev => [
        `[Step 2] Evaluating condition: ${CONDITIONS.find(c => c.id === selectedCondition).label} → PASSED (True)`,
        ...prev
      ]);

      setTimeout(() => {
        setActiveStep(3);
        setExecutionLogs(prev => [
          `[Step 3] Executing Action: ${ACTIONS.find(a => a.id === selectedAction).label}`,
          ...prev
        ]);

        setTimeout(() => {
          setActiveStep(4);
          setIsExecuting(false);
          setExecutionLogs(prev => [
            `[Step 4] Workflow completed successfully! Total execution time: 18ms.`,
            ...prev
          ]);
        }, 600);
      }, 600);
    }, 600);
  };

  const handleReset = () => {
    setActiveStep(0);
    setIsExecuting(false);
    setExecutionLogs([]);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-amber-500/30">
              <Zap className="w-3.5 h-3.5" /> Event-Driven Autonomous Web
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Reactive Web Automation &amp; Workflow Builder
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Web automation connects event triggers, conditional business rules, and backend actions into autonomous pipelines without manual human intervention.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleRunWorkflow}
              disabled={isExecuting}
              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white text-xs font-bold transition flex items-center gap-1.5 shadow"
            >
              <Play className="w-3.5 h-3.5" /> Test Run Workflow
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>
        </div>

        {/* 4-Node Pipeline Flow Visual */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mt-6">
          {[
            { step: 1, name: '1. Trigger Event', node: 'Event Listener' },
            { step: 2, name: '2. Condition Filter', node: 'Rule Evaluator' },
            { step: 3, name: '3. Action Handler', node: 'API / DB Mutation' },
            { step: 4, name: '4. Result Confirmation', node: 'Execution Response' }
          ].map((s) => {
            const isCurrent = activeStep === s.step;
            const isDone = activeStep > s.step;
            return (
              <div
                key={s.step}
                className={`p-2.5 rounded-xl border text-xs transition ${
                  isCurrent
                    ? 'bg-white text-slate-900 border-white shadow-md'
                    : isDone
                    ? 'bg-amber-900/40 text-amber-200 border-amber-700/50'
                    : 'bg-white/5 text-slate-400 border-white/10'
                }`}
              >
                <div className="font-bold">{s.name}</div>
                <div className="text-[10px] opacity-75">{s.node}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Workflow Node Configuration */}
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Node 1: Trigger */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-600" /> 1. Trigger (When...)
            </span>
            <select
              value={selectedTrigger}
              onChange={(e) => setSelectedTrigger(e.target.value)}
              disabled={isExecuting}
              className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2 text-slate-800 focus:outline-none"
            >
              {TRIGGERS.map(t => (
                <option key={t.id} value={t.id}>{t.label}</option>
              ))}
            </select>
            <p className="text-[11px] text-slate-500">
              {TRIGGERS.find(t => t.id === selectedTrigger).desc}
            </p>
          </div>

          {/* Node 2: Condition */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <Sliders className="w-4 h-4 text-indigo-600" /> 2. Condition (If...)
            </span>
            <select
              value={selectedCondition}
              onChange={(e) => setSelectedCondition(e.target.value)}
              disabled={isExecuting}
              className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2 text-slate-800 focus:outline-none"
            >
              {CONDITIONS.map(c => (
                <option key={c.id} value={c.id}>{c.label}</option>
              ))}
            </select>
            <p className="text-[11px] text-slate-500">
              {CONDITIONS.find(c => c.id === selectedCondition).desc}
            </p>
          </div>

          {/* Node 3: Action */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <Database className="w-4 h-4 text-emerald-600" /> 3. Action (Then...)
            </span>
            <select
              value={selectedAction}
              onChange={(e) => setSelectedAction(e.target.value)}
              disabled={isExecuting}
              className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2 text-slate-800 focus:outline-none"
            >
              {ACTIONS.map(a => (
                <option key={a.id} value={a.id}>{a.label}</option>
              ))}
            </select>
            <p className="text-[11px] text-slate-500">
              {ACTIONS.find(a => a.id === selectedAction).desc}
            </p>
          </div>
        </div>

        {/* Live Execution Logs */}
        <div className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs space-y-1.5">
          <div className="text-[11px] text-amber-400 font-bold uppercase tracking-wider flex items-center justify-between">
            <span>Workflow Execution Console:</span>
            <span className="text-slate-400 font-normal">Runtime: Serverless V8 Isolate</span>
          </div>
          {executionLogs.length > 0 ? (
            executionLogs.map((log, idx) => (
              <div key={idx} className="text-slate-300">
                {log}
              </div>
            ))
          ) : (
            <div className="text-slate-500 italic">Click &quot;Test Run Workflow&quot; above to trace automated event dispatch.</div>
          )}
        </div>

        {/* Educational Note */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 font-semibold">Webhooks &amp; Serverless Automation: </strong>
            Modern web automation avoids continuous polling by utilizing <em>Webhooks</em>—HTTP POST callbacks sent instantly by third-party systems when an event occurs. Services like Zapier, GitHub Actions, and n8n listen for incoming webhooks, execute business logic within serverless functions, and dispatch downstream API calls automatically.
          </div>
        </div>
      </div>
    </div>
  );
}
