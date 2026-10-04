import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/ui/CTASection";
import { ShieldCheckIcon } from "@/components/icons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Certifications",
  description:
    "Certification and credential information for Ramya Rice will be published here once verified.",
  path: "/certifications",
});

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Certifications"
        title="Trust, Backed by Documentation"
        description="We only publish certifications once they are verified and confirmed by Ramya Rice. No credential is assumed or invented on this page."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-5 rounded-3xl border border-dashed border-gold/40 bg-cream-deep/60 p-12 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-tint text-primary">
              <ShieldCheckIcon className="h-8 w-8" />
            </span>
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-2xl text-ink">Certifications Coming Soon</h2>
              <p className="text-sm leading-relaxed text-ink-soft">
                Certification and registration details will be published here once Ramya Rice's documentation is
                confirmed. No credential is assumed or implied in the meantime.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection
        title="Need Certification Documents?"
        description="If you require specific compliance documentation for your order, let us know your requirement."
      />
    </>
  );
}
