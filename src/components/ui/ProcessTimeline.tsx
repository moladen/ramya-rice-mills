import type { ProcessStep } from "@/data/quality-process";

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step) => (
        <li
          key={step.step}
          className="relative flex flex-col gap-3 rounded-2xl border border-cream-line bg-surface p-6"
        >
          <span className="font-display text-3xl text-gold">
            {String(step.step).padStart(2, "0")}
          </span>
          <h3 className="text-base font-semibold text-ink">{step.name}</h3>
          <p className="text-sm leading-relaxed text-ink-soft">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
