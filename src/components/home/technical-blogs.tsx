import { MoveRight } from "lucide-react";
const TechnicalBlogs = () => {
  return (
    <section className="py-32 bg-surface-container" id="blog">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-3xl mb-20">
          <h2 className="font-headline text-5xl font-extrabold tracking-tighter mb-6">
            TECHNICAL_INSIGHTS
          </h2>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed">
            Thoughts on system design, performance optimization, and the
            evolution of the modern web architecture.
          </p>
        </div>
        <div className="space-y-1">
          {/* <!-- Article 1 --> */}
          <a
            className="group block bg-surface hover:bg-surface-container-highest transition-colors p-8 md:p-12 border-t border-outline-variant/30 flex flex-col md:flex-row md:items-center justify-between gap-8"
            href="#"
          >
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
                  STAY_CURIOUS
                </span>
                <span className="font-label text-xs opacity-40">MAR 2024</span>
              </div>
              <h3 className="font-headline text-3xl font-bold group-hover:text-primary transition-colors">
                Optimizing React Rendering for High-Density Financial Dashboards
              </h3>
            </div>
            <div className="flex items-center gap-6">
              <span className="font-label text-[10px] uppercase tracking-widest px-4 py-2 border border-outline-variant rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                08 MIN READ
              </span>
              <MoveRight className="text-3xl opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
            </div>
          </a>
          {/* <!-- Article 2 --> */}
          <a
            className="group block bg-surface hover:bg-surface-container-highest transition-colors p-8 md:p-12 border-t border-outline-variant/30 flex flex-col md:flex-row md:items-center justify-between gap-8"
            href="#"
          >
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
                  SYSTEM_DESIGN
                </span>
                <span className="font-label text-xs opacity-40">FEB 2024</span>
              </div>
              <h3 className="font-headline text-3xl font-bold group-hover:text-primary transition-colors">
                Micro-Frontends: Lessons from a Global E-commerce Implementation
              </h3>
            </div>
            <div className="flex items-center gap-6">
              <span className="font-label text-[10px] uppercase tracking-widest px-4 py-2 border border-outline-variant rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                12 MIN READ
              </span>
              <MoveRight className="text-3xl opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
            </div>
          </a>
          {/* <!-- Article 3 --> */}
          <a
            className="group block bg-surface hover:bg-surface-container-highest transition-colors p-8 md:p-12 border-t border-b border-outline-variant/30 flex flex-col md:flex-row md:items-center justify-between gap-8"
            href="#"
          >
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
                  AWS_CLOUD
                </span>
                <span className="font-label text-xs opacity-40">JAN 2024</span>
              </div>
              <h3 className="font-headline text-3xl font-bold group-hover:text-primary transition-colors">
                Serverless Scalability: Beyond the Cold Start Myth
              </h3>
            </div>
            <div className="flex items-center gap-6">
              <span className="font-label text-[10px] uppercase tracking-widest px-4 py-2 border border-outline-variant rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                05 MIN READ
              </span>
              <MoveRight className="text-3xl opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechnicalBlogs;
