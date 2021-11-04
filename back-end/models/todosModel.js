const mongoConnection = require("./connection");

const getTodos = async () => {
  const db = await mongoConnection.connection();
  const todosCollection = await db.collection('todos').find().toArray();
  return todosCollection;
};

const addTodo = async ({ id, text, createdAt, status }) => {
  const db = await mongoConnection.connection();
  const { _id } = await db.collection('todos').insertOne({ id, text, createdAt, status });
  return {_id, taskId: id, text, createdAt, status };
};

const editTodo = async (task, { id, text, createdAt, status }) => {
  const db = await mongoConnection.connection();
  const editTodo = await db.collection('todos').updateOne(
    { id: parseInt(task.id) }, { $set: { taskId: id, text, createdAt, status }},
    );
  return editTodo;
};

const deleteTodo = async ({ id }) => {
  const db = await mongoConnection.connection();
  const deleteTodo = await db.collection('todos').deleteOne({ id: parseInt(id) });
  return deleteTodo;
};

module.exports = {
  getTodos,
  addTodo,
  editTodo,
  deleteTodo,
};