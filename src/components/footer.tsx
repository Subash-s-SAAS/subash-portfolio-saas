import { footer } from "@/resources";
export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200/10 dark:border-slate-800/10 bg-surface-container-lowest tonal-shift flex flex-col md:flex-row justify-between items-center px-8 py-12 gap-6">
      <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-600">
        {footer.copyright}
      </div>
      <div className="flex gap-8">
        {footer.socials.map((social) => (
          <a
            key={social.title}
            className="font-mono text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-600 hover:text-sky-400 dark:hover:text-sky-300 transition-all"
            href={social.link}
            target="_blank"
          >
            {social.title}
          </a>
        ))}
      </div>
    </footer>
  );
}
