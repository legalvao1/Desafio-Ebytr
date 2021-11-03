const { ObjectId } = require('mongodb');
const connection = require("./connection");

const getTodos = () => {
  const db = await connection();
  const todosCollection = await db.collection('todos').find().toArray();
  return todosCollection;
};

const addTodo = (todo) => {
  const db = await connection();
  const { _id } = await db.collection('todos').insertOne(todo);
  return {_id, todo };
};

const editTodo = (id, todo) => {
  const db = await connection();
  const editTodo = await db.collection('todos').updateOne(
    { _id: ObjectId(id) }, { $set: todo },
    );
  return editTodo;
};

const deleteTodo = (id) => {
  const db = await connection();
  const deleteTodo = await db.collection('todos').deleteOne({ _id: ObjectId(id) });
  return deleteTodo;
};

module.exports = {
  getTodos,
  addTodo,
  editTodo,
  deleteTodo,
};