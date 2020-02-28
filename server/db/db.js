const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])


// get the locations based on the activity id of the current activity selected
function getLocations(id, db = connection) {
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
            location_id: post.location_id
        })
}

//get all posts via location id
function getPostsByLocation(locationID, db = connection) {
    return db('posts')
    .where('posts.location_id', '=', locationID)
    .select('user_name', 'notes', 'dateTime', 'tracks', 'skill')
}

function setRsvp(postId, db=connection) {
    return db('posts')
    .where('posts.id', '=', postID)
    .update()
}

module.exports = {
    getLocations: getLocations, 
    getActivities: getActivities,
    addPost: addPost,
    getPostsByLocation: getPostsByLocation, 
    setRsvp: setRsvp
}