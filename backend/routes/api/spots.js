const express = require('express');
const router = express.Router();

const { User, Spot, SpotImage, Review, sequelize } = require('../../db/models');
// HELPER FUNCTION??
// async function avgRating() {
//   let allSpots = await Spot.findAll();

//   let spotsArr = []

//   for(let i = 0; i< allSpots.length; i++){
//     let spotObj = allSpots[i].toJSON();
//     let currentId = allSpots[i].id;

//     let avgRating = await Review.findByPk(currentId, {
//         attributes: [[sequelize.fn('AVG', sequelize.col("stars")), 'avgRating']]
//     })
//     spotObj.avgRating = avgRating.dataValues.avgRating
//   }
// }

//Get all Spots
router.get('/', async (req, res, next) => {
  let allSpots = await Spot.findAll();

  let spotsArr = []

  for(let i = 0; i< allSpots.length; i++){
    let spotObj = allSpots[i].toJSON();
    let currentId = allSpots[i].id;

    let avgRating = await Review.findByPk(currentId, {
        attributes: [[sequelize.fn('AVG', sequelize.col("stars")), 'avgRating']]
    })
    spotObj.avgRating = avgRating.dataValues.avgRating

    const previewImageUrl = await SpotImage.findByPk(currentId, {
        where: { preview: true },
        attributes: ['url']
    })
    spotObj.prevewImage = previewImageUrl.url

    spotsArr.push(spotObj)
  }

  return res.json({
    Spots: spotsArr
  })

})

//Get all Spots owned by the Current User
router.get('/current', async (req, res, next) => {
  const { user } = req;
  const currentId = user.toJSON().id;

  const allSpotsforCurrOwner = await Spot.findAll({where: {ownerId: currentId}});

  let spotsArr = [];

  for(let i = 0; i< allSpotsforCurrOwner.length; i++){
    let SpotsObj = allSpotsforCurrOwner[i].toJSON()
    let currSpotId = allSpotsforCurrOwner[i].id;

    let avgRating = await Review.findByPk(currSpotId, {
        attributes: [[sequelize.fn('AVG', sequelize.col("stars")), 'avgRating']]
    })
    SpotsObj.avgRating = avgRating.dataValues.avgRating

    let previewImageUrl = await SpotImage.findByPk(currSpotId, {
        where: { preview: true },
        attributes: ['url']
    })
    SpotsObj.prevewImage = previewImageUrl.url

    spotsArr.push(SpotsObj)
  }

  return res.json({
    Spots: spotsArr
  })

})

//Get details of a Spot from an id
router.get('/:spotId', async (req, res, next) => {
  const currSpotId = parseInt(req.params.spotId);

  if (!currSpotId) {
    res.status(404)
    .json({
      "message": "Spot couldn't be found",
      "statusCode": 404
    })
  }

  const theSpot = await Spot.findByPk(currSpotId);
  const theSpotObj = theSpot.toJSON();

  const avgStarRating = await Review.findOne({
    where: { spotId: currSpotId },
    attributes: [[sequelize.fn('AVG', sequelize.col("stars")), 'avgStarRating']]
  })
  theSpotObj.avgStarRating = avgStarRating.dataValues.avgStarRating;

  const spotImages = await SpotImage.findAll({
    where: { spotId: currSpotId },
    attributes: ['id', 'url', 'preview']
  })
  theSpotObj.SpotImages = spotImages;

  const owner = await User.findByPk(currSpotId, {
    attributes: ['id', 'firstName', 'lastName']
  })
  theSpotObj.Owner = owner;

  res.json(theSpotObj)

})

//Create a Spot
router.post('/', async (req, res, next) => {
  try {
   const { address, city, state, country, lat, lng, name, description, price } = req.body;
   const { user } = req;
   const currUserId = user.toJSON().id;

   const newSpot = await Spot.create({ ownerId: currUserId, address, city, state, country, lat, lng, name, description, price })

   res.json(newSpot);
  } catch(err) {
    res.json({
      "message": "Validation Error",
      "statusCode": 400,
      "errors": {
        "address": "Street address is required",
        "city": "City is required",
        "state": "State is required",
        "country": "Country is required",
        "lat": "Latitude is not valid",
        "lng": "Longitude is not valid",
        "name": "Name must be less than 50 characters",
        "description": "Description is required",
        "price": "Price per day is required"
      }
    })
  }
})

//Add an Image to a Spot based on the Spot's id
router.post('/:spotId/images', async (req, res, next) => {
  const { url } = req.body;
  const currSpotId = parseInt(req.params.spotId);

  const currSpot = await Spot.findByPk(currSpotId);
  if (!currSpot) {
    res.status(404)
       .json({
         "message": "Spot couldn't be found",
         "statusCode": 404
       })
  }

  const newImage = await SpotImage.create({
    spotId: currSpotId,
    url: url
  })
  const result = await SpotImage.findOne({
    where: {url: url},
    attributes: ['id', 'url']
  })
  res.json(result)
})

module.exports = router;


/* EAGER LOADING Get all Spots*/
// const allSpots = await Spot.findAll();
// let spotArray = [];
// for (let i = 0; i < allSpots.length; i++) {
  //   let spotId = allSpots[i].id;
  //     const avgRating = await Spot.findByPk(spotId, {
    //       attributes: {
      //         include: [
        //           [
          //             sequelize.fn('AVG', sequelize.col('Reviews.stars')),
          //             'avgRating'
          //           ]
          //         ]
          //       },
          //       include: {
            //         model: Review,
            //         attributes: []
            //       }
            //     })

            //     const avgRatingObj = avgRating.toJSON();
            //     const previewImageUrl = await SpotImage.findByPk(spotId, {
              //       where: { preview: true },
              //       attributes: ['url']
              //     })
              //     console.log(previewImageUrl)
              //     avgRatingObj["prevewImage"] = previewImageUrl.url
              //     spotArray.push(avgRatingObj)
              //   }
              //   res.json({'Spots': spotArray})
