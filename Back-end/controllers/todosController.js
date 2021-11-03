const models = require('../models/todosModel');

const getTodos = (req, res) => {
  try {
    const tasks = await models
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const addTodo = (req, res) => {
  try {
    const task = await models
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editTodo = (req, res) => {
  try {
    const tasks = await models
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTodo = (req, res) => {
  try {
    const task = await models
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