const initialState = []

export default function profile (state = initialState, action) {
    switch(action.type) {

        case 'GOT_PROFILE':
            return action.profile


        default:
            return state
    }
}