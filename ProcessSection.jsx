import React from "react";
import { Compass, PencilRuler, Hammer, TrendingUp } from "lucide-react";

const tokens = {
  ink950: "#0c0d10",
  ink900: "#14161a",
  ink500: "#6b7078",
  ink100: "#e7e8ea",
  ink50: "#f2f3f4",
  rain500: "#e4231b",
  rain50: "#fdecec",
  bgSurface: "#f7f7f8",
};

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Discover",
    description:
      "We start with the outcome, not the feature list — mapping the real problem, the constraints, and what success actually looks like.",
  },
  {
    number: "02",
    icon: PencilRuler,
    title: "Architect",
    description:
      "We design a system that fits: the right platforms, data flows, and integrations to serve today and stretch for tomorrow.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Engineer",
    description:
      "We build in focused iterations with quality engineering, cloud, and DevOps woven in — so releases stay calm and dependable.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Evolve",
    description:
      "We stay on as your trusted CTO — measuring, refining, and extending the platform long after the first launch.",
  },
];

function StepCard({ number, icon: Icon, title, description }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        display: "flex",
        flexShrink: 0,
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        borderRadius: "24px",
        border: `1px solid ${hovered ? tokens.ink100 : tokens.ink100}`,
        backgroundColor: "#ffffff",
        padding: "32px",
        width: "min(88vw, 416px)",
        height: "416px",
        transition: "border-color 200ms ease",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          pointerEvents: "none",
          position: "absolute",
          right: "-40px",
          top: "-40px",
          fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif",
          fontSize: "10rem",
          fontWeight: 700,
          lineHeight: 1,
          color: hovered ? tokens.rain50 : tokens.ink50,
          transition: "color 200ms ease",
        }}
      >
        {number}
      </div>

      <div style={{ position: "relative" }}>
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
          <Icon size={24} strokeWidth={2} aria-hidden="true" />
        </span>
      </div>

      <div style={{ position: "relative" }}>
        <h3
          style={{
            fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif",
            fontSize: "1.875rem",
            fontWeight: 600,
            color: tokens.ink900,
            margin: 0,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            marginTop: "16px",
            fontSize: "1.05rem",
            lineHeight: 1.6,
            color: tokens.ink500,
          }}
        >
          {description}
        </p>
      </div>
    </article>
  );
}

export default function ProcessSection() {
  const wrapperRef = React.useRef(null);
  const trackRef = React.useRef(null);
  const [translateX, setTranslateX] = React.useState(0);
  const [isDesktop, setIsDesktop] = React.useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : true
  );

  React.useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  React.useEffect(() => {
    if (!isDesktop) {
      setTranslateX(0);
      return;
    }

    const handleScroll = () => {
      const wrapper = wrapperRef.current;
      const track = trackRef.current;
      if (!wrapper || !track) return;

      const rect = wrapper.getBoundingClientRect();
      const viewportH = window.innerHeight;

      // total vertical scroll distance available for this sticky section
      const scrollableHeight = wrapper.offsetHeight - viewportH;
      if (scrollableHeight <= 0) return;

      // how far we've scrolled into the sticky section, clamped 0..1
      const scrolled = -rect.top;
      const progress = Math.min(
        1,
        Math.max(0, scrolled / scrollableHeight)
      );

      const maxTranslate = Math.max(
        0,
        track.scrollWidth - wrapper.parentElement.clientWidth
      );

      setTranslateX(-progress * maxTranslate);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isDesktop]);

  return (
    <section
      style={{
        backgroundColor: tokens.bgSurface,
        fontFamily: "'Inter', system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        ref={wrapperRef}
        style={{
          height: isDesktop ? "160vh" : "auto",
          position: "relative",
        }}
      >
        <div
          style={{
            position: isDesktop ? "sticky" : "static",
            top: 0,
            height: isDesktop ? "100vh" : "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: isDesktop ? 0 : "80px",
            paddingBottom: isDesktop ? 0 : "80px",
            overflow: "hidden",
          }}
        >
          <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px", width: "100%" }}>
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
                  color: tokens.rain500,
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
                How we partner
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
                Four moves, from first call to lasting platform.
              </h2>
            </div>
          </div>

          <div
            style={{
              marginTop: "56px",
              paddingLeft: "24px",
              paddingRight: "24px",
            }}
          >
            <div
              ref={trackRef}
              style={{
                display: "flex",
                gap: "32px",
                width: "max-content",
                transform: isDesktop ? `translateX(${translateX}px)` : "none",
                transition: "transform 60ms linear",
                overflowX: isDesktop ? "visible" : "auto",
                paddingBottom: isDesktop ? 0 : "8px",
              }}
            >
              {steps.map((step) => (
                <StepCard key={step.number} {...step} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}