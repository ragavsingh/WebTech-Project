/**
 * Unit 2: HTML Fundamentals, DHTML, DOM & XML Architecture
 * Fully populated with comprehensive explanations, step-by-step workflows,
 * practical code examples, common mistakes, challenges, and quizzes.
 */

export const UNIT_2_DEFINITION = {
  id: "unit-2",
  number: 2,
  title: "Unit 2: HTML Fundamentals, DHTML, DOM & XML Architecture",
  description: "Hands-on laboratory mastering HTML lists, tables, images, forms, frames, dynamic HTML with JavaScript, CSS DOCTYPE presentation, DOM tree manipulation, XML schemas (XSD/DTD), XSL transformations, and SAX/DOM parser models.",
  iconName: "FileCode",
  accentColor: "blue",
  topicCount: 11,
  estimatedHours: 6.5,
  topics: [
    { id: "html-lists-tables-images", title: "HTML Fundamentals: Lists, Tables & Images", difficulty: "Beginner", duration: "16 min", isImplemented: true },
    { id: "html-forms-frames", title: "HTML Forms & Frame Architectures", difficulty: "Beginner", duration: "18 min", isImplemented: true },
    { id: "dhtml-javascript", title: "Dynamic HTML (DHTML) with JavaScript", difficulty: "Intermediate", duration: "18 min", isImplemented: true },
    { id: "css-doctype-presentation", title: "CSS Document Type Definition & Presentation", difficulty: "Intermediate", duration: "16 min", isImplemented: true },
    { id: "object-models-dom", title: "Object Models & Document Object Model (DOM)", difficulty: "Beginner", duration: "20 min", isImplemented: true },
    { id: "xml-fundamentals-schemas", title: "XML Fundamentals & Hierarchy", difficulty: "Beginner", duration: "16 min", isImplemented: true },
    { id: "xml-schema-validation", title: "XML Schemas: XSD vs. DTD Validation", difficulty: "Intermediate", duration: "18 min", isImplemented: true },
    { id: "presentation-xsl", title: "XML Presentation & XSL (XSLT Stylesheets)", difficulty: "Intermediate", duration: "20 min", isImplemented: true },
    { id: "xml-processors-parsers", title: "XML Processors: Architecture & Pipeline", difficulty: "Intermediate", duration: "18 min", isImplemented: true },
    { id: "dom-vs-sax", title: "XML Processing Models: DOM vs. SAX", difficulty: "Intermediate", duration: "18 min", isImplemented: true },
    { id: "unit2-capstone-lab", title: "Capstone Lab: Build a Dynamic Webpage", difficulty: "Intermediate", duration: "25 min", isImplemented: true }
  ]
};

