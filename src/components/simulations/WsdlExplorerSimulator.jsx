import React, { useState } from 'react';
import { 
  FileCode, 
  Layers, 
  GitBranch, 
  CheckCircle, 
  Info, 
  Sparkles, 
  Code, 
  Globe, 
  Cpu,
  ArrowRight
} from 'lucide-react';

const WSDL_SECTIONS = [
  {
    id: 'types',
    name: '1. <types>',
    category: 'Abstract Definition',
    summary: 'Data Type Definitions (XSD Schemas)',
    description: 'Defines the data types (strings, integers, custom complex objects) exchanged by the web service using W3C XML Schema (XSD) syntax. Prevents type errors between client and server.',
    xml: `<wsdl:types>
  <xs:schema targetNamespace="http://weather.org/types" xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="GetForecastRequest">
      <xs:complexType>
        <xs:sequence>
          <xs:element name="zipCode" type="xs:string"/>
          <xs:element name="daysAhead" type="xs:int"/>
        </xs:sequence>
      </xs:complexType>
    </xs:element>
    <xs:element name="GetForecastResponse">
      <xs:complexType>
        <xs:sequence>
          <xs:element name="temperature" type="xs:decimal"/>
          <xs:element name="condition" type="xs:string"/>
        </xs:sequence>
      </xs:complexType>
    </xs:element>
  </xs:schema>
</wsdl:types>`
  },
  {
    id: 'message',
    name: '2. <message>',
    category: 'Abstract Definition',
    summary: 'Input & Output Parameter Envelopes',
    description: 'Defines the abstract parameters and data elements that constitute an input transmission or output return. Each message consists of one or more typed parts referencing the <types> section.',
    xml: `<wsdl:message name="GetForecastInput">
  <wsdl:part name="parameters" element="tns:GetForecastRequest"/>
</wsdl:message>

<wsdl:message name="GetForecastOutput">
  <wsdl:part name="parameters" element="tns:GetForecastResponse"/>
</wsdl:message>`
  },
  {
    id: 'porttype',
    name: '3. <portType>',
    category: 'Abstract Definition',
    summary: 'Abstract Interface & Operations (Like a Java/C# Interface)',
    description: 'Defines the programmatic operations (methods) exposed by the web service and pairs the input and output messages. This acts as the pure abstract functional contract without specifying network transport.',
    xml: `<wsdl:portType name="WeatherForecastPortType">
  <wsdl:operation name="GetForecast">
    <wsdl:input message="tns:GetForecastInput"/>
    <wsdl:output message="tns:GetForecastOutput"/>
    <wsdl:fault name="InvalidZipFault" message="tns:InvalidZipFaultMessage"/>
  </wsdl:operation>
</wsdl:portType>`
  },
  {
    id: 'binding',
    name: '4. <binding>',
    category: 'Concrete Implementation',
    summary: 'Protocol & Transport Wire Serialization',
    description: 'Binds the abstract portType interface to a concrete network wire protocol (SOAP 1.1 or SOAP 1.2) and transport layer (HTTP, SMTP). Defines whether encoding is RPC-style or Document-Literal.',
    xml: `<wsdl:binding name="WeatherForecastSoapBinding" type="tns:WeatherForecastPortType">
  <soap:binding style="document" transport="http://schemas.xmlsoap.org/soap/http"/>
  <wsdl:operation name="GetForecast">
    <soap:operation soapAction="http://weather.org/GetForecast"/>
    <wsdl:input>
      <soap:body use="literal"/>
    </wsdl:input>
    <wsdl:output>
      <soap:body use="literal"/>
    </wsdl:output>
  </wsdl:operation>
</wsdl:binding>`
  },
  {
    id: 'service',
    name: '5. <service>',
    category: 'Concrete Implementation',
    summary: 'Physical Network Address & Port URL Endpoint',
    description: 'Specifies the physical network address (URL) where the service endpoint is actively deployed and listening for incoming client requests.',
    xml: `<wsdl:service name="WeatherForecastService">
  <wsdl:documentation>Live enterprise atmospheric telemetry service.</wsdl:documentation>
  <wsdl:port name="WeatherForecastSoapPort" binding="tns:WeatherForecastSoapBinding">
    <soap:address location="https://api.weather.org/soap/v1/forecast"/>
  </wsdl:port>
</wsdl:service>`
  }
];

