import type { Metadata } from 'next';
import ProjectShell, { ProjectSection, FactList, Bullets, Prose } from '@/src/components/project/ProjectShell';
import { Code, K, S, C, F, N, DataPanel } from '@/src/components/project/Code';

export const metadata: Metadata = {
  title: 'Automação & Bots',
  description:
    'Compare AI, QA de formulários com Playwright, boletos, marketing, conteúdo WordPress com IA, Google Ads, scraping de preços e os bots de QA, retenção e ETL.',
};

const COMPARE_AI = [
  {
    term: 'QA de formulários de lead',
    desc: 'Bot Playwright visita os sites de venda da Compare e preenche e envia formulários reais em três cenários (topo, rodapé, cotação). Sucesso só conta com envio confirmado por resposta de rede ou redirect de obrigado; detecta captcha, formulários em iframe (RD Station, HubSpot, Typeform) e banners de cookies. Fila BullMQ com concorrência 1 e polling real de status na UI.',
  },
  {
    term: 'Boletos Bradesco',
    desc: 'Automação de cobrança com cadastro de beneficiários, credenciais criptografadas e cron que gera o boleto quinze dias antes do vencimento, lidando com SSO, popups e iframes do internet banking.',
  },
  {
    term: 'Marketing: Meta e TikTok',
    desc: 'Publicação de vídeos no Facebook e Instagram via Graph API e no TikTok, com múltiplas contas, normalização de mídia com ffmpeg, métricas de engajamento e modo revisor para auditoria.',
  },
  {
    term: 'Conteúdo WordPress com IA',
    desc: 'Gera posts e páginas seguindo SEO, GEO e legibilidade Yoast, monta o layout no Elementor via REST e mantém uma fila de pautas que se reabastece sozinha, com lock atômico e cron de saúde.',
  },
  {
    term: 'Google Ads',
    desc: 'Mineração de termos de pesquisa via API oficial com sugestão de palavra-chave ou negativa por regras e IA. Página de cruzamento CRM × Google Ads com investimento, receita, ROAS, CPA e cobertura de atribuição, consumindo um endpoint dedicado do CRM protegido por Basic Auth.',
  },
];

