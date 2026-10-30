import { ShieldCheck, Handshake, Compass, Trophy, CheckCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../config';

const DIFFERENTIALS_DATA = [
  {
    title: 'Promessa de Segurança',
    badge: 'Risco Zero',
    description:
      'Monitoramento 24h via satélite, telemetria em tempo real, rotas seguras pré-aprovadas e apólices completas de seguro RCTR-C e RCF-DC com gerenciadoras de risco homologadas pelos maiores embarcadores.',
    icon: ShieldCheck,
    points: ['Rastreamento via satélite ininterrupto', 'Plano de Gerenciamento de Risco (PGR)', 'Seguro total de carga e casco'],
  },
  {
    title: 'Parceria e Confiança',
    badge: 'Lado a Lado',
    description:
      'Honramos nosso slogan: "Juntos somos mais fortes!". Construímos relações transparentes e de longo prazo com clientes industriais, tradings e operadores, com canal direto com a diretoria sem burocracia.',
    icon: Handshake,
    points: ['Atendimento direto e sem robôs impessoais', 'Transparência total nos status de entrega', 'Compromisso com prazos de free time'],
  },
  {
    title: 'Planejamento de Operações',
    badge: 'Logística de Precisão',
    description:
      'Controle milimétrico de janelas de atracação, agendamentos prévios em terminais portuários e recintos aduaneiros (BTP, Santos Brasil, DP World), prevenindo custos com demurrage e estadia de motorista.',
    icon: Compass,
    points: ['Sincronia com janelas portuárias', 'Eliminação de sobreestadias (Demurrage)', 'Otimização de rotas e retorno de vazios'],
  },
  {
    title: 'Foco em Resultados',
    badge: 'Alta Performance',
    description:
      'Frotas modernas, cavalos mecânicos de alta potência e motoristas qualificados garantem índice de pontualidade superior a 99.4%, assegurando a continuidade ininterrupta da cadeia de suprimentos da sua indústria.',
    icon: Trophy,
    points: ['Índice de pontualidade de 99.4%', 'Frota moderna e manutenções preventivas', 'Redução comprovada de gargalos'],
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24 bg-[#0B0F14] border-t border-slate-800/80">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#FF5E14]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF5E14] uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF5E14]" />
              Diferenciais Competitivos
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-['Barlow_Condensed'] text-white tracking-tight">
              Por que Escolher a Iron Road?
            </h2>
            <p className="mt-3 text-slate-300 text-base sm:text-lg font-sans">
              No transporte pesado e logística portuária, cada minuto conta. Criamos uma estrutura desenhada para proteger sua mercadoria e cumprir prazos inegociáveis.
            </p>
          </div>

          <a
            href={getWhatsAppLink('Olá! Gostaria de entender mais sobre as vantagens e diferenciais da Iron Road Transporte.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-[#FF5E14] border border-slate-700 hover:border-amber-400/50 transition-all duration-300 shadow-md group shrink-0"
          >
            <span>Falar com Especialista</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS_DATA.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative rounded-2xl glass-metal-card p-6 flex flex-col justify-between border border-slate-800 hover:border-[#FF5E14]/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_-5px_rgba(255,94,20,0.25)]"
              >
                <div>
                  {/* Card Index & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[#FF5E14] group-hover:bg-[#FF5E14] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-slate-700 group-hover:text-slate-500 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold uppercase font-['Barlow_Condensed'] text-white group-hover:text-[#FFA366] transition-colors mb-2">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-5">
                    {card.description}
                  </p>
                </div>

                {/* Micro Points */}
                <div className="border-t border-slate-800/80 pt-4 space-y-2">
                  {card.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                      <CheckCircle className="w-3.5 h-3.5 text-[#FF5E14] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
