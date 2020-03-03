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
    return () => {
        request
        .post('/api/v1/posts/rsvp')
        .send(post)
        .then(console.log('attendees updated')) 
    }
}

export function getUpComingPosts(locationId) {
    return (dispatch) => {
        getUpComingPostsApi(locationId) // request Api url and info
        // TODO: pass location id in api function
        .then(upcomingposts => {
            dispatch(gotUpcoming(upcomingposts))
        })
    }
}

export function gotUpcoming(upcomingposts) {
    return {
        type: 'GOT_UPCOMING', //GOT_COMING is being dent in reducer by dispatch
        upcomingposts: upcomingposts 
    }

}