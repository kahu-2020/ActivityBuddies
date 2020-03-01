const initialState = 0

export default function rsvp(state = initialState, action) {
    switch (action.type) {
        case 'SET_RSVP':
            return action.rsvp
        default:
            return state
    }
}