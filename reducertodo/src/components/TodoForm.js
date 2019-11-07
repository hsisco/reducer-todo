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
          name="input"
          value={input}
          onChange={handleChanges}
          />
          <button onClick={()=>{
            props.dispatch({type: "ADD", payload: input})
            setInput('')}}>
            Add</button>
          <button onClick={()=>props.dispatch({type: "COMPLETED"})}>
            Clear Completed</button>
      </form>
    </div>
  );
}


export default TodoForm;