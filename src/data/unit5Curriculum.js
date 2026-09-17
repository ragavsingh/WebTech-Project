/**
 * Unit 5: The Future Web Lab — AI, DWeb, IoT & Immersive Web
 * "THE FUTURE WEB LAB"
 * Comprehensive documentation, step-by-step lifecycles, wire records,
 * practical examples, misconceptions, challenges, and diagnostic quizzes.
 */

export const UNIT_5_DEFINITION = {
  id: "unit-5",
  number: 5,
  title: "Unit 5: The Future Web Lab — AI, DWeb, IoT & Immersive Web",
  description: "The Future Web Lab: Master Web 4.0 conceptual paradigms, AI-Powered Web Personalization, Decentralized Web (DWeb), Blockchain Ledgers & Smart Contracts, Internet of Things (IoT) Telemetry, WebXR Augmented & Virtual Reality, Smart Context-Aware Systems, Adaptive User Interfaces, Web Automation Workflows, and 5G Edge Web Architecture.",
  iconName: "Cpu",
  accentColor: "violet",
  topicCount: 12,
  estimatedHours: 7.5,
  topics: [
    { id: "web40-future-web", title: "Web 4.0: The Intelligent & Symbiotic Web", difficulty: "Beginner", duration: "16 min", isImplemented: true },
    { id: "ai-powered-web", title: "AI-Powered Web & Dynamic Personalization", difficulty: "Intermediate", duration: "18 min", isImplemented: true },
    { id: "decentralized-web-dweb", title: "Decentralized Web (DWeb) & P2P Networks", difficulty: "Intermediate", duration: "18 min", isImplemented: true },
    { id: "blockchain-integration-web", title: "Blockchain Integration & Cryptographic Ledgers", difficulty: "Intermediate", duration: "20 min", isImplemented: true },
    { id: "iot-web-development", title: "Internet of Things (IoT) in Web Development", difficulty: "Intermediate", duration: "18 min", isImplemented: true },
    { id: "augmented-reality-web", title: "Augmented Reality (AR) in the Web & WebXR", difficulty: "Intermediate", duration: "16 min", isImplemented: true },
    { id: "virtual-reality-web", title: "Virtual Reality (VR) & 3D Web Immersive Spaces", difficulty: "Intermediate", duration: "16 min", isImplemented: true },
    { id: "smart-web-context", title: "Smart Web: Context-Aware Autonomous Applications", difficulty: "Intermediate", duration: "18 min", isImplemented: true },
    { id: "adaptive-interfaces", title: "Adaptive Interfaces: Beyond Responsive Design", difficulty: "Beginner", duration: "16 min", isImplemented: true },
    { id: "web-automation-workflows", title: "Web Automation, Webhooks & Autonomous Workflows", difficulty: "Intermediate", duration: "18 min", isImplemented: true },
    { id: "impact-5g-web", title: "Impact of 5G & Edge Computing on Web Technologies", difficulty: "Intermediate", duration: "16 min", isImplemented: true },
    { id: "unit5-future-web-lab", title: "Capstone Lab: Build the Future Web Laboratory", difficulty: "Advanced", duration: "25 min", isImplemented: true }
  ]
};

