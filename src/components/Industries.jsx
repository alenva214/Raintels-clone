import React from "react";
import {
  Truck,
  Landmark,
  ShoppingBag,
  ShieldCheck,
  Car,
  HeartPulse,
  Sprout,
  Clapperboard,
  Building2,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

import CTAAndFooter from "./CTAAndFooter";

const industries = [
  {
    icon: Truck,
    title: "Logistics",
    description:
      "Tracking, routing, and fleet intelligence that keep goods and people moving.",
  },
  {
    icon: Landmark,
    title: "Fintech",
    description:
      "Secure, compliant platforms for payments, lending, and financial insight.",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description:
      "Connected commerce and vertical ERP that unify inventory, sales, and experience.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance",
    description:
      "Digitised policy, claims, and audit workflows that reduce friction and risk.",
  },
  {
    icon: Car,
    title: "Automotive",
    description:
      "Ride capture, predictive maintenance, and connected-vehicle experiences.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Clinical reporting, hospital operations, and analytics built with practitioners.",
  },
  {
    icon: Sprout,
    title: "Agriculture",
    description:
      "Data platforms that bring visibility and efficiency to the field and supply chain.",
  },
  {
    icon: Clapperboard,
    title: "Media",
    description:
      "Knowledge engagement and content platforms that put information to work.",
  },
  {
    icon: Building2,
    title: "Government",
    description:
      "Paperless offices, dynamic audit, and citizen services delivered at scale.",
  },
];

const tokens = {
  ink950: "#0c0d10",
  ink900: "#14161a",
  ink800: "#222222",
  ink700: "#444444",
  ink600: "#4b5567",
  ink500: "#667085",
  ink400: "#8d94a3",
  ink300: "#b8bdc9",
  ink200: "#dddddd",
  ink100: "#eeeeee",
  ink50: "#f8f8f8",

  rain500: "#e4231b",
  rain600: "#c91d16",
  rain400: "#ef5a52",

  blue500: "#2e6be6",
};

function IndustryCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div
      className="industry-card"
      style={{
        position: "relative",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        padding: "32px",
        transition:
          "background-color 300ms cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <span
          className="industry-card-icon"
          style={{
            display: "flex",
            height: "44px",
            width: "44px",
            flexShrink: 0,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
            backgroundColor: tokens.ink50,
            color: tokens.ink900,
            transition:
              "background-color 300ms cubic-bezier(0.16,1,0.3,1), color 300ms cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <Icon
            size={20}
            strokeWidth={2}
            aria-hidden="true"
          />
        </span>

        <h3
          className="industry-card-title"
          style={{
            margin: 0,
            fontFamily:
              "'Space Grotesk', 'Inter', system-ui, sans-serif",
            fontSize: "18px",
            fontWeight: 600,
            color: tokens.ink900,
            transition:
              "color 300ms cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {title}
        </h3>
      </div>

      <p
        className="industry-card-description"
        style={{
          marginTop: "16px",
          marginBottom: 0,
          fontSize: "14px",
          lineHeight: 1.6,
          color: tokens.ink500,
          transition:
            "color 300ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {description}
      </p>
    </div>
  );
}

function IndustriesCTA() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: tokens.ink950,
        padding: "96px 0",
        color: "#ffffff",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            height: "576px",
            width: "576px",
            transform: "translateX(-50%)",
            borderRadius: "9999px",
            backgroundColor: "rgba(228,35,27,0.15)",
            filter: "blur(100px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "-80px",
            bottom: "-160px",
            height: "384px",
            width: "384px",
            borderRadius: "9999px",
            backgroundColor: "rgba(46,107,230,0.1)",
            filter: "blur(64px)",
          }}
        />
      </div>

      <div
        className="container-x"
        style={{
          position: "relative",
          maxWidth: "1152px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Your industry */}
        <div
          data-reveal
          data-reveal-delay="0"
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: tokens.rain400,
            }}
          >
            <span
              style={{
                height: "6px",
                width: "6px",
                borderRadius: "9999px",
                backgroundColor: "currentColor",
              }}
            />

            Your industry
          </span>
        </div>

        {/* Heading */}
        <div
          data-reveal
          data-reveal-delay="80"
        >
          <h2
            style={{
              maxWidth: "768px",
              margin: "24px auto 0",
              fontFamily:
                "'Space Grotesk', 'Inter', system-ui, sans-serif",
              fontSize:
                "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight: 600,
              lineHeight: 1.08,
              color: "#ffffff",
            }}
          >
            Don&apos;t see yours? We adapt fast.
          </h2>
        </div>

        {/* Description */}
        <div
          data-reveal
          data-reveal-delay="160"
        >
          <p
            style={{
              maxWidth: "576px",
              margin: "24px auto 0",
              fontSize: "18px",
              lineHeight: 1.6,
              color: tokens.ink300,
            }}
          >
            Strong engineering fundamentals travel.
            Tell us about your domain and we&apos;ll
            show you where we&apos;d start.
          </p>
        </div>

        {/* Buttons */}
        <div
          data-reveal
          data-reveal-delay="240"
        >
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <a
              href="/contact"
              className="industry-primary-button"
              style={{
                display: "inline-flex",
                height: "52px",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                borderRadius: "9999px",
                padding: "0 28px",
                fontSize: "16px",
                fontWeight: 500,
                color: "#ffffff",
                backgroundColor: tokens.rain500,
                textDecoration: "none",
                boxShadow:
                  "0 6px 20px -6px rgba(228,35,27,0.6)",
                transition:
                  "all 200ms cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              Talk to a strategist

              <ArrowRight
                size={16}
                style={{
                  transition: "transform 200ms ease",
                }}
              />
            </a>

            <a
              href="mailto:hello@raintels.com"
              style={{
                display: "inline-flex",
                height: "52px",
                alignItems: "center",
                gap: "8px",
                borderRadius: "9999px",
                border:
                  "1px solid rgba(255,255,255,0.15)",
                padding: "0 28px",
                fontSize: "16px",
                fontWeight: 500,
                color: "#ffffff",
                textDecoration: "none",
                transition:
                  "background-color 200ms ease",
              }}
            >
              hello@raintels.com

              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Industries() {
  return (
    <>
      {/* =====================================================
          INDUSTRIES HERO
      ====================================================== */}

      <section
        style={{
          position: "relative",
          overflow: "hidden",
          borderBottom: `1px solid ${tokens.ink100}`,
          backgroundColor: "#ffffff",
          paddingTop: "128px",
          paddingBottom: "64px",
        }}
      >
        {/* Hero background */}
        <div
          style={{
            pointerEvents: "none",
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(50% 60% at 50% 0%, rgba(46,107,230,0.06), transparent 65%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: "-96px",
              top: "-40px",
              height: "320px",
              width: "320px",
              borderRadius: "9999px",
              backgroundColor:
                "rgba(228,35,27,0.06)",
              filter: "blur(64px)",
            }}
          />
        </div>

        <div
          className="container-x"
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1160px",
            margin: "0 auto",
          }}
        >
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "24px",
              fontSize: "14px",
              color: tokens.ink400,
            }}
          >
            <a
              href="/"
              style={{
                color: tokens.ink400,
                textDecoration: "none",
              }}
            >
              Home
            </a>

            <ChevronRight
              size={14}
              strokeWidth={2}
            />

            <span
              style={{
                color: tokens.ink600,
              }}
            >
              Industries
            </span>
          </nav>

          <div
            style={{
              maxWidth: "768px",
            }}
          >
            {/* Eyebrow */}
            <div
              data-reveal
              data-reveal-delay="0"
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: tokens.rain600,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    height: "6px",
                    width: "6px",
                    borderRadius: "9999px",
                    backgroundColor: "currentColor",
                  }}
                />

                Industries
              </span>
            </div>

            {/* Exact original heading */}
            <div
              data-reveal
              data-reveal-delay="80"
            >
              <h1
                style={{
                  margin: "20px 0 0",
                  fontFamily:
                    "'Space Grotesk', 'Inter', system-ui, sans-serif",
                  fontSize:
                    "clamp(2.25rem, 5vw, 3.4rem)",
                  fontWeight: 600,
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                  color: tokens.ink900,
                }}
              >
                Context first,{" "}
                <span className="text-gradient-rain">
                  then code.
                </span>
              </h1>
            </div>

            {/* Exact original description */}
            <div
              data-reveal
              data-reveal-delay="160"
            >
              <p
                style={{
                  margin: "24px 0 0",
                  fontSize: "18px",
                  lineHeight: 1.6,
                  color: tokens.ink500,
                }}
              >
                We&apos;ve shipped software into nine
                sectors — each with its own rules,
                risks and realities. That domain
                experience shapes better decisions long
                before the first line of code.
              </p>
            </div>

            {/* Hero button */}
            <div
              data-reveal
              data-reveal-delay="240"
            >
              <div
                style={{
                  marginTop: "32px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <a
                  href="/contact"
                  className="industry-hero-button"
                  style={{
                    display: "inline-flex",
                    height: "44px",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    borderRadius: "9999px",
                    padding: "0 20px",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#ffffff",
                    backgroundColor: tokens.rain500,
                    textDecoration: "none",
                    boxShadow:
                      "0 6px 20px -6px rgba(228,35,27,0.6)",
                    transition:
                      "all 200ms cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  Discuss your sector

                  <ArrowRight
                    size={16}
                    style={{
                      transition:
                        "transform 200ms ease",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          9 INDUSTRY CARDS
      ====================================================== */}

      <section
        style={{
          padding: "80px 0",
          backgroundColor: "#ffffff",
          color: tokens.ink800,
          fontFamily:
            "'Inter', system-ui, sans-serif",
        }}
      >
        <div
          className="container-x"
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
          }}
        >
          <div
            className="industries-grid"
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(1, minmax(0, 1fr))",
              gap: "1px",
              overflow: "hidden",
              borderRadius: "16px",
              border: `1px solid ${tokens.ink100}`,
              backgroundColor: tokens.ink100,
            }}
          >
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                data-reveal
                data-reveal-delay={String(
                  [0, 60, 120][index % 3]
                )}
                style={{
                  minWidth: 0,
                  height: "100%",
                }}
              >
                <IndustryCard {...industry} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIES-SPECIFIC CTA
      ====================================================== */}

      <IndustriesCTA />

      {/* =====================================================
          FOOTER ONLY
          IMPORTANT: no homepage "Let's build" CTA here
      ====================================================== */}

      <CTAAndFooter showCTA={false} />

      <style>{`
        @media (min-width: 640px) {
          .industries-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (min-width: 1024px) {
          .industries-grid {
            grid-template-columns:
              repeat(3, minmax(0, 1fr)) !important;
          }
        }

        .industry-card:hover {
          background-color: ${tokens.ink950} !important;
        }

        .industry-card:hover .industry-card-icon {
          background-color: rgba(255,255,255,0.1) !important;
          color: ${tokens.rain400} !important;
        }

        .industry-card:hover .industry-card-title {
          color: #ffffff !important;
        }

        .industry-card:hover .industry-card-description {
          color: ${tokens.ink300} !important;
        }

        .industry-primary-button:hover,
        .industry-hero-button:hover {
          background-color: ${tokens.rain600} !important;
          transform: translateY(-2px);
          box-shadow:
            0 10px 28px -6px rgba(228,35,27,0.7) !important;
        }

        .industry-primary-button:hover svg,
        .industry-hero-button:hover svg {
          transform: translateX(4px);
        }

        @media (prefers-reduced-motion: reduce) {
          .industry-card,
          .industry-card-icon,
          .industry-card-title,
          .industry-card-description,
          .industry-primary-button,
          .industry-hero-button {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}