/**
 * Dados pessoais e de contato. Fonte única para header, footer, metadata e hero.
 * Tudo aqui é informação real já publicada (GitHub, LinkedIn, README, site anterior).
 */
export const profile = {
  name: 'Miguel Bahia',
  fullName: 'Miguel da Silva Bahia',
  nameLines: ['Miguel', 'Bahia'] as const,
  role: 'Engenheiro de Software Full Stack',
  shortRole: 'Engenheiro de Software',
  company: {
    name: 'Compare Plano de Saúde',
    url: 'https://www.compareplanodesaude.com.br',
  },
  education: {
    degree: 'Ciência da Computação',
    school: 'UNIP',
    schoolFull: 'Universidade Paulista',
  },
  tagline:
    'Engenheiro de Software Full Stack na Compare Plano de Saúde. Back-end em Node.js/NestJS, SPA/SSR em React/Next.js, automação e dados. Ciência da Computação na UNIP.',
  motto: 'A tecnologia é o meio; a solução é o fim.',
  email: 'miguelbahia0602@gmail.com',
  siteUrl: 'https://miguel-silva-tech.vercel.app',
  githubUser: 'Silver1529',
  links: {
    github: 'https://github.com/Silver1529',
    linkedin: 'https://www.linkedin.com/in/miguel-bahia-30094234b',
    repo: 'https://github.com/Silver1529/meu-portfolio',
  },
  availability: 'Disponível para novos projetos',
  environment: 'Linux · Ubuntu',
} as const;
