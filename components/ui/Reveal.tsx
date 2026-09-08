"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { cn } from "@/lib/cn";

/** useLayoutEffect on the client, useEffect on the server (avoids the SSR warning). */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * §4 — the ONLY motion primitive on the page.
 *
 * A one-shot entrance (opacity + 12px translate, 400ms), applied as PROGRESSIVE
 * ENHANCEMENT rather than as a default-hidden state:
 *
 *  - Server-rendered HTML is fully visible. If JavaScript never runs, if it
 *    fails, or if IntersectionObserver is unavailable, the content is simply
 *    there — a landing page must never render blank because an animation hook
 *    did not fire.
 *  - The hidden start state is armed in a layout effect, i.e. after hydration
 *    but before the browser paints, so arming causes no flash of visible content.
 *  - A failsafe timer reveals the element regardless if the observer has not
 *    reported within 1.5s (some environments throttle or drop IO callbacks).
 */
export default function Reveal({
  children,
  className,
  /** Stagger in ms — kept small; siblings should feel like one gesture. */
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
}) {
  const ref = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion, or no observer support: leave the element visible as-is.
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // Arm the hidden start state before paint.
    el.dataset.armed = "true";

    let settled = false;
    const show = () => {
      if (settled) return;
      settled = true;
      el.classList.add("is-visible");
      window.clearTimeout(failsafe);
      observer.disconnect();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) show();
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);

    const failsafe = window.setTimeout(show, 1500);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
