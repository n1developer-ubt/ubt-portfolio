# ubt-portfolio

One-page portfolio for Usama Bin Tariq, Full Stack Developer (Berlin). Design: **Solar Clay**
(light) / **Clay Night** (dark). Deploys to Vercel.

## Stack

| Piece        | Choice                                                         |
| ------------ | -------------------------------------------------------------- |
| Framework    | Next.js 16, App Router, static (`force-static`), one route `/` |
| Language     | TypeScript                                                     |
| Styling      | Tailwind CSS v4 over CSS custom properties                     |
| Fonts        | `next/font/google` — Fraunces (display), DM Sans (text)        |
| Contact form | Server Action + zod + Resend                                   |
| Tooling      | ESLint, Prettier, pnpm                                         |

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm eslint .     # lint
pnpm tokens       # regenerate app/tokens.css from design/tokens.json
```

`/dev/ui` renders every UI primitive and the type scale in both themes. It is `noindex` and
excluded from the sitemap.

## Environment variables

Set these in Vercel → Project → Settings → Environment Variables (and in `.env.local` for
local testing):

| Variable             | Required          | Purpose                                                                                                                                                      |
| -------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `RESEND_API_KEY`     | yes, to send mail | Resend API key                                                                                                                                               |
| `CONTACT_TO_EMAIL`   | yes, to send mail | Where enquiries are delivered                                                                                                                                |
| `CONTACT_FROM_EMAIL` | optional          | Verified sender, e.g. `Portfolio <hi@yourdomain.com>`. Defaults to Resend's shared `onboarding@resend.dev`, which only delivers to your own account address. |

Without `RESEND_API_KEY` and `CONTACT_TO_EMAIL` the form does not fail silently — it tells the
visitor to email `imusamabintariq@gmail.com` directly.

Resend also needs a **verified sending domain** before it will deliver to arbitrary recipients.

## Design tokens

`design/tokens.json` is the single source of truth for colour, spacing, radii and shadows.
`scripts/tokens-to-css.ts` generates `app/tokens.css`; `app/globals.css` maps those variables
into Tailwind with `@theme inline`. **Never hard-code a hex value in a component** — edit
`design/tokens.json` and re-run `pnpm tokens`.

Colour rules that are accessibility decisions, not preferences:

- Text on `--primary` is always `--on-primary` (dark). Never white.
- `--primary` is never small text on a light ground (3.1:1).
- `--accent-2` (sun yellow) is for shapes and the third stat tile only, always with `#23160f` text.
- `--success` only ever appears as a dot beside a word ("Live", "Available").

## Content

All copy and data live in `content/site.ts`. Components contain no copy. Text wrapped in
`**double asterisks**` renders bold; text in `[square brackets]` renders with a dashed
underline so unfilled placeholders are visible on the page.

## Swapping in real screenshots

1. Export each screen at **1200×760** as `.webp`.
2. Replace the files in `public/images/projects/` (keep the names, e.g. `viso-1.webp`).
3. In `content/site.ts`, set that project's `conceptScreens: false` — this removes the
   "Screens are concept previews…" note from its modal.
4. Update the `caption` of each screen to describe what it actually shows. Captions become part
   of the image alt text, so keep them descriptive.

## Before launch (owner to provide)

- [ ] **Visorun**: the public URL (`projects[1].link.href`, still `[Visorun URL]`). The
      "Visit Visorun" button stays hidden until it is a real URL, so nothing is broken in the
      meantime. Aplyfy has no link yet either — add one the same way if you want the button.
- [ ] **Real screenshots** for Visorun, LRCar and STUZANNE (see above), then
      `conceptScreens: false`. Aplyfy already uses real screens from its own portfolio deck.
- [ ] **`RESEND_API_KEY`** and **`CONTACT_TO_EMAIL`** in Vercel, plus a verified sending domain.
- [ ] Confirm the canonical domain in `app/layout.tsx`, `app/sitemap.ts` and `app/robots.ts`
      if it moves off `usamabintariq.vercel.app`.

Anything still bracketed in `content/site.ts` shows up on the page with a dashed underline —
that is the fastest way to find what is left.

## Accessibility notes

- Skip link is the first focusable element; `:focus-visible` is a 3px `--focus` ring everywhere.
- The project modal is a native `<dialog>` opened with `showModal()`: focus trap, Esc to close,
  inert background, focus returns to the card that opened it. `←`/`→` and swipe change screens.
- Status is never colour-only; every dot is paired with a word.
- `prefers-reduced-motion: reduce` stops the float and marquee animations and all hover transitions.
