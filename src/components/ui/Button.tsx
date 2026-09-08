import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "outline-light" | "ghost";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold text-primary-dark hover:bg-gold-light shadow-[0_8px_24px_-8px_rgba(184,138,46,0.55)]",
  secondary:
    "bg-primary text-cream hover:bg-primary-light shadow-[0_8px_24px_-8px_rgba(7,38,19,0.45)]",
  outline:
    "border border-primary/25 text-primary hover:bg-primary hover:text-cream",
  "outline-light":
    "border border-cream/40 text-cream hover:bg-cream hover:text-primary-dark",
  ghost: "text-primary hover:text-gold",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[0.95rem]",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
    icon,
  } = props;

  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        target={props.target}
        rel={props.rel}
        onClick={props.onClick}
        className={classes}
      >
        {children}
        {icon}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type ?? "button"}
      onClick={buttonProps.onClick}
      disabled={buttonProps.disabled}
      className={`${classes} disabled:cursor-not-allowed disabled:opacity-60`}
    >
      {children}
      {icon}
    </button>
  );
}
