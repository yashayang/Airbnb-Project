const express = require('express');
const router = express.Router();
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { requireAuth } = require('../../utils/auth');
const { check, param } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Op } = require("sequelize");

const { Booking, User, Spot, SpotImage, Review, sequelize, ReviewImage } = require('../../db/models');

const validateSpot = [
  check('address').exists({ checkFalsy: true }).notEmpty().withMessage('Street address is required'),
  check('city').notEmpty().withMessage('City is required'),
  check('state').notEmpty().withMessage('State is required'),
  check('country').notEmpty().withMessage('Country is required'),
  check('lat').isDecimal().isLength({min: 2}, {max: 10}).withMessage('Latitude is not valid'),
  check('lng').isDecimal().isLength({min: 2}, {max: 11}).withMessage('Longitude is not valid'),
  check('name').notEmpty().withMessage('Name must be less than 50 characters'),
  check('description').notEmpty().withMessage('Description is required'),
  check('price').isDecimal().withMessage('Price per day is required'),
  check('url').notEmpty().withMessage('Url cannot be empty').isURL().withMessage('Url is not valid'),
  handleValidationErrors
];

const validateSpotEdit = [
  check('address').exists({ checkFalsy: true }).notEmpty().withMessage('Street address is required'),
  check('city').notEmpty().withMessage('City is required'),
  check('state').notEmpty().withMessage('State is required'),
  check('country').notEmpty().withMessage('Country is required'),
  check('lat').isDecimal().isLength({min: 2}, {max: 10}).withMessage('Latitude is not valid'),
  check('lng').isDecimal().isLength({min: 2}, {max: 11}).withMessage('Longitude is not valid'),
  check('name').notEmpty().withMessage('Name must be less than 50 characters'),
  check('description').notEmpty().withMessage('Description is required'),
  check('price').isDecimal().withMessage('Price per day is required'),
  handleValidationErrors
];

const validateReview = [
  check("review")
    .exists({ checkFalsy: true })
    .withMessage("Review text is required"),
  check("stars")
    .exists({ checkFalsy: true })
    .withMessage("Stars must be an integer from 1 to 5"),
  check('url')
    .notEmpty()
    .withMessage('Url cannot be empty')
    .isURL()
    .withMessage('Url is not valid'),
  handleValidationErrors,
];


//Get all Spots
router.get('/', async (req, res, next) => {
  let { page, size, minLat, maxLat, minLng, maxLng, minPrice, maxPrice } = req.query;
  if (!size) { size = 20 };
  if (!page) { page = 1 };

  let pagination = {};
  if (page >= 1 && size >= 1 && page <= 10 && size <= 20) {
      pagination.limit = size;
      pagination.offset = size * (page - 1);
  } else {
    pagination.limit = 20;
    pagination.offset = 180;
  }

  let queryOptions = [];
    if (minLat) {
      queryOptions.push({
        lat: { [Op.gte]: Number(minLat) },
      });
    }

    if (maxLat) {
      queryOptions.push({
        lat: { [Op.lte]: Number(maxLat) },
      });
    }

    if (minLng) {
      queryOptions.push({
        lng: { [Op.gte]: Number(minLng) },
      });
    }

    if (maxLng) {
      queryOptions.push({
        lat: { [Op.lte]: Number(maxLng) },
      });
    }

    if (minPrice) {
      queryOptions.push({
        price: { [Op.gte]: Number(minPrice) },
      });
    }

    if (maxPrice) {
      queryOptions.push({
        price: { [Op.lte]: Number(maxPrice) },
      });
    };

  let allSpots = await Spot.findAll({
    where: {
      [Op.and]: queryOptions,
    },
     ...pagination
  });

  let spotsArr = []

  for(let i = 0; i< allSpots.length; i++){
    let spotObj = allSpots[i].toJSON();
    let currentId = allSpots[i].id;

    let avgRating = await Review.findByPk(currentId, {
        attributes: [[sequelize.fn('AVG', sequelize.col("stars")), 'avgRating']]
    })
    const rawAvgRating = avgRating.dataValues.avgRating;
    spotObj.avgRating = Number.parseInt(rawAvgRating).toFixed(1);

    const previewImageUrl = await SpotImage.findAll({
        where: { spotId: currentId, preview: true },
        attributes: ['url'],
        limit: 1
    })

    if (previewImageUrl[0]) {
      spotObj.prevewImage = previewImageUrl[0].url
    } else {
      spotObj.prevewImage = null;
    }

    spotsArr.push(spotObj)
  }


  return res.json({
    Spots: spotsArr,
    page,
    size
  })

})

//Get all Spots owned by the Current User
router.get('/current', requireAuth, async (req, res, next) => {
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
    const rawAvgRating = avgRating.dataValues.avgRating;
    SpotsObj.avgRating = Number.parseInt(rawAvgRating).toFixed(1);

    let previewImageUrl = await SpotImage.findAll({
      where: { spotId: currSpotId, preview: true },
      attributes: ['url'],
      limit: 1
    })

    if (previewImageUrl[0]) {
      SpotsObj.prevewImage = previewImageUrl[0].url
    } else {
      SpotsObj.prevewImage = null;
    }

    spotsArr.push(SpotsObj)
  }

  return res.json({
    Spots: spotsArr
  })

})

