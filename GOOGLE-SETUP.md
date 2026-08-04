# Connecting your site to Google

You asked to connect the website to your Google (Business) account. There are
four separate Google things, and they connect in a specific order. **Your site
must be live on the internet first** — Google can't reach a site that only runs
on your computer.

Your Google account: **info@crestwoodpayments.ca**

---

## The order to do things

1. **Publish the site** to crestwoodpayments.ca (Vercel). *Nothing Google works
   until this is done.* — Claude can do most of this with you.
2. **Google Search Console** — prove you own the site, so Google indexes it.
3. **Google Analytics** — start counting visitors.
4. **Google Business Profile** — your Maps/Search listing; add the website link.
5. **Google Workspace email** — likely already done (you have
   info@crestwoodpayments.ca). Just confirm.

The website code is already prepared for all of these. Here's what's left, and
who does what.

---

## 1. Google Search Console  (helps Google find & rank you)

**You do this** (Claude can't log into your Google account):

1. Go to **https://search.google.com/search-console** and sign in as
   info@crestwoodpayments.ca.
2. Add a property → choose **URL prefix** → enter `https://crestwoodpayments.ca`.
3. Pick the **"HTML tag"** verification method. It shows a code like
   `<meta name="google-site-verification" content="abc123..." />`.
4. Copy the long code (the `content` part) and send it to Claude — Claude will
   plug it in (`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in `.env.local`), and after
   the next publish you click **Verify**.
5. In Search Console, go to **Sitemaps** and submit: `sitemap.xml`
   (your sitemap is already built at `/sitemap.xml`).

---

## 2. Google Analytics  (see your visitors)

**You do this:**

1. Go to **https://analytics.google.com** → sign in → **Admin** → create a
   property for Crestwood Payments.
2. Create a **Web** data stream for `https://crestwoodpayments.ca`.
3. It gives you a **Measurement ID** that looks like `G-XXXXXXXXXX`.
4. Send that ID to Claude — Claude pastes it into `.env.local`
   (`NEXT_PUBLIC_GA_ID`). After the next publish, analytics starts recording.

*(The tracking code is already installed in the site — it just needs the ID.)*

---

## 3. Google Business Profile  (your Maps / Search listing)

This is the free business listing that shows your hours, phone, reviews, and a
**Website** button on Google Maps and Search. It's all done on Google's side —
no website code needed.

**You do this:**

1. Go to **https://business.google.com** and sign in as
   info@crestwoodpayments.ca.
2. Create / claim your business **Crestwood Payments**.
3. Choose a category (e.g. *Credit card processing service* or
   *Financial institution*).
4. Google verifies you run the business (by phone, email, or postcard).
5. In the profile, set the **Website** field to `https://crestwoodpayments.ca`.

That "Website" link is the actual "connection" between Google Business and your
site. (The site already includes business info Google can read, which helps it
match your listing.)

---

## 4. Google Workspace email  (info@crestwoodpayments.ca)

You already have **info@crestwoodpayments.ca**, so this is likely set up. If you
ever need to confirm or add more mailboxes:

- Manage it at **https://admin.google.com**.
- Email delivery is controlled by **MX records** at your domain registrar — if
  email already works, leave these alone.

---

## What Claude needs from you to finish

Send these two values whenever you have them (from steps 1 and 2):

- Search Console verification code
- Analytics Measurement ID (`G-...`)

…and let's **publish the site** first so all of this can actually connect.
