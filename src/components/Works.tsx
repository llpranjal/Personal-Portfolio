import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROFILE, PROJECTS } from "../data/portfolio";
import type { Project } from "../types";
import ExhibitImage from "./ui/ExhibitImage";

/**
 * SECTION 4 — The Collection.
 * The screen pins while vertical scroll drives a horizontal gallery of works.
 * A forest-green annotation and a live index appear as each plate passes.
 */
export default function Works() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [distance, setDistance] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(
      Math.min(PROJECTS.length - 1, Math.max(0, Math.floor(v * PROJECTS.length))),
    );
  });

  return (
    <section id="works" ref={sectionRef} className="relative h-[380vh] bg-oatmeal">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-end justify-between px-6 pb-8 pt-28 md:px-12">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-brass">
              Section 04 — The Collection
            </p>
            <h3 className="font-serif text-4xl text-espresso md:text-5xl">
              Selected Works
            </h3>
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <AnimatePresence mode="wait">
              <motion.span
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 border border-forest/30 bg-forest/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-forest"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-forest" />
                {PROJECTS[active].note}
              </motion.span>
            </AnimatePresence>
            <span className="font-mono text-xs text-espresso/50">
              <span className="text-espresso">
                {String(active + 1).padStart(2, "0")}
              </span>{" "}
              / {String(PROJECTS.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Horizontal track */}
        <div className="flex flex-1 items-center overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-6 px-6 md:gap-10 md:px-12"
          >
            {PROJECTS.map((p) => (
              <ProjectPlate key={p.id} project={p} />
            ))}
            <div className="flex w-[72vw] shrink-0 items-center md:w-[30vw]">
              <EndPlate />
            </div>
          </motion.div>
        </div>

        {/* Progress rail */}
        <div className="px-6 pb-8 md:px-12">
          <div className="h-px w-full bg-taupe">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full w-full origin-left bg-brass"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectPlate({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="group relative flex h-[60vh] w-[84vw] shrink-0 flex-col overflow-hidden border border-taupe bg-white shadow-sm transition-shadow duration-500 hover:shadow-2xl md:w-[46vw] lg:w-[40vw]"
    >
      <div className="relative flex-1 overflow-hidden">
        <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]">
          <ExhibitImage src={project.image} alt={project.title} />
        </div>
        <span className="absolute left-5 top-4 font-serif text-5xl text-oatmeal mix-blend-difference">
          {project.id}
        </span>
      </div>
      <div className="flex items-start justify-between gap-4 border-t border-taupe p-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-brass">
            {project.medium}
          </p>
          <h4 className="mt-1 font-serif text-2xl text-espresso">
            {project.title}
          </h4>
          <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-espresso/60">
            {project.blurb}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stacks.map((s) => (
              <span
                key={s}
                className="rounded-full border border-taupe px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-espresso/60"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-espresso/20 text-espresso transition-all duration-300 group-hover:border-espresso group-hover:bg-espresso group-hover:text-oatmeal">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </a>
  );
}

function EndPlate() {
  return (
    <a
      href={`${PROFILE.socials[0].href}?tab=repositories`}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col justify-center"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass">
        The Archive
      </p>
      <h4 className="mt-3 max-w-xs font-serif text-3xl leading-snug text-espresso">
        More lives in the workshop.
      </h4>
      <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-espresso">
        Browse GitHub
        <ArrowUpRight
          size={16}
          className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </span>
    </a>
  );
}
