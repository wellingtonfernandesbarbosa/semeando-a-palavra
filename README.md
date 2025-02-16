# Semeando a Palavra

Este é um projeto desenvolvido com [Next.js](https://nextjs.org), utilizando **TypeScript** e **SASS** para estilização. O blog exibe mensagens de pregação consumidas via **GIST do GitHub**.

## Começando

Primeiro, instale as dependências:

```bash
npm install
```

Depois, inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Configuração dos Dados via GIST do GitHub

O projeto busca as mensagens a partir de um **GIST público**. Para configurar um novo GIST:

1. Crie um [GIST no GitHub](https://gist.github.com/).
2. Adicione arquivos no formato `.md` contendo as mensagens.
3. Copie o **ID do GIST** e substitua no arquivo `src/services/gistService.ts`:

```ts
const GIST_ID = "seu_gist_id_aqui";
```

## Estrutura do Projeto

```
semeando-a-palavra/
│── public/             # Arquivos estáticos
│── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── layouts/        # Layouts principais
│   ├── pages/          # Páginas do blog
│   ├── services/       # Conexão com o GIST do GitHub
│   ├── styles/         # Estilização com CSS
│   ├── types/          # Tipagens do TypeScript
│   ├── utils/          # Funções auxiliares
│── .env.local          # Configurações sensíveis (se necessário)
│── next.config.js      # Configuração do Next.js
│── package.json        # Dependências
│── tsconfig.json       # Configuração do TypeScript
│── README.md           # Documentação do projeto
```

## Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** - Framework React para aplicações modernas.
- **TypeScript** - Tipagem estática para JavaScript.
- **GIST do GitHub** - Fonte dos dados dinâmicos.

## Implantando na Vercel

A maneira mais fácil de implantar a aplicação é pela [Vercel](https://vercel.com/new).

Confira a [documentação de deploy](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.

---

**Semeando a Palavra** • Compartilhando mensagens de edificação.

