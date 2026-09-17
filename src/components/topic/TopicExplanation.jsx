import React from 'react';
import { Lightbulb, Info, CheckCircle2 } from 'lucide-react';

export default function TopicExplanation({ topic }) {
  return (
    <div className="space-y-8">
      {/* 1. Formal Definition & Why It Matters Callout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Definition Box */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-card space-y-2">
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-indigo-700">
            <Info className="w-4 h-4 text-indigo-600" />
            <span>Core Definition</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {topic.definition}
          </p>
        </div>

        {/* Why it matters Box */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-blue-50/50 to-white border border-indigo-100/90 shadow-card space-y-2">
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-indigo-900">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>Why It Matters In Practice</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {topic.whyItMatters}
          </p>
        </div>
      </div>

      {/* 2. Structured In-Depth Concepts */}
      <div className="space-y-6">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <span className="w-1.5 h-5 rounded-full bg-indigo-600 inline-block" />
          <span>In-Depth Conceptual Breakdown</span>
        </h2>

        <div className="space-y-6">
          {topic.explanation.map((section, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-card space-y-3">
              <h3 className="text-base font-bold text-slate-900 tracking-tight">
                {section.heading}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {section.content}
              </p>

              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-3 space-y-2 pt-2 border-t border-slate-100">
                  {section.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
