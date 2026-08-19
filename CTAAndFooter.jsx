import React from "react";
import { Mail, MapPin, ArrowRight, ArrowUpRight } from "lucide-react";

const tokens = {
  ink950: "#0c0d10",
  ink900: "#14161a",
  ink500: "#6b7078",
  ink400: "#8b8f97",
  ink300: "#a9adb4",
  ink200: "#c6c9ce",
  ink100: "#e7e8ea",
  rain500: "#e4231b",
  rain400: "#ef5a52",
  rain600: "#c81810",
  blue500: "#2e6be6",
};

const servicesLinks = [
  "Web & Enterprise Development",
  "Mobile Development",
  "Cloud & DevOps",
  "Emerging Technology",
  "Technology Consulting",
  "Quality Engineering",
];

const productsLinks = [
  "Cardio Touch",
  "Konnect-E",
  "Fincast",
  "Dewpas",
  "Carat.ai",
  "CareProto",
];

const companyLinks = ["About", "Industries", "Engagement Models", "Blog", "Contact"];

function RaintelsLogo({ size = 36, color = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M24 3.5c1.3 0 2.4.9 2.7 2.1l.5 2a15.6 15.6 0 0 1 3.7 1.5l1.8-1c1.1-.6 2.5-.4 3.4.5s1.1 2.3.5 3.4l-1 1.8c.7 1.2 1.2 2.4 1.5 3.7l2 .5c1.2.3 2.1 1.4 2.1 2.7v3.6c0 1.3-.9 2.4-2.1 2.7l-2 .5a15.6 15.6 0 0 1-1.5 3.7l1 1.8c.6 1.1.4 2.5-.5 3.4s-2.3 1.1-3.4.5l-1.8-1c-1.2.7-2.4 1.2-3.7 1.5l-.5 2A2.75 2.75 0 0 1 24 44.5a2.75 2.75 0 0 1-2.7-2.1l-.5-2a15.6 15.6 0 0 1-3.7-1.5l-1.8 1c-1.1.6-2.5.4-3.4-.5s-1.1-2.3-.5-3.4l1-1.8a15.6 15.6 0 0 1-1.5-3.7l-2-.5A2.75 2.75 0 0 1 3.5 27.8v-3.6c0-1.3.9-2.4 2.1-2.7l2-.5c.3-1.3.8-2.5 1.5-3.7l-1-1.8c-.6-1.1-.4-2.5.5-3.4s2.3-1.1 3.4-.5l1.8 1c1.2-.7 2.4-1.2 3.7-1.5l.5-2A2.75 2.75 0 0 1 24 3.5Z"
        stroke={color}
        strokeWidth="2.4"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <path
        d="M24 15c3.6 4.2 6 7.5 6 10.6a6 6 0 1 1-12 0C18 22.5 20.4 19.2 24 15Z"
        fill={color}
      />
      <circle cx="24" cy="26" r="2.6" fill={tokens.rain500} />
    </svg>
  );
}

function PrimaryButton({ children, href = "#" }) {
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
        borderRadius: "9999px",
        fontWeight: 500,
        fontSize: "16px",
        height: "52px",
        padding: "0 28px",
        backgroundColor: hovered ? tokens.rain600 : tokens.rain500,
        color: "#ffffff",
        textDecoration: "none",
        boxShadow: hovered
          ? "0 10px 28px -6px rgba(228,35,27,0.7)"
          : "0 6px 20px -6px rgba(228,35,27,0.6)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 200ms cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {children}
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

function SecondaryButton({ children, href = "#" }) {
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
        borderRadius: "9999px",
        height: "52px",
        padding: "0 28px",
        fontSize: "16px",
        fontWeight: 500,
        color: "#ffffff",
        textDecoration: "none",
        border: "1px solid rgba(255,255,255,0.15)",
        backgroundColor: hovered ? "rgba(255,255,255,0.1)" : "transparent",
        transition: "background-color 200ms ease",
      }}
    >
      {children}
      <ArrowRight size={16} />
    </a>
  );
}

function FooterLink({ children, href = "#" }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: "14px",
        color: hovered ? "#ffffff" : tokens.ink300,
        textDecoration: "none",
        transition: "color 200ms ease",
      }}
    >
      {children}
    </a>
  );
}

function SocialLink({ children, href = "#" }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        fontSize: "14px",
        color: hovered ? "#ffffff" : tokens.ink300,
        textDecoration: "none",
        transition: "color 200ms ease",
      }}
    >
      {children}
      <ArrowUpRight
        size={14}
        style={{
          transform: hovered ? "translate(2px, -2px)" : "translate(0, 0)",
          transition: "transform 200ms ease",
        }}
      />
    </a>
  );
}

