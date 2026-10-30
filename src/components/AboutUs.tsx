import { CheckCircle2, MapPin, Award, Users, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppLink } from '../config';

export default function AboutUs() {
  return (
    <section id="sobre" className="relative py-24 bg-[#080B0E] overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#FF5E14]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Media with Metallic Glow & Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              <img
                src="/src/assets/images/heavy_truck_highway_1793377245319.jpg"
                alt="Frota de Transporte Rodoviário Iron Road"
                className="w-full h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.9] contrast-[1.1]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B0E] via-transparent to-transparent opacity-80" />

              {/* Floating Metallic Logo Overlay */}
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-[#080B0E]/85 border border-slate-700/80 backdrop-blur-md">
                <img
                  src={COMPANY_INFO.logoUrl}
                  alt="Logo Iron Road Transporte"
                  className="h-10 w-auto object-contain drop-shadow-[0_2px_8px_rgba(255,94,20,0.5)]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Bottom Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono uppercase text-[#FF5E14] font-bold">Base Operacional</p>
                  <p className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#FF5E14]" />
                    Santos - SP | Logística Portuária
                  </p>
                </div>
                <div className="text-right border-l border-slate-800 pl-4">
                  <p className="text-xs font-mono uppercase text-slate-400">Atuação</p>
                  <p className="text-sm font-bold text-white">Nacional</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Copy */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF5E14] uppercase mb-3">
              <Users className="w-4 h-4" />
              Sobre a Iron Road Transporte
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-['Barlow_Condensed'] text-white tracking-tight leading-tight">
              Força, Precisão e Compromisso na Rodovia e no Porto
            </h2>

            {/* Slogan Banner */}
            <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-[#FF5E14]/15 via-slate-900 to-transparent border-l-2 border-[#FF5E14] inline-block">
              <span className="text-base font-bold text-[#FFA366] tracking-wide uppercase font-['Barlow_Condensed']">
                "{COMPANY_INFO.slogan}"
              </span>
            </div>

            <div className="mt-6 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                Com sede estratégica em <strong className="text-white">Santos-SP</strong> — o maior complexo portuário do hemisfério sul —, a <strong className="text-white">IRON ROAD TRANSPORTE</strong> nasceu com a missão de redefinir o transporte rodoviário de cargas secas e contêineres com tecnologia, pontualidade cirúrgica e atendimento de alta proximidade.
              </p>
              <p>
                Entendemos profundamente os desafios operacionais do comércio exterior brasileiro: janelas restritas de atracação de navios, prazos críticos de devolução de vazios para evitar custos exorbitantes de <em className="text-orange-300 not-italic font-semibold">demurrage</em>, além da necessidade de um fluxo rodoviário contínuo que conecte a ponta marítima aos maiores polos fabris e do agronegócio nacional.
              </p>
              <p>
                Nossos equipamentos de tração pesada, semirreboques porta-contêineres e equipe operacional especializada oferecem suporte completo desde a emissão de DTA e DI até a entrega pontual no destino final.
              </p>
            </div>

            {/* Key Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF5E14] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase font-['Barlow_Condensed']">Frota Rastreamento 24h</h4>
                  <p className="text-xs text-slate-400 mt-1">Tecnologia satelital com redundância e bloqueio imediato.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <Award className="w-5 h-5 text-[#FF5E14] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase font-['Barlow_Condensed']">Expertise Portuária</h4>
                  <p className="text-xs text-slate-400 mt-1">Livre trânsito e agendamento otimizado em todos os terminais.</p>
                </div>
              </div>
            </div>

            {/* Action Direct */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppLink('Olá! Gostaria de falar diretamente com a diretoria/atendimento da Iron Road.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5E14] to-[#E44E08] hover:brightness-110 shadow-lg shadow-[#FF5E14]/30 transition-all active:scale-95"
              >
                <span>Falar com Nossa Equipe</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-xs sm:text-sm text-slate-400 hover:text-white font-mono transition-colors underline underline-offset-4"
              >
                {COMPANY_INFO.email}
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
