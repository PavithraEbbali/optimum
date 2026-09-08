import { ExternalLink } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import { finePrintRows, finePrintNotes, broadbandFactsLinkLabel } from "@/lib/content";

const COLUMNS = [
  "Tier",
  "Typical speeds",
  "Promo price",
  "After promo",
  "Equipment fee",
  "Installation",
  "Data cap",
] as const;

/**
 * §2.5 — Honest fine-print grid.
 *
 * Mirrors the FCC Broadband Facts disclosure shape: promo price and the
 * post-promo rate sit side by side, so the step-up is never hidden. Renders as
 * a real table on wide screens and as stacked labelled cards on mobile — the
 * same data, never truncated behind a horizontal scroll on a phone.
 */
export default function FinePrintGrid() {
  return (
    <section id="fine-print" className="section bg-surface-soft">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">Pricing details</p>
          <h2 className="section-title mt-2">The fine print, in plain sight</h2>
          <p className="section-sub">
            What you pay now, what you pay after the promotional period, and what is
            billed on top. Rates vary by market — an agent confirms your exact rate
            before you commit.
          </p>
        </Reveal>

        {/* Desktop table */}
        <Reveal className="mt-10 hidden lg:block">
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">
                Optimum tier pricing, equipment, installation and data cap details
              </caption>
              <thead>
                <tr className="border-b border-slate-200 bg-surface-soft">
                  {COLUMNS.map((col) => (
                    <th
                      key={col}
                      scope="col"
                      className="px-4 py-3.5 text-xs font-bold uppercase tracking-[0.08em] text-ink"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {finePrintRows.map((row) => (
                  <tr key={row.tier} className="border-b border-slate-100 last:border-0">
                    <th scope="row" className="px-4 py-4 font-bold text-ink">
                      {row.tier}
                    </th>
                    <td className="px-4 py-4 tabular-nums text-slate-600">{row.speeds}</td>
                    <td className="px-4 py-4 font-bold tabular-nums text-optimum-blue">
                      {row.promo}
                    </td>
                    <td className="px-4 py-4 text-slate-600">{row.postPromo}</td>
                    <td className="px-4 py-4 text-slate-600">{row.equipment}</td>
                    <td className="px-4 py-4 text-slate-600">{row.install}</td>
                    <td className="px-4 py-4 text-slate-600">{row.dataCap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Mobile / tablet: stacked cards carrying the same fields */}
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:hidden">
          {finePrintRows.map((row, i) => (
            <Reveal as="li" key={row.tier} delay={i * 50}>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-display text-base font-extrabold tracking-tight text-ink">
                  {row.tier}
                </h3>
                <dl className="mt-3 space-y-2.5 text-sm">
                  {[
                    ["Typical speeds", row.speeds],
                    ["Promo price", row.promo],
                    ["After promo", row.postPromo],
                    ["Equipment fee", row.equipment],
                    ["Installation", row.install],
                    ["Data cap", row.dataCap],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between gap-4">
                      <dt className="shrink-0 text-slate-500">{label}</dt>
                      <dd className="text-right font-medium text-ink-muted">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </ul>

        {/* Notes + official Broadband Facts link */}
        <Reveal className="mt-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <ul className="space-y-2">
              {finePrintNotes.map((n) => (
                <li key={n} className="fine flex items-start gap-2">
                  <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>

            <a
              href={site.broadbandFactsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-optimum-blue underline underline-offset-2 hover:text-optimum-accent"
            >
              {broadbandFactsLinkLabel}
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
