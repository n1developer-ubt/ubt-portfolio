# Build brief: Usama Bin Tariq portfolio ("Solar Clay")

You are building a production one-page portfolio site for **Usama Bin Tariq, Full Stack Developer (Berlin)**. It replaces the current site at usamabintariq.vercel.app and deploys to Vercel.

The design is final. Match it closely; do not redesign. Everything you need is in this kit:

| Path | What it is |
|---|---|
| `BUILD_BRIEF.md` | This file: stack, tokens, layout, behaviour, all copy, acceptance checklist |
| `design/tokens.json` | Source of truth for colours (light + dark), type scale, spacing, radii, shadows |
| `design/reference-desktop.dc.html`, `design/reference-mobile.dc.html` | The approved desktop (1440px) and mobile (390px) designs as HTML with inline styles. Use them as the pixel reference for spacing, sizes and structure. They are NOT app code: ignore `<x-dc>`, `<helmet>`, `<sc-for>`, `<sc-if>`, `{{ }}` holes and the `DCLogic` script. `/_blob/…` image URLs map to files in `assets/` (see "Images"). |
| `assets/usama.webp` | Hero portrait, background already removed (transparent, 900×924) |
| `assets/projects/*.webp` | 3 screens per project (1200×760). These are concept previews until real screenshots replace them. |

Work in small, verifiable steps. Commit after each numbered step in "Build order".

---

## 1. Stack

- **Next.js (App Router, latest stable) + TypeScript**, static-rendered (`export const dynamic = 'force-static'` where relevant). One route: `/`.
- **Styling:** Tailwind CSS v4 with the tokens exposed as CSS custom properties (see §3). Do not hard-code hex values in components; always go through the variables.
- **Fonts:** `next/font/google`: **Fraunces** (display, weights 500/600/700, italic 600, `opsz` axis) and **DM Sans** (text, 400/500/700). Expose as `--font-serif` and `--font-sans`.
- **Images:** `next/image` for everything. Hero portrait `priority`.
- **Theme:** light/dark via a `data-theme` attribute on `<html>`. Default to `prefers-color-scheme`; the toggle overrides and persists in `localStorage`. Add an inline script in `<head>` to set the attribute before paint (no flash).
- **Motion:** plain CSS keyframes. No animation library needed.
- **Contact form:** a Next.js Server Action that sends email via **Resend** (`RESEND_API_KEY`, `CONTACT_TO_EMAIL` env vars). Validate with `zod`. Add a honeypot field against spam. If the env vars are missing, the form shows the email address as a fallback instead of failing silently.
- **Lint/format:** ESLint (next config) + Prettier. `pnpm` as package manager.
- No other runtime dependencies without a clear reason.

## 2. Project structure

```
app/
  layout.tsx          fonts, metadata, theme script, <body>
  page.tsx            composes sections in order
  globals.css         token variables, keyframes, base styles
  actions/contact.ts  server action (Resend)
components/
  Nav.tsx  ThemeToggle.tsx  Hero.tsx  Marquee.tsx
  About.tsx  StatTile.tsx  Experience.tsx  ExperienceItem.tsx
  Skills.tsx  Projects.tsx  ProjectCard.tsx  ProjectModal.tsx  MoreProjects.tsx
  Reviews.tsx  Contact.tsx  Footer.tsx
  ui/  Button.tsx  Chip.tsx  Tag.tsx  StatusBadge.tsx  ClayShape.tsx  Field.tsx
content/
  site.ts             ALL copy and data (§7). Components never contain copy.
public/images/
  usama.webp  projects/*.webp
```

## 3. Design tokens

Read `design/tokens.json` and generate CSS variables from it (a small script `scripts/tokens-to-css.ts` that writes `app/tokens.css` is ideal, so tokens stay single-source). The output must look like this:

