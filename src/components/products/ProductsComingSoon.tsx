import { GrainIcon } from "@/components/icons";

/**
 * Premium "Coming Soon" state for a product category with no catalogue
 * entries yet — used instead of either a bare empty-state sentence or an
 * invented product, matching the site's existing card/visual language.
 * "Custom Specifications" gets its own wording since it isn't a missing
 * catalogue entry so much as an invitation to discuss a bespoke order.
 */
export function ProductsComingSoon({ isCustom = false }: { isCustom?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-gold/40 bg-cream-deep/60 p-12 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-tint text-primary">
        <GrainIcon className="h-7 w-7" strokeWidth={1.3} />
      </span>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-display text-lg text-ink">
          {isCustom ? "Custom Specifications" : "Product Information Coming Soon"}
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
          {isCustom
            ? "Specifications can be discussed based on your requirement. Contact us to talk through grain type, grade, and packaging for a custom order."
            : "We're finalising this product line. Contact us to discuss your requirement in the meantime."}
        </p>
      </div>
    </div>
  );
}
