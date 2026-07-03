import { useState } from "react";
import { TESTIMONIALS } from "../data";
import { Testimonial } from "../types";
import { Star, CheckCircle, SlidersHorizontal, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function SocialProof() {
  const [reviews] = useState<Testimonial[]>(TESTIMONIALS);
  const [selectedSkinFilter, setSelectedSkinFilter] = useState<string>("todos");

  // Filter logic
  const filteredReviews = selectedSkinFilter === "todos"
    ? reviews
    : reviews.filter((item) => {
        if (selectedSkinFilter === "sensivel") return item.skinType.toLowerCase().includes("sensível") || item.skinType.toLowerCase().includes("seco") || item.skinType.toLowerCase().includes("seca") || item.skinType.toLowerCase().includes("reativa");
        if (selectedSkinFilter === "oleosa") return item.skinType.toLowerCase().includes("oleosa") || item.skinType.toLowerCase().includes("acne");
        if (selectedSkinFilter === "mista") return item.skinType.toLowerCase().includes("mista") || item.skinType.toLowerCase().includes("desidratada");
        return true;
      });

  return (
    <section id="depoimentos" className="py-16 sm:py-20 bg-sand-50 text-forest-950 relative border-t border-forest-100/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-gold-650 font-bold mb-2.5 block">
            Relatos Reais de Transformação
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-forest-900 mb-4">
            O impacto na pele de quem já experimentou
          </h2>
          <p className="font-sans text-sm sm:text-base text-forest-700 font-light leading-relaxed">
            Consumidores reais compartilham suas percepções sobre a textura regeneradora, o aroma botânico amadeirado e a pureza de nossa formulação artesanal de cura lenta.
          </p>
        </div>

        {/* Luxury Rating Breakdown Dashboard */}
        <div className="max-w-4xl mx-auto bg-white border border-forest-100/70 rounded-2xl p-6 sm:p-8 mb-12 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Average block */}
          <div className="md:col-span-4 text-center border-b md:border-b-0 md:border-r border-forest-100 pb-6 md:pb-0 md:pr-8">
            <span className="text-5xl font-serif font-bold text-forest-900">4.9</span>
            <div className="flex justify-center space-x-1 my-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4.5 h-4.5 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <p className="text-xs font-sans text-forest-550">Baseado em 1.450+ compras do primeiro lote de Rondônia</p>
          </div>

          {/* Progress bar blocks */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center text-xs text-forest-750">
              <span className="w-8 shrink-0">5 ★</span>
              <div className="flex-1 bg-sand-100 h-2 rounded-full overflow-hidden mx-2.5">
                <div className="bg-gold-500 h-full rounded-full" style={{ width: "94%" }}></div>
              </div>
              <span className="w-8 text-right font-mono">94%</span>
            </div>
            <div className="flex items-center text-xs text-forest-750">
              <span className="w-8 shrink-0">4 ★</span>
              <div className="flex-1 bg-sand-100 h-2 rounded-full overflow-hidden mx-2.5">
                <div className="bg-gold-500 h-full rounded-full" style={{ width: "5%" }}></div>
              </div>
              <span className="w-8 text-right font-mono">5%</span>
            </div>
            <div className="flex items-center text-xs text-forest-750">
              <span className="w-8 shrink-0">3 ★</span>
              <div className="flex-1 bg-sand-100 h-2 rounded-full overflow-hidden mx-2.5">
                <div className="bg-gold-500 h-full rounded-full" style={{ width: "1%" }}></div>
              </div>
              <span className="w-8 text-right font-mono">1%</span>
            </div>
          </div>

          {/* CTA & Verified Note (High Conversion & Trust Guarantee) */}
          <div className="md:col-span-3 text-center md:text-right flex flex-col items-center md:items-end space-y-2 bg-forest-50/50 p-4 rounded-xl border border-forest-100/50">
            <div className="flex items-center space-x-1 text-forest-900 font-serif font-bold text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-650 shrink-0" />
              <span>Garantia de 30 Dias</span>
            </div>
            <p className="text-[10px] text-forest-600 leading-normal text-center md:text-right font-light">
              Satisfação total ou seu dinheiro de volta. Sem burocracia ou letras miúdas.
            </p>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-forest-100/50">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-mono font-bold text-forest-500 uppercase flex items-center space-x-1.5 mr-1">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filtrar por:</span>
            </span>
            <button
              onClick={() => setSelectedSkinFilter("todos")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors ${
                selectedSkinFilter === "todos"
                  ? "bg-forest-900 text-gold-100"
                  : "bg-white hover:bg-sand-100 text-forest-800 border border-forest-100/70"
              }`}
            >
              Ver Todas ({reviews.length})
            </button>
            <button
              onClick={() => setSelectedSkinFilter("sensivel")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors ${
                selectedSkinFilter === "sensivel"
                  ? "bg-forest-900 text-gold-100"
                  : "bg-white hover:bg-sand-100 text-forest-800 border border-forest-100/70"
              }`}
            >
              Pele Sensível / Seca
            </button>
            <button
              onClick={() => setSelectedSkinFilter("oleosa")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors ${
                selectedSkinFilter === "oleosa"
                  ? "bg-forest-900 text-gold-100"
                  : "bg-white hover:bg-sand-100 text-forest-800 border border-forest-100/70"
              }`}
            >
              Pele Oleosa / Acneica
            </button>
            <button
              onClick={() => setSelectedSkinFilter("mista")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors ${
                selectedSkinFilter === "mista"
                  ? "bg-forest-900 text-gold-100"
                  : "bg-white hover:bg-sand-100 text-forest-800 border border-forest-100/70"
              }`}
            >
              Pele Mista
            </button>
          </div>
        </div>

        {/* Reviews List */}
        <div id="reviews-list-top" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-forest-100/50 p-6 rounded-2xl shadow-xs flex flex-col justify-between hover:shadow-sm transition-all duration-300 relative group"
              >
                <div>
                  {/* Rating Stars & Verified */}
                  <div className="flex items-center justify-between pb-3 border-b border-forest-50 mb-4">
                    <div className="flex space-x-0.5">
                      {Array.from({ length: item.rating }).map((_, rIdx) => (
                        <Star key={rIdx} className="w-3.5 h-3.5 fill-gold-450 text-gold-450" />
                      ))}
                    </div>
                    {item.verified && (
                      <div className="flex items-center space-x-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[9px] font-mono font-bold uppercase tracking-wider border border-emerald-100/50">
                        <CheckCircle className="w-2.5 h-2.5" />
                        <span>Compra Verificada</span>
                      </div>
                    )}
                  </div>

                  {/* Body Comment */}
                  <p className="font-sans text-xs sm:text-sm text-forest-800 font-light leading-relaxed mb-6 italic">
                    “{item.comment}”
                  </p>
                </div>

                {/* Author Information */}
                <div className="flex items-center space-x-3 pt-4 border-t border-forest-50">
                  <div className={`w-9 h-9 rounded-full ${item.avatarColor} text-white flex items-center justify-center font-serif text-sm font-semibold capitalize shrink-0`}>
                    {item.name[0]}
                  </div>
                  <div className="flex flex-col text-xs">
                    <span className="font-serif font-bold text-forest-900 leading-tight">
                      {item.name}, {item.age} anos
                    </span>
                    <span className="text-forest-500 font-mono text-[9px]">
                      {item.city}
                    </span>
                    <span className="font-mono text-[9px] font-bold text-gold-700 uppercase mt-0.5 tracking-wider">
                      {item.skinType}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
