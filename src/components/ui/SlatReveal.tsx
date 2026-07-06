import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SlatRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  slats?: number;
}

/**
 * Subtle Grandeur #4 — Image reveal.
 * Uncovers its children in vertical strips, like blinds opening.
 */
export default function SlatReveal({
  children,
  className = "",
  delay = 0,
  slats = 5,
}: SlatRevealProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
      <div className="pointer-events-none absolute inset-0 flex">
        {Array.from({ length: slats }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 1 }}
            whileInView={{ scaleY: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * 0.1,
            }}
            style={{ originY: 0 }}
            className="h-full flex-1 bg-oatmeal"
          />
        ))}
      </div>
    </div>
  );
}
