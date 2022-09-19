// backend/utils/validation.js
const { validationResult } = require('express-validator');

// middleware for formatting errors from express-validator middleware
// (to customize, see express-validator's documentation)
const handleValidationErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);
  console.log("error ",validationErrors)
  if (!validationErrors.isEmpty()) {
    const errors = validationErrors
      .array()  //turn something to an array
      .map((error) => `${error.msg}`);

    const err = Error('Bad request.');
    err.errors = errors;
    err.status = 400;
    err.title = 'Bad request.';
    next(err);
  }
  next();
};

module.exports = { handleValidationErrors };

// const handleDataValidationErrors = (req, res, next) => {
//   const validationErrors = validationResult(req);
// console.log("error ",validationErrors)
//   if (!validationErrors.isEmpty()) {
//     const obj = {};
//      validationErrors.array().map((error) => {
//            let key = error.param
//            obj[`${error.param}`] = error.msg;
//       });
//       res.statusCode = 400;
//       return res.json({
//                 message: "Validation Error",
//                 statusCode: 400,
//                 errors: { ... obj}
//          })
//   }
//   next();

// };
