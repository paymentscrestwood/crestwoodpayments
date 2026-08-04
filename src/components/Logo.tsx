import { site } from "@/lib/site";

/* Wordmark + mark. The mark is a stylized "crest" peak inside a rounded
   badge — ties to the Crestwood name without needing an image asset. */
export default function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const wordColor = variant === "light" ? "text-cloud" : "text-ink";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden
        className="grid h-9 w-9 place-items-center rounded-xl bg-evergreen text-cloud shadow-sm"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 17L9 7l3 4 3-6 6 12H3z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <circle cx="15" cy="5" r="1.6" fill="var(--color-gold)" />
        </svg>
      </span>
      <span className={`text-lg font-semibold tracking-tight ${wordColor}`}>
        {site.shortName}
        <span className="text-evergreen-400"> Payments</span>
      </span>
    </span>
  );
}
