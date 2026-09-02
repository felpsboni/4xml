import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CloudDownload, 
  FileCheck2, 
  AlertTriangle, 
  Layers, 
  Database, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Building2,
  Workflow
} from 'lucide-react';
import { WORKFLOW_STAGES } from '../../data/mockData';

export const AboutSection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState(1);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'CloudDownload': return <CloudDownload className="w-6 h-6" />;
      case 'FileCheck': return <FileCheck2 className="w-6 h-6" />;
      case 'AlertTriangle': return <AlertTriangle className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'Database': return <Database className="w-6 h-6" />;
      default: return <Workflow className="w-6 h-6" />;
    }
  };

  const activeStage = WORKFLOW_STAGES.find(s => s.step === selectedStep) || WORKFLOW_STAGES[0];

  return (
    <section id="sobre" className="py-24 bg-white dark:bg-[#07121E] relative overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/60 text-[#0066CC] dark:text-[#00D2FF] text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Solução Fabritech para o ERP TOTVS Protheus</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading">
            Documentos fiscais organizados antes de virarem um problema.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-body">
            O <strong className="text-slate-900 dark:text-white">4XML</strong> é uma solução da <strong className="text-slate-900 dark:text-white">Fabritech</strong> totalmente integrada ao ERP TOTVS Protheus. A plataforma automatiza a busca de documentos fiscais eletrônicos emitidos contra a empresa, centraliza as informações em um cockpit e auxilia na identificação de inconsistências antes da entrada dos documentos. O resultado é uma operação com menos tarefas repetitivas, menor incidência de erros e mais segurança para as áreas fiscal, contábil, logística e de compras.
          </p>
        </div>

        {/* 5-Step Visual Interactive Flow */}
        <div className="bg-[#0A2540] dark:bg-[#091B2F] border border-transparent dark:border-slate-800 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 border-b border-white/10 gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#00D2FF] font-semibold font-mono">
                  Fluxo Operacional Automatizado
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 font-heading">
                  Como o 4XML transforma a entrada fiscal da sua empresa
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Rastreabilidade de ponta a ponta</span>
              </div>
            </div>

            {/* Stepper Navigation Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-8">
              {WORKFLOW_STAGES.map((stage) => {
                const isSelected = stage.step === selectedStep;
                return (
                  <button
                    key={stage.step}
                    onClick={() => setSelectedStep(stage.step)}
                    className={`text-left p-4 rounded-xl transition-all duration-200 border relative ${
                      isSelected
                        ? 'bg-white/15 border-[#00D2FF] shadow-lg shadow-cyan-950/40 text-white'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isSelected ? 'bg-[#00D2FF] text-[#0A2540]' : 'bg-white/10 text-slate-300'
                      }`}>
                        Etapa 0{stage.step}
                      </span>
                      <div className={isSelected ? 'text-[#00D2FF]' : 'text-slate-400'}>
                        {getStepIcon(stage.icon)}
                      </div>
                    </div>
                    <h4 className="font-semibold text-sm text-white mb-1">
                      {stage.title}
                    </h4>
                    <p className="text-xs text-slate-300 line-clamp-2">
                      {stage.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Detailed Spotlight */}
            <motion.div
              key={activeStage.step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8 bg-white/10 border border-white/15 rounded-2xl p-6 sm:p-8 backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#00D2FF] text-[#0A2540] font-extrabold flex items-center justify-center text-sm font-mono">
                    {activeStage.step}
                  </span>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white font-heading">
                      {activeStage.title}
                    </h4>
                    <p className="text-xs text-cyan-300 font-medium">
                      {activeStage.description}
                    </p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-body pt-1">
                  {activeStage.detail}
                </p>
              </div>

              <div className="lg:col-span-4 bg-[#0A192F]/80 p-5 rounded-xl border border-white/10 space-y-3 text-xs">
                <span className="font-semibold text-slate-200 block uppercase tracking-wider text-[11px]">
                  Impacto Operacional:
                </span>
                <div className="space-y-2 text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Elimina digitação manual de notas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Validação prévia de TES e Pedido SC7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Auditoria antes de gerar o MATA103</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
