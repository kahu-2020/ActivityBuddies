
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, name: 'Makara', activity_id: 1},
        {id: 2, name: 'Polhill', activity_id: 1},
        {id: 3, name: 'Mt Vic', activity_id: 1},
        {id: 4, name: 'Catchpool Valley', activity_id: 3},
        {id: 5, name: 'Western Hills', activity_id: 3},
        {id: 6, name: 'Mt Vic', activity_id: 3},
      ]);
    });
};
