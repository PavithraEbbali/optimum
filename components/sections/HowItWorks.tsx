import Reveal from "@/components/ui/Reveal";
import SectionBackground from "@/components/ui/SectionBackground";
import CallLink from "@/components/ui/CallLink";
import { site } from "@/lib/site";
import { howItWorksSteps } from "@/lib/content";

/** §2.7 — How it works. Exactly three steps, ending in a call. */
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="isolate relative section bg-surface-soft">
      <SectionBackground id="how-it-works" tone="soft" />
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">How it works</p>
          <h2 className="section-title mt-2">Three steps to get connected</h2>
        </Reveal>

        <ol className="mt-10 grid gap-6 lg:grid-cols-3">
          {howItWorksSteps.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 70} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6">
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-optimum-blue font-display text-sm font-extrabold text-white"
                  aria-hidden="true"
                >
                  {step.n}
                </span>
                <h3 className="mt-4 font-display text-lg font-extrabold tracking-tight text-ink">
                  <span className="sr-only">Step {step.n}: </span>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        {/* The flow ends in a call */}
        <Reveal className="mt-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center sm:p-8">
            <h3 className="font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
              Ready to start? Call the order line.
            </h3>
            <p className="mt-2 text-sm text-slate-600">Agents available {site.hours}</p>
            <div className="mt-6 flex justify-center">
              <CallLink label="order" placement="how-it-works" variant="large" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
