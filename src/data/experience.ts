import type { Experience, Education } from './types';

/**
 * Experiência profissional. Períodos baseados no histórico de commits dos
 * repositórios (primeiro commit na Compare: agosto de 2025).
 */
export const experiences: ReadonlyArray<Experience> = [
  {
    company: 'Compare Plano de Saúde',
    companyUrl: 'https://www.compareplanodesaude.com.br',
    role: 'Engenheiro de Software Full Stack',
    period: '2025 – atual',
    mode: 'Tempo integral',
    summary:
      'Desenvolvimento do ecossistema de software interno de uma corretora de planos de saúde: o CRM que a operação comercial usa todos os dias, integrações com o Ploomes e com o Google, plataformas internas de colaboração e um conjunto de automações que substitui trabalho manual por código.',
    bullets: [
      'Núcleo do CRM (back-end Node.js/Express com routing-controllers e Mongoose; front-end Next.js 16 com React Query, Radix e dnd-kit): cerca de 800 commits somando os dois repositórios, com suíte de mais de 200 arquivos de teste em Vitest e pipeline no GitLab CI.',
      'Features de negócio ponta a ponta no CRM: automações do corretor, histórico centralizado do cliente (timeline), painel de negócios em funil, métricas de retrabalho, relatório PME por WhatsApp, e-mails do financeiro, recuperação de leads perdidos e integração GCLID com Google Sheets e Google Ads.',
      'Compare Flow: plataforma interna que une Kanban hierárquico, mensageria em tempo real (Socket.IO com adapter Redis), chamadas de voz WebRTC em malha P2P com supressão de ruído RNNoise, PWA mobile e um servidor MCP que permite a um agente de IA operar a plataforma. Autor de cerca de 70% dos commits.',
      'Compare AI: painel de automação com filas BullMQ/Redis e workers Playwright para QA de formulários de lead, cobrança de boletos, publicação em Meta/TikTok, geração de conteúdo WordPress com IA e mineração de termos no Google Ads. Autor de cerca de 75% dos commits.',
      'Bate Ponto: sistema de registro de ponto com geofencing, fluxo de aprovação e relatórios PDF/Excel, em monorepo NestJS + Next.js. Autor de quase todos os commits.',
      'OData Handler: serviço de integração entre os sites da Compare e o CRM Ploomes (OData v4 sobre MongoDB, filas Bull, e-mails com React Email), com cerca de 90 commits.',
      'Landing pages de captação integradas ao CRM (Hospital Albert Einstein, Grupo Fleury, planos por profissão) e um scraper de preços e rede credenciada com dashboard em tempo real via SSE.',
      'Contribuições pontuais no aplicativo do cliente (Expo/React Native + API Express) e no bot de WhatsApp multicliente.',
    ],
    stack: [
      'TypeScript',
      'Node.js',
      'Express',
      'NestJS',
      'Next.js',
      'React',
      'MongoDB',
      'Redis',
      'BullMQ',
      'Socket.IO',
      'WebRTC',
      'Playwright',
      'Zod',
      'Vitest',
      'GitLab CI',
      'OData / Ploomes',
      'Google APIs',
      'Anthropic / OpenAI',
    ],
  },
  {
    company: 'D20 Software House',
    companyUrl: 'https://d20-software-house.vercel.app',
    role: 'Desenvolvedor Full Stack · projetos independentes',
    period: '2026 – atual',
    mode: 'Paralelo',
    summary:
      'Marca própria para trabalhos fora do expediente: sites e sistemas para pequenas empresas, do design ao deploy. O site da marca é uma SPA em React com um icosaedro WebGL em Three.js.',
    bullets: [
      'Foco Arte: migração do site estático de uma construtora de drywall para uma aplicação Next.js 16 com captação de leads e painel administrativo no mesmo deploy.',
      'Iacontábil: colaboração no site institucional de um escritório de contabilidade em Next.js 16, com Turnstile, Resend, Upstash, testes em Vitest e Playwright e Lighthouse CI.',
      'D20 Software House: site da marca em React 19 + Vite, Three.js e Motion, com API de contato serverless.',
    ],
    stack: ['Next.js', 'React', 'Vite', 'Three.js', 'Motion', 'Tailwind CSS', 'Vercel', 'Resend', 'Upstash'],
  },
];

export const education: ReadonlyArray<Education> = [
  {
    school: 'UNIP',
    schoolFull: 'Universidade Paulista',
    degree: 'Bacharelado em Ciência da Computação',
    period: 'em curso',
  },
];

/** Frentes em andamento, mostradas no hero. */
export const currentFocus: ReadonlyArray<string> = [
  'CRM da Compare (Node.js + Next.js)',
  'Compare Flow: Kanban, chat e voz em tempo real',
  'Compare AI: automações com filas e Playwright',
  'SyncRoutine: time tracking pessoal em NestJS',
];
