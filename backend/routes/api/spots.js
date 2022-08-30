



const express = require('express');
const router = express.Router();

const { Spot, SpotImages, Review } = require('../../db/models');

router.get('/', async (req, res, next) => {
  const allSpots = await Spot.findAll();
  const avgRating

  res.json(allSpots)
})

router.get('/current', async (req, res, next) => {
  const { user } = req;
  // console.log(user.toJSON().id)
  const allSpotsforOwner = await Spot.findOne( {where: { ownerId: user.toJSON().id}});
  res.json(allSpotsforOwner)
})

module.exports = router;
