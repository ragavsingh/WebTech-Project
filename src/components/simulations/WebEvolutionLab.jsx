import React, { useState } from 'react';
import { 
  Sparkles, 
  Globe, 
  Share2, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw, 
  Award, 
  Layers, 
  Code, 
  Check, 
  AlertCircle,
  HelpCircle,
  Info
} from 'lucide-react';

const QUIZ_QUESTIONS = [
  {
    id: 'q1',
    question: 'What was the primary interaction paradigm that distinguished Web 1.0 from Web 2.0?',
    options: [
      'Web 1.0 was read-only with centralized webmasters; Web 2.0 introduced read-write participatory user-generated content.',
      'Web 1.0 used JavaScript frameworks; Web 2.0 used static HTML tables.',
      'Web 1.0 was decentralized peer-to-peer; Web 2.0 was hosted exclusively on mainframes.',
      'Web 1.0 only supported mobile phones; Web 2.0 introduced desktop web browsers.'
    ],
    correctIndex: 0,
    explanation: 'Web 1.0 was primarily read-only brochureware; Web 2.0 enabled users to become creators through blogs, wikis, and social networking.'
  },
  {
    id: 'q2',
    question: 'Which technology was the primary catalyst enabling asynchronous background communication without page reloads in Web 2.0?',
    options: [
      'CGI Perl scripts',
      'AJAX (XMLHttpRequest / Fetch API)',
      'FTP file upload protocol',
      'HTML Framesets'
    ],
    correctIndex: 1,
    explanation: 'AJAX enabled web browsers to send background HTTP requests and receive JSON/XML payloads, dynamically updating the DOM in-place.'
  },
  {
    id: 'q3',
    question: 'In the Ruby on Rails MVC pattern, which component maps incoming URLs to specific controller actions?',
    options: [
      'ActiveRecord Model',
      'ERB View Template',
      'The Router (config/routes.rb)',
      'Database Migration Engine'
    ],
    correctIndex: 2,
    explanation: 'The Rails Router inspects HTTP verbs and URL paths, dispatching requests to designated controller actions by convention.'
  },
  {
    id: 'q4',
    question: 'What is the primary architectural purpose of Really Simple Syndication (RSS)?',
    options: [
      'To compile C++ code into WebAssembly.',
      'To provide standardized XML feeds allowing users and aggregators to subscribe to website updates automatically.',
      'To encrypt passwords stored in MySQL databases.',
      'To manage CSS grid layouts.'
    ],
    correctIndex: 1,
    explanation: 'RSS enables automated content syndication through standardized XML documents parsed on polling schedules by feed readers.'
  },
  {
    id: 'q5',
    question: 'What are the three components that make up an atomic RDF Triple in the Semantic Web?',
    options: [
      'Client, Server, Database',
      'Subject, Predicate, Object',
      'HTML, CSS, JavaScript',
      'Header, Body, Footer'
    ],
    correctIndex: 1,
    explanation: 'The Resource Description Framework models knowledge as directed graphs of atomic statements: (Subject) → [Predicate] → (Object).'
  },
  {
    id: 'q6',
    question: 'How does a Web Mashup differ from a traditional standalone web application?',
    options: [
      'It cannot execute JavaScript.',
      'It combines APIs and data feeds from two or more independent external sources into a unified composite interface.',
      'It requires a mainframe server.',
      'It does not use HTTP.'
    ],
    correctIndex: 1,
    explanation: 'A mashup aggregates disparate APIs (e.g. Google Maps + OpenWeather) into a cohesive composite application.'
  },
  {
    id: 'q7',
    question: 'In a 3-Tier Web Information System, what is the responsibility of the Application Tier?',
    options: [
      'To store binary backups on magnetic tape.',
      'To render pixels onto the user monitor.',
      'To execute business logic, validation rules, authentication, and coordinate data transactions.',
      'To register top-level DNS domain names.'
    ],
    correctIndex: 2,
    explanation: 'The Application/Logic tier contains the core enterprise rules and acts as a secure intermediary between browser clients and the database.'
  },
  {
    id: 'q8',
    question: 'What is an Inverted Index in a web search engine?',
    options: [
      'A list of all web pages sorted strictly by word count.',
      'A data structure that maps words/tokens to the exact list of documents and positions where they occur.',
      'A hardware chip that accelerates graphics rendering.',
      'A technique to invert CSS colors for dark mode.'
    ],
    correctIndex: 1,
    explanation: 'An inverted index maps terms to document IDs (posting lists), allowing search engines to evaluate keyword queries in milliseconds.'
  },
  {
    id: 'q9',
    question: 'What is the &quot;Cold-Start Problem&quot; in recommender systems?',
    options: [
      'Server fans failing during winter months.',
      'Difficulty generating recommendations for new users or new items due to a lack of historical interaction data.',
      'CSS animations lagging upon page load.',
      'Database deadlocks during high traffic.'
    ],
    correctIndex: 1,
    explanation: 'Collaborative filtering requires existing behavioral history; without past ratings, similarity metrics cannot score new items.'
  },
  {
    id: 'q10',
    question: 'Why does altering historical transaction data in Block #1 break subsequent blocks in a blockchain?',
    options: [
      'Because each subsequent block embeds the cryptographic hash of the previous block; changing data changes Block #1\'s hash and breaks the chain linkage.',
      'Because the server shuts down automatically.',
      'Because the browser cache empties.',
      'Because the user is logged out.'
    ],
    correctIndex: 0,
    explanation: 'Each block cryptographically incorporates the previous block\'s hash. Any modification produces an avalanche effect that invalidates all downstream hashes.'
  },
  {
    id: 'q11',
    question: 'Why does Edge Computing drastically reduce latency compared to centralized origin cloud servers?',
    options: [
      'It uses quantum entanglement instead of cables.',
      'It processes requests at regional Points of Presence (PoPs) located geographically close to the user, minimizing physical fiber transit distance.',
      'It disables TLS encryption.',
      'It replaces HTTP with FTP.'
    ],
    correctIndex: 1,
    explanation: 'Because data transit speed is bounded by the speed of light in glass, reducing physical travel distance to a nearby PoP reduces latency from hundreds of ms to single-digit ms.'
  },
  {
    id: 'q12',
    question: 'Which CSS feature is best suited for implementing seamless runtime theme toggling (Light/Dark mode)?',
    options: [
      'CSS Custom Properties (Variables) defined under :root and @media (prefers-color-scheme)',
      'Multiple duplicate HTML files for each color palette',
      'HTML <font color="..."> attributes on every tag',
      'JavaScript alert dialog boxes'
    ],
    correctIndex: 0,
    explanation: 'CSS custom properties allow dynamic token swapping in-place across the entire document without reloading stylesheets.'
  },
  {
    id: 'q13',
    question: 'What is the role of Wiki version history and diff tracking?',
    options: [
      'To slow down user edits.',
      'To provide transparency, collaborative accountability, and the ability to instantly rollback vandalism or errors.',
      'To compress image attachments.',
      'To restrict editing to administrators only.'
    ],
    correctIndex: 1,
    explanation: 'Wikis rely on open editing balanced by comprehensive version logs and diff comparisons to revert mistakes instantly.'
  },
  {
    id: 'q14',
    question: 'Which format is recommended by Schema.org and Google for embedding Linked Data into HTML documents without altering visual markup?',
    options: [
      'JSON-LD inside a <script type="application/ld+json"> tag',
      'Plain text comments <!-- comment -->',
      'CSV files attached to links',
      'Base64 encoded audio clips'
    ],
    correctIndex: 0,
    explanation: 'JSON-LD provides clean, decoupled machine-readable metadata that search crawlers parse without interfering with human visual presentation.'
  },
  {
    id: 'q15',
    question: 'Why should pure #000000 black and pure #ffffff white backgrounds/text be avoided in dark mode design?',
    options: [
      'Computers cannot render black pixels.',
      'Excessive harsh contrast causes optical halation, eye strain, and chromatic aberration on OLED displays.',
      'Pure black uses more electricity than soft slate gray.',
      'W3C has made pure black illegal in CSS specifications.'
    ],
    correctIndex: 1,
    explanation: 'Subtle slate/charcoal backgrounds (e.g. #0f172a) with off-white text (e.g. #f8fafc) provide optimal WCAG contrast without visual fatigue.'
  }
];

