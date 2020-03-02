const initialState = []

export default function postList (state = initialState, action) {
    switch(action.type) {

        case 'GET_POSTS_BY_LOCATIONS':
            return action.posts

        case 'GET_UPCOMING_POSTS':
            return action.upcomingposts
            
        default:
            return state
    }
}

export default function upComingPosts (state = initialState, action) {
    switch(action.type) {
        case 'GET_UPCOMING_POSTS':
            return action.upcomingposts

        default:
            return state
    }
}