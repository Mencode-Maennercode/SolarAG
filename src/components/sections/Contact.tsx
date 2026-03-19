"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontakt" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Kontaktieren Sie uns
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full mb-8" />
            <p className="text-lg text-slate-600 leading-relaxed">
              Bereit für Ihre eigene Energiewende? Wir beraten Sie gerne persönlich und erstellen Ihnen ein individuelles Angebot.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 text-center"
          >
            <a
              href="tel:+4926419029358"
              className="bg-green-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-green-500/20 transition-colors"
            >
              <Phone className="text-green-500" size={32} />
            </a>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Rufen Sie uns an</h3>
            <p className="text-slate-600 font-medium mb-1 select-text">
              <a href="tel:+4926419029358" className="hover:text-green-500 transition-colors">
                02641 / 90 29 358
              </a>
            </p>
            <p className="text-slate-500 text-sm">Mo-Fr, 8:00 - 17:00 Uhr</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 text-center"
          >
            <a
              href="mailto:info@ag-solar.net"
              className="bg-green-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-green-500/20 transition-colors"
            >
              <Mail className="text-green-500" size={32} />
            </a>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Schreiben Sie uns</h3>
            <p className="text-slate-600 font-medium mb-1 select-text">
              <a
                href="mailto:info@ag-solar.net"
                className="hover:text-green-500 transition-colors break-all"
              >
                info@ag-solar.net
              </a>
            </p>
            <p className="text-slate-500 text-sm">Antwort innerhalb von 24h</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
