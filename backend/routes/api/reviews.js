const express = require('express');
const router = express.Router();

const { User, Spot, SpotImage, Review, sequelize, ReviewImage } = require('../../db/models');

//Get all Reviews of the Current User
router.get('/:userId', async (req, res, next) => {
  const currentId = parseInt(req.params.userId);
  const user = await User.findByPk(currentId);
  const Reviews = await Review.findAll({
    where: { userId: currentId }
  });

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

    res.json(currReview)
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


module.exports = router;
