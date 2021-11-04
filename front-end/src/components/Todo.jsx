import React, { useState } from "react";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from "./TodoForm";

const Todo = ({ todos, deleteTodo, editTodo }) => {
  const [edit, setEdit] = useState({ id: null, value: '' });

  const submitUpdate = (value) => {
    editTodo(edit.id, value);
    setEdit({ id: null, value: '' });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo) => (
    <div key={todo.id}>
      <div key={todo.id}>{todo.text}</div>
      <RiCloseCircleLine
        onClick={() => deleteTodo(todo.id)}
        className='delete-icon'
      />
      <TiEdit 
        onClick={() => setEdit({ id: todo.id, value: todo.text })}
        className='edit-icon'
      />
    </div>
  ))
};

export default Todo;