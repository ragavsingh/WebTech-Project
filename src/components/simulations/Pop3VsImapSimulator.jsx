import React, { useState } from 'react';
import { 
  Smartphone, 
  Laptop, 
  Server, 
  RotateCcw, 
  Check, 
  AlertTriangle, 
  CheckCircle2, 
  Info,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function Pop3VsImapSimulator() {
  const [protocol, setProtocol] = useState('imap'); // 'pop3' | 'imap'
  
  // State for POP3 simulation
  const [popState, setPopState] = useState({
    serverHasMail: true,
    phoneHasMail: false,
    phoneRead: false,
    laptopHasMail: false,
    laptopRead: false,
    divergenceNotice: null
  });

  // State for IMAP simulation
  const [imapState, setImapState] = useState({
    serverHasMail: true,
    serverRead: false,
    phoneSynced: true,
    laptopSynced: true
  });

  // Actions for POP3
  const handlePopAction = (action) => {
    if (action === 'phone_fetch') {
      setPopState(prev => ({
        ...prev,
        phoneHasMail: true,
        serverHasMail: false, // Standard POP3 purges from server!
        divergenceNotice: 'POP3 downloaded to Phone and DELETED from server! When Laptop connects, the server mailbox will be empty!'
      }));
    } else if (action === 'phone_read') {
      setPopState(prev => ({
        ...prev,
        phoneRead: true,
        divergenceNotice: 'Marked read on Phone ONLY. Even if Laptop has a local copy, it has no clue you read it on Phone!'
      }));
    } else if (action === 'laptop_fetch') {
      if (!popState.serverHasMail) {
        setPopState(prev => ({
          ...prev,
          divergenceNotice: 'FAILED: Laptop connected to server, but the email was already deleted when Phone fetched it!'
        }));
      } else {
        setPopState(prev => ({
          ...prev,
          laptopHasMail: true,
          serverHasMail: false,
          divergenceNotice: 'Downloaded to Laptop and purged from server.'
        }));
      }
    }
  };

  // Actions for IMAP
  const handleImapAction = (action) => {
    if (action === 'read_on_phone') {
      setImapState(prev => ({ ...prev, serverRead: true }));
    } else if (action === 'delete_on_phone') {
      setImapState(prev => ({ ...prev, serverHasMail: false, serverRead: false }));
    }
  };

  const handleReset = () => {
    setPopState({
      serverHasMail: true,
      phoneHasMail: false,
      phoneRead: false,
      laptopHasMail: false,
      laptopRead: false,
      divergenceNotice: null
    });
    setImapState({
      serverHasMail: true,
      serverRead: false,
      phoneSynced: true,
      laptopSynced: true
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card overflow-hidden">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Interactive POP3 vs. IMAP Behavioral Comparison</h3>
            <p className="text-xs text-slate-500">Perform real multi-device actions and witness state synchronization vs. data divergence</p>
          </div>
        </div>

        {/* Protocol Switcher */}
        <div className="flex items-center space-x-2">
          <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => { setProtocol('imap'); handleReset(); }}
              className={`px-3 py-1 rounded-md transition-all ${
                protocol === 'imap'
                  ? 'bg-white text-indigo-700 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              IMAP (Modern Sync)
            </button>
            <button
              onClick={() => { setProtocol('pop3'); handleReset(); }}
              className={`px-3 py-1 rounded-md transition-all ${
                protocol === 'pop3'
                  ? 'bg-white text-indigo-700 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              POP3 (Legacy Download)
            </button>
          </div>

          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-500"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Simulator Body */}
      <div className="p-6 space-y-6 bg-gradient-to-b from-white to-slate-50/30">
        {protocol === 'pop3' ? (
          /* POP3 Scenario */
          <div className="space-y-5">
            <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>POP3 Simulation Mechanics:</strong> In standard POP3, messages are downloaded to a single local device and immediately erased from the server. There is no central read/unread state.
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-2 text-xs">
              <button
                onClick={() => handlePopAction('phone_fetch')}
                disabled={!popState.serverHasMail}
                className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-medium"
              >
                1. Fetch Email on iPhone
              </button>
              <button
                onClick={() => handlePopAction('phone_read')}
                disabled={!popState.phoneHasMail}
                className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 text-slate-700 font-medium"
              >
                2. Mark Read on iPhone
              </button>
              <button
                onClick={() => handlePopAction('laptop_fetch')}
                className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium"
              >
                3. Open Laptop Mailbox
              </button>
            </div>

            {/* Visual State Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              {/* Server */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center space-x-2 font-bold text-slate-800">
                  <Server className="w-4 h-4 text-violet-600" />
                  <span>Central Mail Server</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-100">
                  {popState.serverHasMail ? (
                    <span className="text-emerald-700 font-semibold">&bull; 1 Unread Email in Spool</span>
                  ) : (
                    <span className="text-slate-400 italic">Empty (Purged by POP3 DELE)</span>
                  )}
                </div>
              </div>

              {/* iPhone */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center space-x-2 font-bold text-slate-800">
                  <Smartphone className="w-4 h-4 text-indigo-600" />
                  <span>iPhone Client</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-100">
                  {popState.phoneHasMail ? (
                    <div>
                      <div className="font-semibold text-slate-800">Important Client Contract</div>
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                        popState.phoneRead ? 'bg-slate-100 text-slate-600' : 'bg-indigo-100 text-indigo-700'
                      }`}>
                        {popState.phoneRead ? 'Status: READ (Local)' : 'Status: UNREAD (Local)'}
                      </span>
                    </div>
                  ) : (
                    <span className="text-slate-400 italic">Not downloaded yet</span>
                  )}
                </div>
              </div>

              {/* Laptop */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center space-x-2 font-bold text-slate-800">
                  <Laptop className="w-4 h-4 text-blue-600" />
                  <span>MacBook Client</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-100">
                  {popState.laptopHasMail ? (
                    <div className="font-semibold text-slate-800">Important Client Contract</div>
                  ) : (
                    <span className="text-red-500 font-medium">
                      {!popState.serverHasMail ? 'Email Missing! (Was purged by phone)' : 'Not downloaded yet'}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {popState.divergenceNotice && (
              <div className="p-3 rounded-xl bg-amber-100/70 border border-amber-200 text-xs font-mono text-amber-900">
                &gt; {popState.divergenceNotice}
              </div>
            )}
          </div>
        ) : (
          /* IMAP Scenario */
          <div className="space-y-5">
            <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>IMAP Simulation Mechanics:</strong> Messages remain centrally stored on the server. Devices act as live remote windows. Flags (read/unread/flagged) and folders are updated in real-time across all devices.
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-2 text-xs">
              <button
                onClick={() => handleImapAction('read_on_phone')}
                disabled={!imapState.serverHasMail || imapState.serverRead}
                className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-medium"
              >
                Mark Read on iPhone
              </button>
              <button
                onClick={() => handleImapAction('delete_on_phone')}
                disabled={!imapState.serverHasMail}
                className="px-3 py-1.5 rounded-lg bg-white border border-red-200 hover:bg-red-50 text-red-700 font-medium"
              >
                Delete on iPhone
              </button>
            </div>

            {/* Synchronized Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              {/* Server */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center space-x-2 font-bold text-slate-800">
                  <Server className="w-4 h-4 text-violet-600" />
                  <span>Central IMAP Server</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-100">
                  {imapState.serverHasMail ? (
                    <div>
                      <div className="font-semibold text-slate-800">Important Client Contract</div>
                      <span className="text-[10px] font-mono text-emerald-700">
                        {imapState.serverRead ? 'Flag: \\Seen (Read)' : 'Flag: \\Recent (Unread)'}
                      </span>
                    </div>
                  ) : (
                    <span className="text-slate-400 italic">Deleted from server</span>
                  )}
                </div>
              </div>

              {/* iPhone */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center space-x-2 font-bold text-slate-800">
                  <Smartphone className="w-4 h-4 text-indigo-600" />
                  <span>iPhone Client</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-100">
                  {imapState.serverHasMail ? (
                    <div>
                      <div className="font-semibold text-slate-800">Important Client Contract</div>
                      <span className="text-[10px] font-mono text-indigo-600 font-bold">
                        {imapState.serverRead ? 'READ' : 'UNREAD'}
                      </span>
                    </div>
                  ) : (
                    <span className="text-slate-400 italic">No email</span>
                  )}
                </div>
              </div>

              {/* Laptop */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center space-x-2 font-bold text-slate-800">
                  <Laptop className="w-4 h-4 text-blue-600" />
                  <span>MacBook Client</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-100">
                  {imapState.serverHasMail ? (
                    <div>
                      <div className="font-semibold text-slate-800">Important Client Contract</div>
                      <span className="text-[10px] font-mono text-emerald-600 font-bold">
                        {imapState.serverRead ? 'READ (Instantly Synced!)' : 'UNREAD'}
                      </span>
                    </div>
                  ) : (
                    <span className="text-slate-400 italic">Disappeared (Synced deletion)</span>
                  )}
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-100/70 border border-emerald-200 text-xs font-mono text-emerald-900">
              &gt; {imapState.serverRead ? 'Notice how marking read on iPhone immediately updated the MacBook via IMAP IDLE notifications!' : 'All clients synchronized with central IMAP server state.'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