export default function CTAAndFooter() {
  return (
    <div
      style={{
        backgroundColor: tokens.ink950,
        fontFamily: "'Inter', system-ui, sans-serif",
        color: tokens.ink200,
      }}
    >
      {/* CTA Section */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "96px 0 128px",
          textAlign: "center",
          color: "#ffffff",
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
              bottom: "-160px",
              right: "-80px",
              height: "384px",
              width: "384px",
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
            Let&apos;s build
          </span>

          <h2
            style={{
              margin: "24px auto 0",
              maxWidth: "768px",
              fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif",
              fontWeight: 600,
              lineHeight: 1.08,
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              color: "#ffffff",
            }}
          >
            Ready to build a frictionless enterprise?
          </h2>

          <p
            style={{
              margin: "24px auto 0",
              maxWidth: "576px",
              fontSize: "18px",
              lineHeight: 1.6,
              color: tokens.ink300,
            }}
          >
            Tell us where you&apos;re trying to get to. We&apos;ll bring the
            strategy, engineering and honesty to help you get there.
          </p>

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
              <PrimaryButton href="/contact">
                Talk to a strategist
              </PrimaryButton>

              <SecondaryButton href="mailto:hello@raintels.com">
                hello@raintels.com
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            pointerEvents: "none",
            position: "absolute",
            left: "-160px",
            top: 0,
            height: "384px",
            width: "384px",
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
            height: "384px",
            width: "384px",
            borderRadius: "9999px",
            backgroundColor: "rgba(46,107,230,0.1)",
            filter: "blur(64px)",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "64px 24px 0",
          }}
        >
          <div
            className="footer-grid"
            style={{
              display: "grid",
              gap: "48px",
              gridTemplateColumns: "1fr",
            }}
          >
            <div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#ffffff",
                }}
              >
                <RaintelsLogo color="#ffffff" />
                <span
                  style={{
                    fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif",
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                  }}
                >
                  raintels
                  <span style={{ color: tokens.rain500 }}>.</span>
                </span>
              </span>

              <p
                style={{
                  marginTop: "20px",
                  maxWidth: "320px",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: tokens.ink300,
                }}
              >
                Your Trusted CTO. A strategic technology partner delivering
                high-quality software that steers enterprises toward the
                future.
              </p>

              <div
                style={{
                  marginTop: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
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
                    color: tokens.ink300,
                    margin: 0,
                  }}
                >
                  <MapPin size={16} color={tokens.rain400} />
                  Thiruvananthapuram, India
                </p>
              </div>
            </div>

            <div
              className="footer-columns"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0,1fr))",
                gap: "32px",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#ffffff",
                    margin: 0,
                  }}
                >
                  Services
                </h3>
                <ul
                  style={{
                    marginTop: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    listStyle: "none",
                    padding: 0,
                  }}
                >
                  {servicesLinks.map((label) => (
                    <li key={label}>
                      <FooterLink>{label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#ffffff",
                    margin: 0,
                  }}
                >
                  Products
                </h3>
                <ul
                  style={{
                    marginTop: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    listStyle: "none",
                    padding: 0,
                  }}
                >
                  {productsLinks.map((label) => (
                    <li key={label}>
                      <FooterLink>{label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#ffffff",
                    margin: 0,
                  }}
                >
                  Company
                </h3>
                <ul
                  style={{
                    marginTop: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    listStyle: "none",
                    padding: 0,
                  }}
                >
                  {companyLinks.map((label) => (
                    <li key={label}>
                      <FooterLink>{label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "56px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "24px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              padding: "32px 0",
            }}
            className="footer-bottom"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
              className="footer-bottom-left"
            >
              <p style={{ fontSize: "14px", color: tokens.ink400, margin: 0 }}>
                © 2026 Raintels Technologies Pvt. Ltd. All rights reserved.
              </p>
              <div
                style={{
                  display: "inline-flex",
                  width: "fit-content",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "6px",
                  backgroundColor: "rgba(255,255,255,0.95)",
                  padding: "6px 10px",
                }}
              >
                <RaintelsLogo size={18} color={tokens.ink900} />
                <span
                  style={{
                    fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: tokens.ink900,
                  }}
                >
                  raintels
                  <span style={{ color: tokens.rain500 }}>.</span>
                </span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <SocialLink href="https://in.linkedin.com/company/raintels">
                LinkedIn
              </SocialLink>
              <SocialLink href="https://www.facebook.com/raintels">
                Facebook
              </SocialLink>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @media (min-width: 1024px) {
          .footer-grid { grid-template-columns: 1.4fr 2fr !important; }
        }
        @media (min-width: 640px) {
          .footer-columns { grid-template-columns: repeat(3, minmax(0,1fr)) !important; }
        }
        @media (min-width: 640px) {
          .footer-bottom { flex-direction: row !important; align-items: center !important; }
          .footer-bottom-left { flex-direction: row !important; align-items: center !important; }
        }
      `}</style>
    </div>
  );
}