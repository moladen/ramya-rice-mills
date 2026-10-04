import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Visual } from "@/components/ui/Visual";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import { CTASection } from "@/components/ui/CTASection";
import { FactoryIcon, GearIcon, WarehouseIcon, PackageIcon, FlaskIcon, TruckIcon } from "@/components/icons";
import { INFRASTRUCTURE_AREAS, MANUFACTURING_PROCESS_STEPS } from "@/data/infrastructure";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Infrastructure",
  description:
    "Inside Ramya Rice's manufacturing facility: Satake milling technology and a 12-step process from paddy intake to dispatch.",
  path: "/infrastructure",
});

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
        description="Built on Satake technology, our facility is organised around a disciplined, 12-step process from paddy intake to dispatch."
      />

      {/* 12-step manufacturing process */}
      <section className="py-20 sm:py-28">
        <Container className="flex flex-col gap-16">
          <Reveal>
            <SectionHeader
              eyebrow="Our Process"
              title="Paddy Intake to Dispatch"
              description="Every batch moves through the same disciplined sequence, on Satake milling technology."
              align="center"
            />
          </Reveal>
          <ProcessTimeline steps={MANUFACTURING_PROCESS_STEPS} />
        </Container>
      </section>

      {/* Facility capability overview */}
      <section className="bg-cream-deep py-20 sm:py-28">
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
                    label={area.name}
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
