'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Bookings', [
      {
      spotId: 3,
      userId: 1,
      startDate:'2022-8-14T00:00:00.000Z',
      endDate: '2022-8-27T00:00:00.000Z'
     },
     {
      spotId: 1,
      userId: 2,
      startDate: '2022-8-28T00:00:00.000Z',
      endDate: '2022-9-19T00:00:00.000Z'
     },
     {
      spotId: 1,
      userId: 3,
      startDate:'2022-8-14T00:00:00.000Z',
      endDate: '2022-8-15T00:00:00.000Z'
     },
     {
      spotId: 2,
      userId: 4,
      startDate:'2022-11-23T00:00:00.000Z',
      endDate: '2022-11-28T00:00:00.000Z'
     },
     {
      spotId: 4,
      userId: 5,
      startDate:'2022-11-23T00:00:00.000Z',
      endDate: '2022-11-28T00:00:00.000Z'
     }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Bookings', {
      SpotId: { [Op.in]: [1, 2, 3] }
    }, {});
  }
};
