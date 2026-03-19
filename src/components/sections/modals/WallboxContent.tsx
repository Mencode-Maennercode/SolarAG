"use client";

import { Car, Zap, PiggyBank, ArrowRight } from "lucide-react";

interface WallboxContentProps {
  onContactClick?: () => void;
}

export default function WallboxContent({ onContactClick }: WallboxContentProps) {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-slate-600 leading-relaxed mb-6">
          Die Kombination aus Photovoltaikanlage und Elektroauto ist der effizienteste Weg in die mobile Zukunft. Mit einer intelligenten Wallbox laden Sie Ihr Fahrzeug bevorzugt mit selbst erzeugtem, kostenlosem Solarstrom.
        </p>
      </div>

      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
        <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Car className="text-lime-500" />
          Kostenvergleich: Verbrenner vs. E-Auto mit PV
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/10 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="text-slate-500 text-sm mb-1">Benzin/Diesel (7L/100km bei 1,80€)</div>
            <div className="text-2xl font-bold text-slate-900 mb-2">ca. 12,60 €</div>
            <div className="text-xs text-slate-400">pro 100 Kilometer</div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-lime-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-lime-500/20 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="text-lime-700 text-sm mb-1">E-Auto mit PV-Strom (20kWh/100km)</div>
            <div className="text-2xl font-bold text-lime-600 mb-2">ca. 1,60 € *</div>
            <div className="text-xs text-slate-400">pro 100 Kilometer (*bei 8ct Gestehungskosten)</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Zap className="text-lime-500" size={20} />
            Intelligentes Laden
          </h4>
          <p className="text-slate-600 leading-relaxed text-sm">
            Unsere modernen Wallboxen kommunizieren direkt mit Ihrem Wechselrichter. Überschussladen garantiert, dass nur der Strom ins Auto fließt, der ansonsten ins Netz eingespeist würde. Sie können auch Ladezeiten priorisieren (z.B. wenn günstiger Netzstrom zur Verfügung steht bei dynamischen Tarifen).
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <PiggyBank className="text-lime-500" size={20} />
            KfW Förderung 442
          </h4>
          <p className="text-slate-600 leading-relaxed text-sm">
            Aktuell (je nach Verfügbarkeit der Mittel) fördert die KfW die Kombination aus PV-Anlage, Speicher und Wallbox für Privathaushalte mit bis zu 10.200€. Wir unterstützen Sie bei der Auslegung einer förderfähigen Anlage und stellen alle nötigen Dokumente für den Antrag bereit.
          </p>
        </div>
      </div>

      <div className="flex justify-end pt-4 border-t border-slate-100 bg-slate-50/60 -mx-6 px-6 pb-2 pt-4">
        <button
          type="button"
          onClick={onContactClick}
          className="bg-slate-900 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 shadow-lg shadow-slate-900/15"
        >
          Jetzt Wallbox anfragen
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
