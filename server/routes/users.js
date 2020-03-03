const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.use(express.json())

const { getTokenDecoder } = require('authenticare/server')

router.get('posts/', (req, res) => {
    db.getPostsByUser(req.user.id)
    .then ( posts => {
        res.json(posts)
    })
})

router.get('/', (req, res) => {
    db.getProfileByUser(req.user.id)
    .then ( posts => {
        res.json(posts)
    })
})

module.exports = router