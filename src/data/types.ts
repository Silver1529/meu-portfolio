export type ProjectContext = 'Compare Plano de Saúde' | 'Pessoal' | 'Cliente' | 'Acadêmico';

export type ProjectStatus = 'em produção' | 'em desenvolvimento' | 'concluído' | 'demo online';

export type Project = {
  /** Identificador estável; também usado como âncora. */
  slug: string;
  title: string;
  /** Categoria curta mostrada acima do título. */
  kicker: string;
  /** Uma frase que descreve o projeto. */
  summary: string;
  context: ProjectContext;
  stack: ReadonlyArray<string>;
  /** Página interna de detalhes, quando existe. */
  href?: string;
  /** Demo/site publicado. */
  live?: string;
  repo?: string;
  status?: ProjectStatus;
  /** Ano ou intervalo, só quando há evidência. */
  period?: string;
  featured?: boolean;
};

export type Experience = {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  mode?: string;
  summary: string;
  bullets: ReadonlyArray<string>;
  stack: ReadonlyArray<string>;
};

export type Education = {
  school: string;
  schoolFull?: string;
  degree: string;
  period?: string;
  note?: string;
};

/** Nível baseado em uso real, não em porcentagem. */
export type SkillLevel = 'produção' | 'projetos' | 'estudo';

export type Skill = {
  name: string;
  level: SkillLevel;
  /** Onde foi usado: slugs de projetos ou descrição curta. */
  where: ReadonlyArray<string>;
  note?: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: ReadonlyArray<Skill>;
};
