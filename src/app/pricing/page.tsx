import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SectionHeading, ButtonArrow, Button } from "@/components/ui";
import { Check, ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent payment processing pricing for Canadian businesses. No setup fees, no lock-in contracts.",
};

/* Sample published pricing — adjust the numbers to your real rate card. */
const plans = [
  {
    name: "Starter",
    tagline: "For new and small businesses",
    rate: "2.65%",
    rateNote: "+ 10¢ per in-person tap",
    monthly: "$0 / month",
    featured: false,
    features: [
      "Mobile tap-to-pay reader",
      "Hosted online checkout",
      "Payment links & QR codes",
      "Next-business-day deposits",
      "7-day Canadian support",
    ],
    cta: "Start free",
  },
  {
    name: "Growth",
    tagline: "For established, higher-volume businesses",
    rate: "2.40%",
    rateNote: "+ 10¢ per in-person tap",
    monthly: "$19 / month",
    featured: true,
    features: [
      "Everything in Starter",
      "Countertop POS terminal",
      "Invoicing & auto-reminders",
      "Volume discounts available",
      "Priority support",
    ],
    cta: "Choose Growth",
  },
  {
    name: "Custom",
    tagline: "For high-volume & multi-location",
    rate: "Let's talk",
    rateNote: "interchange-plus available",
    monthly: "Custom",
    featured: false,
    features: [
      "Everything in Growth",
      "Interchange-plus pricing",
      "Multi-location dashboard",
      "Dedicated account manager",
      "API & integration support",
    ],
    cta: "Contact sales",
  },
];

const faqs = [
  {
    q: "Are there any setup or cancellation fees?",
    a: "No. There are no setup fees and no early-termination penalties. You're never locked into a long-term contract.",
  },
  {
    q: "How fast will I get my money?",
    a: "Eligible transactions are deposited to your bank account as soon as the next business day.",
  },
  {
    q: "What does the per-transaction fee cover?",
    a: "It covers card network and processing costs. The rate you see is all-in — no surprise statement charges at month end.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes. You can move between plans as your volume changes — just reach out and we'll adjust your account.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="container-x py-16 sm:py-20">
        <SectionHeading
          eyebrow="Pricing"
          title="Clear pricing, no surprises"
          intro="Pick a plan that fits how you sell today. No hidden fees, no lock-in, and you can change plans anytime."
          center
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 80}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-7 shadow-sm ${
                  plan.featured
                    ? "border-evergreen bg-ink text-cloud shadow-lg"
                    : "border-black/5 bg-cloud"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-lg font-semibold ${
                      plan.featured ? "text-cloud" : "text-ink"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  {plan.featured && (
                    <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">
                      Most popular
                    </span>
                  )}
                </div>
                <p
                  className={`mt-1 text-sm ${
                    plan.featured ? "text-cloud/70" : "text-slate"
                  }`}
                >
                  {plan.tagline}
                </p>

                <div className="mt-6">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-semibold tracking-tight ${
                        plan.featured ? "text-gold" : "text-evergreen"
                      }`}
                    >
                      {plan.rate}
                    </span>
                  </div>
                  <div
                    className={`mt-1 text-sm ${
                      plan.featured ? "text-cloud/70" : "text-slate"
                    }`}
                  >
                    {plan.rateNote}
                  </div>
                  <div
                    className={`mt-1 text-sm font-medium ${
                      plan.featured ? "text-cloud/90" : "text-ink"
                    }`}
                  >
                    {plan.monthly}
                  </div>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          plan.featured ? "text-gold" : "text-evergreen"
                        }`}
                      />
                      <span
                        className={
                          plan.featured ? "text-cloud/90" : "text-ink"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.name === "Custom" ? "/contact" : "/apply"}
                  className={`mt-7 inline-flex items-center justify-center gap-1.5 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${
                    plan.featured
                      ? "bg-gold text-ink hover:bg-gold-600"
                      : "bg-evergreen text-cloud hover:bg-evergreen-600"
                  }`}
                >
                  {plan.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate">
          Rates shown are illustrative samples. Your final rate depends on your
          business type and volume. Replace with your published rate card before
          launch.
        </p>
      </section>

      <section className="bg-cloud py-20">
        <div className="container-x max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Questions, answered" center />
          <div className="mt-10 divide-y divide-black/5 rounded-2xl border border-black/5 bg-ivory">
            {faqs.map((faq) => (
              <details key={faq.q} className="group p-6">
                <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-ink">
                  {faq.q}
                  <span className="ml-4 text-evergreen transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-slate">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="rounded-3xl bg-gradient-to-br from-evergreen to-evergreen-600 px-8 py-14 text-center text-cloud shadow-lg sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Want an exact quote?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cloud/80">
            Try the rate calculator, or apply and we'll confirm your custom
            rate.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonArrow href="/apply" variant="gold">
              Get started
            </ButtonArrow>
            <Button href="/calculator" variant="ghost-light">
              Open calculator
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
