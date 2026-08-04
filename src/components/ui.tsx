import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { ArrowRight } from "./icons";

/* Small presentational primitives shared across pages. */

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-mint px-3 py-1 text-xs font-semibold uppercase tracking-wide text-evergreen-600">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-slate">{intro}</p>}
    </div>
  );
}

export function FeatureCard({
  icon: Icon,
  title,
  children,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group rounded-2xl border border-black/5 bg-cloud p-6 shadow-sm transition-shadow hover:shadow-md">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-mint text-evergreen">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate">{children}</p>
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "gold" | "outline" | "ghost-light";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-evergreen text-cloud shadow-sm hover:bg-evergreen-600",
    gold: "bg-gold text-ink shadow-sm hover:bg-gold-600",
    outline:
      "border border-evergreen/30 text-evergreen hover:bg-mint",
    "ghost-light":
      "border border-white/25 text-cloud hover:bg-white/10",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

export function ButtonArrow({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "gold" | "outline" | "ghost-light";
}) {
  return (
    <Button href={href} variant={variant}>
      {children} <ArrowRight className="h-4 w-4" />
    </Button>
  );
}

export function Stat({
  value,
  label,
  light = false,
}: {
  value: string;
  label: string;
  light?: boolean;
}) {
  return (
    <div>
      <div
        className={`text-4xl font-semibold tracking-tight ${
          light ? "text-cloud" : "text-evergreen"
        }`}
      >
        {value}
      </div>
      <div
        className={`mt-1 text-sm ${light ? "text-cloud/70" : "text-slate"}`}
      >
        {label}
      </div>
    </div>
  );
}
