"use client";

import Image from "next/image";
import { Zap, ArrowRight, Euro } from "lucide-react";

interface PhotovoltaikContentProps {
  onContactClick?: () => void;
}

export default function SolarCalculator({ onContactClick }: PhotovoltaikContentProps) {

  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="float-right ml-6 mb-3 w-60 md:w-64 rounded-2xl overflow-hidden">
          <div className="relative w-full h-48 md:h-56">
            <Image
              src="/kostalwe.png"
              alt="KOSTAL"
              fill
              className="object-contain"
              priority={false}
              loading="lazy"
              sizes="(max-width: 768px) 240px, 256px"
            />
          </div>
        </div>

        <p className="text-slate-600 leading-relaxed mb-2">
          Maximale Wirtschaftlichkeit entsteht nicht durch maximale Modulfläche, sondern durch präzise Planung. Wir dimensionieren Ihre Photovoltaikanlage exakt nach Ihrem individuellen Strombedarf – unter Berücksichtigung von Haushaltsgröße, Wärmepumpe, Elektromobilität und der optimalen Dachausrichtung.
        </p>
        <p className="text-slate-600 leading-relaxed mb-2">
          Das Ergebnis: Sie vermeiden kostspielige Überdimensionierung und erzielen einen deutlich höheren Eigenverbrauchsanteil. Statt Überschüsse zu Niedrigpreisen ins Netz einzuspeisen, nutzen Sie Ihren selbst erzeugten Strom dort, wo er den größten Wert hat – in Ihrem eigenen Haushalt.
        </p>
        <p className="text-slate-600 leading-relaxed text-sm">
          Unsere Partnerschaften mit etablierten deutschen Herstellern garantieren Ihnen langfristige Verfügbarkeit von Ersatzteilen, schnelle Servicezeiten und vollständige Unabhängigkeit von asiatischen Lieferketten sowie Cloud-Infrastrukturen außerhalb Europas.
        </p>
      </div>

      <div>
        <h4 className="font-bold text-slate-900 mb-2">Aktuelle Förderungen & Vorteile:</h4>
        <ul className="space-y-1">
          <li className="flex items-start gap-3">
            <div className="bg-green-100 text-green-600 p-1 rounded-full mt-0.5">✓</div>
            <p className="text-slate-600"><strong>0% MwSt:</strong> Keine Mehrwertsteuer beim Kauf von PV-Anlagen (JStG 2022).</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="bg-green-100 text-green-600 p-1 rounded-full mt-0.5">✓</div>
            <p className="text-slate-600"><strong>Einspeisevergütung:</strong> Garantierte Vergütung für überschüssigen Strom über 20 Jahre (EEG 2023).</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="bg-green-100 text-green-600 p-1 rounded-full mt-0.5">✓</div>
            <p className="text-slate-600"><strong>Regionale Förderprogramme:</strong> Wir beraten Sie gerne zu spezifischen Zuschüssen im Ahrtal und Rheinland.</p>
          </li>
        </ul>
      </div>
      
      <div className="flex justify-end pt-1 border-t border-slate-100 -mx-6 px-6 pb-0">
        <button
          type="button"
          onClick={onContactClick}
          className="bg-slate-900 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 shadow-lg shadow-slate-900/15"
        >
          Individuelles Angebot anfordern
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
