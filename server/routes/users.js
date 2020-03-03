const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.use(express.json())


router.get('/posts/:id', (req, res) => {
    db.getPostsByUser(req.params.id)
    .then ( posts => {
        console.log(posts)
        res.json(posts)
    })
})

router.get('/:id', (req, res) => {
    db.getProfileByUser(req.params.id)
    .then ( profile => {
        res.json(profile[0])
    })
})

module.exports = router