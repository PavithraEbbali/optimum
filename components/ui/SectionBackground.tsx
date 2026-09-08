import { sectionBackgrounds } from "@/lib/content";

/** Section surface colours as raw RGB channels, for `rgb(var(--bg-tone) / a)`. */
const TONE = {
  white: "255 255 255",
  soft: "248 250 252",
} as const;

/**
 * Full-bleed section background.
 *
 * Layout and the scrim gradient live in globals.css (`.section-bg*`) because
 * they change at the 768px breakpoint: on desktop the photo covers the whole
 * section, while on mobile it becomes a fixed-height band at the top that fades
 * out. A 16:9 photo stretched to cover a 375x2700 section is scaled about 12x
 * and reads as noise, so covering the full height there would be worse than
 * not showing it at all.
 *
 * The layer sits at `z-index: -10` AND every host section sets
 * `isolation: isolate`. Both are required: without the isolation the negative
 * index escapes the section entirely and the photo hides behind the section's
 * own opaque background colour.
 *
 * If the file is missing the scrim renders over the plain section colour, so a
 * section is never broken by an absent image.
 */
export default function SectionBackground({
  id,
  /** "soft" sits on #F8FAFC sections, "white" on white ones. */
  tone = "white",
}: {
  id: string;
  tone?: "white" | "soft";
}) {
  const src = sectionBackgrounds[id];
  if (!src) return null;

  return (
    <div
      aria-hidden="true"
      className="section-bg"
      style={{ ["--bg-tone" as string]: TONE[tone] }}
    >
      <span className="section-bg__img" style={{ backgroundImage: `url('${src}')` }} />
      <span className="section-bg__scrim" />
    </div>
  );
}
