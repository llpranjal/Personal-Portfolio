import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { PROFILE } from "../data/portfolio";

/**
 * SECTION 2 — The Philosophy.
 * A single serif statement. As you scroll, the words fill from taupe to
 * espresso — the way leather deepens and acquires its patina.
 */
export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const words = PROFILE.philosophy.split(" ");

  return (
    <section
      ref={ref}
      id="philosophy"
      className="flex min-h-screen items-center justify-center px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="flex flex-wrap justify-center gap-x-3 gap-y-1 font-serif text-3xl leading-tight md:text-5xl lg:text-6xl">
          {words.map((word, i) => (
            <PatinaWord
              key={i}
              word={word}
              progress={scrollYProgress}
              start={i / words.length}
              end={(i + 1) / words.length}
            />
          ))}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="mx-auto mb-4 h-px w-16 bg-brass" />
          <p className="font-mono text-xs uppercase tracking-widest text-forest">
            {PROFILE.philosophyTag}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PatinaWord({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const color = useTransform(progress, [start, end], ["#D9D3CC", "#4A3730"]);
  return <motion.span style={{ color }}>{word}</motion.span>;
}
