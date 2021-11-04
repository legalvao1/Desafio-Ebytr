const mongoConnection = require("./connection");

const getTodos = async () => {
  const db = await mongoConnection.connection();
  const todosCollection = await db.collection('todos').find().toArray();
  return todosCollection;
};

const addTodo = async ({ id, text, createdAt, status }) => {
  const taskId = id
  const db = await mongoConnection.connection();
  const { _id } = await db.collection('todos').insertOne({ taskId, text, createdAt, status });
  return {_id, taskId, text, createdAt, status };
};

const editTodo = async (task, { id, text, createdAt, status, updatedAt }) => {
  const taskId = id
  const db = await mongoConnection.connection();
  const editTodo = await db.collection('todos').updateOne(
    { taskId: parseInt(task.id) }, { $set: { taskId, text, createdAt, status,updatedAt }},
  );
  return editTodo;
};

const deleteTodo = async ({ id }) => {
  const db = await mongoConnection.connection();
  const deleteTodo = await db.collection('todos').deleteOne({ taskId: parseInt(id) });
  return deleteTodo;
};

module.exports = {
  getTodos,
  addTodo,
  editTodo,
  deleteTodo,
};