import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { IMAGES } from "../data";

interface HeroProps {
  onScrollToOffers: () => void;
}

export default function Hero({ onScrollToOffers }: HeroProps) {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-sand-100 via-sand-50 to-sand-100 overflow-hidden">
      {/* Decorative blurred background forest elements */}
      <div className="absolute top-10 left-[-10%] w-[35%] h-[35%] rounded-full bg-forest-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[40%] h-[40%] rounded-full bg-gold-200/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text content (7 columns on desktop) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex items-center space-x-2 bg-forest-150/65 self-start px-3.5 py-1.5 rounded-full border border-forest-200/50">
              <Sparkles className="w-3.5 h-3.5 text-forest-700" />
              <span className="font-mono text-xs font-semibold tracking-wide text-forest-800 uppercase">
                Pré-Venda Especial de Lançamento
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-forest-950 leading-[1.1] tracking-tight font-bold">
              Seu banho pode <span className="text-forest-600 underline decoration-gold-450 decoration-wavy decoration-3 underline-offset-4">cuidar</span> da sua pele — ou agredir ela todos os dias.
            </h1>

            <p className="font-sans text-base sm:text-lg md:text-xl text-forest-850 max-w-xl font-light leading-relaxed">
              Produzido artesanalmente em <strong className="font-semibold text-forest-900">Ouro Preto do Oeste, Rondônia</strong>, o <strong className="font-semibold text-forest-900">Ouro da Floresta</strong> é a linha vegetal de sabonetes da <strong className="font-semibold text-forest-900">Orvalho da Amazônia</strong>, que une o poder da copaíba a uma formulação cuidadosamente desenvolvida para proporcionar um banho agradável, esfoliante e equilibrado.
            </p>

            {/* Quick Benefits Checkmarks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-medium text-forest-900 block">Óleo & Casca de Copaíba</span>
                  <span className="text-xs text-forest-700">Manejo sustentável realizado por extrativistas regionais da Amazônia</span>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-medium text-forest-900 block">Cura Lenta Especial</span>
                  <span className="text-xs text-forest-700">Garante maior firmeza, rendimento superior e qualidade superior a cada banho</span>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-medium text-forest-900 block">Esfoliação Leve e Delicada</span>
                  <span className="text-xs text-forest-700">Pequenos fragmentos de casca natural para remover impurezas e células mortas</span>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-medium text-forest-900 block">Sem Essências Artificiais</span>
                  <span className="text-xs text-forest-700">Aroma natural de copaíba preservado de forma autêntica e sofisticada</span>
                </div>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <button
                onClick={onScrollToOffers}
                className="py-4 px-8 bg-forest-900 text-gold-100 hover:bg-forest-800 transition-all font-medium text-base rounded-lg shadow-lg hover:shadow-xl active:scale-98 flex items-center justify-center space-x-2 group cursor-pointer"
              >
                <span>Garantir Ouro da Floresta</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => {
                  const element = document.getElementById("ingredientes");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="py-4 px-6 text-forest-900 hover:text-forest-700 transition-colors font-medium text-sm flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <span>Descubra a fórmula amazônica</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-6 pt-2 border-t border-forest-100/60 max-w-md">
              <div className="flex items-center space-x-1.5 text-xs text-forest-700">
                <ShieldCheck className="w-4 h-4 text-forest-600" />
                <span>Garantia de Satisfação de 30 dias</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-forest-300"></div>
              <div className="flex items-center space-x-1.5 text-xs text-forest-700">
                <span className="text-gold-500 font-bold">★ 4.9/5</span>
                <span>comentários de clientes</span>
              </div>
            </div>

          </div>

          {/* Image & Display (5 columns on desktop) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Main premium border shadow frame */}
              <div className="absolute inset-0 bg-gold-200/40 rounded-2xl transform rotate-3 scale-102" />
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-forest-600 to-gold-450 opacity-10 rounded-2xl blur-lg pointer-events-none" />
              
              {/* Main Image container */}
              <div className="relative bg-sand-100 border border-forest-200/55 rounded-2xl overflow-hidden shadow-2xl z-10 aspect-square sm:aspect-[4/3] lg:aspect-square">
                <img
                  src={IMAGES.hero}
                  alt="Sabonete artesanal Ouro da Floresta na floresta amazônica"
                  className="w-full h-full object-cover transition-transform duration-10000 ease-out hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating sensory stamp inside the image */}
                <div className="absolute bottom-4 left-4 bg-forest-950/80 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/10 text-white flex items-center space-x-2 z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gold-300">Pré-Venda</span>
                    <span className="font-sans text-xs font-semibold">Lote #01 - Reserva Exclusiva</span>
                  </div>
                </div>

                {/* Micro badge: Weight */}
                <div className="absolute top-4 right-4 bg-sand-50/95 backdrop-blur-sm shadow px-3 py-1 rounded text-forest-900 font-mono text-[10px] uppercase tracking-wider font-semibold border border-forest-100/50 z-20">
                  Aprox. 95g - Embalagem Sustentável
                </div>
              </div>

              {/* Natural Forest details under the image */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-forest-800/10 rounded-full blur-2xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
