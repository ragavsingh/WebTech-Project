import React, { useState } from 'react';
import { 
  Terminal, 
  Code, 
  Layers, 
  Server, 
  Search, 
  Smartphone, 
  Activity, 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw, 
  Info,
  Sparkles,
  Cpu
} from 'lucide-react';

const LIFECYCLE_STAGES = [
  {
    step: 1,
    name: '1. Design',
    category: 'Architecture & Modeling',
    desc: 'Architects choose between Contract-First (writing WSDL/XSD schemas before writing code) or Code-First (writing classes and letting tools auto-generate WSDL).',
    tools: 'XMLSpy, Eclipse WSDL Editor, OpenAPI Studio',
    codeTitle: 'orderServiceContract.xsd (Data Contract)',
    code: `<!-- Contract-First Schema Design -->
<xs:element name="PlaceOrderRequest">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="sku" type="xs:string" />
      <xs:element name="quantity" type="xs:int" />
    </xs:sequence>
  </xs:complexType>
</xs:element>`
  },
  {
    step: 2,
    name: '2. Implement',
    category: 'Backend Programming',
    desc: 'Developers write the underlying enterprise business logic, integrate with relational databases, and enforce transaction management.',
    tools: 'Java (JAX-WS), C# (.NET Core / WCF), Python (Zeep/Spyne)',
    codeTitle: 'OrderServiceImpl.java (Business Logic)',
    code: `public class OrderServiceImpl implements OrderService {
  @Autowired private OrderRepository orderRepo;
  
  public OrderConfirmation placeOrder(String sku, int qty) {
    if (qty <= 0) throw new IllegalArgumentException("Invalid qty");
    return orderRepo.createOrder(sku, qty);
  }
}`
  },
  {
    step: 3,
    name: '3. Expose',
    category: 'Endpoint Declaration',
    desc: 'The developer applies annotations to bind the Java/C# methods to standard SOAP endpoints and generates the concrete WSDL contract.',
    tools: 'JAX-WS @WebService annotations, WCF ServiceContract',
    codeTitle: 'OrderEndpoint.java (JAX-WS Annotations)',
    code: `@WebService(
  name = "OrderPortType", 
  targetNamespace = "http://enterprise.org/orders"
)
public interface OrderService {
  @WebMethod(operationName = "PlaceOrder")
  OrderConfirmation placeOrder(
    @WebParam(name = "sku") String sku,
    @WebParam(name = "quantity") int qty
  );
}`
  },
  {
    step: 4,
    name: '4. Deploy',
    category: 'Hosting & Infrastructure',
    desc: 'The compiled service package (WAR, container, or executable) is deployed to an application server or Kubernetes cluster with SSL certificates.',
    tools: 'Docker, Apache Tomcat, WildFly, Microsoft IIS, Envoy',
    codeTitle: 'Dockerfile / Server Deployment Descriptor',
    code: `FROM openjdk:17-slim
WORKDIR /app
COPY target/order-service.jar app.jar
EXPOSE 8080 8443
ENTRYPOINT ["java", "-jar", "app.jar"]`
  },
  {
    step: 5,
    name: '5. Discover',
    category: 'Registry & Cataloging',
    desc: 'The deployed WSDL endpoint is published to a central service registry (UDDI, API Gateway catalog, or developer portal) for partner discovery.',
    tools: 'UDDI v3 Registry, Kong Gateway, AWS API Gateway, Apigee',
    codeTitle: 'Registry Publication Entry',
    code: `// Published Service Discovery Record
Service: OrderService v2.4
Location: https://api.enterprise.org/soap/orders.wsdl
Category: Supply Chain / E-Commerce Logistics
SLA: 99.99% Availability Guaranteed`
  },
  {
    step: 6,
    name: '6. Consume',
    category: 'Client Integration',
    desc: 'Downstream client developers fetch the WSDL, run automated code generators to create client proxy stubs, and invoke remote operations as local methods.',
    tools: 'wsimport (Java), dotnet-svcutil (C#), SOAP UI, Postman',
    codeTitle: 'ClientApp.java (Consuming via Proxy Stub)',
    code: `// Generate client: wsimport -keep https://api.enterprise.org/orders.wsdl
OrderServiceService factory = new OrderServiceService();
OrderPortType client = factory.getOrderPort();

// Invoke remote operation as if it were a local object method!
OrderConfirmation result = client.placeOrder("GPU-5090", 1);
System.out.println("Order status: " + result.getStatus());`
  },
  {
    step: 7,
    name: '7. Monitor',
    category: 'Telemetry & Security',
    desc: 'DevOps engineers and SREs monitor endpoint latency, validate WS-Security cryptographic tokens, enforce rate limits, and audit transaction logs.',
    tools: 'Prometheus, Grafana, OpenTelemetry, Datadog',
    codeTitle: 'Telemetry & Health Metrics Log',
    code: `[2026-09-18T00:30:12Z] INCOMING SOAP POST /orders
Client IP: 198.51.100.44 | Auth: WS-Security X.509 Passed
Execution: 42ms | Status: HTTP 200 OK | Response: 1.2 KB
Active Worker Threads: 14/200 | CPU: 12% | Memory: 410MB`
  }
];

