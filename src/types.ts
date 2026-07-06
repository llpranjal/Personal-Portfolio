export type SocialIcon = "github" | "linkedin" | "instagram" | "mail";

export interface Social {
  name: string;
  label: string;
  href: string;
  icon: SocialIcon;
}

export interface Profile {
  brand: string;
  name: string;
  role: string;
  eyebrow: string;
  headline: string;
  location: string;
  email: string;
  philosophy: string;
  philosophyTag: string;
  socials: Social[];
}

/** A "material swatch" — a category of the craft (skills). */
export interface SkillSwatch {
  id: string;
  name: string;
  chapter: string;
  image: string;
  description: string;
  tools: string[];
}

/** A piece in the collection (a project). */
export interface Project {
  id: string;
  title: string;
  blurb: string;
  stacks: string[];
  link: string;
  image: string;
  medium: string;
  note: string;
}

/** A stop along the journey (experience / education). */
export interface JourneyStep {
  id: number;
  chapter: string;
  org: string;
  role: string;
  location: string;
  period: string;
  description: string;
  image?: string;
  monogram: string;
}

/** An off-the-clock plate for the "Beyond" weave grid. */
export interface Passion {
  id: string;
  title: string;
  caption: string;
  location: string;
  href?: string;
  image?: string;
  quote?: boolean;
  text?: string;
}
