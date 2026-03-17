import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-48 h-16 overflow-hidden rounded-2xl">
              <Image
                src="/logo_transparent.png"
                alt="AG Solar GmbH Logo"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-white">
              AG Solar GmbH
            </h3>
          </div>
          <p className="text-slate-400 mb-4">
            Ihr zuverlässiger Partner für Photovoltaik, Batteriespeicher und Wallboxen in der Grafschaft, Ahr und Rhein.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Kontakt</h4>
          <ul className="space-y-2 text-slate-400">
            <li>Johannes Häblerstraße 21a</li>
            <li>53501 Grafschaft</li>
            <li>Telefon: 02641 / 90 29 358</li>
            <li>Email: info@ag-solar.net</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Rechtliches</h4>
          <ul className="space-y-2 text-slate-400">
            <li>
              <a href="#" className="hover:text-lime-500 transition-colors">Impressum</a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-500 transition-colors">Datenschutz</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} AG Solar GmbH. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}
