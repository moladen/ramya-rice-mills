"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MenuIcon, CloseIcon, ChevronRightIcon, PhoneIcon } from "@/components/icons";
import { HEADER_NAV, type HeaderNavItem } from "@/data/nav";
import { SITE } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close dropdown on outside click or route change
  useEffect(() => {
    setActiveDropdown(null);
    setOpen(false);
  }, [pathname]);

  const toggleMobileGroup = (label: string) => {
    setMobileExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const isLinkActive = (item: HeaderNavItem) => {
    if (pathname === item.href) return true;
    if (item.children) {
      return item.children.some((child) => pathname === child.href);
    }
    return false;
  };

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-cream-line/80 bg-cream/95 backdrop-blur-md shadow-[0_10px_30px_-15px_rgba(7,38,19,0.15)] py-2.5"
          : "border-b border-cream-line/40 bg-cream/85 backdrop-blur-sm py-3.5"
      }`}
    >
      <Container className="flex items-center justify-between gap-4 lg:gap-8">
        {/* Left: Brand Logo (Borderless & Transparent) */}
        <div className="shrink-0">
          <Logo priority showTagline={false} />
        </div>

        {/* Center: Desktop Navigation with Luxury Dropdowns */}
        <nav className="hidden items-center justify-center gap-1 lg:flex xl:gap-2">
          {HEADER_NAV.map((item) => {
            const active = isLinkActive(item);
            const hasChildren = !!item.children?.length;
            const isOpen = activeDropdown === item.label;

            if (hasChildren) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveDropdown(isOpen ? null : item.label)
                    }
                    className={`group flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.88rem] font-medium transition-all duration-200 ${
                      active || isOpen
                        ? "bg-primary/5 text-primary font-semibold"
                        : "text-ink-soft hover:bg-cream-deep/60 hover:text-primary"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRightIcon
                      className={`h-3.5 w-3.5 text-gold transition-transform duration-300 ${
                        isOpen ? "-rotate-90" : "rotate-90"
                      }`}
                    />
                  </button>

                  {/* Dropdown Floating Panel */}
                  <div
                    className={`absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-300 ${
                      isOpen
                        ? "pointer-events-auto visible translate-y-0 opacity-100"
                        : "pointer-events-none invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="w-80 rounded-2xl border border-cream-line/90 bg-surface/98 p-2.5 shadow-[0_20px_48px_-12px_rgba(7,38,19,0.2)] backdrop-blur-xl animate-scale-in">
                      <div className="flex flex-col gap-1">
                        {item.children?.map((child) => {
                          const childActive = pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`group/item flex flex-col gap-1 rounded-xl p-3 transition-colors ${
                                childActive
                                  ? "bg-primary-tint/80 text-primary"
                                  : "hover:bg-cream/80"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-ink group-hover/item:text-primary">
                                  {child.label}
                                </span>
                                <ChevronRightIcon className="h-3.5 w-3.5 text-gold opacity-0 transition-all group-hover/item:translate-x-0.5 group-hover/item:opacity-100" />
                              </div>
                              <span className="text-xs leading-relaxed text-ink-faint group-hover/item:text-ink-soft">
                                {child.description}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3.5 py-2 text-[0.88rem] font-medium transition-all duration-200 ${
                  active
                    ? "text-primary font-semibold"
                    : "text-ink-soft hover:bg-cream-deep/60 hover:text-primary"
                }`}
              >
                {item.label}
                {active ? (
                  <span className="absolute bottom-0.5 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-gold" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        {/* Right: Quick Action Buttons */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <Button
            href="/contact"
            variant="secondary"
            size="md"
            className="hover:scale-105 shadow-sm"
          >
            Enquire Now
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-surface/80 text-primary shadow-xs transition-colors hover:bg-cream lg:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </Container>

      {/* Mobile Drawer */}
      {open ? (
        <div className="max-h-[calc(100vh-80px)] overflow-y-auto border-t border-cream-line bg-cream px-6 pb-8 pt-4 shadow-2xl lg:hidden">
          <nav className="flex flex-col gap-1.5">
            {HEADER_NAV.map((item) => {
              const active = isLinkActive(item);
              const hasChildren = !!item.children?.length;
              const isExpanded = mobileExpanded[item.label];

              if (hasChildren) {
                return (
                  <div key={item.label} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => toggleMobileGroup(item.label)}
                      className={`flex items-center justify-between rounded-xl px-3.5 py-3 text-base font-semibold transition-colors ${
                        active ? "bg-primary-tint text-primary" : "text-ink hover:bg-cream-deep"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRightIcon
                        className={`h-4 w-4 text-gold transition-transform duration-200 ${
                          isExpanded ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {isExpanded ? (
                      <div className="ml-3 flex flex-col gap-1 border-l-2 border-gold/30 pl-3 pt-1">
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="rounded-lg px-3 py-2 text-sm text-ink-soft hover:bg-cream-deep hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-3.5 py-3 text-base font-semibold transition-colors ${
                    active ? "bg-primary-tint text-primary" : "text-ink hover:bg-cream-deep"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 flex flex-col gap-3 border-t border-cream-line pt-5">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              onClick={() => setOpen(false)}
            >
              Enquire Now
            </Button>
            <a
              href={SITE.contact.phoneHref}
              className="flex items-center justify-center gap-2 text-sm text-ink-soft hover:text-primary"
            >
              <PhoneIcon className="h-4 w-4 text-gold" />
              <span>{SITE.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

