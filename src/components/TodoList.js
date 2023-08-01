import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.text} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;