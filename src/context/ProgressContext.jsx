import React, { createContext, useContext, useState, useEffect } from 'react';
import { TOPICS, UNITS } from '../data/curriculum';

const ProgressContext = createContext(null);

const STORAGE_KEY = 'webtech_playground_progress_v1';

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to load progress from localStorage', e);
    }
    return {
      completedTopics: ['dns-resolution'], // Start with 1 completed to show active progress
      completedChallenges: [],
      quizScores: {
        'dns-resolution': { score: 3, total: 3, completedAt: new Date().toISOString() }
      },
      bookmarks: [],
      streak: 3
    };
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn('Failed to save progress to localStorage', e);
    }
  }, [progress]);

  const toggleTopicCompletion = (topicId) => {
    setProgress(prev => {
      const exists = prev.completedTopics.includes(topicId);
      const updated = exists 
        ? prev.completedTopics.filter(id => id !== topicId)
        : [...prev.completedTopics, topicId];
      return { ...prev, completedTopics: updated };
    });
  };

  const isTopicCompleted = (topicId) => {
    return progress.completedTopics.includes(topicId);
  };

  const markChallengeCompleted = (challengeId) => {
    setProgress(prev => {
      if (prev.completedChallenges.includes(challengeId)) return prev;
      return {
        ...prev,
        completedChallenges: [...prev.completedChallenges, challengeId]
      };
    });
  };

  const isChallengeCompleted = (challengeId) => {
    return progress.completedChallenges.includes(challengeId);
  };

  const recordQuizScore = (topicId, score, total) => {
    setProgress(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [topicId]: {
          score,
          total,
          completedAt: new Date().toISOString()
        }
      }
    }));
  };

  const toggleBookmark = (topicId) => {
    setProgress(prev => {
      const isBookmarked = prev.bookmarks.includes(topicId);
      return {
        ...prev,
        bookmarks: isBookmarked 
          ? prev.bookmarks.filter(id => id !== topicId)
          : [...prev.bookmarks, topicId]
      };
    });
  };

  const resetProgress = () => {
    const fresh = {
      completedTopics: [],
      completedChallenges: [],
      quizScores: {},
      bookmarks: [],
      streak: 1
    };
    setProgress(fresh);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
  };

  // Compute stats
  const totalAvailableTopics = Object.keys(TOPICS).length;
  const completedTopicsCount = progress.completedTopics.length;
  const overallPercentage = totalAvailableTopics > 0 
    ? Math.round((completedTopicsCount / totalAvailableTopics) * 100) 
    : 0;

  const value = {
    progress,
    toggleTopicCompletion,
    isTopicCompleted,
    markChallengeCompleted,
    isChallengeCompleted,
    recordQuizScore,
    toggleBookmark,
    resetProgress,
    overallPercentage,
    totalAvailableTopics,
    completedTopicsCount
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return ctx;
}
