import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = 'https://wa.me/5511941883913?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20demonstra%C3%A7%C3%A3o%20do%204XML.';

  const handleWhatsAppClick = () => {
    // Analytics tracking trigger simulation
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'generate_lead', {
        event_category: 'contact',
        event_label: 'whatsapp_floating_button'
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {/* Tooltip message */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs py-2 px-3.5 rounded-xl shadow-lg border border-slate-200/90 relative max-w-xs"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <div>
              <p className="font-semibold text-slate-900 leading-tight">Especialista 4XML Online</p>
              <p className="text-[11px] text-slate-500">Tire dúvidas sobre integração Protheus</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-slate-400 hover:text-slate-600 p-0.5 ml-1"
              aria-label="Fechar balão do WhatsApp"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            {/* Arrow */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-slate-200 transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        id="whatsapp-floating-button"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-400/40 relative group"
        aria-label="Conversar com um especialista do 4XML pelo WhatsApp"
      >
        <span className="sr-only">Fale conosco via WhatsApp: +55 (11) 94188-3913</span>
        <MessageCircle className="w-7 h-7 fill-white" />
        
        {/* Subtle Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none group-hover:hidden" />
      </motion.a>
    </div>
  );
};
