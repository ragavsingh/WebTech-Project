import React, { useState } from 'react';
import { 
  CheckSquare, 
  CircleDot, 
  Type, 
  ListFilter, 
  Send, 
  RotateCcw, 
  Copy, 
  Check, 
  Code, 
  Eye, 
  Plus, 
  Trash2,
  Layers
} from 'lucide-react';

export default function FormBuilderSandbox() {
  const [fields, setFields] = useState([
    { id: 'f1', type: 'text', label: 'Full Name', name: 'fullname', placeholder: 'e.g. Raghav Singh', required: true },
    { id: 'f2', type: 'email', label: 'Email Address', name: 'email', placeholder: 'raghav@example.com', required: true },
    { id: 'f3', type: 'select', label: 'Degree Program', name: 'program', options: ['Computer Science & Eng', 'Information Technology', 'Data Science', 'Electronics'] },
    { id: 'f4', type: 'radio', label: 'Student Year', name: 'year', options: ['Year 1', 'Year 2', 'Year 3', 'Year 4'] },
    { id: 'f5', type: 'checkbox', label: 'Agreed to Honor Code', name: 'agree', required: true }
  ]);

  const [formMethod, setFormMethod] = useState('POST');
  const [formAction, setFormAction] = useState('/api/register');
  const [copied, setCopied] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Generate HTML code dynamically based on fields
  const generateHtml = () => {
    let html = `<form action="${formAction}" method="${formMethod}">\n`;

    fields.forEach(f => {
      html += `  <!-- ${f.label} -->\n`;
      if (f.type === 'text' || f.type === 'email' || f.type === 'password') {
        html += `  <div>\n    <label for="${f.name}">${f.label}:</label>\n    <input type="${f.type}" id="${f.name}" name="${f.name}" placeholder="${f.placeholder || ''}" ${f.required ? 'required' : ''} />\n  </div>\n`;
      } else if (f.type === 'select') {
        html += `  <div>\n    <label for="${f.name}">${f.label}:</label>\n    <select id="${f.name}" name="${f.name}">\n`;
        f.options.forEach(opt => {
          html += `      <option value="${opt.toLowerCase().replace(/\s+/g, '_')}">${opt}</option>\n`;
        });
        html += `    </select>\n  </div>\n`;
      } else if (f.type === 'radio') {
        html += `  <fieldset>\n    <legend>${f.label}:</legend>\n`;
        f.options.forEach((opt, idx) => {
          const val = opt.toLowerCase().replace(/\s+/g, '_');
          html += `    <label>\n      <input type="radio" name="${f.name}" value="${val}" ${idx === 0 ? 'checked' : ''} /> ${opt}\n    </label>\n`;
        });
        html += `  </fieldset>\n`;
      } else if (f.type === 'checkbox') {
        html += `  <div>\n    <label>\n      <input type="checkbox" name="${f.name}" ${f.required ? 'required' : ''} /> ${f.label}\n    </label>\n  </div>\n`;
      }
    });

    html += `\n  <button type="submit">Submit Application</button>\n</form>`;
    return html;
  };

  const handleAddField = (type) => {
    const newId = 'f_' + Date.now();
    let newField = { id: newId, type, label: `New ${type}`, name: `field_${fields.length + 1}` };

    if (type === 'text') newField = { ...newField, label: 'Text Field', placeholder: 'Enter text...', required: false };
    if (type === 'checkbox') newField = { ...newField, label: 'Confirm Subscription' };
    if (type === 'radio') newField = { ...newField, label: 'Preferred Option', options: ['Option A', 'Option B'] };
    if (type === 'select') newField = { ...newField, label: 'Category', options: ['Category 1', 'Category 2', 'Category 3'] };

    setFields([...fields, newField]);
  };

  const handleRemoveField = (id) => {
    setFields(fields.filter(f => f.id !== id));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateHtml());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulateSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {};
    formData.forEach((val, key) => {
      obj[key] = val;
    });
    setSubmittedData(obj);
  };

  const handleReset = () => {
    setFields([
      { id: 'f1', type: 'text', label: 'Full Name', name: 'fullname', placeholder: 'e.g. Raghav Singh', required: true },
      { id: 'f2', type: 'email', label: 'Email Address', name: 'email', placeholder: 'raghav@example.com', required: true },
      { id: 'f3', type: 'select', label: 'Degree Program', name: 'program', options: ['Computer Science & Eng', 'Information Technology', 'Data Science'] },
      { id: 'f4', type: 'radio', label: 'Student Year', name: 'year', options: ['Year 1', 'Year 2', 'Year 3', 'Year 4'] },
      { id: 'f5', type: 'checkbox', label: 'Agreed to Honor Code', name: 'agree', required: true }
    ]);
    setSubmittedData(null);
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
            <h3 className="text-sm font-bold text-slate-900">Interactive HTML Form Builder Laboratory</h3>
            <p className="text-xs text-slate-500">Add inputs, radios, checkboxes, and dropdowns to inspect dynamic HTML code generation</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs flex items-center space-x-1"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy HTML'}</span>
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-500"
            title="Reset Form"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Toolbar: Add controls & Form config */}
      <div className="px-6 py-3 bg-slate-50/40 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center space-x-1.5 overflow-x-auto">
          <span className="text-slate-400 font-medium whitespace-nowrap mr-1">Insert Element:</span>
          <button
            onClick={() => handleAddField('text')}
            className="flex items-center space-x-1 px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-100 text-slate-700"
          >
            <Type className="w-3 h-3 text-indigo-600" />
            <span>Text Input</span>
          </button>
          <button
            onClick={() => handleAddField('checkbox')}
            className="flex items-center space-x-1 px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-100 text-slate-700"
          >
            <CheckSquare className="w-3 h-3 text-emerald-600" />
            <span>Checkbox</span>
          </button>
          <button
            onClick={() => handleAddField('radio')}
            className="flex items-center space-x-1 px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-100 text-slate-700"
          >
            <CircleDot className="w-3 h-3 text-amber-600" />
            <span>Radio Group</span>
          </button>
          <button
            onClick={() => handleAddField('select')}
            className="flex items-center space-x-1 px-2.5 py-1 rounded bg-white border border-slate-200 hover:bg-slate-100 text-slate-700"
          >
            <ListFilter className="w-3 h-3 text-violet-600" />
            <span>Select Menu</span>
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-slate-400 font-medium">Method:</span>
          <select
            value={formMethod}
            onChange={(e) => setFormMethod(e.target.value)}
            className="bg-white border border-slate-200 rounded px-2 py-0.5 text-xs font-mono font-bold text-indigo-700"
          >
            <option value="POST">POST (Encrypted Payload)</option>
            <option value="GET">GET (Query String)</option>
          </select>
        </div>
      </div>

      {/* Split Builder: Left Generated Code, Right Rendered Interactive Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
        {/* Left: Code Generator */}
        <div className="p-4 bg-slate-900 text-slate-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-indigo-400" /> Generated &lt;form&gt; Markup
              </span>
              <span className="text-[10px] text-slate-500">{fields.length} controls</span>
            </div>
            <pre className="mt-3 font-mono text-xs text-indigo-200 overflow-x-auto leading-relaxed max-h-[360px]">
              {generateHtml()}
            </pre>
          </div>
          <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-500">
            Form action: <code>{formAction}</code> &bull; Encode: <code>application/x-www-form-urlencoded</code>
          </div>
        </div>

        {/* Right: Live Interactive Form Preview */}
        <div className="p-6 bg-white space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-emerald-600" /> Interactive Browser Form
            </span>
            <span className="text-[10px] font-mono text-slate-400">Live Client Validation</span>
          </div>

          <form onSubmit={handleSimulateSubmit} className="space-y-4 text-xs">
            {fields.map((f) => (
              <div key={f.id} className="p-3 rounded-lg border border-slate-100 bg-slate-50/50 relative group">
                <button
                  type="button"
                  onClick={() => handleRemoveField(f.id)}
                  className="absolute right-2 top-2 p-1 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Delete field"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>

                {f.type === 'text' || f.type === 'email' ? (
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      {f.label} {f.required && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type={f.type}
                      name={f.name}
                      placeholder={f.placeholder}
                      required={f.required}
                      className="w-full px-3 py-1.5 rounded-md border border-slate-200 bg-white text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                ) : f.type === 'select' ? (
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">{f.label}</label>
                    <select
                      name={f.name}
                      className="w-full px-3 py-1.5 rounded-md border border-slate-200 bg-white text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    >
                      {f.options.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                ) : f.type === 'radio' ? (
                  <div>
                    <span className="block text-slate-700 font-semibold mb-1.5">{f.label}</span>
                    <div className="flex flex-wrap gap-3">
                      {f.options.map((opt, i) => (
                        <label key={i} className="flex items-center space-x-1.5 text-slate-700 cursor-pointer">
                          <input type="radio" name={f.name} value={opt} defaultChecked={i === 0} className="text-indigo-600" />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ) : f.type === 'checkbox' ? (
                  <label className="flex items-center space-x-2 text-slate-700 cursor-pointer">
                    <input type="checkbox" name={f.name} required={f.required} className="rounded text-indigo-600" />
                    <span className="font-semibold">{f.label}</span>
                  </label>
                ) : null}
              </div>
            ))}

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors shadow-xs flex items-center justify-center space-x-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Form (Simulate Client Action)</span>
            </button>
          </form>

          {/* Form submission inspect payload */}
          {submittedData && (
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs font-mono space-y-1">
              <span className="font-bold text-emerald-900 block">HTTP Payload Submitted ({formMethod}):</span>
              <pre className="text-emerald-800 text-[11px] overflow-x-auto">
                {JSON.stringify(submittedData, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
