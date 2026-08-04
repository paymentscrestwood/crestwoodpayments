/* Single source of truth for brand + navigation, so copy lives in one place. */

export const site = {
  name: "Crestwood Payments",
  shortName: "Crestwood",
  domain: "crestwoodpayments.ca",
  email: "info@crestwoodpayments.ca",
  phone: "1-800-000-0000", // TODO: replace with your real support line
  tagline: "Payments built for Canadian businesses.",
  description:
    "Crestwood Payments helps Canadian businesses accept payments in person, online, and on the go — with transparent pricing, fast deposits, and support that actually answers.",
} as const;

export const nav = [
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Rate Calculator", href: "/calculator" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
