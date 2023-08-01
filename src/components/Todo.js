import React, { useState, useEffect } from 'react';import './Todo.css';

const Todo = ({ todo, todos, setTodos }) => {
  const [isHolding, setIsHolding] = useState(false);
  const [holdTimer, setHoldTimer] = useState(null);
  
  const trimmedText = todo.description.replace(/\n+$/, "");
  const textWithBreaks = trimmedText.split('\n').map((text, index) => (
    <React.Fragment key={index}>
      {text}
      <br />
    </React.Fragment>
  ));

  useEffect(() => {
    if (isHolding) {
      setHoldTimer(setTimeout(() => {
        if (isHolding) deleteTodo(); handleMouseUp();
      }, 2000));
    } else {
      clearTimeout(holdTimer);
      setHoldTimer(null);
    }
  }, [isHolding]);

  const handleMouseDown = () => {
    setIsHolding(true);
  };

  const handleMouseUp = () => {
    setIsHolding(false);
  };

  const deleteTodo = () => {
    setTodos(todos.filter(t => t !== todo));
  };

  return (
    <div 
      className={isHolding ? 'shake-disappear todo' : 'todo'}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Ensure we stop holding if the mouse leaves the element
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
        <div className='todo-container'>
            <p className='todo-text title'>
                {todo.title}
            </p>
            {todo.description ? <div className='bar'><p className='description'>{textWithBreaks}</p></div> : <></>}

        </div>
    </div>
  );
};

export default Todo;