import React, { useState } from 'react';
import { 
  Sparkles, 
  Brain, 
  Radio, 
  Cpu, 
  ShieldCheck, 
  Sliders, 
  Layers, 
  Award, 
  CheckCircle2, 
  HelpCircle, 
  RotateCcw, 
  Check, 
  Info,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const QUIZ_QUESTIONS = [
  {
    id: 'q1',
    question: 'How is Web 4.0 best characterized in contemporary computer science?',
    options: [
      'As a standardized W3C specification that replaced HTML5.',
      'As a conceptual vision representing the symbiotic, ubiquitous convergence of ambient AI, connected devices, and context-aware pervasive computing.',
      'A software library exclusively for Android mobile devices.',
      'A new protocol replacing TCP/IP with satellite laser links.'
    ],
    correctIndex: 1,
    explanation: 'Web 4.0 is not an official technical specification, but a conceptual paradigm of ambient, symbiotic human-machine intelligence.'
  },
  {
    id: 'q2',
    question: 'How do modern AI-powered web applications personalize user content in real-time?',
    options: [
      'By matching user interest feature vectors with candidate content embeddings using similarity algorithms like Cosine Similarity.',
      'By randomly shuffling database rows on every HTTP request.',
      'By asking the user to re-install their operating system.',
      'By converting all text into audio recordings.'
    ],
    correctIndex: 0,
    explanation: 'AI personalization maps user interaction vectors into high-dimensional semantic spaces and computes mathematical similarity matches.'
  },
  {
    id: 'q3',
    question: 'What is the primary architectural resilience advantage of a Decentralized Web (DWeb) P2P mesh network over a centralized client-server model?',
    options: [
      'It has no Single Point of Failure (SPOF); if one peer node goes offline, packets dynamically self-heal and re-route through alternative nodes.',
      'It completely removes the need for computer hardware.',
      'It allows websites to run without electricity.',
      'It makes websites load in 0.000 milliseconds.'
    ],
    correctIndex: 0,
    explanation: 'Decentralized mesh networks eliminate single points of failure, rerouting packets through available peer nodes.'
  },
  {
    id: 'q4',
    question: 'In blockchain architecture, why does editing historical data in Block #1 break the entire downstream chain?',
    options: [
      'Because the server automatically deletes all files.',
      'Because each block cryptographically incorporates the previous block\'s hash; changing data changes Block #1\'s hash and breaks all subsequent parent references.',
      'Because the browser window crashes.',
      'Because user passwords expire.'
    ],
    correctIndex: 1,
    explanation: 'Cryptographic hash chaining ensures that any retroactive data tampering invalidates the hash linkages across all subsequent blocks.'
  },
  {
    id: 'q5',
    question: 'Which network protocol is widely favored over HTTP for low-power IoT microcontrollers sending telemetry to the web?',
    options: [
      'MQTT (Message Queuing Telemetry Transport)',
      'FTP (File Transfer Protocol)',
      'POP3 (Post Office Protocol)',
      'Telnet'
    ],
    correctIndex: 0,
    explanation: 'MQTT features an ultra-lightweight 2-byte header and a publish/subscribe architecture that conserves battery on embedded hardware.'
  },
  {
    id: 'q6',
    question: 'What is the primary difference between Web Augmented Reality (AR) and Virtual Reality (VR)?',
    options: [
      'AR overlays synthetic 3D virtual assets onto the real-world camera view; VR immerses the user completely within a synthetic 3D spatial world.',
      'AR only works on Windows; VR only works on macOS.',
      'AR requires Python; VR requires SQL.',
      'AR is audio-only; VR is text-only.'
    ],
    correctIndex: 0,
    explanation: 'Augmented Reality blends computer graphics onto physical camera environments; Virtual Reality creates fully synthetic spatial worlds.'
  },
  {
    id: 'q7',
    question: 'Which W3C standard API allows web applications to interface directly with VR headsets and AR mobile devices without proprietary app stores?',
    options: [
      'The WebXR Device API',
      'The Canvas 2D Context API',
      'The Geolocation API',
      'The Battery Status API'
    ],
    correctIndex: 0,
    explanation: 'The WebXR Device API is the open standard for both Augmented and Virtual Reality spatial computing in web browsers.'
  },
  {
    id: 'q8',
    question: 'What constitutes the foundational equation of the &quot;Smart Web&quot;?',
    options: [
      'Context + Data + AI + Automation = Smart Experience',
      'HTML + CSS + JavaScript = Website',
      'CPU + RAM + Disk = Computer',
      'IP + Port + Socket = Connection'
    ],
    correctIndex: 0,
    explanation: 'The Smart Web combines contextual sensing with continuous telemetry, neural evaluation, and autonomous execution.'
  },
  {
    id: 'q9',
    question: 'How do CSS Container Queries (@container) elevate adaptive interface design beyond traditional media queries (@media)?',
    options: [
      'They allow an individual UI component to adapt its layout based on the width of its parent container rather than the entire browser viewport.',
      'They force all images to be square.',
      'They disable responsive layouts on mobile devices.',
      'They translate text into binary code.'
    ],
    correctIndex: 0,
    explanation: 'Container queries enable micro-responsiveness: components adapt intelligently based on their immediate container space.'
  },
  {
    id: 'q10',
    question: 'In modern web automation, what is a &quot;Webhook&quot;?',
    options: [
      'A malicious computer virus.',
      'A user-defined HTTP POST callback triggered immediately by an event to push real-time data to another system without polling.',
      'A tool to fish for deleted files on a hard drive.',
      'A physical cable connecting computers.'
    ],
    correctIndex: 1,
    explanation: 'Webhooks are automated HTTP callbacks that push real-time event payloads directly to destination webhooks without polling.'
  },
  {
    id: 'q11',
    question: 'What is the theoretical latency goal of 5G Ultra-Reliable Low-Latency Communication (URLLC)?',
    options: [
      'Sub-5 millisecond radio latency',
      '500 milliseconds',
      '5 seconds',
      '1 minute'
    ],
    correctIndex: 0,
    explanation: '5G URLLC targets sub-5ms (and down to 1ms) over-the-air latency to support real-time robotics, autonomous vehicles, and tactile web.'
  },
  {
    id: 'q12',
    question: 'Why does massive device concurrency (e.g. 10,000 IoT sensors per km²) degrade older 3G/4G networks more severely than 5G?',
    options: [
      'Older cellular generations have limited channel bandwidth and cannot allocate subcarrier resource blocks efficiently across dense device nodes.',
      'Older networks do not use radio waves.',
      'Sensors cannot transmit numbers on 4G.',
      'Cell towers turn off when more than 10 people use them.'
    ],
    correctIndex: 0,
    explanation: '5G Massive Machine-Type Communication (mMTC) was explicitly engineered to handle up to 1,000,000 devices/km² using orthogonal frequency slicing.'
  },
  {
    id: 'q13',
    question: 'What is a digital twin in IoT web development?',
    options: [
      'A software mirror and data representation of a physical device or physical process updated in real-time via telemetry.',
      'A duplicate computer monitor.',
      'Two programmers writing code together.',
      'A backup battery.'
    ],
    correctIndex: 0,
    explanation: 'A digital twin is a virtual software replica of physical equipment updated continuously through live IoT telemetry streams.'
  },
  {
    id: 'q14',
    question: 'What is a 6-Degrees-of-Freedom (6DoF) tracking experience in WebVR/WebXR?',
    options: [
      'Tracking both rotational orientation (pitch, yaw, roll) AND positional translation (X, Y, Z movement through space).',
      'A screen with 6 colors.',
      'A computer with 6 processors.',
      'A game with 6 levels.'
    ],
    correctIndex: 0,
    explanation: '6DoF allows users to not only look in any direction (3DoF rotation) but also physically walk forward, backward, and crouch in 3D space.'
  },
  {
    id: 'q15',
    question: 'What is the primary role of Edge Computing when paired with 5G cellular web technologies?',
    options: [
      'Terminating compute workloads within single-digit milliseconds of the cellular radio tower, avoiding transcontinental fiber backhaul delays.',
      'Encrypting data using floppy disks.',
      'Translating HTML into C++ code.',
      'Removing all firewalls.'
    ],
    correctIndex: 0,
    explanation: '5G provides ultra-fast radio transit; edge computing ensures the backend server is located right at the cellular tower to preserve low latency.'
  }
];

export default function BuildFutureWebLab() {
  const [activeTab, setActiveTab] = useState('lab'); // 'lab' | 'quiz'

  // Capstone Component Toggles
  const [enabledLayers, setEnabledLayers] = useState({
    ai: true,
    iot: true,
    edge: true,
    blockchain: true,
    adaptive: true
  });

  const [activeEvent, setActiveEvent] = useState(null);

  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const toggleLayer = (key) => {
    setEnabledLayers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSimulateCompositeFlow = () => {
    setActiveEvent('Dispatching IoT Telemetry (Temp Spike) → Edge Filtering (4ms) → Neural Classification → Smart Contract Proof Commit → Adaptive UI Notification Rendered.');
  };

  const handleGradeQuiz = () => {
    setQuizSubmitted(true);
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  const calculateScore = () => {
    let correct = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (selectedAnswers[q.id] === q.correctIndex) correct++;
    });
    return correct;
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-purple-500/30">
              <Award className="w-3.5 h-3.5" /> Unit 5 Capstone Laboratory
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Build the Future Web Laboratory
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Synthesize AI, IoT Telemetry, Edge Computing, Blockchain Verification, and Adaptive UI into a cohesive next-generation smart web application, then validate your expertise with the comprehensive final exam.
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-2 mt-6">
          <button
            onClick={() => setActiveTab('lab')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition ${
              activeTab === 'lab' ? 'bg-purple-600 text-white shadow' : 'bg-white/10 text-slate-300 hover:bg-white/15'
            }`}
          >
            <Layers className="w-4 h-4" /> 1. Composite Smart Application Architecture
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition ${
              activeTab === 'quiz' ? 'bg-purple-600 text-white shadow' : 'bg-white/10 text-slate-300 hover:bg-white/15'
            }`}
          >
            <HelpCircle className="w-4 h-4" /> 2. Comprehensive 15-Question Final Exam
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6">
        {activeTab === 'lab' ? (
          <div className="space-y-6">
            {/* Architecture Layer Toggles */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Active Architectural Subsystems:
                </span>
                <button
                  onClick={handleSimulateCompositeFlow}
                  className="px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-sm transition flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" /> Trigger End-to-End Smart Transaction
                </button>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  onClick={() => toggleLayer('ai')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                    enabledLayers.ai ? 'bg-purple-600 text-white shadow-xs' : 'bg-white text-slate-600 border border-slate-300'
                  }`}
                >
                  <Brain className="w-3.5 h-3.5" /> AI Personalization Engine {enabledLayers.ai ? '✓' : 'OFF'}
                </button>

                <button
                  onClick={() => toggleLayer('iot')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                    enabledLayers.iot ? 'bg-emerald-600 text-white shadow-xs' : 'bg-white text-slate-600 border border-slate-300'
                  }`}
                >
                  <Radio className="w-3.5 h-3.5" /> IoT Telemetry Ingestion {enabledLayers.iot ? '✓' : 'OFF'}
                </button>

                <button
                  onClick={() => toggleLayer('edge')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                    enabledLayers.edge ? 'bg-cyan-600 text-white shadow-xs' : 'bg-white text-slate-600 border border-slate-300'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" /> Edge Computing CDN {enabledLayers.edge ? '✓' : 'OFF'}
                </button>

                <button
                  onClick={() => toggleLayer('blockchain')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                    enabledLayers.blockchain ? 'bg-amber-600 text-white shadow-xs' : 'bg-white text-slate-600 border border-slate-300'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" /> Blockchain Ledger Proofs {enabledLayers.blockchain ? '✓' : 'OFF'}
                </button>

                <button
                  onClick={() => toggleLayer('adaptive')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                    enabledLayers.adaptive ? 'bg-indigo-600 text-white shadow-xs' : 'bg-white text-slate-600 border border-slate-300'
                  }`}
                >
                  <Sliders className="w-3.5 h-3.5" /> Adaptive UI &amp; Accessibility {enabledLayers.adaptive ? '✓' : 'OFF'}
                </button>
              </div>
            </div>

            {/* Composite Visual Architecture Diagram */}
            <div className="border border-slate-300 rounded-2xl p-6 bg-slate-900 text-white space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <span className="font-bold text-purple-400 font-mono uppercase tracking-wider">
                  Composite Future Web Architecture Blueprint
                </span>
                <span className="text-emerald-400 font-mono">Status: All Systems Operational</span>
              </div>

              {/* 5-Block Architectural Mesh */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-center text-xs">
                <div className={`p-4 rounded-xl border ${enabledLayers.iot ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300' : 'bg-slate-800/50 border-slate-700 text-slate-500'}`}>
                  <Radio className="w-6 h-6 mx-auto mb-1 text-emerald-400" />
                  <div className="font-bold">1. IoT Sensors</div>
                  <div className="text-[10px] opacity-75">MQTT Telemetry</div>
                </div>

                <div className={`p-4 rounded-xl border ${enabledLayers.edge ? 'bg-cyan-950/60 border-cyan-500 text-cyan-300' : 'bg-slate-800/50 border-slate-700 text-slate-500'}`}>
                  <Cpu className="w-6 h-6 mx-auto mb-1 text-cyan-400" />
                  <div className="font-bold">2. Edge Network</div>
                  <div className="text-[10px] opacity-75">5G URLLC (4ms)</div>
                </div>

                <div className={`p-4 rounded-xl border ${enabledLayers.ai ? 'bg-purple-950/60 border-purple-500 text-purple-300' : 'bg-slate-800/50 border-slate-700 text-slate-500'}`}>
                  <Brain className="w-6 h-6 mx-auto mb-1 text-purple-400" />
                  <div className="font-bold">3. Neural Agent</div>
                  <div className="text-[10px] opacity-75">Inference &amp; Logic</div>
                </div>

                <div className={`p-4 rounded-xl border ${enabledLayers.blockchain ? 'bg-amber-950/60 border-amber-500 text-amber-300' : 'bg-slate-800/50 border-slate-700 text-slate-500'}`}>
                  <ShieldCheck className="w-6 h-6 mx-auto mb-1 text-amber-400" />
                  <div className="font-bold">4. Trust Ledger</div>
                  <div className="text-[10px] opacity-75">Hash Proofs</div>
                </div>

                <div className={`p-4 rounded-xl border ${enabledLayers.adaptive ? 'bg-indigo-950/60 border-indigo-500 text-indigo-300' : 'bg-slate-800/50 border-slate-700 text-slate-500'}`}>
                  <Sliders className="w-6 h-6 mx-auto mb-1 text-indigo-400" />
                  <div className="font-bold">5. Adaptive UI</div>
                  <div className="text-[10px] opacity-75">Fluid WebXR / DOM</div>
                </div>
              </div>

              {/* Live Composite Event Log */}
              {activeEvent && (
                <div className="p-3.5 rounded-xl bg-black/60 border border-purple-500/30 text-xs font-mono text-purple-200">
                  <span className="text-purple-400 font-bold block mb-1">Composite Pipeline Trace:</span>
                  {activeEvent}
                </div>
              )}
            </div>
          </div>
        ) : (
          /* ========================================================= */
          /* TAB 2: COMPREHENSIVE 15-QUESTION FINAL EXAM */
          /* ========================================================= */
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
              <div>
                <h4 className="text-lg font-bold text-slate-900">Unit 5 Comprehensive Diagnostic Examination</h4>
                <p className="text-xs text-slate-500">15 questions validating your mastery of the Future Web, AI, DWeb, IoT, AR/VR, 5G, and Adaptive UI.</p>
              </div>
              {quizSubmitted ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-purple-600">
                    Score: {calculateScore()} / {QUIZ_QUESTIONS.length} ({(calculateScore() / QUIZ_QUESTIONS.length * 100).toFixed(0)}%)
                  </span>
                  <button
                    onClick={handleResetQuiz}
                    className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Retake Exam
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleGradeQuiz}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-sm transition"
                >
                  Grade My Exam
                </button>
              )}
            </div>

            {/* Questions List */}
            <div className="space-y-6">
              {QUIZ_QUESTIONS.map((q, qIndex) => {
                const isAnswered = selectedAnswers[q.id] !== undefined;
                const studentAnswer = selectedAnswers[q.id];
                const isCorrect = studentAnswer === q.correctIndex;

                return (
                  <div key={q.id} className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h5 className="text-sm font-bold text-slate-900">
                        <span className="text-purple-600 mr-1.5">{qIndex + 1}.</span> {q.question}
                      </h5>
                      {quizSubmitted && (
                        <span className={`px-2 py-0.5 rounded text-[11px] font-bold shrink-0 ${
                          isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                        }`}>
                          {isCorrect ? 'Correct' : 'Incorrect'}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = studentAnswer === optIdx;
                        let optionStyle = 'bg-white border-slate-200 text-slate-700 hover:border-slate-300';

                        if (quizSubmitted) {
                          if (optIdx === q.correctIndex) {
                            optionStyle = 'bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold';
                          } else if (isSelected && !isCorrect) {
                            optionStyle = 'bg-rose-50 border-rose-300 text-rose-900';
                          }
                        } else if (isSelected) {
                          optionStyle = 'bg-purple-50 border-purple-500 text-purple-900 font-semibold';
                        }

                        return (
                          <div
                            key={optIdx}
                            onClick={() => {
                              if (!quizSubmitted) {
                                setSelectedAnswers({ ...selectedAnswers, [q.id]: optIdx });
                              }
                            }}
                            className={`p-3 rounded-lg border text-xs cursor-pointer transition flex items-center justify-between ${optionStyle}`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && optIdx === q.correctIndex && (
                              <Check className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    {quizSubmitted && (
                      <div className="p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-600">
                        <strong className="text-slate-800">Explanation: </strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
