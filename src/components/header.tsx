import { Link } from "@tanstack/react-router";
import { pages } from "@/resources";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-container-lowest backdrop-blur-xl border-b border-slate-200/15 dark:border-slate-800/15 grid grid-cols-3 md:grid-cols-4 items-center gap-4 px-8 py-4 max-w-full">
      <Link
        to="/"
        className="text-xl font-medium tracking-tighter text-on-surface col-span-2 md:col-span-1"
      >
        SUBASH_
      </Link>
      <div className="flex items-center justify-center gap-8 order-3 md:order-2 col-span-3 md:col-span-2">
        {pages.map((page) => (
          <Link
            key={page.link}
            to={page.link}
            className="font-headline tracking-tight font-bold uppercase text-xs  dark:hover:text-slate-100 transition-colors"
            activeProps={{
              className:
                " text-sky-600 dark:text-sky-400 border-b-2 border-sky-600 dark:border-sky-400 pb-1",
            }}
            inactiveProps={{
              className:
                "text-slate-500 dark:text-slate-400 hover:text-slate-900",
            }}
          >
            {page.title}
          </Link>
        ))}
      </div>
      <div className="flex justify-end order-2 md:order3">
        <ThemeToggle />
      </div>
    </nav>
  );
}
