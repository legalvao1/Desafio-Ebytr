/** SOURCE https://www.youtube.com/watch?v=E1E08i2UJGI */
import React, { useState } from "react";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from "./TodoForm";

const Todo = ({ todos, deleteTodo, editTodo, setShowFilter }) => {
  const [edit, setEdit] = useState({ taskId: null, value: '', showFilter: true });

  setShowFilter(edit.showFilter);

  const submitUpdate = (value) => {
    editTodo(edit.taskId, value);
    setEdit({ taskId: null, value: '' });
  };

  if (edit.taskId) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  };

  setShowFilter(true);
  return todos.map((todo) => (
    <div className="todo-row" key={todo.taskId}>
      <div key={todo.taskId}>
        {todo.text}
        <div className="status-div">
          <span className="status">{todo.status}</span>
        </div>
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => deleteTodo(todo.taskId)}
          className='delete-icon'
        />
        <TiEdit 
          onClick={() => setEdit({ 
            taskId: todo.taskId, value: todo.text, createdAt: todo.createdAt, status: todo.status, showFilter: false
          })}
          className='edit-icon'
        />
      </div>
    </div>
  ))
};

export default Todo;