import type { HeroSection, HomePage, Person } from "@/types";

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