export default function WsdlExplorerSimulator() {
  const [selectedSectionId, setSelectedSectionId] = useState('porttype');

  const activeSection = WSDL_SECTIONS.find(s => s.id === selectedSectionId) || WSDL_SECTIONS[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Top Header */}
      <div className="bg-slate-900 text-white px-5 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/30">
            <FileCode size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold">WSDL Service Contract Architecture Explorer</h3>
            <p className="text-xs text-slate-400">
              Web Services Description Language: Deconstruct the 5 core contractual layers of WSDL 1.1/2.0
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono bg-emerald-950 text-emerald-300 px-2.5 py-1 rounded border border-emerald-800">
            W3C WSDL XML Standard
          </span>
        </div>
      </div>

      {/* Abstract vs Concrete Overview Banner */}
      <div className="bg-slate-100/90 px-5 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between text-xs gap-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 font-semibold text-slate-800">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <span>Abstract Definitions: Types, Message, PortType (What the service does)</span>
          </div>
          <div className="flex items-center gap-1.5 font-semibold text-slate-800">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Concrete Specifications: Binding, Service (How and where to call it)</span>
          </div>
        </div>
      </div>

      {/* Main Split Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
        {/* Left Column: Interactive Tree Navigation */}
        <div className="lg:col-span-5 border-r border-slate-200 p-4 bg-slate-50 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between px-1 mb-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                WSDL Document Tree
              </span>
              <span className="text-[11px] text-slate-500">Click node to inspect</span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200 font-mono text-xs text-slate-900 font-bold mb-3">
              &lt;wsdl:definitions name="WeatherService"&gt;
            </div>

            <div className="space-y-1.5">
              {WSDL_SECTIONS.map(sec => {
                const isSelected = selectedSectionId === sec.id;
                const isAbstract = sec.category.includes('Abstract');

                return (
                  <button
                    key={sec.id}
                    onClick={() => setSelectedSectionId(sec.id)}
                    className={`w-full text-left p-3 rounded-xl border transition flex items-start gap-2.5 ${
                      isSelected
                        ? 'bg-white border-emerald-500 shadow-sm ring-2 ring-emerald-100'
                        : 'bg-white/80 hover:bg-white border-slate-200'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                      isAbstract ? 'bg-blue-500' : 'bg-emerald-500'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-xs text-slate-900">{sec.name}</span>
                        <span className={`text-[9px] uppercase font-bold px-1.5 py-0.5 rounded ${
                          isAbstract ? 'bg-blue-50 text-blue-700' : 'bg-emerald-50 text-emerald-700'
                        }`}>
                          {isAbstract ? 'Abstract' : 'Concrete'}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium truncate mt-0.5">{sec.summary}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200 font-mono text-xs text-slate-900 font-bold mt-3">
              &lt;/wsdl:definitions&gt;
            </div>
          </div>

          <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 text-[11px] text-emerald-950 mt-4 leading-relaxed">
            <strong className="font-semibold text-emerald-900">Automation Note: </strong>
            Modern developer tools (like `wsimport` in Java or `Add Service Reference` in Visual Studio) read this WSDL file to generate client proxy stub code automatically!
          </div>
        </div>

        {/* Right Column: Code & Structural Explanation */}
        <div className="lg:col-span-7 flex flex-col bg-slate-950 text-slate-100">
          <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div>
              <span className="font-mono font-bold text-sm text-emerald-400">{activeSection.name}</span>
              <span className="text-xs text-slate-400 ml-2">({activeSection.summary})</span>
            </div>
            <span className="text-[10px] uppercase font-bold bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
              {activeSection.category}
            </span>
          </div>

          {/* Section Description Card */}
          <div className="p-4 bg-slate-900/60 border-b border-slate-800 text-xs text-slate-300 leading-relaxed">
            <strong className="text-white block mb-1">Architectural Role:</strong>
            {activeSection.description}
          </div>

          {/* XML Code Snippet */}
          <div className="p-4 flex-1 overflow-x-auto">
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">
              // WSDL XML Schema Fragment
            </div>
            <pre className="font-mono text-xs text-emerald-300 leading-relaxed">
              {activeSection.xml}
            </pre>
          </div>

          <div className="p-3 bg-slate-900 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span>Namespace: <code className="text-emerald-400">xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/"</code></span>
            <span className="text-[11px] text-slate-500">Self-describing contract</span>
          </div>
        </div>
      </div>

      {/* Footer Comparison */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
        <Info size={16} className="text-emerald-600 shrink-0 mt-0.5" />
        <div>
          <strong className="text-slate-800">Analogy for Programmers: </strong>
          In object-oriented programming terms: <code className="font-mono">&lt;portType&gt;</code> is equivalent to an <strong>interface</strong> definition in Java or C#; <code className="font-mono">&lt;binding&gt;</code> is the transport protocol decorator; and <code className="font-mono">&lt;service&gt;</code> is the concrete instantiated address where the object instance runs.
        </div>
      </div>
    </div>
  );
}
