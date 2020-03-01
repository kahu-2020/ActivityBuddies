const initialState = {}

function newPost (state = initialState, action) {
  switch(action.type) {
    case 'ADD_POST':
      return action.newPost

      default:
        return state
  }
}

export default newPost