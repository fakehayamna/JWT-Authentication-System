const express = require("express");

const router = express.Router();

const { register, login } = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");
const User = require("../models/User");

// Public Register Route
router.post("/register", register);

// Public Login Route
router.post("/login", login);

// Public Route
router.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Public route accessible",
  });
});

// Protected Route
router.get("/profile", protect, async (req, res) => {
  res.json({
    success: true,
    message: "Protected route accessed successfully",
    user: req.user,
  });
});

module.exports = router;