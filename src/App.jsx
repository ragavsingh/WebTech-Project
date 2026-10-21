import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import DocLayout from './components/docs/DocLayout';
import DocTopicPage from './pages/DocTopicPage';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <DocLayout>
          <Routes>
            {/* Default Documentation Home */}
            <Route path="/" element={<DocTopicPage />} />

            {/* Direct Topic Route */}
            <Route path="/topic/:topicId" element={<DocTopicPage />} />
            <Route path="/docs/:topicId" element={<DocTopicPage />} />
            <Route path="/docs" element={<Navigate to="/" replace />} />

            {/* Catch-all Redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </DocLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
