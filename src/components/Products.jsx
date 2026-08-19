import React from "react";
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
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

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
    delay: 0,
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
    delay: 80,
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
    delay: 160,
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
    delay: 0,
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
    delay: 80,
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
    delay: 160,
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
    delay: 0,
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
    delay: 80,
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
    delay: 160,
  },
];

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

  blue500: "#2e6be6",

  surface: "#f7f7f8",
};

/* ---------------------------------------------------------
   PRODUCT CARD
--------------------------------------------------------- */

function ProductCard({
  title,
  category,
  status,
  description,
  tagline,
  href,
  icon: Icon,
  delay,
}) {
  return (
    <div
      data-reveal
      data-reveal-delay={delay}
      style={{
        height: "100%",
      }}
    >
      <a
        href={href}
        className="product-card"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          minHeight: "470px",
          overflow: "hidden",
          borderRadius: "16px",
          border: `1px solid ${tokens.ink100}`,
          backgroundColor: "#ffffff",
          textDecoration: "none",
          color: tokens.ink800,
          transition:
            "transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease",
        }}
      >
        {/* Top dark section */}
        <div
          className="product-card-top"
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "28px",
            backgroundColor: tokens.ink950,
          }}
        >
          {/* Red glow */}
          <div
            className="product-card-glow"
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
            {/* Icon */}
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
                backdropFilter: "blur(4px)",
              }}
            >
              <Icon size={24} strokeWidth={2} aria-hidden="true" />
            </span>

            {/* Status */}
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
              {status}
            </span>
          </div>

          {/* Title */}
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
            {title}
          </h3>

          {/* Category */}
          <p
            style={{
              position: "relative",
              margin: "4px 0 0",
              fontSize: "14px",
              color: "#ef5a52",
            }}
          >
            {category}
          </p>
        </div>

        {/* Bottom content */}
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
            {tagline}
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
            {description}
          </p>

          <span
            className="product-view-link"
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
            <ArrowUpRight
              className="product-arrow"
              size={16}
              strokeWidth={2}
              style={{
                transition:
                  "transform 200ms ease",
              }}
            />
          </span>
        </div>
      </a>
    </div>
  );
}

/* ---------------------------------------------------------
   PRODUCT CTA
--------------------------------------------------------- */

function ProductCTA() {
  const [primaryHovered, setPrimaryHovered] = React.useState(false);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "96px 0 128px",
        backgroundColor: tokens.ink950,
        color: "#ffffff",
        textAlign: "center",
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
        }}
      >
        {/* Have an idea */}
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

            Have an idea?
          </span>
        </div>

        {/* Heading */}
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
            Your product could be the next one here.
          </h2>
        </div>

        {/* Description */}
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
            Bring us the problem. We&apos;ll bring the strategy, engineering
            and ownership to turn it into a platform that lasts.
          </p>
        </div>

        {/* Buttons */}
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
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                height: "52px",
                padding: "0 28px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "background-color 200ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
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

/* ---------------------------------------------------------
   FOOTER
--------------------------------------------------------- */

function FooterLink({ children, href = "#" }) {
  return (
    <a
      href={href}
      style={{
        fontSize: "14px",
        color: tokens.ink300,
        textDecoration: "none",
        transition: "color 200ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#ffffff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = tokens.ink300;
      }}
    >
      {children}
    </a>
  );
}

