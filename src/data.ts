import { SoapCombo, Ingredient, Testimonial, SensoryDetail, FAQItem } from "./types";

export const IMAGES = {
  hero: "/src/assets/images/sabonete_hero_1783094939880.jpg",
  ingredients: "/src/assets/images/sabonete_ingredientes_1783094954324.jpg",
  sensory: "/src/assets/images/sensorial_banho_1783094969905.jpg"
};

export const SOAP_COMBOS: SoapCombo[] = [
  {
    id: "combo-1",
    name: "1 Unidade (Pré-Venda)",
    badge: "13% OFF",
    originalPrice: 44.90,
    price: 38.90,
    installments: 1,
    soapCount: 1,
    recommended: false,
    shippingPrice: 12.00,
    features: [
      "1 Sabonete Ouro da Floresta (Aprox. 95g)",
      "Nova embalagem de papel reciclado e tinta à base de água",
      "Garante sua unidade antes do lançamento oficial",
      "Valor especial de lançamento de Pré-Venda",
      "10% de desconto pagando com Pix (R$ 35,01)",
      "Sem essências artificiais"
    ]
  },
  {
    id: "combo-2",
    name: "Duo Floresta (2 Unidades)",
    badge: "10% OFF",
    originalPrice: 77.80,
    price: 69.99,
    installments: 2,
    soapCount: 2,
    recommended: false,
    shippingPrice: 0.00,
    features: [
      "2 Sabonetes Ouro da Floresta (Aprox. 95g cada)",
      "Nova embalagem de papel reciclado e tinta à base de água",
      "Economize R$ 7,81 neste pacote",
      "Garante suas unidades antes do lançamento oficial",
      "10% de desconto pagando com Pix (R$ 62,99)",
      "Frete Grátis para todo o Brasil"
    ]
  },
  {
    id: "combo-3",
    name: "Trio Floresta Regeneradora (3 Unidades)",
    badge: "Mais Vendido | 12% OFF",
    originalPrice: 116.70,
    price: 102.69,
    installments: 3,
    soapCount: 3,
    recommended: true,
    shippingPrice: 0.00,
    features: [
      "3 Sabonetes Ouro da Floresta (Aprox. 95g cada)",
      "Nova embalagem de papel reciclado e tinta à base de água",
      "Economize R$ 14,01 neste pacote",
      "Brinde exclusivo da Amazônia incluso",
      "10% de desconto pagando com Pix (R$ 92,42)",
      "Frete Grátis para todo o Brasil"
    ]
  },
  {
    id: "combo-4",
    name: "Kit Spa Amazônico (4 Unidades)",
    badge: "Máximo Desconto | 13% OFF",
    originalPrice: 155.60,
    price: 134.90,
    installments: 4,
    soapCount: 4,
    recommended: false,
    shippingPrice: 0.00,
    features: [
      "4 Sabonetes Ouro da Floresta (Aprox. 95g cada)",
      "Nova embalagem de papel reciclado e tinta à base de água",
      "Economize R$ 20,70 neste pacote",
      "Brinde exclusivo da Amazônia incluso",
      "10% de desconto pagando com Pix (R$ 121,41)",
      "Frete Grátis para todo o Brasil"
    ]
  }
];

