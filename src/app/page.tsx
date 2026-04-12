import Image from "next/image";
import {
  ArrowRight,
  Award,
  Building2,
  CarFront,
  CheckCircle2,
  ExternalLink,
  Factory,
  FileCheck2,
  House,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  TriangleAlert,
  Upload,
  Wrench,
  Zap,
} from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const facebookUrl = "https://www.facebook.com/LTElectricals";

const movingServices = [
  "Full house rewires",
  "Partial rewires",
  "Fuse board upgrades",
  "Outdoor lighting",
  "EV chargers",
  "Fault finding",
  "Electrical shower installs",
  "Additional sockets",
  "Socket alterations",
  "EICR / electrical reports",
];

const whyLiam = [
  {
    title: "You deal directly with Liam",
    description:
      "L&T Electricals is built around Liam Crooks personally, so the advice, planning and finish all stay consistent.",
    icon: Phone,
    accent: "bg-[#2553ff]",
  },
  {
    title: "Insured, qualified, experienced",
    description:
      "Darwen based with 18+ years on the tools across domestic, commercial and industrial electrical work.",
    icon: ShieldCheck,
    accent: "bg-[#ffd33d]",
  },
  {
    title: "Photos and video welcome",
    description:
      "Clients can send images or short clips before a visit, which makes fault finding and quoting much faster.",
    icon: Upload,
    accent: "bg-[#ef4444]",
  },
];

const servicePanels = [
  {
    title: "Rewires and upgrades",
    description:
      "Full rewires, partial rewires and fuse board upgrades carried out properly, neatly and with long-term safety in mind.",
    icon: House,
    tone: "border-[#2553ff]/20 bg-[#2553ff]/12",
    items: [
      { name: "Full house rewires", detail: "Complete replacement of all wiring throughout the property, bringing everything up to current regulations with a fresh consumer unit and modern circuits." },
      { name: "Partial rewires", detail: "Targeted rewiring for specific areas or circuits that need updating, without disrupting the entire property." },
      { name: "Fuse board upgrades", detail: "Replacement of outdated fuse boxes with modern consumer units featuring RCD protection and MCBs for improved safety." },
    ],
  },
  {
    title: "Lighting, sockets and day-to-day fixes",
    description:
      "Additional sockets, socket alterations, outdoor lighting and electrical shower installs that make the space work better.",
    icon: Lightbulb,
    tone: "border-[#ffd33d]/25 bg-[#ffd33d]/12",
    items: [
      { name: "Outdoor lights", detail: "Weatherproof lighting for gardens, driveways, patios and external areas, installed safely with proper outdoor-rated fittings." },
      { name: "Additional sockets", detail: "Extra power points where you need them, properly wired back to the consumer unit without overloading existing circuits." },
      { name: "Alteration to sockets", detail: "Moving, replacing or upgrading existing sockets, including USB sockets and switched spurs for appliances." },
    ],
  },
  {
    title: "Fault finding",
    description:
      "When something keeps tripping, cutting out or behaving strangely, Liam tracks down the actual problem instead of guessing.",
    icon: Search,
    tone: "border-[#ef4444]/20 bg-[#ef4444]/10",
    items: [
      { name: "Testing", detail: "Systematic electrical testing using professional equipment to identify faults, measure insulation resistance and check circuit integrity." },
      { name: "Troubleshooting", detail: "Methodical diagnosis of electrical problems including tripping breakers, flickering lights, dead circuits and intermittent faults." },
      { name: "Repairs and maintenance", detail: "Fixing identified issues properly, replacing faulty components and ensuring the repair meets current standards." },
    ],
  },
  {
    title: "EV charging and modern installs",
    description:
      "EV chargers and other modern electrical upgrades fitted with the same straightforward approach as the rest of Liam's work.",
    icon: CarFront,
    tone: "border-white/12 bg-white/8",
    items: [
      { name: "EV chargers", detail: "Home charging point installation with dedicated circuits, suitable for all electric and hybrid vehicles, including smart chargers." },
      { name: "Electrical shower install", detail: "High-powered electric shower installation with appropriate circuit protection and correct cable sizing for safe operation." },
      { name: "Upgrade advice", detail: "Honest guidance on whether your current electrical setup can handle new demands or needs upgrading first." },
    ],
  },
  {
    title: "Commercial and industrial work",
    description:
      "L&T Electricals is not just for homes. Liam also covers commercial and industrial electrical work where reliability matters.",
    icon: Factory,
    tone: "border-white/12 bg-white/8",
    items: [
      { name: "Commercial electrical services", detail: "Electrical work for shops, offices, restaurants and business premises, including lighting, power distribution and emergency systems." },
      { name: "Industrial electrical services", detail: "Heavier electrical installations for warehouses, workshops and industrial units, including three-phase supplies and machinery connections." },
      { name: "Alterations and maintenance", detail: "Ongoing electrical maintenance, periodic inspections and modifications to keep commercial premises safe and compliant." },
    ],
  },
  {
    title: "Reports and safety checks",
    description:
      "EICR reporting for landlords, homeowners and businesses who want a clear picture of the condition of the electrics.",
    icon: FileCheck2,
    tone: "border-[#2553ff]/20 bg-[#2553ff]/10",
    items: [
      { name: "EICR reports", detail: "Electrical Installation Condition Reports that assess the safety of your wiring, required every 5 years for rental properties." },
      { name: "Identify risks and hazards", detail: "Professional inspection to find potential fire risks, shock hazards and non-compliant installations before they cause problems." },
      { name: "Peace of mind", detail: "Clear documentation of your electrical installation's condition, with honest advice on any remedial work needed." },
    ],
  },
];

