import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Visual } from "@/components/ui/Visual";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CTASection } from "@/components/ui/CTASection";
import { Badge } from "@/components/ui/Badge";
import { GlobeIcon, PackageIcon, TruckIcon, ShieldCheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Exports / Global Presence",
  description:
    "Ramya Rice's export capability and approach to logistics for international B2B rice buyers.",
};

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
        title="Built to Serve International B2B Buyers"
        description="Our export approach is designed around reliable packaging, documentation, and logistics coordination for overseas partners."
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

      <section className="bg-grain relative overflow-hidden bg-primary-dark py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_15%_25%,rgba(227,190,132,0.4)_1px,transparent_1px),radial-gradient(circle_at_50%_70%,rgba(227,190,132,0.3)_1px,transparent_1px),radial-gradient(circle_at_80%_35%,rgba(227,190,132,0.35)_1px,transparent_1px),radial-gradient(circle_at_35%_50%,rgba(227,190,132,0.25)_1px,transparent_1px)] [background-size:100px_100px]" />
        <Container className="relative z-[2] flex flex-col items-center gap-8 text-center">
          <Reveal className="flex flex-col items-center gap-5">
            <SectionHeader
              eyebrow="Countries & Regions Served"
              title="Global Presence"
              description="A detailed list of countries and regions we serve will be published here once confirmed."
              align="center"
              tone="dark"
            />
            <Badge tone="pending">Country / region list — pending confirmation</Badge>
          </Reveal>
          <Reveal delay={100} className="w-full max-w-2xl">
            <Visual icon={GlobeIcon} tone="night" ratio="aspect-[16/9]" iconSize="h-16 w-16" label="World Map — Placeholder" />
          </Reveal>
        </Container>
      </section>

      <CTASection
        title="Looking to Import from Us?"
        description="Share your destination country and required quantity — we'll respond with export options."
      />
    </>
  );
}
