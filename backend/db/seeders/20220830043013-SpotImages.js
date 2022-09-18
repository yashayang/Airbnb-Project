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
        url: 'https://a0.muscache.com/im/pictures/a5ac764d-d9f5-4683-a3ae-cdb73c75bbcc.jpg?im_w=960',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/16e8884c-7ff7-4868-a627-aafe0bfbb963.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/d2666541-fca6-48c8-a3ad-9d5730689c9b.jpg?im_w=960',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/18848008-1744-4051-a1be-939c2de1ebcc.jpg?im_w=1200',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53196534/original/9a803ca2-e53b-464d-b7a6-9d41986e86d9.jpeg?im_w=960',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53196534/original/74893a45-627f-4382-9c61-cd2fb56d2a52.jpeg?im_w=720',
        preview:false
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/35b19d71-a621-4824-88a5-5b4a8a3409bf.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/cb3cbc20-dae5-42ca-9609-8c7655f32471.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/35b19d71-a621-4824-88a5-5b4a8a3409bf.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/cb3cbc20-dae5-42ca-9609-8c7655f32471.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/916094e7-677d-47ce-ad7e-5b6433206f57.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/3bc787e5-942c-4aa3-8833-d314efbac9c8.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/9eef747b-9d97-4a0c-a4f3-203df0b5acd3.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/2023313b-e67b-4b5e-9356-a555352573ae.jpg?im_w=720',
        preview:false
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-716523823235497607/original/49e335e3-1c34-4f28-8a53-919e1f033f56.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-716523823235497607/original/b5d0aed7-4296-458a-8b0d-fd35820c930c.jpeg?im_w=720',
        preview: false
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/e02ef07b-8b39-4922-b8de-5fa265037388.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/68a9da94-9097-4478-83ef-87a734043081.jpg?im_w=720',
        preview:false
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50746463/original/181e3448-8aa8-4dea-b0bf-1626c0867de8.jpeg?im_w=960',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50746463/original/181e3448-8aa8-4dea-b0bf-1626c0867de8.jpeg?im_w=1200',
        preview: false
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/a5ac764d-d9f5-4683-a3ae-cdb73c75bbcc.jpg?im_w=960',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/16e8884c-7ff7-4868-a627-aafe0bfbb963.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/d2666541-fca6-48c8-a3ad-9d5730689c9b.jpg?im_w=960',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/18848008-1744-4051-a1be-939c2de1ebcc.jpg?im_w=1200',
        preview: false
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53196534/original/9a803ca2-e53b-464d-b7a6-9d41986e86d9.jpeg?im_w=960',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53196534/original/74893a45-627f-4382-9c61-cd2fb56d2a52.jpeg?im_w=720',
        preview:false
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/35b19d71-a621-4824-88a5-5b4a8a3409bf.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/cb3cbc20-dae5-42ca-9609-8c7655f32471.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/35b19d71-a621-4824-88a5-5b4a8a3409bf.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/cb3cbc20-dae5-42ca-9609-8c7655f32471.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/916094e7-677d-47ce-ad7e-5b6433206f57.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/3bc787e5-942c-4aa3-8833-d314efbac9c8.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/9eef747b-9d97-4a0c-a4f3-203df0b5acd3.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/2023313b-e67b-4b5e-9356-a555352573ae.jpg?im_w=720',
        preview:false
      },
      {
        spotId: 19,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-716523823235497607/original/49e335e3-1c34-4f28-8a53-919e1f033f56.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 19,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-716523823235497607/original/b5d0aed7-4296-458a-8b0d-fd35820c930c.jpeg?im_w=720',
        preview: false
      },
      {
        spotId: 20,
        url: 'https://a0.muscache.com/im/pictures/e02ef07b-8b39-4922-b8de-5fa265037388.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 20,
        url: 'https://a0.muscache.com/im/pictures/68a9da94-9097-4478-83ef-87a734043081.jpg?im_w=720',
        preview:false
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50746463/original/181e3448-8aa8-4dea-b0bf-1626c0867de8.jpeg?im_w=960',
        preview: true
      },
      {
        spotId: 21,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50746463/original/181e3448-8aa8-4dea-b0bf-1626c0867de8.jpeg?im_w=1200',
        preview: false
      },
      {
        spotId: 22,
        url: 'https://a0.muscache.com/im/pictures/a5ac764d-d9f5-4683-a3ae-cdb73c75bbcc.jpg?im_w=960',
        preview: true
      },
      {
        spotId: 22,
        url: 'https://a0.muscache.com/im/pictures/16e8884c-7ff7-4868-a627-aafe0bfbb963.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 23,
        url: 'https://a0.muscache.com/im/pictures/d2666541-fca6-48c8-a3ad-9d5730689c9b.jpg?im_w=960',
        preview: true
      },
      {
        spotId: 23,
        url: 'https://a0.muscache.com/im/pictures/18848008-1744-4051-a1be-939c2de1ebcc.jpg?im_w=1200',
        preview: false
      },
      {
        spotId: 24,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53196534/original/9a803ca2-e53b-464d-b7a6-9d41986e86d9.jpeg?im_w=960',
        preview: true
      },
      {
        spotId: 24,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53196534/original/74893a45-627f-4382-9c61-cd2fb56d2a52.jpeg?im_w=720',
        preview:false
      },
      {
        spotId: 25,
        url: 'https://a0.muscache.com/im/pictures/35b19d71-a621-4824-88a5-5b4a8a3409bf.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 25,
        url: 'https://a0.muscache.com/im/pictures/cb3cbc20-dae5-42ca-9609-8c7655f32471.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 26,
        url: 'https://a0.muscache.com/im/pictures/35b19d71-a621-4824-88a5-5b4a8a3409bf.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 26,
        url: 'https://a0.muscache.com/im/pictures/cb3cbc20-dae5-42ca-9609-8c7655f32471.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 27,
        url: 'https://a0.muscache.com/im/pictures/916094e7-677d-47ce-ad7e-5b6433206f57.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 27,
        url: 'https://a0.muscache.com/im/pictures/3bc787e5-942c-4aa3-8833-d314efbac9c8.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 28,
        url: 'https://a0.muscache.com/im/pictures/9eef747b-9d97-4a0c-a4f3-203df0b5acd3.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 28,
        url: 'https://a0.muscache.com/im/pictures/2023313b-e67b-4b5e-9356-a555352573ae.jpg?im_w=720',
        preview:false
      },
      {
        spotId: 29,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-716523823235497607/original/49e335e3-1c34-4f28-8a53-919e1f033f56.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 29,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-716523823235497607/original/b5d0aed7-4296-458a-8b0d-fd35820c930c.jpeg?im_w=720',
        preview: false
      },
      {
        spotId: 30,
        url: 'https://a0.muscache.com/im/pictures/e02ef07b-8b39-4922-b8de-5fa265037388.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 30,
        url: 'https://a0.muscache.com/im/pictures/68a9da94-9097-4478-83ef-87a734043081.jpg?im_w=720',
        preview:false
      },
  ], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('SpotImages', null, {});

  }
};
