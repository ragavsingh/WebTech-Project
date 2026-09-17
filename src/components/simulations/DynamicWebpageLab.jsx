import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  ChevronRight, 
  Code, 
  Eye, 
  HelpCircle, 
  Play, 
  RotateCcw, 
  Sparkles, 
  Terminal, 
  Check, 
  AlertCircle,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

const LAB_STEPS = [
  {
    step: 1,
    title: '1. Semantic HTML Structure',
    objective: 'Create a semantic card with a heading, an unordered list (<ul>), and a product table.',
    hint: 'Ensure your code includes <h2>, at least one <ul> with <li>, and a <table> with <tr> and <td>.',
    starter: `<!-- Step 1: Semantic HTML -->
<div class="product-card">
  <h2>Smart Gadget Inventory</h2>
  
  <p>Key Features:</p>
  <ul>
    <li>Ultra-low latency</li>
    <li>Bluetooth 5.3</li>
  </ul>

  <!-- Add your table here with at least 2 rows -->
  <table>
    <tr>
      <th>Model</th>
      <th>Price</th>
    </tr>
    <tr>
      <td>Pro Series X</td>
      <td>$199</td>
    </tr>
  </table>
</div>`,
    verify: (code) => {
      const hasH2 = /<h2/i.test(code);
      const hasUl = /<ul/i.test(code) && /<li/i.test(code);
      const hasTable = /<table/i.test(code) && /<td/i.test(code);
      if (!hasH2) return { pass: false, msg: 'Missing an <h2> heading.' };
      if (!hasUl) return { pass: false, msg: 'Missing a <ul> list with <li> elements.' };
      if (!hasTable) return { pass: false, msg: 'Missing a <table> with <tr> and <td> cells.' };
      return { pass: true, msg: 'Excellent! Semantic HTML structure established.' };
    }
  },

  {
    step: 2,
    title: '2. Form & User Input Controls',
    objective: 'Add an interactive form containing a text input for new item names, a quantity selector, and a submit button.',
    hint: 'Add an <input type="text" id="itemName"> and a <button id="addBtn">Click Me</button>.',
    starter: `<!-- Step 2: Form & Input -->
<div class="product-card">
  <h2>Inventory Manager</h2>
  
  <form id="itemForm" onsubmit="return false;">
    <label for="itemName">Product Name:</label>
    <input type="text" id="itemName" placeholder="e.g. Wireless Mouse" />
    
    <label for="itemQty">Quantity:</label>
    <input type="number" id="itemQty" value="1" min="1" />
    
    <button type="button" id="addBtn">Add to Inventory</button>
  </form>

  <ul id="inventoryList">
    <li>Mechanical Keyboard (Qty: 2)</li>
  </ul>
</div>`,
    verify: (code) => {
      const hasInput = /<input[^>]+type=["']text["']/i.test(code) || /id=["']itemName["']/i.test(code);
      const hasBtn = /<button/i.test(code);
      const hasList = /id=["']inventoryList["']/i.test(code) || /<ul/i.test(code);
      if (!hasInput) return { pass: false, msg: 'Missing a text input element.' };
      if (!hasBtn) return { pass: false, msg: 'Missing a <button> element.' };
      if (!hasList) return { pass: false, msg: 'Missing an inventory list element.' };
      return { pass: true, msg: 'Great work! Form controls are properly integrated.' };
    }
  },

  {
    step: 3,
    title: '3. CSS Presentation & Layout',
    objective: 'Add CSS styling inside a <style> tag to give the card rounded corners, padding, button hover effects, and modern colors.',
    hint: 'Add a <style> block defining border-radius, background-color, and a hover state (:hover).',
    starter: `<!-- Step 3: CSS Presentation -->
<style>
  .product-card {
    background: #ffffff;
    border-radius: 12px;
    padding: 20px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    font-family: system-ui, sans-serif;
  }
  
  button {
    background: #4f46e5;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s;
  }

  button:hover {
    background: #4338ca;
  }

  input {
    padding: 6px 10px;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    margin-right: 8px;
  }
</style>

<div class="product-card">
  <h2>Styled Inventory Manager</h2>
  <input type="text" id="itemName" placeholder="New gadget..." />
  <button id="addBtn">Add Item</button>
  <ul id="inventoryList" style="margin-top: 15px;">
    <li>Smart Watch</li>
  </ul>
</div>`,
    verify: (code) => {
      const hasStyle = /<style/i.test(code);
      const hasRadius = /border-radius/i.test(code);
      const hasHover = /:hover/i.test(code);
      if (!hasStyle) return { pass: false, msg: 'Missing a <style> block.' };
      if (!hasRadius) return { pass: false, msg: 'Add border-radius in your CSS rules.' };
      if (!hasHover) return { pass: false, msg: 'Include a :hover pseudo-class rule.' };
      return { pass: true, msg: 'Looking polished! CSS presentation is clean and modern.' };
    }
  },

  {
    step: 4,
    title: '4. DOM Selection & Querying',
    objective: 'Write JavaScript to grab references to the input, button, and list elements using document.getElementById or querySelector.',
    hint: 'Use document.getElementById("addBtn") or document.querySelector("#addBtn").',
    starter: `<!-- Step 4: DOM Selection -->
<div class="card">
  <input type="text" id="itemName" value="Noise Cancelling Headphones" />
  <button id="addBtn">Add</button>
  <ul id="itemList"></ul>
</div>

<script>
  // Select the DOM nodes
  const btn = document.getElementById('addBtn');
  const input = document.getElementById('itemName');
  const list = document.getElementById('itemList');

  console.log('DOM Nodes connected:', btn, input, list);
</script>`,
    verify: (code) => {
      const hasGetEl = /document\.getElementById/i.test(code) || /document\.querySelector/i.test(code);
      const hasScript = /<script/i.test(code);
      if (!hasScript) return { pass: false, msg: 'Missing a <script> block.' };
      if (!hasGetEl) return { pass: false, msg: 'Must use document.getElementById or document.querySelector.' };
      return { pass: true, msg: 'Excellent! DOM nodes are correctly queried and cached.' };
    }
  },

  {
    step: 5,
    title: '5. Dynamic Interactivity & Event Handling',
    objective: 'Combine HTML, CSS, DOM querying, and an addEventListener("click") that dynamically creates and appends new <li> nodes.',
    hint: 'Use btn.addEventListener("click", ...) and document.createElement("li").',
    starter: `<!-- Step 5: Full Dynamic Webpage -->
<style>
  .app-box {
    background: #ffffff;
    border-radius: 12px;
    padding: 24px;
    border: 1px solid #e2e8f0;
    font-family: system-ui, sans-serif;
  }
  .item-badge {
    background: #e0e7ff;
    color: #3730a3;
    padding: 6px 12px;
    border-radius: 6px;
    margin-bottom: 6px;
    list-style: none;
    font-weight: 500;
  }
</style>

<div class="app-box">
  <h3 style="margin-top: 0; color: #0f172a;">Live Product Registry</h3>
  
  <div style="display: flex; gap: 8px; margin-bottom: 16px;">
    <input type="text" id="gadgetName" placeholder="Enter product title..." style="flex: 1; padding: 8px; border: 1px solid #cbd5e1; border-radius: 8px;" />
    <button id="submitBtn" style="background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 8px; cursor: pointer; font-weight: 600;">
      + Add Item
    </button>
  </div>

  <ul id="gadgetList" style="padding: 0; margin: 0;">
    <li class="item-badge">Initial Seed: VR Headset</li>
  </ul>
</div>

<script>
  const submitBtn = document.getElementById('submitBtn');
  const inputEl = document.getElementById('gadgetName');
  const listEl = document.getElementById('gadgetList');

  submitBtn.addEventListener('click', function() {
    const val = inputEl.value.trim();
    if (val !== '') {
      // Create new DOM element
      const newLi = document.createElement('li');
      newLi.className = 'item-badge';
      newLi.textContent = val;
      
      // Append to parent node
      listEl.appendChild(newLi);
      
      // Reset input
      inputEl.value = '';
    }
  });
</script>`,
    verify: (code) => {
      const hasListener = /addEventListener/i.test(code) || /onclick\s*=/i.test(code);
      const hasCreate = /createElement/i.test(code) || /innerHTML/i.test(code);
      const hasAppend = /appendChild/i.test(code) || /append/i.test(code) || /\+=/i.test(code);
      if (!hasListener) return { pass: false, msg: 'Missing addEventListener or click handler.' };
      if (!hasCreate) return { pass: false, msg: 'Missing dynamic element creation (e.g. document.createElement).' };
      if (!hasAppend) return { pass: false, msg: 'Missing appendChild or DOM insertion logic.' };
      return { pass: true, msg: 'Outstanding! Full Dynamic HTML + DOM manipulation verified!' };
    }
  }
];

export default function DynamicWebpageLab() {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [completedSteps, setCompletedSteps] = useState({});
  const [userCode, setUserCode] = useState(LAB_STEPS[0].starter);
  const [verificationFeedback, setVerificationFeedback] = useState(null);

  const activeStep = LAB_STEPS[currentStepIdx];
  const allCompleted = Object.keys(completedSteps).length === LAB_STEPS.length;

  const handleStepChange = (idx) => {
    setCurrentStepIdx(idx);
    setUserCode(LAB_STEPS[idx].starter);
    setVerificationFeedback(null);
  };

  const handleVerify = () => {
    const res = activeStep.verify(userCode);
    setVerificationFeedback(res);
    if (res.pass) {
      setCompletedSteps(prev => ({ ...prev, [currentStepIdx]: true }));
    }
  };

  const handleNextStep = () => {
    if (currentStepIdx < LAB_STEPS.length - 1) {
      handleStepChange(currentStepIdx + 1);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white px-6 py-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 bg-indigo-500/20 text-indigo-400 rounded-xl border border-indigo-500/30">
            <Award size={24} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-extrabold">Unit 2 Capstone Laboratory</h3>
              <span className="text-[11px] font-bold bg-indigo-500/30 text-indigo-300 border border-indigo-500/40 px-2 py-0.5 rounded-full">
                5-Step Hands-on Challenge
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Engineer a complete interactive, responsive, and styled dynamic webpage from scratch
            </p>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs text-slate-400">Progress:</div>
            <div className="text-sm font-extrabold text-indigo-300 font-mono">
              {Object.keys(completedSteps).length} / {LAB_STEPS.length} Completed
            </div>
          </div>
        </div>
      </div>

      {/* Step Navigation Bar */}
      <div className="bg-slate-100/90 px-4 py-2.5 border-b border-slate-200 flex items-center gap-2 overflow-x-auto">
        {LAB_STEPS.map((step, idx) => {
          const isDone = !!completedSteps[idx];
          const isCurrent = currentStepIdx === idx;
          return (
            <button
              key={step.step}
              onClick={() => handleStepChange(idx)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition flex items-center gap-1.5 ${
                isCurrent
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : isDone
                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {isDone ? (
                <CheckCircle2 size={13} className="text-emerald-700 shrink-0" />
              ) : (
                <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-[10px] font-bold">
                  {step.step}
                </span>
              )}
              <span>{step.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Step Instructions & Objective */}
      <div className="p-5 bg-indigo-50/40 border-b border-indigo-100 flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-sm text-indigo-950">
              {activeStep.title}: Objective
            </h4>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed font-medium">
            {activeStep.objective}
          </p>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-indigo-800">
            <Lightbulb size={14} className="text-amber-500 shrink-0" />
            <span className="text-[11px]"><strong className="font-semibold">Hint:</strong> {activeStep.hint}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setUserCode(activeStep.starter)}
            className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition flex items-center gap-1"
          >
            <RotateCcw size={12} />
            <span>Reset Code</span>
          </button>
          <button
            onClick={handleVerify}
            className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg shadow-sm hover:shadow transition flex items-center gap-1.5"
          >
            <Check size={14} />
            <span>Check My Work</span>
          </button>
        </div>
      </div>

      {/* Verification Feedback Banner */}
      {verificationFeedback && (
        <div className={`px-5 py-3 border-b text-xs flex items-center justify-between transition-all ${
          verificationFeedback.pass 
            ? 'bg-emerald-50 border-emerald-200 text-emerald-900' 
            : 'bg-rose-50 border-rose-200 text-rose-900'
        }`}>
          <div className="flex items-center gap-2">
            {verificationFeedback.pass ? (
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle size={16} className="text-rose-600 shrink-0" />
            )}
            <span className="font-semibold">{verificationFeedback.msg}</span>
          </div>

          {verificationFeedback.pass && currentStepIdx < LAB_STEPS.length - 1 && (
            <button
              onClick={handleNextStep}
              className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition flex items-center gap-1"
            >
              <span>Continue to Step {currentStepIdx + 2}</span>
              <ArrowRight size={13} />
            </button>
          )}
        </div>
      )}

      {/* Split Work Area: Code Editor vs Live Browser Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        {/* Left Column: Code Editor */}
        <div className="lg:col-span-6 border-r border-slate-200 flex flex-col bg-slate-950 text-slate-100">
          <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono flex items-center gap-1.5">
              <Code size={14} className="text-indigo-400" />
              index.html
            </span>
            <span className="text-[11px]">HTML5 / CSS3 / ES6</span>
          </div>

          <div className="relative flex-1 p-3">
            <textarea
              value={userCode}
              onChange={(e) => {
                setUserCode(e.target.value);
                setVerificationFeedback(null);
              }}
              spellCheck="false"
              className="w-full h-full min-h-[380px] bg-transparent font-mono text-xs text-emerald-300 focus:outline-none resize-none leading-relaxed selection:bg-indigo-500/40"
              placeholder="Type your code here..."
            />
          </div>
        </div>

        {/* Right Column: Sandboxed Live Preview */}
        <div className="lg:col-span-6 flex flex-col bg-slate-100">
          <div className="bg-slate-200/80 px-4 py-2 border-b border-slate-300 flex items-center justify-between text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Eye size={14} className="text-indigo-600" />
              <span className="font-semibold text-slate-800">Live Browser Viewport</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
            </div>
          </div>

          <div className="p-4 flex-1 overflow-hidden flex flex-col">
            <div className="w-full flex-1 bg-white rounded-xl shadow-xs border border-slate-300 overflow-hidden">
              <iframe
                title="Lab Preview Sandbox"
                srcDoc={userCode}
                sandbox="allow-scripts"
                className="w-full h-full min-h-[380px] border-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Completion Banner */}
      {allCompleted && (
        <div className="p-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles size={28} className="text-amber-300 animate-bounce" />
            <div>
              <h4 className="text-lg font-bold">Unit 2 Laboratory Mastery Achieved!</h4>
              <p className="text-xs text-emerald-100">
                You have successfully mastered HTML5 structures, forms, CSS box presentation, DOM queries, and dynamic JavaScript event mutations!
              </p>
            </div>
          </div>
          <div className="bg-white text-emerald-900 font-extrabold px-4 py-2 rounded-xl text-xs shadow">
            100% Complete
          </div>
        </div>
      )}
    </div>
  );
}
