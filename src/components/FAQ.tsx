import { useState } from "react";
import { FAQ_ITEMS } from "../data";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1"); // Default open first

  const toggleFaq = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section id="faq" className="py-20 bg-sand-50 text-forest-950 relative border-t border-forest-100/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <HelpCircle className="w-8 h-8 text-gold-550 mx-auto mb-3" />
          <span className="font-mono text-xs uppercase tracking-widest text-forest-600 font-semibold mb-2 block">
            Dúvidas Clarificadas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-900">
            Perguntas Frequentes
          </h2>
          <p className="font-sans text-sm sm:text-base text-forest-750 font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Tem alguma dúvida sobre a composição, durabilidade ou logística de entrega? Reunimos as respostas principais para você comprar com total segurança.
          </p>
        </div>

        {/* Collapsible Accordion Group */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`bg-white border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "border-forest-300 shadow-md shadow-forest-900/5"
                    : "border-forest-100 hover:border-forest-200 shadow-sm"
                }`}
              >
                {/* Header Toggle button */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-center space-x-3.5">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gold-650 font-bold bg-gold-50 px-2.5 py-1 rounded">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-forest-900 group-hover:text-forest-700 transition-colors leading-tight">
                      {item.question}
                    </h3>
                  </div>
                  
                  <span className={`p-1.5 rounded-full bg-sand-50 text-forest-600 group-hover:text-forest-900 shrink-0 transition-transform ${
                    isOpen ? "rotate-180 bg-forest-50 text-forest-900" : ""
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {/* Body expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 sm:p-6 pt-0 sm:pt-0 border-t border-forest-50 text-sm sm:text-base text-forest-800 font-light leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* Extra customer service contact */}
        <div className="mt-12 text-center bg-white border border-forest-100 rounded-2xl p-6 shadow-sm max-w-xl mx-auto text-xs sm:text-sm text-forest-750">
          <p>
            Ainda tem alguma pergunta que não foi listada aqui? Fale conosco!
          </p>
          <a
            href="mailto:contato@ourodafloresta.com"
            className="text-gold-700 font-serif font-bold hover:text-gold-600 underline inline-block mt-2"
          >
            contato@ourodafloresta.com
          </a>
        </div>

      </div>
    </section>
  );
}
