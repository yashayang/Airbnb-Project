'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Spots', [
      {
      ownerId: 1,
      address: '237 Northgate Ave',
      city: 'Daly City',
      state: 'CA',
      country: 'United States',
      lat: 37.7022646,
      lng: -122.4919588,
      name: 'Watch the Sunset at a Boho-Chic Studio with Private Terrace',
      description: 'Open French doors to a wooden dining patio overlooking the Olympic Club’s golf course and Pacific skyline. Inside, cheerfully eclectic textiles, prints, and wicker accents create an artsy, relaxed vibe. Plants and floral accents bring the outside in.',
      price: 288.00
     },
     {
      ownerId: 2,
      address: ,
      city:,
      state: ,
      country: ,
      lat: ,
      lng: ,
      name: ,
      description: ,
      price:
     },
     {
      ownerId: ,
      address: ,
      city:,
      state: ,
      country: ,
      lat: ,
      lng: ,
      name: ,
      description: ,
      price:
     },
     {
      ownerId: ,
      address: ,
      city:,
      state: ,
      country: ,
      lat: ,
      lng: ,
      name: ,
      description: ,
      price:
     }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    const {Op} = Sequelize.Op;
    return queryInterface.bulkDelete('Spots', {
      id: { [Op.in]: [1, 2, 3, 4] }
    }, {});
  }
};
