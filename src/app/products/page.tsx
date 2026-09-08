import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { ProductsExplorer } from "@/components/products/ProductsExplorer";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Ramya Rice's rice portfolio — Basmati, Non-Basmati, and other rice varieties packed for retail, wholesale, HORECA, and export.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Our Rice Portfolio"
        description="A clean, categorised catalogue of our rice varieties. Product details shown here are placeholders and will be refined with the client's confirmed specifications."
      />
      <section className="py-20 sm:py-28">
        <Container>
          <ProductsExplorer products={PRODUCTS} categories={PRODUCT_CATEGORIES} />
        </Container>
      </section>
      <CTASection
        title="Can't Find What You Need?"
        description="Tell us your requirement and we'll help you find the right rice variety and pack format."
      />
    </>
  );
}
