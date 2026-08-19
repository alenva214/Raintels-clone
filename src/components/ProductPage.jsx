import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Check,
} from "lucide-react";

import CTAAndFooter from "./CTAAndFooter";

const tokens = {
  ink950: "#0c0d10",
  ink900: "#111111",
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

  surface: "#f7f7f8",
};

/* ============================================================
   PRODUCT DATA
============================================================ */

export const productData = {
  "cardio-touch": {
    title: "Cardio Touch",
    category: "Healthcare Analytics",
    tagline: "Cath-lab reporting, designed by cardiologists",

    description:
      "A web-based cath-lab reporting and analytical platform that streamlines report generation and statistical research for cardiology practices.",

    longDescription:
      "Cardio Touch replaces slow, inconsistent reporting with a structured, data-driven workflow built around how cardiologists actually work. Standardised reporting across procedures cuts documentation time and, because everything is captured as structured data, unlocks the statistical research that paper and PDFs make painful.",

    status: "In Market",

    industry: "Healthcare",
    industryHref: "/industries",

    stats: [
      {
        value: "−60%",
        label: "Reporting time",
      },
      {
        value: "7+",
        label: "Procedure types",
      },
    ],

    highlights: [
      "Structured reporting across the full range of cath-lab procedures",
      "Coronary & peripheral angiography and angioplasty",
      "Electrophysiology, pacemaker and ICD documentation",
      "Built-in statistical research and analytics",
      "Designed with practising cardiologists",
    ],

    icon: "HeartPulse",
  },

  "konnect-e": {
    title: "Konnect-E",
    category: "Knowledge Engagement",
    tagline: "Turn organisational knowledge into a growth engine",

    description:
      "A smart knowledge base that connects your organisation's collective know-how so teams and customers find the right answer fast.",

    longDescription:
      "Konnect-E integrates with the systems where knowledge already lives and makes it usable — surfacing relevant answers for customers in seconds, helping teams identify the right expert, and encouraging employees to share ideas through light-touch gamification.",

    status: "Live",

    industry: "Media",
    industryHref: "/industries",

    stats: [
      {
        value: "3×",
        label: "Faster answers",
      },
      {
        value: "Many",
        label: "Sources unified",
      },
    ],

    highlights: [
      "Unifies knowledge across organisational systems",
      "Fast, relevant answers for customer queries",
      "Expert and resource identification",
      "Idea-sharing with gamification",
      "Knowledge-driven enterprise growth",
    ],

    icon: "BrainCircuit",
  },

  fincast: {
    title: "Fincast",
    category: "Financial Intelligence",
    tagline: "Forecasting that empowers financial decisions",

    description:
      "A financial forecasting and management platform that brings clarity and foresight to planning.",

    longDescription:
      "Fincast helps finance teams move from backward-looking spreadsheets to forward-looking models — projecting cash, performance, and scenarios so leaders can decide with confidence instead of hindsight.",

    status: "Live",

    industry: "Fintech",
    industryHref: "/industries",

    stats: [
      {
        value: "High",
        label: "Planning clarity",
      },
      {
        value: "Unlimited",
        label: "Scenarios",
      },
    ],

    highlights: [
      "Forward-looking financial forecasting",
      "Scenario modelling and planning",
      "Clear, decision-ready dashboards",
      "Performance tracking against plan",
    ],

    icon: "ChartLine",
  },

  dewpas: {
    title: "Dewpas",
    category: "Audit & Performance",
    tagline: "Dynamic audit and performance management",

    description:
      "A dynamic audit and performance management system that keeps oversight continuous rather than occasional.",

    longDescription:
      "Dewpas turns audits from a periodic scramble into a living process — capturing performance data continuously, flagging what needs attention, and giving leaders an always-current view of how the organisation is really doing.",

    status: "Enterprise",

    industry: "Government",
    industryHref: "/industries",

    stats: [
      {
        value: "Continuous",
        label: "Audit cadence",
      },
      {
        value: "Real-time",
        label: "Visibility",
      },
    ],

    highlights: [
      "Continuous, dynamic auditing",
      "Performance management and tracking",
      "Configurable checks and workflows",
      "Always-current oversight dashboards",
    ],

    icon: "ClipboardCheck",
  },

  "carat-ai": {
    title: "Carat.ai",
    category: "Vertical ERP",
    tagline: "ERP built for the jewellery business",

    description:
      "A purpose-built ERP that understands the realities of running a jewellery business, end to end.",

    longDescription:
      "Generic ERPs miss the nuances of jewellery — weight, purity, making charges, and fast-moving inventory. Carat.ai is built around them, connecting inventory, sales, and operations into one system that fits the trade instead of fighting it.",

    status: "In Market",

    industry: "Retail",
    industryHref: "/industries",

    stats: [
      {
        value: "Purpose-built",
        label: "Fit",
      },
      {
        value: "End-to-end",
        label: "Modules",
      },
    ],

    highlights: [
      "Jewellery-specific inventory management",
      "Weight, purity and making-charge aware",
      "Integrated sales and billing",
      "End-to-end operational visibility",
    ],

    icon: "Gem",
  },

  careproto: {
    title: "CareProto",
    category: "Health Systems",
    tagline: "Digital transformation for hospitals",

    description:
      "A platform that helps hospitals digitise operations and elevate the standard of patient care.",

    longDescription:
      "CareProto brings hospital workflows online — coordinating operations, records, and care pathways so clinical teams spend less time on paperwork and more with patients, with the data trail to keep improving.",

    status: "Enterprise",

    industry: "Healthcare",
    industryHref: "/industries",

    stats: [
      {
        value: "Digitised",
        label: "Operations",
      },
      {
        value: "Elevated",
        label: "Care quality",
      },
    ],

    highlights: [
      "Digitised hospital operations",
      "Coordinated care pathways",
      "Structured patient records",
      "Operational insight for administrators",
    ],

    icon: "Stethoscope",
  },

  "digital-office-enabler": {
    title: "Digital Office Enabler",
    category: "Workplace",
    tagline: "A paperless, connected back office",

    description:
      "A smart office solution that digitises documents and enables seamless electronic transfer across the organisation.",

    longDescription:
      "The Digital Office Enabler moves the back office off paper — digitising documents, routing them electronically, and keeping an auditable trail so approvals and records stop getting stuck on someone's desk.",

    status: "Live",

    industry: "Government",
    industryHref: "/industries",

    stats: [
      {
        value: "Eliminated",
        label: "Paper",
      },
      {
        value: "Instant",
        label: "Routing",
      },
    ],

    highlights: [
      "Document digitisation",
      "Seamless electronic transfer and routing",
      "Auditable approval trails",
      "Searchable digital records",
    ],

    icon: "FileText",
  },

  "ondemand-service": {
    title: "OnDemand Service",
    category: "Marketplace",
    tagline: "A multi-service discovery marketplace",

    description:
      "A multi-disciplinary on-demand service platform with integrated discovery, booking, and commerce.",

    longDescription:
      "OnDemand Service connects people who need services with the providers who deliver them — discovery, booking, and payments in one place, ready to be tailored to a category or region.",

    status: "In Market",

    industry: "Retail",
    industryHref: "/industries",

    stats: [
      {
        value: "On-demand",
        label: "Model",
      },
      {
        value: "Built-in",
        label: "Commerce",
      },
    ],

    highlights: [
      "Multi-category service discovery",
      "In-app booking and scheduling",
      "Integrated e-commerce and payments",
      "Provider and customer apps",
    ],

    icon: "Handshake",
  },

  "career-portal": {
    title: "Career Portal",
    category: "HR Platform",
    tagline: "Enterprise recruitment, as a service",

    description:
      "A configurable recruitment portal that gives enterprises a polished, branded hiring front door.",

    longDescription:
      "Career Portal gives organisations a branded, capable hiring experience without building one from scratch — job listings, applications, and candidate tracking, delivered as a service and shaped to fit the brand.",

    status: "Live",

    industry: "Logistics",
    industryHref: "/industries",

    stats: [
      {
        value: "As-a-service",
        label: "Setup",
      },
      {
        value: "Fully yours",
        label: "Branding",
      },
    ],

    highlights: [
      "Branded careers and listings site",
      "Application capture and tracking",
      "Configurable hiring workflows",
      "Delivered as a managed service",
    ],

    icon: "Briefcase",
  },
};

