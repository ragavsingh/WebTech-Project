/**
 * Unit 4: Web 2.0, Social Web, Semantic Web & Emerging Paradigms
 * "The Evolution from the Social Web to the Intelligent Web"
 * Comprehensive documentation, step-by-step lifecycles, wire records,
 * practical examples, misconceptions, challenges, and diagnostic quizzes.
 */

export const UNIT_4_DEFINITION = {
  id: "unit-4",
  number: 4,
  title: "Unit 4: Web 2.0, Social Web, Semantic Web & Emerging Paradigms",
  description: "The Evolution from the Social Web to the Intelligent Web: Master Web 2.0 participation, Blogs, Wikis, Social Networks, AJAX, RSS, Ruby on Rails, Open APIs, Semantic Web, RDF Triples, Widgets, Mashups, Multi-Tier Information Systems, Search Engines, Recommender Systems, Blockchain, Edge Computing, and Modern Dark Mode.",
  iconName: "Share2",
  accentColor: "purple",
  topicCount: 17,
  estimatedHours: 8.5,
  topics: [
    { id: "web20-evolution", title: "Web 2.0: The Participatory Read-Write Web", difficulty: "Beginner", duration: "16 min", isImplemented: true },
    { id: "interactive-social-web", title: "Interactive & Social Web: Blogs, Wikis & Networks", difficulty: "Beginner", duration: "18 min", isImplemented: true },
    { id: "ajax-web20", title: "Technologies Behind Web 2.0: AJAX & Asynchrony", difficulty: "Intermediate", duration: "16 min", isImplemented: true },
    { id: "rss-syndication", title: "RSS: XML Web Syndication & Content Aggregation", difficulty: "Beginner", duration: "14 min", isImplemented: true },
    { id: "ruby-on-rails-mvc", title: "Ruby on Rails: MVC & Convention over Configuration", difficulty: "Intermediate", duration: "18 min", isImplemented: true },
    { id: "open-apis-rest", title: "Open APIs: RESTful Architecture & Web Ecosystems", difficulty: "Intermediate", duration: "18 min", isImplemented: true },
    { id: "web30-semantic-web", title: "Web 3.0 & The Semantic Web: Machine-Readable Data", difficulty: "Intermediate", duration: "18 min", isImplemented: true },
    { id: "rdf-triples", title: "RDF: Resource Description Framework & Triples", difficulty: "Intermediate", duration: "20 min", isImplemented: true },
    { id: "web-widgets", title: "Web Widgets: Modular Embeddable Client Dashboards", difficulty: "Beginner", duration: "14 min", isImplemented: true },
    { id: "web-mashups", title: "Web Mashups: Multi-Source API Data Composition", difficulty: "Intermediate", duration: "16 min", isImplemented: true },
    { id: "web-information-systems", title: "Web-Based Information Systems: Multi-Tier Architecture", difficulty: "Intermediate", duration: "18 min", isImplemented: true },
    { id: "search-engines", title: "Search Engines: Crawling, Inverted Indexing & PageRank", difficulty: "Advanced", duration: "20 min", isImplemented: true },
    { id: "recommender-systems", title: "Recommender Systems: Collaborative & Content Filtering", difficulty: "Advanced", duration: "18 min", isImplemented: true },
    { id: "blockchain-benefits", title: "Benefits of Blockchain: Distributed Ledgers & Consensus", difficulty: "Intermediate", duration: "18 min", isImplemented: true },
    { id: "edge-computing", title: "Edge Computing & CDNs: Cloud vs. Edge Latency", difficulty: "Intermediate", duration: "16 min", isImplemented: true },
    { id: "dark-mode-web", title: "Dark Mode in Web Development: CSS Tokens & WCAG Contrast", difficulty: "Beginner", duration: "14 min", isImplemented: true },
    { id: "unit4-evolution-lab", title: "Capstone Lab: Evolution of the Web Laboratory", difficulty: "Intermediate", duration: "25 min", isImplemented: true }
  ]
};

