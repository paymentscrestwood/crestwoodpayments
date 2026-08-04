"use client";

import { useMemo, useState } from "react";
import { Button } from "./ui";

/* Illustrative rate model. These numbers are sample pricing for the demo
   estimate — swap in your real published rates before launch. */
const CRESTWOOD = {
  inPerson: { pct: 0.024, flat: 0.1 },
  online: { pct: 0.027, flat: 0.3 },
  monthly: 0,
};
const TYPICAL = {
  inPerson: { pct: 0.0265, flat: 0.1 },
  online: { pct: 0.029, flat: 0.3 },
  monthly: 25,
};

function cad(n: number) {
  return n.toLocaleString("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 2,
  });
}

function cost(
  rates: typeof CRESTWOOD,
  volume: number,
  avgTicket: number,
  inPersonShare: number,
) {
  const txns = avgTicket > 0 ? volume / avgTicket : 0;
  const inPersonVol = volume * inPersonShare;
  const onlineVol = volume * (1 - inPersonShare);
  const inPersonTxns = txns * inPersonShare;
  const onlineTxns = txns * (1 - inPersonShare);
  const fees =
    inPersonVol * rates.inPerson.pct +
    inPersonTxns * rates.inPerson.flat +
    onlineVol * rates.online.pct +
    onlineTxns * rates.online.flat +
    rates.monthly;
  return { fees, txns };
}

export default function RateCalculator() {
  const [volume, setVolume] = useState(25000);
  const [avgTicket, setAvgTicket] = useState(45);
  const [inPersonShare, setInPersonShare] = useState(0.7);

  const result = useMemo(() => {
    const cw = cost(CRESTWOOD, volume, avgTicket, inPersonShare);
    const tp = cost(TYPICAL, volume, avgTicket, inPersonShare);
    const effRate = volume > 0 ? cw.fees / volume : 0;
    const monthlySaving = Math.max(0, tp.fees - cw.fees);
    return {
      crestwood: cw.fees,
      typical: tp.fees,
      effRate,
      txns: cw.txns,
      monthlySaving,
      yearlySaving: monthlySaving * 12,
    };
  }, [volume, avgTicket, inPersonShare]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
      {/* Inputs */}
      <div className="rounded-2xl border border-black/5 bg-cloud p-6 shadow-sm sm:p-8">
        <h3 className="text-lg font-semibold text-ink">Your business</h3>

        <Field
          label="Monthly card sales"
          value={cad(volume)}
        >
          <input
            type="range"
            min={1000}
            max={250000}
            step={1000}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="accent-evergreen w-full"
            aria-label="Monthly card sales"
          />
        </Field>

        <Field label="Average sale" value={cad(avgTicket)}>
          <input
            type="range"
            min={5}
            max={500}
            step={1}
            value={avgTicket}
            onChange={(e) => setAvgTicket(Number(e.target.value))}
            className="accent-evergreen w-full"
            aria-label="Average sale amount"
          />
        </Field>

        <Field
          label="In-person vs online"
          value={`${Math.round(inPersonShare * 100)}% in person`}
        >
          <input
            type="range"
            min={0}
            max={100}
            step={5}
            value={inPersonShare * 100}
            onChange={(e) => setInPersonShare(Number(e.target.value) / 100)}
            className="accent-evergreen w-full"
            aria-label="Share of sales in person"
          />
        </Field>

        <p className="mt-6 text-xs leading-relaxed text-slate">
          Estimated{" "}
          <span className="font-semibold text-ink">
            {Math.round(result.txns).toLocaleString("en-CA")}
          </span>{" "}
          transactions / month. Figures are estimates for illustration only and
          are not a quote.
        </p>
      </div>

      {/* Output */}
      <div className="rounded-2xl bg-ink p-6 text-cloud shadow-sm sm:p-8">
        <span className="text-sm text-cloud/60">
          Estimated Crestwood cost
        </span>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-5xl font-semibold tracking-tight">
            {cad(result.crestwood)}
          </span>
          <span className="text-cloud/60">/mo</span>
        </div>
        <div className="mt-2 text-sm text-cloud/70">
          Effective rate{" "}
          <span className="font-semibold text-gold">
            {(result.effRate * 100).toFixed(2)}%
          </span>{" "}
          of sales
        </div>

        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-cloud/70">A typical provider</span>
            <span className="font-medium text-cloud/90">
              {cad(result.typical)}/mo
            </span>
          </div>
          <div className="mt-3 border-t border-white/10 pt-3">
            <div className="text-sm text-cloud/70">
              Your estimated savings
            </div>
            <div className="mt-1 text-2xl font-semibold text-gold">
              {cad(result.monthlySaving)}/mo
            </div>
            <div className="text-sm text-cloud/60">
              about {cad(result.yearlySaving)} per year
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Button href="/apply" variant="gold" className="w-full">
            Get my exact rate
          </Button>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  children,
}: {
  label: string;
  value: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-ink">{label}</label>
        <span className="text-sm font-semibold text-evergreen">{value}</span>
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}
