import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, Compass, GitCommit } from 'lucide-react';

export default function HowItWorksStepper({ steps }) {
  const [activeStep, setActiveStep] = useState(0);

  if (!steps || steps.length === 0) return null;

  const current = steps[activeStep];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <span className="w-1.5 h-5 rounded-full bg-indigo-600 inline-block" />
          <span>How It Works: Step-by-Step Execution</span>
        </h2>
        <span className="text-xs font-mono text-slate-400">
          Step {activeStep + 1} of {steps.length}
        </span>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-card p-6 space-y-6">
        {/* Step Progress Circles / Stepper Bar */}
        <div className="relative">
          <div className="overflow-x-auto pb-2">
            <div className="flex items-center justify-between min-w-[500px] sm:min-w-0">
              {steps.map((step, idx) => {
                const isPassed = idx < activeStep;
                const isCurrent = idx === activeStep;

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center group relative z-10 focus:outline-none"
                  >
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                      isCurrent
                        ? 'bg-indigo-600 text-white ring-4 ring-indigo-100 shadow-sm scale-110'
                        : isPassed
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-100 text-slate-500 border border-slate-200 group-hover:bg-slate-200'
                    }`}>
                      {isPassed ? <Check className="w-4 h-4" /> : idx + 1}
                    </div>
                    <span className={`text-[11px] font-medium mt-2 max-w-[90px] text-center truncate ${
                      isCurrent ? 'text-indigo-900 font-bold' : 'text-slate-500'
                    }`}>
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Step Details Card */}
        <div className="bg-slate-50/70 rounded-xl p-5 border border-slate-200/80 space-y-2.5 transition-all">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 text-[11px] font-mono font-bold">
              Phase {current.step || activeStep + 1}
            </span>
            <h4 className="text-base font-bold text-slate-900 break-words">
              {current.title}
            </h4>
          </div>

          {current.subtitle && (
            <div className="text-xs font-medium text-indigo-600 font-mono">
              {current.subtitle}
            </div>
          )}

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
            {current.description}
          </p>
        </div>

        {/* Step Navigation Controls */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <button
            onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 text-xs font-medium text-slate-700 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous Step</span>
          </button>

          <button
            onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
            disabled={activeStep === steps.length - 1}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-xs font-medium text-white transition-colors shadow-2xs"
          >
            <span>Next Step</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
