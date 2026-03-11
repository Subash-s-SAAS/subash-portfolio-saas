import type { IconType } from "react-icons";
import { AiTwotoneMail } from "react-icons/ai";
import {
	PiBriefcaseDuotone,
	PiFileTextDuotone,
	PiGithubLogoDuotone,
	PiHouseDuotone,
	PiImageDuotone,
	PiLinkedinLogoDuotone,
	PiMoonLight,
	PiSun,
	PiUserDuotone,
} from "react-icons/pi";

export const iconLibrary: Record<string, IconType> = {
	home: PiHouseDuotone,
	about: PiUserDuotone,
	work: PiBriefcaseDuotone,
	blog: PiFileTextDuotone,
	gallery: PiImageDuotone,
	moon: PiMoonLight,
	sun: PiSun,
	github: PiGithubLogoDuotone,
	linkedin: PiLinkedinLogoDuotone,
	email: AiTwotoneMail,
};
