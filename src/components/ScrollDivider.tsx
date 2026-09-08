"use client";

import { motion } from "framer-motion";

export default function ScrollDivider() {
  return (
    <div
      aria-hidden="true"
      className="hidden md:flex relative w-full bg-white items-center justify-center py-10 lg:py-14"
    >
      <a
        href="#leistungen"
        className="group flex flex-col items-center gap-3 text-slate-500 hover:text-green-600 transition-colors"
      >
        <span className="text-xs lg:text-sm font-semibold tracking-[0.25em] uppercase">
          Mehr erfahren
        </span>
        <div className="w-1 h-14 bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            animate={{ y: [0, 56, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-green-500 rounded-full"
          />
        </div>
      </a>
    </div>
  );
}
