import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { SectionHeading } from "@/components/ui";
import { Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "Get started",
  description:
    "Apply for a Crestwood Payments account. Most applications are reviewed the same day.",
};

const perks = [
  "No setup fees or lock-in contracts",
  "Same-day review on most applications",
  "Keep your current bank account",
  "Free help switching from your old provider",
];

export default function ApplyPage() {
  return (
    <section className="container-x py-16 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <SectionHeading
            eyebrow="Get started"
            title="Apply in a few minutes"
            intro="Tell us a bit about your business and we'll get your account set up. There's no cost to apply and no obligation."
          />
          <ul className="mt-8 grid gap-3">
            {perks.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint text-evergreen">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm text-ink">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <LeadForm
          kind="application"
          submitLabel="Submit application"
          fields={[
            { name: "name", label: "Your name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            {
              name: "business",
              label: "Business name",
              required: true,
            },
            { name: "phone", label: "Phone", type: "tel", required: true },
            {
              name: "businessType",
              label: "Business type",
              type: "select",
              options: [
                "Retail / storefront",
                "Restaurant / café",
                "E-commerce / online",
                "Services / trades",
                "Other",
              ],
            },
            {
              name: "monthlyVolume",
              label: "Estimated monthly card sales",
              type: "select",
              options: [
                "Under $5,000",
                "$5,000 – $25,000",
                "$25,000 – $100,000",
                "Over $100,000",
              ],
            },
            {
              name: "channels",
              label: "How do you want to accept payments?",
              type: "select",
              options: [
                "In person only",
                "Online only",
                "Both in person and online",
                "Not sure yet",
              ],
              full: true,
            },
            {
              name: "notes",
              label: "Anything else we should know?",
              type: "textarea",
              full: true,
            },
          ]}
        />
      </div>
    </section>
  );
}
