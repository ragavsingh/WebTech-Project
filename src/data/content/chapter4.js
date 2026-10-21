/**
 * Chapter 4 Documentation Content: Web 2.0, Social Web, Semantic Web & Information Systems
 */

export const CHAPTER_4_TOPICS = {
  '4.1-web20-evolution': {
    id: '4.1-web20-evolution',
    chapterId: 'chapter-4',
    chapterNumber: 4,
    chapterTitle: 'Web 2.0, Social Web, Semantic Web & Information Systems',
    code: '4.1',
    title: 'Web 2.0: The Participatory Read-Write Web',
    subtitle: 'From static brochureware to user-generated platforms, network effects, and rich client interfaces',
    difficulty: 'Fundamental',
    readTime: '15 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'Web 2.0 marks the paradigm shift from a "read-only" broadcast web of static pages to a "read-write" interactive participatory platform where users generate content, network effects compound value, and web browsers function as application runtimes.',
      analogy: 'Web 1.0 was like a printed encyclopedia: a small editorial team wrote articles, printed them onto paper, and millions of readers passively consumed the static text. If an entry contained an error, readers had to wait years for the next edition. Web 2.0 is like Wikipedia or Reddit: every reader possesses a pen and publishing press, continuously writing, reviewing, discussing, and curating millions of entries in real time.',
      keyPoints: [
        'Web 1.0 (Read-Only): Static HTML files served directly by web servers; content creators were exclusively webmasters.',
        'Web 2.0 (Read-Write): Dynamic databases, user accounts, commenting systems, multimedia uploads, and crowdsourced metadata.',
        'Network Effects: The platform becomes exponentially more valuable with each additional user (Metcalfe’s Law).',
        'Rich Internet Applications (RIA): Single-page dynamic interactivity via AJAX and JavaScript replacing full-page browser refreshes.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'Web 2.0 architectures decouple frontend interaction from backend persistence. Modern single-page applications run in the client browser, orchestrating continuous asynchronous JSON APIs against distributed application tiers and event-driven data pipelines.',
      diagram: `
+-------------------------------------------------------------------------+
|                  Web 1.0 (Static) vs. Web 2.0 (Dynamic)                 |
+-------------------------------------------------------------------------+
Web 1.0:
User Browser  ---- HTTP GET /about.html ---->  Apache Web Server (Disk File)
User Browser  <--- 200 OK + Raw HTML --------  (Read-Only Brochureware)

Web 2.0:
User Browser  ---- POST /api/v1/posts ------>  API Gateway (JWT / Auth)
  (React / SPA)                                        |
       ^                                    [Load Balancer]
       |                                       |       |
       |                              [Node / Python App Cluster]
       |                                       |       |
       +----- Asynchronous JSON Response <--- [PostgreSQL / Redis]
`,
      specifications: [
        'W3C XMLHttpRequest & Fetch APIs: Client-side background networking without page reloads.',
        'JSON (RFC 8259): Lightweight, language-agnostic data interchange format replacing heavy XML.',
        'REST Architectural Constraints: Stateless client-server communication using standard HTTP verbs.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'YouTube, Reddit & Medium',
      scenario: 'Handling 500+ Hours of Video Uploads per Minute via User Generation',
      howItWorks: 'YouTube owns virtually zero broadcast television studios. Instead, 100% of its content catalog is created, tagged, described, and categorized by hundreds of millions of global users. Video uploads trigger asynchronous distributed transcoding pipelines across Google Cloud data centers, while user comments, likes, and watch histories feed real-time recommendation matrices.',
      impact: 'Democratized global media production, turning billions of consumers into active publishers and generating tens of billions of dollars in creator economy revenue.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Modern Web 2.0 platforms leverage distributed cloud architectures and rich component frameworks to deliver instantaneous reactive interfaces.',
      tools: [
        'Frontend Frameworks: React, Next.js, Vue, Svelte for client-side rendering and state management.',
        'Cloud Storage & Transcoding: Amazon S3, Google Cloud Storage, FFmpeg clusters for massive user media ingestion.',
        'Relational & Document DBs: PostgreSQL, MongoDB, DynamoDB for high-throughput user post storage.'
      ],
      standards: ['OAuth 2.0 / OpenID Connect', 'W3C Web Standards', 'RESTful API conventions']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'javascript',
      explanation: 'Building an asynchronous Web 2.0 post creator with optimistic UI updates:',
      code: `// Async Web 2.0 post submission with optimistic client update
async function publishUserPost(postContent) {
  const feedList = document.getElementById('post-feed');

  // 1. Optimistic UI: Immediately render post to make UI feel instant
  const tempId = 'temp-' + Date.now();
  const tempElement = document.createElement('div');
  tempElement.id = tempId;
  tempElement.className = 'post-item pending';
  tempElement.innerHTML = \`<p>\${postContent}</p><span>Sending...</span>\`;
  feedList.prepend(tempElement);

  try {
    // 2. Web 2.0 Asynchronous background persistence
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      },
      body: JSON.stringify({ content: postContent, timestamp: new Date().toISOString() })
    });

    if (!response.ok) throw new Error('Failed to persist post');
    const savedPost = await response.json();

    // 3. Reconcile temporary UI with real server ID and timestamp
    tempElement.id = 'post-' + savedPost.id;
    tempElement.classList.remove('pending');
    tempElement.querySelector('span').textContent = new Date(savedPost.timestamp).toLocaleTimeString();
  } catch (err) {
    tempElement.remove();
    alert('Error posting: ' + err.message);
  }
}`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Assuming user-generated content (UGC) is safe and rendering it directly with innerHTML.',
          reality: 'User-submitted text is the primary attack vector for Stored Cross-Site Scripting (XSS). Never inject unescaped UGC into the DOM; sanitize with DOMPurify or use framework bindings (e.g. React JSX) that escape strings automatically.'
        },
        {
          mistake: 'Failing to implement server-side rate limiting and spam filtering on public write endpoints.',
          reality: 'Public Web 2.0 forms without CAPTCHAs, IP throttling, and automated spam detection (e.g. Akismet) get overwhelmed by bot farms within minutes of deployment.'
        }
      ]
    }
  },

  '4.2-social-platforms': {
    id: '4.2-social-platforms',
    chapterId: 'chapter-4',
    chapterNumber: 4,
    chapterTitle: 'Web 2.0, Social Web, Semantic Web & Information Systems',
    code: '4.2',
    title: 'Interactive Social Platforms: Blogs, Wikis & Social Graphs',
    subtitle: 'Collaborative authorship, version diff engines, and social graph feed fan-out architectures',
    difficulty: 'Fundamental',
    readTime: '16 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'Social platforms are web software systems engineered around human interaction topologies: reverse-chronological editorial logs (Blogs), non-linear crowdsourced collaborative knowledge bases (Wikis), and bidirectional or unidirectional connection networks (Social Graphs).',
      analogy: 'A Blog is a personal loudspeaker: one voice broadcasting dispatches with comments below. A Wiki is a shared whiteboard in a public town square: anyone can write on it, cross things out, or click "history" to wipe away graffiti. A Social Graph is a web of telephone lines connecting millions of people: when one person talks, their message is automatically forwarded to the inboxes of all their registered friends.',
      keyPoints: [
        'Blogs: Chronological syndication feeds, permalinks, trackbacks, and commenting engines.',
        'Wikis: Collaborative editing, page history snapshots, change diff algorithms (Myers diff), and rollback capabilities.',
        'Social Graphs: Vertices represent users; edges represent friendships, follows, or enterprise team hierarchies.',
        'Activity Feeds: Algorithmic or chronological fan-out models delivering updates from connected nodes.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'Engineering a social network at scale requires choosing between Fan-Out-on-Write (pushing to follower timelines at post time) versus Fan-Out-on-Read (assembling the timeline when the user opens their app).',
      diagram: `
+-------------------------------------------------------------------------+
|                  Social Feed Fan-Out-on-Write Architecture              |
+-------------------------------------------------------------------------+
Celebrity Post (10M Followers):
[User Posts Update] -> [API Server] -> [Post Database (Master)]
                               |
                   [Async Message Queue (Kafka)]
                               |
                  [Feed Fan-Out Worker Fleet]
                               |
     +-------------------------+-------------------------+
     |                         |                         |
[User A Timeline Redis]   [User B Timeline Redis]   [User C Timeline Redis]
`,
      specifications: [
        'Graph Database Models: Property graphs with Cypher/Gremlin queries (Neo4j, AWS Neptune).',
        'Redis Sorted Sets (ZSET): Timelines ordered by timestamp scores (ZADD timeline:userId timestamp postId).',
        'Myers Diff Algorithm: Used by Git and Wiki engines to compute minimal edit scripts between page revisions.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Wikipedia (Wikimedia Foundation) & X (formerly Twitter)',
      scenario: 'Handling 30,000+ Revisions Daily on Wikipedia and Global Timeline Feeds',
      howItWorks: 'Wikipedia stores every single character revision ever typed using MediaWiki running on MariaDB. When vandals deface a high-profile page, automated bots (e.g. ClueBot NG) and volunteer administrators inspect the unified diff and hit "Rollback", reverting the database row to the prior revision hash in under 200 milliseconds.',
      impact: 'Enables over 60 million free encyclopedia articles across 300+ languages to remain resilient against malicious tampering without locking editing permissions.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Social platforms rely on specialized data stores designed for high write volumes and rapid graph traversals.',
      tools: [
        'MediaWiki: The open-source PHP/MySQL software powering Wikipedia.',
        'Apache Kafka: Distributed commit log for streaming timeline fan-out events to millions of follower queues.',
        'Redis / KeyDB: In-memory timeline caching for sub-millisecond feed retrievals.'
      ],
      standards: ['ActivityPub (W3C standard for decentralized social networking / Mastodon)', 'Open Graph Protocol (og: tags)']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'javascript',
      explanation: 'Computing a text diff between two wiki revisions using standard line tokenization:',
      code: `// Simple wiki line-by-line diff engine demonstration
function generateWikiDiff(oldText, newText) {
  const oldLines = oldText.split('\\n');
  const newLines = newText.split('\\n');
  const diffOutput = [];

  const maxLen = Math.max(oldLines.length, newLines.length);
  for (let i = 0; i < maxLen; i++) {
    const oldLine = oldLines[i];
    const newLine = newLines[i];

    if (oldLine === newLine) {
      diffOutput.push({ type: 'unchanged', text: oldLine });
    } else {
      if (oldLine !== undefined && !newLines.includes(oldLine)) {
        diffOutput.push({ type: 'removed', text: oldLine });
      }
      if (newLine !== undefined && !oldLines.includes(newLine)) {
        diffOutput.push({ type: 'added', text: newLine });
      }
    }
  }
  return diffOutput;
}

// Example usage
const rev1 = "Web 2.0 introduced social networks.\\nUsers read static pages.";
const rev2 = "Web 2.0 introduced social networks.\\nUsers author and edit dynamic content.";
console.log(generateWikiDiff(rev1, rev2));`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Using Fan-Out-on-Write blindly for users with millions of followers ("The Justin Bieber Problem").',
          reality: 'If a user with 50 million followers posts, pushing 50 million writes into Redis locks the message broker. Production systems use hybrid fan-out: write push for ordinary users, but lazy fan-out-on-read for accounts exceeding 25,000 followers.'
        },
        {
          mistake: 'Failing to handle simultaneous wiki edit collisions.',
          reality: 'If two editors open Revision 4 and submit edits concurrently, one overwrites the other (Lost Update Problem). Wikis must check optimistic concurrency tokens (`if-match` revision ID) and prompt editors to resolve merge conflicts.'
        }
      ]
    }
  },

  '4.3-web20-technologies': {
    id: '4.3-web20-technologies',
    chapterId: 'chapter-4',
    chapterNumber: 4,
    chapterTitle: 'Web 2.0, Social Web, Semantic Web & Information Systems',
    code: '4.3',
    title: 'Technologies Behind Web 2.0: RSS, REST APIs & Rails MVC',
    subtitle: 'XML syndication feeds, Fielding REST architectural constraints, and Convention over Configuration',
    difficulty: 'Intermediate',
    readTime: '18 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'The Web 2.0 explosion was powered by three core technical catalysts: RSS (Really Simple Syndication) for decentralized content subscription, RESTful APIs for decoupled client-server data access, and Ruby on Rails for hyper-productive Model-View-Controller web development.',
      analogy: 'Before RSS and REST, visiting the web was like walking into 50 different newspapers offices every morning to see if they wrote anything new, only to find nothing changed. RSS is like having each newspaper drop an index card with headlines through your mail slot the second a story breaks. Ruby on Rails was like an assembly line: instead of forging every screw and gear by hand, you stepped on a pedal and a complete sports car chassis rolled off the line ready to drive.',
      keyPoints: [
        'RSS 2.0 & Atom: Standardized XML schemas enabling reader software (Feedly, Apple Podcasts) to poll content updates automatically.',
        'REST (Roy Fielding, 2000): Architectural style utilizing HTTP verbs (GET, POST, PUT, DELETE) and URIs to manipulate stateless resources.',
        'Convention over Configuration (CoC): Ruby on Rails philosophy eliminating boilerplate configuration by establishing strict default project conventions.',
        'Don\'t Repeat Yourself (DRY): Single source of truth across models, database migrations, and view templates.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'Ruby on Rails revolutionized server-side architecture by standardizing the MVC pattern with Active Record ORM and RESTful resource routing.',
      diagram: `
+-------------------------------------------------------------------------+
|                  Rails MVC & RESTful Resource Architecture              |
+-------------------------------------------------------------------------+
HTTP Request: GET /articles/42
       |
  [Router] -------- routes.rb matches -> ArticlesController#show
       |
 [Controller] ---- Calls Article.find(42) ----> [Model (ActiveRecord)]
       |                                                |
       | <-------- Returns @article instance -----------+ (SQL Query to DB)
       |
 [View Template] - Renders show.html.erb (or serializes to JSON)
       |
HTTP 200 Response: HTML Document or JSON Payload
`,
      specifications: [
        'RSS 2.0 Specification (Harvard Berkman Klein Center): XML syndication container format.',
        'IETF RFC 4287: The Atom Syndication Format.',
        'REST Constraints: Client-Server, Stateless, Cacheable, Layered System, Uniform Interface, Code on Demand.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'GitHub, Shopify & Basecamp',
      scenario: 'Building Trillion-Dollar Web Ecosystems on Ruby on Rails & REST',
      howItWorks: 'GitHub and Shopify were created on Ruby on Rails. Shopify handles over 10% of total US e-commerce and millions of checkouts per minute on a scaled Ruby on Rails backend. Basecamp created Rails in 2004 to build their project management SaaS, open-sourcing the framework that launched Airbnb, Twitch, and Twitter.',
      impact: 'Cut web application time-to-market from months to days, creating the modern venture-backed software startup industry.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Web 2.0 syndication and REST architectures form the operational foundation of modern public developer ecosystems.',
      tools: [
        'Ruby on Rails: The seminal MVC framework featuring Bundler, Puma, and ActiveRecord.',
        'Postman / Swagger (OpenAPI): Designing, mocking, and documenting RESTful web APIs.',
        'RSS Readers & Feed Validators: Miniflux, Feedbin, and W3C Feed Validation Service.'
      ],
      standards: ['OpenAPI 3.1 Specification', 'JSON:API Standard (jsonapi.org)', 'RFC 7231 (HTTP Semantics)']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'xml',
      explanation: 'A fully compliant RSS 2.0 syndication feed document:',
      code: `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Web Engineering Dispatch</title>
    <link>https://example.com/engineering</link>
    <description>Deep-dive architecture notes for production web engineers</description>
    <language>en-us</language>
    <lastBuildDate>Wed, 21 Oct 2026 10:00:00 GMT</lastBuildDate>
    <atom:link href="https://example.com/feed.xml" rel="self" type="application/rss+xml" />

    <item>
      <title>Deconstructing Fielding REST Constraints</title>
      <link>https://example.com/articles/fielding-rest</link>
      <description>Why most JSON APIs are RPC over HTTP rather than true HATEOAS REST.</description>
      <pubDate>Wed, 21 Oct 2026 09:30:00 GMT</pubDate>
      <guid isPermaLink="true">https://example.com/articles/fielding-rest</guid>
    </item>
  </channel>
</rss>`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Using GET endpoints to execute state-mutating actions (e.g. GET /users/delete?id=12).',
          reality: 'HTTP GET must be safe and idempotent according to RFC 7231. Search engine crawlers (Googlebot) and browser prefetch engines will hit all link URLs, inadvertently executing mass deletions in poorly designed systems.'
        },
        {
          mistake: 'The N+1 Query Problem in ActiveRecord / ORM associations.',
          reality: 'Iterating over 100 articles and calling `article.user.name` generates 1 initial query plus 100 individual SQL queries, destroying database CPU. Always eager-load associations using `Article.includes(:user)`.'
        }
      ]
    }
  },

  '4.4-semantic-web': {
    id: '4.4-semantic-web',
    chapterId: 'chapter-4',
    chapterNumber: 4,
    chapterTitle: 'Web 2.0, Social Web, Semantic Web & Information Systems',
    code: '4.4',
    title: 'Web 3.0 & The Semantic Web Architecture',
    subtitle: 'Machine-readable linked data, ontologies (OWL/RDFS), and universal knowledge graphs',
    difficulty: 'Intermediate',
    readTime: '18 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'The Semantic Web (originally coined by Tim Berners-Lee as Web 3.0) is an extension of the World Wide Web in which information is given well-defined machine-readable meaning, enabling software agents and automated systems to reason over linked data across organizational silos.',
      analogy: 'On the standard web, a browser reads `<h1>Avatar</h1><p>Directed by James Cameron</p>`. To the computer, "Avatar" is just seven ASCII characters and James Cameron is another string; it has no clue whether Avatar is a movie, a blue alien, an Xbox profile picture, or a Hindu philosophical concept. The Semantic Web attaches explicit ontological badges to the data: "This entity is a Film", "The director property points to URI representing human James Cameron born in 1954". Computers can now answer complex queries without scraping text.',
      keyPoints: [
        'Linked Data Principles: Use URIs as names for things, use HTTP URIs so people can look them up, provide RDF metadata, and include links to other URIs.',
        'Ontologies: Formal conceptual models defining classes, relationships, and constraints within a domain (e.g. Schema.org, FOAF, Dublin Core).',
        'Inference & Reasoning: Deductive logic engines deriving new facts automatically from established ontological rules.',
        'Knowledge Graphs: Interconnected graph networks powering modern AI entity search (Google Knowledge Graph, Wikidata).'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'The W3C Semantic Web Stack (or "Semantic Layer Cake") organizes technologies from raw text up to trusted logic and reasoning.',
      diagram: `
+-------------------------------------------------------------------------+
|                        W3C Semantic Web Layer Cake                      |
+-------------------------------------------------------------------------+
| User Interface & Applications                                           |
+-------------------------------------------------------------------------+
| Trust & Proof (Cryptographic verification of claims)                    |
+-------------------------------------------------------------------------+
| Logic & Reasoning Engines (Rule-based inference, Pellet, HermiT)        |
+-------------------------------------------------------------------------+
| Ontologies (OWL - Web Ontology Language, RDFS - RDF Schema)             |
+-------------------------------------------------------------------------+
| Query Language (SPARQL Protocol and RDF Query Language)                 |
+-------------------------------------------------------------------------+
| Data Interchange (RDF Triples: Subject -> Predicate -> Object)          |
+-------------------------------------------------------------------------+
| Identifiers & Encoding (URI / IRI, Unicode, XML / JSON-LD)              |
+-------------------------------------------------------------------------+
`,
      specifications: [
        'W3C Semantic Web Standards: RDF, RDFS, OWL, SPARQL, JSON-LD 1.1.',
        'Schema.org Consortium: Unified vocabulary standard founded by Google, Microsoft, Yahoo, and Yandex.',
        'OWL 2 Web Ontology Language Document Overview (W3C Recommendation).'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Google Search & Wikidata',
      scenario: 'Google Knowledge Panels & Rich Snippets via Schema.org JSON-LD',
      howItWorks: 'When you search "Who directed Titanic?", Google doesn\'t crawl links and guess; it queries the Google Knowledge Graph (a trillion-fact semantic database). Web developers embed Schema.org JSON-LD inside HTML pages (`@type: "Movie"`, `director: { "@type": "Person", "name": "James Cameron" }`). Googlebot reads this semantic metadata directly, powering instant rich snippet cards, recipe star ratings, and flight status trackers.',
      impact: 'Enables autonomous AI assistants (Google Assistant, Siri, Alexa) to answer factual questions directly without human navigation through traditional search result links.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Semantic systems use specialized triplestores and ontology engineering workbenches.',
      tools: [
        'Protégé: Stanford University’s open-source ontology editor and knowledge management system.',
        'Apache Jena / Virtuoso: High-performance triplestores for querying billions of RDF triples via SPARQL.',
        'Google Rich Results Test: Official validator for Schema.org structured data markup.'
      ],
      standards: ['JSON-LD 1.1 (W3C Recommendation)', 'SPARQL 1.1 Query Language', 'Dublin Core Metadata']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'html',
      explanation: 'Embedding machine-readable semantic metadata inside an HTML5 webpage using JSON-LD:',
      code: `<!-- Embedding Semantic Web JSON-LD into Webpage <head> -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Understanding the W3C Semantic Web Architecture",
  "description": "Comprehensive analysis of linked data, RDF triples, and ontologies.",
  "author": {
    "@type": "Person",
    "name": "Jane Developer",
    "jobTitle": "Lead Systems Architect",
    "url": "https://example.com/authors/jane"
  },
  "publisher": {
    "@type": "Organization",
    "name": "WebTech Institute",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  },
  "datePublished": "2026-10-21",
  "about": [
    { "@type": "Thing", "name": "Semantic Web" },
    { "@type": "Thing", "name": "Resource Description Framework" }
  ]
}
</script>`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Confusing the original W3C "Semantic Web" definition with contemporary cryptocurrency "Web3".',
          reality: 'Tim Berners-Lee\'s Web 3.0 / Semantic Web (1999–2006) centers on machine-readable linked data, ontologies, and knowledge graphs. Crypto/blockchain Web3 (coined by Gavin Wood in 2014) focuses on decentralized ledgers, tokenomics, and smart contracts. They are entirely distinct paradigms.'
        },
        {
          mistake: 'Creating proprietary, non-standard vocabulary terms when established Schema.org schemas already exist.',
          reality: 'Search engine bots only parse recognized ontologies. Inventing custom keys like `"myCustomAuthorTag"` means no major search engine or voice assistant will ingest the metadata.'
        }
      ]
    }
  },

  '4.5-rdf-triples': {
    id: '4.5-rdf-triples',
    chapterId: 'chapter-4',
    chapterNumber: 4,
    chapterTitle: 'Web 2.0, Social Web, Semantic Web & Information Systems',
    code: '4.5',
    title: 'Resource Description Framework (RDF) & Triples',
    subtitle: 'Subject-Predicate-Object data models, Turtle, JSON-LD, N-Triples, and SPARQL queries',
    difficulty: 'Intermediate',
    readTime: '18 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'The Resource Description Framework (RDF) is the W3C standard data model for representing linked information on the web. It models knowledge as atomic statements called "triples", each consisting of a Subject, a Predicate (verb or relation), and an Object.',
      analogy: 'Imagine every fact in human history broken down into simple grammatical sentences: [Tim Berners-Lee] (Subject) -> [invented] (Predicate) -> [World Wide Web] (Object). By standardizing the names of subjects and verbs into global internet URLs (URIs), millions of independent websites can connect their sentences together into one gigantic global web of interconnected knowledge.',
      keyPoints: [
        'Atomic Triple: Subject (URI or blank node) -> Predicate (URI) -> Object (URI, blank node, or literal value).',
        'Graph Data Model: Collections of RDF triples naturally form a directed, labeled graph where subjects and objects are nodes and predicates are directed edges.',
        'Serialization Formats: Turtle (Terse RDF Triple Language), N-Triples, RDF/XML, and JSON-LD.',
        'SPARQL: The SQL equivalent for graph databases, enabling pattern matching across RDF triples.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'RDF abstracts data away from relational table schemas into universal graph triples that can be queried across distributed endpoints via the SPARQL Protocol.',
      diagram: `
+-------------------------------------------------------------------------+
|                       RDF Triple Directed Graph                         |
+-------------------------------------------------------------------------+
 [http://example.org/alice]  (Subject)
             |
             |  http://xmlns.com/foaf/0.1/knows (Predicate)
             v
 [http://example.org/bob]    (Object / Subject)
             |
             |  http://xmlns.com/foaf/0.1/name (Predicate)
             v
        "Bob Smith"          (Literal Object)
`,
      specifications: [
        'W3C RDF 1.1 Concepts and Abstract Syntax.',
        'W3C Turtle: Terse RDF Triple Language (RFC compliant syntax).',
        'W3C SPARQL 1.1 Query Language and Protocol over HTTP.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Wikidata & DBpedia',
      scenario: 'Querying 100+ Million Entities across the Universal Knowledge Graph via SPARQL',
      howItWorks: 'Wikidata represents all human knowledge as billions of RDF triples stored in a Blazegraph triplestore. Researchers query the public SPARQL endpoint (`query.wikidata.org`) to answer questions like: "List all female astronauts who walked on the moon and their birth coordinates", joining Wikidata entities with NASA Linked Open Data endpoints in a single query.',
      impact: 'Provides the factual bedrock for AI models, Apple Siri queries, and international academic research without requiring individual proprietary SQL databases.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'RDF databases (triplestores) are specialized graph stores optimized for fast index lookups across Subject-Predicate-Object combinations (SPO, POS, OSP indexes).',
      tools: [
        'OpenLink Virtuoso: Enterprise triplestore indexing billions of RDF statements with SQL and SPARQL federated query engines.',
        'Blazegraph: The high-performance graph database powering the official Wikidata Query Service.',
        'rdflib (Python) / N3.js (JavaScript): Libraries for parsing, manipulating, and querying RDF graphs in code.'
      ],
      standards: ['RDF 1.1 Turtle', 'JSON-LD', 'SPARQL 1.1 Protocol']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'text',
      explanation: 'Modeling relationships in Turtle syntax and querying them with SPARQL:',
      code: `# 1. Turtle (.ttl) Representation of RDF Triples
@prefix ex: <http://example.org/webtech/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

ex:timBL foaf:name "Tim Berners-Lee" ;
         foaf:title "Sir" ;
         ex:created ex:www ;
         ex:born "1955-06-08"^^xsd:date .

ex:www foaf:name "World Wide Web" ;
       ex:yearCreated 1989 .

# -------------------------------------------------------------
# 2. SPARQL Query to retrieve creators of systems made before 1995:
PREFIX ex: <http://example.org/webtech/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?creatorName ?systemName ?year
WHERE {
  ?person ex:created ?system .
  ?person foaf:name ?creatorName .
  ?system foaf:name ?systemName .
  ?system ex:yearCreated ?year .
  FILTER (?year < 1995)
}`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Using unversioned or non-resolvable fake URIs for subjects and predicates.',
          reality: 'The core tenet of Linked Data is that URIs must be dereferenceable HTTP URLs. If someone makes an HTTP GET request to your predicate URI, your web server should return an RDF definition of what that relationship means.'
        },
        {
          mistake: 'Executing unbounded SPARQL queries with multiple optional triple patterns on production endpoints.',
          reality: 'Without strict execution timeouts and limits, graph pattern matching can trigger Cartesian explosions, exhausting server RAM and crashing the triplestore.'
        }
      ]
    }
  },

  '4.6-widgets-mashups': {
    id: '4.6-widgets-mashups',
    chapterId: 'chapter-4',
    chapterNumber: 4,
    chapterTitle: 'Web 2.0, Social Web, Semantic Web & Information Systems',
    code: '4.6',
    title: 'Web Widgets & Multi-Source Mashup Architectures',
    subtitle: 'Component isolation, sandboxed Shadow DOM, postMessage APIs, and API synthesis',
    difficulty: 'Intermediate',
    readTime: '16 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'A Web Mashup is an application that dynamically aggregates data, services, or functionality from two or more independent third-party sources into a unified, integrated user experience. Web Widgets are self-contained, embeddable micro-applications designed for seamless insertion into host pages.',
      analogy: 'Imagine building a real estate website. In 1998, you had to hire photographers to drive to houses, draw maps by hand, and build a payment processing warehouse. In the Web 2.0 Mashup era, you write 50 lines of code: you fetch listings from Zillow\'s API, pin them onto an interactive Google Maps widget, calculate mortgage interest via an open bank API, and accept deposits via a Stripe payment widget. You created a multimillion-dollar application by stitching third-party building blocks together.',
      keyPoints: [
        'Data Mashups: Combining raw data streams (e.g. weather data + geographic coordinates).',
        'Presentation Mashups: Embedding interactive visual widgets (e.g. Google Maps, Twitter embed feeds, YouTube players).',
        'Security Isolation: Sandboxing untrusted third-party widgets using `iframe sandbox` and `window.postMessage`.',
        'Web Components: Modern standard (Custom Elements, Shadow DOM, HTML Templates) for encapsulated client-side widgets.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'Mashup architectures can synthesize data either server-side (BFF - Backend For Frontend) or client-side in the browser.',
      diagram: `
+-------------------------------------------------------------------------+
|                  Client-Side vs Server-Side Mashup Architecture         |
+-------------------------------------------------------------------------+
Server-Side Mashup (BFF Pattern):
[Browser] <---- 1 Clean JSON Payload ---- [Aggregator Backend (Node.js)]
                                              |        |        |
                                       [Mapbox API] [Yelp] [WeatherAPI]

Client-Side Widget Mashup:
[Host Webpage]
  |-- <google-map> (Shadow DOM) ---------> [Google Maps Tiles CDN]
  |-- <stripe-card-element> (Iframe) ----> [Stripe PCI-Compliant Vault]
  |-- postMessage bridge communication
`,
      specifications: [
        'W3C Web Components: Custom Elements v1, Shadow DOM v1.',
        'HTML5 iframe sandbox attributes (`allow-scripts`, `allow-same-origin`).',
        'HTML5 Window.postMessage API for secure cross-origin message passing.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Uber & Airbnb',
      scenario: 'Building Billion-Dollar Transport & Hospitality Engines on Google Maps & Twilio',
      howItWorks: 'When Uber launched, its engineering team did not build global satellite mapping, GPS turn-by-turn routing, or telecommunication SMS infrastructure. They mashed together the Google Maps API for real-time driver visualization, Twilio for automated SMS dispatch, and Braintree for credit card charging, focusing 100% of their engineering talent on driver dispatch matching algorithms.',
      impact: 'Reduced capital expenditure by 95% and enabled rapid global scaling across hundreds of metropolitan markets in months.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Modern widget engineering relies on strict encapsulation techniques to prevent style collisions and DOM tampering.',
      tools: [
        'Stripe.js & Stripe Elements: Industry benchmark for zero-leakage, PCI-compliant embedded payment widgets.',
        'Lit / Stencil: Compilers for building lightweight, standard Web Components with Shadow DOM encapsulation.',
        'GraphQL Federation / Apollo Router: Composing enterprise schemas across multiple backend services into a single unified mashup API.'
      ],
      standards: ['W3C Shadow DOM v1', 'PCI-DSS (Payment Card Industry Data Security Standard)']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'javascript',
      explanation: 'Secure cross-origin communication between a host page and an embedded widget using postMessage:',
      code: `// Host Page Script: Embedding an isolated third-party analytics widget
const widgetIframe = document.getElementById('analytics-widget');

// 1. Securely send configuration data to the sandboxed widget iframe
widgetIframe.addEventListener('load', () => {
  const targetOrigin = 'https://widgets.analytics-provider.com';
  widgetIframe.contentWindow.postMessage(
    { type: 'INITIALIZE_WIDGET', dashboardId: 'dash-9872', theme: 'dark' },
    targetOrigin // NEVER use '*' in production!
  );
});

// 2. Safely listen for events emitted by the widget
window.addEventListener('message', (event) => {
  // CRITICAL: Always verify the origin of incoming messages!
  if (event.origin !== 'https://widgets.analytics-provider.com') {
    return; // Discard suspicious message
  }

  if (event.data.type === 'WIDGET_RESIZE') {
    widgetIframe.style.height = event.data.height + 'px';
  }
});`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Using `postMessage(data, "*")` with a wildcard target origin.',
          reality: 'Wildcard target origins broadcast sensitive data to whatever domain happens to be loaded inside the iframe at that millisecond. If the iframe redirects to an attacker, your session tokens and user data are compromised.'
        },
        {
          mistake: 'Directly embedding third-party script tags (`<script src="vendor.js">`) without Subresource Integrity (SRI).',
          reality: 'If the vendor\'s CDN is breached, attackers can inject malicious keyloggers directly into your host DOM. Always use SRI hashes (`integrity="sha384-..."`) or sandbox inside iframes.'
        }
      ]
    }
  },

  '4.7-information-systems': {
    id: '4.7-information-systems',
    chapterId: 'chapter-4',
    chapterNumber: 4,
    chapterTitle: 'Web 2.0, Social Web, Semantic Web & Information Systems',
    code: '4.7',
    title: 'Web-Based Information Systems: Multi-Tier Architecture',
    subtitle: 'Presentation, application, and persistence separation, database pooling, and horizontal scaling',
    difficulty: 'Intermediate',
    readTime: '18 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'A Web-Based Information System (WBIS) is an enterprise software platform that processes, stores, and disseminates organizational data over web protocols. Robust information systems are built on 3-Tier and N-Tier architectures to enforce clean separation of concerns, security isolation, and independent horizontal scalability.',
      analogy: 'Imagine a fine-dining restaurant: Tier 1 (Presentation) is the elegant dining room where waiters greet guests, take orders, and present beautifully plated food. Tier 2 (Application / Business Logic) is the bustling kitchen where chefs follow recipes, verify dietary allergies, and coordinate prep timing. Tier 3 (Data / Persistence) is the locked basement refrigeration vault where ingredients are cataloged and preserved. Waiters never cook food in the basement, and butchers never take table reservations.',
      keyPoints: [
        'Presentation Tier (Client/Web): Responsible for user interface rendering, input validation, and user experience.',
        'Application Tier (Business Logic): Enforces workflow rules, calculations, authorization, and transactional consistency.',
        'Data Tier (Persistence): Relational databases, NoSQL stores, and distributed caches managing durable storage and ACID transactions.',
        'Horizontal Scaling: Adding more identical compute nodes behind a load balancer rather than buying an exponentially more expensive single mainframe (vertical scaling).'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'Modern enterprise WBIS implementations run stateless containerized application instances behind Layer 7 reverse proxies and manage state via managed database clusters.',
      diagram: `
+-------------------------------------------------------------------------+
|                  N-Tier Enterprise Architecture Topology                |
+-------------------------------------------------------------------------+
[Global Web Clients] (Mobile, Desktop Browsers)
        |
        v  HTTPS (TLS 1.3)
[Cloudflare CDN & Edge DDoS Shield]
        |
        v
[Layer 7 Load Balancer] (NGINX / AWS ALB)
        |
   +----+-------------------------+-------------------------+
   |                              |                         |
[App Container 1]          [App Container 2]         [App Container 3]
(Stateless Business Logic) (Stateless Business Logic) (Stateless Business Logic)
   |                              |                         |
   +----+-------------------------+-------------------------+
        |  Database Connection Pool (PgBouncer)
        v
+-------------------------------+     +-------------------------------+
| Primary Database (Writes)     |     | Redis In-Memory Cache Cluster |
| PostgreSQL / Aurora           |     | (Session store & Query cache) |
+-------------------------------+     +-------------------------------+
        | Streaming Replication
        v
[Read Replicas 1 & 2] (Read Queries)
`,
      specifications: [
        'Stateless Server Architecture: Application pods store zero session state in local RAM/disk.',
        'ACID Properties: Atomicity, Consistency, Isolation, Durability in enterprise database transactions.',
        'Connection Pooling: Reusing pre-warmed TCP sockets between app servers and database servers.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Amazon.com & Salesforce',
      scenario: 'Handling Millions of Concurrent Transactions during Prime Day',
      howItWorks: 'During Amazon Prime Day, the Presentation Tier (web and mobile apps) receives tens of millions of concurrent product view requests. Caches (Amazon CloudFront and ElastiCache) absorb 98% of read traffic. When orders are submitted, stateless checkout microservices validate payment logic and publish orders into Amazon SQS queues, preventing relational database contention while backend fulfillment pipelines process inventory.',
      impact: 'Achieves high operational availability (99.999% "five nines") without database locks crashing the entire storefront during peak holiday traffic surges.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Enterprise architectures utilize orchestrators, reverse proxies, and connection multiplexers to sustain massive traffic volumes.',
      tools: [
        'Kubernetes (K8s): Automatically scaling application container pods up and down based on CPU/memory usage metrics.',
        'PgBouncer / AWS RDS Proxy: Managing connection pooling to prevent PostgreSQL connection exhaustion.',
        'NGINX / HAProxy: High-concurrency reverse proxies handling SSL termination and round-robin load distribution.'
      ],
      standards: ['The Twelve-Factor App Methodology (12factor.net)', 'OpenTelemetry (Distributed tracing)']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'sql',
      explanation: 'Executing a safe multi-step business logic transaction in SQL with isolation:',
      code: `-- Enterprise Financial Transfer in Application Persistence Tier
BEGIN TRANSACTION;

-- 1. Deduct funds from source account (verifying balance with check constraint)
UPDATE bank_accounts
SET balance = balance - 500.00,
    updated_at = NOW()
WHERE account_id = 'acc_user_101' AND balance >= 500.00;

-- 2. Verify deduction succeeded (1 row affected)
-- If balance was insufficient, application aborts and calls ROLLBACK;

-- 3. Credit destination account
UPDATE bank_accounts
SET balance = balance + 500.00,
    updated_at = NOW()
WHERE account_id = 'acc_merchant_502';

-- 4. Create immutable audit ledger record
INSERT INTO transaction_audit_ledger (transfer_id, source_acc, dest_acc, amount, created_at)
VALUES (gen_random_uuid(), 'acc_user_101', 'acc_merchant_502', 500.00, NOW());

-- 5. Atomically commit all changes to durable storage
COMMIT;`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Storing user session state in application server local memory (`express-session` MemoryStore).',
          reality: 'When your load balancer spins up a second server instance or restarts a container, subsequent requests hit a different node and the user is logged out abruptly. Store session state in external distributed caches like Redis.'
        },
        {
          mistake: 'Placing heavy business logic calculations inside database stored procedures.',
          reality: 'Application compute nodes are cheap, stateless, and scale horizontally in seconds. Relational databases are stateful and expensive to scale horizontally. Keep business logic in the application tier and use the database solely for relational storage and integrity.'
        }
      ]
    }
  },

  '4.8-search-engines': {
    id: '4.8-search-engines',
    chapterId: 'chapter-4',
    chapterNumber: 4,
    chapterTitle: 'Web 2.0, Social Web, Semantic Web & Information Systems',
    code: '4.8',
    title: 'Search Engine Engineering: Crawlers, Inverted Index & PageRank',
    subtitle: 'Polite crawling, robots.txt, TF-IDF scoring, inverted indexes, and Google PageRank algorithms',
    difficulty: 'Advanced',
    readTime: '20 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'Web search engines are distributed information retrieval systems that index the hyperlinked web. Their architecture consists of three fundamental components: distributed web spiders (Crawlers) that discover documents, an Inverted Index that maps terms to document locations, and Ranking Algorithms (such as PageRank and BM25) that score document relevance.',
      analogy: 'Imagine trying to find every book in the world that mentions "quantum entanglement". You could walk through millions of shelves reading every single page from cover to cover; it would take centuries (a linear scan). An Inverted Index is like the index at the back of every book, aggregated for the entire library: you turn to "quantum entanglement", and it lists: [Book #42: page 10, Book #99: page 502]. PageRank then acts as a worldwide scholarly peer review: a book cited by 10,000 Nobel laureates ranks higher than a self-published pamphlet cited by nobody.',
      keyPoints: [
        'Web Crawling: Spiders (e.g. Googlebot) traversing URLs in a frontier queue, respecting `robots.txt` and rate limits.',
        'Inverted Index: Core data structure mapping vocabulary terms (tokens) to posting lists of document IDs and positions.',
        'TF-IDF & BM25: Statistical scoring measuring how frequently a term appears in a document relative to its rarity across the entire web.',
        'PageRank (Brin & Page, 1998): Algorithmic ranking treating hyperlinked references as academic citations in a probability transition matrix.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'Search engines process petabytes of crawled text through document processing pipelines to populate distributed inverted index shards.',
      diagram: `
+-------------------------------------------------------------------------+
|                  Modern Search Engine Architecture Pipeline             |
+-------------------------------------------------------------------------+
[URL Frontier Queue] ---> [Distributed Crawler Spiders (Googlebot)]
                                    |
                           [HTML Parser / Tokenizer]
                           (Stemming, Stop-word removal)
                                    |
                           [Document Analysis & PageRank]
                                    |
                      [Distributed Inverted Index Shards]
                                    |
User Query: "distributed databases" |
       |                            v
[Query Parser] -----------> [Index Searcher (BM25 + PageRank)]
                                    |
                                    v
                         [Ranked SERP Response]
`,
      specifications: [
        'Robots Exclusion Standard (RFC 9309): Standardizing robots.txt crawling directives.',
        'Okapi BM25 Ranking Function: Non-linear term saturation algorithm used by Elasticsearch and Lucene.',
        'PageRank Equation: $PR(A) = \\frac{1-d}{N} + d \\sum_{i \\in M(A)} \\frac{PR(T_i)}{C(T_i)}$ where $d \\approx 0.85$ is the damping factor.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Google Search & Elasticsearch',
      scenario: 'Serving 8.5+ Billion Searches Daily in under 200 Milliseconds',
      howItWorks: 'Google maintains an inverted index spanning hundreds of billions of web pages across tens of thousands of distributed server clusters. When you press Enter, your query is sent to a Query Understanding engine that expands synonyms, fans out to hundreds of inverted index leaf servers in parallel, merges posting lists in memory, applies over 200 ranking signals (BM25, PageRank, Core Web Vitals, user location), and returns the results before your next blink.',
      impact: 'Transformed the chaotic, unstructured web into the primary gateway for human knowledge, research, and commerce.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Modern enterprise search is built on Apache Lucene and distributed search engines.',
      tools: [
        'Apache Lucene: High-performance Java search library providing the foundation for modern inverted indexes.',
        'Elasticsearch / OpenSearch: Distributed, JSON-based search and analytics engine with automatic sharding and replication.',
        'Apache Nutch / Scrapy: Extensible distributed web crawling frameworks.'
      ],
      standards: ['RFC 9309 (Robots Exclusion Protocol)', 'Sitemaps XML Protocol (sitemaps.org)']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'javascript',
      explanation: 'Building an in-memory Inverted Index with tokenization and search lookup:',
      code: `// Minimal Inverted Index implementation in JavaScript
class InvertedIndex {
  constructor() {
    this.index = new Map(); // term -> Set of document IDs
    this.documents = new Map(); // docId -> original text
  }

  // Tokenize and normalize input text into clean search terms
  tokenize(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\\s]/g, '')
      .split(/\\s+/)
      .filter(token => token.length > 2); // Discard trivial stop-words
  }

  // Add document to index
  addDocument(id, text) {
    this.documents.set(id, text);
    const tokens = this.tokenize(text);
    for (const term of tokens) {
      if (!this.index.has(term)) {
        this.index.set(term, new Set());
      }
      this.index.get(term).add(id);
    }
  }

  // Search query across inverted posting lists
  search(query) {
    const queryTokens = this.tokenize(query);
    if (queryTokens.length === 0) return [];

    // Find intersection of documents containing all query tokens (AND search)
    let matchingDocIds = null;
    for (const term of queryTokens) {
      const docSet = this.index.get(term) || new Set();
      if (!matchingDocIds) {
        matchingDocIds = new Set(docSet);
      } else {
        matchingDocIds = new Set([...matchingDocIds].filter(id => docSet.has(id)));
      }
    }

    return Array.from(matchingDocIds || []).map(id => ({
      id,
      text: this.documents.get(id)
    }));
  }
}

// Example usage
const engine = new InvertedIndex();
engine.addDocument(1, "Distributed systems require reliable network protocols.");
engine.addDocument(2, "Network protocols like HTTP and TCP guarantee packet delivery.");
console.log(engine.search("network protocols")); // Matches Doc 1 and Doc 2`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Ignoring crawl-delay and hammering target origin servers with hundreds of concurrent crawler threads.',
          reality: 'Aggressive spiders act like DDoS attacks, exhausting target server sockets and triggering instant IP bans by Cloudflare or AWS WAF. Always respect `robots.txt` crawl delay directives and back off exponentially on HTTP 429 or 503 responses.'
        },
        {
          mistake: 'Using SQL `LIKE %query%` queries in place of an inverted index on growing production datasets.',
          reality: 'A SQL `LIKE %term%` forces a complete table scan on every search, reading millions of disk blocks. As the table grows, query times skyrocket from milliseconds to minutes. Use an inverted index (PostgreSQL tsvector or Elasticsearch).'
        }
      ]
    }
  },

  '4.9-recommender-systems': {
    id: '4.9-recommender-systems',
    chapterId: 'chapter-4',
    chapterNumber: 4,
    chapterTitle: 'Web 2.0, Social Web, Semantic Web & Information Systems',
    code: '4.9',
    title: 'Recommender Systems: Collaborative vs. Content-Based Filtering',
    subtitle: 'User-user / item-item matrix factorization, vector cosine similarity, and cold-start mitigations',
    difficulty: 'Advanced',
    readTime: '18 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'Recommender systems are algorithmic information filtering engines that predict a user\'s preference for items (movies, products, articles, songs). The two foundational strategies are Collaborative Filtering (recommending based on the behavior of similar users) and Content-Based Filtering (recommending based on the descriptive attributes of the items themselves).',
      analogy: 'Content-Based Filtering is like ordering at a restaurant where the chef knows you love garlic, mushrooms, and olive oil: if a new pasta arrives with garlic and mushrooms, the chef immediately recommends it because its ingredient tags match your taste profile. Collaborative Filtering is like having 10,000 friends: the system finds 5 people whose past movie ratings match yours with 98% correlation. When those 5 people all rave about an obscure indie thriller you\'ve never heard of, the system recommends it to you, confident you\'ll love it too.',
      keyPoints: [
        'Content-Based Filtering: Uses item metadata (genres, actors, authors, text vectors) to recommend items similar to what the user previously liked.',
        'Collaborative Filtering (User-Based & Item-Based): Predicts ratings using the crowdsourced interaction matrix of all users across all items.',
        'Matrix Factorization (SVD): Decomposing sparse user-item interaction matrices into dense low-dimensional latent factor embeddings.',
        'Cold-Start Problem: The fundamental challenge of recommending to a brand new user with no history or promoting a brand new item with zero ratings.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'Modern enterprise recommenders use a two-stage funnel: fast Candidate Generation (retrieving top 1,000 candidates via vector search) followed by heavy Deep Learning Ranking.',
      diagram: `
+-------------------------------------------------------------------------+
|                    Two-Stage Recommender Funnel Architecture            |
+-------------------------------------------------------------------------+
[Entire Catalog: 50,000,000 Items]
                 |
                 v  Stage 1: Candidate Generation (Vector ANN Search)
   [Candidate Pool: Top 1,000 Candidates] (Latency < 15ms)
                 |
                 v  Stage 2: Heavy Ranking (Deep Neural Net / GBDT)
   [Scored & Re-ranked: Top 100 Items] (Scores click probability)
                 |
                 v  Stage 3: Diversity & Business Filtering
   [Final Personalized Carousel: Top 10 Items to Client UI]
`,
      specifications: [
        'Cosine Similarity Metric: $\\cos(\\theta) = \\frac{\\mathbf{A} \\cdot \\mathbf{B}}{\\|\\mathbf{A}\\| \\|\\mathbf{B}\\|}$ measuring vector directional alignment.',
        'Approximate Nearest Neighbor (ANN) Indexing: HNSW (Hierarchical Navigable Small World) graphs.',
        'Vector Embedding Dimensions: 128 to 1536 floating-point values per entity.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Netflix & Spotify',
      scenario: 'Personalized Homepage Recommendations Driving 80% of Watch Time',
      howItWorks: 'Netflix does not display one static homepage. Over 80% of all hours watched on Netflix are driven directly by its personalized recommendation algorithms. High-dimensional user embeddings capture nuanced taste profiles (e.g. "dark Nordic crime dramas on Friday nights"), while auto-generated thumbnail artwork is dynamically selected based on which aesthetic style a specific user is statistically most likely to click.',
      impact: 'Reduces subscriber churn by billions of dollars annually by eliminating the paralysis of choice for over 260 million global accounts.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Modern recommender engineering is powered by vector databases and real-time feature stores.',
      tools: [
        'Pinecone / Milvus / Qdrant: Distributed vector databases executing billion-scale nearest neighbor queries in milliseconds.',
        'Feast / Tecton: Feature stores serving real-time user context (current location, last 5 clicked items) to scoring models.',
        'Implicit / Surprise: Python libraries for collaborative filtering using Alternating Least Squares (ALS).'
      ],
      standards: ['HNSW Vector Graph Indexing', 'ONNX (Open Neural Network Exchange)']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'javascript',
      explanation: 'Calculating vector cosine similarity for item-item content recommendation:',
      code: `// Cosine similarity for content-based vector recommendations
function cosineSimilarity(vecA, vecB) {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }

  const denominator = Math.sqrt(normA) * Math.sqrt(normB);
  return denominator === 0 ? 0 : dotProduct / denominator;
}

// Example item genre embeddings [SciFi, Action, Romance, Comedy, Thriller]
const interstellarEmbedding = [0.95, 0.40, 0.10, 0.05, 0.85];
const arrivalEmbedding      = [0.90, 0.20, 0.15, 0.05, 0.80];
const theNotebookEmbedding  = [0.00, 0.10, 0.98, 0.40, 0.05];

const similarityArrival = cosineSimilarity(interstellarEmbedding, arrivalEmbedding);
const similarityNotebook = cosineSimilarity(interstellarEmbedding, theNotebookEmbedding);

console.log(\`Similarity to Arrival: \${similarityArrival.toFixed(4)}\`);      // ~0.99 (High match)
console.log(\`Similarity to The Notebook: \${similarityNotebook.toFixed(4)}\`); // ~0.12 (Low match)`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Creating a "Filter Bubble" by optimizing purely for historical click-through rate (CTR).',
          reality: 'If a recommender solely recommends what the user clicked previously, it pigeonholes users into narrow echo chambers. Modern systems deliberately inject exploration slots (epsilon-greedy or bandit algorithms) to uncover new interests.'
        },
        {
          mistake: 'Failing to handle matrix sparsity in collaborative filtering.',
          reality: 'In a catalog with 10 million items, an average user rates perhaps 50 items (99.999% sparse matrix). Computing raw user-user Pearson correlations without matrix factorization (SVD/ALS) results in memory blowouts and inaccurate predictions.'
        }
      ]
    }
  },

  '4.10-blockchain-edge': {
    id: '4.10-blockchain-edge',
    chapterId: 'chapter-4',
    chapterNumber: 4,
    chapterTitle: 'Web 2.0, Social Web, Semantic Web & Information Systems',
    code: '4.10',
    title: 'Enterprise Distributed Systems: Blockchain Benefits & Edge CDNs',
    subtitle: 'Cryptographic hash chains, consensus verification, Edge PoP caching, and origin offloading',
    difficulty: 'Intermediate',
    readTime: '18 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'Enterprise web systems scale globally by combining two decentralized computing paradigms: Content Delivery Networks (CDNs) at the edge for sub-millisecond static content delivery, and Cryptographic Distributed Ledgers (Blockchains) for decentralized, tamper-proof state verification without a centralized trusted third party.',
      analogy: 'Imagine a global bank. If every customer in Sydney, Tokyo, and London had to fly to a single vault in New York every time they needed a \$1 bill, the vault would collapse under lines (centralized origin bottleneck). An Edge CDN is like placing local ATM kiosks in every street corner of Sydney and Tokyo, serving cached cash instantly. A Blockchain is like a public ledger book in the town square: every transaction is written in permanent indelible ink, verified by all town elders simultaneously, making it impossible for any corrupt bank manager to sneak in at midnight and rewrite past balances.',
      keyPoints: [
        'Edge Computing & CDNs: Deploying reverse proxy servers at hundreds of Point of Presence (PoP) locations near end users.',
        'Origin Offloading: Caching 90%+ of static assets (images, JavaScript, CSS) at edge nodes, shielding origin databases from traffic spikes.',
        'Blockchain Benefits: Immutability, cryptographic provenance, trustless consensus, and zero single points of failure.',
        'Smart Contracts: Self-executing code stored on distributed ledgers that enforce agreements automatically when conditions are met.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'Edge CDNs terminate TLS and execute compute functions millimeters away from users using Anycast BGP routing.',
      diagram: `
+-------------------------------------------------------------------------+
|                  Anycast BGP Edge Routing & CDN Architecture            |
+-------------------------------------------------------------------------+
User in Frankfurt (DNS: 198.51.100.1) ---> [Edge PoP Frankfurt] (Cache Hit: 2ms)
User in Tokyo (DNS: 198.51.100.1)     ---> [Edge PoP Tokyo]     (Cache Hit: 3ms)
User in Chicago (DNS: 198.51.100.1)   ---> [Edge PoP Chicago]   (Cache Miss)
                                                  |
                                                  v  Origin Fetch (Encrypted Backbone)
                                      [Origin Server: AWS US-East-1]
`,
      specifications: [
        'Anycast BGP Routing: Advertising a single IP address from hundreds of data centers worldwide.',
        'HTTP Cache-Control Headers: `s-maxage`, `stale-while-revalidate`, `immutable`.',
        'Cryptographic Primitives: SHA-256 hash chains, Elliptic Curve Digital Signatures (ECDSA).'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Cloudflare Workers & Varnish Enterprise',
      scenario: 'Mitigating a 3.8 Terabit/sec DDoS Attack at the Global Edge',
      howItWorks: 'When malicious botnets launch historic volumetric DDoS attacks, traffic does not reach customer origin servers. Cloudflare\'s global edge network (over 300 cities) absorbs the petabits of attack traffic simultaneously across its Anycast PoPs, running eBPF edge packet inspection rules to filter malicious SYN floods while legitimate user requests are served from edge cache without disruption.',
      impact: 'Eliminates origin downtime, reduces server egress bandwidth costs by 80%, and provides sub-20ms web latency worldwide.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Distributed infrastructure engineers configure edge proxies and inspect cryptographic state using standard enterprise tooling.',
      tools: [
        'Cloudflare / Fastly / Akamai: Global edge compute platforms running V8 isolates and Varnish edge proxies.',
        'Hardhat / Foundry: Development and testing frameworks for Ethereum and EVM-compatible distributed state contracts.',
        'V8 Isolates: Ultra-lightweight JavaScript execution sandbox enabling sub-1ms cold starts at the edge (replacing heavy Node Docker containers).'
      ],
      standards: ['RFC 7234 (Hypertext Transfer Protocol Caching)', 'EVM (Ethereum Virtual Machine Bytecode)']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'javascript',
      explanation: 'Deploying an Edge Worker that inspects geolocation, modifies headers, and caches responses:',
      code: `// Cloudflare / V8 Edge Worker script
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. Edge Geolocation: Inspect client country without hitting origin
    const userCountry = request.cf?.country || 'US';

    // 2. Check edge cache first
    const cache = caches.default;
    let response = await cache.match(request);

    if (!response) {
      // 3. Cache Miss: Fetch from origin server
      response = await fetch(request);

      // Clone response and attach production caching directives
      response = new Response(response.body, response);
      response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=60');
      response.headers.set('X-Edge-Served-By', userCountry + '-PoP');

      // Store in edge cache asynchronously
      ctx.waitUntil(cache.put(request, response.clone()));
    }

    return response;
  }
};`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Using blockchain ledgers for high-volume relational data storage (e.g. user profiles, images).',
          reality: 'Storing 1 Megabyte of data on a public blockchain ledger like Ethereum costs hundreds of dollars in gas and permanently bloats every validator node. Use blockchains strictly for state commitments, ownership proofs, and cryptographic hashes, storing bulk assets in decentralized storage (IPFS/Arweave) or traditional S3.'
        },
        {
          mistake: 'Missing `Vary: Accept-Encoding` or `Vary: Cookie` headers when caching personalized content at the edge.',
          reality: 'If an edge cache caches a response containing private user account details without proper `Vary` or `Cache-Control: private` headers, subsequent visitors will receive the cached personal data of another user.'
        }
      ]
    }
  },

  '4.11-dark-mode-engineering': {
    id: '4.11-dark-mode-engineering',
    chapterId: 'chapter-4',
    chapterNumber: 4,
    chapterTitle: 'Web 2.0, Social Web, Semantic Web & Information Systems',
    code: '4.11',
    title: 'Modern Dark Mode Engineering & Contrast Standards',
    subtitle: 'CSS custom properties, prefers-color-scheme, WCAG contrast ratios, and FOUC prevention',
    difficulty: 'Fundamental',
    readTime: '14 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'Dark Mode engineering is the rigorous architectural implementation of theme switching in web applications. Beyond aesthetic preference, production dark mode systems must satisfy WCAG 2.1 AA/AAA accessibility contrast standards, prevent Flash of Unstyled Content (FOUC), and support automatic synchronization with operating system preferences.',
      analogy: 'Imagine entering a dark cinema theater. If someone abruptly flashes a 1,000-lumen halogen flashlight directly into your eyes for half a second before turning it down, you suffer acute optical fatigue and disorientation. That sudden blinding flash is what happens when a website loads in stark pure white before JavaScript executes and turns the background dark (FOUC). A proper dark mode implementation dims the lights before you even step into the room.',
      keyPoints: [
        'CSS Custom Properties (Variables): Centralizing color tokens to switch palettes by toggling a single class on `<html>`.',
        'CSS Media Query `prefers-color-scheme`: Detecting OS-level dark or light mode automatically without user input.',
        'WCAG Contrast Requirements: Minimum 4.5:1 contrast ratio for normal body text and 3:1 for large headlines and UI boundaries.',
        'FOUC Prevention: Executing a synchronous, blocking inline script in `<head>` to set the theme before browser first paint.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'Production theming systems separate semantic token names (e.g. `--bg-surface`, `--text-primary`) from primitive raw hex values.',
      diagram: `
+-------------------------------------------------------------------------+
|                  Dark Mode Token Architecture & Pipeline                |
+-------------------------------------------------------------------------+
User loads URL
      |
[HTML Parsing begins]
      |
[Inline Head Script executes synchronously]
  |-- 1. Read localStorage('theme')
  |-- 2. Fallback to window.matchMedia('(prefers-color-scheme: dark)')
  |-- 3. Add 'dark' class to <html class="dark"> (ZERO FOUC)
      |
[First Paint Rendered with correct tokens]
      |
CSS Custom Properties Cascade:
:root       { --bg-primary: #ffffff; --text-primary: #111827; }
html.dark   { --bg-primary: #0f0f11; --text-primary: #f3f4f6; }
`
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'GitHub & Tailwind CSS',
      scenario: 'Flawless Theme Switching Across 100 Million Developer Accounts',
      howItWorks: 'GitHub provides "System Default", "Light Default", and "Dark High Contrast" options. It encodes color tokens into CSS custom properties mapped to color primitives. To prevent FOUC, GitHub renders a tiny inline script at the very top of `<head>` that reads the user\'s cookie or localStorage and applies `data-color-mode="dark"` before the DOM tree begins painting.',
      impact: 'Reduces OLED screen power consumption by up to 60%, relieves eye strain for developers working in low-light environments, and guarantees WCAG AAA accessibility conformance.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Modern frontend design systems utilize token management tools and accessibility contrast analyzers.',
      tools: [
        'Tailwind CSS: Using the `darkMode: "class"` configuration for clean utility styling (`dark:bg-doc-dark`).',
        'WebAIM Contrast Checker: Verifying that text-to-background luminance matches WCAG guidelines.',
        'Style Dictionary (Amazon): Generating cross-platform design tokens (CSS, iOS, Android) from single JSON definitions.'
      ],
      standards: ['W3C WCAG 2.1 (Web Content Accessibility Guidelines)', 'CSS Color Module Level 4']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'html',
      explanation: 'Bulletproof Dark Mode setup preventing FOUC and syncing with localStorage and OS preference:',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Production Dark Mode</title>

  <!-- 1. CRITICAL: Inline script in <head> to prevent FOUC -->
  <script>
    (function() {
      const storedTheme = localStorage.getItem('theme');
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (storedTheme === 'dark' || (!storedTheme && systemDark)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    })();
  </script>

  <style>
    /* 2. Define semantic design tokens */
    :root {
      --bg-canvas: #ffffff;
      --text-main: #18181b;
      --border-subtle: #e4e4e7;
    }
    html.dark {
      --bg-canvas: #09090b;
      --text-main: #fafafa;
      --border-subtle: #27272a;
    }
    body {
      background-color: var(--bg-canvas);
      color: var(--text-main);
      transition: background-color 0.2s ease, color 0.2s ease;
      font-family: system-ui, sans-serif;
    }
  </style>
</head>
<body>
  <h1>Production Theming Architecture</h1>
  <button id="theme-btn">Toggle Theme</button>

  <script>
    const btn = document.getElementById('theme-btn');
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  </script>
</body>
</html>`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Using pure `#000000` pitch black backgrounds with pure `#ffffff` stark white text.',
          reality: 'Maximum contrast (21:1) causes "halation" or glowing text blur against pure black for people with astigmatism. Industry-leading dark themes (Systematic, Linear, GitHub) use rich charcoal grays (`#0f0f11` or `#121212`) with off-white text (`#e4e4e7`) for comfortable reading.'
        },
        {
          mistake: 'Placing theme detection logic inside `useEffect()` or `DOMContentLoaded`.',
          reality: 'By the time `DOMContentLoaded` or React components mount, the browser has already painted the white body background. Users suffer an irritating white flash every time they navigate to a new page. Theme checking MUST be a synchronous inline script in `<head>`.'
        }
      ]
    }
  }
};
