import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Visual } from "@/components/ui/Visual";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import { CheckIcon, StoreIcon, CartIcon, ChefIcon, BoxesIcon, GlobeIcon, TagIcon, ChevronRightIcon } from "@/components/icons";
import { BUSINESS_SOLUTIONS } from "@/data/business-solutions";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Business Solutions",
  description:
    "B2B supply solutions from Ramya Rice — wholesale, retail, HORECA, bulk supply, export, and private label.",
  path: "/business-solutions",
});

const ICONS = { store: StoreIcon, cart: CartIcon, chef: ChefIcon, boxes: BoxesIcon, globe: GlobeIcon, tag: TagIcon };
const TONES = ["forest", "gold", "night", "cream"] as const;

// Only set a photo where a genuinely representative free-license image was
// found — the rest keep the gradient placeholder rather than a mismatched photo.
const PHOTOS: Partial<Record<string, string>> = {
  "bulk-supply": "/images/forklift-warehouse.jpg",
  export: "/images/shipping-port.jpg",
};

export default function BusinessSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Business Solutions"
        title="Supply Models for Every Kind of Buyer"
        description="Whichever channel you buy through, our supply model is built around consistent grade and dependable dispatch."
      />

      <section className="py-20 sm:py-28">
        <Container className="flex flex-col gap-16">
          {BUSINESS_SOLUTIONS.map((solution, i) => {
            const Icon = ICONS[solution.icon];
            const reversed = i % 2 === 1;
            return (
              <Reveal key={solution.key}>
                <div className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <Visual
                    icon={Icon}
                    tone={TONES[i % TONES.length]}
                    ratio="aspect-[4/3]"
                    label={`${solution.name} — Placeholder`}
                    photo={PHOTOS[solution.key]}
                    alt={solution.name}
                  />
                  <div className="flex flex-col gap-4">
                    <h2 className="font-display text-2xl text-ink sm:text-3xl">{solution.name}</h2>
                    <p className="text-base leading-relaxed text-ink-soft">{solution.summary}</p>
                    <ul className="flex flex-col gap-2.5">
                      {solution.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-ink-soft">
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Button href="/contact" variant="outline" size="md" className="mt-2 w-fit" icon={<ChevronRightIcon className="h-4 w-4" />}>
                      Enquire About {solution.name}
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
