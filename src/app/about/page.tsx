import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Visual } from "@/components/ui/Visual";
import { PageHero } from "@/components/ui/PageHero";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CTASection } from "@/components/ui/CTASection";
import { Badge } from "@/components/ui/Badge";
import {
  FactoryIcon,
  ShieldCheckIcon,
  LeafIcon,
  GearIcon,
  GlobeIcon,
  TruckIcon,
} from "@/components/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Ramya Rice — our story, vision, mission, and the values behind our rice manufacturing and export business.",
  path: "/about",
});

const VALUES = [
  { icon: ShieldCheckIcon, title: "Quality First", description: "Every batch is expected to meet a consistent internal quality bar before it ships." },
  { icon: LeafIcon, title: "Integrity", description: "Transparent dealings with growers, partners, and buyers at every stage." },
  { icon: GearIcon, title: "Consistency", description: "Standardised processing so every order matches the last." },
  { icon: GlobeIcon, title: "Partnership", description: "Long-term relationships with domestic and international buyers, not one-off orders." },
];

const STRENGTHS = [
  { icon: FactoryIcon, title: "Manufacturing Capability", description: "A dedicated facility covering cleaning, milling, and packaging." },
  { icon: TruckIcon, title: "Supply Reliability", description: "Production planned around dependable, repeatable dispatch schedules." },
  { icon: GlobeIcon, title: "B2B & Export Ready", description: "Structured to serve wholesale, HORECA, bulk, and export buyers." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Rice Manufacturing Business Built on Trust"
        description="Get to know Ramya Rice — our story, our purpose, and the principles that guide how we work with partners."
      />

      {/* Introduction */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <SectionHeader
              eyebrow="Company Introduction"
              title="Who We Are"
              description="Ramya Rice is a rice manufacturing and export business focused on consistent grain quality, dependable supply, and long-term B2B partnerships. This section will carry the client's full company introduction once confirmed."
            />
          </Reveal>
          <Reveal delay={100}>
            <Visual
              icon={FactoryIcon}
              ratio="aspect-[4/3]"
              photo="/images/modern-factory.jpg"
              alt="Ramya Rice manufacturing facility"
            />
          </Reveal>
        </Container>
      </section>

      {/* Story / History */}
      <section className="bg-cream-deep py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <Visual
              icon={LeafIcon}
              ratio="aspect-[4/3]"
              photo="/images/rice-paddy-field-2.jpg"
              alt="Rice paddy fields at harvest"
            />
          </Reveal>
          <Reveal delay={100} className="order-1 flex flex-col gap-5 lg:order-2">
            <SectionHeader
              eyebrow="Our Story"
              title="Company History"
              description="Placeholder — this section will carry the founding story, milestones, and growth of Ramya Rice once the client shares the details."
            />
            <Badge tone="pending">Awaiting client-provided company history</Badge>
          </Reveal>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-8 sm:grid-cols-2">
          <Reveal className="flex flex-col gap-4 rounded-3xl border border-cream-line bg-surface p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Vision</span>
            <p className="font-display text-2xl leading-snug text-ink">
              To be a trusted name in rice manufacturing, recognised for quality and consistency across domestic and global markets.
            </p>
          </Reveal>
          <Reveal delay={90} className="flex flex-col gap-4 rounded-3xl border border-cream-line bg-surface p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Mission</span>
            <p className="font-display text-2xl leading-snug text-ink">
              To deliver consistently graded, well-packaged rice through reliable processing and dependable supply, for every scale of buyer.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-cream-deep py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeader eyebrow="What We Stand For" title="Our Values" align="center" />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <FeatureCard icon={v.icon} title={v.title} description={v.description} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Strengths */}
      <section className="py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeader eyebrow="Company Strengths" title="What Sets Us Apart" align="center" />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {STRENGTHS.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <FeatureCard icon={s.icon} title={s.title} description={s.description} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Achievements & Leadership */}
      <section className="bg-cream-deep py-20 sm:py-28">
        <Container className="grid gap-8 sm:grid-cols-2">
          <Reveal className="flex flex-col gap-3 rounded-3xl border border-dashed border-cream-line bg-surface p-10">
            <h3 className="font-display text-xl text-ink">Achievements</h3>
            <p className="text-sm leading-relaxed text-ink-soft">
              Awards, milestones, and recognitions will be listed here once shared by Ramya Rice.
            </p>
            <Badge tone="pending">Placeholder</Badge>
          </Reveal>
          <Reveal delay={90} className="flex flex-col gap-3 rounded-3xl border border-dashed border-cream-line bg-surface p-10">
            <h3 className="font-display text-xl text-ink">Leadership</h3>
            <p className="text-sm leading-relaxed text-ink-soft">
              Leadership profiles and company information will be added here once confirmed by the client.
            </p>
            <Badge tone="pending">Placeholder</Badge>
          </Reveal>
        </Container>
      </section>

      <CTASection
        title="Want to Know More About Us?"
        description="Reach out and our team will be glad to share more about our capabilities and how we can work together."
      />
    </>
  );
}
