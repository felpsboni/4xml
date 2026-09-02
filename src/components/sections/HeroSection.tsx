import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Database, 
  ShieldCheck, 
  Clock, 
  TrendingDown, 
  Building2, 
  Layers, 
  Cpu, 
  Sparkles,
  Zap,
  Check
} from 'lucide-react';

interface HeroSectionProps {
  onContactClick: () => void;
  onFeaturesClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick, onFeaturesClick }) => {
  const [activeDocIndex, setActiveDocIndex] = useState(0);

  const sampleDocs = [
    { type: 'NF-e', mod: 'Mod 55', num: '000.418.921', emitter: 'Indústria Metalúrgica SA', status: 'Lançado no MATA103', val: 'R$ 48.920,00', color: 'emerald' },
    { type: 'CT-e', mod: 'Mod 57', num: '000.082.114', emitter: 'Expresso Cargas Brasil', status: 'Frete Vinculado à NF', val: 'R$ 1.840,50', color: 'blue' },
    { type: 'NFS-e', mod: 'Serviço', num: '2026/09124', emitter: 'Tech Soluções SP', status: 'Pré-Nota MATA140', val: 'R$ 12.500,00', color: 'cyan' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDocIndex((prev) => (prev + 1) % sampleDocs.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [sampleDocs.length]);

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden bg-gradient-hero text-white"
    >
      {/* Background Decorative Tech Elements */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#0066CC]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Conversion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-7 text-left"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-cyan-300 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
              <span>Automação fiscal integrada ao TOTVS Protheus</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15] font-heading">
              Reduza em até <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-blue-300">70% os custos</span> com escrituração fiscal.
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-body">
              Receba, consulte, classifique e registre <strong className="text-white">NF-e, CT-e e NFS-e</strong> em um cockpit integrado ao Protheus. Menos atividades manuais, mais controle sobre inconsistências e uma operação fiscal muito mais eficiente.
            </p>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onContactClick}
                id="hero-primary-cta"
                className="inline-flex items-center justify-center gap-2.5 bg-[#0066CC] hover:bg-[#0052A3] text-white px-7 py-3.5 rounded-xl font-bold text-base shadow-lg shadow-blue-900/30 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-[#00D2FF]/30"
              >
                <span>Solicitar uma demonstração</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onFeaturesClick}
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-3.5 rounded-xl font-semibold text-base backdrop-blur-xs transition-all duration-200 hover:border-white/30"
              >
                <span>Conhecer as funcionalidades</span>
              </button>
            </div>

            {/* Fast Proof Points Strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                <span>+1.000 CNPJs utilizando a plataforma</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                <span>+50 facilitadores e relatórios fiscais</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                <span>Implantação informada em ~3 dias</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                <span>Sem cobrança por volume de XML</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Cockpit Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Central Mockup Device Shell */}
            <div className="relative rounded-2xl p-2 bg-gradient-to-b from-white/20 via-white/10 to-transparent shadow-2xl border border-white/20 backdrop-blur-md">
              <div className="bg-[#0A192F] rounded-xl overflow-hidden border border-slate-700/60 p-4 space-y-4">
                
                {/* Header bar of the simulated cockpit */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="font-mono text-slate-300 ml-2 font-medium">4XML Cockpit v2026</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    SEFAZ ONLINE
                  </span>
                </div>

                {/* Live Real-time XML Flow simulation */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-300 px-1">
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-cyan-400" />
                      Captura & Integração Automática Protheus
                    </span>
                    <span className="font-mono text-slate-300">Tempo Real</span>
                  </div>

                  {sampleDocs.map((doc, idx) => {
                    const isActive = idx === activeDocIndex;
                    return (
                      <motion.div
                        key={doc.type + doc.num}
                        animate={{
                          borderColor: isActive ? 'rgba(0, 210, 255, 0.6)' : 'rgba(255, 255, 255, 0.08)',
                          backgroundColor: isActive ? 'rgba(15, 49, 86, 0.9)' : 'rgba(10, 25, 47, 0.5)',
                        }}
                        className="p-3 rounded-lg border transition-all duration-300 flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-md ${
                            doc.type === 'NF-e' ? 'bg-emerald-500/20 text-emerald-300' :
                            doc.type === 'CT-e' ? 'bg-blue-500/20 text-blue-300' : 'bg-cyan-500/20 text-cyan-300'
                          }`}>
                            <FileText className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-white">{doc.type}</span>
                              <span className="text-[10px] font-mono text-slate-300 bg-slate-800 px-1.5 py-0.2 rounded">{doc.num}</span>
                            </div>
                            <p className="text-[11px] text-slate-300 truncate max-w-[140px] sm:max-w-[180px]">{doc.emitter}</p>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="font-mono font-semibold text-white block text-xs">{doc.val}</span>
                          <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                            <Check className="w-3 h-3" />
                            {doc.status}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* System screenshot integration preview */}
                <div className="relative rounded-lg overflow-hidden border border-slate-700/80 group">
                  <img
                    src="/images/mockup3.png"
                    alt="Interface Oficial 4XML Cockpit Protheus"
                    className="w-full h-36 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-[11px] font-medium text-slate-200 flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-[#00D2FF]" />
                      Sincronização Direta com Tabelas SF1, SD1 e SC7
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating XML Badges */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-6 -left-6 hidden sm:flex items-center gap-2 bg-[#0A2540] border border-cyan-500/40 p-2.5 rounded-xl shadow-xl text-xs font-semibold text-white backdrop-blur-md"
            >
              <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="block text-cyan-300 text-[10px]">Busca Automática</span>
                <span>SEFAZ Nacional</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -right-4 hidden sm:flex items-center gap-2 bg-[#0A2540] border border-emerald-500/40 p-2.5 rounded-xl shadow-xl text-xs font-semibold text-white backdrop-blur-md"
            >
              <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="block text-emerald-300 text-[10px]">Compliance Fiscal</span>
                <span>MATA103 / MATA140</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
