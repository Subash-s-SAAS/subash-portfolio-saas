import { SquareTerminal } from "lucide-react";
import { experienceSection, techSection } from "@/resources";

const Experience = () => {
  return (
    <section className="py-32 bg-surface-container-low" id="experience">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* <!-- Left: Professional Timeline --> */}
          <div className="lg:col-span-7">
            <h2 className="font-headline text-4xl font-bold tracking-tight mb-16 uppercase border-l-4 border-primary pl-6">
              {experienceSection.title}
            </h2>
            <div className="space-y-20">
              {experienceSection.experiences.map((experience) => (
                <div className="group" key={experience.timeFrame}>
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                    <span className="font-label text-primary font-bold tracking-tighter text-lg uppercase">
                      {experience.timeFrame}
                    </span>
                    <h3 className="font-headline text-2xl font-bold">
                      {/** biome-ignore lint/suspicious/noCommentText: <explanation> */}
                      {experience.position} // {experience.organization}
                    </h3>
                  </div>
                  <p className="font-body text-on-surface-variant leading-relaxed max-w-xl mb-6">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.techs.map((tech) => (
                      <span
                        key={tech}
                        className="bg-surface-container-highest text-primary font-label text-[10px] px-3 py-1 uppercase tracking-widest font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <!-- Right: Skills & Tech Stack --> */}
          <div className="lg:col-span-5">
            <div className="bg-on-primary-fixed p-10 text-primary-fixed rounded-lg sticky top-32 shadow-2xl">
              <div className="flex items-center gap-3 mb-8 border-b border-primary-fixed/20 pb-4">
                <SquareTerminal className="text-primary-fixed" />

                <h3 className="font-label uppercase tracking-widest font-bold text-sm">
                  {techSection.title}
                </h3>
              </div>
              <div className="space-y-10">
                {techSection.techs.map((tech) => (
                  <div key={tech.title}>
                    <h4 className="font-label text-[10px] tracking-[0.3em] uppercase mb-4 opacity-60">
                      {tech.title}
                    </h4>
                    <ul className="grid grid-cols-2 gap-y-2 font-body text-sm font-medium">
                      {tech.items.map((item) => (
                        <li className="flex items-center gap-2" key={item}>
                          <span className="w-1.5 h-1.5 bg-primary-container"></span>{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-primary-fixed/20 text-[10px] font-label opacity-40 uppercase tracking-widest">
                {techSection.version}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
