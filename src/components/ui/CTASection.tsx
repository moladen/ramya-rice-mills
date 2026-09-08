import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink, GENERAL_ENQUIRY_MESSAGE } from "@/lib/whatsapp";

export function CTASection({
  title = "Let's Talk Business",
  description = "Share your requirement — variety, quantity, and destination — and our team will get back with a tailored quote.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-grain relative overflow-hidden bg-primary-dark py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-primary-light/20 blur-3xl" />
      <Container className="relative z-[2]">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">
            B2B Enquiries
          </span>
          <h2 className="max-w-2xl font-display text-3xl text-cream sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
            {description}
          </p>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg">
              Request a Quote
            </Button>
            <Button
              href={whatsappLink(GENERAL_ENQUIRY_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-light"
              size="lg"
              icon={<WhatsAppIcon className="h-5 w-5" />}
            >
              Enquire on WhatsApp
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
