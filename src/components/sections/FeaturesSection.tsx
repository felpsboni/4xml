import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Inbox, 
  Layers, 
  PackageCheck, 
  ShieldAlert, 
  Search, 
  MailCheck, 
  FileBadge, 
  Archive, 
  LayoutDashboard, 
  Cpu, 
  Sparkles, 
  FileEdit, 
  FileSpreadsheet, 
  ShoppingCart, 
  Truck, 
  UserCheck, 
  DoorOpen, 
  ScanBarcode, 
  ClipboardCheck, 
  AlertOctagon, 
  Sliders, 
  UserX, 
  Scale, 
  Link2, 
  BarChart3,
  Check,
  ArrowRight
} from 'lucide-react';
import { FEATURE_CATEGORIES } from '../../data/mockData';

export const FeaturesSection: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => {
  const [activeCategoryId, setActiveCategoryId] = useState('captura-organizacao');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Inbox': return <Inbox className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'PackageCheck': return <PackageCheck className="w-5 h-5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-5 h-5 text-[#0066CC]" />;
      case 'MailCheck': return <MailCheck className="w-5 h-5 text-[#0066CC]" />;
      case 'FileBadge': return <FileBadge className="w-5 h-5 text-[#0066CC]" />;
      case 'Archive': return <Archive className="w-5 h-5 text-[#0066CC]" />;
      case 'LayoutDashboard': return <LayoutDashboard className="w-5 h-5 text-[#0066CC]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#0066CC]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#0066CC]" />;
      case 'FileEdit': return <FileEdit className="w-5 h-5 text-[#0066CC]" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5 text-[#0066CC]" />;
      case 'ShoppingCart': return <ShoppingCart className="w-5 h-5 text-[#0066CC]" />;
      case 'Truck': return <Truck className="w-5 h-5 text-[#0066CC]" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-[#0066CC]" />;
      case 'DoorOpen': return <DoorOpen className="w-5 h-5 text-[#0066CC]" />;
      case 'ScanBarcode': return <ScanBarcode className="w-5 h-5 text-[#0066CC]" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-5 h-5 text-[#0066CC]" />;
      case 'AlertOctagon': return <AlertOctagon className="w-5 h-5 text-[#0066CC]" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-[#0066CC]" />;
      case 'UserX': return <UserX className="w-5 h-5 text-[#0066CC]" />;
      case 'Scale': return <Scale className="w-5 h-5 text-[#0066CC]" />;
      case 'Link2': return <Link2 className="w-5 h-5 text-[#0066CC]" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-[#0066CC]" />;
      default: return <Sparkles className="w-5 h-5 text-[#0066CC]" />;
    }
  };

  const activeCategory = FEATURE_CATEGORIES.find(c => c.id === activeCategoryId) || FEATURE_CATEGORIES[0];

  return (
    <section id="funcionalidades" className="py-24 bg-slate-50 dark:bg-[#091524] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] dark:text-[#00D2FF] font-mono">
            Arquitetura Funcional Completa
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading">
            Tudo o que sua operação precisa para eliminar gargalos fiscais.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-body">
            Conheça as ferramentas estruturadas do 4XML para cobrir desde a captura eletrônica até a conferência de estoque e fechamento fiscal.
          </p>
        </div>

        {/* Tab Buttons for the 4 Pillar Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {FEATURE_CATEGORIES.map((category) => {
            const isActive = category.id === activeCategoryId;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategoryId(category.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? 'bg-[#0A2540] dark:bg-[#0E2A4A] text-white border-[#0A2540] dark:border-[#00D2FF] shadow-md shadow-slate-900/10'
                    : 'bg-white dark:bg-[#0B1E32] text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800'
                }`}
              >
                <span className={isActive ? 'text-[#00D2FF]' : 'text-slate-500 dark:text-slate-400'}>
                  {getCategoryIcon(category.icon)}
                </span>
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Features Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            {/* Category Description Banner */}
            <div className="bg-white dark:bg-[#0B1E32] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                  {activeCategory.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                  {activeCategory.shortDesc}
                </p>
              </div>
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#0066CC] dark:text-[#00D2FF] hover:text-[#0052A3] bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/60 px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors"
              >
                <span>Ver demonstração deste módulo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Features Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCategory.features.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-white dark:bg-[#0B1E32] rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-blue-200 dark:hover:border-slate-700 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50/80 dark:bg-blue-950/60 flex items-center justify-center">
                      {getFeatureIcon(feature.iconName)}
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white font-heading leading-snug">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-body">
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-[#081728] -mx-6 -mb-6 p-4 rounded-b-2xl">
                    <span className="text-[11px] font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 stroke-[3]" />
                      Benefício Operacional:
                    </span>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                      {feature.benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
