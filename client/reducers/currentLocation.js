const initialState = {
}

function currentLocation (state = initialState, action) {
  switch(action.type) {
    case 'SET_CURRENTLOCATION':
      return action.currentLocation

    default:
      return state
  }
}

export default currentLocation