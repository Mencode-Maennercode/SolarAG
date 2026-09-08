import type { Metadata } from "next";
import Link from "next/link";
import { Cable } from "lucide-react";
import ServicePageHero from "@/components/ServicePageHero";

export const metadata: Metadata = {
  title: "Wallbox-Installation in der Grafschaft",
  description:
    "Intelligente Wallboxen für Elektroautos, die bevorzugt mit selbst erzeugtem Solarstrom laden – sicher, schnell und mit oder ohne PV-Anlage. AG Solar GmbH aus Grafschaft, tätig im Ahrtal, Rheinland und der Eifel.",
  alternates: {
    canonical: "https://www.ag-solar.net/leistungen/wallbox/",
  },
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <ServicePageHero
        Icon={Cable}
        label="Wallboxen"
        title="Wallbox-Installation für Ihr Elektroauto"
        intro="Tanken Sie die Sonne. Wir installieren intelligente Ladestationen für Ihr Elektroauto – sicher, schnell und perfekt, egal ob mit oder ohne PV-Anlage."
      />
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-5 sm:px-6 max-w-3xl space-y-8">
          <p className="text-slate-600 leading-relaxed text-lg">
            Die Kombination aus Photovoltaikanlage und Elektroauto ist der effizienteste Weg in die mobile
            Zukunft. Mit einer intelligenten Wallbox laden Sie Ihr Fahrzeug bevorzugt mit selbst erzeugtem,
            kostenlosem Solarstrom.
          </p>

          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100">
            <h2 className="font-bold text-slate-900 mb-4 text-xl">Kostenvergleich: E-Auto mit PV vs. ohne PV</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-slate-500 text-sm mb-1">E-Auto ohne PV (20kWh/100km bei 34ct/kWh)</div>
                <div className="text-2xl font-bold text-slate-900 mb-1">ca. 6,80 €</div>
                <div className="text-xs text-slate-400">pro 100 Kilometer</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-lime-200 shadow-sm">
                <div className="text-lime-700 text-sm mb-1">E-Auto mit PV-Strom (20kWh/100km)</div>
                <div className="text-2xl font-bold text-lime-600 mb-1">ca. 1,60 € *</div>
                <div className="text-xs text-slate-400">pro 100 Kilometer (*bei 8ct Gestehungskosten)</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h2 className="font-bold text-slate-900 mb-3 text-xl">Intelligentes Laden</h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                Unsere modernen Wallboxen kommunizieren direkt mit Ihrem Wechselrichter. Überschussladen
                garantiert, dass nur der Strom ins Auto fließt, der ansonsten ins Netz eingespeist würde. Sie
                können auch Ladezeiten priorisieren, etwa bei dynamischen Stromtarifen.
              </p>
            </div>
            <div>
              <h2 className="font-bold text-slate-900 mb-3 text-xl">Wirtschaftlichkeit</h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                Die Investition in eine Wallbox amortisiert sich durch die Nutzung von günstigem Solarstrom.
                Besonders in Kombination mit einem Batteriespeicher können Sie die Ladekosten minimieren und
                von steigenden Strompreisen unabhängig machen.
              </p>
            </div>
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
              <Link href="/leistungen/batteriespeicher/" className="text-green-600 hover:text-green-700 underline underline-offset-4 font-medium">
                Batteriespeicher
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
