import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (todo.text === '' || /^\s*$/.test(todo.text)) {
      return;
    };
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const editTodo = (id, editTodo) => {
    if (editTodo.text === '' || /^\s*$/.test(editTodo.text)) {
      return;
    };
    const newTodos = todos.map((todo) => todo.id === id ? editTodo : todo);
    setTodos(newTodos);
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos);
  };


  return (
    <div>
      <h2>Adicionar tarefas</h2>
      <TodoForm onSubmit={ addTodo }/>
      <Todo 
      todos={todos} 
      deleteTodo={deleteTodo}
      editTodo={editTodo}
      />
    </div>
  );
}
export default TodoList;