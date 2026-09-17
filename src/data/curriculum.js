import { UNIT_2_DEFINITION, UNIT_2_TOPICS } from './unit2Curriculum';

export const UNITS = [
  {
    id: "unit-1",
    number: 1,
    title: "Unit 1: Web Fundamentals & Architecture",
    description: "The foundational protocols, architectures, and systems that power global internetworking and the World Wide Web.",
    iconName: "Globe",
    accentColor: "indigo",
    topicCount: 13,
    estimatedHours: 6.5,
    topics: [
      { id: "history-of-the-internet", title: "History of the Internet", difficulty: "Beginner", duration: "15 min", isImplemented: true },
      { id: "world-wide-web", title: "World Wide Web & Client-Server Architecture", difficulty: "Beginner", duration: "15 min", isImplemented: true },
      { id: "html-foundations", title: "HTML: Structure, Semantics & Document Model", difficulty: "Beginner", duration: "20 min", isImplemented: true },
      { id: "http-protocol", title: "HTTP: Hypertext Transfer Protocol & Wire Lifecycle", difficulty: "Beginner", duration: "20 min", isImplemented: true },
      { id: "smtp-protocol", title: "SMTP: Simple Mail Transfer Protocol", difficulty: "Beginner", duration: "14 min", isImplemented: true },
      { id: "pop3-protocol", title: "POP3: Post Office Protocol", difficulty: "Beginner", duration: "12 min", isImplemented: true },
      { id: "imap-protocol", title: "IMAP: Internet Message Access Protocol", difficulty: "Beginner", duration: "15 min", isImplemented: true },
      { id: "pop3-vs-imap", title: "POP3 vs. IMAP: Multi-Device Synchronization", difficulty: "Intermediate", duration: "14 min", isImplemented: true },
      { id: "mime-types", title: "MIME: Multipurpose Internet Mail Extensions", difficulty: "Beginner", duration: "12 min", isImplemented: true },
      { id: "dns-resolution", title: "Domain Name System (DNS) & Name Resolution", difficulty: "Beginner", duration: "18 min", isImplemented: true },
      { id: "web-browsers", title: "Web Browsers & The Rendering Pipeline", difficulty: "Intermediate", duration: "18 min", isImplemented: true },
      { id: "web-servers", title: "Web Servers & Resource Dispatching", difficulty: "Intermediate", duration: "16 min", isImplemented: true },
      { id: "follow-a-web-request", title: "Capstone: Follow a Web Request (End-to-End)", difficulty: "Intermediate", duration: "25 min", isImplemented: true }
    ]
  },
  UNIT_2_DEFINITION,
  {
    id: "unit-3",
    number: 3,
    title: "Unit 3: CSS3, Modern Layouts & Responsive Design",
    description: "Deep dive into the CSS box model, Flexbox, CSS Grid, container queries, visual hierarchy, and performant animation styling.",
    iconName: "Palette",
    accentColor: "violet",
    topicCount: 4,
    estimatedHours: 4.5,
    topics: [
      { id: "css-box-model", title: "The CSS Box Model & Geometry Flow", difficulty: "Beginner", duration: "12 min", isImplemented: true },
      { id: "flexbox-deepdive", title: "Flexbox Layout Mechanics & Axis Alignment", difficulty: "Beginner", duration: "15 min", isImplemented: false },
      { id: "css-grid-mastery", title: "CSS Grid: Two-Dimensional Alignment", difficulty: "Intermediate", duration: "18 min", isImplemented: false },
      { id: "responsive-design-queries", title: "Responsive Design: Media & Container Queries", difficulty: "Intermediate", duration: "14 min", isImplemented: false }
    ]
  },
  {
    id: "unit-4",
    number: 4,
    title: "Unit 4: JavaScript, DOM Scripting & Asynchronous Web",
    description: "Explore the JavaScript event loop, DOM event bubbling, asynchronous patterns, Fetch API, and client-side data handling.",
    iconName: "Code2",
    accentColor: "amber",
    topicCount: 4,
    estimatedHours: 5,
    topics: [
      { id: "event-loop-async", title: "The JavaScript Event Loop & Microtasks", difficulty: "Intermediate", duration: "18 min", isImplemented: false },
      { id: "dom-manipulation-events", title: "DOM Traversal, Manipulation & Event Bubbling", difficulty: "Beginner", duration: "15 min", isImplemented: false },
      { id: "fetch-api-ajax", title: "Asynchronous Web: Promises, Fetch API & JSON", difficulty: "Intermediate", duration: "14 min", isImplemented: false },
      { id: "client-storage-apis", title: "Client-Side Storage: LocalStorage, Session, IndexedDB", difficulty: "Beginner", duration: "10 min", isImplemented: false }
    ]
  },
  {
    id: "unit-5",
    number: 5,
    title: "Unit 5: Modern Web Architecture, Security & Emerging Tech",
    description: "Understand Single Page Apps (SPA), CORS, XSS/CSRF security mitigations, WebSockets, PWAs, and decentralized web concepts.",
    iconName: "ShieldCheck",
    accentColor: "emerald",
    topicCount: 4,
    estimatedHours: 5.5,
    topics: [
      { id: "web-security-cors", title: "Web Security: Same-Origin Policy, CORS & XSS", difficulty: "Advanced", duration: "20 min", isImplemented: false },
      { id: "rest-graphql-apis", title: "Modern API Paradigms: REST vs GraphQL", difficulty: "Intermediate", duration: "15 min", isImplemented: false },
      { id: "spa-vs-ssr-hydration", title: "Single Page Apps (SPA) vs SSR & Hydration", difficulty: "Intermediate", duration: "16 min", isImplemented: false },
      { id: "realtime-websockets", title: "Real-Time Communication: WebSockets & SSE", difficulty: "Advanced", duration: "18 min", isImplemented: false }
    ]
  }
];

