const express = require('express');
const router = express.Router();

const { Booking, User, Spot, SpotImage, Review, sequelize, ReviewImage } = require('../../db/models');

//Delete a Review Image
router.delete('/:imageId', async (req, res, next) => {
  const imageId = parseInt(req.params.imageId);
  const { user } = req;
  const currUserId = user.id;
  const currImg = await ReviewImage.findByPk(imageId);
  if (!currImg) {
    res.status(404)
    .json({
      "message": "Spot Image couldn't be found",
      "statusCode": 404
    })
  }
  const userInfo = await Review.findOne({
      where: { id: currImg.reviewId },
      attributes: ['userId']
  })
  const userId = userInfo.toJSON().userId;

  if (currUserId === userId) {
    currImg.destroy();
    res.json({
      "message": "Successfully deleted",
      "statusCode": 200
    })
  } else {
    res.status(403)
    .json({
      "message": "You cannot delete reviews from other user.",
      "statusCode": 403
    })
  }
})




module.exports = router;
