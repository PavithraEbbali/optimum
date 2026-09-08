import { Check, Plus } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import CardImage from "@/components/ui/CardImage";
import SectionBackground from "@/components/ui/SectionBackground";
import CallLink from "@/components/ui/CallLink";
import { bundles } from "@/lib/content";

/** §6 in service-line order — BUNDLES (Optimum Complete & multi-product savings). */
export default function BundlesSection() {
  return (
    <section id="bundles" className="isolate relative section bg-white">
      <SectionBackground id="bundles" tone="white" />
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">Bundles</p>
          <h2 className="section-title mt-2">Save by combining services</h2>
          <p className="section-sub">
            Optimum Complete pairs internet with Optimum Mobile for monthly bill credits.
            TV bundles combine high-speed internet with a Core or Select package.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-6 lg:grid-cols-3">
          {bundles.map((bundle, i) => (
            <Reveal as="li" key={bundle.id} delay={i * 60} className="h-full">
              <article
                className={`flex h-full flex-col rounded-2xl border bg-white p-6 ${
                  bundle.badge
                    ? "border-optimum-blue shadow-[0_1px_3px_rgba(0,69,135,0.12)]"
                    : "border-slate-200 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                }`}
              >
                <CardImage src={bundle.image} className="mb-4" />
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-extrabold tracking-tight text-ink">
                    {bundle.name}
                  </h3>
                  {bundle.badge ? (
                    <span className="shrink-0 rounded-full bg-optimum-blue px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                      {bundle.badge}
                    </span>
                  ) : null}
                </div>

                {/* What's in the bundle */}
                <ul className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1.5">
                  {bundle.includes.map((item, idx) => (
                    <li key={item} className="flex items-center gap-2">
                      {idx > 0 ? (
                        <Plus size={13} className="text-slate-400" aria-hidden="true" />
                      ) : null}
                      <span className="rounded-lg bg-surface-soft px-2.5 py-1 text-xs font-semibold text-ink-muted">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded-xl border border-slate-200 bg-surface-soft p-4">
                  <p className="font-display text-2xl font-extrabold tracking-tight text-optimum-blue">
                    {bundle.savings}
                  </p>
                  <p className="mt-0.5 text-sm text-slate-600">{bundle.savingsNote}</p>
                </div>

                {/* Conditions stated explicitly, not buried */}
                <div className="mt-5 flex-1">
                  <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-ink">
                    Conditions
                  </h4>
                  <ul className="mt-2.5 space-y-2">
                    {bundle.conditions.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-xs leading-relaxed text-slate-600">
                        <Check size={13} className="mt-0.5 shrink-0 text-slate-400" aria-hidden="true" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <CallLink label="order" placement={`bundle-${bundle.id}`} className="w-full" />
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
