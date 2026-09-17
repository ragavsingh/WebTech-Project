import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Github, ArrowRight, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/60 mt-20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand & Philosophy */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-xs">
                <FlaskConical className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-base text-slate-900 tracking-tight">WebTech Playground</span>
            </div>
            <p className="text-xs text-slate-500 max-w-md leading-relaxed">
              An interactive documentation, simulation, and experimentation platform for web technology engineering. Designed around the 6-step cycle: Explain &rarr; Visualize &rarr; Interact &rarr; Experiment &rarr; Practice &rarr; Quiz.
            </p>
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <span>Crafted for high-clarity web education</span>
            </div>
          </div>

          {/* Col 2: Learning Units */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">Curriculum Units</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><Link to="/topic/history-of-the-internet" className="hover:text-indigo-600 transition-colors">Unit 1: Fundamentals & Protocols</Link></li>
              <li><Link to="/topic/html-lists-tables-images" className="hover:text-indigo-600 transition-colors">Unit 2: HTML, DHTML & XML</Link></li>
              <li><Link to="/topic/intro-web-services" className="hover:text-indigo-600 transition-colors">Unit 3: Web Services & AJAX</Link></li>
              <li><Link to="/topic/web20-evolution" className="hover:text-indigo-600 transition-colors">Unit 4: Web 2.0 to Web 3.0</Link></li>
              <li><Link to="/topic/web40-future-web" className="hover:text-indigo-600 transition-colors">Unit 5: The Future Web Lab</Link></li>
            </ul>
          </div>

          {/* Col 3: Interactive Hubs */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">Interactive Hubs</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><Link to="/journey" className="hover:text-indigo-600 transition-colors font-semibold text-indigo-700">Web Technology Journey &rarr;</Link></li>
              <li><Link to="/playground" className="hover:text-indigo-600 transition-colors">Simulation Playground</Link></li>
              <li><Link to="/challenges" className="hover:text-indigo-600 transition-colors">Hands-on Challenges</Link></li>
              <li><Link to="/quiz" className="hover:text-indigo-600 transition-colors">Topic Quiz Hub</Link></li>
              <li><Link to="/progress" className="hover:text-indigo-600 transition-colors">Progress Tracker</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} WebTech Playground. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-medium border border-indigo-100">
              Vite + React + Tailwind
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
