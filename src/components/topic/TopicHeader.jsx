import React from 'react';
import { 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Circle, 
  Bookmark, 
  BookmarkCheck, 
  Share2, 
  ArrowLeft 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProgress } from '../../context/ProgressContext';

export default function TopicHeader({ topic }) {
  const { isTopicCompleted, toggleTopicCompletion, progress, toggleBookmark } = useProgress();
  const completed = isTopicCompleted(topic.id);
  const bookmarked = progress.bookmarks.includes(topic.id);

  const getDifficultyBadge = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Intermediate':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Advanced':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-4 pb-6 border-b border-slate-200/80">
      {/* Unit Tag & Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span 
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 max-w-[200px] sm:max-w-none truncate"
            title={topic.unitTitle}
          >
            {topic.unitTitle}
          </span>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getDifficultyBadge(topic.difficulty)}`}>
            {topic.difficulty}
          </span>
          <span className="inline-flex items-center text-xs text-slate-500 space-x-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{topic.estimatedMinutes} min read &amp; lab</span>
          </span>
        </div>

        {/* Action buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => toggleBookmark(topic.id)}
            className={`p-2 rounded-lg border text-xs font-medium transition-colors flex items-center space-x-1.5 ${
              bookmarked 
                ? 'bg-amber-50 text-amber-700 border-amber-200' 
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
            title="Bookmark this topic"
          >
            {bookmarked ? <BookmarkCheck className="w-4 h-4 text-amber-600" /> : <Bookmark className="w-4 h-4 text-slate-400" />}
            <span className="hidden sm:inline">{bookmarked ? 'Saved' : 'Save'}</span>
          </button>

          <button
            onClick={() => toggleTopicCompletion(topic.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all shadow-xs ${
              completed
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                : 'bg-white border border-slate-200 hover:bg-slate-50 text-slate-700'
            }`}
          >
            {completed ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Completed</span>
              </>
            ) : (
              <>
                <Circle className="w-4 h-4 text-slate-400" />
                <span>Mark Completed</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Title & Subtitle */}
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight break-words">
          {topic.title}
        </h1>
        <p className="mt-1.5 text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed max-w-3xl">
          {topic.subtitle}
        </p>
      </div>
    </div>
  );
}
