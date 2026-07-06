import { motion, useScroll, useTransform } from "framer-motion";
import { PROFILE } from "../data/portfolio";

/**
 * SECTION 1 — The Reveal.
 * A veil of oatmeal covers the maker's calling card; as you scroll it slides
 * away, deepening the shadow beneath and bringing the card into focus.
 */
export default function Hero() {
  const { scrollY } = useScroll();

  const veilOpacity = useTransform(scrollY, [0, 520], [0.8, 0]);
  const veilY = useTransform(scrollY, [0, 520], ["0%", "100%"]);
  const scale = useTransform(scrollY, [0, 520], [1, 1.05]);
  const cardY = useTransform(scrollY, [0, 520], [0, -36]);
  const shadowOpacity = useTransform(scrollY, [0, 320], [0.12, 0.45]);

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background wordmark texture */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap opacity-[0.035]">
        <h1 className="font-serif text-[22vw] font-bold text-espresso">
          {PROFILE.brand}
        </h1>
      </div>

      {/* Heading */}
      <div className="z-10 mb-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-5 font-mono text-[10px] uppercase tracking-[0.35em] text-brass md:text-xs"
        >
          {PROFILE.eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="font-serif text-5xl tracking-tight text-espresso md:text-7xl lg:text-8xl"
        >
          {PROFILE.headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mx-auto mt-6 max-w-md font-sans text-sm leading-relaxed text-espresso/60 md:text-base"
        >
          A software engineer building durable, thoughtful software — made to be
          understood, and made to last.
        </motion.p>
      </div>

      {/* Calling-card stage + veil */}
      <div className="relative flex w-full max-w-md items-center justify-center px-6">
        <motion.div
          style={{ opacity: shadowOpacity }}
          className="absolute bottom-1 h-10 w-2/3 rounded-[50%] bg-black blur-2xl"
        />
        <motion.div style={{ scale, y: cardY }} className="relative z-10 w-full">
          <div className="relative aspect-[16/10] w-full overflow-hidden border border-taupe bg-oatmeal shadow-[0_30px_60px_-30px_rgba(74,55,48,0.55)]">
            <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.15]" />
            <div className="flex h-full w-full flex-col justify-between p-6">
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-espresso/50">
                  The Maker
                </span>
                <span className="h-2 w-2 rounded-full bg-forest" />
              </div>
              <div className="text-center">
                <span className="font-display text-6xl tracking-[0.2em] text-espresso md:text-7xl">
                  PK
                </span>
              </div>
              <div className="flex items-end justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-espresso/50">
                  {PROFILE.role}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-brass">
                  Available
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Veil */}
        <motion.div
          style={{ opacity: veilOpacity, y: veilY }}
          className="pointer-events-none absolute inset-y-0 left-6 right-6 z-20 bg-oatmeal mix-blend-soft-light"
        />
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-espresso/60">
          Scroll to Explore
        </span>
        <div className="h-12 w-px overflow-hidden bg-espresso/20">
          <div className="h-1/2 w-full animate-scroll-hint bg-espresso" />
        </div>
      </motion.div>
    </section>
  );
}
