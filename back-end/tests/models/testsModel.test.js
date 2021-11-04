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
});

