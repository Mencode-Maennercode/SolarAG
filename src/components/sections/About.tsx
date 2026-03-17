"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="ueber-uns" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-lime-500/20 rounded-3xl blur-2xl z-0" />
              <img 
                src="https://images.unsplash.com/photo-1545320957-ca226073958e?auto=format&fit=crop&w=1200&q=80" 
                alt="Solar Installation in der Grafschaft" 
                className="relative z-10 rounded-3xl shadow-2xl object-cover h-[600px] w-full"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -right-8 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-lime-100 p-3 rounded-full text-lime-500">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium">Regional verankert</div>
                    <div className="text-xl font-bold text-slate-900">Grafschaft & Umgebung</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-lime-500 font-bold tracking-wider uppercase text-sm mb-4 block">
              Aus der Region, für die Region
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              Wir bringen die Sonne ins Ahrtal und ans Rheinland
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Als lokaler Fachbetrieb aus der Grafschaft kennen wir die spezifischen Anforderungen unserer Region. Wir sind Ihr verlässlicher Ansprechpartner vor Ort – von der ersten Beratung bis zur regelmäßigen Wartung Ihrer Anlage.
            </p>

            <div className="space-y-6 mb-10">
              {[
                "Persönliche Beratung vor Ort in Grafschaft, Ahr & Rhein",
                "Individuelle Planung für maximale Erträge",
                "Fachgerechte Installation durch eigenes Personal",
                "Schneller Service dank regionaler Nähe"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="text-lime-500" size={24} />
                  </div>
                  <p className="text-slate-700 font-medium text-lg">{item}</p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-slate-600 italic">
                "Unser Ziel ist es, die Energiewende in unserer Heimat aktiv mitzugestalten und unseren Kunden eine unabhängige, saubere und wirtschaftliche Energieversorgung zu ermöglichen."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
