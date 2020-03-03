const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.use(express.json())


router.get('posts/', (req, res) => {
    db.getPostsByUser(req.user.id)
    .then ( posts => {
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