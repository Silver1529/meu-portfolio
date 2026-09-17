import type { Metadata } from 'next';
import ProjectShell, { ProjectSection, Bullets, Prose } from '@/src/components/project/ProjectShell';
import { Code, K, S, C, F, N } from '@/src/components/project/Code';

export const metadata: Metadata = {
  title: 'Timeline do Cliente',
  description:
    'Sistema de rastreamento de eventos que registra toda a jornada do cliente no CRM: tipos de evento, claiming de órfãos e metadata em português.',
};

const EVENT_TYPES = [
  { type: 'ATTENDANCE_START', label: 'Início de atendimento' },
  { type: 'DEAL_WON', label: 'Negócio ganho' },
  { type: 'DEAL_LOST', label: 'Negócio perdido' },
  { type: 'TRANSFER', label: 'Transferência' },
  { type: 'MANUAL_CHANGE', label: 'Mudança manual' },
  { type: 'INTERACTION', label: 'Interação' },
  { type: 'OTHER', label: 'Reabertura e outros' },
];

const USE_CASES = [
  'take-client.ts',
  'start-attendance.ts',
  'deal-win.ts',
  'deal-lose.ts',
  'update-queue-stage.ts',
  'redirect-to-broker-or-partner.ts',
  'deal-reopen.ts',
  'register-interaction.ts',
  '+ claiming em todos',
];

