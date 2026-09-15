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

Also needed for the **studio board** on Home ("Selected work" section). It lives in `src/data/board.js` and every row in it is a placeholder today:

| # | Item | Current value | Provide |
|---|---|---|---|
| 21 | Studio board entries | Five invented rows (Ordering app · Retail · In build · Erode, etc.) | 3 to 6 real, anonymised engagements. For each: project type (e.g. "Ordering app"), sector (e.g. "Retail"), stage as a number 1–5 (1 Discovery · 2 Scoping · 3 In build · 4 Launching · 5 Live), and city. No client names |
| 22 | Board "updated" month | `September 2026` | The month the rows were last checked. Someone must own updating this monthly, or the line will be removed |

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
- "Selected work": heading "On the board this month.", intro: "Most of what we build ships under NDA. So instead of case studies, here's the board: what's in flight right now, names left off. Ask for a private walk-through and we'll show you more." Below it, a dark "Studio board" panel listing engagements as rows (project · sector · stage chip · progress rail · city), with counts ("4 in flight · 1 live"), an "Updated <month>" line, the note "Names and details withheld under NDA." and the button "Request a private walk-through". ⚠ All five rows are placeholders — see Section 1, items 21–22.
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

Rebuilt as a five-part page. All copy below is new draft in the brand voice; facts are pulled from Section 1.

- **Opening.** Breadcrumb Home / About. Title: "A small studio in [City]. Software you can run a business on." Lede: "[Company Name] started in [Year]. We design, build and look after mobile apps, web applications and secure digital systems for businesses in [City], across [State] and beyond — and we take on reliable data entry when the paperwork is the problem." Facts strip: Founded [Year] · Based in [City], [State] · We build: Mobile · Web · Systems · Data entry.
- **"Why we started."** On the dark band: the thesis "We started this studio to be the other option." then three short columns, signed "— [Company Name], [City]":
  - The problem — "Most businesses around us run on WhatsApp, spreadsheets and memory. It works — until the day it doesn't. And the software that could fix it usually comes from far away, priced for someone else, with nobody to call after launch."
  - The other option — "A team nearby that listens first, builds only what's needed, and stays around to keep it running. Built in Erode, for the businesses around it — and for anyone further away who wants to be treated the same way."
  - The honest bit — "We're a young studio, and we say so. What we lack in years we make up for in attention — a few projects at a time, senior people on each one, and code you own outright."
  ⚠ Confirms "a few projects at a time" and "senior people on each one".
- **"Three lines taped above the desk."** Intro: "We don't have a manifesto. We have these, and we test every engagement against them." The three principles are unchanged: Solve the real problem · Ship something usable early · Write code people can own.
- **"What we build."** Intro: "Four things, done properly. If your problem doesn't fit one of them, we'll say so on the first call." A menu of four link rows, each with a one-liner and a "Replaces ·" tag:
  - Mobile apps — "iOS and Android apps your staff and customers actually use — orders, bookings, field work, payments." Replaces: WhatsApp orders and notebooks → Services
  - Web applications — "Dashboards, portals and admin systems that replace the spreadsheet — fast, secure, and editable by you." Replaces: Spreadsheets and email threads → Services
  - Secure digital systems — "Roles, backups and sensible hosting, so the system still holds up when the business is three times the size." Replaces: Shared laptops and USB backups → Services
  - Data entry services — "Paper, PDFs and legacy records digitised to an agreed checklist — verified, on schedule, ready to import." Replaces: Cupboards of paper → Contact
- **"Who you'll work with."** Intro: "No account managers, no hand-offs. The people you meet on the first call are the people who build it." Four roles as a list: A lead who owns it ("One person accountable from discovery to handover. They run the weekly demo and they answer the phone."), Design ("Screens people understand without training. We design with your staff, not just for them."), Engineering ("Senior engineers who write code your future team can read — web, iOS and Android."), Data entry team ("A supervised team working to your checklist, with verification built into the process."). Beside it, a diagram: You → A lead who owns it → Design / Engineering / Data entry team, captioned "One line of contact. One team behind it." Closes with "We're hiring in [City]." → Careers. ⚠ Confirm this is how engagements are actually staffed, especially the data entry team.
- Then the shared Trust band and Final CTA. The shared "Why teams choose us" grid no longer appears on About.
- ⚠ Still no names, headcount or photos. If the company wants a real team section, supply names, roles, short bios and headshots and it will replace or extend "Who you'll work with".

### 4.4 Services hub (`/services`)

