import type { SkillGroup, SkillLevel } from './types';

export const levelLabel: Record<SkillLevel, string> = {
  produção: 'uso diário em produção',
  projetos: 'uso em projetos próprios ou pontuais',
  estudo: 'estudo em andamento',
};

/**
 * Cada tecnologia aponta para onde foi usada de fato. Nada de porcentagem.
 * Os nomes em `where` são projetos do catálogo ou descrições curtas.
 */
export const skillGroups: ReadonlyArray<SkillGroup> = [
  {
    title: 'Linguagens',
    description: 'TypeScript em tudo que vai para produção; Python para automação e scripts.',
    skills: [
      { name: 'TypeScript', level: 'produção', where: ['CRM', 'Compare Flow', 'Bate Ponto', 'Compare AI', 'todos os projetos'] },
      { name: 'JavaScript', level: 'produção', where: ['Node.js', 'React', 'scripts operacionais'] },
      { name: 'HTML / CSS', level: 'produção', where: ['landing pages', 'design systems com Tailwind'] },
      { name: 'SQL', level: 'projetos', where: ['CRUD Dungeon (MySQL)', 'modelagem relacional'] },
      { name: 'Python', level: 'projetos', where: ['bots de QA com Selenium', 'ETL com Pandas'] },
    ],
  },
  {
    title: 'Front-end',
    description: 'React e Next.js como base; Radix/shadcn, React Query e formulários tipados por cima.',
    skills: [
      { name: 'React 18/19', level: 'produção', where: ['CRM', 'Compare Flow', 'landing pages'] },
      { name: 'Next.js 13 → 16', level: 'produção', where: ['CRM', 'Compare AI', 'Bate Ponto', 'Foco Arte', 'este site'] },
      { name: 'Tailwind CSS v3/v4', level: 'produção', where: ['todos os front-ends'] },
      { name: 'Radix UI / shadcn', level: 'produção', where: ['CRM', 'Bate Ponto', 'landing pages'] },
      { name: 'TanStack Query / Table', level: 'produção', where: ['CRM', 'Bate Ponto', 'SyncRoutine'] },
      { name: 'React Hook Form + Zod', level: 'produção', where: ['CRM', 'Compare AI', 'landing pages'] },
      { name: 'Redux Toolkit / RTK Query', level: 'produção', where: ['Compare Flow'] },
      { name: 'Motion / Framer Motion', level: 'produção', where: ['CRM', 'D20', 'landing pages', 'este site'] },
      { name: 'dnd-kit', level: 'produção', where: ['CRM (kanban)', 'Compare Flow'] },
      { name: 'Recharts', level: 'produção', where: ['CRM', 'Bate Ponto', 'landing pages'] },
      { name: 'Leaflet', level: 'produção', where: ['landing de profissões (rede credenciada)'] },
      { name: 'Vite', level: 'projetos', where: ['D20 Software House', 'landings Einstein e Fleury'] },
      { name: 'Three.js / WebGL', level: 'projetos', where: ['D20 Software House'] },
      { name: 'Kaplay (canvas 2D)', level: 'projetos', where: ['CRUD Dungeon'] },
      { name: 'React Native / Expo', level: 'projetos', where: ['aplicativo do cliente (contribuições)'] },
    ],
  },
  {
    title: 'Back-end',
    description: 'APIs em Node.js com Express ou NestJS, tempo real com Socket.IO e filas com BullMQ.',
    skills: [
      { name: 'Node.js', level: 'produção', where: ['CRM', 'OData Handler', 'Compare Flow', 'Compare AI'] },
      { name: 'Express 5 + routing-controllers', level: 'produção', where: ['CRM back-end', 'OData Handler'] },
      { name: 'NestJS 11', level: 'produção', where: ['Bate Ponto', 'SyncRoutine'] },
      { name: 'REST e OData', level: 'produção', where: ['OData Handler (Ploomes)', 'CRM'] },
      { name: 'Socket.IO + Redis adapter', level: 'produção', where: ['Compare Flow', 'CRM'] },
      { name: 'WebRTC (voz P2P)', level: 'produção', where: ['Compare Flow'] },
      { name: 'BullMQ / Bull + Redis', level: 'produção', where: ['Compare AI', 'Bate Ponto', 'OData Handler'] },
      { name: 'Zod (contratos e validação)', level: 'produção', where: ['todos os back-ends', 'nestjs-zod'] },
      { name: 'Auth: JWT, Passport, bcrypt, Argon2', level: 'produção', where: ['CRM', 'Bate Ponto', 'SyncRoutine', 'scraper'] },
      { name: 'Segurança: Helmet, Throttler, CSRF, rate limit', level: 'produção', where: ['Bate Ponto', 'CRUD Dungeon', 'Compare Flow'] },
      { name: 'Playwright (automação)', level: 'produção', where: ['Compare AI (QA de formulários)', 'scraper de preços'] },
      { name: 'Selenium', level: 'projetos', where: ['bot de QA e fuzzing'] },
      { name: 'Puppeteer / whatsapp-web.js', level: 'projetos', where: ['bot de WhatsApp (contribuições)', 'CRM'] },
      { name: 'Nodemailer / React Email', level: 'produção', where: ['OData Handler', 'Bate Ponto', 'CRM'] },
      { name: 'ExcelJS / pdf-lib', level: 'produção', where: ['Bate Ponto', 'CRM', 'ETL'] },
      { name: 'Servidor MCP (Model Context Protocol)', level: 'produção', where: ['Compare Flow'] },
      { name: 'Swagger / OpenAPI / apiDoc', level: 'projetos', where: ['SyncRoutine', 'CRM'] },
    ],
  },
  {
    title: 'Dados',
    description: 'MongoDB como banco principal, Redis para filas e realtime, SQL onde faz sentido.',
    skills: [
      { name: 'MongoDB + Mongoose', level: 'produção', where: ['CRM', 'Compare Flow', 'Bate Ponto', 'OData Handler'] },
      { name: 'Aggregation pipelines e índices', level: 'produção', where: ['CRM (relatórios)', 'Timeline do Cliente'] },
      { name: 'Redis', level: 'produção', where: ['filas BullMQ', 'Socket.IO adapter', 'rate limit'] },
      { name: 'MySQL', level: 'projetos', where: ['CRUD Dungeon (AWS RDS)'] },
      { name: 'PostgreSQL', level: 'projetos', where: ['modelagem relacional', 'Foco Arte (planejado)'] },
      { name: 'Prisma', level: 'projetos', where: ['Bate Ponto (package database)'] },
      { name: 'Criptografia de dados (LGPD)', level: 'produção', where: ['CRM (campos de atribuição cifrados)'] },
    ],
  },
  {
    title: 'Integrações e IA',
    description: 'APIs de terceiros que aparecem no dia a dia da Compare.',
    skills: [
      { name: 'Ploomes (OData)', level: 'produção', where: ['OData Handler', 'CRM'] },
      { name: 'Google APIs (Sheets, Calendar, OAuth 2.0)', level: 'produção', where: ['CRM'] },
      { name: 'Google Ads API', level: 'produção', where: ['Compare AI', 'CRM (GCLID)'] },
      { name: 'Meta Graph API e TikTok', level: 'produção', where: ['Compare AI (posts)'] },
      { name: 'WordPress REST + Elementor', level: 'produção', where: ['Compare AI (conteúdo)'] },
      { name: 'WhatsApp (whatsapp-web.js)', level: 'projetos', where: ['bot multicliente', 'relatório PME'] },
      { name: 'Anthropic SDK / OpenAI / Gemini', level: 'produção', where: ['Compare Flow (Compare IA)', 'Compare AI', 'CRM'] },
    ],
  },
  {
    title: 'DevOps e ferramentas',
    description: 'Linux como ambiente, Git como rotina, testes e CI onde o projeto pede.',
    skills: [
      { name: 'Linux / Ubuntu', level: 'produção', where: ['ambiente de desenvolvimento'] },
      { name: 'Git + GitLab CI', level: 'produção', where: ['CRM', 'OData Handler', 'Iacontábil'] },
      { name: 'Vitest', level: 'produção', where: ['CRM (200+ arquivos)', 'OData Handler', 'Compare Flow'] },
      { name: 'Jest', level: 'projetos', where: ['SyncRoutine', 'app do cliente'] },
      { name: 'Playwright Test / Lighthouse CI', level: 'projetos', where: ['Compare Flow', 'Iacontábil'] },
      { name: 'Monorepos: Turborepo, Yarn 4, pnpm', level: 'produção', where: ['Bate Ponto', 'SyncRoutine'] },
      { name: 'Docker / Compose', level: 'projetos', where: ['SyncRoutine (Mongo de testes)', 'app do cliente'] },
      { name: 'AWS (RDS, EC2, S3)', level: 'projetos', where: ['CRUD Dungeon'] },
      { name: 'Vercel', level: 'produção', where: ['D20', 'Foco Arte', 'Iacontábil', 'este site'] },
      { name: 'PM2', level: 'produção', where: ['scraper de preços'] },
      { name: 'Husky + commitlint', level: 'produção', where: ['CRM', 'Bate Ponto', 'Compare AI'] },
    ],
  },
];
