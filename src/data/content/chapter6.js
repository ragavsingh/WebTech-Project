/**
 * Chapter 6 Documentation Content: Production Web Engineering, Security & Performance
 */

export const CHAPTER_6_TOPICS = {
  '6.1-web-security': {
    id: '6.1-web-security',
    chapterId: 'chapter-6',
    chapterNumber: 6,
    chapterTitle: 'Production Web Engineering, Security & Performance',
    code: '6.1',
    title: 'Web Security Architecture: HTTPS, TLS 1.3, CORS, CSP & OWASP',
    subtitle: 'Public key cryptography, TLS 1.3 handshake, Cross-Origin Resource Sharing, Content Security Policy, and XSS/CSRF',
    difficulty: 'Advanced',
    readTime: '22 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'Web Security Architecture is the defensive engineering discipline required to protect client browsers, communication channels, and backend systems against adversarial exploitation. Modern web security rests upon cryptographic transport encryption (TLS 1.3), the browser Same-Origin Policy (SOP), browser isolation policies (CORS, CSP, COOP), and rigorous defenses against the OWASP Top 10 vulnerabilities.',
      analogy: 'Imagine an embassy: TLS 1.3 is an armored, bulletproof diplomatic vehicle escorted by armed guards with two-way radio verification (nobody can eavesdrop or alter the cargo in transit). The Same-Origin Policy is the border checkpoint: guards from Country A cannot walk into Embassy B and inspect their top-secret filing cabinets. Cross-Origin Resource Sharing (CORS) is a formal bilateral treaty: Embassy B explicitly signs a document stating: "We permit diplomats carrying Country A passports to view specifically files in room 12". Content Security Policy (CSP) is a strict building code: all embassy windows are welded shut, preventing anyone from sneaking in contraband weapons or listening devices.',
      keyPoints: [
        'TLS 1.3 (RFC 8446): Modern transport security achieving a 1-RTT cryptographic handshake, forward secrecy, and 0-RTT session resumption.',
        'Same-Origin Policy (SOP): Browser security boundary enforcing that scripts from Origin A (scheme + domain + port) cannot access DOM or storage on Origin B.',
        'Cross-Origin Resource Sharing (CORS): HTTP header mechanism (`Access-Control-Allow-Origin`) allowing servers to explicitly relax SOP restrictions for trusted origins.',
        'Content Security Policy (CSP): HTTP response header (`Content-Security-Policy`) preventing Cross-Site Scripting (XSS) by restricting executable script sources and disallowing inline scripts.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'The TLS 1.3 handshake streamlined older TLS protocols by cutting round-trips in half and mandating Ephemeral Diffie-Hellman for perfect forward secrecy.',
      diagram: `
+-------------------------------------------------------------------------+
|                  TLS 1.3 1-RTT Handshake Architecture                   |
+-------------------------------------------------------------------------+
Client                                                               Server
  |                                                                    |
  | -------- ClientHello (Supported Ciphers + Key Share) ------------> |
  |                                                                    |
  | <------- ServerHello (Selected Cipher + Server Key Share) -------- |
  | <------- EncryptedExtensions + Certificate + CertificateVerify --- |
  | <------- Finished (Server MAC) ----------------------------------- |
  |                                                                    |
  | [Client verifies X.509 Certificate Chain & derives Shared Secret]  |
  |                                                                    |
  | -------- Finished (Client MAC) + Encrypted Application Data -----> |
  | <------- Encrypted Application Data (HTTP/2 or HTTP/3 Frames) ---- |
`,
      specifications: [
        'RFC 8446: The Transport Layer Security (TLS) Protocol Version 1.3.',
        'W3C Content Security Policy Level 3.',
        'Fetch Standard: Cross-Origin Resource Sharing (CORS) preflight and credentials mode.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'GitHub & British Airways',
      scenario: 'Preventing Magecart Credit Card Skimming via Strict CSP and Subresource Integrity',
      howItWorks: 'In 2018, attackers compromised a third-party JavaScript file on British Airways\' website, injecting 22 lines of script that exfiltrated 380,000 passenger credit cards to an external server, resulting in a \$26 million GDPR fine. Modern platforms like GitHub deploy strict CSP headers (`script-src \'self\' \'nonce-...\'`) and Subresource Integrity (SRI) hashes on all external scripts. Even if a third-party CDN is hacked, the browser refuses to execute tampered scripts or send data to unauthorized domains.',
      impact: 'Eliminates supply-chain injection attacks and protects enterprise financial and personal user records.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Security engineers use automated vulnerability scanners and browser security header analyzers.',
      tools: [
        'OWASP ZAP (Zed Attack Proxy): Open-source web application security scanner for testing automated penetration vectors.',
        'SecurityHeaders.com: Benchmarking enterprise domains against HSTS, CSP, X-Frame-Options, and Referrer-Policy standards.',
        'DOMPurify: High-performance, battle-tested XSS sanitizer for HTML, MathML, and SVG.'
      ],
      standards: ['OWASP Top 10 Web Application Security Risks', 'NIST SP 800-52 (Guidelines for TLS)']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'javascript',
      explanation: 'Configuring production HTTP security headers and CORS in an Express / Node.js backend:',
      code: `// Hardening an enterprise web server with secure HTTP headers
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

// 1. Strict Cross-Origin Resource Sharing (CORS) Policy
app.use(cors({
  origin: (origin, callback) => {
    const allowedDomains = ['https://app.example.com', 'https://admin.example.com'];
    if (!origin || allowedDomains.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Blocked by CORS Security Policy'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Allow cookies only for trusted origins
  maxAge: 86400      // Cache preflight OPTIONS for 24 hours
}));

// 2. Comprehensive Security Headers with Helmet
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://cdn.example.com"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https://images.example.com"],
      connectSrc: ["'self'", "https://api.example.com"],
      frameAncestors: ["'none'"], // Prevent Clickjacking (X-Frame-Options)
      upgradeInsecureRequests: [] // Force HTTPS
    }
  },
  hsts: {
    maxAge: 31536000,           // 1 year in seconds
    includeSubDomains: true,
    preload: true               // Eligible for Chrome HSTS preload list
  }
}));`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Using `Access-Control-Allow-Origin: *` while simultaneously setting `Access-Control-Allow-Credentials: true`.',
          reality: 'Modern browsers will strictly reject and block this configuration as a security violation. You can never pair wildcard origin `*` with cookies/credentials, as it would expose authenticated session state to every malicious website on the internet.'
        },
        {
          mistake: 'Storing sensitive JWT session tokens in browser `localStorage`.',
          reality: 'Any Cross-Site Scripting (XSS) vulnerability anywhere in your web app can read `localStorage.getItem("token")` and exfiltrate your user\'s session permanently. Session tokens must be stored in `HttpOnly; Secure; SameSite=Strict` cookies, which are physically inaccessible to JavaScript DOM APIs.'
        }
      ]
    }
  },

  '6.2-web-performance': {
    id: '6.2-web-performance',
    chapterId: 'chapter-6',
    chapterNumber: 6,
    chapterTitle: 'Production Web Engineering, Security & Performance',
    code: '6.2',
    title: 'Web Performance Engineering & Core Web Vitals (CWV)',
    subtitle: 'Largest Contentful Paint (LCP), Interaction to Next Paint (INP), Cumulative Layout Shift (CLS), and HTTP/3 QUIC',
    difficulty: 'Advanced',
    readTime: '20 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'Web Performance Engineering is the systematic measurement, optimization, and monitoring of web speed, responsiveness, and visual stability. Google\'s Core Web Vitals (CWV) establish the global standard for user experience: Largest Contentful Paint (LCP) for loading speed, Interaction to Next Paint (INP) for interface responsiveness, and Cumulative Layout Shift (CLS) for visual stability.',
      analogy: 'Imagine opening a physical store: Largest Contentful Paint (LCP) is how many seconds customers stand in the dark until the main product display table is illuminated (target: < 2.5s). Interaction to Next Paint (INP) is what happens when a customer taps a clerk on the shoulder: do they turn around instantly, or do they freeze in a comatose trance for two seconds before responding? (target: < 200ms). Cumulative Layout Shift (CLS) is when a customer reaches out their hand to pick up a \$1 coffee mug, and suddenly the entire shelf jerks 6 inches to the right, causing them to accidentally knock over a \$500 crystal vase (target: < 0.1).',
      keyPoints: [
        'Largest Contentful Paint (LCP): Measures when the largest visual element (hero image, video poster, headline block) becomes visible. Target: <= 2.5 seconds.',
        'Interaction to Next Paint (INP): Replaced FID in 2024; measures the latency of every user tap, click, or keypress throughout the entire page lifecycle. Target: <= 200 milliseconds.',
        'Cumulative Layout Shift (CLS): Quantifies unexpected layout movement of visible elements during rendering. Target: <= 0.1.',
        'HTTP/3 & QUIC: Replaces TCP with UDP-based streams, eliminating Head-of-Line blocking and enabling 0-RTT connection resumption on mobile network switches.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'The Critical Rendering Path dictates how HTML, CSS, and JavaScript are processed by the browser layout engine into painted pixels.',
      diagram: `
+-------------------------------------------------------------------------+
|                  Browser Critical Rendering Path & Vitals               |
+-------------------------------------------------------------------------+
[HTML Network Stream]
      |
      v  Parse HTML
[DOM Tree] <----+ (Render-blocking <script src="..."> blocks DOM construction!)
      |         |
      |         v  Parse CSS
      +----> [CSSOM Tree] <----+ (Render-blocking <link rel="stylesheet">)
                |
                v  Combine DOM + CSSOM
          [Render Tree]
                |
                v  Calculate Geometry (Width, Height, Coordinates)
            [Layout] (Triggers CLS if elements shift unexpectedly!)
                |
                v  Rasterize Pixels
            [Paint]  ----> [LCP: Largest element renders to screen!]
                |
                v  Send layers to GPU
          [Composite]
`,
      specifications: [
        'W3C Performance Timeline & Navigation Timing APIs.',
        'RFC 9000: QUIC — A UDP-Based Multiplexed and Secure Transport.',
        'Chrome UX Report (CrUX) Field Data Methodology.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Vodafone & Pinterest',
      scenario: 'Improving Core Web Vitals to Drive a 31% Increase in Sales Conversion',
      howItWorks: 'Vodafone executed an engineering sprint to optimize its LCP by 31% (from 4.1s down to 2.8s) by preloading hero WebP images (`<link rel="preload">`) and deferring non-critical third-party analytics scripts. A concurrent A/B test demonstrated that the faster variant generated an 8% increase in sales conversions and an 11% increase in cart visits.',
      impact: 'Proves directly that web performance engineering directly drives corporate bottom-line revenue.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Performance engineers correlate synthetic lab benchmarks with real-user field telemetry.',
      tools: [
        'Google Lighthouse / PageSpeed Insights: Synthetic laboratory auditing tool simulating mobile throttled CPUs and 4G networks.',
        'web-vitals JavaScript Library: Google’s official library for recording real user CWV metrics directly from production browsers.',
        'SpeedCurve / Datadog RUM: Real User Monitoring (RUM) dashboards tracking P75 and P95 latency percentiles across the globe.'
      ],
      standards: ['W3C Resource Timing Level 2', 'Core Web Vitals Thresholds (Google)']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'javascript',
      explanation: 'Instrumenting and logging real-user Core Web Vitals to an enterprise analytics endpoint:',
      code: `// Measuring Real User Monitoring (RUM) Core Web Vitals in production
import { onLCP, onINP, onCLS } from 'web-vitals';

function sendToAnalyticsMetric({ name, value, rating, id, navigationType }) {
  const payload = JSON.stringify({
    metric: name,
    value: Math.round(name === 'CLS' ? value * 1000 : value), // Normalize
    rating, // 'good' | 'needs-improvement' | 'poor'
    metricId: id,
    navigationType,
    url: window.location.pathname,
    effectiveConnectionType: navigator.connection?.effectiveType || 'unknown'
  });

  // Use sendBeacon to ensure telemetry is sent even if user navigates away
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/telemetry/vitals', payload);
  } else {
    fetch('/api/telemetry/vitals', { method: 'POST', body: payload, keepalive: true });
  }
}

// Subscribe to official CWV metrics
onLCP(sendToAnalyticsMetric);
onINP(sendToAnalyticsMetric);
onCLS(sendToAnalyticsMetric);`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Using `loading="lazy"` on above-the-fold hero banner images.',
          reality: 'Applying `loading="lazy"` tells the browser to defer fetching the image until scrolling occurs. For the hero image, this delays the network request by hundreds of milliseconds, directly destroying your LCP score. Above-the-fold hero images should always use `fetchpriority="high"` and `<link rel="preload">`.'
        },
        {
          mistake: 'Embedding dynamic images, ads, or iframes without explicit `width` and `height` dimensions in HTML.',
          reality: 'When the browser does not know the aspect ratio in advance, it allocates 0 height. Once the image downloads, it suddenly pushes the entire page text down by 400 pixels, producing massive Cumulative Layout Shift (CLS).'
        }
      ]
    }
  },

  '6.3-global-production-systems': {
    id: '6.3-global-production-systems',
    chapterId: 'chapter-6',
    chapterNumber: 6,
    chapterTitle: 'Production Web Engineering, Security & Performance',
    code: '6.3',
    title: 'Global Production Architectures: How Netflix, Cloudflare & Stripe Run the Web',
    subtitle: 'Anycast DNS routing, micro-frontends, edge worker computation, multi-region database replication, and zero-downtime deploys',
    difficulty: 'Advanced',
    readTime: '24 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'Global Production Architecture is the synthesis of networking, distributed systems, and frontend orchestration that allows web platforms to serve billions of users across hundreds of countries with 99.999% availability. Case studies of Netflix (Open Connect CDN & micro-frontends), Cloudflare (Anycast routing & V8 isolate edge compute), and Stripe (idempotent multi-region financial ledgers) provide the blueprint for modern web engineering.',
      analogy: 'Running a small blog is like operating a local lemonade stand: you squeeze lemons in a pitcher and hand glasses to neighbors. Running Netflix or Stripe is like supplying clean, drinkable water to 500 million citizens across 190 countries simultaneously: you build international reservoirs, undersea pipelines, pressure-release valves, automatic water purification plants, and emergency backup channels. If an earthquake destroys three main reservoirs, valves automatically twist in milliseconds and citizens never notice a single drop in water pressure.',
      keyPoints: [
        'Anycast BGP Routing: Advertising identical IP addresses from 300+ global edge data centers; internet routers automatically send user packets to the topologically closest PoP.',
        'Edge Compute Isolates: Replacing heavy, slow-starting Docker containers (1,000ms cold starts) with Google V8 isolates (sub-5ms cold starts) running at the CDN edge.',
        'Multi-Region Active-Active Persistence: Replicating database state globally with conflict-free replicated data types (CRDTs) or distributed consensus (Spanner / CockroachDB).',
        'Blue-Green & Canary Deployments: Progressively rolling out software changes to 1% of traffic, measuring automated error budgets before promoting to 100%.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'The global production web stack coordinates Anycast DNS, edge security shields, micro-frontend modules, and multi-region database clusters.',
      diagram: `
+-------------------------------------------------------------------------+
|                  Global Enterprise Web Architecture Topology            |
+-------------------------------------------------------------------------+
[Global Web & Mobile Clients]
        |
        v  Anycast BGP (Routes to topologically closest PoP)
[Global Edge PoP Fleet (Cloudflare / Fastly)]
  |-- Layer 3/4 DDoS Mitigation (eBPF filtering)
  |-- TLS 1.3 Termination & HTTP/3 QUIC Gateway
  |-- Static Assets Cached in Edge SSDs (Cache Hit: 95% of traffic)
  |-- Edge Workers (V8 Isolates): JWT verification & Geolocation routing
        |
        v  Private Dedicated Fiber-Optic Backbone
[Global Load Balancing Layer (Envoy / AWS ALB)]
        |
   +----+-------------------------+-------------------------+
   | Region: US-East              | Region: EU-Central      | Region: AP-East
   v                              v                         v
[Kubernetes Container Mesh]   [Kubernetes Container Mesh]   [Kubernetes Mesh]
(Checkout, Streaming, Search) (Checkout, Streaming, Search) (Checkout, Search)
   |                              |                         |
   +----+-------------------------+-------------------------+
        |
        v  Distributed Consensus & Spanner Multi-Region Replication
+-------------------------------------------------------------------------+
| Global Distributed Database Cluster (Google Cloud Spanner / CockroachDB)|
| Synchronized atomic clocks (TrueTime API) providing global ACID!       |
+-------------------------------------------------------------------------+
`,
      specifications: [
        'RFC 4786: Operation of Anycast Services.',
        'Google TrueTime API & Spanner External Consistency (Serializability).',
        'Module Federation (Webpack / Vite) for runtime micro-frontend composition.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Netflix Open Connect, Cloudflare Workers & Stripe Ledger',
      scenario: 'Streaming 15% of the Entire Planet\'s Internet Traffic with Zero Buffering',
      howItWorks: 'Netflix does not stream video files from AWS data centers. Instead, it built its own custom hardware Content Delivery Appliance called Open Connect Appliance (OCA). Netflix embeds thousands of these free storage appliances directly inside local ISP exchange centers (Comcast, Vodafone, Airtel). During off-peak hours (3 AM), Netflix pre-positions the newest 4K movie files onto local ISP appliances. When millions of users hit "Play" on Friday night, the video streams over local ISP optical fiber directly from their hometown exchange.',
      impact: 'Reduces international transit traffic costs by 99% and eliminates video buffering for 260+ million subscribers.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Enterprise production systems leverage service meshes and distributed tracing observability platforms.',
      tools: [
        'Envoy Proxy: High-performance C++ distributed proxy designed for cloud-native service meshes.',
        'OpenTelemetry (OTel): Vendor-neutral standard for generating and collecting distributed traces and metrics.',
        'Argo CD: Declarative GitOps continuous delivery tool for Kubernetes cluster deployments.'
      ],
      standards: ['Cloud Native Computing Foundation (CNCF) Graduated Projects', 'W3C Trace Context']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'javascript',
      explanation: 'Implementing an idempotent financial charging function with distributed locks in Node.js & Redis:',
      code: `// Enterprise Idempotent Payment Processor with Redis Distributed Lock
import Redis from 'ioredis';
const redis = new Redis(process.env.REDIS_URL);

async function processIdempotentPayment({ idempotencyKey, customerId, amountCents, chargeFn }) {
  if (!idempotencyKey) {
    throw new Error('Idempotency-Key header is required for financial operations.');
  }

  const lockKey = \`lock:payment:\${idempotencyKey}\`;
  const resultKey = \`result:payment:\${idempotencyKey}\`;

  // 1. Check if this exact operation already succeeded previously
  const cachedResponse = await redis.get(resultKey);
  if (cachedResponse) {
    console.log('[Idempotency] Returning previously cached transaction result.');
    return JSON.parse(cachedResponse);
  }

  // 2. Acquire a distributed lock with a 10-second auto-expiry (prevent race conditions)
  const acquiredLock = await redis.set(lockKey, 'locked', 'NX', 'EX', 10);
  if (!acquiredLock) {
    throw new Error('Concurrent transaction in progress. Please wait.');
  }

  try {
    // 3. Execute the critical financial charge
    console.log(\`[Stripe Ledger] Debiting \$\${(amountCents / 100).toFixed(2)} from \${customerId}...\`);
    const chargeResult = await chargeFn();

    // 4. Cache the successful result with 24-hour TTL for replay protection
    await redis.set(resultKey, JSON.stringify(chargeResult), 'EX', 86400);

    return chargeResult;
  } finally {
    // 5. Always release lock
    await redis.del(lockKey);
  }
}`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Failing to implement idempotency keys on payment, transfer, and checkout endpoints.',
          reality: 'If a mobile user taps "Pay \$500" and their subway enters a tunnel, the HTTP request might succeed at the server but timeout at the client. The user taps "Pay" a second time, charging their credit card twice ($1,000). With idempotency keys, duplicate requests safely return the cached first receipt.'
        },
        {
          mistake: 'Deploying database migrations with column locks (e.g. `ALTER TABLE orders ADD COLUMN ... DEFAULT ...`) on live tables with millions of rows.',
          reality: 'On PostgreSQL or MySQL, altering large tables locks writes for minutes, causing connection backpressure to explode and knocking your entire web service offline. Always follow the Expand-and-Contract (two-phase) zero-downtime migration pattern.'
        }
      ]
    }
  }
};
