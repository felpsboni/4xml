import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Users, 
  BookOpen, 
  HelpCircle, 
  BarChart3, 
  LogOut, 
  ExternalLink, 
  Search, 
  Filter, 
  Download, 
  Trash2, 
  Edit3, 
  Plus, 
  CheckCircle2, 
  Clock, 
  Phone, 
  Mail, 
  Building2, 
  Calendar, 
  Eye, 
  X, 
  Save, 
  Tag, 
  Layers,
  FileSpreadsheet
} from 'lucide-react';
import { 
  getCurrentUser, 
  adminLogout, 
  getLeads, 
  updateLeadStatus, 
  deleteLead,
  getBlogPosts,
  saveBlogPost,
  deleteBlogPost,
  getFaqs,
  saveFaq,
  deleteFaq
} from '../../lib/storage';
import { assetUrl } from '../../lib/utils';
import { Lead, BlogPost, FaqItem, LeadStatus } from '../../types';

export const AdminDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();

  const [activeTab, setActiveTab] = useState<'leads' | 'blog' | 'faqs' | 'stats'>('leads');

  // Leads State
  const [leads, setLeads] = useState<Lead[]>([]);
  const [leadSearch, setLeadSearch] = useState('');
  const [leadStatusFilter, setLeadStatusFilter] = useState<string>('todos');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [leadNotes, setLeadNotes] = useState('');

  // Blog State
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<Partial<BlogPost> | null>(null);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);

  // FAQ State
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [editingFaq, setEditingFaq] = useState<Partial<FaqItem> | null>(null);
  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      navigate('/admin/login');
      return;
    }
    loadData();
  }, [currentUser, navigate]);

  const loadData = () => {
    setLeads(getLeads());
    setBlogPosts(getBlogPosts());
    setFaqs(getFaqs());
  };

  const handleLogout = () => {
    adminLogout();
    navigate('/admin/login');
  };

  // Lead actions
  const handleStatusChange = (id: string, newStatus: LeadStatus) => {
    updateLeadStatus(id, newStatus, selectedLead?.id === id ? leadNotes : undefined);
    loadData();
    if (selectedLead && selectedLead.id === id) {
      setSelectedLead({ ...selectedLead, status: newStatus });
    }
  };

  const handleSaveLeadNotes = () => {
    if (!selectedLead) return;
    updateLeadStatus(selectedLead.id, selectedLead.status, leadNotes);
    loadData();
    alert('Anotação interna do lead salva com sucesso!');
  };

  const handleDeleteLead = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir permanentemente este lead?')) {
      deleteLead(id);
      loadData();
      if (selectedLead?.id === id) setSelectedLead(null);
    }
  };

  const exportLeadsCSV = () => {
    if (leads.length === 0) return alert('Nenhum lead para exportar.');
    const headers = ['ID', 'Data/Hora', 'Nome', 'Email', 'Telefone', 'Empresa', 'CNPJ', 'Segmento', 'Volume Mensal', 'Status', 'Mensagem'];
    const rows = leads.map(l => [
      l.id,
      new Date(l.createdAt).toLocaleString('pt-BR'),
      `"${l.name}"`,
      `"${l.email}"`,
      `"${l.phone}"`,
      `"${l.company}"`,
      `"${l.cnpj || ''}"`,
      `"${l.businessArea}"`,
      `"${l.monthlyDocuments || ''}"`,
      `"${l.status}"`,
      `"${l.message.replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `leads_4xml_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Blog actions
  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPost?.title || !editingPost?.content) {
      return alert('Preencha o título e conteúdo do artigo.');
    }

    const postToSave: BlogPost = {
      id: editingPost.id || `post-${Date.now()}`,
      title: editingPost.title,
      slug: editingPost.slug || editingPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      excerpt: editingPost.excerpt || '',
      content: editingPost.content,
      coverImage: editingPost.coverImage || '/images/mockup3.png',
      category: editingPost.category || 'Automação Fiscal',
      tags: Array.isArray(editingPost.tags) ? editingPost.tags : (editingPost.tags as any || '').split(',').map((t: string) => t.trim()),
      author: editingPost.author || {
        name: currentUser?.name || 'Equipe 4XML Fabritech',
        role: 'Consultoria Especializada'
      },
      publishedAt: editingPost.publishedAt || new Date().toISOString(),
      readTime: editingPost.readTime || '5 min'
    };

    saveBlogPost(postToSave);
    loadData();
    setIsBlogModalOpen(false);
    setEditingPost(null);
  };

  const handleDeletePost = (id: string) => {
    if (window.confirm('Deseja excluir este artigo?')) {
      deleteBlogPost(id);
      loadData();
    }
  };

  // FAQ actions
  const handleSaveFaq = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingFaq?.question || !editingFaq?.answer) {
      return alert('Preencha a pergunta e a resposta.');
    }

    const faqToSave: FaqItem = {
      id: editingFaq.id || `faq-${Date.now()}`,
      question: editingFaq.question,
      answer: editingFaq.answer,
      category: editingFaq.category || 'Geral'
    };

    saveFaq(faqToSave);
    loadData();
    setIsFaqModalOpen(false);
    setEditingFaq(null);
  };

  const handleDeleteFaq = (id: string) => {
    if (window.confirm('Deseja excluir esta pergunta do FAQ?')) {
      deleteFaq(id);
      loadData();
    }
  };

  // Filtered Leads
  const filteredLeads = leads.filter((lead) => {
    const matchesStatus = leadStatusFilter === 'todos' || lead.status === leadStatusFilter;
    const matchesSearch =
      lead.name.toLowerCase().includes(leadSearch.toLowerCase()) ||
      lead.email.toLowerCase().includes(leadSearch.toLowerCase()) ||
      lead.company.toLowerCase().includes(leadSearch.toLowerCase()) ||
      lead.phone.includes(leadSearch);
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-body">
      
      {/* Top Admin Navbar */}
      <header className="bg-[#0A2540] text-white border-b border-slate-800 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/admin/dashboard" className="flex items-center gap-2">
              <img
                src={assetUrl('images/Logo_4xml-300x139.png')}
                alt="4XML"
                className="h-8 w-auto brightness-125"
              />
              <span className="text-xs font-mono bg-blue-600 px-2 py-0.5 rounded text-white font-bold ml-2">
                ADMIN
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link
              to="/"
              target="_blank"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white bg-white/10 px-3 py-1.5 rounded-lg transition-colors"
            >
              <span>Ver Site Público</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <div className="hidden sm:block text-right">
              <span className="block font-bold text-white">{currentUser?.name}</span>
              <span className="block text-[11px] text-slate-400">{currentUser?.email}</span>
            </div>

            <button
              onClick={handleLogout}
              className="p-2 text-slate-400 hover:text-rose-400 hover:bg-white/10 rounded-lg transition-colors"
              title="Sair do painel"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Body */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 bg-white p-2 rounded-2xl border border-slate-200 shadow-xs">
          <button
            onClick={() => setActiveTab('leads')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-colors ${
              activeTab === 'leads'
                ? 'bg-[#0066CC] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Gestão de Leads ({leads.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('blog')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-colors ${
              activeTab === 'blog'
                ? 'bg-[#0066CC] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Artigos do Blog ({blogPosts.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('faqs')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-colors ${
              activeTab === 'faqs'
                ? 'bg-[#0066CC] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Perguntas FAQ ({faqs.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('stats')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-colors ${
              activeTab === 'stats'
                ? 'bg-[#0066CC] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Visão Operacional</span>
          </button>
        </div>

        {/* TAB 1: LEADS MANAGEMENT */}
        {activeTab === 'leads' && (
          <div className="space-y-6">
            
            {/* Action & Filter Bar */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              <div className="flex flex-1 items-center gap-3">
                <div className="relative flex-1 max-w-sm">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={leadSearch}
                    onChange={(e) => setLeadSearch(e.target.value)}
                    placeholder="Buscar por nome, empresa, e-mail..."
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                  />
                </div>

                <select
                  value={leadStatusFilter}
                  onChange={(e) => setLeadStatusFilter(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                >
                  <option value="todos">Todos os Status</option>
                  <option value="novo">Novo</option>
                  <option value="contatado">Contatado</option>
                  <option value="agendado">Demonstração Agendada</option>
                  <option value="qualificado">Qualificado</option>
                  <option value="arquivado">Arquivado</option>
                </select>
              </div>

              <button
                onClick={exportLeadsCSV}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xs transition-colors shrink-0"
              >
                <Download className="w-4 h-4" />
                <span>Exportar CSV</span>
              </button>
            </div>

            {/* Leads Table & Detail Viewer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Table List */}
              <div className={`${selectedLead ? 'lg:col-span-7' : 'lg:col-span-12'} bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden`}>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-600">
                    <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200 uppercase tracking-wider text-[10px]">
                      <tr>
                        <th className="p-3.5">Data</th>
                        <th className="p-3.5">Contato / Empresa</th>
                        <th className="p-3.5">Segmento</th>
                        <th className="p-3.5">Status</th>
                        <th className="p-3.5 text-right">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredLeads.length > 0 ? (
                        filteredLeads.map((lead) => (
                          <tr
                            key={lead.id}
                            onClick={() => {
                              setSelectedLead(lead);
                              setLeadNotes(lead.notes || '');
                            }}
                            className={`hover:bg-blue-50/50 cursor-pointer transition-colors ${
                              selectedLead?.id === lead.id ? 'bg-blue-50/80 font-medium' : ''
                            }`}
                          >
                            <td className="p-3.5 whitespace-nowrap text-slate-500 font-mono text-[11px]">
                              {new Date(lead.createdAt).toLocaleDateString('pt-BR')} {new Date(lead.createdAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                            </td>
                            <td className="p-3.5">
                              <span className="font-bold text-slate-900 block">{lead.name}</span>
                              <span className="text-slate-500 text-[11px] block">{lead.company}</span>
                            </td>
                            <td className="p-3.5 whitespace-nowrap">
                              <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-medium">
                                {lead.businessArea}
                              </span>
                            </td>
                            <td className="p-3.5 whitespace-nowrap">
                              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                lead.status === 'novo' || lead.status === 'new' ? 'bg-emerald-100 text-emerald-800' :
                                lead.status === 'agendado' || lead.status === 'demonstration_scheduled' ? 'bg-blue-100 text-blue-800' :
                                lead.status === 'qualificado' || lead.status === 'qualified' ? 'bg-purple-100 text-purple-800' :
                                lead.status === 'contatado' || lead.status === 'contacted' ? 'bg-amber-100 text-amber-800' :
                                'bg-slate-100 text-slate-600'
                              }`}>
                                {lead.status === 'new' ? 'novo' :
                                 lead.status === 'contacted' ? 'contatado' :
                                 lead.status === 'demonstration_scheduled' ? 'agendado' :
                                 lead.status === 'qualified' ? 'qualificado' :
                                 lead.status === 'archived' ? 'arquivado' : lead.status}
                              </span>
                            </td>
                            <td className="p-3.5 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                              <button
                                onClick={() => handleDeleteLead(lead.id)}
                                className="p-1 text-slate-400 hover:text-rose-600 rounded transition-colors"
                                title="Excluir lead"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="p-8 text-center text-slate-400 text-xs">
                            Nenhum lead encontrado com os filtros informados.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Lead Details Sidebar */}
              {selectedLead && (
                <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-lg p-6 space-y-6 sticky top-24">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                        Lead ID: {selectedLead.id}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 font-heading">
                        {selectedLead.name}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedLead(null)}
                      className="p-1 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Status update buttons */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">Status do Atendimento:</label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {(['novo', 'contatado', 'agendado', 'qualificado', 'arquivado'] as LeadStatus[]).map((st) => (
                        <button
                          key={st}
                          onClick={() => handleStatusChange(selectedLead.id, st)}
                          className={`px-2 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                            selectedLead.status === st
                              ? 'bg-[#0066CC] text-white'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Data Details */}
                  <div className="space-y-2.5 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div>
                      <span className="font-bold text-slate-900">E-mail:</span>{' '}
                      <a href={`mailto:${selectedLead.email}`} className="text-[#0066CC] underline">
                        {selectedLead.email}
                      </a>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">Telefone / WhatsApp:</span>{' '}
                      <a
                        href={`https://wa.me/55${selectedLead.phone.replace(/\D/g, '')}?text=Ol%C3%A1%20${encodeURIComponent(selectedLead.name)}%2C%20sou%20da%20equipe%204XML%20Fabritech.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-semibold underline"
                      >
                        {selectedLead.phone}
                      </a>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">Empresa:</span> {selectedLead.company}
                    </div>
                    {selectedLead.cnpj && (
                      <div>
                        <span className="font-bold text-slate-900">CNPJ:</span> {selectedLead.cnpj}
                      </div>
                    )}
                    <div>
                      <span className="font-bold text-slate-900">Segmento:</span> {selectedLead.businessArea}
                    </div>
                    {selectedLead.monthlyDocuments && (
                      <div>
                        <span className="font-bold text-slate-900">Volume Estimado:</span> {selectedLead.monthlyDocuments}
                      </div>
                    )}
                    <div className="pt-2 border-t border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">Mensagem enviada:</span>
                      <p className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-800 italic">
                        "{selectedLead.message}"
                      </p>
                    </div>
                  </div>

                  {/* Notes input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 block">Anotações Internas da Consultoria:</label>
                    <textarea
                      rows={3}
                      value={leadNotes}
                      onChange={(e) => setLeadNotes(e.target.value)}
                      placeholder="Ex.: Cliente usa Protheus 12.1.2210. Reunião agendada com o coordenador fiscal para quinta-feira..."
                      className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                    />
                    <button
                      onClick={handleSaveLeadNotes}
                      className="w-full inline-flex items-center justify-center gap-1.5 bg-[#0066CC] hover:bg-[#0052A3] text-white py-2 rounded-xl text-xs font-bold transition-colors"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>Salvar Anotações</span>
                    </button>
                  </div>

                </div>
              )}

            </div>
          </div>
        )}

        {/* TAB 2: BLOG POSTS MANAGEMENT */}
        {activeTab === 'blog' && (
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Publicações do Blog</h3>
                <p className="text-xs text-slate-500">Crie e edite os artigos técnicos exibidos na Central de Conteúdos.</p>
              </div>
              <button
                onClick={() => {
                  setEditingPost({
                    title: '',
                    slug: '',
                    excerpt: '',
                    content: '',
                    category: 'Automação Fiscal',
                    coverImage: '/images/mockup3.png',
                    tags: ['Protheus', 'XML', 'SEFAZ'],
                    readTime: '5 min'
                  });
                  setIsBlogModalOpen(true);
                }}
                className="inline-flex items-center gap-2 bg-[#0066CC] hover:bg-[#0052A3] text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-xs transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Novo Artigo</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold bg-slate-100 text-[#0066CC] px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 font-heading line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                    <span className="text-slate-400">
                      {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setEditingPost(post);
                          setIsBlogModalOpen(true);
                        }}
                        className="p-1.5 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#0066CC] rounded-lg transition-colors"
                        title="Editar artigo"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeletePost(post.id)}
                        className="p-1.5 bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 rounded-lg transition-colors"
                        title="Excluir artigo"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: FAQ MANAGEMENT */}
        {activeTab === 'faqs' && (
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">Gestão de Perguntas Frequentes</h3>
                <p className="text-xs text-slate-500">Adicione ou ajuste as dúvidas técnicas e operacionais da seção FAQ.</p>
              </div>
              <button
                onClick={() => {
                  setEditingFaq({
                    question: '',
                    answer: '',
                    category: 'Geral'
                  });
                  setIsFaqModalOpen(true);
                }}
                className="inline-flex items-center gap-2 bg-[#0066CC] hover:bg-[#0052A3] text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-xs transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Nova Pergunta</span>
              </button>
            </div>

            <div className="space-y-3">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col sm:flex-row items-start justify-between gap-4"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold bg-blue-50 text-[#0066CC] px-2 py-0.5 rounded">
                        {faq.category}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 font-heading">
                        {faq.question}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => {
                        setEditingFaq(faq);
                        setIsFaqModalOpen(true);
                      }}
                      className="p-2 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#0066CC] rounded-lg transition-colors"
                      title="Editar FAQ"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDeleteFaq(faq.id)}
                      className="p-2 bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 rounded-lg transition-colors"
                      title="Excluir FAQ"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: OPERATIONAL STATS */}
        {activeTab === 'stats' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-slate-500 uppercase font-mono">Total de Leads</span>
                <div className="text-3xl font-bold text-slate-900 mt-2 font-heading">{leads.length}</div>
                <span className="text-[11px] text-emerald-600 font-semibold mt-1 block">Oportunidades registradas</span>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-slate-500 uppercase font-mono">Leads Novos (Pendentes)</span>
                <div className="text-3xl font-bold text-[#0066CC] mt-2 font-heading">
                  {leads.filter(l => l.status === 'novo').length}
                </div>
                <span className="text-[11px] text-blue-600 font-semibold mt-1 block">Aguardando 1º contato</span>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-slate-500 uppercase font-mono">Demos Agendadas</span>
                <div className="text-3xl font-bold text-purple-600 mt-2 font-heading">
                  {leads.filter(l => l.status === 'agendado').length}
                </div>
                <span className="text-[11px] text-purple-600 font-semibold mt-1 block">Reuniões em andamento</span>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-slate-500 uppercase font-mono">Status SEFAZ / Cockpit</span>
                <div className="text-xl font-bold text-emerald-600 mt-2 font-mono flex items-center gap-1.5">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>ONLINE 100%</span>
                </div>
                <span className="text-[11px] text-slate-500 mt-1 block">Serviços Protheus Ativos</span>
              </div>
            </div>

            <div className="bg-[#0A2540] text-white p-8 rounded-3xl border border-slate-800 shadow-xl space-y-4">
              <h3 className="text-xl font-bold font-heading">Diretrizes de Segurança & LGPD Fabritech</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                Todos os dados armazenados neste ambiente são protegidos por criptografia local e destinados unicamente para procedimentos pré-contratuais da solução 4XML. Nunca compartilhe credenciais de administrador fora do time autorizado.
              </p>
            </div>
          </div>
        )}

      </main>

      {/* Modal Create/Edit Blog */}
      {isBlogModalOpen && editingPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                {editingPost.id ? 'Editar Artigo' : 'Novo Artigo'}
              </h3>
              <button onClick={() => setIsBlogModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSavePost} className="space-y-4 pt-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Título do Artigo *</label>
                <input
                  type="text"
                  required
                  value={editingPost.title || ''}
                  onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
                  placeholder="Ex.: Como automatizar a escrituração fiscal no Protheus"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Categoria *</label>
                  <select
                    value={editingPost.category || 'Automação Fiscal'}
                    onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value as BlogPost['category'] })}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option value="Automação Fiscal">Automação Fiscal</option>
                    <option value="TOTVS Protheus">TOTVS Protheus</option>
                    <option value="Legislação & Compliance">Legislação & Compliance</option>
                    <option value="Logística & Portaria">Logística & Portaria</option>
                    <option value="Gestão & Custos">Gestão & Custos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Tempo de Leitura</label>
                  <input
                    type="text"
                    value={editingPost.readTime || '5 min'}
                    onChange={(e) => setEditingPost({ ...editingPost, readTime: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Resumo (Excerpt) *</label>
                <textarea
                  rows={2}
                  required
                  value={editingPost.excerpt || ''}
                  onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                  placeholder="Breve resumo para os cards de listagem..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Conteúdo Completo (Markdown) *</label>
                <textarea
                  rows={8}
                  required
                  value={editingPost.content || ''}
                  onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                  className="w-full p-3 font-mono text-xs bg-slate-50 border border-slate-200 rounded-xl"
                  placeholder="Use ## para subtítulos e listas com hífens..."
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsBlogModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold text-white bg-[#0066CC] hover:bg-[#0052A3] rounded-xl shadow-xs"
                >
                  Salvar Artigo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Create/Edit FAQ */}
      {isFaqModalOpen && editingFaq && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                {editingFaq.id ? 'Editar FAQ' : 'Nova Pergunta'}
              </h3>
              <button onClick={() => setIsFaqModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveFaq} className="space-y-4 pt-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Categoria *</label>
                <select
                  value={editingFaq.category || 'Geral'}
                  onChange={(e) => setEditingFaq({ ...editingFaq, category: e.target.value as FaqItem['category'] })}
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                >
                  <option value="Geral">Geral</option>
                  <option value="Integração Protheus">Integração Protheus</option>
                  <option value="Funcionalidades">Funcionalidades</option>
                  <option value="Implantação & Segurança">Implantação & Segurança</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Pergunta *</label>
                <input
                  type="text"
                  required
                  value={editingFaq.question || ''}
                  onChange={(e) => setEditingFaq({ ...editingFaq, question: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                  placeholder="Ex.: Como funciona a manifestação automática?"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Resposta Detalhada *</label>
                <textarea
                  rows={4}
                  required
                  value={editingFaq.answer || ''}
                  onChange={(e) => setEditingFaq({ ...editingFaq, answer: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                  placeholder="Explique com clareza o funcionamento técnico e operacional..."
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsFaqModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold text-white bg-[#0066CC] hover:bg-[#0052A3] rounded-xl shadow-xs"
                >
                  Salvar FAQ
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
