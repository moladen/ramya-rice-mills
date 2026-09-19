import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/ui/CTASection";
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

      <CTASection
        title="Need Certification Documents?"
        description="If you require specific compliance documentation for your order, let us know your requirement."
      />
    </>
  );
}
