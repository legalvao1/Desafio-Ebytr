import React from 'react';
// import Todo from './components/Todo'
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ebytr Todo-List</h1>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
