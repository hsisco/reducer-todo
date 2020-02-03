import React from 'react';

const Todo = () => {
  return (
    <div className={`item ${item.completed ? 'completed' : ''}`}
        onClick={() => dispatch({ type: "TOGGLE", payload: item })}>
      <p>{item.item}</p>
    </div>
  );
};

export default Todo;