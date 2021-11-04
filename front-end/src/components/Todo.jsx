/** SOURCE https://www.youtube.com/watch?v=E1E08i2UJGI */
import React, { useState } from "react";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from "./TodoForm";

const Todo = ({ todos, deleteTodo, editTodo, setShowFilter }) => {
  const [edit, setEdit] = useState({ id: null, value: '', showFilter: true });

  setShowFilter(edit.showFilter);

  const submitUpdate = (value) => {
    editTodo(edit.id, value);
    setEdit({ id: null, value: '' });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  };

  setShowFilter(true);
  return todos.map((todo) => (
    <div key={todo.id}>
      <div className="todo-row" key={todo.id}>{todo.text}<span>{todo.status}</span></div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => deleteTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit 
          onClick={() => setEdit({ 
            id: todo.id, value: todo.text, createdAt: todo.createdAt, status: todo.status, showFilter: false
          })}
          className='edit-icon'
        />
      </div>
    </div>
  ))
};

export default Todo;