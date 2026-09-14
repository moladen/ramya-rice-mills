import Image from "next/image";
import { GlobeIcon } from "@/components/icons";

/**
 * Homepage-only Global Presence visual: the port/container photo as the
 * main shot, a small rice-grain accent photo overlapping its corner (the
 * same "large photo + small overlapping corner photo" treatment already
 * used in the ABOUT section, reused here so "rice" stays visually tied to
 * the export story without compositing a second image into one frame),
 * and a floating "Global Supply" badge.
 *
 * Image note: "shipping-port.jpg" has a real, readable third-party company
 * name ("Bertschi AG") printed on a container in its bottom-left corner —
 * not Ramya Rice's, and not something this site should display as if it
 * were. The crop below (object-position biased to the upper-right — city
 * skyline, water, container tops) keeps that corner out of frame at every
 * supported aspect ratio rather than just hoping it scrolls off.
 */
export function GlobalPresenceVisual() {
  return (
    <div className="group relative">
      <div className="relative aspect-square overflow-hidden rounded-3xl border border-gold/15 shadow-[0_40px_80px_-32px_rgba(7,38,19,0.55)]">
        <Image
          src="/images/shipping-port.jpg"
          alt="Cargo containers at an international shipping port, ready for export"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-[82%_20%] saturate-[1.05] transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-primary-dark/10 to-transparent" />

        {/* Floating badge — "Global Supply" indicator, no coverage claims */}
        <div className="pointer-events-none absolute left-5 top-5 flex max-w-[13rem] items-start gap-2.5 rounded-lg border border-gold/25 bg-cream px-3.5 py-2.5 shadow-[0_14px_28px_-14px_rgba(7,38,19,0.5)] transition-transform duration-300 group-hover:-translate-y-0.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-tint text-gold">
            <GlobeIcon className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
          </span>
          <div className="flex flex-col">
            <span className="text-[0.72rem] font-semibold text-ink">Global Supply</span>
            <span className="text-[0.65rem] leading-snug text-ink-faint">Built for International B2B</span>
          </div>
        </div>
      </div>

      {/* Small rice accent — same corner-overlap pattern as the About section */}
      <div className="absolute -bottom-6 -right-4 hidden h-28 w-28 overflow-hidden rounded-2xl border-4 border-cream shadow-xl sm:block sm:h-32 sm:w-32">
        <Image
          src="/images/rice-grains.jpg"
          alt="Close-up of premium milled Ramya Rice grains"
          fill
          sizes="130px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
