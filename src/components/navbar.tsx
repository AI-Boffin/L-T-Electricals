"use client";

import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Liam", href: "#liam" },
  { label: "Services", href: "#services" },
  { label: "EICR", href: "#eicr" },
  { label: "Contact", href: "#contact" },
];

function SiteLinks({ className }: { className?: string }) {
  return navItems.map((item) => (
    <a
      key={item.href}
      href={item.href}
      className={cn(
        "text-sm font-medium text-white/74 hover:text-white",
        className,
      )}
    >
      {item.label}
    </a>
  ));
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if we've scrolled past the threshold
      setIsScrolled(currentScrollY > 50);

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="mx-auto max-w-7xl px-6 pt-6 sm:px-8">
        <div
          className={cn(
            "flex items-center justify-between gap-4 rounded-full border px-4 py-3 shadow-[0_18px_50px_-38px_rgba(0,0,0,0.75)] backdrop-blur-md transition-all duration-300 sm:px-5",
            isScrolled
              ? "border-white/8 bg-white/5"
              : "border-white/12 bg-white/8",
          )}
        >
          <a href="#" aria-label="L&T Electricals home">
            <BrandLogo />
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            <SiteLinks />
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:07485035381"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 rounded-full border-white/14 bg-white/6 px-5 text-white hover:bg-white/12",
              )}
            >
              <Phone className="size-4" />
              07485 035381
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 rounded-full bg-[#ffd33d] px-5 text-[var(--brand-navy)] shadow-[0_16px_36px_-20px_rgba(255,211,61,0.7)] hover:bg-[#ffd33d]/90",
              )}
            >
              Book Liam
            </a>
          </div>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="size-10 rounded-full border-white/12 bg-white/8 text-white lg:hidden"
                />
              }
            >
              <Menu className="size-5" />
              <span className="sr-only">Open navigation</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-l border-primary/10 bg-[var(--brand-navy)] p-0 text-white"
            >
              <SheetHeader className="space-y-3 border-b border-white/10 px-6 py-6">
                <BrandLogo />
                <SheetTitle className="text-white">Liam Crooks</SheetTitle>
                <SheetDescription className="text-white/68">
                  Award-winning electrician for rewires, upgrades, fault
                  finding, EICR reports and power improvements.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-2 px-6 py-6">
                <SiteLinks className="rounded-2xl px-3 py-3 hover:bg-white/6" />
              </div>
              <div className="mt-auto space-y-3 px-6 pb-6">
                <a
                  href="tel:07485035381"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-11 w-full rounded-full border-white/14 bg-white/8 text-white",
                  )}
                >
                  <Phone className="size-4" />
                  07485 035381
                </a>
                <a
                  href="#contact"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-11 w-full rounded-full bg-[#ffd33d] text-[var(--brand-navy)]",
                  )}
                >
                  Start an enquiry
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
