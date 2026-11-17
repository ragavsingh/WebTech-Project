import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Hash, Building2, ArrowRight, CornerDownLeft } from 'lucide-react';
import { searchDocTopics } from '../../data/docCurriculum';

export default function DocSearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }
    const matched = searchDocTopics(query);
    setResults(matched);
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation within the modal
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault();
        handleSelect(results[selectedIndex]);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  const handleSelect = (topic) => {
    onClose();
    navigate(`/topic/${topic.id}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-8 sm:pt-16 md:pt-24 px-3 sm:px-4 bg-black/60 backdrop-blur-sm transition-all">
      {/* Backdrop click */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-doc-border dark:border-doc-border border-doc-lightBorder bg-doc-surface dark:bg-doc-surface bg-doc-lightSurface shadow-2xl transition-all">
        {/* Search Input Bar */}
        <div className="flex items-center px-3.5 sm:px-4 py-3 sm:py-3.5 border-b border-doc-border dark:border-doc-border border-doc-lightBorder">
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-doc-muted dark:text-doc-muted text-doc-lightMuted mr-2.5 sm:mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 49 topics, RFCs, case studies..."
            className="w-full bg-transparent text-sm sm:text-base text-doc-text dark:text-doc-text text-doc-lightText placeholder:text-doc-muted dark:placeholder:text-doc-muted placeholder:text-doc-lightMuted focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded text-doc-muted hover:text-doc-text transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-xs font-mono text-doc-muted border border-doc-border dark:border-doc-border border-doc-lightBorder rounded">
              ESC
            </kbd>
          )}
        </div>

        {/* Results Area */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-doc-border/30 dark:divide-doc-border/30 divide-doc-lightBorder/40">
          {query.trim() === '' ? (
            <div className="py-10 text-center text-xs text-doc-muted dark:text-doc-muted text-doc-lightMuted">
              <p className="font-medium text-doc-text/70 dark:text-doc-text/70 text-doc-lightText/80 mb-1">
                Type keywords like "TCP", "WebSocket", "DNS", "PageRank", "WebGPU", "CORS"
              </p>
              <p>Quick search across 6 chapters and 49 topics</p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-sm text-doc-muted">
              No results found for "<span className="text-doc-text">{query}</span>"
            </div>
          ) : (
            results.map((result, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={result.id}
                  onClick={() => handleSelect(result)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`group flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-doc-accent/10 dark:bg-doc-accent/15 border border-doc-accent/30'
                      : 'hover:bg-doc-border/30 dark:hover:bg-doc-border/30 hover:bg-doc-lightBorder/50'
                  }`}
                >
                  <div className="mt-0.5 px-2 py-0.5 rounded text-xs font-mono font-semibold bg-doc-border/60 dark:bg-doc-border/60 bg-doc-lightBorder text-doc-accent shrink-0">
                    {result.code}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs uppercase tracking-wider text-doc-muted dark:text-doc-muted text-doc-lightMuted font-mono">
                        {result.domainTitle || result.unitBadge || `Unit ${result.chapterNumber}`}
                      </span>
                      {result.company && (
                        <span className="inline-flex items-center gap-1 text-[11px] text-amber-500 font-medium">
                          <Building2 className="w-3 h-3" />
                          {result.company}
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-semibold text-doc-text dark:text-doc-text text-doc-lightText truncate group-hover:text-doc-accent transition-colors">
                      {result.title}
                    </h4>
                    <p className="text-xs text-doc-muted dark:text-doc-muted text-doc-lightMuted line-clamp-1 mt-0.5">
                      {result.subtitle}
                    </p>
                    {result.matchReason && (
                      <span className="inline-block mt-1 text-[10px] font-mono text-doc-muted/80 bg-doc-border/40 dark:bg-doc-border/40 bg-doc-lightBorder/40 px-1.5 py-0.2 rounded">
                        {result.matchReason}
                      </span>
                    )}
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected
                        ? 'text-doc-accent translate-x-0.5'
                        : 'text-doc-muted opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-doc-border dark:border-doc-border border-doc-lightBorder bg-doc-bg/50 dark:bg-doc-bg/50 bg-doc-lightBg/50 text-[11px] text-doc-muted">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 font-mono border border-doc-border rounded">↑</kbd>
              <kbd className="px-1 py-0.5 font-mono border border-doc-border rounded">↓</kbd> Navigate
            </span>
            <span className="flex items-center gap-1">
              <CornerDownLeft className="w-3 h-3" /> Select
            </span>
          </div>
          <span>49 Engineering Topics</span>
        </div>
      </div>
    </div>
  );
}
