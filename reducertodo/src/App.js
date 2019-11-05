import React, { useState, useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import './App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      initialState: []
    };
  };

  ToDo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  }
  
  render(){
    console.log(state, dispatch);

    return(
      <div className="App">
        <ul className='list'>
          <li>{this.state.item}</li>
        </ul>
      </div>
    )
  }
}
  
  export default App;  