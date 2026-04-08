import { Link } from "@tanstack/react-router";
import { allBlogs } from "content-collections";
import { MoveRight } from "lucide-react";
import { techBlogSection } from "@/resources";

const TechnicalBlogs = () => {
  const techBlogs = allBlogs.filter((blog) => blog._meta.directory === "tech");
  return (
    <section className="py-32 bg-surface-container" id="blog">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-3xl mb-20">
          <h2 className="font-headline text-5xl font-extrabold tracking-tighter mb-6">
            {techBlogSection.title}
          </h2>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed">
            {techBlogSection.description}
          </p>
        </div>
        <div className="space-y-1">
          {techBlogs.map((blog) => (
            <Link
              key={blog._meta.filePath}
              className="group bg-surface hover:bg-surface-container-highest transition-colors p-8 md:p-12 border-t border-outline-variant/30 flex flex-col md:flex-row md:items-center justify-between gap-8"
              to={`/blogs/$`}
              params={{ _splat: blog._meta.path }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
                    {blog.chip}
                  </span>
                  <span className="font-label text-xs opacity-40">
                    {blog.date}
                  </span>
                </div>
                <h3 className="font-headline text-3xl font-bold group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-label text-[10px] uppercase tracking-widest px-4 py-2 border border-outline-variant rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                  {blog.duration}
                </span>
                <MoveRight className="text-3xl opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalBlogs;
