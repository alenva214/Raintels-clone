import React, { useEffect, useRef } from "react";
import {
  Compass,
  Hammer,
  PencilRuler,
  TrendingUp,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    number: "01",
    title: "Discover",
    icon: Compass,
    description:
      "We start with the outcome, not the feature list — mapping the real problem, the constraints, and what success actually looks like.",
  },
  {
    number: "02",
    title: "Architect",
    icon: PencilRuler,
    description:
      "We design a system that fits: the right platforms, data flows, and integrations to serve today and stretch for tomorrow.",
  },
  {
    number: "03",
    title: "Engineer",
    icon: Hammer,
    description:
      "We build in focused iterations with quality engineering, cloud, and DevOps woven in — so releases stay calm and dependable.",
  },
  {
    number: "04",
    title: "Evolve",
    icon: TrendingUp,
    description:
      "We stay on as your trusted CTO — measuring, refining, and extending the platform long after the first launch.",
  },
];

export default function HowWePartner() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    // The original site only enables this animation on:
    // - screens >= 1024px
    // - users who haven't requested reduced motion

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const desktop = window.matchMedia("(min-width: 1024px)").matches;

    if (reduceMotion || !desktop) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) {
      return;
    }

    /*
     * Original:
     *
     * let n = e.scrollWidth - window.innerWidth + 96;
     *
     * The +96 comes from the original desktop horizontal
     * padding/movement calculation.
     */
    const getDistance = () =>
      track.scrollWidth - window.innerWidth + 96;

    const animation = gsap.to(track, {
      x: () => -getDistance(),

      // Exact original
      ease: "none",

      scrollTrigger: {
        trigger: section,

        // Exact original
        start: "top top",

        // Exact original
        end: () => `+=${getDistance()}`,

        // Exact original
        scrub: 0.6,

        // Exact original
        pin: true,

        // Exact original
        anticipatePin: 1,

        // Exact original
        invalidateOnRefresh: true,
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-surface"
    >
      <div className="lg:flex lg:h-screen lg:flex-col lg:justify-center lg:py-0 py-20">

        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <div className="container-x">
          <div className="max-w-2xl">

            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rain-600">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
              How we partner
            </span>

            <h2 className="mt-4 text-3xl font-semibold text-ink-900 sm:text-4xl md:text-[2.7rem] md:leading-[1.1]">
              Four moves, from first call to lasting platform.
            </h2>

          </div>
        </div>

        {/* =====================================================
            HORIZONTAL CARD TRACK
        ====================================================== */}

        <div
          ref={trackRef}
          className="
            mt-12
            flex
            flex-col
            gap-6
            px-6

            lg:mt-16
            lg:flex-row
            lg:gap-8
            lg:px-12
            lg:will-change-transform
          "
        >

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="
                  group
                  relative
                  flex
                  shrink-0
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-3xl
                  border
                  border-ink-100
                  bg-white
                  p-8
                  transition-colors
                  hover:border-ink-200

                  lg:h-[26rem]
                  lg:w-[26rem]
                "
              >

                {/* =================================================
                    LARGE BACKGROUND NUMBER
                ================================================== */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    font-display
                    text-[10rem]
                    font-bold
                    leading-none
                    text-ink-50
                    transition-colors
                    group-hover:text-rain-50
                  "
                >
                  {step.number}
                </div>


                {/* =================================================
                    ICON
                ================================================== */}

                <div className="relative">

                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-900 text-white">

                    <Icon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />

                  </span>

                </div>


                {/* =================================================
                    TEXT
                ================================================== */}

                <div className="relative">

                  <h3 className="font-display text-3xl font-semibold text-ink-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-500">
                    {step.description}
                  </p>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}