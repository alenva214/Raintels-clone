import {
  CodeXml,
  Smartphone,
  CloudCog,
  Sparkles,
  Compass,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Web & Enterprise Development",
    tagline: "Systems of record that scale with the business",
    description:
      "Robust web platforms and line-of-business applications engineered for reliability, security, and long-term maintainability.",
    href: "/services/web-enterprise-development",
    icon: CodeXml,
    delay: 0,
  },
  {
    title: "Mobile Development",
    tagline: "Products that live in your customers' pockets",
    description:
      "Native and cross-platform mobile apps designed for adoption — smooth, accessible, and built to ship on both stores.",
    href: "/services/mobile-development",
    icon: Smartphone,
    delay: 80,
  },
  {
    title: "Cloud & DevOps",
    tagline: "Infrastructure that stays out of your way",
    description:
      "Cloud architecture, migration, and delivery pipelines that make deployments boring — in the best possible way.",
    href: "/services/cloud-devops",
    icon: CloudCog,
    delay: 160,
  },
  {
    title: "Emerging Technology",
    tagline: "New capabilities, applied to real problems",
    description:
      "AR, conversational AI, and analytics used with intent — to open genuinely new experiences and decisions, not chase hype.",
    href: "/services/emerging-technology",
    icon: Sparkles,
    delay: 0,
  },
  {
    title: "Technology Consulting",
    tagline: "Your trusted CTO, on demand",
    description:
      "Senior technology leadership and strategy for teams that need direction as much as delivery.",
    href: "/services/technology-consulting",
    icon: Compass,
    delay: 80,
  },
  {
    title: "Quality Engineering",
    tagline: "Ship with confidence, not crossed fingers",
    description:
      "Testing woven through delivery so quality is designed in, not inspected at the end.",
    href: "/services/quality-engineering",
    icon: ShieldCheck,
    delay: 160,
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-white py-20 text-ink-800 md:py-28">
      <div className="container-x">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div
              data-reveal
              data-reveal-delay="0"
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rain-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
                What we do
              </span>
            </div>

            {/* Heading */}
            <div
              data-reveal
              data-reveal-delay="80"
            >
              <h2 className="mt-4 text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-[2.7rem]">
                Five capabilities,{" "}
                <span className="text-gradient-rain">
                  one standard
                </span>{" "}
                of engineering.
              </h2>
            </div>

            {/* Description */}
            <div
              data-reveal
              data-reveal-delay="160"
            >
              <p className="mt-5 text-lg leading-relaxed text-ink-500">
                From product engineering to quality assurance, our services
                connect into a single, accountable way of building software.
              </p>
            </div>
          </div>

          {/* All services button */}
          <div
            data-reveal
            data-reveal-delay="120"
          >
            <a
              href="/services"
              className="group/btn inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-ink-200 px-5 text-[0.95rem] font-medium text-ink-800 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-ink-900 hover:bg-ink-50 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              All services
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Service cards */}
        <div className="mt-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  data-reveal
                  data-reveal-delay={service.delay}
                >
                  <a
                    href={service.href}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink-200 hover:shadow-[0_24px_60px_-30px_rgba(16,18,24,0.35)]"
                  >
                    {/* Bottom red hover line */}
                    <span className="pointer-events-none absolute inset-x-0 -bottom-px h-1 origin-left scale-x-0 bg-rain-500 transition-transform duration-300 group-hover:scale-x-100" />

                    {/* Icon */}
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-50 text-ink-900 transition-colors duration-300 group-hover:bg-ink-900 group-hover:text-white">
                      <Icon className="h-[22px] w-[22px]" />
                    </span>

                    {/* Title */}
                    <h3 className="mt-6 text-xl font-semibold text-ink-900">
                      {service.title}
                    </h3>

                    {/* Red tagline */}
                    <p className="mt-1 text-sm font-medium text-rain-600">
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink-500">
                      {service.description}
                    </p>

                    {/* Explore */}
                    <span className="mt-6 flex items-center gap-1.5 text-sm font-medium text-ink-900">
                      Explore service
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}