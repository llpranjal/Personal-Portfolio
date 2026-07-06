import type {
  Profile,
  SkillSwatch,
  Project,
  JourneyStep,
  Passion,
} from "../types";

import portfolioImage from "../images/portfolio.png";
import facialImage from "../images/facial.png";
import catImage from "../images/blawg.png";
import notesImage from "../images/notes.jpeg";
import memoryGameImage from "../images/memorygame.png";
import algoImage from "../images/algo.png";
import nihImage from "../images/nih.png";
import usnewsImage from "../images/adc.png";
import chessImage from "../images/chess.jpg";
import celImage from "../images/cel.png";
import codeImage from "../images/code.png";
import leatherTexture from "../images/tex-leather.svg";
import linenTexture from "../images/tex-linen.svg";
import brassTexture from "../images/tex-brass.svg";

export const PROFILE: Profile = {
  brand: "PRANJAL",
  name: "Pranjal Kattel",
  role: "Software Engineer",
  eyebrow: "Software Engineer · Est. 2025 · College Park, MD",
  headline: "Pranjal Kattel",
  location: "College Park, Maryland",
  email: "kattelpranjal01@gmail.com",
  philosophy:
    "Software built to outlive the trend cycle. Designed to acquire character. The best work is not measured by how new it feels, but by how gracefully it lasts.",
  philosophyTag: "The Working Philosophy",
  socials: [
    {
      name: "GitHub",
      label: "@llpranjal",
      href: "https://github.com/llpranjal",
      icon: "github",
    },
    {
      name: "LinkedIn",
      label: "in/pranjalkattel",
      href: "https://linkedin.com/in/pranjalkattel/",
      icon: "linkedin",
    },
    {
      name: "Instagram",
      label: "@pranjal.k05",
      href: "https://www.instagram.com/pranjal.k05/",
      icon: "instagram",
    },
  ],
};

/** SECTION 3 — Material Story: the craft, examined up close. */
export const SKILLS: SkillSwatch[] = [
  {
    id: "S/01",
    name: "Languages",
    chapter: "The Grain",
    image: leatherTexture,
    description:
      "The raw material. Typed, compiled, or interpreted — chosen for the problem, not the trend.",
    tools: ["Python", "TypeScript", "JavaScript", "Java", "C", "OCaml"],
  },
  {
    id: "S/02",
    name: "Interfaces",
    chapter: "The Weave",
    image: linenTexture,
    description:
      "The surface a person actually touches. Composed, accessible, and quietly considered.",
    tools: ["React", "Tailwind CSS", "Framer Motion", "HTML & CSS", "Figma"],
  },
  {
    id: "S/03",
    name: "Systems & Data",
    chapter: "The Hardware",
    image: brassTexture,
    description:
      "The structure beneath. Where data is stored, shaped, moved, and made to mean something.",
    tools: ["Node.js", "PostgreSQL", "Flask", "Kusto / ADX", "Git", "GitHub"],
  },
];

