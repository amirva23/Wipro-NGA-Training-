const { body } = require("express-validator");

exports.registerValidation = [
  body("username")
    .notEmpty().withMessage("Username is required")
    .isLength({ min: 3 }).withMessage("Username must be at least 3 chars"),

  body("email")
    .isEmail().withMessage("Valid email is required"),

  body("password")
    .isLength({ min: 6 }).withMessage("Password must be at least 6 chars")
];
