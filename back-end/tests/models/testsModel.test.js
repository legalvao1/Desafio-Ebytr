const sinon = require('sinon');
const { expect } = require('chai');

const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoConnection = require('../../models/connection');
const todosModel = require('../../models/todosModel');


describe('Busca todas as tarefas no banco', () => {

  const DBServer = new MongoMemoryServer();

  before(async () => {
    const URLMock = await DBServer.getUri();
    const connectionMock = await MongoClient
      .connect(URLMock, { useNewUrlParser: true, useUnifiedTopology: true })
      .then((connection) => connection.db('banco_teste'));

    sinon.stub(mongoConnection, 'connection').resolves(connectionMock);
  });

  after(async () => {
    mongoConnection.connection.restore();
    await DBServer.stop();
  });

  describe('Quando não existem tarefas cadastradas', () => {

    it('retorna um array', async() => {
      const response = await todosModel.getTodos();
      expect(response).to.be.a('array');
    });

    it('o array está vazio', async() => {
      const response = await todosModel.getTodos();
      expect(response).to.be.empty;
    });

  });

  describe('quando existem tarefas cadastradas', () => {
    const expected_task = {
      _id: "618434dd1aa7faa987a708c8",
      id: 455,
      text: "pular",
      createdAt: "11/4/2021, 4:30:37 PM",
      status: "Em andamento"
    };

    before(async () => {
        const db = await mongoConnection.connection();
        await db.collection('todos').insertOne({ ...expected_task });
    });

    after(async () => {
        const db = await mongoConnection.connection();
        await db.collection('todos').drop();
    });

    it('retorna um array', async () => {
        const response = await todosModel.getTodos();
        expect(response).to.be.an('array');
    });

    it('o array não está vazio', async () => {
        const response = await todosModel.getTodos();

        expect(response).to.be.not.empty;
    });

    it('a tarefa cadastrada está na lista', async () => {
        const [{ _id, id, text, createdAt, status }] = await todosModel.getTodos();

        expect({ _id, id, text, createdAt, status }).to.deep.equal(expected_task);
    });
  });
});

