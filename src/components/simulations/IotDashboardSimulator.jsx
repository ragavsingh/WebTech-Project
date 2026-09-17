import React, { useState } from 'react';
import { 
  Lightbulb, 
  Thermometer, 
  DoorClosed, 
  DoorOpen, 
  Fan, 
  Camera, 
  Lock, 
  Unlock, 
  Radio, 
  Server, 
  Globe, 
  ArrowRight, 
  RotateCcw, 
  Info,
  CheckCircle2,
  Sliders
} from 'lucide-react';

export default function IotDashboardSimulator() {
  // IoT Devices State
  const [lightOn, setLightOn] = useState(true);
  const [temperature, setTemperature] = useState(22);
  const [doorOpen, setDoorOpen] = useState(false);
  const [fanSpeed, setFanSpeed] = useState(2); // 0: Off, 1: Low, 2: Med, 3: High
  const [cameraMotion, setCameraMotion] = useState(false);
  const [smartLockSecured, setSmartLockSecured] = useState(true);

  const [activePipelineTrace, setActivePipelineTrace] = useState('All 6 IoT edge devices synchronized with MQTT broker.');

  const triggerDeviceAction = (device, actionDesc) => {
    setActivePipelineTrace(
      `[${new Date().toLocaleTimeString()}] ${device} → MQTT Publish (QoS 1) → IoT Gateway → Edge Ingestion → WebSocket Broadcast → Web App Updated: ${actionDesc}`
    );
  };

  const handleToggleLight = () => {
    const next = !lightOn;
    setLightOn(next);
    triggerDeviceAction('Smart Light', next ? 'Turned ON (100% Brightness)' : 'Turned OFF');
  };

  const handleTempChange = (newTemp) => {
    setTemperature(newTemp);
    triggerDeviceAction('Temperature Sensor', `Reported new telemetry reading: ${newTemp}°C`);
  };

  const handleToggleDoor = () => {
    const next = !doorOpen;
    setDoorOpen(next);
    triggerDeviceAction('Motorized Door', next ? 'Door Actuator OPENED' : 'Door Actuator CLOSED');
  };

  const handleToggleFan = () => {
    const nextSpeed = (fanSpeed + 1) % 4;
    setFanSpeed(nextSpeed);
    const speedLabels = ['OFF', 'LOW (450 RPM)', 'MEDIUM (900 RPM)', 'MAX (1400 RPM)'];
    triggerDeviceAction('Smart Fan', `Adjusted speed setting to ${speedLabels[nextSpeed]}`);
  };

  const handleTriggerCamera = () => {
    setCameraMotion(true);
    triggerDeviceAction('Surveillance Camera', 'Infrared motion detected! Streamed 1080p WebRTC RTSP frame to cloud');
    setTimeout(() => setCameraMotion(false), 3000);
  };

  const handleToggleLock = () => {
    const next = !smartLockSecured;
    setSmartLockSecured(next);
    triggerDeviceAction('Smart Deadbolt Lock', next ? 'Engaged Cryptographic Lock' : 'Disengaged with Authorized PIN');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Simulation Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-cyan-500/30">
              <Radio className="w-3.5 h-3.5" /> Cyber-Physical Web Systems
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              IoT Hardware Web Dashboard &amp; Telemetry Pipeline
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Interact with physical actuators and sensors. Follow how telemetry travels from hardware microcontrollers across MQTT brokers, edge gateways, and WebSockets to the web app.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-mono text-cyan-300 border border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> WebSocket Connected
            </span>
          </div>
        </div>

        {/* 4-Stage Architectural Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mt-6">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs">
            <div className="font-bold text-cyan-300">1. IoT Device Layer</div>
            <div className="text-[10px] text-slate-400">ESP32 / Sensors / Actuators</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs">
            <div className="font-bold text-cyan-300">2. Network Protocol</div>
            <div className="text-[10px] text-slate-400">MQTT / CoAP / 6LoWPAN</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs">
            <div className="font-bold text-cyan-300">3. Cloud / Edge Broker</div>
            <div className="text-[10px] text-slate-400">Kafka Ingestion / AWS IoT Core</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs">
            <div className="font-bold text-cyan-300">4. Web Application UI</div>
            <div className="text-[10px] text-slate-400">WebSockets / React Dashboard</div>
          </div>
        </div>
      </div>

      {/* Main Interactive Grid of 6 IoT Devices */}
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* 1. SMART LIGHT */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-2">
                <Lightbulb className={`w-4 h-4 ${lightOn ? 'text-amber-500 fill-amber-500' : 'text-slate-400'}`} />
                Smart Ambient Light
              </span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${lightOn ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600'}`}>
                {lightOn ? 'ON' : 'OFF'}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 text-center font-mono text-xs">
              Brightness: {lightOn ? '100%' : '0%'} • Color: 2700K Warm
            </div>
            <button
              onClick={handleToggleLight}
              className={`w-full py-2 rounded-xl text-xs font-bold transition shadow-sm ${
                lightOn ? 'bg-slate-800 hover:bg-slate-900 text-white' : 'bg-amber-500 hover:bg-amber-600 text-slate-950'
              }`}
            >
              {lightOn ? 'Turn Off Light' : 'Turn On Light'}
            </button>
          </div>

          {/* 2. TEMPERATURE SENSOR */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-2">
                <Thermometer className="w-4 h-4 text-rose-500" />
                Temperature Sensor
              </span>
              <span className="text-xs font-mono font-bold text-slate-900">
                {temperature}°C
              </span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>15°C</span>
                <span>Adjust Ambient Temp</span>
                <span>35°C</span>
              </div>
              <input
                type="range"
                min="15"
                max="35"
                value={temperature}
                onChange={(e) => handleTempChange(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
              />
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 text-center text-[11px] text-slate-500 font-mono">
              Thermostat Status: {temperature > 24 ? 'AC Cooling Engaged' : 'Heating Idle'}
            </div>
          </div>

          {/* 3. MOTORIZED DOOR */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-2">
                {doorOpen ? <DoorOpen className="w-4 h-4 text-emerald-600" /> : <DoorClosed className="w-4 h-4 text-slate-600" />}
                Motorized Garage Door
              </span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${doorOpen ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>
                {doorOpen ? 'OPEN' : 'CLOSED'}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 text-center font-mono text-xs text-slate-600">
              Actuator State: {doorOpen ? 'Limit Switch Tripped (Open)' : 'Sealed & Locked'}
            </div>
            <button
              onClick={handleToggleDoor}
              className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition shadow-sm"
            >
              {doorOpen ? 'Close Door Actuator' : 'Open Door Actuator'}
            </button>
          </div>

          {/* 4. SMART FAN */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-2">
                <Fan className={`w-4 h-4 text-cyan-600 ${fanSpeed > 0 ? 'animate-spin' : ''}`} />
                Ceiling Ventilation Fan
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 font-bold">
                Level {fanSpeed}/3
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 text-center font-mono text-xs text-slate-600">
              PWM Duty Cycle: {fanSpeed === 0 ? '0%' : fanSpeed === 1 ? '33%' : fanSpeed === 2 ? '66%' : '100%'}
            </div>
            <button
              onClick={handleToggleFan}
              className="w-full py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold transition shadow-sm"
            >
              Cycle Fan Speed ({fanSpeed === 3 ? 'Set OFF' : 'Speed Up'})
            </button>
          </div>

          {/* 5. SURVEILLANCE CAMERA */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-2">
                <Camera className="w-4 h-4 text-indigo-600" />
                Motion Camera Feed
              </span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${cameraMotion ? 'bg-rose-100 text-rose-800 animate-pulse' : 'bg-emerald-100 text-emerald-800'}`}>
                {cameraMotion ? 'MOTION ALERT' : 'STREAMING'}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 text-emerald-400 text-center font-mono text-xs">
              FPS: 30 • Bitrate: 4.2 Mbps H.265
            </div>
            <button
              onClick={handleTriggerCamera}
              className="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition shadow-sm"
            >
              Simulate Motion Trigger
            </button>
          </div>

          {/* 6. SMART LOCK */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-2">
                {smartLockSecured ? <Lock className="w-4 h-4 text-emerald-600" /> : <Unlock className="w-4 h-4 text-amber-600" />}
                Smart Deadbolt
              </span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${smartLockSecured ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                {smartLockSecured ? 'SECURED' : 'UNLOCKED'}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 text-center font-mono text-xs text-slate-600">
              Protocol: Bluetooth Mesh / Zigbee 3.0
            </div>
            <button
              onClick={handleToggleLock}
              className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold transition shadow-sm"
            >
              {smartLockSecured ? 'Enter PIN to Unlock' : 'Lock Deadbolt'}
            </button>
          </div>
        </div>

        {/* Real-Time Telemetry Bus Pipeline Tracer */}
        <div className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs space-y-1.5">
          <div className="text-[11px] text-cyan-400 font-bold uppercase tracking-wider flex items-center justify-between">
            <span>Live MQTT Telemetry Event Bus Log:</span>
            <span className="text-slate-400 font-normal">Broker: tcp://mqtt.iot.local:1883</span>
          </div>
          <p className="text-slate-300 leading-relaxed">
            {activePipelineTrace}
          </p>
        </div>

        {/* Educational Note */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 font-semibold">Why MQTT &amp; WebSockets? </strong>
            HTTP is request-response and header-heavy (~800 bytes per request), which drains battery power on tiny microcontrollers. IoT uses <em>MQTT (Message Queuing Telemetry Transport)</em>—a publish-subscribe protocol with a 2-byte header. An IoT gateway translates MQTT topics into persistent <em>WebSockets</em> so web dashboards update in real time without continuous polling.
          </div>
        </div>
      </div>
    </div>
  );
}
