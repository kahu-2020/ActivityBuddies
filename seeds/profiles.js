
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {
          id: 1,
          name: 'Thanos the Manos',
          image_url: 'https://www.sideshow.com/storage/product-images/903429/thanos_marvel_feature.jpg',
          about: 'For food safety, the CDC recommends proper fruit handling and preparation to reduce the risk of food contamination and foodborne illness. Fresh fruits and vegetables should be carefully selected;  at the store, they should not be damaged or bruised; and precut pieces should be refrigerated or surrounded by ice.',
          favourite_activity: 'Biking',
          user_id: 1,

        },
        {
          id: 2,
          name: 'Fu Manchu',
          image_url: 'https://vignette.wikia.nocookie.net/madtv/images/8/89/The_blind_kung_fu_master.jpg/revision/latest?cb=20190804062203',
          about: 'Another reason why techniques often appear different in forms when contrasted with sparring application is thought by some to come from the concealment of the actual functions of the techniques from outsiders.',
          favourite_activity: 'Spiking',
          user_id: 2,

        },
        {
          id: 3,
          name: 'Secret Agent Randy Beans',
          image_url: 'https://yt3.ggpht.com/a/AGF-l7_Sf_RaIABXhv5U8o-8Ju3o-k0ONlkMXs2TNQ=s900-c-k-c0xffffffff-no-rj-mo',
          about: "Mattel later returned for the third season of RuPaul's Drag Race: All Stars, which started airing on January 25, 2018. On March 15, 2018, her fellow competitors voted for her to advance to the final two, where she ultimately won against runner-up Kennedy Davenport in the final lipsync battle.",
          favourite_activity: 'Slaying',
          user_id: 3,

        },
      ]);
    });
};