/** SECTION 4 — The Collection: selected works. */
export const PROJECTS: Project[] = [
  {
    id: "01",
    title: "FlowNote",
    blurb:
      "A full-stack note-taking app designed around focus — thoughtful UX, keyboard-first flow, and a persistent backend.",
    stacks: ["React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    link: "https://github.com/llpranjal/notes-app",
    image: notesImage,
    medium: "Full-Stack Application",
    note: "Made to disappear while you write",
  },
  {
    id: "02",
    title: "AI Facial Attendance",
    blurb:
      "Computer-vision attendance — recognizes faces from a live feed and records presence without a single sign-in sheet.",
    stacks: ["TensorFlow", "OpenCV", "Keras"],
    link: "https://github.com/llpranjal/Facial-Attendance",
    image: facialImage,
    medium: "Machine Learning",
    note: "Trained, not configured",
  },
  {
    id: "03",
    title: "Sorting Visualizer",
    blurb:
      "Classic sorting algorithms rendered legible — interactive controls to watch order emerge from chaos, step by step.",
    stacks: ["React", "Vite", "JavaScript"],
    link: "https://github.com/llpranjal/AlgoVisualizer",
    image: algoImage,
    medium: "Interactive Tool",
    note: "Algorithms you can watch",
  },
  {
    id: "04",
    title: "Memory Game",
    blurb:
      "A progressive memory game with escalating difficulty and a lives system — small, tactile, and satisfying to lose.",
    stacks: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://github.com/llpranjal/MemoryGame",
    image: memoryGameImage,
    medium: "Game",
    note: "Increasingly unforgiving",
  },
  {
    id: "05",
    title: "Cat Generator",
    blurb:
      "A joyful little API playground that conjures an endless supply of cats. What else does one really need?",
    stacks: ["React", "CSS", "APIs"],
    link: "https://github.com/llpranjal/Cat-Generator",
    image: catImage,
    medium: "Experiment",
    note: "Serious engineering, unserious cats",
  },
  {
    id: "06",
    title: "This Portfolio",
    blurb:
      "The site you're reading now — a long-form, scroll-driven exhibition of the work, built the way I like to build.",
    stacks: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/llpranjal/Personal-Portfolio",
    image: portfolioImage,
    medium: "Open Source",
    note: "Crafted transparency",
  },
];

/** SECTION 5 — The Journey: provenance of the work. Oldest first. */
export const JOURNEY: JourneyStep[] = [
  {
    id: 1,
    chapter: "The Foundation",
    org: "University of Maryland",
    role: "B.S. Computer Science",
    location: "College Park, MD",
    period: "2022 — 2026",
    description:
      "Where the grain was set. Studying computer science with a pull toward systems, algorithms, and software that people can actually feel.",
    monogram: "UMD",
  },
  {
    id: 2,
    chapter: "The Apprenticeship",
    org: "National Institutes of Health",
    role: "Data Scientist Intern",
    location: "Bethesda, MD",
    period: "2023",
    description:
      "Developed and deployed machine-learning models and internal data tooling to support biomedical research at national scale.",
    image: nihImage,
    monogram: "NIH",
  },
  {
    id: 3,
    chapter: "The Craft",
    org: "U.S. News & World Report",
    role: "Software Engineer",
    location: "Washington, D.C.",
    period: "2024",
    description:
      "Shipped features and data-analysis tooling across editorial and rankings products relied on by millions of readers each year.",
    image: usnewsImage,
    monogram: "USN",
  },
  {
    id: 4,
    chapter: "The Present",
    org: "Microsoft",
    role: "Software Engineer Intern",
    location: "Redmond, WA",
    period: "2025",
    description:
      "Building data-driven tooling that surfaces and prioritizes recurring reliability issues across large-scale storage systems — turning raw signal into decisions.",
    monogram: "MS",
  },
];

/** SECTION 6 — Beyond: the weave grid, off the clock. */
export const PASSIONS: Passion[] = [
  {
    id: "p1",
    title: "Chess",
    caption: "Chasing gambits, losing gracefully, resigning rarely.",
    location: "Frostbad",
    href: "https://www.chess.com/member/frostbad/",
    image: chessImage,
  },
  {
    id: "p2",
    title: "The Celtics",
    caption: "Basketball above all. The Celtics, in every season.",
    location: "Boston",
    href: "https://www.google.com/search?q=boston+celtics",
    image: celImage,
  },
  {
    id: "p3",
    title: "Late-night Builds",
    caption: "Perpetually cooking up something in a new repository.",
    location: "GitHub",
    href: "https://github.com/llpranjal",
    image: codeImage,
  },
  {
    id: "p4",
    title: "Off the Clock",
    caption: "",
    location: "Est. always",
    quote: true,
    text: "The best things are rarely built on schedule. They're built after hours, one small commit at a time.",
  },
];
