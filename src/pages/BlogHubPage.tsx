import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { WhatsAppFloat } from '../components/layout/WhatsAppFloat';
import { CookieConsent } from '../components/layout/CookieConsent';
import { Search, Calendar, Clock, ArrowRight, Tag, BookOpen, ChevronRight } from 'lucide-react';
import { getBlogPosts } from '../lib/storage';
import { BlogPost } from '../types';

export const BlogHubPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const posts = getBlogPosts();
  const categories = [
    'Todos',
    'Automação Fiscal',
    'TOTVS Protheus',
    'Legislação & Compliance',
    'Logística & Portaria',
    'Gestão & Custos'
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#07121E] transition-colors duration-200">
      <Header />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-8" aria-label="Navegação estrutural">
            <Link to="/" className="hover:text-[#0066CC] dark:hover:text-[#00D2FF]">Início</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-800 dark:text-slate-200 font-semibold">Conteúdos & Blog</span>
          </nav>

          {/* Page Banner Header */}
          <div className="bg-[#0A2540] dark:bg-[#091B2F] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden mb-12 border border-transparent dark:border-slate-800">
            <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="text-xs font-mono text-[#00D2FF] font-bold uppercase tracking-widest">
                Inteligência Fiscal & Tecnologia
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
                Central de Conteúdos 4XML
              </h1>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-body">
                Artigos práticos, guias de escrituração fiscal e estratégias para maximizar a eficiência da sua operação no TOTVS Protheus.
              </p>
            </div>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="bg-white dark:bg-[#0B1E32] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs mb-10 space-y-4">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              
              {/* Search input */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Pesquisar por tema, norma ou palavra-chave..."
                  className="w-full pl-11 pr-4 py-2.5 bg-slate-50 dark:bg-[#0E253E] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:bg-white dark:focus:bg-[#112F4E] focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                />
              </div>

              {/* Counter */}
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Exibindo <strong>{filteredPosts.length}</strong> {filteredPosts.length === 1 ? 'artigo' : 'artigos'}
              </div>
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#0066CC] text-white'
                      : 'bg-slate-100 dark:bg-[#0E253E] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white dark:bg-[#0B1E32] rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-xl dark:hover:shadow-cyan-950/20 hover:border-blue-200 dark:hover:border-slate-700 transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  {/* Cover */}
                  <div className="aspect-16/9 bg-slate-100 dark:bg-slate-900 overflow-hidden relative">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold bg-[#0A2540] text-white px-3 py-1 rounded-full shadow-md font-mono">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#0066CC] dark:group-hover:text-[#00D2FF] transition-colors leading-snug font-heading">
                        <Link to={`/conteudos/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed font-body">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        {post.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] bg-slate-100 dark:bg-[#0E253E] text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          {post.author.name}
                        </span>

                        <Link
                          to={`/conteudos/${post.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#0066CC] dark:text-[#00D2FF] hover:text-[#0052A3] dark:hover:text-cyan-300"
                        >
                          <span>Ler agora</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-[#0B1E32] rounded-2xl p-12 text-center border border-slate-200 dark:border-slate-800 space-y-3">
              <p className="text-base text-slate-600 dark:text-slate-300 font-medium">
                Nenhum artigo encontrado para os filtros selecionados.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Todos');
                }}
                className="text-xs font-bold text-[#0066CC] dark:text-[#00D2FF] hover:underline cursor-pointer"
              >
                Limpar filtros e ver todos os artigos
              </button>
            </div>
          )}

        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
      <CookieConsent />
    </div>
  );
};
