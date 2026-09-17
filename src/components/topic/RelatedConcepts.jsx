import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function RelatedConcepts({ topics }) {
  if (!topics || topics.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
        <span className="w-1.5 h-5 rounded-full bg-indigo-600 inline-block" />
        <span>Related Concepts to Explore Next</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {topics.map((rel, idx) => (
          <Link
            key={idx}
            to={`/topic/${rel.id}`}
            className="group p-5 rounded-2xl bg-white hover:bg-indigo-50/40 border border-slate-200/90 hover:border-indigo-300 shadow-card hover:shadow-card-hover transition-all flex items-center justify-between"
          >
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-indigo-600 uppercase font-semibold">
                {rel.unitId ? rel.unitId.toUpperCase() : 'NEXT CONCEPT'}
              </span>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-900 transition-colors">
                {rel.title}
              </h4>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center text-slate-500 transition-all shrink-0 ml-3">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
