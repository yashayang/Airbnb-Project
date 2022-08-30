'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Bookings', [
      {
      spotId: 1,
      userId: 1,
      startDate:'2022,8,14',
      endDate: '2022,8,17'
     },
     {
      spotId: 1,
      userId: 2,
      startDate: '2022,8,18',
      endDate: '2022,8,19'
     },
     {
      spotId: 2,
      userId: 3,
      startDate:'2022,8,14',
      endDate: '2022,8,17'
     },
     {
      spotId: 3,
      userId: 2,
      startDate:'2022,11,23',
      endDate: '2022,11,28'
     }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    const {Op} = Sequelize.Op;
    return queryInterface.bulkDelete('Bookings', {
      id: { [Op.in]: [1, 2, 3, 4] }
    }, {});
  }
};