```css
:root, [data-theme="light"] {
  --bg:#fff4ea; --surface:#ffffff; --surface-2:#ffe6d3;
  --ink:#23160f; --ink-muted:#6b5446; --ink-inverse:#fff4ea; --on-ink-accent:#ffc53d;
  --primary:#ff5a36; --primary-press:#c63d1d; --on-primary:#23160f;
  --accent:#1d5f8a; --on-accent:#ffffff; --accent-2:#ffc53d;
  --success:#1f7a45; --line:#f0d6c2; --field-border:#b89680; --focus:#1d5f8a;
  --shadow-card:0 2px 0 #f0d6c2, 0 24px 48px rgba(255,90,54,.14);
  --shadow-pop:0 30px 60px rgba(35,22,15,.18);
  --shadow-clay:inset -18px -22px 40px rgba(35,22,15,.22), inset 14px 16px 30px rgba(255,255,255,.55), 0 30px 50px rgba(35,22,15,.16);
  --photo-glow:rgba(35,22,15,.22);
}
[data-theme="dark"] {
  --bg:#1a120d; --surface:#251a14; --surface-2:#33241b;
  --ink:#fff4ea; --ink-muted:#d2b8a6; --ink-inverse:#1a120d; --on-ink-accent:#b8391c;
  --primary:#ff6a47; --primary-press:#b8391c; --on-primary:#1a120d;
  --accent:#8cc8ee; --on-accent:#0d2233; --accent-2:#ffc53d;
  --success:#4ade80; --line:#3d2c22; --field-border:#7a6152; --focus:#8cc8ee;
  --shadow-card:0 2px 0 #3d2c22, 0 24px 48px rgba(0,0,0,.45);
  --shadow-pop:0 30px 60px rgba(0,0,0,.6);
  --shadow-clay:inset -18px -22px 40px rgba(0,0,0,.4), inset 14px 16px 30px rgba(255,255,255,.28), 0 30px 50px rgba(0,0,0,.5);
  --photo-glow:rgba(255,196,160,.35);
}
:root {
  --space-1:4px; --space-2:8px; --space-3:16px; --space-4:24px; --space-5:40px; --space-6:64px; --space-7:112px;
  --radius-sm:12px; --radius-md:20px; --radius-lg:28px; --radius-xl:44px; --radius-pill:999px;
}
```

Map them into Tailwind v4 with `@theme inline` so classes like `bg-surface`, `text-ink-muted`, `rounded-lg`, `shadow-clay` work.

**Colour rules (these are accessibility decisions, keep them):**
- Text on `--primary` is always `--on-primary` (dark), never white.
- `--primary` is never used for small text on light backgrounds.
- `--accent-2` (sun yellow) is for shapes and the third stat tile only, always with dark text `#23160f`.
- `--success` only as a dot next to a word ("Live", "Available").

**Type scale** (desktop → mobile):

| Style | Font | Size / line-height | Weight |
|---|---|---|---|
| hero | Fraunces | 76/80 → 44/48, letter-spacing −0.035em | 600 |
| h2 | Fraunces | 44/50 → 32/38, −0.02em | 600 |
| h3 | Fraunces | 24/30 | 600 |
| stat | Fraunces | 58/60 → 42/46 | 600 |
| quote | Fraunces | 30/40 → 22/31 | 500 |
| lede | DM Sans | 20/32 → 18/28 | 400 |
| body | DM Sans | 18/30 → 16/26 | 400 |
| body-sm | DM Sans | 16/26 | 400 |
| label | DM Sans | 15/20 | 700 |
| tag | DM Sans | 13/16 | 500 |
| eyebrow | DM Sans | 13/18, uppercase, +0.12em, colour `--accent` | 700 |

Body text is never below 16px.

## 4. Layout

- Content max width **1152px**, centred. Side gutter 64px desktop, 40px tablet, 24px mobile.
- Section spacing **112px** desktop, **72px** mobile.
- Breakpoints: `≤980px` everything stacks to one column and the nav links collapse into a menu button (sheet with the same links); `≤640px` buttons become full width and the type steps down to the mobile sizes.
- No horizontal scroll at any width from 320px up. The marquee and clay shapes must be clipped by their section (`overflow: hidden`).

