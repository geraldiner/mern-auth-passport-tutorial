const express = require("express");
const router = express.Router();
const { postSignup } = require("../controllers/auth");

// @desc    Process sign up form
// @route   POST /auth/signup
router.use("/signup", postSignup);

module.exports = router;
