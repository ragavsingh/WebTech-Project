import React, { useState } from 'react';
import { 
  FileCode, 
  GitBranch, 
  ChevronRight, 
  ChevronDown, 
  CheckCircle, 
  AlertCircle, 
  Copy, 
  RotateCcw, 
  Search,
  Sparkles,
  Info
} from 'lucide-react';

const PRESET_XML = {
  university: `<?xml version="1.0" encoding="UTF-8"?>
<university name="Global Tech Institute">
  <department code="CS" budget="450000">
    <head>Dr. Alan Turing</head>
    <course id="CS201" level="undergraduate">
      <title>Web Technology &amp; Architecture</title>
      <credits>4</credits>
      <faculty>Prof. Ada Lovelace</faculty>
      <prerequisites>
        <courseRef>CS101</courseRef>
      </prerequisites>
    </course>
    <course id="CS305" level="graduate">
      <title>Distributed Systems &amp; XML</title>
      <credits>3</credits>
      <faculty>Dr. Grace Hopper</faculty>
    </course>
  </department>
  <department code="EE" budget="380000">
    <head>Dr. Nikola Tesla</head>
    <course id="EE102" level="undergraduate">
      <title>Digital Logic Design</title>
      <credits>3</credits>
      <faculty>Prof. Claude Shannon</faculty>
    </course>
  </department>
</university>`,

  catalog: `<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <book category="computing">
    <title lang="en">Clean Code</title>
    <author>Robert C. Martin</author>
    <year>2008</year>
    <price currency="USD">38.99</price>
  </book>
  <book category="computing">
    <title lang="en">Design Patterns</title>
    <author>Erich Gamma</author>
    <year>1994</year>
    <price currency="USD">49.99</price>
  </book>
</catalog>`,

  invoice: `<?xml version="1.0" encoding="UTF-8"?>
<invoice number="INV-2026-88">
  <client id="C-104">
    <name>Acme Corporation</name>
    <email>finance@acme.corp</email>
  </client>
  <items>
    <item sku="SKU-CLOUD" qty="2">
      <desc>Cloud Server Pro Tier</desc>
      <rate>120.00</rate>
    </item>
    <item sku="SKU-SUPP" qty="1">
      <desc>24/7 SLA Engineering Support</desc>
      <rate>250.00</rate>
    </item>
  </items>
  <total currency="USD">490.00</total>
</invoice>`
};

// Simple browser XML DOM parser helper
function parseXmlToTree(xmlString) {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xmlString, 'text/xml');
    const parseError = doc.querySelector('parsererror');
    if (parseError) {
      return { error: parseError.textContent || 'XML Parsing Syntax Error' };
    }
    
    function convertNode(domNode, idPrefix = '0') {
      if (domNode.nodeType === Node.TEXT_NODE) {
        const txt = domNode.nodeValue.trim();
        return txt ? { type: 'text', value: txt, id: idPrefix } : null;
      }
      
      if (domNode.nodeType === Node.ELEMENT_NODE) {
        const attributes = {};
        for (let i = 0; i < domNode.attributes.length; i++) {
          const attr = domNode.attributes[i];
          attributes[attr.name] = attr.value;
        }
        
        const childNodes = [];
        let childIndex = 0;
        for (let i = 0; i < domNode.childNodes.length; i++) {
          const converted = convertNode(domNode.childNodes[i], `${idPrefix}-${childIndex}`);
          if (converted) {
            childNodes.push(converted);
            childIndex++;
          }
        }
        
        return {
          type: 'element',
          name: domNode.nodeName,
          attributes,
          children: childNodes,
          id: idPrefix
        };
      }
      return null;
    }
    
    return { tree: convertNode(doc.documentElement, 'root') };
  } catch (err) {
    return { error: err.message };
  }
}

