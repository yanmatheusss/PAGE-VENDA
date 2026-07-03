import { useState } from "react";
import { AlertCircle, ShieldCheck, Sparkles } from "lucide-react";

export default function PainAndEmpathy() {
  return (
    <section id="dor" className="py-12 sm:py-16 bg-forest-950 text-sand-50 relative overflow-hidden">
      {/* Abstract forest line decoration */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-forest-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2.5 block">
            A Verdade Científica
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Por que sua pele repuxa após o banho?
          </h2>
          <p className="font-sans text-sm text-forest-200 font-light mt-3 leading-relaxed">
            A maioria dos sabonetes comuns são detergentes sintéticos derivados do petróleo (sindetes). Eles dissolvem a barreira de hidratação natural da sua pele, gerando ressecamento, coceira ou oleosidade rebote.
          </p>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch max-w-5xl mx-auto">
          
          {/* Commercial Soap Aggression */}
          <div className="bg-forest-900/30 border border-red-500/10 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-red-400">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span className="font-mono text-[10px] tracking-wider uppercase font-bold">
                  Sabonetes Industriais Comuns
                </span>
              </div>

              <h3 className="font-serif text-lg sm:text-xl text-white font-medium">
                Detergente sintético que agride sua barreira protetora
              </h3>

              <ul className="space-y-2.5 text-xs sm:text-sm text-forest-300 font-light">
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>Lauril e sulfatos pesados</strong> que dissolvem o manto lipídico natural.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>Fragrâncias industriais baratas</strong> que frequentemente causam alergias.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>Glicerina hidratante extraída</strong> pela fábrica para ser vendida separadamente.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Ouro da Floresta Natural Treatment */}
          <div className="bg-gradient-to-br from-forest-900 to-forest-950 border border-gold-300/15 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-gold-300/25 relative">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gold-300">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span className="font-mono text-[10px] tracking-wider uppercase font-bold">
                  Orvalho da Amazônia — Ouro da Floresta
                </span>
              </div>

              <h3 className="font-serif text-lg sm:text-xl text-white font-medium">
                Alquimia vegetal com cura lenta e ativos puros
              </h3>

              <ul className="space-y-2.5 text-xs sm:text-sm text-forest-100 font-light">
                <li className="flex items-start space-x-2">
                  <span className="text-gold-400 font-bold shrink-0">✓</span>
                  <span><strong>Óleo puro de Copaíba</strong> com alta ação calmante e regenerativa natural.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold-400 font-bold shrink-0">✓</span>
                  <span><strong>Cascas incorporadas</strong> na barra para uma esfoliação física leve e diária.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold-400 font-bold shrink-0">✓</span>
                  <span><strong>Base 100% Glicerinada Vegetal</strong> que retém a umidade natural da derme.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
