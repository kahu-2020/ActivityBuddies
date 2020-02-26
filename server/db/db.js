const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)


// get the locations based on the activity id of the current activity selected
function getLocations(id, db = connection) {
    return db('locations')
    .where('activity_id' = id)
    .select('*')
}




module.exports = {
    getLocations: getLocations, 
}