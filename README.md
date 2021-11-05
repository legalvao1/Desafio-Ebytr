# Desafio Ebytr

-   Desenvolver uma aplicação para auxiliar as pessoas colaboradoras da Ebytr a se organizarem e terem mais produtividade.
- Foi utilizado arquitetura MSC(Models, Service e Controllers) para desenvolvimento da API em que é possível realizar um CRUD visualizando a lista de tarefas, ordenando-a por ordem alfabética, data de criação ou por status, inserir uma nova tafera na lista, editar e remover e por fim salvando no banco de dados.
- Cada tarefa ainda possui um status, que pode ser em andamento, pendente ou pronto, e que também pode ser editado.
## Pré requisitos para rodar o projeto

-   Visual Studio Code
-   Node.js

## Tecnologias Utilizadas  ⚙

-   React
-   Node.js
-   Express
-   Mocha
-   Chai
-   Mongodb

## Preview  🎥
### Tela principal
<img src="/images/tela-principal.png" alt="tela principal"/>

### Lista tarefas
<img src="/images/tela-tarefas.png" alt="tarefas"/>

### Editar uma tarefa
<img src="/images/tela-editar.png" alt="editar"/>

Para iniciar o desenvolvimento, é necessário clonar o repositório do GitHub, acessar o projeto Ebytr e instalar as dependências:
```shell
cd "diretorio de sua preferencia"

git clone git@github.com:legalvao1/Desafio-Ebytr.git

cd Desafio-Ebytr

cd back-end

npm install

no terminal npm start

Para rodar os testes

npm test
npm run test:coverage

cd front-end

npm install

no terminal npm start

Abra uma página web na porta http://localhost:3000/
