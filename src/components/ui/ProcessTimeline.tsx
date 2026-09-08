import type { ProcessStep } from "@/data/quality-process";

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => {
        const isRowEnd = (i + 1) % 4 === 0 || i === steps.length - 1;
        return (
          <li key={step.step} className="group relative flex flex-col">
            {/* Connector to the next step — desktop only, hidden at the end of each row */}
            {!isRowEnd ? (
              <span className="pointer-events-none absolute left-[calc(100%+0.75rem)] top-6 hidden h-px w-[calc(1.5rem-0.5px)] bg-gradient-to-r from-gold/50 to-gold/10 lg:block" />
            ) : null}

            <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light font-display text-base font-semibold text-cream shadow-[0_8px_20px_-8px_rgba(13,71,34,0.55)] ring-4 ring-cream transition-transform duration-300 group-hover:scale-105">
              {String(step.step).padStart(2, "0")}
            </span>

            <div className="mt-4 flex flex-1 flex-col gap-2 rounded-2xl border border-cream-line bg-surface p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-gold/40 group-hover:shadow-[0_20px_44px_-28px_rgba(28,26,23,0.35)]">
              <h3 className="text-base font-semibold text-ink">{step.name}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{step.description}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
