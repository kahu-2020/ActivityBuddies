
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function () {
      // Inserts seed entries
      return knex('activities').insert([
        {
          id: 1, name: 'Surfing',
          symbol: '',
          color: '',
          photo: ''
        },
        {
          id: 2, name: 'Mountain Biking',
          symbol: '',
          color: '',
          photo: ''
        },
        {
          id: 3, name: 'Hiking',
          symbol: '',
          color: '',
          photo: ''
        }
      ]);
    });
};
