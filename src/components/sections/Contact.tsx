"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert("Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="kontakt" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
          
          {/* Decorative background for the card */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="flex flex-col lg:flex-row relative z-10">
            
            {/* Contact Info Side */}
            <div className="w-full lg:w-2/5 p-12 lg:p-16 bg-amber-500 text-slate-900">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-extrabold mb-4">Lassen Sie uns starten</h3>
                <p className="text-slate-900/80 mb-12 text-lg">
                  Bereit für Ihre eigene Energiewende? Kontaktieren Sie uns für ein unverbindliches und kostenloses Angebot.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-900/10 p-3 rounded-xl">
                      <Phone className="text-slate-900" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Rufen Sie uns an</h4>
                      <p className="text-slate-900/80">01234 / 567890</p>
                      <p className="text-slate-900/60 text-sm">Mo-Fr, 8:00 - 17:00 Uhr</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-slate-900/10 p-3 rounded-xl">
                      <Mail className="text-slate-900" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Schreiben Sie uns</h4>
                      <p className="text-slate-900/80">info@ag-solar.net</p>
                      <p className="text-slate-900/60 text-sm">Wir antworten innerhalb von 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-slate-900/10 p-3 rounded-xl">
                      <MapPin className="text-slate-900" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Besuchen Sie uns</h4>
                      <p className="text-slate-900/80">Musterstraße 123</p>
                      <p className="text-slate-900/80">53501 Grafschaft</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Form Side */}
            <div className="w-full lg:w-3/5 p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-bold text-white mb-8">Senden Sie uns eine Nachricht</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">
                        Ihr Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-slate-500"
                        placeholder="Max Mustermann"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-2">
                        Telefonnummer
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-slate-500"
                        placeholder="Für Rückfragen"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
                      E-Mail Adresse
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-slate-500"
                      placeholder="max@beispiel.de"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
                      Ihre Nachricht
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-slate-500 resize-none"
                      placeholder="Bitte beschreiben Sie kurz Ihr Vorhaben (z.B. Einfamilienhaus, gewünschte Dachfläche, etc.)"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-4 rounded-xl transition-all transform hover:-translate-y-1 shadow-[0_0_30px_rgba(245,158,11,0.2)] flex items-center justify-center gap-2 text-lg"
                  >
                    Angebot anfordern
                    <Send size={20} />
                  </button>
                  <p className="text-slate-500 text-sm text-center mt-4">
                    Durch das Absenden stimmen Sie unserer Datenschutzerklärung zu.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
