import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { WhatsAppFloat } from '../components/layout/WhatsAppFloat';
import { CookieConsent } from '../components/layout/CookieConsent';
import { Shield, ChevronRight, Lock, FileText, CheckCircle2 } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
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
            <span className="text-slate-800 dark:text-slate-200 font-semibold">Política de Privacidade</span>
          </nav>

          <div className="space-y-4 pb-8 border-b border-slate-200 dark:border-slate-800">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#0066CC] dark:text-[#00D2FF] text-xs font-semibold">
              <Shield className="w-3.5 h-3.5" />
              <span>Conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight">
              Política de Privacidade e Proteção de Dados
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Última atualização: 01 de setembro de 2026 | Versão 2.4
            </p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed font-body mt-8 space-y-6 text-sm sm:text-base">
            
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-heading">1. Identificação do Controlador dos Dados</h2>
              <p>
                A presente Política de Privacidade regula o tratamento de dados pessoais realizado pela <strong className="text-slate-900 dark:text-white">FABRITECH GESTÃO EM TECNOLOGIA LTDA</strong>, pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 18.234.567/0001-89, com sede na Av. Ordem e Progresso, 157 – Várzea da Barra Funda, São Paulo – SP, CEP 01141-030, doravante denominada simplesmente "Fabritech" ou "4XML".
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-heading">2. Dados Pessoais Coletados e Finalidades do Tratamento</h2>
              <p>
                A Fabritech coleta e trata dados pessoais estritamente necessários para a condução de suas relações comerciais corporativas B2B e atendimento a potenciais clientes. Os dados coletados incluem:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-slate-900 dark:text-white">Dados de Identificação e Contato:</strong> Nome completo, e-mail corporativo, número de telefone/WhatsApp, nome da empresa e cargo/área de atuação, coletados via formulários de contato ou canais diretos para envio de propostas comerciais e agendamento de demonstrações.</li>
                <li><strong className="text-slate-900 dark:text-white">Dados Corporativos e Operacionais:</strong> CNPJ da empresa, estimativa de volume de documentos fiscais e informações sobre a versão e utilização do ERP TOTVS Protheus, necessários para dimensionar o diagnóstico e a demonstração técnica.</li>
                <li><strong className="text-slate-900 dark:text-white">Dados de Navegação e Conexão:</strong> Endereço IP, registros de data/hora de acesso, tipo de navegador e preferências coletadas por meio de cookies analíticos e essenciais para a segurança cibernética da plataforma.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-heading">3. Bases Legais para o Tratamento (Art. 7º da LGPD)</h2>
              <p>
                O tratamento dos dados pessoais pela Fabritech fundamenta-se nas seguintes hipóteses legais previstas no art. 7º da Lei Federal nº 13.709/2018:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-slate-900 dark:text-white">Execução de Procedimentos Preliminares a Contrato (Inciso V):</strong> Atendimento a solicitações de demonstrações técnicas, elaboração de propostas e análises de viabilidade operacional.</li>
                <li><strong className="text-slate-900 dark:text-white">Legítimo Interesse (Inciso IX):</strong> Envio de comunicações institucionais relevantes, comunicados técnicos e aprimoramento da experiência de navegação em nosso site.</li>
                <li><strong className="text-slate-900 dark:text-white">Consentimento do Titular (Inciso I):</strong> Quando manifestado de forma livre, informada e inequívoca mediante o checkbox de aceite nos formulários de captura.</li>
                <li><strong className="text-slate-900 dark:text-white">Cumprimento de Obrigação Legal ou Regulatória (Inciso II):</strong> Guarda de registros de acesso nos termos do Marco Civil da Internet (Lei nº 12.965/2014).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-heading">4. Segurança da Informação e Proteção dos Certificados Digitais</h2>
              <p>
                A Fabritech adota rigorosas medidas técnicas e organizacionais de segurança para garantir a confidencialidade, integridade e disponibilidade das informações tratadas:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Comunicação criptografada via protocolo TLS 1.3 / SSL em todas as requisições.</li>
                <li>Ambientes com restrição de acesso lógico baseada no princípio do menor privilégio.</li>
                <li>Armazenamento seguro de certificados digitais A1 com criptografia de ponta e proteção de chaves privadas exclusivamente para fins de consulta e manifestação na SEFAZ.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-heading">5. Direitos dos Titulares de Dados Pessoais</h2>
              <p>
                Em observância ao art. 18 da LGPD, os titulares de dados pessoais podem, a qualquer momento e mediante requisição formal, exercer seus direitos de:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Confirmação da existência de tratamento e acesso aos dados;</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
                <li>Revogação do consentimento previamente concedido.</li>
              </ul>
              <p className="pt-2">
                Para exercer qualquer um desses direitos, entre em contato diretamente com o nosso Encarregado pelo Tratamento de Dados Pessoais (DPO) através do e-mail: <strong className="text-slate-900 dark:text-white">marina.bonifacio@fabritech.com.br</strong>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-heading">6. Isenção e Independência de Marcas</h2>
              <p className="bg-slate-50 dark:bg-[#0B1E32] p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
                A Fabritech Gestão em Tecnologia Ltda é uma empresa de consultoria e desenvolvimento de software independente e não possui qualquer vínculo societário, parceria direta, representação ou vínculo comercial oficial com a TOTVS® ou suas empresas afiliadas. As marcas TOTVS® e Protheus® mencionadas pertencem aos seus respectivos titulares e são utilizadas unicamente para indicar a compatibilidade e integração técnica da solução 4XML.
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
