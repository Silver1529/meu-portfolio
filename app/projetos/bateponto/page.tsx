import type { Metadata } from 'next';
import ProjectShell, { ProjectSection, FactList, Bullets, Prose } from '@/src/components/project/ProjectShell';
import { Code, K, S, C, F, DataPanel } from '@/src/components/project/Code';

export const metadata: Metadata = {
  title: 'Bate Ponto',
  description:
    'Sistema de registro de ponto com geofencing, fluxo de aprovação, métricas em tempo real e relatórios PDF/Excel. NestJS + Next.js em monorepo.',
};

const MODULES = [
  { term: 'Marcações', desc: '4 eventos por dia: entrada, almoço, retorno e saída.' },
  { term: 'Funcionários', desc: 'CRUD com papéis, jornada e modelo de trabalho.' },
  { term: 'Solicitações', desc: 'Aprovação de pontos batidos fora do raio.' },
  { term: 'Ajustes', desc: 'Correções manuais de horas pelo administrador.' },
  { term: 'Equipes', desc: 'Métricas agregadas por time.' },
  { term: 'Notificações', desc: 'E-mails de boas-vindas e confirmação.' },
  { term: 'Auth', desc: 'JWT com troca de senha obrigatória no primeiro acesso.' },
  { term: 'Observabilidade', desc: 'Logs estruturados e métricas.' },
];

