<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Frontend Abraco Amigo" />

  &#xa0;

  <!-- <a href="https://frontendabracoamigo.netlify.com">Demo</a> -->
</div>

<h1 align="center">Frontend Abraco Amigo</h1>

<p align="center">
  <img alt="Principal linguagem do projeto" src="https://img.shields.io/github/languages/top/tatyanepgoncalves/frontend-abraco-amigo?color=56BEB8">

  <img alt="Quantidade de linguagens utilizadas" src="https://img.shields.io/github/languages/count/tatyanepgoncalves/frontend-abraco-amigo?color=56BEB8">

  <img alt="Tamanho do repositório" src="https://img.shields.io/github/repo-size/tatyanepgoncalves/frontend-abraco-amigo?color=56BEB8">

  <img alt="Licença" src="https://img.shields.io/github/license/tatyanepgoncalves/frontend-abraco-amigo?color=56BEB8">

  <img alt="Github issues" src="https://img.shields.io/github/issues/tatyanepgoncalves/frontend-abraco-amigo?color=56BEB8" />

  <img alt="Github forks" src="https://img.shields.io/github/forks/tatyanepgoncalves/frontend-abraco-amigo?color=56BEB8" />

  <img alt="Github stars" src="https://img.shields.io/github/stars/tatyanepgoncalves/frontend-abraco-amigo?color=56BEB8" />
</p>

<!-- Status -->

<h4 align="center"> 
	🚧  Frontend Abraco Amigo 🚀 Em construção...  🚧
</h4> 

<!-- <hr> -->

<p align="center">
  <a href="#sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#funcionalidades">Funcionalidades</a> &#xa0; | &#xa0;
  <a href="#tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#pré-requisitos">Pré requisitos</a> &#xa0; | &#xa0;
  <a href="#instalaçao">Instalação</a> &#xa0; | &#xa0;
  <a href="#autenticação--segurança">Autenticação & Segurança</a> &#xa0; | &#xa0;
  <a href="#-próximos-passos-checklist">Próximos passos checklist</a> &#xa0; | &#xa0;
  <a href="#licença">Licença</a> &#xa0; | &#xa0;
  <a href="https://github.com/tatyanepgoncalves" target="_blank">Autor</a>
</p>

<br>

## Sobre

Sistema de gestão de auxílio voluntário desenvolvido com foco em performance, acessibilidade e simplicidade.

---

## Funcionalidades

- [ ] Feed de demandas e busca por locais.
- [ ] Central de acesso (Login/Cadastro) utilizando Tabs.
- [ ] Dashboard unificado para voluntários e gestores (baseado em permissões).

---

## Pré requisitos

Antes de começar :checkered_flag:, você precisa ter o [Git](https://git-scm.com), Gerenciador de pacotes [NPM](https://www.npmjs.com/) ou [PNPM](https://pnpm.io/) e o [Node](https://nodejs.org/en/) instalados em sua maquina.

---

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Next.js 16](https://nextjs.org/) - Framework React com renderização híbrida.
- [Shadcn/UI](https://ui.shadcn.com/) - Componentes de interface acessíveis e customizáveis.
- [TypeScript](https://www.typescriptlang.org/)
- [Tanstack Query (v5s)](https://tanstack.com/query) - Gerenciamento de estado assíncrono e cache.
- [Tailwind CSS](https://tailwindcss.com/) - Estilização baseada em utilitários.
- [Axios](https://axios-http.com/ptbr/docs/intro) - Cliente HTTP para integração com a API.
- [Lucide React](https://lucide.dev/) - Conjunto de ícones leves.
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) - Gestão de formulários e validação de esquemas.

---

## 📁 Estrutura de Páginas (Simplificada)

Para garantir agilidade no desenvolvimento, o projeto foi planejado em 3 eixos:

1.  **Home (`/`)**: Feed de demandas e busca por locais.
2.  **Auth (`/auth`)**: Central de acesso (Login/Cadastro) utilizando Tabs.
3.  **Painel (`/painel`)**: Dashboard unificado para Voluntários e Gestores (baseado em permissões).

```bash
src/
├── app/
│   ├── layout.tsx       # Providers (TanStack, Toast)
│   ├── page.tsx         # Landing / Listagem de Demandas
│   ├── auth/            # Login e Cadastro (Página única com Tabs)
│   │   └── page.tsx
│   └── painel/          # Dashboard Unificado
│       └── page.tsx
├── components/          # Componentes Shadcn + Seus (DemandCard, Navbar)
├── hooks/               # useAuth, useDemandas
├── lib/                 # Configuração do Axios e Utils
└── services/            # Chamadas da API
```
---

## Instalação

```bash
# Clone este repositório
$ git clone https://github.com/tatyanepgoncalves/frontend-abraco-amigo

# Entre na pasta
$ cd frontend-abraco-amigo

# Instale as dependências
$ pnpm install

# Para iniciar o projeto
$ pnpm dev

# O app vai inicializar em <http://localhost:3000>
```

---

## Autenticação & Segurança

O frontend utiliza **Cookies** para persistência do Token JWT, permitindo o uso de **Middlewares** do Next.js para proteção de rotas no lado do servidor (SSR/RSC), garantindo que usuários não autenticados não acessem o painel de gestão.

---

## 📝 Próximos Passos (Checklist)

- [ ] Configuração do `api.ts` com Interceptors.
- [ ] Implementação do Provider do TanStack Query.
- [ ] Criação dos formulários de Login/Cadastro com Shadcn.
- [ ] Desenvolvimento do componente de Card para demandas.
- [ ] Integração com os endpoints de Gestor.

---

## Licença

Este projeto está sob licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com :heart: por <a href="https://github.com/tatyanepgoncalves" target="_blank">tatyanepgoncalves</a>

&#xa0;

<a href="#top">Voltar para o topo</a>
