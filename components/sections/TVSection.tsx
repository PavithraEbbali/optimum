import { Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import CardImage from "@/components/ui/CardImage";
import SectionBackground from "@/components/ui/SectionBackground";
import CallLink from "@/components/ui/CallLink";
import { tvPackages, tvDisclosures } from "@/lib/content";

/** §7 in service-line order — TV (Optimum TV & Entertainment). */
export default function TVSection() {
  return (
    <section id="tv" className="isolate relative section bg-surface-soft">
      <SectionBackground id="tv" tone="soft" />
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">TV</p>
          <h2 className="section-title mt-2">Optimum TV &amp; Entertainment</h2>
          <p className="section-sub">
            Channel packages from the essentials up to premium movie networks, plus a 4K
            streaming device that brings your apps together.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tvPackages.map((pkg, i) => (
            <Reveal as="li" key={pkg.id} delay={i * 60} className="h-full">
              <article
                className={`flex h-full flex-col rounded-2xl border bg-white p-6 ${
                  pkg.badge
                    ? "border-optimum-blue shadow-[0_1px_3px_rgba(0,69,135,0.12)]"
                    : "border-slate-200 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                }`}
              >
                <CardImage src={pkg.image} className="mb-4" />
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-extrabold tracking-tight text-ink">
                    {pkg.name}
                  </h3>
                  {pkg.badge ? (
                    <span className="shrink-0 rounded-full bg-optimum-blue px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                      {pkg.badge}
                    </span>
                  ) : null}
                </div>

                <p className="mt-1.5 text-sm font-bold text-optimum-blue">{pkg.channels}</p>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{pkg.blurb}</p>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <Check size={15} className="mt-0.5 shrink-0 text-optimum-blue" aria-hidden="true" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <CallLink label="order"
                    placement={`tv-${pkg.id}`}
                    className="w-full px-4 py-3 text-sm"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        {/* Transparent TV disclosures */}
        <Reveal className="mt-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-ink">
              TV pricing &amp; fee disclosures
            </h3>
            <ul className="mt-3 space-y-2">
              {tvDisclosures.map((d) => (
                <li key={d} className="fine flex items-start gap-2">
                  <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
