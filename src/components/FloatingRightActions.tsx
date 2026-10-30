import { useState } from 'react';
import { Instagram } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppLink } from '../config';

export default function FloatingRightActions() {
  const [hoveredButton, setHoveredButton] = useState<'whatsapp' | 'instagram' | null>(null);

  return (
    <aside
      aria-label="Canais de contato rápido"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* Instagram Floating Button */}
      <div className="relative flex items-center">
        {/* Tooltip */}
        <div
          className={`absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900/95 text-white text-xs font-semibold whitespace-nowrap border border-slate-700 shadow-xl backdrop-blur-md transition-all duration-200 pointer-events-none ${
            hoveredButton === 'instagram' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
        >
          Fale conosco no Instagram (@ironroadtransporte)
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45 border-t border-r border-slate-700" />
        </div>

        <a
          href={COMPANY_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredButton('instagram')}
          onMouseLeave={() => setHoveredButton(null)}
          className="w-13 h-13 rounded-full flex items-center justify-center text-white bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-[0_4px_16px_rgba(220,39,67,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/20"
          aria-label="Abrir Instagram Iron Road"
        >
          <Instagram className="w-6 h-6" />
        </a>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="relative flex items-center">
        {/* Tooltip */}
        <div
          className={`absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900/95 text-white text-xs font-semibold whitespace-nowrap border border-slate-700 shadow-xl backdrop-blur-md transition-all duration-200 pointer-events-none ${
            hoveredButton === 'whatsapp' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
        >
          Fale conosco no WhatsApp (13) 99189-1387
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45 border-t border-r border-slate-700" />
        </div>

        <a
          href={getWhatsAppLink('Olá! Vim pelo botão flutuante do site da Iron Road e gostaria de um atendimento prioritário.')}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredButton('whatsapp')}
          onMouseLeave={() => setHoveredButton(null)}
          className="relative w-14 h-14 rounded-full flex items-center justify-center text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-[0_6px_25px_rgba(37,211,102,0.55)] hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/25 group"
          aria-label="Fale conosco no WhatsApp"
        >
          {/* Subtle Radar Pulse Ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10 group-hover:opacity-75" />

          {/* Official WhatsApp SVG */}
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.004.577 1.764.846 2.806.847h.005c3.182 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.768-5.773-5.77zm3.407 8.169c-.147.414-.732.764-1.024.789-.283.023-.627.135-2.02-.442-1.637-.677-2.695-2.34-2.775-2.449-.082-.108-.667-.887-.667-1.689 0-.802.42-1.196.57-1.356.15-.16.326-.2.435-.2.11 0 .22.001.315.006.101.006.236-.039.37.284.14.336.478 1.164.52 1.25.042.086.07.187.013.301-.057.114-.086.185-.171.285-.086.1-.18.223-.257.3-.086.085-.176.178-.076.35.1.171.444.733.953 1.187.656.585 1.21.766 1.382.852.172.086.273.072.375-.043.102-.115.437-.508.554-.682.117-.174.234-.145.394-.086.16.058 1.016.479 1.191.566.175.086.292.13.335.204.043.074.043.43-.104.844z" />
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.527 3.66 1.443 5.174L2 22l5.004-1.312C8.423 21.517 10.153 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.639 0-3.155-.494-4.423-1.34l-.317-.212-2.977.781.795-2.902-.232-.369C3.926 14.869 3.4 13.488 3.4 12c0-4.742 3.858-8.6 8.6-8.6 4.741 0 8.6 3.858 8.6 8.6 0 4.742-3.859 8.6-8.6 8.6z" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
