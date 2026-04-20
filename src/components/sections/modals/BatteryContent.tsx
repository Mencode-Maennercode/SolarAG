"use client";

import { BatteryCharging, ShieldCheck, ArrowRight } from "lucide-react";

interface BatteryContentProps {
  onContactClick?: () => void;
}

export default function BatteryContent({ onContactClick }: BatteryContentProps) {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-slate-600 leading-relaxed mb-2">
          Ein Batteriespeicher ist der Schlüssel zur maximalen Energieunabhängigkeit. Statt überschüssigen Solarstrom tagsüber zu Niedrigpreisen ins Netz einzuspeisen, speichern Sie ihn für die Nutzung in den Abend- und Nachtstunden – wenn Strom am teuersten ist.
        </p>
        <p className="text-slate-600 leading-relaxed text-sm">
          Wir setzen auf BYD als Technologiepartner – als Weltmarktführer garantieren deren Systeme höchste Qualität, modulare Erweiterbarkeit und außergewöhnliche Langlebigkeit.
        </p>
      </div>

      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
        <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
          <BatteryCharging className="text-lime-500" />
          Ihre Vorteile auf einen Blick
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="text-lime-500 font-bold text-lg mb-2">Bis zu 80% Autarkie</div>
            <p className="text-slate-600 text-sm">
              Erhöhen Sie Ihren Eigenverbrauch drastisch und werden Sie unabhängig von Strompreiserhöhungen.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="text-lime-500 font-bold text-lg mb-2">Modulare Erweiterbarkeit</div>
            <p className="text-slate-600 text-sm">
              Passen Sie Ihren Speicher jederzeit an Ihre wachsenden Anforderungen an.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
          <ShieldCheck className="text-lime-500" />
          Technologie & Lebensdauer
        </h4>
        <ul className="space-y-1 ml-1">
          <li className="flex items-start gap-3">
            <div className="bg-green-100 text-green-600 p-1 rounded-full pt-1 text-xs">✓</div>
            <p className="text-slate-600">Höchste Eigensicherheit durch Lithium-Eisenphosphat (LiFePO4)</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="bg-green-100 text-green-600 p-1 rounded-full pt-1 text-xs">✓</div>
            <p className="text-slate-600">Extreme Langlebigkeit mit 10.000+ Ladezyklen</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="bg-green-100 text-green-600 p-1 rounded-full pt-1 text-xs">✓</div>
            <p className="text-slate-600">Herstellergarantien von oft 10+ Jahren</p>
          </li>
        </ul>
      </div>

      <div className="flex justify-end pt-1 border-t border-slate-100 -mx-6 px-6 pb-0">
        <button
          type="button"
          onClick={onContactClick}
          className="bg-slate-900 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 shadow-lg shadow-slate-900/15"
        >
          Beratungstermin vereinbaren
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
