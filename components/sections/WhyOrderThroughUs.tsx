import { PhoneCall, Tags, MapPin, Headset } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { whyOrderCards } from "@/lib/content";

/**
 * §2.6 — Why order through us.
 *
 * Approved convenience claims only. Nothing here asserts a local presence, a
 * storefront, in-house technicians, or a "best price" guarantee (§5.1); the
 * value stated is purely the convenience of the order line (§5.2).
 */
const ICONS = [PhoneCall, Tags, MapPin, Headset];

export default function WhyOrderThroughUs() {
  return (
    <section id="why-us" className="section bg-white">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">Why order through us</p>
          <h2 className="section-title mt-2">One call, every Optimum service</h2>
          <p className="section-sub">
            We are an independent authorized retailer. Optimum sets the pricing and
            fulfils the order — we make placing it straightforward.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyOrderCards.map((card, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal as="li" key={card.id} delay={i * 60} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-surface-soft p-6">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-optimum-blue/10 text-optimum-blue"
                    aria-hidden="true"
                  >
                    <Icon size={19} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-extrabold tracking-tight text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.body}</p>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
