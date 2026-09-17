import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProgressProvider } from './context/ProgressContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import TopicDetailPage from './pages/TopicDetailPage';
import PlaygroundPage from './pages/PlaygroundPage';
import ChallengesPage from './pages/ChallengesPage';
import QuizHubPage from './pages/QuizHubPage';
import ProgressPage from './pages/ProgressPage';
import WebTechnologyJourneyPage from './pages/WebTechnologyJourneyPage';

export default function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-background-light text-navy-900 bg-subtle-mesh selection:bg-indigo-500 selection:text-white">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/learn" element={<LearnPage />} />
              <Route path="/journey" element={<WebTechnologyJourneyPage />} />
              <Route path="/topic/:topicId" element={<TopicDetailPage />} />
              <Route path="/playground" element={<PlaygroundPage />} />
              <Route path="/challenges" element={<ChallengesPage />} />
              <Route path="/quiz" element={<QuizHubPage />} />
              <Route path="/progress" element={<ProgressPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ProgressProvider>
  );
}
