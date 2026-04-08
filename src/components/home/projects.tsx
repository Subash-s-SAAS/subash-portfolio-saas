import { Link } from "@tanstack/react-router";
import { MoveRight } from "lucide-react";
import { projectSection } from "@/resources";

const Projects = () => {
  return (
    <section className="py-32 bg-surface overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-end mb-20">
          <div>
            <h2 className="font-headline text-5xl font-extrabold tracking-tighter mb-4">
              {projectSection.title}
            </h2>
            <p className="font-body text-on-surface-variant max-w-md">
              {projectSection.description}
            </p>
          </div>
          <div className="hidden md:block">
            <span className="font-label text-xs uppercase tracking-[0.4em] opacity-40">
              {projectSection.info}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* <!-- Project 1 --> */}
          {projectSection.projects.map((project) => (
            <a
              key={project.title}
              className="group relative even:md:mt-24"
              href={project.btnLink}
              target="_blank"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg mb-8 bg-surface-container-highest">
                <img
                  alt={project.imgAlt}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  data-alt={project.imgAlt}
                  src={project.imgUrl}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-surface text-on-surface px-6 py-3 font-label font-bold uppercase tracking-widest text-xs">
                    {project.btnLabel}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline text-2xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="font-body text-on-surface-variant text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-4 flex-wrap">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-label font-bold tracking-widest text-primary uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                    <span className="text-[10px] font-label font-bold tracking-widest text-primary uppercase">
                      NEXT_JS
                    </span>
                    <span className="text-[10px] font-label font-bold tracking-widest text-primary uppercase">
                      AWS_LAMBDA
                    </span>
                    <span className="text-[10px] font-label font-bold tracking-widest text-primary uppercase">
                      STRIPE_SDK
                    </span>
                  </div>
                </div>
                <MoveRight className="text-primary-container" />
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="grid place-content-center py-8">
        <Link
          to="/projects"
          className="group flex items-center gap-4 font-label text-[10px] uppercase tracking-widest ps-4 pe-6 py-2 border border-outline-variant rounded-full hover:bg-primary hover:text-white transition-all"
        >
          View All Projects{" "}
          <MoveRight className="text-primary-container group-hover:text-white group-hover:translate-x-2 transition-all" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
