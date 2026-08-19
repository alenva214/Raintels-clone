import {
  ArrowRight,
  Check,
  Rocket,
} from "lucide-react";

import CTAAndFooter from "./CTAAndFooter";


/* ============================================================
   ENGAGEMENT MODELS
============================================================ */

const engagementModels = [
  {
    name: "Launchpad",
    label: "Focused scope",

    description:
      "For startups and single, well-defined initiatives that need to reach the market quickly and prove value.",

    bestFor:
      "Startups, MVPs, and focused first builds",

    features: [
      "Discovery and scoping workshop",
      "Lean, focused delivery team",
      "MVP or single-product build",
      "Launch support and handover",
    ],

    featured: false,
    delay: 0,
  },

  {
    name: "Momentum",
    label: "Growth partnership",

    description:
      "For growing organisations building out a platform or several connected products with a dedicated, ongoing team.",

    bestFor:
      "Scaling products and multi-phase programmes",

    features: [
      "Dedicated cross-functional squad",
      "Multi-phase roadmap delivery",
      "Cloud & DevOps foundations",
      "Quality engineering built in",
      "Fractional CTO guidance",
    ],

    featured: true,
    delay: 90,
  },

  {
    name: "Enterprise",
    label: "Strategic partnership",

    description:
      "For large-scale transformation where Raintels operates as a long-term strategic technology partner across the estate.",

    bestFor:
      "Enterprise transformation and long-term partnerships",

    features: [
      "Multiple coordinated delivery teams",
      "Enterprise architecture & governance",
      "CRM / ERP integration at scale",
      "Security & performance assurance",
      "Executive-level technology strategy",
    ],

    featured: false,
    delay: 180,
  },
];


/* ============================================================
   ENGAGEMENT CARD
============================================================ */

function EngagementCard({
  name,
  label,
  description,
  bestFor,
  features,
  featured,
  delay,
}) {
  return (
    <div
      data-reveal
      data-reveal-delay={delay}
      className="h-full"
    >
      <div
        className={
          featured
            ? `
              relative
              flex
              h-full
              flex-col
              overflow-hidden
              rounded-3xl
              border
              border-transparent
              bg-[#0c0d10]
              p-8
              text-white
              shadow-[0_30px_80px_-40px_rgba(16,18,24,0.6)]
              ring-1
              ring-rain-500/40
              lg:-translate-y-2
            `
            : `
              relative
              flex
              h-full
              flex-col
              overflow-hidden
              rounded-3xl
              border
              border-ink-100
              bg-white
              p-8
              transition-all
              duration-300
              hover:border-ink-200
              hover:shadow-[0_20px_50px_-30px_rgba(16,18,24,0.35)]
            `
        }
      >

        {/* Red glow on featured card */}

        {featured && (
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-10
              -top-10
              h-40
              w-40
              rounded-full
              bg-rain-500/25
              blur-3xl
            "
          />
        )}


        {/* ====================================================
            CARD HEADER
        ===================================================== */}

        <div className="relative flex items-center justify-between">

          <span
            className={
              featured
                ? "text-sm font-semibold uppercase tracking-[0.14em] text-[#ef5a52]"
                : "text-sm font-semibold uppercase tracking-[0.14em] text-rain-600"
            }
          >
            {label}
          </span>


          {featured && (
            <span
              className="
                rounded-full
                bg-rain-500
                px-3
                py-1
                text-xs
                font-semibold
                text-white
              "
            >
              Most popular
            </span>
          )}

        </div>


        {/* ====================================================
            TITLE
        ===================================================== */}

        <h2
          className={
            featured
              ? `
                relative
                mt-4
                font-display
                text-3xl
                font-semibold
                text-white
              `
              : `
                relative
                mt-4
                font-display
                text-3xl
                font-semibold
                text-ink-900
              `
          }
        >
          {name}
        </h2>


        {/* ====================================================
            DESCRIPTION
        ===================================================== */}

        <p
          className={
            featured
              ? `
                mt-3
                text-[0.98rem]
                leading-relaxed
                text-[#a9adb4]
              `
              : `
                mt-3
                text-[0.98rem]
                leading-relaxed
                text-ink-500
              `
          }
        >
          {description}
        </p>


        {/* ====================================================
            BEST FOR
        ===================================================== */}

        <div
          className={
            featured
              ? `
                mt-6
                rounded-xl
                bg-white/[0.06]
                px-4
                py-3.5
              `
              : `
                mt-6
                rounded-xl
                bg-[#f7f7f8]
                px-4
                py-3.5
              `
          }
        >

          <span
            className="
              block
              text-[0.7rem]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-ink-400
            "
          >
            Best for
          </span>


          <span
            className={
              featured
                ? "mt-1 block text-sm font-medium text-[#e7e8ea]"
                : "mt-1 block text-sm font-medium text-ink-700"
            }
          >
            {bestFor}
          </span>

        </div>


        {/* ====================================================
            FEATURES
        ===================================================== */}

        <ul className="relative mt-6 flex-1 space-y-3">

          {features.map((feature) => (

            <li
              key={feature}
              className="flex items-start gap-3"
            >

              <span
                className={
                  featured
                    ? `
                      mt-0.5
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-rain-500
                      text-white
                    `
                    : `
                      mt-0.5
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-rain-50
                      text-rain-600
                    `
                }
              >
                <Check className="h-3 w-3" />
              </span>


              <span
                className={
                  featured
                    ? "text-[0.95rem] text-[#c6c9ce]"
                    : "text-[0.95rem] text-ink-700"
                }
              >
                {feature}
              </span>

            </li>

          ))}

        </ul>


        {/* ====================================================
            BUTTON
        ===================================================== */}

        <a
          href="/contact"
          className={
            featured
              ? `
                group/btn
                mt-8
                inline-flex
                h-11
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-rain-500
                px-5
                text-[0.95rem]
                font-medium
                text-white
                shadow-[0_6px_20px_-6px_rgba(228,35,27,0.6)]
                transition-all
                duration-200
                ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:-translate-y-0.5
                hover:bg-rain-600
                hover:shadow-[0_10px_28px_-6px_rgba(228,35,27,0.7)]
              `
              : `
                group/btn
                mt-8
                inline-flex
                h-11
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-ink-200
                px-5
                text-[0.95rem]
                font-medium
                text-ink-800
                transition-all
                duration-200
                ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:border-ink-900
                hover:bg-ink-50
              `
          }
        >
          Start with {name}

          <ArrowRight
            className="
              h-4
              w-4
              transition-transform
              duration-200
              group-hover/btn:translate-x-1
            "
          />

        </a>

      </div>
    </div>
  );
}