export const UNIT_4_TOPICS = {
  // ==========================================
  // TOPIC 1: WEB 2.0 EVOLUTION
  // ==========================================
  "web20-evolution": {
    id: "web20-evolution",
    unitId: "unit-4",
    unitNumber: 4,
    unitTitle: "Unit 4: Web 2.0, Social Web, Semantic Web & Emerging Paradigms",
    title: "Web 2.0: The Participatory Read-Write Web",
    subtitle: "The profound transformation from static broadcast documents to collaborative, user-generated web ecosystems",
    difficulty: "Beginner",
    estimatedMinutes: 16,
    badge: "Web Evolution",

    definition: "Web 2.0 refers to the second generation of World Wide Web development that emphasized user-generated content, participatory culture, interoperability for end users, and rich internet applications (RIAs). Coined by Darcy DiNucci in 1999 and popularized by Tim O'Reilly in 2004, Web 2.0 did not represent a new technical specification, but rather a fundamental paradigm shift in how software engineers and everyday users leveraged existing Internet protocols.",

    whyItMatters: "Before Web 2.0, the web was essentially a digital brochure: a small minority of webmasters published static HTML pages that millions passively read. Web 2.0 democratized publishing, transforming consumers into prosumers. Without the architectural patterns pioneered during Web 2.0—dynamic asynchronous client-server calls, RESTful JSON APIs, and cloud-hosted databases—modern platforms like GitHub, Wikipedia, YouTube, and Figma could not exist.",

    explanation: [
      {
        heading: "Beginner Explanation: The Library vs. The Global Town Square",
        content: "Imagine a traditional public library in 1995: professional authors write books, librarians curate them on shelves, and visitors quietly read them. If a reader noticed a typo or wanted to add their thoughts, they could not alter the book.\n\nWeb 2.0 turned that library into a global town square. In this town square, anyone can set up a booth (a Blog), write on a shared community whiteboard (a Wiki), or hold open town-hall debates (Social Networking). The web stopped being a presentation slide and became a shared conversation."
      },
      {
        heading: "Architectural Shift: Web 1.0 vs. Web 2.0",
        content: "The transition from Web 1.0 to Web 2.0 altered every layer of the web application stack:\n1. Interaction Paradigm: Shifted from Read-Only (one-to-many broadcast) to Read-Write (many-to-many collaboration).\n2. Presentation Layer: Evolved from static table layouts and frame sets into dynamic CSS, DOM manipulation, and asynchronous partial page refreshes.\n3. Application Model: Shifted from monolithic static file directories into database-backed Model-View-Controller (MVC) frameworks.\n4. Distribution: Replaced periodic software CD installations with continuous 'Software as a Service' (SaaS) running in the browser."
      },
      {
        heading: "Core Characteristics of Web 2.0 Platforms",
        bullets: [
          "The Web as a Platform: Software applications executed inside web browsers rather than requiring local desktop installation.",
          "Harnessing Collective Intelligence: Systems derive value directly from the network effects of user contributions (e.g. Wikipedia, Stack Overflow).",
          "Data as the 'Intel Inside': Proprietary databases and user social graphs became the core competitive advantage of software companies.",
          "Rich User Experiences: Desktop-grade fluidity in web applications powered by AJAX, SVG, and modern JavaScript runtimes."
        ]
      }
    ],

    howItWorks: [
      { step: 1, title: "User Interaction", subtitle: "Client Browser", description: "User submits a comment, uploads media, or edits a document directly in the browser interface." },
      { step: 2, title: "Asynchronous Dispatch", subtitle: "Network Layer", description: "Browser dispatches background HTTP POST/PUT request carrying JSON or multipart form data." },
      { step: 3, title: "Application Processing", subtitle: "App Server", description: "Web application framework validates payload, authenticates user session, and sanitizes input." },
      { step: 4, title: "Database Mutation", subtitle: "Data Tier", description: "Relational or NoSQL database writes record within an ACID transaction." },
      { step: 5, title: "Reactive Broadcast", subtitle: "Live Updates", description: "Application pushes notification or updates DOM in real-time across connected community members." }
    ],

    simulationType: "web-evolution-timeline",

    practicalExample: {
      scenario: "Static Brochureware vs. Participatory Social Web",
      description: "Comparing how a news announcement was handled in Web 1.0 versus Web 2.0.",
      records: [
        { type: "Web 1.0", host: "GET /press-release.html", value: "Static HTML file uploaded via FTP by Webmaster", ttl: "Static", purpose: "Passive broadcast to readers; no feedback or user interaction" },
        { type: "Web 2.0", host: "POST /api/articles/92/comments", value: "{\"body\": \"Great analysis!\", \"author\": \"alice\"}", ttl: "Dynamic", purpose: "Instant reader commentary persisted to PostgreSQL and rendered via DOM injection" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Assuming Web 2.0 was a new internet protocol or official W3C standard version",
        reality: "Web 2.0 was an architectural, social, and design movement! It utilized the exact same underlying TCP/IP and HTTP protocols as Web 1.0, but combined them with dynamic databases, AJAX, and user collaboration."
      },
      {
        misconception: "Believing Web 2.0 replaced HTML with an entirely new markup language",
        reality: "HTML remained the foundational structural format; Web 2.0 simply utilized client-side JavaScript to mutate HTML dynamically in the browser without requiring full-page server round-trips."
      }
    ],

    relatedTopics: [
      { id: "interactive-social-web", title: "Interactive & Social Web: Blogs, Wikis & Networks", unitId: "unit-4" },
      { id: "ajax-web20", title: "Technologies Behind Web 2.0: AJAX & Asynchrony", unitId: "unit-4" }
    ],

    challenge: {
      id: "challenge-w2-01",
      title: "Identify the Architectural Hallmark of Web 2.0",
      difficulty: "Beginner",
      badge: "Web 2.0 Core",
      description: "A university replaces its static HTML departmental noticeboard with a platform allowing students to submit peer reviews, collaborate on shared revision study guides, and receive live notifications.",
      task: "Which Web 2.0 principle is best embodied by this architectural transformation?",
      options: [
        { id: "opt-1", text: "Switching from TCP to UDP for faster packet transit.", correct: false, reason: "Web 2.0 runs over standard TCP/HTTP." },
        { id: "opt-2", text: "Harnessing collective intelligence and shifting from passive consumption to active read-write collaboration.", correct: true, reason: "Correct! The defining characteristic of Web 2.0 is transforming audiences into collaborative co-creators of content." },
        { id: "opt-3", text: "Removing all databases to ensure files are served purely from disk.", correct: false, reason: "Web 2.0 relies extensively on dynamic relational databases." }
      ],
      hint: "Think about who creates the information on the platform."
    },

    quiz: [
      {
        id: "w2-q1",
        question: "Who popularized the term 'Web 2.0' through a landmark conference in 2004?",
        options: ["Tim Berners-Lee", "Tim O'Reilly", "Marc Andreessen", "Linus Torvalds"],
        correctIndex: 1,
        explanation: "Tim O'Reilly and Dale Dougherty popularized 'Web 2.0' during the 2004 O'Reilly Media conference."
      },
      {
        id: "w2-q2",
        question: "Which of the following best represents a pure Web 1.0 application?",
        options: [
          "A collaborative Wikipedia article with revision history.",
          "A static personal homepage hosted on GeoCities with a guestbook.",
          "A real-time Twitter/X social feed.",
          "A cloud-based Google Docs spreadsheet."
        ],
        correctIndex: 1,
        explanation: "A static personal homepage authored solely by a single webmaster and hosted on GeoCities is the quintessential Web 1.0 artifact."
      }
    ]
  },

  // ==========================================
  // TOPIC 2: INTERACTIVE AND SOCIAL WEB
  // ==========================================
  "interactive-social-web": {
    id: "interactive-social-web",
    unitId: "unit-4",
    unitNumber: 4,
    unitTitle: "Unit 4: Web 2.0, Social Web, Semantic Web & Emerging Paradigms",
    title: "Interactive & Social Web: Blogs, Wikis & Networks",
    subtitle: "The core social software triumvirate that catalyzed participatory internet culture",
    difficulty: "Beginner",
    estimatedMinutes: 18,
    badge: "Social Web",

    definition: "The Interactive and Social Web consists of software applications and networked platforms designed to facilitate human social interaction, collaborative content creation, opinion sharing, and relationship management. Its three historical cornerstones are Blogs (chronological self-publishing), Wikis (open collaborative hypermedia documents), and Social Networking Sites (relational graph-based communication streams).",

    whyItMatters: "Before social software, publishing written content to the web required specialized technical knowledge of HTML syntax, FTP client software, and web server file permissions. By abstracting away server administration behind intuitive browser-based WYSIWYG editors and relational user databases, social software allowed ordinary citizens, scientists, and journalists to publish, critique, and synthesize global knowledge.",

    explanation: [
      {
        heading: "1. Weblogs (Blogs): The Rise of Personal Publishing",
        content: "A Weblog (shortened to 'Blog' by Peter Merholz in 1999) is an online journal displaying entries in reverse chronological order (newest on top). Key architectural innovations of blogs include:\n- Permalinks: Permanent unique URLs assigned to individual posts so they could be referenced across the web.\n- Trackbacks & Pingbacks: Automated notifications sent between blogs when one author linked to another.\n- Comments Threading: Reader engagement directly appended beneath published articles.\n- Taxonomies & Folksonomies: Organizing content using categories and user-defined tags ('tag clouds')."
      },
      {
        heading: "2. Wikis: Radical Collaborative Knowledge Authoring",
        content: "Invented by Ward Cunningham in 1995 (WikiWikiWeb, derived from the Hawaiian word for 'quick'), a Wiki allows any visitor to edit, expand, or restructure web pages directly in their browser. Key wiki architecture features include:\n- Open Editing: Low barrier to contribution using lightweight markup (Wikitext or Markdown).\n- Version Control & History: Every modification creates an immutable snapshot record in a relational database.\n- Visual Diffs: Side-by-side comparison tools highlighting additions in green and deletions in red.\n- Rollback Capabilities: Instant one-click reversal of malicious edits or erroneous content."
      },
      {
        heading: "3. Social Networking Sites (SNS): Graph-Based Connection",
        content: "Social Networking Sites (pioneered by SixDegrees, Friendster, MySpace, and Facebook) model users as nodes in a graph connected by edges representing relationships (friendship, following, or subscription). SNS architecture revolves around:\n- Public / Semi-Public Profiles: Digital identity management.\n- Social Graphs: Traversal of directional or bidirectional connection links.\n- Activity Feeds: Algorithmic or chronological streams aggregating actions across a user's network graph.\n- Reactive Engagement: Micro-interactions including likes, reactions, reshares, and threaded comments."
      }
    ],

    howItWorks: [
      { step: 1, title: "Content Composition", subtitle: "Browser Interface", description: "Author writes article or status update in client-side text editor." },
      { step: 2, title: "Persistence & Versioning", subtitle: "Database Tier", description: "Server saves content; for wikis, an immutable revision record is generated." },
      { step: 3, title: "Social Graph Propagation", subtitle: "Activity Stream", description: "Event engine notifies followers or recalculates community feed timelines." },
      { step: 4, title: "Bidirectional Interaction", subtitle: "Community Feedback", description: "Peers append comments, execute likes, or fork wiki documents." }
    ],

    simulationType: "social-web-sim",

    practicalExample: {
      scenario: "Wiki Revision Control Database Record",
      description: "How a wiki software architecture logs collaborative edits in a relational schema.",
      records: [
        { type: "Revision 101", host: "wiki_pages table", value: "content: 'HTTP is a stateless protocol.', author: 'ward'", ttl: "Snapshot", purpose: "Initial page creation" },
        { type: "Revision 102", host: "wiki_revisions table", value: "content: 'HTTP is an application-layer stateless protocol.', author: 'ada'", ttl: "Snapshot", purpose: "Collaborative edit appending technical precision" },
        { type: "Diff Query", host: "SELECT diff(rev101, rev102)", value: "+'application-layer '", ttl: "Computed", purpose: "Calculates visual diff showing green text insertion" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Believing wikis are inherently insecure because anyone can edit them",
        reality: "Wiki security is based on soft security: complete transparency, radical auditability, and instant rollback. The cost of reverting vandalism is orders of magnitude lower than the cost of committing it."
      }
    ],

    relatedTopics: [
      { id: "web20-evolution", title: "Web 2.0: The Participatory Read-Write Web", unitId: "unit-4" },
      { id: "rss-syndication", title: "RSS: XML Web Syndication & Content Aggregation", unitId: "unit-4" }
    ],

    challenge: {
      id: "challenge-social-01",
      title: "Evaluate Wiki Accountability Architecture",
      difficulty: "Beginner",
      badge: "Wiki Principles",
      description: "An organization wants to build an internal documentation system but fears that accidental edits might destroy critical engineering manuals.",
      task: "Which foundational feature of Wiki architecture solves this concern?",
      options: [
        { id: "opt-1", text: "Encrypting the server hard drives with BitLocker.", correct: false, reason: "Drive encryption protects against physical theft, not accidental edits." },
        { id: "opt-2", text: "Immutable revision history logs with side-by-side diffing and instant one-click rollback.", correct: true, reason: "Correct! Every edit in a wiki creates a permanent revision snapshot, allowing instant restoration of previous states." },
        { id: "opt-3", text: "Converting all pages into non-editable PDF files.", correct: false, reason: "This eliminates the core collaborative value of a wiki." }
      ],
      hint: "Consider how wikis store changes over time."
    },

    quiz: [
      {
        id: "soc-q1",
        question: "Who invented the first wiki software (WikiWikiWeb) in 1995?",
        options: ["Ward Cunningham", "Jimmy Wales", "Tim Berners-Lee", "Brendan Eich"],
        correctIndex: 0,
        explanation: "Ward Cunningham created WikiWikiWeb in 1995 to facilitate rapid pattern documentation among software engineers."
      },
      {
        id: "soc-q2",
        question: "What is the primary role of a 'Permalink' in blog architecture?",
        options: [
          "To delete comments after 30 days.",
          "To provide an unchanging, permanent URL targeting a specific post for eternal reference across the web.",
          "To compress images into WebP format.",
          "To password-protect the server."
        ],
        correctIndex: 1,
        explanation: "Permalinks guarantee that deep-links to specific blog entries remain permanently valid even as the front page shifts."
      }
    ]
  },

  // ==========================================
  // TOPIC 3: AJAX IN WEB 2.0
  // ==========================================
  "ajax-web20": {
    id: "ajax-web20",
    unitId: "unit-4",
    unitNumber: 4,
    unitTitle: "Unit 4: Web 2.0, Social Web, Semantic Web & Emerging Paradigms",
    title: "Technologies Behind Web 2.0: AJAX & Asynchrony",
    subtitle: "How asynchronous background networking transformed the browser from a document viewer into an operating environment",
    difficulty: "Intermediate",
    estimatedMinutes: 16,
    badge: "Web 2.0 Tech",

    definition: "AJAX (Asynchronous JavaScript and XML), coined by Jesse James Garrett in February 2005, describes a suite of interconnected web development techniques used on the client side to create asynchronous web applications. By sending and retrieving data from a web server in the background without interfering with the display and behavior of the existing page, AJAX decoupled the data interchange layer from the presentation layer.",

    whyItMatters: "Prior to AJAX, every single user action—such as voting on a poll, searching a catalog, or submitting a comment—triggered a synchronous HTTP request that unloaded the entire document, displayed a blank white screen, and re-rendered identical headers, sidebars, and styling from scratch. AJAX eliminated this 'click-and-wait' friction, enabling rich, desktop-class web applications like Google Maps and Gmail.",

    explanation: [
      {
        heading: "The Historical Problem: Synchronous White-Screen Flickering",
        content: "In Web 1.0, the browser's interaction loop was tightly bound to the HTTP request-response cycle:\n`User clicks button` $\\rightarrow$ `Browser freezes UI` $\\rightarrow$ `Full page HTML fetched` $\\rightarrow$ `Screen blanks out` $\\rightarrow$ `Entire DOM rebuilt`.\n\nThis made web applications feel sluggish and brittle compared to native desktop software."
      },
      {
        heading: "The AJAX Solution: Decoupling Data Transit from Presentation",
        content: "AJAX introduced an asynchronous intermediary engine (initially `XMLHttpRequest`, now modern `fetch()`): \n1. User clicks an interactive element.\n2. JavaScript catches the event and dispatches a compact HTTP request in the background.\n3. The user continues reading or typing; the UI never freezes.\n4. Server returns a lightweight structured payload (JSON or XML) containing only the changed data.\n5. JavaScript inspects the payload and modifies only the targeted DOM node in-place."
      },
      {
        heading: "Bandwidth and Latency Efficiencies",
        bullets: [
          "Network Payload Reduction: Updating a shopping cart via full page reload requires ~800 KB of HTML, CSS, and scripts; updating via AJAX requires ~250 bytes of JSON.",
          "Perceived Performance: Instant UI updates (under 50ms) replace full document re-render latency (1,000ms+).",
          "Server Scalability: Web servers spend CPU cycles serializing raw data rather than rendering thousands of duplicate HTML presentation templates."
        ]
      }
    ],

    howItWorks: [
      { step: 1, title: "Client Event Trigger", subtitle: "DOM Event", description: "User triggers event (e.g. `oninput`, `onclick`)." },
      { step: 2, title: "Background Request", subtitle: "Fetch API", description: "JavaScript dispatches asynchronous HTTP request with `fetch('/api/data')`." },
      { step: 3, title: "Server Execution", subtitle: "Endpoint Handler", description: "Server processes business logic and returns structured JSON (HTTP 200 OK)." },
      { step: 4, title: "In-Place DOM Mutation", subtitle: "Selective Render", description: "JavaScript parses response and mutates only the targeted element via `document.getElementById()`." }
    ],

    // REUSE existing Unit 3 simulation component without code duplication!
    simulationType: "ajax-comparison",

    practicalExample: {
      scenario: "Search Autocomplete via Fetch API",
      description: "Modern asynchronous code executing search suggestions as the user types.",
      records: [
        { type: "Event", host: "input.addEventListener('input')", value: "Capture query 'react'", ttl: "Client", purpose: "Detects keystroke without form submission" },
        { type: "Fetch", host: "fetch('/api/search?q=react')", value: "HTTP GET background dispatch", ttl: "Transit", purpose: "Transfers query to backend endpoint" },
        { type: "JSON Return", host: "HTTP 200 OK", value: "[\"react hooks\", \"react router\", \"react native\"]", ttl: "Data", purpose: "Delivers compact suggestion array (120 bytes)" },
        { type: "DOM Update", host: "suggestionsList.innerHTML", value: "Render <li> elements in-place", ttl: "Client", purpose: "Updates dropdown without page flicker" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Believing AJAX requires XML because the acronym stands for Asynchronous JavaScript and XML",
        reality: "XML has been almost entirely superseded by JSON (JavaScript Object Notation) due to JSON's native compatibility with JavaScript, lighter payload size, and human readability."
      }
    ],

    relatedTopics: [
      { id: "web20-evolution", title: "Web 2.0: The Participatory Read-Write Web", unitId: "unit-4" },
      { id: "open-apis-rest", title: "Open APIs: RESTful Architecture & Web Ecosystems", unitId: "unit-4" }
    ],

    challenge: {
      id: "challenge-ajax-01",
      title: "Analyze Page Update Efficiency",
      difficulty: "Intermediate",
      badge: "AJAX Architecture",
      description: "An e-commerce site displays 100 products per page. When a user clicks 'Add to Wishlist' on one item, the entire browser page blinks white and reloads all 100 product images and styling.",
      task: "How should this application be re-architected using Web 2.0 principles?",
      options: [
        { id: "opt-1", text: "Use AJAX/Fetch to send a background POST request and update only that item's wishlist heart icon in the DOM.", correct: true, reason: "Correct! Decoupling data updates from the presentation layer eliminates full-page reloads and saves massive bandwidth." },
        { id: "opt-2", text: "Increase server CPU RAM to make the full page reload faster.", correct: false, reason: "Hardware upgrades do not fix fundamental architectural inefficiency." },
        { id: "opt-3", text: "Delete 90 products so the page size is smaller.", correct: false, reason: "Artificially degrading product catalog content is poor engineering." }
      ],
      hint: "Consider how to update only the single modified component."
    },

    quiz: [
      {
        id: "ajx-q1",
        question: "Who coined the term AJAX in a seminal 2005 article?",
        options: ["Jesse James Garrett", "Douglas Crockford", "Brendan Eich", "Tim O'Reilly"],
        correctIndex: 0,
        explanation: "Jesse James Garrett coined 'AJAX' in his February 2005 essay titled 'Ajax: A New Approach to Web Applications'."
      },
      {
        id: "ajx-q2",
        question: "What is the primary network benefit of AJAX over traditional Web 1.0 form submissions?",
        options: [
          "It completely removes the need for web servers.",
          "It allows partial data updates, reducing transmitted payload from entire HTML documents to compact data strings.",
          "It allows web pages to work without internet connectivity.",
          "It forces browsers to render faster graphics."
        ],
        correctIndex: 1,
        explanation: "By exchanging small JSON payloads in the background, AJAX eliminates the overhead of re-transmitting duplicate HTML boilerplate."
      }
    ]
  },

  // ==========================================
  // TOPIC 4: RSS & WEB SYNDICATION
  // ==========================================
  "rss-syndication": {
    id: "rss-syndication",
    unitId: "unit-4",
    unitNumber: 4,
    unitTitle: "Unit 4: Web 2.0, Social Web, Semantic Web & Emerging Paradigms",
    title: "RSS: XML Web Syndication & Content Aggregation",
    subtitle: "Decentralized publishing protocols that empowered the blogosphere and podcasting",
    difficulty: "Beginner",
    estimatedMinutes: 14,
    badge: "Web Syndication",

    definition: "RSS (Really Simple Syndication, originally RDF Site Summary) is a standardized XML-based dialect used for publishing frequently updated web content—such as blog entries, news headlines, audio podcasts, and video episodes. An RSS document (called a 'feed', 'web feed', or 'channel') contains full or summarized text and metadata that automated feed reader aggregators poll and display.",

    whyItMatters: "RSS was the premier decentralized distribution network of the early web. Before algorithmic timelines governed by closed social media conglomerates, RSS gave users complete autonomy to curate their personal newsroom. By publishing a standard XML file, any independent writer could distribute content directly to thousands of subscribers without intermediary gatekeepers, censorship, or algorithmic manipulation.",

    explanation: [
      {
        heading: "Anatomy of an RSS 2.0 Feed Document",
        content: "An RSS feed is a well-formed XML document structured hierarchically:\n- `<rss version=\"2.0\">`: The root wrapper element declaring the specification version.\n- `<channel>`: Contains metadata describing the publication itself (title, link, description, language, lastBuildDate).\n- `<item>`: Repeated elements representing individual articles or episodes. Each item typically includes `<title>`, `<link>`, `<description>`, `<pubDate>`, and a globally unique `<guid>`."
      },
      {
        heading: "The Polling and Aggregation Lifecycle",
        content: "RSS operates on a pull-based client-server model:\n1. Publication: Whenever an author publishes a new article, the CMS updates the static `feed.xml` file on the server.\n2. Scheduled Polling: Client RSS readers (e.g. NetNewsWire, Feedly) poll subscribed URLs on a periodic interval (e.g. every 30 minutes).\n3. Cache Negotiation: Readers utilize HTTP conditional headers (`If-Modified-Since` or `ETag`) to avoid downloading unchanged feeds (receiving HTTP `304 Not Modified`).\n4. GUID Deduplication: The reader inspects item `<guid>` identifiers, flagging genuinely new posts as unread."
      },
      {
        heading: "RSS as the Engine of Podcasting",
        content: "In 2000, Dave Winer and Adam Curry added the `<enclosure>` tag to the RSS specification. By embedding audio MP3 URLs, file sizes, and MIME types directly into RSS feeds, they created the technical foundation of Podcasting—a multi-billion dollar decentralized media ecosystem that still runs on open RSS today."
      }
    ],

    howItWorks: [
      { step: 1, title: "CMS Feed Generation", subtitle: "Publisher", description: "Author publishes article; CMS generates or updates `feed.xml` with `<item>` elements." },
      { step: 2, title: "Client Discovery", subtitle: "Browser Header", description: "Browser detects `<link rel=\"alternate\" type=\"application/rss+xml\">` in HTML head." },
      { step: 3, title: "Periodic Polling", subtitle: "Reader Software", description: "Aggregator issues periodic HTTP GET requests to check for fresh feed snapshots." },
      { step: 4, title: "XML Parsing", subtitle: "DOMParser", description: "Client parses XML tags (`title`, `pubDate`, `guid`) and presents unified reader inbox." }
    ],

    simulationType: "rss-reader-sim",

    practicalExample: {
      scenario: "Raw RSS 2.0 XML Syntax Record",
      description: "Standard XML feed structure published by an engineering blog.",
      records: [
        { type: "Root", host: "<rss version=\"2.0\">", value: "XML specification container", ttl: "Document", purpose: "Declares RSS dialect version" },
        { type: "Channel", host: "<title>WebTech News</title>", value: "Publication title & site link", ttl: "Feed Meta", purpose: "Identifies publisher identity in aggregator" },
        { type: "Item", host: "<guid isPermaLink=\"true\">", value: "https://webtech.org/posts/42", ttl: "Article", purpose: "Guarantees unique identification across poll cycles" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Assuming RSS pushes notifications in real time to client devices",
        reality: "Standard RSS is strictly pull-based! The client software must periodically poll the server to discover new content. Later protocols like WebSub (PubSubHubbub) introduced push capabilities."
      }
    ],

    relatedTopics: [
      { id: "interactive-social-web", title: "Interactive & Social Web: Blogs, Wikis & Networks", unitId: "unit-4" },
      { id: "web-mashups", title: "Web Mashups: Multi-Source API Data Composition", unitId: "unit-4" }
    ],

    challenge: {
      id: "challenge-rss-01",
      title: "Identify the Key Podcasting Element",
      difficulty: "Beginner",
      badge: "RSS Standards",
      description: "A developer wants to distribute episodic MP3 audio files to podcast applications using an existing RSS 2.0 feed.",
      task: "Which XML element within an <item> is required to attach media enclosures?",
      options: [
        { id: "opt-1", text: "<audio src=\"...\">", correct: false, reason: "This is an HTML5 tag, not an RSS 2.0 element." },
        { id: "opt-2", text: "<enclosure url=\"...\" length=\"...\" type=\"audio/mpeg\" />", correct: true, reason: "Correct! The RSS <enclosure> element specifies the media URL, byte size, and MIME type." },
        { id: "opt-3", text: "<embed type=\"mp3\">", correct: false, reason: "<embed> is an obsolete browser tag." }
      ],
      hint: "Look for the XML attribute that encloses external binary media files."
    },

    quiz: [
      {
        id: "rss-q1",
        question: "What does the acronym RSS commonly stand for?",
        options: [
          "Really Simple Syndication",
          "Real-time Server Sockets",
          "Routing Session Standard",
          "Relational Storage Syntax"
        ],
        correctIndex: 0,
        explanation: "While originally created as RDF Site Summary, RSS 2.0 is universally known as Really Simple Syndication."
      },
      {
        id: "rss-q2",
        question: "How do RSS feed readers prevent displaying duplicate articles upon each polling cycle?",
        options: [
          "They compare the unique `<guid>` (Globally Unique Identifier) of each item against previously seen records.",
          "They delete the entire database upon every refresh.",
          "They count total words in the article.",
          "They check the user's IP address."
        ],
        correctIndex: 0,
        explanation: "The `<guid>` tag provides an immutable unique identifier preventing aggregators from re-flagging seen content as new."
      }
    ]
  },

  // ==========================================
  // TOPIC 5: RUBY ON RAILS & MODERN MVC
  // ==========================================
  "ruby-on-rails-mvc": {
    id: "ruby-on-rails-mvc",
    unitId: "unit-4",
    unitNumber: 4,
    unitTitle: "Unit 4: Web 2.0, Social Web, Semantic Web & Emerging Paradigms",
    title: "Ruby on Rails: MVC & Convention over Configuration",
    subtitle: "The architectural framework that streamlined full-stack web application engineering",
    difficulty: "Intermediate",
    estimatedMinutes: 18,
    badge: "Modern Frameworks",

    definition: "Ruby on Rails (Rails) is an open-source model–view–controller (MVC) server-side web application framework written in Ruby by David Heinemeier Hansson in 2004. Rails popularized two foundational software engineering philosophies: Convention over Configuration (CoC)—which minimizes developer boilerplate by establishing sensible default naming conventions—and Don't Repeat Yourself (DRY).",

    whyItMatters: "Before Rails, building a dynamic database-backed web application in Java (J2EE) or PHP required writing extensive configuration files (often thousands of lines of XML) and repetitive SQL query code just to bind a URL to a database table. Rails made web development joyful and exceptionally fast, powering the rapid launches of monumental Web 2.0 companies including Twitter, GitHub, Shopify, Airbnb, and Basecamp.",

    explanation: [
      {
        heading: "The Model-View-Controller (MVC) Pattern in Web Applications",
        content: "Rails cleanly separates application concerns into three distinct layers:\n1. Model (ActiveRecord): Encapsulates business logic, data validation, and database interactions. Automatically maps database tables (e.g. `users`) to Ruby classes (`User`) without requiring explicit SQL.\n2. View (ActionView / ERB): Templates that format and render data into HTML, JSON, or XML for the client.\n3. Controller (ActionController): The coordinator. It receives incoming HTTP requests from the router, retrieves parameters, coordinates with Models, and selects the appropriate View to render."
      },
      {
        heading: "Convention over Configuration (CoC)",
        content: "CoC asserts that developers should only have to configure unusual or idiosyncratic aspects of an application. For example:\n- If you define a class `Article < ApplicationRecord`, Rails automatically assumes the database table is named `articles` (pluralized snake_case).\n- The controller for this resource will automatically be `ArticlesController`.\n- The view templates will automatically be located in `app/views/articles/`.\n- The primary key is automatically assumed to be an integer named `id`."
      },
      {
        heading: "The Complete Rails Request Flow",
        content: "When a user requests `GET /articles/42`:\n`Browser` $\\rightarrow$ `config/routes.rb` (resolves to ArticlesController#show) $\\rightarrow$ `ArticlesController` (calls `Article.find(42)`) $\\rightarrow$ `ActiveRecord Model` (generates `SELECT * FROM articles WHERE id = 42`) $\\rightarrow$ `PostgreSQL Database` $\\rightarrow$ `app/views/articles/show.html.erb` (interpolates `@article`) $\\rightarrow$ `HTTP 200 OK Response`."
      }
    ],

    howItWorks: [
      { step: 1, title: "HTTP Route Match", subtitle: "Router", description: "Incoming request URL and verb is matched to `resources :articles` in `routes.rb`." },
      { step: 2, title: "Controller Action", subtitle: "Controller", description: "ActionController instantiates params and invokes the corresponding action method." },
      { step: 3, title: "ORM Database Query", subtitle: "ActiveRecord", description: "Model translates Ruby method call into optimized SQL statement and instantiates objects." },
      { step: 4, title: "Template Interpolation", subtitle: "View (ERB)", description: "Embedded Ruby evaluates expressions (`<%= @article.title %>`) to output final HTML." },
      { step: 5, title: "Response Delivery", subtitle: "Rack / Web Server", description: "Server sets HTTP status headers and streams the rendered HTML document to the browser." }
    ],

    simulationType: "rails-mvc-sim",

    practicalExample: {
      scenario: "RESTful Rails Resource Routing & Controller",
      description: "Standard 7 RESTful routes generated by a single line of Rails code.",
      records: [
        { type: "Route", host: "GET /articles", value: "articles#index", ttl: "List", purpose: "Display list of all articles" },
        { type: "Route", host: "GET /articles/:id", value: "articles#show", ttl: "Read", purpose: "Display single article record by primary key" },
        { type: "Route", host: "POST /articles", value: "articles#create", ttl: "Create", purpose: "Insert new article record into database" },
        { type: "Route", host: "DELETE /articles/:id", value: "articles#destroy", ttl: "Delete", purpose: "Remove article record from database" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Thinking MVC controllers should contain complex business logic and database queries",
        reality: "A key Rails best practice is 'Skinny Controller, Fat Model'. Controllers should only route and coordinate; domain logic, data validations, and calculations belong inside the Model."
      }
    ],

    relatedTopics: [
      { id: "web20-evolution", title: "Web 2.0: The Participatory Read-Write Web", unitId: "unit-4" },
      { id: "open-apis-rest", title: "Open APIs: RESTful Architecture & Web Ecosystems", unitId: "unit-4" }
    ],

    challenge: {
      id: "challenge-rails-01",
      title: "Evaluate Convention over Configuration",
      difficulty: "Intermediate",
      badge: "Rails MVC",
      description: "A developer defines an ActiveRecord model `class Course < ApplicationRecord`. By Rails convention, what will be the name of the corresponding database table?",
      task: "Select the automatically inferred database table name:",
      options: [
        { id: "opt-1", text: "tbl_courses_data", correct: false, reason: "Rails does not prefix tables with 'tbl_'." },
        { id: "opt-2", text: "courses", correct: true, reason: "Correct! By convention, model classes are singular CamelCase (`Course`) and database tables are plural snake_case (`courses`)." },
        { id: "opt-3", text: "Course", correct: false, reason: "Database tables in SQL are lowercase plural by convention." }
      ],
      hint: "Remember the pluralization rule in Rails naming conventions."
    },

    quiz: [
      {
        id: "rails-q1",
        question: "What does the software engineering principle 'DRY' stand for?",
        options: [
          "Don't Repeat Yourself",
          "Dynamic Relational Yield",
          "Direct Routing Yield",
          "Database Redundancy Yield"
        ],
        correctIndex: 0,
        explanation: "DRY stands for 'Don't Repeat Yourself', emphasizing that every piece of knowledge must have a single, authoritative representation."
      },
      {
        id: "rails-q2",
        question: "In the MVC architecture, which layer is directly responsible for communicating with the database via Object-Relational Mapping (ORM)?",
        options: ["View", "Controller", "Model", "Router"],
        correctIndex: 2,
        explanation: "The Model layer (e.g. ActiveRecord) abstracts database interactions into object-oriented classes and manages persistence."
      }
    ]
  },

  // ==========================================
  // TOPIC 6: OPEN APIS & REST
  // ==========================================
  "open-apis-rest": {
    id: "open-apis-rest",
    unitId: "unit-4",
    unitNumber: 4,
    unitTitle: "Unit 4: Web 2.0, Social Web, Semantic Web & Emerging Paradigms",
    title: "Open APIs: RESTful Architecture & Web Ecosystems",
    subtitle: "Opening application backends to programmable global ecosystems",
    difficulty: "Intermediate",
    estimatedMinutes: 18,
    badge: "Web APIs",

    definition: "An Open API (also known as a Public API) is a publicly available application programming interface that provides programmatic access to a proprietary software application or web service. Built predominantly on REST (Representational State Transfer) principles over HTTP, Open APIs allow third-party developers to access application data, trigger mutations, and build composite services without accessing internal source code.",

    whyItMatters: "Open APIs transformed websites into platforms. By opening programmatic access, platforms like Google Maps, Stripe, GitHub, and Twitter allowed thousands of startups to build specialized tools on top of their core infrastructure. A developer in 2026 can build a full ride-sharing app in days by stitching together geolocation APIs, payment gateway APIs, and SMS notification APIs.",

    explanation: [
      {
        heading: "Core Architectural Constraints of REST",
        content: "Formulated by Roy Fielding in his 2000 doctoral dissertation, REST mandates 6 architectural constraints:\n1. Client-Server Separation: UI concerns are completely decoupled from data storage concerns.\n2. Statelessness: Every request from client to server must contain all necessary authentication tokens and context; the server stores no client session context between requests.\n3. Cacheability: Responses must explicitly define themselves as cacheable or non-cacheable (`Cache-Control` header).\n4. Uniform Interface: Resources are identified by standard URIs, manipulated through standardized HTTP verbs (`GET`, `POST`, `PUT`, `DELETE`), and return self-describing representations (JSON)."
      },
      {
        heading: "Security & Rate Limiting in Public APIs",
        content: "Because Open APIs are exposed to the public internet, they enforce strict governance controls:\n- API Keys & Bearer Tokens: Unique cryptographic strings passed in the `Authorization: Bearer <token>` header to identify the client application.\n- Rate Limiting: Restricting the number of requests a client can make per time window (e.g. 60 requests/minute) using token bucket algorithms. Servers communicate limits using standard HTTP headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `X-RateLimit-Reset`.\n- HTTP 429 Status: If a client exceeds their allowance, the server rejects subsequent calls with `429 Too Many Requests`."
      }
    ],

    howItWorks: [
      { step: 1, title: "Endpoint Addressing", subtitle: "URI Nouns", description: "Client targets structured resource path (e.g. `GET /api/v1/users/42`)." },
      { step: 2, title: "Authentication Check", subtitle: "API Gateway", description: "Gateway verifies API Key / OAuth2 token and checks rate limiting bucket." },
      { step: 3, title: "Controller Execution", subtitle: "REST Handler", description: "Server fetches resource and serializes data model into JSON format." },
      { step: 4, title: "Payload Transmission", subtitle: "HTTP 200 OK", description: "Server returns HTTP headers (`Content-Type: application/json`) and data body." }
    ],

    simulationType: "open-api-explorer",

    practicalExample: {
      scenario: "RESTful HTTP Transaction Record",
      description: "Inspecting headers and payload during an authorized Open API query.",
      records: [
        { type: "Request", host: "GET /api/v1/weather?city=sf", value: "Authorization: Bearer key_99182a", ttl: "Header", purpose: "Authenticates client and requests resource" },
        { type: "Response Header", host: "HTTP/1.1 200 OK", value: "X-RateLimit-Remaining: 58", ttl: "Header", purpose: "Informs client of remaining request quota" },
        { type: "Response Body", host: "application/json", value: "{\"temp\": 18.5, \"condition\": \"Sunny\"}", ttl: "JSON", purpose: "Delivers requested state representation" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Using verbs in RESTful URI endpoint paths (e.g. `/api/getUser` or `/api/deleteUser`)",
        reality: "REST mandates noun-based resource identifiers! The action is specified exclusively by the HTTP verb: `GET /api/users/42` retrieves a user; `DELETE /api/users/42` removes them."
      }
    ],

    relatedTopics: [
      { id: "ajax-web20", title: "Technologies Behind Web 2.0: AJAX & Asynchrony", unitId: "unit-4" },
      { id: "web-mashups", title: "Web Mashups: Multi-Source API Data Composition", unitId: "unit-4" }
    ],

    challenge: {
      id: "challenge-api-01",
      title: "Select Correct RESTful Resource Endpoint",
      difficulty: "Intermediate",
      badge: "REST Design",
      description: "You are designing an API endpoint to delete an article with ID 84. Which request follows RESTful architectural best practices?",
      task: "Choose the standard RESTful method and URI:",
      options: [
        { id: "opt-1", text: "POST /api/deleteArticle?id=84", correct: false, reason: "Embedding verbs in URLs violates REST resource noun conventions." },
        { id: "opt-2", text: "DELETE /api/articles/84", correct: true, reason: "Correct! The HTTP verb `DELETE` defines the action; the URI `/api/articles/84` identifies the resource noun." },
        { id: "opt-3", text: "GET /api/articles/84/remove", correct: false, reason: "GET requests must be safe and idempotent; they must never mutate server state." }
      ],
      hint: "Remember: HTTP verbs specify the action; URIs specify the resource nouns."
    },

    quiz: [
      {
        id: "api-q1",
        question: "Which HTTP status code indicates that a client has exceeded their API rate limit?",
        options: ["200 OK", "401 Unauthorized", "429 Too Many Requests", "500 Internal Error"],
        correctIndex: 2,
        explanation: "HTTP status 429 Too Many Requests explicitly signals that rate limits have been exhausted."
      },
      {
        id: "api-q2",
        question: "Why does REST mandate that server communication be 'stateless'?",
        options: [
          "To allow servers to scale horizontally because any server can handle any request without sharing in-memory session states.",
          "To prevent users from bookmarking web pages.",
          "To eliminate the need for databases.",
          "To speed up CSS rendering."
        ],
        correctIndex: 0,
        explanation: "Statelessness allows load balancers to distribute requests across clusters of servers without sticky sessions."
      }
    ]
  },

  // ==========================================
  // TOPIC 7: WEB 3.0 & THE SEMANTIC WEB
  // ==========================================
  "web30-semantic-web": {
    id: "web30-semantic-web",
    unitId: "unit-4",
    unitNumber: 4,
    unitTitle: "Unit 4: Web 2.0, Social Web, Semantic Web & Emerging Paradigms",
    title: "Web 3.0 & The Semantic Web: Machine-Readable Data",
    subtitle: "From a web of human-readable text documents to a global web of linked data",
    difficulty: "Intermediate",
    estimatedMinutes: 18,
    badge: "Semantic Web",

    definition: "The Semantic Web is an extension of the World Wide Web through standards set by the World Wide Web Consortium (W3C). Formulated by Tim Berners-Lee, James Hendler, and Ora Lassila in 2001, its goal is to make Internet data machine-readable. By embedding explicit semantic ontologies and metadata, computers can interpret, combine, and reason about information automatically across decentralized boundaries.",

    whyItMatters: "Standard HTML markup describes presentation: an `<h1>` tag tells a browser to render large bold text, but tells a computer nothing about whether that text represents a person, a medical symptom, a book title, or a star constellation. Without machine-readable semantics, automated search crawlers and AI agents must rely on brittle heuristic guesses. The Semantic Web provides unambiguous data structures allowing intelligent systems to answer complex queries across disparate global datasets.",

    explanation: [
      {
        heading: "The Semantic Web Architecture Stack (The 'Layer Cake')",
        content: "The W3C envisioned the Semantic Web as a multi-tier hierarchy of open standards:\n1. URI / IRI & Unicode: Unique global addressing for concepts and entities.\n2. XML & XML Schema: Foundational syntax rules.\n3. RDF (Resource Description Framework): The universal data modeling standard based on atomic Subject-Predicate-Object triples.\n4. RDFS & OWL (Web Ontology Language): Defines rich vocabularies, classes, properties, and ontological hierarchies.\n5. SPARQL: The standard SQL-like query language for traversing semantic graph databases (Triple Stores).\n6. Trust & Proof: Cryptographic signatures validating data authenticity."
      },
      {
        heading: "Educational Clarification: Defining 'Web 3.0'",
        content: "In modern computing discourse, 'Web 3.0' encompasses two distinct but complementary visions:\n- Tim Berners-Lee's Semantic Web: Standardized Linked Data, knowledge graphs, and open vocabularies (e.g. Schema.org, JSON-LD) enabling AI agents to reason about human knowledge.\n- Decentralized Web: Cryptographic identity, blockchain ledgers, edge serverless computing, and peer-to-peer storage (IPFS).\nBoth paradigms share the common goal of moving beyond centralized corporate silo walled gardens toward an interoperable, intelligent, user-sovereign web."
      }
    ],

    howItWorks: [
      { step: 1, title: "Entity Definition", subtitle: "URI Assignment", description: "Real-world concept (e.g. 'Tim Berners-Lee') is assigned a canonical URI." },
      { step: 2, title: "Ontology Modeling", subtitle: "Schema.org / OWL", description: "Attributes are classified using standardized vocabularies (e.g. `schema:Person`)." },
      { step: 3, title: "Metadata Embedding", subtitle: "JSON-LD Script", description: "Document embeds structured `<script type=\"application/ld+json\">` block." },
      { step: 4, title: "Machine Reasoning", subtitle: "AI Crawler", description: "Automated agent parses graph nodes and extracts facts with 100% precision." }
    ],

    simulationType: "semantic-web-sim",

    practicalExample: {
      scenario: "Embedding Schema.org Metadata into Web Documents",
      description: "JSON-LD structured data informing search engines of an event.",
      records: [
        { type: "Context", host: "@context", value: "https://schema.org", ttl: "Ontology", purpose: "Defines vocabulary namespace" },
        { type: "Type", host: "@type", value: "Event", ttl: "Class", purpose: "Classifies entity as a real-world calendar event" },
        { type: "Property", host: "startDate", value: "2026-10-15T09:00:00Z", ttl: "Literal", purpose: "Provides machine-readable ISO 8601 timestamp" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Assuming Semantic Web metadata replaces visual HTML web pages",
        reality: "Semantic Web metadata (especially via JSON-LD) lives peacefully alongside standard HTML! It informs automated bots without affecting human visual presentation."
      }
    ],

    relatedTopics: [
      { id: "rdf-triples", title: "RDF: Resource Description Framework & Triples", unitId: "unit-4" },
      { id: "search-engines", title: "Search Engines: Crawling, Inverted Indexing & PageRank", unitId: "unit-4" }
    ],

    challenge: {
      id: "challenge-sem-01",
      title: "Evaluate Machine Readability",
      difficulty: "Intermediate",
      badge: "Semantic Principles",
      description: "A search crawler visits two pages. Page A contains `<b>The Matrix</b> directed by <i>Wachowski</i>`. Page B contains a JSON-LD block defining `@type: Movie, name: 'The Matrix', director: 'Lana Wachowski'`. Why is Page B superior for search indexing?",
      task: "Select the primary technical advantage of Page B:",
      options: [
        { id: "opt-1", text: "Page B downloads faster because bold tags are heavy.", correct: false, reason: "HTML styling tags have negligible file size impact." },
        { id: "opt-2", text: "Page B explicitly declares entity types and relationships in a standardized schema, removing ambiguity for machine reasoning.", correct: true, reason: "Correct! Structured semantics eliminate NLP guesswork and allow search engines to build rich knowledge graph cards." },
        { id: "opt-3", text: "Page B automatically translates the page into 50 languages.", correct: false, reason: "JSON-LD does not perform automatic human language translation." }
      ],
      hint: "Focus on how machines extract facts from code."
    },

    quiz: [
      {
        id: "sem-q1",
        question: "What is the primary query language designed to search RDF knowledge graphs?",
        options: ["SQL", "SPARQL", "GraphQL", "XPath"],
        correctIndex: 1,
        explanation: "SPARQL (SPARQL Protocol and RDF Query Language) is the W3C standard query language for querying graph databases and RDF triple stores."
      },
      {
        id: "sem-q2",
        question: "Which serialization format is most widely recommended today for embedding Schema.org data into HTML?",
        options: ["JSON-LD", "Flash", "XML-RPC", "SOAP Envelope"],
        correctIndex: 0,
        explanation: "JSON-LD (JavaScript Object Notation for Linked Data) is the modern W3C recommendation preferred by major search engines."
      }
    ]
  },

  // ==========================================
  // TOPIC 8: RDF TRIPLES & KNOWLEDGE GRAPHS
  // ==========================================
  "rdf-triples": {
    id: "rdf-triples",
    unitId: "unit-4",
    unitNumber: 4,
    unitTitle: "Unit 4: Web 2.0, Social Web, Semantic Web & Emerging Paradigms",
    title: "RDF: Resource Description Framework & Triples",
    subtitle: "The universal atomic data model for describing decentralized knowledge graphs",
    difficulty: "Intermediate",
    estimatedMinutes: 20,
    badge: "RDF Architecture",

    definition: "The Resource Description Framework (RDF) is a W3C standard data model designed to represent information about resources on the World Wide Web. RDF represents every statement as an atomic 3-part proposition termed a 'Triple', consisting of a Subject, a Predicate, and an Object. A collection of RDF triples naturally forms a directed, labeled multigraph known as a Knowledge Graph.",

    whyItMatters: "Relational database tables (e.g. SQL rows and columns) are rigid: adding new relationships requires altering table schemas across the entire database. RDF triples provide radical flexibility: anyone on the internet can assert a new fact about any resource simply by linking its global URI to another resource via a predicate property. This enables decentralized data integration across global institutional boundaries.",

    explanation: [
      {
        heading: "The Anatomy of an RDF Triple",
        content: "Every RDF triple statement expresses a simple proposition:\n1. Subject: The resource being described. Must be an IRI (Internationalized Resource Identifier) or a blank node.\n2. Predicate: The property, attribute, or relationship connecting the subject to the object. Must be an IRI.\n3. Object: The value or target entity. Can be an IRI (linking to another graph node) or a Literal value (string, integer, date)."
      },
      {
        heading: "Common RDF Serialization Syntaxes",
        content: "RDF is an abstract data model that can be serialized into several text formats:\n- Turtle (Terse RDF Triple Language): Compact, human-friendly syntax with prefix shortcuts (e.g. `ex:Alice ex:knows ex:Bob .`).\n- N-Triples: Ultra-simple line-based format where every line contains a complete `<s> <p> <o> .` statement with full URIs.\n- JSON-LD: JSON-based serialization designed for straightforward integration into web applications.\n- RDF/XML: The original 1999 XML-based serialization, now largely superseded by Turtle and JSON-LD."
      },
      {
        heading: "Knowledge Graphs in the Modern Web",
        content: "When millions of triples are interconnected, they form Knowledge Graphs (such as Google Knowledge Graph, DBpedia, and Wikidata). Search engines traverse these graphs to answer factual questions directly in search results—for instance, understanding that 'Barack Obama' $\\rightarrow$ `wasBornIn` $\\rightarrow$ 'Honolulu' without scanning text documents."
      }
    ],

    howItWorks: [
      { step: 1, title: "Subject Identification", subtitle: "URI Node", description: "Resource is identified by global URI (e.g. `http://example.org/Alice`)." },
      { step: 2, title: "Predicate Relationship", subtitle: "Directed Edge", description: "Ontological property connects subject (e.g. `http://xmlns.com/foaf/0.1/knows`)." },
      { step: 3, title: "Object Binding", subtitle: "Target Node / Literal", description: "Relationship terminates at another URI (`http://example.org/Bob`) or literal value." },
      { step: 4, title: "Graph Indexing", subtitle: "Triple Store", description: "Database indexes triple as `(S, P, O)` allowing bidirectional graph traversal." }
    ],

    simulationType: "rdf-triple-visualizer",

    practicalExample: {
      scenario: "Turtle Syntax Knowledge Statement",
      description: "Describing relationship in compact Turtle format.",
      records: [
        { type: "Prefix", host: "@prefix foaf:", value: "<http://xmlns.com/foaf/0.1/>", ttl: "Namespace", purpose: "Defines shorthand namespace alias" },
        { type: "Statement", host: "ex:Alice foaf:knows ex:Bob .", value: "Directed edge between nodes", ttl: "Triple", purpose: "Asserts social connection in knowledge graph" },
        { type: "Literal", host: "ex:Alice foaf:age \"24\"^^xsd:integer .", value: "Literal typed attribute", ttl: "Triple", purpose: "Attaches numeric typed literal property" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Confusing the abstract RDF data model with its specific file formats (like Turtle or RDF/XML)",
        reality: "RDF is purely a conceptual graph model of Subject-Predicate-Object! Turtle, N-Triples, and JSON-LD are simply different text serializations of the exact same underlying graph."
      }
    ],

    relatedTopics: [
      { id: "web30-semantic-web", title: "Web 3.0 & The Semantic Web: Machine-Readable Data", unitId: "unit-4" },
      { id: "search-engines", title: "Search Engines: Crawling, Inverted Indexing & PageRank", unitId: "unit-4" }
    ],

    challenge: {
      id: "challenge-rdf-01",
      title: "Identify Valid RDF Triple Structure",
      difficulty: "Intermediate",
      badge: "RDF Syntax",
      description: "Examine this statement: `ex:TimBernersLee ex:created ex:WorldWideWeb .`",
      task: "What are the Subject, Predicate, and Object in this triple?",
      options: [
        { id: "opt-1", text: "Subject: ex:created | Predicate: ex:TimBernersLee | Object: ex:WorldWideWeb", correct: false, reason: "The subject must be the entity performing or possessing the attribute." },
        { id: "opt-2", text: "Subject: ex:TimBernersLee | Predicate: ex:created | Object: ex:WorldWideWeb", correct: true, reason: "Correct! ex:TimBernersLee is the Subject node, ex:created is the directed Predicate edge, and ex:WorldWideWeb is the Object node." },
        { id: "opt-3", text: "Subject: ex:WorldWideWeb | Predicate: ex:TimBernersLee | Object: ex:created", correct: false, reason: "This reverses the semantic direction of the relationship." }
      ],
      hint: "Remember: (Subject) performs or has [Predicate] pointing to (Object)."
    },

    quiz: [
      {
        id: "rdf-q1",
        question: "What are the three fundamental components of an RDF statement?",
        options: [
          "Subject, Predicate, Object",
          "Entity, Attribute, Key",
          "Table, Row, Column",
          "Request, Method, Payload"
        ],
        correctIndex: 0,
        explanation: "Every RDF statement is an atomic 3-part triple: Subject, Predicate, and Object."
      },
      {
        id: "rdf-q2",
        question: "Why can RDF objects be either URIs or Literals, whereas RDF predicates must always be URIs?",
        options: [
          "Because predicates define relationships that must have globally unambiguous machine-readable definitions.",
          "Because literals are illegal in computer memory.",
          "Because predicates must be stored in cookies.",
          "Because URIs are faster to type."
        ],
        correctIndex: 0,
        explanation: "Predicates represent ontological properties; without a global URI, machines cannot agree on the exact definition of a relationship."
      }
    ]
  },

  // ==========================================
  // TOPIC 9: WEB WIDGETS
  // ==========================================
  "web-widgets": {
    id: "web-widgets",
    unitId: "unit-4",
    unitNumber: 4,
    unitTitle: "Unit 4: Web 2.0, Social Web, Semantic Web & Emerging Paradigms",
    title: "Web Widgets: Modular Embeddable Client Dashboards",
    subtitle: "Encapsulated mini-applications composable across host web environments",
    difficulty: "Beginner",
    estimatedMinutes: 14,
    badge: "Client Architecture",

    definition: "A Web Widget is a portable, reusable, and self-contained piece of software that can be embedded into third-party web pages without requiring modifications to the host document's core code. Widgets range from simple UI controls (such as weather clocks and stock tickers) to interactive modules (social share buttons, payment gateways, and live customer chat widgets).",

    whyItMatters: "Widgets pioneered the concept of the composable web. Instead of engineering complex features from scratch, website owners could copy and paste a two-line script or iframe tag to integrate professional weather forecasts, interactive maps, or currency converters. For platform providers, widgets served as a primary distribution vector to project their brand and services across millions of external sites.",

    explanation: [
      {
        heading: "Architectural Encapsulation: Iframes vs. Web Components",
        content: "Historically and today, widgets rely on two primary encapsulation models:\n1. The Iframe Sandboxing Model: The host page embeds `<iframe src=\"https://widget.provider.com\">`. The browser strictly isolates the widget in a separate execution context, enforcing the Same-Origin Policy (SOP). The widget cannot read host page cookies, and host CSS cannot break widget styling.\n2. Modern Web Components & Shadow DOM: Encapsulates custom HTML tags (e.g. `<weather-widget city=\"sf\">`) with scoped styling that prevents CSS leakage while maintaining high DOM performance."
      },
      {
        heading: "Host-to-Widget Inter-Process Communication (IPC)",
        content: "When an embedded widget must communicate with its host web page across different domain origins, browsers utilize the HTML5 `window.postMessage()` API. This allows controlled, secure cross-origin message passing with explicit origin validation (`event.origin === 'https://trusted.com'`)."
      }
    ],

    howItWorks: [
      { step: 1, title: "Host Tag Insertion", subtitle: "Host Document", description: "Website developer embeds widget `<iframe sandbox=\"...\">` or custom element tag." },
      { step: 2, title: "Resource Ingestion", subtitle: "Network Layer", description: "Browser loads isolated widget HTML, stylesheets, and JavaScript bundle." },
      { step: 3, title: "Real-Time API Polling", subtitle: "Widget Runtime", description: "Widget executes background Fetch calls to its origin API (e.g. live weather radar)." },
      { step: 4, title: "Sandboxed Rendering", subtitle: "Isolated DOM", description: "Widget updates its internal display without interfering with the parent document layout." }
    ],

    simulationType: "widgets-dashboard",

    practicalExample: {
      scenario: "Secure Third-Party Widget Embed Snippet",
      description: "Standard sandboxed iframe snippet embedding an autonomous weather widget.",
      records: [
        { type: "HTML Tag", host: "<iframe src=\"https://widgets.io/weather\">", value: "Embed directive", ttl: "Host", purpose: "Mounts remote mini-application" },
        { type: "Security Attribute", host: "sandbox=\"allow-scripts allow-same-origin\"", value: "Sandboxing policy", ttl: "Browser", purpose: "Restricts widget from escaping iframe boundary" },
        { type: "IPC Event", host: "window.postMessage({theme: 'dark'})", value: "Cross-document messaging", ttl: "Bridge", purpose: "Transmits host theme configuration safely across origins" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Embedding third-party JavaScript directly into host HTML without an iframe or Shadow DOM sandbox",
        reality: "Directly injecting `<script src=\"external.js\">` gives third-party scripts full unrestricted access to your user cookies, LocalStorage, and DOM, introducing catastrophic security vulnerabilities (XSS)."
      }
    ],

    relatedTopics: [
      { id: "web-mashups", title: "Web Mashups: Multi-Source API Data Composition", unitId: "unit-4" },
      { id: "open-apis-rest", title: "Open APIs: RESTful Architecture & Web Ecosystems", unitId: "unit-4" }
    ],

    challenge: {
      id: "challenge-wid-01",
      title: "Evaluate Widget Security Isolation",
      difficulty: "Beginner",
      badge: "Widget Security",
      description: "A bank integrates a third-party stock ticker widget into their online banking dashboard. They want to ensure the widget cannot steal sensitive banking cookies.",
      task: "What is the safest architectural pattern to embed this widget?",
      options: [
        { id: "opt-1", text: "Download the widget code and run it in the main window object with administrative privileges.", correct: false, reason: "This exposes banking cookies directly to third-party code." },
        { id: "opt-2", text: "Embed the widget inside an isolated <iframe> with strict sandbox permissions on a separate sub-domain.", correct: true, reason: "Correct! The browser's Same-Origin Policy and iframe sandboxing prevent the external widget from accessing host cookies." },
        { id: "opt-3", text: "Disable HTTPS encryption.", correct: false, reason: "Disabling encryption creates severe man-in-the-middle vulnerabilities." }
      ],
      hint: "Think about browser security boundaries and the Same-Origin Policy."
    },

    quiz: [
      {
        id: "wid-q1",
        question: "Which browser API facilitates secure asynchronous message passing between an iframe widget and its host document?",
        options: ["window.postMessage()", "document.write()", "alert()", "eval()"],
        correctIndex: 0,
        explanation: "The `window.postMessage()` method safely enables cross-origin communication between Window objects with origin validation."
      },
      {
        id: "wid-q2",
        question: "What is the primary benefit of encapsulating widgets using Shadow DOM in modern Web Components?",
        options: [
          "It guarantees that internal widget CSS styles do not leak out or clash with the host page styling.",
          "It forces the website to load only in dark mode.",
          "It increases broadband speeds.",
          "It compresses video files automatically."
        ],
        correctIndex: 0,
        explanation: "Shadow DOM provides scoped CSS encapsulation, preventing style conflicts between widgets and host documents."
      }
    ]
  },

  // ==========================================
  // TOPIC 10: WEB MASHUPS
  // ==========================================
  "web-mashups": {
    id: "web-mashups",
    unitId: "unit-4",
    unitNumber: 4,
    unitTitle: "Unit 4: Web 2.0, Social Web, Semantic Web & Emerging Paradigms",
    title: "Web Mashups: Multi-Source API Data Composition",
    subtitle: "Combining disparate web services into novel composite applications",
    difficulty: "Intermediate",
    estimatedMinutes: 16,
    badge: "API Composition",

    definition: "A Web Mashup is a web application that uses content and APIs from more than one source to create a completely new service displayed in a single graphical interface. Pioneered during the early Web 2.0 era (notably HousingMaps in 2005, which merged Craigslist housing listings with Google Maps), mashups exemplify the programmable, composable nature of modern web engineering.",

    whyItMatters: "Before mashups, software developers had to manually collect, license, and host every dataset they wanted to present. Mashups proved that a product's greatest value often lies not in owning proprietary infrastructure, but in the creative synthesis of existing public APIs. Today, nearly all high-value web applications—from real-estate portals to travel booking engines—are sophisticated multi-source mashups.",

    explanation: [
      {
        heading: "Architectural Typologies: Client-Side vs. Server-Side Mashups",
        content: "Mashups are implemented using two primary architectural strategies:\n1. Client-Side Mashups: The user's browser executes JavaScript code that makes independent asynchronous AJAX/Fetch calls to multiple distinct external APIs (e.g. OpenStreetMap, WeatherAPI, Foursquare). The browser joins the datasets directly in memory and renders them to the DOM. Requires external APIs to support CORS (Cross-Origin Resource Sharing).\n2. Server-Side Mashups: An intermediary backend proxy aggregates, transforms, and normalizes disparate third-party data feeds before returning a pre-joined composite payload to the client. This bypasses CORS limitations and protects proprietary API keys."
      },
      {
        heading: "Key Engineering Challenges in Mashups",
        bullets: [
          "API Fragility & Breaking Changes: If any single third-party provider alters their JSON schema or deprecates an endpoint, the composite mashup may fail.",
          "Rate Limiting Quotas: Aggregating multiple services means the application's overall throughput is bounded by the most restrictive third-party API limit.",
          "Graceful Degradation: High-quality mashup architecture must degrade gracefully: if the weather API goes offline, the mapping and attraction layers must continue functioning flawlessly."
        ]
      }
    ],

    howItWorks: [
      { step: 1, title: "API Source Ingestion", subtitle: "Multi-Fetch", description: "Application initiates concurrent fetch requests to Map, Weather, and Places APIs." },
      { step: 2, title: "Data Normalization", subtitle: "Transformer", description: "JavaScript extracts coordinates, temperatures, and ratings into unified schema." },
      { step: 3, title: "Composite Rendering", subtitle: "DOM Assembly", description: "Layered UI mounts map pins and overlays weather forecasts onto interactive map markers." },
      { step: 4, title: "Degradation Fallback", subtitle: "Resilience", description: "If one upstream service returns HTTP 500, other modules continue operating without crashing." }
    ],

    simulationType: "mashup-architecture",

    practicalExample: {
      scenario: "Travel Dashboard Composite Data Flow",
      description: "How a composite travel dashboard merges distinct API streams in real-time.",
      records: [
        { type: "API Source A", host: "api.openstreetmap.org", value: "GeoJSON vector tiles & coordinate bounds", ttl: "Map Layer", purpose: "Renders cartographic base map" },
        { type: "API Source B", host: "api.openweathermap.org", value: "temp: 22°C, condition: 'Sunny'", ttl: "Weather Layer", purpose: "Overlays localized meteorological data" },
        { type: "API Source C", host: "api.foursquare.com", value: "attractions: ['Eiffel Tower', 'Louvre']", ttl: "Places Layer", purpose: "Renders clickable tourist attraction pins" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Hardcoding secret third-party API keys directly into public client-side JavaScript code in a client-side mashup",
        reality: "Exposing private API keys in client-side code allows anyone viewing source code to steal your credentials and exhaust your rate limits! Private keys must be secured behind a server proxy."
      }
    ],

    relatedTopics: [
      { id: "open-apis-rest", title: "Open APIs: RESTful Architecture & Web Ecosystems", unitId: "unit-4" },
      { id: "web-widgets", title: "Web Widgets: Modular Embeddable Client Dashboards", unitId: "unit-4" }
    ],

    challenge: {
      id: "challenge-mash-01",
      title: "Diagnose CORS Failure in Client-Side Mashup",
      difficulty: "Intermediate",
      badge: "Mashup Engineering",
      description: "A student builds a client-side mashup that calls an external legacy API directly from `localhost`. The browser blocks the request with a `Cross-Origin Request Blocked` error.",
      task: "What is the most robust architectural fix for this issue?",
      options: [
        { id: "opt-1", text: "Tell all users to disable security in their browser settings.", correct: false, reason: "Disabling browser security exposes users to malicious attacks." },
        { id: "opt-2", text: "Route the request through a lightweight backend proxy server that fetches the external data server-to-server and forwards it with appropriate CORS headers.", correct: true, reason: "Correct! Server-side proxies bypass browser CORS restrictions and safeguard private API keys." },
        { id: "opt-3", text: "Convert the entire application into an image.", correct: false, reason: "This destroys all functionality." }
      ],
      hint: "Consider how server-to-server communication bypasses browser origin restrictions."
    },

    quiz: [
      {
        id: "mash-q1",
        question: "What historic 2005 application is widely considered one of the very first viral Web 2.0 mashups?",
        options: [
          "HousingMaps (combining Craigslist listings with Google Maps)",
          "Netscape Navigator",
          "GeoCities Homepage Builder",
          "Apache HTTP Server"
        ],
        correctIndex: 0,
        explanation: "Paul Rademacher's HousingMaps merged Craigslist rental ads with Google Maps, proving the viability of web mashups."
      },
      {
        id: "mash-q2",
        question: "What does the architectural principle of 'Graceful Degradation' mean for a mashup application?",
        options: [
          "The app will continue functioning gracefully with available data even if one external API provider goes offline.",
          "The app deletes itself after 24 hours.",
          "The app slows down automatically on older hardware.",
          "The app blocks users from foreign countries."
        ],
        correctIndex: 0,
        explanation: "Graceful degradation ensures that the failure of one auxiliary service does not bring down the entire composite application."
      }
    ]
  },

  // ==========================================
  // TOPIC 11: WEB-BASED INFORMATION SYSTEMS
  // ==========================================
  "web-information-systems": {
    id: "web-information-systems",
    unitId: "unit-4",
    unitNumber: 4,
    unitTitle: "Unit 4: Web 2.0, Social Web, Semantic Web & Emerging Paradigms",
    title: "Web-Based Information Systems: Multi-Tier Architecture",
    subtitle: "Enterprise-scale data persistence, business logic isolation, and transactional integrity",
    difficulty: "Intermediate",
    estimatedMinutes: 18,
    badge: "Enterprise Systems",

    definition: "A Web-Based Information System (WBIS) is an organized system for the collection, organization, storage, processing, and communication of enterprise data using Internet technologies and protocols. Architecturally structured into three or more distinct tiers (Presentation, Application/Logic, and Data Tier), WBIS applications manage mission-critical workflows such as Student Information Systems (SIS), ERP platforms, and banking portals.",

    whyItMatters: "Before multi-tier web systems, enterprise software required installing heavyweight proprietary binary desktop clients (client-server 2-tier architecture) onto thousands of individual office workstations. Updating an application meant physically re-installing software on every computer. WBIS centralized deployment on servers and made applications accessible through universal web browsers on any operating system.",

    explanation: [
      {
        heading: "The 3-Tier Enterprise Architecture Model",
        content: "Enterprise web information systems partition responsibilities strictly across three tiers:\n1. Presentation Tier (Client / Browser): The user-facing interface responsible for presenting data and capturing input. Implemented using HTML5, CSS, and modern frontend frameworks.\n2. Application / Business Logic Tier (Application Server): The intellectual core. Executes business rules, processes calculations, coordinates workflows, and validates user authentication and role-based authorization.\n3. Data Tier (Persistence / RDBMS): Manages structured data storage, relational integrity, indexing, and ACID transaction guarantees (e.g. PostgreSQL, Oracle)."
      },
      {
        heading: "Security Isolation & Horizontal Scalability",
        content: "Separating the application tier from the data tier provides two immense benefits:\n- Security Firewalling: The presentation tier running in untrusted client browsers has zero direct access to the database. Database ports (e.g. 5432) are sealed behind internal private subnets (VPCs), protecting sensitive records from SQL injection and unauthorized queries.\n- Independent Scalability: If traffic spikes, cloud infrastructure can spin up 50 additional application servers behind a load balancer without needing to re-provision the primary database cluster."
      }
    ],

    howItWorks: [
      { step: 1, title: "Client Data Capture", subtitle: "Presentation Tier", description: "Student enters course registration selection in web browser portal." },
      { step: 2, title: "Business Rule Audit", subtitle: "Application Tier", description: "App server verifies prerequisites, checks GPA threshold, and validates credit limits." },
      { step: 3, title: "ACID Transaction", subtitle: "Data Tier", description: "Database executes `INSERT INTO enrollments ...` within an isolated ACID transaction." },
      { step: 4, title: "Response Confirmation", subtitle: "Client Render", description: "Server returns HTTP 200 OK; browser updates schedule interface in real-time." }
    ],

    simulationType: "info-system-sim",

    practicalExample: {
      scenario: "Student Information System Enrollment Transaction",
      description: "How a multi-tier information system validates and commits student enrollment.",
      records: [
        { type: "Tier 1: Browser", host: "POST /enrollments", value: "studentId: 'S101', courseId: 'CS305'", ttl: "HTTP", purpose: "Dispatches enrollment request payload" },
        { type: "Tier 2: App Server", host: "PrerequisiteEngine.verify()", value: "Verified CS101 Passed with Grade A", ttl: "Logic", purpose: "Enforces institutional academic rules" },
        { type: "Tier 3: Database", host: "SQL Transaction", value: "BEGIN; INSERT INTO enrollments ...; COMMIT;", ttl: "ACID", purpose: "Atomically persists enrollment record to disk" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Allowing the browser client to connect directly to the database over SQL",
        reality: "Exposing database ports directly to client browsers exposes database master credentials and makes the entire database vulnerable to catastrophic tampering! All queries must pass through the Application Tier."
      }
    ],

    relatedTopics: [
      { id: "ruby-on-rails-mvc", title: "Ruby on Rails: MVC & Convention over Configuration", unitId: "unit-4" },
      { id: "open-apis-rest", title: "Open APIs: RESTful Architecture & Web Ecosystems", unitId: "unit-4" }
    ],

    challenge: {
      id: "challenge-wis-01",
      title: "Evaluate Enterprise Tier Responsibility",
      difficulty: "Intermediate",
      badge: "WBIS Architecture",
      description: "A developer wants to ensure that students cannot register for more than 18 credit hours per semester. Where must this validation logic be enforced?",
      task: "Select the authoritative layer for business rule validation:",
      options: [
        { id: "opt-1", text: "Exclusively in client-side browser JavaScript.", correct: false, reason: "Client-side validation can be easily bypassed by disabling JavaScript or using curl." },
        { id: "opt-2", text: "In the Application / Business Logic Tier on the server.", correct: true, reason: "Correct! The application server is the trusted authority that must enforce enterprise business rules before executing database mutations." },
        { id: "opt-3", text: "In the DNS name server.", correct: false, reason: "DNS only resolves domain names to IP addresses." }
      ],
      hint: "Remember which layer is the trusted authority for business rules."
    },

    quiz: [
      {
        id: "wis-q1",
        question: "What are the three tiers in a classical multi-tier Web-Based Information System?",
        options: [
          "Presentation Tier, Application/Logic Tier, Data Tier",
          "HTML Tier, CSS Tier, JavaScript Tier",
          "Client Tier, WiFi Tier, Router Tier",
          "CPU Tier, RAM Tier, Hard Drive Tier"
        ],
        correctIndex: 0,
        explanation: "The 3-tier architecture cleanly isolates Presentation (Browser), Business Logic (App Server), and Data (Database)."
      },
      {
        id: "wis-q2",
        question: "Why is business logic never trusted exclusively to client-side browser validation?",
        options: [
          "Because any client can bypass browser validation by crafting raw HTTP requests directly to the server.",
          "Because browsers cannot execute mathematics.",
          "Because HTML does not support forms.",
          "Because cookies expire too quickly."
        ],
        correctIndex: 0,
        explanation: "Client validation improves user experience, but server-side validation in the application tier is mandatory for data integrity and security."
      }
    ]
  },

  // ==========================================
  // TOPIC 12: SEARCH ENGINES & PAGERANK
  // ==========================================
  "search-engines": {
    id: "search-engines",
    unitId: "unit-4",
    unitNumber: 4,
    unitTitle: "Unit 4: Web 2.0, Social Web, Semantic Web & Emerging Paradigms",
    title: "Search Engines: Crawling, Inverted Indexing & PageRank",
    subtitle: "The algorithms and data structures indexing the global hypermedia universe",
    difficulty: "Advanced",
    estimatedMinutes: 20,
    badge: "Information Retrieval",

    definition: "A Web Search Engine is a specialized software system designed to carry out web search, systematically querying the World Wide Web for information specified in a textual web search query. The search pipeline operates across four asynchronous phases: 1. Crawling (discovering documents via spiders), 2. Indexing (tokenizing words into an inverted index), 3. Ranking (calculating relevance and link equity via PageRank), and 4. Query Serving (rendering search engine results pages).",

    whyItMatters: "With tens of billions of web pages distributed across millions of web servers, the World Wide Web would be completely unusable without search engines. Navigating the web via static directories (like early Yahoo!) broke down as the web exploded. Automated crawling and algorithmic ranking transformed the internet into the world's primary accessible knowledge repository.",

    explanation: [
      {
        heading: "1. Web Crawling (The Spider)",
        content: "Spiders (or web crawlers, e.g. Googlebot) are automated software agents that continuously traverse the web. Starting from a seed list of known URLs, a crawler fetches HTML pages, extracts all outbound `<a href=\"...\">` hyperlinks, and appends newly discovered URLs to a prioritized frontier queue. Spiders strictly respect `robots.txt` exclusion protocols."
      },
      {
        heading: "2. The Inverted Index (Tokenization)",
        content: "Search engines do not search raw HTML in real time when you type a query. Instead, an offline indexing pipeline converts billions of documents into an Inverted Index. Unlike a normal index that lists words contained within a document, an inverted index maps every unique token to the list of document IDs (posting lists) where it appears:\n`\"semantic\"` $\\rightarrow$ `[doc1, doc4, doc92]`\n`\"protocols\"` $\\rightarrow$ `[doc2, doc4, doc108]`\nThis allows search engines to evaluate queries across billions of pages in under 20 milliseconds using set intersection."
      },
      {
        heading: "3. Link Equity & The PageRank Algorithm",
        content: "Developed by Larry Page and Sergey Brin at Stanford in 1996, PageRank revolutionized search by realizing that hyperlinks represent democratic votes of confidence. A page's authority is determined by the number and quality of pages that link to it:\n\\[ PR(A) = (1 - d) + d \\sum_{i=1}^{n} \\frac{PR(T_i)}{C(T_i)} \\]\nWhere \\(d\\) is a damping factor (typically 0.85), \\(T_i\\) are pages linking to page A, and \\(C(T_i)\\) is the number of outbound links on page \\(T_i\\). A link from a prestigious university domain carries far more link equity than a link from an obscure personal blog."
      }
    ],

    howItWorks: [
      { step: 1, title: "Crawl Frontier", subtitle: "Spider Ingestion", description: "Crawler fetches HTML from URL queue and parses hyperlinks." },
      { step: 2, title: "Tokenization & Stemming", subtitle: "Indexer Pipeline", description: "Text is cleaned, lowercased, stemmed, and mapped into inverted index posting lists." },
      { step: 3, title: "Query Processing", subtitle: "Search Serving", description: "User enters query; engine executes set intersection across posting lists." },
      { step: 4, title: "Ranking & SERP Dispatch", subtitle: "Scoring Engine", description: "Results are scored via TF-IDF, PageRank, and neural models, then delivered in under 20ms." }
    ],

    simulationType: "search-engine-pipeline",

    practicalExample: {
      scenario: "Inverted Index Posting List Record",
      description: "How search engine indexers map terms to document IDs in memory.",
      records: [
        { type: "Token", host: "Inverted Index Entry", value: "term: 'javascript', postings: [doc_2 (pos 4), doc_7 (pos 18)]", ttl: "Memory", purpose: "Enables sub-millisecond keyword lookup" },
        { type: "Link Graph", host: "PageRank Score", value: "doc_2 (MDN Docs) = 0.96 link authority score", ttl: "Graph", purpose: "Ranks authoritative developer documentation at the top" },
        { type: "SERP Result", host: "HTTP 200 OK", value: "Rank #1: MDN Web Docs (Score: 1.84)", ttl: "Delivery", purpose: "Presents ordered results to human user" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Thinking search engines scan live web pages over the internet when a user types a search query",
        reality: "A search engine queries its own local pre-computed inverted index! Searching the live internet in real time would require hours or days per query."
      }
    ],

    relatedTopics: [
      { id: "web30-semantic-web", title: "Web 3.0 & The Semantic Web: Machine-Readable Data", unitId: "unit-4" },
      { id: "recommender-systems", title: "Recommender Systems: Collaborative & Content Filtering", unitId: "unit-4" }
    ],

    challenge: {
      id: "challenge-se-01",
      title: "Evaluate Inverted Index Mechanics",
      difficulty: "Advanced",
      badge: "Information Retrieval",
      description: "A user queries two keywords: 'semantic' AND 'protocols'. How does a search engine evaluate this boolean conjunction using an inverted index?",
      task: "Select the underlying algorithmic operation:",
      options: [
        { id: "opt-1", text: "It crawls all web servers in the world to check if they have both words.", correct: false, reason: "Crawling occurs offline prior to query execution." },
        { id: "opt-2", text: "It computes the mathematical set intersection between the posting list for 'semantic' and the posting list for 'protocols'.", correct: true, reason: "Correct! The engine looks up both posting lists in its inverted index and finds documents appearing in both lists." },
        { id: "opt-3", text: "It asks the user to pick which word is more important.", correct: false, reason: "Search engines evaluate boolean terms automatically." }
      ],
      hint: "Think about set operations across list of document IDs."
    },

    quiz: [
      {
        id: "se-q1",
        question: "What is an Inverted Index in search engine architecture?",
        options: [
          "A dictionary mapping terms to lists of document identifiers where they appear.",
          "An index of websites that have been permanently deleted.",
          "A tool that flips CSS colors for accessibility.",
          "A list of database passwords."
        ],
        correctIndex: 0,
        explanation: "An inverted index maps words/tokens to posting lists of document IDs, allowing instant retrieval."
      },
      {
        id: "se-q2",
        question: "What core concept does PageRank use to assess the importance of a web page?",
        options: [
          "The file size of the HTML document.",
          "The quantity and quality of incoming hyperlinks pointing to that page from other web pages.",
          "How many advertisements are displayed on the page.",
          "The date the domain was purchased."
        ],
        correctIndex: 1,
        explanation: "PageRank models hyperlinks as votes of confidence, propagating link equity across the web graph."
      }
    ]
  },

  // ==========================================
  // TOPIC 13: RECOMMENDER SYSTEMS
  // ==========================================
  "recommender-systems": {
    id: "recommender-systems",
    unitId: "unit-4",
    unitNumber: 4,
    unitTitle: "Unit 4: Web 2.0, Social Web, Semantic Web & Emerging Paradigms",
    title: "Recommender Systems: Collaborative & Content Filtering",
    subtitle: "Mathematical algorithms predicting user affinities and navigating information overload",
    difficulty: "Advanced",
    estimatedMinutes: 18,
    badge: "Machine Learning Web",

    definition: "A Recommender System is an information filtering system that seeks to predict the 'rating' or 'preference' a user would give to an item. Widely deployed across modern web platforms (e.g. Netflix, Amazon, Spotify, YouTube), recommender architectures rely primarily on two foundational paradigms: Content-Based Filtering (matching item attributes to user profiles) and Collaborative Filtering (discovering patterns across peer user cohorts).",

    whyItMatters: "As the web expanded from millions to billions of items, users encountered crippling cognitive information overload. Search engines solve the problem when a user knows exactly what keywords to query; recommender systems solve the problem of discovery when the user does not know what to search for. Recommenders drive over 70% of YouTube views and 35% of Amazon purchases.",

    explanation: [
      {
        heading: "1. Content-Based Filtering (Attribute Matching)",
        content: "Content-based recommenders recommend items based on a comparison between the content of the items and a user profile. Items are described by feature vectors (e.g. genre: 'Science Fiction', director: 'Christopher Nolan', tags: ['AI', 'Time Travel']).\n- Similarity Metric: Cosine similarity measures the angle between the user's affinity vector \\(\\vec{u}\\) and the item vector \\(\\vec{i}\\):\n\\[ \\text{Cosine Similarity} = \\frac{\\vec{u} \\cdot \\vec{i}}{\\|\\vec{u}\\| \\|\\vec{i}\\|} \\]\n- Advantage: Transparent and explainable ('Recommended because you enjoyed Interstellar'). Does not require a large user base."
      },
      {
        heading: "2. Collaborative Filtering (Peer Behavior)",
        content: "Collaborative filtering makes recommendations based on the collective behavior, ratings, and interactions of other users:\n- User-Based: Finds users who rated items similarly to you in the past, and recommends items they liked that you have not seen yet.\n- Item-Based: Computes similarity between pairs of items based on how frequently they are co-rated by the community ('Users who bought item A also bought item B').\n- The Cold-Start Problem: Fails for brand new items or new users with zero interaction history."
      },
      {
        heading: "3. Hybrid Recommender Architectures",
        content: "Modern production platforms merge both approaches into Hybrid Recommenders: using content-based filtering to bootstrap new items (solving cold-start), and transitioning to deep collaborative matrix factorization and neural embeddings as interaction data accumulates."
      }
    ],

    howItWorks: [
      { step: 1, title: "Behavior Logging", subtitle: "Telemetry", description: "Web app logs user clicks, watch durations, ratings, and purchases." },
      { step: 2, title: "Feature Vectorization", subtitle: "Embedding Space", description: "Items and user profiles are converted into high-dimensional numerical vectors." },
      { step: 3, title: "Similarity Scoring", subtitle: "Matrix Math", description: "Algorithms compute cosine similarity or dot products against candidate catalog." },
      { step: 4, title: "Ranked Presentation", subtitle: "Feed UI", description: "Top-K scored items are presented with transparent explanations ('Because you watched...')." }
    ],

    simulationType: "recommender-system-sim",

    practicalExample: {
      scenario: "Content-Based Feature Vector Calculation",
      description: "How item tags and user affinities are evaluated mathematically.",
      records: [
        { type: "User Vector", host: "UserProfile(Alice)", value: "{webdev: 0.9, ai: 0.8, gaming: 0.1}", ttl: "Profile", purpose: "Represents user historical affinity preferences" },
        { type: "Item Vector", host: "Article('RDF Triples')", value: "{webdev: 0.9, ai: 0.85, gaming: 0.0}", ttl: "Item", purpose: "Represents intrinsic topic metadata of candidate article" },
        { type: "Similarity", host: "Cosine Similarity", value: "0.98 (High Confidence Match)", ttl: "Computation", purpose: "Ranks article at top of user personalized feed" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Assuming collaborative filtering inspects the actual text or video content of an item",
        reality: "Collaborative filtering knows nothing about item content! It operates purely on user-item interaction matrices (ratings, clicks, views)."
      }
    ],

    relatedTopics: [
      { id: "search-engines", title: "Search Engines: Crawling, Inverted Indexing & PageRank", unitId: "unit-4" },
      { id: "web30-semantic-web", title: "Web 3.0 & The Semantic Web: Machine-Readable Data", unitId: "unit-4" }
    ],

    challenge: {
      id: "challenge-rec-01",
      title: "Diagnose Recommender Cold-Start Challenge",
      difficulty: "Advanced",
      badge: "Recommender Engineering",
      description: "A streaming website uploads an independent movie that was released 5 minutes ago. The collaborative filtering engine fails to recommend it to any users.",
      task: "What causes this failure, and how should it be resolved?",
      options: [
        { id: "opt-1", text: "The video file is corrupted; it must be re-encoded.", correct: false, reason: "The issue is algorithmic, not related to media codecs." },
        { id: "opt-2", text: "Collaborative filtering suffers from the cold-start problem; the platform should use Content-Based Filtering on metadata tags until user ratings accumulate.", correct: true, reason: "Correct! Brand new items have zero user ratings, meaning collaborative filtering cannot calculate similarity until content-based metadata bridges the gap." },
        { id: "opt-3", text: "The database table is too small.", correct: false, reason: "Table capacity does not cause cold-start algorithmic failure." }
      ],
      hint: "Think about what collaborative filtering requires to compute recommendations."
    },

    quiz: [
      {
        id: "rec-q1",
        question: "What is the primary difference between Content-Based and Collaborative Filtering?",
        options: [
          "Content-Based matches item attributes to user profiles; Collaborative matches patterns across peer user communities.",
          "Content-Based only works on mobile phones; Collaborative only works on desktop PCs.",
          "Content-Based requires SQL; Collaborative requires XML.",
          "Content-Based is illegal under GDPR."
        ],
        correctIndex: 0,
        explanation: "Content-based focuses on item characteristics; collaborative focuses on collective community interaction behavior."
      },
      {
        id: "rec-q2",
        question: "What mathematical metric is most commonly used to calculate similarity between two feature vectors in recommender systems?",
        options: ["Cosine Similarity", "HTML Validation Score", "Ping Latency", "Baud Rate"],
        correctIndex: 0,
        explanation: "Cosine similarity calculates the cosine of the angle between two multi-dimensional vectors, measuring directional alignment regardless of magnitude."
      }
    ]
  },

  // ==========================================
  // TOPIC 14: BENEFITS OF BLOCKCHAIN
  // ==========================================
  "blockchain-benefits": {
    id: "blockchain-benefits",
    unitId: "unit-4",
    unitNumber: 4,
    unitTitle: "Unit 4: Web 2.0, Social Web, Semantic Web & Emerging Paradigms",
    title: "Benefits of Blockchain: Distributed Ledgers & Consensus",
    subtitle: "A balanced, educational exploration of cryptographic trust, immutability, and distributed ledgers",
    difficulty: "Intermediate",
    estimatedMinutes: 18,
    badge: "Distributed Ledgers",

    definition: "A Blockchain is a distributed, immutable ledger that cryptographically links a continuously growing list of records called blocks. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data. Combined with decentralized consensus mechanisms (such as Proof of Work or Proof of Stake), blockchains enable distrusting parties to establish verifiable, tamper-evident records without relying on a central authority.",

    whyItMatters: "Traditional web architectures rely entirely on centralized trust: your bank, social media network, or cloud provider maintains the sole authoritative database and can alter, censor, or delete records arbitrarily. Blockchain introduces an alternative trust model: mathematical verification. While often obscured by speculative crypto hype, the underlying computer science provides powerful capabilities for verifiable credentials, supply chain provenance, and decentralized identity.",

    explanation: [
      {
        heading: "Cryptographic Immutability & Hash Linking",
        content: "The core tamper-evident property of a blockchain stems from cryptographic hashing (e.g. SHA-256):\n- Block \\(N\\) contains: `Data`, `Timestamp`, `Nonce`, and `PreviousHash` (the exact SHA-256 hash of Block \\(N-1\\)).\n- Avalanche Effect: If an attacker alters a single character of historical data in Block 1, Block 1's hash completely changes.\n- Downstream Breakage: Because Block 2 embeds Block 1's old hash, Block 2's `PreviousHash` pointer becomes invalid, breaking Block 2, Block 3, and all downstream links instantly across the entire network."
      },
      {
        heading: "Key Benefits of Distributed Ledgers",
        bullets: [
          "Tamper-Evidence & Auditability: Historical records cannot be altered retroactively without recalculating consensus across the majority of the network.",
          "Disintermediation: Eliminates reliance on single centralized intermediaries who may charge exorbitant fees or censor access.",
          "Verifiable Digital Identity: Enables W3C Decentralized Identifiers (DIDs) and Verifiable Credentials (such as university degrees or medical licenses) that any third party can verify cryptographically without calling the issuing institution."
        ]
      },
      {
        heading: "Engineering Trade-offs & Nuanced Realities",
        content: "Responsible computer science education mandates recognizing blockchain trade-offs:\n- Scalability Bottlenecks: Centralized databases (e.g. PostgreSQL) process 50,000+ transactions/sec with sub-millisecond finality. Public blockchains process 15 to 2,000 transactions/sec due to distributed consensus propagation.\n- Storage & Energy: Full replication across thousands of nodes introduces significant storage redundancy and computational overhead.\n- Immutability Risk: If a bug exists in a deployed smart contract, it cannot be easily patched like traditional server code."
      }
    ],

    howItWorks: [
      { step: 1, title: "Transaction Broadcast", subtitle: "P2P Network", description: "Client signs transaction with private key and broadcasts to peer nodes." },
      { step: 2, title: "Block Assembly", subtitle: "Mempool", description: "Miner/Validator bundles pending transactions and references previous block hash." },
      { step: 3, title: "Consensus Execution", subtitle: "Proof Calculation", description: "Node calculates valid proof (PoW nonce or PoS stake validation)." },
      { step: 4, title: "Ledger Commitment", subtitle: "Chain Extension", description: "Valid block is appended to immutable chain and synchronized across global peers." }
    ],

    simulationType: "blockchain-benefits-sim",

    practicalExample: {
      scenario: "Tamper-Evident Block Structure Record",
      description: "Inspecting cryptographic hashes across connected blocks.",
      records: [
        { type: "Block 1", host: "Genesis Block", value: "hash: '0000a18f...', prevHash: '00000000...'", ttl: "Immutable", purpose: "Initial anchor block in network" },
        { type: "Block 2", host: "Transaction Block", value: "hash: '0000c842...', prevHash: '0000a18f...'", ttl: "Immutable", purpose: "Cryptographically binds to Block 1 hash" },
        { type: "Tampering Test", host: "Altering Block 1", value: "New hash: 'e91a04...'", ttl: "Failed", purpose: "Breaks Block 2 prevHash verification cascade" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Believing blockchains should replace traditional relational databases for all web applications",
        reality: "Blockchains are slow, expensive, and complex compared to relational databases. They should only be used when multi-party decentralized verification without a trusted central coordinator is an absolute technical requirement."
      }
    ],

    relatedTopics: [
      { id: "web30-semantic-web", title: "Web 3.0 & The Semantic Web: Machine-Readable Data", unitId: "unit-4" },
      { id: "edge-computing", title: "Edge Computing & CDNs: Cloud vs. Edge Latency", unitId: "unit-4" }
    ],

    challenge: {
      id: "challenge-bc-01",
      title: "Analyze Blockchain Immutability Mechanics",
      difficulty: "Intermediate",
      badge: "Cryptographic Ledgers",
      description: "A rogue employee gains access to one database server node and modifies a historical salary record in Block #12.",
      task: "Why does this tampering fail to corrupt the global blockchain ledger?",
      options: [
        { id: "opt-1", text: "Because the computer's CPU catches fire.", correct: false, reason: "Physical hardware damage does not occur." },
        { id: "opt-2", text: "Because changing the data alters Block #12's hash, causing subsequent blocks to fail verification, and other peer nodes will reject the tampered chain in favor of majority consensus.", correct: true, reason: "Correct! The combination of cryptographic hash chaining and distributed consensus prevents unilateral record alteration." },
        { id: "opt-3", text: "Because JavaScript automatically rewrites the code.", correct: false, reason: "JavaScript does not autonomously modify blockchain consensus." }
      ],
      hint: "Think about the relationship between hashes and consensus across peer nodes."
    },

    quiz: [
      {
        id: "bc-q1",
        question: "What links each block to the preceding block in a blockchain?",
        options: [
          "The cryptographic hash of the previous block embedded inside the current block header.",
          "An email address.",
          "A CSS stylesheet.",
          "A random UUID generated by the browser."
        ],
        correctIndex: 0,
        explanation: "Each block header embeds the exact cryptographic hash of its predecessor, creating an unbroken tamper-evident chain."
      },
      {
        id: "bc-q2",
        question: "What is a major technical trade-off of public blockchain systems compared to centralized cloud databases?",
        options: [
          "Significantly lower transaction throughput and higher latency due to distributed network consensus.",
          "Inability to transmit text.",
          "Only works during daylight hours.",
          "Cannot store numbers."
        ],
        correctIndex: 0,
        explanation: "Decentralized consensus requires global peer communication, resulting in much lower throughput than centralized SQL databases."
      }
    ]
  },

  // ==========================================
  // TOPIC 15: EDGE COMPUTING & CDNS
  // ==========================================
  "edge-computing": {
    id: "edge-computing",
    unitId: "unit-4",
    unitNumber: 4,
    unitTitle: "Unit 4: Web 2.0, Social Web, Semantic Web & Emerging Paradigms",
    title: "Edge Computing & CDNs: Cloud vs. Edge Latency",
    subtitle: "Overcoming the physical limits of network latency by distributing compute to the network perimeter",
    difficulty: "Intermediate",
    estimatedMinutes: 16,
    badge: "Distributed Systems",

    definition: "Edge Computing is a distributed computing paradigm that brings computation and data storage closer to the sources of data (the network 'edge') rather than relying exclusively on centralized cloud data centers located thousands of miles away. Implemented through globally distributed Content Delivery Network (CDN) Points of Presence (PoPs) and serverless edge functions, edge computing drastically minimizes latency and bandwidth consumption.",

    whyItMatters: "Data packets traveling through terrestrial fiber-optic glass cables cannot travel faster than the speed of light in glass (~200,000 km/s). A round-trip request between London and Sydney physically requires a minimum of ~160ms purely for light transit, ignoring router hops and server CPU processing. Edge computing solves this physical bottleneck not by defying the laws of physics, but by terminating TLS handshakes and executing serverless logic within 15 kilometers of the human user.",

    explanation: [
      {
        heading: "Cloud vs. Edge: Architectural Comparison",
        content: "The architectural shift can be viewed across two paradigms:\n- Centralized Cloud (e.g. AWS us-east-1 in Virginia): All global users route requests across continental and undersea fiber backbones to a central region. Users in Tokyo or Paris experience 150ms – 250ms latency.\n- Distributed Edge Computing (e.g. Cloudflare Workers, Fastly Compute, AWS CloudFront): Hundreds of Points of Presence (PoPs) deployed directly inside regional Internet Service Provider (ISP) exchange centers. Client requests terminate at a local node just 10–20ms away."
      },
      {
        heading: "Modern Edge Capabilities Beyond Static Caching",
        bullets: [
          "Static Asset Caching: Serving images, CSS, and pre-rendered HTML files directly from edge memory cache.",
          "Serverless Edge Functions: Running lightweight V8 JavaScript / WebAssembly isolates at the edge to inspect requests, personalize HTML, and rewrite headers.",
          "Edge Security & DDoS Mitigation: Scrubbing malicious bot traffic and enforcing Web Application Firewalls (WAF) before traffic reaches origin servers.",
          "Geo-Localization & A/B Testing: Directing users to localized content or feature flags without origin round-trips."
        ]
      }
    ],

    howItWorks: [
      { step: 1, title: "Anycast DNS Routing", subtitle: "DNS Layer", description: "Browser resolves domain; Anycast BGP routes packet to geographically closest PoP." },
      { step: 2, title: "Local TLS Termination", subtitle: "Edge Node", description: "Cryptographic TLS handshake terminates at local PoP (saving 2 round-trips)." },
      { step: 3, title: "Edge Worker Execution", subtitle: "V8 Isolate", description: "Serverless function executes authentication check or cache lookup in under 5ms." },
      { step: 4, title: "Origin Fallback (If Miss)", subtitle: "Backbone", description: "Only cache misses travel back to central origin cloud over optimized fiber links." }
    ],

    simulationType: "edge-computing-sim",

    practicalExample: {
      scenario: "Edge Function Geo-Routing Record",
      description: "Cloudflare Worker code executing at edge PoP in under 15ms.",
      records: [
        { type: "Client Request", host: "GET /api/user/feed", value: "User location: Paris, France", ttl: "Local ISP", purpose: "Dispatches request to nearest PoP" },
        { type: "Edge Execution", host: "Edge Worker (Paris PoP)", value: "Cache HIT: Delivered in 12ms", ttl: "Edge Memory", purpose: "Bypasses transatlantic fiber trip to US origin" },
        { type: "Latency Comparison", host: "Origin Cloud = 165ms", value: "Edge PoP = 14ms (91% latency reduction)", ttl: "Benchmark", purpose: "Drastically elevates Core Web Vitals (LCP/INP)" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Assuming edge nodes should store entire multi-terabyte relational SQL databases",
        reality: "Edge nodes excel at stateless compute, caching, and key-value lookups! Heavy relational databases with strict ACID multi-table joins remain anchored in centralized regions or distributed read-replicas."
      }
    ],

    relatedTopics: [
      { id: "blockchain-benefits", title: "Benefits of Blockchain: Distributed Ledgers & Consensus", unitId: "unit-4" },
      { id: "web30-semantic-web", title: "Web 3.0 & The Semantic Web: Machine-Readable Data", unitId: "unit-4" }
    ],

    challenge: {
      id: "challenge-edge-01",
      title: "Evaluate Latency Physics Bottlenecks",
      difficulty: "Intermediate",
      badge: "Edge Architecture",
      description: "A gaming company hosts its multiplayer matchmaking server exclusively in Frankfurt, Germany. Australian players report an unplayable 320ms ping.",
      task: "Why can't software optimization on the Frankfurt server solve this problem?",
      options: [
        { id: "opt-1", text: "Because the speed of light in fiber optics enforces a physical round-trip limit across 16,000 kilometers; the compute must be moved to edge nodes in Sydney.", correct: true, reason: "Correct! Physical distance limits network speed; edge computing brings computation close to the user." },
        { id: "opt-2", text: "Because German servers cannot talk to Australian computers.", correct: false, reason: "Internet protocols are globally interoperable." },
        { id: "opt-3", text: "Because HTML cannot render in Australia.", correct: false, reason: "Completely false." }
      ],
      hint: "Remember the physical speed of light in fiber optic cables."
    },

    quiz: [
      {
        id: "edg-q1",
        question: "What is a 'Point of Presence' (PoP) in Content Delivery Networks and Edge Computing?",
        options: [
          "A localized physical access point and data center located near an Internet exchange point to terminate traffic close to users.",
          "A pop-up advertisement in a browser.",
          "A programming error in JavaScript.",
          "A wireless mouse protocol."
        ],
        correctIndex: 0,
        explanation: "PoPs are geographically distributed server clusters placed inside local ISP hubs to minimize physical distance."
      },
      {
        id: "edg-q2",
        question: "Why is TLS handshake termination at the edge a massive performance win?",
        options: [
          "Because establishing encryption keys locally avoids multiple transatlantic round-trips before data can even begin streaming.",
          "Because it removes the need for encryption entirely.",
          "Because it converts HTTPS into plain text HTTP.",
          "Because it deletes browser cookies."
        ],
        correctIndex: 0,
        explanation: "TLS handshakes require cryptographic negotiation round-trips; terminating them at a local edge PoP reduces initial connection latency from hundreds of ms to single digits."
      }
    ]
  },

  // ==========================================
  // TOPIC 16: DARK MODE IN WEB DEVELOPMENT
  // ==========================================
  "dark-mode-web": {
    id: "dark-mode-web",
    unitId: "unit-4",
    unitNumber: 4,
    unitTitle: "Unit 4: Web 2.0, Social Web, Semantic Web & Emerging Paradigms",
    title: "Dark Mode in Web Development: CSS Tokens & WCAG Contrast",
    subtitle: "Architecting modern, accessible theme switching using CSS custom properties and system media queries",
    difficulty: "Beginner",
    estimatedMinutes: 14,
    badge: "Modern Frontend",

    definition: "Dark Mode is a color scheme option that displays light-colored text and UI elements on a dark background. In modern web engineering, dark mode is implemented using semantic design tokens, CSS Custom Properties (variables), the `@media (prefers-color-scheme)` media feature, and class-based DOM toggles while maintaining strict compliance with WCAG (Web Content Accessibility Guidelines) color contrast ratios.",

    whyItMatters: "Dark mode has transitioned from a niche aesthetic novelty to an essential standard of modern web applications. It reduces eye strain in low-light environments, conserves battery power on OLED and AMOLED displays (where dark pixels turn off completely), and satisfies critical accessibility needs for users with photophobia or visual impairments.",

    explanation: [
      {
        heading: "1. The Modern Implementation Stack",
        content: "Modern theme architecture uses a 3-layer approach:\n1. Semantic Design Tokens: Defining CSS custom properties under `:root` (e.g. `--bg-primary`, `--text-primary`, `--border-color`) instead of hardcoded hex values.\n2. System Preference Detection: Querying `@media (prefers-color-scheme: dark)` to automatically respect the user's OS-level theme settings.\n3. User Override & Persistence: Toggling a `.dark` or `data-theme=\"dark\"` attribute on the `<html>` root element using JavaScript and saving the choice in `localStorage`."
      },
      {
        heading: "2. The Pitfall of Naive Color Inversion",
        content: "A common beginner mistake is applying CSS `filter: invert(100%)`. This creates disastrous results:\n- Distorts photograph and avatar colors.\n- Flattens drop shadows and spatial elevation.\n- Results in harsh, vibrating pure black (`#000000`) and pure white (`#ffffff`) combinations that cause optical halation.\nLeading design systems use rich charcoal or dark navy slates (e.g. `#0f172a` or `#1e293b`) with soft off-white text (`#f8fafc`)."
      },
      {
        heading: "3. WCAG 2.1 Color Contrast Ratios",
        bullets: [
          "Level AA (Minimum Standard): Requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text (18pt+).",
          "Level AAA (Enhanced Accessibility): Requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text.",
          "Interactive Elements: Form inputs, focus rings, and buttons must maintain 3:1 contrast against adjacent background colors."
        ]
      }
    ],

    howItWorks: [
      { step: 1, title: "System Preference Check", subtitle: "CSS Media Query", description: "Browser evaluates `@media (prefers-color-scheme: dark)` on initial page load." },
      { step: 2, title: "Storage Audit", subtitle: "LocalStorage", description: "Inline script checks `localStorage.getItem('theme')` to prevent flash of wrong theme (FOUC)." },
      { step: 3, title: "Root Attribute Binding", subtitle: "DOM Manipulation", description: "Document sets `<html data-theme=\"dark\">` applying dark CSS variable token overrides." },
      { step: 4, title: "WCAG Contrast Render", subtitle: "Render Tree", description: "Browser renders components using semantic tokens guaranteeing compliant contrast ratios." }
    ],

    simulationType: "dark-mode-inspector",

    practicalExample: {
      scenario: "Production CSS Custom Property Theme Architecture",
      description: "Clean CSS variable declarations for semantic light and dark themes.",
      records: [
        { type: "Light Tokens", host: ":root", value: "--bg-primary: #ffffff; --text-primary: #0f172a;", ttl: "CSS", purpose: "Base high-contrast light theme tokens" },
        { type: "Dark Override", host: ":root[data-theme='dark']", value: "--bg-primary: #0f172a; --text-primary: #f8fafc;", ttl: "CSS", purpose: "Semantic dark slate token overrides" },
        { type: "Component Usage", host: ".card { background: var(--bg-primary); }", value: "Decoupled component style", ttl: "DOM", purpose: "Guarantees automatic theme switching without code duplication" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Using pure #000000 background with pure #ffffff text for dark mode",
        reality: "Pure black and pure white creates extreme harsh contrast that causes visual glare, eye strain, and halation. Design systems use deep slate grays with softened off-white typography."
      },
      {
        misconception: "Allowing a 'Flash of Unstyled/White Content' (FOUC) when loading a dark theme",
        reality: "If theme detection code runs late in React or `useEffect()`, the user will see a blinding white screen before the theme switches. An inline script in the `<head>` must apply the theme before the DOM renders!"
      }
    ],

    relatedTopics: [
      { id: "web-widgets", title: "Web Widgets: Modular Embeddable Client Dashboards", unitId: "unit-4" },
      { id: "web20-evolution", title: "Web 2.0: The Participatory Read-Write Web", unitId: "unit-4" }
    ],

    challenge: {
      id: "challenge-dark-01",
      title: "Evaluate WCAG Contrast Compliance",
      difficulty: "Beginner",
      badge: "Accessibility & CSS",
      description: "A designer styles dark mode text using dark gray text (`#475569`) on a black background (`#0f172a`), resulting in a 2.1:1 contrast ratio.",
      task: "Does this comply with WCAG 2.1 Level AA standards, and how should it be corrected?",
      options: [
        { id: "opt-1", text: "Yes, 2.1:1 is compliant with all standards.", correct: false, reason: "WCAG AA requires a minimum of 4.5:1 for normal text." },
        { id: "opt-2", text: "No, it fails WCAG AA (minimum 4.5:1 required); the text color should be lightened to a soft off-white (such as #f8fafc) to exceed 14:1 contrast.", correct: true, reason: "Correct! Low contrast text causes severe readability issues for visually impaired users." },
        { id: "opt-3", text: "It is compliant if the user turns up their screen brightness.", correct: false, reason: "Accessibility guidelines cannot assume maximum screen brightness." }
      ],
      hint: "Remember the WCAG AA minimum contrast ratio for normal text."
    },

    quiz: [
      {
        id: "dark-q1",
        question: "Which CSS media feature detects if the user's operating system has requested a dark color theme?",
        options: [
          "@media (prefers-color-scheme: dark)",
          "@media (dark-mode: active)",
          "@media (night-vision: on)",
          "@media (color-inversion: true)"
        ],
        correctIndex: 0,
        explanation: "`@media (prefers-color-scheme: dark)` is the official CSS Media Queries Level 5 standard."
      },
      {
        id: "dark-q2",
        question: "What is the minimum WCAG 2.1 Level AA contrast ratio required for normal body text?",
        options: ["1.5:1", "3.0:1", "4.5:1", "10:1"],
        correctIndex: 2,
        explanation: "WCAG 2.1 Level AA mandates a minimum contrast ratio of 4.5:1 for normal text (under 18pt)."
      }
    ]
  },

  // ==========================================
  // TOPIC 17: CAPSTONE LAB - EVOLUTION OF THE WEB
  // ==========================================
  "unit4-evolution-lab": {
    id: "unit4-evolution-lab",
    unitId: "unit-4",
    unitNumber: 4,
    unitTitle: "Unit 4: Web 2.0, Social Web, Semantic Web & Emerging Paradigms",
    title: "Capstone Lab: Evolution of the Web Laboratory",
    subtitle: "Hands-on architectural migration across Web 1.0, Web 2.0, and Web 3.0 with comprehensive diagnostic assessment",
    difficulty: "Intermediate",
    estimatedMinutes: 25,
    badge: "Capstone Lab",

    definition: "The Evolution of the Web Laboratory is the comprehensive capstone practical experience for Unit 4. In this laboratory, students actively upgrade an educational portal across three major architectural eras—progressing from a static Web 1.0 brochure, to an interactive Web 2.0 participatory platform, and finally to a machine-readable Web 3.0 semantic knowledge fabric—culminating in a 15-question comprehensive assessment.",

    whyItMatters: "Mastering web technology requires understanding historical context: every modern framework, protocol, and design pattern was invented to resolve real pain points in previous generations. By experiencing the migration of an application across all eras firsthand, students synthesize how AJAX, REST APIs, Semantic Ontologies, and Edge Computing coalesce into the intelligent web of tomorrow.",

    explanation: [
      {
        heading: "Laboratory Milestones",
        content: "In this capstone experience, students complete 3 progressive architectural upgrades:\n1. Milestone 1: Analyze baseline Web 1.0 architecture (static HTML, FTP deployments, synchronous page refreshes, and visitor counters).\n2. Milestone 2: Upgrade to Web 2.0 by injecting asynchronous AJAX comment streams, subscribing to live RSS XML feeds, and activating social micro-interactions.\n3. Milestone 3: Upgrade to Web 3.0 by embedding Schema.org/RDF JSON-LD knowledge graph metadata, testing AI crawler comprehension, and deploying the application to edge CDN Points of Presence for sub-15ms global latency."
      }
    ],

    howItWorks: [
      { step: 1, title: "Baseline Inspection", subtitle: "Web 1.0", description: "Inspect static brochureware document model with table layouts and guestbooks." },
      { step: 2, title: "Social Web Upgrade", subtitle: "Web 2.0", description: "Inject AJAX background comments, RSS feed aggregator, and social graph actions." },
      { step: 3, title: "Intelligent Web Upgrade", subtitle: "Web 3.0", description: "Embed JSON-LD Linked Data and configure Edge CDN serverless distribution." },
      { step: 4, title: "Diagnostic Assessment", subtitle: "Comprehensive Exam", description: "Complete 15-question assessment testing mastery across all Unit 4 topics." }
    ],

    simulationType: "web-evolution-lab",

    practicalExample: {
      scenario: "Full-Stack Web Evolution Architectural Matrix",
      description: "Comparing technical components across the three evolutionary eras.",
      records: [
        { type: "Web 1.0", host: "Apache / FTP", value: "Static HTML, table layouts, guestbooks", ttl: "1991-2004", purpose: "Passive information broadcast" },
        { type: "Web 2.0", host: "Rails / Node / PostgreSQL", value: "AJAX, REST APIs, Wikis, Blogs, Social Feeds", ttl: "2004-Present", purpose: "Participatory user-generated collaboration" },
        { type: "Web 3.0", host: "Edge Workers / Knowledge Graphs", value: "RDF, Schema.org, DIDs, Edge Latency Race", ttl: "Emerging", purpose: "Intelligent machine-readable decentralized trust" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Assuming older web paradigms are completely extinct",
        reality: "Every era builds upon the foundation of its predecessor! Modern Web 3.0 edge applications still rely on HTML5, CSS custom properties, and HTTP protocols established in earlier eras."
      }
    ],

    relatedTopics: [
      { id: "web20-evolution", title: "Web 2.0: The Participatory Read-Write Web", unitId: "unit-4" },
      { id: "web30-semantic-web", title: "Web 3.0 & The Semantic Web: Machine-Readable Data", unitId: "unit-4" }
    ],

    challenge: {
      id: "challenge-capstone-01",
      title: "Synthesize Web Evolution Paradigms",
      difficulty: "Intermediate",
      badge: "Unit 4 Master",
      description: "Reflecting across the entire Unit 4 journey from 1991 to the future, which trajectory best captures the continuous evolutionary vector of web technology?",
      task: "Select the most accurate evolutionary summary:",
      options: [
        { id: "opt-1", text: "From static human documents → to dynamic participatory social apps → to machine-readable, intelligent, decentralized knowledge fabrics.", correct: true, reason: "Correct! This encompasses the full trajectory from Web 1.0 (read-only) through Web 2.0 (read-write) to Web 3.0 (read-write-execute/intelligent)." },
        { id: "opt-2", text: "From complex programming → to zero code → to shutting down the internet.", correct: false, reason: "The internet continues to expand in scale and complexity." },
        { id: "opt-3", text: "From distributed peer-to-peer networks → to a single corporate mainframe server.", correct: false, reason: "The web is moving toward edge distribution, not a single mainframe." }
      ],
      hint: "Review the theme: 'The Evolution from the Social Web to the Intelligent Web'."
    },

    quiz: [
      {
        id: "cap-q1",
        question: "What is the primary architectural driver behind the migration from centralized origin cloud hosting to Edge Computing?",
        options: [
          "Overcoming the physical latency limits of the speed of light in fiber optics by executing code geographically close to the user.",
          "Because computers run out of disk space in the cloud.",
          "Because DNS servers cannot reach America.",
          "Because HTML is being deprecated."
        ],
        correctIndex: 0,
        explanation: "Edge computing places compute nodes in regional PoPs within single-digit milliseconds of users, overcoming physical fiber transit latency."
      },
      {
        id: "cap-q2",
        question: "How do RDF Triples and Schema.org JSON-LD enable the vision of the Semantic Web?",
        options: [
          "They convert all web images to black and white.",
          "They provide standardized, machine-readable knowledge graphs linking entities and relationships for automated AI reasoning.",
          "They speed up CSS animations.",
          "They disable cookies in browsers."
        ],
        correctIndex: 1,
        explanation: "Structured Linked Data transforms human text into unambiguous graph statements that machines and AI agents can query and reason about."
      }
    ]
  }
};
