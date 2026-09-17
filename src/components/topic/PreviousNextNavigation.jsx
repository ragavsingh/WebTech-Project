import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function PreviousNextNavigation({ prevTopic, nextTopic }) {
  if (!prevTopic && !nextTopic) return null;

  return (
    <div className="pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {prevTopic ? (
        <Link
          to={`/topic/${prevTopic.id}`}
          className="group p-4 rounded-2xl border border-slate-200/80 hover:border-indigo-200 hover:bg-slate-50 transition-all flex items-center space-x-3"
        >
          <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center text-slate-500 transition-colors shrink-0">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
              Previous Topic
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-indigo-900 truncate block">
              {prevTopic.title}
            </span>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {nextTopic && (
        <Link
          to={`/topic/${nextTopic.id}`}
          className="group p-4 rounded-2xl border border-slate-200/80 hover:border-indigo-200 hover:bg-slate-50 transition-all flex items-center justify-end space-x-3 text-right"
        >
          <div className="min-w-0">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
              Next Topic
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-indigo-900 truncate block">
              {nextTopic.title}
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center text-slate-500 transition-colors shrink-0">
            <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      )}
    </div>
  );
}
