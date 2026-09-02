import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  TrendingDown, 
  Building2, 
  FileSpreadsheet, 
  Clock, 
  ShieldCheck, 
  Award
} from 'lucide-react';
import { METRICS_DATA } from '../../data/mockData';

export const ProofAndMetricsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getMetricIcon = (icon: string) => {
    switch (icon) {
      case 'TrendingDown': return <TrendingDown className="w-6 h-6 text-[#0066CC] dark:text-[#00D2FF]" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-[#0066CC] dark:text-[#00D2FF]" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-6 h-6 text-[#0066CC] dark:text-[#00D2FF]" />;
      case 'Clock': return <Clock className="w-6 h-6 text-[#0066CC] dark:text-[#00D2FF]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#0066CC] dark:text-[#00D2FF]" />;
      default: return <Award className="w-6 h-6 text-[#0066CC] dark:text-[#00D2FF]" />;
    }
  };

  return (
    <section id="diferenciais" className="py-24 bg-white dark:bg-[#07121E] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] dark:text-[#00D2FF] font-mono">
            Solidez & Resultados Confirmados
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading">
            Indicadores que comprovam a eficiência do 4XML.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-body">
            Métricas reais informadas com transparência para subsidiar a tomada de decisão da sua controladoria e diretoria.
          </p>
        </div>

        {/* Animated Metrics Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {METRICS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 dark:bg-[#0B1E32] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg dark:hover:shadow-cyan-950/20 hover:border-blue-200 dark:hover:border-slate-700 transition-all duration-300 group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#0E253E] border border-slate-200 dark:border-slate-700 shadow-xs flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {getMetricIcon(item.icon)}
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight flex items-baseline">
                  {item.prefix && <span className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300 mr-1">{item.prefix}</span>}
                  <span className="text-[#0066CC] dark:text-[#00D2FF]">{item.number}</span>
                  {item.suffix && <span className="text-2xl sm:text-3xl font-bold text-[#0066CC] dark:text-[#00D2FF]">{item.suffix}</span>}
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-2 font-heading">
                  {item.label}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800">
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                  {item.qualifier}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

