import { useRef, useState, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { SKILLS } from "../data/portfolio";
import type { SkillSwatch } from "../types";
import SlatReveal from "./ui/SlatReveal";

/**
 * SECTION 3 — Material Story.
 * The stack, presented as material swatches. Hover to summon a brass loupe
 * that magnifies the grain 300% — inspect the craft up close.
 */
export default function Skills() {
  return (
    <section id="skills" className="bg-white/50 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-brass">
              Section 03 — The Materials
            </p>
            <h3 className="font-serif text-4xl text-espresso md:text-5xl">
              The Craft, Up Close
            </h3>
            <p className="mt-3 max-w-md font-sans text-espresso/60">
              The tools of the trade. Inspect the grain — there is nothing to
              hide.
            </p>
          </div>
          <p className="mt-4 hidden font-mono text-[10px] uppercase tracking-wider text-brass md:block">
            Hover to Magnify
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {SKILLS.map((s, i) => (
            <MaterialCard key={s.id} material={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MaterialCard({
  material,
  index,
}: {
  material: SkillSwatch;
  index: number;
}) {
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <div className="group">
      <SlatReveal delay={index * 0.15}>
        <div
          ref={ref}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onMouseMove={onMove}
          className="relative aspect-[4/5] cursor-none overflow-hidden bg-taupe"
        >
          <img
            src={material.image}
            alt={material.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="grain-overlay pointer-events-none absolute inset-0 opacity-20" />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/70 to-transparent p-5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-oatmeal/80">
              {material.chapter}
            </span>
            <h4 className="font-serif text-2xl text-oatmeal">{material.name}</h4>
          </div>

          {/* Magnifying loupe */}
          <AnimatePresence>
            {hover && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: pos.x - 80,
                  y: pos.y - 80,
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.12, ease: "linear" }}
                className="pointer-events-none absolute left-0 top-0 z-20 h-40 w-40 overflow-hidden rounded-full border-2 border-brass bg-white shadow-2xl"
              >
                <div
                  className="absolute max-w-none"
                  style={{
                    left: -(pos.x * 3) + 80,
                    top: -(pos.y * 3) + 80,
                    width: "300%",
                    height: "300%",
                  }}
                >
                  <img
                    src={material.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <Search size={16} className="text-brass" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Touch hint */}
          <div className="absolute right-4 top-4 rounded-full bg-white/80 p-2 backdrop-blur-sm md:hidden">
            <Search size={16} className="text-espresso" />
          </div>
        </div>
      </SlatReveal>

      <div className="mt-6 border-t border-taupe pt-4">
        <div className="flex items-baseline justify-between">
          <h4 className="font-serif text-xl text-espresso">{material.name}</h4>
          <span className="font-mono text-[10px] uppercase text-brass">
            {material.id}
          </span>
        </div>
        <p className="mt-2 font-sans text-sm text-espresso/70">
          {material.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {material.tools.map((t) => (
            <span
              key={t}
              className="rounded-full border border-taupe bg-oatmeal px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-espresso/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
