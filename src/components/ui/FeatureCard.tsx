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
      className={`group flex h-full flex-col gap-4 rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
        isDark
          ? "border-cream/10 bg-white/5 hover:bg-white/[0.08]"
          : "border-cream-line bg-surface hover:shadow-[0_20px_44px_-28px_rgba(28,26,23,0.3)]"
      }`}
    >
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${
          isDark
            ? "bg-gold/15 text-gold-light"
            : "bg-primary-tint text-primary group-hover:bg-gold-tint group-hover:text-gold"
        }`}
      >
        <Icon className="h-6 w-6" strokeWidth={1.5} />
      </span>
      <h3 className={`font-display text-lg ${isDark ? "text-cream" : "text-ink"}`}>{title}</h3>
      <p className={`text-sm leading-relaxed ${isDark ? "text-cream/65" : "text-ink-soft"}`}>
        {description}
      </p>
      {footer ? <div className="mt-auto pt-2">{footer}</div> : null}
    </div>
  );
}
