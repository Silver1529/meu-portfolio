import type { Metadata } from 'next';
import ProjectShell, { ProjectSection, FactList, Bullets, Prose } from '@/src/components/project/ProjectShell';
import { Code, K, S, N } from '@/src/components/project/Code';

export const metadata: Metadata = {
  title: 'CRUD Dungeon',
  description:
    'RPG top-down onde cada ação do jogador é uma operação CRUD real em MySQL. Kaplay, Next.js 16 e back-end endurecido.',
};

const CRUD_MAP = [
  { tool: 'BUILD', verb: 'POST', sql: 'INSERT', desc: 'Constrói uma casa nova no tile à frente do jogador.' },
  { tool: 'UPGRADE', verb: 'PUT', sql: 'UPDATE', desc: 'Evolui a casa para o próximo nível visual (1 → 2 → 3).' },
  { tool: 'DELETE', verb: 'DELETE', sql: 'DELETE', desc: 'Apaga a casa do banco, com animação de queda.' },
  { tool: 'INSPECT', verb: 'GET', sql: 'SELECT', desc: 'Lê os dados da casa (SELECT WHERE id = ?).' },
];

export default function CrudDungeonPage() {
  return (
    <ProjectShell
      kicker="Jogo educacional · full stack · projeto pessoal"
      title={
        <>
          CRUD <span className="mark-accent">Dungeon</span>
        </>
      }
      summary={
        <>
          Um RPG top-down onde cada ação do jogador é uma operação <strong>CRUD real</strong> em um banco MySQL. Construir
          uma casa? <span className="font-mono text-accent">INSERT</span>. Evoluir?{' '}
          <span className="font-mono text-accent">UPDATE</span>. Aprender SQL nunca foi tão divertido.
        </>
      }
      meta={[
        { label: 'Contexto', value: 'Projeto pessoal · educacional' },
        { label: 'Papel', value: 'Design, código e deploy' },
        { label: 'Licença', value: 'MIT · código aberto' },
        { label: 'Deploy', value: 'Vercel + AWS RDS' },
      ]}
      tags={['Next.js 16', 'React 19', 'TypeScript', 'Kaplay', 'MySQL', 'mysql2', 'AWS RDS', 'Zustand', 'React Query', 'Zod', 'Tailwind v4', 'Framer Motion']}
      links={[
        { label: 'Jogar agora', href: 'https://crud-dungeon.vercel.app/', primary: true },
        { label: 'Código no GitHub', href: 'https://github.com/Silver1529/crud-dungeon' },
      ]}
    >
      <ProjectSection label="Mecânica" title="A mágica educacional">
        <Prose>
          <p>
            Cada ferramenta do jogador tem mapeamento explícito para o verbo HTTP correspondente e a palavra-chave SQL
            gerada no back-end. O painel CRUD Live mostra essa correspondência em tempo real: o aluno{' '}
            <strong>vê o jogo virar query</strong>.
          </p>
        </Prose>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[34rem] text-left text-sm">
            <thead className="font-mono text-[0.7rem] uppercase tracking-wide text-muted">
              <tr className="border-b border-line">
                <th className="py-2 pr-4 font-normal">Ferramenta</th>
                <th className="py-2 pr-4 font-normal">HTTP</th>
                <th className="py-2 pr-4 font-normal">SQL</th>
                <th className="py-2 font-normal">Efeito no jogo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line-soft">
              {CRUD_MAP.map((row) => (
                <tr key={row.tool}>
                  <td className="py-3 pr-4 font-mono font-semibold text-ink">{row.tool}</td>
                  <td className="py-3 pr-4 font-mono text-accent">{row.verb}</td>
                  <td className="py-3 pr-4 font-mono text-ink-2">{row.sql}</td>
                  <td className="py-3 text-ink-2">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ProjectSection>

      <ProjectSection label="HUD" title="CRUD Live · tela dividida">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Prose>
            <p>
              Um HUD flutuante sobre o canvas com cinco painéis observáveis: <strong>Database View</strong>,{' '}
              <strong>Activity Log</strong>, <strong>Network Log</strong>, <strong>SQL Console</strong> e{' '}
              <strong>Stats Cards</strong>. O jogador joga e depura ao mesmo tempo.
            </p>
          </Prose>
          <Code title="sql console" footer={<span className="text-ok">✓ 1 row affected · 12ms</span>}>
            <K>INSERT INTO</K> objetos
            {'\n'}  (tipo, pos_x, pos_y)
            {'\n'}<K>VALUES</K> (<S>{"'servidor'"}</S>, <N>20</N>, <N>14</N>);
          </Code>
        </div>
      </ProjectSection>

      <ProjectSection label="Back-end" title="Back-end endurecido">
        <Prose>
          <p>
            Apesar de ser um jogo, a API segue padrões de produção: tokens <strong>CSRF</strong>,{' '}
            <strong>rate limiting</strong>, validação por schema com <strong>Zod</strong>, sanitização de input e prepared
            statements no <strong>mysql2</strong>. Route Handlers do Next.js falam com um MySQL no AWS RDS.
          </p>
        </Prose>
        <ul className="mt-5 flex flex-wrap gap-2 font-mono text-[0.72rem]">
          {['CSRF', 'Rate limit', 'Zod', 'Prepared statements', 'Sanitização'].map((t) => (
            <li key={t} className="rounded-sm border border-line px-2 py-0.5 text-ink-2">
              {t}
            </li>
          ))}
        </ul>
      </ProjectSection>

      <ProjectSection label="Engine" title="Engine sob medida">
        <Prose>
          <p>
            Construído sobre <strong>Kaplay</strong> (engine HTML5 para canvas 2D), com grade de 40 × 28 tiles, câmera com
            zoom 1,5×, sprites em múltiplos níveis para a evolução das casas e efeitos sonoros próprios por evento. Os
            objetos do mundo são servidor, banco, cache e router: a infraestrutura vira cenário.
          </p>
        </Prose>
      </ProjectSection>

      <ProjectSection label="Onboarding" title="Tutorial e quiz">
        <Prose>
          <p>
            Onboarding em <strong>7 etapas guiadas</strong> (nome → introdução → mover → criar → ler → atualizar → apagar)
            e um <strong>quiz final</strong> que valida o aprendizado dos quatro verbos CRUD antes de liberar o modo livre.
            O progresso fica persistido no localStorage.
          </p>
        </Prose>
      </ProjectSection>

      <ProjectSection label="Stack" title="Stack completa">
        <FactList
          items={[
            { term: 'Front-end', desc: 'Next.js 16 (App Router), React 19, Tailwind v4, Framer Motion.' },
            { term: 'Jogo', desc: 'Kaplay 3001, Canvas 2D, efeitos sonoros customizados.' },
            { term: 'Back-end', desc: 'MySQL via mysql2, Route Handlers, schemas Zod.' },
            { term: 'Nuvem e estado', desc: 'AWS RDS, Vercel, Zustand, React Query, localStorage.' },
          ]}
        />
        <div className="mt-6">
          <Bullets items={['Repositório público no GitHub, licença MIT.', 'Demo publicada em crud-dungeon.vercel.app.']} />
        </div>
      </ProjectSection>
    </ProjectShell>
  );
}
