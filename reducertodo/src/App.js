import React, { useState, useReducer } from 'react';
import { initialState, appReducer } from './reducers/reducer';
import './App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      initialState: []
    };
  };

  const [state, dispatch] = useReducer(appReducer, initialState);
  const [input, setInput] = useState('');

  handleChanges = e => {
    dispatch({type: "ADD_TODO", payload: e.target.value})
  };
  
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