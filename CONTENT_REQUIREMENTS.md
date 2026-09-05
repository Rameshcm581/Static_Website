# Website Content Requirements

**Site:** Studio marketing website (`pinch/frontend`, Vite + React)
**Reviewed on:** 2026-09-04, every route rendered in headless Chrome at 1440 px
**Purpose:** Everything the site still needs from the company before it can go live. Section 1 is mandatory. Sections 2 to 5 are assets, links and copy to confirm. Section 6 is what the developer needs on the technical side. Section 7 lists issues found during the check.

How the site is wired: every company fact lives in one file, `src/data/company.js`. Fill the table in Section 1 and the developer updates that file once. Page titles, hero, trust band, contact page, footer, careers locations and the chat mock all update from it. The static `index.html` and the logo file must be updated separately.

---

## 0. Current state at a glance

| Area | Status |
|---|---|
| Page structure and design | Done. 7 pages + 404 |
| Draft copy on every page | Written, needs company review and sign off |
| Company facts (name, legal, contact, address, dates) | **All placeholders.** Visible on every page |
| Logo and favicon | Placeholder SVG that reads "LOGO" |
| Hero photo | Placeholder box labelled "TEAM PHOTO · PLACEHOLDER" |
| Case studies | Three "Coming soon" cards with invented summaries |
| Social links, Privacy, Terms, Cookies | Dead links (`#`) in the footer of every page |
| Contact form and newsletter | Work in mock mode only. No backend, no inbox |
| Open roles | Four sample roles that need confirming |
| Analytics, OG image, sitemap, robots.txt | Not present |

Placeholder tokens visible per page (from the rendered DOM):

| Page | `[Company Name]` | `[State]` | `[City]` | `[Country]` | `[Registered Office]` | `[Legal Entity Name]` | `[Registration No.]` | `[Year]` | `[Registrar]` | `[Date]` | example email | dummy phone |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Home | 3 | 6 | 3 | 4 | 3 | 2 | 2 | 2 | 2 | 1 | 2 | 2 |
| About | 3 | 8 | 3 | 4 | 3 | 3 | 3 | 3 | 2 | 2 | 2 | 2 |
| Services | 2 | 4 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 |
| MVP Development | 1 | 3 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 1 |
| Technology Consulting | 1 | 3 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 1 |
| Careers | 1 | 3 | 5 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 2 | 1 |
| Contact | 1 | 6 | 4 | 4 | 4 | 2 | 2 | 0 | 1 | 0 | 3 | 3 |
| 404 | 1 | 3 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 1 |

---

## 1. Mandatory: company facts (fill every row)

These are the values in `src/data/company.js`. Provide the exact text you want shown.

| # | Field | Current placeholder | Where it appears | Provide | Notes / format |
|---|---|---|---|---|---|
| 1 | Brand name | `[Company Name]` | Browser tab titles, hero, chat mock, About, Careers, Contact, 404, logo alt text | | Short trading name, e.g. "Pinch" |
| 2 | Brand initials | `CN` | Avatar in the "Your product team" chat mock on Home | | 1 to 2 letters |
| 3 | Legal entity name | `[Legal Entity Name]` | Trust band, About banner, Contact banner, footer copyright | | Exactly as registered, e.g. "… Private Limited" |
| 4 | Short legal name | `[Legal Entity Name]` | Contact banner meta card | | May be same as 3 |
| 5 | Registration label | `CIN` | Trust band, footer, About, Contact | | Keep `CIN` for an Indian company, or give the correct label |
| 6 | Registration number | `[Registration No.]` | Same as above | | Full CIN / registration number |
| 7 | Registrar | `[Registrar]` | Hero stat "Founded · …", trust band, About, Contact | | e.g. "RoC Chennai" |
| 8 | Founded year | `[Year]` | Hero stat, trust band, About banner, Services stats | | 4 digits |
| 9 | Incorporation date | `[Date]` | Trust band, About banner | | e.g. "12 March 2021" |
| 10 | Company status | `Active` | Trust band, About banner | | Confirm or change |
| 11 | Contact email | `hello@example.com` | Every mailto link, trust band, footer, Contact page, Careers apply links, form success message | | One monitored inbox |
| 12 | Phone | `+91 00000 00000` | Trust band, footer, Contact page (tel: link is generated) | | With country code |
| 13 | Operations city | `[City]` | Hero FAQ, trust band, footer, Contact, every Careers role location | | e.g. "Coimbatore" |
| 14 | Registered office | `[Registered Office]` | Trust band, footer, Contact, FAQ | | Full postal address or city, as you want it public |
| 15 | State | `[State]` | Hero pill, footer intro, About title, Careers meta, Contact | | e.g. "Tamil Nadu" |
| 16 | Country | `[Country]` | Hero pill, trust band, Contact, FAQ | | e.g. "India" |
| 17 | Website URL | `https://example.com/` | `og:url` in `index.html` | | Final production domain with https |
| 18 | Copyright year | `2026` | Footer | | Confirm, or ask for auto-year |

