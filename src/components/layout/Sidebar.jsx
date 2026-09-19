import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  ChevronRight, 
  CheckCircle2, 
  Circle, 
  Layers, 
  Sparkles,
  BookMarked,
  X
} from 'lucide-react';
import { UNITS } from '../../data/curriculum';
import { useProgress } from '../../context/ProgressContext';

export default function Sidebar({ activeTopicId }) {
  const location = useLocation();
  const { isTopicCompleted } = useProgress();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  
  // Find which unit contains the active topic
  const activeUnit = UNITS.find(u => u.topics.some(t => t.id === activeTopicId));
  const activeUnitId = activeUnit ? activeUnit.id : 'unit-1';

  // Track open state for units
  const [openUnits, setOpenUnits] = useState({
    'unit-1': true,
    'unit-2': false,
    'unit-3': false,
    'unit-4': false,
    'unit-5': false,
    [activeUnitId]: true
  });

  // Auto-expand the unit of the active topic
  useEffect(() => {
    if (activeUnitId) {
      setOpenUnits(prev => ({ ...prev, [activeUnitId]: true }));
    }
  }, [activeUnitId]);

  const toggleUnit = (unitId) => {
    setOpenUnits(prev => ({ ...prev, [unitId]: !prev[unitId] }));
  };

  const renderUnitsNav = (isMobile = false) => (
    <nav className="space-y-3">
      {UNITS.map((unit) => {
        const isOpen = openUnits[unit.id];
        return (
          <div key={unit.id} className="rounded-xl border border-slate-200/70 overflow-hidden bg-white shadow-2xs">
            {/* Unit Header Accordion Button */}
            <button
              onClick={() => toggleUnit(unit.id)}
              className="w-full flex items-center justify-between px-3 py-2.5 bg-slate-50/70 hover:bg-slate-100/60 transition-colors text-left"
            >
              <div className="flex items-center space-x-2">
                <span className="w-5 h-5 rounded-md bg-indigo-100/80 text-indigo-700 text-[11px] font-bold flex items-center justify-center font-mono">
                  U{unit.number}
                </span>
                <span className="text-xs font-semibold text-slate-800 line-clamp-1">
                  {unit.title.replace(/^Unit \d+:\s*/, '')}
                </span>
              </div>
              {isOpen ? (
                <ChevronDown className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              )}
            </button>

            {/* Topics List */}
            {isOpen && (
              <div className="p-1.5 space-y-1 bg-white">
                {unit.topics.map((topic) => {
                  const isActive = activeTopicId === topic.id;
                  const completed = isTopicCompleted(topic.id);

                  return (
                    <Link
                      key={topic.id}
                      to={`/topic/${topic.id}`}
                      onClick={() => {
                        if (isMobile) setMobileDrawerOpen(false);
                      }}
                      className={`group flex items-start justify-between p-2 rounded-lg text-xs transition-all duration-150 ${
                        isActive
                          ? 'bg-indigo-50 text-indigo-900 font-semibold shadow-xs'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-start space-x-2 min-w-0 pr-1">
                        {completed ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        ) : (
                          <Circle className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isActive ? 'text-indigo-400' : 'text-slate-300'}`} />
                        )}
                        <span className="line-clamp-2 leading-relaxed">
                          {topic.title}
                        </span>
                      </div>

                      <div className="shrink-0 flex items-center space-x-1">
                        {topic.isImplemented ? (
                          <span className="text-[9px] font-mono px-1 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                            Lab
                          </span>
                        ) : (
                          <span className="text-[9px] font-mono px-1 py-0.5 rounded bg-slate-100 text-slate-600">
                            Plan
                          </span>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Mobile Collapsible Header Bar (< lg) */}
      <div className="lg:hidden w-full mb-2">
        <button
          onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
          className="w-full flex items-center justify-between p-3.5 bg-white rounded-2xl border border-slate-200/90 shadow-card text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-center space-x-2.5">
            <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <Layers className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="block text-slate-900 font-bold">Curriculum Topics Index</span>
              <span className="text-[10px] text-slate-400 font-mono">5 Units &bull; 64 Topics</span>
            </div>
          </div>
          <div className="flex items-center space-x-1.5 text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-100 font-medium">
            <span>{mobileDrawerOpen ? 'Hide Menu' : 'Browse Topics'}</span>
            {mobileDrawerOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          </div>
        </button>

        {mobileDrawerOpen && (
          <div className="mt-2.5 p-3.5 bg-white rounded-2xl border border-slate-200 shadow-xl space-y-3 max-h-96 overflow-y-auto animate-in slide-in-from-top-2">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs font-semibold text-slate-700">
              <span>Select Any Topic to Navigate:</span>
              <button 
                onClick={() => setMobileDrawerOpen(false)}
                className="p-1 rounded text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {renderUnitsNav(true)}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar (lg+) */}
      <aside className="hidden lg:block w-72 shrink-0 border-r border-slate-200/80 bg-white/70 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-4 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200/70 px-1">
          <div className="flex items-center space-x-2">
            <Layers className="w-4 h-4 text-indigo-600" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">Course Curriculum</span>
          </div>
          <span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">5 Units</span>
        </div>

        {renderUnitsNav(false)}

        {/* Reassuring Curriculum Scope Box */}
        <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-50/50 to-blue-50/40 border border-indigo-100/80 text-[11px] text-slate-600 space-y-1.5">
          <div className="flex items-center space-x-1.5 font-semibold text-indigo-900">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Interactive Syllabus</span>
          </div>
          <p className="leading-normal">
            Topics with the <strong className="text-emerald-800">Lab</strong> tag feature live interactive packet simulators, code playgrounds, and quizzes.
          </p>
        </div>
      </aside>
    </>
  );
}
