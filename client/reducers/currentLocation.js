const initialState = {
  id: 1,
  name: 'Makara',
  activity_id: 1
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