'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('SpotImages', [
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50746463/original/181e3448-8aa8-4dea-b0bf-1626c0867de8.jpeg?im_w=960',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50746463/original/181e3448-8aa8-4dea-b0bf-1626c0867de8.jpeg?im_w=1200',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/a5ac764d-d9f5-4683-a3ae-cdb73c75bbcc.jpg?im_w=960'
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/16e8884c-7ff7-4868-a627-aafe0bfbb963.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/d2666541-fca6-48c8-a3ad-9d5730689c9b.jpg?im_w=960'
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/18848008-1744-4051-a1be-939c2de1ebcc.jpg?im_w=1200',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53196534/original/9a803ca2-e53b-464d-b7a6-9d41986e86d9.jpeg?im_w=960'
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53196534/original/74893a45-627f-4382-9c61-cd2fb56d2a52.jpeg?im_w=720',
        preview:false
      }
  ], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('SpotImages', null, {});

  }
};
