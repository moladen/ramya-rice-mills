import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CTASection } from "@/components/ui/CTASection";
import { ProductsExperience } from "@/components/products/ProductsExperience";
import { GrainIcon, LeafIcon, WheatIcon, ShieldCheckIcon, GearIcon, GlobeIcon } from "@/components/icons";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "Browse Ramya Rice's rice portfolio — Basmati, Non-Basmati, and other rice varieties packed for retail, wholesale, HORECA, and export.",
  path: "/products",
});

const TRUST_POINTS = [
  { icon: ShieldCheckIcon, title: "Consistent Grain Quality", description: "Grain quality checked at every stage, from intake through to final packaging." },
  { icon: GearIcon, title: "Standardised Processing", description: "Repeatable milling and grading keeps every batch consistent, order after order." },
  { icon: GlobeIcon, title: "B2B & Export Ready", description: "Pack formats and documentation structured for wholesale, HORECA, and export buyers." },
];

export default function ProductsPage() {
  return (
    <>
      {/* PREMIUM EDITORIAL HERO */}
      <section className="bg-grain relative overflow-hidden bg-primary-dark py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-[0.25] [background-image:radial-gradient(circle_at_1px_1px,rgba(227,190,132,0.5)_1px,transparent_0)] [background-size:32px_32px]" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-primary-light/15 blur-3xl" />

        {/* Floating rice grain / paddy decorations */}
        <GrainIcon
          className="animate-float pointer-events-none absolute left-[8%] top-[22%] h-8 w-8 text-gold-light/25 sm:h-10 sm:w-10"
          strokeWidth={1.2}
        />
        <WheatIcon
          className="animate-drift pointer-events-none absolute right-[12%] top-[18%] hidden h-12 w-12 text-gold-light/20 sm:block"
          strokeWidth={1.2}
          style={{ animationDelay: "1.2s" }}
        />
        <LeafIcon
          className="animate-drift-slow pointer-events-none absolute bottom-[15%] left-[16%] hidden h-9 w-9 text-primary-light/25 lg:block"
          strokeWidth={1.2}
        />
        <GrainIcon
          className="animate-float pointer-events-none absolute bottom-[20%] right-[10%] h-7 w-7 text-gold-light/20 sm:h-9 sm:w-9"
          strokeWidth={1.2}
          style={{ animationDelay: "0.6s" }}
        />

        <Container className="relative z-[2]">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
            <span className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">
              <span className="h-px w-6 bg-gold-light/70" />
              Products
              <span className="h-px w-6 bg-gold-light/70" />
            </span>
            <h1 className="font-display text-4xl leading-tight text-cream sm:text-5xl lg:text-[3.25rem]">
              Rice for a Better Tomorrow
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
              Explore our wide range of premium rice varieties, crafted with care and trusted across
              domestic and international markets.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* FEATURED PRODUCT CAROUSEL */}
      <section className="py-20 sm:py-28">
        <Container>
          <ProductsExperience products={PRODUCTS} categories={PRODUCT_CATEGORIES} />
        </Container>
      </section>

      {/* TRUST / QUALITY STRIP */}
      <section className="bg-cream-deep py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <Reveal className="mx-auto max-w-xl text-center">
            <span className="flex items-center justify-center gap-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              <span className="h-px w-6 bg-gold/70" />
              Why Our Rice
            </span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
              Quality You Can Rely On
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {TRUST_POINTS.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <FeatureCard icon={item.icon} title={item.title} description={item.description} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Can't Find What You Need?"
        description="Tell us your requirement and we'll help you find the right rice variety and pack format."
      />
    </>
  );
}
