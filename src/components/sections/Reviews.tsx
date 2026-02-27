"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Thomas M.",
    location: "Grafschaft",
    date: "vor 2 Wochen",
    text: "Hervorragende Beratung und fehlerfreie Installation unserer neuen 10kWp Anlage mit Speicher. Das Team aus der Region war pünktlich, sauber und sehr kompetent. Absolute Empfehlung!",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Thomas+M&background=f59e0b&color=fff",
  },
  {
    name: "Familie Weber",
    location: "Bad Neuenahr-Ahrweiler",
    date: "vor 1 Monat",
    text: "Von der ersten Kontaktaufnahme bis zur Inbetriebnahme der Wallbox und PV-Anlage lief alles reibungslos. Besonders gefallen hat uns, dass auf unsere individuellen Wünsche eingegangen wurde.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Familie+W&background=0f172a&color=fff",
  },
  {
    name: "Sabine K.",
    location: "Meckenheim",
    date: "vor 3 Monaten",
    text: "Ein regionaler Handwerksbetrieb, wie man ihn sich wünscht. Keine leeren Versprechungen, sondern ehrliche Beratung und Top-Umsetzung. Der Ertrag unserer Anlage übertrifft sogar die Prognosen.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Sabine+K&background=f59e0b&color=fff",
  },
];

export default function Reviews() {
  return (
    <section id="bewertungen" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-slate-100 rounded-[100px] -rotate-6 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-amber-500 fill-amber-500" size={28} />
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Das sagen unsere Kunden
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-8" />
            <p className="text-lg text-slate-600">
              Vertrauen Sie auf die Erfahrungen unserer zufriedenen Kunden aus der Region.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 relative border border-slate-100"
            >
              <Quote className="absolute top-8 right-8 text-amber-500/20" size={48} />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-14 h-14 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{review.name}</h4>
                  <div className="text-sm text-slate-500">{review.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="text-amber-500 fill-amber-500" size={16} />
                ))}
                <span className="text-xs text-slate-400 ml-2">{review.date}</span>
              </div>

              <p className="text-slate-600 leading-relaxed italic relative z-10">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 flex justify-center items-center gap-4"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" 
            alt="Google Logo" 
            className="w-8 h-8"
          />
          <span className="text-slate-600 font-medium">
            Basierend auf <span className="font-bold text-slate-900">24 echten Bewertungen</span> auf Google
          </span>
        </motion.div>
      </div>
    </section>
  );
}
