# CRUD Backend com Node.js e Express

API simples utilizando **array** como armazenamento de dados, implementando operações CRUD.

---

## Rotas da API

| Método | Rota                   | Body (JSON)                     | Descrição                        |
|--------|-----------------------|--------------------------------|---------------------------------|
| GET    | `/`                   | -                              | Mensagem de boas-vindas          |
| GET    | `/items`              | -                              | Lista todos os itens             |
| POST   | `/items`              | `{ "name": "Nome do item" }`  | Cria um novo item                |
| GET    | `/items/:id`          | -                              | Busca item pelo ID               |
| PUT    | `/items/:id`          | `{ "name": "Novo nome" }`     | Atualiza item pelo ID            |
| DELETE | `/items/:id`          | -                              | Deleta item pelo ID              |

---

## Como rodar o projeto

1. Instalar dependências:
```bash
npm install