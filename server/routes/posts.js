const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.use(express.json())

function getPostsByLocation(locationID) {
    return db('locations')
    .join('posts', 'posts.location_id', '=', 'id')
    .where('locations.id', '=', locationID)
    .select('notes', 'dateTime', 'tracks', 'skill')
}

module.exports = router
