import React, { useState } from 'react';
import { 
  Search, 
  Database, 
  Building2, 
  FileCode, 
  ArrowRight, 
  CheckCircle, 
  Tag, 
  ExternalLink, 
  Sparkles,
  Info,
  Server,
  Layers,
  BookOpen
} from 'lucide-react';

const SIMULATED_SERVICES = [
  {
    id: 'svc-pay',
    name: 'GlobalPay Universal Settlement Service',
    category: 'Financial Services / Payment Gateways',
    naicsCode: '522320',
    provider: 'FinTech Transact Corp',
    contact: 'api-support@globalpay.io',
    description: 'Enterprise credit card authorization, 3D Secure 2.0 validation, and multicurrency clearing.',
    wsdlUri: 'http://services.globalpay.io/wsdl/v2/settlement.wsdl',
    tModel: 'uuid:99b1a-pay-iso20022-tmodel',
    operations: ['authorizePayment', 'captureFunds', 'refundTransaction', 'getSettlementStatus']
  },
  {
    id: 'svc-weather',
    name: 'AtmoCast Global Meteorology API',
    category: 'Scientific / Atmospheric Data',
    naicsCode: '541990',
    provider: 'Global Weather Bureau',
    contact: 'data@atmocast.org',
    description: 'Real-time doppler radar telemetry, 14-day isobaric forecasts, and severe storm warnings.',
    wsdlUri: 'http://api.atmocast.org/services/v1/weatherForecast.wsdl',
    tModel: 'uuid:33a01-meteo-wmo-tmodel',
    operations: ['getCurrentConditions', 'getHourlyForecast', 'getStormAlerts']
  },
  {
    id: 'svc-fx',
    name: 'ForexRate Currency Conversion Gateway',
    category: 'Banking / Foreign Exchange',
    naicsCode: '523130',
    provider: 'Continental Reserve Banking Group',
    contact: 'exchange@reservebank.eu',
    description: 'Live spot conversion rates for 168 ISO fiat currencies and automated cross-rate calculation.',
    wsdlUri: 'http://fx.reservebank.eu/soap/exchangeRates.wsdl',
    tModel: 'uuid:77c44-forex-ecb-tmodel',
    operations: ['getSpotRate', 'convertAmount', 'getHistoricalRates']
  },
  {
    id: 'svc-flight',
    name: 'SkyLink GDS Airline Flight Booking Service',
    category: 'Transportation / Travel & Tourism',
    naicsCode: '481111',
    provider: 'Aviation Global Distribution Systems',
    contact: 'partnerships@skylink-gds.aero',
    description: 'Search seat inventories across 85 global airline carriers, issue PNRs, and manage e-tickets.',
    wsdlUri: 'http://gds.skylink.aero/wsdl/flightReservation.wsdl',
    tModel: 'uuid:11e99-iata-ndc-tmodel',
    operations: ['searchFlights', 'reserveSeat', 'issueElectronicTicket', 'cancelReservation']
  }
];

