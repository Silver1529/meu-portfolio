import type { Metadata } from 'next';
import ProjectShell, { ProjectSection, FactList, Bullets, Prose } from '@/src/components/project/ProjectShell';
import { Code, K, S, C, F, DataPanel } from '@/src/components/project/Code';

export const metadata: Metadata = {
  title: 'Compare Flow',
  description:
    'Plataforma interna que une Kanban hierárquico, mensageria em tempo real, voz P2P e um servidor MCP para agentes de IA operarem a plataforma.',
};

const MODULES = [
  { term: 'Kanban hierárquico', desc: 'Sprint → Board → Task → Card → Comentário, com permissão multi-time por dono e convidados em cada nível. Arrastar cards entre quadros diferentes num único contexto de drag.' },
  { term: 'Mensageria', desc: 'Canais por time, mensagens diretas, digitação e visto em tempo real, menções e um grupo global de Sistemas para tickets.' },
  { term: 'Voz e tela', desc: 'Chamadas em malha P2P com WebRTC, supressor de ruído RNNoise em WASM, compartilhamento de tela e um "chamar atenção" que alcança a pessoa em qualquer tela.' },
  { term: 'Missões e workflow', desc: 'Supervisores atribuem missões que viram cards com inbox; abas de workflow por pessoa e liderança; modal diário de início e fim.' },
  { term: 'Compare IA', desc: 'Assistente que agenda reuniões a partir de menções no chat, narra tutoriais de casos de uso e conduz a review semanal obrigatória.' },
  { term: 'Jornada CLT', desc: 'Integração com o Bate Ponto: status de almoço com timer, batidas e leitura de ponto, detecção de hora extra com aprovação e liberação programada.' },
  { term: 'Tickets e cobranças', desc: 'Painel de tickets com ranking de quem mais resolveu, perguntas ao autor com modal obrigatório e cobranças com prazo que bloqueiam até resposta.' },
  { term: 'Mobile', desc: 'PWA instalável com shell e navegação inferior, sem loja de aplicativos.' },
];

