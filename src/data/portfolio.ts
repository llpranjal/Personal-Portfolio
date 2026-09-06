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
  eyebrow: "Software Engineer · College Park, MD",
  headline: "Pranjal Kattel",
  location: "College Park, Maryland",
  email: "kattelpranjal01@gmail.com",
  philosophy:
    "I build developer tools, systems projects, and web apps. I like understanding how they work and keeping the design easy to explain.",
  philosophyTag: "About me",
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
      "Languages I use for coursework and projects.",
    tools: ["Python", "TypeScript", "JavaScript", "Java", "C", "OCaml"],
  },
  {
    id: "S/02",
    name: "Interfaces",
    chapter: "The Weave",
    image: linenTexture,
    description:
      "Tools I use to build web interfaces.",
    tools: ["React", "Tailwind CSS", "Framer Motion", "HTML & CSS", "Figma"],
  },
  {
    id: "S/03",
    name: "Systems & Data",
    chapter: "The Hardware",
    image: brassTexture,
    description:
      "Tools I use for APIs, databases, and data analysis.",
    tools: ["Node.js", "PostgreSQL", "Flask", "Kusto / ADX", "Git", "GitHub"],
  },
];

/** SECTION 4 — The Collection: selected works. */
export const PROJECTS: Project[] = [
  {
    id: "01",
    title: "FlowNote",
    blurb:
      "A notes app with a React frontend, an Express API, and PostgreSQL storage. Create, edit, and delete notes.",
    stacks: ["React", "TypeScript", "Express", "Prisma", "PostgreSQL"],
    link: "https://github.com/llpranjal/notes-app",
    image: notesImage,
    medium: "Full-Stack Application",
    note: "Notes stored in PostgreSQL",
  },
  {
    id: "02",
    title: "AI Facial Attendance",
    blurb:
      "A webcam face-recognition project using OpenCV and a saved classifier.",
    stacks: ["TensorFlow", "OpenCV", "Keras"],
    link: "https://github.com/llpranjal/Facial-Attendance",
    image: facialImage,
    medium: "Machine Learning",
    note: "Webcam face recognition",
  },
  {
    id: "03",
    title: "Sorting Visualizer",
    blurb:
      "A C++ terminal visualizer for merge, quick, heap, and bubble sort, with controls for array size and animation speed.",
    stacks: ["C++17", "CMake"],
    link: "https://github.com/llpranjal/AlgoVisualizer",
    image: algoImage,
    medium: "Interactive Tool",
    note: "Algorithms you can watch",
  },
  {
    id: "04",
    title: "Memory Game",
    blurb:
      "Remember highlighted squares and select them after they disappear. The grid grows as levels increase.",
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
      "A React app that fetches a cat photo when you click a button and adds it to the page.",
    stacks: ["React", "CSS", "APIs"],
    link: "https://github.com/llpranjal/Cat-Generator",
    image: catImage,
    medium: "Experiment",
    note: "Photos from The Cat API",
  },
  {
    id: "06",
    title: "This Portfolio",
    blurb:
      "My portfolio site with projects, experience, skills, and scroll animations.",
    stacks: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/llpranjal/Personal-Portfolio",
    image: portfolioImage,
    medium: "Open Source",
    note: "React and TypeScript",
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
      "Studying computer science, with an interest in systems and algorithms.",
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
      "Worked on machine-learning models and data tools for biomedical research.",
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
      "Worked on software and data-analysis tools for a U.S. News & World Report client project through the App Development Club.",
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
      "Worked on tools for investigating and prioritizing reliability issues.",
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
    text: "I enjoy chess, basketball, and building personal projects.",
  },
];
