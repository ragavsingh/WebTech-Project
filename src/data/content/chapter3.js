/**
 * Chapter 3 Documentation Content: Web Services, Distributed Architectures & AJAX
 */

export const CHAPTER_3_TOPICS = {
  '3.1-intro-web-services': {
    id: '3.1-intro-web-services',
    chapterId: 'chapter-3',
    chapterNumber: 3,
    chapterTitle: 'Web Services, Distributed Architectures & AJAX',
    code: '3.1',
    title: 'Introduction to Web Services & The SOA Triangle',
    subtitle: 'Service Provider, Registry, and Consumer roles, RPC vs Document-centric interoperability',
    difficulty: 'Fundamental',
    readTime: '16 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'A Web Service is a standardized software system designed to support interoperable machine-to-machine interaction over a network. It enables heterogeneous applications written in different programming languages and running on different operating systems to communicate seamlessly using XML or JSON over standard Internet protocols like HTTP.',
      analogy: 'Imagine an international business conference where representatives speak German, Japanese, Spanish, and Arabic. If the German speaker tries to talk directly to the Japanese speaker in German, communication fails. A Web Service is like an official translation protocol: everyone agrees to write their business contracts in standardized English (XML/JSON) and send them via international registered courier (HTTP). It doesn\'t matter what language their internal thoughts are in.',
      keyPoints: [
        'Service-Oriented Architecture (SOA): An architectural style where software functionality is modularized into discoverable, loosely coupled, autonomous services.',
        'The SOA Triangle: 1. Service Provider (creates & hosts), 2. Service Registry (publishes & catalogs), 3. Service Consumer (discovers & binds).',
        'Loose Coupling: The consumer only knows the public contract (WSDL or OpenAPI), not the server\'s internal database or programming language.',
        'Interoperability: Java mainframes can call .NET services on Windows, which can call Node.js microservices on Linux.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'The SOA Triangle governs the three fundamental roles and their protocol operations:',
      diagram: `
+------------------------------------------------------------------------+
|                      The SOA Triangle Architecture                     |
+------------------------------------------------------------------------+

                             +------------------+
                             | Service Registry |
                             | (e.g. UDDI)      |
                             +------------------+
                               /              ^
                              / (2. Find)      \\ (1. Publish)
                             /                  \\
                            v                    \\
             +--------------------+            +--------------------+
             |  Service Consumer  |----------->|  Service Provider  |
             |  (Client / App)    | (3. Bind)  |  (Web Service Host)|
             +--------------------+            +--------------------+

Protocol Operations:
1. Publish: Provider publishes service interface (WSDL) to the Registry (UDDI).
2. Find:    Consumer searches Registry for matching capabilities and downloads WSDL.
3. Bind:    Consumer generates client stubs and invokes operations via SOAP/HTTP.
`,
      specifications: [
        'W3C Web Services Architecture (W3C Working Group Note 11 February 2004).',
        'OASIS SOA Reference Model Standard.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Visa, Sabre Airline Global Distribution System & Banking Mainframes',
      scenario: 'Multi-Bank Credit Card Authorization and Global Flight Reservations',
      howItWorks: 'When you book a flight on Expedia, Expedia does not maintain real-time seat inventory for 400 global airlines. Expedia\'s servers invoke Web Services exposed by Sabre or Amadeus. Sabre calls Delta Airlines (IBM Mainframe running COBOL), Air France (Java backend on Linux), and Visa payment gateway (C++ on Oracle). Each party communicates via standardized XML/SOAP web services over secure HTTPS.',
      impact: 'Enables cross-enterprise global commerce across thousands of independent corporate boundaries in sub-second transaction times.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Modern enterprise systems deploy and manage web services across microservice meshes and API gateways.',
      tools: [
        'SoapUI / Postman: Industry-standard GUI for querying and inspecting enterprise Web Services.',
        'Apache CXF / Spring Web Services: Industrial Java frameworks for contract-first web services.',
        'Kong / Apigee API Gateway: Enterprise routers managing web service authentication and rate limiting.'
      ],
      standards: ['W3C Web Services Core', 'WS-I Basic Profile 1.1 (Interoperability)']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'xml',
      explanation: 'A raw enterprise XML Web Service invocation showing client payload and server response:',
      code: `<!-- 1. Outgoing Web Service Request (Consumer -> Provider) -->
POST /ws/currencyConverter HTTP/1.1
Host: api.globalbanking.org
Content-Type: application/soap+xml; charset=utf-8

<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
               xmlns:curr="http://globalbanking.org/currency">
  <soap:Header/>
  <soap:Body>
    <curr:ConvertCurrencyRequest>
      <curr:fromCurrency>USD</curr:fromCurrency>
      <curr:toCurrency>EUR</curr:toCurrency>
      <curr:amount>15000.00</curr:amount>
    </curr:ConvertCurrencyRequest>
  </soap:Body>
</soap:Envelope>

<!-- 2. Web Service Response (Provider -> Consumer) -->
HTTP/1.1 200 OK
Content-Type: application/soap+xml; charset=utf-8

<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
               xmlns:curr="http://globalbanking.org/currency">
  <soap:Body>
    <curr:ConvertCurrencyResponse>
      <curr:convertedAmount>13845.50</curr:convertedAmount>
      <curr:exchangeRate>0.92303</curr:exchangeRate>
      <curr:timestamp>2026-10-21T12:00:00Z</curr:timestamp>
    </curr:ConvertCurrencyResponse>
  </soap:Body>
</soap:Envelope>`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Tightly coupling the Web Service interface to the underlying database table structure.',
          reality: 'If you generate Web Service contracts directly from database schema (ActiveRecord to XML), any internal database refactor immediately breaks all external clients. Always design contractual interfaces based on business capabilities, keeping database schema encapsulated.'
        },
        {
          mistake: 'Assuming Web Services and REST APIs are mutually exclusive.',
          reality: 'Web Services is the broader architectural concept. Historically it was implemented via SOAP and WSDL (Big Web Services / WS-*). Today, lightweight RESTful web services using JSON and OpenAPI are simply the modern evolution of the same machine-to-machine goal.'
        }
      ]
    }
  },

  '3.2-uddi-registry': {
    id: '3.2-uddi-registry',
    chapterId: 'chapter-3',
    chapterNumber: 3,
    chapterTitle: 'Web Services, Distributed Architectures & AJAX',
    code: '3.2',
    title: 'UDDI: Service Discovery & Business Registries',
    subtitle: 'White pages, yellow pages, green pages, tModels, and why modern microservices evolved past UDDI',
    difficulty: 'Intermediate',
    readTime: '15 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'Universal Description, Discovery, and Integration (UDDI) was an XML-based registry standard designed to allow businesses worldwide to list themselves on the Internet, discover other services, and dynamically integrate electronic business transactions.',
      analogy: 'UDDI is literally modeled on the historic paper telephone directory: 1. White Pages (Look up a company by name: "Acme Corp address and phone"), 2. Yellow Pages (Look up by business category: "Find all certified freight forwarders in Texas"), 3. Green Pages (Technical binding specifications: "What exact protocol and port do I connect to?").',
      keyPoints: [
        'White Pages: Business name, text description, contact information, DUNS numbers.',
        'Yellow Pages: Standardized taxonomies (UNSPSC product codes, NAICS industry classification, geographic location).',
        'Green Pages: Technical specifications, endpoint URLs, and pointer references to WSDL contracts.',
        'tModel (Technical Model): An abstraction representing a technical fingerprint or protocol interface specification.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'UDDI exposes SOAP APIs for publishing and inquiring registry data structures.',
      diagram: `
+------------------------------------------------------------------------+
|                     UDDI Data Structure Hierarchy                      |
+------------------------------------------------------------------------+

 [ businessEntity ]        <- White Pages: Business Name, Contacts
        |
        +---> [ businessServices ]   <- Yellow Pages: Services offered
                    |
                    +---> [ bindingTemplate ]   <- Green Pages: URL & Protocol
                                |
                                +---> [ tModelInstanceInfo ] (WSDL Pointer)
`,
      specifications: [
        'OASIS UDDI Version 3.0.2 Standard.',
        'W3C Using WSDL in a UDDI Registry.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Netflix Eureka, HashiCorp Consul & Kubernetes DNS',
      scenario: 'The Evolution from Public UDDI to Internal Microservice Service Discovery',
      howItWorks: 'In the early 2000s, IBM, Microsoft, and SAP launched public UDDI registries envisioning that software programs would dynamically discover unknown suppliers on the fly. In practice, companies refused to auto-bind financial transactions to unvetted strangers, and public UDDI was decommissioned. However, the exact architectural principles of UDDI (Registration, Heartbeats, Discovery) were reborn inside internal cloud architectures: Netflix Eureka, HashiCorp Consul, and Kubernetes Service Discovery dynamically discover microservices across thousands of ephemeral Docker containers.',
      impact: 'While public B2B UDDI died, internal service discovery powers 100% of modern cloud-native Kubernetes deployments.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Modern service discovery uses distributed consensus stores and DNS-based registries.',
      tools: [
        'HashiCorp Consul: Modern service mesh and discovery registry.',
        'CoreDNS (Kubernetes): Cluster-internal automatic DNS discovery for microservices.',
        'jUDDI (Apache): Open-source Java implementation of the OASIS UDDI specification.'
      ],
      standards: ['OASIS UDDI Specification', 'Kubernetes Service API Specification']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'xml',
      explanation: 'An authentic UDDI Inquiry SOAP message querying for registered businesses in a specific industry:',
      code: `<!-- UDDI v3 find_business Inquiry Message -->
POST /uddi/inquire HTTP/1.1
Host: registry.enterprise.org
Content-Type: text/xml; charset=utf-8
SOAPAction: "uddi:uddi.org:v3_inquiry:find_business"

<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
               xmlns:uddi="urn:uddi-org:api_v3">
  <soap:Body>
    <uddi:find_business maxRows="10">
      <!-- Search by business name pattern -->
      <uddi:name>Global Logistics%</uddi:name>
      <!-- Search by NAICS taxonomy classification (Freight Transport) -->
      <uddi:categoryBag>
        <uddi:keyedReference 
          tModelKey="uddi:uddi.org:ubr:taxonomy:naics"
          keyName="Freight Transportation Arrangement" 
          keyValue="488510"/>
      </uddi:categoryBag>
    </uddi:find_business>
  </soap:Body>
</soap:Envelope>`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Assuming real-world businesses dynamically negotiate terms via automated public registries.',
          reality: 'Business contracts require legal agreements, NDAs, Service Level Agreements (SLAs), and credit checks. Dynamic runtime discovery between strangers failed; today, service discovery is used exclusively within authenticated, trusted private corporate networks.'
        },
        {
          mistake: 'Failing to implement health checks in service registries.',
          reality: 'A registry listing dead or unhealthily overloaded instances will route traffic into black holes. Modern discovery systems (Consul, Eureka) mandate continuous 10-second HTTP/gRPC health check heartbeats.'
        }
      ]
    }
  },

  '3.3-soap-protocol': {
    id: '3.3-soap-protocol',
    chapterId: 'chapter-3',
    chapterNumber: 3,
    chapterTitle: 'Web Services, Distributed Architectures & AJAX',
    code: '3.3',
    title: 'SOAP: Simple Object Access Protocol & Envelopes',
    subtitle: 'SOAP 1.1/1.2 wire format, Envelopes, Headers, WS-Security, Body, and SOAP Fault handling',
    difficulty: 'Intermediate',
    readTime: '18 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'Simple Object Access Protocol (SOAP) is a strict, protocol-independent messaging protocol specification for exchanging structured XML information in the implementation of web services. It relies exclusively on XML for message formatting and typically uses HTTP or SMTP for negotiation and transmission.',
      analogy: 'SOAP is like sending legal documents via an armored, tamper-evident courier pouch. The envelope (`<soap:Envelope>`) is sealed. The header (`<soap:Header>`) contains the armed security guard\'s credentials, cryptographic digital seals, and routing instructions. The pouch interior (`<soap:Body>`) contains the actual legal deed. If a courier tampering attempt occurs or the seal is broken, the entire pouch is stamped with a certified legal rejection letter (`<soap:Fault>`).',
      keyPoints: [
        'Strict Structure: Root `<Envelope>` -> Optional `<Header>` (routing, authentication) -> Mandatory `<Body>` (payload or `<Fault>`).',
        'WS-* Standards Suite: WS-Security (XML Encryption & Digital Signatures), WS-Addressing, WS-ReliableMessaging.',
        'Transport Neutrality: SOAP messages can travel over HTTP, HTTPS, SMTP, TCP, or IBM MQ series.',
        'Extensibility: Headers can contain `mustUnderstand="1"` attributes requiring intermediate routers to fail if they cannot process the header.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'The anatomy of a SOAP 1.2 envelope and its wire framing:',
      diagram: `
+------------------------------------------------------------------------+
|                      SOAP 1.2 Envelope Wire Structure                  |
+------------------------------------------------------------------------+

<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
  |
  +--- <soap:Header>
  |      +-- <wsse:Security> (Credentials, HMAC token, X.509 signature)
  |      +-- <wsa:Action>    (Routing destination action)
  |      +-- <wsa:MessageID> (Unique GUID for deduplication)
  |
  +--- <soap:Body>
         |
         +-- [ Either: Business Method Request / Response ]
         |       <m:GetAccountBalance>
         |         <m:AccountNumber>9041283</m:AccountNumber>
         |       </m:GetAccountBalance>
         |
         +-- [ Or: Standardized SOAP Fault (On Error) ]
                 <soap:Fault>
                   <soap:Code><soap:Value>soap:Sender</soap:Value></soap:Code>
                   <soap:Reason><soap:Text>Invalid Account</soap:Text></soap:Reason>
                 </soap:Fault>
</soap:Envelope>
`,
      specifications: [
        'W3C SOAP Version 1.2 Part 1: Messaging Framework.',
        'W3C SOAP Version 1.2 Part 2: Adjuncts (HTTP Binding).',
        'OASIS Web Services Security (WS-Security) 1.1.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Mastercard, SWIFT & Salesforce Enterprise Web Services',
      scenario: 'End-to-End Encrypted B2B Banking Settlement Messages',
      howItWorks: 'While consumer web applications prefer REST/JSON, international interbank clearing houses like SWIFT and payment networks mandate SOAP with WS-Security. Because HTTP is merely transport, a SOAP message can travel through 4 intermediate proxy gateways, and WS-Security guarantees the payload remains encrypted at the XML node level until it reaches the final mainframe hardware security module (HSM).',
      impact: 'Zero risk of intermediate proxies or load balancers viewing confidential banking data.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Developers configure and inspect SOAP envelopes using specialized enterprise tools.',
      tools: [
        'SoapUI: The standard functional testing tool for generating SOAP envelopes from WSDL files.',
        'Apache CXF / Metro: Enterprise JAX-WS runtimes with WS-Security interceptor chains.',
        'Wireshark: Analyzing raw SOAP XML payloads over HTTP port 80/443.'
      ],
      standards: ['W3C SOAP 1.1 / 1.2', 'OASIS WS-Security 1.1', 'WS-Addressing 1.0']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'xml',
      explanation: 'A production SOAP 1.2 request with WS-Security UsernameToken authentication and SOAP Fault handling:',
      code: `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
               xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
               xmlns:bank="http://secure.bank.org/accounts">
  <soap:Header>
    <!-- WS-Security Header: Verified by security interceptor before Body processing -->
    <wsse:Security soap:mustUnderstand="true">
      <wsse:UsernameToken>
        <wsse:Username>terminal_app_user</wsse:Username>
        <wsse:Password Type="...#PasswordText">K8s#SuperSecure2026</wsse:Password>
      </wsse:UsernameToken>
    </wsse:Security>
  </soap:Header>

  <soap:Body>
    <bank:TransferFunds>
      <bank:fromAccount>10049281</bank:fromAccount>
      <bank:toAccount>99201482</bank:toAccount>
      <bank:amount currency="USD">2500.00</bank:amount>
    </bank:TransferFunds>
  </soap:Body>
</soap:Envelope>`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Using HTTP status code 200 OK when returning a SOAP Fault in SOAP 1.1.',
          reality: 'In SOAP 1.1, the spec mandated returning HTTP 500 Internal Server Error whenever a `<Fault>` was returned, causing many HTTP reverse proxies to misinterpret business validation errors as server infrastructure crashes. SOAP 1.2 rectified this.'
        },
        {
          mistake: 'Ignoring the massive bandwidth and CPU parsing overhead of SOAP for mobile clients.',
          reality: 'An empty SOAP envelope with WS-Security headers can exceed 3 KB before any payload is added. Parsing complex XML strings on low-power mobile devices drains battery and CPU compared to lightweight JSON.'
        }
      ]
    }
  },

  '3.4-wsdl-contracts': {
    id: '3.4-wsdl-contracts',
    chapterId: 'chapter-3',
    chapterNumber: 3,
    chapterTitle: 'Web Services, Distributed Architectures & AJAX',
    code: '3.4',
    title: 'WSDL: Web Services Description Language Contracts',
    subtitle: 'Contract-first architectures: types, messages, portTypes, operations, bindings, and endpoints',
    difficulty: 'Intermediate',
    readTime: '18 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'Web Services Description Language (WSDL) is an XML-based format for describing network services as a set of endpoints operating on messages containing either document-oriented or procedure-oriented information. It serves as the formal machine-readable contract between service provider and consumer.',
      analogy: 'WSDL is like a legal building construction contract signed by an architect and an engineering firm. It specifies the exact materials (Types/XSD), the exact work orders (Messages), the list of approved tasks (PortType/Operations), the physical transport method (Binding/SOAP over HTTP), and the street address of the building site (Service/Endpoint). Because the contract is legally precise and machine-readable, engineers can feed it into a machine to automatically generate all the client-side code stubs without writing a single line of boilerplate.',
      keyPoints: [
        'Contract-First Architecture: Service interface is agreed upon and finalized in WSDL before any backend code is implemented.',
        'WSDL Elements: `<types>` (data types), `<message>` (data transmitted), `<portType>` (operations/interface), `<binding>` (protocol details), `<service>` (physical URL).',
        'Tooling Automation: Tools like `wsimport` or `wsdl2java` generate fully typed client SDKs directly from a WSDL URL.',
        'Operation Patterns: Request-Response (most common), One-Way, Solicit-Response, Notification.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'The hierarchical structure of a WSDL 1.1 contract:',
      diagram: `
+------------------------------------------------------------------------+
|                     WSDL Contract Architecture                         |
+------------------------------------------------------------------------+

+----------------------------------------------------------------------+
| <wsdl:definitions>                                                   |
|   |                                                                  |
|   +-- <wsdl:types>       XSD Schema defining parameter types         |
|   |                      (e.g., GetWeatherRequest, GetWeatherResponse)|
|   |                                                                  |
|   +-- <wsdl:message>     Typed parameters grouped into wire messages |
|   |                                                                  |
|   +-- <wsdl:portType>    Abstract interface: Operations              |
|   |                      (e.g., operation "GetCityWeather")          |
|   |                                                                  |
|   +-- <wsdl:binding>     Protocol specification (SOAP 1.2 over HTTP) |
|   |                      Document / Literal style                    |
|   |                                                                  |
|   +-- <wsdl:service>     Concrete physical endpoint URL              |
|                          <soap:address location="https://api..."/>   |
+----------------------------------------------------------------------+
`,
      specifications: [
        'W3C Web Services Description Language (WSDL) 1.1.',
        'W3C WSDL 2.0 Part 1: Core Language Recommendation.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Enterprise ERP Systems (SAP, Oracle Financials & Salesforce)',
      scenario: 'Auto-Generating 100% Type-Safe Enterprise Client SDKs in 5 Seconds',
      howItWorks: 'When a bank integrates their software with Salesforce, they do not manually write HTTP parsing code. A developer runs `wsimport -s ./src https://enterprise.salesforce.com/soap.wsdl`. The tooling parses the WSDL contract and generates 150 Java classes with full compile-time type safety. If the developer types `salesforce.createLead()`, autocomplete and compiler checks verify parameters instantly.',
      impact: 'Eliminates 90% of client integration bugs caused by typoed JSON keys or missing parameters.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Enterprise developers generate client stubs and test contracts using industry CLI tools.',
      tools: [
        'wsimport (JDK): Generates JAX-WS portable client artifacts from a WSDL.',
        'wsdl2java (Apache CXF): Generates production enterprise Java web service clients.',
        'OpenAPI / Swagger: The modern JSON/YAML equivalent of WSDL for RESTful APIs.'
      ],
      standards: ['W3C WSDL Recommendation', 'WS-I Basic Profile 2.0']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'xml',
      explanation: 'A complete, clean WSDL 1.1 document describing a weather reporting web service:',
      code: `<?xml version="1.0" encoding="UTF-8"?>
<wsdl:definitions name="WeatherService"
    targetNamespace="http://api.weather.org/wsdl"
    xmlns:tns="http://api.weather.org/wsdl"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"
    xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/">

  <!-- 1. Data Type Definitions -->
  <wsdl:types>
    <xsd:schema targetNamespace="http://api.weather.org/wsdl">
      <xsd:element name="CityRequest" type="xsd:string"/>
      <xsd:element name="TemperatureResponse" type="xsd:float"/>
    </xsd:schema>
  </wsdl:types>

  <!-- 2. Message Declarations -->
  <wsdl:message name="GetTempInput">
    <wsdl:part name="cityName" element="tns:CityRequest"/>
  </wsdl:message>
  <wsdl:message name="GetTempOutput">
    <wsdl:part name="temp" element="tns:TemperatureResponse"/>
  </wsdl:message>

  <!-- 3. PortType (Abstract Interface) -->
  <wsdl:portType name="WeatherPortType">
    <wsdl:operation name="GetTemperature">
      <wsdl:input message="tns:GetTempInput"/>
      <wsdl:output message="tns:GetTempOutput"/>
    </wsdl:operation>
  </wsdl:portType>

  <!-- 4. Binding (Concrete Protocol Mapping) -->
  <wsdl:binding name="WeatherSoapBinding" type="tns:WeatherPortType">
    <soap:binding style="document" transport="http://schemas.xmlsoap.org/soap/http"/>
    <wsdl:operation name="GetTemperature">
      <soap:operation soapAction="http://api.weather.org/GetTemperature"/>
      <wsdl:input><soap:body use="literal"/></wsdl:input>
      <wsdl:output><soap:body use="literal"/></wsdl:output>
    </wsdl:operation>
  </wsdl:binding>

  <!-- 5. Service Endpoint Location -->
  <wsdl:service name="WeatherService">
    <wsdl:port name="WeatherPort" binding="tns:WeatherSoapBinding">
      <soap:address location="https://api.weather.org/services/weather"/>
    </wsdl:port>
  </wsdl:service>

</wsdl:definitions>`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Using RPC/Encoded style instead of Document/Literal in modern WSDLs.',
          reality: 'RPC/Encoded was deprecated by the WS-I Basic Profile because different programming language platforms encoded types with subtle incompatibilities. Modern systems mandate Document/Literal wrapped style for 100% cross-vendor compatibility.'
        },
        {
          mistake: 'Modifying a production WSDL without versioning the namespace.',
          reality: 'If you change an element name or add mandatory fields to an existing WSDL, all existing client SDKs compiled against the old WSDL will throw unmarshalling exceptions. Always version the XML namespace (e.g. `/v2/WeatherService`).'
        }
      ]
    }
  },

  '3.5-developing-web-services': {
    id: '3.5-developing-web-services',
    chapterId: 'chapter-3',
    chapterNumber: 3,
    chapterTitle: 'Web Services, Distributed Architectures & AJAX',
    code: '3.5',
    title: 'Developing & Deploying Web Services in Production',
    subtitle: 'Contract-First vs Code-First design, web service lifecycles, and deployment pipelines',
    difficulty: 'Intermediate',
    readTime: '18 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'Developing and deploying enterprise Web Services requires choosing between two core methodologies: Contract-First (designing WSDL/XSD schema before writing code) or Code-First (writing code and letting frameworks auto-generate schemas).',
      analogy: 'Code-First is like building a house without blueprints: the carpenters start hammering walls together, and once finished, a photographer takes pictures and creates a map of what was built. It is fast for prototypes, but unpredictable for clients. Contract-First is like hiring a structural architect to produce certified blueprints that all contractors must adhere to before a single nail is hammered. It ensures the building matches specifications exactly.',
      keyPoints: [
        'Contract-First (Top-Down): Write WSDL/XSD -> Generate server skeletons and client stubs -> Implement business logic. Recommended for enterprise.',
        'Code-First (Bottom-Up): Write Java/C# classes with annotations (`@WebService`) -> Framework generates WSDL at runtime. Faster for internal apps.',
        'Web Service Deployment Lifecycle: 1. Definition, 2. Implementation, 3. Packaging (.war / Docker container), 4. Registration, 5. Monitoring.',
        'Production Hardening: TLS termination, rate-limiting gateways, schema validation filters, and dead-letter queues.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'The production lifecycle and deployment topology of enterprise Web Services:',
      diagram: `
+------------------------------------------------------------------------+
|                 Web Service Production CI/CD Pipeline                  |
+------------------------------------------------------------------------+

[ WSDL / XSD Contract ] -> [ wsdl2java Compiler ]
                                   |
                                   v
[ Generated Java Skeletons ] + [ Business Logic Implementation ]
                                   |
                                   v
[ Gradle / Maven Build ] -> [ Packaged Container (Docker) ]
                                   |
                                   v
[ Kubernetes Deployment Pods (Cluster) ]
        ^
        | Reverse Proxy & TLS Termination
[ Envoy / Nginx API Gateway ]
        ^
        | Public SOAP / REST Requests
[ External Enterprise Consumers ]
`,
      specifications: [
        'JSR 224: Java API for XML-Based Web Services (JAX-WS) 2.0.',
        'WS-I Basic Profile 1.2 / 2.0.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Federal Express (FedEx) & United Parcel Service (UPS)',
      scenario: 'High-Volume Shipping Rate and Tracking Web Services',
      howItWorks: 'FedEx provides formal WSDL contracts to e-commerce merchants worldwide. Merchants use Contract-First compilation to generate rate-calculation stubs. FedEx deploys services in multi-region Kubernetes clusters with active-active database replication. Incoming XML requests pass through API gateways that validate XML schemas at the edge before dispatching to backend pricing calculation engines.',
      impact: 'Handles over 200 million tracking and rate requests daily with 99.999% availability during peak holiday shipping.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Enterprise teams orchestrate, package, and monitor Web Service deployments using modern DevOps toolchains.',
      tools: [
        'Docker & Kubernetes: Standard containerization and orchestration platform.',
        'Prometheus & Grafana: Real-time monitoring of web service throughput and error rates.',
        'OpenTelemetry: Distributed tracing tracking web service calls across multiple microservice hops.'
      ],
      standards: ['Cloud Native Computing Foundation (CNCF)', 'OASIS WS-Reliability']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'java',
      explanation: 'A production-grade JAX-WS enterprise Web Service endpoint implementation with error handling:',
      code: `package com.webtech.services;

import jakarta.jws.WebService;
import jakarta.jws.WebMethod;
import jakarta.jws.WebParam;
import jakarta.xml.ws.WebServiceException;

@WebService(
    name = "PaymentProcessorPort",
    targetNamespace = "http://enterprise.webtech.edu/payment"
)
public class PaymentProcessingServiceImpl {

    @WebMethod(operationName = "ProcessPayment")
    public PaymentReceipt processPayment(
        @WebParam(name = "accountNumber") String accountNumber,
        @WebParam(name = "amount") double amount
    ) {
        // 1. Business Validation
        if (amount <= 0) {
            throw new WebServiceException("Payment amount must be greater than zero.");
        }

        // 2. Execute Transaction
        String transactionId = "TXN-" + System.currentTimeMillis();
        System.out.println("Processing $" + amount + " for account " + accountNumber);

        // 3. Return Typed Contract Object
        return new PaymentReceipt(transactionId, "APPROVED", amount, new java.util.Date());
    }
}`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Using Code-First and allowing frameworks to regenerate WSDL URLs dynamically.',
          reality: 'In Code-First, if someone reorders methods or modifies a getter name in Java, the generated WSDL changes automatically at runtime, breaking third-party clients without warning. Production services must preserve static, versioned WSDL files.'
        },
        {
          mistake: 'Failing to implement timeouts on upstream Web Service calls.',
          reality: 'If your application calls an external web service and does not set a socket timeout (e.g. 5 seconds), a hanging remote connection will lock application worker threads. Under high load, all threads exhaust, crashing your entire server ("Cascading Thread Pool Starvation").'
        }
      ]
    }
  },

  '3.6-ajax-foundations': {
    id: '3.6-ajax-foundations',
    chapterId: 'chapter-3',
    chapterNumber: 3,
    chapterTitle: 'Web Services, Distributed Architectures & AJAX',
    code: '3.6',
    title: 'AJAX Foundations: Asynchronous Networking & Event Loop',
    subtitle: 'Jesse James Garrett paradigm, non-blocking I/O, eliminating white-screen reloads, and XHR',
    difficulty: 'Fundamental',
    readTime: '16 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'Asynchronous JavaScript and XML (AJAX) is an architectural approach coined in 2005 by Jesse James Garrett. It allows web applications to exchange data with a web server asynchronously in the background, updating parts of a web page without reloading the entire page.',
      analogy: 'A traditional web app is like reading a paper book where, every time you want to check an updated footnote, you must burn the entire book, wait 3 seconds in darkness for a brand-new book to arrive in the mail, and find your page again (White-Screen Page Reload). AJAX is like having an assistant whisper the updated footnote directly into your ear while you keep reading without interruption.',
      keyPoints: [
        'The Historic Paradigm Shift: Before AJAX (1995-2005), EVERY user click (submitting a form, sorting a table) caused a full-page white-screen refresh.',
        'Core Technologies: `XMLHttpRequest` / `fetch()`, JavaScript DOM mutation, and structured data formats (XML historically, JSON today).',
        'Asynchronous Non-Blocking: The browser UI remains responsive, interactive, and smooth while data transfers across network hops.',
        'Single Page Applications (SPAs): AJAX laid the foundation for modern web apps (Gmail, Google Maps, Twitter, Slack).'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'The architectural contrast between classic synchronous web models and the asynchronous AJAX engine model:',
      diagram: `
+------------------------------------------------------------------------+
|                 Classic Synchronous vs. AJAX Model                     |
+------------------------------------------------------------------------+

CLASSIC MODEL (Synchronous - Full Page Reload):
User Action -> [Browser Pauses / White Screen] -> HTTP GET -> [Server Renders HTML]
            <- [Browser Rebuilds DOM & Repaints Entire Page] <-

AJAX MODEL (Asynchronous - Non-Blocking Background Data):
User Action -> [JavaScript Dispatches Background XHR / Fetch]
            -> [User continues scrolling & interacting!]
            <- Server returns lightweight JSON (e.g. 2 KB)
JavaScript Callback receives JSON -> Mutates specific DOM node in-place!
`,
      specifications: [
        'W3C XMLHttpRequest Level 2 Specification.',
        'WHATWG Fetch Living Standard.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Google Maps (2005) & Google Suggest (Search Autocomplete)',
      scenario: 'The Launch of Modern Interactive Web Applications',
      howItWorks: 'In 2005, MapQuest required clicking an arrow button, waiting 4 seconds for a full page reload, just to shift the map 1 inch to the right. Google Maps shocked the world by using AJAX: as the user dragged the map with their mouse, background JavaScript pre-fetched image tiles asynchronously and appended them to the DOM with zero page reloading.',
      impact: 'Proved that web browsers could deliver desktop-class application experiences, sparking the Web 2.0 revolution.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Frontend developers inspect and debug AJAX transactions in browser developer tools.',
      tools: [
        'Browser DevTools (Network tab -> Filter by "Fetch/XHR"): Inspects background requests, payload JSON, and latency waterfalls.',
        'Mock Service Worker (MSW): Intercepts AJAX requests at the network level for testing.',
        'Axios / ky: Modern HTTP client libraries wrapping asynchronous browser requests.'
      ],
      standards: ['WHATWG Fetch Specification', 'ECMAScript Promises & Async/Await']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'javascript',
      explanation: 'Contrasting historic XMLHttpRequest with modern non-blocking async/await Fetch API:',
      code: `// Modern AJAX using Fetch API & async/await with error handling
async function loadLiveStockPrice(ticker) {
  const priceDisplay = document.getElementById('priceDisplay');
  const spinner = document.getElementById('loadingSpinner');

  try {
    // 1. Show non-blocking loading state
    spinner.style.display = 'inline-block';

    // 2. Asynchronous background network dispatch
    const response = await fetch(\`https://api.market.org/quote/\${ticker}\`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }

    // 3. Parse JSON stream asynchronously
    const data = await response.json();

    // 4. Update specific DOM element in-place (No full page reload!)
    priceDisplay.textContent = \`$\${data.price.toFixed(2)}\`;
    priceDisplay.className = data.change >= 0 ? 'text-green-500' : 'text-red-500';

  } catch (error) {
    console.error('AJAX request failed:', error);
    priceDisplay.textContent = 'Unavailable';
  } finally {
    spinner.style.display = 'none';
  }
}`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Breaking the browser Back button and URL sharing in early AJAX apps.',
          reality: 'If you change all page content via AJAX without updating the browser URL, the user cannot bookmark the page, and clicking the browser\'s Back button exits the website completely. Modern apps use the HTML5 History API (`history.pushState()`) to sync URLs with AJAX updates.'
        },
        {
          mistake: 'Failing to handle Race Conditions when rapid user clicks trigger overlapping AJAX calls.',
          reality: 'If a user searches "ca", then "cat", the request for "ca" may take 400ms while "cat" takes 100ms. If "ca" resolves last, it will overwrite the results for "cat". Modern AJAX uses `AbortController` to cancel stale in-flight requests.'
        }
      ]
    }
  },

  '3.7-ajax-performance': {
    id: '3.7-ajax-performance',
    chapterId: 'chapter-3',
    chapterNumber: 3,
    chapterTitle: 'Web Services, Distributed Architectures & AJAX',
    code: '3.7',
    title: 'Web Page Performance Optimization Using AJAX',
    subtitle: 'Partial updates, debouncing, optimistic UI, payload minimization, and client-side caching',
    difficulty: 'Intermediate',
    readTime: '16 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'While AJAX eliminates full-page reloads, unoptimized AJAX can easily degrade performance through request flooding, unthrottled search inputs, memory leaks, and redundant network roundtrips.',
      analogy: 'Imagine texting a friend who replies to every individual letter you type: "H", "He", "Hel", "Hell", "Hello". That is an unthrottled AJAX search box bombarding the backend server with 50 redundant requests per second. Debouncing is like waiting until you pause typing for 300 milliseconds before sending a single, complete word.',
      keyPoints: [
        'Payload Minimization: Returning raw JSON data (500 bytes) instead of heavy server-rendered HTML blocks with repeated navigation markup (80 KB).',
        'Debouncing: Delaying execution until a specified delay has elapsed since the last time the event was triggered (crucial for search inputs).',
        'Throttling: Enforcing a maximum frequency of execution over time (crucial for scroll and resize events).',
        'Optimistic UI Updates: Updating the screen instantly assuming server success, and rolling back only in the rare event of an error.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'Debouncing and Optimistic UI architecture:',
      diagram: `
+------------------------------------------------------------------------+
|                   Debounce Timing & Optimistic UI Flow                 |
+------------------------------------------------------------------------+

Unthrottled Search Input:
Keystroke 'R' -> XHR #1
Keystroke 'e' -> XHR #2  (Server bombarded with 5 requests in 200ms)
Keystroke 'a' -> XHR #3
Keystroke 'c' -> XHR #4
Keystroke 't' -> XHR #5

Debounced Search Input (300ms Idle Delay):
Keystroke 'R' [Timer reset]
Keystroke 'e' [Timer reset]
Keystroke 'a' [Timer reset]
Keystroke 'c' [Timer reset]
Keystroke 't' [Timer runs 300ms...] ----> Dispatches Single Optimized XHR!


Optimistic UI Flow:
User clicks "Like" Button
       |
       +---> [ Instantly fill Heart icon with Red color & increment count ] (0ms Latency)
       |
       +---> [ Background AJAX Request Dispatched ]
                 |
                 +-- If 200 OK: State is verified. User felt zero latency!
                 +-- If Error: Rollback Heart icon and display toast notification.
`,
      specifications: [
        'W3C Resource Timing Level 2.',
        'IETF HTTP Caching (RFC 9111): Cache-Control headers for AJAX responses.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Twitter / X & Instagram Like Button Architecture',
      scenario: 'Zero-Latency Optimistic UI Updates for 500 Million Global Users',
      howItWorks: 'When you tap the heart icon on Twitter or Instagram, the app does NOT wait for the roundtrip network response before changing the heart color. It updates the UI instantly (0ms) using Optimistic UI. In the background, an asynchronous AJAX request sends the like. If your subway train enters a tunnel and the request times out, the app animates the heart back and displays: "Unable to like tweet".',
      impact: 'Delivers a native app feeling of instantaneous speed regardless of whether the user is on 3G or 5G.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Production frontend state libraries optimize AJAX caching and deduplication automatically.',
      tools: [
        'TanStack Query (React Query) / SWR: Stale-While-Revalidate caching, automatic deduplication, and window-refocus re-fetching.',
        'lodash.debounce / lodash.throttle: Industry-standard utility functions.',
        'Chrome DevTools Network Throttling: Emulating Slow 3G connections to test loading states.'
      ],
      standards: ['RFC 5861: HTTP Cache-Control Extensions for Stale Content']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'javascript',
      explanation: 'Production implementation of a generic debounce function and an abortable search query:',
      code: `// 1. Generic Debounce Utility
function debounce(func, wait) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

// 2. Abortable Debounced Search Controller
let activeAbortController = null;

async function executeSearch(query) {
  // Cancel previous in-flight request if user kept typing
  if (activeAbortController) {
    activeAbortController.abort();
  }
  activeAbortController = new AbortController();

  try {
    const res = await fetch(\`/api/search?q=\${encodeURIComponent(query)}\`, {
      signal: activeAbortController.signal
    });
    const results = await res.json();
    renderSearchResults(results);
  } catch (err) {
    if (err.name === 'AbortError') {
      console.log('Previous search superseded by newer input');
    } else {
      console.error('Search failed:', err);
    }
  }
}

// Attach debounced listener with 300ms threshold
const searchInput = document.getElementById('searchField');
searchInput.addEventListener('input', debounce((e) => {
  if (e.target.value.trim().length >= 2) {
    executeSearch(e.target.value.trim());
  }
}, 300));`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Failing to handle network errors during Optimistic UI updates.',
          reality: 'If you optimistically delete an email from an inbox list in the UI, and the server returns a 500 error or network timeout, you MUST revert the email back into the list and notify the user. Silently failing causes user data discrepancies.'
        },
        {
          mistake: 'Setting `Cache-Control: no-cache` indiscriminately on all AJAX endpoints.',
          reality: 'Many AJAX responses (e.g. list of countries, static product categories) never change. Caching them using `stale-while-revalidate` or `max-age=3600` saves millions of unnecessary server hits.'
        }
      ]
    }
  },

  '3.8-programming-ajax': {
    id: '3.8-programming-ajax',
    chapterId: 'chapter-3',
    chapterNumber: 3,
    chapterTitle: 'Web Services, Distributed Architectures & AJAX',
    code: '3.8',
    title: 'Modern Asynchronous Programming: XHR, Fetch & Async/Await',
    subtitle: 'XMLHttpRequest readyStates, modern fetch(), AbortController, and streaming JSON processing',
    difficulty: 'Intermediate',
    readTime: '20 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'Asynchronous JavaScript programming has evolved through three historical eras: Callback functions (Callback Hell), Promises (`.then().catch()`), and modern `async/await` syntax built upon generator microtasks.',
      analogy: 'Imagine ordering a custom suit: Callback Hell was like giving the tailor 10 nested conditional instructions on index cards; if any instruction failed, the entire garment was ruined. Promises were like receiving a formal claim ticket: "We promise to deliver your suit or return your deposit." Modern `async/await` is like sitting in the tailor shop drinking espresso: the code reads like a calm, linear step-by-step procedure (`await measure(); await cut(); await sew();`), but the tailor is working asynchronously behind the scenes without blocking the shop.',
      keyPoints: [
        'Historic XHR readyStates: 0 (UNSENT), 1 (OPENED), 2 (HEADERS_RECEIVED), 3 (LOADING), 4 (DONE).',
        'Fetch API vs XHR: Fetch returns Promises; does NOT reject on HTTP 404 or 500 (only on network failure); requires explicit `response.ok` check.',
        '`AbortController`: Native browser standard for cancelling pending fetch requests and WebSockets.',
        'ReadableStreams: Fetch allows reading response streams chunk-by-chunk in real time before the entire file finishes downloading (crucial for LLM AI token streaming).'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'Understanding Promise microtask execution and the Fetch ReadableStream pipeline:',
      diagram: `
+------------------------------------------------------------------------+
|                     Fetch API & ReadableStream Pipeline                |
+------------------------------------------------------------------------+

 fetch(url) -> Returns Promise<Response>
                   |
                   v
 [ HTTP Headers Arrive ] -> Promise resolves with Response object
                   |
                   +-- response.status (200, 404, 500)
                   +-- response.headers (Content-Type, Cache-Control)
                   +-- response.body (ReadableStream<Uint8Array>)
                             |
                             v
           [ Real-Time Stream Reader: reader.read() ]
             Chunk 1 (4 KB)  -> Process immediately (e.g. LLM words appear)
             Chunk 2 (4 KB)  -> Process immediately
             Chunk 3 (done)  -> Stream complete
`,
      specifications: [
        'WHATWG Streams Living Standard: ReadableStream API.',
        'WHATWG Fetch Living Standard: Request and Response interfaces.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'ChatGPT (OpenAI), Claude (Anthropic) & GitHub Copilot',
      scenario: 'Streaming AI Tokens to the Browser UI Using Server-Sent Events and Fetch ReadableStreams',
      howItWorks: 'When an AI generates a 500-word essay, waiting 15 seconds for the entire response to finish before returning JSON would cause high user bounce rates. Instead, modern AI web interfaces use Fetch with `ReadableStream`: as each word token is predicted, the server flushes a chunk over HTTP, and `reader.read()` appends the text to the DOM in real time.',
      impact: 'Reduces perceived latency from 15,000ms to 200ms (Time to First Token).'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Engineers inspect streams and test async error boundaries in development environments.',
      tools: [
        'AbortController: Cancels network requests on component unmount.',
        'TextDecoderStream: Native pipe for decoding binary UTF-8 chunks into strings in real time.',
        'EventSource API: Native browser listener for Server-Sent Events (SSE).'
      ],
      standards: ['W3C DOM AbortController', 'WHATWG Fetch Standard']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'javascript',
      explanation: 'Consuming an asynchronous HTTP streaming response chunk-by-chunk in real time using the Fetch API:',
      code: `// Real-Time Streaming Fetch Consumer (e.g. AI token streaming)
async function streamTextResponse(url, outputElement) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: { 'Accept': 'text/event-stream' }
    });

    if (!response.ok) throw new Error(\`Server returned \${response.status}\`);

    // Obtain reader from the underlying ReadableStream
    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    outputElement.textContent = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break; // Stream completed

      // Decode raw Uint8Array chunk into readable text
      const chunkText = decoder.decode(value, { stream: true });
      outputElement.textContent += chunkText;
    }

    console.log('Stream completed successfully');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.warn('Request was aborted due to timeout');
    } else {
      console.error('Streaming error:', error);
    }
  } finally {
    clearTimeout(timeoutId);
  }
}`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Assuming `fetch()` rejects its Promise on HTTP 404 or 500 errors.',
          reality: '`fetch()` only rejects if there is a physical network failure (DNS failed, offline, connection refused). A 404 Not Found or 500 Internal Error is considered a successful HTTP transaction! You MUST check `if (!response.ok)` manually.'
        },
        {
          mistake: 'Forgetting to clean up asynchronous fetch operations when components unmount.',
          reality: 'If a user navigates away from a page while a 3-second fetch is in flight, the promise resolves into a destroyed view, triggering "Can\'t perform a state update on an unmounted component" memory leak warnings. Always abort via `controller.abort()` in cleanup handlers.'
        }
      ]
    }
  },

  '3.9-corba-architecture': {
    id: '3.9-corba-architecture',
    chapterId: 'chapter-3',
    chapterNumber: 3,
    chapterTitle: 'Web Services, Distributed Architectures & AJAX',
    code: '3.9',
    title: 'CORBA Architecture, OMG IDL & ORB Middleware',
    subtitle: 'Common Object Request Broker Architecture, client stubs, server skeletons, and IIOP',
    difficulty: 'Advanced',
    readTime: '18 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'Common Object Request Broker Architecture (CORBA) is a standard defined by the Object Management Group (OMG) in the 1990s. It enabled distributed software applications written in multiple programming languages to invoke object methods on remote machines across a network as if they were local in-memory objects.',
      analogy: 'Imagine you are writing a C++ program on Linux, and you want to call a method `account.deposit(500)`. In a standard program, that object lives in your computer\'s RAM. CORBA is like a magical teleporter tube (the ORB): you call `deposit()` on a local "stunt-double" object (Client Stub); the stub packs the method name and numbers into an international diplomatic courier case (IIOP protocol) and sends it over the wire to a remote mainframe running Java; the receiver\'s helper (Server Skeleton) unpacks it and runs the actual code.',
      keyPoints: [
        'OMG IDL (Interface Definition Language): Language-neutral specification defining object interfaces, methods, and types.',
        'ORB (Object Request Broker): The middleware bus responsible for locating remote objects, marshaling arguments, and routing invocations.',
        'Client Stub & Server Skeleton: Auto-generated code bridging native language types with the ORB wire format.',
        'IIOP (Internet Inter-ORB Protocol): Standard TCP/IP protocol enabling ORBs from different vendors to communicate.',
        'Legacy & Evolution: CORBA was powerful but notoriously complex; its direct conceptual successors are gRPC (Protocol Buffers) and modern microservice RPCs.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'The architectural layers of the CORBA Object Request Broker:',
      diagram: `
+------------------------------------------------------------------------+
|                     CORBA Architectural Model                          |
+------------------------------------------------------------------------+

 [ Client Application (C++) ]            [ Server Object Impl (Java) ]
              |                                        ^
              v                                        |
       [ Client Stub ]                        [ Server Skeleton ]
              |                                        ^
              v                                        |
   [ Client ORB (Local) ]                   [ Server ORB (Remote) ]
              |                                        ^
              +----------------------------------------+
                   IIOP over TCP/IP (Wire Protocol)

Workflow:
1. Interface defined in OMG IDL (.idl file).
2. IDL compiler generates Client Stub (C++) and Server Skeleton (Java).
3. Client invokes stub method -> Stub marshals parameters into IIOP bytes.
4. Client ORB routes bytes over TCP -> Server ORB receives packet.
5. Server Skeleton unmarshals parameters -> Invokes real Java implementation.
`,
      specifications: [
        'OMG CORBA 3.3 Specification.',
        'OMG IDL to Java Language Mapping Specification.',
        'Internet Inter-ORB Protocol (IIOP) Specification.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Telecommunications (AT&T, Verizon), Air Traffic Control & Banking',
      scenario: 'Mission-Critical Distributed Telemetry and Legacy Banking Core Systems',
      howItWorks: 'Large telecommunication carriers built their nationwide cellular network management systems in the late 1990s using CORBA. Cellular cell towers run embedded C code that reports telemetry back to central monitoring dashboards via CORBA ORBs over high-reliability leased lines. Many of these systems continue to process millions of critical events per second today.',
      impact: 'Extreme high-throughput binary RPC performance that has run uninterrupted for over 25 years in aerospace and telecom backbones.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Industrial CORBA installations use certified enterprise ORBs.',
      tools: [
        'TAO (The ACE ORB): Real-time C++ ORB widely used in aerospace and defense.',
        'JacORB: Standard open-source Java implementation of the OMG CORBA standard.',
        'gRPC: The modern 2020s successor replacing CORBA with HTTP/2 and Protobuf.'
      ],
      standards: ['Object Management Group (OMG) Standards', 'ISO/IEC 19500-1']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'text',
      explanation: 'An OMG IDL contract definition and the corresponding modern gRPC equivalent showing architectural continuity:',
      code: `// 1. Historic OMG IDL Specification (BankSystem.idl)
module BankingService {
  interface Account {
    readonly attribute string accountNumber;
    
    exception InsufficientFunds {
      string reason;
    };

    void deposit(in double amount);
    double withdraw(in double amount) raises(InsufficientFunds);
    double getBalance();
  };
};

// 2. Modern 2026 Successor: Protocol Buffers v3 (BankSystem.proto)
syntax = "proto3";

package banking;

service AccountService {
  rpc Deposit (DepositRequest) returns (AccountBalance);
  rpc Withdraw (WithdrawRequest) returns (AccountBalance);
}

message DepositRequest {
  string account_number = 1;
  double amount = 2;
}

message AccountBalance {
  double current_balance = 1;
}`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Failing to realize why CORBA was superseded by Web Services and REST.',
          reality: 'CORBA required identical binary configurations, strict vendor ORB compatibility, complex C++ pointer semantics across machines, and could not traverse corporate firewalls (firewalls blocked arbitrary non-standard TCP ports). Web Services succeeded because HTTP Port 80 and text XML/JSON easily bypassed firewalls.'
        },
        {
          mistake: 'Distributed Garbage Collection failure.',
          reality: 'In CORBA, holding a remote reference to an object required complex reference counting across machines. If a client crashed without releasing its remote reference, the remote server leaked memory indefinitely.'
        }
      ]
    }
  }
};
