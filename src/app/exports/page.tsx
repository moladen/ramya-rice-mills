import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Visual } from "@/components/ui/Visual";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import { CTASection } from "@/components/ui/CTASection";
import { GlobeIcon, PackageIcon, TruckIcon, ShieldCheckIcon, MapPinIcon } from "@/components/icons";
import { EXPORT_REGIONS, EXPORT_PROCESS_STEPS } from "@/data/exports";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Exports / Global Presence",
  description:
    "From the heart of India to global markets: Ramya Rice is an Indian rice exporter serving B2B buyers across Asia, the Middle East, Africa, Europe, and North America.",
  path: "/exports",
});

const EXPORT_CAPABILITIES = [
  { icon: PackageIcon, title: "Export Packaging", description: "Packaging formats suited to container loads and international shipment norms." },
  { icon: TruckIcon, title: "Logistics Coordination", description: "Coordination with freight and logistics partners to plan dispatch schedules." },
  { icon: ShieldCheckIcon, title: "Documentation Support", description: "Support with shipment documentation required for cross-border B2B orders." },
];

export default function ExportsPage() {
  return (
    <>
      <PageHero
        eyebrow="Exports / Global Presence"
        title="From the Heart of India to Global Markets"
        description="Indian origin, modern processing, and a quality-first approach, backed by flexible supply and professional, responsive communication for international B2B buyers."
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <SectionHeader
              eyebrow="Export Capability"
              title="Ready for Cross-Border Orders"
              description="From packaging to dispatch coordination, our export process is structured to support international B2B buyers reliably."
            />
          </Reveal>
          <Reveal delay={100}>
            <Visual
              icon={GlobeIcon}
              ratio="aspect-[4/3]"
              photo="/images/shipping-port.jpg"
              alt="Shipping containers at an export port"
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream-deep py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeader eyebrow="Logistics Approach" title="How We Handle Export Orders" align="center" />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {EXPORT_CAPABILITIES.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <FeatureCard icon={item.icon} title={item.title} description={item.description} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Export journey */}
      <section className="py-20 sm:py-28">
        <Container className="flex flex-col gap-16">
          <Reveal>
            <SectionHeader
              eyebrow="Export Journey"
              title="Requirement to Shipment"
              align="center"
            />
          </Reveal>
          <ProcessTimeline steps={EXPORT_PROCESS_STEPS} />
        </Container>
      </section>

      <section className="bg-grain relative overflow-hidden bg-primary-dark py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_15%_25%,rgba(227,190,132,0.4)_1px,transparent_1px),radial-gradient(circle_at_50%_70%,rgba(227,190,132,0.3)_1px,transparent_1px),radial-gradient(circle_at_80%_35%,rgba(227,190,132,0.35)_1px,transparent_1px),radial-gradient(circle_at_35%_50%,rgba(227,190,132,0.25)_1px,transparent_1px)] [background-size:100px_100px]" />
        <Container className="relative z-[2] flex flex-col items-center gap-10 text-center">
          <Reveal className="flex flex-col items-center gap-5">
            <SectionHeader
              eyebrow="Regions Served"
              title="Global Presence"
              description="We serve international B2B buyers across the following regions."
              align="center"
              tone="dark"
            />
          </Reveal>
          <Reveal delay={100} className="flex w-full max-w-3xl flex-wrap items-center justify-center gap-3">
            {EXPORT_REGIONS.map((region) => (
              <span
                key={region}
                className="flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-2.5 text-sm font-medium text-cream/90"
              >
                <MapPinIcon className="h-4 w-4 text-gold-light" strokeWidth={1.6} aria-hidden="true" />
                {region}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      <CTASection
        title="Looking to Import from Us?"
        description="Share your destination country and required quantity, and we'll respond with export options."
      />
    </>
  );
}
