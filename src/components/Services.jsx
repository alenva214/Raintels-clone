import {
  CodeXml,
  Smartphone,
  CloudCog,
  Sparkles,
  Compass,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

import CTAAndFooter from "./CTAAndFooter";

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

function ServicesHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-100 bg-white pt-32 pb-16 md:pt-40 md:pb-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(46,107,230,0.06),transparent_65%)]" />

        <div className="absolute -left-24 -top-10 h-80 w-80 rounded-full bg-rain-500/[0.06] blur-3xl" />
      </div>

      <div className="container-x">
        {/* Breadcrumb */}
        <nav
          className="mb-6 flex items-center gap-1.5 text-sm text-ink-400"
          aria-label="Breadcrumb"
        >
          <span className="flex items-center gap-1.5">
            <a
              href="/"
              className="transition-colors hover:text-ink-700"
            >
              Home
            </a>
          </span>

          <span className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink-600">Services</span>
          </span>
        </nav>

        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            data-reveal
            data-reveal-delay="0"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rain-600">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
              Services
            </span>
          </div>

          {/* Heading */}
          <div
            data-reveal
            data-reveal-delay="80"
          >
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl md:text-[3.4rem]">
              Product engineering with{" "}
              <span className="text-gradient-rain">
                product thinking.
              </span>
            </h1>
          </div>

          {/* Description */}
          <div
            data-reveal
            data-reveal-delay="160"
          >
            <p className="mt-6 text-lg leading-relaxed text-ink-500">
              Five connected capabilities that take an idea from strategy to a
              scalable, dependable product — and keep it evolving.
            </p>
          </div>

          {/* Buttons */}
          <div
            data-reveal
            data-reveal-delay="240"
          >
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="group/btn inline-flex h-11 items-center justify-center gap-2 rounded-full bg-rain-500 px-5 text-[0.95rem] font-medium text-white shadow-[0_6px_20px_-6px_rgba(228,35,27,0.6)] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-rain-600 hover:shadow-[0_10px_28px_-6px_rgba(228,35,27,0.7)] focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Talk to a strategist

                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </a>

              <a
                href="/engagement"
                className="group/btn inline-flex h-11 items-center justify-center gap-2 rounded-full border border-ink-200 px-5 text-[0.95rem] font-medium text-ink-800 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-ink-900 hover:bg-ink-50 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                How we engage
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCards() {
  return (
    <section className="bg-white py-20 text-ink-800 md:py-28">
      <div className="container-x">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                data-reveal
                data-reveal-delay={service.delay}
                className="h-full"
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

                  {/* Tagline */}
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
    </section>
  );
}

function ConnectedSection() {
  return (
    <section className="bg-surface py-20 text-ink-800 md:py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div
              data-reveal
              data-reveal-delay="0"
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rain-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
                Connected, not siloed
              </span>
            </div>

            {/* Heading */}
            <div
              data-reveal
              data-reveal-delay="80"
            >
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-[2.7rem] md:leading-[1.1]">
                Every service links back to one outcome: software that works.
              </h2>
            </div>

            {/* Description */}
            <div
              data-reveal
              data-reveal-delay="160"
            >
              <p className="mt-5 text-lg leading-relaxed text-ink-500">
                Strategy informs architecture. Architecture shapes
                engineering. Quality and cloud are designed in from day one —
                so the pieces fit instead of fighting each other.
              </p>
            </div>
          </div>

          {/* Right numbered card */}
          <div
            data-reveal
            data-reveal-delay="120"
          >
            <div className="rounded-3xl border border-ink-100 bg-white p-8">
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rain-50 text-sm font-semibold text-rain-600">
                    1
                  </span>

                  <span className="text-[1.05rem] text-ink-700">
                    A single team accountable end-to-end
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rain-50 text-sm font-semibold text-rain-600">
                    2
                  </span>

                  <span className="text-[1.05rem] text-ink-700">
                    CRM &amp; ERP harmonised into one data flow
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rain-50 text-sm font-semibold text-rain-600">
                    3
                  </span>

                  <span className="text-[1.05rem] text-ink-700">
                    Cloud, DevOps and QA baked into delivery
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rain-50 text-sm font-semibold text-rain-600">
                    4
                  </span>

                  <span className="text-[1.05rem] text-ink-700">
                    Fractional CTO guidance where you need it
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServiceCards />
      <ConnectedSection />
      <CTAAndFooter />
    </>
  );
}