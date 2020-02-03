import React from 'react';
import Todo from './Todo';

const TodoList = ({ state, dispatch }) => {
  return (
    <>
      <h2>Stuff I Gotta Do</h2>
      <div className='card-container'>
        {state.list.map(item => (
          <Todo 
          key={item.id}
          {...item}
          dispatch={dispatch} />
        ))}
      </div>
    </>
  );
};

export default TodoList;