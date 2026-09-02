import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Eye, 
  Layers, 
  ExternalLink 
} from 'lucide-react';
import { SYSTEM_SCREENS } from '../../data/mockData';
import { SystemScreen } from '../../types';

export const SystemShowcase: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [modalScreen, setModalScreen] = useState<SystemScreen | null>(null);

  const currentScreen = SYSTEM_SCREENS[activeScreenIndex];

  const handleNext = useCallback(() => {
    setActiveScreenIndex((prev) => (prev + 1) % SYSTEM_SCREENS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveScreenIndex((prev) => (prev - 1 + SYSTEM_SCREENS.length) % SYSTEM_SCREENS.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalScreen) {
        if (e.key === 'Escape') setModalScreen(null);
      } else {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalScreen, handleNext, handlePrev]);

  return (
    <section id="sistema" className="py-24 bg-[#0A2540] text-white relative overflow-hidden">
      {/* Background glow and subtle grids */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#0066CC]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00D2FF] font-mono">
            Interface & Telas do Sistema
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Veja o 4XML em operação.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-body">
            Navegue pelas telas oficiais da plataforma e veja como os dados da SEFAZ são apresentados com clareza e conectados ao Protheus.
          </p>
        </div>

        {/* Category Pills Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {SYSTEM_SCREENS.map((screen, idx) => {
            const isActive = idx === activeScreenIndex;
            return (
              <button
                key={screen.id}
                onClick={() => setActiveScreenIndex(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#00D2FF] text-[#0A2540] border-[#00D2FF] shadow-lg shadow-cyan-500/20'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {screen.category}
              </button>
            );
          })}
        </div>

        {/* Active Screen Showcase Card */}
        <div className="bg-[#0D2D4D] rounded-3xl border border-white/15 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Image & Interactive Viewer */}
            <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-xl">
              <div className="aspect-video sm:aspect-16/10 relative overflow-hidden flex items-center justify-center bg-black/40">
                <img
                  src={currentScreen.image}
                  alt={currentScreen.title}
                  className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-102"
                />
                
                {/* Overlay Zoom Action */}
                <button
                  onClick={() => setModalScreen(currentScreen)}
                  className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white text-sm font-semibold backdrop-blur-xs cursor-pointer focus:opacity-100"
                  aria-label={`Ampliar captura: ${currentScreen.title}`}
                >
                  <div className="bg-[#0066CC] hover:bg-[#0052A3] text-white px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                    <span>Ampliar Visualização</span>
                  </div>
                </button>
              </div>

              {/* Navigation Arrows on Image */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 z-10">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-white border border-white/20 backdrop-blur-md transition-colors"
                  aria-label="Tela anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono px-2 py-1 bg-slate-900/80 rounded border border-white/10 text-slate-300">
                  0{activeScreenIndex + 1} / 0{SYSTEM_SCREENS.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-white border border-white/20 backdrop-blur-md transition-colors"
                  aria-label="Próxima tela"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Description & Technical Highlights */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono text-[#00D2FF] font-semibold tracking-wider uppercase">
                  {currentScreen.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 font-heading">
                  {currentScreen.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
                {currentScreen.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Recursos em Destaque:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentScreen.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-white/10">
                <button
                  onClick={onContactClick}
                  className="inline-flex items-center gap-2 bg-[#0066CC] hover:bg-[#0052A3] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md"
                >
                  <span>Agendar demonstração guiada</span>
                </button>
                <button
                  onClick={() => setModalScreen(currentScreen)}
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-300 hover:text-white underline underline-offset-4"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Ver em tela cheia</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {modalScreen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0A2540] border border-white/20 rounded-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-[#00D2FF] uppercase font-bold">
                    {modalScreen.category}
                  </span>
                  <h3 id="modal-title" className="text-lg sm:text-xl font-bold text-white">
                    {modalScreen.title}
                  </h3>
                </div>
                <button
                  onClick={() => setModalScreen(null)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Fechar visualizador"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Body */}
              <div className="p-4 sm:p-6 flex-1 overflow-auto flex items-center justify-center bg-slate-950/60">
                <img
                  src={modalScreen.image}
                  alt={modalScreen.title}
                  className="max-h-[65vh] w-auto object-contain rounded-lg shadow-lg border border-white/10"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 border-t border-white/10 bg-[#071A2D] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
                <p>{modalScreen.description}</p>
                <button
                  onClick={() => {
                    setModalScreen(null);
                    onContactClick();
                  }}
                  className="shrink-0 bg-[#0066CC] hover:bg-[#0052A3] text-white px-4 py-2 rounded-lg font-semibold"
                >
                  Solicitar demonstração desta tela
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
