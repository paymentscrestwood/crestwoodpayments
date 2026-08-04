# Crestwood Payments — your website

This is the website for **crestwoodpayments.ca**. It was built with Next.js (a
popular, modern website framework). You don't need to know how to code to run it
or make basic text changes — this guide walks you through everything.

---

## 1. See the website on your computer

1. Open **PowerShell** (press the Windows key, type `PowerShell`, press Enter).
2. Copy and paste this line, then press Enter:

   ```powershell
   cd "C:\Users\ashis\OneDrive\Desktop\Meal Deal\crestwood-payments"; npm run dev
   ```

3. Wait until you see **"Ready"**, then open your web browser and go to:

   **http://localhost:3000**

4. To stop the website, click back in the PowerShell window and press
   `Ctrl` + `C`.

> The site only runs on your own computer this way. To put it on the internet at
> crestwoodpayments.ca, see **Section 4** below.

---

## 2. The pages

| Page | Address | What it's for |
|------|---------|---------------|
| Home | `/` | The main landing page |
| Solutions | `/solutions` | Your payment products |
| Pricing | `/pricing` | Plans & FAQ |
| Rate Calculator | `/calculator` | Interactive savings estimator |
| About | `/about` | Your story & values |
| Contact | `/contact` | Contact form |
| Get started | `/apply` | Merchant application form |

---

## 3. Changing the text yourself

Most of the wording lives in plain files you can open in **Notepad** (or, better,
the free editor **VS Code**). After editing, save the file — if the site is
running, the change shows up in your browser automatically.

- **Company name, email, phone, tagline:**
  `src/lib/site.ts`
- **Home page wording:** `src/app/page.tsx`
- **Pricing numbers & plans:** `src/app/pricing/page.tsx`
- **Solutions:** `src/app/solutions/page.tsx`
- **About:** `src/app/about/page.tsx`

### Important things to update before you launch

These are marked with `TODO` in the code:

1. **Email address** — currently `apply@urbanpay.ca` in `src/lib/site.ts`.
   Change it to your real Crestwood email.
2. **Phone number** — placeholder `1-800-000-0000` in `src/lib/site.ts`.
3. **Pricing & rates** — the rates on the Pricing page and in the calculator are
   realistic *samples*. Replace them with your real published rates
   (`src/app/pricing/page.tsx` and `src/components/RateCalculator.tsx`).
4. **Contact / application form delivery** — right now form submissions are
   recorded but **not emailed anywhere yet**. To actually receive leads in your
   inbox, the form needs to be connected to an email service. See
   `src/app/api/lead/route.ts` (look for `TODO: deliver lead`). I can set this
   up for you — just ask.

---

## 4. Putting it online at crestwoodpayments.ca

The easiest, free way to host a Next.js site is **Vercel** (the company that
makes Next.js):

1. Create a free account at **https://vercel.com**.
2. Upload this project (the simplest path is to put it on GitHub first, then
   "Import" it in Vercel — I can walk you through this).
3. In Vercel, open the project's **Settings → Domains** and add
   `crestwoodpayments.ca`.
4. Vercel shows you a couple of DNS records. Add those at the company where you
   bought the domain. Within an hour or so, your site is live on your domain
   with a secure padlock (HTTPS) automatically.

This part is fiddly the first time — tell me when you're ready and I'll guide you
step by step, or do as much of it as I can for you.

---

## Notes for a developer (or future AI assistant)

- Next.js 16 (App Router, TypeScript, Tailwind CSS v4). See `AGENTS.md`.
- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — lint
- Shared content/brand: `src/lib/site.ts`. UI primitives: `src/components/`.
  Brand theme tokens: `src/app/globals.css` (`@theme` block).
