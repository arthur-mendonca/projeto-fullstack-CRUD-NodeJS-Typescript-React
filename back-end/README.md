# projeto-fullstack-back-end

npm run typeorm migration:generate ./src/migrations/InitialMigration -- -d ./src/data-source.ts

npm run typeorm migration:run -- -d ./src/data-source

---

ROTAS:

--> CLIENTS
*Criar Client: POST /clients
*Atualizar Client: PATCH /client/id
*Listar todos os Clients: GET /clients
*Listar um Client específico: GET /clients/id
*Deletar Client: DELETE /clients/id
*Criar um PDF com a lista de todos os Clients: GET /clients/pdf

--> CONTACTS
*Criar Contact: POST /contact
*Atualizar Contact: PATCH /contact/id
*Listar todos os Contacts: GET /contact
*Listar um Contact específico: GET /contact/id
*Deletar ClContactient: DELETE /contact/id
*Criar um PDF com a lista de todos os Contacts: GET /contact/pdf
