/**
 * Unit 3: Web Services, SOAP, WSDL, AJAX & Distributed Computing
 * Comprehensive documentation, step-by-step lifecycles, wire records,
 * practical examples, misconceptions, challenges, and diagnostic quizzes.
 */

export const UNIT_3_DEFINITION = {
  id: "unit-3",
  number: 3,
  title: "Unit 3: Web Services, SOAP, WSDL, AJAX & Distributed Computing",
  description: "The Web Services & Communication Laboratory: Master service-oriented architectures, UDDI discovery, SOAP message envelopes, WSDL contractual interfaces, deployment lifecycles, AJAX asynchronous networking, performance optimizations, and CORBA distributed objects.",
  iconName: "Server",
  accentColor: "indigo",
  topicCount: 11,
  estimatedHours: 6.5,
  topics: [
    { id: "intro-web-services", title: "Introduction to Web Services & Architecture", difficulty: "Beginner", duration: "16 min", isImplemented: true },
    { id: "uddi-registry", title: "UDDI: Service Discovery & Business Registries", difficulty: "Intermediate", duration: "16 min", isImplemented: true },
    { id: "soap-protocol", title: "SOAP: Simple Object Access Protocol & Envelopes", difficulty: "Intermediate", duration: "18 min", isImplemented: true },
    { id: "wsdl-contracts", title: "WSDL: Web Services Description Language", difficulty: "Intermediate", duration: "18 min", isImplemented: true },
    { id: "web-service-architecture", title: "Web Service Architecture & The SOA Triangle", difficulty: "Intermediate", duration: "16 min", isImplemented: true },
    { id: "developing-deploying-web-services", title: "Developing & Deploying Web Services", difficulty: "Intermediate", duration: "20 min", isImplemented: true },
    { id: "ajax-foundations", title: "AJAX: Asynchronous JavaScript and XML", difficulty: "Beginner", duration: "18 min", isImplemented: true },
    { id: "ajax-performance", title: "Improving Web Page Performance Using AJAX", difficulty: "Beginner", duration: "16 min", isImplemented: true },
    { id: "programming-in-ajax", title: "Programming in AJAX: XHR, Fetch & DOM Updates", difficulty: "Intermediate", duration: "20 min", isImplemented: true },
    { id: "corba-architecture", title: "CORBA: Distributed Objects & ORB Middleware", difficulty: "Advanced", duration: "18 min", isImplemented: true },
    { id: "unit3-capstone-lab", title: "Capstone Lab: Build a Web Service", difficulty: "Intermediate", duration: "25 min", isImplemented: true }
  ]
};

