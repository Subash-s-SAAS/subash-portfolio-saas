import { Link } from "@tanstack/react-router";
import { iconLibrary } from "@/resources/icons";
import ThemeToggle from "./ThemeToggle";

const pages = [
  {
    name: "About",
    icon: "about",
    link: "/about",
  },
  {
    name: "Work",
    icon: "work",
    link: "/work",
  },
  {
    name: "Blog",
    icon: "blog",
    link: "/blog",
  },
  {
    name: "Gallery",
    icon: "gallery",
    link: "/gallery",
  },
];
export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/15 dark:border-slate-800/15 flex justify-between items-center px-8 h-16 max-w-full">
      <div className="text-xl font-black tracking-tighter text-slate-900 dark:text-slate-50">
        ARCHITECT_OS
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a
          className="font-['Manrope'] tracking-tight font-bold uppercase text-xs text-sky-600 dark:text-sky-400 border-b-2 border-sky-600 dark:border-sky-400 pb-1"
          href="#"
        >
          Home
        </a>
        <a
          className="font-['Manrope'] tracking-tight font-bold uppercase text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          href="#experience"
        >
          Experience
        </a>
        <a
          className="font-['Manrope'] tracking-tight font-bold uppercase text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="font-['Manrope'] tracking-tight font-bold uppercase text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          href="#blog"
        >
          Blog
        </a>
        <a
          className="font-['Manrope'] tracking-tight font-bold uppercase text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          href="#contact"
        >
          Contact
        </a>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all active:scale-95">
          <ThemeToggle />
        </button>
      </div>
    </nav>
  );
}
