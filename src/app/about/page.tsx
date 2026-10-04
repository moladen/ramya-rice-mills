import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Visual } from "@/components/ui/Visual";
import { PageHero } from "@/components/ui/PageHero";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CTASection } from "@/components/ui/CTASection";
import {
  FactoryIcon,
  ShieldCheckIcon,
  LeafIcon,
  GearIcon,
  GlobeIcon,
  TruckIcon,
  WheatIcon,
  CheckIcon,
  MapPinIcon,
  ChevronRightIcon,
} from "@/components/icons";
import { SITE } from "@/data/site";
import { LEADERSHIP } from "@/data/leadership";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Ramya Rice is a modern-generation Indian rice manufacturer rooted in agriculture, sourcing from Bundelkhand and processing on Satake technology, led by a team with international business experience.",
  path: "/about",
});

const VALUES = [
  { icon: ShieldCheckIcon, title: "Quality First", description: "Every batch is expected to meet a consistent internal quality bar before it ships." },
  { icon: LeafIcon, title: "Integrity", description: "Transparent dealings with growers, partners, and buyers at every stage." },
  { icon: GearIcon, title: "Consistency", description: "Standardised processing so every order matches the last." },
  { icon: GlobeIcon, title: "Partnership", description: "Long-term relationships with domestic and international buyers, not one-off orders." },
];

const STRENGTHS = [
  { icon: FactoryIcon, title: "Manufacturing Capability", description: "A dedicated facility built on Satake technology, covering cleaning, milling, and packaging." },
  { icon: TruckIcon, title: "Supply Reliability", description: "Production planned around dependable, repeatable dispatch schedules." },
  { icon: GlobeIcon, title: "B2B & Export Ready", description: "Structured to serve wholesale, HORECA, bulk, and export buyers, backed by international business experience." },
];

// The brand story journey, per customer-approved positioning — presentational
// chips only, no claims beyond the sequence itself.
const BRAND_JOURNEY = [
  { icon: LeafIcon, label: "Field" },
  { icon: WheatIcon, label: "Farmers / Procurement" },
  { icon: GearIcon, label: "Processing" },
  { icon: FactoryIcon, label: "Satake Technology" },
  { icon: CheckIcon, label: "People & Process" },
  { icon: MapPinIcon, label: "International Experience" },
  { icon: GlobeIcon, label: "World Markets" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Modern-Generation Rice Business, Rooted in Agriculture"
        description="Ramya Rice is built on Indian agricultural roots, Bundelkhand sourcing, and Satake processing technology, led by a team with international business experience and global ambition."
      />

      {/* Introduction */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <SectionHeader
              eyebrow="Company Introduction"
              title="Who We Are"
              description="Ramya Rice is a modern-generation rice manufacturing and export business with agriculture at its heart. We source paddy from Bundelkhand and process it on Satake technology, applying an international, quality-first approach to every order."
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

      {/* Brand Story */}
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
              title={SITE.brandStory}
              description="Ramya Rice has grown by staying focused on consistent grain quality, modern processing, and dependable supply for partners across domestic and export markets."
            />
            <p className="border-l-2 border-gold/50 pl-4 text-sm font-medium italic leading-relaxed text-ink-soft">
              &ldquo;{SITE.philosophy}&rdquo;
            </p>
          </Reveal>
        </Container>

        <Container className="mt-14">
          <div role="list" aria-label="Our journey, from field to world markets" className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
            {BRAND_JOURNEY.map((step, i) => (
              <div key={step.label} role="listitem" className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-full border border-gold/30 bg-surface px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-ink-soft sm:text-sm">
                  <step.icon className="h-4 w-4 text-gold" strokeWidth={1.6} aria-hidden="true" />
                  {step.label}
                </span>
                {i < BRAND_JOURNEY.length - 1 ? (
                  <ChevronRightIcon className="h-3.5 w-3.5 text-gold/40" aria-hidden="true" />
                ) : null}
              </div>
            ))}
          </div>
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

      {/* Leadership */}
      <section className="bg-cream-deep py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeader
              eyebrow="Leadership"
              title="Founders Driving Ramya Rice"
              description="Led by founders who bring together agricultural roots and international business experience."
              align="center"
            />
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2">
            {LEADERSHIP.map((person, i) => (
              <Reveal key={person.key} delay={i * 90}>
                <div className="flex h-full flex-col gap-5 rounded-3xl border border-cream-line bg-surface p-8 sm:p-10">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display text-2xl text-ink">{person.name}</h3>
                    <span className="text-sm font-semibold text-primary">{person.title}</span>
                  </div>
                  <span className="inline-flex w-fit items-center rounded-full bg-primary-tint px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    {person.qualification}
                  </span>
                  <ul className="flex flex-col gap-2.5 border-t border-cream-line pt-4">
                    {person.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-sm text-ink-soft">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Achievements */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto flex max-w-xl flex-col gap-3 rounded-3xl border border-dashed border-cream-line bg-surface p-10 text-center">
            <h3 className="font-display text-xl text-ink">Achievements</h3>
            <p className="text-sm leading-relaxed text-ink-soft">
              Awards, milestones, and recognitions will be listed here once shared by Ramya Rice.
            </p>
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
