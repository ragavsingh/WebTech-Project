import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Search, 
  Clock, 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  Sparkles,
  Filter,
  Layers
} from 'lucide-react';
import { UNITS, TOPICS } from '../data/curriculum';
import { useProgress } from '../context/ProgressContext';
import Breadcrumb from '../components/layout/Breadcrumb';

export default function LearnPage() {
  const { isTopicCompleted } = useProgress();
  const [selectedUnit, setSelectedUnit] = useState('all');
  const [searchFilter, setSearchFilter] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('all');

  const allTopicsList = Object.values(TOPICS);

  const filteredTopics = allTopicsList.filter(topic => {
    const matchesUnit = selectedUnit === 'all' || topic.unitId === selectedUnit;
    const matchesDifficulty = difficultyFilter === 'all' || topic.difficulty.toLowerCase() === difficultyFilter.toLowerCase();
    const matchesSearch = topic.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          topic.subtitle.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          topic.definition.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesUnit && matchesDifficulty && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Learn Curriculum' }]} />

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Web Technology Curriculum
        </h1>
        <p className="text-sm text-slate-500 max-w-2xl">
          Comprehensive, simulation-driven learning modules spanning Units 1 through 5. Choose a topic to begin the Explain &rarr; Visualize &rarr; Interact cycle.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card p-4 space-y-4">
        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Filter topics..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs text-slate-400 font-medium whitespace-nowrap">Difficulty:</span>
            {['all', 'Beginner', 'Intermediate', 'Advanced'].map((diff) => (
              <button
                key={diff}
                onClick={() => setDifficultyFilter(diff)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium capitalize transition-colors whitespace-nowrap ${
                  difficultyFilter === diff
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        {/* Unit Tabs */}
        <div className="flex items-center space-x-1 overflow-x-auto border-t border-slate-100 pt-3">
          <button
            onClick={() => setSelectedUnit('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedUnit === 'all'
                ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            All Units
          </button>
          {UNITS.map(u => (
            <button
              key={u.id}
              onClick={() => setSelectedUnit(u.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                selectedUnit === u.id
                  ? 'bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Unit {u.number}
            </button>
          ))}
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {filteredTopics.map((topic) => {
          const completed = isTopicCompleted(topic.id);
          return (
            <Link
              key={topic.id}
              to={`/topic/${topic.id}`}
              className="group bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-indigo-300 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {topic.unitTitle}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {topic.estimatedMinutes}m
                    </span>
                    {completed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Circle className="w-4 h-4 text-slate-300" />
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-900 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {topic.subtitle}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-indigo-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Start Interactive Topic <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold">
                  {topic.difficulty}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {filteredTopics.length === 0 && (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs">
          No topics matched your active filters.
        </div>
      )}
    </div>
  );
}
