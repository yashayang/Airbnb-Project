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
          url: 'https://a0.muscache.com/im/pictures/c23a4aed-ab6d-4b1c-834e-38064ba775be.jpg?im_w=720'
        },
        {
          reviewId: 3,
          url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18327626/original/51330fba-5e6b-43dc-a76e-601b4964b7e3.jpeg?im_w=720'
        },
        {
          reviewId: 4,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-633943734689444626/original/f3bd06c8-7a67-4187-bb7b-01f4fc265d0a.jpeg?im_w=720'
        },
        {
          reviewId: 4,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-633943734689444626/original/115b293f-2e5c-438c-b085-1b92839cf3e9.jpeg?im_w=720'
        },
        {
          reviewId: 5,
          url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-689901292929045479/original/801f28e5-be6f-4278-be0f-1b3cae582b7f.jpeg?im_w=1200'
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
