"use client";

import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import CallLink from "@/components/ui/CallLink";


/**
 * §2.2 — ZIP availability lookup that routes back to the call line.
 *
 * Deliberately does NOT check a database and does NOT assert that service is
 * available: Optimum serviceability is address-specific, so any on-page "yes"
 * would be an unverifiable availability claim (§5.1). The ZIP is echoed back
 * and the user is routed to the order line, where availability is confirmed for
 * their exact address while they are on the call (§5.2).
 */
export default function ZipChecker() {
  const [zip, setZip] = useState("");
  const [submitted, setSubmitted] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (zip.length === 5) setSubmitted(zip);
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-7">
      <h2 className="font-display text-xl font-extrabold tracking-tight text-ink">
        Check availability at your address
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Optimum plans, speeds and pricing vary by address. Enter your ZIP to get started —
        an agent confirms exactly what is serviceable at your address while you&apos;re on
        the line.
      </p>

      {submitted ? (
        <div className="mt-5">
          <div className="rounded-xl border border-slate-200 bg-surface-soft p-4">
            <p className="text-sm font-semibold text-ink">
              ZIP {submitted} noted — let&apos;s confirm your exact address.
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
              A ZIP code narrows down the market, but serviceability and the network type
              (100% Fiber or cable) are set address by address. Call the order line and an
              agent will confirm availability and today&apos;s pricing for your address.
            </p>
          </div>

          <div className="mt-4">
            <CallLink label="order" placement="zip-checker-result" className="w-full" />
          </div>

          <button
            type="button"
            onClick={() => {
              setSubmitted(null);
              setZip("");
            }}
            className="mt-3 w-full py-2 text-sm font-medium text-slate-600 hover:text-optimum-blue"
          >
            Check another ZIP
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5" aria-label="ZIP code lookup">
          <label htmlFor="zip" className="sr-only">
            ZIP code
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search
                size={17}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <input
                id="zip"
                name="zip"
                type="text"
                inputMode="numeric"
                autoComplete="postal-code"
                pattern="[0-9]{5}"
                maxLength={5}
                required
                placeholder="Enter your ZIP code"
                value={zip}
                onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
                className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-10 pr-4 text-base text-ink placeholder:text-slate-400 focus:border-optimum-accent focus:outline-none focus:ring-2 focus:ring-optimum-accent/25"
              />
            </div>
            <button
              type="submit"
              disabled={zip.length !== 5}
              className="btn-call shrink-0 disabled:opacity-45"
            >
              Continue
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </form>
      )}

    </div>
  );
}