export const UNIT_5_TOPICS = {
  // ==========================================
  // TOPIC 1: WEB 4.0 FUTURE WEB
  // ==========================================
  "web40-future-web": {
    id: "web40-future-web",
    unitId: "unit-5",
    unitNumber: 5,
    unitTitle: "Unit 5: The Future Web Lab — AI, DWeb, IoT & Immersive Web",
    title: "Web 4.0: The Intelligent & Symbiotic Web",
    subtitle: "The conceptual evolution toward proactive, autonomous, and context-aware human-machine collaboration",
    difficulty: "Beginner",
    estimatedMinutes: 16,
    badge: "Future Web",

    definition: "Web 4.0 refers to the conceptual next era of the World Wide Web characterized as the 'Symbiotic Web' or 'Intelligent Web'. Unlike Web 1.0 (read-only documents), Web 2.0 (read-write social platforms), and Web 3.0 (read-write-trust semantic/decentralized architectures), Web 4.0 is not an officially standardized W3C specification. Rather, it represents an architectural paradigm where autonomous artificial intelligence, pervasive Internet of Things (IoT) sensors, edge computing, and real-time context-awareness collaborate symbiotically to proactively fulfill human intent.",

    whyItMatters: "Understanding Web 4.0 allows engineers to distinguish between transient marketing buzzwords and verifiable architectural patterns. In previous web eras, humans initiated every request by clicking links, typing search terms, or submitting forms. In Web 4.0 architectures, web systems autonomously sense context (location, biometric state, device conditions, schedule), communicate across distributed machine-to-machine (M2M) channels, and anticipate user requirements before an explicit user query is dispatched.",

    explanation: [
      {
        heading: "Beginner Explanation: From Passive Tools to Proactive Digital Partners",
        content: "Consider the evolution of booking a medical consultation across web generations:\n- Web 1.0: You navigated to a hospital's static HTML page to read doctor bios and copy an office phone number.\n- Web 2.0: You registered an account on a portal, opened a calendar widget, and submitted a booking form.\n- Web 3.0: You signed a cryptographic transaction verifying your identity and medical record integrity via decentralized ledgers.\n- Web 4.0: Your wearable biometric sensor notes an elevated resting heart rate, your local AI agent cross-references your calendar, autonomously negotiates a telemedicine slot with your physician's schedule agent, and arranges transportation—requiring only your single confirmation tap."
      },
      {
        heading: "The Historical Progression Across Web Eras",
        content: "The web's architectural evolution can be summarized by interaction paradigm and core capability:\n1. Web 1.0 (1990-2004): Static Read-Only Web. Hyperlinked documents, table layouts, webmaster publishing.\n2. Web 2.0 (2004-2015): Dynamic Read-Write Social Web. User-generated content, AJAX, cloud databases, REST APIs, SaaS.\n3. Web 3.0 (2015-present): Decentralized & Semantic Web. Machine-readable RDF triples, distributed ledgers, peer-to-peer storage, decentralized identity (DID).\n4. Web 4.0 (Emerging/Conceptual): Intelligent Symbiotic Web. Ubiquitous ambient computing, autonomous AI agents, multi-modal spatial interfaces, and pervasive IoT."
      },
      {
        heading: "Engineering Reality vs. Marketing Hype",
        bullets: [
          "Not a Protocol Replacement: Web 4.0 does not replace TCP, HTTP/3, or HTML. It builds on top of WebAssembly, WebGPU, WebXR, WebSockets, and distributed microservices.",
          "Not Sentient Magic: It is the convergence of high-bandwidth connectivity (5G/6G), low-latency edge computing, compact on-device LLMs, and interoperable sensor networks.",
          "Privacy & Autonomy Tradeoffs: High contextual intelligence requires pervasive sensor telemetry, making verifiable encryption, privacy-preserving machine learning, and strict zero-trust boundaries mandatory."
        ]
      }
    ],

    howItWorks: [
      { step: 1, title: "Ambient Sensing", subtitle: "Edge IoT / Wearables", description: "Environmental and biometric sensors continuously collect ambient telemetry." },
      { step: 2, title: "Local Intelligence", subtitle: "Edge Neural Engine", description: "On-device AI evaluates contextual cues without leaking raw sensor streams to centralized servers." },
      { step: 3, title: "Autonomous Negotiation", subtitle: "Agent-to-Agent Protocol", description: "Software agents communicate using standard semantic JSON-LD payloads over HTTP/3 or WebSockets." },
      { step: 4, title: "Proactive Execution", subtitle: "Service Integration", description: "Automated tasks execute asynchronously across cloud, edge, and smart device endpoints." },
      { step: 5, title: "Adaptive Presentation", subtitle: "Spatial / Voice / Web UI", description: "Results are seamlessly rendered across the user's immediate viewport, smart glasses, or ambient displays." }
    ],

    simulationType: "web40-future-sim",

    practicalExample: {
      scenario: "Smart Transit Negotiation in Web 4.0 Architecture",
      description: "How a context-aware Web 4.0 client negotiates flight re-booking during sudden delay.",
      records: [
        { type: "Context Sensor", host: "device.telemetry/geo", value: "Flight AA402 Delayed 180min; Passenger At Gate 4", ttl: "Stream", purpose: "Edge agent detects transit disruption in background" },
        { type: "AI Agent Call", host: "api.transit-agent.net/rebook", value: "{\"action\": \"hold_connection\", \"preferred_airline\": \"SkyTeam\"}", ttl: "Live", purpose: "Autonomous negotiation between passenger agent and airline scheduling API" },
        { type: "Smart Interface", host: "client.viewport/render", value: "Push notification with 1-tap re-routing choice", ttl: "Event", purpose: "Zero-effort resolution presented to the traveler" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Believing Web 4.0 is an official RFC or W3C standard that deprecates Web 2.0 and Web 3.0",
        reality: "Web 4.0 is an industry paradigm concept describing the convergence of AI, IoT, and edge computing. It runs on the same web foundations (HTTP/3, WebSockets, HTML5) refined with machine intelligence."
      },
      {
        misconception: "Thinking Web 4.0 eliminates the need for human software developers",
        reality: "Web 4.0 requires deeper engineering rigor than ever: developers must build secure zero-trust APIs, agent interoperability protocols, resilient fallback systems, and privacy-preserving data pipelines."
      }
    ],

    relatedTopics: [
      { id: "ai-powered-web", title: "AI-Powered Web & Dynamic Personalization", unitId: "unit-5" },
      { id: "smart-web-context", title: "Smart Web: Context-Aware Autonomous Applications", unitId: "unit-5" }
    ],

    challenge: {
      id: "challenge-w40-01",
      title: "Evaluate Web 4.0 Symbiotic Architecture",
      difficulty: "Beginner",
      badge: "Web 4.0 Master",
      description: "A logistics company wants to transition from their Web 2.0 tracking portal (where customers manually refresh a dashboard) to a Web 4.0 intelligent paradigm.",
      task: "Which system design represents a true Web 4.0 approach?",
      options: [
        { id: "opt-1", text: "Upgrading the database server CPU and adding a colorful CSS gradient banner.", correct: false, reason: "Hardware upgrades and styling do not alter the interaction model." },
        { id: "opt-2", text: "Deploying autonomous edge agents that correlate IoT container temperature sensors with traffic APIs, proactively rerouting perishable goods before spoilage occurs.", correct: true, reason: "Autonomous sensing, context correlation, and proactive remediation define the Web 4.0 symbiotic paradigm." },
        { id: "opt-3", text: "Rewriting the frontend using PHP 4 for retro web design compatibility.", correct: false, reason: "Outdated software violates security and real-time standards." },
        { id: "opt-4", text: "Converting all web pages into static non-interactive PDF files uploaded to FTP.", correct: false, reason: "That reverts all the way back to Web 1.0 broadcast mechanisms." }
      ]
    },

    quiz: [
      {
        id: "w40-q1",
        question: "How is Web 4.0 officially recognized in computer science standards bodies?",
        options: [
          "As an ISO standard published with strict IEEE network protocols.",
          "As a conceptual paradigm describing intelligent, symbiotic human-machine systems rather than a formal W3C specification.",
          "As a replacement for TCP/IP engineered by Mozilla.",
          "As a mandatory European Union browser compliance regulation."
        ],
        correctIndex: 1,
        explanation: "Web 4.0 is not a technical standard like HTTP/2 or HTML5; it is a conceptual era describing ubiquitous AI, IoT, and context-driven automation."
      },
      {
        id: "w40-q2",
        question: "Which of the following describes the progression of interaction models from Web 1.0 to Web 4.0?",
        options: [
          "Read-Only -> Read-Write -> Read-Write-Trust -> Symbiotic / Proactive",
          "Voice -> Print -> Video -> Hologram",
          "P2P -> Centralized -> Decentralized -> Monolithic",
          "Dial-up -> Fiber -> Satellite -> Dial-up"
        ],
        correctIndex: 0,
        explanation: "Web 1.0 was Read-Only, Web 2.0 added Write (collaboration), Web 3.0 added Trust (semantic/decentralized), and Web 4.0 introduces Symbiotic intelligence."
      },
      {
        id: "w40-q3",
        question: "What is the primary engineering challenge when deploying proactive Web 4.0 context-aware applications?",
        options: [
          "Preventing HTML tags from closing prematurely.",
          "Balancing deep contextual sensing with user privacy, zero-trust security, and algorithmic transparency.",
          "Making sure keyboards have physical wires connected.",
          "Disabling CSS stylesheets so text loads instantly."
        ],
        correctIndex: 1,
        explanation: "Contextual awareness requires ambient sensor telemetry, creating serious privacy and security challenges that demand edge processing and transparent user consent."
      }
    ]
  },

  // ==========================================
  // TOPIC 2: AI-POWERED WEB & PERSONALIZATION
  // ==========================================
  "ai-powered-web": {
    id: "ai-powered-web",
    unitId: "unit-5",
    unitNumber: 5,
    unitTitle: "Unit 5: The Future Web Lab — AI, DWeb, IoT & Immersive Web",
    title: "AI-Powered Web & Dynamic Personalization",
    subtitle: "Integrating machine learning models, on-device neural inference, and real-time recommendation pipelines",
    difficulty: "Intermediate",
    estimatedMinutes: 18,
    badge: "AI & Web",

    definition: "AI-Powered Web Development integrates machine learning models into web client and server architectures to deliver adaptive experiences, personalized content, intelligent search, and dynamic interface rendering. Modern web applications execute AI workloads via two distinct architectural pathways: server-side cloud inference (calling hosted foundation models via REST or streaming APIs) and client-side on-device inference (utilizing WebAssembly, WebGPU, ONNX Runtime Web, and WebLLM directly in the user's browser).",

    whyItMatters: "Traditional web applications rely on hardcoded conditional logic (if-else branches) to serve static pages. AI-powered web applications dynamically adapt their structure, recommendations, and interface components based on user intent, reading level, and real-time interaction patterns. Furthermore, the advent of WebGPU allows browsers to execute neural network matrix multiplications with near-native hardware acceleration, enabling privacy-preserving offline AI directly on user devices.",

    explanation: [
      {
        heading: "Architectural Comparison: Server-Side Cloud AI vs. Client-Side On-Device AI",
        content: "Modern full-stack web engineers select AI architectures based on privacy, latency, and cost tradeoffs:\n- Server-Side AI (Cloud APIs): Heavy multi-billion parameter foundation models (e.g. Gemini, Claude, GPT-4) run in centralized GPU clusters. Web clients dispatch streaming HTTP POST requests. Pros: Unlimited compute, highest reasoning quality. Cons: Network latency, API operating costs, user telemetry sent across internet.\n- Client-Side AI (WebGPU / WASM): Quantized models (e.g. MobileNet, Whisper-WASM, Phi-3, Gemma-2B) execute locally inside the browser tab using WebGPU shaders. Pros: Zero server hosting costs, ultra-low latency, works offline, 100% data privacy. Cons: Consumes client RAM and battery, model size download penalty."
      },
      {
        heading: "Dynamic Personalization Pipeline",
        content: "Effective web personalization executes in four continuous stages:\n1. Event Telemetry: Browser monitors user actions (click frequency, scroll depth, topic dwell time) via lightweight analytics hooks.\n2. Feature Vector Construction: User behavior is embedded into multidimensional numerical vectors.\n3. Scoring & Ranking: The model computes cosine similarity between the user profile vector and available content items.\n4. Dynamic DOM Synthesis: The client UI re-orders modules, adapts layout hierarchy, and highlights relevant content blocks."
      },
      {
        heading: "Ethical Hazards: Filter Bubbles & Bias",
        bullets: [
          "Echo Chambers: Algorithmic over-personalization isolates users from diverse viewpoints by serving exclusively reinforcing content.",
          "Dark Patterns: Using predictive models to exploit cognitive vulnerabilities (e.g. artificial scarcity triggers or compulsive engagement loops).",
          "Transparency & Control: Ethical web apps provide clear disclosure when content is AI-personalized and allow users to reset their recommendation vectors."
        ]
      }
    ],

    howItWorks: [
      { step: 1, title: "Telemetry Capture", subtitle: "Browser Events", description: "DOM hooks log user engagement metrics (dwell time, clicks, category interest)." },
      { step: 2, title: "Embedding Computation", subtitle: "Neural Vectorizer", description: "User preferences are converted into high-dimensional numerical feature embeddings." },
      { step: 3, title: "Candidate Retrieval", subtitle: "Vector Search", description: "Nearest-neighbor query retrieves candidates matching the user vector." },
      { step: 4, title: "Contextual Re-ranking", subtitle: "Scoring Layer", description: "Weights balance freshness, relevance, diversity, and user explicit preferences." },
      { step: 5, title: "Hydration & Rendering", subtitle: "Dynamic UI", description: "Frontend framework smoothly transitions layout cards into the customized layout." }
    ],

    simulationType: "ai-personalized-web-sim",

    practicalExample: {
      scenario: "Client-Side Semantic Search with WebGPU & Transformers.js",
      description: "Executing local vector embedding inference inside a browser service worker.",
      records: [
        { type: "Model Init", host: "navigator.gpu.requestAdapter()", value: "WebGPU pipeline compiled: text-embedding-all-MiniLM-L6-v2", ttl: "Cached", purpose: "Initialize client-side neural execution context without server costs" },
        { type: "Inference", host: "pipeline('feature-extraction')", value: "Input: 'reactive state' -> Vector: [0.124, -0.482, 0.811, ...]", ttl: "12ms", purpose: "Locally compute 384-dimensional vector in milliseconds" },
        { type: "UI Synthesis", host: "document.querySelector('#feed')", value: "Sort cards by cosine_similarity(user_pref, card_embed)", ttl: "Live", purpose: "Personalized feed populated without transmitting private search queries" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Assuming all AI web features require paying for expensive monthly cloud API tokens",
        reality: "WebAssembly and WebGPU now allow quantized small language models, vision transformers, and speech recognition to run completely free inside the user's browser."
      },
      {
        misconception: "Believing web personalization requires capturing invasive personal identity information",
        reality: "High-quality personalization can be achieved using session-based contextual signals (device type, current path, session clickstream) stored purely in client-side IndexedDB."
      }
    ],

    relatedTopics: [
      { id: "adaptive-interfaces", title: "Adaptive Interfaces: Beyond Responsive Design", unitId: "unit-5" },
      { id: "smart-web-context", title: "Smart Web: Context-Aware Autonomous Applications", unitId: "unit-5" }
    ],

    challenge: {
      id: "challenge-aiw-01",
      title: "Select the Optimal AI Deployment Architecture",
      difficulty: "Intermediate",
      badge: "AI Architect",
      description: "A confidential medical clinic needs a patient intake web app that transcribes spoken patient symptoms and auto-categorizes urgent conditions. Strict national laws forbid audio or raw health text from leaving the user's tablet.",
      task: "Which architecture complies with privacy requirements while delivering speech-to-text AI?",
      options: [
        { id: "opt-1", text: "Streaming audio over an unencrypted HTTP POST to a public cloud transcription endpoint.", correct: false, reason: "Transmitting raw audio to external cloud servers directly violates privacy laws." },
        { id: "opt-2", text: "Deploying a client-side Whisper model compiled to WebAssembly/WebGPU executing entirely inside the browser tab.", correct: true, reason: "On-device browser inference processes the audio locally in device memory; zero bytes of sensitive health data leave the tablet." },
        { id: "opt-3", text: "Saving the audio file into a public AWS S3 bucket and tweeting a link to a doctor.", correct: false, reason: "This is a catastrophic data leak." },
        { id: "opt-4", text: "Emailing the audio file as a MIME attachment to an automated mailbox.", correct: false, reason: "Insecure transit that violates patient confidentiality." }
      ]
    },

    quiz: [
      {
        id: "aiw-q1",
        question: "What web technology enables browsers to execute deep learning models with hardware-accelerated GPU compute?",
        options: [
          "Adobe Flash Player 10",
          "WebGPU and WebAssembly (WASM)",
          "XMLHTTPRequest Synchronous Mode",
          "CSS3 2D Transforms"
        ],
        correctIndex: 1,
        explanation: "WebGPU provides low-level, direct access to the graphics and compute shaders of modern GPUs, enabling high-performance neural inference inside the browser."
      },
      {
        id: "aiw-q2",
        question: "What is an algorithmic 'filter bubble' or 'echo chamber' in web personalization?",
        options: [
          "A CSS styling bug that creates round border radiuses on images.",
          "A condition where recommendation systems continually reinforce existing biases by shielding users from contrary perspectives.",
          "An HTTP 504 Gateway Timeout caused by heavy neural model weights.",
          "A browser memory leak inside JavaScript garbage collection."
        ],
        correctIndex: 1,
        explanation: "Filter bubbles occur when algorithms hyper-optimize for clicks, isolating users into narrow ideological feedback loops."
      },
      {
        id: "aiw-q3",
        question: "What is the primary architectural advantage of client-side on-device AI over cloud API inference?",
        options: [
          "It can run trillion-parameter models on 2GB RAM phones without lag.",
          "Complete user data privacy and zero ongoing server GPU compute costs.",
          "It completely replaces the need for HTML markup.",
          "It makes DNS resolution unnecessary."
        ],
        correctIndex: 1,
        explanation: "Because the neural network runs in local browser memory via WebGPU/WASM, no sensitive user data traverses the network, and server hosting costs are zero."
      }
    ]
  },

  // ==========================================
  // TOPIC 3: DECENTRALIZED WEB (DWEB)
  // ==========================================
  "decentralized-web-dweb": {
    id: "decentralized-web-dweb",
    unitId: "unit-5",
    unitNumber: 5,
    unitTitle: "Unit 5: The Future Web Lab — AI, DWeb, IoT & Immersive Web",
    title: "Decentralized Web (DWeb) & P2P Networks",
    subtitle: "Content-addressed storage, peer-to-peer topologies, IPFS, and resilient censorship-resistant architectures",
    difficulty: "Intermediate",
    estimatedMinutes: 18,
    badge: "DWeb & P2P",

    definition: "The Decentralized Web (DWeb) is an architectural paradigm that distributes data storage, identity, and computation across an open, peer-to-peer (P2P) network of autonomous nodes rather than relying on centralized cloud providers (e.g. AWS, Cloudflare, Google Cloud). Instead of locating content by geographic server address (location addressing via URLs like https://server.com/photo.jpg), DWeb protocols like IPFS (InterPlanetary File System) use cryptographic hashes of the content itself (content addressing via Content Identifiers or CIDs).",

    whyItMatters: "Centralized web infrastructure creates single points of failure, vulnerable honeypots for data breaches, and systemic susceptibility to censorship or regional network blackouts. If a centralized cloud hosting facility experiences an outage, thousands of websites immediately go dark. DWeb topologies employ mesh networking and Distributed Hash Tables (DHTs), allowing nodes to retrieve data from any nearby peer hosting that content piece, resulting in self-healing resilience.",

    explanation: [
      {
        heading: "Location Addressing (Web 2.0) vs. Content Addressing (DWeb)",
        content: "Understanding DWeb begins with how resources are identified and fetched:\n- Location Addressing (HTTP/URL): You tell the browser WHERE to look: 'Go to IP 192.0.2.1 at path /docs/paper.pdf'. If the server administrator deletes the file, renames the path, or suffers a server crash, you receive an HTTP 404 error—even if millions of users currently hold identical copies on their hard drives.\n- Content Addressing (IPFS/CID): You tell the network WHAT you want: 'Give me the file whose cryptographic SHA-256 hash matches QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco'. Any peer holding those exact bytes can serve it to you. You verify integrity mathematically by hashing the received bytes. Tampering is mathematically impossible."
      },
      {
        heading: "Network Topology Comparison",
        content: "Web network structures possess fundamentally distinct failure modes:\n1. Centralized: All client nodes connect exclusively to a single master server. If the server fails or is blocked, 100% of network traffic terminates.\n2. Decentralized / Federated: Nodes connect to regional hubs (e.g. email servers or Mastodon instances). A failure in one hub impacts only its local cluster.\n3. Distributed P2P Mesh: Every node connects to multiple peers. There is no central authority. If 40% of nodes suddenly go offline, traffic dynamically re-routes across remaining active pathways."
      },
      {
        heading: "Core Building Blocks of the DWeb Stack",
        bullets: [
          "IPFS (InterPlanetary File System): A P2P hypermedia protocol that breaks files into 256KB Merkle DAG blocks indexed by cryptographic CIDs.",
          "Libp2p: A modular peer-to-peer networking framework supporting peer discovery, transport encryption, and NAT traversal.",
          "Distributed Hash Tables (DHT): A decentralized key-value lookup system (Kademlia algorithm) mapping CIDs to peer IP addresses.",
          "Decentralized Identifiers (DIDs): Cryptographically verifiable, user-owned digital IDs independent of centralized identity providers like Google or Facebook."
        ]
      }
    ],

    howItWorks: [
      { step: 1, title: "File Chunking & Hashing", subtitle: "Merkle DAG", description: "The source file is broken into cryptographic chunks and organized into a Directed Acyclic Graph." },
      { step: 2, title: "CID Generation", subtitle: "Multihash", description: "The root cryptographic hash produces a unique Content Identifier (CID) that fingerprints the data." },
      { step: 3, title: "DHT Announcement", subtitle: "Peer Discovery", description: "The hosting node informs the Distributed Hash Table (DHT) that it provides this specific CID." },
      { step: 4, title: "Peer Swarm Routing", subtitle: "BitSwap / Libp2p", description: "A requesting client queries the DHT, discovers closest peers, and initiates concurrent block downloads." },
      { step: 5, title: "Cryptographic Verification", subtitle: "Zero-Trust Integrity", description: "The client hashes every received chunk to verify mathematical authenticity before displaying the asset." }
    ],

    simulationType: "dweb-network-sim",

    practicalExample: {
      scenario: "Retrieving Web Assets via IPFS Gateway vs Centralized Server",
      description: "Contrasting failure behaviors when the origin hosting server goes offline.",
      records: [
        { type: "Centralized HTTP", host: "https://cloud-cdn.com/asset.png", value: "HTTP 502 Bad Gateway (Origin down)", ttl: "Failed", purpose: "Asset unavailable to all global clients because single master server failed" },
        { type: "Decentralized CID", host: "ipfs://bafybeic56...7q/asset.png", value: "200 OK via Peer 198.51.100.4", ttl: "P2P Swarm", purpose: "File successfully retrieved from alternative peer holding cached Merkle chunks" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Believing data uploaded to IPFS stays online forever automatically without anyone hosting it",
        reality: "IPFS nodes only host data they choose to 'pin' or cache. If every peer that pinned a CID shuts down, the data becomes unavailable until a node hosting it comes back online."
      },
      {
        misconception: "Assuming DWeb completely replaces the need for web browsers like Chrome, Firefox, or Safari",
        reality: "Modern browsers access DWeb networks seamlessly either through native protocol support or via HTTP-to-IPFS public gateways."
      }
    ],

    relatedTopics: [
      { id: "blockchain-integration-web", title: "Blockchain Integration & Cryptographic Ledgers", unitId: "unit-5" },
      { id: "web40-future-web", title: "Web 4.0: The Intelligent & Symbiotic Web", unitId: "unit-5" }
    ],

    challenge: {
      id: "challenge-dweb-01",
      title: "Analyze Content-Addressed Resilience",
      difficulty: "Intermediate",
      badge: "P2P Engineer",
      description: "An investigative journalism collective wants to host an archive of public legal documents. The government orders the primary hosting facility to disconnect its DNS and fiber connection.",
      task: "Why does hosting the archive on a decentralized content-addressed network like IPFS preserve public access?",
      options: [
        { id: "opt-1", text: "Because IPFS legally forbids governments from passing local laws.", correct: false, reason: "Software protocols cannot prevent legal orders." },
        { id: "opt-2", text: "Because files are requested by cryptographic hash (CID) from a P2P swarm; any active reader who pinned the document serves it to other readers without depending on the seized server.", correct: true, reason: "Content addressing decouples data availability from any single geographic IP address or domain name." },
        { id: "opt-3", text: "Because DWeb converts all documents into secret encrypted Morse code over AM radio.", correct: false, reason: "Nonsensical description of P2P networking." },
        { id: "opt-4", text: "Because DWeb automatically duplicates files onto centralized AWS S3 servers.", correct: false, reason: "AWS S3 is a centralized service subject to the same jurisdiction." }
      ]
    },

    quiz: [
      {
        id: "dweb-q1",
        question: "What is the key distinction between location addressing (URLs) and content addressing (CIDs)?",
        options: [
          "URLs locate data by server hostname/path; CIDs locate data by the cryptographic hash of the content itself.",
          "URLs are always encrypted; CIDs are always plain text.",
          "URLs only work on mobile phones; CIDs only work on supercomputers.",
          "URLs are controlled by Tim Berners-Lee; CIDs are controlled by ICANN."
        ],
        correctIndex: 0,
        explanation: "Location addressing relies on *where* a file is stored (e.g. server.com/file), whereas content addressing identifies a file by *what* it contains using its cryptographic hash."
      },
      {
        id: "dweb-q2",
        question: "What happens in a peer-to-peer mesh network when a single node experiences hardware failure?",
        options: [
          "The entire network immediately crashes and requires a manual system reboot.",
          "Remaining nodes discover alternative routes through neighboring peers, preserving network connectivity.",
          "All cryptographic hashes across the network are permanently deleted.",
          "The browser reverts back to HTML 1.0 specifications."
        ],
        correctIndex: 1,
        explanation: "P2P mesh topologies have no central single point of failure; traffic dynamically re-routes through other surviving peers."
      },
      {
        id: "dweb-q3",
        question: "What role does a Distributed Hash Table (DHT) play in decentralized web architectures?",
        options: [
          "It formats HTML tags with CSS flexbox styling.",
          "It provides a decentralized lookup mechanism that maps Content Identifiers (CIDs) to the IP addresses of peers holding that data.",
          "It generates cryptocurrency mining rewards for browser visitors.",
          "It converts JPG images into PNG format on the fly."
        ],
        correctIndex: 1,
        explanation: "The DHT acts like a decentralized P2P phonebook, allowing nodes to discover which peers are actively serving a specific CID."
      }
    ]
  },

  // ==========================================
  // TOPIC 4: BLOCKCHAIN INTEGRATION
  // ==========================================
  "blockchain-integration-web": {
    id: "blockchain-integration-web",
    unitId: "unit-5",
    unitNumber: 5,
    unitTitle: "Unit 5: The Future Web Lab — AI, DWeb, IoT & Immersive Web",
    title: "Blockchain Integration & Cryptographic Ledgers",
    subtitle: "Immutable ledgers, cryptographic hashing, block linking, smart contracts, and Web3 browser wallets",
    difficulty: "Intermediate",
    estimatedMinutes: 20,
    badge: "Blockchain & Web",

    definition: "Blockchain integration in web development connects client-side web interfaces to decentralized cryptographic ledgers. A blockchain is an append-only distributed sequence of data blocks linked together using cryptographic hashes (such as SHA-256). Each block encapsulates an index, a timestamp, payload data (transactions or contract executions), the cryptographic hash of the preceding block (previousHash), and its own cryptographic hash. Web applications interact with blockchains via JSON-RPC providers and browser wallet extensions (such as MetaMask) using standard libraries like Ethers.js or Viem.",

    whyItMatters: "Traditional web databases (e.g. MySQL, MongoDB) are mutable: any database administrator with root privileges can secretly alter, forge, or delete records. In contrast, blockchains provide mathematical immutability and verifiable trust. Because each block incorporates the hash of its predecessor, altering a single byte in an earlier block changes its hash, which invalidates all subsequent block links across thousands of decentralized validator nodes. This gives web developers a trustless settlement and identity layer.",

    explanation: [
      {
        heading: "Anatomy of a Cryptographic Block",
        content: "Every valid block in a cryptographic ledger comprises five core properties:\n1. Index: The sequential height of the block in the chain (Block #0 is the Genesis Block).\n2. Timestamp: The exact UNIX epoch timestamp when the block was mined or proposed.\n3. Data / Transactions: The payload containing state mutations, token transfers, or contract invocations.\n4. Previous Hash: The cryptographic hash of the immediately preceding block. This is the mathematical 'glue' that forms the immutable chain.\n5. Current Hash: The SHA-256 digest computed across index + timestamp + data + previousHash (and nonce in proof-of-work systems)."
      },
      {
        heading: "The Cascade Effect: Why Tampering Is Mathematically Impossible",
        content: "Suppose an attacker modifies a financial transaction in Block #1 from '$10 to Alice' to '$10,000 to Eve':\n- The moment Block #1's data changes, its computed SHA-256 hash completely changes (the Avalanche Effect).\n- Block #2, however, still stores the OLD hash in its `previousHash` field.\n- The chain link between Block #1 and Block #2 immediately breaks.\n- Every decentralized node in the global network rejects the forged block during consensus verification, rendering unauthorized modifications mathematically detectable in milliseconds."
      },
      {
        heading: "Web Application Integration: Web2 vs Web3 Architecture",
        bullets: [
          "Authentication: Web2 uses email/password + session cookies; Web3 uses public/private key cryptography and digital wallet signatures (Sign-In with Ethereum / EIP-4361).",
          "Data Storage: Web2 writes to centralized cloud SQL databases; Web3 writes verifiable state transitions to smart contracts on-chain and large assets to IPFS.",
          "Client RPC Layer: Web browsers communicate with blockchain nodes using standard JSON-RPC over HTTPS or WebSockets (e.g. `eth_sendRawTransaction`, `eth_call`)."
        ]
      }
    ],

    howItWorks: [
      { step: 1, title: "User Action", subtitle: "Browser Wallet", description: "User triggers an action (e.g., certificate verification or asset transfer) via their web wallet." },
      { step: 2, title: "Cryptographic Signing", subtitle: "Private Key", description: "The browser wallet signs the transaction payload locally with the user's private key." },
      { step: 3, title: "JSON-RPC Broadcast", subtitle: "RPC Provider", description: "The signed payload is submitted via JSON-RPC to validator nodes across the P2P network." },
      { step: 4, title: "Consensus & Mining", subtitle: "Validator Swarm", description: "Validators verify signatures, execute smart contract bytecode, and package transactions into a new block." },
      { step: 5, title: "State Confirmation", subtitle: "Event Subscription", description: "Web frontend listens for block confirmation events via WebSockets to update the user UI." }
    ],

    simulationType: "blockchain-integration-sim",

    practicalExample: {
      scenario: "Connecting a Web Interface to a Smart Contract via Ethers.js",
      description: "How modern frontend JavaScript code interacts with an immutable on-chain smart contract.",
      records: [
        { type: "Wallet Provider", host: "window.ethereum.request()", value: "method: 'eth_requestAccounts' -> 0x71C...3a", ttl: "Session", purpose: "Request user wallet connection and extract public wallet address" },
        { type: "Contract Read", host: "contract.verifyDiploma(id)", value: "call: verifyDiploma(108) -> { isValid: true, graduate: 'Alice' }", ttl: "Instant", purpose: "Read-only query executed against local node state with 0 gas cost" },
        { type: "Contract Write", host: "contract.issueDiploma(data)", value: "tx: 0x9b2...8f submitted -> Confirmed in Block 14,892,104", ttl: "Block 12s", purpose: "State mutation signed by university private key and recorded forever on ledger" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Storing heavy files (like 4K videos or high-resolution PDFs) directly on the blockchain",
        reality: "On-chain storage is extremely scarce and expensive. Modern web engineering stores large assets on IPFS or decentralized storage, storing only the lightweight cryptographic hash (CID) on-chain."
      },
      {
        misconception: "Thinking blockchain private keys should ever be transmitted to a backend web server",
        reality: "Private keys must NEVER leave the user's secure client wallet (MetaMask, hardware wallet). The web application only receives the resulting cryptographic signature."
      }
    ],

    relatedTopics: [
      { id: "decentralized-web-dweb", title: "Decentralized Web (DWeb) & P2P Networks", unitId: "unit-5" },
      { id: "web40-future-web", title: "Web 4.0: The Intelligent & Symbiotic Web", unitId: "unit-5" }
    ],

    challenge: {
      id: "challenge-bc-01",
      title: "Detect Cryptographic Ledger Tampering",
      difficulty: "Intermediate",
      badge: "Blockchain Auditor",
      description: "A malicious employee with direct access to a database server alters Block #2 of an academic credential blockchain to insert a fake degree.",
      task: "Why does the blockchain reject this fraudulent modification?",
      options: [
        { id: "opt-1", text: "Because the computer's CPU overheats and turns off automatically.", correct: false, reason: "Hardware does not monitor blockchain data logic." },
        { id: "opt-2", text: "Because altering Block #2 changes its cryptographic hash, breaking the link with Block #3's previousHash and causing all validator nodes to reject the chain during consensus verification.", correct: true, reason: "Cryptographic block chaining ensures that modifying any historical block invalidates every subsequent block hash." },
        { id: "opt-3", text: "Because the database requires an administrator password before accepting changes.", correct: false, reason: "The attacker already had root access; the cryptographic consensus is what stopped them." },
        { id: "opt-4", text: "Because the browser deletes all cookies when a typo occurs.", correct: false, reason: "Browser cookies have no bearing on blockchain validation." }
      ]
    },

    quiz: [
      {
        id: "bc-q1",
        question: "What cryptographic element links a newly mined block to its predecessor in a blockchain?",
        options: [
          "The previous block's CSS class name.",
          "The cryptographic hash of the previous block stored in the current block's header.",
          "The IP address of the user who first loaded the web page.",
          "A shared cookie stored in Chrome's cache."
        ],
        correctIndex: 1,
        explanation: "Each block explicitly stores `previousHash`, mathematically linking it to the exact cryptographic digest of the prior block."
      },
      {
        id: "bc-q2",
        question: "Why should web developers avoid storing large media files (e.g. 50MB video) directly inside on-chain smart contracts?",
        options: [
          "Blockchains cannot process binary numbers.",
          "On-chain gas costs and storage fees are astronomically high; developers instead store media on IPFS and persist only the hash on-chain.",
          "Video files crash all JavaScript compilers.",
          "Browsers can only render videos hosted on YouTube."
        ],
        correctIndex: 1,
        explanation: "Blockchain storage requires every validator node to duplicate the data forever, making raw media storage prohibitively expensive compared to content-addressed P2P storage like IPFS."
      },
      {
        id: "bc-q3",
        question: "What library protocol do modern web browsers use to communicate with blockchain nodes?",
        options: [
          "FTP Binary Transfer Mode",
          "JSON-RPC over HTTPS or WebSockets",
          "SMTP Mail Exchange Headers",
          "Telnet Port 23"
        ],
        correctIndex: 1,
        explanation: "Web3 web clients communicate with validator nodes using standardized JSON-RPC method calls like `eth_call` and `eth_sendRawTransaction`."
      }
    ]
  },

  // ==========================================
  // TOPIC 5: IOT IN WEB DEVELOPMENT
  // ==========================================
  "iot-web-development": {
    id: "iot-web-development",
    unitId: "unit-5",
    unitNumber: 5,
    unitTitle: "Unit 5: The Future Web Lab — AI, DWeb, IoT & Immersive Web",
    title: "Internet of Things (IoT) in Web Development",
    subtitle: "Web of Things (WoT), MQTT telemetry streaming, digital twins, and bi-directional device command dashboards",
    difficulty: "Intermediate",
    estimatedMinutes: 18,
    badge: "IoT & Web",

    definition: "Internet of Things (IoT) in web development refers to integrating physical connected devices (sensors, actuators, smart appliances, industrial controllers) into web software ecosystems. Often formalized as the 'Web of Things' (WoT) by W3C, this paradigm applies standard web technologies (HTTP, WebSockets, REST, JSON-LD) and lightweight publish-subscribe protocols (MQTT, CoAP) to discover, monitor, and actuate physical hardware directly through web browsers and mobile web applications.",

    whyItMatters: "Historically, embedded systems operated in isolated proprietary silos using vendor-specific desktop software. Bringing IoT into the web standardizes hardware interaction. A maintenance engineer can inspect a wind turbine's telemetry in real time, a hospital can monitor temperature-sensitive vaccine refrigerators, and smart homes can orchestrate lights and thermostats using standard web dashboards that run on any screen without native app installation.",

    explanation: [
      {
        heading: "Protocol Comparison: HTTP vs. WebSockets vs. MQTT",
        content: "Connecting constrained microcontroller devices (like ESP32, Arduino, or Raspberry Pi) to web dashboards requires selecting appropriate communication protocols:\n- HTTP/REST: Request-response over TCP. Heavy overhead (hundreds of bytes in headers per request). Unsuitable for low-power battery sensors reporting every second, but ideal for external API queries.\n- WebSockets: Persistent, full-duplex, low-overhead TCP connection between the web browser and an IoT gateway server. Enables sub-10ms telemetry updates to the dashboard.\n- MQTT (Message Queuing Telemetry Transport): Extremely lightweight binary publish-subscribe protocol designed for constrained devices with high network latency or limited bandwidth. Minimal 2-byte header. Devices publish to topics (e.g. `home/living-room/temperature`); web dashboards subscribe to receive updates via an MQTT-over-WebSockets bridge."
      },
      {
        heading: "The 4-Tier IoT Web Architecture",
        content: "Production IoT web systems follow a robust four-tier pipeline:\n1. Perception / Device Tier: Microcontrollers with physical sensors (temperature, humidity, motion, camera) and actuators (relays, servos, motors).\n2. Gateway / Edge Tier: Collects local radio signals (BLE, Zigbee, LoRaWAN) and aggregates data, performing local filtering before cloud dispatch.\n3. Broker & Cloud Tier: Message brokers (Mosquitto MQTT, EMQX) and time-series databases (InfluxDB, TimescaleDB) ingest millions of telemetry points.\n4. Application / Web Dashboard Tier: React/Vue frontend charts sensor time-series data using Canvas/SVG and dispatches control commands back down to actuators."
      },
      {
        heading: "Security Essentials in IoT Web Development",
        bullets: [
          "Mutual TLS (mTLS): Hardware devices authenticate using pre-provisioned X.509 cryptographic certificates to prevent rogue device spoofing.",
          "Least-Privilege Topics: Devices can only publish to their specific topic and cannot subscribe to other customer feeds.",
          "Over-The-Air (OTA) Updates: Web applications coordinate secure signed firmware flashing across remote fleets."
        ]
      }
    ],

    howItWorks: [
      { step: 1, title: "Sensor Acquisition", subtitle: "Physical Layer", description: "Thermistor or motion sensor reads analog voltage and converts to digital telemetry." },
      { step: 2, title: "MQTT Publish", subtitle: "Lightweight Transit", description: "Microcontroller publishes JSON telemetry payload to MQTT broker over TLS." },
      { step: 3, title: "Broker Dispatch", subtitle: "Message Gateway", description: "MQTT broker filters topic and forwards message to subscribed clients via WebSockets." },
      { step: 4, title: "Dashboard Update", subtitle: "Reactive DOM", description: "Web dashboard receives WebSocket packet and animates live gauge / line chart." },
      { step: 5, title: "Actuator Command", subtitle: "Reverse Control", description: "User toggles UI switch; web app posts command down to the physical relay in under 50ms." }
    ],

    simulationType: "iot-dashboard-sim",

    practicalExample: {
      scenario: "Controlling Smart Facility Relays via WebSockets & MQTT",
      description: "A facility manager toggles HVAC cooling fans and monitors thermal alerts in real time.",
      records: [
        { type: "Sensor Telemetry", host: "devices/lab-3/temp", value: "{\"celsius\": 27.8, \"humidity\": 62, \"status\": \"WARN\"}", ttl: "1s Stream", purpose: "Telemetry stream published every second by edge ESP32 microcontroller" },
        { type: "WebSocket Frame", host: "wss://iot.facility.net/stream", value: "FRAME 0x01: { topic: 'lab-3/temp', val: 27.8 }", ttl: "Instant", purpose: "Real-time bridge pushes data to browser dashboard without HTTP polling" },
        { type: "Actuator Command", host: "devices/lab-3/fan/set", value: "{\"power\": \"ON\", \"speed\": 3, \"auth\": \"jwt_token\"}", ttl: "Command", purpose: "Web UI dispatches actuation command to trigger cooling fan relay" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Using standard HTTP polling (setInterval fetching every 500ms) to read IoT sensor data",
        reality: "HTTP polling creates massive server CPU load and header overhead. Production IoT web apps use persistent WebSockets or MQTT-over-WebSockets for efficient push-based streaming."
      },
      {
        misconception: "Hardcoding API secrets or Wi-Fi passwords in plain text inside client-side IoT dashboard code",
        reality: "Web dashboards must authenticate against a secure backend gateway; never expose raw hardware master keys or cloud database root credentials to client-side bundles."
      }
    ],

    relatedTopics: [
      { id: "smart-web-context", title: "Smart Web: Context-Aware Autonomous Applications", unitId: "unit-5" },
      { id: "impact-5g-web", title: "Impact of 5G & Edge Computing on Web Technologies", unitId: "unit-5" }
    ],

    challenge: {
      id: "challenge-iot-01",
      title: "Design a High-Efficiency IoT Telemetry Pipeline",
      difficulty: "Intermediate",
      badge: "IoT Architect",
      description: "A remote agricultural farm installs 500 solar-powered soil moisture sensors communicating over a low-bandwidth cellular link. The web dashboard must show real-time moisture changes with minimal battery drain.",
      task: "Which communication stack should the engineering team deploy?",
      options: [
        { id: "opt-1", text: "Each sensor opens an HTTP/1.1 POST connection every 2 seconds with 4KB of redundant cookie headers.", correct: false, reason: "HTTP overhead drains battery life and consumes costly cellular data." },
        { id: "opt-2", text: "Sensors publish compact binary or JSON payloads over MQTT; an edge broker forwards telemetry to the web dashboard via persistent WebSockets.", correct: true, reason: "MQTT minimizes header overhead and battery consumption, while WebSockets provides sub-second live dashboard updates." },
        { id: "opt-3", text: "Sensors send printed paper letters via post office to the data center.", correct: false, reason: "Manual postal delivery is not real-time IoT." },
        { id: "opt-4", text: "Sensors transmit full uncompressed WAV audio files over SMTP email.", correct: false, reason: "Massive battery drain and inappropriate transport protocol." }
      ]
    },

    quiz: [
      {
        id: "iot-q1",
        question: "Why is MQTT preferred over standard HTTP for battery-powered IoT microcontrollers?",
        options: [
          "MQTT requires an HDMI cable to operate.",
          "MQTT has an extremely lightweight binary header (as small as 2 bytes) and uses an efficient publish-subscribe model, minimizing battery and bandwidth usage.",
          "HTTP cannot transmit numbers greater than 100.",
          "MQTT was invented by the W3C to replace CSS styling."
        ],
        correctIndex: 1,
        explanation: "HTTP carries hundreds of bytes of header overhead per request; MQTT's tiny 2-byte header and pub/sub architecture conserve critical battery and cellular data."
      },
      {
        id: "iot-q2",
        question: "How does a web browser dashboard receive instant push updates from an IoT MQTT broker?",
        options: [
          "By refreshing the entire web page every 250 milliseconds.",
          "Via an MQTT-over-WebSockets bridge that maintains a persistent full-duplex connection to the browser.",
          "By asking the user to manually click a 'Download Sensor Data' button.",
          "By downloading a new zip file every minute."
        ],
        correctIndex: 1,
        explanation: "WebSockets allows browsers to establish a long-lived bidirectional channel directly to an MQTT gateway, streaming telemetry with minimal latency."
      },
      {
        id: "iot-q3",
        question: "What is a 'Digital Twin' in modern IoT web development?",
        options: [
          "Two computer monitors plugged into the same laptop.",
          "A virtual software representation and live state model of a physical device or system synchronized via real-time telemetry.",
          "A clone of a GitHub repository.",
          "An identical copy machine in an office."
        ],
        correctIndex: 1,
        explanation: "A Digital Twin is a software model that mirrors the exact real-time operational state, temperature, vibration, and lifecycle metrics of physical hardware."
      }
    ]
  },

  // ==========================================
  // TOPIC 6: AUGMENTED REALITY (AR) IN WEB
  // ==========================================
  "augmented-reality-web": {
    id: "augmented-reality-web",
    unitId: "unit-5",
    unitNumber: 5,
    unitTitle: "Unit 5: The Future Web Lab — AI, DWeb, IoT & Immersive Web",
    title: "Augmented Reality (AR) in the Web & WebXR",
    subtitle: "WebXR Device API, camera overlay tracking, 3D model-viewer, and frictionless browser-based AR",
    difficulty: "Intermediate",
    estimatedMinutes: 16,
    badge: "WebAR & WebXR",

    definition: "Augmented Reality (AR) in the web enables browsers to composite computer-generated 3D virtual objects onto a live physical camera feed in real time. Standardized by the W3C through the WebXR Device API, WebAR eliminates the friction of downloading native mobile applications from app stores. Users simply tap a web link or scan a QR code, permitting the browser to access camera telemetry, calculate physical surface planes via simultaneous localization and mapping (SLAM), and anchor interactive 3D assets.",

    whyItMatters: "WebAR transforms e-commerce, architecture, and education by lowering the user acquisition barrier to zero. In traditional e-commerce, a buyer cannot ascertain whether a sofa fits their living room dimensions without installing an 80MB native app. With WebAR and the `<model-viewer>` web component, the user taps 'View in Room' on any standard mobile browser, and the 3D asset is instantly rendered at true physical scale on their floor.",

    explanation: [
      {
        heading: "The WebXR Device API Specification",
        content: "WebXR (where 'XR' stands for Extended Reality, encompassing AR and VR) provides a unified W3C JavaScript API to access immersive hardware:\n- Session Management: Requesting an `immersive-ar` session with features like `hit-test` and `local-floor` reference spaces.\n- Pose & Tracking: Querying the device's 6 Degrees of Freedom (6DoF) pose relative to the physical environment at 60 to 120 frames per second.\n- Lighting Estimation: Analyzing the physical camera feed's light temperature and direction so virtual 3D models cast realistic shadows.\n- Render Loop: Submitting WebGL/WebGPU framebuffers to the display subsystem synchronized with the device's refresh rate."
      },
      {
        heading: "Surface Detection & Hit Testing (SLAM)",
        content: "For a virtual object to remain realistically stationary on a physical kitchen counter, the browser performs Simultaneous Localization and Mapping (SLAM):\n1. Feature Point Tracking: Optical algorithms identify high-contrast visual corners on physical floors and tables.\n2. Raycasting / Hit Testing: When the user taps the screen, the browser projects a mathematical ray into the reconstructed 3D point cloud.\n3. Plane Anchor: The intersection coordinate becomes an anchor matrix (position, rotation, scale) in 3D space.\n4. Camera Synchronization: As the user walks around the room, the virtual object remains anchored, resizing and rotating perspective according to physical optics."
      },
      {
        heading: "Tools & Libraries in the WebAR Ecosystem",
        bullets: [
          "`<model-viewer>`: Google's official declarative web component for 3D and AR, supporting glTF/GLB models with automatic fallback to iOS Quick Look (USDZ) and Android Scene Viewer.",
          "Three.js / Babylon.js: Powerful 3D JavaScript rendering engines offering rich material shaders, physics, and WebXR session bindings.",
          "WebAssembly Vision Libraries: Computer vision engines compiled to WASM for marker tracking (e.g. AR.js, MindAR) without requiring native ARCore/ARKit."
        ]
      }
    ],

    howItWorks: [
      { step: 1, title: "Permission & Session", subtitle: "WebXR API", description: "Browser requests camera and motion permissions to open an 'immersive-ar' session." },
      { step: 2, title: "SLAM Plane Tracking", subtitle: "Visual Odometry", description: "Sensors detect horizontal and vertical surface planes in the physical environment." },
      { step: 3, title: "Hit-Test Raycast", subtitle: "User Touch Event", description: "User taps viewport; raycast computes intersection with detected floor plane." },
      { step: 4, title: "Asset Instantiation", subtitle: "glTF Loader", description: "WebGL pipeline mounts 3D asset matrix to the calculated physical coordinates." },
      { step: 5, title: "Illumination & Shadows", subtitle: "Lighting Estimation", description: "Ambient light sensors apply matching directional shadows onto the real camera stream." }
    ],

    simulationType: "web-ar-sim",

    practicalExample: {
      scenario: "Embedding an Interactive 3D Product in WebAR via <model-viewer>",
      description: "Declarative HTML markup for furniture e-commerce with real-world scale projection.",
      records: [
        { type: "HTML Component", host: "index.html", value: "<model-viewer src='sofa.glb' ar ar-modes='webxr scene-viewer quick-look' camera-controls></model-viewer>", ttl: "Static", purpose: "Declarative cross-platform WebAR viewer tag supported on iOS and Android" },
        { type: "Asset Format", host: "assets/sofa.glb", value: "glTF 2.0 Binary (PBR materials, mesh normals, 2.4MB)", ttl: "Cached", purpose: "Industry-standard efficient 3D asset format for rapid web streaming" },
        { type: "WebXR Hit Test", host: "xrSession.requestHitTestSource()", value: "Intersection: x: 0.14m, y: -0.82m, z: -1.20m", ttl: "60fps", purpose: "Raycast aligns 3D asset directly onto physical floor plane" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Requiring users to download a 100MB native app from the App Store just to view a 3D product in AR",
        reality: "WebXR and WebAR allow users to launch AR experiences directly inside web browsers (Chrome, Safari) with zero installation friction."
      },
      {
        misconception: "Loading unoptimized 150MB raw CAD files directly onto a mobile web page for AR",
        reality: "Mobile browsers will freeze or crash; 3D models for WebAR must be optimized into lightweight glTF/GLB formats, usually under 5MB with compressed textures (KTX2/Basis Universal)."
      }
    ],

    relatedTopics: [
      { id: "virtual-reality-web", title: "Virtual Reality (VR) & 3D Web Immersive Spaces", unitId: "unit-5" },
      { id: "adaptive-interfaces", title: "Adaptive Interfaces: Beyond Responsive Design", unitId: "unit-5" }
    ],

    challenge: {
      id: "challenge-ar-01",
      title: "Select the Frictionless WebAR Solution",
      difficulty: "Intermediate",
      badge: "WebAR Engineer",
      description: "A luxury watch retailer wants online shoppers to preview watches on their wrists directly from mobile product pages, maximizing checkout conversion rates.",
      task: "What architectural strategy minimizes friction while supporting iOS and Android?",
      options: [
        { id: "opt-1", text: "Forcing customers to install a separate native app and create a new username and password.", correct: false, reason: "App installation causes massive drop-off rates in e-commerce funnels." },
        { id: "opt-2", text: "Embedding the standard `<model-viewer>` component with glTF/USDZ assets, leveraging the WebXR Device API and Quick Look directly in the browser.", correct: true, reason: "Zero-installation WebAR runs directly in Safari and Chrome, maximizing user engagement and conversion." },
        { id: "opt-3", text: "Emailing users a 3D CAD file that requires opening in AutoCAD desktop software.", correct: false, reason: "Completely unusable for regular mobile e-commerce shoppers." },
        { id: "opt-4", text: "Displaying a static black and white GIF animation with no interaction.", correct: false, reason: "Does not provide spatial 3D inspection or AR overlay." }
      ]
    },

    quiz: [
      {
        id: "ar-q1",
        question: "What is the official W3C standard API for accessing AR and VR hardware in web browsers?",
        options: [
          "WebXR Device API",
          "WebRTC Audio Stream API",
          "jQuery Mobile AR Plugin",
          "Flash 3D Player"
        ],
        correctIndex: 0,
        explanation: "The WebXR Device API is the official W3C standard for delivering immersive augmented and virtual reality experiences in the browser."
      },
      {
        id: "ar-q2",
        question: "What role does 'hit testing' play in an Augmented Reality web application?",
        options: [
          "It counts how many times users click on advertising banners.",
          "It casts a mathematical ray from the screen into the real-world 3D point cloud to find a physical surface for anchoring virtual objects.",
          "It scans computer files for computer viruses.",
          "It measures the battery temperature of the mobile phone."
        ],
        correctIndex: 1,
        explanation: "Hit testing calculates the physical 3D plane (floor, table) intersected by a camera ray, allowing the web app to anchor virtual models accurately."
      },
      {
        id: "ar-q3",
        question: "Which file format is considered the 'JPEG of 3D' for efficient web delivery in WebAR and WebXR?",
        options: [
          "glTF / GLB (GL Transmission Format)",
          "Microsoft Word (.docx)",
          "Adobe Photoshop (.psd)",
          "CSV Spreadsheet (.csv)"
        ],
        correctIndex: 0,
        explanation: "glTF (GL Transmission Format) and its binary variant GLB are optimized specifically for low file size, fast GPU decoding, and web transmission."
      }
    ]
  },

  // ==========================================
  // TOPIC 7: VIRTUAL REALITY (VR) IN WEB
  // ==========================================
  "virtual-reality-web": {
    id: "virtual-reality-web",
    unitId: "unit-5",
    unitNumber: 5,
    unitTitle: "Unit 5: The Future Web Lab — AI, DWeb, IoT & Immersive Web",
    title: "Virtual Reality (VR) & 3D Web Immersive Spaces",
    subtitle: "Spatial computing, WebGL/WebGPU shaders, stereoscopic rendering, and 6DoF virtual environments",
    difficulty: "Intermediate",
    estimatedMinutes: 16,
    badge: "WebVR & 3D",

    definition: "Virtual Reality (VR) in the web encompasses completely immersive 3D synthetic environments generated in real time inside a web browser. Powered by the WebXR Device API and hardware-accelerated graphics pipelines (WebGL and WebGPU), WebVR delivers stereoscopic displays (separate viewpoints for each eye) to VR headsets (e.g. Meta Quest, Apple Vision Pro, HTC Vive) as well as fallback interactive 3D spatial navigation on standard desktop monitors and mobile devices.",

    whyItMatters: "WebVR democratizes virtual worlds and spatial computing. In contrast to proprietary closed ecosystems that require multi-gigabyte software installs through centralized app stores, WebVR worlds are accessible via standard URLs. A user can step inside an architectural visualization, an interactive flight simulator, or a remote medical training laboratory simply by opening a hyperlink inside a VR headset's browser.",

    explanation: [
      {
        heading: "Stereoscopic Rendering & 6 Degrees of Freedom (6DoF)",
        content: "To create the illusion of physical immersion, WebVR executes stereoscopic rendering:\n- Two Viewports: The GPU renders the 3D scene twice per frame from slightly offset camera positions matching the user's interpupillary distance (IPD). This parallax produces true depth perception.\n- 3DoF vs. 6DoF: 3 Degrees of Freedom tracks only head rotation (Pitch, Yaw, Roll—looking around from a fixed spot). 6 Degrees of Freedom tracks both rotation AND translation (X, Y, Z—physically walking around inside the virtual space).\n- High Frame Rates: VR requires steady 72, 90, or 120 FPS rendering to prevent motion sickness (vestibulo-ocular conflict)."
      },
      {
        heading: "Graphics Pipeline: WebGL vs. WebGPU",
        content: "High-fidelity WebVR relies on efficient browser graphics pipelines:\n- WebGL (OpenGL ES 2.0/3.0 mapping): Mature, supported across all browsers for over a decade. Single-threaded CPU binding creates bottlenecks when rendering complex scenes with thousands of draw calls.\n- WebGPU: The modern successor designed for contemporary GPUs (Vulkan, Metal, DirectX 12). Supports multi-threaded command recording, lower CPU overhead, and compute shaders for real-time particle physics and spatial audio simulations."
      },
      {
        heading: "Frameworks for WebVR Development",
        bullets: [
          "Three.js: The most popular lightweight JavaScript 3D library; provides camera controls, geometries, lights, and easy WebXR enablement via `renderer.xr.enabled = true`.",
          "A-Frame: A declarative web framework from Mozilla built on Three.js; lets developers create VR scenes using custom HTML markup like `<a-scene>`, `<a-box>`, and `<a-camera>`.",
          "Babylon.js: Microsoft's enterprise-grade 3D engine featuring advanced physically based rendering (PBR), collision physics, and built-in WebXR teleportation."
        ]
      }
    ],

    howItWorks: [
      { step: 1, title: "Device Handshake", subtitle: "XR System", description: "Browser queries `navigator.xr.isSessionSupported('immersive-vr')`." },
      { step: 2, title: "Session Acquisition", subtitle: "Stereoscopic Display", description: "Browser launches fullscreen dual-eye framebuffer for headset lenses." },
      { step: 3, title: "Pose Polling", subtitle: "6DoF Sensors", description: "Sensor loop polls headset and motion controller positions at 90Hz." },
      { step: 4, title: "Stereo Framebuffer", subtitle: "Double Draw Call", description: "Graphics engine draws scene twice per frame (left eye offset, right eye offset)." },
      { step: 5, title: "Spatial Interaction", subtitle: "Ray Controller", description: "User points hand controller; virtual ray interactor selects and manipulates 3D objects." }
    ],

    simulationType: "web-vr-sim",

    practicalExample: {
      scenario: "Declaring a Virtual Reality Scene using A-Frame Web Components",
      description: "Building an interactive virtual training room with standard HTML tags.",
      records: [
        { type: "HTML Declaration", host: "index.html", value: "<a-scene><a-sky color='#0f172a'></a-sky><a-box position='0 1.5 -3' rotation='0 45 0' color='#3b82f6'></a-box></a-scene>", ttl: "DOM", purpose: "Declarative 3D virtual environment parsed directly into Three.js scene graph" },
        { type: "Headset Binding", host: "navigator.xr.requestSession('immersive-vr')", value: "Session active: 90Hz stereoscopic viewports bound", ttl: "Active", purpose: "Presents zero-latency dual-lens projection to VR headset lenses" },
        { type: "Controller Ray", host: "raycaster.intersectObjects()", value: "Hit: object_id: 'box-01', distance: 2.8m", ttl: "90fps", purpose: "Spatial hand controller ray enables picking and manipulating objects in 3D" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Believing WebVR can only be viewed if you own an expensive $1,000 VR headset",
        reality: "WebVR scenes provide automatic fallback controls: users on desktop laptops navigate with mouse drag and WASD keys, and mobile users explore via device gyroscopes."
      },
      {
        misconception: "Allowing the VR render loop frame rate to drop below 60 FPS",
        reality: "In desktop web apps, dropping to 30 FPS causes slight visual stutter. In VR headsets, low or inconsistent frame rates cause severe motion sickness and nausea. Strict performance budgeting is essential."
      }
    ],

    relatedTopics: [
      { id: "augmented-reality-web", title: "Augmented Reality (AR) in the Web & WebXR", unitId: "unit-5" },
      { id: "adaptive-interfaces", title: "Adaptive Interfaces: Beyond Responsive Design", unitId: "unit-5" }
    ],

    challenge: {
      id: "challenge-vr-01",
      title: "Optimize WebVR Performance to Prevent Motion Sickness",
      difficulty: "Intermediate",
      badge: "WebVR Specialist",
      description: "A web development team builds a virtual museum gallery. In testing, users wearing VR headsets report dizziness because the frame rate drops to 42 FPS during complex room transitions.",
      task: "What engineering optimization immediately restores a smooth 90 FPS experience?",
      options: [
        { id: "opt-1", text: "Increasing all texture resolutions to uncompressed 8K bitmaps.", correct: false, reason: "Heavier textures drastically increase GPU memory bandwidth and worsen lag." },
        { id: "opt-2", text: "Reducing polygon draw calls, using texture atlasing, implementing frustum culling, and leveraging WebGPU instancing for repeated architectural assets.", correct: true, reason: "Reducing draw calls and culling unseen geometry frees GPU cycles, ensuring the strict 90 FPS threshold is maintained." },
        { id: "opt-3", text: "Disabling JavaScript completely and using static HTML tables.", correct: false, reason: "HTML tables cannot render 3D stereoscopic graphics." },
        { id: "opt-4", text: "Playing a loud siren audio track whenever the frame rate drops.", correct: false, reason: "Audio alerts do not resolve graphics performance bottlenecks." }
      ]
    },

    quiz: [
      {
        id: "vr-q1",
        question: "Why does WebVR require stereoscopic rendering?",
        options: [
          "To allow two different users to view the screen at the same time.",
          "To render two separate viewpoints offset by the user's eye distance, creating natural human 3D depth perception.",
          "Because HTML requires every tag to have an opening and closing pair.",
          "To display light mode and dark mode simultaneously."
        ],
        correctIndex: 1,
        explanation: "Stereoscopic rendering produces two camera viewpoints offset by interpupillary distance, stimulating binocular depth perception in VR headsets."
      },
      {
        id: "vr-q2",
        question: "What does '6DoF' (Six Degrees of Freedom) mean in spatial computing?",
        options: [
          "The user can track 6 different computer monitors on their desk.",
          "The system tracks both 3 rotational axes (Pitch, Yaw, Roll) and 3 translational axes (moving Forward/Back, Up/Down, Left/Right).",
          "The computer has 6 gigabytes of graphics RAM.",
          "The application supports 6 different European languages."
        ],
        correctIndex: 1,
        explanation: "6DoF captures complete spatial movement: 3 orientations (rotation) plus 3 translational directions (physical walking)."
      },
      {
        id: "vr-q3",
        question: "Why is maintaining a high, consistent frame rate (72Hz–120Hz) critical in WebVR applications?",
        options: [
          "To prevent motion sickness caused by latency between user head movement and visual display updates.",
          "Because web browsers automatically close if the frame rate dips.",
          "To speed up database search queries.",
          "Because CSS animations only work at 90 frames per second."
        ],
        correctIndex: 0,
        explanation: "Low frame rates or latency in VR headsets cause vestibulo-ocular conflict, where inner-ear balance signals contradict visual signals, causing severe nausea."
      }
    ]
  },

  // ==========================================
  // TOPIC 8: SMART WEB
  // ==========================================
  "smart-web-context": {
    id: "smart-web-context",
    unitId: "unit-5",
    unitNumber: 5,
    unitTitle: "Unit 5: The Future Web Lab — AI, DWeb, IoT & Immersive Web",
    title: "Smart Web: Context-Aware Autonomous Applications",
    subtitle: "The convergence formula: Context + Data + AI + Automation = Proactive User Experiences",
    difficulty: "Intermediate",
    estimatedMinutes: 18,
    badge: "Smart Web",

    definition: "The Smart Web is an architectural paradigm where web applications dynamically sense environmental, device, and behavioral context, process real-time data using machine learning, and autonomously execute actions to deliver frictionless, predictive experiences. Formalized through the formula: [Context + Data + AI + Automation = Smart Experience], this paradigm elevates web software from passive digital forms to proactive contextual assistants.",

    whyItMatters: "Traditional web applications treat every visitor as an anonymous user sitting at an identical desk under identical lighting conditions. In reality, modern users access web apps across fluctuating environments: driving a car at night, walking in glaring outdoor sunlight, managing noisy industrial factory floors, or working under depleted mobile battery power. Smart Web applications automatically calibrate contrast, input modalities, data prefetching, and alert thresholds to match the user's live physical situation.",

    explanation: [
      {
        heading: "Deconstructing the Smart Web Equation",
        content: "Every genuine Smart Web experience synthesizes four foundational layers:\n1. Context (The Sensorium): Capturing ambient light levels, device orientation, geolocation, network connection speed (Network Information API), battery state (Battery Status API), and schedule.\n2. Data (The Memory): Historical usage logs, preferences, relational data, and domain knowledge graphs.\n3. AI (The Reasoning): Classification models and rules engines that infer user intent from contextual signals (e.g. detecting that a user is commuting vs studying).\n4. Automation (The Execution): Proactive execution of tasks without requiring manual user navigation or multiple button clicks."
      },
      {
        heading: "Web APIs Enabling Context Awareness",
        content: "Modern W3C browser APIs provide rich environmental context hooks:\n- Ambient Light Sensor API: Reports illuminance (lux) around the device to dynamically alter theme contrast.\n- Network Information API (`navigator.connection`): Inspects downlink speed and round-trip time (RTT), automatically disabling heavy video autoplay when on slow cellular networks.\n- Geolocation API: Delivers coordinates for hyper-local services and automated regional currency / timezone formatting.\n- Page Visibility API (`document.visibilityState`): Pauses non-critical WebSockets or polling when the user switches tabs, conserving battery life."
      },
      {
        heading: "Proactive vs. Reactive User Experiences",
        bullets: [
          "Reactive (Legacy Web): User experiences a problem, searches for the help page, navigates menus, and submits a support ticket.",
          "Proactive (Smart Web): The application detects an API transaction failure, automatically executes an idempotent retry, selects an alternate gateway, and displays an informative banner with zero user effort.",
          "Predictive Prefetching: The browser predicts the next navigation target based on cursor trajectory or scroll velocity, pre-warming DNS and fetching assets ahead of time."
        ]
      }
    ],

    howItWorks: [
      { step: 1, title: "Context Capture", subtitle: "W3C Sensor APIs", description: "Browser hooks harvest ambient lux, network type, battery level, and user schedule." },
      { step: 2, title: "State Aggregation", subtitle: "Context Engine", description: "Signals are normalized into a unified contextual snapshot vector." },
      { step: 3, title: "Intent Inference", subtitle: "Predictive Rule/AI", description: "Engine determines whether the user is driving, working outdoors, or in a meeting." },
      { step: 4, title: "Autonomous Action", subtitle: "Client Orchestration", description: "System adjusts theme contrast, throttles non-essential polling, or prefetches documents." },
      { step: 5, title: "Frictionless Presentation", subtitle: "Adaptive DOM", description: "Interface updates unobtrusively with relevant contextual actions front and center." }
    ],

    simulationType: "smart-web-sim",

    practicalExample: {
      scenario: "Real-Time Context Adaptation for Field Service Engineers",
      description: "How an inspection web app adapts when an engineer steps out of a dark tunnel into bright sunlight.",
      records: [
        { type: "Ambient Sensor", host: "window.AmbientLightSensor", value: "illuminance: 84,000 lux (Direct sunlight)", ttl: "Live", purpose: "Detects blinding outdoor glare" },
        { type: "Adaptive Trigger", host: "document.documentElement", value: "classList.add('high-contrast-outdoor-mode')", ttl: "Event", purpose: "Immediately increases text contrast to 12:1 and boldens iconography" },
        { type: "Network Sensor", host: "navigator.connection", value: "effectiveType: '2g', saveData: true", ttl: "Stream", purpose: "Switches from 4K image gallery to vector wireframes to save mobile data" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Assuming 'Smart Web' means annoying pop-up chatbots that interrupt users on every page load",
        reality: "Smart Web is subtle, ambient, and proactive; it eliminates friction behind the scenes (contrast adjustment, intelligent caching, automated error recovery) rather than creating intrusive disruptions."
      },
      {
        misconception: "Ignoring battery consumption when running continuous sensor polling in client JavaScript",
        reality: "Continuous sensor polling rapidly drains mobile device batteries. Efficient Smart Web apps use interrupt-driven event listeners and suspend polling when tabs are inactive."
      }
    ],

    relatedTopics: [
      { id: "adaptive-interfaces", title: "Adaptive Interfaces: Beyond Responsive Design", unitId: "unit-5" },
      { id: "ai-powered-web", title: "AI-Powered Web & Dynamic Personalization", unitId: "unit-5" }
    ],

    challenge: {
      id: "challenge-sw-01",
      title: "Synthesize Context Signals for Intelligent Adaptation",
      difficulty: "Intermediate",
      badge: "Smart Web Engineer",
      description: "A delivery driver uses a web dashboard mounted to their scooter handlebar. As sunset approaches, the driver enters an underground tunnel where network reception drops to zero.",
      task: "How should a genuine Smart Web application autonomously adapt?",
      options: [
        { id: "opt-1", text: "Display an unclosable full-screen error modal saying 'NO INTERNET' and crash the tab.", correct: false, reason: "Terrible UX that endangers the driver." },
        { id: "opt-2", text: "Detect low ambient light via sensors, switch to high-contrast dark mode, enable offline IndexedDB queueing, and vocalize delivery instructions via the Web Speech API.", correct: true, reason: "Seamlessly synthesizes environmental context (darkness), network context (offline), and hands-free usability." },
        { id: "opt-3", text: "Reload the page 50 times per second until the server responds.", correct: false, reason: "Crashes the browser and drains the battery." },
        { id: "opt-4", text: "Pop up a marketing survey asking the driver to rate their experience.", correct: false, reason: "Extremely distracting and hazardous." }
      ]
    },

    quiz: [
      {
        id: "sw-q1",
        question: "What is the four-component formula defining the Smart Web paradigm?",
        options: [
          "HTML + CSS + JavaScript + PHP",
          "Context + Data + AI + Automation = Smart Experience",
          "CPU + GPU + RAM + Hard Drive",
          "Header + Nav + Article + Footer"
        ],
        correctIndex: 1,
        explanation: "The Smart Web equation integrates Context (sensing), Data (knowledge), AI (reasoning), and Automation (execution) to create proactive experiences."
      },
      {
        id: "sw-q2",
        question: "Which browser API allows a web application to detect when a user has switched away to another desktop tab, allowing non-essential polling to pause?",
        options: [
          "Page Visibility API (`document.visibilityState`)",
          "Web Bluetooth API",
          "Vibration API",
          "WebGL Shader Pipeline"
        ],
        correctIndex: 0,
        explanation: "The Page Visibility API notifies developers when a document is hidden or visible, allowing applications to conserve CPU and network resources when backgrounded."
      },
      {
        id: "sw-q3",
        question: "How does proactive web architecture differ fundamentally from reactive web architecture?",
        options: [
          "Proactive web apps anticipate user requirements and remediate issues autonomously; reactive apps wait for explicit user inputs or errors.",
          "Proactive web apps only run on Saturdays.",
          "Reactive web apps can only be written in Python.",
          "There is no difference; they are marketing synonyms."
        ],
        correctIndex: 0,
        explanation: "Proactive systems anticipate needs and resolve disruptions automatically in the background, whereas reactive systems only respond when explicitly prompted by user actions."
      }
    ]
  },

  // ==========================================
  // TOPIC 9: ADAPTIVE INTERFACES
  // ==========================================
  "adaptive-interfaces": {
    id: "adaptive-interfaces",
    unitId: "unit-5",
    unitNumber: 5,
    unitTitle: "Unit 5: The Future Web Lab — AI, DWeb, IoT & Immersive Web",
    title: "Adaptive Interfaces: Beyond Responsive Design",
    subtitle: "Contextual ergonomics, accessibility media queries, container queries, and fluid multi-modal layouts",
    difficulty: "Beginner",
    estimatedMinutes: 16,
    badge: "Adaptive UI",

    definition: "Adaptive Interfaces represent an evolution beyond traditional responsive web design. While responsive design focuses primarily on resizing elements to fit screen viewport widths (via `@media (max-width: 768px)`), adaptive interfaces calibrate to the user's physical capabilities, cognitive needs, input ergonomics, and environmental context. This includes respecting system accessibility preferences (`prefers-reduced-motion`, `prefers-contrast`), adapting to container widths (`@container`), fluid typography (`clamp()`), and switching between touch, pointer, and voice input modalities.",

    whyItMatters: "A website that simply shrinks desktop columns into a single mobile column is not truly accessible or context-aware. A user navigating with high motor tremors needs larger hit targets; a user with vestibular disorders can suffer severe physical vertigo from parallax animations; an elderly user needs legible contrast and enlarged typography. Modern web engineering crafts interfaces that seamlessly adapt to human requirements rather than forcing humans to adapt to rigid software.",

    explanation: [
      {
        heading: "Responsive Design vs. Adaptive Interfaces",
        content: "Understanding the distinction between responsive and adaptive design:\n- Responsive Design: Elastic layouts that scale based on viewport pixel dimensions (e.g. desktop 1200px vs tablet 768px vs mobile 375px).\n- Adaptive Design: Context-aware layouts that adapt based on user preferences and capabilities:\n  1. User Accessibility: High-contrast themes, reduced animation, enlarged typography.\n  2. Component Context: Container Queries (`@container`) allowing widgets to adapt according to their parent container rather than the global window size.\n  3. Input Ergonomics: Increasing touch target dimensions to at least 48x48px on touchscreen devices while allowing compact information density for precise mouse pointers."
      },
      {
        heading: "Crucial Modern CSS Preference Queries",
        content: "Modern browsers expose user operating system accessibility settings directly to CSS:\n- `@media (prefers-reduced-motion: reduce)`: Disables aggressive transitions, zooms, and auto-scrolling for users prone to vestibular motion sickness.\n- `@media (prefers-contrast: more)`: Boosts border definitions and text contrast to surpass WCAG AAA standards (7:1 ratio).\n- `@media (prefers-color-scheme: dark)`: Automatically serves dark mode tokens matching OS preferences.\n- `@container (min-width: 400px)`: Enables modular component styling independent of page-level layout grids."
      },
      {
        heading: "Fluid Typography with CSS clamp()",
        bullets: [
          "No More Jump Cuts: Instead of abrupt font-size changes at rigid media query breakpoints, fluid typography scales smoothly between minimum and maximum bounds.",
          "Syntax: `font-size: clamp(1rem, 2.5vw + 0.5rem, 2rem);` calculates font scale dynamically relative to screen width.",
          "User Zoom Resilient: Always include a relative unit (`rem`) inside `clamp()` so browser zoom settings function correctly."
        ]
      }
    ],

    howItWorks: [
      { step: 1, title: "Capability Query", subtitle: "CSS Media / OS", description: "Browser detects user OS preferences (contrast, motion, dark mode, font scale)." },
      { step: 2, title: "Container Evaluation", subtitle: "CSS Container Queries", description: "Each component inspects its parent container dimensions rather than viewport width." },
      { step: 3, title: "Ergonomic Calibration", subtitle: "Pointer / Touch", description: "Input modality media queries (`@media (pointer: coarse)`) enlarge tap targets." },
      { step: 4, title: "Fluid Font Scaling", subtitle: "CSS clamp()", description: "Typography scales smoothly across screen sizes without abrupt layout shifts." },
      { step: 5, title: "Render Adaptation", subtitle: "WCAG Compliant DOM", description: "Interface renders with optimal contrast, zero vertigo triggers, and comfortable interaction targets." }
    ],

    simulationType: "adaptive-interface-sim",

    practicalExample: {
      scenario: "Accessibility-First Adaptive CSS Component",
      description: "Implementing an interactive card that respects reduced motion and high contrast.",
      records: [
        { type: "CSS Rule", host: "styles.css", value: "@media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }", ttl: "Static", purpose: "Instantly protects users with vestibular disorders from nausea" },
        { type: "Contrast Rule", host: "styles.css", value: "@media (prefers-contrast: more) { .card { border: 2px solid #000; color: #000; background: #fff; } }", ttl: "Static", purpose: "Enforces 14:1 maximum contrast ratio for visually impaired readers" },
        { type: "Touch Target", host: "styles.css", value: "@media (pointer: coarse) { button { min-height: 48px; min-width: 48px; } }", ttl: "Static", purpose: "Guarantees WCAG 2.2 touch target sizing on mobile finger taps" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Designing only for viewport width and ignoring user accessibility settings like prefers-reduced-motion",
        reality: "Ignoring reduced motion can trigger severe vertigo and nausea in users with vestibular disorders. Respecting OS accessibility queries is a fundamental requirement of professional web development."
      },
      {
        misconception: "Using fixed pixel units (`px`) for font sizes instead of relative units (`rem`, `em`, `clamp()`)",
        reality: "Hardcoding pixel typography prevents visually impaired users from enlarging text via their browser default zoom settings, breaking accessibility compliance."
      }
    ],

    relatedTopics: [
      { id: "smart-web-context", title: "Smart Web: Context-Aware Autonomous Applications", unitId: "unit-5" },
      { id: "ai-powered-web", title: "AI-Powered Web & Dynamic Personalization", unitId: "unit-5" }
    ],

    challenge: {
      id: "challenge-ai-01",
      title: "Implement WCAG-Compliant Motion Accessibility",
      difficulty: "Beginner",
      badge: "A11y Specialist",
      description: "A customer onboarding page has an energetic 3D spinning logo animation that auto-plays continuously. A user with a vestibular balance disorder visits the site.",
      task: "What is the mandatory CSS implementation to protect this user from dizziness?",
      options: [
        { id: "opt-1", text: "Increasing the rotation speed from 2 seconds to 0.5 seconds.", correct: false, reason: "Faster spinning worsens vestibular triggers." },
        { id: "opt-2", text: "Wrapping the animation in `@media (prefers-reduced-motion: reduce)` to disable rotation and render a clean, static image when the user's OS requests reduced motion.", correct: true, reason: "Respects the user's explicit operating system motion preference and prevents physical discomfort." },
        { id: "opt-3", text: "Making the spinning logo brighter neon green.", correct: false, reason: "Color changes do not address motion sickness." },
        { id: "opt-4", text: "Deleting all CSS styles and serving only unstyled black text.", correct: false, reason: "Unnecessary; CSS provides targeted preference media queries." }
      ]
    },

    quiz: [
      {
        id: "ai-q1",
        question: "How do CSS Container Queries (`@container`) improve on traditional Viewport Media Queries (`@media`)?",
        options: [
          "They allow individual UI components to adapt based on the size of their direct parent container rather than the overall browser window.",
          "They automatically compress image files into ZIP archives.",
          "They eliminate the need for HTML markup.",
          "They only function when running inside Docker containers."
        ],
        correctIndex: 0,
        explanation: "Container Queries allow a component (like a card) to adapt its internal layout based on the width of its parent container, making widgets truly reusable across sidebars and main content areas."
      },
      {
        id: "ai-q2",
        question: "What is the recommended minimum touch target size for mobile web accessibility under WCAG guidelines?",
        options: [
          "8x8 pixels",
          "48x48 CSS pixels (or 44x44 points in iOS standards)",
          "500x500 pixels",
          "1x1 pixel"
        ],
        correctIndex: 1,
        explanation: "WCAG guidelines recommend interactive touch targets be at least 48x48 CSS pixels (44x44 in iOS) to ensure users can comfortably tap them without accidental misclicks."
      },
      {
        id: "ai-q3",
        question: "What does the CSS `clamp()` function accomplish when applied to typography?",
        options: [
          "It forces all fonts to render exclusively in Comic Sans.",
          "It smoothly scales font size between an explicit minimum, a fluid preferred value, and an explicit maximum.",
          "It locks the keyboard so the user cannot type.",
          "It disables italic font styles."
        ],
        correctIndex: 1,
        explanation: "`clamp(MIN, VAL, MAX)` provides fluid typography that scales proportionally with the viewport while strictly honoring minimum and maximum constraints."
      }
    ]
  },

  // ==========================================
  // TOPIC 10: WEB AUTOMATION WORKFLOWS
  // ==========================================
  "web-automation-workflows": {
    id: "web-automation-workflows",
    unitId: "unit-5",
    unitNumber: 5,
    unitTitle: "Unit 5: The Future Web Lab — AI, DWeb, IoT & Immersive Web",
    title: "Web Automation, Webhooks & Autonomous Workflows",
    subtitle: "Event-driven architecture, webhook delivery, headless browser automation, and multi-step pipeline orchestration",
    difficulty: "Intermediate",
    estimatedMinutes: 18,
    badge: "Automation & Webhooks",

    definition: "Web Automation encompasses the technologies and protocols that allow web applications to execute multi-step workflows, process data, and communicate across disparate software services without manual human intervention. This spans event-driven webhooks (reverse HTTP push notifications), background task queues, autonomous robotic process automation (RPA), and headless browser automation (e.g. Playwright, Puppeteer) structured around the declarative logic pipeline: Trigger -> Condition -> Action -> Result.",

    whyItMatters: "Modern web businesses rely on hundreds of specialized Software-as-a-Service (SaaS) APIs: Stripe for payments, SendGrid for transactional email, GitHub for source code, and Slack for notifications. Without web automation, employees would spend thousands of hours manually copying data between systems. Webhooks and event-driven automation turn the open web into a programmable, self-orchestrating computational fabric.",

    explanation: [
      {
        heading: "API Polling vs. Webhooks (Reverse HTTP)",
        content: "Contrasting how services synchronize state changes:\n- Polling (Inefficient): Service A sends an HTTP GET request to Service B every 60 seconds: 'Did Alice pay yet?' 99% of requests return 'No', wasting network bandwidth, battery, and server compute cycles.\n- Webhooks (Event-Driven Push): Service A provides an HTTP callback endpoint (e.g. `https://mysite.com/webhooks/stripe`). The exact second Alice pays, Service B dispatches an asynchronous HTTP POST carrying the JSON payment payload. Service A receives instant notification with zero wasted polling."
      },
      {
        heading: "The Declarative Pipeline: Trigger -> Condition -> Action -> Result",
        content: "Automation architectures standardize multi-service orchestration into four stages:\n1. Trigger (The Event): An external state change occurs (e.g. 'Webhook received: payment_intent.succeeded', 'Form submitted', 'Cron schedule fired').\n2. Condition (The Filter): Logical expressions evaluate whether the action should proceed (e.g. 'IF payment.amount > 500 AND customer.country == US').\n3. Action (The Mutation): The system executes downstream operations (e.g. 'Generate PDF invoice', 'Write to database', 'Send Slack alert').\n4. Result / Log (The Verification): Execution status is recorded in an idempotent audit trail with automatic retry mechanisms."
      },
      {
        heading: "Webhook Security: HMAC Signatures & Idempotency",
        bullets: [
          "HMAC SHA-256 Signatures: Webhook senders hash the payload using a shared secret and include it in a header (`X-Hub-Signature-256`). Receivers verify the signature to ensure payloads are authentic and untampered.",
          "Idempotency Keys: Networks can duplicate packets. Receivers track unique transaction IDs to ensure an action (e.g. charging a card or shipping an item) is never executed twice for the same event.",
          "Asynchronous Acknowledgement: Webhook handlers immediately return HTTP 200 OK before queuing heavy work to background workers, preventing sender timeouts."
        ]
      }
    ],

    howItWorks: [
      { step: 1, title: "Event Occurrence", subtitle: "External SaaS", description: "Payment succeeds or user registers in upstream service." },
      { step: 2, title: "HMAC Signed Dispatch", subtitle: "Webhook POST", description: "Sender hashes payload and dispatches HTTP POST to registered callback URL." },
      { step: 3, title: "Cryptographic Verification", subtitle: "Receiver Endpoint", description: "Receiver calculates HMAC signature; if valid, immediately responds HTTP 200." },
      { step: 4, title: "Condition & Filtering", subtitle: "Workflow Engine", description: "Rule engine evaluates triggers and decides if downstream actions should fire." },
      { step: 5, title: "Action Execution", subtitle: "Background Task", description: "Worker generates invoices, updates databases, and pushes notifications." }
    ],

    simulationType: "web-automation-sim",

    practicalExample: {
      scenario: "Automated E-Commerce Order Processing Workflow",
      description: "How a webhook triggers inventory reservation, invoice generation, and SMS notification.",
      records: [
        { type: "Incoming Webhook", host: "POST /api/webhooks/orders", value: "{\"event\": \"order.paid\", \"id\": \"ord_9041\", \"amount\": 120.00}", ttl: "Event", purpose: "Stripe pushes payment success event with HMAC signature" },
        { type: "Condition Check", host: "rules.engine.eval()", value: "condition: amount > 100 -> TRUE (VIP workflow active)", ttl: "2ms", purpose: "Automated routing directs high-value order to priority queue" },
        { type: "Dispatched Action", host: "POST api.logistics.com/ship", value: "{\"order_id\": \"ord_9041\", \"carrier\": \"Express\"}", ttl: "Async", purpose: "Warehouse API automatically schedules same-day dispatch" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Performing long-running tasks (like resizing 20 images or training an AI model) synchronously inside the webhook endpoint handler",
        reality: "Webhook providers have strict timeouts (usually 5 seconds). If your endpoint does not return HTTP 200 within that window, the sender marks the webhook as failed and repeatedly retries. Always return HTTP 200 immediately and hand off heavy work to a background queue."
      },
      {
        misconception: "Accepting webhook payloads without verifying the sender's HMAC cryptographic signature",
        reality: "Without signature verification, any attacker can send fake HTTP POST requests to your endpoint and forge unauthorized purchases, account creations, or data modifications."
      }
    ],

    relatedTopics: [
      { id: "smart-web-context", title: "Smart Web: Context-Aware Autonomous Applications", unitId: "unit-5" },
      { id: "impact-5g-web", title: "Impact of 5G & Edge Computing on Web Technologies", unitId: "unit-5" }
    ],

    challenge: {
      id: "challenge-auto-01",
      title: "Secure an Incoming Webhook Architecture",
      difficulty: "Intermediate",
      badge: "Automation Architect",
      description: "An online banking platform receives webhook notifications from an international payments network. A security audit discovers that the endpoint currently accepts all incoming JSON payloads without verification.",
      task: "What architectural defense must be implemented immediately?",
      options: [
        { id: "opt-1", text: "Hiding the webhook URL in an HTML comment tag.", correct: false, reason: "Security through obscurity is completely ineffective." },
        { id: "opt-2", text: "Verifying the incoming HMAC SHA-256 signature against the raw payload bytes using a shared cryptographic secret, and enforcing idempotency keys to prevent replay attacks.", correct: true, reason: "Cryptographic HMAC verification guarantees authenticity and integrity, while idempotency keys block replay duplication." },
        { id: "opt-3", text: "Turning off HTTPS and switching to unencrypted HTTP port 80.", correct: false, reason: "This destroys transport encryption and invites eavesdropping." },
        { id: "opt-4", text: "Asking users to manually verify every single payment via phone call.", correct: false, reason: "Defeats the entire purpose of automated webhooks." }
      ]
    },

    quiz: [
      {
        id: "auto-q1",
        question: "Why are webhooks (reverse HTTP push) vastly superior to client polling for real-time service synchronization?",
        options: [
          "Webhooks make HTML pages load with 3D graphics.",
          "Webhooks push data instantly the moment an event occurs, eliminating thousands of wasteful empty polling requests.",
          "Webhooks only function on Windows 95 computers.",
          "Polling is illegal under internet regulations."
        ],
        correctIndex: 1,
        explanation: "Webhooks are event-driven: the sender dispatches data immediately upon state mutation, eliminating wasteful periodic polling queries."
      },
      {
        id: "auto-q2",
        question: "How does a webhook receiving server verify that an incoming HTTP POST payload genuinely originated from an authorized provider (like GitHub or Stripe)?",
        options: [
          "By checking the sender's desktop wallpaper.",
          "By validating the cryptographic HMAC SHA-256 signature in the request headers against the raw request body using a shared secret.",
          "By asking the user for their birthdate.",
          "By inspecting if the request ends with `.html`."
        ],
        correctIndex: 1,
        explanation: "HMAC signatures allow the receiver to verify mathematical proof that the payload was created by the possessor of the shared secret and was not tampered with in transit."
      },
      {
        id: "auto-q3",
        question: "What is the purpose of an 'idempotency key' in web automation workflows?",
        options: [
          "To format dates into ISO 8601 format.",
          "To ensure that if a webhook or API command is accidentally retransmitted due to network retries, the operation is executed exactly once without duplicate processing.",
          "To speed up browser CSS font downloads.",
          "To change the color of buttons from blue to violet."
        ],
        correctIndex: 1,
        explanation: "Idempotency keys ensure that identical re-sent requests produce the same state outcome without causing duplicate charges, orders, or database rows."
      }
    ]
  },

  // ==========================================
  // TOPIC 11: IMPACT OF 5G ON WEB TECHNOLOGIES
  // ==========================================
  "impact-5g-web": {
    id: "impact-5g-web",
    unitId: "unit-5",
    unitNumber: 5,
    unitTitle: "Unit 5: The Future Web Lab — AI, DWeb, IoT & Immersive Web",
    title: "Impact of 5G & Edge Computing on Web Technologies",
    subtitle: "URLLC, eMBB, mMTC, network slicing, and Multi-access Edge Computing (MEC) in modern web architecture",
    difficulty: "Intermediate",
    estimatedMinutes: 16,
    badge: "5G & Edge Web",

    definition: "The impact of 5G on web technologies encompasses how 5th Generation wireless communications fundamentally reshape web application architecture. Beyond simply providing faster download speeds, 5G introduces three distinct architectural pillars defined by 3GPP: Enhanced Mobile Broadband (eMBB), Ultra-Reliable Low-Latency Communication (URLLC, achieving sub-5ms round-trip times), and Massive Machine-Type Communications (mMTC, connecting up to 1 million devices per km²). Coupled with Multi-access Edge Computing (MEC), 5G migrates server compute workloads directly to cellular base stations.",

    whyItMatters: "In earlier cellular generations (3G and 4G), high round-trip latency (50ms–150ms) forced web developers to build around caching, asset bundling, and deferred execution. Sub-5ms URLLC latency combined with edge nodes dissolves these architectural compromises. Complex 3D graphics rendering, real-time computer vision, autonomous vehicle telemetry, and cloud-streamed WebAssembly applications can execute with desktop-grade responsiveness anywhere in the physical world.",

    explanation: [
      {
        heading: "The Three Pillars of 5G Architecture",
        content: "Understanding how 5G transforms web applications requires analyzing its three core capabilities:\n1. eMBB (Enhanced Mobile Broadband): Peak data rates exceeding 10 Gbps (100x faster than 4G). Enables instantaneous streaming of 4K/8K video, high-density WebXR 3D point clouds, and large machine learning model downloads.\n2. URLLC (Ultra-Reliable Low-Latency Communication): End-to-end radio latency dropped below 1 millisecond with 99.999% reliability. Critical for telemedicine, interactive cloud gaming, industrial robotics control, and synchronized audio.\n3. mMTC (Massive Machine-Type Communications): Supports up to 1,000,000 connected devices per square kilometer (10x density over 4G). Enables pervasive smart city sensor grids streaming telemetry directly into web dashboards."
      },
      {
        heading: "Multi-Access Edge Computing (MEC) & Cloud Latency",
        content: "Traditional cloud architecture routes requests thousands of miles to centralized hyper-scale data centers (e.g. us-east-1 in Virginia):\n- Traditional Cloud: Client -> Radio Mast -> Metro Fiber -> National Backbone -> Hyper-scale Data Center (Round-trip time: 60ms–120ms).\n- 5G MEC Architecture: Client -> 5G Radio Mast -> Co-located Edge Compute Server (Round-trip time: 3ms–8ms). Web applications run containerized microservices at the cellular tower, enabling instantaneous response loops."
      },
      {
        heading: "Network Slicing in Web Development",
        bullets: [
          "Virtual Dedicated Networks: 5G allows carriers to partition physical network infrastructure into virtual 'slices' with custom Quality of Service (QoS) guarantees.",
          "Use Case Specialization: A web video stream runs on an eMBB high-throughput slice, while an emergency medical telemetry stream runs on a prioritized URLLC low-latency slice.",
          "Web Transport API: Modern browsers leverage HTTP/3 and WebTransport over QUIC to maximize 5G multipath throughput without head-of-line blocking."
        ]
      }
    ],

    howItWorks: [
      { step: 1, title: "5G Radio Access", subtitle: "Beamforming / mmWave", description: "Client mobile device establishes high-frequency connection to 5G small cell." },
      { step: 2, title: "Network Slice Selection", subtitle: "NSSF Core", description: "Cellular core assigns request to an optimized slice (URLLC or eMBB)." },
      { step: 3, title: "Edge Breakout", subtitle: "MEC Gateway", description: "Traffic breaks out directly at local edge servers without traversing national backbones." },
      { step: 4, title: "Sub-5ms Execution", subtitle: "Edge Microservice", description: "Edge node processes video frames or IoT telemetry and returns immediate results." },
      { step: 5, title: "Seamless Web Render", subtitle: "HTTP/3 & WebTransport", description: "Browser updates interface with zero perceptible input lag." }
    ],

    simulationType: "five-g-impact-sim",

    practicalExample: {
      scenario: "Real-Time Cloud XR Streaming over 5G MEC vs Centralized Cloud",
      description: "Comparing rendering latency when streaming interactive 3D graphics to lightweight smart glasses.",
      records: [
        { type: "4G Centralized Cloud", host: "us-east-1.cloud-render.com", value: "RTT: 92ms, Bandwidth: 18Mbps, Packet Loss: 2.1%", ttl: "Laggy", purpose: "Causes visible motion jitter and dizziness due to round-trip latency" },
        { type: "5G MEC Edge Node", host: "edge-tower-402.local-mec.net", value: "RTT: 4ms, Bandwidth: 850Mbps, Packet Loss: 0.001%", ttl: "Real-time", purpose: "Flawless 90fps 3D rendering computed at the cell tower and streamed instantly" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Assuming 5G is just 'slightly faster 4G' that only benefits video download speeds",
        reality: "5G's true architectural revolution is low latency (URLLC) and high device density (mMTC), which allow server compute workloads to move to cellular edge nodes and power real-time web applications."
      },
      {
        misconception: "Thinking high 5G bandwidth means developers can stop optimizing web assets",
        reality: "Network speeds fluctuate, and mobile device CPUs and batteries are still heavily constrained. Bloated JavaScript bundles will still cause sluggish main-thread parsing regardless of connection speed."
      }
    ],

    relatedTopics: [
      { id: "iot-web-development", title: "Internet of Things (IoT) in Web Development", unitId: "unit-5" },
      { id: "web40-future-web", title: "Web 4.0: The Intelligent & Symbiotic Web", unitId: "unit-5" }
    ],

    challenge: {
      id: "challenge-5g-01",
      title: "Architect an Ultra-Low-Latency Web Telemedicine System",
      difficulty: "Intermediate",
      badge: "5G Web Specialist",
      description: "A surgical robotics company is developing a web-based remote telesurgery application where a specialist surgeon controls surgical robotic arms across a city.",
      task: "Which 5G architectural features are mandatory to ensure patient safety?",
      options: [
        { id: "opt-1", text: "Using 3G dial-up fallback with standard HTTP/1.0 polling.", correct: false, reason: "3G latency is dangerously high (150ms+) and will cause surgical errors." },
        { id: "opt-2", text: "Deploying on a dedicated 5G URLLC network slice with Multi-access Edge Computing (MEC) to guarantee sub-5ms latency and 99.999% packet reliability.", correct: true, reason: "URLLC guarantees the ultra-low latency and deterministic reliability required for safety-critical remote surgical actuation." },
        { id: "opt-3", text: "Hosting the server on a free shared web hosting server in Australia.", correct: false, reason: "Routing surgical packets across international oceans introduces fatal latency." },
        { id: "opt-4", text: "Transmitting surgical commands via automated SMS text messages.", correct: false, reason: "SMS is completely non-real-time and lacks reliability." }
      ]
    },

    quiz: [
      {
        id: "5g-q1",
        question: "What does 'URLLC' stand for in 5G network architecture?",
        options: [
          "Ultra-Reliable Low-Latency Communication",
          "Universal Resource Location Link Controller",
          "Unified Radio Long Range Circuit",
          "User Request Level Language Code"
        ],
        correctIndex: 0,
        explanation: "URLLC stands for Ultra-Reliable Low-Latency Communication, the 5G standard designed for mission-critical sub-millisecond network responsiveness."
      },
      {
        id: "5g-q2",
        question: "How does Multi-access Edge Computing (MEC) fundamentally reduce web latency?",
        options: [
          "By deploying compute servers directly at local cellular base stations, eliminating long-distance transit across national backbones.",
          "By compressing HTML into MP3 audio files.",
          "By forcing users to stand directly next to a Wi-Fi router.",
          "By turning off all encryption algorithms."
        ],
        correctIndex: 0,
        explanation: "MEC places cloud compute resources at the edge of the mobile network (cell towers), reducing round-trip latency from 80ms+ down to under 5ms."
      },
      {
        id: "5g-q3",
        question: "What is 'network slicing' in 5G cellular systems?",
        options: [
          "Physically cutting fiber optic cables with scissors.",
          "Creating multiple isolated virtual networks on shared physical infrastructure, each optimized for specific bandwidth, latency, or security guarantees.",
          "Dividing a web page into equal columns using CSS grid.",
          "Splitting a domain name into subdomains."
        ],
        correctIndex: 1,
        explanation: "Network slicing partitions physical 5G infrastructure into independent virtual networks tailored for specific application needs (e.g. low-latency vs high-throughput)."
      }
    ]
  },

  // ==========================================
  // TOPIC 12: UNIT 5 CAPSTONE LAB
  // ==========================================
  "unit5-future-web-lab": {
    id: "unit5-future-web-lab",
    unitId: "unit-5",
    unitNumber: 5,
    unitTitle: "Unit 5: The Future Web Lab — AI, DWeb, IoT & Immersive Web",
    title: "Capstone Lab: Build the Future Web Laboratory",
    subtitle: "Integrate AI, DWeb, IoT Telemetry, Blockchain Verifiability, and Adaptive UI into an autonomous smart hub",
    difficulty: "Advanced",
    estimatedMinutes: 25,
    badge: "Future Web Architect",

    definition: "The Capstone Lab unites all foundational concepts of Unit 5 into an interactive full-stack architecture laboratory: 'BUILD THE FUTURE WEB'. Students configure, interconnect, and stress-test five interdependent technologies: an AI Personalization Engine, an IoT Telemetry Gateway, an Edge MEC Content Network, a Cryptographic Blockchain Ledger, and an Adaptive WCAG UI. Successfully balancing all subsystems awards the Unit 5 Master Credential.",

    whyItMatters: "In real-world engineering, modern web technologies do not exist in isolation. An autonomous smart city platform must ingest IoT sensor telemetry, verify compliance using cryptographic blockchain ledgers, optimize rendering via edge computing, adapt layouts for mobile field workers, and personalize insights using machine learning. This capstone laboratory bridges theoretical understanding into comprehensive multi-system architectural synthesis.",

    explanation: [
      {
        heading: "Synthesizing the Future Web Application Stack",
        content: "The capstone architecture coordinates five distinct modern web paradigms:\n1. Intelligence Layer: Client-side AI recommendation algorithms and contextual prediction models.\n2. Perception & Actuation Layer: Simulated IoT sensors (energy, temperature, security) communicating over lightweight MQTT-over-WebSockets.\n3. Network & Edge Layer: 5G MEC routing that offloads intensive compute workloads with sub-5ms latency.\n4. Trust & Decentralization Layer: Cryptographic blockchain block hashing that guarantees tamper-evident record keeping.\n5. Presentation & Ergonomics Layer: Adaptive, WCAG AAA accessible user interface that responds to environmental conditions."
      },
      {
        heading: "The Interactive Capstone Engineering Challenges",
        content: "In the Build the Future Web simulator, students must execute four sequential architectural challenges:\n1. System Genesis: Initialize edge telemetry nodes and establish authenticated WebSocket pipelines.\n2. Consensus Security: Mine and cryptographically verify blockchain transaction blocks, detecting injected tampering.\n3. Contextual Adaptation: Trigger dynamic environmental changes (high-glare sunlight, slow network) and verify proactive UI response.\n4. Autonomous Orchestration: Construct a Trigger -> Condition -> Action workflow linking IoT thermal alerts directly to automated edge cooling actuator commands."
      },
      {
        heading: "Unit 5 Comprehensive Diagnostic Examination",
        bullets: [
          "15 Comprehensive Questions: Rigorously testing Web 4.0 paradigms, client vs cloud AI, IPFS content addressing, blockchain block anatomy, MQTT vs HTTP, WebXR SLAM tracking, context awareness formulas, adaptive CSS media queries, and 5G network slicing.",
          "Instant Visual Feedback: Detailed academic explanations accompanying every question to consolidate mastery.",
          "Complete Unit 5 Mastery: Unlocks the Future Web Architect badge upon 100% completion."
        ]
      }
    ],

    howItWorks: [
      { step: 1, title: "Subsystem Boot", subtitle: "Micro-Architecture", description: "Initialize IoT sensors, Edge CDN, Blockchain node, AI engine, and UI." },
      { step: 2, title: "Telemetry Ingestion", subtitle: "Edge Streaming", description: "Simulated environmental sensors stream live telemetry over WebSockets." },
      { step: 3, title: "AI Inference & Ranking", subtitle: "Neural Vectorizer", description: "On-device intelligence scores alerts and personalizes dashboard views." },
      { step: 4, title: "Consensus Ledgering", subtitle: "Cryptographic Block", description: "Critical transactions are packaged, hashed, and appended to the immutable blockchain." },
      { step: 5, title: "Adaptive Presentation", subtitle: "Fluid WCAG DOM", description: "The interface calibrates contrast, target size, and layout to match environmental context." }
    ],

    simulationType: "build-future-web-lab",

    practicalExample: {
      scenario: "Full-Stack Future Web Architecture: Autonomous Microgrid Hub",
      description: "A municipal renewable microgrid autonomously balancing solar energy, battery telemetry, and market contracts.",
      records: [
        { type: "IoT Telemetry", host: "mqtt://grid.city/substation-4", value: "{\"solar_kw\": 1420, \"battery_charge\": 88%, \"demand\": 'HIGH'}", ttl: "Stream", purpose: "Microcontrollers stream real-time energy production to edge gateway" },
        { type: "AI Prediction", host: "webgpu.local/forecast", value: "Predict solar drop at 18:00; recommend pre-cooling grid", ttl: "Inference", purpose: "On-device neural model forecasts demand spike and triggers automation" },
        { type: "Blockchain Ledger", host: "smart_contract.settle()", value: "Block #54,102: tx_hash 0x7f2...a4 (1420 kWh verified)", ttl: "Immutable", purpose: "Automated green energy credit settlement recorded permanently on ledger" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Viewing modern web engineering as merely editing static HTML tags and basic CSS colors",
        reality: "Web engineering today is full-stack systems engineering: designing distributed P2P architectures, real-time telemetry pipelines, edge compute networks, and machine learning inference pipelines."
      },
      {
        misconception: "Treating accessibility and responsive design as an afterthought at the end of a project",
        reality: "True modern web engineering bakes accessibility, user preference queries, and context adaptation into the core foundation of every component from day one."
      }
    ],

    relatedTopics: [
      { id: "web40-future-web", title: "Web 4.0: The Intelligent & Symbiotic Web", unitId: "unit-5" },
      { id: "impact-5g-web", title: "Impact of 5G & Edge Computing on Web Technologies", unitId: "unit-5" }
    ],

    challenge: {
      id: "challenge-cap-01",
      title: "Synthesize the Unified Future Web Stack",
      difficulty: "Advanced",
      badge: "Master Architect",
      description: "You are tasked with designing an intelligent, context-aware disaster relief web application for emergency responders operating in hurricane-damaged coastal areas.",
      task: "Which unified architectural stack provides resilient communication, real-time sensing, and trust?",
      options: [
        { id: "opt-1", text: "A centralized WordPress website hosted on a single laptop in the flood zone.", correct: false, reason: "Single point of failure; floods will destroy the server." },
        { id: "opt-2", text: "Decentralized P2P mesh network (IPFS/Libp2p) for peer data sharing, WebAssembly/WebGPU offline AI for medical triage, lightweight MQTT over WebSockets for sensor telemetry, and an adaptive high-contrast offline-first web UI.", correct: true, reason: "Combines DWeb resilience, offline client AI, lightweight IoT protocols, and adaptive accessible ergonomics to survive harsh disconnected disaster environments." },
        { id: "opt-3", text: "An uncompressed 4K video stream running over dial-up telephone wires.", correct: false, reason: "Bandwidth mismatch that will never load." },
        { id: "opt-4", text: "Sending physical printed newspapers via bicycle messengers.", correct: false, reason: "Manual paper distribution is not a digital web architecture." }
      ]
    },

    quiz: [
      {
        id: "cap5-q1",
        question: "Why is Web 4.0 described as the 'Symbiotic Web'?",
        options: [
          "Because computers and humans interact proactively, with AI agents, ambient IoT sensors, and autonomous systems anticipating human needs.",
          "Because all web servers must be submerged in ocean water.",
          "Because websites can only be built using binary code 0 and 1.",
          "Because browsers only run on smartphones."
        ],
        correctIndex: 0,
        explanation: "Web 4.0 is conceptualized as symbiotic because proactive AI agents, ubiquitous sensors, and human intent seamlessly collaborate without constant explicit manual prompting."
      },
      {
        id: "cap5-q2",
        question: "What is the primary benefit of IPFS Content Identifiers (CIDs) over traditional HTTP URLs in decentralized web architectures?",
        options: [
          "CIDs allow files to be retrieved by cryptographic hash from any peer hosting the data, preventing single-point-of-failure 404 errors.",
          "CIDs make websites load without using any electricity.",
          "CIDs only work on computers made in Japan.",
          "CIDs allow web pages to be viewed without a screen."
        ],
        correctIndex: 0,
        explanation: "CIDs identify data by *what* it is (cryptographic hash) rather than *where* it is hosted, enabling resilient peer-to-peer retrieval even if the original origin server fails."
      },
      {
        id: "cap5-q3",
        question: "How does each block in a cryptographic blockchain maintain mathematical integrity with its predecessor?",
        options: [
          "By storing the exact SHA-256 cryptographic hash of the previous block inside its own block header.",
          "By using the same password for all user accounts.",
          "By saving an MP3 audio recording of the computer fan.",
          "By setting CSS display to flexbox."
        ],
        correctIndex: 0,
        explanation: "Each block explicitly incorporates `previousHash`. Altering any byte in an earlier block alters its hash, mathematically breaking all subsequent block links."
      },
      {
        id: "cap5-q4",
        question: "Which communication protocol is specifically optimized for low-power, constrained IoT microcontrollers with tiny 2-byte header overhead?",
        options: [
          "MQTT (Message Queuing Telemetry Transport)",
          "FTP (File Transfer Protocol)",
          "BGP (Border Gateway Protocol)",
          "SNMP (Simple Network Management Protocol)"
        ],
        correctIndex: 0,
        explanation: "MQTT was designed specifically for constrained devices with limited battery and bandwidth, utilizing a publish/subscribe architecture and headers as compact as 2 bytes."
      },
      {
        id: "cap5-q5",
        question: "What W3C API standard allows web developers to build cross-platform Augmented Reality (AR) and Virtual Reality (VR) applications directly in the browser?",
        options: [
          "WebXR Device API",
          "Web Audio API",
          "Geolocation API",
          "Clipboard API"
        ],
        correctIndex: 0,
        explanation: "The WebXR Device API provides unified access to immersive hardware, head tracking, stereoscopic rendering, and surface plane hit testing directly in the browser."
      },
      {
        id: "cap5-q6",
        question: "What does the equation [Context + Data + AI + Automation = Smart Experience] describe in modern web development?",
        options: [
          "The foundational formula of the Smart Web paradigm.",
          "The formula for calculating Bitcoin mining difficulty.",
          "The mathematical definition of CSS flexbox spacing.",
          "The algorithm used by Google Chrome to clear history."
        ],
        correctIndex: 0,
        explanation: "The Smart Web formula synthesizes environmental context, historical data, machine learning reasoning, and automated execution into proactive experiences."
      },
      {
        id: "cap5-q7",
        question: "Which CSS media query protects users with vestibular disorders from experiencing severe motion sickness and dizziness?",
        options: [
          "`@media (prefers-reduced-motion: reduce)`",
          "`@media (orientation: landscape)`",
          "`@media (min-width: 1200px)`",
          "`@media (hover: hover)`"
        ],
        correctIndex: 0,
        explanation: "`@media (prefers-reduced-motion: reduce)` allows web developers to disable vestibular-triggering animations when users have requested reduced motion in their operating system."
      },
      {
        id: "cap5-q8",
        question: "What is an incoming webhook in modern web application architecture?",
        options: [
          "An automated event-driven HTTP POST callback sent by an external service when a specific event occurs.",
          "A phishing email with an unsafe link.",
          "A JavaScript syntax error in an array loop.",
          "A physical hardware cable connecting two computers."
        ],
        correctIndex: 0,
        explanation: "Webhooks are reverse HTTP push notifications: when an event happens in an external service, it immediately dispatches an HTTP POST to your callback endpoint."
      },
      {
        id: "cap5-q9",
        question: "How do 5G URLLC and Multi-access Edge Computing (MEC) fundamentally transform cloud application performance?",
        options: [
          "By dropping round-trip network latency to sub-5ms by executing workloads at local cellular base stations.",
          "By eliminating the need for computers to have power supplies.",
          "By making all websites black and white.",
          "By forcing all users to connect through dial-up modems."
        ],
        correctIndex: 0,
        explanation: "URLLC and MEC co-locate compute resources at local cellular towers, slashing latency down to under 5ms and enabling real-time remote rendering and control."
      },
      {
        id: "cap5-q10",
        question: "What technology allows browsers to run small language models and computer vision neural networks with hardware acceleration directly on the client GPU?",
        options: [
          "WebGPU and WebAssembly (WASM)",
          "VBScript in Internet Explorer",
          "Flash ActionScript 2.0",
          "HTML4 Framesets"
        ],
        correctIndex: 0,
        explanation: "WebGPU and WebAssembly enable near-native hardware-accelerated compute shaders, allowing client-side deep learning models to run offline with zero server costs."
      },
      {
        id: "cap5-q11",
        question: "What is the recommended minimum touch target size under WCAG accessibility guidelines to prevent misclicks on touchscreens?",
        options: [
          "48x48 CSS pixels",
          "10x10 CSS pixels",
          "100x100 millimeters",
          "2x2 CSS pixels"
        ],
        correctIndex: 0,
        explanation: "WCAG guidelines recommend interactive touch targets be at least 48x48 CSS pixels to accommodate human fingertip ergonomics."
      },
      {
        id: "cap5-q12",
        question: "Why must webhook handlers verify the incoming HMAC SHA-256 signature in the request headers?",
        options: [
          "To prove that the payload was genuinely sent by the authorized provider and was not forged or altered by an attacker.",
          "To translate the payload from Spanish to English.",
          "To compress the JSON body with Gzip.",
          "To delete the server's database logs."
        ],
        correctIndex: 0,
        explanation: "HMAC signatures use a shared secret to provide cryptographic proof of authenticity and data integrity, preventing forged webhook requests."
      },
      {
        id: "cap5-q13",
        question: "What happens in an IPFS swarm when a client requests a file by its CID?",
        options: [
          "The client queries the Distributed Hash Table (DHT), finds nearest peers hosting the Merkle DAG blocks, downloads chunks in parallel, and verifies their cryptographic hashes.",
          "The client sends an email to the ICANN domain registrar.",
          "The computer turns off and restarts in safe mode.",
          "A single central server in California handles 100% of global downloads."
        ],
        correctIndex: 0,
        explanation: "The client uses the DHT to discover peers, downloads chunks in parallel via Bitswap, and verifies the integrity of each chunk mathematically against the CID."
      },
      {
        id: "cap5-q14",
        question: "What is 'network slicing' in 5G wireless networks?",
        options: [
          "Creating multiple isolated virtual networks on a shared physical infrastructure, each with custom latency, throughput, and reliability guarantees.",
          "Cutting ethernet cables into smaller pieces.",
          "Dividing a database table into partitions.",
          "Splitting a web page into multiple iframes."
        ],
        correctIndex: 0,
        explanation: "Network slicing allows operators to carve physical 5G infrastructure into custom virtual slices tailored for specific needs like low-latency telesurgery or high-bandwidth video."
      },
      {
        id: "cap5-q15",
        question: "What is the primary architectural purpose of a Digital Twin in IoT web systems?",
        options: [
          "Maintaining an interactive, real-time virtual software representation of a physical machine or system synchronized via telemetry.",
          "Printing two paper copies of every user manual.",
          "Having two monitors attached to a desktop computer.",
          "Running two versions of Windows simultaneously."
        ],
        correctIndex: 0,
        explanation: "A Digital Twin is a software representation that mirrors the real-time operational state, temperature, vibration, and lifecycle metrics of physical hardware."
      }
    ]
  }
};
