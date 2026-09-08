import Reveal from "@/components/ui/Reveal";
import SectionBackground from "@/components/ui/SectionBackground";
import CardImage from "@/components/ui/CardImage";
import CallLink from "@/components/ui/CallLink";
import { valueAddedServices } from "@/lib/content";

/**
 * §2.4 / §6 — Value-Added Services.
 *
 * Genuine Optimum product add-ons only. Each card states its real recurring
 * charge, including the Total Care step-up at month 19 (§7.4).
 */
export default function ValueAddedServices() {
  return (
    <section id="add-ons" className="isolate relative section bg-white">
      <SectionBackground id="add-ons" tone="white" />
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">Add-ons</p>
          <h2 className="section-title mt-2">Optional Optimum add-ons</h2>
          <p className="section-sub">
            Available with your Optimum service. Each add-on is billed monthly in addition
            to your plan rate.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueAddedServices.map((addOn, i) => (
            <Reveal as="li" key={addOn.id} delay={i * 60} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-surface-soft p-6">
                <CardImage src={addOn.image} className="mb-4" />
                <h3 className="font-display text-base font-extrabold tracking-tight text-ink">
                  {addOn.name}
                </h3>
                <p className="mt-1.5 font-display text-xl font-extrabold tracking-tight text-optimum-blue">
                  {addOn.price}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {addOn.blurb}
                </p>
                <p className="fine mt-4 border-t border-slate-200 pt-3">{addOn.note}</p>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-8">
          <CallLink label="order" placement="value-added-services" variant="outline">
            <span>Ask an agent about add-ons</span>
          </CallLink>
        </Reveal>
      </div>
    </section>
  );
}
