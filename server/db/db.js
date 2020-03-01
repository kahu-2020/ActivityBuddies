const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])
const {generateHash} = require('authenticare/server')

// get the locations based on the activity id of the current activity selected
function getLocations(id, db = connection) {
  console.log(id)
    return db('locations')
    .where('activity_id', '=', id)
    .select('*')
}

//get all activities from the activity database for display on the home page
function getActivities(db = connection) {
    return db('activities')
        .select('*')
}

// add new meetup post to database
function addPost (post, db = connection) {
    return db('posts')
        .insert({
            user_name: post.user_name,
            notes: post.notes,
            dateTime: post.dateTime,
            tracks: post.tracks,
            skill: post.skill,
            location_id: post.location_id, 
            attendees: 0
        })
}

//get all posts via location id
function getPostsByLocation(locationID, db = connection) {
    return db('posts')
    .where('posts.location_id', '=', locationID)
    .select('user_name', 'notes', 'dateTime', 'tracks', 'skill', 'attendees')
}

function setRsvp(post, db=connection) {
    console.log(post)
    return db('posts')
    .where('posts.user_name', '=', post.user_name)
    .increment('attendees', 1)
}

function createUser (user, db = connection) {
    return userExists(user.username, db)
      .then(exists => {
        if (exists) {
          return Promise.reject(new Error('User exists'))
        }
      })
      .then(() => generateHash(user.password))
      .then(passwordHash => {
        return db('users').insert({ username: user.username, passwordHash: passwordHash })
      })
  }
  
  function userExists (username, db = connection) {
    return db('users')
      .count('id as n')
      .where('username', username)
      .then(count => {
        return count[0].n > 0
      })
  }
  
  function getUserByName (username, db = connection) {
    return db('users')
      .select()
      .where('username', username)
      .first()
  }

module.exports = {
    getLocations: getLocations, 
    getActivities: getActivities,
    addPost: addPost,
    getPostsByLocation: getPostsByLocation, 
    userExists,
    getUserByName,
    createUser, 
    setRsvp: setRsvp
}