import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { WhatsAppFloat } from '../components/layout/WhatsAppFloat';
import { CookieConsent } from '../components/layout/CookieConsent';
import { FileText, ChevronRight, AlertTriangle } from 'lucide-react';

export const TermsOfUsePage: React.FC = () => {
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
            <span className="text-slate-800 dark:text-slate-200 font-semibold">Termos de Uso</span>
          </nav>

          <div className="space-y-4 pb-8 border-b border-slate-200 dark:border-slate-800">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#0066CC] dark:text-[#00D2FF] text-xs font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>Condições Gerais de Acesso e Utilização</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight">
              Termos de Uso do Portal 4XML
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Última atualização: 01 de setembro de 2026
            </p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed font-body mt-8 space-y-6 text-sm sm:text-base">
            
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-heading">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e navegar pelo website do 4XML (desenvolvido e operado pela <strong className="text-slate-900 dark:text-white">Fabritech Gestão em Tecnologia Ltda</strong>), o usuário declara estar ciente e concordar integralmente com as condições estipuladas nestes Termos de Uso e em nossa Política de Privacidade.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-heading">2. Finalidade Informativa e Comercial do Portal</h2>
              <p>
                Este site tem por finalidade apresentar as características, funcionalidades, benefícios e diferenciais da solução de automação fiscal 4XML, bem como disponibilizar canais diretos para agendamento de reuniões técnicas de diagnóstico, demonstrações de software e esclarecimento de dúvidas para empresas usuárias do ERP TOTVS Protheus.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-heading">3. Propriedade Intelectual e Direitos Autorais</h2>
              <p>
                Todo o conteúdo deste site, incluindo textos, marcas, logotipos da Fabritech e do 4XML, imagens, ilustrações, diagramas de fluxo, mockups e código-fonte, é de titularidade exclusiva da Fabritech Gestão em Tecnologia Ltda, sendo protegido pelas leis de propriedade intelectual e direitos autorais vigentes no Brasil.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-heading">4. Isenção e Independência de Marcas de Terceiros</h2>
              <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-900/60 text-xs sm:text-sm text-amber-900 dark:text-amber-200 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <p>
                  A Fabritech é uma consultoria independente e não possui vínculo comercial, societário ou representação oficial com a TOTVS® ou suas subsidiárias. Os nomes TOTVS® e Protheus® são marcas registradas de seus respectivos titulares e são citados unicamente com o objetivo de esclarecer a interoperabilidade técnica da solução 4XML.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-heading">5. Foro e Legislação Aplicável</h2>
              <p>
                Estes Termos são regidos pelas leis da República Federativa do Brasil. Para dirimir quaisquer controvérsias oriundas do uso deste portal, fica eleito o Foro Central da Comarca de São Paulo – SP, com renúncia expressa a qualquer outro.
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
