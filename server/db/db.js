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



module.exports = {
    getLocations: getLocations, 
    getActivities: getActivities,
    addPost: addPost
}