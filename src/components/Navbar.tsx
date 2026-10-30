import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppLink } from '../config';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B0E]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#080B0E]/90 via-[#080B0E]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Logo Zone: Grande, nítido, ultra visível e legível, sem fundo, brilho metálico */}
          <a
            href="#inicio"
            className="flex items-center group relative shrink-0"
            aria-label="Iron Road Transporte"
          >
            <div className="relative py-1">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="Iron Road Transporte"
                className="h-16 sm:h-20 md:h-24 lg:h-24 xl:h-28 max-w-[260px] sm:max-w-[340px] md:max-w-[420px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter brightness-[1.12] contrast-[1.08] drop-shadow-[0_6px_22px_rgba(255,94,20,0.5)]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded" />
            </div>
          </a>

          {/* Nav Links Zone (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 transition-colors hover:text-[#FF5E14] whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF5E14] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button Zone */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={getWhatsAppLink('Olá! Gostaria de solicitar um orçamento de transporte com a Iron Road.')}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide text-white uppercase overflow-hidden transition-all duration-300 bg-gradient-to-r from-[#FF5E14] via-[#FF7A38] to-[#FF5E14] hover:brightness-110 shadow-[0_0_20px_rgba(255,94,20,0.4)] active:scale-95 group border border-amber-400/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                Solicitar Orçamento
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors focus:outline-none"
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0E14]/98 border-b border-slate-800 px-6 py-6 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-[#FF5E14] py-2 border-b border-slate-800/80 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={getWhatsAppLink('Olá! Vim pelo site da Iron Road e gostaria de solicitar um orçamento.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm uppercase text-white bg-gradient-to-r from-[#FF5E14] to-[#E44E08] shadow-lg shadow-[#FF5E14]/30"
              >
                <PhoneCall className="w-4 h-4" />
                Solicitar Orçamento no WhatsApp
              </a>

              <p className="text-xs text-center text-slate-400 mt-1 font-mono">
                Santos-SP · (13) 99189-1387
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
