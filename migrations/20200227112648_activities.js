
exports.up = function(knex) {
  return knex.schema.createTable('activities', (table) => {
      table.increments('id').primary
      table.string('name')
      table.string('symbol')
      table.string('color')
      table.string('photo')

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('activities')
};
