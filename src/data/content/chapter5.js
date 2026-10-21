/**
 * Chapter 5 Documentation Content: The Future Web — AI, Decentralization, IoT & Spatial Web
 */

export const CHAPTER_5_TOPICS = {
  '5.1-web40-future': {
    id: '5.1-web40-future',
    chapterId: 'chapter-5',
    chapterNumber: 5,
    chapterTitle: 'The Future Web — AI, Decentralization, IoT & Spatial Web',
    code: '5.1',
    title: 'Web 4.0: The Symbiotic & Intelligent Web',
    subtitle: 'Conceptual paradigm of proactive autonomous agents, context correlation, and ambient web systems',
    difficulty: 'Intermediate',
    readTime: '16 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'Web 4.0 represents the conceptual evolution toward an ambient, symbiotic web where human intelligence and machine intelligence interact seamlessly. Rather than requiring users to manually search for documents or navigate portals, Web 4.0 envisions autonomous AI agents that anticipate user intent, synthesize cross-domain data proactively, and execute multi-step tasks across interconnected systems.',
      analogy: 'Web 1.0 was a library where you walked through aisles reading quiet books. Web 2.0 was a bustling town square where you could speak, debate, and exchange letters. Web 3.0 was an interconnected semantic index and verifiable notary office. Web 4.0 is like having a proactive personal executive assistant walking beside you 24/7: when your plane is delayed 2 hours, your assistant has already rebooked your connecting train, notified your hotel, adjusted your dinner reservation, and turned on your home heater, all without you having to open an app.',
      keyPoints: [
        'Proactive vs. Reactive: Systems act before explicit commands based on contextual awareness and predictive telemetry.',
        'Symbiotic Interaction: Natural language, voice, eye-gaze tracking, neural interfaces, and ambient spatial computing replacing keyboards and touchscreens.',
        'Autonomous Agent Networks: Software agents negotiating and executing tasks autonomously via open agent communication protocols.',
        'Decentralized Intelligence: Edge-first AI inference running locally on devices without leaking private biometric data to centralized tech giants.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'Web 4.0 architectures transition from request-response server endpoints to continuous perception-action feedback loops mediated by local and distributed AI reasoning engines.',
      diagram: `
+-------------------------------------------------------------------------+
|                  Web 4.0 Autonomous Agent Architecture                  |
+-------------------------------------------------------------------------+
[Ambient Sensors & User Telemetry] (IoT, Geolocation, Biometrics, Calendar)
                   |
                   v
[Context Correlation Engine] (Local Vector Memory & Knowledge Graph)
                   |
                   v
[Autonomous AI Agent Core] (Reasoning, Task Planning & Decomposition)
                   |
        +----------+----------+
        |                     |
        v                     v
[Local Edge Actuators]   [Decentralized Web APIs / Webhooks]
(Smart Home, Display)    (Airlines, Banks, Calendars, Services)
`,
      specifications: [
        'Agent Communication Protocols (ACP) & Tool Calling Standards.',
        'Context-Aware Metadata Standards: Location, ambient light, device state, cognitive load.',
        'Decentralized Identity (DID) & Verifiable Credentials for autonomous agent delegation.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Humane, Rabbit, OpenAI & Google Gemini Agent Ecosystems',
      scenario: 'Proactive Multimodal Travel & Task Resolution via Autonomous Agent Loops',
      howItWorks: 'Instead of opening three airline apps, a calendar app, and an Uber app, modern agent architectures accept a natural language objective: "Coordinate my conference trip to San Francisco under \$1,200 while accommodating my Tuesday 2 PM keynote". Agents decompose the goal, invoke airline booking tool APIs, evaluate hotel proximity using spatial graphs, verify budget constraints, and present one finalized itinerary with cryptographic authorization tokens for payment.',
      impact: 'Shifts human interaction from low-level mechanical GUI clicking to high-level strategic goal definition.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Modern agentic web systems are engineered using agent frameworks and tool-calling interfaces.',
      tools: [
        'LangChain / LlamaIndex: Frameworks for orchestrating agent tool calling and retrieval-augmented generation (RAG).',
        'Model Context Protocol (MCP): Open standard for connecting AI models to local databases, tools, and environments securely.',
        'AutoGPT / CrewAI: Multi-agent orchestration systems assigning specialized roles to autonomous LLM instances.'
      ],
      standards: ['Model Context Protocol (MCP)', 'W3C Decentralized Identifiers (DIDs)']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'javascript',
      explanation: 'An autonomous agent perception-action loop executing a structured tool call based on contextual telemetry:',
      code: `// Web 4.0 Autonomous Perception-Action Dispatcher
class AutonomousContextAgent {
  constructor(capabilities) {
    this.capabilities = capabilities; // Map of registered API tools
  }

  // Evaluate ambient telemetry and execute proactive action if threshold met
  async processAmbientEvent(event) {
    console.log(\`[Perception] Ingested event: \${event.type}\`);

    // Rule or LLM reasoning evaluation
    if (event.type === 'FLIGHT_DELAYED' && event.delayMinutes > 60) {
      console.log('[Reasoning] Flight delayed significantly. Re-scheduling onward transit.');

      const hotelTool = this.capabilities.get('updateHotelCheckin');
      if (hotelTool) {
        const result = await hotelTool({
          bookingRef: event.bookingRef,
          revisedArrivalTime: event.estimatedArrival
        });
        console.log('[Action Completed]', result);
      }
    }
  }
}

// Instantiate agent with tool registry
const agent = new AutonomousContextAgent(new Map([
  ['updateHotelCheckin', async (params) => {
    return { status: 'SUCCESS', message: \`Check-in moved to \${params.revisedArrivalTime}\` };
  }]
]));

agent.processAmbientEvent({
  type: 'FLIGHT_DELAYED',
  bookingRef: 'HTL-8912',
  delayMinutes: 90,
  estimatedArrival: '2026-10-21T21:30:00Z'
});`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Granting autonomous agents unbounded execution permissions with real money or irreversible database writes.',
          reality: 'Autonomous loops can hallucinate or get trapped in recursive execution spirals. Always enforce "Human-in-the-Loop" (HITL) confirmation gates for transactions exceeding defined safety budgets or state-altering operations.'
        },
        {
          mistake: 'Streaming unencrypted personal telemetry (biometrics, microphone audio, GPS) to centralized third-party cloud servers.',
          reality: 'Web 4.0 systems must prioritize edge privacy. Raw sensor telemetry should be processed locally on-device via WebGPU, only transmitting privacy-preserved semantic vectors or encrypted hashes.'
        }
      ]
    }
  },

  '5.2-ai-powered-web': {
    id: '5.2-ai-powered-web',
    chapterId: 'chapter-5',
    chapterNumber: 5,
    chapterTitle: 'The Future Web — AI, Decentralization, IoT & Spatial Web',
    code: '5.2',
    title: 'AI-Powered Web Applications & On-Device WebGPU Inference',
    subtitle: 'Client-side neural networks via WebGPU and WASM, dynamic personalization, and privacy preservation',
    difficulty: 'Intermediate',
    readTime: '18 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'The integration of Artificial Intelligence into the web has evolved beyond remote API calls. Modern web applications utilize WebGPU and WebAssembly (WASM) to execute deep learning models directly inside the client\'s browser on local GPU hardware, enabling zero-latency inference, offline capability, zero cloud server inference costs, and total data privacy.',
      analogy: 'Calling a cloud AI API (like OpenAI or Anthropic) is like ordering food from a distant gourmet restaurant: you place the order over the phone, wait for the delivery driver to drive across town, pay a delivery fee for every single dish, and hope nobody intercepts your food on the way. Running AI on-device via WebGPU is like having an automated high-speed chef installed right inside your kitchen: it cooks meals instantly using your local electricity, charges zero delivery fees, and your ingredients never leave your house.',
      keyPoints: [
        'WebGPU Standard: Low-level W3C graphics and compute API providing direct browser access to modern GPU hardware (Direct3D 12, Metal, Vulkan).',
        'On-Device Inference: Running quantized neural networks (LLMs, vision models, speech-to-text) locally in JavaScript.',
        'Zero Cloud Inference Cost: Offloading gigawatts of matrix multiplication computations from enterprise cloud clusters to the user\'s local client GPU.',
        'Privacy-Preserving AI: Sensitive user documents, medical data, or webcam video frames never leave client RAM.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'WebGPU shaders and compute pipelines execute parallel tensor math directly on hardware compute units using WGSL (WebGPU Shading Language).',
      diagram: `
+-------------------------------------------------------------------------+
|                  Client-Side WebGPU Neural Execution Stack              |
+-------------------------------------------------------------------------+
[Web Application (React / Vanilla JS)]
                 |
                 v
[ONNX Runtime Web / Transformers.js / WebLLM]
                 |
                 v
[WebGPU API (Compute Pipelines & Storage Buffers)]
                 |
  +--------------+--------------+
  |              |              |
[Direct3D 12]  [Metal (Apple)] [Vulkan (Linux/Android)]
  |              |              |
  +--------------+--------------+
                 |
                 v
[Local Hardware GPU Compute Cores (NVIDIA / Apple Silicon / AMD)]
`,
      specifications: [
        'W3C WebGPU Recommendation: Successor to WebGL, exposing general-purpose compute pipelines.',
        'WGSL (WebGPU Shading Language): Rust-like shading language compiled to native GPU bytecode.',
        'Quantization Standards: INT4, INT8, FP16 model weights reducing multi-gigabyte models into browser-loadable formats.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Hugging Face (Transformers.js) & Adobe Photoshop Web',
      scenario: 'Running In-Browser Background Removal & Local Whisper Speech Transcription',
      howItWorks: 'Adobe Photoshop on the Web and Hugging Face Transformers.js execute neural segmentation and Whisper speech models directly in the user\'s browser. When a user uploads a 4K image to remove the background, a quantized vision transformer executes via WebGPU compute shaders in under 80 milliseconds. Adobe servers never touch the image data.',
      impact: 'Saves enterprise software providers millions of dollars monthly in AWS GPU cluster costs while delivering instant offline user experiences.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Frontend AI engineers leverage production browser ML runtimes and quantized weight registries.',
      tools: [
        'Transformers.js: Hugging Face’s library for running popular NLP and vision models natively in the browser.',
        'WebLLM: High-performance in-browser LLM engine powered by Apache TVM Unity and WebGPU.',
        'ONNX Runtime Web: Microsoft’s cross-platform inference engine running optimized ONNX models via WebAssembly and WebGPU.'
      ],
      standards: ['W3C WebGPU Specification', 'ONNX (Open Neural Network Exchange)', 'SafeTensors']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'javascript',
      explanation: 'Initializing a WebGPU compute device and verifying hardware acceleration support:',
      code: `// Initializing and verifying WebGPU hardware acceleration in modern browsers
async function initializeWebGPU() {
  if (!navigator.gpu) {
    console.warn('WebGPU is not supported on this browser. Falling back to CPU / WASM.');
    return null;
  }

  // 1. Request physical GPU adapter
  const adapter = await navigator.gpu.requestAdapter({
    powerPreference: 'high-performance'
  });

  if (!adapter) {
    console.warn('No appropriate GPU adapter found.');
    return null;
  }

  // 2. Request logical device connection
  const device = await adapter.requestDevice();

  console.log('WebGPU initialized successfully!');
  console.log('GPU Vendor Info:', adapter.info?.vendor || 'Generic GPU');
  console.log('Max Compute Workgroup Size X:', device.limits.maxComputeWorkgroupSizeX);

  return device;
}

// Example usage
initializeWebGPU().then(device => {
  if (device) {
    // Ready to bind tensors and dispatch compute shaders
  }
});`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Downloading a 4GB FP32 unquantized model weight file over public mobile internet.',
          reality: 'Mobile users on cellular networks will abandon the page as bandwidth is exhausted. Always use INT4 or INT8 quantized models (e.g. 150MB-500MB) and store weights in browser `IndexedDB` or `CacheStorage` so subsequent visits require zero network downloads.'
        },
        {
          mistake: 'Executing heavy tensor matrix multiplication on the main UI JavaScript thread.',
          reality: 'Even with WebGPU, parsing large arrays and orchestrating pipeline dispatches on the main thread freezes DOM scrolling and user clicks (causing severe INP latency penalties). Run all model orchestration inside a Web Worker.'
        }
      ]
    }
  },

  '5.3-decentralized-web': {
    id: '5.3-decentralized-web',
    chapterId: 'chapter-5',
    chapterNumber: 5,
    chapterTitle: 'The Future Web — AI, Decentralization, IoT & Spatial Web',
    code: '5.3',
    title: 'The Decentralized Web (DWeb) & P2P Content Addressing (IPFS)',
    subtitle: 'Location-based vs Content-addressed storage (CID), Distributed Hash Tables (DHT), and BitTorrent',
    difficulty: 'Intermediate',
    readTime: '18 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'The Decentralized Web (DWeb) replaces centralized client-server silos with peer-to-peer (P2P) content-addressed networks. While the traditional web addresses data by location (where a file lives on a specific server IP), the DWeb addresses data by its unique cryptographic hash (what the file contains), making censorship, link rot, and single points of failure impossible.',
      analogy: 'Location-Based Addressing (traditional web) is like telling someone: "Go to shelf 4, row 3 in the Boston Public Library to read Hamlet". If the Boston library burns down, or if the librarian replaces Hamlet with a different book on shelf 4, you get a 404 error or the wrong text. Content Addressing (IPFS) is like telling someone: "Find the book whose SHA-256 fingerprint is 9f8a...". It doesn\'t matter if you get the book from a university in Tokyo, a student in Sydney, or your neighbor\'s garage: if the cryptographic fingerprint matches, you are 100% guaranteed to have the authentic, tamper-free Hamlet.',
      keyPoints: [
        'Location-Based vs. Content-Based: Traditional URLs (`https://server.com/doc.pdf`) point to an IP address. IPFS CIDs (`ipfs://bafy...`) point to cryptographic content hashes.',
        'Content Identifier (CID): Self-describing cryptographic multihashes incorporating codec and hashing algorithm versions.',
        'Distributed Hash Table (DHT): Kademlia-based routing protocol allowing peer nodes to locate which peers host a specific CID.',
        'Resilience against Link Rot: Content persists across the swarm as long as at least one node in the world pins the CID.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'The InterPlanetary File System (IPFS) organizes files into directed acyclic graphs of cryptographic nodes (Merkle DAGs).',
      diagram: `
+-------------------------------------------------------------------------+
|                  Location Addressing vs. Content Addressing             |
+-------------------------------------------------------------------------+
Traditional Web (Location-Based):
Browser ---> DNS Lookup ---> IP: 198.51.100.20 ---> Server Disk
(If server goes offline, content permanently disappears: HTTP 404)

IPFS Decentralized Swarm (Content-Addressed):
Browser requests CID: QmZtmG2qt...
       |
  [Local Node] ---- Kademlia DHT Query ----> [Peer Swarm (Global Nodes)]
       |                                              |
       | <-------- Streams raw blocks of data --------+
       v
[Verify: SHA-256(received_data) === CID]
(Guaranteed authentic, tamper-proof, served from closest peer)
`,
      specifications: [
        'IPFS CID Spec: Multibase prefix + Multicodec identifier + Multihash.',
        'Kademlia DHT (RFC 6125 concepts): Distributed key-value routing across $O(\\log N)$ node hops.',
        'Bitswap Protocol: Message-oriented data exchange protocol used to request and stream blocks among IPFS peers.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Filecoin, Arweave & Turkish Wikipedia Mirror',
      scenario: 'Circumventing Government Censorship During National Web Blocks',
      howItWorks: 'In 2017, when the Turkish government blocked access to Wikipedia nationwide via DNS and IP filtering, activists dumped the entire Turkish Wikipedia snapshot onto IPFS. Because IPFS traffic communicates peer-to-peer across decentralized swarms using content addressing rather than a single IP address, authorities could not block access without shutting down the country\'s entire internet connection.',
      impact: 'Preserved human access to free knowledge during geopolitical crises and proved that content-addressed systems are immune to centralized censorship.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'DWeb developers use peer-to-peer node daemons and pinning services to ensure persistence.',
      tools: [
        'Kubo (Go-IPFS): Reference implementation daemon for running an IPFS node.',
        'Helia: Modern, modular JavaScript implementation of IPFS designed for browsers and edge runtimes.',
        'Pinata / Web3.Storage: Commercial distributed pinning services guaranteeing long-term data persistence across Filecoin.'
      ],
      standards: ['W3C DID (Decentralized Identifiers)', 'IPLD (InterPlanetary Linked Data)', 'Libp2p']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'javascript',
      explanation: 'Resolving and fetching content-addressed data using the IPFS gateway protocol in modern JavaScript:',
      code: `// Fetching content-addressed data from IPFS via multiple fallback gateways
async function fetchFromIPFS(cid, gateways = [
  'https://ipfs.io/ipfs/',
  'https://dweb.link/ipfs/',
  'https://cloudflare-ipfs.com/ipfs/'
]) {
  for (const gateway of gateways) {
    try {
      const url = \`\${gateway}\${cid}\`;
      console.log(\`Attempting fetch from gateway: \${url}\`);

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 4000); // 4s timeout

      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeout);

      if (response.ok) {
        const data = await response.json();
        console.log('Successfully fetched content-addressed payload!');
        return data;
      }
    } catch (err) {
      console.warn(\`Gateway \${gateway} timed out or failed. Trying next...\`);
    }
  }

  throw new Error('All IPFS gateways failed to resolve CID: ' + cid);
}

// Example CID (Sample metadata)
const sampleCID = 'bafkreigh2akiscaildcqabsyg3dfr6cvhpioh3qwxvx3kzrqb2ogy5jhte';
fetchFromIPFS(sampleCID).catch(console.error);`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Assuming adding a file to IPFS makes it permanently available forever.',
          reality: 'IPFS does not guarantee permanent storage; it is a cache. If other nodes do not pin or re-seed your file and your local computer goes to sleep, the file disappears from the global DHT. You must "pin" the file to dedicated pinning nodes or use Filecoin/Arweave for permanent durability.'
        },
        {
          mistake: 'Publishing private user credentials or personally identifiable information (PII) to public IPFS.',
          reality: 'IPFS is a public, open peer-to-peer network. Once a CID is advertised to the global DHT, anyone with the hash can download the blocks permanently. Sensitive data MUST be cryptographically encrypted before hashing.'
        }
      ]
    }
  },

  '5.4-blockchain-web3': {
    id: '5.4-blockchain-web3',
    chapterId: 'chapter-5',
    chapterNumber: 5,
    chapterTitle: 'The Future Web — AI, Decentralization, IoT & Spatial Web',
    code: '5.4',
    title: 'Blockchain Integration & Smart Contract Web3 Frontends',
    subtitle: 'Ethereum JSON-RPC providers, wallet signing, state verification, and Web3 frontend integration',
    difficulty: 'Intermediate',
    readTime: '20 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'Web3 frontend architecture integrates decentralized blockchain state machines into web interfaces. Instead of relying on a centralized corporate database with username/password logins, users authenticate using asymmetric cryptographic keypairs (crypto wallets), and transactions are committed to distributed consensus ledgers via Ethereum JSON-RPC nodes.',
      analogy: 'Traditional web banking is like playing poker where the casino bank holds your chips in their private vault; they can freeze your account, revoke your chips, or lock their doors at any moment. Web3 is like playing poker with mathematical physics: your chips are locked inside a transparent titanium briefcase handcuffed to your wrist (your private key). You sign agreements with a unique laser seal; the other players inspect the physics of the seal, verify it instantly, and the game proceeds with zero casino intermediary needed.',
      keyPoints: [
        'Non-Custodial Authentication: Signing cryptographic challenge messages (`personal_sign` / EIP-4361 Sign-In with Ethereum) replacing passwords.',
        'Smart Contracts: Deterministic programs deployed to decentralized virtual machines (e.g. EVM) executing immutable state transitions.',
        'Ethereum JSON-RPC Provider: HTTP and WebSocket interface communicating between client browsers and full validator nodes.',
        'Gas Fees: Computational execution fees paid to network validators to prevent infinite loops and denial-of-service attacks.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'The Web3 client stack connects browser JavaScript to the Ethereum Virtual Machine via EIP-1193 provider interfaces injected into `window.ethereum`.',
      diagram: `
+-------------------------------------------------------------------------+
|                  Web3 Frontend Architecture & Signing Pipeline          |
+-------------------------------------------------------------------------+
[Browser User]
      |
      v  Interacts with DApp Frontend (React / Viem / Wagmi)
[DApp Frontend]
      |
      v  Calls window.ethereum (EIP-1193 Provider)
[User Crypto Wallet] (MetaMask / Phantom / Hardware Ledger)
      |
      |-- 1. Prompts User: "Sign transaction with private key?"
      |-- 2. User confirms -> Signs ECDSA signature locally (Never leaks key!)
      |
      v  Transmits raw signed transaction
[Ethereum JSON-RPC Node] (Infura / Alchemy / QuickNode)
      |
      v  Broadcasts to P2P Mempool
[Consensus Validators (EVM)] -> Executes Smart Contract -> State Updated!
`,
      specifications: [
        'EIP-1193: JavaScript Ethereum Provider API standard (`window.ethereum`).',
        'EIP-4361: Sign-In with Ethereum (SIWE) for standardized cryptographic session logins.',
        'ERC-20 & ERC-721 Standards: Token and non-fungible asset interfaces on EVM chains.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Uniswap & OpenSea',
      scenario: 'Executing Billions of Dollars in Trustless Financial Swaps via Browser Frontends',
      howItWorks: 'Uniswap is an Automated Market Maker (AMM) with zero centralized order books or bank accounts. The Uniswap web interface is a static React application hosted on IPFS and Cloudflare. When a user swaps tokens, the frontend calls the Uniswap smart contract router using the `viem` library, prompts the user\'s wallet to sign the transaction, and submits the transaction hash to the Ethereum network.',
      impact: 'Eliminates broker middlemen, custodial counterparty risk, and allows permissionless financial transactions 24/7/365 across the globe.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Production Web3 frontend engineers use modern TypeScript client libraries designed for robust wallet orchestration.',
      tools: [
        'Viem / Wagmi: Lightweight, type-safe TypeScript libraries for interacting with EVM blockchains and wallets.',
        'Alchemy / Infura: Distributed JSON-RPC node infrastructure handling billions of blockchain read and write requests.',
        'Hardhat / Foundry: Testing environments for compiling and unit-testing Solidity smart contracts.'
      ],
      standards: ['EIP-1193', 'EIP-712 (Typed Structured Data Hashing)', 'ABI (Application Binary Interface)']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'javascript',
      explanation: 'Connecting a browser wallet and querying smart contract state via EIP-1193:',
      code: `// Connecting a Web3 browser wallet using standard EIP-1193 provider
async function connectWallet() {
  if (typeof window.ethereum === 'undefined') {
    alert('Please install a Web3 wallet (e.g. MetaMask) to continue.');
    return;
  }

  try {
    // 1. Request user account address authorization
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });

    const userAddress = accounts[0];
    console.log('Connected Wallet Address:', userAddress);

    // 2. Query current blockchain network chainId (e.g. 0x1 for Ethereum Mainnet)
    const chainId = await window.ethereum.request({
      method: 'eth_chainId'
    });
    console.log('Current Chain ID:', chainId);

    // 3. Query native ETH balance (returned as hexadecimal wei string)
    const balanceWeiHex = await window.ethereum.request({
      method: 'eth_getBalance',
      params: [userAddress, 'latest']
    });

    // Convert wei hex to human-readable ETH
    const balanceWei = BigInt(balanceWeiHex);
    const balanceEth = Number(balanceWei) / 1e18;
    console.log(\`Balance: \${balanceEth.toFixed(4)} ETH\`);

    return { userAddress, chainId, balanceEth };
  } catch (error) {
    if (error.code === 4001) {
      console.warn('User rejected the connection request.');
    } else {
      console.error('RPC Error:', error);
    }
  }
}`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Storing private keys, mnemonic seed phrases, or master wallet secrets in frontend code or localStorage.',
          reality: 'Any malicious third-party script, NPM dependency compromise, or XSS vulnerability can read `localStorage` in milliseconds, draining all funds permanently. The private key must NEVER exist in web application code; it must remain safely isolated inside the user\'s wallet extension or hardware ledger.'
        },
        {
          mistake: 'Failing to handle asynchronous chain re-organizations (reorgs) or pending transaction states.',
          reality: 'A transaction broadcast to the mempool can take minutes to be mined, or get replaced/dropped if gas prices spike. Frontends must track transaction lifecycle events (`pending`, `confirmed`, `reverted`) gracefully.'
        }
      ]
    }
  },

  '5.5-iot-web-development': {
    id: '5.5-iot-web-development',
    chapterId: 'chapter-5',
    chapterNumber: 5,
    chapterTitle: 'The Future Web — AI, Decentralization, IoT & Spatial Web',
    code: '5.5',
    title: 'Internet of Things (IoT) & The Web of Things (WoT)',
    subtitle: 'MQTT over WebSockets, Server-Sent Events, sensor telemetry, and Digital Twin browsers',
    difficulty: 'Intermediate',
    readTime: '18 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'The Internet of Things (IoT) connects physical hardware devices (sensors, actuators, smart appliances, industrial robots) to internet networks. The W3C Web of Things (WoT) standard bridges embedded device protocols (MQTT, CoAP, Zigbee) into standard web protocols (HTTP, WebSockets, JSON-LD), enabling web browsers to function as real-time dashboards and digital twin monitoring consoles.',
      analogy: 'Imagine a factory with 10,000 temperature sensors on steam pipes. If every tiny 8-bit sensor had to construct a full 1,000-byte HTTP/1.1 request header (`User-Agent`, `Accept-Language`, `Host`) every 500 milliseconds, their batteries would die in an hour and the local Wi-Fi would choke on overhead. MQTT is like a lightweight telegraph: it sends tiny 2-byte binary packets containing just the temperature. A Web of Things gateway translates those telegraph clicks into clean WebSockets that web browsers display as live glowing gauges in real time.',
      keyPoints: [
        'Lightweight Protocols: MQTT (Message Queuing Telemetry Transport) designed for low bandwidth, high latency, and battery-constrained microcontrollers.',
        'MQTT over WebSockets: Bridging MQTT publish-subscribe brokers directly to browser clients.',
        'W3C Thing Description (TD): Formal JSON-LD schemas describing physical device properties, actions, and telemetry events.',
        'Digital Twins: Real-time virtual software replicas of physical machinery rendered in web browsers.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'The Web of Things architecture mediates between constrained field sensors and web visualization layers via an IoT Gateway and MQTT broker.',
      diagram: `
+-------------------------------------------------------------------------+
|                  Web of Things (WoT) Telemetry Architecture             |
+-------------------------------------------------------------------------+
[Field Hardware: ESP32 / Arduino / Industrial Sensors]
      |
      v  MQTT Protocol (TCP Port 1883 - Binary compact payload: ~2 bytes)
[IoT Gateway / MQTT Broker (EMQX / Eclipse Mosquitto)]
      |
      |-- Bridges topic: "factory/cell-3/temperature"
      |
      v  MQTT over WebSockets (WSS Port 8083 - TLS Encrypted)
[Web Browser Client (React / Three.js 3D Digital Twin)]
      |
      v  Renders real-time telemetry gauge without HTTP polling!
`,
      specifications: [
        'OASIS MQTT v5.0 Standard: Publish/Subscribe architecture with QoS levels (0: At most once, 1: At least once, 2: Exactly once).',
        'W3C Web of Things (WoT) Architecture Recommendation.',
        'W3C WoT Thing Description (TD) Specification.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Tesla & Siemens Industrial Automation',
      scenario: 'Streaming Real-Time Telemetry from Millions of Connected Vehicles & Turbines',
      howItWorks: 'Every Tesla vehicle continuously streams telemetry data (battery temperature, tire pressures, motor RPM, GPS vectors) to cloud ingestion clusters using MQTT over cellular modems. When a technician opens Tesla\'s internal diagnostics web tool or a customer opens the Tesla mobile/web app, WebSockets stream live sensor packets into a 3D digital twin rendering the vehicle state with sub-second latency.',
      impact: 'Enables remote diagnostics, over-the-air firmware debugging, and fleet-wide predictive maintenance without requiring costly service center visits.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Industrial IoT architectures utilize high-throughput message brokers and time-series databases.',
      tools: [
        'Eclipse Mosquitto / EMQX: Ultra-scalable distributed MQTT brokers handling millions of concurrent sensor connections.',
        'MQTT.js: Full-featured JavaScript client library for connecting to MQTT brokers in both Node.js and web browsers.',
        'InfluxDB / TimescaleDB: High-performance time-series databases optimized for writing millions of sensor readings per second.'
      ],
      standards: ['OASIS MQTT 5.0', 'W3C Web of Things (WoT)', 'CoAP (RFC 7252)']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'javascript',
      explanation: 'Connecting a web browser directly to an MQTT broker over WebSockets to receive live telemetry:',
      code: `// Connecting a browser client to an MQTT broker via WebSockets
import mqtt from 'mqtt';

// 1. Connect to WebSocket port of broker (e.g. wss://broker.emqx.io:8084/mqtt)
const client = mqtt.connect('wss://broker.emqx.io:8084/mqtt', {
  clientId: 'web_dashboard_' + Math.random().toString(16).substring(2, 8),
  clean: true,
  connectTimeout: 4000
});

client.on('connect', () => {
  console.log('Connected to MQTT Broker via WebSockets!');

  // 2. Subscribe to sensor topic with QoS 1 (At least once delivery)
  client.subscribe('facility/temperature/sensor-01', { qos: 1 }, (err) => {
    if (!err) {
      console.log('Subscribed to sensor telemetry topic.');
    }
  });
});

// 3. Receive and process live incoming sensor readings
client.on('message', (topic, payload) => {
  const data = JSON.parse(payload.toString());
  console.log(\`[Telemetry from \${topic}]: \${data.temperature}°C (Timestamp: \${data.timestamp})\`);

  // Update browser DOM / live dashboard gauge
  const gaugeElement = document.getElementById('temp-reading');
  if (gaugeElement) {
    gaugeElement.textContent = data.temperature.toFixed(1) + ' °C';
  }
});`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Using HTTP REST polling (`setInterval(fetch, 1000)`) to monitor 5,000 real-time sensors.',
          reality: 'Sending 5,000 HTTP requests per second creates massive TCP handshake and HTTP header overhead, exhausting server file descriptors and driving cloud egress bills through the roof. Use persistent MQTT WebSockets or Server-Sent Events (SSE).'
        },
        {
          mistake: 'Transmitting unencrypted sensor telemetry over plaintext MQTT Port 1883.',
          reality: 'Plaintext MQTT payloads can be intercepted and forged by anyone on the local network (Man-in-the-Middle). In industrial control systems, an attacker forging a false "normal temperature" payload can mask critical physical overheating. Always enforce MQTTS (TLS encryption) with client X.509 certificates.'
        }
      ]
    }
  },

  '5.6-spatial-web-webxr': {
    id: '5.6-spatial-web-webxr',
    chapterId: 'chapter-5',
    chapterNumber: 5,
    chapterTitle: 'The Future Web — AI, Decentralization, IoT & Spatial Web',
    code: '5.6',
    title: 'Spatial Computing on the Web: WebXR, AR & VR',
    subtitle: 'WebXR Device API, Three.js 3D canvas rendering, plane detection, and spatial user interaction',
    difficulty: 'Intermediate',
    readTime: '18 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'Spatial Computing on the web transforms the internet from two-dimensional flat screens into immersive three-dimensional spatial environments. The W3C WebXR Device API provides standard browser access to Virtual Reality (VR) headsets, Augmented Reality (AR) glasses, and spatial tracking hardware, allowing web developers to build interactive 3D experiences that run seamlessly without native app store installs.',
      analogy: 'Building a traditional webpage is like painting on a flat piece of paper: everything is restricted to X and Y coordinates (width and height). Building for WebXR is like walking inside an open architectural room: you place objects with X, Y, and Z depth, walk around behind them, inspect shadows cast by physical room lighting, and interact with virtual objects using natural hand gestures.',
      keyPoints: [
        'WebXR Device API: Standardized API replacing legacy WebVR, providing unified access to VR (immersive-vr) and AR (immersive-ar) hardware.',
        'Six Degrees of Freedom (6DoF): Tracking both rotational movement (pitch, yaw, roll) and translational movement (X, Y, Z displacement) in physical space.',
        'Hit-Testing & Plane Detection: Anchoring virtual 3D models onto physical floors, tables, and walls detected by device LiDAR and cameras.',
        'Zero-Install Distribution: Instant frictionless distribution via standard HTTPS URLs instead of multi-gigabyte app store downloads.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'The WebXR architecture ties headset sensor pose tracking directly into the browser\'s animation loop, rendering stereoscopic frames to dual eye viewports.',
      diagram: `
+-------------------------------------------------------------------------+
|                  WebXR Stereoscopic Rendering Pipeline                  |
+-------------------------------------------------------------------------+
[Spatial Headset / AR Glasses (Meta Quest / Apple Vision Pro)]
  |-- Sensors: Cameras, LiDAR, IMU (Pose & Eye Tracking)
  |
  v  WebXR Device API
[navigator.xr.requestSession('immersive-vr')]
  |
  v  Animation Frame Loop: session.requestAnimationFrame(renderLoop)
  |-- 1. Query Headset Pose: frame.getViewerPose(referenceSpace)
  |-- 2. Extract Eye Views (Left Eye Viewport & Right Eye Viewport)
  |-- 3. Calculate Projection & View Matrices
  |
  v  WebGL / WebGPU Pipeline (Three.js / Babylon.js)
  |-- Render 3D Scene into XRWebGLLayer framebuffer
  |
  v  Stereoscopic Projection to Headset Displays (Target: 90 / 120 FPS!)
`,
      specifications: [
        'W3C WebXR Device API Specification.',
        'W3C WebXR Hit Test Module for Augmented Reality surface detection.',
        'glTF 2.0 (GL Transmission Format): The "JPEG of 3D" standard for transmitting compact 3D assets on the web.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Apple Vision Pro, Meta Quest & IKEA Place Web',
      scenario: 'Instant Augmented Reality Furniture Placement via Mobile Browsers',
      howItWorks: 'When shopping on IKEA or Shopify-powered retail stores, clicking "View in your room" opens an inline WebXR AR session directly in Safari or Chrome. The device\'s cameras detect the floor plane, cast accurate environmental shadows, and allow the customer to walk 360 degrees around a photorealistic 3D couch to check dimensions before purchasing.',
      impact: 'Reduces e-commerce return rates by over 40% and increases buyer conversion by over 200% without forcing users to install native apps.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Spatial web engineering utilizes 3D rendering engines and standard asset interchange formats.',
      tools: [
        'Three.js: The most popular lightweight WebGL/WebGPU 3D library with built-in WebXR controller and session support.',
        'Babylon.js: High-performance, full-featured Microsoft game and spatial engine for web browsers.',
        'Model-Viewer: Google’s open-source web component for rendering responsive 3D and AR models with a single HTML tag.'
      ],
      standards: ['W3C WebXR Device API', 'Khronos Group glTF 2.0', 'Universal Scene Description (USDZ)']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'javascript',
      explanation: 'Checking WebXR session support and launching an immersive VR session:',
      code: `// Initializing and entering an immersive WebXR session
async function startWebXRExperience() {
  if (!navigator.xr) {
    console.warn('WebXR not supported in this browser.');
    return;
  }

  // 1. Verify if device supports immersive virtual reality
  const isVRSupported = await navigator.xr.isSessionSupported('immersive-vr');
  if (!isVRSupported) {
    console.warn('Immersive VR is not supported on this hardware.');
    return;
  }

  console.log('WebXR Immersive VR supported! Entering session...');

  // 2. Request immersive session
  const xrSession = await navigator.xr.requestSession('immersive-vr', {
    requiredFeatures: ['local-floor']
  });

  // 3. Set up WebGL render layer
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl', { xrCompatible: true });
  await xrSession.updateRenderState({
    baseLayer: new XRWebGLLayer(xrSession, gl)
  });

  const refSpace = await xrSession.requestReferenceSpace('local-floor');

  // 4. Spatial render loop (Must hit 90fps to prevent motion sickness!)
  function onXRFrame(timestamp, frame) {
    const session = frame.session;
    session.requestAnimationFrame(onXRFrame);

    const pose = frame.getViewerPose(refSpace);
    if (pose) {
      const glLayer = session.renderState.baseLayer;
      gl.bindFramebuffer(gl.FRAMEBUFFER, glLayer.framebuffer);

      // Render scene for each eye (stereoscopic left and right)
      for (const view of pose.views) {
        const viewport = glLayer.getViewport(view);
        gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);
        // Execute draw calls with view.projectionMatrix and view.transform
      }
    }
  }

  xrSession.requestAnimationFrame(onXRFrame);
}`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Failing to maintain a consistent 90 or 120 FPS framerate in immersive headsets.',
          reality: 'On desktop screens, dropping from 60 FPS to 45 FPS feels slightly laggy. In a VR headset, dropping below 90 FPS creates severe vestibular disorientation and motion sickness (nausea). Optimize polygon counts, bake lighting, and keep draw calls under 100 per frame.'
        },
        {
          mistake: 'Embedding massive, uncompressed 100MB 3D meshes with uncompressed 4K textures.',
          reality: 'Massive assets cause browser tabs to crash due to mobile GPU memory limits. Always compress 3D models using Draco geometry compression and KTX2 / Basis Universal GPU textures.'
        }
      ]
    }
  },

  '5.7-smart-web-adaptive': {
    id: '5.7-smart-web-adaptive',
    chapterId: 'chapter-5',
    chapterNumber: 5,
    chapterTitle: 'The Future Web — AI, Decentralization, IoT & Spatial Web',
    code: '5.7',
    title: 'Smart Web & Context-Aware Adaptive Interfaces',
    subtitle: 'Hardware APIs: Ambient light, Battery status, Network Information, and proactive UX morphing',
    difficulty: 'Intermediate',
    readTime: '16 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'The Smart Web moves beyond responsive design (adapting only to screen width) to context-aware adaptive design: web applications that dynamically inspect physical environmental telemetry (ambient room illumination, device battery level, network connection speed, device memory) to optimize performance, readability, and power consumption in real time.',
      analogy: 'Traditional responsive design is like a jacket that adjusts its sleeve length depending on whether you are an adult or a child. Context-aware adaptive design is like an intelligent space suit: when you walk outside into blazing Arizona sunlight, the helmet visor auto-tints to eliminate glare; when your oxygen tank drops to 10%, it dims decorative interior lights to conserve battery; when you enter a low-signal cave, it switches from high-bandwidth video to lightweight text radio.',
      keyPoints: [
        'Context-Aware UX: Modifying layouts, contrast, and animations based on external user context rather than just viewport pixels.',
        'Ambient Light Sensor API: Dynamically boosting contrast or dimming brightness based on real-world ambient lux levels.',
        'Network Information API (`navigator.connection`): Detecting slow 2G/3G connections to stop prefetching high-res videos and serve lightweight text.',
        'Battery Status API: Suspending heavy background animations and WebSocket polling when device battery is critically low.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'Adaptive web architectures listen to system hardware API changes via browser event streams, morphing CSS token layers and resource loading strategies.',
      diagram: `
+-------------------------------------------------------------------------+
|                  Context-Aware Adaptive UX Architecture                 |
+-------------------------------------------------------------------------+
[Hardware Sensors & System Telemetry]
  |-- navigator.connection (4G vs 2G, save-data header)
  |-- navigator.getBattery() (level: 0.12, charging: false)
  |-- AmbientLightSensor (illuminance: 50 lux vs 50,000 lux)
  |
  v  Browser Hardware API Event Listeners
[Adaptive Controller (React Hook / Vanilla Singleton)]
  |
  +---------------+---------------+
  |                               |
  v                               v
[CSS Token Morphing]       [Resource Loading Strategy]
--contrast-ratio: high;    Disable 4K video autoplay;
--animation-duration: 0s;  Serve WebP LQIP thumbnails;
`,
      specifications: [
        'W3C Ambient Light Sensor Specification.',
        'WICG Network Information API (`navigator.connection.effectiveType`).',
        'W3C Battery Status API (`navigator.getBattery()`).'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Google Maps Web & YouTube Mobile Web',
      scenario: 'Auto-Switching Dark Map Palettes in Tunnels & Data Saver Modes in Rural Areas',
      howItWorks: 'When navigating via Google Maps on mobile web, the application inspects the device\'s light sensors and geolocation sunset times. When driving into a dark highway tunnel, the UI instantly switches to a high-contrast dark palette to avoid blinding the driver. On spotty rural 3G cellular connections, YouTube mobile web detects the `save-data` flag and drops preview video stream prefetching.',
      impact: 'Improves driver safety at night, saves gigabytes of user cellular data in emerging economies, and prevents battery drain.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Engineers use modern web sensor APIs and browser emulation devtools to test contextual adaptability.',
      tools: [
        'Chrome DevTools Sensor Panel: Emulating geolocation coordinates, device orientation, and touch capabilities.',
        'Network Throttling Profiles: Simulating Fast 3G, Slow 3G, and Offline states in browser developer tools.',
        'CSS Media Queries Level 5: Media queries for `@media (prefers-reduced-motion)` and `@media (prefers-contrast)`.'
      ],
      standards: ['W3C Generic Sensor API', 'W3C CSS Media Queries Level 5']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'javascript',
      explanation: 'Building a production adaptive resource loader inspecting network and battery telemetry:',
      code: `// Context-Aware Adaptive Resource Optimizer
function adaptExperienceToContext() {
  // 1. Inspect Network Telemetry (Network Information API)
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const isDataSaverEnabled = connection?.saveData === true;
  const isSlowConnection = connection?.effectiveType === '2g' || connection?.effectiveType === 'slow-2g';

  if (isDataSaverEnabled || isSlowConnection) {
    console.log('[Adaptive UX] Low bandwidth detected. Disabling video autoplay and prefetching.');
    document.body.classList.add('data-saver-mode');
    // Abort heavy asset downloads
  }

  // 2. Inspect Battery Telemetry (Battery Status API)
  if ('getBattery' in navigator) {
    navigator.getBattery().then(battery => {
      function evaluateBattery() {
        if (!battery.charging && battery.level < 0.15) {
          console.warn('[Adaptive UX] Critical battery (<15%). Pausing non-essential CSS animations.');
          document.documentElement.classList.add('low-power-mode');
        } else {
          document.documentElement.classList.remove('low-power-mode');
        }
      }

      evaluateBattery();
      battery.addEventListener('levelchange', evaluateBattery);
      battery.addEventListener('chargingchange', evaluateBattery);
    });
  }
}

// Execute on application mount
adaptExperienceToContext();`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Relying unconditionally on the Battery Status API in modern browsers like Firefox or Safari.',
          reality: 'Major browser vendors (Mozilla, Apple) deprecated or restricted access to the Battery Status API due to fingerprinting privacy concerns (trackers used battery percentage decimals as a cross-site tracking identifier). Always check for API existence before calling.'
        },
        {
          mistake: 'Causing sudden layout shifts (CLS) when morphing between rich and lightweight UI modes.',
          reality: 'If a high-bandwidth video card suddenly collapses into a text link when network throttles, the entire page layout jerks downward. Pre-reserve container aspect ratio dimensions using CSS `aspect-ratio: 16 / 9`.'
        }
      ]
    }
  },

  '5.8-web-automation': {
    id: '5.8-web-automation',
    chapterId: 'chapter-5',
    chapterNumber: 5,
    chapterTitle: 'The Future Web — AI, Decentralization, IoT & Spatial Web',
    code: '5.8',
    title: 'Web Automation, Webhooks & Autonomous Workflows',
    subtitle: 'Event-driven webhooks with HMAC signatures, headless browser pipelines with Playwright/Puppeteer',
    difficulty: 'Intermediate',
    readTime: '18 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'Web Automation bridges autonomous machines and programmatic workflows across the web. It operates across two primary paradigms: Inbound Event-Driven Webhooks (reverse APIs where external platforms push events immediately via HTTP POST) and Outbound Headless Browser Automation (programmatically controlling Chrome or Firefox via Chrome DevTools Protocol to scrape, test, and execute tasks).',
      analogy: 'Imagine waiting for a package delivery. Traditional API Polling is like walking out to your mailbox every 30 seconds asking: "Is it here yet? Is it here yet?". After 5,000 trips, you are exhausted and your mailbox door is broken. A Webhook is like having the delivery driver ring your doorbell the exact instant the package arrives. Headless Browser Automation is like sending an invisible robotic butler into a physical store: the robot reads signs, fills a cart, enters payment details at the counter, and walks home with the goods.',
      keyPoints: [
        'Webhooks: "User-defined HTTP callbacks" triggered by specific system events (e.g. `payment.succeeded`, `git.push`).',
        'HMAC Cryptographic Verification: Signing webhook payloads using a shared secret hash to verify authenticity and prevent tampering.',
        'Headless Browsers: Running web browsers without a visible graphical user interface (GUI) for end-to-end testing and synthetic monitoring.',
        'Idempotency Keys: Ensuring that retried network webhook events do not duplicate financial charges or records.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'Webhook architectures require high-availability ingestion endpoints that immediately acknowledge receipt and queue processing asynchronously.',
      diagram: `
+-------------------------------------------------------------------------+
|                  Enterprise Secure Webhook Delivery Pipeline            |
+-------------------------------------------------------------------------+
[Stripe / GitHub / Shopify Webhook Dispatcher]
                 |
                 v  HTTP POST /api/webhooks
                 |  Header: Stripe-Signature: t=161455,v1=9f8a3c...
[Ingestion API Endpoint (Node / Go)]
                 |
                 |-- 1. Verify HMAC Signature using Shared Secret (crypto.timingSafeEqual)
                 |-- 2. Check Idempotency Key in Redis (Prevent duplicate processing)
                 |-- 3. Push event to Message Queue (Kafka / SQS)
                 |
                 v  IMMEDIATE HTTP 200 OK Response (< 200ms)
[Webhook Sender receives 200 OK (Stops retries)]
                 |
                 v
[Background Worker Fleet] ---- Process order, send email, fulfill digital goods
`,
      specifications: [
        'HMAC-SHA256 (RFC 2104): Keyed-Hashing for Message Authentication.',
        'Chrome DevTools Protocol (CDP): Low-level protocol used by Puppeteer and Playwright to automate Chromium browsers.',
        'Standard Webhooks Specification (standardwebhooks.com).'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Stripe & GitHub Actions',
      scenario: 'Processing Millions of Asynchronous Financial Events Securely via Webhooks',
      howItWorks: 'When a customer checks out using Apple Pay on an e-commerce site, the bank authorization happens asynchronously. Stripe does not make the customer wait on the web page; instead, once the bank confirms funds, Stripe\'s webhook engine dispatches an HTTP POST event (`payment_intent.succeeded`) to the merchant\'s server with an HMAC-SHA256 signature header. The merchant\'s server verifies the signature, fulfills the order, and acknowledges with HTTP 200.',
      impact: 'Enables reliable distributed asynchronous commerce and CI/CD automation without locking client browser threads.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Web automation engineers use modern headless testing frameworks and webhook tunneling proxies.',
      tools: [
        'Playwright / Puppeteer: Microsoft and Google frameworks for cross-browser headless automation, screenshot rendering, and PDF generation.',
        'Svix: Enterprise webhook-as-a-service platform managing retries, exponential backoffs, and signature rotation.',
        'ngrok / Cloudflare Tunnels: Exposing local development servers to the public internet to test live incoming webhooks.'
      ],
      standards: ['HMAC-SHA256 (RFC 2104)', 'W3C WebDriver Specification']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'javascript',
      explanation: 'Securely receiving and verifying an HMAC-SHA256 webhook payload in Node.js:',
      code: `// Secure Webhook Receiver with HMAC Signature Verification
import crypto from 'crypto';

function verifyAndProcessWebhook(rawPayloadString, signatureHeader, webhookSecret) {
  // 1. Parse signature header (e.g. "t=1697000000,v1=abc123def...")
  const parts = signatureHeader.split(',');
  const timestamp = parts.find(p => p.startsWith('t='))?.split('=')[1];
  const receivedHash = parts.find(p => p.startsWith('v1='))?.split('=')[1];

  if (!timestamp || !receivedHash) {
    throw new Error('Invalid signature header structure');
  }

  // 2. Mitigate replay attacks: Reject timestamps older than 5 minutes
  const currentTime = Math.floor(Date.now() / 1000);
  if (Math.abs(currentTime - Number(timestamp)) > 300) {
    throw new Error('Webhook timestamp outside tolerance window (Replay Attack)');
  }

  // 3. Compute expected HMAC-SHA256 hash
  const signedPayload = \`\${timestamp}.\${rawPayloadString}\`;
  const expectedHash = crypto
    .createHmac('sha256', webhookSecret)
    .update(signedPayload)
    .digest('hex');

  // 4. Timing-safe comparison to prevent timing side-channel attacks
  const isMatch = crypto.timingSafeEqual(
    Buffer.from(receivedHash, 'hex'),
    Buffer.from(expectedHash, 'hex')
  );

  if (!isMatch) {
    throw new Error('HMAC signature mismatch! Unauthorized payload tampering.');
  }

  console.log('Webhook authenticated successfully!');
  return JSON.parse(rawPayloadString);
}`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Executing long-running tasks (e.g. generating a 50-page PDF report) directly inside the webhook HTTP handler.',
          reality: 'Webhook dispatchers like Stripe or Shopify enforce a strict 5-to-10-second timeout. If your handler takes 12 seconds, the dispatcher marks the delivery as failed and retries, triggering duplicate tasks. Always acknowledge with HTTP 200 immediately and push the heavy task to a background queue (Redis/BullMQ).'
        },
        {
          mistake: 'Using standard string equality (`===`) to verify cryptographic webhook signatures.',
          reality: 'Standard string equality returns false the millisecond a character mismatch is encountered, leaking execution timing. Attackers exploit this timing side-channel to forge valid signatures. Always use `crypto.timingSafeEqual()`.'
        }
      ]
    }
  },

  '5.9-impact-of-5g': {
    id: '5.9-impact-of-5g',
    chapterId: 'chapter-5',
    chapterNumber: 5,
    chapterTitle: 'The Future Web — AI, Decentralization, IoT & Spatial Web',
    code: '5.9',
    title: 'The Impact of 5G Networks on Web Technologies',
    subtitle: 'Sub-1ms latency, 10Gbps bandwidth, Multi-Access Edge Computing (MEC), and network slicing',
    difficulty: 'Intermediate',
    readTime: '16 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'Fifth-Generation (5G) cellular networks fundamentally alter the constraints of web engineering. By delivering peak download speeds exceeding 10 Gbps and radio-access latency below 1 millisecond, 5G eliminates the traditional mobile bandwidth bottleneck, enabling high-fidelity cloud-rendered web streaming, multi-camera spatial video, and real-time Multi-Access Edge Computing (MEC).',
      analogy: '3G was like a narrow garden hose: it could slowly fill a cup of text, but trying to wash a car took an hour. 4G was like a modern household kitchen faucet: you could wash dishes and stream high-definition movies reliably. 5G is like connecting your device directly to an industrial municipal water main: an immense torrent of data flows so instantaneously that distance between your handheld screen and distant supercomputer servers virtually evaporates.',
      keyPoints: [
        'Ultra-Reliable Low-Latency Communication (URLLC): Radio-access network latency under 1 millisecond for critical real-time web applications.',
        'Enhanced Mobile Broadband (eMBB): Peak cellular data rates up to 10–20 Gbps, making multi-gigabyte web application assets load instantaneously.',
        'Multi-Access Edge Computing (MEC): Placing cloud computing resources and CDN caches directly at cellular base station aggregation towers.',
        'Network Slicing: Virtualizing physical cellular infrastructure into customized virtual networks with guaranteed Quality of Service (QoS).'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: '5G Multi-Access Edge Computing (MEC) routes mobile web requests to local edge servers situated at the telecom radio tower before hitting the public internet.',
      diagram: `
+-------------------------------------------------------------------------+
|                  5G Multi-Access Edge Computing (MEC) Topology          |
+-------------------------------------------------------------------------+
[5G Mobile Web Client]
        |
        v  5G Radio Access Network (gNodeB Tower: Latency < 1ms)
[5G Cellular Tower (gNodeB)]
        |
        +-----> [Local Telecom MEC Data Center (Sub-5ms RTT)]
        |       |-- Runs Edge WebGPU / Cloud Gaming Server / Local Cache
        |       |-- Processes WebRTC frames and renders 3D directly!
        |
        v  (Only if cache miss / global persistence required)
[Public Internet Transit Backbone (30-80ms RTT)]
        |
        v
[Central Cloud Region (AWS / Google Cloud)]
`,
      specifications: [
        '3GPP Release 16 & 17 Standards for 5G Standalone (SA) Core Architecture.',
        'WebRTC (RFC 8829): Low-latency real-time video/audio streaming over UDP/SRTP.',
        'ETSI MEC Standards: Multi-Access Edge Computing framework specifications.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'NVIDIA GeForce NOW & Web-Based Cloud Gaming',
      scenario: 'Streaming 4K 120FPS Ray-Traced AAA Games Directly into Web Browsers',
      howItWorks: 'Instead of requiring users to buy \$2,000 desktop graphics cards, NVIDIA renders games on high-end server GPUs inside edge data centers. Over a 5G connection with sub-5ms round-trip times, the user\'s browser controller inputs are transmitted via WebRTC Data Channels, processed by the edge game server, and 4K 120 FPS video frames are streamed back into an HTML5 `<video>` element with zero perceivable controller lag.',
      impact: 'Renders hardware obsolescence irrelevant and turns any \$100 smartphone or smart TV into a supercomputing workstation.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Engineers designing for 5G networks leverage real-time media protocols and edge network orchestrators.',
      tools: [
        'WebRTC / WebCodecs: Browser APIs for low-latency hardware-accelerated video decoding.',
        'AWS Wavelength / Azure Edge Zones: Deploying cloud compute inside telecom carrier 5G networks (Verizon, AT&T, Vodafone).',
        'eBPF (Extended Berkeley Packet Filter): Kernel-level routing for line-rate packet processing at the 5G edge.'
      ],
      standards: ['3GPP 5G Specifications', 'W3C WebCodecs API', 'RFC 8829 (WebRTC)']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'javascript',
      explanation: 'Establishing a sub-10ms WebRTC peer connection for low-latency streaming in modern browsers:',
      code: `// Initializing a low-latency WebRTC connection for 5G edge streaming
async function initializeEdgeStream() {
  const peerConnection = new RTCPeerConnection({
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
  });

  // 1. Listen for incoming low-latency media track from 5G edge server
  peerConnection.ontrack = (event) => {
    const remoteVideoElement = document.getElementById('edge-stream-player');
    if (remoteVideoElement && event.streams[0]) {
      remoteVideoElement.srcObject = event.streams[0];
      console.log('Receiving ultra-low latency 5G edge stream!');
    }
  };

  // 2. Open an ultra-low latency UDP Data Channel for game controller inputs
  const dataChannel = peerConnection.createDataChannel('telemetry', {
    ordered: false,      // Unordered delivery for minimal latency (UDP style)
    maxRetransmits: 0    // Drop old mouse positions rather than queuing
  });

  dataChannel.onopen = () => {
    console.log('5G Low-Latency Data Channel is open and ready!');
  };

  // Send high-frequency mouse movements to edge server
  window.addEventListener('mousemove', (e) => {
    if (dataChannel.readyState === 'open') {
      dataChannel.send(JSON.stringify({ x: e.clientX, y: e.clientY, t: performance.now() }));
    }
  });

  return peerConnection;
}`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Assuming 5G coverage is 100% uniform and abandoning offline/low-bandwidth fallbacks.',
          reality: 'High-frequency 5G millimeter-wave (mmWave) signals have severe physical attenuation issues: walking behind a concrete wall or tree can instantly drop connection speeds from 2 Gbps down to congested 4G or 3G. Web applications must continue using Service Workers, local caching, and adaptive bitrate streaming.'
        },
        {
          mistake: 'Transmitting uncompressed 4K video frames over TCP connections (WebSockets or HTTP/2).',
          reality: 'TCP enforces strict in-order packet delivery. If a single packet drops over cellular radio interference, Head-of-Line (HoL) blocking halts all playback. High-speed media streaming MUST use UDP-based protocols (WebRTC or HTTP/3 QUIC).'
        }
      ]
    }
  }
};
