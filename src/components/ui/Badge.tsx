import type { ReactNode } from "react";

export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "gold" | "pending";
}) {
  const toneClasses = {
    neutral: "bg-primary-tint text-primary",
    gold: "bg-gold-tint text-gold",
    pending: "bg-cream-deep text-ink-soft border border-dashed border-cream-line",
  }[tone];

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide ${toneClasses}`}
    >
      {children}
    </span>
  );
}
