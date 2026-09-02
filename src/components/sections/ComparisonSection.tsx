import React from 'react';
import { XCircle, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const ComparisonSection: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => {
  const comparisonRows = [
    {
      criterion: 'Recebimento de Documentos',
      manual: 'Dependência de e-mails de fornecedores ou DANFE impressa em papel entregue pelo motorista.',
      fourXml: 'Captura automática contínua na SEFAZ e prefeituras via Certificado Digital A1 em tempo real.'
    },
    {
      criterion: 'Digitação & Entrada no ERP',
      manual: 'Digitação manual de 44 dígitos da chave de acesso, cabeçalho e cada item da nota no Protheus.',
      fourXml: 'Geração estruturada e instantânea de Pré-Nota (MATA140) ou Documento de Entrada (MATA103).'
    },
    {
      criterion: 'Validação de Pedidos de Compra',
      manual: 'Conferência visual no papel de preço e quantidade contra o pedido SC7, propensa a falhas.',
      fourXml: 'Cruzamento automatizado item a item com bloqueio preventivo de divergências e tolerâncias configuradas.'
    },
    {
      criterion: 'Amarração Produto x Fornecedor',
      manual: 'Tentativa e erro manual para encontrar o código interno do produto (SB1) a cada nota recebida.',
      fourXml: 'Mapeamento inteligente no cadastro SA5 com reaproveitamento automático para compras futuras.'
    },
    {
      criterion: 'Manifestação do Destinatário',
      manual: 'Esquecimento frequente ou execução manual tardia, expondo a empresa a multas e notas frias.',
      fourXml: 'Manifestação automática e parametrizada (Ciência, Confirmação, Desconhecimento) direto na SEFAZ.'
    },
    {
      criterion: 'Controle de Portaria & Cargas',
      manual: 'Caminhões retidos no pátio aguardando analistas fiscais liberarem a nota no escritório.',
      fourXml: 'Check-in rápido por bipagem da DANFE, com conferência cega e auditoria imediata de recebimento.'
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#07121E] relative overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] dark:text-[#00D2FF] font-mono">
            Comparativo de Eficiência Operacional
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading">
            Processo Manual vs. Automação com 4XML.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-body">
            Veja a diferença direta entre uma operação fiscal vulnerável e uma estrutura automatizada e integrada ao TOTVS Protheus.
          </p>
        </div>

        {/* Comparison Grid Table */}
        <div className="bg-white dark:bg-[#0B1E32] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
          
          {/* Header row */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-[#0A2540] dark:bg-[#091B2F] text-white p-6 sm:p-8 items-center gap-4">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Dimensão Operacional</span>
              <h3 className="text-xl font-bold font-heading">Critério Avaliado</h3>
            </div>
            <div className="md:col-span-4 flex items-center gap-2 text-rose-300 font-semibold text-sm">
              <XCircle className="w-5 h-5 shrink-0 text-rose-400" />
              <span>Processo Tradicional / Manual</span>
            </div>
            <div className="md:col-span-4 flex items-center gap-2 text-[#00D2FF] font-bold text-sm">
              <Zap className="w-5 h-5 shrink-0 text-[#00D2FF]" />
              <span>Com a Tecnologia 4XML</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-6 sm:p-7 gap-4 items-start hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
              >
                <div className="md:col-span-4">
                  <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white font-heading">
                    {row.criterion}
                  </h4>
                </div>
                <div className="md:col-span-4 flex items-start gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 bg-rose-50/40 dark:bg-rose-950/20 md:bg-transparent p-3 md:p-0 rounded-xl">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <p>{row.manual}</p>
                </div>
                <div className="md:col-span-4 flex items-start gap-3 text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100 bg-blue-50/40 dark:bg-blue-950/20 md:bg-transparent p-3 md:p-0 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-[#0066CC] dark:text-[#00D2FF] shrink-0 mt-0.5" />
                  <p>{row.fourXml}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA Strip */}
          <div className="p-6 sm:p-8 bg-slate-50 dark:bg-[#0E253E] border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-[#0066CC] dark:text-[#00D2FF] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                Pronto para eliminar horas de digitação e retrabalho fiscal da sua equipe?
              </p>
            </div>

            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 bg-[#0066CC] hover:bg-[#0052A3] text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all shrink-0 cursor-pointer"
            >
              <span>Solicitar demonstração personalizada</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
