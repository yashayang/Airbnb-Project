'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('SpotImages', [
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18327626/original/dd514184-652d-43ac-9647-945ecdd4f890.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18327626/original/85aace89-c903-4667-b2ee-639b9c19355e.jpeg?im_w=720',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18327626/original/6f61d369-18c3-4428-9b92-a037fdfc2204.jpeg?im_w=720',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18327626/original/64dceb9d-791d-4d7a-92f3-019cf4589ec6.jpeg?im_w=720',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18327626/original/3474c2c2-c934-4932-b600-361ff3270819.jpeg?im_w=720',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/4dd0aa84-b8e0-49cf-bbde-ee08df7ae452.jpg?im_w=960',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/e89a20b8-ae8a-4f9e-bc3a-9e01bc43631b.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/d953d715-89ca-4c10-93c5-1f8e2625a5cb.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/0a3c1bc6-b7bb-4b97-b44e-b8532f5afcec.jpg?im_w=720',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/ad429202-910a-400b-9538-4bf3af96378c.jpg?im_w=1200',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/ae1b48e9-24e9-43fb-93f5-1c683d76259a.jpg?im_w=960',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/8efb200c-6dcb-460d-a367-caa511506077.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/fd08b331-2b46-4fb6-8f57-63687c4b2377.jpg?im_w=480',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/e3ebda9a-3268-4ec8-9903-98f85f0bf767.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/27331726-bf50-40dd-8abc-ca9643f8f663.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/c3a652be-a5ac-4a3f-9cf0-5771ad91d5a1.jpg?im_w=960',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/d101e3a7-bc5e-43a1-a221-d3ad35bd3dad.jpg?im_w=480',
        preview:false
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/35b6be88-d345-492b-8bb7-15ee00d042e8.jpg?im_w=480',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-633943734689444626/original/83812033-56fc-499f-8e9a-a2783af015ca.jpeg?im_w=720',
        preview:false
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-633943734689444626/original/78736791-1c50-458b-b631-78dbfb67b8bc.jpeg?im_w=720',
        preview:false
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-689901292929045479/original/331632ac-6153-49d7-9de6-8596cfe274ac.jpeg?im_w=960',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-689901292929045479/original/46c46239-96d7-412c-ab97-cb24e0d19092.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-689901292929045479/original/486a35d2-58a1-4b27-bb95-32354891c8c2.jpeg?im_w=480',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-689901292929045479/original/17424071-8f30-417b-81c4-0bc1b92b4c69.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-689901292929045479/original/3959a9e8-3b12-496e-897a-82ad85edf9f6.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/b91a6113-40d7-4245-b876-f648bb942f1f.jpg?im_w=960',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/78a3c948-1fe5-4601-80b5-e567a6d20357.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/dee70250-2b92-4c38-a793-3e4aeeeacf23.jpg?im_w=480',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/dec83753-cc64-4bc2-96ad-18be16452b4d.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/3c55615c-b903-4b10-ae71-07fff0dd0116.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-25735146/original/ad2b090a-d3d7-494a-acc2-cc7f7e8121f5.jpeg?im_w=960',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-25735146/original/284ff17e-4d7b-48b3-957d-c9ad25e94944.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-25735146/original/41c72def-47b9-44ad-bbbc-8ec4221462a6.jpeg?im_w=480',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-25735146/original/3a56d36b-4323-40d0-bd7e-2203140b1cb8.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-25735146/original/008c14a2-d6c6-467a-8b22-7ad65cb3346b.jpeg?im_w=1200',
        preview: false
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/fdd832d3-225d-4a38-bd1a-646e61db393e.jpg?im_w=960',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/e5ae61fd-d983-4c1f-bc0c-473897b0a155.jpg?im_w=480',
        preview:false
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/1104e7a3-0131-4758-84f6-e435649749d4.jpg?im_w=480',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/56717359-8bec-4494-9096-d8101e4d6f64.jpg?im_w=480',
        preview:false
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/025fc6ec-7e93-4545-b84c-2f5f9932880f.jpg?im_w=480',
        preview:false
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51108720/original/12d9a012-87ef-4fb5-bc5a-a5ceeb6c1762.jpeg?im_w=960',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51108720/original/00f1169d-ece1-41df-a88d-76057ea96388.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51108720/original/f66832d8-19d8-4bde-a162-b10f6572c910.jpeg?im_w=480',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51108720/original/9e1d8e63-cbba-4d89-92c3-e4d42274f292.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51108720/original/69869043-0ae9-4c00-959f-eb7173c2ae2f.jpeg?im_w=480',
        preview: false
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51508220/original/655036d1-4440-4021-8d7a-47996800e492.jpeg?im_w=960',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51508220/original/d0fa395f-58df-4955-bb18-99af5dad07c3.png?im_w=480',
        preview:false
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/745f990c-9299-42f9-8454-e143b631e9f7.jpg?im_w=480',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51508220/original/f4487df6-ec75-4652-b86e-74f23cbe4d53.png?im_w=480',
        preview:false
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51508220/original/5bea5270-538f-4ec9-9fbb-e16853182e13.png?im_w=480',
        preview:false
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/aea7f75b-7315-483d-ba66-7db5bf0676db.jpg?im_w=960',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/0d1632ef-2279-405f-9976-61e19e57cf3b.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/41558477-1dc1-4c63-b23d-b0f4ade79d62.jpg?im_w=480',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/29b22b74-e847-46c2-b083-fa4bced4fcda.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/c1247db7-8496-4d11-9bb5-39898508d4f6.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/c596d286-57a6-460e-b6a8-9698b6f31157.jpg?im_w=960',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/6df63a59-7ad7-4a4a-b28d-9796b5b97b0a.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/42765c15-00bd-443b-9111-c13336bc2665.jpg?im_w=480',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/07baa603-c907-4d7e-9813-a6dddc734b77.jpg?im_w=480',
        preview: false
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/06af3372-d4b7-43c6-ad07-fd4883eb2b36.jpg?im_w=480',
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
