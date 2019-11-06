import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.item.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          toggleCast={props.toggleCast}
          />
      ))}
    </div>
  );
};

export default TodoList;