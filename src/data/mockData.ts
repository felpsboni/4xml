import { BlogPost, FAQItem, FeatureCategory, ImplementationStep, MetricItem, SystemScreen, WorkflowStage } from '../types';

export const METRICS_DATA: MetricItem[] = [
  {
    id: 'cost-reduction',
    number: '70',
    prefix: 'Até ',
    suffix: '%',
    label: 'Redução de Custos',
    qualifier: 'Redução informada nos custos operacionais com escrituração fiscal e retrabalho manual.',
    icon: 'TrendingDown'
  },
  {
    id: 'cnpjs',
    number: '1000',
    prefix: 'Mais de ',
    suffix: '+',
    label: 'CNPJs Atendidos',
    qualifier: 'Empresas e filiais em todo o Brasil operando com a tecnologia 4XML integrada ao Protheus.',
    icon: 'Building2'
  },
  {
    id: 'features-reports',
    number: '50',
    prefix: 'Mais de ',
    suffix: '+',
    label: 'Facilitadores e Relatórios',
    qualifier: 'Ferramentas de auditoria, cruzamentos fiscais e relatórios gerenciais nativos da plataforma.',
    icon: 'FileSpreadsheet'
  },
  {
    id: 'deployment-time',
    number: '3',
    prefix: '~',
    suffix: ' dias',
    label: 'Implantação Estimada',
    qualifier: 'Prazo informado conforme diagnóstico prévio, escopo técnico e ambiente do cliente.',
    icon: 'Clock'
  },
  {
    id: 'uptime',
    number: '99.9',
    suffix: '%',
    label: 'Disponibilidade',
    qualifier: 'Disponibilidade informada para infraestrutura em nuvem e monitoramento contínuo.',
    icon: 'ShieldCheck'
  }
];

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    step: 1,
    title: 'Captura Automática',
    description: 'Busca contínua na SEFAZ e prefeituras',
    detail: 'O 4XML monitora e captura em tempo real NF-e, CT-e e NFS-e emitidos contra todos os CNPJs da sua empresa, dispensando o envio manual de arquivos por e-mail.',
    icon: 'CloudDownload'
  },
  {
    step: 2,
    title: 'Validação de Informações',
    description: 'Conferência de autenticidade e status',
    detail: 'Auditoria instantânea de schema XML, chave de acesso, assinatura digital e status na SEFAZ (autorizada, cancelada, denegada ou carta de correção).',
    icon: 'FileCheck'
  },
  {
    step: 3,
    title: 'Identificação de Inconsistências',
    description: 'Workflow preventivo de divergências',
    detail: 'Cruzamento antecipado com o Protheus antes da escrituração: checa amarração de produtos, pedidos de compra, divergências de preços, alíquotas e fornecedores.',
    icon: 'AlertTriangle'
  },
  {
    step: 4,
    title: 'Classificação da Nota',
    description: 'Parametrização inteligente de TES e CFOP',
    detail: 'Sugestão e preenchimento automático das regras fiscais (TES, CFOP, Centro de Custo, Natureza Financeira) com base no histórico e regras de negócio da empresa.',
    icon: 'Layers'
  },
  {
    step: 5,
    title: 'Entrada no TOTVS Protheus',
    description: 'Geração de Pré-Nota ou Documento de Entrada',
    detail: 'Lançamento estruturado direto no Protheus (MATA103 / MATA140) com total integridade de dados, sem redigitação de itens e com rastreabilidade completa.',
    icon: 'Database'
  }
];

