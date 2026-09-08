"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  durationMs?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  durationMs = 1800,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState<string>("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Parse the number part and non-numeric prefix/suffix
    const match = value.match(/^([^0-9]*)([0-9,.]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1] || "";
    const rawNumberStr = match[2];
    const suffix = match[3] || "";
    const targetNumber = parseFloat(rawNumberStr.replace(/,/g, ""));

    if (isNaN(targetNumber)) {
      setDisplayValue(value);
      return;
    }

    const hasComma = rawNumberStr.includes(",");
    const isDecimal = rawNumberStr.includes(".") && !hasComma;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          const startTime = performance.now();

          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / durationMs, 1);
            // Ease out quart
            const ease = 1 - Math.pow(1 - progress, 4);
            const current = targetNumber * ease;

            let formatted = isDecimal
              ? current.toFixed(1)
              : Math.round(current).toString();

            if (hasComma) {
              formatted = Math.round(current).toLocaleString("en-IN");
            }

            setDisplayValue(`${prefix}${formatted}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [value, durationMs]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}

