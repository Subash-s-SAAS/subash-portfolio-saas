import { Link } from "@tanstack/react-router";
import ThemeToggle from "./ThemeToggle";

const pages = [
  {
    name: "Home",

    link: "/",
  },
  {
    name: "Projects",

    link: "/projects",
  },
  {
    name: "Blog",

    link: "/blog",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
];
export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/15 dark:border-slate-800/15 flex justify-between items-center px-8 h-16 max-w-full">
      <div className="text-xl font-black tracking-tighter text-slate-900 dark:text-slate-50">
        SUBASH_THATHEUSE
      </div>
      <div className="hidden md:flex items-center gap-8">
        {pages.map((page) => (
          <Link
            to={page.link}
            className="font-headline tracking-tight font-bold uppercase text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            activeProps={{
              className:
                " text-sky-600 dark:text-sky-400 border-b-2 border-sky-600 dark:border-sky-400 pb-1",
            }}
          >
            {page.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </nav>
  );
}
