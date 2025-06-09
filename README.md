# Github Blog

Este projeto é um blog desenvolvido em React com TypeScript, utilizando Vite como bundler. O objetivo é consumir dados da API do Github para exibir posts, detalhes e realizar buscas, simulando um blog pessoal alimentado por issues de um repositório.

## 🚀 Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Styled-components](https://styled-components.com/)
- [Axios](https://axios-http.com/)
- [ESLint](https://eslint.org/)

## 📁 Estrutura de Pastas

```
src/
  ├─ @types/           # Tipagens globais
  ├─ assets/           # Imagens e SVGs
  ├─ components/       # Componentes reutilizáveis (Header, Summary, etc)
  ├─ layouts/          # Layouts de página
  ├─ lib/              # Configurações de bibliotecas (axios, rotas)
  ├─ pages/            # Páginas principais (Blog, PostDetail)
  │   └─ Blog/
  │       ├─ components/  # Componentes específicos da página Blog
  ├─ styles/           # Estilos globais e temas
  ├─ utils/            # Funções utilitárias
```

## 💻 Como rodar o projeto

1. **Clone o repositório:**
   ```sh
git clone <url-do-repositorio>
cd 04-Desafio-Github-Blog
```
2. **Instale as dependências:**
   ```sh
npm install
```
3. **Inicie o servidor de desenvolvimento:**
   ```sh
npm run dev
```
4. Acesse `http://localhost:5173` no navegador.

## ⚙️ Configuração

- O projeto consome a API pública do Github. Por padrão, busca issues de um repositório configurado no arquivo `src/lib/axios.ts`.
- Para alterar o repositório fonte, edite a baseURL em `src/lib/axios.ts`.

## 📝 Funcionalidades

- Listagem de posts (issues do Github)
- Busca de posts por texto
- Visualização de detalhes do post
- Exibição de informações do perfil do usuário

## 🧑‍💻 Dicas para desenvolvimento

- Utilize os scripts do `package.json` para lint, build e testes.
- O ESLint já está configurado para TypeScript e React.
- Os estilos são feitos com styled-components e organizados por componente.

## 📄 Licença

Este projeto é open-source e está sob a licença MIT.

---

Feito com 💙 por Luana Andrade
