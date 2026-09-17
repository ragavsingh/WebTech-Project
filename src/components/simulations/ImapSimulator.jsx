import React, { useState } from 'react';
import { 
  Smartphone, 
  Laptop, 
  Tablet, 
  Server, 
  Mail, 
  MailOpen, 
  RotateCcw, 
  CheckCircle2, 
  RefreshCw,
  FolderTree,
  Sparkles
} from 'lucide-react';

export default function ImapSimulator() {
  const [emails, setEmails] = useState([
    { id: 101, from: 'sarah@team.com', subject: 'Project Roadmap Q4', read: false, folder: 'INBOX' },
    { id: 102, from: 'billing@cloud.io', subject: 'Invoice #8820 Paid', read: false, folder: 'INBOX' }
  ]);
  const [syncingDevice, setSyncingDevice] = useState(null);
  const [lastAction, setLastAction] = useState('All 3 devices synchronized with central IMAP server.');

  const toggleReadStatus = (emailId, deviceName) => {
    setSyncingDevice(deviceName);
    setLastAction(`Action on ${deviceName}: Marked email #${emailId} as read. Emitting IMAP STORE +FLAGS (\\Seen)...`);

    setTimeout(() => {
      setEmails(prev => prev.map(m => m.id === emailId ? { ...m, read: !m.read } : m));
      setLastAction(`Central IMAP Server synchronized flag changes to Phone, Laptop, and Tablet.`);
      setTimeout(() => {
        setSyncingDevice(null);
      }, 500);
    }, 600);
  };

  const resetMailbox = () => {
    setEmails([
      { id: 101, from: 'sarah@team.com', subject: 'Project Roadmap Q4', read: false, folder: 'INBOX' },
      { id: 102, from: 'billing@cloud.io', subject: 'Invoice #8820 Paid', read: false, folder: 'INBOX' }
    ]);
    setSyncingDevice(null);
    setLastAction('Mailbox reset to unread state across all devices.');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card overflow-hidden">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
            <RefreshCw className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">IMAP Multi-Device Live Synchronization Lab</h3>
            <p className="text-xs text-slate-500">Internet Message Access Protocol: Server-side mailbox &amp; continuous two-way sync</p>
          </div>
        </div>

        <button
          onClick={resetMailbox}
          className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-500"
          title="Reset"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="p-6 space-y-6 bg-gradient-to-b from-slate-50/40 to-white">
        {/* Central IMAP Server Hub */}
        <div className="max-w-md mx-auto p-4 rounded-xl bg-indigo-50/80 border border-indigo-200 shadow-sm text-center space-y-2">
          <div className="flex items-center justify-center space-x-2 text-indigo-900 font-bold text-xs">
            <Server className="w-4 h-4 text-indigo-600" />
            <span>Central IMAP Server (Single Source of Truth)</span>
          </div>
          <div className="text-[11px] text-slate-600 font-mono">
            imap.company.com &bull; Port 993 (SSL) &bull; Folders: INBOX, Sent, Archive
          </div>
          <div className="flex justify-center gap-2 pt-1">
            {emails.map(m => (
              <span key={m.id} className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                m.read ? 'bg-slate-100 text-slate-500 border-slate-200' : 'bg-indigo-600 text-white border-indigo-700 font-bold'
              }`}>
                {m.subject.slice(0, 18)}... [{m.read ? 'READ' : 'UNREAD'}]
              </span>
            ))}
          </div>
        </div>

        {/* 3 Synced Devices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Device 1: iPhone */}
          <div className={`bg-white rounded-xl p-4 border transition-all ${
            syncingDevice === 'iPhone' 
              ? 'border-indigo-500 ring-2 ring-indigo-200 shadow-md' 
              : 'border-slate-200 shadow-2xs'
          }`}>
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3">
              <span className="flex items-center gap-1.5 font-bold text-xs text-slate-800">
                <Smartphone className="w-4 h-4 text-indigo-600" /> iPhone (Mobile)
              </span>
              <span className="text-[10px] font-mono text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Synced
              </span>
            </div>

            <div className="space-y-2">
              {emails.map(email => (
                <div key={email.id} className={`p-2 rounded-lg border text-xs flex items-center justify-between ${
                  email.read ? 'bg-slate-50 border-slate-100 text-slate-500' : 'bg-indigo-50/50 border-indigo-100 font-semibold text-slate-900'
                }`}>
                  <div className="truncate pr-1">
                    <div className="truncate">{email.subject}</div>
                    <div className="text-[10px] text-slate-400">{email.from}</div>
                  </div>
                  <button
                    onClick={() => toggleReadStatus(email.id, 'iPhone')}
                    className="p-1 rounded hover:bg-white text-indigo-600 shrink-0"
                    title="Toggle Read"
                  >
                    {email.read ? <MailOpen className="w-4 h-4 text-slate-400" /> : <Mail className="w-4 h-4 text-indigo-600" />}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Device 2: Work Laptop */}
          <div className={`bg-white rounded-xl p-4 border transition-all ${
            syncingDevice === 'MacBook' 
              ? 'border-indigo-500 ring-2 ring-indigo-200 shadow-md' 
              : 'border-slate-200 shadow-2xs'
          }`}>
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3">
              <span className="flex items-center gap-1.5 font-bold text-xs text-slate-800">
                <Laptop className="w-4 h-4 text-blue-600" /> MacBook (Laptop)
              </span>
              <span className="text-[10px] font-mono text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Synced
              </span>
            </div>

            <div className="space-y-2">
              {emails.map(email => (
                <div key={email.id} className={`p-2 rounded-lg border text-xs flex items-center justify-between ${
                  email.read ? 'bg-slate-50 border-slate-100 text-slate-500' : 'bg-indigo-50/50 border-indigo-100 font-semibold text-slate-900'
                }`}>
                  <div className="truncate pr-1">
                    <div className="truncate">{email.subject}</div>
                    <div className="text-[10px] text-slate-400">{email.from}</div>
                  </div>
                  <button
                    onClick={() => toggleReadStatus(email.id, 'MacBook')}
                    className="p-1 rounded hover:bg-white text-indigo-600 shrink-0"
                    title="Toggle Read"
                  >
                    {email.read ? <MailOpen className="w-4 h-4 text-slate-400" /> : <Mail className="w-4 h-4 text-indigo-600" />}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Device 3: Tablet */}
          <div className={`bg-white rounded-xl p-4 border transition-all ${
            syncingDevice === 'iPad' 
              ? 'border-indigo-500 ring-2 ring-indigo-200 shadow-md' 
              : 'border-slate-200 shadow-2xs'
          }`}>
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-3">
              <span className="flex items-center gap-1.5 font-bold text-xs text-slate-800">
                <Tablet className="w-4 h-4 text-violet-600" /> iPad (Tablet)
              </span>
              <span className="text-[10px] font-mono text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Synced
              </span>
            </div>

            <div className="space-y-2">
              {emails.map(email => (
                <div key={email.id} className={`p-2 rounded-lg border text-xs flex items-center justify-between ${
                  email.read ? 'bg-slate-50 border-slate-100 text-slate-500' : 'bg-indigo-50/50 border-indigo-100 font-semibold text-slate-900'
                }`}>
                  <div className="truncate pr-1">
                    <div className="truncate">{email.subject}</div>
                    <div className="text-[10px] text-slate-400">{email.from}</div>
                  </div>
                  <button
                    onClick={() => toggleReadStatus(email.id, 'iPad')}
                    className="p-1 rounded hover:bg-white text-indigo-600 shrink-0"
                    title="Toggle Read"
                  >
                    {email.read ? <MailOpen className="w-4 h-4 text-slate-400" /> : <Mail className="w-4 h-4 text-indigo-600" />}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sync Status Banner */}
        <div className="p-3 bg-slate-900 rounded-xl text-slate-200 font-mono text-xs border border-slate-800 flex items-center justify-between">
          <span className="text-emerald-400">&gt; {lastAction}</span>
          <span className="text-[10px] text-slate-500 font-sans">IMAP IDLE Sync</span>
        </div>
      </div>
    </div>
  );
}
