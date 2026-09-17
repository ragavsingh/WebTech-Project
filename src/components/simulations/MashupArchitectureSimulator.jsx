import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  CloudSun, 
  Landmark, 
  ToggleLeft, 
  ToggleRight, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  Info,
  ExternalLink
} from 'lucide-react';

const CITIES = [
  {
    id: 'paris',
    name: 'Paris, France',
    lat: 48.8566,
    lon: 2.3522,
    mapData: {
      zoom: 13,
      center: '48.8566° N, 2.3522° E',
      tileLayer: 'OpenStreetMap Carto Vector'
    },
    weatherData: {
      temp: '19°C',
      condition: 'Mild Breeze',
      humidity: '52%',
      source: 'OpenWeatherMap API v3'
    },
    attractions: [
      { name: 'Eiffel Tower', rating: '4.8 ★', category: 'Monument', entry: '€28' },
      { name: 'Louvre Museum', rating: '4.7 ★', category: 'Art Gallery', entry: '€17' },
      { name: 'Notre-Dame', rating: '4.9 ★', category: 'Cathedral', entry: 'Free' }
    ]
  },
  {
    id: 'tokyo',
    name: 'Tokyo, Japan',
    lat: 35.6762,
    lon: 139.6503,
    mapData: {
      zoom: 14,
      center: '35.6762° N, 139.6503° E',
      tileLayer: 'OpenStreetMap Carto Vector'
    },
    weatherData: {
      temp: '23°C',
      condition: 'Partly Cloudy',
      humidity: '61%',
      source: 'OpenWeatherMap API v3'
    },
    attractions: [
      { name: 'Senso-ji Temple', rating: '4.9 ★', category: 'Historic Site', entry: 'Free' },
      { name: 'Tokyo Skytree', rating: '4.6 ★', category: 'Observation Deck', entry: '¥2,100' },
      { name: 'Shibuya Crossing', rating: '4.7 ★', category: 'Public Square', entry: 'Free' }
    ]
  },
  {
    id: 'sanfrancisco',
    name: 'San Francisco, USA',
    lat: 37.7749,
    lon: -122.4194,
    mapData: {
      zoom: 12,
      center: '37.7749° N, 122.4194° W',
      tileLayer: 'OpenStreetMap Carto Vector'
    },
    weatherData: {
      temp: '16°C',
      condition: 'Coastal Fog',
      humidity: '78%',
      source: 'OpenWeatherMap API v3'
    },
    attractions: [
      { name: 'Golden Gate Bridge', rating: '4.9 ★', category: 'Landmark', entry: 'Free' },
      { name: 'Alcatraz Island', rating: '4.8 ★', category: 'Historic Prison', entry: '$45' },
      { name: 'Fisherman’s Wharf', rating: '4.5 ★', category: 'Waterfront', entry: 'Free' }
    ]
  }
];

