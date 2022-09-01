const express = require('express');
const router = express.Router();
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { Booking, User, Spot, SpotImage, Review, sequelize, ReviewImage } = require('../../db/models');

//Delete a Spot Image
router.delete('/:imageId', requireAuth, async (req, res, next) => {
  const imageId = parseInt(req.params.imageId);
  const { user } = req;
  const currUserId = user.id;
  const currImg = await SpotImage.findByPk(imageId);
  if (!currImg) {
    return res.status(404)
       .json({
        "message": "Spot Image couldn't be found",
        "statusCode": 404
      })
  }
  const ownerInfo = await Spot.findByPk(currImg.toJSON().spotId)
  const ownerId = ownerInfo.toJSON().ownerId;

  if (currUserId === ownerId) {
    currImg.destroy();
    return res.json({
      "message": "Successfully deleted",
      "statusCode": 200
    })
  } else {
    return res.status(403)
    .json({
      "message": "You can only delete the spot as a owner.",
      "statusCode": 403
    })
  }
})



module.exports = router;
