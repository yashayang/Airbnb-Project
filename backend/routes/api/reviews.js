const express = require('express');
const router = express.Router();

const { User, Spot, SpotImage, Review, sequelize, ReviewImage } = require('../../db/models');

//Get all Reviews of the Current User
router.get('/current', async (req, res, next) => {
  const { user } = req;
  const currUserId = user.toJSON().id;

  const currUser = await User.findByPk(currUserId);
  const Reviews = await Review.findAll({
    where: { userId: currUserId },
    include: [
      {
        model: User,
        attributes: ['id', 'firstName', 'lastName']
      },
      {
        model: Spot,
        attributes: {
          exclude: ['description', 'createdAt', 'updatedAt']
        },
        include: {
          model: SpotImage, //as: 'SpotImages', //as: 'previewImage',
          where: {
            preview: true
          },
          limit: 1,
          attributes: ['url']
        }
      },
      {
        model: ReviewImage,
        attributes: ['id', 'url']
      }
    ]
  });


  // res.json()
  res.json({Reviews: Reviews})

  for (let i = 0; i < Reviews.length; i++) {
    let currReview = Reviews[i].toJSON();

    currReview.User = user;

    let currSpotId = currReview.spotId;
    const currSpot = await Spot.findByPk(currSpotId, {
      attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price']
    });
    currReview.Spot = currSpot;

    const currSpotImage = await SpotImage.findAll({
      where: { spotId: currSpotId },
      attributes: ['id', 'url']
    })
    currReview.SpotImage = currSpotImage;

  }

})

//Add an Image to a Review based on the Review's id
router.post('/:reviewId/images', async (req, res, next) => {
  const reviewId = parseInt(req.params.reviewId);
  const { url } = req.body;

  const currReview = await Review.findByPk(reviewId);
  if (!currReview) {
    res.status(404)
       .json({
       "message": "Review couldn't be found",
       "statusCode": 404
       })
  }

  const images = await ReviewImage.findAll({ where: { reviewId: reviewId } })
  if (images.length >= 10) {
    res.status(403)
       .json({
       "message": "Maximum number of images for this resource was reached",
       "statusCode": 403
       })
  }

  const newImage = await ReviewImage.create({
    reviewId: reviewId,
    url: url
  })

  const result = await ReviewImage.findOne({
    where: {url: url},
    attributes: ['id', 'url']
  })

  res.json(result)
})


//Edit a Review
router.put('/:reviewId', async(req, res, next) => {
  const reviewId = parseInt(req.params.reviewId);
  const { review, stars } = req.body;
  const { user } = req;
  const currUserId = user.toJSON().id;
  const currReview = await Review.findByPk(reviewId);
  if (!currReview) {
    res.status(404)
    .json({
      "message": "Review couldn't be found",
      "statusCode": 404
    })
  }

  if (!review || isNaN(stars)) {
    res.status(400)
    .json({
     "message": "Validation error",
     "statusCode": 400,
     "errors": {
       "review": "Review text is required",
       "stars": "Stars must be an integer from 1 to 5",
     }
   })
  }

  currReview.update({ review, stars });
  res.json(currReview)
})

//Delete a Review
router.delete('/:reviewId', async (req, res, next) => {
  const reviewId = parseInt(req.params.reviewId);
  const currReview = await Review.findByPk(reviewId);
  if (!currReview) {
    res.status(404)
    .json({
      "message": "Review couldn't be found",
      "statusCode": 404
    })
  }

  currReview.destroy();
  res.json({
    "message": "Successfully deleted",
    "statusCode": 200
  });

})


module.exports = router;
