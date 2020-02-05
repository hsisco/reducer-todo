import React from 'react';

const Todo = ({ item, dispatch }) => {
  return (
    <div onClick={() => dispatch({ type: "TOGGLE", payload: item })}>
      <p>{item}</p>
    </div>
  );
};

export default Todo;