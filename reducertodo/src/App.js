import React, { useReducer } from 'react';
import { initialState, appReducer } from './reducers/reducer';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App(){
  const [state, dispatch] = useReducer(appReducer, initialState);
  // const [input, setInput] = useState('');
  
  console.log(state, dispatch);
  return(
    <div className="App">
      <TodoForm state={state} dispatch={dispatch}/>
      <TodoList state={state} dispatch={dispatch}/>
    </div>
  )
}
  
export default App;  