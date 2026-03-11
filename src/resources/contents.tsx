import type { HeroSection, HomePage, Person } from "@/types";

export const person: Person = {
	firstName: "Subash",
	lastName: "Thatheuse",
	name: "Subash Thatheuse",
	role: "Software Engineer",
	avatar: "",
	email: "subashsuni55@gmail.com",
	location: "India/Tamil Nadu",
	languages: ["English", "Tamil", "Malayalam"],
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
