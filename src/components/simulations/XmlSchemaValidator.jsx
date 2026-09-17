import React, { useState } from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  FileCheck, 
  RefreshCw, 
  Sliders, 
  Info,
  HelpCircle,
  ArrowRight,
  Code2
} from 'lucide-react';

const SCENARIOS = [
  {
    id: 'valid',
    title: 'Valid XML (Passes all checks)',
    description: 'Structure, types, and sequence all perfectly conform to the schema.',
    xml: `<?xml version="1.0" encoding="UTF-8"?>
<student id="ST-9021">
  <name>Emily Watson</name>
  <email>emily.w@polytechnic.edu</email>
  <age>22</age>
  <gpa>3.85</gpa>
</student>`,
    schemaXsd: `<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="student">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="name" type="xs:string" />
        <xs:element name="email" type="xs:string" />
        <xs:element name="age" type="xs:positiveInteger" />
        <xs:element name="gpa" type="xs:decimal" />
      </xs:sequence>
      <xs:attribute name="id" type="xs:string" use="required" />
    </xs:complexType>
  </xs:element>
</xs:schema>`,
    schemaDtd: `<!ELEMENT student (name, email, age, gpa)>
<!ATTLIST student id ID #REQUIRED>
<!ELEMENT name (#PCDATA)>
<!ELEMENT email (#PCDATA)>
<!ELEMENT age (#PCDATA)>
<!ELEMENT gpa (#PCDATA)>`,
    valid: true,
    diagnostics: [
      { rule: 'Root Element', status: 'pass', detail: 'Root <student> matches declared element.' },
      { rule: 'Sequence Order', status: 'pass', detail: 'name -> email -> age -> gpa order is strictly followed.' },
      { rule: 'Data Types', status: 'pass', detail: 'age ("22") is positiveInteger, gpa ("3.85") is decimal.' },
      { rule: 'Attribute Requirement', status: 'pass', detail: 'Required attribute id="ST-9021" is present.' }
    ]
  },
  {
    id: 'type-error',
    title: 'Data Type Mismatch',
    description: 'Schema expects xs:positiveInteger for <age>, but found string text "twenty-two".',
    xml: `<?xml version="1.0" encoding="UTF-8"?>
<student id="ST-9022">
  <name>Carlos Mendez</name>
  <email>carlos@tech.org</email>
  <age>twenty-two</age>
  <gpa>3.40</gpa>
</student>`,
    schemaXsd: `<xs:element name="student">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="name" type="xs:string" />
      <xs:element name="email" type="xs:string" />
      <xs:element name="age" type="xs:positiveInteger" />
      <xs:element name="gpa" type="xs:decimal" />
    </xs:sequence>
    <xs:attribute name="id" type="xs:string" use="required" />
  </xs:complexType>
</xs:element>`,
    schemaDtd: `<!-- DTD has no native data type validation; only #PCDATA strings -->`,
    valid: false,
    diagnostics: [
      { rule: 'Root Element', status: 'pass', detail: 'Root <student> is recognized.' },
      { rule: 'Sequence Order', status: 'pass', detail: 'Element order is valid.' },
      { rule: 'Data Types', status: 'fail', detail: 'Validation failed on <age>: "twenty-two" is not a valid xs:positiveInteger value. Expected numeric representation (e.g. 22).' },
      { rule: 'Attribute Requirement', status: 'pass', detail: 'Required attribute id is present.' }
    ]
  },
  {
    id: 'sequence-error',
    title: 'Sequence Ordering Violation',
    description: 'Inside <xs:sequence>, <email> was placed before <name>. Sequence enforces exact document order.',
    xml: `<?xml version="1.0" encoding="UTF-8"?>
<student id="ST-9023">
  <email>sarah@univ.edu</email>
  <name>Sarah Jenkins</name>
  <age>20</age>
  <gpa>3.92</gpa>
</student>`,
    schemaXsd: `<xs:element name="student">
  <xs:complexType>
    <!-- xs:sequence mandates exact order! -->
    <xs:sequence>
      <xs:element name="name" type="xs:string" />
      <xs:element name="email" type="xs:string" />
      <xs:element name="age" type="xs:positiveInteger" />
      <xs:element name="gpa" type="xs:decimal" />
    </xs:sequence>
  </xs:complexType>
</xs:element>`,
    schemaDtd: `<!ELEMENT student (name, email, age, gpa)>`,
    valid: false,
    diagnostics: [
      { rule: 'Root Element', status: 'pass', detail: 'Root <student> matches declared element.' },
      { rule: 'Sequence Order', status: 'fail', detail: 'Invalid content found starting with element <email>. One of {name} is expected at position 1.' },
      { rule: 'Data Types', status: 'skip', detail: 'Skipped due to sequence violation.' },
      { rule: 'Attribute Requirement', status: 'pass', detail: 'Required attribute id is present.' }
    ]
  },
  {
    id: 'missing-attr',
    title: 'Missing Required Attribute',
    description: 'The schema declares attribute id as use="required", but it was omitted on the root element.',
    xml: `<?xml version="1.0" encoding="UTF-8"?>
<student>
  <name>David Kim</name>
  <email>david.k@labs.io</email>
  <age>24</age>
  <gpa>3.71</gpa>
</student>`,
    schemaXsd: `<xs:element name="student">
  ...
  <!-- use="required" makes omitting this attribute an error -->
  <xs:attribute name="id" type="xs:string" use="required" />
</xs:element>`,
    schemaDtd: `<!ATTLIST student id ID #REQUIRED>`,
    valid: false,
    diagnostics: [
      { rule: 'Root Element', status: 'pass', detail: 'Root <student> is recognized.' },
      { rule: 'Sequence Order', status: 'pass', detail: 'Child element order conforms.' },
      { rule: 'Data Types', status: 'pass', detail: 'Child elements contain valid types.' },
      { rule: 'Attribute Requirement', status: 'fail', detail: 'Attribute "id" is bound to the element <student> with use="required", but does not appear in the instance document.' }
    ]
  }
];

