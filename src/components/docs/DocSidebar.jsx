import React, { useState, useEffect } from 'react';
import { NavLink, useParams, useLocation } from 'react-router-dom';
import {
  Search,
  Sun,
  Moon,
  ChevronDown,
  ChevronRight,
  BookOpen,
  FileCode,
  Layers,
  Cpu,
  Shield,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Terminal,
  Bookmark,
  GraduationCap,
  Globe,
  Zap,
  Users,
  Network,
  Server,
  Code
} from 'lucide-react';
import { DOMAIN_TOPICS } from '../../data/domainTopicsData';
import { useTheme } from '../../context/ThemeContext';

const SUBTOPIC_ANCHORS = [
  { id: 'overview', label: '1. Overview & Concept' },
  { id: 'architecture', label: '2. Architecture & Blueprint' },
  { id: 'reallife', label: '3. Real-Life Case Study' },
  { id: 'systems', label: '4. Systems, Tools & Standards' },
  { id: 'implementation', label: '5. Practical Implementation' },
  { id: 'pitfalls', label: '6. Common Pitfalls' },
];

// Icon mapping for Domain Topics
const ICONS = {
  Globe,
  FileCode,
  Layers,
  Code,
  Server,
  Zap,
  Users,
  Network,
  Sparkles,
  Shield
};

export default function DocSidebar({ onOpenSearch, onOpenSyllabus, onCloseMobile }) {
  const { topicId } = useParams();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Active topic ID (defaults to '1.1-history-of-the-internet' if root)
  const currentTopicId = topicId || '1.1-history-of-the-internet';

  // Determine which domain category the active topic belongs to
  const activeDomain = DOMAIN_TOPICS.find(d =>
    d.topics.some(t => t.id === currentTopicId)
  );

  // Expanded domain topics state (keep active domain expanded by default)
  const [expandedDomains, setExpandedDomains] = useState(() => {
    const initial = {};
    DOMAIN_TOPICS.forEach(d => {
      initial[d.id] = d.id === (activeDomain?.id || DOMAIN_TOPICS[0].id);
    });
    return initial;
  });

  // Keep active domain expanded when route changes
  useEffect(() => {
    if (activeDomain) {
      setExpandedDomains(prev => ({ ...prev, [activeDomain.id]: true }));
    }
  }, [activeDomain]);

  const toggleDomain = (domainId) => {
    setExpandedDomains(prev => ({
      ...prev,
      [domainId]: !prev[domainId]
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

      {/* Idea 1: Topic -> Subtopic Navigation Tree */}
      <nav className="flex-1 overflow-y-auto px-2 py-3 space-y-2.5 text-xs">
        {DOMAIN_TOPICS.map((domain) => {
          const isExpanded = expandedDomains[domain.id];
          const hasActiveTopic = domain.topics.some(t => t.id === currentTopicId);
          const IconComponent = ICONS[domain.iconName] || Globe;

          return (
            <div key={domain.id} className="space-y-1">
              {/* Domain Topic Header */}
              <button
                onClick={() => toggleDomain(domain.id)}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-left font-medium transition-colors ${
                  hasActiveTopic
                    ? 'text-doc-text dark:text-doc-text text-doc-lightText font-semibold bg-doc-border/30 dark:bg-doc-border/30 bg-doc-lightBorder/40'
                    : 'text-doc-muted dark:text-doc-muted text-doc-lightMuted hover:text-doc-text dark:hover:text-doc-text hover:text-doc-lightText hover:bg-doc-border/20'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <IconComponent className={`w-3.5 h-3.5 shrink-0 ${hasActiveTopic ? 'text-doc-accent' : 'text-doc-muted'}`} />
                  <span className="truncate text-xs font-semibold tracking-tight">
                    {domain.title}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0 ml-1">
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-doc-border/50 text-doc-muted">
                    {domain.unitBadge}
                  </span>
                  {isExpanded ? (
                    <ChevronDown className="w-3.5 h-3.5 text-doc-muted" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 text-doc-muted" />
                  )}
                </div>
              </button>

              {/* Subtopics List */}
              {isExpanded && (
                <div className="ml-2 pl-2 border-l border-doc-border/60 dark:border-doc-border/60 border-doc-lightBorder/80 space-y-0.5">
                  {domain.topics.map((topic) => {
                    const isActive = topic.id === currentTopicId;

                    return (
                      <div key={topic.id}>
                        <NavLink
                          to={`/topic/${topic.id}`}
                          onClick={onCloseMobile}
                          className={`group flex items-start gap-2 px-2 py-1.5 rounded text-[12px] transition-all ${
                            isActive
                              ? 'bg-doc-border/70 dark:bg-doc-border/70 bg-doc-lightBorder/80 text-doc-text dark:text-doc-text text-doc-lightText font-semibold shadow-sm'
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

                        {/* In-page Sections for Active Subtopic */}
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
          <span>10 Domain Topics</span>
          <span>•</span>
          <span>49 Articles</span>
          <span>•</span>
          <span>294 Sections</span>
        </div>
      </div>
    </aside>
  );
}
