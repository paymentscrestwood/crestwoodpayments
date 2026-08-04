# Developer handoff — Crestwood Payments website

Hi! This is a complete, working **Next.js 16** website for Crestwood Payments
(a Canadian payments/fintech company). It builds cleanly and just needs to be
deployed. Below is everything you need.

## Stack
- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- No database. One API route for lead capture (see below).
- Node.js **>= 20.9** required (developed on Node 24).

> Note: this repo includes `AGENTS.md` — Next.js 16 has breaking changes vs 14/15
> (Turbopack default, async request APIs, `proxy` vs `middleware`, etc.).

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (verified passing)
npm run start    # serve the production build
npm run lint
```

## Structure (high level)
- `src/app/` — pages: home (`page.tsx`), `solutions`, `pricing`, `calculator`,
  `about`, `contact`, `apply`. Also `sitemap.ts`, `robots.ts`, and
  `api/lead/route.ts`.
- `src/components/` — UI (Navbar, Footer, RateCalculator, LeadForm, etc.)
- `src/lib/site.ts` — central brand/content config (name, email, phone, nav).
- `src/app/globals.css` — Tailwind v4 theme tokens (`@theme` block).

## Things to wire up before/at launch
1. **Lead form delivery** — `src/app/api/lead/route.ts` currently validates and
   `console.log`s submissions only. Connect it to an email service (e.g. Resend)
   or a CRM so contact/application form leads are actually delivered.
   Search for `TODO: deliver lead`.
2. **Environment variables** (optional, for Google):
   - `NEXT_PUBLIC_GA_ID` — GA4 Measurement ID (`G-XXXXXXXXXX`)
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — Search Console HTML-tag token
   See `.env.example`. (Analytics/verification stay inert until these are set.)
3. **Real rates** — pricing (`src/app/pricing/page.tsx`) and the calculator
   (`src/components/RateCalculator.tsx`) use realistic *sample* rates. Replace
   with the client's published rate card.
4. **Phone number** — placeholder in `src/lib/site.ts`.

## Deployment
- Easiest: **Vercel** (zero-config for Next.js) or **Netlify**. Any Node host
  that supports Next.js 16 SSR works. (A fully static export is *not* suitable
  as-is because of the `/api/lead` route.)
- **Domain:** `crestwoodpayments.ca`, registered at **GoDaddy**. Point DNS to
  the host per their instructions (Vercel: an `A` record for the apex + a `CNAME`
  for `www`).
- After go-live: submit `https://crestwoodpayments.ca/sitemap.xml` in Google
  Search Console.

## Contact
Owner: info@crestwoodpayments.ca
