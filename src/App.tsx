import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

import {
  ABOUT,
  EDUCATION,
  EXPERIENCE,
  FEATURED,
  OFF_THE_CLOCK,
  OTHER_PROJECTS,
  PROFILE,
  SKILLS,
  type Bar,
  type Featured,
} from "./data";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function External({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  const isMail = href.startsWith("mailto:");
  return (
    <a className={className} href={href} {...(isMail ? {} : { target: "_blank", rel: "noreferrer" })}>
      {children}
      {isMail ? null : <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="top" id="top">
        <div className="wrap top-inner">
          <a className="mark" href="#top" aria-label="Pranjal Kattel, back to top">
            <MarkGlyph />
            <span>Pranjal Kattel</span>
          </a>
          <nav aria-label="Sections">
            <ul className="nav">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-name">
          <h1 id="hero-name" className="hero-name">
            <span>Pranjal</span> <span>Kattel</span>
          </h1>
          <div className="hero-copy">
            <p className="hero-lead">{PROFILE.lead}</p>
            <p className="hero-intro">{PROFILE.intro}</p>
            <ul className="hero-links">
              {PROFILE.links.map((link) => (
                <li key={link.label}>
                  <External className="pill" href={link.href}>
                    {link.label}
                  </External>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section wrap" id="work" aria-labelledby="work-title">
          <div className="section-head">
            <h2 id="work-title">Selected work</h2>
            <p>Each project shows the result its README records, and the limits that come with it.</p>
          </div>
          <div className="featured">
            {FEATURED.map((project) => (
              <FeaturedProject key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="section wrap" id="experience" aria-labelledby="experience-title">
          <div className="section-head">
            <h2 id="experience-title">Experience</h2>
          </div>
          <ol className="roles">
            {EXPERIENCE.map((role) => (
              <li className="role" key={role.org}>
                <p className="role-dates">{role.dates}</p>
                <div className="role-body">
                  <h3>{role.org}</h3>
                  <p className="role-title">{role.role}</p>
                  <p className="role-place">{role.place}</p>
                  <ul className="role-points">
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section wrap" aria-labelledby="more-title">
          <div className="section-head">
            <h2 id="more-title">More projects</h2>
          </div>
          <ul className="more">
            {OTHER_PROJECTS.map((project) => (
              <li className="more-item" key={project.name}>
                <h3>
                  <External href={project.repo}>{project.name}</External>
                </h3>
                <p>{project.summary}</p>
                <p className="stack">{project.stack.join(", ")}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section wrap about" id="about" aria-labelledby="about-title">
          <div className="section-head">
            <h2 id="about-title">About</h2>
          </div>
          <div className="about-grid">
            <div className="about-text">
              {ABOUT.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="about-block">
              <h3>Education</h3>
              <p className="edu-school">{EDUCATION.school}</p>
              <p>{EDUCATION.degree}</p>
              <p className="muted">
                {EDUCATION.dates}. {EDUCATION.detail}
              </p>
              <p className="muted">Coursework: {EDUCATION.courses.join(", ")}.</p>
            </div>

            <div className="about-block">
              <h3>Skills</h3>
              <dl className="skills">
                {SKILLS.map((group) => (
                  <div key={group.group}>
                    <dt>{group.group}</dt>
                    <dd>{group.items.join(", ")}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="about-block">
              <h3>Off the clock</h3>
              <ul className="offclock">
                {OFF_THE_CLOCK.map((item) => (
                  <li key={item.name}>
                    {item.href ? <External href={item.href}>{item.name}</External> : <strong>{item.name}</strong>}{" "}
                    <span className="muted">{item.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="contact wrap" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Get in touch</h2>
          <p>Email is the fastest way to reach me.</p>
          <a className="contact-mail" href={`mailto:${PROFILE.email}`}>
            {PROFILE.email}
          </a>
          <ul className="contact-links">
            {[...PROFILE.links.filter((link) => !link.href.startsWith("mailto:")), PROFILE.instagram].map((link) => (
              <li key={link.label}>
                <External href={link.href}>{link.label}</External>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="wrap">
        <div className="foot">
          <p>
            © {new Date().getFullYear()} Pranjal Kattel.{" "}
            <External href="https://github.com/llpranjal/Personal-Portfolio">Source on GitHub</External>
          </p>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </>
  );
}

function FeaturedProject({ project }: { project: Featured }) {
  const headingId = `${project.id}-title`;
  return (
    <article className="project" aria-labelledby={headingId}>
      <div className="project-text">
        <h3 id={headingId}>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        <ul className="project-points">
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <p className="stack">{project.stack.join(", ")}</p>
        <External className="repo-link" href={project.repo}>
          Code on GitHub
        </External>
      </div>
      <ResultChart project={project} />
    </article>
  );
}

function ResultChart({ project }: { project: Featured }) {
  const ref = useRef<HTMLElement>(null);

  // One reveal: bars grow the first time a chart scrolls into view.
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    el.dataset.reveal = "waiting";
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          el.dataset.reveal = "shown";
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  let row = 0;
  return (
    <figure className="chart" ref={ref}>
      <figcaption className="chart-result">{project.result}</figcaption>
      {project.groups.map((group) => {
        const max = Math.max(...group.bars.map((bar) => high(bar)));
        return (
          <div className="chart-group" key={group.title}>
            <p className="chart-title">{group.title}</p>
            <ul className="bars">
              {group.bars.map((bar) => {
                const index = row++;
                return <BarRow bar={bar} index={index} key={bar.label} max={max} />;
              })}
            </ul>
          </div>
        );
      })}
      <p className="chart-caveat">
        <span className="chart-caveat-label">Limits.</span> {project.caveat}
      </p>
    </figure>
  );
}

function high(bar: Bar) {
  return Array.isArray(bar.value) ? bar.value[1] : bar.value;
}

function BarRow({ bar, max, index }: { bar: Bar; max: number; index: number }) {
  const [low, top] = Array.isArray(bar.value) ? bar.value : [bar.value, bar.value];
  const style = {
    "--solid": `${(low / max) * 100}%`,
    "--top": `${(top / max) * 100}%`,
    "--i": index,
  } as CSSProperties;

  return (
    <li className={`bar ${bar.baseline ? "is-baseline" : "is-measured"}`} style={style}>
      <span className="bar-label">{bar.label}</span>
      <span className="bar-track" aria-hidden="true">
        <span className="bar-fill" />
        {low !== top ? <span className="bar-range" /> : null}
      </span>
      <span className="bar-value">{bar.display}</span>
    </li>
  );
}

function MarkGlyph() {
  return (
    <svg className="mark-glyph" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="4" width="18" height="4" rx="1" className="mark-base" />
      <rect x="3" y="10" width="11" height="4" rx="1" />
      <rect x="3" y="16" width="5" height="4" rx="1" />
    </svg>
  );
}
