import { MapPin, Phone, Mail, Instagram, ArrowUp, Shield } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppLink } from '../config';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="relative bg-[#06080B] text-slate-300 border-t border-slate-800 pt-16 pb-12 overflow-hidden">
      {/* Subtle top border highlight */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5E14]/70 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1 & 2: Brand, Logo & Slogan */}
          <div className="lg:col-span-2 space-y-5">
            {/* Logo oficial em destaque grande com fundo transparente e brilho metálico */}
            <div className="relative inline-block">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="Iron Road Transporte"
                className="h-16 sm:h-20 w-auto object-contain filter drop-shadow-[0_4px_16px_rgba(255,94,20,0.35)]"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-sm text-slate-400 font-sans leading-relaxed max-w-sm">
              Especialistas em logística portuária em Santos-SP e transporte rodoviário de cargas secas e contêineres em todo o Brasil.
            </p>

            <div className="inline-block px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-xs font-bold text-[#FFA366] font-mono tracking-wider uppercase">
                "{COMPANY_INFO.slogan}"
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-pink-600/20 hover:text-pink-400 text-slate-300 border border-slate-800 transition-colors"
                aria-label="Instagram Iron Road"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-emerald-600/20 hover:text-emerald-400 text-slate-300 border border-slate-800 transition-colors"
                aria-label="WhatsApp Iron Road"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.004.577 1.764.846 2.806.847h.005c3.182 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.768-5.773-5.77zm3.407 8.169c-.147.414-.732.764-1.024.789-.283.023-.627.135-2.02-.442-1.637-.677-2.695-2.34-2.775-2.449-.082-.108-.667-.887-.667-1.689 0-.802.42-1.196.57-1.356.15-.16.326-.2.435-.2.11 0 .22.001.315.006.101.006.236-.039.37.284.14.336.478 1.164.52 1.25.042.086.07.187.013.301-.057.114-.086.185-.171.285-.086.1-.18.223-.257.3-.086.085-.176.178-.076.35.1.171.444.733.953 1.187.656.585 1.21.766 1.382.852.172.086.273.072.375-.043.102-.115.437-.508.554-.682.117-.174.234-.145.394-.086.16.058 1.016.479 1.191.566.175.086.292.13.335.204.043.074.043.43-.104.844z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.527 3.66 1.443 5.174L2 22l5.004-1.312C8.423 21.517 10.153 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.639 0-3.155-.494-4.423-1.34l-.317-.212-2.977.781.795-2.902-.232-.369C3.926 14.869 3.4 13.488 3.4 12c0-4.742 3.858-8.6 8.6-8.6 4.741 0 8.6 3.858 8.6 8.6 0 4.742-3.859 8.6-8.6 8.6z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 3: Links Rápidos */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#FF5E14] uppercase mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#inicio" className="text-slate-400 hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="text-slate-400 hover:text-white transition-colors">Serviços Portuários</a>
              </li>
              <li>
                <a href="#sobre" className="text-slate-400 hover:text-white transition-colors">Sobre a Empresa</a>
              </li>
              <li>
                <a href="#diferenciais" className="text-slate-400 hover:text-white transition-colors">Diferenciais e Segurança</a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink('Olá! Gostaria de falar com o plantão de atendimento da Iron Road.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 font-semibold transition-colors flex items-center gap-1"
                >
                  Cotação WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Serviços */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#FF5E14] uppercase mb-4">
              Serviços
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Transporte de Contêineres (20' / 40')</li>
              <li>Contêineres Reefer Refrigerados</li>
              <li>Cargas Secas e Fracionadas</li>
              <li>Operações nos Terminais de Santos</li>
              <li>REDEX e Recintos Alfandegados</li>
              <li>Rotas Rodoviárias Nacionais</li>
            </ul>
          </div>

          {/* Col 5: Contato Direto */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#FF5E14] uppercase mb-4">
              Contato Oficial
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#FF5E14] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.location}</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-[#FF5E14] shrink-0" />
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-mono transition-colors"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-[#FF5E14] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white font-mono break-all transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <span className="text-[11px] text-slate-500 font-mono block">
                  Domínio Oficial:
                </span>
                <span className="text-xs text-slate-300 font-mono">
                  {COMPANY_INFO.domain}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Mandatory Copyright Text */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-sans">
          <p className="text-center sm:text-left">
            © 2025 Iron Road Transporte – Juntos somos mais fortes!
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-500 font-mono">
              <Shield className="w-3.5 h-3.5 text-[#FF5E14]" />
              CNPJ Ativo · RCTR-C / RCF-DC
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-[#FF5E14] text-slate-400 hover:text-white border border-slate-800 transition-all"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
