import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Visual } from "@/components/ui/Visual";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { PhoneIcon, MailIcon, MapPinIcon, WhatsAppIcon } from "@/components/icons";
import { SITE } from "@/data/site";
import { whatsappLink, GENERAL_ENQUIRY_MESSAGE } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Ramya Rice for wholesale, retail, HORECA, bulk, or export rice enquiries.",
};

const CONTACT_ITEMS = [
  { icon: PhoneIcon, label: "Call Us", value: SITE.contact.phoneDisplay, href: SITE.contact.phoneHref },
  { icon: WhatsAppIcon, label: "WhatsApp", value: SITE.contact.phoneDisplay, href: whatsappLink(GENERAL_ENQUIRY_MESSAGE) },
  { icon: MailIcon, label: "Email", value: SITE.contact.email, href: `mailto:${SITE.contact.email}` },
  { icon: MapPinIcon, label: "Address", value: SITE.contact.addressLines.join(", "), href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Start a Conversation"
        description="Send us your requirement and our team will respond with product options, pricing, and next steps."
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal className="flex flex-col gap-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {CONTACT_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-cream-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_44px_-28px_rgba(28,26,23,0.35)]"
                >
                  <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-gold via-gold-light to-gold transition-transform duration-500 ease-out group-hover:scale-x-100" />
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-primary-tint text-primary ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-gold-tint group-hover:text-gold group-hover:ring-gold/30">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-ink-faint">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm font-medium text-ink hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-ink">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <Visual icon={MapPinIcon} tone="cream" ratio="aspect-[4/3]" label="Factory Location Map — Placeholder" />
            </div>
          </Reveal>

          <Reveal delay={100} className="relative overflow-hidden rounded-3xl border border-cream-line bg-surface p-6 shadow-[0_28px_64px_-32px_rgba(28,26,23,0.25)] sm:p-10">
            <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary via-gold to-primary" />
            <h2 className="mb-6 font-display text-2xl font-semibold text-ink">Business Enquiry Form</h2>
            <EnquiryForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
