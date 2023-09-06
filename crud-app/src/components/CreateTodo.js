import React, { useState } from 'react';
import axios from 'axios';

const CreateTodo = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/todos', {
        title,
        completed: false,
      });
      setTitle('');
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo title..."
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default CreateTodo;
