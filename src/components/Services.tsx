import { useState } from 'react';
import { Container, Truck, Anchor, Warehouse, Globe2, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { getWhatsAppLink } from '../config';

interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  icon: typeof Container;
  highlights: string[];
  ctaMessage: string;
  image?: string;
  span?: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'conteineres',
    title: 'Transporte de Contêineres',
    tag: '20 Pés · 40 Pés · Reefer',
    description:
      'Retirada e devolução ágil de contêineres cheios ou vazios em todos os terminais do Porto de Santos e retroportuários. Especialistas em carga refrigerada (Reefer), High Cube, Dry Box e Open Top com geradores próprios (Genset).',
    icon: Container,
    highlights: [
      'Contêineres Dry 20 e 40 pés',
      'Contêineres Reefer com Genset acoplado',
      'Atendimento rigoroso a janelas de Free Time',
      'Veículos trucados e cavalos mecânicos pesados',
    ],
    ctaMessage: 'Olá, gostaria de uma cotação para Transporte de Contêineres (20/40/Reefer).',
    image: '/src/assets/images/fleet_container_terminal_1793377245383.jpg',
    span: 'lg:col-span-2',
  },
  {
    id: 'cargas-secas',
    title: 'Transporte Rodoviário de Cargas Secas',
    tag: 'Sider · Baú · Grade Baixa',
    description:
      'Soluções completas para movimentação de cargas paletizadas, manufaturados, matérias-primas e insumos industriais com segurança máxima, pontualidade e monitoramento via satélite 24h.',
    icon: Truck,
    highlights: [
      'Carretas Sider, Baú e Graneleiras',
      'Cargas completas (lotação) e dedicadas',
      'Rastreamento com telemetria avançada',
      'Apólices RCTR-C e RCF-DC vigentes',
    ],
    ctaMessage: 'Olá, preciso de cotação para Transporte Rodoviário de Cargas Secas e Diversas.',
    span: 'lg:col-span-1',
  },
  {
    id: 'logistica-portuaria',
    title: 'Logística Portuária em Santos e Região',
    tag: 'Porto de Santos · Margem Direita & Esquerda',
    description:
      'Expertise profunda nos fluxos aduaneiros e operacionais de Santos. Conexão direta com armadores, despachantes aduaneiros e operadores logísticos para desembaraço rápido de importação e exportação.',
    icon: Anchor,
    highlights: [
      'Agendamentos prioritários em terminais',
      'Conexão BTP, Santos Brasil, DP World e Ecoporto',
      'Expertise aduaneira DTA, DI e trânsito simplificado',
      'Zero custo extra com demoras operacionais',
    ],
    ctaMessage: 'Olá, preciso de suporte em Logística Portuária em Santos e região.',
    span: 'lg:col-span-1',
  },
  {
    id: 'portos-depositos',
    title: 'Atendimento em Portos e Depósitos',
    tag: 'Recintos REDEX & Terminais Retroportuários',
    description:
      'Operações de estufagem, desova, transbordo e entrega técnica em armazéns gerais, depósitos alfandegados e recintos especiais (REDEX / Deicmar / Marimex / Bandeirantes).',
    icon: Warehouse,
    highlights: [
      'Cross-docking e transferência rápida',
      'Devolução de contêineres vazios no prazo',
      'Inspeções e vistorias de integridade',
      'Controle rigoroso de documentação',
    ],
    ctaMessage: 'Olá, gostaria de cotação para Atendimento em Portos, REDEX e Depósitos.',
    span: 'lg:col-span-1',
  },
  {
    id: 'operacoes-nacionais',
    title: 'Operações Nacionais em Todo o Brasil',
    tag: 'Rotas Rodoviárias Interestaduais',
    description:
      'Levamos sua carga do Porto de Santos para qualquer estado brasileiro ou coletamos em polos industriais de todo o país rumo ao porto. Rotas otimizadas e pontualidade exemplar.',
    icon: Globe2,
    highlights: [
      'Conexão com os principais polos industriais e do agro',
      'Plano de viagem com pontos de parada homologados',
      'Gerenciamento de risco rigoroso (GR)',
      'Comunicação direta em tempo real',
    ],
    ctaMessage: 'Olá, gostaria de solicitar uma cotação para Operações Nacionais de transporte.',
    span: 'lg:col-span-1',
  },
];

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="servicos" className="relative py-24 bg-[#080B0E] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF5E14]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-[#FF5E14] uppercase tracking-wider mb-4">
            <Container className="w-3.5 h-3.5" />
            Portfólio Operacional Completo
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-['Barlow_Condensed'] text-white tracking-tight">
            Nossos Serviços de Transporte
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans">
            Soluções robustas em logística portuária e transporte rodoviário pesado com padrão de excelência, tecnologia e compromisso de entrega.
          </p>
        </div>

        {/* 3D-Tilt Style Interactive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative group rounded-2xl glass-metal-card p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
                  isHovered
                    ? 'border-[#FF5E14]/70 shadow-[0_10px_35px_-5px_rgba(255,94,20,0.3)] -translate-y-1.5'
                    : 'border-slate-800 hover:border-slate-700'
                } ${service.span || ''}`}
              >
                {/* Optional Hero Card Background Photo */}
                {service.image && (
                  <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden pointer-events-none">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center opacity-15 filter brightness-75 group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F141C] via-[#0F141C]/85 to-transparent" />
                  </div>
                )}

                <div className="relative z-10">
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div
                      className={`p-3 rounded-xl border transition-colors ${
                        isHovered
                          ? 'bg-[#FF5E14] text-white border-amber-300/50 shadow-md shadow-[#FF5E14]/40'
                          : 'bg-slate-900 text-[#FF5E14] border-slate-800'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold uppercase font-['Barlow_Condensed'] text-white group-hover:text-[#FFA366] transition-colors tracking-wide">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed font-sans">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="mt-5 space-y-2 border-t border-slate-800/80 pt-4">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#FF5E14] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom WhatsApp CTA Button (Mandatory in each card) */}
                <div className="relative z-10 mt-6 pt-4 border-t border-slate-800/80">
                  <a
                    href={getWhatsAppLink(service.ctaMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all duration-200 bg-slate-900 group-hover:bg-[#FF5E14] border border-slate-700 group-hover:border-amber-300/40 group-hover:shadow-[0_0_20px_rgba(255,94,20,0.35)]"
                  >
                    <span>Cotação WhatsApp</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 font-mono flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Todas as operações são amparadas por gerenciamento de risco e seguro de carga completo RCTR-C / RCF-DC.
          </p>
        </div>

      </div>
    </section>
  );
}
