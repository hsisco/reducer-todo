
export const appReducer = (state, action) => {
  switch(action.type) {
    case "ADD":
      const newItem = {
        item: action.payload,
        completed: false,
        id: Date.now()
      }
      return {...state, 
        list: [state.list, newItem]};
      
    case "TOGGLE":
        return {
          ...state,
          item: state.list.map(item => {
            if(item.id === action.payload.id) {
              return {...item, completed: !item.completed}
            } else {
              return item;
            }
          }
        )
      };

    case "COMPLETED":
      return {
        ...state,
        item: state.list.filter(item => {
          return item.completed === false;
        })
      } 
    default:
      return state;
  }
}

export const initialState = { list: [
  {
    item: 'Learn about reducers',
    completed: false,
    id: Date.now(),
}
]}