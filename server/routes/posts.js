const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.use(express.json())


//router to add new posts
router.post('/', (req, res) => {
  const newPost = req.body
  console.log(req.body)
  db.addPost(newPost)
  .then(newPostId => {
    res.json(newPostId)
  })
})


module.exports = router
