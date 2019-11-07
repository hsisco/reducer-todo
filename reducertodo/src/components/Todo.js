import React from 'react';
// import './Todo.css'

const Todo = ({ item, dispatch }) => {
  return (
    <div className={`item ${item.completed ? 'completed' : ''}`}
        onClick={() => dispatch({ type: "TOGGLE", payload: item })}>
      <p>{item.item}</p>
    </div>
  );
};

export default Todo;