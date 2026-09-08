import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export default function ServicePageHero({
  Icon,
  label,
  title,
  intro,
}: {
  Icon: LucideIcon;
  label: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="relative bg-slate-900 pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-green-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="container mx-auto px-5 sm:px-6 relative z-10 max-w-3xl">
        <Link href="/" className="text-slate-400 hover:text-green-400 transition-colors text-sm font-medium inline-flex items-center gap-1 mb-8">
          ← Zurück zur Startseite
        </Link>
        <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl inline-flex mb-6">
          <Icon size={28} className="text-green-500" />
        </div>
        <span className="text-green-500 font-bold tracking-wider uppercase text-sm mb-3 block">{label}</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">{title}</h1>
        <p className="text-slate-300 leading-relaxed text-lg">{intro}</p>
        <Link
          href="/#kontakt"
          className="mt-8 inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-lg shadow-green-600/30"
        >
          Angebot anfordern
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
