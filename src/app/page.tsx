import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Visual } from "@/components/ui/Visual";
import { StatCard } from "@/components/ui/StatCard";
import { ProductCard } from "@/components/ui/ProductCard";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import { CTASection } from "@/components/ui/CTASection";
import { Badge } from "@/components/ui/Badge";
import { HeroSlideshow } from "@/components/home/HeroSlideshow";
import {
  ShieldCheckIcon,
  GearIcon,
  FactoryIcon,
  TruckIcon,
  PackageIcon,
  GlobeIcon,
  ChevronRightIcon,
  StoreIcon,
  CartIcon,
  ChefIcon,
  BoxesIcon,
  TagIcon,
  FlaskIcon,
  WarehouseIcon,
  CheckIcon,
} from "@/components/icons";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";
import { ProductsExplorer } from "@/components/products/ProductsExplorer";
import { STATS, SITE } from "@/data/site";
import { INFRASTRUCTURE_AREAS } from "@/data/infrastructure";
import { QUALITY_PROCESS_STEPS } from "@/data/quality-process";
import { BUSINESS_SOLUTIONS } from "@/data/business-solutions";
import { CERTIFICATION_SLOTS } from "@/data/certifications";

export const metadata: Metadata = {
  description: SITE.shortDescription,
};

const HERO_CAPABILITIES = ["Consistent Grain Quality", "Bulk & Retail Ready", "Export Capable"];

const HERO_SLIDES = [
  { src: "/images/hero-mill-showcase.png", alt: "Ramya Rice facility, paddy fields, and rice grains" },
  { src: "/images/hero-mill-showcase-2.png", alt: "Ramya Rice facility with paddy fields and rice grains, alternate view" },
  { src: "/images/rice-paddy-field-2.jpg", alt: "Aerial view of lush green rice paddy fields" },
  { src: "/images/rice-grains.jpg", alt: "Close-up of milled rice grains" },
];

const WHY_CHOOSE_US = [
  {
    icon: ShieldCheckIcon,
    title: "Quality",
    description: "Grain quality checked at every stage, from intake through to final packaging.",
  },
  {
    icon: GearIcon,
    title: "Consistency",
    description: "Standardised processing keeps grade and grain condition consistent, batch after batch.",
  },
  {
    icon: FactoryIcon,
    title: "Manufacturing Capability",
    description: "A dedicated facility built to handle cleaning, milling, and packaging at scale.",
  },
  {
    icon: TruckIcon,
    title: "Reliable Supply",
    description: "Planned production and dispatch designed to meet recurring order schedules.",
  },
  {
    icon: PackageIcon,
    title: "Packaging",
    description: "Pack formats suited to retail, wholesale, HORECA, and export shipments.",
  },
  {
    icon: GlobeIcon,
    title: "B2B / Export Capability",
    description: "Structured to support domestic trade partners and international buyers alike.",
  },
];

