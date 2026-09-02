import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Shield, Lock, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-[#071A2D] text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Institutional */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block" aria-label="4XML Início">
              <img
                src="/images/Logo_4xml-300x139.png"
                alt="4XML Fabritech"
                className="h-10 w-auto object-contain brightness-110"
              />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              O <strong className="text-white">4XML</strong> é uma solução de inteligência e automação fiscal desenvolvida pela <strong className="text-white">Fabritech Gestão em Tecnologia</strong>, projetada especificamente para simplificar a captura, validação e escrituração de documentos eletrônicos integrados ao ERP TOTVS Protheus.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/fabritech.tecnologia/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-800/80 hover:bg-[#0066CC] hover:text-white rounded-lg text-slate-300 transition-colors"
                aria-label="Instagram Fabritech"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/fabritech.tecnologia"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-800/80 hover:bg-[#0066CC] hover:text-white rounded-lg text-slate-300 transition-colors"
                aria-label="Facebook Fabritech"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://pt.linkedin.com/company/fabritech-gest%C3%A3o-em-tecnologia-ltda"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-800/80 hover:bg-[#0066CC] hover:text-white rounded-lg text-slate-300 transition-colors"
                aria-label="LinkedIn Fabritech"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-heading">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="/#sobre" className="hover:text-white transition-colors">Sobre a Solução</a>
              </li>
              <li>
                <a href="/#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a>
              </li>
              <li>
                <a href="/#sistema" className="hover:text-white transition-colors">Sistema em Operação</a>
              </li>
              <li>
                <a href="/#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
              </li>
              <li>
                <Link to="/conteudos" className="hover:text-white transition-colors">Blog & Conteúdos</Link>
              </li>
              <li>
                <a href="/#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions / Modules */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-heading">
              Módulos Principais
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>Cockpit Centralizado</li>
              <li>Busca Automática SEFAZ</li>
              <li>Entrada Protheus (MATA103/140)</li>
              <li>Controle de Portaria</li>
              <li>Conferência Cega de Estoque</li>
              <li>Workflow de Inconsistências</li>
              <li>Auditoria e Relatórios Gerenciais</li>
            </ul>
          </div>

          {/* Column 4: Contact & Local Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-heading">
              Atendimento & Matriz
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                <span>
                  Av. Ordem e Progresso, 157 – Várzea da Barra Funda, São Paulo – SP, 01141-030
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00D2FF] shrink-0" />
                <a
                  href="https://wa.me/5511941883913?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20demonstra%C3%A7%C3%A3o%20do%204XML."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +55 (11) 94188-3913
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00D2FF] shrink-0" />
                <a
                  href="mailto:marina.bonifacio@fabritech.com.br"
                  className="hover:text-white transition-colors break-all"
                >
                  marina.bonifacio@fabritech.com.br
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/60 px-3 py-1.5 rounded-full border border-slate-700/50">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                Atendimento em todo o território nacional
              </span>
            </div>
          </div>
        </div>

        {/* Mandatory Legal Notice */}
        <div className="py-6 border-b border-slate-800/60 text-xs text-slate-400 leading-relaxed">
          <p className="bg-slate-900/60 p-3.5 rounded-lg border border-slate-800">
            <strong className="text-slate-300">Aviso Legal:</strong> Somos uma consultoria independente e não possuímos vínculo societário, parceria direta, representação ou vínculo comercial oficial com a TOTVS® ou suas empresas afiliadas. As marcas TOTVS® e Protheus® mencionadas pertencem aos seus respectivos proprietários e são citadas unicamente para fins de indicação de compatibilidade técnica da solução 4XML desenvolvida pela Fabritech.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Institutional Policies */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} <strong>Fabritech Gestão em Tecnologia Ltda</strong>. Todos os direitos reservados.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link to="/politica-de-privacidade" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/politica-de-cookies" className="hover:text-white transition-colors">
              Política de Cookies
            </Link>
            <Link to="/termos-de-uso" className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
            <Link
              to="/admin/login"
              className="hover:text-white flex items-center gap-1 text-slate-400 transition-colors"
            >
              <Lock className="w-3 h-3" />
              <span>Acesso Restrito</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
