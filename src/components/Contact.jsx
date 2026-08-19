import { useState } from "react";
import {
  Mail,
  MapPin,
  Clock3,
  Share2,
  ChevronRight,
} from "lucide-react";

import CTAAndFooter from "./CTAAndFooter";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  /* ============================================================
     FORM HANDLING
     ============================================================ */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    // Remove success message when user starts editing again
    if (submitted) {
      setSubmitted(false);
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  };

  const isFormValid =
    form.name.trim().length >= 2 &&
    isValidEmail(form.email) &&
    form.interest.trim() !== "" &&
    form.message.trim().length >= 10;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    // Frontend-only submission for now
    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      company: "",
      interest: "",
      message: "",
    });

    // Hide success flash after 4.5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 4500);
  };

  return (
    <>
      {/* ============================================================
          HERO
          ============================================================ */}

      <section className="relative overflow-hidden border-b border-ink-100 bg-white pb-16 pt-32 md:pb-20 md:pt-40">
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
              <a href="/" className="hover:text-ink-700">
                Home
              </a>
            </span>

            <span className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" />

              <span className="text-ink-600">
                Contact
              </span>
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
                Contact
              </span>
            </div>

            {/* Heading */}

            <div
              data-reveal
              data-reveal-delay="80"
            >
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl md:text-[3.4rem]">
                Let&apos;s start a{" "}
                <span className="text-gradient-rain">
                  conversation.
                </span>
              </h1>
            </div>

            {/* Description */}

            <div
              data-reveal
              data-reveal-delay="160"
            >
              <p className="mt-6 text-lg leading-relaxed text-ink-500">
                Tell us about the problem you&apos;re solving. No hard sell
                — just a straight, useful conversation about what&apos;s
                possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CONTACT CONTENT
          ============================================================ */}

      <section className="bg-surface py-20 text-ink-800 md:py-28">
        <div className="container-x">

          {/* ======================================================
              SUCCESS FLASH MESSAGE
              ====================================================== */}

          {submitted && (
            <div
              role="status"
              aria-live="polite"
              className="fixed right-5 top-24 z-[70] flex max-w-sm items-start gap-3 rounded-2xl border border-emerald-200 bg-white px-5 py-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.3)]"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                ✓
              </span>

              <div>
                <p className="font-medium text-ink-900">
                  Message sent
                </p>

                <p className="mt-0.5 text-sm text-ink-500">
                  Thanks for reaching out. We&apos;ll get back to you soon.
                </p>
              </div>
            </div>
          )}

          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">

            {/* ====================================================
                LEFT — DIRECT CONTACT
                ==================================================== */}

            <div>
              <div
                data-reveal
                data-reveal-delay="0"
              >
                <h2 className="font-display text-2xl font-semibold text-ink-900">
                  Reach us directly
                </h2>
              </div>

              <div className="mt-8 space-y-6">

                {/* Email */}

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-rain-500 shadow-sm ring-1 ring-ink-100">
                    <Mail className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-sm font-medium text-ink-400">
                      Email
                    </p>

                    <div className="mt-0.5 text-[1.05rem]">
                      <a
                        href="mailto:hello@raintels.com"
                        className="text-ink-700 hover:text-rain-600"
                      >
                        hello@raintels.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-rain-500 shadow-sm ring-1 ring-ink-100">
                    <MapPin className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-sm font-medium text-ink-400">
                      Location
                    </p>

                    <div className="mt-0.5 text-[1.05rem]">
                      Thiruvananthapuram, India
                    </div>
                  </div>
                </div>

                {/* Response time */}

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-rain-500 shadow-sm ring-1 ring-ink-100">
                    <Clock3 className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-sm font-medium text-ink-400">
                      Response time
                    </p>

                    <div className="mt-0.5 text-[1.05rem]">
                      Within one business day
                    </div>
                  </div>
                </div>

                {/* Social */}

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-rain-500 shadow-sm ring-1 ring-ink-100">
                    <Share2 className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-sm font-medium text-ink-400">
                      Social
                    </p>

                    <div className="mt-0.5 text-[1.05rem]">
                      <div className="flex gap-4">
                        <a
                          href="https://in.linkedin.com/company/raintels"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-ink-700 hover:text-rain-600"
                        >
                          LinkedIn
                        </a>

                        <a
                          href="https://www.facebook.com/raintels"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-ink-700 hover:text-rain-600"
                        >
                          Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scoped proposal */}

              <div className="mt-10 rounded-2xl border border-ink-100 bg-white p-6">
                <p className="font-display text-lg font-semibold text-ink-900">
                  Prefer a scoped proposal?
                </p>

                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  Share a few details in the form and we&apos;ll come back
                  with a clear, no-obligation view of how we&apos;d approach
                  it.
                </p>
              </div>
            </div>

            {/* ====================================================
                RIGHT — CONTACT FORM
                ==================================================== */}

            <div
              data-reveal
              data-reveal-delay="120"
            >
              <form
                noValidate
                onSubmit={handleSubmit}
                className="rounded-3xl border border-ink-100 bg-white p-8 md:p-10"
              >

                <div className="grid gap-6 sm:grid-cols-2">

                  {/* Name */}

                  <label
                    htmlFor="contact-name"
                    className="block"
                  >
                    <span className="mb-2 block text-sm font-medium text-ink-700">
                      Name
                      <span
                        className="text-rain-500"
                        aria-hidden="true"
                      >
                        *
                      </span>
                    </span>

                    <input
                      type="text"
                      autoComplete="name"
                      id="contact-name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      aria-required="true"
                      className="w-full rounded-xl border border-ink-200 bg-surface px-4 py-3 text-[0.98rem] text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-rain-500 focus:bg-white"
                      placeholder="Jane Doe"
                    />
                  </label>

                  {/* Email */}

                  <label
                    htmlFor="contact-email"
                    className="block"
                  >
                    <span className="mb-2 block text-sm font-medium text-ink-700">
                      Email
                      <span
                        className="text-rain-500"
                        aria-hidden="true"
                      >
                        *
                      </span>
                    </span>

                    <input
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      id="contact-email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      aria-required="true"
                      className="w-full rounded-xl border border-ink-200 bg-surface px-4 py-3 text-[0.98rem] text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-rain-500 focus:bg-white"
                      placeholder="jane@company.com"
                    />
                  </label>

                  {/* Company */}

                  <label
                    htmlFor="contact-company"
                    className="block"
                  >
                    <span className="mb-2 block text-sm font-medium text-ink-700">
                      Company
                    </span>

                    <input
                      type="text"
                      autoComplete="organization"
                      id="contact-company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-ink-200 bg-surface px-4 py-3 text-[0.98rem] text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-rain-500 focus:bg-white"
                      placeholder="Company (optional)"
                    />
                  </label>

                  {/* Interest */}

                  <label
                    htmlFor="contact-interest"
                    className="block"
                  >
                    <span className="mb-2 block text-sm font-medium text-ink-700">
                      What do you need?
                      <span
                        className="text-rain-500"
                        aria-hidden="true"
                      >
                        *
                      </span>
                    </span>

                    <select
                      name="interest"
                      id="contact-interest"
                      value={form.interest}
                      onChange={handleChange}
                      aria-required="true"
                      className="w-full rounded-xl border border-ink-200 bg-surface px-4 py-3 text-[0.98rem] text-ink-900 outline-none transition-colors focus:border-rain-500"
                    >
                      <option value="" disabled>
                        Select an area
                      </option>

                      <option value="Product engineering">
                        Product engineering
                      </option>

                      <option value="Mobile app">
                        Mobile app
                      </option>

                      <option value="Cloud & DevOps">
                        Cloud &amp; DevOps
                      </option>

                      <option value="Digital transformation">
                        Digital transformation
                      </option>

                      <option value="A Raintels product">
                        A Raintels product
                      </option>

                      <option value="Something else">
                        Something else
                      </option>
                    </select>
                  </label>
                </div>

                {/* Message */}

                <div className="mt-6">
                  <label
                    htmlFor="contact-message"
                    className="block"
                  >
                    <span className="mb-2 block text-sm font-medium text-ink-700">
                      Tell us about your project
                      <span
                        className="text-rain-500"
                        aria-hidden="true"
                      >
                        *
                      </span>
                    </span>

                    <textarea
                      rows="5"
                      name="message"
                      id="contact-message"
                      value={form.message}
                      onChange={handleChange}
                      aria-required="true"
                      className="w-full resize-none rounded-xl border border-ink-200 bg-surface px-4 py-3 text-[0.98rem] text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-rain-500 focus:bg-white"
                      placeholder="What are you trying to build or fix? What does success look like?"
                    />
                  </label>
                </div>

                {/* Honeypot */}

                <div
                  aria-hidden="true"
                  className="hidden"
                >
                  <label>
                    Website

                    <input
                      type="text"
                      tabIndex="-1"
                      autoComplete="off"
                      name="website"
                    />
                  </label>
                </div>

                {/* Submit */}

                <button
                  type="submit"
                  disabled={!isFormValid}
                  className="mt-8 inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-rain-500 px-7 text-base font-medium text-white shadow-[0_6px_20px_-6px_rgba(228,35,27,0.6)] transition-all hover:bg-rain-600 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
                >
                  Send message
                </button>

                {/* Validation hint */}

                {!isFormValid && (
                  <p className="mt-3 text-xs text-ink-400">
                    Enter your name, a valid email, select what you need,
                    and describe your project to enable sending.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          ORIGINAL DARK FOOTER
          NO CTA
          ============================================================ */}

      <CTAAndFooter showCTA={false} />
    </>
  );
}