Also needed for `index.html` (seen by crawlers and social previews before the app loads):

| # | Item | Current value | Provide |
|---|---|---|---|
| 19 | Static page title | `[Company Name] \| Product Engineering & Digital Solutions Studio` | Final title, under 60 characters ideal |
| 20 | Meta description | "We turn product ideas into digital solutions that solve — MVP development, web & mobile apps, and technology consulting." | Confirm or rewrite, under 160 characters |

---

## 2. Brand assets

| # | Asset | Current state | Spec | Provide |
|---|---|---|---|---|
| 1 | Logo, horizontal lockup | `public/assets/images/logo-placeholder.svg` (orange square + "LOGO") | SVG preferred. Renders at 34 px tall in the nav (30 px on mobile) and 40 px in the footer. Must work on the dark navy nav pill and the cream footer, so supply a dark-background variant if the primary is dark | |
| 2 | Logo mark for favicon | Same placeholder SVG is used as favicon | Square SVG or 512 × 512 PNG. Today the wide lockup is squeezed into the tab icon | |
| 3 | Hero photo | Empty gradient box labelled "TEAM PHOTO · PLACEHOLDER", top right of Home | About 570 × 620 px on desktop, so near square. Supply at least 1200 × 1300 px, JPG or WebP. Four glass cards float over it, so choose an image with a calm area on the right two thirds. Hidden below 640 px | |
| 4 | Social share image (OG image) | None | 1200 × 630 px JPG or PNG with logo and one line of positioning. Used by LinkedIn, WhatsApp, X previews | |
| 5 | Brand colours | Orange `#F26B2C`, navy `#1F3354`, cream `#F5F1E8` | Confirm these are the brand colours or supply the brand palette | |
| 6 | Fonts | Cormorant Garamond (headings), Inter (body), JetBrains Mono (labels), loaded from Google Fonts | Confirm, or supply licensed brand fonts | |
| 7 | Team or office photos (optional) | None | Only if you want them on About. Currently About has no imagery | |

---

## 3. Links and legal pages

Every page's footer has six dead links. Each needs a real destination or must be removed.

| # | Link | Current | Provide |
|---|---|---|---|
| 1 | LinkedIn | `#` | Company page URL |
| 2 | Twitter / X | `#` | Profile URL, or say "remove" |
| 3 | Instagram | `#` | Profile URL, or say "remove" |
| 4 | Privacy policy | `#` | Policy text (a page will be built), or an external URL |
| 5 | Terms | `#` | Terms text, or an external URL |
| 6 | Cookies | `#` | Cookie policy text, or say "remove". Note: the site sets no cookies today, but Google Fonts and any analytics you add may need a notice |

---

## 4. Copy to review, page by page

All copy below is already written as a draft in the brand voice. Mark each item **Approve**, **Edit** (give the new text) or **Remove**. Items marked ⚠ contain claims or facts only the company can confirm.

### 4.1 Global (navigation and footer)

