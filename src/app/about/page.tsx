import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { SectionHeading, Stat, ButtonArrow, Button } from "@/components/ui";
import { Leaf, ShieldCheck, Headset } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Crestwood Payments is on a mission to make payments simple, fair, and transparent for Canadian businesses.",
};

const values = [
  {
    icon: Leaf,
    title: "Fair by default",
    body: "Clear pricing and no fine print. If we wouldn't accept a fee as a customer, we won't charge it.",
  },
  {
    icon: ShieldCheck,
    title: "Trustworthy",
    body: "We protect every transaction with bank-grade security and treat your data like it's our own.",
  },
  {
    icon: Headset,
    title: "Genuinely helpful",
    body: "Real people, based in Canada, who pick up the phone and actually solve the problem.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink text-cloud">
        <div className="container-x py-20 sm:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-cloud/80">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Our story
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Payments should be the easy part of running a business.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cloud/75">
              Crestwood Payments was founded on a simple idea: Canadian
              businesses deserve payment tools that are clear, fairly priced,
              and backed by people who care. Too many providers bury merchants
              in fees and phone trees. We're building the opposite.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid grid-cols-2 gap-8 rounded-2xl border border-black/5 bg-cloud p-8 shadow-sm sm:grid-cols-4">
          <Stat value="Canada" label="proudly built & based" />
          <Stat value="7 days" label="a week support" />
          <Stat value="$0" label="setup & cancellation fees" />
          <Stat value="Next-day" label="deposits on eligible sales" />
        </div>
      </section>

      <section className="container-x pb-4">
        <Reveal>
          <SectionHeading
            eyebrow="What we stand for"
            title="The principles behind Crestwood"
            center
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-black/5 bg-cloud p-7 shadow-sm">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-mint text-evergreen">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-20">
        <div className="rounded-3xl bg-gradient-to-br from-evergreen to-evergreen-600 px-8 py-14 text-center text-cloud shadow-lg sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Come grow with us
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cloud/80">
            Whether you're opening your first shop or running ten locations,
            we'd love to help you get paid.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonArrow href="/apply" variant="gold">
              Get started
            </ButtonArrow>
            <Button href="/contact" variant="ghost-light">
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
