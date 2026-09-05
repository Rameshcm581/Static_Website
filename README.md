# Studio Frontend

Marketing site for a product-engineering studio, built as a Vite + React app that follows the team frontend rules (`claude-code-rules/frontend`). All brand-specific facts are placeholders — see **Branding** below.

## Stack

- Vite 8 · React 19 · React Router 7
- Tailwind CSS 3 (preflight disabled — the brand stylesheet owns the reset) + scoped CSS per component/page
- Axios API layer · PropTypes · ESLint 9 flat config (zero-warning policy)

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint       # must be clean before any change is done
npm run build      # production build to dist/
npm run preview    # serve dist/ locally
```

Copy `.env.example` to `.env`. With `VITE_MOCK_API=true` (default) the contact and newsletter forms resolve locally; set it to `false` and point `VITE_API_BASE_URL` at the backend once the `/contact/enquiry` and `/newsletter/subscribe` endpoints exist.

## Branding

Every company-specific value lives in one place: [`src/data/company.js`](src/data/company.js). Fill in the placeholders there and the whole site updates — page titles, meta descriptions, hero copy, trust band, contact page, footer, careers locations, and the chat mock.

| Field | Placeholder | Used for |
|---|---|---|
| `name` | `[Company Name]` | brand name everywhere, `<title>` tags, alt text |
| `initials` | `CN` | chat avatar on the home page |
| `legalName` / `shortLegalName` | `[Legal Entity Name]` | trust band, footer copyright, contact banner |
| `registrationLabel` / `registrationNumber` | `CIN` / `[Registration No.]` | company registration line |
| `registrar` | `[Registrar]` | "Founded · …" lines |
| `foundedYear` / `incorporatedOn` / `status` | `[Year]` / `[Date]` / `Active` | founding facts |
| `email` | `hello@example.com` | all mailto links, careers apply links |
| `phone` | `+91 00000 00000` | contact page, trust band, footer (tel: link is derived) |
| `operationsCity` / `registeredOffice` / `state` / `country` | `[City]` … `[Country]` | addresses, FAQ, hero pill, role locations |
| `website` | `https://example.com/` | reference only |

Also replace:
- `public/assets/images/logo-placeholder.svg` — the logo used in the nav, footer and favicon (keep the file name or update `NavBar.jsx`, `Footer.jsx` and `index.html`).
- `index.html` — static `<title>`, meta description and `og:url` (used before React hydrates and by crawlers).
- The hero stage label `TEAM PHOTO · PLACEHOLDER` in `src/Home/Home/styles/Hero.css` once a real image is in place.

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/services` | Services hub (`#web`, `#mobile` anchors) |
| `/services/mvp-development` | MVP Development |
| `/services/technology-consulting` | Technology Consulting |
| `/careers` | Careers |
| `/contact` | Contact |
| `*` | Not found |

## Structure

```
public/assets/images/        logo-placeholder.svg  (referenced as /assets/images/logo-placeholder.svg)
src/
  Api/apicall/               axiosInstance.js  contactApi.js  index.js
  Components/                shared UI used by more than one menu (+ styles/)
                             Icon · Button · SectionHead · FeatureCards · WhySection ·
                             ProcessSection · TrustBand · FaqSection · FinalCta · PageBanner
  context/                   MenuContext.jsx  (mobile nav open/close)
  hooks/                     usePageMeta · useScrollToTop · useScrollVisibility ·
                             useContactForm · useNewsletterForm
  data/                      navigation.js (ROUTES, NAV_LINKS) · company.js (brand placeholders)
  layout/                    Layout · NavBar · Footer · NewsletterForm · FloatingCta (+ styles/)
  common/pages/              NotFound.jsx (+ styles/)
  Home/                      pages/Home.jsx · Home/{Hero,FloatCard,WhatWeDo,SelectedWork}.jsx
  About/                     pages/About.jsx · About/Believe.jsx
  Services/                  pages/{Services,MvpDevelopment,TechnologyConsulting}.jsx
                             Services/{ServicesHero,ServiceGrid}.jsx
                             MvpDevelopment/MvpDeliverables.jsx
                             TechnologyConsulting/ConsultingAreas.jsx
  Careers/                   pages/Careers.jsx · Careers/Roles.jsx
  Contact/                   pages/Contact.jsx · Contact/{ContactSection,ContactChannels,ContactForm}.jsx
  index.css  app.css  App.jsx  main.jsx
```

Flow: `main.jsx` (Router + `MenuProvider`) → `App.jsx` (routes, lazy pages) → `layout/Layout.jsx` (NavBar + `<Outlet/>` + Footer + FloatingCta) → `{Menu}/pages/{Page}.jsx`.

## Conventions

- **No API calls in components.** Everything HTTP lives in `src/Api/apicall/`; forms call it through `useContactForm` / `useNewsletterForm`.
- **No inline styles.** Every component and page has a scoped CSS file next to it (`styles/{Name}.css`). Tailwind utilities are available for small layout one-offs (see `NotFound.jsx`).
- **Shared vs feature components.** A component used by more than one menu lives in `src/Components/`; otherwise it stays in `src/{Menu}/{Page}/`.
- **Assets** only under `public/assets/`, referenced by absolute path.
- **Responsive.** Mobile-first breakpoints at 480 / 640 / 980 px; verified at 320, 768, 1024 and 1440 px.
- **Adding a menu:** follow §19 of the architecture reference — page + styles, page-only components, API module, route in `App.jsx`, link in `src/data/navigation.js`.
