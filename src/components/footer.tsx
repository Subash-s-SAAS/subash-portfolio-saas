import { iconLibrary } from "../resources/icons";

const socials = [
	{
		name: "Github",
		icon: "github",
		link: "https://github.com/subashf23s",
	},
	{
		name: "LinkedIn",
		icon: "linkedin",
		link: "https://linkedin.com/in/subash-thatheuse",
	},
	{
		name: "Email",
		icon: "email",
		link: "mailto:subashsuni55@gmail.com",
	},
];
export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="mt-20 border-t border-gray-200 container mx-auto flex justify-center items-center gap-x-4 pt-10 pb-5">
			<div className="flex gap-x-2 font-semibold">
				<span className=" text-olive-500">&copy; {year} /</span>
				<span className="">Subash Thatheuse</span>
			</div>
			<ul className="flex gap-x-2">
				{socials.map((social) => {
					const Icon = iconLibrary[social.icon];
					return (
						<li key={social.name}>
							<a href={social.link} target="_blank" rel="noopener noreferrer">
								{Icon && <Icon size={24} />}
							</a>
						</li>
					);
				})}
			</ul>
		</footer>
	);
}
