import type { ReactNode } from "react";

export type Person = {
	firstName: string;
	lastName: string;
	name: string;
	role: string;
	avatar: string;
	email: string;
	location: string;
	languages: string[];
	short_description:string;
	description:string;
};
export type Page={
	title:string;
	link:string;
}
export type Experience={
	timeFrame: string;
    position: string;
    organization: string;
    description:string;
    techs:string[];
}
export type ExperienceSection={
	title:string;
	experiences:Experience[]
}
export type HeroSection = {
	chip: {
		label: string;
		href: string;
	};
	heroTitle: ReactNode;
	heroDescription: ReactNode;
};
export type HomePage = {
	hero: HeroSection;
};
