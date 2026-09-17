import React, { useState } from 'react';
import { 
  GitBranch, 
  Layers, 
  Edit3, 
  Plus, 
  Trash2, 
  Palette, 
  RotateCcw, 
  Code, 
  Check, 
  Eye, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function DomExplorerSimulator() {
  // Tree state
  const initialTree = {
    id: 'node_doc',
    tag: '#document',
    type: 'DocumentNode',
    children: [
      {
        id: 'node_html',
        tag: 'html',
        attributes: { lang: 'en' },
        parent: '#document',
        children: [
          {
            id: 'node_head',
            tag: 'head',
            attributes: {},
            parent: 'html',
            children: [
              { id: 'node_title', tag: 'title', text: 'WebTech Lab', attributes: {}, parent: 'head', children: [] }
            ]
          },
          {
            id: 'node_body',
            tag: 'body',
            attributes: { class: 'bg-white' },
            parent: 'html',
            children: [
              { id: 'node_h1', tag: 'h1', text: 'Interactive DOM Tree', attributes: { id: 'header' }, parent: 'body', children: [] },
              { id: 'node_p', tag: 'p', text: 'Every HTML tag is an object in memory.', attributes: { class: 'lead' }, parent: 'body', children: [] },
              { id: 'node_btn', tag: 'button', text: 'Click Me', attributes: { class: 'btn-primary' }, parent: 'body', children: [] }
            ]
          }
        ]
      }
    ]
  };

  const [tree, setTree] = useState(initialTree);
  const [selectedNodeId, setSelectedNodeId] = useState('node_h1');
  const [lastJsCommand, setLastJsCommand] = useState('const el = document.getElementById("header");');

  // Helper to find a node by ID recursively
  const findNode = (node, id) => {
    if (node.id === id) return node;
    if (node.children) {
      for (const child of node.children) {
        const found = findNode(child, id);
        if (found) return found;
      }
    }
    return null;
  };

  // Helper to mutate node in tree recursively
  const updateNodeInTree = (node, id, updater) => {
    if (node.id === id) {
      return updater(node);
    }
    if (node.children) {
      return {
        ...node,
        children: node.children.map(c => updateNodeInTree(c, id, updater))
      };
    }
    return node;
  };

  // Helper to delete node by ID
  const deleteNodeInTree = (node, id) => {
    if (node.children) {
      return {
        ...node,
        children: node.children.filter(c => c.id !== id).map(c => deleteNodeInTree(c, id))
      };
    }
    return node;
  };

  const activeNode = findNode(tree, selectedNodeId) || tree.children[0].children[1].children[0];

  // Action handlers
  const handleChangeText = () => {
    const newText = prompt('Enter new textContent for <' + activeNode.tag + '>:', activeNode.text || 'Updated Content');
    if (newText !== null) {
      setTree(prev => updateNodeInTree(prev, activeNode.id, n => ({ ...n, text: newText })));
      setLastJsCommand(`document.querySelector("${activeNode.tag}").textContent = "${newText}";`);
    }
  };

  const handleChangeAttribute = () => {
    const attrName = prompt('Enter attribute name to set (e.g. data-state, title, class):', 'data-status');
    if (!attrName) return;
    const attrVal = prompt(`Enter value for ${attrName}:`, 'active');
    if (attrVal !== null) {
      setTree(prev => updateNodeInTree(prev, activeNode.id, n => ({
        ...n,
        attributes: { ...n.attributes, [attrName]: attrVal }
      })));
      setLastJsCommand(`document.querySelector("${activeNode.tag}").setAttribute("${attrName}", "${attrVal}");`);
    }
  };

  const handleChangeStyle = () => {
    const color = prompt('Enter color or CSS property (e.g. color: #4f46e5):', 'color: #4f46e5');
    if (color !== null) {
      setTree(prev => updateNodeInTree(prev, activeNode.id, n => ({
        ...n,
        attributes: { ...n.attributes, style: color }
      })));
      setLastJsCommand(`document.querySelector("${activeNode.tag}").style.cssText = "${color}";`);
    }
  };

  const handleAddElement = () => {
    const targetParent = activeNode.tag === 'body' || activeNode.tag === 'html' ? activeNode.id : 'node_body';
    const tag = prompt('Enter new HTML tag to append (e.g. span, li, a, footer):', 'span');
    if (!tag) return;
    const text = prompt('Enter text for new element:', 'New Dynamic Node');

    const newNode = {
      id: 'node_' + Date.now(),
      tag: tag.toLowerCase(),
      text: text || '',
      attributes: { class: 'dynamic-item' },
      parent: targetParent === 'node_body' ? 'body' : activeNode.tag,
      children: []
    };

    setTree(prev => updateNodeInTree(prev, targetParent, n => ({
      ...n,
      children: [...n.children, newNode]
    })));
    setSelectedNodeId(newNode.id);
    setLastJsCommand(`const newEl = document.createElement("${tag.toLowerCase()}");\nnewEl.textContent = "${text}";\ndocument.body.appendChild(newEl);`);
  };

  const handleRemoveElement = () => {
    if (activeNode.id === 'node_doc' || activeNode.id === 'node_html' || activeNode.id === 'node_body') {
      alert('Cannot delete root document, html, or body nodes!');
      return;
    }
    const tag = activeNode.tag;
    setTree(prev => deleteNodeInTree(prev, activeNode.id));
    setSelectedNodeId('node_body');
    setLastJsCommand(`const el = document.querySelector("${tag}");\nel.parentNode.removeChild(el); // or el.remove();`);
  };

  const handleReset = () => {
    setTree(initialTree);
    setSelectedNodeId('node_h1');
    setLastJsCommand('// DOM Tree reset to initial standard state');
  };

  // Render tree node recursively
  const renderTreeItem = (node, depth = 0) => {
    const isSelected = selectedNodeId === node.id;

    return (
      <div key={node.id} className="space-y-1">
        <button
          onClick={() => setSelectedNodeId(node.id)}
          style={{ paddingLeft: `${depth * 16 + 8}px` }}
          className={`w-full text-left py-1.5 pr-2 rounded-lg text-xs font-mono flex items-center justify-between transition-colors ${
            isSelected
              ? 'bg-indigo-600 text-white font-bold shadow-2xs'
              : 'hover:bg-slate-100 text-slate-700'
          }`}
        >
          <div className="flex items-center space-x-1.5 truncate">
            <span className={isSelected ? 'text-indigo-200' : 'text-slate-400'}>
              {node.children && node.children.length > 0 ? '▼' : '•'}
            </span>
            <span className="font-semibold">&lt;{node.tag}&gt;</span>
            {node.attributes && Object.keys(node.attributes).length > 0 && (
              <span className={`text-[10px] ${isSelected ? 'text-indigo-200' : 'text-slate-400'} truncate`}>
                {Object.entries(node.attributes).map(([k, v]) => `${k}="${v}"`).join(' ')}
              </span>
            )}
          </div>
          {node.text && (
            <span className={`text-[10px] italic truncate max-w-[90px] ${isSelected ? 'text-indigo-200' : 'text-slate-400'}`}>
              "{node.text}"
            </span>
          )}
        </button>

        {node.children && node.children.map(child => renderTreeItem(child, depth + 1))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card overflow-hidden">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
            <GitBranch className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">DOM Explorer &amp; Interactive Node Manipulator</h3>
            <p className="text-xs text-slate-500">Select any node in the document hierarchy to inspect attributes, mutate content, and observe live JavaScript code</p>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-500"
          title="Reset DOM Tree"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Grid: Left Tree Graph, Center Inspector/Actions, Right Live Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Col 1: Visual Tree Graph (4 cols) */}
        <div className="lg:col-span-4 p-4 bg-slate-50/50 space-y-2">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-600" /> In-Memory Node Hierarchy
            </span>
            <span className="text-[10px] font-mono text-slate-400">window.document</span>
          </div>

          <div className="overflow-y-auto max-h-[380px] pr-1">
            {renderTreeItem(tree)}
          </div>
        </div>

        {/* Col 2: Node Inspector & Mutation Actions (4 cols) */}
        <div className="lg:col-span-4 p-5 bg-white space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs font-semibold text-slate-700">
            <span>Selected Node Inspector</span>
            <span className="font-mono text-indigo-600 font-bold">&lt;{activeNode.tag}&gt;</span>
          </div>

          {/* Node Metadata Card */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2 font-mono">
            <div><span className="text-slate-400">Node Tag:</span> <strong className="text-indigo-900">{activeNode.tag}</strong></div>
            <div><span className="text-slate-400">Parent Node:</span> <span className="text-slate-700">{activeNode.parent || 'null'}</span></div>
            <div>
              <span className="text-slate-400">Attributes:</span>
              <div className="text-[11px] text-slate-600 bg-white p-1.5 rounded border border-slate-200 mt-1">
                {activeNode.attributes && Object.keys(activeNode.attributes).length > 0 ? (
                  Object.entries(activeNode.attributes).map(([k, v]) => (
                    <div key={k}><strong className="text-indigo-600">{k}</strong> = "{v}"</div>
                  ))
                ) : (
                  <span className="text-slate-400 italic">No attributes declared</span>
                )}
              </div>
            </div>
            <div><span className="text-slate-400">Text Content:</span> <span className="text-slate-800">"{activeNode.text || ''}"</span></div>
            <div><span className="text-slate-400">Child Count:</span> <span className="text-slate-800">{activeNode.children ? activeNode.children.length : 0} nodes</span></div>
          </div>

          {/* Mutation Action Controls */}
          <div className="space-y-1.5 text-xs">
            <span className="text-slate-500 font-semibold text-[11px] block">Mutate Selected Node:</span>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={handleChangeText}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-indigo-50 text-slate-700 font-medium text-left flex items-center space-x-1.5"
              >
                <Edit3 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Change Text</span>
              </button>
              <button
                onClick={handleChangeAttribute}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-indigo-50 text-slate-700 font-medium text-left flex items-center space-x-1.5"
              >
                <Code className="w-3.5 h-3.5 text-blue-600" />
                <span>Set Attribute</span>
              </button>
              <button
                onClick={handleChangeStyle}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-indigo-50 text-slate-700 font-medium text-left flex items-center space-x-1.5"
              >
                <Palette className="w-3.5 h-3.5 text-violet-600" />
                <span>Change Style</span>
              </button>
              <button
                onClick={handleAddElement}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-emerald-50 text-slate-700 font-medium text-left flex items-center space-x-1.5"
              >
                <Plus className="w-3.5 h-3.5 text-emerald-600" />
                <span>Append Child</span>
              </button>
            </div>
            <button
              onClick={handleRemoveElement}
              className="w-full p-2 rounded-lg bg-white border border-red-200 hover:bg-red-50 text-red-700 font-medium text-center flex items-center justify-center space-x-1.5 mt-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Remove Node from DOM</span>
            </button>
          </div>
        </div>

        {/* Col 3: Live Viewport & Synchronized JavaScript Code (4 cols) */}
        <div className="lg:col-span-4 p-5 bg-slate-900 text-slate-200 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-emerald-400" /> Synchronized JavaScript API
              </span>
              <span className="text-[10px] text-slate-500">V8 Execution</span>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-emerald-300 whitespace-pre-wrap mt-2">
              {lastJsCommand}
            </div>
          </div>

          {/* Rendered Live Canvas Preview */}
          <div className="space-y-2">
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
              <Eye className="w-3 h-3 text-indigo-400" /> Live Viewport Paint
            </span>
            <div className="p-4 rounded-xl bg-white text-slate-900 shadow-inner min-h-[140px] text-xs">
              <h1 className="text-base font-bold text-slate-900 mb-1">
                {findNode(tree, 'node_h1')?.text || 'Heading'}
              </h1>
              <p className="text-slate-600 mb-2">
                {findNode(tree, 'node_p')?.text || 'Paragraph'}
              </p>
              <button className="px-3 py-1 bg-indigo-600 text-white rounded text-xs">
                {findNode(tree, 'node_btn')?.text || 'Button'}
              </button>
              {findNode(tree, 'node_body')?.children.filter(c => !['node_h1', 'node_p', 'node_btn'].includes(c.id)).map(c => (
                <div key={c.id} className="mt-2 p-1.5 rounded bg-indigo-50 text-indigo-900 font-mono text-[10px]">
                  &lt;{c.tag}&gt; {c.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
