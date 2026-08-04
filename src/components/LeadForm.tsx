"use client";

import { useState } from "react";
import { Check, ArrowRight } from "./icons";

type FieldDef = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "select" | "textarea";
  required?: boolean;
  options?: string[];
  full?: boolean;
};

const baseInput =
  "w-full rounded-lg border border-black/10 bg-cloud px-3.5 py-2.5 text-sm text-ink shadow-sm outline-none transition-colors focus:border-evergreen focus:ring-2 focus:ring-evergreen/20";

export default function LeadForm({
  fields,
  submitLabel,
  kind,
}: {
  fields: FieldDef[];
  submitLabel: string;
  kind: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const payload: Record<string, string> = { kind };
    new FormData(form).forEach((value, key) => {
      payload[key] = String(value);
    });

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      setStatus("done");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-black/5 bg-cloud p-8 text-center shadow-sm">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-mint text-evergreen">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="mt-4 text-xl font-semibold text-ink">
          Thanks — we've got it!
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-slate">
          A member of the Crestwood team will be in touch shortly. Keep an eye
          on your inbox.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-black/5 bg-cloud p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div
            key={field.name}
            className={field.full ? "sm:col-span-2" : undefined}
          >
            <label
              htmlFor={field.name}
              className="mb-1.5 block text-sm font-medium text-ink"
            >
              {field.label}
              {field.required && <span className="text-gold"> *</span>}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                required={field.required}
                rows={4}
                className={baseInput}
              />
            ) : field.type === "select" ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                defaultValue=""
                className={baseInput}
              >
                <option value="" disabled>
                  Select…
                </option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type ?? "text"}
                required={field.required}
                className={baseInput}
              />
            )}
          </div>
        ))}
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-evergreen px-5 py-3 text-sm font-semibold text-cloud shadow-sm transition-colors hover:bg-evergreen-600 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : submitLabel}
        {status !== "sending" && <ArrowRight className="h-4 w-4" />}
      </button>

      <p className="mt-3 text-xs text-slate">
        By submitting, you agree to be contacted by {`Crestwood Payments`} about
        your enquiry.
      </p>
    </form>
  );
}
