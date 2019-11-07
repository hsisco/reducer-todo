import React, { useState } from 'react';

const TodoForm = props => {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.dispatch({
      type: "ADD",
      payload: input
    })
    setInput('');
  }

  const handleChanges = e => {
    props.dispatch({type: "ADD", payload: e.target.value})
  };

  return(
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Add something to your list</label>
        <input
          type="text"
          name="todo"
          id="todo"
          value={input}
          onChange={handleChanges}
          />
          <button type="submit">Add</button>
          <button type="button" className="clear-btn" onClick={handleSubmit}>
            Clear Hexes Cast
          </button>
      </form>
    </div>
  );
}


export default TodoForm;