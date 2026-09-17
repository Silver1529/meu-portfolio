import type { Metadata } from 'next';
import ProjectShell, { ProjectSection, FactList, Bullets, Prose } from '@/src/components/project/ProjectShell';
import { Code, K, S, C, F, DataPanel } from '@/src/components/project/Code';

export const metadata: Metadata = {
  title: 'CRM Core & Extensões',
  description:
    'Núcleo do CRM da Compare Plano de Saúde: back-end Node.js com Mongoose, front-end Next.js 16, integrações Google e Ploomes, extensão de navegador e queries otimizadas.',
};

const FEATURES = [
  { term: 'Automações do corretor', desc: 'Modelo de gatilhos e ações, motor de execução e pontos de disparo ao longo do funil, com claiming automático e cron.' },
  { term: 'Histórico centralizado do cliente', desc: 'HistoryService + ClientTimeline como camada única de eventos, com job de reconstrução do histórico. Detalhado na página Timeline do Cliente.' },
  { term: 'Painel de negócios', desc: 'Funil e lista em /broker/negocios com correção de N+1, memoização, cache e reforma visual de cards e colunas.' },
  { term: 'Métricas de retrabalho', desc: 'Metas semanais e diárias por time, fonte idempotente na timeline, endpoints para mestre e líder.' },
  { term: 'Relatório PME por WhatsApp', desc: 'Módulo próprio com cron, envio manual e comando de chat, integrado ao bot de WhatsApp.' },
  { term: 'Financeiro', desc: 'Disparo consolidado de e-mails de folha, benefício e vale-transporte com templates configuráveis; bônus coletivo por meta de vendas.' },
  { term: 'Recuperação de leads perdidos', desc: 'Perda manual por falta de contato dispara e-mail, notifica o consultor e registra na timeline, com deduplicação por evento.' },
  { term: 'GCLID e conversões offline', desc: 'Leads ganhos, perdidos e propostas exportados para planilhas Google no formato de conversões do Google Ads, com retenção e dedup atômico.' },
  { term: 'Parceiros e transferências', desc: 'Regras de envio de leads a parceiros com limite diário, bloqueios absolutos e transferência de clientes para qualquer consultor ativo.' },
];

