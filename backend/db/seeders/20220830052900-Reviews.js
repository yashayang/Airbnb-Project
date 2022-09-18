'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Reviews', [
      {
        spotId: 3,
        userId: 1,
        review: 'Fantastic host and great location! The place was beautiful, spacious and clean.',
        stars: 5
      },
      {
        spotId: 4,
        userId: 1,
        review: 'Fantastic host and great location! The place was beautiful, spacious and clean.',
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
        review: 'Very nice place. It is close to downtown. Quiet and Convenient.',
        stars: 4.5
      },
      {
        spotId: 1,
        userId: 3,
        review: 'Had an awesome week in SF! The place was even better than in the picture. Thanks!',
        stars: 4
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
        review: 'Had an awesome week in SF! The place was even better than in the picture. Thanks!',
        stars: 3.5
      },
      {
        spotId: 4,
        userId: 4,
        review: 'Perfect stay! Highly recommend!',
        stars: 5
      },
      {
        spotId: 5,
        userId: 5,
        review: 'Had an awesome week in SF! The place was even better than in the picture. Thanks!',
        stars: 5
      },
      {
        spotId: 6,
        userId: 5,
        review: 'Perfect stay! Highly recommend!',
        stars: 3
      },
      {
        spotId: 7,
        userId: 5,
        review: 'Had an awesome week in SF! The place was even better than in the picture. Thanks!',
        stars: 4
      },
      {
        spotId: 8,
        userId: 5,
        review: 'Perfect stay! Highly recommend!',
        stars: 5
      },
      {
        spotId: 9,
        userId: 4,
        review: 'Had an awesome week in SF! The place was even better than in the picture. Thanks!',
        stars: 5
      },
      {
        spotId: 10,
        userId: 4,
        review: 'Perfect stay! Highly recommend!',
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
