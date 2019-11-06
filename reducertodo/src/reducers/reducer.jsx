import React from 'react';

export const appReducer = (state, action) => {
  switch(action.type) {
    case "ADD":
      return {...state, item: action.payload};
    case "COMPLETED":
        return {...state, item: action.payload};  
    default:
      return state;
  }
}

export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: Date.now(),
}
]
// addItems = hex => {
//   const newItem = {
//     hex: hex,
//     id: Date.now(),
//     cast: false
//   };
//   this.setState({
//     hexes: [...this.state.hexes, newItem]
//   });
// }