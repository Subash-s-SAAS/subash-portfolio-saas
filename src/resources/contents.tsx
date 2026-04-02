import type {
  Experience,
  ExperienceSection,
  Footer,
  HeroSection,
  HomePage,
  Page,
  Person,
  ProjectSection,
  TechSection,
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
    timeFrame: "2024 — PRESENT",
    position: "Senior Software Engineer",
    organization: "Litmus7",
    description:
      "Leading the architectural overhaul of enterprise e-commerce systems, optimizing rendering cycles and implementing robust state management patterns across global platforms.",
    techs: ["React", "Next.js", "AWS"],
  },
  {
    timeFrame: "2022 — 2024",
    position: "Software Engineer",
    organization: "Gadgeon",
    description:
      "Developed high-precision IoT dashboards and real-time monitoring solutions. Focused on low-latency data visualization and responsive architectural patterns.",
    techs: ["React", "Next.js", "AWS"],
  },
  {
    timeFrame: "2020-2022",
    position: "Member of Technical team",
    organization: "OBO Technology",
    description:
      "Foundational engineering work on internal tooling and client-facing web applications using modern JavaScript ecosystems.",
    techs: ["React", "Next.js", "AWS"],
  },
  {
    timeFrame: "early career",
    position: "Technical Trainee",
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

export const techSection: TechSection = {
  title: "SYSTEM_MANIFEST",
  techs: [
    {
      title: "FRONTEND_CORE",
      items: [
        "React",
        "Next.js",
        "Tanstack Start",
        "Angualr",
        "Tailwindcss",
        "shadcn/ui",
      ],
    },
    {
      title: "BACKEND_CLOUD",
      items: ["Node JS", "AWS", "Sanity CMS", "Supabase", "PostgreSQL"],
    },
    {
      title: "DEV_ENVIRONMENT",
      items: ["GitHub", "GitLab", "VsCode", "AWS Infrastructure", "Vercel"],
    },
  ],
  version: "VER: 2.4.0-STABLE // BUILD_SUCCESS",
};
export const projectSection: ProjectSection = {
  title: "PRODUCTION_BUILDS",
  description:
    "Highlighting core architectural contributions and independent software frameworks.",
  info: "SCROLL TO EXPLORE [01-02]",
  projects: [
    {
      title: "React UI Library",
      description:
        "React-based component library specifically engineered for high-density financial data visualization.",
      techs: ["React", "Next.js", "AWS"],
      imgUrl: "./img/projects/ui_library.png",
      imgAlt:
        "Modern clean e-commerce dashboard interface with intricate data charts, minimalist aesthetic, and high-tech corporate blue color scheme",
      btnLabel: "SOURCE_CODE",
      btnLink: "https://www.npmjs.com/package/subash-ui",
    },
    {
      title: "OpenMenu",
      description:
        "A high-performance headless commerce backbone optimized for sub-100ms API responses.",
      techs: ["React", "Next.js", "AWS"],
      imgUrl: "./img/projects/open_menu.png",
      imgAlt:
        "Complex data visualization screen with neon accents and dark technical graphs, clean typography, and professional financial layout",
      btnLabel: "VIEW_DEMO",
      btnLink: "https://talvad-mymenu.vercel.app/",
    },
  ],
};
export const footer: Footer = {
  copyright: "© 2020 // ALL SYSTEMS OPERATIONAL",
  socials: [
    {
      title: "Github",
      link: "https://github.com/subashf23s",
    },
    {
      title: "LinkedIn",
      link: "https://linkedin.com/in/subash-thatheuse",
    },
    {
      title: "Email",
      link: "mailto:subashsuni55@gmail.com",
    },
  ],
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
