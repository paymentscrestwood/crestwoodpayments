import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  SectionHeading,
  FeatureCard,
  Button,
  ButtonArrow,
  Stat,
} from "@/components/ui";
import {
  Storefront,
  Globe,
  Link2,
  Receipt,
  ShieldCheck,
  Bolt,
  Headset,
  ChartBar,
  Check,
  ArrowRight,
  Lock,
} from "@/components/icons";
import { site } from "@/lib/site";

const solutions = [
  {
    icon: Storefront,
    title: "In-person & POS",
    body: "Tap, chip, and swipe with countertop terminals and mobile readers that sync to one dashboard.",
  },
  {
    icon: Globe,
    title: "Online checkout",
    body: "A fast, hosted checkout and developer-friendly API for your website or storefront.",
  },
  {
    icon: Link2,
    title: "Payment links",
    body: "Get paid without a website — send a secure link by text or email and accept cards instantly.",
  },
  {
    icon: Receipt,
    title: "Invoicing",
    body: "Send branded invoices, automate reminders, and reconcile payments without the spreadsheet.",
  },
];

const steps = [
  {
    n: "01",
    title: "Apply in minutes",
    body: "Tell us about your business. Most applications are reviewed the same day — no paperwork pile.",
  },
  {
    n: "02",
    title: "Get set up",
    body: "Plug in a terminal or drop our checkout onto your site. Our team helps with the switch.",
  },
  {
    n: "03",
    title: "Start getting paid",
    body: "Accept payments everywhere your customers are, with deposits landing as soon as the next day.",
  },
];

const valueProps = [
  "Transparent pricing — no hidden monthly fees or surprise statement charges",
  "Next-business-day deposits on eligible transactions",
  "No long-term lock-in contracts or early-termination penalties",
  "PCI-DSS aligned infrastructure with end-to-end encryption",
  "Real Canadian support, by phone and email, 7 days a week",
  "One dashboard for in-person, online, and invoicing",
];

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden bg-ink text-cloud">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60rem 40rem at 75% -10%, rgba(31,131,102,0.45), transparent 60%), radial-gradient(40rem 30rem at 5% 110%, rgba(227,169,44,0.18), transparent 55%)",
          }}
        />
        <div className="container-x relative grid gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-cloud/80">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Canadian-built payments
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Payments built for{" "}
              <span className="text-gold">Canadian businesses.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cloud/75">
              Accept payments in person, online, and on the go — with
              transparent pricing, next-day deposits, and support that actually
              answers. {site.shortName} brings it all into one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonArrow href="/apply" variant="gold">
                Get started
              </ButtonArrow>
              <Button href="/calculator" variant="ghost-light">
                Estimate my rate
              </Button>
            </div>
            <p className="mt-6 text-sm text-cloud/55">
              No setup fees · No lock-in contracts · Same-day approval on most
              applications
            </p>
          </div>

          {/* Floating "payment" card mock — pure CSS, no image asset needed */}
          <Reveal delay={120}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-evergreen to-evergreen-600 p-6 shadow-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-cloud/80">
                    Today
                  </span>
                  <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs text-cloud/90">
                    Live
                  </span>
                </div>
                <div className="mt-3 text-4xl font-semibold tracking-tight">
                  $12,480.50
                </div>
                <div className="mt-1 text-sm text-cloud/70">
                  Net deposits · settling next business day
                </div>
                <div className="mt-6 space-y-3">
                  {[
                    { label: "Tap — Visa ••42", amt: "$84.00" },
                    { label: "Online — checkout", amt: "$240.00" },
                    { label: "Invoice #1043 paid", amt: "$1,500.00" },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-sm"
                    >
                      <span className="text-cloud/85">{row.label}</span>
                      <span className="font-semibold text-cloud">
                        {row.amt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-black/5 bg-cloud px-4 py-3 text-ink shadow-xl sm:block">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-evergreen" />
                  <span className="text-sm font-semibold">PCI-DSS aligned</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------------------- Stat strip */}
      <section className="border-b border-black/5 bg-cloud">
        <div className="container-x grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
          <Stat value="2.4%" label="+ 10¢ flat per tap, in person" />
          <Stat value="Next-day" label="deposits on eligible sales" />
          <Stat value="7 days" label="a week Canadian support" />
          <Stat value="$0" label="setup & cancellation fees" />
        </div>
      </section>

      {/* --------------------------------------------------------- Solutions */}
      <section className="container-x py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Everything in one place"
            title="One platform for every way you get paid"
            intro="Whether you sell at the counter, online, or on a job site, Crestwood gives you the tools — and a single dashboard to see it all."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <FeatureCard icon={s.icon} title={s.title}>
                {s.body}
              </FeatureCard>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-evergreen hover:text-evergreen-600"
          >
            Explore all solutions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* --------------------------------------------------------- How it works */}
      <section className="bg-cloud py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Up and running in three steps"
              center
            />
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 100}>
                <div className="relative">
                  <span className="text-5xl font-semibold text-mint">
                    {step.n}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Why Crestwood */}
      <section className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Why Crestwood"
              title="Fewer fees, fewer surprises, more support"
              intro="We started Crestwood because Canadian businesses deserve payments that are simple to understand and priced fairly. No fine print, no runaround."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonArrow href="/apply">Open an account</ButtonArrow>
              <Button href="/pricing" variant="outline">
                See pricing
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ul className="grid gap-4">
              {valueProps.map((prop) => (
                <li
                  key={prop}
                  className="flex items-start gap-3 rounded-xl border border-black/5 bg-cloud p-4 shadow-sm"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint text-evergreen">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm leading-relaxed text-ink">
                    {prop}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------------------- Trust band */}
      <section className="bg-ink py-20 text-cloud">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Security and reliability, built in
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-cloud/70">
              Every transaction runs on PCI-DSS aligned infrastructure with
              end-to-end encryption and tokenization, so sensitive card data is
              never exposed. Monitoring runs around the clock.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, label: "PCI-DSS aligned" },
              { icon: Bolt, label: "99.9% uptime target" },
              { icon: Headset, label: "7-day support" },
              { icon: Globe, label: "Built in Canada" },
              { icon: ChartBar, label: "Real-time reporting" },
              { icon: Lock, label: "Encrypted & tokenized" },
            ].map((item, i) => (
              <Reveal key={item.label + i} delay={i * 60}>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4">
                  <item.icon className="h-6 w-6 text-gold" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Final CTA */}
      <section className="container-x py-20">
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-evergreen to-evergreen-600 px-8 py-14 text-center text-cloud shadow-lg sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to get paid the easy way?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cloud/80">
              Join the Canadian businesses switching to clearer, fairer
              payments. Apply in minutes — most applications are approved the
              same day.
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
        </Reveal>
      </section>
    </>
  );
}
