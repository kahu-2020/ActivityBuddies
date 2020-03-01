
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function () {
      // Inserts seed entries
      return knex('activities').insert([
        {
          id: 1, name: 'SURF',
          symbol: '',
          color: '',
          photo: ''
        },
        {
          id: 2, name: 'RIDE',
          symbol: '',
          color: '',
          photo: ''
        },
        {
          id: 3, name: 'HIKE',
          symbol: '',
          color: '',
          photo: ''
        }
      ]);
    });
};
