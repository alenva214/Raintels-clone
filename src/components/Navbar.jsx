import { useEffect, useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Code2,
  Smartphone,
  CloudCog,
  Sparkles,
  Compass,
  ShieldCheck,
  HeartPulse,
  Puzzle,
  ChartNoAxesCombined,
  ClipboardCheck,
  Gem,
  Stethoscope,
  FileText,
  Handshake,
  BriefcaseBusiness,
  Truck,
  Landmark,
  ShoppingBag,
  Car,
  Sprout,
  Clapperboard,
  Building2,
} from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

import Logo from "./ui/Logo";
import Button from "./ui/Button";

/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  {
    label: "Services",
    href: "/services",
    mega: "services",
  },
  {
    label: "Products",
    href: "/products",
    mega: "products",
  },
  {
    label: "Industries",
    href: "/industries",
    mega: "industries",
  },
  {
    label: "Company",
    href: "/company",
    mega: "company",
  },
  {
    label: "Engagement",
    href: "/engagement",
  },
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    label: "Web & Enterprise Development",
    href: "/services/web-enterprise-development",
    description: "Systems of record that scale with the business",
    icon: Code2,
  },
  {
    label: "Mobile Development",
    href: "/services/mobile-development",
    description: "Products that live in your customers' pockets",
    icon: Smartphone,
  },
  {
    label: "Cloud & DevOps",
    href: "/services/cloud-devops",
    description: "Infrastructure that stays out of your way",
    icon: CloudCog,
  },
  {
    label: "Emerging Technology",
    href: "/services/emerging-technology",
    description: "New capabilities, applied to real problems",
    icon: Sparkles,
  },
  {
    label: "Technology Consulting",
    href: "/services/technology-consulting",
    description: "Your trusted CTO, on demand",
    icon: Compass,
  },
  {
    label: "Quality Engineering",
    href: "/services/quality-engineering",
    description: "Ship with confidence, not crossed fingers",
    icon: ShieldCheck,
  },
];

/* =========================================================
   PRODUCTS
========================================================= */

const products = [
  {
    label: "Cardio Touch",
    href: "/products/cardio-touch",
    description: "Healthcare Analytics",
    icon: HeartPulse,
  },
  {
    label: "Konnect-E",
    href: "/products/konnect-e",
    description: "Knowledge Engagement",
    icon: Puzzle,
  },
  {
    label: "Fincast",
    href: "/products/fincast",
    description: "Financial Intelligence",
    icon: ChartNoAxesCombined,
  },
  {
    label: "Dewpas",
    href: "/products/dewpas",
    description: "Audit & Performance",
    icon: ClipboardCheck,
  },
  {
    label: "Carat.ai",
    href: "/products/carat-ai",
    description: "Vertical ERP",
    icon: Gem,
  },
  {
    label: "CareProto",
    href: "/products/careproto",
    description: "Health Systems",
    icon: Stethoscope,
  },
  {
    label: "Digital Office Enabler",
    href: "/products/digital-office-enabler",
    description: "Workplace",
    icon: FileText,
  },
  {
    label: "OnDemand Service",
    href: "/products/ondemand-service",
    description: "Marketplace",
    icon: Handshake,
  },
  {
    label: "Career Portal",
    href: "/products/career-portal",
    description: "HR Platform",
    icon: BriefcaseBusiness,
  },
];

/* =========================================================
   INDUSTRIES

   IMPORTANT:
   All industry links intentionally point to the same
   /industries route because your clone currently uses
   one Industries page for all industry selections.
========================================================= */

