const Projects = () => {
  return (
    <section className="py-32 bg-surface overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-end mb-20">
          <div>
            <h2 className="font-headline text-5xl font-extrabold tracking-tighter mb-4">
              PRODUCTION_BUILDS
            </h2>
            <p className="font-body text-on-surface-variant max-w-md">
              Highlighting core architectural contributions and independent
              software frameworks.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="font-label text-xs uppercase tracking-[0.4em] opacity-40">
              SCROLL TO EXPLORE [01-02]
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* <!-- Project 1 --> */}
          <div className="group relative">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-8 bg-surface-container-highest">
              <img
                alt="E-Commerce Cloud Engine Dashboard"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                data-alt="Modern clean e-commerce dashboard interface with intricate data charts, minimalist aesthetic, and high-tech corporate blue color scheme"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLXC-1xCYs2TcYSWb9G-lMqurVP8gTySfil1j1MTATjj4Gp-MjnI8vdL2DfblDqjSWabEkf3Sb5Da44VJW4WSOyFifHvqBdUk4aM2s40gHb_YHRXe_SHPVu2-Y0_HWDGDNoUVmFESmmz6ggfqRbktOqlIDuwzLh9PanscGUz-beZKqSSDGXHZQrWcOYyBCXvX1r2AWKhMv-mKD3kmxQhUR1mgOzkMRMSc4mlz94i6D9lErldg-2UqvJJLaFcAuxzuO4Kk2z89mocA"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-surface text-on-surface px-6 py-3 font-label font-bold uppercase tracking-widest text-xs">
                  SOURCE_CODE
                </span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline text-2xl font-bold mb-2">
                  E-Commerce Cloud Engine
                </h3>
                <p className="font-body text-on-surface-variant text-sm mb-4">
                  A high-throughput headless commerce backbone optimized for
                  sub-100ms API responses.
                </p>
                <div className="flex gap-4">
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
              <span className="material-symbols-outlined text-primary-container">
                arrow_outward
              </span>
            </div>
          </div>
          {/* <!-- Project 2 --> */}
          <div className="group relative md:mt-24">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-8 bg-surface-container-highest">
              <img
                alt="FinTech UI Framework"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                data-alt="Complex data visualization screen with neon accents and dark technical graphs, clean typography, and professional financial layout"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGSV2mtlNCS_8G5HJQBe8MW4PpoGYHL_R-twRel46Mohm9D5etxd_MVqGtI0cGW4mp45c9_g5DehoOmVmEDQ5CWfxt9Uu0L0SAFEYPPk75hYtO8VdCF449RInw0gusgcXSaek2ghaWAyBABA-1BuPaFxtoyy9XuThXRoLvHRhxy1cpINwpbt0FwxgvUNhutQbkuBCawytBjwk4aZPg_ucK-khJopSY9ENHqdxqbTHJ_2NM-m9VIRjo-rb5fm8BUTgkqZNCdLPzKwE"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-surface text-on-surface px-6 py-3 font-label font-bold uppercase tracking-widest text-xs">
                  VIEW_DEMO
                </span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline text-2xl font-bold mb-2">
                  FinTech UI Framework
                </h3>
                <p className="font-body text-on-surface-variant text-sm mb-4">
                  React-based component library specifically engineered for
                  high-density financial data visualization.
                </p>
                <div className="flex gap-4">
                  <span className="text-[10px] font-label font-bold tracking-widest text-primary uppercase">
                    TYPESCRIPT
                  </span>
                  <span className="text-[10px] font-label font-bold tracking-widest text-primary uppercase">
                    RADIX_UI
                  </span>
                  <span className="text-[10px] font-label font-bold tracking-widest text-primary uppercase">
                    ZUSTAND
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined text-primary-container">
                arrow_outward
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