export default function CrmPage() {
  return (
    <ProjectShell
      kicker="Sistema interno · Compare Plano de Saúde"
      title={
        <>
          Núcleo CRM &amp; <span className="mark-accent">extensões seguras</span>
        </>
      }
      summary={
        <>
          Atuação profunda na engenharia do sistema que a operação comercial da Compare usa todos os dias. Do design de
          APIs seguras à otimização de queries em bancos NoSQL, focando na eliminação de gargalos operacionais.
        </>
      }
      meta={[
        { label: 'Contexto', value: 'Compare Plano de Saúde · CRM próprio' },
        { label: 'Papel', value: 'Engenheiro full stack' },
        { label: 'Período', value: '2025 – atual' },
        { label: 'Escala', value: 'Milhares de leads por dia' },
        { label: 'Qualidade', value: '200+ arquivos de teste (Vitest) · GitLab CI' },
      ]}
      tags={[
        'Node.js',
        'Express 5',
        'routing-controllers',
        'Mongoose',
        'Redis',
        'Socket.IO',
        'Next.js 16',
        'React Query',
        'Radix UI',
        'dnd-kit',
        'Google APIs',
        'Google Ads API',
        'OData / Ploomes',
        'Anthropic SDK',
      ]}
    >
      <ProjectSection label="Integração" title="Integração Google Cloud">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Prose>
            <p>
              Desenvolvi um <strong>middleware de integração</strong> que elimina a necessidade de trocar de janela. O
              sistema intercepta leads via API, trata os dados em tempo real e os injeta no contexto da extensão.
            </p>
            <Bullets
              items={[
                'OAuth 2.0 para autenticação segura sem expor credenciais.',
                'Sincronização bidirecional (CRM ↔ Planilhas/Drive).',
                'Redução de 40% no tempo de cadastro de novos leads.',
                'Conversões offline do Google Ads exportadas para planilhas com order_id, e-mail e telefone em hash SHA-256, valor e GCLID.',
              ]}
            />
          </Prose>
          <Code title="sync-lead.ts">
            <K>const</K> <F>syncLead</F> = <K>async</K> (data) =&gt; {'{'}
            {'\n'}  <K>const</K> token = <K>await</K> googleAuth.<F>getToken</F>();
            {'\n'}  <C>{'// pipeline de injeção segura'}</C>
            {'\n'}  <K>await</K> crm.<F>inject</F>({'{'}
            {'\n'}    client: data.name,
            {'\n'}    source: <S>{"'Google API'"}</S>,
            {'\n'}  {'}'});
            {'\n'}{'}'};
          </Code>
        </div>
      </ProjectSection>

      <ProjectSection label="Arquitetura" title="Como o sistema é montado">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Prose>
            <p>
              O back-end é um monólito organizado em pacotes internos: <strong>http</strong> (controllers com
              routing-controllers e decorators), <strong>application</strong> (casos de uso e scripts operacionais) e{' '}
              <strong>utils</strong>. Persistência em MongoDB com Mongoose, Redis para cache e para o adapter do Socket.IO
              em múltiplas instâncias, uploads em GridFS, agendamentos com node-cron e logs estruturados com Winston.
            </p>
            <p>
              O front-end é uma aplicação Next.js 16 (App Router) com React Query, Radix UI, tabelas virtualizadas do
              TanStack, kanban com dnd-kit, editor de fluxos com React Flow, gráficos em Recharts e server actions
              tipadas. Tempo real via socket.io-client.
            </p>
            <p>
              Somando os dois repositórios são cerca de <strong>800 commits meus</strong>, uma suíte de mais de 200
              arquivos de teste em Vitest com MongoDB em memória e pipeline de teste e build no GitLab CI.
            </p>
          </Prose>
          <Code title="estrutura">
            <C>crm-backend/</C>
            {'\n'}├── packages/
            {'\n'}│   ├── <F>http/</F>         <C>controllers</C>
            {'\n'}│   ├── <F>application/</F>  <C>use-cases</C>
            {'\n'}│   └── <F>utils/</F>
            {'\n'}├── docs/              <C>apiDoc</C>
            {'\n'}└── .gitlab-ci.yml     <C>test → build</C>
            {'\n'}
            {'\n'}<C>crm-frontend/</C>
            {'\n'}└── src/app/           <C>Next.js 16</C>
          </Code>
        </div>
      </ProjectSection>

      <ProjectSection label="Dados" title="Engenharia de dados">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Prose>
            <p>
              Arquitetura de banco otimizada para alta performance. Criação de índices compostos e{' '}
              <strong>aggregation pipelines</strong> no MongoDB para gerar relatórios complexos em milissegundos.
            </p>
            <p>
              Campos de atribuição de marketing (GCLID, UTM, origem) são <strong>cifrados de forma determinística</strong>{' '}
              por exigência da LGPD, o que ainda permite agrupar e comparar valores sem descriptografar. Três fontes de
              dados de lead convivem no sistema e cada tela sabe qual delas é autoritativa.
            </p>
          </Prose>
          <DataPanel
            title="query performance"
            status={<span className="text-ok">98/100</span>}
            rows={[
              { k: 'estratégia', v: 'índices compostos' },
              { k: 'relatórios', v: 'aggregation pipeline' },
              { k: 'atribuição', v: 'aes-256-cbc determinístico' },
              { k: 'testes', v: 'mongodb-memory-server' },
            ]}
          />
        </div>
      </ProjectSection>

      <ProjectSection label="Extensão" title="Segurança e isolamento">
        <Prose>
          <p>
            Desenvolvimento de extensão React rodando em <strong>contexto isolado (sandboxed)</strong>. Utilização de
            Shadow DOM para evitar conflitos de estilo e comunicação criptografada com o back-end. É a peça que leva o CRM
            até onde o corretor está, sem trocar de aba.
          </p>
        </Prose>
      </ProjectSection>

      <ProjectSection label="Features" title="O que entreguei no CRM">
        <FactList items={FEATURES} />
      </ProjectSection>

      <ProjectSection label="Integrações" title="Sistemas que conversam com o CRM">
        <Bullets
          items={[
            'Ploomes, o CRM externo da Compare, via OData v4 através do serviço OData Handler.',
            'Google Sheets, Calendar e OAuth 2.0 (googleapis) para planilhas de conversão e agenda.',
            'Google Ads API para mineração de termos e cruzamento de investimento com resultado comercial.',
            'Bot de WhatsApp multicliente (whatsapp-web.js) para etapas de funil, relatórios e follow-up.',
            'Anthropic SDK para recursos assistidos por IA.',
            'Compare Flow recebe webhook de venda e o Bate Ponto compartilha a jornada dos colaboradores.',
          ]}
        />
      </ProjectSection>

      <ProjectSection label="Infra" title="Infraestrutura e deploy">
        <Prose>
          <p>
            Pipelines de CI/CD no GitLab com estágios de teste e build, ambientes de QA e produção separados e
            containerização onde o serviço pede. Deploy dos serviços Node em VPS e dos front-ends em servidores
            próprios da empresa.
          </p>
        </Prose>
      </ProjectSection>
    </ProjectShell>
  );
}
