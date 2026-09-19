import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  CheckCircle2, 
  Award, 
  HelpCircle, 
  BookOpen, 
  Flame, 
  RotateCcw, 
  Download, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { UNITS, TOPICS } from '../data/curriculum';
import { useProgress } from '../context/ProgressContext';
import Breadcrumb from '../components/layout/Breadcrumb';

export default function ProgressPage() {
  const { 
    progress, 
    overallPercentage, 
    completedTopicsCount, 
    totalAvailableTopics, 
    resetProgress 
  } = useProgress();

  const totalChallenges = Object.values(TOPICS).filter(t => t.challenge).length;
  const completedChallengesCount = progress.completedChallenges.length;

  const quizEntries = Object.entries(progress.quizScores);
  const quizzesCompletedCount = quizEntries.length;

  let totalQuestionsAnswered = 0;
  let totalCorrectAnswers = 0;
  quizEntries.forEach(([_, data]) => {
    totalCorrectAnswers += data.score;
    totalQuestionsAnswered += data.total;
  });

  const averageQuizAccuracy = totalQuestionsAnswered > 0 
    ? Math.round((totalCorrectAnswers / totalQuestionsAnswered) * 100) 
    : 0;

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(progress, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `webtech_progress_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleResetConfirm = () => {
    if (window.confirm("Are you sure you want to reset all your progress data? This cannot be undone.")) {
      resetProgress();
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Learning Progress' }]} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-indigo-700 font-mono text-xs font-semibold uppercase tracking-wider">
            <TrendingUp className="w-4 h-4 text-indigo-600" />
            <span>Learning Dashboard</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Your Curriculum Progress
          </h1>
          <p className="text-sm text-slate-500">
            Track completed topic documentation, simulator experiments, quiz accuracy, and challenges.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleExport}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-medium text-slate-700 transition-colors shadow-2xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Data</span>
          </button>
          <button
            onClick={handleResetConfirm}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-red-200 bg-red-50 hover:bg-red-100 text-xs font-medium text-red-700 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Progress</span>
          </button>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Overall Completion */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-card space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Overall Completion</span>
            <BookOpen className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <span className="text-3xl font-black text-slate-900 font-mono">{overallPercentage}%</span>
            <span className="text-xs text-slate-400">({completedTopicsCount}/{totalAvailableTopics} topics)</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div 
              style={{ width: `${overallPercentage}%` }} 
              className="h-full bg-indigo-600 rounded-full transition-all duration-500"
            />
          </div>
        </div>

        {/* Challenges Solved */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-card space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Challenges Solved</span>
            <Award className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <span className="text-3xl font-black text-slate-900 font-mono">{completedChallengesCount}</span>
            <span className="text-xs text-slate-400">of {totalChallenges} total</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div 
              style={{ width: `${totalChallenges > 0 ? (completedChallengesCount / totalChallenges) * 100 : 0}%` }} 
              className="h-full bg-emerald-500 rounded-full transition-all duration-500"
            />
          </div>
        </div>

        {/* Quiz Accuracy */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-card space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Quiz Accuracy</span>
            <HelpCircle className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <span className="text-3xl font-black text-slate-900 font-mono">{averageQuizAccuracy}%</span>
            <span className="text-xs text-slate-400">({quizzesCompletedCount} quizzes)</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div 
              style={{ width: `${averageQuizAccuracy}%` }} 
              className="h-full bg-blue-500 rounded-full transition-all duration-500"
            />
          </div>
        </div>

        {/* Study Streak */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-card space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Study Streak</span>
            <Flame className="w-4 h-4 text-orange-500" />
          </div>
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <span className="text-3xl font-black text-slate-900 font-mono">{progress.streak || 3}</span>
            <span className="text-xs text-slate-400">days active</span>
          </div>
          <span className="text-[11px] text-emerald-700 font-medium block">
            Consistent learning momentum!
          </span>
        </div>
      </div>

      {/* Per-Unit Progress Breakdown */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <span className="w-1.5 h-5 rounded-full bg-indigo-600 inline-block" />
          <span>Curriculum Unit Breakdown</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {UNITS.map((unit) => {
            const unitTopicIds = unit.topics.map(t => t.id);
            const unitCompletedCount = unitTopicIds.filter(id => progress.completedTopics.includes(id)).length;
            const unitPercentage = unitTopicIds.length > 0 
              ? Math.round((unitCompletedCount / unitTopicIds.length) * 100)
              : 0;

            return (
              <div key={unit.id} className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-card space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded font-mono">
                    Unit {unit.number}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-800">
                    {unitPercentage}% Completed
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {unit.title}
                  </h3>
                  <div className="mt-2 w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      style={{ width: `${unitPercentage}%` }} 
                      className="h-full bg-indigo-600 rounded-full"
                    />
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>{unitCompletedCount} of {unit.topics.length} topics finished</span>
                  <Link
                    to="/learn"
                    className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1"
                  >
                    <span>View Topics</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
