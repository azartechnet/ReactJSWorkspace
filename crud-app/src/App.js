import React from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo';
import ReadTodo from './components/ReadTodo';
import UpdateTodo from './components/UpdateTodo';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <CreateTodo />
      <ReadTodo />
      <UpdateTodo />
    </div>
  );
}

export default App;
