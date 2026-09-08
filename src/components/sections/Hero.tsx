"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] md:min-h-[800px] flex items-center justify-center overflow-hidden pt-24 md:pt-0">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          className="w-full h-full object-cover [transform:translateZ(0)] [will-change:transform] [backface-visibility:hidden]"
        >
          <source
            src="/hero.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Subtle dark overlay for legibility on mobile */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-900/15 via-transparent to-slate-900/15" />

      <div className="container relative z-20 mx-auto px-5 sm:px-6 pt-32 pb-10 md:pt-40 md:pb-24 lg:pt-44">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight leading-[1.1]">
              Ihre <span className="text-green-500">Energie</span> der Zukunft
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-slate-200 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-2">
              Maßgeschneiderte Solaranlagen, Batteriespeicher und Wallboxen für
              Privathaushalte und Unternehmen.
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
              className="bg-green-600 hover:bg-green-500 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(150,194,38,0.3)] flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Kostenloses Angebot
              <ArrowRight size={20} />
            </a>
            <a
              href="#leistungen"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all w-full sm:w-auto text-center"
            >
              Unsere Leistungen
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 sm:mt-16 md:mt-20 grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: Zap, text: "Höchste Effizienz" },
              { icon: Shield, text: "Garantierte Qualität" },
              { icon: Leaf, text: "100% Nachhaltig" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-white/90 justify-center bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10"
              >
                <div className="bg-green-500/20 p-1.5 sm:p-2 rounded-lg text-green-500">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="font-semibold text-[11px] sm:text-sm md:text-base text-center md:text-left leading-tight">
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
