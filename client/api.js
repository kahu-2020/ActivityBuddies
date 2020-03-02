import request from 'superagent'
import { getEncodedToken } from 'authenticare/client'



export function getPosts() {
    console.log('meetup posts')
    return request.get('/api/v1/posts')
    .then(res => {
        console.log(res)
        return res.body
    })
}

export function getActivities() {
    return request.get('/api/v1/activities/')
    .then(res => {
        console.log(res)
        return res.body
    })
}

export function getPostsByLocationId(locationId) {
    console.log('hi')
    return request.get('api/v1/posts/' + locationId)
    .then(res => {
        return res.body
    })
}

// function to add posts to the api
export function addPostApi(newPost) {
    return request.post('api/v1/posts')
    
    .send(newPost)
    .then(res => {
        return res.body
    })
}