export default function AutomacaoPage() {
  return (
    <ProjectShell
      kicker="Compare AI · QA · scraping · bots"
      title={
        <>
          Automação &amp; <span className="mark-accent">bots</span>
        </>
      }
      summary={
        <>
          Ecossistema de scripts e serviços autônomos para QA, ETL de dados, marketing e recuperação de receita.
          Substituindo processos manuais por código Python e Node.js de alta eficiência, hoje concentrado num painel
          interno com filas e workers.
        </>
      }
      meta={[
        { label: 'Contexto', value: 'Compare Plano de Saúde · operações e marketing' },
        { label: 'Papel', value: 'Autor principal do painel (~75% dos commits)' },
        { label: 'Período', value: '2025 – atual' },
        { label: 'Execução', value: 'Workers BullMQ · Redis · Playwright headless' },
      ]}
      tags={[
        'Next.js 16',
        'BullMQ',
        'Redis',
        'Playwright',
        'MongoDB',
        'NextAuth',
        'Google Ads API',
        'Meta Graph API',
        'WordPress REST',
        'Anthropic SDK',
        'OpenAI',
        'Python',
        'Selenium',
        'ExcelJS',
        'Pandas',
      ]}
    >
      <ProjectSection label="Compare AI" title="O painel interno de automação">
        <Prose>
          <p>
            <strong>Compare AI</strong> consolida num só lugar as automações da equipe de marketing, operações, SEO e
            liderança. Cada módulo roda como worker numa fila BullMQ sobre Redis; a interface só enfileira e acompanha.
            Isso tirou o Playwright de dentro das server actions e deu ao usuário um status verdadeiro do que foi feito.
          </p>
        </Prose>
        <div className="mt-8">
          <FactList items={COMPARE_AI} />
        </div>
      </ProjectSection>

      <ProjectSection label="Scraping" title="Preços e rede credenciada">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Prose>
            <p>
              Um serviço separado coleta preços e rede credenciada das operadoras no painel do corretor e grava no
              MongoDB. O dashboard Next.js dispara a coleta, acompanha o progresso ao vivo por{' '}
              <strong>Server-Sent Events</strong> e mostra as tabelas extraídas com o diff de preços entre coletas.
            </p>
            <p>
              Roda em instância única sob PM2, com lock por PID, checkpoint para retomar de onde parou, histórico de
              execuções e agendamento. Sessão protegida por JWT em cookie httpOnly e migrações versionadas.
            </p>
          </Prose>
          <DataPanel
            title="GET /api/scraper/stream"
            status={<span className="text-ok">running</span>}
            rows={[
              { k: 'operadoras', v: '12 / 18' },
              { k: 'tabelas', v: '1.284' },
              { k: 'diff', v: '+37 · −12' },
              { k: 'checkpoint', v: 'ok' },
            ]}
          />
        </div>
      </ProjectSection>

      <ProjectSection label="QA" title="QA & fuzzing bot">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Prose>
            <p>
              Bot de teste de estresse (<strong>fuzzing</strong>) que bombardeia o sistema com formulários aleatórios
              para garantir a integridade do banco de dados e prevenir falhas em produção. Selenium, Python e PyTest.
            </p>
          </Prose>
          <Code title="terminal">
            <S>$ pytest run_stress_test.py --threads=4</S>
            {'\n'}[INFO] Spawning 4 headless browsers...
            {'\n'}[TEST] Case #492: Random Data Injection
            {'\n'}[TEST] Input: {'"User_X92"'}, Val: <N>99999.99</N>
            {'\n'}<S>[SUCCESS]</S> Quote received in DB (200 OK)
            {'\n'}<S>[SUCCESS]</S> Pipeline Integrity Verified.
          </Code>
        </div>
      </ProjectSection>

      <ProjectSection label="Retenção" title="Alerta de retenção">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Prose>
            <p>
              Sistema de monitoramento em tempo real. Detecta perda de clientes de alto valor (churn) e dispara
              instantaneamente um alerta personalizado com dados estratégicos para o gestor. Node.js, webhooks e
              WPPConnect.
            </p>
          </Prose>
          <Code title="monitor-churn.ts">
            <K>const</K> <F>monitorChurn</F> = (client) =&gt; {'{'}
            {'\n'}  <K>if</K> (client.value &gt; <N>5000</N> &amp;&amp; client.status === <S>{"'LOST'"}</S>) {'{'}
            {'\n'}    <C>{'// disparo imediato'}</C>
            {'\n'}    WhatsApp.<F>send</F>({'{'}
            {'\n'}      priority: <S>{"'HIGH'"}</S>,
            {'\n'}      msg: <S>{'`ALERTA: ${client.name} cancelou!`'}</S>,
            {'\n'}    {'}'});
            {'\n'}  {'}'}
            {'\n'}{'}'};
          </Code>
        </div>
      </ProjectSection>

      <ProjectSection label="ETL" title="Pipeline de dados & BI">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Prose>
            <p>
              Script ETL (Extract, Transform, Load) que processa dados brutos do CRM, calcula métricas de MRR (receita
              mensal recorrente) e churn diário, exportando relatórios complexos via <strong>ExcelJS</strong>. Pandas e
              aggregation pipelines do MongoDB no meio do caminho.
            </p>
          </Prose>
          <DataPanel
            title="etl · leads"
            status={<span className="text-ok">100%</span>}
            rows={[
              { k: 'extract', v: 'CRM · MongoDB' },
              { k: 'transform', v: 'MRR · churn diário' },
              { k: 'load', v: 'relatorio.xlsx' },
              { k: 'status', v: 'done' },
            ]}
          />
        </div>
      </ProjectSection>

      <ProjectSection label="CLI" title="Gerador automático de SPA">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Prose>
            <p>
              Ferramenta CLI para desenvolvedores. Utiliza templates pré-configurados para gerar a estrutura completa de
              uma landing page integrada ao CRM, economizando horas de setup manual de rotas e componentes. A mesma ideia
              evoluiu para as landing pages de captação (Einstein, Fleury, profissões), que compartilham tokens, formulário
              de cotação e integração com o OData Handler.
            </p>
          </Prose>
          <Code title="terminal">
            <S>$ npm run gen:spa {'"Nova Campanha"'}</S>
            {'\n'}src/
            {'\n'}├── pages/nova-campanha/
            {'\n'}│   └── <F>index.tsx</F>        <C>(generated)</C>
            {'\n'}└── components/
            {'\n'}    └── <F>Form.tsx</F>         <C>(injected)</C>
          </Code>
        </div>
      </ProjectSection>

      <ProjectSection label="Lições" title="O que esses bots me ensinaram">
        <Bullets
          items={[
            'Sucesso precisa de evidência: um cenário que roda sem exceção não é um formulário enviado. Confirmar pela rede ou pelo redirect mudou a confiabilidade do QA.',
            'Automação de navegador em servidor exige headless por ambiente, esperas inteligentes em vez de timeouts fixos e varredura de iframes.',
            'Filas com concorrência 1 e polling honesto na UI valem mais que um modal otimista de "finalizado com sucesso".',
            'Credenciais nunca vão para o código: o incidente que tiramos de um seed antigo virou rotação de senha e regra de time.',
          ]}
        />
      </ProjectSection>
    </ProjectShell>
  );
}