export default function BatePontoPage() {
  return (
    <ProjectShell
      kicker="Sistema corporativo · monorepo · Compare Plano de Saúde"
      title={
        <>
          Bate <span className="mark-accent">Ponto</span>
        </>
      }
      summary={
        <>
          Sistema completo de marcação de ponto com <strong>geofencing</strong>, fluxo de aprovação e métricas em tempo
          real. Arquitetura em monorepo com <strong>NestJS</strong> + <strong>Next.js</strong>, preparado para times
          híbridos, home office e presencial.
        </>
      }
      meta={[
        { label: 'Contexto', value: 'Compare Plano de Saúde · RH e liderança' },
        { label: 'Papel', value: 'Autor de 39 dos 40 commits' },
        { label: 'Período', value: 'abril – agosto de 2026' },
        { label: 'Integração', value: 'Compare Flow (jornada CLT)' },
      ]}
      tags={['NestJS 11', 'Next.js', 'MongoDB', 'Mongoose 9', 'Prisma', 'BullMQ', 'Redis', 'JWT', 'Zod', 'Turborepo', 'Yarn 4', 'Tailwind v4']}
    >
      <ProjectSection label="Geofencing" title="Geofencing inteligente">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Prose>
            <p>
              Cada batida é validada por <strong>distância Haversine</strong> entre a coordenada do funcionário e a sede
              da empresa (raio padrão de 650 m). Fora do raio? O ponto vira uma <strong>solicitação</strong> que entra na
              fila de aprovação do administrador.
            </p>
            <Bullets
              items={[
                'Política de geolocalização adaptativa: presencial, home office e híbrido.',
                'Híbrido: configuração por dia da semana (em casa ou na empresa).',
                'Auditoria completa: distância, coordenadas e administrador aprovador.',
              ]}
            />
          </Prose>
          <Code title="marcacao.controller.ts · POST /marcacoes">
            <K>const</K> dist = <F>haversine</F>(user.coords, empresa);
            {'\n'}<K>if</K> (dist &lt;= RAIO_M) {'{'}
            {'\n'}  <C>{'// dentro do raio'}</C>
            {'\n'}  <F>registrarPonto</F>(evento);
            {'\n'}  <F>sendMail</F>(<S>{"'confirmação'"}</S>);
            {'\n'}{'}'} <K>else</K> {'{'}
            {'\n'}  <C>{'// fora do raio'}</C>
            {'\n'}  <F>criarSolicitacao</F>({'{'} evento, dist, lat, lng,
            {'\n'}    status: <S>{"'pendente'"}</S> {'}'});
            {'\n'}{'}'}
          </Code>
        </div>
      </ProjectSection>

      <ProjectSection label="Monorepo" title="Monorepo Turbo">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Prose>
            <p>
              Estrutura organizada em <strong>apps</strong> (api, web) e <strong>packages</strong> (shared, database,
              apuracao). Build distribuído com <strong>Turborepo</strong>, cache compartilhado e dependências entre
              pacotes, em Yarn 4 workspaces. Husky, lint-staged e commitlint garantem o padrão dos commits.
            </p>
          </Prose>
          <Code title="bateponto/">
            ├── apps/
            {'\n'}│   ├── <F>api/</F>        <C>NestJS 11</C>
            {'\n'}│   └── <F>web/</F>        <C>Next.js</C>
            {'\n'}└── packages/
            {'\n'}    ├── <F>shared/</F>     <C>tipos e DTOs</C>
            {'\n'}    ├── <F>database/</F>   <C>Prisma</C>
            {'\n'}    └── <F>apuracao/</F>   <C>cálculo de horas</C>
          </Code>
        </div>
      </ProjectSection>

      <ProjectSection label="Aprovação" title="Aprovação granular">
        <Prose>
          <p>
            O administrador recebe solicitações pendentes com geolocalização e distância exata. Pode{' '}
            <strong>aprovar</strong> (vira marcação real) ou <strong>recusar</strong> com motivo. Tudo auditado com
            timestamps e responsável.
          </p>
        </Prose>
        <ul className="mt-5 flex flex-wrap gap-2 font-mono text-[0.72rem]">
          {['pendente', 'aprovada', 'recusada'].map((s) => (
            <li key={s} className="rounded-sm border border-line px-2 py-0.5 text-ink-2">
              {s}
            </li>
          ))}
        </ul>
      </ProjectSection>

      <ProjectSection label="Segurança" title="Segurança em camadas">
        <Prose>
          <p>
            JWT com Passport.js, <strong>bcrypt</strong> (12 rounds), <strong>Helmet</strong>,{' '}
            <strong>Throttler</strong> contra brute force e troca de senha obrigatória no primeiro acesso. Decorators
            próprios <code className="font-mono text-accent">@Roles</code> e{' '}
            <code className="font-mono text-accent">@CurrentUser</code>. Contratos validados com Zod via nestjs-zod.
          </p>
        </Prose>
      </ProjectSection>

      <ProjectSection label="Relatórios" title="Métricas e relatórios">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Prose>
            <p>
              Cálculo de horas trabalhadas, almoço, extras e esperadas por <strong>dia, semana e mês</strong>. Agregações
              por time e gráficos em Recharts. Exports nativos para <strong>PDF</strong> (pdf-lib e jsPDF) e{' '}
              <strong>Excel</strong> (ExcelJS). Cron com @nestjs/schedule e filas BullMQ para processamento assíncrono.
            </p>
          </Prose>
          <DataPanel
            title="semana · consultor"
            status={<span className="text-ok">LIVE</span>}
            rows={[
              { k: 'trabalhado', v: '42h 18m' },
              { k: 'esperado', v: '40h 00m' },
              { k: 'extras', v: '+2h 18m' },
              { k: 'status', v: <span className="text-ok">✓ aprovado</span> },
            ]}
          />
        </div>
      </ProjectSection>

      <ProjectSection label="Flow" title="Integração com o Compare Flow">
        <Bullets
          items={[
            'Webhook envia o evento de almoço para o Flow, que muda o status da pessoa para "Almoçando" com timer.',
            'Integração bidirecional: bater e ler pontos direto do Flow, com aba de Ponto no perfil.',
            'Regime de jornada do Bate Ponto alimenta a detecção de hora extra e o fluxo de aprovação e bloqueio do Flow.',
          ]}
        />
      </ProjectSection>

      <ProjectSection label="Stack" title="Stack completa">
        <FactList
          items={[
            { term: 'Back-end', desc: 'NestJS 11, Mongoose 9, Zod + nestjs-zod, Passport JWT, @nestjs/bullmq, @nestjs/schedule, Throttler, Helmet.' },
            { term: 'Front-end', desc: 'Next.js, Radix UI, React Hook Form, TanStack Query e Table, Recharts, Tailwind v4.' },
            { term: 'Infra', desc: 'MongoDB, Redis + BullMQ, Turborepo, Yarn 4 workspaces, Prisma no package database.' },
            { term: 'Integrações', desc: 'Nodemailer (SMTP), pdf-lib + jsPDF + ExcelJS, cep-promise, date-fns com timezone.' },
          ]}
        />
      </ProjectSection>

      <ProjectSection label="Módulos" title="Módulos do sistema">
        <FactList items={MODULES} />
      </ProjectSection>
    </ProjectShell>
  );
}
