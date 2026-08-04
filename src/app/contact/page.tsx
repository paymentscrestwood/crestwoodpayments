import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { SectionHeading } from "@/components/ui";
import { Headset, Globe, ShieldCheck } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to the Crestwood Payments team about pricing, switching providers, or a demo.",
};

export default function ContactPage() {
  return (
    <section className="container-x py-16 sm:py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk payments"
        intro="Questions about pricing, switching from another provider, or want a quick demo? Send a note and we'll get back to you fast."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          {[
            {
              icon: Headset,
              title: "Talk to a human",
              body: `Call us at ${site.phone}, 7 days a week.`,
            },
            {
              icon: Globe,
              title: "Email the team",
              body: site.email,
            },
            {
              icon: ShieldCheck,
              title: "Already a customer?",
              body: "Existing merchants get priority support through the dashboard.",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mint text-evergreen">
                <item.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm text-slate">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <LeadForm
          kind="contact"
          submitLabel="Send message"
          fields={[
            { name: "name", label: "Full name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "business", label: "Business name" },
            { name: "phone", label: "Phone", type: "tel" },
            {
              name: "topic",
              label: "What's this about?",
              type: "select",
              options: [
                "Pricing & rates",
                "Switching providers",
                "Request a demo",
                "Existing customer support",
                "Something else",
              ],
              full: true,
            },
            {
              name: "message",
              label: "Message",
              type: "textarea",
              required: true,
              full: true,
            },
          ]}
        />
      </div>
    </section>
  );
}
