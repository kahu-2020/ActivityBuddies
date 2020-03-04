
exports.up = function(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id').primary()
    table.string('user_name')
    table.string('notes')
    table.string('dateTime')
    table.string('tracks')
    table.string('skill')
    table.integer('location_id')
    table.integer('attendees')
    table.integer('user_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts')
};
