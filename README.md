# Let me Ask - Servidor

Este é o projeto servidor do **Let me Ask**, desenvolvido durante o evento **NLW Agents** da Rocketseat.

## 🚀 Tecnologias

- **Node.js** com **TypeScript**
- **Fastify** - Framework web rápido e eficiente
- **Drizzle ORM** - ORM moderno para TypeScript
- **PostgreSQL** - Banco de dados relacional
- **Zod** - Validação de schemas
- **Biome** - Linter e formatador de código

## 🏗️ Arquitetura

- **Arquitetura REST** com Fastify
- **Type-safe** com TypeScript e Zod
- **ORM** com Drizzle para gerenciamento do banco
- **Migrations** automáticas com Drizzle Kit
- **CORS** configurado para desenvolvimento

## 📋 Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- PostgreSQL (via Docker)

## ⚙️ Configuração

1. **Clone o repositório**

```bash
git clone <url-do-repositorio>
cd server
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente**

```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

4. **Inicie o banco de dados**

```bash
docker-compose up -d
```

5. **Execute as migrations**

```bash
npm run db:seed
```

## 🚀 Executando o projeto

**Desenvolvimento:**

```bash
npm run dev
```

**Produção:**

```bash
npm start
```

## 📁 Estrutura do Projeto

```
src/
├── db/           # Configurações e schemas do banco
├── http/         # Rotas e handlers HTTP
├── env.ts        # Configurações de ambiente
└── server.ts     # Ponto de entrada da aplicação
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento com hot-reload
- `npm start` - Executa em modo produção
- `npm run db:seed` - Executa o seed do banco de dados

## 🌐 Endpoints

- `GET /health` - Health check da aplicação
- `GET /rooms` - Lista de salas disponíveis

## 📝 Licença

ISC
