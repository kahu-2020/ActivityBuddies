const express = require('express')
const db = require('../db/db')
const router = express.Router()




//router to get the locations of a corresponding activity id 
router.get('/:id', (req, res) => {
    db.getLocations(req.params.id)
      .then(locations => res.json(locations))
  })

//router to get all activities
router.get('/', (req, res) => {
  console.log('hi')
  db.getActivities()
    .then(activities => {
      console.log(activities)
      res.json(activities)})
})

module.exports = router