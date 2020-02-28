import request from 'superagent'

export function gotPostsByLocationID(id) {
    return (dispatch) => {
        request.get('api/v1/posts/' + id)
        .then ( res => res.body)
        .then(posts => {
            dispatch(gotPosts(posts))
        })
    }
}

export function gotPosts(posts) {
    return {
        type: 'GET_POSTS_BY_LOCATIONS',
        posts: posts
    }
}

export function gotRsvp(attendees) {
    return {
        type: 'SET_RSVP',
        attendees: attendees
    }
}

export function addPost(attendee) {
    return (dispatch) => {
        request
        .post('/api/v1/posts/rsvp')
        .send(attendee)
        .then(dispatch(gotRsvp(attendees)))
    }
}