export const UNIT_2_TOPICS = {
  // ==========================================
  // TOPIC 1: HTML LISTS, TABLES & IMAGES
  // ==========================================
  "html-lists-tables-images": {
    id: "html-lists-tables-images",
    unitId: "unit-2",
    unitNumber: 2,
    unitTitle: "Unit 2: HTML Fundamentals, DHTML, DOM & XML Architecture",
    title: "HTML Fundamentals: Lists, Tables & Images",
    subtitle: "Mastering ordered, unordered, and description lists, multi-span tabular data, and responsive graphic embeds",
    difficulty: "Beginner",
    estimatedMinutes: 16,
    badge: "HTML Elements",

    definition: "HTML provides specialized elements for structuring content: Lists (<ul>, <ol>, <dl>) group related items into hierarchical or sequential order; Tables (<table>, <tr>, <th>, <td>) arrange multidimensional data into rows and columns with span attributes; and Images (<img>, <picture>, <figure>) embed visual assets with accessible fallback text and responsive resolution sets.",

    whyItMatters: "Lists, tables, and images form the foundational triad of web content. Screen readers rely on semantic list structures to announce item counts; tabular data accessibility depends on proper header scopes; and responsive images ensure rapid Largest Contentful Paint (LCP) across mobile devices and high-DPI displays.",

    explanation: [
      {
        heading: "Beginner Explanation: Organizing a Restaurant Menu",
        content: "Imagine designing a printed restaurant menu:\n1. Appetizers & Drinks: You list options with bullet points or numbers (Unordered <ul> and Ordered <ol> lists).\n2. Culinary Terms: Below an exotic dish, you provide a term and its definition (Description list <dl> with <dt> and <dd>).\n3. Pricing Grid: For combos and sizes (Small, Medium, Large), you draw a neat grid where columns align prices (<table> with <th> and <td>).\n4. Dish Photographs: Alongside the menu items, you print high-res photos with captions (<img> and <figure>/<figcaption>)."
      },
      {
        heading: "List Architectures: Unordered, Ordered & Description Lists",
        content: "HTML supports three distinct list types:\n- Unordered Lists (<ul>): Used when item order is non-sequential (bullet points). Supports nested lists for multi-level navigation trees.\n- Ordered Lists (<ol>): Used when sequence matters (e.g. recipes, algorithms). Configurable via `type=\"1|a|A|i|I\"`, `start=\"N\"`, and `reversed` attributes.\n- Description Lists (<dl>): Pairs terms (<dt>) with one or more descriptions (<dd>). Ideal for glossaries, metadata key-value pairs, and product specifications."
      },
      {
        heading: "Tabular Data Architecture & Cell Spanning",
        content: "Tables must only be used for tabular data, never for general page layouts. Accessible tables require:\n- Structural sections: `<thead>`, `<tbody>`, and `<tfoot>` for logical segmentation.\n- Headers: `<th>` cells tagged with `scope=\"col\"` or `scope=\"row\"` for assistive tech.\n- Spanning: `colspan=\"N\"` merges cells horizontally across columns; `rowspan=\"N\"` merges cells vertically across rows.\n- Captions: `<caption>` provides a human-readable title announced to screen readers."
      },
      {
        heading: "Accessible & Responsive Graphic Embeds",
        content: "The `<img>` tag is a void element embedding raster or vector graphics:\n- `src`: Path or URL to asset.\n- `alt`: Mandatory descriptive text for vision-impaired users and search engine indexing.\n- `loading=\"lazy\"`: Defers off-screen image fetching until user scrolls nearby.\n- `srcset` and `sizes`: Serves optimal image resolutions based on viewport width and device pixel ratio.\n- `<figure>` and `<figcaption>`: Semantically binds an image with its editorial caption."
      }
    ],

    howItWorks: [
      { step: 1, title: "Tag Tokenization", subtitle: "Lexical Scan", description: "Browser parses <ul>, <table>, or <img> opening and closing tokens." },
      { step: 2, title: "Box Model Computation", subtitle: "Layout Tree", description: "List markers (bullets/numbers) or tabular layout grid cells are allocated coordinates." },
      { step: 3, title: "Asset Resolution", subtitle: "Network Fetch", description: "Browser decodes image headers to determine intrinsic aspect ratio and download payload." },
      { step: 4, title: "Painting & Compositing", subtitle: "GPU Raster", description: "Pixels are painted onto viewport layers with correct tabular borders and image pixels." }
    ],

    simulationType: "html-elements",

    practicalExample: {
      scenario: "Flight Boarding Pass Data Table & Baggage List",
      description: "An accessible multi-span flight ticket with passenger details, baggage rules list, and airline carrier logo.",
      records: [
        { type: "<table>", host: "colspan='2'", value: "Passenger: Jane Doe", ttl: "Rowspan", purpose: "Merges name cell across flight number and seat columns" },
        { type: "<ul>", host: "Carry-On Bag", value: "Max 10 kg / 22 lbs", ttl: "List", purpose: "Unordered bullet points specifying dimension rules" },
        { type: "<img>", host: "logo.svg", value: "alt='AeroWings Logo'", ttl: "Graphic", purpose: "High-contrast SVG vector logo with accessibility text" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Using <table> tags to arrange webpage columns, sidebars, and layouts",
        reality: "Tables should NEVER be used for page layouts. Layout tables destroy screen reader navigation and break responsive mobile wrapping. Use CSS Flexbox or CSS Grid instead!"
      },
      {
        misconception: "Leaving the alt attribute empty or omitting it completely (<img src='dog.jpg'>)",
        reality: "Omitting `alt` causes screen readers to read the raw file path aloud. If the image is purely decorative, use `alt=\"\"` with `aria-hidden=\"true\"`."
      }
    ],

    relatedTopics: [
      { id: "html-forms-frames", title: "HTML Forms & Frames", unitId: "unit-2" },
      { id: "object-models-dom", title: "Document Object Model (DOM)", unitId: "unit-2" }
    ],

    challenge: {
      id: "challenge-html-01",
      title: "Diagnose the Broken Table Layout",
      difficulty: "Beginner",
      badge: "HTML Tables",
      description: "A developer added `colspan=\"3\"` to a table header cell, but the table only contains 2 columns in subsequent `<tbody>` rows.",
      task: "What visual and structural defect does this create in modern browsers?",
      options: [
        { id: "opt-1", text: "The browser throws a fatal JavaScript syntax error and crashes.", correct: false, reason: "HTML parsers do not crash on misaligned tables; they attempt error-tolerant layout calculation." },
        { id: "opt-2", text: "The table renders an invisible phantom 3rd column, causing misaligned cell borders and asymmetrical layout stretching.", correct: true, reason: "Correct! The browser expands the table grid to 3 columns to accommodate the colspan, leaving missing cells in data rows." },
        { id: "opt-3", text: "The browser automatically deletes the header row.", correct: false, reason: "Browsers never delete rows; they adjust the total column count." }
      ],
      hint: "Count the total number of cells spanned in each row of the table."
    },

    quiz: [
      {
        id: "html-el-q1",
        question: "Which HTML list element is specifically designed for term-and-definition pairs, such as glossaries or metadata catalogs?",
        options: ["<ul> and <li>", "<ol> and <li>", "<dl> with <dt> and <dd>", "<list> and <item>"],
        correctIndex: 2,
        explanation: "<dl> (Description List) contains <dt> (Description Term) and <dd> (Description Details/Definition) elements specifically meant for key-value associations."
      },
      {
        id: "html-el-q2",
        question: "What is the primary accessibility purpose of the 'scope' attribute on a <th> element?",
        options: [
          "It defines the font color of the header cell.",
          "It explicitly associates the header with a row (scope='row') or column (scope='col') for screen readers.",
          "It prevents the cell from being edited by JavaScript.",
          "It sets the width of the cell in percentages."
        ],
        correctIndex: 1,
        explanation: "The scope attribute specifies whether a header cell is for a column, row, or group of columns/rows, allowing screen readers to announce relevant context as users navigate cells."
      }
    ]
  },

  // ==========================================
  // TOPIC 2: HTML FORMS & FRAMES
  // ==========================================
  "html-forms-frames": {
    id: "html-forms-frames",
    unitId: "unit-2",
    unitNumber: 2,
    unitTitle: "Unit 2: HTML Fundamentals, DHTML, DOM & XML Architecture",
    title: "HTML Forms & Frame Architectures",
    subtitle: "Interactive input controls, form validation attributes, GET vs. POST submission, and modern iframe sandboxing",
    difficulty: "Beginner",
    estimatedMinutes: 18,
    badge: "Web Forms",

    definition: "HTML Forms (<form>) collect user input and submit structured payloads to web servers using specified HTTP methods (GET or POST) and encodings. Frames (historically <frameset> and modern <iframe>) allow web documents to embed independent browsing contexts and nested HTML documents within a single window viewport.",

    whyItMatters: "Forms are the primary interactive gateway between web users and backend systems—powering authentication, search queries, transactions, and settings. Mastering form accessibility, validation, and secure iframe sandboxing prevents security vulnerabilities like Clickjacking and Cross-Site Scripting (XSS).",

    explanation: [
      {
        heading: "Beginner Explanation: A Bank Deposit Slip & A Picture Window",
        content: "Think of an HTML Form like a paper bank deposit slip:\n- It has distinct labeled boxes for your Name, Account Number, and Cash Amount (Input fields).\n- Some boxes are strictly required, like your signature (required attribute).\n- When filled, you hand it to the teller window: you either slip it into an open tray (GET request: parameters visible in URL) or place it in a sealed envelope (POST request: data enclosed securely in the payload body).\n\nAn iframe is like cutting a square picture window in your wall that looks straight into a neighboring room. You can observe the other room, but unless the neighbor permits it (CORS/sandbox security), you cannot reach through and touch their furniture!"
      },
      {
        heading: "Form Anatomy, Controls & Accessibility",
        content: "A robust HTML form includes:\n- Container: `<form action=\"/submit\" method=\"POST\" enctype=\"multipart/form-data\">`\n- Inputs: `<input type=\"text|email|password|number|checkbox|radio|date|file\">`\n- Multi-line & Menus: `<textarea>` and `<select>` with `<option>` groups.\n- Labels: `<label for=\"inputId\">` is crucial. Clicking the label focuses the corresponding input, vastly improving touch target size and screen reader usability.\n- Buttons: `<button type=\"submit|reset|button\">`."
      },
      {
        heading: "Native HTML5 Client-Side Validation",
        content: "Modern HTML provides declarative validation without writing custom JavaScript:\n- `required`: Field cannot be submitted empty.\n- `minlength` & `maxlength`: Bounds string character counts.\n- `min` & `max`: Bounds numerical or date values.\n- `pattern=\"^[A-Z0-9]+$\"`: Enforces regular expression matching.\n- `:valid` & `:invalid` CSS pseudo-classes provide instant visual feedback to users."
      },
      {
        heading: "Frames History: Deprecated <frameset> vs Modern <iframe>",
        content: "In early HTML (HTML4), developers partitioned entire browser windows into multiple files using `<frameset>` and `<frame>`. This pattern was deprecated in HTML5 because it broke URL bookmarking, print styling, back-button history, and SEO indexing.\n\nModern web architecture uses `<iframe>` (Inline Frame) for embedding third-party widgets (e.g. YouTube players, Google Maps, payment forms). Secure iframes mandate the `sandbox` attribute (`sandbox=\"allow-scripts allow-same-origin\"`) to protect host pages against malicious cross-site scripts."
      }
    ],

    howItWorks: [
      { step: 1, title: "User Input Entry", subtitle: "Form Interaction", description: "User enters keystrokes, toggles checkboxes, or selects drop-down items." },
      { step: 2, title: "Constraint Validation", subtitle: "Client Check", description: "Browser verifies types, required fields, and pattern regex before submission." },
      { step: 3, title: "Data Serialization", subtitle: "Encoding", description: "Browser packages name=value pairs as application/x-www-form-urlencoded or multipart/form-data." },
      { step: 4, title: "HTTP Dispatch", subtitle: "Network Transit", description: "Payload is sent via GET (query string appended to URL) or POST (request body)." }
    ],

    simulationType: "form-builder",

    practicalExample: {
      scenario: "Secure User Registration & Profile Upload",
      description: "A production form combining text, email, password strength attributes, avatar file upload, and terms agreement.",
      records: [
        { type: "<form>", host: "method='POST'", value: "enctype='multipart/form-data'", ttl: "Security", purpose: "Transmits binary file uploads securely in HTTP body" },
        { type: "<input>", host: "type='email'", value: "required", ttl: "Validation", purpose: "Enforces RFC-compliant email address structure" },
        { type: "<iframe>", host: "sandbox", value: "allow-scripts", ttl: "Sandboxing", purpose: "Embeds payment gateway without granting access to host window cookies" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Omitting the 'name' attribute from an <input> element (<input type='text' id='email'>)",
        reality: "Elements without a 'name' attribute will NOT be submitted with the form! The browser uses the `name` attribute as the dictionary key in the encoded payload."
      },
      {
        misconception: "Submitting confidential user passwords or credit cards via HTTP GET method",
        reality: "GET appends parameters directly into the browser address bar query string (`?pwd=secret`). This exposes sensitive data in browser history, proxy logs, and referrer headers. Always use POST with HTTPS for credentials!"
      }
    ],

    relatedTopics: [
      { id: "html-lists-tables-images", title: "HTML Lists, Tables & Images", unitId: "unit-2" },
      { id: "dhtml-javascript", title: "Dynamic HTML with JavaScript", unitId: "unit-2" }
    ],

    challenge: {
      id: "challenge-html-02",
      title: "Locate the Missing Form Data Bug",
      difficulty: "Beginner",
      badge: "Form Serialization",
      description: "A user fills out a registration form, but on the server, `req.body.userBio` is completely undefined even though the user entered text.",
      task: "Inspect the HTML snippet: `<textarea id=\"userBio\" rows=\"4\"></textarea>`. Why did the server receive nothing?",
      options: [
        { id: "opt-1", text: "Textareas cannot be sent in POST requests.", correct: false, reason: "Textarea elements are fully serializable in all HTTP requests." },
        { id: "opt-2", text: "The textarea is missing the 'name=\"userBio\"' attribute; forms only serialize elements with name attributes.", correct: true, reason: "Correct! The browser's form submission algorithm skips any form control lacking a `name` attribute." },
        { id: "opt-3", text: "The textarea is missing the 'value' attribute.", correct: false, reason: "Textareas do not use a value attribute; their content resides between opening and closing tags." }
      ],
      hint: "Remember the difference between the CSS/JS 'id' attribute and the network serialization 'name' attribute."
    },

    quiz: [
      {
        id: "forms-q1",
        question: "When sending binary files (like image uploads or PDF attachments) through an HTML form, which enctype attribute must be specified?",
        options: [
          "application/x-www-form-urlencoded",
          "multipart/form-data",
          "text/plain",
          "application/json"
        ],
        correctIndex: 1,
        explanation: "multipart/form-data splits the HTTP payload into discrete MIME boundaries, allowing binary files and text fields to be transmitted together without corrupting binary bytes."
      },
      {
        id: "forms-q2",
        question: "Why was the historical <frameset> tag deprecated in modern HTML5 in favor of <iframe>?",
        options: [
          "Frameset could only render black-and-white text.",
          "Frameset broke browser bookmarking, back-button history, printing, and search engine web crawler indexing.",
          "Frameset was not compatible with CSS.",
          "Frameset required Java plugins to function."
        ],
        correctIndex: 1,
        explanation: "Framesets partitioned the entire browser window, meaning the address bar URL never changed as users navigated inner frames. This ruined deep linking, bookmarking, and accessibility."
      }
    ]
  },

  // ==========================================
  // TOPIC 3: DYNAMIC HTML (DHTML) WITH JAVASCRIPT
  // ==========================================
  "dhtml-javascript": {
    id: "dhtml-javascript",
    unitId: "unit-2",
    unitNumber: 2,
    unitTitle: "Unit 2: HTML Fundamentals, DHTML, DOM & XML Architecture",
    title: "Dynamic HTML (DHTML) with JavaScript",
    subtitle: "The convergence of HTML, CSS, JavaScript, and the DOM to create dynamic, responsive web interfaces",
    difficulty: "Intermediate",
    estimatedMinutes: 18,
    badge: "DHTML & Scripting",

    definition: "Dynamic HTML (DHTML) is not a single language or standalone standard; rather, it is the synergistic combination of static HTML structure, CSS presentation rules, the Document Object Model (DOM), and client-side JavaScript scripting to create animated, interactive, and real-time mutating web pages without requiring page reloads.",

    whyItMatters: "DHTML marked the monumental transition of the World Wide Web from a passive library of static documents into an interactive software application runtime. Every dropdown menu, drag-and-drop board, real-time input filter, modal dialog, and single-page app (SPA) builds upon core DHTML principles.",

    explanation: [
      {
        heading: "Beginner Explanation: From Printed Poster to Interactive Kiosk",
        content: "Static HTML is like a paper poster glued to a brick wall. Once printed, its text and images are frozen forever; changing anything requires printing a completely new poster (a full server reload).\n\nDHTML transforms that wall into an electronic touchscreen kiosk. The wall is still there (HTML), the neon styling looks great (CSS), but now when you tap a button (Event), a micro-controller (JavaScript) re-arranges the screen pixels on the fly (DOM mutation), instantly revealing directions without rebooting the machine!"
      },
      {
        heading: "The Four Pillars of DHTML Architecture",
        content: "DHTML works through the tight synchronization of 4 components:\n1. Semantic HTML: Defines the structural elements (<button>, <div>, <p>).\n2. Cascading Style Sheets (CSS): Defines visual rules (colors, visibility, positioning, opacity, transitions).\n3. Document Object Model (DOM): Exposes every HTML tag as an addressable JavaScript object with properties and methods.\n4. JavaScript Scripting Engine: Executes logic in response to user gestures, timers, and network responses."
      },
      {
        heading: "Event-Driven Programming & DOM Mutation",
        content: "DHTML operates on an event-driven architecture:\n- Event Registration: `element.addEventListener('click', (e) => { ... })`\n- Reading State: Accessing `element.value`, `element.getAttribute('data-id')`, or `element.getBoundingClientRect()`.\n- Mutating Content: Changing text via `element.textContent = 'Updated!'`.\n- Mutating Styles: Modifying styles directly (`element.style.display = 'block'`) or toggling semantic CSS utility classes (`element.classList.toggle('hidden')`).\n- Creating Nodes: Generating fresh markup dynamically (`document.createElement('li')` + `parent.appendChild()`)."
      },
      {
        heading: "Historical Context & Modern Evolution",
        content: "During the 1990s 'Browser Wars', Netscape Navigator introduced `document.layers` while Microsoft Internet Explorer introduced `document.all`. Writing DHTML required cumbersome browser-detection forks. The W3C standardized the Document Object Model (DOM Level 1 & 2), unifying cross-browser DHTML. Today, modern frameworks like React and Vue automate DHTML DOM mutations through declarative virtual trees."
      }
    ],

    howItWorks: [
      { step: 1, title: "Static Document Loaded", subtitle: "DOM Ready", description: "Browser parses HTML markup and binds event listeners via script tags." },
      { step: 2, title: "User Gesture / Event Fired", subtitle: "Event Dispatch", description: "User clicks, types, hovers, or scrolls; browser packages an Event object." },
      { step: 3, title: "JavaScript Handler Executes", subtitle: "Call Stack", description: "Callback function runs business logic, updates state variables, or formats data." },
      { step: 4, title: "DOM Tree Mutated", subtitle: "API Call", description: "Script alters text content, changes CSS classes, or appends child elements." },
      { step: 5, title: "Reflow & Repaint", subtitle: "Browser Engine", description: "Browser recalculates layout geometry and paints modified pixels to the screen." }
    ],

    simulationType: "dhtml-events",

    practicalExample: {
      scenario: "Interactive Accordion FAQ Widget",
      description: "A collapsible question-and-answer widget that toggles answer height and icon rotation on user click.",
      records: [
        { type: "Listener", host: "header.addEventListener", value: "'click'", ttl: "Trigger", purpose: "Detects user touch or mouse click gesture" },
        { type: "Mutation", host: "body.classList.toggle", value: "'expanded'", ttl: "DOM Change", purpose: "Toggles CSS class containing display: block and height transitions" },
        { type: "Accessibility", host: "header.setAttribute", value: "'aria-expanded', 'true'", ttl: "A11y", purpose: "Informs screen readers that answer panel is now revealed" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Directly concatenating untrusted user input into innerHTML (`el.innerHTML = '<p>' + userInput + '</p>')",
        reality: "This creates dangerous Cross-Site Scripting (XSS) vulnerabilities where malicious scripts execute in user browsers. Always use `element.textContent` or sanitized DOM node creation methods!"
      },
      {
        misconception: "Modifying layout properties (like offsetTop, width) repeatedly inside loops",
        reality: "This triggers 'Layout Thrashing' (forced synchronous reflows), forcing the browser to recompute document geometry on every iteration and causing severe user interface lag."
      }
    ],

    relatedTopics: [
      { id: "object-models-dom", title: "Document Object Model (DOM)", unitId: "unit-2" },
      { id: "css-doctype-presentation", title: "CSS Document Type & Presentation", unitId: "unit-2" }
    ],

    challenge: {
      id: "challenge-dhtml-01",
      title: "Solve the Premature Script Execution Bug",
      difficulty: "Intermediate",
      badge: "DOM Timing",
      description: "A developer writes `<script>document.getElementById('saveBtn').addEventListener(...);</script>` at the top of the `<head>` tag. When loading the page, the console throws: `Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')`.",
      task: "Why is the element null?",
      options: [
        { id: "opt-1", text: "JavaScript does not support the addEventListener method in modern browsers.", correct: false, reason: "addEventListener is standard across all modern web browsers." },
        { id: "opt-2", text: "The script executed before the browser HTML parser reached the <body> where 'saveBtn' is declared, so the DOM node did not exist in memory yet.", correct: true, reason: "Correct! The browser executes scripts immediately unless deferred. Add `defer` attribute or move `<script>` to the end of `<body>`." },
        { id: "opt-3", text: "Buttons cannot have event listeners attached to them.", correct: false, reason: "Buttons are the primary interactive elements designed for event listeners." }
      ],
      hint: "Think about the top-to-bottom sequence in which browsers parse HTML markup and execute inline script tags."
    },

    quiz: [
      {
        id: "dhtml-q1",
        question: "Which four technologies converge to form the foundation of Dynamic HTML (DHTML)?",
        options: [
          "HTML, CSS, JavaScript, and the Document Object Model (DOM)",
          "PHP, MySQL, Apache, and Linux",
          "XML, XSLT, DTD, and Java Applets",
          "HTML, Flash, Silverlight, and ActionScript"
        ],
        correctIndex: 0,
        explanation: "DHTML is specifically defined as the combination of HTML (structure), CSS (presentation), the DOM (programmable tree representation), and JavaScript (dynamic behavioral logic)."
      },
      {
        id: "dhtml-q2",
        question: "What is the recommended modern approach to alter multiple CSS styling rules on a DOM element simultaneously?",
        options: [
          "Setting 20 individual inline styles using element.style (e.g. element.style.color, element.style.width, etc.)",
          "Toggling a semantic CSS class using element.classList.toggle('active')",
          "Using document.write() to rewrite the entire HTML document",
          "Deleting the element and recreating it from scratch"
        ],
        correctIndex: 1,
        explanation: "Using classList.toggle() or classList.add() preserves clean separation of concerns: styling rules remain encapsulated in CSS stylesheets, and a single class toggle triggers efficient batched reflows."
      }
    ]
  },

  // ==========================================
  // TOPIC 4: CSS DOCUMENT TYPE DEFINITION & PRESENTATION
  // ==========================================
  "css-doctype-presentation": {
    id: "css-doctype-presentation",
    unitId: "unit-2",
    unitNumber: 2,
    unitTitle: "Unit 2: HTML Fundamentals, DHTML, DOM & XML Architecture",
    title: "CSS Document Type Definition & Presentation",
    subtitle: "DOCTYPE standards modes, CSS cascade algorithms, and document presentation layers",
    difficulty: "Intermediate",
    estimatedMinutes: 16,
    badge: "CSS Presentation",

    definition: "While Document Type Definitions (DTDs) historically belong to SGML/XML and specify grammatical element validation rules, the DOCTYPE declaration (<!DOCTYPE html>) is essential for CSS presentation because it commands the browser layout engine to render styles in full W3C Standards Mode rather than legacy Quirks Mode. CSS Presentation then applies cascade, specificity, and box formatting rules to render the document.",

    whyItMatters: "A single missing or malformed DOCTYPE declaration silently downgrades modern browsers into 1998-era 'Quirks Mode'. In Quirks Mode, CSS box sizing breaks (borders/padding are subtracted from widths), percentage heights collapse, and font sizes render unpredictably. Understanding DOCTYPE modes and the CSS Cascade is foundational to predictable web design.",

    explanation: [
      {
        heading: "Important Historical Clarification: DTD vs. DOCTYPE vs. CSS",
        content: "Students frequently wonder: 'Why does the syllabus say CSS Document Type Definition when CSS doesn't use DTDs?'\n\nHere is the crucial distinction:\n1. DTD (Document Type Definition): A formal SGML/XML grammar file (e.g. `<!ELEMENT div ...>`). HTML4 and XML use DTDs to enforce tag validity.\n2. DOCTYPE Declaration (`<!DOCTYPE html>`): Placed at the very top of HTML files. In modern web development, its primary purpose is layout engine mode switching (Standards Mode vs Quirks Mode) for CSS presentation!\n3. CSS Presentation: The rules, selectors, properties, and cascade algorithms that control how HTML elements look on screen."
      },
      {
        heading: "Browser Rendering Modes: Standards Mode vs Quirks Mode",
        content: "When a browser loads an HTML document, the first bytes it inspects are the DOCTYPE:\n- Standards Mode (Triggered by `<!DOCTYPE html>`): The browser adheres strictly to modern W3C/WHATWG CSS standards. Box model dimensions behave consistently, table inheritance conforms to specs, and modern layouts render as intended.\n- Quirks Mode (Triggered by missing DOCTYPE or old legacy strings): Emulates obsolete Internet Explorer 5.5 bugs to prevent ancient 1990s websites from looking completely broken. In Quirks Mode, the CSS box model calculates width including borders and padding, destroying modern responsive CSS Grid and Flexbox layouts!"
      },
      {
        heading: "The Presentation Layer: Separation of Content & Style",
        content: "Web architecture enforces separation of concerns:\n- Structure Layer (HTML): Semantic content and logical meaning (headings, lists, articles).\n- Presentation Layer (CSS): Visual appearance (typography, color schemes, responsive grid alignments, spacing).\n- Behavior Layer (JS): State mutation and event responses.\n\nSeparating presentation into CSS allows a single stylesheet to restyle thousands of web pages simultaneously without editing one line of HTML."
      },
      {
        heading: "The CSS Cascade Algorithm & Specificity Hierarchy",
        content: "When multiple CSS rules target the same element, the Cascade resolves conflicts using 3 deterministic criteria:\n1. Origin & Importance: User-agent styles < Author styles < Author `!important` < User `!important`.\n2. Specificity Score: Calculated as a 3-part tuple (ID, Class/Attribute/Pseudo-class, Element/Pseudo-element):\n   - Inline style: (1, 0, 0, 0)\n   - ID selector (`#header`): (0, 1, 0, 0)\n   - Class selector (`.card`, `:hover`): (0, 0, 1, 0)\n   - Element selector (`p`, `div`): (0, 0, 0, 1)\n3. Source Order: When specificity is equal, the rule declared later in the CSS file wins."
      }
    ],

    howItWorks: [
      { step: 1, title: "DOCTYPE Evaluation", subtitle: "Mode Switch", description: "Browser inspects the preamble byte stream; activates Standards Mode if <!DOCTYPE html> is present." },
      { step: 2, title: "CSSOM Construction", subtitle: "Style Parsing", description: "Browser parses external CSS stylesheets and <style> blocks into the CSS Object Model (CSSOM)." },
      { step: 3, title: "Cascade Resolution", subtitle: "Rule Matching", description: "Cascade algorithm evaluates selector specificity and source order for every DOM element." },
      { step: 4, title: "Render Tree Generation", subtitle: "DOM + CSSOM", description: "Nodes with display: none are pruned; visible nodes are paired with computed CSS styles." },
      { step: 5, title: "Layout & Box Formation", subtitle: "Geometry", description: "Computed box model dimensions (content, padding, border, margin) are mapped to pixel coordinates." }
    ],

    simulationType: "dhtml-events",

    practicalExample: {
      scenario: "Eliminating Layout Glitches with HTML5 DOCTYPE",
      description: "Ensuring modern W3C box model rendering across Google Chrome, Safari, and Firefox.",
      records: [
        { type: "DOCTYPE", host: "<!DOCTYPE html>", value: "Standards Mode", ttl: "Preamble", purpose: "Forces layout engine into standard W3C mode, preventing quirks mode bugs" },
        { type: "Specificity", host: "#userCard .btn", value: "(0, 1, 1, 0)", ttl: "Cascade", purpose: "Outranks generic .btn (0, 0, 1, 0) rule to apply brand highlight color" },
        { type: "CSSOM", host: "box-sizing: border-box", value: "Predictable sizing", ttl: "Presentation", purpose: "Includes padding inside declared element width" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Placing an HTML comment or whitespace before the <!DOCTYPE html> declaration",
        reality: "In older Internet Explorer engines and legacy web views, placing comments before <!DOCTYPE html> immediately triggered Quirks Mode! Always ensure <!DOCTYPE html> starts at line 1, column 1."
      },
      {
        misconception: "Overusing '!important' to force CSS presentation overrides",
        reality: "'!important' breaks the natural cascade and creates specificity wars that become nearly impossible to maintain. Increase selector specificity or refactor CSS architecture instead."
      }
    ],

    relatedTopics: [
      { id: "dhtml-javascript", title: "Dynamic HTML with JavaScript", unitId: "unit-2" },
      { id: "object-models-dom", title: "Document Object Model (DOM)", unitId: "unit-2" }
    ],

    challenge: {
      id: "challenge-css-01",
      title: "Resolve the Specificity Clash",
      difficulty: "Intermediate",
      badge: "CSS Specificity",
      description: "An element is defined as `<button id=\"checkoutBtn\" class=\"btn primary\">Pay Now</button>`. In CSS, Rule A is `.primary { background: blue; }` and Rule B is `button.primary { background: green; }` and Rule C is `#checkoutBtn { background: purple; }`.",
      task: "Which background color is applied to the button, and why?",
      options: [
        { id: "opt-1", text: "Green, because 'button.primary' specifies both the tag name and class.", correct: false, reason: "button.primary has specificity (0, 0, 1, 1), which is lower than an ID selector." },
        { id: "opt-2", text: "Purple, because an ID selector (#checkoutBtn) has a higher specificity tier (0, 1, 0, 0) than class or tag selectors.", correct: true, reason: "Correct! ID selectors always overpower any combination of classes and tag selectors in the W3C specificity algorithm." },
        { id: "opt-3", text: "Blue, because .primary is the first class declared on the element.", correct: false, reason: "Class order in HTML attributes has zero effect on CSS cascade resolution." }
      ],
      hint: "Compare the specificity score of an ID selector against class selectors."
    },

    quiz: [
      {
        id: "doctype-q1",
        question: "What is the primary role of the modern `<!DOCTYPE html>` declaration in web browsers?",
        options: [
          "It imports the CSS stylesheet from the W3C server.",
          "It instructs the browser to parse the document in W3C Standards Mode instead of legacy Quirks Mode.",
          "It compiles client-side JavaScript into machine code.",
          "It encrypts the HTML source using HTTPS."
        ],
        correctIndex: 1,
        explanation: "<!DOCTYPE html> acts as an engine mode switch, telling the browser layout engine to render modern CSS and DOM behavior according to current web standards."
      },
      {
        id: "doctype-q2",
        question: "In the CSS specificity calculation (a, b, c), what do the three numbers represent?",
        options: [
          "(File size, Line number, Timestamp)",
          "(ID selectors, Class/Attribute/Pseudo-class selectors, Element/Pseudo-element selectors)",
          "(Red, Green, Blue color values)",
          "(Margins, Borders, Paddings)"
        ],
        correctIndex: 1,
        explanation: "CSS specificity is calculated as (IDs, Classes/attributes/pseudo-classes, Elements/pseudo-elements). A higher count in a leftmost category always overrides any count in lower categories."
      }
    ]
  },

  // ==========================================
  // TOPIC 5: OBJECT MODELS & DOM ARCHITECTURE
  // ==========================================
  "object-models-dom": {
    id: "object-models-dom",
    unitId: "unit-2",
    unitNumber: 2,
    unitTitle: "Unit 2: HTML Fundamentals, DHTML, DOM & XML Architecture",
    title: "Object Models & Document Object Model (DOM)",
    subtitle: "The W3C DOM architecture, node tree hierarchy, and element manipulation interfaces",
    difficulty: "Beginner",
    estimatedMinutes: 20,
    badge: "DOM Architecture",

    definition: "The Document Object Model (DOM) is a language-neutral, cross-platform programming interface standard defined by the W3C and WHATWG that represents an HTML or XML document as a hierarchical tree of interconnected Node objects. It provides programs and scripts with complete programmatic access to inspect, modify, create, and delete document structure, styles, and content.",

    whyItMatters: "Without the DOM, JavaScript would have zero connection to the webpage—it could not read user inputs, modify colors, react to clicks, or render live data. Every modern frontend framework (React, Vue, Svelte, Angular) is ultimately an abstraction designed to interact with or manipulate the underlying browser DOM.",

    explanation: [
      {
        heading: "Beginner Explanation: The Living Family Tree",
        content: "Think of the DOM as a living family tree:\n- Ancestor: The document root (`window.document`) is the founding ancestor.\n- Children: The `<html>` element is the direct child of the document. Inside, `<head>` and `<body>` are siblings.\n- Leaves: The headings (`<h1>`), paragraphs (`<p>`), and buttons (`<button>`) are descendants.\n\nJust as you can navigate family relationships (e.g. 'Jane's parent', 'Jane's younger brother'), JavaScript can navigate the DOM using `node.parentNode`, `node.children`, and `node.nextElementSibling` to pinpoint any element in memory!"
      },
      {
        heading: "The Node Type Hierarchy",
        content: "Everything in the DOM is an instance of the base `Node` interface:\n- `Document`: The root entrypoint (`window.document`).\n- `Element`: HTML or XML tags (`<div>`, `<p>`, `<section>`). Has attributes, child elements, and class lists.\n- `Attr`: Element attributes (`id=\"app\"`, `class=\"card\"`).\n- `Text`: The actual text characters inside an element (e.g. \"Hello World\" inside `<p>`).\n- `Comment`: HTML comments (`<!-- todo -->`)."
      },
      {
        heading: "DOM Querying: Finding Elements in Memory",
        content: "Modern JavaScript provides flexible query methods:\n- `document.getElementById('header')`: Ultra-fast lookups by unique ID.\n- `document.querySelector('.nav > li.active')`: Finds the first element matching any complex CSS selector.\n- `document.querySelectorAll('button.tab')`: Returns a static `NodeList` containing all matching elements.\n- Live vs. Static Collections: `getElementsByTagName` returns a live HTMLCollection that updates automatically when DOM changes; `querySelectorAll` returns a static snapshot."
      },
      {
        heading: "DOM Mutation: Creating, Appending, and Removing Nodes",
        content: "Standard W3C manipulation methods:\n- Create: `const card = document.createElement('div')`\n- Configure: `card.className = 'card'; card.textContent = 'Data';`\n- Insert: `parentElement.appendChild(card)` or `parentElement.insertBefore(card, referenceNode)`\n- Remove: `card.remove()` or `parentElement.removeChild(card)`\n- Replace: `parentElement.replaceChild(newCard, oldCard)`"
      }
    ],

    howItWorks: [
      { step: 1, title: "HTML Ingestion & Tokenization", subtitle: "Parsing", description: "Browser tokenizes stream into StartTags, EndTags, and Character data." },
      { step: 2, title: "Tree Construction", subtitle: "DOM Factory", description: "Parser instantiates Node objects in RAM and connects parent, child, and sibling pointers." },
      { step: 3, title: "JavaScript Exposure", subtitle: "Window Binding", description: "Document root object is exposed as global window.document for scripting access." },
      { step: 4, title: "Live Mutation", subtitle: "API Interaction", description: "Scripts invoke createElement, appendChild, or textContent to modify the tree in real time." }
    ],

    simulationType: "dom-explorer",

    practicalExample: {
      scenario: "Dynamic User Notification Badge Injector",
      description: "Programmatically generating and inserting an unread message badge into the navigation bar.",
      records: [
        { type: "Query", host: "document.querySelector", value: "'#inbox-link'", ttl: "Lookup", purpose: "Finds the parent anchor element in the DOM tree" },
        { type: "Create", host: "document.createElement", value: "'span'", ttl: "Node Init", purpose: "Allocates a new Element Node in browser memory" },
        { type: "Append", host: "inboxLink.appendChild", value: "badgeNode", ttl: "Tree Insert", purpose: "Attaches badge into DOM tree, triggering immediate visual repaint" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Assuming getElementsByClassName returns a standard JavaScript Array",
        reality: "It returns a live HTMLCollection, NOT an Array. Methods like `.map()`, `.filter()`, and `.reduce()` will throw errors unless converted via `Array.from(collection)` or `[...collection]`."
      },
      {
        misconception: "Modifying the DOM inside a heavy loop (e.g. appending 1,000 items one-by-one)",
        reality: "Every single append triggers a separate browser reflow and repaint. Use a `DocumentFragment` to batch all 1,000 items in memory and append them in a single operation!"
      }
    ],

    relatedTopics: [
      { id: "dhtml-javascript", title: "Dynamic HTML with JavaScript", unitId: "unit-2" },
      { id: "xml-fundamentals-schemas", title: "XML Fundamentals & Schemas", unitId: "unit-2" }
    ],

    challenge: {
      id: "challenge-dom-01",
      title: "Fix the Live HTMLCollection Loop Mutation Bug",
      difficulty: "Intermediate",
      badge: "DOM Collections",
      description: "A developer attempts to delete all elements with class 'item' using this loop:\n```javascript\nconst items = document.getElementsByClassName('item');\nfor (let i = 0; i < items.length; i++) {\n  items[i].remove();\n}\n```\nAfter execution, half the items are still on the screen!",
      task: "Why did the loop fail to delete all items?",
      options: [
        { id: "opt-1", text: "The remove() method can only be called once per page load.", correct: false, reason: "remove() can be invoked on any valid DOM node at any time." },
        { id: "opt-2", text: "getElementsByClassName returns a LIVE collection. When item 0 is removed, item 1 shifts into index 0 while 'i' increments to 1, causing the loop to skip every other element.", correct: true, reason: "Correct! Live collections shift their indexes on removal. Use `while(items.length > 0) items[0].remove()` or querySelectorAll (static)." },
        { id: "opt-3", text: "The browser limits deletions to 5 elements for security reasons.", correct: false, reason: "No such security limit exists in DOM specifications." }
      ],
      hint: "Remember the difference between a static list and a live HTMLCollection whose length updates dynamically as nodes are deleted."
    },

    quiz: [
      {
        id: "dom-q1",
        question: "Which DOM method returns a static NodeList that does NOT automatically change when subsequent DOM modifications occur?",
        options: [
          "document.getElementsByTagName()",
          "document.getElementsByClassName()",
          "document.querySelectorAll()",
          "document.getElementById()"
        ],
        correctIndex: 2,
        explanation: "document.querySelectorAll() returns a static snapshot of elements matching the CSS selector at the exact moment of invocation. It does not update when nodes are added or removed."
      },
      {
        id: "dom-q2",
        question: "What is the primary performance benefit of using a DocumentFragment when inserting multiple new nodes into the DOM?",
        options: [
          "DocumentFragments encrypt the nodes before insertion.",
          "DocumentFragments store nodes off-screen in memory, allowing you to append hundreds of nodes while triggering only a single reflow/repaint when appended to the main document.",
          "DocumentFragments allow elements to bypass CSS rules.",
          "DocumentFragments automatically translate HTML into XML."
        ],
        correctIndex: 1,
        explanation: "A DocumentFragment acts as a lightweight off-DOM container. Appending multiple children to a fragment and then appending the fragment to the DOM triggers only one single layout calculation."
      }
    ]
  },

  // ==========================================
  // TOPIC 6: XML FUNDAMENTALS & HIERARCHY
  // ==========================================
  "xml-fundamentals-schemas": {
    id: "xml-fundamentals-schemas",
    unitId: "unit-2",
    unitNumber: 2,
    unitTitle: "Unit 2: HTML Fundamentals, DHTML, DOM & XML Architecture",
    title: "XML Fundamentals & Hierarchy",
    subtitle: "Extensible Markup Language, well-formedness rules, and custom data schemas",
    difficulty: "Beginner",
    estimatedMinutes: 16,
    badge: "XML Hierarchy",

    definition: "eXtensible Markup Language (XML) is a flexible, text-based meta-markup language standardized by the W3C for storing and transporting structured data. Unlike HTML, which features predefined tags for visual presentation, XML has no predefined tags and is strictly designed to carry self-describing data with customized semantic vocabularies.",

    whyItMatters: "XML is the foundational enterprise data interchange format across banking, healthcare, government, and aviation. Technologies such as SOAP web services, SVG vector graphics, Android layout files, Office Open XML (.docx/.xlsx), and RSS feeds all rely entirely on XML structure and well-formedness rules.",

    explanation: [
      {
        heading: "Beginner Explanation: The Custom Filing Cabinet",
        content: "Imagine HTML as a pre-printed form with fixed blanks labeled 'Headline', 'Paragraph', and 'Table'. You cannot rename the blanks because the browser only knows how to format those specific words.\n\nXML is like a blank notebook where you invent your own filing labels. If you are building a veterinary database, you can create tags called `<pet>`, `<breed>`, and `<vaccinationDate>`. The software reading the notebook knows nothing about colors or fonts—it only cares about the structured facts you recorded!"
      },
      {
        heading: "HTML vs. XML: Fundamental Divergences",
        content: "Understanding the difference is critical:\n- HTML: Designed to DISPLAY data with predefined tags (`<h1>`, `<p>`, `<table>`). It is forgiving of syntax errors (e.g. unclosed `<p>` tags).\n- XML: Designed to STORE and TRANSPORT data with user-defined tags (`<patient>`, `<diagnosis>`). It is completely unforgiving of syntax errors—a single missing closing tag immediately halts the parser!"
      },
      {
        heading: "The Golden Rules of XML Well-Formedness",
        content: "An XML document MUST be 'Well-Formed' to be parsed:\n1. XML Declaration: Usually begins with `<?xml version=\"1.0\" encoding=\"UTF-8\"?>`.\n2. Single Root Element: All tags must be enclosed inside exactly one root element.\n3. Every Element Must Close: All tags must have a closing pair (`<item>...</item>`) or be self-closing (`<item/>`).\n4. Strict Case Sensitivity: `<Book>` is entirely different from `<book>`.\n5. Proper Nesting: Tags cannot overlap (`<b><i>Text</b></i>` is illegal; must be `<b><i>Text</i></b>`).\n6. Quoted Attribute Values: Attribute values must always be inside quotes (`id=\"101\"`, never `id=101`).\n7. Predefined Entity References: Reserved characters must be escaped: `&lt;` (<), `&gt;` (>), `&amp;` (&), `&quot;` (\"), `&apos;` (').\n8. CDATA Blocks: Large raw text containing code or unescaped characters can be wrapped in `<![CDATA[ ... ]]>`."
      },
      {
        heading: "XML Namespaces (xmlns)",
        content: "When combining XML vocabularies from different organizations, element name collisions can occur (e.g. `<table category=\"furniture\">` vs `<table rows=\"5\">`). XML Namespaces solve this by qualifying element names with unique URIs using prefixes:\n`<cust:table xmlns:cust=\"http://furniture.org/spec\">`."
      }
    ],

    howItWorks: [
      { step: 1, title: "XML Authoring", subtitle: "Data Modeling", description: "Author organizes structured records into hierarchical element trees." },
      { step: 2, title: "Well-Formedness Verification", subtitle: "Syntax Check", description: "XML parser checks single root, matching tags, quoting, and proper nesting." },
      { step: 3, title: "Infoset Construction", subtitle: "Data Extraction", description: "Parser converts characters into the XML Information Set (elements, attributes, character data)." },
      { step: 4, title: "Application Consumption", subtitle: "Processing", description: "Target enterprise software or database ingests the verified semantic data." }
    ],

    simulationType: "xml-tree",

    practicalExample: {
      scenario: "Interbank Electronic Funds Transfer Wire",
      description: "A ISO 20022 XML message payload transmitting financial transfer instructions between banking servers.",
      records: [
        { type: "<Document>", host: "xmlns='urn:iso:std:iso:20022'", value: "Root Container", ttl: "Namespace", purpose: "Unambiguously declares the ISO banking schema namespace" },
        { type: "<Amt>", host: "Ccy='USD'", value: "14500.00", ttl: "Element", purpose: "Encapsulates transaction amount with currency attribute" },
        { type: "<Cdtr>", host: "<Nm>Global Logistics Inc</Nm>", value: "Creditor Name", ttl: "Hierarchy", purpose: "Child element specifying beneficiary corporate entity" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Writing raw ampersands or angle brackets inside XML text content (`<formula>5 & 10 < 20</formula>`)",
        reality: "This immediately causes a fatal parser error! You must write `&amp;` and `&lt;` or wrap the entire expression inside a `<![CDATA[ 5 & 10 < 20 ]]>` section."
      },
      {
        misconception: "Expecting an XML file to automatically render as a styled webpage when opened in a browser",
        reality: "XML contains no presentation instructions. Browsers either display a collapsible raw text tree or require an XSLT stylesheet or CSS to format the data into human-readable HTML."
      }
    ],

    relatedTopics: [
      { id: "xml-schema-validation", title: "XML Schemas: XSD vs DTD", unitId: "unit-2" },
      { id: "presentation-xsl", title: "XML Presentation & XSL", unitId: "unit-2" }
    ],

    challenge: {
      id: "challenge-xml-01",
      title: "Locate the Well-Formedness Violation",
      difficulty: "Beginner",
      badge: "XML Syntax",
      description: "Analyze this XML fragment:\n```xml\n<catalog>\n  <book id=101>\n    <Title>Clean Architecture</title>\n    <author>Robert Martin</author>\n  </book>\n</catalog>\n```",
      task: "Why is this XML document NOT well-formed?",
      options: [
        { id: "opt-1", text: "The root element cannot be named 'catalog'.", correct: false, reason: "Root elements can have any legal XML identifier name." },
        { id: "opt-2", text: "The attribute value is unquoted (id=101 instead of id=\"101\") and the Title tag has mismatched casing (<Title> and </title>).", correct: true, reason: "Correct! XML strictly mandates quoted attributes and exact case-sensitive tag matching." },
        { id: "opt-3", text: "XML does not support book or author tags.", correct: false, reason: "XML allows custom user-defined tags." }
      ],
      hint: "Look at the attribute value syntax on `<book>` and the letter capitalization on `<Title>`."
    },

    quiz: [
      {
        id: "xml-q1",
        question: "What is the key difference between an XML document that is 'Well-Formed' and one that is 'Valid'?",
        options: [
          "'Well-Formed' means it has no spelling errors; 'Valid' means it is approved by Google.",
          "'Well-Formed' means it obeys basic XML syntax rules (single root, matching tags, quoted attributes); 'Valid' means it also conforms to a specific DTD or XML Schema (XSD).",
          "'Well-Formed' applies to HTML; 'Valid' applies to XML.",
          "There is no difference; the terms are completely interchangeable."
        ],
        correctIndex: 1,
        explanation: "Every XML document must be well-formed to even be parsed. A valid XML document is a well-formed document that additionally satisfies the grammatical and type constraints of a DTD or XSD schema."
      },
      {
        id: "xml-q2",
        question: "How do you escape an entire block of text in XML so that special characters like '<', '>', and '&' are not treated as markup?",
        options: [
          "<escape> ... </escape>",
          "/* ... */",
          "<![CDATA[ ... ]]>",
          "<!-- ... -->"
        ],
        correctIndex: 2,
        explanation: "CDATA (Character Data) sections (`<![CDATA[ ... ]]>`) tell the XML parser to treat all enclosed characters as pure character literals rather than markup tags or entities."
      }
    ]
  },

  // ==========================================
  // TOPIC 7: XML SCHEMAS: XSD VS. DTD VALIDATION
  // ==========================================
  "xml-schema-validation": {
    id: "xml-schema-validation",
    unitId: "unit-2",
    unitNumber: 2,
    unitTitle: "Unit 2: HTML Fundamentals, DHTML, DOM & XML Architecture",
    title: "XML Schemas: XSD vs. DTD Validation",
    subtitle: "Document Type Definitions vs W3C XML Schema data types, facets, and cardinality constraints",
    difficulty: "Intermediate",
    estimatedMinutes: 18,
    badge: "Schema Validation",

    definition: "XML Schemas are formal contractual specifications that define the legal building blocks, element hierarchies, data types, and attribute constraints of an XML document. Document Type Definitions (DTDs) provide legacy grammar-based rules, whereas W3C XML Schema Definition (XSD) provides rich data types, namespaces, regex facet constraints, and cardinality rules written directly in XML.",

    whyItMatters: "Well-formedness only checks syntax—it doesn't verify whether an `<age>` element contains a number, whether an `<email>` has an `@` symbol, or whether a mandatory `<ssn>` was omitted. XML Schemas ensure enterprise systems reject corrupted, malformed, or fraudulent business transactions before database insertion.",

    explanation: [
      {
        heading: "Beginner Explanation: The Visa Application Checklist",
        content: "If well-formedness is making sure your application is written in readable English with periods at the end of sentences, Schema Validation is the strict consular officer reviewing your paperwork:\n1. Are all required documents included? (Cardinality / `minOccurs`)\n2. Are they in the exact requested order? (`xs:sequence`)\n3. Is your birth date formatted as YYYY-MM-DD? (Data typing / `xs:date`)\n4. Is your passport number 9 alphanumeric characters? (Regex pattern facets)\n\nIf any single rule fails, the entire application is rejected at the counter!"
      },
      {
        heading: "DTD (Document Type Definition) Mechanics",
        content: "Inherited from SGML, DTDs use a concise non-XML syntax:\n- Element Declarations: `<!ELEMENT employee (name, email, age?)>`\n- Quantifiers: `,` (sequence), `|` (choice), `?` (0 or 1), `*` (0 or more), `+` (1 or more).\n- Content Types: `(#PCDATA)` for parsed character text, `EMPTY` for void tags, `ANY` for unconstrained.\n- Attributes: `<!ATTLIST employee id ID #REQUIRED status (active|inactive) \"active\">`\n\nDTD Limitations: DTDs cannot validate whether a string is a number, date, or decimal; they lack XML syntax and cannot handle namespaces."
      },
      {
        heading: "XSD (XML Schema Definition) Architecture",
        content: "Standardized by the W3C, XSD overcomes all DTD shortcomings:\n- Written in XML: Parsed and edited using standard XML tools (`<xs:schema>`).\n- Built-in Data Types: 44+ primitive and derived types: `xs:string`, `xs:integer`, `xs:decimal`, `xs:boolean`, `xs:date`, `xs:dateTime`, `xs:anyURI`.\n- Simple vs. Complex Types: `<xs:simpleType>` contains only text values with restrictions; `<xs:complexType>` contains child elements and attributes.\n- Order Compositors: `<xs:sequence>` (strict order), `<xs:choice>` (one of several), `<xs:all>` (all children in any order).\n- Cardinality: Precise bounds using `minOccurs=\"0\"` and `maxOccurs=\"unbounded\"`."
      },
      {
        heading: "Data Restrictions & Facets",
        content: "XSD enables custom validation rules via facets:\n- Range restrictions: `<xs:minInclusive value=\"18\"/>` and `<xs:maxInclusive value=\"120\"/>`.\n- String length: `<xs:length value=\"10\"/>` or `<xs:maxLength value=\"255\"/>`.\n- Regular Expressions: `<xs:pattern value=\"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}\"/>`.\n- Enumerations: `<xs:enumeration value=\"Pending\"/>`, `<xs:enumeration value=\"Approved\"/>`."
      }
    ],

    howItWorks: [
      { step: 1, title: "Schema Binding", subtitle: "Namespace Association", description: "Instance document links to schema via xsi:schemaLocation or xsi:noNamespaceSchemaLocation." },
      { step: 2, title: "Structural Validation", subtitle: "Element Hierarchy", description: "Validator verifies root element, child sequences, and required occurrences." },
      { step: 3, title: "Type & Facet Checking", subtitle: "Data Validation", description: "Text content is cast to declared schema types and verified against regex/range facets." },
      { step: 4, title: "PSVI Emission", subtitle: "Infoset Enhancement", description: "Validator outputs the Post-Schema-Validation Infoset (PSVI) with validated typed values." }
    ],

    simulationType: "xml-schema",

    practicalExample: {
      scenario: "Pharmaceutical Prescription Schema",
      description: "An XSD schema enforcing that medication dosage is a positive decimal and patient ID conforms to hospital formatting.",
      records: [
        { type: "<xs:element>", host: "name='dosage'", value: "type='xs:decimal'", ttl: "Type Safety", purpose: "Ensures medication quantity cannot contain text letters" },
        { type: "<xs:minInclusive>", host: "value='0.1'", value: "Range Bound", ttl: "Facet", purpose: "Guarantees dosage cannot be zero or negative" },
        { type: "<xs:attribute>", host: "name='rxId'", value: "use='required'", ttl: "Cardinality", purpose: "Mandates that every prescription has an auditing identifier" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Assuming omitted minOccurs means an element is optional",
        reality: "In XSD, both `minOccurs` and `maxOccurs` default to '1' if omitted! If you want an element to be optional, you must explicitly declare `minOccurs=\"0\"`."
      },
      {
        misconception: "Using DTDs when strict financial or date validation is required",
        reality: "DTDs treat all element content as `#PCDATA` (generic strings). A DTD cannot detect if someone enters 'FREE' for a price or 'Tomorrow' for a timestamp. Always use XSD for data integrity!"
      }
    ],

    relatedTopics: [
      { id: "xml-fundamentals-schemas", title: "XML Fundamentals", unitId: "unit-2" },
      { id: "xml-processors-parsers", title: "XML Processors & Parsers", unitId: "unit-2" }
    ],

    challenge: {
      id: "challenge-xsd-01",
      title: "Debug the Missing Optional Element Error",
      difficulty: "Intermediate",
      badge: "XSD Constraints",
      description: "An XSD declares:\n```xml\n<xs:sequence>\n  <xs:element name=\"name\" type=\"xs:string\" />\n  <xs:element name=\"middleName\" type=\"xs:string\" />\n  <xs:element name=\"lastName\" type=\"xs:string\" />\n</xs:sequence>\n```\nA user submits an XML instance without `<middleName>`, causing a validation rejection.",
      task: "How should the schema be modified so that middleName is optional?",
      options: [
        { id: "opt-1", text: "Change type=\"xs:string\" to type=\"xs:null\".", correct: false, reason: "xs:null is not a valid W3C XML Schema type." },
        { id: "opt-2", text: "Add minOccurs=\"0\" to the <middleName> element declaration.", correct: true, reason: "Correct! The default minOccurs is 1. Setting minOccurs=\"0\" makes the element optional." },
        { id: "opt-3", text: "Replace <xs:sequence> with <xs:any>.", correct: false, reason: "<xs:any> is an extensibility wildcard, not an optionality flag." }
      ],
      hint: "Remember the default value of minOccurs when it is not explicitly declared."
    },

    quiz: [
      {
        id: "xsd-q1",
        question: "Which XSD compositor element requires that all declared child elements must appear in the exact sequential order defined in the schema?",
        options: [
          "<xs:all>",
          "<xs:choice>",
          "<xs:sequence>",
          "<xs:group>"
        ],
        correctIndex: 2,
        explanation: "<xs:sequence> mandates that child elements must appear in the instance document in the exact order declared in the schema. In contrast, <xs:all> permits any order, and <xs:choice> permits only one option."
      },
      {
        id: "xsd-q2",
        question: "Why does W3C XML Schema (XSD) have superior support for international software engineering compared to DTDs?",
        options: [
          "XSD is written in XML syntax, supports 44+ native data types, and natively supports XML Namespaces.",
          "XSD files can only be read on Windows systems.",
          "XSD does not require an XML parser.",
          "XSD automatically converts XML to binary code."
        ],
        correctIndex: 0,
        explanation: "XSD is written in valid XML (making it parseable by standard XML tools), provides strong built-in data typing, and integrates with XML Namespaces to prevent element naming collisions across schemas."
      }
    ]
  },

  // ==========================================
  // TOPIC 8: XML PRESENTATION & XSL (XSLT STYLESHEETS)
  // ==========================================
  "presentation-xsl": {
    id: "presentation-xsl",
    unitId: "unit-2",
    unitNumber: 2,
    unitTitle: "Unit 2: HTML Fundamentals, DHTML, DOM & XML Architecture",
    title: "XML Presentation & XSL (XSLT Stylesheets)",
    subtitle: "Transforming raw structured XML into styled HTML presentations using template rules",
    difficulty: "Intermediate",
    estimatedMinutes: 20,
    badge: "XSLT Stylesheets",

    definition: "Extensible Stylesheet Language (XSL) is a family of W3C recommendations for transforming and presenting XML documents. Its core component, XSL Transformations (XSLT), is a declarative, template-based functional programming language that transforms an input XML source tree into a target presentation document (such as HTML, XHTML, SVG, or plain text) using XPath queries.",

    whyItMatters: "Raw XML is purely semantic data with zero visual presentation instructions. XSLT solves the presentation challenge by completely decoupling raw business data from output display layouts. A single XML sales ledger can be transformed into an interactive HTML web dashboard, a printable PDF invoice, or a CSV export without altering the source XML database.",

    explanation: [
      {
        heading: "Beginner Explanation: The Translator and Graphic Designer",
        content: "Imagine XML as a doctor's handwritten clinical lab report containing raw numbers: Blood Sugar: 110, Cholesterol: 195. Handing this raw page to a patient is confusing.\n\nXSLT acts as a graphic designer and translator. It reads the raw numbers, follows a template rulebook ('If Blood Sugar > 100, wrap in a warning badge with bold text; arrange all items into a clean two-column table'), and generates a colorful, styled patient report card (HTML). The doctor's records stay clean, while the patient gets an easy-to-read document!"
      },
      {
        heading: "The Three Branches of the XSL Family",
        content: "W3C XSL encompasses three specialized standards:\n1. XSLT (XSL Transformations): The declarative transformation engine that restructures XML trees into HTML or XML.\n2. XPath (XML Path Language): The navigation syntax used to address and query specific nodes in an XML document (e.g. `/catalog/book[price < 30]/title`).\n3. XSL-FO (XSL Formatting Objects): A vocabulary describing page layout geometry (margins, page breaks, headers/footers) primarily used for generating print PDFs."
      },
      {
        heading: "Key XSLT Directives & Template Architecture",
        content: "XSLT operates through template pattern matching:\n- Root Declaration: `<xsl:stylesheet version=\"1.0\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\">`\n- Template Definition: `<xsl:template match=\"/\">` matches the document root node.\n- Value Extraction: `<xsl:value-of select=\"path/to/node\"/>` extracts text content.\n- Iteration: `<xsl:for-each select=\"catalog/item\">` loops over node collections.\n- Sorting: `<xsl:sort select=\"price\" order=\"ascending\" data-type=\"number\"/>` sorts items before iteration.\n- Conditional Branching: `<xsl:if test=\"score &gt; 50\">` or `<xsl:choose>` with `<xsl:when>` and `<xsl:otherwise>`."
      },
      {
        heading: "Functional Paradigm: Variables as Immutable Constants",
        content: "Unlike procedural languages like JavaScript or Python, XSLT is a pure declarative functional language. In XSLT, `<xsl:variable>` values are immutable constants; once assigned, they cannot be mutated! Loops and state transformations are executed using functional recursion and template matching rather than traditional `for/while` counters."
      }
    ],

    howItWorks: [
      { step: 1, title: "Source Tree Parsing", subtitle: "DOM Generation", description: "XSLT processor parses input XML into an in-memory hierarchical source tree." },
      { step: 2, title: "Stylesheet Compilation", subtitle: "Template Rules", description: "Processor loads XSLT stylesheet and compiles matching template rules." },
      { step: 3, title: "Pattern Matching & Evaluation", subtitle: "XPath Traversal", description: "Processor walks the source tree, matching nodes against template patterns and resolving loops." },
      { step: 4, title: "Result Tree Generation", subtitle: "Output Serialization", description: "Processor instantiates HTML markup with injected data and serializes the final web page." }
    ],

    simulationType: "xsl-transform",

    practicalExample: {
      scenario: "Generating E-Commerce Product Catalog from XML Feed",
      description: "An XSLT template converting product inventory XML records into responsive HTML card grids.",
      records: [
        { type: "<xsl:template>", host: "match='/'", value: "Root Template", ttl: "Entry", purpose: "Matches document root and generates outer HTML page skeleton" },
        { type: "<xsl:for-each>", host: "select='catalog/item'", value: "Node Iterator", ttl: "Loop", purpose: "Repeats markup generation for every product node in feed" },
        { type: "<xsl:value-of>", host: "select='name'", value: "Data Binding", ttl: "Extraction", purpose: "Injects product title string directly into HTML <h4> tag" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Attempting to reassign an XSL variable (`<xsl:variable name='x' value='$x + 1'/>`)",
        reality: "XSLT is a functional programming language. Variables are immutable constants! If you need accumulation or counting, use functional recursion or XPath functions like `count()` and `sum()`."
      },
      {
        misconception: "Using standard '<' or '>' symbols inside XSL test attributes (<xsl:if test=\"score > 70\">)",
        reality: "Because XSLT is written in XML, raw '<' and '>' break XML parsing! You must write `&lt;` and `&gt;` (e.g. `test=\"score &gt; 70\"`)."
      }
    ],

    relatedTopics: [
      { id: "xml-fundamentals-schemas", title: "XML Fundamentals", unitId: "unit-2" },
      { id: "xml-processors-parsers", title: "XML Processors & Parsers", unitId: "unit-2" }
    ],

    challenge: {
      id: "challenge-xslt-01",
      title: "Debug the Broken Conditional Syntax in XSLT",
      difficulty: "Intermediate",
      badge: "XSLT Directives",
      description: "A developer writes:\n```xml\n<xsl:if test=\"price < 100\">\n  <span class=\"sale\">Affordable!</span>\n</xsl:if>\n```\nThe XSLT processor immediately halts with a fatal parsing error.",
      task: "Why did the processor reject this XSL snippet?",
      options: [
        { id: "opt-1", text: "XSL does not support the <xsl:if> element.", correct: false, reason: "<xsl:if> is standard in XSLT." },
        { id: "opt-2", text: "The '<' symbol is an unescaped XML delimiter; it must be written as '&lt;' inside the test attribute (test=\"price &lt; 100\").", correct: true, reason: "Correct! Because stylesheets are XML documents, all raw '<' symbols violate well-formedness and must be escaped as '&lt;'." },
        { id: "opt-3", text: "Prices cannot be evaluated as numbers.", correct: false, reason: "XPath evaluates numbers natively." }
      ],
      hint: "Remember that XSL stylesheets are themselves XML documents subject to all XML well-formedness rules."
    },

    quiz: [
      {
        id: "xslt-q1",
        question: "Which technology in the XSL family is responsible for addressing, navigating, and selecting specific nodes in an XML source tree?",
        options: ["XPath", "XSL-FO", "DOM", "SAX"],
        correctIndex: 0,
        explanation: "XPath (XML Path Language) is the expression language used within XSLT and XQuery to navigate the element hierarchy and select specific nodes or node sets."
      },
      {
        id: "xslt-q2",
        question: "Which XSLT element provides multi-way conditional branching equivalent to an 'if / else if / else' structure?",
        options: [
          "<xsl:switch>",
          "<xsl:choose> with <xsl:when> and <xsl:otherwise>",
          "<xsl:branch>",
          "<xsl:case>"
        ],
        correctIndex: 1,
        explanation: "<xsl:choose> acts as a container for one or more <xsl:when test=\"...\"> conditional branches and an optional fallback <xsl:otherwise> branch."
      }
    ]
  },

  // ==========================================
  // TOPIC 9: XML PROCESSORS: ARCHITECTURE & PIPELINE
  // ==========================================
  "xml-processors-parsers": {
    id: "xml-processors-parsers",
    unitId: "unit-2",
    unitNumber: 2,
    unitTitle: "Unit 2: HTML Fundamentals, DHTML, DOM & XML Architecture",
    title: "XML Processors: Architecture & Pipeline",
    subtitle: "Lexical analysis, token streams, grammar verification, and validating vs non-validating parsers",
    difficulty: "Intermediate",
    estimatedMinutes: 18,
    badge: "Parser Pipeline",

    definition: "An XML Processor (commonly called an XML Parser) is a specialized software engine that reads an XML document, verifies its syntax and grammar against W3C specifications, and provides downstream client applications with structured programmatic access to its hierarchical content. Processors are categorized into Non-Validating (checking well-formedness only) and Validating (enforcing DTD/XSD schema compliance).",

    whyItMatters: "Web developers rely on XML processors inside browsers, API gateways, database engines, and runtime compilers. Unlike forgiving HTML web browsers that guess user intent when tags are unclosed, conforming XML processors MUST halt execution immediately upon discovering an ill-formed character, ensuring strict enterprise reliability and security.",

    explanation: [
      {
        heading: "Beginner Explanation: The Airport Baggage Inspection Line",
        content: "Think of an XML Processor like an automated airport security screening line:\n1. Luggage Ingestion: Raw bags arrive on the conveyor belt (Character Stream / Raw Bytes).\n2. X-Ray Scanner: The machine separates the contents into discrete identifiable objects—shoes, electronics, liquids (Lexical Analysis / Tokenizer).\n3. Rule Inspector: The officer checks basic safety laws (Well-Formedness: Are bags zipped? No hazardous chemicals?). If a rule is broken, the line stops immediately!\n4. Boarding Verification: If you are an international passenger, an officer verifies your passport and visa against government databases (Validating Processor checking DTD/XSD).\n5. Gate Delivery: Once cleared, your bags are loaded onto the aircraft (In-Memory DOM Tree or SAX Event Stream for the application)."
      },
      {
        heading: "The 4-Stage XML Processing Pipeline",
        content: "A standard XML processor executes across 4 sequential stages:\n1. Character Stream & Encoding Resolution: Reads raw bytes from disk/network, detects Byte Order Marks (BOM), resolves character encodings (UTF-8, UTF-16, ISO-8859-1), and normalizes line endings (`CRLF` to `LF`).\n2. Lexical Analyzer (Tokenizer): Scans characters into lexical tokens: `START_TAG`, `END_TAG`, `ATTRIBUTE_NAME`, `ATTRIBUTE_VALUE`, `TEXT_DATA`, and `ENTITY_REF`.\n3. Grammar & Syntactic Parser: Enforces W3C XML 1.0 well-formedness (single root, matched tags, unique attributes). In a validating processor, it verifies element sequences, cardinality, and data types against a DTD or XSD schema.\n4. Output Generation: Produces an in-memory tree (DOM) or dispatches push callbacks (SAX)."
      },
      {
        heading: "Validating vs. Non-Validating Processors",
        content: "W3C specifications define two distinct processor classes:\n- Non-Validating Processor: Inspects ONLY Well-Formedness. It verifies tags match, quotes exist, and XML syntax is correct. It completely ignores DTD/XSD constraints. It is lightweight, blazingly fast, and ideal when data integrity is already guaranteed.\n- Validating Processor: Enforces both Well-Formedness AND full compliance with an associated DTD or XML Schema (XSD). If a required element is missing or a date format is invalid, it flags a validation error. Crucial for banking, insurance, and medical data pipelines."
      },
      {
        heading: "Draconian Error Handling: The Zero-Tolerance Rule",
        content: "A core design principle of XML 1.0 is 'Draconian Error Handling'. Unlike HTML browsers that silently auto-close missing tags, XML specifications explicitly forbid error recovery. If an XML document contains even a single syntax error, the processor MUST immediately abort and report a fatal parsing exception. This prevents corrupted data from propagating into mission-critical systems."
      }
    ],

    howItWorks: [
      { step: 1, title: "Byte Decoding & Normalization", subtitle: "Stage 1", description: "Processor decodes UTF-8 octets, detects BOM, and normalizes line breaks." },
      { step: 2, title: "Lexical Tokenization", subtitle: "Stage 2", description: "Stream is tokenized into start tags, attributes, text nodes, and entity references." },
      { step: 3, title: "Syntactic & Schema Validation", subtitle: "Stage 3", description: "Grammar engine verifies well-formedness and checks schema constraints if validating." },
      { step: 4, title: "Application Delivery", subtitle: "Stage 4", description: "Clean data is delivered to application memory via DOM nodes or SAX event callbacks." }
    ],

    simulationType: "xml-processor",

    practicalExample: {
      scenario: "Enterprise Banking Gateway Parser (Apache Xerces / Java)",
      description: "A Java enterprise backend configuring DocumentBuilderFactory to validate incoming XML payment requests against an XSD schema.",
      records: [
        { type: "Factory", host: "factory.setValidating(true)", value: "Validation Mode", ttl: "Config", purpose: "Switches processor from non-validating to validating mode" },
        { type: "Schema", host: "factory.setSchema(xsdSchema)", value: "XSD Link", ttl: "Security", purpose: "Binds schema for typed facet and cardinality enforcement" },
        { type: "Handler", host: "builder.setErrorHandler(...)", value: "Fatal Trap", ttl: "Resilience", purpose: "Catches fatal parsing exceptions and aborts transaction" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Expecting an XML parser to auto-correct unclosed tags like a web browser does",
        reality: "The W3C XML 1.0 specification strictly mandates that processors must NOT recover from well-formedness errors. A missing closing tag always results in a fatal error."
      },
      {
        misconception: "Assuming all XML processors validate data types by default",
        reality: "By default, most standard parsers run in Non-Validating mode to optimize speed. You must explicitly configure the parser to validate against an XSD schema if type safety is required."
      }
    ],

    relatedTopics: [
      { id: "xml-schema-validation", title: "XML Schemas: XSD vs DTD", unitId: "unit-2" },
      { id: "dom-vs-sax", title: "DOM vs SAX Processing", unitId: "unit-2" }
    ],

    challenge: {
      id: "challenge-proc-01",
      title: "Identify the Processor Behavior Mismatch",
      difficulty: "Intermediate",
      badge: "Parser Diagnostics",
      description: "An XML file contains well-formed syntax, but violates an XSD schema rule (an `<age>` tag contains the text 'twenty' instead of an integer). System A accepts the document without complaint, while System B throws a fatal rejection error.",
      task: "Why did System A accept the invalid document?",
      options: [
        { id: "opt-1", text: "System A is running on Linux where XML schemas are ignored.", correct: false, reason: "Operating systems have zero bearing on XML schema validation logic." },
        { id: "opt-2", text: "System A uses a Non-Validating processor (which only checks syntax well-formedness), while System B uses a Validating processor (which enforces schema data types).", correct: true, reason: "Correct! Non-validating processors only check well-formedness syntax, completely ignoring schema type violations." },
        { id: "opt-3", text: "System A automatically converted 'twenty' into the number 20.", correct: false, reason: "XML processors never perform natural language number translation." }
      ],
      hint: "Remember the operational difference between a Validating and a Non-Validating processor."
    },

    quiz: [
      {
        id: "proc-q1",
        question: "What is the concept of 'Draconian Error Handling' in the W3C XML specification?",
        options: [
          "The processor encrypts files that contain errors.",
          "The processor must immediately stop parsing and report a fatal error when any well-formedness violation is encountered, with no attempt to guess or recover.",
          "The processor deletes the file from the hard drive.",
          "The processor converts syntax errors into warnings."
        ],
        correctIndex: 1,
        explanation: "Draconian error handling is an intentional XML architectural principle: parsers are strictly prohibited from attempting error recovery on ill-formed documents to prevent silent data corruption."
      },
      {
        id: "proc-q2",
        question: "Which of the following tasks is performed during the Lexical Analysis (Tokenization) stage of an XML processor?",
        options: [
          "Calculating the CSS box model geometry",
          "Splitting the raw character stream into discrete tokens such as StartTags, EndTags, Attribute names, and Text data",
          "Sending an HTTP GET request to download images",
          "Writing the data to an SQL relational database"
        ],
        correctIndex: 1,
        explanation: "The lexical analyzer (tokenizer) converts the raw sequential character stream into discrete semantic tokens (START_TAG, END_TAG, ATTRIBUTES, etc.) for the grammar parser."
      }
    ]
  },

  // ==========================================
  // TOPIC 10: XML PROCESSING MODELS: DOM VS. SAX
  // ==========================================
  "dom-vs-sax": {
    id: "dom-vs-sax",
    unitId: "unit-2",
    unitNumber: 2,
    unitTitle: "Unit 2: HTML Fundamentals, DHTML, DOM & XML Architecture",
    title: "XML Processing Models: DOM vs. SAX",
    subtitle: "In-memory tree traversal vs sequential push-event streaming architectures",
    difficulty: "Intermediate",
    estimatedMinutes: 18,
    badge: "DOM vs SAX",

    definition: "XML documents are processed using two fundamentally distinct architectural models: Document Object Model (DOM), a tree-based, in-memory model that loads the entire document into RAM for bidirectional traversal and mutation; and Simple API for XML (SAX), an event-driven, stream-based push model that reads files sequentially with constant minimal memory footprint.",

    whyItMatters: "Choosing the wrong XML parser model can instantly crash production servers. Attempting to parse a 2GB XML database export using DOM requires 15GB to 20GB of RAM and triggers catastrophic OutOfMemoryError crashes; using SAX processes the exact same 2GB file in seconds using only 4KB of buffer RAM. Understanding memory vs traversal trade-offs is essential systems architecture knowledge.",

    explanation: [
      {
        heading: "Beginner Explanation: Reading a Book vs. Listening to an Audiobook",
        content: "Imagine studying a 1,000-page historical encyclopedia:\n- The DOM Approach: You photocopy every single page, tape them all across your living room walls, and draw string connecting every character and date. You can walk back and forth freely between chapter 1 and chapter 50, modify notes, or cut out sections (Random access & mutation). But your entire house is packed to the ceiling with paper (Massive memory consumption)!\n\n- The SAX Approach: You listen to the audiobook through headphones. You hear each sentence in linear order (Event stream: start chapter, sentence, end chapter). If you hear a date you care about, you jot it down on an index card in your pocket. As soon as a sentence finishes, it is gone from memory. You can listen to a 10,000-hour recording in a tiny room without running out of space (Constant tiny memory buffer)!"
      },
      {
        heading: "DOM: The Tree-Based In-Memory Model",
        content: "DOM architecture details:\n- Complete Hierarchy in RAM: The parser instantiates Node objects for every tag, attribute, and text chunk with parent, child, and sibling pointers.\n- Memory Multiplier: In practice, DOM trees consume 5x to 10x the raw disk file size (e.g. a 100MB XML file easily consumes 800MB+ in memory).\n- Bidirectional Traversal: Random access navigation using `parentNode`, `firstChild`, `nextSibling`, and XPath.\n- Read/Write: Allows node modification, insertion, deletion, and reordering in memory."
      },
      {
        heading: "SAX: The Event-Driven Streaming Model",
        content: "SAX architecture details:\n- Sequential Stream: Reads the XML linearly from start to finish.\n- Push-Model Callbacks: As tokens are encountered, the parser invokes registered ContentHandler methods:\n  - `startDocument()`: Fired once when parsing begins.\n  - `startElement(uri, localName, qName, attributes)`: Fired on every opening tag.\n  - `characters(ch, start, length)`: Fired when text content is scanned.\n  - `endElement(uri, localName, qName)`: Fired on closing tag; node is immediately discarded!\n  - `endDocument()`: Fired when stream completes.\n- Memory Footprint: Constant $O(1)$ RAM (~4KB to 8KB buffer) regardless of whether the file is 10KB or 50GB!\n- Limitations: Read-only and forward-only. You cannot traverse backwards without restarting the entire stream."
      },
      {
        heading: "Architectural Decision Matrix",
        content: "When to choose which model:\n- Choose DOM when:\n  1. The XML file is small to medium (< 20MB).\n  2. You need random access navigation or XPath queries across unrelated nodes.\n  3. You need to modify document contents and save the altered tree back to disk.\n  4. You are building an interactive XML GUI editor.\n\n- Choose SAX when:\n  1. The XML file is large (> 50MB) or streaming over a network socket.\n  2. You only need to extract specific pieces of data (e.g. searching for a single customer ID).\n  3. You are running on memory-constrained systems (mobile devices, IoT, microservices).\n  4. You only need a single forward pass without modifying the source document."
      }
    ],

    howItWorks: [
      { step: 1, title: "Parser Initialization", subtitle: "Setup", description: "Application instantiates DOM DocumentBuilder or registers SAX ContentHandler callbacks." },
      { step: 2, title: "Stream Ingestion", subtitle: "Processing", description: "DOM builds full node object graph in heap; SAX scans tokens and fires event callbacks on the fly." },
      { step: 3, title: "Memory Allocation", subtitle: "RAM Impact", description: "DOM memory expands linearly with file size (O(N)); SAX maintains tiny constant buffer (O(1))." },
      { step: 4, title: "Consumption", subtitle: "Result", description: "DOM enables bidirectional random access; SAX completes forward-only streaming scan." }
    ],

    simulationType: "dom-vs-sax",

    practicalExample: {
      scenario: "Parsing a 5GB Genomic Sequence XML Export",
      description: "Comparing system resource consumption when extracting gene sequences with DOM vs. SAX.",
      records: [
        { type: "DOM", host: "OutOfMemoryError", value: "35 GB RAM required", ttl: "Heap Crash", purpose: "Demonstrates fatal server crash when attempting to build DOM of multi-gigabyte file" },
        { type: "SAX", host: "startElement('gene')", value: "6.2 KB RAM buffer", ttl: "Streaming", purpose: "Streams all 5GB of gene sequences in 12 seconds with negligible memory footprint" },
        { type: "Trade-off", host: "Forward-Only", value: "No backward navigation", ttl: "Constraint", purpose: "Application maintains state flags to correlate related streaming events" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Using DOM to parse large log files or database exports on a production web server",
        reality: "Large XML files cause massive heap allocation spikes that trigger aggressive garbage collection pauses and eventually crash the JVM or Node.js process with an OutOfMemoryError. Always use SAX or StAX for large files!"
      },
      {
        misconception: "Assuming SAX allows you to modify and save updated XML tags back to disk",
        reality: "SAX is strictly a read-only event emitter. It maintains no tree in memory to modify. To alter an XML document, you must either use DOM or manually pipe SAX events into an outgoing output stream."
      }
    ],

    relatedTopics: [
      { id: "object-models-dom", title: "Document Object Model (DOM)", unitId: "unit-2" },
      { id: "xml-processors-parsers", title: "XML Processors & Parsers", unitId: "unit-2" }
    ],

    challenge: {
      id: "challenge-sax-01",
      title: "Select the Optimal Architecture for an XML Editor",
      difficulty: "Intermediate",
      badge: "Architecture Trade-offs",
      description: "A team is designing an interactive desktop application that allows users to open 500KB configuration files, click on nodes in a visual tree, rename tags, reorder elements, and save the updated file to disk.",
      task: "Which XML processing model should the team choose, and why?",
      options: [
        { id: "opt-1", text: "SAX, because it uses less memory and is always superior to DOM.", correct: false, reason: "SAX is read-only and does not support visual tree navigation or in-place node editing." },
        { id: "opt-2", text: "DOM, because 500KB is easily accommodated in RAM, and DOM provides random-access traversal and read/write node mutation required for an interactive editor.", correct: true, reason: "Correct! Small files with random-access UI editing requirements are the exact primary use case for DOM." },
        { id: "opt-3", text: "Neither; XML cannot be edited on desktop computers.", correct: false, reason: "XML is widely used for desktop configuration files." }
      ],
      hint: "Evaluate whether the application requires bidirectional node editing and whether a 500KB file is small enough for memory."
    },

    quiz: [
      {
        id: "sax-q1",
        question: "What is the computational memory complexity (RAM usage) of the SAX parsing model relative to the size of the XML file?",
        options: [
          "O(N^2) exponential memory",
          "O(N) linear memory proportional to document size",
          "O(1) constant minimal memory buffer",
          "O(log N) logarithmic memory"
        ],
        correctIndex: 2,
        explanation: "SAX reads XML chunk by chunk and discards tokens after firing callbacks, resulting in a constant O(1) memory footprint regardless of whether the document is 100KB or 50GB."
      },
      {
        id: "sax-q2",
        question: "Which of the following operations CANNOT be performed natively using the standard SAX parser model?",
        options: [
          "Counting the total number of <customer> tags in a file",
          "Navigating backwards to inspect the parent of a previously parsed element",
          "Extracting the text content of a specific tag",
          "Stopping the parser early once a target record is found"
        ],
        correctIndex: 1,
        explanation: "SAX is forward-only and does not maintain the tree in memory. Once an element's endElement() callback has fired, that element is gone from memory and cannot be revisited without re-parsing from the beginning."
      }
    ]
  },

  // ==========================================
  // TOPIC 11: CAPSTONE LAB: BUILD A DYNAMIC WEBPAGE
  // ==========================================
  "unit2-capstone-lab": {
    id: "unit2-capstone-lab",
    unitId: "unit-2",
    unitNumber: 2,
    unitTitle: "Unit 2: HTML Fundamentals, DHTML, DOM & XML Architecture",
    title: "Capstone Lab: Build a Dynamic Webpage",
    subtitle: "5-Step progressive engineering challenge combining HTML5, Forms, CSS presentation, and DOM JavaScript",
    difficulty: "Intermediate",
    estimatedMinutes: 25,
    badge: "Unit 2 Capstone",

    definition: "The Unit 2 Capstone Laboratory is a comprehensive, progressive 5-stage web engineering challenge that unites all unit concepts: semantic HTML5 structures, accessible form controls, modern CSS presentation styling, DOM node querying, and event-driven JavaScript mutations into a cohesive, interactive web application.",

    whyItMatters: "Web development is not about memorizing isolated tags; it is about harmonizing markup, presentation, and behavioral logic into fluid user experiences. This hands-on capstone proves your end-to-end mastery of core frontend engineering principles before advancing to advanced layout systems and asynchronous networking.",

    explanation: [
      {
        heading: "Lab Overview: The 5 Progressive Engineering Stages",
        content: "In this interactive sandbox, you will build an interactive Inventory & Gadget Registry web application step by step:\n\n1. Stage 1 (Semantic HTML): Establish a solid document outline using semantic headings (`<h2>`), an unordered feature list (`<ul>`), and a structured product table (`<table>`, `<tr>`, `<td>`).\n2. Stage 2 (Form & Input Controls): Add an interactive `<form>` equipped with a text input (`<input type=\"text\">`), a quantity selector, and an actionable submit `<button>`.\n3. Stage 3 (CSS Presentation & Layout): Introduce modern styling rules inside a `<style>` block—applying rounded borders (`border-radius`), card shadows, clean typography, and interactive button hover states (`:hover`).\n4. Stage 4 (DOM Querying & Selection): Connect your JavaScript logic by querying and caching DOM node references using `document.getElementById` and `document.querySelector`.\n5. Stage 5 (Dynamic Interactivity & Events): Wire an `addEventListener('click')` handler that dynamically creates new list elements (`document.createElement('li')`) and appends them to the live page upon user submission!"
      },
      {
        heading: "Verification & Automated Step Evaluation",
        content: "The embedded laboratory simulator includes a real-time code evaluator ('Check My Work'). At each step, the engine analyzes your source code against structural, styling, and behavioral benchmarks, offering targeted hints if any requirement is missing and celebrating completion when all five stages are mastered!"
      }
    ],

    howItWorks: [
      { step: 1, title: "Stage 1: Semantic Markup", subtitle: "HTML Structure", description: "Engineer semantic lists, headings, and data tables." },
      { step: 2, title: "Stage 2: Form Integration", subtitle: "Input Controls", description: "Embed input fields, labels, and action buttons." },
      { step: 3, title: "Stage 3: CSS Presentation", subtitle: "Visual Styling", description: "Apply modern box model borders, paddings, colors, and hover transitions." },
      { step: 4, title: "Stage 4: DOM Node Binding", subtitle: "Script Setup", description: "Query and bind element nodes using document.getElementById." },
      { step: 5, title: "Stage 5: Live Event Loop", subtitle: "DHTML Mastery", description: "Handle user clicks, create DOM nodes dynamically, and append them live." }
    ],

    simulationType: "dynamic-webpage-lab",

    practicalExample: {
      scenario: "Full-Stack Ready Frontend Widget",
      description: "A production-grade dynamic product registry ready for REST API connectivity.",
      records: [
        { type: "Structure", host: "Semantic HTML", value: "table + ul + form", ttl: "HTML5", purpose: "Accessible, screen-reader ready document skeleton" },
        { type: "Styling", host: "CSS Presentation", value: "card + button:hover", ttl: "CSS3", purpose: "SaaS-grade visual aesthetics and responsive box model" },
        { type: "Logic", host: "Event-Driven JS", value: "addEventListener + createElement", ttl: "DOM", purpose: "Zero-reload dynamic state updates and node mutations" }
      ]
    },

    commonMistakes: [
      {
        misconception: "Using inline onclick=\"...\" attributes inside HTML instead of addEventListener in script blocks",
        reality: "Inline HTML event handlers violate the separation of concerns, clutter markup, and hinder code reusability. Always register event listeners in separate script blocks using `addEventListener`."
      },
      {
        misconception: "Forgetting to sanitize or check if text inputs are empty before dynamically appending nodes",
        reality: "Submitting empty strings creates unsightly blank list items. Always check `if (input.value.trim() !== '')` before creating DOM nodes."
      }
    ],

    relatedTopics: [
      { id: "html-lists-tables-images", title: "HTML Fundamentals", unitId: "unit-2" },
      { id: "dhtml-javascript", title: "Dynamic HTML with JavaScript", unitId: "unit-2" },
      { id: "object-models-dom", title: "Document Object Model (DOM)", unitId: "unit-2" }
    ],

    challenge: {
      id: "challenge-capstone-02",
      title: "Unit 2 Comprehensive Architectural Challenge",
      difficulty: "Intermediate",
      badge: "Full Unit Review",
      description: "You are architecting a web application that receives a daily 200MB product catalog XML feed from a supplier, validates its prices against an XSD schema, transforms it into HTML tables with XSLT, and lets users search items dynamically in the browser.",
      task: "Which combination of technologies correctly fulfills this pipeline without risking server memory crashes?",
      options: [
        { id: "opt-1", text: "Parse the 200MB file with DOM in a single browser tab.", correct: false, reason: "Parsing 200MB in a browser DOM will freeze or crash the tab due to gigabytes of memory consumption." },
        { id: "opt-2", text: "Process the 200MB XML with a streaming SAX/StAX processor on the server; validate against XSD; transform relevant batches using XSLT into HTML; and use client-side DHTML with querySelector and addEventListener for interactive UI search.", correct: true, reason: "Correct! Streaming SAX handles the large 200MB feed safely, XSD enforces data integrity, XSLT creates presentation markup, and DHTML provides interactive UI." },
        { id: "opt-3", text: "Convert the XML into HTML tables using framesets.", correct: false, reason: "Framesets are deprecated and do not provide data validation or efficient processing." }
      ],
      hint: "Consider how SAX handles large files on the server and how DHTML provides interactive client UI."
    },

    quiz: [
      {
        id: "capstone-q1",
        question: "When a user submits an HTML form without JavaScript, what is the default browser behavior?",
        options: [
          "The browser opens a popup window.",
          "The browser serializes the form input values and triggers a full page navigation/reload to the URL specified in the form's 'action' attribute.",
          "The browser clears the inputs and remains on the page without sending data.",
          "The browser writes the values to localStorage."
        ],
        correctIndex: 1,
        explanation: "By default, submitting an HTML form serializes the input name/value pairs and dispatches an HTTP request, resulting in a full page reload unless intercepted by JavaScript using event.preventDefault()."
      },
      {
        id: "capstone-q2",
        question: "Which sequence correctly reflects the chronological flow of a complete DHTML user interaction?",
        options: [
          "DOM Mutation -> Reflow -> Event Listener -> Server Restart",
          "User Gesture -> Event Fired -> JavaScript Handler -> DOM Tree Mutation -> Browser Reflow & Repaint",
          "CSSOM -> DOCTYPE -> HTML -> XML",
          "SAX Callback -> DTD Validation -> HTML Table -> CSS"
        ],
        correctIndex: 1,
        explanation: "DHTML follows the event-driven loop: a user gesture triggers an Event, which executes a JavaScript handler, which mutates the DOM tree, causing the browser rendering engine to compute reflow and repaint pixels."
      },
      {
        id: "capstone-q3",
        question: "Why does the modern Web Technology stack combine HTML for structure, CSS for presentation, and JavaScript for behavior?",
        options: [
          "To force developers to write three times as much code.",
          "To maintain clean Separation of Concerns, allowing independent maintenance, accessibility optimization, styling reusability, and modular testing.",
          "Because web browsers are physically incapable of running JavaScript inside HTML.",
          "It is a legal requirement mandated by internet service providers."
        ],
        correctIndex: 1,
        explanation: "Separation of Concerns ensures that content structure (HTML), visual styling (CSS), and interactive logic (JS) can be maintained, scaled, and tested independently by specialized teams."
      }
    ]
  }
};
