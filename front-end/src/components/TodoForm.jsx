/** SOURCE https://www.youtube.com/watch?v=E1E08i2UJGI */
import React, { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(
    props.edit ? props.edit.value : ''
  );

  const [status, setStatus] = useState('Em andamento')

  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
   
    props.edit ? 

    props.onSubmit({
      id: props.edit.id,
      text: input,
      createdAt: props.edit.createdAt,
      updateAt: new Date().toLocaleString('en-US'),
      status: status,
    })
    :
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      createdAt: new Date().toLocaleString('en-US'),
      status: status,
    });

    setInput('')
  };

  return (
    <form className='todo-form' onSubmit={ handleSubmit }>
      <input 
        placeholder={props.edit ? 'Nova tarefa' : 'Adicione uma tarefa'}
        value={input}
        onChange={ handleChange }
        name='text'
        className={props.edit ? 'todo-input edit' : 'todo-input'}
        ref={inputRef}
      />
      <select className='todo-input' onChange={(event) => setStatus(event.target.value)}>
        <option className='options' value="Em Andamento" defaultValue >Em Andamento</option>
        <option className='options' value="Pendente">Pendente</option>
        <option className='options' value="Pronto">Pronto</option>
      </select>

      <button onClick={handleSubmit} className={props.edit ? 'todo-button edit' : 'todo-button'}>
      {props.edit ? 'Editar' : 'Adicionar'}
      </button>
    </form>
  )
};

export default TodoForm;