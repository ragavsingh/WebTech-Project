import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

/**
 * Lightweight, high-fidelity syntax highlighter for documentation code snippets.
 * Tokens: Keywords, Strings, Numbers, Comments, Tags, and Types.
 */
function tokenizeLine(line, lang = '') {
  if (!line) return [<span key="empty"> </span>];

  // Quick comment check
  const trimmed = line.trim();
  if (trimmed.startsWith('//') || trimmed.startsWith('#') || trimmed.startsWith('/*') || trimmed.startsWith('*')) {
    return [<span key="c" className="text-zinc-500 italic">{line}</span>];
  }
  if (trimmed.startsWith('<!--') && trimmed.endsWith('-->')) {
    return [<span key="c" className="text-zinc-500 italic">{line}</span>];
  }

  // General token regex
  const regex = /(".*?"|'.*?'|`.*?`|<!--.*?-->|\/\/.*$|\b(?:const|let|var|function|return|if|else|for|while|class|import|export|from|async|await|new|try|catch|switch|case|break|public|private|protected|static|void|interface|implements|extends|package|def)\b|\b(?:true|false|null|undefined)\b|\b\d+(?:\.\d+)?\b|<\/?[a-zA-Z0-9\-:]+(?:\s+[^>]*)?\/?>)/g;

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(line)) !== null) {
    // Plain text before token
    if (match.index > lastIndex) {
      parts.push(
        <span key={`txt-${lastIndex}`} className="text-zinc-300">
          {line.substring(lastIndex, match.index)}
        </span>
      );
    }

    const token = match[0];
    const key = `tok-${match.index}`;

    if (token.startsWith('"') || token.startsWith("'") || token.startsWith('`')) {
      // String literal
      parts.push(<span key={key} className="text-emerald-400 font-normal">{token}</span>);
    } else if (token.startsWith('//') || token.startsWith('<!--')) {
      // Comment
      parts.push(<span key={key} className="text-zinc-500 italic">{token}</span>);
    } else if (token.startsWith('<') && token.endsWith('>')) {
      // XML / HTML Tag
      parts.push(<span key={key} className="text-blue-400 font-semibold">{token}</span>);
    } else if (/^\d+(?:\.\d+)?$/.test(token)) {
      // Number
      parts.push(<span key={key} className="text-amber-400">{token}</span>);
    } else if (/^(true|false|null|undefined)$/.test(token)) {
      // Boolean / null
      parts.push(<span key={key} className="text-rose-400 font-semibold">{token}</span>);
    } else {
      // Language keyword
      parts.push(<span key={key} className="text-purple-400 font-semibold">{token}</span>);
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < line.length) {
    parts.push(
      <span key={`txt-${lastIndex}`} className="text-zinc-300">
        {line.substring(lastIndex)}
      </span>
    );
  }

  return parts;
}

export default function CodeBlock({ code, language = 'javascript' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = (code || '').trim().split('\n');

  return (
    <div className="my-6 rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-md transition-all">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800/80 bg-zinc-900/80 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          <span className="ml-2 uppercase text-[11px] font-semibold text-zinc-300 tracking-wider">
            {language}
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-mono bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
          aria-label="Copy code snippet"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-zinc-400" />
              <span>Copy snippet</span>
            </>
          )}
        </button>
      </div>

      {/* Code Body with Line Numbers */}
      <div className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-[13px] font-mono leading-relaxed bg-zinc-950 select-text">
        <pre className="m-0 font-mono">
          {lines.map((line, i) => (
            <div key={i} className="table-row">
              <span className="table-cell pr-4 text-right select-none text-zinc-600 font-mono text-[11px] w-8">
                {i + 1}
              </span>
              <span className="table-cell whitespace-pre">
                {tokenizeLine(line, language)}
              </span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}