function Footer() {
  const services = [
    ["Web & Enterprise Development", "/services/web-enterprise-development"],
    ["Mobile Development", "/services/mobile-development"],
    ["Cloud & DevOps", "/services/cloud-devops"],
    ["Emerging Technology", "/services/emerging-technology"],
    ["Technology Consulting", "/services/technology-consulting"],
    ["Quality Engineering", "/services/quality-engineering"],
  ];

  const productsFooter = [
    ["Cardio Touch", "/products/cardio-touch"],
    ["Konnect-E", "/products/konnect-e"],
    ["Fincast", "/products/fincast"],
    ["Dewpas", "/products/dewpas"],
    ["Carat.ai", "/products/carat-ai"],
    ["CareProto", "/products/careproto"],
  ];

  const company = [
    ["About", "/company"],
    ["Industries", "/industries"],
    ["Engagement Models", "/engagement"],
    ["Blog", "/blog"],
    ["Contact", "/contact"],
  ];

  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: tokens.ink950,
        color: tokens.ink200,
      }}
    >
      {/* Background glow */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          left: "-160px",
          top: 0,
          width: "384px",
          height: "384px",
          borderRadius: "9999px",
          backgroundColor: "rgba(228,35,27,0.1)",
          filter: "blur(64px)",
        }}
      />

      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          right: "-160px",
          bottom: 0,
          width: "384px",
          height: "384px",
          borderRadius: "9999px",
          backgroundColor: "rgba(46,107,230,0.1)",
          filter: "blur(64px)",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "64px 24px 0",
        }}
      >
        <div
          className="products-footer-grid"
          style={{
            display: "grid",
            gap: "48px",
            gridTemplateColumns: "1fr",
          }}
        >
          {/* Brand */}
          <div>
            <a
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                }}
              >
                <svg
                  viewBox="0 0 48 48"
                  width="36"
                  height="36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 3.5c1.3 0 2.4.9 2.7 2.1l.5 2a15.6 15.6 0 0 1 3.7 1.5l1.8-1c1.1-.6 2.5-.4 3.4.5s1.1 2.3.5 3.4l-1 1.8c.7 1.2 1.2 2.4 1.5 3.7l2 .5c1.2.3 2.1 1.4 2.1 2.7v3.6c0 1.3-.9 2.4-2.1 2.7l-2 .5a15.6 15.6 0 0 1-1.5 3.7l1 1.8c.6 1.1.4 2.5-.5 3.4s-2.3 1.1-3.4.5l-1.8-1c-1.2.7-2.4 1.2-3.7 1.5l-.5 2A2.75 2.75 0 0 1 24 44.5a2.75 2.75 0 0 1-2.7-2.1l-.5-2a15.6 15.6 0 0 1-3.7-1.5l-1.8 1c-1.1.6-2.5.4-3.4-.5s-1.1-2.3-.5-3.4l1-1.8a15.6 15.6 0 0 1-1.5-3.7l-2-.5A2.75 2.75 0 0 1 3.5 27.8v-3.6c0-1.3.9-2.4 2.1-2.7l2-.5c.3-1.3.8-2.5 1.5-3.7l-1-1.8c-.6-1.1-.4-2.5.5-3.4s2.3-1.1 3.4-.5l1.8 1c1.2-.7 2.4-1.2 3.7-1.5l.5-2A2.75 2.75 0 0 1 24 3.5Z"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinejoin="round"
                    opacity="0.9"
                  />
                  <path
                    d="M24 15c3.6 4.2 6 7.5 6 10.6a6 6 0 1 1-12 0C18 22.5 20.4 19.2 24 15Z"
                    fill="currentColor"
                  />
                  <circle
                    cx="24"
                    cy="26"
                    r="2.6"
                    fill={tokens.rain500}
                  />
                </svg>
              </span>

              <span
                style={{
                  fontFamily:
                    "'Space Grotesk', 'Inter', system-ui, sans-serif",
                  fontSize: "1.35rem",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
              >
                raintels
                <span style={{ color: tokens.rain500 }}>.</span>
              </span>
            </a>

            <p
              style={{
                maxWidth: "320px",
                margin: "20px 0 0",
                fontSize: "15px",
                lineHeight: 1.6,
                color: tokens.ink300,
              }}
            >
              Your Trusted CTO. A strategic technology partner delivering
              high-quality software that steers enterprises toward the future.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginTop: "24px",
                fontSize: "14px",
              }}
            >
              <a
                href="mailto:hello@raintels.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: tokens.ink300,
                  textDecoration: "none",
                }}
              >
                <Mail size={16} color={tokens.rain400} />
                hello@raintels.com
              </a>

              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  margin: 0,
                  color: tokens.ink300,
                }}
              >
                <MapPin size={16} color={tokens.rain400} />
                Thiruvananthapuram, India
              </p>
            </div>
          </div>

          {/* Footer columns */}
          <div
            className="products-footer-columns"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0,1fr))",
              gap: "32px",
            }}
          >
            <div>
              <h3
                style={{
                  margin: 0,
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#ffffff",
                }}
              >
                Services
              </h3>

              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  margin: "16px 0 0",
                  padding: 0,
                  listStyle: "none",
                }}
              >
                {services.map(([label, href]) => (
                  <li key={label}>
                    <FooterLink href={href}>{label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                style={{
                  margin: 0,
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#ffffff",
                }}
              >
                Products
              </h3>

              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  margin: "16px 0 0",
                  padding: 0,
                  listStyle: "none",
                }}
              >
                {productsFooter.map(([label, href]) => (
                  <li key={label}>
                    <FooterLink href={href}>{label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                style={{
                  margin: 0,
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#ffffff",
                }}
              >
                Company
              </h3>

              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  margin: "16px 0 0",
                  padding: 0,
                  listStyle: "none",
                }}
              >
                {company.map(([label, href]) => (
                  <li key={label}>
                    <FooterLink href={href}>{label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div
          className="products-footer-bottom"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "24px",
            marginTop: "56px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            padding: "32px 0",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              color: tokens.ink400,
            }}
          >
            © 2026 Raintels Technologies Pvt. Ltd. All rights reserved.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <a
              href="https://in.linkedin.com/company/raintels"
              target="_blank"
              rel="noreferrer noopener"
              style={{
                fontSize: "14px",
                color: tokens.ink300,
                textDecoration: "none",
              }}
            >
              LinkedIn
            </a>

            <a
              href="https://www.facebook.com/raintels"
              target="_blank"
              rel="noreferrer noopener"
              style={{
                fontSize: "14px",
                color: tokens.ink300,
                textDecoration: "none",
              }}
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 60px -30px rgba(16,18,24,0.35);
        }

        .product-card:hover .product-card-glow {
          background-color: rgba(228,35,27,0.4) !important;
        }

        .product-card:hover .product-arrow {
          transform: translate(2px, -2px);
        }

        @media (min-width: 640px) {
          .products-footer-columns {
            grid-template-columns: repeat(3, minmax(0,1fr)) !important;
          }

          .products-footer-bottom {
            flex-direction: row !important;
            align-items: center !important;
          }
        }

        @media (min-width: 1024px) {
          .products-footer-grid {
            grid-template-columns: 1.4fr 2fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

/* ---------------------------------------------------------
   PRODUCTS PAGE
--------------------------------------------------------- */

export default function Products() {
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
        {/* Exact original background effects */}
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
              width: "320px",
              height: "320px",
              borderRadius: "9999px",
              backgroundColor: "rgba(228,35,27,0.06)",
              filter: "blur(48px)",
            }}
          />
        </div>

        <div
          className="products-container"
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1160px",
            margin: "0 auto",
            padding: "0 24px",
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

            <ArrowRight
              size={14}
              style={{
                color: tokens.ink400,
              }}
            />

            <span style={{ color: tokens.ink600 }}>Products</span>
          </nav>

          <div style={{ maxWidth: "768px" }}>
            {/* Eyebrow */}
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

                Products
              </span>
            </div>

            {/* Heading */}
            <div data-reveal data-reveal-delay="80">
              <h1
                style={{
                  margin: "20px 0 0",
                  fontFamily:
                    "'Space Grotesk', 'Inter', system-ui, sans-serif",
                  fontSize: "clamp(2.25rem, 5vw, 3.4rem)",
                  fontWeight: 600,
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                  color: tokens.ink900,
                }}
              >
                Platforms we&apos;ve built,{" "}
                <span className="text-gradient-rain">
                  solving real problems.
                </span>
              </h1>
            </div>

            {/* Description */}
            <div data-reveal data-reveal-delay="160">
              <p
                style={{
                  margin: "24px 0 0",
                  fontSize: "18px",
                  lineHeight: 1.6,
                  color: tokens.ink500,
                }}
              >
                An intelligent layer of applications transforming business
                operations — from cath-lab reporting to knowledge engagement
                and vertical ERP.
              </p>
            </div>

            {/* Hero button */}
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
                  className="product-hero-button"
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
                  Build your product
                  <ArrowRight
                    className="product-hero-arrow"
                    size={16}
                    style={{
                      transition: "transform 200ms ease",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS — ONLY THE 9 CARDS
      ===================================================== */}

      <section
        style={{
          padding: "80px 0 112px",
          backgroundColor: tokens.surface,
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
            className="products-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "24px",
            }}
          >
            {products.map((product) => (
              <ProductCard
                key={product.title}
                {...product}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS CTA
      ===================================================== */}

      <ProductCTA />

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

      <style>{`
        @media (min-width: 640px) {
          .products-grid {
            grid-template-columns: repeat(2, minmax(0,1fr)) !important;
          }
        }

        @media (min-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(3, minmax(0,1fr)) !important;
          }
        }

        @media (min-width: 768px) {
          .products-container {
            padding-top: 16px;
            padding-bottom: 16px;
          }
        }

        .product-hero-button:hover {
          background-color: #c91d16 !important;
          transform: translateY(-2px);
          box-shadow:
            0 10px 28px -6px rgba(228,35,27,0.7) !important;
        }

        .product-hero-button:hover .product-hero-arrow {
          transform: translateX(4px);
        }
      `}</style>
    </div>
  );
}