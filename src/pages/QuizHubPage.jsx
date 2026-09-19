import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Award, CheckCircle2, RotateCcw, ArrowRight, BookOpen } from 'lucide-react';
import { getAllQuizzes } from '../data/curriculum';
import { useProgress } from '../context/ProgressContext';
import Breadcrumb from '../components/layout/Breadcrumb';
import TopicQuiz from '../components/topic/TopicQuiz';

export default function QuizHubPage() {
  const { progress } = useProgress();
  const [activeQuizTopicId, setActiveQuizTopicId] = useState('dns-resolution');

  const quizzes = getAllQuizzes();
  const currentQuiz = quizzes.find(q => q.topicId === activeQuizTopicId) || quizzes[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Topic Quizzes' }]} />

      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-indigo-700 font-mono text-xs font-semibold uppercase tracking-wider">
          <HelpCircle className="w-4 h-4 text-indigo-600" />
          <span>Evaluation Center</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Web Technology Quiz Center
        </h1>
        <p className="text-sm text-slate-500 max-w-2xl">
          Validate your technical comprehension with targeted conceptual questions. Each question includes immediate step-by-step rationales.
        </p>
      </div>

      {/* Quiz Selector Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {quizzes.map((q) => {
          const scoreData = progress.quizScores[q.topicId];
          const isSelected = activeQuizTopicId === q.topicId;

          return (
            <button
              key={q.topicId}
              onClick={() => setActiveQuizTopicId(q.topicId)}
              className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between space-y-2 ${
                isSelected
                  ? 'bg-indigo-50/80 border-indigo-400 shadow-sm ring-2 ring-indigo-200'
                  : 'bg-white border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase truncate block">
                  {q.unitTitle.replace(/:.*/, '')}
                </span>
                <span className="text-xs font-bold text-slate-900 line-clamp-2">
                  {q.topicTitle}
                </span>
              </div>

              <div className="flex items-center justify-between text-[11px] pt-1">
                <span className="text-slate-500 font-mono">{q.questions.length} questions</span>
                {scoreData ? (
                  <span className="text-emerald-700 font-semibold font-mono bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">
                    {scoreData.score}/{scoreData.total}
                  </span>
                ) : (
                  <span className="text-slate-400 font-mono">Unattempted</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Quiz Area */}
      {currentQuiz && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 px-1">
            <span className="text-xs font-mono text-indigo-700 font-semibold truncate max-w-full sm:max-w-md">
              Currently Testing: {currentQuiz.topicTitle}
            </span>
            <Link
              to={`/topic/${currentQuiz.topicId}`}
              className="text-xs text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 shrink-0"
            >
              <span>Review Topic Notes</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <TopicQuiz
            key={currentQuiz.topicId}
            topicId={currentQuiz.topicId}
            questions={currentQuiz.questions}
          />
        </div>
      )}
    </div>
  );
}