export const FEATURE_CATEGORIES: FeatureCategory[] = [
  {
    id: 'captura-organizacao',
    title: 'Captura e Organização',
    shortDesc: 'Centralização e recepção em tempo real de documentos fiscais',
    icon: 'Inbox',
    features: [
      {
        id: 'busca-automatica',
        title: 'Busca automática de NF-e, CT-e e NFS-e',
        description: 'Consulta automatizada periódica junto à SEFAZ nacional e prefeituras conveniadas através de certificado digital A1.',
        benefit: 'Elimina a perda de notas fiscais e a dependência de fornecedores enviarem arquivos por e-mail.',
        iconName: 'Search'
      },
      {
        id: 'recebimento-automatico',
        title: 'Recebimento automático de XML',
        description: 'Repositório seguro que recepciona, descompacta e processa lotes de XMLs via e-mail dedicado ou upload direto.',
        benefit: 'Centraliza todos os arquivos eletrônicos em um único canal organizado e padronizado.',
        iconName: 'MailCheck'
      },
      {
        id: 'manifestacao-destinatario',
        title: 'Manifestação do destinatário automatizada',
        description: 'Emissão de eventos de Ciência da Emissão, Confirmação da Operação, Desconhecimento e Operação não Realizada diretamente na SEFAZ.',
        benefit: 'Garante compliance fiscal obrigatório e proteção jurídica contra fraudes e notas frias emitidas contra o CNPJ.',
        iconName: 'FileBadge'
      },
      {
        id: 'armazenamento-fiscal',
        title: 'Armazenamento seguro de documentos fiscais',
        description: 'Guarda em nuvem dos arquivos XML e DANFEs em formato original com indexação e pesquisa avançada por 5 anos.',
        benefit: 'Atende às exigências da legislação tributária e facilita auditorias internas e externas instantaneamente.',
        iconName: 'Archive'
      },
      {
        id: 'cockpit-centralizado',
        title: 'Cockpit centralizado de documentos',
        description: 'Painel visual de controle gerencial que exibe o status de cada nota: pendente, em conferência, pré-nota gerada ou escriturada.',
        benefit: 'Visão 360° da operação fiscal de todas as filiais e empresas em uma tela intuitiva.',
        iconName: 'LayoutDashboard'
      }
    ]
  },
  {
    id: 'escrituracao-integracao',
    title: 'Escrituração e Integração Protheus',
    shortDesc: 'Geração nativa de documentos sem redigitação no ERP',
    icon: 'Layers',
    features: [
      {
        id: 'integracao-protheus',
        title: 'Integração completa com TOTVS Protheus',
        description: 'Comunicação direta com o dicionário de dados e rotinas padrão do Protheus sem necessidade de desenvolvimento customizado complexo.',
        benefit: 'Lançamento sem intervenção humana manual e compatível com as versões atuais do Protheus.',
        iconName: 'Cpu'
      },
      {
        id: 'classificacao-notas',
        title: 'Classificação automatizada de notas',
        description: 'Regras parametrizáveis que associam itens da nota fiscal a TES (Tipo de Entrada e Saída), CFOP, Conta Contábil e Centro de Custo.',
        benefit: 'Reduz o tempo de classificação contábil/fiscal de minutos para segundos por documento.',
        iconName: 'Sparkles'
      },
      {
        id: 'geracao-pre-nota',
        title: 'Geração de Pré-Nota (MATA140)',
        description: 'Criação automática do registro de pré-nota fiscal no Protheus com o espelho fiel do XML.',
        benefit: 'Permite que a equipe fiscal valide dados antes da classificação definitiva no estoque e financeiro.',
        iconName: 'FileEdit'
      },
      {
        id: 'geracao-doc-entrada',
        title: 'Geração de Documento de Entrada (MATA103)',
        description: 'Geração direta e classificação do Documento de Entrada com atualização de estoque, contas a pagar e livros fiscais.',
        benefit: 'Entrada 100% automatizada para compras regulares e notas parametrizadas.',
        iconName: 'FileSpreadsheet'
      },
      {
        id: 'integracao-pedidos',
        title: 'Integração com Pedidos de Compra (SC7)',
        description: 'Vinculação automática dos itens do XML com os itens e saldo dos Pedidos de Compra cadastrados no Protheus.',
        benefit: 'Bloqueia desvios de preços, quantidades excedentes e itens fora do pedido acordado.',
        iconName: 'ShoppingCart'
      },
      {
        id: 'frete-fornecedor',
        title: 'Gestão de Frete e Conhecimento de Transporte (CT-e)',
        description: 'Amarração do CT-e à NF-e de origem e geração automática da despesa de frete no documento de entrada.',
        benefit: 'Agiliza a conciliação logística e evita duplicidade no lançamento de fretes.',
        iconName: 'Truck'
      },
      {
        id: 'alcadas-aprovacao',
        title: 'Alçadas de aprovação e governança',
        description: 'Controle de níveis hierárquicos para liberação de notas com pequenas divergências ou valores expressivos.',
        benefit: 'Governança corporativa rígida sobre pagamentos e entradas fora do padrão.',
        iconName: 'UserCheck'
      }
    ]
  },
  {
    id: 'recebimento-logistica',
    title: 'Recebimento e Logística',
    shortDesc: 'Controle físico, portaria e conferência cega de mercadorias',
    icon: 'PackageCheck',
    features: [
      {
        id: 'controle-portaria',
        title: 'Controle de portaria e entrada física',
        description: 'Registro da chegada de veículos e transportadoras no pátio através da leitura da chave de acesso ou código de barras da DANFE.',
        benefit: 'Sincroniza a chegada física da carga com a existência prévia do XML no sistema, evitando caminhões parados.',
        iconName: 'DoorOpen'
      },
      {
        id: 'leitura-codigo-barras',
        title: 'Leitura e identificação por código de barras',
        description: 'Suporte a coletores de dados e leitores ópticos para bipagem de chaves de acesso, lotes e números de série.',
        benefit: 'Agilidade máxima no check-in físico de volumes no armazém.',
        iconName: 'ScanBarcode'
      },
      {
        id: 'conferencia-cega',
        title: 'Conferência cega de mercadorias',
        description: 'Módulo onde o conferente conta as quantidades físicas sem acesso prévio aos números informados na nota fiscal.',
        benefit: 'Elimina vícios de conferência e previne recebimento de produtos trocados ou faltantes.',
        iconName: 'ClipboardCheck'
      },
      {
        id: 'liberacao-critica',
        title: 'Liberação ou crítica do recebimento',
        description: 'Disparo automático de ocorrência quando a contagem física divergir do XML ou do pedido de compra.',
        benefit: 'Permite recusar a mercadoria ou reter o pagamento antes de descarregar produtos incorretos.',
        iconName: 'AlertOctagon'
      }
    ]
  },
  {
    id: 'controle-gestao',
    title: 'Controle, Inconsistências e Gestão',
    shortDesc: 'Workflows preventivos de erros e relatórios analíticos',
    icon: 'ShieldAlert',
    features: [
      {
        id: 'workflow-inconsistencias',
        title: 'Workflow de inconsistências em tempo real',
        description: 'Painel inteligente que destaca notas com divergências tributárias, cadastrais ou comerciais antes do envio ao ERP.',
        benefit: 'Evita a escrituração incorreta de impostos (ICMS, IPI, PIS, COFINS, ISS) e penalidades do SPED Fiscal.',
        iconName: 'Sliders'
      },
      {
        id: 'fornecedores-nao-cadastrados',
        title: 'Identificação de fornecedores não cadastrados (SA2)',
        description: 'Alerta quando o emissor do XML não consta no cadastro de fornecedores do Protheus, com opção de pré-cadastro assistido.',
        benefit: 'Economiza tempo da equipe de compras e mantém o cadastro mestre saneado.',
        iconName: 'UserX'
      },
      {
        id: 'divergencias-qtd-valor',
        title: 'Divergências de quantidade e valor',
        description: 'Comparativo linha a linha entre o valor unitário da nota e o preço negociado no pedido de compras com tolerâncias configuráveis.',
        benefit: 'Impede pagamentos indevidos gerados por erros de emissão de fornecedores.',
        iconName: 'Scale'
      },
      {
        id: 'relacionamento-produto-fornecedor',
        title: 'Falta de relacionamento Produto x Fornecedor (SA5)',
        description: 'Assistente para criação do código de amarração entre o código do item do fornecedor e o código interno do produto (SB1).',
        benefit: 'Garante que os próximos lançamentos do mesmo fornecedor sejam 100% automáticos.',
        iconName: 'Link2'
      },
      {
        id: 'facilitadores-relatorios',
        title: 'Mais de 50 facilitadores e relatórios gerenciais',
        description: 'Dashboards com tempo médio de processamento, notas canceladas na SEFAZ após recebimento, volume por filial e ranking de fornecedores com divergência.',
        benefit: 'Subsídio estratégico para a controladoria auditar a operação e negociar com fornecedores.',
        iconName: 'BarChart3'
      }
    ]
  }
];