const reportingReasons = [
  {
    title: "Landlords",
    description:
      "An EICR is required every 5 years or at the start of a new tenancy.",
    icon: FileCheck2,
  },
  {
    title: "Homeowners",
    description:
      "Useful when electrics feel dated, uncertain, or overdue a proper check.",
    icon: House,
  },
  {
    title: "Businesses",
    description:
      "A practical way to confirm the installation is safe, current and ready for day-to-day use.",
    icon: Building2,
  },
  {
    title: "Safety first",
    description:
      "Reporting helps uncover hidden fire or shock risks before they become bigger and more expensive problems.",
    icon: TriangleAlert,
  },
];

const proofPoints = [
  "Men In Business Award Winner - Sparky of The Year 2025",
  "18+ years experience",
  "Darwen based",
  "Insured & qualified",
  "Domestic, commercial and industrial work",
];

function SectionIntro({
  label,
  title,
  description,
  dark = false,
}: {
  label: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={cn("section-label", dark && "text-[var(--brand-yellow)]")}>
        {label}
      </p>
      <h2
        className={cn(
          "headline-balance mt-4 font-heading text-3xl leading-none font-semibold sm:text-4xl lg:text-[3.15rem]",
          dark ? "text-white" : "text-[var(--brand-navy)]",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "body-balance mt-5 max-w-2xl text-base leading-8 sm:text-lg",
          dark ? "text-white/76" : "text-foreground/72",
        )}
      >
        {description}
      </p>
    </div>
  );
}

