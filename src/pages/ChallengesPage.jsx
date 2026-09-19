import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle2, Circle, Filter, ArrowRight, Sparkles } from 'lucide-react';
import { getAllChallenges } from '../data/curriculum';
import { useProgress } from '../context/ProgressContext';
import Breadcrumb from '../components/layout/Breadcrumb';
import MiniChallenge from '../components/topic/MiniChallenge';
import BreakTheWebChallenge from '../components/simulations/BreakTheWebChallenge';
import { ShieldAlert } from 'lucide-react';

export default function ChallengesPage() {
  const { isChallengeCompleted } = useProgress();
  const [filterDifficulty, setFilterDifficulty] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const challenges = getAllChallenges();

  const filteredChallenges = challenges.filter(c => {
    const isCompleted = isChallengeCompleted(c.id);
    const matchesDiff = filterDifficulty === 'all' || c.difficulty.toLowerCase() === filterDifficulty.toLowerCase();
    const matchesStatus = filterStatus === 'all' || (filterStatus === 'solved' ? isCompleted : !isCompleted);
    return matchesDiff && matchesStatus;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Challenges' }]} />

      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-emerald-700 font-mono text-xs font-semibold uppercase tracking-wider">
          <Award className="w-4 h-4 text-emerald-600" />
          <span>Interactive Practice Problems</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Web Technology Debugging Challenges
        </h1>
        <p className="text-sm text-slate-500 max-w-2xl">
          Apply your theoretical knowledge to real-world debugging scenarios, broken DNS records, incorrect HTTP status codes, and DOM tree traps.
        </p>
      </div>

      {/* Featured Special Challenge */}
      <BreakTheWebChallenge />

      {/* Filter Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card p-4 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center space-x-2">
          <span className="text-slate-400 font-medium">Difficulty:</span>
          {['all', 'Beginner', 'Intermediate', 'Advanced'].map((diff) => (
            <button
              key={diff}
              onClick={() => setFilterDifficulty(diff)}
              className={`px-2.5 py-1 rounded-lg capitalize transition-colors ${
                filterDifficulty === diff
                  ? 'bg-indigo-600 text-white font-semibold shadow-2xs'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-slate-400 font-medium">Status:</span>
          {[
            { id: 'all', label: 'All Challenges' },
            { id: 'unsolved', label: 'Unsolved' },
            { id: 'solved', label: 'Solved' }
          ].map((st) => (
            <button
              key={st.id}
              onClick={() => setFilterStatus(st.id)}
              className={`px-2.5 py-1 rounded-lg transition-colors ${
                filterStatus === st.id
                  ? 'bg-emerald-600 text-white font-semibold shadow-2xs'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {st.label}
            </button>
          ))}
        </div>
      </div>

      {/* Challenges List */}
      <div className="space-y-6">
        {filteredChallenges.map((challenge) => (
          <div key={challenge.id} className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 px-1">
              <span className="text-xs font-mono text-indigo-700 font-semibold truncate max-w-full sm:max-w-md">
                {challenge.unitTitle} &bull; {challenge.topicTitle}
              </span>
              <Link
                to={`/topic/${challenge.topicId}`}
                className="text-xs text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 shrink-0"
              >
                <span>Read Topic Documentation</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <MiniChallenge challenge={challenge} />
          </div>
        ))}

        {filteredChallenges.length === 0 && (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs">
            No challenges match the active filter criteria.
          </div>
        )}
      </div>
    </div>
  );
}