export const INGREDIENTS: Ingredient[] = [
  {
    id: "oleo-copaiba",
    name: "Óleo-Resina de Copaíba",
    scientificName: "Copaifera officinalis",
    role: "Ativo Purificante & Regenerador",
    description: "Extraído de forma sustentável na floresta por extrativistas regionais da Amazônia. É um óleo-resina tradicionalmente conhecido pelo seu altíssimo poder anti-inflamatório, calmante e purificante, sendo perfeito para limpar suavemente sem agredir.",
    benefits: [
      "Purifica profundamente e desinflama a derme de forma natural",
      "Une o poder regenerativo e protetor da copaíba amazônica",
      "Proporciona uma experiência de banho agradável e equilibrada"
    ],
    imageSrc: IMAGES.ingredients
  },
  {
    id: "casca-copaiba",
    name: "Casca Natural de Copaíba",
    scientificName: "Cortex Copaifera",
    role: "Esfoliante Físico Leve & Estética Única",
    description: "Pequenos fragmentos vegetais da casca de copaíba são incorporados diretamente na barra. Eles realizam uma esfoliação física leve e delicada, auxiliando na remoção de células mortas e impurezas cotidianas, além de enriquecer a estética da barra.",
    benefits: [
      "Esfoliação física extremamente leve e segura para o dia a dia",
      "Remove células mortas e impurezas, deixando a pele mais lisa",
      "Enriquece as nuances da barra, tornando cada unidade única"
    ]
  },
  {
    id: "base-glicerinada",
    name: "Base Glicerinada Vegetal",
    scientificName: "Glycerin Soap Base",
    role: "Agente de Limpeza Suave & Umectante",
    description: "Base vegetal de alta qualidade desenvolvida especificamente para proporcionar uma limpeza delicada e manter o equilíbrio hidrolipídico natural da sua pele.",
    benefits: [
      "Garante uma limpeza extremamente suave e confortável",
      "Evita o ressecamento comum de sabonetes industriais",
      "Respeita a barreira cutânea em peles sensíveis"
    ]
  },
  {
    id: "estearina-vegetal",
    name: "Estearina Vegetal",
    scientificName: "Vegetable Stearin",
    role: "Doador de Consistência & Firmeza",
    description: "Ácido esteárico derivado de fontes vegetais sustentáveis, utilizado para conferir dureza, estabilidade e maior durabilidade para o sabonete artesanal.",
    benefits: [
      "Aumenta significativamente o rendimento e a firmeza da barra",
      "Garante uma espuma rica e estável durante toda a vida útil",
      "Ajuda a barra a passar pelo processo saudável de cura lenta"
    ]
  },
  {
    id: "lauril-suave",
    name: "Lauril Vegetal",
    scientificName: "Sodium Lauryl Sulfate (Vegetal)",
    role: "Agente Espumante & Dispersante",
    description: "Utilizado em quantidade equilibrada e segura para auxiliar na remoção de gorduras e impurezas superficiais, promovendo uma espuma suave.",
    benefits: [
      "Melhora a dispersão e poder de limpeza durante a esfoliação",
      "Garante uma espuma agradável sem irritar tecidos sensíveis",
      "Fórmula biodegradável de fontes vegetais renováveis"
    ]
  }
];

