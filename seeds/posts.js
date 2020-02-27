
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          id: 1,
          user_name: 'Henry',
          notes: 'cowabunga',
          dateTime: '2020-03-07T09:00',
          tracks: 'Ridgeline',
          skill: 'Advanced',
          location_id: 1
        },
        {
          id: 2,
          user_name: 'Claire',
          notes: 'double shakka',
          dateTime: '2020-03-07T12:00',
          tracks: 'Trickle Falls',
          skill: 'Expert',
          location_id: 1
        },
        {
          id: 3,
          user_name: 'Ethan',
          notes: 'has anyone seen Lui?',
          dateTime: '2020-03-08T13:00',
          tracks: 'Starfish',
          skill: 'Intermediate',
          location_id: 1
        },
        {
          id: 4,
          user_name: 'Kel',
          notes: 'how long will this take?',
          dateTime: '2020-03-08T13:00',
          tracks: 'Hataitai Zigzag',
          skill: 'Beginner',
          location_id: 3
        },
        {
          id: 5,
          user_name: 'Dan',
          notes: 'can someone lend me a bike please?',
          dateTime: '2020-03-08T13:00',
          tracks: 'Serendipity',
          skill: 'Advanced',
          location_id: 2
        }
      ]);
    });
};