/* ============================================================
   HERO
============================================================ */

function EngagementHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-b
        border-ink-100
        bg-white
        pb-16
        pt-32
        md:pb-20
        md:pt-40
      "
    >

      {/* Background effects */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(50%_60%_at_50%_0%,rgba(46,107,230,0.06),transparent_65%)]
          "
        />

        <div
          className="
            absolute
            -left-24
            -top-10
            h-80
            w-80
            rounded-full
            bg-rain-500/[0.06]
            blur-3xl
          "
        />

      </div>


      <div className="container-x relative">

        {/* Breadcrumb */}

        <nav
          className="
            mb-6
            flex
            items-center
            gap-1.5
            text-sm
            text-ink-400
          "
          aria-label="Breadcrumb"
        >

          <a
            href="/"
            className="transition-colors hover:text-ink-700"
          >
            Home
          </a>

          <span>›</span>

          <span className="text-ink-600">
            Engagement
          </span>

        </nav>


        <div className="max-w-3xl">

          {/* Eyebrow */}

          <div
            data-reveal
            data-reveal-delay="0"
          >
            <span
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                uppercase
                tracking-[0.14em]
                text-rain-600
              "
            >

              <span
                className="
                  inline-block
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-current
                "
              />

              Engagement models

            </span>
          </div>


          {/* Heading */}

          <div
            data-reveal
            data-reveal-delay="80"
          >
            <h1
              className="
                mt-5
                font-display
                text-4xl
                font-semibold
                leading-[1.08]
                tracking-tight
                text-ink-900
                sm:text-5xl
                md:text-[3.4rem]
              "
            >
              Ways to work{" "}
              <span className="text-gradient-rain">
                together.
              </span>
            </h1>
          </div>


          {/* Description */}

          <div
            data-reveal
            data-reveal-delay="160"
          >
            <p
              className="
                mt-6
                text-lg
                leading-relaxed
                text-ink-500
              "
            >
              Every organisation is at a different point.
              Choose the partnership depth that matches where
              you are — and scale up as you grow.
            </p>
          </div>


          {/* Button */}

          <div
            data-reveal
            data-reveal-delay="240"
          >
            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href="/contact"
                className="
                  group/btn
                  inline-flex
                  h-11
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-rain-500
                  px-5
                  text-[0.95rem]
                  font-medium
                  text-white
                  shadow-[0_6px_20px_-6px_rgba(228,35,27,0.6)]
                  transition-all
                  duration-200
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  hover:-translate-y-0.5
                  hover:bg-rain-600
                  hover:shadow-[0_10px_28px_-6px_rgba(228,35,27,0.7)]
                "
              >
                Find your fit

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    group-hover/btn:translate-x-1
                  "
                />
              </a>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}