function ServiceMarquee() {
  const items = [...movingServices, ...movingServices];

  return (
    <div className="wire-marquee">
      <div className="wire-track">
        {items.map((item, index) => (
          <div key={`${item}-${index}`} className="wire-chip">
            <span className="wire-chip-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <section className="relative isolate overflow-hidden pt-24">
        <div className="hero-orb hero-orb-blue" />
        <div className="hero-orb hero-orb-yellow" />
        <div className="hero-orb hero-orb-red" />

        <div className="mx-auto max-w-7xl px-6 pb-14 sm:px-8 lg:pb-20">
          <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="relative z-10 max-w-3xl text-white">
              <Badge className="hero-badge">
                <Award className="size-3.5" />
                Men In Business Award Winner - Sparky of The Year 2025
              </Badge>

              <h1 className="headline-balance mt-6 font-heading text-5xl leading-[0.93] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Meet Liam Crooks. Electrical work done properly, by the person
                whose name is on the van.
              </h1>

              <p className="body-balance mt-6 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
                Liam runs L&amp;T Electricals with an{" "}
                <span className="text-[#ffd33d] font-semibold">honest</span>,{" "}
                <span className="text-[#ffd33d] font-semibold">reliable</span> and{" "}
                <span className="text-[#ffd33d] font-semibold">efficient</span> approach
                for homes, landlords, businesses and industrial jobs that need rewires,
                upgrades, fault finding, EV chargers, lighting, sockets and EICR reports.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 rounded-full bg-[#ffd33d] px-6 text-base text-[var(--brand-navy)] hover:bg-[#ffd33d]/92",
                  )}
                >
                  Send Liam a job
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 rounded-full border-white/14 bg-white/6 px-6 text-base text-white hover:bg-white/12",
                  )}
                >
                  See Liam&apos;s latest work
                  <ExternalLink className="size-4" />
                </a>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/72">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4 text-[var(--brand-yellow)]" />
                  Darwen based
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="size-4 text-[var(--brand-yellow)]" />
                  Insured &amp; qualified
                </span>
                <span className="inline-flex items-center gap-2">
                  <Phone className="size-4 text-[var(--brand-yellow)]" />
                  07485 035381
                </span>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {proofPoints.slice(0, 3).map((point, index) => (
                  <div
                    key={point}
                    className={cn(
                      "hero-proof-card",
                      index === 1 && "hero-proof-card-yellow",
                      index === 2 && "hero-proof-card-red",
                    )}
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-stack">
              <div className="hero-wire hero-wire-blue" />
              <div className="hero-wire hero-wire-yellow" />
              <div className="hero-wire hero-wire-red" />

              <div className="media-shell media-shell-main">
                <Image
                  src="/images/business-specs.png"
                  alt="L&T Electricals service artwork showing electrical work examples"
                  width={686}
                  height={627}
                  className="pan-image h-full w-full rounded-[1.4rem] object-cover"
                />
                <div className="media-overlay">
                  <p className="media-kicker">L&amp;T Electricals</p>
                  <h2 className="font-heading text-2xl font-semibold text-white">
                    Rewires. Fault finding. Upgrades. Reports.
                  </h2>
                </div>
              </div>

              <div className="media-shell media-shell-alt float-card">
                <Image
                  src="/images/eicr-reporting.png"
                  alt="L&T Electricals EICR reporting artwork"
                  width={648}
                  height={655}
                  className="pan-image-alt h-full w-full rounded-[1.25rem] object-cover"
                />
              </div>

              <div className="award-panel">
                <p className="award-panel-kicker">Liam Crooks</p>
                <h3 className="font-heading text-2xl font-semibold text-[var(--brand-navy)]">
                  Sparky of the Year 2025
                </h3>
                <p className="mt-2 text-sm leading-6 text-[rgb(12_26_75_/_72%)]">
                  Men In Business Award Winner with more than 18 years of
                  electrical experience behind the work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="signal-band">
        <ServiceMarquee />
      </section>

      <section id="liam" className="py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-8 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="space-y-6">
            <SectionIntro
              dark
              label="Why Liam"
              title="Honest advice, reliable service, and efficient workmanship."
              description="Liam is not hiding behind a generic trade brand. L&T Electricals is built around direct communication, clear pricing, and jobs finished to a standard people can trust."
            />

            <div className="rounded-[2rem] border border-[#ffd33d]/40 p-6 sm:p-8">
              <Badge className="w-fit rounded-full bg-[var(--brand-yellow)] px-3 py-1 text-[var(--brand-navy)] font-semibold">
                18+ years experience
              </Badge>
              <h3 className="mt-4 font-heading text-xl sm:text-2xl font-semibold text-[#ffd33d] leading-tight">
                L&amp;T Electricals is the kind of business people recommend
                when they want the job handled properly.
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-[#ffd33d]/80">
                From power upgrades and new sockets to landlord reporting and
                fault finding, Liam works across domestic, commercial and
                industrial jobs with the same practical approach: find the
                right fix, explain it clearly, and leave the work neat.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {whyLiam.map((item, index) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className={cn(
                    "overflow-hidden rounded-[1.9rem] border-white/12 bg-white/8 backdrop-blur-sm",
                    index === 1 && "translate-x-0 lg:translate-x-8",
                    index === 2 && "translate-x-0 lg:translate-x-16",
                  )}
                >
                  <CardContent className="flex gap-4 p-5 sm:p-6">
                    <div className="space-y-3">
                      <div
                        className={cn(
                          "flex size-12 items-center justify-center rounded-[1.2rem] text-[var(--brand-navy)]",
                          item.accent,
                        )}
                      >
                        <Icon className="size-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl leading-none font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-white/72">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="relative py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionIntro
            dark
            label="Services"
            title="Reliable electrical services delivered with honesty and efficiency."
            description="L&amp;T Electricals covers the jobs people actually need help with: broken circuits, dated boards, poor socket layouts, landlord reporting, outdoor power, charger installs and the bigger upgrade work that changes how a property performs."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {servicePanels.map((service) => {
              const Icon = service.icon;

              return (
                <Card
                  key={service.title}
                  className={cn(
                    "service-panel rounded-[1.9rem] border backdrop-blur-sm",
                    service.tone,
                  )}
                >
                  <CardHeader className="gap-3 pb-4">
                    <div className="flex size-12 items-center justify-center rounded-[1.2rem] bg-[var(--brand-yellow)] text-[var(--brand-navy)]">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="text-xl text-white">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-7 text-white/70">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion>
                      {service.items.map((item) => (
                        <AccordionItem
                          key={item.name}
                          className="border-white/10"
                        >
                          <AccordionTrigger className="gap-3 rounded-[1rem] border border-white/10 bg-white/6 px-4 py-2.5 text-sm leading-6 text-white/90 hover:bg-white/10 hover:no-underline">
                            <span className="flex items-center gap-3">
                              <CheckCircle2 className="size-4 shrink-0 text-[var(--brand-yellow)]" />
                              {item.name}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pt-2 pb-3 text-white/70">
                            {item.detail}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="eicr" className="relative overflow-hidden py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-5">
            <div className="image-frame border-white/10 bg-white/8 p-3">
              <Image
                src="/images/eicr-reporting.png"
                alt="L&T Electricals EICR reporting graphic"
                width={648}
                height={655}
                className="h-full w-full rounded-[1.35rem] object-cover"
              />
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/8 p-6 text-white backdrop-blur-sm">
              <p className="text-xs font-semibold tracking-[0.18em] text-[var(--brand-yellow)] uppercase">
                Award-winning service
              </p>
              <h3 className="mt-3 font-heading text-2xl leading-none font-semibold">
                Liam Crooks, Sparky of the Year 2025
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/74">
                The award matters because it backs up what the business is built
                on: workmanship, trust, and advice clients can actually use.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <SectionIntro
              dark
              label="EICR Reporting"
              title="Need an EICR? Liam handles the report and explains what actually matters."
              description="EICR work is not just paperwork. It is about knowing whether an installation is safe, up to date and free from hidden risks before those risks turn into disruption, damage or bigger repair bills."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {reportingReasons.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Card
                    key={item.title}
                    className={cn(
                      "rounded-[1.6rem] border-white/10 bg-white/8 text-white backdrop-blur-sm",
                      index === 1 && "sm:translate-y-6",
                    )}
                  >
                    <CardContent className="space-y-4 p-6">
                      <div className="flex size-11 items-center justify-center rounded-[1rem] bg-white/12 text-[var(--brand-yellow)]">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl leading-none font-semibold">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-white/74">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="rounded-[1.8rem] border border-[#ffd33d]/24 bg-[linear-gradient(135deg,rgba(255,211,61,0.18),rgba(255,255,255,0.08))] p-6 text-white">
              <h3 className="font-heading text-2xl leading-none font-semibold">
                Landlord, homeowner or business owner, Liam keeps the advice
                clear.
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">
                If something needs attention, you will know what it is, how
                urgent it is, and what the sensible next step looks like. No
                vague wording. No padded-out jargon.
              </p>
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-6 h-11 rounded-full bg-[#ffd33d] px-5 text-[var(--brand-navy)] hover:bg-[#ffd33d]/92",
                )}
              >
                Ask Liam about EICR reporting
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="proof-tile-image group">
              <Image
                src="/images/kitchen.png"
                alt="Domestic electrical work"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="proof-tile-overlay">
                <Zap className="size-6" />
                <span>Domestic</span>
              </div>
            </div>
            <div className="proof-tile-image group">
              <Image
                src="/images/fusebox.png"
                alt="Commercial electrical work"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="proof-tile-overlay">
                <Building2 className="size-6" />
                <span>Commercial</span>
              </div>
            </div>
            <div className="proof-tile-image group">
              <Image
                src="/images/garage.png"
                alt="Industrial electrical work"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="proof-tile-overlay">
                <Factory className="size-6" />
                <span>Industrial</span>
              </div>
            </div>
            <div className="proof-tile-image group">
              <Image
                src="/images/exteriorhouselighting.png"
                alt="Repairs and upgrades"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="proof-tile-overlay">
                <Wrench className="size-6" />
                <span>Repairs &amp; upgrades</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facebook Section */}
      <section className="relative py-14 sm:py-18 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,83,255,0.15),rgba(255,211,61,0.1))]" />
        <div className="mx-auto max-w-7xl px-6 sm:px-8 relative">
          <div className="rounded-[2.5rem] border border-[#ffd33d]/30 bg-white/5 backdrop-blur-sm p-8 sm:p-12 lg:p-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#1877F2]/30 bg-[#1877F2]/20 px-4 py-2">
                  <svg className="size-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-sm font-semibold text-white">Follow on Facebook</span>
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  See more of Liam&apos;s work on Facebook
                </h2>

                <p className="text-lg text-white/70 max-w-2xl leading-8">
                  Browse through photos and videos of completed jobs, before-and-after transformations,
                  customer reviews, and the latest projects. Get a real feel for the quality and
                  standard of work L&T Electricals delivers.
                </p>

                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80">
                    <CheckCircle2 className="size-4 text-[#ffd33d]" />
                    Completed projects
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80">
                    <CheckCircle2 className="size-4 text-[#ffd33d]" />
                    Before &amp; after photos
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80">
                    <CheckCircle2 className="size-4 text-[#ffd33d]" />
                    Customer reviews
                  </span>
                </div>

                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-[#1877F2] px-8 py-4 text-lg font-semibold text-white shadow-[0_20px_40px_-15px_rgba(24,119,242,0.5)] transition-all hover:bg-[#1877F2]/90 hover:scale-105"
                >
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Visit L&T Electricals on Facebook
                  <ExternalLink className="size-5" />
                </a>
              </div>

              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl bg-[#1877F2]/20 blur-2xl" />
                  <div className="relative grid grid-cols-2 gap-3">
                    <div className="space-y-3">
                      <div className="aspect-square overflow-hidden rounded-2xl border border-white/10">
                        <Image
                          src="/images/kitchen.png"
                          alt="Domestic electrical work"
                          width={200}
                          height={200}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                        <Image
                          src="/images/fusebox.png"
                          alt="Fusebox installation"
                          width={200}
                          height={150}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="space-y-3 pt-6">
                      <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                        <Image
                          src="/images/garage.png"
                          alt="Garage electrical work"
                          width={200}
                          height={150}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="aspect-square overflow-hidden rounded-2xl border border-white/10">
                        <Image
                          src="/images/gardenlights.png"
                          alt="Garden lighting"
                          width={200}
                          height={200}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 rounded-2xl border border-[#ffd33d]/30 bg-[#ffd33d] px-5 py-3 shadow-lg">
                    <p className="font-heading text-sm font-bold text-[#0c1a4b]">
                      100+ photos on Facebook
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="contact-panel overflow-hidden rounded-[2rem] border-white/12 bg-white/6 text-white backdrop-blur-sm">
            <CardHeader className="gap-4">
              <p className="section-label text-[var(--brand-yellow)]">
                Contact Liam
              </p>
              <CardTitle className="text-4xl text-white">
                Tell Liam what needs doing and send the job properly.
              </CardTitle>
              <CardDescription className="max-w-lg text-base leading-8 text-white/78">
                Expect <span className="text-[#ffd33d] font-semibold">honest</span> pricing,{" "}
                <span className="text-[#ffd33d] font-semibold">reliable</span> timekeeping, and{" "}
                <span className="text-[#ffd33d] font-semibold">efficient</span> work. Whether it&apos;s a
                rewire, charger, landlord report, or fault finding - send the details
                once and give Liam something useful to work from.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <a
                href="tel:07485035381"
                className="flex items-center justify-between rounded-[1.4rem] border border-white/12 bg-white/6 px-5 py-4 hover:bg-white/10"
              >
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-white/58 uppercase">
                    Call Liam
                  </p>
                  <p className="mt-2 font-heading text-xl sm:text-2xl leading-none font-semibold">
                    07485 035381
                  </p>
                </div>
                <Phone className="size-5 text-[var(--brand-yellow)]" />
              </a>
              <a
                href="mailto:l.telectricals2021@gmail.com"
                className="flex items-center justify-between rounded-[1.4rem] border border-white/12 bg-white/6 px-5 py-4 hover:bg-white/10"
              >
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-white/58 uppercase">
                    Email Liam
                  </p>
                  <p className="mt-2 font-heading text-sm sm:text-base leading-none font-semibold break-all">
                    l.telectricals2021@gmail.com
                  </p>
                </div>
                <Mail className="size-5 shrink-0 text-[var(--brand-yellow)]" />
              </a>

              <div className="grid gap-3">
                {[
                  "Explain the problem or the install you want done",
                  "Upload photos or a short video if the job is easier to show",
                  "Mention whether it is domestic, commercial, industrial or EICR related",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-[1.3rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-7 text-white/76"
                  >
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-[var(--brand-yellow)]" />
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-white/12 bg-white/8 backdrop-blur-sm">
            <CardHeader className="gap-3">
              <CardTitle className="text-2xl text-white">
                Project enquiry form
              </CardTitle>
              <CardDescription className="text-sm leading-7 text-white/70">
                Send Liam the details, the photos, the video clips and the
                contact information he needs to reply properly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
