const initialState = []

function activities (state = initialState, action) {
  switch(action.type) {
    case 'GOT_ACTIVITIES':
      return action.activities

    default:
      return state
  }
}

export default activities