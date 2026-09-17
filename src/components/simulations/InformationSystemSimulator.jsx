import React, { useState } from 'react';
import { 
  Server, 
  Database, 
  Monitor, 
  ArrowRight, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  UserCheck, 
  Layers, 
  GraduationCap, 
  ShieldCheck, 
  Info,
  Cpu
} from 'lucide-react';

const STUDENTS = [
  { id: 'S101', name: 'Alice Walker', major: 'Computer Science', gpa: 3.85, courses: ['CS101', 'CS204'] },
  { id: 'S102', name: 'Brian O’Connor', major: 'Software Engineering', gpa: 3.62, courses: ['SE301'] },
  { id: 'S103', name: 'Chloe Dubois', major: 'Data Science', gpa: 3.94, courses: ['DS101', 'MATH220'] }
];

export default function InformationSystemSimulator() {
  const [selectedStudentId, setSelectedStudentId] = useState('S101');
  const [selectedAction, setSelectedAction] = useState('enroll'); // 'enroll' | 'gpa' | 'verify'
  const [courseToEnroll, setCourseToEnroll] = useState('CS305');
  const [activeTier, setActiveTier] = useState(0); // 0: idle, 1: Presentation, 2: Application, 3: Data Tier, 4: Complete
  const [isProcessing, setIsProcessing] = useState(false);
  const [tierLogs, setTierLogs] = useState({
    presentation: 'Ready to capture user input',
    application: 'Waiting for HTTP dispatch',
    data: 'Database connection pool ready'
  });

  const student = STUDENTS.find(s => s.id === selectedStudentId);

  const handleExecuteTransaction = () => {
    setIsProcessing(true);
    setActiveTier(1);
    setTierLogs({
      presentation: `Form submitted: Action=${selectedAction}, Student=${student.id}`,
      application: 'Authenticating session token & checking authorization...',
      data: 'Idle'
    });

    // Step to Application Tier
    setTimeout(() => {
      setActiveTier(2);
      setTierLogs(prev => ({
        ...prev,
        application: selectedAction === 'enroll' 
          ? `Business Rule: Check prerequisites for ${courseToEnroll} & verify max credit limit (< 18 credits). Passed!`
          : `Business Rule: Compute weighted GPA across ${student.courses.length} course credits.`
      }));

      // Step to Data Tier
      setTimeout(() => {
        setActiveTier(3);
        setTierLogs(prev => ({
          ...prev,
          data: selectedAction === 'enroll'
            ? `SQL Transaction: INSERT INTO enrollments (student_id, course_id) VALUES ('${student.id}', '${courseToEnroll}'); COMMIT;`
            : `SQL Query: SELECT grade, credits FROM course_records WHERE student_id = '${student.id}';`
        }));

        // Completion & Response Return
        setTimeout(() => {
          setActiveTier(4);
          setIsProcessing(false);
          setTierLogs(prev => ({
            ...prev,
            presentation: `HTTP 200 OK: Transaction executed successfully! DOM updated in browser.`
          }));
        }, 900);
      }, 900);
    }, 900);
  };

  const handleReset = () => {
    setActiveTier(0);
    setIsProcessing(false);
    setTierLogs({
      presentation: 'Ready to capture user input',
      application: 'Waiting for HTTP dispatch',
      data: 'Database connection pool ready'
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-blue-500/30">
              <Layers className="w-3.5 h-3.5" /> 3-Tier Enterprise Architecture
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Web-Based Information System Simulator
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Observe how real-world enterprise web applications (e.g. Student Information Systems) isolate Presentation (Browser), Business Logic (Application Server), and Data Persistence (Database).
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleExecuteTransaction}
              disabled={isProcessing}
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition"
            >
              <Play className="w-3.5 h-3.5" /> Execute Transaction
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center gap-1 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>
        </div>

        {/* Transaction Configuration Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
          <div>
            <label className="block text-[11px] text-slate-400 mb-1">Student Record</label>
            <select
              value={selectedStudentId}
              onChange={(e) => setSelectedStudentId(e.target.value)}
              disabled={isProcessing}
              className="w-full text-xs bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none"
            >
              {STUDENTS.map(s => (
                <option key={s.id} value={s.id}>{s.name} ({s.id})</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] text-slate-400 mb-1">Business Operation</label>
            <select
              value={selectedAction}
              onChange={(e) => setSelectedAction(e.target.value)}
              disabled={isProcessing}
              className="w-full text-xs bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none"
            >
              <option value="enroll">Enroll in Advanced Course</option>
              <option value="gpa">Audit Academic GPA</option>
              <option value="verify">Verify Degree Eligibility</option>
            </select>
          </div>

          {selectedAction === 'enroll' && (
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Select Course Code</label>
              <select
                value={courseToEnroll}
                onChange={(e) => setCourseToEnroll(e.target.value)}
                disabled={isProcessing}
                className="w-full text-xs bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none"
              >
                <option value="CS305">CS305: Distributed Systems (4 Cr)</option>
                <option value="CS410">CS410: Semantic Web & Knowledge Graphs (3 Cr)</option>
                <option value="SE320">SE320: Cloud Architecture & DevOps (4 Cr)</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* 3-Tier Diagram & Execution Flow */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 relative">
          {/* TIER 1: PRESENTATION TIER */}
          <div className={`p-5 rounded-xl border transition-all ${
            activeTier === 1
              ? 'border-blue-500 bg-blue-50/60 shadow-md ring-2 ring-blue-500/20'
              : 'border-slate-200 bg-white'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <Monitor className={`w-4 h-4 ${activeTier === 1 ? 'text-blue-600' : 'text-slate-400'}`} />
                Tier 1: Presentation
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                Client / Browser
              </span>
            </div>
            <div className="text-xs text-slate-600 space-y-2">
              <p>Captures student input, renders HTML/CSS, handles client-side form validation.</p>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-[11px] text-slate-700">
                {tierLogs.presentation}
              </div>
            </div>
          </div>

          {/* TIER 2: APPLICATION TIER */}
          <div className={`p-5 rounded-xl border transition-all ${
            activeTier === 2
              ? 'border-indigo-500 bg-indigo-50/60 shadow-md ring-2 ring-indigo-500/20'
              : 'border-slate-200 bg-white'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <Cpu className={`w-4 h-4 ${activeTier === 2 ? 'text-indigo-600' : 'text-slate-400'}`} />
                Tier 2: Business Logic
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                App Server (Node/Rails/Java)
              </span>
            </div>
            <div className="text-xs text-slate-600 space-y-2">
              <p>Executes domain rules, enforces security tokens, prerequisite checks, and credit limits.</p>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-[11px] text-indigo-900">
                {tierLogs.application}
              </div>
            </div>
          </div>

          {/* TIER 3: DATA TIER */}
          <div className={`p-5 rounded-xl border transition-all ${
            activeTier === 3
              ? 'border-emerald-500 bg-emerald-50/60 shadow-md ring-2 ring-emerald-500/20'
              : 'border-slate-200 bg-white'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <Database className={`w-4 h-4 ${activeTier === 3 ? 'text-emerald-600' : 'text-slate-400'}`} />
                Tier 3: Persistence
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                RDBMS / PostgreSQL
              </span>
            </div>
            <div className="text-xs text-slate-600 space-y-2">
              <p>Guarantees ACID transactions, manages relational constraints, writes to persistent disk storage.</p>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-[11px] text-emerald-900">
                {tierLogs.data}
              </div>
            </div>
          </div>
        </div>

        {/* Transaction Summary Status */}
        {activeTier === 4 && (
          <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs text-emerald-800">
            <div className="flex items-center gap-2 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Transaction Committed: All 3 Tiers Synchronized Successfully
            </div>
            <span className="font-mono text-[11px]">Duration: ~2.7s round-trip</span>
          </div>
        )}

        {/* Educational Callout */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 font-semibold">Separation of Concerns: </strong>
            In a multi-tier architecture, the presentation layer never queries the database directly. This provides critical security (protecting database credentials from exposure in browser JavaScript), horizontal scalability (the application tier can scale independently behind load balancers), and maintainability.
          </div>
        </div>
      </div>
    </div>
  );
}
