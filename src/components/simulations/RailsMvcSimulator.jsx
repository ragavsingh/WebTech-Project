import React, { useState } from 'react';
import { 
  Terminal, 
  ArrowRight, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Database, 
  Layout, 
  Cpu, 
  Globe, 
  Code, 
  Layers,
  Sparkles,
  Info
} from 'lucide-react';

const STAGES = [
  {
    id: 0,
    name: 'Browser Request',
    actor: 'Client / Browser',
    icon: Globe,
    title: 'HTTP Request Initiated',
    action: 'GET /articles/42',
    explanation: 'The user enters a URL or clicks a link. The browser dispatches an HTTP GET request to the Rails web server.',
    file: 'Network Wire',
    snippet: `GET /articles/42 HTTP/1.1\nHost: myapp.org\nAccept: text/html`
  },
  {
    id: 1,
    name: 'Router',
    actor: 'config/routes.rb',
    icon: Terminal,
    title: 'RESTful Route Resolution',
    action: 'Match GET /articles/:id',
    explanation: 'The Rails Router inspects the HTTP verb (GET) and URL path (/articles/42). By convention, it maps this to ArticlesController#show with params[:id] = 42.',
    file: 'config/routes.rb',
    snippet: `Rails.application.routes.draw do\n  # Convention creates 7 RESTful routes\n  resources :articles\nend`
  },
  {
    id: 2,
    name: 'Controller',
    actor: 'ArticlesController',
    icon: Cpu,
    title: 'Controller Action Invocation',
    action: 'ArticlesController#show',
    explanation: 'The controller receives the request, extracts params[:id], and queries the Model. It assigns the result to an instance variable (@article) for the View.',
    file: 'app/controllers/articles_controller.rb',
    snippet: `class ArticlesController < ApplicationController\n  def show\n    # Fetch record through ActiveRecord model\n    @article = Article.find(params[:id])\n    # Implicitly renders app/views/articles/show.html.erb\n  end\nend`
  },
  {
    id: 3,
    name: 'Model & Database',
    actor: 'ActiveRecord (ORM)',
    icon: Database,
    title: 'Object-Relational Mapping (ORM)',
    action: 'SELECT * FROM articles WHERE id = 42',
    explanation: 'The Article model encapsulates business logic and wraps the database table. ActiveRecord automatically translates Ruby queries into SQL without manual boilerplate.',
    file: 'app/models/article.rb',
    snippet: `class Article < ApplicationRecord\n  # Table 'articles' mapped automatically\n  validates :title, presence: true\n  has_many :comments\nend\n\n-- Generated SQL Query:\nSELECT * FROM articles WHERE id = 42 LIMIT 1;`
  },
  {
    id: 4,
    name: 'View Template',
    actor: 'Embedded Ruby (ERB)',
    icon: Layout,
    title: 'Dynamic HTML Rendering',
    action: 'Render show.html.erb with @article',
    explanation: 'The View receives @article from the controller. It executes embedded Ruby (<%= ... %>) tags to interpolate dynamic data into standard HTML.',
    file: 'app/views/articles/show.html.erb',
    snippet: `<h1><%= @article.title %></h1>\n<p class="meta">Published on <%= @article.created_at.strftime("%B %d, %Y") %></p>\n<div class="content">\n  <%= @article.content %>\n</div>`
  },
  {
    id: 5,
    name: 'HTTP Response',
    actor: 'Browser Rendering',
    icon: CheckCircle2,
    title: 'Rendered HTML Delivered to Browser',
    action: 'HTTP 200 OK with complete HTML',
    explanation: 'The Rails server bundles the rendered HTML, sets headers (Content-Type: text/html, HTTP 200 OK), and streams it back to the client browser for rendering.',
    file: 'Browser DOM',
    snippet: `HTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\n\n<!DOCTYPE html>\n<html>\n  <body>\n    <h1>The Magic of Ruby on Rails</h1>\n    ...\n  </body>\n</html>`
  }
];

