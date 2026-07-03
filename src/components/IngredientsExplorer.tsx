import { useState } from "react";
import { INGREDIENTS } from "../data";
import { Leaf, FlaskConical, MapPin, CheckCircle, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function IngredientsExplorer() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeIngredient = INGREDIENTS[selectedIdx];

  return (
    <section id="ingredientes" className="py-20 bg-sand-100 text-forest-950 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-forest-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-forest-600 font-semibold mb-2 block">
            Botânica Ativa Amazônica
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-900 mb-4">
            Riqueza ancestral para sua derme
          </h2>
          <p className="font-sans text-base sm:text-lg text-forest-800 font-light max-w-2xl mx-auto leading-relaxed">
            Nossa fórmula é 100% biodegradável, livre de corantes artificiais ou essências industriais. Conheça a farmácia viva nativa que compõe cada barra de <strong className="text-forest-900 font-semibold">Ouro da Floresta</strong>, criada artesanalmente pela <strong className="text-forest-900 font-semibold">Orvalho da Amazônia</strong>.
          </p>
        </div>

        {/* Dynamic Laboratory Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Sidebar Tabs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-wider text-forest-500 font-bold mb-1 ml-1 block">
              Selecione o ingrediente para analisar:
            </span>
            
            {INGREDIENTS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setSelectedIdx(idx)}
                className={`w-full text-left p-5 rounded-xl border transition-all flex items-center justify-between cursor-pointer group ${
                  selectedIdx === idx
                    ? "bg-forest-900 border-forest-950 text-gold-100 shadow-lg shadow-forest-900/10"
                    : "bg-sand-50/80 hover:bg-sand-50 border-forest-100 text-forest-900 hover:border-forest-300"
                }`}
              >
                <div className="flex items-center space-x-3.5">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-serif font-bold ${
                    selectedIdx === idx 
                      ? "bg-gold-550/20 text-gold-300" 
                      : "bg-forest-100 text-forest-800 group-hover:bg-forest-200"
                  }`}>
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-semibold tracking-tight">
                      {item.name}
                    </h3>
                    <p className={`font-sans text-xs ${selectedIdx === idx ? "text-forest-200" : "text-forest-600"}`}>
                      {item.role}
                    </p>
                  </div>
                </div>
                
                <span className={`text-xs font-mono font-medium transition-transform group-hover:translate-x-1 ${
                  selectedIdx === idx ? "text-gold-300" : "text-forest-400"
                }`}>
                  Analisar →
                </span>
              </button>
            ))}
          </div>

          {/* Interactive Analysis Board (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIngredient.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-forest-100/80 rounded-2xl p-6 sm:p-10 shadow-xl shadow-forest-900/5 h-full flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Top line scientific card */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-forest-100">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-gold-650 font-bold bg-gold-100/80 px-2.5 py-1 rounded">
                        {activeIngredient.role}
                      </span>
                      <h4 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900 mt-2">
                        {activeIngredient.name}
                      </h4>
                      <p className="font-mono text-xs italic text-forest-500 mt-0.5">
                        {activeIngredient.scientificName}
                      </p>
                    </div>

                    <div className="flex items-center space-x-1.5 bg-forest-50 px-3 py-1 rounded-full text-forest-800 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-forest-600" />
                      <span className="font-medium">Origem Amazônica</span>
                    </div>
                  </div>

                  {/* Body description */}
                  <div className="space-y-4">
                    <h5 className="font-serif text-sm font-semibold tracking-wide text-forest-800 uppercase flex items-center space-x-1.5">
                      <FlaskConical className="w-4 h-4 text-gold-500" />
                      <span>Propriedades do Ativo</span>
                    </h5>
                    <p className="font-sans text-sm sm:text-base text-forest-800 font-light leading-relaxed">
                      {activeIngredient.description}
                    </p>
                  </div>

                  {/* Benefits check list */}
                  <div className="space-y-3 bg-sand-50/70 p-4 rounded-xl border border-forest-100/50">
                    <h5 className="font-serif text-xs font-semibold tracking-wider text-forest-700 uppercase">
                      Ação Direta na Pele:
                    </h5>
                    <div className="grid grid-cols-1 gap-2.5">
                      {activeIngredient.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-forest-850">
                          <CheckCircle className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footnote of botanical commitment */}
                <div className="mt-8 pt-4 border-t border-forest-100 flex items-center space-x-3 text-[11px] text-forest-500">
                  <Leaf className="w-4 h-4 text-emerald-600 shrink-0" />
                  <p>
                    Comunidades tradicionais ribeirinhas extraem de forma agroecológica os frutos caídos da floresta, garantindo o manejo sustentável e a conservação da Amazônia.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Process Flow Saponification */}
        <div className="mt-20 border-t border-forest-200/50 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="flex flex-col space-y-3 bg-white p-6 rounded-xl border border-forest-100 shadow-sm relative overflow-hidden">
              <div className="w-8 h-8 rounded-full bg-forest-100 flex items-center justify-center font-mono text-xs font-bold text-forest-800 mb-2">
                01
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-900">Origem Vegetal & Consciente</h3>
              <p className="font-sans text-xs sm:text-sm text-forest-750 font-light leading-relaxed">
                Formulação cuidadosamente desenvolvida livre de ingredientes animais. Respeitamos os ciclos da natureza e incentivamos o uso consciente e sustentável dos recursos da floresta amazônica.
              </p>
            </div>

            <div className="flex flex-col space-y-3 bg-white p-6 rounded-xl border border-forest-100 shadow-sm relative overflow-hidden">
              <div className="w-8 h-8 rounded-full bg-forest-100 flex items-center justify-center font-mono text-xs font-bold text-forest-800 mb-2">
                02
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-900">Processo de Cura Lenta</h3>
              <p className="font-sans text-xs sm:text-sm text-forest-750 font-light leading-relaxed">
                Cada unidade é elaborada de forma 100% artesanal em Rondônia, com atenção extrema a cada detalhe durante o período de cura lento, garantindo maior durabilidade e firmeza à barra.
              </p>
            </div>

            <div className="flex flex-col space-y-3 bg-white p-6 rounded-xl border border-forest-100 shadow-sm relative overflow-hidden">
              <div className="w-8 h-8 rounded-full bg-forest-100 flex items-center justify-center font-mono text-xs font-bold text-forest-800 mb-2">
                03
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-900">Embalagem de Papel Reciclado</h3>
              <p className="font-sans text-xs sm:text-sm text-forest-750 font-light leading-relaxed">
                A nova embalagem sustentável é produzida com papel reciclado e tinta à base de água, ideal para proteger e conservar o sabonete de 95g durante todo o transporte e armazenamento.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
