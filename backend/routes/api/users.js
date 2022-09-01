// backend/routes/api/users.js
const express = require('express')

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSignup = [
  check('firstName')
    .exists({ checkFalsy: true })
    .isLength({ min: 1 })
    .withMessage('Please provide a valid first name.'),
  check('lastName')
    .exists({ checkFalsy: true })
    .isLength({ min: 1 })
    .withMessage('Please provide a valid last name.'),
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

router.post('/', validateSignup, async (req, res) => {

  const { firstName, lastName, email, password, username } = req.body;

  //Error response: User already exists with the specified email
  const existedEmail = await User.findOne({ where: {email} });
  if (existedEmail) {
    res.status(403)
    res.json({
      "message": "User already exists",
      "statusCode": 403,
      "errors": {
        "email": "User with that email already exists"
      }
    })
  }


  //Error response: User already exists with the specified username
  const existedUsername = await User.findOne({ where: {username} });
  if (existedUsername) {
    res.status(403)
       .json({
      "message": "User already exists",
      "statusCode": 403,
      "errors": {
        "username": "User with that username already exists"
      }
    })
  }

  //Error response: Body validation errors
  // console.log(email)
  // if (!{email} && !{username} && !{firstName} && !{lastName}) {
  //   res.json({
  //     "message": "Validation error",
  //     "statusCode": 400,
  //     "errors": {
  //       "email": "Invalid email",
  //       "username": "Username is required",
  //       "firstName": "First Name is required",
  //       "lastName": "Last Name is required"
  //     }
  //   })
  // }
try{
  const user = await User.signup({ firstName, lastName, email, password, username });

  const token = await setTokenCookie(res, user);

  const userJson = user.toJSON();
  userJson.token = token;

  return res.json({
    userJson
  });
}catch(err){
  res.status(400)
  .json({
    "message": "Validation error",
    "statusCode": 400,
    "errors": {
      "email": "Invalid email",
      "username": "Username is required",
      "firstName": "First Name is required",
      "lastName": "Last Name is required"
 }
})
}
});


module.exports = router;