/* ============================================================
   ICONS
============================================================ */

import {
  HeartPulse,
  BrainCircuit,
  ChartLine,
  ClipboardCheck,
  Gem,
  Stethoscope,
  FileText,
  Handshake,
  Briefcase,
} from "lucide-react";

const iconMap = {
  HeartPulse,
  BrainCircuit,
  ChartLine,
  ClipboardCheck,
  Gem,
  Stethoscope,
  FileText,
  Handshake,
  Briefcase,
};

/* ============================================================
   PRODUCT CARD DATA
============================================================ */

const products = [
  {
    title: "Cardio Touch",
    category: "Healthcare Analytics",
    status: "In Market",
    description:
      "A web-based cath-lab reporting and analytical platform that streamlines report generation and statistical research for cardiology practices.",
    tagline: "Cath-lab reporting, designed by cardiologists",
    href: "/products/cardio-touch",
    icon: HeartPulse,
  },
  {
    title: "Konnect-E",
    category: "Knowledge Engagement",
    status: "Live",
    description:
      "A smart knowledge base that connects your organisation's collective know-how so teams and customers find the right answer fast.",
    tagline: "Turn organisational knowledge into a growth engine",
    href: "/products/konnect-e",
    icon: BrainCircuit,
  },
  {
    title: "Fincast",
    category: "Financial Intelligence",
    status: "Live",
    description:
      "A financial forecasting and management platform that brings clarity and foresight to planning.",
    tagline: "Forecasting that empowers financial decisions",
    href: "/products/fincast",
    icon: ChartLine,
  },
  {
    title: "Dewpas",
    category: "Audit & Performance",
    status: "Enterprise",
    description:
      "A dynamic audit and performance management system that keeps oversight continuous rather than occasional.",
    tagline: "Dynamic audit and performance management",
    href: "/products/dewpas",
    icon: ClipboardCheck,
  },
  {
    title: "Carat.ai",
    category: "Vertical ERP",
    status: "In Market",
    description:
      "A purpose-built ERP that understands the realities of running a jewellery business, end to end.",
    tagline: "ERP built for the jewellery business",
    href: "/products/carat-ai",
    icon: Gem,
  },
  {
    title: "CareProto",
    category: "Health Systems",
    status: "Enterprise",
    description:
      "A platform that helps hospitals digitise operations and elevate the standard of patient care.",
    tagline: "Digital transformation for hospitals",
    href: "/products/careproto",
    icon: Stethoscope,
  },
  {
    title: "Digital Office Enabler",
    category: "Workplace",
    status: "Live",
    description:
      "A smart office solution that digitises documents and enables seamless electronic transfer across the organisation.",
    tagline: "A paperless, connected back office",
    href: "/products/digital-office-enabler",
    icon: FileText,
  },
  {
    title: "OnDemand Service",
    category: "Marketplace",
    status: "In Market",
    description:
      "A multi-disciplinary on-demand service platform with integrated discovery, booking, and commerce.",
    tagline: "A multi-service discovery marketplace",
    href: "/products/ondemand-service",
    icon: Handshake,
  },
  {
    title: "Career Portal",
    category: "HR Platform",
    status: "Live",
    description:
      "A configurable recruitment portal that gives enterprises a polished, branded hiring front door.",
    tagline: "Enterprise recruitment, as a service",
    href: "/products/career-portal",
    icon: Briefcase,
  },
];

