import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-grain relative overflow-hidden bg-primary-dark py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.25] [background-image:radial-gradient(circle_at_1px_1px,rgba(227,190,132,0.5)_1px,transparent_0)] [background-size:32px_32px]" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-primary-light/15 blur-3xl" />
      <Container className="relative z-[2]">
        <Reveal className="flex max-w-2xl flex-col gap-5">
          <span className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">
            <span className="h-px w-6 bg-gold-light/70" />
            {eyebrow}
          </span>
          <h1 className="font-display text-4xl leading-tight text-cream sm:text-5xl">{title}</h1>
          {description ? (
            <p className="text-base leading-relaxed text-cream/70 sm:text-lg">{description}</p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
