import { PROFILE } from "../data/portfolio";
import Magnetic from "./ui/Magnetic";
import { scrollToId } from "../lib/scroll";

const LINKS = [
  { label: "Craft", id: "skills" },
  { label: "Works", id: "works" },
  { label: "Journey", id: "journey" },
  { label: "Beyond", id: "beyond" },
];

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 mix-blend-difference md:px-12">
      <Magnetic>
        <button
          onClick={() => scrollToId("top")}
          className="font-display text-lg font-semibold tracking-[0.3em] text-oatmeal"
        >
          {PROFILE.brand}
        </button>
      </Magnetic>

      <div className="flex items-center gap-5 md:gap-8">
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollToId(l.id)}
              className="font-mono text-[10px] uppercase tracking-[0.25em] text-oatmeal/90 transition-opacity hover:opacity-60"
            >
              {l.label}
            </button>
          ))}
        </div>
        <Magnetic strength={16}>
          <button
            onClick={() => scrollToId("contact")}
            className="border border-oatmeal px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-oatmeal transition-colors duration-300 hover:bg-oatmeal hover:text-espresso"
          >
            Contact
          </button>
        </Magnetic>
      </div>
    </nav>
  );
}
