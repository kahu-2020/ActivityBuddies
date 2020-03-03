
exports.up = function(knex) {
    return knex.schema.createTable('profiles', (table) => {
        table.increments('id').primary
        table.string('name')
        table.string('image_url')
        table.string('about')
        table.string('favourite_activity')
        table.string('user_id')
    })   
};

exports.down = function(knex) {
    return knex.schema.dropTable('profiles')
  
};
