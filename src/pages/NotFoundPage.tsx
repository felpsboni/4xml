import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { WhatsAppFloat } from '../components/layout/WhatsAppFloat';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1 flex items-center justify-center p-6 pt-32 pb-24">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl text-center max-w-md space-y-6">
          <span className="text-6xl font-extrabold text-[#0066CC] font-mono block">
            404
          </span>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-slate-900 font-heading">
              Página Não Encontrada
            </h1>
            <p className="text-sm text-slate-600 font-body">
              O endereço que você tentou acessar não existe ou foi transferido.
            </p>
          </div>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#0066CC] hover:bg-[#0052A3] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Voltar ao Início</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};
