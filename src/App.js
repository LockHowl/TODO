import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css'

const API_KEY = 'j4cGnln6FNp8HEnnTOX0xB7vPAMWOpjK7BPv2n6W8a0';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/random?client_id=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      setImageUrl(data.urls.regular)
      // Use the 'imageUrl' in your application
    })
    .catch(error => {
      console.error('Error fetching random photo:', error);
    });

    const data = localStorage.getItem('todos');
    if(data) {
      setTodos(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    
    <div className='flexCol'>
      <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
      <h1 className='heading'>Todo List</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;