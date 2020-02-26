import request from 'superagent'

export function getPosts() {
    console.log('meetup posts')
    return request.get('/api/lost/posts')
    .then(res => {
        console.log(res)
        return res.body
    })
}