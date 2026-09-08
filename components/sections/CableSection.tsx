import { Info } from "lucide-react";
import PlanCard from "@/components/ui/PlanCard";
import Reveal from "@/components/ui/Reveal";
import SectionBackground from "@/components/ui/SectionBackground";
import { cableIntro, cablePlans } from "@/lib/content";

/**
 * §5 in service-line order — CABLE / BROADBAND.
 *
 * The anchor is #internet (per the §2.1 nav spec). Asymmetrical cable speeds
 * are labelled explicitly so they are never read as 100% Fiber.
 */
export default function CableSection() {
  return (
    <section id="internet" className="isolate relative section bg-surface-soft">
      <SectionBackground id="internet" tone="soft" />
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">Cable Internet</p>
          <h2 className="section-title mt-2">{cableIntro.title}</h2>
          <p className="section-sub">{cableIntro.blurb}</p>

          <p className="mt-5 flex max-w-2xl items-start gap-2.5 rounded-xl border border-slate-200 bg-white p-4 text-sm leading-relaxed text-ink-muted">
            <Info size={17} className="mt-0.5 shrink-0 text-optimum-blue" aria-hidden="true" />
            <span>{cableIntro.distinction}</span>
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cablePlans.map((plan, i) => (
            <Reveal as="li" key={plan.id} delay={i * 60} className="h-full">
              <PlanCard plan={plan} placement={`cable-${plan.id}`} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
