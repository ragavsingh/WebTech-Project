import React, { useState } from 'react';
import { 
  FileCode, 
  ArrowRight, 
  Eye, 
  Code, 
  Sparkles, 
  Filter, 
  Layers, 
  CheckCircle,
  HelpCircle,
  Settings,
  Table
} from 'lucide-react';

const PRESETS = {
  gradebook: {
    id: 'gradebook',
    name: 'Student Grade Report',
    description: 'Iterates through students using <xsl:for-each> and renders pass/fail status with <xsl:choose>.',
    xml: `<?xml version="1.0" encoding="UTF-8"?>
<gradebook term="Fall 2026">
  <student id="ST-101">
    <name>Sophia Martinez</name>
    <course>Web Technology</course>
    <score>94</score>
  </student>
  <student id="ST-102">
    <name>Liam Chen</name>
    <course>Web Technology</course>
    <score>68</score>
  </student>
  <student id="ST-103">
    <name>Amina Yusuf</name>
    <course>Web Technology</course>
    <score>82</score>
  </student>
  <student id="ST-104">
    <name>Lucas Dupont</name>
    <course>Web Technology</course>
    <score>54</score>
  </student>
</gradebook>`,
    xslt: `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <body>
        <h2>Course Grade Report</h2>
        <table class="report-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="gradebook/student">
              <tr>
                <td><xsl:value-of select="@id"/></td>
                <td><xsl:value-of select="name"/></td>
                <td><xsl:value-of select="score"/>%</td>
                <td>
                  <xsl:choose>
                    <xsl:when test="score &gt;= 75">
                      <span class="badge pass">Distinction</span>
                    </xsl:when>
                    <xsl:when test="score &gt;= 60">
                      <span class="badge pass">Pass</span>
                    </xsl:when>
                    <xsl:otherwise>
                      <span class="badge fail">Needs Improvement</span>
                    </xsl:otherwise>
                  </xsl:choose>
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>`,
    data: [
      { id: 'ST-101', name: 'Sophia Martinez', course: 'Web Technology', score: 94 },
      { id: 'ST-102', name: 'Liam Chen', course: 'Web Technology', score: 68 },
      { id: 'ST-103', name: 'Amina Yusuf', course: 'Web Technology', score: 82 },
      { id: 'ST-104', name: 'Lucas Dupont', course: 'Web Technology', score: 54 },
    ]
  },

  catalog: {
    id: 'catalog',
    name: 'Product Inventory Grid',
    description: 'Extracts product records, sorts by price, and creates interactive card widgets.',
    xml: `<?xml version="1.0" encoding="UTF-8"?>
<catalog category="Hardware">
  <item sku="KB-990">
    <name>Mechanical Keyboard</name>
    <category>Peripherals</category>
    <price>119.00</price>
    <stock>42</stock>
  </item>
  <item sku="MO-402">
    <name>Ergonomic Mouse</name>
    <category>Peripherals</category>
    <price>59.00</price>
    <stock>85</stock>
  </item>
  <item sku="MN-810">
    <name>4K UltraFine Monitor</name>
    <category>Displays</category>
    <price>499.00</price>
    <stock>12</stock>
  </item>
</catalog>`,
    xslt: `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <div class="product-grid">
      <xsl:for-each select="catalog/item">
        <xsl:sort select="price" data-type="number" order="ascending"/>
        <div class="card">
          <h4><xsl:value-of select="name"/></h4>
          <p class="sku">SKU: <xsl:value-of select="@sku"/></p>
          <p class="price">$<xsl:value-of select="price"/></p>
        </div>
      </xsl:for-each>
    </div>
  </xsl:template>
</xsl:stylesheet>`,
    data: [
      { sku: 'KB-990', name: 'Mechanical Keyboard', category: 'Peripherals', price: 119.00, stock: 42 },
      { sku: 'MO-402', name: 'Ergonomic Mouse', category: 'Peripherals', price: 59.00, stock: 85 },
      { sku: 'MN-810', name: '4K UltraFine Monitor', category: 'Displays', price: 499.00, stock: 12 },
    ]
  }
};

