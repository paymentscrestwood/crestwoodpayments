import type { Metadata } from "next";
import RateCalculator from "@/components/RateCalculator";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Rate Calculator",
  description:
    "Estimate your monthly payment processing cost and potential savings with Crestwood Payments.",
};

export default function CalculatorPage() {
  return (
    <section className="container-x py-16 sm:py-20">
      <SectionHeading
        eyebrow="Rate calculator"
        title="See what you could save"
        intro="Drag the sliders to match your business. We'll estimate your monthly cost and how it compares — no email required."
      />
      <div className="mt-12">
        <RateCalculator />
      </div>
    </section>
  );
}