export const SYSTEM_SCREENS: SystemScreen[] = [
  {
    id: 'screen-cockpit',
    title: 'Cockpit Centralizado de Documentos',
    category: 'Cockpit Centralizado',
    description: 'Visão consolidada de todas as notas fiscais (NF-e, CT-e, NFS-e) capturadas da SEFAZ, com status de processamento, filtros avançados por filial e ações rápidas.',
    image: '/images/mockup3.png',
    highlights: ['Status em tempo real', 'Filtro por CNPJ e Filial', 'Download de XML e DANFE em lote', 'Monitor de eventos SEFAZ']
  },
  {
    id: 'screen-entrada',
    title: 'Entrada Automatizada no TOTVS Protheus',
    category: 'Entrada de Documentos',
    description: 'Interface de integração direta com as rotinas MATA103 e MATA140 do Protheus, exibindo espelho do documento, itens amarrados e validação fiscal.',
    image: '/images/mockup-1-1024x812.png',
    highlights: ['Geração de Pré-Nota e Documento de Entrada', 'Vínculo automático com Pedido de Compra', 'Preenchimento de TES e CFOP', 'Cálculo de impostos conferido']
  },
  {
    id: 'screen-portaria',
    title: 'Módulo de Controle de Portaria e Recepção',
    category: 'Controle de Portaria',
    description: 'Gestão da entrada física de cargas na empresa com leitura óptica de código de barras da DANFE e liberação para conferência física.',
    image: '/images/computer-banner.png',
    highlights: ['Check-in de veículos e motoristas', 'Validação de DANFE na portaria', 'Registro de data e hora de chegada', 'Alerta para doc sem XML recebido']
  },
  {
    id: 'screen-conferencia',
    title: 'Conferência Cega e Auditoria de Volumes',
    category: 'Conferência Cega',
    description: 'Conferência física isenta de vícios: conferentes apontam quantidades sem enxergar o valor do documento, garantindo integridade de estoque.',
    image: '/images/DOCUMENT.png',
    highlights: ['Contagem às cegas no armazém', 'Apontamento de divergências imediatas', 'Critica de recebimento parcial', 'Integração com coletores de dados']
  },
  {
    id: 'screen-inconsistencias',
    title: 'Workflow Visual de Inconsistências',
    category: 'Workflow de Inconsistências',
    description: 'Tela de triagem preventiva onde são sinalizadas divergências tributárias, fornecedores não cadastrados e diferenças de valores em relação ao pedido.',
    image: '/images/LOCK.png',
    highlights: ['Alertas de preço divergente', 'Identificação de produtos não amarrados', 'Notificação aos compradores', 'Histórico de justificativas']
  },
  {
    id: 'screen-relatorios',
    title: 'Relatórios e Indicadores Gerenciais',
    category: 'Relatórios Gerenciais',
    description: 'Dashboards completos de produtividade fiscal, volume de XMLs processados, índice de automação por filial e economia operacional gerada.',
    image: '/images/CHART.png',
    highlights: ['Mais de 50 relatórios nativos', 'Exportação para Excel e PDF', 'Métricas de SLA de escrituração', 'Auditoria de cancelamentos SEFAZ']
  }
];

