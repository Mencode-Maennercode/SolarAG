"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/hero.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container relative z-20 mx-auto px-6 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Ihre <span className="text-amber-500">Energie</span> der Zukunft
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-2xl mx-auto">
              Maßgeschneiderte Solaranlagen, Batteriespeicher und Wallboxen für 
              Privathaushalte und Unternehmen in der Region Grafschaft, Ahr und Rhein.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#kontakt"
              className="bg-amber-500 hover:bg-amber-400 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(245,158,11,0.3)] flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Kostenloses Angebot
              <ArrowRight size={20} />
            </a>
            <a
              href="#leistungen"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full text-lg font-bold transition-all w-full sm:w-auto text-center"
            >
              Unsere Leistungen
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: Zap, text: "Höchste Effizienz" },
              { icon: Shield, text: "Garantierte Qualität" },
              { icon: Leaf, text: "100% Nachhaltig" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-white/90 justify-center bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                <div className="bg-amber-500/20 p-2 rounded-lg text-amber-500">
                  <item.icon size={24} />
                </div>
                <span className="font-semibold">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-white/60 text-sm mb-2 font-medium tracking-wider uppercase">Mehr erfahren</span>
        <div className="w-1 h-12 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-amber-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
