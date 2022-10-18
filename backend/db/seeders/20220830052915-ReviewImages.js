'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('ReviewImages', [
        {
          reviewId: 1,
          url: 'https://a0.muscache.com/im/pictures/f0d62152-d945-40a2-8ac4-565c874164e1.jpg?im_w=720'
        },
        {
          reviewId: 2,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-633943734689444626/original/143fc985-9bf8-4c39-bcee-d81374c3a026.jpeg?im_w=720'
        },
        {
          reviewId: 3,
          url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18327626/original/d455a140-c94d-4647-96f5-0387e32b9d18.jpeg?im_w=720'
        },
        {
          reviewId: 3,
          url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18327626/original/51330fba-5e6b-43dc-a76e-601b4964b7e3.jpeg?im_w=720'
        },
        {
          reviewId: 4,
          url: 'https://a0.muscache.com/im/pictures/9570f02f-b865-49b5-91d8-ebf5ee5465c2.jpg?im_w=720'
        },
        {
          reviewId: 4,
          url: 'https://a0.muscache.com/im/pictures/d953d715-89ca-4c10-93c5-1f8e2625a5cb.jpg?im_w=720'
        },
        {
          reviewId: 5,
          url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18327626/original/a9c45c99-4588-4745-9366-1d5cd889ceed.jpeg?im_w=1440'
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
