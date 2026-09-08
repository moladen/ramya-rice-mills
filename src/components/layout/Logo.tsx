import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  variant?: "horizontal" | "crest";
  tone?: "light" | "dark";
  showTagline?: boolean;
}

export function Logo({
  className = "",
  imageClassName = "h-11 w-auto sm:h-13",
  priority = true,
  variant = "horizontal",
  tone = "light",
  showTagline = true,
}: LogoProps) {
  const isDark = tone === "dark";
  // logo-crest-transparent.png has a baked-in cream background (despite the
  // name), so it only reads correctly on light surfaces. logo-mark-transparent
  // is genuinely alpha-transparent — use it on dark surfaces to avoid a
  // mismatched cream box showing up behind the crest.
  const src = isDark
    ? "/images/logo-mark-transparent.png"
    : "/images/logo-crest-transparent.png";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 transition-transform duration-200 hover:scale-[1.01] ${className}`}
    >
      <div className="relative shrink-0">
        <Image
          src={src}
          alt="Ramya Rice - Rooted in India, Reaching the World"
          width={isDark ? 480 : 180}
          height={isDark ? 490 : 194}
          priority={priority}
          className={`object-contain transition-transform duration-300 group-hover:scale-105 ${imageClassName}`}
        />
      </div>

      {variant === "horizontal" ? (
        <div className="flex flex-col justify-center leading-tight">
          <div className="flex items-baseline gap-1.5">
            <span
              className={`font-display text-lg sm:text-xl font-bold tracking-[0.14em] uppercase transition-colors ${
                isDark ? "text-cream" : "text-primary group-hover:text-primary-light"
              }`}
            >
              Ramya
            </span>
            <span className="text-[0.65rem] sm:text-xs font-bold tracking-[0.22em] text-gold uppercase">
              Rice
            </span>
          </div>
          {showTagline ? (
            <span
              className={`text-[0.52rem] sm:text-[0.6rem] font-medium tracking-[0.16em] uppercase ${
                isDark ? "text-cream/65" : "text-ink-soft"
              }`}
            >
              Rooted in India, Reaching the World
            </span>
          ) : null}
        </div>
      ) : null}
    </Link>
  );
}


