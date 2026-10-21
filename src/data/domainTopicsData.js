/**
 * Idea 1: Curated Engineering Domain Topics Hierarchy
 * Organizes WebTech directly by Topic -> Subtopic (like Stripe / MDN docs)
 */

export const DOMAIN_TOPICS = [
  {
    id: 'internet-protocols',
    title: 'Internet & Network Protocols',
    shortTitle: 'Internet Protocols',
    description: 'Packet switching, client-server paradigm, HTTP/1.1-HTTP/3, DNS, rendering engines, web servers, email protocols, and request lifecycles.',
    iconName: 'Globe',
    unitBadge: 'Unit 1',
    topics: [
      {
        id: '1.1-history-of-the-internet',
        code: '1.1',
        title: 'History of the Internet & Packet Switching',
        subtitle: 'From Cold War circuit-switched bottlenecks to the global TCP/IP network of networks',
        readTime: '12 min',
        difficulty: 'Fundamental'
      },
      {
        id: '1.2-world-wide-web',
        code: '1.2',
        title: 'World Wide Web & Client-Server Architecture',
        subtitle: 'Hypertext, URLs, stateless request-response mechanics, and CERN genesis',
        readTime: '14 min',
        difficulty: 'Fundamental'
      },
      {
        id: '1.3-http-protocol',
        code: '1.3',
        title: 'HTTP: Hypertext Transfer Protocol & Wire Lifecycle',
        subtitle: 'HTTP/0.9 to HTTP/3 QUIC, request/response wire format, verbs, headers, and status codes',
        readTime: '18 min',
        difficulty: 'Intermediate'
      },
      {
        id: '1.4-dns-resolution',
        code: '1.4',
        title: 'Domain Name System (DNS) & Hierarchical Resolution',
        subtitle: 'Root servers, TLD registries, recursive resolvers, authoritative zones, and DNS caching',
        readTime: '16 min',
        difficulty: 'Fundamental'
      },
      {
        id: '1.5-web-browsers',
        code: '1.5',
        title: 'Modern Web Browsers & Critical Rendering Engines',
        subtitle: 'Blink, Gecko, WebKit, DOM/CSSOM parsing, layout recalculation, and GPU compositing',
        readTime: '18 min',
        difficulty: 'Intermediate'
      },
      {
        id: '1.6-web-servers',
        code: '1.6',
        title: 'Web Servers & Hosting Architectures',
        subtitle: 'NGINX event loops, Apache process models, reverse proxies, and virtual hosts',
        readTime: '15 min',
        difficulty: 'Fundamental'
      },
      {
        id: '1.7-email-protocols',
        code: '1.7',
        title: 'Internet Mail & Media Protocols: SMTP, POP3, IMAP & MIME',
        subtitle: 'Store-and-forward architecture, TCP ports, binary attachments, and multipart boundaries',
        readTime: '16 min',
        difficulty: 'Intermediate'
      },
      {
        id: '1.8-anatomy-of-a-web-request',
        code: '1.8',
        title: 'The End-to-End Web Request Lifecycle: Browser to Wire',
        subtitle: 'Step-by-step trace: URL keystroke, DNS resolution, TLS handshake, HTTP stream, and painting',
        readTime: '20 min',
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    id: 'html5-forms-boxmodel',
    title: 'HTML5, Forms & Box Model',
    shortTitle: 'HTML5 & Forms',
    description: 'Semantic markup, accessible tabular data, input validation APIs, iframe sandboxing, DOCTYPE standards mode, and the CSS box model.',
    iconName: 'FileCode',
    unitBadge: 'Unit 2',
    topics: [
      {
        id: '2.1-html-semantics',
        code: '2.1',
        title: 'HTML5 Semantics: Structure, Lists, Tables & Images',
        subtitle: 'Accessible tabular data, hierarchical lists, picture elements, and responsive image srcset',
        readTime: '16 min',
        difficulty: 'Fundamental'
      },
      {
        id: '2.2-html-forms-frames',
        code: '2.2',
        title: 'HTML5 Forms, Constraints & Frame Architectures',
        subtitle: 'Form validation APIs, multipart uploads, iframe isolation, and security sandboxing',
        readTime: '16 min',
        difficulty: 'Fundamental'
      },
      {
        id: '2.4-css-doctype-box-model',
        code: '2.4',
        title: 'CSS Document Type Definition, Standards Mode & Box Model',
        subtitle: 'DOCTYPE switching, Quirks vs Standards mode, CSS cascade, specificity, and Box Sizing',
        readTime: '15 min',
        difficulty: 'Fundamental'
      }
    ]
  },
  {
    id: 'dhtml-dom-architecture',
    title: 'Dynamic HTML & DOM Architecture',
    shortTitle: 'DHTML & DOM',
    description: 'Event-driven JavaScript, event loop, bubbling and capturing, live NodeLists vs snapshots, and high-performance DOM mutations.',
    iconName: 'Layers',
    unitBadge: 'Unit 2',
    topics: [
      {
        id: '2.3-dhtml-javascript',
        code: '2.3',
        title: 'Dynamic HTML (DHTML) & Event-Driven JavaScript',
        subtitle: 'Event loop, bubbling vs capturing phases, async/defer scripts, and dynamic style mutation',
        readTime: '18 min',
        difficulty: 'Intermediate'
      },
      {
        id: '2.5-dom-architecture',
        code: '2.5',
        title: 'Document Object Model (DOM) Architecture & Node Mutations',
        subtitle: 'DOM Levels 1-3, live NodeLists vs static snapshots, MutationObserver, and virtual DOM diffing',
        readTime: '20 min',
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    id: 'xml-schemas-processing',
    title: 'XML, Schemas & Transformations',
    shortTitle: 'XML & Schemas',
    description: 'Tree hierarchies, namespaces, DTD vs XML Schema (XSD), XSLT presentation transformations, and memory-resident DOM vs streaming SAX parsers.',
    iconName: 'Code',
    unitBadge: 'Unit 2',
    topics: [
      {
        id: '2.6-xml-fundamentals',
        code: '2.6',
        title: 'XML Fundamentals, Tree Hierarchy & Namespaces',
        subtitle: 'Well-formedness vs validity, character encoding, CDATA, namespaces, and XML prologs',
        readTime: '14 min',
        difficulty: 'Fundamental'
      },
      {
        id: '2.7-xml-schemas-dtd-xsd',
        code: '2.7',
        title: 'XML Validation: DTD vs. XML Schema (XSD)',
        subtitle: 'Document Type Definitions vs strong typing, complex types, minOccurs, and regex facets',
        readTime: '18 min',
        difficulty: 'Intermediate'
      },
      {
        id: '2.8-presentation-xslt',
        code: '2.8',
        title: 'XML Presentation & XSLT Transformations',
        subtitle: 'Extensible Stylesheet Language, template matching, XPath navigators, and transformation pipelines',
        readTime: '18 min',
        difficulty: 'Intermediate'
      },
      {
        id: '2.9-xml-processors-dom-sax',
        code: '2.9',
        title: 'XML Processing Models: DOM vs. SAX Parsers',
        subtitle: 'Memory-resident tree loading vs event-driven streaming parser architecture and benchmarks',
        readTime: '17 min',
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    id: 'web-services-soa',
    title: 'Web Services & Enterprise SOA',
    shortTitle: 'Web Services (SOAP/WSDL)',
    description: 'Service-Oriented Architecture, UDDI registry discovery, SOAP XML envelopes, WSDL interface contracts, and legacy CORBA middleware.',
    iconName: 'Server',
    unitBadge: 'Unit 3',
    topics: [
      {
        id: '3.1-intro-web-services',
        code: '3.1',
        title: 'Introduction to Web Services & The SOA Triangle',
        subtitle: 'Service-Oriented Architecture, loosely coupled distributed computing, provider-consumer contracts',
        readTime: '15 min',
        difficulty: 'Fundamental'
      },
      {
        id: '3.2-uddi-registry',
        code: '3.2',
        title: 'UDDI: Service Discovery & Business Registries',
        subtitle: 'White pages, yellow pages, green pages, tModels, and why modern microservices evolved past UDDI',
        readTime: '15 min',
        difficulty: 'Intermediate'
      },
      {
        id: '3.3-soap-protocol',
        code: '3.3',
        title: 'SOAP: Simple Object Access Protocol & Envelopes',
        subtitle: 'SOAP 1.1/1.2 wire format, Envelopes, Headers, WS-Security, Body, and SOAP Fault handling',
        readTime: '18 min',
        difficulty: 'Intermediate'
      },
      {
        id: '3.4-wsdl-contracts',
        code: '3.4',
        title: 'WSDL: Web Services Description Language Contracts',
        subtitle: 'Service interface definitions: types, messages, portTypes, bindings, and endpoints',
        readTime: '18 min',
        difficulty: 'Intermediate'
      },
      {
        id: '3.5-developing-web-services',
        code: '3.5',
        title: 'Developing & Deploying Web Services in Production',
        subtitle: 'Contract-First vs Code-First design, web service lifecycles, and deployment pipelines',
        readTime: '18 min',
        difficulty: 'Intermediate'
      },
      {
        id: '3.9-corba-architecture',
        code: '3.9',
        title: 'CORBA Architecture, OMG IDL & ORB Middleware',
        subtitle: 'Common Object Request Broker Architecture, client stubs, server skeletons, and IIOP',
        readTime: '18 min',
        difficulty: 'Advanced'
      }
    ]
  },
  {
    id: 'ajax-modern-async',
    title: 'Modern Asynchronous Web (AJAX)',
    shortTitle: 'AJAX & Async I/O',
    description: 'Asynchronous JavaScript and XML, performance optimization, XMLHttpRequest readyStates, Fetch API, and streaming JSON.',
    iconName: 'Zap',
    unitBadge: 'Unit 3',
    topics: [
      {
        id: '3.6-ajax-foundations',
        code: '3.6',
        title: 'AJAX Foundations: Asynchronous Web Architecture',
        subtitle: 'Jesse James Garrett genesis, asynchronous decoupling, XMLHttpRequests, and DOM update cycles',
        readTime: '16 min',
        difficulty: 'Fundamental'
      },
      {
        id: '3.7-ajax-performance',
        code: '3.7',
        title: 'AJAX Architecture & Improving Web Page Performance',
        subtitle: 'Eliminating the full page reload lifecycle, partial DOM updates, caching, and network bandwidth',
        readTime: '16 min',
        difficulty: 'Intermediate'
      },
      {
        id: '3.8-programming-ajax',
        code: '3.8',
        title: 'Modern Asynchronous Programming: XHR, Fetch & Async/Await',
        subtitle: 'XMLHttpRequest readyStates, modern fetch(), AbortController, and streaming JSON processing',
        readTime: '20 min',
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    id: 'web20-social-platforms',
    title: 'Web 2.0 & Social Architectures',
    shortTitle: 'Web 2.0 & Social Web',
    description: 'User-generated content, network effects, blogs, wikis diff algorithms, social graphs, RSS feeds, and Ruby on Rails MVC.',
    iconName: 'Users',
    unitBadge: 'Unit 4',
    topics: [
      {
        id: '4.1-web20-evolution',
        code: '4.1',
        title: 'Web 2.0: The Participatory Read-Write Web',
        subtitle: 'From static brochureware to user-generated platforms, network effects, and rich client interfaces',
        readTime: '15 min',
        difficulty: 'Fundamental'
      },
      {
        id: '4.2-social-platforms',
        code: '4.2',
        title: 'Interactive Social Platforms: Blogs, Wikis & Social Graphs',
        subtitle: 'Collaborative authorship, version diff engines, and social graph feed fan-out architectures',
        readTime: '16 min',
        difficulty: 'Fundamental'
      },
      {
        id: '4.3-web20-technologies',
        code: '4.3',
        title: 'Technologies Behind Web 2.0: RSS, REST APIs & Rails MVC',
        subtitle: 'XML syndication feeds, Fielding REST architectural constraints, and Convention over Configuration',
        readTime: '18 min',
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    id: 'web30-semantic-systems',
    title: 'Web 3.0 & Semantic Web',
    shortTitle: 'Semantic Web & RDF',
    description: 'Linked data, ontologies (OWL/RDFS), RDF triples, SPARQL, multi-source mashups, search engines (PageRank), and recommenders.',
    iconName: 'Network',
    unitBadge: 'Unit 4',
    topics: [
      {
        id: '4.4-semantic-web',
        code: '4.4',
        title: 'Web 3.0 & The Semantic Web Architecture',
        subtitle: 'Machine-readable linked data, ontologies (OWL/RDFS), and universal knowledge graphs',
        readTime: '18 min',
        difficulty: 'Intermediate'
      },
      {
        id: '4.5-rdf-triples',
        code: '4.5',
        title: 'Resource Description Framework (RDF) & Triples',
        subtitle: 'Subject-Predicate-Object data models, Turtle, JSON-LD, N-Triples, and SPARQL queries',
        readTime: '18 min',
        difficulty: 'Intermediate'
      },
      {
        id: '4.6-widgets-mashups',
        code: '4.6',
        title: 'Web Widgets & Multi-Source Mashup Architectures',
        subtitle: 'Component isolation, sandboxed Shadow DOM, postMessage APIs, and API synthesis',
        readTime: '16 min',
        difficulty: 'Intermediate'
      },
      {
        id: '4.7-information-systems',
        code: '4.7',
        title: 'Web-Based Information Systems: Multi-Tier Architecture',
        subtitle: 'Presentation, application, and persistence separation, database pooling, and horizontal scaling',
        readTime: '18 min',
        difficulty: 'Intermediate'
      },
      {
        id: '4.8-search-engines',
        code: '4.8',
        title: 'Search Engine Engineering: Crawlers, Inverted Index & PageRank',
        subtitle: 'Polite crawling, robots.txt, TF-IDF scoring, inverted indexes, and Google PageRank algorithms',
        readTime: '20 min',
        difficulty: 'Advanced'
      },
      {
        id: '4.9-recommender-systems',
        code: '4.9',
        title: 'Recommender Systems: Collaborative vs. Content-Based Filtering',
        subtitle: 'User-user / item-item matrix factorization, vector cosine similarity, and cold-start mitigations',
        readTime: '18 min',
        difficulty: 'Advanced'
      },
      {
        id: '4.10-blockchain-edge',
        code: '4.10',
        title: 'Enterprise Distributed Systems: Blockchain Benefits & Edge CDNs',
        subtitle: 'Cryptographic hash chains, consensus verification, Edge PoP caching, and origin offloading',
        readTime: '18 min',
        difficulty: 'Intermediate'
      },
      {
        id: '4.11-dark-mode-engineering',
        code: '4.11',
        title: 'Modern Dark Mode Engineering & Contrast Standards',
        subtitle: 'CSS custom properties, prefers-color-scheme, WCAG contrast ratios, and FOUC prevention',
        readTime: '14 min',
        difficulty: 'Fundamental'
      }
    ]
  },
  {
    id: 'future-web-ai-spatial',
    title: 'The Future Web (Web 4.0 & AI)',
    shortTitle: 'Future Web & AI',
    description: 'Symbiotic autonomous agents, on-device WebGPU neural networks, IPFS decentralized web, smart contracts, IoT MQTT, WebXR, and 5G.',
    iconName: 'Sparkles',
    unitBadge: 'Unit 5',
    topics: [
      {
        id: '5.1-web40-future',
        code: '5.1',
        title: 'Web 4.0: The Symbiotic & Intelligent Web',
        subtitle: 'Conceptual paradigm of proactive autonomous agents, context correlation, and ambient web systems',
        readTime: '16 min',
        difficulty: 'Intermediate'
      },
      {
        id: '5.2-ai-powered-web',
        code: '5.2',
        title: 'AI-Powered Web Applications & On-Device WebGPU Inference',
        subtitle: 'Client-side neural networks via WebGPU and WASM, dynamic personalization, and privacy preservation',
        readTime: '18 min',
        difficulty: 'Intermediate'
      },
      {
        id: '5.3-decentralized-web',
        code: '5.3',
        title: 'The Decentralized Web (DWeb) & P2P Content Addressing (IPFS)',
        subtitle: 'Location-based vs Content-addressed storage (CID), Distributed Hash Tables (DHT), and BitTorrent',
        readTime: '18 min',
        difficulty: 'Intermediate'
      },
      {
        id: '5.4-blockchain-web3',
        code: '5.4',
        title: 'Blockchain Integration & Smart Contract Web3 Frontends',
        subtitle: 'Ethereum JSON-RPC providers, wallet signing, state verification, and Web3 frontend integration',
        readTime: '20 min',
        difficulty: 'Intermediate'
      },
      {
        id: '5.5-iot-web-development',
        code: '5.5',
        title: 'Internet of Things (IoT) & The Web of Things (WoT)',
        subtitle: 'MQTT over WebSockets, Server-Sent Events, sensor telemetry, and Digital Twin browsers',
        readTime: '18 min',
        difficulty: 'Intermediate'
      },
      {
        id: '5.6-spatial-web-webxr',
        code: '5.6',
        title: 'Spatial Computing on the Web: WebXR, AR & VR',
        subtitle: 'WebXR Device API, Three.js 3D canvas rendering, plane detection, and spatial user interaction',
        readTime: '18 min',
        difficulty: 'Intermediate'
      },
      {
        id: '5.7-smart-web-adaptive',
        code: '5.7',
        title: 'Smart Web & Context-Aware Adaptive Interfaces',
        subtitle: 'Hardware APIs: Ambient light, Battery status, Network Information, and proactive UX morphing',
        readTime: '16 min',
        difficulty: 'Intermediate'
      },
      {
        id: '5.8-web-automation',
        code: '5.8',
        title: 'Web Automation, Webhooks & Autonomous Workflows',
        subtitle: 'Event-driven webhooks with HMAC signatures, headless browser pipelines with Playwright/Puppeteer',
        readTime: '18 min',
        difficulty: 'Intermediate'
      },
      {
        id: '5.9-impact-of-5g',
        code: '5.9',
        title: 'The Impact of 5G Networks on Web Technologies',
        subtitle: 'Sub-1ms latency, 10Gbps bandwidth, Multi-Access Edge Computing (MEC), and network slicing',
        readTime: '16 min',
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    id: 'production-security-performance',
    title: 'Production Web Engineering & Security',
    shortTitle: 'Security & Production',
    description: 'Crucial industry-grade engineering: HTTPS/TLS 1.3 handshake, CORS/CSP, OWASP security threats, Core Web Vitals, and global architectures.',
    iconName: 'Shield',
    unitBadge: 'Unit 6',
    topics: [
      {
        id: '6.1-web-security',
        code: '6.1',
        title: 'Web Security Architecture: HTTPS, TLS 1.3, CORS, CSP & OWASP',
        subtitle: 'Public key cryptography, TLS 1.3 handshake, Cross-Origin Resource Sharing, Content Security Policy, and XSS/CSRF',
        readTime: '22 min',
        difficulty: 'Advanced'
      },
      {
        id: '6.2-web-performance',
        code: '6.2',
        title: 'Web Performance Engineering & Core Web Vitals (CWV)',
        subtitle: 'Largest Contentful Paint (LCP), Interaction to Next Paint (INP), Cumulative Layout Shift (CLS), and HTTP/3 QUIC',
        readTime: '20 min',
        difficulty: 'Advanced'
      },
      {
        id: '6.3-global-production-systems',
        code: '6.3',
        title: 'Global Production Architectures: How Netflix, Cloudflare & Stripe Run the Web',
        subtitle: 'Anycast DNS routing, micro-frontends, edge worker computation, multi-region database replication, and zero-downtime deploys',
        readTime: '24 min',
        difficulty: 'Advanced'
      }
    ]
  }
];
