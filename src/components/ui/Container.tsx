import type { ElementType, ReactNode } from "react";

export function Container({
  children,
  className = "",
  as: Component = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return (
    <Component className={`mx-auto w-full max-w-7xl px-6 lg:px-10 ${className}`}>
      {children}
    </Component>
  );
}
