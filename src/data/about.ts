/**
 * Conteúdo das seções "Sobre" e "Como eu trabalho".
 * Texto preservado do portfólio anterior, reorganizado.
 */

export const aboutParagraphs: ReadonlyArray<string> = [
  'Foco no desenvolvimento de sistemas escaláveis e de alta disponibilidade. Com sólida experiência no ecossistema TypeScript, atuo na arquitetura e implementação de soluções robustas de back-end com Node.js e NestJS, além de construir interfaces modernas com React e Next.js.',
  'Minha abordagem é pautada por Clean Code, modelagem eficiente de bancos de dados (SQL e NoSQL) e resolução de problemas complexos de negócio através de APIs performáticas. Desenvolvo nativamente em ambiente Linux, sempre priorizando automação, segurança dos dados e entrega de valor contínua.',
];

/** Termos destacados dentro dos parágrafos acima. */
export const aboutHighlights: ReadonlyArray<string> = [
  'TypeScript',
  'Node.js',
  'NestJS',
  'React',
  'Next.js',
  'Clean Code',
  'Linux',
];

export type Pillar = {
  title: string;
  description: string;
};

export const pillars: ReadonlyArray<Pillar> = [
  {
    title: 'Arquitetura eficiente',
    description: 'Design de APIs robustas (REST/OData), escalabilidade e organização modular de código.',
  },
  {
    title: 'Mindset full stack',
    description: 'Domínio completo do fluxo de dados, desde a query no banco até a renderização do componente em tela.',
  },
  {
    title: 'Cultura Unix/Linux',
    description: 'Desenvolvimento nativo em Ubuntu, com domínio de terminal, automação de scripts e deploy.',
  },
  {
    title: 'Engenharia além do óbvio',
    description: 'Gosto por lógica complexa, da refatoração de sistemas reais à mecânica de jogos autorais.',
  },
];

export const coreStack: ReadonlyArray<string> = [
  'TypeScript',
  'Node.js',
  'NestJS',
  'React',
  'Next.js',
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'Linux',
];

export const aboutFacts: ReadonlyArray<{ label: string; value: string }> = [
  { label: 'Especialidade', value: 'Back-end + SPA/SSR' },
  { label: 'Abordagem', value: 'Clean Architecture' },
  { label: 'Ambiente', value: 'Linux · Ubuntu' },
];

export type MethodStep = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: ReadonlyArray<string>;
};

/** Sequência real de trabalho: aqui a numeração carrega informação. */
export const methodSteps: ReadonlyArray<MethodStep> = [
  {
    number: '01',
    title: 'Entendo o problema',
    subtitle: 'Discovery e domínio',
    description:
      'Antes de qualquer linha de código, mergulho no contexto do negócio. Converso com quem usa o sistema, mapeio o fluxo real e identifico onde está a dor de verdade.',
    bullets: ['Levantamento de requisitos', 'Modelagem do domínio', 'Validação com o usuário'],
  },
  {
    number: '02',
    title: 'Crio as regras de negócio',
    subtitle: 'Design e arquitetura',
    description:
      'Traduzo o problema em arquitetura limpa: regras de negócio explícitas, modelos de dados consistentes e APIs que fazem sentido para quem consome.',
    bullets: ['Clean Architecture', 'Modelagem de dados (SQL e NoSQL)', 'Contratos de API (REST/OData)'],
  },
  {
    number: '03',
    title: 'Faço acontecer',
    subtitle: 'Execução e entrega',
    description:
      'Entrego do back ao front com qualidade: código limpo, testes onde importam, deploy automatizado e monitoramento. Projeto só termina quando está rodando em produção.',
    bullets: ['Implementação full stack', 'Deploy automatizado', 'Iteração contínua'],
  },
];

export const methodIntro =
  'Não escrevo código pelo código. Meu processo é entender o problema a fundo, modelar as regras de negócio com clareza e fazer o projeto acontecer ponta a ponta.';
