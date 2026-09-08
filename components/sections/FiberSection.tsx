import PlanCard from "@/components/ui/PlanCard";
import Reveal from "@/components/ui/Reveal";
import SectionBackground from "@/components/ui/SectionBackground";
import { fiberIntro, fiberPlans } from "@/lib/content";

/** §4 in service-line order — FIBER (Optimum 100% Fiber Internet®). */
export default function FiberSection() {
  return (
    <section id="fiber" className="isolate relative section bg-white">
      <SectionBackground id="fiber" tone="white" />
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">Fiber Internet</p>
          <h2 className="section-title mt-2">{fiberIntro.title}</h2>
          <p className="section-sub">{fiberIntro.blurb}</p>
        </Reveal>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fiberPlans.map((plan, i) => (
            <Reveal as="li" key={plan.id} delay={i * 60} className="h-full">
              <PlanCard plan={plan} placement={`fiber-${plan.id}`} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
