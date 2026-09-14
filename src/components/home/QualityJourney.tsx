import type { ComponentType, SVGProps } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  WheatIcon,
  GearIcon,
  LeafIcon,
  GrainIcon,
  FlaskIcon,
  PackageIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "@/components/icons";
import type { ProcessStep } from "@/data/quality-process";

// Presentational only — maps each existing step number to an icon already in
// the shared icon set, by theme (Sourcing → grain, Packaging → package, …).
// No process steps, copy, or claims are added beyond QUALITY_PROCESS_STEPS.
const STEP_ICONS: Record<number, ComponentType<SVGProps<SVGSVGElement>>> = {
  1: WheatIcon,
  2: GearIcon,
  3: LeafIcon,
  4: GrainIcon,
  5: FlaskIcon,
  6: PackageIcon,
  7: ShieldCheckIcon,
  8: TruckIcon,
};

/**
 * Homepage-only "Rice Quality Journey": a connected serpentine two-row
 * timeline at lg+ (steps 1-4 left-to-right, then 5-8 right-to-left, joined
 * by a gold connector down the right edge in its own grid column — so the
 * line never has to run behind card text, and CSS Grid stretches it across
 * both rows natively instead of needing hardcoded pixel math for variable
 * description heights) and a proven vertical timeline below that.
 *
 * Deliberately its own component rather than a rewrite of the shared
 * ProcessTimeline (still available for reuse elsewhere, untouched) or the
 * /quality-process page's own inline timeline (also untouched) — so this
 * redesign can't change anything outside the homepage.
 */
export function QualityJourney({ steps }: { steps: ProcessStep[] }) {
  const firstRow = steps.slice(0, 4);
  const secondRow = steps.slice(4, 8).slice().reverse();
  const ordered = [...firstRow, ...secondRow];

  return (
    <>
      {/* Desktop / large tablet — connected serpentine 2-row journey */}
      <div
        role="list"
        aria-label="Our quality process, from sourcing to dispatch"
        className="relative hidden lg:grid lg:grid-cols-[repeat(4,1fr)_2.5rem] lg:gap-x-6 lg:gap-y-16"
      >
        {ordered.map((step, i) => {
          const row = Math.floor(i / 4);
          const col = i % 4;
          const isRowEnd = col === 3;
          const Icon = STEP_ICONS[step.step];
          return (
            <div key={step.step} style={{ gridColumn: col + 1, gridRow: row + 1 }}>
              <Reveal delay={i * 70} role="listitem" className="group relative">
                {/* Connector to the next step in this row (not drawn after the
                    row's last item — that hand-off is the vertical joiner) */}
                {!isRowEnd ? (
                  <span className="pointer-events-none absolute left-[calc(100%+0.75rem)] top-14 h-px w-[calc(1.5rem-0.5px)] bg-gold/30 transition-colors duration-300 group-hover:bg-gold/70" />
                ) : null}

                <div className="flex flex-col items-center gap-3 text-center">
                  <span className="font-display text-xs font-semibold tracking-[0.25em] text-gold/80 transition-colors duration-300 group-hover:text-gold">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-cream shadow-[0_10px_24px_-14px_rgba(184,138,46,0.5)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-gold group-hover:shadow-[0_16px_32px_-14px_rgba(184,138,46,0.6)]">
                    <Icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-ink">{step.name}</h3>
                  <p className="max-w-[13rem] text-sm leading-relaxed text-ink-soft transition-colors duration-300 group-hover:text-ink">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </div>
          );
        })}

        {/* Vertical joiner: row 1's last column down to row 2's last column —
            a dedicated grid column of its own, so it never overlaps any
            card's text regardless of how each description wraps. */}
        <div aria-hidden className="flex items-stretch justify-center" style={{ gridColumn: 5, gridRow: "1 / 3" }}>
          <span className="w-px bg-gradient-to-b from-gold/20 via-gold/70 to-gold/20" />
        </div>
      </div>

      {/* Tablet / mobile — vertical connected timeline */}
      <div role="list" aria-label="Our quality process, from sourcing to dispatch" className="relative flex flex-col gap-10 lg:hidden">
        <div className="pointer-events-none absolute left-7 top-2 h-[calc(100%-2rem)] w-px bg-gold/25" />
        {steps.map((step, i) => {
          const Icon = STEP_ICONS[step.step];
          return (
            <Reveal key={step.step} delay={i * 60} role="listitem" className="relative flex gap-5">
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-cream shadow-[0_10px_24px_-14px_rgba(184,138,46,0.5)]">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <div className="flex flex-1 flex-col gap-1.5 pt-1">
                <span className="font-display text-xs font-semibold tracking-[0.25em] text-gold/80">
                  {String(step.step).padStart(2, "0")}
                </span>
                <h3 className="font-display text-base font-semibold text-ink">{step.name}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