//Get details of a Spot from an id
router.get('/:spotId', async (req, res, next) => {
  const currSpotId = parseInt(req.params.spotId);

  const currSpot = await Spot.findByPk(currSpotId);
  if (!currSpot) {
    return res.status(404)
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
  const rawAvgRating = avgStarRating.dataValues.avgStarRating;
  theSpotObj.avgStarRating = Number.parseInt(rawAvgRating).toFixed(1);

  const spotImages = await SpotImage.findAll({
    where: { spotId: currSpotId },
    attributes: ['id', 'url', 'preview']
  })
  theSpotObj.SpotImages = spotImages;

  const owner = await User.findByPk(theSpotObj.ownerId, {
    attributes: ['id', 'firstName', 'lastName']
  })
  theSpotObj.Owner = owner;

  return res.json(theSpotObj)

})

//Create a Spot
router.post('/', requireAuth, validateSpot, async (req, res, next) => {
   const { address, city, state, country, lat, lng, name, description, price } = req.body;
   const { user } = req;
   const currUserId = user.toJSON().id;

   const newSpot = await Spot.create({ ownerId: currUserId, address, city, state, country, lat, lng, name, description, price })

   res.json(newSpot);

})

//Add an Image to a Spot based on the Spot's id
router.post('/:spotId/images', requireAuth, async (req, res, next) => {
  const { url } = req.body;
  const currSpotId = parseInt(req.params.spotId);

  const currSpot = await Spot.findByPk(currSpotId);
  if (!currSpot) {
    return res.status(404)
       .json({
         "message": "Spot couldn't be found",
         "statusCode": 404
       })
  }
  if (req.user.id === currSpot.toJSON().ownerId) {
    const newImage = await SpotImage.scope("spotImg").create({
      spotId: currSpotId,
      url: url
    })

    return res.json(newImage.toSafeObject())
  } else {
    return res.status(403)
    .json({
      "message": "You can only add images to the spot as a owner.",
      "statusCode": 403
    })
  }
})

//Edit a Spot
router.put('/:spotId', requireAuth, validateSpotEdit, async (req, res, next) => {

  const currSpotId = parseInt(req.params.spotId);
  const currSpot = await Spot.findByPk(currSpotId);
  // console.log("========================", currSpot)
  if (!currSpot) {
    return res.status(404)
    .json({
      "message": "Spot couldn't be found",
      "statusCode": 404
    })
  }

  if(currSpot.ownerId !== req.user.id){
    return res.status(403)
        .json({
        "message": "Request denied: You are not the owner of this spot.",
        "statusCode": 403
    });
}

  const { address, city, state, country, lat, lng, name, description, price } = req.body;

  currSpot.update({ address, city, state, country, lat, lng, name, description, price });
  // const updatedSpot = await Spot.findByPk(currSpotId, {
  //   include: [SpotImage, {
  //     model: User,
  //     attributes: ['id', 'firstName', 'lastName']
  //   }]
  //   // updatedSpot.SpotImages = updatedSpot.SpotImage
  // });

  const updatedSpot = await Spot.findByPk(currSpotId, {
    include: SpotImage
    // updatedSpot.SpotImages = updatedSpot.SpotImage
  });
  const owner = await User.findByPk(updatedSpot.ownerId, {
    attributes: ['id', 'firstName', 'lastName']
  })
  const updatedSpotJSON = updatedSpot.toJSON();
  // updatedSpot["Owner"] = {...updatedSpot.User};
  updatedSpotJSON.Owner = owner;
  // delete updatedSpot.User;

  // console.log("========================", updatedSpotJSON)
  return res.json(updatedSpotJSON);

})

//Delete a Spot
router.delete('/:spotId', requireAuth, async (req, res, next) => {
  const currSpotId = parseInt(req.params.spotId);
  const currSpot = await Spot.findByPk(currSpotId);

  if (!currSpot) {
    return res.status(404)
    .json({
      "message": "Spot couldn't be found",
      "statusCode": 404
    })
  }

  if(currSpot.ownerId !== req.user.id){
    return res.status(403)
        .json({
        "message": "Request denied: You are not the owner of this spot.",
        "statusCode": 403
    });
  }

  currSpot.destroy();
  return res.json({
    "message": "Successfully deleted",
    "statusCode": 200
  });

})


//Get all Reviews by a Spot's id
router.get('/:spotId/reviews', async (req, res, next) => {
  const currSpotId = parseInt(req.params.spotId);

  const currSpot = await Spot.findByPk(currSpotId);
  if (!currSpot) {
    return res.status(404)
       .json({
        "message": "Spot couldn't be found",
        "statusCode": 404
      })
  }

  const allReviews = await Review.findAll({ where: { spotId: currSpotId } })

  let reviewsArr = [];
  for (let i = 0; i < allReviews.length; i++) {
    let currReview = allReviews[i].toJSON();
    let currUserId = currReview.userId;

    const currUser = await User.findByPk(currUserId, {attributes: ['id', 'firstName', 'lastName']});
    currReview.User = currUser;

    const currReviewImgs = await ReviewImage.findAll({
      where: { reviewId: currReview.id },
      attributes: ['id', 'url']
    })
    currReview.ReviewImages = currReviewImgs;

    reviewsArr.push(currReview)
  }

  return res.json({ Reviews: reviewsArr })

})

//Create a Review for a Spot based on the Spot's id
router.post('/:spotId/reviews', requireAuth, validateReview, async (req, res, next) => {
  const currSpotId = parseInt(req.params.spotId);
  const { user } = req;
  const currUserId = user.toJSON().id;
  // console.log(currUserId)
  const currSpot = await Spot.findByPk(currSpotId);
  // console.log("!!!!!!!BACKEND-currSpot:", currSpot)

  if (!currSpot) {
    return res.status(404)
       .json({
        "message": "Spot couldn't be found",
        "statusCode": 404
      })
  }


  const { review, stars } = req.body;
  // console.log("!!!!!!!BACKEND-Req.body:", req.body)
  if (stars > 5 || stars < 1) {
    const err = new Error("Stars must be an integer from 1 to 5")
    err.title = 'Validation error';
    err.status = 400;
    return next(err)
  }

  const existReview = await Review.findOne({ where: { userId: currUserId, spotId: currSpotId } })
  if (existReview) {
    return res.status(403)
       .json({
        "message": "User already has a review for this spot",
        "statusCode": 403
      })
  }

  const newReview = await Review.create({ userId: currUserId, spotId: currSpotId, review, stars });
  const findNewReview = await Review.findOne({ where: { spotId: currSpotId } })

  return res.json(findNewReview)

})

//Get all Bookings for a Spot based on the Spot's id
router.get('/:spotId/bookings', requireAuth, async (req, res, next) => {
  const spotId = parseInt(req.params.spotId);
  const { user } = req;
  const userId = user.toJSON().id;
  const spot = await Spot.findByPk(spotId);

  if (!spot) {
    return res.status(404)
    .json({
      "message": "Spot couldn't be found",
      "statusCode": 404
    })
  }

  const ownerId = spot.toJSON().ownerId;
  if (userId !== ownerId) {
    const allBookings = await Booking.findAll({
      where: { spotId: spotId },
      attributes: ['spotId', 'startDate', 'endDate']
    })
    return res.json({Bookings: allBookings})
  }

  let bookingsArr = [];
  if (userId === ownerId) {
    const allBookings = await Booking.findAll({ where: { spotId: spotId } })
    for (let i = 0; i < allBookings.length; i++) {
      let currBooking = allBookings[i].toJSON();
      let ownerInfo = await User.findByPk(userId, { attributes: ['id', 'firstName', 'lastName']});
      currBooking.User = ownerInfo;
      bookingsArr.push(currBooking);
    }
    return res.json({Bookings: bookingsArr})
  }

})

//Create a Booking from a Spot based on the Spot's id
//date validation helper function
function dateValidation(startdate1, enddate1, startdate2, enddate2) {

  if (startdate1 >= startdate2 && startdate1 <= enddate2) return false;

  if (enddate1 >= startdate2 && enddate1 <= enddate2) return false;

  if (startdate1 <= startdate2 && enddate1 >= enddate2) return false;

  return true;
}

router.post('/:spotId/bookings', requireAuth, async(req, res, next) => {
  const spotId = parseInt(req.params.spotId);
  const spot = await Spot.findByPk(spotId);
  if (!spot) {
    return res.status(404)
    .json({
      "message": "Spot couldn't be found",
      "statusCode": 404
    })
  }
  if (spot.toJSON().ownerId === req.user.id) {
    return res.status(403)
        .json({
        "message": "You cannot create booking for your own property!",
        "statusCode": 403
    })
  }

  const { startDate, endDate } = req.body;
  if ( endDate < startDate ) {
    return res.status(400)
       .json({
        "message": "Validation error",
        "statusCode": 400,
        "errors": {
          "endDate": "endDate cannot be on or before startDate"
        }
      })
  }

  const booking = await Booking.findAll({where: {spotId: spotId, startDate: new Date(startDate), endDate: new Date(endDate)}});

  if (booking[0] || !dateValidation(startDate, endDate, booking.startDate, booking.endDate)) {
    return res.status(403)
    .json({
      "message": "Sorry, this spot is already booked for the specified dates",
      "statusCode": 403,
      "errors": {
        "startDate": "Start date conflicts with an existing booking",
        "endDate": "End date conflicts with an existing booking"
      }
    })
  }

  const { user } = req;
  const userId = user.toJSON().id;
  const newBooking = await Booking.create({ spotId: spotId, userId: userId, startDate, endDate })
  const result = await Booking.findOne({ where: { spotId: spotId, userId: userId}})

  return res.json(result)

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
