import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, BookOpen } from 'lucide-react';
import { getBlogPosts } from '../../lib/storage';

export const BlogPreviewSection: React.FC = () => {
  const posts = getBlogPosts().slice(0, 3);

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#07121E] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-4">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] dark:text-[#00D2FF] font-mono">
              Central de Conhecimento Fiscal
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading">
              Artigos, boas práticas e inteligência tributária.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 font-body">
              Conteúdos práticos elaborados pela equipe Fabritech para apoiar gestores fiscais, compradores e profissionais de TI.
            </p>
          </div>

          <Link
            to="/conteudos"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0066CC] dark:text-[#00D2FF] hover:text-[#0052A3] dark:hover:text-white bg-white dark:bg-[#0B1E32] px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all shrink-0"
          >
            <span>Acessar todos os conteúdos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-[#0B1E32] rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-xl dark:hover:shadow-cyan-950/20 hover:border-blue-200 dark:hover:border-slate-700 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Cover Image Container */}
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

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
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

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#0066CC] dark:group-hover:text-[#00D2FF] transition-colors leading-snug font-heading">
                    <Link to={`/conteudos/${post.slug}`} className="focus:outline-none">
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed font-body">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Por {post.author.name}
                  </span>

                  <Link
                    to={`/conteudos/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0066CC] dark:text-[#00D2FF] hover:text-[#0052A3] dark:hover:text-cyan-300"
                    aria-label={`Ler artigo completo: ${post.title}`}
                  >
                    <span>Ler artigo</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