export default function RailsMvcSimulator() {
  const [currentStage, setCurrentStage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const stage = STAGES[currentStage];

  const handleNext = () => {
    if (currentStage < STAGES.length - 1) {
      setCurrentStage(currentStage + 1);
    }
  };

  const handlePrev = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
    }
  };

  const handleReset = () => {
    setCurrentStage(0);
    setIsAutoPlaying(false);
  };

  const handleAutoPlay = () => {
    setIsAutoPlaying(true);
    let step = 0;
    setCurrentStage(0);
    const interval = setInterval(() => {
      step++;
      if (step < STAGES.length) {
        setCurrentStage(step);
      } else {
        clearInterval(interval);
        setIsAutoPlaying(false);
      }
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-rose-950 via-slate-900 to-rose-950 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-rose-500/30">
              <Layers className="w-3.5 h-3.5" /> MVC Pattern & Convention Over Configuration
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Ruby on Rails: The Request-Response Lifecycle
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Follow how an incoming HTTP request travels across Routes, Controllers, Models, Relational Databases, and ERB Views in the archetypal Web 2.0 framework.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleAutoPlay}
              disabled={isAutoPlaying}
              className="px-3.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 disabled:opacity-50 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition"
            >
              <Play className="w-3.5 h-3.5" /> Auto-Trace Flow
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center gap-1 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>
        </div>

        {/* Pipeline Step Progress */}
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 mt-6">
          {STAGES.map((s, idx) => {
            const Icon = s.icon;
            const isCurrent = idx === currentStage;
            const isCompleted = idx < currentStage;
            return (
              <button
                key={s.id}
                onClick={() => setCurrentStage(idx)}
                className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-white text-slate-900 border-white shadow-md'
                    : isCompleted
                    ? 'bg-rose-900/40 text-rose-200 border-rose-700/50'
                    : 'bg-white/5 text-slate-400 border-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <Icon className={`w-3.5 h-3.5 ${isCurrent ? 'text-rose-600' : isCompleted ? 'text-rose-300' : 'text-slate-500'}`} />
                  <span className="text-[10px] font-mono">0{idx + 1}</span>
                </div>
                <div className="text-[11px] font-bold truncate">
                  {s.name}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Execution View */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Stage Explanation & Action */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-rose-600 uppercase tracking-wider">
                <span>Step {currentStage + 1} of 6</span>
                <span>•</span>
                <span>{stage.actor}</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mt-1">
                {stage.title}
              </h4>
              <div className="inline-block px-2.5 py-1 rounded bg-slate-100 font-mono text-xs text-slate-700 mt-2 border border-slate-200">
                Action: {stage.action}
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {stage.explanation}
            </p>

            {/* Stepper Controls */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handlePrev}
                disabled={currentStage === 0}
                className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 disabled:opacity-40 text-xs font-semibold hover:bg-slate-50 transition"
              >
                ← Previous Step
              </button>
              <button
                onClick={handleNext}
                disabled={currentStage === STAGES.length - 1}
                className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 disabled:opacity-40 text-white text-xs font-semibold transition flex items-center gap-1.5 shadow-sm"
              >
                Next Stage <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Code Snippet / Wire Inspector */}
          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md flex flex-col h-full">
              <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-2 text-rose-400 font-semibold">
                  <Code className="w-3.5 h-3.5" /> {stage.file}
                </span>
                <span className="text-[11px] text-slate-500">Active Component</span>
              </div>
              <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed flex-1">
                <code>{stage.snippet}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Convention over Configuration Callout */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-700">
          <Info className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-900 font-semibold">Convention over Configuration (CoC): </strong>
            Before Rails, Java and PHP enterprise web apps required hundreds of lines of complex XML configuration files just to bind URLs to database tables. Rails established the principle that sensible defaults eliminate boilerplate: if a model is named <code>Article</code>, the database table is automatically assumed to be <code>articles</code>, the controller is <code>ArticlesController</code>, and the view is stored in <code>app/views/articles/</code>.
          </div>
        </div>
      </div>
    </div>
  );
}
