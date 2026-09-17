import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  RotateCcw, 
  Terminal, 
  Sparkles, 
  HelpCircle,
  ShieldAlert,
  Activity
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useProgress } from '../../context/ProgressContext';

export default function BreakTheWebChallenge() {
  const { markChallengeCompleted, isChallengeCompleted } = useProgress();

  const scenarios = [
    {
      id: 'break-1',
      title: 'Bug #1: The Phantom Font File (MIME-Type Failure)',
      symptom: 'Browser console reports: "Refused to apply style/font from \'https://cdn.example.com/inter.woff2\' because its MIME type (\'text/plain\') is not a supported stylesheet or font MIME type."',
      question: 'Why did the browser refuse to render the custom typography?',
      options: [
        { id: 'a', text: 'The user has an outdated GPU that cannot render WOFF2 fonts.', correct: false, reason: 'MIME validation happens at the network/parser layer, not the GPU.' },
        { id: 'b', text: 'The CDN server is incorrectly emitting `Content-Type: text/plain` instead of `font/woff2`. The browser security policy strictly enforces MIME type matching for web fonts.', correct: true, reason: 'Correct! Browsers prevent MIME-confusion security attacks by refusing to parse binary font files delivered with text/plain headers.' },
        { id: 'c', text: 'The DNS resolver failed to query the root nameserver.', correct: false, reason: 'If DNS failed, the HTTP request would never have reached the CDN at all.' }
      ]
    },
    {
      id: 'break-2',
      title: 'Bug #2: The Vanishing Email Mystery (POP3 vs IMAP)',
      symptom: 'A CEO configured her email client on a newly bought phone using POP3. After checking emails at the airport, she opens her laptop at the hotel and finds her entire inbox empty!',
      question: 'What architectural behavior caused the emails to disappear from her laptop?',
      options: [
        { id: 'a', text: 'POP3 downloaded all emails to the phone and executed the DELE command, purging them from the server spool.', correct: true, reason: 'Spot on! Standard POP3 defaults to downloading and deleting emails from the central server. The laptop found an empty server mailbox.' },
        { id: 'b', text: 'The phone used IMAP IDLE which automatically encrypted the laptop hard drive.', correct: false, reason: 'IMAP synchronizes email across devices rather than deleting it.' },
        { id: 'c', text: 'SMTP relay servers reject connections from hotel Wi-Fi networks.', correct: false, reason: 'SMTP is for outgoing mail; reading inboxes is handled by POP3/IMAP.' }
      ]
    },
    {
      id: 'break-3',
      title: 'Bug #3: The DNS CNAME Apex Trap',
      symptom: 'After adding a CNAME record for `@` pointing to `my-app.vercel.app`, all employee emails @company.com stopped delivering with "MX lookup failed".',
      question: 'Why did adding a root CNAME destroy the company email routing?',
      options: [
        { id: 'a', text: 'Vercel servers automatically block all incoming port 25 email traffic.', correct: false, reason: 'The issue is in the DNS zone configuration, not Vercel.' },
        { id: 'b', text: 'RFC 1034 mandates that if a CNAME exists for a node, no other data (including MX records) may exist for that node. The root CNAME nullified the MX records!', correct: true, reason: 'Exactly! A CNAME record aliases the entire domain node. On the zone apex (@), it swallows MX, NS, and TXT records, catastrophic for email.' },
        { id: 'c', text: 'DNS queries on IPv6 AAAA records override CNAME pointers.', correct: false, reason: 'CNAME takes precedence over all other record types at the same node.' }
      ]
    }
  ];

  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [solvedScenarios, setSolvedScenarios] = useState({});

  const scenario = scenarios[currentScenario];

  const handleSelect = (opt) => {
    setSelectedOpt(opt);
    setShowResult(true);

    if (opt.correct) {
      setSolvedScenarios(prev => ({ ...prev, [scenario.id]: true }));
      markChallengeCompleted('break-the-web');

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 }
        });
      } catch (e) {}
    }
  };

  const handleNext = () => {
    setSelectedOpt(null);
    setShowResult(false);
    setCurrentScenario(prev => (prev + 1) % scenarios.length);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card overflow-hidden">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-red-50/40 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold">
            <ShieldAlert className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Unit 1 Special: "Break the Web" Diagnostic Lab</h3>
            <p className="text-xs text-slate-500">Investigate production outages caused by DNS, MIME, and protocol misunderstandings</p>
          </div>
        </div>

        <div className="flex items-center space-x-1 font-mono text-xs text-slate-500">
          <span>Case {currentScenario + 1} / {scenarios.length}</span>
        </div>
      </div>

      {/* Case Body */}
      <div className="p-6 space-y-5 bg-gradient-to-b from-white to-slate-50/40">
        <div>
          <span className="text-[10px] font-mono uppercase bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded">
            Incident Investigation
          </span>
          <h4 className="text-base font-bold text-slate-900 mt-2">
            {scenario.title}
          </h4>
        </div>

        {/* Symptom Terminal Log */}
        <div className="bg-slate-900 text-slate-200 p-4 rounded-xl font-mono text-xs border border-slate-800 space-y-1 shadow-inner">
          <div className="text-slate-500 text-[10px] uppercase font-bold border-b border-slate-800 pb-1">
            Browser Error Log / Network Wire Diagnostic
          </div>
          <div className="text-red-400 leading-relaxed pt-1">
            &gt; {scenario.symptom}
          </div>
        </div>

        {/* Question Prompt */}
        <div className="text-xs sm:text-sm font-semibold text-slate-800">
          {scenario.question}
        </div>

        {/* Diagnostic Hypotheses */}
        <div className="space-y-2.5">
          {scenario.options.map(opt => {
            const isSelected = selectedOpt?.id === opt.id;
            let style = 'border-slate-200 hover:bg-slate-50 text-slate-700';

            if (showResult && isSelected) {
              style = opt.correct 
                ? 'bg-emerald-50 border-emerald-400 text-emerald-900 ring-2 ring-emerald-200' 
                : 'bg-red-50 border-red-300 text-red-900 ring-2 ring-red-100';
            } else if (showResult && opt.correct) {
              style = 'bg-emerald-50/60 border-emerald-300 text-emerald-800';
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt)}
                disabled={showResult && selectedOpt?.correct}
                className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all ${style}`}
              >
                <div className="flex items-start justify-between">
                  <span>{opt.text}</span>
                  {showResult && isSelected && (
                    <span className="shrink-0 ml-2">
                      {opt.correct ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <AlertTriangle className="w-4 h-4 text-red-500" />}
                    </span>
                  )}
                </div>

                {showResult && isSelected && (
                  <div className={`mt-2 pt-2 border-t text-xs font-normal ${
                    opt.correct ? 'border-emerald-200 text-emerald-800' : 'border-red-200 text-red-700'
                  }`}>
                    {opt.reason}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Footer Next Case Button */}
        {showResult && (
          <div className="flex justify-end pt-2 border-t border-slate-100">
            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              Next Incident Case &rarr;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
