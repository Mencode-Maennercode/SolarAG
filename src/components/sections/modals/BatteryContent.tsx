"use client";

import { BatteryCharging, ShieldCheck, ArrowRight } from "lucide-react";

interface BatteryContentProps {
  onContactClick?: () => void;
}

export default function BatteryContent({ onContactClick }: BatteryContentProps) {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-slate-600 leading-relaxed mb-6">
          Ein Stromspeicher maximiert Ihre Unabhängigkeit vom öffentlichen Stromnetz. Anstatt überschüssigen Solarstrom tagsüber für wenig Geld einzuspeisen, speichern Sie ihn für die Nutzung in den Abend- und Nachtstunden.
        </p>
        <p className="text-slate-600 leading-relaxed text-sm mb-4">
          Wir setzen auf <strong>BYD</strong> – den Weltmarktführer für Batteriespeichersysteme.
        </p>
        <div className="bg-lime-50 border-l-4 border-lime-500 p-4 rounded-r-xl">
          <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
            <span className="text-lime-600">✓</span>
            Modulare Erweiterbarkeit
          </h5>
          <p className="text-slate-600 text-sm leading-relaxed">
            Die Systeme sind modular aufgebaut und können jederzeit durch weitere Module einfach erweitert werden, wenn Ihr Bedarf steigt – ohne kompletten Austausch der Anlage.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
        <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <BatteryCharging className="text-lime-500" />
          Ihre Vorteile auf einen Blick
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <div className="text-lime-500 font-bold text-xl mb-2">Bis zu 80% Autarkie</div>
            <p className="text-slate-600 text-sm">
              Mit einem passend dimensionierten Speicher können Sie Ihren Eigenverbrauch drastisch erhöhen und sich weitgehend unabhängig von Strompreiserhöhungen machen.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <div className="text-lime-500 font-bold text-xl mb-2">Notstromfunktion</div>
            <p className="text-slate-600 text-sm">
              Viele moderne Speichersysteme bieten optionale Notstrom- oder Ersatzstromfunktionen. So bleiben Sie auch bei Netzausfällen versorgt.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
          <ShieldCheck className="text-lime-500" />
          Technologie & Lebensdauer
        </h4>
        <p className="text-slate-600 leading-relaxed mb-4">
          Wir verbauen ausschließlich modernste Lithium-Eisenphosphat-Akkus (LiFePO4). Diese zeichnen sich aus durch:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <div className="bg-slate-200 text-slate-700 p-1 rounded-full mt-0.5 text-xs">✓</div>
            <p className="text-slate-600">Höchste Eigensicherheit (keine Brandgefahr)</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="bg-slate-200 text-slate-700 p-1 rounded-full mt-0.5 text-xs">✓</div>
            <p className="text-slate-600">Extreme Langlebigkeit (oft 10.000+ Ladezyklen)</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="bg-slate-200 text-slate-700 p-1 rounded-full mt-0.5 text-xs">✓</div>
            <p className="text-slate-600">Garantien der Hersteller von oft 10 Jahren und mehr</p>
          </li>
        </ul>
      </div>

      <div className="flex justify-end pt-4 border-t border-slate-100 bg-slate-50/60 -mx-6 px-6 pb-2 pt-4">
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
