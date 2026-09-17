import React, { useState } from 'react';
import { 
  Paperclip, 
  FileText, 
  Image, 
  FileCode, 
  FileArchive, 
  RotateCcw, 
  Layers, 
  Check, 
  Info 
} from 'lucide-react';

export default function MimeVisualizer() {
  const fileOptions = [
    {
      id: 'text',
      name: 'notes.txt',
      size: '1.2 KB',
      mime: 'text/plain; charset=UTF-8',
      typeGroup: 'text/*',
      encoding: '7bit or 8bit',
      desc: 'Plain human-readable text without formatting tags.',
      icon: FileText
    },
    {
      id: 'html',
      name: 'newsletter.html',
      size: '8.4 KB',
      mime: 'text/html; charset=UTF-8',
      typeGroup: 'text/*',
      encoding: 'quoted-printable',
      desc: 'Richly formatted hypertext email containing styles, tables, and anchor links.',
      icon: FileCode
    },
    {
      id: 'jpeg',
      name: 'diagram.jpg',
      size: '142 KB',
      mime: 'image/jpeg',
      typeGroup: 'image/*',
      encoding: 'base64',
      desc: 'Binary photographic image compressed into lossy JPEG format. Converted to Base64 ASCII.',
      icon: Image
    },
    {
      id: 'png',
      name: 'logo.png',
      size: '34 KB',
      mime: 'image/png',
      typeGroup: 'image/*',
      encoding: 'base64',
      desc: 'Lossless raster graphic with alpha transparency.',
      icon: Image
    },
    {
      id: 'pdf',
      name: 'syllabus.pdf',
      size: '280 KB',
      mime: 'application/pdf',
      typeGroup: 'application/*',
      encoding: 'base64',
      desc: 'Adobe Portable Document Format binary payload.',
      icon: FileText
    },
    {
      id: 'json',
      name: 'curriculum.json',
      size: '4.8 KB',
      mime: 'application/json',
      typeGroup: 'application/*',
      encoding: '8bit',
      desc: 'Structured JSON data interchange format used in web APIs and modern messaging.',
      icon: FileCode
    },
    {
      id: 'zip',
      name: 'project_files.zip',
      size: '1.4 MB',
      mime: 'application/zip',
      typeGroup: 'application/*',
      encoding: 'base64',
      desc: 'Compressed archive containing multiple source files.',
      icon: FileArchive
    }
  ];

  const [selectedFile, setSelectedFile] = useState(fileOptions[2]); // JPEG default

  const SelectedIcon = selectedFile.icon;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card overflow-hidden">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
            <Paperclip className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">MIME Type &amp; Attachment Inspector</h3>
            <p className="text-xs text-slate-500">Multipurpose Internet Mail Extensions: Packaging binary media into ASCII emails</p>
          </div>
        </div>

        <button
          onClick={() => setSelectedFile(fileOptions[2])}
          className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-500"
          title="Reset"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Interactive File Selector Bar */}
      <div className="px-6 py-3 border-b border-slate-100 bg-slate-50/30 overflow-x-auto">
        <div className="flex items-center space-x-2 min-w-[650px] sm:min-w-0">
          <span className="text-xs font-semibold text-slate-500 whitespace-nowrap mr-1">Select Attachment:</span>
          {fileOptions.map(file => {
            const isSelected = selectedFile.id === file.id;
            const Icon = file.icon;
            return (
              <button
                key={file.id}
                onClick={() => setSelectedFile(file)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-2xs font-semibold'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{file.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* MIME Envelope Tree Visualization */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 bg-gradient-to-b from-white to-slate-50/40">
        {/* Left: Tree Structure */}
        <div className="md:col-span-5 space-y-3">
          <div className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-indigo-600" /> Multipart MIME Envelope Tree
          </div>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 font-mono text-xs space-y-2">
            <div className="text-indigo-900 font-bold">
              multipart/mixed; boundary="--xyzBoundary"
            </div>
            
            <div className="ml-4 pl-3 border-l-2 border-indigo-200 space-y-3">
              {/* Part 1: Text */}
              <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                <div className="text-[11px] text-slate-400">Content-Type: text/plain</div>
                <div className="text-slate-800 mt-1 font-sans text-xs">
                  "Hi Bob, please find attached the requested files."
                </div>
              </div>

              {/* Part 2: Dynamic Attachment */}
              <div className="bg-indigo-50/80 p-3 rounded-lg border-2 border-indigo-300 ring-2 ring-indigo-100 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-indigo-800 font-bold flex items-center gap-1">
                    <SelectedIcon className="w-3.5 h-3.5" /> {selectedFile.name}
                  </span>
                  <span className="text-[10px] bg-indigo-100 text-indigo-800 px-1.5 py-0.5 rounded font-bold">
                    ACTIVE
                  </span>
                </div>
                <div className="text-[10px] text-indigo-900">Content-Type: <strong>{selectedFile.mime}</strong></div>
                <div className="text-[10px] text-indigo-700">Content-Transfer-Encoding: {selectedFile.encoding}</div>
                <div className="text-[10px] text-slate-500 font-sans mt-1">{selectedFile.desc}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Raw MIME Wire Headers */}
        <div className="md:col-span-7 space-y-3">
          <div className="text-xs font-semibold text-slate-700 flex items-center justify-between">
            <span>Raw MIME Email Header &amp; Boundary Wire Stream</span>
            <span className="text-[10px] font-mono text-slate-400">RFC 2045 / 2046</span>
          </div>

          <div className="bg-slate-900 text-slate-200 p-4 rounded-xl font-mono text-xs overflow-x-auto space-y-1.5 shadow-inner border border-slate-800 max-h-72">
            <div className="text-slate-400">MIME-Version: 1.0</div>
            <div className="text-slate-400">Content-Type: multipart/mixed; boundary="frontier_bndry"</div>
            <div className="text-slate-500 py-1">--frontier_bndry</div>
            <div className="text-slate-400">Content-Type: text/plain; charset=UTF-8</div>
            <div className="text-slate-300">Here is the attachment you asked for.</div>
            <div className="text-slate-500 py-1">--frontier_bndry</div>
            <div className="text-emerald-400 font-bold">Content-Type: {selectedFile.mime}</div>
            <div className="text-indigo-300">Content-Disposition: attachment; filename="{selectedFile.name}"</div>
            <div className="text-amber-300">Content-Transfer-Encoding: {selectedFile.encoding}</div>
            <div className="text-slate-500 pt-2 border-t border-slate-800 text-[11px] leading-tight text-slate-400">
              {selectedFile.encoding === 'base64' ? (
                <>
                  iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==...<br/>
                  <span className="text-slate-500 italic">[Base64 ASCII binary payload stream continues]</span>
                </>
              ) : (
                <>Hello World content string...</>
              )}
            </div>
            <div className="text-slate-500 pt-1">--frontier_bndry--</div>
          </div>
        </div>
      </div>
    </div>
  );
}
