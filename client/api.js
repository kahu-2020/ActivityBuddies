import request from 'superagent'

export function getPosts() {
    console.log('meetup posts')
    return request.get('/api/lost/posts')
    .then(res => {
        console.log(res)
        return res.body
    })
}

export function getLocations(id) {
    return (dispatch) => {
        request.get('/api/va/activities/'+id) // fix id is it $id
        .then(res => res.body)
        .then(locations => {
            dispatch(gotLocations(locations))
        })
    }
}