export const IMPLEMENTATION_STEPS: ImplementationStep[] = [
  {
    step: 1,
    title: 'Diagnóstico & Alinhamento',
    description: 'Entendimento profundo da arquitetura Protheus atual, volumetria de XMLs, parametrizações fiscais e fluxo de compras da sua empresa.',
    deliverables: ['Mapeamento do ambiente Protheus', 'Levantamento de CNPJs e certificados', 'Definição de regras de TES e compras']
  },
  {
    step: 2,
    title: 'Configuração & Integração',
    description: 'Instalação e parametrização dos componentes de integração, configuração de webservices da SEFAZ e amarração com o dicionário de dados.',
    deliverables: ['Configuração de certificados digitais', 'Parametrização dos workflows fiscais', 'Ajuste de permissões e usuários']
  },
  {
    step: 3,
    title: 'Validação em Homologação',
    description: 'Execução de testes controlados com documentos fiscais reais e cenários complexos (compras normais, fretes, devoluções, divergências).',
    deliverables: ['Simulação de entradas com XMLs reais', 'Validação de geração de Pré-Nota / MATA103', 'Ajuste fino de regras de inconsistência']
  },
  {
    step: 4,
    title: 'Treinamento das Equipes',
    description: 'Capacitação prática para os times envolvidos: fiscal, contabilidade, compras, almoxarifado, portaria e recebimento.',
    deliverables: ['Sessões de treinamento online/presencial', 'Manual operacional personalizado', 'Guia rápido de resolução de inconsistências']
  },
  {
    step: 5,
    title: 'Entrada em Operação & Suporte',
    description: 'Go-live assistido com acompanhamento em tempo real dos primeiros lotes de documentos e suporte dedicado da equipe Fabritech.',
    deliverables: ['Acompanhamento de virada em produção', 'Monitoramento ativo de performance', 'Suporte técnico contínuo']
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'O que é o 4XML?',
    answer: 'O 4XML é uma solução da Fabritech especializada em automação fiscal, captura de documentos eletrônicos e integração completa com o ERP TOTVS Protheus. A plataforma automatiza todo o ciclo desde a busca da nota na SEFAZ até a classificação e entrada estruturada no ERP.',
    category: 'Geral'
  },
  {
    id: 'faq-2',
    question: 'Quais documentos fiscais o sistema captura?',
    answer: 'O 4XML captura, valida e processa Notas Fiscais Eletrônicas de Produtos (NF-e - modelo 55), Conhecimentos de Transporte Eletrônicos (CT-e - modelo 57) e Notas Fiscais de Serviços Eletrônicas (NFS-e), além de eventos fiscais como Cartas de Correção (CC-e) e Cancelamentos.',
    category: 'Funcionalidades'
  },
  {
    id: 'faq-3',
    question: 'O 4XML é integrado ao TOTVS Protheus?',
    answer: 'Sim, a solução foi desenvolvida especificamente com foco no ERP TOTVS Protheus. A integração é nativa e dialoga diretamente com as tabelas e rotinas padrão do sistema (como MATA103 para Documentos de Entrada, MATA140 para Pré-Notas e SC7 para Pedidos de Compra).',
    category: 'Integração Protheus'
  },
  {
    id: 'faq-4',
    question: 'Como funciona a busca automática de XML?',
    answer: 'A plataforma utiliza o Certificado Digital A1 da sua empresa para consultar periodicamente e de forma automatizada o Ambiente Nacional da SEFAZ e sistemas municipais, baixando o XML completo com valor fiscal no momento em que a nota é emitida pelo fornecedor.',
    category: 'Funcionalidades'
  },
  {
    id: 'faq-5',
    question: 'O sistema permite manifestação do destinatário?',
    answer: 'Sim. O 4XML realiza a Manifestação do Destinatário diretamente junto à SEFAZ (Ciência da Emissão, Confirmação da Operação, Desconhecimento da Operação e Operação não Realizada), de forma manual ou com regras de automação pré-configuradas.',
    category: 'Funcionalidades'
  },
  {
    id: 'faq-6',
    question: 'Existe cobrança por volume de XML?',
    answer: 'Não. O 4XML opera sem cobrança variável por quantidade de XMLs processados, oferecendo previsibilidade total de custos operacionais independentemente do volume mensal de notas da sua empresa.',
    category: 'Geral'
  },
  {
    id: 'faq-7',
    question: 'Como funciona o workflow de inconsistências?',
    answer: 'Antes de realizar a entrada no Protheus, o 4XML audita o XML contra as regras de negócio: valida se o fornecedor existe no Protheus (SA2), se os itens possuem amarração (SA5/SB1), se há divergência de preços em relação ao Pedido de Compra e se as alíquotas de impostos estão corretas.',
    category: 'Funcionalidades'
  },
  {
    id: 'faq-8',
    question: 'O 4XML possui controle de portaria e conferência cega?',
    answer: 'Sim. A plataforma conta com módulos integrados para check-in de veículos na portaria (com leitura de código de barras da DANFE) e módulo de conferência cega, onde o conferente do armazém faz a contagem física sem vícios, disparando críticas caso haja divergência.',
    category: 'Funcionalidades'
  },
  {
    id: 'faq-9',
    question: 'Quanto tempo demora a implantação?',
    answer: 'A implantação é informada em aproximadamente três dias úteis para configurações padrão. O prazo exato pode variar conforme a complexidade do ambiente Protheus, quantidade de CNPJs, customizações fiscais pré-existentes e disponibilidade da equipe técnica da empresa.',
    category: 'Implantação & Segurança'
  },
  {
    id: 'faq-10',
    question: 'Como os documentos e certificados são protegidos?',
    answer: 'Os certificados digitais e arquivos XML são armazenados em infraestrutura de nuvem segura com criptografia ponta a ponta (AES-256 e TLS), controle rigoroso de alçadas de acesso e backups automáticos, em total conformidade com a LGPD.',
    category: 'Implantação & Segurança'
  },
  {
    id: 'faq-11',
    question: 'Como solicitar uma demonstração?',
    answer: 'Você pode solicitar uma demonstração personalizada preenchendo o formulário em nosso site ou iniciando uma conversa direta com nossos especialistas fiscais pelo WhatsApp (+55 11 94188-3913). Demonstramos o fluxo em tempo real conectado a um ambiente Protheus.',
    category: 'Geral'
  }
];

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'como-automatizar-o-recebimento-de-xml-no-protheus',
    title: 'Como automatizar o recebimento de XML no Protheus',
    excerpt: 'Descubra como estruturar a captura direta na SEFAZ e a integração nativa com o TOTVS Protheus, eliminando gargalos e digitação manual.',
    content: `
## O desafio histórico do recebimento fiscal

A gestão de documentos fiscais eletrônicos no Brasil é uma das mais complexas do mundo. Historicamente, as empresas dependem de que seus fornecedores enviem os arquivos XML e DANFE por e-mail, ou que os caminhoneiros entreguem a via impressa no momento do descarregamento na portaria.

Esse modelo analógico gera três grandes problemas operacionais:
1. **Perda de arquivos e atrasos:** XMLs que caem no spam ou chegam após o fechamento fiscal.
2. **Erros humanos de digitação:** Lançamento incorreto de chaves de acesso, alíquotas e códigos de produtos.
3. **Caminhões parados no pátio:** Demora excessiva para lançar o documento antes de descarregar.

### Como funciona a automação direta com a SEFAZ

Com o **4XML**, a rotina de busca de documentos eletrônicos passa a ser 100% automatizada. Através do Certificado Digital A1 da empresa, a plataforma consulta em ciclos programados os webservices da Secretaria da Fazenda e prefeituras.

Assim que uma NF-e, CT-e ou NFS-e é autorizada contra o CNPJ da empresa (matriz ou filiais), o sistema faz o download do arquivo XML completo e o disponibiliza no cockpit central de conferência.

### Vantagens da integração nativa com o ERP TOTVS Protheus

Ao conectar a captura automática ao Protheus:
- **Alimentação da Pré-Nota (MATA140):** O sistema cria o espelho exato do XML no Protheus sem digitação manual.
- **Amarração de Produtos e Fornecedores (SA5 / SB1):** O 4XML sugere a correlação automática de itens com base no histórico de compras.
- **Vínculo com Pedidos de Compras (SC7):** Cruzamento automático de quantidade, preço unitário e condições de pagamento.

*Nota: Regras fiscais e tributárias devem ser sempre validadas pelos profissionais responsáveis pela controladoria e contabilidade da sua empresa.*
    `,
    category: 'TOTVS Protheus',
    author: {
      name: 'Equipe Técnica Fabritech',
      role: 'Especialistas em Integração Protheus'
    },
    coverImage: '/images/mockup3.png',
    readTime: '5 min',
    publishedAt: '2026-08-15',
    tags: ['TOTVS Protheus', 'NF-e', 'Automação Fiscal', 'XML'],
    featured: true
  },
  {
    id: 'post-2',
    slug: 'nfe-cte-e-nfse-como-centralizar-os-documentos-fiscais',
    title: 'NF-e, CT-e e NFS-e: como centralizar os documentos fiscais',
    excerpt: 'Entenda a importância de unificar a gestão de notas de produtos, fretes e serviços em um único cockpit fiscal corporativo.',
    content: `
## A fragmentação na entrada de documentos eletrônicos

Muitas empresas utilizam processos isolados para cada tipo de documento fiscal:
- As **NF-e (Notas de Produtos)** chegam pelo almoxarifado ou compras;
- Os **CT-e (Conhecimentos de Transporte)** chegam pelo setor de logística;
- As **NFS-e (Notas de Serviços)** chegam por e-mail diretamente para as áreas solicitantes ou contas a pagar.

Essa dispersão dificulta o fechamento fiscal, aumenta o risco de pagamentos em duplicidade e impede que a controladoria tenha visibilidade em tempo real das obrigações da empresa.

### A solução: Cockpit Centralizado

Centralizar todos os modelos em uma única plataforma como o **4XML** traz benefícios imediatos:

1. **Visão unificada por filial e CNPJ:** Acompanhe o fluxo de entrada de todas as unidades da federação em uma única tela.
2. **Amarração de Frete x Nota de Origem:** O sistema vincula automaticamente o CT-e à NF-e correspondente, calculando o rateio de frete no documento de entrada.
3. **Auditoria de cancelamentos:** Notificação instantânea se um fornecedor cancelar uma nota que já havia sido recebida fisicamente.

### Armazenamento seguro e guarda de 5 anos

A legislação tributária exige a guarda dos arquivos XML válidos pelo prazo decadencial de 5 anos mais o ano corrente. A centralização na nuvem com backups redundantes assegura conformidade total durante fiscalizações do SPED.
    `,
    category: 'Automação Fiscal',
    author: {
      name: 'Consultoria Fiscal 4XML',
      role: 'Automação e Compliance'
    },
    coverImage: '/images/mockup-1-1024x812.png',
    readTime: '4 min',
    publishedAt: '2026-08-10',
    tags: ['NF-e', 'CT-e', 'NFS-e', 'Gestão Fiscal'],
    featured: true
  },
  {
    id: 'post-3',
    slug: 'o-que-e-manifestacao-do-destinatario',
    title: 'O que é manifestação do destinatário e por que ela é obrigatória?',
    excerpt: 'Conheça os 4 eventos da manifestação do destinatário e como automatizá-los para proteger sua empresa contra fraudes e notas frias.',
    content: `
## Entendendo a Manifestação do Destinatário

A Manifestação do Destinatário é o conjunto de eventos fiscais pelos quais o destinatário de uma NF-e declara formalmente à Secretaria da Fazenda a sua participação comercial naquela operação registrada pelo emitente.

Existem quatro eventos principais:

### 1. Ciência da Emissão
Declara que o destinatário tomou conhecimento da existência da nota fiscal emitida contra o seu CNPJ. Permite o download do XML completo na SEFAZ.

### 2. Confirmação da Operação
Declara que a operação descrita na nota fiscal realmente ocorreu e que as mercadorias foram recebidas de acordo. **Após esse evento, o emitente fica impedido de cancelar a NF-e.**

### 3. Desconhecimento da Operação
Utilizado quando a empresa identifica uma nota emitida contra seu CNPJ referente a uma transação comercial inexistente ou fraudulenta (nota fria).

### 4. Operação não Realizada
Utilizado quando havia um negócio legítimo, porém a mercadoria foi devolvida na entrega, extraviada ou o serviço não foi prestado.

## Por que automatizar a manifestação?

A realização manual de manifestações em centenas de notas por dia é inviável e propensa a esquecimentos. Com o **4XML**, as regras de manifestação podem ser automatizadas conforme o fluxo de recebimento físico e conferência no Protheus, garantindo segurança jurídica absoluta.
    `,
    category: 'Legislação & Compliance',
    author: {
      name: 'Equipe Tributária Fabritech',
      role: 'Compliance Fiscal'
    },
    coverImage: '/images/DOCUMENT.png',
    readTime: '6 min',
    publishedAt: '2026-08-01',
    tags: ['Manifestação do Destinatário', 'SEFAZ', 'Compliance', 'Segurança'],
    featured: false
  },
  {
    id: 'post-4',
    slug: 'como-reduzir-erros-na-entrada-de-documentos-fiscais',
    title: 'Como reduzir erros na entrada de documentos fiscais no Protheus',
    excerpt: 'Estratégias práticas para erradicar divergências de tributação, TES incorreta e inconsistências no SPED Fiscal.',
    content: `
## O impacto dos erros de entrada fiscal

Um erro na escrituração de um documento de entrada não afeta apenas o momento do lançamento: ele se propaga para o estoque, gera divergências no Contas a Pagar e resulta em inconsistências graves nas escriturações digitais (EFD ICMS/IPI, EFD-Contribuições e ECF).

### As principais causas de inconsistência:

- **Código de Produto incorreto:** Falta de amarração entre o código do item no fornecedor e o cadastro interno (SB1).
- **TES e CFOP equivocados:** Aplicação de regras tributárias incompatíveis com a destinação do item (uso/consumo, revenda ou industrialização).
- **Divergência de impostos:** Diferença entre os valores destacados na nota e os parâmetros calculados pelo ERP.

### A abordagem preventiva do 4XML

Em vez de corrigir erros após o lançamento, o **4XML** atua preventivamente através de um motor de regras que valida o XML antes de gerar a pré-nota ou o documento de entrada no Protheus:
- Conferência prévia de alíquotas;
- Sugestão automatizada de TES com base no histórico validado;
- Bloqueio de notas de fornecedores sem cadastro atualizado.
    `,
    category: 'Gestão & Custos',
    author: {
      name: 'Consultoria Fiscal 4XML',
      role: 'Otimização de Processos'
    },
    coverImage: '/images/LOCK.png',
    readTime: '4 min',
    publishedAt: '2026-07-25',
    tags: ['SPED Fiscal', 'TES', 'Protheus', 'Erros Fiscais'],
    featured: false
  },
  {
    id: 'post-5',
    slug: 'controle-de-portaria-integrado-ao-processo-fiscal',
    title: 'Controle de portaria integrado ao processo fiscal',
    excerpt: 'Como eliminar gargalos na recepção de mercadorias sincronizando a chegada física com o recebimento eletrônico do XML.',
    content: `
## A portaria como primeira linha de defesa fiscal

Na maioria das empresas com centros de distribuição ou fábricas, a portaria física opera desconectada do departamento fiscal. O caminhão chega, o porteiro carimba a DANFE em papel e a carga aguarda horas no pátio até que alguém no escritório localize o pedido de compra e libere o descarregamento.

### Benefícios da portaria inteligente com 4XML:

1. **Check-in instantâneo por código de barras:** O porteiro apenas bipa a chave de acesso da DANFE com um leitor simples.
2. **Validação imediata de XML:** O sistema checa se a nota já foi capturada na SEFAZ e se está válida e autorizada.
3. **Bloqueio de cargas sem pedido:** Se não houver pedido de compra aprovado correspondente no Protheus, o sistema emite alerta imediato antes mesmo de autorizar a entrada do veículo no pátio.
4. **Registro de tempo de pátio:** Auditoria precisa do tempo entre a chegada do veículo e a conclusão do descarregamento.
    `,
    category: 'Logística & Portaria',
    author: {
      name: 'Especialistas em Logística Fabritech',
      role: 'Gestão de Suprimentos'
    },
    coverImage: '/images/computer-banner.png',
    readTime: '5 min',
    publishedAt: '2026-07-18',
    tags: ['Portaria', 'Recebimento', 'Logística', 'Protheus'],
    featured: false
  },
  {
    id: 'post-6',
    slug: 'como-funcionam-os-workflows-de-inconsistencias',
    title: 'Como funcionam os workflows de inconsistências no 4XML',
    excerpt: 'Governança e alçadas de decisão: entenda como o sistema encaminha divergências automaticamente para os responsáveis.',
    content: `
## O que é um workflow de inconsistência?

Quando uma nota fiscal chega com divergência em relação ao negociado (por exemplo: preço unitário 5% superior ao pedido de compras, ou quantidade entregue diferente do saldo em aberto), o processo tradicional costuma travar na mesa do analista fiscal.

O analista precisa tirar print, enviar e-mail para o comprador, aguardar retorno e muitas vezes a nota fica parada dias sem resolução.

### O fluxo automatizado do 4XML

Com o **4XML**, as inconsistências são tratadas de forma sistemática:
- **Detecção automática:** O motor compara XML x Pedido Protheus (SC7) x Cadastro (SA2/SB1).
- **Roteamento inteligente:** A pendência é enviada diretamente para a fila de trabalho do comprador responsável ou gestor de compras.
- **Opções estruturadas de resolução:** O comprador pode autorizar a variação dentro de sua alçada, solicitar cancelamento/carta de correção ao fornecedor ou rejeitar o recebimento.
- **Rastreabilidade total:** Todas as justificativas e autorizações ficam registradas para fins de auditoria interna.
    `,
    category: 'Gestão & Custos',
    author: {
      name: 'Equipe Técnica Fabritech',
      role: 'Governança e Processos'
    },
    coverImage: '/images/CHART.png',
    readTime: '5 min',
    publishedAt: '2026-07-05',
    tags: ['Workflow', 'Inconsistências', 'Governança', 'Auditoria'],
    featured: false
  }
];

