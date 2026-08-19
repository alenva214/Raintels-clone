import React, { useState } from "react";
import {
  CodeXml,
  Smartphone,
  CloudCog,
  Sparkles,
  Compass,
  ShieldCheck,

  BrainCircuit,
  FileText,
  Briefcase,
  Handshake,
  Stethoscope,
  HeartPulse,
  ChartLine,
  ClipboardCheck,

  Check,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

import CTAAndFooter from "./CTAAndFooter";

/* ==========================================================================
   SERVICE DATA
   ========================================================================== */

const services = {
  "web-enterprise-development": {
    title: "Web & Enterprise Development",

    description:
      "We build the software backbone enterprises run on — customer portals, internal tooling, and data-heavy platforms that stay fast and dependable as they grow. From greenfield builds to modernising legacy systems, our teams pair proven frameworks with disciplined engineering practices so what we ship keeps performing years later.",

    icon: CodeXml,

    tagline:
      "Systems of record that scale with the business",

    overview:
      "Robust web platforms and line-of-business applications engineered for reliability, security, and long-term maintainability.",

    benefits: [
      "Faster, more reliable core business systems",
      "Clean integration between CRM, ERP and bespoke tooling",
      "Codebases your team can extend with confidence",
    ],

    disciplines: [
      {
        name: ".NET Enterprise",
        description:
          "Secure, high-throughput services and APIs for regulated and mission-critical workloads.",
        tags: ["C#", ".NET", "Azure SQL", "REST / gRPC"],
      },
      {
        name: "Laravel & PHP",
        description:
          "Fast-moving product web apps and portals with clean domain models and pragmatic delivery.",
        tags: ["Laravel", "PHP", "MySQL", "Livewire"],
      },
      {
        name: "Progressive Web Apps",
        description:
          "Installable, offline-capable web experiences with app-grade performance across devices.",
        tags: ["React", "Next.js", "PWA", "TypeScript"],
      },
      {
        name: "CRM & ERP Integration",
        description:
          "Harmonising Customer Relationship Management and Enterprise Resource Planning into one connected flow of data.",
        tags: ["Integration", "Data pipelines", "Automation"],
      },
    ],

    products: [
      {
        name: "Konnect-E",
        description:
          "Turn organisational knowledge into a growth engine",
        href: "/products/konnect-e",
        icon: BrainCircuit,
      },
      {
        name: "Digital Office Enabler",
        description:
          "A paperless, connected back office",
        href: "/products/digital-office-enabler",
        icon: FileText,
      },
      {
        name: "Career Portal",
        description:
          "Enterprise recruitment, as a service",
        href: "/products/career-portal",
        icon: Briefcase,
      },
    ],

    ctaTitle:
      "Let's put web & enterprise development to work.",
  },


  "mobile-development": {
    title: "Mobile Development",

    description:
      "Mobile is where most engagement now happens. We design and build apps that feel native, launch reliably, and are instrumented to learn from real usage. Whether you need a flagship native experience or a single cross-platform codebase to move faster, we match the approach to your product and audience.",

    icon: Smartphone,

    tagline:
      "Products that live in your customers' pockets",

    overview:
      "Native and cross-platform mobile apps designed for adoption — smooth, accessible, and built to ship on both stores.",

    benefits: [
      "Higher engagement and retention on mobile",
      "One team covering iOS and Android",
      "Store-ready builds with analytics baked in",
    ],

    disciplines: [
      {
        name: "Native iOS",
        description:
          "Swift apps that respect Apple's Human Interface Guidelines and ship through the App Store cleanly.",
        tags: ["Swift", "SwiftUI", "App Store"],
      },
      {
        name: "Native Android",
        description:
          "Kotlin apps built to Material standards for the full range of Android devices.",
        tags: ["Kotlin", "Jetpack", "Play Store"],
      },
      {
        name: "Ionic Hybrid",
        description:
          "One web-based codebase delivered to both platforms when speed to market matters most.",
        tags: ["Ionic", "Capacitor", "Angular / React"],
      },
      {
        name: "Xamarin Cross-Platform",
        description:
          "Shared C# business logic across iOS and Android for teams standardised on .NET.",
        tags: ["Xamarin", ".NET MAUI", "C#"],
      },
    ],

    products: [
      {
        name: "OnDemand Service",
        description:
          "A multi-service discovery marketplace",
        href: "/products/ondemand-service",
        icon: Handshake,
      },
      {
        name: "CareProto",
        description:
          "Digital transformation for hospitals",
        href: "/products/careproto",
        icon: Stethoscope,
      },
    ],

    ctaTitle:
      "Let's put mobile development to work.",
  },


  "cloud-devops": {
    title: "Cloud & DevOps",

    description:
      "We help you land and run workloads on the major clouds with the right balance of cost, resilience, and speed. From first migration to fully automated delivery, we set up the pipelines, observability, and guardrails that let your engineers ship often and sleep well.",

    icon: CloudCog,

    tagline:
      "Infrastructure that stays out of your way",

    overview:
      "Cloud architecture, migration, and delivery pipelines that make deployments boring — in the best possible way.",

    benefits: [
      "Predictable, automated deployments",
      "Lower cloud spend through right-sizing",
      "Resilient, observable production systems",
    ],

    disciplines: [
      {
        name: "Amazon Web Services",
        description:
          "Well-Architected builds and migrations across compute, storage, and serverless.",
        tags: ["AWS", "Lambda", "ECS", "RDS"],
      },
      {
        name: "Microsoft Azure",
        description:
          "Enterprise-grade Azure estates with tight identity and governance integration.",
        tags: ["Azure", "AKS", "Entra ID"],
      },
      {
        name: "Google Cloud",
        description:
          "Data- and AI-forward workloads on GCP with managed, scalable services.",
        tags: ["GCP", "BigQuery", "Cloud Run"],
      },
      {
        name: "Managed DevOps",
        description:
          "CI/CD pipelines, infrastructure-as-code, and monitoring set up and looked after.",
        tags: ["CI/CD", "Terraform", "Observability"],
      },
    ],

    /*
     * This service has no products section in the source page.
     * Keeping this as an empty array lets the UI conditionally
     * hide the Proof of Capability section.
     */
    products: [],

    ctaTitle:
      "Let's put cloud & devops to work.",
  },


  "emerging-technology": {
    title: "Emerging Technology",

    description:
      "We help you separate signal from noise in emerging tech and put the promising parts to work. That means augmented reality that aids real tasks, chatbots that actually resolve queries, and analytics that change what people decide — each grounded in a clear business case.",

    icon: Sparkles,

    tagline:
      "New capabilities, applied to real problems",

    overview:
      "AR, conversational AI, and analytics used with intent — to open genuinely new experiences and decisions, not chase hype.",

    benefits: [
      "Differentiated, memorable product experiences",
      "Automated first-line customer interactions",
      "Decisions driven by data, not gut feel",
    ],

    disciplines: [
      {
        name: "Augmented Reality",
        description:
          "AR experiences for training, visualisation, and field work that blend the digital into the physical.",
        tags: ["AR", "3D", "Mobile"],
      },
      {
        name: "Conversational AI & Chatbots",
        description:
          "Assistants that understand intent, resolve queries, and hand off gracefully when needed.",
        tags: ["NLP", "LLMs", "Chat"],
      },
      {
        name: "Analytics & BI",
        description:
          "Dashboards and models that turn operational data into a genuine decision advantage.",
        tags: ["BI", "Dashboards", "Forecasting"],
      },
      {
        name: "Intelligent Automation",
        description:
          "Removing repetitive work from your teams with reliable, auditable automation.",
        tags: ["RPA", "Workflow", "Automation"],
      },
    ],

    products: [
      {
        name: "Cardio Touch",
        description:
          "Cath-lab reporting, designed by cardiologists",
        href: "/products/cardio-touch",
        icon: HeartPulse,
      },
      {
        name: "Fincast",
        description:
          "Forecasting that empowers financial decisions",
        href: "/products/fincast",
        icon: ChartLine,
      },
      {
        name: "Dewpas",
        description:
          "Dynamic audit and performance management",
        href: "/products/dewpas",
        icon: ClipboardCheck,
      },
    ],

    ctaTitle:
      "Let's put emerging technology to work.",
  },


  "technology-consulting": {
    title: "Technology Consulting",

    description:
      "Sometimes the hardest question isn't how to build — it's what to build, and in what order. We bring fractional CTO-level guidance, honest architecture reviews, and transformation roadmaps that align technology decisions with where the business is actually trying to go.",

    icon: Compass,

    tagline:
      "Your trusted CTO, on demand",

    overview:
      "Senior technology leadership and strategy for teams that need direction as much as delivery.",

    benefits: [
      "A clear, prioritised technology roadmap",
      "Architecture that won't box you in later",
      "Confident build-vs-buy and platform decisions",
    ],

    disciplines: [
      {
        name: "Fractional CTO",
        description:
          "Seasoned technology leadership embedded with your team without a full-time hire.",
        tags: ["Leadership", "Strategy", "Hiring"],
      },
      {
        name: "Digital Transformation",
        description:
          "Reworking operations and systems around product thinking and measurable outcomes.",
        tags: ["Transformation", "Process", "Change"],
      },
      {
        name: "Product Strategy",
        description:
          "Turning a vision into a sequenced, testable plan with clear success metrics.",
        tags: ["Discovery", "Roadmap", "MVP"],
      },
      {
        name: "Architecture Review",
        description:
          "An objective read on your current systems, risks, and the path to where you need to be.",
        tags: ["Audit", "Scalability", "Security"],
      },
    ],

    /*
     * No products section on the source page.
     */
    products: [],

    ctaTitle:
      "Let's put technology consulting to work.",
  },


  "quality-engineering": {
    title: "Quality Engineering",

    description:
      "We treat quality as an engineering discipline. Automated coverage where it pays off, sharp exploratory testing where judgement matters, and performance and security checks before your users find the problems — all wired into the pipeline so releases stay calm.",

    icon: ShieldCheck,

    tagline:
      "Ship with confidence, not crossed fingers",

    overview:
      "Testing woven through delivery so quality is designed in, not inspected at the end.",

    benefits: [
      "Fewer defects reaching production",
      "Faster, safer release cycles",
      "Performance and security verified before launch",
    ],

    disciplines: [
      {
        name: "Test Automation",
        description:
          "Durable automated suites across unit, API, and end-to-end layers, run on every change.",
        tags: ["Playwright", "Cypress", "CI"],
      },
      {
        name: "Manual & Exploratory QA",
        description:
          "Human testing that catches what scripts miss and speaks for the real user.",
        tags: ["Exploratory", "UAT", "Accessibility"],
      },
      {
        name: "Performance Testing",
        description:
          "Load and stress testing that finds the ceiling before your customers do.",
        tags: ["Load", "Stress", "Profiling"],
      },
      {
        name: "Security Testing",
        description:
          "Proactive vulnerability assessment aligned to recognised security standards.",
        tags: ["OWASP", "Pen-test", "Audit"],
      },
    ],

    /*
     * No products section on the source page.
     */
    products: [],

    ctaTitle:
      "Let's put quality engineering to work.",
  },
};


/* ==========================================================================
   COMPONENT
   ========================================================================== */

export default function ServicesPage({ serviceSlug }) {
  const service = services[serviceSlug];

  const [activeDiscipline, setActiveDiscipline] =
    useState(0);

  if (!service) {
    return (
      <section className="container-x py-32">
        <h1 className="font-display text-4xl font-semibold text-ink-900">
          Service not found
        </h1>

        <p className="mt-4 text-ink-500">
          The service you're looking for doesn't exist.
        </p>

        <a
          href="/services"
          className="mt-8 inline-flex rounded-full bg-rain-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-rain-600"
        >
          View services
        </a>
      </section>
    );
  }

  const ServiceIcon = service.icon;

  const active =
    service.disciplines[activeDiscipline];


  return (
    <main>

      {/* ==================================================================
          HERO
      ================================================================== */}

      <section className="relative overflow-hidden border-b border-ink-100 bg-white pb-16 pt-32 md:pb-20 md:pt-40">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[35rem] w-[35rem] -translate-x-1/2 rounded-full bg-rain-500/[0.06] blur-[100px]" />
        </div>

        <div className="container-x relative">

          {/* Breadcrumb */}

          <div className="mb-8 flex items-center gap-2 text-sm text-ink-400">

            <a
              href="/"
              className="hover:text-ink-700"
            >
              Home
            </a>

            <ChevronRight className="h-4 w-4" />

            <a
              href="/services"
              className="hover:text-ink-700"
            >
              Services
            </a>

            <ChevronRight className="h-4 w-4" />

            <span className="text-ink-600">
              {service.title}
            </span>

          </div>


          <div className="max-w-3xl">

            <span
              data-reveal="true"
              data-reveal-delay="0"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rain-600"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Service
            </span>


            <h1
              data-reveal="true"
              data-reveal-delay="80"
              className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl md:text-[3.4rem]"
            >
              {service.title}
            </h1>


            <p
              data-reveal="true"
              data-reveal-delay="160"
              className="mt-6 text-lg leading-relaxed text-ink-500"
            >
              {service.description}
            </p>


            <div
              data-reveal="true"
              data-reveal-delay="240"
              className="mt-8"
            >
              <a
                href="/contact"
                className="group/btn inline-flex h-13 items-center justify-center gap-2 rounded-full bg-rain-500 px-7 text-base font-medium text-white shadow-[0_6px_20px_-6px_rgba(228,35,27,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-rain-600"
              >
                Discuss this service

                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </a>
            </div>

          </div>

        </div>
      </section>


      {/* ==================================================================
          OVERVIEW / WHAT YOU GET
      ================================================================== */}

      <section className="bg-white py-20 text-ink-800 md:py-28">

        <div className="container-x">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

            <div>

              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-900 text-white">
                <ServiceIcon className="h-6 w-6" />
              </span>

              <p className="mt-6 font-display text-2xl font-semibold text-ink-900">
                {service.tagline}
              </p>

              <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-500">
                {service.overview}
              </p>

            </div>


            <div className="rounded-3xl border border-ink-100 bg-surface p-8 md:p-10">

              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-rain-600">
                What you get
              </h2>

              <ul className="mt-6 space-y-4">

                {service.benefits.map(
                  (benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rain-500 text-white">
                        <Check className="h-3.5 w-3.5" />
                      </span>

                      <span className="text-[1.05rem] text-ink-700">
                        {benefit}
                      </span>
                    </li>
                  )
                )}

              </ul>

            </div>

          </div>

        </div>
      </section>


      {/* ==================================================================
          INSIDE THIS SERVICE
      ================================================================== */}

      <section className="bg-surface py-20 text-ink-800 md:py-28">

        <div className="container-x">

          <div className="max-w-2xl">

            <div
              data-reveal="true"
              data-reveal-delay="0"
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rain-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
                Inside this service
              </span>
            </div>


            <div
              data-reveal="true"
              data-reveal-delay="80"
            >
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-[2.7rem] md:leading-[1.1]">
                The disciplines we bring to it.
              </h2>
            </div>


            <div
              data-reveal="true"
              data-reveal-delay="160"
            >
              <p className="mt-5 text-lg leading-relaxed text-ink-500">
                Select a specialism to see how we approach it and the tools we reach for.
              </p>
            </div>

          </div>


          <div className="mt-14">

            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

              {/* ==========================================================
                  LEFT — DISCIPLINE LIST
              =========================================================== */}

              <div className="flex flex-col">

                {service.disciplines.map(
                  (discipline, index) => {

                    const isActive =
                      activeDiscipline === index;

                    return (
                      <button
                        key={discipline.name}
                        type="button"
                        onClick={() =>
                          setActiveDiscipline(index)
                        }
                        aria-pressed={isActive}
                        className="group relative border-t border-ink-100 py-5 text-left last:border-b"
                      >

                        {isActive && (
                          <span className="absolute -left-4 top-1/2 h-8 w-1 -translate-y-1/2 rounded-full bg-rain-500" />
                        )}

                        <div className="flex items-center justify-between gap-4">

                          <span
                            className={`font-display text-xl font-semibold transition-colors ${
                              isActive
                                ? "text-ink-900"
                                : "text-ink-400 group-hover:text-ink-700"
                            }`}
                          >
                            {discipline.name}
                          </span>

                          <span
                            className={`text-sm tabular-nums transition-colors ${
                              isActive
                                ? "text-rain-500"
                                : "text-ink-300"
                            }`}
                          >
                            0{index + 1}
                          </span>

                        </div>

                      </button>
                    );
                  }
                )}

              </div>


              {/* ==========================================================
                  RIGHT — ACTIVE DISCIPLINE
              =========================================================== */}

              <div className="relative min-h-[18rem] rounded-3xl border border-ink-100 bg-surface p-8 md:p-10">

                <div
                  key={activeDiscipline}
                  className="service-discipline-content"
                >

                  <span className="font-display text-6xl font-bold text-ink-100">
                    0{activeDiscipline + 1}
                  </span>

                  <h3 className="mt-4 font-display text-2xl font-semibold text-ink-900">
                    {active.name}
                  </h3>

                  <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-600">
                    {active.description}
                  </p>

                  <ul className="mt-8 flex flex-wrap gap-2">

                    {active.tags.map(
                      (tag) => (
                        <li
                          key={tag}
                          className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-3 py-1.5 text-sm font-medium text-ink-700"
                        >
                          <Check className="h-3.5 w-3.5 text-rain-500" />

                          {tag}
                        </li>
                      )
                    )}

                  </ul>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ==================================================================
          PROOF OF CAPABILITY

          IMPORTANT:
          Only services that actually have products will render this section.
          Cloud & DevOps, Technology Consulting and Quality Engineering have
          products: [] so this entire section is skipped for them.
      ================================================================== */}

      {service.products?.length > 0 && (
        <section className="bg-white py-20 text-ink-800 md:py-28">

          <div className="container-x">

            <div className="max-w-2xl">

              <div
                data-reveal="true"
                data-reveal-delay="0"
              >
                <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rain-600">

                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />

                  Proof of capability

                </span>
              </div>


              <div
                data-reveal="true"
                data-reveal-delay="80"
              >
                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-[2.7rem] md:leading-[1.1]">
                  Products powered by this work.
                </h2>
              </div>

            </div>


            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {service.products.map(
                (product, index) => {

                  const ProductIcon =
                    product.icon;

                  return (
                    <div
                      key={product.name}
                      data-reveal="true"
                      data-reveal-delay={
                        index * 80
                      }
                    >

                      <a
                        href={product.href}
                        className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(16,18,24,0.35)]"
                      >

                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-50 text-ink-900">
                          <ProductIcon className="h-5 w-5" />
                        </span>

                        <h3 className="mt-5 text-lg font-semibold text-ink-900">
                          {product.name}
                        </h3>

                        <p className="mt-2 flex-1 text-sm text-ink-500">
                          {product.description}
                        </p>

                        <span className="mt-5 flex items-center gap-1.5 text-sm font-medium text-ink-900">

                          View product

                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

                        </span>

                      </a>

                    </div>
                  );
                }
              )}

            </div>

          </div>
        </section>
      )}


      {/* ==================================================================
          ORIGINAL CTA + FOOTER
      ================================================================== */}

      <CTAAndFooter
        ctaEyebrow="Next step"
        ctaTitle={service.ctaTitle}
        ctaDescription="Tell us where you're trying to get to. We'll bring the strategy, engineering and honesty to help you get there."
      />

    </main>
  );
}