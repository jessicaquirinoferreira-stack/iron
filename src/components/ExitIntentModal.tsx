import { useState, useEffect } from 'react';
import { X, Sparkles, Clock, ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppLink } from '../config';

export default function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Check if dismissed before in session
    const dismissed = sessionStorage.getItem('iron_road_exit_dismissed');
    if (dismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 15 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
        sessionStorage.setItem('iron_road_exit_dismissed', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('iron_road_exit_dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg rounded-2xl glass-metal p-6 sm:p-8 border border-amber-500/40 shadow-[0_20px_60px_rgba(255,94,20,0.35)] overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5E14]/20 rounded-full blur-[80px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Fechar pop-up"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="relative z-10 text-center sm:text-left">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5E14]/15 border border-[#FF5E14]/40 text-xs font-mono font-bold text-[#FFA366] uppercase mb-4">
            <Flame className="w-4 h-4 text-[#FF5E14] animate-pulse" />
            Condição Especial para Novos Embarques
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold uppercase font-['Barlow_Condensed'] text-white tracking-tight leading-tight">
            Vai Transportar Carga ou Contêiner? Não Feche Sem Nos Consultar!
          </h3>

          <p className="mt-3 text-sm text-slate-300 font-sans leading-relaxed">
            Nossa equipe em <strong className="text-white">Santos-SP</strong> garante alocação prioritária de carretas, agendamento ágil em terminais portuários e cotação sem compromisso em até 5 minutos.
          </p>

          <div className="mt-4 p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center gap-3 text-xs text-slate-200 font-mono">
            <Clock className="w-4 h-4 text-[#FF5E14] shrink-0" />
            <span>Atendimento prioritário na fila de cotação via WhatsApp.</span>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={getWhatsAppLink('Olá! Vi a condição prioritária no site da Iron Road e gostaria de solicitar uma cotação com prioridade de atendimento.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5E14] via-[#FF7A38] to-[#FF5E14] hover:brightness-110 shadow-lg shadow-[#FF5E14]/40 transition-all active:scale-95"
            >
              <span>Garantir Cotação Prioritária</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleClose}
              className="w-full sm:w-auto px-4 py-3.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Continuar navegando
            </button>
          </div>

          <p className="mt-4 text-[11px] text-center text-slate-500 font-mono flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            {COMPANY_INFO.name} · {COMPANY_INFO.phoneDisplay}
          </p>

        </div>
      </div>
    </div>
  );
}