export default function FlowPage() {
  return (
    <ProjectShell
      kicker="Plataforma interna · Compare Plano de Saúde"
      title={
        <>
          Compare <span className="mark-accent">Flow</span>
        </>
      }
      summary={
        <>
          Plataforma corporativa que une Kanban hierárquico com mensageria em tempo real. O objetivo é substituir
          Trello, Slack e e-mail por uma única ferramenta que respeita a hierarquia organizacional da empresa.
        </>
      }
      meta={[
        { label: 'Contexto', value: 'Compare Plano de Saúde · uso interno' },
        { label: 'Papel', value: 'Engenheiro full stack · ~70% dos commits' },
        { label: 'Período', value: 'maio de 2026 – atual' },
        { label: 'Testes', value: 'Vitest + Playwright e2e' },
      ]}
      tags={[
        'Next.js 15',
        'React 18',
        'Custom server (tsx)',
        'Socket.IO',
        'Redis adapter',
        'WebRTC',
        'RNNoise (WASM)',
        'MongoDB',
        'Redux Toolkit / RTK Query',
        'jose + bcrypt',
        'MCP SDK',
        'Anthropic SDK',
        'Gemini',
        'PWA',
      ]}
    >
      <ProjectSection label="Arquitetura" title="Um processo, Next e Socket.IO juntos">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Prose>
            <p>
              O back-end não é um serviço separado: um <strong>servidor customizado</strong> sobe o Next.js (App Router) e
              o Socket.IO no mesmo processo e na mesma porta. Os route handlers fazem o papel de API, com Mongoose direto
              e um adapter Redis para o Socket.IO funcionar em múltiplas instâncias.
            </p>
            <p>
              A hierarquia de dados do Kanban é mais profunda que o usual (Sprint, Board, Task com colunas, Card,
              Comentário) e cada nível carrega <strong>dono e times convidados</strong>. A fonte única de permissões usa
              um caminho materializado da hierarquia organizacional, o que permite regras como “SUPER_ADM tem os poderes
              do CEO exceto ver o conteúdo do CEO” sem espalhar condicionais.
            </p>
            <p>
              Uma regra universal garante que colaboradores demitidos não aparecem em nada: choke-points de leitura e
              guards de escrita, com cache do conjunto de IDs.
            </p>
          </Prose>
          <Code title="server.ts">
            <K>const</K> app = <F>next</F>({'{'} dev {'}'});
            {'\n'}<K>const</K> server = http.<F>createServer</F>(handle);
            {'\n'}<K>const</K> io = <K>new</K> <F>Server</F>(server);
            {'\n'}io.<F>adapter</F>(<F>createAdapter</F>(pub, sub)); <C>{'// Redis'}</C>
            {'\n'}
            {'\n'}io.<F>on</F>(<S>{"'connection'"}</S>, (socket) =&gt; {'{'}
            {'\n'}  <F>joinUserRoom</F>(socket);
            {'\n'}  <F>joinTeamNamespaces</F>(socket);
            {'\n'}{'}'});
            {'\n'}server.<F>listen</F>(PORT);
          </Code>
        </div>
      </ProjectSection>

      <ProjectSection label="Tempo real" title="Voz em malha e avisos que chegam">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Prose>
            <p>
              Chamadas de voz usam <strong>WebRTC em malha P2P</strong>, sem SFU, o que funciona bem para os times
              pequenos da empresa. O microfone passa por um supressor de ruído RNNoise compilado para WASM, carregado por
              import dinâmico para não quebrar o SSR. O compartilhamento de tela foi refatorado em fases para não
              sobrecarregar a malha, com TURN provisionado.
            </p>
            <p>
              Avisos que precisam alcançar a pessoa em qualquer tela (missão atribuída, cobrança vencendo, chamar atenção)
              vivem no shell global da aplicação, não em uma rota específica. Em produção com várias instâncias,
              indicadores para quem está fora de uma sala são emitidos no namespace inteiro.
            </p>
          </Prose>
          <DataPanel
            title="voice · mesh"
            status={<span className="text-ok">conectado</span>}
            rows={[
              { k: 'topologia', v: 'P2P mesh' },
              { k: 'ruído', v: 'RNNoise · WASM' },
              { k: 'sinalização', v: 'Socket.IO' },
              { k: 'NAT', v: 'STUN + TURN' },
              { k: 'tela', v: 'replaceTrack' },
            ]}
          />
        </div>
      </ProjectSection>

      <ProjectSection label="MCP" title="Um agente de IA opera a plataforma">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Prose>
            <p>
              Construí um <strong>servidor MCP</strong> (Model Context Protocol) dentro do próprio app, em transporte HTTP
              stateless. A autenticação é por chave de API pessoal: o servidor guarda só o hash SHA-256 do segredo e, a
              cada requisição, monta a sessão do usuário ao vivo a partir do CRM. A identidade vem sempre da chave;
              nenhuma ferramenta aceita agir em nome de outra pessoa.
            </p>
            <p>
              Cada uma das dezenas de ferramentas é um wrapper fino sobre um service já existente, então o{' '}
              <strong>gate de permissão do próprio usuário é reaproveitado</strong>. Escritas destrutivas exigem
              confirmação explícita. O rate limit roda por IP antes da autenticação e por usuário depois.
            </p>
          </Prose>
          <Code title="POST /api/mcp">
            <K>const</K> session = <K>await</K> <F>buildSessionForApiKey</F>(bearer);
            {'\n'}<K>const</K> server = <F>buildMcpServer</F>(session);
            {'\n'}
            {'\n'}<F>registerTool</F>(server, {'{'}
            {'\n'}  name: <S>{"'create_card'"}</S>,
            {'\n'}  handler: (args) =&gt; kanban.<F>createCard</F>(session, args),
            {'\n'}{'}'});
            {'\n'}<C>{'// permissão: a mesma do usuário na UI'}</C>
          </Code>
        </div>
      </ProjectSection>

      <ProjectSection label="Módulos" title="O que a plataforma faz">
        <FactList items={MODULES} />
      </ProjectSection>

      <ProjectSection label="Segurança" title="Revisões adversariais como rotina">
        <Bullets
          items={[
            'Biblioteca própria de segurança: criptografia, rate limit, sanitização e auditoria, todas com testes.',
            'Uploads de áudio (o "sino de vendas") são validados no GridFS, sem confiar em mimetype ou tamanho vindos do cliente.',
            'Chaves de API só existem em hash; o segredo é exibido uma única vez ao ser gerado.',
            'Revisão adversarial do servidor MCP fechou sem achados críticos ou altos e ainda corrigiu um bug de permissão pré-existente.',
          ]}
        />
      </ProjectSection>
    </ProjectShell>
  );
}
