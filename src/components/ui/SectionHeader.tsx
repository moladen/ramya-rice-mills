type Align = "left" | "center";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: Align;
  tone?: "light" | "dark";
}) {
  const alignClasses = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const eyebrowColor = tone === "dark" ? "text-gold-light" : "text-gold";
  const titleColor = tone === "dark" ? "text-cream" : "text-ink";
  const descColor = tone === "dark" ? "text-cream/70" : "text-ink-soft";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClasses}`}>
      {eyebrow ? (
        <span className={`text-xs font-semibold uppercase tracking-[0.28em] ${eyebrowColor}`}>
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`font-display text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`text-base leading-relaxed sm:text-lg ${descColor}`}>{description}</p>
      ) : null}
    </div>
  );
}
