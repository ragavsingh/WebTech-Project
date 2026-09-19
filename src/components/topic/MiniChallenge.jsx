import React, { useState } from 'react';
import { Award, CheckCircle2, HelpCircle, AlertCircle, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useProgress } from '../../context/ProgressContext';

export default function MiniChallenge({ challenge }) {
  if (!challenge) return null;

  const { markChallengeCompleted, isChallengeCompleted } = useProgress();
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const isCompleted = isChallengeCompleted(challenge.id);

  const handleSelect = (opt) => {
    setSelectedOption(opt);
    setShowResult(true);

    if (opt.correct) {
      markChallengeCompleted(challenge.id);
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.8 }
        });
      } catch (e) {}
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setShowResult(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <span className="w-1.5 h-5 rounded-full bg-emerald-500 inline-block" />
          <span>Hands-on Mini Challenge</span>
        </h2>
        {isCompleted && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" /> Solved
          </span>
        )}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card p-6 space-y-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
            {challenge.badge || 'Practice Lab'}
          </span>
          <span className="text-xs text-slate-400">
            {challenge.difficulty} Difficulty
          </span>
        </div>

        <div>
          <h3 className="text-base font-bold text-slate-900 mb-2">
            {challenge.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {challenge.description}
          </p>
        </div>

        {/* Task prompt */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-800">
          <strong>Task:</strong> {challenge.task}
        </div>

        {/* Challenge Options */}
        <div className="space-y-2.5">
          {challenge.options.map((opt) => {
            const isSelected = selectedOption && selectedOption.id === opt.id;
            let btnStyle = 'border-slate-200 hover:bg-slate-50 text-slate-700';

            if (showResult && isSelected) {
              btnStyle = opt.correct 
                ? 'bg-emerald-50 border-emerald-400 text-emerald-900 ring-2 ring-emerald-200' 
                : 'bg-red-50 border-red-300 text-red-900 ring-2 ring-red-100';
            } else if (showResult && opt.correct) {
              btnStyle = 'bg-emerald-50/60 border-emerald-300 text-emerald-800';
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt)}
                disabled={showResult && selectedOption?.correct}
                className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all ${btnStyle}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex-1 leading-relaxed break-words">{opt.text}</span>
                  {showResult && isSelected && (
                    <span className="shrink-0 mt-0.5">
                      {opt.correct ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-red-500" />
                      )}
                    </span>
                  )}
                </div>

                {showResult && isSelected && (
                  <div className={`mt-2 pt-2 border-t text-xs font-normal ${
                    opt.correct ? 'border-emerald-200 text-emerald-800' : 'border-red-200 text-red-700'
                  }`}>
                    {opt.reason}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Result & Actions Footer */}
        <div className="flex flex-wrap items-center justify-between pt-2 border-t border-slate-100 gap-3">
          {challenge.hint && (
            <div>
              <button
                onClick={() => setShowHint(!showHint)}
                className="text-xs text-indigo-600 hover:text-indigo-800 font-medium flex items-center space-x-1"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{showHint ? 'Hide Hint' : 'Need a Hint?'}</span>
              </button>
              {showHint && (
                <p className="mt-2 text-xs text-slate-500 bg-indigo-50/50 p-2.5 rounded-lg border border-indigo-100">
                  {challenge.hint}
                </p>
              )}
            </div>
          )}

          {showResult && !selectedOption?.correct && (
            <button
              onClick={handleReset}
              className="text-xs text-slate-500 hover:text-slate-800 underline font-medium"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