/* ============================================================
   ENGAGEMENT MODELS SECTION
============================================================ */

function EngagementModels() {
  return (
    <section
      className="
        bg-[#f7f7f8]
        py-20
        text-ink-800
        md:py-28
      "
    >

      <div className="container-x">

        <div
          className="
            grid
            items-stretch
            gap-6
            lg:grid-cols-3
          "
        >

          {engagementModels.map((model) => (

            <EngagementCard
              key={model.name}
              {...model}
            />

          ))}

        </div>


        <p
          className="
            mt-8
            text-center
            text-sm
            text-ink-400
          "
        >
          Every model includes discovery, senior engineering,
          and honest guidance. Pricing is scoped to your goals
          — no rigid tiers.
        </p>

      </div>

    </section>
  );
}


/* ============================================================
   APPCUBATE SECTION
============================================================ */

function AppcubateSection() {
  return (
    <section
      className="
        bg-white
        py-20
        text-ink-800
        md:py-28
      "
    >

      <div className="container-x">

        <div
          data-reveal
          data-reveal-delay="0"
          className="
            overflow-hidden
            rounded-3xl
            border
            border-ink-100
            bg-[#0c0d10]
            text-white
          "
        >

          <div
            className="
              grid
              gap-10
              p-8
              md:grid-cols-2
              md:items-center
              md:p-14
            "
          >

            {/* LEFT */}

            <div>

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white/10
                  px-3
                  py-1
                  text-sm
                  font-medium
                  text-[#ef5a52]
                "
              >

                <Rocket className="h-4 w-4" />

                Appcubate

              </span>


              <h2
                className="
                  mt-5
                  font-display
                  text-3xl
                  font-semibold
                  text-white
                  sm:text-4xl
                "
              >
                An MVP programme built for startups.
              </h2>


              <p
                className="
                  mt-4
                  text-lg
                  leading-relaxed
                  text-[#a9adb4]
                "
              >
                Appcubate is our accelerated path from idea to a
                market-ready MVP — the strategy, engineering and
                launch support a founder needs, without a full
                in-house team.
              </p>


              <a
                href="/contact"
                className="
                  group/btn
                  mt-8
                  inline-flex
                  h-11
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-rain-500
                  px-5
                  text-[0.95rem]
                  font-medium
                  text-white
                  shadow-[0_6px_20px_-6px_rgba(228,35,27,0.6)]
                  transition-all
                  duration-200
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  hover:-translate-y-0.5
                  hover:bg-rain-600
                  hover:shadow-[0_10px_28px_-6px_rgba(228,35,27,0.7)]
                "
              >
                Launch with Appcubate

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    group-hover/btn:translate-x-1
                  "
                />

              </a>

            </div>


            {/* RIGHT */}

            <div
              className="
                grid
                gap-4
                sm:grid-cols-2
              "
            >

              {[
                "Rapid discovery & scoping",
                "Lean, senior build team",
                "Market-ready MVP",
                "Guidance to your next round",
              ].map((item) => (

                <div
                  key={item}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-5
                    text-[0.95rem]
                    font-medium
                    text-[#e7e8ea]
                  "
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}


/* ============================================================
   ENGAGEMENT PAGE
============================================================ */

export default function Engagement() {
  return (
    <>
      {/* HERO */}

      <EngagementHero />


      {/* ENGAGEMENT CARDS */}

      <EngagementModels />


      {/* DARK APPCUBATE */}

      <AppcubateSection />


      {/* ======================================================
          ORIGINAL CTA + ORIGINAL FOOTER

          CTAAndFooter already supplies:
          - dark #0c0d10 background
          - red glow
          - blue glow
          - original buttons
          - complete footer
          - footer navigation
          - contact information
          - social links
      ====================================================== */}

      <CTAAndFooter
        ctaEyebrow="Let's build"
        ctaTitle="Ready to build a frictionless enterprise?"
        ctaDescription="Tell us where you're trying to get to. We'll bring the strategy, engineering and honesty to help you get there."
      />
    </>
  );
}