## 5. Signature visual elements

**Clay shapes (the "3D").** Absolutely positioned decorative circles, rings and pills with `box-shadow: var(--shadow-clay)`. Build one `<ClayShape kind="ball|ring|pill" color="primary|accent|sun|soft|surface" size x y rotate float />` component. Always `aria-hidden`, `pointer-events: none`. The ring is a circle with a 20–26px border in `--accent-2`.

**Float animation:** `@keyframes bob { 50% { translate: 0 -14px } }`, 6s ease-in-out infinite, staggered with delays 0 / −2s / −4s. Hero only.

**Primary button (pressable 3D):** pill, 52px tall, background `--primary`, text `--on-primary`, `box-shadow: 0 6px 0 var(--primary-press), 0 18px 30px rgba(255,90,54,.28)`. Hover: translateY(2px) with a 4px edge. Active: translateY(6px) with no edge.

**Other buttons:** ghost = `--surface` background + `--shadow-card`, lifts 3px on hover; dark = `--ink` background + `--ink-inverse` text (nav CTA).

**Cards:** `--surface`, radius 28px, `--shadow-card` at rest, lift to `--shadow-pop` on hover.

**Focus ring everywhere:** `outline: 3px solid var(--focus); outline-offset: 3px` on `:focus-visible`.

**Reduced motion:** under `prefers-reduced-motion: reduce`, stop every animation (float, marquee) and every hover transition.

## 6. Sections (in order), ids for anchors

Nav links: Home `#home`, About `#about`, Experience `#experience`, Skills `#skills`, Projects `#work`, Contact `#contact`. Smooth scroll with `scroll-margin-top` so headings are not hidden under the nav. Highlight the current section in the nav (IntersectionObserver) with `aria-current="true"`.

1. **Nav**: clay dot + "Usama." wordmark (Fraunces 26/700); a floating pill of links (active one filled `--ink`); theme toggle (44px round icon button with `aria-label` "Switch to dark/light mode", ☾/☀ or an inline SVG icon); "Let's talk →" dark small button to `#contact`.
2. **Hero `#home`**: two columns (1.1fr / 1fr).
   - Left: status badge "Available for freelance & full-time · Berlin" (green dot), h1 "Hi, I'm Usama.<br>I build *software* people love." (the italic word in `--accent`), lede, primary "See my work ↓" → `#work`, ghost "Get in touch" → `#contact`.
   - Right (stage ≈ 560px tall): a **400px tangerine clay circle** behind the portrait; `usama.webp` at ~440px wide, bottom-aligned, **not cropped**, with a bottom fade `mask-image: linear-gradient(to bottom, #000 80%, transparent 100%)` and `filter: drop-shadow(0 0 16px var(--photo-glow))`. A sun ball (top right) and a blue ball (top left) float. A blue pill sits at the bottom right. Two floating stat chips ("★ 300+ projects shipped" to the right of the shoulder, "7 years of experience" bottom left). Chips must never cover the face.
   - Below the hero: a **marquee** band in `--ink`, rotated −1.5deg, with technologies in Fraunces 30px separated by a tangerine ✺, scrolling 30s linear infinite (duplicate the list for a seamless loop, `aria-hidden`).
