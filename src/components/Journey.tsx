import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { JOURNEY } from "../data/portfolio";
import type { JourneyStep } from "../types";
import ExhibitImage from "./ui/ExhibitImage";

/**
 * SECTION 5 — The Journey (Provenance).
 * A stream of brass light flows down the rail as you read, illuminating each
 * chapter; a sticky visual plate advances alongside the text.
 */
export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  return (
    <section
      id="journey"
      ref={ref}
      className="relative overflow-hidden bg-oatmeal px-6 py-28 md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 md:mb-24">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-brass">
            Section 05 — Provenance
          </p>
          <h3 className="font-serif text-4xl text-espresso md:text-5xl">
            The Journey
          </h3>
          <div className="mt-4 h-px w-24 bg-brass" />
          <p className="mt-4 max-w-md font-sans text-espresso/60">
            Every piece has a source. Follow the thread from the first line of
            code to the present.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24">
          {/* Text column with the light-path rail */}
          <div className="relative">
            <div className="absolute bottom-2 left-[15px] top-2 w-px">
              <div className="h-full w-full bg-taupe" />
              <motion.div
                style={{ scaleY: scrollYProgress, originY: 0 }}
                className="absolute inset-0 w-full bg-brass"
              />
            </div>
            <div className="space-y-20">
              {JOURNEY.map((step) => (
                <StepContent key={step.id} step={step} />
              ))}
            </div>
          </div>

          {/* Sticky visual plate */}
          <div className="hidden md:block">
            <div className="sticky top-28 h-[64vh]">
              <VisualStack progress={scrollYProgress} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepContent({ step }: { step: JourneyStep }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ margin: "-20%" }}
      transition={{ duration: 0.6 }}
      className="relative pl-12"
    >
      <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-brass bg-oatmeal font-mono text-[10px] text-brass">
        {String(step.id).padStart(2, "0")}
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-forest">
        {step.chapter}
      </span>
      <h4 className="mt-2 font-serif text-2xl text-espresso">{step.org}</h4>
      <p className="mt-0.5 font-sans text-sm font-bold text-espresso/80">
        {step.role}
      </p>
      <div className="mt-1 flex items-center gap-3 font-mono text-[10px] uppercase tracking-wider text-espresso/45">
        <span>{step.location}</span>
        <span>·</span>
        <span>{step.period}</span>
      </div>
      <p className="mt-3 max-w-md font-sans leading-relaxed text-espresso/70">
        {step.description}
      </p>
    </motion.div>
  );
}

function VisualStack({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="relative h-full w-full overflow-hidden border border-white bg-taupe/20 shadow-[0_30px_60px_-40px_rgba(74,55,48,0.6)]">
      {JOURNEY.map((step, i) => (
        <StackImage
          key={step.id}
          step={step}
          index={i}
          total={JOURNEY.length}
          progress={progress}
        />
      ))}
    </div>
  );
}

function StackImage({
  step,
  index,
  total,
  progress,
}: {
  step: JourneyStep;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const seg = 1 / total;
  const start = index * seg;
  const opacity = useTransform(
    progress,
    [start - seg * 0.6, start - seg * 0.1],
    [0, 1],
  );

  return (
    <motion.div
      style={{ opacity: index === 0 ? 1 : opacity }}
      className="absolute inset-0"
    >
      <ExhibitImage src={step.image} alt={step.org} monogram={step.monogram} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/85 to-transparent p-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brass">
          {step.chapter}
        </span>
        <p className="font-serif text-xl text-oatmeal">{step.org}</p>
        <p className="font-mono text-[10px] uppercase tracking-wider text-oatmeal/60">
          {step.period} · {step.location}
        </p>
      </div>
    </motion.div>
  );
}
