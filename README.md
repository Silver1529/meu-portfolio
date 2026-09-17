# Miguel Bahia · portfólio

Site pessoal de **Miguel da Silva Bahia**, Engenheiro de Software Full Stack na Compare Plano de Saúde e estudante de Ciência da Computação na UNIP.

Publicado em <https://miguel-silva-tech.vercel.app>.

## O que tem aqui

- Página inicial com animação de entrada tipográfica, sobre, experiência, método de trabalho, catálogo de projetos, stack e contato.
- Páginas de detalhe dos projetos: CRM Core & Extensões, Compare Flow, Automação & Bots, Bate Ponto, Timeline do Cliente e CRUD Dungeon.
- Página de stack completa, com nível baseado em uso real (produção, projetos) e onde cada tecnologia foi aplicada.
- Tema escuro por padrão com alternância para claro, persistida no navegador.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Bricolage Grotesque + JetBrains Mono via `next/font`.

## Estrutura

```
app/                    rotas (App Router)
  page.tsx              página inicial
  projetos/<slug>/      páginas de projeto
src/components/site/    header, footer, tema, intro, utilitários de animação
src/components/home/    seções da página inicial
src/components/project/ layout e blocos das páginas de projeto
src/data/               conteúdo: perfil, sobre, experiência, projetos, stack
```

Todo o conteúdo vive em `src/data`. Para atualizar textos, projetos ou tecnologias, edite os arquivos dessa pasta.

## Rodando

```bash
yarn install
yarn dev      # http://localhost:3000
yarn build && yarn start
yarn lint
```

## Contato

- E-mail: miguelbahia0602@gmail.com
- LinkedIn: <https://www.linkedin.com/in/miguel-bahia-30094234b>
- GitHub: <https://github.com/Silver1529>