export default function XslTransformationSimulator() {
  const [selectedPresetKey, setSelectedPresetKey] = useState('gradebook');
  const [activeTab, setActiveTab] = useState('xml'); // 'xml' | 'xslt'
  const [outputMode, setOutputMode] = useState('rendered'); // 'rendered' | 'code'
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterThreshold, setFilterThreshold] = useState(0);

  const preset = PRESETS[selectedPresetKey];

  // Process data for presentation simulation
  const processedData = [...preset.data]
    .filter(item => {
      if (preset.id === 'gradebook') return item.score >= filterThreshold;
      if (preset.id === 'catalog') return item.price >= filterThreshold;
      return true;
    })
    .sort((a, b) => {
      if (preset.id === 'gradebook') {
        return sortOrder === 'asc' ? a.score - b.score : b.score - a.score;
      }
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Header */}
      <div className="bg-slate-900 text-white px-5 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-500/20 text-purple-400 rounded-xl border border-purple-500/30">
            <Layers size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold">XSLT Stylesheet &amp; Transformation Engine</h3>
            <p className="text-xs text-slate-400">
              Transform raw structured XML into modern styled HTML presentation documents
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Template:</span>
          {Object.keys(PRESETS).map(key => (
            <button
              key={key}
              onClick={() => {
                setSelectedPresetKey(key);
                setFilterThreshold(0);
              }}
              className={`px-3 py-1 text-xs rounded-lg font-medium transition ${
                selectedPresetKey === key
                  ? 'bg-purple-600 text-white shadow'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {PRESETS[key].name}
            </button>
          ))}
        </div>
      </div>

      {/* Pipeline Flow Visualization */}
      <div className="bg-purple-50/70 border-b border-purple-100 px-5 py-3 flex flex-wrap items-center justify-between text-xs text-purple-950 gap-3">
        <div className="flex items-center gap-2 font-semibold">
          <Sparkles size={15} className="text-purple-600" />
          <span>XSLT Transformation Pipeline:</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="bg-white px-2.5 py-1 rounded border border-purple-200 text-slate-800 shadow-xs">
            Source XML Data
          </span>
          <ArrowRight size={13} className="text-purple-400" />
          <span className="bg-white px-2.5 py-1 rounded border border-purple-200 text-purple-700 font-bold shadow-xs">
            XSLT Stylesheet Rules
          </span>
          <ArrowRight size={13} className="text-purple-400" />
          <span className="bg-purple-600 text-white px-2.5 py-1 rounded shadow-xs font-semibold">
            Transformed HTML
          </span>
        </div>
      </div>

      {/* Main Split Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        {/* Left Column: Source Editor (XML or XSLT) */}
        <div className="lg:col-span-6 border-r border-slate-200 flex flex-col bg-slate-950 text-slate-100">
          <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveTab('xml')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition flex items-center gap-1.5 ${
                  activeTab === 'xml'
                    ? 'bg-slate-800 text-emerald-400 border border-slate-700'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <FileCode size={13} />
                <span>source_data.xml</span>
              </button>
              <button
                onClick={() => setActiveTab('xslt')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition flex items-center gap-1.5 ${
                  activeTab === 'xslt'
                    ? 'bg-slate-800 text-purple-400 border border-slate-700'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Code size={13} />
                <span>template.xslt</span>
              </button>
            </div>
            <span className="text-[11px] text-slate-400">
              {activeTab === 'xml' ? 'Raw XML Data' : 'XSLT Presentation Logic'}
            </span>
          </div>

          <div className="p-4 flex-1 overflow-x-auto">
            <pre className={`font-mono text-xs leading-relaxed ${
              activeTab === 'xml' ? 'text-emerald-300' : 'text-purple-300'
            }`}>
              {activeTab === 'xml' ? preset.xml : preset.xslt}
            </pre>
          </div>

          {/* Description of current template logic */}
          <div className="p-3 bg-slate-900/80 border-t border-slate-800 text-xs text-slate-300">
            <span className="font-semibold text-purple-300">Template Directives in use: </span>
            <span className="font-mono text-[11px] text-slate-400">
              &lt;xsl:template&gt;, &lt;xsl:for-each&gt;, &lt;xsl:value-of&gt;, &lt;xsl:choose&gt;
            </span>
          </div>
        </div>

        {/* Right Column: Transformation Output */}
        <div className="lg:col-span-6 flex flex-col bg-slate-50/50">
          <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-700">Transformation Result</span>
              <div className="flex bg-slate-200/80 p-0.5 rounded-lg border border-slate-300">
                <button
                  onClick={() => setOutputMode('rendered')}
                  className={`px-2.5 py-0.5 text-xs font-medium rounded-md transition flex items-center gap-1 ${
                    outputMode === 'rendered' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  <Eye size={12} />
                  <span>Rendered HTML</span>
                </button>
                <button
                  onClick={() => setOutputMode('code')}
                  className={`px-2.5 py-0.5 text-xs font-medium rounded-md transition flex items-center gap-1 ${
                    outputMode === 'code' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  <Code size={12} />
                  <span>HTML Source</span>
                </button>
              </div>
            </div>

            {/* Interactive XSLT Params */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500 text-[11px]">Sort:</span>
              <button
                onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                className="px-2 py-0.5 bg-white border border-slate-200 rounded font-semibold text-slate-700 hover:bg-slate-50"
              >
                {sortOrder === 'asc' ? 'Ascending ↑' : 'Descending ↓'}
              </button>
            </div>
          </div>

          <div className="p-5 flex-1 overflow-y-auto">
            {outputMode === 'rendered' ? (
              <div>
                {preset.id === 'gradebook' && (
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="px-4 py-3 bg-gradient-to-r from-purple-900 to-indigo-900 text-white flex items-center justify-between">
                      <h4 className="font-bold text-sm">Course Grade Report (Fall 2026)</h4>
                      <span className="text-xs text-purple-200 font-mono">XSLT Generated</span>
                    </div>
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase text-[10px]">
                          <th className="px-4 py-2.5">Student ID</th>
                          <th className="px-4 py-2.5">Name</th>
                          <th className="px-4 py-2.5">Score</th>
                          <th className="px-4 py-2.5">Status Evaluation</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-800">
                        {processedData.map(item => (
                          <tr key={item.id} className="hover:bg-purple-50/30 transition-colors">
                            <td className="px-4 py-2.5 font-mono text-slate-500">{item.id}</td>
                            <td className="px-4 py-2.5 font-semibold text-slate-900">{item.name}</td>
                            <td className="px-4 py-2.5 font-mono font-bold text-indigo-700">{item.score}%</td>
                            <td className="px-4 py-2.5">
                              {item.score >= 75 ? (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                                  Distinction
                                </span>
                              ) : item.score >= 60 ? (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">
                                  Pass
                                </span>
                              ) : (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-200">
                                  Needs Improvement
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {preset.id === 'catalog' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {processedData.map(item => (
                      <div key={item.sku} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] uppercase font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                            {item.category}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">{item.sku}</span>
                        </div>
                        <h4 className="font-bold text-sm text-slate-900 mb-2">{item.name}</h4>
                        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                          <span className="text-base font-extrabold text-indigo-600">${item.price.toFixed(2)}</span>
                          <span className="text-xs text-slate-500">In stock: {item.stock}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-slate-950 p-4 rounded-xl text-emerald-300 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
                {`<!-- Generated Output HTML by XSLT Engine -->
<div class="result-container">
  ${processedData.map(item => `  <div class="item-record" id="${item.id || item.sku}">
    <span class="name">${item.name}</span>
    <span class="value">${item.score ? item.score + '%' : '$' + item.price}</span>
  </div>`).join('\n')}
</div>`}
              </div>
            )}
          </div>

          {/* Quick Tip Bar */}
          <div className="p-3 bg-white border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <CheckCircle size={14} className="text-emerald-600" />
              <span>Declarative Separation of Concerns: XML (Data) stays clean; XSLT handles all HTML markup.</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
