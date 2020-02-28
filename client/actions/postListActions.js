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

export function setRsvp(rsvp) {
    return {
        type: 'SET_RSVP',
        rsvp: rsvp
    }
}

export function addRsvp(post) {
    console.log(post)
    return () => {
        request
        .post('/api/v1/posts/rsvp')
        .send(post)
        .then(console.log('attendees updated')) 
    }
}