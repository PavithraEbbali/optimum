import { Check, PhoneCall } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionBackground from "@/components/ui/SectionBackground";
import CallLink from "@/components/ui/CallLink";
import { homePhone } from "@/lib/content";

/** §9 in service-line order — PHONE (Optimum Home Phone). */
export default function PhoneSection() {
  return (
    <section id="phone" className="isolate relative section bg-surface-soft">
      <SectionBackground id="phone" tone="soft" />
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">Home Phone</p>
          <h2 className="section-title mt-2">{homePhone.title}</h2>
          <p className="section-sub">{homePhone.blurb}</p>
        </Reveal>

        <Reveal className="mt-10">
          <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:grid-cols-[1fr_1fr]">
            {/* Calling */}
            <div>
              <div className="flex items-center gap-2.5">
                <PhoneCall size={18} className="text-optimum-blue" aria-hidden="true" />
                <h3 className="font-display text-lg font-extrabold tracking-tight text-ink">
                  Unlimited calling
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {homePhone.calling.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check size={16} className="mt-0.5 shrink-0 text-optimum-blue" aria-hidden="true" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <CallLink label="order" placement="home-phone" />
              </div>
            </div>

            {/* Features */}
            <div className="lg:border-l lg:border-slate-200 lg:pl-8">
              <h3 className="font-display text-lg font-extrabold tracking-tight text-ink">
                Call management
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">{homePhone.featureNote}</p>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
                {homePhone.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check size={15} className="mt-0.5 shrink-0 text-optimum-blue" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* On an opaque surface: this is the only fine print that would
              otherwise sit directly on the section's background photograph. */}
          <p className="fine mt-4 rounded-xl border border-slate-200 bg-white p-4">
            {homePhone.disclosure}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
