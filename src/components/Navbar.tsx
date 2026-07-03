import { useState, useEffect } from "react";
import { Leaf, ShoppingBag, Menu, X, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  cartCount: number;
  onScrollToOffers: () => void;
}

export default function Navbar({ cartCount, onScrollToOffers }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full shadow-sm">
        {/* Compact Premium Announcement Bar */}
        <div className="bg-forest-950 text-gold-200 py-1.5 px-4 text-center text-[10px] sm:text-xs font-mono font-medium uppercase tracking-wider border-b border-forest-900/40 flex items-center justify-center space-x-1.5 w-full shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span>Frete Grátis na compra de combos + Brinde Porta-Sabonete de Juta</span>
        </div>

        {/* Thinner & Sleeker Navbar */}
        <nav
          id="main-navbar"
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? "bg-sand-50/95 backdrop-blur-md py-2 border-b border-forest-100/30"
              : "bg-sand-100/90 backdrop-blur-sm py-3 border-b border-forest-100/10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div 
                className="flex items-center space-x-2.5 cursor-pointer group select-none"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className="w-8 h-8 rounded-full bg-forest-900 flex items-center justify-center text-gold-300 transition-transform group-hover:rotate-12 duration-500 shrink-0">
                  <Leaf className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-sm sm:text-base font-bold tracking-wide text-forest-900 group-hover:text-forest-700 transition-colors leading-tight">
                    Orvalho da Amazônia
                  </span>
                  <span className="font-mono text-[8px] sm:text-[9px] tracking-wider uppercase text-gold-600 font-semibold leading-none">
                    Ouro da Floresta
                  </span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <button
                  onClick={() => scrollToSection("ingredientes")}
                  className="text-xs font-medium text-forest-850 hover:text-gold-600 transition-colors cursor-pointer"
                >
                  Ingredientes
                </button>
                <button
                  onClick={() => scrollToSection("sensorial")}
                  className="text-xs font-medium text-forest-850 hover:text-gold-600 transition-colors cursor-pointer"
                >
                  O Ritual
                </button>
                <button
                  onClick={() => scrollToSection("depoimentos")}
                  className="text-xs font-medium text-forest-850 hover:text-gold-600 transition-colors cursor-pointer"
                >
                  Avaliações
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-xs font-medium text-forest-850 hover:text-gold-600 transition-colors cursor-pointer"
                >
                  Dúvidas
                </button>
              </div>

              {/* Right Buttons */}
              <div className="flex items-center space-x-3">
                {/* Sustainability Badge */}
                <div className="hidden lg:flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-forest-100/80 text-forest-800 text-[10px] font-medium border border-forest-200/35">
                  <Award className="w-3 h-3 text-gold-550" />
                  <span>Reserva Lote #01</span>
                </div>

                {/* Interactive Cart Button */}
                <button
                  onClick={onScrollToOffers}
                  className="relative p-2 rounded-full bg-forest-900 text-white hover:bg-forest-850 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center shadow-md shadow-forest-900/5"
                  aria-label="Ver ofertas"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-gold-300" />
                  <AnimatePresence>
                    {cartCount > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-gold-550 text-white font-sans text-[9px] font-bold flex items-center justify-center rounded-full border border-sand-50"
                      >
                        {cartCount}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-1.5 rounded-lg text-forest-900 hover:bg-forest-100 transition-colors md:hidden cursor-pointer"
                  aria-label="Menu"
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Drawer Menu (Nested inside the fixed container, completely bug-free position) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 z-40 bg-sand-50 shadow-xl border-b border-forest-200/45 py-4 px-4 md:hidden flex flex-col space-y-3"
            >
              <button
                onClick={() => scrollToSection("ingredientes")}
                className="text-left py-2 px-3 rounded-md hover:bg-forest-100/50 text-xs font-semibold text-forest-900 transition-colors"
              >
                Ingredientes Botânicos
              </button>
              <button
                onClick={() => scrollToSection("sensorial")}
                className="text-left py-2 px-3 rounded-md hover:bg-forest-100/50 text-xs font-semibold text-forest-900 transition-colors"
              >
                O Ritual do Banho
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-left py-2 px-3 rounded-md hover:bg-forest-100/50 text-xs font-semibold text-forest-900 transition-colors"
              >
                Depoimentos Reais
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left py-2 px-3 rounded-md hover:bg-forest-100/50 text-xs font-semibold text-forest-900 transition-colors"
              >
                Dúvidas Frequentes
              </button>
              <div className="h-px bg-forest-100/80 my-0.5"></div>
              <div className="flex items-center justify-between px-3 text-[10px] text-forest-600 font-mono">
                <span>100% VEGETAL</span>
                <span>LOTE LIMITADO</span>
              </div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onScrollToOffers();
                }}
                className="w-full py-2.5 bg-forest-900 hover:bg-forest-800 text-gold-100 rounded-lg text-center text-xs font-bold shadow-md transition-all active:scale-98"
              >
                Garantir Ouro da Floresta
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
