import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {

  return (
    <div className='todo-app'>
      <div className='main-container'>
        <Todo/>
      </div>
    </div>
  );
}

export default App;
