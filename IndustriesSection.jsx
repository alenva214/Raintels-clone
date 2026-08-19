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
} from "lucide-react";

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
  ink500: "#6b7078",
  ink300: "#a9adb4",
  ink100: "#e7e8ea",
  ink50: "#f2f3f4",
  rain500: "#e4231b",
  rain400: "#ef5a52",
  rain600: "#c81810",
  bgSurface: "#f7f7f8",
};

function IndustryCard({ icon: Icon, title, description }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        height: "100%",
        overflow: "hidden",
        padding: "32px",
        backgroundColor: hovered ? tokens.ink950 : "#ffffff",
        transition: "background-color 300ms ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span
          style={{
            display: "flex",
            height: "44px",
            width: "44px",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
            backgroundColor: hovered ? "rgba(255,255,255,0.1)" : tokens.ink50,
            color: hovered ? tokens.rain400 : tokens.ink900,
            transition: "background-color 300ms ease, color 300ms ease",
            flexShrink: 0,
          }}
        >
          <Icon size={20} strokeWidth={2} aria-hidden="true" />
        </span>
        <h3
          style={{
            fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif",
            fontSize: "18px",
            fontWeight: 600,
            color: hovered ? "#ffffff" : tokens.ink900,
            transition: "color 300ms ease",
            margin: 0,
          }}
        >
          {title}
        </h3>
      </div>
      <p
        style={{
          marginTop: "16px",
          fontSize: "14px",
          lineHeight: 1.6,
          color: hovered ? tokens.ink300 : tokens.ink500,
          transition: "color 300ms ease",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default function IndustriesSection() {
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
            Domain experience
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
            Nine industries, deeply understood.
          </h2>
          <p
            style={{
              marginTop: "20px",
              fontSize: "18px",
              lineHeight: 1.6,
              color: tokens.ink500,
            }}
          >
            We bring context, not just code — with delivery experience
            across the sectors where software has to work the first time.
          </p>
        </div>

        <div style={{ marginTop: "56px" }}>
          <div
            className="industries-grid"
            style={{
              display: "grid",
              gap: "1px",
              overflow: "hidden",
              borderRadius: "16px",
              border: `1px solid ${tokens.ink100}`,
              backgroundColor: tokens.ink100,
              gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
            }}
          >
            {industries.map((industry) => (
              <IndustryCard key={industry.title} {...industry} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .industries-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (min-width: 1024px) {
          .industries-grid { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
        }
      `}</style>
    </section>
  );
}