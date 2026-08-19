import {
  Target,
  HandHeart,
  Gauge,
  Sparkles,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

import CTAAndFooter from "./CTAAndFooter";

function Company() {
  const principles = [
    {
      title: "Outcomes, not hours",
      description:
        "We measure ourselves by the results we create for you, not the time we bill.",
      icon: Target,
    },
    {
      title: "Ownership",
      description:
        "We operate as your trusted CTO — accountable for the whole, not just our slice.",
      icon: HandHeart,
    },
    {
      title: "Engineering rigour",
      description:
        "Quality, security and performance are designed in from the first commit.",
      icon: Gauge,
    },
    {
      title: "Applied innovation",
      description:
        "We adopt new technology where it earns its place, never for its own sake.",
      icon: Sparkles,
    },
  ];

  const clients = [
    {
      name: "TEN",
      description: "Enterprise platform delivery",
    },
    {
      name: "TMX Transform",
      description: "Digital transformation partner",
    },
    {
      name: "KSHEC",
      description: "Kerala State Higher Education Council",
    },
    {
      name: "UNDP",
      description: "United Nations Development Programme",
    },
    {
      name: "Kerala Zoo & Museum",
      description: "Public digital experience",
    },
    {
      name: "KSSTM",
      description: "Science & technology museum",
    },
  ];

  return (
    <>
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden border-b border-ink-100 bg-white pt-32 pb-16 md:pt-40 md:pb-20">
        {/* Background decoration */}
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
                className="hover:text-ink-700"
              >
                Home
              </a>
            </span>

            <span className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" />

              <span className="text-ink-600">
                Company
              </span>
            </span>
          </nav>

          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div
              data-reveal="true"
              data-reveal-delay="0"
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rain-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />

                Company
              </span>
            </div>

            {/* Heading */}
            <div
              data-reveal="true"
              data-reveal-delay="80"
            >
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl md:text-[3.4rem]">
                A reliable strategic partner,{" "}
                <span className="text-gradient-rain">
                  since 2017.
                </span>
              </h1>
            </div>

            {/* Description */}
            <div
              data-reveal="true"
              data-reveal-delay="160"
            >
              <p className="mt-6 text-lg leading-relaxed text-ink-500">
                Founded in 2017 in Thiruvananthapuram, India,
                Raintels Technologies exists to deliver
                high-quality software that steers enterprises
                toward the future — with the commitment of a
                partner, not the detachment of a vendor.
              </p>
            </div>

            {/* Buttons */}
            <div
              data-reveal="true"
              data-reveal-delay="240"
            >
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="group/btn inline-flex h-11 items-center justify-center gap-2 rounded-full bg-rain-500 px-5 text-[0.95rem] font-medium text-white shadow-[0_6px_20px_-6px_rgba(228,35,27,0.6)] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-rain-600 hover:shadow-[0_10px_28px_-6px_rgba(228,35,27,0.7)] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  Work with us

                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </a>

                <a
                  href="/engagement"
                  className="group/btn inline-flex h-11 items-center justify-center gap-2 rounded-full border border-ink-200 px-5 text-[0.95rem] font-medium text-ink-800 transition-all duration-200 hover:border-ink-900 hover:bg-ink-50 focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  How we engage
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY WE EXIST
      ========================================================== */}
      <section className="bg-white py-20 text-ink-800 md:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Left */}
            <div className="max-w-2xl">
              <div
                data-reveal="true"
                data-reveal-delay="0"
              >
                <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rain-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />

                  Why we exist
                </span>
              </div>

              <div
                data-reveal="true"
                data-reveal-delay="80"
              >
                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-[2.7rem] md:leading-[1.1]">
                  Redefining operational excellence.
                </h2>
              </div>

              <div
                data-reveal="true"
                data-reveal-delay="160"
              >
                <p className="mt-5 text-lg leading-relaxed text-ink-500">
                  Organisations don't just need software built —
                  they need it to fit, to integrate, and to keep
                  working. We harmonise CRM and ERP, connect the
                  systems that run the business, and turn scattered
                  operations into efficient, data-driven enterprises.
                </p>
              </div>
            </div>

            {/* Right quote card */}
            <div
              data-reveal="true"
              data-reveal-delay="120"
            >
              <div className="rounded-3xl border border-ink-100 bg-surface p-8 md:p-10">
                <p className="font-display text-2xl font-semibold leading-snug text-ink-900">
                  “Build frictionless enterprises.”
                </p>

                <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-500">
                  It’s more than a tagline — it’s the test we apply
                  to every decision. If it removes friction for your
                  teams and customers, we’re on the right track.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT DRIVES US
      ========================================================== */}
      <section className="bg-surface py-20 text-ink-800 md:py-28">
        <div className="container-x">
          {/* Section heading */}
          <div className="mx-auto max-w-2xl text-center">
            <div
              data-reveal="true"
              data-reveal-delay="0"
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rain-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />

                What drives us
              </span>
            </div>

            <div
              data-reveal="true"
              data-reveal-delay="80"
            >
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-[2.7rem] md:leading-[1.1]">
                Four principles behind every engagement.
              </h2>
            </div>
          </div>

          {/* Principles */}
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  data-reveal="true"
                  data-reveal-delay={index * 80}
                >
                  <div className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 text-white">
                      <Icon className="h-5.5 w-5.5" />
                    </span>

                    <h3 className="mt-5 text-lg font-semibold text-ink-900">
                      {principle.title}
                    </h3>

                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                      {principle.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE SERVE
      ========================================================== */}
      <section
        id="clients"
        className="bg-white py-20 text-ink-800 md:py-28"
      >
        <div className="container-x">
          {/* Heading */}
          <div className="max-w-2xl">
            <div
              data-reveal="true"
              data-reveal-delay="0"
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rain-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />

                Who we serve
              </span>
            </div>

            <div
              data-reveal="true"
              data-reveal-delay="80"
            >
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-[2.7rem] md:leading-[1.1]">
                Trusted by institutions and enterprises.
              </h2>
            </div>

            <div
              data-reveal="true"
              data-reveal-delay="160"
            >
              <p className="mt-5 text-lg leading-relaxed text-ink-500">
                From UN agencies to public councils and private
                enterprises — organisations that can't afford
                software that fails.
              </p>
            </div>
          </div>

          {/* Clients */}
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((client, index) => (
              <div
                key={client.name}
                data-reveal="true"
                data-reveal-delay={(index % 3) * 60}
              >
                <div className="flex h-full flex-col justify-between bg-white p-8">
                  <span className="font-display text-2xl font-semibold text-ink-900">
                    {client.name}
                  </span>

                  <span className="mt-4 text-sm text-ink-500">
                    {client.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPANY CTA
          
          NOTE:
          This section is intentionally NOT included here because
          your existing CTAAndFooter component should handle the
          common CTA + footer structure.
      ========================================================== */}

      <CTAAndFooter />
    </>
  );
}

export default Company;