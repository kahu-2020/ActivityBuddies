
exports.up = function(knex) {
    return knex.schema.createTable('profiles', (table) => {
        table.increments('id').primary
        table.string('name')
        table.text('image_url')
        table.text('about')
        table.string('favourite_activity')
        table.string('email')
        table.string('user_id')
    })   
};

exports.down = function(knex) {
    return knex.schema.dropTable('profiles')
  
};
