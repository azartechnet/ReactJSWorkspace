import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReadTodo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/todos');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchTodos();
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title} - {todo.completed ? 'Completed' : 'Not Completed'}
        </li>
      ))}
    </ul>
  );
};

export default ReadTodo;
