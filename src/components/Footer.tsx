import { Leaf, Award, ShieldAlert } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-sand-50 py-8 relative overflow-hidden border-t border-forest-900/60">
      
      {/* Subtle color glow */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-forest-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-forest-900/50 items-center">
          
          {/* Brand block (5 columns) */}
          <div className="md:col-span-6 flex flex-col space-y-2.5">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-forest-800 flex items-center justify-center text-gold-300">
                <Leaf className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base font-bold tracking-wide text-white leading-tight">
                  Orvalho da Amazônia
                </span>
                <span className="font-mono text-[8px] tracking-wider uppercase text-gold-450 font-semibold leading-none">
                  Ouro da Floresta
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-forest-300 font-light leading-relaxed max-w-md">
              Unindo alta biocosmética vegetal com manejo agroecológico sustentável em Rondônia. Cada barra preserva a floresta e valoriza o produtor local.
            </p>
          </div>

          {/* Sourcing and Certifications (6 columns) */}
          <div className="md:col-span-6 flex flex-col md:items-end space-y-2">
            <div className="flex flex-wrap gap-2 md:justify-end">
              <span className="text-[9px] font-mono font-medium text-gold-300 uppercase tracking-wider bg-forest-900/40 border border-forest-800/60 px-2 py-0.5 rounded">
                100% Vegetal
              </span>
              <span className="text-[9px] font-mono font-medium text-gold-300 uppercase tracking-wider bg-forest-900/40 border border-forest-800/60 px-2 py-0.5 rounded">
                Cruelty-Free
              </span>
              <span className="text-[9px] font-mono font-medium text-gold-300 uppercase tracking-wider bg-forest-900/40 border border-forest-800/60 px-2 py-0.5 rounded">
                Artesanal
              </span>
            </div>
            
            <div className="flex items-center space-x-1.5 text-xs text-gold-300 md:justify-end">
              <Award className="w-3.5 h-3.5 text-gold-500 shrink-0" />
              <span className="font-sans text-[11px] font-light text-forest-200">Manejo Sustentável de Impacto Positivo</span>
            </div>
          </div>

        </div>

        {/* Legal disclosures and credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] text-forest-400 font-mono">
          <div className="text-center sm:text-left space-y-0.5 leading-normal">
            <p>© 2026 Orvalho da Amazônia Biocosmética LTDA.</p>
            <p>Saboaria Fina e Biocosméticos — CNPJ: 12.345.678/0001-90</p>
            <p>Ouro Preto do Oeste — RO — Brasil</p>
          </div>

          <div className="text-center sm:text-right text-forest-500 max-w-sm sm:max-w-xs leading-normal">
            <p>Fórmula biodegradável desenvolvida em harmonia com a derme e com o ecossistema.</p>
          </div>
        </div>

        {/* Regulatory disclaimer */}
        <div className="mt-6 pt-4 border-t border-forest-900/40 text-center text-[9px] text-forest-500 font-sans max-w-xl mx-auto leading-normal">
          <ShieldAlert className="w-3.5 h-3.5 inline-block text-gold-600/60 -mt-0.5 mr-1" />
          <span>Os depoimentos representam experiências individuais. Os benefícios de limpeza e esfoliação suave são oriundos das características naturais do óleo e da casca de copaíba vegetal, sem substituir cuidados médicos.</span>
        </div>

      </div>
    </footer>
  );
}
