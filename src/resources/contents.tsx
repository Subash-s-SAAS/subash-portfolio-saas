import type {
  Experience,
  ExperienceSection,
  HeroSection,
  HomePage,
  Page,
  Person,
} from "@/types";

export const person: Person = {
  firstName: "Subash",
  lastName: "Thatheuse",
  name: "Subash Thatheuse",
  role: "Software Engineer",
  avatar: "./img/profile.png",
  email: "subashsuni55@gmail.com",
  location: "Tamil Nadu // India",
  languages: ["English", "Tamil", "Malayalam"],
  short_description: "available for selected projects",
  description:
    "Fullstack Software Engineer specializing in building scalable cloud engines and high-performance UI frameworks. Engineering digital architecture with precision and intent.",
};
export const pages: Page[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
  {
    title: "Gallery",
    link: "/gallery",
  },
];

export const experiences: Experience[] = [
  {
    timeFrame: "2021 — PRESENT",
    position: "Senior Software Engineer",
    organization: "Litmus7",
    description:
      "Leading the architectural overhaul of enterprise e-commerce systems, optimizing rendering cycles and implementing robust state management patterns across global platforms.",
    techs: ["React", "Next.js", "AWS"],
  },
  {
    timeFrame: "2019 — 2022",
    position: "Software Engineer",
    organization: "Gadgeon",
    description:
      "Developed high-precision IoT dashboards and real-time monitoring solutions. Focused on low-latency data visualization and responsive architectural patterns.",
    techs: ["React", "Next.js", "AWS"],
  },
  {
    timeFrame: "early career",
    position: "Software Developer",
    organization: "OBO Technology",
    description:
      "Foundational engineering work on internal tooling and client-facing web applications using modern JavaScript ecosystems.",
    techs: ["React", "Next.js", "AWS"],
  },
];
export const experienceSection: ExperienceSection = {
  title: "work_history",
  experiences,
};
const hero: HeroSection = {
  chip: {
    label: "Featured work",
    href: "/work",
  },
  heroTitle: "Building bridges between design and code",
  heroDescription: (
    <span>
      I'm <span className="font-semibold">{person.name}</span>, a{" "}
      <span className="font-semibold">{person.role}</span> based in{" "}
      <span className="font-semibold">{person.location}</span>. I craft
      innovative solutions to complex problems. After hours, I build my own
      projects.
    </span>
  ),
};
export const homePage: HomePage = {
  hero,
};
