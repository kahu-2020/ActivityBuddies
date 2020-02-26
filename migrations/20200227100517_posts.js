
exports.up = function(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id').primary()
    table.string('user_name')
    table.string('notes')
    table.interger('dateTime')
    table.string('tracks')
    table.string('skill')
    table.interger('location_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts')
};
