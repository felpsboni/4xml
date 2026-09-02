import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { WhatsAppFloat } from '../components/layout/WhatsAppFloat';
import { CookieConsent } from '../components/layout/CookieConsent';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  CheckCircle, 
  ChevronRight, 
  BookOpen, 
  User,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';
import { getBlogPostBySlug, getBlogPosts } from '../lib/storage';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = slug ? getBlogPostBySlug(slug) : null;
  const allPosts = getBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <main className="flex-1 flex items-center justify-center p-6 pt-32">
          <div className="bg-white p-10 rounded-2xl border border-slate-200 text-center max-w-md space-y-4 shadow-xl">
            <h1 className="text-2xl font-bold text-slate-900 font-heading">Artigo Não Encontrado</h1>
            <p className="text-sm text-slate-600 font-body">O artigo que você procurava não existe ou foi atualizado.</p>
            <Link
              to="/conteudos"
              className="inline-flex items-center gap-2 bg-[#0066CC] text-white px-5 py-2.5 rounded-xl font-bold text-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para Conteúdos</span>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link do artigo copiado para a área de transferência!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#07121E] transition-colors duration-200">
      <Header />

      <main className="flex-1 pt-32 pb-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-8" aria-label="Navegação estrutural">
            <Link to="/" className="hover:text-[#0066CC] dark:hover:text-[#00D2FF]">Início</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/conteudos" className="hover:text-[#0066CC] dark:hover:text-[#00D2FF]">Conteúdos</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-800 dark:text-slate-200 font-semibold truncate max-w-xs">{post.title}</span>
          </nav>

          {/* Article Header */}
          <div className="space-y-4 pb-8 border-b border-slate-200 dark:border-slate-800">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold bg-[#0A2540] text-white px-3 py-1 rounded-full font-mono">
                {post.category}
              </span>
              <span className="text-xs text-slate-400">•</span>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                <span>{new Date(post.publishedAt).toLocaleDateString('pt-BR')}</span>
              </div>
              <span className="text-xs text-slate-400">•</span>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime} de leitura</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-body">
              {post.excerpt}
            </p>

            {/* Author bar & Share */}
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-950 text-[#0066CC] dark:text-[#00D2FF] flex items-center justify-center font-bold font-heading">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-slate-900 dark:text-white">{post.author.name}</span>
                  <span className="block text-xs text-slate-500 dark:text-slate-400">{post.author.role}</span>
                </div>
              </div>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
                aria-label="Compartilhar este artigo"
              >
                <Share2 className="w-4 h-4" />
                <span>Compartilhar</span>
              </button>
            </div>
          </div>

          {/* Featured Cover Image */}
          <div className="my-8 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 aspect-16/9 bg-slate-900">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Formatted Content Body */}
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed font-body space-y-6 text-base">
            {post.content.split('\n\n').map((paragraph, index) => {
              const trimmed = paragraph.trim();
              if (trimmed.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-heading mt-10 mb-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                    {trimmed.replace('## ', '')}
                  </h2>
                );
              }
              if (trimmed.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-bold text-slate-900 dark:text-white font-heading mt-6 mb-3">
                    {trimmed.replace('### ', '')}
                  </h3>
                );
              }
              if (trimmed.startsWith('- ')) {
                const listItems = trimmed.split('\n').filter(i => i.startsWith('- '));
                return (
                  <ul key={index} className="space-y-2 my-4 pl-4 list-disc text-slate-700 dark:text-slate-300">
                    {listItems.map((item, idx) => (
                      <li key={idx}>
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (trimmed.startsWith('1. ') || trimmed.startsWith('2. ') || trimmed.startsWith('3. ')) {
                const listItems = trimmed.split('\n').filter(i => /^\d+\.\s/.test(i));
                return (
                  <ol key={index} className="space-y-2 my-4 pl-4 list-decimal text-slate-700 dark:text-slate-300">
                    {listItems.map((item, idx) => (
                      <li key={idx}>
                        {item.replace(/^\d+\.\s/, '')}
                      </li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={index} className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase font-mono mr-2">Tags:</span>
            {post.tags.map((tag, idx) => (
              <span key={idx} className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-lg font-medium">
                #{tag}
              </span>
            ))}
          </div>

          {/* Conversion CTA Box inside Article */}
          <div className="my-12 p-8 bg-[#0A2540] text-white rounded-3xl relative overflow-hidden shadow-xl border border-transparent dark:border-slate-800">
            <div className="relative z-10 space-y-4 max-w-2xl">
              <span className="text-xs font-mono text-[#00D2FF] font-bold uppercase tracking-widest">
                Automação Fiscal 4XML para TOTVS Protheus
              </span>
              <h3 className="text-2xl font-bold font-heading">
                Pronto para automatizar a escrituração fiscal da sua empresa?
              </h3>
              <p className="text-sm text-slate-300">
                Elimine até 70% do tempo gasto com digitação manual de notas e proteja seu negócio contra inconsistências de TES e fornecedores.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/#contato"
                  className="inline-flex items-center gap-2 bg-[#0066CC] hover:bg-[#0052A3] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Solicitar demonstração gratuita</span>
                </Link>
                <a
                  href="https://wa.me/5511941883913?text=Ol%C3%A1%2C%20li%20o%20artigo%20sobre%20automa%C3%A7%C3%A3o%20e%20gostaria%20de%20tirar%20d%C3%BAvidas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm border border-white/20"
                >
                  <span>Conversar no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-6">
                Artigos Relacionados
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    to={`/conteudos/${related.slug}`}
                    className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B1E32] hover:bg-white dark:hover:bg-[#0E253E] hover:border-blue-300 dark:hover:border-slate-700 hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-bold font-mono text-[#0066CC] dark:text-[#00D2FF] uppercase block mb-1">
                        {related.category}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#0066CC] dark:group-hover:text-[#00D2FF] transition-colors leading-snug">
                        {related.title}
                      </h4>
                    </div>
                    <span className="text-xs font-semibold text-[#0066CC] dark:text-[#00D2FF] mt-4 block">
                      Ler este artigo →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </article>
      </main>

      <Footer />
      <WhatsAppFloat />
      <CookieConsent />
    </div>
  );
};