export default function UddiDiscoverySimulator() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState('svc-pay');
  const [activeUddiPage, setActiveUddiPage] = useState('all'); // 'all' | 'white' | 'yellow' | 'green'

  const filteredServices = SIMULATED_SERVICES.filter(svc => 
    svc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    svc.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    svc.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
    svc.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedService = SIMULATED_SERVICES.find(s => s.id === selectedServiceId) || SIMULATED_SERVICES[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Top Header */}
      <div className="bg-slate-900 text-white px-5 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/20 text-blue-400 rounded-xl border border-blue-500/30">
            <BookOpen size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold">UDDI Service Discovery &amp; Registry Laboratory</h3>
            <p className="text-xs text-slate-400">
              Universal Description, Discovery and Integration: Publish, catalog, and query web service contracts
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-blue-300 bg-blue-950 px-2.5 py-1 rounded border border-blue-800">
            UDDI v3.0 Specification
          </span>
        </div>
      </div>

      {/* 3-Role Discovery Flow */}
      <div className="bg-slate-100/90 px-5 py-3 border-b border-slate-200">
        <div className="flex flex-wrap items-center justify-between text-xs gap-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
            <div>
              <div className="font-bold text-slate-900">Service Provider</div>
              <div className="text-[11px] text-slate-500">Publishes WSDL to Registry</div>
            </div>
          </div>
          <ArrowRight size={16} className="text-slate-400 hidden sm:block" />
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">2</div>
            <div>
              <div className="font-bold text-slate-900">UDDI Central Registry</div>
              <div className="text-[11px] text-slate-500">White, Yellow &amp; Green Pages</div>
            </div>
          </div>
          <ArrowRight size={16} className="text-slate-400 hidden sm:block" />
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">3</div>
            <div>
              <div className="font-bold text-slate-900">Service Consumer</div>
              <div className="text-[11px] text-slate-500">Discovers &amp; Binds to Endpoint</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        {/* Left Column: Search & Registry Catalog */}
        <div className="lg:col-span-5 border-r border-slate-200 flex flex-col bg-slate-50">
          <div className="p-3 border-b border-slate-200 bg-white">
            <div className="relative">
              <Search size={14} className="text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search registered services by name or category..."
                className="w-full pl-8 pr-3 py-1.5 bg-slate-100 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-slate-200/80">
            {filteredServices.length === 0 ? (
              <div className="p-6 text-center text-xs text-slate-400">
                No services matched your query.
              </div>
            ) : (
              filteredServices.map(svc => {
                const isSelected = selectedServiceId === svc.id;
                return (
                  <button
                    key={svc.id}
                    onClick={() => setSelectedServiceId(svc.id)}
                    className={`w-full text-left p-3.5 transition flex flex-col gap-1 ${
                      isSelected ? 'bg-white shadow-xs border-l-4 border-l-blue-600' : 'hover:bg-slate-100/80'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                        NAICS: {svc.naicsCode}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">WSDL</span>
                    </div>
                    <h4 className="font-bold text-xs text-slate-900 line-clamp-1">{svc.name}</h4>
                    <p className="text-[11px] text-slate-500 line-clamp-1">{svc.category}</p>
                    <span className="text-[10px] text-slate-400">{svc.provider}</span>
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* Right Column: UDDI 3-Pages Inspector */}
        <div className="lg:col-span-7 flex flex-col bg-white">
          <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold text-slate-700">UDDI Entry Structure</span>
            
            <div className="flex bg-slate-200/80 p-0.5 rounded-lg text-xs">
              {['all', 'white', 'yellow', 'green'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveUddiPage(tab)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-semibold capitalize transition ${
                    activeUddiPage === tab ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab === 'all' ? 'All Sections' : `${tab} Pages`}
                </button>
              ))}
            </div>
          </div>

          <div className="p-5 flex-1 overflow-y-auto space-y-4">
            {/* White Pages (Contact & Identity) */}
            {(activeUddiPage === 'all' || activeUddiPage === 'white') && (
              <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                    <span>White Pages (Business Entity &amp; Contact)</span>
                  </div>
                  <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                    Identity
                  </span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div><strong className="text-slate-900">Service Name:</strong> {selectedService.name}</div>
                  <div><strong className="text-slate-900">Providing Organization:</strong> {selectedService.provider}</div>
                  <div><strong className="text-slate-900">Contact Address:</strong> <span className="font-mono text-blue-600">{selectedService.contact}</span></div>
                  <div><strong className="text-slate-900">Overview:</strong> {selectedService.description}</div>
                </div>
              </div>
            )}

            {/* Yellow Pages (Taxonomy & Categorization) */}
            {(activeUddiPage === 'all' || activeUddiPage === 'yellow') && (
              <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-950">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span>Yellow Pages (Industrial Taxonomy &amp; Categorization)</span>
                  </div>
                  <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded border border-amber-200">
                    Taxonomy
                  </span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div><strong className="text-slate-900">Primary Classification:</strong> {selectedService.category}</div>
                  <div><strong className="text-slate-900">NAICS Industry Code:</strong> <span className="font-mono font-bold text-amber-900">{selectedService.naicsCode}</span></div>
                  <div><strong className="text-slate-900">UNSPSC Standard:</strong> <span className="font-mono text-slate-600">81112000 (Software &amp; Web Services)</span></div>
                </div>
              </div>
            )}

            {/* Green Pages (Technical Bindings & WSDL) */}
            {(activeUddiPage === 'all' || activeUddiPage === 'green') && (
              <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-950">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span>Green Pages (Technical Specification &amp; tModel)</span>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">
                    Binding Template
                  </span>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <div>
                    <strong className="text-slate-900">WSDL Contract URI:</strong>
                    <div className="bg-white p-1.5 rounded border border-emerald-200 font-mono text-[11px] text-emerald-800 mt-1 select-all break-all">
                      {selectedService.wsdlUri}
                    </div>
                  </div>
                  <div>
                    <strong className="text-slate-900">UDDI tModel Fingerprint:</strong>
                    <div className="bg-white p-1.5 rounded border border-emerald-200 font-mono text-[11px] text-slate-700 mt-1">
                      {selectedService.tModel}
                    </div>
                  </div>
                  <div>
                    <strong className="text-slate-900">Supported Operations:</strong>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {selectedService.operations.map(op => (
                        <span key={op} className="bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-md font-mono text-[10px] border border-emerald-200 font-semibold">
                          {op}()
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footnote */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
        <Info size={16} className="text-blue-600 shrink-0 mt-0.5" />
        <div>
          <strong className="text-slate-800">Concept Note: </strong>
          UDDI operates like the telephone directory for web services: <strong>White Pages</strong> provide company identity and contact info; <strong>Yellow Pages</strong> group services by industrial taxonomies (NAICS/UNSPSC); and <strong>Green Pages</strong> provide the exact technical WSDL pointers and protocol bindings needed for client code generators to bind to the service.
        </div>
      </div>
    </div>
  );
}
