import React, { useEffect, useRef, useState } from "react";

const tokens = {
  ink950: "#0c0d10",
  ink300: "#a9adb4",
  rain500: "#e4231b",
  rain400: "#ef5a52",
  blue500: "#2e6be6",
};

const stats = [
  {
    value: 8,
    suffix: "+",
    label: "Years building enterprise software",
  },
  {
    value: 20,
    suffix: "+",
    label: "Products & platforms shipped",
  },
  {
    value: 9,
    suffix: "",
    label: "Industries served",
  },
  {
    value: 100,
    suffix: "%",
    label: "Focus on outcomes, not billable hours",
  },
];

/* =========================================================
   Animated Number
   Based on the original Raintels animation:

   - IntersectionObserver
   - once: true
   - margin: "-15%"
   - duration: 1.6s
   - ease: [0.16, 1, 0.3, 1]
   - Math.round()
   - reduced-motion aware
========================================================= */

function AnimatedNumber({ value, prefix = "", suffix = "" }) {
  const numberRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);

  // Detect when the number enters the viewport
  useEffect(() => {
    const element = numberRef.current;

    if (!element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      setDisplayValue(value);
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          setIsVisible(true);

          // Original uses once: true
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "-15%",
        threshold: 0,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value]);

  // Count from 0 → target
  useEffect(() => {
    if (!isVisible) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      setDisplayValue(value);
      return;
    }

    const duration = 1600;
    const startTime = performance.now();

    let animationFrame;

    // Cubic-bezier approximation of:
    // [0.16, 1, 0.3, 1]
    const ease = (t) => {
      // Ease-out approximation
      return 1 - Math.pow(1 - t, 4);
    };

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      const easedProgress = ease(progress);

      setDisplayValue(
        Math.round(easedProgress * value)
      );

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isVisible, value]);

  return (
    <span ref={numberRef}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export default function ByTheNumbers() {
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
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

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

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        data-reveal
        data-reveal-delay="0"
        style={{
          position: "relative",
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* ===================================================
            HEADING
        ==================================================== */}

        <div style={{ maxWidth: "640px" }}>
          <span
            data-reveal
            data-reveal-delay="0"
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
            data-reveal
            data-reveal-delay="80"
            style={{
              marginTop: "16px",
              fontFamily:
                "'Space Grotesk', 'Inter', system-ui, sans-serif",
              fontSize:
                "clamp(1.875rem, 4vw, 2.25rem)",
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            Outcomes over hours, since 2017.
          </h2>
        </div>

        {/* ===================================================
            STATS
        ==================================================== */}

        <div
          className="stats-grid"
          style={{
            marginTop: "56px",
            display: "grid",
            gridTemplateColumns:
              "repeat(2, minmax(0, 1fr))",
            columnGap: "32px",
            rowGap: "48px",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              data-reveal
              data-reveal-delay="120"
              style={{
                position: "relative",
                borderLeft:
                  "1px solid rgba(255,255,255,0.1)",
                paddingLeft: "24px",
              }}
            >
              {/* Red vertical line */}

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

              {/* =================================================
                  COUNT-UP NUMBER
              ================================================== */}

              <div
                style={{
                  fontFamily:
                    "'Space Grotesk', 'Inter', system-ui, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  color: "#ffffff",
                  fontVariantNumeric: "tabular-nums",
                  fontSize:
                    "clamp(2.5rem, 5vw, 3.5rem)",
                }}
              >
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </div>

              {/* Label */}

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

      {/* =====================================================
          RESPONSIVE GRID
      ====================================================== */}

      <style>{`
        @media (min-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </section>
  );
}