export const SENSORY_DETAILS: SensoryDetail[] = [
  {
    id: "aroma",
    title: "O Aroma da Copaíba",
    subtitle: "100% Puro & Livre de Essências Artificiais",
    description: "Nosso sabonete não utiliza nenhuma essência artificial para alterar o aroma original da copaíba, preservando as características naturais da matéria-prima amazônica para uma experiência sensorial de banho leve, verdadeira e conectada à floresta. Sem aquele cheiro doce ou artificial comum em sabonetes comerciais.",
    tip: "Ao entrar em contato com a água morna, respire fundo para sentir as notas amadeiradas e rústicas da copaíba agindo na sua mente e corpo.",
    perfumeFamily: "Aroma Natural de Copaíba"
  },
  {
    id: "esfoliacao",
    title: "A Esfoliação Leve",
    subtitle: "Casca Natural Incorporada",
    description: "A presença da casca de copaíba na barra cria uma esfoliação extremamente sutil. Ela auxilia na eliminação de células mortas e impurezas superficiais, resultando em uma sensação de limpeza profunda, toque renovado e pele muito mais lisa após cada banho.",
    tip: "Massageie a barra suavemente em círculos sobre os cotovelos, joelhos e rosto para uma renovação celular equilibrada.",
    perfumeFamily: "Toque Renovado & Pele Lisa"
  },
  {
    id: "estetica",
    title: "A Estética Única",
    subtitle: "Nenhuma Barra é Igual à Outra",
    description: "Os pontos e nuances naturais da casca de copaíba enriquecem a aparência de cada sabonete. Sua coloração ganha profundidade e autenticidade, remetendo aos tons da madeira, da terra úmida e da própria floresta. Isso revela o verdadeiro valor de um lote de produção limitado e artesanal.",
    tip: "Aprecie a coloração terrosa e as texturas rústicas de sua unidade exclusiva antes e durante o uso.",
    perfumeFamily: "Tons de Madeira & Terra Úmida"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Mariana Souza",
    age: 28,
    city: "Ouro Preto do Oeste - RO",
    skinType: "Pele Sensível e Ressecada",
    rating: 5,
    comment: "Eu comprei no primeiro lote de pré-venda e me apaixonei. A nova embalagem de papel reciclado com tinta biodegradável é linda e o sabonete tem uma textura única com as casquinhas de copaíba que fazem uma esfoliação suave maravilhosa. Senti minha pele muito hidratada, sem repuxar!",
    verified: true,
    avatarColor: "bg-emerald-600",
    date: "15/06/2026"
  },
  {
    id: "t-2",
    name: "Rodrigo Alencar",
    age: 32,
    city: "Manaus - AM",
    skinType: "Pele Oleosa com Acne",
    rating: 5,
    comment: "O fato de não ter essência artificial é sensacional. O aroma natural da copaíba é rústico, sofisticado e muito reconfortante. Cada barra tem uma coloração linda que varia de acordo com as cascas. Minha acne melhorou incrivelmente no primeiro uso.",
    verified: true,
    avatarColor: "bg-amber-600",
    date: "22/06/2026"
  },
  {
    id: "t-3",
    name: "Beatriz Vianna",
    age: 41,
    city: "São Paulo - SP",
    skinType: "Pele Mista e Delicada",
    rating: 5,
    comment: "Fiquei encantada com a proposta ecológica da embalagem de 95g e com o brinde exclusivo da Amazônia. O sabonete rende muito por conta da cura lenta e do processo de fabricação super cuidadoso. Recomendo de olhos fechados o Trio!",
    verified: true,
    avatarColor: "bg-forest-600",
    date: "28/06/2026"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "O que é a Pré-Venda e quais são as vantagens de comprar agora?",
    answer: "A pré-venda do Ouro da Floresta permite reservar as suas unidades do primeiro lote exclusivo antes do lançamento oficial. Ao reservar, você: 1) Garante sua unidade antes que esgote; 2) Recebe o produto antes do público geral; 3) Aproveita o valor especial com desconto de R$ 38,90 (De R$ 44,90); 4) Ganha um brinde exclusivo da Amazônia.",
    category: "Pré-Venda"
  },
  {
    id: "faq-2",
    question: "Qual o peso do sabonete e as características da nova embalagem?",
    answer: "O sabonete Ouro da Floresta chega em uma nova embalagem de aproximadamente 95g, produzida inteiramente com papel reciclado e tinta à base de água. É uma solução mais sustentável que protege e conserva perfeitamente o sabonete durante o armazenamento e transporte.",
    category: "Produto"
  },
  {
    id: "faq-3",
    question: "Qual é a composição completa e natural do sabonete?",
    answer: "Nossa composição é simples, pura e transparente: Base glicerinada vegetal, estearina vegetal, lauril, óleo de copaíba e casca natural de copaíba provenientes de manejo sustentável realizado por extrativistas regionais da Amazônia. Não contém essências artificiais ou corantes sintéticos.",
    category: "Fórmula"
  },
  {
    id: "faq-4",
    question: "O aroma do sabonete é forte? Como ele é aromatizado?",
    answer: "Nosso sabonete não utiliza nenhuma essência artificial. O aroma natural e sofisticado do óleo de copaíba é totalmente preservado de forma autêntica. Deixa o banho mais leve, confortável e com uma sensação mais verdadeira de conexão com a floresta amazônica.",
    category: "Aroma"
  },
  {
    id: "faq-5",
    question: "O sabonete promove esfoliação? Como funciona?",
    answer: "Sim! Incorporamos pequenos fragmentos naturais de casca de copaíba diretamente na barra. Eles promovem uma esfoliação física leve, suave e delicada durante o banho, auxiliando na remoção de células mortas e impurezas superficiais para uma pele lisa e de toque renovado.",
    category: "Uso"
  },
  {
    id: "faq-6",
    question: "Onde o sabonete Ouro da Floresta é produzido?",
    answer: "Ele é produzido de forma artesanal em Ouro Preto do Oeste, Rondônia. Cada barra passa por cura lenta (garantindo maior firmeza, melhor rendimento e qualidade superior). Por ser artesanal, nenhuma barra é exatamente igual à outra, trazendo pontos e nuances naturais exclusivos.",
    category: "Sustentabilidade"
  }
];