const industries = [
  {
    label: "Logistics",
    href: "/industries",
    description:
      "Tracking, routing, and fleet intelligence that keep goods and people moving.",
    icon: Truck,
  },
  {
    label: "Fintech",
    href: "/industries",
    description:
      "Secure, compliant platforms for payments, lending, and financial insight.",
    icon: Landmark,
  },
  {
    label: "Retail",
    href: "/industries",
    description:
      "Connected commerce and vertical ERP that unify inventory, sales, and experience.",
    icon: ShoppingBag,
  },
  {
    label: "Insurance",
    href: "/industries",
    description:
      "Digitised policy, claims, and audit workflows that reduce friction and risk.",
    icon: ShieldCheck,
  },
  {
    label: "Automotive",
    href: "/industries",
    description:
      "Ride capture, predictive maintenance, and connected-vehicle experiences.",
    icon: Car,
  },
  {
    label: "Healthcare",
    href: "/industries",
    description:
      "Clinical reporting, hospital operations, and analytics built with practitioners.",
    icon: HeartPulse,
  },
  {
    label: "Agriculture",
    href: "/industries",
    description:
      "Data platforms that bring visibility and efficiency to the field and supply chain.",
    icon: Sprout,
  },
  {
    label: "Media",
    href: "/industries",
    description:
      "Knowledge engagement and content platforms that put information to work.",
    icon: Clapperboard,
  },
  {
    label: "Government",
    href: "/industries",
    description:
      "Paperless offices, dynamic audit, and citizen services delivered at scale.",
    icon: Building2,
  },
];

/* =========================================================
   COMPANY
========================================================= */

const company = [
  {
    label: "About Raintels",
    href: "/company",
    description: "Who we are",
  },
  {
    label: "Engagement Models",
    href: "/engagement",
    description: "How we work together",
  },
  {
    label: "Clients",
    href: "/company#clients",
    description: "Who we serve",
  },
  {
    label: "Blog",
    href: "/blog",
    description: "Ideas & updates",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Start a conversation",
  },
];

/* =========================================================
   MEGA MENU DATA
========================================================= */

const megaData = {
  services,
  products,
  industries,
  company,
};

/* =========================================================
   PROMOTIONAL CARD
========================================================= */

const promoData = {
  services: {
    eyebrow: "Not sure where to start?",
    title: "We'll map the right services to your outcome.",
    cta: "Talk to a strategist",
    href: "/contact",
  },

  products: {
    eyebrow: "Built by Raintels",
    title: "Platforms already solving real problems in the field.",
    cta: "See all products",
    href: "/products",
  },

  industries: {
    eyebrow: "Deep domain experience",
    title: "Nine industries, one engineering standard.",
    cta: "Explore industries",
    href: "/industries",
  },

  company: {
    eyebrow: "Your trusted CTO",
    title: "A strategic partner, not just a vendor.",
    cta: "About Raintels",
    href: "/company",
  },
};

/* =========================================================
   MEGA MENU
========================================================= */

function MegaMenu({ kind }) {
  const items = megaData[kind];

  if (!items) return null;

  const isThreeColumn =
    kind === "services" || kind === "products";

  const promo = promoData[kind];

  return (
    <div className="grid grid-cols-12 gap-8">
      {/* LEFT CONTENT */}

      <div
        className={
          isThreeColumn
            ? "col-span-9 grid grid-cols-3 gap-2"
            : "col-span-8 grid grid-cols-2 gap-2"
        }
      >
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              className="
                group
                flex
                items-start
                gap-3
                rounded-xl
                p-3
                transition-colors
                hover:bg-ink-50
              "
            >
              {Icon && (
                <span
                  className="
                    mt-0.5
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-ink-50
                    text-rain-500
                    transition-colors
                    duration-200
                    group-hover:bg-rain-500
                    group-hover:text-white
                  "
                >
                  <Icon
                    className="h-[18px] w-[18px]"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </span>
              )}

              <span className="min-w-0">
                <span
                  className="
                    flex
                    items-center
                    gap-1
                    font-medium
                    text-ink-900
                  "
                >
                  {item.label}

                  <ArrowRight
                    className="
                      h-3.5
                      w-3.5
                      -translate-x-1
                      rotate-[-45deg]
                      opacity-0
                      transition-all
                      duration-200
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  />
                </span>

                {item.description && (
                  <span
                    className="
                      mt-0.5
                      block
                      text-sm
                      leading-snug
                      text-ink-500
                    "
                  >
                    {item.description}
                  </span>
                )}
              </span>
            </a>
          );
        })}
      </div>

      {/* RIGHT PROMO CARD */}

      <div
        className={
          isThreeColumn
            ? `
              relative
              col-span-3
              flex
              flex-col
              justify-between
              overflow-hidden
              rounded-2xl
              bg-ink-900
              p-6
              text-white
            `
            : `
              relative
              col-span-4
              flex
              flex-col
              justify-between
              overflow-hidden
              rounded-2xl
              bg-ink-900
              p-6
              text-white
            `
        }
      >
        <div
          className="
            pointer-events-none
            absolute
            -right-8
            -top-8
            h-32
            w-32
            rounded-full
            bg-rain-500/30
            blur-2xl
          "
        />

        <div className="relative">
          <p className="text-sm font-medium text-rain-300">
            {promo.eyebrow}
          </p>

          <p className="mt-2 font-display text-lg font-semibold leading-snug">
            {promo.title}
          </p>
        </div>

        <a
          href={promo.href}
          className="
            relative
            mt-6
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            text-white/90
            transition-colors
            hover:text-white
          "
        >
          {promo.cta}

          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