export default function TimelinePage() {
  return (
    <ProjectShell
      kicker="Rastreamento de eventos · CRM da Compare"
      title={
        <>
          Timeline do <span className="mark-accent">cliente</span>
        </>
      }
      summary={
        <>
          Arquitetura completa de <strong>rastreamento de eventos</strong> que registra toda a jornada do cliente no CRM.
          De transferências entre corretores até fechamento de negócios, cada ação é capturada com metadados detalhados
          em português.
        </>
      }
      meta={[
        { label: 'Contexto', value: 'CRM da Compare Plano de Saúde' },
        { label: 'Papel', value: 'Design e implementação' },
        { label: 'Período', value: '2025 – 2026' },
        { label: 'Integração', value: '9 casos de uso' },
      ]}
      tags={['TypeScript', 'MongoDB', 'Mongoose', 'React', 'Next.js']}
    >
      <ProjectSection label="Arquitetura" title="Um ponto único de criação">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Prose>
            <p>
              Sistema construído com <strong>RegisterTimelineEvent</strong> como ponto único de criação de eventos.
              Integrado em <strong>9 casos de uso</strong> diferentes, garantindo que nenhuma ação importante passe
              despercebida.
            </p>
            <Bullets
              items={[
                'Query com $or: busca por contactId ou clientId.',
                'Claiming automático de eventos órfãos após sincronização.',
                'Metadata 100% em português (modalidade, valor, operadora).',
                'Try/catch em todos os eventos: nunca quebra o fluxo principal.',
              ]}
            />
            <p>
              Mais tarde a camada evoluiu para um <strong>HistoryService</strong> central que também alimenta as métricas
              de retrabalho de forma idempotente e ganhou um job de reconstrução do histórico.
            </p>
          </Prose>
          <Code title="client-timeline.model.ts">
            <K>interface</K> <F>IClientTimeline</F> {'{'}
            {'\n'}  clientId?: ObjectId;
            {'\n'}  contactId?: <N>number</N>;
            {'\n'}  queueId?: ObjectId;
            {'\n'}  brokerId?: ObjectId;
            {'\n'}  type: TimelineType;
            {'\n'}  content: <N>string</N>;
            {'\n'}  metadata?: Mixed; <C>{'// valor, modalidade, operadora'}</C>
            {'\n'}{'}'}
          </Code>
        </div>
      </ProjectSection>

      <ProjectSection label="Eventos" title="Tipos de evento rastreados">
        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {EVENT_TYPES.map((e) => (
            <li key={e.type} className="flex items-baseline justify-between gap-4 border-b border-line-soft pb-3">
              <span className="font-mono text-xs text-accent">{e.type}</span>
              <span className="text-sm text-ink-2">{e.label}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Code title="types.ts">
            <K>const</K> types = [<S>{"'ATTENDANCE_START'"}</S>, <S>{"'DEAL_WON'"}</S>, <S>{"'DEAL_LOST'"}</S>, <S>{"'TRANSFER'"}</S>,
            {'\n'}  <S>{"'MANUAL_CHANGE'"}</S>, <S>{"'INTERACTION'"}</S>, <S>{"'OTHER'"}</S>];
          </Code>
        </div>
      </ProjectSection>

      <ProjectSection label="Órfãos" title="Claiming de órfãos">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Prose>
            <p>
              <strong>Problema:</strong> quando o cliente chega, só temos o <code className="font-mono text-accent">contactId</code>{' '}
              (Ploomes). O <code className="font-mono text-accent">clientId</code> (MongoDB) só existe após a sincronização.
            </p>
            <p>
              <strong>Solução:</strong> todos os 9 casos de uso fazem <strong>claiming automático</strong>, vinculando
              eventos órfãos ao clientId criado. A timeline fica completa mesmo antes da sincronização.
            </p>
          </Prose>
          <Code title="orphan-claiming.ts">
            <K>await</K> ClientTimeline.<F>updateMany</F>(
            {'\n'}  {'{'} contactId, clientId: {'{'} $exists: <K>false</K> {'}'} {'}'},
            {'\n'}  {'{'} $set: {'{'} clientId {'}'} {'}'},
            {'\n'});
          </Code>
        </div>
      </ProjectSection>

      <ProjectSection label="Query" title="Busca com $or">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Prose>
            <p>
              Busca eventos <strong>antes e depois</strong> da sincronização com o Ploomes usando o operador lógico{' '}
              <code className="font-mono text-accent">$or</code>.
            </p>
            <Bullets items={['Popula brokerId com o nome do usuário.', 'Ordena cronologicamente (ASC).', 'Retorna array formatado para a UI.']} />
          </Prose>
          <Code title="find-timeline.ts">
            ClientTimeline.<F>find</F>({'{'}
            {'\n'}  <K>$or</K>: [{'{'} contactId {'}'}, {'{'} clientId {'}'}],
            {'\n'}{'}'}).<F>sort</F>({'{'} createdAt: <N>1</N> {'}'});
          </Code>
        </div>
      </ProjectSection>

      <ProjectSection label="Metadata" title="Metadata localizada">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Prose>
            <p>
              Todos os eventos capturam metadata específica <strong>100% em português</strong> para análise e auditoria
              completa. Isso evita uma camada de tradução na tela e deixa o dado legível para quem opera.
            </p>
          </Prose>
          <Code title="metadata">
            metadata: {'{'}
            {'\n'}  modalidade: <S>{"'MEI'"}</S>,
            {'\n'}  operadora: <S>{"'Unimed'"}</S>,
            {'\n'}  valor: <N>5000</N>,
            {'\n'}  stageAntigo: <S>{"'Proposta'"}</S>,
            {'\n'}  stageNovo: <S>{"'Fechado'"}</S>,
            {'\n'}{'}'}
          </Code>
        </div>
      </ProjectSection>

      <ProjectSection label="Interface" title="Interface visual">
        <Prose>
          <p>
            <strong>ClientTimelineTree</strong> renderiza os eventos em um desenho de <strong>skill tree</strong> com
            layout alternado, mais de 20 ícones mapeados por tipo e animações de entrada. O gerente lê a história do
            cliente de cima para baixo, com quem atendeu, quando transferiu e por quanto fechou.
          </p>
        </Prose>
      </ProjectSection>

      <ProjectSection label="Integração" title="Integração em 9 casos de uso">
        <ul className="grid gap-2 font-mono text-xs text-ink-2 sm:grid-cols-2 md:grid-cols-3">
          {USE_CASES.map((file) => (
            <li key={file} className="flex items-center gap-2 border border-line-soft px-3 py-2">
              <span aria-hidden className="h-px w-2 bg-accent" />
              {file}
            </li>
          ))}
        </ul>
      </ProjectSection>
    </ProjectShell>
  );
}
