import React from 'react';
import { AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

export default function CommonMistakes({ mistakes }) {
  if (!mistakes || mistakes.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
        <span className="w-1.5 h-5 rounded-full bg-amber-500 inline-block" />
        <span>Common Developer Mistakes &amp; Misconceptions</span>
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {mistakes.map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-200/90 shadow-card p-5 space-y-3">
            {/* Misconception */}
            <div className="flex items-start space-x-2.5">
              <div className="w-6 h-6 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                <XCircle className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 block mb-0.5">
                  Common Mistake
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-800">
                  {item.misconception}
                </p>
              </div>
            </div>

            {/* Reality */}
            <div className="flex items-start space-x-2.5 pt-2 border-t border-slate-100">
              <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-0.5">
                  How It Actually Works
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.reality}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
