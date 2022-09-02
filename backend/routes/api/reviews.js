const express = require('express');
const router = express.Router();
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { User, Spot, SpotImage, Review, sequelize, ReviewImage } = require('../../db/models');

//Get all Reviews of the Current User
router.get('/current', requireAuth, async (req, res, next) => {
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
        attributes: { exclude: ['description', 'createdAt', 'updatedAt'] },
        include: {
          model: SpotImage, //as: 'previewImage', //as: 'SpotImages',
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

  for (let i = 0; i < Reviews.length; i++) {
    let currentReview = Reviews[i].toJSON();
    let currPreviewImg = currentReview.Spot.SpotImages[0];

    if (currPreviewImg){
      currentReview.Spot.previewImage = currPreviewImg.url;
    } else {
      currentReview.Spot.previewImage = null;
    }

    delete currentReview.Spot.SpotImages;

    Reviews[i] = currentReview
}

  res.json({Reviews: Reviews})
})

//Add an Image to a Review based on the Review's id
router.post('/:reviewId/images', requireAuth, async (req, res, next) => {
  const reviewId = parseInt(req.params.reviewId);
  const { url } = req.body;

  const currReview = await Review.findByPk(reviewId);
  if (!currReview) {
    return res.status(404)
       .json({
       "message": "Review couldn't be found",
       "statusCode": 404
       })
  }

  if (currReview.toJSON().userId !== req.user.id) {
    return res.status(403);
    res.json({
        "message": "The review is not belongs to current user!",
        "statusCode": 403
    })
  }

  const images = await ReviewImage.findAll({ where: { reviewId: reviewId } })
  if (images.length >= 10) {
    return res.status(403)
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
router.put('/:reviewId', requireAuth, async(req, res, next) => {
  const reviewId = parseInt(req.params.reviewId);
  const { review, stars } = req.body;
  const { user } = req;
  const currUserId = user.toJSON().id;
  const currReview = await Review.findByPk(reviewId);
  if (!currReview) {
    return res.status(404)
    .json({
      "message": "Review couldn't be found",
      "statusCode": 404
    })
  }

  if (currReview.toJSON().userId !== req.user.id) {
    return res.status(403)
        .json({
        "message": "The review is not belongs to current user!",
        "statusCode": 403
    })
  }

  if (!review || isNaN(stars)) {
    return res.status(400)
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
router.delete('/:reviewId', requireAuth, async (req, res, next) => {
  const reviewId = parseInt(req.params.reviewId);
  const currReview = await Review.findByPk(reviewId);
  if (!currReview) {
    return res.status(404)
    .json({
      "message": "Review couldn't be found",
      "statusCode": 404
    })
  }

  if (currReview.toJSON().userId !== req.user.id) {
    return res.status(403);
    res.json({
        "message": "The review is not belongs to current user!",
        "statusCode": 403
    })
  }

  currReview.destroy();
  return res.json({
    "message": "Successfully deleted",
    "statusCode": 200
  });

})


module.exports = router;


//Get all Reviews of the Current User: LAZY LOADING
  // for (let i = 0; i < Reviews.length; i++) {
  //   let currReview = Reviews[i].toJSON();

  //   currReview.User = user;

  //   let currSpotId = currReview.spotId;
  //   const currSpot = await Spot.findByPk(currSpotId, {
  //     attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price']
  //   });
  //   currReview.Spot = currSpot;

  //   const currSpotImage = await SpotImage.findAll({
  //     where: { spotId: currSpotId },
  //     attributes: ['id', 'url']
  //   })
  //   currReview.SpotImage = currSpotImage;

  // }
