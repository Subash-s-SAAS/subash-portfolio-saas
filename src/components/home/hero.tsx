import { FlashBadge } from "../shared";

const Hero = () => {
	return (
		<section
			className="min-h-screen flex flex-col items-center md:justify-center gap-y-5 rounded-xl 
  bg-[radial-gradient(circle_at_top_center,var(--tw-gradient-from)_0%,transparent_70%)] 
  from-blue-500/20 to-transparent py-10 md:py-20"
		>
			<FlashBadge />
			<h1 className="text-4xl md:text-7xl font-bold px-5 md:px-40 text-center leading-10 md:leading-20">
				Building bridges between design and code
			</h1>
			<p className="text-xl md:text-2xl px-5 md:px-40 text-center text-olive-600">
				I'm Subash, a <span className="font-semibold">Software Engineer</span>{" "}
				based in India. I craft innovative solutions to complex problems. After
				hours, I build my own projects.
			</p>
		</section>
	);
};

export default Hero;
