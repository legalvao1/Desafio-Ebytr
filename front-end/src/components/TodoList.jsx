/** SOURCE https://www.youtube.com/watch?v=E1E08i2UJGI */
import React, { useState, useEffect } from "react";
import { getTodos, addTodo, editTodo, deleteTodo } from "../services/todosService";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('');
  const [showFilter, setShowFilter] = useState(true);

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

  /**https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare */
  if (filter !== '') {
    todos.sort((a, b) => a[filter].localeCompare(b[filter]));
  };

  return (
    <div>
      <h2>Ebytr Programação do dia</h2>
      <TodoForm onSubmit={ addTask } setShowFilter={setShowFilter}/>
      
      { showFilter ? (
      <select className='todo-input' name="filter" id="" onChange={(event) => setFilter(event.target.value)}>
        <option className='options' value="text">Ordem alfabética</option>
        <option className='options' value="createdAt">Data de criação</option>
        <option className='options' value="status">Status</option>
      </select>
      ) : null
      }
      <Todo 
      todos={todos} 
      deleteTodo={deleteTask}
      editTodo={editTask}
      filter={filter}
      setShowFilter={setShowFilter}
      />
    </div>
  );
}
export default TodoList;