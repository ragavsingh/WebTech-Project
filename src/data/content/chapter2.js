/**
 * Chapter 2 Documentation Content: HTML5, DHTML, DOM & XML Architecture
 */

export const CHAPTER_2_TOPICS = {
  '2.1-html-semantics': {
    id: '2.1-html-semantics',
    chapterId: 'chapter-2',
    chapterNumber: 2,
    chapterTitle: 'HTML5, DHTML, DOM & XML Architecture',
    code: '2.1',
    title: 'HTML5 Semantics: Structure, Lists, Tables & Images',
    subtitle: 'Accessible tabular data, hierarchical lists, picture elements, and responsive image srcset',
    difficulty: 'Fundamental',
    readTime: '16 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'HTML5 semantics is the practice of selecting markup elements that convey the meaning, role, and hierarchical relationship of content to both user agents (browsers, screen readers) and machines (search engine crawlers), rather than solely dictating visual presentation.',
      analogy: 'Imagine an architect drawing a building blueprint. They do not label a room "box with 4 walls"; they label it "Emergency Exit", "Master Bedroom", or "Kitchen". If they labeled everything generic "box" (like generic `<div>` tags), firemen and plumbers could not navigate the building. Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<table>`) provide this exact architectural blueprint for software and assistive screen readers.',
      keyPoints: [
        'Semantic Structural Tags: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`.',
        'List Hierarchies: `<ul>` (unordered sets), `<ol>` (ordered sequences with `start`/`reversed`), `<dl>` (description lists: `<dt>` term + `<dd>` definition).',
        'Accessible Tables: `<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<th scope="col|row">`, `colspan`, `rowspan`.',
        'Responsive Images: `<img>` with `srcset` and `sizes`, `<picture>` element with `<source media="...">` for art direction, AVIF/WebP formats with fallback.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'The browser parser constructs an Accessibility Tree (A11y Tree) alongside the DOM tree directly derived from semantic HTML elements and ARIA landmarks.',
      diagram: `
+------------------------------------------------------------------------+
|                     Accessibility Tree Derivation                      |
+------------------------------------------------------------------------+

HTML Source:
<header>              -> Role: banner (Accessibility Landmark)
  <nav>               -> Role: navigation (Skip links & screen reader landmark)
<main>                -> Role: main (Primary unique document body)
  <article>           -> Role: article (Self-contained syndicated content)
    <h1>Title</h1>    -> Role: heading, Level: 1
    <table scope="col"> -> Role: grid (Accessible column/row matrix)
<aside>               -> Role: complementary (Related sidebars)
<footer>              -> Role: contentinfo (Copyright & legal notices)
`,
      specifications: [
        'W3C HTML5.3 Recommendation: Section 4 - Elements of HTML.',
        'W3C WAI-ARIA 1.2: Accessible Rich Internet Applications.',
        'WHATWG Responsive Images Community Group Specification.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'The New York Times & BBC Online',
      scenario: 'Global Art Direction and Responsive Image Bandwidth Optimization',
      howItWorks: 'The BBC serves millions of users across 2G mobile phones in emerging markets and 4K desktop displays in London. Using `<picture>` with modern AVIF formats, mobile devices receive a tight 18 KB crop of the subject, while 4K displays receive an ultra-wide 180 KB landscape. Screen readers announce article chapters seamlessly via semantic `<article>` tags.',
      impact: 'Reduces page weight by 68%, improving Time to Interactive (TTI) on mobile while maintaining 100% WCAG AAA accessibility compliance.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Web accessibility auditors and frontend engineers test semantic integrity using automated and screen-reading systems.',
      tools: [
        'axe-core / Google Lighthouse: Automated accessibility engine scoring semantic element compliance.',
        'Screen Readers (NVDA on Windows, VoiceOver on macOS/iOS, TalkBack on Android).',
        'HTML5 Validator (validator.w3.org): Verifies syntax against the W3C spec.'
      ],
      standards: ['W3C WCAG 2.2 (Web Content Accessibility Guidelines)', 'WHATWG HTML Living Standard']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'html',
      explanation: 'Accessible data table with column scopes and responsive `<picture>` element with modern format fallbacks:',
      code: `<!-- Accessible Data Table with Scopes -->
<table class="data-table">
  <caption>Q3 Cloud Infrastructure Cost Comparison</caption>
  <thead>
    <tr>
      <th scope="col">Provider</th>
      <th scope="col">vCPU / RAM</th>
      <th scope="col">Egress Rate</th>
      <th scope="col">Monthly Cost</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AWS EC2</th>
      <td>4 vCPU / 16 GB</td>
      <td>$0.09 / GB</td>
      <td>$142.50</td>
    </tr>
    <tr>
      <th scope="row">Hetzner Cloud</th>
      <td>4 vCPU / 16 GB</td>
      <td>$0.01 / GB</td>
      <td>$28.90</td>
    </tr>
  </tbody>
</table>

<!-- Responsive Picture with Next-Gen Image Formats & Art Direction -->
<picture>
  <source srcset="/img/hero-wide.avif" type="image/avif" media="(min-width: 1024px)">
  <source srcset="/img/hero-wide.webp" type="image/webp" media="(min-width: 1024px)">
  <source srcset="/img/hero-mobile.webp" type="image/webp">
  <img src="/img/hero-fallback.jpg" alt="Engineers collaborating on system architecture" loading="lazy" width="800" height="450">
</picture>`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Using `<div>` with `onClick` instead of native `<button>` or `<a>`.',
          reality: 'A `div` cannot receive keyboard focus via Tab, does not respond to the Enter or Space key, and is not announced by screen readers. Making a `div` accessible requires manually adding `tabindex="0"`, `role="button"`, and keydown event handlers. Native `<button>` provides all of this out of the box.'
        },
        {
          mistake: 'Omitting explicit `width` and `height` attributes on `<img>` tags.',
          reality: 'When images load without declared aspect ratios, the page layout shifts abruptly as image dimensions resolve, causing severe Cumulative Layout Shift (CLS) and penalties on Google Search rankings.'
        }
      ]
    }
  },

  '2.2-html-forms-frames': {
    id: '2.2-html-forms-frames',
    chapterId: 'chapter-2',
    chapterNumber: 2,
    chapterTitle: 'HTML5, DHTML, DOM & XML Architecture',
    code: '2.2',
    title: 'HTML5 Forms, Constraints & Frame Architectures',
    subtitle: 'Form validation APIs, multipart uploads, iframe isolation, and security sandboxing',
    difficulty: 'Fundamental',
    readTime: '16 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'HTML forms provide the primary interactive mechanism for user data entry and client-server transaction submission. Frames (`<iframe>`) allow isolating and embedding independent browsing contexts within a parent document.',
      analogy: 'An HTML form is like a standardized loan application form at a bank. It has dedicated slots for dates, numbers, checkboxes, and signatures. If you write letters in the "Phone Number" box, the browser clerk instantly halts submission before the application ever reaches the head office. An `<iframe>` is like a bulletproof glass transaction window inside that bank: you can view an external security guard standing inside, but the guard cannot reach through the glass to rifle through your personal bag (Cross-Origin Frame Sandboxing).',
      keyPoints: [
        'Form Enctypes: `application/x-www-form-urlencoded` (default key=value pairs), `multipart/form-data` (file uploads), `text/plain`.',
        'HTML5 Constraint Validation: `required`, `pattern` (regex), `min`/`max`, `type="email|url|number"`, `:valid` and `:invalid` CSS pseudoclasses.',
        'Form Elements: `<input>`, `<textarea>`, `<select>`, `<datalist>`, `<fieldset>`, `<legend>`, `<output>`.',
        'Iframe Sandboxing: The `sandbox` attribute restricts scripts, form submission, popups, and top-navigation for third-party embeds.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'When a form submits, the browser encodes form data into an HTTP payload and navigates or dispatches via AJAX.',
      diagram: `
+------------------------------------------------------------------------+
|                HTML Form Multipart Encoding & Submission               |
+------------------------------------------------------------------------+

Client Form:
<form action="/api/upload" method="POST" enctype="multipart/form-data">
  <input name="username" value="alex">
  <input type="file" name="avatar" (binary photo bytes)>
</form>

Generated HTTP Request Wire Payload:
POST /api/upload HTTP/1.1
Host: api.example.com
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Length: 4210

------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="username"

alex
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="avatar"; filename="photo.png"
Content-Type: image/png

[Binary PNG Byte Stream...]
------WebKitFormBoundary7MA4YWxkTrZu0gW--
`,
      specifications: [
        'RFC 7578: Returning Values from Forms: multipart/form-data.',
        'W3C HTML Constraint Validation API Specification.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Stripe Elements & Google reCAPTCHA',
      scenario: 'PCI-DSS Compliant Payment Isolation via Sandboxed Iframes',
      howItWorks: 'To process credit cards without exposing merchants to multi-million dollar PCI-DSS compliance audits, Stripe injects credit card inputs inside isolated `<iframe>` elements hosted on `https://js.stripe.com`. The parent merchant webpage has zero JavaScript access to the credit card input fields due to Same-Origin Policy (SOP).',
      impact: 'Even if the merchant website is hacked with malicious XSS JavaScript, the attacker cannot read the user\'s credit card numbers inside Stripe\'s sandboxed iframe.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Security engineers and developers audit form security and frame protections using HTTP headers and browser APIs.',
      tools: [
        'Content Security Policy (CSP): `frame-ancestors \'none\'` to prevent Clickjacking.',
        'Browser Constraint Validation API: `element.checkValidity()`, `element.setCustomValidity()`.',
        'OWASP ZAP: Testing form injection vulnerabilities (CSRF, SQLi).'
      ],
      standards: ['W3C Content Security Policy Level 3', 'RFC 6797 (HTTP Strict Transport Security)']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'html',
      explanation: 'Production HTML5 form with constraint validation regex, datalist autocomplete, and a secure sandboxed iframe:',
      code: `<!-- Production Form with Constraint Validation -->
<form id="signupForm" action="/api/register" method="POST" class="space-y-4">
  <div>
    <label for="username">Username (Alphanumeric, 3-16 chars):</label>
    <input type="text" id="username" name="username" 
           required minlength="3" maxlength="16" pattern="^[a-zA-Z0-9_]+$"
           autocomplete="username">
  </div>

  <div>
    <label for="email">Work Email:</label>
    <input type="email" id="email" name="email" required autocomplete="email">
  </div>

  <div>
    <label for="country">Country:</label>
    <input list="countries" id="country" name="country" required>
    <datalist id="countries">
      <option value="United States">
      <option value="United Kingdom">
      <option value="Germany">
      <option value="India">
      <option value="Japan">
    </datalist>
  </div>

  <button type="submit">Complete Registration</button>
</form>

<!-- Securely Sandboxed Iframe (Blocks scripts, popups, and top navigation) -->
<iframe src="https://untrusted-partner.com/widget"
        sandbox="allow-scripts allow-forms"
        csp="default-src 'self'"
        title="Partner Embed"
        width="100%" height="300"
        loading="lazy">
</iframe>`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Relying solely on HTML5 client-side validation (`required`, `pattern`).',
          reality: 'Client-side validation is strictly for user experience (UX). Anyone can bypass client validation using curl or disabling JavaScript. All inputs MUST be re-validated and sanitized on the backend server.'
        },
        {
          mistake: 'Leaving iframes open without Clickjacking protection.',
          reality: 'If your site does not send `Content-Security-Policy: frame-ancestors \'self\'` or `X-Frame-Options: DENY`, attackers can embed your banking site inside an invisible iframe on their site and trick users into clicking buttons ("Clickjacking").'
        }
      ]
    }
  },

  '2.3-dhtml-javascript': {
    id: '2.3-dhtml-javascript',
    chapterId: 'chapter-2',
    chapterNumber: 2,
    chapterTitle: 'HTML5, DHTML, DOM & XML Architecture',
    code: '2.3',
    title: 'Dynamic HTML (DHTML) & Event-Driven JavaScript',
    subtitle: 'Event loop, bubbling vs capturing phases, async/defer scripts, and dynamic style mutation',
    difficulty: 'Intermediate',
    readTime: '18 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'Dynamic HTML (DHTML) is not a single language; it was the historic umbrella term for the combination of HTML, CSS, JavaScript, and the Document Object Model (DOM) allowing web pages to change their content and appearance dynamically in response to user actions without reloading.',
      analogy: 'A static HTML page is like a printed paper menu in a diner: if the kitchen runs out of soup, someone has to reprint the entire paper menu (Full Page Reload). DHTML with JavaScript is like an electronic LED digital board: when an item is ordered or sold out, a lightweight electrical signal updates just that single line item on the screen instantly.',
      keyPoints: [
        'The DHTML Stack: HTML (Structure) + CSS (Presentation) + JavaScript (Behavior) + DOM (Object Interface).',
        'Event Phases: 1. Capture Phase (window down to target), 2. Target Phase, 3. Bubbling Phase (target up to window).',
        'Event Delegation: Attaching a single event listener to a parent container rather than 500 individual child elements.',
        'JavaScript Event Loop: Single-threaded non-blocking runtime with Call Stack, Web APIs, Microtask Queue (Promises), and Macrotask Queue (setTimeout).'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'Understanding event propagation and the DOM mutation cycle is essential to building responsive user interfaces without performance degradation.',
      diagram: `
+-------------------------------------------------------------------------+
|                  DOM Level 2 Event Propagation Flow                     |
+-------------------------------------------------------------------------+

                 |                       ^
  1. CAPTURING   |                       |  3. BUBBLING
     PHASE       v                       |     PHASE
               [Window]                [Window]
                 |                       ^
               [Document]              [Document]
                 |                       ^
               [HTML]                  [HTML]
                 |                       ^
               [Body]                  [Body]
                 |                       ^
               [Table]                 [Table]
                 |                       ^
                 v                       |
              +----------------------------+
              | 2. TARGET PHASE (Clicked)  |
              |     <button id="btn">      |
              +----------------------------+
`,
      specifications: [
        'DOM Level 2 Events Specification: Event capture, target, and bubbling.',
        'ECMAScript 2024 Language Specification: Concurrency and the Event Loop.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Trello & GitHub Dashboard',
      scenario: 'Event Delegation on 10,000 Kanban Cards to Prevent Memory Leaks',
      howItWorks: 'If Trello attached separate `click` and `drag` event listeners to 10,000 individual task cards on a large board, browser memory consumption would spike by 300 MB, causing sluggish scrolling. Instead, Trello uses Event Delegation: a single event listener is attached to the parent `.kanban-board` container. When any card is clicked, the event bubbles up, and `event.target.closest(\'.task-card\')` identifies the exact card.',
      impact: 'Reduces active event listeners from 10,000 to 1, lowering RAM usage by 95% and guaranteeing 60fps scrolling.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Frontend engineers monitor memory leaks and event listeners using browser developer inspection tools.',
      tools: [
        'Chrome DevTools (Elements -> Event Listeners tab): Shows all active listeners attached to nodes.',
        'Chrome DevTools Memory Profiler: Taking Heap Snapshots to detect detached DOM nodes.',
        'Event.stopPropagation() vs Event.preventDefault(): Protocol APIs for controlling browser execution.'
      ],
      standards: ['W3C DOM Level 3 Events', 'WHATWG DOM Event Target Interface']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'javascript',
      explanation: 'Production implementation of Event Delegation with data attributes and safe DOM mutations:',
      code: `// High-Performance Event Delegation Pattern
const taskList = document.getElementById('taskList');

taskList.addEventListener('click', (event) => {
  // Find closest button inside list item
  const actionButton = event.target.closest('[data-action]');
  if (!actionButton) return;

  const item = actionButton.closest('li');
  const taskId = item.dataset.id;
  const action = actionButton.dataset.action;

  switch (action) {
    case 'complete':
      item.classList.toggle('completed');
      break;
    case 'delete':
      item.remove();
      console.log(\`Task \${taskId} removed\`);
      break;
  }
});`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Abusing `event.stopPropagation()` everywhere.',
          reality: '`stopPropagation()` completely stops events from bubbling upward. This breaks global analytics trackers, modal dismiss listeners on `document`, and outer event delegation handlers. Use `event.preventDefault()` to stop browser defaults instead of halting propagation unless strictly required.'
        },
        {
          mistake: 'Creating Detached DOM Memory Leaks.',
          reality: 'If you remove an element from the DOM using `element.remove()`, but retain a reference to it in a global JavaScript variable or uncleaned timer closure, the browser garbage collector cannot free the element or its children from memory.'
        }
      ]
    }
  },

  '2.4-css-doctype-box-model': {
    id: '2.4-css-doctype-box-model',
    chapterId: 'chapter-2',
    chapterNumber: 2,
    chapterTitle: 'HTML5, DHTML, DOM & XML Architecture',
    code: '2.4',
    title: 'CSS Document Type Definition, Standards Mode & Box Model',
    subtitle: 'DOCTYPE switching, Quirks vs Standards mode, CSS cascade, specificity, and Box Sizing',
    difficulty: 'Fundamental',
    readTime: '15 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'A document type declaration (`<!DOCTYPE html>`) informs the browser engine which rendering specification to apply. Without a valid modern DOCTYPE, browsers fall back into "Quirks Mode", emulating bugs from 1998 Netscape Navigator.',
      analogy: 'Imagine entering a courtroom. If the bailiff declares: "We are operating under the 2026 Constitution" (Standards Mode), the judge applies modern codified legal rules. If someone forgets to state the constitution (Missing DOCTYPE), the courtroom drops into "18th-century pirate law" (Quirks Mode), where rules are arbitrary and ancient bugs are deliberately honored for backwards compatibility.',
      keyPoints: [
        'DOCTYPE Switching: `<!DOCTYPE html>` triggers Standards Mode (strict W3C CSS spec compliance).',
        'Quirks Mode: Triggered by missing or legacy DOCTYPE; miscalculates box dimensions and font inheritance.',
        'W3C Standard Box Model: `width` = content only. Total width = content + padding + border.',
        'Modern Border-Box Model: `box-sizing: border-box`. Total width = content + padding + border contained within the declared width.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'The CSS Box Model defines how elements occupy rectangular geometry in the layout tree.',
      diagram: `
+------------------------------------------------------------------------+
|                     CSS Box Model Architecture                         |
+------------------------------------------------------------------------+

+-------------------------------------------------------------+
| MARGIN (Transparent spacing outside element boundary)       |
|   +-----------------------------------------------------+   |
|   | BORDER (Visible outline line)                       |   |
|   |   +---------------------------------------------+   |   |
|   |   | PADDING (Space between content and border)   |   |   |
|   |   |   +-------------------------------------+   |   |   |
|   |   |   | CONTENT (Text, Image, Inner HTML)   |   |   |   |
|   |   |   +-------------------------------------+   |   |   |
|   |   +---------------------------------------------+   |   |
|   +-----------------------------------------------------+   |
+-------------------------------------------------------------+

Comparison:
Content-Box (Legacy Default):
  width: 200px + padding: 20px + border: 2px = TOTAL RENDERED WIDTH: 244px!

Border-Box (Modern Standard):
  width: 200px (padding 20px and border 2px absorbed inside) = TOTAL WIDTH: 200px!
`,
      specifications: [
        'W3C CSS Box Model Module Level 3.',
        'WHATWG Quirks Mode Living Specification.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Tailwind CSS, Bootstrap & Modern Design Systems',
      scenario: 'The Global `box-sizing: border-box` Universal Reset',
      howItWorks: 'In the early 2000s, building responsive grids was infuriating: if you had two `50%` width columns and added 10px padding, `50% + 10px + 50% + 10px > 100%`, forcing the second column to wrap and break the layout. Paul Irish popularized the universal `*, *::before, *::after { box-sizing: border-box; }` reset, which is now adopted by 100% of modern frontend frameworks.',
      impact: 'Eliminates layout breakage across responsive multi-column web layouts.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Browsers provide built-in inspectors to verify whether a page is in Standards Mode or Quirks Mode.',
      tools: [
        '`document.compatMode` in DevTools Console: Returns `"CSS1Compat"` for Standards Mode or `"BackCompat"` for Quirks Mode.',
        'Chrome DevTools Computed Box Model diagram: Interactive hover view of Margin, Border, Padding, and Content.',
        'CSS Cascade Layers (`@layer`): Modern spec managing specificity hierarchies.'
      ],
      standards: ['W3C CSS Cascading and Inheritance Level 5']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'css',
      explanation: 'The industry-standard CSS reset enforcing Standards Mode and predictable box sizing globally:',
      code: `/* 1. Global Universal Box-Sizing Reset */
*, *::before, *::after {
  box-sizing: border-box;
}

/* 2. Remove default browser margins and set accessible defaults */
* {
  margin: 0;
  padding: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/* 3. Responsive Images default */
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/* 4. Form controls inherit typography */
input, button, textarea, select {
  font: inherit;
}`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Putting comments or XML prolog before `<!DOCTYPE html>`.',
          reality: 'In Internet Explorer and older webview engines, placing any character—even an HTML comment `<!-- comment -->`—before the DOCTYPE triggers Quirks Mode immediately.'
        },
        {
          mistake: 'Vertical Margin Collapsing confusion.',
          reality: 'In CSS normal flow, adjacent vertical margins collapse into a single margin equal to the largest of the two (e.g. `margin-bottom: 20px` next to `margin-top: 30px` results in 30px spacing, not 50px). Margins inside Flexbox and CSS Grid containers do NOT collapse.'
        }
      ]
    }
  },

  '2.5-dom-architecture': {
    id: '2.5-dom-architecture',
    chapterId: 'chapter-2',
    chapterNumber: 2,
    chapterTitle: 'HTML5, DHTML, DOM & XML Architecture',
    code: '2.5',
    title: 'Document Object Model (DOM) Architecture & Node Mutations',
    subtitle: 'DOM Levels 1-3, live NodeLists vs static snapshots, MutationObserver, and virtual DOM diffing',
    difficulty: 'Intermediate',
    readTime: '20 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'The Document Object Model (DOM) is an object-oriented in-memory representation of an HTML or XML document. It defines the logical tree structure of nodes and exposes a programming API for languages like JavaScript to inspect, traverse, and modify the document.',
      analogy: 'If HTML code is a typed musical score on sheet paper, the DOM is the live orchestra actively playing that score in real time. JavaScript is the conductor: the conductor can point at the violin section (select a DOM node), tell them to play louder (change CSS style), or tell the percussionist to leave the stage (remove a node from the tree).',
      keyPoints: [
        'Tree Structure: Root `document` -> `documentElement` (`<html>`) -> `<head>` and `<body>` -> Element, Text, and Comment nodes.',
        'Node Types: `Node.ELEMENT_NODE` (1), `Node.TEXT_NODE` (3), `Node.COMMENT_NODE` (8), `Node.DOCUMENT_NODE` (9).',
        'Live vs Static Collections: `getElementsByTagName` returns a live updating NodeList; `querySelectorAll` returns a static snapshot.',
        'MutationObserver API: Modern asynchronous mechanism for observing DOM modifications without polling.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'The DOM tree is organized hierarchically with pointer references between parent, children, and siblings.',
      diagram: `
+------------------------------------------------------------------------+
|                      DOM Hierarchy Tree Structure                      |
+------------------------------------------------------------------------+

                             [ Document ]
                                  |
                           [ <html> Element ]
                             /          \\
            [ <head> Element ]          [ <body> Element ]
              /            \\                /         \\
     [ <title> ]      [ <meta> ]       [ <h1> ]     [ <main> ]
          |                               |             |
     [ "Home" ]                    [ "WebTech" ]    [ <p> Text ]
     (Text Node)                    (Text Node)
`,
      specifications: [
        'W3C DOM Level 1, 2, 3 Specifications.',
        'WHATWG DOM Living Standard: Nodes, Elements, Traversals, and Ranges.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'React, Vue & Svelte Virtual DOM Diffing',
      scenario: 'Reconciling 1,000 State Updates per Second in Real-Time Trading Dashboards',
      howItWorks: 'Directly mutating the real browser DOM in rapid succession causes repeated layout recalculations and style invalidations. React and Vue maintain a lightweight JavaScript object tree in memory ("Virtual DOM"). When market data updates, React diffs the previous virtual tree with the new virtual tree, computes the minimal batch of changes, and applies them to the real browser DOM in a single microtask.',
      impact: 'Enables rendering live updating financial dashboards at 60fps without browser freezing.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Browser performance tools inspect DOM size and identify expensive mutations.',
      tools: [
        '`MutationObserver`: Built-in native browser API to react to attribute, child list, and character data changes.',
        '`document.createDocumentFragment()`: Off-screen container for batched DOM insertions.',
        'Chrome DevTools DOM Breakpoints: Break on subtree modifications or attribute changes.'
      ],
      standards: ['WHATWG DOM Specification', 'W3C Geometry Interfaces']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'javascript',
      explanation: 'Using `DocumentFragment` for batched zero-reflow insertion and observing mutations with `MutationObserver`:',
      code: `// 1. Efficient Batched Insertion using DocumentFragment
const userContainer = document.getElementById('userList');
const fragment = document.createDocumentFragment();

const users = ['Alice', 'Bob', 'Charlie', 'David'];
users.forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  li.className = 'user-card';
  fragment.appendChild(li); // No reflow triggered yet!
});

// Single reflow: attach entire fragment at once
userContainer.appendChild(fragment);

// 2. Observing DOM Mutations Asynchronously
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      console.log(\`Added \${mutation.addedNodes.length} nodes to DOM\`);
    }
  }
});

observer.observe(userContainer, { childList: true, subtree: false });`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Interleaving DOM reads and DOM writes in loops (Layout Thrashing).',
          reality: 'If you read `element.offsetWidth` (forces layout computation) and immediately set `element.style.width` in a loop over 100 elements, the browser recalculates layout 100 times in 1 frame. Always batch reads first, then batch writes.'
        },
        {
          mistake: 'Using `innerHTML` to insert dynamic untrusted user data.',
          reality: 'Setting `element.innerHTML = userInput` creates immediate Cross-Site Scripting (XSS) vulnerabilities if the input contains `<img src=x onerror=alert(1)>`. Always use `element.textContent` or sanitized DOM methods.'
        }
      ]
    }
  },

  '2.6-xml-fundamentals': {
    id: '2.6-xml-fundamentals',
    chapterId: 'chapter-2',
    chapterNumber: 2,
    chapterTitle: 'HTML5, DHTML, DOM & XML Architecture',
    code: '2.6',
    title: 'XML Fundamentals, Tree Hierarchy & Namespaces',
    subtitle: 'Well-formedness vs validity, character encoding, CDATA, namespaces, and XML prologs',
    difficulty: 'Fundamental',
    readTime: '14 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'Extensible Markup Language (XML) is a text-based format designed to store and transport structured data. Unlike HTML which is designed to display data with fixed tags, XML has no predefined tags and is strictly designed to carry data with strict syntax rules.',
      analogy: 'HTML is like an illustrated storybook with preset fonts, headings, and images intended for human eyes. XML is like a locked customs manifest crate: every crate must have a certified tag, every tag opened must be strictly closed, and if even one comma is out of order, the customs scanner rejects the entire shipment on the spot ("Fatal Error on Malformed XML").',
      keyPoints: [
        'Well-Formed XML: Satisfies syntax rules (Single root element, strictly closed tags, case-sensitive, correctly nested, quoted attribute values).',
        'Valid XML: A well-formed document that ALSO conforms to an external schema definition (DTD or XSD).',
        'XML Prolog: `<?xml version="1.0" encoding="UTF-8"?>`.',
        'XML Namespaces (`xmlns`): Avoids tag naming collisions when merging XML vocabularies (e.g. `<bk:title>` for books vs `<emp:title>` for job titles).'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'XML structures data into a strict hierarchical tree where every element is an element node.',
      diagram: `
+------------------------------------------------------------------------+
|                      XML Document Tree Structure                       |
+------------------------------------------------------------------------+

<?xml version="1.0" encoding="UTF-8"?>             <- Prolog
<catalog xmlns:inv="http://store.com/inventory">  <- Root with Namespace
  <inv:book id="B101">                            <- Element with Attribute
    <title>Enterprise Web Architecture</title>     <- Child Element & Text
    <author>Martin Fowler</author>
    <price currency="USD">59.99</price>
    <notes><![CDATA[Special chars like < & > are unescaped inside CDATA]]></notes>
  </inv:book>
</catalog>
`,
      specifications: [
        'W3C XML 1.0 (Fifth Edition) Recommendation.',
        'W3C Namespaces in XML 1.0.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'SWIFT Banking Network, Microsoft Office (DOCX/XLSX) & Android Manifest',
      scenario: 'High-Integrity Financial Transactions and Office Document Open Formats',
      howItWorks: 'Microsoft Office `.docx` and `.xlsx` files are actually zipped folders containing pure XML documents (`word/document.xml`). In international banking, the SWIFT financial network mandates ISO 20022 XML formats for transferring billions of dollars between central banks because XML strictly validates data types and rejects malformed documents.',
      impact: 'Guarantees absolute data integrity without ambiguous interpretations across heterogeneous mainframe systems worldwide.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Engineers validate and format XML documents using command-line processors and linters.',
      tools: [
        'xmllint: Command-line XML parser used in CI/CD pipelines to verify well-formedness and schema validity.',
        'XPath: Query language used to navigate and select nodes in XML documents.',
        'Postman / SoapUI: Testing XML SOAP API payloads.'
      ],
      standards: ['W3C XML Core Working Group', 'ISO 20022 Financial Services Standard']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'xml',
      explanation: 'A well-formed XML document demonstrating namespaces, attributes, entity references, and a CDATA section:',
      code: `<?xml version="1.0" encoding="UTF-8"?>
<shipment xmlns:geo="https://standards.org/geo"
          xmlns:pkg="https://standards.org/package">
  <pkg:id>TRK-2026-9041</pkg:id>
  <pkg:contents>
    <item sku="S-881" quantity="2">
      <description>4K Display &amp; Mount</description> <!-- Escaped &amp; -->
      <weight unit="kg">8.4</weight>
    </item>
  </pkg:contents>
  <geo:destination>
    <geo:latitude>37.7749</geo:latitude>
    <geo:longitude>-122.4194</geo:longitude>
  </geo:destination>
  <!-- CDATA section allows raw characters without manual escaping -->
  <instructions><![CDATA[
    DO NOT BEND. Handle with care <fragile> & keep dry.
  ]]></instructions>
</shipment>`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Failing to escape XML special entities (`<`, `>`, `&`, `"`, `\').',
          reality: 'Unlike HTML which attempts error recovery, XML parsers are MANDATED by spec to fail immediately on syntax errors. A single unescaped `&` instead of `&amp;` causes the entire document parsing to terminate with a fatal error.'
        },
        {
          mistake: 'Vulnerability to XML External Entity (XXE) injection attacks.',
          reality: 'If your XML parser has external DTD entity resolution enabled, an attacker can submit `<!ENTITY xxe SYSTEM "file:///etc/passwd">`, leaking server configuration files. Production XML parsers MUST disable `resolveExternalEntities` and DTD processing.'
        }
      ]
    }
  },

  '2.7-xml-schemas-dtd-xsd': {
    id: '2.7-xml-schemas-dtd-xsd',
    chapterId: 'chapter-2',
    chapterNumber: 2,
    chapterTitle: 'HTML5, DHTML, DOM & XML Architecture',
    code: '2.7',
    title: 'XML Validation: DTD vs. XML Schema (XSD)',
    subtitle: 'Document Type Definitions vs strong typing, complex types, minOccurs, and regex facets',
    difficulty: 'Intermediate',
    readTime: '18 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'XML schema validation verifies that an XML document conforms to predefined contractual business rules: which elements are permitted, in what order, how many times they may occur, and what data types (integer, date, email) their values must contain.',
      analogy: 'A DTD (Document Type Definition) is like an old-fashioned paper form that checks: "Did you write something in the Date box?" but cannot tell if you wrote a valid date or a recipe for cake. An XSD (XML Schema Definition) is a computerized biometric scanner: it checks that the input is written in XML syntax, verifies that the date is in exact ISO 8601 format (`YYYY-MM-DD`), confirms the age is an integer between 18 and 120, and checks that postal codes match exact national regex patterns.',
      keyPoints: [
        'DTD (Document Type Definition): Legacy format using non-XML syntax; supports element sequences and attributes, but has NO data types (everything is string `#PCDATA`).',
        'XSD (XML Schema Definition): Written in XML itself; supports rich primitive data types (string, integer, decimal, boolean, dateTime).',
        'Cardinality Constraints: `minOccurs` and `maxOccurs` (e.g. `minOccurs="1" maxOccurs="unbounded"`).',
        'Facets & Restrictions: Restricting values using regex patterns, minimum/maximum ranges, and enumeration lists.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'Comparison between DTD and XSD architectures:',
      diagram: `
+------------------------------------------------------------------------+
|                     DTD vs. XML Schema (XSD) Matrix                    |
+------------------------------------------------------------------------+
| Feature              | DTD                             | XSD (W3C)     |
+----------------------+---------------------------------+---------------+
| Syntax               | Proprietary EBNF                | Pure XML      |
| Data Types           | None (Everything is PCDATA)     | 44+ Types     |
| Namespaces Support   | No (Collides easily)            | Full Native   |
| Extensibility        | Static                          | Object-Oriented|
| Custom Validation    | None                            | Regex, Range  |
+------------------------------------------------------------------------+

Validation Pipeline:
[Raw XML Doc] + [Schema (.xsd)] -> [Validating XML Processor] -> Valid / Errors
`,
      specifications: [
        'W3C XML Schema Part 1: Structures Second Edition.',
        'W3C XML Schema Part 2: Datatypes Second Edition.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'US Federal Aviation Administration (FAA) & Healthcare (HL7 CDA)',
      scenario: 'Validating Electronic Medical Records with Strict XSD Schema Validation',
      howItWorks: 'The Healthcare Information Technology standard (HL7 CDA) formats patient medical records in XML. Hospitals validate incoming patient charts against an official XSD schema. If a clinic accidentally enters a blood pressure reading as "high" instead of an integer like `120`, the XSD validator rejects the record before it corrupts electronic health records.',
      impact: 'Prevents clinical data corruption and medical dosage errors caused by malformed input strings.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'DevOps pipelines automate XSD schema validation to prevent corrupt data ingest.',
      tools: [
        'xmllint --schema schema.xsd data.xml: Validates XML document against an XSD schema in the shell.',
        'Apache Xerces: The gold-standard Java/C++ validating XML parser.',
        'xml2json / fast-xml-parser: Production Node.js libraries with schema validation.'
      ],
      standards: ['W3C XML Schema 1.1', 'ISO/IEC 19757 (RELAX NG)']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'xml',
      explanation: 'An XSD schema defining strict typing, minOccurs/maxOccurs cardinality, and regex pattern constraints:',
      code: `<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

  <xs:element name="employeeDatabase">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="employee" minOccurs="1" maxOccurs="unbounded">
          <xs:complexType>
            <xs:sequence>
              <!-- String type with custom regex constraint -->
              <xs:element name="badgeId">
                <xs:simpleType>
                  <xs:restriction base="xs:string">
                    <xs:pattern value="EMP-[0-9]{5}"/>
                  </xs:restriction>
                </xs:simpleType>
              </xs:element>

              <xs:element name="fullName" type="xs:string"/>
              
              <!-- Integer with range restriction -->
              <xs:element name="salary">
                <xs:simpleType>
                  <xs:restriction base="xs:decimal">
                    <xs:minInclusive value="30000.00"/>
                    <xs:maxInclusive value="500000.00"/>
                  </xs:restriction>
                </xs:simpleType>
              </xs:element>

              <xs:element name="hireDate" type="xs:date"/>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  </xs:element>

</xs:schema>`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Using DTD for new enterprise integrations in modern architectures.',
          reality: 'DTD lacks support for namespaces and has no typing: numbers, booleans, and dates are all treated as unstructured strings. Modern enterprise integrations require XSD or JSON Schema.'
        },
        {
          mistake: 'Failing to enforce `minOccurs` expectations.',
          reality: 'In XSD, elements default to `minOccurs="1"` and `maxOccurs="1"`. If an element is optional in your business domain and you forget to add `minOccurs="0"`, payloads omitting that field will be rejected.'
        }
      ]
    }
  },

  '2.8-presentation-xslt': {
    id: '2.8-presentation-xslt',
    chapterId: 'chapter-2',
    chapterNumber: 2,
    chapterTitle: 'HTML5, DHTML, DOM & XML Architecture',
    code: '2.8',
    title: 'XML Presentation & XSLT Transformations',
    subtitle: 'Extensible Stylesheet Language, template matching, XPath navigators, and transformation pipelines',
    difficulty: 'Intermediate',
    readTime: '18 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'Extensible Stylesheet Language Transformations (XSLT) is a declarative, template-based language used to transform XML documents into HTML, plain text, JSON, or alternative XML formats. It uses XPath to navigate nodes and match elements.',
      analogy: 'Imagine an raw raw inventory database (XML) containing product SKUs, prices, and descriptions. XSLT is like a master printing press stencil: you drop the raw XML into the stencil; the stencil loops through every `<product>` tag, formats the price with currency symbols, injects HTML table markup, applies alternating zebra stripes, and outputs a publication-ready HTML catalog.',
      keyPoints: [
        'XSL Family: XSLT (Transformations), XPath (Node navigation language), XSL-FO (Formatting Objects for PDF generation).',
        'Declarative Template Matching: `<xsl:template match="...">` fires when an element matches the specified XPath selector.',
        'Control Structures: `<xsl:for-each>`, `<xsl:if>`, `<xsl:choose>` (switch/case), `<xsl:sort>`.',
        'Output Modes: `<xsl:output method="html|xml|text" indent="yes"/>`.'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'The XSLT transformation pipeline takes an input XML tree and a stylesheet tree, producing a brand-new result tree.',
      diagram: `
+------------------------------------------------------------------------+
|                      XSLT Transformation Pipeline                      |
+------------------------------------------------------------------------+

 [ Source XML Document ]           [ XSLT Stylesheet (.xsl) ]
           |                                  |
           v                                  v
 [ Source Tree (DOM) ]              [ Template Match Rules ]
           \\                                 /
            +-------------------------------+
                            |
                            v
               [ XSLT Processing Engine ]
                   (Saxon / Xalan)
                            |
                            v
                   [ Result HTML Tree ]
                            |
                            v
             <!DOCTYPE html><html><body>...
`,
      specifications: [
        'W3C XSL Transformations (XSLT) Version 3.0.',
        'W3C XML Path Language (XPath) 3.1.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Internal Revenue Service (IRS) & Global Banking Invoicing',
      scenario: 'Automated Generation of Legally Binding Tax Documents and Invoices',
      howItWorks: 'Financial institutions store billions of tax filings and invoices as pure XML records. Rather than writing custom frontend rendering code for every government format, automated batch jobs pass the XML through certified XSLT templates to generate pixel-perfect HTML invoices and PDF tax returns on demand.',
      impact: 'Enables zero-touch generation of millions of invoices per day with 100% compliance across 40 different national formats.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Software pipelines execute XSLT transformations using standard libraries.',
      tools: [
        'xsltproc: High-performance C command-line tool based on libxslt.',
        'Saxon: Industrial-strength XSLT 3.0 / XQuery engine for Java and .NET.',
        '`XSLTProcessor` API in modern browsers: Direct client-side XML transformation.'
      ],
      standards: ['W3C XSLT Recommendation', 'W3C XPath Recommendation']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'xml',
      explanation: 'An XSLT stylesheet transforming raw product XML records into an HTML table with sorting and conditional formatting:',
      code: `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <!-- Root Template -->
  <xsl:template match="/inventory">
    <html lang="en">
      <head>
        <title>Product Catalog</title>
        <style>
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          .expensive { color: red; font-weight: bold; }
        </style>
      </head>
      <body>
        <h1>Enterprise Product Catalog</h1>
        <table>
          <thead>
            <tr>
              <th>SKU</th>
              <th>Product Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <!-- Loop and sort by price descending -->
            <xsl:for-each select="product">
              <xsl:sort select="price" data-type="number" order="descending"/>
              <tr>
                <td><xsl:value-of select="@sku"/></td>
                <td><xsl:value-of select="name"/></td>
                <td>
                  <xsl:attribute name="class">
                    <xsl:if test="price > 100">expensive</xsl:if>
                  </xsl:attribute>
                  $<xsl:value-of select="price"/>
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Treating XSLT as an imperative procedural programming language.',
          reality: 'XSLT is purely declarative and functional. Variables in XSLT (`<xsl:variable>`) are immutable: once set, their values cannot be reassigned or incremented like an index in a `for` loop. Iteration is accomplished via recursive template calls.'
        },
        {
          mistake: 'Running unbounded XSLT transformations on multi-gigabyte files.',
          reality: 'Traditional XSLT engines load the entire XML document into a DOM tree in memory. For a 2 GB XML file, the in-memory tree can consume 10-15 GB of RAM. Use XSLT 3.0 streaming or streaming SAX processors for large files.'
        }
      ]
    }
  },

  '2.9-xml-processors-dom-sax': {
    id: '2.9-xml-processors-dom-sax',
    chapterId: 'chapter-2',
    chapterNumber: 2,
    chapterTitle: 'HTML5, DHTML, DOM & XML Architecture',
    code: '2.9',
    title: 'XML Processing Models: DOM vs. SAX Parsers',
    subtitle: 'Memory-resident tree loading vs event-driven streaming parser architecture and benchmarks',
    difficulty: 'Intermediate',
    readTime: '17 min',

    overview: {
      heading: '1. Overview & Core Concept',
      lead: 'An XML processor (parser) reads XML character streams and provides programmatic access to document components. Two fundamental paradigms exist: DOM (in-memory tree model) and SAX (event-driven streaming model).',
      analogy: 'Imagine you need to read a 1,000-page historical registry. DOM parsing is like printing all 1,000 pages, spreading them across the floor of a basketball gym, and creating cross-reference sticky notes to every page. You can jump back and forth at will, but the gym is full of paper (High Memory). SAX parsing is like feeding the book into a high-speed paper shredder while taking notes on a notepad: as page 12 zooms by, you jot down the birthdate, immediately discard the paper, and move forward. You use almost zero floor space, but you cannot look backwards (Zero Memory Overhead, Forward-Only).',
      keyPoints: [
        'DOM Parser (Document Object Model): Tree-based. Reads the entire file, constructs an in-memory tree of nodes. Allows random access and bidirectional navigation.',
        'SAX Parser (Simple API for XML): Event-driven. Streams through bytes sequentially and emits callbacks (`startElement`, `endElement`, `characters`). Read-only, forward-only.',
        'StAX (Streaming API for XML): Pull-parser alternative to SAX where the client pulls events at its own pace.',
        'Memory Footprint: DOM consumes 5x to 10x the raw file size in RAM; SAX memory consumption is constant O(1).'
      ]
    },

    architecture: {
      heading: '2. Technical Architecture & Protocols',
      description: 'Comparing the internal architecture of DOM versus SAX processors:',
      diagram: `
+------------------------------------------------------------------------+
|                     DOM Parser vs. SAX Parser Architecture             |
+------------------------------------------------------------------------+

DOM Processing Pipeline (Tree-Based, High Memory):
[ XML File: 500 MB ]
        |
        v
[ Full Parsing into Heap Memory: ~3.5 GB RAM ]
        |
        v
[ Complete In-Memory Tree: Node -> Parent -> Child -> Siblings ]
(Allows random-access traversal, mutations, backward lookups)


SAX Processing Pipeline (Stream-Based, Constant O(1) Memory):
[ XML File: 500 MB ] -> [ Byte Stream ]
        |
        +---> startDocument()
        |
        +---> startElement("customer", id="42")
        |
        +---> characters("Alice Smith")   ---> [ Application processes immediately ]
        |                                       [ Discards from memory ]
        +---> endElement("customer")
        |
        v
Total Memory Consumed: ~12 KB!
`,
      specifications: [
        'W3C DOM Level 3 Core Specification.',
        'SAX 2.0 (Simple API for XML) Project Specification.'
      ]
    },

    reallife: {
      heading: '3. Real-Life Industry Example & Context',
      company: 'Wikipedia Dumps & Telecom Call Detail Records (CDR)',
      scenario: 'Processing a 100 GB Compressed XML Wikipedia Database Export',
      howItWorks: 'Wikipedia provides full database dumps as single compressed XML files reaching 100+ GB. Attempting to parse this file with a DOM parser would crash any server, requiring over 800 GB of RAM. Data science pipelines use SAX or StAX streaming parsers: as each `<page>` element passes through the event stream, the parser extracts title and text, writes to PostgreSQL, and frees memory immediately.',
      impact: 'Allows processing 100 GB XML files on a standard $20/month cloud VPS with just 2 GB of RAM.'
    },

    systems: {
      heading: '4. Systems, Tools & Standards Used in the Field',
      description: 'Production systems choose parser runtimes based on file size and read/write requirements.',
      tools: [
        'sax-js / expat: Ultra-fast streaming C/Node.js XML parsers.',
        'DOMParser (Browser): Native browser API for small in-memory XML fragments.',
        'Java `javax.xml.parsers.SAXParserFactory` and `DocumentBuilderFactory`.'
      ],
      standards: ['W3C XML Processors Conformance', 'OASIS XML Standards']
    },

    implementation: {
      heading: '5. Practical Implementation & Code',
      language: 'javascript',
      explanation: 'A Node.js streaming SAX parser processing XML records with zero memory accumulation:',
      code: `import sax from 'sax';
import fs from 'node:fs';

const strict = true;
const parser = sax.createStream(strict);

let currentTag = '';
let recordCount = 0;

parser.on('opentag', (node) => {
  currentTag = node.name;
  if (node.name === 'transaction') {
    recordCount++;
    console.log(\`Processing Transaction ID: \${node.attributes.id}\`);
  }
});

parser.on('text', (text) => {
  if (currentTag === 'amount' && text.trim()) {
    console.log(\`  Amount: $\${text.trim()}\`);
  }
});

parser.on('closetag', (tagName) => {
  currentTag = '';
});

parser.on('end', () => {
  console.log(\`Completed stream! Processed \${recordCount} records.\`);
});

// Stream huge 5 GB file with constant memory usage
fs.createReadStream('massive_transactions.xml').pipe(parser);`
    },

    pitfalls: {
      heading: '6. Common Pitfalls & Production Gotchas',
      items: [
        {
          mistake: 'Using a DOM parser for large file uploads on web servers.',
          reality: 'If a user uploads a 50 MB XML invoice and your server uses `DOMParser.parseFromString()`, Java or Node.js will allocate 400 MB of heap memory. Multiple concurrent uploads will trigger Out-Of-Memory (OOM) crashes and kill the web server process.'
        },
        {
          mistake: 'Assuming SAX `characters` event delivers all text in a single chunk.',
          reality: 'In SAX parsers, long text or strings containing entities may be fragmented across multiple consecutive `characters()` event callbacks. Robust SAX handlers must buffer and concatenate text chunks until `closetag` fires.'
        }
      ]
    }
  }
};
