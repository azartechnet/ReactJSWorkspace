import React, { useState } from 'react';
import axios from 'axios';

const UpdateTodo = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/todos/${id}`, {
        title,
      });
      setId('');
      setTitle('');
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter todo ID..."
        required
      />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter updated title..."
        required
      />
      <button type="submit">Update Todo</button>
    </form>
  );
};

export default UpdateTodo;
