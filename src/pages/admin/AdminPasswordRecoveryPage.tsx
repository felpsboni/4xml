import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle2, Send } from 'lucide-react';
import { assetUrl } from '../../lib/utils';

export const AdminPasswordRecoveryPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#071A2D] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="flex justify-center mb-6">
          <Link to="/">
            <img
              src={assetUrl('images/Logo_4xml-300x139.png')}
              alt="4XML Fabritech"
              className="h-12 w-auto object-contain brightness-125"
            />
          </Link>
        </div>

        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold font-heading text-white">Recuperação de Senha</h1>
          <p className="text-xs text-slate-400">
            Informe seu e-mail corporativo cadastrado para redefinir suas credenciais.
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-[#0A2540] py-8 px-6 sm:px-10 shadow-2xl rounded-3xl border border-white/15">
          {isSubmitted ? (
            <div className="text-center space-y-4 py-4">
              <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-white">Instruções Enviadas</h2>
              <p className="text-xs text-slate-300">
                Se o e-mail <strong>{email}</strong> estiver cadastrado em nossa base administrativa, você receberá em instantes um link seguro para redefinição.
              </p>
              <div className="pt-4">
                <Link
                  to="/admin/login"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00D2FF] hover:underline"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Voltar para tela de login</span>
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="recovery-email" className="block text-xs font-bold text-slate-300 mb-1.5">
                  E-mail do Administrador
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="recovery-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00D2FF]"
                    placeholder="admin@fabritech.com.br"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#0066CC] hover:bg-[#0052A3] transition-all cursor-pointer shadow-md"
              >
                <span>Enviar Link de Recuperação</span>
                <Send className="w-4 h-4" />
              </button>

              <div className="pt-4 border-t border-slate-700/80 text-center">
                <Link
                  to="/admin/login"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Voltar ao Login</span>
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
