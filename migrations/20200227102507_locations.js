
exports.up = function(knex) {
  return knex.schema.createTable('locations', (table) => {
      table.increments().primary
      table.string('name')
      table.integer('activity_id')
      table.string('widget')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('locations')
};
