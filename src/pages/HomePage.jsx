import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  FlaskConical, 
  Award, 
  HelpCircle, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Globe, 
  ShieldCheck, 
  Eye,
  Terminal,
  Activity
} from 'lucide-react';
import { UNITS } from '../data/curriculum';
import { useProgress } from '../context/ProgressContext';

export default function HomePage() {
  const { overallPercentage, completedTopicsCount, totalAvailableTopics } = useProgress();

  const cycleSteps = [
    { step: '01', name: 'Explain', desc: 'Clear definitions and why the concept matters in real production environments.', icon: BookOpen, color: 'text-blue-600 bg-blue-50' },
    { step: '02', name: 'Visualize', desc: 'Architectural diagrams and packet flow animations rather than walls of text.', icon: Eye, color: 'text-indigo-600 bg-indigo-50' },
    { step: '03', name: 'Interact', desc: 'Manipulate live parameters, toggles, domain inputs, and mock latency sliders.', icon: Zap, color: 'text-violet-600 bg-violet-50' },
    { step: '04', name: 'Experiment', desc: 'Run terminal inspection commands, CLI queries, and inspect raw wire formats.', icon: Terminal, color: 'text-purple-600 bg-purple-50' },
    { step: '05', name: 'Practice', desc: 'Solve real-world debugging challenges and identify configuration bugs.', icon: Award, color: 'text-emerald-600 bg-emerald-50' },
    { step: '06', name: 'Quiz', desc: 'Test retention with targeted multiple-choice checks and immediate feedback.', icon: HelpCircle, color: 'text-amber-600 bg-amber-50' },
  ];

  const featuredSims = [
    {
      id: 'dns-resolution',
      title: 'DNS Resolution Lab',
      unit: 'Unit 1: Fundamentals',
      desc: 'Trace DNS queries step-by-step from browser cache to Root, TLD, and Authoritative nameservers.',
      icon: Globe,
      badge: 'Live Packet Sim'
    },
    {
      id: 'http-lifecycle',
      title: 'HTTP Wire Inspector',
      unit: 'Unit 1: Fundamentals',
      desc: 'Formulate GET/POST requests, configure custom headers, and inspect live response codes and payloads.',
      icon: Activity,
      badge: 'Wire Protocol'
    },
    {
      id: 'dom-tree-hierarchy',
      title: 'DOM Tree Sandbox',
      unit: 'Unit 2: HTML5 & DOM',
      desc: 'Append, remove, and mutate elements to observe synchronous DOM tree construction and paint events.',
      icon: Layers,
      badge: 'Tree Mutation'
    },
    {
      id: 'css-box-model',
      title: 'CSS Box Model Geometry',
      unit: 'Unit 3: CSS3 & Layouts',
      desc: 'Adjust margins, borders, paddings, and compare content-box vs border-box sizing in real-time.',
      icon: Sparkles,
      badge: 'Layout Engine'
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* 1. Hero Section */}
      <section className="relative pt-12 sm:pt-20 pb-12 overflow-hidden">
        {/* Soft background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-200/40 via-blue-200/30 to-purple-200/20 blur-3xl -z-10 rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-6 px-4">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Not Just Notes — An Interactive Learning &amp; Simulation Platform</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Master Web Technology through{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Live Simulation
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Move beyond static documentation. Explore DNS packet routing, inspect raw HTTP headers, manipulate the DOM tree, and verify your mastery with hands-on challenges and quizzes.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <Link
              to="/topic/dns-resolution"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-card hover:shadow-card-hover transition-all flex items-center space-x-2 group"
            >
              <span>Start Learning Unit 1</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              to="/playground"
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-sm font-semibold shadow-card hover:shadow-card-hover transition-all flex items-center space-x-2"
            >
              <FlaskConical className="w-4 h-4 text-indigo-600" />
              <span>Explore Simulators</span>
            </Link>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-slate-500">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>5 Curriculum Units</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Live Packet &amp; DOM Simulators</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Interactive Quizzes &amp; Challenges</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The 6-Step Learning Cycle Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600">
            Pedagogical Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            The 6-Step Learning Cycle
          </h2>
          <p className="text-sm text-slate-500">
            Every concept is taught using a progressive loop engineered for genuine technical retention.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {cycleSteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {item.step}
                    </span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Featured Interactive Simulators Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600">
              Interactive Sandboxes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Featured Visual Simulators
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Interact with network hops, protocol payloads, and layout geometry directly.
            </p>
          </div>
          <Link
            to="/playground"
            className="inline-flex items-center text-xs font-semibold text-indigo-600 hover:text-indigo-800 space-x-1"
          >
            <span>View all playgrounds</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredSims.map((sim) => {
            const Icon = sim.icon;
            return (
              <Link
                key={sim.id}
                to={`/topic/${sim.id}`}
                className="group bg-white rounded-2xl p-6 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-indigo-200 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                      {sim.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block mb-0.5">
                      {sim.unit}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-900 transition-colors">
                      {sim.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {sim.desc}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-semibold text-indigo-600 group-hover:translate-x-1 transition-transform">
                  <span>Open Interactive Lab</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 4. Complete Syllabus Units Overview (Units 1 - 5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600">
            Curriculum Structure
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive 5-Unit Curriculum
          </h2>
          <p className="text-sm text-slate-500">
            Organized systematically from fundamental network protocols to modern asynchronous architectures and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {UNITS.map((unit) => (
            <div
              key={unit.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-indigo-100/70 text-indigo-800 text-xs font-bold flex items-center justify-center font-mono">
                    U{unit.number}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    ~{unit.estimatedHours} hrs
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {unit.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {unit.description}
                </p>

                {/* Topics preview list */}
                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    Key Topics ({unit.topics.length}):
                  </span>
                  {unit.topics.map((t) => (
                    <div key={t.id} className="flex items-center justify-between text-xs text-slate-700">
                      <span className="truncate pr-2">&bull; {t.title}</span>
                      {t.isImplemented ? (
                        <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 shrink-0">
                          Active Lab
                        </span>
                      ) : (
                        <span className="text-[9px] font-mono text-slate-400 shrink-0">
                          Planned
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to={unit.topics[0]?.isImplemented ? `/topic/${unit.topics[0].id}` : '/learn'}
                  className="w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 text-xs font-semibold border border-slate-200/80 transition-colors flex items-center justify-center space-x-1"
                >
                  <span>Explore Unit Topics</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Bottom Callout */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 text-white p-8 sm:p-12 text-center space-y-5 shadow-2xl relative overflow-hidden">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Ready to verify your web knowledge?
            </h3>
            <p className="text-xs sm:text-sm text-indigo-200 max-w-xl mx-auto leading-relaxed">
              Start with Unit 1 to understand how requests travel across the world, or test your skills in the Playground.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/topic/dns-resolution"
              className="px-5 py-2.5 rounded-xl bg-white text-indigo-950 font-bold text-xs hover:bg-indigo-50 transition-colors shadow-md"
            >
              Start With DNS Resolution
            </Link>
            <Link
              to="/challenges"
              className="px-5 py-2.5 rounded-xl bg-indigo-800/80 hover:bg-indigo-800 text-white font-semibold text-xs border border-indigo-700 transition-colors"
            >
              Solve Challenges
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
