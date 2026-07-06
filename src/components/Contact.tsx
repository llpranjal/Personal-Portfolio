import { ArrowRight } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import type { IconType } from "react-icons";
import { PROFILE } from "../data/portfolio";
import type { SocialIcon } from "../types";
import Magnetic from "./ui/Magnetic";
import AnimatedLink from "./ui/AnimatedLink";
import { scrollToId } from "../lib/scroll";

const ICONS: Record<SocialIcon, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  mail: FaEnvelope,
};

const NAV_LINKS: [string, string][] = [
  ["Selected Works", "works"],
  ["The Journey", "journey"],
  ["Beyond the Screen", "beyond"],
];

/**
 * SECTION 7 — The Grand Seal.
 * The page transitions to Rich Espresso. The brass wordmark presides; the CTA
 * is a hot stamp — outlined until hover, when it fills solid and the label is
 * pressed into the surface.
 */
export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-espresso px-6 py-24 text-oatmeal md:px-12"
    >
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-10" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">
        <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-brass">
          Section 07 — The Seal
        </p>
        <h2 className="mb-3 font-serif text-6xl tracking-tight text-brass opacity-90 md:text-8xl lg:text-9xl">
          {PROFILE.brand}
        </h2>
        <p className="mb-12 max-w-lg font-sans text-oatmeal/70">
          Have something worth building, or just want to talk shop? The workshop
          door is open.
        </p>

        {/* The Hot Stamp */}
        <Magnetic strength={18} className="mb-16">
          <a
            href={`mailto:${PROFILE.email}`}
            className="group relative block px-12 py-5"
          >
            <span className="absolute inset-0 border border-brass transition-colors duration-300 group-hover:bg-brass" />
            <span className="relative flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-brass transition-colors duration-300 group-hover:font-bold group-hover:text-espresso">
              Start a Conversation
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
            <span className="pointer-events-none absolute inset-0 opacity-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] transition-opacity duration-300 group-hover:opacity-100" />
          </a>
        </Magnetic>

        {/* Columns */}
        <div className="grid w-full grid-cols-1 gap-8 border-t border-brass/20 pt-12 text-left md:grid-cols-3">
          <div>
            <h4 className="mb-4 font-serif text-xl text-brass">Direct</h4>
            <AnimatedLink
              href={`mailto:${PROFILE.email}`}
              className="font-sans text-sm text-taupe/80 hover:text-oatmeal"
            >
              {PROFILE.email}
            </AnimatedLink>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-taupe/50">
              {PROFILE.location}
            </p>
          </div>

          <div className="md:text-center">
            <h4 className="mb-4 font-serif text-xl text-brass">Elsewhere</h4>
            <ul className="space-y-3">
              {PROFILE.socials.map((s) => {
                const Glyph = ICONS[s.icon];
                return (
                  <li key={s.name} className="md:flex md:justify-center">
                    <Magnetic strength={12}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-sans text-sm text-taupe/80 transition-colors hover:text-brass"
                      >
                        <Glyph size={16} />
                        {s.name}
                        <span className="font-mono text-[10px] text-taupe/40">
                          {s.label}
                        </span>
                      </a>
                    </Magnetic>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="md:text-right">
            <h4 className="mb-4 font-serif text-xl text-brass">Navigate</h4>
            <ul className="space-y-2 font-sans text-sm text-taupe/80">
              {NAV_LINKS.map(([label, id]) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToId(id)}
                    className="transition-colors hover:text-brass"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex w-full flex-col items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-widest text-taupe/40 md:flex-row">
          <span>
            © {new Date().getFullYear()} {PROFILE.name}
          </span>
          <span>Built to last · Made in {PROFILE.location}</span>
        </div>
      </div>
    </footer>
  );
}
