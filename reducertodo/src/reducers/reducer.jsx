import React from 'react';

export const reducer = (state, action) => {
  switch(action.type) {

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