export default function XmlTreeEditor() {
  const [xmlText, setXmlText] = useState(PRESET_XML.university);
  const [selectedNode, setSelectedNode] = useState(null);
  const [collapsedNodes, setCollapsedNodes] = useState({});
  const [copied, setCopied] = useState(false);

  // Parse tree
  const parsed = parseXmlToTree(xmlText);
  const hasError = !!parsed.error;

  const toggleCollapse = (id) => {
    setCollapsedNodes(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(xmlText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Render tree node component recursively
  const renderTreeNode = (node, depth = 0, path = '') => {
    if (!node) return null;
    
    if (node.type === 'text') {
      return (
        <div 
          key={node.id} 
          style={{ paddingLeft: `${depth * 20}px` }}
          className="py-1 text-sm font-mono text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5"
        >
          <span className="text-slate-400 select-none">"</span>
          <span className="bg-emerald-50 text-emerald-800 px-1.5 py-0.5 rounded border border-emerald-200">
            {node.value}
          </span>
          <span className="text-slate-400 select-none">"</span>
        </div>
      );
    }

    const isCollapsed = !!collapsedNodes[node.id];
    const currentPath = path ? `${path}/${node.name}` : `/${node.name}`;
    const isSelected = selectedNode?.id === node.id;
    const hasChildren = node.children && node.children.length > 0;

    return (
      <div key={node.id} className="select-none">
        <div 
          style={{ paddingLeft: `${depth * 20}px` }}
          onClick={() => setSelectedNode({ ...node, path: currentPath })}
          className={`flex items-center gap-2 py-1.5 px-2 rounded-lg cursor-pointer transition-colors text-sm font-mono ${
            isSelected 
              ? 'bg-indigo-100 text-indigo-900 font-semibold border border-indigo-300' 
              : 'hover:bg-slate-100 text-slate-800'
          }`}
        >
          {hasChildren ? (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                toggleCollapse(node.id);
              }}
              className="p-0.5 text-slate-400 hover:text-slate-600 rounded"
            >
              {isCollapsed ? <ChevronRight size={15} /> : <ChevronDown size={15} />}
            </button>
          ) : (
            <span className="w-4" />
          )}

          <span className="text-indigo-600 font-bold">
            &lt;{node.name}&gt;
          </span>

          {/* Attributes badge preview */}
          {Object.keys(node.attributes).length > 0 && (
            <div className="flex items-center gap-1">
              {Object.entries(node.attributes).map(([k, v]) => (
                <span key={k} className="text-xs bg-amber-50 text-amber-800 border border-amber-200 px-1.5 py-0.5 rounded">
                  {k}=<span className="text-amber-900 font-semibold">"{v}"</span>
                </span>
              ))}
            </div>
          )}
        </div>

        {!isCollapsed && hasChildren && (
          <div className="border-l-2 border-slate-200 ml-4">
            {node.children.map(child => renderTreeNode(child, depth + 1, currentPath))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Header bar */}
      <div className="bg-slate-900 text-white px-5 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-xl border border-indigo-500/30">
            <GitBranch size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold">Interactive XML Hierarchy &amp; Tree Visualizer</h3>
            <p className="text-xs text-slate-400">
              Live syntax validator and bidirectional hierarchical tree explorer
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Presets:</span>
          <button 
            onClick={() => setXmlText(PRESET_XML.university)}
            className="px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition"
          >
            University
          </button>
          <button 
            onClick={() => setXmlText(PRESET_XML.catalog)}
            className="px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition"
          >
            Book Catalog
          </button>
          <button 
            onClick={() => setXmlText(PRESET_XML.invoice)}
            className="px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition"
          >
            Invoice
          </button>
        </div>
      </div>

      {/* Main split work area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        {/* Left Column: Code Editor */}
        <div className="lg:col-span-6 border-r border-slate-200 flex flex-col bg-slate-950 text-slate-100">
          <div className="bg-slate-900/90 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <FileCode size={14} className="text-indigo-400" />
              <span>document.xml</span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={handleCopy}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 px-2 py-1 rounded hover:bg-slate-800 transition"
                title="Copy XML"
              >
                {copied ? <CheckCircle size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
              <button 
                onClick={() => setXmlText(PRESET_XML.university)}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 px-2 py-1 rounded hover:bg-slate-800 transition"
                title="Reset XML"
              >
                <RotateCcw size={13} />
                <span>Reset</span>
              </button>
            </div>
          </div>

          <div className="relative flex-1 p-3">
            <textarea 
              value={xmlText}
              onChange={(e) => setXmlText(e.target.value)}
              spellCheck="false"
              className="w-full h-full min-h-[380px] bg-transparent font-mono text-xs text-emerald-300 focus:outline-none resize-none leading-relaxed selection:bg-indigo-500/40"
              placeholder="Paste or write well-formed XML here..."
            />
          </div>

          {/* Validation Status footer */}
          <div className={`px-4 py-2.5 border-t text-xs flex items-center justify-between ${
            hasError 
              ? 'bg-rose-950/60 border-rose-800/80 text-rose-300' 
              : 'bg-emerald-950/40 border-emerald-800/50 text-emerald-300'
          }`}>
            <div className="flex items-center gap-2 truncate pr-2">
              {hasError ? (
                <>
                  <AlertCircle size={15} className="text-rose-400 shrink-0" />
                  <span className="font-semibold truncate">Invalid XML: {parsed.error}</span>
                </>
              ) : (
                <>
                  <CheckCircle size={15} className="text-emerald-400 shrink-0" />
                  <span className="font-semibold">Well-Formed XML Document (Valid Grammar)</span>
                </>
              )}
            </div>
            <span className="text-[11px] font-mono text-slate-400 shrink-0">W3C XML 1.0</span>
          </div>
        </div>

        {/* Right Column: Visual Tree & Inspector */}
        <div className="lg:col-span-6 flex flex-col bg-slate-50/70">
          <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <GitBranch size={14} className="text-indigo-600" />
              <span>Hierarchical Element Tree</span>
            </div>
            <span className="text-xs text-slate-500">Click node to inspect XPath</span>
          </div>

          <div className="p-4 flex-1 overflow-y-auto max-h-[420px]">
            {hasError ? (
              <div className="h-full flex flex-col items-center justify-center p-6 text-center text-slate-500">
                <AlertCircle size={36} className="text-rose-500 mb-2" />
                <h4 className="font-semibold text-slate-800 text-sm">Cannot Generate Tree</h4>
                <p className="text-xs text-slate-600 mt-1 max-w-sm">
                  The XML contains syntax errors such as unclosed tags, mismatching case, or unquoted attribute values.
                </p>
              </div>
            ) : (
              <div>{renderTreeNode(parsed.tree)}</div>
            )}
          </div>

          {/* Node & XPath Inspector */}
          {selectedNode && (
            <div className="p-4 bg-white border-t border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <Sparkles size={14} className="text-amber-500" />
                  <span>Node Inspector: &lt;{selectedNode.name}&gt;</span>
                </div>
                <span className="text-[11px] font-mono bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded border border-indigo-200">
                  {selectedNode.type}
                </span>
              </div>

              {/* XPath */}
              <div className="mb-2">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-0.5">
                  XPath Expression
                </span>
                <div className="bg-slate-100 px-2.5 py-1 rounded font-mono text-xs text-indigo-900 border border-slate-200 select-all">
                  {selectedNode.path}
                </div>
              </div>

              {/* Attributes list */}
              <div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-0.5">
                  Attributes ({Object.keys(selectedNode.attributes).length})
                </span>
                {Object.keys(selectedNode.attributes).length === 0 ? (
                  <span className="text-xs text-slate-400 italic">No attributes declared</span>
                ) : (
                  <div className="grid grid-cols-2 gap-1.5">
                    {Object.entries(selectedNode.attributes).map(([k, v]) => (
                      <div key={k} className="text-xs font-mono bg-amber-50/70 border border-amber-200/80 rounded px-2 py-1 text-slate-700">
                        <span className="text-amber-700 font-semibold">{k}</span> = <span className="text-slate-900">"{v}"</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Educational Callout */}
      <div className="p-4 bg-indigo-50/60 border-t border-indigo-100 flex items-start gap-3 text-xs text-indigo-950">
        <Info size={18} className="text-indigo-600 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong className="font-semibold text-indigo-900">Key Takeaway: </strong>
          XML is a self-describing meta-markup language designed for data transport and storage. Unlike HTML which has fixed tags (like <code className="bg-indigo-100 px-1 py-0.5 rounded">&lt;h1&gt;</code> and <code className="bg-indigo-100 px-1 py-0.5 rounded">&lt;table&gt;</code>) for presentation, XML lets developers invent application-specific semantic vocabularies.
        </div>
      </div>
    </div>
  );
}