- Nav links: Home, About, Services, Careers, Contact.
- Nav buttons: "What we do" (goes to Services) and "Start a project" (goes to Contact).
- Floating "Start a project" pill that appears mid-scroll on every page except Contact.
- Footer intro: "A product engineering and digital-transformation studio from [State]. We turn product ideas into digital solutions that solve."
- Footer tagline: "Code your team can own."
- Footer service links: MVP development, Web applications, Mobile applications, AI / ML & chatbots, Technology consulting.
- Newsletter heading "Build with us" and blurb: "An occasional letter — what we're learning building products. No spam, easy to leave." ⚠ Only keep if you will actually send one.
- Copyright line format: "© 2026 [Legal Entity Name] · CIN [Registration No.] · [State], [Country]".

### 4.2 Home (`/`)

- Hero pill: "A product engineering studio · [State], [Country]".
- Hero headline: "Digital solutions for real-world problems."
- Hero lede: "From a napkin sketch to a shipped product, [Company Name] turns ideas into software that earns its place. We design, build, and scale web and mobile products — and stay long enough to make them work."
- Hero buttons: "Start your project", "See what we build".
- Hero stats: "[Year] Founded · [Registrar]", "Web · iOS · Android Engineering across platforms", "AI · IoT · AR Consulting that ships". ⚠ Confirm you offer all of IoT and AR.
- Four floating cards over the photo: "MVP build · v1.0 ready", "Discovery → scope locked", "AI/ML & chatbot advisory", "Code you own", each with a one-line subtitle and a status tag.
- "What we do" section: heading "Three ways we help you ship.", intro paragraph, and three pillars (MVP development, Web & app engineering, Technology consulting) with one sentence each.
- Chat mock: "Your product team · [Company Name] · Online", eight scrolling status messages (e.g. "Designs reviewed with founder Tuesday", "Auth + payments scaffold deployed"), footer "Weekly progress posted". ⚠ Confirm "weekly progress" matches how you actually work.
- "Why teams choose us": heading "A small team that acts like yours.", intro, six cards: Small & senior, Real-problem first, Outcome-owned, Code you own, Ship early then improve, Honest scope & timelines. ⚠ The last card promises "Fixed quotes, no surprises".
- "How we work": five steps Discovery, Scope & design, Build, Launch, Improve, each with a paragraph. ⚠ Step 3 promises "Weekly demos" and "a working preview environment early".
- "Selected work": heading "Quietly building behind the scenes.", intro says work is under NDA and a case-study page is coming soon. Three "Coming soon" cards with invented one-liners:
  - "A fintech founder's first product, built from sketch to v1.0 and used in a seed round."
  - "A custom chatbot replacing tier-1 support for a B2B SaaS team in southern India."
  - "A multi-tenant SaaS platform with payments, dashboards, and a reporting engine."
  ⚠ Replace with real NDA-safe summaries, or approve the text as anonymised, or remove the section. Button "Request a private walk-through".
- Trust band: four cards built from Section 1 facts (Registered company, location, Founded, Get in touch).
- FAQ: heading "Asked on every call.", six questions. ⚠ Confirm these answers:
  1. What kinds of products do you build?
  2. Where are you based and where do you work? (uses city, state, office, country)
  3. How do you price engagements? Says fixed scope and timelines after discovery, plus monthly retainers.
  4. Do we own the code and the IP? Says yes, everything transfers, no licences retained.
  5. Can you work with our existing engineering team? Says yes, plus team augmentation.
  6. How quickly can you start? Says "typically within two to three weeks of a signed scope".
- Final CTA: "Have an idea worth building? Let's pressure-test it." with "A free discovery call…" paragraph and buttons "Book a free discovery call", "See what we build". ⚠ Confirms the discovery call is free.

### 4.3 About (`/about`)

- Breadcrumb Home / About. Eyebrow "About [Company Name]".
- Title: "A product engineering team from [State]."
- Lede: "[Company Name] is a product-engineering studio founded in [Year] and based in [State], [Country]. We partner with founders and businesses that have a problem worth solving — and want a team that treats the outcome as its own."
- Three meta cards: Founded, location, Registered company (from Section 1).
- "What we believe": "Three principles we don't compromise on." with intro "We don't have a manifesto. We have these three lines, taped above the desk…" and cards: Solve the real problem, Ship something usable early, Write code people can own.
- Then the shared Why, Trust band and Final CTA sections.
- ⚠ There is no team section, founder story, headcount or photos. Decide whether About needs them. If yes, supply names, roles, short bios and headshots.

