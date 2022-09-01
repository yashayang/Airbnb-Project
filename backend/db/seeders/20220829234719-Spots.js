'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Spots', [
      {
      ownerId: 3,
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
      ownerId: 4,
      address: '455 Vallejo St.',
      city:'San Francisco',
      state: 'CA',
      country: 'United States',
      lat: 37.801928,
      lng: -122.410182,
      name: 'Dorm Beds at Social SF Hostel #1',
      description: 'Our social and vibrant hostel in downtown SF is the place to stay! We invite travelers and adventurers of all ages, from all corners of the globe, to rest their heads at this historic hostel in the heart of San Francisco. We pride ourselves on creating a community vibe and a space that encourages guests to gather together, exchange travel stories, and get to know one another.',
      price: 45
     },
     {
      ownerId: 1,
      address: '757 47th Ave',
      city:'San Francisco',
      state: 'CA',
      country: 'United States',
      lat: 37.7733612,
      lng: -122.507919,
      name: 'Ocean Beach Getaway - Entire spacious suite',
      description: 'Great Ocean Beach location, nearly 800 square ft (70 square meter) private guest suite. 10 mins walking distance from the beach. 5 mins walking to Golden Gate Park and Dutch Windmill! Very close to the Cliff House, Lands End, and Golden gate bridge. Private suite with a full bathroom, kitchenette, spacious living room and two bedrooms. Street parking is free in the neighborhood. The suite is the ground floor of a two-story house. The hosts live upstairs.',
      price: 321
     },
     {
      ownerId: 2,
      address: '3199 Mission St',
      city:'San Francisco',
      state: 'CA',
      country: 'United States',
      lat: 37.7456129,
      lng: -122.4195709,
      name: 'Cindy & Franks Place',
      description: 'Cindy and Franks place is a comfortable, spacious studio with a private entrance, and all the comforts of home. It is located in the renovated basement of a 19th century farmhouse and is fully apportioned with a queen size bed, a large bathroom with a deep tub and access to both front and back yards. It has all the basics, and then some. It is a perfect base of operations for days and nights on the town or around the Bay and a great place to stay in and get things done.',
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
