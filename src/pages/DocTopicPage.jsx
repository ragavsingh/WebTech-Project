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

const SUBTOPIC_SECTIONS = [
  { id: 'overview', title: '1. Overview & Core Concept' },
  { id: 'architecture', title: '2. Technical Architecture & Protocols' },
  { id: 'reallife', title: '3. Real-Life Industry Context' },
  { id: 'systems', title: '4. Systems, Tools & Standards' },
  { id: 'implementation', title: '5. Practical Implementation' },
  { id: 'pitfalls', title: '6. Common Pitfalls & Gotchas' },
];

export default function DocTopicPage() {
  const { topicId } = useParams();
  const navigate = useNavigate();

  // If no topicId in URL, default to 1.1
  const effectiveTopicId = topicId || '1.1-history-of-the-internet';
  const topic = getDocTopicById(effectiveTopicId);
  const domainTopic = getDomainTopicForTopicId(effectiveTopicId);
  const { prev, next } = getAdjacentTopics(effectiveTopicId);

  const [copiedCode, setCopiedCode] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState('overview');

  // Scroll to top on topic change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActiveSectionId('overview');
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
          className="px-4 py-2 text-xs font-semibold rounded-lg bg-doc-text text-doc-bg hover:opacity-90 transition-opacity"
        >
          Return to Overview
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen py-8 px-4 sm:px-8 lg:px-12 xl:px-16 flex justify-center">
      <div className="w-full max-w-4xl min-w-0">
        {/* Top Action Bar: Back button, Breadcrumb & Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-doc-border/60 dark:border-doc-border/60 border-doc-lightBorder/80 text-xs">
          <div className="flex items-center gap-2 text-doc-muted dark:text-doc-muted text-doc-lightMuted">
            <button
              onClick={() => (prev ? navigate(`/topic/${prev.id}`) : navigate('/'))}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-doc-border dark:border-doc-border border-doc-lightBorder hover:bg-doc-border/30 dark:hover:bg-doc-border/30 hover:bg-doc-lightBorder/60 text-doc-text dark:text-doc-text text-doc-lightText font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Go back</span>
            </button>
            <span className="text-doc-muted/40">/</span>
            <span className="font-mono text-doc-muted font-medium">{domainTopic.title}</span>
            <span className="text-doc-muted/40">/</span>
            <span className="text-doc-text dark:text-doc-text text-doc-lightText font-medium truncate max-w-[180px] sm:max-w-xs">
              {topic.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-mono bg-doc-border/50 dark:bg-doc-border/50 bg-doc-lightBorder text-doc-muted dark:text-doc-muted text-doc-lightMuted border border-doc-border/40">
              <Clock className="w-3 h-3" />
              {topic.readTime || '15 min read'}
            </span>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold bg-doc-accent/10 text-doc-accent border border-doc-accent/25">
              {topic.difficulty || 'Fundamental'}
            </span>
          </div>
        </div>

        {/* Topic Header: Code, Domain Badge, Big Title & Lead Paragraph */}
        <header className="pt-8 pb-10 border-b border-doc-border/60 dark:border-doc-border/60 border-doc-lightBorder/80">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-2.5 py-1 rounded-md font-mono text-xs font-bold tracking-wider uppercase bg-doc-accent/15 text-doc-accent border border-doc-accent/30">
              Topic {topic.code}
            </span>
            <span className="px-2.5 py-1 rounded-md font-mono text-xs text-doc-muted bg-doc-border/40 dark:bg-doc-border/40 bg-doc-lightBorder/60 border border-doc-border/60">
              {domainTopic.unitBadge} • {domainTopic.title}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-doc-text dark:text-doc-text text-doc-lightText leading-[1.15] mb-4">
            {topic.title}
          </h1>
          <p className="text-base sm:text-lg text-doc-muted dark:text-doc-muted text-doc-lightMuted leading-relaxed font-normal">
            {topic.subtitle}
          </p>
        </header>

        {/* 6 Comprehensive Subtopic Sections */}
        <article className="divide-y divide-doc-border/60 dark:divide-doc-border/60 divide-doc-lightBorder/80 text-doc-text dark:text-doc-text text-doc-lightText">
          {/* ========================================================= */}
          {/* 1. OVERVIEW & CORE CONCEPT */}
          {/* ========================================================= */}
          <section id="overview" className="py-10 scroll-mt-6">
            <div className="flex items-center gap-2 text-doc-accent text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Section 1</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-doc-text dark:text-doc-text text-doc-lightText mb-4">
              {topic.overview?.heading || '1. Overview & Core Concept'}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-doc-text/90 dark:text-doc-text/90 text-doc-lightText/90 mb-6 font-normal">
              {topic.overview?.lead}
            </p>

            {/* Real-World Intuition / Analogy Callout Box */}
            {topic.overview?.analogy && (
              <div className="my-6 p-5 rounded-xl border border-doc-border dark:border-doc-border border-doc-lightBorder bg-doc-surface/70 dark:bg-doc-surface/70 bg-doc-lightSurface/70">
                <div className="flex items-center gap-2 mb-2 text-amber-500 font-semibold text-xs tracking-wider uppercase">
                  <Sparkles className="w-4 h-4" />
                  <span>Real-World Physical Analogy</span>
                </div>
                <p className="text-sm leading-relaxed text-doc-text/85 dark:text-doc-text/85 text-doc-lightText/85 italic">
                  "{topic.overview.analogy}"
                </p>
              </div>
            )}

            {/* Key Architectural Takeaways Checklist */}
            {topic.overview?.keyPoints && (
              <div className="space-y-2.5 mt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-doc-muted font-bold">
                  Core Architectural Pillars
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {topic.overview.keyPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-lg border border-doc-border/40 dark:border-doc-border/40 border-doc-lightBorder/60 bg-doc-surface/30 dark:bg-doc-surface/30 bg-doc-lightSurface/40 text-xs sm:text-sm text-doc-text/90 dark:text-doc-text/90 text-doc-lightText/90"
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
          <section id="architecture" className="py-10 scroll-mt-6">
            <div className="flex items-center gap-2 text-doc-accent text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              <span>Section 2</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-doc-text dark:text-doc-text text-doc-lightText mb-4">
              {topic.architecture?.heading || '2. Technical Architecture & Protocols'}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-doc-text/90 dark:text-doc-text/90 text-doc-lightText/90 mb-6">
              {topic.architecture?.description}
            </p>

            {/* Visual Vector Architecture Blueprint */}
            <TopicVisualDiagram
              topicId={topic.id}
              title={topic.title}
              company={topic.reallife?.company}
            />

            {/* ASCII / Monospace Architecture Diagram */}
            {topic.architecture?.diagram && (
              <div className="my-6 rounded-xl border border-doc-border dark:border-doc-border border-doc-lightBorder overflow-hidden bg-doc-surface dark:bg-doc-surface bg-doc-lightSurface">
                <div className="flex items-center justify-between px-4 py-2 border-b border-doc-border dark:border-doc-border border-doc-lightBorder bg-doc-bg/60 dark:bg-doc-bg/60 bg-doc-lightBg/60 text-[11px] font-mono text-doc-muted">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-doc-accent" />
                    <span>Protocol Architecture Topology</span>
                  </span>
                  <span>ASCII Diagram</span>
                </div>
                <div className="p-4 overflow-x-auto text-[11px] sm:text-xs font-mono text-doc-text/90 dark:text-doc-text/90 text-doc-lightText/90 leading-tight select-text">
                  <pre className="m-0 font-mono">{topic.architecture.diagram.trim()}</pre>
                </div>
              </div>
            )}

            {/* RFC / Standards Specifications */}
            {topic.architecture?.specifications && (
              <div className="mt-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-doc-muted font-bold mb-2">
                  Standard Specifications & RFCs
                </h4>
                <ul className="space-y-1.5 text-xs text-doc-muted dark:text-doc-muted text-doc-lightMuted font-mono">
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
          <section id="reallife" className="py-10 scroll-mt-6">
            <div className="flex items-center gap-2 text-doc-accent text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Building2 className="w-4 h-4" />
              <span>Section 3</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-doc-text dark:text-doc-text text-doc-lightText mb-4">
              {topic.reallife?.heading || '3. Real-Life Industry Example & Context'}
            </h2>

            <div className="rounded-xl border border-doc-border dark:border-doc-border border-doc-lightBorder bg-doc-surface/50 dark:bg-doc-surface/50 bg-doc-lightSurface/50 p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-doc-border/60 dark:border-doc-border/60 border-doc-lightBorder/80 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-amber-500/15 text-amber-500 border border-amber-500/30">
                    Industrial Case Study
                  </span>
                  <span className="font-semibold text-sm text-doc-text dark:text-doc-text text-doc-lightText">
                    {topic.reallife?.company}
                  </span>
                </div>
                <span className="text-xs text-doc-muted font-mono">{topic.reallife?.scenario}</span>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-doc-muted font-bold mb-1.5">
                  Production Engineering Mechanism
                </h4>
                <p className="text-sm leading-relaxed text-doc-text/90 dark:text-doc-text/90 text-doc-lightText/90">
                  {topic.reallife?.howItWorks}
                </p>
              </div>

              <div className="pt-2 border-t border-doc-border/40 dark:border-doc-border/40 border-doc-lightBorder/60">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-bold mb-1">
                  Measurable Industry Impact
                </h4>
                <p className="text-xs sm:text-sm text-doc-text/85 dark:text-doc-text/85 text-doc-lightText/85 font-medium">
                  {topic.reallife?.impact}
                </p>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* 4. SYSTEMS, TOOLS & STANDARDS USED IN THE FIELD */}
          {/* ========================================================= */}
          <section id="systems" className="py-10 scroll-mt-6">
            <div className="flex items-center gap-2 text-doc-accent text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Terminal className="w-4 h-4" />
              <span>Section 4</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-doc-text dark:text-doc-text text-doc-lightText mb-4">
              {topic.systems?.heading || '4. Systems, Tools & Standards Used in the Field'}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-doc-text/90 dark:text-doc-text/90 text-doc-lightText/90 mb-6">
              {topic.systems?.description}
            </p>

            {/* Industrial Tooling Stack */}
            {topic.systems?.tools && (
              <div className="mb-6 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-doc-muted font-bold">
                  Operational Tools & Diagnostic Stacks
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {topic.systems.tools.map((tool, idx) => {
                    const [toolName, ...descParts] = tool.split(':');
                    return (
                      <div
                        key={idx}
                        className="p-3 rounded-lg border border-doc-border/60 dark:border-doc-border/60 border-doc-lightBorder/80 bg-doc-surface/40 dark:bg-doc-surface/40 bg-doc-lightSurface/40"
                      >
                        <span className="font-mono text-xs font-bold text-doc-accent block mb-1">
                          {toolName}
                        </span>
                        <span className="text-xs text-doc-muted dark:text-doc-muted text-doc-lightMuted leading-relaxed">
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
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-doc-muted font-bold mb-2">
                  Governance & Standardization
                </h4>
                <div className="flex flex-wrap gap-2">
                  {topic.systems.standards.map((std, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono border border-doc-border dark:border-doc-border border-doc-lightBorder bg-doc-surface/60 text-doc-text/80"
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
          <section id="implementation" className="py-10 scroll-mt-6">
            <div className="flex items-center gap-2 text-doc-accent text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <FileCode className="w-4 h-4" />
              <span>Section 5</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-doc-text dark:text-doc-text text-doc-lightText mb-4">
              {topic.implementation?.heading || '5. Practical Implementation & Code'}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-doc-text/90 dark:text-doc-text/90 text-doc-lightText/90 mb-4">
              {topic.implementation?.explanation}
            </p>

            {/* Code Block Container */}
            {topic.implementation?.code && (
              <div className="my-6 rounded-xl border border-doc-border dark:border-doc-border border-doc-lightBorder overflow-hidden bg-doc-surface dark:bg-doc-surface bg-doc-lightSurface shadow-sm">
                {/* Code Header Bar */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-doc-border dark:border-doc-border border-doc-lightBorder bg-doc-bg/80 dark:bg-doc-bg/80 bg-doc-lightBg/80 text-xs font-mono">
                  <span className="flex items-center gap-2 text-doc-muted">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    <span className="uppercase text-[11px] font-semibold text-doc-text ml-2">
                      {topic.implementation.language || 'code'}
                    </span>
                  </span>

                  <button
                    onClick={() => handleCopyCode(topic.implementation.code)}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono border border-doc-border/60 hover:bg-doc-border/40 text-doc-text transition-colors"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-doc-muted" />
                        <span>Copy snippet</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Preformatted Code */}
                <div className="p-4 overflow-x-auto text-xs sm:text-[13px] font-mono leading-relaxed text-doc-text dark:text-doc-text text-doc-lightText bg-doc-surface dark:bg-doc-surface bg-doc-lightSurface select-text">
                  <pre className="m-0 font-mono">{topic.implementation.code.trim()}</pre>
                </div>
              </div>
            )}
          </section>

          {/* ========================================================= */}
          {/* 6. COMMON PITFALLS & PRODUCTION GOTCHAS */}
          {/* ========================================================= */}
          <section id="pitfalls" className="py-10 scroll-mt-6">
            <div className="flex items-center gap-2 text-doc-accent text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>Section 6</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-doc-text dark:text-doc-text text-doc-lightText mb-4">
              {topic.pitfalls?.heading || '6. Common Pitfalls & Production Gotchas'}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-doc-muted dark:text-doc-muted text-doc-lightMuted mb-6">
              Critical failure modes and misconceptions frequently encountered in high-scale production systems:
            </p>

            <div className="space-y-4">
              {topic.pitfalls?.items?.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-doc-border dark:border-doc-border border-doc-lightBorder overflow-hidden bg-doc-surface/40 dark:bg-doc-surface/40 bg-doc-lightSurface/40 divide-y divide-doc-border/40"
                >
                  {/* Mistake */}
                  <div className="p-4 bg-red-500/5 dark:bg-red-500/10 flex items-start gap-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-red-500/15 text-red-500 shrink-0 mt-0.5">
                      Mistake
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-doc-text dark:text-doc-text text-doc-lightText">
                      {item.mistake}
                    </p>
                  </div>

                  {/* Reality */}
                  <div className="p-4 bg-emerald-500/5 dark:bg-emerald-500/10 flex items-start gap-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-500 shrink-0 mt-0.5">
                      Reality
                    </span>
                    <p className="text-xs sm:text-sm text-doc-text/85 dark:text-doc-text/85 text-doc-lightText/85 leading-relaxed">
                      {item.reality}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* Bottom Pagination: Previous and Next Topic Navigation */}
        <nav className="pt-10 pb-16 mt-8 border-t border-doc-border/60 dark:border-doc-border/60 border-doc-lightBorder/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prev ? (
            <Link
              to={`/topic/${prev.id}`}
              className="group flex flex-col p-4 rounded-xl border border-doc-border dark:border-doc-border border-doc-lightBorder hover:border-doc-accent/60 bg-doc-surface/40 dark:bg-doc-surface/40 bg-doc-lightSurface/40 hover:bg-doc-surface/80 transition-all text-left"
            >
              <span className="flex items-center gap-1.5 text-xs text-doc-muted font-mono mb-1 group-hover:text-doc-accent transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous Topic</span>
              </span>
              <span className="text-sm font-semibold text-doc-text dark:text-doc-text text-doc-lightText group-hover:text-doc-accent transition-colors truncate">
                {prev.code} {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next && (
            <Link
              to={`/topic/${next.id}`}
              className="group flex flex-col p-4 rounded-xl border border-doc-border dark:border-doc-border border-doc-lightBorder hover:border-doc-accent/60 bg-doc-surface/40 dark:bg-doc-surface/40 bg-doc-lightSurface/40 hover:bg-doc-surface/80 transition-all text-right sm:items-end"
            >
              <span className="flex items-center gap-1.5 text-xs text-doc-muted font-mono mb-1 group-hover:text-doc-accent transition-colors">
                <span>Next Topic</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <span className="text-sm font-semibold text-doc-text dark:text-doc-text text-doc-lightText group-hover:text-doc-accent transition-colors truncate">
                {next.code} {next.title}
              </span>
            </Link>
          )}
        </nav>
      </div>

      {/* Right Sticky Table of Contents ("On this page") */}
      <aside className="hidden xl:block w-64 shrink-0 pl-10">
        <div className="sticky top-12 space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-doc-muted dark:text-doc-muted text-doc-lightMuted font-bold">
            On this page
          </div>
          <nav className="space-y-1 text-xs border-l border-doc-border/60 dark:border-doc-border/60 border-doc-lightBorder/80 pl-3">
            {SUBTOPIC_SECTIONS.map((sec) => {
              const isActive = activeSectionId === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSubtopic(sec.id)}
                  className={`block text-left w-full py-1 text-[12px] transition-colors truncate ${
                    isActive
                      ? 'text-doc-accent font-semibold -ml-3 pl-3 border-l-2 border-doc-accent'
                      : 'text-doc-muted dark:text-doc-muted text-doc-lightMuted hover:text-doc-text dark:hover:text-doc-text hover:text-doc-lightText'
                  }`}
                >
                  {sec.title}
                </button>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-doc-border/40 text-[11px] text-doc-muted space-y-1 font-mono">
            <div>Topic Code: {topic.code}</div>
            <div>Read Time: {topic.readTime}</div>
            <div>Difficulty: {topic.difficulty}</div>
          </div>
        </div>
      </aside>
    </div>
  );
}
