import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/ui/CTASection";
import { ShieldCheckIcon } from "@/components/icons";
import { CERTIFICATION_SLOTS } from "@/data/certifications";
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
        description="We only publish certifications once they are verified and confirmed by Ramya Rice — no credential is assumed or invented on this page."
      />

      <section className="py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeader
              eyebrow="Status"
              title="Certification Details Pending Confirmation"
              description="Each card below is a placeholder slot for a certification such as FSSAI, ISO, or APEDA. Logos, certificate numbers, and validity details will be added once the client provides verified documentation."
            />
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-3">
            {CERTIFICATION_SLOTS.map((cert) => (
              <Reveal key={cert.key}>
                <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-dashed border-cream-line bg-cream-deep p-8 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-surface text-ink-faint">
                    <ShieldCheckIcon className="h-8 w-8" />
                  </span>
                  <h3 className="text-sm font-semibold text-ink">{cert.suggestedName}</h3>
                  <p className="text-xs leading-relaxed text-ink-soft">{cert.description}</p>
                  <Badge tone="pending">Pending Verification</Badge>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Need Certification Documents?"
        description="If you require specific compliance documentation for your order, let us know your requirement."
      />
    </>
  );
}
