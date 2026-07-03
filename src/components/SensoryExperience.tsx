import { useState } from "react";
import { SENSORY_DETAILS, IMAGES } from "../data";
import { Sparkles, Compass, Wind, Eye, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function SensoryExperience() {
  const [activeTab, setActiveTab] = useState("aroma");
  const activeDetail = SENSORY_DETAILS.find((item) => item.id === activeTab) || SENSORY_DETAILS[0];

  return (
    <section id="sensorial" className="py-20 bg-sand-50 text-forest-950 relative overflow-hidden">
      {/* Visual Ambient Light glow */}
      <div className="absolute top-[30%] right-[-15%] w-[50%] h-[50%] rounded-full bg-forest-150/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Image & Highlight (5 columns on desktop) */}
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <div className="relative">
              <div className="absolute inset-0 bg-forest-900/10 rounded-2xl transform -rotate-2 scale-102" />
              <div className="absolute -inset-1 bg-gradient-to-tr from-gold-300 to-forest-500 opacity-20 rounded-2xl blur-md pointer-events-none" />

              <div className="relative bg-white border border-forest-100 rounded-2xl overflow-hidden shadow-xl aspect-square">
                <img
                  src={IMAGES.sensory}
                  alt="Ritual sensorial de autocuidado com espuma cremosa do sabonete Ouro da Floresta"
                  className="w-full h-full object-cover transition-all duration-1000 ease-out hover:scale-103"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Sensory Label */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur shadow px-3 py-1.5 rounded-lg border border-forest-100 flex items-center space-x-1.5 z-25">
                  <Wind className="w-3.5 h-3.5 text-gold-500" />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-forest-800 font-bold">
                    Alívio Aromaterápico Real
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Tabs & Descriptions (7 columns) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-gold-650 font-semibold mb-2 block">
                Uma Experiência para os Sentidos
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-900">
                Transforme sua rotina de higiene em um ritual de bem-estar
              </h2>
              <p className="font-sans text-sm sm:text-base text-forest-750 font-light mt-4 leading-relaxed">
                Tomar banho com o <strong className="font-semibold text-forest-900">Ouro da Floresta</strong> da <strong className="font-semibold text-forest-900">Orvalho da Amazônia</strong> não é apenas se limpar. É uma pausa meditativa, um momento em que as características naturais e as texturas generosas restauram suas forças físicas e emocionais.
              </p>
            </div>

            {/* Selector Buttons tabs */}
            <div className="flex border-b border-forest-100 pt-2 gap-2">
              {SENSORY_DETAILS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`pb-4 px-3 sm:px-6 text-sm sm:text-base font-serif font-medium border-b-2 transition-all cursor-pointer relative ${
                    activeTab === item.id
                      ? "border-forest-900 text-forest-900 font-semibold"
                      : "border-transparent text-forest-500 hover:text-forest-800"
                  }`}
                >
                  {item.title.split(" ")[1] || item.title} {/* e.g. "Aroma", "Espuma", "Toque" */}
                  
                  {activeTab === item.id && (
                    <motion.span
                      layoutId="sensoryTabUnderline"
                      className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-forest-900"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Dynamic Content Panel */}
            <div className="min-h-[220px] bg-white border border-forest-100 rounded-xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDetail.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-2 text-gold-600">
                    <Sparkles className="w-4 h-4" />
                    <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                      {activeDetail.subtitle}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-900">
                    {activeDetail.title}
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-forest-800 font-light leading-relaxed">
                    {activeDetail.description}
                  </p>

                  <div className="bg-sand-50 border-l-4 border-gold-400 p-3 rounded-r-lg mt-4 text-xs font-sans text-forest-800 italic">
                    <span className="font-mono font-bold uppercase tracking-wider text-gold-750 block text-[9px] not-italic mb-1">
                      Dica de Spa:
                    </span>
                    “{activeDetail.tip}”
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sensory indicators row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex flex-col p-4 bg-white/70 rounded-lg border border-forest-100">
                <span className="font-mono text-[9px] uppercase text-forest-550 font-bold">Fragrância</span>
                <span className="text-sm font-serif font-bold text-forest-900 mt-1">Natural de Copaíba</span>
              </div>
              <div className="flex flex-col p-4 bg-white/70 rounded-lg border border-forest-100">
                <span className="font-mono text-[9px] uppercase text-forest-550 font-bold">Composição</span>
                <span className="text-sm font-serif font-bold text-forest-900 mt-1">100% Vegetal</span>
              </div>
              <div className="flex flex-col p-4 bg-white/70 rounded-lg border border-forest-100 col-span-2 sm:col-span-1">
                <span className="font-mono text-[9px] uppercase text-forest-550 font-bold">Esfoliação</span>
                <span className="text-sm font-serif font-bold text-forest-900 mt-1">Leve & Delicada</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
