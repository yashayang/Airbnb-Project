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


//Edit a Booking
//date validation helper function
function dateValidation(startdate1, enddate1, startdate2, enddate2) {

  if (startdate1 >= startdate2 && startdate1 <= enddate2) return false;

  if (enddate1 >= startdate2 && enddate1 <= enddate2) return false;

  if (startdate1 <= startdate2 && enddate1 >= enddate2) return false;

  return true;
}

router.put('/:bookingId', async (req, res, next) => {
  const bookingId = parseInt(req.params.bookingId)
  const { user } = req;
  const currUserId = user.toJSON().id;
  const currBooking = await Booking.findByPk(bookingId);
  if (!currBooking) {
    res.status(404)
    .json({
      "message": "Booking couldn't be found",
      "statusCode": 404
    })
  }

  const { startDate, endDate } = req.body;
  if (endDate < startDate) {
    res.status(400)
    .json({
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "endDate": "endDate cannot be on or before startDate"
      }
    })
  }
  let q = new Date();
  let m = q.getMonth()+1;
  let d = q.getUTCDate();
  let y = q.getFullYear();
  const today = `${y}-${m}-${d}`;

  if (startDate <= today) {
    res.status(403)
    .json({
      "message": "Past bookings can't be modified",
      "statusCode": 403
    })
  }

  const allBookingForCurrSpot = await Booking.findAll({ where: { spotId: currBooking.spotId} })

  for (let i = 0; i < allBookingForCurrSpot.length; i++) {
    let currBooking = allBookingForCurrSpot[i].toJSON();
    if (!dateValidation(startDate, endDate, currBooking.startDate, currBooking.endDate)) {
      res.status(403)
      .json({
        "message": "Requested booking date is not available, please check the avaliabilites, and change to a validate date!",
        "statusCode": 403
      })
    }
  }

  const bookingUserId = currBooking.userId;
  if (currUserId === bookingUserId) {
    currBooking.update({ startDate, endDate })
    res.json(currBooking)
  }

})







module.exports = router;
