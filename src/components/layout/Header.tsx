import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Instagram, ChevronRight, PhoneCall, ShieldCheck, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../lib/theme';
import { assetUrl } from '../../lib/utils';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Início', href: '/#inicio' },
    { label: 'Sobre', href: '/#sobre' },
    { label: 'Funcionalidades', href: '/#funcionalidades' },
    { label: 'Sistema', href: '/#sistema' },
    { label: 'Diferenciais', href: '/#diferenciais' },
    { label: 'Conteúdos', href: '/conteudos' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contato', href: '/#contato' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (location.pathname === '/') {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(`/#${targetId}`);
      }
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-[#07121E]/95 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800 py-3'
            : 'bg-gradient-to-b from-[#0A2540]/90 to-transparent py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent rounded-lg p-1"
            aria-label="4XML - Página Inicial"
          >
            <img
              src={assetUrl('images/Logo_4xml-300x139.png')}
              alt="4XML Solução Fiscal Fabritech"
              className={`h-9 md:h-11 w-auto object-contain transition-transform duration-200 hover:scale-105 ${
                !isScrolled || theme === 'dark' ? 'brightness-110' : ''
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Navegação Principal">
            {navLinks.map((link) => {
              const isExternalOrPage = !link.href.startsWith('/#');
              return isExternalOrPage ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#0066CC] dark:hover:text-[#00D2FF] focus:outline-none ${
                    isScrolled 
                      ? 'text-slate-700 dark:text-slate-200' 
                      : 'text-slate-200 hover:text-white'
                  } ${location.pathname === link.href ? 'text-[#0066CC] dark:text-[#00D2FF] font-semibold' : ''}`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-sm font-medium transition-colors hover:text-[#0066CC] dark:hover:text-[#00D2FF] focus:outline-none ${
                    isScrolled 
                      ? 'text-slate-700 dark:text-slate-200' 
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl border transition-all duration-200 flex items-center justify-center cursor-pointer ${
                isScrolled
                  ? 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  : 'border-white/20 text-slate-200 hover:text-white hover:bg-white/10'
              }`}
              title={theme === 'dark' ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro'}
              aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600 dark:text-slate-300 transition-transform hover:-rotate-12" />
              )}
            </button>

            <a
              href="https://www.instagram.com/fabritech.tecnologia/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                isScrolled
                  ? 'text-slate-600 dark:text-slate-300 hover:text-pink-600 hover:bg-slate-100 dark:hover:bg-slate-800'
                  : 'text-slate-300 hover:text-pink-400 hover:bg-white/10'
              }`}
              aria-label="Instagram Fabritech Tecnologia"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <button
              onClick={() => handleNavClick('/#contato')}
              id="header-cta-button"
              className="inline-flex items-center gap-2 bg-[#0066CC] hover:bg-[#0052A3] text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0066CC]"
            >
              <span>Solicitar demonstração</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors border ${
                isScrolled
                  ? 'border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  : 'border-white/20 text-white hover:bg-white/10'
              }`}
              aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                isScrolled ? 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800' : 'text-white hover:bg-white/10'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 lg:hidden backdrop-blur-xs"
              aria-hidden="true"
            />

            {/* Sidebar Sheet */}
            <motion.div
              id="mobile-navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white dark:bg-[#0A192F] text-slate-800 dark:text-slate-100 z-50 shadow-2xl flex flex-col justify-between p-6 lg:hidden border-l border-slate-200 dark:border-slate-800"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
                  <img
                    src={assetUrl('images/Logo_4xml-300x139.png')}
                    alt="4XML"
                    className="h-8 w-auto object-contain brightness-110"
                  />
                  <div className="flex items-center gap-1">
                    <button
                      onClick={toggleTheme}
                      className="p-2 rounded-lg text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      aria-label="Alternar tema"
                    >
                      {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-600" />}
                    </button>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
                      aria-label="Fechar menu"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="mt-6 flex flex-col space-y-1">
                  {navLinks.map((link) => {
                    const isExternalOrPage = !link.href.startsWith('/#');
                    return isExternalOrPage ? (
                      <Link
                        key={link.label}
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-[#0066CC] dark:hover:text-[#00D2FF] transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-[#0066CC] dark:hover:text-[#00D2FF] transition-colors"
                      >
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <button
                  onClick={() => handleNavClick('/#contato')}
                  className="w-full flex items-center justify-center gap-2 bg-[#0066CC] hover:bg-[#0052A3] text-white py-3 rounded-xl font-semibold text-sm shadow-sm transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Solicitar demonstração</span>
                </button>

                <div className="flex items-center justify-center gap-4 pt-2">
                  <a
                    href="https://www.instagram.com/fabritech.tecnologia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram Fabritech</span>
                  </a>
                </div>

                <div className="text-center pt-2">
                  <p className="text-[11px] text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    Solução Fabritech para TOTVS Protheus
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

