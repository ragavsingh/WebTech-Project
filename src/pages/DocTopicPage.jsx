import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Layers,
  Building2,
  Terminal,
  AlertTriangle,
  CheckCircle2,
  Copy,
  Check,
  BookOpen,
  Share2,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  FileCode,
  Info
} from 'lucide-react';
import { getDocTopicById, getAdjacentTopics, getDomainTopicForTopicId } from '../data/docCurriculum';
import TopicVisualDiagram from '../components/docs/TopicVisualDiagram';
import CodeBlock from '../components/docs/CodeBlock';

const SUBTOPIC_SECTIONS = [
  { id: 'overview', title: '1. Overview & Core Concept' },
  { id: 'architecture', title: '2. Technical Architecture & Blueprint' },
  { id: 'reallife', title: '3. Real-Life Industry Case' },
  { id: 'systems', title: '4. Systems, Tools & Standards' },
  { id: 'implementation', title: '5. Practical Implementation' },
  { id: 'pitfalls', title: '6. Common Pitfalls & Gotchas' },
];

export default function DocTopicPage() {
  const { topicId } = useParams();
  const navigate = useNavigate();

  const effectiveTopicId = topicId || '1.1-history-of-the-internet';
  const topic = getDocTopicById(effectiveTopicId);
  const domainTopic = getDomainTopicForTopicId(effectiveTopicId);
  const { prev, next } = getAdjacentTopics(effectiveTopicId);

  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState('overview');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll to top on topic change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActiveSectionId('overview');
    setScrollProgress(0);
  }, [effectiveTopicId]);

  // Track scroll progress percentage
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / total) * 100)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [effectiveTopicId]);

  // Track active section for right rail table of contents
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      { rootMargin: '-10% 0px -70% 0px' }
    );

    SUBTOPIC_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [effectiveTopicId]);

  const handleCopyCode = (codeText) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleShareTopic = () => {
    const liveUrl = `https://web-tech-project-rgv.vercel.app/topic/${effectiveTopicId}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(liveUrl);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  const scrollToSubtopic = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!topic) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-xl font-bold text-doc-text mb-2">Topic Not Found</h2>
        <p className="text-sm text-doc-muted mb-4">
          The requested engineering topic "{effectiveTopicId}" does not exist.
        </p>
        <Link
          to="/"
          className="px-4 py-2 text-xs font-semibold rounded-lg bg-doc-accent text-white hover:bg-doc-accentHover transition-colors"
        >
          Return to Overview
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen py-5 sm:py-8 px-3.5 sm:px-8 lg:px-12 xl:px-16 flex justify-center relative">
      {/* Top Reading Progress Bar (Fixed at top of screen) */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 pointer-events-none transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="w-full max-w-4xl min-w-0">
        {/* Top Action Bar: Clean, calm breadcrumbs without harsh divider lines or pill boxes */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-4 sm:pb-6 text-xs text-doc-muted dark:text-zinc-400">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <button
              onClick={() => (prev ? navigate(`/topic/${prev.id}`) : navigate('/'))}
              className="inline-flex items-center gap-1 py-1 text-doc-lightText dark:text-zinc-200 hover:text-doc-accent font-medium transition-colors shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
            <span className="text-zinc-300 dark:text-zinc-700 shrink-0">/</span>
            <span className="hidden sm:inline font-mono text-zinc-500 dark:text-zinc-400 truncate max-w-[140px] md:max-w-xs">{domainTopic.title}</span>
            <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700 shrink-0">/</span>
            <span className="text-doc-lightText dark:text-zinc-200 font-medium truncate max-w-[200px] sm:max-w-md">
              {topic.title}
            </span>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-2 text-[11px] font-mono text-zinc-500 dark:text-zinc-400 pt-1 sm:pt-0 border-t sm:border-0 border-zinc-200/50 dark:border-zinc-800/50">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-zinc-400" />
                {topic.readTime || '15 min read'}
              </span>
              <span>•</span>
              <span className="text-doc-accent font-semibold uppercase tracking-wider">
                {topic.difficulty || 'Fundamental'}
              </span>
            </div>
            <button
              onClick={handleShareTopic}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-zinc-200/80 dark:border-zinc-800/80 hover:border-doc-accent/60 bg-white dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-300 hover:text-doc-accent transition-colors shrink-0"
              title="Copy live Vercel link"
            >
              {copiedShare ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500 font-semibold text-[11px]">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="text-[11px]">Share</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Topic Header: Clean and breathable typography, no harsh border lines */}
        <header className="pt-2 sm:pt-4 pb-8 sm:pb-12">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-doc-accent">
              Topic {topic.code}
            </span>
            <span className="text-zinc-400 dark:text-zinc-600 font-mono text-xs">•</span>
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 truncate">
              {domainTopic.unitBadge} • {domainTopic.title}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-black tracking-tight text-doc-lightText dark:text-white leading-[1.2] mb-3 sm:mb-4 break-words">
            {topic.title}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            {topic.subtitle}
          </p>
        </header>

        {/* 6 Subtopic Sections: Breathable whitespace instead of harsh line dividers */}
        <article className="space-y-10 sm:space-y-16 text-doc-lightText dark:text-doc-text">
          {/* ========================================================= */}
          {/* 1. OVERVIEW & CORE CONCEPT */}
          {/* ========================================================= */}
          <section id="overview" className="scroll-mt-8 space-y-4">
            <div className="flex items-center gap-2 text-doc-accent text-xs font-mono font-bold uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Section 1</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {topic.overview?.heading || '1. Overview & Core Concept'}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 font-normal">
              {topic.overview?.lead}
            </p>

            {/* Real-World Analogy Callout Box: Soft surface, no harsh borders */}
            {topic.overview?.analogy && (
              <div className="my-6 p-5 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60">
                <div className="flex items-center gap-2 mb-2 text-amber-600 dark:text-amber-400 font-semibold text-xs tracking-wider uppercase font-mono">
                  <Sparkles className="w-4 h-4" />
                  <span>Real-World Physical Analogy</span>
                </div>
                <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-200 italic">
                  "{topic.overview.analogy}"
                </p>
              </div>
            )}

            {/* Core Architectural Takeaways Checklist */}
            {topic.overview?.keyPoints && (
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-bold">
                  Core Architectural Pillars
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {topic.overview.keyPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/40 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* ========================================================= */}
          {/* 2. TECHNICAL ARCHITECTURE & PROTOCOLS */}
          {/* ========================================================= */}
          <section id="architecture" className="scroll-mt-8 space-y-4">
            <div className="flex items-center gap-2 text-doc-accent text-xs font-mono font-bold uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Section 2</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {topic.architecture?.heading || '2. Technical Architecture & Protocols'}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              {topic.architecture?.description}
            </p>

            {/* Visual Vector Architecture Blueprint */}
            <TopicVisualDiagram
              topicId={topic.id}
              title={topic.title}
              company={topic.reallife?.company}
            />

            {/* ASCII Monospace Topology Diagram */}
            {topic.architecture?.diagram && (
              <div className="my-6 rounded-2xl overflow-hidden bg-zinc-950 text-zinc-100 border border-zinc-800/80 shadow-sm">
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800/80 bg-zinc-900/60 text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-doc-accent" />
                    <span>Protocol Architecture Topology</span>
                  </span>
                  <span>ASCII Diagram</span>
                </div>
                <div className="p-4 sm:p-5 overflow-x-auto text-[11px] sm:text-xs font-mono leading-relaxed select-text">
                  <pre className="m-0 font-mono text-zinc-300">{topic.architecture.diagram.trim()}</pre>
                </div>
              </div>
            )}

            {/* RFC / Standards Specifications */}
            {topic.architecture?.specifications && (
              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-bold mb-2">
                  Standard Specifications & RFCs
                </h4>
                <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                  {topic.architecture.specifications.map((spec, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-doc-accent shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* ========================================================= */}
          {/* 3. REAL-LIFE INDUSTRY EXAMPLE & CONTEXT */}
          {/* ========================================================= */}
          <section id="reallife" className="scroll-mt-8 space-y-4">
            <div className="flex items-center gap-2 text-doc-accent text-xs font-mono font-bold uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>Section 3</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {topic.reallife?.heading || '3. Real-Life Industry Example & Context'}
            </h2>

            <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/50 p-4 sm:p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-zinc-200/50 dark:border-zinc-800/50">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                    Industrial Case Study
                  </span>
                  <span className="font-semibold text-sm text-zinc-900 dark:text-white">
                    {topic.reallife?.company}
                  </span>
                </div>
                <span className="text-xs text-zinc-500 font-mono">{topic.reallife?.scenario}</span>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold mb-1.5">
                  Production Engineering Mechanism
                </h4>
                <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
                  {topic.reallife?.howItWorks}
                </p>
              </div>

              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold mb-1">
                  Measurable Industry Impact
                </h4>
                <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 font-medium">
                  {topic.reallife?.impact}
                </p>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* 4. SYSTEMS, TOOLS & STANDARDS USED IN THE FIELD */}
          {/* ========================================================= */}
          <section id="systems" className="scroll-mt-8 space-y-4">
            <div className="flex items-center gap-2 text-doc-accent text-xs font-mono font-bold uppercase tracking-wider">
              <Terminal className="w-4 h-4" />
              <span>Section 4</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {topic.systems?.heading || '4. Systems, Tools & Standards Used in the Field'}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              {topic.systems?.description}
            </p>

            {/* Industrial Tooling Stack Grid */}
            {topic.systems?.tools && (
              <div className="pt-2 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold">
                  Operational Tools & Diagnostic Stacks
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {topic.systems.tools.map((tool, idx) => {
                    const [toolName, ...descParts] = tool.split(':');
                    return (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/40"
                      >
                        <span className="font-mono text-xs font-bold text-doc-accent block mb-1">
                          {toolName}
                        </span>
                        <span className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {descParts.join(':').trim() || tool}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Standards & Regulatory Bodies */}
            {topic.systems?.standards && (
              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold mb-2">
                  Governance & Standardization
                </h4>
                <div className="flex flex-wrap gap-2">
                  {topic.systems.standards.map((std, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-800/60"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* ========================================================= */}
          {/* 5. PRACTICAL IMPLEMENTATION & CODE */}
          {/* ========================================================= */}
          <section id="implementation" className="scroll-mt-8 space-y-4">
            <div className="flex items-center gap-2 text-doc-accent text-xs font-mono font-bold uppercase tracking-wider">
              <FileCode className="w-4 h-4" />
              <span>Section 5</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {topic.implementation?.heading || '5. Practical Implementation & Code'}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              {topic.implementation?.explanation}
            </p>

            {/* Code Block Container with Syntax Highlighting and Line Numbers */}
            {topic.implementation?.code && (
              <CodeBlock
                code={topic.implementation.code}
                language={topic.implementation.language || 'javascript'}
              />
            )}
          </section>

          {/* ========================================================= */}
          {/* 6. COMMON PITFALLS & PRODUCTION GOTCHAS */}
          {/* ========================================================= */}
          <section id="pitfalls" className="scroll-mt-8 space-y-4">
            <div className="flex items-center gap-2 text-doc-accent text-xs font-mono font-bold uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>Section 6</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {topic.pitfalls?.heading || '6. Common Pitfalls & Production Gotchas'}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Critical failure modes and misconceptions frequently encountered in high-scale production systems:
            </p>

            <div className="space-y-4 pt-2">
              {topic.pitfalls?.items?.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 overflow-hidden bg-zinc-50 dark:bg-zinc-900/40"
                >
                  {/* Mistake */}
                  <div className="p-4 bg-red-500/5 dark:bg-red-500/10 flex items-start gap-3 border-b border-zinc-200/40 dark:border-zinc-800/40">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-red-500/15 text-red-600 dark:text-red-400 shrink-0 mt-0.5">
                      Mistake
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {item.mistake}
                    </p>
                  </div>

                  {/* Reality */}
                  <div className="p-4 bg-emerald-500/5 dark:bg-emerald-500/10 flex items-start gap-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                      Reality
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      {item.reality}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* Bottom Pagination: Previous and Next Topic Navigation with strict containment */}
        <nav className="pt-8 sm:pt-16 pb-12 sm:pb-16 mt-10 sm:mt-16 border-t border-zinc-200/60 dark:border-zinc-800/60 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full min-w-0">
          {prev ? (
            <Link
              to={`/topic/${prev.id}`}
              className="group flex flex-col p-4 sm:p-5 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 hover:border-doc-accent/60 bg-zinc-50/50 dark:bg-zinc-900/30 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all text-left min-w-0 overflow-hidden"
            >
              <span className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono mb-1 group-hover:text-doc-accent transition-colors shrink-0">
                <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
                <span>Previous Topic</span>
              </span>
              <span className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-doc-accent transition-colors truncate block w-full max-w-full">
                {prev.code} {prev.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {next && (
            <Link
              to={`/topic/${next.id}`}
              className="group flex flex-col p-4 sm:p-5 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 hover:border-doc-accent/60 bg-zinc-50/50 dark:bg-zinc-900/30 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all text-left sm:text-right sm:items-end min-w-0 overflow-hidden"
            >
              <span className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono mb-1 group-hover:text-doc-accent transition-colors shrink-0">
                <span>Next Topic</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </span>
              <span className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-doc-accent transition-colors truncate block w-full max-w-full">
                {next.code} {next.title}
              </span>
            </Link>
          )}
        </nav>
      </div>

      {/* Right Sticky Table of Contents ("On this page") — Clean and minimal, no left dividing border line */}
      <aside className="hidden xl:block w-64 shrink-0 pl-10">
        <div className="sticky top-12 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold">
            On this page
          </div>
          <nav className="space-y-1 text-xs">
            {SUBTOPIC_SECTIONS.map((sec) => {
              const isActive = activeSectionId === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSubtopic(sec.id)}
                  className={`block text-left w-full py-1 text-[12px] transition-colors truncate ${
                    isActive
                      ? 'text-doc-accent font-semibold'
                      : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                  }`}
                >
                  {sec.title}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </div>
  );
}
