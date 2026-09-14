"use client";

import { useState, type ComponentType, type SVGProps } from "react";
import { StoreIcon, CartIcon, ChefIcon, BoxesIcon, GlobeIcon, TagIcon } from "@/components/icons";
import type { BusinessSolution } from "@/data/business-solutions";

// Resolved inside this client component rather than accepted as a prop —
// icon components are functions, and functions can't cross the server→client
// boundary as props (this is itself a "use client" component). Keying by
// `solution.icon`, a plain string, keeps the data passed in fully serializable.
const SOLUTION_ICONS: Record<BusinessSolution["icon"], ComponentType<SVGProps<SVGSVGElement>>> = {
  store: StoreIcon,
  cart: CartIcon,
  chef: ChefIcon,
  boxes: BoxesIcon,
  globe: GlobeIcon,
  tag: TagIcon,
};

/**
 * Homepage-only accordion-style showcase for the six business solutions —
 * one row expanded (number, icon, and name in accent color, description
 * visible) at a time, the rest collapsed to a single line. Triggered by
 * hover, keyboard focus, or click/tap so it works the same way for mouse,
 * keyboard, and touch users without needing separate code paths.
 *
 * Deliberately its own component rather than reusing the shared FeatureCard
 * (used on /about, /products, /exports, and elsewhere on this page for
 * Infrastructure) — an accordion is a different interaction model than a
 * static card, and building it here keeps every other FeatureCard usage
 * completely unaffected.
 */
export function BusinessSolutionsShowcase({ solutions }: { solutions: BusinessSolution[] }) {
  const [active, setActive] = useState(0);

  return (
    <div
      role="list"
      aria-label="Business solutions"
      className="overflow-hidden rounded-3xl border border-cream-line bg-surface shadow-[0_32px_64px_-32px_rgba(28,26,23,0.25)]"
    >
      {solutions.map((solution, i) => {
        const isActive = i === active;
        const Icon = SOLUTION_ICONS[solution.icon];
        const panelId = `solution-panel-${solution.key}`;
        return (
          <div key={solution.key} role="listitem" className="relative border-b border-cream-line last:border-b-0">
            <span
              aria-hidden
              className={`absolute inset-y-0 left-0 w-[3px] bg-gold transition-transform duration-300 ${
                isActive ? "scale-y-100" : "scale-y-0"
              }`}
            />
            <button
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-expanded={isActive}
              aria-controls={panelId}
              className={`flex w-full items-center gap-4 py-5 pl-6 pr-5 text-left transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold ${
                isActive ? "bg-cream" : "hover:bg-cream/60"
              }`}
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ring-1 transition-all duration-300 ${
                  isActive
                    ? "scale-105 bg-gold-tint text-gold ring-gold/40"
                    : "bg-primary-tint text-primary ring-primary/10"
                }`}
              >
                <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <span
                className={`font-display text-2xl font-semibold tabular-nums transition-colors duration-300 ${
                  isActive ? "text-gold" : "text-ink-faint"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className={`flex-1 font-display text-base font-semibold transition-colors duration-300 sm:text-lg ${
                  isActive ? "text-ink" : "text-ink-soft"
                }`}
              >
                {solution.name}
              </h3>
            </button>

            <div
              id={panelId}
              className={`grid transition-all duration-300 ease-out ${
                isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 pl-[4.25rem] text-sm leading-relaxed text-ink-soft sm:pl-[4.75rem]">
                  {solution.summary}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
