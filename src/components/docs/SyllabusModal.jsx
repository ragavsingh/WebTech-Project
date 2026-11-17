import React from 'react';
import { Link } from 'react-router-dom';
import { X, BookOpen, ExternalLink, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { DOC_CHAPTERS } from '../../data/docCurriculum';

const SYLLABUS_MAPPING = [
  {
    unit: 'Unit 1',
    title: 'Foundations of Internet & Network Architecture',
    syllabusText: 'History of the Internet, World Wide Web-HTML, protocols – HTTP, SMTP, protocols – POP3, MIME, IMAP, Domain Name Server, Web Browsers, Web Servers',
    chapterId: 'chapter-1'
  },
  {
    unit: 'Unit 2',
    title: 'HTML5, DHTML, DOM & XML Architecture',
    syllabusText: 'List, Tables, Images, Forms, Frames, Dynamic HTML with Java Script, CSS Document type definition, Dynamic HTML, XML schemes, Object Models, Presenting XML, Using XML Processors: DOM and SAX',
    chapterId: 'chapter-2'
  },
  {
    unit: 'Unit 3',
    title: 'Web Services, Distributed Architectures & AJAX',
    syllabusText: 'Introduction to Web Services, UDDI, SOAP, WSDL, Web Service, Architecture web services, Developing and deploying web services., Ajax – Improving web page performance using Ajax, Programming in Ajax. CORBA',
    chapterId: 'chapter-3'
  },
  {
    unit: 'Unit 4',
    title: 'Web 2.0, Social Web, Semantic Web & Information Systems',
    syllabusText: 'Web 2.0: Interactive and Social Web (Blogs, Wikis, Social Networking Sites, Technologies Behind Web 2.0 AJAX, RSS, Ruby on Rails, Open APIs, Web 3.0: Semantic Web, Widgets, Mashups, and RDF, Web-Based Information Systems, Search Engines, Recommender Systems, Benefits of Blockchain, Edge Computing, and Dark Mode in Web Development',
    chapterId: 'chapter-4'
  },
  {
    unit: 'Unit 5',
    title: 'The Future Web — AI, Decentralization, IoT & Spatial Web',
    syllabusText: 'Web 4.0: AI-Powered Web and Personalized Content, Decentralized Web (DWeb) and Blockchain Integration, Internet of Things (IoT) in Web Development, Augmented Reality (AR) and Virtual Reality (VR) in Web, Smart Web, Adaptive Interfaces, Web Automation, Impact of 5G on Web Technologies',
    chapterId: 'chapter-5'
  },
  {
    unit: 'Unit 6 (Industry Extension)',
    title: 'Production Web Engineering, Security & Performance',
    syllabusText: 'Web Security Architecture (HTTPS, TLS 1.3, CORS, CSP, OWASP Top 10), Web Performance & Core Web Vitals (LCP, INP, CLS, HTTP/3 QUIC), Global Production Architectures (Netflix Open Connect, Cloudflare Anycast, Stripe Distributed Ledgers)',
    chapterId: 'chapter-6',
    isExtension: true
  }
];

export default function SyllabusModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/60 backdrop-blur-sm transition-all overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="w-full max-w-4xl my-3 sm:my-8 rounded-2xl border border-doc-border dark:border-doc-border border-doc-lightBorder bg-doc-surface dark:bg-doc-surface bg-doc-lightSurface shadow-2xl overflow-hidden transition-all flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="p-3.5 sm:p-5 border-b border-doc-border dark:border-doc-border border-doc-lightBorder flex items-center justify-between bg-doc-bg/60 dark:bg-doc-bg/60 bg-doc-lightBg/60">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-doc-accent/15 text-doc-accent border border-doc-accent/30 flex items-center justify-center font-mono font-bold text-xs sm:text-sm shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <h3 className="text-sm sm:text-base font-bold text-doc-text dark:text-doc-text text-doc-lightText tracking-tight truncate">
                  Web Technology — Syllabus Map
                </h3>
                <span className="px-1.5 py-0.2 sm:px-2 sm:py-0.5 rounded text-[9px] sm:text-[10px] font-mono font-bold uppercase bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 shrink-0">
                  100% Covered
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-doc-muted dark:text-doc-muted text-doc-lightMuted truncate hidden sm:block">
                Official University Course Specification mapped to WebTech deep-dive engineering chapters
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-doc-border dark:border-doc-border border-doc-lightBorder hover:bg-doc-border/30 text-doc-muted hover:text-doc-text transition-colors shrink-0 ml-2"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Modal Body: Syllabus Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-xs divide-y divide-doc-border/60 dark:divide-doc-border/60 divide-doc-lightBorder/80">
          {SYLLABUS_MAPPING.map((item, idx) => {
            const chapter = DOC_CHAPTERS.find(c => c.id === item.chapterId);

            return (
              <div key={idx} className={idx > 0 ? 'pt-6' : ''}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded font-mono text-xs font-bold uppercase bg-doc-border/70 dark:bg-doc-border/70 bg-doc-lightBorder text-doc-accent border border-doc-border">
                      {item.unit}
                    </span>
                    <h4 className="text-sm font-bold text-doc-text dark:text-doc-text text-doc-lightText">
                      {item.title}
                    </h4>
                  </div>
                  {item.isExtension ? (
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-purple-500/15 text-purple-400 border border-purple-500/30 font-semibold">
                      Industrial Value-Add
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-doc-muted">
                      {chapter?.topics?.length} Detailed Topics
                    </span>
                  )}
                </div>

                {/* Prescribed Syllabus Topics Quote */}
                <div className="p-3 mb-3 rounded-lg border border-doc-border/60 dark:border-doc-border/60 border-doc-lightBorder/80 bg-doc-bg/40 dark:bg-doc-bg/40 bg-doc-lightBg/50 text-[11px] font-mono text-doc-muted dark:text-doc-muted text-doc-lightMuted leading-relaxed">
                  <span className="font-semibold text-doc-text/70 uppercase text-[10px] block mb-1">
                    Prescribed Syllabus:
                  </span>
                  {item.syllabusText}
                </div>

                {/* Direct Links to Documented Topics */}
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-doc-muted block mb-1.5 font-bold">
                    Documented Topics in WebTech:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {chapter?.topics?.map((topic) => (
                      <Link
                        key={topic.id}
                        to={`/topic/${topic.id}`}
                        onClick={onClose}
                        className="group flex items-start gap-2 p-2 rounded-lg border border-doc-border/40 hover:border-doc-accent/60 bg-doc-surface/50 hover:bg-doc-surface transition-all text-left"
                      >
                        <span className="font-mono text-[10px] font-bold text-doc-accent shrink-0 mt-0.5">
                          {topic.code}
                        </span>
                        <span className="text-[11px] font-medium text-doc-text dark:text-doc-text text-doc-lightText group-hover:text-doc-accent line-clamp-1 transition-colors">
                          {topic.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-doc-border dark:border-doc-border border-doc-lightBorder bg-doc-bg/50 dark:bg-doc-bg/50 bg-doc-lightBg/50 flex flex-wrap items-center justify-between gap-3 text-xs text-doc-muted font-mono">
          <span>Subject: Web Technology</span>
          <span>Platform: WebTech Documentation</span>
        </div>
      </div>
    </div>
  );
}
