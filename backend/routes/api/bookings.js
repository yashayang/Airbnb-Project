const express = require('express');
const router = express.Router();

const { Booking, User, Spot, SpotImage, Review, sequelize, ReviewImage } = require('../../db/models');

//Get all of the Current User's Bookings
router.get('/current', async (req, res, next) => {
  const { user } = req;
  const currUserId = user.toJSON().id;

  const allBookings = await Booking.findAll({
    where: { userId: currUserId}
  })
  let boookingsArr = [];
  for(let i = 0; i < allBookings.length; i++) {
    let currBooking = allBookings[i].toJSON();
    let currSpotId = currBooking.spotId;
    let currPreviewImg = await SpotImage.findByPk(currSpotId, {
      where: { preview: true },
      attributes: ['url']
    })
    let currSpot = await Spot.findByPk(currSpotId, {attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price']});
    let currSpotObj = currSpot.toJSON();
    currSpotObj.previewImage = currPreviewImg.url;
    currBooking.Spot = currSpotObj;
    boookingsArr.push(currBooking);
  }

  res.json({Bookings: boookingsArr})
})









module.exports = router;