const BUSINESS_ICONS = { store: StoreIcon, cart: CartIcon, chef: ChefIcon, boxes: BoxesIcon, globe: GlobeIcon, tag: TagIcon };
const INFRA_ICONS = { factory: FactoryIcon, gear: GearIcon, warehouse: WarehouseIcon, package: PackageIcon, flask: FlaskIcon, truck: TruckIcon };

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-grain relative flex min-h-[600px] items-center overflow-hidden bg-primary-dark lg:min-h-[760px]">
        <div className="absolute inset-0">
          <HeroSlideshow slides={HERO_SLIDES} intervalMs={3200} />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-primary-dark/80 via-primary-dark/45 to-primary-dark/15" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/30 via-transparent to-black/5" />

        <Container className="relative z-[2] py-24 lg:py-28">
          <div className="flex max-w-2xl flex-col gap-7">
            <Reveal>
              <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-gold-light/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-light/60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-light" />
                </span>
                Rooted in India, Reaching the World
              </span>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="max-w-xl font-display text-4xl leading-[1.08] text-cream sm:text-5xl lg:text-[3.75rem]">
                Premium Rice, Milled with <em className="not-italic text-gold-light">Precision</em>{" "}
                for a Global Table
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="max-w-lg text-base leading-relaxed text-cream/70 sm:text-lg">
                {SITE.shortDescription}
              </p>
            </Reveal>

            <Reveal delay={270}>
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1">
                {HERO_CAPABILITIES.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-cream/65">
                    <CheckIcon className="h-4 w-4 shrink-0 text-gold-light" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-2 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" variant="primary" size="lg">
                  Enquire Now
                </Button>
                <Button
                  href="/products"
                  variant="outline-light"
                  size="lg"
                  icon={<ChevronRightIcon className="h-4 w-4" />}
                >
                  Explore Products
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>

        {/* Floating Trust Badge */}
        <div className="animate-float absolute top-28 right-6 z-[2] hidden max-w-[17rem] items-start gap-3.5 rounded-2xl border border-gold/35 bg-primary-dark/85 p-4 backdrop-blur-md shadow-[0_24px_48px_-16px_rgba(7,38,19,0.5)] sm:flex lg:right-16 lg:top-36">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/40 bg-gold/15 text-gold-light">
            <ShieldCheckIcon className="h-6 w-6" strokeWidth={1.5} />
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-cream">World-Class Quality</span>
            <span className="text-xs leading-snug text-cream/70">
              100% Sortex clean, aged &amp; certified
            </span>
          </div>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <Visual
              icon={FactoryIcon}
              ratio="aspect-[4/3]"
              photo="/images/modern-factory.jpg"
              alt="Modern industrial manufacturing facility"
            />
          </Reveal>
          <Reveal delay={100} className="flex flex-col gap-6">
            <SectionHeader
              eyebrow="Who We Are"
              title={`${SITE.name} builds trust one shipment at a time`}
              description="From sourcing to dispatch, our focus stays on consistent grain quality and dependable supply — for domestic wholesale partners and international B2B buyers alike."
            />
            <Button href="/about" variant="outline" size="md" className="w-fit" icon={<ChevronRightIcon className="h-4 w-4" />}>
              About Us
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* KEY STATISTICS */}
      <section className="bg-grain bg-primary-dark py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <StatCard value={stat.value} label={stat.label} placeholder={stat.placeholder} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* OUR PRODUCTS */}
      <section className="py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Our Products"
              title="A Rice Portfolio Built for Every Order"
              description="Basmati, non-basmati, and specialty varieties — packed for retail, wholesale, HORECA, and export."
            />
            <Button href="/products" variant="ghost" size="md" icon={<ChevronRightIcon className="h-4 w-4" />}>
              View All Products
            </Button>
          </Reveal>
          <ProductsExplorer products={PRODUCTS} categories={PRODUCT_CATEGORIES} />
        </Container>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative overflow-hidden bg-primary-dark py-20 sm:py-28">
        <Image
          src="/images/rice-paddy-field-2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/85" />
        <Container className="relative z-10 flex flex-col gap-12">
          <Reveal>
            <SectionHeader
              eyebrow="Why Choose Us"
              title="Built for Buyers Who Need Dependability"
              align="center"
              tone="dark"
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 90}>
                <FeatureCard icon={item.icon} title={item.title} description={item.description} tone="dark" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* MANUFACTURING & INFRASTRUCTURE */}
      <section className="bg-grain relative overflow-hidden bg-primary-dark py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Manufacturing & Infrastructure"
              title="Inside Our Processing Facility"
              description="A look at the capability behind every bag of rice we dispatch."
              tone="dark"
            />
            <Button href="/infrastructure" variant="outline-light" size="md" icon={<ChevronRightIcon className="h-4 w-4" />}>
              View Infrastructure
            </Button>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INFRASTRUCTURE_AREAS.map((area, i) => {
              const Icon = INFRA_ICONS[area.icon];
              return (
                <Reveal key={area.key} delay={(i % 3) * 90}>
                  <FeatureCard icon={Icon} title={area.name} description={area.description} tone="dark" />
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* QUALITY ASSURANCE */}
      <section className="py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeader
              eyebrow="Quality Assurance"
              title="From Sourcing to Dispatch"
              description="Every batch moves through a consistent journey before it reaches your order."
              align="center"
            />
          </Reveal>
          <Reveal delay={100}>
            <ProcessTimeline steps={QUALITY_PROCESS_STEPS.slice(0, 8)} />
          </Reveal>
          <Reveal delay={150} className="flex justify-center">
            <Button href="/quality-process" variant="outline" size="md" icon={<ChevronRightIcon className="h-4 w-4" />}>
              See Full Process
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* BUSINESS SOLUTIONS */}
      <section className="bg-cream-deep py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Business Solutions"
              title="Structured for Every Kind of Buyer"
              description="Wholesale, retail, HORECA, bulk, or export — each channel gets a supply model that fits."
            />
            <Button href="/business-solutions" variant="ghost" size="md" icon={<ChevronRightIcon className="h-4 w-4" />}>
              Explore Solutions
            </Button>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BUSINESS_SOLUTIONS.map((solution, i) => {
              const Icon = BUSINESS_ICONS[solution.icon];
              return (
                <Reveal key={solution.key} delay={(i % 3) * 90}>
                  <FeatureCard icon={Icon} title={solution.name} description={solution.summary} />
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="bg-grain relative overflow-hidden bg-primary-dark py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_30%,rgba(227,190,132,0.4)_1px,transparent_1px),radial-gradient(circle_at_60%_65%,rgba(227,190,132,0.3)_1px,transparent_1px),radial-gradient(circle_at_85%_20%,rgba(227,190,132,0.35)_1px,transparent_1px)] [background-size:120px_120px]" />
        <Container className="relative z-[2] grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="flex flex-col gap-6">
            <SectionHeader
              eyebrow="Global Presence"
              title="Export-Ready, Wherever Business Takes Us"
              description="Our supply chain is structured to support international B2B buyers. Specific markets served will be listed here once confirmed."
              tone="dark"
            />
            <Badge tone="pending">Country list — pending confirmation</Badge>
            <Button href="/exports" variant="outline-light" size="md" className="w-fit" icon={<ChevronRightIcon className="h-4 w-4" />}>
              Exports / Global Presence
            </Button>
          </Reveal>
          <Reveal delay={120}>
            <Visual
              icon={GlobeIcon}
              ratio="aspect-square"
              photo="/images/shipping-port.jpg"
              alt="Shipping containers at port, ready for export"
            />
          </Reveal>
        </Container>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeader
              eyebrow="Certifications"
              title="Trust, Backed by Documentation"
              description="Certification details will appear here once verified and provided by Ramya Rice."
              align="center"
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {CERTIFICATION_SLOTS.map((cert, i) => (
              <Reveal key={cert.key} delay={i * 90}>
                <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-dashed border-cream-line bg-cream-deep p-8 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-surface text-ink-faint">
                    <ShieldCheckIcon className="h-7 w-7" />
                  </span>
                  <h3 className="text-sm font-semibold text-ink">{cert.suggestedName}</h3>
                  <p className="text-xs leading-relaxed text-ink-soft">{cert.description}</p>
                  <Badge tone="pending">Pending</Badge>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150} className="flex justify-center">
            <Link href="/certifications" className="text-sm font-medium text-primary hover:text-gold">
              View Certifications Page
            </Link>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
