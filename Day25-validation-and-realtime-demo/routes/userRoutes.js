const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

// POST /api/users/register
router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters"),
  ],
  (req, res) => {
    const errors = validationResult(req);

    // If validation errors → return JSON errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    return res.json({
      message: "User registered successfully!",
      user: { name, email }
    });
  }
);

// Test route
router.get("/", (req, res) => {
  res.json({
    message: "User API working!",
    users: ["Amirtha", "Varshini"]
  });
});

module.exports = router;
