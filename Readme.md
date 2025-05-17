
# 🚀 API MongoDB

API RESTful para operações CRUD utilizando MongoDB com Express e Mongoose.

## 👥 Integrantes do Projeto

- **Caio Limonge Romano** – RA: 8143937  
- **Pedro Henrique Martin Bissolotti** – RA: 8099528  
- **Gustavo Mori** – RA: 8124753  

## 🛠️ Tecnologias Utilizadas

- Node.js ⚙️
- Express 🚆
- MongoDB 🍃
- Mongoose 🧩
- Dotenv 🔐

## ✅ Pré-requisitos

- Node.js instalado 📦
- MongoDB Atlas ou instância local configurada 🗄️

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/gustavom0ri/api-mongodb
cd api-mongodb
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente no arquivo `.env`:

```env
MONGO_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/?retryWrites=true&w=majority
PORT=3000
```

4. Inicie o servidor:

```bash
npm start
```

## 🔗 Endpoints da API

### 📦 Produtos

#### ➕ Criar Produto

- **Método:** POST  
- **URL:** `/api/produtos`  
- **Body:**
```json
{
  "nome": "Produto Exemplo",
  "descricao": "Descrição do produto exemplo",
  "preco": 99.99,
  "qtd_estoque": 100,
  "criado_em": "2024-05-30T00:00:00Z"
}
```

#### 📄 Listar Produtos

- **Método:** GET  
- **URL:** `/api/produtos`  

#### ♻️ Atualizar Produto

- **Método:** PUT  
- **URL:** `/api/produtos/:id`  
- **Body:**
```json
{
  "nome": "Produto Atualizado",
  "descricao": "Descrição atualizada",
  "preco": 89.99,
  "qtd_estoque": 150
}
```

#### ❌ Excluir Produto

- **Método:** DELETE  
- **URL:** `/api/produtos/:id`  

### 👤 Usuários

#### ➕ Criar Usuário

- **Método:** POST  
- **URL:** `/api/usuarios`  
- **Body:**
```json
{
  "nome": "Usuário Exemplo",
  "email": "usuario@exemplo.com",
  "senha": "senha123",
  "criado_em": "2024-05-30T00:00:00Z"
}
```

#### 📄 Listar Usuários

- **Método:** GET  
- **URL:** `/api/usuarios`  

#### ♻️ Atualizar Usuário

- **Método:** PUT  
- **URL:** `/api/usuarios/:id`  
- **Body:**
```json
{
  "nome": "Usuário Atualizado",
  "email": "usuario@exemplo.com"
}
```

#### ❌ Excluir Usuário

- **Método:** DELETE  
- **URL:** `/api/usuarios/:id`  

## 🧪 Testes

Recomenda-se o uso de ferramentas como:

- Postman 📨  
- Insomnia 🛌  
- Thunder Client ⚡ (VS Code)

## 🧾 Conclusão

Este projeto tem como objetivo aplicar conceitos práticos de desenvolvimento de APIs com bancos de dados NoSQL.  
Sinta-se à vontade para contribuir! 🤝

---

© 2024 - Projeto acadêmico USCS 🎓
