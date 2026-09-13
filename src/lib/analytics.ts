// Thin wrapper around gtag.js. Every call is a no-op unless GA4 is actually
// configured (NEXT_PUBLIC_GA_ID set) and the script has loaded, so this is
// always safe to call from any component without feature-flag checks at the
// call site.
type GtagEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params?: GtagEventParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
