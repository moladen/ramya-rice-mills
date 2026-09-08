import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/ui/CTASection";
import { Badge } from "@/components/ui/Badge";
import { QUALITY_PROCESS_STEPS } from "@/data/quality-process";

export const metadata: Metadata = {
  title: "Quality & Process",
  description:
    "The journey our rice follows — sourcing, processing, cleaning, grading, quality testing, packaging, final inspection, and dispatch.",
};

export default function QualityProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & Process"
        title="Every Batch Follows the Same Journey"
        description="A consistent, repeatable process is what keeps grain quality dependable — from the first intake check to final dispatch."
      />

      <section className="py-20 sm:py-28">
        <Container className="flex flex-col gap-16">
          <Reveal>
            <SectionHeader
              eyebrow="Our Process"
              title="Sourcing to Dispatch"
              align="center"
            />
          </Reveal>

          <div className="relative flex flex-col gap-10">
            <div className="absolute left-6 top-2 hidden h-[calc(100%-2rem)] w-px bg-cream-line sm:block" />
            {QUALITY_PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 60}>
                <div className="relative flex gap-6 sm:pl-2">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-display text-lg text-cream">
                    {step.step}
                  </div>
                  <div className="flex flex-col gap-2 rounded-2xl border border-cream-line bg-surface p-6">
                    <h3 className="font-display text-xl text-ink">{step.name}</h3>
                    <p className="text-sm leading-relaxed text-ink-soft">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto max-w-2xl text-center">
            <Badge tone="pending">
              Specific technologies, lab tests, or certifications will be named only once confirmed by the client.
            </Badge>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
