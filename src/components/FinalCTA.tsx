import { PhoneCall, ShieldAlert, Sparkles, Clock, Check } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppLink } from '../config';

export default function FinalCTA() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#080B0E] via-[#0E131A] to-[#080B0E] border-t border-slate-800/80 overflow-hidden">
      {/* High-Impact Metallic Glow & Atmospheric Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF5E14]/15 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-30" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Urgent Alert Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-xs font-mono font-bold text-red-300 uppercase tracking-widest mb-6 backdrop-blur-md">
          <ShieldAlert className="w-4 h-4 text-red-400 animate-pulse" />
          <span>Plantão Operacional em Santos-SP Ativo</span>
        </div>

        {/* Aggressive Large Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase font-['Barlow_Condensed'] text-white tracking-tight leading-[0.98] drop-shadow-2xl">
          PRECISA DE TRANSPORTE{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E14] via-[#FFA366] to-[#FFFFFF]">
            AGORA?
          </span>
        </h2>

        {/* Supporting Urgency Paragraph */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed text-balance">
          Evite custos absurdos de <span className="text-orange-400 font-semibold">demurrage</span> e atrasos na cadeia produtiva. Nossa equipe de plantão está pronta para emitir sua cotação e alocar veículos com velocidade máxima.
        </p>

        {/* Quick Highlights */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300 font-mono">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#FF5E14]" />
            <span>Resposta em minutos</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#FF5E14]" />
            <span>Frota disponível para carregamento</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#FF5E14]" />
            <span>Atendimento direto com gestores</span>
          </div>
        </div>

        {/* Giant Pulsating Button (Obrigatório) */}
        <div className="mt-10 flex justify-center">
          <a
            href={getWhatsAppLink('Olá! Preciso de transporte urgente com a Iron Road Transporte agora.')}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-4 px-8 sm:px-14 py-5 sm:py-6 rounded-2xl font-black text-lg sm:text-2xl tracking-wider uppercase text-white overflow-hidden transition-all duration-300 bg-gradient-to-r from-[#FF5E14] via-[#FF7A38] to-[#FF5E14] hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,94,20,0.6)] border-2 border-amber-300/60 animate-pulse-slow"
          >
            {/* WhatsApp Official SVG */}
            <svg className="w-8 h-8 sm:w-10 sm:h-10 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.004.577 1.764.846 2.806.847h.005c3.182 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.768-5.773-5.77zm3.407 8.169c-.147.414-.732.764-1.024.789-.283.023-.627.135-2.02-.442-1.637-.677-2.695-2.34-2.775-2.449-.082-.108-.667-.887-.667-1.689 0-.802.42-1.196.57-1.356.15-.16.326-.2.435-.2.11 0 .22.001.315.006.101.006.236-.039.37.284.14.336.478 1.164.52 1.25.042.086.07.187.013.301-.057.114-.086.185-.171.285-.086.1-.18.223-.257.3-.086.085-.176.178-.076.35.1.171.444.733.953 1.187.656.585 1.21.766 1.382.852.172.086.273.072.375-.043.102-.115.437-.508.554-.682.117-.174.234-.145.394-.086.16.058 1.016.479 1.191.566.175.086.292.13.335.204.043.074.043.43-.104.844z" />
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.527 3.66 1.443 5.174L2 22l5.004-1.312C8.423 21.517 10.153 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.639 0-3.155-.494-4.423-1.34l-.317-.212-2.977.781.795-2.902-.232-.369C3.926 14.869 3.4 13.488 3.4 12c0-4.742 3.858-8.6 8.6-8.6 4.741 0 8.6 3.858 8.6 8.6 0 4.742-3.859 8.6-8.6 8.6z" />
            </svg>

            <span className="font-['Barlow_Condensed']">
              Chamar no WhatsApp {COMPANY_INFO.phoneDisplay}
            </span>

            {/* Continuous sheen shine */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </a>
        </div>

        {/* Direct Phone / Email Alternative */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs sm:text-sm text-slate-400 font-mono">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#FF5E14]" />
            Atendimento Segunda a Sábado com plantão emergencial
          </span>
          <span className="hidden sm:inline">·</span>
          <span>E-mail: {COMPANY_INFO.email}</span>
        </div>

      </div>
    </section>
  );
}
