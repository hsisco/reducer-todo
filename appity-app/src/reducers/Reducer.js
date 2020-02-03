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
  }
}

export const initialState = { list: [
  {
    item: 'Learn about reducers',
    completed: false,
    id: Date.now(),
  }
]}