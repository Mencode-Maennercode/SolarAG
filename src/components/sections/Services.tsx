"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Battery, Cable, ArrowRight } from "lucide-react";
import ServiceModal from "../ui/ServiceModal";
import PhotovoltaikContent from "./modals/PhotovoltaikContent";
import BatteryContent from "./modals/BatteryContent";
import WallboxContent from "./modals/WallboxContent";

const services: { id: string; icon: React.ElementType; title: string; description: string; image: string; imageStyle?: React.CSSProperties; imageClass?: string; Content: React.ComponentType<{ onContactClick?: () => void }> }[] = [
  {
    id: "photovoltaik",
    icon: Sun,
    title: "Photovoltaik",
    description: "Machen Sie sich unabhängig von steigenden Strompreisen. Wir planen und installieren Ihre maßgeschneiderte Solaranlage für maximale Erträge.",
    image: "/fullblack2.jpg",
    Content: PhotovoltaikContent,
  },
  {
    id: "battery",
    icon: Battery,
    title: "Batteriespeicher",
    description: "Nutzen Sie Ihren selbst produzierten Solarstrom rund um die Uhr. Mit modernsten Speichersystemen erhöhen Sie Ihren Eigenverbrauch drastisch.",
    image: "/Byd.png",
    Content: BatteryContent,
  },
  {
    id: "wallbox",
    icon: Cable,
    title: "Wallboxen",
    description: "Tanken Sie die Sonne. Wir installieren intelligente Ladestationen für Ihr Elektroauto – sicher, schnell und perfekt auf Ihre PV-Anlage abgestimmt.",
    image: "/wallbox-kostal-ag1.jfif",
    imageStyle: { objectPosition: "65% 63%" },
    imageClass: "scale-[1.2] group-hover:scale-[1.35]",
    Content: WallboxContent,
  },
];

export default function Services() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const activeService = services.find((s) => s.id === activeModal);

  const handleContactClick = () => {
    setActiveModal(null);
    if (typeof window !== "undefined") {
      const target = document.querySelector("#kontakt");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="leistungen" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-green-500/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-slate-200/50 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-green-500 font-bold tracking-wider uppercase text-sm mb-4 block">
              Unsere Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Ihre Komplettlösung aus einer Hand
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full mb-8" />
            <p className="text-lg text-slate-600 leading-relaxed">
              Von der ersten Beratung bis zur finalen Installation – wir bieten Ihnen perfekt aufeinander abgestimmte Systeme für Ihre private Energiewende.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 cursor-pointer flex flex-col"
              onClick={() => setActiveModal(service.id)}
            >
              <div className="relative h-64 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover transform ${service.imageClass ?? "group-hover:scale-110"} transition-transform duration-700`}
                  style={service.imageStyle}
                />
                <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg">
                  <service.icon size={32} className="text-green-500" />
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-green-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                <div
                  className="inline-flex items-center gap-2 font-bold text-slate-900 group-hover:text-green-500 transition-colors group/link mt-auto"
                >
                  Mehr erfahren
                  <ArrowRight size={20} className="transform group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ServiceModal
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        title={activeService?.title || ""}
      >
        {activeService && (
          <activeService.Content onContactClick={handleContactClick} />
        )}
      </ServiceModal>
    </section>
  );
}
