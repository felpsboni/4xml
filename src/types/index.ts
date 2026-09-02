export type LeadStatus =
  | 'novo'
  | 'contatado'
  | 'agendado'
  | 'qualificado'
  | 'arquivado'
  | 'new'
  | 'contacted'
  | 'demonstration_scheduled'
  | 'qualified'
  | 'archived';

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  cnpj?: string;
  businessArea: string;
  monthlyDocuments?: string;
  message: string;
  consent: boolean;
  status: LeadStatus;
  notes?: string;
  createdAt: string;
  source: string;
}

export type BlogCategory = 'Automação Fiscal' | 'TOTVS Protheus' | 'Legislação & Compliance' | 'Logística & Portaria' | 'Gestão & Custos';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  coverImage: string;
  readTime: string;
  publishedAt: string;
  tags: string[];
  featured?: boolean;
}

export type FaqCategory = 'Geral' | 'Integração Protheus' | 'Funcionalidades' | 'Implantação & Segurança';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: FaqCategory;
}

export type FaqItem = FAQItem;

export interface Feature {
  id: string;
  title: string;
  description: string;
  benefit: string;
  iconName: string;
}

export interface FeatureCategory {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  features: Feature[];
}

export interface SystemScreen {
  id: string;
  title: string;
  category: 'Cockpit Centralizado' | 'Entrada de Documentos' | 'Controle de Portaria' | 'Conferência Cega' | 'Workflow de Inconsistências' | 'Relatórios Gerenciais';
  description: string;
  image: string;
  highlights: string[];
}

export interface MetricItem {
  id: string;
  number: string;
  prefix?: string;
  suffix?: string;
  label: string;
  qualifier: string;
  icon: string;
}

export interface WorkflowStage {
  step: number;
  title: string;
  description: string;
  detail: string;
  icon: string;
}

export interface ImplementationStep {
  step: number;
  title: string;
  description: string;
  deliverables: string[];
}
