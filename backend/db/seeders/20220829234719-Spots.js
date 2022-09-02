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
      name: 'Watch the Sunset at a Boho-Chic Studio',
      description: 'Open French doors to a wooden dining patio overlooking the Olympic Clubs golf course and Pacific skyline.',
      price: 288.00
     },
     {
      ownerId: 1,
      address: '455 Vallejo St.',
      city:'San Francisco',
      state: 'CA',
      country: 'United States',
      lat: 37.801928,
      lng: -122.410182,
      name: 'Dorm Beds at Social SF Hostel #1',
      description: 'Our social and vibrant hostel in downtown SF is the place to stay!',
      price: 45
     },
     {
      ownerId: 2,
      address: '757 47th Ave',
      city:'San Francisco',
      state: 'CA',
      country: 'United States',
      lat: 37.7733612,
      lng: -122.507919,
      name: 'Ocean Beach Getaway',
      description: 'Great Ocean Beach location, nearly 800 square ft (70 square meter) private guest suite.',
      price: 321
     },
     {
      ownerId: 3,
      address: '3199 Mission St',
      city:'San Francisco',
      state: 'CA',
      country: 'United States',
      lat: 37.7456129,
      lng: -122.4195709,
      name: 'Cindy & Franks Place',
      description: 'Cindy and Franks place is a comfortable, spacious studio with a private entrance, and all the comforts of home.',
      price: 159
     }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Spots', {
      ownerId: { [Op.in]: [1, 2, 3, 4] }
    }, {});
    // await queryInterface.bulkDelete('Spots', null, {});
  }
};
