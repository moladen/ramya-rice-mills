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
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  description:
    "Ramya Rice is a rice manufacturer and exporter offering premium basmati and non-basmati rice, with modern processing and dependable bulk supply for domestic and international B2B buyers.",
  path: "/",
});

const HERO_CAPABILITIES = [
  "Consistent Grain Quality",
  "Modern Processing",
  "Export Ready",
  "Reliable Supply",
];

const WHY_RAMYA_RICE = [
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
    icon: TruckIcon,
    title: "Reliability",
    description: "Planned production and dispatch designed to meet recurring order schedules.",
  },
  {
    icon: GlobeIcon,
    title: "Partnership",
    description: "Structured to support domestic trade partners and international buyers alike.",
  },
];

const BUSINESS_ICONS = { store: StoreIcon, cart: CartIcon, chef: ChefIcon, boxes: BoxesIcon, globe: GlobeIcon, tag: TagIcon };
const INFRA_ICONS = { factory: FactoryIcon, gear: GearIcon, warehouse: WarehouseIcon, package: PackageIcon, flask: FlaskIcon, truck: TruckIcon };

export default function Home() {
  return (
    <>
      {/* HERO — cinematic split composition: brand statement left, art-directed visual right */}
      <section className="relative overflow-hidden bg-primary-dark lg:grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="bg-grain relative flex items-center overflow-hidden px-6 py-20 sm:px-10 lg:px-14 lg:py-28 xl:px-20">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-primary-light/15 blur-3xl" />

          <div className="relative z-[2] flex max-w-xl flex-col gap-7">
            <Reveal>
              <span className="inline-flex w-fit items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">
                <span className="h-px w-6 bg-gold-light/70" />
                Rooted in India &bull; Reaching the World
              </span>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="font-display text-4xl leading-[1.12] text-cream sm:text-5xl lg:text-[3.4rem]">
                Premium Rice, Milled with <em className="not-italic text-gold-light">Precision</em> for a
                Global Table
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="max-w-lg text-base leading-relaxed text-cream/70 sm:text-lg">
                {SITE.shortDescription}
              </p>
            </Reveal>

            <Reveal delay={270}>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 pt-1 sm:flex sm:flex-wrap sm:items-center">
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
                <Button
                  href="/products"
                  variant="primary"
                  size="lg"
                  icon={<ChevronRightIcon className="h-4 w-4" />}
                >
                  Explore Our Products
                </Button>
                <Button href="/about" variant="outline-light" size="lg">
                  Our Story
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Art-directed visual composition */}
        <div className="relative flex items-center justify-center overflow-hidden bg-cream-deep px-6 py-16 sm:py-20 lg:py-12">
          <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(13,71,34,0.08)_1px,transparent_0)] [background-size:28px_28px]" />

          <div className="relative w-full max-w-sm">
            {/* Offset panels behind the photo for layered, art-directed depth */}
            <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] bg-primary/10 sm:-right-6 sm:-top-6" />
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] border border-gold/25 sm:-bottom-6 sm:-left-6" />

            {/* Main photo — very slow float, not true parallax, kept GPU-cheap */}
            <div
              className="animate-float relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-24px_rgba(7,38,19,0.45)]"
              style={{ animationDuration: "7s" }}
            >
              <Image
                src="/images/hero-mill-showcase.png"
                alt="Ramya Rice premium rice, paddy stalks, and grain, with the processing facility in the background"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Inset supporting photo */}
            <div className="animate-drift-slow absolute -bottom-8 -left-8 h-28 w-28 overflow-hidden rounded-2xl border-4 border-cream shadow-xl sm:h-36 sm:w-36">
              <Image
                src="/images/rice-grains.jpg"
                alt="Close-up of milled rice grains"
                fill
                sizes="150px"
                className="object-cover"
              />
            </div>

            {/* Floating badge — quality */}
            <div
              className="animate-float absolute -top-5 left-4 flex items-center gap-2.5 rounded-2xl border border-gold/30 bg-surface/95 px-4 py-3 shadow-[0_16px_32px_-12px_rgba(7,38,19,0.3)] backdrop-blur-sm sm:left-8"
              style={{ animationDelay: "0.6s" }}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
                <ShieldCheckIcon className="h-4 w-4" strokeWidth={1.6} />
              </span>
              <span className="text-xs font-semibold text-ink">100% Quality Focus</span>
            </div>

            {/* Floating badge — global supply */}
            <div className="animate-drift absolute -right-4 bottom-10 flex items-center gap-2.5 rounded-2xl border border-primary/15 bg-surface/95 px-4 py-3 shadow-[0_16px_32px_-12px_rgba(7,38,19,0.3)] backdrop-blur-sm sm:-right-6">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-tint text-gold">
                <GlobeIcon className="h-4 w-4" strokeWidth={1.6} />
              </span>
              <span className="text-xs font-semibold text-ink">Global Supply</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT — editorial, asymmetric composition rather than a centered heading + paragraph */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_32px_64px_-32px_rgba(28,26,23,0.35)]">
              <Image
                src="/images/hero-mill-showcase-2.png"
                alt="Ramya Rice processing facility with paddy fields in the background"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            {/* Small supporting photo, overlapping the main image's corner */}
            <div className="absolute -bottom-8 -right-4 hidden h-32 w-32 overflow-hidden rounded-2xl border-4 border-cream shadow-xl sm:block sm:h-36 sm:w-36 lg:-right-10">
              <Image
                src="/images/rice-paddy-field-2.jpg"
                alt="Aerial view of rice paddy fields"
                fill
                sizes="150px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-6 lg:pl-6">
            <span className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              <span className="h-px w-6 bg-gold/70" />
              Who We Are
            </span>
            <h2 className="font-display text-3xl leading-[1.2] text-ink sm:text-4xl">
              {SITE.name} builds trust <span className="text-primary">one shipment at a time.</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-ink-soft">
              From sourcing to dispatch, our focus stays on consistent grain quality and dependable
              supply — for domestic wholesale partners and international B2B buyers alike.
            </p>
            <ul className="flex flex-col gap-2.5 border-t border-cream-line pt-5">
              <li className="flex items-start gap-2.5 text-sm text-ink-soft">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Standardised processing keeps grade and grain condition consistent, order after order.
              </li>
              <li className="flex items-start gap-2.5 text-sm text-ink-soft">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Structured to serve domestic wholesale partners and international B2B buyers alike.
              </li>
            </ul>
            <Link
              href="/about"
              className="group inline-flex w-fit items-center gap-2 pt-1 text-sm font-semibold text-primary transition-colors hover:text-gold"
            >
              Explore About Us
              <ChevronRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
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

      {/* WHY RAMYA RICE — large statement + 4 principles, not another card grid */}
      <section className="relative overflow-hidden bg-primary-dark py-20 sm:py-28">
        <Image
          src="/images/rice-paddy-field-2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/88" />
        <Container className="relative z-10 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal className="flex flex-col gap-5">
            <span className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">
              <span className="h-px w-6 bg-gold-light/70" />
              Why Ramya Rice
            </span>
            <h2 className="font-display text-3xl leading-[1.18] text-cream sm:text-4xl lg:text-[2.75rem]">
              Built for Quality.
              <br />
              Designed for Reliable Supply.
            </h2>
            <p className="max-w-sm text-base leading-relaxed text-cream/70">
              Every order moves through the same standards, from intake to dispatch, so buyers can
              depend on what arrives matching what was promised.
            </p>
          </Reveal>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {WHY_RAMYA_RICE.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 90}
                className="flex gap-4 border-t border-cream/15 pt-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold-light ring-1 ring-gold/25">
                  <item.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-lg font-semibold text-cream">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-cream/65">{item.description}</p>
                </div>
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
