import { useEffect } from "react";
import Lenis from "lenis";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Journey from "./components/Journey";
import Beyond from "./components/Beyond";
import Contact from "./components/Contact";
import { setLenis } from "./lib/scroll";

export default function App() {
  useEffect(() => {
    // Subtle Grandeur #1 — Scroll Buffer.
    // Lenis gives the page a smooth, weighted heaviness that suggests quality.
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    setLenis(lenis);

    let raf = 0;
    const frame = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <div id="top" className="relative min-h-screen bg-oatmeal">
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <Skills />
        <Works />
        <Journey />
        <Beyond />
      </main>
      <Contact />
    </div>
  );
}
