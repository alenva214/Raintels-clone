import { useEffect, useState } from "react";

import {
  CodeXml,
  CloudCog,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Logo from "./ui/Logo";
import Button from "./ui/Button";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";


/* ============================================================
   PARALLAX LAYER
   ============================================================ */

function ParallaxLayer({
  sx,
  sy,
  depth,
  className,
  children,
}) {
  const x = useTransform(sx, (value) => value * depth);
  const y = useTransform(sy, (value) => value * depth);

  return (
    <motion.div
      className={className}
      style={{
        x,
        y,
      }}
    >
      {children}
    </motion.div>
  );
}


/* ============================================================
   HERO
   ============================================================ */

function Hero() {

  /* ==========================================================
     Rotating "We deliver..." phrases
     ========================================================== */

  const rotatingPhrases = [
    "product engineering.",
    "cloud & DevOps.",
    "digital transformation.",
    "your trusted CTO.",
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex(
        (current) =>
          (current + 1) % rotatingPhrases.length
      );
    }, 2600);

    return () => clearInterval(interval);
  }, []);


  /* ==========================================================
     Mouse Parallax

     The original visual uses different depth values for
     different layers.
     ========================================================== */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 90,
    damping: 18,
    mass: 0.6,
  });

  const springY = useSpring(mouseY, {
    stiffness: 90,
    damping: 18,
    mass: 0.6,
  });


  /* ==========================================================
     Pointer handlers
     ========================================================== */

  const handlePointerMove = (event) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };


  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-36 md:pb-24">

      <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">

        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}

        <div>

          {/* Eyebrow */}

          <div
            className="animate-[heroFadeUp_0.7s_ease-out_forwards]"
            style={{ opacity: 0 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rain-600">

              <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />

              Your Trusted CTO

            </span>
          </div>


          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl md:text-[4.2rem]">

            <span className="mr-[0.28em] inline-block overflow-hidden align-bottom">

              <span className="inline-block animate-[heroWord_0.8s_cubic-bezier(0.16,1,0.3,1)_0.1s_forwards]">

                Build

              </span>

            </span>


            <span className="mr-[0.28em] inline-block overflow-hidden align-bottom">

              <span className="inline-block animate-[heroWord_0.8s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">

                frictionless

              </span>

            </span>


            <span className="mr-[0.28em] inline-block overflow-hidden align-bottom">

              <span className="inline-block animate-[heroWord_0.8s_cubic-bezier(0.16,1,0.3,1)_0.3s_forwards]">

                enterprises.

              </span>

            </span>

          </h1>


          {/* =================================================
              ROTATING "WE DELIVER..." LINE
          ================================================== */}

          <div className="mt-3 flex flex-wrap items-baseline gap-x-3 font-display text-2xl font-medium text-ink-400 sm:text-3xl">

            {/* Fixed text */}

            <span>
              We deliver
            </span>


            {/* Animated phrase */}

            <span className="relative inline-grid overflow-hidden">

              <AnimatePresence mode="popLayout">

                <motion.span
                  key={rotatingPhrases[phraseIndex]}

                  initial={{
                    y: "100%",
                    opacity: 0,
                  }}

                  animate={{
                    y: 0,
                    opacity: 1,
                  }}

                  exit={{
                    y: "-100%",
                    opacity: 0,
                  }}

                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}

                  className="text-gradient-rain font-semibold"
                >
                  {rotatingPhrases[phraseIndex]}
                </motion.span>

              </AnimatePresence>

            </span>

          </div>


          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-500 animate-[heroFadeUp_0.7s_ease-out_0.55s_forwards]"
            style={{ opacity: 0 }}
          >
            Raintels is the reliable strategic partner behind
            high-quality software — engineering products,
            harmonising CRM & ERP, and turning operations into
            efficient, data-driven enterprises.
          </p>


          {/* =================================================
              BUTTONS
          ================================================== */}

          <div
            className="mt-9 flex flex-wrap items-center gap-3 animate-[heroFadeUp_0.7s_ease-out_0.65s_forwards]"
            style={{ opacity: 0 }}
          >

            <Button
              href="/contact"
              size="lg"
              arrow
            >
              Talk to a strategist
            </Button>


            <Button
              href="/services"
              variant="outline"
              size="lg"
            >
              Explore services
            </Button>

          </div>


          {/* =================================================
              TRUSTED BY
          ================================================== */}

          <div
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-400 animate-[heroFadeUp_0.7s_ease-out_0.8s_forwards]"
            style={{ opacity: 0 }}
          >

            <span className="font-medium text-ink-500">
              Trusted by
            </span>

            <span className="font-semibold tracking-tight text-ink-600">
              UNDP
            </span>

            <span className="font-semibold tracking-tight text-ink-600">
              KSHEC
            </span>

            <span className="font-semibold tracking-tight text-ink-600">
              TMX Transform
            </span>

            <span className="font-semibold tracking-tight text-ink-600">
              TEN
            </span>

          </div>

        </div>


        {/* =====================================================
            RIGHT VISUAL
        ====================================================== */}

        <motion.div
          className="relative mx-auto aspect-square w-full max-w-md"

          initial={{
            opacity: 0,
            scale: 0.96,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2,
          }}

          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >

          {/* =================================================
              ORBITAL RINGS

              Original depth: -14
          ================================================== */}

          <ParallaxLayer
            sx={springX}
            sy={springY}
            depth={-14}
            className="pointer-events-none absolute inset-0"
          >

            <div className="absolute inset-[8%] rounded-full border border-ink-100" />

            <div className="absolute inset-[22%] rounded-full border border-ink-100/70" />

            <div className="absolute inset-[36%] rounded-full border border-dashed border-ink-200/70" />

          </ParallaxLayer>


          {/* =================================================
              MAIN ENGINEERING CARD

              Original depth: 16
          ================================================== */}

          <ParallaxLayer
            sx={springX}
            sy={springY}
            depth={16}
            className="absolute inset-[15%]"
          >

            <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-ink-100 bg-white shadow-[0_40px_120px_-40px_rgba(16,18,24,0.45)]">

              <div className="relative flex h-full flex-col p-6">

                {/* Browser header */}

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-1.5">

                    <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />

                    <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />

                    <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />

                  </div>


                  <span className="flex items-center gap-1.5 rounded-full bg-ink-50 px-2.5 py-1 text-[0.7rem] font-medium text-ink-500">

                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                    delivery · live

                  </span>

                </div>


                {/* Engineering standard */}

                <div className="mt-6 flex items-center gap-3">

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink-900 text-white">

                    <Logo
                      showWord={false}
                      className="text-white"
                    />

                  </span>


                  <div>

                    <p className="font-display text-[1.05rem] font-semibold leading-tight text-ink-900">
                      One engineering standard
                    </p>

                    <p className="text-xs text-ink-500">
                      Strategy · delivery · quality
                    </p>

                  </div>

                </div>


                {/* =================================================
                    METRICS
                ================================================== */}

                <div className="mt-auto space-y-3">

                  {/* Quality */}

                  <div>

                    <div className="flex items-center justify-between text-xs font-medium text-ink-600">

                      <span>
                        Quality
                      </span>

                      <span className="tabular-nums text-ink-400">
                        98%
                      </span>

                    </div>


                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-ink-100">

                      <motion.div
                        className="h-full rounded-full bg-rain-500"
                        initial={{ width: 0 }}
                        animate={{ width: "98%" }}
                        transition={{
                            duration: 1.2,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.5,
                        }}
                        />

                    </div>

                  </div>


                  {/* Velocity */}

                  <div>

                    <div className="flex items-center justify-between text-xs font-medium text-ink-600">

                      <span>
                        Velocity
                      </span>

                      <span className="tabular-nums text-ink-400">
                        86%
                      </span>

                    </div>


                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-ink-100">

                      <motion.div
                        className="h-full rounded-full bg-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: "86%" }}
                        transition={{
                            duration: 1.2,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.5,
                        }}
                        />

                    </div>

                  </div>


                  {/* Quality assured */}

                  <div className="flex items-center gap-2 pt-1 text-xs font-medium text-ink-500">

                    <ShieldCheck className="h-4 w-4 text-ink-700" />

                    Quality-assured delivery

                  </div>

                </div>

              </div>

            </div>

          </ParallaxLayer>


          {/* =====================================================
              PRODUCT ENGINEERING FLOATING CARD

              Original:
              position = left-0 top-[14%]
              depth = 24
              float = -10
          ====================================================== */}

          <ParallaxLayer
            sx={springX}
            sy={springY}
            depth={24}
            className="absolute left-0 top-[14%]"
          >

            <motion.div
              className="flex items-center gap-2 rounded-xl border border-ink-100 bg-white/95 px-3.5 py-2.5 shadow-[0_12px_30px_-12px_rgba(16,18,24,0.35)]"

              initial={{
                opacity: 0,
                y: 14,
              }}

              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}

              transition={{
                opacity: {
                  duration: 0.5,
                  delay: 0.5,
                },

                y: {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >

              <CodeXml className="h-4 w-4 text-ink-900" />

              <span className="text-sm font-medium text-ink-800">
                Product Engineering
              </span>

            </motion.div>

          </ParallaxLayer>


          {/* =====================================================
              CLOUD & DEVOPS FLOATING CARD

              Original:
              position = -right-2 top-[42%]
              depth = 42
              float = 12
          ====================================================== */}

          <ParallaxLayer
            sx={springX}
            sy={springY}
            depth={42}
            className="absolute -right-2 top-[42%]"
          >

            <motion.div
              className="flex items-center gap-2 rounded-xl border border-ink-100 bg-white/95 px-3.5 py-2.5 shadow-[0_12px_30px_-12px_rgba(16,18,24,0.35)]"

              initial={{
                opacity: 0,
                y: 14,
              }}

              animate={{
                opacity: 1,
                y: [0, 12, 0],
              }}

              transition={{
                opacity: {
                  duration: 0.5,
                  delay: 0.62,
                },

                y: {
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >

              <CloudCog className="h-4 w-4 text-blue-500" />

              <span className="text-sm font-medium text-ink-800">
                Cloud & DevOps
              </span>

            </motion.div>

          </ParallaxLayer>


          {/* =====================================================
              EMERGING TECH FLOATING CARD

              Original:
              position = left-[2%] -bottom-1
              depth = 34
              float = 10
          ====================================================== */}

          <ParallaxLayer
            sx={springX}
            sy={springY}
            depth={34}
            className="absolute left-[2%] -bottom-1"
          >

            <motion.div
              className="flex items-center gap-2 rounded-xl border border-ink-100 bg-white/95 px-3.5 py-2.5 shadow-[0_12px_30px_-12px_rgba(16,18,24,0.35)]"

              initial={{
                opacity: 0,
                y: 14,
              }}

              animate={{
                opacity: 1,
                y: [0, 10, 0],
              }}

              transition={{
                opacity: {
                  duration: 0.5,
                  delay: 0.74,
                },

                y: {
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >

              <Sparkles className="h-4 w-4 text-rain-500" />

              <span className="text-sm font-medium text-ink-800">
                Emerging Tech
              </span>

            </motion.div>

          </ParallaxLayer>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;