import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Search, MessageSquare, Phone } from 'lucide-react';
import { FAQ_ITEMS } from '../../data/mockData';

export const FaqSection: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Geral', 'Integração Protheus', 'Funcionalidades', 'Implantação & Segurança'];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'Todos' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-[#07121E] relative transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] dark:text-[#00D2FF] font-mono">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading">
            Perguntas frequentes sobre o 4XML.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-body max-w-2xl mx-auto">
            Respostas diretas sobre compatibilidade com Protheus, busca na SEFAZ, licenciamento e segurança.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-4 mb-10">
          <div className="relative max-w-lg mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar pergunta ou termo fiscal..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-[#0B1E32] border border-slate-200 dark:border-slate-800 rounded-xl text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:bg-white dark:focus:bg-[#0E253E] focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0A2540] dark:bg-[#0066CC] text-white'
                    : 'bg-slate-100 dark:bg-[#0B1E32] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'border-blue-300 dark:border-[#0066CC] bg-blue-50/20 dark:bg-[#0B1E32]/90 shadow-xs' 
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1E32] hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC] cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="text-base font-bold text-slate-900 dark:text-white font-heading">
                      {faq.question}
                    </span>
                    <span
                      className={`p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 bg-[#0066CC] text-white dark:bg-[#0066CC] dark:text-white' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-6 sm:px-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3 font-body">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-slate-50 dark:bg-[#0B1E32] rounded-2xl border border-slate-200 dark:border-slate-800">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Nenhuma dúvida encontrada para o termo pesquisado.
              </p>
            </div>
          )}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-14 p-6 sm:p-8 bg-[#0A2540] dark:bg-[#091B2F] border border-transparent dark:border-slate-800 text-white rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold font-heading">Sua dúvida é sobre um processo específico do seu Protheus?</h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Nossa equipe de especialistas tributários e consultores Protheus está pronta para atender você.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/5511941883913?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20espec%C3%ADfica%20sobre%20a%20integra%C3%A7%C3%A3o%20do%204XML%20com%20o%20Protheus."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp Direto</span>
            </a>

            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 bg-[#0066CC] hover:bg-[#0052A3] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Formulário de Contato</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
