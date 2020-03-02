
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
          photo: 'images/maps/surf.png'
        },
        {
          id: 2, name: 'RIDE',
          symbol: '',
          color: '',
          photo: 'images/maps/ride.png'
        },
        {
          id: 3, name: 'HIKE',
          symbol: '',
          color: '',
          photo: 'images/maps/hike.png'
        }
      ]);
    });
};
