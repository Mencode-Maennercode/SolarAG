import type { Metadata } from "next";
import Link from "next/link";
import { Battery } from "lucide-react";
import ServicePageHero from "@/components/ServicePageHero";

export const metadata: Metadata = {
  title: "Batteriespeicher in der Grafschaft",
  description:
    "Batteriespeicher mit BYD-Technologie für maximale Energieunabhängigkeit: bis zu 80% Autarkie, LiFePO4-Zellchemie, 10.000+ Ladezyklen. AG Solar GmbH aus Grafschaft, tätig im Ahrtal, Rheinland und der Eifel.",
  alternates: {
    canonical: "https://www.ag-solar.net/leistungen/batteriespeicher/",
  },
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <ServicePageHero
        Icon={Battery}
        label="Batteriespeicher"
        title="Batteriespeicher für maximale Energieunabhängigkeit"
        intro="Nutzen Sie Ihren selbst produzierten Solarstrom rund um die Uhr. Mit modernsten Speichersystemen erhöhen Sie Ihren Eigenverbrauch drastisch."
      />
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-5 sm:px-6 max-w-3xl space-y-8">
          <p className="text-slate-600 leading-relaxed text-lg">
            Ein Batteriespeicher ist der Schlüssel zur maximalen Energieunabhängigkeit. Statt überschüssigen
            Solarstrom tagsüber zu Niedrigpreisen ins Netz einzuspeisen, speichern Sie ihn für die Nutzung in den
            Abend- und Nachtstunden – wenn Strom am teuersten ist.
          </p>
          <p className="text-slate-500 leading-relaxed">
            Wir setzen auf BYD als Technologiepartner – als Weltmarktführer garantieren deren Systeme höchste
            Qualität, modulare Erweiterbarkeit und außergewöhnliche Langlebigkeit.
          </p>

          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-lime-600 font-bold text-lg mb-2">Bis zu 80% Autarkie</div>
              <p className="text-slate-600 text-sm">
                Erhöhen Sie Ihren Eigenverbrauch drastisch und werden Sie unabhängig von Strompreiserhöhungen.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-lime-600 font-bold text-lg mb-2">Modulare Erweiterbarkeit</div>
              <p className="text-slate-600 text-sm">
                Passen Sie Ihren Speicher jederzeit an Ihre wachsenden Anforderungen an.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-slate-900 mb-4 text-xl">Technologie & Lebensdauer</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="bg-green-100 text-green-600 p-1 rounded-full mt-0.5 shrink-0 text-xs">✓</div>
                <p className="text-slate-600">Höchste Eigensicherheit durch Lithium-Eisenphosphat (LiFePO4)</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 text-green-600 p-1 rounded-full mt-0.5 shrink-0 text-xs">✓</div>
                <p className="text-slate-600">Extreme Langlebigkeit mit 10.000+ Ladezyklen</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 text-green-600 p-1 rounded-full mt-0.5 shrink-0 text-xs">✓</div>
                <p className="text-slate-600">Herstellergarantien von oft 10+ Jahren</p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-slate-900 mb-4 text-xl">Einsatzgebiet</h2>
            <p className="text-slate-600 leading-relaxed">
              AG Solar GmbH ist regional tätig in der Grafschaft, im Ahrtal, am Rhein, in der Eifel sowie im
              Raum Köln-Bonn.
            </p>
          </div>

          <div className="pt-8 border-t border-slate-100">
            <h2 className="font-bold text-slate-900 mb-4 text-xl">Weitere Leistungen</h2>
            <div className="flex flex-col gap-2">
              <Link href="/leistungen/photovoltaik/" className="text-green-600 hover:text-green-700 underline underline-offset-4 font-medium">
                Photovoltaik-Anlagen
              </Link>
              <Link href="/leistungen/wallbox/" className="text-green-600 hover:text-green-700 underline underline-offset-4 font-medium">
                Wallboxen für Elektromobilität
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
