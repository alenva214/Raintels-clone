import React from "react";
import {
  HeartPulse,
  BrainCircuit,
  LineChart,
  ClipboardCheck,
  Gem,
  Stethoscope,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const tokens = {
  ink950: "#0c0d10",
  ink900: "#14161a",
  ink800: "#24262b",
  ink500: "#6b7078",
  ink300: "#a9adb4",
  ink200: "#c6c9ce",
  ink100: "#e7e8ea",
  rain500: "#e4231b",
  rain300: "#f29a95",
  rain600: "#c81810",
  bgSurface: "#f7f7f8",
};

const products = [
  {
    icon: HeartPulse,
    name: "Cardio Touch",
    tag: "Healthcare Analytics",
    badge: "In Market",
    headline: "Cath-lab reporting, designed by cardiologists",
    description:
      "A web-based cath-lab reporting and analytical platform that streamlines report generation and statistical research for cardiology practices.",
    href: "/products/cardio-touch",
  },
  {
    icon: BrainCircuit,
    name: "Konnect-E",
    tag: "Knowledge Engagement",
    badge: "Live",
    headline: "Turn organisational knowledge into a growth engine",
    description:
      "A smart knowledge base that connects your organisation's collective know-how so teams and customers find the right answer fast.",
    href: "/products/konnect-e",
  },
  {
    icon: LineChart,
    name: "Fincast",
    tag: "Financial Intelligence",
    badge: "Live",
    headline: "Forecasting that empowers financial decisions",
    description:
      "A financial forecasting and management platform that brings clarity and foresight to planning.",
    href: "/products/fincast",
  },
  {
    icon: ClipboardCheck,
    name: "Dewpas",
    tag: "Audit & Performance",
    badge: "Enterprise",
    headline: "Dynamic audit and performance management",
    description:
      "A dynamic audit and performance management system that keeps oversight continuous rather than occasional.",
    href: "/products/dewpas",
  },
  {
    icon: Gem,
    name: "Carat.ai",
    tag: "Vertical ERP",
    badge: "In Market",
    headline: "ERP built for the jewellery business",
    description:
      "A purpose-built ERP that understands the realities of running a jewellery business, end to end.",
    href: "/products/carat-ai",
  },
  {
    icon: Stethoscope,
    name: "CareProto",
    tag: "Health Systems",
    badge: "Enterprise",
    headline: "Digital transformation for hospitals",
    description:
      "A platform that helps hospitals digitise operations and elevate the standard of patient care.",
    href: "/products/careproto",
  },
];

function AllProductsButton({ href = "/products" }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        flexShrink: 0,
        height: "44px",
        padding: "0 20px",
        borderRadius: "9999px",
        fontSize: "0.95rem",
        fontWeight: 500,
        textDecoration: "none",
        border: `1px solid ${hovered ? tokens.ink900 : tokens.ink100}`,
        backgroundColor: hovered ? tokens.ink100 : "transparent",
        color: tokens.ink800,
        transition: "all 200ms ease",
      }}
    >
      All products
      <ArrowRight
        size={16}
        style={{
          transform: hovered ? "translateX(4px)" : "translateX(0)",
          transition: "transform 200ms ease",
        }}
      />
    </a>
  );
}

function ProductCard({ icon: Icon, name, tag, badge, headline, description, href }) {
  const [hovered, setHovered] = React.useState(false);
  const [linkHovered, setLinkHovered] = React.useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        borderRadius: "16px",
        border: `1px solid ${tokens.ink100}`,
        backgroundColor: "#ffffff",
        textDecoration: "none",
        color: "inherit",
        height: "100%",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 24px 60px -30px rgba(16,18,24,0.35)"
          : "0 0 0 rgba(0,0,0,0)",
        transition: "transform 300ms ease, box-shadow 300ms ease",
      }}
    >
      {/* header */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: tokens.ink900,
          padding: "28px",
        }}
      >
        <div
          style={{
            pointerEvents: "none",
            position: "absolute",
            right: "-24px",
            top: "-32px",
            height: "112px",
            width: "112px",
            borderRadius: "9999px",
            backgroundColor: hovered
              ? "rgba(228,35,27,0.40)"
              : "rgba(228,35,27,0.25)",
            filter: "blur(40px)",
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
              backdropFilter: "blur(4px)",
            }}
          >
            <Icon size={24} strokeWidth={2} aria-hidden="true" />
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
            {badge}
          </span>
        </div>
        <h3
          style={{
            position: "relative",
            marginTop: "24px",
            fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#ffffff",
          }}
        >
          {name}
        </h3>
        <p
          style={{
            position: "relative",
            marginTop: "4px",
            fontSize: "14px",
            color: tokens.rain300,
          }}
        >
          {tag}
        </p>
      </div>

      {/* body */}
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
            fontSize: "0.95rem",
            fontWeight: 500,
            color: tokens.ink800,
            margin: 0,
          }}
        >
          {headline}
        </p>
        <p
          style={{
            marginTop: "12px",
            flex: 1,
            fontSize: "14px",
            lineHeight: 1.6,
            color: tokens.ink500,
          }}
        >
          {description}
        </p>
        <span
          onMouseEnter={() => setLinkHovered(true)}
          onMouseLeave={() => setLinkHovered(false)}
          style={{
            marginTop: "24px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "14px",
            fontWeight: 500,
            color: tokens.ink900,
          }}
        >
          View product
          <ArrowUpRight
            size={16}
            style={{
              transform: hovered
                ? "translate(2px, -2px)"
                : "translate(0, 0)",
              transition: "transform 200ms ease",
            }}
          />
        </span>
      </div>
    </a>
  );
}

export default function ProductsSection() {
  return (
    <section
      style={{
        padding: "80px 0",
        backgroundColor: tokens.bgSurface,
        color: tokens.ink900,
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
        <div
          className="products-header"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <div style={{ maxWidth: "640px" }}>
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
              Built by Raintels
            </span>
            <h2
              style={{
                marginTop: "16px",
                fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif",
                fontSize: "clamp(1.875rem, 4vw, 2.7rem)",
                fontWeight: 600,
                lineHeight: 1.1,
                color: tokens.ink900,
              }}
            >
              Products already at work{" "}
              <span
                style={{
                  backgroundImage: `linear-gradient(90deg, ${tokens.rain500}, #a06bd6, #2e6be6)`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                in the field.
              </span>
            </h2>
            <p
              style={{
                marginTop: "20px",
                fontSize: "18px",
                lineHeight: 1.6,
                color: tokens.ink500,
              }}
            >
              Platforms we&apos;ve engineered for healthcare, finance, retail
              and the public sector — proof of the standard we bring to your
              build.
            </p>
          </div>

          <div>
            <AllProductsButton />
          </div>
        </div>

        <div style={{ marginTop: "56px" }}>
          <div
            className="products-grid"
            style={{
              display: "grid",
              gap: "24px",
              gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
            }}
          >
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .products-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (min-width: 1024px) {
          .products-grid { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
          .products-header { flex-direction: row !important; align-items: flex-end !important; }
        }
      `}</style>
    </section>
  );
}