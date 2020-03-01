const initialState = {}

function currentActivity (state = initialState, action) {
  switch(action.type){
    case 'SET_CURRENT_ACTIVITY':
      return action.currentActivity
    default:
      return state
  }
}

export default currentActivity