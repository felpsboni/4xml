import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { WhatsAppFloat } from '../components/layout/WhatsAppFloat';
import { CookieConsent } from '../components/layout/CookieConsent';
import { Cookie, ChevronRight, CheckCircle2 } from 'lucide-react';

export const CookiesPolicyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#07121E] transition-colors duration-200">
      <Header />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-8">
            <Link to="/" className="hover:text-[#0066CC] dark:hover:text-[#00D2FF]">Início</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-800 dark:text-slate-200 font-semibold">Política de Cookies</span>
          </nav>

          <div className="space-y-4 pb-8 border-b border-slate-200 dark:border-slate-800">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#0066CC] dark:text-[#00D2FF] text-xs font-semibold">
              <Cookie className="w-3.5 h-3.5" />
              <span>Transparência e Gestão de Consentimento</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight">
              Política de Cookies e Tecnologias de Rastreamento
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Última atualização: 01 de setembro de 2026
            </p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed font-body mt-8 space-y-6 text-sm sm:text-base">
            
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-heading">1. O que são Cookies?</h2>
              <p>
                Cookies são pequenos arquivos de texto armazenados no navegador ou dispositivo do usuário quando visita um website. Eles permitem reconhecer o dispositivo, memorizar preferências e garantir o funcionamento correto e seguro das funcionalidades da aplicação.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-heading">2. Categorias de Cookies Utilizados no Portal 4XML</h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 dark:bg-[#0B1E32] rounded-xl border border-slate-200 dark:border-slate-800">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">a) Cookies Estritamente Necessários (Essenciais)</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    Indispensáveis para a navegação segura, autenticação no painel administrativo e proteção contra fraudes e submissões repetitivas de formulários. Não podem ser desativados em nossos sistemas.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-[#0B1E32] rounded-xl border border-slate-200 dark:border-slate-800">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">b) Cookies Analíticos e de Desempenho</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    Permitem contabilizar visitas, tempo de permanência e fontes de tráfego, ajudando a entender quais seções do site são mais acessadas para otimização contínua da velocidade e usabilidade.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-[#0B1E32] rounded-xl border border-slate-200 dark:border-slate-800">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">c) Cookies de Funcionalidade e Preferência</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    Lembram preferências de idioma, filtros aplicados na central de artigos e o status de exibição do banner de consentimento.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-heading">3. Como Gerenciar ou Revogar o Consentimento</h2>
              <p>
                O usuário pode a qualquer momento alterar suas opções de cookies através do banner de consentimento exibido no rodapé do site ou configurando as opções de privacidade do seu navegador (Google Chrome, Mozilla Firefox, Microsoft Edge ou Safari).
              </p>
            </section>

          </div>

        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
      <CookieConsent />
    </div>
  );
};
