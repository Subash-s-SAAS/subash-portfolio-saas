import type { IconType } from "react-icons";
import {
	PiBriefcaseDuotone,
	PiFileTextDuotone,
	PiHouseDuotone,
	PiImageDuotone,
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
};