- Badge "Your product engineering team". Headline "Everything your product needs — shipped."
- Lede: "[Company Name] isn't a vendor you brief and chase. It's a small, senior product team that owns the build end-to-end…"
- Three outcome bullets: "Faster time-to-market", "AI built in, not bolted on", "Senior team, total ownership".
- Four stats: "6 Service areas", "3 Platforms (web · iOS · Android)", "[Year] Founded · [State]", "1 Accountable team".
- "Why teams choose us" on this page is a comparison table — Typical agency · Body shop · Atmytech — with the six reasons as rows ("You talk to the people writing the code", "Discovery before any code is written", "One team owns the outcome, start to finish", "Code you own outright, documented and readable", "Something usable early, then improved with evidence", "A fixed quote and honest timelines up front") marked Yes / Sometimes / Rarely, and a closing note: "Generalisations, admittedly — there are good agencies and good contractors. This is the shape we've chosen, and we hold ourselves to it." ⚠ Confirm the marks for the agency and body-shop columns; they are the studio's generalisations. Other pages keep the plain six-reason list.
- Animated hub with six satellite cards and status labels ("Shipping", "Live", "Beta soon", "Pilot live", "In design", "Active"). ⚠ These labels are decorative; confirm they do not read as false claims.
- "Six service areas. One accountable team." — an indexed hub: a sticky index of the six areas on the left, one block per area on the right, each with a description and four bullets:
  1. MVP Development
  2. Web Applications: bullets include "React / Laravel / Node". ⚠ Confirm the stack you want to advertise.
  3. Mobile Applications: bullets include "React Native + native". ⚠ Confirm.
  4. AI / ML & Chatbots: "Predictive analytics", "RAG & LLM assistants", "Support & conversion bots", "Production deployments".
  5. IoT & AR.
  6. Technology Consulting.
- ⚠ Web Applications and Mobile Applications have no dedicated page. In the hub their link reads "Talk to us about this" and goes to Contact; the other four link to their pages. Decide whether Web and Mobile need their own pages like MVP and Consulting. If yes, supply copy for each.

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

Rebuilt for the candidate. The client-facing "Why teams choose us" and "Book a discovery call" sections no longer appear on this page. Open roles live in `src/data/roles.js` (edit there; the page, the count and the page title update).

- **Opening.** Centred. Title: "Come build with us." Lede: "[Three] open roles in [City], hybrid, full-time. Small team, senior people, real products." Then the open roles as pill links (team · title →) straight to their entries, and a footnote "Apply by email · we read every one." ⚠ New headline and lede replace "Work where your code ships." — confirm; and "we read every one" is a promise.
- **Open roles** (dark band). Intro: "All full-time and hybrid in [City]. Apply by email — each button drafts one with the role in the subject line; add your CV or portfolio and a line about what you'd like to work on." One column per role — team, title, a one-line description (⚠ draft, confirm each), type/location tags — with an "Apply for this role" button that opens an email with subject "Application: <role>":
  1. Frontend Engineer (React) — "Build the web apps and admin dashboards our clients run their businesses on. React, clean components, and real users from the first month."
  2. UI / UX Designer — "Design screens people understand without training — with the client's staff in the room, then alongside the engineers in the build."
  3. Web Designer — "Marketing sites and product pages that load fast and read clearly. Design them, build them with the team, see them live."
  If there are no openings, the list is replaced automatically with "No open roles right now…".
- **"What it's like here."** Intro: "No ping-pong table copy. Four things that are actually true about the job." Four points: Real products, real clients · Small & senior · Ownership from day one ("…you demo it to the client every week…") · Hybrid, in Erode ("Part of the week together in Erode, the rest wherever you work best."). ⚠ Confirm the weekly client demo and the hybrid arrangement.
- **"How hiring works here."** Intro: "Four emails, usually inside two weeks. This is roughly what the thread looks like from your side." Then an illustrative email thread — Day 1 "Write to us" (the candidate's application), Day 2 "A short call" ("Could you do half an hour on Thursday at 4? You'd be talking to the person you'd actually work with."), Day 5 "Talk through your work" ("bring something you've built… Nothing to prepare, no take-home."), Day 11 "A straight answer" (an offer). Side note: "And if it's a no, the last email still arrives — with the reason. We don't leave people waiting." Email address below. ⚠ The thread is illustrative but describes the real process — confirm the two-week pace, the half-hour call with the future colleague, no take-home task, and replying to everyone with a reason.
- **"Don't see your role? Write anyway."** with the existing "If you'd rather solve the problem than wait for instructions…" copy, a "Write to us" email button and the address.

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
4. **Web and Mobile services have no pages.** On the Services hub their blocks link to Contact ("Talk to us about this") instead; the hero satellites and footer still point at the `#web` / `#mobile` anchors, which now land on the right block.
5. **Studio board rows are invented.** The old "Coming soon" case-study cards (with the "fintech founder" / "seed round" stories) have been replaced by the studio board, but its five rows in `src/data/board.js` are still placeholders and must be replaced with real, anonymised engagements before launch (Section 1, items 21–22).
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
