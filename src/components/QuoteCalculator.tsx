import { useState } from 'react';
import { Calculator, Send, Truck, Container, Snowflake, Package, Shield, Sparkles } from 'lucide-react';
import { getWhatsAppLink } from '../config';

const MODALIDADES = [
  { id: 'cnt20', label: "Contêiner 20' Dry", icon: Container, desc: 'Padrão seco até 28 toneladas' },
  { id: 'cnt40', label: "Contêiner 40' Dry / HC", icon: Container, desc: 'Volume ampliado 67–76m³' },
  { id: 'reefer', label: "Contêiner Reefer", icon: Snowflake, desc: 'Cargas refrigeradas e congeladas' },
  { id: 'seca', label: "Carga Seca & Geral", icon: Truck, desc: 'Carreta sider, baú ou aberta' },
  { id: 'dedicado', label: "Transporte Dedicado", icon: Package, desc: 'Operação exclusiva e expressa' },
];

const ORIGENS = [
  'Porto de Santos - Margem Direita (BTP / Santos Brasil / Ecoporto)',
  'Porto de Santos - Margem Esquerda (DP World / Guarujá)',
  'Recinto Alfandegado / REDEX / Deicmar / Marimex',
  'São Paulo Capital / Grande SP / ABCD',
  'Interior do Estado de SP (Campinas, Sorocaba, Ribeirão)',
  'Outro Ponto / Estado',
];

const DESTINOS = [
  'São Paulo Capital / Grande SP / ABCD',
  'Interior de São Paulo (Campinas, Ribeirão Preto, Piracicaba, etc.)',
  'Região Sul (Paraná, Santa Catarina, Rio Grande do Sul)',
  'Região Sudeste (Minas Gerais, Rio de Janeiro, Espírito Santo)',
  'Região Centro-Oeste (Goiás, Mato Grosso, MS, DF)',
  'Região Nordeste / Norte do Brasil',
];

export default function QuoteCalculator() {
  const [modalidade, setModalidade] = useState(MODALIDADES[0].label);
  const [origem, setOrigem] = useState(ORIGENS[0]);
  const [destino, setDestino] = useState(DESTINOS[0]);
  const [pesoCarga, setPesoCarga] = useState('Até 25 Toneladas');
  const [observacoes, setObservacoes] = useState('');

  const handleSendQuote = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `🚛 *SOLICITAÇÃO DE COTAÇÃO - IRON ROAD TRANSPORTE*
---------------------------------------
📦 *Modalidade:* ${modalidade}
📍 *Origem:* ${origem}
🏁 *Destino:* ${destino}
⚖️ *Peso Estimado:* ${pesoCarga}
${observacoes ? `📝 *Observações:* ${observacoes}\n` : ''}---------------------------------------
_Olá, preenchi os dados no site e aguardo o retorno com os valores e disponibilidade de frota._`;

    window.open(getWhatsAppLink(text), '_blank');
  };

  return (
    <section className="relative py-16 bg-[#0B0F14] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative glass-metal-card rounded-2xl p-6 sm:p-10 border border-slate-700/60 shadow-2xl overflow-hidden">
          
          {/* Decorative Corner Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5E14]/10 rounded-full blur-[90px] pointer-events-none" />

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF5E14] uppercase mb-2">
                <Calculator className="w-4 h-4" />
                Cotação Rápida & Express
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-['Barlow_Condensed'] text-white tracking-tight">
                Simule seu Frete em Segundos
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Selecione os parâmetros da sua carga e receba o valor com agilidade pelo WhatsApp da nossa central.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-300 font-mono bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-700/50">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resposta média em até 5 minutos</span>
            </div>
          </div>

          <form onSubmit={handleSendQuote} className="space-y-6">
            {/* Modalidade Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                1. Tipo de Operação / Contêiner:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {MODALIDADES.map((m) => {
                  const Icon = m.icon;
                  const isSelected = modalidade === m.label;
                  return (
                    <button
                      type="button"
                      key={m.id}
                      onClick={() => setModalidade(m.label)}
                      className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#FF5E14]/15 border-[#FF5E14] shadow-[0_0_15px_rgba(255,94,20,0.25)]'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1.5">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-[#FF5E14]' : 'text-slate-400'}`} />
                        {isSelected && <Sparkles className="w-3 h-3 text-[#FF5E14]" />}
                      </div>
                      <span className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                        {m.label}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                        {m.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Origem e Destino */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                  2. Local de Origem / Retirada:
                </label>
                <select
                  value={origem}
                  onChange={(e) => setOrigem(e.target.value)}
                  className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-[#FF5E14] transition-colors"
                >
                  {ORIGENS.map((o) => (
                    <option key={o} value={o} className="bg-slate-900 text-slate-200">
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                  3. Local de Destino / Entrega:
                </label>
                <select
                  value={destino}
                  onChange={(e) => setDestino(e.target.value)}
                  className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-[#FF5E14] transition-colors"
                >
                  {DESTINOS.map((d) => (
                    <option key={d} value={d} className="bg-slate-900 text-slate-200">
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Peso e Detalhes Opcionais */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                  4. Faixa de Peso:
                </label>
                <select
                  value={pesoCarga}
                  onChange={(e) => setPesoCarga(e.target.value)}
                  className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-[#FF5E14] transition-colors"
                >
                  <option value="Até 10 Toneladas">Até 10 Toneladas</option>
                  <option value="10 a 20 Toneladas">10 a 20 Toneladas</option>
                  <option value="20 a 28 Toneladas (Limite Balança)">20 a 28 Toneladas (Limite Balança)</option>
                  <option value="Carga Pesada / Superior a 28T">Carga Pesada / Superior a 28T</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                  5. Detalhes Adicionais (Prazo, Terminal, Mercadoria):
                </label>
                <input
                  type="text"
                  value={observacoes}
                  onChange={(e) => setObservacoes(e.target.value)}
                  placeholder="Ex: Carga química não perigosa, urgência de 24h, agendamento BTP..."
                  className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#FF5E14] transition-colors"
                />
              </div>
            </div>

            {/* Action Submit Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
              <span className="text-xs text-slate-400 font-mono">
                🔒 Seus dados serão enviados de forma segura e direta via WhatsApp oficial da Iron Road.
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase text-white bg-gradient-to-r from-[#FF5E14] via-[#FF7A38] to-[#FF5E14] hover:brightness-110 shadow-[0_0_25px_rgba(255,94,20,0.4)] active:scale-95 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Gerar Cotação Direta no WhatsApp</span>
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}
