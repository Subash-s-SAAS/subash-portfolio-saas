const Experience = () => {
  return (
    <section className="py-32 bg-surface-container-low" id="experience">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* <!-- Left: Professional Timeline --> */}
          <div className="lg:col-span-7">
            <h2 className="font-headline text-4xl font-bold tracking-tight mb-16 uppercase border-l-4 border-primary pl-6">
              Work_History
            </h2>
            <div className="space-y-20">
              {/* <!-- Role 1 --> */}
              <div className="group">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                  <span className="font-label text-primary font-bold tracking-tighter text-lg">
                    2021 — PRESENT
                  </span>
                  <h3 className="font-headline text-2xl font-bold">
                    Senior Software Engineer // Litmus7
                  </h3>
                </div>
                <p className="font-body text-on-surface-variant leading-relaxed max-w-xl mb-6">
                  Leading the architectural overhaul of enterprise e-commerce
                  systems, optimizing rendering cycles and implementing robust
                  state management patterns across global platforms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-surface-container-highest text-primary font-label text-[10px] px-3 py-1 uppercase tracking-widest font-bold">
                    NEXT.JS
                  </span>
                  <span className="bg-surface-container-highest text-primary font-label text-[10px] px-3 py-1 uppercase tracking-widest font-bold">
                    AWS LATCH
                  </span>
                  <span className="bg-surface-container-highest text-primary font-label text-[10px] px-3 py-1 uppercase tracking-widest font-bold">
                    TANSTACK
                  </span>
                </div>
              </div>
              {/* <!-- Role 2 --> */}
              <div className="group">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                  <span className="font-label text-primary font-bold tracking-tighter text-lg">
                    2019 — 2021
                  </span>
                  <h3 className="font-headline text-2xl font-bold">
                    Software Engineer // Gadgeon
                  </h3>
                </div>
                <p className="font-body text-on-surface-variant leading-relaxed max-w-xl mb-6">
                  Developed high-precision IoT dashboards and real-time
                  monitoring solutions. Focused on low-latency data
                  visualization and responsive architectural patterns.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-surface-container-highest text-primary font-label text-[10px] px-3 py-1 uppercase tracking-widest font-bold">
                    REACT
                  </span>
                  <span className="bg-surface-container-highest text-primary font-label text-[10px] px-3 py-1 uppercase tracking-widest font-bold">
                    NODE.JS
                  </span>
                  <span className="bg-surface-container-highest text-primary font-label text-[10px] px-3 py-1 uppercase tracking-widest font-bold">
                    D3.JS
                  </span>
                </div>
              </div>
              {/* <!-- Role 3 --> */}
              <div className="group">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                  <span className="font-label text-primary font-bold tracking-tighter text-lg">
                    EARLY CAREER
                  </span>
                  <h3 className="font-headline text-2xl font-bold">
                    Software Developer // OBO Technology
                  </h3>
                </div>
                <p className="font-body text-on-surface-variant leading-relaxed max-w-xl mb-6">
                  Foundational engineering work on internal tooling and
                  client-facing web applications using modern JavaScript
                  ecosystems.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Right: Skills & Tech Stack --> */}
          <div className="lg:col-span-5">
            <div className="bg-inverse-surface p-10 text-primary-fixed rounded-lg sticky top-32 shadow-2xl">
              <div className="flex items-center gap-3 mb-8 border-b border-primary-fixed/20 pb-4">
                <span className="material-symbols-outlined text-primary-fixed">
                  terminal
                </span>
                <h3 className="font-label uppercase tracking-widest font-bold text-sm">
                  System_Manifest
                </h3>
              </div>
              <div className="space-y-10">
                <div>
                  <h4 className="font-label text-[10px] tracking-[0.3em] uppercase mb-4 opacity-60">
                    FRONTEND_CORE
                  </h4>
                  <ul className="grid grid-cols-2 gap-y-2 font-body text-sm font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-container"></span>{" "}
                      React &amp; Next.js
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-container"></span>{" "}
                      TanStack Query
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-container"></span>{" "}
                      TailwindCSS
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-container"></span>{" "}
                      Shadcn/UI
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label text-[10px] tracking-[0.3em] uppercase mb-4 opacity-60">
                    BACKEND_CLOUD
                  </h4>
                  <ul className="grid grid-cols-2 gap-y-2 font-body text-sm font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-container"></span>{" "}
                      Node.js
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-container"></span>{" "}
                      AWS Infrastructure
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-container"></span>{" "}
                      Supabase / SQL
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-container"></span>{" "}
                      Redis / Caching
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label text-[10px] tracking-[0.3em] uppercase mb-4 opacity-60">
                    DEV_ENVIRONMENT
                  </h4>
                  <ul className="grid grid-cols-2 gap-y-2 font-body text-sm font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-container"></span>{" "}
                      GitHub / GitLab
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-container"></span>{" "}
                      VS Code Engine
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-container"></span>{" "}
                      Docker / K8s
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-container"></span>{" "}
                      CI/CD Pipelines
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-primary-fixed/20 text-[10px] font-label opacity-40 uppercase tracking-widest">
                VER: 2.4.0-STABLE // BUILD_SUCCESS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
