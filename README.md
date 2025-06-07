# Ecommerce RM

## Descrição do projeto
Este projeto consiste em um catálogo de e-commerce que consome a API DummyJSON para exibir produtos de uma loja virtual. A aplicação permite aos usuários navegar por produtos, visualizar detalhes, filtrar por categorias, buscar em tempo real, gerenciar um carrinho de compras.

Funcionalidades principais:
- Listagem responsiva de produtos exibindo nome, imagem, preço, categoria e estoque
- Paginação para navegação entre páginas de produtos
- Visualização detalhada do produto ao clicar
- Filtrar produtos por categoria
- Busca instantânea por nome dos produtos conforme o usuário digita
- (Opcional) Carrinho de compras com adição, alteração de quantidade e remoção de itens

---

## Tecnologias utilizadas
- [Vue.js 3](https://vuejs.org/) — framework JavaScript progressivo para construção da interface
- [Vite](https://vitejs.dev/) — bundler moderno e rápido para o projeto
- [Axios](https://axios-http.com/) — cliente HTTP para consumir a API DummyJSON
- [TailwindCSS](https://tailwindcss.com/) — framework CSS utilitário para estilização rápida e responsiva

---

## Como rodar a aplicação localmente

### Passos para executar
1. Clone o repositório:
   ```bash
   git clone https://github.com/ma-pedroza/Ecommerce-RM
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd pastaDoProjeto
   ```
3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
5. Abra seu navegador e acesse:
   ```
   http://localhost:3000
   ```

---

## Funcionalidades principais detalhadas

### 1. Listagem de Produtos
- Exibe todos os produtos disponíveis na API com nome, imagem, preço, categoria e estoque.

### 2. Paginação
- Permite navegar entre páginas para visualizar mais produtos da loja.

### 3. Visualização de Detalhes do Produto
- Ao clicar em um produto, o usuário é levado para uma página com informações detalhadas, como descrição completa, preço, categoria e imagens adicionais.

### 4. Menu de Categorias
- Juntamente do Header, estão listadas cada categoria disponível para seleção

### 5. Busca de Produtos
- Campo de busca que filtra os produtos em tempo real conforme o usuário digita o nome.

### 6. Funcionalidades extras (opcionais)
- Carrinho de compras:
  - Adição de produtos com quantidade inicial 1.
  - Alteração da quantidade e remoção de itens no carrinho.
  - Persistência temporária do carrinho durante a navegação (sem salvar no banco ou sessão).

---

## Prints das telas desenvolvidas

### Listagem de Produtos
![Listagem de Produtos](src/assets/images/Listagem-de-Produtos.png)

### Detalhes do Produto
![Detalhes do Produto](./screenshots/detalhes-produto.png)

### Menu de Categorias
![Menu de Categorias](./screenshots/menu-categorias.png)

### Busca de Produtos
![Busca de Produtos](./screenshots/busca-produtos.png)

### Carrinho de Compras (Opcional)
![Carrinho de Compras](./screenshots/carrinho-compras.png)

---

## Vídeo demonstrativo

Veja o vídeo no YouTube mostrando a aplicação rodando localmente, onde um dos participantes explica o funcionamento e apresenta as funcionalidades principais:

[Link do vídeo no YouTube](https://youtu.be/seuvideolink)

---
