const express = require('express');
const router = express.Router();

const { Spot, SpotImage, Review, sequelize } = require('../../db/models');

//Get all Spots
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

  let allSpots = await Spot.findAll();

  let spotsArr = []

  for(let i = 0; i< allSpots.length; i++){
    let spotObj = allSpots[i].toJSON();
    let currentId = allSpots[i].id;

    let avgRating = await Review.findByPk(currentId, {
        attributes: [[sequelize.fn('AVG', sequelize.col("stars")), 'avgRating']]
    })
    spotObj.avgRating = avgRating.dataValues.avgRating

    const previewImageUrl = await SpotImage.findByPk(currentId, {
        where: { preview: true },
        attributes: ['url']
    })
    spotObj.prevewImage = previewImageUrl.url

    spotsArr.push(spotObj)
  }

  return res.json({
    Spots: spotsArr
  })

})

//Get all Spots owned by the Current User
router.get('/current', async (req, res, next) => {
  const { user } = req;
  const currentId = user.toJSON().id;

  const allSpotsforCurrOwner = await Spot.findAll({where: {ownerId: currentId}});

  let spotsArr = [];

  for(let i = 0; i< allSpotsforCurrOwner.length; i++){
    let SpotsObj = allSpotsforCurrOwner[i].toJSON()
    let currSpotId = allSpotsforCurrOwner[i].id;

    let avgRating = await Review.findByPk(currSpotId, {
        attributes: [[sequelize.fn('AVG', sequelize.col("stars")), 'avgRating']]
    })
    SpotsObj.avgRating = avgRating.dataValues.avgRating

    let previewImageUrl = await SpotImage.findByPk(currSpotId, {
        where: { preview: true },
        attributes: ['url']
    })
    SpotsObj.prevewImage = previewImageUrl.url

    spotsArr.push(SpotsObj)
  }

  return res.json({
    Spots: spotsArr
  })

})

module.exports = router;
