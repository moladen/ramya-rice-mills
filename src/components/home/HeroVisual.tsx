"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ShieldCheckIcon } from "@/components/icons";

/**
 * The hero's visual. Mobile/tablet: a contained, safely-cropped product shot
 * in normal document flow, after the text. Desktop (md:): the same photo
 * escapes to `absolute inset-0`, becoming the section's full-bleed backdrop,
 * with the text panel (rendered separately in page.tsx, given its own
 * `relative z-10`) stacking above it — never behind it, since both are now
 * explicitly positioned with a defined z-order rather than one static/one
 * absolute (the bug from an earlier pass).
 *
 * Image note: "hero-mill-showcase-2.png" has "RAMYA RICE MILLS LLP" signage
 * on the mill building at roughly the horizontal center (~53-63% across) —
 * left visible intentionally (it reads as a real facility, not a prop) — with
 * the premium rice sack, bowl, and scoop on the opposite side (~55-100%). The
 * left-side gradient below exists for heading legibility only, not to hide
 * the signage; it fades out well before that band. On mobile the image is
 * cropped to a portrait product close-up anchored to the right edge of the
 * source photo.
 */
export function HeroVisual() {
  const [loaded, setLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
      setLoaded(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  // Extremely subtle scroll parallax on the backdrop — desktop only, skipped
  // for reduced-motion users.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(min-width: 768px)").matches) return;
    const node = imageRef.current;
    if (!node) return;

    let ticking = false;
    const update = () => {
      const rect = node.getBoundingClientRect();
      const offset = Math.max(-14, Math.min(14, rect.top * -0.03));
      node.style.transform = `translate3d(0, ${offset}px, 0) scale(1.04)`;
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`relative z-0 aspect-[3/5] w-full overflow-hidden md:absolute md:inset-0 md:aspect-auto md:h-full ${
        reducedMotion ? "" : "transition-opacity duration-[1300ms] ease-out"
      } ${loaded ? "opacity-100" : "opacity-0"}`}
    >
      <div ref={imageRef} className="absolute inset-0 will-change-transform md:-m-3">
        <Image
          src="/images/hero-mill-showcase-2.png"
          alt="Ramya Rice premium rice sack, bowl, and scoop in golden light, with paddy fields and the processing facility in the background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[100%_center] saturate-[1.05] contrast-[1.04] brightness-[1.1] md:object-[48%_42%]"
        />
      </div>

      {/* Left-to-right blend for text legibility — desktop only. This same
          gradient covers the signage band on the mill building (see file
          note above), so the product on the right stays clear and lit. */}
      <div className="pointer-events-none absolute inset-0 hidden md:block md:bg-gradient-to-r md:from-primary-dark md:from-0% md:via-primary-dark/92 md:via-[52%] md:to-transparent md:to-[88%]" />
      <div className="pointer-events-none absolute inset-0 hidden md:block md:bg-gradient-to-t md:from-black/25 md:via-transparent md:to-black/20" />

      {/* Floating badge — the single quality credential the brief asks for, anchored to
          the upper-right of the photo (over the mill/sky, clear of the text column on
          the left) so it can never compete with or run into the heading. */}
      <div
        className={`pointer-events-none absolute right-6 top-6 hidden max-w-[12rem] items-start gap-2.5 rounded-lg border border-gold/25 bg-cream px-3.5 py-2.5 shadow-[0_14px_28px_-14px_rgba(7,38,19,0.5)] md:flex lg:right-10 lg:top-8 ${
          reducedMotion ? "" : "transition-all duration-700 ease-out"
        } ${loaded ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
        style={reducedMotion ? undefined : { transitionDelay: "800ms" }}
      >
        <div className="animate-float" style={{ animationDuration: "6.5s" }}>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
            <ShieldCheckIcon className="h-3.5 w-3.5" strokeWidth={1.6} />
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[0.72rem] font-semibold text-ink">100% Quality Focus</span>
          <span className="text-[0.65rem] leading-snug text-ink-faint">From Field to Global Markets</span>
        </div>
      </div>
    </div>
  );
}
