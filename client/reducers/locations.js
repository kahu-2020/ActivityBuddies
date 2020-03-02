const initialState = []

function locations (state = initialState, action) {
  switch(action.type) {
    case 'GOT_LOCATIONS':
      return action.locations

    default:
      return state
  }
}

export default locations