export default function WebEvolutionLab() {
  const [activeTab, setActiveTab] = useState('evolution-journey'); // 'evolution-journey' | 'quiz'

  // --- EVOLUTION JOURNEY STATE ---
  const [currentEraLevel, setCurrentEraLevel] = useState(1); // 1: Web 1.0, 2: Web 2.0, 3: Web 3.0
  const [journeyLog, setJourneyLog] = useState([
    'Deployed initial Web 1.0 static page: Static HTML, guestbook counter, brochure layout.'
  ]);

  const handleUpgradeToWeb2 = () => {
    setCurrentEraLevel(2);
    setJourneyLog(prev => [
      'Upgraded to Web 2.0: Injected AJAX asynchronous comment stream, RSS feed auto-polling, and interactive social reactions.',
      ...prev
    ]);
  };

  const handleUpgradeToWeb3 = () => {
    setCurrentEraLevel(3);
    setJourneyLog(prev => [
      'Upgraded to Web 3.0: Embedded Schema.org/RDF JSON-LD linked data, configured Edge CDN caching (14ms latency), and deployed cryptographic credentials.',
      ...prev
    ]);
  };

  const handleResetJourney = () => {
    setCurrentEraLevel(1);
    setJourneyLog(['Reset page to baseline Web 1.0 static architecture.']);
  };

  // --- QUIZ STATE ---
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleOptionSelect = (qId, optIdx) => {
    if (quizSubmitted) return;
    setSelectedAnswers({ ...selectedAnswers, [qId]: optIdx });
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
      <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-purple-500/30">
              <Award className="w-3.5 h-3.5" /> Unit 4 Capstone Laboratory
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              The Evolution of the Web Laboratory
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Progressively upgrade a website across three historical eras from 1991 to the emerging future, then test your mastery with the comprehensive 15-question Unit 4 diagnostic exam.
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-2 mt-6">
          <button
            onClick={() => setActiveTab('evolution-journey')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition ${
              activeTab === 'evolution-journey' ? 'bg-purple-600 text-white shadow' : 'bg-white/10 text-slate-300 hover:bg-white/15'
            }`}
          >
            <Layers className="w-4 h-4" /> 1. Interactive Era Upgrade Journey
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition ${
              activeTab === 'quiz' ? 'bg-purple-600 text-white shadow' : 'bg-white/10 text-slate-300 hover:bg-white/15'
            }`}
          >
            <HelpCircle className="w-4 h-4" /> 2. Comprehensive 15-Question Quiz
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6">
        {activeTab === 'evolution-journey' ? (
          <div className="space-y-6">
            {/* Upgrade Control Stepper */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Current Architectural State:</span>
                <div className="text-base font-bold text-slate-900 mt-0.5">
                  {currentEraLevel === 1 && 'Web 1.0: Static Brochureware & Guestbooks'}
                  {currentEraLevel === 2 && 'Web 2.0: Participatory Social Web with AJAX & APIs'}
                  {currentEraLevel === 3 && 'Web 3.0: Semantic Knowledge Graphs & Edge Acceleration'}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {currentEraLevel === 1 && (
                  <button
                    onClick={handleUpgradeToWeb2}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow transition flex items-center gap-1.5"
                  >
                    Upgrade to Web 2.0 <ArrowRight className="w-4 h-4" />
                  </button>
                )}
                {currentEraLevel === 2 && (
                  <button
                    onClick={handleUpgradeToWeb3}
                    className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow transition flex items-center gap-1.5"
                  >
                    Upgrade to Web 3.0 <ArrowRight className="w-4 h-4" />
                  </button>
                )}
                {currentEraLevel === 3 && (
                  <div className="px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Fully Modernized
                  </div>
                )}
                <button
                  onClick={handleResetJourney}
                  className="px-3 py-2 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Simulated Live Web Page Viewport */}
            <div className="border border-slate-300 rounded-2xl overflow-hidden shadow-sm bg-white">
              {/* Browser Address Bar */}
              <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 bg-white px-3 py-1 rounded text-xs font-mono text-slate-700 border border-slate-200 truncate">
                  {currentEraLevel === 1 && 'http://www.university.edu/~compsci/courses/webtech96.html'}
                  {currentEraLevel === 2 && 'https://portal.university.edu/courses/webtech/feed?ajax=true'}
                  {currentEraLevel === 3 && 'https://edge.university.edu/api/knowledge/webtech#v3 [Edge PoP: 14ms]'}
                </div>
              </div>

              {/* Web Page Content Rendering */}
              <div className="p-6">
                {currentEraLevel === 1 && (
                  <div className="space-y-4 font-serif">
                    <div className="p-2 bg-yellow-100 border border-yellow-300 text-yellow-900 text-xs font-bold text-center">
                      🌟 Welcome to the Department of Computer Science (Established 1994) 🌟
                    </div>
                    <h4 className="text-xl font-bold text-blue-800 underline">
                      Course Portal: CS 301 - Web Engineering
                    </h4>
                    <p className="text-xs text-slate-700 font-sans leading-relaxed">
                      Syllabus brochure hosted on the university file server. To obtain updates, reload this page or visit the departmental bulletin board in Turing Hall.
                    </p>
                    <div className="p-3 border border-slate-300 bg-slate-50 text-center font-mono text-xs">
                      [ Visitor Counter: #000,812 | Guestbook: 3 Signatures | Best viewed in 800x600 ]
                    </div>
                  </div>
                )}

                {currentEraLevel === 2 && (
                  <div className="space-y-4 font-sans">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900">
                          CS 301: Web Engineering Community Portal
                        </h4>
                        <div className="text-xs text-slate-500">
                          Powered by Ruby on Rails &amp; AJAX Asynchronous Feeds
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold">
                        Web 2.0 Active
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                      <div className="font-bold text-slate-800">Student Discussion Thread (Live AJAX):</div>
                      <div className="p-2 rounded bg-white border border-slate-200">
                        <strong>Zoya Patel:</strong> Has anyone tested the Open API explorer for assignment 2?
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Post instant comment without page reload..."
                          className="flex-1 text-xs px-2.5 py-1 rounded border border-slate-300 bg-white"
                        />
                        <button className="px-3 py-1 rounded bg-indigo-600 text-white text-xs font-semibold">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {currentEraLevel === 3 && (
                  <div className="space-y-4 font-sans">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div>
                        <h4 className="text-lg font-bold text-purple-950 flex items-center gap-2">
                          <Cpu className="w-5 h-5 text-purple-600" /> CS 301: Semantic Knowledge Fabric
                        </h4>
                        <div className="text-xs text-purple-700 font-mono">
                          Linked Data Entity • Cached at Regional Edge CDN (14ms response)
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold font-mono">
                        Schema.org JSON-LD
                      </span>
                    </div>

                    {/* Machine-Readable Graph Snippet */}
                    <div className="p-3 rounded-xl bg-slate-950 text-indigo-300 font-mono text-xs overflow-x-auto space-y-1">
                      <div className="text-slate-400">// Machine-Parsed Semantic Graph:</div>
                      <div>&lt;CS301&gt; schema:educationalCredentialAwarded &quot;Bachelor of Science&quot; ;</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;schema:hasCurriculum &lt;Unit4_Evolution&gt; ;</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;crypto:verifiableHash &quot;0000a18f94a821e0&quot; .</div>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center justify-between">
                      <span>✓ AI Agent Interoperability Enabled</span>
                      <span className="font-mono text-[11px]">Edge Cache Hit: 100%</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Architecture Upgrade Log */}
            <div className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs space-y-1.5">
              <div className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider pb-1">
                Evolutionary Deployment Audit Log:
              </div>
              {journeyLog.map((log, idx) => (
                <div key={idx} className="text-slate-300 text-[11px]">
                  • {log}
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ========================================================= */
          /* TAB 2: COMPREHENSIVE 15-QUESTION QUIZ */
          /* ========================================================= */
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
              <div>
                <h4 className="text-lg font-bold text-slate-900">Unit 4 Comprehensive Diagnostic Assessment</h4>
                <p className="text-xs text-slate-500">15 questions evaluating your mastery of Web 2.0, Web 3.0, Semantics, and Emerging Paradigms.</p>
              </div>
              {quizSubmitted ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-indigo-600">
                    Score: {calculateScore()} / {QUIZ_QUESTIONS.length} ({(calculateScore() / QUIZ_QUESTIONS.length * 100).toFixed(0)}%)
                  </span>
                  <button
                    onClick={handleResetQuiz}
                    className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Retake Quiz
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleGradeQuiz}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition"
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
                        <span className="text-indigo-600 mr-1.5">{qIndex + 1}.</span> {q.question}
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
                          optionStyle = 'bg-indigo-50 border-indigo-500 text-indigo-900 font-semibold';
                        }

                        return (
                          <div
                            key={optIdx}
                            onClick={() => handleOptionSelect(q.id, optIdx)}
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