### 4.4 Services hub (`/services`)

- Badge "Your product engineering team". Headline "Everything your product needs — shipped."
- Lede: "[Company Name] isn't a vendor you brief and chase. It's a small, senior product team that owns the build end-to-end…"
- Three outcome bullets: "Faster time-to-market", "AI built in, not bolted on", "Senior team, total ownership".
- Four stats: "6 Service areas", "3 Platforms (web · iOS · Android)", "[Year] Founded · [State]", "1 Accountable team".
- Animated hub with six satellite cards and status labels ("Shipping", "Live", "Beta soon", "Pilot live", "In design", "Active"). ⚠ These labels are decorative; confirm they do not read as false claims.
- "Six service areas. One accountable team." grid, each with a description and four bullets:
  1. MVP Development
  2. Web Applications: bullets include "React / Laravel / Node". ⚠ Confirm the stack you want to advertise.
  3. Mobile Applications: bullets include "React Native + native". ⚠ Confirm.
  4. AI / ML & Chatbots: "Predictive analytics", "RAG & LLM assistants", "Support & conversion bots", "Production deployments".
  5. IoT & AR.
  6. Technology Consulting.
- ⚠ Web Applications and Mobile Applications have no dedicated page. Their "Explore service" link only scrolls within this page. Decide whether they need their own pages like MVP and Consulting. If yes, supply copy for each.

### 4.5 MVP Development (`/services/mvp-development`)

- Title "Build the right thing first." and lede about isolating the one feature that proves the idea.
- Four banner cards: Investor-ready prototype, Single-feature focus, A working v1.0, End-to-end ownership.
- "What you get" grid, six cards: Investor-ready prototype, Single-feature focus, A working v1.0, End-to-end support, Analytics from day one, A path beyond v1.0.
- Shared process and Final CTA sections.
- ⚠ Optional: typical MVP timeline and starting price if you want them public.

### 4.6 Technology Consulting (`/services/technology-consulting`)

- Title "Advisors who also build." and lede "Most consultants hand you a slide deck and leave. We stay through implementation…"
- Four banner cards: AI / ML adoption, Conversational AI, IoT system design, Augmented reality.
- "Where we help" grid. ⚠ Heading says "Five areas of strategic depth." but six cards are listed: AI & machine learning, Conversational AI & chatbots, IoT, Augmented reality, Conversion-focused UX, Team augmentation. Confirm the final list so the heading can match.
- Shared Why and Final CTA sections.

### 4.7 Careers (`/careers`)

- Title "Work where your code ships." and lede.
- Three banner cards: Small & senior team, Real products real clients, Ownership from day one.
- Open roles, all shown as "Full-time · [City] · Hybrid" and applying opens an email to the contact address with subject "Application: <role>": ⚠ confirm each
  1. PHP / Laravel Developer (Engineering)
  2. Frontend Engineer (React) (Engineering)
  3. UI / UX Designer (Design)
  4. Web Designer (Design)
  Provide for each real opening: title, team, employment type, location and work mode, and whether applications go to the main email or a separate careers address.
- "Don't see your role?" block with the contact email button.
- ⚠ If there are no openings, say so and the list will be replaced with a "no open roles" message.

### 4.8 Contact (`/contact`)

- Title "Let's talk about what you're building." and lede.
- Four banner cards: Email, Phone, location, legal entity (from Section 1).
- Section heading "One short form. One business day reply." ⚠ Confirms a one-business-day reply. Also appears in the form footer and success message.
- Channels list: Email, Phone, Operations, Registered office, Careers link.
- Form fields: Name, Email, Company, Project type, Budget range, One line about the project.
  - Project types: MVP development, Web application, Mobile application, AI / ML or chatbot, IoT or AR, Technology consulting, Not sure yet.
  - Budget ranges: Under ₹5L, ₹5L – ₹15L, ₹15L – ₹40L, ₹40L+, Open / unsure. ⚠ Confirm currency and bands, or remove the field.
