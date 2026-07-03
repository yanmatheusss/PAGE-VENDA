/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PainAndEmpathy from "./components/PainAndEmpathy";
import IngredientsExplorer from "./components/IngredientsExplorer";
import SensoryExperience from "./components/SensoryExperience";
import SocialProof from "./components/SocialProof";
import OffersAndCheckout from "./components/OffersAndCheckout";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { ArrowUp, Leaf, ShieldCheck, Heart } from "lucide-react";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleScrollToOffers = () => {
    const element = document.getElementById("ofertas");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleAddSoap = (count: number) => {
    setCartCount(count);
  };

  return (
    <div className="min-h-screen bg-sand-50 font-sans text-forest-950 selection:bg-gold-200 selection:text-forest-950">
      
      {/* Sticky Premium Navbar */}
      <Navbar cartCount={cartCount} onScrollToOffers={handleScrollToOffers} />

      {/* Hero Section */}
      <Hero onScrollToOffers={handleScrollToOffers} />

      {/* Pain & Identification Section */}
      <PainAndEmpathy />

      {/* Botanical Ingredients Laboratory Explorer */}
      <IngredientsExplorer />

      {/* Bath Ritual & Sensory Experience Section */}
      <SensoryExperience />

      {/* Social Proof & Interactive Review Board */}
      <SocialProof />

      {/* Offers & Step-by-Step Checkout Simulator */}
      <OffersAndCheckout onAddSoap={handleAddSoap} />

      {/* Collapsible FAQ Accordion */}
      <FAQ />

      {/* Sustainable Brand Footer */}
      <Footer />

      {/* Floating back-to-top mini button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-40 p-3 bg-forest-900 text-gold-300 hover:text-white hover:bg-forest-800 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 border border-forest-800/40 cursor-pointer hidden sm:flex items-center justify-center"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

    </div>
  );
}

