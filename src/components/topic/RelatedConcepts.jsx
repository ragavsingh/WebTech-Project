import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Compass, Milestone, Sparkles } from 'lucide-react';

export default function RelatedConcepts({ topics }) {
  if (!topics || topics.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <span className="w-1.5 h-5 rounded-full bg-indigo-600 inline-block" />
          <span>Related Concepts &amp; Curriculum Continuations</span>
        </h2>
        
        <Link
          to="/journey"
          className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 group self-start sm:self-auto"
        >
          <Milestone className="w-3.5 h-3.5" />
          <span>See Where This Fits in Web Journey</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {topics.map((rel, idx) => {
          const isBeyondSyllabus = rel.isBeyondSyllabus || rel.category === 'beyond' || !rel.unitId;
          
          return (
            <Link
              key={idx}
              to={`/topic/${rel.id}`}
              className="group p-5 rounded-2xl bg-white hover:bg-indigo-50/40 border border-slate-200/90 hover:border-indigo-300 shadow-card hover:shadow-card-hover transition-all flex items-center justify-between"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono uppercase font-bold px-1.5 py-0.5 rounded ${
                    isBeyondSyllabus
                      ? 'bg-amber-50 text-amber-700 border border-amber-200'
                      : 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                  }`}>
                    {isBeyondSyllabus ? 'Beyond the Syllabus' : (rel.unitId ? rel.unitId.toUpperCase() : 'CORE SYLLABUS')}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {isBeyondSyllabus ? 'Advanced Extension' : 'Official Syllabus Link'}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-900 transition-colors">
                  {rel.title}
                </h4>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center text-slate-500 transition-all shrink-0 ml-3">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
