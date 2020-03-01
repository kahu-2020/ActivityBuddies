const initialState = []

export default function postList (state = initialState, action) {
    switch(action.type) {

        case 'GET_POSTS_BY_LOCATIONS':
            return action.posts

        default:
            return state
    }
}