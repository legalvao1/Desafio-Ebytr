/** SOURCE https://www.youtube.com/watch?v=E1E08i2UJGI */
import React, { useState, useEffect } from "react";
import { getTodos, addTodo, editTodo, deleteTodo } from "../services/todosService";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  /** SOURCE https://medium.com/@felippenardi/how-to-do-componentdidmount-with-react-hooks-553ba39d1571 */
  useEffect(() => {
    async function fetchApi() {
      const { data } = await getTodos();
      setTodos(data);
    }  
  fetchApi();
  }, []);

  const addTask = async (todo) => {
    if (todo.text === '' || /^\s*$/.test(todo.text)) {
      return;
    };
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    await addTodo(todo);
  };

  const editTask = async (id, newValue) => {
    if (newValue.text === '' || /^\s*$/.test(newValue.text)) {
      return;
    };
    const newTodos = todos.map((todo) => todo.id === id ? newValue : todo);
    setTodos(newTodos);
    await editTodo(id, newValue);
  }

  const deleteTask = async (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos);
    await deleteTodo(id);
  };


  return (
    <div>
      <h2>Adicionar tarefas</h2>
      <TodoForm onSubmit={ addTask }/>
      <Todo 
      todos={todos} 
      deleteTodo={deleteTask}
      editTodo={editTask}
      />
    </div>
  );
}
export default TodoList;