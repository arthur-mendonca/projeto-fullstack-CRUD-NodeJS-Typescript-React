# projeto-fullstack-CRUD-NodeJS-Typescript-React

PARA INICIAR 

BACK-END 

1. Navegue até o diretório "back-end" no terminal.

2. Instale as dependências do Node.js usando o comando npm install.

3. Há um arquivo .env.example que demonstra como seu arquivo .env deve ser construído. Copie este arquivo para um novo arquivo chamado .env e preencha as variáveis de acordo com sua configuração local.

4.  Rodar as migrações: 

	> npm run typeorm migration:generate ./src/migrations/InitialMigration -- -	d ./src/data-source.ts

	> npm run typeorm migration:run -- -d ./src/data-source

5. Inicie o servidor com npm run dev.


FRONT-END 

1. Navegue até o diretório "front-end" no terminal.
2. Instale as dependências do Node.js usando o comando npm install.
3. Inicie o servidor front-end com npm run dev.


ROTAS: 


-->LOGIN Fazer Login: POST /login

--> CLIENTS 
*Criar Client: 
POST /clients 


*Atualizar Client: 
PATCH /client/id 

*Listar todos os Clients: 
GET /clients 

*Listar um Client específico: 
GET /clients/id 

*Deletar Client: 
DELETE /clients/id 

*Criar um PDF com a lista de todos os Clients: 
GET /clients/pdf

--> CONTACTS 

*Criar Contact: 
POST /contact 

*Atualizar Contact: 
PATCH /contact/id 

*Listar todos os Contacts: 
GET /contact 

*Listar um Contact específico: 
GET /contact/id 

*Deletar ClContactient: 
DELETE /contact/id 

*Criar um PDF com a lista de todos os Contacts: 
GET /contact/pdf
