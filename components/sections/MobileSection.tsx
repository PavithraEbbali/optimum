import { Check, Signal } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import CardImage from "@/components/ui/CardImage";
import SectionBackground from "@/components/ui/SectionBackground";
import CallLink from "@/components/ui/CallLink";
import { mobilePlans, mobileIntro } from "@/lib/content";

/** §8 in service-line order — MOBILE (Optimum Mobile®). */
export default function MobileSection() {
  return (
    <section id="mobile" className="isolate relative section bg-white">
      <SectionBackground id="mobile" tone="white" />
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">Mobile</p>
          <h2 className="section-title mt-2">{mobileIntro.title}</h2>
          <p className="section-sub">{mobileIntro.blurb}</p>

          <p className="mt-5 inline-flex items-center gap-2.5 rounded-xl border border-optimum-blue/25 bg-surface-soft px-4 py-2.5 text-sm font-semibold text-optimum-blue">
            <Signal size={16} aria-hidden="true" />
            {mobileIntro.savings}
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mobilePlans.map((plan, i) => (
            <Reveal as="li" key={plan.id} delay={i * 60} className="h-full">
              <article
                className={`flex h-full flex-col rounded-2xl border bg-white p-6 ${
                  plan.badge
                    ? "border-optimum-blue shadow-[0_1px_3px_rgba(0,69,135,0.12)]"
                    : "border-slate-200 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                }`}
              >
                <CardImage src={plan.image} className="mb-4" />
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-base font-extrabold tracking-tight text-ink">
                    {plan.name}
                  </h3>
                  {plan.badge ? (
                    <span className="shrink-0 rounded-full bg-optimum-blue px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                      {plan.badge}
                    </span>
                  ) : null}
                </div>

                <p className="mt-1.5 text-sm font-bold text-optimum-blue">{plan.data}</p>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{plan.blurb}</p>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <Check size={15} className="mt-0.5 shrink-0 text-optimum-blue" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <CallLink label="order"
                    placement={`mobile-${plan.id}`}
                    className="w-full px-4 py-3 text-sm"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-8">
          <div className="rounded-2xl border border-slate-200 bg-surface-soft p-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-ink">
              Mobile disclosures
            </h3>
            <ul className="mt-3 space-y-2">
              {mobileIntro.disclosures.map((d) => (
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
