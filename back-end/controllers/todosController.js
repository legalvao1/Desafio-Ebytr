const models = require('../models/todosModel');

const getTodos = async (_req, res) => {
  try {
    const tasks = await models.getTodos();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const addTodo = async (req, res) => {
  try {
    const task = await models.addTodo(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editTodo = async (req, res) => {
  try {
    const tasks = await models.editTodo(req.params, req.body);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const task = await models.deleteTodo(req.params);
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTodos,
  addTodo,
  editTodo,
  deleteTodo,
}