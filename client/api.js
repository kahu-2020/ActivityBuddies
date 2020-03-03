import request from 'superagent'
import { getEncodedToken } from 'authenticare/client'



export function getPosts() {
    return request.get('/api/v1/posts')
    .then(res => {
        return res.body
    })
}

export function getActivities() {
    return request.get('/api/v1/activities/')
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .then(res => {
        return res.body
    })
}

export function getPostsByLocationId(locationId) {
   
    return request.get('/api/v1/posts/' + locationId)
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .then(res => {
        return res.body
    })
}

// function to add posts to the api
// slash is to stop potential prefix issues -kelly
export function addPostApi(newPost) {
    return request.post('/api/v1/posts')
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .send(newPost)
    .then(res => {
        return res.body
    })
}

export function sendEmail() {
    return request.get('/api/v1/posts')
    .then(res => {
        return res.text
    })
}

export function getProfileById() {
    console.log("GetProfileById: Reached the front end Api.")
    return request.get('api/v1/profile/')
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .then(res => {
        return res.body
    })
}