- Form footer: "We reply within one business day. Submissions are confidential."
- Success message: "Thanks — we have it. We'll be in touch within one business day, from a real person…"
- ⚠ Optional: office hours, WhatsApp number, map embed, or a calendar booking link for the "Book a discovery call" buttons.

### 4.9 Not found (`/anything-else`)

- "That page isn't here." with buttons "Back to home" and "Contact us". Nothing to supply.

---

## 5. Optional content that would strengthen the site

| Item | Why |
|---|---|
| Client logos or testimonials | Nothing on the site today proves past work. Even three quotes with names and roles would help |
| One or two real case studies | Replaces the "Coming soon" cards. Need: client (or anonymised industry), problem, what was built, outcome, permission to publish |
| Team section for About | Names, roles, short bios, headshots |
| Numbers | Projects shipped, years of experience, team size, for the hero and Services stats |
| Discovery call booking link | Calendly or similar, so "Book a free discovery call" buttons do not just go to the form |
| Blog or newsletter plan | Only if the footer newsletter is kept |

---

## 6. Technical items needed from the company

| # | Item | Detail |
|---|---|---|
| 1 | Where contact enquiries should go | The form posts to `/contact/enquiry` with name, email, company, projectType, budget, message. No backend exists. Decide: build an API, or use a form service (Formspree, Web3Forms, etc.), or email delivery. Give the destination inbox |
| 2 | Newsletter destination | Footer form posts to `/newsletter/subscribe` with email. Give the mailing-list provider (Mailchimp, Brevo, etc.) or remove the form |
| 3 | Spam protection | Confirm whether to add reCAPTCHA / Turnstile to the form, and supply the site key |
| 4 | Production domain and hosting | Domain name, DNS access, hosting target (Vercel, Netlify, cPanel, own VPS). Needed for `og:url`, sitemap and SPA routing rules |
| 5 | Analytics | Google Analytics 4 measurement ID, Meta pixel or none. Nothing is installed |
| 6 | Search Console / verification tokens | If you want the site indexed and monitored |
| 7 | SEO extras | Sitemap and robots.txt will be generated once the domain is known. Confirm which pages should be indexed |
| 8 | Legal pages | Supply the text from Section 3 or confirm links to be removed |

---

## 7. Issues found during the check

Content or link problems that need a decision, separate from the placeholders:

1. **Consulting heading count is wrong.** "Five areas of strategic depth." sits above six cards. Fix the number or drop a card.
2. **Six dead footer links on every page.** LinkedIn, Twitter, Instagram, Privacy, Terms, Cookies all point to `#`.
3. **Two footer links go to the same page.** "AI / ML & chatbots" and "Technology consulting" both open the consulting page.
4. **Web and Mobile services have no pages.** Their links only jump to anchors on the Services hub.
5. **Case-study cards use invented client stories.** They read as real ("fintech founder", "seed round", "southern India") and must be approved or replaced.
6. **Hero photo placeholder text is visible to visitors** on desktop and tablet widths.
7. **Favicon is the wide logo lockup**, which will look wrong in the browser tab. Needs a square mark.
8. **Copyright year is hard-coded to 2026.**
9. **Static title and description in `index.html` duplicate the Home page values.** Both must be updated, otherwise crawlers and social previews show the placeholder brand.
10. **Forms only work in mock mode** (`VITE_MOCK_API=true`). Submissions currently go nowhere.
11. **No OG image, analytics, sitemap or robots.txt.**
12. **Budget field assumes Indian rupees.** Fine for an Indian audience, confirm if you sell abroad.

---

## 8. How to return this

1. Fill the "Provide" column in Sections 1, 2 and 3, or reply with the row numbers and values.
2. Go through Section 4 and mark each bullet Approve / Edit / Remove. For Edit, include the replacement text.
3. Send assets as files: logo SVG (plus dark variant), square favicon mark, hero photo, OG image, any team photos.
4. Answer the Section 6 table so the forms and hosting can be set up.

Once received, the developer updates `src/data/company.js`, `index.html`, the logo files and the page copy, then runs `npm run lint` and `npm run build` and re-checks all routes at 320, 768, 1024 and 1440 px.
