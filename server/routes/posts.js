const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.use(express.json())

const { getTokenDecoder } = require('authenticare/server')


router.get('/:id', (req, res) => {
  db.getPostsByLocation(req.params.id)
  .then(postList => {
      res.json(postList)
  })
})


//router to add new posts
router.post('/', (req, res) => {
  const newPost = req.body
  db.addPost(newPost)
  .then(newPostId => {
    res.json(newPostId)
  })
})

<<<<<<< HEAD
router.get('/:id', (req, res) => {
=======
router.get('/:id', getTokenDecoder(), (req, res) => {
    console.log('hi' + req.user)
>>>>>>> fc44f413a855dfceafbbd0be2cf879274faefc2f
    db.getPostsByLocation(req.params.id)
    .then(postList => {
        res.json(postList)
    })
})

router.get('/upcoming/:id', (req, res) => {
  db.getUpComingPosts(req.params.id)    
    .then(upComingPosts => {
      console.log(upComingPosts)
        res.json(upComingPosts)
  })
})

router.post('/rsvp', (req, res) => {
  db.setRsvp(req.body)
  .then(console.log('hello'))
})


module.exports = router