/* =========================================================
   MOBILE ITEM
========================================================= */

function MobileNavItem({
  item,
  open,
  onToggle,
  onNavigate,
}) {
  const items = item.mega
    ? megaData[item.mega]
    : [];

  if (!item.mega) {
    return (
      <a
        href={item.href}
        onClick={onNavigate}
        className="
          border-b
          border-ink-100
          py-4
          text-lg
          font-medium
          text-ink-900
        "
      >
        {item.label}
      </a>
    );
  }

  return (
    <div className="border-b border-ink-100">
      <div className="flex items-center justify-between py-4">
        {/* MAIN MOBILE LINK */}

        <a
          href={item.href}
          onClick={onNavigate}
          className="
            text-lg
            font-medium
            text-ink-900
          "
        >
          {item.label}
        </a>

        {/* DROPDOWN TOGGLE */}

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-label={`Toggle ${item.label} submenu`}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            text-ink-700
          "
        >
          <ChevronDown
            className={`
              h-5
              w-5
              transition-transform
              duration-200
              ${open ? "rotate-180" : ""}
            `}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden"
          >
            <li>
              <a
                href={item.href}
                onClick={onNavigate}
                className="
                  block
                  py-2.5
                  text-[0.95rem]
                  font-medium
                  text-rain-600
                "
              >
                All {item.label}
              </a>
            </li>

            {items.map((subItem) => (
              <li key={subItem.label}>
                <a
                  href={subItem.href}
                  onClick={onNavigate}
                  className="
                    block
                    py-2.5
                    text-[0.95rem]
                    text-ink-600
                  "
                >
                  {subItem.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] =
    useState(null);

  /* =======================================================
     SCROLL EFFECT
  ======================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =======================================================
     LOCK BODY ON MOBILE
  ======================================================== */

  useEffect(() => {
    document.body.style.overflow =
      mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =======================================================
     ESCAPE
  ======================================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveMega(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        transition-all
        duration-300
        ${
          scrolled || activeMega
            ? "border-b border-ink-100 bg-white/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }
      `}
      onBlur={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget
          )
        ) {
          setActiveMega(null);
        }
      }}
    >
      {/* ===================================================
          NAVIGATION BAR
      ==================================================== */}

      <nav
        className="
          mx-auto
          flex
          h-[64px]
          max-w-[1280px]
          items-center
          justify-between
          gap-4
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* LOGO */}

        <a
          href="/"
          aria-label="Raintels home"
          className="relative z-10"
          onClick={() => setActiveMega(null)}
        >
          <Logo />
        </a>

        {/* =================================================
            DESKTOP NAV
        ================================================== */}

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isOpen =
              activeMega === item.mega;

            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  if (item.mega) {
                    setActiveMega(item.mega);
                  }
                }}
              >
                {/* =================================================
                    IMPORTANT FIX:

                    The MAIN NAV ITEM is now a REAL <a>.

                    Previously Services / Products / Industries /
                    Company were buttons, so clicking them could
                    only open the dropdown.

                    Now:
                      - Hover → opens mega menu
                      - Click label → navigates to href
                      - Chevron → also opens menu
                ================================================== */}

                {item.mega ? (
                  <div
                    className="
                      flex
                      items-center
                      rounded-full
                      px-4
                      py-2
                      text-[0.95rem]
                      font-medium
                      text-ink-600
                      transition-colors
                      hover:text-ink-950
                    "
                  >
                    <a
                      href={item.href}
                      className="flex items-center"
                      onClick={() =>
                        setActiveMega(null)
                      }
                    >
                      {item.label}
                    </a>

                    {/* Dropdown arrow remains separate */}

                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      aria-controls={`mega-${item.mega}`}
                      aria-label={`Open ${item.label} menu`}
                      onFocus={() =>
                        setActiveMega(item.mega)
                      }
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();

                        setActiveMega(
                          isOpen
                            ? null
                            : item.mega
                        );
                      }}
                      className="
                        ml-1
                        flex
                        h-5
                        w-5
                        items-center
                        justify-center
                        rounded-full
                      "
                    >
                      <ChevronDown
                        className={`
                          h-3.5
                          w-3.5
                          transition-transform
                          duration-200
                          ${
                            isOpen
                              ? "rotate-180"
                              : ""
                          }
                        `}
                      />
                    </button>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="
                      flex
                      items-center
                      rounded-full
                      px-4
                      py-2
                      text-[0.95rem]
                      font-medium
                      text-ink-600
                      transition-colors
                      hover:text-ink-950
                    "
                  >
                    {item.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        {/* =================================================
            CTA
        ================================================== */}

        <div className="hidden items-center lg:flex">
          <Button
            href="/contact"
            size="sm"
            arrow
          >
            Talk to a strategist
          </Button>
        </div>

        {/* =================================================
            MOBILE BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() =>
            setMobileOpen(
              (value) => !value
            )
          }
          aria-label={
            mobileOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={mobileOpen}
          className="
            relative
            z-10
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            text-ink-900
            lg:hidden
          "
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* ===================================================
          DESKTOP MEGA MENU
      ==================================================== */}

      <AnimatePresence>
        {activeMega && (
          <motion.div
            id={`mega-${activeMega}`}
            initial={{
              opacity: 0,
              y: -8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            transition={{
              duration: 0.22,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              absolute
              inset-x-0
              top-full
              border-b
              border-ink-100
              bg-white/95
              backdrop-blur-md
            "
            onMouseEnter={() => {
              // Keep menu open while moving
              // from navbar into dropdown.
              setActiveMega(activeMega);
            }}
            onMouseLeave={() => {
              setActiveMega(null);
            }}
          >
            <div className="container-x py-8">
              <MegaMenu
                kind={activeMega}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===================================================
          MOBILE MENU
      ==================================================== */}

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              overflow-hidden
              border-t
              border-ink-100
              bg-white
              lg:hidden
            "
          >
            <div
              className="
                container-x
                flex
                flex-col
                gap-2
                py-6
              "
            >
              {navItems.map((item) => (
                <MobileNavItem
                  key={item.label}
                  item={item}
                  open={
                    mobileDropdown ===
                    item.label
                  }
                  onToggle={() =>
                    setMobileDropdown(
                      mobileDropdown ===
                        item.label
                        ? null
                        : item.label
                    )
                  }
                  onNavigate={closeMobile}
                />
              ))}

              <div className="mt-4">
                <Button
                  href="/contact"
                  arrow
                  className="w-full"
                >
                  Talk to a strategist
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;