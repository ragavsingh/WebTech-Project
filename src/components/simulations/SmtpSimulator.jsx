import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Server, 
  User, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  Info,
  Layers,
  Inbox
} from 'lucide-react';

export default function SmtpSimulator() {
  const [currentHop, setCurrentHop] = useState(0); // 0: ready, 1: sender to local smtp, 2: smtp to mx, 3: mx to recipient
  const [isSending, setIsSending] = useState(false);
  const [selectedStage, setSelectedStage] = useState('sender');

  const stages = {
    sender: {
      title: '1. Mail User Agent (MUA)',
      name: 'Sender Client',
      role: 'Outbox Client',
      desc: 'The sender composes an email (e.g., using Thunderbird, Outlook, or webmail) and clicks Send. The MUA connects to the sender\'s outgoing SMTP server over port 587 (submission with STARTTLS) or legacy port 25/465.',
      techNote: 'Client authenticates via SMTP AUTH, transmits MAIL FROM: alice@gmail.com and RCPT TO: bob@outlook.com.'
    },
    smtpServer: {
      title: '2. Outgoing SMTP Relay Server',
      name: 'Sender\'s Mail Transfer Agent (MTA)',
      role: 'Resolver & Relayer',
      desc: 'The sender\'s SMTP server accepts the message. Crucially, SMTP is a "push" relay protocol. The server performs a DNS lookup for the MX (Mail Exchange) record of the recipient\'s domain (outlook.com).',
      techNote: 'DNS query `dig outlook.com MX` returns `outlook-com.mail.protection.outlook.com` with priority 10.'
    },
    recipientServer: {
      title: '3. Recipient\'s Inbound Mail Server (MX)',
      name: 'Recipient\'s Mail Delivery Agent (MDA)',
      role: 'Inbound Receiver & Filter',
      desc: 'The recipient\'s mail server receives the SMTP transmission over port 25, runs spam/virus scans, checks SPF/DKIM/DMARC authentication, and deposits the email into Bob\'s mailbox spool.',
      techNote: 'SMTP stops here! SMTP cannot deliver emails onto a smartphone or offline laptop—it can only deposit mail on the server.'
    },
    recipient: {
      title: '4. Recipient Client Retrieval (POP3/IMAP)',
      name: 'Recipient Mail Client',
      role: 'Mailbox Consumer',
      desc: 'The recipient does not use SMTP to read the message. Instead, they use a pull protocol like IMAP (port 993) or POP3 (port 995) to sync or download the message from the server mailbox.',
      techNote: 'This is the most critical distinction in email architecture: SMTP is exclusively for pushing/sending/relaying; POP3/IMAP are for pulling/retrieving.'
    }
  };

  const handleSendMail = () => {
    setIsSending(true);
    setCurrentHop(1);
    setSelectedStage('sender');

    setTimeout(() => {
      setCurrentHop(2);
      setSelectedStage('smtpServer');
      setTimeout(() => {
        setCurrentHop(3);
        setSelectedStage('recipientServer');
        setTimeout(() => {
          setCurrentHop(4);
          setSelectedStage('recipient');
          setIsSending(false);
        }, 1200);
      }, 1200);
    }, 1200);
  };

  const handleReset = () => {
    setCurrentHop(0);
    setIsSending(false);
    setSelectedStage('sender');
  };

  const currentInfo = stages[selectedStage];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card overflow-hidden">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">SMTP Email Delivery &amp; Relay Simulator</h3>
            <p className="text-xs text-slate-500">Trace push-based mail relay: Sender &rarr; Sender MTA &rarr; Recipient MX &rarr; Mailbox</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleSendMail}
            disabled={isSending}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{currentHop > 0 ? 'Retransmit Email' : 'Send Test Email'}</span>
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-500"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Visual Email Traveling Track */}
      <div className="p-6 bg-gradient-to-b from-slate-50/50 to-white space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          {/* Node 1 */}
          <button
            onClick={() => setSelectedStage('sender')}
            className={`p-4 rounded-xl border text-left transition-all ${
              selectedStage === 'sender'
                ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-200'
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs">
                <User className="w-4 h-4" />
              </span>
              <span className="text-[10px] font-mono text-slate-400 font-bold">PORT 587</span>
            </div>
            <h5 className="text-xs font-bold text-slate-900">Alice (Sender)</h5>
            <div className="text-[10px] text-slate-500 mt-1">alice@gmail.com</div>
          </button>

          {/* Node 2 */}
          <button
            onClick={() => setSelectedStage('smtpServer')}
            className={`p-4 rounded-xl border text-left transition-all ${
              selectedStage === 'smtpServer'
                ? 'bg-blue-50 border-blue-500 ring-2 ring-blue-200'
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-xs">
                <Server className="w-4 h-4" />
              </span>
              <span className="text-[10px] font-mono text-slate-400 font-bold">PORT 25</span>
            </div>
            <h5 className="text-xs font-bold text-slate-900">Gmail SMTP Server</h5>
            <div className="text-[10px] text-slate-500 mt-1">smtp.gmail.com</div>
          </button>

          {/* Node 3 */}
          <button
            onClick={() => setSelectedStage('recipientServer')}
            className={`p-4 rounded-xl border text-left transition-all ${
              selectedStage === 'recipientServer'
                ? 'bg-violet-50 border-violet-500 ring-2 ring-violet-200'
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="w-7 h-7 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center text-xs">
                <Inbox className="w-4 h-4" />
              </span>
              <span className="text-[10px] font-mono text-slate-400 font-bold">MX RECORD</span>
            </div>
            <h5 className="text-xs font-bold text-slate-900">Outlook MX Server</h5>
            <div className="text-[10px] text-slate-500 mt-1">mail.protection.outlook</div>
          </button>

          {/* Node 4 */}
          <button
            onClick={() => setSelectedStage('recipient')}
            className={`p-4 rounded-xl border text-left transition-all ${
              selectedStage === 'recipient'
                ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-200'
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">
                <User className="w-4 h-4" />
              </span>
              <span className="text-[10px] font-mono text-slate-400 font-bold">IMAP / POP3</span>
            </div>
            <h5 className="text-xs font-bold text-slate-900">Bob (Recipient)</h5>
            <div className="text-[10px] text-slate-500 mt-1">bob@outlook.com</div>
          </button>
        </div>

        {/* Live Animation Status Banner */}
        {currentHop > 0 && (
          <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2">
              <span className="font-mono font-bold text-indigo-700 bg-white px-2 py-0.5 rounded border border-indigo-200">
                Phase {currentHop} / 4
              </span>
              <span className="text-indigo-950 font-medium">
                {currentHop === 1 && 'Alice submits message to smtp.gmail.com over TLS port 587.'}
                {currentHop === 2 && 'Gmail SMTP queries DNS for outlook.com MX record and opens TCP socket to port 25.'}
                {currentHop === 3 && 'Outlook MX receives message, passes SPF/DKIM validation, and stores in Bob\'s mailbox spool.'}
                {currentHop === 4 && 'Bob opens email client and pulls the new message using IMAP/POP3!'}
              </span>
            </div>
            {currentHop === 4 && (
              <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                Delivered
              </span>
            )}
          </div>
        )}

        {/* Clickable Stage Inspection Card */}
        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2.5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
            <h4 className="text-sm font-bold text-slate-900">
              {currentInfo.title} — {currentInfo.name}
            </h4>
            <span className="text-[10px] font-mono uppercase bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-bold">
              {currentInfo.role}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {currentInfo.desc}
          </p>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600">
            <strong className="text-indigo-700">Protocol Wire Command:</strong> {currentInfo.techNote}
          </div>
        </div>
      </div>
    </div>
  );
}
