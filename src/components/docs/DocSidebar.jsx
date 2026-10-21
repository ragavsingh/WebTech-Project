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

  const currentTopicId = topicId || '1.1-history-of-the-internet';

  const activeDomain = DOMAIN_TOPICS.find(d =>
    d.topics.some(t => t.id === currentTopicId)
  );

  const [expandedDomains, setExpandedDomains] = useState(() => {
    const initial = {};
    DOMAIN_TOPICS.forEach(d => {
      initial[d.id] = d.id === (activeDomain?.id || DOMAIN_TOPICS[0].id);
    });
    return initial;
  });

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
    <aside className="w-full h-full flex flex-col bg-doc-lightSidebar dark:bg-doc-sidebar border-r border-zinc-200/80 dark:border-zinc-800/80 select-none text-zinc-900 dark:text-zinc-100 transition-colors">
      {/* Brand Header */}
      <div className="p-4 flex items-center justify-between">
        <NavLink
          to="/"
          onClick={onCloseMobile}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 flex items-center justify-center font-mono font-black text-xs tracking-tighter shadow-sm">
            WT
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-sm tracking-tight text-zinc-900 dark:text-white group-hover:text-doc-accent transition-colors">
                WebTech
              </span>
              <span className="px-1.5 py-0.2 text-[10px] font-mono uppercase tracking-wider rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold">
                Docs
              </span>
            </div>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 tracking-tight">
              Web Technology Standards
            </p>
          </div>
        </NavLink>
      </div>

      {/* Quick Search & Syllabus Action Bar */}
      <div className="px-3 pb-3 space-y-1.5">
        <button
          onClick={onOpenSearch}
          className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-normal bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all"
        >
          <span className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5" />
            <span>Search topics, RFCs...</span>
          </span>
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-zinc-200/60 dark:bg-zinc-800 rounded text-zinc-500">
            ⌘K
          </kbd>
        </button>

        <button
          onClick={onOpenSyllabus}
          className="w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all"
        >
          <span className="flex items-center gap-2 text-[11px]">
            <GraduationCap className="w-3.5 h-3.5 text-doc-accent" />
            <span>Course Syllabus Map</span>
          </span>
          <span className="text-[10px] font-mono text-zinc-400">Units 1–5+</span>
        </button>
      </div>

      {/* Topic -> Subtopic Navigation: Clean, calm whitespace without harsh vertical lines */}
      <nav className="flex-1 overflow-y-auto px-2 py-2 space-y-1 text-xs">
        {DOMAIN_TOPICS.map((domain) => {
          const isExpanded = expandedDomains[domain.id];
          const hasActiveTopic = domain.topics.some(t => t.id === currentTopicId);
          const IconComponent = ICONS[domain.iconName] || Globe;

          return (
            <div key={domain.id} className="space-y-0.5">
              {/* Domain Topic Header */}
              <button
                onClick={() => toggleDomain(domain.id)}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left font-medium transition-colors ${
                  hasActiveTopic
                    ? 'text-zinc-900 dark:text-white font-semibold bg-zinc-200/60 dark:bg-zinc-900'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900/50'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <IconComponent className={`w-3.5 h-3.5 shrink-0 ${hasActiveTopic ? 'text-doc-accent' : 'text-zinc-400'}`} />
                  <span className="truncate text-xs font-medium tracking-tight">
                    {domain.title}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0 ml-1">
                  <span className="text-[10px] font-mono px-1 py-0.2 rounded text-zinc-400">
                    {domain.unitBadge}
                  </span>
                  {isExpanded ? (
                    <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                  )}
                </div>
              </button>

              {/* Subtopics List: Indented naturally, ZERO harsh vertical border lines */}
              {isExpanded && (
                <div className="ml-3 pl-2 space-y-0.5">
                  {domain.topics.map((topic) => {
                    const isActive = topic.id === currentTopicId;

                    return (
                      <div key={topic.id}>
                        <NavLink
                          to={`/topic/${topic.id}`}
                          onClick={onCloseMobile}
                          className={`group flex items-start gap-2 px-2.5 py-1.5 rounded-lg text-[12px] transition-all ${
                            isActive
                              ? 'bg-zinc-200/80 dark:bg-zinc-800 text-doc-accent font-semibold'
                              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900/60'
                          }`}
                        >
                          <span
                            className={`font-mono text-[10px] mt-0.5 shrink-0 ${
                              isActive ? 'text-doc-accent font-bold' : 'text-zinc-400'
                            }`}
                          >
                            {topic.code}
                          </span>
                          <span className="truncate leading-tight">
                            {topic.title}
                          </span>
                        </NavLink>

                        {/* In-page Sections for Active Subtopic: Calm and minimal */}
                        {isActive && (
                          <div className="mt-1 ml-4 pl-1 space-y-0.5 py-0.5">
                            {SUBTOPIC_ANCHORS.map((sub) => (
                              <button
                                key={sub.id}
                                onClick={() => scrollToSubtopic(sub.id)}
                                className="w-full text-left px-2 py-0.5 rounded text-[11px] text-zinc-500 hover:text-doc-accent dark:text-zinc-400 dark:hover:text-doc-accent transition-colors truncate block"
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

      {/* Sidebar Bottom Footer: Theme Toggle & Info */}
      <div className="p-3 space-y-2 border-t border-zinc-200/60 dark:border-zinc-800/60">
        <button
          onClick={toggleTheme}
          className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200/70 dark:hover:bg-zinc-800 transition-colors"
        >
          <span className="flex items-center gap-2">
            {theme === 'dark' ? (
              <Moon className="w-3.5 h-3.5 text-doc-accent" />
            ) : (
              <Sun className="w-3.5 h-3.5 text-amber-500" />
            )}
            <span className="capitalize">{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
          </span>
          <span className="text-[10px] font-mono text-zinc-400">Toggle</span>
        </button>

        <div className="px-1 text-[11px] text-zinc-400 flex items-center justify-between font-mono">
          <span>10 Domain Topics</span>
          <span>•</span>
          <span>49 Articles</span>
        </div>
      </div>
    </aside>
  );
}
