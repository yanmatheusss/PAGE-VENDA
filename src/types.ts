export interface SoapCombo {
  id: string;
  name: string;
  badge?: string;
  originalPrice: number;
  price: number;
  installments: number;
  soapCount: number;
  recommended: boolean;
  features: string[];
  shippingPrice: number;
}

export interface Ingredient {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  benefits: string[];
  imageSrc?: string;
  role: string; // e.g. "Ativo Hidratante", "Agente Purificante"
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  city: string;
  skinType: string;
  rating: number;
  comment: string;
  verified: boolean;
  avatarColor: string;
  date: string;
}

export interface SensoryDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tip: string;
  perfumeFamily: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
