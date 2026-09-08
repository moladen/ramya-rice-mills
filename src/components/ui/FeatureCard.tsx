import type { ComponentType, ReactNode, SVGProps } from "react";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  footer,
  tone = "light",
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  footer?: ReactNode;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={`group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
        isDark
          ? "border-cream/10 bg-white/5 hover:bg-white/[0.08]"
          : "border-cream-line bg-surface hover:border-gold/40 hover:shadow-[0_24px_48px_-28px_rgba(28,26,23,0.35)]"
      }`}
    >
      {/* Accent rule that draws in from the left on hover */}
      <span
        className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-gold via-gold-light to-gold transition-transform duration-500 ease-out group-hover:scale-x-100`}
      />

      <span
        className={`relative flex h-13 w-13 items-center justify-center rounded-full ring-1 transition-all duration-300 ${
          isDark
            ? "bg-gold/10 text-gold-light ring-gold/25 group-hover:bg-gold/20"
            : "bg-primary-tint text-primary ring-primary/10 group-hover:bg-gold-tint group-hover:text-gold group-hover:ring-gold/30"
        }`}
      >
        <Icon className="h-6 w-6" strokeWidth={1.5} />
        <span
          className={`absolute inset-0 -z-10 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60 ${
            isDark ? "bg-gold/25" : "bg-gold/20"
          }`}
        />
      </span>
      <h3 className={`font-display text-lg font-semibold ${isDark ? "text-cream" : "text-ink"}`}>{title}</h3>
      <p className={`text-sm leading-relaxed ${isDark ? "text-cream/65" : "text-ink-soft"}`}>
        {description}
      </p>
      {footer ? <div className="mt-auto pt-2">{footer}</div> : null}
    </div>
  );
}
