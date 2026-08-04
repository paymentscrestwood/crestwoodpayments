import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import {
  SectionHeading,
  ButtonArrow,
  Button,
  FeatureCard,
} from "@/components/ui";
import {
  Storefront,
  Globe,
  Link2,
  Receipt,
  ChartBar,
  Headset,
  ShieldCheck,
  Bolt,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "In-person POS, online checkout, payment links, and invoicing — every way Canadian businesses get paid, in one Crestwood account.",
};

const products = [
  {
    icon: Storefront,
    title: "In-person & POS",
    body: "Countertop terminals, mobile tap-to-pay, and a point-of-sale that handles tips, refunds, and split payments. Everything syncs to one dashboard in real time.",
    points: ["Tap, chip & swipe", "Mobile readers", "Tips & refunds built in"],
  },
  {
    icon: Globe,
    title: "Online checkout",
    body: "A hosted checkout that's fast and conversion-friendly, plus a clean API and plugins for popular platforms when you want to build your own flow.",
    points: ["Hosted checkout", "Developer API", "Platform plugins"],
  },
  {
    icon: Link2,
    title: "Payment links",
    body: "No website? No problem. Generate a secure payment link and share it by text, email, or social — your customer pays in a couple of taps.",
    points: ["Share by text or email", "QR codes", "Reusable links"],
  },
  {
    icon: Receipt,
    title: "Invoicing",
    body: "Create branded invoices, schedule automatic reminders, and let customers pay online. Payments reconcile against invoices automatically.",
    points: ["Branded invoices", "Auto reminders", "Auto reconciliation"],
  },
];

const platform = [
  {
    icon: ChartBar,
    title: "Unified dashboard",
    body: "Every channel, one view. Track sales, deposits, and refunds across in-person and online in real time.",
  },
  {
    icon: ShieldCheck,
    title: "Security first",
    body: "PCI-DSS aligned, with end-to-end encryption and tokenization so card data is never exposed.",
  },
  {
    icon: Bolt,
    title: "Fast deposits",
    body: "Eligible transactions settle to your bank as soon as the next business day.",
  },
  {
    icon: Headset,
    title: "Human support",
    body: "Canadian-based support by phone and email, seven days a week — no endless phone trees.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="container-x py-16 sm:py-20">
        <SectionHeading
          eyebrow="Solutions"
          title="Every way you get paid, in one place"
          intro="Mix and match the tools your business needs today, and add more as you grow — all under a single Crestwood account."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-cloud p-7 shadow-sm">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-mint text-evergreen">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate">{p.body}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="rounded-full bg-mint px-3 py-1 text-xs font-medium text-evergreen-600"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cloud py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="The platform"
            title="One account, built to scale with you"
            center
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platform.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <FeatureCard icon={f.icon} title={f.title}>
                  {f.body}
                </FeatureCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="rounded-3xl bg-gradient-to-br from-evergreen to-evergreen-600 px-8 py-14 text-center text-cloud shadow-lg sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Not sure which tools you need?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cloud/80">
            Tell us how you sell and we'll put together the right setup for your
            business.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonArrow href="/apply" variant="gold">
              Get started
            </ButtonArrow>
            <Button href="/contact" variant="ghost-light">
              Talk to sales
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
