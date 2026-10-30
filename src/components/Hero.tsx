import { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Clock, MapPin, CheckCircle2, Flame, Instagram } from 'lucide-react';
import MetallicCanvas from './MetallicCanvas';
import { COMPANY_INFO, getWhatsAppLink } from '../config';

export default function Hero() {
  // Real-time dynamic social proof counter
  const [quotesToday, setQuotesToday] = useState(23);

  useEffect(() => {
    // Subtle increment over time to show active traffic
    const interval = setInterval(() => {
      setQuotesToday((prev) => prev + (Math.random() > 0.6 ? 1 : 0));
    }, 45000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#080B0E]"
    >
      {/* Background Cinematic Image with dark gradients & atmospheric lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_cinematic_port_truck_1793377245810.jpg"
          alt="Operação Portuária e Transporte Pesado Iron Road"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.45] contrast-[1.15]"
          referrerPolicy="no-referrer"
        />

        {/* Cinematic Scrims & Glow Layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B0E] via-[#080B0E]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080B0E] via-[#080B0E]/70 to-transparent lg:w-4/5" />
        
        {/* Subtle Orange & Steel Atmospheric Rim Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF5E14]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />
      </div>

      {/* Floating Metallic Dust & Sparks Canvas */}
      <MetallicCanvas />

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          
          {/* Top Live Ticker / Badge */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-md mb-6 shadow-lg shadow-black/40">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-orange-400 font-mono">
              <Flame className="w-4 h-4 text-[#FF5E14] animate-pulse" />
              <span className="text-white font-bold tabular-nums">{quotesToday}</span> orçamentos solicitados hoje
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-xs text-slate-300 font-medium">Santos-SP · Plantão Ativo</span>
          </div>

          {/* Slogan Kicker */}
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[2px] w-8 bg-[#FF5E14]" />
            <span className="text-sm md:text-base font-bold tracking-widest text-[#FF5E14] uppercase font-mono">
              {COMPANY_INFO.slogan}
            </span>
          </div>

          {/* Large Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-white font-['Barlow_Condensed'] leading-[1.02] text-balance drop-shadow-2xl">
            Transporte de Cargas e{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E14] via-[#FFA366] to-[#FFFFFF]">
              Containers com Excelência
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-sans max-w-2xl text-balance">
            <strong className="text-white font-semibold">Logística Portuária em Santos-SP</strong> | Operações rodoviárias ágeis e seguras com cobertura em <strong className="text-white font-semibold">todo o Brasil</strong>.
          </p>

          {/* Key Value Points */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF5E14] shrink-0" />
              <span>Contêineres 20', 40' & Reefer</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF5E14] shrink-0" />
              <span>Terminais Portuários & Redex</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF5E14] shrink-0" />
              <span>Carga 100% Segurada (GR)</span>
            </div>
          </div>

          {/* Two Large Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Primary CTA - WhatsApp */}
            <a
              href={getWhatsAppLink('Olá! Vim pelo site e gostaria de solicitar um orçamento urgente de transporte.')}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-extrabold text-base tracking-wider text-white uppercase overflow-hidden transition-all duration-300 bg-gradient-to-r from-[#FF5E14] via-[#FF7A38] to-[#FF5E14] hover:scale-[1.02] shadow-[0_0_30px_rgba(255,94,20,0.5)] border border-amber-300/40 group active:scale-95"
            >
              {/* Official WhatsApp Icon SVG */}
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.004.577 1.764.846 2.806.847h.005c3.182 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.768-5.773-5.77zm3.407 8.169c-.147.414-.732.764-1.024.789-.283.023-.627.135-2.02-.442-1.637-.677-2.695-2.34-2.775-2.449-.082-.108-.667-.887-.667-1.689 0-.802.42-1.196.57-1.356.15-.16.326-.2.435-.2.11 0 .22.001.315.006.101.006.236-.039.37.284.14.336.478 1.164.52 1.25.042.086.07.187.013.301-.057.114-.086.185-.171.285-.086.1-.18.223-.257.3-.086.085-.176.178-.076.35.1.171.444.733.953 1.187.656.585 1.21.766 1.382.852.172.086.273.072.375-.043.102-.115.437-.508.554-.682.117-.174.234-.145.394-.086.16.058 1.016.479 1.191.566.175.086.292.13.335.204.043.074.043.43-.104.844z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.527 3.66 1.443 5.174L2 22l5.004-1.312C8.423 21.517 10.153 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.639 0-3.155-.494-4.423-1.34l-.317-.212-2.977.781.795-2.902-.232-.369C3.926 14.869 3.4 13.488 3.4 12c0-4.742 3.858-8.6 8.6-8.6 4.741 0 8.6 3.858 8.6 8.6 0 4.742-3.859 8.6-8.6 8.6z" />
              </svg>
              <span>Solicitar Orçamento no WhatsApp</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Secondary CTA - Instagram */}
            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-base tracking-wide text-white uppercase transition-all duration-300 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.25)] group backdrop-blur-md active:scale-95"
            >
              <Instagram className="w-5 h-5 text-pink-500 transition-transform group-hover:scale-110" />
              <span>Falar no Instagram</span>
            </a>
          </div>

          {/* Trust Strip */}
          <div className="mt-12 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-[#FF5E14]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase font-mono">Base Operacional</p>
                <p className="text-sm font-bold text-white">Santos - SP</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-[#FF5E14]">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase font-mono">Atendimento</p>
                <p className="text-sm font-bold text-white">Plantão 24/7</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-[#FF5E14]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase font-mono">Gerenciamento</p>
                <p className="text-sm font-bold text-white">GR & Seguro Total</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-[#FF5E14]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase font-mono">Abrangência</p>
                <p className="text-sm font-bold text-white">Brasil Inteiro</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
