import Image from "next/image";
import type { ComponentType, SVGProps } from "react";

type Tone = "forest" | "gold" | "night" | "cream";

const toneClasses: Record<Tone, string> = {
  forest: "bg-gradient-to-br from-forest via-forest-dark to-[#0a1f14] text-cream",
  gold: "bg-gradient-to-br from-gold-light via-gold to-[#8a662f] text-ink",
  night: "bg-gradient-to-br from-primary-dark via-[#0a2615] to-black text-cream",
  cream: "bg-gradient-to-br from-cream-deep via-cream to-cream-line text-primary",
};

type VisualProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  tone?: Tone;
  label?: string;
  ratio?: string;
  className?: string;
  iconSize?: string;
  /** Local path under /public for a real photo (e.g. "/images/rice-paddy-field.jpg"). */
  photo?: string;
  /** Required alongside `photo` for accessibility. */
  alt?: string;
  /** Marks the image as high-priority for LCP (hero-level visuals only). */
  priority?: boolean;
};

/**
 * Themed section visual. With a `photo`, renders a real image (object-cover)
 * with a small icon badge for brand consistency. Without one, falls back to
 * a gradient + centered icon placeholder for sections that don't yet have a
 * matching photo — swap in a real asset later by passing `photo`.
 */
export function Visual({
  icon: Icon,
  tone = "forest",
  label,
  ratio = "aspect-[4/3]",
  className = "",
  iconSize = "h-10 w-10",
  photo,
  alt,
  priority = false,
}: VisualProps) {
  if (photo) {
    return (
      <div className={`relative overflow-hidden rounded-3xl ${ratio} ${className}`}>
        <Image
          src={photo}
          alt={alt ?? label ?? ""}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
        <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/25 text-cream backdrop-blur-sm">
          <Icon className="h-5 w-5" strokeWidth={1.4} />
        </span>
      </div>
    );
  }

  return (
    <div
      className={`bg-grain relative overflow-hidden rounded-3xl ${ratio} ${toneClasses[tone]} ${className}`}
    >
      <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center gap-3">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-current/25 bg-white/5 backdrop-blur-sm">
          <Icon className={iconSize} strokeWidth={1.2} />
        </span>
        {label ? (
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.25em] opacity-70">
            {label}
          </span>
        ) : null}
      </div>
      <div className="absolute -right-10 -top-10 z-[1] h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-16 -left-10 z-[1] h-48 w-48 rounded-full bg-black/10 blur-3xl" />
    </div>
  );
}