3. **About `#about`**: eyebrow "About me", h2 "Clean code, happy users,<br>fast apps.", right-aligned side note. Two columns: a card with 3 paragraphs + soft chips (education, languages) | a 2×2 grid of **stat tiles** in this colour order: primary, accent, sun, surface. Each tile has a translucent clay disc tucked into the bottom-right corner.
4. **Experience `#experience`**: left column 260px with eyebrow + giant "7yrs" in `--primary` (Fraunces 130px, sticky on desktop); right column the roles, newest first. Each role: clay logo tile (initials), title (h3), company line in `--accent`, summary and/or up to 2 bullet highlights (tangerine dots), tech tags, date pill on the right. The current role (HeyJobs) gets a 2px `--primary` outline.
5. **Skills `#skills`**: a `--surface-2` panel (radius 44px) with clay shapes on the right. Filter chips: All, Frontend, Backend, Database, Cloud, Mobile & Desktop (real `<button aria-pressed>`; selected = `--ink` fill). Skill bubbles below; top skills larger with a % badge in `--accent`. Filtering is client-side. Footer line: "Currently exploring: …".
6. **Projects `#work`**: header eyebrow "Selected work", h2 "Projects I've built", side note "From my own SaaS to enterprise ERPs. Click any project to browse its screens."
   - Grid of 3 columns: **Viso spans 2 columns** (cover 360px tall), LRCar next to it (360px), then Evergo, Truck Safety ERP, STUZANNE ERP (covers 220px).
   - Card: cover image as a `<button>` (cursor zoom-in, `aria-label="Open {title} gallery"`), status badge top-left, "3 screens" pill bottom-right; body with kind (eyebrow), title, one-line summary, up to 4 tags, "View project →" button.
   - Last, full width: **"And many more"** card (`--surface-2`): h3 "300+ projects delivered for clients worldwide.", category chips, dark button "Browse on Fiverr ↗".
   - Mobile: cards stack in one column.
7. **Project modal** (the most important interaction; see `ProjectModal` in the reference designs):
   - Native `<dialog>` opened with `showModal()` (gives focus trap, Esc to close, inert background). Backdrop `rgba(26,18,13,.62)` + `backdrop-filter: blur(6px)`; clicking the backdrop closes it. Lock body scroll while open.
   - Desktop: 1120px wide, radius 32px, two columns (1.45fr gallery / 1fr info). Mobile: full-width sheet, gallery on top.
   - **Gallery:** large image (aspect 1200/760), round prev/next buttons (44px) over its left/right edges, a "1 / 3" counter top-left, a caption under the image, and a row of thumbnails (selected one has a 3px `--primary` border, others 70% opacity). Keyboard: ←/→ change screen. Touch: swipe left/right. Preload the next image.
   - **Info:** kind eyebrow, title (h2, `aria-labelledby` target), close button (44px, × icon, `aria-label="Close"`), description, "What I built" list, tags, primary link button (only if the project has a link), "Next project →" button that cycles to the next project. Small note: "Screens are concept previews until real screenshots are added." (render only when `project.conceptScreens` is true).
   - Deep link: opening a project sets `?project=<slug>` (replaceState); loading the page with that param opens the modal. Closing removes it. Return focus to the card that opened it.
8. **Reviews `#reviews`**: eyebrow "Kind words", h2 "300+ happy projects on Fiverr", ghost button "View Fiverr profile ↗". Two columns: the featured quote on an `--accent` card (Fraunces 30px, sun ball in the corner) | two white quote cards with ★★★★★ (`aria-label="5 out of 5"`). Use `<figure>/<blockquote>/<figcaption>`.
9. **Contact `#contact`**: a band in `--ink` (radius 44px) with `--ink-inverse` text; it automatically becomes a cream band in dark mode. Left: eyebrow "Available for new projects" in `--on-ink-accent`, h2 "Got an idea?<br>Let's make it *real.*" (italic word in `--on-ink-accent`), short text, the **email button** and social links. Right: the form panel on `--bg` with Name, Email, Project (textarea) and a full-width primary "Send message" button.
   - **Email button (keep exactly; it was changed for legibility):** background `--ink-inverse`, text `--ink`, 2px border and 6px bottom edge in `--on-ink-accent`, 60px tall, 19px bold, tangerine mail icon before the address. On mobile it is full width and still shows the full address.
   - Form states: idle, submitting (button disabled, "Sending…"), success ("Thanks! I'll reply within a day."), error (inline message + the email address). Fields have visible labels, `--field-border` borders, and an error state with a hint that says what to fix.