/* ============================================================
   EXPLORE PRODUCT CARD
============================================================ */

function ExploreProductCard({ product, delay }) {
  const Icon = product.icon;

  return (
    <div
      data-reveal
      data-reveal-delay={delay}
      style={{
        height: "100%",
      }}
    >
      <a
        href={product.href}
        className="detail-product-card"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          overflow: "hidden",
          borderRadius: "16px",
          border: `1px solid ${tokens.ink100}`,
          backgroundColor: "#ffffff",
          textDecoration: "none",
          transition:
            "transform 300ms ease, box-shadow 300ms ease",
        }}
      >
        <div
          className="detail-product-card-top"
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "28px",
            backgroundColor: tokens.ink900,
          }}
        >
          <div
            className="detail-product-card-glow"
            style={{
              pointerEvents: "none",
              position: "absolute",
              right: "-24px",
              top: "-32px",
              width: "112px",
              height: "112px",
              borderRadius: "9999px",
              backgroundColor: "rgba(228,35,27,0.25)",
              filter: "blur(32px)",
              transition: "background-color 500ms ease",
            }}
          />

          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                display: "flex",
                height: "48px",
                width: "48px",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                backgroundColor: "rgba(255,255,255,0.1)",
                color: "#ffffff",
              }}
            >
              <Icon size={24} strokeWidth={2} />
            </span>

            <span
              style={{
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "4px 12px",
                fontSize: "12px",
                fontWeight: 500,
                color: tokens.ink200,
              }}
            >
              {product.status}
            </span>
          </div>

          <h3
            style={{
              position: "relative",
              margin: "24px 0 0",
              fontFamily:
                "'Space Grotesk', 'Inter', system-ui, sans-serif",
              fontSize: "24px",
              lineHeight: 1.2,
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            {product.title}
          </h3>

          <p
            style={{
              position: "relative",
              margin: "4px 0 0",
              fontSize: "14px",
              color: tokens.rain400,
            }}
          >
            {product.category}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            padding: "28px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "15px",
              lineHeight: 1.45,
              fontWeight: 500,
              color: tokens.ink800,
            }}
          >
            {product.tagline}
          </p>

          <p
            style={{
              flex: 1,
              margin: "12px 0 0",
              fontSize: "14px",
              lineHeight: 1.65,
              color: tokens.ink500,
            }}
          >
            {product.description}
          </p>

          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginTop: "24px",
              fontSize: "14px",
              fontWeight: 500,
              color: tokens.ink900,
            }}
          >
            View product
            <ArrowUpRight size={16} />
          </span>
        </div>
      </a>
    </div>
  );
}

