import { useRef, type MouseEvent } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { PASSIONS } from "../data/portfolio";
import type { Passion } from "../types";

/**
 * SECTION 6 — The Weave Grid.
 * The grid drapes behind the flow at a slower parallax rate; each plate tilts
 * on its X and Y axes, as if lifted from a display case.
 */
export default function Beyond() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      id="beyond"
      ref={ref}
      className="overflow-hidden px-6 py-28 md:px-12"
    >
      <div className="mb-16 text-center">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-brass">
          Section 06 — Off the Clock
        </p>
        <h3 className="font-serif text-4xl text-espresso md:text-5xl">
          Beyond the Screen
        </h3>
      </div>

      <motion.div
        style={{ y }}
        className="perspective mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {PASSIONS.map((item, i) => (
          <TiltCard key={item.id} item={item} index={i} />
        ))}
      </motion.div>
    </section>
  );
}

function TiltCard({ item, index }: { item: Passion; index: number }) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const springX = useSpring(rx, { stiffness: 150, damping: 15 });
  const springY = useSpring(ry, { stiffness: 150, damping: 15 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - left) / width - 0.5;
    const py = (e.clientY - top) / height - 0.5;
    ry.set(px * 12);
    rx.set(py * -12);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  const stagger = index % 2 === 0 ? "lg:mt-0" : "lg:mt-12";

  const card = (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
      className={`preserve-3d relative border border-taupe/40 bg-white p-4 shadow-lg ${stagger}`}
    >
      {item.quote ? (
        <div
          style={{ transform: "translateZ(20px)" }}
          className="flex aspect-[3/4] flex-col justify-between bg-espresso p-6"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-brass">
            Note to Self
          </span>
          <p className="font-serif text-xl italic leading-snug text-oatmeal">
            {item.text}
          </p>
          <span className="font-mono text-[10px] uppercase tracking-widest text-oatmeal/40">
            {item.location}
          </span>
        </div>
      ) : (
        <>
          <div
            style={{ transform: "translateZ(20px)" }}
            className="relative aspect-[3/4] overflow-hidden bg-oatmeal"
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="duotone h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="grain-overlay pointer-events-none absolute inset-0 opacity-20" />
          </div>
          <div style={{ transform: "translateZ(10px)" }} className="mt-4">
            <div className="flex items-baseline justify-between">
              <h4 className="font-serif text-lg text-espresso">{item.title}</h4>
              <span className="font-mono text-[10px] uppercase text-forest">
                {item.location}
              </span>
            </div>
            <p className="mt-1 font-sans text-sm text-espresso/60">
              {item.caption}
            </p>
          </div>
        </>
      )}
    </motion.div>
  );

  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer" className="block">
        {card}
      </a>
    );
  }
  return card;
}
