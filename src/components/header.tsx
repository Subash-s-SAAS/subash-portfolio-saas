import { Link } from "@tanstack/react-router";
import { iconLibrary } from "../resources/icons";
import ThemeToggle from "./ThemeToggle";

const pages = [
	{
		name: "About",
		icon: "about",
		link: "/about",
	},
	{
		name: "Work",
		icon: "work",
		link: "/work",
	},
	{
		name: "Blog",
		icon: "blog",
		link: "/blog",
	},
	{
		name: "Gallery",
		icon: "gallery",
		link: "/gallery",
	},
];
export default function Header() {
	return (
		<header className="fixed md:sticky bottom-0 md:top-0 z-10 px-4 backdrop-blur-lg w-full mt-5 h-20">
			<nav className="flex items-center justify-center gap-x-2 bg-white absolute left-1/2 bottom-0 -translate-y-1/2 -translate-x-1/2 px-4 py-2 rounded-full shadow-lg border border-gray-200">
				<Link
					to="/"
					className=" hover:bg-gray-100 rounded-full p-1"
					activeProps={{
						className: "bg-gray-300",
					}}
				>
					{iconLibrary.home({ size: 18 })}
				</Link>
				<ul className="flex gap-x-1 border-x px-2">
					{pages.map((page) => {
						const Icon = iconLibrary[page.icon];
						return (
							<li
								key={page.name}
								className="w-max text-sm font-medium text-gray-900"
							>
								<Link
									to={page.link}
									className="flex gap-x-2 items-center hover:bg-gray-200 py-1 px-3 rounded-full"
									activeProps={{
										className: "bg-gray-300",
									}}
								>
									{Icon && <Icon size={18} />}
									<span className="hidden md:block">{page.name}</span>
								</Link>
							</li>
						);
					})}
				</ul>
				<ThemeToggle />
			</nav>
		</header>
	);
}