export const TOPICS = {
  // ==========================================
  // TOPIC 1: HISTORY OF THE INTERNET
  // ==========================================
  "history-of-the-internet": {
    id: "history-of-the-internet",
    unitId: "unit-1",
    unitNumber: 1,
    unitTitle: "Unit 1: Web Fundamentals & Architecture",
    title: "History of the Internet",
    subtitle: "From Cold War circuit-switching bottlenecks and ARPANET to the global decentralized TCP/IP network of networks",
    difficulty: "Beginner",
    estimatedMinutes: 15,
    badge: "Genesis & Evolution",

    definition: "The Internet is a globally connected system of computers and networks that communicate using the standardized Internet Protocol Suite (TCP/IP). It originated from research into survivable, decentralized packet-switching communications initiated by the US Department of Defense's DARPA in the late 1960s.",

    whyItMatters: "Every design constraint of modern web engineering—statelessness, asynchronous packets, latency, packet loss, and decentralized routing—stems directly from the architectural decisions made between 1969 and 1983. Understanding the evolution from fragile circuit-switched networks to resilient packet switching demystifies why the internet works the way it does.",

    explanation: [
      {
        heading: "Beginner Explanation: The Post Office vs. Dedicated Telephone Line",
        content: "Imagine making a phone call in 1960: telephone operators physically connected a copper wire between two cities. If a tree fell on that wire mid-call, the connection died. This was 'circuit switching'.\n\nThe internet replaced this with 'packet switching'—analogous to a postal service. If you want to send a 1,000-page book to a friend, you tear the book into 1,000 postcards, number each one, and drop them into mailboxes. Some postcards travel by truck, some by airplane. Your friend receives them, sorts them by number, and reassembles the book. Even if one highway is closed, the other postcards still arrive."
      },
      {
        heading: "Technical Explanation: From ARPANET to Flag Day (1983)",
        content: "In October 1969, ARPANET connected four Interface Message Processors (IMPs) located at UCLA, Stanford, UC Santa Barbara, and the University of Utah. However, early networks utilized NCP (Network Control Program), which could only connect homogeneous, identical machines within ARPANET.\n\nIn 1974, Vinton Cerf and Robert Kahn published 'A Protocol for Packet Network Intercommunication', introducing TCP/IP. TCP/IP abstracted away the physical transport layer: whether communicating over satellite, copper telephone lines, or microwave radio, packets were formatted identically. On January 1, 1983 ('Flag Day'), ARPANET permanently deactivated NCP and mandated TCP/IP, officially giving birth to the modern Internet."
      },
      {
        heading: "Important Historical Milestones",
        bullets: [
          "1969: First ARPANET transmission between UCLA and Stanford ('LO' before crash).",
          "1974: TCP/IP specification published by Vint Cerf and Bob Kahn.",
          "1983: 'Flag Day' mandates TCP/IP globally; DNS is invented to replace static HOSTS.TXT.",
          "1989-1991: Tim Berners-Lee invents the World Wide Web (HTTP, HTML, URLs) at CERN.",
          "1993: NCSA Mosaic browser released, sparking the graphical public web boom."
        ]
      }
    ],

    howItWorks: [
      { step: 1, title: "Circuit-Switching Breakdown", subtitle: "Pre-1969", description: "Telecommunication required dedicated, fragile physical circuits between two points." },
      { step: 2, title: "Packet-Switching Invention", subtitle: "1960s Theory", description: "Paul Baran and Donald Davies conceptualize dividing data into independent addressed datagrams." },
      { step: 3, title: "ARPANET Launch", subtitle: "1969", description: "First 4-node packet-switching network links university research laboratories." },
      { step: 4, title: "TCP/IP Protocol Standard", subtitle: "1983", description: "Universal standard bridges heterogeneous networks into a true 'Internet'." },
      { step: 5, title: "WWW Application Layer", subtitle: "1991", description: "Tim Berners-Lee creates the Web as an information retrieval service on top of the Internet." }
    ],

    simulationType: "history-timeline",

    practicalExample: {
      scenario: "Sending an Image across 12 Router Hops Today",
      description: "When you upload a 2 MB photo on modern internet backbones, it is partitioned into approximately 1,400 IP packets (each ~1,500 bytes MTU). Each packet travels through BGP router hops independently and is reconstructed by TCP sequence numbers at the destination server.",
      records: [
        { type: "Hop 1", host: "192.168.1.1", value: "Wi-Fi Router", ttl: "1ms", purpose: "Local gateway packet forwarding" },
        { type: "Hop 5", host: "72.14.215.8", value: "ISP Backbone Router", ttl: "12ms", purpose: "Regional Autonomous System (AS) routing" },
        { type: "Hop 11", host: "142.250.180.4", value: "Cloudflare/Google Edge", ttl: "24ms", purpose: "TCP reassembly and TLS termination" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Believing the Internet and the World Wide Web are the same thing",
        reality: "The Internet is the underlying physical and transport networking infrastructure (TCP/IP, fiber cables, routers). The Web is just ONE application running on top of the internet, alongside email (SMTP), file transfers (FTP), and gaming."
      },
      {
        misconception: "Thinking internet packets always travel through the exact same physical path",
        reality: "IP routing is dynamic. If a submarine fiber optic cable is cut in the Atlantic, BGP routers instantly re-route subsequent packets across the Pacific without interrupting active downloads."
      }
    ],

    relatedTopics: [
      { id: "world-wide-web", title: "World Wide Web & Client-Server", unitId: "unit-1" },
      { id: "http-protocol", title: "HTTP Protocol & Lifecycle", unitId: "unit-1" }
    ],

    challenge: {
      id: "challenge-hist-01",
      title: "Identify the Missing Architectural Breakthrough",
      difficulty: "Beginner",
      badge: "Internet History",
      description: "Prior to 1983, computers across ARPANET, PRNET (packet radio), and SATNET (satellite network) could not talk to each other because each used incompatible proprietary protocol stacks.",
      task: "Which architectural standard unified these disconnected networks into a single cohesive internet?",
      options: [
        { id: "opt-1", text: "HyperText Markup Language (HTML)", correct: false, reason: "HTML was invented in 1989 for formatting hypertext documents, not network packet routing." },
        { id: "opt-2", text: "The TCP/IP Protocol Suite (RFC 791/793)", correct: true, reason: "Correct! TCP/IP abstracted the physical medium, enabling disparate networks to interoperate under a shared IP addressing format." },
        { id: "opt-3", text: "Circuit-switching telephone exchanges", correct: false, reason: "Circuit switching was the old, fragile analog architecture that packet switching replaced." }
      ],
      hint: "Think about Vint Cerf and Bob Kahn's protocol adopted on 'Flag Day' (January 1, 1983)."
    },

    quiz: [
      {
        id: "hist-q1",
        question: "What was the fundamental limitation of circuit-switching communication that packet-switching solved?",
        options: [
          "Circuit switching was too secure for military communications.",
          "Circuit switching required a dedicated physical connection that failed if any single point on the path was broken.",
          "Circuit switching could only transmit text and not audio.",
          "Circuit switching did not support computer keyboards."
        ],
        correctIndex: 1,
        explanation: "In circuit switching, a dedicated physical link is reserved. Packet switching divides data into discrete packets that navigate dynamic, decentralized paths, ensuring survivability."
      },
      {
        id: "hist-q2",
        question: "In what year did ARPANET officially switch from NCP to TCP/IP ('Flag Day')?",
        options: ["1969", "1974", "1983", "1991"],
        correctIndex: 2,
        explanation: "January 1, 1983 is officially commemorated as the birthdate of the modern Internet, when ARPANET permanently converted to TCP/IP."
      },
      {
        id: "hist-q3",
        question: "Who invented the World Wide Web, HTML, HTTP, and URLs at CERN?",
        options: ["Vinton Cerf", "Alan Turing", "Tim Berners-Lee", "Marc Andreessen"],
        correctIndex: 2,
        explanation: "Sir Tim Berners-Lee invented the World Wide Web in 1989-1991 to facilitate seamless research document sharing."
      }
    ]
  },

  // ==========================================
  // TOPIC 2: WORLD WIDE WEB
  // ==========================================
  "world-wide-web": {
    id: "world-wide-web",
    unitId: "unit-1",
    unitNumber: 1,
    unitTitle: "Unit 1: Web Fundamentals & Architecture",
    title: "World Wide Web & Client-Server Architecture",
    subtitle: "Understanding web pages, websites, hyperlinked resources, and the client-server request model",
    difficulty: "Beginner",
    estimatedMinutes: 15,
    badge: "Information System",

    definition: "The World Wide Web (WWW or 'the Web') is an open application-layer information system operating over the global Internet. It enables documents and multimedia resources to be identified by Uniform Resource Locators (URLs), interconnected through hyperlinks, and retrieved via the HyperText Transfer Protocol (HTTP).",

    whyItMatters: "Conflating the Web with the Internet is the single most common conceptual error made by beginner developers. Knowing how the Web's client-server architecture isolates client presentation from server resource storage is the bedrock of full-stack software engineering.",

    explanation: [
      {
        heading: "Beginner Explanation: The Highway vs. The Delivery Trucks",
        content: "The Internet is the global highway network: thousands of miles of asphalt (fiber optic cables), intersections (routers), and traffic laws (TCP/IP).\n\nThe World Wide Web is one specific fleet of delivery trucks that drives on that highway, carrying web pages and media to human browsers. Other fleets on the same highway carry emails (SMTP), streaming movies (RTP/WebRTC), and file syncs."
      },
      {
        heading: "Core Entities of the Web",
        content: "The Web is built upon distinct conceptual entities:\n- Web Page: A single document, typically written in HTML, with embedded media and styles.\n- Website: A collection of interrelated web pages hosted under a single domain name.\n- Web Resource: Any identifiable asset (HTML, CSS, JS, JPEG, JSON, PDF) with a unique URL.\n- Hyperlink: A reference/pointer embedded in a document that immediately links to another resource.\n- Web Browser: The client user agent that downloads and paints web resources.\n- Web Server: The host machine running daemon software that listens for HTTP requests and returns resources."
      },
      {
        heading: "The 5-Tier Request Path",
        content: "Whenever an interaction occurs on the Web, the data flows across 5 distinct tiers:\n1. USER: Enters a URL or clicks a link.\n2. BROWSER: Formulates an HTTP request and dispatches packets.\n3. INTERNET: Transports packets across global routers via TCP/IP.\n4. WEB SERVER: Receives the request, queries disks or databases, and builds an HTTP response.\n5. WEB RESOURCE: The payload returned (HTML, JSON, image) that the browser parses and paints."
      }
    ],

    howItWorks: [
      { step: 1, title: "User Action", subtitle: "Intent", description: "User enters https://example.com or clicks a hyperlink." },
      { step: 2, title: "Browser Protocol Handshake", subtitle: "Client Processing", description: "Browser performs DNS resolution and opens a secure socket to the destination IP." },
      { step: 3, title: "Internet Transit", subtitle: "Packet Routing", description: "Routers forward packets across fiber backbones to the target server." },
      { step: 4, title: "Web Server Execution", subtitle: "HTTP Daemon", description: "Server parses the GET request and locates the target resource on disk." },
      { step: 5, title: "Resource Delivery", subtitle: "Browser Painting", description: "Resource streams back, browser constructs the DOM, and paints the page." }
    ],

    simulationType: "www-architecture",

    practicalExample: {
      scenario: "Accessing an E-Commerce Product Page",
      description: "When viewing a product at `https://shop.dev/products/shoes`, the browser fetches the base HTML, then dispatches secondary parallel HTTP requests across the Internet for 1 CSS stylesheet, 2 JavaScript bundles, and 4 product JPEG photos from web servers.",
      records: [
        { type: "Resource", host: "/products/shoes", value: "text/html", ttl: "Base Document", purpose: "HTML DOM structure" },
        { type: "Resource", host: "/assets/style.css", value: "text/css", ttl: "Stylesheet", purpose: "CSS visual styling" },
        { type: "Resource", host: "/assets/hero.jpg", value: "image/jpeg", ttl: "Media Asset", purpose: "Visual product photography" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Thinking 'web server' refers exclusively to a physical computer",
        reality: "In web technology, 'web server' primarily refers to software—a daemon process like Nginx, Apache, or Node.js listening on a network port. A single physical machine can host hundreds of virtual web servers."
      },
      {
        misconception: "Assuming clicking a link downloads the entire website",
        reality: "The web is strictly on-demand. Clicking a hyperlink only requests that single specific HTML resource and its linked sub-resources."
      }
    ],

    relatedTopics: [
      { id: "history-of-the-internet", title: "History of the Internet", unitId: "unit-1" },
      { id: "html-foundations", title: "HTML Foundations", unitId: "unit-1" },
      { id: "http-protocol", title: "HTTP Protocol", unitId: "unit-1" }
    ],

    challenge: {
      id: "challenge-www-01",
      title: "Differentiate Internet Infrastructure from Web Resources",
      difficulty: "Beginner",
      badge: "Web Architecture",
      description: "A student states: 'When the internet cable is cut under the ocean, the World Wide Web is broken, but email still works because email is not part of the web.'",
      task: "What is technically incorrect about this student's reasoning?",
      options: [
        { id: "opt-1", text: "Email is part of the World Wide Web, so both break.", correct: false, reason: "Email operates on SMTP/IMAP, which are separate application protocols from the Web." },
        { id: "opt-2", text: "Both email and the Web rely on the physical Internet infrastructure; if the physical cable is severed and no alternative route exists, both email and web traffic fail.", correct: true, reason: "Correct! The Web and Email are both application layer services built ON TOP of the Internet transport infrastructure." },
        { id: "opt-3", text: "Web servers don't use undersea cables.", correct: false, reason: "Undersea fiber optic cables carry 99% of all intercontinental internet traffic." }
      ],
      hint: "Remember the relationship between the physical highway (Internet) and the vehicles (Web, Email) driving on it."
    },

    quiz: [
      {
        id: "www-q1",
        question: "Which of the following is the best definition of the World Wide Web?",
        options: [
          "The global network of physical routers and fiber optic cables.",
          "An application-layer information system of hyperlinked documents accessed over the Internet via HTTP.",
          "A programming language used to style buttons.",
          "The operating system that runs on network routers."
        ],
        correctIndex: 1,
        explanation: "The Web is an application-layer system of interlinked hypertext documents and resources identified by URLs and transferred using HTTP."
      },
      {
        id: "www-q2",
        question: "What is a 'Web Resource'?",
        options: [
          "Only files that end in .html.",
          "Any addressable digital asset (HTML, CSS, image, video, JSON) identified by a URI/URL.",
          "A technician who repairs network cables.",
          "The electricity powering a data center."
        ],
        correctIndex: 1,
        explanation: "Any digital asset with a unique URI/URL that can be requested and retrieved over the web is considered a Web Resource."
      }
    ]
  },

  // ==========================================
  // TOPIC 3: HTML FOUNDATIONS
  // ==========================================
  "html-foundations": {
    id: "html-foundations",
    unitId: "unit-1",
    unitNumber: 1,
    unitTitle: "Unit 1: Web Fundamentals & Architecture",
    title: "HTML: Structure, Semantics & Document Model",
    subtitle: "The foundational markup language that defines the semantic structure and content of every web page",
    difficulty: "Beginner",
    estimatedMinutes: 20,
    badge: "Core Markup",

    definition: "HyperText Markup Language (HTML) is the standard declarative markup language used to structure web documents. It uses elements composed of tags (such as <header>, <h1>, <p>, and <a>) and attributes to describe the role, semantics, and hierarchy of content for web browsers.",

    whyItMatters: "HTML is not a programming language—it is a document structural language. Writing clean, semantic HTML ensures websites are indexed accurately by search engines (SEO), read effortlessly by screen readers for users with disabilities (A11y), and rendered with maximum performance by the browser's parsing engine.",

    explanation: [
      {
        heading: "Beginner Explanation: The Skeleton of a Building",
        content: "If a web page were a modern house:\n- HTML is the concrete foundation, steel beams, and wooden frame (structure).\n- CSS is the interior paint, floor tiles, wallpaper, and lighting (styling).\n- JavaScript is the electricity, water piping, and automated door locks (interactivity).\n\nWithout HTML, there is no document for CSS to style or for JavaScript to manipulate."
      },
      {
        heading: "Anatomy of an HTML Element",
        content: "An HTML element generally consists of:\n1. Opening Tag: `<p class=\"intro\">`\n2. Attribute Name and Value: `class=\"intro\"`\n3. Content: `Welcome to WebTech`\n4. Closing Tag: `</p>`\n\nSome elements are void/self-closing (they cannot have children or inner text), such as `<img src=\"pic.jpg\" alt=\"A photo\" />` and `<input type=\"text\" />`."
      },
      {
        heading: "Document Structure & HTML5 Semantics",
        content: "A standards-compliant HTML5 document starts with `<!DOCTYPE html>` to force standards rendering mode. The root `<html>` contains `<head>` (metadata, character sets, titles, stylesheets) and `<body>` (the visible content).\n\nModern HTML5 prioritizes semantic tags: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, and `<footer>`. These replace generic `<div>` soup with meaningful tags that assist screen readers and search engines."
      }
    ],

    howItWorks: [
      { step: 1, title: "Character Stream Decoding", subtitle: "Parsing", description: "Browser receives raw bytes and decodes them into UTF-8 text characters." },
      { step: 2, title: "Tokenization", subtitle: "Lexer", description: "State machine parses characters into StartTag, EndTag, and Character tokens." },
      { step: 3, title: "Node Creation", subtitle: "DOM Assembly", description: "Tokens are transformed into Element, Text, and Attribute nodes." },
      { step: 4, title: "Tree Construction", subtitle: "DOM Tree", description: "Nodes are nested into a hierarchical parent-child object graph." }
    ],

    simulationType: "html-playground",

    practicalExample: {
      scenario: "Accessible Navigation Bar and Main Content",
      description: "A production accessible layout using semantic landmarks instead of uninformative container divs.",
      records: [
        { type: "Semantic Tag", host: "<nav aria-label='Main'>", value: "Navigation Landmark", ttl: "A11y", purpose: "Allows screen readers to jump directly to page links" },
        { type: "Semantic Tag", host: "<main>", value: "Primary Content", ttl: "Structure", purpose: "Contains unique central content of the document" },
        { type: "Semantic Tag", host: "<img alt='...'>", value: "Alternative Text", ttl: "Access", purpose: "Provides textual equivalent if image fails to load" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Using <div> for clickable buttons instead of <button>",
        reality: "A <div> has no keyboard accessibility (cannot be focused with Tab or triggered with Enter/Space) and no role for screen readers. Always use native `<button>` or `<a>` elements."
      },
      {
        misconception: "Skipping heading levels (e.g. jumping from <h1> directly to <h4> for smaller font size)",
        reality: "Headings establish a document outline for assistive technology. Never choose a heading tag based on visual font size—use CSS for sizing and keep heading hierarchy sequential (h1 -> h2 -> h3)."
      }
    ],

    relatedTopics: [
      { id: "world-wide-web", title: "World Wide Web", unitId: "unit-1" },
      { id: "web-browsers", title: "Web Browsers & Rendering", unitId: "unit-1" }
    ],

    challenge: {
      id: "challenge-html-01",
      title: "Fix the Inaccessible Form Markup",
      difficulty: "Beginner",
      badge: "Semantic HTML",
      description: "A developer wrote: `<div onclick=\"submit()\">Submit Form</div>`. Users who navigate via keyboard cannot submit the form.",
      task: "What is the correct, semantic fix?",
      options: [
        { id: "opt-1", text: "Add more CSS hover styles to the <div>.", correct: false, reason: "CSS only changes visual appearance, not keyboard focus or accessibility roles." },
        { id: "opt-2", text: "Replace the <div> with `<button type=\"submit\">Submit Form</button>`.", correct: true, reason: "Correct! Native `<button>` elements automatically support keyboard focus, Enter/Space activation, and screen reader roles." },
        { id: "opt-3", text: "Wrap the <div> inside a `<p>` tag.", correct: false, reason: "A `<p>` tag is for paragraph text and has no interactive affordances." }
      ],
      hint: "Always prefer native interactive HTML elements over generic division wrappers."
    },

    quiz: [
      {
        id: "html-q1",
        question: "Why must every modern HTML document begin with '<!DOCTYPE html>'?",
        options: [
          "It imports the Tailwind CSS framework from the internet.",
          "It informs the browser to render the page in Standards Mode rather than Quirks Mode.",
          "It compiles HTML into binary machine code.",
          "It encrypts the HTML page with SSL/TLS."
        ],
        correctIndex: 1,
        explanation: "<!DOCTYPE html> instructs browser rendering engines to follow modern W3C/WHATWG web standards rather than emulating legacy 1990s quirks."
      },
      {
        id: "html-q2",
        question: "Which of the following is an example of a self-closing (void) element that cannot contain closing tags?",
        options: ["<p>", "<div>", "<img>", "<article>"],
        correctIndex: 2,
        explanation: "The <img> tag is a void element. It embeds an image via attributes and has no closing tag or inner text."
      }
    ]
  },

  // ==========================================
  // TOPIC 4: HTTP PROTOCOL
  // ==========================================
  "http-protocol": {
    id: "http-protocol",
    unitId: "unit-1",
    unitNumber: 1,
    unitTitle: "Unit 1: Web Fundamentals & Architecture",
    title: "HTTP: Hypertext Transfer Protocol & Wire Lifecycle",
    subtitle: "The stateless application-layer communication protocol governing the client-server web",
    difficulty: "Beginner",
    estimatedMinutes: 20,
    badge: "Application Protocol",

    definition: "HyperText Transfer Protocol (HTTP) is an application-layer, stateless request-response communication protocol. It enables client applications (such as web browsers) to request resources from servers and servers to return structured response envelopes containing status codes, headers, and payloads.",

    whyItMatters: "Every interaction on the modern web—REST APIs, single-page application data fetches, CSS bundle downloads, and GraphQL mutations—is an HTTP transaction. Mastering HTTP request verbs, headers, status codes, and caching is mandatory for every web developer.",

    explanation: [
      {
        heading: "Beginner Explanation: Ordering at a Restaurant Counter",
        content: "HTTP operates like ordering at a coffee shop counter:\n1. You walk to the counter and state an action and item: 'GET /latte' (The Request).\n2. You hand the barista your loyalty card: 'Authorization: Customer-ID-42' (Request Header).\n3. The barista takes your cup, processes it, and responds: '200 OK' (Status Code).\n4. The barista hands you your coffee: (Response Body).\n5. As soon as you walk away, the barista forgets who you are unless you show your loyalty card again next time (Statelessness)."
      },
      {
        heading: "The Structure of an HTTP Transaction",
        content: "Every HTTP transaction is divided into two distinct messages:\n\n1. HTTP REQUEST:\n- Request Line: Method, Path, and Version (e.g. `GET /api/users HTTP/1.1`)\n- Request Headers: Key-value metadata (`Host`, `User-Agent`, `Accept`, `Authorization`)\n- Optional Body: Sent with POST/PUT requests containing JSON or form data.\n\n2. HTTP RESPONSE:\n- Status Line: Version, Status Code, and Reason Phrase (e.g. `HTTP/1.1 200 OK`)\n- Response Headers: Metadata (`Content-Type`, `Content-Length`, `Cache-Control`, `Set-Cookie`)\n- Response Body: The requested asset (HTML text, JSON data, image bytes)."
      },
      {
        heading: "HTTP Verbs and Idempotency",
        content: "Common HTTP methods define user intent:\n- GET: Retrieve a resource without modifying server state (Safe & Idempotent).\n- POST: Submit data to create a new subordinate resource (Neither safe nor idempotent).\n- PUT: Replace an entire existing resource with a new representation (Idempotent).\n- DELETE: Remove a specified resource (Idempotent).\n- PATCH: Apply partial modifications to a resource."
      }
    ],

    howItWorks: [
      { step: 1, title: "TCP Connection Established", subtitle: "Transport Layer", description: "Browser completes 3-way handshake on port 80 (HTTP) or 443 (HTTPS)." },
      { step: 2, title: "Client Emits Request Line", subtitle: "Wire Format", description: "Client writes method, URI, headers, and optional body to the network socket." },
      { step: 3, title: "Server Processes Request", subtitle: "Middleware", description: "Web server parses headers, routes endpoint, and constructs response." },
      { step: 4, title: "Server Transmits Response", subtitle: "Wire Return", description: "Server transmits 3-digit status code, headers, and resource body." },
      { step: 5, title: "Socket Reuse / Close", subtitle: "Keep-Alive", description: "In HTTP/1.1, connection stays open for subsequent asset requests." }
    ],

    simulationType: "http-lifecycle",

    practicalExample: {
      scenario: "Retrieving User Profile via REST API",
      description: "A single-page React app executing a client fetch request with JWT authentication headers.",
      records: [
        { type: "Method", host: "GET", value: "/api/v1/profile", ttl: "Action", purpose: "Idempotent read of user profile" },
        { type: "Header", host: "Authorization", value: "Bearer eyJhbGci...", ttl: "Auth", purpose: "Authenticates request identity" },
        { type: "Status", host: "200 OK", value: "{ name: 'Alice' }", ttl: "Response", purpose: "Successful JSON payload delivery" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Using GET requests for operations that delete or modify database data",
        reality: "GET requests must be safe and idempotent. Search engine crawlers and browser pre-fetch engines automatically follow all GET links; using GET for deletion results in accidental data erasure!"
      },
      {
        misconception: "Confusing 401 Unauthorized with 403 Forbidden",
        reality: "401 means 'Unauthenticated' (credentials missing or invalid). 403 means 'Authenticated, but Forbidden' (server knows who you are, but you lack permissions)."
      }
    ],

    relatedTopics: [
      { id: "world-wide-web", title: "World Wide Web", unitId: "unit-1" },
      { id: "dns-resolution", title: "DNS Resolution", unitId: "unit-1" },
      { id: "web-servers", title: "Web Servers", unitId: "unit-1" }
    ],

    challenge: {
      id: "challenge-http-02",
      title: "Resolve the Idempotent Update Bug",
      difficulty: "Intermediate",
      badge: "HTTP Design",
      description: "A payment gateway endpoint `/api/pay` charges a credit card. The frontend engineer accidentally configured the form to send a GET request.",
      task: "Why is using GET for credit card charges a catastrophic bug?",
      options: [
        { id: "opt-1", text: "GET requests cannot send credit card numbers.", correct: false, reason: "GET requests can send query parameters, but it is dangerous and insecure." },
        { id: "opt-2", text: "GET requests are cached by browsers, saved in server access logs and browser histories, and may be re-sent automatically on page refresh or browser pre-fetching, double-charging the user.", correct: true, reason: "Correct! Financial transactions mutate state and must use POST with unique idempotency tokens, never GET." },
        { id: "opt-3", text: "GET requests only work on Apache and not Nginx.", correct: false, reason: "All web servers support GET." }
      ],
      hint: "Consider what happens when a user presses the browser 'Refresh' button on a GET URL."
    },

    quiz: [
      {
        id: "http-q1",
        question: "Which HTTP status code signifies that a resource was moved permanently to a new URL?",
        options: ["200 OK", "301 Moved Permanently", "404 Not Found", "500 Internal Error"],
        correctIndex: 1,
        explanation: "301 indicates permanent redirection. Search engines transfer SEO ranking to the new target URL."
      },
      {
        id: "http-q2",
        question: "What does it mean for an HTTP method to be 'idempotent'?",
        options: [
          "The method encrypts the request with SSL.",
          "Making multiple identical requests produces the exact same server state as making a single request.",
          "The method only works with JavaScript disabled.",
          "The server responds in under 10 milliseconds."
        ],
        correctIndex: 1,
        explanation: "Idempotence means that repeating the operation multiple times yields the same result without unintended side effects (e.g. GET, PUT, DELETE)."
      }
    ]
  },

  // ==========================================
  // TOPIC 5: SMTP PROTOCOL
  // ==========================================
  "smtp-protocol": {
    id: "smtp-protocol",
    unitId: "unit-1",
    unitNumber: 1,
    unitTitle: "Unit 1: Web Fundamentals & Architecture",
    title: "SMTP: Simple Mail Transfer Protocol",
    subtitle: "The push-based internet standard protocol for transmitting and relaying electronic mail across networks",
    difficulty: "Beginner",
    estimatedMinutes: 14,
    badge: "Email Relay",

    definition: "Simple Mail Transfer Protocol (SMTP) is a push-based application-layer protocol used for transmitting outgoing email messages from client mail agents to mail servers, and for relaying messages between intermediate mail transfer agents (MTAs) across the Internet.",

    whyItMatters: "SMTP is the backbone of all global email dispatch. It handles transactional account verification emails, password resets, notifications, and enterprise communications. Understanding why SMTP is exclusively a 'push' protocol explains why receiving email requires completely different protocols (POP3/IMAP).",

    explanation: [
      {
        heading: "Beginner Explanation: The Outgoing Postal Drop Box",
        content: "Think of SMTP like a blue public postal mailbox. You drop your letter into the slot—that is a 'push' action. A postal truck collects the letters and transports them between distribution hubs across the country.\n\nHowever, you cannot walk up to that public drop box to read your incoming mail! To receive your mail, you need a personal home mailbox with a key (which is what POP3 and IMAP provide)."
      },
      {
        heading: "Technical Architecture: MTAs and MX DNS Records",
        content: "SMTP operates over TCP connections:\n- Port 25: Server-to-server relaying across the public internet.\n- Port 587: Client-to-server submission with mandatory STARTTLS encryption and authentication.\n- Port 465: SMTPS (Implicit TLS).\n\nWhen a sender dispatches an email to `bob@outlook.com`, the sender's SMTP server queries DNS for the MX (Mail Exchange) record of `outlook.com`. Once the IP is resolved, an SMTP handshake occurs using plain-text ASCII commands:\n`HELO / EHLO` -> `MAIL FROM` -> `RCPT TO` -> `DATA` -> `.` -> `QUIT`."
      },
      {
        heading: "Why SMTP Does Not Handle Email Retrieval",
        content: "SMTP was designed when computers remained permanently connected with fixed IP addresses. In modern computing, client smartphones and laptops go offline, change Wi-Fi networks, or power down. An outgoing SMTP server cannot connect into an offline smartphone to deliver a message; it can only deliver to the recipient's always-on mail server."
      }
    ],

    howItWorks: [
      { step: 1, title: "Client Message Submission", subtitle: "Port 587", description: "Sender client connects to its configured outgoing SMTP relay and authenticates." },
      { step: 2, title: "DNS MX Record Lookup", subtitle: "Routing", description: "Sender's SMTP server queries DNS for the Mail Exchange (MX) records of the recipient's domain." },
      { step: 3, title: "Server-to-Server Relay", subtitle: "Port 25", description: "Sender MTA establishes TCP socket with recipient MTA and transmits envelope commands." },
      { step: 4, title: "Spool & Local Storage", subtitle: "Mailbox Agent", description: "Recipient mail server verifies spam/DKIM signatures and writes the message to the user's mailbox spool." }
    ],

    simulationType: "smtp-flow",

    practicalExample: {
      scenario: "Raw SMTP Telnet Conversation",
      description: "A manual SMTP wire exchange transmitting a plain-text email message to a mail server.",
      records: [
        { type: "C -> S", host: "EHLO mail.example.com", value: "Handshake", ttl: "Greeting", purpose: "Identifies sender server and queries extensions" },
        { type: "C -> S", host: "MAIL FROM:<alice@ex.com>", value: "Envelope Sender", ttl: "Routing", purpose: "Specifies return path for bounce notifications" },
        { type: "C -> S", host: "RCPT TO:<bob@ex.com>", value: "Envelope Recipient", ttl: "Destination", purpose: "Identifies target mailbox destination" },
        { type: "C -> S", host: "DATA", value: "Message Body", ttl: "Payload", purpose: "Transmits headers, MIME parts, terminated by <CRLF>.<CRLF>" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Believing users retrieve incoming emails using SMTP",
        reality: "SMTP is strictly a PUSH protocol. It is used exclusively to send and relay email. Incoming emails must be retrieved using PULL protocols like POP3 or IMAP."
      },
      {
        misconception: "Assuming email is inherently encrypted by default in original SMTP",
        reality: "The original 1982 SMTP specification (RFC 821) was unencrypted plaintext. Modern SMTP relies on STARTTLS to opportunistically upgrade the TCP socket to TLS encryption."
      }
    ],

    relatedTopics: [
      { id: "pop3-protocol", title: "POP3 Protocol", unitId: "unit-1" },
      { id: "imap-protocol", title: "IMAP Protocol", unitId: "unit-1" },
      { id: "mime-types", title: "MIME Types", unitId: "unit-1" }
    ],

    challenge: {
      id: "challenge-smtp-01",
      title: "Diagnose an Outgoing Mail Delivery Failure",
      difficulty: "Beginner",
      badge: "SMTP Diagnostic",
      description: "An application server attempts to send password reset emails to users, but all deliveries fail with the error: '550 5.1.1 User unknown / Relay access denied'.",
      task: "What does this SMTP response code signify?",
      options: [
        { id: "opt-1", text: "The application server's hard drive is out of memory.", correct: false, reason: "550 is a protocol-level rejection from the recipient mail server." },
        { id: "opt-2", text: "The recipient mail server rejected the message because the target mailbox does not exist or the server refused unauthenticated relaying.", correct: true, reason: "Correct! SMTP code 550 indicates a permanent mailbox delivery failure or unauthorized relay attempt." },
        { id: "opt-3", text: "The DNS server for the root zone was offline.", correct: false, reason: "If DNS failed, no SMTP connection to the recipient server could have been established." }
      ],
      hint: "Remember the 5xx family in SMTP indicates permanent protocol failure."
    },

    quiz: [
      {
        id: "smtp-q1",
        question: "Why is SMTP termed a 'push' protocol rather than a 'pull' protocol?",
        options: [
          "Because it requires users to pull email from the server.",
          "Because the sender initiates the connection to push messages forward to the recipient server.",
          "Because it only works over wireless 5G connections.",
          "Because it forces the browser to reload."
        ],
        correctIndex: 1,
        explanation: "SMTP is a push protocol because communication is initiated by the sending system pushing data outward toward the destination server."
      },
      {
        id: "smtp-q2",
        question: "Which DNS record type must an SMTP server query to locate the mail server for a recipient domain?",
        options: ["A Record", "MX Record", "CNAME Record", "PTR Record"],
        correctIndex: 1,
        explanation: "MX (Mail Exchange) records specify the mail servers responsible for accepting incoming emails on behalf of a domain."
      }
    ]
  },

  // ==========================================
  // TOPIC 6: POP3 PROTOCOL
  // ==========================================
  "pop3-protocol": {
    id: "pop3-protocol",
    unitId: "unit-1",
    unitNumber: 1,
    unitTitle: "Unit 1: Web Fundamentals & Architecture",
    title: "POP3: Post Office Protocol",
    subtitle: "The classic client-server mailbox retrieval protocol utilizing a local download-and-delete paradigm",
    difficulty: "Beginner",
    estimatedMinutes: 12,
    badge: "Mail Retrieval",

    definition: "Post Office Protocol version 3 (POP3) is a simple, application-layer internet standard protocol used by local email clients to retrieve messages from a remote mail server over a TCP/IP connection, typically downloading messages onto the client device and deleting them from the server.",

    whyItMatters: "POP3 was created in the 1980s when personal computers connected intermittently via dial-up modems and server storage was expensive. Understanding POP3's architectural model explains why it is ill-suited for the modern multi-device era (phone, laptop, tablet).",

    explanation: [
      {
        heading: "Beginner Explanation: The Physical Post Office Box",
        content: "Imagine renting a physical mailbox at your local post office. Once a week, you walk in, empty all the letters into your backpack, and take them home. The post office mailbox is now completely empty.\n\nIf you want to read those letters later, you can ONLY read them from your home backpack. If you are at work and check the post office box, nothing is there. This is how POP3 works."
      },
      {
        heading: "The POP3 Session Lifecycle",
        content: "POP3 operates over port 110 (or port 995 with SSL/TLS). A session follows three sequential states:\n1. AUTHORIZATION: Client sends `USER <username>` and `PASS <password>`. Server verifies credentials.\n2. TRANSACTION: Client queries mailbox status (`STAT`), lists message sizes (`LIST`), and downloads messages one by one (`RETR <msg_id>`). The client issues `DELE <msg_id>` for downloaded messages.\n3. UPDATE: The client emits `QUIT`. Only upon receiving `QUIT` does the server permanently purge the marked messages from disk."
      },
      {
        heading: "Advantages and Major Limitations",
        content: "Advantages:\n- Low server storage requirements (emails are offloaded to user disks).\n- Emails can be read completely offline once downloaded.\n\nLimitations:\n- Zero synchronization across multiple devices: reading on a phone leaves no record on a laptop.\n- No remote folder management (Sent, Drafts, Trash are stored only locally)."
      }
    ],

    howItWorks: [
      { step: 1, title: "Client Connection", subtitle: "Port 110 / 995", description: "Mail client connects to mail server socket and authenticates." },
      { step: 2, title: "Stat & List Queries", subtitle: "Transaction", description: "Client queries total count and byte sizes of pending unread messages." },
      { step: 3, title: "Message Download (RETR)", subtitle: "Data Transfer", description: "Client reads full raw email bodies and writes them to local storage." },
      { step: 4, title: "Server Deletion (DELE)", subtitle: "Cleanup", description: "Standard POP3 marks downloaded messages for deletion from the remote server." },
      { step: 5, title: "Session Termination (QUIT)", subtitle: "Update Phase", description: "Server permanently purges marked messages and releases mailbox lock." }
    ],

    simulationType: "pop3-flow",

    practicalExample: {
      scenario: "POP3 Commands in Action",
      description: "The verbatim sequence of plain ASCII commands exchanged during a POP3 retrieval session.",
      records: [
        { type: "C -> S", host: "STAT", value: "+OK 2 3200", ttl: "Query", purpose: "Returns count (2 messages) and total size (3200 octets)" },
        { type: "C -> S", host: "RETR 1", value: "+OK 1500 octets", ttl: "Fetch", purpose: "Downloads full message #1 to client device" },
        { type: "C -> S", host: "DELE 1", value: "+OK message 1 marked", ttl: "Delete", purpose: "Flags message for deletion on server" },
        { type: "C -> S", host: "QUIT", value: "+OK POP3 server signing off", ttl: "Commit", purpose: "Executes actual deletion and closes session" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Believing POP3 supports server-side custom folders",
        reality: "POP3 has no concept of folders. It only recognizes a single flat inbox spool. Sent messages and custom organizational folders exist strictly on the user's local hard drive."
      },
      {
        misconception: "Thinking POP3 sends outgoing email",
        reality: "POP3 cannot send emails. It is strictly a retrieval protocol. Sending is handled by SMTP."
      }
    ],

    relatedTopics: [
      { id: "smtp-protocol", title: "SMTP Protocol", unitId: "unit-1" },
      { id: "imap-protocol", title: "IMAP Protocol", unitId: "unit-1" },
      { id: "pop3-vs-imap", title: "POP3 vs IMAP", unitId: "unit-1" }
    ],

    challenge: {
      id: "challenge-pop3-01",
      title: "Identify the Cause of Missing Multi-Device Emails",
      difficulty: "Beginner",
      badge: "POP3 Mechanics",
      description: "An employee configures POP3 on their new smartphone. After opening their inbox on the phone, they return to their desktop computer and find that all recent emails have disappeared from their desktop.",
      task: "What is the architectural explanation?",
      options: [
        { id: "opt-1", text: "The smartphone infected the desktop computer with a virus.", correct: false, reason: "This is standard, expected protocol behavior, not malware." },
        { id: "opt-2", text: "POP3 on the phone downloaded the emails and issued the DELE command, permanently removing them from the server before the desktop could fetch them.", correct: true, reason: "Correct! POP3 defaults to downloading and deleting from the central server, leaving other devices with nothing to download." },
        { id: "opt-3", text: "The desktop computer's SMTP port was blocked by a firewall.", correct: false, reason: "SMTP is for sending, not fetching emails." }
      ],
      hint: "Remember the core 'download-and-delete' transaction phase of POP3."
    },

    quiz: [
      {
        id: "pop3-q1",
        question: "When are messages marked with the DELE command actually purged from the POP3 server?",
        options: [
          "Immediately when the DELE command is sent.",
          "When the client sends the QUIT command during the Update phase.",
          "After 30 days automatically.",
          "Never; POP3 cannot delete messages."
        ],
        correctIndex: 1,
        explanation: "In POP3, messages are only marked for deletion during the Transaction phase. They are permanently purged when the QUIT command commits the Update phase."
      },
      {
        id: "pop3-q2",
        question: "What is the standard TCP port for secure POP3 over SSL/TLS (POP3S)?",
        options: ["25", "80", "110", "995"],
        correctIndex: 3,
        explanation: "Port 110 is unencrypted plaintext POP3; Port 995 is secure POP3S over SSL/TLS."
      }
    ]
  },

  // ==========================================
  // TOPIC 7: IMAP PROTOCOL
  // ==========================================
  "imap-protocol": {
    id: "imap-protocol",
    unitId: "unit-1",
    unitNumber: 1,
    unitTitle: "Unit 1: Web Fundamentals & Architecture",
    title: "IMAP: Internet Message Access Protocol",
    subtitle: "Modern server-centric email management featuring real-time multi-device synchronization and remote folder hierarchy",
    difficulty: "Beginner",
    estimatedMinutes: 15,
    badge: "Cloud Synchronization",

    definition: "Internet Message Access Protocol (IMAP) is an advanced application-layer protocol that enables email clients to access, organize, and manipulate messages stored centrally on a remote mail server as if they were stored locally, maintaining bidirectional synchronization across all client devices.",

    whyItMatters: "Nearly all modern email clients (Gmail, Apple Mail, Microsoft Outlook) rely on IMAP or proprietary equivalents. Because modern users access the same inbox from phones, laptops, and tablets, IMAP's server-centric model is indispensable for maintaining consistent state.",

    explanation: [
      {
        heading: "Beginner Explanation: The Cloud Document",
        content: "Imagine working on a Google Doc. When you edit a paragraph on your laptop, and someone looks at the same document on a phone, they see the update immediately. The document lives centrally in the cloud—the phone and laptop are just windows looking at the same reality.\n\nIMAP works the same way: your emails, read/unread flags, drafts, and folders remain on the central server. Deleting an email on your phone deletes it from the server and instantly vanishes from your laptop."
      },
      {
        heading: "Technical Mechanics: Two-Way Synchronization",
        content: "IMAP operates on port 143 (or port 993 with SSL/TLS). Key architectural capabilities include:\n- State Flags: Tracks metadata flags per message centrally (`\\Seen`, `\\Answered`, `\\Flagged`, `\\Draft`).\n- Remote Folders: Users can create, rename, and nest mailbox folders on the server.\n- Partial Header Fetching: A client can download only email subject lines and headers without downloading heavy multi-megabyte attachments until the user clicks to view them.\n- IMAP IDLE (Push Notifications): The client keeps the TCP connection alive so the server can push new incoming emails immediately without client polling."
      },
      {
        heading: "Tradeoffs of IMAP",
        content: "Advantages:\n- Flawless multi-device synchronization.\n- Message safety: if your laptop is destroyed, zero emails are lost.\n- Bandwidth efficient on mobile devices.\n\nDisadvantages:\n- Requires significant server storage and high compute power for mail providers.\n- Mailbox quotas can be reached if users do not archive old mail."
      }
    ],

    howItWorks: [
      { step: 1, title: "Persistent Connection", subtitle: "Port 993", description: "Client establishes secure TLS connection and authenticates." },
      { step: 2, title: "Folder & Flag Sync", subtitle: "State Check", description: "Client syncs folder tree and queries flags (e.g. which messages are marked \\Seen)." },
      { step: 3, title: "Selective Header Retrieval", subtitle: "Bandwidth Optimization", description: "Client downloads only headers for visible messages in current view." },
      { step: 4, title: "IMAP IDLE Push", subtitle: "Real-Time", description: "Client issues IDLE; server immediately notifies client when new email arrives." },
      { step: 5, title: "Bidirectional State Mutation", subtitle: "Sync", description: "Actions taken on client (read, archive, delete) mutate server state immediately." }
    ],

    simulationType: "imap-flow",

    practicalExample: {
      scenario: "Marking an Email Read on Mobile",
      description: "When you tap an unread email on your smartphone, IMAP sends `A001 STORE 42 +FLAGS (\\Seen)`. The server updates the record and sends an unsolicited sync notice to your open desktop client.",
      records: [
        { type: "C -> S", host: "A001 LOGIN bob secretPass", value: "Auth", ttl: "Session", purpose: "Tag-based authenticated session setup" },
        { type: "C -> S", host: "A002 SELECT INBOX", value: "Folder Select", ttl: "Navigation", purpose: "Opens remote server INBOX folder" },
        { type: "C -> S", host: "A003 FETCH 1:5 (FLAGS RFC822.SIZE)", value: "Header Fetch", ttl: "Metadata", purpose: "Retrieves status without downloading full bodies" },
        { type: "C -> S", host: "A004 STORE 2 +FLAGS (\\Seen)", value: "Flag Update", ttl: "Sync", purpose: "Persists read status centrally across all devices" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Believing IMAP deletes emails when you close your mail app",
        reality: "Closing your client disconnects the socket, but messages remain safely stored on the IMAP server forever until explicitly deleted."
      },
      {
        misconception: "Assuming IMAP is used to send outgoing emails",
        reality: "Just like POP3, IMAP is strictly an access and retrieval protocol. Outgoing emails are sent using SMTP."
      }
    ],

    relatedTopics: [
      { id: "pop3-protocol", title: "POP3 Protocol", unitId: "unit-1" },
      { id: "pop3-vs-imap", title: "POP3 vs IMAP", unitId: "unit-1" },
      { id: "smtp-protocol", title: "SMTP Protocol", unitId: "unit-1" }
    ],

    challenge: {
      id: "challenge-imap-01",
      title: "Evaluate Mobile Data Bandwidth Optimization",
      difficulty: "Beginner",
      badge: "IMAP Features",
      description: "A mobile user on a metered cellular connection opens an email with a 50 MB video attachment using an IMAP client.",
      task: "Why does opening the email list not immediately consume 50 MB of data?",
      options: [
        { id: "opt-1", text: "IMAP compresses all video files to 0 bytes.", correct: false, reason: "IMAP does not recompress binary media attachments." },
        { id: "opt-2", text: "IMAP supports partial fetching, downloading only the message envelope/headers first and leaving the 50 MB attachment on the server until explicitly requested.", correct: true, reason: "Correct! IMAP clients can inspect message structure (BODYSTRUCTURE) and download attachments on demand." },
        { id: "opt-3", text: "POP3 is automatically used for attachments.", correct: false, reason: "POP3 would actually force downloading the entire 50 MB payload immediately." }
      ],
      hint: "Consider IMAP's ability to separate message metadata from heavy attachment payloads."
    },

    quiz: [
      {
        id: "imap-q1",
        question: "Which of the following is a primary advantage of IMAP over POP3?",
        options: [
          "IMAP operates without requiring an internet connection.",
          "IMAP maintains centralized message storage and two-way synchronization across multiple devices.",
          "IMAP replaces the need for web browsers.",
          "IMAP can send outgoing emails without SMTP."
        ],
        correctIndex: 1,
        explanation: "IMAP stores email centrally on the server, synchronizing read/unread states, flags, and folders seamlessly across all user devices."
      },
      {
        id: "imap-q2",
        question: "What is the standard port for secure IMAP over SSL/TLS (IMAPS)?",
        options: ["25", "110", "143", "993"],
        correctIndex: 3,
        explanation: "Port 143 is unencrypted IMAP; Port 993 is secure IMAPS over SSL/TLS."
      }
    ]
  },

  // ==========================================
  // TOPIC 8: POP3 VS IMAP
  // ==========================================
  "pop3-vs-imap": {
    id: "pop3-vs-imap",
    unitId: "unit-1",
    unitNumber: 1,
    unitTitle: "Unit 1: Web Fundamentals & Architecture",
    title: "POP3 vs. IMAP: Multi-Device Synchronization",
    subtitle: "An in-depth architectural comparison between local mailbox downloading and centralized server synchronization",
    difficulty: "Intermediate",
    estimatedMinutes: 14,
    badge: "Protocol Comparison",

    definition: "POP3 and IMAP represent two fundamentally divergent architectural paradigms for mailbox retrieval: POP3 treats the remote server as a temporary holding pen, moving messages to a single local device, whereas IMAP treats the remote server as the perpetual authoritative source of truth, synchronizing state bidirectionally across multiple devices.",

    whyItMatters: "Deciding between POP3 and IMAP governs storage scalability, backup strategies, and multi-device usability. In modern software engineering, understanding these tradeoffs is crucial for configuring email infrastructure and designing offline-first synchronization systems.",

    explanation: [
      {
        heading: "Direct Architectural Comparison",
        content: "Feature Breakdown:\n- Storage Location: POP3 stores primarily on local client disk; IMAP stores on central remote server.\n- Multi-Device Usability: POP3 is poor (causes data divergence and missing messages); IMAP is excellent (all devices stay identical).\n- Read/Flag Status: POP3 is client-only (reading on phone does not affect laptop); IMAP syncs flags centrally.\n- Folder Management: POP3 has only a single flat inbox; IMAP supports complex remote nested folders.\n- Offline Availability: POP3 gives full offline access to all fetched mail; IMAP caches locally but requires server connection for uncached bodies."
      },
      {
        heading: "When Should You Still Use POP3?",
        content: "While IMAP dominates modern personal and corporate email, POP3 is still used in specialized engineering scenarios:\n1. Strict privacy or low-retention requirements where emails must never remain stored in cloud servers.\n2. Inbound email processing microservices that consume messages from a queue, process them, and delete them permanently.\n3. Extreme server storage constraints where mailboxes cannot accommodate gigabytes of legacy archives."
      }
    ],

    howItWorks: [
      { step: 1, title: "Action on Device A", subtitle: "User reads/deletes", description: "User marks email read on their smartphone." },
      { step: 2, title: "POP3 Behavior", subtitle: "Local Isolation", description: "Smartphone updates local database only. Remote server remains untouched." },
      { step: 3, title: "IMAP Behavior", subtitle: "Server Synchronization", description: "Smartphone sends STORE command to server; server updates central flag." },
      { step: 4, title: "Device B Sync", subtitle: "Consistency Check", description: "Laptop opens: in POP3, message is unread (or missing); in IMAP, message is read." }
    ],

    simulationType: "pop3-vs-imap",

    practicalExample: {
      scenario: "Comparison Matrix for IT Systems Engineers",
      description: "Evaluating email protocols for deploying 500 corporate employee workstations.",
      records: [
        { type: "Criteria", host: "Multi-device Access", value: "POP3: Poor | IMAP: Native", ttl: "UX", purpose: "IMAP required for users with phones & laptops" },
        { type: "Criteria", host: "Server Storage Cost", value: "POP3: Very Low | IMAP: High", ttl: "Cost", purpose: "IMAP requires enterprise SAN/cloud storage" },
        { type: "Criteria", host: "Bandwidth Efficiency", value: "POP3: Downloads all | IMAP: On-demand", ttl: "Network", purpose: "IMAP downloads attachments only when clicked" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Assuming 'Leave copy on server' makes POP3 behave like IMAP",
        reality: "Enabling 'Leave copy on server' in POP3 prevents immediate message deletion, but it STILL does NOT synchronize read/unread flags, sent items, or folder movements between devices."
      }
    ],

    relatedTopics: [
      { id: "pop3-protocol", title: "POP3 Protocol", unitId: "unit-1" },
      { id: "imap-protocol", title: "IMAP Protocol", unitId: "unit-1" },
      { id: "smtp-protocol", title: "SMTP Protocol", unitId: "unit-1" }
    ],

    challenge: {
      id: "challenge-pop-imap-01",
      title: "Recommend the Optimal Email Protocol Architecture",
      difficulty: "Intermediate",
      badge: "Architecture Strategy",
      description: "A client company has 200 traveling sales agents who each use an iPhone, iPad, and MacBook to answer customer inquiries. They complain that when they reply to a customer on their phone, the reply does not appear in their laptop's Sent folder.",
      task: "What protocol migration solves this problem?",
      options: [
        { id: "opt-1", text: "Reconfigure all devices from POP3 to IMAP.", correct: true, reason: "Correct! IMAP maintains a centralized server-side Sent folder and synchronizes all outgoing and incoming mail states across all three devices." },
        { id: "opt-2", text: "Switch all clients to SMTP port 25.", correct: false, reason: "SMTP is for sending mail, not organizing or retrieving sent/received mailboxes." },
        { id: "opt-3", text: "Increase the POP3 polling frequency to every 10 seconds.", correct: false, reason: "Polling more frequently cannot fix POP3's fundamental lack of server-side folder synchronization." }
      ],
      hint: "Look for the protocol that centralizes folder management on the remote server."
    },

    quiz: [
      {
        id: "pop-imap-q1",
        question: "If a user reads an email on their phone using POP3, what will their laptop show when opening the same inbox later?",
        options: [
          "The email will show as read.",
          "The email will show as unread (or may be completely missing if deleted by the phone).",
          "The laptop will automatically convert to an IMAP connection.",
          "The email will be permanently encrypted."
        ],
        correctIndex: 1,
        explanation: "POP3 does not synchronize state flags across clients. Reading a message locally on a phone has zero effect on the laptop."
      }
    ]
  },

  // ==========================================
  // TOPIC 9: MIME TYPES
  // ==========================================
  "mime-types": {
    id: "mime-types",
    unitId: "unit-1",
    unitNumber: 1,
    unitTitle: "Unit 1: Web Fundamentals & Architecture",
    title: "MIME: Multipurpose Internet Mail Extensions",
    subtitle: "The universal internet standard for formatting, encoding, and identifying non-ASCII media types across email and HTTP",
    difficulty: "Beginner",
    estimatedMinutes: 12,
    badge: "Media Standard",

    definition: "Multipurpose Internet Mail Extensions (MIME) is an internet standard (RFC 2045-2049) originally created to extend email beyond 7-bit ASCII text, allowing messages to contain audio, video, images, binary attachments, and character sets other than US-ASCII. Today, MIME types (now standardized as Media Types) are universally used across both email and HTTP to identify content formats.",

    whyItMatters: "Without MIME, browsers and email clients would not know whether an incoming stream of binary bytes represents an HTML document, a PNG image, a JSON object, or a PDF. The `Content-Type` header dictates how the browser renders incoming network payloads.",

    explanation: [
      {
        heading: "Beginner Explanation: The Postal Customs Label",
        content: "Imagine receiving a sealed cardboard box in the mail. If there is no label on the box, you don't know if it contains glass, dry ice, soup, or a textbook.\n\nA MIME type is the official customs label stamped on the outside of the box: `type/subtype`. If the label reads `text/html`, the browser opens it as a webpage. If the label reads `application/pdf`, the browser opens a PDF document viewer. If the label reads `audio/mpeg`, it plays audio."
      },
      {
        heading: "MIME Type Structure & Major Families",
        content: "A MIME media type consists of a top-level type and a specific subtype separated by a slash:\n- text/*: Human-readable textual data (e.g. `text/html`, `text/css`, `text/plain`, `text/javascript`).\n- image/*: Photographic and vector graphics (`image/png`, `image/jpeg`, `image/svg+xml`, `image/webp`).\n- audio/*: Audio formats (`audio/mpeg`, `audio/ogg`, `audio/wav`).\n- video/*: Video formats (`video/mp4`, `video/webm`).\n- application/*: Binary or structured application payloads (`application/json`, `application/pdf`, `application/zip`, `application/octet-stream`)."
      },
      {
        heading: "MIME in Email vs. MIME in HTTP",
        content: "In Email: Traditional SMTP only supports 7-bit ASCII characters. MIME uses Base64 encoding to translate 8-bit binary attachments (like JPEGs or PDFs) into printable ASCII characters that can travel safely through SMTP servers without corruption.\n\nIn HTTP: The web server includes the `Content-Type: <mime-type>` header in every HTTP response. Browsers rely on this header—not the file extension—to determine how to parse the incoming byte stream."
      }
    ],

    howItWorks: [
      { step: 1, title: "File Attachment", subtitle: "Client Action", description: "User attaches a binary photo (e.g. diagram.jpg) to an email." },
      { step: 2, title: "Base64 Encoding", subtitle: "MIME Processing", description: "Binary image bytes are converted into 7-bit ASCII characters." },
      { step: 3, title: "Multipart Boundary Construction", subtitle: "Header Setup", description: "MIME inserts unique boundary strings separating text body from attachments." },
      { step: 4, title: "Content-Type Declaration", subtitle: "Media Identification", description: "Headers declare `Content-Type: image/jpeg` and `Content-Disposition: attachment`." },
      { step: 5, title: "Recipient Parsing", subtitle: "Reassembly", description: "Receiving mail client decodes Base64 characters back into the original binary file." }
    ],

    simulationType: "mime-types",

    practicalExample: {
      scenario: "Inspecting HTTP Content-Type Headers",
      description: "How a web server informs the browser how to render different static files.",
      records: [
        { type: "File", host: "/index.html", value: "text/html; charset=utf-8", ttl: "Browser DOM", purpose: "Instructs browser to parse as HTML tree" },
        { type: "File", host: "/style.css", value: "text/css", ttl: "CSSOM", purpose: "Instructs browser to parse as stylesheet rules" },
        { type: "File", host: "/api/data", value: "application/json", ttl: "Data", purpose: "Instructs browser/fetch to parse as JSON object" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Assuming browsers determine file types based on the .html or .png file extension in the URL",
        reality: "Web browsers adhere strictly to the HTTP `Content-Type` header returned by the server, completely ignoring the file extension. If a server sends an HTML file with `Content-Type: text/plain`, the browser will display raw HTML tags as plain text!"
      }
    ],

    relatedTopics: [
      { id: "smtp-protocol", title: "SMTP Protocol", unitId: "unit-1" },
      { id: "http-protocol", title: "HTTP Protocol", unitId: "unit-1" },
      { id: "web-servers", title: "Web Servers", unitId: "unit-1" }
    ],

    challenge: {
      id: "challenge-mime-01",
      title: "Fix the Downloaded HTML Display Bug",
      difficulty: "Beginner",
      badge: "MIME Configuration",
      description: "A developer hosts `about.html` on a custom web server. When visitors navigate to the page, the browser displays raw code: `<h1>About Us</h1><p>Welcome</p>` instead of rendering the formatted page.",
      task: "What web server configuration oversight caused this?",
      options: [
        { id: "opt-1", text: "The visitor forgot to install HTML on their computer.", correct: false, reason: "HTML is parsed natively by all web browsers." },
        { id: "opt-2", text: "The web server emitted `Content-Type: text/plain` instead of `Content-Type: text/html`.", correct: true, reason: "Correct! Browsers obey the MIME type sent by the server. With text/plain, the browser treats tags as raw text." },
        { id: "opt-3", text: "The DNS server cached an expired IP address.", correct: false, reason: "If DNS failed, no content would load at all." }
      ],
      hint: "Remember that browsers use the Content-Type header to decide between rendering HTML or showing plain text."
    },

    quiz: [
      {
        id: "mime-q1",
        question: "Which of the following is the standard MIME media type for JSON data?",
        options: ["text/json", "application/json", "data/json", "binary/json"],
        correctIndex: 1,
        explanation: "The official IANA MIME type for JSON data interchange is `application/json`."
      }
    ]
  },

  // ==========================================
  // TOPIC 10: DNS RESOLUTION
  // ==========================================
  "dns-resolution": {
    id: "dns-resolution",
    unitId: "unit-1",
    unitNumber: 1,
    unitTitle: "Unit 1: Web Fundamentals & Architecture",
    title: "Domain Name System (DNS) & Name Resolution",
    subtitle: "The hierarchical decentralized directory translating human hostnames into routable numeric IP addresses",
    difficulty: "Beginner",
    estimatedMinutes: 18,
    badge: "Core Architecture",

    definition: "The Domain Name System (DNS) is a decentralized hierarchical naming system that translates human-friendly domain names (like webtech.dev or google.com) into numeric IP addresses (like 192.0.2.1 or 2606:4700::6810) required to route network packets across the global internet.",

    whyItMatters: "Without DNS, internet users would have to memorize 32-bit IPv4 numbers (or 128-bit hexadecimal IPv6 addresses) for every website. DNS operates invisibly in milliseconds prior to every TCP handshake, and understanding DNS caching, TTLs, and propagation is vital for configuring custom domains, CDNs, load balancers, and SSL/TLS certificates.",

    explanation: [
      {
        heading: "Beginner Explanation: The Internet's Phonebook",
        content: "Imagine your smartphone contact list. You don't memorize your friend's 10-digit phone number—you simply tap 'Alice'. Your phone looks up 'Alice' and dials the phone number.\n\nDNS is the phonebook of the global internet. You type `github.com` into your browser, DNS looks up the domain name in an inverted tree directory, and connects your browser to the corresponding server IP address."
      },
      {
        heading: "The Hierarchical Tree Structure",
        content: "DNS is not stored on one computer—that would create an impossible bottleneck and single point of failure. It is organized into a hierarchy:\n1. Root Zone (.): Managed by ICANN and mirrored across 13 root IP clusters worldwide.\n2. Top-Level Domain (TLD) Nameservers: Dedicated registries managing all domains ending in extensions like .com, .org, .dev (e.g. Verisign for .com).\n3. Authoritative Nameservers: The definitive source of truth holding the actual DNS records (A, AAAA, CNAME, MX) configured by the domain owner (e.g., Cloudflare, Route 53, Namecheap)."
      },
      {
        heading: "Recursive Resolvers and DNS Caching (TTL)",
        content: "Your computer does not query the root servers directly. Instead, your operating system asks a Recursive Resolver (run by your ISP or public services like Cloudflare 1.1.1.1 or Google 8.8.8.8). The resolver queries the hierarchy on your behalf. To prevent global bottlenecks, every DNS record includes a Time-to-Live (TTL) in seconds, enabling aggressive caching at every layer."
      }
    ],

    howItWorks: [
      { step: 1, title: "Browser & OS Cache Lookup", subtitle: "Local Cache", description: "Browser checks internal cache; if missing, calls OS resolver (getaddrinfo)." },
      { step: 2, title: "Query to Recursive Resolver", subtitle: "ISP / 1.1.1.1", description: "Resolver accepts query and coordinates hierarchical lookup." },
      { step: 3, title: "Query to Root Nameserver (.)", subtitle: "Root Zone", description: "Root nameserver responds with the IP address of the appropriate TLD nameserver." },
      { step: 4, title: "Query to TLD Nameserver", subtitle: "TLD Registry", description: "TLD server (e.g. .com) responds with the Authoritative nameservers for the domain." },
      { step: 5, title: "Query to Authoritative Server", subtitle: "Zone File", description: "Authoritative server returns the final A/AAAA record IP with its TTL." },
      { step: 6, title: "Client Delivery & Caching", subtitle: "Resolution Complete", description: "Resolver caches the answer and returns IP to browser to initiate TCP socket." }
    ],

    simulationType: "dns-flow",

    practicalExample: {
      scenario: "Configuring a Custom Domain for a Web App",
      description: "Setting up DNS record types for a modern cloud-hosted web application.",
      records: [
        { type: "A", host: "@", value: "76.76.21.21", ttl: "3600s", purpose: "Points apex root domain to IPv4 server address" },
        { type: "AAAA", host: "@", value: "2606:4700::6810", ttl: "3600s", purpose: "Points apex root domain to IPv6 server address" },
        { type: "CNAME", host: "www", value: "example.com", ttl: "3600s", purpose: "Aliases www.example.com to root domain" },
        { type: "MX", host: "@", value: "mail.example.com", ttl: "3600s", purpose: "Designates mail servers handling email" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Putting a CNAME record on the root domain (@ / apex domain)",
        reality: "RFC 1034 forbids CNAME on the root apex domain because a CNAME overrides all other record types, which prevents MX (email) and NS records from functioning. Use ALIAS / ANAME or direct A/AAAA records instead."
      },
      {
        misconception: "Expecting DNS changes to reflect immediately regardless of TTL",
        reality: "If an old record had a TTL of 86400 (24 hours), downstream recursive resolvers and ISPs are legally allowed to serve the cached old IP for 24 hours. Lower your TTL to 300 seconds 24 hours before a planned migration."
      }
    ],

    relatedTopics: [
      { id: "http-protocol", title: "HTTP Protocol", unitId: "unit-1" },
      { id: "web-browsers", title: "Web Browsers", unitId: "unit-1" }
    ],

    challenge: {
      id: "challenge-dns-02",
      title: "Identify the Missing IPv6 Record",
      difficulty: "Beginner",
      badge: "DNS Records",
      description: "A customer with an IPv6-only cellular network cannot access `app.dev`. The DNS dashboard has an active 'A' record pointing to 198.51.100.1, but no other address records.",
      task: "Which record type must be added to enable IPv6 connectivity?",
      options: [
        { id: "opt-1", text: "A second 'A' record with the IPv6 address.", correct: false, reason: "'A' records strictly store 32-bit IPv4 addresses." },
        { id: "opt-2", text: "An 'AAAA' (quad-A) record containing the 128-bit IPv6 address.", correct: true, reason: "Correct! 'AAAA' records map domain hostnames to 128-bit IPv6 addresses." },
        { id: "opt-3", text: "A TXT record containing 'ipv6=enabled'.", correct: false, reason: "TXT records are for verification text, not IP address routing." }
      ],
      hint: "Remember the record named after four times the width of an 'A' record."
    },

    quiz: [
      {
        id: "dns-q1",
        question: "Which DNS server is the FIRST server queried outside of the client's local system during recursive resolution?",
        options: [
          "Root Nameserver (.)",
          "Recursive Resolver (ISP or 1.1.1.1)",
          "TLD Nameserver (.com)",
          "Authoritative Nameserver"
        ],
        correctIndex: 1,
        explanation: "The client operating system issues its recursive request to the Recursive Resolver (ISP or configured DNS like 1.1.1.1), which then orchestrates the queries to the Root, TLD, and Authoritative servers."
      }
    ]
  },

  // ==========================================
  // TOPIC 11: WEB BROWSERS
  // ==========================================
  "web-browsers": {
    id: "web-browsers",
    unitId: "unit-1",
    unitNumber: 1,
    unitTitle: "Unit 1: Web Fundamentals & Architecture",
    title: "Web Browsers & The Rendering Pipeline",
    subtitle: "How modern browser engines fetch network bytes, build the DOM and CSSOM, execute JavaScript, and paint interactive pixels",
    difficulty: "Intermediate",
    estimatedMinutes: 18,
    badge: "Client Engine",

    definition: "A Web Browser is a complex software application that retrieves, traverses, and renders information resources on the World Wide Web. Its core consists of a rendering engine (such as Blink, WebKit, or Gecko) and a JavaScript engine (such as V8 or SpiderMonkey) executing the Critical Rendering Path.",

    whyItMatters: "Web browsers are the primary runtime environment for front-end web engineering. Understanding browser rendering mechanics—from tokenization and CSS cascade calculation to reflow layout and GPU compositing—is the foundation of web performance optimization and Core Web Vitals.",

    explanation: [
      {
        heading: "Beginner Explanation: The Master Translator & Stage Director",
        content: "A web browser is like a theatrical director translating a script into a live Broadway performance:\n1. The script arrives as written words (HTML).\n2. The costume and stage instructions arrive (CSS).\n3. The actors' cues and special effects instructions arrive (JavaScript).\n4. The director constructs the stage (DOM tree), styles the actors (CSSOM), positions them on stage (Layout / Reflow), and turns on the spotlights to show the audience the show (Paint & Composite)."
      },
      {
        heading: "Internal Architecture of a Modern Browser",
        content: "A modern multi-process browser consists of:\n- Browser Process: Controls address bar, bookmarks, tabs, and network I/O.\n- Renderer Process: Runs inside a sandbox per tab; executes rendering engine and JS.\n- GPU Process: Handles hardware acceleration, 3D graphics, and composite layer rasterization.\n- Plugin / Utility Processes: Handles extensions and multimedia decoding."
      },
      {
        heading: "The Critical Rendering Path (CRP)",
        content: "The sequence of operations browsers perform to convert code into pixels:\n1. Bytes -> Characters -> Tokens -> Nodes -> DOM (Document Object Model).\n2. Stylesheet Bytes -> Tokens -> CSSOM (CSS Object Model).\n3. DOM + CSSOM -> Render Tree (only visible nodes).\n4. Layout (Reflow): Computing geometry, x/y coordinates, widths, and heights.\n5. Paint: Filling pixels with colors, borders, text, and shadows.\n6. Compositing: Assembling GPU layers into final screen frames at 60+ FPS."
      }
    ],

    howItWorks: [
      { step: 1, title: "URL Parsing & Network Request", subtitle: "Network Process", description: "Browser resolves DNS, opens TLS socket, and downloads HTML byte stream." },
      { step: 2, title: "HTML Tokenization & DOM Building", subtitle: "Renderer Process", description: "Parser builds DOM node hierarchy while speculative pre-parser fetches CSS/JS." },
      { step: 3, title: "CSSOM Construction", subtitle: "Style Recalculation", description: "Browser parses CSS rules and computes cascade inheritance per DOM node." },
      { step: 4, title: "Render Tree & Layout", subtitle: "Reflow", description: "Calculates exact box model dimensions and coordinate geometry on screen." },
      { step: 5, title: "Paint & GPU Compositing", subtitle: "Rasterization", description: "Draws pixels to memory layers and GPU composites them to display." }
    ],

    simulationType: "browser-pipeline",

    practicalExample: {
      scenario: "Render-Blocking CSS Bottleneck",
      description: "Why `<link rel='stylesheet'>` tags in the `<head>` block rendering until downloaded.",
      records: [
        { type: "Pipeline Step", host: "CSSOM Block", value: "Render Tree Blocked", ttl: "CRP", purpose: "Prevents FOUC (Flash of Unstyled Content)" },
        { type: "Optimization", host: "async / defer", value: "Non-blocking JS", ttl: "Perf", purpose: "Allows HTML parser to continue without waiting for script download" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Believing nodes with 'display: none' exist in the Render Tree",
        reality: "Elements with `display: none` exist in the DOM tree, but are completely omitted from the Render Tree because they take up zero visual space on screen. However, `visibility: hidden` DOES exist in the Render Tree because it occupies layout space."
      },
      {
        misconception: "Assuming JavaScript runs on a separate thread from DOM rendering",
        reality: "By default, JavaScript execution and layout rendering share the SAME single main thread. Long-running JavaScript loops block the main thread, causing page freezing and laggy input response (poor INP)."
      }
    ],

    relatedTopics: [
      { id: "html-foundations", title: "HTML Foundations", unitId: "unit-1" },
      { id: "web-servers", title: "Web Servers", unitId: "unit-1" }
    ],

    challenge: {
      id: "challenge-browser-01",
      title: "Identify the Render-Blocking Sub-resource",
      difficulty: "Intermediate",
      badge: "Browser Performance",
      description: "A webpage contains a heavy synchronous `<script src='analytics.js'></script>` in the `<head>`. Users see a blank white screen for 3 seconds.",
      task: "Why does the synchronous script block the initial page paint?",
      options: [
        { id: "opt-1", text: "The script crashes the browser's operating system.", correct: false, reason: "The browser is waiting normally, not crashing." },
        { id: "opt-2", text: "HTML parsing stops completely when encountering a synchronous script because the script might call `document.write()` or modify the DOM, halting DOM tree construction.", correct: true, reason: "Correct! Synchronous scripts block HTML tokenization. Adding `defer` or `async` unblocks the parser." },
        { id: "opt-3", text: "JavaScript requires CSS to download first.", correct: false, reason: "JS execution depends on CSSOM, but the blockage is parser halting." }
      ],
      hint: "Remember that the HTML parser must pause for synchronous scripts because scripts can alter the DOM."
    },

    quiz: [
      {
        id: "browser-q1",
        question: "What is the difference between the DOM tree and the Render Tree in a web browser?",
        options: [
          "The DOM tree contains only images; the Render Tree contains text.",
          "The DOM tree represents all HTML elements; the Render Tree represents only elements that are visually rendered on screen (excluding <head> and display:none).",
          "There is no difference; they are the exact same data structure.",
          "The Render Tree is built by the web server before transmission."
        ],
        correctIndex: 1,
        explanation: "The Render Tree is the visual intersection of DOM and CSSOM. Nodes like `<head>`, `<script>`, and elements with `display: none` are excluded from the Render Tree."
      }
    ]
  },

  // ==========================================
  // TOPIC 12: WEB SERVERS
  // ==========================================
  "web-servers": {
    id: "web-servers",
    unitId: "unit-1",
    unitNumber: 1,
    unitTitle: "Unit 1: Web Fundamentals & Architecture",
    title: "Web Servers & Resource Dispatching",
    subtitle: "The server-side software engines that listen for HTTP connections, process requests, and serve static and dynamic content",
    difficulty: "Intermediate",
    estimatedMinutes: 16,
    badge: "Server Infrastructure",

    definition: "A Web Server is server software (such as Nginx, Apache HTTP Server, Microsoft IIS, or Node.js) and its underlying computer hardware that accepts incoming HTTP/HTTPS requests from clients, processes route handlers, and returns responses containing requested static files or dynamically generated data payloads.",

    whyItMatters: "All web applications require web servers to accept incoming traffic, enforce TLS encryption, route requests, manage reverse proxies, and serve static assets. Understanding the difference between static file serving and dynamic server-side processing is crucial for full-stack architecture.",

    explanation: [
      {
        heading: "Beginner Explanation: The Restaurant Kitchen and Waitstaff",
        content: "Imagine a restaurant:\n- The Web Browser is the customer sitting at a table.\n- The Web Server is the waitstaff and kitchen.\nWhen you ask for a bottle of water (static file), the server simply takes it off the shelf and hands it to you immediately.\nWhen you ask for a custom pasta dish (dynamic response), the kitchen must run recipes, chop vegetables, query the pantry (database), and cook a custom meal just for you."
      },
      {
        heading: "Static Files vs. Dynamic Web Responses",
        content: "Web servers handle two primary categories of requests:\n1. Static File Serving: The requested path directly maps to a physical file on the server's disk (e.g., `/images/logo.png` or `/assets/style.css`). The server reads bytes from disk and streams them back with appropriate MIME headers. Nginx excels at this, serving thousands of files per second with minimal RAM.\n2. Dynamic Response Generation: The requested URL does not exist as a file on disk. Instead, the server passes the request to an application runtime (Node.js, Python FastAPI, PHP, Java Spring). The code queries databases, runs business logic, and synthesizes an HTML page or JSON payload on the fly."
      },
      {
        heading: "Reverse Proxies and Load Balancers",
        content: "In production web architectures, a high-performance web server like Nginx often sits in front of internal microservices as a Reverse Proxy. It handles SSL/TLS termination, gzip/brotli compression, rate limiting, and distributes incoming requests across multiple application instances (load balancing)."
      }
    ],

    howItWorks: [
      { step: 1, title: "Socket Listening", subtitle: "Ports 80 & 443", description: "Web server daemon listens continuously for incoming TCP connection requests." },
      { step: 2, title: "HTTP Request Parsing", subtitle: "Header Analysis", description: "Server parses the HTTP request line, Host header, and requested URI." },
      { step: 3, title: "Virtual Host & Route Matching", subtitle: "Configuration", description: "Server matches the domain and path to a DocumentRoot or reverse proxy backend." },
      { step: 4, title: "Resource Execution or Disk I/O", subtitle: "Processing", description: "Server reads static bytes from disk or executes server-side application logic." },
      { step: 5, title: "HTTP Response Packaging", subtitle: "Output", description: "Constructs status line (200 OK), sets MIME Content-Type, and streams body." }
    ],

    simulationType: "web-server",

    practicalExample: {
      scenario: "Nginx Server Block Configuration",
      description: "A standard Nginx configuration block serving static assets with fallback routing.",
      records: [
        { type: "Directive", host: "listen 443 ssl", value: "HTTPS Port", ttl: "Config", purpose: "Binds server to encrypted HTTPS port" },
        { type: "Directive", host: "root /var/www/html", value: "DocumentRoot", ttl: "Disk", purpose: "Base folder containing static website files" },
        { type: "Directive", host: "try_files $uri /index.html", value: "SPA Fallback", ttl: "Routing", purpose: "Enables single-page client-side router navigation" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Thinking web servers only serve HTML files",
        reality: "Web servers serve any digital resource identified by a URL: CSS, JS, JSON APIs, video streams, WebAssembly binaries, and web fonts."
      },
      {
        misconception: "Believing dynamic responses are pre-stored on the server's hard drive",
        reality: "Dynamic responses are constructed in computer memory at the exact millisecond the request arrives, often assembling data from database queries."
      }
    ],

    relatedTopics: [
      { id: "world-wide-web", title: "World Wide Web", unitId: "unit-1" },
      { id: "http-protocol", title: "HTTP Protocol", unitId: "unit-1" },
      { id: "web-browsers", title: "Web Browsers", unitId: "unit-1" }
    ],

    challenge: {
      id: "challenge-server-01",
      title: "Diagnose an Nginx 502 Bad Gateway Error",
      difficulty: "Intermediate",
      badge: "Server Troubleshooting",
      description: "An Nginx web server configured as a reverse proxy for a Node.js backend returns '502 Bad Gateway' to all incoming visitors.",
      task: "What does this error tell the systems engineer?",
      options: [
        { id: "opt-1", text: "The visitor's computer has an invalid IP address.", correct: false, reason: "5xx errors are server-side problems, not client IP issues." },
        { id: "opt-2", text: "Nginx received the request successfully, but the upstream application process (Node.js) is crashed or not running on its designated internal port.", correct: true, reason: "Correct! 502 Bad Gateway occurs when a reverse proxy server attempts to connect to an upstream backend and receives a connection refused or timeout." },
        { id: "opt-3", text: "The DNS server for the domain was deleted.", correct: false, reason: "If DNS failed, the visitor could never connect to Nginx to see a 502 error." }
      ],
      hint: "Think about the relationship between a reverse proxy (front door) and the upstream application service (kitchen)."
    },

    quiz: [
      {
        id: "server-q1",
        question: "What is a 'Reverse Proxy' in web server architecture?",
        options: [
          "A client browser that downloads web pages in reverse order.",
          "A server that sits in front of web applications and forwards client requests to them, handling SSL termination and load balancing.",
          "A virus that flips HTML text backwards.",
          "A database that stores deleted emails."
        ],
        correctIndex: 1,
        explanation: "A reverse proxy acts as an intermediary gateway, intercepting client requests and forwarding them to internal backend services."
      }
    ]
  },

  // ==========================================
  // TOPIC 13: CAPSTONE: FOLLOW A WEB REQUEST
  // ==========================================
  "follow-a-web-request": {
    id: "follow-a-web-request",
    unitId: "unit-1",
    unitNumber: 1,
    unitTitle: "Unit 1: Web Fundamentals & Architecture",
    title: "Capstone: Follow a Web Request (End-to-End)",
    subtitle: "The complete journey of entering a URL: from keyboard interrupt and DNS lookup to TCP/TLS, HTTP wire exchange, and browser DOM rendering",
    difficulty: "Intermediate",
    estimatedMinutes: 25,
    badge: "Unit 1 Grand Capstone",

    definition: "Following a web request is the quintessential full-stack engineering mental model. It synthesizes all foundational protocols—DNS, TCP/IP, TLS, HTTP, Web Servers, MIME, HTML, and Browser Rendering Engines—into a single synchronized timeline.",

    whyItMatters: "This is universally celebrated as the single most famous technical interview question in software engineering ('What happens when you type https://example.com into your browser and press enter?'). Mastering this journey proves true full-stack fluency across networking, protocols, and front-end rendering.",

    explanation: [
      {
        heading: "The 8 Phases of the Web Request Odyssey",
        content: "When you type `https://example.com` and press Enter, eight distinct phases unfold in milliseconds:\n\n1. URL Parsing & HSTS Check: The browser parses the protocol scheme (HTTPS) and hostname.\n2. Local Cache Check: Browser checks memory cache, then OS socket `getaddrinfo`.\n3. Hierarchical DNS Resolution: Recursive resolver queries Root -> TLD -> Authoritative server to get 93.184.216.34.\n4. TCP 3-Way Handshake & TLS 1.3: SYN, SYN-ACK, ACK, and Diffie-Hellman cryptographic exchange on port 443.\n5. HTTP Request Dispatch: Browser writes `GET / HTTP/1.1` to the socket.\n6. Web Server Processing: Nginx reads disk or executes application code and emits `HTTP 200 OK`.\n7. HTML Tokenization: Browser parser decodes bytes into tokens and constructs the DOM tree.\n8. Layout, Paint & Compositing: DOM + CSSOM merge into Render Tree; GPU paints pixels on screen."
      },
      {
        heading: "Unit 1 Comprehensive Recap",
        content: "Congratulations on completing Unit 1! You now possess a rigorous conceptual understanding of:\n- How packet switching and TCP/IP enabled decentralized internetworking.\n- How the World Wide Web differs from the Internet infrastructure.\n- The semantic purpose of HTML markup.\n- The stateless request-response mechanics of HTTP.\n- How SMTP pushes email while POP3 and IMAP retrieve it.\n- How MIME enables binary attachments and declares media types.\n- How DNS translates human names into routable numbers.\n- How browsers transform code into interactive painted pixels."
      }
    ],

    howItWorks: [
      { step: 1, title: "URL Parsing", subtitle: "Phase 1", description: "Browser Omnibox decomposes URL components." },
      { step: 2, title: "DNS Lookup", subtitle: "Phase 2", description: "Recursive resolver finds IP address 93.184.216.34." },
      { step: 3, title: "TCP & TLS Handshake", subtitle: "Phase 3", description: "Encrypted socket connection established." },
      { step: 4, title: "HTTP Request & Response", subtitle: "Phase 4", description: "GET request dispatched; server streams 200 OK with HTML." },
      { step: 5, title: "DOM & Pixel Paint", subtitle: "Phase 5", description: "Browser constructs DOM, applies CSS, and paints page." }
    ],

    simulationType: "follow-a-web-request",

    practicalExample: {
      scenario: "Real-World Latency Budget (Target: < 500ms)",
      description: "How the 8 phases distribute across a high-speed broadband connection.",
      records: [
        { type: "Phase", host: "DNS Resolution", value: "20ms - 80ms", ttl: "UDP", purpose: "Translates domain to IP address" },
        { type: "Phase", host: "TCP + TLS Handshake", value: "30ms - 100ms", ttl: "Crypto", purpose: "Establishes secure socket" },
        { type: "Phase", host: "Time-to-First-Byte (TTFB)", value: "50ms - 150ms", ttl: "Server", purpose: "Server processing time" },
        { type: "Phase", host: "DOM Construction & Paint", value: "40ms - 120ms", ttl: "Client", purpose: "Browser parsing and pixel rasterization" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Assuming the browser re-resolves DNS on every single page click",
        reality: "Operating systems and browsers cache DNS records for the duration specified by the record's TTL (Time-To-Live), preventing redundant lookups."
      }
    ],

    relatedTopics: [
      { id: "world-wide-web", title: "World Wide Web", unitId: "unit-1" },
      { id: "http-protocol", title: "HTTP Protocol", unitId: "unit-1" },
      { id: "dns-resolution", title: "DNS Resolution", unitId: "unit-1" },
      { id: "web-browsers", title: "Web Browsers", unitId: "unit-1" }
    ],

    challenge: {
      id: "challenge-capstone-01",
      title: "Locate the Bottleneck in the Critical Path",
      difficulty: "Intermediate",
      badge: "Full-Stack Analysis",
      description: "A performance profile reveals: DNS takes 15ms, TCP takes 25ms, TLS takes 30ms, but Time-to-First-Byte (TTFB) takes 3,200ms. DOM parsing takes 40ms.",
      task: "Which layer of the architecture is responsible for the 3.2-second delay?",
      options: [
        { id: "opt-1", text: "The DNS Recursive Resolver.", correct: false, reason: "DNS completed in only 15ms." },
        { id: "opt-2", text: "The Web Server / Backend Application runtime (e.g. slow unindexed database query or synchronous blocking server computation).", correct: true, reason: "Correct! TTFB measures the time the server spends processing the request before sending the first byte. A 3.2s TTFB is a backend database/server bottleneck." },
        { id: "opt-3", text: "The browser CSS parser.", correct: false, reason: "CSS parsing happens after TTFB during client rendering." }
      ],
      hint: "Remember that TTFB measures server processing latency before any data is sent back."
    },

    quiz: [
      {
        id: "capstone-q1",
        question: "In the end-to-end journey of a web request, which protocol is responsible for translating the domain name into an IP address?",
        options: ["HTTP", "DNS", "TCP", "SMTP"],
        correctIndex: 1,
        explanation: "The Domain Name System (DNS) resolves hostnames into routable numeric IP addresses."
      },
      {
        id: "capstone-q2",
        question: "What is the primary role of the TLS handshake during an HTTPS connection?",
        options: [
          "To compress HTML files with Gzip.",
          "To authenticate the server's identity and establish a shared cryptographic session key for symmetric encryption.",
          "To format images into JPEG format.",
          "To delete cookies from the browser cache."
        ],
        correctIndex: 1,
        explanation: "TLS uses asymmetric cryptography to authenticate the server certificate and establish shared symmetric session keys for fast, encrypted transit."
      }
    ]
  },

  // Unit 2 Curriculum Topics
  ...UNIT_2_TOPICS,

  "css-box-model": {
    id: "css-box-model",
    unitId: "unit-3",
    unitNumber: 3,
    unitTitle: "Unit 3: CSS3, Modern Layouts & Responsive Design",
    title: "The CSS Box Model & Geometry Flow",
    subtitle: "How browsers compute the rectangular dimensions, margins, borders, and paddings of every element",
    difficulty: "Beginner",
    estimatedMinutes: 12,
    badge: "CSS Architecture",
    definition: "The CSS Box Model is the foundational layout paradigm where every element is treated as a rectangular box.",
    whyItMatters: "Unintended overflow and layout breaks almost always stem from misunderstanding content-box vs border-box.",
    explanation: [
      {
        heading: "The Four Layers of the Box",
        content: "Content -> Padding -> Border -> Margin."
      }
    ],
    howItWorks: [
      { step: 1, title: "Content Box Sizing", subtitle: "Sizing", description: "Browser calculates inner dimensions." }
    ],
    simulationType: "box-model",
    practicalExample: {
      scenario: "Universal Box-Sizing Reset",
      description: "Setting *, *::before, *::after { box-sizing: border-box; }."
    },
    commonMistakes: [],
    relatedTopics: [],
    challenge: null,
    quiz: []
  }
};

// Helper utilities
export function getAllUnits() {
  return UNITS;
}

export function getUnitById(unitId) {
  return UNITS.find(u => u.id === unitId) || null;
}

export function getAllTopics() {
  return Object.values(TOPICS);
}

export function getTopicById(topicId) {
  return TOPICS[topicId] || null;
}

export function getAllChallenges() {
  return Object.values(TOPICS)
    .filter(t => t.challenge)
    .map(t => ({
      ...t.challenge,
      topicId: t.id,
      topicTitle: t.title,
      unitTitle: t.unitTitle
    }));
}

export function getAllQuizzes() {
  return Object.values(TOPICS)
    .filter(t => t.quiz && t.quiz.length > 0)
    .map(t => ({
      topicId: t.id,
      topicTitle: t.title,
      unitTitle: t.unitTitle,
      questions: t.quiz
    }));
}
