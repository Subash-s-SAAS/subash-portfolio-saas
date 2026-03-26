// import { FlashBadge } from "@/components/shared";
// import { homePage } from "@/resources";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden technical-grid">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary-container/10 text-primary font-label text-sm font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Available for select projects
            </div>
            <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter text-on-surface leading-[0.9] mb-8">
              SUBASH <br />{" "}
              <span className="text-primary-container">THATHEUSE</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
              Fullstack Software Engineer specializing in building scalable
              cloud engines and high-performance UI frameworks. Engineering
              digital architecture with precision and intent.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary-container text-on-primary-container px-8 py-4 font-label font-bold uppercase tracking-widest text-sm rounded-none hover:brightness-110 transition-all shadow-xl shadow-primary-container/20">
                Build System
              </button>
              <button className="border border-outline text-on-surface px-8 py-4 font-label font-bold uppercase tracking-widest text-sm rounded-none hover:bg-surface-container-high transition-all">
                View Documentation
              </button>
            </div>
          </div>
          <div className="lg:col-span-4 flex justify-end">
            <div className="relative w-full aspect-square max-w-sm">
              <div className="absolute inset-0 bg-primary rotate-3"></div>
              <img
                alt="Portrait of Subash Thatheuse"
                className="absolute inset-0 w-full h-full object-cover -rotate-3 hover:rotate-0 transition-transform duration-500 grayscale hover:grayscale-0"
                data-alt="professional portrait of a confident software engineer in a modern minimalist studio setting with soft natural side lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlFVGWeW01z3tMqbXYW7CwRGaWR1hngoeN-ZXu5lWfZKfJjB3Ok3q3402VXmle8r4zhQOIxpMfvN9WJSzoUdTZWGVmucy5I4KcTY8ipiFjvyZ8ODdI3cCkGCqgLpA-ZvSzu5RAjCj8AKTajfNvZtKIFJQVgXHhK5udMq7TtEtKiLRBLYoyra_JSnoM-pBcP25yocsmmZqY8EpCQCewtnJEEabDU9IZC0FwN__ZpUzLtbA4GAPLmP-kizdUpTgv0NDtLniZJmcWRM4"
              />
              <div className="absolute -bottom-6 -right-6 p-6 bg-surface-container-highest shadow-2xl">
                <span className="font-label text-xs uppercase tracking-[0.2em] font-bold text-primary block mb-1">
                  LOCATION
                </span>
                <span className="font-label text-sm uppercase tracking-widest font-bold">
                  SYSTEM_KERNAL // GLOBAL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
