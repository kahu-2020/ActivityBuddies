const express = require('express')
const db = require('../db/db')
const router = express.Router()
const { getTokenDecoder } = require('authenticare/server')


// router to get activity to set redux state of current activity by params name 
router.get('/activity/:name', (req, res) => {
  db.getActivity(req.params.name)
  .then(activity => res.json(activity[0]))
})

router.get('/location/:id', (req, res) => {
  db.getLocation(req.params.id)
  .then(location => res.json(location))
})

//router to get the locations of a corresponding activity id 
router.get('/:id', (req, res) => {
    db.getLocations(req.params.id)
      .then(locations => res.json(locations))
  })

//router to get all activities
router.get('/', (req, res) => {
  db.getActivities()
    .then(activities => {
      res.json(activities)})
})

module.exports = router