/* ============================================================
   PRODUCT CTA
============================================================ */

function ProductCTA({ product }) {
  const [primaryHovered, setPrimaryHovered] =
    React.useState(false);

  const [secondaryHovered, setSecondaryHovered] =
    React.useState(false);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: tokens.ink950,
        padding: "96px 0 128px",
        color: "#ffffff",
      }}
    >
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
            width: "576px",
            height: "576px",
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
            width: "384px",
            height: "384px",
            borderRadius: "9999px",
            backgroundColor: "rgba(46,107,230,0.1)",
            filter: "blur(64px)",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        <div data-reveal data-reveal-delay="0">
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
                width: "6px",
                height: "6px",
                borderRadius: "9999px",
                backgroundColor: "currentColor",
              }}
            />

            Next step
          </span>
        </div>

        <div data-reveal data-reveal-delay="80">
          <h2
            style={{
              maxWidth: "768px",
              margin: "24px auto 0",
              fontFamily:
                "'Space Grotesk', 'Inter', system-ui, sans-serif",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight: 600,
              lineHeight: 1.08,
              color: "#ffffff",
            }}
          >
            Want something like {product.title}?
          </h2>
        </div>

        <div data-reveal data-reveal-delay="160">
          <p
            style={{
              maxWidth: "576px",
              margin: "24px auto 0",
              fontSize: "18px",
              lineHeight: 1.6,
              color: tokens.ink300,
            }}
          >
            Tell us where you&apos;re trying to get to. We&apos;ll
            bring the strategy, engineering and honesty to help you
            get there.
          </p>
        </div>

        <div data-reveal data-reveal-delay="240">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginTop: "40px",
            }}
          >
            <a
              href="/contact"
              onMouseEnter={() => setPrimaryHovered(true)}
              onMouseLeave={() => setPrimaryHovered(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                height: "52px",
                padding: "0 28px",
                borderRadius: "9999px",
                backgroundColor: primaryHovered
                  ? tokens.rain600
                  : tokens.rain500,
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: 500,
                textDecoration: "none",
                boxShadow: primaryHovered
                  ? "0 10px 28px -6px rgba(228,35,27,0.7)"
                  : "0 6px 20px -6px rgba(228,35,27,0.6)",
                transform: primaryHovered
                  ? "translateY(-2px)"
                  : "translateY(0)",
                transition:
                  "all 200ms cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              Talk to a strategist

              <ArrowRight
                size={16}
                style={{
                  transform: primaryHovered
                    ? "translateX(4px)"
                    : "translateX(0)",
                  transition: "transform 200ms ease",
                }}
              />
            </a>

            <a
              href="mailto:hello@raintels.com"
              onMouseEnter={() => setSecondaryHovered(true)}
              onMouseLeave={() => setSecondaryHovered(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                height: "52px",
                padding: "0 28px",
                borderRadius: "9999px",
                border:
                  "1px solid rgba(255,255,255,0.15)",
                backgroundColor: secondaryHovered
                  ? "rgba(255,255,255,0.1)"
                  : "transparent",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "background-color 200ms ease",
              }}
            >
              hello@raintels.com

              <ArrowRight
                size={16}
                style={{
                  transform: secondaryHovered
                    ? "translateX(4px)"
                    : "translateX(0)",
                  transition: "transform 200ms ease",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   MAIN PRODUCT PAGE
============================================================ */

export default function ProductPage({ product }) {
  if (!product) {
    return (
      <section
        style={{
          padding: "160px 24px",
          textAlign: "center",
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        <h1
          style={{
            fontFamily:
              "'Space Grotesk', 'Inter', system-ui, sans-serif",
            fontSize: "40px",
            color: tokens.ink900,
          }}
        >
          Product not found
        </h1>

        <a
          href="/products"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "24px",
            color: tokens.rain600,
            textDecoration: "none",
          }}
        >
          Back to products
          <ArrowRight size={16} />
        </a>
      </section>
    );
  }

  const Icon = iconMap[product.icon];

  const currentSlug = window.location.pathname
    .split("/")
    .filter(Boolean)
    .pop();

  const relatedProducts = products.filter(
    (item) => item.href !== `/products/${currentSlug}`
  );

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        color: tokens.ink800,
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        style={{
          position: "relative",
          overflow: "hidden",
          borderBottom: `1px solid ${tokens.ink100}`,
          backgroundColor: "#ffffff",
          padding: "128px 0 64px",
        }}
      >
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
              width: "320px",
              height: "320px",
              borderRadius: "9999px",
              backgroundColor: "rgba(228,35,27,0.06)",
              filter: "blur(48px)",
            }}
          />
        </div>

        <div
          className="product-detail-container"
          style={{
            position: "relative",
            maxWidth: "1160px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
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

            <ChevronRight size={14} color={tokens.ink400} />

            <a
              href="/products"
              style={{
                color: tokens.ink400,
                textDecoration: "none",
              }}
            >
              Products
            </a>

            <ChevronRight size={14} color={tokens.ink400} />

            <span style={{ color: tokens.ink600 }}>
              {product.title}
            </span>
          </nav>

          <div style={{ maxWidth: "768px" }}>
            <div data-reveal data-reveal-delay="0">
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
                    width: "6px",
                    height: "6px",
                    borderRadius: "9999px",
                    backgroundColor: "currentColor",
                  }}
                />

                {product.category}
              </span>
            </div>

            <div data-reveal data-reveal-delay="80">
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
                {product.title}
              </h1>
            </div>

            <div data-reveal data-reveal-delay="160">
              <p
                style={{
                  margin: "24px 0 0",
                  fontSize: "18px",
                  lineHeight: 1.6,
                  color: tokens.ink500,
                }}
              >
                {product.tagline}
              </p>
            </div>

            <div data-reveal data-reveal-delay="240">
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginTop: "32px",
                }}
              >
                <a
                  href="/contact"
                  className="product-detail-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    height: "44px",
                    padding: "0 20px",
                    borderRadius: "9999px",
                    backgroundColor: tokens.rain500,
                    color: "#ffffff",
                    fontSize: "15px",
                    fontWeight: 500,
                    textDecoration: "none",
                    boxShadow:
                      "0 6px 20px -6px rgba(228,35,27,0.6)",
                    transition:
                      "all 200ms cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  Request a demo

                  <ArrowRight
                    className="product-detail-primary-arrow"
                    size={16}
                    style={{
                      transition:
                        "transform 200ms ease",
                    }}
                  />
                </a>

                <a
                  href={product.industryHref}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "44px",
                    padding: "0 20px",
                    borderRadius: "9999px",
                    border:
                      `1px solid ${tokens.ink200}`,
                    color: tokens.ink800,
                    fontSize: "15px",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition:
                      "all 200ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      tokens.ink900;
                    e.currentTarget.style.backgroundColor =
                      tokens.ink50;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      tokens.ink200;
                    e.currentTarget.style.backgroundColor =
                      "transparent";
                  }}
                >
                  {product.industry}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT DETAILS
      ===================================================== */}

      <section
        style={{
          padding: "80px 0 112px",
          backgroundColor: "#ffffff",
          color: tokens.ink800,
        }}
      >
        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <div
            className="product-detail-grid"
            style={{
              display: "grid",
              gap: "48px",
            }}
          >
            {/* LEFT */}

            <div>
              <span
                style={{
                  display: "flex",
                  height: "56px",
                  width: "56px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "16px",
                  backgroundColor: tokens.ink900,
                  color: "#ffffff",
                }}
              >
                {Icon && (
                  <Icon
                    size={24}
                    strokeWidth={2}
                  />
                )}
              </span>

              <p
                style={{
                  margin: "24px 0 0",
                  fontSize: "20px",
                  lineHeight: 1.6,
                  color: tokens.ink700,
                }}
              >
                {product.description}
              </p>

              <p
                style={{
                  margin: "20px 0 0",
                  fontSize: "16.8px",
                  lineHeight: 1.65,
                  color: tokens.ink500,
                }}
              >
                {product.longDescription}
              </p>

              <h2
                style={{
                  margin: "40px 0 0",
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: tokens.rain600,
                }}
              >
                Highlights
              </h2>

              <ul
                style={{
                  display: "grid",
                  gap: "12px",
                  margin: "24px 0 0",
                  padding: 0,
                  listStyle: "none",
                  gridTemplateColumns:
                    "repeat(1, minmax(0,1fr))",
                }}
                className="product-highlights-grid"
              >
                {product.highlights.map(
                  (highlight) => (
                    <li
                      key={highlight}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexShrink: 0,
                          alignItems: "center",
                          justifyContent: "center",
                          width: "24px",
                          height: "24px",
                          marginTop: "2px",
                          borderRadius: "9999px",
                          backgroundColor: "#fff1f0",
                          color: tokens.rain600,
                        }}
                      >
                        <Check size={14} />
                      </span>

                      <span
                        style={{
                          fontSize: "15.68px",
                          lineHeight: 1.5,
                          color: tokens.ink700,
                        }}
                      >
                        {highlight}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* =================================================
                RIGHT STICKY STATS CARD

                IMPORTANT:
                Sticky is applied to the ASIDE itself.
            ================================================= */}

            <aside
              className="product-detail-sidebar"
              style={{
                alignSelf: "start",
                position: "sticky",
                top: "112px",
              }}
            >
              <div
                style={{
                  overflow: "hidden",
                  borderRadius: "24px",
                  border:
                    `1px solid ${tokens.ink100}`,
                  backgroundColor: tokens.ink950,
                  padding: "32px",
                  color: "#ffffff",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent:
                      "space-between",
                  }}
                >
                  <span
                    style={{
                      border:
                        "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "9999px",
                      padding: "4px 12px",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: tokens.ink200,
                    }}
                  >
                    {product.status}
                  </span>

                  <span
                    style={{
                      fontSize: "14px",
                      color: tokens.ink300,
                    }}
                  >
                    {product.industry}
                  </span>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(2, minmax(0,1fr))",
                    gap: "24px",
                    marginTop: "32px",
                  }}
                >
                  {product.stats.map(
                    (stat) => (
                      <div key={stat.label}>
                        <div
                          style={{
                            fontFamily:
                              "'Space Grotesk', 'Inter', system-ui, sans-serif",
                            fontSize: "30px",
                            lineHeight: 1.2,
                            fontWeight: 600,
                            color: "#ffffff",
                          }}
                        >
                          {stat.value}
                        </div>

                        <div
                          style={{
                            marginTop: "4px",
                            fontSize: "14px",
                            color: tokens.ink300,
                          }}
                        >
                          {stat.label}
                        </div>
                      </div>
                    )
                  )}
                </div>

                <a
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "32px",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#f78b85",
                    textDecoration: "none",
                  }}
                >
                  Talk to us about {product.title}

                  <ArrowRight size={16} />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =====================================================
          MORE PRODUCTS
      ===================================================== */}

      <section
        style={{
          padding: "80px 0 112px",
          backgroundColor: tokens.surface,
          color: tokens.ink800,
        }}
      >
        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <div style={{ maxWidth: "672px" }}>
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
                    width: "6px",
                    height: "6px",
                    borderRadius: "9999px",
                    backgroundColor:
                      "currentColor",
                  }}
                />

                More from Raintels
              </span>
            </div>

            <div
              data-reveal
              data-reveal-delay="80"
            >
              <h2
                style={{
                  margin: "16px 0 0",
                  fontFamily:
                    "'Space Grotesk', 'Inter', system-ui, sans-serif",
                  fontSize:
                    "clamp(1.875rem, 4vw, 2.7rem)",
                  lineHeight: 1.1,
                  fontWeight: 600,
                  color: tokens.ink900,
                }}
              >
                Explore other products.
              </h2>
            </div>
          </div>

          <div
            className="detail-products-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "24px",
              marginTop: "48px",
            }}
          >
            {relatedProducts
              .slice(0, 3)
              .map((item, index) => (
                <ExploreProductCard
                  key={item.title}
                  product={item}
                  delay={index * 80}
                />
              ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT CTA
      ===================================================== */}

      <ProductCTA product={product} />

      {/* =====================================================
          EXISTING FOOTER
      ===================================================== */}

      <CTAAndFooter showCTA={false} />

      <style>{`
        .product-detail-primary:hover {
          background-color: ${tokens.rain600} !important;
          transform: translateY(-2px);
          box-shadow:
            0 10px 28px -6px rgba(228,35,27,0.7) !important;
        }

        .product-detail-primary:hover
        .product-detail-primary-arrow {
          transform: translateX(4px);
        }

        .detail-product-card:hover {
          transform: translateY(-4px);
          box-shadow:
            0 24px 60px -30px rgba(16,18,24,0.35);
        }

        .detail-product-card:hover
        .detail-product-card-glow {
          background-color:
            rgba(228,35,27,0.4) !important;
        }

        /* ================================================
           STICKY SIDEBAR
           Only enable sticky behavior on desktop.
        ================================================ */

        @media (min-width: 1024px) {
          .product-detail-sidebar {
            position: sticky !important;
            top: 112px !important;
            align-self: start !important;
          }
        }

        @media (max-width: 1023px) {
          .product-detail-sidebar {
            position: static !important;
          }
        }

        @media (min-width: 640px) {
          .product-highlights-grid {
            grid-template-columns:
              repeat(2, minmax(0,1fr)) !important;
          }

          .detail-products-grid {
            grid-template-columns:
              repeat(2, minmax(0,1fr)) !important;
          }
        }

        @media (min-width: 1024px) {
          .product-detail-grid {
            grid-template-columns:
              1.2fr 0.8fr !important;
            gap: 64px !important;
          }

          .detail-products-grid {
            grid-template-columns:
              repeat(3, minmax(0,1fr)) !important;
          }
        }

        @media (min-width: 768px) {
          .product-detail-container {
            padding-top: 16px;
            padding-bottom: 16px;
          }
        }
      `}</style>
    </div>
  );
}