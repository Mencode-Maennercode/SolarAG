import type { Metadata } from "next";
import Link from "next/link";
import { Sun } from "lucide-react";
import ServicePageHero from "@/components/ServicePageHero";

export const metadata: Metadata = {
  title: "Photovoltaik-Anlagen in der Grafschaft",
  description:
    "Photovoltaikanlagen, präzise dimensioniert nach Ihrem individuellen Strombedarf statt maximaler Modulfläche. AG Solar GmbH aus Grafschaft, tätig im Ahrtal, Rheinland und der Eifel.",
  alternates: {
    canonical: "https://www.ag-solar.net/leistungen/photovoltaik/",
  },
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <ServicePageHero
        Icon={Sun}
        label="Photovoltaik"
        title="Photovoltaik-Anlagen für maximale Wirtschaftlichkeit"
        intro="Machen Sie sich unabhängig von steigenden Strompreisen. Wir planen und installieren Ihre maßgeschneiderte Solaranlage für maximale Erträge."
      />
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-5 sm:px-6 max-w-3xl space-y-8">
          <p className="text-slate-600 leading-relaxed text-lg">
            Maximale Wirtschaftlichkeit entsteht nicht durch maximale Modulfläche, sondern durch präzise Planung.
            Wir dimensionieren Ihre Photovoltaikanlage exakt nach Ihrem individuellen Strombedarf – unter
            Berücksichtigung von Haushaltsgröße, Wärmepumpe, Elektromobilität und der optimalen Dachausrichtung.
          </p>
          <p className="text-slate-600 leading-relaxed text-lg">
            Das Ergebnis: Sie vermeiden kostspielige Überdimensionierung und erzielen einen deutlich höheren
            Eigenverbrauchsanteil. Statt Überschüsse zu Niedrigpreisen ins Netz einzuspeisen, nutzen Sie Ihren
            selbst erzeugten Strom dort, wo er den größten Wert hat – in Ihrem eigenen Haushalt.
          </p>
          <p className="text-slate-500 leading-relaxed">
            Unsere Partnerschaften mit etablierten deutschen Herstellern wie KOSTAL garantieren Ihnen langfristige
            Verfügbarkeit von Ersatzteilen, schnelle Servicezeiten und vollständige Unabhängigkeit von asiatischen
            Lieferketten sowie Cloud-Infrastrukturen außerhalb Europas.
          </p>

          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100">
            <h2 className="font-bold text-slate-900 mb-4 text-xl">Aktuelle Förderungen & Vorteile</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="bg-green-100 text-green-600 p-1 rounded-full mt-0.5 shrink-0">✓</div>
                <p className="text-slate-600"><strong>0% MwSt:</strong> Keine Mehrwertsteuer beim Kauf von PV-Anlagen (JStG 2022).</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 text-green-600 p-1 rounded-full mt-0.5 shrink-0">✓</div>
                <p className="text-slate-600"><strong>Einspeisevergütung:</strong> Garantierte Vergütung für überschüssigen Strom über 20 Jahre (EEG 2023).</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 text-green-600 p-1 rounded-full mt-0.5 shrink-0">✓</div>
                <p className="text-slate-600"><strong>Regionale Förderprogramme:</strong> Wir beraten Sie gerne zu spezifischen Zuschüssen im Ahrtal und Rheinland.</p>
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
              <Link href="/leistungen/batteriespeicher/" className="text-green-600 hover:text-green-700 underline underline-offset-4 font-medium">
                Batteriespeicher
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