export const INITIAL_LEADS: import('../types').Lead[] = [
  {
    id: 'lead-seed-1',
    name: 'Carlos Eduardo Silveira',
    email: 'carlos.silveira@metalurgicapaulista.com.br',
    phone: '(11) 98765-4321',
    company: 'Metalúrgica Paulista S/A',
    cnpj: '12.345.678/0001-90',
    businessArea: 'Indústria Metalúrgica',
    monthlyDocuments: '2.000 a 5.000 notas/mês',
    message: 'Utilizamos o TOTVS Protheus versão 12.1.33 e precisamos automatizar a entrada de NF-e e controle de portaria em nossas 3 fábricas.',
    consent: true,
    status: 'new',
    notes: 'Interesse prioritário em conferência cega e integração com MATA103.',
    createdAt: '2026-08-30T14:20:00.000Z',
    source: 'Formulário Principal do Site'
  },
  {
    id: 'lead-seed-2',
    name: 'Mariana Duarte Costa',
    email: 'mariana.costa@distribuidoravita.com.br',
    phone: '(19) 99876-1234',
    company: 'Vita Logística e Distribuição',
    cnpj: '98.765.432/0001-10',
    businessArea: 'Distribuição e Logística',
    monthlyDocuments: 'Mais de 5.000 notas/mês',
    message: 'Precisamos de solução urgente para amarração de CT-e com NF-e e manifestação automática do destinatário.',
    consent: true,
    status: 'demonstration_scheduled',
    notes: 'Demonstração agendada com a gerência fiscal para quinta-feira às 15h.',
    createdAt: '2026-08-28T10:15:00.000Z',
    source: 'Formulário Principal do Site'
  }
];
