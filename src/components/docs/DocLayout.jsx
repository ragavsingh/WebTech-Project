import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Sun, Moon, BookOpen, Layers, GraduationCap } from 'lucide-react';
import DocSidebar from './DocSidebar';
import DocSearchModal from './DocSearchModal';
import SyllabusModal from './SyllabusModal';
import { useTheme } from '../../context/ThemeContext';

export default function DocLayout({ children }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Global Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-doc-bg dark:bg-doc-bg bg-doc-lightBg text-doc-text dark:text-doc-text text-doc-lightText font-sans transition-colors">
      {/* Search Modal */}
      <DocSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Syllabus Course Map Modal */}
      <SyllabusModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
      />

      {/* Mobile Top Header (hidden on desktop md:hidden) */}
      <header className="md:hidden sticky top-0 z-40 flex items-center justify-between px-4 py-3 bg-doc-sidebar dark:bg-doc-sidebar bg-doc-lightSidebar border-b border-doc-border dark:border-doc-border border-doc-lightBorder">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-1.5 rounded-md border border-doc-border hover:bg-doc-border/40 text-doc-text"
            aria-label="Open documentation navigation"
          >
            <Menu className="w-5 h-5" />
          </button>
          <Link to="/" className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-doc-text text-doc-bg font-mono font-bold text-xs flex items-center justify-center">
              WT
            </span>
            <span className="font-bold text-sm tracking-tight text-doc-text">
              WebTech
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsSyllabusOpen(true)}
            className="p-1.5 rounded-md border border-doc-border hover:bg-doc-border/40 text-doc-muted"
            aria-label="Course Syllabus"
            title="Course Syllabus"
          >
            <GraduationCap className="w-4 h-4 text-doc-accent" />
          </button>
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-1.5 rounded-md border border-doc-border hover:bg-doc-border/40 text-doc-muted"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md border border-doc-border hover:bg-doc-border/40 text-doc-text"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Moon className="w-4 h-4 text-doc-accent" />
            ) : (
              <Sun className="w-4 h-4 text-amber-500" />
            )}
          </button>
        </div>
      </header>

      {/* Desktop Sticky Left Sidebar */}
      <div className="hidden md:block w-72 lg:w-80 shrink-0 h-screen sticky top-0">
        <DocSidebar
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenSyllabus={() => setIsSyllabusOpen(true)}
        />
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-80 max-w-[85vw] h-full bg-doc-sidebar border-r border-doc-border z-10 flex flex-col shadow-2xl">
            <div className="p-3 border-b border-doc-border flex items-center justify-between">
              <span className="font-semibold text-xs uppercase tracking-wider text-doc-muted">
                WebTech Navigation
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded-md text-doc-muted hover:text-doc-text"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <DocSidebar
                onOpenSearch={() => {
                  setIsMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                onOpenSyllabus={() => {
                  setIsMobileMenuOpen(false);
                  setIsSyllabusOpen(true);
                }}
                onCloseMobile={() => setIsMobileMenuOpen(false)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 bg-doc-bg dark:bg-doc-bg bg-doc-lightBg">
        {children || <Outlet />}
      </main>
    </div>
  );
}