export default function WsLifecycleSimulator() {
  const [currentStep, setCurrentStep] = useState(1);

  const activeStage = LIFECYCLE_STAGES[currentStep - 1];

  const handleNext = () => {
    if (currentStep < LIFECYCLE_STAGES.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-6">
      {/* Top Header */}
      <div className="bg-slate-900 text-white px-5 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/20 text-blue-400 rounded-xl border border-blue-500/30">
            <Cpu size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold">Web Service Engineering &amp; Deployment Lifecycle</h3>
            <p className="text-xs text-slate-400">
              Trace the 7 sequential phases: Design &rarr; Implement &rarr; Expose &rarr; Deploy &rarr; Discover &rarr; Consume &rarr; Monitor
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono bg-blue-950 text-blue-300 px-2.5 py-1 rounded border border-blue-800">
            Enterprise SDLC
          </span>
        </div>
      </div>

      {/* 7-Step Navigation Bar */}
      <div className="bg-slate-100/90 px-4 py-3 border-b border-slate-200">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {LIFECYCLE_STAGES.map(stage => {
            const isCurrent = currentStep === stage.step;
            const isDone = currentStep > stage.step;

            return (
              <button
                key={stage.step}
                onClick={() => setCurrentStep(stage.step)}
                className={`p-2.5 rounded-xl text-left border transition text-xs ${
                  isCurrent
                    ? 'bg-blue-600 text-white border-blue-700 shadow-sm font-bold'
                    : isDone
                    ? 'bg-white text-slate-800 border-slate-300 font-semibold'
                    : 'bg-slate-50 text-slate-400 border-slate-200 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] uppercase font-bold tracking-wider ${
                    isCurrent ? 'text-blue-100' : 'text-slate-400'
                  }`}>
                    Phase {stage.step}
                  </span>
                  {isDone && <CheckCircle2 size={12} className="text-emerald-500" />}
                </div>
                <div className="truncate">{stage.name.replace(/^\d+\.\s*/, '')}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Inspection Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        {/* Left: Explanations & Tooling */}
        <div className="lg:col-span-5 border-r border-slate-200 p-5 bg-white flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                {activeStage.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">Stage {activeStage.step} of 7</span>
            </div>

            <h4 className="text-base font-bold text-slate-900 mb-2">{activeStage.name}</h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {activeStage.desc}
            </p>

            {/* Tooling Card */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <span className="font-semibold text-slate-700 block mb-1">Industry Tooling &amp; Frameworks:</span>
              <div className="font-mono text-slate-600 text-[11px] leading-relaxed">
                {activeStage.tools}
              </div>
            </div>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100">
            <button
              onClick={handleReset}
              className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 rounded-lg transition flex items-center gap-1"
            >
              <RotateCcw size={12} />
              <span>Reset</span>
            </button>

            <button
              onClick={handleNext}
              disabled={currentStep >= LIFECYCLE_STAGES.length}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-semibold text-xs rounded-xl shadow-sm transition flex items-center gap-1.5"
            >
              <span>{currentStep >= LIFECYCLE_STAGES.length ? 'Lifecycle Complete' : 'Next Phase'}</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* Right: Code / Artifact Viewer */}
        <div className="lg:col-span-7 flex flex-col bg-slate-950 text-slate-100">
          <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs">
            <span className="font-mono text-emerald-400 flex items-center gap-2">
              <Terminal size={14} className="text-blue-400" />
              {activeStage.codeTitle}
            </span>
            <span className="text-[10px] text-slate-400 uppercase font-mono">Stage Artifact</span>
          </div>

          <div className="p-4 flex-1 overflow-x-auto">
            <pre className="font-mono text-xs text-emerald-300 leading-relaxed">
              {activeStage.code}
            </pre>
          </div>

          <div className="p-3 bg-slate-900/80 border-t border-slate-800 text-xs text-slate-400">
            <span className="text-slate-300 font-semibold">Contract Paradigm: </span>
            Contract-First development guarantees that the external API schema remains stable even when internal Java/C# backend implementations are refactored.
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="p-4 bg-blue-50/70 border-t border-blue-100 text-xs text-blue-950 flex items-start gap-2.5">
        <Info size={16} className="text-blue-600 shrink-0 mt-0.5" />
        <div>
          <strong className="text-blue-900">Engineering Distinction: </strong>
          In <strong>Contract-First</strong> development, developers define the WSDL/XSD first to establish a rigorous contractual interface before implementation. In <strong>Code-First</strong>, developers write backend code and automatically export WSDL using compiler annotations (e.g. `@WebService`).
        </div>
      </div>
    </div>
  );
}
