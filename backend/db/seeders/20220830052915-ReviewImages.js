'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('ReviewImages', [
        {
          reviewId: 1,
          url: 'https://a0.muscache.com/im/pictures/a5ac764d-d9f5-4683-a3ae-cdb73c75bbcc.jpg?im_w=960'
        },
        {
          reviewId: 2,
          url: 'https://a0.muscache.com/im/pictures/16e8884c-7ff7-4868-a627-aafe0bfbb963.jpg?im_w=720'
        },
        {
          reviewId: 3,
          url: 'https://a0.muscache.com/im/pictures/18848008-1744-4051-a1be-939c2de1ebcc.jpg?im_w=1200'
        },
        {
          reviewId: 4,
          url: 'https://a0.muscache.com/im/pictures/18848008-1744-4051-a1be-939c2de1ebcc.jpg?im_w=1200'
        },
        {
          reviewId: 4,
          url: 'https://a0.muscache.com/im/pictures/18848008-1744-4051-a1be-939c2de1ebcc.jpg?im_w=1200'
        },
        {
          reviewId: 5,
          url: 'https://a0.muscache.com/im/pictures/a5ac764d-d9f5-4683-a3ae-cdb73c75bbcc.jpg?im_w=960'
        },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ReviewImages', {
      reviewId: {
          [Op.in]: [
              1 , 2, 3, 4, 5, 6
          ]
      }
    });
  }
};
