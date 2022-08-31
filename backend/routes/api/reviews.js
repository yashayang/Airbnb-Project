const express = require('express');
const router = express.Router();

const { User, Spot, SpotImage, Review, sequelize } = require('../../db/models');

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



module.exports = router;