export default function MashupArchitectureSimulator() {
  const [selectedCityId, setSelectedCityId] = useState('paris');
  const [enableMapApi, setEnableMapApi] = useState(true);
  const [enableWeatherApi, setEnableWeatherApi] = useState(true);
  const [enableAttractionsApi, setEnableAttractionsApi] = useState(true);

  const activeCity = CITIES.find(c => c.id === selectedCityId);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-violet-500/30">
              <Layers className="w-3.5 h-3.5" /> Multi-Source API Mashup Builder
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Composite Travel Dashboard Mashup
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              A Web Mashup aggregates distinct third-party APIs into a single seamless user experience. Toggle individual API streams below to observe how the composite application adapts.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <select
              value={selectedCityId}
              onChange={(e) => setSelectedCityId(e.target.value)}
              className="bg-white/10 text-white border border-white/20 px-3 py-1.5 rounded-lg text-xs font-semibold focus:outline-none"
            >
              {CITIES.map(c => (
                <option key={c.id} value={c.id} className="text-slate-900">{c.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* API Stream Toggles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
          <button
            onClick={() => setEnableMapApi(!enableMapApi)}
            className={`p-3 rounded-xl border text-left flex items-center justify-between transition ${
              enableMapApi
                ? 'bg-white text-slate-900 border-white shadow'
                : 'bg-white/5 text-slate-400 border-white/10'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-bold">
              <MapPin className={`w-4 h-4 ${enableMapApi ? 'text-violet-600' : 'text-slate-500'}`} />
              Source A: Map API
            </div>
            <span className={`text-[11px] font-mono font-bold ${enableMapApi ? 'text-emerald-600' : 'text-slate-400'}`}>
              {enableMapApi ? 'CONNECTED' : 'DISABLED'}
            </span>
          </button>

          <button
            onClick={() => setEnableWeatherApi(!enableWeatherApi)}
            className={`p-3 rounded-xl border text-left flex items-center justify-between transition ${
              enableWeatherApi
                ? 'bg-white text-slate-900 border-white shadow'
                : 'bg-white/5 text-slate-400 border-white/10'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-bold">
              <CloudSun className={`w-4 h-4 ${enableWeatherApi ? 'text-violet-600' : 'text-slate-500'}`} />
              Source B: Weather API
            </div>
            <span className={`text-[11px] font-mono font-bold ${enableWeatherApi ? 'text-emerald-600' : 'text-slate-400'}`}>
              {enableWeatherApi ? 'CONNECTED' : 'DISABLED'}
            </span>
          </button>

          <button
            onClick={() => setEnableAttractionsApi(!enableAttractionsApi)}
            className={`p-3 rounded-xl border text-left flex items-center justify-between transition ${
              enableAttractionsApi
                ? 'bg-white text-slate-900 border-white shadow'
                : 'bg-white/5 text-slate-400 border-white/10'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-bold">
              <Landmark className={`w-4 h-4 ${enableAttractionsApi ? 'text-violet-600' : 'text-slate-500'}`} />
              Source C: Places API
            </div>
            <span className={`text-[11px] font-mono font-bold ${enableAttractionsApi ? 'text-emerald-600' : 'text-slate-400'}`}>
              {enableAttractionsApi ? 'CONNECTED' : 'DISABLED'}
            </span>
          </button>
        </div>
      </div>

      {/* Main Unified Mashup Output */}
      <div className="p-6">
        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
            <div>
              <span className="text-[11px] font-bold text-violet-700 uppercase tracking-wider">
                Composite Output Dashboard
              </span>
              <h4 className="text-xl font-bold text-slate-900">{activeCity.name}</h4>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Active Data Sources:</span>
              <span className="font-bold text-slate-800">
                {[enableMapApi && 'Map', enableWeatherApi && 'Weather', enableAttractionsApi && 'Places'].filter(Boolean).join(' + ') || 'None'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Map Service Box */}
            <div className="lg:col-span-7">
              {enableMapApi ? (
                <div className="rounded-xl border border-slate-300 bg-white overflow-hidden shadow-sm h-72 flex flex-col justify-between p-4 relative">
                  <div className="flex items-center justify-between text-xs z-10">
                    <span className="px-2 py-0.5 rounded bg-violet-100 text-violet-800 font-mono text-[10px] font-bold flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Map Geolocation Layer Active
                    </span>
                    <span className="text-slate-500 text-[11px] font-mono">{activeCity.mapData.center}</span>
                  </div>

                  {/* Simulated Cartographic Grid Background */}
                  <div className="my-auto text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-violet-600 text-white mx-auto flex items-center justify-center shadow-lg animate-bounce">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-bold text-slate-800">{activeCity.name} Geographic Center</div>
                    <div className="text-[11px] text-slate-500 font-mono">Zoom Level {activeCity.mapData.zoom} • {activeCity.mapData.tileLayer}</div>
                  </div>

                  <div className="text-[10px] text-slate-400 border-t border-slate-100 pt-1 flex justify-between z-10">
                    <span>© OpenStreetMap contributors</span>
                    <span>REST GeoJSON Bounds</span>
                  </div>
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-slate-300 bg-slate-100/60 h-72 flex flex-col items-center justify-center text-slate-400 p-6 text-center space-y-2">
                  <MapPin className="w-8 h-8 text-slate-400" />
                  <div className="text-xs font-bold text-slate-600">Map API Layer Disabled</div>
                  <div className="text-[11px] text-slate-500 max-w-xs">
                    The mashup handles the absence of the mapping service gracefully without crashing other application components.
                  </div>
                </div>
              )}
            </div>

            {/* Weather & Places Column */}
            <div className="lg:col-span-5 space-y-4">
              {/* Weather Block */}
              {enableWeatherApi ? (
                <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between text-xs text-blue-700 font-bold">
                    <span className="flex items-center gap-1.5"><CloudSun className="w-4 h-4" /> Live Weather Feed</span>
                    <span className="text-[10px] font-mono text-blue-600">HTTP 200 OK</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{activeCity.weatherData.temp}</div>
                      <div className="text-xs text-slate-600">{activeCity.weatherData.condition}</div>
                    </div>
                    <div className="text-right text-xs text-slate-500">
                      <div>Humidity: {activeCity.weatherData.humidity}</div>
                      <div className="text-[10px] font-mono text-slate-400">{activeCity.weatherData.source}</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-3 rounded-xl border border-dashed border-slate-300 text-center text-slate-400 text-xs">
                  Weather API Stream Offline
                </div>
              )}

              {/* Attractions Block */}
              {enableAttractionsApi ? (
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-700 font-bold">
                    <span className="flex items-center gap-1.5"><Landmark className="w-4 h-4 text-violet-600" /> Key Attractions</span>
                    <span className="text-[10px] font-mono text-slate-400">Places API</span>
                  </div>
                  <div className="space-y-2">
                    {activeCity.attractions.map((attr, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                        <div>
                          <div className="font-semibold text-slate-800">{attr.name}</div>
                          <div className="text-[10px] text-slate-400">{attr.category} • {attr.entry}</div>
                        </div>
                        <span className="font-bold text-amber-600 text-[11px]">{attr.rating}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-3 rounded-xl border border-dashed border-slate-300 text-center text-slate-400 text-xs">
                  Tourism & Places API Stream Offline
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Educational Note */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 font-semibold">Client-Side vs Server-Side Mashups: </strong>
            In a <em>Client-Side Mashup</em>, the user&apos;s browser makes independent asynchronous AJAX/Fetch calls directly to various third-party API endpoints and merges the JSON data in the DOM (subject to CORS policies). In a <em>Server-Side Mashup</em>, an intermediary proxy backend fetches and joins the external feeds, returning a pre-assembled composite payload to the browser.
          </div>
        </div>
      </div>
    </div>
  );
}
