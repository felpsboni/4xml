import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import confetti from 'canvas-confetti';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  FileCheck2,
  Sparkles,
  Lock
} from 'lucide-react';
import { saveLead } from '../../lib/storage';
import { formatPhone, formatCNPJ, isValidCNPJ } from '../../lib/utils';

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(3, 'Nome completo deve conter pelo menos 3 caracteres'),
  email: z
    .string()
    .email('Informe um e-mail válido')
    .refine((val) => {
      const freeDomains = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'yahoo.com.br', 'bol.com.br', 'uol.com.br', 'icloud.com'];
      const domain = val.split('@')[1]?.toLowerCase();
      // Warn or prioritize corporate emails
      return domain && !freeDomains.includes(domain);
    }, {
      message: 'Por favor, utilize o seu e-mail corporativo da empresa.'
    }),
  phone: z.string().min(14, 'Informe um telefone/WhatsApp válido com DDD (mínimo 10 dígitos)'),
  company: z.string().min(2, 'Informe o nome da empresa'),
  cnpj: z.string().optional().refine((val) => !val || val.length === 0 || isValidCNPJ(val), {
    message: 'CNPJ inválido. Verifique os dígitos digitados.'
  }),
  businessArea: z.string().min(1, 'Selecione a área de atuação da sua empresa'),
  monthlyDocuments: z.string().optional(),
  message: z.string().min(10, 'Descreva brevemente seu ambiente ou necessidade (mínimo 10 caracteres)'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'É necessário autorizar o contato para envio da demonstração conforme a LGPD.'
  }),
  // Honeypot anti-spam field
  website_hp: z.string().max(0, 'Spam detectado')
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      cnpj: '',
      businessArea: '',
      monthlyDocuments: '',
      message: '',
      consent: false,
      website_hp: ''
    }
  });

  const phoneValue = watch('phone');
  const cnpjValue = watch('cnpj');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setValue('phone', formatted, { shouldValidate: true });
  };

  const handleCNPJChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCNPJ(e.target.value);
    setValue('cnpj', formatted, { shouldValidate: true });
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Honeypot check
      if (data.website_hp && data.website_hp.length > 0) {
        throw new Error('Envio inválido detectado.');
      }

      // Save lead to local/server persistent storage
      saveLead({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        cnpj: data.cnpj,
        businessArea: data.businessArea,
        monthlyDocuments: data.monthlyDocuments,
        message: data.message,
        consent: data.consent,
        source: 'Formulário Principal do Site'
      });

      // Confetti celebratory feedback
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore in iframe if canvas-confetti restriction
      }

      setIsSuccess(true);
      reset();
    } catch (err: any) {
      setErrorMessage(err.message || 'Erro ao processar sua solicitação. Tente novamente ou chame no WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-24 bg-[#0A2540] text-white relative overflow-hidden">
      {/* Background glow and tech details */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context, Value Proposition & Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00D2FF] font-mono">
                Agendamento de Demonstração
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading leading-tight">
                Descubra quanto tempo sua operação pode economizar.
              </h2>
              <p className="text-base text-slate-300 leading-relaxed font-body">
                Conte brevemente como sua empresa utiliza o Protheus. Um especialista do 4XML entrará em contato para apresentar a solução de acordo com o seu processo.
              </p>
            </div>

            {/* Quick Guarantees */}
            <div className="space-y-3 bg-[#0D2D4D] p-5 rounded-2xl border border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Demonstração ao vivo em ambiente Protheus real</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#00D2FF] shrink-0" />
                <span>Retorno ágil por nossa equipe técnica especializada</span>
              </div>
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-cyan-300 shrink-0" />
                <span>Sigilo e proteção de dados em conformidade com a LGPD</span>
              </div>
            </div>

            {/* Official Contact Cards */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
                Canais de Atendimento Oficial Fabritech
              </h3>

              <div className="space-y-3 text-sm">
                <a
                  href="https://wa.me/5511941883913?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20demonstra%C3%A7%C3%A3o%20do%204XML."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-[#25D366]/20 text-[#25D366]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 font-medium">WhatsApp / Telefone</span>
                    <span className="text-white font-semibold">+55 (11) 94188-3913</span>
                  </div>
                </a>

                <a
                  href="mailto:marina.bonifacio@fabritech.com.br"
                  className="flex items-center gap-3.5 p-3.5 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-blue-500/20 text-[#00D2FF]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-xs text-slate-400 font-medium">E-mail Corporativo</span>
                    <span className="text-white font-semibold truncate block">marina.bonifacio@fabritech.com.br</span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3.5 bg-white/5 rounded-xl border border-white/10">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-[#00D2FF] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 font-medium">Endereço da Matriz</span>
                    <span className="text-xs text-slate-200 leading-relaxed block">
                      Av. Ordem e Progresso, 157 – Várzea da Barra Funda, São Paulo – SP, 01141-030
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#0B1E32] text-slate-900 dark:text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 dark:border-slate-800 transition-colors">
              
              {isSuccess ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
                      Solicitação Recebida com Sucesso!
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                      Obrigado pelo seu interesse no 4XML. Nossa equipe técnica entrará em contato em breve para apresentar a plataforma e alinhar o diagnóstico do seu ambiente Protheus.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="https://wa.me/5511941883913?text=Ol%C3%A1%2C%20acabei%20de%20enviar%20uma%20solicita%C3%A7%C3%A3o%20pelo%20site%20e%20gostaria%20de%20agilizar%20a%20demonstra%C3%A7%C3%A3o."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Falar Agora no WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setIsSuccess(false)}
                      className="text-xs font-semibold text-[#0066CC] dark:text-[#00D2FF] hover:underline px-4 py-2 cursor-pointer"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  
                  {/* Honeypot hidden input */}
                  <input
                    type="text"
                    {...register('website_hp')}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden opacity-0 pointer-events-none absolute -z-50"
                  />

                  <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                      Preencha os dados da sua empresa
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Campos marcados com asterisco (*) são de preenchimento obrigatório.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-4 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 rounded-xl text-xs flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600 dark:text-rose-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Field Row 1: Name and Corporate Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Nome Completo *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Ex.: Carlos Eduardo"
                        {...register('name')}
                        className={`w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#0E253E] border rounded-xl text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:bg-white dark:focus:bg-[#112F4E] focus:outline-none focus:ring-2 ${
                          errors.name ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200 dark:border-slate-700 focus:ring-[#0066CC]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 font-medium">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        E-mail Corporativo *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="nome@suaempresa.com.br"
                        {...register('email')}
                        className={`w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#0E253E] border rounded-xl text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:bg-white dark:focus:bg-[#112F4E] focus:outline-none focus:ring-2 ${
                          errors.email ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200 dark:border-slate-700 focus:ring-[#0066CC]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 font-medium">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Field Row 2: Phone/WhatsApp and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Telefone ou WhatsApp *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="(11) 98765-4321"
                        value={phoneValue || ''}
                        onChange={handlePhoneChange}
                        className={`w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#0E253E] border rounded-xl text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:bg-white dark:focus:bg-[#112F4E] focus:outline-none focus:ring-2 ${
                          errors.phone ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200 dark:border-slate-700 focus:ring-[#0066CC]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 font-medium">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Nome da Empresa *
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        placeholder="Razão Social ou Nome Fantasia"
                        {...register('company')}
                        className={`w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#0E253E] border rounded-xl text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:bg-white dark:focus:bg-[#112F4E] focus:outline-none focus:ring-2 ${
                          errors.company ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200 dark:border-slate-700 focus:ring-[#0066CC]'
                        }`}
                      />
                      {errors.company && (
                        <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 font-medium">{errors.company.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Field Row 3: CNPJ (Optional) and Business Area */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-cnpj" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        CNPJ da Empresa <span className="text-slate-400 font-normal">(Opcional)</span>
                      </label>
                      <input
                        id="contact-cnpj"
                        type="text"
                        placeholder="00.000.000/0001-00"
                        value={cnpjValue || ''}
                        onChange={handleCNPJChange}
                        className={`w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#0E253E] border rounded-xl text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:bg-white dark:focus:bg-[#112F4E] focus:outline-none focus:ring-2 ${
                          errors.cnpj ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200 dark:border-slate-700 focus:ring-[#0066CC]'
                        }`}
                      />
                      {errors.cnpj && (
                        <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 font-medium">{errors.cnpj.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-area" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Segmento / Área de Atuação *
                      </label>
                      <select
                        id="contact-area"
                        {...register('businessArea')}
                        className={`w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#0E253E] border rounded-xl text-sm text-slate-900 dark:text-white focus:bg-white dark:focus:bg-[#112F4E] focus:outline-none focus:ring-2 ${
                          errors.businessArea ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200 dark:border-slate-700 focus:ring-[#0066CC]'
                        }`}
                      >
                        <option value="">Selecione seu segmento...</option>
                        <option value="Indústria & Manufatura">Indústria & Manufatura</option>
                        <option value="Distribuição & Logística">Distribuição & Logística</option>
                        <option value="Varejo & Atacado">Varejo & Atacado</option>
                        <option value="Agronegócio">Agronegócio</option>
                        <option value="Serviços & Tecnologia">Serviços & Tecnologia</option>
                        <option value="Outros Segmentos">Outros Segmentos</option>
                      </select>
                      {errors.businessArea && (
                        <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 font-medium">{errors.businessArea.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Field Row 4: Monthly Documents volume (Optional) */}
                  <div>
                    <label htmlFor="contact-volume" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Volume Mensal Estimado de Documentos <span className="text-slate-400 font-normal">(Opcional)</span>
                    </label>
                    <select
                      id="contact-volume"
                      {...register('monthlyDocuments')}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#0E253E] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:bg-white dark:focus:bg-[#112F4E] focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                    >
                      <option value="">Selecione o volume aproximado...</option>
                      <option value="Até 500 notas/mês">Até 500 documentos/mês</option>
                      <option value="500 a 2.000 notas/mês">500 a 2.000 documentos/mês</option>
                      <option value="2.000 a 5.000 notas/mês">2.000 a 5.000 documentos/mês</option>
                      <option value="Mais de 5.000 notas/mês">Mais de 5.000 documentos/mês</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Como sua empresa utiliza o Protheus e qual seu principal objetivo? *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      placeholder="Ex.: Usamos Protheus 12 e queremos automatizar a entrada de NF-e e CT-e para evitar digitação manual e conferir pedidos de compra."
                      {...register('message')}
                      className={`w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#0E253E] border rounded-xl text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:bg-white dark:focus:bg-[#112F4E] focus:outline-none focus:ring-2 ${
                        errors.message ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200 dark:border-slate-700 focus:ring-[#0066CC]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 font-medium">{errors.message.message}</p>
                    )}
                  </div>

                  {/* LGPD Consent Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register('consent')}
                        className="mt-0.5 rounded border-slate-300 dark:border-slate-600 text-[#0066CC] focus:ring-[#0066CC]"
                      />
                      <span>
                        Concordo com o tratamento dos dados fornecidos para fins de contato comercial e agendamento da demonstração do 4XML, de acordo com a{' '}
                        <a href="/politica-de-privacidade" target="_blank" className="text-[#0066CC] dark:text-[#00D2FF] underline">
                          Política de Privacidade
                        </a>.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 font-medium">{errors.consent.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#0066CC] hover:bg-[#0052A3] disabled:bg-slate-400 text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Processando solicitação...</span>
                        </>
                      ) : (
                        <>
                          <span>Solicitar Demonstração Gratuita</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
