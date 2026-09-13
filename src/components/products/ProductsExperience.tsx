"use client";

import { useEffect, useMemo, useState } from "react";
import { ProductCarousel } from "@/components/products/ProductCarousel";
import { ProductQuickView } from "@/components/products/ProductQuickView";
import type { Product, ProductCategory } from "@/data/products";

export function ProductsExperience({
  products,
  categories,
}: {
  products: Product[];
  categories: ProductCategory[];
}) {
  const [active, setActive] = useState<ProductCategory | "All">("All");
  const [displayed, setDisplayed] = useState(products);
  const [transitioning, setTransitioning] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active, products]
  );

  // Fade + scale the carousel out, swap the product set, then fade it back
  // in — so switching categories never feels like an instant content swap.
  useEffect(() => {
    setTransitioning(true);
    const outTimer = window.setTimeout(() => {
      setDisplayed(filtered);
      setTransitioning(false);
    }, 260);
    return () => window.clearTimeout(outTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, products]);

  const tabs: (ProductCategory | "All")[] = ["All", ...categories];

  return (
    <div className="flex flex-col gap-12">
      {/* Category Navigation Pills */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {tabs.map((tab) => {
          const count =
            tab === "All" ? products.length : products.filter((p) => p.category === tab).length;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === tab
                  ? "border-primary bg-primary text-cream shadow-md scale-105"
                  : "border-cream-line bg-surface text-ink-soft hover:border-gold hover:text-primary hover:bg-cream"
              }`}
            >
              <span>{tab}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                  active === tab ? "bg-white/20 text-cream" : "bg-cream-deep text-ink-soft"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Featured product carousel — fades/scales between category changes */}
      <div
        className={`transition-all duration-300 ease-out ${
          transitioning ? "translate-y-2 scale-[0.98] opacity-0" : "translate-y-0 scale-100 opacity-100"
        }`}
      >
        {displayed.length ? (
          <ProductCarousel products={displayed} onQuickView={(p) => setQuickViewProduct(p)} />
        ) : (
          <div className="rounded-3xl border border-dashed border-cream-line p-12 text-center text-sm text-ink-soft">
            No products in this category yet.
          </div>
        )}
      </div>

      {/* Interactive Quick View Modal */}
      <ProductQuickView product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </div>
  );
}
