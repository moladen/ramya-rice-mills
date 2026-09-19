import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

// `placeholder` still arrives from STATS (see data/site.ts) and is deliberately
// unused for display — the on-page "pending confirmation" caption was removed
// on request, but the underlying values are still unconfirmed estimates. Do
// not treat their presence here as a signal that they're safe to publish.
export function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
  placeholder?: boolean;
}) {
  return (
    <div className="group flex flex-col gap-2 border-l border-cream/20 pl-5 transition-all duration-300 hover:border-gold first:pl-0 first:border-l-0 sm:first:pl-5 sm:first:border-l">
      <span className="font-display text-4xl text-gold-light transition-transform duration-300 group-hover:scale-105 sm:text-5xl">
        <AnimatedCounter value={value} />
      </span>
      <span className="text-sm text-cream/70">{label}</span>
    </div>
  );
}
