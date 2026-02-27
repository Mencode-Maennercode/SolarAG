"use client";

import { useState } from "react";
import { Calculator, Zap, ArrowRight, Euro } from "lucide-react";

export default function SolarCalculator() {
  const [roofSize, setRoofSize] = useState<number>(50);
  const [electricityBill, setElectricityBill] = useState<number>(150);

  // Simple estimations based on inputs
  const estimatedKwp = (roofSize / 5).toFixed(1); // Rough estimate: 5m² = 1 kWp
  const yearlyProduction = (parseFloat(estimatedKwp) * 950).toFixed(0); // Rough estimate: 1 kWp = 950 kWh/year
  const yearlySavings = (parseFloat(yearlyProduction) * 0.35).toFixed(0); // Assuming 35 cents/kWh and 100% self-consumption for simplicity

  return (
    <div className="space-y-8">
      <div>
        <p className="text-slate-600 leading-relaxed mb-6">
          Eine Photovoltaikanlage ist nicht nur ein Beitrag zum Umweltschutz, sondern auch eine äußerst lukrative Investition. Mit den steigenden Strompreisen rechnet sich eine Anlage heute schneller denn je. Zudem profitieren Sie aktuell von <strong>0% Mehrwertsteuer</strong> auf PV-Anlagen.
        </p>
      </div>

      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
        <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Calculator className="text-amber-500" />
          Ertragsrechner (Schätzung)
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Verfügbare Dachfläche (ca. in m²)
            </label>
            <input
              type="range"
              min="20"
              max="200"
              step="5"
              value={roofSize}
              onChange={(e) => setRoofSize(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
            <div className="text-right font-bold text-amber-500 mt-2">{roofSize} m²</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Aktuelle Stromrechnung (ca. €/Monat)
            </label>
            <input
              type="range"
              min="50"
              max="500"
              step="10"
              value={electricityBill}
              onChange={(e) => setElectricityBill(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
            <div className="text-right font-bold text-amber-500 mt-2">{electricityBill} €</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
            <div className="text-sm text-slate-500 mb-1">Mögliche Anlagengröße</div>
            <div className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-1">
              <Zap size={20} className="text-amber-500" />
              {estimatedKwp} kWp
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
            <div className="text-sm text-slate-500 mb-1">Stromerzeugung (Jahr)</div>
            <div className="text-2xl font-bold text-slate-900">
              {yearlyProduction} kWh
            </div>
          </div>
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 shadow-sm text-center">
            <div className="text-sm text-amber-700 mb-1">Ersparnis pro Jahr (ca.)</div>
            <div className="text-2xl font-bold text-amber-600 flex items-center justify-center gap-1">
              <Euro size={20} />
              {yearlySavings}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-bold text-slate-900 mb-4">Aktuelle Förderungen & Vorteile:</h4>
        <ul className="space-y-3">
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
      
      <div className="flex justify-end pt-4 border-t border-slate-100">
        <a href="#kontakt" className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2">
          Individuelles Angebot anfordern
          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}
