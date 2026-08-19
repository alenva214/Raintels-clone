import { ArrowRight, ArrowUpRight } from "lucide-react";
import CTAAndFooter from "./CTAAndFooter";

const posts = [
  {
    category: "Enterprise",
    readTime: "6 min read",
    title: "CRM & ERP integration that actually sticks",
    description:
      "Most integrations break because they're treated as a project, not a system. Here's how we design data flows that survive contact with the real business.",
    date: "18 May 2026",
    href: "/blog/crm-erp-integration-that-actually-sticks",
    delay: 0,
  },
  {
    category: "Product",
    readTime: "5 min read",
    title: "Why internal tools deserve product thinking too",
    description:
      "The software your own teams use every day quietly decides how fast your business can move. Treating it like a product changes everything.",
    date: "2 April 2026",
    href: "/blog/product-thinking-for-internal-tools",
    delay: 80,
  },
  {
    category: "Engineering",
    readTime: "7 min read",
    title: "Shipping fast without shipping bugs",
    description:
      "Speed and quality aren't opposites. With quality engineering woven into delivery, they reinforce each other.",
    date: "27 February 2026",
    href: "/blog/shipping-with-quality-engineering",
    delay: 160,
  },
];

export default function Blog() {
  return (
    <>
      {/* =========================================================
          HERO / INSIGHTS
      ========================================================== */}

      <section className="relative overflow-hidden border-b border-ink-100 bg-white pb-16 pt-32 md:pb-20 md:pt-40">
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
            <a
              href="/"
              className="transition-colors hover:text-ink-700"
            >
              Home
            </a>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>

            <span className="text-ink-600">
              Insights
            </span>
          </nav>

          {/* Hero content */}
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div
              data-reveal
              data-reveal-delay="0"
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rain-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
                Insights
              </span>
            </div>

            {/* Heading */}
            <div
              data-reveal
              data-reveal-delay="80"
            >
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl md:text-[3.4rem]">
                Ideas from the{" "}
                <span className="text-gradient-rain">
                  engine room.
                </span>
              </h1>
            </div>

            {/* Description */}
            <div
              data-reveal
              data-reveal-delay="160"
            >
              <p className="mt-6 text-lg leading-relaxed text-ink-500">
                Practical thinking on enterprise software, integration and
                building products that last — from the people who build them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BLOG POSTS
      ========================================================== */}

      <section className="bg-surface py-20 text-ink-800 md:py-28">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post.title}
                data-reveal
                data-reveal-delay={post.delay}
                className="h-full"
              >
                <a
                  href={post.href}
                  className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink-200 hover:shadow-[0_24px_60px_-30px_rgba(16,18,24,0.35)]"
                >
                  {/* Category + read time */}
                  <div className="flex items-center gap-3 text-sm text-ink-400">
                    <span className="rounded-full bg-rain-50 px-3 py-1 font-medium text-rain-600">
                      {post.category}
                    </span>

                    <span>
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="mt-5 font-display text-xl font-semibold leading-snug text-ink-900">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-500">
                    {post.description}
                  </p>

                  {/* Date + arrow */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-ink-400">
                      {post.date}
                    </span>

                    <ArrowUpRight className="h-4 w-4 text-ink-900 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ORIGINAL CTA + FOOTER
          
          DO NOT recreate CTA/footer here.
          CTAAndFooter already contains the original dark
          CTA + complete dark footer.
      ========================================================== */}

      <CTAAndFooter
        ctaEyebrow="Stay in touch"
        ctaTitle="Want these ideas put to work?"
        ctaDescription="Tell us where you're trying to get to. We'll bring the strategy, engineering and honesty to help you get there."
      />
    </>
  );
}