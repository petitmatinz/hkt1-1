import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, addTodo, deleteTodo, toggleDone, editTodo }) {
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div className="todo-list">
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Add a new todo" 
      />
      <button onClick={handleAddTodo}>Add</button>
      {todos.map((todo, index) => (
        <TodoItem 
          key={index} 
          todo={todo} 
          index={index} 
          deleteTodo={deleteTodo} 
          toggleDone={toggleDone} 
          editTodo={editTodo} 
        />
      ))}
    </div>
  );
}

export default TodoList;
