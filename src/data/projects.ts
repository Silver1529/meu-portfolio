import type { Project } from './types';

/**
 * Catálogo de projetos. Os seis primeiros mantêm as páginas de detalhe que já
 * existiam no portfólio; os demais vêm do inventário dos repositórios.
 * Tudo aqui tem código real por trás.
 */
export const projects: ReadonlyArray<Project> = [
  // ------------------------------------------------------------ destaque
  {
    slug: 'crm',
    title: 'CRM Core & Extensões',
    kicker: 'Sistema interno · Compare',
    summary:
      'Núcleo do CRM da Compare Plano de Saúde: back-end Node.js com Mongoose, front-end Next.js 16, integrações com Google e Ploomes, extensão de navegador e queries otimizadas para milhares de leads por dia.',
    context: 'Compare Plano de Saúde',
    stack: ['Node.js', 'Express', 'Next.js 16', 'MongoDB', 'Redis', 'Socket.IO', 'Google APIs', 'Vitest'],
    href: '/projetos/crm',
    status: 'em produção',
    period: '2025 – atual',
    featured: true,
  },
  {
    slug: 'flow',
    title: 'Compare Flow',
    kicker: 'Plataforma interna · Compare',
    summary:
      'Kanban hierárquico, mensageria em tempo real, chamadas de voz P2P e um servidor MCP para agentes de IA operarem a plataforma. Substitui Trello, Slack e e-mail respeitando a hierarquia da empresa.',
    context: 'Compare Plano de Saúde',
    stack: ['Next.js 15', 'Socket.IO', 'Redis', 'WebRTC', 'MongoDB', 'RTK Query', 'MCP SDK', 'Anthropic SDK'],
    href: '/projetos/flow',
    status: 'em produção',
    period: '2026 – atual',
    featured: true,
  },
  {
    slug: 'automacao',
    title: 'Automação & Bots',
    kicker: 'Compare AI, QA e scraping',
    summary:
      'Painel interno de automação com filas BullMQ e workers Playwright: QA de formulários de lead, cobrança de boletos, publicação em Meta/TikTok, conteúdo WordPress com IA, Google Ads e scraping de preços. Mais os bots de QA, retenção e ETL que começaram tudo.',
    context: 'Compare Plano de Saúde',
    stack: ['Next.js 16', 'BullMQ', 'Redis', 'Playwright', 'Python', 'Selenium', 'Google Ads API', 'Anthropic / OpenAI'],
    href: '/projetos/automacao',
    status: 'em produção',
    period: '2025 – atual',
    featured: true,
  },
  {
    slug: 'bateponto',
    title: 'Bate Ponto',
    kicker: 'Sistema corporativo · monorepo',
    summary:
      'Registro de ponto com geofencing (Haversine, raio de 650 m), fluxo de aprovação, métricas em tempo real e relatórios PDF/Excel. NestJS 11 + Next.js em monorepo Turborepo, integrado ao Compare Flow.',
    context: 'Compare Plano de Saúde',
    stack: ['NestJS 11', 'Next.js', 'MongoDB', 'BullMQ', 'Redis', 'Zod', 'Turborepo', 'Yarn 4'],
    href: '/projetos/bateponto',
    status: 'em produção',
    period: '2026',
    featured: true,
  },
  {
    slug: 'timeline',
    title: 'Timeline do Cliente',
    kicker: 'Rastreamento de eventos · CRM',
    summary:
      'Arquitetura de rastreamento que registra toda a jornada do cliente no CRM: 9 tipos de evento, claiming de eventos órfãos após sincronização com o Ploomes e metadata em português.',
    context: 'Compare Plano de Saúde',
    stack: ['TypeScript', 'MongoDB', 'Mongoose', 'React'],
    href: '/projetos/timeline',
    status: 'em produção',
    period: '2025 – 2026',
    featured: true,
  },
  {
    slug: 'cruddungeon',
    title: 'CRUD Dungeon',
    kicker: 'Jogo educacional · full stack',
    summary:
      'RPG top-down onde cada ação do jogador vira uma operação CRUD real em MySQL na AWS. Construído com Kaplay e Next.js 16, com back-end endurecido (CSRF, rate limit, Zod, prepared statements).',
    context: 'Pessoal',
    stack: ['Next.js 16', 'Kaplay', 'MySQL', 'AWS RDS', 'Zustand', 'React Query', 'Zod'],
    href: '/projetos/cruddungeon',
    live: 'https://crud-dungeon.vercel.app/',
    repo: 'https://github.com/Silver1529/crud-dungeon',
    status: 'demo online',
    featured: true,
  },

  // ------------------------------------------------------ também na Compare
  {
    slug: 'odatahandler',
    title: 'OData Handler',
    kicker: 'Integração Ploomes',
    summary:
      'Serviço que liga os sites da Compare ao CRM Ploomes: API OData v4 sobre MongoDB, filas Bull com painel, e-mails transacionais em React Email e a rota que todos os sites usam para gravar leads.',
    context: 'Compare Plano de Saúde',
    stack: ['Express', 'OData v4', 'MongoDB', 'Bull', 'React Email', 'Vitest', 'GitLab CI'],
    status: 'em produção',
    period: '2025 – atual',
  },
  {
    slug: 'landings',
    title: 'Landing pages de captação',
    kicker: 'Einstein · Fleury · profissões',
    summary:
      'Páginas institucionais modernizadas a partir do Figma Make, com formulário de cotação em etapas e mapa navegável da rede credenciada (Leaflet), todas gravando leads no CRM via OData Handler.',
    context: 'Compare Plano de Saúde',
    stack: ['React', 'Vite', 'Next.js 16', 'Radix UI', 'Leaflet', 'Motion', 'Tailwind v4'],
    status: 'em produção',
    period: '2026',
  },
  {
    slug: 'scraping',
    title: 'Scraper de preços e rede credenciada',
    kicker: 'Playwright + dashboard SSE',
    summary:
      'Coleta preços e rede das operadoras no painel do corretor e grava no MongoDB. Um dashboard Next.js dispara a coleta, acompanha o progresso ao vivo por Server-Sent Events e mostra o diff de preços.',
    context: 'Compare Plano de Saúde',
    stack: ['Next.js 16', 'Playwright', 'MongoDB', 'SSE', 'PM2', 'pdf-lib'],
    status: 'em produção',
    period: '2026',
  },
  {
    slug: 'app-cliente',
    title: 'Aplicativo do cliente',
    kicker: 'Contribuições · Expo + Express',
    summary:
      'App Android/iOS da Compare (Expo Router, NativeWind, Zustand, mapas) e sua API Express com MongoDB. Contribuições pontuais em ambos os repositórios.',
    context: 'Compare Plano de Saúde',
    stack: ['React Native', 'Expo', 'Express', 'MongoDB', 'Zod'],
    status: 'em produção',
    period: '2026',
  },

  // -------------------------------------------------- pessoais e clientes
  {
    slug: 'd20',
    title: 'D20 Software House',
    kicker: 'Site da marca',
    summary:
      'Portfólio da marca sob a qual faço projetos independentes. SPA em React 19 + Vite, icosaedro WebGL em Three.js, animações com Motion e API de contato serverless.',
    context: 'Pessoal',
    stack: ['React 19', 'Vite', 'Three.js', 'Motion', 'Tailwind v4', 'Vercel'],
    live: 'https://d20-software-house.vercel.app',
    repo: 'https://github.com/Silver1529/D20-Software-House',
    status: 'em produção',
    period: '2026',
  },
  {
    slug: 'foco-arte',
    title: 'Foco Arte',
    kicker: 'Site fullstack · cliente',
    summary:
      'Construtora de drywall, forros e divisórias. Migração de um site estático para uma aplicação Next.js 16 com captação de leads e painel administrativo no mesmo deploy.',
    context: 'Cliente',
    stack: ['Next.js 16', 'React 19', 'Zod', 'Tailwind v4', 'Vercel'],
    live: 'https://foco-arte.vercel.app',
    repo: 'https://github.com/Silver1529/Focos_Arte',
    status: 'em produção',
    period: '2026',
  },
  {
    slug: 'iacontabil',
    title: 'Iacontábil',
    kicker: 'Site institucional · colaboração',
    summary:
      'Site de um escritório de contabilidade digital em Next.js 16, com anti-spam Turnstile, e-mails via Resend, rate limit com Upstash, testes em Vitest e Playwright e Lighthouse CI.',
    context: 'Cliente',
    stack: ['Next.js 16', 'Resend', 'Upstash', 'Turnstile', 'Vitest', 'Playwright', 'Lighthouse CI'],
    live: 'https://iacontabil.com.br',
    status: 'em produção',
    period: '2026',
  },
  {
    slug: 'syncroutine',
    title: 'SyncRoutine',
    kicker: 'Time tracking pessoal',
    summary:
      'Sistema de produtividade que registra horas por área e mede performance com relatórios diários a anuais. Monorepo pnpm com API NestJS 11, painel Next.js 15 e contratos Zod compartilhados.',
    context: 'Pessoal',
    stack: ['NestJS 11', 'Next.js 15', 'MongoDB Atlas', 'Zod', 'JWT + Argon2', 'Swagger', 'pnpm'],
    status: 'em desenvolvimento',
    period: '2026',
  },
  {
    slug: 'eco',
    title: 'Calculadora Eco',
    kicker: 'Pegada de carbono',
    summary: 'Algoritmo de pegada de carbono adaptado para o Brasil, com interface bilíngue.',
    context: 'Pessoal',
    stack: ['JavaScript', 'Web'],
    live: 'https://pegadasecologicas.vercel.app/',
    status: 'demo online',
  },
  {
    slug: 'coinnect',
    title: 'Coinnect',
    kicker: 'Dashboard financeiro familiar',
    summary: 'Painel de finanças para a família, com back-end e front-end separados em TypeScript.',
    context: 'Pessoal',
    stack: ['TypeScript'],
    repo: 'https://github.com/Silver1529/coinnect',
    status: 'em desenvolvimento',
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
