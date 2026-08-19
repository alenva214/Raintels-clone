import { ChevronRight, ArrowLeft } from "lucide-react";
import CTAAndFooter from "./CTAAndFooter";

/* ============================================================
   BLOG ARTICLE DATA
   ============================================================ */

export const blogArticleData = {
  "crm-erp-integration-that-actually-sticks": {
    category: "Enterprise",

    title:
      "CRM &ERP integration that actually sticks",

    description:
      "Most integrations break because they're treated as a project, not a system. Here's how we design data flows that survive contact with the real business.",

    readTime: "6 min read",

    paragraphs: [
      "Integrating CRM and ERP is rarely a technical problem first — it's an ownership problem. When no one owns the flow of data end-to-end, integrations rot the moment either system changes.",

      "We start by mapping the actual business events, not the database tables: a lead becomes an order, an order becomes a fulfilment, a fulfilment becomes a receivable. Model those transitions once and the systems follow.",

      "The result is a connected operation where information moves without a human re-keying it — the definition of a frictionless enterprise.",
    ],
  },

  "product-thinking-for-internal-tools": {
    category: "Product",

    title:
      "Why internal tools deserve product thinking too",

    description:
      "The software your own teams use every day quietly decides how fast your business can move. Treating it like a product changes everything.",

    readTime: "5 min read",

    paragraphs: [
      "Internal tools are where most enterprises accumulate friction. Because no customer sees them, they're built to just-about-work and never revisited.",

      "But the compounding cost is enormous: every clumsy screen is a tax paid by your team on every transaction, forever.",

      "Applying product thinking — real users, measured outcomes, iterative design — to internal software is one of the highest-return investments an operations leader can make.",
    ],
  },

  "shipping-with-quality-engineering": {
    category: "Engineering",

    title:
      "Shipping fast without shipping bugs",

    description:
      "Speed and quality aren't opposites. With quality engineering woven into delivery, they reinforce each other.",

    readTime: "7 min read",

    paragraphs: [
      "The teams that ship fastest are almost always the ones with the best safety nets. Confidence comes from coverage, not caution.",

      "We wire automated tests, performance checks and security scanning into the pipeline so every change is verified before it reaches a user.",

      "That's what lets us move quickly and calmly at the same time — releases become routine instead of risky.",
    ],
  },
};


/* ============================================================
   BLOG ARTICLE PAGE
   ============================================================ */

export default function BlogArticle({ article }) {
  /* ----------------------------------------------------------
     Safety fallback
     ---------------------------------------------------------- */

  if (!article) {
    return (
      <div className="container-x py-32">
        <h1 className="font-display text-4xl font-semibold text-ink-900">
          Article not found
        </h1>

        <p className="mt-4 text-ink-500">
          The article you're looking for doesn't exist.
        </p>

        <a
          href="/blog"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-rain-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-rain-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Insights
        </a>
      </div>
    );
  }


  return (
    <>
      {/* ========================================================
          ARTICLE HERO
          ======================================================== */}

      <section className="relative overflow-hidden border-b border-ink-100 bg-white pb-16 pt-32 md:pb-20 md:pt-40">

        {/* Background decoration */}

        <div className="pointer-events-none absolute inset-0 -z-10">

          <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(46,107,230,0.06),transparent_65%)]" />

          <div className="absolute -left-24 -top-10 h-80 w-80 rounded-full bg-rain-500/[0.06] blur-3xl" />

        </div>


        <div className="container-x">

          {/* ----------------------------------------------------
              Breadcrumb
              ---------------------------------------------------- */}

          <nav
            className="mb-6 flex items-center gap-1.5 text-sm text-ink-400"
            aria-label="Breadcrumb"
          >

            {/* Home */}

            <span className="flex items-center gap-1.5">

              <a
                href="/"
                className="hover:text-ink-700"
              >
                Home
              </a>

            </span>


            {/* Insights */}

            <span className="flex items-center gap-1.5">

              <ChevronRight className="h-3.5 w-3.5" />

              <a
                href="/blog"
                className="hover:text-ink-700"
              >
                Insights
              </a>

            </span>


            {/* Current article */}

            <span className="flex min-w-0 items-center gap-1.5">

              <ChevronRight className="h-3.5 w-3.5 shrink-0" />

              <span className="truncate text-ink-600">
                {article.title}
              </span>

            </span>

          </nav>


          {/* ----------------------------------------------------
              Article heading
              ---------------------------------------------------- */}

          <div className="max-w-3xl">

            {/* Category */}

            <div
              data-reveal
              data-reveal-delay="0"
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rain-600">

                <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />

                {article.category}

              </span>
            </div>


            {/* Title */}

            <div
              data-reveal
              data-reveal-delay="80"
            >
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl md:text-[3.4rem]">
                {article.title}
              </h1>
            </div>


            {/* Description */}

            <div
              data-reveal
              data-reveal-delay="160"
            >
              <p className="mt-6 text-lg leading-relaxed text-ink-500">
                {article.description}
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ========================================================
          ARTICLE CONTENT
          ======================================================== */}

      <section className="bg-white py-20 text-ink-800 md:py-28">

        <div className="container-x">

          <article className="mx-auto max-w-2xl">

            {/* Reading time */}

            <p className="text-sm text-ink-400">
              {article.readTime}
            </p>


            {/* Article paragraphs */}

            <div className="prose mt-8 space-y-6">

              {article.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-ink-700"
                >
                  {paragraph}
                </p>
              ))}

            </div>


            {/* ------------------------------------------------
                Back to Insights
                ------------------------------------------------ */}

            <div className="mt-14 border-t border-ink-100 pt-8">

              <a
                href="/blog"
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink-700 hover:text-rain-600"
              >

                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />

                Back to Insights

              </a>

            </div>

          </article>

        </div>

      </section>


      {/* ========================================================
          CTA + FOOTER

          IMPORTANT:
          Reuse the existing component.
          Do NOT recreate the dark CTA/footer here.
          ======================================================== */}

      <CTAAndFooter />

    </>
  );
}