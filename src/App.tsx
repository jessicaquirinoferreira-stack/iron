/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortTerminalsBanner from './components/PortTerminalsBanner';
import QuoteCalculator from './components/QuoteCalculator';
import Services from './components/Services';
import Differentials from './components/Differentials';
import AboutUs from './components/AboutUs';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingRightActions from './components/FloatingRightActions';
import VirtualAssistant from './components/VirtualAssistant';
import ExitIntentModal from './components/ExitIntentModal';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080B0E] text-slate-100 flex flex-col font-sans selection:bg-[#FF5E14] selection:text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Port of Santos Terminals Integration Strip */}
        <PortTerminalsBanner />

        {/* 3. Interactive Instant Quote Simulator */}
        <QuoteCalculator />

        {/* 4. Complete Services Section with 3D Tilt Cards */}
        <Services />

        {/* 5. Diferenciais (Por que a Iron Road?) */}
        <Differentials />

        {/* 6. Sobre Nós & Frota Institucional */}
        <AboutUs />

        {/* 7. Final Aggressive CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mandatory Floating Elements */}
      {/* Right Side: WhatsApp & Instagram Fixed Buttons */}
      <FloatingRightActions />

      {/* Left Side: Virtual Assistant Chatbot */}
      <VirtualAssistant />

      {/* Exit-Intent Conversion Modal */}
      <ExitIntentModal />
    </div>
  );
}
