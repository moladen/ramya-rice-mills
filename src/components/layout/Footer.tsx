import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { NAV_LINKS } from "@/data/nav";
import { SITE } from "@/data/site";
import { MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { whatsappLink, GENERAL_ENQUIRY_MESSAGE } from "@/lib/whatsapp";

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/contact" },
  { label: "Terms of Use", href: "/contact" },
];

// Split into two short columns instead of one tall list — keeps this
// column's height in the same range as the Logo and Contact columns
// next to it, instead of stretching the whole row much taller than them.
const LINKS_COL_A = NAV_LINKS.slice(0, 5);
const LINKS_COL_B = NAV_LINKS.slice(5);

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-dark text-cream">
      <Image
        src="/images/rice-grains.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary-dark/92" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-x-10 gap-y-12 px-6 py-16 lg:grid-cols-[1.5fr_0.85fr_0.85fr_1.1fr] lg:px-10 lg:py-20">
        <div className="flex flex-col gap-5">
          <Logo tone="dark" imageClassName="h-14 w-auto sm:h-16" priority={false} />
          <p className="max-w-sm text-sm leading-relaxed text-cream/65">
            {SITE.shortDescription}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5">
            {LINKS_COL_A.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-cream/70 hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 aria-hidden className="hidden text-xs font-semibold uppercase tracking-[0.25em] lg:block lg:invisible">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5">
            {LINKS_COL_B.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-cream/70 hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
            Contact
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-cream/70">
            <li className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
              <a href={SITE.contact.phoneHref} className="hover:text-cream">
                {SITE.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
              <a
                href={whatsappLink(GENERAL_ENQUIRY_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
              <a href={`mailto:${SITE.contact.email}`} className="hover:text-cream">
                {SITE.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
              <span>{SITE.contact.addressLines.join(", ")}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 border-t border-cream/10">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-x-4 gap-y-2 px-6 py-6 text-xs text-cream/50 lg:px-10">
          <span>&copy; {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</span>
          <span className="flex items-center gap-4">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-cream">
                {link.label}
              </Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
