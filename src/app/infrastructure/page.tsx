import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Visual } from "@/components/ui/Visual";
import { CTASection } from "@/components/ui/CTASection";
import { FactoryIcon, GearIcon, WarehouseIcon, PackageIcon, FlaskIcon, TruckIcon } from "@/components/icons";
import { INFRASTRUCTURE_AREAS } from "@/data/infrastructure";

export const metadata: Metadata = {
  title: "Infrastructure",
  description:
    "A look at Ramya Rice's manufacturing facility, machinery, storage, and packaging capability.",
};

const ICONS = { factory: FactoryIcon, gear: GearIcon, warehouse: WarehouseIcon, package: PackageIcon, flask: FlaskIcon, truck: TruckIcon };
const TONES = ["forest", "gold", "night", "cream"] as const;

// Only set a photo where a genuinely representative free-license image was
// found — sections without one keep the gradient placeholder rather than
// show a mismatched or misleading photo.
const PHOTOS: Partial<Record<string, string>> = {
  factory: "/images/modern-factory.jpg",
  processing: "/images/factory-conveyor.jpg",
  storage: "/images/grain-silos.jpg",
  "quality-control": "/images/lab-testing.jpg",
};

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure"
        title="Inside Our Manufacturing Capability"
        description="From intake to dispatch, our facility is organised around consistent processing and reliable output."
      />

      <section className="py-20 sm:py-28">
        <Container className="flex flex-col gap-16">
          {INFRASTRUCTURE_AREAS.map((area, i) => {
            const Icon = ICONS[area.icon];
            const reversed = i % 2 === 1;
            return (
              <Reveal key={area.key}>
                <div className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <Visual
                    icon={Icon}
                    tone={TONES[i % TONES.length]}
                    ratio="aspect-[4/3]"
                    label={`${area.name} — Placeholder`}
                    photo={PHOTOS[area.key]}
                    alt={area.name}
                  />
                  <div className="flex flex-col gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <SectionHeader title={area.name} description={area.description} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </Container>
      </section>

      <CTASection
        title="Want a Closer Look at Our Facility?"
        description="Get in touch to discuss a facility walkthrough or detailed capability document."
      />
    </>
  );
}
