import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { StatCard } from "@/components/ui/StatCard";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CTASection } from "@/components/ui/CTASection";
import { Badge } from "@/components/ui/Badge";
import { HeroVisual } from "@/components/home/HeroVisual";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { QualityJourney } from "@/components/home/QualityJourney";
import { BusinessSolutionsShowcase } from "@/components/home/BusinessSolutionsShowcase";
import { GlobalPresenceVisual } from "@/components/home/GlobalPresenceVisual";
import {
  ShieldCheckIcon,
  GearIcon,
  FactoryIcon,
  TruckIcon,
  PackageIcon,
  GlobeIcon,
  ChevronRightIcon,
  FlaskIcon,
  WarehouseIcon,
  CheckIcon,
  MapPinIcon,
} from "@/components/icons";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";
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

const INFRA_ICONS = { factory: FactoryIcon, gear: GearIcon, warehouse: WarehouseIcon, package: PackageIcon, flask: FlaskIcon, truck: TruckIcon };

// The Global Presence section's "India → Processing → Packaging → Global
// Markets" journey — a visual summary of the existing site structure
// (sourcing/processing described in Quality & Process, export described in
// this section), not a claim about any specific facility or destination.
const EXPORT_JOURNEY = [
  { icon: MapPinIcon, label: "India" },
  { icon: GearIcon, label: "Processing" },
  { icon: PackageIcon, label: "Packaging" },
  { icon: GlobeIcon, label: "Global Markets" },
];

