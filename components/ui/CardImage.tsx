import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Card thumbnail.
 *
 * Uses next/image so the 15 card images below the fold are lazy-loaded and
 * served at a size matched to the card (~300px rendered), rather than all
 * fetched up front as CSS backgrounds would be.
 *
 * An absent `src` falls back to the Optimum-blue gradient, so a card whose
 * artwork has not been produced yet still renders as a deliberate design rather
 * than a broken image.
 *
 * Decorative — the card heading carries the meaning, so it is hidden from
 * assistive technology and given an empty alt.
 */
export default function CardImage({
  src,
  className,
  ratio = "aspect-[16/9]",
}: {
  /** Path under /public. Undefined renders the gradient alone. */
  src?: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden rounded-xl bg-gradient-to-br from-optimum-blue via-optimum-accent to-optimum-blue",
        ratio,
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt=""
          width={800}
          height={450}
          loading="lazy"
          sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
    </div>
  );
}
