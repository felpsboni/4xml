import React from 'react';
import { 
  Search, 
  Settings2, 
  CheckCheck, 
  GraduationCap, 
  Rocket, 
  Clock, 
  AlertCircle, 
  Check 
} from 'lucide-react';
import { IMPLEMENTATION_STEPS } from '../../data/mockData';

export const ImplementationSection: React.FC = () => {
  const getStepIcon = (step: number) => {
    switch (step) {
      case 1: return <Search className="w-5 h-5" />;
      case 2: return <Settings2 className="w-5 h-5" />;
      case 3: return <CheckCheck className="w-5 h-5" />;
      case 4: return <GraduationCap className="w-5 h-5" />;
      case 5: return <Rocket className="w-5 h-5" />;
      default: return <Settings2 className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-[#07121E] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] dark:text-[#00D2FF] font-mono">
            Metodologia & Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading">
            Da análise ao uso do sistema em etapas claras.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-body">
            Uma abordagem estruturada para garantir rápida adesão das equipes e total segurança na transição operacional.
          </p>
        </div>

        {/* 5 Implementation Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {IMPLEMENTATION_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-slate-50 dark:bg-[#0B1E32] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between relative hover:shadow-lg dark:hover:shadow-cyan-950/20 hover:border-blue-200 dark:hover:border-slate-700 transition-all duration-200"
            >
              <div>
                {/* Step number badge & icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-[#0A2540] dark:bg-[#0E253E] text-[#00D2FF] font-mono font-bold text-xs flex items-center justify-center">
                    0{step.step}
                  </span>
                  <div className="p-2 bg-white dark:bg-[#0E253E] rounded-xl text-[#0066CC] dark:text-[#00D2FF] border border-slate-200 dark:border-slate-700 shadow-xs">
                    {getStepIcon(step.step)}
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 font-heading">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-body">
                  {step.description}
                </p>
              </div>

              {/* Deliverables checklist */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800 space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase text-slate-400 dark:text-slate-500 block mb-1">
                  Principais Entregas:
                </span>
                {step.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer on Implementation Time */}
        <div className="mt-12 max-w-3xl mx-auto bg-blue-50/60 dark:bg-[#0B1E32] border border-blue-100 dark:border-slate-800 rounded-2xl p-4 sm:p-5 flex items-start gap-3 text-xs text-slate-600 dark:text-slate-300">
          <AlertCircle className="w-5 h-5 text-[#0066CC] dark:text-[#00D2FF] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-slate-900 dark:text-white block">
              Nota sobre Prazos de Implantação:
            </span>
            <p>
              O tempo estimado de implantação informado (aproximadamente três dias úteis) refere-se a cenários padrão de integração. O cronograma definitivo é estabelecido durante a etapa de diagnóstico técnico, considerando a infraestrutura de servidores, quantidade de CNPJs, customizações no Protheus e disponibilidade da equipe técnica da sua empresa.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
