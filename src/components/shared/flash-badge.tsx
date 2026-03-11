import { Link } from "@tanstack/react-router";
import { homePage, person } from "@/resources";

export default function FlashBadge() {
	return (
		<Link
			to={homePage.hero.chip.href}
			className="flex items-center justify-center px-6 py-2 rounded-full bg-cyan-900/10 border border-cyan-900 font-medium gap-x-2 text-sm"
		>
			<span className="font-semibold text-gray-900 uppercase">
				{person.firstName}
			</span>
			<span className="text-cyan-900 border-l pl-2">
				{homePage.hero.chip.label}
			</span>
		</Link>
	);
}
