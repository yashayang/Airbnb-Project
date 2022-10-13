'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Reviews', [
      {
        spotId: 3,
        userId: 1,
        review: 'Modern fairytale home is the exact description for this beautiful house. I can highly recommend it.',
        stars: 5
      },
      {
        spotId: 4,
        userId: 1,
        review: 'The stay was great. I would highly recommend if you are in love. Bring plenty of food, as it might be worth changing some plans for sightseeing and enjoying more of what the place has to offer.',
        stars: 4.3
      },
      {
        spotId: 1,
        userId: 2,
        review: 'Very nice place. It is close to downtown. Quiet and Convenient.',
        stars: 4
      },
      {
        spotId: 2,
        userId: 2,
        review: 'Stunning property, with a fantastic layout. The space was great and kitchen fully equipped. The surroundings are stunning, we had a lovely time.',
        stars: 4.5
      },
      {
        spotId: 1,
        userId: 3,
        review: 'Amazingly decorated. Awesome host. Will be back.',
        stars: 5
      },
      {
        spotId: 1,
        userId: 2,
        review: 'It would be difficult to find a more beautiful view anywhere in the area. The house is so fun in the way it was designed and decorated. Absolutely world class architecture and a time capsule of mid-century modern style. Without A/C the heat can be a bit much at first, but it doesnt take long to figure out which windows to open and which to close at the right times to make it more comfortable. We will likely stay here again next year.',
        stars: 4.5
      },
      {
        spotId: 1,
        userId: 4,
        review: 'Beautiful house and views. Great place to stay when in Boulder. Unique Airbnb experience',
        stars: 4.8
      },
      {
        spotId: 2,
        userId: 3,
        review: 'Had an awesome week in SF! The place was even better than in the picture. Thanks!',
        stars: 4
      },
      {
        spotId: 3,
        userId: 4,
        review: 'The House is so unique and amazing! Fantastic Architecture, we loved to stay there!',
        stars: 3.5
      },
      {
        spotId: 4,
        userId: 4,
        review: 'Meets all expectations. Undoubtedly a surreal experience. Excellent service, very polite and helpful people.',
        stars: 5
      },
      {
        spotId: 5,
        userId: 5,
        review: 'We would rent again! The place was so beautiful inside and out! Exactly what we were looking for.',
        stars: 5
      },
      {
        spotId: 6,
        userId: 5,
        review: 'Great place and location. Robbie is also great- drove my fiancé to and from a wedding we had close by. Arrived late in the evening but had perfectly written instructions on how to properly access the house. Would love to come back.',
        stars: 5
      },
      {
        spotId: 7,
        userId: 5,
        review: 'My wife and I stayed here with our toddler son. The location is amazing. The house was well-maintained, and check-in was seamless. There were a couple of minor problems, since we were traveling with a toddler: for instance, the master bedroom is not connected to the rest of the house. Its on the other side a small deck. The deck has walls that enclose it, so its still quite private. But for having a toddler, it wasnt ideal (we ended up staying in the other bedroom with our son in the small TV room).',
        stars: 4
      },
      {
        spotId: 8,
        userId: 5,
        review: 'Great location and just as pictured. I will definitely stay here again.',
        stars: 5
      },
      {
        spotId: 9,
        userId: 4,
        review: 'Love this place! Stunning views.',
        stars: 5
      },
      {
        spotId: 10,
        userId: 4,
        review: 'We had an amazing stay here! The house is even more beautiful than the pictures, and everything is so well thought out. The fireplace was so cozy during the rainy days and waking up to the forest view was stunning! Highly recommend!',
        stars: 5
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Reviews', {
      spotId: {
          [Op.in]: [ 1, 2, 3 ]
      }
    });
  }
};
