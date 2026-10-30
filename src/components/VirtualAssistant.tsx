import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, ArrowRight, MessageSquare, Sparkles, CheckCheck } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppLink } from '../config';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  actionUrl?: string;
  actionLabel?: string;
}

const QUICK_OPTIONS = [
  {
    id: 'cnt',
    label: 'Quero cotação de contêiner',
    response: 'Perfeito! Atendemos contêineres de 20 pés, 40 pés e Reefer em todos os terminais do Porto de Santos e retroportuários. Vou te transferir agora para nossa equipe de cotações expressas.',
    whatsappMsg: 'Olá, vim pelo assistente virtual do site e quero uma cotação para transporte de contêiner (20/40/Reefer).',
  },
  {
    id: 'rod',
    label: 'Transporte rodoviário',
    response: 'Excelente! Operamos com cargas secas, paletizadas e projetos especiais com carretas Sider, Baú e Graneleira com rastreamento 24h em todo o Brasil.',
    whatsappMsg: 'Olá, vim pelo assistente do site e preciso de cotação para transporte rodoviário de cargas.',
  },
  {
    id: 'santos',
    label: 'Logística em Santos',
    response: 'Estamos baseados estrategicamente em Santos-SP! Cuidamos de remoção de caixas, devolução de vazios, agendamento em BTP, Santos Brasil, DP World e REDEX.',
    whatsappMsg: 'Olá! Vim pelo assistente do site e preciso de suporte com logística portuária em Santos.',
  },
  {
    id: 'humano',
    label: 'Falar com um atendente',
    response: 'Com certeza! Nosso plantão de atendimento via WhatsApp está disponível agora para te atender sem burocracia.',
    whatsappMsg: 'Olá! Gostaria de falar diretamente com um atendente da Iron Road Transporte.',
  },
];

export default function VirtualAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Olá! Sou o assistente da Iron Road. Como posso te ajudar?',
      time: 'Agora',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);

  const handleSelectQuickOption = (option: typeof QUICK_OPTIONS[0]) => {
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: option.label,
      time: timeNow,
    };

    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      const botReply: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: option.response,
        time: timeNow,
        actionUrl: getWhatsAppLink(option.whatsappMsg),
        actionLabel: 'Continuar no WhatsApp',
      };
      setMessages((prev) => [...prev, botReply]);

      // Automatically open WhatsApp in new tab after 1.2s for frictionless experience
      setTimeout(() => {
        window.open(getWhatsAppLink(option.whatsappMsg), '_blank');
      }, 1200);
    }, 450);
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userText = inputValue;
    setInputValue('');

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userText,
      time: timeNow,
    };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      const botReply: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: `Entendido! Encaminhei sua dúvida: "${userText}" para nosso especialista de plantão no WhatsApp.`,
        time: timeNow,
        actionUrl: getWhatsAppLink(`Olá! Vim pelo chat do site com a seguinte mensagem: "${userText}"`),
        actionLabel: 'Abrir Conversa no WhatsApp',
      };
      setMessages((prev) => [...prev, botReply]);

      setTimeout(() => {
        window.open(getWhatsAppLink(`Olá! Vim pelo chat do site com a seguinte mensagem: "${userText}"`), '_blank');
      }, 1200);
    }, 500);
  };

  return (
    <aside aria-label="Assistente Virtual" className="fixed bottom-6 left-6 z-50 pointer-events-auto">
      {/* Floating Trigger Bubble */}
      {!isOpen && (
        <div className="relative">
          <button
            onClick={() => setIsOpen(true)}
            className="group relative w-15 h-15 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#151C26] via-[#1E293B] to-[#2E3C51] border-2 border-[#FF5E14] text-white shadow-[0_4px_25px_rgba(255,94,20,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 overflow-visible"
            aria-label="Abrir Assistente Virtual Iron Road"
          >
            {/* Human Specialist AI Photo Avatar */}
            <div className="w-full h-full rounded-full overflow-hidden p-0.5">
              <img
                src="/src/assets/images/attendant_avatar_1793377732443.jpg"
                alt="Atendente Iron Road"
                className="w-full h-full object-cover object-center rounded-full group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Online Green Indicator Dot */}
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#080B0E] shadow-sm" />

            {/* Notification Badge */}
            {hasUnread && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5E14] opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#FF5E14] border-2 border-[#080B0E]" />
              </span>
            )}
          </button>

          {/* Quick Speech Bubble Preview */}
          {hasUnread && (
            <div
              onClick={() => setIsOpen(true)}
              className="absolute left-full ml-3 bottom-1 bg-slate-900/95 text-xs text-white py-2 px-3.5 rounded-xl border border-slate-700/80 shadow-xl backdrop-blur-md whitespace-nowrap cursor-pointer hover:border-[#FF5E14] transition-colors"
            >
              <div className="flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5E14]" />
                Atendimento Iron Road
              </div>
              <p className="text-[11px] text-slate-300 mt-0.5">Olá! Precisa de cotação expressa?</p>
              <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45 border-b border-l border-slate-700/80" />
            </div>
          )}
        </div>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[520px] rounded-2xl glass-metal border border-slate-700 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#121822] to-[#1E2633] px-4 py-3.5 border-b border-slate-700/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full border-2 border-[#FF5E14] overflow-hidden shrink-0 shadow-md">
                <img
                  src="/src/assets/images/attendant_avatar_1793377732443.jpg"
                  alt="Atendente Virtual Iron Road"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-[#080B0E]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white uppercase font-['Barlow_Condensed']">
                  Mariana · Atendimento Iron Road
                </h3>
                <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  Online agora · Plantão Santos-SP
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Fechar assistente"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <img
                    src="/src/assets/images/attendant_avatar_1793377732443.jpg"
                    alt="Mariana"
                    className="w-7 h-7 rounded-full object-cover shrink-0 border border-[#FF5E14] mt-1"
                    referrerPolicy="no-referrer"
                  />
                )}

                <div className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-[#FF5E14] to-[#E44E08] text-white rounded-br-none shadow-md shadow-[#FF5E14]/25'
                        : 'bg-slate-800/90 text-slate-100 rounded-bl-none border border-slate-700/60 shadow-md'
                    }`}
                  >
                    <p>{msg.text}</p>

                    {/* Contextual Action Button if bot gives a link */}
                    {msg.actionUrl && (
                      <a
                        href={msg.actionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] uppercase tracking-wider transition-colors shadow-sm"
                      >
                        <span>{msg.actionLabel || 'Ir para o WhatsApp'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <div className="flex items-center gap-1 mt-1 text-[10px] text-slate-400 font-mono px-1">
                    <span>{msg.time}</span>
                    {msg.sender === 'user' && <CheckCheck className="w-3 h-3 text-[#FF5E14]" />}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Options Section (Mandatory 4 options) */}
          <div className="p-3 bg-slate-900/95 border-t border-slate-800/80 space-y-2">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
              Perguntas Frequentes:
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {QUICK_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelectQuickOption(opt)}
                  className="text-left px-2.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700/80 text-[11px] text-slate-300 font-medium transition-all active:scale-95 leading-tight cursor-pointer"
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <form onSubmit={handleCustomSend} className="flex items-center gap-2 pt-1">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ou digite sua mensagem..."
                className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-[#FF5E14]"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-[#FF5E14] hover:bg-[#E44E08] text-white transition-colors cursor-pointer"
                aria-label="Enviar mensagem"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      )}
    </aside>
  );
}
