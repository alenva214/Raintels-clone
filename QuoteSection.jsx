import React from "react";
import { ArrowRight } from "lucide-react";

const tokens = {
  ink900: "#14161a",
  ink700: "#3a3d44",
  rain500: "#e4231b",
  blue500: "#2e6be6",
};

function WhatDrivesUsLink({ href = "/company" }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "0.95rem",
        fontWeight: 500,
        color: hovered ? "#0a0b0d" : tokens.ink700,
        textDecoration: "none",
        transition: "color 200ms ease",
      }}
    >
      What drives us
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

export default function QuoteSection() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        padding: "96px 0 128px",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <blockquote
          style={{
            margin: "0 auto",
            maxWidth: "896px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              lineHeight: 1.15,
              fontSize: "clamp(1.875rem, 4vw, 3rem)",
              color: tokens.ink900,
            }}
          >
            We don&apos;t bill hours. We take ownership — operating as{" "}
            <span
              style={{
                backgroundImage: `linear-gradient(90deg, ${tokens.rain500}, #a06bd6, ${tokens.blue500})`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              your trusted CTO
            </span>{" "}
            and steering your enterprise toward the future.
          </p>
        </blockquote>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <WhatDrivesUsLink />
        </div>
      </div>
    </section>
  );
}