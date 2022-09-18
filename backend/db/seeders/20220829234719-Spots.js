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
      address: '475 Jallejo St.',
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
      address: '77 S 2rd Ave',
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
      ownerId: 2,
      address: '3199 Mission St',
      city:'San Francisco',
      state: 'CA',
      country: 'United States',
      lat: 37.7456129,
      lng: -122.4195709,
      name: 'Cindy & Franks Place',
      description: 'Cindy and Franks place is a comfortable, spacious studio with a private entrance, and all the comforts of home.',
      price: 159
     },
     {
     ownerId: 3,
     address: '237237 Southgate Ave',
     city: 'Irvine',
     state: 'CA',
     country: 'United States',
     lat: 36.7022646,
     lng: -82.4919588,
     name: 'Beautiful single family house in Irvine',
     description: 'Open French doors to a wooden dining patio overlooking the Olympic Clubs golf course and Pacific skyline.',
     price: 288.00
    },
    {
     ownerId: 3,
     address: '455455 Mission St.',
     city:'Irvine',
     state: 'CA',
     country: 'United States',
     lat: 36.801928,
     lng: -85.410182,
     name: 'Beautiful single family house in Irvine #2',
     description: 'Our social and vibrant hostel in downtown SF is the place to stay!',
     price: 455
    },
    {
     ownerId: 4,
     address: '757757 W 5th Ave',
     city:'Laguna Beach',
     state: 'CA',
     country: 'United States',
     lat: 36.7733612,
     lng: -85.507919,
     name: 'Ocean Beach Getaway in Laguna Beach',
     description: 'Great Ocean Beach location, nearly 800 square ft (70 square meter) private guest suite.',
     price: 521
    },
    {
     ownerId: 4,
     address: '3099 Spring St',
     city:'Laguna Beach',
     state: 'CA',
     country: 'United States',
     lat: 36.7456129,
     lng: -85.4195709,
     name: 'Cindy & Franks Place in Laguna Beach',
     description: 'Cindy and Franks place is a comfortable, spacious studio with a private entrance, and all the comforts of home.',
     price: 659
    },
    {
      ownerId: 1,
      address: '123 Sunset Ave',
      city: 'Daly City',
      state: 'CA',
      country: 'United States',
      lat: 38.7022646,
      lng: -142.4919588,
      name: 'Clean and cozy place',
      description: 'Open French doors to a wooden dining patio overlooking the Olympic Clubs golf course and Pacific skyline.',
      price: 288.00
     },
     {
      ownerId: 1,
      address: '455 Vallejo St.',
      city:'San Francisco',
      state: 'CA',
      country: 'United States',
      lat: 38.801928,
      lng: -142.410182,
      name: 'Clean and cozy place #2',
      description: 'Our social and vibrant hostel in downtown SF is the place to stay!',
      price: 145
     },
     {
      ownerId: 2,
      address: '75 47th Ave',
      city:'San Francisco',
      state: 'CA',
      country: 'United States',
      lat: 38.7733612,
      lng: -142.507919,
      name: 'Ocean Beach Getaway#2',
      description: 'Great Ocean Beach location, nearly 800 square ft (70 square meter) private guest suite.',
      price: 321
     },
     {
      ownerId: 2,
      address: '31 Mission St',
      city:'San Francisco',
      state: 'CA',
      country: 'United States',
      lat: 38.7456129,
      lng: -142.4195709,
      name: 'Cindy & Franks Place#2',
      description: 'Cindy and Franks place is a comfortable, spacious studio with a private entrance, and all the comforts of home.',
      price: 159
     },
     {
      ownerId: 3,
      address: '3056 Giant Forest Loop',
      city: 'Chino Hills',
      state: 'CA',
      country: 'United States',
      lat: 32.7022646,
      lng: -152.4919588,
      name: 'Beautiful single family house in Chino Hills',
      description: 'Open French doors to a wooden dining patio overlooking the Olympic Clubs golf course and Pacific skyline.',
      price: 288.00
     },
     {
      ownerId: 3,
      address: '13299 Giant Forest Loop',
      city:'Chino Hills',
      state: 'CA',
      country: 'United States',
      lat: 32.801928,
      lng: -152.410182,
      name: 'Beautiful single family house in Chino Hills #2',
      description: 'Our social and vibrant hostel in downtown SF is the place to stay!',
      price: 455
     },
     {
      ownerId: 4,
      address: '456 47th Ave',
      city:'Newport Beach',
      state: 'CA',
      country: 'United States',
      lat: 32.7733612,
      lng: -152.507919,
      name: 'Ocean Beach Getaway in Newport Beach',
      description: 'Great Ocean Beach location, nearly 800 square ft (70 square meter) private guest suite.',
      price: 1021
     },
     {
      ownerId: 4,
      address: '456 Mission St',
      city:'Newport Beach',
      state: 'CA',
      country: 'United States',
      lat: 32.7456129,
      lng: -152.4195709,
      name: 'Cindy & Franks Place in Newport Beach',
      description: 'Cindy and Franks place is a comfortable, spacious studio with a private entrance, and all the comforts of home.',
      price: 839
     },
     {
      ownerId: 1,
      address: '12345 Wine Country St.',
      city: 'Temecula',
      state: 'CA',
      country: 'United States',
      lat: 40.7022646,
      lng: -122.4919588,
      name: 'Tiny home hosted by Leslie & Kelli',
      description: 'Open French doors to a wooden dining patio overlooking the Olympic Clubs golf course and Pacific skyline.',
      price: 288.00
     },
     {
      ownerId: 1,
      address: '45 Rock Stone St.',
      city:'Temecula',
      state: 'CA',
      country: 'United States',
      lat: 40.801928,
      lng: -122.410182,
      name: 'Tiny home hosted by Leslie & Kelli #2',
      description: 'Our social and vibrant hostel in downtown SF is the place to stay!',
      price: 45
     },
     {
      ownerId: 2,
      address: '135 3rd Street',
      city:'Los Angeles',
      state: 'CA',
      country: 'United States',
      lat: 40.7733612,
      lng: -122.507919,
      name: 'The Half, A Metro-Accessible Designer Tiny House',
      description: 'Great Ocean Beach location, nearly 800 square ft (70 square meter) private guest suite.',
      price: 321
     },
     {
      ownerId: 2,
      address: '3199 Big Pine Tree St',
      city:'Big Bear',
      state: 'CA',
      country: 'United States',
      lat: 40.7456129,
      lng: -122.4195709,
      name: 'Acute A-frame Cabin w/ WiFi, close drive to lake!',
      description: 'Cindy and Franks place is a comfortable, spacious studio with a private entrance, and all the comforts of home.',
      price: 159
     },
     {
     ownerId: 3,
     address: '99 GolenSpring St',
     city: 'Big Bear',
     state: 'CA',
     country: 'United States',
     lat: 40.7022646,
     lng: -82.4919588,
     name: 'Acute A-frame Cabin w/ WiFi, close drive to lake! #2',
     description: 'Open French doors to a wooden dining patio overlooking the Olympic Clubs golf course and Pacific skyline.',
     price: 288.00
    },
    {
     ownerId: 3,
     address: '246 3rd Street',
     city:'Los Angeles',
     state: 'CA',
     country: 'United States',
     lat: 40.801928,
     lng: -85.410182,
     name: 'The Half, A Metro-Accessible Designer Tiny House#2',
     description: 'Our social and vibrant hostel in downtown SF is the place to stay!',
     price: 455
    },
    {
     ownerId: 4,
     address: '3056 Winery Street',
     city:'Malibu',
     state: 'CA',
     country: 'United States',
     lat: 40.7733612,
     lng: -85.507919,
     name: 'Ocean Beach Getaway in Malibu',
     description: 'Great Ocean Beach location, nearly 800 square ft (70 square meter) private guest suite.',
     price: 521
    },
    {
     ownerId: 4,
     address: '305 Rodeo Ave',
     city:'Malibu',
     state: 'CA',
     country: 'United States',
     lat: 40.7456129,
     lng: -85.4195709,
     name: 'Cindy & Franks Place in Malibu',
     description: 'Cindy and Franks place is a comfortable, spacious studio with a private entrance, and all the comforts of home.',
     price: 659
    },
    {
      ownerId: 1,
      address: '123 Northgate Ave',
      city: 'Daly City',
      state: 'CA',
      country: 'United States',
      lat: 38.7022646,
      lng: -142.4919588,
      name: 'Clean and cozy place#3',
      description: 'Open French doors to a wooden dining patio overlooking the Olympic Clubs golf course and Pacific skyline.',
      price: 288.00
     },
     {
      ownerId: 1,
      address: '3155 E Vallejo St.',
      city:'San Francisco',
      state: 'CA',
      country: 'United States',
      lat: 38.801928,
      lng: -142.410182,
      name: 'Clean and cozy place #4',
      description: 'Our social and vibrant hostel in downtown SF is the place to stay!',
      price: 145
     },
     {
      ownerId: 2,
      address: '75757575757 7th St.',
      city:'San Francisco',
      state: 'CA',
      country: 'United States',
      lat: 38.7733612,
      lng: -142.507919,
      name: 'Ocean Beach Getaway#3',
      description: 'Great Ocean Beach location, nearly 800 square ft (70 square meter) private guest suite.',
      price: 321
     },
     {
      ownerId: 2,
      address: '31313131313 Mission St',
      city:'San Francisco',
      state: 'CA',
      country: 'United States',
      lat: 38.7456129,
      lng: -142.4195709,
      name: 'Cindy & Franks Place#3',
      description: 'Cindy and Franks place is a comfortable, spacious studio with a private entrance, and all the comforts of home.',
      price: 159
     },
     {
      ownerId: 3,
      address: '1322 Sound Of The Wind St.',
      city: 'Chino Hills',
      state: 'CA',
      country: 'United States',
      lat: 32.7022646,
      lng: -152.4919588,
      name: 'Beautiful single family house in Chino Hills#3',
      description: 'Open French doors to a wooden dining patio overlooking the Olympic Clubs golf course and Pacific skyline.',
      price: 288.00
     },
     {
      ownerId: 3,
      address: '13422 Sound Of Wind Ave.',
      city:'Chino Hills',
      state: 'CA',
      country: 'United States',
      lat: 32.801928,
      lng: -152.410182,
      name: 'Beautiful single family house in Chino Hills #4',
      description: 'Our social and vibrant hostel in downtown SF is the place to stay!',
      price: 455
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
