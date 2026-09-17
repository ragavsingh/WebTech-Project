import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Compass, 
  BookOpen, 
  FlaskConical, 
  Award, 
  HelpCircle, 
  TrendingUp, 
  Menu, 
  X, 
  Search, 
  ChevronRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { TOPICS, UNITS } from '../../data/curriculum';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { overallPercentage, completedTopicsCount, totalAvailableTopics } = useProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { name: 'Home', path: '/', icon: Compass },
    { name: 'Learn', path: '/learn', icon: BookOpen },
    { name: 'Playground', path: '/playground', icon: FlaskConical },
    { name: 'Challenges', path: '/challenges', icon: Award },
    { name: 'Quiz', path: '/quiz', icon: HelpCircle },
    { name: 'Progress', path: '/progress', icon: TrendingUp },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const filteredTopics = searchQuery.trim() 
    ? Object.values(TOPICS).filter(t => 
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.unitTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.definition.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/85 border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2.5 group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-blue-500 flex items-center justify-center text-white shadow-sm shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
                  <FlaskConical className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-1.5">
                    <span className="font-bold text-lg text-slate-900 tracking-tight leading-none">WebTech</span>
                    <span className="font-semibold text-xs px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100/80 font-mono">Playground</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium tracking-wide">Interactive Learning Lab</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const active = isActive(item.path);
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                      active
                        ? 'bg-indigo-50/80 text-indigo-700 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${active ? 'text-indigo-600' : 'text-slate-400'}`} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Search & Actions */}
            <div className="hidden sm:flex items-center space-x-3">
              {/* Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-slate-200/90 bg-slate-50 hover:bg-slate-100/80 text-slate-500 text-xs transition-colors"
                title="Search topics (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <span>Search topics...</span>
                <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-white rounded border border-slate-200">
                  Ctrl K
                </kbd>
              </button>

              {/* Progress Summary Pill */}
              <Link 
                to="/progress"
                className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100/90 border border-slate-200/90 text-xs font-medium text-slate-700 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                <span>{overallPercentage}% Completed</span>
                <span className="text-[11px] text-slate-400">({completedTopicsCount}/{totalAvailableTopics})</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200/80 bg-white/95 px-4 pt-3 pb-5 space-y-2 shadow-lg animate-in slide-in-from-top-2">
            <div className="flex items-center justify-between py-2 px-3 mb-2 rounded-lg bg-indigo-50/70 border border-indigo-100 text-xs text-indigo-800">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span className="font-semibold">Your Learning Progress</span>
              </div>
              <span className="font-mono font-bold">{overallPercentage}%</span>
            </div>
            {navItems.map((item) => {
              const active = isActive(item.path);
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                    active
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-5 h-5 ${active ? 'text-indigo-600' : 'text-slate-400'}`} />
                    <span>{item.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Global Search Dialog Modal */}
      {searchOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/40 backdrop-blur-sm"
          onClick={() => setSearchOpen(false)}
        >
          <div 
            className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center px-4 py-3 border-b border-slate-100">
              <Search className="w-5 h-5 text-slate-400 mr-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics, protocols, DOM, DNS, HTTP..."
                className="w-full text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
                autoFocus
              />
              <button 
                onClick={() => setSearchOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-xs px-2 py-1 rounded hover:bg-slate-100"
              >
                Esc
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              {searchQuery.trim() === '' ? (
                <div className="p-4 text-center text-xs text-slate-400">
                  Type a concept to jump directly into explanations, interactive simulations, or challenges.
                </div>
              ) : filteredTopics.length === 0 ? (
                <div className="p-6 text-center text-sm text-slate-500">
                  No topics matching "{searchQuery}".
                </div>
              ) : (
                filteredTopics.map(topic => (
                  <button
                    key={topic.id}
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery('');
                      navigate(`/topic/${topic.id}`);
                    }}
                    className="w-full text-left flex items-center justify-between p-3 rounded-xl hover:bg-indigo-50/70 transition-colors group"
                  >
                    <div>
                      <div className="text-xs font-semibold text-indigo-600 mb-0.5">{topic.unitTitle}</div>
                      <div className="text-sm font-medium text-slate-900 group-hover:text-indigo-900">{topic.title}</div>
                      <div className="text-xs text-slate-500 line-clamp-1">{topic.subtitle}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 transition-colors" />
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
