import React from "react";

const tokens = {
  ink950: "#0c0d10",
  ink300: "#a9adb4",
  rain500: "#e4231b",
  rain400: "#ef5a52",
  blue500: "#2e6be6",
};

const stats = [
  { value: "8+", label: "Years building enterprise software" },
  { value: "20+", label: "Products & platforms shipped" },
  { value: "9", label: "Industries served" },
  { value: "100%", label: "Focus on outcomes, not billable hours" },
];

export default function StatsSection() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: tokens.ink950,
        padding: "80px 0",
        color: "#ffffff",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      {/* glow decorations */}
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
            left: "-80px",
            top: 0,
            height: "288px",
            width: "288px",
            borderRadius: "9999px",
            backgroundColor: "rgba(228,35,27,0.15)",
            filter: "blur(64px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            height: "320px",
            width: "320px",
            borderRadius: "9999px",
            backgroundColor: "rgba(46,107,230,0.1)",
            filter: "blur(64px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.4,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(80% 80% at 50% 50%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(80% 80% at 50% 50%, black, transparent)",
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
              color: tokens.rain400,
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
            By the numbers
          </span>
          <h2
            style={{
              marginTop: "16px",
              fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif",
              fontSize: "clamp(1.875rem, 4vw, 2.25rem)",
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            Outcomes over hours, since 2017.
          </h2>
        </div>

        <div
          className="stats-grid"
          style={{
            marginTop: "56px",
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            columnGap: "32px",
            rowGap: "48px",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                position: "relative",
                borderLeft: "1px solid rgba(255,255,255,0.1)",
                paddingLeft: "24px",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-1px",
                  top: 0,
                  height: "32px",
                  width: "1px",
                  backgroundColor: tokens.rain500,
                }}
              />
              <div
                style={{
                  fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  color: "#ffffff",
                  fontVariantNumeric: "tabular-nums",
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                }}
              >
                {stat.value}
              </div>
              <p
                style={{
                  marginTop: "12px",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: tokens.ink300,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .stats-grid { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; }
        }
      `}</style>
    </section>
  );
}