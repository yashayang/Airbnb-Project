'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Spots', [
      {
      ownerId: 1,
      address: '237 Northgate Ave',
      city: 'Boulder',
      state: 'Colorado',
      country: 'United States',
      lat: 37.7022646,
      lng: -122.4919588,
      name: 'Luxe Boulder Barrett House on Mtn Peak w/Hot Tub',
      description: 'There is no better place to experience Colorado than at Barrett House, a spectacular 3-bedroom, 3-bathroom vacation rental in beautiful Boulder! Nestled at an elevation of 7,000 feet on a scenic 3-acre mountain peak in the foothills, this stunning home borders Roosevelt National Forest, ensuring endless outdoor activities right outside the door. With a fireplace, theatre room, and unique decor, this lovely home promises a memorable getaway with your fellow outdoor-loving friends and family!',
      price: 614.00
     },
     {
      ownerId: 1,
      address: '475 Jallejo St.',
      city:'Paraty',
      state: 'Rio de Janeiro',
      country: 'Brazil',
      lat: 37.801928,
      lng: -122.410182,
      name: 'Swim Under a Private Waterfall at a Tranquil Forest Haven',
      description: 'Sip a refreshing glass of the natural spring water, then take a dip in the secluded natural pool at this nature-inspired, architectural masterpiece in the forests heart. Pick bananas, look for monkeys and watch blue butterflies fluttering by too.“We made a house with love and respect for nature, investing in sustainable technological solutions.”– Marko, your host',
      price: 165
     },
     {
      ownerId: 2,
      address: '77 S 2rd Ave',
      city:'Stege',
      state: 'Denmark',
      country: 'Denmark',
      lat: 37.7733612,
      lng: -122.507919,
      name: 'modern fairytale holiday home',
      description: 'architect-designed holiday home for the discerning and design-proven guest. beautiful views of the countryside. close to the beach. Other things to note linen and towels can be rented for 100kr per person. electricity consumption is settled after departure with 4.00kr per kwh',
      price: 104
     },
     {
      ownerId: 2,
      address: '3199 Mission St',
      city:'Rancho Wueimado',
      state: 'Santa Cararina',
      country: 'Brazil',
      lat: 37.7456129,
      lng: -122.4195709,
      name: 'Vitra Cabin with hot tub and spectacular view',
      description: 'A design cabin at 1200 meters high, with architecture unlike anything youve ever seen, the Vitra Cabin, with its wide glass that overlooks the mountains, boasts a spectacular view of the mountains and sunsets. Located in Quinta Alta Vista @quintaaltavista, a large farm with lots of nature, the Cabana is part of a complex of properties, each with its own private garden and plenty of independence. Come and meet the most amazing Cabana of the Serra Catarinense!',
      price: 161
     },
     {
     ownerId: 3,
     address: '237237 Southgate Ave',
     city: 'Malibu',
     state: 'CA',
     country: 'United States',
     lat: 36.7022646,
     lng: -82.4919588,
     name: 'Rockpoint by AvantStay | Beachfront Home w/ Ocean Views & Private Beach Access',
     description: 'Embrace the quintessential California character of this beachfront home that rests on the rocky shores of the Pacific Ocean. Experience jaw-dropping sunset views and the ambiance of waves crashing upon the shore. Glass sliding doors open to a full-width balcony that features a grill and outdoor dining setup, the perfect setting for toasting one of Malibus finest wines. The interior boasts a bright and homey coastal vibe with a plethora of light that encapsulates the home.',
     price: 476
    },
    {
     ownerId: 3,
     address: '455455 Mission St.',
     city:'Malibu',
     state: 'CA',
     country: 'United States',
     lat: 36.801928,
     lng: -85.410182,
     name: 'Beautiful single family house in Irvine #2',
     description: 'Modern & spacious guest suite, spectacular ocean views. Giant sliding glass doors on two walls completely open the space. The line between inside and outside melts away to create a uniquely relaxing experience & unbeatable views of Malibu.',
     price: 456
    },
    {
     ownerId: 4,
     address: '757757 W 5th Ave',
     city:'Jenner',
     state: 'CA',
     country: 'United States',
     lat: 36.7733612,
     lng: -85.507919,
     name: 'Pacific Sunset Peaceful Panoramic Pacific Coast',
     description: 'Pacific Sunset vacation home is the perfect place to go to get away from it all and popular for one or two couples offering one bedroom w/queen bed and detached master suite w/king bed. Amenities include a well-equipped kitchen, grill, hot tub, fireplace, room to watch DVD movies, a Juicebox-Procar 40 Amp electric car fast charger is available along with Starlink Internet: 150+ mbps',
     price: 600
    },
    {
     ownerId: 4,
     address: '3099 Spring St',
     city:'Malibu',
     state: 'CA',
     country: 'United States',
     lat: 36.7456129,
     lng: -85.4195709,
     name: 'Malibu Mid-Century Modern Studio with Ocean Views',
     description: 'Welcome to our gorgeous Malibu getaway with spectacular ocean views.  Nestled in the peaceful Santa Monica Mountains just a few minutes drive to Californias most famous beaches.  Amazing hiking trails, world-class restaurants, and shopping close by.',
     price: 341
    },
    {
      ownerId: 1,
      address: '123 Sunset Ave',
      city: 'Hidale',
      state: 'Utah',
      country: 'United States',
      lat: 38.7022646,
      lng: -142.4919588,
      name: 'Zion EcoCabin : Zion A-Frame',
      description: 'Soak up the sun and unwind in the Zion A-Frame. The unique convertible door lets the indoor comforts of this cozy cabin blend seamlessly with the stunning nature of the South Zion Mountains. The A-Frame living space is expansive - an open air concept to reconnect human and nature, allowing you to enjoy the natural world around you.',
      price: 645
     },
     {
      ownerId: 1,
      address: '455 Vallejo St.',
      city:'Stowe',
      state: 'Vermont',
      country: 'United States',
      lat: 38.801928,
      lng: -142.410182,
      name: 'The Summit House - remodeled unique A-frame',
      description: 'Welcome to The Summit House, a completely renovated A-Frame cabin less than 1 mile to downtown Stowe. Wake up to views of the morning light casting through the forest from your glass wall bedroom. Relax after a day exploring the mountains in the huge spa style rainfall shower. Settle down after dinner around the modern wood burning fireplace while watching your favorite shows on the 50" TV. Its not just a rental, its an experience. The latest addition to the OM Home Residences collection.',
      price: 558
     },
     {
      ownerId: 2,
      address: '75 47th Ave',
      city:'Fairbanks',
      state: 'Alaska',
      country: 'United States',
      lat: 38.7733612,
      lng: -142.507919,
      name: 'Aurora Villa 御墅极光 D2B(1)Deluxe double bed Room',
      description: 'Aurora Villa modern house 5 stars,Total have 7 rooms only, if want to book more rooms,Please contact host',
      price: 528
     },
     {
      ownerId: 2,
      address: '31 Mission St',
      city:'Forde',
      state: 'Vestland fylke',
      country: 'Norway',
      lat: 38.7456129,
      lng: -142.4195709,
      name: 'Amazing view of fjord & mountains glamping Birdbox',
      description: 'Relax, rejuvenate and unplug in this unique contemporary Birdbox. Feel close to nature in ultimate comfort. Enjoy the view of the epic mountain range of Blegja and the Førdefjord. Feel the true Norwegian countryside calmness of birds chirping, rivers flowing and trees in the wind. Explore the countryside area, walk down to the fjord and take a swim, hike the surrounding mountains, relax with a good book & meditate. Enjoy the unique Birdbox experience.',
      price: 331
     }
    //  {
    //   ownerId: 3,
    //   address: '3056 Giant Forest Loop',
    //   city: 'Chino Hills',
    //   state: 'CA',
    //   country: 'United States',
    //   lat: 32.7022646,
    //   lng: -152.4919588,
    //   name: 'Beautiful single family house in Chino Hills',
    //   description: 'Open French doors to a wooden dining patio overlooking the Olympic Clubs golf course and Pacific skyline.',
    //   price: 288.00
    //  },
    //  {
    //   ownerId: 3,
    //   address: '13299 Giant Forest Loop',
    //   city:'Chino Hills',
    //   state: 'CA',
    //   country: 'United States',
    //   lat: 32.801928,
    //   lng: -152.410182,
    //   name: 'Beautiful single family house in Chino Hills #2',
    //   description: 'Our social and vibrant hostel in downtown SF is the place to stay!',
    //   price: 455
    //  },
    //  {
    //   ownerId: 4,
    //   address: '456 47th Ave',
    //   city:'Newport Beach',
    //   state: 'CA',
    //   country: 'United States',
    //   lat: 32.7733612,
    //   lng: -152.507919,
    //   name: 'Ocean Beach Getaway in Newport Beach',
    //   description: 'Great Ocean Beach location, nearly 800 square ft (70 square meter) private guest suite.',
    //   price: 1021
    //  },
    //  {
    //   ownerId: 4,
    //   address: '456 Mission St',
    //   city:'Newport Beach',
    //   state: 'CA',
    //   country: 'United States',
    //   lat: 32.7456129,
    //   lng: -152.4195709,
    //   name: 'Cindy & Franks Place in Newport Beach',
    //   description: 'Cindy and Franks place is a comfortable, spacious studio with a private entrance, and all the comforts of home.',
    //   price: 839
    //  },
    //  {
    //   ownerId: 1,
    //   address: '12345 Wine Country St.',
    //   city: 'Temecula',
    //   state: 'CA',
    //   country: 'United States',
    //   lat: 40.7022646,
    //   lng: -122.4919588,
    //   name: 'Tiny home hosted by Leslie & Kelli',
    //   description: 'Open French doors to a wooden dining patio overlooking the Olympic Clubs golf course and Pacific skyline.',
    //   price: 288.00
    //  },
    //  {
    //   ownerId: 1,
    //   address: '45 Rock Stone St.',
    //   city:'Temecula',
    //   state: 'CA',
    //   country: 'United States',
    //   lat: 40.801928,
    //   lng: -122.410182,
    //   name: 'Tiny home hosted by Leslie & Kelli #2',
    //   description: 'Our social and vibrant hostel in downtown SF is the place to stay!',
    //   price: 45
    //  },
    //  {
    //   ownerId: 2,
    //   address: '135 3rd Street',
    //   city:'Los Angeles',
    //   state: 'CA',
    //   country: 'United States',
    //   lat: 40.7733612,
    //   lng: -122.507919,
    //   name: 'The Half, A Metro-Accessible Designer Tiny House',
    //   description: 'Great Ocean Beach location, nearly 800 square ft (70 square meter) private guest suite.',
    //   price: 321
    //  },
    //  {
    //   ownerId: 2,
    //   address: '3199 Big Pine Tree St',
    //   city:'Big Bear',
    //   state: 'CA',
    //   country: 'United States',
    //   lat: 40.7456129,
    //   lng: -122.4195709,
    //   name: 'Acute A-frame Cabin w/ WiFi, close drive to lake!',
    //   description: 'Cindy and Franks place is a comfortable, spacious studio with a private entrance, and all the comforts of home.',
    //   price: 159
    //  },
    //  {
    //  ownerId: 3,
    //  address: '99 GolenSpring St',
    //  city: 'Big Bear',
    //  state: 'CA',
    //  country: 'United States',
    //  lat: 40.7022646,
    //  lng: -82.4919588,
    //  name: 'Acute A-frame Cabin w/ WiFi, close drive to lake! #2',
    //  description: 'Open French doors to a wooden dining patio overlooking the Olympic Clubs golf course and Pacific skyline.',
    //  price: 288.00
    // },
    // {
    //  ownerId: 3,
    //  address: '246 3rd Street',
    //  city:'Los Angeles',
    //  state: 'CA',
    //  country: 'United States',
    //  lat: 40.801928,
    //  lng: -85.410182,
    //  name: 'The Half, A Metro-Accessible Designer Tiny House#2',
    //  description: 'Our social and vibrant hostel in downtown SF is the place to stay!',
    //  price: 455
    // },
    // {
    //  ownerId: 4,
    //  address: '3056 Winery Street',
    //  city:'Malibu',
    //  state: 'CA',
    //  country: 'United States',
    //  lat: 40.7733612,
    //  lng: -85.507919,
    //  name: 'Ocean Beach Getaway in Malibu',
    //  description: 'Great Ocean Beach location, nearly 800 square ft (70 square meter) private guest suite.',
    //  price: 521
    // },
    // {
    //  ownerId: 4,
    //  address: '305 Rodeo Ave',
    //  city:'Malibu',
    //  state: 'CA',
    //  country: 'United States',
    //  lat: 40.7456129,
    //  lng: -85.4195709,
    //  name: 'Cindy & Franks Place in Malibu',
    //  description: 'Cindy and Franks place is a comfortable, spacious studio with a private entrance, and all the comforts of home.',
    //  price: 659
    // },
    // {
    //   ownerId: 1,
    //   address: '123 Northgate Ave',
    //   city: 'Daly City',
    //   state: 'CA',
    //   country: 'United States',
    //   lat: 38.7022646,
    //   lng: -142.4919588,
    //   name: 'Clean and cozy place#3',
    //   description: 'Open French doors to a wooden dining patio overlooking the Olympic Clubs golf course and Pacific skyline.',
    //   price: 288.00
    //  },
    //  {
    //   ownerId: 1,
    //   address: '3155 E Vallejo St.',
    //   city:'San Francisco',
    //   state: 'CA',
    //   country: 'United States',
    //   lat: 38.801928,
    //   lng: -142.410182,
    //   name: 'Clean and cozy place #4',
    //   description: 'Our social and vibrant hostel in downtown SF is the place to stay!',
    //   price: 145
    //  },
    //  {
    //   ownerId: 2,
    //   address: '75757575757 7th St.',
    //   city:'San Francisco',
    //   state: 'CA',
    //   country: 'United States',
    //   lat: 38.7733612,
    //   lng: -142.507919,
    //   name: 'Ocean Beach Getaway#3',
    //   description: 'Great Ocean Beach location, nearly 800 square ft (70 square meter) private guest suite.',
    //   price: 321
    //  },
    //  {
    //   ownerId: 2,
    //   address: '31313131313 Mission St',
    //   city:'San Francisco',
    //   state: 'CA',
    //   country: 'United States',
    //   lat: 38.7456129,
    //   lng: -142.4195709,
    //   name: 'Cindy & Franks Place#3',
    //   description: 'Cindy and Franks place is a comfortable, spacious studio with a private entrance, and all the comforts of home.',
    //   price: 159
    //  },
    //  {
    //   ownerId: 3,
    //   address: '1322 Sound Of The Wind St.',
    //   city: 'Chino Hills',
    //   state: 'CA',
    //   country: 'United States',
    //   lat: 32.7022646,
    //   lng: -152.4919588,
    //   name: 'Beautiful single family house in Chino Hills#3',
    //   description: 'Open French doors to a wooden dining patio overlooking the Olympic Clubs golf course and Pacific skyline.',
    //   price: 288.00
    //  },
    //  {
    //   ownerId: 3,
    //   address: '13422 Sound Of Wind Ave.',
    //   city:'Chino Hills',
    //   state: 'CA',
    //   country: 'United States',
    //   lat: 32.801928,
    //   lng: -152.410182,
    //   name: 'Beautiful single family house in Chino Hills #4',
    //   description: 'Our social and vibrant hostel in downtown SF is the place to stay!',
    //   price: 455
    //  }
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
