const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.use(express.json())

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

router.get('/:id', (req, res) => {

    db.getPostsByLocation(req.params.id)
    .then(postList => {
        res.json(postList)
    })
})


router.post('/rsvp', (req, res) => {
  db.setRsvp(req.body)
  .then(console.log('hello'))
})


module.exports = router
