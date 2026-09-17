import React, { useState } from 'react';
import { 
  Share2, 
  BookOpen, 
  FileEdit, 
  MessageSquare, 
  Heart, 
  Repeat, 
  History, 
  Send, 
  Tag, 
  Clock, 
  Check, 
  Sparkles,
  Users,
  AlertCircle
} from 'lucide-react';

export default function SocialWebSimulator() {
  const [activeTab, setActiveTab] = useState('blog'); // 'blog' | 'wiki' | 'social'

  // --- BLOG STATE ---
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: 'Why Web 2.0 Shifted the Power to Users',
      author: 'Sarah Chen (Developer)',
      date: '10 minutes ago',
      tags: ['Web2.0', 'SocialWeb', 'Architecture'],
      content: 'Before Web 2.0, publishing on the web meant asking a webmaster to upload an HTML file via FTP. Today, blogging platforms democratize publishing through dynamic CMSs backed by relational databases and RESTful endpoints.',
      comments: [
        { id: 1, author: 'Alex Miller', text: 'Completely agree! The transition from passive reading to active writing was revolutionary.' }
      ]
    }
  ]);
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogContent, setNewBlogContent] = useState('');
  const [newBlogTags, setNewBlogTags] = useState('JavaScript, WebDev');
  const [commentInputs, setCommentInputs] = useState({});

  const handleCreateBlogPost = (e) => {
    e.preventDefault();
    if (!newBlogTitle.trim() || !newBlogContent.trim()) return;
    const post = {
      id: Date.now(),
      title: newBlogTitle,
      author: 'You (Student Author)',
      date: 'Just now',
      tags: newBlogTags.split(',').map(t => t.trim()).filter(Boolean),
      content: newBlogContent,
      comments: []
    };
    setBlogPosts([post, ...blogPosts]);
    setNewBlogTitle('');
    setNewBlogContent('');
  };

  const handleAddBlogComment = (postId) => {
    const text = commentInputs[postId];
    if (!text || !text.trim()) return;
    setBlogPosts(blogPosts.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          comments: [...p.comments, { id: Date.now(), author: 'You', text }]
        };
      }
      return p;
    }));
    setCommentInputs({ ...commentInputs, [postId]: '' });
  };

  // --- WIKI STATE ---
  const [wikiContent, setWikiContent] = useState(
    "A Wiki is a hypertext publication collaboratively edited and managed by its own audience directly using a web browser. The first wiki software, WikiWikiWeb, was developed by Ward Cunningham in 1995. Key characteristics include open editing, version control, rollback mechanisms, and transparent change logs."
  );
  const [wikiEditDraft, setWikiEditDraft] = useState(wikiContent);
  const [isEditingWiki, setIsEditingWiki] = useState(false);
  const [wikiHistory, setWikiHistory] = useState([
    {
      version: 1,
      author: 'Ward Cunningham (Simulated)',
      timestamp: 'Yesterday at 14:20',
      summary: 'Initial page creation',
      content: "A Wiki is a hypertext publication collaboratively edited by its audience. Created by Ward Cunningham."
    },
    {
      version: 2,
      author: 'Ada Lovelace (Simulated)',
      timestamp: 'Today at 09:15',
      summary: 'Expanded definition and architectural capabilities',
      content: "A Wiki is a hypertext publication collaboratively edited and managed by its own audience directly using a web browser. The first wiki software, WikiWikiWeb, was developed by Ward Cunningham in 1995. Key characteristics include open editing, version control, rollback mechanisms, and transparent change logs."
    }
  ]);
  const [showDiff, setShowDiff] = useState(false);

  const handleSaveWiki = () => {
    if (!wikiEditDraft.trim()) return;
    const newVersion = {
      version: wikiHistory.length + 1,
      author: 'You (Collaborator)',
      timestamp: 'Just now',
      summary: 'Updated documentation via in-browser editor',
      content: wikiEditDraft
    };
    setWikiHistory([newVersion, ...wikiHistory]);
    setWikiContent(wikiEditDraft);
    setIsEditingWiki(false);
    setShowDiff(true);
  };

  // --- SOCIAL FEED STATE ---
  const [feedPosts, setFeedPosts] = useState([
    {
      id: 1,
      author: 'Elena Rostova',
      handle: '@erostova',
      avatarColor: 'bg-emerald-600',
      time: '12m ago',
      content: 'Just deployed our dynamic AJAX mashup combining OpenStreetMap with live weather sensor data! 🚀 Zero full page reloads required.',
      likes: 24,
      shares: 6,
      userLiked: false,
      userShared: false,
      comments: [
        { id: 101, author: 'David Kim', text: 'That is awesome! Are you using Web Workers for the sensor streaming?' }
      ]
    },
    {
      id: 2,
      author: 'Marcus Vance',
      handle: '@mvance_dev',
      avatarColor: 'bg-indigo-600',
      time: '45m ago',
      content: 'Remember when submitting a web form meant waiting 4 seconds for a white screen to refresh? Web 2.0 changed user experience forever.',
      likes: 89,
      shares: 19,
      userLiked: false,
      userShared: false,
      comments: []
    }
  ]);
  const [newFeedText, setNewFeedText] = useState('');
  const [feedCommentInputs, setFeedCommentInputs] = useState({});

  const handlePostFeed = (e) => {
    e.preventDefault();
    if (!newFeedText.trim()) return;
    const newPost = {
      id: Date.now(),
      author: 'You (Learner)',
      handle: '@student_dev',
      avatarColor: 'bg-purple-600',
      time: 'Just now',
      content: newFeedText,
      likes: 0,
      shares: 0,
      userLiked: false,
      userShared: false,
      comments: []
    };
    setFeedPosts([newPost, ...feedPosts]);
    setNewFeedText('');
  };

  const handleToggleLike = (id) => {
    setFeedPosts(feedPosts.map(p => {
      if (p.id === id) {
        const userLiked = !p.userLiked;
        return {
          ...p,
          userLiked,
          likes: userLiked ? p.likes + 1 : p.likes - 1
        };
      }
      return p;
    }));
  };

  const handleToggleShare = (id) => {
    setFeedPosts(feedPosts.map(p => {
      if (p.id === id) {
        const userShared = !p.userShared;
        return {
          ...p,
          userShared,
          shares: userShared ? p.shares + 1 : p.shares - 1
        };
      }
      return p;
    }));
  };

  const handleAddFeedComment = (postId) => {
    const text = feedCommentInputs[postId];
    if (!text || !text.trim()) return;
    setFeedPosts(feedPosts.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          comments: [...p.comments, { id: Date.now(), author: 'You', text }]
        };
      }
      return p;
    }));
    setFeedCommentInputs({ ...feedCommentInputs, [postId]: '' });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-indigo-500/30">
              <Share2 className="w-3.5 h-3.5" /> Social & Interactive Web Sandbox
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              The 3 Pillars of User-Generated Content
            </h3>
            <p className="text-slate-300 text-sm mt-1">
              Simulate the core applications that transformed passive web consumers into active creators: Blogs, Collaborative Wikis, and Social Networking Feeds.
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-2 mt-6">
          <button
            onClick={() => setActiveTab('blog')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'blog'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white/10 text-slate-300 hover:bg-white/15'
            }`}
          >
            <BookOpen className="w-4 h-4" /> 1. Blog Publishing
          </button>
          <button
            onClick={() => setActiveTab('wiki')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'wiki'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white/10 text-slate-300 hover:bg-white/15'
            }`}
          >
            <FileEdit className="w-4 h-4" /> 2. Collaborative Wiki & Diffs
          </button>
          <button
            onClick={() => setActiveTab('social')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'social'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white/10 text-slate-300 hover:bg-white/15'
            }`}
          >
            <Users className="w-4 h-4" /> 3. Social Network Feed
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6">
        {/* ========================================================= */}
        {/* TAB 1: BLOG PUBLISHING */}
        {/* ========================================================= */}
        {activeTab === 'blog' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Create Post Form */}
            <div className="lg:col-span-5 bg-slate-50 p-5 rounded-xl border border-slate-200">
              <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-3">
                <FileEdit className="w-4 h-4 text-indigo-600" /> Publish a Blog Article
              </h4>
              <p className="text-xs text-slate-500 mb-4">
                In Web 2.0, blogs introduced reverse-chronological publishing, taxonomies (tags), and reader commentary without webmaster approval.
              </p>
              <form onSubmit={handleCreateBlogPost} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Post Title</label>
                  <input
                    type="text"
                    placeholder="e.g. My First Reflection on Web 2.0"
                    value={newBlogTitle}
                    onChange={(e) => setNewBlogTitle(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Tags (comma separated)</label>
                  <input
                    type="text"
                    placeholder="e.g. Web2.0, RSS, Rails"
                    value={newBlogTags}
                    onChange={(e) => setNewBlogTags(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Article Content</label>
                  <textarea
                    rows={4}
                    placeholder="Write your article markdown or plain text here..."
                    value={newBlogContent}
                    onChange={(e) => setNewBlogContent(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" /> Publish to Feed
                </button>
              </form>
            </div>

            {/* Published Posts Feed */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-600" /> Published Blog Stream ({blogPosts.length})
              </h4>
              {blogPosts.map((post) => (
                <div key={post.id} className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-indigo-600">{post.author}</span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.date}
                    </span>
                  </div>
                  <h5 className="text-base font-bold text-slate-900">{post.title}</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">{post.content}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.map((t, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-mono">
                        <Tag className="w-2.5 h-2.5" /> {t}
                      </span>
                    ))}
                  </div>

                  {/* Comments Section */}
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" /> Comments ({post.comments.length})
                    </span>
                    {post.comments.map(c => (
                      <div key={c.id} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                        <span className="font-bold text-slate-700">{c.author}: </span>
                        <span className="text-slate-600">{c.text}</span>
                      </div>
                    ))}
                    
                    {/* Add Comment */}
                    <div className="flex gap-2 pt-1">
                      <input
                        type="text"
                        placeholder="Write a response..."
                        value={commentInputs[post.id] || ''}
                        onChange={(e) => setCommentInputs({ ...commentInputs, [post.id]: e.target.value })}
                        className="flex-1 text-xs px-3 py-1.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      />
                      <button
                        onClick={() => handleAddBlogComment(post.id)}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold"
                      >
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: COLLABORATIVE WIKI */}
        {/* ========================================================= */}
        {activeTab === 'wiki' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <FileEdit className="w-4 h-4 text-indigo-600" /> Collaborative Article: Wiki Architecture
                  </h4>
                  <p className="text-xs text-slate-500">
                    Anyone can edit; every modification creates an immutable snapshot in version history.
                  </p>
                </div>
                {!isEditingWiki && (
                  <button
                    onClick={() => { setIsEditingWiki(true); setWikiEditDraft(wikiContent); }}
                    className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                  >
                    <FileEdit className="w-3.5 h-3.5" /> Edit This Page
                  </button>
                )}
              </div>

              {/* Wiki Display / Editor Box */}
              {isEditingWiki ? (
                <div className="p-4 rounded-xl border border-indigo-200 bg-indigo-50/30 space-y-3">
                  <div className="text-xs font-semibold text-indigo-800 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Collaborative Live Editor
                  </div>
                  <textarea
                    rows={7}
                    value={wikiEditDraft}
                    onChange={(e) => setWikiEditDraft(e.target.value)}
                    className="w-full text-xs font-mono p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  />
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={() => setIsEditingWiki(false)}
                      className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveWiki}
                      className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1"
                    >
                      <Check className="w-3.5 h-3.5" /> Save Changes & Create Revision
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-3">
                  <div className="text-xs text-slate-700 leading-relaxed font-sans">
                    {wikiContent}
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Current Revision: #{wikiHistory[0].version}</span>
                    <span>Last edited by {wikiHistory[0].author} ({wikiHistory[0].timestamp})</span>
                  </div>
                </div>
              )}

              {/* Diff View */}
              {showDiff && (
                <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                      <History className="w-3.5 h-3.5" /> Visual Revision Diff (Before vs After)
                    </span>
                    <button
                      onClick={() => setShowDiff(false)}
                      className="text-[11px] text-amber-800 hover:underline"
                    >
                      Dismiss Diff
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-2.5 rounded bg-rose-50 border border-rose-200 text-rose-800">
                      <div className="text-[10px] uppercase font-bold text-rose-600 mb-1">Previous Revision</div>
                      {wikiHistory[1] ? wikiHistory[1].content : 'Original state'}
                    </div>
                    <div className="p-2.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-800">
                      <div className="text-[10px] uppercase font-bold text-emerald-600 mb-1">New Revision</div>
                      {wikiContent}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Version History Log */}
            <div className="lg:col-span-5 bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
              <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <History className="w-4 h-4 text-indigo-600" /> Revision History Log
              </h4>
              <div className="space-y-2 text-xs">
                {wikiHistory.map((rev) => (
                  <div key={rev.version} className="p-3 rounded-lg bg-white border border-slate-200 shadow-2xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800">Revision v{rev.version}.0</span>
                      <span className="text-[10px] text-slate-400">{rev.timestamp}</span>
                    </div>
                    <div className="text-slate-600 font-medium">{rev.author}</div>
                    <div className="text-slate-500 text-[11px] italic">&quot;{rev.summary}&quot;</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: SOCIAL NETWORK FEED */}
        {/* ========================================================= */}
        {activeTab === 'social' && (
          <div className="max-w-2xl mx-auto space-y-5">
            {/* Create Post */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">
                  YOU
                </div>
                <div className="text-xs font-semibold text-slate-700">Share something with the developer mesh...</div>
              </div>
              <form onSubmit={handlePostFeed} className="space-y-2">
                <textarea
                  rows={2}
                  value={newFeedText}
                  onChange={(e) => setNewFeedText(e.target.value)}
                  placeholder="What are you building today?"
                  className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" /> Post Status
                  </button>
                </div>
              </form>
            </div>

            {/* Posts Stream */}
            <div className="space-y-4">
              {feedPosts.map((post) => (
                <div key={post.id} className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-full ${post.avatarColor} text-white text-xs font-bold flex items-center justify-center`}>
                        {post.author.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">{post.author}</div>
                        <div className="text-[11px] text-slate-400">{post.handle} • {post.time}</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed">{post.content}</p>

                  {/* Actions Bar */}
                  <div className="flex items-center gap-6 pt-2 border-t border-slate-100 text-xs">
                    <button
                      onClick={() => handleToggleLike(post.id)}
                      className={`flex items-center gap-1.5 font-medium transition ${
                        post.userLiked ? 'text-rose-600' : 'text-slate-500 hover:text-rose-600'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${post.userLiked ? 'fill-rose-600' : ''}`} />
                      <span>{post.likes}</span>
                    </button>
                    <button
                      className="flex items-center gap-1.5 text-slate-500 hover:text-indigo-600 font-medium transition"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{post.comments.length}</span>
                    </button>
                    <button
                      onClick={() => handleToggleShare(post.id)}
                      className={`flex items-center gap-1.5 font-medium transition ${
                        post.userShared ? 'text-emerald-600' : 'text-slate-500 hover:text-emerald-600'
                      }`}
                    >
                      <Repeat className="w-4 h-4" />
                      <span>{post.shares}</span>
                    </button>
                  </div>

                  {/* Comments Thread */}
                  {post.comments.length > 0 && (
                    <div className="space-y-1.5 pt-2">
                      {post.comments.map(c => (
                        <div key={c.id} className="p-2 rounded bg-slate-50 text-[11px] border border-slate-100">
                          <span className="font-bold text-slate-800">{c.author}: </span>
                          <span className="text-slate-600">{c.text}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Add Quick Comment */}
                  <div className="flex gap-2 pt-1">
                    <input
                      type="text"
                      placeholder="Comment on this post..."
                      value={feedCommentInputs[post.id] || ''}
                      onChange={(e) => setFeedCommentInputs({ ...feedCommentInputs, [post.id]: e.target.value })}
                      className="flex-1 text-xs px-3 py-1.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                    <button
                      onClick={() => handleAddFeedComment(post.id)}
                      className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 text-xs font-semibold"
                    >
                      Comment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
