const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.use(express.json())


//router to get the locations of a corresponding activity id 
router.get('/:id', (req, res) => {
    db.getLocations(req.params.id)
      .then(locations => res.json(locations))
  })

//router to get all activities
router.get('/'), (req, res) => {
  db.getActivities(req.params.id)
    .then(activities => res.json(activities))
}

module.exports = router