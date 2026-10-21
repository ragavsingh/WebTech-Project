import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Sun, Moon, BookOpen, Layers, GraduationCap, PanelLeft } from 'lucide-react';
import DocSidebar from './DocSidebar';
import DocSearchModal from './DocSearchModal';
import SyllabusModal from './SyllabusModal';
import { useTheme } from '../../context/ThemeContext';

export default function DocLayout({ children }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    try {
      return localStorage.getItem('webtech_sidebar_collapsed') === 'true';
    } catch (e) {
      return false;
    }
  });

  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => {
      const next = !prev;
      try {
        localStorage.setItem('webtech_sidebar_collapsed', String(next));
      } catch (e) {}
      return next;
    });
  };

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Global Keyboard shortcuts: Cmd/Ctrl+K for search, [ or Cmd/Ctrl+B to toggle sidebar
  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        toggleSidebar();
      } else if (e.key === '[' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
        e.preventDefault();
        toggleSidebar();
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
            className="p-1.5 rounded-lg border border-doc-border hover:bg-doc-border/40 text-doc-text"
            aria-label="Open documentation navigation"
            title="Open topics sidebar"
          >
            <PanelLeft className="w-5 h-5" />
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

      {/* Desktop Sticky Left Sidebar with smooth slide animation */}
      <div
        className={`hidden md:block shrink-0 h-screen sticky top-0 transition-all duration-300 ease-in-out overflow-hidden z-30 ${
          isSidebarCollapsed ? 'w-0' : 'w-72 lg:w-80'
        }`}
      >
        <div className="w-72 lg:w-80 h-full">
          <DocSidebar
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenSyllabus={() => setIsSyllabusOpen(true)}
            onToggleSidebar={toggleSidebar}
            isSidebarCollapsed={isSidebarCollapsed}
          />
        </div>
      </div>

      {/* Desktop Reopen Sidebar Button (Visible when sidebar is collapsed) */}
      {isSidebarCollapsed && (
        <button
          onClick={toggleSidebar}
          className="hidden md:flex items-center gap-2 fixed top-3.5 left-4 z-40 px-2.5 py-1.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md shadow-sm text-zinc-600 dark:text-zinc-300 hover:text-doc-accent dark:hover:text-doc-accent hover:border-doc-accent/60 transition-all group"
          title="Open sidebar ([ or Ctrl+B)"
          aria-label="Open sidebar"
        >
          <PanelLeft className="w-4 h-4 text-zinc-500 group-hover:text-doc-accent transition-colors" />
          <span className="text-xs font-medium">Topics</span>
          <kbd className="text-[10px] font-mono px-1 py-0.2 bg-zinc-100 dark:bg-zinc-800 rounded text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/50">
            [
          </kbd>
        </button>
      )}

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
