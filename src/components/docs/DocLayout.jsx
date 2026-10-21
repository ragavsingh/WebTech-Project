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
  const [touchStartX, setTouchStartX] = useState(null);

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    try {
      const saved = localStorage.getItem('webtech_sidebar_collapsed');
      if (saved !== null) return saved === 'true';
      // Default to collapsed on tablet screens (<1024px) for comfortable reading space
      return typeof window !== 'undefined' && window.innerWidth < 1024;
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

  // Touch swipe handling to slide-close the mobile drawer
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStartX === null) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - touchStartX;
    // If swiping left by > 50px, close mobile drawer
    if (diff < -50) {
      setIsMobileMenuOpen(false);
      setTouchStartX(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

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

      {/* Main Content Column */}
      <div className="flex-1 flex flex-col min-w-0 bg-doc-bg dark:bg-doc-bg bg-doc-lightBg">
        {/* Desktop/Tablet Header when sidebar is collapsed */}
        {isSidebarCollapsed && (
          <header className="hidden md:flex items-center justify-between px-6 py-2.5 border-b border-zinc-200/60 dark:border-zinc-800/60 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md sticky top-0 z-40 transition-all">
            <div className="flex items-center gap-3">
              <button
                onClick={toggleSidebar}
                className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 hover:border-doc-accent/60 bg-zinc-100/60 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-200 transition-all"
                title="Expand sidebar ([ or Ctrl+B)"
                aria-label="Expand sidebar"
              >
                <PanelLeft className="w-4 h-4 text-doc-accent" />
                <span className="text-xs font-semibold">Topics</span>
                <kbd className="text-[10px] font-mono px-1 py-0.2 bg-zinc-200/60 dark:bg-zinc-800 rounded text-zinc-400">
                  [
                </kbd>
              </button>

              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-6 h-6 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 flex items-center justify-center font-mono font-bold text-[10px]">
                  WT
                </div>
                <span className="font-bold text-xs tracking-tight text-zinc-900 dark:text-white">
                  WebTech Docs
                </span>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-500 hover:text-zinc-900 dark:hover:text-white border border-zinc-200/60 dark:border-zinc-800/60 transition-colors"
              >
                <Search className="w-3.5 h-3.5" />
                <span className="hidden lg:inline text-xs">Search topics, RFCs...</span>
                <kbd className="text-[10px] font-mono px-1.5 py-0.5 bg-zinc-200/60 dark:bg-zinc-800 rounded text-zinc-400">
                  ⌘K
                </kbd>
              </button>

              <button
                onClick={() => setIsSyllabusOpen(true)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 transition-colors"
                title="Course Syllabus Map"
              >
                <GraduationCap className="w-3.5 h-3.5 text-doc-accent" />
                <span className="hidden sm:inline text-xs font-medium">Syllabus</span>
              </button>

              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-200 transition-colors"
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
        )}

        <main className="flex-1 min-w-0">
          {children || <Outlet />}
        </main>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Panel with hardware-accelerated slide animation & touch swipe */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`md:hidden fixed top-0 bottom-0 left-0 z-50 w-80 max-w-[85vw] h-full bg-doc-lightSidebar dark:bg-doc-sidebar border-r border-zinc-200/80 dark:border-zinc-800/80 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-3 border-b border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between">
          <span className="font-semibold text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
            <PanelLeft className="w-4 h-4 text-doc-accent" />
            <span>WebTech Topics</span>
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
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
  );
}
