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



module.exports = {
    getLocations: getLocations, 
    getActivities: getActivities
}