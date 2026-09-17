import React, { useState } from 'react';
import { 
  Inbox, 
  Download, 
  Trash2, 
  RotateCcw, 
  HardDrive, 
  Server, 
  Laptop, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';

export default function Pop3Simulator() {
  const initialServerEmails = [
    { id: 1, from: 'newsletter@tech.com', subject: 'Weekly Web Standards Issue #42', size: '24 KB' },
    { id: 2, from: 'hr@company.com', subject: 'Quarterly Townhall Meeting Notes', size: '15 KB' },
    { id: 3, from: 'support@github.com', subject: 'Your security alert for repository', size: '8 KB' }
  ];

  const [serverEmails, setServerEmails] = useState(initialServerEmails);
  const [localEmails, setLocalEmails] = useState([]);
  const [deleteFromServer, setDeleteFromServer] = useState(true);
  const [isRetrieving, setIsRetrieving] = useState(false);
  const [log, setLog] = useState('POP3 Session idle. Ready to connect on port 110 (or 995 SSL).');

  const handleRetrieve = () => {
    if (serverEmails.length === 0) {
      setLog('POP3: Server mailbox is empty. STAT returns +OK 0 0.');
      return;
    }

    setIsRetrieving(true);
    setLog('POP3: USER bob -> +OK -> PASS *** -> +OK logged in.');

    setTimeout(() => {
      setLog('POP3: RETR 1, 2, 3... Downloading all message octets to local client storage.');
      setTimeout(() => {
        setLocalEmails(prev => [...prev, ...serverEmails]);
        if (deleteFromServer) {
          setServerEmails([]);
          setLog('POP3: DELE 1, 2, 3 -> QUIT. Messages purged from server mailbox!');
        } else {
          setLog('POP3: QUIT executed with "Leave on server" enabled. Messages kept on server.');
        }
        setIsRetrieving(false);
      }, 1000);
    }, 800);
  };

  const handleReset = () => {
    setServerEmails(initialServerEmails);
    setLocalEmails([]);
    setLog('Mailbox reset to initial state.');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card overflow-hidden">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
            <Inbox className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">POP3 Mailbox Retrieval Simulation</h3>
            <p className="text-xs text-slate-500">Post Office Protocol version 3: The "Download &amp; Delete" mailbox model</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <label className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs text-slate-700 cursor-pointer shadow-2xs">
            <input
              type="checkbox"
              checked={deleteFromServer}
              onChange={(e) => setDeleteFromServer(e.target.checked)}
              className="rounded text-indigo-600 focus:ring-indigo-500 w-3.5 h-3.5"
            />
            <span>Delete from server after download (Standard POP3)</span>
          </label>

          <button
            onClick={handleRetrieve}
            disabled={isRetrieving || serverEmails.length === 0}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isRetrieving ? 'Downloading...' : 'Fetch via POP3'}</span>
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

      {/* Two Mailbox Tanks: Server vs Local Client */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-b from-slate-50/50 to-white">
        {/* Remote Server Mailbox */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <Server className="w-4 h-4 text-violet-600" /> Remote Mail Server Spool
            </span>
            <span className="font-mono text-slate-400">
              {serverEmails.length} messages on server
            </span>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs min-h-[180px] space-y-2">
            {serverEmails.length === 0 ? (
              <div className="text-center py-10 text-xs text-slate-400 italic">
                Server mailbox empty. All emails were downloaded and purged by POP3 DELE command.
              </div>
            ) : (
              serverEmails.map(mail => (
                <div key={mail.id} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-800">{mail.subject}</div>
                    <div className="text-[10px] text-slate-400">{mail.from}</div>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400">{mail.size}</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Local PC Storage */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <Laptop className="w-4 h-4 text-indigo-600" /> Local Client Device (Laptop)
            </span>
            <span className="font-mono text-emerald-700 font-semibold">
              {localEmails.length} downloaded locally
            </span>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs min-h-[180px] space-y-2">
            {localEmails.length === 0 ? (
              <div className="text-center py-10 text-xs text-slate-400 italic">
                No emails stored on this laptop yet. Click "Fetch via POP3" to download.
              </div>
            ) : (
              localEmails.map((mail, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-indigo-50/60 border border-indigo-100 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-indigo-950">{mail.subject}</div>
                    <div className="text-[10px] text-indigo-600">{mail.from}</div>
                  </div>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white text-indigo-700 border border-indigo-200">
                    Local Disk (.pst/.eml)
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Terminal Log */}
      <div className="px-6 pb-6">
        <div className="p-3 bg-slate-900 rounded-xl text-slate-200 font-mono text-xs border border-slate-800 flex items-center justify-between">
          <span className="text-emerald-400">&gt; {log}</span>
          <span className="text-[10px] text-slate-500 font-sans">Port 110 / 995</span>
        </div>
      </div>
    </div>
  );
}
