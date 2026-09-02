import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Check, X, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsCookies, setAnalyticsCookies] = useState(true);
  const [marketingCookies, setMarketingCookies] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('4xml_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      '4xml_cookie_consent',
      JSON.stringify({ necessary: true, analytics: true, marketing: true, timestamp: new Date().toISOString() })
    );
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem(
      '4xml_cookie_consent',
      JSON.stringify({
        necessary: true,
        analytics: analyticsCookies,
        marketing: marketingCookies,
        timestamp: new Date().toISOString()
      })
    );
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem(
      '4xml_cookie_consent',
      JSON.stringify({ necessary: true, analytics: false, marketing: false, timestamp: new Date().toISOString() })
    );
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md md:max-w-lg z-40 bg-white/95 dark:bg-[#0B1E32]/95 backdrop-blur-md text-slate-800 dark:text-slate-200 p-5 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 transition-colors"
        role="region"
        aria-label="Consentimento de Cookies"
      >
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-50 dark:bg-blue-950/60 text-[#0066CC] dark:text-[#00D2FF] rounded-xl shrink-0">
            <Shield className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white font-heading">
              Privacidade e Uso de Cookies (LGPD)
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
              Utilizamos cookies essenciais para o funcionamento seguro da plataforma e tecnologias de análise para aprimorar sua experiência corporativa. Consulte nossa{' '}
              <Link to="/politica-de-cookies" className="text-[#0066CC] dark:text-[#00D2FF] underline hover:text-[#0052A3]">
                Política de Cookies
              </Link>{' '}
              e{' '}
              <Link to="/politica-de-privacidade" className="text-[#0066CC] dark:text-[#00D2FF] underline hover:text-[#0052A3]">
                Política de Privacidade
              </Link>.
            </p>

            {showPreferences && (
              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Cookies Necessários</span>
                  <span className="text-[11px] text-slate-400 font-medium">Sempre Ativos</span>
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="cookie-analytics" className="text-slate-700 dark:text-slate-300 cursor-pointer">
                    Métricas e Desempenho
                  </label>
                  <input
                    id="cookie-analytics"
                    type="checkbox"
                    checked={analyticsCookies}
                    onChange={(e) => setAnalyticsCookies(e.target.checked)}
                    className="rounded border-slate-300 text-[#0066CC] focus:ring-accent"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="cookie-marketing" className="text-slate-700 dark:text-slate-300 cursor-pointer">
                    Comunicação & Conversão
                  </label>
                  <input
                    id="cookie-marketing"
                    type="checkbox"
                    checked={marketingCookies}
                    onChange={(e) => setMarketingCookies(e.target.checked)}
                    className="rounded border-slate-300 text-[#0066CC] focus:ring-accent"
                  />
                </div>
              </div>
            )}

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <button
                onClick={handleAcceptAll}
                className="bg-[#0066CC] hover:bg-[#0052A3] text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                Aceitar Todos
              </button>
              {showPreferences ? (
                <button
                  onClick={handleAcceptSelected}
                  className="bg-slate-800 hover:bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer"
                >
                  Salvar Preferências
                </button>
              ) : (
                <button
                  onClick={() => setShowPreferences(true)}
                  className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Settings className="w-3 h-3" />
                  <span>Personalizar</span>
                </button>
              )}
              <button
                onClick={handleRejectNonEssential}
                className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 px-2 py-1.5 text-xs font-medium cursor-pointer"
              >
                Apenas Essenciais
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