export default function XmlSchemaValidator() {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [schemaMode, setSchemaMode] = useState('xsd'); // 'xsd' | 'dtd'
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState(null);

  const currentScenario = SCENARIOS[selectedScenarioIndex];

  const handleValidate = () => {
    setIsValidating(true);
    setValidationResult(null);
    setTimeout(() => {
      setIsValidating(false);
      setValidationResult(currentScenario);
    }, 600);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Top Header */}
      <div className="bg-slate-900 text-white px-5 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/30">
            <ShieldCheck size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold">XML Schema &amp; DTD Validation Engine</h3>
            <p className="text-xs text-slate-400">
              Interactive test bench verifying schema constraints, typed facets, and grammar rules
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Schema Format:</span>
          <div className="flex bg-slate-800 p-0.5 rounded-lg border border-slate-700">
            <button
              onClick={() => setSchemaMode('xsd')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition ${
                schemaMode === 'xsd' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              W3C XSD
            </button>
            <button
              onClick={() => setSchemaMode('dtd')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition ${
                schemaMode === 'dtd' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Legacy DTD
            </button>
          </div>
        </div>
      </div>

      {/* Scenario Selector Tabs */}
      <div className="bg-slate-100/80 px-4 py-2 border-b border-slate-200 flex items-center gap-2 overflow-x-auto">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide shrink-0">
          Test Case:
        </span>
        {SCENARIOS.map((scen, idx) => (
          <button
            key={scen.id}
            onClick={() => {
              setSelectedScenarioIndex(idx);
              setValidationResult(null);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium shrink-0 transition flex items-center gap-1.5 ${
              selectedScenarioIndex === idx
                ? 'bg-white text-slate-900 shadow-sm border border-slate-300 font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            {scen.valid ? (
              <CheckCircle2 size={13} className="text-emerald-500" />
            ) : (
              <AlertTriangle size={13} className="text-amber-500" />
            )}
            <span>{scen.title}</span>
          </button>
        ))}
      </div>

      {/* Main Comparison Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-200">
        {/* Left: XML Instance */}
        <div className="lg:col-span-6 border-r border-slate-200 flex flex-col bg-slate-950 text-slate-100">
          <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs">
            <span className="font-mono text-slate-300 flex items-center gap-2">
              <Code2 size={14} className="text-emerald-400" />
              instance_document.xml
            </span>
            <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
              XML Instance
            </span>
          </div>
          <pre className="p-4 font-mono text-xs text-emerald-300 overflow-x-auto flex-1 leading-relaxed">
            {currentScenario.xml}
          </pre>
          <div className="p-3 bg-slate-900/60 border-t border-slate-800 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">Scenario Goal: </span>
            {currentScenario.description}
          </div>
        </div>

        {/* Right: Schema Definition (XSD or DTD) */}
        <div className="lg:col-span-6 flex flex-col bg-slate-950 text-slate-100">
          <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs">
            <span className="font-mono text-slate-300 flex items-center gap-2">
              <FileCheck size={14} className="text-indigo-400" />
              {schemaMode === 'xsd' ? 'schema_rules.xsd' : 'grammar_rules.dtd'}
            </span>
            <span className="text-[11px] bg-indigo-900/60 text-indigo-300 px-2 py-0.5 rounded border border-indigo-700">
              {schemaMode === 'xsd' ? 'W3C XML Schema' : 'Document Type Definition'}
            </span>
          </div>
          <pre className="p-4 font-mono text-xs text-indigo-300 overflow-x-auto flex-1 leading-relaxed">
            {schemaMode === 'xsd' ? currentScenario.schemaXsd : currentScenario.schemaDtd}
          </pre>
          <div className="p-3 bg-slate-900/60 border-t border-slate-800 text-xs text-slate-400">
            {schemaMode === 'xsd' ? (
              <span>XSD enforces strong data types, namespaces, regex facets, and min/max occurrences.</span>
            ) : (
              <span>DTDs provide grammatical ordering without native rich typing (all data is treated as character text <code className="text-amber-300">#PCDATA</code>).</span>
            )}
          </div>
        </div>
      </div>

      {/* Validation Trigger Bar */}
      <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-slate-600">
          <Sliders size={16} className="text-indigo-600" />
          <span>Click "Run Schema Validation" to execute the 4-phase validation pipeline against the schema.</span>
        </div>
        <button
          onClick={handleValidate}
          disabled={isValidating}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium text-xs rounded-xl shadow-sm hover:shadow transition flex items-center gap-2"
        >
          <RefreshCw size={14} className={isValidating ? 'animate-spin' : ''} />
          <span>{isValidating ? 'Validating against Schema...' : 'Run Schema Validation'}</span>
        </button>
      </div>

      {/* Validation Pipeline Results */}
      {validationResult && (
        <div className="p-5 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <span>Validation Pipeline Audit</span>
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold uppercase ${
                validationResult.valid 
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                  : 'bg-rose-100 text-rose-800 border border-rose-300'
              }`}>
                {validationResult.valid ? 'VALID DOCUMENT' : 'SCHEMA VIOLATION DETECTED'}
              </span>
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            {validationResult.diagnostics.map((diag, index) => (
              <div 
                key={index}
                className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${
                  diag.status === 'pass'
                    ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                    : diag.status === 'fail'
                    ? 'bg-rose-50 border-rose-200 text-rose-950'
                    : 'bg-slate-50 border-slate-200 text-slate-600'
                }`}
              >
                {diag.status === 'pass' && <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />}
                {diag.status === 'fail' && <XCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />}
                {diag.status === 'skip' && <AlertTriangle size={16} className="text-slate-400 shrink-0 mt-0.5" />}
                <div>
                  <div className="font-bold mb-0.5">{diag.rule}</div>
                  <div className="text-[11px] leading-relaxed opacity-90">{diag.detail}</div>
                </div>
              </div>
            ))}
          </div>

          {!validationResult.valid && (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
              <strong className="font-semibold">Correction Advice: </strong>
              To make this XML document valid against the schema, ensure all required elements appear in exact sequential order, required attributes are included, and string values conform to the defined data types (e.g. integer, decimal, date).
            </div>
          )}
        </div>
      )}

      {/* DTD vs XSD Quick Table */}
      <div className="p-4 bg-slate-50/80 border-t border-slate-200 text-xs">
        <div className="font-bold text-slate-800 mb-2 flex items-center gap-1.5">
          <Info size={14} className="text-indigo-600" />
          <span>XSD (XML Schema Definition) vs DTD (Document Type Definition) Quick Comparison</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-600 text-[11px] uppercase tracking-wider">
                <th className="py-1.5 pr-4">Feature</th>
                <th className="py-1.5 pr-4">XSD (XML Schema)</th>
                <th className="py-1.5 pr-4">DTD</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/70 text-slate-700">
              <tr>
                <td className="py-1.5 font-semibold text-slate-800">Syntax</td>
                <td className="py-1.5 text-indigo-700 font-mono">Written in valid XML itself (&lt;xs:schema&gt;)</td>
                <td className="py-1.5 text-slate-600 font-mono">Separate non-XML grammar syntax</td>
              </tr>
              <tr>
                <td className="py-1.5 font-semibold text-slate-800">Data Types</td>
                <td className="py-1.5 text-emerald-700">Rich built-in types (integer, decimal, date, boolean, custom regex)</td>
                <td className="py-1.5 text-rose-700">No native data types (everything is #PCDATA string)</td>
              </tr>
              <tr>
                <td className="py-1.5 font-semibold text-slate-800">Namespaces</td>
                <td className="py-1.5 text-emerald-700">Full native namespace support (targetNamespace)</td>
                <td className="py-1.5 text-rose-700">No direct namespace support</td>
              </tr>
              <tr>
                <td className="py-1.5 font-semibold text-slate-800">Cardinality</td>
                <td className="py-1.5 text-emerald-700">Precise minOccurs and maxOccurs (e.g. minOccurs="2" maxOccurs="5")</td>
                <td className="py-1.5 text-slate-600">Basic regular expression symbols (+, *, ?)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