10. **Footer**: "© {current year} Usama Bin Tariq · Berlin, Germany · Back to top ↑" and GitHub / LinkedIn / Fiverr links.

All external links: `target="_blank" rel="noopener noreferrer"` with a ↗ in the label.

## 7. Content (`content/site.ts`), verbatim

Use exactly this copy. Values in `[square brackets]` are placeholders the owner will fill in; render them as-is and list them in the README "Before launch" section.

```ts
export const site = {
  name: 'Usama Bin Tariq',
  role: 'Full Stack Developer',
  location: 'Berlin, Germany',
  email: 'imusamabintariq@gmail.com',
  social: {
    github: 'https://github.com/n1developer-ubt/',
    linkedin: 'https://www.linkedin.com/in/usama-bin--tariq/',
    fiverr: 'https://www.fiverr.com/n1developer',
  },
  hero: {
    status: 'Available for freelance & full-time · Berlin',
    lede: 'Full Stack Developer and founder of Viso. 7+ years turning ideas into scalable web, mobile and desktop products — for startups, universities and enterprises.',
    ledeMobile: 'Full Stack Developer and founder of Viso, with 7+ years turning ideas into scalable products.',
  },
  marquee: ['React', 'Next.js', 'Node.js', 'C# & .NET', 'Python · FastAPI', 'Rust', 'React Native', 'GCP · AWS'],
  about: {
    side: "Web, iOS, Android, Windows and macOS — I've shipped on all of them.",
    paragraphs: [
      "I'm a **Full Stack Developer** in Berlin, currently building at **HeyJobs**. I work across the stack with React, Node.js and ASP.NET Core.",
      "Alongside, I'm a **student software developer at TU Berlin**, building research software with C++, Python, FastAPI and Rust.",
      "On the side I run **Viso**, my SaaS for recruitment agencies — and I'm at home building management systems, POS, chat apps and admin portals.",
    ],
    chips: ['MSc CS · TU Berlin', 'MSc CS · NUST · 3.83', 'English · German A2'],
    stats: [
      { value: '7+', label: 'years experience' },
      { value: '300+', label: 'projects completed' },
      { value: '150+', label: 'happy clients' },
      { value: '20', label: 'technologies' },
    ],
  },
  experienceIntro: 'From desktop apps in 2018 to product engineering in Berlin today.',
  experience: [
    { initials: 'HJ', title: '[Your role title]', org: 'HeyJobs · Berlin', dates: '[Start] – now', summary: '[One line on what you build at HeyJobs]', tags: ['[Tech]', '[Tech]', '[Tech]'], current: true },
    { initials: 'TU', title: 'Software Developer', org: 'Technische Universität Berlin · part-time', dates: '2024 – now', summary: 'Research-oriented applications and systems for university operations, with international research teams.', tags: ['Python', 'FastAPI', 'C++', 'Rust'] },
    { initials: 'LR', title: 'Lead Developer', org: 'LRCAR Services · remote', dates: '2021 – 2024', summary: 'Built a ride-sharing platform from scratch and led a team of 3.', highlights: ['Real-time GPS tracking & route optimisation', '10,000+ daily users at 99.9% uptime'], tags: ['ASP.NET Core', 'React', 'Node.js', 'GCP'] },
    { initials: 'Fi', title: 'Full Stack Engineer', org: 'Fiverr · freelance', dates: '2020 – 2024', highlights: ['300+ projects with 5-star ratings', 'E-commerce platforms generating $1M+ in sales · custom ERPs'], tags: ['Next.js', 'React Native', 'AWS', 'MySQL'] },
    { initials: 'NU', title: 'Full Stack Engineer', org: 'NUST · contract, hybrid', dates: '2022 – 2023', summary: 'Enterprise and educational apps for the university; ML/AI research collaboration.', tags: ['ASP.NET Core', 'React', 'MySQL'] },
    { initials: '↗', title: 'Full Stack & Software Developer', org: 'Various companies · Pakistan', dates: '2018 – 2020', summary: 'WinForms & WPF desktop apps, React front-ends and ASP.NET Core APIs.' },
  ],
  skills: {
    filters: [
      { id: 'all', label: 'All' }, { id: 'fe', label: 'Frontend' }, { id: 'be', label: 'Backend' },
      { id: 'db', label: 'Database' }, { id: 'cl', label: 'Cloud' }, { id: 'md', label: 'Mobile & Desktop' },
    ],
    items: [
      { name: 'React.js', pct: 95, big: true, cat: 'fe' }, { name: 'Node.js', pct: 92, big: true, cat: 'be' },
      { name: 'Next.js', pct: 92, cat: 'fe' }, { name: 'TypeScript', pct: 90, cat: 'fe' },
      { name: 'C#', pct: 90, big: true, cat: 'be' }, { name: 'ASP.NET Core', pct: 88, cat: 'be' },
      { name: 'Tailwind', pct: 88, cat: 'fe' }, { name: 'Python / FastAPI', pct: 85, cat: 'be' },
      { name: 'React Native', cat: 'md' }, { name: 'WPF', cat: 'md' }, { name: 'SQL Server', cat: 'db' },
      { name: 'MongoDB', cat: 'db' }, { name: 'MySQL', cat: 'db' }, { name: 'GCP', cat: 'cl' }, { name: 'AWS', cat: 'cl' },
      { name: 'Rust', cat: 'be' },
    ],
    exploring: 'Currently exploring: AI/ML integration · advanced Rust · WebAssembly · microservices',
  },
  projects: [
    {
      slug: 'viso', title: 'Viso', kind: 'SaaS · my own product', status: 'My SaaS', statusDot: false, featured: true,
      summary: 'Candidate profiles for recruitment agencies: build, anonymize and send them from one dashboard.',
      description: 'Viso is my SaaS for recruitment agencies. Recruiters upload a CV and Viso turns it into a clean candidate profile. One click anonymizes it before it goes to a client, and a central dashboard shows every profile that was sent, viewed and shortlisted.',
      built: ['Profile builder that turns CVs into consistent candidate profiles', 'One-click anonymization of name, photo and contact details', 'Central dashboard to send profiles to clients and track their status'],
      tags: ['[Tech stack]'], link: { label: 'Visit Viso ↗', href: '[Viso URL]' }, conceptScreens: true,
      screens: [
        { src: '/images/projects/viso-1.webp', caption: 'Candidates dashboard: every profile, its status and where it was sent.' },
        { src: '/images/projects/viso-2.webp', caption: 'A candidate profile built from an uploaded CV.' },
        { src: '/images/projects/viso-3.webp', caption: 'Anonymize a profile and send it to clients from one place.' },
      ],
    },
    {
      slug: 'lrcar', title: 'LRCar Service', kind: 'Web + mobile · Lead developer', status: 'Live', statusDot: true,
      summary: 'An Uber-style ride-sharing platform with real-time GPS tracking and route optimisation.',
      description: 'A full ride-sharing platform I architected from scratch and led as lead developer, with a team of 3. Riders book and track trips live, drivers get optimised routes, and operators run everything from an admin dashboard.',
      built: ['Real-time GPS tracking and route optimisation', 'Rider and driver mobile apps plus an admin dashboard', '10,000+ daily active users at 99.9% uptime'],
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'ASP.NET Core', 'GCP'], conceptScreens: true,
      screens: [
        { src: '/images/projects/lrcar-1.webp', caption: 'Rider app: live tracking from pickup to drop-off.' },
        { src: '/images/projects/lrcar-2.webp', caption: 'Admin: live operations map with active trips and drivers.' },
        { src: '/images/projects/lrcar-3.webp', caption: 'Admin: trips and uptime at a glance.' },
      ],
    },
    {
      slug: 'evergo', title: 'Evergo Packaging', kind: 'Web platform', status: 'Live', statusDot: true,
      summary: 'An eco-friendly packaging platform with environmental impact tracking.',
      description: 'A platform that connects businesses with sustainable packaging solutions. Every order shows its environmental impact, so companies can see what switching saves.',
      built: ['Storefront and product catalog for sustainable packaging', 'Environmental impact tracking for businesses', 'Type-safe stack with Next.js, Prisma and PostgreSQL'],
      tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'], conceptScreens: true,
      screens: [
        { src: '/images/projects/evergo-1.webp', caption: 'Landing page for businesses.' },
        { src: '/images/projects/evergo-2.webp', caption: 'Product catalog with the CO₂ saved per item.' },
        { src: '/images/projects/evergo-3.webp', caption: 'Impact dashboard for business customers.' },
      ],
    },
    {
      slug: 'truck-safety-erp', title: 'Truck Safety Team ERP', kind: 'Enterprise', status: 'Enterprise', statusDot: false,
      summary: 'Fleet tracking, compliance monitoring and safety analytics for a trucking company.',
      description: 'An ERP for truck safety management. Safety teams see the whole fleet on a map, stay ahead of inspections and driver-hour rules, and track how safety improves over time.',
      built: ['Live fleet overview with vehicle status', 'Compliance monitoring for inspections and driver hours', 'Safety analytics and fleet safety score'],
      tags: ['C#', 'ASP.NET Core', 'SQL Server', 'Angular'], conceptScreens: true,
      screens: [
        { src: '/images/projects/truck-1.webp', caption: 'Fleet overview with every truck on the map.' },
        { src: '/images/projects/truck-2.webp', caption: 'Compliance checks and what is due next.' },
        { src: '/images/projects/truck-3.webp', caption: 'Safety analytics over the last 12 months.' },
      ],
    },
    {
      slug: 'stuzanne-erp', title: 'STUZANNE ERP', kind: 'Enterprise', status: 'Enterprise', statusDot: false,
      summary: 'A modern ERP for retail: inventory, sales tracking and customer relationships.',
      description: 'A retail ERP that brings stock, sales and customers into one system, so store managers always know what is selling, what to reorder and who their best customers are.',
      built: ['Inventory management with low-stock alerts', 'Sales tracking per store', 'Customer relationship management and loyalty campaigns'],
      tags: ['React', 'Node.js', 'Express', 'MongoDB'], conceptScreens: true,
      screens: [
        { src: '/images/projects/stuzanne-1.webp', caption: 'Inventory with stock levels per product.' },
        { src: '/images/projects/stuzanne-2.webp', caption: 'Sales by store.' },
        { src: '/images/projects/stuzanne-3.webp', caption: 'Customers and loyalty campaigns.' },
      ],
    },
  ],
  moreProjects: {
    title: '300+ projects delivered for clients worldwide.',
    categories: ['E-commerce stores', 'ERP & POS systems', 'Chat apps', 'Admin portals', 'Desktop tools (WPF, WinForms)', 'WordPress sites'],
  },
  reviews: {
    featured: { quote: "After contacting four or five sellers, I'm happy I found Usama. He listened to my needs and built the software I needed from scratch.", by: 'colinjohnparry · Desktop application · United States' },
    more: [
      { quote: 'He paid attention to the details I gave him. The overall quality of his work was great.', by: 'astepnate · repeat client · US' },
      { quote: 'He not only delivers on time but does so with remarkable politeness and quick responsiveness.', by: 'anasmak11 · repeat client · Kuwait' },
    ],
  },
  contact: {
    eyebrow: 'Available for new projects',
    text: 'Freelance projects and full-time roles welcome. I usually reply within a day.',
  },
} as const;
```

