import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
];

const serviceLinks = [
  { label: "Domestic", href: "#services" },
  { label: "Commercial", href: "#services" },
  { label: "Industrial", href: "#services" },
  { label: "EICR Reports", href: "#eicr" },
];

const navLinks = [
  { label: "Why Liam", href: "#liam" },
  { label: "Services", href: "#services" },
  { label: "EICR", href: "#eicr" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#060d24]">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-5">
            <BrandLogo />
            <p className="text-sm leading-7 text-white/70">
              <span className="text-[#ffd33d] font-semibold">Honest</span>,{" "}
              <span className="text-[#ffd33d] font-semibold">reliable</span> and{" "}
              <span className="text-[#ffd33d] font-semibold">efficient</span>{" "}
              electrical services across Darwen and the surrounding areas.
              Fully insured and qualified with 18+ years experience.
            </p>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-semibold tracking-wider text-white uppercase">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-[#ffd33d]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-semibold tracking-wider text-white uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-[#ffd33d]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-semibold tracking-wider text-white uppercase">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:07485035381"
                  className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[#ffd33d]"
                >
                  <Phone className="size-4 text-[#ffd33d]" />
                  07485 035381
                </a>
              </li>
              <li>
                <a
                  href="mailto:l.telectricals2021@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[#ffd33d]"
                >
                  <Mail className="size-4 text-[#ffd33d]" />
                  l.telectricals2021@gmail.com
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-sm text-white/70">
                  <MapPin className="size-4 text-[#ffd33d]" />
                  Darwen, Lancashire
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/60">
            &copy; {currentYear} L&T Electricals. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 transition-colors hover:text-[#ffd33d]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
