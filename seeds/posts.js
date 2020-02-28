
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
          tracks: 'To Summit + Ridgeline',
          skill: 'Expert',
          location_id: 1,
          attendees: 0
          

        },
        {
          id: 2,
          user_name: 'Claire',
          notes: 'double shakka',
          dateTime: '2020-03-07T12:00',
          tracks: 'To Summit + Trickle Falls',
          skill: 'Expert',
          location_id: 1,
          attendees: 0
        },
        {
          id: 3,
          user_name: 'Ethan',
          notes: 'has anyone seen Lui?',
          dateTime: '2020-03-08T13:00',

          tracks: 'Mid Peak loop + Starfish',
          skill: 'Advanced',
          location_id: 1,
          attendees: 0
        },
        {
          id: 4,
          user_name: 'Kel',
          notes: 'how long will this take?',
          dateTime: '2020-03-08T13:00',
          tracks: 'Hataitai Zigzag',
          skill: 'Beginner',
          location_id: 3,
          attendees: 0
        },
        {
          id: 5,
          user_name: 'Dan',
          notes: 'can someone lend me a bike please?',
          dateTime: '2020-03-08T13:00',
          tracks: 'Clinical + Highbury fling + Serendipity + Transient',
          skill: 'Advanced',
          location_id: 2,
          attendees: 0
        },
        {
          id: 6,
          user_name: 'Seb',
          notes: 'Meeting at the carpark, coffee afterwards?',
          dateTime: '2020-03-07T12:00',
          tracks: 'Beginners loop + Skills area',
          skill: 'Beginner',
          location_id: 1,
          attendees: 0
        },
        {
          id: 7,
          user_name: 'Scott',
          notes: 'Nice slow ride with a few challenging tracks',
          dateTime: '2020-03-08T13:00',
          tracks: 'Mid Peak loop + Magic Carpet',
          skill: 'Intermediate',
          location_id: 1,
          attendees: 0
        },

          
        }

      ]);
    });
};
