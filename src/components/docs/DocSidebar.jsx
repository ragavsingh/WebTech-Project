import React, { useState, useEffect } from 'react';
import { NavLink, useParams, useLocation } from 'react-router-dom';
import {
  Search,
  Sun,
  Moon,
  ChevronDown,
  ChevronRight,
  BookOpen,
  FileText,
  Layers,
  Cpu,
  Shield,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Terminal,
  Bookmark,
  GraduationCap
} from 'lucide-react';
import { DOC_CHAPTERS } from '../../data/docCurriculum';
import { useTheme } from '../../context/ThemeContext';

const SUBTOPIC_ANCHORS = [
  { id: 'overview', label: '1. Overview & Concept' },
  { id: 'architecture', label: '2. Architecture & Protocols' },
  { id: 'reallife', label: '3. Real-Life Industry Case' },
  { id: 'systems', label: '4. Systems, Tools & Standards' },
  { id: 'implementation', label: '5. Practical Implementation' },
  { id: 'pitfalls', label: '6. Common Pitfalls' },
];

export default function DocSidebar({ onOpenSearch, onOpenSyllabus, onCloseMobile }) {
  const { topicId } = useParams();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Active topic ID (defaults to '1.1-history-of-the-internet' if root)
  const currentTopicId = topicId || '1.1-history-of-the-internet';

  // Determine which chapter the active topic belongs to
  const activeChapter = DOC_CHAPTERS.find(ch =>
    ch.topics.some(t => t.id === currentTopicId)
  );

  // Expanded chapters state (keep active chapter expanded by default)
  const [expandedChapters, setExpandedChapters] = useState(() => {
    const initial = {};
    DOC_CHAPTERS.forEach(ch => {
      initial[ch.id] = ch.id === (activeChapter?.id || 'chapter-1');
    });
    return initial;
  });

  // Keep active chapter expanded when route changes
  useEffect(() => {
    if (activeChapter) {
      setExpandedChapters(prev => ({ ...prev, [activeChapter.id]: true }));
    }
  }, [activeChapter]);

  const toggleChapter = (chapterId) => {
    setExpandedChapters(prev => ({
      ...prev,
      [chapterId]: !prev[chapterId]
    }));
  };

  const scrollToSubtopic = (subId) => {
    if (onCloseMobile) onCloseMobile();
    const elem = document.getElementById(subId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside className="w-full h-full flex flex-col bg-doc-sidebar dark:bg-doc-sidebar bg-doc-lightSidebar border-r border-doc-border dark:border-doc-border border-doc-lightBorder select-none text-doc-text dark:text-doc-text text-doc-lightText transition-colors">
      {/* Brand Header: Named "WebTech" */}
      <div className="p-4 border-b border-doc-border dark:border-doc-border border-doc-lightBorder flex items-center justify-between">
        <NavLink
          to="/"
          onClick={onCloseMobile}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg bg-doc-text text-doc-bg dark:bg-doc-text dark:text-doc-bg bg-doc-lightText text-doc-lightBg flex items-center justify-center font-mono font-black text-sm tracking-tighter shadow-sm">
            WT
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-base tracking-tight text-doc-text dark:text-doc-text text-doc-lightText group-hover:text-doc-accent transition-colors">
                WebTech
              </span>
              <span className="px-1.5 py-0.2 text-[10px] font-mono uppercase tracking-wider rounded bg-doc-accent/15 text-doc-accent border border-doc-accent/30 font-semibold">
                Docs
              </span>
            </div>
            <p className="text-[11px] text-doc-muted dark:text-doc-muted text-doc-lightMuted tracking-tight">
              Web Technology Standards
            </p>
          </div>
        </NavLink>
      </div>

      {/* Quick Search & Syllabus Action Bar */}
      <div className="p-3 border-b border-doc-border/60 dark:border-doc-border/60 border-doc-lightBorder/60 space-y-2">
        <button
          onClick={onOpenSearch}
          className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-normal border border-doc-border dark:border-doc-border border-doc-lightBorder bg-doc-bg/70 dark:bg-doc-bg/70 bg-doc-lightBg/70 text-doc-muted dark:text-doc-muted text-doc-lightMuted hover:border-doc-accent/50 hover:text-doc-text dark:hover:text-doc-text hover:text-doc-lightText transition-all"
        >
          <span className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-doc-muted" />
            <span>Search topics, RFCs...</span>
          </span>
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono border border-doc-border dark:border-doc-border border-doc-lightBorder rounded text-doc-muted">
            ⌘K
          </kbd>
        </button>

        {/* Syllabus Course Map Button */}
        <button
          onClick={onOpenSyllabus}
          className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium border border-doc-border/50 hover:border-doc-accent/50 bg-doc-surface/40 hover:bg-doc-surface text-doc-text/80 transition-all"
        >
          <span className="flex items-center gap-2 text-[11px]">
            <GraduationCap className="w-3.5 h-3.5 text-doc-accent" />
            <span>Course Syllabus Map</span>
          </span>
          <span className="text-[10px] font-mono text-doc-muted">Units 1–5+</span>
        </button>
      </div>

      {/* Units & Topics Navigation Tree */}
      <nav className="flex-1 overflow-y-auto px-2 py-3 space-y-1 text-xs">
        {DOC_CHAPTERS.map((chapter) => {
          const isExpanded = expandedChapters[chapter.id];
          const hasActiveTopic = chapter.topics.some(t => t.id === currentTopicId);

          return (
            <div key={chapter.id} className="mb-2">
              {/* Unit Header Toggle */}
              <button
                onClick={() => toggleChapter(chapter.id)}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-left font-medium transition-colors ${
                  hasActiveTopic
                    ? 'text-doc-text dark:text-doc-text text-doc-lightText font-semibold'
                    : 'text-doc-muted dark:text-doc-muted text-doc-lightMuted hover:text-doc-text dark:hover:text-doc-text hover:text-doc-lightText'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-5 text-[11px] font-mono text-doc-accent font-bold shrink-0">
                    U{chapter.number}
                  </span>
                  <span className="truncate text-xs tracking-tight">
                    {chapter.shortTitle || chapter.title}
                  </span>
                </div>
                <div className="flex items-center gap-1 shrink-0 ml-1">
                  <span className="text-[10px] font-mono text-doc-muted/70">
                    {chapter.topics.length}
                  </span>
                  {isExpanded ? (
                    <ChevronDown className="w-3.5 h-3.5 text-doc-muted" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 text-doc-muted" />
                  )}
                </div>
              </button>

              {/* Topics List */}
              {isExpanded && (
                <div className="mt-1 ml-2.5 pl-2 border-l border-doc-border/60 dark:border-doc-border/60 border-doc-lightBorder/80 space-y-0.5">
                  {chapter.topics.map((topic) => {
                    const isActive = topic.id === currentTopicId;

                    return (
                      <div key={topic.id}>
                        <NavLink
                          to={`/topic/${topic.id}`}
                          onClick={onCloseMobile}
                          className={`group flex items-start gap-2 px-2 py-1.5 rounded text-[12px] transition-all ${
                            isActive
                              ? 'bg-doc-border/60 dark:bg-doc-border/60 bg-doc-lightBorder/80 text-doc-text dark:text-doc-text text-doc-lightText font-semibold shadow-sm'
                              : 'text-doc-muted dark:text-doc-muted text-doc-lightMuted hover:text-doc-text dark:hover:text-doc-text hover:text-doc-lightText hover:bg-doc-border/20'
                          }`}
                        >
                          <span
                            className={`font-mono text-[10px] mt-0.5 shrink-0 ${
                              isActive ? 'text-doc-accent font-bold' : 'text-doc-muted/70'
                            }`}
                          >
                            {topic.code}
                          </span>
                          <span className="truncate leading-tight">
                            {topic.title}
                          </span>
                        </NavLink>

                        {/* Nested Subtopics for the currently active topic */}
                        {isActive && (
                          <div className="mt-1 ml-4 pl-2 border-l border-doc-accent/40 space-y-0.5 py-0.5">
                            {SUBTOPIC_ANCHORS.map((sub) => (
                              <button
                                key={sub.id}
                                onClick={() => scrollToSubtopic(sub.id)}
                                className="w-full text-left px-2 py-1 rounded text-[11px] text-doc-muted dark:text-doc-muted text-doc-lightMuted hover:text-doc-accent dark:hover:text-doc-accent hover:text-doc-accent hover:bg-doc-border/30 transition-colors truncate block"
                              >
                                {sub.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Sidebar Bottom Footer: Theme Toggle & Metrics */}
      <div className="p-3 border-t border-doc-border dark:border-doc-border border-doc-lightBorder space-y-2 bg-doc-surface/40 dark:bg-doc-surface/40 bg-doc-lightSurface/40">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium border border-doc-border dark:border-doc-border border-doc-lightBorder hover:bg-doc-border/30 dark:hover:bg-doc-border/30 hover:bg-doc-lightBorder/60 transition-colors"
        >
          <span className="flex items-center gap-2">
            {theme === 'dark' ? (
              <Moon className="w-3.5 h-3.5 text-doc-accent" />
            ) : (
              <Sun className="w-3.5 h-3.5 text-amber-500" />
            )}
            <span className="capitalize">{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
          </span>
          <span className="text-[10px] font-mono text-doc-muted">Toggle</span>
        </button>

        {/* Global Curriculum Meta Info */}
        <div className="px-1 text-[11px] text-doc-muted/80 flex items-center justify-between font-mono">
          <span>6 Units</span>
          <span>•</span>
          <span>49 Topics</span>
          <span>•</span>
          <span>294 Subtopics</span>
        </div>
      </div>
    </aside>
  );
}
