const express = require('express');
const router = express.Router();

const { Booking, User, Spot, SpotImage, Review, sequelize, ReviewImage } = require('../../db/models');

//Delete a Spot Image
router.delete('/:imageId', async (req, res, next) => {
  const imageId = parseInt(req.params.imageId);
  const { user } = req;
  const currUserId = user.id;
  const currImg = await SpotImage.findByPk(imageId);
  if (!currImg) {
    res.status(404)
       .json({
        "message": "Spot Image couldn't be found",
        "statusCode": 404
      })
  }
  const ownerInfo = await Spot.findByPk(currImg.toJSON().spotId, {
      attributes: ['ownerId']
  })
  const ownerId = ownerInfo.toJSON().ownerId;

  if (currUserId === ownerId) {
    currImg.destroy();
    res.json({
      "message": "Successfully deleted",
      "statusCode": 200
    })
  } else {
    res.status(403)
    .json({
      "message": "You can only delete the spot as a owner.",
      "statusCode": 403
    })
  }
})



module.exports = router;