// Rendered twice in the hero (desktop, inside the text column; mobile, below the
// photo) so the trust-point order can differ per breakpoint without duplicating
// the reveal-delay logic — see the HERO comment in Home() for why.
function HeroTrustPoints({ className = "" }: { className?: string }) {
  return (
    <div role="list" className={className}>
      {HERO_CAPABILITIES.map((item, i) => (
        <Reveal key={item} delay={460 + i * 70} role="listitem" className="flex items-center gap-2 text-sm text-cream/65">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-light/15 ring-1 ring-gold-light/30">
            <CheckIcon className="h-3 w-3 text-gold-light" />
          </span>
          {item}
        </Reveal>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO — full-bleed cinematic composition on desktop (photo as the section's own
          background, text overlaid with an explicit relative+z-10 stack so it can never
          be painted over by the absolutely-positioned photo — see HeroVisual's file note
          for how that stacking bug was avoided); a deliberate stacked mobile composition
          (text, then the product shot, then trust points) below md, rather than a crop of
          the desktop layout. Trust points render twice — once inside Container for md+
          (as its own bottom-anchored row, see below), once as a standalone strip below
          the visual for mobile-only (so mobile order is CTA → photo → trust points) —
          each instance hidden at the other breakpoint via display, not duplicated DOM.
          Desktop vertical layout: `section` no longer centers Container as one block —
          that put the trust row whatever few dozen px happened to fall after the CTA,
          floating high with a large dead gap beneath it. Container now stretches to the
          section's full height (flex row's default cross-axis stretch) and is itself a
          column with the headline group in a `flex-1` wrapper (centered in the space
          above) and the trust row as a true last child, so it sits on Container's own
          bottom padding — a deliberate bottom row, not a centered leftover. */}
      <section className="bg-grain relative overflow-hidden bg-primary-dark md:flex md:min-h-[64vh] lg:min-h-[70vh]">
        <Container className="relative z-10 flex flex-col py-12 sm:py-14 md:py-14 lg:py-16">
          <div className="flex flex-1 flex-col justify-center">
            <div className="flex max-w-xl flex-col gap-6 lg:gap-7">
              <Reveal>
                <span className="inline-flex w-fit items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
                  <span className="h-px w-6 bg-gold-light/70" />
                  Rooted in India &bull; Reaching the World
                </span>
              </Reveal>

              <Reveal delay={120}>
                <h1 className="font-display text-4xl font-semibold leading-[1.22] tracking-[-0.01em] text-cream sm:text-5xl lg:text-[3.4rem]">
                  Premium Rice, Milled with <em className="not-italic text-gold-light">Precision</em> for a
                  Global Table
                </h1>
              </Reveal>

              <Reveal delay={220}>
                <p className="max-w-sm text-base leading-[1.75] text-cream/70 sm:text-lg">
                  {SITE.shortDescription}
                </p>
              </Reveal>

              <Reveal delay={320}>
                <div className="mt-1 flex flex-col gap-4 sm:flex-row sm:items-stretch">
                  <Button
                    href="/products"
                    variant="primary"
                    size="lg"
                    className="group"
                    icon={
                      <ChevronRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    }
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

          <HeroTrustPoints className="hidden pt-8 md:flex md:flex-wrap md:items-center md:gap-x-8 md:gap-y-3" />
        </Container>

        {/* Mobile/tablet: contained product shot in normal flow, after the text above.
            Desktop (md:): the same element escapes to `absolute inset-0`, becoming the
            section's full-bleed backdrop behind the text panel above. */}
        <HeroVisual />

        <Container className="relative z-10 pt-8 pb-14 sm:pt-10 sm:pb-16 md:hidden">
          <HeroTrustPoints className="grid grid-cols-2 gap-x-6 gap-y-4" />
        </Container>
      </section>

      {/* ABOUT — editorial, asymmetric composition rather than a centered heading + paragraph */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
          <Reveal className="relative">
            {/* This asset is a transparent cutout graphic (hand-picked paddy + a bowl of
                rice), not a full-bleed photo — object-contain on a soft brand-tint wash
                lets it sit naturally instead of being cropped by object-cover. */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-primary-tint to-gold-tint shadow-[0_32px_64px_-32px_rgba(28,26,23,0.35)]">
              <Image
                src="/images/about-rice-collage.webp"
                alt="A hand holding freshly harvested paddy above a bowl of premium milled Ramya Rice"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain p-8 sm:p-10"
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

      {/* OUR RICE COLLECTION — a large featured-product showcase (center image
          flanked by recessed prev/next previews, category filter, arrow/swipe/
          keyboard navigation) rather than the plain 3-column grid the catalogue
          page (/products) uses, so the homepage's product moment matches the
          hero's premium visual language. See ProductShowcase's file note for
          why it's a separate component from the one /products relies on. A
          faint grain texture + two soft brand-tint blobs give the section some
          depth instead of flat cream; Container gets z-10 so its content sits
          above both (bg-grain's ::before overlay is itself z-index:1). */}
      <section className="bg-grain relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-gold-tint blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-primary-tint blur-3xl" />
        <Container className="relative z-10 flex flex-col gap-12">
          <Reveal>
            <SectionHeader
              eyebrow="Our Rice Collection"
              title="Premium Rice for Every Market"
              description="Explore our carefully selected rice varieties, crafted for consistent quality and dependable supply."
              align="center"
            />
          </Reveal>
          <Reveal delay={100}>
            <ProductShowcase products={PRODUCTS} categories={PRODUCT_CATEGORIES} />
          </Reveal>
          <Reveal delay={150} className="flex justify-center">
            <Button href="/products" variant="ghost" size="md" icon={<ChevronRightIcon className="h-4 w-4" />}>
              View All Products
            </Button>
          </Reveal>
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

      {/* QUALITY ASSURANCE — a connected "Rice Quality Journey" (serpentine
          2-row timeline on desktop, vertical timeline below lg) rather than
          the plain 8-card grid the old ProcessTimeline gave this section, so
          it reads as one continuous, deliberate process rather than a
          documentation-style list. ProcessTimeline itself is untouched (still
          available if reused elsewhere) and so is /quality-process's own
          inline timeline — this only changes the homepage. Same faint-grain +
          soft-blob background treatment as the product section above, for a
          consistent, subtle premium backdrop across the two content sections
          that sit between the hero and the dark sections around them. */}
      <section className="bg-grain relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-primary-tint blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-gold-tint blur-3xl" />
        <Container className="relative z-10 flex flex-col gap-16">
          <Reveal>
            <SectionHeader
              eyebrow="Quality Assurance"
              title="From Field to Perfect Grain"
              description="Every batch follows a carefully controlled journey from sourcing to dispatch before it reaches your order."
              align="center"
            />
          </Reveal>
          <Reveal delay={100}>
            <QualityJourney steps={QUALITY_PROCESS_STEPS} />
          </Reveal>
          <Reveal delay={150} className="flex justify-center">
            <Button href="/quality-process" variant="outline" size="md" icon={<ChevronRightIcon className="h-4 w-4" />}>
              See Full Process
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* BUSINESS SOLUTIONS — an editorial two-column layout (heading/CTA/photo
          on the left, an interactive accordion of the six solutions on the
          right) rather than the flat 2x3 FeatureCard grid this replaces, so
          it reads as a considered B2B section instead of a repeated card
          pattern. FeatureCard itself is untouched — it's still used by the
          Infrastructure section below and by /about, /products, and /exports,
          none of which this change can affect. */}
      <section className="bg-cream-deep py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <SectionHeader
              eyebrow="Business Solutions"
              title="Built Around Your Business"
              description="Wholesale, retail, HORECA, bulk, export and private-label supply — choose the model that fits your business."
            />
            <Button href="/business-solutions" variant="primary" size="md" className="w-fit group" icon={<ChevronRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}>
              Explore Solutions
            </Button>
            <div className="relative mt-2 hidden aspect-[16/10] overflow-hidden rounded-2xl shadow-[0_24px_48px_-28px_rgba(28,26,23,0.35)] sm:block">
              <Image
                src="/images/forklift-warehouse.jpg"
                alt="Warehouse and logistics operations supporting Ramya Rice's B2B supply"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <BusinessSolutionsShowcase solutions={BUSINESS_SOLUTIONS} />
          </Reveal>
        </Container>
      </section>

      {/* GLOBAL PRESENCE — editorial layout (unchanged eyebrow/CTA route) with
          three changes from the old version: (1) "Export-Ready" now carries a
          gold accent instead of plain white, done as custom markup here
          rather than widening SectionHeader's title prop, so no other
          SectionHeader usage is touched; (2) the "Country list — pending
          confirmation" placeholder Badge is gone — the client hasn't
          confirmed markets, and a pending-placeholder badge read as
          unfinished rather than premium, so the general "Global Markets"
          step in the journey row below carries that idea instead, without
          naming or counting anything; (3) the photo swaps from the shared
          Visual component to GlobalPresenceVisual — see that file's note on
          why (a real third-party company name is readable in the source
          photo and needed a deliberate crop, plus a rice-photo corner accent
          — neither of which belongs in the shared, multi-page Visual). */}
      <section className="bg-grain relative overflow-hidden bg-primary-dark py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_30%,rgba(227,190,132,0.4)_1px,transparent_1px),radial-gradient(circle_at_60%_65%,rgba(227,190,132,0.3)_1px,transparent_1px),radial-gradient(circle_at_85%_20%,rgba(227,190,132,0.35)_1px,transparent_1px)] [background-size:120px_120px]" />
        <Container className="relative z-[2] grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="flex flex-col gap-6">
            <span className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">
              <span className="h-px w-6 bg-gold-light/70" />
              Global Presence
            </span>
            <h2 className="font-display text-3xl leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
              <span className="text-gold-light">Export-Ready</span>, Wherever Business Takes Us
            </h2>
            <p className="max-w-md text-base leading-relaxed text-cream/70 sm:text-lg">
              Our supply chain is structured to support international B2B buyers with dependable rice
              supply and market-ready solutions.
            </p>

            <Button
              href="/exports"
              variant="outline-light"
              size="md"
              className="group mt-1 w-fit"
              icon={<ChevronRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
            >
              Explore Global Presence
            </Button>

            <div role="list" className="flex flex-wrap items-center gap-x-2 gap-y-3 pt-1">
              {EXPORT_JOURNEY.map((step, i) => (
                <div key={step.label} role="listitem" className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-cream/75 sm:text-sm">
                    <step.icon className="h-4 w-4 text-gold-light" strokeWidth={1.6} aria-hidden="true" />
                    {step.label}
                  </span>
                  {i < EXPORT_JOURNEY.length - 1 ? (
                    <ChevronRightIcon className="h-3.5 w-3.5 text-gold-light/40" aria-hidden="true" />
                  ) : null}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <GlobalPresenceVisual />
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
