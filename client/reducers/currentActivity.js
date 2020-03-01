const initialState = {
  id: 2, 
  name: 'RIDE',
  symbol: '',
  color: '',
  photo: ''
}

function currentActivity (state = initialState, action) {
  switch(action.type){
    case 'SET_CURRENT_ACTIVITY':
      return action.currentActivity

      default:
        return state
  }
}

export default currentActivity