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
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <Container className="relative z-[2]">
        <Reveal className="flex max-w-2xl flex-col gap-5">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">
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