## 8. Images

- Copy `assets/usama.webp` → `public/images/usama.webp` and `assets/projects/*` → `public/images/projects/`.
- Reference designs use `/_blob/…` URLs: `0e05e60e…` is `usama.webp`; the project blobs correspond to the project screens in the order listed in §7.
- Alt text: portrait "Usama Bin Tariq, smiling, in a black button-down shirt"; screens "{title}, screen {n} of {total}: {caption}".
- Project covers use `object-fit: cover; object-position: top center`.

## 9. SEO, metadata, performance

- `<title>`: "Usama Bin Tariq — Full Stack Developer in Berlin". Meta description from the hero lede.
- Open Graph + Twitter card: generate a 1200×630 OG image with `next/og` (cream background, tangerine clay circle, name in Fraunces, role line).
- JSON-LD `Person` schema (name, jobTitle, address Berlin, sameAs = social links, email).
- `sitemap.ts`, `robots.ts`, favicon (tangerine clay dot on cream; also a `apple-icon`).
- Targets: Lighthouse ≥ 95 for Performance, Accessibility, Best Practices and SEO on mobile. LCP is the hero portrait: `priority`, correct `sizes`. No layout shift from fonts (next/font) or images (explicit sizes).

## 10. Accessibility requirements

- Real elements only: `<button>` for actions, `<a>` for navigation, `<label>` for every input.
- Text contrast ≥ 4.5:1 in both themes (the tokens already satisfy this; don't introduce new colours).
- Every icon-only button has an `aria-label`. Decorative shapes are `aria-hidden`.
- Status never relies on colour alone (the dot always has a word).
- Modal: focus moves into the dialog on open, is trapped, Esc closes, focus returns to the trigger.
- Skip link "Skip to content" as the first focusable element.

## 11. Build order (commit after each)

1. Scaffold Next.js + TypeScript + Tailwind v4 + ESLint/Prettier; add fonts; token pipeline (§3); theme script + toggle.
2. UI primitives: Button (primary/ghost/dark, sm, block), Chip, Tag, StatusBadge, ClayShape, Field. Add a hidden `/dev/ui` page to eyeball them in both themes (exclude from sitemap, `noindex`).
3. Nav + Hero + Marquee, desktop and mobile.
4. About + StatTile, Experience.
5. Skills with filtering.
6. Projects grid + MoreProjects + ProjectModal (gallery, keyboard, swipe, deep link).
7. Reviews, Contact (server action + Resend + states), Footer.
8. SEO/metadata/OG/JSON-LD, sitemap/robots, icons.
9. Accessibility and performance pass; fix everything in §12.
10. README with setup, env vars, how to swap in real screenshots, and the "Before launch" placeholder list.

## 12. Acceptance checklist

- [ ] Desktop 1440 and mobile 390 match the reference designs (layout, sizes, colours, spacing) in light and dark.
- [ ] No horizontal scroll at 320, 390, 768, 1024, 1440.
- [ ] Theme follows the OS on first visit, toggle persists, no flash on reload.
- [ ] Nav anchors scroll correctly; active section highlights.
- [ ] Skills filter works with keyboard; `aria-pressed` is correct.
- [ ] Every project opens the modal from both the cover and "View project →"; ←/→, swipe, thumbnails, counter, captions, "Next project", Esc, backdrop click and `?project=` deep link all work; focus returns to the card.
- [ ] Contact form: validation messages, spam honeypot, success and error states; works without JS as a graceful fallback (shows the email address).
- [ ] Email button is clearly legible in both themes (§6.9).
- [ ] `prefers-reduced-motion` stops all animation.
- [ ] Lighthouse mobile ≥ 95 in all four categories; axe shows no violations.
- [ ] `pnpm build` passes with no type or lint errors.

## 13. Before launch (owner to provide)

- HeyJobs role title, start date, 2–3 technologies and one-line summary.
- Viso tech stack and URL.
- Real screenshots for each project (replace the concept previews and set `conceptScreens: false`).
- `RESEND_API_KEY` and `CONTACT_TO_EMAIL` in Vercel project settings, plus a verified sending domain in Resend.
