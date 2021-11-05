const sinon = require('sinon');
const { expect } = require('chai');

const todosController = require('../../controllers/todosController');
const todosModel = require('../../models/todosModel');

describe('Ao chamar o controller de getTodos', () => {
  describe('quando não existem tarefas no banco de dados', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(todosModel, 'getTodos').resolves([]);
    })

    after(() => {
      todosModel.getTodos.restore();
    })

    it('é chamado o método "status" passando o código 200', async () => {
      await todosController.getTodos(request, response);
  
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um array', async () => {
      await todosController.getTodos(request, response);

      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });

    it('é chamado o método "json" passando uma array vazia', async () => {
      await todosController.getTodos(request, response);

      expect(response.json.calledWith([])).to.be.equal(true);
    });
  });

  describe('quando existem tarefas no banco de dados', async () => {
    const response = {};
    const request = {};


    const todos = [
      {
        _id: '604cb554311d68f491ba5781',
        taskId: 455,
        text: "pular",
        createdAt: "11/4/2021, 4:30:37 PM",
        status: "Em andamento"
      }
    ]

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(todosModel, 'getTodos').resolves(todos);
    })

    after(() => {
      todosModel.getTodos.restore();
    })

    it('é chamado o método "status" passando o código 200', async () => {
      await todosController.getTodos(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um array', async () => {
      await todosController.getTodos(request, response);

      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });

    it('é chamado o método "json" com a lista de tarefas', async () => {
      await todosController.getTodos(request, response);

      expect(response.json.calledWith(todos)).to.be.equal(true);
    });
  });
});


describe('Ao chamar o controller de addTodos', () => {
  describe('cadastra uma tarefa no banco', async () => {
    const response = {};
    const request = {};

    const example_payload = {
      _id: '604cb554311d68f491ba5781',
      taskId: 455,
      text: "correr",
      createdAt: "11/4/2021, 4:30:37 PM",
      status: "pendente"
    }

    before(() => {
      request.body = {
        id: 455,
        text: "correr",
        createdAt: "11/4/2021, 4:30:37 PM",
        status: "pendente"
      };

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(todosModel, 'addTodo').resolves(example_payload);
    })

    after(() => {
      todosModel.addTodo.restore();
    })

    it('é chamado o método "status" passando o código 201', async () => {
      await todosController.addTodo(request, response);
  
      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um object', async () => {
      await todosController.addTodo(request, response);

      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    });

    it('é chamado com o valor do example_payload', async () => {
      await todosController.addTodo(request, response);

      expect(response.json.calledWith(example_payload)).to.be.equal(true);
    });
  });
});

describe('Ao chamar o controller de editTodos', () => {
  describe('Edita uma tarefa no banco', async () => {
    const response = {};
    const request = {};

    const example_payload = {
      _id: '604cb554311d68f491ba5781',
      taskId: 455,
      text: "correr",
      createdAt: "11/4/2021, 4:30:37 PM",
      updatedAt: "11/04/2021, 22:57:40 PM",
      status: "pendente"
    }

    before(() => {
      request.params = { id: 455 };
      request.body = {
        id: 455,
        text: "pular",
        createdAt: "11/4/2021, 4:30:37 PM",
        updatedAt: "11/04/2021, 22:57:40 PM",
        status: "pronto"
      };

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(todosModel, 'editTodo').resolves(example_payload);
    })

    after(() => {
      todosModel.editTodo.restore();
    })

    it('é chamado o método "status" passando o código 200', async () => {
      await todosController.editTodo(request, response);
  
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um object', async () => {
      await todosController.editTodo(request, response);

      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    });

    it('é chamado com o valor do example_payload', async () => {
      await todosController.editTodo(request, response);

      expect(response.json.calledWith(example_payload)).to.be.equal(true);
    });
  });
});

describe('Ao chamar o controller de deleteTodos', () => {
  describe('deleta uma tarefa do banco', async () => {
    const response = {};
    const request = {};

    const example_payload = { acknowledged: true, deletedCount: 1 }

    before(() => {
      request.params = { id: 455 };
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(todosModel, 'deleteTodo').resolves(example_payload);
    })

    after(() => {
      todosModel.deleteTodo.restore();
    })

    it('é chamado o método "status" passando o código 200', async () => {
      await todosController.deleteTodo(request, response);
  
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um object', async () => {
      await todosController.deleteTodo(request, response);

      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    });
  });
});