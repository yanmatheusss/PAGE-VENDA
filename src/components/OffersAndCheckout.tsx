import { useState, FormEvent } from "react";
import { SOAP_COMBOS } from "../data";
import { SoapCombo } from "../types";
import { 
  Check, 
  ShoppingBag, 
  CreditCard, 
  Truck, 
  ShieldCheck, 
  Sparkles, 
  Copy, 
  QrCode, 
  ArrowRight, 
  Undo2, 
  Clock, 
  Info,
  CalendarDays
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface OffersAndCheckoutProps {
  onAddSoap: (count: number) => void;
}

export default function OffersAndCheckout({ onAddSoap }: OffersAndCheckoutProps) {
  // Offer Selection
  const [selectedCombo, setSelectedCombo] = useState<SoapCombo>(SOAP_COMBOS[1]); // Default to 3 bars
  
  // Checkout simulator state
  const [checkoutStep, setCheckoutStep] = useState<"none" | "details" | "payment" | "success">("none");
  
  // Checkout Form States
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientCep, setClientCep] = useState("");
  const [isCalculatingShipping, setIsCalculatingShipping] = useState(false);
  const [shippingCalculated, setShippingCalculated] = useState(false);
  const [calculatedDays, setCalculatedDays] = useState(5);
  
  // Payment states
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "cartao">("pix");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [copiedPix, setCopiedPix] = useState(false);

  // Simulated Order Code
  const [orderCode, setOrderCode] = useState("");

  const handleStartCheckout = (combo: SoapCombo) => {
    setSelectedCombo(combo);
    setCheckoutStep("details");
    onAddSoap(combo.soapCount);
    // Smooth scroll to checkout panel
    setTimeout(() => {
      const element = document.getElementById("checkout-panel");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleCalculateShipping = (e: FormEvent) => {
    e.preventDefault();
    if (clientCep.length < 8) return;

    setIsCalculatingShipping(true);
    // Simulate river-and-road postal logistics from Manaus Amazon lab
    setTimeout(() => {
      setIsCalculatingShipping(false);
      setShippingCalculated(true);
      // Random days 4 to 8
      const days = Math.floor(Math.random() * 4) + 4;
      setCalculatedDays(days);
    }, 1500);
  };

  const handleNextToPayment = (e: FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !clientPhone || !clientCep) return;
    setCheckoutStep("payment");
  };

  const handleFinalizeOrder = (e: FormEvent) => {
    e.preventDefault();
    // Create random order code
    const code = "ODF-" + Math.floor(Math.random() * 900000 + 100000);
    setOrderCode(code);
    setCheckoutStep("success");
    // Clear cart counts or save state
    setTimeout(() => {
      const element = document.getElementById("checkout-panel");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleCopyPix = () => {
    setCopiedPix(true);
    navigator.clipboard.writeText("00020101021226830014BR.GOV.BCB.PIX2561api.ourofloresta.com/pix/checkout/qr-code-payload-ouro-da-floresta-saboaria-viva-sustentavel-9503330399005");
    setTimeout(() => setCopiedPix(false), 2000);
  };

  return (
    <section id="ofertas" className="py-20 bg-gradient-to-b from-sand-50 via-sand-100 to-sand-50 text-forest-950 relative">
      <div className="absolute top-[20%] left-[-10%] w-[35%] h-[35%] rounded-full bg-gold-200/10 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-gold-650 font-semibold mb-2 block">
            Ofertas Exclusivas de Lançamento
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-900 mb-4">
            Escolha seu ritual e sinta a diferença
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-lg text-forest-800 font-light max-w-xl mx-auto leading-relaxed">
            Recomendamos o tratamento de 3 barras para experimentar o ciclo completo de regeneração e desfrutar de <strong className="text-forest-950 font-semibold">Frete Grátis</strong>.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {SOAP_COMBOS.map((combo) => (
            <div
              key={combo.id}
              className={`bg-white border rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                combo.recommended
                  ? "border-gold-450 ring-4 ring-gold-250/30 scale-103 shadow-xl shadow-forest-900/5 md:z-10"
                  : "border-forest-150 hover:border-forest-350 shadow-sm"
              }`}
            >
              {/* Badge */}
              {combo.badge && (
                <span className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase font-bold text-white shadow-sm ${
                  combo.recommended ? "bg-gold-500" : "bg-forest-700"
                }`}>
                  {combo.badge}
                </span>
              )}

              {/* Header */}
              <div className="text-center pb-6 border-b border-forest-100">
                <h3 className="font-serif text-xl font-bold text-forest-900 mb-2">
                  {combo.name}
                </h3>
                <div className="flex items-center justify-center space-x-1.5 text-xs text-forest-500 font-mono mb-4">
                  <span>Cura Lenta</span>
                  <span>•</span>
                  <span>{combo.soapCount}x {combo.soapCount === 1 ? "unidade" : "unidades"} (Aprox. 95g)</span>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-sm text-forest-400 line-through font-light">
                    De R$ {combo.originalPrice.toFixed(2)}
                  </span>
                  <div className="flex items-baseline space-x-1 mt-1">
                    <span className="font-serif text-sm font-semibold text-forest-900">R$</span>
                    <span className="font-serif text-4xl sm:text-5xl font-bold text-forest-950 tracking-tight">
                      {Math.floor(combo.price)}
                    </span>
                    <span className="font-serif text-lg font-bold text-forest-950">
                      ,{(combo.price % 1).toFixed(2).substring(2)}
                    </span>
                  </div>
                  {combo.installments > 1 ? (
                    <span className="text-xs text-gold-700 font-sans mt-2 bg-gold-50 px-2.5 py-1 rounded-full font-medium border border-gold-100">
                      Ou até {combo.installments}x de R$ {(combo.price / combo.installments).toFixed(2)} sem juros
                    </span>
                  ) : (
                    <span className="text-xs text-forest-500 font-mono mt-2 uppercase tracking-wide">
                      À vista no Pix ou Cartão
                    </span>
                  )}
                </div>
              </div>

              {/* Features List */}
              <div className="py-6 flex-grow space-y-3">
                {combo.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-forest-800">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${combo.recommended ? "text-gold-500" : "text-forest-600"}`} />
                    <span className="font-light">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-forest-50 mt-auto">
                <button
                  onClick={() => handleStartCheckout(combo)}
                  className={`w-full py-4 px-6 rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-md active:scale-98 ${
                    combo.recommended
                      ? "bg-forest-900 hover:bg-forest-800 text-gold-100 hover:text-white"
                      : "bg-sand-100 hover:bg-sand-200 text-forest-900"
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Comprar Agora</span>
                </button>
                <p className="text-center text-[10px] text-forest-450 mt-2 font-mono uppercase tracking-wider">
                  🛒 Compra 100% segura & auditada
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* INTERACTIVE CHECKOUT SIMULATOR PANEL */}
        <AnimatePresence>
          {checkoutStep !== "none" && (
            <motion.div
              id="checkout-panel"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="bg-white border border-forest-200 rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto scroll-mt-24"
            >
              
              {/* Stepper Header */}
              <div className="bg-forest-950 px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-forest-850">
                <div className="flex items-center space-x-2 text-gold-300">
                  <ShoppingBag className="w-4 h-4" />
                  <span className="font-serif text-sm font-semibold tracking-wide">
                    Finalizando pedido: {selectedCombo.name}
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-xs font-mono">
                  <div className={`px-2 py-1 rounded ${checkoutStep === "details" ? "bg-gold-550 text-forest-950 font-bold" : "text-forest-300"}`}>
                    1. Dados & Envio
                  </div>
                  <span className="text-forest-700">/</span>
                  <div className={`px-2 py-1 rounded ${checkoutStep === "payment" ? "bg-gold-550 text-forest-950 font-bold" : "text-forest-300"}`}>
                    2. Pagamento
                  </div>
                  <span className="text-forest-700">/</span>
                  <div className={`px-2 py-1 rounded ${checkoutStep === "success" ? "bg-gold-550 text-forest-950 font-bold" : "text-forest-300"}`}>
                    3. Sucesso
                  </div>
                </div>
              </div>

              {/* Step 1: Client details & Address */}
              {checkoutStep === "details" && (
                <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Form (7 columns) */}
                  <form onSubmit={handleNextToPayment} className="lg:col-span-7 space-y-5">
                    <h3 className="font-serif text-lg font-semibold text-forest-900 border-b border-forest-100 pb-2">
                      Informações de Entrega
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-forest-700 font-bold mb-1">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ex: Amanda Silva Santos"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          className="w-full px-3.5 py-2 text-sm border border-forest-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-forest-500 bg-sand-50"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-forest-700 font-bold mb-1">
                            E-mail (para rastreamento) *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="Ex: amanda@gmail.com"
                            value={clientEmail}
                            onChange={(e) => setClientEmail(e.target.value)}
                            className="w-full px-3.5 py-2 text-sm border border-forest-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-forest-500 bg-sand-50"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-forest-700 font-bold mb-1">
                            WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="Ex: (11) 99999-9999"
                            value={clientPhone}
                            onChange={(e) => setClientPhone(e.target.value)}
                            className="w-full px-3.5 py-2 text-sm border border-forest-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-forest-500 bg-sand-50"
                          />
                        </div>
                      </div>

                      {/* Interactive CEP Shipping calculator */}
                      <div className="bg-sand-50/70 p-4 rounded-xl border border-forest-100">
                        <label className="block text-xs font-mono uppercase tracking-wider text-forest-700 font-bold mb-1.5 flex items-center justify-between">
                          <span>CEP de Destino *</span>
                          <span className="text-[10px] font-normal text-forest-550">Para simular rotas da Amazônia</span>
                        </label>
                        
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            required
                            maxLength={8}
                            placeholder="Ex: 01310100 (Apenas números)"
                            value={clientCep}
                            onChange={(e) => setClientCep(e.target.value.replace(/\D/g, ""))}
                            className="flex-grow px-3.5 py-2 text-sm border border-forest-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-forest-500 bg-white"
                          />
                          <button
                            type="button"
                            onClick={handleCalculateShipping}
                            disabled={clientCep.length < 8 || isCalculatingShipping}
                            className="px-4 py-2 bg-forest-800 hover:bg-forest-900 disabled:bg-forest-200 text-gold-100 disabled:text-forest-400 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                          >
                            {isCalculatingShipping ? "Calculando..." : "Calcular"}
                          </button>
                        </div>

                        {/* Shipping Output simulated */}
                        <AnimatePresence>
                          {shippingCalculated && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              className="mt-3.5 pt-3 border-t border-forest-100 text-xs flex items-start space-x-2 text-forest-800"
                            >
                              <Truck className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                              <div className="flex-grow">
                                <p className="font-semibold text-forest-950">
                                  {selectedCombo.shippingPrice === 0 
                                    ? "Frete Grátis Ativado!" 
                                    : `Sedex Expresso: R$ ${selectedCombo.shippingPrice.toFixed(2)}`}
                                </p>
                                <p className="text-[11px] text-forest-550 mt-0.5 leading-tight">
                                  Seu lote partirá de barco por canais fluviais e seguirá via aérea de Manaus até sua localidade. Entrega estimada em <strong className="text-forest-800">{calculatedDays} dias úteis</strong>.
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setCheckoutStep("none")}
                        className="inline-flex items-center space-x-1.5 text-xs text-forest-500 hover:text-forest-800 cursor-pointer"
                      >
                        <Undo2 className="w-4 h-4" />
                        <span>Voltar às ofertas</span>
                      </button>

                      <button
                        type="submit"
                        className="py-3 px-6 bg-forest-900 hover:bg-forest-800 text-gold-100 rounded-lg text-xs font-bold tracking-wider uppercase flex items-center space-x-1.5 transition-all shadow-md cursor-pointer"
                      >
                        <span>Ir para Pagamento</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>

                  {/* Right Summary column (5 columns) */}
                  <div className="lg:col-span-5 bg-sand-50 border border-forest-100 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-forest-900 uppercase tracking-wider border-b border-forest-100 pb-2 mb-4">
                        Resumo da Jornada
                      </h4>

                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-forest-600 font-light">{selectedCombo.name}</span>
                          <span className="font-semibold text-forest-900">R$ {selectedCombo.originalPrice.toFixed(2)}</span>
                        </div>
                        
                        <div className="flex justify-between text-emerald-700 font-medium">
                          <span>Desconto Florestal</span>
                          <span>- R$ {(selectedCombo.originalPrice - selectedCombo.price).toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between text-forest-600 font-light">
                          <span>Frete Amazônia</span>
                          <span>
                            {selectedCombo.shippingPrice === 0 
                              ? "Grátis" 
                              : `R$ ${selectedCombo.shippingPrice.toFixed(2)}`}
                          </span>
                        </div>

                        <div className="h-px bg-forest-100 my-3"></div>

                        <div className="flex justify-between text-base font-bold text-forest-950">
                          <span className="font-serif">Total Geral</span>
                          <span className="font-mono">R$ {(selectedCombo.price + (shippingCalculated ? selectedCombo.shippingPrice : selectedCombo.shippingPrice)).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 space-y-3.5 bg-white p-4 rounded-xl border border-forest-100/50 text-xs">
                      <div className="flex items-start space-x-2 text-forest-750">
                        <ShieldCheck className="w-4.5 h-4.5 text-forest-600 shrink-0 mt-0.5" />
                        <span><strong>Garantia de 30 dias:</strong> Use o sabonete livremente. Se não sentir a pele incrivelmente macia e saudável, devolvemos 100% do seu dinheiro.</span>
                      </div>
                      
                      <div className="flex items-start space-x-2 text-forest-750">
                        <Clock className="w-4.5 h-4.5 text-forest-600 shrink-0 mt-0.5" />
                        <span><strong>Lote Limitado:</strong> Garantimos o valor com desconto apenas para os próximos 12 pedidos de hoje.</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Payment options */}
              {checkoutStep === "payment" && (
                <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Payment Left choice (7 columns) */}
                  <div className="lg:col-span-7 space-y-6">
                    <h3 className="font-serif text-lg font-semibold text-forest-900 border-b border-forest-100 pb-2">
                      Selecione o Método de Pagamento
                    </h3>

                    {/* Tabs */}
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("pix")}
                        className={`p-4 rounded-xl border flex flex-col items-center justify-center space-y-2 cursor-pointer transition-all ${
                          paymentMethod === "pix"
                            ? "border-forest-900 bg-forest-50/50 text-forest-900 ring-2 ring-forest-900/10"
                            : "border-forest-150 bg-white hover:bg-sand-50 text-forest-600"
                        }`}
                      >
                        <QrCode className="w-6 h-6 text-emerald-600" />
                        <span className="text-sm font-semibold">Pix (Aprovação Imediata)</span>
                        <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-mono font-bold">
                          -10% Desconto Extra
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod("cartao")}
                        className={`p-4 rounded-xl border flex flex-col items-center justify-center space-y-2 cursor-pointer transition-all ${
                          paymentMethod === "cartao"
                            ? "border-forest-900 bg-forest-50/50 text-forest-900 ring-2 ring-forest-900/10"
                            : "border-forest-150 bg-white hover:bg-sand-50 text-forest-600"
                        }`}
                      >
                        <CreditCard className="w-6 h-6 text-forest-800" />
                        <span className="text-sm font-semibold">Cartão de Crédito</span>
                        <span className="text-[10px] text-forest-500 font-mono">
                          Até {selectedCombo.installments}x Sem Juros
                        </span>
                      </button>
                    </div>

                    {/* Dynamic Panel content */}
                    {paymentMethod === "pix" ? (
                      <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-5 sm:p-6 space-y-4">
                        <div className="flex items-center space-x-3 text-emerald-800">
                          <QrCode className="w-5 h-5 shrink-0" />
                          <h4 className="text-xs font-mono uppercase tracking-wider font-bold">
                            Chave Pix Gerada de Forma Segura
                          </h4>
                        </div>
                        <p className="text-xs text-forest-750 font-light leading-relaxed">
                          Pague via Pix copia-e-cola e ganhe <strong>10% de desconto extra automático</strong>. Seu lote será reservado e processado prioritariamente!
                        </p>

                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 bg-white p-4 rounded-xl border border-emerald-100">
                          <div className="w-24 h-24 bg-sand-100 rounded border border-forest-100 flex items-center justify-center relative">
                            <span className="text-[10px] font-mono text-forest-500 text-center font-semibold px-2">
                              Simulated QR Code
                            </span>
                            <div className="absolute inset-0 bg-forest-900/5 flex items-center justify-center">
                              <QrCode className="w-12 h-12 text-forest-900 opacity-60" />
                            </div>
                          </div>
                          
                          <div className="flex-grow space-y-2 text-center sm:text-left w-full">
                            <span className="text-[9px] font-mono text-forest-500 uppercase tracking-widest font-bold">Código Pix Copia e Cola:</span>
                            <div className="px-3 py-1.5 bg-sand-50 border border-forest-100 rounded text-[10px] font-mono text-forest-700 overflow-x-hidden text-ellipsis whitespace-nowrap">
                              00020101021226830014BR.GOV.BCB.PIX2561api.ourofloresta.com/pix/checkout/qr-code-payload-ouro-da-floresta
                            </div>
                            
                            <button
                              type="button"
                              onClick={handleCopyPix}
                              className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-semibold cursor-pointer transition-colors"
                            >
                              <Copy className="w-3.5 h-3.5" />
                              <span>{copiedPix ? "Copiado com Sucesso!" : "Copiar Código Pix"}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4 bg-sand-50/50 p-5 border border-forest-150 rounded-2xl">
                        <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-forest-800">
                          Insira os Dados do Cartão
                        </h4>
                        
                        <div className="space-y-3">
                          <div>
                            <label className="block text-[10px] font-mono uppercase tracking-wider text-forest-600 font-bold mb-1">
                              Número do Cartão *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Ex: 4000 1234 5678 9010"
                              value={cardNumber}
                              onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ""))}
                              className="w-full px-3.5 py-2 text-sm border border-forest-200 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-forest-500"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-mono uppercase tracking-wider text-forest-600 font-bold mb-1">
                              Nome Escrito no Cartão *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Ex: AMANDA S SANTOS"
                              value={cardHolder}
                              onChange={(e) => setCardHolder(e.target.value.toUpperCase())}
                              className="w-full px-3.5 py-2 text-sm border border-forest-200 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-forest-500"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-[10px] font-mono uppercase tracking-wider text-forest-600 font-bold mb-1">
                                Validade (MM/AA) *
                              </label>
                              <input
                                type="text"
                                required
                                placeholder="Ex: 08/29"
                                value={cardExpiry}
                                onChange={(e) => setCardExpiry(e.target.value)}
                                className="w-full px-3.5 py-2 text-sm border border-forest-200 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-forest-500"
                              />
                            </div>

                            <div>
                              <label className="block text-[10px] font-mono uppercase tracking-wider text-forest-600 font-bold mb-1">
                                Código de Segurança (CVV) *
                              </label>
                              <input
                                type="text"
                                required
                                maxLength={4}
                                placeholder="Ex: 123"
                                value={cardCvv}
                                onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, ""))}
                                className="w-full px-3.5 py-2 text-sm border border-forest-200 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-forest-500"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setCheckoutStep("details")}
                        className="inline-flex items-center space-x-1.5 text-xs text-forest-500 hover:text-forest-800 cursor-pointer"
                      >
                        <Undo2 className="w-4 h-4" />
                        <span>Voltar para envio</span>
                      </button>

                      <button
                        onClick={handleFinalizeOrder}
                        className="py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold tracking-wider uppercase flex items-center space-x-1.5 transition-all shadow-md cursor-pointer"
                      >
                        <span>Finalizar Pedido</span>
                        <Check className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Payment Right Summary (5 columns) */}
                  <div className="lg:col-span-5 bg-sand-50 border border-forest-100 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-forest-900 uppercase tracking-wider border-b border-forest-100 pb-2 mb-4">
                        Revisão de valores
                      </h4>

                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-forest-600">{selectedCombo.name}</span>
                          <span className="font-semibold">R$ {selectedCombo.price.toFixed(2)}</span>
                        </div>

                        {paymentMethod === "pix" && (
                          <div className="flex justify-between text-emerald-700 font-medium">
                            <span>Desconto extra Pix (-10%)</span>
                            <span>- R$ {(selectedCombo.price * 0.10).toFixed(2)}</span>
                          </div>
                        )}

                        <div className="flex justify-between text-forest-600">
                          <span>Envio e Frete</span>
                          <span>{selectedCombo.shippingPrice === 0 ? "Grátis" : `R$ ${selectedCombo.shippingPrice.toFixed(2)}`}</span>
                        </div>

                        <div className="h-px bg-forest-100 my-3"></div>

                        <div className="flex justify-between text-base font-bold text-forest-950">
                          <span className="font-serif">Total Pago</span>
                          <span className="font-mono">
                            R$ {(
                              selectedCombo.price + 
                              selectedCombo.shippingPrice - 
                              (paymentMethod === "pix" ? selectedCombo.price * 0.10 : 0)
                            ).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 bg-white p-4 rounded-xl border border-forest-100/50 space-y-3">
                      <div className="flex items-center space-x-2 text-xs text-forest-750 font-medium">
                        <ShieldCheck className="w-4.5 h-4.5 text-emerald-600" />
                        <span>Conexão criptografada por SSL</span>
                      </div>
                      <div className="text-[10px] text-forest-500 font-light leading-relaxed">
                        Seu pagamento é simulado e processado em nosso laboratório de biocosméticos. Sem cobranças reais no seu cartão de teste.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Success Confirmation */}
              {checkoutStep === "success" && (
                <div className="p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6">
                  
                  {/* Big visual floral crown checkmark */}
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center shadow-inner relative">
                    <Check className="w-8 h-8" />
                    <div className="absolute inset-0 rounded-full border-4 border-emerald-400/20 animate-ping" />
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-gold-650 font-bold bg-gold-50 px-3 py-1 rounded">
                      Pedido Confirmado com Sucesso!
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-forest-950">
                      Seu banho sensorial está a caminho
                    </h3>
                    <p className="font-sans text-sm text-forest-700 font-light max-w-md mx-auto">
                      Parabéns, <strong>{clientName || "Cliente da Floresta"}</strong>! Seu pedido de <strong>{selectedCombo.soapCount}x sabonete(s) Ouro da Floresta da Orvalho da Amazônia</strong> foi recebido e já está sendo preparado.
                    </p>
                  </div>

                  {/* Order Receipt metadata */}
                  <div className="bg-sand-50 border border-forest-150 rounded-2xl p-5 text-left grid grid-cols-2 gap-4 max-w-md mx-auto font-sans text-xs">
                    <div>
                      <span className="text-forest-500 font-mono text-[10px] uppercase block">Código do Pedido:</span>
                      <strong className="text-forest-950 text-sm font-mono font-bold">{orderCode || "ODF-284920"}</strong>
                    </div>
                    <div>
                      <span className="text-forest-500 font-mono text-[10px] uppercase block">E-mail de Rastreamento:</span>
                      <strong className="text-forest-950 truncate block">{clientEmail || "usuario@email.com"}</strong>
                    </div>
                    <div>
                      <span className="text-forest-500 font-mono text-[10px] uppercase block">Prazo de Entrega:</span>
                      <strong className="text-forest-950 block">{calculatedDays} dias úteis (Sedex)</strong>
                    </div>
                    <div>
                      <span className="text-forest-500 font-mono text-[10px] uppercase block">Método de Envio:</span>
                      <strong className="text-forest-950 block">Expresso Fluvial/Terrestre</strong>
                    </div>
                  </div>

                  {/* Quick Ritual tips */}
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-4 text-left text-xs text-forest-800 space-y-2 max-w-md mx-auto">
                    <span className="font-mono font-bold uppercase text-emerald-800 tracking-wider flex items-center space-x-1 text-[10px]">
                      <Sparkles className="w-3 h-3 text-gold-550" />
                      <span>Ritual de Boas-vindas Orvalho da Amazônia</span>
                    </span>
                    <p className="font-light leading-relaxed">
                      Enquanto sua encomenda viaja de Rondônia até sua casa, reserve um local seco e drenado para sua saboneteira. Ao receber sua barra artesanal Ouro da Floresta, desfrute do aroma autêntico e sofisticado da copaíba para uma profunda conexão com a floresta.
                    </p>
                  </div>

                  <button
                    onClick={() => setCheckoutStep("none")}
                    className="py-3.5 px-8 bg-forest-900 hover:bg-forest-850 text-gold-100 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                  >
                    Voltar para a Página Principal
                  </button>

                </div>
              )}

            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic secure payment icons or guarantee seals */}
        <div className="mt-16 pt-10 border-t border-forest-150 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs text-forest-500">
          <div className="flex flex-col items-center space-y-1.5">
            <span className="font-bold text-forest-800">Satisfação Garantida</span>
            <span>Seu dinheiro de volta em até 30 dias</span>
          </div>
          <div className="flex flex-col items-center space-y-1.5">
            <span className="font-bold text-forest-800">Logística Verde</span>
            <span>Embalagem compostável vegetal</span>
          </div>
          <div className="flex flex-col items-center space-y-1.5">
            <span className="font-bold text-forest-800">Manejo Sustentável</span>
            <span>Renda gerada a comunidades ribeirinhas</span>
          </div>
          <div className="flex flex-col items-center space-y-1.5">
            <span className="font-bold text-forest-800">Sem Química Nociva</span>
            <span>Zero sulfatos, parabenos ou corantes</span>
          </div>
        </div>

      </div>
    </section>
  );
}
