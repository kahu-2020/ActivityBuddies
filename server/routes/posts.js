const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.use(express.json())


//router to get all posts
router.get('/', (req, res) => {
  db.getPosts(req.params.id)
  .then(posts => res.json(posts))
})


module.exports = router
