import React from 'react';

const TodoForm = props => {
  
  const handleSubmit = e => {
    e.preventDefault();
    props.dispatch({
      type: "ADD",
      payload: props.input
    })
    props.setInput('');
  }

  const handleChanges = e => {
    dispatch({type: "ADD", payload: e.target.value})
  };

  return(
    <div className="todo-form">
      <form onSubmit={this.props.handleSubmit}>
        <label htmlFor="todo">Add something to your list</label>
        <input
          type="text"
          name="todo"
          id="todo"
          value={this.props.newItem}
          onChange={this.props.handleChanges}
          />
          <button type="submit">Add</button>
          <button type="button" className="clear-btn" onClick={this.props.clearCast}>
            Clear Hexes Cast
          </button>
      </form>
    </div>
  );
}


export default TodoForm;