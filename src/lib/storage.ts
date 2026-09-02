import { BlogPost, FAQItem, Lead } from '../types';
import { INITIAL_BLOG_POSTS, FAQ_ITEMS, INITIAL_LEADS } from '../data/mockData';

const LEADS_KEY = '4xml_leads_data_v1';
const POSTS_KEY = '4xml_blog_posts_v1';
const FAQS_KEY = '4xml_faqs_data_v1';
const ADMIN_AUTH_KEY = '4xml_admin_session_v1';

// Initialize storage if empty
export function initStorage() {
  if (typeof window === 'undefined') return;

  if (!localStorage.getItem(LEADS_KEY)) {
    localStorage.setItem(LEADS_KEY, JSON.stringify(INITIAL_LEADS));
  }
  if (!localStorage.getItem(POSTS_KEY)) {
    localStorage.setItem(POSTS_KEY, JSON.stringify(INITIAL_BLOG_POSTS));
  }
  if (!localStorage.getItem(FAQS_KEY)) {
    localStorage.setItem(FAQS_KEY, JSON.stringify(FAQ_ITEMS));
  }
}

// Leads API
export function getLeads(): Lead[] {
  initStorage();
  try {
    const data = localStorage.getItem(LEADS_KEY);
    return data ? JSON.parse(data) : INITIAL_LEADS;
  } catch {
    return INITIAL_LEADS;
  }
}

export function saveLead(leadData: Omit<Lead, 'id' | 'createdAt' | 'status'>): Lead {
  initStorage();
  const leads = getLeads();
  
  // Anti-duplicate check: check if same email submitted within last 2 minutes
  const recentDuplicate = leads.find(
    l => l.email.toLowerCase() === leadData.email.toLowerCase() &&
    (Date.now() - new Date(l.createdAt).getTime()) < 120000
  );
  
  if (recentDuplicate) {
    throw new Error('Sua solicitação já foi recebida recentemente. Nossa equipe entrará em contato em breve!');
  }

  const newLead: Lead = {
    ...leadData,
    id: `lead-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    status: 'new',
    createdAt: new Date().toISOString()
  };

  const updated = [newLead, ...leads];
  localStorage.setItem(LEADS_KEY, JSON.stringify(updated));
  return newLead;
}

export function updateLeadStatus(id: string, status: Lead['status'], notes?: string): Lead | null {
  const leads = getLeads();
  const index = leads.findIndex(l => l.id === id);
  if (index === -1) return null;

  leads[index] = {
    ...leads[index],
    status,
    ...(notes !== undefined ? { notes } : {})
  };

  localStorage.setItem(LEADS_KEY, JSON.stringify(leads));
  return leads[index];
}

export function deleteLead(id: string): boolean {
  const leads = getLeads();
  const filtered = leads.filter(l => l.id !== id);
  localStorage.setItem(LEADS_KEY, JSON.stringify(filtered));
  return true;
}

// Blog Posts API
export function getBlogPosts(): BlogPost[] {
  initStorage();
  try {
    const data = localStorage.getItem(POSTS_KEY);
    return data ? JSON.parse(data) : INITIAL_BLOG_POSTS;
  } catch {
    return INITIAL_BLOG_POSTS;
  }
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const posts = getBlogPosts();
  return posts.find(p => p.slug === slug) || null;
}

export function saveBlogPost(post: BlogPost): void {
  const posts = getBlogPosts();
  const index = posts.findIndex(p => p.id === post.id);
  if (index >= 0) {
    posts[index] = post;
  } else {
    posts.unshift(post);
  }
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
}

export function deleteBlogPost(id: string): boolean {
  const posts = getBlogPosts();
  const filtered = posts.filter(p => p.id !== id);
  localStorage.setItem(POSTS_KEY, JSON.stringify(filtered));
  return true;
}

// FAQs API
export function getFaqs(): FAQItem[] {
  initStorage();
  try {
    const data = localStorage.getItem(FAQS_KEY);
    return data ? JSON.parse(data) : FAQ_ITEMS;
  } catch {
    return FAQ_ITEMS;
  }
}

export function saveFaq(faq: FAQItem): void {
  const faqs = getFaqs();
  const index = faqs.findIndex(f => f.id === faq.id);
  if (index >= 0) {
    faqs[index] = faq;
  } else {
    faqs.push(faq);
  }
  localStorage.setItem(FAQS_KEY, JSON.stringify(faqs));
}

export function deleteFaq(id: string): boolean {
  const faqs = getFaqs();
  const filtered = faqs.filter(f => f.id !== id);
  localStorage.setItem(FAQS_KEY, JSON.stringify(filtered));
  return true;
}

// Admin Auth Session
export interface AdminSession {
  email: string;
  name: string;
  role: string;
  token: string;
  expiresAt: number;
}

export function getAdminSession(): AdminSession | null {
  if (typeof window === 'undefined') return null;
  try {
    const sessionStr = localStorage.getItem(ADMIN_AUTH_KEY);
    if (!sessionStr) return null;
    const session: AdminSession = JSON.parse(sessionStr);
    if (Date.now() > session.expiresAt) {
      clearAdminSession();
      return null;
    }
    return session;
  } catch {
    return null;
  }
}

export function getCurrentUser(): AdminSession | null {
  return getAdminSession();
}

export function adminLogin(email: string, pass: string): AdminSession | null {
  if (
    (email.trim().toLowerCase() === 'admin@fabritech.com.br' && pass === 'Admin4xml#2026') ||
    (email.trim().toLowerCase() === 'marina.bonifacio@fabritech.com.br' && pass === 'Admin4xml#2026')
  ) {
    const session: AdminSession = {
      email: email.trim().toLowerCase(),
      name: email.includes('marina') ? 'Marina Bonifácio' : 'Administrador Fabritech',
      role: 'Super Admin',
      token: `tok_${Date.now()}_${Math.random().toString(36).substring(2)}`,
      expiresAt: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
    };
    setAdminSession(session);
    return session;
  }
  return null;
}

export function adminLogout(): void {
  clearAdminSession();
}

export function setAdminSession(session: AdminSession): void {
  localStorage.setItem(ADMIN_AUTH_KEY, JSON.stringify(session));
}

export function clearAdminSession(): void {
  localStorage.removeItem(ADMIN_AUTH_KEY);
}

// CSV Export Helper
export function exportLeadsToCsv(leads: Lead[]): void {
  const headers = ['ID', 'Data Criação', 'Nome', 'Email', 'Telefone', 'Empresa', 'CNPJ', 'Área', 'Documentos/Mês', 'Status', 'Mensagem', 'Observações'];
  const rows = leads.map(l => [
    `"${l.id}"`,
    `"${new Date(l.createdAt).toLocaleString('pt-BR')}"`,
    `"${l.name.replace(/"/g, '""')}"`,
    `"${l.email.replace(/"/g, '""')}"`,
    `"${l.phone.replace(/"/g, '""')}"`,
    `"${l.company.replace(/"/g, '""')}"`,
    `"${(l.cnpj || '').replace(/"/g, '""')}"`,
    `"${l.businessArea.replace(/"/g, '""')}"`,
    `"${(l.monthlyDocuments || '').replace(/"/g, '""')}"`,
    `"${l.status}"`,
    `"${l.message.replace(/"/g, '""')}"`,
    `"${(l.notes || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `leads-4xml-${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
