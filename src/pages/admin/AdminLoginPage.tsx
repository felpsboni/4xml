import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff, ShieldCheck, AlertCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { adminLogin, getCurrentUser } from '../../lib/storage';

export const AdminLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('admin@fabritech.com.br');
  const [password, setPassword] = useState('Admin4xml#2026');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // If already logged in
  React.useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    setTimeout(() => {
      const user = adminLogin(email, password);
      if (user) {
        navigate('/admin/dashboard');
      } else {
        setErrorMessage('Credenciais inválidas. Verifique seu e-mail e senha de administrador.');
        setIsLoading(false);
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#071A2D] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0066CC]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="flex justify-center mb-6">
          <Link to="/" className="inline-block">
            <img
              src="/images/Logo_4xml-300x139.png"
              alt="4XML Fabritech"
              className="h-12 w-auto object-contain brightness-125"
            />
          </Link>
        </div>

        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold font-heading text-white tracking-tight">
            Portal Administrativo 4XML
          </h1>
          <p className="text-xs text-slate-400">
            Acesso restrito para gestão de leads, blog e configurações operacionais.
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-[#0A2540] py-8 px-6 sm:px-10 shadow-2xl rounded-3xl border border-white/15 backdrop-blur-md">
          
          <form onSubmit={handleSubmit} className="space-y-5">
            {errorMessage && (
              <div className="p-3.5 bg-rose-500/20 border border-rose-500/40 rounded-xl text-xs text-rose-300 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div>
              <label htmlFor="admin-email" className="block text-xs font-bold text-slate-300 mb-1.5">
                E-mail Institucional
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="admin-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00D2FF]"
                  placeholder="admin@fabritech.com.br"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="admin-password" className="block text-xs font-bold text-slate-300">
                  Senha de Acesso
                </label>
                <Link
                  to="/admin/recuperar-senha"
                  className="text-xs text-[#00D2FF] hover:underline"
                >
                  Esqueceu a senha?
                </Link>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00D2FF]"
                  placeholder="••••••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
                  aria-label="Alternar exibição da senha"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Quick Demo Helper Hint */}
            <div className="p-3 bg-blue-900/30 border border-blue-700/50 rounded-xl text-[11px] text-blue-200">
              <div className="font-semibold text-cyan-300 mb-0.5">Credenciais Padrão do Administrador:</div>
              <div>E-mail: <code className="text-white font-mono bg-blue-950/80 px-1 py-0.5 rounded">admin@fabritech.com.br</code></div>
              <div>Senha: <code className="text-white font-mono bg-blue-950/80 px-1 py-0.5 rounded">Admin4xml#2026</code></div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#0066CC] hover:bg-[#0052A3] focus:outline-none focus:ring-4 focus:ring-blue-400/40 shadow-lg transition-all cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Autenticando...</span>
                  </>
                ) : (
                  <>
                    <span>Entrar no Painel</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-700/80 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar ao site público</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};
