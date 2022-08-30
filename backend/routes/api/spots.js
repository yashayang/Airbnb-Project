const express = require('express');
const router = express.Router();

const { Spot, SpotImage, Review, sequelize } = require('../../db/models');

router.get('/', async (req, res, next) => {
  /* EAGER LOADING */
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

  let spots = await Spot.findAll({
    attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'description', 'price', 'createdAt', 'updatedAt']
  });

  let newArray = []
  let SpotsObj
  let avgRating
  for(let i = 0; i< spots.length; i++){
    SpotsObj = spots[i].toJSON()
    avgRating = await Review.findAll({
        where: {
            spotId: spots[i].id
        },
        attributes: [[sequelize.fn('AVG', sequelize.col("stars")), 'avgRating']]
    })
    SpotsObj.avgRating = avgRating[0].dataValues.avgRating
    const previewImageUrl = await SpotImage.findByPk(spots[i].id, {
        where: { preview: true },
        attributes: ['url']
    })

    SpotsObj["prevewImage"] = previewImageUrl.url
    newArray.push(SpotsObj)
  }

  return res.json({
    Spots: newArray
  })

})


router.get('/current', async (req, res, next) => {
  const { user } = req;
  // console.log(user.toJSON().id)
  const allSpotsforOwner = await Spot.findByPk(user.toJSON().id, {

  });
  res.json(allSpotsforOwner)
})

module.exports = router;
