const express = require('express');
const router = express.Router();

const { Spot, SpotImage, Review, sequelize } = require('../../db/models');

router.get('/', async (req, res, next) => {
  const allSpots = await Spot.findAll();
  // let spotArray = allSpots.map( async (spot) => {
  // })
  let spotArray = [];
  for (let i = 0; i < allSpots.length; i++) {
    let spotId = allSpots[i].id;
      const avgRating = await Spot.findByPk(spotId, {
        attributes: {
          include: [
            [
              sequelize.fn('AVG', sequelize.col('Reviews.stars')),
              'avgRating'
            ]
          ]
        },
        include: {
          model: Review,
          attributes: []
        }
      })
      const avgRatingObj = avgRating.toJSON();
      const previewImageUrl = await SpotImage.findByPk(spotId, {
        where: { preview: true },
        attributes: ['url']
      })
      console.log(previewImageUrl)
      avgRatingObj["prevewImage"] = previewImageUrl.url
      // res.send(avgRatingObj)
      // res.send(avgRating.toJSON().prevewImage)
      spotArray.push(avgRatingObj)
    }


    res.json({'Spots': spotArray})
})

router.get('/current', async (req, res, next) => {
  const { user } = req;
  // console.log(user.toJSON().id)
  const allSpotsforOwner = await Spot.findOne( {where: { ownerId: user.toJSON().id}});
  res.json(allSpotsforOwner)
})

module.exports = router;
