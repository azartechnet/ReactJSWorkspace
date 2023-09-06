import React from 'react';
import axios from 'axios';

const TodoItem = ({ todo, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/todos/${todo.id}`);
      onDelete(todo.id);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div>
      {todo.title} - {todo.completed ? 'Completed' : 'Not Completed'}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
