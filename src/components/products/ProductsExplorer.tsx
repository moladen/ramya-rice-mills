"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import { ProductQuickView } from "@/components/products/ProductQuickView";
import { Reveal } from "@/components/ui/Reveal";
import type { Product, ProductCategory } from "@/data/products";

export function ProductsExplorer({
  products,
  categories,
}: {
  products: Product[];
  categories: ProductCategory[];
}) {
  const [active, setActive] = useState<ProductCategory | "All">("All");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active, products]
  );

  const tabs: (ProductCategory | "All")[] = ["All", ...categories];

  return (
    <div className="flex flex-col gap-10">
      {/* Category Navigation Pills */}
      <div className="flex flex-wrap gap-2.5">
        {tabs.map((tab) => {
          const count =
            tab === "All"
              ? products.length
              : products.filter((p) => p.category === tab).length;

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

      {/* Animated Product Grid */}
      {filtered.length ? (
        <div key={active} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <Reveal key={product.slug} delay={(i % 3) * 130} className="h-full product-pop">
              <ProductCard
                product={product}
                index={i}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-cream-line p-12 text-center text-sm text-ink-soft">
          No products in this category yet.
        </div>
      )}

      {/* Interactive Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}

