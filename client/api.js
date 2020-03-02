import request from 'superagent'
import { getEncodedToken } from 'authenticare/client'



export function getPosts() {
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
    return request.get('/api/v1/posts/' + locationId)
    .then(res => {
        return res.body
    })
}

export function getUpcomingPosts(locationId, ) {
    console.log('upcoming')
    return request.get('/api/v1/posts/upcoming/' + locationId)
    .then(res => {
        return res.body
    })
}

// function to add posts to the api
export function addPostApi(newPost) {
    return request.post('api/v1/posts')
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .send(newPost)
    .then(res => {
        return res.body
    })
}
