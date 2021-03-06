/** SOURCE https://dev.to/jahangeer/how-to-build-a-todo-list-app-with-react-node-js-mern-stack-3ban */
import axios from 'axios';

const apiUrl = 'http://localhost:3001';

export const getTodos = () => {
  return axios.get(apiUrl);
};

export const addTodo = (task) => {
  return axios.post(apiUrl, task);
};

export const editTodo = (id, task) => {
  return axios.put(`${apiUrl}/${id}`, task)
};

export const deleteTodo = (id) => {
  return axios.delete(`${apiUrl}/${id}`)
};

