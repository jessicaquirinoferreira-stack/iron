import { Anchor, ArrowRight, ShieldCheck } from 'lucide-react';
import { getWhatsAppLink } from '../config';

const TERMINALS = [
  { name: 'BTP', full: 'Brasil Terminal Portuário', type: 'Margem Direita' },
  { name: 'Santos Brasil', full: 'Tecon Santos', type: 'Margem Esquerda' },
  { name: 'DP World', full: 'Terminal Marítimo Santos', type: 'Margem Esquerda' },
  { name: 'Ecoporto', full: 'Ecoporto Santos', type: 'Margem Direita' },
  { name: 'REDEX & Recintos', full: 'Deicmar / Marimex / Bandeirantes', type: 'Retroporto' },
];

export default function PortTerminalsBanner() {
  return (
    <section className="relative py-14 bg-[#090D12] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Title */}
          <div className="max-w-md text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#FF5E14] uppercase tracking-wider mb-1">
              <Anchor className="w-3.5 h-3.5" />
              Operação Portuária Integrada
            </div>
            <h3 className="text-xl sm:text-2xl font-bold uppercase font-['Barlow_Condensed'] text-white">
              Agendamentos e Retiradas em Todos os Terminais de Santos
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Know-how em agendamento de janelas, minimização de demurrage e cumprimento rigoroso de prazos de DTA/DI.
            </p>
          </div>

          {/* Terminal Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 w-full lg:w-auto">
            {TERMINALS.map((term) => (
              <div
                key={term.name}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#FF5E14]/50 transition-colors text-center"
              >
                <span className="block text-sm font-bold text-white font-['Barlow_Condensed'] uppercase tracking-wider">
                  {term.name}
                </span>
                <span className="text-[10px] text-slate-400 block font-mono truncate">
                  {term.type}
                </span>
              </div>
            ))}
          </div>

          {/* Quick CTA */}
          <a
            href={getWhatsAppLink('Olá! Gostaria de cotar uma remoção/entrega em terminal no Porto de Santos.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-slate-800 hover:bg-[#FF5E14] border border-slate-700 transition-all shrink-0 shadow-md group"
          >
            <span>Consultar Janelas</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