export const UNIT_3_TOPICS = {
  // ==========================================
  // TOPIC 1: INTRODUCTION TO WEB SERVICES
  // ==========================================
  "intro-web-services": {
    id: "intro-web-services",
    unitId: "unit-3",
    unitNumber: 3,
    unitTitle: "Unit 3: Web Services, SOAP, WSDL, AJAX & Distributed Computing",
    title: "Introduction to Web Services & Architecture",
    subtitle: "Cross-platform client-server communication, service providers, consumers, and language-independent data exchange",
    difficulty: "Beginner",
    estimatedMinutes: 16,
    badge: "Web Services Core",

    definition: "A Web Service is a standardized, platform-independent software system designed to support interoperable machine-to-machine interaction over a network. It exposes programmatic operations through network-accessible URIs and exchanges self-describing messages formatted in XML or JSON transported over standard Internet application protocols such as HTTP or HTTPS.",

    whyItMatters: "Before web services, connecting a Windows C# server to a Linux Java backend required brittle proprietary binary bridges. Web services universalized enterprise computing by establishing open, vendor-neutral protocols—allowing banking payment processors, airline reservation systems, and mobile applications to communicate seamlessly regardless of underlying operating systems or programming languages.",

    explanation: [
      {
        heading: "Beginner Explanation: The Universal Restaurant Ordering Protocol",
        content: "Imagine an international food hall with chefs from Italy, Japan, and France. If customers shouted orders in their native local dialects, chaos would ensue.\n\nA Web Service establishes a universal ordering protocol:\n1. Service Consumer (The Customer): Looks at a standardized menu (The Interface) and writes down an order item and quantity in a clear format (The Request Envelope).\n2. Network Transit: A waiter carries the order slip to the kitchen counter over standard hallways (HTTP transport over TCP sockets).\n3. Service Provider (The Kitchen): The chef receives the slip, executes the cooking recipe (Business Logic), retrieves ingredients from the pantry (Database), and packages the completed dish with a receipt (The Response Envelope).\n\nWhether the chef is running Java, Python, or C#, the order slip format remains completely universal!"
      },
      {
        heading: "Key Roles in Web Service Architecture",
        content: "Every web service ecosystem is anchored by three primary entities:\n- Service Provider: The server application that implements the business logic, exposes network-addressable endpoints, and publishes contract descriptions.\n- Service Consumer (Client): Any client application (Mobile app, Web Single-Page App, IoT device, or partner server) that requests operations and processes response payloads.\n- Communication Channel & Wire Protocols: Standardized network protocols (HTTP/HTTPS, SMTP) carrying text-based or binary structured envelopes (SOAP/XML, REST/JSON, gRPC/Protobuf)."
      },
      {
        heading: "Why Are Web Services Needed? (Core Advantages)",
        content: "The technical necessity of web services stems from 4 enterprise challenges:\n1. Platform Independence: Consumers running macOS or Android can invoke services running on Windows Server or IBM Mainframes.\n2. Language Agnostic: A Python data-science script can call a C++ mathematical engine or a Java enterprise database.\n3. Loose Coupling: Clients only depend on the public contractual interface; the internal server implementation can be refactored or rewritten without breaking clients.\n4. Reusability: A single payment or SMS notification web service can be reused across hundreds of independent web and mobile apps."
      },
      {
        heading: "The Internal Processing Pipeline",
        content: "When a request arrives at a web service host, it follows a 6-stage execution pipeline:\n`Client Request` $\\rightarrow$ `Wire Transit (HTTPS Port 443)` $\\rightarrow$ `Web Service Gateway (Authentication & Deserialization)` $\\rightarrow$ `Business Logic Layer (Validation & Rules)` $\\rightarrow$ `Data Persistence (Database / ACID Transactions)` $\\rightarrow$ `Serialized Response Returned to Consumer`."
      }
    ],

    howItWorks: [
      { step: 1, title: "Consumer Request Serialization", subtitle: "Client Side", description: "Client formats parameters into a standardized JSON or SOAP XML message envelope." },
      { step: 2, title: "HTTP Transport", subtitle: "Network Layer", description: "Payload is transmitted via HTTP POST/GET over TLS encryption (Port 443)." },
      { step: 3, title: "Gateway Authentication & Deserialization", subtitle: "Service Ingestion", description: "Provider gateway terminates TLS, checks API keys/tokens, and unmarshals XML/JSON into memory objects." },
      { step: 4, title: "Business Logic Execution", subtitle: "Service Layer", description: "Core enterprise rules execute, validating input data and calculating outcomes." },
      { step: 5, title: "Database Query / Mutation", subtitle: "Persistence", description: "Service executes SQL queries or mutations within an ACID transaction." },
      { step: 6, title: "Response Return", subtitle: "Client Delivery", description: "Result is serialized into a response envelope with an HTTP status code (e.g. 200 OK) and delivered back." }
    ],

    simulationType: "web-services-flow",

    practicalExample: {
      scenario: "E-Commerce Checkout Calling Payment Service",
      description: "An e-commerce shopping cart making a machine-to-machine web service call to charge a credit card.",
      records: [
        { type: "Request", host: "POST /api/v1/payments", value: "{\"amount\": 149.00, \"currency\": \"USD\"}", ttl: "Client -> Svc", purpose: "Transmits payment authorization request payload" },
        { type: "Logic", host: "PaymentEngine.authorize()", value: "3D Secure Verified", ttl: "Internal", purpose: "Validates card fraud risk and checks account limits" },
        { type: "Response", host: "HTTP 200 OK", value: "{\"status\": \"APPROVED\", \"txId\": \"TX-9021\"}", ttl: "Svc -> Client", purpose: "Delivers confirmation code to consumer application" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Assuming Web Services are only meant for rendering web pages in human browsers",
        reality: "Web services are specifically designed for machine-to-machine (B2B or client-to-API) data exchange! They return raw structured data (JSON/XML), not visual HTML web pages."
      },
      {
        misconception: "Confusing Web Services with standard Web Sites",
        reality: "A Website serves human-readable HTML/CSS meant for human eyeball consumption; a Web Service exposes programmatic APIs meant for software applications to consume directly."
      }
    ],

    relatedTopics: [
      { id: "web-service-architecture", title: "Web Service Architecture & SOA Triangle", unitId: "unit-3" },
      { id: "soap-protocol", title: "SOAP Protocol & Envelope Architecture", unitId: "unit-3" }
    ],

    challenge: {
      id: "challenge-ws-01",
      title: "Diagnose the Platform-Locking Architecture Flaw",
      difficulty: "Beginner",
      badge: "Web Service Principles",
      description: "A developer designs an internal API by serializing raw Java binary serialized objects (`java.io.Serializable`) over raw TCP sockets. The mobile team (building in Swift on iOS) reports that they cannot decode the data.",
      task: "Why does this architecture violate fundamental Web Service principles?",
      options: [
        { id: "opt-1", text: "Swift is not allowed to make network calls on mobile devices.", correct: false, reason: "Swift has full networking capabilities." },
        { id: "opt-2", text: "Java binary serialization is proprietary and platform-dependent; Web Services mandate open, standard, language-neutral message formats like XML or JSON.", correct: true, reason: "Correct! True web services use standardized, platform-independent text/binary formats that any programming language can parse." },
        { id: "opt-3", text: "TCP sockets only support plain-text HTML.", correct: false, reason: "TCP sockets can transmit any binary stream." }
      ],
      hint: "Consider what happens when a non-Java client tries to read a proprietary Java byte-stream."
    },

    quiz: [
      {
        id: "ws-q1",
        question: "According to the W3C, what is the primary purpose of a Web Service?",
        options: [
          "To host personal blog websites with CSS animations.",
          "To provide interoperable machine-to-machine interaction over a network using standardized message formats.",
          "To replace web browsers with desktop software.",
          "To store video files in proprietary formats."
        ],
        correctIndex: 1,
        explanation: "Web services are designed specifically for programmatic machine-to-machine data exchange across disparate platforms and programming languages."
      },
      {
        id: "ws-q2",
        question: "Which of the following describes the 'Loose Coupling' advantage in Web Service architecture?",
        options: [
          "Clients and servers must be written in the exact same programming language.",
          "Clients connect only to a formal contractual interface; the internal server implementation can be refactored without breaking client applications.",
          "Network cables do not need to be plugged in securely.",
          "Services do not require authentication or security."
        ],
        correctIndex: 1,
        explanation: "Loose coupling isolates the client from the server's internal implementation details. As long as the public interface contract remains constant, internal database or language changes will not break consumers."
      }
    ]
  },

  // ==========================================
  // TOPIC 2: UDDI: SERVICE DISCOVERY
  // ==========================================
  "uddi-registry": {
    id: "uddi-registry",
    unitId: "unit-3",
    unitNumber: 3,
    unitTitle: "Unit 3: Web Services, SOAP, WSDL, AJAX & Distributed Computing",
    title: "UDDI: Service Discovery & Business Registries",
    subtitle: "Universal Description, Discovery and Integration: Publishing, categorizing, and querying web service contracts",
    difficulty: "Intermediate",
    estimatedMinutes: 16,
    badge: "Service Discovery",

    definition: "Universal Description, Discovery and Integration (UDDI) is an XML-based OASIS open standard that functions as a distributed, worldwide public or private registry. It enables businesses to publish service capabilities and descriptions, discover partner web services, and query technical WSDL endpoint interfaces across the internet.",

    whyItMatters: "If a company develops an outstanding automated shipping service, other enterprises cannot consume it unless they know it exists, what it does, and where its technical endpoint lives. UDDI solved this by creating a structured 'phone directory' for web services, complete with industrial classification taxonomies.",

    explanation: [
      {
        heading: "Beginner Explanation: The Yellow Pages of Web Services",
        content: "Think of UDDI as the municipal business telephone directory:\n1. White Pages (Who): Lists businesses alphabetically with their corporate names, street addresses, and contact emails.\n2. Yellow Pages (What): Organizes businesses into industrial categories using standard codes (e.g. 'Automotive Parts' or 'Banking Services').\n3. Green Pages (How): Provides the exact technical blueprints and direct telephone extensions (WSDL contract URLs and binding templates) so you can immediately establish communication!"
      },
      {
        heading: "The Three Pillars of UDDI Information Architecture",
        content: "UDDI structures data into three distinct sections:\n- White Pages: Business Entity information including company name, text description, contact personnel, and official business identifiers (such as D-U-N-S numbers).\n- Yellow Pages: Categorization data based on standard industrial taxonomies such as NAICS (North American Industry Classification System) or UNSPSC (Universal Standard Products and Services Classification).\n- Green Pages: Technical specifications (`bindingTemplates` and `tModels`). A `tModel` (Technical Model) acts as a unique cryptographic fingerprint pointing to the service WSDL contract."
      },
      {
        heading: "UDDI Programmatic APIs",
        content: "UDDI exposes two standardized SOAP API interfaces:\n1. Inquiry API: Used by consumers to search the registry without authentication (`find_business`, `find_service`, `find_binding`, `get_serviceDetail`).\n2. Publication API: Used by service providers with credentials to register and maintain entries (`save_business`, `save_service`, `save_binding`, `delete_service`)."
      },
      {
        heading: "Evolution: From Public UDDI to Modern Internal Service Meshes",
        content: "Originally envisioned by IBM, Microsoft, and SAP as a single global public directory, public registries struggled with trust and data staleness. Today, UDDI concepts thrive inside private enterprise intranets, API Gateways (Kong, Apigee, AWS Service Catalog), and microservice discovery engines (Consul, Eureka, Kubernetes DNS)."
      }
    ],

    howItWorks: [
      { step: 1, title: "Provider Authentication", subtitle: "Publication API", description: "Service Provider authenticates with the registry using security credentials." },
      { step: 2, title: "Entity Registration", subtitle: "White & Yellow Pages", description: "Provider submits business identity, contact details, and NAICS/UNSPSC classification codes." },
      { step: 3, title: "Technical Contract Binding", subtitle: "Green Pages", description: "Provider registers bindingTemplate pointing to the live WSDL URL and binds a unique tModel." },
      { step: 4, title: "Consumer Query", subtitle: "Inquiry API", description: "Consumer executes find_service() matching a keyword or industry category." },
      { step: 5, title: "Contract Retrieval", subtitle: "WSDL Resolution", description: "Registry returns the WSDL URI, enabling the consumer to generate client proxy stubs." }
    ],

    simulationType: "uddi-discovery",

    practicalExample: {
      scenario: "Discovering Currency Conversion Gateway",
      description: "An enterprise ERP querying a UDDI registry to find an accredited foreign exchange rate service.",
      records: [
        { type: "White Pages", host: "businessEntity", value: "Continental Reserve Bank", ttl: "Identity", purpose: "Identifies registered provider corporate entity" },
        { type: "Yellow Pages", host: "categoryBag", value: "NAICS: 523130 (Securities & Forex)", ttl: "Taxonomy", purpose: "Enables consumers to query by industry sector" },
        { type: "Green Pages", host: "accessPoint", value: "http://fx.reservebank.eu/soap/exchange.wsdl", ttl: "Technical", purpose: "Supplies the live WSDL endpoint address" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Assuming UDDI executes the actual business transaction itself",
        reality: "UDDI is strictly a lookup directory! Once the consumer discovers the service and downloads the WSDL, the consumer communicates directly with the Provider over SOAP/HTTP, bypassing UDDI entirely."
      },
      {
        misconception: "Confusing tModel with the web service implementation",
        reality: "A `tModel` in UDDI is a technical fingerprint or abstract specification reference (usually pointing to a WSDL or standard interface), not the backend code itself."
      }
    ],

    relatedTopics: [
      { id: "intro-web-services", title: "Introduction to Web Services", unitId: "unit-3" },
      { id: "wsdl-contracts", title: "WSDL Service Contracts", unitId: "unit-3" }
    ],

    challenge: {
      id: "challenge-uddi-01",
      title: "Identify the Missing UDDI Section",
      difficulty: "Intermediate",
      badge: "UDDI Structure",
      description: "A consumer queries a UDDI registry. They locate the company name and email (White Pages) and the NAICS code (Yellow Pages). However, their developer tools cannot auto-generate client stubs because the technical WSDL URL is nowhere to be found.",
      task: "Which section of the UDDI entry was omitted or incomplete?",
      options: [
        { id: "opt-1", text: "The Blue Pages.", correct: false, reason: "UDDI does not have a Blue Pages section." },
        { id: "opt-2", text: "The Green Pages (which contain bindingTemplates and technical WSDL/tModel specifications).", correct: true, reason: "Correct! The Green Pages store the technical binding templates and WSDL URIs necessary for client code generation." },
        { id: "opt-3", text: "The SSL Certificate section.", correct: false, reason: "SSL certificates are managed at the transport layer, not in UDDI." }
      ],
      hint: "Remember which 'color' of the UDDI pages stores technical endpoint URIs and tModels."
    },

    quiz: [
      {
        id: "uddi-q1",
        question: "In UDDI terminology, what information is stored within the 'Yellow Pages'?",
        options: [
          "Company legal name, phone number, and mailing address.",
          "Categorization and taxonomy data based on standard industrial classification codes (e.g. NAICS or UNSPSC).",
          "Binary machine code executables.",
          "Encrypted database passwords."
        ],
        correctIndex: 1,
        explanation: "Yellow Pages categorize registered services by standard business and industry taxonomies (such as NAICS or UNSPSC), allowing consumers to browse services by domain."
      },
      {
        id: "uddi-q2",
        question: "What is a 'tModel' in the context of UDDI Green Pages?",
        options: [
          "A three-dimensional graphic model of the server room.",
          "A technical specification fingerprint that defines the interface, protocol, and WSDL contract of a web service.",
          "A test account used for development billing.",
          "A hardware driver for network switches."
        ],
        correctIndex: 1,
        explanation: "A tModel (Technical Model) is a conceptual fingerprint in UDDI that points to an abstract specification, WSDL document, or protocol standard that the service adheres to."
      }
    ]
  },

  // ==========================================
  // TOPIC 3: SOAP PROTOCOL & ENVELOPE ARCHITECTURE
  // ==========================================
  "soap-protocol": {
    id: "soap-protocol",
    unitId: "unit-3",
    unitNumber: 3,
    unitTitle: "Unit 3: Web Services, SOAP, WSDL, AJAX & Distributed Computing",
    title: "SOAP: Simple Object Access Protocol & Envelopes",
    subtitle: "W3C message formatting standard: Envelope, Header, Body, Fault, and RPC/Document transmission",
    difficulty: "Intermediate",
    estimatedMinutes: 18,
    badge: "SOAP Protocol",

    definition: "Simple Object Access Protocol (SOAP) is a formal, highly structured, XML-based messaging protocol standardized by the W3C for exchanging structured information in decentralized, distributed web service architectures. It provides a formal envelope framework consisting of an Envelope root, optional Header for metadata, mandatory Body for payload data, and standardized Fault elements for error handling.",

    whyItMatters: "While lightweight REST/JSON is popular for consumer apps, SOAP remains the gold standard in enterprise banking, defense, and healthcare. SOAP enforces strict contractual typing (via WSDL), enterprise-grade security (WS-Security / WS-Trust), reliable messaging (WS-ReliableMessaging), and ACID transaction propagation across multi-hop distributed enterprise networks.",

    explanation: [
      {
        heading: "Beginner Explanation: The Tamper-Evident Security Mailer",
        content: "Think of SOAP like a heavy-duty, tamper-evident corporate express mail envelope:\n- The Envelope (`<soap:Envelope>`): The mandatory outer shipping package that holds everything together.\n- The Header (`<soap:Header>`): The shipping label and security seals attached to the outside (Authentication badges, tracking IDs, routing routing instructions). Mail handlers can inspect the seals without opening the package!\n- The Body (`<soap:Body>`): The confidential letter inside containing the actual payload (e.g. 'Transfer $500 from Account A to Account B').\n- The Fault (`<soap:Fault>`): A red return slip inserted by the delivery courier if delivery fails, explaining the exact reason why the package was rejected."
      },
      {
        heading: "The Four Components of a SOAP Message",
        content: "Every valid SOAP message is an XML document structured into 4 parts:\n1. `<soap:Envelope>`: The mandatory root element that identifies the XML document as a SOAP message and declares XML namespaces (`xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"`).\n2. `<soap:Header>`: An optional child element containing routing and processing directives (e.g. WS-Security credentials, transaction IDs, WS-Addressing).\n   - `mustUnderstand=\"1\"`: If present on a header block, the receiving node MUST process the header or reject the entire message with a Fault.\n3. `<soap:Body>`: The mandatory child element containing the actual application call parameters or response data.\n4. `<soap:Fault>`: A standardized sub-element of `<soap:Body>` emitted only when an error occurs during processing."
      },
      {
        heading: "SOAP Fault Architecture: Standardized Error Handling",
        content: "Unlike REST where error conventions vary wildly between developers, SOAP mandates a strict, uniform error schema inside `<soap:Fault>`:\n- `<faultcode>`: Machine-readable error code (e.g. `soap:Client`, `soap:Server`, `soap:MustUnderstand`, `soap:VersionMismatch`).\n- `<faultstring>`: Human-readable explanation of the failure.\n- `<faultactor>`: Identifies which node in the transmission chain caused the fault.\n- `<detail>`: Application-specific error diagnostics (e.g. `<errorCode>ERR_INSUFFICIENT_FUNDS</errorCode>`)."
      },
      {
        heading: "SOAP Styles: Document vs. RPC Style",
        content: "SOAP services can be designed in two formats:\n- Document Style (Preferred): The `<soap:Body>` contains a complete XML document fragment validated directly against an XSD schema. Loosely coupled and versatile.\n- RPC Style: The `<soap:Body>` mirrors a programmatic method call with wrapper elements matching function names and parameter names. Tightly coupled to programming language signatures."
      }
    ],

    howItWorks: [
      { step: 1, title: "Message Serialization", subtitle: "Client Proxy", description: "Consumer proxy wraps parameters into <soap:Envelope> with declared namespaces." },
      { step: 2, title: "Header Attachment", subtitle: "WS-Security", description: "Client injects authentication tokens or digital signatures into <soap:Header>." },
      { step: 3, title: "HTTP Transport", subtitle: "Port 80/443", description: "Envelope is sent via HTTP POST with Content-Type: text/xml or application/soap+xml." },
      { step: 4, title: "Server Ingestion", subtitle: "Header Inspection", description: "Service checks mustUnderstand headers; executes security decryption if required." },
      { step: 5, title: "Body Execution", subtitle: "Business Logic", description: "Service deserializes <soap:Body> payload and invokes underlying business service." },
      { step: 6, title: "Response / Fault Emission", subtitle: "Return Envelope", description: "Service returns a response envelope or a standardized <soap:Fault> on error." }
    ],

    simulationType: "soap-builder",

    practicalExample: {
      scenario: "Interbank Wire Transfer SOAP Message",
      description: "A complete SOAP request envelope with WS-Security header and funds transfer parameters.",
      records: [
        { type: "<soap:Envelope>", host: "Root Element", value: "xmlns:soap='...'", ttl: "Container", purpose: "Identifies message as W3C SOAP 1.1/1.2 format" },
        { type: "<soap:Header>", host: "wsse:Security", value: "BinarySecurityToken", ttl: "Security", purpose: "Passes cryptographic authentication token across hops" },
        { type: "<soap:Body>", host: "TransferFundsRequest", value: "acc: 1044, amt: $500", ttl: "Payload", purpose: "Encapsulates operation parameters validated against XSD" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Placing the <soap:Header> after the <soap:Body> element",
        reality: "The W3C SOAP specification strictly mandates that if a `<soap:Header>` is present, it MUST be the very first child of the `<soap:Envelope>`. Placing it after the Body invalidates the message."
      },
      {
        misconception: "Using HTTP GET to dispatch SOAP messages",
        reality: "SOAP messages require a payload body and are almost universally dispatched via HTTP POST with mandatory `Content-Type` headers."
      }
    ],

    relatedTopics: [
      { id: "intro-web-services", title: "Introduction to Web Services", unitId: "unit-3" },
      { id: "wsdl-contracts", title: "WSDL Service Contracts", unitId: "unit-3" }
    ],

    challenge: {
      id: "challenge-soap-01",
      title: "Resolve the mustUnderstand Fault",
      difficulty: "Intermediate",
      badge: "SOAP Headers",
      description: "A client sends a SOAP request containing `<soap:Header><auth:Token soap:mustUnderstand=\"1\">TOKEN_X</auth:Token></soap:Header>`. The receiving server does not recognize the 'auth:Token' header and returns a SOAP Fault.",
      task: "Why did the server reject the message rather than ignoring the unknown header?",
      options: [
        { id: "opt-1", text: "The server ran out of disk space.", correct: false, reason: "Disk space is unrelated to header processing." },
        { id: "opt-2", text: "The mustUnderstand=\"1\" attribute commands that if a receiver does not recognize and process that specific header block, it MUST abort and emit a MustUnderstand fault.", correct: true, reason: "Correct! mustUnderstand=\"1\" enforces mandatory header compliance across all intermediate and terminal SOAP nodes." },
        { id: "opt-3", text: "Headers are not permitted in SOAP 1.1.", correct: false, reason: "Headers are standard in both SOAP 1.1 and 1.2." }
      ],
      hint: "Review the exact contractual meaning of the `mustUnderstand=\"1\"` attribute in the SOAP specification."
    },

    quiz: [
      {
        id: "soap-q1",
        question: "Which of the following child elements of <soap:Envelope> is MANDATORY in every valid SOAP message?",
        options: [
          "<soap:Header>",
          "<soap:Body>",
          "<soap:Attachment>",
          "<soap:Security>"
        ],
        correctIndex: 1,
        explanation: "The <soap:Body> element is mandatory in every SOAP envelope; it contains the call parameters, response payload, or Fault error structure. The <soap:Header> is optional."
      },
      {
        id: "soap-q2",
        question: "What is the purpose of the <soap:Fault> element in a SOAP response?",
        options: [
          "To speed up network data transmission.",
          "To provide a uniform, standardized XML error reporting structure containing faultcode, faultstring, and detail.",
          "To delete database records on the server.",
          "To convert XML into JSON automatically."
        ],
        correctIndex: 1,
        explanation: "<soap:Fault> standardizes error reporting across all SOAP web services, ensuring client libraries can parse error codes and diagnostic details consistently."
      }
    ]
  },

  // ==========================================
  // TOPIC 4: WSDL SERVICE CONTRACTS
  // ==========================================
  "wsdl-contracts": {
    id: "wsdl-contracts",
    unitId: "unit-3",
    unitNumber: 3,
    unitTitle: "Unit 3: Web Services, SOAP, WSDL, AJAX & Distributed Computing",
    title: "WSDL: Web Services Description Language",
    subtitle: "The 5-tier XML contractual interface: Types, Message, PortType, Binding, and Service",
    difficulty: "Intermediate",
    estimatedMinutes: 18,
    badge: "WSDL Contracts",

    definition: "Web Services Description Language (WSDL) is an XML-formatted interface definition language standardized by the W3C for describing the functional capabilities, message payloads, transmission protocols, and physical network endpoints of a web service. It serves as a binding contract between provider and consumer, enabling automated client stub generation.",

    whyItMatters: "In distributed computing, clients need an unambiguous contract detailing what methods are available, what parameter data types are expected, what protocol to speak (SOAP 1.1/1.2 over HTTP), and which URL to hit. WSDL provides this exact machine-readable specification, eliminating manual integration guesswork.",

    explanation: [
      {
        heading: "Beginner Explanation: The Legal Contract and Electrical Outlet",
        content: "Think of WSDL as two things in one:\n1. The Legal Contract (Abstract): Declares what functions the business promises to provide ('If you send a valid ZIP code, we guarantee to return temperature and humidity').\n2. The Physical Plug & Voltage Spec (Concrete): Specifies the physical outlet shape and location ('We accept 3-prong grounded plugs on Port 443 at https://api.weather.org/soap').\n\nSoftware tools read this contract and automatically generate the client proxy code—you never have to write raw HTTP socket code by hand!"
      },
      {
        heading: "The 5 Core Elements of a WSDL Document",
        content: "A WSDL document is organized into 5 hierarchical elements:\n1. `<wsdl:types>`: Data type definitions. Uses W3C XML Schema (XSD) to define complex elements (like `Customer`, `OrderRecord`).\n2. `<wsdl:message>`: Defines the abstract input and output message envelopes by referencing the typed elements.\n3. `<wsdl:portType>`: Defines the set of abstract operations (methods) exposed by the service (analogous to a Java interface or C# header file).\n4. `<wsdl:binding>`: Binds the abstract `<portType>` to a concrete wire protocol (SOAP 1.1, SOAP 1.2, HTTP GET/POST) and encoding style (document/literal or rpc/encoded).\n5. `<wsdl:service>`: Specifies the concrete physical network address (URL) where the service port is listening."
      },
      {
        heading: "Abstract vs. Concrete Separation of Concerns",
        content: "WSDL enforces a clean architectural separation:\n- Abstract Layer (`types`, `message`, `portType`): Defines WHAT operations the service performs and WHAT data structures it exchanges, completely independent of network protocols.\n- Concrete Layer (`binding`, `service`): Defines HOW (which protocol/transport) and WHERE (which URL endpoint) the operations are actually executed."
      },
      {
        heading: "WSDL Operation Patterns (Transmission Primitives)",
        content: "WSDL supports 4 fundamental message exchange patterns (MEPs):\n1. One-Way: Client sends a message to the service; no response is returned.\n2. Request-Response (Most Common): Client sends request; service returns response.\n3. Solicit-Response: Service sends request; client returns response.\n4. Notification: Service broadcasts message to client; no response expected."
      }
    ],

    howItWorks: [
      { step: 1, title: "Schema Definition (<types>)", subtitle: "Data Layer", description: "XSD schemas declare all primitive and complex XML structures." },
      { step: 2, title: "Parameter Packaging (<message>)", subtitle: "Wire Envelopes", description: "Input and output messages are defined with typed parts." },
      { step: 3, title: "Interface Declaration (<portType>)", subtitle: "Abstract Contract", description: "Operations are named and paired with input/output messages." },
      { step: 4, title: "Protocol Binding (<binding>)", subtitle: "Wire Transport", description: "Specifies SOAP 1.2 over HTTP transport and document/literal formatting." },
      { step: 5, title: "Endpoint Publication (<service>)", subtitle: "Concrete URL", description: "Assigns the concrete physical URL address (e.g. https://api.bank.com/soap)." }
    ],

    simulationType: "wsdl-explorer",

    practicalExample: {
      scenario: "Weather Telemetry Service Contract",
      description: "A WSDL 1.1 document defining a GetForecast operation over SOAP 1.2 HTTP binding.",
      records: [
        { type: "<wsdl:types>", host: "xs:element", value: "ZipCode (string), Temp (decimal)", ttl: "Types", purpose: "Enforces data type safety via embedded XML Schema" },
        { type: "<wsdl:portType>", host: "operation", value: "GetForecast", ttl: "Interface", purpose: "Declares callable method signature" },
        { type: "<wsdl:service>", host: "soap:address", value: "https://api.weather.org/soap", ttl: "Endpoint", purpose: "Declares exact network location URL" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Assuming <portType> defines the physical IP address or URL of the server",
        reality: "<portType> is strictly an abstract interface (like a Java interface). The actual URL endpoint is declared in the `<wsdl:service>` element inside `<soap:address location=\"...\">`."
      },
      {
        misconception: "Editing generated client proxy stubs manually instead of regenerating from WSDL",
        reality: "Whenever a WSDL changes, developer tools (`wsimport`, `dotnet-svcutil`) should regenerate the stubs automatically. Manual edits to proxy classes will be overwritten."
      }
    ],

    relatedTopics: [
      { id: "soap-protocol", title: "SOAP Protocol & Envelope Architecture", unitId: "unit-3" },
      { id: "web-service-architecture", title: "Web Service Architecture", unitId: "unit-3" }
    ],

    challenge: {
      id: "challenge-wsdl-01",
      title: "Identify the WSDL Layer for SOAP Protocol Binding",
      difficulty: "Intermediate",
      badge: "WSDL Structure",
      description: "A developer wants to upgrade a service from SOAP 1.1 to SOAP 1.2 and change the transport from HTTP to SMTP, but wants to keep the method names and parameter types completely unchanged.",
      task: "Which element in the WSDL document must be modified?",
      options: [
        { id: "opt-1", text: "The <wsdl:types> section.", correct: false, reason: "Types only defines data schemas, not transport protocols." },
        { id: "opt-2", text: "The <wsdl:binding> section.", correct: true, reason: "Correct! The <binding> element maps abstract portTypes to concrete protocols (SOAP 1.1/1.2) and transport layers (HTTP/SMTP)." },
        { id: "opt-3", text: "The <wsdl:portType> section.", correct: false, reason: "PortType defines the abstract interface and is protocol-independent." }
      ],
      hint: "Look for the WSDL section responsible for binding abstract interfaces to concrete transport protocols."
    },

    quiz: [
      {
        id: "wsdl-q1",
        question: "In WSDL, which element corresponds conceptually to an 'interface' definition in object-oriented programming (e.g. Java or C#)?",
        options: [
          "<wsdl:types>",
          "<wsdl:message>",
          "<wsdl:portType>",
          "<wsdl:service>"
        ],
        correctIndex: 2,
        explanation: "<wsdl:portType> defines the abstract operations (methods) and their associated input/output messages without committing to any physical transport or encoding."
      },
      {
        id: "wsdl-q2",
        question: "Which WSDL element contains the physical URL address where the web service is deployed?",
        options: [
          "<wsdl:service> (inside <soap:address>)",
          "<wsdl:portType>",
          "<wsdl:types>",
          "<wsdl:message>"
        ],
        correctIndex: 0,
        explanation: "The <wsdl:service> element groups physical ports, each defining a concrete <soap:address location=\"https://...\"> where the service endpoint is hosted."
      }
    ]
  },

  // ==========================================
  // TOPIC 5: WEB SERVICE ARCHITECTURE & THE SOA TRIANGLE
  // ==========================================
  "web-service-architecture": {
    id: "web-service-architecture",
    unitId: "unit-3",
    unitNumber: 3,
    unitTitle: "Unit 3: Web Services, SOAP, WSDL, AJAX & Distributed Computing",
    title: "Web Service Architecture & The SOA Triangle",
    subtitle: "The Publish-Find-Bind model: Service Provider, Service Registry, and Service Consumer roles",
    difficulty: "Intermediate",
    estimatedMinutes: 16,
    badge: "SOA Architecture",

    definition: "Web Service Architecture is structured upon the Service-Oriented Architecture (SOA) triangle, defined by three primary roles (Service Provider, Service Registry, and Service Consumer) and three fundamental operations: Publish (provider registers service description in registry), Find (consumer queries registry to locate service), and Bind (consumer directly invokes service operations using SOAP/HTTP).",

    whyItMatters: "Understanding the SOA triangle clarifies how decoupled enterprise systems interact dynamically. It separates the discovery phase (finding where a service lives) from the execution phase (transmitting high-performance business transactions directly between consumer and provider).",

    explanation: [
      {
        heading: "Beginner Explanation: The Real Estate Agent Analogy",
        content: "Think of the SOA triangle like finding an apartment:\n1. Property Owner (Service Provider): Has an apartment to rent (The Service) and writes a description of bedrooms and rent (The WSDL).\n2. Real Estate Agency (UDDI Registry): The owner publishes the listing in the agency catalog (Publish).\n3. Renter (Service Consumer): Searches the agency catalog for 2-bedroom apartments (Find).\n4. The Direct Lease (Bind): The agency hands the renter the apartment address. The renter visits the owner directly and signs the lease (Bind). The agency is no longer involved in the transaction!"
      },
      {
        heading: "The Three Roles in the SOA Triangle",
        content: "1. Service Provider: Designs the service, generates the WSDL contract, hosts the software on an application server, and responds to incoming invocations.\n2. Service Registry: A centralized searchable directory (like UDDI) that catalogs published services and stores their WSDL metadata.\n3. Service Consumer: The client application that queries the registry, downloads the WSDL contract, synthesizes proxy code, and executes remote operations."
      },
      {
        heading: "The Three Core Operations",
        content: "1. Publish: Provider registers its capabilities, taxonomy, and WSDL location with the Registry.\n2. Find: Consumer queries the Registry specifying desired functionality (e.g. 'Currency Conversion').\n3. Bind: Consumer uses binding details from the WSDL to communicate directly with the Provider over HTTP/SOAP."
      },
      {
        heading: "Direct vs. Brokered Execution",
        content: "A vital architectural nuance: The Registry is ONLY involved during discovery! Once the consumer obtains the WSDL, the Registry steps out of the data path. Business transactions flow directly between Consumer and Provider, guaranteeing maximum throughput, low latency, and zero bottleneck at the registry."
      }
    ],

    howItWorks: [
      { step: 1, title: "Contract Creation", subtitle: "Provider Action", description: "Provider drafts WSDL interface declaring operations and schemas." },
      { step: 2, title: "Publish Operation", subtitle: "Provider -> Registry", description: "Provider calls UDDI publish API to index service in the central registry." },
      { step: 3, title: "Find Operation", subtitle: "Consumer -> Registry", description: "Consumer queries registry looking for matching business category." },
      { step: 4, title: "Contract Delivery", subtitle: "Registry -> Consumer", description: "Registry returns WSDL URI and tModel metadata to consumer." },
      { step: 5, title: "Proxy Synthesis", subtitle: "Consumer Tooling", description: "Consumer compiler generates strongly-typed client stubs from WSDL." },
      { step: 6, title: "Bind Operation", subtitle: "Consumer -> Provider", description: "Consumer sends SOAP request directly to Provider endpoint." },
      { step: 7, title: "Execution & Response", subtitle: "Provider -> Consumer", description: "Provider executes logic and returns SOAP response directly to consumer." }
    ],

    simulationType: "ws-architecture",

    practicalExample: {
      scenario: "Automated Supply Chain Re-stocking",
      description: "An automated warehouse robotics system discovering and ordering supplies from certified suppliers.",
      records: [
        { type: "Publish", host: "UDDI Registry", value: "SupplierParts.wsdl", ttl: "Discovery", purpose: "Supplier advertises parts inventory API" },
        { type: "Find", host: "Warehouse ERP", value: "find_service('AutomotiveBolts')", ttl: "Lookup", purpose: "Warehouse queries registry for accredited supplier" },
        { type: "Bind", host: "Direct SOAP Call", value: "OrderParts(sku: 4410, qty: 1000)", ttl: "Execution", purpose: "Warehouse executes direct transaction with supplier server" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Believing that every SOAP message must travel through the UDDI registry",
        reality: "The registry is NEVER in the execution path! It is purely a lookup service. The 'Bind' phase is a direct machine-to-machine socket connection between consumer and provider."
      },
      {
        misconception: "Assuming the consumer cannot bind if the registry goes offline after initial discovery",
        reality: "Once a consumer downloads the WSDL and caches the endpoint URL, it can continue executing transactions indefinitely even if the registry is temporarily down."
      }
    ],

    relatedTopics: [
      { id: "intro-web-services", title: "Introduction to Web Services", unitId: "unit-3" },
      { id: "uddi-registry", title: "UDDI Service Discovery", unitId: "unit-3" }
    ],

    challenge: {
      id: "challenge-soa-01",
      title: "Identify the SOA Triangle Bottleneck Fallacy",
      difficulty: "Intermediate",
      badge: "SOA Architecture",
      description: "A system administrator worries that during Black Friday peak shopping hours, the millions of customer checkout transactions will overwhelm and crash the UDDI registry server.",
      task: "Why is the administrator's concern fundamentally mistaken?",
      options: [
        { id: "opt-1", text: "UDDI registries have unlimited memory.", correct: false, reason: "No hardware server has unlimited memory." },
        { id: "opt-2", text: "During runtime checkout execution (Bind), consumer clients communicate directly with the Payment Provider; the UDDI registry handles only discovery and never routes transaction payloads.", correct: true, reason: "Correct! Runtime transactions bypass the registry completely. The registry is only contacted during initial service discovery." },
        { id: "opt-3", text: "Black Friday traffic only affects HTML websites, not web services.", correct: false, reason: "APIs process all e-commerce transactions." }
      ],
      hint: "Remember whether the registry sits inside or outside the 'Bind' communication path."
    },

    quiz: [
      {
        id: "soa-q1",
        question: "What are the three fundamental operations that define the Service-Oriented Architecture (SOA) triangle?",
        options: [
          "Create, Read, Delete",
          "Publish, Find, and Bind",
          "Compile, Link, and Execute",
          "Push, Pull, and Commit"
        ],
        correctIndex: 1,
        explanation: "The SOA triangle is governed by Publish (provider registers with registry), Find (consumer searches registry), and Bind (consumer invokes provider directly)."
      },
      {
        id: "soa-q2",
        question: "What occurs during the 'Bind' phase of the Web Service Architecture?",
        options: [
          "The consumer compiles the operating system kernel.",
          "The consumer uses the binding details from the WSDL to transmit request envelopes directly to the service provider.",
          "The provider registers with the search engine.",
          "The registry converts XML into HTML."
        ],
        correctIndex: 1,
        explanation: "During Bind, the consumer establishes a direct network connection with the provider to execute remote operations using the protocol and endpoint declared in the WSDL."
      }
    ]
  },

  // ==========================================
  // TOPIC 6: DEVELOPING AND DEPLOYING WEB SERVICES
  // ==========================================
  "developing-deploying-web-services": {
    id: "developing-deploying-web-services",
    unitId: "unit-3",
    unitNumber: 3,
    unitTitle: "Unit 3: Web Services, SOAP, WSDL, AJAX & Distributed Computing",
    title: "Developing & Deploying Web Services",
    subtitle: "The 7-phase enterprise development lifecycle: Design, Implement, Expose, Deploy, Discover, Consume, and Monitor",
    difficulty: "Intermediate",
    estimatedMinutes: 20,
    badge: "Service Lifecycle",

    definition: "The development and deployment lifecycle of web services encompasses the structured engineering methodology required to take a service from initial interface design through implementation, annotation-based endpoint exposure, containerized application deployment, registry publication, client stub consumption, and production telemetry monitoring.",

    whyItMatters: "Building enterprise web services is vastly different from writing isolated scripts. High-availability services demand rigorous contracts that don't break downstream partners, standardized deployment descriptors, automated client proxy generation, and real-time monitoring of SLAs, latency, and cryptographic WS-Security tokens.",

    explanation: [
      {
        heading: "Beginner Explanation: From Factory Blueprint to Live Utility",
        content: "Developing a web service is like launching an electric power utility:\n1. Design: You draw standard socket specs and voltage bounds (WSDL/XSD).\n2. Implement: You build the power generators and safety breakers (Business logic).\n3. Expose: You install standardized junction boxes on the building exterior (JAX-WS Annotations).\n4. Deploy: You fire up the plant and connect it to the municipal grid (Application Server / Docker).\n5. Discover: You list the utility in the city public services guide (UDDI Registry).\n6. Consume: Households plug in standard appliances and turn on the lights (Client stubs).\n7. Monitor: Technicians watch meter dials and circuit load 24/7 (Prometheus/Grafana Telemetry)."
      },
      {
        heading: "Contract-First vs. Code-First Development",
        content: "Developers choose between two primary methodologies:\n- Contract-First (Top-Down): The developer writes the WSDL and XSD schemas first, ensuring the public interface is pristine. Compiler tools then auto-generate the skeleton Java/C# classes. Highly recommended for enterprise B2B integrations because interface changes can be strictly versioned.\n- Code-First (Bottom-Up): The developer writes standard business classes in Java or C# and adds declarative annotations (like `@WebService`, `@WebMethod`). The runtime compiler automatically exports a WSDL. Fast and convenient for internal team prototypes."
      },
      {
        heading: "The 7 Stages of the Service Lifecycle",
        content: "1. Design: Establish data schemas and error faults.\n2. Implement: Code enterprise service logic and database integration.\n3. Expose: Add `@WebService` and endpoint configurations.\n4. Deploy: Package into WAR/container and deploy to Tomcat, WildFly, or Kestrel.\n5. Discover: Publish endpoint URI to central API catalogs.\n6. Consume: Downstream clients run `wsimport` or `svcutil` to auto-generate proxies.\n7. Monitor: Audit SLAs, throughput, latency, and WS-Security signatures."
      },
      {
        heading: "Client Stub (Proxy) Generation",
        content: "A major engineering triumph of web services is client automation. Instead of manually parsing XML strings and managing HTTP sockets, client developers execute commands like `wsimport -keep https://service.com/orders.wsdl`. The tool inspects the WSDL and outputs native language classes (`OrderService.java`). Developers simply call `service.placeOrder()` as if the code were running locally!"
      }
    ],

    howItWorks: [
      { step: 1, title: "Interface Modeling", subtitle: "Phase 1: Design", description: "Define XML Schema data types and operation contracts." },
      { step: 2, title: "Business Coding", subtitle: "Phase 2: Implement", description: "Write business rules, validations, and database transactions." },
      { step: 3, title: "Endpoint Exposure", subtitle: "Phase 3: Expose", description: "Apply JAX-WS or .NET annotations to map methods to SOAP endpoints." },
      { step: 4, title: "Server Deployment", subtitle: "Phase 4: Deploy", description: "Deploy container package to application server with HTTPS certificates." },
      { step: 5, title: "Registry Publication", subtitle: "Phase 5: Discover", description: "Publish WSDL URI to UDDI directory or internal API catalog." },
      { step: 6, title: "Client Proxy Generation", subtitle: "Phase 6: Consume", description: "Consumer generates proxy classes and invokes remote operations." },
      { step: 7, title: "Production Telemetry", subtitle: "Phase 7: Monitor", description: "Track SLA uptime, latency, and inspect WS-Security audit logs." }
    ],

    simulationType: "ws-lifecycle",

    practicalExample: {
      scenario: "Deploying JAX-WS Web Service in Java",
      description: "Developing, deploying, and generating client stubs for a banking loan calculator service.",
      records: [
        { type: "Annotation", host: "@WebService", value: "endpointInterface = 'LoanService'", ttl: "Expose", purpose: "Commands runtime to bind class to WSDL contract" },
        { type: "Build", host: "Docker / WAR", value: "port: 8443, SSL: enabled", ttl: "Deploy", purpose: "Packages service into production container" },
        { type: "Tooling", host: "wsimport", value: "-keep https://api.bank.com/loans.wsdl", ttl: "Consume", purpose: "Auto-generates Java client proxy stubs" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Changing method signatures in a Code-First service without notifying consumers",
        reality: "In Code-First, altering a method parameter changes the auto-generated WSDL! This immediately breaks all existing client proxy stubs in production. Use Contract-First and version your endpoints (e.g. `/v2/loans`)."
      },
      {
        misconception: "Assuming client proxy stubs stay updated automatically when the server WSDL changes",
        reality: "Client stubs are static compiled classes! If the server updates its WSDL, client teams must re-run `wsimport` or `svcutil` to regenerate and recompile their proxy code."
      }
    ],

    relatedTopics: [
      { id: "wsdl-contracts", title: "WSDL Service Contracts", unitId: "unit-3" },
      { id: "web-service-architecture", title: "Web Service Architecture", unitId: "unit-3" }
    ],

    challenge: {
      id: "challenge-deploy-01",
      title: "Select Between Contract-First and Code-First",
      difficulty: "Intermediate",
      badge: "Lifecycle Strategy",
      description: "A consortium of 40 independent international banking partners is building a unified settlement network. Each bank uses different programming languages (Java, C#, C++, Python) and different development timelines.",
      task: "Which development approach should the consortium mandate?",
      options: [
        { id: "opt-1", text: "Code-First, because writing Java code is faster than writing XML schemas.", correct: false, reason: "Code-First couples the contract to Java-specific runtime conventions, causing cross-platform friction." },
        { id: "opt-2", text: "Contract-First (WSDL/XSD modeling), because it establishes a neutral, platform-independent contractual standard that all 40 banks can implement and validate against in their own chosen languages.", correct: true, reason: "Correct! Contract-First ensures zero vendor bias, strict versioning, and seamless interoperability across heterogeneous enterprise stacks." },
        { id: "opt-3", text: "Neither; distributed systems cannot be built with more than 5 partners.", correct: false, reason: "Global networks successfully interconnect thousands of partners." }
      ],
      hint: "Consider which approach prevents language-specific quirks from leaking into the public API contract."
    },

    quiz: [
      {
        id: "deploy-q1",
        question: "In the JAX-WS Java enterprise standard, what command-line tool is used to generate client proxy stubs directly from a WSDL URL?",
        options: [
          "wsimport",
          "javac",
          "npm install",
          "curl"
        ],
        correctIndex: 0,
        explanation: "wsimport is the standard JAX-WS tool that reads a WSDL contract and generates Java client stubs and model classes for seamless invocation."
      },
      {
        id: "deploy-q2",
        question: "Why is 'Contract-First' development strongly preferred over 'Code-First' for large multi-organizational integrations?",
        options: [
          "It avoids writing computer code entirely.",
          "It decouples the contractual API interface from internal programming language implementations, guaranteeing platform neutrality and strict versioning.",
          "It compiles faster on Windows machines.",
          "It eliminates the need for unit testing."
        ],
        correctIndex: 1,
        explanation: "Contract-First defines the WSDL/XSD interfaces upfront, preventing language-specific quirks (e.g. Java object wrappers or C# conventions) from polluting the cross-platform specification."
      }
    ]
  },

  // ==========================================
  // TOPIC 7: AJAX: ASYNCHRONOUS JAVASCRIPT AND XML
  // ==========================================
  "ajax-foundations": {
    id: "ajax-foundations",
    unitId: "unit-3",
    unitNumber: 3,
    unitTitle: "Unit 3: Web Services, SOAP, WSDL, AJAX & Distributed Computing",
    title: "AJAX: Asynchronous JavaScript and XML",
    subtitle: "The breakthrough web paradigm: Background HTTP communication, zero-reload browsing, and partial DOM updates",
    difficulty: "Beginner",
    estimatedMinutes: 18,
    badge: "AJAX Foundations",

    definition: "Asynchronous JavaScript and XML (AJAX) is a web development paradigm that enables web applications to send and retrieve data asynchronously from a web server in the background without reloading or refreshing the current HTML page. It bridges client-side JavaScript with server-side endpoints, allowing surgical, real-time mutations of the Document Object Model (DOM).",

    whyItMatters: "Before AJAX, every single click on a website—such as submitting a form or clicking 'Next Page'—forced the browser to destroy the current page, display an empty white screen flash, and re-download all HTML, CSS, images, and scripts from scratch. AJAX transformed the web into an application runtime, powering Google Maps, Gmail, Twitter, and modern Single-Page Applications (SPAs).",

    explanation: [
      {
        heading: "Beginner Explanation: The Restaurant Waiter vs. Rebuilding the Building",
        content: "Imagine dining at a restaurant:\n- The Traditional Model (Synchronous): You want more salt. In the old web model, the entire restaurant building is demolished, the chefs rebuild the dining room from scratch, lay new carpets, and seat you at a fresh table with a salt shaker on it! (Full page reload, blank screen flicker, lost state).\n\n- The AJAX Model (Asynchronous): You stay comfortably seated. You ask the waiter (The JavaScript background request) for salt. You continue your conversation uninterrupted. The waiter returns from the pantry with only the salt (Data payload) and sets it neatly on your table (Partial DOM update)!"
      },
      {
        heading: "The Traditional Synchronous vs. Asynchronous Loop",
        content: "Compare the two execution loops:\n\n1. Traditional Web Interaction:\n`User Action` $\\rightarrow$ `Synchronous HTTP Request` $\\rightarrow$ `Browser Freezes (UI Unresponsive)` $\\rightarrow$ `Server Generates Full HTML` $\\rightarrow$ `Full Page Destroyed & Rebuilt (Blank White Flash)`.\n\n2. AJAX Asynchronous Interaction:\n`User Action` $\\rightarrow$ `JavaScript Dispatches Request in Background` $\\rightarrow$ `Browser Stays Fully Interactive` $\\rightarrow$ `Server Returns Only Raw Data (JSON/XML)` $\\rightarrow$ `JavaScript Updates Only the Target Container in DOM`."
      },
      {
        heading: "Core Building Blocks of AJAX",
        content: "AJAX relies on 4 interconnected web technologies:\n1. Asynchronous Networking: The `XMLHttpRequest` object (historically) or the modern `fetch()` API for background data transit.\n2. Document Object Model (DOM): Dynamic manipulation of HTML nodes (`document.getElementById`, `createElement`, `appendChild`).\n3. Data Interchange: Lightweight structured serialization, historically XML, now overwhelmingly JSON.\n4. Event-Driven JavaScript: Binding clicks, keystrokes, and timers to asynchronous callback functions."
      },
      {
        heading: "Modern Context: XMLHttpRequest vs. Fetch API",
        content: "While early AJAX code relied on `XMLHttpRequest` with event listeners (`xhr.onreadystatechange`), modern ECMAScript applications use `fetch()` which returns ES6 Promises:\n- XHR: Callback-based, verbose, separates open/send calls.\n- Fetch: Promise-based, integrates with `async/await`, provides clean stream handling and unified Request/Response objects."
      }
    ],

    howItWorks: [
      { step: 1, title: "User Event Trigger", subtitle: "Client Gesture", description: "User clicks 'Load More', types in search bar, or scrolls near bottom." },
      { step: 2, title: "Background Request Dispatched", subtitle: "fetch() / XHR", description: "JavaScript issues an asynchronous HTTP request without changing address bar." },
      { step: 3, title: "Uninterrupted UI Interaction", subtitle: "Asynchronous Non-Blocking", description: "Browser main thread remains responsive; user can scroll and interact." },
      { step: 4, title: "Server Data Return", subtitle: "Raw Data Payload", description: "Server returns lightweight JSON or XML payload (e.g. 2KB of records)." },
      { step: 5, title: "DOM Mutation & Paint", subtitle: "Surgical In-Place Update", description: "JavaScript parses data and appends elements to the specific container without screen flicker." }
    ],

    simulationType: "ajax-comparison",

    practicalExample: {
      scenario: "Real-Time Autocomplete Search Bar",
      description: "A search input field querying a backend API on every keystroke to render search suggestions.",
      records: [
        { type: "Event", host: "input.addEventListener", value: "'keyup'", ttl: "Trigger", purpose: "Captures user keystrokes in search bar" },
        { type: "Network", host: "fetch('/api/search?q=phone')", value: "Background Request", ttl: "Async", purpose: "Retrieves matching suggestions without reloading webpage" },
        { type: "DOM", host: "resultsList.innerHTML = ...", value: "Partial Update", ttl: "Render", purpose: "Paints dropdown suggestions directly under input box" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Believing that AJAX requires XML data format",
        reality: "Despite 'XML' being in the acronym, virtually all modern AJAX applications exchange JSON (JavaScript Object Notation). JSON is natively parsed by JavaScript with zero overhead (`response.json()`)."
      },
      {
        misconception: "Using synchronous XMLHttpRequest (xhr.open('GET', url, false))",
        reality: "Synchronous requests completely freeze the browser UI thread—preventing scrolling, clicks, and animations until the network responds. Synchronous XHR is deprecated and rejected by modern browsers!"
      }
    ],

    relatedTopics: [
      { id: "ajax-performance", title: "Improving Web Page Performance with AJAX", unitId: "unit-3" },
      { id: "programming-in-ajax", title: "Programming in AJAX: XHR & Fetch", unitId: "unit-3" }
    ],

    challenge: {
      id: "challenge-ajax-01",
      title: "Diagnose the Synchronous Hang Bug",
      difficulty: "Beginner",
      badge: "AJAX Foundations",
      description: "A developer notices that whenever their webpage loads data from an external API, the entire browser window completely freezes—users cannot scroll, cursor turns into a spinning wheel, and buttons don't animate.",
      task: "What programming mistake caused this total interface freeze?",
      options: [
        { id: "opt-1", text: "The computer monitor is refreshing at 60Hz instead of 144Hz.", correct: false, reason: "Monitor refresh rates do not cause JavaScript execution freezes." },
        { id: "opt-2", text: "The developer used a synchronous HTTP request (blocking the single JavaScript main UI thread) instead of an asynchronous request.", correct: true, reason: "Correct! JavaScript in browsers runs on a single main thread. Synchronous network calls block this thread completely, freezing all UI painting and user gestures." },
        { id: "opt-3", text: "The server response was sent in JSON instead of XML.", correct: false, reason: "JSON parsing is non-blocking and fast." }
      ],
      hint: "Remember what happens to the browser main thread when network operations are synchronous."
    },

    quiz: [
      {
        id: "ajax-q1",
        question: "What was the most significant user experience improvement introduced by the AJAX paradigm?",
        options: [
          "It made fonts larger and brighter.",
          "It eliminated full-page reloads and white screen flickers by allowing web pages to update specific DOM sections asynchronously in the background.",
          "It allowed web browsers to run without internet connections.",
          "It replaced HTML with C++ code."
        ],
        correctIndex: 1,
        explanation: "AJAX's breakthrough was eliminating disruptive full-page reloads. By fetching data in the background, pages update surgically while users continue interacting smoothly."
      },
      {
        id: "ajax-q2",
        question: "What is the primary advantage of the modern fetch() API over the legacy XMLHttpRequest object?",
        options: [
          "fetch() requires no JavaScript.",
          "fetch() returns ES6 Promises, which integrate cleanly with async/await syntax and avoid complex callback nesting.",
          "fetch() can only be run on Linux servers.",
          "fetch() automatically deletes user cookies."
        ],
        correctIndex: 1,
        explanation: "fetch() utilizes ES6 Promises, providing a much cleaner, composable, and chainable API that pairs seamlessly with modern async/await syntax."
      }
    ]
  },

  // ==========================================
  // TOPIC 8: IMPROVING WEB PAGE PERFORMANCE USING AJAX
  // ==========================================
  "ajax-performance": {
    id: "ajax-performance",
    unitId: "unit-3",
    unitNumber: 3,
    unitTitle: "Unit 3: Web Services, SOAP, WSDL, AJAX & Distributed Computing",
    title: "Improving Web Page Performance Using AJAX",
    subtitle: "Bandwidth minimization, latency reduction, distributed rendering, and perceived responsiveness gains",
    difficulty: "Beginner",
    estimatedMinutes: 16,
    badge: "AJAX Performance",

    definition: "Improving web page performance using AJAX is the practice of replacing heavy, repetitive full-page document re-transfers with lightweight, targeted asynchronous data exchanges. By decoupling static structural assets (HTML/CSS/JS) from dynamic business data (JSON), web applications drastically minimize network payload sizes, eliminate layout thrashing, and achieve sub-second perceived responsiveness.",

    whyItMatters: "On mobile devices and congested cellular networks, re-downloading hundreds of kilobytes of boilerplate navigation markup and CSS rules on every click wastes user battery life, exhausts cellular data allowances, and induces frustrating blank screen flickers. AJAX optimization achieves up to 95% bandwidth savings while keeping user focus unbroken.",

    explanation: [
      {
        heading: "Beginner Explanation: Sending the Letter vs. Shipping the Entire Mailbox",
        content: "Imagine ordering a magazine subscription:\n- Full-Page Traditional Reload: Every time a new issue is released, the postal carrier throws away your entire brick mailbox, tears down your front yard fence, digs a new trench, builds a new mailbox, and slips the 10-page magazine inside! (Shipping the entire infrastructure over and over).\n\n- AJAX Optimization: The postal carrier drops just the 10-page magazine through the existing mailbox slot (Sending only the data). Your yard stays untouched, and you get your reading material in seconds!"
      },
      {
        heading: "Quantitative Bandwidth Analysis",
        content: "Consider an e-commerce catalog during a 10-page shopping session:\n- Full-Page Synchronous Navigation: Each click re-transfers the header, footer, navigation bar, shared CSS stylesheets (120KB), JavaScript bundles (350KB), and HTML boilerplate (45KB) = ~765 KB $\\times$ 10 = ~7.65 MB transferred across the wire!\n- AJAX Partial Updates: The initial load transfers the 765 KB assets ONCE. The subsequent 9 page navigations transfer only raw product JSON (3.5 KB each) = 765 KB + (9 $\\times$ 3.5 KB) = ~796 KB total!\n- Net Result: ~90% reduction in transferred wire bytes!"
      },
      {
        heading: "Perceived Performance vs. Absolute Latency",
        content: "Performance in web engineering is psychological as well as technical:\n- Perceived Performance: Because the page does not flash white and form inputs or scroll positions do not reset, the user perceives the application as instantaneous and fluid.\n- Optimistic UI Updates: Advanced AJAX patterns update the local user interface immediately upon button press (e.g. liking a post), syncing with the backend server silently in the background."
      },
      {
        heading: "Distributed Client-Side Rendering (Offloading Server CPU)",
        content: "In traditional architectures, the backend web server must spend CPU cycles executing HTML template rendering engines (e.g. JSP, Thymeleaf, Blade) for every incoming request. With AJAX, the server simply serializes raw database records into JSON, leaving the HTML DOM construction to the client device GPU and CPU. This vastly increases backend server concurrency and scalability."
      }
    ],

    howItWorks: [
      { step: 1, title: "Initial Asset Caching", subtitle: "One-Time Cost", description: "Browser downloads and caches HTML shell, CSS stylesheets, and JS bundles once." },
      { step: 2, title: "Targeted Data Fetch", subtitle: "Subsequent Clicks", description: "Client requests only specific delta records via background fetch." },
      { step: 3, title: "Payload Minimization", subtitle: "95% Wire Reduction", description: "Server transmits compact JSON payload (e.g. 2KB) without redundant markup." },
      { step: 4, title: "In-Place DOM Mutation", subtitle: "Zero Screen Flicker", description: "Client script injects new records directly into the existing container." },
      { step: 5, title: "State Retention", subtitle: "Continuous Session", description: "User maintains form inputs, video playback, and scroll position continuously." }
    ],

    simulationType: "ajax-performance",

    practicalExample: {
      scenario: "Infinite Scrolling Social Media Feed",
      description: "Loading subsequent pages of user posts without triggering page reloads or layout re-computation.",
      records: [
        { type: "Initial Load", host: "Full Document", value: "765 KB (HTML + CSS + JS)", ttl: "Once", purpose: "Bootstraps application shell and cached stylesheet assets" },
        { type: "Subsequent Scroll", host: "AJAX API", value: "3.2 KB (JSON Posts)", ttl: "Repeat", purpose: "Transfers only raw post data, eliminating 99% of bandwidth overhead" },
        { type: "User Benefit", host: "Continuous Play", value: "Video stays playing", ttl: "UX", purpose: "Background audio/video streams continue uninterrupted" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Assuming AJAX makes individual network packets travel faster through fiber cables",
        reality: "AJAX does not change the physical speed of light in fiber optics! It improves performance by transmitting 95% fewer bytes and eliminating expensive browser layout destructions."
      },
      {
        misconception: "Failing to provide user loading feedback (spinners/skeletons) during slow AJAX requests",
        reality: "Because AJAX does not trigger the browser's native URL loading bar, developers MUST provide visual loading indicators (spinners, skeleton screens) so users know their request is in transit."
      }
    ],

    relatedTopics: [
      { id: "ajax-foundations", title: "AJAX Foundations", unitId: "unit-3" },
      { id: "programming-in-ajax", title: "Programming in AJAX: XHR & Fetch", unitId: "unit-3" }
    ],

    challenge: {
      id: "challenge-perf-01",
      title: "Evaluate the Infinite Scroll Architecture",
      difficulty: "Beginner",
      badge: "AJAX Performance",
      description: "A news portal wants to implement an infinite scroll feature where new articles append as readers reach the bottom of the page. An engineer proposes re-requesting the full HTML page with a 'page=N' parameter and parsing the entire document.",
      task: "Why is this proposal inefficient compared to standard AJAX JSON endpoints?",
      options: [
        { id: "opt-1", text: "JSON cannot store text articles.", correct: false, reason: "JSON handles strings and text natively." },
        { id: "opt-2", text: "Re-downloading full HTML pages wastes bandwidth on redundant navigation menus and boilerplate on every scroll, whereas a dedicated AJAX JSON endpoint transfers only the raw article text.", correct: true, reason: "Correct! Dedicated AJAX endpoints return only the necessary data delta, conserving network bandwidth and client parsing CPU." },
        { id: "opt-3", text: "HTML is illegal on mobile devices.", correct: false, reason: "HTML is the universal mobile markup language." }
      ],
      hint: "Compare the byte size of an entire HTML document against a compact JSON data payload."
    },

    quiz: [
      {
        id: "perf-q1",
        question: "Why does an AJAX-powered application typically consume vastly less network bandwidth over a multi-page session compared to a traditional web application?",
        options: [
          "AJAX compresses fiber optic cables.",
          "The application downloads shared stylesheets, scripts, and layout structures once; subsequent interactions transfer only raw, compact data payloads (JSON/XML).",
          "AJAX prevents users from clicking links.",
          "AJAX encrypts all images into black-and-white pixels."
        ],
        correctIndex: 1,
        explanation: "By decoupling asset downloading from data fetching, AJAX applications avoid re-downloading heavy shared headers, footers, CSS, and JS files on every single user interaction."
      },
      {
        id: "perf-q2",
        question: "How does client-side rendering with AJAX improve backend server scalability?",
        options: [
          "It forces the client to pay the server's electric bill.",
          "The server offloads HTML string formatting and template rendering to client devices, allowing server CPUs to focus strictly on database queries and raw JSON serialization.",
          "It prevents more than 10 users from connecting at once.",
          "It deletes unused database tables automatically."
        ],
        correctIndex: 1,
        explanation: "By serving raw JSON instead of rendering complex HTML templates on every request, backend servers spend significantly fewer CPU cycles per request, greatly increasing concurrency."
      }
    ]
  },

  // ==========================================
  // TOPIC 9: PROGRAMMING IN AJAX: XHR, FETCH & DOM UPDATES
  // ==========================================
  "programming-in-ajax": {
    id: "programming-in-ajax",
    unitId: "unit-3",
    unitNumber: 3,
    unitTitle: "Unit 3: Web Services, SOAP, WSDL, AJAX & Distributed Computing",
    title: "Programming in AJAX: XHR, Fetch & DOM Updates",
    subtitle: "Hands-on implementation: Constructing asynchronous requests, handling status codes, parsing JSON, and mutating the DOM",
    difficulty: "Intermediate",
    estimatedMinutes: 20,
    badge: "AJAX Programming",

    definition: "Programming in AJAX involves authoring client-side JavaScript code to execute the complete asynchronous data lifecycle: instantiating network request objects (XMLHttpRequest or Fetch), configuring HTTP verbs and request headers, asynchronously listening for network state changes, parsing structured JSON/XML response bodies, and dynamically mutating the live Document Object Model (DOM).",

    whyItMatters: "Theory without coding leaves developers unable to build real applications. Mastering AJAX programming—understanding request states (`readyState`), HTTP response status verification (`res.ok` or `status === 200`), error handling with `try/catch`, and surgical DOM element insertion—is the core prerequisite for modern frontend software engineering.",

    explanation: [
      {
        heading: "Beginner Explanation: The 4-Step Culinary Delivery Pipeline",
        content: "Writing AJAX code follows 4 simple, repeatable steps:\n1. JavaScript (The Order): You write down your request: `fetch('/api/menu')`.\n2. Wire Transit (The Delivery): The network transports the order to the server and brings back the goods asynchronously.\n3. Data Parsing (Unboxing): You take the returned box and unpack the JSON food: `const data = await response.json()`.\n4. DOM Update (Serving the Table): You create a new plate (`document.createElement('li')`) and set it neatly on the table (`parent.appendChild(card)`)."
      },
      {
        heading: "Legacy Approach: The XMLHttpRequest (XHR) Object",
        content: "Understanding legacy XHR is essential for legacy codebase maintenance:\n- Instantiation: `const xhr = new XMLHttpRequest();`\n- Configuring Endpoint: `xhr.open('GET', '/api/users', true);` (the 3rd parameter `true` sets asynchronous mode).\n- Event Listener: `xhr.onreadystatechange = function() { ... }`\n- The 5 Ready States: `0 (UNSENT)`, `1 (OPENED)`, `2 (HEADERS_RECEIVED)`, `3 (LOADING)`, `4 (DONE)`.\n- Dispatching Request: `xhr.send();`"
      },
      {
        heading: "Modern Approach: The Fetch API & Async/Await",
        content: "Modern JavaScript streamlines asynchronous programming using Promises:\n```javascript\nasync function fetchUserData(userId) {\n  try {\n    const response = await fetch(`/api/users/${userId}`);\n    if (!response.ok) {\n      throw new Error(`HTTP Error: ${response.status}`);\n    }\n    const user = await response.json();\n    updateUserCardInDOM(user);\n  } catch (error) {\n    console.error('Network failure:', error);\n  }\n}\n```"
      },
      {
        heading: "DOM Mutation Best Practices",
        content: "Once data arrives, it must be inserted safely:\n- Never concatenate raw unescaped strings into `innerHTML` (causes Cross-Site Scripting vulnerabilities).\n- Use `document.createElement('div')` and set `textContent`.\n- When rendering large lists (e.g. 100 items), accumulate nodes inside a `DocumentFragment` before appending to avoid triggering 100 separate browser reflows!"
      }
    ],

    howItWorks: [
      { step: 1, title: "Request Initialization", subtitle: "JS Call", description: "Developer invokes fetch() or initializes XMLHttpRequest with target URL and headers." },
      { step: 2, title: "Asynchronous Network Dispatch", subtitle: "Event Loop", description: "Browser network thread handles socket transport; JS main thread continues running." },
      { step: 3, title: "HTTP Status Verification", subtitle: "Response Check", description: "Code verifies response.status === 200 or response.ok before parsing." },
      { step: 4, title: "Payload Parsing", subtitle: "JSON Serialization", description: "Raw character bytes are parsed into native JavaScript objects via response.json()." },
      { step: 5, title: "Surgical DOM Injection", subtitle: "UI Update", description: "Target container is updated using createElement and appendChild." }
    ],

    simulationType: "ajax-programming",

    practicalExample: {
      scenario: "Dynamic User Directory Infinite Loader",
      description: "A production fetch implementation fetching paginated user records and appending cards to a list.",
      records: [
        { type: "Fetch Call", host: "fetch('/api/users?page=2')", value: "Method: GET", ttl: "Network", purpose: "Requests next page of user data in background" },
        { type: "Parse", host: "await response.json()", value: "[{id: 4, name: 'Marcus'}, ...]", ttl: "Memory", purpose: "Parses returned JSON array into JavaScript objects" },
        { type: "DOM Mutation", host: "listContainer.appendChild(card)", value: "In-Place Append", ttl: "Render", purpose: "Inserts user card into live page with zero reload" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Assuming fetch() automatically throws an error on 404 or 500 status codes",
        reality: "The fetch() Promise ONLY rejects on true network failures (e.g. DNS failure, no internet connection). If the server returns a 404 Not Found or 500 Server Error, fetch() still resolves successfully! You MUST check `if (!response.ok)` manually!"
      },
      {
        misconception: "Forgetting to await the response.json() method",
        reality: "In the Fetch API, `response.json()` is itself an asynchronous Promise! Forgetting `await` assigns a pending Promise object to your variable rather than the actual parsed data."
      }
    ],

    relatedTopics: [
      { id: "ajax-foundations", title: "AJAX Foundations", unitId: "unit-3" },
      { id: "ajax-performance", title: "Improving Performance with AJAX", unitId: "unit-3" }
    ],

    challenge: {
      id: "challenge-ajax-02",
      title: "Fix the Silent 404 Fetch Bug",
      difficulty: "Intermediate",
      badge: "Fetch API",
      description: "A developer writes:\n```javascript\ntry {\n  const res = await fetch('/api/missing-endpoint');\n  const data = await res.json();\n  renderData(data);\n} catch (err) {\n  showErrorMessage();\n}\n```\nEven though the server returns 404 Not Found with an HTML error page, the catch block never executes, and the application throws a JSON parse error.",
      task: "Why did the catch block fail to intercept the 404 HTTP error?",
      options: [
        { id: "opt-1", text: "JavaScript try/catch blocks do not work with async functions.", correct: false, reason: "try/catch works seamlessly with async/await." },
        { id: "opt-2", text: "fetch() promises only reject on network failure; HTTP status codes (like 404 or 500) resolve normally, so developers must explicitly verify if (!res.ok) throw new Error().", correct: true, reason: "Correct! fetch() considers any HTTP response from the server a successful transaction. You must check `res.ok` or `res.status` before parsing JSON." },
        { id: "opt-3", text: "404 errors only exist in PHP.", correct: false, reason: "404 is a standard HTTP protocol status code." }
      ],
      hint: "Remember how the Fetch API treats HTTP status codes vs network connection failures."
    },

    quiz: [
      {
        id: "prog-q1",
        question: "In the legacy XMLHttpRequest (XHR) object, which readyState value signifies that the entire operation has completed and all response data has been received?",
        options: [
          "readyState 0 (UNSENT)",
          "readyState 1 (OPENED)",
          "readyState 3 (LOADING)",
          "readyState 4 (DONE)"
        ],
        correctIndex: 3,
        explanation: "readyState 4 indicates that the transmission is completely finished (DONE) and responseText is ready for application consumption."
      },
      {
        id: "prog-q2",
        question: "Why should developers use document.createElement() and textContent instead of directly concatenating user input into innerHTML?",
        options: [
          "createElement() makes the text bold automatically.",
          "Directly concatenating untrusted user input into innerHTML opens severe Cross-Site Scripting (XSS) vulnerabilities where malicious scripts can execute.",
          "innerHTML is not supported on mobile devices.",
          "createElement() reduces memory by 90%."
        ],
        correctIndex: 1,
        explanation: "textContent and createElement safely treat all input as raw character literals rather than executable HTML markup, eliminating Cross-Site Scripting (XSS) attack vectors."
      }
    ]
  },

  // ==========================================
  // TOPIC 10: CORBA: DISTRIBUTED OBJECTS & ORB MIDDLEWARE
  // ==========================================
  "corba-architecture": {
    id: "corba-architecture",
    unitId: "unit-3",
    unitNumber: 3,
    unitTitle: "Unit 3: Web Services, SOAP, WSDL, AJAX & Distributed Computing",
    title: "CORBA: Distributed Objects & ORB Middleware",
    subtitle: "Common Object Request Broker Architecture: Client stubs, ORBs, IIOP protocol, and servant skeletons",
    difficulty: "Advanced",
    estimatedMinutes: 18,
    badge: "Distributed Objects",

    definition: "Common Object Request Broker Architecture (CORBA) is a vendor-neutral distributed computing standard established by the Object Management Group (OMG) in 1991. It enables software components written in multiple programming languages running on different operating systems to invoke methods on remote objects across a network as if they were local in-memory objects, brokered by an Object Request Broker (ORB) over the binary Internet Inter-ORB Protocol (IIOP).",

    whyItMatters: "CORBA was the direct historical and architectural predecessor to modern Web Services. Understanding CORBA reveals why the technology industry shifted toward XML/JSON over HTTP: while CORBA provided blistering binary speed and typed Remote Procedure Calls (RPC), its tightly coupled binary protocols, inability to traverse enterprise firewalls, and complex vendor ORB implementations paved the way for open Web Services.",

    explanation: [
      {
        heading: "Beginner Explanation: The Universal Translator Headset",
        content: "Imagine working on a space station with astronauts from Earth, Mars, and Jupiter, each speaking completely different languages with different customs:\n- The Problem: A human astronaut wants an alien scientist in a distant module to run an experiment (`scientist.runTest()`).\n- The Local Stub: The human whispers the command into a local headset (The Client IDL Stub).\n- The ORB (Object Request Broker): The headset translates the words into universal radio signals (Binary CDR) and transmits them across the station corridor (IIOP protocol).\n- The Remote Skeleton: The alien's headset receives the radio signal, translates it into alien dialect, and prompts the scientist (The Remote Servant) to perform the test.\n- The Result: The alien whispers the answer, which is transmitted back to the human seamlessly!"
      },
      {
        heading: "The Core Components of CORBA Architecture",
        content: "A CORBA system comprises 5 essential components:\n1. Client Application: Initiates the operation by calling a method on a local proxy.\n2. IDL Stubs (Client Proxy): Auto-generated proxy code that mirrors the remote object interface.\n3. ORB (Object Request Broker): The middleware engine that locates remote objects, handles parameter marshalling/unmarshalling, and manages network sockets.\n4. IIOP (Internet Inter-ORB Protocol): The binary network wire protocol running over TCP/IP that standardizes communication between ORBs from different vendors.\n5. Skeleton & Servant: The server-side dispatcher (Skeleton) and the real target object implementation (Servant) that executes the method in memory."
      },
      {
        heading: "OMG IDL (Interface Definition Language)",
        content: "Similar to how WSDL uses XML to define web services, CORBA uses OMG IDL—a C++-like declarative language—to specify object interfaces independently of any programming language:\n```idl\nmodule Banking {\n  interface Account {\n    readonly attribute string accountNumber;\n    double getBalance();\n    void withdraw(in double amount) raises (InsufficientFunds);\n  };\n};\n```\nAn IDL compiler (`idlj` in Java or `omniidl` in C++) compiles this IDL file into client stubs and server skeletons."
      },
      {
        heading: "Why Did Web Services Eclipse CORBA?",
        content: "While CORBA was exceptionally fast, it suffered from fatal internet-era drawbacks:\n1. Firewall Incompatibility: CORBA IIOP communicates over arbitrary high-numbered TCP ports (e.g. 1050-65535). Enterprise corporate firewalls routinely blocked all non-port-80/443 traffic, making B2B communication across the public internet nearly impossible!\n2. Tight Coupling: CORBA requires both client and server to share compatible ORB libraries and maintains stateful object references (IORs).\n3. In contrast, Web Services embraced HTTP (which easily traverses all corporate firewalls on ports 80/443) and stateless, human-readable XML/JSON envelopes."
      }
    ],

    howItWorks: [
      { step: 1, title: "IDL Specification", subtitle: "Interface Design", description: "Architect defines object interface in language-neutral OMG IDL." },
      { step: 2, title: "Stub & Skeleton Compilation", subtitle: "Code Generation", description: "IDL compiler generates client stub classes and server skeleton classes." },
      { step: 3, title: "Local Method Invocation", subtitle: "Client Action", description: "Client calls method on local stub object (e.g. account->getBalance())." },
      { step: 4, title: "Parameter Marshalling", subtitle: "Client ORB", description: "Client ORB encodes method arguments into Common Data Representation (CDR) binary format." },
      { step: 5, title: "IIOP Network Wire Transit", subtitle: "TCP/IP Transport", description: "Binary request travels over IIOP protocol to the target server IP and port." },
      { step: 6, title: "Skeleton Dispatch", subtitle: "Server ORB", description: "Server ORB unmarshals binary bytes and invokes the real Servant object implementation." },
      { step: 7, title: "Result Returned", subtitle: "Return Pipeline", description: "Return value is marshalled and transmitted back to the client application." }
    ],

    simulationType: "corba-architecture",

    practicalExample: {
      scenario: "Legacy Telecommunications Switchboard Control",
      description: "A C++ telecom routing server exposing an IDL interface consumed by a Java network management console.",
      records: [
        { type: "IDL", host: "Switchboard.idl", value: "interface RoutingService", ttl: "Contract", purpose: "Declares language-independent distributed object interface" },
        { type: "Middleware", host: "ORB", value: "IIOP over TCP Port 1050", ttl: "Transport", purpose: "Brokers binary Remote Procedure Calls between Java and C++" },
        { type: "Reference", host: "IOR String", value: "IOR:000000000000001649...", ttl: "Identity", purpose: "Interoperable Object Reference locating remote servant in memory" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Believing CORBA uses XML or JSON for message serialization",
        reality: "CORBA uses Common Data Representation (CDR), a compact, high-performance BINARY serialization format. It does not use text-based XML or JSON."
      },
      {
        misconception: "Assuming CORBA can easily communicate across the public internet without VPNs",
        reality: "CORBA uses arbitrary TCP ports for IIOP communication. Standard internet gateways and corporate firewalls block these ports. This fatal flaw led directly to the creation of HTTP-based Web Services."
      }
    ],

    relatedTopics: [
      { id: "intro-web-services", title: "Introduction to Web Services", unitId: "unit-3" },
      { id: "web-service-architecture", title: "Web Service Architecture", unitId: "unit-3" }
    ],

    challenge: {
      id: "challenge-corba-01",
      title: "Diagnose the Public Internet Firewall Outage",
      difficulty: "Advanced",
      badge: "Distributed Objects",
      description: "A legacy financial institution deployed a CORBA-based trading system. It works flawlessly within their local datacenter. However, when an external partner attempts to connect from across the public Internet, connection requests are rejected immediately.",
      task: "What architectural limitation of CORBA is causing this failure?",
      options: [
        { id: "opt-1", text: "CORBA only runs on computers with Intel processors.", correct: false, reason: "CORBA is platform and hardware independent." },
        { id: "opt-2", text: "CORBA IIOP relies on proprietary binary protocols operating across arbitrary dynamic TCP ports that are blocked by enterprise Internet firewalls, unlike Web Services that run over standard HTTP/HTTPS ports 80 and 443.", correct: true, reason: "Correct! The firewall-traversal hurdle was the primary historical reason the software industry abandoned CORBA in favor of HTTP-based Web Services." },
        { id: "opt-3", text: "CORBA does not support the English language.", correct: false, reason: "Language independence is CORBA's core feature." }
      ],
      hint: "Think about the differences between standard web ports (80/443) and arbitrary high-numbered TCP sockets."
    },

    quiz: [
      {
        id: "corba-q1",
        question: "What is the primary role of the Object Request Broker (ORB) in CORBA architecture?",
        options: [
          "To compile HTML into CSS stylesheets.",
          "To act as middleware that transparently handles message dispatching, parameter marshalling/unmarshalling, and network socket management between clients and remote servant objects.",
          "To delete old files from the client hard drive.",
          "To design user interfaces for mobile apps."
        ],
        correctIndex: 1,
        explanation: "The ORB is the central middleware backbone of CORBA: it intercepts method calls, marshals parameters into binary format, finds the remote object across the network, and returns the result."
      },
      {
        id: "corba-q2",
        question: "What is the primary difference in wire transport between CORBA and modern Web Services?",
        options: [
          "CORBA uses binary IIOP over arbitrary TCP ports; Web Services use standard text/binary envelopes (SOAP/REST) over standard HTTP/HTTPS ports.",
          "CORBA does not use electricity.",
          "Web Services only work on Sundays.",
          "There is no difference; they are identical."
        ],
        correctIndex: 0,
        explanation: "CORBA relies on binary IIOP over arbitrary TCP sockets (problematic for firewalls), whereas Web Services utilize standard HTTP/HTTPS (ports 80/443), ensuring universal traversal across all Internet firewalls."
      }
    ]
  },

  // ==========================================
  // TOPIC 11: CAPSTONE LAB: BUILD A WEB SERVICE
  // ==========================================
  "unit3-capstone-lab": {
    id: "unit3-capstone-lab",
    unitId: "unit-3",
    unitNumber: 3,
    unitTitle: "Unit 3: Web Services, SOAP, WSDL, AJAX & Distributed Computing",
    title: "Capstone Lab: Build a Web Service",
    subtitle: "Interactive distributed computing laboratory: Assemble clients, services, operations, and envelopes",
    difficulty: "Intermediate",
    estimatedMinutes: 25,
    badge: "Unit 3 Capstone",

    definition: "The Unit 3 Capstone Laboratory is an interactive distributed computing testbench where students synthesize all unit concepts: configuring consumer clients, selecting service endpoints, choosing operations, constructing SOAP and JSON wire payloads, executing multi-tier transactions, and validating architectural tradeoffs.",

    whyItMatters: "Building a distributed system requires integrating disparate concepts into a cohesive whole: service contracts (WSDL), message envelopes (SOAP/JSON), discovery registries (UDDI), and responsive client-side networking (AJAX). This laboratory cements your mastery through interactive experimentation.",

    explanation: [
      {
        heading: "Lab Overview: The Interactive Architecture Testbench",
        content: "In this capstone laboratory, you will configure and simulate a live distributed enterprise transaction:\n\n1. Select Your Consumer: Choose between a Native Mobile App, a Web Single-Page Application (SPA) using AJAX, or a heavy Enterprise ERP Server.\n2. Choose Your Service Provider: Select between the Universal Payment Gateway, the AtmoCast Weather Telemetry Service, or the SkyLine Flight Reservation System.\n3. Configure Operations & Parameters: Choose specific operations (`authorizePayment`, `getCurrentConditions`, `reservePassengerSeat`) and customize transaction values.\n4. Select Protocol Format: Toggle between enterprise SOAP/XML envelopes (with headers and bodies) and modern REST/JSON payloads.\n5. Execute & Trace: Run the live animated simulation to observe packet transit across the client, gateway, business logic, database, and response pipeline!"
      },
      {
        heading: "Unit 3 Conceptual Recap",
        content: "- Web Services: Language-independent, platform-neutral distributed computing.\n- UDDI: Central registry with White Pages (Identity), Yellow Pages (Taxonomy), and Green Pages (WSDL bindings).\n- SOAP: Highly structured envelope standard with mandatory `<soap:Envelope>` and `<soap:Body>`, optional `<soap:Header>`, and uniform `<soap:Fault>`.\n- WSDL: The 5-layer service contract separating abstract interfaces (`types`, `message`, `portType`) from concrete implementations (`binding`, `service`).\n- SOA Triangle: The core operations of Publish, Find, and Bind.\n- AJAX: Asynchronous background communication (`fetch`/XHR) enabling surgical DOM updates without page reloads.\n- CORBA: The historical binary distributed object ancestor governed by ORBs and IIOP."
      }
    ],

    howItWorks: [
      { step: 1, title: "Client & Service Setup", subtitle: "Configuration", description: "Select consumer application type and target service provider." },
      { step: 2, title: "Operation & Envelope Binding", subtitle: "Contract Binding", description: "Choose operation and format request envelope in SOAP XML or REST JSON." },
      { step: 3, title: "Wire Transit Simulation", subtitle: "Network Transit", description: "Simulate encrypted HTTP socket transport across intermediate routers." },
      { step: 4, title: "Backend Execution", subtitle: "Provider Processing", description: "Observe gateway authentication, business logic validation, and database queries." },
      { step: 5, title: "Response Delivery", subtitle: "Transaction Completion", description: "Verify return status code and inspect serialized response envelope." }
    ],

    simulationType: "build-web-service-lab",

    practicalExample: {
      scenario: "End-to-End Enterprise Web Service Pipeline",
      description: "A complete distributed transaction connecting a mobile client to an enterprise payment provider.",
      records: [
        { type: "Client", host: "Mobile iOS App", value: "Consumer", ttl: "Client", purpose: "Synthesizes request parameters into wire format" },
        { type: "Contract", host: "PaymentService.wsdl", value: "WSDL 1.2", ttl: "Contract", purpose: "Governs data types and endpoint bindings" },
        { type: "Wire Transit", host: "SOAP 1.2 over HTTPS", value: "Port 443", ttl: "Wire", purpose: "Encrypted machine-to-machine remote method execution" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Assuming that once a web service is built, client apps never need updating",
        reality: "If a web service modifies its WSDL interface, clients must update their proxy stubs. Proper API versioning (`/v1/` vs `/v2/`) is essential to avoid breaking existing clients."
      }
    ],

    relatedTopics: [
      { id: "intro-web-services", title: "Introduction to Web Services", unitId: "unit-3" },
      { id: "soap-protocol", title: "SOAP Protocol", unitId: "unit-3" },
      { id: "wsdl-contracts", title: "WSDL Service Contracts", unitId: "unit-3" },
      { id: "ajax-foundations", title: "AJAX Foundations", unitId: "unit-3" }
    ],

    challenge: {
      id: "challenge-capstone-03",
      title: "Unit 3 Architecture Challenge: Web Services vs. AJAX vs. CORBA",
      difficulty: "Intermediate",
      badge: "Unit 3 Review",
      description: "You are the Chief Enterprise Architect designing a new global airline booking ecosystem. The system requires:\n1. A mobile travel app that auto-completes airport names with zero page flicker.\n2. An inter-airline settlement gateway connecting 30 foreign airline partner servers.\n3. A legacy high-speed binary connection to an internal mainframe radar switch.",
      task: "Which architectural combination correctly satisfies all three requirements?",
      options: [
        { id: "opt-1", text: "Use CORBA for the mobile phone app, AJAX for the partner airlines, and UDDI for the radar.", correct: false, reason: "CORBA cannot traverse mobile firewalls; AJAX is for browser-to-server interaction." },
        { id: "opt-2", text: "1. AJAX (fetch) for the mobile app zero-flicker airport search;\n2. SOAP/WSDL Web Services for the 30 partner airlines B2B integration;\n3. CORBA (or binary RPC) for the internal high-speed legacy mainframe radar link.", correct: true, reason: "Correct! AJAX provides zero-flicker client UI updates, SOAP/WSDL provides cross-platform B2B contracts across partner airlines, and CORBA handles legacy high-speed internal RPC." },
        { id: "opt-3", text: "Use framesets for everything.", correct: false, reason: "Framesets are deprecated and cannot fulfill any of these distributed computing requirements." }
      ],
      hint: "Match each specific technology to its primary architectural strength."
    },

    quiz: [
      {
        id: "capstone3-q1",
        question: "In the Service-Oriented Architecture (SOA) triangle, which party publishes service descriptions, and to where?",
        options: [
          "The Service Consumer publishes to the Web Browser.",
          "The Service Provider publishes the WSDL description to the Service Registry (UDDI).",
          "The Database publishes to the Client hard drive.",
          "The Operating System publishes to the Firewall."
        ],
        correctIndex: 1,
        explanation: "In the SOA Publish-Find-Bind model, the Service Provider publishes its capability descriptions (WSDL) into a centralized Service Registry (like UDDI) so consumers can discover it."
      },
      {
        id: "capstone3-q2",
        question: "What was the fundamental technical limitation that caused the industry to transition from CORBA to XML/HTTP-based Web Services?",
        options: [
          "CORBA was too slow.",
          "CORBA's binary IIOP protocol operated across arbitrary TCP ports blocked by corporate firewalls, whereas Web Services utilized standard HTTP/HTTPS ports (80/443) that traverse all Internet gateways effortlessly.",
          "CORBA was proprietary to Apple.",
          "Computers in the 2000s stopped supporting C++."
        ],
        correctIndex: 1,
        explanation: "Firewall traversal was the critical factor: corporate network firewalls blocked arbitrary binary IIOP ports, while universally allowing standard web ports 80 (HTTP) and 443 (HTTPS)."
      },
      {
        id: "capstone3-q3",
        question: "Why does the modern Web Technology industry use AJAX with JSON for client web apps, while enterprise financial networks still heavily utilize SOAP with WSDL?",
        options: [
          "Because bankers do not know how to write JavaScript.",
          "AJAX with JSON offers minimal overhead, rapid client parsing, and fluid UI updates in browsers; while SOAP with WSDL provides formal contracts, strict XSD typing, and WS-Security required for audited financial transactions.",
          "SOAP can only be run inside banks.",
          "JSON is only compatible with Apple Safari."
        ],
        correctIndex: 1,
        explanation: "Each technology serves its optimal domain: AJAX/JSON maximizes client responsiveness and minimizes browser overhead, while SOAP/WSDL guarantees contractual rigor and enterprise-grade security."
      }
    ]
  }
};
