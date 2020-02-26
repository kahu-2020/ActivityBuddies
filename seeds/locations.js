
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, name: 'Makara', activity_id: 1},
        {id: 2, name: 'Polhill', activity_id: 1},
        {id: 3, name: 'Mt Vic', activity_id: 1},
      ]);
    });
};
