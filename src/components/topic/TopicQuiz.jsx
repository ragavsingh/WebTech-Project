import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useProgress } from '../../context/ProgressContext';

export default function TopicQuiz({ topicId, questions }) {
  if (!questions || questions.length === 0) return null;

  const { recordQuizScore, progress } = useProgress();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const previousResult = progress.quizScores[topicId];
  const q = questions[currentIdx];

  const handleSelectOption = (optIndex) => {
    if (selectedAnswers[currentIdx] !== undefined) return; // already answered
    setSelectedAnswers(prev => ({ ...prev, [currentIdx]: optIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, idx) => {
      if (selectedAnswers[idx] === question.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const handleNextOrFinish = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsSubmitted(true);
      const score = calculateScore();
      recordQuizScore(topicId, score, questions.length);

      if (score === questions.length) {
        try {
          confetti({
            particleCount: 80,
            spread: 90,
            origin: { y: 0.7 }
          });
        } catch (e) {}
      }
    }
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setIsSubmitted(false);
  };

  const score = isSubmitted ? calculateScore() : 0;
  const isAnswered = selectedAnswers[currentIdx] !== undefined;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <span className="w-1.5 h-5 rounded-full bg-indigo-600 inline-block" />
          <span>Knowledge Check Quiz</span>
        </h2>
        {previousResult && (
          <span className="text-xs font-mono text-slate-500">
            Best Score: {previousResult.score}/{previousResult.total}
          </span>
        )}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card p-6 space-y-6">
        {!isSubmitted ? (
          <>
            {/* Question header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-mono font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded">
                Question {currentIdx + 1} of {questions.length}
              </span>
              <div className="flex space-x-1">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full ${
                      i === currentIdx
                        ? 'bg-indigo-600'
                        : selectedAnswers[i] !== undefined
                        ? 'bg-emerald-500'
                        : 'bg-slate-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Question Text */}
            <h3 className="text-base font-bold text-slate-900 leading-snug">
              {q.question}
            </h3>

            {/* Options */}
            <div className="space-y-2.5">
              {q.options.map((opt, optIdx) => {
                const isSelected = selectedAnswers[currentIdx] === optIdx;
                const isCorrect = optIdx === q.correctIndex;

                let style = 'border-slate-200 hover:bg-slate-50 text-slate-700';
                if (isAnswered) {
                  if (isSelected && isCorrect) {
                    style = 'bg-emerald-50 border-emerald-400 text-emerald-900 ring-2 ring-emerald-200';
                  } else if (isSelected && !isCorrect) {
                    style = 'bg-red-50 border-red-300 text-red-900 ring-2 ring-red-100';
                  } else if (isCorrect) {
                    style = 'bg-emerald-50/70 border-emerald-300 text-emerald-800';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={isAnswered}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all ${style}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="flex-1 leading-relaxed break-words">{opt}</span>
                      {isAnswered && (
                        <span className="shrink-0 mt-0.5">
                          {isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          ) : isSelected ? (
                            <XCircle className="w-4 h-4 text-red-500" />
                          ) : null}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explanation box on answer */}
            {isAnswered && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                <span className="font-semibold text-slate-900 block">Explanation:</span>
                <p className="leading-relaxed">{q.explanation}</p>
              </div>
            )}

            {/* Footer button */}
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNextOrFinish}
                disabled={!isAnswered}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <span>{currentIdx === questions.length - 1 ? 'Complete Quiz' : 'Next Question'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </>
        ) : (
          /* Quiz Results View */
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 mx-auto flex items-center justify-center text-indigo-600 shadow-xs">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900">
                Quiz Completed!
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                You scored <strong className="text-indigo-600 font-mono text-base">{score}</strong> out of <strong className="font-mono text-base">{questions.length}</strong> ({Math.round((score / questions.length) * 100)}%)
              </p>
            </div>

            <div className="pt-4 flex justify-center space-x-3">
              <button
                onClick={handleRetake}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-medium text-slate-700 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
